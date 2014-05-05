define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$41$$, $$$$39$$) {
  (function() {
    function $_radioGroup$$1$$($radio$$1$$, $$elems$$1$$) {
      var $name$$101_selector$$20$$ = $radio$$1$$.name, $$radios$$1_form$$2$$ = $radio$$1$$.form;
      $name$$101_selector$$20$$ ? ($name$$101_selector$$20$$ = $name$$101_selector$$20$$.replace(/'/g, "\\'"), $name$$101_selector$$20$$ = ":radio[name\x3d'" + $name$$101_selector$$20$$ + "']:oj-button", $$radios$$1_form$$2$$ = $$elems$$1$$ ? $$elems$$1$$.filter($name$$101_selector$$20$$) : $$radios$$1_form$$2$$ ? $$$$39$$($$radios$$1_form$$2$$).find($name$$101_selector$$20$$) : $$$$39$$($name$$101_selector$$20$$, $radio$$1$$.ownerDocument).filter(function() {
        return!this.form
      })) : $$radios$$1_form$$2$$ = ($$elems$$1$$ ? $$elems$$1$$.filter($radio$$1$$) : $$$$39$$($radio$$1$$)).filter(":oj-button");
      return $$radios$$1_form$$2$$
    }
    $oj$$41$$.$__registerWidget$("oj.ojToolbar", $$$$39$$.oj.baseComponent, {version:"1.0.0", $_items$:"button, input[type\x3dbutton], input[type\x3dsubmit], input[type\x3dreset], input[type\x3dcheckbox], input[type\x3dradio], a", widgetEventPrefix:"oj", options:{}, _create:function() {
      this.element.addClass("oj-toolbar oj-component").attr("role", "toolbar");
      this.$_setup$(!0);
      this._super()
    }, $_showContextMenu$:function($menu$$19$$, $event$$351$$) {
      $menu$$19$$.show($event$$351$$, {launcher:this.element.find(":oj-button[tabindex\x3d0]"), focus:"menu"})
    }, _setOption:function($key$$117$$, $value$$209$$) {
      "disabled" === $key$$117$$ && this.$$buttons$.ojButton("option", $key$$117$$, $value$$209$$);
      this._super($key$$117$$, $value$$209$$)
    }, refresh:function() {
      this._super();
      this.$_setup$(!1)
    }, $_setup$:function($isCreate$$2$$) {
      var $self$$109$$ = this;
      this.$isRtl$ = "rtl" === this.$_GetReadingDirection$();
      this.$$buttons$ = this.element.find(this.$_items$).unbind("keydown" + this.eventNamespace).bind("keydown" + this.eventNamespace, function($event$$352$$) {
        $self$$109$$.$_handleKeyDown$($event$$352$$, $$$$39$$(this))
      }).unbind("click" + this.eventNamespace).bind("click" + this.eventNamespace, function() {
        $$$$39$$(this).ojButton("option", "disabled") || $self$$109$$.$_setTabStop$($$$$39$$(this))
      }).unbind("focus" + this.eventNamespace).bind("focus" + this.eventNamespace, function() {
        $self$$109$$.$_setTabStop$($$$$39$$(this))
      });
      this.$$enabledButtons$ = this.$$buttons$.filter(function() {
        return!$$$$39$$(this).ojButton("option", "disabled")
      });
      this.$_initTabindexes$($isCreate$$2$$)
    }, $_initTabindexes$:function($$newTabStop$$1_isCreate$$3$$) {
      var $$last$$1$$ = $$$$39$$(this.$_lastTabStop$);
      this.$_lastTabStop$ = void 0;
      this.$$buttons$.attr("tabindex", "-1");
      $$newTabStop$$1_isCreate$$3$$ = $$newTabStop$$1_isCreate$$3$$ || !$$last$$1$$.is(this.$$enabledButtons$) ? this.$$enabledButtons$.first() : $$last$$1$$;
      this.$_setTabStop$($$newTabStop$$1_isCreate$$3$$)
    }, $_mapToTabbable$:function($$button$$3$$) {
      var $$enabledButtons$$2$$ = this.$$enabledButtons$;
      return $$button$$3$$.map(function($index$$190$$, $elem$$46$$) {
        if("radio" != $elem$$46$$.type || $elem$$46$$.checked || "" == $elem$$46$$.name) {
          return $elem$$46$$
        }
        var $$checkedRadio$$1$$ = $_radioGroup$$1$$($elem$$46$$, $$enabledButtons$$2$$).filter(":checked");
        return $$checkedRadio$$1$$.length ? $$checkedRadio$$1$$[0] : $elem$$46$$
      })
    }, $_setTabStop$:function($$button$$4$$) {
      $$button$$4$$ = this.$_mapToTabbable$($$button$$4$$);
      var $button$$2$$ = $$button$$4$$[0], $last$$3$$ = this.$_lastTabStop$;
      $button$$2$$ !== $last$$3$$ && ($$$$39$$($last$$3$$).attr("tabindex", "-1"), $$button$$4$$.attr("tabindex", "0"), this.$_lastTabStop$ = $button$$2$$)
    }, $_handleKeyDown$:function($event$$355$$, $$button$$5$$) {
      switch($event$$355$$.which) {
        case $$$$39$$.ui.keyCode.LEFT:
        ;
        case $$$$39$$.ui.keyCode.RIGHT:
          $event$$355$$.preventDefault();
          var $$enabledButtons$$3$$ = this.$$enabledButtons$, $length$$18$$ = $$enabledButtons$$3$$.length;
          if(2 > $length$$18$$) {
            break
          }
          var $oldIndex$$3$$ = $$enabledButtons$$3$$.index($$button$$5$$);
          $$enabledButtons$$3$$.eq(($oldIndex$$3$$ + ($event$$355$$.which == $$$$39$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? 1 : -1) + $length$$18$$) % $length$$18$$).focus();
          break;
        case $$$$39$$.ui.keyCode.UP:
        ;
        case $$$$39$$.ui.keyCode.DOWN:
          "radio" == $$button$$5$$.attr("type") && $event$$355$$.preventDefault()
      }
    }, _destroy:function() {
      this.element.removeClass("oj-toolbar oj-component").removeAttr("role");
      this.$$buttons$.attr("tabindex", "0").map(function() {
        return $$$$39$$(this).ojButton("widget")[0]
      })
    }})
  })()
});
