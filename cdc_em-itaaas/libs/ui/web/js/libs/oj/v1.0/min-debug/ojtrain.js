define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$33$$, $$$$32$$) {
  (function() {
    $oj$$33$$.$__registerWidget$("oj.ojTrain", $$$$32$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{steps:[], selection:"next", currentStep:"", optionChange:null}, $_stepNum$:0, $_stepArray$:null, _create:function() {
      var $options$$296$$ = this.options;
      this._super();
      this.$_stepNum$ = $options$$296$$.steps.length;
      this.$_marginType$ = (this.$_isRtl$ = "rtl" === this.$_GetReadingDirection$()) ? "margin-right" : "margin-left";
      this.$_alignType$ = this.$_isRtl$ ? "right" : "left";
      var $bar_i$$267$$ = $$$$32$$("\x3cdiv class\x3d'oj-train-bar'\x3e\x3c/div\x3e");
      this.$_maxStepWidth$ = this.element.width() < 107 * (this.$_stepNum$ - 1) + 72 ? (this.element.width() - 72) / (this.$_stepNum$ - 1) : 107;
      this.$_centerMargin$ = (this.element.width() - this.$_maxStepWidth$ * (this.$_stepNum$ - 1) - 72) / 2;
      this.$_stepList$ = $$$$32$$("\x3cul\x3e").attr({"aria-label":"Train Component"}).css({margin:"0", padding:"0"});
      1 < this.$_stepNum$ && $bar_i$$267$$.css({"margin-top":"7px", width:(this.$_stepNum$ - 1) * this.$_maxStepWidth$ + "px"}).css(this.$_marginType$, 36 + this.$_centerMargin$ + "px").css(this.$_alignType$, 0);
      $bar_i$$267$$.appendTo(this.element);
      this.$_progressbar$ = $$$$32$$("\x3cdiv class\x3d'oj-train-bar-overlay'\x3e\x3c/div\x3e");
      this.$_progressbar$.appendTo(this.element);
      this.$_setupArray$();
      this.$_currentStepIndex$ = this.$_getCurrentStepIndex$($options$$296$$.currentStep);
      for($bar_i$$267$$ = 0;$bar_i$$267$$ < this.$_stepNum$;$bar_i$$267$$++) {
        var $stepTag$$ = $$$$32$$("\x3cli\x3e").attr({id:this.$_stepArray$[$bar_i$$267$$][1]}).css({"list-style-type":"none", position:"absolute"}).css(this.$_marginType$, this.$_centerMargin$ + this.$_maxStepWidth$ * $bar_i$$267$$ + "px").css(this.$_alignType$, 0);
        this.$_stepList$.append($stepTag$$);
        $bar_i$$267$$ == this.$_currentStepIndex$ + 1 && "next" == $options$$296$$.selection && (this.$_stepArray$[$bar_i$$267$$][2] = "on");
        this.$_drawLabel$($bar_i$$267$$);
        this.$_drawStepFill$($bar_i$$267$$);
        this.$_drawButton$($bar_i$$267$$);
        this.$_drawMessageType$($bar_i$$267$$)
      }
      this.$_updateProgressWidth$();
      this.element.addClass("oj-train oj-component oj-component-content oj-corner-all")
    }, $_updateProgressWidth$:function() {
      this.$_progressbar$.css({"margin-top":"7px", width:(this.$_currentStepIndex$ === this.$_stepNum$ - 1 ? (this.$_stepNum$ - 1) * this.$_maxStepWidth$ : this.$_maxStepWidth$ * this.$_currentStepIndex$ + 53.5 * (this.$_maxStepWidth$ / 107)) + "px"}).css(this.$_marginType$, this.$_centerMargin$ + 36 + "px").css(this.$_alignType$, 0);
      this.$_stepList$.appendTo(this.element)
    }, $_setupArray$:function() {
      var $options$$297$$ = this.options;
      this.$_stepArray$ = [];
      for(var $i$$268$$ = 0;$i$$268$$ < this.$_stepNum$;$i$$268$$++) {
        var $step$$2$$ = $options$$297$$.steps[$i$$268$$];
        this.$_stepArray$[$i$$268$$] = Array(5);
        this.$_stepArray$[$i$$268$$][2] = $options$$297$$.selection && "next" != $options$$297$$.selection ? $options$$297$$.selection : "off";
        this.$_stepArray$[$i$$268$$][3] = "unvisited";
        for(var $key$$111$$ in $step$$2$$) {
          "name" === $key$$111$$ ? this.$_stepArray$[$i$$268$$][0] = $step$$2$$[$key$$111$$] : "id" === $key$$111$$ ? this.$_stepArray$[$i$$268$$][1] = $step$$2$$[$key$$111$$] : "selection" === $key$$111$$ ? this.$_stepArray$[$i$$268$$][2] = $step$$2$$[$key$$111$$] : "state" === $key$$111$$ ? this.$_stepArray$[$i$$268$$][3] = $step$$2$$[$key$$111$$] : "messageType" === $key$$111$$ && (this.$_stepArray$[$i$$268$$][4] = $step$$2$$[$key$$111$$])
        }
      }
    }, $_drawButton$:function($index$$182$$) {
      var $button$$1$$ = $$$$32$$("\x3cdiv/\x3e"), $scrnRead$$ = $$$$32$$("\x3cspan/\x3e"), $self$$100$$ = this, $desc$$ = "";
      if(this.$_stepArray$[$index$$182$$]) {
        var $state$$4_stepLi$$ = this.$_stepArray$[$index$$182$$][3];
        this.$_currentStepIndex$ === $index$$182$$ ? ($button$$1$$.addClass("oj-train-button-current"), $desc$$ = ". This is the current step.") : "visited" === $state$$4_stepLi$$ ? ($button$$1$$.addClass("oj-train-button-visited"), $desc$$ = ". This step has been visited.") : "unvisited" === $state$$4_stepLi$$ ? ($button$$1$$.addClass("oj-train-button-unvisited"), $desc$$ = ". This step has not been visited yet.") : $button$$1$$.addClass("oj-train-button-disabled");
        "disabled" === this.$_stepArray$[$index$$182$$][3] || null != this.options.disabled && this.options.disabled || "on" !== this.$_stepArray$[$index$$182$$][2] || (this._hoverable($button$$1$$), $button$$1$$.bind("click" + this.eventNamespace, function() {
          var $oldStep$$ = $self$$100$$.options.currentStep;
          $self$$100$$.options.currentStep = this.parentNode.id;
          $self$$100$$.$_fireOptionChange$("currentStep", $oldStep$$, this.parentNode.id, !0)
        }));
        $button$$1$$.css({"margin-top":"4px", width:"12px", height:"12px"}).css(this.$_marginType$, "29px").css(this.$_alignType$, 0);
        $state$$4_stepLi$$ = this.$_stepList$.children().eq($index$$182$$).children();
        3 <= $state$$4_stepLi$$.length ? ($state$$4_stepLi$$[2].remove(), $button$$1$$.insertAfter($state$$4_stepLi$$[1])) : this.$_stepList$.children().eq($index$$182$$).append($button$$1$$);
        $scrnRead$$.text($desc$$);
        $scrnRead$$.css("display", "none");
        this.$_stepList$.children().eq($index$$182$$).find("a").append($scrnRead$$)
      }
    }, $_drawMessageType$:function($index$$183$$) {
      var $icon$$4$$ = $$$$32$$("\x3cdiv/\x3e"), $scrnRead$$1$$ = $$$$32$$("\x3cspan/\x3e"), $desc$$1$$ = "", $self$$101$$ = this;
      if(this.$_stepArray$[$index$$183$$]) {
        var $messageType$$ = this.$_stepArray$[$index$$183$$][4];
        "complete" === $messageType$$ ? ($icon$$4$$.addClass("oj-train-icon-complete"), $desc$$1$$ = " Complete") : "info" === $messageType$$ ? ($icon$$4$$.addClass("oj-train-icon-info"), $desc$$1$$ = " Info") : "error" === $messageType$$ ? ($icon$$4$$.addClass("oj-train-icon-error"), $desc$$1$$ = " Error") : "warning" === $messageType$$ && ($icon$$4$$.addClass("oj-train-icon-warning"), $desc$$1$$ = " Warning");
        var $stepLi$$1$$ = this.$_stepList$.children().eq($index$$183$$).children();
        4 <= $stepLi$$1$$.length && $stepLi$$1$$[3].remove();
        "disabled" === this.$_stepArray$[$index$$183$$][3] || null != this.options.disabled && this.options.disabled || "on" !== this.$_stepArray$[$index$$183$$][2] || (this._hoverable($icon$$4$$), $icon$$4$$.bind("click" + this.eventNamespace, function() {
          var $oldStep$$1$$ = $self$$101$$.options.currentStep;
          $self$$101$$.options.currentStep = this.parentNode.id;
          $self$$101$$.$_fireOptionChange$("currentStep", $oldStep$$1$$, this.parentNode.id, !0)
        }));
        null != $messageType$$ && "none" != $messageType$$ && ($icon$$4$$.css({"margin-top":"9px", height:"9px", width:"9px"}).css(this.$_marginType$, "34px").css(this.$_alignType$, 0), $scrnRead$$1$$.text($desc$$1$$), $scrnRead$$1$$.css("display", "none"), this.$_stepList$.children().eq($index$$183$$).find("a").append($scrnRead$$1$$), this.$_stepList$.children().eq($index$$183$$).append($icon$$4$$))
      }
    }, $_fireOptionChange$:function($key$$112$$, $previousValue$$8$$, $value$$200$$, $originalEvent$$5$$) {
      this._trigger("optionChange", $originalEvent$$5$$, {option:$key$$112$$, previousValue:$previousValue$$8$$, value:$value$$200$$, optionMetadata:{writeback:$originalEvent$$5$$ ? "shouldWrite" : "shouldNotWrite"}})
    }, $_drawStepFill$:function($index$$184_stepLi$$2$$) {
      var $stepFill$$ = $$$$32$$("\x3cdiv/\x3e");
      this.$_stepArray$[$index$$184_stepLi$$2$$] && ($index$$184_stepLi$$2$$ <= this.$_currentStepIndex$ ? $stepFill$$.addClass("oj-train-stepBackground-overlay") : $stepFill$$.addClass("oj-train-stepBackground"), $stepFill$$.css(this.$_marginType$, "25px").css(this.$_alignType$, 0), $index$$184_stepLi$$2$$ = this.$_stepList$.children().eq($index$$184_stepLi$$2$$).children(), 1 < $index$$184_stepLi$$2$$.length && $index$$184_stepLi$$2$$[1].remove(), $stepFill$$.insertAfter($index$$184_stepLi$$2$$[0]))
    }, $_drawLabel$:function($index$$185$$) {
      var $self$$102$$ = this;
      if(this.$_stepArray$[$index$$185$$]) {
        var $label$$5$$ = $$$$32$$("\x3ca\x3e" + this.$_stepArray$[$index$$185$$][0] + "\x3c/a\x3e");
        $label$$5$$.addClass("oj-train-label");
        $label$$5$$.css("margin-bottom", "7px");
        $label$$5$$.css(this.$_alignType$, 0);
        $index$$185$$ === this.$_currentStepIndex$ ? $label$$5$$.addClass("oj-selected") : "visited" === this.$_stepArray$[$index$$185$$][3] ? $label$$5$$.addClass("oj-visited") : "disabled" === this.$_stepArray$[$index$$185$$][3] && $label$$5$$.addClass("oj-disabled");
        "on" !== this.$_stepArray$[$index$$185$$][2] || null != this.options.disabled && this.options.disabled || ($label$$5$$.attr("href", "#"), this._hoverable($label$$5$$), $label$$5$$.bind("click keydown" + this.eventNamespace, function($e$$118_oldStep$$2$$) {
          if(13 == $e$$118_oldStep$$2$$.keyCode || "click" == $e$$118_oldStep$$2$$.type) {
            $e$$118_oldStep$$2$$ = $self$$102$$.options.currentStep, $self$$102$$.options.currentStep = this.parentNode.id, $self$$102$$.$_fireOptionChange$("currentStep", $e$$118_oldStep$$2$$, this.parentNode.id, !0)
          }
        }));
        var $stepLi$$3$$ = this.$_stepList$.children().eq($index$$185$$).children();
        1 <= $stepLi$$3$$.length && $stepLi$$3$$[0].remove();
        this.$_stepList$.children().eq($index$$185$$).prepend($label$$5$$)
      }
    }, $_getCurrentStepIndex$:function($id$$33$$) {
      for(var $i$$269$$ = 0;$i$$269$$ < this.$_stepNum$;$i$$269$$++) {
        if(this.$_stepArray$[$i$$269$$] && this.$_stepArray$[$i$$269$$][1] === $id$$33$$) {
          return $i$$269$$
        }
      }
      return 0
    }, getStepName:function($id$$34$$) {
      for(var $i$$270$$ = 0;$i$$270$$ < this.$_stepNum$;$i$$270$$++) {
        if(this.$_stepArray$[$i$$270$$] && this.$_stepArray$[$i$$270$$][1] === $id$$34$$) {
          return this.$_stepArray$[$i$$270$$][0]
        }
      }
      return null
    }, getStepId:function($name$$99$$) {
      for(var $i$$271$$ = 0;$i$$271$$ < this.$_stepNum$;$i$$271$$++) {
        if(this.$_stepArray$[$i$$271$$] && this.$_stepArray$[$i$$271$$][0] === $name$$99$$) {
          return this.$_stepArray$[$i$$271$$][1]
        }
      }
      return null
    }, select:function($id$$35$$) {
      for(var $i$$272$$ = 0;$i$$272$$ < this.$_stepNum$;$i$$272$$++) {
        if(this.$_stepArray$[$i$$272$$] && this.$_stepArray$[$i$$272$$][1] === $id$$35$$) {
          "next" === this.options.selection && $i$$272$$ + 1 < this.$_stepNum$ && (this.$_stepArray$[$i$$272$$ + 1][2] = "on", this.$_drawLabel$($i$$272$$ + 1), this.$_drawButton$($i$$272$$ + 1));
          this.$_stepArray$[$i$$272$$][3] = "current";
          this.$_currentStepIndex$ = $i$$272$$;
          this.options.currentStep = $id$$35$$;
          this.$_drawLabel$($i$$272$$);
          this.$_drawButton$($i$$272$$);
          this.$_updateProgressWidth$();
          break
        }
      }
      for($i$$272$$ = 0;$i$$272$$ < this.$_stepNum$;$i$$272$$++) {
        this.$_drawStepFill$($i$$272$$)
      }
    }, deselect:function($id$$36$$, $selection$$7$$, $state$$5$$, $messageType$$1$$) {
      for(var $i$$273$$ = 0;$i$$273$$ < this.$_stepNum$;$i$$273$$++) {
        if(this.$_stepArray$[$i$$273$$] && this.$_stepArray$[$i$$273$$][1] === $id$$36$$) {
          $selection$$7$$ ? this.$_stepArray$[$i$$273$$][2] = $selection$$7$$ : this.$_stepArray$[$i$$273$$][2] = "off";
          $state$$5$$ ? this.$_stepArray$[$i$$273$$][3] = $state$$5$$ : this.$_stepArray$[$i$$273$$][3] = "visited";
          $messageType$$1$$ ? this.$_stepArray$[$i$$273$$][4] = $messageType$$1$$ : this.$_stepArray$[$i$$273$$][4] = "none";
          this.$_currentStepIndex$ = -1;
          "next" === this.options.selection && $i$$273$$ + 1 < this.$_stepNum$ && (this.$_stepArray$[$i$$273$$ + 1][2] = "off", this.$_drawLabel$($i$$273$$ + 1), this.$_drawButton$($i$$273$$ + 1));
          this.$_drawLabel$($i$$273$$);
          this.$_drawButton$($i$$273$$);
          this.$_drawMessageType$($i$$273$$);
          break
        }
      }
    }, nextSelectableStep:function() {
      for(var $i$$274$$ = this.$_currentStepIndex$;$i$$274$$ < this.$_stepNum$;$i$$274$$++) {
        if($i$$274$$ + 1 < this.$_stepNum$ && this.$_stepArray$[$i$$274$$ + 1] && "on" === this.$_stepArray$[$i$$274$$ + 1][2]) {
          return this.$_stepArray$[$i$$274$$ + 1][1]
        }
      }
      return this.$_stepArray$[this.$_currentStepIndex$][1]
    }, previousSelectableStep:function() {
      for(var $i$$275$$ = this.$_currentStepIndex$;0 <= $i$$275$$;$i$$275$$--) {
        if(this.$_stepArray$[$i$$275$$ - 1] && "on" === this.$_stepArray$[$i$$275$$ - 1][2]) {
          return this.$_stepArray$[$i$$275$$ - 1][1]
        }
      }
      return this.$_stepArray$[this.$_currentStepIndex$][1]
    }})
  })()
});
