define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojmodel", "ojs/ojdatacollection-common"], function($oj$$21$$, $$$$20$$) {
  $oj$$21$$.$__registerWidget$("oj.ojRowExpander", $$$$20$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{context:null, indent:10, expand:null, collapse:null}, $classNames$:{root:"oj-rowexpander", icon:"oj-widget-icon", clickable:"oj-clickable-icon", expand:"oj-rowexpander-expand-icon", collapse:"oj-rowexpander-collapse-icon", leaf:"oj-rowexpander-leaf-icon", lazyload:"oj-rowexpander-lazyload-icon"}, _create:function() {
    this._super();
    this.element.addClass(this.$classNames$.root)
  }, _init:function() {
    var $self$$95$$ = this;
    this._super();
    this.$_addIcon$();
    this.$component$ = this.options.context.component;
    this.$datasource$ = this.options.context.datasource;
    this.$component$.$_registerRowExpander$(this);
    null !== this.$_parseMetadata$ && (this.$metadata$ = this.$_parseMetadata$(this.options.context.metadata));
    this.$indentation$ = this.$metadata$.depth * this.options.indent;
    this.$iconState$ = this.$metadata$.state;
    this.$rowKey$ = this.$metadata$.key;
    this.$_setIndentationWidth$();
    this.$_setIconStateClass$();
    if("expanded" === this.$iconState$ || "collapsed" === this.$iconState$) {
      $$$$20$$(this.$icon$).on("click", function() {
        $self$$95$$.$_fireExpandCollapse$()
      }), $$$$20$$(this.element).on("keypress", function($event$$293$$) {
        (($event$$293$$.keyCode || $event$$293$$.which) === $$$$20$$.ui.keyCode.ENTER || $$$$20$$.ui.keyCode.SPACE) && $self$$95$$.$_fireExpandCollapse$()
      })
    }
  }, refresh:function() {
    this.element.empty();
    this._init()
  }, _destroy:function() {
    this.removeClass(this.$classNames$.root);
    this.element.empty()
  }, $_parseMetadata$:null, $_addIcon$:function() {
    this.$icon$ = $$$$20$$("\x3ca\x3e\x3c/a\x3e").addClass(this.$classNames$.icon).addClass(this.$classNames$.clickable);
    this.element.append(this.$icon$)
  }, $_addIconClass$:function($classKey$$) {
    this.$icon$.addClass(this.$classNames$[$classKey$$])
  }, $_removeIconClass$:function($classKey$$1$$) {
    this.$icon$.removeClass(this.$classNames$[$classKey$$1$$])
  }, $_setIconStateClass$:function() {
    switch(this.$iconState$) {
      case "leaf":
        this.$_addIconClass$("leaf");
        break;
      case "collapsed":
        this.$_addIconClass$("expand");
        this.$_ariaExpanded$(!1);
        break;
      case "expanded":
        this.$_addIconClass$("collapse"), this.$_ariaExpanded$(!0)
    }
  }, $_removeIconStateClass$:function() {
    switch(this.$iconState$) {
      case "leaf":
        this.$_removeIconClass$("leaf");
        break;
      case "collapsed":
        this.$_removeIconClass$("expand");
        break;
      case "expanded":
        this.$_removeIconClass$("collapse")
    }
  }, handleExpandEvent:function() {
    this.$_removeIconStateClass$();
    this.$iconState$ = "expanded";
    this.$_setIconStateClass$();
    this.$_ariaExpanded$(!0);
    this._trigger("expand")
  }, handleCollapseEvent:function() {
    this.$_removeIconStateClass$();
    this.$iconState$ = "collapsed";
    this.$_setIconStateClass$();
    this.$_ariaExpanded$(!1);
    this._trigger("collapse")
  }, $_fireExpandCollapse$:function() {
    "collapsed" === this.$iconState$ ? this.$datasource$.expand(this.$metadata$.key) : "expanded" === this.$iconState$ && this.$datasource$.collapse(this.$metadata$.key)
  }, $_setIndentationWidth$:function() {
    this._GetReadingDirection();
    this.element.width(this.element.width() + this.$indentation$ + "px")
  }, $_ariaExpanded$:function($bool$$) {
    this.$icon$.attr("aria-expanded", $bool$$)
  }})
});
