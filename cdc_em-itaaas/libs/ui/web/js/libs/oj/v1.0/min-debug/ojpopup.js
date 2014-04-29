define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$39$$, $$$$37$$) {
  (function() {
    var $_TAIL_STYLES$$ = "oj-left oj-center oj-right oj-top oj-middle oj-bottom".split(" "), $_TAIL_ALIGN_RULES$$ = {"right-top":"oj-right oj-top", "right-middle":"oj-right oj-middle", "right-bottom":"oj-right oj-bottom", "left-top":"oj-left oj-top", "left-middle":"oj-left oj-middle", "left-bottom":"oj-left oj-bottom", "center-top":"oj-center oj-top", "center-middle":"oj-left oj-middle", "center-bottom":"oj-center oj-bottom"};
    $oj$$39$$.$__registerWidget$("oj.ojPopup", $$$$37$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{autoDismiss:"none", chrome:"default", initialFocus:"firstFocusable", position:{my:"start top", at:"start bottom", of:"", collision:"flip"}, tail:"none", beforeOpen:null, open:null, beforeClose:null, close:null, focus:null}, $_ComponentCreate$:function() {
      this._super();
      var $rootElement$$ = $$$$37$$("\x3cdiv\x3e");
      this.$_rootElement$ = $rootElement$$.hide().addClass("oj-popup").attr("aria-hidden", "true");
      $rootElement$$.addClass("oj-helper-reset-inheritable oj-component");
      var $content$$25$$ = $$$$37$$("\x3cdiv\x3e").addClass("oj-popup-content");
      $content$$25$$.appendTo($rootElement$$);
      this.element.after($rootElement$$);
      this.element.appendTo($content$$25$$);
      this.element.show();
      this.$_createTail$();
      this.$_setChrome$();
      this.$_usingCallback$ = $$$$37$$.proxy(this.$_usingHandler$, this)
    }, _destroy:function() {
      this._super();
      this.isOpen() && this.close();
      this.$_destroyTail$();
      delete this.$_usingCallback$;
      this.$_rootElement$.replaceWith(this.element);
      this.element.hide()
    }, widget:$JSCompiler_get$$("$_rootElement$"), open:function($launcher$$10$$, $position$$17$$) {
      if(this.isOpen() && (this.close(), this.isOpen())) {
        return
      }
      if(!1 !== this._trigger("beforeOpen")) {
        var $options$$302$$ = this.options;
        this.$_setLauncher$($launcher$$10$$);
        this.$_setPosition$($position$$17$$);
        var $rootElement$$1$$ = this.$_rootElement$;
        $oj$$39$$.$Assert$.$assertPrototype$($rootElement$$1$$, jQuery);
        $launcher$$10$$ = this.$_launcher$;
        $oj$$39$$.$Assert$.$assertPrototype$($launcher$$10$$, jQuery);
        this.$_setAutoDismiss$($options$$302$$.autoDismiss);
        this._on(!0, $$$$37$$(window), {resize:this.$_resizeHandler$});
        this._on(!0, $rootElement$$1$$, {keydown:this.$_keydownHandler$});
        this._on(!0, $launcher$$10$$, {keydown:this.$_keydownHandler$});
        $oj$$39$$.$StringUtils$.$isEmptyOrUndefined$($rootElement$$1$$.attr("id")) && $rootElement$$1$$.uniqueId();
        var $popupId$$ = $rootElement$$1$$.attr("id");
        $launcher$$10$$.attr("aria-describedby", $popupId$$);
        $rootElement$$1$$.removeAttr("aria-hidden");
        $rootElement$$1$$.attr("role", "tooltip");
        $position$$17$$ = $options$$302$$.position;
        $rootElement$$1$$.show();
        $rootElement$$1$$.position($oj$$39$$.$PositionUtils$.$normalizeHorizontalAlignment$($position$$17$$, "rtl" === this.$_GetReadingDirection$()));
        this._trigger("open");
        this.$_intialFocus$()
      }
    }, close:function() {
      if(this.isOpen() && !1 !== this._trigger("beforeClose")) {
        this.$_restoreFocus$();
        var $position$$18_rootElement$$2$$ = this.$_rootElement$;
        $oj$$39$$.$Assert$.$assertPrototype$($position$$18_rootElement$$2$$, jQuery);
        $position$$18_rootElement$$2$$.hide();
        $position$$18_rootElement$$2$$.attr("aria-hidden", "true");
        var $launcher$$11$$ = this.$_launcher$;
        $oj$$39$$.$Assert$.$assertPrototype$($launcher$$11$$, jQuery);
        $launcher$$11$$.removeAttr("aria-describedby");
        this.$_setAutoDismiss$();
        this._off($$$$37$$(window), "resize");
        this._off($position$$18_rootElement$$2$$, "keydown");
        this._off($launcher$$11$$, "keydown");
        delete this.$_launcher$;
        $position$$18_rootElement$$2$$ = this.options.position;
        $position$$18_rootElement$$2$$._ofo && (delete $position$$18_rootElement$$2$$._ofo, delete $position$$18_rootElement$$2$$.of);
        this._trigger("close")
      }
    }, isOpen:function() {
      return this.$_rootElement$.is(":visible")
    }, _setOption:function($key$$116$$, $value$$206$$) {
      var $options$$303$$ = this.options;
      switch($key$$116$$) {
        case "tail":
          $value$$206$$ !== $options$$303$$.tail && this.$_setTail$($value$$206$$);
          break;
        case "chrome":
          $value$$206$$ !== $options$$303$$.chrome && this.$_setChrome$($value$$206$$);
          break;
        case "position":
          this.$_setPosition$($value$$206$$);
          this.isOpen() && this.$_resizeHandler$();
          return;
        case "autoDismiss":
          this.isOpen() && $value$$206$$ !== $options$$303$$.autoDismiss && this.$_setAutoDismiss$($value$$206$$)
      }
      this._super($key$$116$$, $value$$206$$)
    }, $_getRootStyle$:$JSCompiler_returnArg$$("oj-popup"), $_setTail$:function($tail$$) {
      this.$_destroyTail$();
      this.$_createTail$($tail$$);
      this.$_resizeHandler$()
    }, $_createTail$:function($tail$$1_tailDecoration_tailStyle$$) {
      $tail$$1_tailDecoration_tailStyle$$ = $tail$$1_tailDecoration_tailStyle$$ ? $tail$$1_tailDecoration_tailStyle$$ : this.options.tail;
      if("none" !== $tail$$1_tailDecoration_tailStyle$$) {
        $tail$$1_tailDecoration_tailStyle$$ = ["oj-popup-tail", $tail$$1_tailDecoration_tailStyle$$].join("-");
        var $tailDom$$ = $$$$37$$("\x3cdiv\x3e").hide().addClass("oj-popup-tail").addClass($tail$$1_tailDecoration_tailStyle$$);
        this.$_tailId$ = "#" + $tailDom$$.uniqueId().attr("id");
        var $rootElement$$3$$ = this.$_rootElement$;
        $oj$$39$$.$Assert$.$assertPrototype$($rootElement$$3$$, jQuery);
        $tailDom$$.appendTo($rootElement$$3$$);
        $rootElement$$3$$.addClass($tail$$1_tailDecoration_tailStyle$$)
      }
    }, $_getTail$:function() {
      var $tailId$$ = this.$_tailId$;
      return $tailId$$ ? $$$$37$$($tailId$$) : null
    }, $_destroyTail$:function() {
      var $tail$$2_tailStyle$$1$$ = this.$_getTail$();
      $tail$$2_tailStyle$$1$$ && $tail$$2_tailStyle$$1$$.remove();
      delete this.$_tailId$;
      var $tail$$2_tailStyle$$1$$ = ["oj-popup-tail", this.options.tail].join("-"), $rootElement$$4$$ = this.$_rootElement$;
      $oj$$39$$.$Assert$.$assertPrototype$($rootElement$$4$$, jQuery);
      $rootElement$$4$$.removeClass($tail$$2_tailStyle$$1$$)
    }, $_setChrome$:function($chrome_chromeDecoration$$) {
      $chrome_chromeDecoration$$ = $chrome_chromeDecoration$$ ? $chrome_chromeDecoration$$ : this.options.chrome;
      var $rootElement$$5$$ = this.$_rootElement$;
      $oj$$39$$.$Assert$.$assertPrototype$($rootElement$$5$$, jQuery);
      "default" === $chrome_chromeDecoration$$ && $rootElement$$5$$.hasClass("oj-popup-no-chrome") ? $rootElement$$5$$.removeClass("oj-popup-no-chrome") : "none" !== $chrome_chromeDecoration$$ || $rootElement$$5$$.hasClass("oj-popup-no-chrome") || $rootElement$$5$$.addClass("oj-popup-no-chrome")
    }, $_setLauncher$:function($launcher$$12$$) {
      $launcher$$12$$ ? "string" === $$$$37$$.type($launcher$$12$$) ? $launcher$$12$$ = $$$$37$$($launcher$$12$$) : 1 !== $launcher$$12$$.nodeType && ($launcher$$12$$ = $$$$37$$($launcher$$12$$)) : $launcher$$12$$ = $$$$37$$(document.activeElement);
      if($launcher$$12$$ instanceof jQuery && 1 < $launcher$$12$$.length) {
        var $rootElement$$6$$ = this.$_rootElement$;
        $oj$$39$$.$Assert$.$assertPrototype$($rootElement$$6$$, jQuery);
        for(var $i$$278$$ = 0;$i$$278$$ < $launcher$$12$$.length;$i$$278$$++) {
          var $target$$80$$ = $launcher$$12$$[0];
          if(!$oj$$39$$.$DomUtils$.$isAncestorOrSelf$($rootElement$$6$$[0], $target$$80$$)) {
            $launcher$$12$$ = $$$$37$$($target$$80$$);
            break
          }
        }
      }else {
        if(!($launcher$$12$$ instanceof jQuery) || $launcher$$12$$ instanceof jQuery && 0 === $launcher$$12$$.length) {
          $launcher$$12$$ = $$$$37$$(document.activeElement)
        }
      }
      $oj$$39$$.$Assert$.$assertPrototype$($launcher$$12$$, jQuery);
      this.$_launcher$ = $launcher$$12$$
    }, $_setPosition$:function($position$$19$$) {
      var $launcher$$13_options$$304_usingCallback$$ = this.options;
      $position$$19$$ && ($launcher$$13_options$$304_usingCallback$$.position = $$$$37$$.extend($launcher$$13_options$$304_usingCallback$$[$position$$19$$], $position$$19$$));
      $position$$19$$ = $launcher$$13_options$$304_usingCallback$$.position;
      $launcher$$13_options$$304_usingCallback$$ = this.$_usingCallback$;
      $oj$$39$$.$Assert$.$assertFunction$($launcher$$13_options$$304_usingCallback$$);
      $$$$37$$.isFunction($position$$19$$.using) && $position$$19$$.using !== $launcher$$13_options$$304_usingCallback$$ && ($position$$19$$.origUsing = $position$$19$$.using);
      $position$$19$$.using = $launcher$$13_options$$304_usingCallback$$;
      $launcher$$13_options$$304_usingCallback$$ = this.$_launcher$;
      $oj$$39$$.$Assert$.$assertPrototype$($launcher$$13_options$$304_usingCallback$$, jQuery);
      $position$$19$$.of || ($position$$19$$.of = $launcher$$13_options$$304_usingCallback$$, $position$$19$$._ofo = !0)
    }, $_usingHandler$:function($pos$$12$$, $props$$7$$) {
      var $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ = $props$$7$$.element.element;
      $oj$$39$$.$Assert$.$assertPrototype$($leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$, jQuery);
      var $origUsing_tail$$3$$ = this.$_getTail$();
      if($origUsing_tail$$3$$) {
        $origUsing_tail$$3$$.hide();
        for(var $i$$279_tailHOffset_tailStyle$$2_tailVOffset$$ = 0;$i$$279_tailHOffset_tailStyle$$2_tailVOffset$$ < $_TAIL_STYLES$$.length;$i$$279_tailHOffset_tailStyle$$2_tailVOffset$$++) {
          $origUsing_tail$$3$$.removeClass($_TAIL_STYLES$$[$i$$279_tailHOffset_tailStyle$$2_tailVOffset$$]), $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$.removeClass($_TAIL_STYLES$$[$i$$279_tailHOffset_tailStyle$$2_tailVOffset$$])
        }
        $origUsing_tail$$3$$.removeAttr("style");
        $i$$279_tailHOffset_tailStyle$$2_tailVOffset$$ = $_TAIL_ALIGN_RULES$$[[$props$$7$$.horizontal, $props$$7$$.vertical].join("-")];
        $oj$$39$$.$Assert$.$assertString$($i$$279_tailHOffset_tailStyle$$2_tailVOffset$$);
        $origUsing_tail$$3$$.addClass($i$$279_tailHOffset_tailStyle$$2_tailVOffset$$);
        $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$.addClass($i$$279_tailHOffset_tailStyle$$2_tailVOffset$$);
        $origUsing_tail$$3$$.show();
        "left" === $props$$7$$.horizontal || "right" === $props$$7$$.horizontal ? ($i$$279_tailHOffset_tailStyle$$2_tailVOffset$$ = ($origUsing_tail$$3$$.outerWidth() - 1) * ("left" === $props$$7$$.horizontal ? 1 : -1), $pos$$12$$.left += $i$$279_tailHOffset_tailStyle$$2_tailVOffset$$) : "center" === $props$$7$$.horizontal && ($i$$279_tailHOffset_tailStyle$$2_tailVOffset$$ = ($origUsing_tail$$3$$.outerHeight() - 1) * ("top" === $props$$7$$.vertical ? 1 : -1), $pos$$12$$.top += $i$$279_tailHOffset_tailStyle$$2_tailVOffset$$);
        $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$.css($pos$$12$$);
        "middle" === $props$$7$$.vertical ? ($leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ = $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$.height(), $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ = Math.round(100 * (($leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ / 2 - $origUsing_tail$$3$$.outerHeight() / 2) / $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$)), $origUsing_tail$$3$$.css({top:$leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ + 
        "%"})) : "center" === $props$$7$$.horizontal && ($leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ = $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$.width(), $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ = Math.round(100 * (($leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ / 2 - $origUsing_tail$$3$$.outerWidth() / 2) / $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$)), $origUsing_tail$$3$$.css({left:$leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ + 
        "%"}));
        ($origUsing_tail$$3$$ = this.options.position.origUsing) && $origUsing_tail$$3$$($pos$$12$$, $props$$7$$)
      }else {
        $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$.css($pos$$12$$)
      }
    }, $_resizeHandler$:function() {
      var $rootElement$$8$$ = this.$_rootElement$;
      $oj$$39$$.$Assert$.$assertPrototype$($rootElement$$8$$, jQuery);
      var $position$$20$$ = this.options.position;
      $oj$$39$$.$Assert$.$assertObject$($position$$20$$);
      $rootElement$$8$$.position($oj$$39$$.$PositionUtils$.$normalizeHorizontalAlignment$($position$$20$$, "rtl" === this.$_GetReadingDirection$()))
    }, $_intialFocus$:function($first$$8_nodes$$4_rootElement$$9_skipOptionCheck$$) {
      var $options$$306$$ = this.options;
      if($first$$8_nodes$$4_rootElement$$9_skipOptionCheck$$ || "none" !== $options$$306$$.initialFocus) {
        if($first$$8_nodes$$4_rootElement$$9_skipOptionCheck$$ || "firstFocusable" === $options$$306$$.initialFocus) {
          $first$$8_nodes$$4_rootElement$$9_skipOptionCheck$$ = this.element.find(":focusable"), 0 < $first$$8_nodes$$4_rootElement$$9_skipOptionCheck$$.length ? ($first$$8_nodes$$4_rootElement$$9_skipOptionCheck$$ = $first$$8_nodes$$4_rootElement$$9_skipOptionCheck$$[0], $oj$$39$$.$Assert$.$assertDomElement$($first$$8_nodes$$4_rootElement$$9_skipOptionCheck$$), $$$$37$$($first$$8_nodes$$4_rootElement$$9_skipOptionCheck$$).focus()) : ($first$$8_nodes$$4_rootElement$$9_skipOptionCheck$$ = this.$_rootElement$, 
          $oj$$39$$.$Assert$.$assertPrototype$($first$$8_nodes$$4_rootElement$$9_skipOptionCheck$$, jQuery), $first$$8_nodes$$4_rootElement$$9_skipOptionCheck$$.attr("tabindex", "-1"), $first$$8_nodes$$4_rootElement$$9_skipOptionCheck$$.focus()), this._trigger("focus")
        }
      }
    }, $_isFocusInPopup$:function($activeElement$$1$$) {
      $activeElement$$1$$ || ($activeElement$$1$$ = document.activeElement);
      $oj$$39$$.$Assert$.$assertDomElement$($activeElement$$1$$);
      var $rootElement$$10$$ = this.$_rootElement$;
      $oj$$39$$.$Assert$.$assertPrototype$($rootElement$$10$$, jQuery);
      return $oj$$39$$.$DomUtils$.$isAncestorOrSelf$($rootElement$$10$$[0], $activeElement$$1$$)
    }, $_isFocusInLauncher$:function($activeElement$$2$$) {
      $activeElement$$2$$ || ($activeElement$$2$$ = document.activeElement);
      $oj$$39$$.$Assert$.$assertDomElement$($activeElement$$2$$);
      var $launcher$$14$$ = this.$_launcher$;
      $oj$$39$$.$Assert$.$assertPrototype$($launcher$$14$$, jQuery);
      return $oj$$39$$.$DomUtils$.$isAncestorOrSelf$($launcher$$14$$[0], $activeElement$$2$$)
    }, $_restoreFocus$:function() {
      if(this.$_isFocusInPopup$()) {
        var $launcher$$15$$ = this.$_launcher$;
        $oj$$39$$.$Assert$.$assertPrototype$($launcher$$15$$, jQuery);
        $launcher$$15$$.focus()
      }
    }, $_keydownHandler$:function($event$$344_launcher$$16$$) {
      if(!$event$$344_launcher$$16$$.isDefaultPrevented()) {
        var $target$$81$$ = $event$$344_launcher$$16$$.target;
        $oj$$39$$.$Assert$.$assertDomElement$($target$$81$$);
        if(27 === $event$$344_launcher$$16$$.keyCode) {
          $event$$344_launcher$$16$$.preventDefault(), this.close()
        }else {
          if(117 === $event$$344_launcher$$16$$.keyCode) {
            this.$_isFocusInPopup$($target$$81$$) ? ($event$$344_launcher$$16$$.preventDefault(), $event$$344_launcher$$16$$ = this.$_launcher$, $oj$$39$$.$Assert$.$assertPrototype$($event$$344_launcher$$16$$, jQuery), $event$$344_launcher$$16$$.focus()) : this.$_isFocusInLauncher$($target$$81$$) && ($event$$344_launcher$$16$$.preventDefault(), this.$_intialFocus$(!0))
          }else {
            if(9 === $event$$344_launcher$$16$$.keyCode && this.$_isFocusInPopup$($target$$81$$)) {
              var $lastNode_nodes$$5$$ = this.element.find(":tabbable");
              if(0 < $lastNode_nodes$$5$$.length) {
                var $firstNode$$ = $lastNode_nodes$$5$$[0];
                $oj$$39$$.$Assert$.$assertDomElement$($firstNode$$);
                $lastNode_nodes$$5$$ = $lastNode_nodes$$5$$[$lastNode_nodes$$5$$.length - 1];
                $oj$$39$$.$Assert$.$assertDomElement$($lastNode_nodes$$5$$);
                $firstNode$$ === $target$$81$$ && $event$$344_launcher$$16$$.shiftKey ? ($event$$344_launcher$$16$$.preventDefault(), $$$$37$$($lastNode_nodes$$5$$).focus()) : $lastNode_nodes$$5$$ !== $target$$81$$ || $event$$344_launcher$$16$$.shiftKey || ($event$$344_launcher$$16$$.preventDefault(), $$$$37$$($firstNode$$).focus())
              }
            }
          }
        }
      }
    }, $_setAutoDismiss$:function($autoDismiss$$) {
      var $documentElement$$ = document.documentElement, $focusLossCallback$$ = this.$_focusLossCallback$;
      $focusLossCallback$$ && ($documentElement$$.removeEventListener("mousedown", $focusLossCallback$$, !0), $documentElement$$.removeEventListener("focus", $focusLossCallback$$, !0), delete this.$_focusLossCallback$);
      "focusLoss" === $autoDismiss$$ && ($focusLossCallback$$ = this.$_focusLossCallback$ = $$$$37$$.proxy(this.$_dismissalHandler$, this), $documentElement$$.addEventListener("mousedown", $focusLossCallback$$, !0), $documentElement$$.addEventListener("focus", $focusLossCallback$$, !0))
    }, $_dismissalHandler$:function($event$$345_target$$82$$) {
      var $launcher$$17$$ = this.$_launcher$, $rootElement$$11$$ = this.$_rootElement$;
      $oj$$39$$.$Assert$.$assertPrototype$($launcher$$17$$, jQuery);
      $oj$$39$$.$Assert$.$assertPrototype$($rootElement$$11$$, jQuery);
      $event$$345_target$$82$$ = $event$$345_target$$82$$.target;
      $oj$$39$$.$Assert$.$assertDomElement$($event$$345_target$$82$$);
      $oj$$39$$.$DomUtils$.$isAncestorOrSelf$($launcher$$17$$[0], $event$$345_target$$82$$) || $oj$$39$$.$DomUtils$.$isAncestorOrSelf$($rootElement$$11$$[0], $event$$345_target$$82$$) || this.close()
    }})
  })()
});
