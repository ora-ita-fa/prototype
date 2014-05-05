define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$13$$, $$$$13$$) {
  function $DvtJsonPath$$($object$$6$$, $path$$7$$) {
    this.$_path$ = $path$$7$$;
    this.$_root$ = $object$$6$$;
    this.$_delimiter$ = "/"
  }
  $oj$$13$$.$AttributeGroupHandler$ = function $$oj$$13$$$$AttributeGroupHandler$$($matchRules$$) {
    this.Init($matchRules$$)
  };
  $goog$exportPath_$$("AttributeGroupHandler", $oj$$13$$.$AttributeGroupHandler$, $oj$$13$$);
  $oj$$13$$.$Object$.$createSubclass$($oj$$13$$.$AttributeGroupHandler$, $oj$$13$$.$Object$, "oj.AttributeGroupHandler");
  $oj$$13$$.$AttributeGroupHandler$.prototype.Init = function $$oj$$13$$$$AttributeGroupHandler$$$Init$($idx$$6_matchRules$$1$$) {
    $oj$$13$$.$AttributeGroupHandler$.$superclass$.Init.call(this);
    this.$_matchRules$ = $idx$$6_matchRules$$1$$ ? $idx$$6_matchRules$$1$$ : {};
    this.$_assignments$ = {};
    this.$_valueIndex$ = 0;
    this.$Values$ = this.$getValueRamp$();
    for(var $key$$72$$ in this.$_matchRules$) {
      $idx$$6_matchRules$$1$$ = this.$Values$.indexOf(this.$_matchRules$[$key$$72$$]), -1 !== $idx$$6_matchRules$$1$$ && this.$Values$.splice($idx$$6_matchRules$$1$$, 1)
    }
  };
  $oj$$13$$.$AttributeGroupHandler$.prototype.$getValueRamp$ = function $$oj$$13$$$$AttributeGroupHandler$$$$getValueRamp$$() {
    return[]
  };
  $oj$$13$$.$Object$.$exportPrototypeSymbol$("AttributeGroupHandler.prototype.getValueRamp", {$getValueRamp$:$oj$$13$$.$AttributeGroupHandler$.prototype.$getValueRamp$});
  $oj$$13$$.$AttributeGroupHandler$.prototype.$getValue$ = function $$oj$$13$$$$AttributeGroupHandler$$$$getValue$$($category$$) {
    if(this.$_matchRules$[$category$$]) {
      return this.$_matchRules$[$category$$]
    }
    this.$_assignments$[$category$$] || (this.$_assignments$[$category$$] = this.$Values$[this.$_valueIndex$], this.$_valueIndex$ == this.$Values$.length - 1 ? this.$_valueIndex$ = 0 : this.$_valueIndex$++);
    return this.$_assignments$[$category$$]
  };
  $oj$$13$$.$Object$.$exportPrototypeSymbol$("AttributeGroupHandler.prototype.getValue", {$getValue$:$oj$$13$$.$AttributeGroupHandler$.prototype.$getValue$});
  $oj$$13$$.$AttributeGroupHandler$.prototype.$geCategoryAssignments$ = function $$oj$$13$$$$AttributeGroupHandler$$$$geCategoryAssignments$$() {
    var $assignments$$ = [], $i$$200$$;
    for($i$$200$$ in this.$_assignments$) {
      $assignments$$.push({category:$i$$200$$, value:this.$_assignments$[$i$$200$$]})
    }
    return $assignments$$
  };
  $oj$$13$$.$Object$.$exportPrototypeSymbol$("AttributeGroupHandler.prototype.geCategoryAssignments", {$geCategoryAssignments$:$oj$$13$$.$AttributeGroupHandler$.prototype.$geCategoryAssignments$});
  $oj$$13$$.$AttributeGroupHandler$.prototype.$addMatchRule$ = function $$oj$$13$$$$AttributeGroupHandler$$$$addMatchRule$$($category$$1$$, $attributeValue$$) {
    this.$_matchRules$[$category$$1$$] = $attributeValue$$
  };
  $oj$$13$$.$Object$.$exportPrototypeSymbol$("AttributeGroupHandler.prototype.addMatchRule", {$addMatchRule$:$oj$$13$$.$AttributeGroupHandler$.prototype.$addMatchRule$});
  var $DvtStyleProcessor$$ = {CSS_TEXT_PROPERTIES:function($node$$18$$, $styleString$$) {
    var $ignoreProperties$$ = {};
    $node$$18$$ && ($node$$18$$.hasClass("oj-gaugeMetricLabel") && $node$$18$$.hasClass($node$$18$$.parentNode, "oj-ledGauge") && ($ignoreProperties$$["font-size"] = !0, $ignoreProperties$$.color = !0), $node$$18$$.hasClass($node$$18$$, "oj-chartSliceLabel") && ($ignoreProperties$$.color = !0));
    return $DvtStyleProcessor$$.$_mergeOptionsAndDivStyle$($node$$18$$, $styleString$$, !1, $ignoreProperties$$)
  }, CSS_BACKGROUND_PROPERTIES:function($node$$19$$, $styleString$$1$$) {
    return $DvtStyleProcessor$$.$_mergeOptionsAndDivStyle$($node$$19$$, $styleString$$1$$, !0, {})
  }, CSS_URL:function($node$$20$$) {
    return $DvtStyleProcessor$$.$_parseUrl$($node$$20$$)
  }, $_INHERITED_FONT_COLOR$:"rgb(254, 0, 254)", $_INHERITED_FONT_FAMILY$:"Times", $_INHERITED_FONT_SIZE$:"1px", $_INHERITED_FONT_WEIGHT$:"1", $_INHERITED_FONT_STYLE$:"normal", $defaultStyleProcessor$:function($cssDiv$$, $property$$22$$) {
    return $cssDiv$$.css($property$$22$$)
  }, $_parseUrl$:function($cssDiv$$1_url$$30$$) {
    return($cssDiv$$1_url$$30$$ = $cssDiv$$1_url$$30$$.css("content")) && -1 !== $cssDiv$$1_url$$30$$.indexOf("url(") ? $cssDiv$$1_url$$30$$.slice($cssDiv$$1_url$$30$$.indexOf("url(") + 4, $cssDiv$$1_url$$30$$.length - 1).replace(/"/g, "") : $cssDiv$$1_url$$30$$
  }, $_buildCssBackgroundPropertiesString$:function($cssDiv$$2$$) {
    var $styleString$$3$$ = "";
    $cssDiv$$2$$.css("border-top-color") && ($styleString$$3$$ += "border-color: " + $cssDiv$$2$$.css("border-top-color") + ";");
    $cssDiv$$2$$.css("border-width") && ($cssDiv$$2$$.css("border-style") && "none" != $cssDiv$$2$$.css("border-style")) && ($styleString$$3$$ += "border-width: " + $cssDiv$$2$$.css("border-width") + ";");
    $cssDiv$$2$$.css("background-color") && ($styleString$$3$$ += "background-color: " + $cssDiv$$2$$.css("background-color") + ";");
    return $styleString$$3$$
  }, $_buildTextCssPropertiesString$:function($cssDiv$$3$$, $ignoreProperties$$1$$) {
    var $styleString$$4$$ = "", $value$$166$$ = $cssDiv$$3$$.css("font-family");
    $value$$166$$ && $value$$166$$ !== $DvtStyleProcessor$$.$_INHERITED_FONT_FAMILY$ && ($styleString$$4$$ += "font-family: " + $value$$166$$.replace(/"/g, "'") + ";");
    ($value$$166$$ = $cssDiv$$3$$.css("font-size")) && ($value$$166$$ !== $DvtStyleProcessor$$.$_INHERITED_FONT_SIZE$ && !$ignoreProperties$$1$$["font-size"]) && ($styleString$$4$$ += "font-size: " + $value$$166$$ + ";");
    ($value$$166$$ = $cssDiv$$3$$.css("font-weight")) && $value$$166$$ !== $DvtStyleProcessor$$.$_INHERITED_FONT_WEIGHT$ && ($styleString$$4$$ += "font-weight: " + $value$$166$$ + ";");
    ($value$$166$$ = $cssDiv$$3$$.css("color")) && ($value$$166$$ !== $DvtStyleProcessor$$.$_INHERITED_FONT_COLOR$ && !$ignoreProperties$$1$$.color) && ($styleString$$4$$ += "color: " + $value$$166$$ + ";");
    ($value$$166$$ = $cssDiv$$3$$.css("font-style")) && $value$$166$$ !== $DvtStyleProcessor$$.$_INHERITED_FONT_STYLE$ && ($styleString$$4$$ += "font-style: " + $value$$166$$ + ";");
    return $styleString$$4$$
  }, $_mergeOptionsAndDivStyle$:function($cssDiv$$4$$, $optionsStyle_styleString$$5$$, $bIncludeBackgroundProps$$, $ignoreProperties$$2$$) {
    $ignoreProperties$$2$$ || ($ignoreProperties$$2$$ = {});
    if(!$cssDiv$$4$$) {
      return $optionsStyle_styleString$$5$$
    }
    var $oldStyle$$;
    $optionsStyle_styleString$$5$$ && (($oldStyle$$ = $cssDiv$$4$$.attr("style")) ? $cssDiv$$4$$.attr("style", $oldStyle$$ + $optionsStyle_styleString$$5$$) : $cssDiv$$4$$.attr("style", $optionsStyle_styleString$$5$$));
    $optionsStyle_styleString$$5$$ = "";
    !0 !== $bIncludeBackgroundProps$$ && ($optionsStyle_styleString$$5$$ += this.$_buildTextCssPropertiesString$($cssDiv$$4$$, $ignoreProperties$$2$$));
    !1 !== $bIncludeBackgroundProps$$ && ($optionsStyle_styleString$$5$$ += this.$_buildCssBackgroundPropertiesString$($cssDiv$$4$$));
    $oldStyle$$ && $cssDiv$$4$$.attr("style", $oldStyle$$);
    return $optionsStyle_styleString$$5$$
  }, $processStyles$:function($dummyDiv_element$$58$$, $options$$261$$, $componentClasses_outerDummyDiv$$, $childClasses$$) {
    for(var $oldClasses$$ = $dummyDiv_element$$58$$.attr("class"), $newClasses$$ = "", $i$$201$$ = 0;$i$$201$$ < $componentClasses_outerDummyDiv$$.length;$i$$201$$++) {
      $newClasses$$ = $newClasses$$ + $componentClasses_outerDummyDiv$$[$i$$201$$] + " "
    }
    $oldClasses$$ && ($newClasses$$ += $oldClasses$$);
    $dummyDiv_element$$58$$.attr("class", $newClasses$$);
    $componentClasses_outerDummyDiv$$ = $$$$13$$(document.createElement("div"));
    $componentClasses_outerDummyDiv$$.attr("style", "display:none;");
    $dummyDiv_element$$58$$.append($componentClasses_outerDummyDiv$$);
    $componentClasses_outerDummyDiv$$.css("font-family", $DvtStyleProcessor$$.$_INHERITED_FONT_FAMILY$);
    $componentClasses_outerDummyDiv$$.css("font-size", $DvtStyleProcessor$$.$_INHERITED_FONT_SIZE$);
    $componentClasses_outerDummyDiv$$.css("color", $DvtStyleProcessor$$.$_INHERITED_FONT_COLOR$);
    $componentClasses_outerDummyDiv$$.css("font-weight", $DvtStyleProcessor$$.$_INHERITED_FONT_WEIGHT$);
    $componentClasses_outerDummyDiv$$.css("font-style", $DvtStyleProcessor$$.$_INHERITED_FONT_STYLE$);
    for(var $styleClass$$2$$ in $childClasses$$) {
      $dummyDiv_element$$58$$ = $$$$13$$(document.createElement("div")), $dummyDiv_element$$58$$.addClass($styleClass$$2$$), $componentClasses_outerDummyDiv$$.append($dummyDiv_element$$58$$), $DvtStyleProcessor$$.$_processStyle$($options$$261$$, $dummyDiv_element$$58$$, $childClasses$$[$styleClass$$2$$])
    }
  }, $_processStyle$:function($options$$262$$, $cssDiv$$5$$, $definition$$) {
    if($definition$$ instanceof Array) {
      for(var $i$$202$$ = 0;$i$$202$$ < $definition$$.length;$i$$202$$++) {
        $DvtStyleProcessor$$.$_resolveStyle$($options$$262$$, $cssDiv$$5$$, $definition$$[$i$$202$$])
      }
    }else {
      $DvtStyleProcessor$$.$_resolveStyle$($options$$262$$, $cssDiv$$5$$, $definition$$)
    }
  }, $_resolveStyle$:function($options$$263_path$$6$$, $cssDiv$$6$$, $definition$$1$$) {
    $options$$263_path$$6$$ = new $DvtJsonPath$$($options$$263_path$$6$$, $definition$$1$$.path);
    var $handler$$47_value$$167$$;
    $definition$$1$$.property && ($handler$$47_value$$167$$ = ($handler$$47_value$$167$$ = $DvtStyleProcessor$$[$definition$$1$$.property]) ? $handler$$47_value$$167$$($cssDiv$$6$$, $options$$263_path$$6$$.$getValue$()) : $DvtStyleProcessor$$.$defaultStyleProcessor$($cssDiv$$6$$, $definition$$1$$.property));
    null == $handler$$47_value$$167$$ || "string" == typeof $handler$$47_value$$167$$ && "" == $handler$$47_value$$167$$.replace(/^\s+/g, "") || $options$$263_path$$6$$.$setValue$($handler$$47_value$$167$$)
  }};
  $oj$$13$$.$__registerWidget$("oj.dvtBaseComponent", $$$$13$$.oj.baseComponent, {_create:function() {
    this._super();
    this.$_context$ = new DvtContext(this.element[0]);
    this.$_context$.setReadingDirection(this.$_GetReadingDirection$());
    this.element.attr("tabIndex", 0);
    this.$_component$ = this.$_CreateComponent$(this.$_context$, this.$_HandleEvent$, this);
    this.$_context$.getStage().addChild(this.$_component$);
    $DvtStyleProcessor$$.$processStyles$(this.element, this.options, this.$_GetComponentStyleClasses$(), this.$_GetChildStyleClasses$());
    this.$_processTranslations$();
    this.$_LoadResources$();
    this.$_addOptionsDiv$();
    this.$_Render$();
    $oj$$13$$.$DomUtils$.$addResizeListener$(this.element[0], $$$$13$$.proxy(this.$_handleResize$, this))
  }, refresh:function() {
    this._super();
    this.$_context$.setReadingDirection(this.$_GetReadingDirection$());
    this.$_processTranslations$();
    this.$_Render$()
  }, getNodeBySubId:function($locator$$10$$) {
    var $automation$$;
    this.$_component$ && this.$_component$.getAutomation && ($automation$$ = this.$_component$.getAutomation());
    return $automation$$ ? $automation$$.getDomElementForSubId($locator$$10$$.subId) : null
  }, getSubIdByNode:function($node$$21$$) {
    var $automation$$1$$;
    this.$_component$ && this.$_component$.getAutomation && ($automation$$1$$ = this.$_component$.getAutomation());
    return $automation$$1$$ ? $automation$$1$$.getSubIdForDomElement($node$$21$$) : null
  }, $_addOptionsDiv$:function() {
    var $optionsDiv$$ = $$$$13$$(document.createElement("div"));
    $optionsDiv$$.attr("style", "display:none;");
    $optionsDiv$$.text(JSON.stringify(this.options));
    this.element.append($optionsDiv$$)
  }, $_GetComponentStyleClasses$:function() {
    return["oj-dvtbase"]
  }, $_GetChildStyleClasses$:function() {
    return{}
  }, $_GetTranslationMap$:function() {
    var $map$$1$$ = {"oj-ojDvtCommon.labelClearSelection":"DvtUtilBundle.CLEAR_SELECTION", "oj-dvtBaseComponent.labelMonthShortJanuary":"DvtUtilBundle.MONTH_SHORT_JANUARY", "oj-dvtBaseComponent.labelMonthShortFebruary":"DvtUtilBundle.MONTH_SHORT_FEBRUARY", "oj-dvtBaseComponent.labelMonthShortMarch":"DvtUtilBundle.MONTH_SHORT_MARCH", "oj-dvtBaseComponent.labelMonthShortApril":"DvtUtilBundle.MONTH_SHORT_APRIL", "oj-dvtBaseComponent.labelMonthShortMay":"DvtUtilBundle.MONTH_SHORT_MAY", "oj-dvtBaseComponent.labelMonthShortJune":"DvtUtilBundle.MONTH_SHORT_JUNE", 
    "oj-dvtBaseComponent.labelMonthShortJuly":"DvtUtilBundle.MONTH_SHORT_JULY", "oj-dvtBaseComponent.labelMonthShortAugust":"DvtUtilBundle.MONTH_SHORT_AUGUST", "oj-dvtBaseComponent.labelMonthShortSeptember":"DvtUtilBundle.MONTH_SHORT_SEPTEMBER", "oj-dvtBaseComponent.labelMonthShortOctober":"DvtUtilBundle.MONTH_SHORT_OCTOBER", "oj-dvtBaseComponent.labelMonthShortNovember":"DvtUtilBundle.MONTH_SHORT_NOVEMBER", "oj-dvtBaseComponent.labelMonthShortDecember":"DvtUtilBundle.MONTH_SHORT_DECEMBER", "oj-dvtBaseComponent.labelScalingSuffixThousand":"DvtUtilBundle.SCALING_SUFFIX_THOUSAND", 
    "oj-dvtBaseComponent.labelScalingSuffixMillion":"DvtUtilBundle.SCALING_SUFFIX_MILLION", "oj-dvtBaseComponent.labelScalingSuffixBillion":"DvtUtilBundle.SCALING_SUFFIX_BILLION", "oj-dvtBaseComponent.labelScalingSuffixTrillion":"DvtUtilBundle.SCALING_SUFFIX_TRILLION", "oj-dvtBaseComponent.labelScalingSuffixQuadrillion":"DvtUtilBundle.SCALING_SUFFIX_QUADRILLION", "oj-dvtBaseComponent.stateSelected":"DvtUtilBundle.STATE_SELECTED", "oj-dvtBaseComponent.stateUnselected":"DvtUtilBundle.STATE_UNSELECTED", 
    "oj-dvtBaseComponent.stateMaximized":"DvtUtilBundle.STATE_MAXIMIZED", "oj-dvtBaseComponent.stateMinimized":"DvtUtilBundle.STATE_MINIMIZED", "oj-dvtBaseComponent.stateExpanded":"DvtUtilBundle.STATE_EXPANDED", "oj-dvtBaseComponent.stateCollapsed":"DvtUtilBundle.STATE_COLLAPSED", "oj-dvtBaseComponent.stateIsolated":"DvtUtilBundle.STATE_ISOLATED", "oj-dvtBaseComponent.stateHidden":"DvtUtilBundle.STATE_HIDDEN", "oj-dvtBaseComponent.stateVisible":"DvtUtilBundle.STATE_VISIBLE"}, $ret$$26$$ = {}, $key$$73$$;
    for($key$$73$$ in $map$$1$$) {
      var $bundleKey$$ = $map$$1$$[$key$$73$$], $resource$$ = $oj$$13$$.$Translations$.$getResource$($key$$73$$);
      $ret$$26$$[$bundleKey$$] = $resource$$
    }
    return $ret$$26$$
  }, $_GetTranslatedResource$:function($key$$74$$, $params$$14$$) {
    var $translatedResource$$ = this.options[$key$$74$$];
    if($params$$14$$) {
      for(var $paramMap$$ = {}, $i$$203$$ = 0;$i$$203$$ < $params$$14$$.length;$i$$203$$++) {
        $paramMap$$[$params$$14$$[$i$$203$$]] = "{" + $i$$203$$ + "}"
      }
      $translatedResource$$ = $oj$$13$$.$Translations$.$applyParameters$($translatedResource$$, $paramMap$$)
    }
    return $translatedResource$$
  }, $_processTranslations$:function() {
    var $translationMap$$ = this.$_GetTranslationMap$();
    DvtBundle.addLocalizedStrings($translationMap$$)
  }, _destroy:function() {
    this.element.children().remove();
    this._super()
  }, _setOptions:function($options$$264$$) {
    this._superApply(arguments);
    this.$_Render$()
  }, $_CreateComponent$:$JSCompiler_returnArg$$(null), $_HandleEvent$:$JSCompiler_emptyFn$$(), $_handleResize$:function() {
    var $newWidth$$1$$ = this.element.width(), $newHeight$$1$$ = this.element.height();
    5 <= Math.abs($newWidth$$1$$ - this.$_width$) + Math.abs($newHeight$$1$$ - this.$_height$) && (this.$_component$.render(null, $newWidth$$1$$, $newHeight$$1$$), this.$_width$ = $newWidth$$1$$, this.$_height$ = $newHeight$$1$$)
  }, $_LoadResources$:$JSCompiler_emptyFn$$(), $_Render$:function() {
    this.$_context$.isReadyToRender() ? (this.$_width$ = this.element.width(), this.$_height$ = this.element.height(), this.$_component$.render(this.options, this.$_width$, this.$_height$)) : $oj$$13$$.$Logger$.error($oj$$13$$.$Translations$.$getResource$("oj-dvtBaseComponent.notReadyToRender").summary)
  }});
  $oj$$13$$.$ShapeAttributeGroupHandler$ = function $$oj$$13$$$$ShapeAttributeGroupHandler$$($matchRules$$2$$) {
    this.Init($matchRules$$2$$)
  };
  $goog$exportPath_$$("ShapeAttributeGroupHandler", $oj$$13$$.$ShapeAttributeGroupHandler$, $oj$$13$$);
  $oj$$13$$.$Object$.$createSubclass$($oj$$13$$.$ShapeAttributeGroupHandler$, $oj$$13$$.$AttributeGroupHandler$, "oj.ShapeAttributeGroupHandler");
  $oj$$13$$.$ShapeAttributeGroupHandler$.$_attributeValues$ = "square circle diamond plus triangleDown triangleUp human".split(" ");
  $oj$$13$$.$ShapeAttributeGroupHandler$.prototype.$getValueRamp$ = function $$oj$$13$$$$ShapeAttributeGroupHandler$$$$getValueRamp$$() {
    return $oj$$13$$.$ShapeAttributeGroupHandler$.$_attributeValues$.slice()
  };
  $oj$$13$$.$ColorAttributeGroupHandler$ = function $$oj$$13$$$$ColorAttributeGroupHandler$$($matchRules$$3$$) {
    this.$_attributeValues$ = [];
    var $attrGpsDiv$$ = $$$$13$$(document.createElement("div"));
    $attrGpsDiv$$.attr("style", "display:none;");
    $attrGpsDiv$$.attr("id", "attrGps");
    $$$$13$$(document.body).append($attrGpsDiv$$);
    for(var $i$$204$$ = 0;$i$$204$$ < $oj$$13$$.$ColorAttributeGroupHandler$.$_styleClasses$.length;$i$$204$$++) {
      var $childDiv$$ = $$$$13$$(document.createElement("div"));
      $childDiv$$.addClass($oj$$13$$.$ColorAttributeGroupHandler$.$_styleClasses$[$i$$204$$]);
      $attrGpsDiv$$.append($childDiv$$);
      this.$_attributeValues$.push($childDiv$$.css("color"))
    }
    $attrGpsDiv$$.remove();
    this.Init($matchRules$$3$$)
  };
  $goog$exportPath_$$("ColorAttributeGroupHandler", $oj$$13$$.$ColorAttributeGroupHandler$, $oj$$13$$);
  $oj$$13$$.$Object$.$createSubclass$($oj$$13$$.$ColorAttributeGroupHandler$, $oj$$13$$.$AttributeGroupHandler$, "oj.ColorAttributeGroupHandler");
  $oj$$13$$.$ColorAttributeGroupHandler$.$_styleClasses$ = "oj-dvt-category-index1 oj-dvt-category-index2 oj-dvt-category-index3 oj-dvt-category-index4 oj-dvt-category-index5 oj-dvt-category-index6 oj-dvt-category-index7 oj-dvt-category-index8 oj-dvt-category-index9 oj-dvt-category-index10 oj-dvt-category-index11 oj-dvt-category-index12".split(" ");
  $oj$$13$$.$ColorAttributeGroupHandler$.prototype.$getValueRamp$ = function $$oj$$13$$$$ColorAttributeGroupHandler$$$$getValueRamp$$() {
    return this.$_attributeValues$.slice()
  };
  $DvtJsonPath$$.prototype.$_resolveLeafObjectAndProperty$ = function $$DvtJsonPath$$$$$_resolveLeafObjectAndProperty$$($root$$, $path$$8$$, $delimiter$$, $createIfMissing$$) {
    for(var $result$$15$$ = {};$root$$ && -1 < $path$$8$$.indexOf($delimiter$$);) {
      var $subProperty$$ = $path$$8$$.substring(0, $path$$8$$.indexOf($delimiter$$));
      $createIfMissing$$ && void 0 === $root$$[$subProperty$$] && ($root$$[$subProperty$$] = {});
      $root$$ = $root$$[$subProperty$$];
      $path$$8$$ = $path$$8$$.substring($path$$8$$.indexOf($delimiter$$) + 1, $path$$8$$.length)
    }
    $root$$ && ($result$$15$$.object = $root$$, $result$$15$$.parameter = $path$$8$$);
    return $result$$15$$
  };
  $DvtJsonPath$$.prototype.$_resolvePath$ = function $$DvtJsonPath$$$$$_resolvePath$$($createIfMissing$$1_result$$16$$) {
    void 0 === this.$_leaf$ && ($createIfMissing$$1_result$$16$$ = this.$_resolveLeafObjectAndProperty$(this.$_root$, this.$_path$, this.$_delimiter$, $createIfMissing$$1_result$$16$$), this.$_leaf$ = $createIfMissing$$1_result$$16$$.object, this.$_param$ = $createIfMissing$$1_result$$16$$.parameter)
  };
  $DvtJsonPath$$.prototype.$getValue$ = function $$DvtJsonPath$$$$$getValue$$() {
    this.$_resolvePath$(!1);
    return void 0 === this.$_leaf$ ? void 0 : this.$_leaf$[this.$_param$]
  };
  $DvtJsonPath$$.prototype.$setValue$ = function $$DvtJsonPath$$$$$setValue$$($value$$168$$) {
    this.$_resolvePath$(!0);
    this.$_leaf$[this.$_param$] !== $value$$168$$ && (this.$_leaf$[this.$_param$] = $value$$168$$)
  }
});
