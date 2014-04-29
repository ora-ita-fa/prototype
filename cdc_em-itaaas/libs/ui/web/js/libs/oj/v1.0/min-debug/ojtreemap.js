define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtTreemap"], function($oj$$23$$, $$$$23$$) {
  $oj$$23$$.$__registerWidget$("oj.ojTreemap", $$$$23$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{isolate:null, select:null}, $_CreateComponent$:function($context$$47$$, $callback$$98$$, $callbackObj$$7$$) {
    return DvtTreemap.newInstance($context$$47$$, $callback$$98$$, $callbackObj$$7$$)
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$10$$ = this._super();
    $styleClasses$$10$$.push("oj-treemap");
    return $styleClasses$$10$$
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$11$$ = this._super();
    $styleClasses$$11$$["oj-treemap-isolate-icon"] = {path:"_resources/isolate", property:"CSS_URL"};
    $styleClasses$$11$$["oj-treemap-isolate-icon oj-hover"] = {path:"_resources/isolateOver", property:"CSS_URL"};
    $styleClasses$$11$$["oj-treemap-isolate-icon oj-active"] = {path:"_resources/isolateDown", property:"CSS_URL"};
    $styleClasses$$11$$["oj-treemap-restore-icon"] = {path:"_resources/restore", property:"CSS_URL"};
    $styleClasses$$11$$["oj-treemap-restore-icon oj-hover"] = {path:"_resources/restoreOver", property:"CSS_URL"};
    $styleClasses$$11$$["oj-treemap-restore-icon oj-active"] = {path:"_resources/restoreDown", property:"CSS_URL"};
    $styleClasses$$11$$["oj-treemap-attribute-type-text"] = {path:"styleDefaults/_attributeTypeTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$11$$["oj-treemap-attribute-value-text"] = {path:"styleDefaults/_attributeValueTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$11$$["oj-treemap-node"] = {path:"nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$11$$["oj-treemap-node oj-hover"] = {path:"nodeDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$11$$["oj-treemap-node oj-selected"] = [{path:"nodeDefaults/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/selectedInnerColor", property:"border-bottom-color"}];
    $styleClasses$$11$$["oj-treemap-node-header"] = [{path:"nodeDefaults/header/backgroundColor", property:"background-color"}, {path:"nodeDefaults/header/borderColor", property:"border-top-color"}, {path:"nodeDefaults/header/labelStyle", property:"CSS_TEXT_PROPERTIES"}];
    $styleClasses$$11$$["oj-treemap-node-header oj-hover"] = [{path:"nodeDefaults/header/hoverBackgroundColor", property:"background-color"}, {path:"nodeDefaults/header/hoverOuterColor", property:"border-top-color"}, {path:"nodeDefaults/header/hoverInnerColor", property:"border-bottom-color"}];
    $styleClasses$$11$$["oj-treemap-node-header oj-selected"] = [{path:"nodeDefaults/header/selectedBackgroundColor", property:"background-color"}, {path:"nodeDefaults/header/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/header/selectedInnerColor", property:"border-bottom-color"}];
    return $styleClasses$$11$$
  }, $_GetTranslationMap$:function() {
    var $superMap$$2$$ = this._super(), $selfMap$$2$$ = {"DvtTreemapBundle.COLOR":this.$_GetTranslatedResource$("labelColor"), "DvtTreemapBundle.SIZE":this.$_GetTranslatedResource$("labelSize")}, $ret$$38$$ = {}, $key$$91$$;
    for($key$$91$$ in $superMap$$2$$) {
      $ret$$38$$[$key$$91$$] = $superMap$$2$$[$key$$91$$]
    }
    for($key$$91$$ in $selfMap$$2$$) {
      $ret$$38$$[$key$$91$$] = $selfMap$$2$$[$key$$91$$]
    }
    return $ret$$38$$
  }, $_HandleEvent$:function($event$$278_selection$$5$$) {
    var $selectedItems$$2$$, $i$$256$$, $selectedItem$$2$$;
    if(($event$$278_selection$$5$$ && $event$$278_selection$$5$$.getType ? $event$$278_selection$$5$$.getType() : null) === DvtSelectionEvent.TYPE) {
      $selectedItems$$2$$ = [];
      $event$$278_selection$$5$$ = $event$$278_selection$$5$$.getSelection();
      for($i$$256$$ = 0;$i$$256$$ < $event$$278_selection$$5$$.length;$i$$256$$++) {
        $selectedItem$$2$$ = {id:$event$$278_selection$$5$$[$i$$256$$]}, $selectedItems$$2$$.push($selectedItem$$2$$)
      }
      this._trigger("select", null, {items:$selectedItems$$2$$})
    }else {
      this._super($event$$278_selection$$5$$)
    }
  }})
});
