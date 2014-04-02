define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtSunburst"], function($oj$$11$$, $$$$11$$) {
  $oj$$11$$.$__registerWidget$("oj.ojSunburst", $$$$11$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{rotate:null, rotateInput:null, select:null}, $_createComponent$:function($context$$37$$, $callback$$83$$, $callbackObj$$1$$) {
    return DvtSunburst.newInstance($context$$37$$, $callback$$83$$, $callbackObj$$1$$)
  }, $_getComponentStyleClasses$:function() {
    var $styleClasses$$1$$ = this._super();
    $styleClasses$$1$$.push("oj-sunburst");
    return $styleClasses$$1$$
  }, $_getChildStyleClasses$:function() {
    var $styleClasses$$2$$ = this._super();
    $styleClasses$$2$$["oj-sunburst-attribute-type-text"] = {path:"styleDefaults/_attributeTypeTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$2$$["oj-sunburst-attribute-value-text"] = {path:"styleDefaults/_attributeValueTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$2$$["oj-sunburst-node"] = {path:"nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$2$$["oj-sunburst-node oj-hover"] = {path:"nodeDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$2$$["oj-sunburst-node oj-selected"] = [{path:"nodeDefaults/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/selectedInnerColor", property:"border-bottom-color"}];
    return $styleClasses$$2$$
  }, $_getTranslationMap$:function() {
    var $superMap$$ = this._super(), $selfMap$$ = {"oj-ojSunburst.labelColor":"DvtSunburstBundle.COLOR", "oj-ojSunburst.labelSize":"DvtSunburstBundle.SIZE"}, $ret$$24$$ = {}, $key$$64$$;
    for($key$$64$$ in $superMap$$) {
      $ret$$24$$[$key$$64$$] = $superMap$$[$key$$64$$]
    }
    for($key$$64$$ in $selfMap$$) {
      $ret$$24$$[$key$$64$$] = $selfMap$$[$key$$64$$]
    }
    return $ret$$24$$
  }, $_handleEvent$:function($event$$131_selection$$1$$) {
    var $selectedItems_type$$75$$ = $event$$131_selection$$1$$ && $event$$131_selection$$1$$.getType ? $event$$131_selection$$1$$.getType() : null, $selectedItem$$, $i$$191$$;
    if($selectedItems_type$$75$$ === DvtSelectionEvent.TYPE) {
      $selectedItems_type$$75$$ = [];
      $event$$131_selection$$1$$ = $event$$131_selection$$1$$.getSelection();
      for($i$$191$$ = 0;$i$$191$$ < $event$$131_selection$$1$$.length;$i$$191$$++) {
        $selectedItem$$ = {id:$event$$131_selection$$1$$[$i$$191$$]}, $selectedItems_type$$75$$.push($selectedItem$$)
      }
      this._trigger("select", null, {items:$selectedItems_type$$75$$})
    }else {
      $selectedItems_type$$75$$ === DvtSunburstRotationEvent.TYPE ? this._trigger("rotate", null, {value:$event$$131_selection$$1$$.getStartAngle()}) : $selectedItems_type$$75$$ === DvtSunburstRotationEvent.TYPE_INPUT ? this._trigger("rotateInput", null, {value:$event$$131_selection$$1$$.getStartAngle()}) : this._super($event$$131_selection$$1$$)
    }
  }, $_loadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    this.options._resources.rotateCursor = $oj$$11$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/sunburst/rotate.cur")
  }})
});
