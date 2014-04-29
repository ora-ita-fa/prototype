define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$42$$, $$$$40$$) {
  (function() {
    $oj$$42$$.$__registerWidget$("oj.ojProgressbar", $$$$40$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{max:100, value:0, disabled:!1}, min:0, $_indeterminate$:!1, _create:function() {
      this.oldValue = this.options.value = this.$_constrainedValue$();
      this.element.addClass("oj-progressbar oj-component oj-component-content oj-corner-all").attr({role:"progressbar", "aria-valuemin":this.min});
      this.$valueDiv$ = $$$$40$$("\x3cdiv class\x3d'oj-progressbar-value oj-component-header oj-corner-left'\x3e\x3c/div\x3e").appendTo(this.element);
      this.$_refreshValue$();
      this._super()
    }, $_InitOptions$:function() {
      var $savedAttributes$$4$$ = this.$_GetSavedAttributes$(this.element);
      this._super();
      null == this.options.max && (this.options.max = "max" in $savedAttributes$$4$$ ? $savedAttributes$$4$$.max.prop : void 0)
    }, value:function($newValue$$8$$) {
      if(void 0 === $newValue$$8$$) {
        return this.options.value
      }
      this.options.value = this.$_constrainedValue$($newValue$$8$$)
    }, $_constrainedValue$:function($newValue$$9$$) {
      void 0 === $newValue$$9$$ && ($newValue$$9$$ = this.options.value);
      this.$_indeterminate$ = -1 == $newValue$$9$$;
      "number" !== typeof $newValue$$9$$ && ($newValue$$9$$ = isNaN($newValue$$9$$) ? 0 : Number($newValue$$9$$));
      return this.$_indeterminate$ ? -1 : Math.min(this.options.max, Math.max(this.min, $newValue$$9$$))
    }, _setOptions:function($options$$307$$) {
      if(!this.options.disabled) {
        var $value$$208$$ = $options$$307$$.value;
        delete $options$$307$$.value;
        this._super($options$$307$$);
        this.options.value = this.$_constrainedValue$($value$$208$$);
        this.$_refreshValue$()
      }
    }, _setOption:function($key$$118$$, $value$$209$$) {
      "max" === $key$$118$$ && ($value$$209$$ = Math.max(this.min, $value$$209$$));
      this._super($key$$118$$, $value$$209$$)
    }, $_percentage$:function() {
      return this.$_indeterminate$ ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
    }, $_refreshValue$:function() {
      var $value$$210$$ = this.options.value, $percentage$$ = this.$_percentage$();
      this.$valueDiv$.toggle(this.$_indeterminate$ || $value$$210$$ > this.min).toggleClass("oj-corner-right", $value$$210$$ === this.options.max).width($percentage$$.toFixed(0) + "%");
      this.element.toggleClass("oj-progressbar-indeterminate", this.$_indeterminate$);
      this.$_indeterminate$ ? (this.element.attr({"aria-valuetext":"In Progress"}), this.element.removeAttr("aria-valuenow"), this.element.removeAttr("aria-valuemin"), this.element.removeAttr("aria-valuemax"), this.$overlayDiv$ || (this.$overlayDiv$ = $$$$40$$("\x3cdiv class\x3d'oj-progressbar-overlay'\x3e\x3c/div\x3e").appendTo(this.$valueDiv$))) : (this.element.attr({"aria-valuemax":this.options.max, "aria-valuenow":$value$$210$$}), this.$overlayDiv$ && (this.$overlayDiv$.remove(), this.$overlayDiv$ = 
      null))
    }, _destroy:function() {
      this.element.removeClass("oj-progressbar oj-component oj-component-content oj-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
      this.$valueDiv$.remove()
    }})
  })()
});
