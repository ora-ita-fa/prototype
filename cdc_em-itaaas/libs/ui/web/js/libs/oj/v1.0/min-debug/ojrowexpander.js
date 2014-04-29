define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojmodel", "ojs/ojdatacollection-common"], function($oj$$40$$, $$$$38$$) {
  $oj$$40$$.$__registerWidget$("oj.ojRowExpander", $$$$38$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{context:null, indent:10, expand:null, collapse:null}, $classNames$:{root:"oj-rowexpander", icon:"oj-component-icon", clickable:"oj-clickable-icon", expand:"oj-rowexpander-expand-icon", collapse:"oj-rowexpander-collapse-icon", leaf:"oj-rowexpander-leaf-icon", lazyload:"oj-rowexpander-lazyload-icon"}, _create:function() {
    this._super();
    this.element.addClass(this.$classNames$.root)
  }, _init:function() {
    var $self$$105$$ = this, $context$$51$$;
    this._super();
    this.$_addIcon$();
    $context$$51$$ = this.options.context;
    this.$component$ = $context$$51$$.component;
    this.$datasource$ = $context$$51$$.datasource;
    this.$indentation$ = ($context$$51$$.depth - 1) * this.options.indent;
    this.$iconState$ = $context$$51$$.state;
    this.$rowKey$ = $context$$51$$.key;
    this.$desc$ = this.$getTranslatedString$("accessibleRowDescription", {level:$context$$51$$.depth, num:$context$$51$$.index + 1, total:this.$datasource$.$getWrappedDataSource$().$getChildCount$($context$$51$$.parentKey)});
    this.$_setIndentationWidth$();
    this.$_setIconStateClass$();
    if("expanded" === this.$iconState$ || "collapsed" === this.$iconState$) {
      $$$$38$$(this.$icon$).on("click", function() {
        $self$$105$$.$_fireExpandCollapse$()
      }), $$$$38$$(this.element).on("keypress", function($event$$346$$) {
        (($event$$346$$.keyCode || $event$$346$$.which) === $$$$38$$.ui.keyCode.ENTER || $$$$38$$.ui.keyCode.SPACE) && $self$$105$$.$_fireExpandCollapse$()
      }), null != this.$component$ && (this.$handleKeyDownCallback$ = this.$_handleKeyDownEvent$.bind(this), $$$$38$$(this.$component$.element).on("ojkeydown", this.$handleKeyDownCallback$)), null != this.$datasource$ && (this.$handleExpandCallback$ = this.$_handleExpandEvent$.bind(this), this.$handleCollapseCallback$ = this.$_handleCollapseEvent$.bind(this), this.$datasource$.on("expand", this.$handleExpandCallback$, this), this.$datasource$.on("collapse", this.$handleCollapseCallback$, this))
    }
    null != this.$component$ && (this.$handleActiveKeyChangeCallback$ = this.$_handleActiveKeyChangeEvent$.bind(this), $$$$38$$(this.$component$.element).on("ojactive", this.$handleActiveKeyChangeCallback$))
  }, refresh:function() {
    this.element.empty();
    this._init()
  }, _destroy:function() {
    null != this.$component$ && ($$$$38$$(this.$component$.element).off("ojkeydown", this.$handleKeyDownCallback$), $$$$38$$(this.$component$.element).off("ojactive", this.$handleActiveKeyChangeCallback$));
    null != this.$datasource$ && (this.$datasource$.off("expand", this.$handleExpandCallback$, this), this.$datasource$.off("collapse", this.$handleCollapseCallback$, this));
    this.removeClass(this.$classNames$.root);
    this.element.empty()
  }, $_addIcon$:function() {
    this.$icon$ = $$$$38$$("\x3ca\x3e\x3c/a\x3e").addClass(this.$classNames$.icon).addClass(this.$classNames$.clickable);
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
  }, $_handleActiveKeyChangeEvent$:function($event$$347$$, $ui$$30$$) {
    var $rowKey$$26$$;
    null != $ui$$30$$.activeKey && ($rowKey$$26$$ = $ui$$30$$.activeKey.rowKey, this.$rowKey$ !== $rowKey$$26$$ || null != $ui$$30$$.previousActiveKey && $ui$$30$$.previousActiveKey.row == $ui$$30$$.activeKey.row || this.$component$.$_setAccessibleContext$ && this.$component$.$_setAccessibleContext$({message:this.$desc$}))
  }, $_handleKeyDownEvent$:function($event$$348$$, $ui$$31$$) {
    var $code$$8$$;
    this.$rowKey$ === $ui$$31$$.rowKey && ($code$$8$$ = $event$$348$$.keyCode || $event$$348$$.which, $event$$348$$.ctrlKey && ($code$$8$$ == $$$$38$$.ui.keyCode.RIGHT ? this.$datasource$.expand(this.$rowKey$) : $code$$8$$ == $$$$38$$.ui.keyCode.LEFT && this.$datasource$.collapse(this.$rowKey$)))
  }, $_handleExpandEvent$:function($event$$349$$) {
    $event$$349$$.rowKey === this.$rowKey$ && (this.$_removeIconStateClass$(), this.$iconState$ = "expanded", this.$_setIconStateClass$(), this.$_ariaExpanded$(!0), this._trigger("expand"))
  }, $_handleCollapseEvent$:function($event$$350$$) {
    $event$$350$$.rowKey === this.$rowKey$ && (this.$_removeIconStateClass$(), this.$iconState$ = "collapsed", this.$_setIconStateClass$(), this.$_ariaExpanded$(!1), this._trigger("collapse"))
  }, $_fireExpandCollapse$:function() {
    "collapsed" === this.$iconState$ ? this.$datasource$.expand(this.$rowKey$) : "expanded" === this.$iconState$ && this.$datasource$.collapse(this.$rowKey$)
  }, $_setIndentationWidth$:function() {
    this.element.width(this.element.width() + this.$indentation$ + "px")
  }, $_ariaExpanded$:function($bool$$) {
    this.$icon$.attr("aria-expanded", $bool$$)
  }})
});
