define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojmodel", "ojs/ojdatacollection-common"], function($oj$$22$$, $$$$21$$) {
  $oj$$22$$.$__registerWidget$("oj.ojRowExpander", $$$$21$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{context:null, indent:10, expand:null, collapse:null}, $classNames$:{root:"oj-rowexpander", icon:"oj-widget-icon", clickable:"oj-clickable-icon", expand:"oj-rowexpander-expand-icon", collapse:"oj-rowexpander-collapse-icon", leaf:"oj-rowexpander-leaf-icon", lazyload:"oj-rowexpander-lazyload-icon"}, _create:function() {
    this._super();
    this.element.addClass(this.$classNames$.root)
  }, _init:function() {
    var $self$$103$$ = this, $context$$45$$;
    this._super();
    this.$_addIcon$();
    $context$$45$$ = this.options.context;
    this.$component$ = $context$$45$$.component;
    this.$datasource$ = $context$$45$$.datasource;
    this.$component$.$_registerRowExpander$ && this.$component$.$_registerRowExpander$(this);
    this.$indentation$ = ($context$$45$$.depth - 1) * this.options.indent;
    this.$iconState$ = $context$$45$$.state;
    this.$rowKey$ = $context$$45$$.key;
    this.$_setIndentationWidth$();
    this.$_setIconStateClass$();
    if("expanded" === this.$iconState$ || "collapsed" === this.$iconState$) {
      $$$$21$$(this.$icon$).on("click", function() {
        $self$$103$$.$_fireExpandCollapse$()
      }), $$$$21$$(this.element).on("keypress", function($event$$307$$) {
        (($event$$307$$.keyCode || $event$$307$$.which) === $$$$21$$.ui.keyCode.ENTER || $$$$21$$.ui.keyCode.SPACE) && $self$$103$$.$_fireExpandCollapse$()
      })
    }
  }, refresh:function() {
    this.element.empty();
    this._init()
  }, _destroy:function() {
    this.removeClass(this.$classNames$.root);
    this.element.empty()
  }, $_addIcon$:function() {
    this.$icon$ = $$$$21$$("\x3ca\x3e\x3c/a\x3e").addClass(this.$classNames$.icon).addClass(this.$classNames$.clickable);
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
    "collapsed" === this.$iconState$ ? this.$datasource$.expand(this.$rowKey$) : "expanded" === this.$iconState$ && this.$datasource$.collapse(this.$rowKey$)
  }, $_setIndentationWidth$:function() {
    this._GetReadingDirection();
    this.element.width(this.element.width() + this.$indentation$ + "px")
  }, $_ariaExpanded$:function($bool$$) {
    this.$icon$.attr("aria-expanded", $bool$$)
  }})
});
