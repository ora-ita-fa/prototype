define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtSunburst"], function($oj$$15$$, $$$$15$$) {
  $oj$$15$$.$__registerWidget$("oj.ojSunburst", $$$$15$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{rotate:null, rotateInput:null, select:null}, $_CreateComponent$:function($context$$42$$, $callback$$92$$, $callbackObj$$5$$) {
    return DvtSunburst.newInstance($context$$42$$, $callback$$92$$, $callbackObj$$5$$)
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$6$$ = this._super();
    $styleClasses$$6$$.push("oj-sunburst");
    return $styleClasses$$6$$
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$7$$ = this._super();
    $styleClasses$$7$$["oj-sunburst-attribute-type-text"] = {path:"styleDefaults/_attributeTypeTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$7$$["oj-sunburst-attribute-value-text"] = {path:"styleDefaults/_attributeValueTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$7$$["oj-sunburst-node"] = {path:"nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$7$$["oj-sunburst-node oj-hover"] = {path:"nodeDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$7$$["oj-sunburst-node oj-selected"] = [{path:"nodeDefaults/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/selectedInnerColor", property:"border-bottom-color"}];
    return $styleClasses$$7$$
  }, $_GetTranslationMap$:function() {
    var $superMap$$1$$ = this._super(), $selfMap$$1$$ = {"DvtSunburstBundle.COLOR":this.$_GetTranslatedResource$("labelColor"), "DvtSunburstBundle.SIZE":this.$_GetTranslatedResource$("labelSize")}, $ret$$32$$ = {}, $key$$77$$;
    for($key$$77$$ in $superMap$$1$$) {
      $ret$$32$$[$key$$77$$] = $superMap$$1$$[$key$$77$$]
    }
    for($key$$77$$ in $selfMap$$1$$) {
      $ret$$32$$[$key$$77$$] = $selfMap$$1$$[$key$$77$$]
    }
    return $ret$$32$$
  }, $_HandleEvent$:function($event$$152_selection$$3$$) {
    var $selectedItems_type$$73$$ = $event$$152_selection$$3$$ && $event$$152_selection$$3$$.getType ? $event$$152_selection$$3$$.getType() : null, $selectedItem$$, $i$$205$$;
    if($selectedItems_type$$73$$ === DvtSelectionEvent.TYPE) {
      $selectedItems_type$$73$$ = [];
      $event$$152_selection$$3$$ = $event$$152_selection$$3$$.getSelection();
      for($i$$205$$ = 0;$i$$205$$ < $event$$152_selection$$3$$.length;$i$$205$$++) {
        $selectedItem$$ = {id:$event$$152_selection$$3$$[$i$$205$$]}, $selectedItems_type$$73$$.push($selectedItem$$)
      }
      this._trigger("select", null, {items:$selectedItems_type$$73$$})
    }else {
      $selectedItems_type$$73$$ === DvtSunburstRotationEvent.TYPE ? this._trigger("rotate", null, {value:$event$$152_selection$$3$$.getStartAngle()}) : $selectedItems_type$$73$$ === DvtSunburstRotationEvent.TYPE_INPUT ? this._trigger("rotateInput", null, {value:$event$$152_selection$$3$$.getStartAngle()}) : this._super($event$$152_selection$$3$$)
    }
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    this.options._resources.rotateCursor = $oj$$15$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/sunburst/rotate.cur")
  }})
});
