define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtTreemap"], function($oj$$13$$, $$$$13$$) {
  $oj$$13$$.$__registerWidget$("oj.ojTreemap", $$$$13$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{isolate:null, select:null}, $_createComponent$:function($context$$39$$, $callback$$85$$, $callbackObj$$3$$) {
    return DvtTreemap.newInstance($context$$39$$, $callback$$85$$, $callbackObj$$3$$)
  }, $_getComponentStyleClasses$:function() {
    var $styleClasses$$5$$ = this._super();
    $styleClasses$$5$$.push("oj-treemap");
    return $styleClasses$$5$$
  }, $_getChildStyleClasses$:function() {
    var $styleClasses$$6$$ = this._super();
    $styleClasses$$6$$["oj-treemap-isolate-icon"] = {path:"_resources/isolate", property:"CSS_URL"};
    $styleClasses$$6$$["oj-treemap-isolate-icon oj-hover"] = {path:"_resources/isolateOver", property:"CSS_URL"};
    $styleClasses$$6$$["oj-treemap-isolate-icon oj-active"] = {path:"_resources/isolateDown", property:"CSS_URL"};
    $styleClasses$$6$$["oj-treemap-restore-icon"] = {path:"_resources/restore", property:"CSS_URL"};
    $styleClasses$$6$$["oj-treemap-restore-icon oj-hover"] = {path:"_resources/restoreOver", property:"CSS_URL"};
    $styleClasses$$6$$["oj-treemap-restore-icon oj-active"] = {path:"_resources/restoreDown", property:"CSS_URL"};
    $styleClasses$$6$$["oj-treemap-attribute-type-text"] = {path:"styleDefaults/_attributeTypeTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$6$$["oj-treemap-attribute-value-text"] = {path:"styleDefaults/_attributeValueTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$6$$["oj-treemap-node"] = {path:"nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$6$$["oj-treemap-node oj-hover"] = {path:"nodeDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$6$$["oj-treemap-node oj-selected"] = [{path:"nodeDefaults/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/selectedInnerColor", property:"border-bottom-color"}];
    $styleClasses$$6$$["oj-treemap-node-header"] = [{path:"nodeDefaults/header/backgroundColor", property:"background-color"}, {path:"nodeDefaults/header/borderColor", property:"border-top-color"}, {path:"nodeDefaults/header/labelStyle", property:"CSS_TEXT_PROPERTIES"}];
    $styleClasses$$6$$["oj-treemap-node-header oj-hover"] = [{path:"nodeDefaults/header/hoverBackgroundColor", property:"background-color"}, {path:"nodeDefaults/header/hoverOuterColor", property:"border-top-color"}, {path:"nodeDefaults/header/hoverInnerColor", property:"border-bottom-color"}];
    $styleClasses$$6$$["oj-treemap-node-header oj-selected"] = [{path:"nodeDefaults/header/selectedBackgroundColor", property:"background-color"}, {path:"nodeDefaults/header/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/header/selectedInnerColor", property:"border-bottom-color"}];
    return $styleClasses$$6$$
  }, $_getTranslationMap$:function() {
    var $superMap$$1$$ = this._super(), $selfMap$$1$$ = {"oj-ojTreemap.labelColor":"DvtTreemapBundle.COLOR", "oj-ojTreemap.labelSize":"DvtTreemapBundle.SIZE"}, $ret$$25$$ = {}, $key$$65$$;
    for($key$$65$$ in $superMap$$1$$) {
      $ret$$25$$[$key$$65$$] = $superMap$$1$$[$key$$65$$]
    }
    for($key$$65$$ in $selfMap$$1$$) {
      $ret$$25$$[$key$$65$$] = $selfMap$$1$$[$key$$65$$]
    }
    return $ret$$25$$
  }, $_handleEvent$:function($event$$133_selection$$3$$) {
    var $selectedItems$$2$$, $i$$195$$, $selectedItem$$2$$;
    if(($event$$133_selection$$3$$ && $event$$133_selection$$3$$.getType ? $event$$133_selection$$3$$.getType() : null) === DvtSelectionEvent.TYPE) {
      $selectedItems$$2$$ = [];
      $event$$133_selection$$3$$ = $event$$133_selection$$3$$.getSelection();
      for($i$$195$$ = 0;$i$$195$$ < $event$$133_selection$$3$$.length;$i$$195$$++) {
        $selectedItem$$2$$ = {id:$event$$133_selection$$3$$[$i$$195$$]}, $selectedItems$$2$$.push($selectedItem$$2$$)
      }
      this._trigger("select", null, {items:$selectedItems$$2$$})
    }else {
      this._super($event$$133_selection$$3$$)
    }
  }})
});
