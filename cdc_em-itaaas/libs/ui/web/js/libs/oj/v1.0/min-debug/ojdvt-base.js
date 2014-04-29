define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$10$$, $$$$10$$) {
  function $DvtJsonPath$$($object$$6$$, $path$$7$$) {
    this.$_path$ = $path$$7$$;
    this.$_root$ = $object$$6$$;
    this.$_delimiter$ = "/"
  }
  $oj$$10$$.$AttributeGroupHandler$ = function $$oj$$10$$$$AttributeGroupHandler$$($matchRules$$) {
    this.$Init$($matchRules$$)
  };
  $goog$exportPath_$$("AttributeGroupHandler", $oj$$10$$.$AttributeGroupHandler$, $oj$$10$$);
  $oj$$10$$.$Object$.$createSubclass$($oj$$10$$.$AttributeGroupHandler$, $oj$$10$$.$Object$, "oj.AttributeGroupHandler");
  $oj$$10$$.$AttributeGroupHandler$.prototype.$Init$ = function $$oj$$10$$$$AttributeGroupHandler$$$$Init$$($idx$$6_matchRules$$1$$) {
    $oj$$10$$.$AttributeGroupHandler$.$superclass$.$Init$.call(this);
    this.$_matchRules$ = $idx$$6_matchRules$$1$$ ? $idx$$6_matchRules$$1$$ : {};
    this.$_assignments$ = {};
    this.$_valueIndex$ = 0;
    this.$Values$ = this.$getValueRamp$();
    for(var $key$$62$$ in this.$_matchRules$) {
      $idx$$6_matchRules$$1$$ = this.$Values$.indexOf(this.$_matchRules$[$key$$62$$]), -1 !== $idx$$6_matchRules$$1$$ && this.$Values$.splice($idx$$6_matchRules$$1$$, 1)
    }
  };
  $oj$$10$$.$AttributeGroupHandler$.prototype.$getValueRamp$ = function $$oj$$10$$$$AttributeGroupHandler$$$$getValueRamp$$() {
    return[]
  };
  $oj$$10$$.$Object$.$exportPrototypeSymbol$("AttributeGroupHandler.prototype.getValueRamp", {$getValueRamp$:$oj$$10$$.$AttributeGroupHandler$.prototype.$getValueRamp$});
  $oj$$10$$.$AttributeGroupHandler$.prototype.$getValue$ = function $$oj$$10$$$$AttributeGroupHandler$$$$getValue$$($category$$) {
    if(this.$_matchRules$[$category$$]) {
      return this.$_matchRules$[$category$$]
    }
    this.$_assignments$[$category$$] || (this.$_assignments$[$category$$] = this.$Values$[this.$_valueIndex$], this.$_valueIndex$ == this.$Values$.length - 1 ? this.$_valueIndex$ = 0 : this.$_valueIndex$++);
    return this.$_assignments$[$category$$]
  };
  $oj$$10$$.$Object$.$exportPrototypeSymbol$("AttributeGroupHandler.prototype.getValue", {$getValue$:$oj$$10$$.$AttributeGroupHandler$.prototype.$getValue$});
  $oj$$10$$.$AttributeGroupHandler$.prototype.$geCategoryAssignments$ = function $$oj$$10$$$$AttributeGroupHandler$$$$geCategoryAssignments$$() {
    var $assignments$$ = [], $i$$185$$;
    for($i$$185$$ in this.$_assignments$) {
      $assignments$$.push({category:$i$$185$$, value:this.$_assignments$[$i$$185$$]})
    }
    return $assignments$$
  };
  $oj$$10$$.$Object$.$exportPrototypeSymbol$("AttributeGroupHandler.prototype.geCategoryAssignments", {$geCategoryAssignments$:$oj$$10$$.$AttributeGroupHandler$.prototype.$geCategoryAssignments$});
  $oj$$10$$.$AttributeGroupHandler$.prototype.$addMatchRule$ = function $$oj$$10$$$$AttributeGroupHandler$$$$addMatchRule$$($category$$1$$, $attributeValue$$) {
    this.$_matchRules$[$category$$1$$] = $attributeValue$$
  };
  $oj$$10$$.$Object$.$exportPrototypeSymbol$("AttributeGroupHandler.prototype.addMatchRule", {$addMatchRule$:$oj$$10$$.$AttributeGroupHandler$.prototype.$addMatchRule$});
  var $DvtStyleProcessor$$ = {CSS_TEXT_PROPERTIES:function($node$$14$$, $styleString$$) {
    var $ignoreProperties$$ = {};
    $node$$14$$ && ($node$$14$$.hasClass("oj-gaugeMetricLabel") && $node$$14$$.hasClass($node$$14$$.parentNode, "oj-ledGauge") && ($ignoreProperties$$["font-size"] = !0, $ignoreProperties$$.color = !0), $node$$14$$.hasClass($node$$14$$, "oj-chartSliceLabel") && ($ignoreProperties$$.color = !0));
    return $DvtStyleProcessor$$.$_mergeOptionsAndDivStyle$($node$$14$$, $styleString$$, !1, $ignoreProperties$$)
  }, CSS_BACKGROUND_PROPERTIES:function($node$$15$$, $styleString$$1$$) {
    return $DvtStyleProcessor$$.$_mergeOptionsAndDivStyle$($node$$15$$, $styleString$$1$$, !0, {})
  }, CSS_URL:function($node$$16$$) {
    return $DvtStyleProcessor$$.$_parseUrl$($node$$16$$)
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
    var $styleString$$4$$ = "", $value$$155$$ = $cssDiv$$3$$.css("font-family");
    $value$$155$$ && $value$$155$$ !== $DvtStyleProcessor$$.$_INHERITED_FONT_FAMILY$ && ($styleString$$4$$ += "font-family: " + $value$$155$$.replace(/"/g, "'") + ";");
    ($value$$155$$ = $cssDiv$$3$$.css("font-size")) && ($value$$155$$ !== $DvtStyleProcessor$$.$_INHERITED_FONT_SIZE$ && !$ignoreProperties$$1$$["font-size"]) && ($styleString$$4$$ += "font-size: " + $value$$155$$ + ";");
    ($value$$155$$ = $cssDiv$$3$$.css("font-weight")) && $value$$155$$ !== $DvtStyleProcessor$$.$_INHERITED_FONT_WEIGHT$ && ($styleString$$4$$ += "font-weight: " + $value$$155$$ + ";");
    ($value$$155$$ = $cssDiv$$3$$.css("color")) && ($value$$155$$ !== $DvtStyleProcessor$$.$_INHERITED_FONT_COLOR$ && !$ignoreProperties$$1$$.color) && ($styleString$$4$$ += "color: " + $value$$155$$ + ";");
    ($value$$155$$ = $cssDiv$$3$$.css("font-style")) && $value$$155$$ !== $DvtStyleProcessor$$.$_INHERITED_FONT_STYLE$ && ($styleString$$4$$ += "font-style: " + $value$$155$$ + ";");
    return $styleString$$4$$
  }, $_mergeOptionsAndDivStyle$:function($cssDiv$$4$$, $optionsStyle_styleString$$5$$, $bIncludeBackgroundProps$$, $ignoreProperties$$2$$) {
    $ignoreProperties$$2$$ || ($ignoreProperties$$2$$ = {});
    if(!$cssDiv$$4$$) {
      return $optionsStyle_styleString$$5$$
    }
    var $oldStyle$$;
    $optionsStyle_styleString$$5$$ && ($oldStyle$$ = $cssDiv$$4$$.attr("style"), $cssDiv$$4$$.attr("style", $oldStyle$$ + $optionsStyle_styleString$$5$$));
    $optionsStyle_styleString$$5$$ = "";
    !0 !== $bIncludeBackgroundProps$$ && ($optionsStyle_styleString$$5$$ += this.$_buildTextCssPropertiesString$($cssDiv$$4$$, $ignoreProperties$$2$$));
    !1 !== $bIncludeBackgroundProps$$ && ($optionsStyle_styleString$$5$$ += this.$_buildCssBackgroundPropertiesString$($cssDiv$$4$$));
    $oldStyle$$ && $cssDiv$$4$$.attr("style", $oldStyle$$);
    return $optionsStyle_styleString$$5$$
  }};
  $oj$$10$$.$__registerWidget$("oj.dvtBaseComponent", $$$$10$$.oj.baseComponent, {$_loadedResources$:[], $_checkResources$:[], $_supportedLocales$:"ar cs da de el es fi fr hu it iw ja ko nl no pl pt pt_BR ro ru sk sv th tr zh_CN zh_TW".split(" "), _create:function() {
    this.$_context$ = new DvtContext(this.element[0]);
    this.$_context$.setReadingDirection(this._GetReadingDirection());
    this.element.attr("tabIndex", 0);
    this.$_component$ = this.$_createComponent$(this.$_context$, this.$_handleEvent$, this);
    this.$_context$.getStage().addChild(this.$_component$);
    this.$_processStyles$(this.$_getChildStyleClasses$());
    this.$_processTranslations$();
    this.$_loadResources$();
    this.$_addOptionsDiv$();
    this.$_render$();
    $oj$$10$$.$DomUtils$.$addResizeListener$(this.element[0], $$$$10$$.proxy(this.$_handleResize$, this))
  }, $_addOptionsDiv$:function() {
    var $optionsDiv$$ = $$$$10$$(document.createElement("div"));
    $optionsDiv$$.attr("style", "display:none;");
    $optionsDiv$$.text(JSON.stringify(this.options));
    this.element.append($optionsDiv$$)
  }, $_getComponentStyleClasses$:function() {
    return["oj-dvtbase"]
  }, $_getChildStyleClasses$:function() {
    return{}
  }, $_processStyles$:function($styleClasses$$) {
    for(var $componentClasses_outerDummyDiv$$ = this.$_getComponentStyleClasses$(), $dummyDiv_oldClasses$$ = this.element.attr("class"), $newClasses$$ = "", $i$$186$$ = 0;$i$$186$$ < $componentClasses_outerDummyDiv$$.length;$i$$186$$++) {
      $newClasses$$ = $newClasses$$ + $componentClasses_outerDummyDiv$$[$i$$186$$] + " "
    }
    $dummyDiv_oldClasses$$ && ($newClasses$$ += $dummyDiv_oldClasses$$);
    this.element.attr("class", $newClasses$$);
    $componentClasses_outerDummyDiv$$ = $$$$10$$(document.createElement("div"));
    $componentClasses_outerDummyDiv$$.attr("style", "display:none;");
    this.element.append($componentClasses_outerDummyDiv$$);
    $componentClasses_outerDummyDiv$$.css("font-family", $DvtStyleProcessor$$.$_INHERITED_FONT_FAMILY$);
    $componentClasses_outerDummyDiv$$.css("font-size", $DvtStyleProcessor$$.$_INHERITED_FONT_SIZE$);
    $componentClasses_outerDummyDiv$$.css("color", $DvtStyleProcessor$$.$_INHERITED_FONT_COLOR$);
    $componentClasses_outerDummyDiv$$.css("font-weight", $DvtStyleProcessor$$.$_INHERITED_FONT_WEIGHT$);
    $componentClasses_outerDummyDiv$$.css("font-style", $DvtStyleProcessor$$.$_INHERITED_FONT_STYLE$);
    for(var $styleClass$$2$$ in $styleClasses$$) {
      $dummyDiv_oldClasses$$ = $$$$10$$(document.createElement("div")), $dummyDiv_oldClasses$$.addClass($styleClass$$2$$), $componentClasses_outerDummyDiv$$.append($dummyDiv_oldClasses$$), this.$_processStyle$($dummyDiv_oldClasses$$, $styleClasses$$[$styleClass$$2$$])
    }
  }, $_processStyle$:function($cssDiv$$5$$, $definition$$) {
    if($definition$$ instanceof Array) {
      for(var $i$$187$$ = 0;$i$$187$$ < $definition$$.length;$i$$187$$++) {
        this.$_resolveStyle$($cssDiv$$5$$, $definition$$[$i$$187$$])
      }
    }else {
      this.$_resolveStyle$($cssDiv$$5$$, $definition$$)
    }
  }, $_resolveStyle$:function($cssDiv$$6$$, $definition$$1$$) {
    var $path$$6$$ = new $DvtJsonPath$$(this.options, $definition$$1$$.path), $handler$$49_value$$156$$;
    $definition$$1$$.property && ($handler$$49_value$$156$$ = ($handler$$49_value$$156$$ = $DvtStyleProcessor$$[$definition$$1$$.property]) ? $handler$$49_value$$156$$($cssDiv$$6$$, $path$$6$$.$getValue$()) : $DvtStyleProcessor$$.$defaultStyleProcessor$($cssDiv$$6$$, $definition$$1$$.property));
    null == $handler$$49_value$$156$$ || "string" == typeof $handler$$49_value$$156$$ && "" == $handler$$49_value$$156$$.replace(/^\s+/g, "") || $path$$6$$.$setValue$($handler$$49_value$$156$$)
  }, $_getTranslationMap$:function() {
    return{"oj-ojDvtCommon.labelClearSelection":"DvtUtilBundle.CLEAR_SELECTION", "oj-ojDvtCommon.labelMonthShortJanuary":"DvtUtilBundle.MONTH_SHORT_JANUARY", "oj-ojDvtCommon.labelMonthShortFebruary":"DvtUtilBundle.MONTH_SHORT_FEBRUARY", "oj-ojDvtCommon.labelMonthShortMarch":"DvtUtilBundle.MONTH_SHORT_MARCH", "oj-ojDvtCommon.labelMonthShortApril":"DvtUtilBundle.MONTH_SHORT_APRIL", "oj-ojDvtCommon.labelMonthShortMay":"DvtUtilBundle.MONTH_SHORT_MAY", "oj-ojDvtCommon.labelMonthShortJune":"DvtUtilBundle.MONTH_SHORT_JUNE", 
    "oj-ojDvtCommon.labelMonthShortJuly":"DvtUtilBundle.MONTH_SHORT_JULY", "oj-ojDvtCommon.labelMonthShortAugust":"DvtUtilBundle.MONTH_SHORT_AUGUST", "oj-ojDvtCommon.labelMonthShortSeptember":"DvtUtilBundle.MONTH_SHORT_SEPTEMBER", "oj-ojDvtCommon.labelMonthShortOctober":"DvtUtilBundle.MONTH_SHORT_OCTOBER", "oj-ojDvtCommon.labelMonthShortNovember":"DvtUtilBundle.MONTH_SHORT_NOVEMBER", "oj-ojDvtCommon.labelMonthShortDecember":"DvtUtilBundle.MONTH_SHORT_DECEMBER", "oj-ojDvtCommon.labelScalingSuffixThousand":"DvtUtilBundle.SCALING_SUFFIX_THOUSAND", 
    "oj-ojDvtCommon.labelScalingSuffixMillion":"DvtUtilBundle.SCALING_SUFFIX_MILLION", "oj-ojDvtCommon.labelScalingSuffixBillion":"DvtUtilBundle.SCALING_SUFFIX_BILLION", "oj-ojDvtCommon.labelScalingSuffixTrillion":"DvtUtilBundle.SCALING_SUFFIX_TRILLION", "oj-ojDvtCommon.labelScalingSuffixQuadrillion":"DvtUtilBundle.SCALING_SUFFIX_QUADRILLION"}
  }, $_processTranslations$:function() {
    var $translationMap$$ = this.$_getTranslationMap$(), $bundle$$7$$ = {}, $key$$63$$;
    for($key$$63$$ in $translationMap$$) {
      var $bundleKey$$ = $translationMap$$[$key$$63$$], $resource$$ = $oj$$10$$.$Translations$.$getResource$($key$$63$$);
      $bundle$$7$$[$bundleKey$$] = $resource$$
    }
    DvtBundle.addLocalizedStrings($bundle$$7$$)
  }, _destroy:function() {
    this.element.children().remove()
  }, _setOptions:function($options$$260$$) {
    this._superApply(arguments);
    this.$_render$()
  }, $_createComponent$:$JSCompiler_returnArg$$(null), $_handleEvent$:function($event$$130_id$$19$$) {
    if(($event$$130_id$$19$$ && $event$$130_id$$19$$.getType ? $event$$130_id$$19$$.getType() : null) == DvtActiveElementChangeEvent.TYPE) {
      $event$$130_id$$19$$ = $event$$130_id$$19$$.getId(), this.element.attr("aria-activedescendant", $event$$130_id$$19$$)
    }else {
      return null
    }
  }, $_handleResize$:function() {
    var $newWidth$$1$$ = this.element.width(), $newHeight$$1$$ = this.element.height();
    5 <= Math.abs($newWidth$$1$$ - this.$_width$) + Math.abs($newHeight$$1$$ - this.$_height$) && (this.$_component$.render(null, $newWidth$$1$$, $newHeight$$1$$), this.$_width$ = $newWidth$$1$$, this.$_height$ = $newHeight$$1$$)
  }, $_loadResources$:$JSCompiler_emptyFn$$(), $_loadResourceBundle$:function($url$$31$$) {
    var $locale$$22_localeList$$ = $oj$$10$$.$Config$.$getLocale$();
    if(0 === $locale$$22_localeList$$.indexOf("en")) {
      this.$_loadResourceBundleByUrl$($url$$31$$ + ".js")
    }else {
      for(var $i$$188_splitLocale$$ = $locale$$22_localeList$$.split("_"), $locale$$22_localeList$$ = [], $j$$32$$ = 0;$j$$32$$ < $i$$188_splitLocale$$.length;$j$$32$$++) {
        for(var $tempLocale$$ = "", $k$$3$$ = 0;$k$$3$$ < $j$$32$$ + 1;$k$$3$$++) {
          0 != $k$$3$$ && ($tempLocale$$ += "_"), $tempLocale$$ += $i$$188_splitLocale$$[$k$$3$$]
        }
        $locale$$22_localeList$$.push($tempLocale$$)
      }
      for($i$$188_splitLocale$$ = $locale$$22_localeList$$.length - 1;0 <= $i$$188_splitLocale$$;$i$$188_splitLocale$$++) {
        -1 !== this.$_supportedLocales$.indexOf($locale$$22_localeList$$[$i$$188_splitLocale$$]) && this.$_loadResourceBundleByUrl$($url$$31$$ + "_" + $locale$$22_localeList$$[$i$$188_splitLocale$$] + ".js")
      }
    }
  }, $_loadResourceBundleByUrl$:function($url$$32$$) {
    if(!this.$_loadedResources$[$url$$32$$]) {
      var $resolvedUrl$$ = $oj$$10$$.$Config$.$getResourceUrl$($url$$32$$), $thisRef$$ = this, $loadedBundles$$ = this.$_loadedResources$;
      $$$$10$$.getScript($resolvedUrl$$, function() {
        $loadedBundles$$[$url$$32$$] = !0;
        $thisRef$$.$_render$()
      })
    }
  }, $_render$:function() {
    for(var $i$$189$$ = 0;$i$$189$$ < this.$_checkResources$.length;$i$$189$$++) {
      if(!this.$_loadedResources$[this.$_checkResources$[$i$$189$$]]) {
        return
      }
    }
    this.$_width$ = this.element.width();
    this.$_height$ = this.element.height();
    this.$_component$.render(this.options, this.$_width$, this.$_height$)
  }, refresh:function() {
    this.$_context$.setReadingDirection(this._GetReadingDirection());
    this.$_processTranslations$();
    this.$_render$()
  }, getNodeBySubId:function($locator$$7$$) {
    var $automation$$;
    this.$_component$ && this.$_component$.getAutomation && ($automation$$ = this.$_component$.getAutomation());
    return $automation$$ ? $automation$$.$getDomElementForSubId$($locator$$7$$) : null
  }});
  $oj$$10$$.$ShapeAttributeGroupHandler$ = function $$oj$$10$$$$ShapeAttributeGroupHandler$$($matchRules$$2$$) {
    this.$Init$($matchRules$$2$$)
  };
  $goog$exportPath_$$("ShapeAttributeGroupHandler", $oj$$10$$.$ShapeAttributeGroupHandler$, $oj$$10$$);
  $oj$$10$$.$Object$.$createSubclass$($oj$$10$$.$ShapeAttributeGroupHandler$, $oj$$10$$.$AttributeGroupHandler$, "oj.ShapeAttributeGroupHandler");
  $oj$$10$$.$ShapeAttributeGroupHandler$.$_attributeValues$ = "square circle diamond plus triangleDown triangleUp human".split(" ");
  $oj$$10$$.$ShapeAttributeGroupHandler$.prototype.$getValueRamp$ = function $$oj$$10$$$$ShapeAttributeGroupHandler$$$$getValueRamp$$() {
    return $oj$$10$$.$ShapeAttributeGroupHandler$.$_attributeValues$.slice()
  };
  $oj$$10$$.$ColorAttributeGroupHandler$ = function $$oj$$10$$$$ColorAttributeGroupHandler$$($matchRules$$3$$) {
    this.$_attributeValues$ = [];
    var $attrGpsDiv$$ = $$$$10$$(document.createElement("div"));
    $attrGpsDiv$$.attr("style", "display:none;");
    $attrGpsDiv$$.attr("id", "attrGps");
    $$$$10$$(document.body).append($attrGpsDiv$$);
    for(var $i$$190$$ = 0;$i$$190$$ < $oj$$10$$.$ColorAttributeGroupHandler$.$_styleClasses$.length;$i$$190$$++) {
      var $childDiv$$ = $$$$10$$(document.createElement("div"));
      $childDiv$$.addClass($oj$$10$$.$ColorAttributeGroupHandler$.$_styleClasses$[$i$$190$$]);
      $attrGpsDiv$$.append($childDiv$$);
      this.$_attributeValues$.push($childDiv$$.css("color"))
    }
    $attrGpsDiv$$.remove();
    this.$Init$($matchRules$$3$$)
  };
  $goog$exportPath_$$("ColorAttributeGroupHandler", $oj$$10$$.$ColorAttributeGroupHandler$, $oj$$10$$);
  $oj$$10$$.$Object$.$createSubclass$($oj$$10$$.$ColorAttributeGroupHandler$, $oj$$10$$.$AttributeGroupHandler$, "oj.ColorAttributeGroupHandler");
  $oj$$10$$.$ColorAttributeGroupHandler$.$_styleClasses$ = "oj-dvt-category-index1 oj-dvt-category-index2 oj-dvt-category-index3 oj-dvt-category-index4 oj-dvt-category-index5 oj-dvt-category-index6 oj-dvt-category-index7 oj-dvt-category-index8 oj-dvt-category-index9 oj-dvt-category-index10 oj-dvt-category-index11 oj-dvt-category-index12".split(" ");
  $oj$$10$$.$ColorAttributeGroupHandler$.prototype.$getValueRamp$ = function $$oj$$10$$$$ColorAttributeGroupHandler$$$$getValueRamp$$() {
    return this.$_attributeValues$.slice()
  };
  $DvtJsonPath$$.prototype.$_resolveLeafObjectAndProperty$ = function $$DvtJsonPath$$$$$_resolveLeafObjectAndProperty$$($root$$, $path$$8$$, $delimiter$$, $createIfMissing$$) {
    for(var $result$$13$$ = {};$root$$ && -1 < $path$$8$$.indexOf($delimiter$$);) {
      var $subProperty$$ = $path$$8$$.substring(0, $path$$8$$.indexOf($delimiter$$));
      $createIfMissing$$ && void 0 === $root$$[$subProperty$$] && ($root$$[$subProperty$$] = {});
      $root$$ = $root$$[$subProperty$$];
      $path$$8$$ = $path$$8$$.substring($path$$8$$.indexOf($delimiter$$) + 1, $path$$8$$.length)
    }
    $root$$ && ($result$$13$$.object = $root$$, $result$$13$$.parameter = $path$$8$$);
    return $result$$13$$
  };
  $DvtJsonPath$$.prototype.$_resolvePath$ = function $$DvtJsonPath$$$$$_resolvePath$$($createIfMissing$$1_result$$14$$) {
    void 0 === this.$_leaf$ && ($createIfMissing$$1_result$$14$$ = this.$_resolveLeafObjectAndProperty$(this.$_root$, this.$_path$, this.$_delimiter$, $createIfMissing$$1_result$$14$$), this.$_leaf$ = $createIfMissing$$1_result$$14$$.object, this.$_param$ = $createIfMissing$$1_result$$14$$.parameter)
  };
  $DvtJsonPath$$.prototype.$getValue$ = function $$DvtJsonPath$$$$$getValue$$() {
    this.$_resolvePath$(!1);
    return void 0 === this.$_leaf$ ? void 0 : this.$_leaf$[this.$_param$]
  };
  $DvtJsonPath$$.prototype.$setValue$ = function $$DvtJsonPath$$$$$setValue$$($value$$157$$) {
    this.$_resolvePath$(!0);
    this.$_leaf$[this.$_param$] !== $value$$157$$ && (this.$_leaf$[this.$_param$] = $value$$157$$)
  }
});
