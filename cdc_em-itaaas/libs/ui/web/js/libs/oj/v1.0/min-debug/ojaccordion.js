define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojcollapsible"], function($oj$$25$$, $$$$25$$) {
  (function() {
    $oj$$25$$.$__registerWidget$("oj.ojAccordion", $$$$25$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{multiple:!1, beforeExpand:null, afterExpand:null, beforeCollapse:null, afterCollapse:null}, $_ComponentCreate$:function() {
      this._super();
      this.element.addClass("oj-accordion oj-component").attr("role", "group");
      this.$_refresh$()
    }, $_showContextMenu$:function($menu$$15$$, $event$$280$$) {
      $menu$$15$$.show($event$$280$$, {launcher:this.element.find(".oj-collapsible-header-icon").first(), focus:"menu"})
    }, _destroy:function() {
      this.element.removeClass("oj-accordion oj-component").removeAttr("role");
      this.element.children().removeClass("oj-accordion-collapsible");
      this.element.children(".oj-accordion-created").removeClass("oj-accordion-created").ojCollapsible("destroy")
    }, _setOption:function($key$$92$$, $value$$185$$) {
      "multiple" === $key$$92$$ && !1 == $value$$185$$ && !0 == this.options.multiple && this.$colllapsibles$.not(".oj-collapsible-collapsed").first().siblings(".oj-collapsible").trigger("ojcollapse");
      this._super($key$$92$$, $value$$185$$);
      "disabled" === $key$$92$$ && (($value$$185$$ = !!$value$$185$$) && this.$colllapsibles$.each(function() {
        null == $$$$25$$(this).ojCollapsible("option", $key$$92$$) && $$$$25$$(this).ojCollapsible("option", $key$$92$$, $value$$185$$)
      }), this.element.toggleClass("oj-disabled", $value$$185$$))
    }, refresh:function() {
      this._super();
      this.$_refresh$()
    }, $_refresh$:function() {
      this.$_makeCollapsible$();
      this._setOption("disabled", this.options.disabled);
      this.$_setupEvents$()
    }, $_makeCollapsible$:function() {
      this.element.children(":oj-collapsible").each(function() {
        $$$$25$$(this).ojCollapsible("option", "clickable", "header")
      });
      this.$colllapsibles$ = this.element.children().not(":oj-ojCollapsible").ojCollapsible({$clickable$:"header"}).addClass("oj-accordion-created").end().addClass("oj-accordion-collapsible")
    }, $_setupEvents$:function() {
      var $events$$2$$ = {keydown:this.$_keydown$, ojbeforeexpand:this.$_beforeExpandHandler$, ojafterexpand:this.$_expandHandler$, ojbeforecollapse:this.$_beforeCollapseHandler$, ojaftercollapse:this.$_collapseHandler$};
      this._off(this.$colllapsibles$);
      this._on(this.$colllapsibles$, $events$$2$$)
    }, $_keydown$:function($event$$281$$) {
      if(!$event$$281$$.altKey && !$event$$281$$.ctrlKey && ($$$$25$$($event$$281$$.target).hasClass("oj-collapsible-header") || $$$$25$$($event$$281$$.target).hasClass("oj-collapsible-header-icon"))) {
        var $keyCode$$3$$ = $$$$25$$.ui.keyCode, $enabledCollapsibles$$ = this.$colllapsibles$.not(".oj-disabled"), $length$$17$$ = $enabledCollapsibles$$.length, $target$$79$$ = $$$$25$$($event$$281$$.target).closest(".oj-collapsible"), $currentIndex$$1$$ = $enabledCollapsibles$$.index($target$$79$$), $toFocus$$ = !1;
        if(0 <= $currentIndex$$1$$) {
          switch($event$$281$$.keyCode) {
            case $keyCode$$3$$.RIGHT:
            ;
            case $keyCode$$3$$.DOWN:
              $toFocus$$ = $enabledCollapsibles$$[($currentIndex$$1$$ + 1) % $length$$17$$];
              break;
            case $keyCode$$3$$.LEFT:
            ;
            case $keyCode$$3$$.UP:
              $toFocus$$ = $enabledCollapsibles$$[($currentIndex$$1$$ - 1 + $length$$17$$) % $length$$17$$];
              break;
            case $keyCode$$3$$.HOME:
              $toFocus$$ = $enabledCollapsibles$$[0];
              break;
            case $keyCode$$3$$.END:
              $toFocus$$ = $enabledCollapsibles$$[$length$$17$$ - 1]
          }
        }
        $toFocus$$ && ($target$$79$$ && $$$$25$$($target$$79$$).trigger("ojfocusout"), $$$$25$$($toFocus$$).trigger("ojfocus"), $event$$281$$.preventDefault())
      }
    }, $_findTargetSiblings$:function($closestCollapsible_event$$282$$) {
      return!this.options.multiple && ($closestCollapsible_event$$282$$ = $$$$25$$($closestCollapsible_event$$282$$.target).closest(".oj-collapsible"), $closestCollapsible_event$$282$$.parent().is(":oj-ojAccordion")) ? $closestCollapsible_event$$282$$.siblings(".oj-collapsible:not(.oj-collapsible-collapsed)").map(function() {
        return $$$$25$$(this).data("oj-ojCollapsible")
      }) : $$$$25$$()
    }, $_beforeExpandHandler$:function($event$$283$$) {
      var $result$$19$$, $self$$82$$ = this, $newData$$4$$;
      this.$_findTargetSiblings$($event$$283$$).each(function() {
        $newData$$4$$ = $self$$82$$.$_initEventData$($event$$283$$, this.element);
        return $result$$19$$ = this._trigger("beforeCollapse", $event$$283$$, {newCollapsible:$newData$$4$$.oldCollapsible, oldCollapsible:$newData$$4$$.newCollapsible})
      });
      $newData$$4$$ || ($newData$$4$$ = $self$$82$$.$_initEventData$($event$$283$$, null));
      this._trigger("beforeExpand", $event$$283$$, $newData$$4$$);
      return $result$$19$$
    }, $_expandHandler$:function($event$$284$$, $eventData$$4$$) {
      var $newData$$5$$, $self$$83$$ = this;
      this.$_findTargetSiblings$($event$$284$$).each(function() {
        this.collapse(!1, $event$$284$$, $eventData$$4$$);
        $newData$$5$$ = $self$$83$$.$_initEventData$($event$$284$$, this.element)
      });
      $newData$$5$$ || ($newData$$5$$ = $self$$83$$.$_initEventData$($event$$284$$, null));
      this._trigger("afterExpand", $event$$284$$, $newData$$5$$)
    }, $_beforeCollapseHandler$:function($event$$285$$, $eventData$$5$$) {
      var $newData$$6$$;
      $newData$$6$$ = $eventData$$5$$.newCollapsible ? $eventData$$5$$ : this.$_initEventData$($event$$285$$, null);
      return this._trigger("beforeCollapse", $event$$285$$, $newData$$6$$)
    }, $_collapseHandler$:function($event$$286$$, $eventData$$6$$) {
      var $newData$$7$$;
      if($eventData$$6$$.newCollapsible) {
        $newData$$7$$ = $eventData$$6$$
      }else {
        if($event$$286$$.originalEvent && $event$$286$$.originalEvent.target) {
          var $collapsible$$ = $$$$25$$($event$$286$$.originalEvent.target);
          $collapsible$$.hasClass("oj-collapsible") && ($newData$$7$$ = this.$_initEventData$($event$$286$$, $collapsible$$))
        }
        $newData$$7$$ || ($newData$$7$$ = this.$_initEventData$($event$$286$$, null))
      }
      this._trigger("afterCollapse", $event$$286$$, $newData$$7$$)
    }, $_initEventData$:function($event$$287$$, $oCollapsible$$) {
      return{oldCollapsible:$oCollapsible$$, newCollapsible:$$$$25$$($event$$287$$.target)}
    }, getNodeBySubId:function($collapsible$$1_locator$$18$$) {
      if(null == $collapsible$$1_locator$$18$$) {
        return this.element ? this.element[0] : null
      }
      var $subId$$11$$ = $collapsible$$1_locator$$18$$.subId;
      $collapsible$$1_locator$$18$$ = this.$colllapsibles$[$collapsible$$1_locator$$18$$.index];
      switch($subId$$11$$) {
        case "oj-accordion-content":
          $subId$$11$$ = "oj-collapsible-content";
          break;
        case "oj-accordion-header":
          $subId$$11$$ = "oj-collapsible-header";
          break;
        case "oj-accordion-header-icon":
          $subId$$11$$ = "oj-collapsible-header-icon";
          break;
        case "oj-accordion-collapsible":
          return $collapsible$$1_locator$$18$$;
        default:
          return null
      }
      return $$$$25$$($collapsible$$1_locator$$18$$).ojCollapsible("getNodeBySubId", {$subId$:$subId$$11$$})
    }})
  })()
});
