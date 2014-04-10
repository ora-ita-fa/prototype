define([], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  var D={};D.$JSCompiler_alias_VOID$$ = void 0;
D.$JSCompiler_alias_TRUE$$ = !0;
D.$JSCompiler_alias_NULL$$ = null;
D.$JSCompiler_alias_FALSE$$ = !1;
D.$JSCompiler_identityFn$$ = function() {
  return function($JSCompiler_identityFn_value$$) {
    return $JSCompiler_identityFn_value$$
  }
};
D.$JSCompiler_emptyFn$$ = function() {
  return function() {
  }
};
D.$JSCompiler_set$$ = function($JSCompiler_set_name$$) {
  return function($JSCompiler_set_value$$) {
    this[$JSCompiler_set_name$$] = $JSCompiler_set_value$$
  }
};
D.$JSCompiler_get$$ = function($JSCompiler_get_name$$) {
  return function() {
    return this[$JSCompiler_get_name$$]
  }
};
D.$JSCompiler_returnArg$$ = function($JSCompiler_returnArg_value$$) {
  return function() {
    return $JSCompiler_returnArg_value$$
  }
};
D.COMPILED = D.$JSCompiler_alias_TRUE$$;
D.$goog$global$$ = this == window ? this : window;
D.$goog$basePath$$ = "";
if(!D.COMPILED) {
  D.$goog$dependencies_$$ = {pathToNames:{}, nameToPath:{}, requires:{}, visited:{}, written:{}};
  D.$goog$inHtmlDocument_$$ = function $$goog$inHtmlDocument_$$$() {
    var $doc$$4$$ = D.$goog$global$$.document;
    return"undefined" != typeof $doc$$4$$ && "write" in $doc$$4$$
  };
  D.$goog$writeScriptTag_$$ = function $$goog$writeScriptTag_$$$($src$$6$$) {
    return(0,D.$goog$inHtmlDocument_$$)() ? (D.$goog$global$$.document.write('\x3cscript type\x3d"text/javascript" src\x3d"' + $src$$6$$ + '"\x3e\x3c/script\x3e'), D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_FALSE$$
  };
  if(D.$goog$global$$.CLOSURE_BASE_PATH) {
    D.$goog$basePath$$ = D.$goog$global$$.CLOSURE_BASE_PATH
  }else {
    if((0,D.$goog$inHtmlDocument_$$)()) {
      for(D.$scripts$$inline_559$$ = D.$goog$global$$.document.getElementsByTagName("script"), D.$i$$inline_560$$ = D.$scripts$$inline_559$$.length - 1;0 <= D.$i$$inline_560$$;--D.$i$$inline_560$$) {
        D.$src$$inline_561$$ = D.$scripts$$inline_559$$[D.$i$$inline_560$$].src;
        D.$qmark$$inline_562$$ = D.$src$$inline_561$$.lastIndexOf("?");
        D.$l$$inline_563$$ = -1 == D.$qmark$$inline_562$$ ? D.$src$$inline_561$$.length : D.$qmark$$inline_562$$;
        if("base.js" == D.$src$$inline_561$$.substr(D.$l$$inline_563$$ - 7, 7)) {
          D.$goog$basePath$$ = D.$src$$inline_561$$.substr(0, D.$l$$inline_563$$ - 7);
          break
        }
      }
    }
  }
  if(!D.$goog$global$$.CLOSURE_NO_DEPS) {
    D.$src$$inline_565$$ = D.$goog$basePath$$ + "deps.js";
    D.$importScript$$inline_566$$ = D.$goog$global$$.CLOSURE_IMPORT_SCRIPT || D.$goog$writeScriptTag_$$;
    !D.$goog$dependencies_$$.written[D.$src$$inline_565$$] && (0,D.$importScript$$inline_566$$)(D.$src$$inline_565$$) && (D.$goog$dependencies_$$.written[D.$src$$inline_565$$] = D.$JSCompiler_alias_TRUE$$)
  }
}
window.Math.floor(2147483648 * window.Math.random()).toString(36);
D.$goog$exportSymbol$$ = function $$goog$exportSymbol$$$($publicPath$$1$$, $object$$6$$) {
  var $parts$$inline_571$$ = $publicPath$$1$$.split("."), $cur$$inline_572$$ = D.$goog$global$$;
  !($parts$$inline_571$$[0] in $cur$$inline_572$$) && $cur$$inline_572$$.execScript && $cur$$inline_572$$.execScript("var " + $parts$$inline_571$$[0]);
  for(var $part$$inline_573$$;$parts$$inline_571$$.length && ($part$$inline_573$$ = $parts$$inline_571$$.shift());) {
    !$parts$$inline_571$$.length && $object$$6$$ !== D.$JSCompiler_alias_VOID$$ ? $cur$$inline_572$$[$part$$inline_573$$] = $object$$6$$ : $cur$$inline_572$$ = $cur$$inline_572$$[$part$$inline_573$$] ? $cur$$inline_572$$[$part$$inline_573$$] : $cur$$inline_572$$[$part$$inline_573$$] = {}
  }
};
D.DVT_ADVANCED_CLOSURE = D.$JSCompiler_alias_TRUE$$;
D.$DvtDataGridUtils$$ = function $$DvtDataGridUtils$$$($dataGrid_userAgent$$) {
  this.$scrollbarSize$ = -1;
  this.$dataGrid$ = $dataGrid_userAgent$$;
  $dataGrid_userAgent$$ = window.navigator && window.navigator.userAgent ? window.navigator.userAgent.toLowerCase() : D.$JSCompiler_alias_NULL$$;
  this.$os$ = this.$_determineOS$($dataGrid_userAgent$$);
  this.platform = this.$_determinePlatform$($dataGrid_userAgent$$)
};
D.$JSCompiler_StaticMethods_getScrollbarSize$$ = function $$JSCompiler_StaticMethods_getScrollbarSize$$$($JSCompiler_StaticMethods_getScrollbarSize$self$$) {
  if(-1 == $JSCompiler_StaticMethods_getScrollbarSize$self$$.$scrollbarSize$) {
    var $scrollDiv$$inline_1016$$ = window.document.createElement("div");
    $scrollDiv$$inline_1016$$.style.cssText = "width:100px;height:100px;overflow:scroll;position:absolute;top:-9999px;";
    window.document.body.appendChild($scrollDiv$$inline_1016$$);
    $JSCompiler_StaticMethods_getScrollbarSize$self$$.$scrollbarSize$ = $scrollDiv$$inline_1016$$.offsetWidth - $scrollDiv$$inline_1016$$.clientWidth;
    window.document.body.removeChild($scrollDiv$$inline_1016$$)
  }
  return $JSCompiler_StaticMethods_getScrollbarSize$self$$.$scrollbarSize$
};
D.$DvtDataGridUtils$$.prototype.$isTouchDevice$ = function $$DvtDataGridUtils$$$$$isTouchDevice$$() {
  if(this.$isTouch$ == D.$JSCompiler_alias_VOID$$) {
    var $agentName$$ = window.navigator.userAgent.toLowerCase();
    this.$isTouch$ = -1 != $agentName$$.indexOf("mobile") || -1 != $agentName$$.indexOf("android") ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
  }
  return this.$isTouch$
};
D.$JSCompiler_StaticMethods_addCSSClassName$$ = function $$JSCompiler_StaticMethods_addCSSClassName$$$($domElement$$, $className$$10$$) {
  var $currentClassName$$, $classNameIndex$$;
  $className$$10$$ != D.$JSCompiler_alias_NULL$$ && $domElement$$ != D.$JSCompiler_alias_NULL$$ && ($currentClassName$$ = $domElement$$.className, $classNameIndex$$ = (0,D.$DvtDataGridUtils$_getCSSClassNameIndex$$)($currentClassName$$, $className$$10$$), -1 == $classNameIndex$$ && ($domElement$$.className = $currentClassName$$ ? $className$$10$$ + " " + $currentClassName$$ : $className$$10$$))
};
D.$JSCompiler_StaticMethods_removeCSSClassName$$ = function $$JSCompiler_StaticMethods_removeCSSClassName$$$($domElement$$1$$, $className$$11$$) {
  var $afterstring_currentClassName$$1$$, $beforestring_classNameIndex$$1$$, $classNameEndIndex$$;
  $className$$11$$ != D.$JSCompiler_alias_NULL$$ && $domElement$$1$$ != D.$JSCompiler_alias_NULL$$ && ($afterstring_currentClassName$$1$$ = $domElement$$1$$.className, $beforestring_classNameIndex$$1$$ = (0,D.$DvtDataGridUtils$_getCSSClassNameIndex$$)($afterstring_currentClassName$$1$$, $className$$11$$), -1 != $beforestring_classNameIndex$$1$$ && ($classNameEndIndex$$ = $beforestring_classNameIndex$$1$$ + $className$$11$$.length, $beforestring_classNameIndex$$1$$ = 0 == $beforestring_classNameIndex$$1$$ ? 
  D.$JSCompiler_alias_NULL$$ : $afterstring_currentClassName$$1$$.substring(0, $beforestring_classNameIndex$$1$$), $afterstring_currentClassName$$1$$ = $classNameEndIndex$$ == $afterstring_currentClassName$$1$$.length ? D.$JSCompiler_alias_NULL$$ : $afterstring_currentClassName$$1$$.substring($classNameEndIndex$$ + 1), $domElement$$1$$.className = $beforestring_classNameIndex$$1$$ == D.$JSCompiler_alias_NULL$$ ? $afterstring_currentClassName$$1$$ == D.$JSCompiler_alias_NULL$$ ? "" : $afterstring_currentClassName$$1$$ : 
  $afterstring_currentClassName$$1$$ == D.$JSCompiler_alias_NULL$$ ? $beforestring_classNameIndex$$1$$ : $beforestring_classNameIndex$$1$$ + $afterstring_currentClassName$$1$$))
};
D.$JSCompiler_StaticMethods_containsCSSClassName$$ = function $$JSCompiler_StaticMethods_containsCSSClassName$$$($domElement$$2$$, $className$$12$$) {
  return $className$$12$$ != D.$JSCompiler_alias_NULL$$ && $domElement$$2$$ != D.$JSCompiler_alias_NULL$$ ? -1 != (0,D.$DvtDataGridUtils$_getCSSClassNameIndex$$)($domElement$$2$$.className, $className$$12$$) : D.$JSCompiler_alias_FALSE$$
};
D.$DvtDataGridUtils$_getCSSClassNameIndex$$ = function $$DvtDataGridUtils$_getCSSClassNameIndex$$$($currentClassName$$2$$, $className$$13$$) {
  var $classNameLength$$, $currentClassNameLength$$, $nameIndex$$, $hasStart$$, $endIndex$$2_hasEnd$$, $lastNameIndex$$;
  if(!$currentClassName$$2$$ || !$currentClassName$$2$$.indexOf) {
    return-1
  }
  if($className$$13$$ === $currentClassName$$2$$) {
    return 0
  }
  $classNameLength$$ = $className$$13$$.length;
  $currentClassNameLength$$ = $currentClassName$$2$$.length;
  $nameIndex$$ = $currentClassName$$2$$.indexOf($className$$13$$);
  if(0 <= $nameIndex$$) {
    $hasStart$$ = 0 == $nameIndex$$ || " " == $currentClassName$$2$$.charAt($nameIndex$$ - 1);
    $endIndex$$2_hasEnd$$ = $nameIndex$$ + $classNameLength$$;
    $endIndex$$2_hasEnd$$ = $endIndex$$2_hasEnd$$ == $currentClassNameLength$$ || " " == $currentClassName$$2$$.charAt($endIndex$$2_hasEnd$$);
    if($hasStart$$ && $endIndex$$2_hasEnd$$) {
      return $nameIndex$$
    }
    $lastNameIndex$$ = $currentClassName$$2$$.lastIndexOf($className$$13$$);
    if($lastNameIndex$$ != $nameIndex$$) {
      return $hasStart$$ = $currentClassName$$2$$.charAt($lastNameIndex$$ - 1), $endIndex$$2_hasEnd$$ = $lastNameIndex$$ + $classNameLength$$, $endIndex$$2_hasEnd$$ = $endIndex$$2_hasEnd$$ == $currentClassNameLength$$ || " " == $currentClassName$$2$$.charAt($endIndex$$2_hasEnd$$), $hasStart$$ && $endIndex$$2_hasEnd$$ ? $lastNameIndex$$ : $currentClassName$$2$$.indexOf(" " + $className$$13$$ + " ")
    }
  }
  return-1
};
D.$JSCompiler_StaticMethods_ctrlEquivalent$$ = function $$JSCompiler_StaticMethods_ctrlEquivalent$$$($JSCompiler_StaticMethods_ctrlEquivalent$self$$, $event$$45$$) {
  return"Mac" === $JSCompiler_StaticMethods_ctrlEquivalent$self$$.$os$ ? $event$$45$$.metaKey : $event$$45$$.ctrlKey
};
D.$JSCompiler_StaticMethods_getElementScrollLeft$$ = function $$JSCompiler_StaticMethods_getElementScrollLeft$$$($JSCompiler_StaticMethods_getElementScrollLeft$self$$, $element$$9$$) {
  var $width$$20$$, $elemWidth$$;
  if($JSCompiler_StaticMethods_getElementScrollLeft$self$$.$dataGrid$.$getResources$().isRTLMode()) {
    if("gecko" == $JSCompiler_StaticMethods_getElementScrollLeft$self$$.platform || "ie" == $JSCompiler_StaticMethods_getElementScrollLeft$self$$.platform) {
      return window.Math.abs($element$$9$$.scrollLeft)
    }
    $width$$20$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_getElementScrollLeft$self$$.$dataGrid$.$m_scroller$.firstChild);
    $elemWidth$$ = (0,window.parseInt)($element$$9$$.style.width, 10);
    return window.Math.max(0, $width$$20$$ - $elemWidth$$ - $element$$9$$.scrollLeft)
  }
  return $element$$9$$.scrollLeft
};
D.$JSCompiler_StaticMethods_setElementScrollLeft$$ = function $$JSCompiler_StaticMethods_setElementScrollLeft$$$($JSCompiler_StaticMethods_setElementScrollLeft$self_width$$21$$, $element$$10$$, $scrollLeft$$9$$) {
  var $elemWidth$$1$$;
  $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$21$$.$dataGrid$.$getResources$().isRTLMode() ? "gecko" === $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$21$$.platform ? $element$$10$$.scrollLeft = 0 - $scrollLeft$$9$$ : "ie" == $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$21$$.platform ? $element$$10$$.scrollLeft = $scrollLeft$$9$$ : ($JSCompiler_StaticMethods_setElementScrollLeft$self_width$$21$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_setElementScrollLeft$self_width$$21$$.$dataGrid$.$m_scroller$.firstChild), 
  $elemWidth$$1$$ = (0,window.parseInt)($element$$10$$.style.width, 10), $element$$10$$.scrollLeft = $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$21$$ - $elemWidth$$1$$ - $scrollLeft$$9$$) : $element$$10$$.scrollLeft = $scrollLeft$$9$$
};
D.$DvtDataGridUtils$$.prototype.$_determineOS$ = function $$DvtDataGridUtils$$$$$_determineOS$$($userAgent$$1$$) {
  if($userAgent$$1$$) {
    if(-1 != $userAgent$$1$$.indexOf("win")) {
      return"Windows"
    }
    if(-1 != $userAgent$$1$$.indexOf("mac")) {
      return"Mac"
    }
    if(-1 != $userAgent$$1$$.indexOf("sunos")) {
      return"Solaris"
    }
  }
  return"Unknown"
};
D.$DvtDataGridUtils$$.prototype.$_determinePlatform$ = function $$DvtDataGridUtils$$$$$_determinePlatform$$($userAgent$$2$$) {
  if($userAgent$$2$$ && -1 == $userAgent$$2$$.indexOf("opera")) {
    if(-1 != $userAgent$$2$$.indexOf("trident") || -1 != $userAgent$$2$$.indexOf("msie")) {
      return"ie"
    }
    if(-1 != $userAgent$$2$$.indexOf("applewebkit") || -1 != $userAgent$$2$$.indexOf("safari")) {
      return"webkit"
    }
    if(-1 != $userAgent$$2$$.indexOf("gecko/")) {
      return"gecko"
    }
  }
  return"unknown"
};
D.$DvtDataGridOptions$$ = (0,D.$JSCompiler_set$$)("options");
D.$JSCompiler_StaticMethods_extract$$ = function $$JSCompiler_StaticMethods_extract$$$($JSCompiler_StaticMethods_extract$self_val1$$, $arg1$$, $arg2_val2$$, $arg3$$) {
  return $arg1$$ != D.$JSCompiler_alias_NULL$$ ? ($JSCompiler_StaticMethods_extract$self_val1$$ = $JSCompiler_StaticMethods_extract$self_val1$$.options[$arg1$$], $arg2_val2$$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_extract$self_val1$$ != D.$JSCompiler_alias_NULL$$ ? ($arg2_val2$$ = $JSCompiler_StaticMethods_extract$self_val1$$[$arg2_val2$$], $arg3$$ != D.$JSCompiler_alias_NULL$$ && $arg2_val2$$ != D.$JSCompiler_alias_NULL$$ ? $arg2_val2$$[$arg3$$] : $arg2_val2$$) : $JSCompiler_StaticMethods_extract$self_val1$$) : 
  D.$JSCompiler_alias_NULL$$
};
D.$DvtDataGridOptions$$.prototype.evaluate = function $$DvtDataGridOptions$$$$evaluate$($value$$50$$, $obj$$29$$) {
  return"function" == typeof $value$$50$$ ? $value$$50$$.call(this, $obj$$29$$) : $value$$50$$
};
D.$JSCompiler_StaticMethods_getRawProperty$$ = function $$JSCompiler_StaticMethods_getRawProperty$$$($JSCompiler_StaticMethods_getRawProperty$self$$, $prop$$7$$, $axis$$26$$) {
  var $arg1$$1$$, $arg2$$1$$, $arg3$$1$$;
  "row" == $axis$$26$$ || "column" == $axis$$26$$ ? ($arg1$$1$$ = "header", $arg2$$1$$ = $axis$$26$$, $arg3$$1$$ = $prop$$7$$) : "cell" == $axis$$26$$ && ($arg1$$1$$ = "cell", $arg2$$1$$ = $prop$$7$$);
  return(0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getRawProperty$self$$, $arg1$$1$$, $arg2$$1$$, $arg3$$1$$)
};
D.$DvtDataGridOptions$$.prototype.$getProperty$ = function $$DvtDataGridOptions$$$$$getProperty$$($prop$$8$$, $axis$$27$$, $obj$$30$$) {
  return this.evaluate((0,D.$JSCompiler_StaticMethods_getRawProperty$$)(this, $prop$$8$$, $axis$$27$$), $obj$$30$$)
};
D.$JSCompiler_StaticMethods_getRowBandingInterval$$ = function $$JSCompiler_StaticMethods_getRowBandingInterval$$$($JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$) {
  $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$, "bandingInterval", "row");
  return $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$ : 0
};
D.$JSCompiler_StaticMethods_getColumnBandingInterval$$ = function $$JSCompiler_StaticMethods_getColumnBandingInterval$$$($JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$) {
  $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$, "bandingInterval", "column");
  return $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$ : 0
};
D.$DvtDataGridOptions$$.prototype.$getEmptyText$ = function $$DvtDataGridOptions$$$$$getEmptyText$$() {
  return(0,D.$JSCompiler_StaticMethods_extract$$)(this, "emptyText")
};
D.$JSCompiler_StaticMethods_getHorizontalGridlines$$ = function $$JSCompiler_StaticMethods_getHorizontalGridlines$$$($JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$3$$) {
  $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$3$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$3$$, "gridlines", "horizontal");
  return $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$3$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$3$$ : "visible"
};
D.$JSCompiler_StaticMethods_getVerticalGridlines$$ = function $$JSCompiler_StaticMethods_getVerticalGridlines$$$($JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$3$$) {
  $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$3$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$3$$, "gridlines", "vertical");
  return $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$3$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$3$$ : "visible"
};
D.$JSCompiler_StaticMethods_getSelectionCardinality$$ = function $$JSCompiler_StaticMethods_getSelectionCardinality$$$($JSCompiler_StaticMethods_getSelectionCardinality$self_key$$40$$) {
  var $mode$$8_val$$25$$;
  $mode$$8_val$$25$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getSelectionCardinality$self_key$$40$$, "selectionMode");
  if($mode$$8_val$$25$$ == D.$JSCompiler_alias_VOID$$) {
    return"none"
  }
  $JSCompiler_StaticMethods_getSelectionCardinality$self_key$$40$$ = $JSCompiler_StaticMethods_getSelectionCardinality$self_key$$40$$.$getSelectionMode$();
  $mode$$8_val$$25$$ = $mode$$8_val$$25$$[$JSCompiler_StaticMethods_getSelectionCardinality$self_key$$40$$];
  return $mode$$8_val$$25$$ != D.$JSCompiler_alias_NULL$$ ? $mode$$8_val$$25$$ : "none"
};
D.$DvtDataGridOptions$$.prototype.$getSelectionMode$ = function $$DvtDataGridOptions$$$$$getSelectionMode$$() {
  var $cardinality_mode$$9$$;
  $cardinality_mode$$9$$ = (0,D.$JSCompiler_StaticMethods_extract$$)(this, "selectionMode");
  if($cardinality_mode$$9$$ == D.$JSCompiler_alias_VOID$$) {
    return"cell"
  }
  $cardinality_mode$$9$$ = $cardinality_mode$$9$$.row;
  return $cardinality_mode$$9$$ != D.$JSCompiler_alias_NULL$$ && "none" != $cardinality_mode$$9$$ ? "row" : "cell"
};
D.$JSCompiler_StaticMethods_isResizable$$ = function $$JSCompiler_StaticMethods_isResizable$$$($JSCompiler_StaticMethods_isResizable$self_value$$inline_10690$$, $axis$$29$$, $obj$$32$$) {
  $JSCompiler_StaticMethods_isResizable$self_value$$inline_10690$$ = $JSCompiler_StaticMethods_isResizable$self_value$$inline_10690$$.$getProperty$("resizable", $axis$$29$$, $obj$$32$$);
  return $JSCompiler_StaticMethods_isResizable$self_value$$inline_10690$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_isResizable$self_value$$inline_10690$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtDataGridOptions$$.prototype.$getInlineStyle$ = function $$DvtDataGridOptions$$$$$getInlineStyle$$($axis$$30$$, $obj$$33$$) {
  return this.$getProperty$("style", $axis$$30$$, $obj$$33$$)
};
D.$DvtDataGridOptions$$.prototype.$getStyleClass$ = function $$DvtDataGridOptions$$$$$getStyleClass$$($axis$$31$$, $obj$$34$$) {
  return this.$getProperty$("className", $axis$$31$$, $obj$$34$$)
};
D.$JSCompiler_StaticMethods_getRenderer$$ = function $$JSCompiler_StaticMethods_getRenderer$$$($JSCompiler_StaticMethods_getRenderer$self$$, $axis$$32$$) {
  return(0,D.$JSCompiler_StaticMethods_getRawProperty$$)($JSCompiler_StaticMethods_getRenderer$self$$, "renderer", $axis$$32$$)
};
D.$DvtDataGridSizingManager$$ = function $$DvtDataGridSizingManager$$$() {
  this.$sizes$ = {column:{}, row:{}}
};
D.$DvtDataGridSizingManager$$.prototype.$setSize$ = function $$DvtDataGridSizingManager$$$$$setSize$$($axis$$24$$, $headerKey$$, $size$$11$$) {
  this.$sizes$[$axis$$24$$][$headerKey$$] = $size$$11$$
};
D.$DvtDataGridSizingManager$$.prototype.$getSize$ = function $$DvtDataGridSizingManager$$$$$getSize$$($axis$$25$$, $headerKey$$1$$) {
  return this.$sizes$[$axis$$25$$].hasOwnProperty($headerKey$$1$$) ? this.$sizes$[$axis$$25$$][$headerKey$$1$$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtDataGridSizingManager$$.prototype.clear = function $$DvtDataGridSizingManager$$$$clear$() {
  this.$sizes$ = {column:{}, row:{}}
};
D.$DvtDataGrid$$ = function $$DvtDataGrid$$$() {
  this.TIMEOUT = 100;
  this.$MAX_COLUMN_THRESHOLD$ = 20;
  this.$MAX_ROW_THRESHOLD$ = 30;
  this.$m_cachedRowHeight$ = [];
  this.$m_cachedColumnWidth$ = [];
  this.$m_utils$ = new D.$DvtDataGridUtils$$(this);
  this.$m_discontiguousSelection$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_cachedRowHeightStartIndex$ = this.$m_cachedColumnWidthStartIndex$ = 0;
  this.$m_sizingManager$ = new D.$DvtDataGridSizingManager$$;
  this.$m_colHeaderHeight$ = this.$m_rowHeaderWidth$ = D.$JSCompiler_alias_NULL$$;
  this.$m_styleClassDimensionMap$ = {};
  this.$m_captureScrolling$ = this.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_isEstimateColumnCount$ = this.$m_isEstimateRowCount$ = D.$JSCompiler_alias_VOID$$;
  this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$;
  this.$callbacks$ = {}
};
(0,D.$goog$exportSymbol$$)("DvtDataGrid", D.$DvtDataGrid$$);
D.$DvtDataGrid$$.prototype.$SetOptions$ = function $$DvtDataGrid$$$$$SetOptions$$($options$$3$$) {
  this.$m_options$ = new D.$DvtDataGridOptions$$($options$$3$$)
};
D.$DvtDataGrid$$.prototype.SetOptions = D.$DvtDataGrid$$.prototype.$SetOptions$;
D.$DvtDataGrid$$.prototype.$SetResources$ = (0,D.$JSCompiler_set$$)("$m_resources$");
D.$DvtDataGrid$$.prototype.SetResources = D.$DvtDataGrid$$.prototype.$SetResources$;
D.$DvtDataGrid$$.prototype.$getResources$ = (0,D.$JSCompiler_get$$)("$m_resources$");
D.$DvtDataGrid$$.prototype.getResources = D.$DvtDataGrid$$.prototype.$getResources$;
D.$DvtDataGrid$$.prototype.getMappedStyle = function $$DvtDataGrid$$$$getMappedStyle$($key$$25$$) {
  return this.$getResources$().getMappedStyle($key$$25$$)
};
D.$DvtDataGrid$$.prototype.$SetDataSource$ = function $$DvtDataGrid$$$$$SetDataSource$$($dataSource$$) {
  $dataSource$$ != D.$JSCompiler_alias_NULL$$ && ($dataSource$$.on("change", this.$handleModelEvent$.bind(this), this), $dataSource$$.on("expand", this.$handleExpandEvent$.bind(this), this), $dataSource$$.on("collapse", this.$handleCollapseEvent$.bind(this), this));
  this.$m_dataSource$ = $dataSource$$
};
D.$DvtDataGrid$$.prototype.SetDataSource = D.$DvtDataGrid$$.prototype.$SetDataSource$;
D.$DvtDataGrid$$.prototype.$getDataSource$ = (0,D.$JSCompiler_get$$)("$m_dataSource$");
D.$DvtDataGrid$$.prototype.getDataSource = D.$DvtDataGrid$$.prototype.$getDataSource$;
D.$DvtDataGrid$$.prototype.$SetCreateContextCallback$ = (0,D.$JSCompiler_set$$)("$m_createContextCallback$");
D.$DvtDataGrid$$.prototype.SetCreateContextCallback = D.$DvtDataGrid$$.prototype.$SetCreateContextCallback$;
D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$ = function $$JSCompiler_StaticMethods__isHighWatermarkScrolling$$$($JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_600$$) {
  $JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_600$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_600$$.$m_options$, "scrollPolicy");
  $JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_600$$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_600$$ = "auto");
  return"scroll" != $JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_600$$
};
D.$DvtDataGrid$$.prototype.$destroy$ = function $$DvtDataGrid$$$$$destroy$$() {
  delete this.$m_fetching$;
  window.document.removeEventListener("mousemove", this.$docMouseMoveListener$, D.$JSCompiler_alias_FALSE$$);
  window.document.removeEventListener("mouseup", this.$docMouseUpListener$, D.$JSCompiler_alias_FALSE$$);
  this.$m_dataSource$ != D.$JSCompiler_alias_NULL$$ && (this.$m_dataSource$.off("change", this.$handleModelEvent$), this.$m_dataSource$.off("expand", this.$handleExpandEvent$), this.$m_dataSource$.off("collapse", this.$handleCollapseEvent$));
  this.$m_root$ != D.$JSCompiler_alias_NULL$$ && (this.$m_handleDatabodyKeyDown$ && this.$m_root$.removeEventListener("keydown", this.$m_handleDatabodyKeyDown$, D.$JSCompiler_alias_FALSE$$), this.$m_handleFocus$ && this.$m_root$.removeEventListener("focus", this.$m_handleFocus$, D.$JSCompiler_alias_FALSE$$));
  delete this.$m_styleClassDimensionMap$;
  this.$m_styleClassDimensionMap$ = {}
};
D.$DvtDataGrid$$.prototype.destroy = D.$DvtDataGrid$$.prototype.$destroy$;
D.$DvtDataGrid$$.prototype.getWidth = function $$DvtDataGrid$$$$getWidth$() {
  this.$m_width$ == D.$JSCompiler_alias_NULL$$ && (this.$m_width$ = this.$m_root$.offsetWidth);
  return this.$m_width$
};
D.$DvtDataGrid$$.prototype.getHeight = function $$DvtDataGrid$$$$getHeight$() {
  this.$m_height$ == D.$JSCompiler_alias_NULL$$ && (this.$m_height$ = this.$m_root$.offsetHeight);
  return this.$m_height$
};
D.$JSCompiler_StaticMethods_getViewportWidth$$ = function $$JSCompiler_StaticMethods_getViewportWidth$$$($JSCompiler_StaticMethods_getViewportWidth$self_width$$12$$) {
  $JSCompiler_StaticMethods_getViewportWidth$self_width$$12$$ = $JSCompiler_StaticMethods_getViewportWidth$self_width$$12$$.getWidth();
  return window.Math.round(1.5 * $JSCompiler_StaticMethods_getViewportWidth$self_width$$12$$)
};
D.$JSCompiler_StaticMethods_getViewportHeight$$ = function $$JSCompiler_StaticMethods_getViewportHeight$$$($JSCompiler_StaticMethods_getViewportHeight$self_height$$12$$) {
  $JSCompiler_StaticMethods_getViewportHeight$self_height$$12$$ = $JSCompiler_StaticMethods_getViewportHeight$self_height$$12$$.getHeight();
  return window.Math.round(1.5 * $JSCompiler_StaticMethods_getViewportHeight$self_height$$12$$)
};
D.$JSCompiler_StaticMethods_getFetchSize$$ = function $$JSCompiler_StaticMethods_getFetchSize$$$($JSCompiler_StaticMethods_getFetchSize$self$$, $axis$$4$$) {
  return"row" == $axis$$4$$ ? ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_rowFetchSize$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_rowFetchSize$ = window.Math.round((0,D.$JSCompiler_StaticMethods_getViewportHeight$$)($JSCompiler_StaticMethods_getFetchSize$self$$) / (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)($JSCompiler_StaticMethods_getFetchSize$self$$))), $JSCompiler_StaticMethods_getFetchSize$self$$.$m_rowFetchSize$) : "column" == $axis$$4$$ ? 
  ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_columnFetchSize$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_columnFetchSize$ = window.Math.round((0,D.$JSCompiler_StaticMethods_getViewportWidth$$)($JSCompiler_StaticMethods_getFetchSize$self$$) / 50)), $JSCompiler_StaticMethods_getFetchSize$self$$.$m_columnFetchSize$) : 0
};
D.$DvtDataGrid$$.prototype.$getEmptyText$ = function $$DvtDataGrid$$$$$getEmptyText$$() {
  var $emptyText_resources$$1$$;
  $emptyText_resources$$1$$ = this.$m_options$.$getEmptyText$();
  $emptyText_resources$$1$$ == D.$JSCompiler_alias_NULL$$ && ($emptyText_resources$$1$$ = this.$getResources$(), $emptyText_resources$$1$$ = $emptyText_resources$$1$$.getTranslatedText("empty"));
  return $emptyText_resources$$1$$
};
D.$JSCompiler_StaticMethods_getDefaultRowHeight$$ = function $$JSCompiler_StaticMethods_getDefaultRowHeight$$$($JSCompiler_StaticMethods_getDefaultRowHeight$self$$) {
  var $div$$, $divHeight_resources$$2$$;
  $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$m_defaultRowHeight$ == D.$JSCompiler_alias_NULL$$ && ($div$$ = window.document.createElement("div"), $divHeight_resources$$2$$ = $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$getResources$(), $div$$.className = $divHeight_resources$$2$$.getMappedStyle("colheader") + " " + $divHeight_resources$$2$$.getMappedStyle("headercell"), $div$$.style.visibilty = "hidden", $div$$.style.top = "0px", $div$$.style.visibilty = "0px", $div$$.style.height = 
  "auto", $div$$.innerHTML = "hq", $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$m_root$.appendChild($div$$), $divHeight_resources$$2$$ = $div$$.offsetHeight, $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$m_root$.removeChild($div$$), $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$m_defaultRowHeight$ = window.Math.max($divHeight_resources$$2$$, 30));
  return $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$m_defaultRowHeight$
};
D.$JSCompiler_StaticMethods__getStyleClassDimensionKey$$ = function $$JSCompiler_StaticMethods__getStyleClassDimensionKey$$$($elem$$1_inlineStyle$$) {
  var $className$$7$$;
  $className$$7$$ = $elem$$1_inlineStyle$$.className;
  $elem$$1_inlineStyle$$ = $elem$$1_inlineStyle$$.style.cssText;
  return 0 < $elem$$1_inlineStyle$$.indexOf("width") || 0 < $elem$$1_inlineStyle$$.indexOf("height") ? $className$$7$$.concat($elem$$1_inlineStyle$$) : $className$$7$$
};
D.$JSCompiler_StaticMethods_getRowHeight$$ = function $$JSCompiler_StaticMethods_getRowHeight$$$($JSCompiler_StaticMethods_getRowHeight$self$$, $elem$$2$$, $index$$45$$, $key$$26$$) {
  var $rowHeight$$;
  $rowHeight$$ = $JSCompiler_StaticMethods_getRowHeight$self$$.$m_sizingManager$.$getSize$("row", $key$$26$$);
  if($rowHeight$$ != D.$JSCompiler_alias_NULL$$) {
    return $rowHeight$$
  }
  $rowHeight$$ = $JSCompiler_StaticMethods_getRowHeight$self$$.$m_cachedRowHeight$[$index$$45$$ - $JSCompiler_StaticMethods_getRowHeight$self$$.$m_cachedRowHeightStartIndex$];
  if($rowHeight$$ == D.$JSCompiler_alias_NULL$$) {
    $key$$26$$ = (0,D.$JSCompiler_StaticMethods__getStyleClassDimensionKey$$)($elem$$2$$), $rowHeight$$ = $JSCompiler_StaticMethods_getRowHeight$self$$.$m_styleClassDimensionMap$[$key$$26$$], $rowHeight$$ == D.$JSCompiler_alias_NULL$$ && ($elem$$2$$.style.visibility = "hidden", window.document.body.appendChild($elem$$2$$), $rowHeight$$ = $elem$$2$$.offsetHeight, $elem$$2$$.style.visibility = "visible", $JSCompiler_StaticMethods_getRowHeight$self$$.$m_styleClassDimensionMap$[$key$$26$$] = $rowHeight$$)
  }else {
    return $rowHeight$$
  }
  0 === $rowHeight$$ && ($rowHeight$$ = (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)($JSCompiler_StaticMethods_getRowHeight$self$$));
  0 > $index$$45$$ - $JSCompiler_StaticMethods_getRowHeight$self$$.$m_cachedRowHeightStartIndex$ ? $JSCompiler_StaticMethods_getRowHeight$self$$.$m_cachedRowHeight$.unshift($rowHeight$$) : $JSCompiler_StaticMethods_getRowHeight$self$$.$m_cachedRowHeight$[$index$$45$$ - $JSCompiler_StaticMethods_getRowHeight$self$$.$m_cachedRowHeightStartIndex$] = $rowHeight$$;
  return $rowHeight$$
};
D.$JSCompiler_StaticMethods_getColumnWidth$$ = function $$JSCompiler_StaticMethods_getColumnWidth$$$($JSCompiler_StaticMethods_getColumnWidth$self$$, $elem$$3$$, $index$$46$$, $key$$27$$) {
  var $columnWidth$$;
  $columnWidth$$ = $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_sizingManager$.$getSize$("column", $key$$27$$);
  if($columnWidth$$ != D.$JSCompiler_alias_NULL$$) {
    return $columnWidth$$
  }
  $columnWidth$$ = $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_cachedColumnWidth$[$index$$46$$ - $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_cachedColumnWidthStartIndex$];
  if($columnWidth$$ == D.$JSCompiler_alias_NULL$$) {
    $key$$27$$ = (0,D.$JSCompiler_StaticMethods__getStyleClassDimensionKey$$)($elem$$3$$), $columnWidth$$ = $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_styleClassDimensionMap$[$key$$27$$], $columnWidth$$ == D.$JSCompiler_alias_NULL$$ && ("" === $elem$$3$$.style.width && (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($elem$$3$$, 50), $elem$$3$$.style.visibility = "hidden", window.document.body.appendChild($elem$$3$$), $columnWidth$$ = $elem$$3$$.offsetWidth, $elem$$3$$.style.visibility = 
    "visible", $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_styleClassDimensionMap$[$key$$27$$] = $columnWidth$$)
  }else {
    return $columnWidth$$
  }
  0 === $columnWidth$$ && ($columnWidth$$ = 50);
  0 > $index$$46$$ - $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_cachedColumnWidthStartIndex$ ? $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_cachedColumnWidth$.unshift($columnWidth$$) : $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_cachedColumnWidth$[$index$$46$$ - $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_cachedColumnWidthStartIndex$] = $columnWidth$$;
  return $columnWidth$$
};
D.$JSCompiler_StaticMethods_createSubId$$ = function $$JSCompiler_StaticMethods_createSubId$$$($JSCompiler_StaticMethods_createSubId$self$$, $subId$$) {
  var $id$$2$$ = $JSCompiler_StaticMethods_createSubId$self$$.$m_root$.id;
  $id$$2$$ == D.$JSCompiler_alias_NULL$$ && ($id$$2$$ = "");
  return[$id$$2$$, $subId$$].join(":")
};
D.$JSCompiler_StaticMethods_isHeaderFetchComplete$$ = function $$JSCompiler_StaticMethods_isHeaderFetchComplete$$$($JSCompiler_StaticMethods_isHeaderFetchComplete$self$$) {
  return $JSCompiler_StaticMethods_isHeaderFetchComplete$self$$.$m_fetching$.row === D.$JSCompiler_alias_FALSE$$ && $JSCompiler_StaticMethods_isHeaderFetchComplete$self$$.$m_fetching$.column === D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_isFetchComplete$$ = function $$JSCompiler_StaticMethods_isFetchComplete$$$($JSCompiler_StaticMethods_isFetchComplete$self$$) {
  return(0,D.$JSCompiler_StaticMethods_isHeaderFetchComplete$$)($JSCompiler_StaticMethods_isFetchComplete$self$$) && $JSCompiler_StaticMethods_isFetchComplete$self$$.$m_fetching$.cells === D.$JSCompiler_alias_FALSE$$
};
D.$DvtDataGrid$$.prototype.refresh = function $$DvtDataGrid$$$$refresh$($root$$) {
  this.$destroy$();
  (0,D.$JSCompiler_StaticMethods_resetInternal$$)(this);
  this.$render$($root$$)
};
D.$DvtDataGrid$$.prototype.refresh = D.$DvtDataGrid$$.prototype.refresh;
D.$JSCompiler_StaticMethods_resetInternal$$ = function $$JSCompiler_StaticMethods_resetInternal$$$($JSCompiler_StaticMethods_resetInternal$self$$) {
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_cachedRowHeight$ = [];
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_cachedColumnWidth$ = [];
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_sizingManager$.clear();
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_cachedColumnWidthStartIndex$ = 0;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_cachedRowHeightStartIndex$ = 0;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_captureScrolling$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_corner$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_bottomCorner$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_columnHeaderScrollbarSpacer$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_rowHeaderScrollbarSpacer$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_avgRowHeight$ = D.$JSCompiler_alias_VOID$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_avgColWidth$ = D.$JSCompiler_alias_VOID$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_colHeader$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_rowHeader$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_databody$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_scroller$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_isEstimateRowCount$ = D.$JSCompiler_alias_VOID$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_isEstimateColumnCount$ = D.$JSCompiler_alias_VOID$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopColumnFetch$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopColumnHeaderFetch$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtDataGrid$$.prototype.$render$ = function $$DvtDataGrid$$$$$render$$($emptyText$$inline_621_root$$1_rowCount$$inline_8710_summary$$inline_8712$$) {
  this.$m_databody$ != D.$JSCompiler_alias_NULL$$ && (this.$destroy$(), (0,D.$JSCompiler_StaticMethods_resetInternal$$)(this));
  this.$m_timingStart$ = new window.Date;
  this.$m_fetching$ = {};
  this.$m_currentScrollTop$ = this.$m_currentScrollLeft$ = this.$m_endColHeaderPixel$ = this.$m_endRowHeaderPixel$ = this.$m_startColHeaderPixel$ = this.$m_startRowHeaderPixel$ = this.$m_endColHeader$ = this.$m_endRowHeader$ = this.$m_startColHeader$ = this.$m_startRowHeader$ = this.$m_endColPixel$ = this.$m_endRowPixel$ = this.$m_startColPixel$ = this.$m_startRowPixel$ = this.$m_endCol$ = this.$m_endRow$ = this.$m_startCol$ = this.$m_startRow$ = 0;
  var $colCount$$inline_8711_datasource$$inline_8709_root$$inline_8698_rtl$$inline_615$$, $colHeader$$inline_616_key$$inline_8713$$, $rowHeader$$inline_617$$, $empty$$inline_620_i$$inline_622_root$$inline_8692_root$$inline_8695$$;
  this.$m_root$ = $emptyText$$inline_621_root$$1_rowCount$$inline_8710_summary$$inline_8712$$;
  this.$m_root$.className = this.getMappedStyle("datagrid");
  this.$m_root$.setAttribute("role", "application");
  this.$m_root$.setAttribute("aria-labelledby", (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "info"));
  this.$m_initialized$ = D.$JSCompiler_alias_FALSE$$;
  $emptyText$$inline_621_root$$1_rowCount$$inline_8710_summary$$inline_8712$$.tabIndex = 0;
  $empty$$inline_620_i$$inline_622_root$$inline_8692_root$$inline_8695$$ = window.document.createElement("div");
  $empty$$inline_620_i$$inline_622_root$$inline_8692_root$$inline_8695$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "status");
  $empty$$inline_620_i$$inline_622_root$$inline_8692_root$$inline_8695$$.className = this.getMappedStyle("status");
  $empty$$inline_620_i$$inline_622_root$$inline_8692_root$$inline_8695$$.setAttribute("role", "status");
  $emptyText$$inline_621_root$$1_rowCount$$inline_8710_summary$$inline_8712$$.appendChild($empty$$inline_620_i$$inline_622_root$$inline_8692_root$$inline_8695$$);
  this.$m_status$ = $empty$$inline_620_i$$inline_622_root$$inline_8692_root$$inline_8695$$;
  $empty$$inline_620_i$$inline_622_root$$inline_8692_root$$inline_8695$$ = window.document.createElement("div");
  $empty$$inline_620_i$$inline_622_root$$inline_8692_root$$inline_8695$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "info");
  $empty$$inline_620_i$$inline_622_root$$inline_8692_root$$inline_8695$$.className = this.getMappedStyle("info");
  $empty$$inline_620_i$$inline_622_root$$inline_8692_root$$inline_8695$$.setAttribute("role", "status");
  $emptyText$$inline_621_root$$1_rowCount$$inline_8710_summary$$inline_8712$$.appendChild($empty$$inline_620_i$$inline_622_root$$inline_8692_root$$inline_8695$$);
  this.$m_accInfo$ = $empty$$inline_620_i$$inline_622_root$$inline_8692_root$$inline_8695$$;
  $colCount$$inline_8711_datasource$$inline_8709_root$$inline_8698_rtl$$inline_615$$ = window.document.createElement("div");
  $colCount$$inline_8711_datasource$$inline_8709_root$$inline_8698_rtl$$inline_615$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "state");
  $colCount$$inline_8711_datasource$$inline_8709_root$$inline_8698_rtl$$inline_615$$.className = this.getMappedStyle("info");
  $emptyText$$inline_621_root$$1_rowCount$$inline_8710_summary$$inline_8712$$.appendChild($colCount$$inline_8711_datasource$$inline_8709_root$$inline_8698_rtl$$inline_615$$);
  this.$m_stateInfo$ = $colCount$$inline_8711_datasource$$inline_8709_root$$inline_8698_rtl$$inline_615$$;
  if(this.$m_dataSource$ != D.$JSCompiler_alias_NULL$$) {
    $colCount$$inline_8711_datasource$$inline_8709_root$$inline_8698_rtl$$inline_615$$ = this.$getResources$().isRTLMode();
    $colHeader$$inline_616_key$$inline_8713$$ = (0,D.$JSCompiler_StaticMethods_buildHeaders$$)(this, "column", this.getMappedStyle("colheader"));
    $rowHeader$$inline_617$$ = (0,D.$JSCompiler_StaticMethods_buildHeaders$$)(this, "row", this.getMappedStyle("rowheader"));
    var $root$$inline_8701$$ = window.document.createElement("div");
    $root$$inline_8701$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "scroller");
    $root$$inline_8701$$.className = this.getMappedStyle("scrollers");
    $root$$inline_8701$$.addEventListener ? $root$$inline_8701$$.addEventListener("scroll", this.$handleScroll$.bind(this), D.$JSCompiler_alias_FALSE$$) : $root$$inline_8701$$.attachEvent("onscroll", this.$handleScroll$.bind(this));
    var $root$$inline_8705$$ = window.document.createElement("div");
    $root$$inline_8705$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "databody");
    $root$$inline_8705$$.className = this.getMappedStyle("databody");
    this.fetchCells($root$$inline_8705$$, $root$$inline_8701$$, 0, 0);
    $colCount$$inline_8711_datasource$$inline_8709_root$$inline_8698_rtl$$inline_615$$ && ($colHeader$$inline_616_key$$inline_8713$$.style.direction = "rtl", $root$$inline_8705$$.style.direction = "rtl", $root$$inline_8701$$.style.direction = "rtl");
    $emptyText$$inline_621_root$$1_rowCount$$inline_8710_summary$$inline_8712$$.appendChild($colHeader$$inline_616_key$$inline_8713$$);
    $emptyText$$inline_621_root$$1_rowCount$$inline_8710_summary$$inline_8712$$.appendChild($rowHeader$$inline_617$$);
    $emptyText$$inline_621_root$$1_rowCount$$inline_8710_summary$$inline_8712$$.appendChild($root$$inline_8701$$);
    $emptyText$$inline_621_root$$1_rowCount$$inline_8710_summary$$inline_8712$$.appendChild($root$$inline_8705$$);
    this.$m_colHeader$ = $colHeader$$inline_616_key$$inline_8713$$;
    this.$m_rowHeader$ = $rowHeader$$inline_617$$;
    this.$m_databody$ = $root$$inline_8705$$;
    this.$m_scroller$ = $root$$inline_8701$$;
    $emptyText$$inline_621_root$$1_rowCount$$inline_8710_summary$$inline_8712$$.addEventListener ? ($root$$inline_8705$$.addEventListener("mousewheel", this.$handleDatabodyMouseWheel$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_8705$$.addEventListener("mousedown", this.$handleDatabodyMouseDown$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_8705$$.addEventListener("mousemove", this.$handleDatabodyMouseMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_8705$$.addEventListener("mouseup", 
    this.$handleDatabodyMouseUp$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_8705$$.addEventListener("mouseout", this.$handleDatabodyMouseOut$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_8705$$.addEventListener("mouseover", this.$handleDatabodyMouseOver$.bind(this), D.$JSCompiler_alias_FALSE$$), this.$m_handleDatabodyKeyDown$ = this.$handleDatabodyKeyDown$.bind(this), this.$m_handleFocus$ = this.$handleFocus$.bind(this), $emptyText$$inline_621_root$$1_rowCount$$inline_8710_summary$$inline_8712$$.addEventListener("keydown", 
    this.$m_handleDatabodyKeyDown$, D.$JSCompiler_alias_FALSE$$), $emptyText$$inline_621_root$$1_rowCount$$inline_8710_summary$$inline_8712$$.addEventListener("focus", this.$m_handleFocus$, D.$JSCompiler_alias_FALSE$$), this.$m_isResizing$ = D.$JSCompiler_alias_FALSE$$, this.$m_resizingElement$ = D.$JSCompiler_alias_NULL$$, this.$m_databodyDragState$ = D.$JSCompiler_alias_FALSE$$, this.$docMouseMoveListener$ = this.$handleMouseMove$.bind(this), this.$docMouseUpListener$ = this.$handleMouseUp$.bind(this), 
    window.document.addEventListener("mousemove", this.$docMouseMoveListener$, D.$JSCompiler_alias_FALSE$$), window.document.addEventListener("mouseup", this.$docMouseUpListener$, D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_617$$.addEventListener("mousedown", this.$handleHeaderMouseDown$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_616_key$$inline_8713$$.addEventListener("mousedown", this.$handleHeaderMouseDown$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_617$$.addEventListener("mouseover", 
    this.$handleHeaderMouseOver$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_616_key$$inline_8713$$.addEventListener("mouseover", this.$handleHeaderMouseOver$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_617$$.addEventListener("mousemove", this.$handleRowHeaderMouseMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_617$$.addEventListener("mouseup", this.$handleHeaderMouseUp$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_617$$.addEventListener("mouseout", 
    this.$handleHeaderMouseOut$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_616_key$$inline_8713$$.addEventListener("mouseout", this.$handleHeaderMouseOut$.bind(this), D.$JSCompiler_alias_FALSE$$), this.$m_utils$.$isTouchDevice$() ? ($root$$inline_8705$$.addEventListener("touchstart", this.$handleTouchStart$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_8705$$.addEventListener("touchmove", this.$handleTouchMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_8705$$.addEventListener("touchend", 
    this.$handleTouchEnd$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_8705$$.addEventListener("touchcancel", this.$handleTouchCancel$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_616_key$$inline_8713$$.addEventListener("touchstart", this.$handleHeaderTouchStart$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_616_key$$inline_8713$$.addEventListener("touchmove", this.$handleHeaderTouchMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_616_key$$inline_8713$$.addEventListener("touchend", 
    this.$handleHeaderTouchEnd$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_616_key$$inline_8713$$.addEventListener("touchcancel", this.$handleHeaderTouchCancel$.bind(this), D.$JSCompiler_alias_FALSE$$)) : ($rowHeader$$inline_617$$.addEventListener("click", this.$handleHeaderClick$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_616_key$$inline_8713$$.addEventListener("click", this.$handleHeaderClick$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_8701$$.addEventListener("mousedown", 
    this.$handleScrollerMouseDown$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_8701$$.addEventListener("mouseup", this.$handleScrollerMouseUp$.bind(this), D.$JSCompiler_alias_FALSE$$))) : ($root$$inline_8705$$.attachEvent("onmousewheel", this.$handleDatabodyMouseWheel$.bind(this)), $root$$inline_8705$$.attachEvent("onmousedown", this.$handleDatabodyMouseDown$.bind(this)), $root$$inline_8705$$.attachEvent("onmousemove", this.$handleDatabodyMouseDown$.bind(this)), $root$$inline_8705$$.attachEvent("onmouseup", 
    this.$handleDatabodyMouseDown$.bind(this)), $emptyText$$inline_621_root$$1_rowCount$$inline_8710_summary$$inline_8712$$.attachEvent("onkeydown", this.$handleDatabodyKeyDown$.bind(this)));
    $colCount$$inline_8711_datasource$$inline_8709_root$$inline_8698_rtl$$inline_615$$ = this.$m_dataSource$;
    $emptyText$$inline_621_root$$1_rowCount$$inline_8710_summary$$inline_8712$$ = $colCount$$inline_8711_datasource$$inline_8709_root$$inline_8698_rtl$$inline_615$$.getCount("row");
    $colCount$$inline_8711_datasource$$inline_8709_root$$inline_8698_rtl$$inline_615$$ = $colCount$$inline_8711_datasource$$inline_8709_root$$inline_8698_rtl$$inline_615$$.getCount("column");
    $colHeader$$inline_616_key$$inline_8713$$ = !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") ? "summary-exact" : "summary-estimate";
    $emptyText$$inline_621_root$$1_rowCount$$inline_8710_summary$$inline_8712$$ = this.$getResources$().getTranslatedText($colHeader$$inline_616_key$$inline_8713$$, [$emptyText$$inline_621_root$$1_rowCount$$inline_8710_summary$$inline_8712$$, $colCount$$inline_8711_datasource$$inline_8709_root$$inline_8698_rtl$$inline_615$$]);
    $empty$$inline_620_i$$inline_622_root$$inline_8692_root$$inline_8695$$.innerHTML = $emptyText$$inline_621_root$$1_rowCount$$inline_8710_summary$$inline_8712$$;
    if((0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && !this.$m_initialized$) {
      if((0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this), (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this), this.$m_modelEvents$ != D.$JSCompiler_alias_NULL$$) {
        for($empty$$inline_620_i$$inline_622_root$$inline_8692_root$$inline_8695$$ = 0;$empty$$inline_620_i$$inline_622_root$$inline_8692_root$$inline_8695$$ < this.$m_modelEvents$.length;$empty$$inline_620_i$$inline_622_root$$inline_8692_root$$inline_8695$$++) {
          this.$handleModelEvent$(this.$m_modelEvents$[$empty$$inline_620_i$$inline_622_root$$inline_8692_root$$inline_8695$$])
        }
        this.$m_modelEvents$.length = 0
      }
    }else {
      (0,D.$JSCompiler_StaticMethods_isHeaderFetchComplete$$)(this) && !this.$m_initialized$ && (0,D.$JSCompiler_StaticMethods_resizeHeaders$$)(this)
    }
  }else {
    $emptyText$$inline_621_root$$1_rowCount$$inline_8710_summary$$inline_8712$$ = this.$getEmptyText$(), $empty$$inline_620_i$$inline_622_root$$inline_8692_root$$inline_8695$$ = window.document.createElement("div"), $empty$$inline_620_i$$inline_622_root$$inline_8692_root$$inline_8695$$.className = this.getMappedStyle("emptytext"), $empty$$inline_620_i$$inline_622_root$$inline_8692_root$$inline_8695$$.setAttribute("id", (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "empty")), $empty$$inline_620_i$$inline_622_root$$inline_8692_root$$inline_8695$$.innerHTML = 
    $emptyText$$inline_621_root$$1_rowCount$$inline_8710_summary$$inline_8712$$, this.$m_root$.appendChild($empty$$inline_620_i$$inline_622_root$$inline_8692_root$$inline_8695$$)
  }
};
D.$DvtDataGrid$$.prototype.render = D.$DvtDataGrid$$.prototype.$render$;
D.$JSCompiler_StaticMethods_resizeHeaders$$ = function $$JSCompiler_StaticMethods_resizeHeaders$$$($JSCompiler_StaticMethods_resizeHeaders$self$$) {
  var $width$$13$$, $height$$13$$, $colHeader$$1$$, $rowHeader$$1$$, $colHeaderHeight$$, $rowHeaderWidth$$, $dir$$1$$;
  $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_colHeader$ == D.$JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_rowHeader$ == D.$JSCompiler_alias_NULL$$ || ($width$$13$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.getWidth(), $height$$13$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.getHeight(), $colHeader$$1$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_colHeader$, $rowHeader$$1$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_rowHeader$, 
  $colHeaderHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($colHeader$$1$$), $rowHeaderWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($rowHeader$$1$$), $dir$$1$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.$getResources$().isRTLMode() ? "right" : "left", (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$1$$, 0, $dir$$1$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$1$$, $colHeaderHeight$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($rowHeader$$1$$, 
  $height$$13$$ - $colHeaderHeight$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($colHeader$$1$$, $rowHeaderWidth$$, $dir$$1$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($colHeader$$1$$, $width$$13$$ - $rowHeaderWidth$$), $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_utils$.$isTouchDevice$() || (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_resizeHeaders$self$$))
};
D.$JSCompiler_StaticMethods_resizeGrid$$ = function $$JSCompiler_StaticMethods_resizeGrid$$$($JSCompiler_StaticMethods_resizeGrid$self$$) {
  var $databodyWidth_width$$14$$, $height$$14_scrollerHeight$$, $borderWidth_colHeader$$2_empty$$1$$, $emptyText$$2_rowHeader$$2$$, $scroller$$1$$, $databody$$1$$, $colHeaderHeight$$1$$, $rowHeaderWidth$$1$$, $databodyContentWidth$$, $databodyContentHeight$$, $databodyHeight$$, $dir$$2_isDatabodyHorizontalScrollbarRequired$$, $isDatabodyVerticalScrollbarRequired$$, $scrollbarSize$$, $scrollerWidth$$;
  $JSCompiler_StaticMethods_resizeGrid$self$$.$m_databody$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_resizeGrid$self$$.$m_databody$.firstChild == D.$JSCompiler_alias_NULL$$ ? ($emptyText$$2_rowHeader$$2$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$getEmptyText$(), $borderWidth_colHeader$$2_empty$$1$$ = window.document.createElement("div"), $borderWidth_colHeader$$2_empty$$1$$.className = $JSCompiler_StaticMethods_resizeGrid$self$$.getMappedStyle("emptytext"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($borderWidth_colHeader$$2_empty$$1$$, 
  0, "top"), $borderWidth_colHeader$$2_empty$$1$$.innerHTML = $emptyText$$2_rowHeader$$2$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_root$.appendChild($borderWidth_colHeader$$2_empty$$1$$)) : ($JSCompiler_StaticMethods_resizeGrid$self$$.$m_rootBorderWidth$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_resizeGrid$self$$.$m_rootBorderWidth$ = (0,window.parseInt)(window.document.defaultView.getComputedStyle($JSCompiler_StaticMethods_resizeGrid$self$$.$m_root$, D.$JSCompiler_alias_NULL$$).getPropertyValue("border-top-width"), 
  10)), $borderWidth_colHeader$$2_empty$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_rootBorderWidth$, $databodyWidth_width$$14$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.getWidth() - 2 * $borderWidth_colHeader$$2_empty$$1$$, $height$$14_scrollerHeight$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.getHeight() - 2 * $borderWidth_colHeader$$2_empty$$1$$, $borderWidth_colHeader$$2_empty$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_colHeader$, $emptyText$$2_rowHeader$$2$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_rowHeader$, 
  $scroller$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scroller$, $databody$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_databody$, $colHeaderHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($borderWidth_colHeader$$2_empty$$1$$), $rowHeaderWidth$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($emptyText$$2_rowHeader$$2$$), $databodyContentWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$1$$.firstChild), $databodyContentHeight$$ = 
  (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databody$$1$$.firstChild), $height$$14_scrollerHeight$$ -= $colHeaderHeight$$1$$, $scrollerWidth$$ = $databodyWidth_width$$14$$ - $rowHeaderWidth$$1$$, $databodyWidth_width$$14$$ = window.Math.min($databodyContentWidth$$, $scrollerWidth$$), $databodyHeight$$ = window.Math.min($databodyContentHeight$$, $height$$14_scrollerHeight$$), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_utils$.$isTouchDevice$(), $scrollbarSize$$ = (0,D.$JSCompiler_StaticMethods_getScrollbarSize$$)($JSCompiler_StaticMethods_resizeGrid$self$$.$m_utils$), 
  ($dir$$2_isDatabodyHorizontalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, $scrollerWidth$$)) ? $isDatabodyVerticalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, $height$$14_scrollerHeight$$ - $scrollbarSize$$) : ($isDatabodyVerticalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, 
  $height$$14_scrollerHeight$$)) && ($dir$$2_isDatabodyHorizontalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, $scrollerWidth$$ - $scrollbarSize$$)), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_hasHorizontalScroller$ = $dir$$2_isDatabodyHorizontalScrollbarRequired$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_hasVerticalScroller$ = $isDatabodyVerticalScrollbarRequired$$, $dir$$2_isDatabodyHorizontalScrollbarRequired$$ && 
  ($height$$14_scrollerHeight$$ - $scrollbarSize$$ > $databodyHeight$$ || ($databodyHeight$$ = window.Math.min($databodyHeight$$ - $scrollbarSize$$, $height$$14_scrollerHeight$$ - $scrollbarSize$$))), $isDatabodyVerticalScrollbarRequired$$ && ($scrollerWidth$$ - $scrollbarSize$$ > $databodyWidth_width$$14$$ || ($databodyWidth_width$$14$$ = window.Math.min($databodyWidth_width$$14$$ - $scrollbarSize$$, $scrollerWidth$$ - $scrollbarSize$$))), $dir$$2_isDatabodyHorizontalScrollbarRequired$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$getResources$().isRTLMode() ? 
  "right" : "left", (0,D.$JSCompiler_StaticMethods_setElementDir$$)($emptyText$$2_rowHeader$$2$$, 0, $dir$$2_isDatabodyHorizontalScrollbarRequired$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($emptyText$$2_rowHeader$$2$$, $colHeaderHeight$$1$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($emptyText$$2_rowHeader$$2$$, $databodyHeight$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($borderWidth_colHeader$$2_empty$$1$$, $rowHeaderWidth$$1$$, $dir$$2_isDatabodyHorizontalScrollbarRequired$$), 
  (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($borderWidth_colHeader$$2_empty$$1$$, $databodyWidth_width$$14$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$1$$, $colHeaderHeight$$1$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$1$$, $rowHeaderWidth$$1$$, $dir$$2_isDatabodyHorizontalScrollbarRequired$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databody$$1$$, $databodyWidth_width$$14$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databody$$1$$, 
  $databodyHeight$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$1$$, $colHeaderHeight$$1$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$1$$, $rowHeaderWidth$$1$$, $dir$$2_isDatabodyHorizontalScrollbarRequired$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($scroller$$1$$, $scrollerWidth$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($scroller$$1$$, $height$$14_scrollerHeight$$), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scrollWidth$ = $databodyContentWidth$$ - 
  $databodyWidth_width$$14$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scrollHeight$ = $databodyContentHeight$$ - $databodyHeight$$, (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_resizeGrid$self$$), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_initialized$ = D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_StaticMethods_buildCorners$$ = function $$JSCompiler_StaticMethods_buildCorners$$$($JSCompiler_StaticMethods_buildCorners$self$$) {
  var $colHeaderHeight$$2$$, $rowHeaderWidth$$2$$, $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $dir$$3$$, $colHeaderWidth$$, $rowHeaderHeight$$, $scrollerWidth$$1$$, $scrollerHeight$$1$$;
  (0,D.$JSCompiler_StaticMethods_getScrollbarSize$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_utils$);
  $scrollerWidth$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_scroller$);
  $scrollerHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_scroller$);
  $colHeaderHeight$$2$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_colHeader$);
  $colHeaderWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_colHeader$);
  $rowHeaderWidth$$2$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeader$);
  $rowHeaderHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeader$);
  $dir$$3$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$getResources$().isRTLMode() ? "right" : "left";
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$);
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$);
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$);
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$);
  1 !== $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeader$.firstChild.childNodes.length && ($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = window.document.createElement("div"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "corner"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("topcorner"), 
  (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $colHeaderHeight$$2$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ = 
  $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$);
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasHorizontalScroller$ ? ($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = window.document.createElement("div"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "rhSbSpacer"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("rowheaderspacer"), 
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderHeight$$ + $colHeaderHeight$$2$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 0, $dir$$3$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 
  $scrollerHeight$$1$$ - $rowHeaderHeight$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ = $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$) : $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasVerticalScroller$ ? ($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = window.document.createElement("div"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "chSbSpacer"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("colheaderspacer"), 
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$ + $colHeaderWidth$$, $dir$$3$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $scrollerWidth$$1$$ - $colHeaderWidth$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $colHeaderHeight$$2$$), 
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ = $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$) : $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasHorizontalScroller$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasVerticalScroller$ ? ($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = window.document.createElement("div"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "bcorner"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = 
  $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("bottomcorner"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderHeight$$ + $colHeaderHeight$$2$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$ + $colHeaderWidth$$, $dir$$3$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 
  $scrollerWidth$$1$$ - $colHeaderWidth$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $scrollerHeight$$1$$ - $rowHeaderHeight$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ = $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$) : 
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_setInitialScrollPosition$$ = function $$JSCompiler_StaticMethods_setInitialScrollPosition$$$($JSCompiler_StaticMethods_setInitialScrollPosition$self$$) {
  var $indexes$$3_scrollMode_scrollPosition$$inline_631$$, $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_633_columnScrollPosition_initialScrollLeft$$, $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_initialScrollTop_rowScrollPosition$$;
  $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_initialScrollTop_rowScrollPosition$$ = $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_633_columnScrollPosition_initialScrollLeft$$ = 0;
  $indexes$$3_scrollMode_scrollPosition$$inline_631$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$, "scrollPosition");
  $indexes$$3_scrollMode_scrollPosition$$inline_631$$ = $indexes$$3_scrollMode_scrollPosition$$inline_631$$ == D.$JSCompiler_alias_VOID$$ ? D.$JSCompiler_alias_NULL$$ : $indexes$$3_scrollMode_scrollPosition$$inline_631$$.key != D.$JSCompiler_alias_VOID$$ ? "key" : $indexes$$3_scrollMode_scrollPosition$$inline_631$$.index != D.$JSCompiler_alias_VOID$$ ? "index" : D.$JSCompiler_alias_NULL$$;
  if($JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_scroller$ != D.$JSCompiler_alias_VOID$$) {
    if($indexes$$3_scrollMode_scrollPosition$$inline_631$$ != D.$JSCompiler_alias_NULL$$) {
      $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_633_columnScrollPosition_initialScrollLeft$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$;
      $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_initialScrollTop_rowScrollPosition$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_633_columnScrollPosition_initialScrollLeft$$, "scrollPosition", "key", "column");
      $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_633_columnScrollPosition_initialScrollLeft$$ = $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_initialScrollTop_rowScrollPosition$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_initialScrollTop_rowScrollPosition$$ : (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_633_columnScrollPosition_initialScrollLeft$$, 
      "scrollPosition", "index", "column");
      $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_initialScrollTop_rowScrollPosition$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$;
      var $rowScrollPosition$$inline_637$$;
      $rowScrollPosition$$inline_637$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_initialScrollTop_rowScrollPosition$$, "scrollPosition", "key", "row");
      $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_initialScrollTop_rowScrollPosition$$ = $rowScrollPosition$$inline_637$$ != D.$JSCompiler_alias_NULL$$ ? $rowScrollPosition$$inline_637$$ : (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_initialScrollTop_rowScrollPosition$$, "scrollPosition", "index", "row");
      "key" === $indexes$$3_scrollMode_scrollPosition$$inline_631$$ && ($indexes$$3_scrollMode_scrollPosition$$inline_631$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_dataSource$.indexes({row:$JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_initialScrollTop_rowScrollPosition$$, column:$JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_633_columnScrollPosition_initialScrollLeft$$}), $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_633_columnScrollPosition_initialScrollLeft$$ = 
      -1 === $indexes$$3_scrollMode_scrollPosition$$inline_631$$.column ? 0 : $indexes$$3_scrollMode_scrollPosition$$inline_631$$.column, $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_initialScrollTop_rowScrollPosition$$ = -1 === $indexes$$3_scrollMode_scrollPosition$$inline_631$$.row ? 0 : $indexes$$3_scrollMode_scrollPosition$$inline_631$$.row);
      $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_633_columnScrollPosition_initialScrollLeft$$ *= $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_avgColWidth$;
      $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_initialScrollTop_rowScrollPosition$$ *= $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_avgRowHeight$
    }
    (0,D.$JSCompiler_StaticMethods_setElementScrollLeft$$)($JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_utils$, $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_scroller$, $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_633_columnScrollPosition_initialScrollLeft$$);
    $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_scroller$.scrollTop = $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_initialScrollTop_rowScrollPosition$$
  }
};
D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$ = function $$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$$($JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$self$$, $expectedWidth$$) {
  var $databody$$2$$;
  $databody$$2$$ = $JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$self$$.$m_databody$;
  return(0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$2$$.firstChild) > ($expectedWidth$$ == D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$2$$) : $expectedWidth$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$ = function $$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$$($JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$self$$, $expectedHeight$$) {
  var $databody$$3$$;
  $databody$$3$$ = $JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$self$$.$m_databody$;
  return(0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databody$$3$$.firstChild) > ($expectedHeight$$ == D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databody$$3$$) : $expectedHeight$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__isCountUnknown$$ = function $$JSCompiler_StaticMethods__isCountUnknown$$$($JSCompiler_StaticMethods__isCountUnknown$self$$, $axis$$5$$) {
  var $colCount$$1_datasource$$1_rowCount$$1$$, $colPrecision_rowPrecision$$;
  $colCount$$1_datasource$$1_rowCount$$1$$ = $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_dataSource$;
  return"row" === $axis$$5$$ ? ($JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateRowCount$ === D.$JSCompiler_alias_VOID$$ && ($colPrecision_rowPrecision$$ = $colCount$$1_datasource$$1_rowCount$$1$$.getCountPrecision("row"), $colCount$$1_datasource$$1_rowCount$$1$$ = $colCount$$1_datasource$$1_rowCount$$1$$.getCount("row"), $JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateRowCount$ = "estimate" === $colPrecision_rowPrecision$$ || 0 > $colCount$$1_datasource$$1_rowCount$$1$$ ? 
  D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateRowCount$) : "column" === $axis$$5$$ ? ($JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateColumnCount$ === D.$JSCompiler_alias_VOID$$ && ($colPrecision_rowPrecision$$ = $colCount$$1_datasource$$1_rowCount$$1$$.getCountPrecision("column"), $colCount$$1_datasource$$1_rowCount$$1$$ = $colCount$$1_datasource$$1_rowCount$$1$$.getCount("column"), $JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateColumnCount$ = 
  "estimate" === $colPrecision_rowPrecision$$ || 0 > $colCount$$1_datasource$$1_rowCount$$1$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateColumnCount$) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$ = function $$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$$($JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$self$$, $axis$$6$$) {
  return(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$self$$, $axis$$6$$) || (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$self$$)
};
D.$JSCompiler_StaticMethods_buildHeaders$$ = function $$JSCompiler_StaticMethods_buildHeaders$$$($JSCompiler_StaticMethods_buildHeaders$self$$, $axis$$7$$, $styleClass$$) {
  var $root$$6$$ = window.document.createElement("div");
  $root$$6$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildHeaders$self$$, $axis$$7$$ + "Header");
  $root$$6$$.className = $styleClass$$ + " " + $JSCompiler_StaticMethods_buildHeaders$self$$.getMappedStyle("header");
  $JSCompiler_StaticMethods_buildHeaders$self$$.fetchHeaders($axis$$7$$, 0, $root$$6$$);
  return $root$$6$$
};
D.$DvtDataGrid$$.prototype.fetchHeaders = function $$DvtDataGrid$$$$fetchHeaders$($axis$$8_headerRange$$1$$, $start$$9$$, $header$$2$$, $fetchSize$$, $callbacks$$3_successCallback$$26$$) {
  var $axisStart_count$$6$$, $axisEnd$$;
  this.$m_fetching$[$axis$$8_headerRange$$1$$] || (this.$m_fetching$[$axis$$8_headerRange$$1$$] = {start:$start$$9$$}, $fetchSize$$ == D.$JSCompiler_alias_VOID$$ && ($fetchSize$$ = (0,D.$JSCompiler_StaticMethods_getFetchSize$$)(this, $axis$$8_headerRange$$1$$), (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, $axis$$8_headerRange$$1$$) || ($axisStart_count$$6$$ = "row" == $axis$$8_headerRange$$1$$ ? this.$m_startRow$ : this.$m_startCol$, $axisEnd$$ = "row" == $axis$$8_headerRange$$1$$ ? this.$m_endRow$ : 
  this.$m_endCol$, $start$$9$$ < $axisStart_count$$6$$ ? $fetchSize$$ = window.Math.min($fetchSize$$, $axisStart_count$$6$$) : ($axisStart_count$$6$$ = this.$m_dataSource$.getCount($axis$$8_headerRange$$1$$), 0 <= $axisStart_count$$6$$ && ($fetchSize$$ = window.Math.min($fetchSize$$, window.Math.max(0, $axisStart_count$$6$$ - $axisEnd$$)))))), $axis$$8_headerRange$$1$$ = {axis:$axis$$8_headerRange$$1$$, start:$start$$9$$, count:$fetchSize$$, header:$header$$2$$}, $callbacks$$3_successCallback$$26$$ = 
  $callbacks$$3_successCallback$$26$$ != D.$JSCompiler_alias_NULL$$ && $callbacks$$3_successCallback$$26$$.success != D.$JSCompiler_alias_NULL$$ ? $callbacks$$3_successCallback$$26$$.success : this.$handleHeadersFetchSuccess$, (0,D.$JSCompiler_StaticMethods_showStatusText$$)(this), this.$m_dataSource$.fetchHeaders($axis$$8_headerRange$$1$$, {success:$callbacks$$3_successCallback$$26$$, error:this.$handleHeadersFetchError$}, {success:this, error:this}))
};
D.$DvtDataGrid$$.prototype.$handleHeadersFetchSuccess$ = function $$DvtDataGrid$$$$$handleHeadersFetchSuccess$$($prev$$inline_694_results_rowHeader$$inline_8727$$, $adjustment$$inline_8728_headerRange$$3_start$$10$$, $rowInsert$$) {
  var $axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$, $avgWidth$$inline_662_root$$7$$, $count$$7_totalCount$$inline_672$$;
  if($adjustment$$inline_8728_headerRange$$3_start$$10$$.start == this.$m_fetching$[$adjustment$$inline_8728_headerRange$$3_start$$10$$.axis].start) {
    $axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$ = $adjustment$$inline_8728_headerRange$$3_start$$10$$.axis;
    this.$m_fetching$[$axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$] = D.$JSCompiler_alias_FALSE$$;
    $avgWidth$$inline_662_root$$7$$ = $adjustment$$inline_8728_headerRange$$3_start$$10$$.header;
    $adjustment$$inline_8728_headerRange$$3_start$$10$$ = $adjustment$$inline_8728_headerRange$$3_start$$10$$.start;
    $count$$7_totalCount$$inline_672$$ = this.$m_dataSource$.getCount($axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$);
    if("column" === $axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$) {
      a: {
        var $referenceRow$$inline_698_renderer$$inline_646$$, $totalColWidth$$inline_647_totalRowHeight$$inline_681$$, $currentLeft$$inline_648_headerCount$$inline_675$$, $headerCount$$inline_649_rowHeaderContent$$inline_697$$, $firstHeader$$inline_650_resizer$$inline_677$$, $headerClass$$inline_651_renderer$$inline_678$$, $dir$$inline_652_isAppend$$inline_679$$, $i$$inline_653_top$$inline_680$$, $col$$inline_692_index$$inline_654_width$$inline_661$$, $capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$, 
        $headerContext$$inline_657_headerContext$$inline_8720_headerMetadata$$inline_656_resizableAttribute$$inline_695_sortIndicators$$inline_663$$, $headerContext$$inline_8716_headerData$$inline_685_inlineStyle$$inline_658_sortAscendIcon$$inline_8722_value$$inline_10688$$, $headerContext$$inline_687_headerMetadata$$inline_686_sortDescendIcon$$inline_8723_styleClass$$inline_659$$, $col$$inline_660_fragment$$inline_682$$, $i$$inline_684_sortableAttribute$$inline_665$$, $resizableAttribute$$inline_666_row$$inline_688$$;
        $axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$ = (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)(this);
        $headerCount$$inline_649_rowHeaderContent$$inline_697$$ = $prev$$inline_694_results_rowHeader$$inline_8727$$.getCount();
        if($avgWidth$$inline_662_root$$7$$.hasChildNodes()) {
          if(0 == $headerCount$$inline_649_rowHeaderContent$$inline_697$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column")) {
            this.$m_stopColumnHeaderFetch$ = D.$JSCompiler_alias_TRUE$$;
            break a
          }
          $axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$ = $avgWidth$$inline_662_root$$7$$.firstChild
        }else {
          0 == $headerCount$$inline_649_rowHeaderContent$$inline_697$$ ? (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($avgWidth$$inline_662_root$$7$$, 0) : (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($avgWidth$$inline_662_root$$7$$, $axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$), $axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$ = window.document.createElement("div"), $axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$.className = 
          this.getMappedStyle("row") + " " + (this.$m_utils$.$isTouchDevice$() ? this.getMappedStyle("scroller-mobile") : this.getMappedStyle("scroller"))
        }
        $referenceRow$$inline_698_renderer$$inline_646$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "column");
        $totalColWidth$$inline_647_totalRowHeight$$inline_681$$ = 0;
        $currentLeft$$inline_648_headerCount$$inline_675$$ = $adjustment$$inline_8728_headerRange$$3_start$$10$$ < this.$m_startColHeader$ ? this.$m_startColHeaderPixel$ : this.$m_endColHeaderPixel$;
        $firstHeader$$inline_650_resizer$$inline_677$$ = $axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$.firstChild;
        $headerClass$$inline_651_renderer$$inline_678$$ = this.getMappedStyle("headercell") + " " + this.getMappedStyle("colheadercell");
        $dir$$inline_652_isAppend$$inline_679$$ = this.$getResources$().isRTLMode() ? "right" : "left";
        $i$$inline_684_sortableAttribute$$inline_665$$ = this.$getResources$().getMappedAttribute("sortable");
        $resizableAttribute$$inline_666_row$$inline_688$$ = this.$getResources$().getMappedAttribute("resizable");
        for($i$$inline_653_top$$inline_680$$ = 0;$i$$inline_653_top$$inline_680$$ < $headerCount$$inline_649_rowHeaderContent$$inline_697$$;$i$$inline_653_top$$inline_680$$ += 1) {
          $col$$inline_692_index$$inline_654_width$$inline_661$$ = $adjustment$$inline_8728_headerRange$$3_start$$10$$ < this.$m_startColHeader$ ? $adjustment$$inline_8728_headerRange$$3_start$$10$$ + $headerCount$$inline_649_rowHeaderContent$$inline_697$$ - 1 - $i$$inline_653_top$$inline_680$$ : $adjustment$$inline_8728_headerRange$$3_start$$10$$ + $i$$inline_653_top$$inline_680$$;
          $col$$inline_660_fragment$$inline_682$$ = window.document.createElement("div");
          $col$$inline_660_fragment$$inline_682$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "c" + $col$$inline_692_index$$inline_654_width$$inline_661$$);
          $axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$.appendChild($col$$inline_660_fragment$$inline_682$$);
          $capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$ = $prev$$inline_694_results_rowHeader$$inline_8727$$.getData($col$$inline_692_index$$inline_654_width$$inline_661$$);
          $headerContext$$inline_657_headerContext$$inline_8720_headerMetadata$$inline_656_resizableAttribute$$inline_695_sortIndicators$$inline_663$$ = $prev$$inline_694_results_rowHeader$$inline_8727$$.getMetadata($col$$inline_692_index$$inline_654_width$$inline_661$$);
          $headerContext$$inline_657_headerContext$$inline_8720_headerMetadata$$inline_656_resizableAttribute$$inline_695_sortIndicators$$inline_663$$ = (0,D.$JSCompiler_StaticMethods_createHeaderContext$$)(this, "column", $col$$inline_692_index$$inline_654_width$$inline_661$$, $capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$, $headerContext$$inline_657_headerContext$$inline_8720_headerMetadata$$inline_656_resizableAttribute$$inline_695_sortIndicators$$inline_663$$, 
          $col$$inline_660_fragment$$inline_682$$);
          $headerContext$$inline_8716_headerData$$inline_685_inlineStyle$$inline_658_sortAscendIcon$$inline_8722_value$$inline_10688$$ = this.$m_options$.$getInlineStyle$("column", $headerContext$$inline_657_headerContext$$inline_8720_headerMetadata$$inline_656_resizableAttribute$$inline_695_sortIndicators$$inline_663$$);
          $headerContext$$inline_687_headerMetadata$$inline_686_sortDescendIcon$$inline_8723_styleClass$$inline_659$$ = this.$m_options$.$getStyleClass$("column", $headerContext$$inline_657_headerContext$$inline_8720_headerMetadata$$inline_656_resizableAttribute$$inline_695_sortIndicators$$inline_663$$);
          $col$$inline_692_index$$inline_654_width$$inline_661$$ === $count$$7_totalCount$$inline_672$$ - 1 && ("left" === $dir$$inline_652_isAppend$$inline_679$$ ? $col$$inline_660_fragment$$inline_682$$.style.borderRightStyle = "none" : $col$$inline_660_fragment$$inline_682$$.style.borderLeftStyle = "none");
          $headerContext$$inline_8716_headerData$$inline_685_inlineStyle$$inline_658_sortAscendIcon$$inline_8722_value$$inline_10688$$ != D.$JSCompiler_alias_NULL$$ && ($col$$inline_660_fragment$$inline_682$$.style.cssText = $headerContext$$inline_8716_headerData$$inline_685_inlineStyle$$inline_658_sortAscendIcon$$inline_8722_value$$inline_10688$$);
          $col$$inline_660_fragment$$inline_682$$.className = $headerContext$$inline_687_headerMetadata$$inline_686_sortDescendIcon$$inline_8723_styleClass$$inline_659$$ != D.$JSCompiler_alias_NULL$$ ? $headerClass$$inline_651_renderer$$inline_678$$ + " " + $headerContext$$inline_687_headerMetadata$$inline_686_sortDescendIcon$$inline_8723_styleClass$$inline_659$$ : $headerClass$$inline_651_renderer$$inline_678$$;
          this.$m_colHeaderHeight$ == D.$JSCompiler_alias_NULL$$ && "" != $col$$inline_660_fragment$$inline_682$$.style.height && (this.$m_colHeaderHeight$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($col$$inline_660_fragment$$inline_682$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($avgWidth$$inline_662_root$$7$$, this.$m_colHeaderHeight$));
          $col$$inline_660_fragment$$inline_682$$.style.height = "100%";
          $adjustment$$inline_8728_headerRange$$3_start$$10$$ < this.$m_startColHeader$ ? ($col$$inline_692_index$$inline_654_width$$inline_661$$ = (0,D.$JSCompiler_StaticMethods_getColumnWidth$$)(this, $col$$inline_660_fragment$$inline_682$$, $adjustment$$inline_8728_headerRange$$3_start$$10$$ + $headerCount$$inline_649_rowHeaderContent$$inline_697$$ - 1 - $i$$inline_653_top$$inline_680$$, $headerContext$$inline_657_headerContext$$inline_8720_headerMetadata$$inline_656_resizableAttribute$$inline_695_sortIndicators$$inline_663$$.key), 
          this.$m_cachedColumnWidthStartIndex$ -= 1) : $col$$inline_692_index$$inline_654_width$$inline_661$$ = (0,D.$JSCompiler_StaticMethods_getColumnWidth$$)(this, $col$$inline_660_fragment$$inline_682$$, $adjustment$$inline_8728_headerRange$$3_start$$10$$ + $i$$inline_653_top$$inline_680$$, $headerContext$$inline_657_headerContext$$inline_8720_headerMetadata$$inline_656_resizableAttribute$$inline_695_sortIndicators$$inline_663$$.key);
          (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($col$$inline_660_fragment$$inline_682$$, $col$$inline_692_index$$inline_654_width$$inline_661$$);
          $adjustment$$inline_8728_headerRange$$3_start$$10$$ < this.$m_startColHeader$ ? (0,D.$JSCompiler_StaticMethods_setElementDir$$)($col$$inline_660_fragment$$inline_682$$, $currentLeft$$inline_648_headerCount$$inline_675$$ - $col$$inline_692_index$$inline_654_width$$inline_661$$, $dir$$inline_652_isAppend$$inline_679$$) : (0,D.$JSCompiler_StaticMethods_setElementDir$$)($col$$inline_660_fragment$$inline_682$$, $currentLeft$$inline_648_headerCount$$inline_675$$, $dir$$inline_652_isAppend$$inline_679$$);
          (0,D.$JSCompiler_StaticMethods__isHeaderResizeEnabled$$)(this, "column", $headerContext$$inline_657_headerContext$$inline_8720_headerMetadata$$inline_656_resizableAttribute$$inline_695_sortIndicators$$inline_663$$) && $col$$inline_660_fragment$$inline_682$$.setAttribute($resizableAttribute$$inline_666_row$$inline_688$$, "true");
          $referenceRow$$inline_698_renderer$$inline_646$$ != D.$JSCompiler_alias_NULL$$ ? ($capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$ = $referenceRow$$inline_698_renderer$$inline_646$$.call(this, $headerContext$$inline_657_headerContext$$inline_8720_headerMetadata$$inline_656_resizableAttribute$$inline_695_sortIndicators$$inline_663$$), $capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$ != 
          D.$JSCompiler_alias_NULL$$ && ($capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$.parentNode === D.$JSCompiler_alias_NULL$$ ? $col$$inline_660_fragment$$inline_682$$.appendChild($capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$) : $capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$.parentNode == 
          D.$JSCompiler_alias_NULL$$ && $capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$.toString && $col$$inline_660_fragment$$inline_682$$.appendChild(window.document.createTextNode($capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$.toString())))) : $col$$inline_660_fragment$$inline_682$$.appendChild(window.document.createTextNode($capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$.toString()));
          $headerContext$$inline_8716_headerData$$inline_685_inlineStyle$$inline_658_sortAscendIcon$$inline_8722_value$$inline_10688$$ = $headerContext$$inline_657_headerContext$$inline_8720_headerMetadata$$inline_656_resizableAttribute$$inline_695_sortIndicators$$inline_663$$;
          $capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$ = D.$JSCompiler_alias_VOID$$;
          $capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$ = this.$m_dataSource$.getCapability("sort");
          $headerContext$$inline_8716_headerData$$inline_685_inlineStyle$$inline_658_sortAscendIcon$$inline_8722_value$$inline_10688$$ = this.$m_options$.$getProperty$("sortable", "column", $headerContext$$inline_8716_headerData$$inline_685_inlineStyle$$inline_658_sortAscendIcon$$inline_8722_value$$inline_10688$$);
          if("default" === ($headerContext$$inline_8716_headerData$$inline_685_inlineStyle$$inline_658_sortAscendIcon$$inline_8722_value$$inline_10688$$ != D.$JSCompiler_alias_NULL$$ ? $headerContext$$inline_8716_headerData$$inline_685_inlineStyle$$inline_658_sortAscendIcon$$inline_8722_value$$inline_10688$$ : D.$JSCompiler_alias_FALSE$$) && ("full" === $capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$ || "column" === 
          $capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$)) {
            var $height$$inline_691_iconClassString$$inline_8724_inlineStyle$$inline_690$$ = $headerContext$$inline_687_headerMetadata$$inline_686_sortDescendIcon$$inline_8723_styleClass$$inline_659$$ = $headerContext$$inline_8716_headerData$$inline_685_inlineStyle$$inline_658_sortAscendIcon$$inline_8722_value$$inline_10688$$ = $capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$ = D.$JSCompiler_alias_VOID$$, $direction$$inline_8725_styleClass$$inline_693$$ = 
            D.$JSCompiler_alias_VOID$$;
            $capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$ = window.document.createElement("div");
            $capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$.className = this.getMappedStyle("sortindicators");
            $headerContext$$inline_8716_headerData$$inline_685_inlineStyle$$inline_658_sortAscendIcon$$inline_8722_value$$inline_10688$$ = window.document.createElement("a");
            $headerContext$$inline_687_headerMetadata$$inline_686_sortDescendIcon$$inline_8723_styleClass$$inline_659$$ = window.document.createElement("a");
            $height$$inline_691_iconClassString$$inline_8724_inlineStyle$$inline_690$$ = this.getMappedStyle("icon") + " " + this.getMappedStyle("clickableicon");
            $headerContext$$inline_657_headerContext$$inline_8720_headerMetadata$$inline_656_resizableAttribute$$inline_695_sortIndicators$$inline_663$$.key === (this.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ ? this.$m_sortInfo$.key : D.$JSCompiler_alias_NULL$$) ? ($direction$$inline_8725_styleClass$$inline_693$$ = this.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ ? this.$m_sortInfo$.direction : D.$JSCompiler_alias_NULL$$, "ascending" === $direction$$inline_8725_styleClass$$inline_693$$ ? ($headerContext$$inline_8716_headerData$$inline_685_inlineStyle$$inline_658_sortAscendIcon$$inline_8722_value$$inline_10688$$.className = 
            this.getMappedStyle("sortascending") + " " + $height$$inline_691_iconClassString$$inline_8724_inlineStyle$$inline_690$$ + " " + this.getMappedStyle("selected"), $headerContext$$inline_687_headerMetadata$$inline_686_sortDescendIcon$$inline_8723_styleClass$$inline_659$$.className = this.getMappedStyle("sortdescending") + " " + $height$$inline_691_iconClassString$$inline_8724_inlineStyle$$inline_690$$ + " " + this.getMappedStyle("disabled")) : "descending" === $direction$$inline_8725_styleClass$$inline_693$$ && 
            ($headerContext$$inline_8716_headerData$$inline_685_inlineStyle$$inline_658_sortAscendIcon$$inline_8722_value$$inline_10688$$.className = this.getMappedStyle("sortascending") + " " + $height$$inline_691_iconClassString$$inline_8724_inlineStyle$$inline_690$$ + " " + this.getMappedStyle("disabled"), $headerContext$$inline_687_headerMetadata$$inline_686_sortDescendIcon$$inline_8723_styleClass$$inline_659$$.className = this.getMappedStyle("sortdescending") + " " + $height$$inline_691_iconClassString$$inline_8724_inlineStyle$$inline_690$$ + 
            " " + this.getMappedStyle("selected"))) : ($height$$inline_691_iconClassString$$inline_8724_inlineStyle$$inline_690$$ += " " + this.getMappedStyle("disabled"), $headerContext$$inline_8716_headerData$$inline_685_inlineStyle$$inline_658_sortAscendIcon$$inline_8722_value$$inline_10688$$.className = this.getMappedStyle("sortascending") + " " + $height$$inline_691_iconClassString$$inline_8724_inlineStyle$$inline_690$$, $headerContext$$inline_687_headerMetadata$$inline_686_sortDescendIcon$$inline_8723_styleClass$$inline_659$$.className = 
            this.getMappedStyle("sortdescending") + " " + $height$$inline_691_iconClassString$$inline_8724_inlineStyle$$inline_690$$);
            $capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$.appendChild($headerContext$$inline_8716_headerData$$inline_685_inlineStyle$$inline_658_sortAscendIcon$$inline_8722_value$$inline_10688$$);
            $capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$.appendChild($headerContext$$inline_687_headerMetadata$$inline_686_sortDescendIcon$$inline_8723_styleClass$$inline_659$$);
            $headerContext$$inline_657_headerContext$$inline_8720_headerMetadata$$inline_656_resizableAttribute$$inline_695_sortIndicators$$inline_663$$ = $capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$;
            $col$$inline_660_fragment$$inline_682$$.appendChild($headerContext$$inline_657_headerContext$$inline_8720_headerMetadata$$inline_656_resizableAttribute$$inline_695_sortIndicators$$inline_663$$);
            $col$$inline_660_fragment$$inline_682$$.setAttribute($i$$inline_684_sortableAttribute$$inline_665$$, "true")
          }
          $currentLeft$$inline_648_headerCount$$inline_675$$ = $adjustment$$inline_8728_headerRange$$3_start$$10$$ < this.$m_startColHeader$ ? $currentLeft$$inline_648_headerCount$$inline_675$$ - $col$$inline_692_index$$inline_654_width$$inline_661$$ : $currentLeft$$inline_648_headerCount$$inline_675$$ + $col$$inline_692_index$$inline_654_width$$inline_661$$;
          $totalColWidth$$inline_647_totalRowHeight$$inline_681$$ += $col$$inline_692_index$$inline_654_width$$inline_661$$;
          $adjustment$$inline_8728_headerRange$$3_start$$10$$ < this.$m_startColHeader$ ? ($axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$.insertBefore($col$$inline_660_fragment$$inline_682$$, $firstHeader$$inline_650_resizer$$inline_677$$), $firstHeader$$inline_650_resizer$$inline_677$$ = $col$$inline_660_fragment$$inline_682$$) : $axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$.appendChild($col$$inline_660_fragment$$inline_682$$)
        }
        $adjustment$$inline_8728_headerRange$$3_start$$10$$ < this.$m_startColHeader$ ? (this.$m_startColHeader$ -= $headerCount$$inline_649_rowHeaderContent$$inline_697$$, this.$m_startColHeaderPixel$ -= $totalColWidth$$inline_647_totalRowHeight$$inline_681$$) : (this.$m_endColHeader$ += $headerCount$$inline_649_rowHeaderContent$$inline_697$$, this.$m_endColHeaderPixel$ += $totalColWidth$$inline_647_totalRowHeight$$inline_681$$);
        $avgWidth$$inline_662_root$$7$$.hasChildNodes() || $avgWidth$$inline_662_root$$7$$.appendChild($axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$);
        if(0 < $headerCount$$inline_649_rowHeaderContent$$inline_697$$ && ($avgWidth$$inline_662_root$$7$$ = $totalColWidth$$inline_647_totalRowHeight$$inline_681$$ / $headerCount$$inline_649_rowHeaderContent$$inline_697$$, 0 == this.$m_avgColHeaderWidth$ || $avgWidth$$inline_662_root$$7$$ != this.$m_avgColHeaderWidth$)) {
          this.$m_avgColHeaderWidth$ = $avgWidth$$inline_662_root$$7$$, (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$, $count$$7_totalCount$$inline_672$$ * $avgWidth$$inline_662_root$$7$$)
        }
        !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && ((0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) && this.$m_endColHeader$ >= $count$$7_totalCount$$inline_672$$) && (this.$m_stopColumnHeaderFetch$ = D.$JSCompiler_alias_TRUE$$)
      }
    }else {
      if("row" === $axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$) {
        a: {
          var $headerClass$$inline_689$$;
          (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)(this);
          $currentLeft$$inline_648_headerCount$$inline_675$$ = $prev$$inline_694_results_rowHeader$$inline_8727$$.getCount();
          if($avgWidth$$inline_662_root$$7$$.hasChildNodes()) {
            if(0 == $currentLeft$$inline_648_headerCount$$inline_675$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row")) {
              this.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_TRUE$$;
              break a
            }
            $axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$ = $avgWidth$$inline_662_root$$7$$.firstChild;
            $firstHeader$$inline_650_resizer$$inline_677$$ = $axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$.firstChild
          }else {
            $axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$ = window.document.createElement("div"), $axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$.className = this.$m_utils$.$isTouchDevice$() ? this.getMappedStyle("scroller-mobile") : this.getMappedStyle("scroller"), 0 == $currentLeft$$inline_648_headerCount$$inline_675$$ ? ((0,D.$JSCompiler_StaticMethods_setElementWidth$$)($avgWidth$$inline_662_root$$7$$, 0), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$, 
            0)) : (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($avgWidth$$inline_662_root$$7$$, 50), $firstHeader$$inline_650_resizer$$inline_677$$ = window.document.createElement("div"), $firstHeader$$inline_650_resizer$$inline_677$$.style.display = "none", (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($firstHeader$$inline_650_resizer$$inline_677$$, 1), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($firstHeader$$inline_650_resizer$$inline_677$$, 0), $axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$.appendChild($firstHeader$$inline_650_resizer$$inline_677$$)
          }
          $headerClass$$inline_651_renderer$$inline_678$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "row");
          ($dir$$inline_652_isAppend$$inline_679$$ = $adjustment$$inline_8728_headerRange$$3_start$$10$$ >= this.$m_endRowHeader$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$) ? $i$$inline_653_top$$inline_680$$ = this.$m_endRowHeaderPixel$ : $rowInsert$$ ? ($headerCount$$inline_649_rowHeaderContent$$inline_697$$ = $avgWidth$$inline_662_root$$7$$.firstChild, $referenceRow$$inline_698_renderer$$inline_646$$ = $headerCount$$inline_649_rowHeaderContent$$inline_697$$.childNodes[$adjustment$$inline_8728_headerRange$$3_start$$10$$ - 
          this.$m_startRowHeader$ + 1], $i$$inline_653_top$$inline_680$$ = (0,window.parseInt)($referenceRow$$inline_698_renderer$$inline_646$$.style.top)) : $i$$inline_653_top$$inline_680$$ = this.$m_startRowHeaderPixel$;
          -1 == $count$$7_totalCount$$inline_672$$ && ($count$$7_totalCount$$inline_672$$ = this.$m_endRowHeader$ + $currentLeft$$inline_648_headerCount$$inline_675$$);
          $headerContext$$inline_657_headerContext$$inline_8720_headerMetadata$$inline_656_resizableAttribute$$inline_695_sortIndicators$$inline_663$$ = this.$getResources$().getMappedAttribute("resizable");
          $totalColWidth$$inline_647_totalRowHeight$$inline_681$$ = 0;
          $col$$inline_660_fragment$$inline_682$$ = window.document.createDocumentFragment();
          for($i$$inline_684_sortableAttribute$$inline_665$$ = 0;$i$$inline_684_sortableAttribute$$inline_665$$ < $currentLeft$$inline_648_headerCount$$inline_675$$;$i$$inline_684_sortableAttribute$$inline_665$$ += 1) {
            $capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$ = $dir$$inline_652_isAppend$$inline_679$$ ? $adjustment$$inline_8728_headerRange$$3_start$$10$$ + $i$$inline_684_sortableAttribute$$inline_665$$ : $adjustment$$inline_8728_headerRange$$3_start$$10$$ + ($currentLeft$$inline_648_headerCount$$inline_675$$ - 1 - $i$$inline_684_sortableAttribute$$inline_665$$), $resizableAttribute$$inline_666_row$$inline_688$$ = 
            window.document.createElement("div"), $resizableAttribute$$inline_666_row$$inline_688$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "r" + $capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$), $col$$inline_692_index$$inline_654_width$$inline_661$$ = window.document.createElement("div"), $resizableAttribute$$inline_666_row$$inline_688$$.appendChild($col$$inline_692_index$$inline_654_width$$inline_661$$), 
            $headerContext$$inline_8716_headerData$$inline_685_inlineStyle$$inline_658_sortAscendIcon$$inline_8722_value$$inline_10688$$ = $prev$$inline_694_results_rowHeader$$inline_8727$$.getData($capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$), $headerContext$$inline_687_headerMetadata$$inline_686_sortDescendIcon$$inline_8723_styleClass$$inline_659$$ = $prev$$inline_694_results_rowHeader$$inline_8727$$.getMetadata($capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$), 
            $headerContext$$inline_687_headerMetadata$$inline_686_sortDescendIcon$$inline_8723_styleClass$$inline_659$$ = (0,D.$JSCompiler_StaticMethods_createHeaderContext$$)(this, "row", $capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$, $headerContext$$inline_8716_headerData$$inline_685_inlineStyle$$inline_658_sortAscendIcon$$inline_8722_value$$inline_10688$$, $headerContext$$inline_687_headerMetadata$$inline_686_sortDescendIcon$$inline_8723_styleClass$$inline_659$$, 
            $col$$inline_692_index$$inline_654_width$$inline_661$$), $height$$inline_691_iconClassString$$inline_8724_inlineStyle$$inline_690$$ = this.$m_options$.$getInlineStyle$("row", $headerContext$$inline_687_headerMetadata$$inline_686_sortDescendIcon$$inline_8723_styleClass$$inline_659$$), $direction$$inline_8725_styleClass$$inline_693$$ = this.$m_options$.$getStyleClass$("row", $headerContext$$inline_687_headerMetadata$$inline_686_sortDescendIcon$$inline_8723_styleClass$$inline_659$$), $height$$inline_691_iconClassString$$inline_8724_inlineStyle$$inline_690$$ != 
            D.$JSCompiler_alias_NULL$$ && ($resizableAttribute$$inline_666_row$$inline_688$$.style.cssText = $height$$inline_691_iconClassString$$inline_8724_inlineStyle$$inline_690$$), this.$m_rowHeaderWidth$ == D.$JSCompiler_alias_NULL$$ && "" != $resizableAttribute$$inline_666_row$$inline_688$$.style.width && (this.$m_rowHeaderWidth$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($resizableAttribute$$inline_666_row$$inline_688$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($avgWidth$$inline_662_root$$7$$, 
            this.$m_rowHeaderWidth$)), $resizableAttribute$$inline_666_row$$inline_688$$.className = this.getMappedStyle("row"), $height$$inline_691_iconClassString$$inline_8724_inlineStyle$$inline_690$$ = (0,D.$JSCompiler_StaticMethods_getRowHeight$$)(this, $resizableAttribute$$inline_666_row$$inline_688$$, $adjustment$$inline_8728_headerRange$$3_start$$10$$ + $i$$inline_684_sortableAttribute$$inline_665$$, $headerContext$$inline_687_headerMetadata$$inline_686_sortDescendIcon$$inline_8723_styleClass$$inline_659$$.key), 
            (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($resizableAttribute$$inline_666_row$$inline_688$$, $height$$inline_691_iconClassString$$inline_8724_inlineStyle$$inline_690$$), $dir$$inline_652_isAppend$$inline_679$$ || $rowInsert$$ ? ($resizableAttribute$$inline_666_row$$inline_688$$.style.top = $i$$inline_653_top$$inline_680$$ + "px", $i$$inline_653_top$$inline_680$$ += $height$$inline_691_iconClassString$$inline_8724_inlineStyle$$inline_690$$) : ($i$$inline_653_top$$inline_680$$ -= 
            $height$$inline_691_iconClassString$$inline_8724_inlineStyle$$inline_690$$, $resizableAttribute$$inline_666_row$$inline_688$$.style.top = $i$$inline_653_top$$inline_680$$ + "px"), $headerClass$$inline_689$$ = this.getMappedStyle("headercell") + " " + this.getMappedStyle("rowheadercell"), $col$$inline_692_index$$inline_654_width$$inline_661$$.className = $direction$$inline_8725_styleClass$$inline_693$$ != D.$JSCompiler_alias_NULL$$ ? $headerClass$$inline_689$$ + " " + $direction$$inline_8725_styleClass$$inline_693$$ : 
            $headerClass$$inline_689$$, $capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$ === $count$$7_totalCount$$inline_672$$ - 1 && ($col$$inline_692_index$$inline_654_width$$inline_661$$.style.borderBottomStyle = "none"), (0,D.$JSCompiler_StaticMethods__isHeaderResizeEnabled$$)(this, "row", $headerContext$$inline_687_headerMetadata$$inline_686_sortDescendIcon$$inline_8723_styleClass$$inline_659$$) && $col$$inline_692_index$$inline_654_width$$inline_661$$.setAttribute($headerContext$$inline_657_headerContext$$inline_8720_headerMetadata$$inline_656_resizableAttribute$$inline_695_sortIndicators$$inline_663$$, 
            "true"), $headerClass$$inline_651_renderer$$inline_678$$ != D.$JSCompiler_alias_NULL$$ ? ($capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$ = $headerClass$$inline_651_renderer$$inline_678$$.call(this, $headerContext$$inline_687_headerMetadata$$inline_686_sortDescendIcon$$inline_8723_styleClass$$inline_659$$), $capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$ != 
            D.$JSCompiler_alias_NULL$$ && ($capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$.parentNode === D.$JSCompiler_alias_NULL$$ ? $col$$inline_692_index$$inline_654_width$$inline_661$$.appendChild($capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$) : $capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$.parentNode == 
            D.$JSCompiler_alias_NULL$$ && $capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$.toString && $col$$inline_692_index$$inline_654_width$$inline_661$$.appendChild(window.document.createTextNode($capability$$inline_8717_content$$inline_664_content$$inline_696_headerData$$inline_655_index$$inline_683_sortIndicators$$inline_8721$$.toString())))) : $col$$inline_692_index$$inline_654_width$$inline_661$$.appendChild(window.document.createTextNode($headerContext$$inline_8716_headerData$$inline_685_inlineStyle$$inline_658_sortAscendIcon$$inline_8722_value$$inline_10688$$.toString())), 
            $dir$$inline_652_isAppend$$inline_679$$ ? $col$$inline_660_fragment$$inline_682$$.appendChild($resizableAttribute$$inline_666_row$$inline_688$$) : $col$$inline_660_fragment$$inline_682$$.insertBefore($resizableAttribute$$inline_666_row$$inline_688$$, $col$$inline_660_fragment$$inline_682$$.firstChild), $totalColWidth$$inline_647_totalRowHeight$$inline_681$$ += $height$$inline_691_iconClassString$$inline_8724_inlineStyle$$inline_690$$
          }
          if($dir$$inline_652_isAppend$$inline_679$$) {
            $axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$.appendChild($col$$inline_660_fragment$$inline_682$$), 0 != this.$m_endRowHeader$ && 0 != $currentLeft$$inline_648_headerCount$$inline_675$$ && ($prev$$inline_694_results_rowHeader$$inline_8727$$ = $axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$.childNodes[this.$m_endRowHeader$], $prev$$inline_694_results_rowHeader$$inline_8727$$ != D.$JSCompiler_alias_NULL$$ && ($prev$$inline_694_results_rowHeader$$inline_8727$$.firstChild.style.borderBottomStyle = 
            "")), this.$m_endRowHeader$ += $currentLeft$$inline_648_headerCount$$inline_675$$, this.$m_endRowHeaderPixel$ += $totalColWidth$$inline_647_totalRowHeight$$inline_681$$
          }else {
            if($rowInsert$$) {
              $headerCount$$inline_649_rowHeaderContent$$inline_697$$.insertBefore($col$$inline_660_fragment$$inline_682$$, $referenceRow$$inline_698_renderer$$inline_646$$);
              $adjustment$$inline_8728_headerRange$$3_start$$10$$ <= this.$m_startRow$ && (this.$m_startRowHeader$ = $adjustment$$inline_8728_headerRange$$3_start$$10$$, this.$m_startRowHeaderPixel$ = window.Math.max(0, this.$m_startRowHeaderPixel$ - $totalColWidth$$inline_647_totalRowHeight$$inline_681$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($firstHeader$$inline_650_resizer$$inline_677$$, window.Math.max(0, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($firstHeader$$inline_650_resizer$$inline_677$$) - 
              $totalColWidth$$inline_647_totalRowHeight$$inline_681$$)));
              this.$m_endRowHeader$ = this.$m_endRow$ + $currentLeft$$inline_648_headerCount$$inline_675$$;
              this.$m_endRowHeaderPixel$ = window.Math.max(0, this.$m_endRowHeaderPixel$ + $totalColWidth$$inline_647_totalRowHeight$$inline_681$$);
              $prev$$inline_694_results_rowHeader$$inline_8727$$ = $referenceRow$$inline_698_renderer$$inline_646$$;
              for($adjustment$$inline_8728_headerRange$$3_start$$10$$ = $totalColWidth$$inline_647_totalRowHeight$$inline_681$$;$prev$$inline_694_results_rowHeader$$inline_8727$$;) {
                $prev$$inline_694_results_rowHeader$$inline_8727$$.style.top = (0,window.parseInt)($prev$$inline_694_results_rowHeader$$inline_8727$$.style.top) + $adjustment$$inline_8728_headerRange$$3_start$$10$$ + "px", $prev$$inline_694_results_rowHeader$$inline_8727$$ = $prev$$inline_694_results_rowHeader$$inline_8727$$.nextSibling
              }
            }else {
              (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($firstHeader$$inline_650_resizer$$inline_677$$, window.Math.max(0, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($firstHeader$$inline_650_resizer$$inline_677$$) - $totalColWidth$$inline_647_totalRowHeight$$inline_681$$)), $axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$.insertBefore($col$$inline_660_fragment$$inline_682$$, $firstHeader$$inline_650_resizer$$inline_677$$.nextSibling), this.$m_startRowHeader$ -= 
              $currentLeft$$inline_648_headerCount$$inline_675$$, this.$m_startRowHeaderPixel$ = window.Math.max(0, this.$m_startRowHeaderPixel$ - $totalColWidth$$inline_647_totalRowHeight$$inline_681$$)
            }
          }
          $rowInsert$$ || $avgWidth$$inline_662_root$$7$$.appendChild($axis$$10_defaultHeight$$inline_644_scroller$$inline_645_scroller$$inline_676$$);
          !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && ((0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) && this.$m_endRowHeader$ >= $count$$7_totalCount$$inline_672$$) && (this.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_TRUE$$)
        }
      }
    }
    (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) ? ((0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this), !this.$m_initialized$ && !$rowInsert$$ && ((0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this), (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this))) : (0,D.$JSCompiler_StaticMethods_isHeaderFetchComplete$$)(this) && (this.$m_initialized$ || (0,D.$JSCompiler_StaticMethods_resizeHeaders$$)(this));
    this.$m_initialized$ && (0,D.$JSCompiler_StaticMethods__syncScroller$$)(this)
  }
};
D.$DvtDataGrid$$.prototype.$handleHeadersFetchError$ = function $$DvtDataGrid$$$$$handleHeadersFetchError$$($error$$3$$, $headerRange$$4$$) {
  this.$m_fetching$[$headerRange$$4$$.axis] = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_createHeaderContext$$ = function $$JSCompiler_StaticMethods_createHeaderContext$$$($JSCompiler_StaticMethods_createHeaderContext$self$$, $axis$$12$$, $index$$47_key$$29$$, $data$$21$$, $metadata$$, $elem$$4$$) {
  var $headerContext$$ = {};
  $headerContext$$.axis = $axis$$12$$;
  $headerContext$$.index = $index$$47_key$$29$$;
  $headerContext$$.data = $data$$21$$;
  $headerContext$$.datagrid = $JSCompiler_StaticMethods_createHeaderContext$self$$;
  $headerContext$$.parentElement = $elem$$4$$;
  $index$$47_key$$29$$ = $metadata$$.key;
  $index$$47_key$$29$$ != D.$JSCompiler_alias_NULL$$ && ("row" === $axis$$12$$ ? $elem$$4$$.parentNode.setAttribute($JSCompiler_StaticMethods_createHeaderContext$self$$.$getResources$().getMappedAttribute("key"), $index$$47_key$$29$$) : $elem$$4$$.setAttribute($JSCompiler_StaticMethods_createHeaderContext$self$$.$getResources$().getMappedAttribute("key"), $index$$47_key$$29$$));
  for(var $prop$$4$$ in $metadata$$) {
    $metadata$$.hasOwnProperty($prop$$4$$) && ($headerContext$$[$prop$$4$$] = $metadata$$[$prop$$4$$])
  }
  $JSCompiler_StaticMethods_createHeaderContext$self$$.$m_createContextCallback$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_createHeaderContext$self$$.$m_createContextCallback$.call($JSCompiler_StaticMethods_createHeaderContext$self$$, $headerContext$$);
  return $headerContext$$
};
D.$DvtDataGrid$$.prototype.fetchCells = function $$DvtDataGrid$$$$fetchCells$($columnRange_databody$$4$$, $scroller$$7$$, $rowRange_rowStart$$, $colStart$$, $rowCount$$2$$, $colCount$$2$$, $callbacks$$4_successCallback$$27$$) {
  var $count$$8$$;
  this.$m_fetching$.cells || (this.$m_fetching$.cells = {row:$rowRange_rowStart$$, column:$colStart$$}, $rowCount$$2$$ == D.$JSCompiler_alias_NULL$$ && ($rowCount$$2$$ = (0,D.$JSCompiler_StaticMethods_getFetchSize$$)(this, "row"), (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") || ($rowRange_rowStart$$ < this.$m_startRow$ ? $rowCount$$2$$ = window.Math.min($rowCount$$2$$, this.$m_startRow$) : ($count$$8$$ = this.$m_dataSource$.getCount("row"), 0 <= $count$$8$$ && ($rowCount$$2$$ = 
  window.Math.min($rowCount$$2$$, window.Math.max(0, $count$$8$$ - this.$m_endRow$)))))), $colCount$$2$$ == D.$JSCompiler_alias_NULL$$ && ($colCount$$2$$ = (0,D.$JSCompiler_StaticMethods_getFetchSize$$)(this, "column"), (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") || ($colStart$$ < this.$m_startCol$ ? $colCount$$2$$ = window.Math.min($colCount$$2$$, this.$m_startCol$) : ($count$$8$$ = this.$m_dataSource$.getCount("column"), 0 <= $count$$8$$ && ($colCount$$2$$ = window.Math.min($colCount$$2$$, 
  window.Math.max(0, $count$$8$$ - this.$m_endCol$)))))), $rowRange_rowStart$$ = {axis:"row", start:$rowRange_rowStart$$, count:$rowCount$$2$$}, $columnRange_databody$$4$$ = {axis:"column", start:$colStart$$, count:$colCount$$2$$, databody:$columnRange_databody$$4$$, scroller:$scroller$$7$$}, $callbacks$$4_successCallback$$27$$ = $callbacks$$4_successCallback$$27$$ != D.$JSCompiler_alias_NULL$$ && $callbacks$$4_successCallback$$27$$.success != D.$JSCompiler_alias_NULL$$ ? $callbacks$$4_successCallback$$27$$.success : 
  this.$handleCellsFetchSuccess$, (0,D.$JSCompiler_StaticMethods_showStatusText$$)(this), this.$m_dataSource$.fetchCells([$rowRange_rowStart$$, $columnRange_databody$$4$$], {success:$callbacks$$4_successCallback$$27$$, error:this.$handleHeadersFetchError$}, {success:this, error:this}))
};
D.$DvtDataGrid$$.prototype.$isDraggable$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$DvtDataGrid$$.prototype.$handleCellsFetchSuccess$ = function $$DvtDataGrid$$$$$handleCellsFetchSuccess$$($cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$, $cellRange$$3_databody$$5$$, $JSCompiler_inline_result$$45_rowInsert$$2_scrollerHeight$$inline_741$$) {
  var $scrollerWidth$$inline_742_totalRowCount$$, $scrollerContentHeight$$inline_744_totalColumnCount$$, $columnStart$$1_requestRowStart$$inline_705_rowRange$$3_rowStart$$inline_711_rowStartPixel$$inline_715$$, $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_702_rowCount$$inline_723_rowStart$$2$$, $columnCount$$inline_724_responseColumnStart$$inline_703_rowCount$$4$$, $fragment$$1_horizontalGridlines$$inline_734_rowRangeNeedsUpdate_viewportLeft$$inline_721$$, $columnEndPixel$$inline_718_columnRange$$3_columnStart$$inline_713_inner$$, 
  $columnCount$$1_requestCellRanges$$inline_704_requestColumnStart$$inline_706_rowEnd$$inline_712_rowEndPixel$$inline_716$$, $columnRangeNeedsUpdate_columnStartPixel$$inline_717$$, $addResult_avgHeight_scrollerContent$$inline_743_scrollerContentWidth$$inline_745_top$$3$$, $prev$$1_referenceRow$$1_rows$$, $databodyContent$$1_scroller$$8_viewportTop$$inline_719$$, $columnBandingInterval$$inline_733_resizer$$1_viewportBottom$$inline_720$$, $avgWidth$$inline_737_i$$13_isAppend$$1_row$$inline_736$$, $avgWidth$$1_renderer$$inline_732$$;
  $scrollerWidth$$inline_742_totalRowCount$$ = this.$m_dataSource$.getCount("row");
  $scrollerContentHeight$$inline_744_totalColumnCount$$ = this.$m_dataSource$.getCount("column");
  if($JSCompiler_inline_result$$45_rowInsert$$2_scrollerHeight$$inline_741$$ === D.$JSCompiler_alias_VOID$$) {
    $JSCompiler_inline_result$$45_rowInsert$$2_scrollerHeight$$inline_741$$ = D.$JSCompiler_alias_FALSE$$;
    $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_702_rowCount$$inline_723_rowStart$$2$$ = $cellRange$$3_databody$$5$$[0].start;
    $columnCount$$inline_724_responseColumnStart$$inline_703_rowCount$$4$$ = $cellRange$$3_databody$$5$$[1].start;
    $columnCount$$1_requestCellRanges$$inline_704_requestColumnStart$$inline_706_rowEnd$$inline_712_rowEndPixel$$inline_716$$ = this.$m_fetching$.cells;
    $columnStart$$1_requestRowStart$$inline_705_rowRange$$3_rowStart$$inline_711_rowStartPixel$$inline_715$$ = $columnCount$$1_requestCellRanges$$inline_704_requestColumnStart$$inline_706_rowEnd$$inline_712_rowEndPixel$$inline_716$$.row;
    $columnCount$$1_requestCellRanges$$inline_704_requestColumnStart$$inline_706_rowEnd$$inline_712_rowEndPixel$$inline_716$$ = $columnCount$$1_requestCellRanges$$inline_704_requestColumnStart$$inline_706_rowEnd$$inline_712_rowEndPixel$$inline_716$$.column;
    if(!($columnStart$$1_requestRowStart$$inline_705_rowRange$$3_rowStart$$inline_711_rowStartPixel$$inline_715$$ == $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_702_rowCount$$inline_723_rowStart$$2$$ && $columnCount$$1_requestCellRanges$$inline_704_requestColumnStart$$inline_706_rowEnd$$inline_712_rowEndPixel$$inline_716$$ == $columnCount$$inline_724_responseColumnStart$$inline_703_rowCount$$4$$)) {
      return
    }
    if($JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_702_rowCount$$inline_723_rowStart$$2$$ = this.$m_startRowPixel$ == this.$m_endRowPixel$ && this.$m_startColPixel$ == this.$m_endColPixel$) {
      var $verticalGridlines$$inline_735_viewportRight$$inline_722$$;
      (0,window.isNaN)(this.$m_avgRowHeight$) || (0,window.isNaN)(this.$m_avgColWidth$) ? $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_702_rowCount$$inline_723_rowStart$$2$$ = D.$JSCompiler_alias_TRUE$$ : ($columnStart$$1_requestRowStart$$inline_705_rowRange$$3_rowStart$$inline_711_rowStartPixel$$inline_715$$ = $cellRange$$3_databody$$5$$[0].start, $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_702_rowCount$$inline_723_rowStart$$2$$ = 
      $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$.getCount("row"), $columnCount$$1_requestCellRanges$$inline_704_requestColumnStart$$inline_706_rowEnd$$inline_712_rowEndPixel$$inline_716$$ = $columnStart$$1_requestRowStart$$inline_705_rowRange$$3_rowStart$$inline_711_rowStartPixel$$inline_715$$ + $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_702_rowCount$$inline_723_rowStart$$2$$, $columnEndPixel$$inline_718_columnRange$$3_columnStart$$inline_713_inner$$ = 
      $cellRange$$3_databody$$5$$[1].start, $columnCount$$inline_724_responseColumnStart$$inline_703_rowCount$$4$$ = $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$.getCount("column"), $columnStart$$1_requestRowStart$$inline_705_rowRange$$3_rowStart$$inline_711_rowStartPixel$$inline_715$$ *= this.$m_avgRowHeight$, $columnCount$$1_requestCellRanges$$inline_704_requestColumnStart$$inline_706_rowEnd$$inline_712_rowEndPixel$$inline_716$$ *= this.$m_avgRowHeight$, $columnRangeNeedsUpdate_columnStartPixel$$inline_717$$ = 
      this.$m_avgColWidth$ * $columnEndPixel$$inline_718_columnRange$$3_columnStart$$inline_713_inner$$, $columnEndPixel$$inline_718_columnRange$$3_columnStart$$inline_713_inner$$ = this.$m_avgColWidth$ * ($columnEndPixel$$inline_718_columnRange$$3_columnStart$$inline_713_inner$$ + $columnCount$$inline_724_responseColumnStart$$inline_703_rowCount$$4$$), $databodyContent$$1_scroller$$8_viewportTop$$inline_719$$ = this.$m_currentScrollTop$, $columnBandingInterval$$inline_733_resizer$$1_viewportBottom$$inline_720$$ = 
      this.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_databody$), $fragment$$1_horizontalGridlines$$inline_734_rowRangeNeedsUpdate_viewportLeft$$inline_721$$ = this.$m_currentScrollLeft$, $verticalGridlines$$inline_735_viewportRight$$inline_722$$ = this.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_databody$), !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && (this.$m_dataSource$.getCount("row") == $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_702_rowCount$$inline_723_rowStart$$2$$ && 
      $columnCount$$1_requestCellRanges$$inline_704_requestColumnStart$$inline_706_rowEnd$$inline_712_rowEndPixel$$inline_716$$ < $columnBandingInterval$$inline_733_resizer$$1_viewportBottom$$inline_720$$) && ($columnCount$$1_requestCellRanges$$inline_704_requestColumnStart$$inline_706_rowEnd$$inline_712_rowEndPixel$$inline_716$$ = $columnBandingInterval$$inline_733_resizer$$1_viewportBottom$$inline_720$$), !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && (this.$m_dataSource$.getCount("column") == 
      $columnCount$$inline_724_responseColumnStart$$inline_703_rowCount$$4$$ && $columnEndPixel$$inline_718_columnRange$$3_columnStart$$inline_713_inner$$ < $verticalGridlines$$inline_735_viewportRight$$inline_722$$) && ($columnEndPixel$$inline_718_columnRange$$3_columnStart$$inline_713_inner$$ = $verticalGridlines$$inline_735_viewportRight$$inline_722$$), $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_702_rowCount$$inline_723_rowStart$$2$$ = $databodyContent$$1_scroller$$8_viewportTop$$inline_719$$ >= 
      $columnStart$$1_requestRowStart$$inline_705_rowRange$$3_rowStart$$inline_711_rowStartPixel$$inline_715$$ && $columnBandingInterval$$inline_733_resizer$$1_viewportBottom$$inline_720$$ <= $columnCount$$1_requestCellRanges$$inline_704_requestColumnStart$$inline_706_rowEnd$$inline_712_rowEndPixel$$inline_716$$ && $fragment$$1_horizontalGridlines$$inline_734_rowRangeNeedsUpdate_viewportLeft$$inline_721$$ >= $columnRangeNeedsUpdate_columnStartPixel$$inline_717$$ && $verticalGridlines$$inline_735_viewportRight$$inline_722$$ <= 
      $columnEndPixel$$inline_718_columnRange$$3_columnStart$$inline_713_inner$$);
      $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_702_rowCount$$inline_723_rowStart$$2$$ = !$JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_702_rowCount$$inline_723_rowStart$$2$$
    }
    if($JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_702_rowCount$$inline_723_rowStart$$2$$) {
      this.$m_fetching$.cells = D.$JSCompiler_alias_FALSE$$;
      this.$m_captureScrolling$ || (0,D.$JSCompiler_StaticMethods_handleLongScroll$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
      return
    }
  }
  (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)(this);
  $columnStart$$1_requestRowStart$$inline_705_rowRange$$3_rowStart$$inline_711_rowStartPixel$$inline_715$$ = $cellRange$$3_databody$$5$$[0];
  $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_702_rowCount$$inline_723_rowStart$$2$$ = $columnStart$$1_requestRowStart$$inline_705_rowRange$$3_rowStart$$inline_711_rowStartPixel$$inline_715$$.start;
  $columnCount$$inline_724_responseColumnStart$$inline_703_rowCount$$4$$ = $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$.getCount("row");
  $fragment$$1_horizontalGridlines$$inline_734_rowRangeNeedsUpdate_viewportLeft$$inline_721$$ = 0 < $columnCount$$inline_724_responseColumnStart$$inline_703_rowCount$$4$$ && ($JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_702_rowCount$$inline_723_rowStart$$2$$ >= this.$m_endRow$ || $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_702_rowCount$$inline_723_rowStart$$2$$ + $columnCount$$inline_724_responseColumnStart$$inline_703_rowCount$$4$$ <= 
  this.$m_startRow$);
  if(0 == $columnCount$$inline_724_responseColumnStart$$inline_703_rowCount$$4$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && 0 < $columnStart$$1_requestRowStart$$inline_705_rowRange$$3_rowStart$$inline_711_rowStartPixel$$inline_715$$.count || $fragment$$1_horizontalGridlines$$inline_734_rowRangeNeedsUpdate_viewportLeft$$inline_721$$ && (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && this.$m_endRow$ + 
  $columnCount$$inline_724_responseColumnStart$$inline_703_rowCount$$4$$ >= $scrollerWidth$$inline_742_totalRowCount$$) {
    this.$m_stopRowFetch$ = D.$JSCompiler_alias_TRUE$$
  }
  $columnEndPixel$$inline_718_columnRange$$3_columnStart$$inline_713_inner$$ = $cellRange$$3_databody$$5$$[1];
  $columnStart$$1_requestRowStart$$inline_705_rowRange$$3_rowStart$$inline_711_rowStartPixel$$inline_715$$ = $columnEndPixel$$inline_718_columnRange$$3_columnStart$$inline_713_inner$$.start;
  $columnCount$$1_requestCellRanges$$inline_704_requestColumnStart$$inline_706_rowEnd$$inline_712_rowEndPixel$$inline_716$$ = $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$.getCount("column");
  $columnRangeNeedsUpdate_columnStartPixel$$inline_717$$ = 0 < $columnCount$$1_requestCellRanges$$inline_704_requestColumnStart$$inline_706_rowEnd$$inline_712_rowEndPixel$$inline_716$$ && ($columnStart$$1_requestRowStart$$inline_705_rowRange$$3_rowStart$$inline_711_rowStartPixel$$inline_715$$ == this.$m_endCol$ || $columnStart$$1_requestRowStart$$inline_705_rowRange$$3_rowStart$$inline_711_rowStartPixel$$inline_715$$ + $columnCount$$1_requestCellRanges$$inline_704_requestColumnStart$$inline_706_rowEnd$$inline_712_rowEndPixel$$inline_716$$ == 
  this.$m_startCol$);
  if(0 == $columnCount$$1_requestCellRanges$$inline_704_requestColumnStart$$inline_706_rowEnd$$inline_712_rowEndPixel$$inline_716$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && 0 < $columnEndPixel$$inline_718_columnRange$$3_columnStart$$inline_713_inner$$.count || $columnRangeNeedsUpdate_columnStartPixel$$inline_717$$ && (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && this.$m_endCol$ + 
  $columnCount$$1_requestCellRanges$$inline_704_requestColumnStart$$inline_706_rowEnd$$inline_712_rowEndPixel$$inline_716$$ >= $scrollerContentHeight$$inline_744_totalColumnCount$$) {
    this.$m_stopColumnFetch$ = D.$JSCompiler_alias_TRUE$$
  }
  $cellRange$$3_databody$$5$$ = this.$m_databody$;
  $cellRange$$3_databody$$5$$ == D.$JSCompiler_alias_NULL$$ && ($cellRange$$3_databody$$5$$ = $columnEndPixel$$inline_718_columnRange$$3_columnStart$$inline_713_inner$$.databody);
  $databodyContent$$1_scroller$$8_viewportTop$$inline_719$$ = this.$m_scroller$;
  $databodyContent$$1_scroller$$8_viewportTop$$inline_719$$ == D.$JSCompiler_alias_NULL$$ && ($databodyContent$$1_scroller$$8_viewportTop$$inline_719$$ = $columnEndPixel$$inline_718_columnRange$$3_columnStart$$inline_713_inner$$.scroller);
  $databodyContent$$1_scroller$$8_viewportTop$$inline_719$$.hasChildNodes() ? $columnEndPixel$$inline_718_columnRange$$3_columnStart$$inline_713_inner$$ = $databodyContent$$1_scroller$$8_viewportTop$$inline_719$$.firstChild : ($columnEndPixel$$inline_718_columnRange$$3_columnStart$$inline_713_inner$$ = window.document.createElement("div"), $databodyContent$$1_scroller$$8_viewportTop$$inline_719$$.appendChild($columnEndPixel$$inline_718_columnRange$$3_columnStart$$inline_713_inner$$));
  $cellRange$$3_databody$$5$$.hasChildNodes() ? ($databodyContent$$1_scroller$$8_viewportTop$$inline_719$$ = $cellRange$$3_databody$$5$$.firstChild, $columnBandingInterval$$inline_733_resizer$$1_viewportBottom$$inline_720$$ = $databodyContent$$1_scroller$$8_viewportTop$$inline_719$$.firstChild) : ($databodyContent$$1_scroller$$8_viewportTop$$inline_719$$ = window.document.createElement("div"), $databodyContent$$1_scroller$$8_viewportTop$$inline_719$$.className = this.$m_utils$.$isTouchDevice$() ? 
  this.getMappedStyle("scroller-mobile") : this.getMappedStyle("scroller"), $columnBandingInterval$$inline_733_resizer$$1_viewportBottom$$inline_720$$ = window.document.createElement("div"), $columnBandingInterval$$inline_733_resizer$$1_viewportBottom$$inline_720$$.style.display = "none", (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnBandingInterval$$inline_733_resizer$$1_viewportBottom$$inline_720$$, 1), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnBandingInterval$$inline_733_resizer$$1_viewportBottom$$inline_720$$, 
  0), $databodyContent$$1_scroller$$8_viewportTop$$inline_719$$.appendChild($columnBandingInterval$$inline_733_resizer$$1_viewportBottom$$inline_720$$));
  if($fragment$$1_horizontalGridlines$$inline_734_rowRangeNeedsUpdate_viewportLeft$$inline_721$$ || $JSCompiler_inline_result$$45_rowInsert$$2_scrollerHeight$$inline_741$$) {
    if(($avgWidth$$inline_737_i$$13_isAppend$$1_row$$inline_736$$ = !$JSCompiler_inline_result$$45_rowInsert$$2_scrollerHeight$$inline_741$$ && $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_702_rowCount$$inline_723_rowStart$$2$$ >= this.$m_startRow$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$) ? $addResult_avgHeight_scrollerContent$$inline_743_scrollerContentWidth$$inline_745_top$$3$$ = this.$m_endRowPixel$ : $JSCompiler_inline_result$$45_rowInsert$$2_scrollerHeight$$inline_741$$ ? 
    ($prev$$1_referenceRow$$1_rows$$ = $databodyContent$$1_scroller$$8_viewportTop$$inline_719$$.childNodes[$JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_702_rowCount$$inline_723_rowStart$$2$$ - this.$m_startRow$ + 1], $addResult_avgHeight_scrollerContent$$inline_743_scrollerContentWidth$$inline_745_top$$3$$ = (0,window.parseInt)($prev$$1_referenceRow$$1_rows$$.style.top)) : $addResult_avgHeight_scrollerContent$$inline_743_scrollerContentWidth$$inline_745_top$$3$$ = 
    this.$m_startRowPixel$, $fragment$$1_horizontalGridlines$$inline_734_rowRangeNeedsUpdate_viewportLeft$$inline_721$$ = window.document.createDocumentFragment(), $addResult_avgHeight_scrollerContent$$inline_743_scrollerContentWidth$$inline_745_top$$3$$ = (0,D.$JSCompiler_StaticMethods__addRows$$)(this, $fragment$$1_horizontalGridlines$$inline_734_rowRangeNeedsUpdate_viewportLeft$$inline_721$$, $avgWidth$$inline_737_i$$13_isAppend$$1_row$$inline_736$$ || $JSCompiler_inline_result$$45_rowInsert$$2_scrollerHeight$$inline_741$$, 
    $addResult_avgHeight_scrollerContent$$inline_743_scrollerContentWidth$$inline_745_top$$3$$, $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_702_rowCount$$inline_723_rowStart$$2$$, $columnCount$$inline_724_responseColumnStart$$inline_703_rowCount$$4$$, $columnStart$$1_requestRowStart$$inline_705_rowRange$$3_rowStart$$inline_711_rowStartPixel$$inline_715$$, $columnRangeNeedsUpdate_columnStartPixel$$inline_717$$, $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), 
    $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ = $addResult_avgHeight_scrollerContent$$inline_743_scrollerContentWidth$$inline_745_top$$3$$.totalRowHeight, $avgWidth$$1_renderer$$inline_732$$ = $addResult_avgHeight_scrollerContent$$inline_743_scrollerContentWidth$$inline_745_top$$3$$.avgWidth, $addResult_avgHeight_scrollerContent$$inline_743_scrollerContentWidth$$inline_745_top$$3$$ = $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ / $columnCount$$inline_724_responseColumnStart$$inline_703_rowCount$$4$$, 
    $avgWidth$$inline_737_i$$13_isAppend$$1_row$$inline_736$$) {
      $databodyContent$$1_scroller$$8_viewportTop$$inline_719$$.appendChild($fragment$$1_horizontalGridlines$$inline_734_rowRangeNeedsUpdate_viewportLeft$$inline_721$$);
      if(0 != this.$m_endRow$ && 0 != $columnCount$$inline_724_responseColumnStart$$inline_703_rowCount$$4$$ && ($prev$$1_referenceRow$$1_rows$$ = $databodyContent$$1_scroller$$8_viewportTop$$inline_719$$.childNodes[this.$m_endRow$], $prev$$1_referenceRow$$1_rows$$ != D.$JSCompiler_alias_NULL$$)) {
        $prev$$1_referenceRow$$1_rows$$ = $prev$$1_referenceRow$$1_rows$$.childNodes;
        for($avgWidth$$inline_737_i$$13_isAppend$$1_row$$inline_736$$ = 0;$avgWidth$$inline_737_i$$13_isAppend$$1_row$$inline_736$$ < $prev$$1_referenceRow$$1_rows$$.length;$avgWidth$$inline_737_i$$13_isAppend$$1_row$$inline_736$$ += 1) {
          $prev$$1_referenceRow$$1_rows$$[$avgWidth$$inline_737_i$$13_isAppend$$1_row$$inline_736$$].style.borderBottomStyle = ""
        }
      }
      this.$m_endRow$ += $columnCount$$inline_724_responseColumnStart$$inline_703_rowCount$$4$$;
      this.$m_endRowPixel$ += $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$;
      $cellRange$$3_databody$$5$$.hasChildNodes() || ($cellRange$$3_databody$$5$$.appendChild($databodyContent$$1_scroller$$8_viewportTop$$inline_719$$), this.$isDraggable$() && ($cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ = window.document.createElement("div"), window.bottomHotspot = window.document.createElement("div"), $cellRange$$3_databody$$5$$.appendChild($cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), $cellRange$$3_databody$$5$$.appendChild(window.bottomHotspot)))
    }else {
      $JSCompiler_inline_result$$45_rowInsert$$2_scrollerHeight$$inline_741$$ ? ($databodyContent$$1_scroller$$8_viewportTop$$inline_719$$.insertBefore($fragment$$1_horizontalGridlines$$inline_734_rowRangeNeedsUpdate_viewportLeft$$inline_721$$, $prev$$1_referenceRow$$1_rows$$), $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_702_rowCount$$inline_723_rowStart$$2$$ < this.$m_startRow$ && (this.$m_startRow$ = $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_702_rowCount$$inline_723_rowStart$$2$$, 
      this.$m_startRowPixel$ = window.Math.max(0, this.$m_startRowPixel$ - $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnBandingInterval$$inline_733_resizer$$1_viewportBottom$$inline_720$$, window.Math.max(0, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($columnBandingInterval$$inline_733_resizer$$1_viewportBottom$$inline_720$$) - $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$))), this.$m_endRow$ += $columnCount$$inline_724_responseColumnStart$$inline_703_rowCount$$4$$, 
      this.$m_endRowPixel$ += $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$, (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($prev$$1_referenceRow$$1_rows$$, $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$)) : ($databodyContent$$1_scroller$$8_viewportTop$$inline_719$$.insertBefore($fragment$$1_horizontalGridlines$$inline_734_rowRangeNeedsUpdate_viewportLeft$$inline_721$$, $columnBandingInterval$$inline_733_resizer$$1_viewportBottom$$inline_720$$.nextSibling), this.$m_startRow$ -= 
      $columnCount$$inline_724_responseColumnStart$$inline_703_rowCount$$4$$, this.$m_startRowPixel$ = window.Math.max(0, this.$m_startRowPixel$ - $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnBandingInterval$$inline_733_resizer$$1_viewportBottom$$inline_720$$, window.Math.max(0, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($columnBandingInterval$$inline_733_resizer$$1_viewportBottom$$inline_720$$) - $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$)))
    }
  }else {
    if($columnRangeNeedsUpdate_columnStartPixel$$inline_717$$ && ($prev$$1_referenceRow$$1_rows$$ = $databodyContent$$1_scroller$$8_viewportTop$$inline_719$$.childNodes, $columnCount$$inline_724_responseColumnStart$$inline_703_rowCount$$4$$ == $prev$$1_referenceRow$$1_rows$$.length - 1)) {
      var $i$$inline_738$$;
      $avgWidth$$1_renderer$$inline_732$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "cell");
      $columnBandingInterval$$inline_733_resizer$$1_viewportBottom$$inline_720$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)(this.$m_options$);
      $fragment$$1_horizontalGridlines$$inline_734_rowRangeNeedsUpdate_viewportLeft$$inline_721$$ = (0,D.$JSCompiler_StaticMethods_getHorizontalGridlines$$)(this.$m_options$);
      $verticalGridlines$$inline_735_viewportRight$$inline_722$$ = (0,D.$JSCompiler_StaticMethods_getVerticalGridlines$$)(this.$m_options$);
      for($i$$inline_738$$ = 0;$i$$inline_738$$ < $columnCount$$inline_724_responseColumnStart$$inline_703_rowCount$$4$$;$i$$inline_738$$ += 1) {
        $avgWidth$$inline_737_i$$13_isAppend$$1_row$$inline_736$$ = $prev$$1_referenceRow$$1_rows$$[$i$$inline_738$$ + 1], $avgWidth$$inline_737_i$$13_isAppend$$1_row$$inline_736$$ = (0,D.$JSCompiler_StaticMethods_addCellsToRow$$)(this, $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$, $avgWidth$$inline_737_i$$13_isAppend$$1_row$$inline_736$$, $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_702_rowCount$$inline_723_rowStart$$2$$ + $i$$inline_738$$, $avgWidth$$1_renderer$$inline_732$$, 
        D.$JSCompiler_alias_FALSE$$, $columnStart$$1_requestRowStart$$inline_705_rowRange$$3_rowStart$$inline_711_rowStartPixel$$inline_715$$, $i$$inline_738$$ == $columnCount$$inline_724_responseColumnStart$$inline_703_rowCount$$4$$ - 1, $columnBandingInterval$$inline_733_resizer$$1_viewportBottom$$inline_720$$, $fragment$$1_horizontalGridlines$$inline_734_rowRangeNeedsUpdate_viewportLeft$$inline_721$$, $verticalGridlines$$inline_735_viewportRight$$inline_722$$)
      }
      $avgWidth$$1_renderer$$inline_732$$ = $avgWidth$$inline_737_i$$13_isAppend$$1_row$$inline_736$$
    }
  }
  $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ = -1 != $scrollerContentHeight$$inline_744_totalColumnCount$$ && !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) ? $scrollerContentHeight$$inline_744_totalColumnCount$$ * $avgWidth$$1_renderer$$inline_732$$ : this.$m_endColPixel$;
  if($avgWidth$$1_renderer$$inline_732$$ != D.$JSCompiler_alias_VOID$$ && (0 == this.$m_avgColWidth$ || this.$m_avgColWidth$ == D.$JSCompiler_alias_VOID$$)) {
    this.$m_avgColWidth$ = $avgWidth$$1_renderer$$inline_732$$, (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databodyContent$$1_scroller$$8_viewportTop$$inline_719$$, $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnEndPixel$$inline_718_columnRange$$3_columnStart$$inline_713_inner$$, $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$)
  }else {
    if((-1 == $scrollerContentHeight$$inline_744_totalColumnCount$$ || (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this)) && $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ > (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databodyContent$$1_scroller$$8_viewportTop$$inline_719$$)) {
      (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databodyContent$$1_scroller$$8_viewportTop$$inline_719$$, $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnEndPixel$$inline_718_columnRange$$3_columnStart$$inline_713_inner$$, $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$)
    }
  }
  $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ = -1 != $scrollerWidth$$inline_742_totalRowCount$$ && !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) ? $scrollerWidth$$inline_742_totalRowCount$$ * $addResult_avgHeight_scrollerContent$$inline_743_scrollerContentWidth$$inline_745_top$$3$$ : this.$m_endRowPixel$;
  if($addResult_avgHeight_scrollerContent$$inline_743_scrollerContentWidth$$inline_745_top$$3$$ != D.$JSCompiler_alias_VOID$$ && (0 == this.$m_avgRowHeight$ || this.$m_avgRowHeight$ == D.$JSCompiler_alias_VOID$$)) {
    this.$m_avgRowHeight$ = $addResult_avgHeight_scrollerContent$$inline_743_scrollerContentWidth$$inline_745_top$$3$$, (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent$$1_scroller$$8_viewportTop$$inline_719$$, $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnEndPixel$$inline_718_columnRange$$3_columnStart$$inline_713_inner$$, $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$)
  }else {
    if((-1 == $scrollerWidth$$inline_742_totalRowCount$$ || (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this)) && $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ > (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databodyContent$$1_scroller$$8_viewportTop$$inline_719$$) || $scrollerWidth$$inline_742_totalRowCount$$ * $addResult_avgHeight_scrollerContent$$inline_743_scrollerContentWidth$$inline_745_top$$3$$ != (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databodyContent$$1_scroller$$8_viewportTop$$inline_719$$)) {
      (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent$$1_scroller$$8_viewportTop$$inline_719$$, $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnEndPixel$$inline_718_columnRange$$3_columnStart$$inline_713_inner$$, $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$)
    }
  }
  $columnRangeNeedsUpdate_columnStartPixel$$inline_717$$ && ($columnStart$$1_requestRowStart$$inline_705_rowRange$$3_rowStart$$inline_711_rowStartPixel$$inline_715$$ < this.$m_startCol$ ? this.$m_startCol$ -= $columnCount$$1_requestCellRanges$$inline_704_requestColumnStart$$inline_706_rowEnd$$inline_712_rowEndPixel$$inline_716$$ : this.$m_endCol$ += $columnCount$$1_requestCellRanges$$inline_704_requestColumnStart$$inline_706_rowEnd$$inline_712_rowEndPixel$$inline_716$$);
  this.$m_fetching$.cells = D.$JSCompiler_alias_FALSE$$;
  this.$m_initialized$ && (0,D.$JSCompiler_StaticMethods__syncScroller$$)(this);
  (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && ((0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this), this.$m_initialized$ ? (this.$m_scroller$ == D.$JSCompiler_alias_NULL$$ ? $JSCompiler_inline_result$$45_rowInsert$$2_scrollerHeight$$inline_741$$ = D.$JSCompiler_alias_FALSE$$ : ($JSCompiler_inline_result$$45_rowInsert$$2_scrollerHeight$$inline_741$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_scroller$), $scrollerWidth$$inline_742_totalRowCount$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_scroller$), 
  $addResult_avgHeight_scrollerContent$$inline_743_scrollerContentWidth$$inline_745_top$$3$$ = this.$m_scroller$.firstChild, $scrollerContentHeight$$inline_744_totalColumnCount$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($addResult_avgHeight_scrollerContent$$inline_743_scrollerContentWidth$$inline_745_top$$3$$), $addResult_avgHeight_scrollerContent$$inline_743_scrollerContentWidth$$inline_745_top$$3$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($addResult_avgHeight_scrollerContent$$inline_743_scrollerContentWidth$$inline_745_top$$3$$), 
  $JSCompiler_inline_result$$45_rowInsert$$2_scrollerHeight$$inline_741$$ = this.$m_endRowPixel$ > $JSCompiler_inline_result$$45_rowInsert$$2_scrollerHeight$$inline_741$$ && $scrollerWidth$$inline_742_totalRowCount$$ == $addResult_avgHeight_scrollerContent$$inline_743_scrollerContentWidth$$inline_745_top$$3$$ || this.$m_endColPixel$ > $scrollerWidth$$inline_742_totalRowCount$$ && $JSCompiler_inline_result$$45_rowInsert$$2_scrollerHeight$$inline_741$$ == $scrollerContentHeight$$inline_744_totalColumnCount$$ ? 
  D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$), $JSCompiler_inline_result$$45_rowInsert$$2_scrollerHeight$$inline_741$$ && (0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this)) : ((0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this), $JSCompiler_inline_result$$45_rowInsert$$2_scrollerHeight$$inline_741$$ || (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this)), this.$m_scrollIndexAfterFetch$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_scrollToIndex$$)(this, 
  this.$m_scrollIndexAfterFetch$), this.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$ ? "row" === this.$m_activeHeader$.axis ? (0,D.$JSCompiler_StaticMethods__focusRowHeader$$)(this, this.$m_scrollIndexAfterFetch$.row) : "column" === this.$m_activeHeader$.axis && (0,D.$JSCompiler_StaticMethods__focusColumnHeader$$)(this, this.$m_scrollIndexAfterFetch$.column) : this.$m_scrollIndexAfterFetch$ == this.$m_active$ ? (0,D.$JSCompiler_StaticMethods_highlightActive$$)(this) : (0,D.$JSCompiler_StaticMethods_highlightIndex$$)(this, 
  this.$m_scrollIndexAfterFetch$), this.$m_scrollIndexAfterFetch$ = D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (this.$m_databody$ == D.$JSCompiler_alias_NULL$$ && (this.$m_databody$ = $cellRange$$3_databody$$5$$), (0,D.$JSCompiler_StaticMethods_applySelection$$)(this, $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_702_rowCount$$inline_723_rowStart$$2$$, $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_702_rowCount$$inline_723_rowStart$$2$$ + 
  $columnCount$$inline_724_responseColumnStart$$inline_703_rowCount$$4$$)))
};
D.$JSCompiler_StaticMethods__addRows$$ = function $$JSCompiler_StaticMethods__addRows$$$($JSCompiler_StaticMethods__addRows$self$$, $fragment$$2$$, $isAppendOrInsert$$, $top$$4$$, $rowStart$$4$$, $rowCount$$6$$, $columnStart$$3$$, $columnRangeNeedsUpdate$$1$$, $cellSet$$3$$) {
  var $renderer$$3$$, $columnBandingInterval$$1$$, $rowBandingInterval$$, $horizontalGridlines$$1$$, $verticalGridlines$$1$$, $row$$2$$, $avgWidth$$3$$, $totalRowHeight$$2$$, $height$$16_index$$50$$;
  $renderer$$3$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$, "cell");
  $columnBandingInterval$$1$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $rowBandingInterval$$ = (0,D.$JSCompiler_StaticMethods_getRowBandingInterval$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $horizontalGridlines$$1$$ = (0,D.$JSCompiler_StaticMethods_getHorizontalGridlines$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $verticalGridlines$$1$$ = (0,D.$JSCompiler_StaticMethods_getVerticalGridlines$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  for(window.i = $totalRowHeight$$2$$ = 0;window.i < $rowCount$$6$$;window.i += 1) {
    $height$$16_index$$50$$ = $isAppendOrInsert$$ ? $rowStart$$4$$ + window.i : $rowStart$$4$$ + ($rowCount$$6$$ - 1 - window.i), $row$$2$$ = window.document.createElement("div"), $row$$2$$.className = 1 === window.Math.floor($height$$16_index$$50$$ / $rowBandingInterval$$) % 2 ? $JSCompiler_StaticMethods__addRows$self$$.getMappedStyle("row") + " " + $JSCompiler_StaticMethods__addRows$self$$.getMappedStyle("banded") : $JSCompiler_StaticMethods__addRows$self$$.getMappedStyle("row"), $avgWidth$$3$$ = 
    (0,D.$JSCompiler_StaticMethods_addCellsToRow$$)($JSCompiler_StaticMethods__addRows$self$$, $cellSet$$3$$, $row$$2$$, $height$$16_index$$50$$, $renderer$$3$$, D.$JSCompiler_alias_TRUE$$, $columnStart$$3$$, window.i == $rowCount$$6$$ - 1 && $columnRangeNeedsUpdate$$1$$, $columnBandingInterval$$1$$, $horizontalGridlines$$1$$, $verticalGridlines$$1$$), $height$$16_index$$50$$ = (0,D.$JSCompiler_StaticMethods_getRowHeight$$)($JSCompiler_StaticMethods__addRows$self$$, $row$$2$$, $height$$16_index$$50$$, 
    $JSCompiler_StaticMethods__addRows$self$$.$_getKey$($row$$2$$)), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($row$$2$$, $height$$16_index$$50$$), $totalRowHeight$$2$$ += $height$$16_index$$50$$, $isAppendOrInsert$$ ? ($row$$2$$.style.top = $top$$4$$ + "px", $top$$4$$ += $height$$16_index$$50$$, $fragment$$2$$.appendChild($row$$2$$)) : ($top$$4$$ -= $height$$16_index$$50$$, $row$$2$$.style.top = $top$$4$$ + "px", $fragment$$2$$.insertBefore($row$$2$$, $fragment$$2$$.firstChild))
  }
  return{avgWidth:$avgWidth$$3$$, totalRowHeight:$totalRowHeight$$2$$, top:$top$$4$$}
};
D.$JSCompiler_StaticMethods_pushRowsDown$$ = function $$JSCompiler_StaticMethods_pushRowsDown$$$($row$$3$$, $adjustment$$) {
  for(;$row$$3$$;) {
    $row$$3$$.style.top = (0,window.parseInt)($row$$3$$.style.top) + $adjustment$$ + "px", $row$$3$$ = $row$$3$$.nextSibling
  }
};
D.$DvtDataGrid$$.prototype.$handleCellsFetchError$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_addCellsToRow$$ = function $$JSCompiler_StaticMethods_addCellsToRow$$$($JSCompiler_StaticMethods_addCellsToRow$self$$, $cellSet$$4$$, $row$$5$$, $rowIndex$$1$$, $renderer$$4$$, $isRowFetch$$, $columnStart$$4$$, $updateColumnRangeInfo$$, $columnBandingInterval$$2$$, $horizontalGridlines$$2$$, $verticalGridlines$$2$$) {
  var $isAppend$$2$$, $firstColumn$$, $indexes$$5_indexes$$inline_748_inlineStyle$$3_inlineStyleClass_prop$$inline_753$$, $cellStyleClass_data$$inline_749$$, $currentLeft$$1$$, $dir$$5$$, $totalWidth$$, $columnCount$$2$$, $cellData_content$$2_rowExpander$$inline_756$$, $cellMetadata_metadata$$inline_750$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_747_cell$$inline_757_cellContext$$1_index$$inline_759$$, $j$$3$$, $JSCompiler_StaticMethods__processRowExpander$self$$inline_755_cell$$, 
  $columnIndex$$1_row$$inline_758_width$$16$$, $keyAttribute$$;
  $isAppend$$2$$ = $columnStart$$4$$ >= $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startCol$;
  $firstColumn$$ = $row$$5$$.firstChild;
  $currentLeft$$1$$ = $isRowFetch$$ || !$isAppend$$2$$ ? $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startColPixel$ : $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_endColPixel$;
  $keyAttribute$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$getResources$().getMappedAttribute("key");
  $dir$$5$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$getResources$().isRTLMode() ? "right" : "left";
  $totalWidth$$ = 0;
  $columnCount$$2$$ = $cellSet$$4$$.getCount("column");
  for($j$$3$$ = 0;$j$$3$$ < $columnCount$$2$$;$j$$3$$ += 1) {
    $columnIndex$$1_row$$inline_758_width$$16$$ = $isAppend$$2$$ || $isRowFetch$$ ? $columnStart$$4$$ + $j$$3$$ : $columnStart$$4$$ + ($columnCount$$2$$ - 1 - $j$$3$$);
    $indexes$$5_indexes$$inline_748_inlineStyle$$3_inlineStyleClass_prop$$inline_753$$ = {row:$rowIndex$$1$$, column:$columnIndex$$1_row$$inline_758_width$$16$$};
    $cellData_content$$2_rowExpander$$inline_756$$ = $cellSet$$4$$.getData($indexes$$5_indexes$$inline_748_inlineStyle$$3_inlineStyleClass_prop$$inline_753$$);
    $cellMetadata_metadata$$inline_750$$ = $cellSet$$4$$.getMetadata($indexes$$5_indexes$$inline_748_inlineStyle$$3_inlineStyleClass_prop$$inline_753$$);
    $JSCompiler_StaticMethods__processRowExpander$self$$inline_755_cell$$ = window.document.createElement("div");
    $JSCompiler_StaticMethods__processRowExpander$self$$inline_755_cell$$.setAttribute("tabIndex", -1);
    $JSCompiler_StaticMethods_createCellContext$self$$inline_747_cell$$inline_757_cellContext$$1_index$$inline_759$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$;
    $cellStyleClass_data$$inline_749$$ = $cellData_content$$2_rowExpander$$inline_756$$;
    var $cellContext$$inline_752$$ = D.$JSCompiler_alias_VOID$$, $cellContext$$inline_752$$ = {};
    $cellContext$$inline_752$$.parentElement = $JSCompiler_StaticMethods__processRowExpander$self$$inline_755_cell$$;
    $cellContext$$inline_752$$.indexes = $indexes$$5_indexes$$inline_748_inlineStyle$$3_inlineStyleClass_prop$$inline_753$$;
    $cellContext$$inline_752$$.data = $cellStyleClass_data$$inline_749$$;
    $cellContext$$inline_752$$.component = $JSCompiler_StaticMethods_createCellContext$self$$inline_747_cell$$inline_757_cellContext$$1_index$$inline_759$$;
    $cellContext$$inline_752$$.datasource = $JSCompiler_StaticMethods_createCellContext$self$$inline_747_cell$$inline_757_cellContext$$1_index$$inline_759$$.$m_dataSource$;
    $indexes$$5_indexes$$inline_748_inlineStyle$$3_inlineStyleClass_prop$$inline_753$$ = D.$JSCompiler_alias_VOID$$;
    for($indexes$$5_indexes$$inline_748_inlineStyle$$3_inlineStyleClass_prop$$inline_753$$ in $cellMetadata_metadata$$inline_750$$) {
      $cellMetadata_metadata$$inline_750$$.hasOwnProperty($indexes$$5_indexes$$inline_748_inlineStyle$$3_inlineStyleClass_prop$$inline_753$$) && ($cellContext$$inline_752$$[$indexes$$5_indexes$$inline_748_inlineStyle$$3_inlineStyleClass_prop$$inline_753$$] = $cellMetadata_metadata$$inline_750$$[$indexes$$5_indexes$$inline_748_inlineStyle$$3_inlineStyleClass_prop$$inline_753$$])
    }
    $JSCompiler_StaticMethods_createCellContext$self$$inline_747_cell$$inline_757_cellContext$$1_index$$inline_759$$.$m_createContextCallback$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_createCellContext$self$$inline_747_cell$$inline_757_cellContext$$1_index$$inline_759$$.$m_createContextCallback$.call($JSCompiler_StaticMethods_createCellContext$self$$inline_747_cell$$inline_757_cellContext$$1_index$$inline_759$$, $cellContext$$inline_752$$);
    $JSCompiler_StaticMethods_createCellContext$self$$inline_747_cell$$inline_757_cellContext$$1_index$$inline_759$$ = $cellContext$$inline_752$$;
    $row$$5$$.hasAttribute($keyAttribute$$) || $row$$5$$.setAttribute($keyAttribute$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_747_cell$$inline_757_cellContext$$1_index$$inline_759$$.keys.row);
    $indexes$$5_indexes$$inline_748_inlineStyle$$3_inlineStyleClass_prop$$inline_753$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getInlineStyle$("cell", $JSCompiler_StaticMethods_createCellContext$self$$inline_747_cell$$inline_757_cellContext$$1_index$$inline_759$$);
    $indexes$$5_indexes$$inline_748_inlineStyle$$3_inlineStyleClass_prop$$inline_753$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__processRowExpander$self$$inline_755_cell$$.style.cssText = $indexes$$5_indexes$$inline_748_inlineStyle$$3_inlineStyleClass_prop$$inline_753$$);
    if("hidden" === $verticalGridlines$$2$$ || $columnIndex$$1_row$$inline_758_width$$16$$ === $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_dataSource$.getCount("column") - 1) {
      "left" === $dir$$5$$ ? $JSCompiler_StaticMethods__processRowExpander$self$$inline_755_cell$$.style.borderRight = "none" : $JSCompiler_StaticMethods__processRowExpander$self$$inline_755_cell$$.style.borderLeftStyle = "none"
    }
    if("hidden" === $horizontalGridlines$$2$$ || $rowIndex$$1$$ === $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_dataSource$.getCount("row") - 1) {
      $JSCompiler_StaticMethods__processRowExpander$self$$inline_755_cell$$.style.borderBottomStyle = "none"
    }
    $cellStyleClass_data$$inline_749$$ = 1 === window.Math.floor($columnIndex$$1_row$$inline_758_width$$16$$ / $columnBandingInterval$$2$$) % 2 ? $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("cell") + " " + $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("banded") : $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("cell");
    $indexes$$5_indexes$$inline_748_inlineStyle$$3_inlineStyleClass_prop$$inline_753$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getStyleClass$("cell", $JSCompiler_StaticMethods_createCellContext$self$$inline_747_cell$$inline_757_cellContext$$1_index$$inline_759$$);
    $JSCompiler_StaticMethods__processRowExpander$self$$inline_755_cell$$.className = $indexes$$5_indexes$$inline_748_inlineStyle$$3_inlineStyleClass_prop$$inline_753$$ != D.$JSCompiler_alias_NULL$$ ? $cellStyleClass_data$$inline_749$$ + " " + $indexes$$5_indexes$$inline_748_inlineStyle$$3_inlineStyleClass_prop$$inline_753$$ : $cellStyleClass_data$$inline_749$$;
    $JSCompiler_StaticMethods__processRowExpander$self$$inline_755_cell$$.style.height = "100%";
    $columnIndex$$1_row$$inline_758_width$$16$$ = (0,D.$JSCompiler_StaticMethods_getColumnWidth$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $JSCompiler_StaticMethods__processRowExpander$self$$inline_755_cell$$, $columnIndex$$1_row$$inline_758_width$$16$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_747_cell$$inline_757_cellContext$$1_index$$inline_759$$.keys.column);
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods__processRowExpander$self$$inline_755_cell$$, $columnIndex$$1_row$$inline_758_width$$16$$);
    $isAppend$$2$$ || $isRowFetch$$ ? (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__processRowExpander$self$$inline_755_cell$$, $currentLeft$$1$$, $dir$$5$$) : (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__processRowExpander$self$$inline_755_cell$$, $currentLeft$$1$$ - $columnIndex$$1_row$$inline_758_width$$16$$, $dir$$5$$);
    $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_root$.appendChild($JSCompiler_StaticMethods__processRowExpander$self$$inline_755_cell$$);
    $renderer$$4$$ != D.$JSCompiler_alias_NULL$$ ? ($cellData_content$$2_rowExpander$$inline_756$$ = $renderer$$4$$.call($JSCompiler_StaticMethods_addCellsToRow$self$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_747_cell$$inline_757_cellContext$$1_index$$inline_759$$), $cellData_content$$2_rowExpander$$inline_756$$ != D.$JSCompiler_alias_NULL$$ && ($cellData_content$$2_rowExpander$$inline_756$$.parentNode === D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods__processRowExpander$self$$inline_755_cell$$.appendChild($cellData_content$$2_rowExpander$$inline_756$$) : 
    $cellData_content$$2_rowExpander$$inline_756$$.parentNode == D.$JSCompiler_alias_NULL$$ && $cellData_content$$2_rowExpander$$inline_756$$.toString && $JSCompiler_StaticMethods__processRowExpander$self$$inline_755_cell$$.appendChild(window.document.createTextNode($cellData_content$$2_rowExpander$$inline_756$$.toString())))) : ($cellData_content$$2_rowExpander$$inline_756$$ == D.$JSCompiler_alias_NULL$$ && ($cellData_content$$2_rowExpander$$inline_756$$ = ""), $JSCompiler_StaticMethods__processRowExpander$self$$inline_755_cell$$.appendChild(window.document.createTextNode($cellData_content$$2_rowExpander$$inline_756$$.toString())));
    $isAppend$$2$$ || $isRowFetch$$ ? ($row$$5$$.appendChild($JSCompiler_StaticMethods__processRowExpander$self$$inline_755_cell$$), $currentLeft$$1$$ += $columnIndex$$1_row$$inline_758_width$$16$$) : ($row$$5$$.insertBefore($JSCompiler_StaticMethods__processRowExpander$self$$inline_755_cell$$, $firstColumn$$), $firstColumn$$ = $JSCompiler_StaticMethods__processRowExpander$self$$inline_755_cell$$, $currentLeft$$1$$ -= $columnIndex$$1_row$$inline_758_width$$16$$);
    $updateColumnRangeInfo$$ && ($isAppend$$2$$ || $isRowFetch$$ ? $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_endColPixel$ += $columnIndex$$1_row$$inline_758_width$$16$$ : $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startColPixel$ -= $columnIndex$$1_row$$inline_758_width$$16$$, $totalWidth$$ += $columnIndex$$1_row$$inline_758_width$$16$$);
    $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_currentRowExpander$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__processRowExpander$self$$inline_755_cell$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$, $cellData_content$$2_rowExpander$$inline_756$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_currentRowExpander$, $JSCompiler_StaticMethods_createCellContext$self$$inline_747_cell$$inline_757_cellContext$$1_index$$inline_759$$ = $columnIndex$$1_row$$inline_758_width$$16$$ = 
    $JSCompiler_StaticMethods_createCellContext$self$$inline_747_cell$$inline_757_cellContext$$1_index$$inline_759$$ = D.$JSCompiler_alias_VOID$$, $cellData_content$$2_rowExpander$$inline_756$$.setAttribute($JSCompiler_StaticMethods__processRowExpander$self$$inline_755_cell$$.$getResources$().getMappedAttribute("expander"), "true"), $cellData_content$$2_rowExpander$$inline_756$$.firstChild.getAttribute("aria-expanded") !== D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_createCellContext$self$$inline_747_cell$$inline_757_cellContext$$1_index$$inline_759$$ = 
    (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods__processRowExpander$self$$inline_755_cell$$, $cellData_content$$2_rowExpander$$inline_756$$), $columnIndex$$1_row$$inline_758_width$$16$$ = $JSCompiler_StaticMethods_createCellContext$self$$inline_747_cell$$inline_757_cellContext$$1_index$$inline_759$$.parentNode, $JSCompiler_StaticMethods_createCellContext$self$$inline_747_cell$$inline_757_cellContext$$1_index$$inline_759$$ = window.Array.prototype.indexOf.call($columnIndex$$1_row$$inline_758_width$$16$$.childNodes, 
    $JSCompiler_StaticMethods_createCellContext$self$$inline_747_cell$$inline_757_cellContext$$1_index$$inline_759$$), $columnIndex$$1_row$$inline_758_width$$16$$.setAttribute($JSCompiler_StaticMethods__processRowExpander$self$$inline_755_cell$$.$getResources$().getMappedAttribute("expanderIndex"), $JSCompiler_StaticMethods_createCellContext$self$$inline_747_cell$$inline_757_cellContext$$1_index$$inline_759$$), $columnIndex$$1_row$$inline_758_width$$16$$.setAttribute("aria-expanded", "true" == $cellData_content$$2_rowExpander$$inline_756$$.firstChild.getAttribute("aria-expanded"))), 
    $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_currentRowExpander$ = D.$JSCompiler_alias_NULL$$)
  }
  return $updateColumnRangeInfo$$ && 0 < $columnCount$$2$$ ? $totalWidth$$ / $columnCount$$2$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtDataGrid$$.prototype.$handleCellsFetchError$ = function $$DvtDataGrid$$$$$handleCellsFetchError$$() {
  this.$m_fetching$.cells = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_showStatusText$$ = function $$JSCompiler_StaticMethods_showStatusText$$$($JSCompiler_StaticMethods_showStatusText$self$$) {
  var $left$$3_msg$$;
  $left$$3_msg$$ = $JSCompiler_StaticMethods_showStatusText$self$$.$getResources$().getTranslatedText("fetching");
  "block" != $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.style.display && ($JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.innerHTML = $left$$3_msg$$, $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.style.display = "block", $left$$3_msg$$ = $JSCompiler_StaticMethods_showStatusText$self$$.getWidth() / 2 - $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.offsetWidth / 2, $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.style.left = $left$$3_msg$$ + 
  "px")
};
D.$JSCompiler_StaticMethods_hideStatusText$$ = function $$JSCompiler_StaticMethods_hideStatusText$$$($JSCompiler_StaticMethods_hideStatusText$self$$) {
  $JSCompiler_StaticMethods_hideStatusText$self$$.$m_status$.style.display = "none"
};
D.$DvtDataGrid$$.prototype.$handleScroll$ = function $$DvtDataGrid$$$$$handleScroll$$($event$$4_scrollLeft$$) {
  var $scroller$$9$$;
  $event$$4_scrollLeft$$ || ($event$$4_scrollLeft$$ = window.event);
  $scroller$$9$$ = $event$$4_scrollLeft$$.target ? $event$$4_scrollLeft$$.target : $event$$4_scrollLeft$$.srcElement;
  $event$$4_scrollLeft$$ = (0,D.$JSCompiler_StaticMethods_getElementScrollLeft$$)(this.$m_utils$, $scroller$$9$$);
  this.scrollTo($event$$4_scrollLeft$$, $scroller$$9$$.scrollTop)
};
D.$JSCompiler_StaticMethods_scrollDelta$$ = function $$JSCompiler_StaticMethods_scrollDelta$$$($JSCompiler_StaticMethods_scrollDelta$self$$, $deltaX_diff$$, $deltaY$$) {
  var $scrollLeft$$1$$, $scrollTop$$1$$, $scrollerScrollLeft$$, $scrollerScrollTop$$;
  0 != $deltaX_diff$$ && 0 != $deltaY$$ && ($deltaX_diff$$ > $deltaY$$ ? $deltaY$$ = 0 : $deltaX_diff$$ = 0);
  $scrollLeft$$1$$ = $JSCompiler_StaticMethods_scrollDelta$self$$.$m_currentScrollLeft$ - $deltaX_diff$$;
  $scrollTop$$1$$ = $JSCompiler_StaticMethods_scrollDelta$self$$.$m_currentScrollTop$ - $deltaY$$;
  (0,D.$JSCompiler_StaticMethods_setElementScrollLeft$$)($JSCompiler_StaticMethods_scrollDelta$self$$.$m_utils$, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scroller$, window.Math.max(0, window.Math.min((0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_scrollDelta$self$$, "column") ? window.Number.MAX_VALUE : $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scrollWidth$, $scrollLeft$$1$$)));
  $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scroller$.scrollTop = window.Math.max(0, window.Math.min((0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_scrollDelta$self$$, "row") ? window.Number.MAX_VALUE : $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scrollHeight$, $scrollTop$$1$$));
  $JSCompiler_StaticMethods_scrollDelta$self$$.$m_utils$.$isTouchDevice$() && ($scrollerScrollTop$$ = $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scroller$.scrollTop, $scrollerScrollLeft$$ = (0,D.$JSCompiler_StaticMethods_getElementScrollLeft$$)($JSCompiler_StaticMethods_scrollDelta$self$$.$m_utils$, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scroller$), 0 != $deltaY$$ && $scrollTop$$1$$ != $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scroller$.scrollTop ? ($deltaX_diff$$ = $scrollTop$$1$$ - 
  $scrollerScrollTop$$, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_extraScrollOverY$ = 0 < $deltaX_diff$$ ? window.Math.min(50, $deltaX_diff$$) : window.Math.max(-50, $deltaX_diff$$)) : 0 != $deltaX_diff$$ && $scrollLeft$$1$$ != $scrollerScrollLeft$$ && ($deltaX_diff$$ = $scrollLeft$$1$$ - $scrollerScrollLeft$$, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_extraScrollOverX$ = 0 < $deltaX_diff$$ ? window.Math.min(50, $deltaX_diff$$) : window.Math.max(-50, $deltaX_diff$$)))
};
D.$DvtDataGrid$$.prototype.scrollTo = function $$DvtDataGrid$$$$scrollTo$($scrollLeft$$3$$, $scrollTop$$3$$) {
  this.$m_currentScrollLeft$ = $scrollLeft$$3$$;
  this.$m_currentScrollTop$ = $scrollTop$$3$$;
  $scrollLeft$$3$$ + (0,D.$JSCompiler_StaticMethods_getViewportWidth$$)(this) < this.$m_startColPixel$ || $scrollLeft$$3$$ > this.$m_endColPixel$ || $scrollTop$$3$$ + (0,D.$JSCompiler_StaticMethods_getViewportHeight$$)(this) < this.$m_startRowPixel$ || $scrollTop$$3$$ > this.$m_endRowPixel$ ? (0,D.$JSCompiler_StaticMethods_handleLongScroll$$)(this, $scrollLeft$$3$$, $scrollTop$$3$$) : (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, $scrollLeft$$3$$, $scrollTop$$3$$);
  var $scrollerContent$$inline_767_viewportRight$$inline_764$$;
  $scrollerContent$$inline_767_viewportRight$$inline_764$$ = $scrollLeft$$3$$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_databody$);
  if(this.$m_endRowPixel$ < $scrollTop$$3$$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_databody$) || this.$m_startRowPixel$ > $scrollTop$$3$$ || this.$m_endColPixel$ < $scrollerContent$$inline_767_viewportRight$$inline_764$$ - 2 || this.$m_startColPixel$ > $scrollLeft$$3$$) {
    this.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_TRUE$$
  }else {
    this.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_FALSE$$;
    (0,D.$JSCompiler_StaticMethods__syncScroller$$)(this);
    var $scrollerContentHeight$$inline_768$$, $scrollerContentWidth$$inline_769$$, $databodyContent$$inline_770$$;
    $scrollerContent$$inline_767_viewportRight$$inline_764$$ = this.$m_scroller$.firstChild;
    $scrollerContentHeight$$inline_768$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($scrollerContent$$inline_767_viewportRight$$inline_764$$);
    $scrollerContentWidth$$inline_769$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($scrollerContent$$inline_767_viewportRight$$inline_764$$);
    $databodyContent$$inline_770$$ = this.$m_databody$.firstChild;
    if(this.$m_endRowPixel$ > $scrollerContentHeight$$inline_768$$ || this.$m_dataSource$.getCount("row") == this.$m_endRow$ && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && this.$m_endRowPixel$ < $scrollerContentHeight$$inline_768$$) {
      (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($scrollerContent$$inline_767_viewportRight$$inline_764$$, this.$m_endRowPixel$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent$$inline_770$$, this.$m_endRowPixel$)
    }
    if(this.$m_endColPixel$ > $scrollerContentWidth$$inline_769$$ || this.$m_dataSource$.getCount("column") == this.$m_endCol$ && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && this.$m_endColPixel$ < $scrollerContentWidth$$inline_769$$) {
      (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($scrollerContent$$inline_767_viewportRight$$inline_764$$, this.$m_endColPixel$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databodyContent$$inline_770$$, this.$m_endColPixel$)
    }
    this.$m_cellToFocus$ != D.$JSCompiler_alias_NULL$$ && (this.$m_cellToFocus$.focus(), this.$m_cellToFocus$ = D.$JSCompiler_alias_NULL$$)
  }
};
D.$DvtDataGrid$$.prototype.$_bounceBack$ = function $$DvtDataGrid$$$$$_bounceBack$$() {
  var $scrollLeft$$4$$, $scrollTop$$4$$, $databody$$6$$, $colHeader$$3$$, $rowHeader$$5$$;
  $scrollLeft$$4$$ = this.$m_currentScrollLeft$;
  $scrollTop$$4$$ = this.$m_currentScrollTop$;
  $databody$$6$$ = this.$m_databody$.firstChild;
  $colHeader$$3$$ = this.$m_colHeader$.firstChild;
  $rowHeader$$5$$ = this.$m_rowHeader$.firstChild;
  $databody$$6$$.removeEventListener("webkitTransitionEnd", this.$m_bounceBack$);
  this.$getResources$().isRTLMode() ? ($databody$$6$$.style.webkitTransform = "translate3d(" + $scrollLeft$$4$$ + "px, " + -$scrollTop$$4$$ + "px, 0)", $colHeader$$3$$.style.webkitTransform = "translate3d(" + $scrollLeft$$4$$ + "px, 0, 0)") : ($databody$$6$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$4$$ + "px, " + -$scrollTop$$4$$ + "px, 0)", $colHeader$$3$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$4$$ + "px, 0, 0)");
  $rowHeader$$5$$.style.webkitTransform = "translate3d(0, " + -$scrollTop$$4$$ + "px, 0)";
  this.$m_extraScrollOverY$ = this.$m_extraScrollOverX$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__syncScroller$$ = function $$JSCompiler_StaticMethods__syncScroller$$$($JSCompiler_StaticMethods__syncScroller$self_dir$$7$$) {
  var $scrollLeft$$5$$, $scrollTop$$5$$, $databody$$7$$, $colHeader$$4$$, $rowHeader$$6$$;
  $scrollLeft$$5$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_currentScrollLeft$;
  $scrollTop$$5$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_currentScrollTop$;
  $databody$$7$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_databody$.firstChild;
  $colHeader$$4$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_colHeader$.firstChild;
  $rowHeader$$6$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_rowHeader$.firstChild;
  if($JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_utils$.$isTouchDevice$() && window.hasOwnProperty("WebKitCSSMatrix") && (new window.WebKitCSSMatrix).hasOwnProperty("m11")) {
    if($JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_extraScrollOverX$ != D.$JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_extraScrollOverY$ != D.$JSCompiler_alias_NULL$$) {
      $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_extraScrollOverX$ != D.$JSCompiler_alias_NULL$$ ? $scrollLeft$$5$$ += $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_extraScrollOverX$ : $scrollTop$$5$$ += $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_extraScrollOverY$, $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_bounceBack$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_bounceBack$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$_bounceBack$.bind($JSCompiler_StaticMethods__syncScroller$self_dir$$7$$)), 
      $databody$$7$$.addEventListener("webkitTransitionEnd", $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$m_bounceBack$)
    }
    $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$getResources$().isRTLMode() ? ($databody$$7$$.style.webkitTransform = "translate3d(" + $scrollLeft$$5$$ + "px, " + -$scrollTop$$5$$ + "px, 0)", $colHeader$$4$$.style.webkitTransform = "translate3d(" + $scrollLeft$$5$$ + "px, 0, 0)") : ($databody$$7$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$5$$ + "px, " + -$scrollTop$$5$$ + "px, 0)", $colHeader$$4$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$5$$ + "px, 0, 0)");
    $rowHeader$$6$$.style.webkitTransform = "translate3d(0, " + -$scrollTop$$5$$ + "px, 0)"
  }else {
    $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$.$getResources$().isRTLMode() ? "right" : "left", (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$7$$, -$scrollLeft$$5$$, $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$7$$, -$scrollTop$$5$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($colHeader$$4$$, -$scrollLeft$$5$$, $JSCompiler_StaticMethods__syncScroller$self_dir$$7$$), 
    (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$6$$, -$scrollTop$$5$$, "top")
  }
};
D.$JSCompiler_StaticMethods_handleLongScroll$$ = function $$JSCompiler_StaticMethods_handleLongScroll$$$($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$6_startCol$$, $scrollTop$$6_startRow$$) {
  var $startRowPixel$$, $startColPixel$$;
  $scrollTop$$6_startRow$$ = window.Math.round(window.Math.max(0, $scrollTop$$6_startRow$$ - $JSCompiler_StaticMethods_handleLongScroll$self$$.getHeight() / 2) / $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgRowHeight$);
  $scrollLeft$$6_startCol$$ = window.Math.round(window.Math.max(0, $scrollLeft$$6_startCol$$ - $JSCompiler_StaticMethods_handleLongScroll$self$$.getWidth() / 2) / $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgColWidth$);
  $startRowPixel$$ = $scrollTop$$6_startRow$$ * $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgRowHeight$;
  $startColPixel$$ = $scrollLeft$$6_startCol$$ * $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgColWidth$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRow$ = $scrollTop$$6_startRow$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRow$ = $scrollTop$$6_startRow$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRowHeader$ = $scrollTop$$6_startRow$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRowHeader$ = $scrollTop$$6_startRow$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRowPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRowPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRowHeaderPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRowHeaderPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startCol$ = $scrollLeft$$6_startCol$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endCol$ = $scrollLeft$$6_startCol$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startColHeader$ = $scrollLeft$$6_startCol$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endColHeader$ = $scrollLeft$$6_startCol$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startColPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endColPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startColHeaderPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endColHeaderPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.fetchHeaders("row", $scrollTop$$6_startRow$$, $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_rowHeader$, D.$JSCompiler_alias_VOID$$, {success:function($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$6_startCol$$) {
    (0,D.$JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$)(this, $JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$6_startCol$$, $startRowPixel$$)
  }});
  $JSCompiler_StaticMethods_handleLongScroll$self$$.fetchHeaders("column", $scrollLeft$$6_startCol$$, $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_colHeader$, D.$JSCompiler_alias_VOID$$, {success:function($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$6_startCol$$) {
    this.$m_colHeader$.firstChild.innerHTML = "";
    this.$handleHeadersFetchSuccess$($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$6_startCol$$)
  }});
  $JSCompiler_StaticMethods_handleLongScroll$self$$.fetchCells($JSCompiler_StaticMethods_handleLongScroll$self$$.$m_databody$, $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_scroller$, $scrollTop$$6_startRow$$, $scrollLeft$$6_startCol$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {success:function($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$6_startCol$$) {
    (0,D.$JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$)(this, $JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$6_startCol$$, $startRowPixel$$)
  }})
};
D.$JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$ = function $$JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$$($JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$, $headerSet$$4$$, $headerRange$$7$$, $startRowPixel$$1$$) {
  var $headerContent$$ = $JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$.$m_rowHeader$.firstChild;
  window.headerResizer = $headerContent$$.firstChild.cloneNode();
  $headerContent$$.innerHTML = "";
  $headerContent$$.appendChild(window.headerResizer);
  (0,D.$JSCompiler_StaticMethods_setElementHeight$$)(window.headerResizer, $startRowPixel$$1$$);
  $JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$.$handleHeadersFetchSuccess$($headerSet$$4$$, $headerRange$$7$$)
};
D.$JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$ = function $$JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$$($JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$, $cellSet$$6$$, $cellRange$$6$$, $startRowPixel$$2$$) {
  window.databodyContent = $JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$.$m_databody$.firstChild;
  window.databodyResizer = window.databodyContent.firstChild.cloneNode();
  window.databodyContent.innerHTML = "";
  window.databodyContent.appendChild(window.databodyResizer);
  (0,D.$JSCompiler_StaticMethods_setElementHeight$$)(window.databodyResizer, $startRowPixel$$2$$);
  $JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$.$handleCellsFetchSuccess$($cellSet$$6$$, $cellRange$$6$$)
};
D.$JSCompiler_StaticMethods_fillViewport$$ = function $$JSCompiler_StaticMethods_fillViewport$$$($JSCompiler_StaticMethods_fillViewport$self$$, $fetchStartRow$$inline_835_rows$$inline_793_scrollLeft$$7_threshold$$inline_807_viewportBottom$$2$$, $fetchSize$$inline_834_scrollTop$$7$$) {
  var $columns$$inline_808_fetchStartRow_indexToRemove$$inline_794_rowHeaderContent$$inline_817_rowHeaderContent$$inline_826_viewportRight$$2$$, $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$, $colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$;
  $columns$$inline_808_fetchStartRow_indexToRemove$$inline_794_rowHeaderContent$$inline_817_rowHeaderContent$$inline_826_viewportRight$$2$$ = $fetchStartRow$$inline_835_rows$$inline_793_scrollLeft$$7_threshold$$inline_807_viewportBottom$$2$$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$);
  if($columns$$inline_808_fetchStartRow_indexToRemove$$inline_794_rowHeaderContent$$inline_817_rowHeaderContent$$inline_826_viewportRight$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ || $columns$$inline_808_fetchStartRow_indexToRemove$$inline_794_rowHeaderContent$$inline_817_rowHeaderContent$$inline_826_viewportRight$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ && (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, 
  "column") && !$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnHeaderFetch$) {
    if($JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("column", $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$) {
      var $column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$, $column$$inline_799_height$$inline_822_left$$inline_777_row$$inline_813_width$$inline_789$$, $i$$inline_779_prevLeft$$inline_800$$, $header$$inline_781$$, $prevLeft$$inline_782$$;
      $colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$.firstChild;
      $column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$ = $colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$.childNodes;
      for($i$$inline_779_prevLeft$$inline_800$$ = $column$$inline_799_height$$inline_822_left$$inline_777_row$$inline_813_width$$inline_789$$ = $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$ = 0;$i$$inline_779_prevLeft$$inline_800$$ < $column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$.length;$i$$inline_779_prevLeft$$inline_800$$ += 
      1) {
        if($header$$inline_781$$ = $column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$[$i$$inline_779_prevLeft$$inline_800$$], $prevLeft$$inline_782$$ = $column$$inline_799_height$$inline_822_left$$inline_777_row$$inline_813_width$$inline_789$$, $column$$inline_799_height$$inline_822_left$$inline_777_row$$inline_813_width$$inline_789$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($header$$inline_781$$, "left"), 
        $column$$inline_799_height$$inline_822_left$$inline_777_row$$inline_813_width$$inline_789$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ - 0) {
          $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$ = $i$$inline_779_prevLeft$$inline_800$$ - 1;
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ += $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$;
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeaderPixel$ = $prevLeft$$inline_782$$;
          break
        }
      }
      for($column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$ = 0;$column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$ < $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$;$column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$ += 
      1) {
        $colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$.removeChild($colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$.firstChild), $JSCompiler_StaticMethods_fillViewport$self$$.$m_cachedColumnWidth$.splice(0, 1)
      }
      $JSCompiler_StaticMethods_fillViewport$self$$.$m_cachedColumnWidthStartIndex$ += $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$
    }
  }else {
    if($fetchStartRow$$inline_835_rows$$inline_793_scrollLeft$$7_threshold$$inline_807_viewportBottom$$2$$ < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeaderPixel$ && ($column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, 
    "column")), $colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ - $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$), $JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("column", 
    $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$, $colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && ($colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$.firstChild, $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$ = 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getViewportWidth$$)($JSCompiler_StaticMethods_fillViewport$self$$) + 0, !($JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ <= $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$)))) {
      $column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$ = $colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$.lastChild;
      for($column$$inline_799_height$$inline_822_left$$inline_777_row$$inline_813_width$$inline_789$$ = $column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$.offsetWidth;$JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ + $column$$inline_799_height$$inline_822_left$$inline_777_row$$inline_813_width$$inline_789$$ > $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$;) {
        $colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$.removeChild($column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$), $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ -= $column$$inline_799_height$$inline_822_left$$inline_777_row$$inline_813_width$$inline_789$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ -= 
        1, $column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$ = $colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$.lastChild, $column$$inline_799_height$$inline_822_left$$inline_777_row$$inline_813_width$$inline_789$$ = $column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$.offsetWidth
      }
    }
  }
  if($columns$$inline_808_fetchStartRow_indexToRemove$$inline_794_rowHeaderContent$$inline_817_rowHeaderContent$$inline_826_viewportRight$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ || $columns$$inline_808_fetchStartRow_indexToRemove$$inline_794_rowHeaderContent$$inline_817_rowHeaderContent$$inline_826_viewportRight$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ && (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, 
  "column") && !$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnFetch$) {
    if($JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && ($fetchStartRow$$inline_835_rows$$inline_793_scrollLeft$$7_threshold$$inline_807_viewportBottom$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$.firstChild.childNodes, $colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$ = 
    $columns$$inline_808_fetchStartRow_indexToRemove$$inline_794_rowHeaderContent$$inline_817_rowHeaderContent$$inline_826_viewportRight$$2$$ = 0, !(2 > $fetchStartRow$$inline_835_rows$$inline_793_scrollLeft$$7_threshold$$inline_807_viewportBottom$$2$$.length))) {
      $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$ = $fetchStartRow$$inline_835_rows$$inline_793_scrollLeft$$7_threshold$$inline_807_viewportBottom$$2$$[1].childNodes;
      for($column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$ = 0;$column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$ < $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$.length;$column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$ += 
      1) {
        if($column$$inline_799_height$$inline_822_left$$inline_777_row$$inline_813_width$$inline_789$$ = $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$[$column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$], $i$$inline_779_prevLeft$$inline_800$$ = $colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$, 
        $colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($column$$inline_799_height$$inline_822_left$$inline_777_row$$inline_813_width$$inline_789$$, "left"), $colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ - 
        0) {
          $columns$$inline_808_fetchStartRow_indexToRemove$$inline_794_rowHeaderContent$$inline_817_rowHeaderContent$$inline_826_viewportRight$$2$$ = $column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$ - 1;
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ += $columns$$inline_808_fetchStartRow_indexToRemove$$inline_794_rowHeaderContent$$inline_817_rowHeaderContent$$inline_826_viewportRight$$2$$;
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColPixel$ = $i$$inline_779_prevLeft$$inline_800$$;
          break
        }
      }
      for($colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$ = 1;$colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$ < $fetchStartRow$$inline_835_rows$$inline_793_scrollLeft$$7_threshold$$inline_807_viewportBottom$$2$$.length;$colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$ += 
      1) {
        $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$ = $fetchStartRow$$inline_835_rows$$inline_793_scrollLeft$$7_threshold$$inline_807_viewportBottom$$2$$[$colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$];
        for($column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$ = 0;$column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$ < $columns$$inline_808_fetchStartRow_indexToRemove$$inline_794_rowHeaderContent$$inline_817_rowHeaderContent$$inline_826_viewportRight$$2$$;$column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$ += 
        1) {
          $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$.removeChild($column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$.firstChild)
        }
      }
    }
  }else {
    if($fetchStartRow$$inline_835_rows$$inline_793_scrollLeft$$7_threshold$$inline_807_viewportBottom$$2$$ < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColPixel$ && ($column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, 
    "column")), $colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ - $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$), $JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$, $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$, $colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$), 
    !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && ($colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$.firstChild.childNodes, 
    $fetchStartRow$$inline_835_rows$$inline_793_scrollLeft$$7_threshold$$inline_807_viewportBottom$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getViewportWidth$$)($JSCompiler_StaticMethods_fillViewport$self$$) + 0, !($JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ <= $fetchStartRow$$inline_835_rows$$inline_793_scrollLeft$$7_threshold$$inline_807_viewportBottom$$2$$)))) {
      $columns$$inline_808_fetchStartRow_indexToRemove$$inline_794_rowHeaderContent$$inline_817_rowHeaderContent$$inline_826_viewportRight$$2$$ = $colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$[1];
      $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$ = $columns$$inline_808_fetchStartRow_indexToRemove$$inline_794_rowHeaderContent$$inline_817_rowHeaderContent$$inline_826_viewportRight$$2$$.lastChild;
      for($column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$ = $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$.offsetWidth;$JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ + $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$ > 
      $fetchStartRow$$inline_835_rows$$inline_793_scrollLeft$$7_threshold$$inline_807_viewportBottom$$2$$;) {
        for($column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$ = 1;$column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$ < $colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$.length;$column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$ += 
        1) {
          $column$$inline_799_height$$inline_822_left$$inline_777_row$$inline_813_width$$inline_789$$ = $colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$[$column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$], $column$$inline_799_height$$inline_822_left$$inline_777_row$$inline_813_width$$inline_789$$.removeChild($column$$inline_799_height$$inline_822_left$$inline_777_row$$inline_813_width$$inline_789$$.lastChild)
        }
        $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ -= $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$;
        $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ -= 1;
        $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$ = $columns$$inline_808_fetchStartRow_indexToRemove$$inline_794_rowHeaderContent$$inline_817_rowHeaderContent$$inline_826_viewportRight$$2$$.lastChild;
        $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$ = $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$.offsetWidth
      }
    }
  }
  $fetchStartRow$$inline_835_rows$$inline_793_scrollLeft$$7_threshold$$inline_807_viewportBottom$$2$$ = $fetchSize$$inline_834_scrollTop$$7$$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$);
  if($fetchStartRow$$inline_835_rows$$inline_793_scrollLeft$$7_threshold$$inline_807_viewportBottom$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ || $fetchStartRow$$inline_835_rows$$inline_793_scrollLeft$$7_threshold$$inline_807_viewportBottom$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ && (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, "row") && !$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopRowHeaderFetch$) {
    if($JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("row", $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && 
    ($columns$$inline_808_fetchStartRow_indexToRemove$$inline_794_rowHeaderContent$$inline_817_rowHeaderContent$$inline_826_viewportRight$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$.firstChild, $colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$ = $columns$$inline_808_fetchStartRow_indexToRemove$$inline_794_rowHeaderContent$$inline_817_rowHeaderContent$$inline_826_viewportRight$$2$$.firstChild, 
    $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$), !($column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$ >= 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollTop$ - 0))) {
      $column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$ = $colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$.nextSibling;
      for($column$$inline_799_height$$inline_822_left$$inline_777_row$$inline_813_width$$inline_789$$ = $column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$.offsetHeight;$column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$ + $column$$inline_799_height$$inline_822_left$$inline_777_row$$inline_813_width$$inline_789$$ < 
      $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollTop$ - 0;) {
        $columns$$inline_808_fetchStartRow_indexToRemove$$inline_794_rowHeaderContent$$inline_817_rowHeaderContent$$inline_826_viewportRight$$2$$.removeChild($column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$), $JSCompiler_StaticMethods_fillViewport$self$$.$m_cachedRowHeight$.splice(0, 1), $JSCompiler_StaticMethods_fillViewport$self$$.$m_cachedRowHeightStartIndex$ -= 1, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeaderPixel$ += 
        $column$$inline_799_height$$inline_822_left$$inline_777_row$$inline_813_width$$inline_789$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ += 1, $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$ += $column$$inline_799_height$$inline_822_left$$inline_777_row$$inline_813_width$$inline_789$$, $column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$ = 
        $colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$.nextSibling, $column$$inline_799_height$$inline_822_left$$inline_777_row$$inline_813_width$$inline_789$$ = $column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$.offsetHeight
      }
      (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$, $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$)
    }
  }else {
    if(window.Math.max(0, $fetchSize$$inline_834_scrollTop$$7$$ - 0) < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeaderPixel$) {
      if(0 == $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$) {
        return
      }
      $columns$$inline_808_fetchStartRow_indexToRemove$$inline_794_rowHeaderContent$$inline_817_rowHeaderContent$$inline_826_viewportRight$$2$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, "row"));
      $colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ - $columns$$inline_808_fetchStartRow_indexToRemove$$inline_794_rowHeaderContent$$inline_817_rowHeaderContent$$inline_826_viewportRight$$2$$);
      $JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("row", $columns$$inline_808_fetchStartRow_indexToRemove$$inline_794_rowHeaderContent$$inline_817_rowHeaderContent$$inline_826_viewportRight$$2$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$, $colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$);
      if(!(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && ($columns$$inline_808_fetchStartRow_indexToRemove$$inline_794_rowHeaderContent$$inline_817_rowHeaderContent$$inline_826_viewportRight$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$.firstChild, 
      $colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getViewportHeight$$)($JSCompiler_StaticMethods_fillViewport$self$$) + 0, !($JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ <= $colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$))) {
        $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$ = $columns$$inline_808_fetchStartRow_indexToRemove$$inline_794_rowHeaderContent$$inline_817_rowHeaderContent$$inline_826_viewportRight$$2$$.lastChild;
        for($column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$ = $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$.offsetHeight;$JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ + $column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$ > 
        $colHeaderContent$$inline_774_colHeaderContent$$inline_786_fetchSize$$1_j$$inline_801_left$$inline_795_resizer$$inline_818_rows$$inline_811_threshold$$inline_827$$;) {
          $columns$$inline_808_fetchStartRow_indexToRemove$$inline_794_rowHeaderContent$$inline_817_rowHeaderContent$$inline_826_viewportRight$$2$$.removeChild($column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$), $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ -= $column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$, 
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ -= 1, $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$ = $columns$$inline_808_fetchStartRow_indexToRemove$$inline_794_rowHeaderContent$$inline_817_rowHeaderContent$$inline_826_viewportRight$$2$$.lastChild, $column$$inline_788_header$$inline_821_headers$$inline_775_height$$inline_829_i$$inline_798_j$$inline_780_j$$inline_812_k$$inline_803$$ = 
          $column$$inline_809_columns$$inline_797_fetchStartCol_indexToRemove$$inline_776_resizerHeight$$inline_819_row$$inline_802_row$$inline_828_threshold$$inline_787_width$$inline_810$$.offsetHeight
        }
      }
    }
  }
  $fetchStartRow$$inline_835_rows$$inline_793_scrollLeft$$7_threshold$$inline_807_viewportBottom$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowPixel$ || $fetchStartRow$$inline_835_rows$$inline_793_scrollLeft$$7_threshold$$inline_807_viewportBottom$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowPixel$ && (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, "row") && !$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopRowFetch$ ? 
  ($JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && 
  $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowsFromTop$$)($JSCompiler_StaticMethods_fillViewport$self$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$)) : window.Math.max(0, $fetchSize$$inline_834_scrollTop$$7$$ - 0) < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowPixel$ && 0 != $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ && 
  ($fetchStartRow$$inline_835_rows$$inline_793_scrollLeft$$7_threshold$$inline_807_viewportBottom$$2$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, "row")), $fetchSize$$inline_834_scrollTop$$7$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ - $fetchStartRow$$inline_835_rows$$inline_793_scrollLeft$$7_threshold$$inline_807_viewportBottom$$2$$), 
  $JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $fetchStartRow$$inline_835_rows$$inline_793_scrollLeft$$7_threshold$$inline_807_viewportBottom$$2$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$, $fetchSize$$inline_834_scrollTop$$7$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && 
  $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowsFromBottom$$)($JSCompiler_StaticMethods_fillViewport$self$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$))
};
D.$JSCompiler_StaticMethods_removeRowsFromTop$$ = function $$JSCompiler_StaticMethods_removeRowsFromTop$$$($JSCompiler_StaticMethods_removeRowsFromTop$self$$, $databody$$10$$) {
  var $databodyContent$$6$$, $resizer$$3$$, $resizerHeight$$1$$, $row$$8$$, $height$$18$$;
  $databodyContent$$6$$ = $databody$$10$$.firstChild;
  $resizer$$3$$ = $databodyContent$$6$$.firstChild;
  $resizerHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($resizer$$3$$);
  if(!($resizerHeight$$1$$ >= $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_currentScrollTop$ - 0)) {
    $row$$8$$ = $resizer$$3$$.nextSibling;
    for($height$$18$$ = $row$$8$$.offsetHeight;$resizerHeight$$1$$ + $height$$18$$ < $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_currentScrollTop$ - 0;) {
      $databodyContent$$6$$.removeChild($row$$8$$);
      $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_startRowPixel$ += $height$$18$$;
      $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_startRow$ += 1;
      $resizerHeight$$1$$ += $height$$18$$;
      $row$$8$$ = $resizer$$3$$.nextSibling;
      if($row$$8$$ == D.$JSCompiler_alias_NULL$$) {
        break
      }
      $height$$18$$ = $row$$8$$.offsetHeight
    }
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($resizer$$3$$, $resizerHeight$$1$$)
  }
};
D.$JSCompiler_StaticMethods_removeRowsFromBottom$$ = function $$JSCompiler_StaticMethods_removeRowsFromBottom$$$($JSCompiler_StaticMethods_removeRowsFromBottom$self$$, $databody$$11$$) {
  var $databodyContent$$7$$, $threshold$$3$$, $row$$10$$, $height$$20$$;
  $databodyContent$$7$$ = $databody$$11$$.firstChild;
  $threshold$$3$$ = $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getViewportHeight$$)($JSCompiler_StaticMethods_removeRowsFromBottom$self$$) + 0;
  if(!($JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ > $threshold$$3$$)) {
    $row$$10$$ = $databodyContent$$7$$.lastChild;
    for($height$$20$$ = $row$$10$$.offsetHeight;$JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ + $height$$20$$ > $threshold$$3$$;) {
      $databodyContent$$7$$.removeChild($row$$10$$), $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ -= $height$$20$$, $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRow$ -= 1, $row$$10$$ = $databodyContent$$7$$.lastChild, $height$$20$$ = $row$$10$$.offsetHeight
    }
  }
};
D.$DvtDataGrid$$.prototype.$handleScrollerMouseDown$ = function $$DvtDataGrid$$$$$handleScrollerMouseDown$$() {
  this.$m_captureScrolling$ = D.$JSCompiler_alias_TRUE$$
};
D.$DvtDataGrid$$.prototype.$handleScrollerMouseUp$ = function $$DvtDataGrid$$$$$handleScrollerMouseUp$$() {
  this.$m_captureScrolling$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && this.$m_stopDatabodyScroll$ && (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$)
};
D.$DvtDataGrid$$.prototype.$handleContextMenuReturn$ = function $$DvtDataGrid$$$$$handleContextMenuReturn$$($event$$7$$, $direction$$4_id$$3$$, $value$$47$$) {
  var $target$$41$$, $cell$$1$$;
  $target$$41$$ = $event$$7$$.target;
  $cell$$1$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $target$$41$$);
  $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("resizeHeight") ? (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && ($target$$41$$ = $cell$$1$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $cell$$1$$, "row").firstChild : (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $target$$41$$), (0,D.$JSCompiler_StaticMethods_handleContextMenuResize$$)(this, $target$$41$$, "resizeHeight", $value$$47$$)) : $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("resizeWidth") ? 
  (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && ($target$$41$$ = $cell$$1$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $cell$$1$$, "column") : (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $target$$41$$), (0,D.$JSCompiler_StaticMethods_handleContextMenuResize$$)(this, $target$$41$$, "resizeWidth", $value$$47$$)) : $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("sortColAsc") || $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("sortColDsc") ? 
  ($direction$$4_id$$3$$ = $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("sortColAsc") ? "ascending" : "descending", $cell$$1$$ != D.$JSCompiler_alias_NULL$$ ? ($target$$41$$ = (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $cell$$1$$, "column"), (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $target$$41$$) && $target$$41$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)(this, $event$$7$$, $target$$41$$, $direction$$4_id$$3$$)) : 
  (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $target$$41$$) && (0,D.$JSCompiler_StaticMethods__handleHeaderSort$$)(this, $event$$7$$, $direction$$4_id$$3$$)) : $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("sortRowAsc") || $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("sortRowDsc") ? ($direction$$4_id$$3$$ = $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("sortRowAsc") ? "ascending" : "descending", $cell$$1$$ != D.$JSCompiler_alias_NULL$$ ? 
  ($target$$41$$ = (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $cell$$1$$, "row"), (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $target$$41$$) && $target$$41$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)(this, $event$$7$$, $target$$41$$, $direction$$4_id$$3$$)) : (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $target$$41$$) && (0,D.$JSCompiler_StaticMethods__handleHeaderSort$$)(this, $event$$7$$, $direction$$4_id$$3$$)) : 
  $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("cut") ? (0,D.$JSCompiler_StaticMethods__handleCut$$)(this, $event$$7$$) : $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("paste") && (0,D.$JSCompiler_StaticMethods__handlePaste$$)(this, $event$$7$$)
};
D.$DvtDataGrid$$.prototype.handleContextMenuReturn = D.$DvtDataGrid$$.prototype.$handleContextMenuReturn$;
D.$JSCompiler_StaticMethods__isDOMElementSortable$$ = function $$JSCompiler_StaticMethods__isDOMElementSortable$$$($JSCompiler_StaticMethods__isDOMElementSortable$self$$, $element$$5$$) {
  var $header$$5$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods__isDOMElementSortable$self$$, $element$$5$$);
  return $header$$5$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_FALSE$$ : "true" == $header$$5$$.getAttribute($JSCompiler_StaticMethods__isDOMElementSortable$self$$.$getResources$().getMappedAttribute("sortable"))
};
D.$JSCompiler_StaticMethods__isSelectionEnabled$$ = function $$JSCompiler_StaticMethods__isSelectionEnabled$$$($JSCompiler_StaticMethods__isSelectionEnabled$self$$) {
  return"none" != (0,D.$JSCompiler_StaticMethods_getSelectionCardinality$$)($JSCompiler_StaticMethods__isSelectionEnabled$self$$.$m_options$)
};
D.$JSCompiler_StaticMethods_isMultipleSelection$$ = function $$JSCompiler_StaticMethods_isMultipleSelection$$$($JSCompiler_StaticMethods_isMultipleSelection$self$$) {
  return"multiple" == (0,D.$JSCompiler_StaticMethods_getSelectionCardinality$$)($JSCompiler_StaticMethods_isMultipleSelection$self$$.$m_options$)
};
D.$JSCompiler_StaticMethods_isResizeEnabled$$ = function $$JSCompiler_StaticMethods_isResizeEnabled$$$($JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$) {
  var $row$$11$$ = (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$.$m_options$, "row");
  $JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$ = (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$.$m_options$, "column");
  return"disable" !== $row$$11$$.width || "disable" !== $row$$11$$.height || "disable" !== $JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$.width || "disable" !== $JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$.height
};
D.$JSCompiler_StaticMethods__isHeaderResizeEnabled$$ = function $$JSCompiler_StaticMethods__isHeaderResizeEnabled$$$($JSCompiler_StaticMethods__isHeaderResizeEnabled$self$$, $axis$$14$$, $headerContext$$4$$) {
  var $resizable$$ = (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods__isHeaderResizeEnabled$self$$.$m_options$, $axis$$14$$, $headerContext$$4$$);
  return"column" == $axis$$14$$ ? "function" == typeof $resizable$$.width ? "enable" == $resizable$$.width.call($JSCompiler_StaticMethods__isHeaderResizeEnabled$self$$, $headerContext$$4$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$ : "enable" == $resizable$$.width ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$ : "row" == $axis$$14$$ ? "function" == typeof $resizable$$.height ? "enable" == $resizable$$.height.call($JSCompiler_StaticMethods__isHeaderResizeEnabled$self$$, 
  $headerContext$$4$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$ : "enable" == $resizable$$.height ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataGrid$$.prototype;
D.$JSCompiler_prototypeAlias$$.$handleMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleMouseMove$$($event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$) {
  if((0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && this.$m_databodyDragState$ == D.$JSCompiler_alias_FALSE$$) {
    if(this.$m_isResizing$ === D.$JSCompiler_alias_FALSE$$) {
      this.$m_cursor$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$.target, this.getMappedStyle("colheadercell")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$.target, this.getMappedStyle("rowheadercell")) ? (0,D.$JSCompiler_StaticMethods_manageHeaderCursor$$)(this, 
      $event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$) : "default", this.$m_resizingElement$ != D.$JSCompiler_alias_NULL$$ && ($event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$ = this.find(this.$m_resizingElement$, "header"), $event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$ != D.$JSCompiler_alias_NULL$$ && 
      ($event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$.style.cursor = "default" == this.$m_cursor$ ? "move" === $event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$.style.cursor ? "move" : this.$m_cursor$ : this.$m_cursor$))
    }else {
      var $newElementHeight$$inline_8740_newElementWidth$$inline_8738$$;
      this.$m_currentMouseX$ = $event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$.pageX;
      this.$m_currentMouseY$ = $event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$.pageY;
      $event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)(this.$m_resizingElement$, this.getMappedStyle("colheadercell")) ? "column" : "row";
      "col-resize" === this.$m_cursor$ ? "column" === $event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$ ? ($event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$ = (0,window.isNaN)((0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_resizingElement$)) ? 50 : (0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_resizingElement$), $newElementHeight$$inline_8740_newElementWidth$$inline_8738$$ = 
      (0,D.$JSCompiler_StaticMethods_getNewElementWidth$$)(this, "column", $event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$), (0,D.$JSCompiler_StaticMethods_resizeColWidth$$)(this, $event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$, $newElementHeight$$inline_8740_newElementWidth$$inline_8738$$)) : "row" === $event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$ && 
      ($event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_rowHeader$), $newElementHeight$$inline_8740_newElementWidth$$inline_8738$$ = (0,D.$JSCompiler_StaticMethods_getNewElementWidth$$)(this, "row", $event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$), (0,D.$JSCompiler_StaticMethods_resizeRowWidth$$)(this, 
      $event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$, $newElementHeight$$inline_8740_newElementWidth$$inline_8738$$)) : "row-resize" === this.$m_cursor$ && ("row" === $event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$ ? ($event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$ = (0,window.isNaN)((0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_resizingElement$.parentNode)) ? 
      (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)(this) : (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_resizingElement$.parentNode), $newElementHeight$$inline_8740_newElementWidth$$inline_8738$$ = (0,D.$JSCompiler_StaticMethods_getNewElementHeight$$)(this, "row", $event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$), (0,D.$JSCompiler_StaticMethods_resizeRowHeight$$)(this, $event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$, 
      $newElementHeight$$inline_8740_newElementWidth$$inline_8738$$)) : "column" === $event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$ && ($event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_colHeader$), $newElementHeight$$inline_8740_newElementWidth$$inline_8738$$ = (0,D.$JSCompiler_StaticMethods_getNewElementHeight$$)(this, 
      "column", $event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$), (0,D.$JSCompiler_StaticMethods_resizeColHeight$$)(this, $event$$8_header$$inline_853_oldElementHeight$$inline_8739_oldElementWidth$$inline_8737_resizeHeaderMode$$inline_8736$$, $newElementHeight$$inline_8740_newElementWidth$$inline_8738$$)));
      (0,D.$JSCompiler_StaticMethods_buildCorners$$)(this);
      this.$m_lastMouseX$ = this.$m_currentMouseX$;
      this.$m_lastMouseY$ = this.$m_currentMouseY$
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$handleRowHeaderMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleRowHeaderMouseMove$$($event$$9$$) {
  this.$m_databodyMove$ && (0,D.$JSCompiler_StaticMethods__handleMove$$)(this, $event$$9$$)
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseDown$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseDown$$($event$$10$$) {
  $event$$10$$.preventDefault();
  if((0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && ("col-resize" === this.$m_cursor$ || "row-resize" === this.$m_cursor$)) {
    this.$m_isResizing$ = D.$JSCompiler_alias_TRUE$$, this.$m_lastMouseX$ = $event$$10$$.pageX, this.$m_lastMouseY$ = $event$$10$$.pageY, this.$m_overResizeBottom$ = this.$m_overResizeRight$ = this.$m_overResizeMinTop$ = this.$m_overResizeTop$ = this.$m_overResizeMinLeft$ = this.$m_overResizeLeft$ = 0
  }
  var $row$$12$$ = this.find($event$$10$$.target, "row");
  !this.$m_isResizing$ && (0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)(this, $row$$12$$) && (this.$m_databodyMove$ = D.$JSCompiler_alias_TRUE$$, this.$m_currentX$ = $event$$10$$.pageX, this.$m_currentY$ = $event$$10$$.pageY)
};
D.$JSCompiler_prototypeAlias$$.$handleMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleMouseUp$$($details$$inline_861_event$$11$$) {
  $details$$inline_861_event$$11$$.preventDefault();
  if(this.$m_databodyMove$ && this.$m_moveRow$ != D.$JSCompiler_alias_NULL$$) {
    (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_FALSE$$)
  }else {
    if((0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this)) {
      var $size$$inline_860$$;
      this.$m_isResizing$ === D.$JSCompiler_alias_TRUE$$ && ($size$$inline_860$$ = "col-resize" === this.$m_cursor$ ? this.$m_resizingElement$.style.width : this.$m_resizingElement$.style.height, $details$$inline_861_event$$11$$ = {event:$details$$inline_861_event$$11$$, ui:{header:this.$m_resizingElement$, size:$size$$inline_860$$}}, this.fireEvent("resize", $details$$inline_861_event$$11$$), this.$m_isResizing$ = D.$JSCompiler_alias_FALSE$$, this.$m_cursor$ = "default", this.find(this.$m_resizingElement$, 
      "header").style.cursor = this.$m_cursor$)
    }
  }
  this.$m_databodyMove$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseOver$$($event$$12_row$$13$$) {
  (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$12_row$$13$$.target) && (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$12_row$$13$$.target, this.getMappedStyle("headercell")) && (0,D.$JSCompiler_StaticMethods__showOrHideSortIndicators$$)(this, $event$$12_row$$13$$, D.$JSCompiler_alias_FALSE$$);
  $event$$12_row$$13$$ = this.find($event$$12_row$$13$$.target, "row");
  (0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)(this, $event$$12_row$$13$$) && (this.$m_rowHeader$.style.cursor = "move")
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseOut$$($event$$13$$) {
  if((0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$13$$.target)) {
    var $header$$inline_868$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$13$$.target);
    ($header$$inline_868$$ == D.$JSCompiler_alias_NULL$$ || $header$$inline_868$$ !== (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$13$$.relatedTarget)) && (0,D.$JSCompiler_StaticMethods__showOrHideSortIndicators$$)(this, $event$$13$$, D.$JSCompiler_alias_TRUE$$)
  }
  this.$m_rowHeader$.style.cursor = "default"
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseUp$$() {
  this.$m_databodyMove$ && this.$m_moveRow$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderClick$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderClick$$($event$$15$$) {
  $event$$15$$.preventDefault();
  ((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$15$$.target, this.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$15$$.target, this.getMappedStyle("sortdescending"))) && (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$15$$.target) && (0,D.$JSCompiler_StaticMethods__handleHeaderSort$$)(this, $event$$15$$)
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseDown$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseDown$$($cell$$inline_872_event$$16$$) {
  (0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)(this, this.find($cell$$inline_872_event$$16$$.target, "row")) && (this.$m_databodyMove$ = D.$JSCompiler_alias_TRUE$$, this.$m_currentX$ = $cell$$inline_872_event$$16$$.pageX, this.$m_currentY$ = $cell$$inline_872_event$$16$$.pageY);
  if((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this)) {
    (0,D.$JSCompiler_StaticMethods_handleDatabodyClickSelection$$)(this, $cell$$inline_872_event$$16$$), (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this) && (this.$m_databodyDragState$ = D.$JSCompiler_alias_TRUE$$)
  }else {
    var $index$$inline_873$$;
    $cell$$inline_872_event$$16$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $cell$$inline_872_event$$16$$.target);
    $cell$$inline_872_event$$16$$ != D.$JSCompiler_alias_NULL$$ && ($index$$inline_873$$ = this.createIndex(this.$getRowIndex$($cell$$inline_872_event$$16$$.parentNode), this.$getCellIndex$($cell$$inline_872_event$$16$$)));
    $index$$inline_873$$ != D.$JSCompiler_alias_NULL$$ && $index$$inline_873$$ != D.$JSCompiler_alias_VOID$$ && ((0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, -1), this.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)(this, $index$$inline_873$$), this.$activeAndFocus$($index$$inline_873$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseOut$$($event$$17$$) {
  var $row$$14$$, $selectionMode$$;
  this.$m_databodyMove$ || ($selectionMode$$ = this.$m_options$.$getSelectionMode$(), $row$$14$$ = this.find($event$$17$$.target, "row"), "cell" === $selectionMode$$ ? (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$17$$.target), this.getMappedStyle("hover")) : "row" === $selectionMode$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($row$$14$$, this.getMappedStyle("hover")), $row$$14$$ && ($row$$14$$.style.cursor = "default"))
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseOver$$($event$$18$$) {
  var $row$$15$$, $selectionMode$$1$$;
  this.$m_databodyMove$ || ($selectionMode$$1$$ = this.$m_options$.$getSelectionMode$(), $row$$15$$ = this.find($event$$18$$.target, "row"), "cell" === $selectionMode$$1$$ ? (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$18$$.target), this.getMappedStyle("hover")) : "row" === $selectionMode$$1$$ && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($row$$15$$, this.getMappedStyle("hover")), (0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)(this, 
  $row$$15$$) && ($row$$15$$.style.cursor = "move"))
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseMove$$($event$$19$$) {
  if(this.$m_databodyMove$) {
    (0,D.$JSCompiler_StaticMethods__handleMove$$)(this, $event$$19$$)
  }else {
    if(this.$m_databodyDragState$) {
      var $cell$$inline_878_index$$inline_877$$;
      $cell$$inline_878_index$$inline_877$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$19$$.target);
      $cell$$inline_878_index$$inline_877$$ != D.$JSCompiler_alias_NULL$$ && ($cell$$inline_878_index$$inline_877$$ = {row:this.$getRowIndex$($cell$$inline_878_index$$inline_877$$.parentNode), column:this.$getCellIndex$($cell$$inline_878_index$$inline_877$$)}, (0,D.$JSCompiler_StaticMethods_extendSelection$$)(this, $cell$$inline_878_index$$inline_877$$));
      this.$fireSelectionEvent$($event$$19$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseUp$$() {
  this.$m_databodyDragState$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_databodyMove$ && this.$m_moveRow$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_TRUE$$) : (0,D.$JSCompiler_StaticMethods__isMoveEnabled$$)(this) && ((this.$m_active$ != D.$JSCompiler_alias_NULL$$ ? this.$m_databody$.firstChild.childNodes[this.$m_active$.row + 1] : D.$JSCompiler_alias_NULL$$).style.cursor = "move")
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyKeyDown$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyKeyDown$$($elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$) {
  $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$.preventDefault();
  var $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$;
  if(!(this.$m_active$ == D.$JSCompiler_alias_NULL$$ && this.$m_activeHeader$ == D.$JSCompiler_alias_NULL$$)) {
    if(this.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$) {
      if(this.$m_activeHeader$.elem == window.document.activeElement) {
        var $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$;
        if(this.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$) {
          if($JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ = $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$.keyCode, (0,D.$JSCompiler_StaticMethods_isArrowKey$$)($JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$)) {
            $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$ = $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$;
            var $dataSource$$inline_893_elem$$inline_8746_shiftKey$$inline_904$$;
            if((0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this)) {
              switch(this.$getResources$().isRTLMode() && (37 == $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$ ? $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$ = 39 : 39 == $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$ && ($elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$ = 
              37)), $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ = this.$m_activeHeader$.axis, $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ = this.$m_activeHeader$.index, 
              $dataSource$$inline_893_elem$$inline_8746_shiftKey$$inline_904$$ = this.$m_activeHeader$.elem, $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$) {
                case 37:
                  "column" === $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ && 0 < $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ && ((0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, 
                  $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ - 1, $dataSource$$inline_893_elem$$inline_8746_shiftKey$$inline_904$$.previousSibling), (0,D.$JSCompiler_StaticMethods__scrollToActiveHeader$$)(this));
                  break;
                case 39:
                  if("row" === $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$) {
                    (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, -1), this.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$, $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$ = this.createIndex($JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$, 0), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? this.$selectAndFocus$($elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$) : 
                    this.$activeAndFocus$($elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$)
                  }else {
                    if((0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") || $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ + 1 < this.$m_dataSource$.getCount("column")) {
                      (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ + 1, $dataSource$$inline_893_elem$$inline_8746_shiftKey$$inline_904$$.nextSibling), (0,D.$JSCompiler_StaticMethods__scrollToActiveHeader$$)(this)
                    }
                  }
                  break;
                case 38:
                  "row" === $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ && 0 < $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ && ((0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, 
                  $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ - 1, $dataSource$$inline_893_elem$$inline_8746_shiftKey$$inline_904$$.previousSibling), (0,D.$JSCompiler_StaticMethods__scrollToActiveHeader$$)(this));
                  break;
                case 40:
                  if("column" === $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$) {
                    (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, -1), this.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$, $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$ = this.createIndex(0, $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? this.$selectAndFocus$($elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$) : 
                    this.$activeAndFocus$($elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$)
                  }else {
                    if((0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") || $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ + 1 < this.$m_dataSource$.getCount("row")) {
                      (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ + 1, $dataSource$$inline_893_elem$$inline_8746_shiftKey$$inline_904$$.nextSibling), (0,D.$JSCompiler_StaticMethods__scrollToActiveHeader$$)(this)
                    }
                  }
              }
            }
          }else {
            32 == $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ ? (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this) && ($JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ = 
            this.$m_activeHeader$.axis, $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ = this.$m_activeHeader$.index, "row" === $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ ? 
            (0,D.$JSCompiler_StaticMethods__selectEntireRow$$)(this, $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$, $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$) : "column" === $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ && 
            (0,D.$JSCompiler_StaticMethods__selectEntireColumn$$)(this, $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$, $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$)) : 13 == $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ && 
            ($JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ = this.$m_activeHeader$.elem, "true" == $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$.getAttribute(this.$getResources$().getMappedAttribute("sortable")) && 
            ($JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ = $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$.getAttribute(this.$getResources$().getMappedAttribute("sortDir")), 
            (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)(this, $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$, $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$, $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ == 
            D.$JSCompiler_alias_NULL$$ || "descending" === $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ ? "ascending" : "descending")))
          }
        }
      }
    }else {
      if($JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)(this, this.createRange(this.$m_active$)), !($JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ == 
      D.$JSCompiler_alias_NULL$$ || $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$[0] != window.document.activeElement)) {
        a: {
          var $rowKey$$inline_894$$;
          $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$.target);
          if($JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ = 
          $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$.parentNode, $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ = $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$.getAttribute(this.$getResources$().getMappedAttribute("expanderIndex")), 
          $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ != D.$JSCompiler_alias_NULL$$ && !(0,window.isNaN)($JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$) && ($JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ = 
          $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$.keyCode, (37 === $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ || 39 === $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$) && (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, 
          $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$)))) {
            $dataSource$$inline_893_elem$$inline_8746_shiftKey$$inline_904$$ = this.$m_dataSource$;
            $rowKey$$inline_894$$ = this.$_getKey$($JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$);
            $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ = $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$.getAttribute("aria-expanded");
            39 === $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ ? "false" === $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ && $dataSource$$inline_893_elem$$inline_8746_shiftKey$$inline_904$$.expand($rowKey$$inline_894$$) : 
            "true" === $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ && $dataSource$$inline_893_elem$$inline_8746_shiftKey$$inline_904$$.collapse($rowKey$$inline_894$$);
            $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ = D.$JSCompiler_alias_TRUE$$;
            break a
          }
          $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ = D.$JSCompiler_alias_VOID$$
        }
        if(!$JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ && (88 == $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$.keyCode && (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$) ? 
        ((0,D.$JSCompiler_StaticMethods__handleCut$$)(this, $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$), $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ = D.$JSCompiler_alias_TRUE$$) : 86 == $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$.keyCode && 
        (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$) ? ((0,D.$JSCompiler_StaticMethods__handlePaste$$)(this, $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$), $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ = 
        D.$JSCompiler_alias_TRUE$$) : 27 == $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$.keyCode ? (this.$m_cutRow$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)(this.$m_cutRow$, this.getMappedStyle("cut")), this.$m_cutRow$ = D.$JSCompiler_alias_NULL$$), $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ = 
        D.$JSCompiler_alias_TRUE$$) : $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ = D.$JSCompiler_alias_VOID$$, !$JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$)) {
          if((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this)) {
            if($JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ = $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$.keyCode, "actionable" == this.$m_keyMode$) {
              27 == $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ && ((0,D.$JSCompiler_StaticMethods_setActionableMode$$)(this, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_highlightActive$$)(this));
              if($JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ = (0,D.$JSCompiler_StaticMethods_isArrowKey$$)($JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$)) {
                $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$.target), $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ = 
                !(0 < (0,D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$)($JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$).length)
              }
              $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ && ((0,D.$JSCompiler_StaticMethods_setActionableMode$$)(this, D.$JSCompiler_alias_FALSE$$), $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$), 
              $dataSource$$inline_893_elem$$inline_8746_shiftKey$$inline_904$$ = $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$.shiftKey, ($JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ = (0,D.$JSCompiler_StaticMethods_handleCellArrowKeys$$)(this, 
              $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$, $dataSource$$inline_893_elem$$inline_8746_shiftKey$$inline_904$$ && !$JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ && 
              (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this))) && this.$fireSelectionEvent$($elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$))
            }else {
              if(113 == $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ || 13 == $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$) {
                (0,D.$JSCompiler_StaticMethods_setActionableMode$$)(this, D.$JSCompiler_alias_TRUE$$), $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$.target), $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$ = 
                (0,D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$)($elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$), 0 < $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$.length && $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$[0].focus()
              }else {
                if(9 == $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$) {
                  $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$.preventDefault(), $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$.shiftKey ? (0,D.$JSCompiler_StaticMethods_focusPrevElementOutsideGrid$$)(this) : (0,D.$JSCompiler_StaticMethods_focusNextElementOutsideGrid$$)(this)
                }else {
                  if((0,D.$JSCompiler_StaticMethods_isArrowKey$$)($JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$) || 36 == $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ || 
                  35 == $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$) {
                    $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$), $dataSource$$inline_893_elem$$inline_8746_shiftKey$$inline_904$$ = $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$.shiftKey, 
                    ($JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ = (0,D.$JSCompiler_StaticMethods_handleCellArrowKeys$$)(this, $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$, 
                    $dataSource$$inline_893_elem$$inline_8746_shiftKey$$inline_904$$ && !$JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this))) && this.$fireSelectionEvent$($elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$)
                  }else {
                    if($elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$.shiftKey && 119 == $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$) {
                      this.$m_discontiguousSelection$ = !this.$m_discontiguousSelection$
                    }else {
                      if(32 == $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ && ($JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, 
                      $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$), $dataSource$$inline_893_elem$$inline_8746_shiftKey$$inline_904$$ = $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$.shiftKey, "cell" == this.$m_options$.$getSelectionMode$() && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this) && ($dataSource$$inline_893_elem$$inline_8746_shiftKey$$inline_904$$ && 
                      !$JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ || $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$))) {
                        $JSCompiler_temp$$8589_ctrlKey$$inline_903_direction$$inline_8752_elem$$inline_8755_index$$inline_8745_index$$inline_883_index$$inline_891_keyCode$$inline_892$$ ? ($JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ = this.$m_active$.column, (0,D.$JSCompiler_StaticMethods__selectEntireColumn$$)(this, 
                        $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$, $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$)) : ($JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$ = 
                        this.$m_active$.row, (0,D.$JSCompiler_StaticMethods__selectEntireRow$$)(this, $JSCompiler_inline_result$$213_JSCompiler_inline_result$$429_axis$$inline_8744_axis$$inline_882_cell$$2_cell$$inline_889_column$$inline_905_elem$$inline_884_expanded$$inline_895_keyCode$$inline_885_keyCode$$inline_902_processed$$inline_907_row$$inline_890_row$$inline_906$$, $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$))
                      }
                    }
                  }
                }
              }
            }
          }else {
            (0,D.$JSCompiler_StaticMethods__isFocusableElement$$)(this, $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$.target) || ($elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$ = $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$.keyCode, (0,D.$JSCompiler_StaticMethods_isArrowKey$$)($elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$) && 
            (0,D.$JSCompiler_StaticMethods_handleCellArrowKeys$$)(this, $elem$$inline_8758_elems$$inline_8759_event$$21_keyCode$$inline_8743_keyCode$$inline_911_newCellIndex$$inline_8747$$, D.$JSCompiler_alias_FALSE$$))
          }
        }
      }
    }
  }
};
D.$JSCompiler_StaticMethods_findPos$$ = function $$JSCompiler_StaticMethods_findPos$$$($JSCompiler_StaticMethods_findPos$self$$, $element$$6$$) {
  var $parentPos$$, $cs$$inline_914_element$$inline_913_transform_transform$$inline_915_transformX$$inline_917$$;
  if($element$$6$$) {
    $parentPos$$ = (0,D.$JSCompiler_StaticMethods_findPos$$)($JSCompiler_StaticMethods_findPos$self$$, $element$$6$$.offsetParent);
    $cs$$inline_914_element$$inline_913_transform_transform$$inline_915_transformX$$inline_917$$ = $element$$6$$.parentNode;
    var $matrixArray$$inline_916_transformZ$$inline_919$$, $transformY$$inline_918$$;
    $cs$$inline_914_element$$inline_913_transform_transform$$inline_915_transformX$$inline_917$$ ? ($cs$$inline_914_element$$inline_913_transform_transform$$inline_915_transformX$$inline_917$$ = window.document.defaultView.getComputedStyle($cs$$inline_914_element$$inline_913_transform_transform$$inline_915_transformX$$inline_917$$, D.$JSCompiler_alias_NULL$$), $cs$$inline_914_element$$inline_913_transform_transform$$inline_915_transformX$$inline_917$$ = $cs$$inline_914_element$$inline_913_transform_transform$$inline_915_transformX$$inline_917$$.getPropertyValue("-webkit-transform") || 
    $cs$$inline_914_element$$inline_913_transform_transform$$inline_915_transformX$$inline_917$$.getPropertyValue("-moz-transform") || $cs$$inline_914_element$$inline_913_transform_transform$$inline_915_transformX$$inline_917$$.getPropertyValue("-ms-transform") || $cs$$inline_914_element$$inline_913_transform_transform$$inline_915_transformX$$inline_917$$.getPropertyValue("-o-transform") || $cs$$inline_914_element$$inline_913_transform_transform$$inline_915_transformX$$inline_917$$.getPropertyValue("transform"), 
    $matrixArray$$inline_916_transformZ$$inline_919$$ = $cs$$inline_914_element$$inline_913_transform_transform$$inline_915_transformX$$inline_917$$.substr(7, $cs$$inline_914_element$$inline_913_transform_transform$$inline_915_transformX$$inline_917$$.length - 8).split(", "), $cs$$inline_914_element$$inline_913_transform_transform$$inline_915_transformX$$inline_917$$ = (0,window.isNaN)((0,window.parseInt)($matrixArray$$inline_916_transformZ$$inline_919$$[4], 10)) ? 0 : (0,window.parseInt)($matrixArray$$inline_916_transformZ$$inline_919$$[4], 
    10), $transformY$$inline_918$$ = (0,window.isNaN)((0,window.parseInt)($matrixArray$$inline_916_transformZ$$inline_919$$[5], 10)) ? 0 : (0,window.parseInt)($matrixArray$$inline_916_transformZ$$inline_919$$[5], 10), $matrixArray$$inline_916_transformZ$$inline_919$$ = (0,window.isNaN)((0,window.parseInt)($matrixArray$$inline_916_transformZ$$inline_919$$[6], 10)) ? 0 : (0,window.parseInt)($matrixArray$$inline_916_transformZ$$inline_919$$[6], 10), $cs$$inline_914_element$$inline_913_transform_transform$$inline_915_transformX$$inline_917$$ = 
    [$cs$$inline_914_element$$inline_913_transform_transform$$inline_915_transformX$$inline_917$$, $transformY$$inline_918$$, $matrixArray$$inline_916_transformZ$$inline_919$$]) : $cs$$inline_914_element$$inline_913_transform_transform$$inline_915_transformX$$inline_917$$ = [0, 0, 0];
    return[(0,window.parseInt)($parentPos$$[0], 10) + (0,window.parseInt)($element$$6$$.offsetLeft, 10) + $cs$$inline_914_element$$inline_913_transform_transform$$inline_915_transformX$$inline_917$$[0], (0,window.parseInt)($parentPos$$[1], 10) + (0,window.parseInt)($element$$6$$.offsetTop, 10) + $cs$$inline_914_element$$inline_913_transform_transform$$inline_915_transformX$$inline_917$$[1]]
  }
  return[0, 0]
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataGrid$$.prototype;
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseWheel$$($deltaY$$1_event$$22$$) {
  var $deltaX$$1$$;
  $deltaY$$1_event$$22$$.preventDefault();
  $deltaX$$1$$ = 0;
  $deltaY$$1_event$$22$$.wheelDeltaX ? ($deltaX$$1$$ = $deltaY$$1_event$$22$$.wheelDeltaX, $deltaY$$1_event$$22$$ = $deltaY$$1_event$$22$$.wheelDeltaY) : $deltaY$$1_event$$22$$ = $deltaY$$1_event$$22$$.wheelDelta;
  (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, $deltaX$$1$$, $deltaY$$1_event$$22$$)
};
D.$JSCompiler_prototypeAlias$$.$handleTouchStart$ = function $$JSCompiler_prototypeAlias$$$$handleTouchStart$$($event$$23$$) {
  $event$$23$$.preventDefault();
  1 == $event$$23$$.touches.length ? (this.$m_startX$ = $event$$23$$.touches[0].pageX, this.$m_startY$ = $event$$23$$.touches[0].pageY, this.$m_currentX$ = this.$m_startX$, this.$m_currentY$ = this.$m_startY$, this.$m_prevX$ = this.$m_startX$, this.$m_prevY$ = this.$m_startY$, this.$m_moveCount$ = 0, this.$m_touchActive$ = D.$JSCompiler_alias_TRUE$$) : this.$handleTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleTouchMove$ = function $$JSCompiler_prototypeAlias$$$$handleTouchMove$$($diffX_event$$24$$) {
  var $diffY$$;
  $diffX_event$$24$$.preventDefault();
  this.$m_touchActive$ ? (this.$m_currentX$ = $diffX_event$$24$$.touches[0].pageX, this.$m_currentY$ = $diffX_event$$24$$.touches[0].pageY, $diffX_event$$24$$ = this.$m_currentX$ - this.$m_prevX$, $diffY$$ = this.$m_currentY$ - this.$m_prevY$, 10 > window.Math.abs($diffX_event$$24$$) && 10 > window.Math.abs($diffY$$) ? ((0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, 1.5 * $diffX_event$$24$$, 1.5 * $diffY$$), this.$m_moveCount$++) : this.$m_moveCount$ = 0, this.$m_prevX$ = this.$m_currentX$, 
  this.$m_prevY$ = this.$m_currentY$) : this.$handleTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$handleTouchEnd$$($event$$25_swipeLength$$) {
  var $swipeAngle_swipeAngle$$inline_926$$;
  $event$$25_swipeLength$$.preventDefault();
  if(this.$m_touchActive$) {
    if((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && this.$m_currentX$ == this.$m_startX$ && this.$m_currentY$ == this.$m_startY$) {
      (0,D.$JSCompiler_StaticMethods_handleDatabodyClickSelection$$)(this, $event$$25_swipeLength$$);
      return
    }
    if(1 < this.$m_moveCount$) {
      this.$handleTouchCancel$();
      return
    }
    $event$$25_swipeLength$$ = window.Math.round(window.Math.sqrt(window.Math.pow(this.$m_currentX$ - this.$m_startX$, 2) + window.Math.pow(this.$m_currentY$ - this.$m_startY$, 2)));
    0 < $event$$25_swipeLength$$ && ($swipeAngle_swipeAngle$$inline_926$$ = window.Math.round(180 * window.Math.atan2(this.$m_currentY$ - this.$m_startY$, this.$m_startX$ - this.$m_currentX$) / window.Math.PI), 0 > $swipeAngle_swipeAngle$$inline_926$$ && ($swipeAngle_swipeAngle$$inline_926$$ = 360 - window.Math.abs($swipeAngle_swipeAngle$$inline_926$$)), this.$handleSwipe$($event$$25_swipeLength$$, 45 >= $swipeAngle_swipeAngle$$inline_926$$ && 0 <= $swipeAngle_swipeAngle$$inline_926$$ ? "left" : 
    360 >= $swipeAngle_swipeAngle$$inline_926$$ && 315 <= $swipeAngle_swipeAngle$$inline_926$$ ? "left" : 135 <= $swipeAngle_swipeAngle$$inline_926$$ && 225 >= $swipeAngle_swipeAngle$$inline_926$$ ? "right" : 45 < $swipeAngle_swipeAngle$$inline_926$$ && 135 > $swipeAngle_swipeAngle$$inline_926$$ ? "down" : "up"))
  }
  this.$handleTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleTouchCancel$ = function $$JSCompiler_prototypeAlias$$$$handleTouchCancel$$() {
  this.$m_touchActive$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_currentY$ = this.$m_currentX$ = this.$m_prevY$ = this.$m_prevX$ = this.$m_startY$ = this.$m_startX$ = this.$m_moveCount$ = 0
};
D.$JSCompiler_prototypeAlias$$.$handleSwipe$ = function $$JSCompiler_prototypeAlias$$$$handleSwipe$$($swipeLength$$1$$, $swipeDirection$$) {
  $swipeLength$$1$$ *= 3.5;
  "down" == $swipeDirection$$ ? (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, 0, $swipeLength$$1$$) : "up" == $swipeDirection$$ ? (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, 0, -$swipeLength$$1$$) : "left" == $swipeDirection$$ ? (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, -$swipeLength$$1$$, 0) : "right" == $swipeDirection$$ && (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, $swipeLength$$1$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchStart$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchStart$$($event$$27$$) {
  $event$$27$$.preventDefault();
  1 == $event$$27$$.touches.length ? (this.$m_startX$ = $event$$27$$.touches[0].pageX, this.$m_startY$ = $event$$27$$.touches[0].pageY, this.$m_currentX$ = this.$m_startX$, this.$m_currentY$ = this.$m_startY$, this.$m_prevX$ = this.$m_startX$, this.$m_prevY$ = this.$m_startY$, this.$m_moveCount$ = 0, this.$m_touchActive$ = D.$JSCompiler_alias_TRUE$$) : this.$handleHeaderTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchMove$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchMove$$($event$$28$$) {
  $event$$28$$.preventDefault();
  this.$m_touchActive$ ? (this.$m_currentX$ = $event$$28$$.touches[0].pageX, this.$m_currentY$ = $event$$28$$.touches[0].pageY, this.$m_prevX$ = this.$m_currentX$, this.$m_prevY$ = this.$m_currentY$) : this.$handleTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchEnd$$($event$$29$$) {
  $event$$29$$.preventDefault();
  this.$m_touchActive$ && (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$29$$.target) && (0,D.$JSCompiler_StaticMethods__handleHeaderSort$$)(this, $event$$29$$);
  this.$handleHeaderTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchCancel$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchCancel$$() {
  this.$m_touchActive$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_currentY$ = this.$m_currentX$ = this.$m_prevY$ = this.$m_prevX$ = this.$m_startY$ = this.$m_startX$ = this.$m_moveCount$ = 0
};
D.$JSCompiler_prototypeAlias$$.fireEvent = function $$JSCompiler_prototypeAlias$$$fireEvent$($functionName$$, $details$$2$$) {
  var $callback$$24$$;
  $functionName$$ == D.$JSCompiler_alias_NULL$$ || $details$$2$$ == D.$JSCompiler_alias_NULL$$ || ($callback$$24$$ = this.$callbacks$[$functionName$$], $callback$$24$$ != D.$JSCompiler_alias_NULL$$ && $callback$$24$$($details$$2$$))
};
D.$JSCompiler_prototypeAlias$$.addListener = function $$JSCompiler_prototypeAlias$$$addListener$($functionName$$1$$, $handler$$3$$) {
  this.$callbacks$[$functionName$$1$$] = $handler$$3$$
};
D.$JSCompiler_StaticMethods_setElementHeight$$ = function $$JSCompiler_StaticMethods_setElementHeight$$$($elem$$6$$, $height$$21$$) {
  $elem$$6$$.style.height = $height$$21$$ + "px"
};
D.$JSCompiler_StaticMethods_getElementHeight$$ = function $$JSCompiler_StaticMethods_getElementHeight$$$($elem$$7$$) {
  return(0,window.parseInt)($elem$$7$$.style.height, 10)
};
D.$JSCompiler_StaticMethods_setElementWidth$$ = function $$JSCompiler_StaticMethods_setElementWidth$$$($elem$$8$$, $width$$19$$) {
  $elem$$8$$.style.width = $width$$19$$ + "px"
};
D.$JSCompiler_StaticMethods_getElementWidth$$ = function $$JSCompiler_StaticMethods_getElementWidth$$$($elem$$9$$) {
  return(0,window.parseInt)($elem$$9$$.style.width, 10)
};
D.$JSCompiler_StaticMethods_setElementDir$$ = function $$JSCompiler_StaticMethods_setElementDir$$$($elem$$10$$, $pix$$, $dir$$8$$) {
  $elem$$10$$.style[$dir$$8$$] = $pix$$ + "px"
};
D.$JSCompiler_StaticMethods_getElementDir$$ = function $$JSCompiler_StaticMethods_getElementDir$$$($elem$$11$$, $dir$$9$$) {
  return(0,window.parseInt)($elem$$11$$.style[$dir$$9$$], 10)
};
D.$JSCompiler_StaticMethods__isInViewport$$ = function $$JSCompiler_StaticMethods__isInViewport$$$($JSCompiler_StaticMethods__isInViewport$self$$, $indexes$$6$$) {
  var $rowIndex$$2$$, $columnIndex$$2$$;
  $rowIndex$$2$$ = $indexes$$6$$.row;
  $columnIndex$$2$$ = $indexes$$6$$.column;
  return-1 === $rowIndex$$2$$ && -1 === $columnIndex$$2$$ ? -1 : -1 === $rowIndex$$2$$ ? $columnIndex$$2$$ < $JSCompiler_StaticMethods__isInViewport$self$$.$m_startCol$ ? 1 : $columnIndex$$2$$ > $JSCompiler_StaticMethods__isInViewport$self$$.$m_endCol$ ? 2 : 3 : -1 === $columnIndex$$2$$ ? $rowIndex$$2$$ < $JSCompiler_StaticMethods__isInViewport$self$$.$m_startRow$ ? 1 : $rowIndex$$2$$ > $JSCompiler_StaticMethods__isInViewport$self$$.$m_endRow$ ? 2 : 3 : $columnIndex$$2$$ >= $JSCompiler_StaticMethods__isInViewport$self$$.$m_startCol$ && 
  $columnIndex$$2$$ <= $JSCompiler_StaticMethods__isInViewport$self$$.$m_endCol$ && $rowIndex$$2$$ >= $JSCompiler_StaticMethods__isInViewport$self$$.$m_startRow$ && $rowIndex$$2$$ <= $JSCompiler_StaticMethods__isInViewport$self$$.$m_endRow$ ? 3 : -1
};
D.$DvtDataGrid$$.prototype.$handleModelEvent$ = function $$DvtDataGrid$$$$$handleModelEvent$$($cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$) {
  var $columnRange$$inline_931_i$$inline_947_operation$$1_scrollerContent$$inline_954$$, $databodyContentHeight$$inline_955_indexes$$inline_940_keys$$1_pageSize$$inline_962_rowRange$$inline_930_rowRange$$inline_941_scrollTop$$inline_936_totalHeight$$inline_950$$;
  if(this.$m_initialized$) {
    if($columnRange$$inline_931_i$$inline_947_operation$$1_scrollerContent$$inline_954$$ = $cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$.operation, $databodyContentHeight$$inline_955_indexes$$inline_940_keys$$1_pageSize$$inline_962_rowRange$$inline_930_rowRange$$inline_941_scrollTop$$inline_936_totalHeight$$inline_950$$ = $cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$.keys, 
    "insert" === $columnRange$$inline_931_i$$inline_947_operation$$1_scrollerContent$$inline_954$$) {
      $cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$ = $cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$.result, $cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$ != D.$JSCompiler_alias_NULL$$ ? ($databodyContentHeight$$inline_955_indexes$$inline_940_keys$$1_pageSize$$inline_962_rowRange$$inline_930_rowRange$$inline_941_scrollTop$$inline_936_totalHeight$$inline_950$$ = 
      {axis:"row", start:$cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$.getStart("row"), count:$cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$.getCount("row")}, $columnRange$$inline_931_i$$inline_947_operation$$1_scrollerContent$$inline_954$$ = {axis:"column", start:$cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$.getStart("column"), 
      count:$cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$.getCount("column")}, this.$_handleCellInsertsFetchSuccess$($cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$, [$databodyContentHeight$$inline_955_indexes$$inline_940_keys$$1_pageSize$$inline_962_rowRange$$inline_930_rowRange$$inline_941_scrollTop$$inline_936_totalHeight$$inline_950$$, $columnRange$$inline_931_i$$inline_947_operation$$1_scrollerContent$$inline_954$$])) : 
      ($cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$ = this.$m_dataSource$.indexes($databodyContentHeight$$inline_955_indexes$$inline_940_keys$$1_pageSize$$inline_962_rowRange$$inline_930_rowRange$$inline_941_scrollTop$$inline_936_totalHeight$$inline_950$$), 3 === (0,D.$JSCompiler_StaticMethods__isInViewport$$)(this, $cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$) ? 
      $databodyContentHeight$$inline_955_indexes$$inline_940_keys$$1_pageSize$$inline_962_rowRange$$inline_930_rowRange$$inline_941_scrollTop$$inline_936_totalHeight$$inline_950$$.row && (this.fetchHeaders("row", $cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$.row, this.$m_rowHeader$, 1, {success:this.$_handleHeaderInsertsFetchSuccess$}), this.fetchCells(this.$m_databody$, this.$m_scroller$, $cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$.row, 
      this.$m_startCol$, 1, this.$m_endCol$ - this.$m_startCol$, {success:this.$_handleCellInsertsFetchSuccess$})) : ($databodyContentHeight$$inline_955_indexes$$inline_940_keys$$1_pageSize$$inline_962_rowRange$$inline_930_rowRange$$inline_941_scrollTop$$inline_936_totalHeight$$inline_950$$ = $cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$.row * this.$m_avgRowHeight$, this.$m_scroller$.scrollTop = $databodyContentHeight$$inline_955_indexes$$inline_940_keys$$1_pageSize$$inline_962_rowRange$$inline_930_rowRange$$inline_941_scrollTop$$inline_936_totalHeight$$inline_950$$))
    }else {
      if("update" === $columnRange$$inline_931_i$$inline_947_operation$$1_scrollerContent$$inline_954$$) {
        $databodyContentHeight$$inline_955_indexes$$inline_940_keys$$1_pageSize$$inline_962_rowRange$$inline_930_rowRange$$inline_941_scrollTop$$inline_936_totalHeight$$inline_950$$ = this.$m_dataSource$.indexes($databodyContentHeight$$inline_955_indexes$$inline_940_keys$$1_pageSize$$inline_962_rowRange$$inline_930_rowRange$$inline_941_scrollTop$$inline_936_totalHeight$$inline_950$$), 3 === (0,D.$JSCompiler_StaticMethods__isInViewport$$)(this, $databodyContentHeight$$inline_955_indexes$$inline_940_keys$$1_pageSize$$inline_962_rowRange$$inline_930_rowRange$$inline_941_scrollTop$$inline_936_totalHeight$$inline_950$$) && 
        ($databodyContentHeight$$inline_955_indexes$$inline_940_keys$$1_pageSize$$inline_962_rowRange$$inline_930_rowRange$$inline_941_scrollTop$$inline_936_totalHeight$$inline_950$$ = {axis:"row", start:$databodyContentHeight$$inline_955_indexes$$inline_940_keys$$1_pageSize$$inline_962_rowRange$$inline_930_rowRange$$inline_941_scrollTop$$inline_936_totalHeight$$inline_950$$.row, count:1}, $cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$ = 
        {axis:"column", start:this.$m_startCol$, count:this.$m_endCol$ - this.$m_startCol$}, (0,D.$JSCompiler_StaticMethods_showStatusText$$)(this), this.$m_dataSource$.fetchCells([$databodyContentHeight$$inline_955_indexes$$inline_940_keys$$1_pageSize$$inline_962_rowRange$$inline_930_rowRange$$inline_941_scrollTop$$inline_936_totalHeight$$inline_950$$, $cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$], {success:this.$_handleCellUpdatesFetchSuccess$, 
        error:this.$handleHeadersFetchError$}, {success:this, error:this}))
      }else {
        if("delete" === $columnRange$$inline_931_i$$inline_947_operation$$1_scrollerContent$$inline_954$$) {
          $cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$ = $databodyContentHeight$$inline_955_indexes$$inline_940_keys$$1_pageSize$$inline_962_rowRange$$inline_930_rowRange$$inline_941_scrollTop$$inline_936_totalHeight$$inline_950$$;
          var $height$$inline_951_key$$inline_946$$, $rowHeader$$inline_956_rowKey$$inline_948$$, $row$$inline_949$$, $referenceRow$$inline_952$$;
          window.Array.isArray($cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$) || ($cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$ = (0,window.Array)($cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$));
          for($columnRange$$inline_931_i$$inline_947_operation$$1_scrollerContent$$inline_954$$ = $databodyContentHeight$$inline_955_indexes$$inline_940_keys$$1_pageSize$$inline_962_rowRange$$inline_930_rowRange$$inline_941_scrollTop$$inline_936_totalHeight$$inline_950$$ = 0;$columnRange$$inline_931_i$$inline_947_operation$$1_scrollerContent$$inline_954$$ < $cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$.length;$columnRange$$inline_931_i$$inline_947_operation$$1_scrollerContent$$inline_954$$++) {
            $height$$inline_951_key$$inline_946$$ = $cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$[$columnRange$$inline_931_i$$inline_947_operation$$1_scrollerContent$$inline_954$$], $height$$inline_951_key$$inline_946$$.row && ($rowHeader$$inline_956_rowKey$$inline_948$$ = $height$$inline_951_key$$inline_946$$.row, $row$$inline_949$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)(this, $rowHeader$$inline_956_rowKey$$inline_948$$), 
            $row$$inline_949$$ != D.$JSCompiler_alias_NULL$$ ? ($height$$inline_951_key$$inline_946$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($row$$inline_949$$), $referenceRow$$inline_952$$ = $row$$inline_949$$.nextSibling, (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($referenceRow$$inline_952$$, 0 - $height$$inline_951_key$$inline_946$$), $row$$inline_949$$.parentNode.removeChild($row$$inline_949$$), $row$$inline_949$$.style.display = "none") : $height$$inline_951_key$$inline_946$$ = 
            this.$m_avgRowHeight$, $rowHeader$$inline_956_rowKey$$inline_948$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)(this, $rowHeader$$inline_956_rowKey$$inline_948$$), $rowHeader$$inline_956_rowKey$$inline_948$$ != D.$JSCompiler_alias_NULL$$ && ($height$$inline_951_key$$inline_946$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($rowHeader$$inline_956_rowKey$$inline_948$$), $referenceRow$$inline_952$$ = $rowHeader$$inline_956_rowKey$$inline_948$$.nextSibling, (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($referenceRow$$inline_952$$, 
            0 - $height$$inline_951_key$$inline_946$$), $rowHeader$$inline_956_rowKey$$inline_948$$.parentNode.removeChild($rowHeader$$inline_956_rowKey$$inline_948$$), $rowHeader$$inline_956_rowKey$$inline_948$$.style.display = "none", this.$m_endRowHeader$ -= 1, this.$m_endRowHeaderPixel$ -= $height$$inline_951_key$$inline_946$$), this.$m_endRow$ -= 1, this.$m_endRowPixel$ -= $height$$inline_951_key$$inline_946$$, $databodyContentHeight$$inline_955_indexes$$inline_940_keys$$1_pageSize$$inline_962_rowRange$$inline_930_rowRange$$inline_941_scrollTop$$inline_936_totalHeight$$inline_950$$ += 
            $height$$inline_951_key$$inline_946$$)
          }
          $cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$ = this.$m_databody$.firstChild;
          $columnRange$$inline_931_i$$inline_947_operation$$1_scrollerContent$$inline_954$$ = this.$m_scroller$.firstChild;
          $databodyContentHeight$$inline_955_indexes$$inline_940_keys$$1_pageSize$$inline_962_rowRange$$inline_930_rowRange$$inline_941_scrollTop$$inline_936_totalHeight$$inline_950$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$) - $databodyContentHeight$$inline_955_indexes$$inline_940_keys$$1_pageSize$$inline_962_rowRange$$inline_930_rowRange$$inline_941_scrollTop$$inline_936_totalHeight$$inline_950$$;
          (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$, $databodyContentHeight$$inline_955_indexes$$inline_940_keys$$1_pageSize$$inline_962_rowRange$$inline_930_rowRange$$inline_941_scrollTop$$inline_936_totalHeight$$inline_950$$);
          (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnRange$$inline_931_i$$inline_947_operation$$1_scrollerContent$$inline_954$$, $databodyContentHeight$$inline_955_indexes$$inline_940_keys$$1_pageSize$$inline_962_rowRange$$inline_930_rowRange$$inline_941_scrollTop$$inline_936_totalHeight$$inline_950$$);
          (0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this);
          this.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$;
          (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
          (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)(this)
        }else {
          "refresh" === $columnRange$$inline_931_i$$inline_947_operation$$1_scrollerContent$$inline_954$$ ? (0,D.$JSCompiler_StaticMethods_handleLongScroll$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$) : "sync" === $columnRange$$inline_931_i$$inline_947_operation$$1_scrollerContent$$inline_954$$ && ($databodyContentHeight$$inline_955_indexes$$inline_940_keys$$1_pageSize$$inline_962_rowRange$$inline_930_rowRange$$inline_941_scrollTop$$inline_936_totalHeight$$inline_950$$ = $cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$.pageSize, 
          this.$m_fetching$ = {}, this.$m_endColHeaderPixel$ = this.$m_startColHeaderPixel$ = this.$m_endColPixel$ = this.$m_startColPixel$ = this.$m_endColHeader$ = this.$m_startColHeader$ = this.$m_endCol$ = this.$m_startCol$ = this.$m_endRowHeaderPixel$ = this.$m_startRowHeaderPixel$ = this.$m_endRowPixel$ = this.$m_startRowPixel$ = this.$m_endRowHeader$ = this.$m_startRowHeader$ = this.$m_endRow$ = this.$m_startRow$ = 0, this.$m_cachedRowHeight$ = [], this.$m_cachedColumnWidth$ = [], this.$m_cachedColumnWidthStartIndex$ = 
          this.$m_cachedRowHeightStartIndex$ = 0, this.$m_captureScrolling$ = this.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_FALSE$$, this.$m_isEstimateColumnCount$ = this.$m_isEstimateRowCount$ = this.$m_avgColWidth$ = this.$m_avgRowHeight$ = D.$JSCompiler_alias_VOID$$, this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$, this.$m_active$ = this.$m_selection$ = D.$JSCompiler_alias_NULL$$, this.$m_initialized$ ? 
          (this.fetchHeaders("row", 0, this.$m_rowHeader$, $databodyContentHeight$$inline_955_indexes$$inline_940_keys$$1_pageSize$$inline_962_rowRange$$inline_930_rowRange$$inline_941_scrollTop$$inline_936_totalHeight$$inline_950$$, {success:function($cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$, $columnRange$$inline_931_i$$inline_947_operation$$1_scrollerContent$$inline_954$$) {
            (0,D.$JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$)(this, $cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$, $columnRange$$inline_931_i$$inline_947_operation$$1_scrollerContent$$inline_954$$, 0)
          }}), this.fetchHeaders("column", 0, this.$m_colHeader$, D.$JSCompiler_alias_VOID$$, {success:function($cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$, $columnRange$$inline_931_i$$inline_947_operation$$1_scrollerContent$$inline_954$$) {
            this.$m_colHeader$.firstChild.innerHTML = "";
            this.$handleHeadersFetchSuccess$($cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$, $columnRange$$inline_931_i$$inline_947_operation$$1_scrollerContent$$inline_954$$)
          }}), this.fetchCells(this.$m_databody$, this.$m_scroller$, 0, 0, $databodyContentHeight$$inline_955_indexes$$inline_940_keys$$1_pageSize$$inline_962_rowRange$$inline_930_rowRange$$inline_941_scrollTop$$inline_936_totalHeight$$inline_950$$, D.$JSCompiler_alias_NULL$$, {success:function($cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$, $columnRange$$inline_931_i$$inline_947_operation$$1_scrollerContent$$inline_954$$) {
            (0,D.$JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$)(this, $cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$, $columnRange$$inline_931_i$$inline_947_operation$$1_scrollerContent$$inline_954$$, 0)
          }}), (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this)) : (this.fetchHeaders("column", 0, this.$m_colHeader$), this.fetchHeaders("row", 0, this.$m_rowHeader$, $databodyContentHeight$$inline_955_indexes$$inline_940_keys$$1_pageSize$$inline_962_rowRange$$inline_930_rowRange$$inline_941_scrollTop$$inline_936_totalHeight$$inline_950$$), this.fetchCells(this.$m_databody$, this.$m_scroller$, 0, 0, $databodyContentHeight$$inline_955_indexes$$inline_940_keys$$1_pageSize$$inline_962_rowRange$$inline_930_rowRange$$inline_941_scrollTop$$inline_936_totalHeight$$inline_950$$)))
        }
      }
    }
  }else {
    this.$m_modelEvents$ == D.$JSCompiler_alias_VOID$$ && (this.$m_modelEvents$ = []), this.$m_modelEvents$.push($cellSet$$7_columnRange$$inline_942_databodyContent$$inline_953_event$$31_indexes$$inline_935_keys$$inline_945$$)
  }
};
D.$DvtDataGrid$$.prototype.$_handleCellInsertsFetchSuccess$ = function $$DvtDataGrid$$$$$_handleCellInsertsFetchSuccess$$($cellSet$$8$$, $cellRanges$$1$$) {
  this.$m_initialized$ = D.$JSCompiler_alias_FALSE$$;
  this.$handleCellsFetchSuccess$($cellSet$$8$$, $cellRanges$$1$$, this.$m_endRow$ > $cellRanges$$1$$[0].start);
  (0,D.$JSCompiler_StaticMethods__scrollRowIntoViewport$$)(this, $cellRanges$$1$$[0].start);
  (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) || (0,D.$JSCompiler_StaticMethods__cleanupViewport$$)(this);
  (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)(this)
};
D.$DvtDataGrid$$.prototype.$_handleHeaderInsertsFetchSuccess$ = function $$DvtDataGrid$$$$$_handleHeaderInsertsFetchSuccess$$($headerSet$$6$$, $headerRanges$$) {
  this.$m_initialized$ = D.$JSCompiler_alias_FALSE$$;
  this.$handleHeadersFetchSuccess$($headerSet$$6$$, $headerRanges$$, this.$m_endRowHeader$ > $headerRanges$$.start);
  (0,D.$JSCompiler_StaticMethods__scrollRowIntoViewport$$)(this, $headerRanges$$.start);
  (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) || (0,D.$JSCompiler_StaticMethods__cleanupViewport$$)(this)
};
D.$JSCompiler_StaticMethods__scrollRowIntoViewport$$ = function $$JSCompiler_StaticMethods__scrollRowIntoViewport$$$($JSCompiler_StaticMethods__scrollRowIntoViewport$self$$, $index$$51$$) {
  var $row$$16_rowTop$$, $diff$$1_viewportTop$$2$$, $viewportBottom$$3$$;
  $row$$16_rowTop$$ = $JSCompiler_StaticMethods__scrollRowIntoViewport$self$$.$m_databody$.firstChild.childNodes[$index$$51$$ - $JSCompiler_StaticMethods__scrollRowIntoViewport$self$$.$m_startRow$ + 1];
  $row$$16_rowTop$$ != D.$JSCompiler_alias_NULL$$ && ($diff$$1_viewportTop$$2$$ = $JSCompiler_StaticMethods__scrollRowIntoViewport$self$$.$m_currentScrollTop$, $viewportBottom$$3$$ = $JSCompiler_StaticMethods__scrollRowIntoViewport$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods__scrollRowIntoViewport$self$$.$m_databody$), $row$$16_rowTop$$ = $row$$16_rowTop$$.offsetTop, $diff$$1_viewportTop$$2$$ -= $row$$16_rowTop$$, 0 < $diff$$1_viewportTop$$2$$ ? 
  (0,D.$JSCompiler_StaticMethods_scrollDelta$$)($JSCompiler_StaticMethods__scrollRowIntoViewport$self$$, 0, $diff$$1_viewportTop$$2$$) : ($diff$$1_viewportTop$$2$$ = $viewportBottom$$3$$ - $row$$16_rowTop$$, 0 > $diff$$1_viewportTop$$2$$ && (0,D.$JSCompiler_StaticMethods_scrollDelta$$)($JSCompiler_StaticMethods__scrollRowIntoViewport$self$$, 0, $diff$$1_viewportTop$$2$$)))
};
D.$JSCompiler_StaticMethods__cleanupViewport$$ = function $$JSCompiler_StaticMethods__cleanupViewport$$$($JSCompiler_StaticMethods__cleanupViewport$self$$) {
  var $viewportTop$$3$$, $viewportBottom$$4$$;
  $viewportTop$$3$$ = $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_currentScrollTop$;
  $viewportBottom$$4$$ = $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods__cleanupViewport$self$$.$m_databody$);
  $viewportTop$$3$$ > $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_startRowPixel$ ? $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_startRow$ > $JSCompiler_StaticMethods__cleanupViewport$self$$.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowsFromTop$$)($JSCompiler_StaticMethods__cleanupViewport$self$$, $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_databody$) : $viewportBottom$$4$$ < $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_endRowPixel$ && 
  $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_startRow$ > $JSCompiler_StaticMethods__cleanupViewport$self$$.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowsFromBottom$$)($JSCompiler_StaticMethods__cleanupViewport$self$$, $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_databody$)
};
D.$DvtDataGrid$$.prototype.$_handleCellUpdatesFetchSuccess$ = function $$DvtDataGrid$$$$$_handleCellUpdatesFetchSuccess$$($cellSet$$10$$, $cellRange$$7$$) {
  var $rowStart$$7$$, $databodyContent$$9$$, $renderer$$5$$, $columnBandingInterval$$3$$, $rowIndex$$3$$;
  $rowStart$$7$$ = $cellRange$$7$$[0].start;
  $databodyContent$$9$$ = this.$m_databody$.firstChild;
  $renderer$$5$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "cell");
  $columnBandingInterval$$3$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)(this.$m_options$);
  $rowIndex$$3$$ = $rowStart$$7$$ - this.$m_startRow$;
  var $row$$inline_972$$ = $databodyContent$$9$$.childNodes[$rowIndex$$3$$ + 1], $columnStart$$inline_975$$ = this.$m_startCol$;
  $row$$inline_972$$.style.left = this.getWidth() + "px";
  (0,window.setTimeout)(function() {
    $row$$inline_972$$.innerHTML = "";
    (0,D.$JSCompiler_StaticMethods_addCellsToRow$$)(this, $cellSet$$10$$, $row$$inline_972$$, $rowIndex$$3$$, $renderer$$5$$, D.$JSCompiler_alias_TRUE$$, $columnStart$$inline_975$$, D.$JSCompiler_alias_FALSE$$, $columnBandingInterval$$3$$);
    (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this);
    (0,window.setTimeout)(function() {
      $row$$inline_972$$.style.left = "0px"
    }, 250);
    (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_applySelection$$)(this);
    (0,D.$JSCompiler_StaticMethods_highlightActive$$)(this, D.$JSCompiler_alias_FALSE$$)
  }.bind(this), 250)
};
D.$JSCompiler_StaticMethods__findRowByKey$$ = function $$JSCompiler_StaticMethods__findRowByKey$$$($JSCompiler_StaticMethods__findRowByKey$self$$, $key$$31$$) {
  var $rows$$4$$, $row$$20$$, $i$$18$$, $rowKey$$1$$, $keyAttribute$$1$$;
  if($JSCompiler_StaticMethods__findRowByKey$self$$.$m_databody$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $rows$$4$$ = $JSCompiler_StaticMethods__findRowByKey$self$$.$m_databody$.firstChild.childNodes;
  $keyAttribute$$1$$ = $JSCompiler_StaticMethods__findRowByKey$self$$.$getResources$().getMappedAttribute("key");
  for($i$$18$$ = 1;$i$$18$$ < $rows$$4$$.length;$i$$18$$++) {
    if($row$$20$$ = $rows$$4$$[$i$$18$$], $rowKey$$1$$ = $row$$20$$.getAttribute($keyAttribute$$1$$), $rowKey$$1$$ == $key$$31$$) {
      return $row$$20$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__findRowHeaderByKey$$ = function $$JSCompiler_StaticMethods__findRowHeaderByKey$$$($JSCompiler_StaticMethods__findRowHeaderByKey$self$$, $key$$32$$) {
  var $rows$$5$$, $row$$21$$, $i$$19$$, $rowKey$$2$$, $keyAttribute$$2$$;
  if($JSCompiler_StaticMethods__findRowHeaderByKey$self$$.$m_rowHeader$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $rows$$5$$ = $JSCompiler_StaticMethods__findRowHeaderByKey$self$$.$m_rowHeader$.firstChild.childNodes;
  $keyAttribute$$2$$ = $JSCompiler_StaticMethods__findRowHeaderByKey$self$$.$getResources$().getMappedAttribute("key");
  for($i$$19$$ = 1;$i$$19$$ < $rows$$5$$.length;$i$$19$$++) {
    if($row$$21$$ = $rows$$5$$[$i$$19$$], $rowKey$$2$$ = $row$$21$$.getAttribute($keyAttribute$$2$$), $rowKey$$2$$ == $key$$32$$) {
      return $row$$21$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__findColumnHeaderByKey$$ = function $$JSCompiler_StaticMethods__findColumnHeaderByKey$$$($JSCompiler_StaticMethods__findColumnHeaderByKey$self$$, $key$$33$$) {
  var $columns$$2$$, $column$$4$$, $i$$20$$, $columnKey$$, $keyAttribute$$3$$;
  if($JSCompiler_StaticMethods__findColumnHeaderByKey$self$$.$m_colHeader$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $columns$$2$$ = $JSCompiler_StaticMethods__findColumnHeaderByKey$self$$.$m_colHeader$.firstChild.childNodes;
  $keyAttribute$$3$$ = $JSCompiler_StaticMethods__findColumnHeaderByKey$self$$.$getResources$().getMappedAttribute("key");
  for($i$$20$$ = 0;$i$$20$$ < $columns$$2$$.length;$i$$20$$++) {
    if($column$$4$$ = $columns$$2$$[$i$$20$$], $columnKey$$ = $column$$4$$.getAttribute($keyAttribute$$3$$), $columnKey$$ == $key$$33$$) {
      return $column$$4$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDataGrid$$.prototype.$activeAndFocus$ = function $$DvtDataGrid$$$$$activeAndFocus$$($index$$53$$) {
  this.$m_active$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unhighlightActive$$)(this);
  this.$m_active$ = $index$$53$$;
  (0,D.$JSCompiler_StaticMethods_highlightActive$$)(this)
};
D.$DvtDataGrid$$.prototype.$getRowIndex$ = function $$DvtDataGrid$$$$$getRowIndex$$($row$$22$$) {
  for(var $index$$54$$ = this.$m_startRow$;$row$$22$$.previousSibling;) {
    $index$$54$$ += 1, $row$$22$$ = $row$$22$$.previousSibling
  }
  return $index$$54$$ - 1
};
D.$DvtDataGrid$$.prototype.$getCellIndex$ = function $$DvtDataGrid$$$$$getCellIndex$$($cell$$4$$) {
  for(var $index$$55$$ = this.$m_startCol$;$cell$$4$$.previousSibling;) {
    $index$$55$$ += 1, $cell$$4$$ = $cell$$4$$.previousSibling
  }
  return $index$$55$$
};
D.$JSCompiler_StaticMethods_findCell$$ = function $$JSCompiler_StaticMethods_findCell$$$($JSCompiler_StaticMethods_findCell$self$$, $elem$$12$$) {
  return $JSCompiler_StaticMethods_findCell$self$$.find($elem$$12$$, "cell")
};
D.$DvtDataGrid$$.prototype.find = function $$DvtDataGrid$$$$find$($elem$$13$$, $key$$34$$, $className$$8$$) {
  if($elem$$13$$ == D.$JSCompiler_alias_NULL$$ || $elem$$13$$ == this.$m_root$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $className$$8$$ == D.$JSCompiler_alias_VOID$$ && ($className$$8$$ = this.getMappedStyle($key$$34$$));
  return $className$$8$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($elem$$13$$, $className$$8$$) ? $elem$$13$$ : this.find($elem$$13$$.parentNode, $key$$34$$, $className$$8$$)
};
D.$JSCompiler_StaticMethods_highlightActive$$ = function $$JSCompiler_StaticMethods_highlightActive$$$($JSCompiler_StaticMethods_highlightActive$self$$, $focus$$) {
  var $cell$$5$$ = (0,D.$JSCompiler_StaticMethods_highlightIndex$$)($JSCompiler_StaticMethods_highlightActive$self$$, $JSCompiler_StaticMethods_highlightActive$self$$.$m_active$, "active");
  $cell$$5$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setAriaProperties$$)($JSCompiler_StaticMethods_highlightActive$self$$, $cell$$5$$, $focus$$ === D.$JSCompiler_alias_VOID$$ || $focus$$ === D.$JSCompiler_alias_TRUE$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_VOID$$)
};
D.$JSCompiler_StaticMethods_unhighlightActive$$ = function $$JSCompiler_StaticMethods_unhighlightActive$$$($JSCompiler_StaticMethods_unhighlightActive$self$$, $selectActive$$) {
  var $activeClassName$$inline_993_cell$$6_cell$$inline_991_range$$inline_992$$, $selectedClassName_singleCell$$inline_995$$;
  $activeClassName$$inline_993_cell$$6_cell$$inline_991_range$$inline_992$$ = $JSCompiler_StaticMethods_unhighlightActive$self$$.createRange($JSCompiler_StaticMethods_unhighlightActive$self$$.$m_active$);
  $activeClassName$$inline_993_cell$$6_cell$$inline_991_range$$inline_992$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_unhighlightActive$self$$, $activeClassName$$inline_993_cell$$6_cell$$inline_991_range$$inline_992$$);
  $activeClassName$$inline_993_cell$$6_cell$$inline_991_range$$inline_992$$ == D.$JSCompiler_alias_NULL$$ || 0 == $activeClassName$$inline_993_cell$$6_cell$$inline_991_range$$inline_992$$.length ? $activeClassName$$inline_993_cell$$6_cell$$inline_991_range$$inline_992$$ = D.$JSCompiler_alias_VOID$$ : ($selectedClassName_singleCell$$inline_995$$ = $activeClassName$$inline_993_cell$$6_cell$$inline_991_range$$inline_992$$[0], $activeClassName$$inline_993_cell$$6_cell$$inline_991_range$$inline_992$$ = 
  $JSCompiler_StaticMethods_unhighlightActive$self$$.getMappedStyle("active"), $activeClassName$$inline_993_cell$$6_cell$$inline_991_range$$inline_992$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($selectedClassName_singleCell$$inline_995$$, $activeClassName$$inline_993_cell$$6_cell$$inline_991_range$$inline_992$$), $activeClassName$$inline_993_cell$$6_cell$$inline_991_range$$inline_992$$ = $selectedClassName_singleCell$$inline_995$$);
  $selectActive$$ && ($selectedClassName_singleCell$$inline_995$$ = $JSCompiler_StaticMethods_unhighlightActive$self$$.getMappedStyle("selected"), $selectedClassName_singleCell$$inline_995$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_highlightIndex$$)($JSCompiler_StaticMethods_unhighlightActive$self$$, $JSCompiler_StaticMethods_unhighlightActive$self$$.$m_active$, $selectedClassName_singleCell$$inline_995$$));
  $activeClassName$$inline_993_cell$$6_cell$$inline_991_range$$inline_992$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unsetAriaProperties$$)($activeClassName$$inline_993_cell$$6_cell$$inline_991_range$$inline_992$$)
};
D.$JSCompiler_StaticMethods_highlightIndex$$ = function $$JSCompiler_StaticMethods_highlightIndex$$$($JSCompiler_StaticMethods_highlightIndex$self$$, $index$$56$$, $className$$9_style$$2$$) {
  var $cell$$7_range$$5_singleCell$$;
  $cell$$7_range$$5_singleCell$$ = $JSCompiler_StaticMethods_highlightIndex$self$$.createRange($index$$56$$);
  $cell$$7_range$$5_singleCell$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_highlightIndex$self$$, $cell$$7_range$$5_singleCell$$);
  if(!($cell$$7_range$$5_singleCell$$ == D.$JSCompiler_alias_NULL$$ || 0 == $cell$$7_range$$5_singleCell$$.length)) {
    return $className$$9_style$$2$$ == D.$JSCompiler_alias_VOID$$ && ($className$$9_style$$2$$ = "selected"), $cell$$7_range$$5_singleCell$$ = $cell$$7_range$$5_singleCell$$[0], $className$$9_style$$2$$ = $JSCompiler_StaticMethods_highlightIndex$self$$.getMappedStyle($className$$9_style$$2$$), $className$$9_style$$2$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($cell$$7_range$$5_singleCell$$, $className$$9_style$$2$$), $index$$56$$.row && $index$$56$$.column && 
    (0,D.$JSCompiler_StaticMethods_setAriaProperties$$)($JSCompiler_StaticMethods_highlightIndex$self$$, $cell$$7_range$$5_singleCell$$)), $cell$$7_range$$5_singleCell$$
  }
};
D.$JSCompiler_StaticMethods_setAriaProperties$$ = function $$JSCompiler_StaticMethods_setAriaProperties$$$($JSCompiler_StaticMethods_setAriaProperties$self$$, $cell$$9$$, $focus$$1$$) {
  $cell$$9$$.setAttribute("tabIndex", 0);
  var $label$$inline_999$$, $colIndex$$inline_1003_row$$inline_1000_rowIndex$$inline_1001$$, $columns$$inline_1004_rows$$inline_1002$$;
  $label$$inline_999$$ = "";
  $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_rowHeader$ != D.$JSCompiler_alias_NULL$$ && ($colIndex$$inline_1003_row$$inline_1000_rowIndex$$inline_1001$$ = $cell$$9$$.parentNode, $colIndex$$inline_1003_row$$inline_1000_rowIndex$$inline_1001$$ = (0,D.$JSCompiler_StaticMethods_findIndexOf$$)($colIndex$$inline_1003_row$$inline_1000_rowIndex$$inline_1001$$), -1 < $colIndex$$inline_1003_row$$inline_1000_rowIndex$$inline_1001$$ && ($columns$$inline_1004_rows$$inline_1002$$ = $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_rowHeader$.firstChild.childNodes, 
  $colIndex$$inline_1003_row$$inline_1000_rowIndex$$inline_1001$$ < $columns$$inline_1004_rows$$inline_1002$$.length && ($label$$inline_999$$ = $columns$$inline_1004_rows$$inline_1002$$[$colIndex$$inline_1003_row$$inline_1000_rowIndex$$inline_1001$$].id)));
  $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_colHeader$ != D.$JSCompiler_alias_NULL$$ && ($colIndex$$inline_1003_row$$inline_1000_rowIndex$$inline_1001$$ = (0,D.$JSCompiler_StaticMethods_findIndexOf$$)($cell$$9$$), -1 < $colIndex$$inline_1003_row$$inline_1000_rowIndex$$inline_1001$$ && ($columns$$inline_1004_rows$$inline_1002$$ = $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_colHeader$.firstChild.childNodes, $colIndex$$inline_1003_row$$inline_1000_rowIndex$$inline_1001$$ < $columns$$inline_1004_rows$$inline_1002$$.length && 
  ($label$$inline_999$$ = "" == $label$$inline_999$$ ? $columns$$inline_1004_rows$$inline_1002$$[$colIndex$$inline_1003_row$$inline_1000_rowIndex$$inline_1001$$].id : [$label$$inline_999$$, $columns$$inline_1004_rows$$inline_1002$$[$colIndex$$inline_1003_row$$inline_1000_rowIndex$$inline_1001$$].id].join(" "))));
  $label$$inline_999$$ = "" == $label$$inline_999$$ ? (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setAriaProperties$self$$, "state") : [$label$$inline_999$$, (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setAriaProperties$self$$, "state")].join(" ");
  $cell$$9$$.setAttribute("aria-labelledby", $label$$inline_999$$);
  $focus$$1$$ != D.$JSCompiler_alias_VOID$$ && ($JSCompiler_StaticMethods_setAriaProperties$self$$.$m_cellToFocus$ == D.$JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_cellToFocus$ != $cell$$9$$) && $cell$$9$$.focus()
};
D.$JSCompiler_StaticMethods_unsetAriaProperties$$ = function $$JSCompiler_StaticMethods_unsetAriaProperties$$$($cell$$10$$) {
  $cell$$10$$.setAttribute("tabIndex", -1);
  $cell$$10$$.removeAttribute("contenteditable");
  $cell$$10$$.removeAttribute("aria-labelledby")
};
D.$JSCompiler_StaticMethods_getHeaderFromCell$$ = function $$JSCompiler_StaticMethods_getHeaderFromCell$$$($JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$7$$, $cell$$12_colIndex$$1_row$$24_rowIndex$$6$$, $axis$$15$$) {
  if("row" === $axis$$15$$) {
    if($JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$7$$.$m_rowHeader$ != D.$JSCompiler_alias_NULL$$ && ($cell$$12_colIndex$$1_row$$24_rowIndex$$6$$ = $cell$$12_colIndex$$1_row$$24_rowIndex$$6$$.parentNode, $cell$$12_colIndex$$1_row$$24_rowIndex$$6$$ = (0,D.$JSCompiler_StaticMethods_findIndexOf$$)($cell$$12_colIndex$$1_row$$24_rowIndex$$6$$), -1 < $cell$$12_colIndex$$1_row$$24_rowIndex$$6$$ && ($JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$7$$ = $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$7$$.$m_rowHeader$.firstChild.childNodes, 
    $cell$$12_colIndex$$1_row$$24_rowIndex$$6$$ < $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$7$$.length))) {
      return $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$7$$[$cell$$12_colIndex$$1_row$$24_rowIndex$$6$$]
    }
  }else {
    if("column" === $axis$$15$$ && $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$7$$.$m_colHeader$ != D.$JSCompiler_alias_NULL$$ && ($cell$$12_colIndex$$1_row$$24_rowIndex$$6$$ = (0,D.$JSCompiler_StaticMethods_findIndexOf$$)($cell$$12_colIndex$$1_row$$24_rowIndex$$6$$), -1 < $cell$$12_colIndex$$1_row$$24_rowIndex$$6$$ && ($JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$7$$ = $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$7$$.$m_colHeader$.firstChild.childNodes, 
    $cell$$12_colIndex$$1_row$$24_rowIndex$$6$$ < $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$7$$.length))) {
      return $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$7$$[$cell$$12_colIndex$$1_row$$24_rowIndex$$6$$]
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_findIndexOf$$ = function $$JSCompiler_StaticMethods_findIndexOf$$$($elem$$14$$) {
  var $child$$2$$, $children$$1$$, $index$$58$$, $i$$21$$;
  $children$$1$$ = $elem$$14$$.parentNode.childNodes;
  $index$$58$$ = -1;
  for($i$$21$$ = 0;$i$$21$$ < $children$$1$$.length;$i$$21$$ += 1) {
    $child$$2$$ = $children$$1$$[$i$$21$$];
    if($child$$2$$ === $elem$$14$$) {
      return $index$$58$$ + 1
    }
    "DIV" == $child$$2$$.nodeName && $index$$58$$++
  }
  return $index$$58$$
};
D.$DvtDataGrid$$.prototype.createRange = function $$DvtDataGrid$$$$createRange$($startIndex$$, $endIndex$$) {
  var $startRow$$3$$, $endRow$$, $startColumn$$, $endColumn$$;
  $endIndex$$ && ($startIndex$$.row < $endIndex$$.row || -1 == $endIndex$$.row ? ($startRow$$3$$ = $startIndex$$.row, $endRow$$ = $endIndex$$.row) : ($startRow$$3$$ = $endIndex$$.row, $endRow$$ = $startIndex$$.row), !(0,window.isNaN)($startIndex$$.column) && !(0,window.isNaN)($endIndex$$.column) ? ($startIndex$$.column < $endIndex$$.column || -1 == $endIndex$$.column ? ($startColumn$$ = $startIndex$$.column, $endColumn$$ = $endIndex$$.column) : ($startColumn$$ = $endIndex$$.column, $endColumn$$ = 
  $startIndex$$.column), $startIndex$$ = {row:$startRow$$3$$, column:$startColumn$$}, $endIndex$$ = {row:$endRow$$, column:$endColumn$$}) : ($startIndex$$ = {row:$startRow$$3$$}, $endIndex$$ = {row:$endRow$$}));
  return{startIndex:$startIndex$$, endIndex:$endIndex$$}
};
D.$JSCompiler_StaticMethods_getEndIndex$$ = function $$JSCompiler_StaticMethods_getEndIndex$$$($range$$7$$) {
  return $range$$7$$.endIndex == D.$JSCompiler_alias_NULL$$ ? $range$$7$$.startIndex : $range$$7$$.endIndex
};
D.$JSCompiler_StaticMethods_getElementsInRange$$ = function $$JSCompiler_StaticMethods_getElementsInRange$$$($JSCompiler_StaticMethods_getElementsInRange$self_i$$22$$, $range$$8_rangeEndRow$$, $nodes_startRow$$4$$, $endRow$$1_rows$$8$$) {
  var $j$$7_startIndex$$1$$, $cell$$13_endIndex$$1$$, $columns$$5_rangeStartRow$$, $rangeStartColumn_row$$25$$, $rangeEndColumn$$;
  $nodes_startRow$$4$$ == D.$JSCompiler_alias_VOID$$ && ($nodes_startRow$$4$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$22$$.$m_startRow$);
  $endRow$$1_rows$$8$$ == D.$JSCompiler_alias_VOID$$ && ($endRow$$1_rows$$8$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$22$$.$m_endRow$);
  $j$$7_startIndex$$1$$ = $range$$8_rangeEndRow$$.startIndex;
  $cell$$13_endIndex$$1$$ = (0,D.$JSCompiler_StaticMethods_getEndIndex$$)($range$$8_rangeEndRow$$);
  $columns$$5_rangeStartRow$$ = $j$$7_startIndex$$1$$.row;
  $range$$8_rangeEndRow$$ = $cell$$13_endIndex$$1$$.row;
  -1 == $range$$8_rangeEndRow$$ && ($range$$8_rangeEndRow$$ = window.Number.MAX_VALUE);
  if($endRow$$1_rows$$8$$ < $columns$$5_rangeStartRow$$ || $range$$8_rangeEndRow$$ < $nodes_startRow$$4$$ || !(0,window.isNaN)($j$$7_startIndex$$1$$.column) && !(0,window.isNaN)($cell$$13_endIndex$$1$$.column) && ($rangeStartColumn_row$$25$$ = $j$$7_startIndex$$1$$.column, $rangeEndColumn$$ = $cell$$13_endIndex$$1$$.column, -1 == $rangeEndColumn$$ && ($rangeEndColumn$$ = window.Number.MAX_VALUE), $JSCompiler_StaticMethods_getElementsInRange$self_i$$22$$.$m_endCol$ < $rangeStartColumn_row$$25$$ || 
  $rangeEndColumn$$ < $JSCompiler_StaticMethods_getElementsInRange$self_i$$22$$.$m_startCol$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  $nodes_startRow$$4$$ = [];
  $endRow$$1_rows$$8$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$22$$.$m_databody$.firstChild.childNodes;
  $columns$$5_rangeStartRow$$ = window.Math.max(0, $columns$$5_rangeStartRow$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$22$$.$m_startRow$);
  $range$$8_rangeEndRow$$ = window.Math.min($endRow$$1_rows$$8$$.length - 1, $range$$8_rangeEndRow$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$22$$.$m_startRow$ + 1);
  if(!(0,window.isNaN)($rangeStartColumn_row$$25$$) && !(0,window.isNaN)($rangeEndColumn$$)) {
    $rangeStartColumn_row$$25$$ = window.Math.max(0, $rangeStartColumn_row$$25$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$22$$.$m_startCol$);
    $rangeEndColumn$$ = $rangeEndColumn$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$22$$.$m_startCol$ + 1;
    for($JSCompiler_StaticMethods_getElementsInRange$self_i$$22$$ = $columns$$5_rangeStartRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$22$$ < $range$$8_rangeEndRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$22$$ += 1) {
      $columns$$5_rangeStartRow$$ = $endRow$$1_rows$$8$$[$JSCompiler_StaticMethods_getElementsInRange$self_i$$22$$ + 1].childNodes;
      for($j$$7_startIndex$$1$$ = $rangeStartColumn_row$$25$$;$j$$7_startIndex$$1$$ < window.Math.min($columns$$5_rangeStartRow$$.length, $rangeEndColumn$$);$j$$7_startIndex$$1$$ += 1) {
        $cell$$13_endIndex$$1$$ = $columns$$5_rangeStartRow$$[$j$$7_startIndex$$1$$], $nodes_startRow$$4$$.push($cell$$13_endIndex$$1$$)
      }
    }
  }else {
    for($JSCompiler_StaticMethods_getElementsInRange$self_i$$22$$ = $columns$$5_rangeStartRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$22$$ < $range$$8_rangeEndRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$22$$ += 1) {
      $rangeStartColumn_row$$25$$ = $endRow$$1_rows$$8$$[$JSCompiler_StaticMethods_getElementsInRange$self_i$$22$$ + 1], $nodes_startRow$$4$$.push($rangeStartColumn_row$$25$$)
    }
  }
  return $nodes_startRow$$4$$
};
D.$JSCompiler_StaticMethods__isFocusableElement$$ = function $$JSCompiler_StaticMethods__isFocusableElement$$$($JSCompiler_StaticMethods__isFocusableElement$self$$, $elem$$15$$) {
  var $tagName$$1$$ = $elem$$15$$.tagName;
  return"INPUT" === $tagName$$1$$ || "TEXTAREA" === $tagName$$1$$ || "SELECT" === $tagName$$1$$ || "BUTTON" === $tagName$$1$$ || "A" === $tagName$$1$$ || $elem$$15$$.getAttribute("tabIndex") != D.$JSCompiler_alias_NULL$$ && 0 <= (0,window.parseInt)($elem$$15$$.getAttribute("tabIndex")) && (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods__isFocusableElement$self$$, $elem$$15$$) != $elem$$15$$
};
D.$JSCompiler_StaticMethods_isArrowKey$$ = function $$JSCompiler_StaticMethods_isArrowKey$$$($keyCode$$1$$) {
  return 38 == $keyCode$$1$$ || 40 == $keyCode$$1$$ || 37 == $keyCode$$1$$ || 39 == $keyCode$$1$$
};
D.$DvtDataGrid$$.prototype.createIndex = function $$DvtDataGrid$$$$createIndex$($row$$26$$, $column$$5$$) {
  return $row$$26$$ != D.$JSCompiler_alias_NULL$$ ? $column$$5$$ != D.$JSCompiler_alias_NULL$$ ? {row:$row$$26$$, column:$column$$5$$} : {row:$row$$26$$} : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__setActiveHeader$$ = function $$JSCompiler_StaticMethods__setActiveHeader$$$($JSCompiler_StaticMethods__setActiveHeader$self$$, $index$$61$$, $elem$$18$$, $axis$$18$$) {
  var $activeClassName$$1$$ = $JSCompiler_StaticMethods__setActiveHeader$self$$.getMappedStyle("active");
  $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem != D.$JSCompiler_alias_NULL$$ && ("row" === $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.axis ? $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem.firstChild != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem.firstChild, 
  $activeClassName$$1$$) : (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem, $activeClassName$$1$$));
  -1 != $index$$61$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$ = {}), $axis$$18$$ != D.$JSCompiler_alias_VOID$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.axis = $axis$$18$$), $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.index = $index$$61$$, $elem$$18$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem = 
  $elem$$18$$, "row" === $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.axis ? $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem.firstChild != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem.firstChild, $activeClassName$$1$$) : (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem, $activeClassName$$1$$)))
};
D.$JSCompiler_StaticMethods__scrollToActiveHeader$$ = function $$JSCompiler_StaticMethods__scrollToActiveHeader$$$($JSCompiler_StaticMethods__scrollToActiveHeader$self$$) {
  var $axis$$19$$, $index$$62$$, $elem$$19$$, $indexes$$9$$;
  $axis$$19$$ = $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_activeHeader$.axis;
  $index$$62$$ = $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_activeHeader$.index;
  $elem$$19$$ = $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_activeHeader$.elem;
  "column" === $axis$$19$$ ? $indexes$$9$$ = {row:0, column:$index$$62$$} : "row" === $axis$$19$$ && ($indexes$$9$$ = {row:$index$$62$$, column:0});
  (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods__scrollToActiveHeader$self$$, $indexes$$9$$);
  $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_cellToFocus$ != D.$JSCompiler_alias_NULL$$ ? ($elem$$19$$.setAttribute("tabIndex", 0), $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_cellToFocus$ = $elem$$19$$) : $elem$$19$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__focusHeaderElem$$)($elem$$19$$)
};
D.$JSCompiler_StaticMethods_handleCellArrowKeys$$ = function $$JSCompiler_StaticMethods_handleCellArrowKeys$$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$4_newCellIndex$$1$$, $isExtend$$) {
  var $currentCellIndex$$, $row$$27$$, $column$$6$$, $processed$$, $focusFunc$$;
  if((0,D.$JSCompiler_StaticMethods_isFetchComplete$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$) && ($currentCellIndex$$ = $isExtend$$ ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_selectionFrontier$ : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$, $currentCellIndex$$ != D.$JSCompiler_alias_NULL$$)) {
    $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$getResources$().isRTLMode() && (37 == $keyCode$$4_newCellIndex$$1$$ ? $keyCode$$4_newCellIndex$$1$$ = 39 : 39 == $keyCode$$4_newCellIndex$$1$$ && ($keyCode$$4_newCellIndex$$1$$ = 37));
    $focusFunc$$ = (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$) ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$selectAndFocus$.bind($JSCompiler_StaticMethods_handleCellArrowKeys$self$$) : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$activeAndFocus$.bind($JSCompiler_StaticMethods_handleCellArrowKeys$self$$);
    $processed$$ = D.$JSCompiler_alias_FALSE$$;
    $row$$27$$ = $currentCellIndex$$.row;
    $column$$6$$ = $currentCellIndex$$.column;
    switch($keyCode$$4_newCellIndex$$1$$) {
      case 37:
        0 < $column$$6$$ ? ("row" == $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_options$.$getSelectionMode$() ? ($keyCode$$4_newCellIndex$$1$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$.row, $column$$6$$ - 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$4_newCellIndex$$1$$), $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$activeAndFocus$($keyCode$$4_newCellIndex$$1$$)) : 
        ($keyCode$$4_newCellIndex$$1$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$27$$, $column$$6$$ - 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$4_newCellIndex$$1$$), $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$4_newCellIndex$$1$$) : $focusFunc$$($keyCode$$4_newCellIndex$$1$$)), $processed$$ = D.$JSCompiler_alias_TRUE$$) : 
        (0,D.$JSCompiler_StaticMethods__focusRowHeader$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $row$$27$$);
        break;
      case 39:
        (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "column") || $column$$6$$ + 1 < $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_dataSource$.getCount("column") ? ("row" == $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_options$.$getSelectionMode$() ? ($keyCode$$4_newCellIndex$$1$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$.row, $column$$6$$ + 
        1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$4_newCellIndex$$1$$), $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$activeAndFocus$($keyCode$$4_newCellIndex$$1$$)) : ($keyCode$$4_newCellIndex$$1$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$27$$, $column$$6$$ + 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$4_newCellIndex$$1$$), 
        $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$4_newCellIndex$$1$$) : $focusFunc$$($keyCode$$4_newCellIndex$$1$$)), $processed$$ = D.$JSCompiler_alias_TRUE$$) : $isExtend$$ || ($focusFunc$$($currentCellIndex$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $currentCellIndex$$), $processed$$ = D.$JSCompiler_alias_TRUE$$);
        break;
      case 38:
        0 < $row$$27$$ ? ($keyCode$$4_newCellIndex$$1$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$27$$ - 1, $column$$6$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$4_newCellIndex$$1$$), $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$4_newCellIndex$$1$$) : $focusFunc$$($keyCode$$4_newCellIndex$$1$$), $processed$$ = D.$JSCompiler_alias_TRUE$$) : 
        (0,D.$JSCompiler_StaticMethods__focusColumnHeader$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $column$$6$$);
        break;
      case 40:
        (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "row") || $row$$27$$ + 1 < $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_dataSource$.getCount("row") ? ($keyCode$$4_newCellIndex$$1$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$27$$ + 1, $column$$6$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$4_newCellIndex$$1$$), $isExtend$$ ? 
        (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$4_newCellIndex$$1$$) : $focusFunc$$($keyCode$$4_newCellIndex$$1$$), $processed$$ = D.$JSCompiler_alias_TRUE$$) : $isExtend$$ || ($focusFunc$$($currentCellIndex$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $currentCellIndex$$), $processed$$ = D.$JSCompiler_alias_TRUE$$);
        break;
      case 36:
        $keyCode$$4_newCellIndex$$1$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$27$$, 0);
        $focusFunc$$($keyCode$$4_newCellIndex$$1$$);
        (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$4_newCellIndex$$1$$);
        $processed$$ = D.$JSCompiler_alias_TRUE$$;
        break;
      case 35:
        $keyCode$$4_newCellIndex$$1$$ = (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "column") ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$27$$, window.Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_endCol$ - 1)) : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$27$$, window.Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_dataSource$.getCount("column") - 
        1)), $focusFunc$$($keyCode$$4_newCellIndex$$1$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$4_newCellIndex$$1$$), $processed$$ = D.$JSCompiler_alias_TRUE$$
    }
    $isExtend$$ && $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_discontiguousSelection$ && ($JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_discontiguousSelection$ = D.$JSCompiler_alias_FALSE$$);
    return $processed$$
  }
};
D.$JSCompiler_StaticMethods__focusColumnHeader$$ = function $$JSCompiler_StaticMethods__focusColumnHeader$$$($JSCompiler_StaticMethods__focusColumnHeader$self$$, $columnIndex$$3$$) {
  var $column$$7_relIndex$$, $columns$$6$$;
  $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_colHeader$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_colHeader$.firstChild && ($column$$7_relIndex$$ = $columnIndex$$3$$ - $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_startColHeader$, $columns$$6$$ = $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_colHeader$.firstChild.childNodes, $column$$7_relIndex$$ < $columns$$6$$.length && ($column$$7_relIndex$$ = $columns$$6$$[$column$$7_relIndex$$], 
  (0,D.$JSCompiler_StaticMethods__focusHeaderElem$$)($column$$7_relIndex$$), $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods__focusColumnHeader$self$$), $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_active$ = D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__focusColumnHeader$self$$) && (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__focusColumnHeader$self$$)), 
  (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)($JSCompiler_StaticMethods__focusColumnHeader$self$$, $columnIndex$$3$$, $column$$7_relIndex$$, "column")))
};
D.$JSCompiler_StaticMethods__focusHeaderElem$$ = function $$JSCompiler_StaticMethods__focusHeaderElem$$$($elem$$20$$) {
  $elem$$20$$.setAttribute("tabIndex", 0);
  $elem$$20$$.focus()
};
D.$JSCompiler_StaticMethods__focusRowHeader$$ = function $$JSCompiler_StaticMethods__focusRowHeader$$$($JSCompiler_StaticMethods__focusRowHeader$self$$, $rowIndex$$7$$) {
  var $relIndex$$1_row$$28$$, $rows$$9$$;
  $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_rowHeader$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_rowHeader$.firstChild && ($relIndex$$1_row$$28$$ = $rowIndex$$7$$ - $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_startRowHeader$ + 1, $rows$$9$$ = $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_rowHeader$.firstChild.childNodes, $relIndex$$1_row$$28$$ < $rows$$9$$.length && ($relIndex$$1_row$$28$$ = $rows$$9$$[$relIndex$$1_row$$28$$], (0,D.$JSCompiler_StaticMethods__focusHeaderElem$$)($relIndex$$1_row$$28$$), 
  $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods__focusRowHeader$self$$), $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_active$ = D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__focusRowHeader$self$$) && (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__focusRowHeader$self$$)), (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)($JSCompiler_StaticMethods__focusRowHeader$self$$, 
  $rowIndex$$7$$, $relIndex$$1_row$$28$$, "row")))
};
D.$JSCompiler_StaticMethods_scrollToIndex$$ = function $$JSCompiler_StaticMethods_scrollToIndex$$$($JSCompiler_StaticMethods_scrollToIndex$self$$, $index$$63$$) {
  var $cellLeft_row$$29$$, $cellWidth_column$$8$$, $deltaX$$3_scrollLeft$$8$$, $deltaY$$3_scrollTop$$9$$, $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$, $rowElem_rowHeight$$1$$, $viewportBottom$$5_viewportRight$$3$$, $rowTop$$1$$, $cell$$14$$;
  $cellLeft_row$$29$$ = $index$$63$$.row;
  $cellWidth_column$$8$$ = $index$$63$$.column;
  $deltaY$$3_scrollTop$$9$$ = $deltaX$$3_scrollLeft$$8$$ = 0;
  $cellLeft_row$$29$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ || $cellLeft_row$$29$$ >= $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_endRow$ ? ($deltaY$$3_scrollTop$$9$$ = $cellLeft_row$$29$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ ? $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgRowHeight$ * $cellLeft_row$$29$$ : $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgRowHeight$ * ($cellLeft_row$$29$$ + 1) - (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), 
  $deltaY$$3_scrollTop$$9$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$ - $deltaY$$3_scrollTop$$9$$, $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ = $index$$63$$) : ($databodyContent$$13_viewportLeft$$2_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$.firstChild, $rowElem_rowHeight$$1$$ = $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$.childNodes[$cellLeft_row$$29$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ + 
  1], $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$, $viewportBottom$$5_viewportRight$$3$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $rowTop$$1$$ = (0,window.parseInt)($rowElem_rowHeight$$1$$.style.top), $rowElem_rowHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($rowElem_rowHeight$$1$$), 
  $rowTop$$1$$ + $rowElem_rowHeight$$1$$ > $viewportBottom$$5_viewportRight$$3$$ ? $deltaY$$3_scrollTop$$9$$ = $viewportBottom$$5_viewportRight$$3$$ - ($rowTop$$1$$ + $rowElem_rowHeight$$1$$) : $rowTop$$1$$ < $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$ && ($deltaY$$3_scrollTop$$9$$ = $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$ - $rowTop$$1$$));
  !(0,window.isNaN)($cellWidth_column$$8$$) && $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ == D.$JSCompiler_alias_NULL$$ && ($cellWidth_column$$8$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$ || $cellWidth_column$$8$$ >= $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_endCol$ ? ($deltaX$$3_scrollLeft$$8$$ = $cellWidth_column$$8$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$ ? $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgColWidth$ * 
  $cellWidth_column$$8$$ : $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgColWidth$ * ($cellWidth_column$$8$$ + 1) - (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $deltaX$$3_scrollLeft$$8$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$ - $deltaX$$3_scrollLeft$$8$$, $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ = $index$$63$$) : ($databodyContent$$13_viewportLeft$$2_viewportTop$$4$$ = 
  $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$.firstChild, $rowElem_rowHeight$$1$$ = $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$.childNodes[$cellLeft_row$$29$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ + 1], $cell$$14$$ = $rowElem_rowHeight$$1$$.childNodes[$cellWidth_column$$8$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$], $cellLeft_row$$29$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($cell$$14$$, "left"), $cellWidth_column$$8$$ = 
  $cell$$14$$.offsetWidth, $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$, $viewportBottom$$5_viewportRight$$3$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $cellLeft_row$$29$$ < $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$ ? $deltaX$$3_scrollLeft$$8$$ = $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$ - 
  $cellLeft_row$$29$$ : $cellLeft_row$$29$$ + $cellWidth_column$$8$$ > $viewportBottom$$5_viewportRight$$3$$ && ($deltaX$$3_scrollLeft$$8$$ = $viewportBottom$$5_viewportRight$$3$$ - ($cellLeft_row$$29$$ + $cellWidth_column$$8$$))));
  if(0 != $deltaX$$3_scrollLeft$$8$$ || 0 != $deltaY$$3_scrollTop$$9$$) {
    $cell$$14$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_cellToFocus$ = $cell$$14$$), (0,D.$JSCompiler_StaticMethods_scrollDelta$$)($JSCompiler_StaticMethods_scrollToIndex$self$$, $deltaX$$3_scrollLeft$$8$$, $deltaY$$3_scrollTop$$9$$)
  }
};
D.$JSCompiler_StaticMethods_findHeader$$ = function $$JSCompiler_StaticMethods_findHeader$$$($JSCompiler_StaticMethods_findHeader$self$$, $elem$$21$$, $headerCellClassName$$) {
  $headerCellClassName$$ == D.$JSCompiler_alias_VOID$$ && ($headerCellClassName$$ = $JSCompiler_StaticMethods_findHeader$self$$.getMappedStyle("headercell"));
  if($headerCellClassName$$ != D.$JSCompiler_alias_NULL$$) {
    if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($elem$$21$$, $headerCellClassName$$)) {
      return $elem$$21$$
    }
    if($elem$$21$$.parentNode) {
      return(0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods_findHeader$self$$, $elem$$21$$.parentNode, $headerCellClassName$$)
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDataGrid$$.prototype.$handleFocus$ = function $$DvtDataGrid$$$$$handleFocus$$() {
  var $active$$, $activeClassName$$2$$;
  this.$m_active$ != D.$JSCompiler_alias_NULL$$ && ($active$$ = window.document.activeElement, $activeClassName$$2$$ = this.getMappedStyle("active"), $active$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($active$$, $activeClassName$$2$$) || (0,D.$JSCompiler_StaticMethods_highlightActive$$)(this))
};
D.$JSCompiler_StaticMethods_updateRowBanding$$ = function $$JSCompiler_StaticMethods_updateRowBanding$$$($JSCompiler_StaticMethods_updateRowBanding$self$$) {
  var $rowBandingInterval$$3$$, $rows$$10$$, $i$$23$$, $index$$64$$, $bandingClass$$;
  $rowBandingInterval$$3$$ = (0,D.$JSCompiler_StaticMethods_getRowBandingInterval$$)($JSCompiler_StaticMethods_updateRowBanding$self$$.$m_options$);
  if(0 < $rowBandingInterval$$3$$) {
    $rows$$10$$ = $JSCompiler_StaticMethods_updateRowBanding$self$$.$m_databody$.firstChild.childNodes;
    $bandingClass$$ = $JSCompiler_StaticMethods_updateRowBanding$self$$.getMappedStyle("banded");
    for($i$$23$$ = 1;$i$$23$$ < $rows$$10$$.length;$i$$23$$++) {
      $index$$64$$ = $JSCompiler_StaticMethods_updateRowBanding$self$$.$m_startRow$ + $i$$23$$ - 1, 1 === window.Math.floor($index$$64$$ / $rowBandingInterval$$3$$) % 2 ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($rows$$10$$[$i$$23$$], $bandingClass$$) || (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($rows$$10$$[$i$$23$$], $bandingClass$$) : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($rows$$10$$[$i$$23$$], $bandingClass$$) && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($rows$$10$$[$i$$23$$], 
      $bandingClass$$)
    }
  }
};
D.$DvtDataGrid$$.prototype.$registerRowExpander$ = function $$DvtDataGrid$$$$$registerRowExpander$$($args$$inline_1007_rowExpander$$2_text$$inline_1009$$) {
  this.$m_currentRowExpander$ = $args$$inline_1007_rowExpander$$2_text$$inline_1009$$;
  this.$m_expandedRowCount$ === D.$JSCompiler_alias_VOID$$ && (this.$m_expandedRowCount$ = this.$m_dataSource$.getExpandedKeys().length, $args$$inline_1007_rowExpander$$2_text$$inline_1009$$ = [this.$m_expandedRowCount$], $args$$inline_1007_rowExpander$$2_text$$inline_1009$$ = this.$getResources$().getTranslatedText("summary-expanded", $args$$inline_1007_rowExpander$$2_text$$inline_1009$$), $args$$inline_1007_rowExpander$$2_text$$inline_1009$$ != D.$JSCompiler_alias_NULL$$ && (this.$m_accInfo$.innerHTML += 
  $args$$inline_1007_rowExpander$$2_text$$inline_1009$$))
};
D.$DvtDataGrid$$.prototype.registerRowExpander = D.$DvtDataGrid$$.prototype.$registerRowExpander$;
D.$JSCompiler_StaticMethods__setAccInfoText$$ = function $$JSCompiler_StaticMethods__setAccInfoText$$$($JSCompiler_StaticMethods__setAccInfoText$self$$, $key$$35$$) {
  var $text$$10$$ = $JSCompiler_StaticMethods__setAccInfoText$self$$.$getResources$().getTranslatedText($key$$35$$, D.$JSCompiler_alias_VOID$$);
  $text$$10$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setAccInfoText$self$$.$m_accInfo$.innerHTML = $text$$10$$)
};
D.$DvtDataGrid$$.prototype.$handleExpandEvent$ = function $$DvtDataGrid$$$$$handleExpandEvent$$($event$$38$$) {
  (0,D.$JSCompiler_StaticMethods__findRowByKey$$)(this, $event$$38$$.rowKey).setAttribute("aria-expanded", D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "expand")
};
D.$DvtDataGrid$$.prototype.$handleCollapseEvent$ = function $$DvtDataGrid$$$$$handleCollapseEvent$$($event$$39$$) {
  (0,D.$JSCompiler_StaticMethods__findRowByKey$$)(this, $event$$39$$.rowKey).setAttribute("aria-expanded", D.$JSCompiler_alias_FALSE$$);
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "collapse")
};
D.$DvtDataGrid$$.prototype.$_getKey$ = function $$DvtDataGrid$$$$$_getKey$$($element$$8$$) {
  return $element$$8$$.getAttribute(this.$getResources$().getMappedAttribute("key"))
};
D.$JSCompiler_StaticMethods__handleCut$$ = function $$JSCompiler_StaticMethods__handleCut$$$($JSCompiler_StaticMethods__handleCut$self$$, $event$$41$$) {
  var $row$$35$$;
  $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handleCut$self$$.getMappedStyle("cut"));
  $row$$35$$ = $JSCompiler_StaticMethods__handleCut$self$$.find($event$$41$$.target, "row");
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($row$$35$$, $JSCompiler_StaticMethods__handleCut$self$$.getMappedStyle("cut"));
  $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$ = $row$$35$$
};
D.$JSCompiler_StaticMethods__handlePaste$$ = function $$JSCompiler_StaticMethods__handlePaste$$$($JSCompiler_StaticMethods__handlePaste$self$$, $event$$42$$) {
  var $row$$36$$;
  $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handlePaste$self$$.getMappedStyle("cut")), $row$$36$$ = $JSCompiler_StaticMethods__handlePaste$self$$.find($event$$42$$.target, "row"), $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$ !== $row$$36$$ && ((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__handlePaste$self$$) && 
  ((0,D.$JSCompiler_StaticMethods_unhighlightSelection$$)($JSCompiler_StaticMethods__handlePaste$self$$), (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__handlePaste$self$$)), $JSCompiler_StaticMethods__handlePaste$self$$.$m_dataSource$.move($JSCompiler_StaticMethods__handlePaste$self$$.$_getKey$($JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$), $JSCompiler_StaticMethods__handlePaste$self$$.$_getKey$($row$$36$$))), $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$ = 
  D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods__handleMove$$ = function $$JSCompiler_StaticMethods__handleMove$$$($JSCompiler_StaticMethods__handleMove$self$$, $event$$43$$) {
  var $deltaY$$4_rowKey$$6$$, $height$$23$$;
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$ == D.$JSCompiler_alias_NULL$$ && ($deltaY$$4_rowKey$$6$$ = $JSCompiler_StaticMethods__handleMove$self$$.$_getKey$($JSCompiler_StaticMethods__handleMove$self$$.find($event$$43$$.target, "row")), $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__handleMove$self$$, $deltaY$$4_rowKey$$6$$), $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__handleMove$self$$, 
  $deltaY$$4_rowKey$$6$$), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("move")), $JSCompiler_StaticMethods__handleMove$self$$.$m_originalTop$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top"), $JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$ = window.document.createElement("div"), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$, 
  $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("droptarget")), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$)), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$, $JSCompiler_StaticMethods__handleMove$self$$.$m_originalTop$, "top"), $JSCompiler_StaticMethods__handleMove$self$$.$m_databody$.firstChild.appendChild($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$), 
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("move")), $JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$ = window.document.createElement("div"), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$, 
  $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("droptarget")), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$)), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$, $JSCompiler_StaticMethods__handleMove$self$$.$m_originalTop$, "top"), $JSCompiler_StaticMethods__handleMove$self$$.$m_rowHeader$.firstChild.appendChild($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$)));
  $JSCompiler_StaticMethods__handleMove$self$$.$m_prevY$ = $JSCompiler_StaticMethods__handleMove$self$$.$m_currentY$;
  $JSCompiler_StaticMethods__handleMove$self$$.$m_currentY$ = $event$$43$$.pageY;
  $deltaY$$4_rowKey$$6$$ = $JSCompiler_StaticMethods__handleMove$self$$.$m_currentY$ - $JSCompiler_StaticMethods__handleMove$self$$.$m_prevY$;
  $height$$23$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top") + $deltaY$$4_rowKey$$6$$, "top");
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, "top") + $deltaY$$4_rowKey$$6$$, "top");
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.nextSibling != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.nextSibling, "top") < (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top") + $height$$23$$ / 2 ? (0,D.$JSCompiler_StaticMethods__moveDropRows$$)($JSCompiler_StaticMethods__handleMove$self$$, "nextSibling") : $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.previousSibling != 
  D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.previousSibling, "top") > (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top") - $height$$23$$ / 2 && (0,D.$JSCompiler_StaticMethods__moveDropRows$$)($JSCompiler_StaticMethods__handleMove$self$$, "previousSibling")
};
D.$JSCompiler_StaticMethods__moveDropRows$$ = function $$JSCompiler_StaticMethods__moveDropRows$$$($JSCompiler_StaticMethods__moveDropRows$self$$, $sibling$$) {
  var $newTop$$, $databodyScroller$$, $newSiblingTop$$, $headerScroller$$;
  $databodyScroller$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$.parentNode;
  "nextSibling" == $sibling$$ ? ($newTop$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_originalTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$]), $newSiblingTop$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_originalTop$) : ($newTop$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$], "top"), $newSiblingTop$$ = $newTop$$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$));
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_dropTarget$, $newTop$$, "top");
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$], $newSiblingTop$$, "top");
  $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && ($headerScroller$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$.parentNode, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_dropTargetHeader$, $newTop$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$[$sibling$$], $newSiblingTop$$, "top"));
  $JSCompiler_StaticMethods__moveDropRows$self$$.$m_originalTop$ = $newTop$$;
  "nextSibling" === $sibling$$ ? ($databodyScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$][$sibling$$]), $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && $headerScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$[$sibling$$][$sibling$$])) : 
  ($databodyScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$]), $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && $headerScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$[$sibling$$]))
};
D.$JSCompiler_StaticMethods__isMoveEnabled$$ = function $$JSCompiler_StaticMethods__isMoveEnabled$$$($JSCompiler_StaticMethods__isMoveEnabled$self_capability$$1$$) {
  $JSCompiler_StaticMethods__isMoveEnabled$self_capability$$1$$ = $JSCompiler_StaticMethods__isMoveEnabled$self_capability$$1$$.$m_dataSource$.getCapability("move");
  return"full" === $JSCompiler_StaticMethods__isMoveEnabled$self_capability$$1$$ || "row" === $JSCompiler_StaticMethods__isMoveEnabled$self_capability$$1$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__handleMoveMouseUp$$ = function $$JSCompiler_StaticMethods__handleMoveMouseUp$$$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$, $validUp$$) {
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dropTarget$.parentNode.removeChild($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dropTarget$);
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$.style.zIndex = 0;
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dropTargetHeader$.parentNode.removeChild($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dropTargetHeader$), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRowHeader$.style.zIndex = 0);
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_active$ = D.$JSCompiler_alias_NULL$$;
  (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$) && ((0,D.$JSCompiler_StaticMethods_unhighlightSelection$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$), (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$));
  $validUp$$ == D.$JSCompiler_alias_TRUE$$ ? $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dataSource$.move($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$_getKey$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$.nextSibling === D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$_getKey$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$.nextSibling)) : 
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dataSource$.move($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$_getKey$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$_getKey$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$));
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_databodyMove$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$ = function $$JSCompiler_StaticMethods__isMoveOnRowEnabled$$$($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$, $row$$37$$) {
  return $row$$37$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_FALSE$$ : (0,D.$JSCompiler_StaticMethods__isMoveEnabled$$)($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$) && ($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$_getKey$($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_databody$.firstChild.childNodes[$JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_active$.row + 
  1]) : D.$JSCompiler_alias_NULL$$) === $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$_getKey$($row$$37$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_unhighlightSelection$$ = function $$JSCompiler_StaticMethods_unhighlightSelection$$$($JSCompiler_StaticMethods_unhighlightSelection$self$$) {
  var $i$$31$$, $ranges$$;
  $ranges$$ = $JSCompiler_StaticMethods_unhighlightSelection$self$$.$GetSelection$();
  for($i$$31$$ = 0;$i$$31$$ < $ranges$$.length;$i$$31$$ += 1) {
    (0,D.$JSCompiler_StaticMethods_unhighlightRange$$)($JSCompiler_StaticMethods_unhighlightSelection$self$$, $ranges$$[$i$$31$$])
  }
  $JSCompiler_StaticMethods_unhighlightSelection$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && "row" == $JSCompiler_StaticMethods_unhighlightSelection$self$$.$m_options$.$getSelectionMode$() && (0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods_unhighlightSelection$self$$)
};
D.$JSCompiler_StaticMethods_unhighlightRange$$ = function $$JSCompiler_StaticMethods_unhighlightRange$$$($JSCompiler_StaticMethods_unhighlightRange$self$$, $range$$9$$) {
  var $elems$$inline_1100$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_unhighlightRange$self$$, $range$$9$$), $i$$inline_1101$$, $selectedClassName$$inline_1102$$, $activeClassName$$inline_1103$$, $elem$$inline_1104$$;
  if(!($elems$$inline_1100$$ == D.$JSCompiler_alias_NULL$$ || 0 == $elems$$inline_1100$$.length)) {
    if($selectedClassName$$inline_1102$$ = $JSCompiler_StaticMethods_unhighlightRange$self$$.getMappedStyle("selected"), $activeClassName$$inline_1103$$ = $JSCompiler_StaticMethods_unhighlightRange$self$$.getMappedStyle("active"), $selectedClassName$$inline_1102$$ != D.$JSCompiler_alias_NULL$$ && $activeClassName$$inline_1103$$ != D.$JSCompiler_alias_NULL$$) {
      for($i$$inline_1101$$ = 0;$i$$inline_1101$$ < $elems$$inline_1100$$.length;$i$$inline_1101$$ += 1) {
        $elem$$inline_1104$$ = $elems$$inline_1100$$[$i$$inline_1101$$], (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($elem$$inline_1104$$, $activeClassName$$inline_1103$$), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($elem$$inline_1104$$, $selectedClassName$$inline_1102$$), (0,D.$JSCompiler_StaticMethods_unsetAriaProperties$$)($elem$$inline_1104$$)
      }
    }
  }
};
D.$JSCompiler_StaticMethods_highlightElems$$ = function $$JSCompiler_StaticMethods_highlightElems$$$($JSCompiler_StaticMethods_highlightElems$self$$, $elems$$4$$) {
  var $selectedClassName$$3$$, $i$$33$$, $elem$$26$$;
  if(!($elems$$4$$ == D.$JSCompiler_alias_NULL$$ || 0 == $elems$$4$$.length)) {
    if($selectedClassName$$3$$ = $JSCompiler_StaticMethods_highlightElems$self$$.getMappedStyle("selected"), $selectedClassName$$3$$ != D.$JSCompiler_alias_NULL$$) {
      for($i$$33$$ = 0;$i$$33$$ < $elems$$4$$.length;$i$$33$$ += 1) {
        $elem$$26$$ = $elems$$4$$[$i$$33$$], (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($elem$$26$$, $selectedClassName$$3$$), (0,D.$JSCompiler_StaticMethods_setAriaProperties$$)($JSCompiler_StaticMethods_highlightElems$self$$, $elem$$26$$)
      }
    }
  }
};
D.$JSCompiler_StaticMethods_applySelection$$ = function $$JSCompiler_StaticMethods_applySelection$$$($JSCompiler_StaticMethods_applySelection$self$$, $startRow$$5$$, $endRow$$2$$) {
  var $i$$34$$, $ranges$$1$$, $elems$$5$$;
  $ranges$$1$$ = $JSCompiler_StaticMethods_applySelection$self$$.$GetSelection$();
  for($i$$34$$ = 0;$i$$34$$ < $ranges$$1$$.length;$i$$34$$ += 1) {
    $elems$$5$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_applySelection$self$$, $ranges$$1$$[$i$$34$$], $startRow$$5$$, $endRow$$2$$), (0,D.$JSCompiler_StaticMethods_highlightElems$$)($JSCompiler_StaticMethods_applySelection$self$$, $elems$$5$$)
  }
};
D.$DvtDataGrid$$.prototype.$_isSelected$ = function $$DvtDataGrid$$$$$_isSelected$$($cell$$18$$) {
  var $selectedClassName$$4$$ = this.getMappedStyle("selected");
  return $selectedClassName$$4$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($cell$$18$$, $selectedClassName$$4$$) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_handleDatabodyClickSelection$$ = function $$JSCompiler_StaticMethods_handleDatabodyClickSelection$$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $event$$59$$) {
  var $index$$71_rowIndex$$inline_1108$$, $cell$$19_columnIndex$$inline_1109_index$$inline_1107$$, $ctrlKey$$2_indexToRemove$$inline_1110$$, $ranges$$inline_1111_shiftKey$$2$$;
  $cell$$19_columnIndex$$inline_1109_index$$inline_1107$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $event$$59$$.target);
  $cell$$19_columnIndex$$inline_1109_index$$inline_1107$$ != D.$JSCompiler_alias_NULL$$ && ($index$$71_rowIndex$$inline_1108$$ = {row:$JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$getRowIndex$($cell$$19_columnIndex$$inline_1109_index$$inline_1107$$.parentNode), column:$JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$getCellIndex$($cell$$19_columnIndex$$inline_1109_index$$inline_1107$$)});
  if($index$$71_rowIndex$$inline_1108$$ != D.$JSCompiler_alias_NULL$$ && $index$$71_rowIndex$$inline_1108$$ != D.$JSCompiler_alias_VOID$$) {
    (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, -1);
    $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$;
    (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $index$$71_rowIndex$$inline_1108$$);
    $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$GetSelection$().slice(0);
    $ctrlKey$$2_indexToRemove$$inline_1110$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_utils$, $event$$59$$);
    $ranges$$inline_1111_shiftKey$$2$$ = $event$$59$$.shiftKey;
    if((0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$)) {
      if($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_utils$.$isTouchDevice$()) {
        if($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$_isSelected$($cell$$19_columnIndex$$inline_1109_index$$inline_1107$$)) {
          $cell$$19_columnIndex$$inline_1109_index$$inline_1107$$ = $index$$71_rowIndex$$inline_1108$$;
          var $i$$inline_1112$$, $endIndex$$inline_1115_range$$inline_1113_rangeEndColumn$$inline_1119$$, $rangeStartColumn$$inline_1118_startIndex$$inline_1114$$, $rangeStartRow$$inline_1116$$, $rangeEndRow$$inline_1117$$;
          "row" == $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_options$.$getSelectionMode$() && ($cell$$19_columnIndex$$inline_1109_index$$inline_1107$$ = $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.createIndex($cell$$19_columnIndex$$inline_1109_index$$inline_1107$$.row));
          $index$$71_rowIndex$$inline_1108$$ = $cell$$19_columnIndex$$inline_1109_index$$inline_1107$$.row;
          $cell$$19_columnIndex$$inline_1109_index$$inline_1107$$ = $cell$$19_columnIndex$$inline_1109_index$$inline_1107$$.column;
          $ctrlKey$$2_indexToRemove$$inline_1110$$ = -1;
          $ranges$$inline_1111_shiftKey$$2$$ = $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$GetSelection$();
          for($i$$inline_1112$$ = 0;$i$$inline_1112$$ < $ranges$$inline_1111_shiftKey$$2$$.length;$i$$inline_1112$$ += 1) {
            if($endIndex$$inline_1115_range$$inline_1113_rangeEndColumn$$inline_1119$$ = $ranges$$inline_1111_shiftKey$$2$$[$i$$inline_1112$$], $rangeStartColumn$$inline_1118_startIndex$$inline_1114$$ = $endIndex$$inline_1115_range$$inline_1113_rangeEndColumn$$inline_1119$$.startIndex, $endIndex$$inline_1115_range$$inline_1113_rangeEndColumn$$inline_1119$$ = (0,D.$JSCompiler_StaticMethods_getEndIndex$$)($endIndex$$inline_1115_range$$inline_1113_rangeEndColumn$$inline_1119$$), $rangeStartRow$$inline_1116$$ = 
            $rangeStartColumn$$inline_1118_startIndex$$inline_1114$$.row, $rangeEndRow$$inline_1117$$ = $endIndex$$inline_1115_range$$inline_1113_rangeEndColumn$$inline_1119$$.row, !($rangeStartRow$$inline_1116$$ != $index$$71_rowIndex$$inline_1108$$ || $rangeEndRow$$inline_1117$$ != $index$$71_rowIndex$$inline_1108$$)) {
              if(!(0,window.isNaN)($rangeStartColumn$$inline_1118_startIndex$$inline_1114$$.column) && !(0,window.isNaN)($endIndex$$inline_1115_range$$inline_1113_rangeEndColumn$$inline_1119$$.column)) {
                if($rangeStartColumn$$inline_1118_startIndex$$inline_1114$$ = $rangeStartColumn$$inline_1118_startIndex$$inline_1114$$.column, $endIndex$$inline_1115_range$$inline_1113_rangeEndColumn$$inline_1119$$ = $endIndex$$inline_1115_range$$inline_1113_rangeEndColumn$$inline_1119$$.column, !($rangeStartColumn$$inline_1118_startIndex$$inline_1114$$ != $cell$$19_columnIndex$$inline_1109_index$$inline_1107$$ || $endIndex$$inline_1115_range$$inline_1113_rangeEndColumn$$inline_1119$$ != $cell$$19_columnIndex$$inline_1109_index$$inline_1107$$)) {
                  $ctrlKey$$2_indexToRemove$$inline_1110$$ = $i$$inline_1112$$;
                  break
                }
              }else {
                if((0,window.isNaN)($cell$$19_columnIndex$$inline_1109_index$$inline_1107$$)) {
                  $ctrlKey$$2_indexToRemove$$inline_1110$$ = $i$$inline_1112$$;
                  break
                }
              }
            }
          }
          -1 != $ctrlKey$$2_indexToRemove$$inline_1110$$ && ((0,D.$JSCompiler_StaticMethods_unhighlightRange$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $ranges$$inline_1111_shiftKey$$2$$[$ctrlKey$$2_indexToRemove$$inline_1110$$]), $ranges$$inline_1111_shiftKey$$2$$.splice($ctrlKey$$2_indexToRemove$$inline_1110$$, 1))
        }else {
          (0,D.$JSCompiler_StaticMethods_augmentSelectionAndFocus$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $index$$71_rowIndex$$inline_1108$$)
        }
      }else {
        !$ctrlKey$$2_indexToRemove$$inline_1110$$ && !$ranges$$inline_1111_shiftKey$$2$$ ? $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$71_rowIndex$$inline_1108$$) : !$ctrlKey$$2_indexToRemove$$inline_1110$$ && $ranges$$inline_1111_shiftKey$$2$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $index$$71_rowIndex$$inline_1108$$) : (0,D.$JSCompiler_StaticMethods_augmentSelectionAndFocus$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, 
        $index$$71_rowIndex$$inline_1108$$)
      }
    }else {
      $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$71_rowIndex$$inline_1108$$)
    }
    $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$GetSelection$();
    $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$fireSelectionEvent$($event$$59$$)
  }
};
D.$JSCompiler_StaticMethods__clearSelection$$ = function $$JSCompiler_StaticMethods__clearSelection$$$($JSCompiler_StaticMethods__clearSelection$self$$) {
  (0,D.$JSCompiler_StaticMethods_unhighlightSelection$$)($JSCompiler_StaticMethods__clearSelection$self$$);
  $JSCompiler_StaticMethods__clearSelection$self$$.$GetSelection$().length = 0
};
D.$JSCompiler_StaticMethods_setActionableMode$$ = function $$JSCompiler_StaticMethods_setActionableMode$$$($JSCompiler_StaticMethods_setActionableMode$self$$, $flag$$3$$) {
  $JSCompiler_StaticMethods_setActionableMode$self$$.$m_keyMode$ = $flag$$3$$ ? "actionable" : "navigation"
};
D.$JSCompiler_StaticMethods__selectEntireRow$$ = function $$JSCompiler_StaticMethods__selectEntireRow$$$($JSCompiler_StaticMethods__selectEntireRow$self$$, $endIndex$$5_row$$40$$, $event$$61$$) {
  var $startIndex$$4$$;
  $startIndex$$4$$ = $JSCompiler_StaticMethods__selectEntireRow$self$$.createIndex($endIndex$$5_row$$40$$, 0);
  $endIndex$$5_row$$40$$ = $JSCompiler_StaticMethods__selectEntireRow$self$$.createIndex($endIndex$$5_row$$40$$, -1);
  (0,D.$JSCompiler_StaticMethods__selectRange$$)($JSCompiler_StaticMethods__selectEntireRow$self$$, $startIndex$$4$$, $endIndex$$5_row$$40$$, $event$$61$$)
};
D.$JSCompiler_StaticMethods__selectEntireColumn$$ = function $$JSCompiler_StaticMethods__selectEntireColumn$$$($JSCompiler_StaticMethods__selectEntireColumn$self$$, $column$$10_endIndex$$6$$, $event$$62$$) {
  var $startIndex$$5$$;
  $startIndex$$5$$ = $JSCompiler_StaticMethods__selectEntireColumn$self$$.createIndex(0, $column$$10_endIndex$$6$$);
  $column$$10_endIndex$$6$$ = $JSCompiler_StaticMethods__selectEntireColumn$self$$.createIndex(-1, $column$$10_endIndex$$6$$);
  (0,D.$JSCompiler_StaticMethods__selectRange$$)($JSCompiler_StaticMethods__selectEntireColumn$self$$, $startIndex$$5$$, $column$$10_endIndex$$6$$, $event$$62$$)
};
D.$JSCompiler_StaticMethods__selectRange$$ = function $$JSCompiler_StaticMethods__selectRange$$$($JSCompiler_StaticMethods__selectRange$self$$, $elems$$inline_1125_newRange$$1_startIndex$$6$$, $endIndex$$7$$, $event$$63$$) {
  (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__selectRange$self$$);
  $elems$$inline_1125_newRange$$1_startIndex$$6$$ = $JSCompiler_StaticMethods__selectRange$self$$.createRange($elems$$inline_1125_newRange$$1_startIndex$$6$$, $endIndex$$7$$);
  $JSCompiler_StaticMethods__selectRange$self$$.$GetSelection$().push($elems$$inline_1125_newRange$$1_startIndex$$6$$);
  $elems$$inline_1125_newRange$$1_startIndex$$6$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods__selectRange$self$$, $elems$$inline_1125_newRange$$1_startIndex$$6$$);
  (0,D.$JSCompiler_StaticMethods_highlightElems$$)($JSCompiler_StaticMethods__selectRange$self$$, $elems$$inline_1125_newRange$$1_startIndex$$6$$);
  $JSCompiler_StaticMethods__selectRange$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__selectRange$self$$.$m_selectionFrontier$ = $JSCompiler_StaticMethods__selectRange$self$$.$m_active$, (0,D.$JSCompiler_StaticMethods_highlightActive$$)($JSCompiler_StaticMethods__selectRange$self$$));
  $JSCompiler_StaticMethods__selectRange$self$$.$fireSelectionEvent$($event$$63$$)
};
D.$JSCompiler_StaticMethods_focusPrevElementOutsideGrid$$ = function $$JSCompiler_StaticMethods_focusPrevElementOutsideGrid$$$($JSCompiler_StaticMethods_focusPrevElementOutsideGrid$self$$, $elem$$28$$) {
  var $lastChild_parent$$2_prev$$2$$;
  $elem$$28$$ == D.$JSCompiler_alias_VOID$$ && ($elem$$28$$ = $JSCompiler_StaticMethods_focusPrevElementOutsideGrid$self$$.$m_root$);
  $lastChild_parent$$2_prev$$2$$ = $elem$$28$$.previousElementSibling;
  $lastChild_parent$$2_prev$$2$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods__isFocusableElement$$)($JSCompiler_StaticMethods_focusPrevElementOutsideGrid$self$$, $lastChild_parent$$2_prev$$2$$) ? $lastChild_parent$$2_prev$$2$$.focus() : (0,D.$JSCompiler_StaticMethods_focusPrevElementOutsideGrid$$)($JSCompiler_StaticMethods_focusPrevElementOutsideGrid$self$$, $lastChild_parent$$2_prev$$2$$) : ($lastChild_parent$$2_prev$$2$$ = $elem$$28$$.parentNode, $lastChild_parent$$2_prev$$2$$ != 
  D.$JSCompiler_alias_NULL$$ && ($lastChild_parent$$2_prev$$2$$ = $lastChild_parent$$2_prev$$2$$.lastElementChild, $lastChild_parent$$2_prev$$2$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__isFocusableElement$$)($JSCompiler_StaticMethods_focusPrevElementOutsideGrid$self$$, $lastChild_parent$$2_prev$$2$$) ? $lastChild_parent$$2_prev$$2$$.focus() : (0,D.$JSCompiler_StaticMethods_focusPrevElementOutsideGrid$$)($JSCompiler_StaticMethods_focusPrevElementOutsideGrid$self$$, $lastChild_parent$$2_prev$$2$$)))
};
D.$JSCompiler_StaticMethods_focusNextElementOutsideGrid$$ = function $$JSCompiler_StaticMethods_focusNextElementOutsideGrid$$$($JSCompiler_StaticMethods_focusNextElementOutsideGrid$self$$, $elem$$29$$) {
  var $firstChild_next$$;
  $elem$$29$$ == D.$JSCompiler_alias_VOID$$ && ($elem$$29$$ = $JSCompiler_StaticMethods_focusNextElementOutsideGrid$self$$.$m_root$);
  $firstChild_next$$ = $elem$$29$$.nextElementSibling;
  $firstChild_next$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods__isFocusableElement$$)($JSCompiler_StaticMethods_focusNextElementOutsideGrid$self$$, $firstChild_next$$) ? $firstChild_next$$.focus() : (0,D.$JSCompiler_StaticMethods_focusNextElementOutsideGrid$$)($JSCompiler_StaticMethods_focusNextElementOutsideGrid$self$$, $firstChild_next$$) : ($firstChild_next$$ = $elem$$29$$.firstElementChild, $firstChild_next$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods__isFocusableElement$$)($JSCompiler_StaticMethods_focusNextElementOutsideGrid$self$$, 
  $firstChild_next$$) ? $firstChild_next$$.focus() : (0,D.$JSCompiler_StaticMethods_focusNextElementOutsideGrid$$)($JSCompiler_StaticMethods_focusNextElementOutsideGrid$self$$, $firstChild_next$$)))
};
D.$DvtDataGrid$$.prototype.$GetSelection$ = function $$DvtDataGrid$$$$$GetSelection$$() {
  this.$m_selection$ == D.$JSCompiler_alias_NULL$$ && (this.$m_selection$ = []);
  return this.$m_selection$
};
D.$DvtDataGrid$$.prototype.GetSelection = D.$DvtDataGrid$$.prototype.$GetSelection$;
D.$DvtDataGrid$$.prototype.$SetSelection$ = function $$DvtDataGrid$$$$$SetSelection$$($selection$$2$$) {
  $selection$$2$$ != D.$JSCompiler_alias_VOID$$ && ($selection$$2$$ == D.$JSCompiler_alias_NULL$$ && ($selection$$2$$ = []), this.$m_selection$ = $selection$$2$$, this.$m_databody$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_applySelection$$)(this, this.$m_startRow$, this.$m_endRow$), this.$fireSelectionEvent$(D.$JSCompiler_alias_NULL$$))
};
D.$DvtDataGrid$$.prototype.SetSelection = D.$DvtDataGrid$$.prototype.$SetSelection$;
D.$DvtDataGrid$$.prototype.$fireSelectionEvent$ = function $$DvtDataGrid$$$$$fireSelectionEvent$$($details$$5_event$$64$$) {
  $details$$5_event$$64$$ = {event:$details$$5_event$$64$$, ui:{selection:this.$GetSelection$()}};
  this.fireEvent("select", $details$$5_event$$64$$)
};
D.$JSCompiler_StaticMethods_extendSelection$$ = function $$JSCompiler_StaticMethods_extendSelection$$$($JSCompiler_StaticMethods_extendSelection$self$$, $index$$72$$) {
  var $anchor_elems$$inline_1137_newRange$$2$$, $selection$$3$$, $currentRange$$, $startIndexesMatch$$, $endIndexesMatch$$;
  $anchor_elems$$inline_1137_newRange$$2$$ = $JSCompiler_StaticMethods_extendSelection$self$$.$m_active$;
  if($anchor_elems$$inline_1137_newRange$$2$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_extendSelection$self$$.$m_selectionFrontier$ = $index$$72$$, "row" == $JSCompiler_StaticMethods_extendSelection$self$$.$m_options$.$getSelectionMode$() && ($index$$72$$ = $JSCompiler_StaticMethods_extendSelection$self$$.createIndex($index$$72$$.row)), $anchor_elems$$inline_1137_newRange$$2$$ = $JSCompiler_StaticMethods_extendSelection$self$$.createRange($anchor_elems$$inline_1137_newRange$$2$$, 
  $index$$72$$), $selection$$3$$ = $JSCompiler_StaticMethods_extendSelection$self$$.$GetSelection$(), $currentRange$$ = $selection$$3$$[$selection$$3$$.length - 1], $startIndexesMatch$$ = $currentRange$$.startIndex.row == $anchor_elems$$inline_1137_newRange$$2$$.startIndex.row, $currentRange$$.startIndex.column != D.$JSCompiler_alias_NULL$$ && $anchor_elems$$inline_1137_newRange$$2$$.startIndex.column != D.$JSCompiler_alias_NULL$$ && ($startIndexesMatch$$ = $startIndexesMatch$$ && $currentRange$$.startIndex.column == 
  $anchor_elems$$inline_1137_newRange$$2$$.startIndex.column), $endIndexesMatch$$ = $currentRange$$.endIndex.row == $anchor_elems$$inline_1137_newRange$$2$$.endIndex.row, $currentRange$$.endIndex.column != D.$JSCompiler_alias_NULL$$ && $anchor_elems$$inline_1137_newRange$$2$$.endIndex.column != D.$JSCompiler_alias_NULL$$ && ($endIndexesMatch$$ = $endIndexesMatch$$ && $currentRange$$.endIndex.column == $anchor_elems$$inline_1137_newRange$$2$$.endIndex.column), !$startIndexesMatch$$ || !$endIndexesMatch$$)) {
    $selection$$3$$.pop(), $selection$$3$$.push($anchor_elems$$inline_1137_newRange$$2$$), (0,D.$JSCompiler_StaticMethods_unhighlightRange$$)($JSCompiler_StaticMethods_extendSelection$self$$, $currentRange$$), $anchor_elems$$inline_1137_newRange$$2$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_extendSelection$self$$, $anchor_elems$$inline_1137_newRange$$2$$), (0,D.$JSCompiler_StaticMethods_highlightElems$$)($JSCompiler_StaticMethods_extendSelection$self$$, $anchor_elems$$inline_1137_newRange$$2$$), 
    (0,D.$JSCompiler_StaticMethods_highlightActive$$)($JSCompiler_StaticMethods_extendSelection$self$$)
  }
};
D.$JSCompiler_StaticMethods_augmentSelectionAndFocus$$ = function $$JSCompiler_StaticMethods_augmentSelectionAndFocus$$$($JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$, $index$$73$$) {
  var $selection$$4$$, $range$$12$$;
  $selection$$4$$ = $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$GetSelection$();
  0 < $selection$$4$$.length && $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$, !$JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$m_discontiguousSelection$);
  $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$m_active$ = $index$$73$$;
  $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$m_selectionFrontier$ = $index$$73$$;
  "row" == $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$m_options$.$getSelectionMode$() && ($index$$73$$ = $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.createIndex($index$$73$$.row));
  $range$$12$$ = $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.createRange($index$$73$$, $index$$73$$);
  $selection$$4$$.push($range$$12$$);
  (0,D.$JSCompiler_StaticMethods_highlightActive$$)($JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$);
  (0,D.$JSCompiler_StaticMethods_highlightIndex$$)($JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$, $index$$73$$, "selected")
};
D.$DvtDataGrid$$.prototype.$selectAndFocus$ = function $$DvtDataGrid$$$$$selectAndFocus$$($index$$74$$) {
  this.$m_discontiguousSelection$ ? this.$m_active$ != D.$JSCompiler_alias_NULL$$ && this.$m_selectionFrontier$ == this.$m_active$ && ((0,D.$JSCompiler_StaticMethods_unhighlightActive$$)(this), this.$GetSelection$().pop()) : (0,D.$JSCompiler_StaticMethods__clearSelection$$)(this);
  (0,D.$JSCompiler_StaticMethods_augmentSelectionAndFocus$$)(this, $index$$74$$)
};
D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$ = function $$JSCompiler_StaticMethods_getFocusableElementsInNode$$$($node$$3_nodes$$1$$) {
  var $inputElems$$, $elem$$31$$, $nodeCount$$, $inputRegExp$$, $i$$36$$;
  $inputElems$$ = [];
  if(window.document.evaluate) {
    $node$$3_nodes$$1$$ = window.document.evaluate(".//input|.//select|.//textarea|.//button|.//a|.//INPUT|.//SELECT|.//TEXTAREA|.//BUTTON|.//A", $node$$3_nodes$$1$$, D.$JSCompiler_alias_NULL$$, window.XPathResult.ANY_TYPE, D.$JSCompiler_alias_NULL$$);
    for($elem$$31$$ = $node$$3_nodes$$1$$.iterateNext();$elem$$31$$;) {
      !$elem$$31$$.disabled && (!$elem$$31$$.tabIndex || 0 < $elem$$31$$.tabIndex) && $inputElems$$.push($elem$$31$$), $elem$$31$$ = $node$$3_nodes$$1$$.iterateNext()
    }
  }else {
    $node$$3_nodes$$1$$ = $node$$3_nodes$$1$$.getElementsByTagName("*");
    $nodeCount$$ = $node$$3_nodes$$1$$.length;
    $inputRegExp$$ = /^INPUT|SELECT|BUTTON|^A\b|TEXTAREA/;
    for($i$$36$$ = 0;$i$$36$$ < $nodeCount$$;$i$$36$$ += 1) {
      $elem$$31$$ = $node$$3_nodes$$1$$[$i$$36$$], $elem$$31$$.tagName.match($inputRegExp$$) && (!$elem$$31$$.disabled && (!$elem$$31$$.tabIndex || 0 < $elem$$31$$.tabIndex)) && $inputElems$$.push($elem$$31$$)
    }
  }
  return $inputElems$$
};
D.$JSCompiler_StaticMethods__isDOMElementResizable$$ = function $$JSCompiler_StaticMethods__isDOMElementResizable$$$($JSCompiler_StaticMethods__isDOMElementResizable$self$$, $element$$11$$) {
  return"true" === $element$$11$$.getAttribute($JSCompiler_StaticMethods__isDOMElementResizable$self$$.$getResources$().getMappedAttribute("resizable"))
};
D.$JSCompiler_StaticMethods__isDOMElementSiblingResizable$$ = function $$JSCompiler_StaticMethods__isDOMElementSiblingResizable$$$($JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$, $element$$12$$) {
  if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$12$$, $JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$.getMappedStyle("colheadercell"))) {
    if($element$$12$$.previousSibling !== D.$JSCompiler_alias_NULL$$) {
      return"true" === $element$$12$$.previousSibling.getAttribute($JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$.$getResources$().getMappedAttribute("resizable"))
    }
  }else {
    if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$12$$, $JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$.getMappedStyle("rowheadercell")) && $element$$12$$.parentNode.previousSibling.firstChild !== D.$JSCompiler_alias_NULL$$) {
      return"true" === $element$$12$$.parentNode.previousSibling.firstChild.getAttribute($JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$.$getResources$().getMappedAttribute("resizable"))
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_manageHeaderCursor$$ = function $$JSCompiler_StaticMethods_manageHeaderCursor$$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $event$$56$$) {
  var $elem$$22$$ = $event$$56$$.target, $resizeHeaderMode$$, $edges_leftEdge$$inline_1074$$, $cursorX$$, $cursorY$$, $widthResizable$$, $heightResizable$$, $siblingResizable$$, $elem$$inline_1072_rtl$$1_targetHeight$$inline_1077$$, $elem$$22$$ = $event$$56$$.target;
  if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($elem$$22$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.getMappedStyle("colheadercell"))) {
    $resizeHeaderMode$$ = "column", $heightResizable$$ = "enable" === (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_options$, $resizeHeaderMode$$).height ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$, $widthResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$22$$), $siblingResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementSiblingResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, 
    $elem$$22$$)
  }else {
    if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($elem$$22$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.getMappedStyle("rowheadercell"))) {
      $resizeHeaderMode$$ = "row", $widthResizable$$ = "enable" === (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_options$, $resizeHeaderMode$$).width ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$, $heightResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$22$$), $siblingResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementSiblingResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, 
      $elem$$22$$)
    }else {
      return"default"
    }
  }
  $cursorX$$ = $event$$56$$.pageX;
  $cursorY$$ = $event$$56$$.pageY;
  $elem$$inline_1072_rtl$$1_targetHeight$$inline_1077$$ = $elem$$22$$;
  var $elementXY$$inline_1073_topEdge$$inline_1075$$, $targetWidth$$inline_1076$$;
  $elementXY$$inline_1073_topEdge$$inline_1075$$ = (0,D.$JSCompiler_StaticMethods_findPos$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$inline_1072_rtl$$1_targetHeight$$inline_1077$$);
  $edges_leftEdge$$inline_1074$$ = $elementXY$$inline_1073_topEdge$$inline_1075$$[0];
  $elementXY$$inline_1073_topEdge$$inline_1075$$ = $elementXY$$inline_1073_topEdge$$inline_1075$$[1];
  (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($elem$$inline_1072_rtl$$1_targetHeight$$inline_1077$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.getMappedStyle("colheadercell")) ? ($targetWidth$$inline_1076$$ = (0,window.isNaN)((0,D.$JSCompiler_StaticMethods_getElementWidth$$)($elem$$inline_1072_rtl$$1_targetHeight$$inline_1077$$)) ? 50 : (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($elem$$inline_1072_rtl$$1_targetHeight$$inline_1077$$), $elem$$inline_1072_rtl$$1_targetHeight$$inline_1077$$ = 
  (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_colHeader$)) : ($targetWidth$$inline_1076$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_rowHeader$), $elem$$inline_1072_rtl$$1_targetHeight$$inline_1077$$ = (0,window.isNaN)((0,D.$JSCompiler_StaticMethods_getElementHeight$$)($elem$$inline_1072_rtl$$1_targetHeight$$inline_1077$$.parentNode)) ? (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$) : 
  (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($elem$$inline_1072_rtl$$1_targetHeight$$inline_1077$$.parentNode));
  $edges_leftEdge$$inline_1074$$ = [$edges_leftEdge$$inline_1074$$, $elementXY$$inline_1073_topEdge$$inline_1075$$, $edges_leftEdge$$inline_1074$$ + $targetWidth$$inline_1076$$, $elementXY$$inline_1073_topEdge$$inline_1075$$ + $elem$$inline_1072_rtl$$1_targetHeight$$inline_1077$$];
  $elem$$inline_1072_rtl$$1_targetHeight$$inline_1077$$ = $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$getResources$().isRTLMode();
  if($widthResizable$$ && ($elem$$inline_1072_rtl$$1_targetHeight$$inline_1077$$ ? $cursorX$$ < $edges_leftEdge$$inline_1074$$[0] + 5 : $cursorX$$ > $edges_leftEdge$$inline_1074$$[2] - 5)) {
    return $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$22$$, "col-resize"
  }
  if("column" === $resizeHeaderMode$$ && $siblingResizable$$ && ($elem$$inline_1072_rtl$$1_targetHeight$$inline_1077$$ ? $cursorX$$ > $edges_leftEdge$$inline_1074$$[2] - 5 : $cursorX$$ < $edges_leftEdge$$inline_1074$$[0] + 5)) {
    if($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$22$$.previousSibling, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ !== D.$JSCompiler_alias_NULL$$) {
      return"col-resize"
    }
  }
  return $heightResizable$$ && $cursorY$$ > $edges_leftEdge$$inline_1074$$[3] - 5 ? ($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$22$$, "row-resize") : "row" === $resizeHeaderMode$$ && ($siblingResizable$$ && $cursorY$$ < $edges_leftEdge$$inline_1074$$[1] + 5) && ($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$22$$.parentNode.previousSibling.firstChild, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ !== 
  D.$JSCompiler_alias_NULL$$) ? "row-resize" : "default"
};
D.$JSCompiler_StaticMethods_resizeColWidth$$ = function $$JSCompiler_StaticMethods_resizeColWidth$$$($JSCompiler_StaticMethods_resizeColWidth$self$$, $oldElementWidth$$1_widthChange$$, $newElementWidth$$1$$) {
  var $newScrollerWidth$$;
  $oldElementWidth$$1_widthChange$$ = $newElementWidth$$1$$ - $oldElementWidth$$1_widthChange$$;
  $newScrollerWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_scroller$.firstChild) + $oldElementWidth$$1_widthChange$$;
  if($newScrollerWidth$$ >= (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$)) {
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_scroller$.firstChild, $newScrollerWidth$$);
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.firstChild, $newScrollerWidth$$);
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_colHeader$.firstChild, $newScrollerWidth$$);
    (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_resizeColWidth$self$$);
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$, $newElementWidth$$1$$);
    var $dir$$inline_1082$$, $databodyRows$$inline_1083$$, $children$$inline_1084$$, $after$$inline_1085$$, $i$$inline_1086$$, $newStart$$inline_1087$$, $j$$inline_1088$$;
    $dir$$inline_1082$$ = $JSCompiler_StaticMethods_resizeColWidth$self$$.$getResources$().isRTLMode() ? "right" : "left";
    $databodyRows$$inline_1083$$ = $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.firstChild.childNodes;
    $children$$inline_1084$$ = $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$.parentNode.childNodes;
    $after$$inline_1085$$ = D.$JSCompiler_alias_FALSE$$;
    if($children$$inline_1084$$.length === $databodyRows$$inline_1083$$[1].childNodes.length) {
      $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.style.display = "none";
      $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_colHeader$.style.display = "none";
      for($i$$inline_1086$$ = 0;$i$$inline_1086$$ < $children$$inline_1084$$.length;$i$$inline_1086$$ += 1) {
        if($children$$inline_1084$$[$i$$inline_1086$$] !== $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$ && $after$$inline_1085$$ === D.$JSCompiler_alias_TRUE$$) {
          $newStart$$inline_1087$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($children$$inline_1084$$[$i$$inline_1086$$], $dir$$inline_1082$$) + $oldElementWidth$$1_widthChange$$;
          (0,D.$JSCompiler_StaticMethods_setElementDir$$)($children$$inline_1084$$[$i$$inline_1086$$], $newStart$$inline_1087$$, $dir$$inline_1082$$);
          for($j$$inline_1088$$ = 1;$j$$inline_1088$$ < $databodyRows$$inline_1083$$.length;$j$$inline_1088$$ += 1) {
            (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databodyRows$$inline_1083$$[$j$$inline_1088$$].childNodes[$i$$inline_1086$$], $newStart$$inline_1087$$, $dir$$inline_1082$$)
          }
        }else {
          if($children$$inline_1084$$[$i$$inline_1086$$] === $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$) {
            $after$$inline_1085$$ = D.$JSCompiler_alias_TRUE$$;
            $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_sizingManager$.$setSize$("column", $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$.getAttribute($JSCompiler_StaticMethods_resizeColWidth$self$$.$getResources$().getMappedAttribute("key")), $newElementWidth$$1$$);
            for($j$$inline_1088$$ = 1;$j$$inline_1088$$ < $databodyRows$$inline_1083$$.length;$j$$inline_1088$$ += 1) {
              (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databodyRows$$inline_1083$$[$j$$inline_1088$$].childNodes[$i$$inline_1086$$], $newElementWidth$$1$$)
            }
          }
        }
      }
      $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.style.display = "block";
      $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_colHeader$.style.display = "block"
    }
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_endColPixel$ += $oldElementWidth$$1_widthChange$$;
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_endColHeaderPixel$ += $oldElementWidth$$1_widthChange$$;
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_avgColWidth$ = $newScrollerWidth$$ / $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_dataSource$.getCount("column")
  }else {
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_overResizeLeft$ += $oldElementWidth$$1_widthChange$$
  }
};
D.$JSCompiler_StaticMethods_resizeRowHeight$$ = function $$JSCompiler_StaticMethods_resizeRowHeight$$$($JSCompiler_StaticMethods_resizeRowHeight$self$$, $heightChange_oldElementHeight$$1$$, $newElementHeight$$1$$) {
  var $newScrollerHeight$$, $databodyRows$$inline_1093_newParentHeight$$;
  $heightChange_oldElementHeight$$1$$ = $newElementHeight$$1$$ - $heightChange_oldElementHeight$$1$$;
  $newScrollerHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_scroller$.firstChild) + $heightChange_oldElementHeight$$1$$;
  if($newScrollerHeight$$ >= (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$)) {
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$.parentNode, $newElementHeight$$1$$);
    $databodyRows$$inline_1093_newParentHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.firstChild) + $heightChange_oldElementHeight$$1$$;
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.firstChild, $databodyRows$$inline_1093_newParentHeight$$);
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_scroller$.firstChild, $newScrollerHeight$$);
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.firstChild, $newScrollerHeight$$);
    var $rowHeaders$$inline_1094$$, $after$$inline_1095$$, $i$$inline_1096$$, $newStart$$inline_1097$$;
    $databodyRows$$inline_1093_newParentHeight$$ = $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.firstChild.childNodes;
    $rowHeaders$$inline_1094$$ = $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$.parentNode.parentNode.childNodes;
    $after$$inline_1095$$ = D.$JSCompiler_alias_FALSE$$;
    if($databodyRows$$inline_1093_newParentHeight$$.length === $rowHeaders$$inline_1094$$.length) {
      $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.style.display = "none";
      $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.style.display = "none";
      for($i$$inline_1096$$ = 1;$i$$inline_1096$$ < $rowHeaders$$inline_1094$$.length;$i$$inline_1096$$ += 1) {
        $rowHeaders$$inline_1094$$[$i$$inline_1096$$].firstChild !== $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$ && $after$$inline_1095$$ === D.$JSCompiler_alias_TRUE$$ ? ($newStart$$inline_1097$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowHeaders$$inline_1094$$[$i$$inline_1096$$], "top") + $heightChange_oldElementHeight$$1$$, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeaders$$inline_1094$$[$i$$inline_1096$$], $newStart$$inline_1097$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databodyRows$$inline_1093_newParentHeight$$[$i$$inline_1096$$], 
        $newStart$$inline_1097$$, "top")) : $rowHeaders$$inline_1094$$[$i$$inline_1096$$].firstChild === $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$ && ($after$$inline_1095$$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_sizingManager$.$setSize$("row", $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$.parentNode.getAttribute($JSCompiler_StaticMethods_resizeRowHeight$self$$.$getResources$().getMappedAttribute("key")), 
        $newElementHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyRows$$inline_1093_newParentHeight$$[$i$$inline_1096$$], $newElementHeight$$1$$))
      }
      $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.style.display = "block";
      $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.style.display = "block"
    }
    (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$);
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_endRowPixel$ += $heightChange_oldElementHeight$$1$$;
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_endRowHeaderPixel$ += $heightChange_oldElementHeight$$1$$;
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_avgRowHeight$ = $newScrollerHeight$$ / $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_dataSource$.getCount("row")
  }
};
D.$JSCompiler_StaticMethods_resizeColHeight$$ = function $$JSCompiler_StaticMethods_resizeColHeight$$$($JSCompiler_StaticMethods_resizeColHeight$self$$, $heightChange$$1_oldElementHeight$$2$$, $newElementHeight$$2$$) {
  var $databody$$12$$, $scroller$$10$$, $rowHeader$$10$$, $databodyHeight$$2$$;
  (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeColHeight$self$$.$m_colHeader$, $newElementHeight$$2$$);
  $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_colHeaderHeight$ = $newElementHeight$$2$$ + "px";
  $databody$$12$$ = $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_databody$;
  $scroller$$10$$ = $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_scroller$;
  $rowHeader$$10$$ = $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_rowHeader$;
  $heightChange$$1_oldElementHeight$$2$$ = $newElementHeight$$2$$ - $heightChange$$1_oldElementHeight$$2$$;
  $databodyHeight$$2$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databody$$12$$);
  (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databody$$12$$, $databodyHeight$$2$$ - $heightChange$$1_oldElementHeight$$2$$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$12$$, $newElementHeight$$2$$, "top");
  (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($rowHeader$$10$$, $databodyHeight$$2$$ - $heightChange$$1_oldElementHeight$$2$$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$10$$, $newElementHeight$$2$$, "top");
  (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($scroller$$10$$, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($scroller$$10$$) - $heightChange$$1_oldElementHeight$$2$$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$10$$, $newElementHeight$$2$$, "top");
  (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_resizeColHeight$self$$)
};
D.$JSCompiler_StaticMethods_resizeRowWidth$$ = function $$JSCompiler_StaticMethods_resizeRowWidth$$$($JSCompiler_StaticMethods_resizeRowWidth$self_dir$$10$$, $oldElementWidth$$2_widthChange$$1$$, $newElementWidth$$2$$) {
  var $databody$$13$$, $scroller$$11$$, $colHeader$$8$$, $databodyWidth$$2$$;
  (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_resizeRowWidth$self_dir$$10$$.$m_rowHeader$, $newElementWidth$$2$$);
  $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$10$$.$m_rowHeaderWidth$ = $newElementWidth$$2$$ + "px";
  (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_resizeRowWidth$self_dir$$10$$);
  $databody$$13$$ = $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$10$$.$m_databody$;
  $scroller$$11$$ = $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$10$$.$m_scroller$;
  $colHeader$$8$$ = $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$10$$.$m_colHeader$;
  $oldElementWidth$$2_widthChange$$1$$ = $newElementWidth$$2$$ - $oldElementWidth$$2_widthChange$$1$$;
  $databodyWidth$$2$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$13$$);
  $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$10$$ = $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$10$$.$getResources$().isRTLMode() ? "right" : "left";
  (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databody$$13$$, $databodyWidth$$2$$ - $oldElementWidth$$2_widthChange$$1$$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$13$$, $newElementWidth$$2$$, $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$10$$);
  (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($colHeader$$8$$, $databodyWidth$$2$$ - $oldElementWidth$$2_widthChange$$1$$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($colHeader$$8$$, $newElementWidth$$2$$, $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$10$$);
  (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($scroller$$11$$, (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($scroller$$11$$) - $oldElementWidth$$2_widthChange$$1$$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$11$$, $newElementWidth$$2$$, $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$10$$)
};
D.$JSCompiler_StaticMethods_getNewElementWidth$$ = function $$JSCompiler_StaticMethods_getNewElementWidth$$$($JSCompiler_StaticMethods_getNewElementWidth$self$$, $axis$$22$$, $oldElementWidth$$3$$) {
  var $databodyWidth$$3$$, $deltaWidth$$, $newElementWidth$$3$$, $oldScrollerWidth$$1$$, $halfGridWidth$$;
  $databodyWidth$$3$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_databody$);
  $deltaWidth$$ = $JSCompiler_StaticMethods_getNewElementWidth$self$$.$getResources$().isRTLMode() ? $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_lastMouseX$ - $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_currentMouseX$ : $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_currentMouseX$ - $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_lastMouseX$;
  $newElementWidth$$3$$ = $oldElementWidth$$3$$ + $deltaWidth$$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeLeft$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$;
  $oldScrollerWidth$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_scroller$.firstChild);
  $halfGridWidth$$ = window.Math.round((0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_root$) / 2);
  $oldScrollerWidth$$1$$ + $deltaWidth$$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeLeft$ < $databodyWidth$$3$$ ? ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeLeft$ += $deltaWidth$$ - $databodyWidth$$3$$ + $oldScrollerWidth$$1$$, $newElementWidth$$3$$ = $oldElementWidth$$3$$ + ($databodyWidth$$3$$ - $oldScrollerWidth$$1$$)) : 20 > $newElementWidth$$3$$ ? ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ += $deltaWidth$$ - 20 + 
  $oldElementWidth$$3$$, $newElementWidth$$3$$ = 20) : ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ = 0, $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeLeft$ = 0);
  "row" === $axis$$22$$ && ($newElementWidth$$3$$ > $halfGridWidth$$ ? ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$ += $deltaWidth$$ - $halfGridWidth$$ + $oldElementWidth$$3$$, $newElementWidth$$3$$ = $halfGridWidth$$) : $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$ = 0);
  return $newElementWidth$$3$$
};
D.$JSCompiler_StaticMethods_getNewElementHeight$$ = function $$JSCompiler_StaticMethods_getNewElementHeight$$$($JSCompiler_StaticMethods_getNewElementHeight$self$$, $axis$$23$$, $oldElementHeight$$3$$) {
  var $databodyHeight$$3$$, $deltaHeight$$, $newElementHeight$$3$$, $oldScrollerHeight$$1$$, $halfGridHeight$$;
  $databodyHeight$$3$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_databody$);
  $deltaHeight$$ = $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_currentMouseY$ - $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_lastMouseY$;
  $newElementHeight$$3$$ = $oldElementHeight$$3$$ + $deltaHeight$$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeTop$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$;
  $oldScrollerHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_scroller$.firstChild);
  $halfGridHeight$$ = window.Math.round((0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_root$) / 2);
  $oldScrollerHeight$$1$$ + $deltaHeight$$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeTop$ < $databodyHeight$$3$$ && ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeTop$ += $deltaHeight$$ - $databodyHeight$$3$$ + $oldScrollerHeight$$1$$, $newElementHeight$$3$$ = $oldElementHeight$$3$$ + $databodyHeight$$3$$ - $oldScrollerHeight$$1$$);
  20 > $newElementHeight$$3$$ ? ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ += $deltaHeight$$ - 20 + $oldElementHeight$$3$$, $newElementHeight$$3$$ = 20) : ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ = 0, $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeTop$ = 0);
  "column" === $axis$$23$$ && ($newElementHeight$$3$$ > $halfGridHeight$$ ? ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$ += $deltaHeight$$ - $halfGridHeight$$ + $oldElementHeight$$3$$, $newElementHeight$$3$$ = $halfGridHeight$$) : $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$ = 0);
  return $newElementHeight$$3$$
};
D.$JSCompiler_StaticMethods_manageResizeScrollbars$$ = function $$JSCompiler_StaticMethods_manageResizeScrollbars$$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$) {
  var $databody$$14$$, $scroller$$12$$, $colHeader$$9$$, $rowHeader$$11$$, $databodyWidth$$4$$, $databodyHeight$$4$$, $isDatabodyVerticalScrollbarRequired$$1$$, $isDatabodyHorizontalScrollbarRequired$$1$$, $scrollbarSize$$2$$;
  $databody$$14$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_databody$;
  $scroller$$12$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scroller$;
  $colHeader$$9$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_colHeader$;
  $rowHeader$$11$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_rowHeader$;
  $databodyWidth$$4$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$14$$);
  $databodyHeight$$4$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databody$$14$$);
  $isDatabodyVerticalScrollbarRequired$$1$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $databodyHeight$$4$$);
  $isDatabodyHorizontalScrollbarRequired$$1$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $databodyWidth$$4$$);
  $scrollbarSize$$2$$ = (0,D.$JSCompiler_StaticMethods_getScrollbarSize$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_utils$);
  $isDatabodyHorizontalScrollbarRequired$$1$$ && !$isDatabodyVerticalScrollbarRequired$$1$$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ ? $isDatabodyVerticalScrollbarRequired$$1$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $databodyHeight$$4$$ - $scrollbarSize$$2$$) : !$isDatabodyHorizontalScrollbarRequired$$1$$ && 
  $isDatabodyVerticalScrollbarRequired$$1$$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ ? $isDatabodyHorizontalScrollbarRequired$$1$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $databodyWidth$$4$$ - $scrollbarSize$$2$$) : $isDatabodyHorizontalScrollbarRequired$$1$$ && ($isDatabodyVerticalScrollbarRequired$$1$$ && 
  $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ && $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$) && (!(0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $databodyHeight$$4$$ + $scrollbarSize$$2$$) && !(0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $databodyWidth$$4$$ + $scrollbarSize$$2$$)) && 
  ($isDatabodyVerticalScrollbarRequired$$1$$ = $isDatabodyHorizontalScrollbarRequired$$1$$ = D.$JSCompiler_alias_FALSE$$);
  !$isDatabodyVerticalScrollbarRequired$$1$$ && !$isDatabodyHorizontalScrollbarRequired$$1$$ && $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ && $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ ? ((0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databody$$14$$, $databodyWidth$$4$$ + $scrollbarSize$$2$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databody$$14$$, $databodyHeight$$4$$ + $scrollbarSize$$2$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($colHeader$$9$$, 
  $databodyWidth$$4$$ + $scrollbarSize$$2$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($rowHeader$$11$$, $databodyHeight$$4$$ + $scrollbarSize$$2$$), $scroller$$12$$.style.overflow = "visible") : !$isDatabodyVerticalScrollbarRequired$$1$$ && $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ ? ((0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databody$$14$$, $databodyWidth$$4$$ + $scrollbarSize$$2$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($colHeader$$9$$, 
  $databodyWidth$$4$$ + $scrollbarSize$$2$$)) : !$isDatabodyHorizontalScrollbarRequired$$1$$ && $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ && ((0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databody$$14$$, $databodyHeight$$4$$ + $scrollbarSize$$2$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($rowHeader$$11$$, $databodyHeight$$4$$ + $scrollbarSize$$2$$));
  $isDatabodyVerticalScrollbarRequired$$1$$ && $isDatabodyHorizontalScrollbarRequired$$1$$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ ? ($scroller$$12$$.style.overflow = "auto", (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databody$$14$$, $databodyWidth$$4$$ - $scrollbarSize$$2$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databody$$14$$, $databodyHeight$$4$$ - 
  $scrollbarSize$$2$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($colHeader$$9$$, $databodyWidth$$4$$ - $scrollbarSize$$2$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($rowHeader$$11$$, $databodyHeight$$4$$ - $scrollbarSize$$2$$)) : $isDatabodyVerticalScrollbarRequired$$1$$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ ? ($scroller$$12$$.style.overflow = "auto", (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databody$$14$$, $databodyWidth$$4$$ - 
  $scrollbarSize$$2$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($colHeader$$9$$, $databodyWidth$$4$$ - $scrollbarSize$$2$$)) : $isDatabodyHorizontalScrollbarRequired$$1$$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ && ($scroller$$12$$.style.overflow = "auto", (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databody$$14$$, $databodyHeight$$4$$ - $scrollbarSize$$2$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($rowHeader$$11$$, $databodyHeight$$4$$ - 
  $scrollbarSize$$2$$));
  $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ = $isDatabodyHorizontalScrollbarRequired$$1$$;
  $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ = $isDatabodyVerticalScrollbarRequired$$1$$
};
D.$JSCompiler_StaticMethods_handleContextMenuResize$$ = function $$JSCompiler_StaticMethods_handleContextMenuResize$$$($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $initialValue_target$$46$$, $id$$4$$, $val$$24_value$$49$$) {
  $val$$24_value$$49$$ = (0,window.parseInt)($val$$24_value$$49$$, 10);
  if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($initialValue_target$$46$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($initialValue_target$$46$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.getMappedStyle("sortdescending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($initialValue_target$$46$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.getMappedStyle("sortindicators"))) {
    $initialValue_target$$46$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $initialValue_target$$46$$)
  }
  $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$ = $initialValue_target$$46$$;
  "resizeWidth" === $id$$4$$ ? ($initialValue_target$$46$$ = $initialValue_target$$46$$.offsetWidth, $initialValue_target$$46$$ !== $val$$24_value$$49$$ && ((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.getMappedStyle("colheadercell")) ? (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$) && 
  (0,D.$JSCompiler_StaticMethods_resizeColWidth$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $initialValue_target$$46$$, $val$$24_value$$49$$) : (0,D.$JSCompiler_StaticMethods_resizeRowWidth$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $initialValue_target$$46$$, $val$$24_value$$49$$))) : "resizeHeight" === $id$$4$$ && ($initialValue_target$$46$$ = $initialValue_target$$46$$.offsetHeight, $initialValue_target$$46$$ !== $val$$24_value$$49$$ && ((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$, 
  $JSCompiler_StaticMethods_handleContextMenuResize$self$$.getMappedStyle("colheadercell")) ? (0,D.$JSCompiler_StaticMethods_resizeColHeight$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $initialValue_target$$46$$, $val$$24_value$$49$$) : (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$) && (0,D.$JSCompiler_StaticMethods_resizeRowHeight$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, 
  $initialValue_target$$46$$, $val$$24_value$$49$$)));
  (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$)
};
D.$JSCompiler_StaticMethods__showOrHideSortIndicators$$ = function $$JSCompiler_StaticMethods__showOrHideSortIndicators$$$($JSCompiler_StaticMethods__showOrHideSortIndicators$self$$, $event$$48_header$$7_indicators$$, $hide$$) {
  var $i$$25$$, $icon$$, $sorted$$;
  $event$$48_header$$7_indicators$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods__showOrHideSortIndicators$self$$, $event$$48_header$$7_indicators$$.target);
  if($event$$48_header$$7_indicators$$ != D.$JSCompiler_alias_NULL$$ && ($event$$48_header$$7_indicators$$ = $event$$48_header$$7_indicators$$.lastChild, $event$$48_header$$7_indicators$$ != D.$JSCompiler_alias_NULL$$ && $event$$48_header$$7_indicators$$.className == $JSCompiler_StaticMethods__showOrHideSortIndicators$self$$.getMappedStyle("sortindicators"))) {
    for($i$$25$$ = 0;1 >= $i$$25$$;$i$$25$$ += 1) {
      $icon$$ = $event$$48_header$$7_indicators$$.children[$i$$25$$], $sorted$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($icon$$, $JSCompiler_StaticMethods__showOrHideSortIndicators$self$$.getMappedStyle("selected")), $hide$$ === D.$JSCompiler_alias_FALSE$$ && !$sorted$$ ? (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($icon$$, $JSCompiler_StaticMethods__showOrHideSortIndicators$self$$.getMappedStyle("disabled")) : $hide$$ === D.$JSCompiler_alias_TRUE$$ && !$sorted$$ && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($icon$$, 
      $JSCompiler_StaticMethods__showOrHideSortIndicators$self$$.getMappedStyle("disabled"))
    }
  }
};
D.$JSCompiler_StaticMethods__handleHeaderSort$$ = function $$JSCompiler_StaticMethods__handleHeaderSort$$$($JSCompiler_StaticMethods__handleHeaderSort$self$$, $event$$50$$, $direction$$7$$) {
  var $sortAscendClassName$$, $sortDescendClassName$$, $target$$42$$, $header$$9$$;
  $sortAscendClassName$$ = $JSCompiler_StaticMethods__handleHeaderSort$self$$.getMappedStyle("sortascending");
  $sortDescendClassName$$ = $JSCompiler_StaticMethods__handleHeaderSort$self$$.getMappedStyle("sortdescending");
  $target$$42$$ = $event$$50$$.target;
  $header$$9$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods__handleHeaderSort$self$$, $target$$42$$);
  $header$$9$$ != D.$JSCompiler_alias_NULL$$ && ($direction$$7$$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__handleHeaderSort$self$$.$m_utils$.$isTouchDevice$() ? $direction$$7$$ = $JSCompiler_StaticMethods__handleHeaderSort$self$$.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__handleHeaderSort$self$$.$m_sortInfo$.key === $JSCompiler_StaticMethods__handleHeaderSort$self$$.$_getKey$($header$$9$$) ? "ascending" === $JSCompiler_StaticMethods__handleHeaderSort$self$$.$m_sortInfo$.direction ? 
  "descending" : "ascending" : "ascending" : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($target$$42$$, $sortAscendClassName$$) ? $direction$$7$$ = "ascending" : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($target$$42$$, $sortDescendClassName$$) && ($direction$$7$$ = "descending")), (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)($JSCompiler_StaticMethods__handleHeaderSort$self$$, $event$$50$$, $header$$9$$, $direction$$7$$))
};
D.$JSCompiler_StaticMethods__doHeaderSort$$ = function $$JSCompiler_StaticMethods__doHeaderSort$$$($JSCompiler_StaticMethods__doHeaderSort$self$$, $details$$3_event$$52$$, $axis$$21_header$$11$$, $direction$$9$$) {
  var $key$$38$$, $criteria$$1_sortIcon$$inline_1029$$;
  $axis$$21_header$$11$$.setAttribute($JSCompiler_StaticMethods__doHeaderSort$self$$.$getResources$().getMappedAttribute("sortDir"), $direction$$9$$);
  $key$$38$$ = $JSCompiler_StaticMethods__doHeaderSort$self$$.$_getKey$($axis$$21_header$$11$$);
  var $columnHeaderCellClassName$$inline_1020_oldSortedHeader$$inline_1024$$, $rowHeaderCellClassName$$inline_1021$$;
  $columnHeaderCellClassName$$inline_1020_oldSortedHeader$$inline_1024$$ = $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("colheadercell");
  $rowHeaderCellClassName$$inline_1021$$ = $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("rowheadercell");
  $axis$$21_header$$11$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($axis$$21_header$$11$$, $columnHeaderCellClassName$$inline_1020_oldSortedHeader$$inline_1024$$) ? "column" : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($axis$$21_header$$11$$, $rowHeaderCellClassName$$inline_1021$$) ? "row" : D.$JSCompiler_alias_NULL$$;
  var $oldsortIcon$$inline_1025_sortedHeader$$inline_1028$$;
  $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ && ($columnHeaderCellClassName$$inline_1020_oldSortedHeader$$inline_1024$$ = (0,D.$JSCompiler_StaticMethods__findColumnHeaderByKey$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.key), "ascending" === $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.direction ? $oldsortIcon$$inline_1025_sortedHeader$$inline_1028$$ = $columnHeaderCellClassName$$inline_1020_oldSortedHeader$$inline_1024$$.getElementsByClassName($JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("sortascending"))[0] : 
  "descending" === $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.direction && ($oldsortIcon$$inline_1025_sortedHeader$$inline_1028$$ = $columnHeaderCellClassName$$inline_1020_oldSortedHeader$$inline_1024$$.getElementsByClassName($JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("sortdescending"))[0]), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($oldsortIcon$$inline_1025_sortedHeader$$inline_1028$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("disabled")), 
  (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldsortIcon$$inline_1025_sortedHeader$$inline_1028$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("selected")));
  $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$ = {key:$key$$38$$, axis:$axis$$21_header$$11$$, direction:$direction$$9$$};
  $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ && ($oldsortIcon$$inline_1025_sortedHeader$$inline_1028$$ = (0,D.$JSCompiler_StaticMethods__findColumnHeaderByKey$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.key), "ascending" === $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.direction ? $criteria$$1_sortIcon$$inline_1029$$ = $oldsortIcon$$inline_1025_sortedHeader$$inline_1028$$.getElementsByClassName($JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("sortascending"))[0] : 
  "descending" === $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.direction && ($criteria$$1_sortIcon$$inline_1029$$ = $oldsortIcon$$inline_1025_sortedHeader$$inline_1028$$.getElementsByClassName($JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("sortdescending"))[0]), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($criteria$$1_sortIcon$$inline_1029$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("disabled")), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($criteria$$1_sortIcon$$inline_1029$$, 
  $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("selected")));
  $direction$$9$$ != D.$JSCompiler_alias_NULL$$ && ($key$$38$$ != D.$JSCompiler_alias_NULL$$ && $axis$$21_header$$11$$ != D.$JSCompiler_alias_NULL$$) && ((0,D.$JSCompiler_StaticMethods_showStatusText$$)($JSCompiler_StaticMethods__doHeaderSort$self$$), $criteria$$1_sortIcon$$inline_1029$$ = {axis:$axis$$21_header$$11$$, key:$key$$38$$, direction:$direction$$9$$}, $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_dataSource$.sort($criteria$$1_sortIcon$$inline_1029$$, {success:$JSCompiler_StaticMethods__doHeaderSort$self$$.$_handleSortSuccess$.bind($JSCompiler_StaticMethods__doHeaderSort$self$$), 
  error:$JSCompiler_StaticMethods__doHeaderSort$self$$.$_handleSortError$.bind($JSCompiler_StaticMethods__doHeaderSort$self$$)}), $details$$3_event$$52$$ = {event:$details$$3_event$$52$$, ui:{header:$key$$38$$, direction:$direction$$9$$}}, $JSCompiler_StaticMethods__doHeaderSort$self$$.fireEvent("sort", $details$$3_event$$52$$))
};
D.$DvtDataGrid$$.prototype.$_handleSortError$ = function $$DvtDataGrid$$$$$_handleSortError$$() {
  (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this)
};
D.$DvtDataGrid$$.prototype.$_handleSortSuccess$ = function $$DvtDataGrid$$$$$_handleSortSuccess$$() {
  (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this);
  this.fetchCells(this.$m_databody$, this.$m_scroller$, this.$m_startRow$, this.$m_startCol$, this.$m_endRow$ - this.$m_startRow$, this.$m_endCol$ - this.$m_startCol$, {success:this.$handleCellsFetchSuccessForSort$, error:this.$handleCellsFetchError$})
};
D.$DvtDataGrid$$.prototype.$handleCellsFetchSuccessForSort$ = function $$DvtDataGrid$$$$$handleCellsFetchSuccessForSort$$($cellSet$$13$$, $cellRange$$9$$) {
  var $oldElementSet$$inline_1032_rowStart$$8$$, $oldLength$$inline_1041_rowCount$$7$$, $columnStart$$6_oldSet$$inline_1042$$, $k$$inline_1058_l$$inline_1060_newRowElements$$;
  this.$m_fetching$.cells = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this);
  $oldElementSet$$inline_1032_rowStart$$8$$ = $cellRange$$9$$[0].start;
  $oldLength$$inline_1041_rowCount$$7$$ = $cellSet$$13$$.getCount("row");
  $columnStart$$6_oldSet$$inline_1042$$ = $cellRange$$9$$[1].start;
  $cellSet$$13$$.getCount("column");
  $k$$inline_1058_l$$inline_1060_newRowElements$$ = window.document.createDocumentFragment();
  (0,D.$JSCompiler_StaticMethods__addRows$$)(this, $k$$inline_1058_l$$inline_1060_newRowElements$$, D.$JSCompiler_alias_TRUE$$, this.$m_startRowPixel$, $oldElementSet$$inline_1032_rowStart$$8$$, $oldLength$$inline_1041_rowCount$$7$$, $columnStart$$6_oldSet$$inline_1042$$, D.$JSCompiler_alias_FALSE$$, $cellSet$$13$$);
  $oldElementSet$$inline_1032_rowStart$$8$$ = this.$m_databody$.firstChild;
  var $me$$inline_1039$$, $pos$$inline_1040_restSet$$inline_1045$$, $child$$inline_1069_idx$$inline_1065_newSet$$inline_1043$$, $animOrder$$inline_1044$$, $bottomLimit$$inline_1066_i$$inline_1055_v$$inline_1046$$, $gridBodyHeight$$inline_1048_limitRangeInPixels$$inline_1052$$, $rowHeight$$inline_1049$$, $offset$$inline_1050_rowsForAppend$$inline_1053_scrollTop$$inline_1051$$, $dkey$$inline_1061_order$$inline_1064_restSetLength$$inline_1054$$, $j$$inline_1056_topLimit$$inline_1067$$, $delay$$inline_1062_key$$inline_1057_kk$$inline_1059$$, 
  $keyAttr$$inline_1063$$, $rowPos$$inline_1068$$;
  $me$$inline_1039$$ = this;
  $pos$$inline_1040_restSet$$inline_1045$$ = 0;
  $oldLength$$inline_1041_rowCount$$7$$ = $oldElementSet$$inline_1032_rowStart$$8$$.childElementCount;
  $columnStart$$6_oldSet$$inline_1042$$ = (0,D.$JSCompiler_StaticMethods_getDataKeySet$$)(this, $oldElementSet$$inline_1032_rowStart$$8$$);
  $child$$inline_1069_idx$$inline_1065_newSet$$inline_1043$$ = (0,D.$JSCompiler_StaticMethods_getDataKeySet$$)(this, $k$$inline_1058_l$$inline_1060_newRowElements$$);
  $animOrder$$inline_1044$$ = [];
  $pos$$inline_1040_restSet$$inline_1045$$ = [];
  $gridBodyHeight$$inline_1048_limitRangeInPixels$$inline_1052$$ = this.getHeight() - (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_colHeader$);
  $rowHeight$$inline_1049$$ = (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)(this);
  ($offset$$inline_1050_rowsForAppend$$inline_1053_scrollTop$$inline_1051$$ = (0,window.parseInt)($oldElementSet$$inline_1032_rowStart$$8$$.firstElementChild.attributes.style.value.split("height:")[1].split("px")[0], 10)) || ($offset$$inline_1050_rowsForAppend$$inline_1053_scrollTop$$inline_1051$$ = 0);
  $offset$$inline_1050_rowsForAppend$$inline_1053_scrollTop$$inline_1051$$ = this.$m_scroller$.scrollTop - $offset$$inline_1050_rowsForAppend$$inline_1053_scrollTop$$inline_1051$$;
  $gridBodyHeight$$inline_1048_limitRangeInPixels$$inline_1052$$ = [$offset$$inline_1050_rowsForAppend$$inline_1053_scrollTop$$inline_1051$$, $offset$$inline_1050_rowsForAppend$$inline_1053_scrollTop$$inline_1051$$ + $gridBodyHeight$$inline_1048_limitRangeInPixels$$inline_1052$$];
  $offset$$inline_1050_rowsForAppend$$inline_1053_scrollTop$$inline_1051$$ = [];
  $dkey$$inline_1061_order$$inline_1064_restSetLength$$inline_1054$$ = 0;
  $keyAttr$$inline_1063$$ = this.$getResources$().getMappedAttribute("key");
  for($bottomLimit$$inline_1066_i$$inline_1055_v$$inline_1046$$ = 0;$bottomLimit$$inline_1066_i$$inline_1055_v$$inline_1046$$ < $columnStart$$6_oldSet$$inline_1042$$.length;$bottomLimit$$inline_1066_i$$inline_1055_v$$inline_1046$$++) {
    $animOrder$$inline_1044$$[$columnStart$$6_oldSet$$inline_1042$$[$bottomLimit$$inline_1066_i$$inline_1055_v$$inline_1046$$]] = $bottomLimit$$inline_1066_i$$inline_1055_v$$inline_1046$$
  }
  for($j$$inline_1056_topLimit$$inline_1067$$ = 0;$j$$inline_1056_topLimit$$inline_1067$$ < $child$$inline_1069_idx$$inline_1065_newSet$$inline_1043$$.length;$j$$inline_1056_topLimit$$inline_1067$$++) {
    $animOrder$$inline_1044$$.hasOwnProperty($child$$inline_1069_idx$$inline_1065_newSet$$inline_1043$$[$j$$inline_1056_topLimit$$inline_1067$$]) ? $animOrder$$inline_1044$$[$child$$inline_1069_idx$$inline_1065_newSet$$inline_1043$$[$j$$inline_1056_topLimit$$inline_1067$$]] > $j$$inline_1056_topLimit$$inline_1067$$ ? ($bottomLimit$$inline_1066_i$$inline_1055_v$$inline_1046$$ = $animOrder$$inline_1044$$[$child$$inline_1069_idx$$inline_1065_newSet$$inline_1043$$[$j$$inline_1056_topLimit$$inline_1067$$]] - 
    $j$$inline_1056_topLimit$$inline_1067$$, $animOrder$$inline_1044$$[$child$$inline_1069_idx$$inline_1065_newSet$$inline_1043$$[$j$$inline_1056_topLimit$$inline_1067$$]] = "up_-" + $bottomLimit$$inline_1066_i$$inline_1055_v$$inline_1046$$) : $animOrder$$inline_1044$$[$child$$inline_1069_idx$$inline_1065_newSet$$inline_1043$$[$j$$inline_1056_topLimit$$inline_1067$$]] < $j$$inline_1056_topLimit$$inline_1067$$ ? ($bottomLimit$$inline_1066_i$$inline_1055_v$$inline_1046$$ = $j$$inline_1056_topLimit$$inline_1067$$ - 
    $animOrder$$inline_1044$$[$child$$inline_1069_idx$$inline_1065_newSet$$inline_1043$$[$j$$inline_1056_topLimit$$inline_1067$$]], $animOrder$$inline_1044$$[$child$$inline_1069_idx$$inline_1065_newSet$$inline_1043$$[$j$$inline_1056_topLimit$$inline_1067$$]] = "down_" + $bottomLimit$$inline_1066_i$$inline_1055_v$$inline_1046$$) : $animOrder$$inline_1044$$[$child$$inline_1069_idx$$inline_1065_newSet$$inline_1043$$[$j$$inline_1056_topLimit$$inline_1067$$]] == $j$$inline_1056_topLimit$$inline_1067$$ && 
    ($animOrder$$inline_1044$$[$child$$inline_1069_idx$$inline_1065_newSet$$inline_1043$$[$j$$inline_1056_topLimit$$inline_1067$$]] = "no_0") : $pos$$inline_1040_restSet$$inline_1045$$[$child$$inline_1069_idx$$inline_1065_newSet$$inline_1043$$[$j$$inline_1056_topLimit$$inline_1067$$]] = $j$$inline_1056_topLimit$$inline_1067$$
  }
  for($delay$$inline_1062_key$$inline_1057_kk$$inline_1059$$ in $pos$$inline_1040_restSet$$inline_1045$$) {
    $pos$$inline_1040_restSet$$inline_1045$$.hasOwnProperty($delay$$inline_1062_key$$inline_1057_kk$$inline_1059$$) && ($dkey$$inline_1061_order$$inline_1064_restSetLength$$inline_1054$$++, $child$$inline_1069_idx$$inline_1065_newSet$$inline_1043$$ = $pos$$inline_1040_restSet$$inline_1045$$[$delay$$inline_1062_key$$inline_1057_kk$$inline_1059$$], $bottomLimit$$inline_1066_i$$inline_1055_v$$inline_1046$$ = $gridBodyHeight$$inline_1048_limitRangeInPixels$$inline_1052$$[1] + $oldElementSet$$inline_1032_rowStart$$8$$.childNodes[1].clientHeight, 
    $j$$inline_1056_topLimit$$inline_1067$$ = $gridBodyHeight$$inline_1048_limitRangeInPixels$$inline_1052$$[0] - $oldElementSet$$inline_1032_rowStart$$8$$.childNodes[1].clientHeight, $rowPos$$inline_1068$$ = $child$$inline_1069_idx$$inline_1065_newSet$$inline_1043$$ * $oldElementSet$$inline_1032_rowStart$$8$$.childNodes[1].clientHeight, $rowPos$$inline_1068$$ < $bottomLimit$$inline_1066_i$$inline_1055_v$$inline_1046$$ && $rowPos$$inline_1068$$ > $j$$inline_1056_topLimit$$inline_1067$$ && ($child$$inline_1069_idx$$inline_1065_newSet$$inline_1043$$ = 
    $k$$inline_1058_l$$inline_1060_newRowElements$$.children[$child$$inline_1069_idx$$inline_1065_newSet$$inline_1043$$], $offset$$inline_1050_rowsForAppend$$inline_1053_scrollTop$$inline_1051$$.push($child$$inline_1069_idx$$inline_1065_newSet$$inline_1043$$)))
  }
  for($delay$$inline_1062_key$$inline_1057_kk$$inline_1059$$ = 0;$delay$$inline_1062_key$$inline_1057_kk$$inline_1059$$ < $columnStart$$6_oldSet$$inline_1042$$.length;$delay$$inline_1062_key$$inline_1057_kk$$inline_1059$$++) {
    $animOrder$$inline_1044$$.hasOwnProperty($columnStart$$6_oldSet$$inline_1042$$[$delay$$inline_1062_key$$inline_1057_kk$$inline_1059$$]) && /^-{0,1}\d*\.{0,1}\d+$/.test($animOrder$$inline_1044$$[$columnStart$$6_oldSet$$inline_1042$$[$delay$$inline_1062_key$$inline_1057_kk$$inline_1059$$]]) && ($animOrder$$inline_1044$$[$columnStart$$6_oldSet$$inline_1042$$[$delay$$inline_1062_key$$inline_1057_kk$$inline_1059$$]] = "up_30")
  }
  for($k$$inline_1058_l$$inline_1060_newRowElements$$ = 0;$k$$inline_1058_l$$inline_1060_newRowElements$$ < $offset$$inline_1050_rowsForAppend$$inline_1053_scrollTop$$inline_1051$$.length;$k$$inline_1058_l$$inline_1060_newRowElements$$++) {
    for($delay$$inline_1062_key$$inline_1057_kk$$inline_1059$$ = 0;$delay$$inline_1062_key$$inline_1057_kk$$inline_1059$$ < $offset$$inline_1050_rowsForAppend$$inline_1053_scrollTop$$inline_1051$$[$k$$inline_1058_l$$inline_1060_newRowElements$$].attributes.length;$delay$$inline_1062_key$$inline_1057_kk$$inline_1059$$++) {
      $dkey$$inline_1061_order$$inline_1064_restSetLength$$inline_1054$$ = D.$JSCompiler_alias_NULL$$, $offset$$inline_1050_rowsForAppend$$inline_1053_scrollTop$$inline_1051$$[$k$$inline_1058_l$$inline_1060_newRowElements$$].attributes[$delay$$inline_1062_key$$inline_1057_kk$$inline_1059$$].nodeName == $keyAttr$$inline_1063$$ && ($dkey$$inline_1061_order$$inline_1064_restSetLength$$inline_1054$$ = $offset$$inline_1050_rowsForAppend$$inline_1053_scrollTop$$inline_1051$$[$k$$inline_1058_l$$inline_1060_newRowElements$$].attributes[$delay$$inline_1062_key$$inline_1057_kk$$inline_1059$$].nodeValue, 
      $pos$$inline_1040_restSet$$inline_1045$$.hasOwnProperty($dkey$$inline_1061_order$$inline_1064_restSetLength$$inline_1054$$) && ($dkey$$inline_1061_order$$inline_1064_restSetLength$$inline_1054$$ = $pos$$inline_1040_restSet$$inline_1045$$[$dkey$$inline_1061_order$$inline_1064_restSetLength$$inline_1054$$], (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($offset$$inline_1050_rowsForAppend$$inline_1053_scrollTop$$inline_1051$$[$k$$inline_1058_l$$inline_1060_newRowElements$$], 0, 0, $gridBodyHeight$$inline_1048_limitRangeInPixels$$inline_1052$$[1] - 
      $dkey$$inline_1061_order$$inline_1064_restSetLength$$inline_1054$$ * $rowHeight$$inline_1049$$)))
    }
    $oldElementSet$$inline_1032_rowStart$$8$$.appendChild($offset$$inline_1050_rowsForAppend$$inline_1053_scrollTop$$inline_1051$$[$k$$inline_1058_l$$inline_1060_newRowElements$$])
  }
  for($k$$inline_1058_l$$inline_1060_newRowElements$$ = 0;$k$$inline_1058_l$$inline_1060_newRowElements$$ < $oldElementSet$$inline_1032_rowStart$$8$$.childElementCount;$k$$inline_1058_l$$inline_1060_newRowElements$$++) {
    if($delay$$inline_1062_key$$inline_1057_kk$$inline_1059$$ = 10 * $k$$inline_1058_l$$inline_1060_newRowElements$$ + "ms", $k$$inline_1058_l$$inline_1060_newRowElements$$ < $oldLength$$inline_1041_rowCount$$7$$ - 1 ? ($pos$$inline_1040_restSet$$inline_1045$$ = (0,window.parseInt)($animOrder$$inline_1044$$[$columnStart$$6_oldSet$$inline_1042$$[$k$$inline_1058_l$$inline_1060_newRowElements$$]].split("_")[1], 10) * $rowHeight$$inline_1049$$, $pos$$inline_1040_restSet$$inline_1045$$ < $gridBodyHeight$$inline_1048_limitRangeInPixels$$inline_1052$$[1] - 
    $k$$inline_1058_l$$inline_1060_newRowElements$$ * $rowHeight$$inline_1049$$ || ($pos$$inline_1040_restSet$$inline_1045$$ = $gridBodyHeight$$inline_1048_limitRangeInPixels$$inline_1052$$[1] - ($k$$inline_1058_l$$inline_1060_newRowElements$$ - 1) * $oldElementSet$$inline_1032_rowStart$$8$$.childNodes[1].clientHeight), (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($oldElementSet$$inline_1032_rowStart$$8$$.childNodes[$k$$inline_1058_l$$inline_1060_newRowElements$$ + 1], "400ms", $delay$$inline_1062_key$$inline_1057_kk$$inline_1059$$, 
    $pos$$inline_1040_restSet$$inline_1045$$)) : (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($oldElementSet$$inline_1032_rowStart$$8$$.childNodes[$k$$inline_1058_l$$inline_1060_newRowElements$$ + 1], "400ms", $delay$$inline_1062_key$$inline_1057_kk$$inline_1059$$, 0), $k$$inline_1058_l$$inline_1060_newRowElements$$ == $oldElementSet$$inline_1032_rowStart$$8$$.childElementCount - 2) {
      $oldElementSet$$inline_1032_rowStart$$8$$.childNodes[$k$$inline_1058_l$$inline_1060_newRowElements$$].addEventListener("transitionend", function() {
        (0,window.setTimeout)(function() {
          (0,D.$JSCompiler_StaticMethods_handleLongScroll$$)($me$$inline_1039$$, $me$$inline_1039$$.$m_currentScrollLeft$, $me$$inline_1039$$.$m_currentScrollTop$)
        }, 1E3)
      }, D.$JSCompiler_alias_FALSE$$);
      break
    }
  }
};
D.$JSCompiler_StaticMethods_getDataKeySet$$ = function $$JSCompiler_StaticMethods_getDataKeySet$$$($JSCompiler_StaticMethods_getDataKeySet$self$$, $initialData$$) {
  var $dataKeySet$$, $keyAttr$$, $i$$26$$, $j$$9$$;
  $dataKeySet$$ = [];
  $keyAttr$$ = $JSCompiler_StaticMethods_getDataKeySet$self$$.$getResources$().getMappedAttribute("key");
  for($i$$26$$ = 0;$i$$26$$ < $initialData$$.childElementCount;$i$$26$$++) {
    for($j$$9$$ = 0;$j$$9$$ < $initialData$$.children[$i$$26$$].attributes.length;$j$$9$$++) {
      if($initialData$$.children[$i$$26$$].attributes[$j$$9$$].nodeName == $keyAttr$$) {
        $dataKeySet$$.push($initialData$$.children[$i$$26$$].attributes[$j$$9$$].nodeValue);
        break
      }
    }
  }
  return $dataKeySet$$
};
D.$JSCompiler_StaticMethods_getCssSupport$$ = function $$JSCompiler_StaticMethods_getCssSupport$$$($cssprop$$) {
  function $toCamel$$($cssprop$$) {
    return $cssprop$$.replace(/\-([a-z])/gi, function($cssprop$$, $toCamel$$) {
      return $toCamel$$.toUpperCase()
    })
  }
  var $vendors$$, $root$$10$$, $i$$27$$, $css3mc$$;
  $vendors$$ = " -moz- -webkit- -o- -ms- -khtml-".split(" ");
  $root$$10$$ = window.document.documentElement;
  for($i$$27$$ = 0;$i$$27$$ < $vendors$$.length;$i$$27$$++) {
    if($css3mc$$ = $toCamel$$($vendors$$[$i$$27$$] + $cssprop$$), "Ms" == $css3mc$$.substr(0, 2) && ($css3mc$$ = "m" + $css3mc$$.substr(1)), $css3mc$$ in $root$$10$$.style) {
      return $css3mc$$
    }
  }
};
D.$JSCompiler_StaticMethods_changeStyleProperty$$ = function $$JSCompiler_StaticMethods_changeStyleProperty$$$($target$$44$$, $prop$$6$$, $value$$48$$) {
  "undefined" != typeof $prop$$6$$ && ($target$$44$$.style[$prop$$6$$] = $value$$48$$)
};
D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$ = function $$JSCompiler_StaticMethods_addUpDownMoveStyle$$$($target$$45$$, $duration$$, $delay$$3$$, $y$$38$$) {
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$45$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-delay"), $delay$$3$$);
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$45$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-timing-function"), "linear");
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$45$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-duration"), $duration$$);
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$45$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transform"), "translate3d(0," + $y$$38$$ + "px,0)")
};
return DvtDataGrid;
});