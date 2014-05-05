define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$20$$, $$$$20$$) {
  (function() {
    var $mouseHandled$$ = !1;
    $$$$20$$(document).mouseup(function() {
      $mouseHandled$$ = !1
    });
    $oj$$20$$.$__registerWidget$("oj.ojResizable", $$$$20$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{cancel:"input,textarea,button,select,option", distance:1, delay:0, alsoResize:!1, animate:!1, animateDuration:"slow", animateEasing:"swing", aspectRatio:!1, autoHide:!1, containment:!1, ghost:!1, grid:!1, handles:"e,s,se", helper:!1, resize:null, start:null, stop:null}, $_mouseInit$:function() {
      var $that$$3$$ = this;
      this.element.bind("mousedown." + this.widgetName, function($event$$220$$) {
        return $that$$3$$.$_mouseDown$($event$$220$$)
      }).bind("click." + this.widgetName, function($event$$221$$) {
        if(!0 === $$$$20$$.data($event$$221$$.target, $that$$3$$.widgetName + ".preventClickEvent")) {
          return $$$$20$$.removeData($event$$221$$.target, $that$$3$$.widgetName + ".preventClickEvent"), $event$$221$$.stopImmediatePropagation(), !1
        }
      });
      this.$started$ = !1
    }, $_mouseDestroy$:function() {
      this.element.unbind("." + this.widgetName);
      this.$_mouseMoveDelegate$ && this.document.unbind("mousemove." + this.widgetName, this.$_mouseMoveDelegate$).unbind("mouseup." + this.widgetName, this.$_mouseUpDelegate$)
    }, $_mouseDown$:function($event$$222$$) {
      if(!$mouseHandled$$) {
        this.$_mouseStarted$ && this.$_mouseUp$($event$$222$$);
        this.$_mouseDownEvent$ = $event$$222$$;
        var $that$$4$$ = this, $btnIsLeft$$ = 1 === $event$$222$$.which, $elIsCancel$$ = "string" === typeof this.options.cancel && $event$$222$$.target.nodeName ? $$$$20$$($event$$222$$.target).closest(this.options.cancel).length : !1;
        if(!$btnIsLeft$$ || $elIsCancel$$ || !this.$_mouseCapture$($event$$222$$)) {
          return!0
        }
        this.$mouseDelayMet$ = !this.options.delay;
        this.$mouseDelayMet$ || (this.$_mouseDelayTimer$ = setTimeout(function() {
          $that$$4$$.$mouseDelayMet$ = !0
        }, this.options.delay));
        if(this.$_mouseDistanceMet$($event$$222$$) && this.$mouseDelayMet$ && (this.$_mouseStarted$ = !1 !== this.$_mouseStart$($event$$222$$), !this.$_mouseStarted$)) {
          return $event$$222$$.preventDefault(), !0
        }
        !0 === $$$$20$$.data($event$$222$$.target, this.widgetName + ".preventClickEvent") && $$$$20$$.removeData($event$$222$$.target, this.widgetName + ".preventClickEvent");
        this.$_mouseMoveDelegate$ = function $this$$_mouseMoveDelegate$$($event$$223$$) {
          return $that$$4$$.$_mouseMove$($event$$223$$)
        };
        this.$_mouseUpDelegate$ = function $this$$_mouseUpDelegate$$($event$$224$$) {
          return $that$$4$$.$_mouseUp$($event$$224$$)
        };
        this.document.bind("mousemove." + this.widgetName, this.$_mouseMoveDelegate$).bind("mouseup." + this.widgetName, this.$_mouseUpDelegate$);
        $event$$222$$.preventDefault();
        return $mouseHandled$$ = !0
      }
    }, $_mouseMove$:function($event$$225$$) {
      if($$$$20$$.ui.$ie$ && (!document.documentMode || 9 > document.documentMode) && !$event$$225$$.button || !$event$$225$$.which) {
        return this.$_mouseUp$($event$$225$$)
      }
      if(this.$_mouseStarted$) {
        return this.$_mouseDrag$($event$$225$$), $event$$225$$.preventDefault()
      }
      this.$_mouseDistanceMet$($event$$225$$) && this.$mouseDelayMet$ && ((this.$_mouseStarted$ = !1 !== this.$_mouseStart$(this.$_mouseDownEvent$, $event$$225$$)) ? this.$_mouseDrag$($event$$225$$) : this.$_mouseUp$($event$$225$$));
      return!this.$_mouseStarted$
    }, $_mouseUp$:function($event$$226$$) {
      this.document.unbind("mousemove." + this.widgetName, this.$_mouseMoveDelegate$).unbind("mouseup." + this.widgetName, this.$_mouseUpDelegate$);
      this.$_mouseStarted$ && (this.$_mouseStarted$ = !1, $event$$226$$.target === this.$_mouseDownEvent$.target && $$$$20$$.data($event$$226$$.target, this.widgetName + ".preventClickEvent", !0), this.$_mouseStop$($event$$226$$));
      return $mouseHandled$$ = !1
    }, $_mouseDistanceMet$:function($event$$227$$) {
      return Math.max(Math.abs(this.$_mouseDownEvent$.pageX - $event$$227$$.pageX), Math.abs(this.$_mouseDownEvent$.pageY - $event$$227$$.pageY)) >= this.options.distance
    }, $_mouseDelayMet$:$JSCompiler_get$$("$mouseDelayMet$"), $_num$:function($value$$177$$) {
      return parseInt($value$$177$$, 10) || 0
    }, $_isNumber$:function($value$$178$$) {
      return!isNaN(parseInt($value$$178$$, 10))
    }, $_hasScroll$:function($el$$10$$, $a$$64$$) {
      if("hidden" === $$$$20$$($el$$10$$).css("overflow")) {
        return!1
      }
      var $scroll$$13$$ = $a$$64$$ && "left" === $a$$64$$ ? "scrollLeft" : "scrollTop", $has$$ = !1;
      if(0 < $el$$10$$[$scroll$$13$$]) {
        return!0
      }
      $el$$10$$[$scroll$$13$$] = 1;
      $has$$ = 0 < $el$$10$$[$scroll$$13$$];
      $el$$10$$[$scroll$$13$$] = 0;
      return $has$$
    }, _create:function() {
      var $n$$20$$, $i$$219$$, $handle$$19$$, $axis$$19$$, $hname$$, $that$$5$$ = this, $o$$ = this.options;
      this.element.addClass("oj-resizable");
      $$$$20$$.extend(this, {$_aspectRatio$:!!$o$$.aspectRatio, aspectRatio:$o$$.aspectRatio, $originalElement$:this.element, $_proportionallyResizeElements$:[], $_helper$:$o$$.helper || $o$$.ghost || $o$$.animate ? $o$$.helper || "oj-resizable-helper" : null});
      this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap($$$$20$$("\x3cdiv class\x3d'ui-wrapper' style\x3d'overflow: hidden;'\x3e\x3c/div\x3e").css({position:this.element.css("position"), width:this.element.outerWidth(), height:this.element.outerHeight(), top:this.element.css("top"), left:this.element.css("left")})), this.element = this.element.parent().data("oj-resizable", this.element.resizable("instance")), this.$elementIsWrapper$ = !0, this.element.css({marginLeft:this.$originalElement$.css("marginLeft"), 
      marginTop:this.$originalElement$.css("marginTop"), marginRight:this.$originalElement$.css("marginRight"), marginBottom:this.$originalElement$.css("marginBottom")}), this.$originalElement$.css({marginLeft:0, marginTop:0, marginRight:0, marginBottom:0}), this.$originalResizeStyle$ = this.$originalElement$.css("resize"), this.$originalElement$.css("resize", "none"), this.$_proportionallyResizeElements$.push(this.$originalElement$.css({position:"static", zoom:1, display:"block"})), this.$originalElement$.css({margin:this.$originalElement$.css("margin")}), 
      this.$_proportionallyResize$());
      this.handles = $o$$.handles || ($$$$20$$(".oj-resizable-handle", this.element).length ? {$n$:".oj-resizable-n", $e$:".oj-resizable-e", $s$:".oj-resizable-s", $w$:".oj-resizable-w", $se$:".oj-resizable-se", $sw$:".oj-resizable-sw", $ne$:".oj-resizable-ne", $nw$:".oj-resizable-nw"} : "e,s,se");
      if(this.handles.constructor === String) {
        for("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), $n$$20$$ = this.handles.split(","), this.handles = {}, $i$$219$$ = 0;$i$$219$$ < $n$$20$$.length;$i$$219$$++) {
          $handle$$19$$ = $$$$20$$.trim($n$$20$$[$i$$219$$]), $hname$$ = "oj-resizable-" + $handle$$19$$, $axis$$19$$ = $$$$20$$("\x3cdiv class\x3d'oj-resizable-handle " + $hname$$ + "'\x3e\x3c/div\x3e"), this.handles[$handle$$19$$] = ".oj-resizable-" + $handle$$19$$, this.element.append($axis$$19$$)
        }
      }
      this.$_renderAxis$ = function $this$$_renderAxis$$($target$$78$$) {
        var $i$$220$$, $axis$$20_padPos$$, $padWrapper$$;
        $target$$78$$ = $target$$78$$ || this.element;
        for($i$$220$$ in this.handles) {
          this.handles[$i$$220$$].constructor === String && (this.handles[$i$$220$$] = this.element.children(this.handles[$i$$220$$]).first().show()), this.$elementIsWrapper$ && this.$originalElement$[0].nodeName.match(/textarea|input|select|button/i) && ($axis$$20_padPos$$ = $$$$20$$(this.handles[$i$$220$$], this.element), $padWrapper$$ = /sw|ne|nw|se|n|s/.test($i$$220$$) ? $axis$$20_padPos$$.outerHeight() : $axis$$20_padPos$$.outerWidth(), $axis$$20_padPos$$ = ["padding", /ne|nw|n/.test($i$$220$$) ? 
          "Top" : /se|sw|s/.test($i$$220$$) ? "Bottom" : /^e$/.test($i$$220$$) ? "Right" : "Left"].join(""), $target$$78$$.css($axis$$20_padPos$$, $padWrapper$$), this.$_proportionallyResize$()), $$$$20$$(this.handles[$i$$220$$])
        }
      };
      this.$_renderAxis$(this.element);
      this.$_handles$ = $$$$20$$(".oj-resizable-handle", this.element);
      this.$_handles$.mouseover(function() {
        $that$$5$$.$resizing$ || (this.className && ($axis$$19$$ = this.className.match(/oj-resizable-(se|sw|ne|nw|n|e|s|w)/i)), $that$$5$$.axis = $axis$$19$$ && $axis$$19$$[1] ? $axis$$19$$[1] : "se")
      });
      $o$$.autoHide && (this.$_handles$.hide(), $$$$20$$(this.element).addClass("oj-resizable-autohide").mouseenter(function() {
        $o$$.disabled || ($$$$20$$(this).removeClass("oj-resizable-autohide"), $that$$5$$.$_handles$.show())
      }).mouseleave(function() {
        $o$$.disabled || $that$$5$$.$resizing$ || ($$$$20$$(this).addClass("oj-resizable-autohide"), $that$$5$$.$_handles$.hide())
      }));
      this.$_mouseInit$()
    }, _destroy:function() {
      function $_destroy$$($exp$$2$$) {
        $$$$20$$($exp$$2$$).removeClass("oj-resizable oj-resizable-disabled oj-resizable-resizing").removeData("resizable").removeData("oj-resizable").unbind(".resizable").find(".oj-resizable-handle").remove()
      }
      this.$_mouseDestroy$();
      var $wrapper$$;
      this.$elementIsWrapper$ && ($_destroy$$(this.element), $wrapper$$ = this.element, this.$originalElement$.css({position:$wrapper$$.css("position"), width:$wrapper$$.outerWidth(), height:$wrapper$$.outerHeight(), top:$wrapper$$.css("top"), left:$wrapper$$.css("left")}).insertAfter($wrapper$$), $wrapper$$.remove());
      this.$originalElement$.css("resize", this.$originalResizeStyle$);
      $_destroy$$(this.$originalElement$);
      return this
    }, $_mouseCapture$:function($event$$228$$) {
      var $i$$221$$, $handle$$20$$, $capture$$ = !1;
      for($i$$221$$ in this.handles) {
        if($handle$$20$$ = $$$$20$$(this.handles[$i$$221$$])[0], $handle$$20$$ === $event$$228$$.target || $$$$20$$.contains($handle$$20$$, $event$$228$$.target)) {
          $capture$$ = !0
        }
      }
      return!this.options.disabled && $capture$$
    }, $_mouseStart$:function($event$$229$$) {
      var $curleft_iniPos$$, $curtop$$, $cursor_o$$1$$;
      $cursor_o$$1$$ = this.options;
      $curleft_iniPos$$ = this.element.position();
      var $el$$11$$ = this.element;
      this.$resizing$ = !0;
      /absolute/.test($el$$11$$.css("position")) ? $el$$11$$.css({position:"absolute", top:$el$$11$$.css("top"), left:$el$$11$$.css("left")}) : $el$$11$$.is(".ui-draggable") && $el$$11$$.css({position:"absolute", top:$curleft_iniPos$$.top, left:$curleft_iniPos$$.left});
      this.$_renderProxy$();
      $curleft_iniPos$$ = this.$_num$(this.helper.css("left"));
      $curtop$$ = this.$_num$(this.helper.css("top"));
      $cursor_o$$1$$.containment && ($curleft_iniPos$$ += $$$$20$$($cursor_o$$1$$.containment).scrollLeft() || 0, $curtop$$ += $$$$20$$($cursor_o$$1$$.containment).scrollTop() || 0);
      this.offset = this.helper.offset();
      this.position = {left:$curleft_iniPos$$, top:$curtop$$};
      this.size = this.$_helper$ ? {width:this.helper.width(), height:this.helper.height()} : {width:$el$$11$$.width(), height:$el$$11$$.height()};
      this.$originalSize$ = this.$_helper$ ? {width:$el$$11$$.outerWidth(), height:$el$$11$$.outerHeight()} : {width:$el$$11$$.width(), height:$el$$11$$.height()};
      this.$originalPosition$ = {left:$curleft_iniPos$$, top:$curtop$$};
      this.$sizeDiff$ = {width:$el$$11$$.outerWidth() - $el$$11$$.width(), height:$el$$11$$.outerHeight() - $el$$11$$.height()};
      this.$originalMousePosition$ = {left:$event$$229$$.pageX, top:$event$$229$$.pageY};
      this.aspectRatio = "number" === typeof $cursor_o$$1$$.aspectRatio ? $cursor_o$$1$$.aspectRatio : this.$originalSize$.width / this.$originalSize$.height || 1;
      $cursor_o$$1$$ = $$$$20$$(".oj-resizable-" + this.axis).css("cursor");
      $$$$20$$("body").css("cursor", "auto" === $cursor_o$$1$$ ? this.axis + "-resize" : $cursor_o$$1$$);
      $el$$11$$.addClass("oj-resizable-resizing");
      this.$_propagate$("start", $event$$229$$);
      return!0
    }, $_mouseDrag$:function($event$$230$$) {
      var $data$$106_dx$$4$$, $el$$12$$ = this.helper, $props$$6$$ = {}, $dy$$4_smp$$ = this.$originalMousePosition$;
      $data$$106_dx$$4$$ = $event$$230$$.pageX - $dy$$4_smp$$.left || 0;
      var $dy$$4_smp$$ = $event$$230$$.pageY - $dy$$4_smp$$.top || 0, $trigger$$ = this.$_change$[this.axis];
      this.$prevPosition$ = {top:this.position.top, left:this.position.left};
      this.$prevSize$ = {width:this.size.width, height:this.size.height};
      if(!$trigger$$) {
        return!1
      }
      $data$$106_dx$$4$$ = $trigger$$.apply(this, [$event$$230$$, $data$$106_dx$$4$$, $dy$$4_smp$$]);
      this.$_updateVirtualBoundaries$($event$$230$$.shiftKey);
      if(this.$_aspectRatio$ || $event$$230$$.shiftKey) {
        $data$$106_dx$$4$$ = this.$_updateRatio$($data$$106_dx$$4$$, $event$$230$$)
      }
      $data$$106_dx$$4$$ = this.$_respectSize$($data$$106_dx$$4$$, $event$$230$$);
      this.$_updateCache$($data$$106_dx$$4$$);
      this.$_propagate$("resize", $event$$230$$);
      this.position.top !== this.$prevPosition$.top && ($props$$6$$.top = this.position.top + "px");
      this.position.left !== this.$prevPosition$.left && ($props$$6$$.left = this.position.left + "px");
      this.size.width !== this.$prevSize$.width && ($props$$6$$.width = this.size.width + "px");
      this.size.height !== this.$prevSize$.height && ($props$$6$$.height = this.size.height + "px");
      $el$$12$$.css($props$$6$$);
      !this.$_helper$ && this.$_proportionallyResizeElements$.length && this.$_proportionallyResize$();
      $$$$20$$.isEmptyObject($props$$6$$) || this._trigger("resize", $event$$230$$, this.ui());
      return!1
    }, $_mouseStop$:function($event$$231$$) {
      this.$resizing$ = !1;
      var $left$$6_pr_soffseth$$, $ista_s$$6_soffsetw$$, $top$$3$$, $o$$2$$ = this.options;
      this.$_helper$ && ($left$$6_pr_soffseth$$ = this.$_proportionallyResizeElements$, $left$$6_pr_soffseth$$ = ($ista_s$$6_soffsetw$$ = $left$$6_pr_soffseth$$.length && /textarea/i.test($left$$6_pr_soffseth$$[0].nodeName)) && this.$_hasScroll$($left$$6_pr_soffseth$$[0], "left") ? 0 : this.$sizeDiff$.height, $ista_s$$6_soffsetw$$ = $ista_s$$6_soffsetw$$ ? 0 : this.$sizeDiff$.width, $ista_s$$6_soffsetw$$ = {width:this.helper.width() - $ista_s$$6_soffsetw$$, height:this.helper.height() - $left$$6_pr_soffseth$$}, 
      $left$$6_pr_soffseth$$ = parseInt(this.element.css("left"), 10) + (this.position.left - this.$originalPosition$.left) || null, $top$$3$$ = parseInt(this.element.css("top"), 10) + (this.position.top - this.$originalPosition$.top) || null, $o$$2$$.animate || this.element.css($$$$20$$.extend($ista_s$$6_soffsetw$$, {top:$top$$3$$, left:$left$$6_pr_soffseth$$})), this.helper.height(this.size.height), this.helper.width(this.size.width), this.$_helper$ && !$o$$2$$.animate && this.$_proportionallyResize$());
      $$$$20$$("body").css("cursor", "auto");
      this.element.removeClass("oj-resizable-resizing");
      this.$_propagate$("stop", $event$$231$$);
      this.$_helper$ && this.helper.remove();
      return!1
    }, $_updateVirtualBoundaries$:function($forceAspectRatio_pMinWidth$$) {
      var $pMaxWidth$$, $pMinHeight$$, $pMaxHeight$$, $b$$43$$;
      $b$$43$$ = {minWidth:0, maxWidth:Infinity, minHeight:0, maxHeight:Infinity};
      if(this.$_aspectRatio$ || $forceAspectRatio_pMinWidth$$) {
        $forceAspectRatio_pMinWidth$$ = $b$$43$$.minHeight * this.aspectRatio, $pMinHeight$$ = $b$$43$$.minWidth / this.aspectRatio, $pMaxWidth$$ = $b$$43$$.maxHeight * this.aspectRatio, $pMaxHeight$$ = $b$$43$$.maxWidth / this.aspectRatio, $forceAspectRatio_pMinWidth$$ > $b$$43$$.minWidth && ($b$$43$$.minWidth = $forceAspectRatio_pMinWidth$$), $pMinHeight$$ > $b$$43$$.minHeight && ($b$$43$$.minHeight = $pMinHeight$$), $pMaxWidth$$ < $b$$43$$.maxWidth && ($b$$43$$.maxWidth = $pMaxWidth$$), $pMaxHeight$$ < 
        $b$$43$$.maxHeight && ($b$$43$$.maxHeight = $pMaxHeight$$)
      }
      this.$_vBoundaries$ = $b$$43$$
    }, $_updateCache$:function($data$$107$$) {
      this.offset = this.helper.offset();
      this.$_isNumber$($data$$107$$.left) && (this.position.left = $data$$107$$.left);
      this.$_isNumber$($data$$107$$.top) && (this.position.top = $data$$107$$.top);
      this.$_isNumber$($data$$107$$.height) && (this.size.height = $data$$107$$.height);
      this.$_isNumber$($data$$107$$.width) && (this.size.width = $data$$107$$.width)
    }, $_updateRatio$:function($data$$108$$) {
      var $cpos$$ = this.position, $csize$$ = this.size, $a$$66$$ = this.axis;
      this.$_isNumber$($data$$108$$.height) ? $data$$108$$.width = $data$$108$$.height * this.aspectRatio : this.$_isNumber$($data$$108$$.width) && ($data$$108$$.height = $data$$108$$.width / this.aspectRatio);
      "sw" === $a$$66$$ && ($data$$108$$.left = $cpos$$.left + ($csize$$.width - $data$$108$$.width), $data$$108$$.top = null);
      "nw" === $a$$66$$ && ($data$$108$$.top = $cpos$$.top + ($csize$$.height - $data$$108$$.height), $data$$108$$.left = $cpos$$.left + ($csize$$.width - $data$$108$$.width));
      return $data$$108$$
    }, $_respectSize$:function($data$$109$$) {
      var $o$$4$$ = this.$_vBoundaries$, $a$$67_ch$$2$$ = this.axis, $ismaxw$$ = this.$_isNumber$($data$$109$$.width) && $o$$4$$.maxWidth && $o$$4$$.maxWidth < $data$$109$$.width, $ismaxh$$ = this.$_isNumber$($data$$109$$.height) && $o$$4$$.maxHeight && $o$$4$$.maxHeight < $data$$109$$.height, $isminw$$ = this.$_isNumber$($data$$109$$.width) && $o$$4$$.minWidth && $o$$4$$.minWidth > $data$$109$$.width, $isminh$$ = this.$_isNumber$($data$$109$$.height) && $o$$4$$.minHeight && $o$$4$$.minHeight > $data$$109$$.height, 
      $dw$$ = this.$originalPosition$.left + this.$originalSize$.width, $dh$$ = this.position.top + this.size.height, $cw$$ = /sw|nw|w/.test($a$$67_ch$$2$$), $a$$67_ch$$2$$ = /nw|ne|n/.test($a$$67_ch$$2$$);
      $isminw$$ && ($data$$109$$.width = $o$$4$$.minWidth);
      $isminh$$ && ($data$$109$$.height = $o$$4$$.minHeight);
      $ismaxw$$ && ($data$$109$$.width = $o$$4$$.maxWidth);
      $ismaxh$$ && ($data$$109$$.height = $o$$4$$.maxHeight);
      $isminw$$ && $cw$$ && ($data$$109$$.left = $dw$$ - $o$$4$$.minWidth);
      $ismaxw$$ && $cw$$ && ($data$$109$$.left = $dw$$ - $o$$4$$.maxWidth);
      $isminh$$ && $a$$67_ch$$2$$ && ($data$$109$$.top = $dh$$ - $o$$4$$.minHeight);
      $ismaxh$$ && $a$$67_ch$$2$$ && ($data$$109$$.top = $dh$$ - $o$$4$$.maxHeight);
      $data$$109$$.width || $data$$109$$.height || $data$$109$$.left || !$data$$109$$.top ? $data$$109$$.width || ($data$$109$$.height || $data$$109$$.top || !$data$$109$$.left) || ($data$$109$$.left = null) : $data$$109$$.top = null;
      return $data$$109$$
    }, $_proportionallyResize$:function() {
      if(this.$_proportionallyResizeElements$.length) {
        var $i$$222$$, $j$$31$$, $borders$$, $paddings$$, $prel$$, $element$$60$$ = this.helper || this.element;
        for($i$$222$$ = 0;$i$$222$$ < this.$_proportionallyResizeElements$.length;$i$$222$$++) {
          $prel$$ = this.$_proportionallyResizeElements$[$i$$222$$];
          if(!this.$borderDif$) {
            for(this.$borderDif$ = [], $borders$$ = [$prel$$.css("borderTopWidth"), $prel$$.css("borderRightWidth"), $prel$$.css("borderBottomWidth"), $prel$$.css("borderLeftWidth")], $paddings$$ = [$prel$$.css("paddingTop"), $prel$$.css("paddingRight"), $prel$$.css("paddingBottom"), $prel$$.css("paddingLeft")], $j$$31$$ = 0;$j$$31$$ < $borders$$.length;$j$$31$$++) {
              this.$borderDif$[$j$$31$$] = (parseInt($borders$$[$j$$31$$], 10) || 0) + (parseInt($paddings$$[$j$$31$$], 10) || 0)
            }
          }
          $prel$$.css({height:$element$$60$$.height() - this.$borderDif$[0] - this.$borderDif$[2] || 0, width:$element$$60$$.width() - this.$borderDif$[1] - this.$borderDif$[3] || 0})
        }
      }
    }, $_renderProxy$:function() {
      this.$elementOffset$ = this.element.offset();
      this.$_helper$ ? (this.helper = this.helper || $$$$20$$("\x3cdiv style\x3d'overflow:hidden;'\x3e\x3c/div\x3e"), this.helper.addClass(this.$_helper$).css({width:this.element.outerWidth() - 1, height:this.element.outerHeight() - 1, position:"absolute", left:this.$elementOffset$.left + "px", top:this.$elementOffset$.top + "px"}), this.helper.appendTo("body").$disableSelection$()) : this.helper = this.element
    }, $_change$:{e:function($event$$232$$, $dx$$5$$) {
      return{width:this.$originalSize$.width + $dx$$5$$}
    }, w:function($event$$233$$, $dx$$6$$) {
      return{left:this.$originalPosition$.left + $dx$$6$$, width:this.$originalSize$.width - $dx$$6$$}
    }, n:function($event$$234$$, $dx$$7$$, $dy$$5$$) {
      return{top:this.$originalPosition$.top + $dy$$5$$, height:this.$originalSize$.height - $dy$$5$$}
    }, s:function($event$$235$$, $dx$$8$$, $dy$$6$$) {
      return{height:this.$originalSize$.height + $dy$$6$$}
    }, se:function($event$$236$$, $dx$$9$$, $dy$$7$$) {
      return $$$$20$$.extend(this.$_change$.s.apply(this, arguments), this.$_change$.e.apply(this, [$event$$236$$, $dx$$9$$, $dy$$7$$]))
    }, sw:function($event$$237$$, $dx$$10$$, $dy$$8$$) {
      return $$$$20$$.extend(this.$_change$.s.apply(this, arguments), this.$_change$.w.apply(this, [$event$$237$$, $dx$$10$$, $dy$$8$$]))
    }, ne:function($event$$238$$, $dx$$11$$, $dy$$9$$) {
      return $$$$20$$.extend(this.$_change$.n.apply(this, arguments), this.$_change$.e.apply(this, [$event$$238$$, $dx$$11$$, $dy$$9$$]))
    }, nw:function($event$$239$$, $dx$$12$$, $dy$$10$$) {
      return $$$$20$$.extend(this.$_change$.n.apply(this, arguments), this.$_change$.w.apply(this, [$event$$239$$, $dx$$12$$, $dy$$10$$]))
    }}, $_propagate$:function($n$$21$$, $event$$240$$) {
      $$$$20$$.ui.plugin.call(this, $n$$21$$, [$event$$240$$, this.ui()]);
      "resize" !== $n$$21$$ && this._trigger($n$$21$$, $event$$240$$, this.ui())
    }, plugins:{}, ui:function() {
      return{$originalElement$:this.$originalElement$, element:this.element, helper:this.helper, position:this.position, size:this.size, $originalSize$:this.$originalSize$, $originalPosition$:this.$originalPosition$, $prevSize$:this.$prevSize$, $prevPosition$:this.$prevPosition$}
    }});
    $$$$20$$.ui.plugin.add("resizable", "animate", {stop:function($event$$241$$) {
      var $that$$7$$ = $$$$20$$(this).data("oj-resizable"), $o$$6$$ = $that$$7$$.options, $pr$$1$$ = $that$$7$$.$_proportionallyResizeElements$, $ista$$1_style$$11$$ = $pr$$1$$.length && /textarea/i.test($pr$$1$$[0].nodeName), $left$$7_soffseth$$1$$ = $ista$$1_style$$11$$ && $that$$7$$.$_hasScroll$($pr$$1$$[0], "left") ? 0 : $that$$7$$.$sizeDiff$.height, $ista$$1_style$$11$$ = {width:$that$$7$$.size.width - ($ista$$1_style$$11$$ ? 0 : $that$$7$$.$sizeDiff$.width), height:$that$$7$$.size.height - 
      $left$$7_soffseth$$1$$}, $left$$7_soffseth$$1$$ = parseInt($that$$7$$.element.css("left"), 10) + ($that$$7$$.position.left - $that$$7$$.$originalPosition$.left) || null, $top$$4$$ = parseInt($that$$7$$.element.css("top"), 10) + ($that$$7$$.position.top - $that$$7$$.$originalPosition$.top) || null;
      $that$$7$$.element.animate($$$$20$$.extend($ista$$1_style$$11$$, $top$$4$$ && $left$$7_soffseth$$1$$ ? {top:$top$$4$$, left:$left$$7_soffseth$$1$$} : {}), {duration:$o$$6$$.animateDuration, $easing$:$o$$6$$.animateEasing, step:function() {
        var $data$$110$$ = {width:parseInt($that$$7$$.element.css("width"), 10), height:parseInt($that$$7$$.element.css("height"), 10), top:parseInt($that$$7$$.element.css("top"), 10), left:parseInt($that$$7$$.element.css("left"), 10)};
        $pr$$1$$ && $pr$$1$$.length && $$$$20$$($pr$$1$$[0]).css({width:$data$$110$$.width, height:$data$$110$$.height});
        $that$$7$$.$_updateCache$($data$$110$$);
        $that$$7$$.$_propagate$("resize", $event$$241$$)
      }})
    }});
    $$$$20$$.ui.plugin.add("resizable", "containment", {start:function() {
      var $element$$61$$, $p$$6$$, $co_oc$$, $ch$$3_height$$18$$, $cw$$1_width$$20$$, $that$$8$$ = $$$$20$$(this).data("oj-resizable"), $ce_el$$14$$ = $that$$8$$.element;
      $co_oc$$ = $that$$8$$.options.containment;
      if($ce_el$$14$$ = $co_oc$$ instanceof $$$$20$$ ? $co_oc$$.get(0) : /parent/.test($co_oc$$) ? $ce_el$$14$$.parent().get(0) : $co_oc$$) {
        $that$$8$$.$containerElement$ = $$$$20$$($ce_el$$14$$), /document/.test($co_oc$$) || $co_oc$$ === document ? ($that$$8$$.$containerOffset$ = {left:0, top:0}, $that$$8$$.$containerPosition$ = {left:0, top:0}, $that$$8$$.$parentData$ = {element:$$$$20$$(document), left:0, top:0, width:$$$$20$$(document).width(), height:$$$$20$$(document).height() || document.body.parentNode.scrollHeight}) : ($element$$61$$ = $$$$20$$($ce_el$$14$$), $p$$6$$ = [], $$$$20$$(["Top", "Right", "Left", "Bottom"]).each(function($i$$223$$, 
        $name$$95$$) {
          $p$$6$$[$i$$223$$] = $that$$8$$.$_num$($element$$61$$.css("padding" + $name$$95$$))
        }), $that$$8$$.$containerOffset$ = $element$$61$$.offset(), $that$$8$$.$containerPosition$ = $element$$61$$.position(), $that$$8$$.$containerSize$ = {height:$element$$61$$.innerHeight() - $p$$6$$[3], width:$element$$61$$.innerWidth() - $p$$6$$[1]}, $co_oc$$ = $that$$8$$.$containerOffset$, $ch$$3_height$$18$$ = $that$$8$$.$containerSize$.height, $cw$$1_width$$20$$ = $that$$8$$.$containerSize$.width, $cw$$1_width$$20$$ = $that$$8$$.$_hasScroll$($ce_el$$14$$, "left") ? $ce_el$$14$$.scrollWidth : 
        $cw$$1_width$$20$$, $ch$$3_height$$18$$ = $that$$8$$.$_hasScroll$($ce_el$$14$$) ? $ce_el$$14$$.scrollHeight : $ch$$3_height$$18$$, $that$$8$$.$parentData$ = {element:$ce_el$$14$$, left:$co_oc$$.left, top:$co_oc$$.top, width:$cw$$1_width$$20$$, height:$ch$$3_height$$18$$})
      }
    }, resize:function($event$$242$$, $ui$$8$$) {
      var $o$$8_woset$$, $co$$1_hoset$$, $cop_isParent$$, $cp_isOffsetRelative$$, $that$$9$$ = $$$$20$$(this).data("oj-resizable");
      $o$$8_woset$$ = $that$$9$$.options;
      $co$$1_hoset$$ = $that$$9$$.$containerOffset$;
      $cp_isOffsetRelative$$ = $that$$9$$.position;
      var $pRatio$$ = $that$$9$$.$_aspectRatio$ || $event$$242$$.shiftKey;
      $cop_isParent$$ = {top:0, left:0};
      var $ce$$1$$ = $that$$9$$.$containerElement$, $continueResize$$ = !0;
      $ce$$1$$[0] !== document && /static/.test($ce$$1$$.css("position")) && ($cop_isParent$$ = $co$$1_hoset$$);
      $cp_isOffsetRelative$$.left < ($that$$9$$.$_helper$ ? $co$$1_hoset$$.left : 0) && ($that$$9$$.size.width += $that$$9$$.$_helper$ ? $that$$9$$.position.left - $co$$1_hoset$$.left : $that$$9$$.position.left - $cop_isParent$$.left, $pRatio$$ && ($that$$9$$.size.height = $that$$9$$.size.width / $that$$9$$.aspectRatio, $continueResize$$ = !1), $that$$9$$.position.left = $o$$8_woset$$.helper ? $co$$1_hoset$$.left : 0);
      $cp_isOffsetRelative$$.top < ($that$$9$$.$_helper$ ? $co$$1_hoset$$.top : 0) && ($that$$9$$.size.height += $that$$9$$.$_helper$ ? $that$$9$$.position.top - $co$$1_hoset$$.top : $that$$9$$.position.top, $pRatio$$ && ($that$$9$$.size.width = $that$$9$$.size.height * $that$$9$$.aspectRatio, $continueResize$$ = !1), $that$$9$$.position.top = $that$$9$$.$_helper$ ? $co$$1_hoset$$.top : 0);
      $that$$9$$.offset.left = $that$$9$$.$parentData$.left + $that$$9$$.position.left;
      $that$$9$$.offset.top = $that$$9$$.$parentData$.top + $that$$9$$.position.top;
      $o$$8_woset$$ = Math.abs(($that$$9$$.$_helper$ ? $that$$9$$.offset.left - $cop_isParent$$.left : $that$$9$$.offset.left - $co$$1_hoset$$.left) + $that$$9$$.$sizeDiff$.width);
      $co$$1_hoset$$ = Math.abs(($that$$9$$.$_helper$ ? $that$$9$$.offset.top - $cop_isParent$$.top : $that$$9$$.offset.top - $co$$1_hoset$$.top) + $that$$9$$.$sizeDiff$.height);
      $cop_isParent$$ = $that$$9$$.$containerElement$.get(0) === $that$$9$$.element.parent().get(0);
      $cp_isOffsetRelative$$ = /relative|absolute/.test($that$$9$$.$containerElement$.css("position"));
      $cop_isParent$$ && $cp_isOffsetRelative$$ && ($o$$8_woset$$ -= Math.abs($that$$9$$.$parentData$.left));
      $o$$8_woset$$ + $that$$9$$.size.width >= $that$$9$$.$parentData$.width && ($that$$9$$.size.width = $that$$9$$.$parentData$.width - $o$$8_woset$$, $pRatio$$ && ($that$$9$$.size.height = $that$$9$$.size.width / $that$$9$$.aspectRatio, $continueResize$$ = !1));
      $co$$1_hoset$$ + $that$$9$$.size.height >= $that$$9$$.$parentData$.height && ($that$$9$$.size.height = $that$$9$$.$parentData$.height - $co$$1_hoset$$, $pRatio$$ && ($that$$9$$.size.width = $that$$9$$.size.height * $that$$9$$.aspectRatio, $continueResize$$ = !1));
      $continueResize$$ || ($that$$9$$.position.left = $ui$$8$$.$prevPosition$.left, $that$$9$$.position.top = $ui$$8$$.$prevPosition$.top, $that$$9$$.size.width = $ui$$8$$.$prevSize$.width, $that$$9$$.size.height = $ui$$8$$.$prevSize$.height)
    }, stop:function() {
      var $that$$10$$ = $$$$20$$(this).data("oj-resizable"), $o$$9$$ = $that$$10$$.options, $co$$2$$ = $that$$10$$.$containerOffset$, $cop$$1$$ = $that$$10$$.$containerPosition$, $ce$$2$$ = $that$$10$$.$containerElement$, $h$$6_helper$$ = $$$$20$$($that$$10$$.helper), $ho$$ = $h$$6_helper$$.offset(), $w$$6$$ = $h$$6_helper$$.outerWidth() - $that$$10$$.$sizeDiff$.width, $h$$6_helper$$ = $h$$6_helper$$.outerHeight() - $that$$10$$.$sizeDiff$.height;
      $that$$10$$.$_helper$ && (!$o$$9$$.animate && /relative/.test($ce$$2$$.css("position"))) && $$$$20$$(this).css({left:$ho$$.left - $cop$$1$$.left - $co$$2$$.left, width:$w$$6$$, height:$h$$6_helper$$});
      $that$$10$$.$_helper$ && (!$o$$9$$.animate && /static/.test($ce$$2$$.css("position"))) && $$$$20$$(this).css({left:$ho$$.left - $cop$$1$$.left - $co$$2$$.left, width:$w$$6$$, height:$h$$6_helper$$})
    }});
    $$$$20$$.ui.plugin.add("resizable", "alsoResize", {start:function() {
      function $_store$$($exp$$3$$) {
        $$$$20$$($exp$$3$$).each(function() {
          var $el$$15$$ = $$$$20$$(this);
          $el$$15$$.data("oj-resizable-alsoresize", {width:parseInt($el$$15$$.width(), 10), height:parseInt($el$$15$$.height(), 10), left:parseInt($el$$15$$.css("left"), 10), top:parseInt($el$$15$$.css("top"), 10)})
        })
      }
      var $o$$10$$ = $$$$20$$(this).data("oj-resizable").options;
      "object" !== typeof $o$$10$$.alsoResize || $o$$10$$.alsoResize.parentNode ? $_store$$($o$$10$$.alsoResize) : $o$$10$$.alsoResize.length ? ($o$$10$$.alsoResize = $o$$10$$.alsoResize[0], $_store$$($o$$10$$.alsoResize)) : $$$$20$$.each($o$$10$$.alsoResize, function($exp$$4$$) {
        $_store$$($exp$$4$$)
      })
    }, resize:function($event$$243$$, $ui$$9$$) {
      function $_alsoResize$$($exp$$5$$, $c$$25$$) {
        $$$$20$$($exp$$5$$).each(function() {
          var $el$$16$$ = $$$$20$$(this), $start$$25$$ = $$$$20$$(this).data("oj-resizable-alsoresize"), $style$$12$$ = {};
          $$$$20$$.each($c$$25$$ && $c$$25$$.length ? $c$$25$$ : $el$$16$$.parents($ui$$9$$.$originalElement$[0]).length ? ["width", "height"] : ["width", "height", "top", "left"], function($i$$224$$, $prop$$76$$) {
            var $sum$$ = ($start$$25$$[$prop$$76$$] || 0) + ($delta$$3$$[$prop$$76$$] || 0);
            $sum$$ && 0 <= $sum$$ && ($style$$12$$[$prop$$76$$] = $sum$$ || null)
          });
          $el$$16$$.css($style$$12$$)
        })
      }
      var $that$$12$$ = $$$$20$$(this).data("oj-resizable"), $o$$11$$ = $that$$12$$.options, $os$$ = $that$$12$$.$originalSize$, $op$$ = $that$$12$$.$originalPosition$, $delta$$3$$ = {height:$that$$12$$.size.height - $os$$.height || 0, width:$that$$12$$.size.width - $os$$.width || 0, top:$that$$12$$.position.top - $op$$.top || 0, left:$that$$12$$.position.left - $op$$.left || 0};
      "object" !== typeof $o$$11$$.alsoResize || $o$$11$$.alsoResize.nodeType ? $_alsoResize$$($o$$11$$.alsoResize, null) : $$$$20$$.each($o$$11$$.alsoResize, function($exp$$6$$, $c$$26$$) {
        $_alsoResize$$($exp$$6$$, $c$$26$$)
      })
    }, stop:function() {
      $$$$20$$(this).removeData("resizable-alsoresize")
    }});
    $$$$20$$.ui.plugin.add("resizable", "ghost", {start:function() {
      var $that$$13$$ = $$$$20$$(this).data("oj-resizable"), $o$$12$$ = $that$$13$$.options, $cs$$2$$ = $that$$13$$.size;
      $that$$13$$.ghost = $that$$13$$.$originalElement$.clone();
      $that$$13$$.ghost.css({opacity:0.25, display:"block", position:"relative", height:$cs$$2$$.height, width:$cs$$2$$.width, margin:0, left:0, top:0}).addClass("oj-resizable-ghost").addClass("string" === typeof $o$$12$$.ghost ? $o$$12$$.ghost : "");
      $that$$13$$.ghost.appendTo($that$$13$$.helper)
    }, resize:function() {
      var $that$$14$$ = $$$$20$$(this).data("oj-resizable");
      $that$$14$$.ghost && $that$$14$$.ghost.css({position:"relative", height:$that$$14$$.size.height, width:$that$$14$$.size.width})
    }, stop:function() {
      var $that$$15$$ = $$$$20$$(this).data("oj-resizable");
      $that$$15$$.ghost && $that$$15$$.helper && $that$$15$$.helper.get(0).removeChild($that$$15$$.ghost.get(0))
    }});
    $$$$20$$.ui.plugin.add("resizable", "grid", {resize:function() {
      var $that$$16$$ = $$$$20$$(this).data("oj-resizable"), $o$$13$$ = $that$$16$$.options, $cs$$3_oy$$ = $that$$16$$.size, $os$$1$$ = $that$$16$$.$originalSize$, $op$$1$$ = $that$$16$$.$originalPosition$, $a$$68$$ = $that$$16$$.axis, $grid$$ = "number" === typeof $o$$13$$.grid ? [$o$$13$$.grid, $o$$13$$.grid] : $o$$13$$.grid, $gridX$$ = $grid$$[0] || 1, $gridY$$ = $grid$$[1] || 1, $ox$$ = Math.round(($cs$$3_oy$$.width - $os$$1$$.width) / $gridX$$) * $gridX$$, $cs$$3_oy$$ = Math.round(($cs$$3_oy$$.height - 
      $os$$1$$.height) / $gridY$$) * $gridY$$, $newWidth$$2$$ = $os$$1$$.width + $ox$$, $newHeight$$2$$ = $os$$1$$.height + $cs$$3_oy$$, $isMaxWidth$$ = $o$$13$$.maxWidth && $o$$13$$.maxWidth < $newWidth$$2$$, $isMaxHeight$$ = $o$$13$$.maxHeight && $o$$13$$.maxHeight < $newHeight$$2$$, $isMinWidth$$ = $o$$13$$.minWidth && $o$$13$$.minWidth > $newWidth$$2$$, $isMinHeight$$ = $o$$13$$.minHeight && $o$$13$$.minHeight > $newHeight$$2$$;
      $o$$13$$.grid = $grid$$;
      $isMinWidth$$ && ($newWidth$$2$$ += $gridX$$);
      $isMinHeight$$ && ($newHeight$$2$$ += $gridY$$);
      $isMaxWidth$$ && ($newWidth$$2$$ -= $gridX$$);
      $isMaxHeight$$ && ($newHeight$$2$$ -= $gridY$$);
      /^(se|s|e)$/.test($a$$68$$) ? ($that$$16$$.size.width = $newWidth$$2$$, $that$$16$$.size.height = $newHeight$$2$$) : /^(ne)$/.test($a$$68$$) ? ($that$$16$$.size.width = $newWidth$$2$$, $that$$16$$.size.height = $newHeight$$2$$, $that$$16$$.position.top = $op$$1$$.top - $cs$$3_oy$$) : /^(sw)$/.test($a$$68$$) ? ($that$$16$$.size.width = $newWidth$$2$$, $that$$16$$.size.height = $newHeight$$2$$, $that$$16$$.position.left = $op$$1$$.left - $ox$$) : (0 < $newHeight$$2$$ - $gridY$$ ? ($that$$16$$.size.height = 
      $newHeight$$2$$, $that$$16$$.position.top = $op$$1$$.top - $cs$$3_oy$$) : ($that$$16$$.size.height = $gridY$$, $that$$16$$.position.top = $op$$1$$.top + $os$$1$$.height - $gridY$$), 0 < $newWidth$$2$$ - $gridX$$ ? ($that$$16$$.size.width = $newWidth$$2$$, $that$$16$$.position.left = $op$$1$$.left - $ox$$) : ($that$$16$$.size.width = $gridX$$, $that$$16$$.position.left = $op$$1$$.left + $os$$1$$.width - $gridX$$))
    }})
  })();
  (function() {
    var $sizeRelatedOptions$$ = {buttons:!0, height:!0, width:!0}, $resizableRelatedOptions$$ = {};
    $oj$$20$$.$__registerWidget$("oj.ojDialog", $$$$20$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{cancelBehavior:"icon", dragAffordance:"title-bar", height:"auto", initialVisibility:"show", modality:"modal", position:{my:"center", at:"center", of:window, collision:"fit", $using$:function($pos$$7$$) {
      var $topOffset$$ = $$$$20$$(this).css($pos$$7$$).offset().top;
      0 > $topOffset$$ && $$$$20$$(this).css("top", $pos$$7$$.top - $topOffset$$)
    }}, resizeBehavior:"resizable", role:"dialog", title:null, width:"300", beforeClose:null, beforeOpen:null, close:null, focus:null, open:null, resize:null, resizeStart:null, resizeStop:null}, _create:function() {
      this.$originalCss$ = {display:this.element[0].style.display, width:this.element[0].style.width, minHeight:this.element[0].style.minHeight, maxHeight:this.element[0].style.maxHeight, height:this.element[0].style.height};
      this.$originalPosition$ = {parent:this.element.parent(), index:this.element.parent().children().index(this.element)};
      this.$originalTitle$ = this.element.attr("title");
      this.options.title = this.options.title || this.$originalTitle$;
      this.$_createWrapper$();
      this.element.show().removeAttr("title").addClass("oj-dialog-content oj-dialog-default-content").appendTo(this.$uiDialog$);
      this.$userDefinedDialog$ = !1;
      var $b$$44_nestedContent$$ = this.element.find(".oj-dialog");
      $b$$44_nestedContent$$.length ? $b$$44_nestedContent$$.parents(".oj-dialog-header").length && (this.$userDefinedDialog$ = !0) : this.element.find(".oj-dialog-header").length && (this.$userDefinedDialog$ = !0);
      this.$userDefinedDialog$ && ($b$$44_nestedContent$$ = this.element.find(".oj-dialog-header"), $b$$44_nestedContent$$.prependTo(this.$uiDialog$), "icon" === this.options.cancelBehavior && this.$_createCloseButton$($b$$44_nestedContent$$));
      this.$userDefinedDialog$ || this.$_createTitlebar$();
      "title-bar" === this.options.dragAffordance && $$$$20$$.fn.draggable && this.$_makeDraggable$();
      "resizable" === this.options.resizeBehavior && $$$$20$$.fn.resizable && this.$_makeResizable$();
      this.$_isOpen$ = !1;
      this._super()
    }, _init:function() {
      "show" === this.options.initialVisibility && this.open()
    }, $_appendTo$:function() {
      return this.document.find("body").eq(0)
    }, _destroy:function() {
      var $next$$3$$, $originalPosition$$ = this.$originalPosition$;
      this.$_destroyOverlay$();
      this.element.removeUniqueId().removeClass("oj-dialog-content").css(this.$originalCss$).detach();
      this.$uiDialog$.stop(!0, !0).remove();
      this.$originalTitle$ && this.element.attr("title", this.$originalTitle$);
      $next$$3$$ = $originalPosition$$.parent.children().eq($originalPosition$$.index);
      $next$$3$$.length && $next$$3$$[0] !== this.element[0] ? $next$$3$$.before(this.element) : $originalPosition$$.parent.append(this.element)
    }, widget:$JSCompiler_get$$("$uiDialog$"), disable:$$$$20$$.noop, enable:$$$$20$$.noop, close:function($event$$244$$) {
      var $that$$17$$ = this;
      this.$_isOpen$ && !1 !== this._trigger("beforeClose", $event$$244$$) && (this.$_isOpen$ = !1, this.$_destroyOverlay$(), this.opener.filter(":focusable").focus().length || $$$$20$$(this.document[0].activeElement).blur(), this._hide(this.$uiDialog$, null, function() {
        $that$$17$$._trigger("close", $event$$244$$)
      }), $$$$20$$("#" + this.$_placeHolderId$).replaceWith($$$$20$$("#" + this.$_wrapperId$)))
    }, isOpen:$JSCompiler_get$$("$_isOpen$"), $moveToTop$:function() {
      this.$_moveToTop$()
    }, $_moveToTop$:function($event$$245$$, $silent$$19$$) {
      if(null === this.options.appendTo) {
        var $multipleDialogs$$ = !1, $zIndexSmallest$$ = parseInt(this.$uiDialog$.css("zIndex"), 10);
        $$$$20$$(".oj-dialog").each(function() {
          if($$$$20$$(this) != this.$uiDialog$) {
            $multipleDialogs$$ = !0;
            var $zIndexCurrent$$ = parseInt($$$$20$$(this).css("zIndex"), 10);
            $zIndexSmallest$$ > $zIndexCurrent$$ && ($zIndexSmallest$$ = $zIndexCurrent$$)
          }
        });
        var $reset$$ = !1;
        $multipleDialogs$$ && $$$$20$$(".oj-dialog").each(function() {
          $$$$20$$(this) != this.$uiDialog$ && ($$$$20$$(this).css({position:"absolute", zIndex:$zIndexSmallest$$}), $reset$$ = !0)
        });
        $multipleDialogs$$ && this.$uiDialog$.css({position:"absolute", zIndex:$zIndexSmallest$$ + 1});
        return $reset$$
      }
      var $moved$$ = !!this.$uiDialog$.nextAll(":visible").insertBefore(this.$uiDialog$).length;
      $moved$$ && !$silent$$19$$ && this._trigger("focus", $event$$245$$);
      return $moved$$
    }, open:function($event$$246$$) {
      if(!1 !== this._trigger("beforeOpen", $event$$246$$)) {
        var $that$$18$$ = this;
        this.$_isOpen$ ? this.$_moveToTop$() && this.$_focusTabbable$() : (this.$_isOpen$ = !0, this.opener = $$$$20$$(this.document[0].activeElement), this.$_size$(), this.$_relocateWithPutback$(), this.$_createOverlay$(), this.$_position$(), this.$_moveToTop$(null, !0), this._show(this.$uiDialog$, null, function() {
          $that$$18$$.$_focusTabbable$();
          $that$$18$$._trigger("focus")
        }), this._trigger("open"))
      }
    }, $_focusTabbable$:function() {
      var $hasFocus$$ = this.element.find("[autofocus]");
      $hasFocus$$.length || ($hasFocus$$ = this.element.find(":tabbable"));
      $hasFocus$$.length || this.$uiDialogButtonPane$ && ($hasFocus$$ = this.$uiDialogButtonPane$.find(":tabbable"));
      $hasFocus$$.length || this.$uiDialogTitlebarClose$ && ($hasFocus$$ = this.$uiDialogTitlebarClose$.filter(":tabbable"));
      $hasFocus$$.length || ($hasFocus$$ = this.$uiDialog$);
      $hasFocus$$.eq(0).focus()
    }, $_keepFocus$:function($event$$247$$) {
      function $checkFocus$$() {
        var $activeElement$$ = this.document[0].activeElement;
        this.$uiDialog$[0] === $activeElement$$ || $$$$20$$.contains(this.$uiDialog$[0], $activeElement$$) || this.$_focusTabbable$()
      }
      $event$$247$$.preventDefault();
      $checkFocus$$.call(this);
      this._delay($checkFocus$$)
    }, $_createWrapper$:function() {
      this.element.uniqueId();
      this.$_elementId$ = this.element.attr("id");
      this.$_wrapperId$ = "ojDialogWrapper-" + this.$_elementId$;
      this.$uiDialog$ = $$$$20$$("\x3cdiv\x3e").addClass("oj-dialog oj-helper-reset-inheritable oj-component oj-dialog-front ").hide().attr({tabIndex:-1, role:this.options.role, id:this.$_wrapperId$});
      this.$_cssMinWidth$ = this.element.css("min-width");
      this.$uiDialog$.css("min-width", this.$_cssMinWidth$);
      this.$_cssMaxWidth$ = this.element.css("max-width");
      this.$uiDialog$.css("max-width", this.$_cssMaxWidth$);
      this.$_cssMinHeight$ = this.element.css("min-height");
      this.$uiDialog$.css("min-height", this.$_cssMinHeight$);
      this.$_cssMaxHeight$ = this.element.css("max-height");
      this.$uiDialog$.css("max-height", this.$_cssMaxHeight$);
      this.$uiDialog$.insertBefore(this.element);
      this._on(this.$uiDialog$, {keydown:function($event$$248$$) {
        if("none" != this.options.cancelBehavior && !$event$$248$$.isDefaultPrevented() && $event$$248$$.keyCode && $event$$248$$.keyCode === $$$$20$$.ui.keyCode.ESCAPE) {
          $event$$248$$.preventDefault(), this.close($event$$248$$)
        }else {
          if($event$$248$$.keyCode === $$$$20$$.ui.keyCode.TAB) {
            var $last$$2_tabbables$$ = this.$uiDialog$.find(":tabbable"), $first$$4$$ = $last$$2_tabbables$$.filter(":first"), $last$$2_tabbables$$ = $last$$2_tabbables$$.filter(":last");
            $event$$248$$.target !== $last$$2_tabbables$$[0] && $event$$248$$.target !== this.$uiDialog$[0] || $event$$248$$.shiftKey ? $event$$248$$.target !== $first$$4$$[0] && $event$$248$$.target !== this.$uiDialog$[0] || !$event$$248$$.shiftKey || ($last$$2_tabbables$$.focus(1), $event$$248$$.preventDefault()) : ($first$$4$$.focus(1), $event$$248$$.preventDefault())
          }
        }
      }, mousedown:function($event$$249$$) {
        this.$_moveToTop$($event$$249$$) && this.$_focusTabbable$()
      }});
      this.element.find("[aria-describedby]").length || this.$uiDialog$.attr({"aria-describedby":this.element.uniqueId().attr("id")})
    }, $_createCloseButton$:function($domDestination$$) {
      this.$uiDialogTitlebarClose$ = $$$$20$$("\x3cbutton\x3e\x3c/button\x3e").ojButton({display:"icons", icons:{start:"oj-component-icon oj-dialog-close-icon"}, text:!1}).addClass("oj-dialog-header-close oj-button-no-chrome").appendTo($domDestination$$);
      this._on(this.$uiDialogTitlebarClose$, {click:function($event$$250$$) {
        $event$$250$$.preventDefault();
        this.close($event$$250$$)
      }})
    }, $_createTitlebar$:function() {
      var $uiDialogTitle$$;
      this.$uiDialogTitlebar$ = $$$$20$$("\x3cdiv\x3e").addClass("oj-dialog-header oj-helper-clearfix").prependTo(this.$uiDialog$);
      this._on(this.$uiDialogTitlebar$, {mousedown:function($event$$251$$) {
        $$$$20$$($event$$251$$.target).closest(".oj-dialog-close-icon") || this.$uiDialog$.focus()
      }});
      "icon" === this.options.cancelBehavior && this.$_createCloseButton$(this.$uiDialogTitlebar$);
      $uiDialogTitle$$ = $$$$20$$("\x3cspan\x3e").uniqueId().addClass("oj-dialog-title").prependTo(this.$uiDialogTitlebar$);
      this.$_title$($uiDialogTitle$$);
      this.$uiDialog$.attr({"aria-labelledby":$uiDialogTitle$$.attr("id")})
    }, $_title$:function($title$$10$$) {
      this.options.title || $title$$10$$.html("\x26#160;");
      $title$$10$$.text(this.options.title)
    }, $_makeDraggable$:function() {
      function $filteredUi$$($ui$$10$$) {
        return{position:$ui$$10$$.position, offset:$ui$$10$$.offset}
      }
      var $that$$19$$ = this, $options$$267$$ = this.options;
      this.$uiDialog$.draggable({cancel:".oj-dialog-content, .oj-dialog-header-close", handle:".oj-dialog-header", containment:"document", start:function($event$$252$$, $ui$$11$$) {
        $$$$20$$(this).addClass("oj-dialog-dragging");
        $that$$19$$.$_blockFrames$();
        $that$$19$$._trigger("dragStart", $event$$252$$, $filteredUi$$($ui$$11$$))
      }, $drag$:function($event$$253$$, $ui$$12$$) {
        $that$$19$$._trigger("drag", $event$$253$$, $filteredUi$$($ui$$12$$))
      }, stop:function($event$$254$$, $ui$$13$$) {
        $options$$267$$.position = [$ui$$13$$.position.left - $that$$19$$.document.scrollLeft(), $ui$$13$$.position.top - $that$$19$$.document.scrollTop()];
        $$$$20$$(this).removeClass("oj-dialog-dragging");
        $that$$19$$.$_unblockFrames$();
        $that$$19$$._trigger("dragStop", $event$$254$$, $filteredUi$$($ui$$13$$))
      }})
    }, $_makeResizable$:function() {
      function $filteredUi$$1$$($ui$$14$$) {
        return{$originalPosition$:$ui$$14$$.$originalPosition$, $originalSize$:$ui$$14$$.$originalSize$, position:$ui$$14$$.position, size:$ui$$14$$.size}
      }
      var $that$$20$$ = this, $options$$268$$ = this.options, $position$$8$$ = this.$uiDialog$.css("position");
      this.$_resizableComponent$ = this.$uiDialog$.ojResizable.bind(this.$uiDialog$);
      this.$_resizableComponent$({cancel:".oj-dialog-content", containment:"document", alsoResize:this.element, minHeight:this.$_minHeight$(), handles:"n,e,s,w,se,sw,ne,nw", start:function($event$$255$$, $ui$$15$$) {
        $$$$20$$(this).addClass("oj-dialog-resizing");
        $that$$20$$.$_blockFrames$();
        $that$$20$$._trigger("ojstart", $event$$255$$, $filteredUi$$1$$($ui$$15$$))
      }, resize:function($event$$256$$, $ui$$16$$) {
        $that$$20$$._trigger("ojresize", $event$$256$$, $filteredUi$$1$$($ui$$16$$))
      }, stop:function($event$$257$$, $ui$$17$$) {
        $options$$268$$.height = $$$$20$$(this).height();
        $options$$268$$.width = $$$$20$$(this).width();
        $$$$20$$(this).removeClass("oj-dialog-resizing");
        $that$$20$$.$_unblockFrames$();
        $that$$20$$._trigger("ojstop", $event$$257$$, $filteredUi$$1$$($ui$$17$$))
      }}).css("position", $position$$8$$)
    }, $_minHeight$:function() {
      var $options$$269$$ = this.options;
      return"auto" === $options$$269$$.height ? this.$_cssMinHeight$ : Math.min(this.$_cssMinHeight$, $options$$269$$.height)
    }, $_position$:function() {
      var $isVisible$$ = this.$uiDialog$.is(":visible");
      $isVisible$$ || this.$uiDialog$.show();
      this.$uiDialog$.position(this.options.position);
      $isVisible$$ || this.$uiDialog$.hide()
    }, _setOptions:function($options$$270$$) {
      var $that$$21$$ = this, $resize$$2$$ = !1, $resizableOptions$$ = {};
      $$$$20$$.each($options$$270$$, function($key$$82$$, $value$$179$$) {
        $that$$21$$._setOption($key$$82$$, $value$$179$$);
        $key$$82$$ in $sizeRelatedOptions$$ && ($resize$$2$$ = !0);
        $key$$82$$ in $resizableRelatedOptions$$ && ($resizableOptions$$[$key$$82$$] = $value$$179$$)
      });
      $resize$$2$$ && (this.$_size$(), this.$_position$());
      this.$uiDialog$.is(":data(oj-resizable)") && this.$_resizableComponent$("option", $resizableOptions$$)
    }, _setOption:function($key$$83$$, $value$$180$$) {
      var $isDraggable_isResizable$$, $uiDialog$$ = this.$uiDialog$;
      "disabled" !== $key$$83$$ && (this._super($key$$83$$, $value$$180$$), "draggable" === $key$$83$$ && (($isDraggable_isResizable$$ = $uiDialog$$.is(":data(oj-draggable)")) && !$value$$180$$ && $uiDialog$$.draggable("destroy"), !$isDraggable_isResizable$$ && $value$$180$$ && this.$_makeDraggable$()), "position" === $key$$83$$ && this.$_position$(), "resizable" === $key$$83$$ && (($isDraggable_isResizable$$ = $uiDialog$$.is(":data(oj-resizable)")) && !$value$$180$$ && $uiDialog$$.$_resizableComponent$("destroy"), 
      $isDraggable_isResizable$$ && "string" === typeof $value$$180$$ && $uiDialog$$.$_resizableComponent$("option", "handles", $value$$180$$), $isDraggable_isResizable$$ || !1 === $value$$180$$ || this.$_makeResizable$()), "title" === $key$$83$$ && this.$_title$(this.$uiDialogTitlebar$.find(".oj-dialog-title")))
    }, $_size$:function() {
      var $nonContentHeight$$, $minContentHeight$$, $maxContentHeight$$, $options$$271$$ = this.options;
      this.element.show().css({width:"auto", minHeight:0, maxHeight:"none", height:0});
      this.$_cssMinWidth$ > $options$$271$$.width && ($options$$271$$.width = this.$_cssMinWidth$);
      $nonContentHeight$$ = this.$uiDialog$.css({height:"auto", width:$options$$271$$.width}).outerHeight();
      $minContentHeight$$ = Math.max(0, this.$_cssMinHeight$ - $nonContentHeight$$);
      $maxContentHeight$$ = "number" === typeof this.$_cssMaxHeight$ ? Math.max(0, this.$_cssMaxHeight$ - $nonContentHeight$$) : "none";
      "auto" === $options$$271$$.height ? this.element.css({minHeight:$minContentHeight$$, maxHeight:$maxContentHeight$$, height:"auto"}) : this.element.height(Math.max(0, $options$$271$$.height - $nonContentHeight$$));
      this.$uiDialog$.is(":data(oj-resizable)") && this.$uiDialog$.$_resizableComponent$("option", "minHeight", this.$_minHeight$())
    }, $_blockFrames$:function() {
      this.$iframeBlocks$ = this.document.find("iframe").map(function() {
        var $iframe$$ = $$$$20$$(this), $offset$$24$$ = $iframe$$.offset();
        return $$$$20$$("\x3cdiv\x3e").css({position:"absolute", width:$iframe$$.outerWidth(), height:$iframe$$.outerHeight()}).appendTo($iframe$$.parent()).offset($offset$$24$$)[0]
      })
    }, $_unblockFrames$:function() {
      this.$iframeBlocks$ && (this.$iframeBlocks$.remove(), delete this.$iframeBlocks$)
    }, $_allowInteraction$:function($event$$258$$) {
      return $$$$20$$($event$$258$$.target).closest(".oj-dialog").length ? !0 : !!$$$$20$$($event$$258$$.target).closest(".oj-datepicker").length
    }, $_relocateWithPutback$:function() {
      this.$_placeHolderId$ = "ojDialogPlaceHolder-" + this.$_elementId$;
      this.$_placeHolder$ = $$$$20$$("\x3cdiv\x3e").hide().attr({id:this.$_placeHolderId$});
      this.$_placeHolder$.insertBefore($$$$20$$("#" + this.$_wrapperId$));
      this.$uiDialog$.appendTo(this.$_appendTo$())
    }, $_createOverlay$:function() {
      if("modeless" !== this.options.modality) {
        var $that$$22$$ = this, $widgetFullName$$ = this.widgetFullName;
        $$$$20$$.ui.dialog.overlayInstances || this._delay(function() {
          $$$$20$$.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function($event$$259$$) {
            $that$$22$$.$_allowInteraction$($event$$259$$) || ($event$$259$$.preventDefault(), $$$$20$$(".oj-dialog:visible:last .oj-dialog-content").data($widgetFullName$$).$_focusTabbable$())
          })
        });
        this.$overlay$ = $$$$20$$("\x3cdiv\x3e").addClass("oj-component-overlay oj-dialog-front");
        this.$overlay$.appendTo(this.$_appendTo$());
        this._on(this.$overlay$, {mousedown:"_keepFocus"});
        $$$$20$$.ui.dialog.overlayInstances++
      }
    }, $_destroyOverlay$:function() {
      "modeless" !== this.options.modality && this.$overlay$ && ($$$$20$$.ui.dialog.overlayInstances--, $$$$20$$.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.$overlay$.remove(), this.$overlay$ = null)
    }, getNodeBySubId:function($dotSubId_locator$$14_subId$$8$$) {
      if(null == $dotSubId_locator$$14_subId$$8$$) {
        return this.element ? this.element[0] : null
      }
      $dotSubId_locator$$14_subId$$8$$ = $dotSubId_locator$$14_subId$$8$$.subId;
      switch($dotSubId_locator$$14_subId$$8$$) {
        case "oj-dialog":
        ;
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
        case "oj-resizable-n":
        ;
        case "oj-resizable-e":
        ;
        case "oj-resizable-s":
        ;
        case "oj-resizable-w":
        ;
        case "oj-resizable-se":
        ;
        case "oj-resizable-sw":
        ;
        case "oj-resizable-ne":
        ;
        case "oj-resizable-nw":
          return $dotSubId_locator$$14_subId$$8$$ = "." + $dotSubId_locator$$14_subId$$8$$, this.widget().find($dotSubId_locator$$14_subId$$8$$)[0]
      }
      return null
    }});
    $$$$20$$.ui.dialog.overlayInstances = 0
  })()
});
