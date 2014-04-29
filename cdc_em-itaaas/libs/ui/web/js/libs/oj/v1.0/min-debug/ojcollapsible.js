define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$28$$, $$$$28$$) {
  (function() {
    var $uid$$ = 0;
    $oj$$28$$.$__registerWidget$("oj.ojCollapsible", $$$$28$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{expanded:!1, disabled:null, expandOn:"click", expandArea:"disclosureIcon", beforeExpand:null, afterExpand:null, beforeCollapse:null, afterCollapse:null, optionChange:null}, $_ComponentCreate$:function() {
      this._super();
      this.$activatable$ = $$$$28$$();
      this.element.addClass("oj-collapsible oj-component");
      this.$_processPanels$();
      this.$_refresh$()
    }, $_showContextMenu$:function($menu$$16$$, $event$$293$$) {
      $menu$$16$$.show($event$$293$$, {launcher:this.element.find(".oj-collapsible-header-icon").first(), focus:"menu"})
    }, $_createIcons$:function() {
      var $icon$$2$$ = this.options.expanded ? "oj-collapsible-open-icon" : "oj-collapsible-close-icon";
      (this.$_isDisabled$() ? $$$$28$$("\x3cspan\x3e") : $$$$28$$("\x3ca href\x3d'#'\x3e")).addClass("oj-component-icon oj-clickable-icon oj-collapsible-header-icon " + $icon$$2$$).attr("aria-labelledby", this.header.attr("id")).prependTo(this.header);
      this.header.addClass("oj-collapsible-icons ")
    }, $_destroyIcons$:function() {
      this.header.removeClass("oj-collapsible-icons").children(".oj-collapsible-header-icon").remove()
    }, _destroy:function() {
      this.$_cleanup$();
      this.element.removeClass("oj-collapsible oj-component oj-collapsible-collapsed oj-disabled");
      this.$_isDisabled$() && this.$_findFocusables$(this.header).removeAttr("tabIndex");
      this.header.removeClass("oj-collapsible-header").each(function() {
        /^oj-collapsible/.test(this.id) && this.removeAttribute("id")
      });
      this.$_findFirstFocusableInHeader$().removeAttr("role").removeAttr("aria-controls").removeAttr("aria-expanded").removeAttr("aria-disabled");
      this.$_destroyIcons$();
      this.$_findFocusables$(this.content).removeAttr("tabIndex");
      this.content.css("display", "").removeAttr("aria-hidden").removeAttr("tabIndex").removeClass("oj-component-content oj-collapsible-content").each(function() {
        /^oj-collapsible/.test(this.id) && this.removeAttribute("id")
      })
    }, $_cleanup$:function() {
      this.$_tearDownEvents$();
      this.content && (this.content.unwrap(), this.$wrapper$ = null)
    }, $_isDisabled$:function() {
      return this.element.hasClass("oj-disabled")
    }, $_getExpandAreaSelector$:function() {
      return"header" == this.options.expandArea ? "\x3e .oj-collapsible-header" : "\x3e .oj-collapsible-header \x3e .oj-collapsible-header-icon"
    }, _setOption:function($key$$103$$, $value$$185$$) {
      "expanded" === $key$$103$$ ? this.$_setCollapsed$($value$$185$$) : ("expandOn" === $key$$103$$ || "expandArea" === $key$$103$$ ? (this.$_tearDownEvents$(), this._super($key$$103$$, $value$$185$$), this.$_setupEvents$()) : this._super($key$$103$$, $value$$185$$), "disabled" === $key$$103$$ && (this.header.add(this.header.next()), this.element.toggleClass("oj-disabled", !!$value$$185$$)))
    }, $_keydown$:function($event$$294$$) {
      if(!$event$$294$$.altKey && !$event$$294$$.ctrlKey) {
        var $keyCode$$4$$ = $$$$28$$.ui.keyCode;
        switch($event$$294$$.keyCode) {
          case $keyCode$$4$$.SPACE:
          ;
          case $keyCode$$4$$.ENTER:
            this.$_toggleHandler$($event$$294$$)
        }
      }
    }, refresh:function() {
      this._super();
      this.$_cleanup$();
      this.$_processPanels$();
      this.$_destroyIcons$();
      this.$_refresh$()
    }, $_processPanels$:function() {
      this.header = this.element.children(":first-child").addClass("oj-collapsible-header");
      this.content = this.header.next().addClass("oj-collapsible-content oj-component-content");
      this.content.wrap("\x3cdiv\x3e\x3c/div\x3e");
      this.$wrapper$ = this.content.parent().addClass("oj-collapsible-wrapper");
      this.options.disabled && this.element.addClass("oj-disabled");
      this.$_isDisabled$() && this.$_findFocusables$(this.header).attr("tabIndex", -1)
    }, $_refresh$:function() {
      var $focusable$$1_header$$6$$ = this.header, $content$$23$$ = this.content, $options$$280$$ = this.options, $collapsibleId$$ = this.$collapsibleId$ = "oj-collapsible-" + (this.element.attr("id") || ++$uid$$), $headerId$$ = $focusable$$1_header$$6$$.attr("id"), $contentId$$ = $content$$23$$.attr("id");
      $headerId$$ || $focusable$$1_header$$6$$.attr("id", $collapsibleId$$ + "-header");
      $contentId$$ || ($contentId$$ = $collapsibleId$$ + "-content", $content$$23$$.attr("id", $contentId$$));
      this.$_createIcons$();
      $focusable$$1_header$$6$$ = this.$_findFirstFocusableInHeader$();
      $focusable$$1_header$$6$$.attr("role", "button").attr("aria-controls", $contentId$$);
      this.$_isDisabled$() && $focusable$$1_header$$6$$.attr("aria-disabled", !0);
      this.$_isDisabled$() || this.$_setContentTabIndex$($options$$280$$.expanded ? "0" : "-1");
      this.element.toggleClass("oj-collapsible-collapsed", !$options$$280$$.expanded);
      $options$$280$$.expanded ? ($content$$23$$.attr({"aria-hidden":"false"}), $focusable$$1_header$$6$$.attr("aria-expanded", "true")) : (this.$wrapper$.css({"max-height":0, "overflow-y":"hidden", display:"none"}), this.$wrapper$.css("max-height", 0), $content$$23$$.attr({"aria-hidden":"true"}), $focusable$$1_header$$6$$.attr("aria-expanded", "false"));
      this.$_setupEvents$()
    }, $_setCollapsed$:function($expanded$$2$$) {
      $expanded$$2$$ !== this.options.expanded && ($expanded$$2$$ ? this.expand(!0) : this.collapse(!0))
    }, $_setupEvents$:function() {
      var $events$$3$$ = {keydown:this.$_keydown$}, $event$$295_expandArea$$ = this.options.expandOn;
      if($event$$295_expandArea$$) {
        var $self$$87$$ = this;
        $$$$28$$.each($event$$295_expandArea$$.split(" "), function($index$$161$$, $eventName$$1$$) {
          $events$$3$$[$eventName$$1$$] = $self$$87$$.$_toggleHandler$
        })
      }
      $event$$295_expandArea$$ = this.element.find(this.$_getExpandAreaSelector$());
      this._on($event$$295_expandArea$$, $events$$3$$);
      this._on(this.$wrapper$, {transitionend:this.$_transitionEndHandler$, webkitTransitionEnd:this.$_transitionEndHandler$, otransitionend:this.$_transitionEndHandler$, oTransitionEnd:this.$_transitionEndHandler$});
      this.$_isDisabled$() || (this._on(this.element, {ojafterexpand:this.$_expandCollapseHandler$, ojaftercollapse:this.$_expandCollapseHandler$, ojfocus:this.$_focusHandler$, ojfocusout:this.$_focusHandler$}), this._hoverable($event$$295_expandArea$$), this._focusable($event$$295_expandArea$$), this.$_activatable$($event$$295_expandArea$$))
    }, $_tearDownEvents$:function() {
      this._off(this.element.find(this.$_getExpandAreaSelector$()));
      this.$wrapper$ && this._off(this.$wrapper$);
      this._off(this.element.add(this.content))
    }, $_toggleHandler$:function($event$$296$$) {
      this.$_isDisabled$() || (this.options.expanded ? this.collapse(!0, $event$$296$$) : this.expand(!0, $event$$296$$), $event$$296$$.preventDefault(), $event$$296$$.stopPropagation(), this.header.find(".oj-collapsible-header-icon").focus())
    }, $_expandCollapseHandler$:function($event$$297$$) {
      if(!this.$_isDisabled$() && $event$$297$$.target === this.element[0] && !$event$$297$$.isDefaultPrevented()) {
        var $element$$62$$ = this.element, $options$$281$$ = this.options, $content$$24$$ = this.content, $wrapper$$1$$ = this.$wrapper$, $isCollapse$$ = "ojaftercollapse" === $event$$297$$.type;
        $event$$297$$.preventDefault();
        $options$$281$$.expanded = !$isCollapse$$;
        $wrapper$$1$$.$contentHeight$ = $wrapper$$1$$.outerHeight();
        $isCollapse$$ ? ($wrapper$$1$$.removeClass("oj-collapsible-transition"), $wrapper$$1$$.css({"max-height":$wrapper$$1$$.$contentHeight$, "overflow-y":"hidden"}), setTimeout(function() {
          $wrapper$$1$$.addClass("oj-collapsible-transition").css({"max-height":0});
          $element$$62$$.addClass("oj-collapsible-collapsed")
        }, 10)) : ($wrapper$$1$$.show(), setTimeout(function() {
          $wrapper$$1$$.$contentHeight$ += $content$$24$$.outerHeight();
          $wrapper$$1$$.addClass("oj-collapsible-transition").css({"max-height":$wrapper$$1$$.$contentHeight$});
          $element$$62$$.removeClass("oj-collapsible-collapsed")
        }, 1));
        this.header.find(".oj-collapsible-header-icon").toggleClass("oj-collapsible-open-icon", !$isCollapse$$).toggleClass("oj-collapsible-close-icon", $isCollapse$$ || !1).end();
        this.content.attr("aria-hidden", $isCollapse$$);
        this.$_findFirstFocusableInHeader$().attr("aria-expanded", !$isCollapse$$);
        this.$_setContentTabIndex$($isCollapse$$ ? "-1" : "0")
      }
    }, $_focusHandler$:function($event$$298$$) {
      if(this.$_isDisabled$()) {
        return null
      }
      "ojfocusout" == $event$$298$$.type ? (this.$_findFirstFocusableInHeader$().attr("tabIndex", -1), $event$$298$$.preventDefault(), $event$$298$$.stopPropagation()) : "ojfocus" == $event$$298$$.type && (this.$_findFirstFocusableInHeader$().attr("tabIndex", 0).focus(), $event$$298$$.preventDefault(), $event$$298$$.stopPropagation())
    }, $_findFirstFocusableInHeader$:function() {
      return this.$_findFocusables$(this.header).first()
    }, $_setContentTabIndex$:function($value$$186$$) {
      return this.$_findFocusables$(this.content).attr("tabIndex", $value$$186$$)
    }, $_findFocusables$:function($start$$30$$) {
      return this.$_isDisabled$() ? $start$$30$$.find("span") : $start$$30$$.find("a,:input")
    }, expand:function($vetoable$$, $event$$299$$) {
      if(!this.$_isDisabled$()) {
        var $eventData$$8$$ = {header:this.header, content:this.content};
        $vetoable$$ && !1 === this._trigger("beforeExpand", $event$$299$$, $eventData$$8$$) || (this._trigger("afterExpand", $event$$299$$, $eventData$$8$$), this.$_fireOptionChange$("expanded", !1, !0, $event$$299$$ ? !0 : !1))
      }
    }, collapse:function($vetoable$$1$$, $event$$300$$) {
      if(!this.$_isDisabled$()) {
        var $eventData$$9$$ = {header:this.header, content:this.content};
        $vetoable$$1$$ && !1 === this._trigger("beforeCollapse", $event$$300$$, $eventData$$9$$) || (this._trigger("afterCollapse", $event$$300$$, $eventData$$9$$), this.$_fireOptionChange$("expanded", !0, !1, $event$$300$$ ? !0 : !1))
      }
    }, $_transitionEndHandler$:function($event$$301$$) {
      this.$_isDisabled$() || ("max-height" == ($event$$301$$.originalEvent ? $event$$301$$.originalEvent.propertyName : null) && ($event$$301$$.preventDefault(), $event$$301$$.stopPropagation()), this.options.expanded ? this.$wrapper$.css({"max-height":9999, "overflow-y":""}) : this.$wrapper$.hide(), this.$wrapper$.removeClass("oj-collapsible-transition"))
    }, $_activatable$:function($element$$63$$) {
      this.$activatable$ = this.$activatable$.add($element$$63$$);
      this._on($element$$63$$, {mousedown:function($event$$302$$) {
        $$$$28$$($event$$302$$.currentTarget).addClass("oj-active")
      }, mouseup:function($event$$303$$) {
        $$$$28$$($event$$303$$.currentTarget).removeClass("oj-active")
      }})
    }, $_fireOptionChange$:function($key$$104$$, $previousValue$$6$$, $value$$187$$, $originalEvent$$3$$) {
      this._trigger("optionChange", $originalEvent$$3$$, {option:$key$$104$$, previousValue:$previousValue$$6$$, value:$value$$187$$, optionMetadata:{writeback:$originalEvent$$3$$ ? "shouldWrite" : "shouldNotWrite"}})
    }, getNodeBySubId:function($locator$$18_subId$$12$$) {
      if(null == $locator$$18_subId$$12$$) {
        return this.element ? this.element[0] : null
      }
      $locator$$18_subId$$12$$ = $locator$$18_subId$$12$$.subId;
      switch($locator$$18_subId$$12$$) {
        case "oj-collapsible-content":
          return this.content;
        case "oj-collapsible-header":
          return this.header;
        case "oj-collapsible-header-icon":
          return this.header.find("." + $locator$$18_subId$$12$$)[0]
      }
      return null
    }})
  })()
});
