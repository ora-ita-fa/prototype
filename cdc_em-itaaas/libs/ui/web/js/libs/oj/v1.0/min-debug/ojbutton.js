define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$16$$, $$$$16$$) {
  (function() {
    function $_radioGroup$$($radio$$, $$elems$$) {
      var $name$$94_selector$$16$$ = $radio$$.name, $$radios_form$$1$$ = $radio$$.form;
      $name$$94_selector$$16$$ ? ($name$$94_selector$$16$$ = $name$$94_selector$$16$$.replace(/'/g, "\\'"), $name$$94_selector$$16$$ = ":radio[name\x3d'" + $name$$94_selector$$16$$ + "']:oj-button", $$radios_form$$1$$ = $$elems$$ ? $$elems$$.filter($name$$94_selector$$16$$) : $$radios_form$$1$$ ? $$$$16$$($$radios_form$$1$$).find($name$$94_selector$$16$$) : $$$$16$$($name$$94_selector$$16$$, $radio$$.ownerDocument).filter(function() {
        return!this.form
      })) : $$radios_form$$1$$ = ($$elems$$ ? $$elems$$.filter($radio$$) : $$$$16$$($radio$$)).filter(":oj-button");
      return $$radios_form$$1$$
    }
    $oj$$16$$.$__registerWidget$("oj.ojButton", $$$$16$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cbutton\x3e", widgetEventPrefix:"oj", options:{disabled:null, display:"all", label:null, icons:{start:null, end:"auto"}, menu:null}, _create:function() {
      this.element.closest("form").unbind("reset" + $BUTTON_EVENT_NAMESPACE$$).bind("reset" + $BUTTON_EVENT_NAMESPACE$$, function() {
        var $form$$ = $$$$16$$(this);
        setTimeout(function() {
          $form$$.find(":oj-button").each(function() {
            $$$$16$$(this).data("oj-ojButton").$_applyCheckedStateFromDom$(!1)
          }).length || $form$$.unbind("reset" + $BUTTON_EVENT_NAMESPACE$$)
        }, 1)
      });
      "boolean" !== typeof this.options.disabled && (this.options.disabled = !!this.element.prop("disabled"));
      this.$menuEventNamespace$ = this.eventNamespace + "menu";
      this.$_initButtonTypes$();
      this.$hasTitle$ = !!this.$rootElement$.attr("title");
      var $self$$67$$ = this, $options$$262$$ = this.options, $toggleButton$$ = "checkbox" === this.type || "radio" === this.type, $activeClass$$ = $toggleButton$$ ? "" : "oj-active";
      this.$rootElement$.addClass($BASE_CLASSES$$);
      this.$buttonElement$.bind("mouseenter" + this.eventNamespace, function() {
        $options$$262$$.disabled || (this === $_lastActive$$ && $self$$67$$.$rootElement$.addClass("oj-active"), $self$$67$$.$rootElement$.addClass("oj-hover").removeClass("oj-default"))
      }).bind("mouseleave" + this.eventNamespace, function() {
        $self$$67$$.$rootElement$.removeClass("oj-hover");
        $options$$262$$.disabled || ($self$$67$$.$rootElement$.removeClass($activeClass$$), $self$$67$$.$_addOrRemoveOJDefaultClass$())
      }).bind("click" + this.eventNamespace, function($event$$153$$) {
        $options$$262$$.disabled && ($event$$153$$.preventDefault(), $event$$153$$.stopImmediatePropagation())
      });
      this.element.attr("role", "button").bind("focus" + this.eventNamespace, function() {
        $self$$67$$.$rootElement$.addClass("oj-focus").removeClass("oj-default")
      }).bind("blur" + this.eventNamespace, function() {
        $self$$67$$.$rootElement$.removeClass("oj-focus");
        $self$$67$$.$_addOrRemoveOJDefaultClass$()
      });
      $toggleButton$$ && (this.element.bind("change" + this.eventNamespace, function($event$$154$$) {
        $self$$67$$.$_applyCheckedStateFromDom$(!0);
        var $buttonset$$ = $$$$16$$(this).closest(":oj-buttonset").data("oj-ojButtonset"), $checkedState$$ = $buttonset$$ && $buttonset$$.$_getCheckedFromDom$($buttonset$$.$$buttons$);
        $buttonset$$ && void 0 !== $checkedState$$ && ($buttonset$$.$_optionChangeOriginalEvent$ = $event$$154$$, $buttonset$$._setOption("checked", $checkedState$$))
      }), this.$buttonElement$.bind("mousedown" + this.eventNamespace, function() {
        $options$$262$$.disabled || ($_lastToggleActive$$ = this, $self$$67$$.document.one("mouseup", function() {
          $_lastToggleActive$$ = null
        }))
      }).bind("mouseup" + this.eventNamespace, function() {
        $options$$262$$.disabled || this !== $_lastToggleActive$$ || $self$$67$$.element.focus()
      }));
      "checkbox" === this.type ? (this.$buttonElement$.bind("click" + this.eventNamespace, function() {
        if($options$$262$$.disabled) {
          return!1
        }
      }), this.element.bind("keyup" + this.eventNamespace, function($event$$158$$) {
        $event$$158$$.keyCode === $$$$16$$.ui.keyCode.ENTER && ($options$$262$$.disabled || $self$$67$$.element.click())
      })) : "radio" === this.type ? (this.$buttonElement$.bind("click" + this.eventNamespace, function() {
        if($options$$262$$.disabled) {
          return!1
        }
      }), this.element.bind("keyup" + this.eventNamespace, function($event$$159$$) {
        $event$$159$$.keyCode !== $$$$16$$.ui.keyCode.ENTER || ($self$$67$$.element[0].checked || $options$$262$$.disabled) || ($self$$67$$.element[0].checked = !0, $self$$67$$.element.change(), $self$$67$$.element.click())
      })) : (this.$buttonElement$.bind("mousedown" + this.eventNamespace, function($event$$160$$) {
        if($options$$262$$.disabled) {
          return!1
        }
        1 === $event$$160$$.which && ($$$$16$$(this).addClass("oj-active").removeClass("oj-default"), $_lastActive$$ = this, $self$$67$$.document.one("mouseup", function() {
          $_lastActive$$ = null
        }))
      }).bind("mouseup" + this.eventNamespace, function() {
        if($options$$262$$.disabled) {
          return!1
        }
        $$$$16$$(this).removeClass("oj-active");
        $self$$67$$.$_addOrRemoveOJDefaultClass$()
      }).bind("keydown" + this.eventNamespace, function($event$$161$$) {
        if($options$$262$$.disabled) {
          return!1
        }
        $event$$161$$.keyCode !== $$$$16$$.ui.keyCode.SPACE && $event$$161$$.keyCode !== $$$$16$$.ui.keyCode.ENTER || $$$$16$$(this).addClass("oj-active").removeClass("oj-default")
      }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
        $$$$16$$(this).removeClass("oj-active");
        $self$$67$$.$_addOrRemoveOJDefaultClass$()
      }), this.$buttonElement$.is("a") && this.$buttonElement$.bind("keyup" + this.eventNamespace, function($event$$162$$) {
        $event$$162$$.keyCode === $$$$16$$.ui.keyCode.SPACE && $$$$16$$(this).click()
      }));
      this._setOption("disabled", $options$$262$$.disabled);
      this.$_handleLabelAndIconsAtCreateTime$();
      this.$_setupMenuButton$();
      this.$_addOrRemoveOJDefaultClass$();
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
      "checkbox" === this.type || "radio" === this.type ? ($checked_labelSelector$$ = "label[for\x3d'" + this.element.attr("id") + "']", this.$buttonElement$ = this.element.siblings().filter($checked_labelSelector$$).addClass("oj-button-label"), this.element.addClass("oj-helper-hidden-accessible").add(this.$buttonElement$).wrapAll("\x3cspan\x3e\x3c/span\x3e"), this.$rootElement$ = this.element.parent(), ($checked_labelSelector$$ = this.element[0].checked) && this.$rootElement$.addClass("oj-selected").removeClass("oj-default"), 
      this.element.attr("aria-pressed", $checked_labelSelector$$)) : this.$rootElement$ = this.$buttonElement$ = this.element
    }, widget:$JSCompiler_get$$("$rootElement$"), _destroy:function() {
      this.$_removeMenuBehavior$();
      this.element.removeClass("oj-helper-hidden-accessible").removeAttr("role").removeAttr("aria-pressed");
      var $isToggle$$ = "checkbox" === this.type || "radio" === this.type;
      $isToggle$$ || this.$rootElement$.removeClass($BASE_CLASSES$$ + " " + $STATE_CLASSES$$ + " " + $TYPE_CLASSES$$);
      this.$buttonElement$.html(this.$buttonElement$.find(".oj-button-text").html());
      $isToggle$$ ? (this.$buttonElement$.removeClass("oj-button-label"), this.element.unwrap()) : this.$hasTitle$ || this.$rootElement$.removeAttr("title");
      $_lastToggleActive$$ === this.$buttonElement$[0] && ($_lastToggleActive$$ = null)
    }, _setOption:function($key$$78$$, $value$$169$$) {
      this._super($key$$78$$, $value$$169$$);
      switch($key$$78$$) {
        case "disabled":
          $value$$169$$ = !!$value$$169$$;
          this.element.is("a") || (this.element.prop("disabled", $value$$169$$), this.widget().toggleClass("oj-enabled", !$value$$169$$), this.$rootElement$.removeAttr("aria-disabled"));
          $value$$169$$ ? (this.widget().removeClass("oj-active oj-default"), this.$_dismissMenu$(null, null, !0)) : this.$_addOrRemoveOJDefaultClass$();
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
        var $$radioWidget$$ = $$$$16$$(this).data("oj-ojButton");
        this.checked ? ($$radioWidget$$.$rootElement$.addClass("oj-selected").removeClass("oj-default"), $$radioWidget$$.element.attr("aria-pressed", "true")) : ($$radioWidget$$.$rootElement$.removeClass("oj-selected"), $$radioWidget$$.$_addOrRemoveOJDefaultClass$(), $$radioWidget$$.element.attr("aria-pressed", "false"))
      }) : "checkbox" === this.type && (this.element[0].checked ? (this.$rootElement$.addClass("oj-selected").removeClass("oj-default"), this.element.attr("aria-pressed", "true")) : (this.$rootElement$.removeClass("oj-selected"), this.$_addOrRemoveOJDefaultClass$(), this.element.attr("aria-pressed", "false")))
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
      var $buttonElement$$ = this.$buttonElement$, $textSpan$$1$$ = $$$$16$$("\x3cspan class\x3d'oj-button-text'\x3e\x3c/span\x3e", this.document[0]);
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
      $appIconClass$$ ? ($iconSpan$$.length ? $iconSpan$$.removeClass(this[$lastIvar$$]) : $iconSpan$$ = $$$$16$$("\x3cspan\x3e\x3c/span\x3e").addClass($isStart_standardIconClass$$)[$pendTo$$](this.$buttonElement$), $iconSpan$$.addClass($appIconClass$$)) : $iconSpan$$.remove();
      this[$lastIvar$$] = $appIconClass$$;
      return!!$appIconClass$$
    }, $_getEndIconOption$:function() {
      var $icons$$1$$ = this.options.icons;
      return"auto" === $icons$$1$$.end ? this.$_getMenu$() ? "oj-component-icon oj-button-menu-dropdown-icon" : null : $icons$$1$$.end
    }, $_setDisplayOptionOnDom$:function($buttonText_textSpan$$3$$, $buttonClass_hasStartIcon$$2$$, $atLeastOneIcon_hasEndIcon$$2$$) {
      void 0 === $buttonText_textSpan$$3$$ && ($buttonText_textSpan$$3$$ = this.$buttonElement$.find(".oj-button-text"));
      void 0 === $buttonClass_hasStartIcon$$2$$ && ($buttonClass_hasStartIcon$$2$$ = !!this.options.icons.start);
      void 0 === $atLeastOneIcon_hasEndIcon$$2$$ && ($atLeastOneIcon_hasEndIcon$$2$$ = !!this.$_getEndIconOption$());
      var $multipleIcons$$ = $buttonClass_hasStartIcon$$2$$ && $atLeastOneIcon_hasEndIcon$$2$$;
      $atLeastOneIcon_hasEndIcon$$2$$ = $buttonClass_hasStartIcon$$2$$ || $atLeastOneIcon_hasEndIcon$$2$$;
      var $displayIsIcons$$ = "icons" === this.options.display;
      $atLeastOneIcon_hasEndIcon$$2$$ && $displayIsIcons$$ ? ($buttonText_textSpan$$3$$.addClass("oj-helper-hidden-accessible"), this.$hasTitle$ || ($buttonText_textSpan$$3$$ = $buttonText_textSpan$$3$$.text(), this.$rootElement$.attr("title", $$$$16$$.trim($buttonText_textSpan$$3$$)))) : ($buttonText_textSpan$$3$$.removeClass("oj-helper-hidden-accessible"), this.$hasTitle$ || this.$rootElement$.removeAttr("title"));
      $buttonClass_hasStartIcon$$2$$ = $atLeastOneIcon_hasEndIcon$$2$$ ? $displayIsIcons$$ ? $multipleIcons$$ ? "oj-button-icons-only" : "oj-button-icon-only" : $multipleIcons$$ ? "oj-button-text-icons" : $buttonClass_hasStartIcon$$2$$ ? "oj-button-text-icon-start" : "oj-button-text-icon-end" : "oj-button-text-only";
      this.$rootElement$.removeClass($TYPE_CLASSES$$).addClass($buttonClass_hasStartIcon$$2$$)
    }, $_setupMenuButton$:function() {
      this.$_removeMenuBehavior$();
      var $menu$$3$$ = this.$_getMenu$();
      if($menu$$3$$) {
        var $self$$68$$ = this;
        this.element.attr("aria-haspopup", !0).on("keydown" + this.$menuEventNamespace$, function($event$$163$$) {
          return $event$$163$$.which === $$$$16$$.ui.keyCode.DOWN ? ($self$$68$$.$_showMenu$($event$$163$$, "firstItem", $menu$$3$$), !1) : $event$$163$$.which === $$$$16$$.ui.keyCode.ESCAPE ? ($self$$68$$.$_dismissMenu$($event$$163$$, $menu$$3$$), !1) : !0
        }).on("click" + this.$menuEventNamespace$, function($event$$164$$) {
          $menu$$3$$.$__spaceEnterDownInMenu$ || $self$$68$$.$_toggleMenu$($event$$164$$, $menu$$3$$);
          return $menu$$3$$.$__spaceEnterDownInMenu$ = !1
        });
        $menu$$3$$.widget().on("oj__dismiss" + this.$menuEventNamespace$, function($event$$165$$) {
          $self$$68$$.$_menuDismissHandler$($event$$165$$)
        }).on("ojbeforeshow" + this.$menuEventNamespace$, function($event$$166$$) {
          $self$$68$$.$_launchingMenu$ || $self$$68$$.$_menuDismissHandler$($event$$166$$);
          $self$$68$$.$_launchingMenu$ = !1
        })
      }
    }, $_removeMenuBehavior$:function() {
      this.element.removeAttr("aria-haspopup").off(this.$menuEventNamespace$)
    }, $_getMenu$:function() {
      var $menu$$4$$ = this.options.menu;
      $menu$$4$$ && ($menu$$4$$ = $$$$16$$($menu$$4$$).data("oj-ojMenu"));
      return $menu$$4$$ && this.element.not("input") ? $menu$$4$$ : null
    }, $_showMenu$:function($event$$167$$, $focus$$, $menu$$5$$) {
      this.options.disabled || ($menu$$5$$ || ($menu$$5$$ = this.$_getMenu$()), $menu$$5$$ && (this.$rootElement$.addClass("oj-selected").removeClass("oj-default"), this.$_launchingMenu$ = !0, $menu$$5$$.show($event$$167$$, {launcher:this.element, focus:$focus$$}), this.$_menuVisible$ = !0))
    }, $_dismissMenu$:function($event$$168$$, $menu$$6$$, $force$$) {
      if($force$$ || !this.options.disabled) {
        $menu$$6$$ || ($menu$$6$$ = this.$_getMenu$()), $menu$$6$$ && $menu$$6$$.$__dismiss$($event$$168$$)
      }
    }, $_menuDismissHandler$:function() {
      "button" === this.type && (this.$rootElement$.removeClass("oj-selected"), this.$_addOrRemoveOJDefaultClass$());
      this.$_menuVisible$ = !1
    }, $_toggleMenu$:function($event$$170$$, $menu$$7$$) {
      this.$_menuVisible$ ? this.$_dismissMenu$($event$$170$$, $menu$$7$$) : this.$_showMenu$($event$$170$$, "none", $menu$$7$$)
    }, $_addOrRemoveOJDefaultClass$:function() {
      this.$rootElement$.is(".oj-active, .oj-disabled, .oj-selected, .oj-hover, .oj-focus") ? this.$rootElement$.removeClass("oj-default") : this.$rootElement$.addClass("oj-default")
    }});
    $oj$$16$$.$__registerWidget$("oj.ojButtonset", $$$$16$$.oj.baseComponent, {version:"1.0.0", $_items$:"button, input[type\x3dbutton], input[type\x3dsubmit], input[type\x3dreset], input[type\x3dcheckbox], input[type\x3dradio], a", widgetEventPrefix:"oj", options:{checked:void 0, focusManagement:"oneTabstop", optionChange:null}, $_setCheckedOnDom$:function($checked$$1$$, $$buttons$$1$$) {
      var $name$$92_type$$74_valid$$8$$ = $$$$16$$.type($checked$$1$$);
      if("string" === $name$$92_type$$74_valid$$8$$ || "null" === $name$$92_type$$74_valid$$8$$) {
        return($name$$92_type$$74_valid$$8$$ = (($name$$92_type$$74_valid$$8$$ = $$buttons$$1$$[0].name) || 1 >= $$buttons$$1$$.length) && $$buttons$$1$$.filter("input[type\x3dradio][name\x3d" + $name$$92_type$$74_valid$$8$$ + "]").length === $$buttons$$1$$.length && (null === $checked$$1$$ || $$buttons$$1$$.filter("[value\x3d" + $checked$$1$$ + "]").length)) && $$buttons$$1$$.each(function() {
          this.checked = this.value === $checked$$1$$
        }), $name$$92_type$$74_valid$$8$$
      }
      if("array" === $name$$92_type$$74_valid$$8$$) {
        var $name$$92_type$$74_valid$$8$$ = $$buttons$$1$$.filter("input[type\x3dcheckbox]").length === $$buttons$$1$$.length, $last$$;
        ($name$$92_type$$74_valid$$8$$ = $name$$92_type$$74_valid$$8$$ && $checked$$1$$.concat().sort().every(function($elem$$20$$) {
          var $retVal$$13$$ = $elem$$20$$ !== $last$$ && $$buttons$$1$$.filter("[value\x3d" + $elem$$20$$ + "]").length;
          $last$$ = $elem$$20$$;
          return $retVal$$13$$
        })) && $$buttons$$1$$.each(function() {
          this.checked = -1 < $checked$$1$$.indexOf(this.value)
        });
        return $name$$92_type$$74_valid$$8$$
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
      return $checked1$$ === $checked2$$ ? !0 : "array" === $$$$16$$.type($checked1$$) && "array" === $$$$16$$.type($checked2$$) && !$$$$16$$($checked1$$).not($checked2$$).length && !$$$$16$$($checked2$$).not($checked1$$).length
    }, _create:function() {
      this.element.addClass("oj-buttonset oj-component").attr("role", "group");
      this.$_setup$(!0);
      this._super()
    }, $_showContextMenu$:function($menu$$8$$, $event$$171$$) {
      $menu$$8$$.show($event$$171$$, {launcher:this.element.find(":oj-button[tabindex\x3d0]"), focus:"menu"})
    }, _setOption:function($key$$79$$, $value$$170$$) {
      var $bail_previousValue$$4$$ = !1, $optionChangeOriginalEvent$$ = this.$_optionChangeOriginalEvent$;
      this.$_optionChangeOriginalEvent$ = null;
      "disabled" === $key$$79$$ && this.$$buttons$.ojButton("option", $key$$79$$, $value$$170$$);
      "checked" !== $key$$79$$ || $optionChangeOriginalEvent$$ || null === $value$$170$$ && void 0 === this.$_getCheckedFromDom$(this.$$buttons$) || (this.$_setCheckedOnDom$($value$$170$$, this.$$buttons$) ? this.$$buttons$.each(function() {
        $$$$16$$(this).data("oj-ojButton").$_applyCheckedStateFromDom$(!1)
      }) : $bail_previousValue$$4$$ = !0);
      $bail_previousValue$$4$$ || ($bail_previousValue$$4$$ = this.options[$key$$79$$], this._super($key$$79$$, $value$$170$$), "checked" === $key$$79$$ && this.$_fireOptionChange$($key$$79$$, $bail_previousValue$$4$$, $value$$170$$, this.$_checkedEquals$, $optionChangeOriginalEvent$$))
    }, $_fireOptionChange$:function($key$$80$$, $previousValue$$5$$, $value$$171$$, $equals$$, $originalEvent$$2$$) {
      $equals$$.call(this, $previousValue$$5$$, $value$$171$$) || this._trigger("optionChange", $originalEvent$$2$$, {option:$key$$80$$, previousValue:$previousValue$$5$$, value:$value$$171$$, optionMetadata:{writeback:$originalEvent$$2$$ ? "shouldWrite" : "shouldNotWrite"}})
    }, refresh:function() {
      this._super();
      this.$_setup$(!1)
    }, $_setup$:function($isCreate$$) {
      var $self$$69$$ = this;
      this.$isRtl$ = "rtl" === this.$_GetReadingDirection$();
      this.element.find(":not(iframe)").andSelf().contents().filter(function() {
        return 3 === this.nodeType && "" === this.nodeValue.trim()
      }).remove();
      this.$$buttons$ = this.element.find(this.$_items$);
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
        $$$$16$$(this).data("oj-ojButton").$_applyCheckedStateFromDom$(!1)
      }).end().not(":oj-button").ojButton().end().map(function() {
        return $$$$16$$(this).ojButton("widget")[0]
      }).removeClass("oj-buttonset-corner-start oj-buttonset-corner-end").filter(":first").addClass("oj-buttonset-corner-start").end().filter(":last").addClass("oj-buttonset-corner-end").end().end();
      $isCreate$$ && this.options.disabled && this.$$buttons$.ojButton("option", "disabled", !0);
      "oneTabstop" === this.options.focusManagement && (this.$$buttons$.unbind("keydown" + this.eventNamespace).bind("keydown" + this.eventNamespace, function($event$$172$$) {
        $self$$69$$.$_handleKeyDown$($event$$172$$, $$$$16$$(this))
      }).unbind("click" + this.eventNamespace).bind("click" + this.eventNamespace, function() {
        $$$$16$$(this).ojButton("option", "disabled") || $self$$69$$.$_setTabStop$($$$$16$$(this))
      }).unbind("focus" + this.eventNamespace).bind("focus" + this.eventNamespace, function() {
        $self$$69$$.$_setTabStop$($$$$16$$(this))
      }), this.$$enabledButtons$ = this.$$buttons$.filter(function() {
        return!$$$$16$$(this).ojButton("option", "disabled")
      }), this.$_initTabindexes$($isCreate$$));
      $shouldFire$$ && this.$_fireOptionChange$("checked", $oldChecked$$, $newChecked$$, this.$_checkedEquals$, null)
    }, $_initTabindexes$:function($$newTabStop_isCreate$$1$$) {
      var $$last$$ = $$$$16$$(this.$_lastTabStop$);
      this.$_lastTabStop$ = void 0;
      this.$$buttons$.attr("tabindex", "-1");
      $$newTabStop_isCreate$$1$$ = $$newTabStop_isCreate$$1$$ || !$$last$$.is(this.$$enabledButtons$) ? this.$$enabledButtons$.first() : $$last$$;
      this.$_setTabStop$($$newTabStop_isCreate$$1$$)
    }, $_mapToTabbable$:function($$button$$) {
      var $$enabledButtons$$ = this.$$enabledButtons$;
      return $$button$$.map(function($index$$141$$, $elem$$21$$) {
        if("radio" != $elem$$21$$.type || $elem$$21$$.checked || "" == $elem$$21$$.name) {
          return $elem$$21$$
        }
        var $$checkedRadio$$ = $_radioGroup$$($elem$$21$$, $$enabledButtons$$).filter(":checked");
        return $$checkedRadio$$.length ? $$checkedRadio$$[0] : $elem$$21$$
      })
    }, $_setTabStop$:function($$button$$1$$) {
      $$button$$1$$ = this.$_mapToTabbable$($$button$$1$$);
      var $button$$ = $$button$$1$$[0], $last$$1$$ = this.$_lastTabStop$;
      $button$$ !== $last$$1$$ && ($$$$16$$($last$$1$$).attr("tabindex", "-1"), $$button$$1$$.attr("tabindex", "0"), this.$_lastTabStop$ = $button$$)
    }, $_handleKeyDown$:function($event$$175$$, $$button$$2$$) {
      switch($event$$175$$.which) {
        case $$$$16$$.ui.keyCode.LEFT:
        ;
        case $$$$16$$.ui.keyCode.RIGHT:
          $event$$175$$.preventDefault();
          var $$enabledButtons$$1$$ = this.$$enabledButtons$, $length$$16$$ = $$enabledButtons$$1$$.length;
          if(2 > $length$$16$$) {
            break
          }
          var $oldIndex$$1$$ = $$enabledButtons$$1$$.index($$button$$2$$);
          $$enabledButtons$$1$$.eq(($oldIndex$$1$$ + ($event$$175$$.which == $$$$16$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? 1 : -1) + $length$$16$$) % $length$$16$$).focus();
          break;
        case $$$$16$$.ui.keyCode.UP:
        ;
        case $$$$16$$.ui.keyCode.DOWN:
          "radio" == $$button$$2$$.attr("type") && $event$$175$$.preventDefault()
      }
    }, _destroy:function() {
      this.element.removeClass("oj-buttonset oj-component").removeAttr("role");
      "oneTabstop" === this.options.focusManagement && this.$$buttons$.attr("tabindex", "0");
      this.$$buttons$.map(function() {
        return $$$$16$$(this).ojButton("widget")[0]
      }).removeClass("oj-buttonset-corner-start oj-buttonset-corner-end").end().ojButton("destroy")
    }});
    var $_lastActive$$, $_lastToggleActive$$, $BUTTON_EVENT_NAMESPACE$$ = ".ojButton", $BASE_CLASSES$$ = "oj-button oj-component oj-enabled oj-default", $STATE_CLASSES$$ = "oj-hover oj-active oj-selected", $TYPE_CLASSES$$ = "oj-button-icons-only oj-button-icon-only oj-button-text-icons oj-button-text-icon-start oj-button-text-icon-end oj-button-text-only"
  })()
});
