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
      for(D.$scripts$$inline_556$$ = D.$goog$global$$.document.getElementsByTagName("script"), D.$i$$inline_557$$ = D.$scripts$$inline_556$$.length - 1;0 <= D.$i$$inline_557$$;--D.$i$$inline_557$$) {
        D.$src$$inline_558$$ = D.$scripts$$inline_556$$[D.$i$$inline_557$$].src;
        D.$qmark$$inline_559$$ = D.$src$$inline_558$$.lastIndexOf("?");
        D.$l$$inline_560$$ = -1 == D.$qmark$$inline_559$$ ? D.$src$$inline_558$$.length : D.$qmark$$inline_559$$;
        if("base.js" == D.$src$$inline_558$$.substr(D.$l$$inline_560$$ - 7, 7)) {
          D.$goog$basePath$$ = D.$src$$inline_558$$.substr(0, D.$l$$inline_560$$ - 7);
          break
        }
      }
    }
  }
  if(!D.$goog$global$$.CLOSURE_NO_DEPS) {
    D.$src$$inline_562$$ = D.$goog$basePath$$ + "deps.js";
    D.$importScript$$inline_563$$ = D.$goog$global$$.CLOSURE_IMPORT_SCRIPT || D.$goog$writeScriptTag_$$;
    !D.$goog$dependencies_$$.written[D.$src$$inline_562$$] && (0,D.$importScript$$inline_563$$)(D.$src$$inline_562$$) && (D.$goog$dependencies_$$.written[D.$src$$inline_562$$] = D.$JSCompiler_alias_TRUE$$)
  }
}
window.Math.floor(2147483648 * window.Math.random()).toString(36);
D.$goog$exportSymbol$$ = function $$goog$exportSymbol$$$($publicPath$$1$$, $object$$6$$) {
  var $parts$$inline_568$$ = $publicPath$$1$$.split("."), $cur$$inline_569$$ = D.$goog$global$$;
  !($parts$$inline_568$$[0] in $cur$$inline_569$$) && $cur$$inline_569$$.execScript && $cur$$inline_569$$.execScript("var " + $parts$$inline_568$$[0]);
  for(var $part$$inline_570$$;$parts$$inline_568$$.length && ($part$$inline_570$$ = $parts$$inline_568$$.shift());) {
    !$parts$$inline_568$$.length && $object$$6$$ !== D.$JSCompiler_alias_VOID$$ ? $cur$$inline_569$$[$part$$inline_570$$] = $object$$6$$ : $cur$$inline_569$$ = $cur$$inline_569$$[$part$$inline_570$$] ? $cur$$inline_569$$[$part$$inline_570$$] : $cur$$inline_569$$[$part$$inline_570$$] = {}
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
    var $scrollDiv$$inline_1014$$ = window.document.createElement("div");
    $scrollDiv$$inline_1014$$.style.cssText = "width:100px;height:100px;overflow:scroll;position:absolute;top:-9999px;";
    window.document.body.appendChild($scrollDiv$$inline_1014$$);
    $JSCompiler_StaticMethods_getScrollbarSize$self$$.$scrollbarSize$ = $scrollDiv$$inline_1014$$.offsetWidth - $scrollDiv$$inline_1014$$.clientWidth;
    window.document.body.removeChild($scrollDiv$$inline_1014$$)
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
D.$JSCompiler_StaticMethods_ctrlEquivalent$$ = function $$JSCompiler_StaticMethods_ctrlEquivalent$$$($JSCompiler_StaticMethods_ctrlEquivalent$self$$, $event$$46$$) {
  return"Mac" === $JSCompiler_StaticMethods_ctrlEquivalent$self$$.$os$ ? $event$$46$$.metaKey : $event$$46$$.ctrlKey
};
D.$JSCompiler_StaticMethods_getElementScrollLeft$$ = function $$JSCompiler_StaticMethods_getElementScrollLeft$$$($JSCompiler_StaticMethods_getElementScrollLeft$self$$, $element$$10$$) {
  var $width$$20$$, $elemWidth$$;
  if($JSCompiler_StaticMethods_getElementScrollLeft$self$$.$dataGrid$.$getResources$().isRTLMode()) {
    if("gecko" == $JSCompiler_StaticMethods_getElementScrollLeft$self$$.platform || "ie" == $JSCompiler_StaticMethods_getElementScrollLeft$self$$.platform) {
      return window.Math.abs($element$$10$$.scrollLeft)
    }
    $width$$20$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_getElementScrollLeft$self$$.$dataGrid$.$m_scroller$.firstChild);
    $elemWidth$$ = (0,window.parseInt)($element$$10$$.style.width, 10);
    return window.Math.max(0, $width$$20$$ - $elemWidth$$ - $element$$10$$.scrollLeft)
  }
  return $element$$10$$.scrollLeft
};
D.$JSCompiler_StaticMethods_setElementScrollLeft$$ = function $$JSCompiler_StaticMethods_setElementScrollLeft$$$($JSCompiler_StaticMethods_setElementScrollLeft$self_width$$21$$, $element$$11$$, $scrollLeft$$9$$) {
  var $elemWidth$$1$$;
  $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$21$$.$dataGrid$.$getResources$().isRTLMode() ? "gecko" === $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$21$$.platform ? $element$$11$$.scrollLeft = 0 - $scrollLeft$$9$$ : "ie" == $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$21$$.platform ? $element$$11$$.scrollLeft = $scrollLeft$$9$$ : ($JSCompiler_StaticMethods_setElementScrollLeft$self_width$$21$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_setElementScrollLeft$self_width$$21$$.$dataGrid$.$m_scroller$.firstChild), 
  $elemWidth$$1$$ = (0,window.parseInt)($element$$11$$.style.width, 10), $element$$11$$.scrollLeft = $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$21$$ - $elemWidth$$1$$ - $scrollLeft$$9$$) : $element$$11$$.scrollLeft = $scrollLeft$$9$$
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
D.$DvtDataGridOptions$$.prototype.evaluate = function $$DvtDataGridOptions$$$$evaluate$($value$$52$$, $obj$$30$$) {
  return"function" == typeof $value$$52$$ ? $value$$52$$.call(this, $obj$$30$$) : $value$$52$$
};
D.$JSCompiler_StaticMethods_getRawProperty$$ = function $$JSCompiler_StaticMethods_getRawProperty$$$($JSCompiler_StaticMethods_getRawProperty$self$$, $prop$$7$$, $axis$$28$$) {
  var $arg1$$1$$, $arg2$$1$$, $arg3$$1$$;
  "row" == $axis$$28$$ || "column" == $axis$$28$$ ? ($arg1$$1$$ = "header", $arg2$$1$$ = $axis$$28$$, $arg3$$1$$ = $prop$$7$$) : "cell" == $axis$$28$$ && ($arg1$$1$$ = "cell", $arg2$$1$$ = $prop$$7$$);
  return(0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getRawProperty$self$$, $arg1$$1$$, $arg2$$1$$, $arg3$$1$$)
};
D.$DvtDataGridOptions$$.prototype.$getProperty$ = function $$DvtDataGridOptions$$$$$getProperty$$($prop$$8$$, $axis$$29$$, $obj$$31$$) {
  return this.evaluate((0,D.$JSCompiler_StaticMethods_getRawProperty$$)(this, $prop$$8$$, $axis$$29$$), $obj$$31$$)
};
D.$JSCompiler_StaticMethods_nullOrDefault$$ = function $$JSCompiler_StaticMethods_nullOrDefault$$$($value$$53$$) {
  return $value$$53$$ != D.$JSCompiler_alias_NULL$$ ? $value$$53$$ : D.$JSCompiler_alias_FALSE$$
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
D.$JSCompiler_StaticMethods_getHorizontalGridlines$$ = function $$JSCompiler_StaticMethods_getHorizontalGridlines$$$($JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$) {
  $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$, "gridlines", "horizontal");
  return $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$ : "visible"
};
D.$JSCompiler_StaticMethods_getVerticalGridlines$$ = function $$JSCompiler_StaticMethods_getVerticalGridlines$$$($JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$) {
  $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$, "gridlines", "vertical");
  return $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$ : "visible"
};
D.$JSCompiler_StaticMethods_getSelectionCardinality$$ = function $$JSCompiler_StaticMethods_getSelectionCardinality$$$($JSCompiler_StaticMethods_getSelectionCardinality$self_key$$41$$) {
  var $mode$$8_val$$26$$;
  $mode$$8_val$$26$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getSelectionCardinality$self_key$$41$$, "selectionMode");
  if($mode$$8_val$$26$$ == D.$JSCompiler_alias_VOID$$) {
    return"none"
  }
  $JSCompiler_StaticMethods_getSelectionCardinality$self_key$$41$$ = $JSCompiler_StaticMethods_getSelectionCardinality$self_key$$41$$.$getSelectionMode$();
  $mode$$8_val$$26$$ = $mode$$8_val$$26$$[$JSCompiler_StaticMethods_getSelectionCardinality$self_key$$41$$];
  return $mode$$8_val$$26$$ != D.$JSCompiler_alias_NULL$$ ? $mode$$8_val$$26$$ : "none"
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
D.$JSCompiler_StaticMethods_isResizable$$ = function $$JSCompiler_StaticMethods_isResizable$$$($JSCompiler_StaticMethods_isResizable$self$$, $axis$$31$$, $obj$$33$$) {
  return(0,D.$JSCompiler_StaticMethods_nullOrDefault$$)($JSCompiler_StaticMethods_isResizable$self$$.$getProperty$("resizable", $axis$$31$$, $obj$$33$$))
};
D.$DvtDataGridOptions$$.prototype.$getInlineStyle$ = function $$DvtDataGridOptions$$$$$getInlineStyle$$($axis$$32$$, $obj$$34$$) {
  return this.$getProperty$("style", $axis$$32$$, $obj$$34$$)
};
D.$DvtDataGridOptions$$.prototype.$getStyleClass$ = function $$DvtDataGridOptions$$$$$getStyleClass$$($axis$$33$$, $obj$$35$$) {
  return this.$getProperty$("className", $axis$$33$$, $obj$$35$$)
};
D.$JSCompiler_StaticMethods_getRenderer$$ = function $$JSCompiler_StaticMethods_getRenderer$$$($JSCompiler_StaticMethods_getRenderer$self$$, $axis$$34$$) {
  return(0,D.$JSCompiler_StaticMethods_getRawProperty$$)($JSCompiler_StaticMethods_getRenderer$self$$, "renderer", $axis$$34$$)
};
D.$DvtDataGridSizingManager$$ = function $$DvtDataGridSizingManager$$$() {
  this.$sizes$ = {column:{}, row:{}}
};
D.$DvtDataGridSizingManager$$.prototype.$setSize$ = function $$DvtDataGridSizingManager$$$$$setSize$$($axis$$26$$, $headerKey$$, $size$$11$$) {
  this.$sizes$[$axis$$26$$][$headerKey$$] = $size$$11$$
};
D.$DvtDataGridSizingManager$$.prototype.$getSize$ = function $$DvtDataGridSizingManager$$$$$getSize$$($axis$$27$$, $headerKey$$1$$) {
  return this.$sizes$[$axis$$27$$].hasOwnProperty($headerKey$$1$$) ? this.$sizes$[$axis$$27$$][$headerKey$$1$$] : D.$JSCompiler_alias_NULL$$
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
D.$DvtDataGrid$$.prototype.$SetOptions$ = function $$DvtDataGrid$$$$$SetOptions$$($options$$4$$) {
  this.$m_options$ = new D.$DvtDataGridOptions$$($options$$4$$)
};
D.$DvtDataGrid$$.prototype.SetOptions = D.$DvtDataGrid$$.prototype.$SetOptions$;
D.$DvtDataGrid$$.prototype.$UpdateOptions$ = function $$DvtDataGrid$$$$$UpdateOptions$$($JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$) {
  for(window.candidate in $JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$) {
    window.candidate in this.$m_options$.options && this.$m_options$.options[window.candidate] != $JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$[window.candidate] && (this.$m_options$.options[window.candidate] = $JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$[window.candidate])
  }
  for(window.candidate in $JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$) {
    a: {
      $JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$ = D.$JSCompiler_alias_VOID$$;
      switch(window.candidate) {
        case "bandingInterval":
          var $colObj$$inline_8814_j$$inline_8804_row$$inline_8788_rows$$inline_8795$$ = $JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$ = D.$JSCompiler_alias_VOID$$, $i$$inline_8789_i$$inline_8796_opt$$inline_8815_row$$inline_8805$$ = D.$JSCompiler_alias_VOID$$, $headers$$inline_8816_index$$inline_8797_j$$inline_8790_rowCount$$inline_8806$$ = D.$JSCompiler_alias_VOID$$, $bandingClass$$inline_8791_bandingClass$$inline_8798_element$$inline_8817_horizontalGridlines$$inline_8807$$ = 
          D.$JSCompiler_alias_VOID$$;
          $JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$ = this.$m_databody$.firstChild.childNodes;
          $bandingClass$$inline_8791_bandingClass$$inline_8798_element$$inline_8817_horizontalGridlines$$inline_8807$$ = this.getMappedStyle("banded");
          for($i$$inline_8789_i$$inline_8796_opt$$inline_8815_row$$inline_8805$$ = 1;$i$$inline_8789_i$$inline_8796_opt$$inline_8815_row$$inline_8805$$ < $JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$.length;$i$$inline_8789_i$$inline_8796_opt$$inline_8815_row$$inline_8805$$++) {
            (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$[$i$$inline_8789_i$$inline_8796_opt$$inline_8815_row$$inline_8805$$], $bandingClass$$inline_8791_bandingClass$$inline_8798_element$$inline_8817_horizontalGridlines$$inline_8807$$) && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$[$i$$inline_8789_i$$inline_8796_opt$$inline_8815_row$$inline_8805$$], 
            $bandingClass$$inline_8791_bandingClass$$inline_8798_element$$inline_8817_horizontalGridlines$$inline_8807$$);
            $colObj$$inline_8814_j$$inline_8804_row$$inline_8788_rows$$inline_8795$$ = $JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$[$i$$inline_8789_i$$inline_8796_opt$$inline_8815_row$$inline_8805$$].childNodes;
            for($headers$$inline_8816_index$$inline_8797_j$$inline_8790_rowCount$$inline_8806$$ = 0;$headers$$inline_8816_index$$inline_8797_j$$inline_8790_rowCount$$inline_8806$$ < $colObj$$inline_8814_j$$inline_8804_row$$inline_8788_rows$$inline_8795$$.length;$headers$$inline_8816_index$$inline_8797_j$$inline_8790_rowCount$$inline_8806$$ += 1) {
              (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($colObj$$inline_8814_j$$inline_8804_row$$inline_8788_rows$$inline_8795$$[$headers$$inline_8816_index$$inline_8797_j$$inline_8790_rowCount$$inline_8806$$], $bandingClass$$inline_8791_bandingClass$$inline_8798_element$$inline_8817_horizontalGridlines$$inline_8807$$) && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($colObj$$inline_8814_j$$inline_8804_row$$inline_8788_rows$$inline_8795$$[$headers$$inline_8816_index$$inline_8797_j$$inline_8790_rowCount$$inline_8806$$], 
              $bandingClass$$inline_8791_bandingClass$$inline_8798_element$$inline_8817_horizontalGridlines$$inline_8807$$)
            }
          }
          var $j$$inline_8799_refresh$$inline_8818_verticalGridlines$$inline_8808$$ = $bandingClass$$inline_8791_bandingClass$$inline_8798_element$$inline_8817_horizontalGridlines$$inline_8807$$ = $headers$$inline_8816_index$$inline_8797_j$$inline_8790_rowCount$$inline_8806$$ = $i$$inline_8789_i$$inline_8796_opt$$inline_8815_row$$inline_8805$$ = $colObj$$inline_8814_j$$inline_8804_row$$inline_8788_rows$$inline_8795$$ = $JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$ = 
          D.$JSCompiler_alias_VOID$$, $JSCompiler_inline_result$$inline_8819_headers$$inline_8821_row$$inline_8800_rows$$inline_8809$$ = D.$JSCompiler_alias_VOID$$;
          $JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)(this.$m_options$);
          if(0 < $JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$) {
            $colObj$$inline_8814_j$$inline_8804_row$$inline_8788_rows$$inline_8795$$ = this.$m_databody$.firstChild.childNodes;
            $bandingClass$$inline_8791_bandingClass$$inline_8798_element$$inline_8817_horizontalGridlines$$inline_8807$$ = this.getMappedStyle("banded");
            for($i$$inline_8789_i$$inline_8796_opt$$inline_8815_row$$inline_8805$$ = 1;$i$$inline_8789_i$$inline_8796_opt$$inline_8815_row$$inline_8805$$ < $colObj$$inline_8814_j$$inline_8804_row$$inline_8788_rows$$inline_8795$$.length;$i$$inline_8789_i$$inline_8796_opt$$inline_8815_row$$inline_8805$$ += 1) {
              $JSCompiler_inline_result$$inline_8819_headers$$inline_8821_row$$inline_8800_rows$$inline_8809$$ = $colObj$$inline_8814_j$$inline_8804_row$$inline_8788_rows$$inline_8795$$[$i$$inline_8789_i$$inline_8796_opt$$inline_8815_row$$inline_8805$$].childNodes;
              for($j$$inline_8799_refresh$$inline_8818_verticalGridlines$$inline_8808$$ = 0;$j$$inline_8799_refresh$$inline_8818_verticalGridlines$$inline_8808$$ < $JSCompiler_inline_result$$inline_8819_headers$$inline_8821_row$$inline_8800_rows$$inline_8809$$.length;$j$$inline_8799_refresh$$inline_8818_verticalGridlines$$inline_8808$$ += 1) {
                $headers$$inline_8816_index$$inline_8797_j$$inline_8790_rowCount$$inline_8806$$ = this.$m_startCol$ + $j$$inline_8799_refresh$$inline_8818_verticalGridlines$$inline_8808$$, 1 === window.Math.floor($headers$$inline_8816_index$$inline_8797_j$$inline_8790_rowCount$$inline_8806$$ / $JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$) % 2 ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_inline_result$$inline_8819_headers$$inline_8821_row$$inline_8800_rows$$inline_8809$$[$j$$inline_8799_refresh$$inline_8818_verticalGridlines$$inline_8808$$], 
                $bandingClass$$inline_8791_bandingClass$$inline_8798_element$$inline_8817_horizontalGridlines$$inline_8807$$) || (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_inline_result$$inline_8819_headers$$inline_8821_row$$inline_8800_rows$$inline_8809$$[$j$$inline_8799_refresh$$inline_8818_verticalGridlines$$inline_8808$$], $bandingClass$$inline_8791_bandingClass$$inline_8798_element$$inline_8817_horizontalGridlines$$inline_8807$$) : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_inline_result$$inline_8819_headers$$inline_8821_row$$inline_8800_rows$$inline_8809$$[$j$$inline_8799_refresh$$inline_8818_verticalGridlines$$inline_8808$$], 
                $bandingClass$$inline_8791_bandingClass$$inline_8798_element$$inline_8817_horizontalGridlines$$inline_8807$$) && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($colObj$$inline_8814_j$$inline_8804_row$$inline_8788_rows$$inline_8795$$[$j$$inline_8799_refresh$$inline_8818_verticalGridlines$$inline_8808$$], $bandingClass$$inline_8791_bandingClass$$inline_8798_element$$inline_8817_horizontalGridlines$$inline_8807$$)
              }
            }
          }
          (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)(this);
          break;
        case "gridlines":
          var $dir$$inline_8810_opt$$inline_8822$$ = $JSCompiler_inline_result$$inline_8819_headers$$inline_8821_row$$inline_8800_rows$$inline_8809$$ = $j$$inline_8799_refresh$$inline_8818_verticalGridlines$$inline_8808$$ = $bandingClass$$inline_8791_bandingClass$$inline_8798_element$$inline_8817_horizontalGridlines$$inline_8807$$ = $headers$$inline_8816_index$$inline_8797_j$$inline_8790_rowCount$$inline_8806$$ = $i$$inline_8789_i$$inline_8796_opt$$inline_8815_row$$inline_8805$$ = $colObj$$inline_8814_j$$inline_8804_row$$inline_8788_rows$$inline_8795$$ = 
          $JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$ = D.$JSCompiler_alias_VOID$$, $bandingClass$$inline_8791_bandingClass$$inline_8798_element$$inline_8817_horizontalGridlines$$inline_8807$$ = (0,D.$JSCompiler_StaticMethods_getHorizontalGridlines$$)(this.$m_options$), $j$$inline_8799_refresh$$inline_8818_verticalGridlines$$inline_8808$$ = (0,D.$JSCompiler_StaticMethods_getVerticalGridlines$$)(this.$m_options$), 
          $JSCompiler_inline_result$$inline_8819_headers$$inline_8821_row$$inline_8800_rows$$inline_8809$$ = this.$m_databody$.firstChild.childNodes, $headers$$inline_8816_index$$inline_8797_j$$inline_8790_rowCount$$inline_8806$$ = $JSCompiler_inline_result$$inline_8819_headers$$inline_8821_row$$inline_8800_rows$$inline_8809$$.length, $dir$$inline_8810_opt$$inline_8822$$ = this.$getResources$().isRTLMode() ? "right" : "left";
          for($JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$ = 1;$JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$ < $headers$$inline_8816_index$$inline_8797_j$$inline_8790_rowCount$$inline_8806$$;$JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$ += 
          1) {
            $i$$inline_8789_i$$inline_8796_opt$$inline_8815_row$$inline_8805$$ = $JSCompiler_inline_result$$inline_8819_headers$$inline_8821_row$$inline_8800_rows$$inline_8809$$[$JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$].childNodes;
            for($colObj$$inline_8814_j$$inline_8804_row$$inline_8788_rows$$inline_8795$$ = 0;$colObj$$inline_8814_j$$inline_8804_row$$inline_8788_rows$$inline_8795$$ < $i$$inline_8789_i$$inline_8796_opt$$inline_8815_row$$inline_8805$$.length - 1;$colObj$$inline_8814_j$$inline_8804_row$$inline_8788_rows$$inline_8795$$ += 1) {
              "hidden" === $j$$inline_8799_refresh$$inline_8818_verticalGridlines$$inline_8808$$ ? "left" === $dir$$inline_8810_opt$$inline_8822$$ ? $i$$inline_8789_i$$inline_8796_opt$$inline_8815_row$$inline_8805$$[$colObj$$inline_8814_j$$inline_8804_row$$inline_8788_rows$$inline_8795$$].style.borderRight = "none" : $i$$inline_8789_i$$inline_8796_opt$$inline_8815_row$$inline_8805$$[$colObj$$inline_8814_j$$inline_8804_row$$inline_8788_rows$$inline_8795$$].style.borderLeftStyle = "none" : "left" === 
              $dir$$inline_8810_opt$$inline_8822$$ ? $i$$inline_8789_i$$inline_8796_opt$$inline_8815_row$$inline_8805$$[$colObj$$inline_8814_j$$inline_8804_row$$inline_8788_rows$$inline_8795$$].style.borderRight = "" : $i$$inline_8789_i$$inline_8796_opt$$inline_8815_row$$inline_8805$$[$colObj$$inline_8814_j$$inline_8804_row$$inline_8788_rows$$inline_8795$$].style.borderLeftStyle = "", $i$$inline_8789_i$$inline_8796_opt$$inline_8815_row$$inline_8805$$[$colObj$$inline_8814_j$$inline_8804_row$$inline_8788_rows$$inline_8795$$].style.borderBottomStyle = 
              "hidden" === $bandingClass$$inline_8791_bandingClass$$inline_8798_element$$inline_8817_horizontalGridlines$$inline_8807$$ || $JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$ == $headers$$inline_8816_index$$inline_8797_j$$inline_8790_rowCount$$inline_8806$$ - 1 ? "none" : ""
            }
          }
          break;
        case "scrollPosition":
          (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this);
          break;
        case "selectionMode":
          break;
        case "emptyText":
          break;
        case "header":
          $JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$ = this.$m_options$.options.header;
          $j$$inline_8799_refresh$$inline_8818_verticalGridlines$$inline_8808$$ = $bandingClass$$inline_8791_bandingClass$$inline_8798_element$$inline_8817_horizontalGridlines$$inline_8807$$ = $headers$$inline_8816_index$$inline_8797_j$$inline_8790_rowCount$$inline_8806$$ = $i$$inline_8789_i$$inline_8796_opt$$inline_8815_row$$inline_8805$$ = $colObj$$inline_8814_j$$inline_8804_row$$inline_8788_rows$$inline_8795$$ = D.$JSCompiler_alias_VOID$$;
          this.$getResources$().getMappedAttribute("key");
          $j$$inline_8799_refresh$$inline_8818_verticalGridlines$$inline_8808$$ = D.$JSCompiler_alias_FALSE$$;
          for($bandingClass$$inline_8791_bandingClass$$inline_8798_element$$inline_8817_horizontalGridlines$$inline_8807$$ in $JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$) {
            if("column" == $bandingClass$$inline_8791_bandingClass$$inline_8798_element$$inline_8817_horizontalGridlines$$inline_8807$$ || "row" == $bandingClass$$inline_8791_bandingClass$$inline_8798_element$$inline_8817_horizontalGridlines$$inline_8807$$) {
              if($j$$inline_8799_refresh$$inline_8818_verticalGridlines$$inline_8808$$) {
                break
              }
              "column" == $bandingClass$$inline_8791_bandingClass$$inline_8798_element$$inline_8817_horizontalGridlines$$inline_8807$$ ? this.$m_colHeader$ && ($headers$$inline_8816_index$$inline_8797_j$$inline_8790_rowCount$$inline_8806$$ = this.$m_colHeader$.firstChild.childNodes) : this.$m_rowHeader$ && 1 < this.$m_rowHeader$.firstChild.childElementCount && ($headers$$inline_8816_index$$inline_8797_j$$inline_8790_rowCount$$inline_8806$$ = this.$m_rowHeader$.firstChild.childNodes);
              if($headers$$inline_8816_index$$inline_8797_j$$inline_8790_rowCount$$inline_8806$$) {
                for($i$$inline_8789_i$$inline_8796_opt$$inline_8815_row$$inline_8805$$ in $colObj$$inline_8814_j$$inline_8804_row$$inline_8788_rows$$inline_8795$$ = $JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$[$bandingClass$$inline_8791_bandingClass$$inline_8798_element$$inline_8817_horizontalGridlines$$inline_8807$$], $colObj$$inline_8814_j$$inline_8804_row$$inline_8788_rows$$inline_8795$$) {
                  b: {
                    var $JSCompiler_inline_result$$inline_8819_headers$$inline_8821_row$$inline_8800_rows$$inline_8809$$ = $headers$$inline_8816_index$$inline_8797_j$$inline_8790_rowCount$$inline_8806$$, $dir$$inline_8810_opt$$inline_8822$$ = $i$$inline_8789_i$$inline_8796_opt$$inline_8815_row$$inline_8805$$, $value$$inline_8823$$ = $colObj$$inline_8814_j$$inline_8804_row$$inline_8788_rows$$inline_8795$$[$i$$inline_8789_i$$inline_8796_opt$$inline_8815_row$$inline_8805$$], $i$$inline_8824$$ = D.$JSCompiler_alias_VOID$$, 
                    $attribute$$inline_8825$$ = D.$JSCompiler_alias_VOID$$, $val$$inline_8826$$ = D.$JSCompiler_alias_VOID$$;
                    this.$getResources$().getMappedAttribute("key");
                    $attribute$$inline_8825$$ = this.$getResources$().getMappedAttribute($dir$$inline_8810_opt$$inline_8822$$);
                    $val$$inline_8826$$ = $value$$inline_8823$$;
                    $value$$inline_8823$$.width ? $val$$inline_8826$$ = $value$$inline_8823$$.width : $value$$inline_8823$$.height && ($val$$inline_8826$$ = $value$$inline_8823$$.height);
                    for($i$$inline_8824$$ = 0;$i$$inline_8824$$ < $JSCompiler_inline_result$$inline_8819_headers$$inline_8821_row$$inline_8800_rows$$inline_8809$$.length;$i$$inline_8824$$++) {
                      if("disable" == $val$$inline_8826$$) {
                        $JSCompiler_inline_result$$inline_8819_headers$$inline_8821_row$$inline_8800_rows$$inline_8809$$[$i$$inline_8824$$].setAttribute($attribute$$inline_8825$$, "false")
                      }else {
                        if("enable" == $val$$inline_8826$$) {
                          $JSCompiler_inline_result$$inline_8819_headers$$inline_8821_row$$inline_8800_rows$$inline_8809$$[$i$$inline_8824$$].setAttribute($attribute$$inline_8825$$, "true")
                        }else {
                          $JSCompiler_inline_result$$inline_8819_headers$$inline_8821_row$$inline_8800_rows$$inline_8809$$ = D.$JSCompiler_alias_FALSE$$;
                          break b
                        }
                      }
                    }
                    $JSCompiler_inline_result$$inline_8819_headers$$inline_8821_row$$inline_8800_rows$$inline_8809$$ = D.$JSCompiler_alias_TRUE$$
                  }
                  if(!$JSCompiler_inline_result$$inline_8819_headers$$inline_8821_row$$inline_8800_rows$$inline_8809$$) {
                    $j$$inline_8799_refresh$$inline_8818_verticalGridlines$$inline_8808$$ = D.$JSCompiler_alias_TRUE$$;
                    break
                  }
                }
              }
            }
          }
          $j$$inline_8799_refresh$$inline_8818_verticalGridlines$$inline_8808$$ && this.refresh(this.$m_root$);
          break;
        default:
          $JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$ = D.$JSCompiler_alias_FALSE$$;
          break a
      }
      $JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$ = D.$JSCompiler_alias_TRUE$$
    }
    if(!$JSCompiler_inline_result$$24_columnBandingInterval$$inline_8794_i$$inline_8803_obj$$inline_578_obj$$inline_8813_options$$5_rows$$inline_8787$$) {
      this.refresh(this.$m_root$);
      break
    }
  }
};
D.$DvtDataGrid$$.prototype.UpdateOptions = D.$DvtDataGrid$$.prototype.$UpdateOptions$;
D.$DvtDataGrid$$.prototype.$SetResources$ = (0,D.$JSCompiler_set$$)("$m_resources$");
D.$DvtDataGrid$$.prototype.SetResources = D.$DvtDataGrid$$.prototype.$SetResources$;
D.$DvtDataGrid$$.prototype.$getResources$ = (0,D.$JSCompiler_get$$)("$m_resources$");
D.$DvtDataGrid$$.prototype.getResources = D.$DvtDataGrid$$.prototype.$getResources$;
D.$DvtDataGrid$$.prototype.getMappedStyle = function $$DvtDataGrid$$$$getMappedStyle$($key$$27$$) {
  return this.$getResources$().getMappedStyle($key$$27$$)
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
D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$ = function $$JSCompiler_StaticMethods__isHighWatermarkScrolling$$$($JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_613$$) {
  $JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_613$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_613$$.$m_options$, "scrollPolicy");
  $JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_613$$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_613$$ = "auto");
  return"scroll" != $JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_613$$
};
D.$DvtDataGrid$$.prototype.$destroy$ = function $$DvtDataGrid$$$$$destroy$$() {
  delete this.$m_fetching$;
  window.document.removeEventListener("mousemove", this.$m_docMouseMoveListener$, D.$JSCompiler_alias_FALSE$$);
  window.document.removeEventListener("mouseup", this.$m_docMouseUpListener$, D.$JSCompiler_alias_FALSE$$);
  this.$m_dataSource$ != D.$JSCompiler_alias_NULL$$ && (this.$m_dataSource$.off("change", this.$handleModelEvent$), this.$m_dataSource$.off("expand", this.$handleExpandEvent$), this.$m_dataSource$.off("collapse", this.$handleCollapseEvent$));
  this.$m_root$ != D.$JSCompiler_alias_NULL$$ && this.$m_handleDatabodyKeyDown$ && this.$m_root$.removeEventListener("keydown", this.$m_handleDatabodyKeyDown$, D.$JSCompiler_alias_FALSE$$);
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
  $emptyText_resources$$1$$ == D.$JSCompiler_alias_NULL$$ && ($emptyText_resources$$1$$ = this.$getResources$(), $emptyText_resources$$1$$ = $emptyText_resources$$1$$.getTranslatedText("msgNoData"));
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
D.$JSCompiler_StaticMethods_getRowHeight$$ = function $$JSCompiler_StaticMethods_getRowHeight$$$($JSCompiler_StaticMethods_getRowHeight$self$$, $elem$$2$$, $index$$45$$, $key$$28$$) {
  var $rowHeight$$;
  $rowHeight$$ = $JSCompiler_StaticMethods_getRowHeight$self$$.$m_sizingManager$.$getSize$("row", $key$$28$$);
  if($rowHeight$$ != D.$JSCompiler_alias_NULL$$) {
    return $rowHeight$$
  }
  $rowHeight$$ = $JSCompiler_StaticMethods_getRowHeight$self$$.$m_cachedRowHeight$[$index$$45$$ - $JSCompiler_StaticMethods_getRowHeight$self$$.$m_cachedRowHeightStartIndex$];
  if($rowHeight$$ == D.$JSCompiler_alias_NULL$$) {
    $key$$28$$ = (0,D.$JSCompiler_StaticMethods__getStyleClassDimensionKey$$)($elem$$2$$), $rowHeight$$ = $JSCompiler_StaticMethods_getRowHeight$self$$.$m_styleClassDimensionMap$[$key$$28$$], $rowHeight$$ == D.$JSCompiler_alias_NULL$$ && ($elem$$2$$.style.visibility = "hidden", window.document.body.appendChild($elem$$2$$), $rowHeight$$ = $elem$$2$$.offsetHeight, $elem$$2$$.style.visibility = "visible", $JSCompiler_StaticMethods_getRowHeight$self$$.$m_styleClassDimensionMap$[$key$$28$$] = $rowHeight$$)
  }else {
    return $rowHeight$$
  }
  0 === $rowHeight$$ && ($rowHeight$$ = (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)($JSCompiler_StaticMethods_getRowHeight$self$$));
  0 > $index$$45$$ - $JSCompiler_StaticMethods_getRowHeight$self$$.$m_cachedRowHeightStartIndex$ ? $JSCompiler_StaticMethods_getRowHeight$self$$.$m_cachedRowHeight$.unshift($rowHeight$$) : $JSCompiler_StaticMethods_getRowHeight$self$$.$m_cachedRowHeight$[$index$$45$$ - $JSCompiler_StaticMethods_getRowHeight$self$$.$m_cachedRowHeightStartIndex$] = $rowHeight$$;
  return $rowHeight$$
};
D.$JSCompiler_StaticMethods_getColumnWidth$$ = function $$JSCompiler_StaticMethods_getColumnWidth$$$($JSCompiler_StaticMethods_getColumnWidth$self$$, $elem$$3$$, $index$$46$$, $key$$29$$) {
  var $columnWidth$$;
  $columnWidth$$ = $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_sizingManager$.$getSize$("column", $key$$29$$);
  if($columnWidth$$ != D.$JSCompiler_alias_NULL$$) {
    return $columnWidth$$
  }
  $columnWidth$$ = $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_cachedColumnWidth$[$index$$46$$ - $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_cachedColumnWidthStartIndex$];
  if($columnWidth$$ == D.$JSCompiler_alias_NULL$$) {
    $key$$29$$ = (0,D.$JSCompiler_StaticMethods__getStyleClassDimensionKey$$)($elem$$3$$), $columnWidth$$ = $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_styleClassDimensionMap$[$key$$29$$], $columnWidth$$ == D.$JSCompiler_alias_NULL$$ && ("" === $elem$$3$$.style.width && (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($elem$$3$$, 50), $elem$$3$$.style.visibility = "hidden", window.document.body.appendChild($elem$$3$$), $columnWidth$$ = $elem$$3$$.offsetWidth, $elem$$3$$.style.visibility = 
    "visible", $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_styleClassDimensionMap$[$key$$29$$] = $columnWidth$$)
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
D.$JSCompiler_StaticMethods__isLastRow$$ = function $$JSCompiler_StaticMethods__isLastRow$$$($JSCompiler_StaticMethods__isLastRow$self$$, $index$$47$$) {
  return(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods__isLastRow$self$$, "row") ? $index$$47$$ + 1 === $JSCompiler_StaticMethods__isLastRow$self$$.$m_endRow$ && $JSCompiler_StaticMethods__isLastRow$self$$.$m_stopRowFetch$ : $index$$47$$ + 1 === $JSCompiler_StaticMethods__isLastRow$self$$.$m_dataSource$.getCount("row")
};
D.$JSCompiler_StaticMethods__isLastColumn$$ = function $$JSCompiler_StaticMethods__isLastColumn$$$($JSCompiler_StaticMethods__isLastColumn$self$$, $index$$48$$) {
  return(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods__isLastColumn$self$$, "column") ? $index$$48$$ + 1 === $JSCompiler_StaticMethods__isLastColumn$self$$.$m_endCol$ && $JSCompiler_StaticMethods__isLastColumn$self$$.$m_stopColumnFetch$ : $index$$48$$ + 1 === $JSCompiler_StaticMethods__isLastColumn$self$$.$m_dataSource$.getCount("column")
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
D.$DvtDataGrid$$.prototype.$render$ = function $$DvtDataGrid$$$$$render$$($empty$$inline_634_i$$inline_636_root$$1$$) {
  this.$m_databody$ != D.$JSCompiler_alias_NULL$$ && (this.$destroy$(), (0,D.$JSCompiler_StaticMethods_resetInternal$$)(this));
  this.$m_timingStart$ = new window.Date;
  this.$m_fetching$ = {};
  this.$m_currentScrollTop$ = this.$m_currentScrollLeft$ = this.$m_endColHeaderPixel$ = this.$m_endRowHeaderPixel$ = this.$m_startColHeaderPixel$ = this.$m_startRowHeaderPixel$ = this.$m_endColHeader$ = this.$m_endRowHeader$ = this.$m_startColHeader$ = this.$m_startRowHeader$ = this.$m_endColPixel$ = this.$m_endRowPixel$ = this.$m_startColPixel$ = this.$m_startRowPixel$ = this.$m_endCol$ = this.$m_endRow$ = this.$m_startCol$ = this.$m_startRow$ = 0;
  var $emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$, $colHeader$$inline_630$$, $rowHeader$$inline_631$$;
  this.$m_root$ = $empty$$inline_634_i$$inline_636_root$$1$$;
  this.$m_root$.className = this.getMappedStyle("datagrid");
  this.$m_root$.setAttribute("role", "application");
  this.$m_root$.setAttribute("aria-describedby", (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "summary"));
  this.$m_initialized$ = D.$JSCompiler_alias_FALSE$$;
  $empty$$inline_634_i$$inline_636_root$$1$$.tabIndex = 0;
  $emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$ = window.document.createElement("div");
  $emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "status");
  $emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$.className = this.getMappedStyle("status");
  $emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$.setAttribute("role", "status");
  $empty$$inline_634_i$$inline_636_root$$1$$.appendChild($emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$);
  this.$m_status$ = $emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$;
  $emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$ = window.document.createElement("div");
  $emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "summary");
  $emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$.className = this.getMappedStyle("info");
  $empty$$inline_634_i$$inline_636_root$$1$$.appendChild($emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$);
  this.$m_accSummary$ = $emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$;
  $emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$ = window.document.createElement("div");
  $emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "info");
  $emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$.className = this.getMappedStyle("info");
  $emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$.setAttribute("role", "status");
  $empty$$inline_634_i$$inline_636_root$$1$$.appendChild($emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$);
  this.$m_accInfo$ = $emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$;
  $emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$ = window.document.createElement("div");
  $emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "state");
  $emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$.className = this.getMappedStyle("info");
  $empty$$inline_634_i$$inline_636_root$$1$$.appendChild($emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$);
  this.$m_stateInfo$ = $emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$;
  if(this.$m_dataSource$ != D.$JSCompiler_alias_NULL$$) {
    $emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$ = this.$getResources$().isRTLMode();
    $colHeader$$inline_630$$ = (0,D.$JSCompiler_StaticMethods_buildHeaders$$)(this, "column", this.getMappedStyle("colheader"));
    $rowHeader$$inline_631$$ = (0,D.$JSCompiler_StaticMethods_buildHeaders$$)(this, "row", this.getMappedStyle("rowheader"));
    var $root$$inline_8842$$ = window.document.createElement("div");
    $root$$inline_8842$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "scroller");
    $root$$inline_8842$$.className = this.getMappedStyle("scrollers");
    $root$$inline_8842$$.addEventListener ? $root$$inline_8842$$.addEventListener("scroll", this.$handleScroll$.bind(this), D.$JSCompiler_alias_FALSE$$) : $root$$inline_8842$$.attachEvent("onscroll", this.$handleScroll$.bind(this));
    var $root$$inline_8846$$ = window.document.createElement("div");
    $root$$inline_8846$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "databody");
    $root$$inline_8846$$.className = this.getMappedStyle("databody");
    this.fetchCells($root$$inline_8846$$, $root$$inline_8842$$, 0, 0);
    $emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$ && ($colHeader$$inline_630$$.style.direction = "rtl", $root$$inline_8846$$.style.direction = "rtl", $root$$inline_8842$$.style.direction = "rtl");
    $empty$$inline_634_i$$inline_636_root$$1$$.appendChild($colHeader$$inline_630$$);
    $empty$$inline_634_i$$inline_636_root$$1$$.appendChild($rowHeader$$inline_631$$);
    $empty$$inline_634_i$$inline_636_root$$1$$.appendChild($root$$inline_8842$$);
    $empty$$inline_634_i$$inline_636_root$$1$$.appendChild($root$$inline_8846$$);
    this.$m_colHeader$ = $colHeader$$inline_630$$;
    this.$m_rowHeader$ = $rowHeader$$inline_631$$;
    this.$m_databody$ = $root$$inline_8846$$;
    this.$m_scroller$ = $root$$inline_8842$$;
    this.$m_isResizing$ = D.$JSCompiler_alias_FALSE$$;
    this.$m_resizingElement$ = D.$JSCompiler_alias_NULL$$;
    this.$m_databodyDragState$ = D.$JSCompiler_alias_FALSE$$;
    this.$m_handleDatabodyKeyDown$ = this.$handleDatabodyKeyDown$.bind(this);
    this.$m_docMouseMoveListener$ = this.$handleMouseMove$.bind(this);
    this.$m_docMouseUpListener$ = this.$handleMouseUp$.bind(this);
    this.$m_utils$.$isTouchDevice$() ? ($root$$inline_8846$$.addEventListener("touchstart", this.$handleTouchStart$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_8846$$.addEventListener("touchmove", this.$handleTouchMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_8846$$.addEventListener("touchend", this.$handleTouchEnd$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_8846$$.addEventListener("touchcancel", this.$handleTouchCancel$.bind(this), D.$JSCompiler_alias_FALSE$$), 
    $colHeader$$inline_630$$.addEventListener("touchstart", this.$handleHeaderTouchStart$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_630$$.addEventListener("touchmove", this.$handleHeaderTouchMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_630$$.addEventListener("touchend", this.$handleHeaderTouchEnd$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_630$$.addEventListener("touchcancel", this.$handleHeaderTouchCancel$.bind(this), D.$JSCompiler_alias_FALSE$$), 
    $rowHeader$$inline_631$$.addEventListener("touchstart", this.$handleHeaderTouchStart$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_631$$.addEventListener("touchmove", this.$handleHeaderTouchMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_631$$.addEventListener("touchend", this.$handleHeaderTouchEnd$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_631$$.addEventListener("touchcancel", this.$handleHeaderTouchCancel$.bind(this), D.$JSCompiler_alias_FALSE$$)) : 
    (window.document.addEventListener("mousemove", this.$m_docMouseMoveListener$, D.$JSCompiler_alias_FALSE$$), window.document.addEventListener("mouseup", this.$m_docMouseUpListener$, D.$JSCompiler_alias_FALSE$$), $empty$$inline_634_i$$inline_636_root$$1$$.addEventListener("keydown", this.$m_handleDatabodyKeyDown$, D.$JSCompiler_alias_FALSE$$), $root$$inline_8846$$.addEventListener("mousewheel", this.$handleDatabodyMouseWheel$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_8846$$.addEventListener("mousedown", 
    this.$handleDatabodyMouseDown$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_8846$$.addEventListener("mousemove", this.$handleDatabodyMouseMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_8846$$.addEventListener("mouseup", this.$handleDatabodyMouseUp$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_8846$$.addEventListener("mouseout", this.$handleDatabodyMouseOut$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_8846$$.addEventListener("mouseover", this.$handleDatabodyMouseOver$.bind(this), 
    D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_631$$.addEventListener("mousedown", this.$handleHeaderMouseDown$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_630$$.addEventListener("mousedown", this.$handleHeaderMouseDown$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_631$$.addEventListener("mouseover", this.$handleHeaderMouseOver$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_630$$.addEventListener("mouseover", this.$handleHeaderMouseOver$.bind(this), 
    D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_631$$.addEventListener("mousemove", this.$handleRowHeaderMouseMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_631$$.addEventListener("mouseup", this.$handleHeaderMouseUp$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_631$$.addEventListener("mouseout", this.$handleHeaderMouseOut$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_630$$.addEventListener("mouseout", this.$handleHeaderMouseOut$.bind(this), 
    D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_631$$.addEventListener("click", this.$handleHeaderClick$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_630$$.addEventListener("click", this.$handleHeaderClick$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_8842$$.addEventListener("mousedown", this.$handleScrollerMouseDown$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_8842$$.addEventListener("mouseup", this.$handleScrollerMouseUp$.bind(this), D.$JSCompiler_alias_FALSE$$));
    if((0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && !this.$m_initialized$) {
      if((0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this), (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this), this.$m_modelEvents$ != D.$JSCompiler_alias_NULL$$) {
        for($empty$$inline_634_i$$inline_636_root$$1$$ = 0;$empty$$inline_634_i$$inline_636_root$$1$$ < this.$m_modelEvents$.length;$empty$$inline_634_i$$inline_636_root$$1$$++) {
          this.$handleModelEvent$(this.$m_modelEvents$[$empty$$inline_634_i$$inline_636_root$$1$$])
        }
        this.$m_modelEvents$.length = 0
      }
    }else {
      (0,D.$JSCompiler_StaticMethods_isHeaderFetchComplete$$)(this) && !this.$m_initialized$ && (0,D.$JSCompiler_StaticMethods_resizeHeaders$$)(this)
    }
  }else {
    $emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$ = this.$getEmptyText$(), $empty$$inline_634_i$$inline_636_root$$1$$ = window.document.createElement("div"), $empty$$inline_634_i$$inline_636_root$$1$$.className = this.getMappedStyle("emptytext"), $empty$$inline_634_i$$inline_636_root$$1$$.setAttribute("id", (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "empty")), $empty$$inline_634_i$$inline_636_root$$1$$.innerHTML = $emptyText$$inline_635_root$$inline_8830_root$$inline_8833_root$$inline_8836_root$$inline_8839_rtl$$inline_629$$, 
    this.$m_root$.appendChild($empty$$inline_634_i$$inline_636_root$$1$$)
  }
};
D.$DvtDataGrid$$.prototype.render = D.$DvtDataGrid$$.prototype.$render$;
D.$JSCompiler_StaticMethods_resizeHeaders$$ = function $$JSCompiler_StaticMethods_resizeHeaders$$$($JSCompiler_StaticMethods_resizeHeaders$self$$) {
  var $width$$13$$, $height$$13$$, $colHeader$$1$$, $rowHeader$$1$$, $colHeaderHeight$$, $rowHeaderWidth$$, $dir$$2$$;
  $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_colHeader$ == D.$JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_rowHeader$ == D.$JSCompiler_alias_NULL$$ || ($width$$13$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.getWidth(), $height$$13$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.getHeight(), $colHeader$$1$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_colHeader$, $rowHeader$$1$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_rowHeader$, 
  $colHeaderHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($colHeader$$1$$), $rowHeaderWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($rowHeader$$1$$), $dir$$2$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.$getResources$().isRTLMode() ? "right" : "left", (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$1$$, 0, $dir$$2$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$1$$, $colHeaderHeight$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($rowHeader$$1$$, 
  $height$$13$$ - $colHeaderHeight$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($colHeader$$1$$, $rowHeaderWidth$$, $dir$$2$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($colHeader$$1$$, $width$$13$$ - $rowHeaderWidth$$), $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_utils$.$isTouchDevice$() || (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_resizeHeaders$self$$))
};
D.$JSCompiler_StaticMethods_resizeGrid$$ = function $$JSCompiler_StaticMethods_resizeGrid$$$($JSCompiler_StaticMethods_resizeGrid$self$$) {
  var $databodyWidth_width$$14$$, $height$$14_scrollerHeight$$, $borderWidth_colHeader$$2_empty$$1$$, $emptyText$$2_rowHeader$$2$$, $scroller$$1$$, $databody$$1$$, $colHeaderHeight$$1$$, $rowHeaderWidth$$1$$, $databodyContentWidth$$, $databodyContentHeight$$, $databodyHeight$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$, $isDatabodyVerticalScrollbarRequired$$, $scrollbarSize$$, $scrollerWidth$$;
  $JSCompiler_StaticMethods_resizeGrid$self$$.$m_databody$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_resizeGrid$self$$.$m_databody$.firstChild == D.$JSCompiler_alias_NULL$$ ? ($emptyText$$2_rowHeader$$2$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$getEmptyText$(), $borderWidth_colHeader$$2_empty$$1$$ = window.document.createElement("div"), $borderWidth_colHeader$$2_empty$$1$$.className = $JSCompiler_StaticMethods_resizeGrid$self$$.getMappedStyle("emptytext"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($borderWidth_colHeader$$2_empty$$1$$, 
  0, "top"), $borderWidth_colHeader$$2_empty$$1$$.innerHTML = $emptyText$$2_rowHeader$$2$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_root$.appendChild($borderWidth_colHeader$$2_empty$$1$$)) : ($JSCompiler_StaticMethods_resizeGrid$self$$.$m_rootBorderWidth$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_resizeGrid$self$$.$m_rootBorderWidth$ = (0,window.parseInt)(window.document.defaultView.getComputedStyle($JSCompiler_StaticMethods_resizeGrid$self$$.$m_root$, D.$JSCompiler_alias_NULL$$).getPropertyValue("border-top-width"), 
  10)), $borderWidth_colHeader$$2_empty$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_rootBorderWidth$, $databodyWidth_width$$14$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.getWidth() - 2 * $borderWidth_colHeader$$2_empty$$1$$, $height$$14_scrollerHeight$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.getHeight() - 2 * $borderWidth_colHeader$$2_empty$$1$$, $borderWidth_colHeader$$2_empty$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_colHeader$, $emptyText$$2_rowHeader$$2$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_rowHeader$, 
  $scroller$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scroller$, $databody$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_databody$, $colHeaderHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($borderWidth_colHeader$$2_empty$$1$$), $rowHeaderWidth$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($emptyText$$2_rowHeader$$2$$), $databodyContentWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$1$$.firstChild), $databodyContentHeight$$ = 
  (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databody$$1$$.firstChild), $height$$14_scrollerHeight$$ -= $colHeaderHeight$$1$$, $scrollerWidth$$ = $databodyWidth_width$$14$$ - $rowHeaderWidth$$1$$, $databodyWidth_width$$14$$ = window.Math.min($databodyContentWidth$$, $scrollerWidth$$), $databodyHeight$$ = window.Math.min($databodyContentHeight$$, $height$$14_scrollerHeight$$), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_utils$.$isTouchDevice$(), $scrollbarSize$$ = (0,D.$JSCompiler_StaticMethods_getScrollbarSize$$)($JSCompiler_StaticMethods_resizeGrid$self$$.$m_utils$), 
  ($dir$$3_isDatabodyHorizontalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, $scrollerWidth$$)) ? $isDatabodyVerticalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, $height$$14_scrollerHeight$$ - $scrollbarSize$$) : ($isDatabodyVerticalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, 
  $height$$14_scrollerHeight$$)) && ($dir$$3_isDatabodyHorizontalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, $scrollerWidth$$ - $scrollbarSize$$)), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_hasHorizontalScroller$ = $dir$$3_isDatabodyHorizontalScrollbarRequired$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_hasVerticalScroller$ = $isDatabodyVerticalScrollbarRequired$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$ && 
  ($height$$14_scrollerHeight$$ - $scrollbarSize$$ >= $databodyHeight$$ || ($databodyHeight$$ = $height$$14_scrollerHeight$$ - $scrollbarSize$$)), $isDatabodyVerticalScrollbarRequired$$ && ($scrollerWidth$$ - $scrollbarSize$$ >= $databodyWidth_width$$14$$ || ($databodyWidth_width$$14$$ = $scrollerWidth$$ - $scrollbarSize$$)), $dir$$3_isDatabodyHorizontalScrollbarRequired$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$getResources$().isRTLMode() ? "right" : "left", (0,D.$JSCompiler_StaticMethods_setElementDir$$)($emptyText$$2_rowHeader$$2$$, 
  0, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($emptyText$$2_rowHeader$$2$$, $colHeaderHeight$$1$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($emptyText$$2_rowHeader$$2$$, $databodyHeight$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($borderWidth_colHeader$$2_empty$$1$$, $rowHeaderWidth$$1$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($borderWidth_colHeader$$2_empty$$1$$, 
  $databodyWidth_width$$14$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$1$$, $colHeaderHeight$$1$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$1$$, $rowHeaderWidth$$1$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databody$$1$$, $databodyWidth_width$$14$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databody$$1$$, $databodyHeight$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$1$$, 
  $colHeaderHeight$$1$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$1$$, $rowHeaderWidth$$1$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($scroller$$1$$, $scrollerWidth$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($scroller$$1$$, $height$$14_scrollerHeight$$), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scrollWidth$ = $databodyContentWidth$$ - $databodyWidth_width$$14$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scrollHeight$ = 
  $databodyContentHeight$$ - $databodyHeight$$, (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_resizeGrid$self$$), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_initialized$ = D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_StaticMethods_buildCorners$$ = function $$JSCompiler_StaticMethods_buildCorners$$$($JSCompiler_StaticMethods_buildCorners$self$$) {
  var $colHeaderHeight$$2$$, $rowHeaderWidth$$2$$, $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $dir$$4$$, $colHeaderWidth$$, $rowHeaderHeight$$, $scrollerWidth$$1$$, $scrollerHeight$$1$$;
  (0,D.$JSCompiler_StaticMethods_getScrollbarSize$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_utils$);
  $scrollerWidth$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_scroller$);
  $scrollerHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_scroller$);
  $colHeaderHeight$$2$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_colHeader$);
  $colHeaderWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_colHeader$);
  $rowHeaderWidth$$2$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeader$);
  $rowHeaderHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeader$);
  $dir$$4$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$getResources$().isRTLMode() ? "right" : "left";
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$);
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$);
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$);
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$);
  1 !== $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeader$.firstChild.childNodes.length && ($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = window.document.createElement("div"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "corner"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("topcorner"), 
  (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $colHeaderHeight$$2$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ = 
  $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$);
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasHorizontalScroller$ ? ($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = window.document.createElement("div"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "rhSbSpacer"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("rowheaderspacer"), 
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderHeight$$ + $colHeaderHeight$$2$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 0, $dir$$4$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 
  $scrollerHeight$$1$$ - $rowHeaderHeight$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ = $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$) : $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasVerticalScroller$ ? ($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = window.document.createElement("div"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "chSbSpacer"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("colheaderspacer"), 
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$ + $colHeaderWidth$$, $dir$$4$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $scrollerWidth$$1$$ - $colHeaderWidth$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $colHeaderHeight$$2$$), 
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ = $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$) : $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasHorizontalScroller$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasVerticalScroller$ ? ($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = window.document.createElement("div"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "bcorner"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = 
  $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("bottomcorner"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderHeight$$ + $colHeaderHeight$$2$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$ + $colHeaderWidth$$, $dir$$4$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 
  $scrollerWidth$$1$$ - $colHeaderWidth$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $scrollerHeight$$1$$ - $rowHeaderHeight$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ = $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$) : 
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_setInitialScrollPosition$$ = function $$JSCompiler_StaticMethods_setInitialScrollPosition$$$($JSCompiler_StaticMethods_setInitialScrollPosition$self$$) {
  var $indexes$$3_scrollMode_scrollPosition$$inline_645$$, $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_647_columnScrollPosition_initialScrollLeft$$, $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_650_columnScrollPosition$$inline_648_initialScrollTop_rowScrollPosition$$;
  $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_650_columnScrollPosition$$inline_648_initialScrollTop_rowScrollPosition$$ = $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_647_columnScrollPosition_initialScrollLeft$$ = 0;
  $indexes$$3_scrollMode_scrollPosition$$inline_645$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$, "scrollPosition");
  $indexes$$3_scrollMode_scrollPosition$$inline_645$$ = $indexes$$3_scrollMode_scrollPosition$$inline_645$$ == D.$JSCompiler_alias_VOID$$ ? D.$JSCompiler_alias_NULL$$ : $indexes$$3_scrollMode_scrollPosition$$inline_645$$.key != D.$JSCompiler_alias_VOID$$ ? "key" : $indexes$$3_scrollMode_scrollPosition$$inline_645$$.index != D.$JSCompiler_alias_VOID$$ ? "index" : D.$JSCompiler_alias_NULL$$;
  if($JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_scroller$ != D.$JSCompiler_alias_VOID$$) {
    if($indexes$$3_scrollMode_scrollPosition$$inline_645$$ != D.$JSCompiler_alias_NULL$$) {
      $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_647_columnScrollPosition_initialScrollLeft$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$;
      $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_650_columnScrollPosition$$inline_648_initialScrollTop_rowScrollPosition$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_647_columnScrollPosition_initialScrollLeft$$, "scrollPosition", "key", "column");
      $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_647_columnScrollPosition_initialScrollLeft$$ = $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_650_columnScrollPosition$$inline_648_initialScrollTop_rowScrollPosition$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_650_columnScrollPosition$$inline_648_initialScrollTop_rowScrollPosition$$ : (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_647_columnScrollPosition_initialScrollLeft$$, 
      "scrollPosition", "index", "column");
      $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_650_columnScrollPosition$$inline_648_initialScrollTop_rowScrollPosition$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$;
      var $rowScrollPosition$$inline_651$$;
      $rowScrollPosition$$inline_651$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_650_columnScrollPosition$$inline_648_initialScrollTop_rowScrollPosition$$, "scrollPosition", "key", "row");
      $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_650_columnScrollPosition$$inline_648_initialScrollTop_rowScrollPosition$$ = $rowScrollPosition$$inline_651$$ != D.$JSCompiler_alias_NULL$$ ? $rowScrollPosition$$inline_651$$ : (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_650_columnScrollPosition$$inline_648_initialScrollTop_rowScrollPosition$$, "scrollPosition", "index", "row");
      "key" === $indexes$$3_scrollMode_scrollPosition$$inline_645$$ && ($indexes$$3_scrollMode_scrollPosition$$inline_645$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_dataSource$.indexes({row:$JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_650_columnScrollPosition$$inline_648_initialScrollTop_rowScrollPosition$$, column:$JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_647_columnScrollPosition_initialScrollLeft$$}), $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_647_columnScrollPosition_initialScrollLeft$$ = 
      -1 === $indexes$$3_scrollMode_scrollPosition$$inline_645$$.column ? 0 : $indexes$$3_scrollMode_scrollPosition$$inline_645$$.column, $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_650_columnScrollPosition$$inline_648_initialScrollTop_rowScrollPosition$$ = -1 === $indexes$$3_scrollMode_scrollPosition$$inline_645$$.row ? 0 : $indexes$$3_scrollMode_scrollPosition$$inline_645$$.row);
      $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_647_columnScrollPosition_initialScrollLeft$$ *= $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_avgColWidth$;
      $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_650_columnScrollPosition$$inline_648_initialScrollTop_rowScrollPosition$$ *= $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_avgRowHeight$
    }
    (0,D.$JSCompiler_StaticMethods_setElementScrollLeft$$)($JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_utils$, $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_scroller$, $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_647_columnScrollPosition_initialScrollLeft$$);
    $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_scroller$.scrollTop = $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_650_columnScrollPosition$$inline_648_initialScrollTop_rowScrollPosition$$
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
D.$DvtDataGrid$$.prototype.$SetAccessibleContext$ = function $$DvtDataGrid$$$$$SetAccessibleContext$$($context$$4$$) {
  $context$$4$$ != D.$JSCompiler_alias_NULL$$ && $context$$4$$.message && (this.$m_stateInfo$.innerHTML = $context$$4$$.message)
};
D.$DvtDataGrid$$.prototype.SetAccessibleContext = D.$DvtDataGrid$$.prototype.$SetAccessibleContext$;
D.$JSCompiler_StaticMethods__updateStateInfo$$ = function $$JSCompiler_StaticMethods__updateStateInfo$$$($JSCompiler_StaticMethods__updateStateInfo$self$$) {
  var $text$$10$$ = $JSCompiler_StaticMethods__updateStateInfo$self$$.$getResources$().getTranslatedText("accessibleStateSelected");
  $text$$10$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__updateStateInfo$self$$.$m_stateInfo$.innerHTML = $text$$10$$)
};
D.$JSCompiler_StaticMethods__isCountUnknown$$ = function $$JSCompiler_StaticMethods__isCountUnknown$$$($JSCompiler_StaticMethods__isCountUnknown$self$$, $axis$$5$$) {
  var $colCount_datasource_rowCount$$1$$, $colPrecision_rowPrecision$$;
  $colCount_datasource_rowCount$$1$$ = $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_dataSource$;
  return"row" === $axis$$5$$ ? ($JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateRowCount$ === D.$JSCompiler_alias_VOID$$ && ($colPrecision_rowPrecision$$ = $colCount_datasource_rowCount$$1$$.getCountPrecision("row"), $colCount_datasource_rowCount$$1$$ = $colCount_datasource_rowCount$$1$$.getCount("row"), $JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateRowCount$ = "estimate" === $colPrecision_rowPrecision$$ || 0 > $colCount_datasource_rowCount$$1$$ ? D.$JSCompiler_alias_TRUE$$ : 
  D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateRowCount$) : "column" === $axis$$5$$ ? ($JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateColumnCount$ === D.$JSCompiler_alias_VOID$$ && ($colPrecision_rowPrecision$$ = $colCount_datasource_rowCount$$1$$.getCountPrecision("column"), $colCount_datasource_rowCount$$1$$ = $colCount_datasource_rowCount$$1$$.getCount("column"), $JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateColumnCount$ = 
  "estimate" === $colPrecision_rowPrecision$$ || 0 > $colCount_datasource_rowCount$$1$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateColumnCount$) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$ = function $$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$$($JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$self$$, $axis$$6$$) {
  return(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$self$$, $axis$$6$$) || (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$self$$)
};
D.$JSCompiler_StaticMethods_buildHeaders$$ = function $$JSCompiler_StaticMethods_buildHeaders$$$($JSCompiler_StaticMethods_buildHeaders$self$$, $axis$$7$$, $styleClass$$) {
  var $root$$7$$ = window.document.createElement("div");
  $root$$7$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildHeaders$self$$, $axis$$7$$ + "Header");
  $root$$7$$.className = $styleClass$$ + " " + $JSCompiler_StaticMethods_buildHeaders$self$$.getMappedStyle("header");
  $JSCompiler_StaticMethods_buildHeaders$self$$.fetchHeaders($axis$$7$$, 0, $root$$7$$);
  return $root$$7$$
};
D.$DvtDataGrid$$.prototype.fetchHeaders = function $$DvtDataGrid$$$$fetchHeaders$($axis$$8_headerRange$$1$$, $start$$9$$, $header$$2$$, $fetchSize$$, $callbacks$$3_successCallback$$26$$) {
  var $axisStart_count$$6$$, $axisEnd$$;
  this.$m_fetching$[$axis$$8_headerRange$$1$$] || (this.$m_fetching$[$axis$$8_headerRange$$1$$] = {start:$start$$9$$}, $fetchSize$$ == D.$JSCompiler_alias_VOID$$ && ($fetchSize$$ = (0,D.$JSCompiler_StaticMethods_getFetchSize$$)(this, $axis$$8_headerRange$$1$$), (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, $axis$$8_headerRange$$1$$) || ($axisStart_count$$6$$ = "row" == $axis$$8_headerRange$$1$$ ? this.$m_startRow$ : this.$m_startCol$, $axisEnd$$ = "row" == $axis$$8_headerRange$$1$$ ? this.$m_endRow$ : 
  this.$m_endCol$, $start$$9$$ < $axisStart_count$$6$$ ? $fetchSize$$ = window.Math.min($fetchSize$$, $axisStart_count$$6$$) : ($axisStart_count$$6$$ = this.$m_dataSource$.getCount($axis$$8_headerRange$$1$$), 0 <= $axisStart_count$$6$$ && ($fetchSize$$ = window.Math.min($fetchSize$$, window.Math.max(0, $axisStart_count$$6$$ - $axisEnd$$)))))), $axis$$8_headerRange$$1$$ = {axis:$axis$$8_headerRange$$1$$, start:$start$$9$$, count:$fetchSize$$, header:$header$$2$$}, $callbacks$$3_successCallback$$26$$ = 
  $callbacks$$3_successCallback$$26$$ != D.$JSCompiler_alias_NULL$$ && $callbacks$$3_successCallback$$26$$.success != D.$JSCompiler_alias_NULL$$ ? $callbacks$$3_successCallback$$26$$.success : this.$handleHeadersFetchSuccess$, (0,D.$JSCompiler_StaticMethods_showStatusText$$)(this), this.$m_dataSource$.fetchHeaders($axis$$8_headerRange$$1$$, {success:$callbacks$$3_successCallback$$26$$, error:this.$handleHeadersFetchError$}, {success:this, error:this}))
};
D.$DvtDataGrid$$.prototype.$handleHeadersFetchSuccess$ = function $$DvtDataGrid$$$$$handleHeadersFetchSuccess$$($prev$$inline_712_results_rowHeader$$inline_8860$$, $adjustment$$inline_8861_headerRange$$3_start$$10$$, $rowInsert$$) {
  var $axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$, $avgWidth$$inline_680_root$$8$$, $count$$7_totalCount$$inline_690$$;
  if($adjustment$$inline_8861_headerRange$$3_start$$10$$.start == this.$m_fetching$[$adjustment$$inline_8861_headerRange$$3_start$$10$$.axis].start) {
    $axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$ = $adjustment$$inline_8861_headerRange$$3_start$$10$$.axis;
    this.$m_fetching$[$axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$] = D.$JSCompiler_alias_FALSE$$;
    $avgWidth$$inline_680_root$$8$$ = $adjustment$$inline_8861_headerRange$$3_start$$10$$.header;
    $adjustment$$inline_8861_headerRange$$3_start$$10$$ = $adjustment$$inline_8861_headerRange$$3_start$$10$$.start;
    $count$$7_totalCount$$inline_690$$ = this.$m_dataSource$.getCount($axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$);
    if("column" === $axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$) {
      a: {
        var $referenceRow$$inline_716_renderer$$inline_664$$, $totalColWidth$$inline_665_totalRowHeight$$inline_699$$, $currentLeft$$inline_666_headerCount$$inline_693$$, $headerCount$$inline_667_rowHeaderContent$$inline_715$$, $firstHeader$$inline_668_resizer$$inline_695$$, $headerClass$$inline_669_renderer$$inline_696$$, $dir$$inline_670_isAppend$$inline_697$$, $i$$inline_671_top$$inline_698$$, $col$$inline_710_index$$inline_672_width$$inline_679$$, $content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$, 
        $headerContext$$inline_675_headerContext$$inline_8854_headerMetadata$$inline_674_resizableAttribute$$inline_713_sortIcon$$inline_681$$, $capability$$inline_8850_headerData$$inline_703_iconClassString$$inline_8856_inlineStyle$$inline_676$$, $direction$$inline_8857_headerContext$$inline_705_headerMetadata$$inline_704_sortable$$inline_8851_styleClass$$inline_677$$, $col$$inline_678_fragment$$inline_700$$, $i$$inline_702_sortableAttribute$$inline_683$$, $resizableAttribute$$inline_684_row$$inline_706$$;
        $axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$ = (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)(this);
        $headerCount$$inline_667_rowHeaderContent$$inline_715$$ = $prev$$inline_712_results_rowHeader$$inline_8860$$.getCount();
        if($avgWidth$$inline_680_root$$8$$.hasChildNodes()) {
          if(0 == $headerCount$$inline_667_rowHeaderContent$$inline_715$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column")) {
            this.$m_stopColumnHeaderFetch$ = D.$JSCompiler_alias_TRUE$$;
            break a
          }
          $axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$ = $avgWidth$$inline_680_root$$8$$.firstChild
        }else {
          0 == $headerCount$$inline_667_rowHeaderContent$$inline_715$$ ? ((0,D.$JSCompiler_StaticMethods_setElementHeight$$)($avgWidth$$inline_680_root$$8$$, 0), this.$m_stopColumnHeaderFetch$ = D.$JSCompiler_alias_TRUE$$) : (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($avgWidth$$inline_680_root$$8$$, $axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$), $axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$ = window.document.createElement("div"), 
          $axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$.className = this.getMappedStyle("row") + " " + (this.$m_utils$.$isTouchDevice$() ? this.getMappedStyle("scroller-mobile") : this.getMappedStyle("scroller"))
        }
        $referenceRow$$inline_716_renderer$$inline_664$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "column");
        $totalColWidth$$inline_665_totalRowHeight$$inline_699$$ = 0;
        $currentLeft$$inline_666_headerCount$$inline_693$$ = $adjustment$$inline_8861_headerRange$$3_start$$10$$ < this.$m_startColHeader$ ? this.$m_startColHeaderPixel$ : this.$m_endColHeaderPixel$;
        $firstHeader$$inline_668_resizer$$inline_695$$ = $axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$.firstChild;
        $headerClass$$inline_669_renderer$$inline_696$$ = this.getMappedStyle("headercell") + " " + this.getMappedStyle("colheadercell");
        $dir$$inline_670_isAppend$$inline_697$$ = this.$getResources$().isRTLMode() ? "right" : "left";
        $i$$inline_702_sortableAttribute$$inline_683$$ = this.$getResources$().getMappedAttribute("sortable");
        $resizableAttribute$$inline_684_row$$inline_706$$ = this.$getResources$().getMappedAttribute("resizable");
        for($i$$inline_671_top$$inline_698$$ = 0;$i$$inline_671_top$$inline_698$$ < $headerCount$$inline_667_rowHeaderContent$$inline_715$$;$i$$inline_671_top$$inline_698$$ += 1) {
          $col$$inline_710_index$$inline_672_width$$inline_679$$ = $adjustment$$inline_8861_headerRange$$3_start$$10$$ < this.$m_startColHeader$ ? $adjustment$$inline_8861_headerRange$$3_start$$10$$ + $headerCount$$inline_667_rowHeaderContent$$inline_715$$ - 1 - $i$$inline_671_top$$inline_698$$ : $adjustment$$inline_8861_headerRange$$3_start$$10$$ + $i$$inline_671_top$$inline_698$$;
          $col$$inline_678_fragment$$inline_700$$ = window.document.createElement("div");
          $col$$inline_678_fragment$$inline_700$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "c" + $col$$inline_710_index$$inline_672_width$$inline_679$$);
          $axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$.appendChild($col$$inline_678_fragment$$inline_700$$);
          $content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$ = $prev$$inline_712_results_rowHeader$$inline_8860$$.getData($col$$inline_710_index$$inline_672_width$$inline_679$$);
          $headerContext$$inline_675_headerContext$$inline_8854_headerMetadata$$inline_674_resizableAttribute$$inline_713_sortIcon$$inline_681$$ = $prev$$inline_712_results_rowHeader$$inline_8860$$.getMetadata($col$$inline_710_index$$inline_672_width$$inline_679$$);
          $headerContext$$inline_675_headerContext$$inline_8854_headerMetadata$$inline_674_resizableAttribute$$inline_713_sortIcon$$inline_681$$ = (0,D.$JSCompiler_StaticMethods_createHeaderContext$$)(this, "column", $col$$inline_710_index$$inline_672_width$$inline_679$$, $content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$, $headerContext$$inline_675_headerContext$$inline_8854_headerMetadata$$inline_674_resizableAttribute$$inline_713_sortIcon$$inline_681$$, 
          $col$$inline_678_fragment$$inline_700$$);
          $capability$$inline_8850_headerData$$inline_703_iconClassString$$inline_8856_inlineStyle$$inline_676$$ = this.$m_options$.$getInlineStyle$("column", $headerContext$$inline_675_headerContext$$inline_8854_headerMetadata$$inline_674_resizableAttribute$$inline_713_sortIcon$$inline_681$$);
          $direction$$inline_8857_headerContext$$inline_705_headerMetadata$$inline_704_sortable$$inline_8851_styleClass$$inline_677$$ = this.$m_options$.$getStyleClass$("column", $headerContext$$inline_675_headerContext$$inline_8854_headerMetadata$$inline_674_resizableAttribute$$inline_713_sortIcon$$inline_681$$);
          $col$$inline_710_index$$inline_672_width$$inline_679$$ === $count$$7_totalCount$$inline_690$$ - 1 && ("left" === $dir$$inline_670_isAppend$$inline_697$$ ? $col$$inline_678_fragment$$inline_700$$.style.borderRightStyle = "none" : $col$$inline_678_fragment$$inline_700$$.style.borderLeftStyle = "none");
          $capability$$inline_8850_headerData$$inline_703_iconClassString$$inline_8856_inlineStyle$$inline_676$$ != D.$JSCompiler_alias_NULL$$ && ($col$$inline_678_fragment$$inline_700$$.style.cssText = $capability$$inline_8850_headerData$$inline_703_iconClassString$$inline_8856_inlineStyle$$inline_676$$);
          $col$$inline_678_fragment$$inline_700$$.className = $direction$$inline_8857_headerContext$$inline_705_headerMetadata$$inline_704_sortable$$inline_8851_styleClass$$inline_677$$ != D.$JSCompiler_alias_NULL$$ ? $headerClass$$inline_669_renderer$$inline_696$$ + " " + $direction$$inline_8857_headerContext$$inline_705_headerMetadata$$inline_704_sortable$$inline_8851_styleClass$$inline_677$$ : $headerClass$$inline_669_renderer$$inline_696$$;
          this.$m_colHeaderHeight$ == D.$JSCompiler_alias_NULL$$ && "" != $col$$inline_678_fragment$$inline_700$$.style.height && (this.$m_colHeaderHeight$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($col$$inline_678_fragment$$inline_700$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($avgWidth$$inline_680_root$$8$$, this.$m_colHeaderHeight$));
          $col$$inline_678_fragment$$inline_700$$.style.height = "100%";
          $adjustment$$inline_8861_headerRange$$3_start$$10$$ < this.$m_startColHeader$ ? ($col$$inline_710_index$$inline_672_width$$inline_679$$ = (0,D.$JSCompiler_StaticMethods_getColumnWidth$$)(this, $col$$inline_678_fragment$$inline_700$$, $adjustment$$inline_8861_headerRange$$3_start$$10$$ + $headerCount$$inline_667_rowHeaderContent$$inline_715$$ - 1 - $i$$inline_671_top$$inline_698$$, $headerContext$$inline_675_headerContext$$inline_8854_headerMetadata$$inline_674_resizableAttribute$$inline_713_sortIcon$$inline_681$$.key), 
          this.$m_cachedColumnWidthStartIndex$ -= 1) : $col$$inline_710_index$$inline_672_width$$inline_679$$ = (0,D.$JSCompiler_StaticMethods_getColumnWidth$$)(this, $col$$inline_678_fragment$$inline_700$$, $adjustment$$inline_8861_headerRange$$3_start$$10$$ + $i$$inline_671_top$$inline_698$$, $headerContext$$inline_675_headerContext$$inline_8854_headerMetadata$$inline_674_resizableAttribute$$inline_713_sortIcon$$inline_681$$.key);
          (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($col$$inline_678_fragment$$inline_700$$, $col$$inline_710_index$$inline_672_width$$inline_679$$);
          $adjustment$$inline_8861_headerRange$$3_start$$10$$ < this.$m_startColHeader$ ? (0,D.$JSCompiler_StaticMethods_setElementDir$$)($col$$inline_678_fragment$$inline_700$$, $currentLeft$$inline_666_headerCount$$inline_693$$ - $col$$inline_710_index$$inline_672_width$$inline_679$$, $dir$$inline_670_isAppend$$inline_697$$) : (0,D.$JSCompiler_StaticMethods_setElementDir$$)($col$$inline_678_fragment$$inline_700$$, $currentLeft$$inline_666_headerCount$$inline_693$$, $dir$$inline_670_isAppend$$inline_697$$);
          (0,D.$JSCompiler_StaticMethods__isHeaderResizeEnabled$$)(this, "column", $headerContext$$inline_675_headerContext$$inline_8854_headerMetadata$$inline_674_resizableAttribute$$inline_713_sortIcon$$inline_681$$) && $col$$inline_678_fragment$$inline_700$$.setAttribute($resizableAttribute$$inline_684_row$$inline_706$$, "true");
          $referenceRow$$inline_716_renderer$$inline_664$$ != D.$JSCompiler_alias_NULL$$ ? ($content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$ = $referenceRow$$inline_716_renderer$$inline_664$$.call(this, $headerContext$$inline_675_headerContext$$inline_8854_headerMetadata$$inline_674_resizableAttribute$$inline_713_sortIcon$$inline_681$$), $content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$ != 
          D.$JSCompiler_alias_NULL$$ && ($content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$.parentNode === D.$JSCompiler_alias_NULL$$ ? $col$$inline_678_fragment$$inline_700$$.appendChild($content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$) : $content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$.parentNode == 
          D.$JSCompiler_alias_NULL$$ && $content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$.toString && $col$$inline_678_fragment$$inline_700$$.appendChild(window.document.createTextNode($content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$.toString())))) : $col$$inline_678_fragment$$inline_700$$.appendChild(window.document.createTextNode($content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$.toString()));
          $content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$ = $headerContext$$inline_675_headerContext$$inline_8854_headerMetadata$$inline_674_resizableAttribute$$inline_713_sortIcon$$inline_681$$;
          $direction$$inline_8857_headerContext$$inline_705_headerMetadata$$inline_704_sortable$$inline_8851_styleClass$$inline_677$$ = $capability$$inline_8850_headerData$$inline_703_iconClassString$$inline_8856_inlineStyle$$inline_676$$ = D.$JSCompiler_alias_VOID$$;
          $capability$$inline_8850_headerData$$inline_703_iconClassString$$inline_8856_inlineStyle$$inline_676$$ = this.$m_dataSource$.getCapability("sort");
          $direction$$inline_8857_headerContext$$inline_705_headerMetadata$$inline_704_sortable$$inline_8851_styleClass$$inline_677$$ = (0,D.$JSCompiler_StaticMethods_nullOrDefault$$)(this.$m_options$.$getProperty$("sortable", "column", $content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$));
          if(("enable" === $direction$$inline_8857_headerContext$$inline_705_headerMetadata$$inline_704_sortable$$inline_8851_styleClass$$inline_677$$ || "auto" === $direction$$inline_8857_headerContext$$inline_705_headerMetadata$$inline_704_sortable$$inline_8851_styleClass$$inline_677$$) && ("full" === $capability$$inline_8850_headerData$$inline_703_iconClassString$$inline_8856_inlineStyle$$inline_676$$ || "column" === $capability$$inline_8850_headerData$$inline_703_iconClassString$$inline_8856_inlineStyle$$inline_676$$)) {
            var $height$$inline_709_inlineStyle$$inline_708_sortContainer$$inline_8858$$ = $direction$$inline_8857_headerContext$$inline_705_headerMetadata$$inline_704_sortable$$inline_8851_styleClass$$inline_677$$ = $capability$$inline_8850_headerData$$inline_703_iconClassString$$inline_8856_inlineStyle$$inline_676$$ = $content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$ = D.$JSCompiler_alias_VOID$$, $height$$inline_709_inlineStyle$$inline_708_sortContainer$$inline_8858$$ = 
            window.document.createElement("div");
            $height$$inline_709_inlineStyle$$inline_708_sortContainer$$inline_8858$$.className = this.getMappedStyle("sortcontainer");
            $content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$ = window.document.createElement("div");
            $capability$$inline_8850_headerData$$inline_703_iconClassString$$inline_8856_inlineStyle$$inline_676$$ = this.getMappedStyle("icon") + " " + this.getMappedStyle("clickableicon");
            $headerContext$$inline_675_headerContext$$inline_8854_headerMetadata$$inline_674_resizableAttribute$$inline_713_sortIcon$$inline_681$$.key === (this.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ ? this.$m_sortInfo$.key : D.$JSCompiler_alias_NULL$$) ? ($direction$$inline_8857_headerContext$$inline_705_headerMetadata$$inline_704_sortable$$inline_8851_styleClass$$inline_677$$ = this.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ ? this.$m_sortInfo$.direction : D.$JSCompiler_alias_NULL$$, "ascending" === 
            $direction$$inline_8857_headerContext$$inline_705_headerMetadata$$inline_704_sortable$$inline_8851_styleClass$$inline_677$$ ? $content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$.className = this.getMappedStyle("sortascending") + " " + $capability$$inline_8850_headerData$$inline_703_iconClassString$$inline_8856_inlineStyle$$inline_676$$ + " " + this.getMappedStyle("default") : "descending" === $direction$$inline_8857_headerContext$$inline_705_headerMetadata$$inline_704_sortable$$inline_8851_styleClass$$inline_677$$ && 
            ($content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$.className = this.getMappedStyle("sortdescending") + " " + $capability$$inline_8850_headerData$$inline_703_iconClassString$$inline_8856_inlineStyle$$inline_676$$ + " " + this.getMappedStyle("default"))) : ($capability$$inline_8850_headerData$$inline_703_iconClassString$$inline_8856_inlineStyle$$inline_676$$ += " " + this.getMappedStyle("disabled"), $content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$.className = 
            this.getMappedStyle("sortascending") + " " + $capability$$inline_8850_headerData$$inline_703_iconClassString$$inline_8856_inlineStyle$$inline_676$$);
            $height$$inline_709_inlineStyle$$inline_708_sortContainer$$inline_8858$$.appendChild($content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$);
            $headerContext$$inline_675_headerContext$$inline_8854_headerMetadata$$inline_674_resizableAttribute$$inline_713_sortIcon$$inline_681$$ = $height$$inline_709_inlineStyle$$inline_708_sortContainer$$inline_8858$$;
            $col$$inline_678_fragment$$inline_700$$.appendChild($headerContext$$inline_675_headerContext$$inline_8854_headerMetadata$$inline_674_resizableAttribute$$inline_713_sortIcon$$inline_681$$);
            $col$$inline_678_fragment$$inline_700$$.setAttribute($i$$inline_702_sortableAttribute$$inline_683$$, "true")
          }
          $currentLeft$$inline_666_headerCount$$inline_693$$ = $adjustment$$inline_8861_headerRange$$3_start$$10$$ < this.$m_startColHeader$ ? $currentLeft$$inline_666_headerCount$$inline_693$$ - $col$$inline_710_index$$inline_672_width$$inline_679$$ : $currentLeft$$inline_666_headerCount$$inline_693$$ + $col$$inline_710_index$$inline_672_width$$inline_679$$;
          $totalColWidth$$inline_665_totalRowHeight$$inline_699$$ += $col$$inline_710_index$$inline_672_width$$inline_679$$;
          $adjustment$$inline_8861_headerRange$$3_start$$10$$ < this.$m_startColHeader$ ? ($axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$.insertBefore($col$$inline_678_fragment$$inline_700$$, $firstHeader$$inline_668_resizer$$inline_695$$), $firstHeader$$inline_668_resizer$$inline_695$$ = $col$$inline_678_fragment$$inline_700$$) : $axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$.appendChild($col$$inline_678_fragment$$inline_700$$)
        }
        $adjustment$$inline_8861_headerRange$$3_start$$10$$ < this.$m_startColHeader$ ? (this.$m_startColHeader$ -= $headerCount$$inline_667_rowHeaderContent$$inline_715$$, this.$m_startColHeaderPixel$ -= $totalColWidth$$inline_665_totalRowHeight$$inline_699$$) : (this.$m_endColHeader$ += $headerCount$$inline_667_rowHeaderContent$$inline_715$$, this.$m_endColHeaderPixel$ += $totalColWidth$$inline_665_totalRowHeight$$inline_699$$);
        $avgWidth$$inline_680_root$$8$$.hasChildNodes() || $avgWidth$$inline_680_root$$8$$.appendChild($axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$);
        if(0 < $headerCount$$inline_667_rowHeaderContent$$inline_715$$ && ($avgWidth$$inline_680_root$$8$$ = $totalColWidth$$inline_665_totalRowHeight$$inline_699$$ / $headerCount$$inline_667_rowHeaderContent$$inline_715$$, 0 == this.$m_avgColHeaderWidth$ || $avgWidth$$inline_680_root$$8$$ != this.$m_avgColHeaderWidth$)) {
          this.$m_avgColHeaderWidth$ = $avgWidth$$inline_680_root$$8$$, (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$, $count$$7_totalCount$$inline_690$$ * $avgWidth$$inline_680_root$$8$$)
        }
        !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && ((0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) && this.$m_endColHeader$ >= $count$$7_totalCount$$inline_690$$) && (this.$m_stopColumnHeaderFetch$ = D.$JSCompiler_alias_TRUE$$)
      }
    }else {
      if("row" === $axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$) {
        a: {
          var $headerClass$$inline_707$$, $styleClass$$inline_711$$;
          (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)(this);
          $currentLeft$$inline_666_headerCount$$inline_693$$ = $prev$$inline_712_results_rowHeader$$inline_8860$$.getCount();
          if($avgWidth$$inline_680_root$$8$$.hasChildNodes()) {
            if(0 == $currentLeft$$inline_666_headerCount$$inline_693$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row")) {
              this.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_TRUE$$;
              break a
            }
            $axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$ = $avgWidth$$inline_680_root$$8$$.firstChild;
            $firstHeader$$inline_668_resizer$$inline_695$$ = $axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$.firstChild
          }else {
            $axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$ = window.document.createElement("div"), $axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$.className = this.$m_utils$.$isTouchDevice$() ? this.getMappedStyle("scroller-mobile") : this.getMappedStyle("scroller"), 0 == $currentLeft$$inline_666_headerCount$$inline_693$$ ? ((0,D.$JSCompiler_StaticMethods_setElementWidth$$)($avgWidth$$inline_680_root$$8$$, 0), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$, 
            0), this.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_TRUE$$) : (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($avgWidth$$inline_680_root$$8$$, 50), $firstHeader$$inline_668_resizer$$inline_695$$ = window.document.createElement("div"), $firstHeader$$inline_668_resizer$$inline_695$$.style.display = "none", (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($firstHeader$$inline_668_resizer$$inline_695$$, 1), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($firstHeader$$inline_668_resizer$$inline_695$$, 
            0), $axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$.appendChild($firstHeader$$inline_668_resizer$$inline_695$$)
          }
          $headerClass$$inline_669_renderer$$inline_696$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "row");
          ($dir$$inline_670_isAppend$$inline_697$$ = $adjustment$$inline_8861_headerRange$$3_start$$10$$ >= this.$m_endRowHeader$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$) ? $i$$inline_671_top$$inline_698$$ = this.$m_endRowHeaderPixel$ : $rowInsert$$ ? ($headerCount$$inline_667_rowHeaderContent$$inline_715$$ = $avgWidth$$inline_680_root$$8$$.firstChild, $referenceRow$$inline_716_renderer$$inline_664$$ = $headerCount$$inline_667_rowHeaderContent$$inline_715$$.childNodes[$adjustment$$inline_8861_headerRange$$3_start$$10$$ - 
          this.$m_startRowHeader$ + 1], $i$$inline_671_top$$inline_698$$ = (0,window.parseInt)($referenceRow$$inline_716_renderer$$inline_664$$.style.top)) : $i$$inline_671_top$$inline_698$$ = this.$m_startRowHeaderPixel$;
          -1 == $count$$7_totalCount$$inline_690$$ && ($count$$7_totalCount$$inline_690$$ = this.$m_endRowHeader$ + $currentLeft$$inline_666_headerCount$$inline_693$$);
          $headerContext$$inline_675_headerContext$$inline_8854_headerMetadata$$inline_674_resizableAttribute$$inline_713_sortIcon$$inline_681$$ = this.$getResources$().getMappedAttribute("resizable");
          $totalColWidth$$inline_665_totalRowHeight$$inline_699$$ = 0;
          $col$$inline_678_fragment$$inline_700$$ = window.document.createDocumentFragment();
          for($i$$inline_702_sortableAttribute$$inline_683$$ = 0;$i$$inline_702_sortableAttribute$$inline_683$$ < $currentLeft$$inline_666_headerCount$$inline_693$$;$i$$inline_702_sortableAttribute$$inline_683$$ += 1) {
            $content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$ = $dir$$inline_670_isAppend$$inline_697$$ ? $adjustment$$inline_8861_headerRange$$3_start$$10$$ + $i$$inline_702_sortableAttribute$$inline_683$$ : $adjustment$$inline_8861_headerRange$$3_start$$10$$ + ($currentLeft$$inline_666_headerCount$$inline_693$$ - 1 - $i$$inline_702_sortableAttribute$$inline_683$$), $resizableAttribute$$inline_684_row$$inline_706$$ = 
            window.document.createElement("div"), $resizableAttribute$$inline_684_row$$inline_706$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "r" + $content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$), $col$$inline_710_index$$inline_672_width$$inline_679$$ = window.document.createElement("div"), $resizableAttribute$$inline_684_row$$inline_706$$.appendChild($col$$inline_710_index$$inline_672_width$$inline_679$$), 
            $capability$$inline_8850_headerData$$inline_703_iconClassString$$inline_8856_inlineStyle$$inline_676$$ = $prev$$inline_712_results_rowHeader$$inline_8860$$.getData($content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$), $direction$$inline_8857_headerContext$$inline_705_headerMetadata$$inline_704_sortable$$inline_8851_styleClass$$inline_677$$ = $prev$$inline_712_results_rowHeader$$inline_8860$$.getMetadata($content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$), 
            $direction$$inline_8857_headerContext$$inline_705_headerMetadata$$inline_704_sortable$$inline_8851_styleClass$$inline_677$$ = (0,D.$JSCompiler_StaticMethods_createHeaderContext$$)(this, "row", $content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$, $capability$$inline_8850_headerData$$inline_703_iconClassString$$inline_8856_inlineStyle$$inline_676$$, $direction$$inline_8857_headerContext$$inline_705_headerMetadata$$inline_704_sortable$$inline_8851_styleClass$$inline_677$$, 
            $col$$inline_710_index$$inline_672_width$$inline_679$$), $height$$inline_709_inlineStyle$$inline_708_sortContainer$$inline_8858$$ = this.$m_options$.$getInlineStyle$("row", $direction$$inline_8857_headerContext$$inline_705_headerMetadata$$inline_704_sortable$$inline_8851_styleClass$$inline_677$$), $styleClass$$inline_711$$ = this.$m_options$.$getStyleClass$("row", $direction$$inline_8857_headerContext$$inline_705_headerMetadata$$inline_704_sortable$$inline_8851_styleClass$$inline_677$$), 
            $height$$inline_709_inlineStyle$$inline_708_sortContainer$$inline_8858$$ != D.$JSCompiler_alias_NULL$$ && ($resizableAttribute$$inline_684_row$$inline_706$$.style.cssText = $height$$inline_709_inlineStyle$$inline_708_sortContainer$$inline_8858$$), this.$m_rowHeaderWidth$ == D.$JSCompiler_alias_NULL$$ && "" != $resizableAttribute$$inline_684_row$$inline_706$$.style.width && (this.$m_rowHeaderWidth$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($resizableAttribute$$inline_684_row$$inline_706$$), 
            (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($avgWidth$$inline_680_root$$8$$, this.$m_rowHeaderWidth$)), $resizableAttribute$$inline_684_row$$inline_706$$.className = this.getMappedStyle("row"), $height$$inline_709_inlineStyle$$inline_708_sortContainer$$inline_8858$$ = (0,D.$JSCompiler_StaticMethods_getRowHeight$$)(this, $resizableAttribute$$inline_684_row$$inline_706$$, $adjustment$$inline_8861_headerRange$$3_start$$10$$ + $i$$inline_702_sortableAttribute$$inline_683$$, $direction$$inline_8857_headerContext$$inline_705_headerMetadata$$inline_704_sortable$$inline_8851_styleClass$$inline_677$$.key), 
            (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($resizableAttribute$$inline_684_row$$inline_706$$, $height$$inline_709_inlineStyle$$inline_708_sortContainer$$inline_8858$$), $dir$$inline_670_isAppend$$inline_697$$ || $rowInsert$$ ? ($resizableAttribute$$inline_684_row$$inline_706$$.style.top = $i$$inline_671_top$$inline_698$$ + "px", $i$$inline_671_top$$inline_698$$ += $height$$inline_709_inlineStyle$$inline_708_sortContainer$$inline_8858$$) : ($i$$inline_671_top$$inline_698$$ -= $height$$inline_709_inlineStyle$$inline_708_sortContainer$$inline_8858$$, 
            $resizableAttribute$$inline_684_row$$inline_706$$.style.top = $i$$inline_671_top$$inline_698$$ + "px"), $headerClass$$inline_707$$ = this.getMappedStyle("headercell") + " " + this.getMappedStyle("rowheadercell"), $col$$inline_710_index$$inline_672_width$$inline_679$$.className = $styleClass$$inline_711$$ != D.$JSCompiler_alias_NULL$$ ? $headerClass$$inline_707$$ + " " + $styleClass$$inline_711$$ : $headerClass$$inline_707$$, $content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$ === 
            $count$$7_totalCount$$inline_690$$ - 1 && ($col$$inline_710_index$$inline_672_width$$inline_679$$.style.borderBottomStyle = "none"), (0,D.$JSCompiler_StaticMethods__isHeaderResizeEnabled$$)(this, "row", $direction$$inline_8857_headerContext$$inline_705_headerMetadata$$inline_704_sortable$$inline_8851_styleClass$$inline_677$$) && $col$$inline_710_index$$inline_672_width$$inline_679$$.setAttribute($headerContext$$inline_675_headerContext$$inline_8854_headerMetadata$$inline_674_resizableAttribute$$inline_713_sortIcon$$inline_681$$, 
            "true"), $headerClass$$inline_669_renderer$$inline_696$$ != D.$JSCompiler_alias_NULL$$ ? ($content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$ = $headerClass$$inline_669_renderer$$inline_696$$.call(this, $direction$$inline_8857_headerContext$$inline_705_headerMetadata$$inline_704_sortable$$inline_8851_styleClass$$inline_677$$), $content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$ != 
            D.$JSCompiler_alias_NULL$$ && ($content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$.parentNode === D.$JSCompiler_alias_NULL$$ ? $col$$inline_710_index$$inline_672_width$$inline_679$$.appendChild($content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$) : $content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$.parentNode == 
            D.$JSCompiler_alias_NULL$$ && $content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$.toString && $col$$inline_710_index$$inline_672_width$$inline_679$$.appendChild(window.document.createTextNode($content$$inline_682_content$$inline_714_headerContext$$inline_8849_headerData$$inline_673_index$$inline_701_sortIcon$$inline_8855$$.toString())))) : $col$$inline_710_index$$inline_672_width$$inline_679$$.appendChild(window.document.createTextNode($capability$$inline_8850_headerData$$inline_703_iconClassString$$inline_8856_inlineStyle$$inline_676$$.toString())), 
            $dir$$inline_670_isAppend$$inline_697$$ ? $col$$inline_678_fragment$$inline_700$$.appendChild($resizableAttribute$$inline_684_row$$inline_706$$) : $col$$inline_678_fragment$$inline_700$$.insertBefore($resizableAttribute$$inline_684_row$$inline_706$$, $col$$inline_678_fragment$$inline_700$$.firstChild), $totalColWidth$$inline_665_totalRowHeight$$inline_699$$ += $height$$inline_709_inlineStyle$$inline_708_sortContainer$$inline_8858$$
          }
          if($dir$$inline_670_isAppend$$inline_697$$) {
            $axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$.appendChild($col$$inline_678_fragment$$inline_700$$), 0 != this.$m_endRowHeader$ && 0 != $currentLeft$$inline_666_headerCount$$inline_693$$ && ($prev$$inline_712_results_rowHeader$$inline_8860$$ = $axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$.childNodes[this.$m_endRowHeader$], $prev$$inline_712_results_rowHeader$$inline_8860$$ != D.$JSCompiler_alias_NULL$$ && ($prev$$inline_712_results_rowHeader$$inline_8860$$.firstChild.style.borderBottomStyle = 
            "")), this.$m_endRowHeader$ += $currentLeft$$inline_666_headerCount$$inline_693$$, this.$m_endRowHeaderPixel$ += $totalColWidth$$inline_665_totalRowHeight$$inline_699$$
          }else {
            if($rowInsert$$) {
              $headerCount$$inline_667_rowHeaderContent$$inline_715$$.insertBefore($col$$inline_678_fragment$$inline_700$$, $referenceRow$$inline_716_renderer$$inline_664$$);
              $adjustment$$inline_8861_headerRange$$3_start$$10$$ <= this.$m_startRow$ && (this.$m_startRowHeader$ = $adjustment$$inline_8861_headerRange$$3_start$$10$$, this.$m_startRowHeaderPixel$ = window.Math.max(0, this.$m_startRowHeaderPixel$ - $totalColWidth$$inline_665_totalRowHeight$$inline_699$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($firstHeader$$inline_668_resizer$$inline_695$$, window.Math.max(0, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($firstHeader$$inline_668_resizer$$inline_695$$) - 
              $totalColWidth$$inline_665_totalRowHeight$$inline_699$$)));
              this.$m_endRowHeader$ = this.$m_endRow$ + $currentLeft$$inline_666_headerCount$$inline_693$$;
              this.$m_endRowHeaderPixel$ = window.Math.max(0, this.$m_endRowHeaderPixel$ + $totalColWidth$$inline_665_totalRowHeight$$inline_699$$);
              $prev$$inline_712_results_rowHeader$$inline_8860$$ = $referenceRow$$inline_716_renderer$$inline_664$$;
              for($adjustment$$inline_8861_headerRange$$3_start$$10$$ = $totalColWidth$$inline_665_totalRowHeight$$inline_699$$;$prev$$inline_712_results_rowHeader$$inline_8860$$;) {
                $prev$$inline_712_results_rowHeader$$inline_8860$$.style.top = (0,window.parseInt)($prev$$inline_712_results_rowHeader$$inline_8860$$.style.top) + $adjustment$$inline_8861_headerRange$$3_start$$10$$ + "px", $prev$$inline_712_results_rowHeader$$inline_8860$$ = $prev$$inline_712_results_rowHeader$$inline_8860$$.nextSibling
              }
            }else {
              (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($firstHeader$$inline_668_resizer$$inline_695$$, window.Math.max(0, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($firstHeader$$inline_668_resizer$$inline_695$$) - $totalColWidth$$inline_665_totalRowHeight$$inline_699$$)), $axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$.insertBefore($col$$inline_678_fragment$$inline_700$$, $firstHeader$$inline_668_resizer$$inline_695$$.nextSibling), this.$m_startRowHeader$ -= 
              $currentLeft$$inline_666_headerCount$$inline_693$$, this.$m_startRowHeaderPixel$ = window.Math.max(0, this.$m_startRowHeaderPixel$ - $totalColWidth$$inline_665_totalRowHeight$$inline_699$$)
            }
          }
          $rowInsert$$ || $avgWidth$$inline_680_root$$8$$.appendChild($axis$$10_defaultHeight$$inline_662_scroller$$inline_663_scroller$$inline_694$$);
          !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && ((0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) && this.$m_endRowHeader$ >= $count$$7_totalCount$$inline_690$$) && (this.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_TRUE$$)
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
D.$JSCompiler_StaticMethods_createHeaderContext$$ = function $$JSCompiler_StaticMethods_createHeaderContext$$$($JSCompiler_StaticMethods_createHeaderContext$self$$, $axis$$12$$, $index$$49_key$$31$$, $data$$21$$, $metadata$$, $elem$$4$$) {
  var $headerContext$$ = {};
  $headerContext$$.axis = $axis$$12$$;
  $headerContext$$.index = $index$$49_key$$31$$;
  $headerContext$$.data = $data$$21$$;
  $headerContext$$.datagrid = $JSCompiler_StaticMethods_createHeaderContext$self$$;
  $headerContext$$.parentElement = $elem$$4$$;
  $index$$49_key$$31$$ = $metadata$$.key;
  $index$$49_key$$31$$ != D.$JSCompiler_alias_NULL$$ && ("row" === $axis$$12$$ ? $elem$$4$$.parentNode.setAttribute($JSCompiler_StaticMethods_createHeaderContext$self$$.$getResources$().getMappedAttribute("key"), $index$$49_key$$31$$) : $elem$$4$$.setAttribute($JSCompiler_StaticMethods_createHeaderContext$self$$.$getResources$().getMappedAttribute("key"), $index$$49_key$$31$$));
  for(var $prop$$4$$ in $metadata$$) {
    $metadata$$.hasOwnProperty($prop$$4$$) && ($headerContext$$[$prop$$4$$] = $metadata$$[$prop$$4$$])
  }
  $JSCompiler_StaticMethods_createHeaderContext$self$$.$m_createContextCallback$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_createHeaderContext$self$$.$m_createContextCallback$.call($JSCompiler_StaticMethods_createHeaderContext$self$$, $headerContext$$);
  return $headerContext$$
};
D.$DvtDataGrid$$.prototype.fetchCells = function $$DvtDataGrid$$$$fetchCells$($columnRange_databody$$4$$, $scroller$$7$$, $rowRange_rowStart$$, $colStart$$, $rowCount$$2$$, $colCount$$1$$, $callbacks$$4_successCallback$$27$$) {
  var $count$$8$$;
  this.$m_fetching$.cells || (this.$m_fetching$.cells = {row:$rowRange_rowStart$$, column:$colStart$$}, $rowCount$$2$$ == D.$JSCompiler_alias_NULL$$ && ($rowCount$$2$$ = (0,D.$JSCompiler_StaticMethods_getFetchSize$$)(this, "row"), (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") || ($rowRange_rowStart$$ < this.$m_startRow$ ? $rowCount$$2$$ = window.Math.min($rowCount$$2$$, this.$m_startRow$) : ($count$$8$$ = this.$m_dataSource$.getCount("row"), 0 <= $count$$8$$ && ($rowCount$$2$$ = 
  window.Math.min($rowCount$$2$$, window.Math.max(0, $count$$8$$ - this.$m_endRow$)))))), $colCount$$1$$ == D.$JSCompiler_alias_NULL$$ && ($colCount$$1$$ = (0,D.$JSCompiler_StaticMethods_getFetchSize$$)(this, "column"), (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") || ($colStart$$ < this.$m_startCol$ ? $colCount$$1$$ = window.Math.min($colCount$$1$$, this.$m_startCol$) : ($count$$8$$ = this.$m_dataSource$.getCount("column"), 0 <= $count$$8$$ && ($colCount$$1$$ = window.Math.min($colCount$$1$$, 
  window.Math.max(0, $count$$8$$ - this.$m_endCol$)))))), $rowRange_rowStart$$ = {axis:"row", start:$rowRange_rowStart$$, count:$rowCount$$2$$}, $columnRange_databody$$4$$ = {axis:"column", start:$colStart$$, count:$colCount$$1$$, databody:$columnRange_databody$$4$$, scroller:$scroller$$7$$}, $callbacks$$4_successCallback$$27$$ = $callbacks$$4_successCallback$$27$$ != D.$JSCompiler_alias_NULL$$ && $callbacks$$4_successCallback$$27$$.success != D.$JSCompiler_alias_NULL$$ ? $callbacks$$4_successCallback$$27$$.success : 
  this.$handleCellsFetchSuccess$, (0,D.$JSCompiler_StaticMethods_showStatusText$$)(this), this.$m_dataSource$.fetchCells([$rowRange_rowStart$$, $columnRange_databody$$4$$], {success:$callbacks$$4_successCallback$$27$$, error:this.$handleHeadersFetchError$}, {success:this, error:this}))
};
D.$DvtDataGrid$$.prototype.$isDraggable$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$DvtDataGrid$$.prototype.$handleCellsFetchSuccess$ = function $$DvtDataGrid$$$$$handleCellsFetchSuccess$$($cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$, $cellRange$$3_databody$$5$$, $JSCompiler_inline_result$$46_rowInsert$$2_scrollerHeight$$inline_759_summary$$inline_766$$) {
  var $scrollerWidth$$inline_760_summaryExpanded$$inline_767_totalRowCount$$, $scrollerContentHeight$$inline_762_totalColumnCount$$, $columnStart$$1_requestRowStart$$inline_723_rowRange$$3_rowStart$$inline_729_rowStartPixel$$inline_733$$, $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_720_rowCount$$inline_741_rowStart$$2$$, $columnCount$$inline_742_responseColumnStart$$inline_721_rowCount$$4$$, $fragment$$1_horizontalGridlines$$inline_752_rowRangeNeedsUpdate_viewportLeft$$inline_739$$, 
  $columnEndPixel$$inline_736_columnRange$$3_columnStart$$inline_731_inner$$, $columnCount$$1_requestCellRanges$$inline_722_requestColumnStart$$inline_724_rowEnd$$inline_730_rowEndPixel$$inline_734$$, $columnRangeNeedsUpdate_columnStartPixel$$inline_735$$, $addResult_avgHeight_scrollerContent$$inline_761_scrollerContentWidth$$inline_763_top$$3$$, $prev$$1_referenceRow$$1_rows$$1$$, $databodyContent$$1_scroller$$8_viewportTop$$inline_737$$, $columnBandingInterval$$inline_751_resizer$$1_viewportBottom$$inline_738$$, 
  $avgWidth$$inline_755_i$$15_isAppend$$1_row$$inline_754$$, $avgWidth$$1_renderer$$inline_750$$;
  $scrollerWidth$$inline_760_summaryExpanded$$inline_767_totalRowCount$$ = this.$m_dataSource$.getCount("row");
  $scrollerContentHeight$$inline_762_totalColumnCount$$ = this.$m_dataSource$.getCount("column");
  if($JSCompiler_inline_result$$46_rowInsert$$2_scrollerHeight$$inline_759_summary$$inline_766$$ === D.$JSCompiler_alias_VOID$$) {
    $JSCompiler_inline_result$$46_rowInsert$$2_scrollerHeight$$inline_759_summary$$inline_766$$ = D.$JSCompiler_alias_FALSE$$;
    $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_720_rowCount$$inline_741_rowStart$$2$$ = $cellRange$$3_databody$$5$$[0].start;
    $columnCount$$inline_742_responseColumnStart$$inline_721_rowCount$$4$$ = $cellRange$$3_databody$$5$$[1].start;
    $columnCount$$1_requestCellRanges$$inline_722_requestColumnStart$$inline_724_rowEnd$$inline_730_rowEndPixel$$inline_734$$ = this.$m_fetching$.cells;
    $columnStart$$1_requestRowStart$$inline_723_rowRange$$3_rowStart$$inline_729_rowStartPixel$$inline_733$$ = $columnCount$$1_requestCellRanges$$inline_722_requestColumnStart$$inline_724_rowEnd$$inline_730_rowEndPixel$$inline_734$$.row;
    $columnCount$$1_requestCellRanges$$inline_722_requestColumnStart$$inline_724_rowEnd$$inline_730_rowEndPixel$$inline_734$$ = $columnCount$$1_requestCellRanges$$inline_722_requestColumnStart$$inline_724_rowEnd$$inline_730_rowEndPixel$$inline_734$$.column;
    if(!($columnStart$$1_requestRowStart$$inline_723_rowRange$$3_rowStart$$inline_729_rowStartPixel$$inline_733$$ == $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_720_rowCount$$inline_741_rowStart$$2$$ && $columnCount$$1_requestCellRanges$$inline_722_requestColumnStart$$inline_724_rowEnd$$inline_730_rowEndPixel$$inline_734$$ == $columnCount$$inline_742_responseColumnStart$$inline_721_rowCount$$4$$)) {
      return
    }
    if($JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_720_rowCount$$inline_741_rowStart$$2$$ = this.$m_startRowPixel$ == this.$m_endRowPixel$ && this.$m_startColPixel$ == this.$m_endColPixel$) {
      var $verticalGridlines$$inline_753_viewportRight$$inline_740$$;
      (0,window.isNaN)(this.$m_avgRowHeight$) || (0,window.isNaN)(this.$m_avgColWidth$) ? $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_720_rowCount$$inline_741_rowStart$$2$$ = D.$JSCompiler_alias_TRUE$$ : ($columnStart$$1_requestRowStart$$inline_723_rowRange$$3_rowStart$$inline_729_rowStartPixel$$inline_733$$ = $cellRange$$3_databody$$5$$[0].start, $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_720_rowCount$$inline_741_rowStart$$2$$ = 
      $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$.getCount("row"), $columnCount$$1_requestCellRanges$$inline_722_requestColumnStart$$inline_724_rowEnd$$inline_730_rowEndPixel$$inline_734$$ = $columnStart$$1_requestRowStart$$inline_723_rowRange$$3_rowStart$$inline_729_rowStartPixel$$inline_733$$ + $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_720_rowCount$$inline_741_rowStart$$2$$, $columnEndPixel$$inline_736_columnRange$$3_columnStart$$inline_731_inner$$ = 
      $cellRange$$3_databody$$5$$[1].start, $columnCount$$inline_742_responseColumnStart$$inline_721_rowCount$$4$$ = $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$.getCount("column"), $columnStart$$1_requestRowStart$$inline_723_rowRange$$3_rowStart$$inline_729_rowStartPixel$$inline_733$$ *= this.$m_avgRowHeight$, $columnCount$$1_requestCellRanges$$inline_722_requestColumnStart$$inline_724_rowEnd$$inline_730_rowEndPixel$$inline_734$$ *= this.$m_avgRowHeight$, $columnRangeNeedsUpdate_columnStartPixel$$inline_735$$ = 
      this.$m_avgColWidth$ * $columnEndPixel$$inline_736_columnRange$$3_columnStart$$inline_731_inner$$, $columnEndPixel$$inline_736_columnRange$$3_columnStart$$inline_731_inner$$ = this.$m_avgColWidth$ * ($columnEndPixel$$inline_736_columnRange$$3_columnStart$$inline_731_inner$$ + $columnCount$$inline_742_responseColumnStart$$inline_721_rowCount$$4$$), $databodyContent$$1_scroller$$8_viewportTop$$inline_737$$ = this.$m_currentScrollTop$, $columnBandingInterval$$inline_751_resizer$$1_viewportBottom$$inline_738$$ = 
      this.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_databody$), $fragment$$1_horizontalGridlines$$inline_752_rowRangeNeedsUpdate_viewportLeft$$inline_739$$ = this.$m_currentScrollLeft$, $verticalGridlines$$inline_753_viewportRight$$inline_740$$ = this.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_databody$), !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && (this.$m_dataSource$.getCount("row") == $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_720_rowCount$$inline_741_rowStart$$2$$ && 
      $columnCount$$1_requestCellRanges$$inline_722_requestColumnStart$$inline_724_rowEnd$$inline_730_rowEndPixel$$inline_734$$ < $columnBandingInterval$$inline_751_resizer$$1_viewportBottom$$inline_738$$) && ($columnCount$$1_requestCellRanges$$inline_722_requestColumnStart$$inline_724_rowEnd$$inline_730_rowEndPixel$$inline_734$$ = $columnBandingInterval$$inline_751_resizer$$1_viewportBottom$$inline_738$$), !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && (this.$m_dataSource$.getCount("column") == 
      $columnCount$$inline_742_responseColumnStart$$inline_721_rowCount$$4$$ && $columnEndPixel$$inline_736_columnRange$$3_columnStart$$inline_731_inner$$ < $verticalGridlines$$inline_753_viewportRight$$inline_740$$) && ($columnEndPixel$$inline_736_columnRange$$3_columnStart$$inline_731_inner$$ = $verticalGridlines$$inline_753_viewportRight$$inline_740$$), $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_720_rowCount$$inline_741_rowStart$$2$$ = $databodyContent$$1_scroller$$8_viewportTop$$inline_737$$ >= 
      $columnStart$$1_requestRowStart$$inline_723_rowRange$$3_rowStart$$inline_729_rowStartPixel$$inline_733$$ && $columnBandingInterval$$inline_751_resizer$$1_viewportBottom$$inline_738$$ <= $columnCount$$1_requestCellRanges$$inline_722_requestColumnStart$$inline_724_rowEnd$$inline_730_rowEndPixel$$inline_734$$ && $fragment$$1_horizontalGridlines$$inline_752_rowRangeNeedsUpdate_viewportLeft$$inline_739$$ >= $columnRangeNeedsUpdate_columnStartPixel$$inline_735$$ && $verticalGridlines$$inline_753_viewportRight$$inline_740$$ <= 
      $columnEndPixel$$inline_736_columnRange$$3_columnStart$$inline_731_inner$$);
      $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_720_rowCount$$inline_741_rowStart$$2$$ = !$JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_720_rowCount$$inline_741_rowStart$$2$$
    }
    if($JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_720_rowCount$$inline_741_rowStart$$2$$) {
      this.$m_fetching$.cells = D.$JSCompiler_alias_FALSE$$;
      this.$m_captureScrolling$ || (0,D.$JSCompiler_StaticMethods_handleLongScroll$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
      return
    }
  }
  (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)(this);
  $columnStart$$1_requestRowStart$$inline_723_rowRange$$3_rowStart$$inline_729_rowStartPixel$$inline_733$$ = $cellRange$$3_databody$$5$$[0];
  $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_720_rowCount$$inline_741_rowStart$$2$$ = $columnStart$$1_requestRowStart$$inline_723_rowRange$$3_rowStart$$inline_729_rowStartPixel$$inline_733$$.start;
  $columnCount$$inline_742_responseColumnStart$$inline_721_rowCount$$4$$ = $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$.getCount("row");
  $fragment$$1_horizontalGridlines$$inline_752_rowRangeNeedsUpdate_viewportLeft$$inline_739$$ = 0 < $columnCount$$inline_742_responseColumnStart$$inline_721_rowCount$$4$$ && ($JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_720_rowCount$$inline_741_rowStart$$2$$ >= this.$m_endRow$ || $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_720_rowCount$$inline_741_rowStart$$2$$ + $columnCount$$inline_742_responseColumnStart$$inline_721_rowCount$$4$$ <= 
  this.$m_startRow$);
  if(0 == $columnCount$$inline_742_responseColumnStart$$inline_721_rowCount$$4$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && 0 < $columnStart$$1_requestRowStart$$inline_723_rowRange$$3_rowStart$$inline_729_rowStartPixel$$inline_733$$.count || $fragment$$1_horizontalGridlines$$inline_752_rowRangeNeedsUpdate_viewportLeft$$inline_739$$ && (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && this.$m_endRow$ + 
  $columnCount$$inline_742_responseColumnStart$$inline_721_rowCount$$4$$ >= $scrollerWidth$$inline_760_summaryExpanded$$inline_767_totalRowCount$$ || $columnCount$$inline_742_responseColumnStart$$inline_721_rowCount$$4$$ < $columnStart$$1_requestRowStart$$inline_723_rowRange$$3_rowStart$$inline_729_rowStartPixel$$inline_733$$.count) {
    this.$m_stopRowFetch$ = D.$JSCompiler_alias_TRUE$$
  }
  $columnEndPixel$$inline_736_columnRange$$3_columnStart$$inline_731_inner$$ = $cellRange$$3_databody$$5$$[1];
  $columnStart$$1_requestRowStart$$inline_723_rowRange$$3_rowStart$$inline_729_rowStartPixel$$inline_733$$ = $columnEndPixel$$inline_736_columnRange$$3_columnStart$$inline_731_inner$$.start;
  $columnCount$$1_requestCellRanges$$inline_722_requestColumnStart$$inline_724_rowEnd$$inline_730_rowEndPixel$$inline_734$$ = $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$.getCount("column");
  $columnRangeNeedsUpdate_columnStartPixel$$inline_735$$ = 0 < $columnCount$$1_requestCellRanges$$inline_722_requestColumnStart$$inline_724_rowEnd$$inline_730_rowEndPixel$$inline_734$$ && ($columnStart$$1_requestRowStart$$inline_723_rowRange$$3_rowStart$$inline_729_rowStartPixel$$inline_733$$ == this.$m_endCol$ || $columnStart$$1_requestRowStart$$inline_723_rowRange$$3_rowStart$$inline_729_rowStartPixel$$inline_733$$ + $columnCount$$1_requestCellRanges$$inline_722_requestColumnStart$$inline_724_rowEnd$$inline_730_rowEndPixel$$inline_734$$ == 
  this.$m_startCol$);
  if(0 == $columnCount$$1_requestCellRanges$$inline_722_requestColumnStart$$inline_724_rowEnd$$inline_730_rowEndPixel$$inline_734$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && 0 < $columnEndPixel$$inline_736_columnRange$$3_columnStart$$inline_731_inner$$.count || $columnRangeNeedsUpdate_columnStartPixel$$inline_735$$ && (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && this.$m_endCol$ + 
  $columnCount$$1_requestCellRanges$$inline_722_requestColumnStart$$inline_724_rowEnd$$inline_730_rowEndPixel$$inline_734$$ >= $scrollerContentHeight$$inline_762_totalColumnCount$$ || $columnCount$$1_requestCellRanges$$inline_722_requestColumnStart$$inline_724_rowEnd$$inline_730_rowEndPixel$$inline_734$$ < $columnEndPixel$$inline_736_columnRange$$3_columnStart$$inline_731_inner$$.count) {
    this.$m_stopColumnFetch$ = D.$JSCompiler_alias_TRUE$$
  }
  $cellRange$$3_databody$$5$$ = this.$m_databody$;
  $cellRange$$3_databody$$5$$ == D.$JSCompiler_alias_NULL$$ && ($cellRange$$3_databody$$5$$ = $columnEndPixel$$inline_736_columnRange$$3_columnStart$$inline_731_inner$$.databody);
  $databodyContent$$1_scroller$$8_viewportTop$$inline_737$$ = this.$m_scroller$;
  $databodyContent$$1_scroller$$8_viewportTop$$inline_737$$ == D.$JSCompiler_alias_NULL$$ && ($databodyContent$$1_scroller$$8_viewportTop$$inline_737$$ = $columnEndPixel$$inline_736_columnRange$$3_columnStart$$inline_731_inner$$.scroller);
  $databodyContent$$1_scroller$$8_viewportTop$$inline_737$$.hasChildNodes() ? $columnEndPixel$$inline_736_columnRange$$3_columnStart$$inline_731_inner$$ = $databodyContent$$1_scroller$$8_viewportTop$$inline_737$$.firstChild : ($columnEndPixel$$inline_736_columnRange$$3_columnStart$$inline_731_inner$$ = window.document.createElement("div"), $databodyContent$$1_scroller$$8_viewportTop$$inline_737$$.appendChild($columnEndPixel$$inline_736_columnRange$$3_columnStart$$inline_731_inner$$));
  $cellRange$$3_databody$$5$$.hasChildNodes() ? ($databodyContent$$1_scroller$$8_viewportTop$$inline_737$$ = $cellRange$$3_databody$$5$$.firstChild, $columnBandingInterval$$inline_751_resizer$$1_viewportBottom$$inline_738$$ = $databodyContent$$1_scroller$$8_viewportTop$$inline_737$$.firstChild) : ($databodyContent$$1_scroller$$8_viewportTop$$inline_737$$ = window.document.createElement("div"), $databodyContent$$1_scroller$$8_viewportTop$$inline_737$$.className = this.$m_utils$.$isTouchDevice$() ? 
  this.getMappedStyle("scroller-mobile") : this.getMappedStyle("scroller"), $columnBandingInterval$$inline_751_resizer$$1_viewportBottom$$inline_738$$ = window.document.createElement("div"), $columnBandingInterval$$inline_751_resizer$$1_viewportBottom$$inline_738$$.style.display = "none", (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnBandingInterval$$inline_751_resizer$$1_viewportBottom$$inline_738$$, 1), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnBandingInterval$$inline_751_resizer$$1_viewportBottom$$inline_738$$, 
  0), $databodyContent$$1_scroller$$8_viewportTop$$inline_737$$.appendChild($columnBandingInterval$$inline_751_resizer$$1_viewportBottom$$inline_738$$));
  if($fragment$$1_horizontalGridlines$$inline_752_rowRangeNeedsUpdate_viewportLeft$$inline_739$$ || $JSCompiler_inline_result$$46_rowInsert$$2_scrollerHeight$$inline_759_summary$$inline_766$$) {
    if(($avgWidth$$inline_755_i$$15_isAppend$$1_row$$inline_754$$ = !$JSCompiler_inline_result$$46_rowInsert$$2_scrollerHeight$$inline_759_summary$$inline_766$$ && $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_720_rowCount$$inline_741_rowStart$$2$$ >= this.$m_startRow$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$) ? $addResult_avgHeight_scrollerContent$$inline_761_scrollerContentWidth$$inline_763_top$$3$$ = this.$m_endRowPixel$ : $JSCompiler_inline_result$$46_rowInsert$$2_scrollerHeight$$inline_759_summary$$inline_766$$ ? 
    ($prev$$1_referenceRow$$1_rows$$1$$ = $databodyContent$$1_scroller$$8_viewportTop$$inline_737$$.childNodes[$JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_720_rowCount$$inline_741_rowStart$$2$$ - this.$m_startRow$ + 1], $addResult_avgHeight_scrollerContent$$inline_761_scrollerContentWidth$$inline_763_top$$3$$ = (0,window.parseInt)($prev$$1_referenceRow$$1_rows$$1$$.style.top)) : $addResult_avgHeight_scrollerContent$$inline_761_scrollerContentWidth$$inline_763_top$$3$$ = 
    this.$m_startRowPixel$, $fragment$$1_horizontalGridlines$$inline_752_rowRangeNeedsUpdate_viewportLeft$$inline_739$$ = window.document.createDocumentFragment(), $addResult_avgHeight_scrollerContent$$inline_761_scrollerContentWidth$$inline_763_top$$3$$ = (0,D.$JSCompiler_StaticMethods__addRows$$)(this, $fragment$$1_horizontalGridlines$$inline_752_rowRangeNeedsUpdate_viewportLeft$$inline_739$$, $avgWidth$$inline_755_i$$15_isAppend$$1_row$$inline_754$$ || $JSCompiler_inline_result$$46_rowInsert$$2_scrollerHeight$$inline_759_summary$$inline_766$$, 
    $addResult_avgHeight_scrollerContent$$inline_761_scrollerContentWidth$$inline_763_top$$3$$, $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_720_rowCount$$inline_741_rowStart$$2$$, $columnCount$$inline_742_responseColumnStart$$inline_721_rowCount$$4$$, $columnStart$$1_requestRowStart$$inline_723_rowRange$$3_rowStart$$inline_729_rowStartPixel$$inline_733$$, $columnRangeNeedsUpdate_columnStartPixel$$inline_735$$, $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), 
    $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ = $addResult_avgHeight_scrollerContent$$inline_761_scrollerContentWidth$$inline_763_top$$3$$.totalRowHeight, $avgWidth$$1_renderer$$inline_750$$ = $addResult_avgHeight_scrollerContent$$inline_761_scrollerContentWidth$$inline_763_top$$3$$.avgWidth, $addResult_avgHeight_scrollerContent$$inline_761_scrollerContentWidth$$inline_763_top$$3$$ = $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ / $columnCount$$inline_742_responseColumnStart$$inline_721_rowCount$$4$$, 
    $avgWidth$$inline_755_i$$15_isAppend$$1_row$$inline_754$$) {
      $databodyContent$$1_scroller$$8_viewportTop$$inline_737$$.appendChild($fragment$$1_horizontalGridlines$$inline_752_rowRangeNeedsUpdate_viewportLeft$$inline_739$$);
      if(0 != this.$m_endRow$ && 0 != $columnCount$$inline_742_responseColumnStart$$inline_721_rowCount$$4$$ && ($prev$$1_referenceRow$$1_rows$$1$$ = $databodyContent$$1_scroller$$8_viewportTop$$inline_737$$.childNodes[this.$m_endRow$], $prev$$1_referenceRow$$1_rows$$1$$ != D.$JSCompiler_alias_NULL$$)) {
        $prev$$1_referenceRow$$1_rows$$1$$ = $prev$$1_referenceRow$$1_rows$$1$$.childNodes;
        for($avgWidth$$inline_755_i$$15_isAppend$$1_row$$inline_754$$ = 0;$avgWidth$$inline_755_i$$15_isAppend$$1_row$$inline_754$$ < $prev$$1_referenceRow$$1_rows$$1$$.length;$avgWidth$$inline_755_i$$15_isAppend$$1_row$$inline_754$$ += 1) {
          $prev$$1_referenceRow$$1_rows$$1$$[$avgWidth$$inline_755_i$$15_isAppend$$1_row$$inline_754$$].style.borderBottomStyle = ""
        }
      }
      this.$m_endRow$ += $columnCount$$inline_742_responseColumnStart$$inline_721_rowCount$$4$$;
      this.$m_endRowPixel$ += $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$;
      $cellRange$$3_databody$$5$$.hasChildNodes() || ($cellRange$$3_databody$$5$$.appendChild($databodyContent$$1_scroller$$8_viewportTop$$inline_737$$), this.$isDraggable$() && ($cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ = window.document.createElement("div"), window.bottomHotspot = window.document.createElement("div"), $cellRange$$3_databody$$5$$.appendChild($cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), $cellRange$$3_databody$$5$$.appendChild(window.bottomHotspot)))
    }else {
      $JSCompiler_inline_result$$46_rowInsert$$2_scrollerHeight$$inline_759_summary$$inline_766$$ ? ($databodyContent$$1_scroller$$8_viewportTop$$inline_737$$.insertBefore($fragment$$1_horizontalGridlines$$inline_752_rowRangeNeedsUpdate_viewportLeft$$inline_739$$, $prev$$1_referenceRow$$1_rows$$1$$), $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_720_rowCount$$inline_741_rowStart$$2$$ < this.$m_startRow$ && (this.$m_startRow$ = $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_720_rowCount$$inline_741_rowStart$$2$$, 
      this.$m_startRowPixel$ = window.Math.max(0, this.$m_startRowPixel$ - $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnBandingInterval$$inline_751_resizer$$1_viewportBottom$$inline_738$$, window.Math.max(0, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($columnBandingInterval$$inline_751_resizer$$1_viewportBottom$$inline_738$$) - $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$))), this.$m_endRow$ += $columnCount$$inline_742_responseColumnStart$$inline_721_rowCount$$4$$, 
      this.$m_endRowPixel$ += $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$, (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($prev$$1_referenceRow$$1_rows$$1$$, $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$)) : ($databodyContent$$1_scroller$$8_viewportTop$$inline_737$$.insertBefore($fragment$$1_horizontalGridlines$$inline_752_rowRangeNeedsUpdate_viewportLeft$$inline_739$$, $columnBandingInterval$$inline_751_resizer$$1_viewportBottom$$inline_738$$.nextSibling), this.$m_startRow$ -= 
      $columnCount$$inline_742_responseColumnStart$$inline_721_rowCount$$4$$, this.$m_startRowPixel$ = window.Math.max(0, this.$m_startRowPixel$ - $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnBandingInterval$$inline_751_resizer$$1_viewportBottom$$inline_738$$, window.Math.max(0, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($columnBandingInterval$$inline_751_resizer$$1_viewportBottom$$inline_738$$) - $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$)))
    }
  }else {
    if($columnRangeNeedsUpdate_columnStartPixel$$inline_735$$ && ($prev$$1_referenceRow$$1_rows$$1$$ = $databodyContent$$1_scroller$$8_viewportTop$$inline_737$$.childNodes, $columnCount$$inline_742_responseColumnStart$$inline_721_rowCount$$4$$ == $prev$$1_referenceRow$$1_rows$$1$$.length - 1)) {
      var $i$$inline_756$$;
      $avgWidth$$1_renderer$$inline_750$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "cell");
      $columnBandingInterval$$inline_751_resizer$$1_viewportBottom$$inline_738$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)(this.$m_options$);
      $fragment$$1_horizontalGridlines$$inline_752_rowRangeNeedsUpdate_viewportLeft$$inline_739$$ = (0,D.$JSCompiler_StaticMethods_getHorizontalGridlines$$)(this.$m_options$);
      $verticalGridlines$$inline_753_viewportRight$$inline_740$$ = (0,D.$JSCompiler_StaticMethods_getVerticalGridlines$$)(this.$m_options$);
      for($i$$inline_756$$ = 0;$i$$inline_756$$ < $columnCount$$inline_742_responseColumnStart$$inline_721_rowCount$$4$$;$i$$inline_756$$ += 1) {
        $avgWidth$$inline_755_i$$15_isAppend$$1_row$$inline_754$$ = $prev$$1_referenceRow$$1_rows$$1$$[$i$$inline_756$$ + 1], $avgWidth$$inline_755_i$$15_isAppend$$1_row$$inline_754$$ = (0,D.$JSCompiler_StaticMethods_addCellsToRow$$)(this, $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$, $avgWidth$$inline_755_i$$15_isAppend$$1_row$$inline_754$$, $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_720_rowCount$$inline_741_rowStart$$2$$ + $i$$inline_756$$, $avgWidth$$1_renderer$$inline_750$$, 
        D.$JSCompiler_alias_FALSE$$, $columnStart$$1_requestRowStart$$inline_723_rowRange$$3_rowStart$$inline_729_rowStartPixel$$inline_733$$, $i$$inline_756$$ == $columnCount$$inline_742_responseColumnStart$$inline_721_rowCount$$4$$ - 1, $columnBandingInterval$$inline_751_resizer$$1_viewportBottom$$inline_738$$, $fragment$$1_horizontalGridlines$$inline_752_rowRangeNeedsUpdate_viewportLeft$$inline_739$$, $verticalGridlines$$inline_753_viewportRight$$inline_740$$)
      }
      $avgWidth$$1_renderer$$inline_750$$ = $avgWidth$$inline_755_i$$15_isAppend$$1_row$$inline_754$$
    }
  }
  $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ = -1 != $scrollerContentHeight$$inline_762_totalColumnCount$$ && !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) ? $scrollerContentHeight$$inline_762_totalColumnCount$$ * $avgWidth$$1_renderer$$inline_750$$ : this.$m_endColPixel$;
  if($avgWidth$$1_renderer$$inline_750$$ != D.$JSCompiler_alias_VOID$$ && (0 == this.$m_avgColWidth$ || this.$m_avgColWidth$ == D.$JSCompiler_alias_VOID$$)) {
    this.$m_avgColWidth$ = $avgWidth$$1_renderer$$inline_750$$, (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databodyContent$$1_scroller$$8_viewportTop$$inline_737$$, $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnEndPixel$$inline_736_columnRange$$3_columnStart$$inline_731_inner$$, $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$)
  }else {
    if((-1 == $scrollerContentHeight$$inline_762_totalColumnCount$$ || (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this)) && $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ > (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databodyContent$$1_scroller$$8_viewportTop$$inline_737$$)) {
      (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databodyContent$$1_scroller$$8_viewportTop$$inline_737$$, $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnEndPixel$$inline_736_columnRange$$3_columnStart$$inline_731_inner$$, $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$)
    }
  }
  $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ = -1 != $scrollerWidth$$inline_760_summaryExpanded$$inline_767_totalRowCount$$ && !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) ? $scrollerWidth$$inline_760_summaryExpanded$$inline_767_totalRowCount$$ * $addResult_avgHeight_scrollerContent$$inline_761_scrollerContentWidth$$inline_763_top$$3$$ : this.$m_endRowPixel$;
  if($addResult_avgHeight_scrollerContent$$inline_761_scrollerContentWidth$$inline_763_top$$3$$ != D.$JSCompiler_alias_VOID$$ && (0 == this.$m_avgRowHeight$ || this.$m_avgRowHeight$ == D.$JSCompiler_alias_VOID$$)) {
    this.$m_avgRowHeight$ = $addResult_avgHeight_scrollerContent$$inline_761_scrollerContentWidth$$inline_763_top$$3$$, (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent$$1_scroller$$8_viewportTop$$inline_737$$, $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnEndPixel$$inline_736_columnRange$$3_columnStart$$inline_731_inner$$, $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$)
  }else {
    if((-1 == $scrollerWidth$$inline_760_summaryExpanded$$inline_767_totalRowCount$$ || (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this)) && $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ > (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databodyContent$$1_scroller$$8_viewportTop$$inline_737$$) || $scrollerWidth$$inline_760_summaryExpanded$$inline_767_totalRowCount$$ * $addResult_avgHeight_scrollerContent$$inline_761_scrollerContentWidth$$inline_763_top$$3$$ != (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databodyContent$$1_scroller$$8_viewportTop$$inline_737$$)) {
      (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent$$1_scroller$$8_viewportTop$$inline_737$$, $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnEndPixel$$inline_736_columnRange$$3_columnStart$$inline_731_inner$$, $cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$)
    }
  }
  $columnRangeNeedsUpdate_columnStartPixel$$inline_735$$ && ($columnStart$$1_requestRowStart$$inline_723_rowRange$$3_rowStart$$inline_729_rowStartPixel$$inline_733$$ < this.$m_startCol$ ? this.$m_startCol$ -= $columnCount$$1_requestCellRanges$$inline_722_requestColumnStart$$inline_724_rowEnd$$inline_730_rowEndPixel$$inline_734$$ : this.$m_endCol$ += $columnCount$$1_requestCellRanges$$inline_722_requestColumnStart$$inline_724_rowEnd$$inline_730_rowEndPixel$$inline_734$$);
  this.$m_fetching$.cells = D.$JSCompiler_alias_FALSE$$;
  this.$m_initialized$ && (0,D.$JSCompiler_StaticMethods__syncScroller$$)(this);
  (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && ((0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this), this.$m_initialized$ ? (this.$m_scroller$ == D.$JSCompiler_alias_NULL$$ ? $JSCompiler_inline_result$$46_rowInsert$$2_scrollerHeight$$inline_759_summary$$inline_766$$ = D.$JSCompiler_alias_FALSE$$ : ($JSCompiler_inline_result$$46_rowInsert$$2_scrollerHeight$$inline_759_summary$$inline_766$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_scroller$), $scrollerWidth$$inline_760_summaryExpanded$$inline_767_totalRowCount$$ = 
  (0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_scroller$), $addResult_avgHeight_scrollerContent$$inline_761_scrollerContentWidth$$inline_763_top$$3$$ = this.$m_scroller$.firstChild, $scrollerContentHeight$$inline_762_totalColumnCount$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($addResult_avgHeight_scrollerContent$$inline_761_scrollerContentWidth$$inline_763_top$$3$$), $addResult_avgHeight_scrollerContent$$inline_761_scrollerContentWidth$$inline_763_top$$3$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($addResult_avgHeight_scrollerContent$$inline_761_scrollerContentWidth$$inline_763_top$$3$$), 
  $JSCompiler_inline_result$$46_rowInsert$$2_scrollerHeight$$inline_759_summary$$inline_766$$ = this.$m_endRowPixel$ > $JSCompiler_inline_result$$46_rowInsert$$2_scrollerHeight$$inline_759_summary$$inline_766$$ && $scrollerWidth$$inline_760_summaryExpanded$$inline_767_totalRowCount$$ == $addResult_avgHeight_scrollerContent$$inline_761_scrollerContentWidth$$inline_763_top$$3$$ || this.$m_endColPixel$ > $scrollerWidth$$inline_760_summaryExpanded$$inline_767_totalRowCount$$ && $JSCompiler_inline_result$$46_rowInsert$$2_scrollerHeight$$inline_759_summary$$inline_766$$ == 
  $scrollerContentHeight$$inline_762_totalColumnCount$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$), $JSCompiler_inline_result$$46_rowInsert$$2_scrollerHeight$$inline_759_summary$$inline_766$$ && (0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this)) : ((0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this), $JSCompiler_inline_result$$46_rowInsert$$2_scrollerHeight$$inline_759_summary$$inline_766$$ || (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this)), this.$m_scrollIndexAfterFetch$ != 
  D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_scrollToIndex$$)(this, this.$m_scrollIndexAfterFetch$), this.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$ ? "row" === this.$m_activeHeader$.axis ? (0,D.$JSCompiler_StaticMethods__focusRowHeader$$)(this, this.$m_scrollIndexAfterFetch$.row) : "column" === this.$m_activeHeader$.axis && (0,D.$JSCompiler_StaticMethods__focusColumnHeader$$)(this, this.$m_scrollIndexAfterFetch$.column) : this.$m_scrollIndexAfterFetch$ == this.$m_active$ ? 
  (0,D.$JSCompiler_StaticMethods_highlightActive$$)(this) : (0,D.$JSCompiler_StaticMethods_highlightIndex$$)(this, this.$m_scrollIndexAfterFetch$), this.$m_scrollIndexAfterFetch$ = D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (this.$m_databody$ == D.$JSCompiler_alias_NULL$$ && (this.$m_databody$ = $cellRange$$3_databody$$5$$), (0,D.$JSCompiler_StaticMethods_applySelection$$)(this, $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_720_rowCount$$inline_741_rowStart$$2$$, 
  $JSCompiler_inline_result$$207_JSCompiler_temp$$206_responseRowStart$$inline_720_rowCount$$inline_741_rowStart$$2$$ + $columnCount$$inline_742_responseColumnStart$$inline_721_rowCount$$4$$)), $JSCompiler_inline_result$$46_rowInsert$$2_scrollerHeight$$inline_759_summary$$inline_766$$ = this.$getResources$().getTranslatedText("accessibleSummaryExact", {rownum:this.$m_endRow$, colnum:this.$m_endCol$}), this.$m_dataSource$.getExpandedKeys && ($scrollerWidth$$inline_760_summaryExpanded$$inline_767_totalRowCount$$ = 
  this.$getResources$().getTranslatedText("accessibleSummaryExpanded", {num:this.$m_dataSource$.getExpandedKeys().length}), $JSCompiler_inline_result$$46_rowInsert$$2_scrollerHeight$$inline_759_summary$$inline_766$$ = $JSCompiler_inline_result$$46_rowInsert$$2_scrollerHeight$$inline_759_summary$$inline_766$$ + ". " + $scrollerWidth$$inline_760_summaryExpanded$$inline_767_totalRowCount$$), this.$m_accSummary$.innerHTML = $JSCompiler_inline_result$$46_rowInsert$$2_scrollerHeight$$inline_759_summary$$inline_766$$)
};
D.$JSCompiler_StaticMethods__addRows$$ = function $$JSCompiler_StaticMethods__addRows$$$($JSCompiler_StaticMethods__addRows$self$$, $fragment$$2$$, $isAppendOrInsert$$, $top$$4$$, $rowStart$$4$$, $rowCount$$6$$, $columnStart$$3$$, $columnRangeNeedsUpdate$$1$$, $cellSet$$3$$) {
  var $renderer$$3$$, $columnBandingInterval$$1$$, $rowBandingInterval$$, $horizontalGridlines$$2$$, $verticalGridlines$$2$$, $row$$3$$, $avgWidth$$3$$, $totalRowHeight$$2$$, $height$$16_index$$52$$;
  $renderer$$3$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$, "cell");
  $columnBandingInterval$$1$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $rowBandingInterval$$ = (0,D.$JSCompiler_StaticMethods_getRowBandingInterval$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $horizontalGridlines$$2$$ = (0,D.$JSCompiler_StaticMethods_getHorizontalGridlines$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $verticalGridlines$$2$$ = (0,D.$JSCompiler_StaticMethods_getVerticalGridlines$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  for(window.i = $totalRowHeight$$2$$ = 0;window.i < $rowCount$$6$$;window.i += 1) {
    $height$$16_index$$52$$ = $isAppendOrInsert$$ ? $rowStart$$4$$ + window.i : $rowStart$$4$$ + ($rowCount$$6$$ - 1 - window.i), $row$$3$$ = window.document.createElement("div"), $row$$3$$.className = 1 === window.Math.floor($height$$16_index$$52$$ / $rowBandingInterval$$) % 2 ? $JSCompiler_StaticMethods__addRows$self$$.getMappedStyle("row") + " " + $JSCompiler_StaticMethods__addRows$self$$.getMappedStyle("banded") : $JSCompiler_StaticMethods__addRows$self$$.getMappedStyle("row"), $avgWidth$$3$$ = 
    (0,D.$JSCompiler_StaticMethods_addCellsToRow$$)($JSCompiler_StaticMethods__addRows$self$$, $cellSet$$3$$, $row$$3$$, $height$$16_index$$52$$, $renderer$$3$$, D.$JSCompiler_alias_TRUE$$, $columnStart$$3$$, window.i == $rowCount$$6$$ - 1 && $columnRangeNeedsUpdate$$1$$, $columnBandingInterval$$1$$, $horizontalGridlines$$2$$, $verticalGridlines$$2$$), $height$$16_index$$52$$ = (0,D.$JSCompiler_StaticMethods_getRowHeight$$)($JSCompiler_StaticMethods__addRows$self$$, $row$$3$$, $height$$16_index$$52$$, 
    $JSCompiler_StaticMethods__addRows$self$$.$_getKey$($row$$3$$)), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($row$$3$$, $height$$16_index$$52$$), $totalRowHeight$$2$$ += $height$$16_index$$52$$, $isAppendOrInsert$$ ? ($row$$3$$.style.top = $top$$4$$ + "px", $top$$4$$ += $height$$16_index$$52$$, $fragment$$2$$.appendChild($row$$3$$)) : ($top$$4$$ -= $height$$16_index$$52$$, $row$$3$$.style.top = $top$$4$$ + "px", $fragment$$2$$.insertBefore($row$$3$$, $fragment$$2$$.firstChild))
  }
  return{avgWidth:$avgWidth$$3$$, totalRowHeight:$totalRowHeight$$2$$, top:$top$$4$$}
};
D.$JSCompiler_StaticMethods_pushRowsDown$$ = function $$JSCompiler_StaticMethods_pushRowsDown$$$($row$$4$$, $adjustment$$) {
  for(;$row$$4$$;) {
    $row$$4$$.style.top = (0,window.parseInt)($row$$4$$.style.top) + $adjustment$$ + "px", $row$$4$$ = $row$$4$$.nextSibling
  }
};
D.$DvtDataGrid$$.prototype.$handleCellsFetchError$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_addCellsToRow$$ = function $$JSCompiler_StaticMethods_addCellsToRow$$$($JSCompiler_StaticMethods_addCellsToRow$self$$, $cellSet$$4$$, $row$$6$$, $rowIndex$$, $renderer$$4$$, $isRowFetch$$, $columnStart$$4$$, $updateColumnRangeInfo$$, $columnBandingInterval$$2$$, $horizontalGridlines$$3$$, $verticalGridlines$$3$$) {
  var $isAppend$$2$$, $firstColumn$$, $indexes$$5_indexes$$inline_770_inlineStyle$$3_inlineStyleClass_prop$$inline_775$$, $cellStyleClass_data$$inline_771$$, $currentLeft$$1$$, $dir$$6$$, $totalWidth$$, $columnCount$$2$$, $cellData_content$$2$$, $cellMetadata_metadata$$inline_772$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_769_cellContext$$1$$, $j$$4$$, $cell$$, $columnIndex_width$$16$$, $keyAttribute$$;
  $isAppend$$2$$ = $columnStart$$4$$ >= $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startCol$;
  $firstColumn$$ = $row$$6$$.firstChild;
  $currentLeft$$1$$ = $isRowFetch$$ || !$isAppend$$2$$ ? $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startColPixel$ : $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_endColPixel$;
  $keyAttribute$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$getResources$().getMappedAttribute("key");
  $dir$$6$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$getResources$().isRTLMode() ? "right" : "left";
  $totalWidth$$ = 0;
  $columnCount$$2$$ = $cellSet$$4$$.getCount("column");
  for($j$$4$$ = 0;$j$$4$$ < $columnCount$$2$$;$j$$4$$ += 1) {
    $columnIndex_width$$16$$ = $isAppend$$2$$ || $isRowFetch$$ ? $columnStart$$4$$ + $j$$4$$ : $columnStart$$4$$ + ($columnCount$$2$$ - 1 - $j$$4$$);
    $indexes$$5_indexes$$inline_770_inlineStyle$$3_inlineStyleClass_prop$$inline_775$$ = {row:$rowIndex$$, column:$columnIndex_width$$16$$};
    $cellData_content$$2$$ = $cellSet$$4$$.getData($indexes$$5_indexes$$inline_770_inlineStyle$$3_inlineStyleClass_prop$$inline_775$$);
    $cellMetadata_metadata$$inline_772$$ = $cellSet$$4$$.getMetadata($indexes$$5_indexes$$inline_770_inlineStyle$$3_inlineStyleClass_prop$$inline_775$$);
    $cell$$ = window.document.createElement("div");
    $cell$$.setAttribute("tabIndex", -1);
    $JSCompiler_StaticMethods_createCellContext$self$$inline_769_cellContext$$1$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$;
    $cellStyleClass_data$$inline_771$$ = $cellData_content$$2$$;
    var $cellContext$$inline_774$$ = D.$JSCompiler_alias_VOID$$, $cellContext$$inline_774$$ = {};
    $cellContext$$inline_774$$.parentElement = $cell$$;
    $cellContext$$inline_774$$.indexes = $indexes$$5_indexes$$inline_770_inlineStyle$$3_inlineStyleClass_prop$$inline_775$$;
    $cellContext$$inline_774$$.data = $cellStyleClass_data$$inline_771$$;
    $cellContext$$inline_774$$.component = $JSCompiler_StaticMethods_createCellContext$self$$inline_769_cellContext$$1$$;
    $cellContext$$inline_774$$.datasource = $JSCompiler_StaticMethods_createCellContext$self$$inline_769_cellContext$$1$$.$m_dataSource$;
    $indexes$$5_indexes$$inline_770_inlineStyle$$3_inlineStyleClass_prop$$inline_775$$ = D.$JSCompiler_alias_VOID$$;
    for($indexes$$5_indexes$$inline_770_inlineStyle$$3_inlineStyleClass_prop$$inline_775$$ in $cellMetadata_metadata$$inline_772$$) {
      $cellMetadata_metadata$$inline_772$$.hasOwnProperty($indexes$$5_indexes$$inline_770_inlineStyle$$3_inlineStyleClass_prop$$inline_775$$) && ($cellContext$$inline_774$$[$indexes$$5_indexes$$inline_770_inlineStyle$$3_inlineStyleClass_prop$$inline_775$$] = $cellMetadata_metadata$$inline_772$$[$indexes$$5_indexes$$inline_770_inlineStyle$$3_inlineStyleClass_prop$$inline_775$$])
    }
    $JSCompiler_StaticMethods_createCellContext$self$$inline_769_cellContext$$1$$.$m_createContextCallback$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_createCellContext$self$$inline_769_cellContext$$1$$.$m_createContextCallback$.call($JSCompiler_StaticMethods_createCellContext$self$$inline_769_cellContext$$1$$, $cellContext$$inline_774$$);
    $JSCompiler_StaticMethods_createCellContext$self$$inline_769_cellContext$$1$$ = $cellContext$$inline_774$$;
    $row$$6$$.hasAttribute($keyAttribute$$) || $row$$6$$.setAttribute($keyAttribute$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_769_cellContext$$1$$.keys.row);
    $indexes$$5_indexes$$inline_770_inlineStyle$$3_inlineStyleClass_prop$$inline_775$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getInlineStyle$("cell", $JSCompiler_StaticMethods_createCellContext$self$$inline_769_cellContext$$1$$);
    $indexes$$5_indexes$$inline_770_inlineStyle$$3_inlineStyleClass_prop$$inline_775$$ != D.$JSCompiler_alias_NULL$$ && ($cell$$.style.cssText = $indexes$$5_indexes$$inline_770_inlineStyle$$3_inlineStyleClass_prop$$inline_775$$);
    if("hidden" === $verticalGridlines$$3$$ || (0,D.$JSCompiler_StaticMethods__isLastColumn$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $columnIndex_width$$16$$)) {
      "left" === $dir$$6$$ ? $cell$$.style.borderRight = "none" : $cell$$.style.borderLeftStyle = "none"
    }
    if("hidden" === $horizontalGridlines$$3$$ || (0,D.$JSCompiler_StaticMethods__isLastRow$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $rowIndex$$)) {
      $cell$$.style.borderBottomStyle = "none"
    }
    $cellStyleClass_data$$inline_771$$ = 1 === window.Math.floor($columnIndex_width$$16$$ / $columnBandingInterval$$2$$) % 2 ? $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("cell") + " " + $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("banded") : $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("cell");
    $indexes$$5_indexes$$inline_770_inlineStyle$$3_inlineStyleClass_prop$$inline_775$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getStyleClass$("cell", $JSCompiler_StaticMethods_createCellContext$self$$inline_769_cellContext$$1$$);
    $cell$$.className = $indexes$$5_indexes$$inline_770_inlineStyle$$3_inlineStyleClass_prop$$inline_775$$ != D.$JSCompiler_alias_NULL$$ ? $cellStyleClass_data$$inline_771$$ + " " + $indexes$$5_indexes$$inline_770_inlineStyle$$3_inlineStyleClass_prop$$inline_775$$ : $cellStyleClass_data$$inline_771$$;
    $cell$$.style.height = "100%";
    $columnIndex_width$$16$$ = (0,D.$JSCompiler_StaticMethods_getColumnWidth$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $cell$$, $columnIndex_width$$16$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_769_cellContext$$1$$.keys.column);
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($cell$$, $columnIndex_width$$16$$);
    $isAppend$$2$$ || $isRowFetch$$ ? (0,D.$JSCompiler_StaticMethods_setElementDir$$)($cell$$, $currentLeft$$1$$, $dir$$6$$) : (0,D.$JSCompiler_StaticMethods_setElementDir$$)($cell$$, $currentLeft$$1$$ - $columnIndex_width$$16$$, $dir$$6$$);
    $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_root$.appendChild($cell$$);
    $renderer$$4$$ != D.$JSCompiler_alias_NULL$$ ? ($cellData_content$$2$$ = $renderer$$4$$.call($JSCompiler_StaticMethods_addCellsToRow$self$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_769_cellContext$$1$$), $cellData_content$$2$$ != D.$JSCompiler_alias_NULL$$ && ($cellData_content$$2$$.parentNode === D.$JSCompiler_alias_NULL$$ ? $cell$$.appendChild($cellData_content$$2$$) : $cellData_content$$2$$.parentNode == D.$JSCompiler_alias_NULL$$ && $cellData_content$$2$$.toString && $cell$$.appendChild(window.document.createTextNode($cellData_content$$2$$.toString())))) : 
    ($cellData_content$$2$$ == D.$JSCompiler_alias_NULL$$ && ($cellData_content$$2$$ = ""), $cell$$.appendChild(window.document.createTextNode($cellData_content$$2$$.toString())));
    $isAppend$$2$$ || $isRowFetch$$ ? ($row$$6$$.appendChild($cell$$), $currentLeft$$1$$ += $columnIndex_width$$16$$) : ($row$$6$$.insertBefore($cell$$, $firstColumn$$), $firstColumn$$ = $cell$$, $currentLeft$$1$$ -= $columnIndex_width$$16$$);
    $updateColumnRangeInfo$$ && ($isAppend$$2$$ || $isRowFetch$$ ? $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_endColPixel$ += $columnIndex_width$$16$$ : $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startColPixel$ -= $columnIndex_width$$16$$, $totalWidth$$ += $columnIndex_width$$16$$)
  }
  return $updateColumnRangeInfo$$ && 0 < $columnCount$$2$$ ? $totalWidth$$ / $columnCount$$2$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtDataGrid$$.prototype.$handleCellsFetchError$ = function $$DvtDataGrid$$$$$handleCellsFetchError$$() {
  this.$m_fetching$.cells = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_showStatusText$$ = function $$JSCompiler_StaticMethods_showStatusText$$$($JSCompiler_StaticMethods_showStatusText$self$$) {
  var $left$$3_msg$$;
  $left$$3_msg$$ = $JSCompiler_StaticMethods_showStatusText$self$$.$getResources$().getTranslatedText("msgFetchingData");
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
  var $scrollerContent$$inline_783_viewportRight$$inline_780$$;
  $scrollerContent$$inline_783_viewportRight$$inline_780$$ = $scrollLeft$$3$$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_databody$);
  if(this.$m_endRowPixel$ < $scrollTop$$3$$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_databody$) || this.$m_startRowPixel$ > $scrollTop$$3$$ || this.$m_endColPixel$ < $scrollerContent$$inline_783_viewportRight$$inline_780$$ - 2 || this.$m_startColPixel$ > $scrollLeft$$3$$) {
    this.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_TRUE$$
  }else {
    this.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_FALSE$$;
    (0,D.$JSCompiler_StaticMethods__syncScroller$$)(this);
    var $scrollerContentHeight$$inline_784$$, $scrollerContentWidth$$inline_785$$, $databodyContent$$inline_786$$;
    $scrollerContent$$inline_783_viewportRight$$inline_780$$ = this.$m_scroller$.firstChild;
    $scrollerContentHeight$$inline_784$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($scrollerContent$$inline_783_viewportRight$$inline_780$$);
    $scrollerContentWidth$$inline_785$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($scrollerContent$$inline_783_viewportRight$$inline_780$$);
    $databodyContent$$inline_786$$ = this.$m_databody$.firstChild;
    if(this.$m_endRowPixel$ > $scrollerContentHeight$$inline_784$$ || this.$m_dataSource$.getCount("row") == this.$m_endRow$ && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && this.$m_endRowPixel$ < $scrollerContentHeight$$inline_784$$) {
      (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($scrollerContent$$inline_783_viewportRight$$inline_780$$, this.$m_endRowPixel$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent$$inline_786$$, this.$m_endRowPixel$)
    }
    if(this.$m_endColPixel$ > $scrollerContentWidth$$inline_785$$ || this.$m_dataSource$.getCount("column") == this.$m_endCol$ && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && this.$m_endColPixel$ < $scrollerContentWidth$$inline_785$$) {
      (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($scrollerContent$$inline_783_viewportRight$$inline_780$$, this.$m_endColPixel$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databodyContent$$inline_786$$, this.$m_endColPixel$)
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
D.$JSCompiler_StaticMethods__syncScroller$$ = function $$JSCompiler_StaticMethods__syncScroller$$$($JSCompiler_StaticMethods__syncScroller$self_dir$$8$$) {
  var $scrollLeft$$5$$, $scrollTop$$5$$, $databody$$7$$, $colHeader$$4$$, $rowHeader$$6$$;
  $scrollLeft$$5$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_currentScrollLeft$;
  $scrollTop$$5$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_currentScrollTop$;
  $databody$$7$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_databody$.firstChild;
  $colHeader$$4$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_colHeader$.firstChild;
  $rowHeader$$6$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_rowHeader$.firstChild;
  if($JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_utils$.$isTouchDevice$() && window.hasOwnProperty("WebKitCSSMatrix") && (new window.WebKitCSSMatrix).hasOwnProperty("m11")) {
    if($JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_extraScrollOverX$ != D.$JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_extraScrollOverY$ != D.$JSCompiler_alias_NULL$$) {
      $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_extraScrollOverX$ != D.$JSCompiler_alias_NULL$$ ? $scrollLeft$$5$$ += $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_extraScrollOverX$ : $scrollTop$$5$$ += $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_extraScrollOverY$, $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_bounceBack$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_bounceBack$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$_bounceBack$.bind($JSCompiler_StaticMethods__syncScroller$self_dir$$8$$)), 
      $databody$$7$$.addEventListener("webkitTransitionEnd", $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_bounceBack$)
    }
    $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$getResources$().isRTLMode() ? ($databody$$7$$.style.webkitTransform = "translate3d(" + $scrollLeft$$5$$ + "px, " + -$scrollTop$$5$$ + "px, 0)", $colHeader$$4$$.style.webkitTransform = "translate3d(" + $scrollLeft$$5$$ + "px, 0, 0)") : ($databody$$7$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$5$$ + "px, " + -$scrollTop$$5$$ + "px, 0)", $colHeader$$4$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$5$$ + "px, 0, 0)");
    $rowHeader$$6$$.style.webkitTransform = "translate3d(0, " + -$scrollTop$$5$$ + "px, 0)"
  }else {
    $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$getResources$().isRTLMode() ? "right" : "left", (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$7$$, -$scrollLeft$$5$$, $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$7$$, -$scrollTop$$5$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($colHeader$$4$$, -$scrollLeft$$5$$, $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$), 
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
D.$JSCompiler_StaticMethods_fillViewport$$ = function $$JSCompiler_StaticMethods_fillViewport$$$($JSCompiler_StaticMethods_fillViewport$self$$, $fetchStartRow$$inline_851_rows$$inline_809_scrollLeft$$7_threshold$$inline_823_viewportBottom$$2$$, $fetchSize$$inline_850_scrollTop$$7$$) {
  var $columns$$inline_824_fetchStartRow_indexToRemove$$inline_810_rowHeaderContent$$inline_833_rowHeaderContent$$inline_842_viewportRight$$2$$, $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$, $colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$;
  $columns$$inline_824_fetchStartRow_indexToRemove$$inline_810_rowHeaderContent$$inline_833_rowHeaderContent$$inline_842_viewportRight$$2$$ = $fetchStartRow$$inline_851_rows$$inline_809_scrollLeft$$7_threshold$$inline_823_viewportBottom$$2$$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$);
  if(!$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnHeaderFetch$ && ($columns$$inline_824_fetchStartRow_indexToRemove$$inline_810_rowHeaderContent$$inline_833_rowHeaderContent$$inline_842_viewportRight$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ || $columns$$inline_824_fetchStartRow_indexToRemove$$inline_810_rowHeaderContent$$inline_833_rowHeaderContent$$inline_842_viewportRight$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ && 
  (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, "column"))) {
    if($JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("column", $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$) {
      var $column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$, $column$$inline_815_height$$inline_838_left$$inline_793_row$$inline_829_width$$inline_805$$, $i$$inline_795_prevLeft$$inline_816$$, $header$$inline_797$$, $prevLeft$$inline_798$$;
      $colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$.firstChild;
      $column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$ = $colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$.childNodes;
      for($i$$inline_795_prevLeft$$inline_816$$ = $column$$inline_815_height$$inline_838_left$$inline_793_row$$inline_829_width$$inline_805$$ = $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$ = 0;$i$$inline_795_prevLeft$$inline_816$$ < $column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$.length;$i$$inline_795_prevLeft$$inline_816$$ += 
      1) {
        if($header$$inline_797$$ = $column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$[$i$$inline_795_prevLeft$$inline_816$$], $prevLeft$$inline_798$$ = $column$$inline_815_height$$inline_838_left$$inline_793_row$$inline_829_width$$inline_805$$, $column$$inline_815_height$$inline_838_left$$inline_793_row$$inline_829_width$$inline_805$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($header$$inline_797$$, "left"), 
        $column$$inline_815_height$$inline_838_left$$inline_793_row$$inline_829_width$$inline_805$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ - 0) {
          $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$ = $i$$inline_795_prevLeft$$inline_816$$ - 1;
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ += $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$;
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeaderPixel$ = $prevLeft$$inline_798$$;
          break
        }
      }
      for($column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$ = 0;$column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$ < $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$;$column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$ += 
      1) {
        $colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$.removeChild($colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$.firstChild), $JSCompiler_StaticMethods_fillViewport$self$$.$m_cachedColumnWidth$.splice(0, 1)
      }
      $JSCompiler_StaticMethods_fillViewport$self$$.$m_cachedColumnWidthStartIndex$ += $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$
    }
  }else {
    if($fetchStartRow$$inline_851_rows$$inline_809_scrollLeft$$7_threshold$$inline_823_viewportBottom$$2$$ < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeaderPixel$ && ($column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, 
    "column")), $colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ - $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$), $JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("column", 
    $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$, $colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && ($colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$.firstChild, $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$ = 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getViewportWidth$$)($JSCompiler_StaticMethods_fillViewport$self$$) + 0, !($JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ <= $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$)))) {
      $column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$ = $colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$.lastChild;
      for($column$$inline_815_height$$inline_838_left$$inline_793_row$$inline_829_width$$inline_805$$ = $column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$.offsetWidth;$JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ + $column$$inline_815_height$$inline_838_left$$inline_793_row$$inline_829_width$$inline_805$$ > $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$;) {
        $colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$.removeChild($column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$), $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ -= $column$$inline_815_height$$inline_838_left$$inline_793_row$$inline_829_width$$inline_805$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ -= 
        1, $column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$ = $colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$.lastChild, $column$$inline_815_height$$inline_838_left$$inline_793_row$$inline_829_width$$inline_805$$ = $column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$.offsetWidth
      }
    }
  }
  if($columns$$inline_824_fetchStartRow_indexToRemove$$inline_810_rowHeaderContent$$inline_833_rowHeaderContent$$inline_842_viewportRight$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ || $columns$$inline_824_fetchStartRow_indexToRemove$$inline_810_rowHeaderContent$$inline_833_rowHeaderContent$$inline_842_viewportRight$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ && (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, 
  "column") && !$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnFetch$) {
    if($JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && ($fetchStartRow$$inline_851_rows$$inline_809_scrollLeft$$7_threshold$$inline_823_viewportBottom$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$.firstChild.childNodes, $colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$ = 
    $columns$$inline_824_fetchStartRow_indexToRemove$$inline_810_rowHeaderContent$$inline_833_rowHeaderContent$$inline_842_viewportRight$$2$$ = 0, !(2 > $fetchStartRow$$inline_851_rows$$inline_809_scrollLeft$$7_threshold$$inline_823_viewportBottom$$2$$.length))) {
      $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$ = $fetchStartRow$$inline_851_rows$$inline_809_scrollLeft$$7_threshold$$inline_823_viewportBottom$$2$$[1].childNodes;
      for($column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$ = 0;$column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$ < $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$.length;$column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$ += 
      1) {
        if($column$$inline_815_height$$inline_838_left$$inline_793_row$$inline_829_width$$inline_805$$ = $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$[$column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$], $i$$inline_795_prevLeft$$inline_816$$ = $colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$, 
        $colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($column$$inline_815_height$$inline_838_left$$inline_793_row$$inline_829_width$$inline_805$$, "left"), $colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ - 
        0) {
          $columns$$inline_824_fetchStartRow_indexToRemove$$inline_810_rowHeaderContent$$inline_833_rowHeaderContent$$inline_842_viewportRight$$2$$ = $column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$ - 1;
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ += $columns$$inline_824_fetchStartRow_indexToRemove$$inline_810_rowHeaderContent$$inline_833_rowHeaderContent$$inline_842_viewportRight$$2$$;
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColPixel$ = $i$$inline_795_prevLeft$$inline_816$$;
          break
        }
      }
      for($colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$ = 1;$colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$ < $fetchStartRow$$inline_851_rows$$inline_809_scrollLeft$$7_threshold$$inline_823_viewportBottom$$2$$.length;$colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$ += 
      1) {
        $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$ = $fetchStartRow$$inline_851_rows$$inline_809_scrollLeft$$7_threshold$$inline_823_viewportBottom$$2$$[$colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$];
        for($column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$ = 0;$column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$ < $columns$$inline_824_fetchStartRow_indexToRemove$$inline_810_rowHeaderContent$$inline_833_rowHeaderContent$$inline_842_viewportRight$$2$$;$column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$ += 
        1) {
          $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$.removeChild($column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$.firstChild)
        }
      }
    }
  }else {
    if($fetchStartRow$$inline_851_rows$$inline_809_scrollLeft$$7_threshold$$inline_823_viewportBottom$$2$$ < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColPixel$ && ($column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, 
    "column")), $colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ - $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$), $JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$, $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$, $colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$), 
    !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && ($colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$.firstChild.childNodes, 
    $fetchStartRow$$inline_851_rows$$inline_809_scrollLeft$$7_threshold$$inline_823_viewportBottom$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getViewportWidth$$)($JSCompiler_StaticMethods_fillViewport$self$$) + 0, !($JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ <= $fetchStartRow$$inline_851_rows$$inline_809_scrollLeft$$7_threshold$$inline_823_viewportBottom$$2$$)))) {
      $columns$$inline_824_fetchStartRow_indexToRemove$$inline_810_rowHeaderContent$$inline_833_rowHeaderContent$$inline_842_viewportRight$$2$$ = $colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$[1];
      $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$ = $columns$$inline_824_fetchStartRow_indexToRemove$$inline_810_rowHeaderContent$$inline_833_rowHeaderContent$$inline_842_viewportRight$$2$$.lastChild;
      for($column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$ = $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$.offsetWidth;$JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ + $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$ > 
      $fetchStartRow$$inline_851_rows$$inline_809_scrollLeft$$7_threshold$$inline_823_viewportBottom$$2$$;) {
        for($column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$ = 1;$column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$ < $colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$.length;$column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$ += 
        1) {
          $column$$inline_815_height$$inline_838_left$$inline_793_row$$inline_829_width$$inline_805$$ = $colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$[$column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$], $column$$inline_815_height$$inline_838_left$$inline_793_row$$inline_829_width$$inline_805$$.removeChild($column$$inline_815_height$$inline_838_left$$inline_793_row$$inline_829_width$$inline_805$$.lastChild)
        }
        $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ -= $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$;
        $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ -= 1;
        $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$ = $columns$$inline_824_fetchStartRow_indexToRemove$$inline_810_rowHeaderContent$$inline_833_rowHeaderContent$$inline_842_viewportRight$$2$$.lastChild;
        $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$ = $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$.offsetWidth
      }
    }
  }
  $fetchStartRow$$inline_851_rows$$inline_809_scrollLeft$$7_threshold$$inline_823_viewportBottom$$2$$ = $fetchSize$$inline_850_scrollTop$$7$$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$);
  if(!$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopRowHeaderFetch$ && ($fetchStartRow$$inline_851_rows$$inline_809_scrollLeft$$7_threshold$$inline_823_viewportBottom$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ || $fetchStartRow$$inline_851_rows$$inline_809_scrollLeft$$7_threshold$$inline_823_viewportBottom$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ && (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, 
  "row"))) {
    if($JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("row", $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && 
    ($columns$$inline_824_fetchStartRow_indexToRemove$$inline_810_rowHeaderContent$$inline_833_rowHeaderContent$$inline_842_viewportRight$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$.firstChild, $colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$ = $columns$$inline_824_fetchStartRow_indexToRemove$$inline_810_rowHeaderContent$$inline_833_rowHeaderContent$$inline_842_viewportRight$$2$$.firstChild, 
    $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$), !($column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$ >= 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollTop$ - 0))) {
      $column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$ = $colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$.nextSibling;
      for($column$$inline_815_height$$inline_838_left$$inline_793_row$$inline_829_width$$inline_805$$ = $column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$.offsetHeight;$column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$ + $column$$inline_815_height$$inline_838_left$$inline_793_row$$inline_829_width$$inline_805$$ < 
      $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollTop$ - 0;) {
        $columns$$inline_824_fetchStartRow_indexToRemove$$inline_810_rowHeaderContent$$inline_833_rowHeaderContent$$inline_842_viewportRight$$2$$.removeChild($column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$), $JSCompiler_StaticMethods_fillViewport$self$$.$m_cachedRowHeight$.splice(0, 1), $JSCompiler_StaticMethods_fillViewport$self$$.$m_cachedRowHeightStartIndex$ -= 1, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeaderPixel$ += 
        $column$$inline_815_height$$inline_838_left$$inline_793_row$$inline_829_width$$inline_805$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ += 1, $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$ += $column$$inline_815_height$$inline_838_left$$inline_793_row$$inline_829_width$$inline_805$$, $column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$ = 
        $colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$.nextSibling, $column$$inline_815_height$$inline_838_left$$inline_793_row$$inline_829_width$$inline_805$$ = $column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$.offsetHeight
      }
      (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$, $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$)
    }
  }else {
    if(window.Math.max(0, $fetchSize$$inline_850_scrollTop$$7$$ - 0) < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeaderPixel$) {
      if(0 == $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$) {
        return
      }
      $columns$$inline_824_fetchStartRow_indexToRemove$$inline_810_rowHeaderContent$$inline_833_rowHeaderContent$$inline_842_viewportRight$$2$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, "row"));
      $colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ - $columns$$inline_824_fetchStartRow_indexToRemove$$inline_810_rowHeaderContent$$inline_833_rowHeaderContent$$inline_842_viewportRight$$2$$);
      $JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("row", $columns$$inline_824_fetchStartRow_indexToRemove$$inline_810_rowHeaderContent$$inline_833_rowHeaderContent$$inline_842_viewportRight$$2$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$, $colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$);
      if(!(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && ($columns$$inline_824_fetchStartRow_indexToRemove$$inline_810_rowHeaderContent$$inline_833_rowHeaderContent$$inline_842_viewportRight$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$.firstChild, 
      $colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getViewportHeight$$)($JSCompiler_StaticMethods_fillViewport$self$$) + 0, !($JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ <= $colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$))) {
        $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$ = $columns$$inline_824_fetchStartRow_indexToRemove$$inline_810_rowHeaderContent$$inline_833_rowHeaderContent$$inline_842_viewportRight$$2$$.lastChild;
        for($column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$ = $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$.offsetHeight;$JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ + $column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$ > 
        $colHeaderContent$$inline_790_colHeaderContent$$inline_802_fetchSize$$1_j$$inline_817_left$$inline_811_resizer$$inline_834_rows$$inline_827_threshold$$inline_843$$;) {
          $columns$$inline_824_fetchStartRow_indexToRemove$$inline_810_rowHeaderContent$$inline_833_rowHeaderContent$$inline_842_viewportRight$$2$$.removeChild($column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$), $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ -= $column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$, 
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ -= 1, $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$ = $columns$$inline_824_fetchStartRow_indexToRemove$$inline_810_rowHeaderContent$$inline_833_rowHeaderContent$$inline_842_viewportRight$$2$$.lastChild, $column$$inline_804_header$$inline_837_headers$$inline_791_height$$inline_845_i$$inline_814_j$$inline_796_j$$inline_828_k$$inline_819$$ = 
          $column$$inline_825_columns$$inline_813_fetchStartCol_indexToRemove$$inline_792_resizerHeight$$inline_835_row$$inline_818_row$$inline_844_threshold$$inline_803_width$$inline_826$$.offsetHeight
        }
      }
    }
  }
  $fetchStartRow$$inline_851_rows$$inline_809_scrollLeft$$7_threshold$$inline_823_viewportBottom$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowPixel$ || $fetchStartRow$$inline_851_rows$$inline_809_scrollLeft$$7_threshold$$inline_823_viewportBottom$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowPixel$ && (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, "row") && !$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopRowFetch$ ? 
  ($JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && 
  $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowsFromTop$$)($JSCompiler_StaticMethods_fillViewport$self$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$)) : window.Math.max(0, $fetchSize$$inline_850_scrollTop$$7$$ - 0) < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowPixel$ && 0 != $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ && 
  ($fetchStartRow$$inline_851_rows$$inline_809_scrollLeft$$7_threshold$$inline_823_viewportBottom$$2$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, "row")), $fetchSize$$inline_850_scrollTop$$7$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ - $fetchStartRow$$inline_851_rows$$inline_809_scrollLeft$$7_threshold$$inline_823_viewportBottom$$2$$), 
  $JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $fetchStartRow$$inline_851_rows$$inline_809_scrollLeft$$7_threshold$$inline_823_viewportBottom$$2$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$, $fetchSize$$inline_850_scrollTop$$7$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && 
  $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowsFromBottom$$)($JSCompiler_StaticMethods_fillViewport$self$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$))
};
D.$JSCompiler_StaticMethods_removeRowsFromTop$$ = function $$JSCompiler_StaticMethods_removeRowsFromTop$$$($JSCompiler_StaticMethods_removeRowsFromTop$self$$, $databody$$10$$) {
  var $databodyContent$$6$$, $resizer$$3$$, $resizerHeight$$1$$, $row$$9$$, $height$$18$$;
  $databodyContent$$6$$ = $databody$$10$$.firstChild;
  $resizer$$3$$ = $databodyContent$$6$$.firstChild;
  $resizerHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($resizer$$3$$);
  if(!($resizerHeight$$1$$ >= $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_currentScrollTop$ - 0)) {
    $row$$9$$ = $resizer$$3$$.nextSibling;
    for($height$$18$$ = $row$$9$$.offsetHeight;$resizerHeight$$1$$ + $height$$18$$ < $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_currentScrollTop$ - 0;) {
      $databodyContent$$6$$.removeChild($row$$9$$);
      $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_startRowPixel$ += $height$$18$$;
      $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_startRow$ += 1;
      $resizerHeight$$1$$ += $height$$18$$;
      $row$$9$$ = $resizer$$3$$.nextSibling;
      if($row$$9$$ == D.$JSCompiler_alias_NULL$$) {
        break
      }
      $height$$18$$ = $row$$9$$.offsetHeight
    }
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($resizer$$3$$, $resizerHeight$$1$$)
  }
};
D.$JSCompiler_StaticMethods_removeRowsFromBottom$$ = function $$JSCompiler_StaticMethods_removeRowsFromBottom$$$($JSCompiler_StaticMethods_removeRowsFromBottom$self$$, $databody$$11$$) {
  var $databodyContent$$7$$, $threshold$$3$$, $row$$11$$, $height$$20$$;
  $databodyContent$$7$$ = $databody$$11$$.firstChild;
  $threshold$$3$$ = $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getViewportHeight$$)($JSCompiler_StaticMethods_removeRowsFromBottom$self$$) + 0;
  if(!($JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ > $threshold$$3$$)) {
    $row$$11$$ = $databodyContent$$7$$.lastChild;
    for($height$$20$$ = $row$$11$$.offsetHeight;$JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ + $height$$20$$ > $threshold$$3$$;) {
      $databodyContent$$7$$.removeChild($row$$11$$), $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ -= $height$$20$$, $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRow$ -= 1, $row$$11$$ = $databodyContent$$7$$.lastChild, $height$$20$$ = $row$$11$$.offsetHeight
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
D.$DvtDataGrid$$.prototype.$handleContextMenuReturn$ = function $$DvtDataGrid$$$$$handleContextMenuReturn$$($event$$7$$, $direction$$4_id$$3$$, $value$$48$$) {
  var $target$$41$$, $cell$$1$$;
  $target$$41$$ = $event$$7$$.target;
  $cell$$1$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $target$$41$$);
  $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("resizeHeight") ? (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && ($target$$41$$ = $cell$$1$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $cell$$1$$, "row").firstChild : (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $target$$41$$), (0,D.$JSCompiler_StaticMethods_handleContextMenuResize$$)(this, $target$$41$$, "resizeHeight", $value$$48$$)) : $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("resizeWidth") ? 
  (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && ($target$$41$$ = $cell$$1$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $cell$$1$$, "column") : (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $target$$41$$), (0,D.$JSCompiler_StaticMethods_handleContextMenuResize$$)(this, $target$$41$$, "resizeWidth", $value$$48$$)) : $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("sortColAsc") || $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("sortColDsc") ? 
  ($direction$$4_id$$3$$ = $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("sortColAsc") ? "ascending" : "descending", $cell$$1$$ != D.$JSCompiler_alias_NULL$$ ? ($target$$41$$ = (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $cell$$1$$, "column"), (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $target$$41$$) && $target$$41$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)(this, $event$$7$$, $target$$41$$, $direction$$4_id$$3$$)) : 
  (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $target$$41$$) && (0,D.$JSCompiler_StaticMethods__handleHeaderSort$$)(this, $event$$7$$, $direction$$4_id$$3$$)) : $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("sortRowAsc") || $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("sortRowDsc") ? ($direction$$4_id$$3$$ = $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("sortRowAsc") ? "ascending" : "descending", $cell$$1$$ != D.$JSCompiler_alias_NULL$$ ? 
  ($target$$41$$ = (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $cell$$1$$, "row"), (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $target$$41$$) && $target$$41$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)(this, $event$$7$$, $target$$41$$, $direction$$4_id$$3$$)) : (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $target$$41$$) && (0,D.$JSCompiler_StaticMethods__handleHeaderSort$$)(this, $event$$7$$, $direction$$4_id$$3$$)) : 
  $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("cut") ? (0,D.$JSCompiler_StaticMethods__handleCut$$)(this, $event$$7$$) : $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("paste") && (0,D.$JSCompiler_StaticMethods__handlePaste$$)(this, $event$$7$$)
};
D.$DvtDataGrid$$.prototype.handleContextMenuReturn = D.$DvtDataGrid$$.prototype.$handleContextMenuReturn$;
D.$JSCompiler_StaticMethods__isDOMElementSortable$$ = function $$JSCompiler_StaticMethods__isDOMElementSortable$$$($JSCompiler_StaticMethods__isDOMElementSortable$self$$, $element$$6$$) {
  var $header$$5$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods__isDOMElementSortable$self$$, $element$$6$$);
  return $header$$5$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_FALSE$$ : "true" == $header$$5$$.getAttribute($JSCompiler_StaticMethods__isDOMElementSortable$self$$.$getResources$().getMappedAttribute("sortable"))
};
D.$JSCompiler_StaticMethods__isSelectionEnabled$$ = function $$JSCompiler_StaticMethods__isSelectionEnabled$$$($JSCompiler_StaticMethods__isSelectionEnabled$self$$) {
  return"none" != (0,D.$JSCompiler_StaticMethods_getSelectionCardinality$$)($JSCompiler_StaticMethods__isSelectionEnabled$self$$.$m_options$)
};
D.$JSCompiler_StaticMethods_isMultipleSelection$$ = function $$JSCompiler_StaticMethods_isMultipleSelection$$$($JSCompiler_StaticMethods_isMultipleSelection$self$$) {
  return"multiple" == (0,D.$JSCompiler_StaticMethods_getSelectionCardinality$$)($JSCompiler_StaticMethods_isMultipleSelection$self$$.$m_options$)
};
D.$JSCompiler_StaticMethods_isResizeEnabled$$ = function $$JSCompiler_StaticMethods_isResizeEnabled$$$($JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$) {
  var $row$$12$$ = (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$.$m_options$, "row");
  $JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$ = (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$.$m_options$, "column");
  return"disable" !== $row$$12$$.width || "disable" !== $row$$12$$.height || "disable" !== $JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$.width || "disable" !== $JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$.height
};
D.$JSCompiler_StaticMethods__isHeaderResizeEnabled$$ = function $$JSCompiler_StaticMethods__isHeaderResizeEnabled$$$($JSCompiler_StaticMethods__isHeaderResizeEnabled$self$$, $axis$$14$$, $headerContext$$4$$) {
  var $resizable$$ = (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods__isHeaderResizeEnabled$self$$.$m_options$, $axis$$14$$, $headerContext$$4$$);
  return"column" == $axis$$14$$ ? "function" == typeof $resizable$$.width ? "enable" == $resizable$$.width.call($JSCompiler_StaticMethods__isHeaderResizeEnabled$self$$, $headerContext$$4$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$ : "enable" == $resizable$$.width ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$ : "row" == $axis$$14$$ ? "function" == typeof $resizable$$.height ? "enable" == $resizable$$.height.call($JSCompiler_StaticMethods__isHeaderResizeEnabled$self$$, 
  $headerContext$$4$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$ : "enable" == $resizable$$.height ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataGrid$$.prototype;
D.$JSCompiler_prototypeAlias$$.$handleMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleMouseMove$$($event$$8$$) {
  (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && this.$m_databodyDragState$ == D.$JSCompiler_alias_FALSE$$ && (0,D.$JSCompiler_StaticMethods_handleResize$$)(this, $event$$8$$)
};
D.$JSCompiler_prototypeAlias$$.$handleRowHeaderMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleRowHeaderMouseMove$$($event$$9$$) {
  this.$m_databodyMove$ && (0,D.$JSCompiler_StaticMethods__handleMove$$)(this, $event$$9$$)
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseDown$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseDown$$($event$$10$$) {
  var $header$$inline_873_row$$13$$;
  if(((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$10$$.target, this.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$10$$.target, this.getMappedStyle("sortdescending"))) && (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$10$$.target)) {
    $event$$10$$.preventDefault(), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($event$$10$$.target, this.getMappedStyle("selected"))
  }else {
    (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_handleResizeMouseDown$$)(this, $event$$10$$);
    $header$$inline_873_row$$13$$ = (0,D.$JSCompiler_StaticMethods_findRow$$)(this, $event$$10$$.target);
    !this.$m_isResizing$ && (0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)(this, $header$$inline_873_row$$13$$) && (this.$m_databodyMove$ = D.$JSCompiler_alias_TRUE$$, this.$m_currentX$ = $event$$10$$.pageX, this.$m_currentY$ = $event$$10$$.pageY);
    if(!this.$m_isResizing$) {
      var $index$$inline_872$$, $axis$$inline_874$$;
      $header$$inline_873_row$$13$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$10$$.target);
      $header$$inline_873_row$$13$$ != D.$JSCompiler_alias_NULL$$ && ($index$$inline_872$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellIndex$$)(this, $header$$inline_873_row$$13$$), $axis$$inline_874$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellAxis$$)(this, $header$$inline_873_row$$13$$));
      $index$$inline_872$$ != D.$JSCompiler_alias_NULL$$ && $index$$inline_872$$ != D.$JSCompiler_alias_VOID$$ && ("row" === $axis$$inline_874$$ ? (0,D.$JSCompiler_StaticMethods__focusRowHeader$$)(this, $index$$inline_872$$) : "column" === $axis$$inline_874$$ && (0,D.$JSCompiler_StaticMethods__focusColumnHeader$$)(this, $index$$inline_872$$))
    }
    this.$processed$ === D.$JSCompiler_alias_TRUE$$ && $event$$10$$.preventDefault()
  }
};
D.$JSCompiler_prototypeAlias$$.$handleMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleMouseUp$$($event$$11$$) {
  this.$m_databodyMove$ && this.$m_moveRow$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_FALSE$$) : (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_handleResizeMouseUp$$)(this, $event$$11$$);
  this.$m_databodyMove$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseOver$$($event$$12$$) {
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$12$$.target), this.getMappedStyle("hover"));
  if((0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$12$$.target)) {
    var $header$$inline_878$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$12$$.target);
    $header$$inline_878$$ && (0,D.$JSCompiler_StaticMethods__showOrHideSortIcon$$)(this, $header$$inline_878$$, D.$JSCompiler_alias_FALSE$$);
    ((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$12$$.target, this.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$12$$.target, this.getMappedStyle("sortdescending"))) && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($event$$12$$.target, this.getMappedStyle("hover"))
  }
  (0,D.$JSCompiler_StaticMethods__manageMoveCursor$$)(this, (0,D.$JSCompiler_StaticMethods_findRow$$)(this, $event$$12$$.target), D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseOut$$($event$$13$$) {
  (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$13$$.target), this.getMappedStyle("hover"));
  if((0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$13$$.target)) {
    var $header$$inline_882$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$13$$.target);
    ($header$$inline_882$$ == D.$JSCompiler_alias_NULL$$ || $event$$13$$.relatedTarget == D.$JSCompiler_alias_NULL$$ || $header$$inline_882$$ !== (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$13$$.relatedTarget)) && (0,D.$JSCompiler_StaticMethods__showOrHideSortIcon$$)(this, $header$$inline_882$$, D.$JSCompiler_alias_TRUE$$);
    if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$13$$.target, this.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$13$$.target, this.getMappedStyle("sortdescending"))) {
      (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($event$$13$$.target, this.getMappedStyle("hover")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($event$$13$$.target, this.getMappedStyle("selected"))
    }
  }
  (0,D.$JSCompiler_StaticMethods__manageMoveCursor$$)(this, (0,D.$JSCompiler_StaticMethods_findRow$$)(this, $event$$13$$.target), D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseUp$$($event$$14$$) {
  this.$m_databodyMove$ && this.$m_moveRow$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods__manageMoveCursor$$)(this, (0,D.$JSCompiler_StaticMethods_findRow$$)(this, $event$$14$$.target), D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderClick$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderClick$$($event$$15$$) {
  if(((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$15$$.target, this.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$15$$.target, this.getMappedStyle("sortdescending"))) && (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$15$$.target)) {
    (0,D.$JSCompiler_StaticMethods__handleHeaderSort$$)(this, $event$$15$$), $event$$15$$.preventDefault()
  }
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseDown$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseDown$$($event$$16$$) {
  (0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)(this, this.find($event$$16$$.target, "row")) && (this.$m_databodyMove$ = D.$JSCompiler_alias_TRUE$$, this.$m_currentX$ = $event$$16$$.pageX, this.$m_currentY$ = $event$$16$$.pageY);
  if((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this)) {
    (0,D.$JSCompiler_StaticMethods_handleDatabodyClickSelection$$)(this, $event$$16$$), (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this) && (this.$m_databodyDragState$ = D.$JSCompiler_alias_TRUE$$)
  }else {
    var $cell$$inline_886$$, $index$$inline_887$$;
    $cell$$inline_886$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$16$$.target);
    $cell$$inline_886$$ != D.$JSCompiler_alias_NULL$$ && ($index$$inline_887$$ = this.createIndex(this.$getRowIndex$($cell$$inline_886$$.parentNode), this.$getCellIndex$($cell$$inline_886$$)));
    $index$$inline_887$$ != D.$JSCompiler_alias_NULL$$ && $index$$inline_887$$ != D.$JSCompiler_alias_VOID$$ && ((0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, -1), this.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)(this, $index$$inline_887$$), this.$activeAndFocus$($index$$inline_887$$), (0,D.$JSCompiler_StaticMethods__fireActiveKeyChangeEvent$$)(this, $event$$16$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseOut$$($event$$17$$) {
  var $row$$14$$, $selectionMode$$;
  this.$m_databodyMove$ || ($selectionMode$$ = this.$m_options$.$getSelectionMode$(), $row$$14$$ = (0,D.$JSCompiler_StaticMethods_findRow$$)(this, $event$$17$$.target), "cell" === $selectionMode$$ ? (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$17$$.target), this.getMappedStyle("hover")) : "row" === $selectionMode$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($row$$14$$, this.getMappedStyle("hover")), (0,D.$JSCompiler_StaticMethods__manageMoveCursor$$)(this, 
  $row$$14$$))
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseOver$$($event$$18$$) {
  var $row$$15$$, $selectionMode$$1$$;
  this.$m_databodyMove$ || ($selectionMode$$1$$ = this.$m_options$.$getSelectionMode$(), $row$$15$$ = (0,D.$JSCompiler_StaticMethods_findRow$$)(this, $event$$18$$.target), "cell" === $selectionMode$$1$$ ? (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$18$$.target), this.getMappedStyle("hover")) : "row" === $selectionMode$$1$$ && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($row$$15$$, this.getMappedStyle("hover")), (0,D.$JSCompiler_StaticMethods__manageMoveCursor$$)(this, 
  $row$$15$$))
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseMove$$($event$$19$$) {
  if(this.$m_databodyMove$) {
    (0,D.$JSCompiler_StaticMethods__handleMove$$)(this, $event$$19$$)
  }else {
    if(this.$m_databodyDragState$) {
      var $cell$$inline_892_index$$inline_891$$, $clone$$inline_893$$;
      $cell$$inline_892_index$$inline_891$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$19$$.target);
      $clone$$inline_893$$ = this.$GetSelection$().slice(0);
      $cell$$inline_892_index$$inline_891$$ != D.$JSCompiler_alias_NULL$$ && ($cell$$inline_892_index$$inline_891$$ = {row:this.$getRowIndex$($cell$$inline_892_index$$inline_891$$.parentNode), column:this.$getCellIndex$($cell$$inline_892_index$$inline_891$$)}, (0,D.$JSCompiler_StaticMethods_extendSelection$$)(this, $cell$$inline_892_index$$inline_891$$));
      (0,D.$JSCompiler_StaticMethods__compareSelections$$)(this.$GetSelection$(), $clone$$inline_893$$) || this.$fireSelectionEvent$($event$$19$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseUp$$($event$$20$$) {
  this.$m_databodyDragState$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_databodyMove$ && this.$m_moveRow$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods__manageMoveCursor$$)(this, (0,D.$JSCompiler_StaticMethods_findRow$$)(this, $event$$20$$.target))
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyKeyDown$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyKeyDown$$($event$$21$$) {
  var $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$;
  if(this.$m_active$ == D.$JSCompiler_alias_NULL$$ && this.$m_activeHeader$ == D.$JSCompiler_alias_NULL$$) {
    9 === $event$$21$$.keyCode && ($JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = this.createIndex(0, 0), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? this.$selectAndFocus$($JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$) : 
    this.$activeAndFocus$($JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$), $event$$21$$.preventDefault())
  }else {
    if(!(9 === $event$$21$$.keyCode && (!(0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) || "actionable" != this.$m_keyMode$))) {
      if(this.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$) {
        if(this.$m_activeHeader$.elem != window.document.activeElement) {
          return
        }
        var $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$, $JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$;
        $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = D.$JSCompiler_alias_FALSE$$;
        if(this.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$) {
          if($axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ = $event$$21$$.keyCode, (0,D.$JSCompiler_StaticMethods_isArrowKey$$)($axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$)) {
            $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$;
            var $elem$$inline_8871_shiftKey$$inline_907$$, $processed$$inline_8873$$ = D.$JSCompiler_alias_FALSE$$;
            if((0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this)) {
              this.$getResources$().isRTLMode() && (37 == $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ ? $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = 
              39 : 39 == $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ && ($JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = 
              37));
              $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ = this.$m_activeHeader$.axis;
              $JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$ = this.$m_activeHeader$.index;
              $elem$$inline_8871_shiftKey$$inline_907$$ = this.$m_activeHeader$.elem;
              switch($JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$) {
                case 37:
                  "column" === $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ && 0 < $JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$ && ((0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, $JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$ - 
                  1, $elem$$inline_8871_shiftKey$$inline_907$$.previousSibling), (0,D.$JSCompiler_StaticMethods__scrollToActiveHeader$$)(this), $processed$$inline_8873$$ = D.$JSCompiler_alias_TRUE$$);
                  break;
                case 39:
                  if("row" === $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$) {
                    (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, -1), this.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$, $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = this.createIndex($JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$, 0), 
                    (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? this.$selectAndFocus$($JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$) : this.$activeAndFocus$($JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$), 
                    $processed$$inline_8873$$ = D.$JSCompiler_alias_TRUE$$
                  }else {
                    if(!($JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$ + 1 >= this.$m_endColHeader$ && this.$m_stopColumnHeaderFetch$) && ((0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") || $JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$ < this.$m_dataSource$.getCount("column"))) {
                      (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, $JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$ + 1, $elem$$inline_8871_shiftKey$$inline_907$$.nextSibling), (0,D.$JSCompiler_StaticMethods__scrollToActiveHeader$$)(this), $processed$$inline_8873$$ = D.$JSCompiler_alias_TRUE$$
                    }
                  }
                  break;
                case 38:
                  "row" === $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ && 0 < $JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$ && ((0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, $JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$ - 
                  1, $elem$$inline_8871_shiftKey$$inline_907$$.previousSibling), (0,D.$JSCompiler_StaticMethods__scrollToActiveHeader$$)(this), $processed$$inline_8873$$ = D.$JSCompiler_alias_TRUE$$);
                  break;
                case 40:
                  if("column" === $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$) {
                    (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, -1), this.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$, $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = this.createIndex(0, $JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$), 
                    (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? this.$selectAndFocus$($JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$) : this.$activeAndFocus$($JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$), 
                    $processed$$inline_8873$$ = D.$JSCompiler_alias_TRUE$$
                  }else {
                    if(!($JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$ + 1 >= this.$m_endRowHeader$ && this.$m_stopRowHeaderFetch$) && ((0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") || $JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$ + 1 < this.$m_dataSource$.getCount("row"))) {
                      (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, $JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$ + 1, $elem$$inline_8871_shiftKey$$inline_907$$.nextSibling), (0,D.$JSCompiler_StaticMethods__scrollToActiveHeader$$)(this), $processed$$inline_8873$$ = D.$JSCompiler_alias_TRUE$$
                    }
                  }
              }
              $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = $processed$$inline_8873$$
            }else {
              $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = D.$JSCompiler_alias_TRUE$$
            }
          }else {
            32 == $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ ? (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this) && ($axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ = 
            this.$m_activeHeader$.axis, $JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$ = this.$m_activeHeader$.index, "row" === $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ ? ((0,D.$JSCompiler_StaticMethods__selectEntireRow$$)(this, $JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$, 
            $event$$21$$), $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = D.$JSCompiler_alias_TRUE$$) : "column" === $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ && 
            "cell" == this.$m_options$.$getSelectionMode$() && ((0,D.$JSCompiler_StaticMethods__selectEntireColumn$$)(this, $JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$, $event$$21$$), $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = D.$JSCompiler_alias_TRUE$$)) : 
            13 == $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ ? ($axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ = this.$m_activeHeader$.elem, "true" == $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$.getAttribute(this.$getResources$().getMappedAttribute("sortable")) && 
            ($JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$.getAttribute(this.$getResources$().getMappedAttribute("sortDir")), 
            (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)(this, $event$$21$$, $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$, $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ == 
            D.$JSCompiler_alias_NULL$$ || "descending" === $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ ? "ascending" : "descending"), $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = 
            D.$JSCompiler_alias_TRUE$$)) : $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = (0,D.$JSCompiler_StaticMethods__handleCutPasteKeydown$$)(this, $event$$21$$)
          }
        }else {
          $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = D.$JSCompiler_alias_VOID$$
        }
      }else {
        $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)(this, this.createRange(this.$m_active$));
        if($JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ == D.$JSCompiler_alias_NULL$$ || $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$[0] != 
        (0,D.$JSCompiler_StaticMethods_findCell$$)(this, window.document.activeElement)) {
          return
        }
        $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = (0,D.$JSCompiler_StaticMethods__handleCutPasteKeydown$$)(this, $event$$21$$);
        if(!$JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$) {
          if((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this)) {
            if($JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = D.$JSCompiler_alias_FALSE$$, $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ = $event$$21$$.keyCode, 
            "actionable" == this.$m_keyMode$) {
              27 == $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ && ((0,D.$JSCompiler_StaticMethods_setActionableMode$$)(this, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_highlightActive$$)(this), $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = 
              D.$JSCompiler_alias_TRUE$$);
              if($JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$ = (0,D.$JSCompiler_StaticMethods_isArrowKey$$)($axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$)) {
                $JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$21$$.target), $JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$ = !(0 < (0,D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$)($JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$).length)
              }
              if($JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$) {
                (0,D.$JSCompiler_StaticMethods_setActionableMode$$)(this, D.$JSCompiler_alias_FALSE$$), $JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$21$$), $elem$$inline_8871_shiftKey$$inline_907$$ = $event$$21$$.shiftKey, (0,D.$JSCompiler_StaticMethods__updateStateInfo$$)(this), $JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$ || 
                ($JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = (0,D.$JSCompiler_StaticMethods_handleCellArrowKeys$$)(this, $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$, 
                $elem$$inline_8871_shiftKey$$inline_907$$ && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this))), $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ && (this.$fireSelectionEvent$($event$$21$$), (!$elem$$inline_8871_shiftKey$$inline_907$$ || !(0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this)) && 
                (0,D.$JSCompiler_StaticMethods__fireActiveKeyChangeEvent$$)(this, $event$$21$$))
              }else {
                if(9 === $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ || 13 === $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$) {
                  if($elem$$inline_8871_shiftKey$$inline_907$$ = $event$$21$$.shiftKey, $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ = 9 === $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ ? 
                  $elem$$inline_8871_shiftKey$$inline_907$$ ? 37 : 39 : $elem$$inline_8871_shiftKey$$inline_907$$ ? 38 : 40, (0,D.$JSCompiler_StaticMethods__updateStateInfo$$)(this), $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = (0,D.$JSCompiler_StaticMethods_handleCellArrowKeys$$)(this, $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$, 
                  D.$JSCompiler_alias_FALSE$$)) {
                    this.$fireSelectionEvent$($event$$21$$), (0,D.$JSCompiler_StaticMethods__fireActiveKeyChangeEvent$$)(this, $event$$21$$)
                  }
                }
              }
            }else {
              if(113 == $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ || 13 == $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$) {
                (0,D.$JSCompiler_StaticMethods_setActionableMode$$)(this, D.$JSCompiler_alias_TRUE$$), $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$21$$.target), $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ = 
                (0,D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$)($axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$), 0 < $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$.length && 
                $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$[0].focus()
              }else {
                if((0,D.$JSCompiler_StaticMethods_isArrowKey$$)($axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$) || 36 == $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ || 35 == $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ || 
                33 == $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ || 34 == $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$) {
                  $JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$21$$), $elem$$inline_8871_shiftKey$$inline_907$$ = $event$$21$$.shiftKey, (0,D.$JSCompiler_StaticMethods__updateStateInfo$$)(this), $JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$ || ($JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = 
                  (0,D.$JSCompiler_StaticMethods_handleCellArrowKeys$$)(this, $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$, $elem$$inline_8871_shiftKey$$inline_907$$ && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this))), $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ && 
                  (this.$fireSelectionEvent$($event$$21$$), (!$elem$$inline_8871_shiftKey$$inline_907$$ || !(0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this)) && (0,D.$JSCompiler_StaticMethods__fireActiveKeyChangeEvent$$)(this, $event$$21$$))
                }else {
                  if($event$$21$$.shiftKey && 119 == $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$) {
                    this.$m_discontiguousSelection$ = !this.$m_discontiguousSelection$
                  }else {
                    if(32 == $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ && ($JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$21$$), $elem$$inline_8871_shiftKey$$inline_907$$ = $event$$21$$.shiftKey, "cell" == this.$m_options$.$getSelectionMode$() && 
                    (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this) && ($elem$$inline_8871_shiftKey$$inline_907$$ && !$JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$ || $JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$))) {
                      $JSCompiler_temp$$8684_ctrlKey$$inline_906_elem$$inline_8881_index$$inline_8870_index$$inline_898$$ ? ($JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = this.$m_active$.column, (0,D.$JSCompiler_StaticMethods__selectEntireColumn$$)(this, $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$, 
                      $event$$21$$)) : ($JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = this.$m_active$.row, (0,D.$JSCompiler_StaticMethods__selectEntireRow$$)(this, $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$, 
                      $event$$21$$)), $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = D.$JSCompiler_alias_TRUE$$
                    }
                  }
                }
              }
            }
          }else {
            $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = $event$$21$$.target, $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ = $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$.tagName, 
            "INPUT" === $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ || "TEXTAREA" === $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ || "SELECT" === $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ || 
            "BUTTON" === $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ || "A" === $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ || $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$.getAttribute("tabIndex") != 
            D.$JSCompiler_alias_NULL$$ && 0 <= (0,window.parseInt)($JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$.getAttribute("tabIndex")) && (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$) != 
            $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ ? $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = 
            D.$JSCompiler_alias_VOID$$ : ($JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = $event$$21$$.keyCode, ((0,D.$JSCompiler_StaticMethods_isArrowKey$$)($JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$) || 
            36 == $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ || 35 == $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ || 
            33 == $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ || 34 == $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$) && 
            !(0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$21$$) ? ((0,D.$JSCompiler_StaticMethods__fireActiveKeyChangeEvent$$)(this, $event$$21$$), $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = (0,D.$JSCompiler_StaticMethods_handleCellArrowKeys$$)(this, $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$, 
            D.$JSCompiler_alias_FALSE$$)) : $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ = D.$JSCompiler_alias_FALSE$$)
          }
        }
        $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$21$$.target);
        $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ != D.$JSCompiler_alias_NULL$$ && ($axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ = $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$.parentNode, 
        $axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$ = this.$_getKey$($axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$), this.fireEvent("keydown", {event:$event$$21$$, ui:{rowKey:$axis$$inline_8869_axis$$inline_897_cell$$inline_918_elem$$inline_8884_elem$$inline_899_elems$$inline_8885_keyCode$$inline_900_keyCode$$inline_905_row$$inline_919_rowKey$$inline_920_tagName$$inline_8889$$}}))
      }
      $JSCompiler_temp$$296_cell$$2_column$$inline_908_direction$$inline_8878_elem$$inline_8888_keyCode$$inline_8868_keyCode$$inline_914_newCellIndex_newCellIndex$$inline_8872_processed$$1_processed$$inline_901_processed$$inline_910_row$$inline_909$$ === D.$JSCompiler_alias_TRUE$$ && $event$$21$$.preventDefault()
    }
  }
};
D.$JSCompiler_StaticMethods_findPos$$ = function $$JSCompiler_StaticMethods_findPos$$$($JSCompiler_StaticMethods_findPos$self$$, $element$$7$$) {
  var $parentPos$$, $cs$$inline_923_element$$inline_922_transform_transform$$inline_924_transformX$$inline_926$$;
  if($element$$7$$) {
    $parentPos$$ = (0,D.$JSCompiler_StaticMethods_findPos$$)($JSCompiler_StaticMethods_findPos$self$$, $element$$7$$.offsetParent);
    $cs$$inline_923_element$$inline_922_transform_transform$$inline_924_transformX$$inline_926$$ = $element$$7$$.parentNode;
    var $matrixArray$$inline_925_transformZ$$inline_928$$, $transformY$$inline_927$$;
    $cs$$inline_923_element$$inline_922_transform_transform$$inline_924_transformX$$inline_926$$ ? ($cs$$inline_923_element$$inline_922_transform_transform$$inline_924_transformX$$inline_926$$ = window.document.defaultView.getComputedStyle($cs$$inline_923_element$$inline_922_transform_transform$$inline_924_transformX$$inline_926$$, D.$JSCompiler_alias_NULL$$), $cs$$inline_923_element$$inline_922_transform_transform$$inline_924_transformX$$inline_926$$ = $cs$$inline_923_element$$inline_922_transform_transform$$inline_924_transformX$$inline_926$$.getPropertyValue("-webkit-transform") || 
    $cs$$inline_923_element$$inline_922_transform_transform$$inline_924_transformX$$inline_926$$.getPropertyValue("-moz-transform") || $cs$$inline_923_element$$inline_922_transform_transform$$inline_924_transformX$$inline_926$$.getPropertyValue("-ms-transform") || $cs$$inline_923_element$$inline_922_transform_transform$$inline_924_transformX$$inline_926$$.getPropertyValue("-o-transform") || $cs$$inline_923_element$$inline_922_transform_transform$$inline_924_transformX$$inline_926$$.getPropertyValue("transform"), 
    $matrixArray$$inline_925_transformZ$$inline_928$$ = $cs$$inline_923_element$$inline_922_transform_transform$$inline_924_transformX$$inline_926$$.substr(7, $cs$$inline_923_element$$inline_922_transform_transform$$inline_924_transformX$$inline_926$$.length - 8).split(", "), $cs$$inline_923_element$$inline_922_transform_transform$$inline_924_transformX$$inline_926$$ = (0,window.isNaN)((0,window.parseInt)($matrixArray$$inline_925_transformZ$$inline_928$$[4], 10)) ? 0 : (0,window.parseInt)($matrixArray$$inline_925_transformZ$$inline_928$$[4], 
    10), $transformY$$inline_927$$ = (0,window.isNaN)((0,window.parseInt)($matrixArray$$inline_925_transformZ$$inline_928$$[5], 10)) ? 0 : (0,window.parseInt)($matrixArray$$inline_925_transformZ$$inline_928$$[5], 10), $matrixArray$$inline_925_transformZ$$inline_928$$ = (0,window.isNaN)((0,window.parseInt)($matrixArray$$inline_925_transformZ$$inline_928$$[6], 10)) ? 0 : (0,window.parseInt)($matrixArray$$inline_925_transformZ$$inline_928$$[6], 10), $cs$$inline_923_element$$inline_922_transform_transform$$inline_924_transformX$$inline_926$$ = 
    [$cs$$inline_923_element$$inline_922_transform_transform$$inline_924_transformX$$inline_926$$, $transformY$$inline_927$$, $matrixArray$$inline_925_transformZ$$inline_928$$]) : $cs$$inline_923_element$$inline_922_transform_transform$$inline_924_transformX$$inline_926$$ = [0, 0, 0];
    return[(0,window.parseInt)($parentPos$$[0], 10) + (0,window.parseInt)($element$$7$$.offsetLeft, 10) + $cs$$inline_923_element$$inline_922_transform_transform$$inline_924_transformX$$inline_926$$[0], (0,window.parseInt)($parentPos$$[1], 10) + (0,window.parseInt)($element$$7$$.offsetTop, 10) + $cs$$inline_923_element$$inline_922_transform_transform$$inline_924_transformX$$inline_926$$[1]]
  }
  return[0, 0]
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataGrid$$.prototype;
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseWheel$$($deltaY$$1_event$$23$$) {
  var $deltaX$$1$$;
  $deltaY$$1_event$$23$$.preventDefault();
  $deltaX$$1$$ = 0;
  $deltaY$$1_event$$23$$.wheelDeltaX ? ($deltaX$$1$$ = $deltaY$$1_event$$23$$.wheelDeltaX, $deltaY$$1_event$$23$$ = $deltaY$$1_event$$23$$.wheelDeltaY) : $deltaY$$1_event$$23$$ = $deltaY$$1_event$$23$$.wheelDelta;
  (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, $deltaX$$1$$, $deltaY$$1_event$$23$$)
};
D.$JSCompiler_prototypeAlias$$.$handleTouchStart$ = function $$JSCompiler_prototypeAlias$$$$handleTouchStart$$($event$$24$$) {
  $event$$24$$.preventDefault();
  1 == $event$$24$$.touches.length ? (this.$m_startX$ = $event$$24$$.touches[0].pageX, this.$m_startY$ = $event$$24$$.touches[0].pageY, this.$m_currentX$ = this.$m_startX$, this.$m_currentY$ = this.$m_startY$, this.$m_prevX$ = this.$m_startX$, this.$m_prevY$ = this.$m_startY$, this.$m_moveCount$ = 0, this.$m_touchActive$ = D.$JSCompiler_alias_TRUE$$) : this.$handleTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleTouchMove$ = function $$JSCompiler_prototypeAlias$$$$handleTouchMove$$($diffX_event$$25$$) {
  var $diffY$$;
  $diffX_event$$25$$.preventDefault();
  this.$m_touchActive$ ? (this.$m_currentX$ = $diffX_event$$25$$.touches[0].pageX, this.$m_currentY$ = $diffX_event$$25$$.touches[0].pageY, $diffX_event$$25$$ = this.$m_currentX$ - this.$m_prevX$, $diffY$$ = this.$m_currentY$ - this.$m_prevY$, 10 > window.Math.abs($diffX_event$$25$$) && 10 > window.Math.abs($diffY$$) ? ((0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, 1.5 * $diffX_event$$25$$, 1.5 * $diffY$$), this.$m_moveCount$++) : this.$m_moveCount$ = 0, this.$m_prevX$ = this.$m_currentX$, 
  this.$m_prevY$ = this.$m_currentY$) : this.$handleTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$handleTouchEnd$$($event$$26_swipeLength$$) {
  var $swipeAngle_swipeAngle$$inline_935$$;
  $event$$26_swipeLength$$.preventDefault();
  if(this.$m_touchActive$) {
    if((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && this.$m_currentX$ == this.$m_startX$ && this.$m_currentY$ == this.$m_startY$) {
      (0,D.$JSCompiler_StaticMethods_handleDatabodyClickSelection$$)(this, $event$$26_swipeLength$$);
      return
    }
    if(1 < this.$m_moveCount$) {
      this.$handleTouchCancel$();
      return
    }
    $event$$26_swipeLength$$ = window.Math.round(window.Math.sqrt(window.Math.pow(this.$m_currentX$ - this.$m_startX$, 2) + window.Math.pow(this.$m_currentY$ - this.$m_startY$, 2)));
    0 < $event$$26_swipeLength$$ && ($swipeAngle_swipeAngle$$inline_935$$ = window.Math.round(180 * window.Math.atan2(this.$m_currentY$ - this.$m_startY$, this.$m_startX$ - this.$m_currentX$) / window.Math.PI), 0 > $swipeAngle_swipeAngle$$inline_935$$ && ($swipeAngle_swipeAngle$$inline_935$$ = 360 - window.Math.abs($swipeAngle_swipeAngle$$inline_935$$)), this.$handleSwipe$($event$$26_swipeLength$$, 45 >= $swipeAngle_swipeAngle$$inline_935$$ && 0 <= $swipeAngle_swipeAngle$$inline_935$$ ? "left" : 
    360 >= $swipeAngle_swipeAngle$$inline_935$$ && 315 <= $swipeAngle_swipeAngle$$inline_935$$ ? "left" : 135 <= $swipeAngle_swipeAngle$$inline_935$$ && 225 >= $swipeAngle_swipeAngle$$inline_935$$ ? "right" : 45 < $swipeAngle_swipeAngle$$inline_935$$ && 135 > $swipeAngle_swipeAngle$$inline_935$$ ? "down" : "up"))
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
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchStart$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchStart$$($event$$28$$) {
  $event$$28$$.preventDefault();
  this.$m_touchStart$ = (new window.Date).getTime();
  1 == $event$$28$$.touches.length ? (this.$m_startX$ = $event$$28$$.touches[0].pageX, this.$m_startY$ = $event$$28$$.touches[0].pageY, this.$m_currentX$ = this.$m_startX$, this.$m_currentY$ = this.$m_startY$, this.$m_prevX$ = this.$m_startX$, this.$m_prevY$ = this.$m_startY$, this.$m_moveCount$ = 0, this.$m_touchActive$ = D.$JSCompiler_alias_TRUE$$, (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && ((0,D.$JSCompiler_StaticMethods_handleResize$$)(this, $event$$28$$), (0,D.$JSCompiler_StaticMethods_handleResizeMouseDown$$)(this, 
  $event$$28$$))) : this.$handleHeaderTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchMove$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchMove$$($event$$29$$) {
  $event$$29$$.preventDefault();
  this.$m_touchActive$ ? (this.$m_currentX$ = $event$$29$$.touches[0].pageX, this.$m_currentY$ = $event$$29$$.touches[0].pageY, this.$m_prevX$ = this.$m_currentX$, this.$m_prevY$ = this.$m_currentY$, (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_handleResize$$)(this, $event$$29$$)) : this.$handleTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchEnd$$($event$$30_headerIndex$$) {
  var $header$$6_headerAxis_touchLength$$;
  $event$$30_headerIndex$$.preventDefault();
  $header$$6_headerAxis_touchLength$$ = (new window.Date).getTime() - this.$m_touchStart$;
  this.$m_touchActive$ && (this.$m_isResizing$ && (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) ? (0,D.$JSCompiler_StaticMethods_handleResizeMouseUp$$)(this, $event$$30_headerIndex$$) : 500 > $header$$6_headerAxis_touchLength$$ ? (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$30_headerIndex$$.target) && (0,D.$JSCompiler_StaticMethods__handleHeaderSort$$)(this, $event$$30_headerIndex$$) : 1E3 > $header$$6_headerAxis_touchLength$$ && ($header$$6_headerAxis_touchLength$$ = 
  (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$30_headerIndex$$.target), $event$$30_headerIndex$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellIndex$$)(this, $header$$6_headerAxis_touchLength$$), $header$$6_headerAxis_touchLength$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellAxis$$)(this, $header$$6_headerAxis_touchLength$$), "row" === $header$$6_headerAxis_touchLength$$ ? (0,D.$JSCompiler_StaticMethods__focusRowHeader$$)(this, $event$$30_headerIndex$$) : "column" === $header$$6_headerAxis_touchLength$$ && 
  (0,D.$JSCompiler_StaticMethods__focusColumnHeader$$)(this, $event$$30_headerIndex$$)));
  this.$handleHeaderTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchCancel$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchCancel$$() {
  this.$m_touchActive$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_currentY$ = this.$m_currentX$ = this.$m_prevY$ = this.$m_prevX$ = this.$m_startY$ = this.$m_startX$ = this.$m_moveCount$ = 0
};
D.$JSCompiler_prototypeAlias$$.fireEvent = function $$JSCompiler_prototypeAlias$$$fireEvent$($functionName$$, $details$$3$$) {
  var $callback$$24$$;
  $functionName$$ == D.$JSCompiler_alias_NULL$$ || $details$$3$$ == D.$JSCompiler_alias_NULL$$ || ($callback$$24$$ = this.$callbacks$[$functionName$$], $callback$$24$$ != D.$JSCompiler_alias_NULL$$ && $callback$$24$$($details$$3$$))
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
D.$JSCompiler_StaticMethods_setElementDir$$ = function $$JSCompiler_StaticMethods_setElementDir$$$($elem$$10$$, $pix$$, $dir$$9$$) {
  $elem$$10$$.style[$dir$$9$$] = $pix$$ + "px"
};
D.$JSCompiler_StaticMethods_getElementDir$$ = function $$JSCompiler_StaticMethods_getElementDir$$$($elem$$11$$, $dir$$10$$) {
  return(0,window.parseInt)($elem$$11$$.style[$dir$$10$$], 10)
};
D.$JSCompiler_StaticMethods__isInViewport$$ = function $$JSCompiler_StaticMethods__isInViewport$$$($JSCompiler_StaticMethods__isInViewport$self$$, $indexes$$6$$) {
  var $rowIndex$$1$$, $columnIndex$$1$$;
  $rowIndex$$1$$ = $indexes$$6$$.row;
  $columnIndex$$1$$ = $indexes$$6$$.column;
  return-1 === $rowIndex$$1$$ && -1 === $columnIndex$$1$$ ? -1 : -1 === $rowIndex$$1$$ ? $columnIndex$$1$$ < $JSCompiler_StaticMethods__isInViewport$self$$.$m_startCol$ ? 1 : $columnIndex$$1$$ > $JSCompiler_StaticMethods__isInViewport$self$$.$m_endCol$ ? 2 : 3 : -1 === $columnIndex$$1$$ ? $rowIndex$$1$$ < $JSCompiler_StaticMethods__isInViewport$self$$.$m_startRow$ ? 1 : $rowIndex$$1$$ > $JSCompiler_StaticMethods__isInViewport$self$$.$m_endRow$ ? 2 : 3 : $columnIndex$$1$$ >= $JSCompiler_StaticMethods__isInViewport$self$$.$m_startCol$ && 
  $columnIndex$$1$$ <= $JSCompiler_StaticMethods__isInViewport$self$$.$m_endCol$ && $rowIndex$$1$$ >= $JSCompiler_StaticMethods__isInViewport$self$$.$m_startRow$ && $rowIndex$$1$$ <= $JSCompiler_StaticMethods__isInViewport$self$$.$m_endRow$ ? 3 : -1
};
D.$DvtDataGrid$$.prototype.$handleModelEvent$ = function $$DvtDataGrid$$$$$handleModelEvent$$($cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$) {
  var $columnRange$$inline_940_i$$inline_956_operation$$1_scrollerContent$$inline_963$$, $databodyContentHeight$$inline_964_indexes$$inline_949_keys$$1_pageSize$$inline_971_rowRange$$inline_939_rowRange$$inline_950_scrollTop$$inline_945_totalHeight$$inline_959$$;
  if(this.$m_initialized$) {
    if($columnRange$$inline_940_i$$inline_956_operation$$1_scrollerContent$$inline_963$$ = $cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$.operation, $databodyContentHeight$$inline_964_indexes$$inline_949_keys$$1_pageSize$$inline_971_rowRange$$inline_939_rowRange$$inline_950_scrollTop$$inline_945_totalHeight$$inline_959$$ = $cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$.keys, 
    "insert" === $columnRange$$inline_940_i$$inline_956_operation$$1_scrollerContent$$inline_963$$) {
      $cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$ = $cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$.result, $cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$ != D.$JSCompiler_alias_NULL$$ ? ($databodyContentHeight$$inline_964_indexes$$inline_949_keys$$1_pageSize$$inline_971_rowRange$$inline_939_rowRange$$inline_950_scrollTop$$inline_945_totalHeight$$inline_959$$ = 
      {axis:"row", start:$cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$.getStart("row"), count:$cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$.getCount("row")}, $columnRange$$inline_940_i$$inline_956_operation$$1_scrollerContent$$inline_963$$ = {axis:"column", start:$cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$.getStart("column"), 
      count:$cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$.getCount("column")}, this.$_handleCellInsertsFetchSuccess$($cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$, [$databodyContentHeight$$inline_964_indexes$$inline_949_keys$$1_pageSize$$inline_971_rowRange$$inline_939_rowRange$$inline_950_scrollTop$$inline_945_totalHeight$$inline_959$$, $columnRange$$inline_940_i$$inline_956_operation$$1_scrollerContent$$inline_963$$])) : 
      ($cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$ = this.$m_dataSource$.indexes($databodyContentHeight$$inline_964_indexes$$inline_949_keys$$1_pageSize$$inline_971_rowRange$$inline_939_rowRange$$inline_950_scrollTop$$inline_945_totalHeight$$inline_959$$), 3 === (0,D.$JSCompiler_StaticMethods__isInViewport$$)(this, $cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$) ? 
      $databodyContentHeight$$inline_964_indexes$$inline_949_keys$$1_pageSize$$inline_971_rowRange$$inline_939_rowRange$$inline_950_scrollTop$$inline_945_totalHeight$$inline_959$$.row && (this.fetchHeaders("row", $cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$.row, this.$m_rowHeader$, 1, {success:this.$_handleHeaderInsertsFetchSuccess$}), this.fetchCells(this.$m_databody$, this.$m_scroller$, $cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$.row, 
      this.$m_startCol$, 1, this.$m_endCol$ - this.$m_startCol$, {success:this.$_handleCellInsertsFetchSuccess$})) : ($databodyContentHeight$$inline_964_indexes$$inline_949_keys$$1_pageSize$$inline_971_rowRange$$inline_939_rowRange$$inline_950_scrollTop$$inline_945_totalHeight$$inline_959$$ = $cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$.row * this.$m_avgRowHeight$, this.$m_scroller$.scrollTop = $databodyContentHeight$$inline_964_indexes$$inline_949_keys$$1_pageSize$$inline_971_rowRange$$inline_939_rowRange$$inline_950_scrollTop$$inline_945_totalHeight$$inline_959$$))
    }else {
      if("update" === $columnRange$$inline_940_i$$inline_956_operation$$1_scrollerContent$$inline_963$$) {
        $databodyContentHeight$$inline_964_indexes$$inline_949_keys$$1_pageSize$$inline_971_rowRange$$inline_939_rowRange$$inline_950_scrollTop$$inline_945_totalHeight$$inline_959$$ = this.$m_dataSource$.indexes($databodyContentHeight$$inline_964_indexes$$inline_949_keys$$1_pageSize$$inline_971_rowRange$$inline_939_rowRange$$inline_950_scrollTop$$inline_945_totalHeight$$inline_959$$), 3 === (0,D.$JSCompiler_StaticMethods__isInViewport$$)(this, $databodyContentHeight$$inline_964_indexes$$inline_949_keys$$1_pageSize$$inline_971_rowRange$$inline_939_rowRange$$inline_950_scrollTop$$inline_945_totalHeight$$inline_959$$) && 
        ($databodyContentHeight$$inline_964_indexes$$inline_949_keys$$1_pageSize$$inline_971_rowRange$$inline_939_rowRange$$inline_950_scrollTop$$inline_945_totalHeight$$inline_959$$ = {axis:"row", start:$databodyContentHeight$$inline_964_indexes$$inline_949_keys$$1_pageSize$$inline_971_rowRange$$inline_939_rowRange$$inline_950_scrollTop$$inline_945_totalHeight$$inline_959$$.row, count:1}, $cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$ = 
        {axis:"column", start:this.$m_startCol$, count:this.$m_endCol$ - this.$m_startCol$}, (0,D.$JSCompiler_StaticMethods_showStatusText$$)(this), this.$m_dataSource$.fetchCells([$databodyContentHeight$$inline_964_indexes$$inline_949_keys$$1_pageSize$$inline_971_rowRange$$inline_939_rowRange$$inline_950_scrollTop$$inline_945_totalHeight$$inline_959$$, $cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$], {success:this.$_handleCellUpdatesFetchSuccess$, 
        error:this.$handleHeadersFetchError$}, {success:this, error:this}))
      }else {
        if("delete" === $columnRange$$inline_940_i$$inline_956_operation$$1_scrollerContent$$inline_963$$) {
          $cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$ = $databodyContentHeight$$inline_964_indexes$$inline_949_keys$$1_pageSize$$inline_971_rowRange$$inline_939_rowRange$$inline_950_scrollTop$$inline_945_totalHeight$$inline_959$$;
          var $height$$inline_960_key$$inline_955$$, $rowHeader$$inline_965_rowKey$$inline_957$$, $row$$inline_958$$, $referenceRow$$inline_961$$;
          window.Array.isArray($cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$) || ($cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$ = (0,window.Array)($cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$));
          for($columnRange$$inline_940_i$$inline_956_operation$$1_scrollerContent$$inline_963$$ = $databodyContentHeight$$inline_964_indexes$$inline_949_keys$$1_pageSize$$inline_971_rowRange$$inline_939_rowRange$$inline_950_scrollTop$$inline_945_totalHeight$$inline_959$$ = 0;$columnRange$$inline_940_i$$inline_956_operation$$1_scrollerContent$$inline_963$$ < $cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$.length;$columnRange$$inline_940_i$$inline_956_operation$$1_scrollerContent$$inline_963$$++) {
            $height$$inline_960_key$$inline_955$$ = $cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$[$columnRange$$inline_940_i$$inline_956_operation$$1_scrollerContent$$inline_963$$], $height$$inline_960_key$$inline_955$$.row && ($rowHeader$$inline_965_rowKey$$inline_957$$ = $height$$inline_960_key$$inline_955$$.row, $row$$inline_958$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)(this, $rowHeader$$inline_965_rowKey$$inline_957$$), 
            $row$$inline_958$$ != D.$JSCompiler_alias_NULL$$ ? ($height$$inline_960_key$$inline_955$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($row$$inline_958$$), $referenceRow$$inline_961$$ = $row$$inline_958$$.nextSibling, (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($referenceRow$$inline_961$$, 0 - $height$$inline_960_key$$inline_955$$), $row$$inline_958$$.parentNode.removeChild($row$$inline_958$$), $row$$inline_958$$.style.display = "none") : $height$$inline_960_key$$inline_955$$ = 
            this.$m_avgRowHeight$, $rowHeader$$inline_965_rowKey$$inline_957$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)(this, $rowHeader$$inline_965_rowKey$$inline_957$$), $rowHeader$$inline_965_rowKey$$inline_957$$ != D.$JSCompiler_alias_NULL$$ && ($height$$inline_960_key$$inline_955$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($rowHeader$$inline_965_rowKey$$inline_957$$), $referenceRow$$inline_961$$ = $rowHeader$$inline_965_rowKey$$inline_957$$.nextSibling, (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($referenceRow$$inline_961$$, 
            0 - $height$$inline_960_key$$inline_955$$), $rowHeader$$inline_965_rowKey$$inline_957$$.parentNode.removeChild($rowHeader$$inline_965_rowKey$$inline_957$$), $rowHeader$$inline_965_rowKey$$inline_957$$.style.display = "none", this.$m_endRowHeader$ -= 1, this.$m_endRowHeaderPixel$ -= $height$$inline_960_key$$inline_955$$), this.$m_endRow$ -= 1, this.$m_endRowPixel$ -= $height$$inline_960_key$$inline_955$$, $databodyContentHeight$$inline_964_indexes$$inline_949_keys$$1_pageSize$$inline_971_rowRange$$inline_939_rowRange$$inline_950_scrollTop$$inline_945_totalHeight$$inline_959$$ += 
            $height$$inline_960_key$$inline_955$$)
          }
          $cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$ = this.$m_databody$.firstChild;
          $columnRange$$inline_940_i$$inline_956_operation$$1_scrollerContent$$inline_963$$ = this.$m_scroller$.firstChild;
          $databodyContentHeight$$inline_964_indexes$$inline_949_keys$$1_pageSize$$inline_971_rowRange$$inline_939_rowRange$$inline_950_scrollTop$$inline_945_totalHeight$$inline_959$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$) - $databodyContentHeight$$inline_964_indexes$$inline_949_keys$$1_pageSize$$inline_971_rowRange$$inline_939_rowRange$$inline_950_scrollTop$$inline_945_totalHeight$$inline_959$$;
          (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$, $databodyContentHeight$$inline_964_indexes$$inline_949_keys$$1_pageSize$$inline_971_rowRange$$inline_939_rowRange$$inline_950_scrollTop$$inline_945_totalHeight$$inline_959$$);
          (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnRange$$inline_940_i$$inline_956_operation$$1_scrollerContent$$inline_963$$, $databodyContentHeight$$inline_964_indexes$$inline_949_keys$$1_pageSize$$inline_971_rowRange$$inline_939_rowRange$$inline_950_scrollTop$$inline_945_totalHeight$$inline_959$$);
          (0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this);
          this.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$;
          (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
          (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)(this)
        }else {
          "refresh" === $columnRange$$inline_940_i$$inline_956_operation$$1_scrollerContent$$inline_963$$ ? (0,D.$JSCompiler_StaticMethods_handleLongScroll$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$) : "sync" === $columnRange$$inline_940_i$$inline_956_operation$$1_scrollerContent$$inline_963$$ && ($databodyContentHeight$$inline_964_indexes$$inline_949_keys$$1_pageSize$$inline_971_rowRange$$inline_939_rowRange$$inline_950_scrollTop$$inline_945_totalHeight$$inline_959$$ = $cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$.pageSize, 
          this.$m_fetching$ = {}, this.$m_endColHeaderPixel$ = this.$m_startColHeaderPixel$ = this.$m_endColPixel$ = this.$m_startColPixel$ = this.$m_endColHeader$ = this.$m_startColHeader$ = this.$m_endCol$ = this.$m_startCol$ = this.$m_endRowHeaderPixel$ = this.$m_startRowHeaderPixel$ = this.$m_endRowPixel$ = this.$m_startRowPixel$ = this.$m_endRowHeader$ = this.$m_startRowHeader$ = this.$m_endRow$ = this.$m_startRow$ = 0, this.$m_cachedRowHeight$ = [], this.$m_cachedColumnWidth$ = [], this.$m_cachedColumnWidthStartIndex$ = 
          this.$m_cachedRowHeightStartIndex$ = 0, this.$m_captureScrolling$ = this.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_FALSE$$, this.$m_isEstimateColumnCount$ = this.$m_isEstimateRowCount$ = this.$m_avgColWidth$ = this.$m_avgRowHeight$ = D.$JSCompiler_alias_VOID$$, this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$, this.$m_prevActive$ = this.$m_active$ = this.$m_selection$ = D.$JSCompiler_alias_NULL$$, 
          this.$m_initialized$ ? (this.fetchHeaders("row", 0, this.$m_rowHeader$, $databodyContentHeight$$inline_964_indexes$$inline_949_keys$$1_pageSize$$inline_971_rowRange$$inline_939_rowRange$$inline_950_scrollTop$$inline_945_totalHeight$$inline_959$$, {success:function($cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$, $columnRange$$inline_940_i$$inline_956_operation$$1_scrollerContent$$inline_963$$) {
            (0,D.$JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$)(this, $cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$, $columnRange$$inline_940_i$$inline_956_operation$$1_scrollerContent$$inline_963$$, 0)
          }}), this.fetchHeaders("column", 0, this.$m_colHeader$, D.$JSCompiler_alias_VOID$$, {success:function($cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$, $columnRange$$inline_940_i$$inline_956_operation$$1_scrollerContent$$inline_963$$) {
            this.$m_colHeader$.firstChild.innerHTML = "";
            this.$handleHeadersFetchSuccess$($cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$, $columnRange$$inline_940_i$$inline_956_operation$$1_scrollerContent$$inline_963$$)
          }}), this.fetchCells(this.$m_databody$, this.$m_scroller$, 0, 0, $databodyContentHeight$$inline_964_indexes$$inline_949_keys$$1_pageSize$$inline_971_rowRange$$inline_939_rowRange$$inline_950_scrollTop$$inline_945_totalHeight$$inline_959$$, D.$JSCompiler_alias_NULL$$, {success:function($cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$, $columnRange$$inline_940_i$$inline_956_operation$$1_scrollerContent$$inline_963$$) {
            (0,D.$JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$)(this, $cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$, $columnRange$$inline_940_i$$inline_956_operation$$1_scrollerContent$$inline_963$$, 0)
          }}), (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this)) : (this.fetchHeaders("column", 0, this.$m_colHeader$), this.fetchHeaders("row", 0, this.$m_rowHeader$, $databodyContentHeight$$inline_964_indexes$$inline_949_keys$$1_pageSize$$inline_971_rowRange$$inline_939_rowRange$$inline_950_scrollTop$$inline_945_totalHeight$$inline_959$$), this.fetchCells(this.$m_databody$, this.$m_scroller$, 0, 0, $databodyContentHeight$$inline_964_indexes$$inline_949_keys$$1_pageSize$$inline_971_rowRange$$inline_939_rowRange$$inline_950_scrollTop$$inline_945_totalHeight$$inline_959$$)))
        }
      }
    }
  }else {
    this.$m_modelEvents$ == D.$JSCompiler_alias_VOID$$ && (this.$m_modelEvents$ = []), this.$m_modelEvents$.push($cellSet$$7_columnRange$$inline_951_databodyContent$$inline_962_event$$32_indexes$$inline_944_keys$$inline_954$$)
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
D.$JSCompiler_StaticMethods__scrollRowIntoViewport$$ = function $$JSCompiler_StaticMethods__scrollRowIntoViewport$$$($JSCompiler_StaticMethods__scrollRowIntoViewport$self$$, $index$$53$$) {
  var $row$$17_rowTop$$, $diff$$1_viewportTop$$2$$, $viewportBottom$$3$$;
  $row$$17_rowTop$$ = $JSCompiler_StaticMethods__scrollRowIntoViewport$self$$.$m_databody$.firstChild.childNodes[$index$$53$$ - $JSCompiler_StaticMethods__scrollRowIntoViewport$self$$.$m_startRow$ + 1];
  $row$$17_rowTop$$ != D.$JSCompiler_alias_NULL$$ && ($diff$$1_viewportTop$$2$$ = $JSCompiler_StaticMethods__scrollRowIntoViewport$self$$.$m_currentScrollTop$, $viewportBottom$$3$$ = $JSCompiler_StaticMethods__scrollRowIntoViewport$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods__scrollRowIntoViewport$self$$.$m_databody$), $row$$17_rowTop$$ = $row$$17_rowTop$$.offsetTop, $diff$$1_viewportTop$$2$$ -= $row$$17_rowTop$$, 0 < $diff$$1_viewportTop$$2$$ ? 
  (0,D.$JSCompiler_StaticMethods_scrollDelta$$)($JSCompiler_StaticMethods__scrollRowIntoViewport$self$$, 0, $diff$$1_viewportTop$$2$$) : ($diff$$1_viewportTop$$2$$ = $viewportBottom$$3$$ - $row$$17_rowTop$$, 0 > $diff$$1_viewportTop$$2$$ && (0,D.$JSCompiler_StaticMethods_scrollDelta$$)($JSCompiler_StaticMethods__scrollRowIntoViewport$self$$, 0, $diff$$1_viewportTop$$2$$)))
};
D.$JSCompiler_StaticMethods__cleanupViewport$$ = function $$JSCompiler_StaticMethods__cleanupViewport$$$($JSCompiler_StaticMethods__cleanupViewport$self$$) {
  var $viewportTop$$3$$, $viewportBottom$$4$$;
  $viewportTop$$3$$ = $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_currentScrollTop$;
  $viewportBottom$$4$$ = $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods__cleanupViewport$self$$.$m_databody$);
  $viewportTop$$3$$ > $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_startRowPixel$ ? $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_startRow$ > $JSCompiler_StaticMethods__cleanupViewport$self$$.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowsFromTop$$)($JSCompiler_StaticMethods__cleanupViewport$self$$, $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_databody$) : $viewportBottom$$4$$ < $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_endRowPixel$ && 
  $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_startRow$ > $JSCompiler_StaticMethods__cleanupViewport$self$$.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowsFromBottom$$)($JSCompiler_StaticMethods__cleanupViewport$self$$, $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_databody$)
};
D.$DvtDataGrid$$.prototype.$_handleCellUpdatesFetchSuccess$ = function $$DvtDataGrid$$$$$_handleCellUpdatesFetchSuccess$$($cellSet$$10$$, $cellRange$$7$$) {
  var $rowStart$$7$$, $databodyContent$$9$$, $renderer$$5$$, $columnBandingInterval$$3$$, $rowIndex$$2$$;
  $rowStart$$7$$ = $cellRange$$7$$[0].start;
  $databodyContent$$9$$ = this.$m_databody$.firstChild;
  $renderer$$5$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "cell");
  $columnBandingInterval$$3$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)(this.$m_options$);
  $rowIndex$$2$$ = $rowStart$$7$$ - this.$m_startRow$;
  var $row$$inline_981$$ = $databodyContent$$9$$.childNodes[$rowIndex$$2$$ + 1], $columnStart$$inline_984$$ = this.$m_startCol$;
  $row$$inline_981$$.style.left = this.getWidth() + "px";
  (0,window.setTimeout)(function() {
    $row$$inline_981$$.innerHTML = "";
    (0,D.$JSCompiler_StaticMethods_addCellsToRow$$)(this, $cellSet$$10$$, $row$$inline_981$$, $rowIndex$$2$$, $renderer$$5$$, D.$JSCompiler_alias_TRUE$$, $columnStart$$inline_984$$, D.$JSCompiler_alias_FALSE$$, $columnBandingInterval$$3$$);
    (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this);
    (0,window.setTimeout)(function() {
      $row$$inline_981$$.style.left = "0px"
    }, 250);
    (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_applySelection$$)(this);
    (0,D.$JSCompiler_StaticMethods_highlightActive$$)(this, D.$JSCompiler_alias_FALSE$$)
  }.bind(this), 250)
};
D.$JSCompiler_StaticMethods__findRowByKey$$ = function $$JSCompiler_StaticMethods__findRowByKey$$$($JSCompiler_StaticMethods__findRowByKey$self$$, $key$$33$$) {
  var $rows$$5$$, $row$$21$$, $i$$20$$, $rowKey$$2$$, $keyAttribute$$1$$;
  if($JSCompiler_StaticMethods__findRowByKey$self$$.$m_databody$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $rows$$5$$ = $JSCompiler_StaticMethods__findRowByKey$self$$.$m_databody$.firstChild.childNodes;
  $keyAttribute$$1$$ = $JSCompiler_StaticMethods__findRowByKey$self$$.$getResources$().getMappedAttribute("key");
  for($i$$20$$ = 1;$i$$20$$ < $rows$$5$$.length;$i$$20$$++) {
    if($row$$21$$ = $rows$$5$$[$i$$20$$], $rowKey$$2$$ = $row$$21$$.getAttribute($keyAttribute$$1$$), $rowKey$$2$$ == $key$$33$$) {
      return $row$$21$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__findRowHeaderByKey$$ = function $$JSCompiler_StaticMethods__findRowHeaderByKey$$$($JSCompiler_StaticMethods__findRowHeaderByKey$self$$, $key$$34$$) {
  var $rows$$6$$, $row$$22$$, $i$$21$$, $rowKey$$3$$, $keyAttribute$$2$$;
  if($JSCompiler_StaticMethods__findRowHeaderByKey$self$$.$m_rowHeader$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $rows$$6$$ = $JSCompiler_StaticMethods__findRowHeaderByKey$self$$.$m_rowHeader$.firstChild.childNodes;
  $keyAttribute$$2$$ = $JSCompiler_StaticMethods__findRowHeaderByKey$self$$.$getResources$().getMappedAttribute("key");
  for($i$$21$$ = 1;$i$$21$$ < $rows$$6$$.length;$i$$21$$++) {
    if($row$$22$$ = $rows$$6$$[$i$$21$$], $rowKey$$3$$ = $row$$22$$.getAttribute($keyAttribute$$2$$), $rowKey$$3$$ == $key$$34$$) {
      return $row$$22$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__findColumnHeaderByKey$$ = function $$JSCompiler_StaticMethods__findColumnHeaderByKey$$$($JSCompiler_StaticMethods__findColumnHeaderByKey$self$$, $key$$35$$) {
  var $columns$$2$$, $column$$4$$, $i$$22$$, $columnKey$$, $keyAttribute$$3$$;
  if($JSCompiler_StaticMethods__findColumnHeaderByKey$self$$.$m_colHeader$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $columns$$2$$ = $JSCompiler_StaticMethods__findColumnHeaderByKey$self$$.$m_colHeader$.firstChild.childNodes;
  $keyAttribute$$3$$ = $JSCompiler_StaticMethods__findColumnHeaderByKey$self$$.$getResources$().getMappedAttribute("key");
  for($i$$22$$ = 0;$i$$22$$ < $columns$$2$$.length;$i$$22$$++) {
    if($column$$4$$ = $columns$$2$$[$i$$22$$], $columnKey$$ = $column$$4$$.getAttribute($keyAttribute$$3$$), $columnKey$$ == $key$$35$$) {
      return $column$$4$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDataGrid$$.prototype.setActive = function $$DvtDataGrid$$$$setActive$($active$$) {
  var $keys$$5$$;
  $active$$ != D.$JSCompiler_alias_NULL$$ && ($keys$$5$$ = this.$m_dataSource$.keys({row:$active$$.row, column:$active$$.column}), $active$$.rowKey = $keys$$5$$.row, $active$$.columnKey = $keys$$5$$.column);
  this.$m_prevActive$ = this.$m_active$;
  this.$m_active$ = $active$$
};
D.$JSCompiler_StaticMethods__fireActiveKeyChangeEvent$$ = function $$JSCompiler_StaticMethods__fireActiveKeyChangeEvent$$$($JSCompiler_StaticMethods__fireActiveKeyChangeEvent$self$$, $event$$34$$) {
  $JSCompiler_StaticMethods__fireActiveKeyChangeEvent$self$$.fireEvent("active", {event:$event$$34$$, ui:{previousActiveKey:$JSCompiler_StaticMethods__fireActiveKeyChangeEvent$self$$.$m_prevActive$, activeKey:$JSCompiler_StaticMethods__fireActiveKeyChangeEvent$self$$.$m_active$}})
};
D.$DvtDataGrid$$.prototype.$activeAndFocus$ = function $$DvtDataGrid$$$$$activeAndFocus$$($index$$55$$) {
  this.$m_active$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unhighlightActive$$)(this);
  this.setActive($index$$55$$);
  (0,D.$JSCompiler_StaticMethods_highlightActive$$)(this)
};
D.$DvtDataGrid$$.prototype.$getRowIndex$ = function $$DvtDataGrid$$$$$getRowIndex$$($row$$23$$) {
  for(var $index$$56$$ = this.$m_startRow$;$row$$23$$.previousSibling;) {
    $index$$56$$ += 1, $row$$23$$ = $row$$23$$.previousSibling
  }
  return $index$$56$$ - 1
};
D.$DvtDataGrid$$.prototype.$getCellIndex$ = function $$DvtDataGrid$$$$$getCellIndex$$($cell$$5$$) {
  for(var $index$$57$$ = this.$m_startCol$;$cell$$5$$.previousSibling;) {
    $index$$57$$ += 1, $cell$$5$$ = $cell$$5$$.previousSibling
  }
  return $index$$57$$
};
D.$JSCompiler_StaticMethods_getHeaderCellIndex$$ = function $$JSCompiler_StaticMethods_getHeaderCellIndex$$$($JSCompiler_StaticMethods_getHeaderCellIndex$self$$, $header$$7$$) {
  var $axis$$15$$, $index$$58$$;
  $axis$$15$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellAxis$$)($JSCompiler_StaticMethods_getHeaderCellIndex$self$$, $header$$7$$);
  "row" === $axis$$15$$ ? ($index$$58$$ = $JSCompiler_StaticMethods_getHeaderCellIndex$self$$.$m_startRowHeader$ - 1, $header$$7$$ = $header$$7$$.parentNode) : "column" === $axis$$15$$ && ($index$$58$$ = $JSCompiler_StaticMethods_getHeaderCellIndex$self$$.$m_startColHeader$);
  for(;$header$$7$$.previousSibling;) {
    $index$$58$$ += 1, $header$$7$$ = $header$$7$$.previousSibling
  }
  return $index$$58$$
};
D.$JSCompiler_StaticMethods_getHeaderCellAxis$$ = function $$JSCompiler_StaticMethods_getHeaderCellAxis$$$($JSCompiler_StaticMethods_getHeaderCellAxis$self$$, $header$$8$$) {
  return(0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$8$$, $JSCompiler_StaticMethods_getHeaderCellAxis$self$$.getMappedStyle("colheadercell")) ? "column" : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$8$$, $JSCompiler_StaticMethods_getHeaderCellAxis$self$$.getMappedStyle("rowheadercell")) ? "row" : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_findCell$$ = function $$JSCompiler_StaticMethods_findCell$$$($JSCompiler_StaticMethods_findCell$self$$, $elem$$12$$) {
  return $JSCompiler_StaticMethods_findCell$self$$.find($elem$$12$$, "cell")
};
D.$DvtDataGrid$$.prototype.find = function $$DvtDataGrid$$$$find$($elem$$13$$, $key$$36$$, $className$$8$$) {
  if($elem$$13$$ == D.$JSCompiler_alias_NULL$$ || $elem$$13$$ == this.$m_root$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $className$$8$$ == D.$JSCompiler_alias_VOID$$ && ($className$$8$$ = this.getMappedStyle($key$$36$$));
  return $className$$8$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($elem$$13$$, $className$$8$$) ? $elem$$13$$ : this.find($elem$$13$$.parentNode, $key$$36$$, $className$$8$$)
};
D.$JSCompiler_StaticMethods_highlightActive$$ = function $$JSCompiler_StaticMethods_highlightActive$$$($JSCompiler_StaticMethods_highlightActive$self$$, $focus$$) {
  var $cell$$6$$, $skip$$;
  $cell$$6$$ = (0,D.$JSCompiler_StaticMethods_highlightIndex$$)($JSCompiler_StaticMethods_highlightActive$self$$, $JSCompiler_StaticMethods_highlightActive$self$$.$m_active$, "active");
  $cell$$6$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_highlightActive$self$$.$m_prevActive$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_highlightActive$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_highlightActive$self$$.$m_prevActive$.row === $JSCompiler_StaticMethods_highlightActive$self$$.$m_active$.row ? $skip$$ = "row" : $JSCompiler_StaticMethods_highlightActive$self$$.$m_prevActive$.column === $JSCompiler_StaticMethods_highlightActive$self$$.$m_active$.column && 
  ($skip$$ = "column")), (0,D.$JSCompiler_StaticMethods_setAriaProperties$$)($JSCompiler_StaticMethods_highlightActive$self$$, $cell$$6$$, $focus$$ === D.$JSCompiler_alias_VOID$$ || $focus$$ === D.$JSCompiler_alias_TRUE$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_VOID$$, $skip$$))
};
D.$JSCompiler_StaticMethods_unhighlightActive$$ = function $$JSCompiler_StaticMethods_unhighlightActive$$$($JSCompiler_StaticMethods_unhighlightActive$self$$, $selectActive$$) {
  var $cell$$7$$, $selectedClassName$$;
  $cell$$7$$ = (0,D.$JSCompiler_StaticMethods_unhighlightIndex$$)($JSCompiler_StaticMethods_unhighlightActive$self$$, $JSCompiler_StaticMethods_unhighlightActive$self$$.$m_active$, D.$JSCompiler_alias_TRUE$$);
  $selectActive$$ && ($selectedClassName$$ = $JSCompiler_StaticMethods_unhighlightActive$self$$.getMappedStyle("selected"), $selectedClassName$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_highlightIndex$$)($JSCompiler_StaticMethods_unhighlightActive$self$$, $JSCompiler_StaticMethods_unhighlightActive$self$$.$m_active$, $selectedClassName$$));
  $cell$$7$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unsetAriaProperties$$)($cell$$7$$)
};
D.$JSCompiler_StaticMethods_highlightIndex$$ = function $$JSCompiler_StaticMethods_highlightIndex$$$($JSCompiler_StaticMethods_highlightIndex$self$$, $index$$59$$, $className$$9_style$$2$$) {
  var $cell$$8_range$$5_singleCell$$;
  $cell$$8_range$$5_singleCell$$ = $JSCompiler_StaticMethods_highlightIndex$self$$.createRange($index$$59$$);
  $cell$$8_range$$5_singleCell$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_highlightIndex$self$$, $cell$$8_range$$5_singleCell$$);
  if(!($cell$$8_range$$5_singleCell$$ == D.$JSCompiler_alias_NULL$$ || 0 == $cell$$8_range$$5_singleCell$$.length)) {
    return $className$$9_style$$2$$ == D.$JSCompiler_alias_VOID$$ && ($className$$9_style$$2$$ = "selected"), $cell$$8_range$$5_singleCell$$ = $cell$$8_range$$5_singleCell$$[0], $className$$9_style$$2$$ = $JSCompiler_StaticMethods_highlightIndex$self$$.getMappedStyle($className$$9_style$$2$$), $className$$9_style$$2$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($cell$$8_range$$5_singleCell$$, $className$$9_style$$2$$), $index$$59$$.row && $index$$59$$.column && 
    (0,D.$JSCompiler_StaticMethods_setAriaProperties$$)($JSCompiler_StaticMethods_highlightIndex$self$$, $cell$$8_range$$5_singleCell$$)), $cell$$8_range$$5_singleCell$$
  }
};
D.$JSCompiler_StaticMethods_unhighlightIndex$$ = function $$JSCompiler_StaticMethods_unhighlightIndex$$$($JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$, $cell$$9_index$$60_range$$6_singleCell$$1$$, $activeOnly$$) {
  var $activeClassName$$;
  $cell$$9_index$$60_range$$6_singleCell$$1$$ = $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$.createRange($cell$$9_index$$60_range$$6_singleCell$$1$$);
  $cell$$9_index$$60_range$$6_singleCell$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$, $cell$$9_index$$60_range$$6_singleCell$$1$$);
  if(!($cell$$9_index$$60_range$$6_singleCell$$1$$ == D.$JSCompiler_alias_NULL$$ || 0 == $cell$$9_index$$60_range$$6_singleCell$$1$$.length)) {
    $cell$$9_index$$60_range$$6_singleCell$$1$$ = $cell$$9_index$$60_range$$6_singleCell$$1$$[0];
    $activeClassName$$ = $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$.getMappedStyle("active");
    $activeClassName$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($cell$$9_index$$60_range$$6_singleCell$$1$$, $activeClassName$$);
    if($activeOnly$$ == D.$JSCompiler_alias_VOID$$ || !$activeOnly$$) {
      $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$ = $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$.getMappedStyle("selected"), $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($cell$$9_index$$60_range$$6_singleCell$$1$$, $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$), (0,D.$JSCompiler_StaticMethods_unsetAriaProperties$$)($cell$$9_index$$60_range$$6_singleCell$$1$$))
    }
    return $cell$$9_index$$60_range$$6_singleCell$$1$$
  }
};
D.$JSCompiler_StaticMethods_setAriaProperties$$ = function $$JSCompiler_StaticMethods_setAriaProperties$$$($JSCompiler_StaticMethods_setAriaProperties$self$$, $cell$$10$$, $focus$$1$$, $colIndex$$inline_1004_skip$$1$$) {
  $cell$$10$$.setAttribute("id", (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setAriaProperties$self$$, "active"));
  $cell$$10$$.setAttribute("tabIndex", 0);
  var $label$$inline_1000$$, $columns$$inline_1005_row$$inline_1001_rowIndex$$inline_1002$$, $rows$$inline_1003$$;
  $label$$inline_1000$$ = "";
  $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_rowHeader$ != D.$JSCompiler_alias_NULL$$ && "row" != $colIndex$$inline_1004_skip$$1$$ && ($columns$$inline_1005_row$$inline_1001_rowIndex$$inline_1002$$ = $cell$$10$$.parentNode, $columns$$inline_1005_row$$inline_1001_rowIndex$$inline_1002$$ = (0,D.$JSCompiler_StaticMethods_findIndexOf$$)($columns$$inline_1005_row$$inline_1001_rowIndex$$inline_1002$$), -1 < $columns$$inline_1005_row$$inline_1001_rowIndex$$inline_1002$$ && ($rows$$inline_1003$$ = 
  $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_rowHeader$.firstChild.childNodes, $columns$$inline_1005_row$$inline_1001_rowIndex$$inline_1002$$ < $rows$$inline_1003$$.length && ($label$$inline_1000$$ = $rows$$inline_1003$$[$columns$$inline_1005_row$$inline_1001_rowIndex$$inline_1002$$].id)));
  $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_colHeader$ != D.$JSCompiler_alias_NULL$$ && "column" != $colIndex$$inline_1004_skip$$1$$ && ($colIndex$$inline_1004_skip$$1$$ = (0,D.$JSCompiler_StaticMethods_findIndexOf$$)($cell$$10$$), -1 < $colIndex$$inline_1004_skip$$1$$ && ($columns$$inline_1005_row$$inline_1001_rowIndex$$inline_1002$$ = $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_colHeader$.firstChild.childNodes, $colIndex$$inline_1004_skip$$1$$ < $columns$$inline_1005_row$$inline_1001_rowIndex$$inline_1002$$.length && 
  ($label$$inline_1000$$ = "" == $label$$inline_1000$$ ? $columns$$inline_1005_row$$inline_1001_rowIndex$$inline_1002$$[$colIndex$$inline_1004_skip$$1$$].id : [$label$$inline_1000$$, $columns$$inline_1005_row$$inline_1001_rowIndex$$inline_1002$$[$colIndex$$inline_1004_skip$$1$$].id].join(" "))));
  $label$$inline_1000$$ = "" == $label$$inline_1000$$ ? (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setAriaProperties$self$$, "active") : [$label$$inline_1000$$, (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setAriaProperties$self$$, "active")].join(" ");
  $label$$inline_1000$$ = [$label$$inline_1000$$, (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setAriaProperties$self$$, "state")].join(" ");
  $cell$$10$$.setAttribute("aria-labelledby", $label$$inline_1000$$);
  $focus$$1$$ != D.$JSCompiler_alias_VOID$$ && ($JSCompiler_StaticMethods_setAriaProperties$self$$.$m_cellToFocus$ == D.$JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_cellToFocus$ != $cell$$10$$) && $cell$$10$$.focus()
};
D.$JSCompiler_StaticMethods_unsetAriaProperties$$ = function $$JSCompiler_StaticMethods_unsetAriaProperties$$$($cell$$11$$) {
  $cell$$11$$.setAttribute("tabIndex", -1);
  $cell$$11$$.removeAttribute("id");
  $cell$$11$$.removeAttribute("aria-labelledby")
};
D.$JSCompiler_StaticMethods_getHeaderFromCell$$ = function $$JSCompiler_StaticMethods_getHeaderFromCell$$$($JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$, $cell$$13_colIndex$$1_row$$25_rowIndex$$5$$, $axis$$16$$) {
  if("row" === $axis$$16$$) {
    if($JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$.$m_rowHeader$ != D.$JSCompiler_alias_NULL$$ && ($cell$$13_colIndex$$1_row$$25_rowIndex$$5$$ = $cell$$13_colIndex$$1_row$$25_rowIndex$$5$$.parentNode, $cell$$13_colIndex$$1_row$$25_rowIndex$$5$$ = (0,D.$JSCompiler_StaticMethods_findIndexOf$$)($cell$$13_colIndex$$1_row$$25_rowIndex$$5$$), -1 < $cell$$13_colIndex$$1_row$$25_rowIndex$$5$$ && ($JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$ = $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$.$m_rowHeader$.firstChild.childNodes, 
    $cell$$13_colIndex$$1_row$$25_rowIndex$$5$$ < $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$.length))) {
      return $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$[$cell$$13_colIndex$$1_row$$25_rowIndex$$5$$]
    }
  }else {
    if("column" === $axis$$16$$ && $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$.$m_colHeader$ != D.$JSCompiler_alias_NULL$$ && ($cell$$13_colIndex$$1_row$$25_rowIndex$$5$$ = (0,D.$JSCompiler_StaticMethods_findIndexOf$$)($cell$$13_colIndex$$1_row$$25_rowIndex$$5$$), -1 < $cell$$13_colIndex$$1_row$$25_rowIndex$$5$$ && ($JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$ = $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$.$m_colHeader$.firstChild.childNodes, 
    $cell$$13_colIndex$$1_row$$25_rowIndex$$5$$ < $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$.length))) {
      return $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$[$cell$$13_colIndex$$1_row$$25_rowIndex$$5$$]
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_findIndexOf$$ = function $$JSCompiler_StaticMethods_findIndexOf$$$($elem$$14$$) {
  var $child$$2$$, $children$$1$$, $index$$61$$, $i$$23$$;
  $children$$1$$ = $elem$$14$$.parentNode.childNodes;
  $index$$61$$ = -1;
  for($i$$23$$ = 0;$i$$23$$ < $children$$1$$.length;$i$$23$$ += 1) {
    $child$$2$$ = $children$$1$$[$i$$23$$];
    if($child$$2$$ === $elem$$14$$) {
      return $index$$61$$ + 1
    }
    "DIV" == $child$$2$$.nodeName && $index$$61$$++
  }
  return $index$$61$$
};
D.$DvtDataGrid$$.prototype.createRange = function $$DvtDataGrid$$$$createRange$($startIndex$$, $endIndex$$) {
  var $startRow$$3$$, $endRow$$, $startColumn$$, $endColumn$$, $startKey$$, $endKey$$, $startRowKey$$, $endRowKey$$, $startColumnKey$$, $endColumnKey$$;
  $startKey$$ = this.$m_dataSource$.keys($startIndex$$);
  $endIndex$$ && ($endKey$$ = this.$m_dataSource$.keys($endIndex$$), $startIndex$$.row < $endIndex$$.row || -1 == $endIndex$$.row ? ($startRow$$3$$ = $startIndex$$.row, $endRow$$ = $endIndex$$.row, $startRowKey$$ = $startKey$$.row, $endRowKey$$ = $endKey$$.row) : ($startRow$$3$$ = $endIndex$$.row, $endRow$$ = $startIndex$$.row, $startRowKey$$ = $endKey$$.row, $endRowKey$$ = $startKey$$.row), !(0,window.isNaN)($startIndex$$.column) && !(0,window.isNaN)($endIndex$$.column) ? ($startIndex$$.column < 
  $endIndex$$.column || -1 == $endIndex$$.column ? ($startColumn$$ = $startIndex$$.column, $endColumn$$ = $endIndex$$.column, $startColumnKey$$ = $startKey$$.column, $endColumnKey$$ = $endKey$$.column) : ($startColumn$$ = $endIndex$$.column, $endColumn$$ = $startIndex$$.column, $startColumnKey$$ = $endKey$$.column, $endColumnKey$$ = $startKey$$.column), $startIndex$$ = {row:$startRow$$3$$, column:$startColumn$$}, $endIndex$$ = {row:$endRow$$, column:$endColumn$$}) : ($startIndex$$ = {row:$startRow$$3$$}, 
  $endIndex$$ = {row:$endRow$$}), $startKey$$ = {row:$startRowKey$$, column:$startColumnKey$$}, $endKey$$ = {row:$endRowKey$$, column:$endColumnKey$$});
  return{startIndex:$startIndex$$, endIndex:$endIndex$$, startKey:$startKey$$, endKey:$endKey$$}
};
D.$JSCompiler_StaticMethods_getEndIndex$$ = function $$JSCompiler_StaticMethods_getEndIndex$$$($range$$7$$) {
  return $range$$7$$.endIndex == D.$JSCompiler_alias_NULL$$ ? $range$$7$$.startIndex : $range$$7$$.endIndex
};
D.$JSCompiler_StaticMethods_getElementsInRange$$ = function $$JSCompiler_StaticMethods_getElementsInRange$$$($JSCompiler_StaticMethods_getElementsInRange$self_i$$24$$, $range$$8_rangeEndRow$$, $nodes_startRow$$4$$, $endRow$$1_rows$$9$$) {
  var $j$$8_startIndex$$1$$, $cell$$14_endIndex$$1$$, $columns$$5_rangeStartRow$$, $rangeStartColumn_row$$26$$, $rangeEndColumn$$;
  $nodes_startRow$$4$$ == D.$JSCompiler_alias_VOID$$ && ($nodes_startRow$$4$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$24$$.$m_startRow$);
  $endRow$$1_rows$$9$$ == D.$JSCompiler_alias_VOID$$ && ($endRow$$1_rows$$9$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$24$$.$m_endRow$);
  $j$$8_startIndex$$1$$ = $range$$8_rangeEndRow$$.startIndex;
  $cell$$14_endIndex$$1$$ = (0,D.$JSCompiler_StaticMethods_getEndIndex$$)($range$$8_rangeEndRow$$);
  $columns$$5_rangeStartRow$$ = $j$$8_startIndex$$1$$.row;
  $range$$8_rangeEndRow$$ = $cell$$14_endIndex$$1$$.row;
  -1 == $range$$8_rangeEndRow$$ && ($range$$8_rangeEndRow$$ = window.Number.MAX_VALUE);
  if($endRow$$1_rows$$9$$ < $columns$$5_rangeStartRow$$ || $range$$8_rangeEndRow$$ < $nodes_startRow$$4$$ || !(0,window.isNaN)($j$$8_startIndex$$1$$.column) && !(0,window.isNaN)($cell$$14_endIndex$$1$$.column) && ($rangeStartColumn_row$$26$$ = $j$$8_startIndex$$1$$.column, $rangeEndColumn$$ = $cell$$14_endIndex$$1$$.column, -1 == $rangeEndColumn$$ && ($rangeEndColumn$$ = window.Number.MAX_VALUE), $JSCompiler_StaticMethods_getElementsInRange$self_i$$24$$.$m_endCol$ < $rangeStartColumn_row$$26$$ || 
  $rangeEndColumn$$ < $JSCompiler_StaticMethods_getElementsInRange$self_i$$24$$.$m_startCol$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  $nodes_startRow$$4$$ = [];
  $endRow$$1_rows$$9$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$24$$.$m_databody$.firstChild.childNodes;
  $columns$$5_rangeStartRow$$ = window.Math.max(0, $columns$$5_rangeStartRow$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$24$$.$m_startRow$);
  $range$$8_rangeEndRow$$ = window.Math.min($endRow$$1_rows$$9$$.length - 1, $range$$8_rangeEndRow$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$24$$.$m_startRow$ + 1);
  if(!(0,window.isNaN)($rangeStartColumn_row$$26$$) && !(0,window.isNaN)($rangeEndColumn$$)) {
    $rangeStartColumn_row$$26$$ = window.Math.max(0, $rangeStartColumn_row$$26$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$24$$.$m_startCol$);
    $rangeEndColumn$$ = $rangeEndColumn$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$24$$.$m_startCol$ + 1;
    for($JSCompiler_StaticMethods_getElementsInRange$self_i$$24$$ = $columns$$5_rangeStartRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$24$$ < $range$$8_rangeEndRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$24$$ += 1) {
      $columns$$5_rangeStartRow$$ = $endRow$$1_rows$$9$$[$JSCompiler_StaticMethods_getElementsInRange$self_i$$24$$ + 1].childNodes;
      for($j$$8_startIndex$$1$$ = $rangeStartColumn_row$$26$$;$j$$8_startIndex$$1$$ < window.Math.min($columns$$5_rangeStartRow$$.length, $rangeEndColumn$$);$j$$8_startIndex$$1$$ += 1) {
        $cell$$14_endIndex$$1$$ = $columns$$5_rangeStartRow$$[$j$$8_startIndex$$1$$], $nodes_startRow$$4$$.push($cell$$14_endIndex$$1$$)
      }
    }
  }else {
    for($JSCompiler_StaticMethods_getElementsInRange$self_i$$24$$ = $columns$$5_rangeStartRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$24$$ < $range$$8_rangeEndRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$24$$ += 1) {
      $rangeStartColumn_row$$26$$ = $endRow$$1_rows$$9$$[$JSCompiler_StaticMethods_getElementsInRange$self_i$$24$$ + 1], $nodes_startRow$$4$$.push($rangeStartColumn_row$$26$$)
    }
  }
  return $nodes_startRow$$4$$
};
D.$JSCompiler_StaticMethods_isArrowKey$$ = function $$JSCompiler_StaticMethods_isArrowKey$$$($keyCode$$2$$) {
  return 38 == $keyCode$$2$$ || 40 == $keyCode$$2$$ || 37 == $keyCode$$2$$ || 39 == $keyCode$$2$$
};
D.$DvtDataGrid$$.prototype.createIndex = function $$DvtDataGrid$$$$createIndex$($row$$27$$, $column$$5$$) {
  return $row$$27$$ != D.$JSCompiler_alias_NULL$$ ? $column$$5$$ != D.$JSCompiler_alias_NULL$$ ? {row:$row$$27$$, column:$column$$5$$} : {row:$row$$27$$} : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_setHeaderAriaProperties$$ = function $$JSCompiler_StaticMethods_setHeaderAriaProperties$$$($header$$9$$) {
  $header$$9$$.setAttribute("tabIndex", 0);
  $header$$9$$.setAttribute("aria-labelledby", $header$$9$$.id);
  $header$$9$$.focus()
};
D.$JSCompiler_StaticMethods__setActiveHeader$$ = function $$JSCompiler_StaticMethods__setActiveHeader$$$($JSCompiler_StaticMethods__setActiveHeader$self$$, $index$$64$$, $elem$$18$$, $axis$$19$$) {
  var $activeClassName$$1$$ = $JSCompiler_StaticMethods__setActiveHeader$self$$.getMappedStyle("active");
  if($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem != D.$JSCompiler_alias_NULL$$) {
    "row" === $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.axis ? $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem.firstChild != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem.firstChild, $activeClassName$$1$$) : (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem, $activeClassName$$1$$);
    var $header$$inline_1007$$ = $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem;
    $header$$inline_1007$$.setAttribute("tabIndex", -1);
    $header$$inline_1007$$.removeAttribute("aria-labelledby")
  }
  -1 != $index$$64$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$ = {}), $axis$$19$$ != D.$JSCompiler_alias_VOID$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.axis = $axis$$19$$), $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.index = $index$$64$$, $elem$$18$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem = 
  $elem$$18$$, "row" === $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.axis ? $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem.firstChild != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem.firstChild, $activeClassName$$1$$) : (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem, $activeClassName$$1$$), 
  (0,D.$JSCompiler_StaticMethods_setHeaderAriaProperties$$)($elem$$18$$)))
};
D.$JSCompiler_StaticMethods__scrollToActiveHeader$$ = function $$JSCompiler_StaticMethods__scrollToActiveHeader$$$($JSCompiler_StaticMethods__scrollToActiveHeader$self$$) {
  var $axis$$20$$, $index$$65$$, $elem$$19$$, $indexes$$9$$;
  $axis$$20$$ = $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_activeHeader$.axis;
  $index$$65$$ = $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_activeHeader$.index;
  $elem$$19$$ = $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_activeHeader$.elem;
  "column" === $axis$$20$$ ? $indexes$$9$$ = {row:0, column:$index$$65$$} : "row" === $axis$$20$$ && ($indexes$$9$$ = {row:$index$$65$$, column:0});
  (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods__scrollToActiveHeader$self$$, $indexes$$9$$);
  $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_cellToFocus$ != D.$JSCompiler_alias_NULL$$ ? ($elem$$19$$.setAttribute("tabIndex", 0), $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_cellToFocus$ = $elem$$19$$) : $elem$$19$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setHeaderAriaProperties$$)($elem$$19$$)
};
D.$JSCompiler_StaticMethods_handleCellArrowKeys$$ = function $$JSCompiler_StaticMethods_handleCellArrowKeys$$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $isExtend$$) {
  var $currentCellIndex$$, $row$$28$$, $column$$6$$, $processed$$4$$, $focusFunc$$;
  if(!(0,D.$JSCompiler_StaticMethods_isFetchComplete$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$)) {
    return D.$JSCompiler_alias_TRUE$$
  }
  $currentCellIndex$$ = $isExtend$$ ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_selectionFrontier$ : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$;
  if($currentCellIndex$$ != D.$JSCompiler_alias_NULL$$) {
    $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$getResources$().isRTLMode() && (37 == $keyCode$$5_newCellIndex$$2$$ ? $keyCode$$5_newCellIndex$$2$$ = 39 : 39 == $keyCode$$5_newCellIndex$$2$$ && ($keyCode$$5_newCellIndex$$2$$ = 37));
    $focusFunc$$ = (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$) ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$selectAndFocus$.bind($JSCompiler_StaticMethods_handleCellArrowKeys$self$$) : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$activeAndFocus$.bind($JSCompiler_StaticMethods_handleCellArrowKeys$self$$);
    $processed$$4$$ = D.$JSCompiler_alias_FALSE$$;
    $row$$28$$ = $currentCellIndex$$.row;
    $column$$6$$ = $currentCellIndex$$.column;
    switch($keyCode$$5_newCellIndex$$2$$) {
      case 37:
        0 < $column$$6$$ ? ("row" == $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_options$.$getSelectionMode$() ? ($keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$.row, $column$$6$$ - 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$), $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$activeAndFocus$($keyCode$$5_newCellIndex$$2$$)) : 
        ($keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$28$$, $column$$6$$ - 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$), $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$) : $focusFunc$$($keyCode$$5_newCellIndex$$2$$)), $processed$$4$$ = D.$JSCompiler_alias_TRUE$$) : 
        ((0,D.$JSCompiler_StaticMethods__focusRowHeader$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $row$$28$$), $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_rowHeader$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_rowHeader$.firstChild && ($processed$$4$$ = D.$JSCompiler_alias_TRUE$$));
        break;
      case 39:
        (0,D.$JSCompiler_StaticMethods__isLastColumn$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $column$$6$$) ? $isExtend$$ || ($focusFunc$$($currentCellIndex$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $currentCellIndex$$), (0,D.$JSCompiler_StaticMethods__isLastColumn$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $column$$6$$) || ($processed$$4$$ = D.$JSCompiler_alias_TRUE$$)) : ("row" == $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_options$.$getSelectionMode$() ? 
        ($keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$.row, $column$$6$$ + 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$), $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$activeAndFocus$($keyCode$$5_newCellIndex$$2$$)) : ($keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$28$$, 
        $column$$6$$ + 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$), $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$) : $focusFunc$$($keyCode$$5_newCellIndex$$2$$)), $processed$$4$$ = D.$JSCompiler_alias_TRUE$$);
        break;
      case 38:
        0 < $row$$28$$ ? ($keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$28$$ - 1, $column$$6$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$), $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$) : $focusFunc$$($keyCode$$5_newCellIndex$$2$$)) : (0,D.$JSCompiler_StaticMethods__focusColumnHeader$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, 
        $column$$6$$);
        $processed$$4$$ = D.$JSCompiler_alias_TRUE$$;
        break;
      case 40:
        (0,D.$JSCompiler_StaticMethods__isLastRow$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $row$$28$$) ? $isExtend$$ || ($focusFunc$$($currentCellIndex$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $currentCellIndex$$), (0,D.$JSCompiler_StaticMethods__isLastRow$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $row$$28$$) || ($processed$$4$$ = D.$JSCompiler_alias_TRUE$$)) : ($keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$28$$ + 
        1, $column$$6$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$), $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$) : $focusFunc$$($keyCode$$5_newCellIndex$$2$$), $processed$$4$$ = D.$JSCompiler_alias_TRUE$$);
        break;
      case 36:
        $keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$28$$, 0);
        $focusFunc$$($keyCode$$5_newCellIndex$$2$$);
        (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$);
        $processed$$4$$ = D.$JSCompiler_alias_TRUE$$;
        break;
      case 35:
        $keyCode$$5_newCellIndex$$2$$ = (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "column") ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$28$$, window.Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_endCol$ - 1)) : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$28$$, window.Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_dataSource$.getCount("column") - 
        1));
        $focusFunc$$($keyCode$$5_newCellIndex$$2$$);
        (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$);
        $processed$$4$$ = D.$JSCompiler_alias_TRUE$$;
        break;
      case 33:
        $keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex(0, $column$$6$$);
        $focusFunc$$($keyCode$$5_newCellIndex$$2$$);
        (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$);
        $processed$$4$$ = D.$JSCompiler_alias_TRUE$$;
        break;
      case 34:
        $keyCode$$5_newCellIndex$$2$$ = (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "column") ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex(window.Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_endRow$ - 1), $column$$6$$) : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex(window.Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_dataSource$.getCount("row") - 1), $column$$6$$), 
        $focusFunc$$($keyCode$$5_newCellIndex$$2$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$), $processed$$4$$ = D.$JSCompiler_alias_TRUE$$
    }
    $isExtend$$ && $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_discontiguousSelection$ && ($JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_discontiguousSelection$ = D.$JSCompiler_alias_FALSE$$);
    return $processed$$4$$
  }
};
D.$JSCompiler_StaticMethods__focusColumnHeader$$ = function $$JSCompiler_StaticMethods__focusColumnHeader$$$($JSCompiler_StaticMethods__focusColumnHeader$self$$, $columnIndex$$2$$) {
  var $column$$7_relIndex$$, $columns$$6$$;
  $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_colHeader$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_colHeader$.firstChild && ($column$$7_relIndex$$ = $columnIndex$$2$$ - $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_startColHeader$, $columns$$6$$ = $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_colHeader$.firstChild.childNodes, $column$$7_relIndex$$ < $columns$$6$$.length && ($column$$7_relIndex$$ = $columns$$6$$[$column$$7_relIndex$$], 
  $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods__focusColumnHeader$self$$), $JSCompiler_StaticMethods__focusColumnHeader$self$$.setActive(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__focusColumnHeader$self$$) && (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__focusColumnHeader$self$$)), 
  (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)($JSCompiler_StaticMethods__focusColumnHeader$self$$, $columnIndex$$2$$, $column$$7_relIndex$$, "column")))
};
D.$JSCompiler_StaticMethods__focusRowHeader$$ = function $$JSCompiler_StaticMethods__focusRowHeader$$$($JSCompiler_StaticMethods__focusRowHeader$self$$, $rowIndex$$6$$) {
  var $relIndex$$1_row$$29$$, $rows$$10$$;
  $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_rowHeader$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_rowHeader$.firstChild && ($relIndex$$1_row$$29$$ = $rowIndex$$6$$ - $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_startRowHeader$ + 1, $rows$$10$$ = $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_rowHeader$.firstChild.childNodes, $relIndex$$1_row$$29$$ < $rows$$10$$.length && ($relIndex$$1_row$$29$$ = $rows$$10$$[$relIndex$$1_row$$29$$], 
  $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods__focusRowHeader$self$$), $JSCompiler_StaticMethods__focusRowHeader$self$$.setActive(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__focusRowHeader$self$$) && (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__focusRowHeader$self$$)), (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)($JSCompiler_StaticMethods__focusRowHeader$self$$, 
  $rowIndex$$6$$, $relIndex$$1_row$$29$$, "row")))
};
D.$JSCompiler_StaticMethods_scrollToIndex$$ = function $$JSCompiler_StaticMethods_scrollToIndex$$$($JSCompiler_StaticMethods_scrollToIndex$self$$, $index$$67$$) {
  var $cellLeft_row$$30$$, $cellWidth_column$$8$$, $deltaX$$3_scrollLeft$$8$$, $deltaY$$3_scrollTop$$9$$, $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$, $rowElem_rowHeight$$1$$, $viewportBottom$$5_viewportRight$$3$$, $rowTop$$1$$, $cell$$15$$;
  $cellLeft_row$$30$$ = $index$$67$$.row;
  $cellWidth_column$$8$$ = $index$$67$$.column;
  $deltaY$$3_scrollTop$$9$$ = $deltaX$$3_scrollLeft$$8$$ = 0;
  $cellLeft_row$$30$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ || $cellLeft_row$$30$$ >= $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_endRow$ ? ($deltaY$$3_scrollTop$$9$$ = $cellLeft_row$$30$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ ? $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgRowHeight$ * $cellLeft_row$$30$$ : $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgRowHeight$ * ($cellLeft_row$$30$$ + 1) - (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), 
  $deltaY$$3_scrollTop$$9$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$ - $deltaY$$3_scrollTop$$9$$, $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ = $index$$67$$) : ($databodyContent$$13_viewportLeft$$2_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$.firstChild, $rowElem_rowHeight$$1$$ = $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$.childNodes[$cellLeft_row$$30$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ + 
  1], $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$, $viewportBottom$$5_viewportRight$$3$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $rowTop$$1$$ = (0,window.parseInt)($rowElem_rowHeight$$1$$.style.top), $rowElem_rowHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($rowElem_rowHeight$$1$$), 
  $rowTop$$1$$ + $rowElem_rowHeight$$1$$ > $viewportBottom$$5_viewportRight$$3$$ ? $deltaY$$3_scrollTop$$9$$ = $viewportBottom$$5_viewportRight$$3$$ - ($rowTop$$1$$ + $rowElem_rowHeight$$1$$) : $rowTop$$1$$ < $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$ && ($deltaY$$3_scrollTop$$9$$ = $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$ - $rowTop$$1$$));
  !(0,window.isNaN)($cellWidth_column$$8$$) && $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ == D.$JSCompiler_alias_NULL$$ && ($cellWidth_column$$8$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$ || $cellWidth_column$$8$$ >= $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_endCol$ ? ($deltaX$$3_scrollLeft$$8$$ = $cellWidth_column$$8$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$ ? $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgColWidth$ * 
  $cellWidth_column$$8$$ : $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgColWidth$ * ($cellWidth_column$$8$$ + 1) - (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $deltaX$$3_scrollLeft$$8$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$ - $deltaX$$3_scrollLeft$$8$$, $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ = $index$$67$$) : ($databodyContent$$13_viewportLeft$$2_viewportTop$$4$$ = 
  $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$.firstChild, $rowElem_rowHeight$$1$$ = $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$.childNodes[$cellLeft_row$$30$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ + 1], $cell$$15$$ = $rowElem_rowHeight$$1$$.childNodes[$cellWidth_column$$8$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$], $cellLeft_row$$30$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($cell$$15$$, "left"), $cellWidth_column$$8$$ = 
  $cell$$15$$.offsetWidth, $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$, $viewportBottom$$5_viewportRight$$3$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $cellLeft_row$$30$$ < $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$ ? $deltaX$$3_scrollLeft$$8$$ = $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$ - 
  $cellLeft_row$$30$$ : $cellLeft_row$$30$$ + $cellWidth_column$$8$$ > $viewportBottom$$5_viewportRight$$3$$ && ($deltaX$$3_scrollLeft$$8$$ = $viewportBottom$$5_viewportRight$$3$$ - ($cellLeft_row$$30$$ + $cellWidth_column$$8$$))));
  if(0 != $deltaX$$3_scrollLeft$$8$$ || 0 != $deltaY$$3_scrollTop$$9$$) {
    $cell$$15$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_cellToFocus$ = $cell$$15$$), (0,D.$JSCompiler_StaticMethods_scrollDelta$$)($JSCompiler_StaticMethods_scrollToIndex$self$$, $deltaX$$3_scrollLeft$$8$$, $deltaY$$3_scrollTop$$9$$)
  }
};
D.$JSCompiler_StaticMethods_findHeader$$ = function $$JSCompiler_StaticMethods_findHeader$$$($JSCompiler_StaticMethods_findHeader$self$$, $elem$$20$$, $headerCellClassName$$) {
  $headerCellClassName$$ == D.$JSCompiler_alias_VOID$$ && ($headerCellClassName$$ = $JSCompiler_StaticMethods_findHeader$self$$.getMappedStyle("headercell"));
  if($headerCellClassName$$ != D.$JSCompiler_alias_NULL$$) {
    if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($elem$$20$$, $headerCellClassName$$)) {
      return $elem$$20$$
    }
    if($elem$$20$$.parentNode) {
      return(0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods_findHeader$self$$, $elem$$20$$.parentNode, $headerCellClassName$$)
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_updateRowBanding$$ = function $$JSCompiler_StaticMethods_updateRowBanding$$$($JSCompiler_StaticMethods_updateRowBanding$self$$) {
  var $rowBandingInterval$$3$$, $rows$$11$$, $i$$25$$, $index$$68$$, $bandingClass$$;
  $rowBandingInterval$$3$$ = (0,D.$JSCompiler_StaticMethods_getRowBandingInterval$$)($JSCompiler_StaticMethods_updateRowBanding$self$$.$m_options$);
  if(0 < $rowBandingInterval$$3$$) {
    $rows$$11$$ = $JSCompiler_StaticMethods_updateRowBanding$self$$.$m_databody$.firstChild.childNodes;
    $bandingClass$$ = $JSCompiler_StaticMethods_updateRowBanding$self$$.getMappedStyle("banded");
    for($i$$25$$ = 1;$i$$25$$ < $rows$$11$$.length;$i$$25$$++) {
      $index$$68$$ = $JSCompiler_StaticMethods_updateRowBanding$self$$.$m_startRow$ + $i$$25$$ - 1, 1 === window.Math.floor($index$$68$$ / $rowBandingInterval$$3$$) % 2 ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($rows$$11$$[$i$$25$$], $bandingClass$$) || (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($rows$$11$$[$i$$25$$], $bandingClass$$) : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($rows$$11$$[$i$$25$$], $bandingClass$$) && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($rows$$11$$[$i$$25$$], 
      $bandingClass$$)
    }
  }
};
D.$JSCompiler_StaticMethods__setAccInfoText$$ = function $$JSCompiler_StaticMethods__setAccInfoText$$$($JSCompiler_StaticMethods__setAccInfoText$self$$, $key$$37_text$$11$$, $args$$4$$) {
  $key$$37_text$$11$$ = $JSCompiler_StaticMethods__setAccInfoText$self$$.$getResources$().getTranslatedText($key$$37_text$$11$$, $args$$4$$);
  $key$$37_text$$11$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setAccInfoText$self$$.$m_accInfo$.innerHTML = $key$$37_text$$11$$)
};
D.$DvtDataGrid$$.prototype.$handleExpandEvent$ = function $$DvtDataGrid$$$$$handleExpandEvent$$($event$$39$$) {
  (0,D.$JSCompiler_StaticMethods__findRowByKey$$)(this, $event$$39$$.rowKey).setAttribute("aria-expanded", D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "accessibleRowExpanded")
};
D.$DvtDataGrid$$.prototype.$handleCollapseEvent$ = function $$DvtDataGrid$$$$$handleCollapseEvent$$($event$$40$$) {
  (0,D.$JSCompiler_StaticMethods__findRowByKey$$)(this, $event$$40$$.rowKey).setAttribute("aria-expanded", D.$JSCompiler_alias_FALSE$$);
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "accessibleRowCollapsed")
};
D.$DvtDataGrid$$.prototype.$_getKey$ = function $$DvtDataGrid$$$$$_getKey$$($element$$9$$) {
  return $element$$9$$.getAttribute(this.$getResources$().getMappedAttribute("key"))
};
D.$JSCompiler_StaticMethods__handleCutPasteKeydown$$ = function $$JSCompiler_StaticMethods__handleCutPasteKeydown$$$($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $event$$41$$) {
  if((0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, (0,D.$JSCompiler_StaticMethods_findRow$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $event$$41$$.target))) {
    if(88 == $event$$41$$.keyCode && (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_utils$, $event$$41$$)) {
      return(0,D.$JSCompiler_StaticMethods__handleCut$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $event$$41$$)
    }
    if(86 == $event$$41$$.keyCode && (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_utils$, $event$$41$$)) {
      return(0,D.$JSCompiler_StaticMethods__handlePaste$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $event$$41$$)
    }
    if(27 == $event$$41$$.keyCode && $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRow$ != D.$JSCompiler_alias_NULL$$) {
      return(0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.getMappedStyle("cut")), $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRow$ = D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRowHeader$ !== D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRowHeader$, 
      $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.getMappedStyle("cut")), $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRowHeader$ = D.$JSCompiler_alias_NULL$$), D.$JSCompiler_alias_TRUE$$
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__handleCut$$ = function $$JSCompiler_StaticMethods__handleCut$$$($JSCompiler_StaticMethods__handleCut$self$$, $event$$42$$) {
  var $rowKey$$6$$;
  $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handleCut$self$$.getMappedStyle("cut"));
  $rowKey$$6$$ = $JSCompiler_StaticMethods__handleCut$self$$.$_getKey$($JSCompiler_StaticMethods__handleCut$self$$.find($event$$42$$.target, "row"));
  $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__handleCut$self$$, $rowKey$$6$$);
  $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRowHeader$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__handleCut$self$$, $rowKey$$6$$);
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handleCut$self$$.getMappedStyle("cut"));
  $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRowHeader$ !== D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleCut$self$$.$m_cutRowHeader$, $JSCompiler_StaticMethods__handleCut$self$$.getMappedStyle("cut"));
  return D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_StaticMethods__handlePaste$$ = function $$JSCompiler_StaticMethods__handlePaste$$$($JSCompiler_StaticMethods__handlePaste$self$$, $event$$43$$) {
  var $row$$35$$;
  return $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$ != D.$JSCompiler_alias_NULL$$ ? ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handlePaste$self$$.getMappedStyle("cut")), $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRowHeader$ !== D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRowHeader$, $JSCompiler_StaticMethods__handlePaste$self$$.getMappedStyle("cut")), 
  $row$$35$$ = $JSCompiler_StaticMethods__handlePaste$self$$.find($event$$43$$.target, "row"), $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$ !== $row$$35$$ && ((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__handlePaste$self$$) && ((0,D.$JSCompiler_StaticMethods_unhighlightSelection$$)($JSCompiler_StaticMethods__handlePaste$self$$), (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__handlePaste$self$$)), $JSCompiler_StaticMethods__handlePaste$self$$.$m_dataSource$.move($JSCompiler_StaticMethods__handlePaste$self$$.$_getKey$($JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$), 
  $JSCompiler_StaticMethods__handlePaste$self$$.$_getKey$($row$$35$$))), $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$ = D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__handleMove$$ = function $$JSCompiler_StaticMethods__handleMove$$$($JSCompiler_StaticMethods__handleMove$self$$, $event$$44$$) {
  var $deltaY$$4_rowKey$$7$$, $height$$23$$;
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$ == D.$JSCompiler_alias_NULL$$ && ($deltaY$$4_rowKey$$7$$ = $JSCompiler_StaticMethods__handleMove$self$$.$_getKey$($JSCompiler_StaticMethods__handleMove$self$$.find($event$$44$$.target, "row")), $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__handleMove$self$$, $deltaY$$4_rowKey$$7$$), $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__handleMove$self$$, 
  $deltaY$$4_rowKey$$7$$), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("move")), $JSCompiler_StaticMethods__handleMove$self$$.$m_originalTop$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top"), $JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$ = window.document.createElement("div"), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$, 
  $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("droptarget")), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$)), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$, $JSCompiler_StaticMethods__handleMove$self$$.$m_originalTop$, "top"), $JSCompiler_StaticMethods__handleMove$self$$.$m_databody$.firstChild.appendChild($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$), 
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("move")), $JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$ = window.document.createElement("div"), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$, 
  $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("droptarget")), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$)), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$, $JSCompiler_StaticMethods__handleMove$self$$.$m_originalTop$, "top"), $JSCompiler_StaticMethods__handleMove$self$$.$m_rowHeader$.firstChild.appendChild($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$)));
  $JSCompiler_StaticMethods__handleMove$self$$.$m_prevY$ = $JSCompiler_StaticMethods__handleMove$self$$.$m_currentY$;
  $JSCompiler_StaticMethods__handleMove$self$$.$m_currentY$ = $event$$44$$.pageY;
  $deltaY$$4_rowKey$$7$$ = $JSCompiler_StaticMethods__handleMove$self$$.$m_currentY$ - $JSCompiler_StaticMethods__handleMove$self$$.$m_prevY$;
  $height$$23$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top") + $deltaY$$4_rowKey$$7$$, "top");
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, "top") + $deltaY$$4_rowKey$$7$$, "top");
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
D.$JSCompiler_StaticMethods__handleMoveMouseUp$$ = function $$JSCompiler_StaticMethods__handleMoveMouseUp$$$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$, $validUp$$) {
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dropTarget$.parentNode.removeChild($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dropTarget$);
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$.style.zIndex = 0;
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dropTargetHeader$.parentNode.removeChild($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dropTargetHeader$), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRowHeader$.style.zIndex = 0);
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.setActive(D.$JSCompiler_alias_NULL$$);
  (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$) && ((0,D.$JSCompiler_StaticMethods_unhighlightSelection$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$), (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$));
  $validUp$$ == D.$JSCompiler_alias_TRUE$$ ? $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dataSource$.move($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$_getKey$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$.nextSibling === D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$_getKey$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$.nextSibling)) : 
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dataSource$.move($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$_getKey$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$_getKey$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$));
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_databodyMove$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$ = function $$JSCompiler_StaticMethods__isMoveOnRowEnabled$$$($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$, $row$$36$$) {
  var $JSCompiler_temp$$525_capability$$inline_1011$$;
  $row$$36$$ == D.$JSCompiler_alias_NULL$$ || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($row$$36$$.parentNode, $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.getMappedStyle("colheader")) ? $JSCompiler_temp$$525_capability$$inline_1011$$ = D.$JSCompiler_alias_FALSE$$ : ($JSCompiler_temp$$525_capability$$inline_1011$$ = $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_dataSource$.getCapability("move"), $JSCompiler_temp$$525_capability$$inline_1011$$ = "enable" === (0,D.$JSCompiler_StaticMethods_nullOrDefault$$)((0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_options$, 
  "dnd", "reorder")) && ("full" === $JSCompiler_temp$$525_capability$$inline_1011$$ || "row" === $JSCompiler_temp$$525_capability$$inline_1011$$) && ($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$_getKey$($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_databody$.firstChild.childNodes[$JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_active$.row + 1]) : $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_activeHeader$ != 
  D.$JSCompiler_alias_NULL$$ && "row" === $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_activeHeader$.axis ? $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$_getKey$($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_rowHeader$.firstChild.childNodes[$JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_activeHeader$.index + 1]) : D.$JSCompiler_alias_NULL$$) === $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$_getKey$($row$$36$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$);
  return $JSCompiler_temp$$525_capability$$inline_1011$$
};
D.$JSCompiler_StaticMethods__manageMoveCursor$$ = function $$JSCompiler_StaticMethods__manageMoveCursor$$$($JSCompiler_StaticMethods__manageMoveCursor$self$$, $row$$37$$, $header$$12$$) {
  $row$$37$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)($JSCompiler_StaticMethods__manageMoveCursor$self$$, $row$$37$$) ? ($JSCompiler_StaticMethods__manageMoveCursor$self$$.$m_rowHeader$.style.cursor = "move", $header$$12$$ || ($row$$37$$.style.cursor = "move"), $JSCompiler_StaticMethods__manageMoveCursor$self$$.$m_moveCursor$ = D.$JSCompiler_alias_TRUE$$) : ("move" === $JSCompiler_StaticMethods__manageMoveCursor$self$$.$m_rowHeader$.style.cursor && ($JSCompiler_StaticMethods__manageMoveCursor$self$$.$m_rowHeader$.style.cursor = 
  "default"), "move" === $row$$37$$.style.cursor && ($row$$37$$.style.cursor = "default"), $JSCompiler_StaticMethods__manageMoveCursor$self$$.$m_moveCursor$ = D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_StaticMethods_unhighlightSelection$$ = function $$JSCompiler_StaticMethods_unhighlightSelection$$$($JSCompiler_StaticMethods_unhighlightSelection$self$$) {
  var $i$$35$$, $ranges$$;
  $ranges$$ = $JSCompiler_StaticMethods_unhighlightSelection$self$$.$GetSelection$();
  for($i$$35$$ = 0;$i$$35$$ < $ranges$$.length;$i$$35$$ += 1) {
    (0,D.$JSCompiler_StaticMethods_unhighlightRange$$)($JSCompiler_StaticMethods_unhighlightSelection$self$$, $ranges$$[$i$$35$$])
  }
  $JSCompiler_StaticMethods_unhighlightSelection$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && "row" == $JSCompiler_StaticMethods_unhighlightSelection$self$$.$m_options$.$getSelectionMode$() && (0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods_unhighlightSelection$self$$)
};
D.$JSCompiler_StaticMethods_unhighlightRange$$ = function $$JSCompiler_StaticMethods_unhighlightRange$$$($JSCompiler_StaticMethods_unhighlightRange$self$$, $range$$9$$) {
  var $elems$$inline_1113$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_unhighlightRange$self$$, $range$$9$$), $i$$inline_1114$$, $selectedClassName$$inline_1115$$, $activeClassName$$inline_1116$$, $elem$$inline_1117$$;
  if(!($elems$$inline_1113$$ == D.$JSCompiler_alias_NULL$$ || 0 == $elems$$inline_1113$$.length)) {
    if($selectedClassName$$inline_1115$$ = $JSCompiler_StaticMethods_unhighlightRange$self$$.getMappedStyle("selected"), $activeClassName$$inline_1116$$ = $JSCompiler_StaticMethods_unhighlightRange$self$$.getMappedStyle("active"), $selectedClassName$$inline_1115$$ != D.$JSCompiler_alias_NULL$$ && $activeClassName$$inline_1116$$ != D.$JSCompiler_alias_NULL$$) {
      for($i$$inline_1114$$ = 0;$i$$inline_1114$$ < $elems$$inline_1113$$.length;$i$$inline_1114$$ += 1) {
        $elem$$inline_1117$$ = $elems$$inline_1113$$[$i$$inline_1114$$], (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($elem$$inline_1117$$, $activeClassName$$inline_1116$$), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($elem$$inline_1117$$, $selectedClassName$$inline_1115$$), (0,D.$JSCompiler_StaticMethods_unsetAriaProperties$$)($elem$$inline_1117$$)
      }
    }
  }
};
D.$JSCompiler_StaticMethods_highlightRange$$ = function $$JSCompiler_StaticMethods_highlightRange$$$($JSCompiler_StaticMethods_highlightRange$self$$, $elems$$2_range$$10$$, $updateAccInfo$$) {
  $elems$$2_range$$10$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_highlightRange$self$$, $elems$$2_range$$10$$);
  (0,D.$JSCompiler_StaticMethods_highlightElems$$)($JSCompiler_StaticMethods_highlightRange$self$$, $elems$$2_range$$10$$);
  $updateAccInfo$$ && (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_highlightRange$self$$, "accessibleMultiCellSelected", {num:$elems$$2_range$$10$$.length})
};
D.$JSCompiler_StaticMethods_highlightElems$$ = function $$JSCompiler_StaticMethods_highlightElems$$$($JSCompiler_StaticMethods_highlightElems$self$$, $elems$$4$$) {
  var $selectedClassName$$3$$, $i$$37$$, $elem$$25$$;
  if(!($elems$$4$$ == D.$JSCompiler_alias_NULL$$ || 0 == $elems$$4$$.length)) {
    if($selectedClassName$$3$$ = $JSCompiler_StaticMethods_highlightElems$self$$.getMappedStyle("selected"), $selectedClassName$$3$$ != D.$JSCompiler_alias_NULL$$) {
      for($i$$37$$ = 0;$i$$37$$ < $elems$$4$$.length;$i$$37$$ += 1) {
        $elem$$25$$ = $elems$$4$$[$i$$37$$], (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($elem$$25$$, $selectedClassName$$3$$), (0,D.$JSCompiler_StaticMethods_setAriaProperties$$)($JSCompiler_StaticMethods_highlightElems$self$$, $elem$$25$$)
      }
    }
  }
};
D.$JSCompiler_StaticMethods_applySelection$$ = function $$JSCompiler_StaticMethods_applySelection$$$($JSCompiler_StaticMethods_applySelection$self$$, $startRow$$5$$, $endRow$$2$$) {
  var $i$$38$$, $ranges$$1$$, $elems$$5$$;
  $ranges$$1$$ = $JSCompiler_StaticMethods_applySelection$self$$.$GetSelection$();
  for($i$$38$$ = 0;$i$$38$$ < $ranges$$1$$.length;$i$$38$$ += 1) {
    $elems$$5$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_applySelection$self$$, $ranges$$1$$[$i$$38$$], $startRow$$5$$, $endRow$$2$$), (0,D.$JSCompiler_StaticMethods_highlightElems$$)($JSCompiler_StaticMethods_applySelection$self$$, $elems$$5$$)
  }
};
D.$DvtDataGrid$$.prototype.$_isSelected$ = function $$DvtDataGrid$$$$$_isSelected$$($cell$$17$$) {
  var $selectedClassName$$4$$ = this.getMappedStyle("selected");
  return"row" == this.$m_options$.$getSelectionMode$() && $selectedClassName$$4$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findRow$$)(this, $cell$$17$$), $selectedClassName$$4$$) : $selectedClassName$$4$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($cell$$17$$, $selectedClassName$$4$$) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_handleDatabodyClickSelection$$ = function $$JSCompiler_StaticMethods_handleDatabodyClickSelection$$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $event$$59$$) {
  var $index$$73_rowIndex$$inline_1121$$, $cell$$18_columnIndex$$inline_1122_index$$inline_1120$$, $ctrlKey$$2_indexToRemove$$inline_1123$$, $ranges$$inline_1124_shiftKey$$2$$, $clone$$3$$, $activeKeyChange_i$$inline_1125$$ = D.$JSCompiler_alias_TRUE$$;
  $cell$$18_columnIndex$$inline_1122_index$$inline_1120$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $event$$59$$.target);
  $cell$$18_columnIndex$$inline_1122_index$$inline_1120$$ != D.$JSCompiler_alias_NULL$$ && ($index$$73_rowIndex$$inline_1121$$ = {row:$JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$getRowIndex$($cell$$18_columnIndex$$inline_1122_index$$inline_1120$$.parentNode), column:$JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$getCellIndex$($cell$$18_columnIndex$$inline_1122_index$$inline_1120$$)});
  if($index$$73_rowIndex$$inline_1121$$ != D.$JSCompiler_alias_NULL$$ && $index$$73_rowIndex$$inline_1121$$ != D.$JSCompiler_alias_VOID$$) {
    (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, -1);
    $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$;
    (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $index$$73_rowIndex$$inline_1121$$);
    $clone$$3$$ = $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$GetSelection$().slice(0);
    $ctrlKey$$2_indexToRemove$$inline_1123$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_utils$, $event$$59$$);
    $ranges$$inline_1124_shiftKey$$2$$ = $event$$59$$.shiftKey;
    if((0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$)) {
      if($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_utils$.$isTouchDevice$()) {
        if($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$_isSelected$($cell$$18_columnIndex$$inline_1122_index$$inline_1120$$)) {
          $cell$$18_columnIndex$$inline_1122_index$$inline_1120$$ = $index$$73_rowIndex$$inline_1121$$;
          var $endIndex$$inline_1128_range$$inline_1126_rangeEndColumn$$inline_1132$$, $rangeStartColumn$$inline_1131_startIndex$$inline_1127$$, $rangeStartRow$$inline_1129$$, $rangeEndRow$$inline_1130$$;
          "row" == $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_options$.$getSelectionMode$() && ($cell$$18_columnIndex$$inline_1122_index$$inline_1120$$ = $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.createIndex($cell$$18_columnIndex$$inline_1122_index$$inline_1120$$.row));
          $index$$73_rowIndex$$inline_1121$$ = $cell$$18_columnIndex$$inline_1122_index$$inline_1120$$.row;
          $cell$$18_columnIndex$$inline_1122_index$$inline_1120$$ = $cell$$18_columnIndex$$inline_1122_index$$inline_1120$$.column;
          $ctrlKey$$2_indexToRemove$$inline_1123$$ = -1;
          $ranges$$inline_1124_shiftKey$$2$$ = $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$GetSelection$();
          for($activeKeyChange_i$$inline_1125$$ = 0;$activeKeyChange_i$$inline_1125$$ < $ranges$$inline_1124_shiftKey$$2$$.length;$activeKeyChange_i$$inline_1125$$ += 1) {
            if($endIndex$$inline_1128_range$$inline_1126_rangeEndColumn$$inline_1132$$ = $ranges$$inline_1124_shiftKey$$2$$[$activeKeyChange_i$$inline_1125$$], $rangeStartColumn$$inline_1131_startIndex$$inline_1127$$ = $endIndex$$inline_1128_range$$inline_1126_rangeEndColumn$$inline_1132$$.startIndex, $endIndex$$inline_1128_range$$inline_1126_rangeEndColumn$$inline_1132$$ = (0,D.$JSCompiler_StaticMethods_getEndIndex$$)($endIndex$$inline_1128_range$$inline_1126_rangeEndColumn$$inline_1132$$), $rangeStartRow$$inline_1129$$ = 
            $rangeStartColumn$$inline_1131_startIndex$$inline_1127$$.row, $rangeEndRow$$inline_1130$$ = $endIndex$$inline_1128_range$$inline_1126_rangeEndColumn$$inline_1132$$.row, !($rangeStartRow$$inline_1129$$ != $index$$73_rowIndex$$inline_1121$$ || $rangeEndRow$$inline_1130$$ != $index$$73_rowIndex$$inline_1121$$)) {
              if(!(0,window.isNaN)($rangeStartColumn$$inline_1131_startIndex$$inline_1127$$.column) && !(0,window.isNaN)($endIndex$$inline_1128_range$$inline_1126_rangeEndColumn$$inline_1132$$.column)) {
                if($rangeStartColumn$$inline_1131_startIndex$$inline_1127$$ = $rangeStartColumn$$inline_1131_startIndex$$inline_1127$$.column, $endIndex$$inline_1128_range$$inline_1126_rangeEndColumn$$inline_1132$$ = $endIndex$$inline_1128_range$$inline_1126_rangeEndColumn$$inline_1132$$.column, !($rangeStartColumn$$inline_1131_startIndex$$inline_1127$$ != $cell$$18_columnIndex$$inline_1122_index$$inline_1120$$ || $endIndex$$inline_1128_range$$inline_1126_rangeEndColumn$$inline_1132$$ != $cell$$18_columnIndex$$inline_1122_index$$inline_1120$$)) {
                  $ctrlKey$$2_indexToRemove$$inline_1123$$ = $activeKeyChange_i$$inline_1125$$;
                  break
                }
              }else {
                if((0,window.isNaN)($cell$$18_columnIndex$$inline_1122_index$$inline_1120$$)) {
                  $ctrlKey$$2_indexToRemove$$inline_1123$$ = $activeKeyChange_i$$inline_1125$$;
                  break
                }
              }
            }
          }
          -1 != $ctrlKey$$2_indexToRemove$$inline_1123$$ && ((0,D.$JSCompiler_StaticMethods_unhighlightRange$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $ranges$$inline_1124_shiftKey$$2$$[$ctrlKey$$2_indexToRemove$$inline_1123$$]), $ranges$$inline_1124_shiftKey$$2$$.splice($ctrlKey$$2_indexToRemove$$inline_1123$$, 1));
          $activeKeyChange_i$$inline_1125$$ = D.$JSCompiler_alias_FALSE$$
        }else {
          (0,D.$JSCompiler_StaticMethods_augmentSelectionAndFocus$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $index$$73_rowIndex$$inline_1121$$)
        }
      }else {
        !$ctrlKey$$2_indexToRemove$$inline_1123$$ && !$ranges$$inline_1124_shiftKey$$2$$ ? $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$73_rowIndex$$inline_1121$$) : !$ctrlKey$$2_indexToRemove$$inline_1123$$ && $ranges$$inline_1124_shiftKey$$2$$ ? ((0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $index$$73_rowIndex$$inline_1121$$), $activeKeyChange_i$$inline_1125$$ = D.$JSCompiler_alias_FALSE$$) : 
        (0,D.$JSCompiler_StaticMethods_augmentSelectionAndFocus$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $index$$73_rowIndex$$inline_1121$$)
      }
    }else {
      $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$73_rowIndex$$inline_1121$$)
    }
    (0,D.$JSCompiler_StaticMethods__compareSelections$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$GetSelection$(), $clone$$3$$) || $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$fireSelectionEvent$($event$$59$$);
    $activeKeyChange_i$$inline_1125$$ && (0,D.$JSCompiler_StaticMethods__fireActiveKeyChangeEvent$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $event$$59$$)
  }
};
D.$JSCompiler_StaticMethods__compareSelections$$ = function $$JSCompiler_StaticMethods__compareSelections$$$($selection1$$, $selection2$$) {
  var $i$$40$$, $j$$15$$, $foundMatch$$;
  if($selection1$$.length !== $selection2$$.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for($i$$40$$ = 0;$i$$40$$ < $selection1$$.length;$i$$40$$ += 1) {
    $foundMatch$$ = D.$JSCompiler_alias_FALSE$$;
    for($j$$15$$ = 0;$j$$15$$ < $selection2$$.length;$j$$15$$ += 1) {
      $selection1$$[$i$$40$$].startIndex.row === $selection2$$[$j$$15$$].startIndex.row && ($selection1$$[$i$$40$$].startIndex.column === $selection2$$[$j$$15$$].startIndex.column && $selection1$$[$i$$40$$].endIndex.row === $selection2$$[$j$$15$$].endIndex.row && $selection1$$[$i$$40$$].endIndex.column === $selection2$$[$j$$15$$].endIndex.column) && ($foundMatch$$ = D.$JSCompiler_alias_TRUE$$)
    }
    if($foundMatch$$ === D.$JSCompiler_alias_FALSE$$) {
      return D.$JSCompiler_alias_FALSE$$
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_StaticMethods_findRow$$ = function $$JSCompiler_StaticMethods_findRow$$$($JSCompiler_StaticMethods_findRow$self$$, $elem$$26$$) {
  return $JSCompiler_StaticMethods_findRow$self$$.find($elem$$26$$, "row")
};
D.$JSCompiler_StaticMethods__clearSelection$$ = function $$JSCompiler_StaticMethods__clearSelection$$$($JSCompiler_StaticMethods__clearSelection$self$$) {
  (0,D.$JSCompiler_StaticMethods_unhighlightSelection$$)($JSCompiler_StaticMethods__clearSelection$self$$);
  $JSCompiler_StaticMethods__clearSelection$self$$.$GetSelection$().length = 0
};
D.$JSCompiler_StaticMethods_setActionableMode$$ = function $$JSCompiler_StaticMethods_setActionableMode$$$($JSCompiler_StaticMethods_setActionableMode$self$$, $flag$$3$$) {
  $JSCompiler_StaticMethods_setActionableMode$self$$.$m_keyMode$ = $flag$$3$$ ? "actionable" : "navigation";
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_setActionableMode$self$$, "actionable" === $JSCompiler_StaticMethods_setActionableMode$self$$.$m_keyMode$ ? "accessibleActionableMode" : "accessibleNavigationMode")
};
D.$JSCompiler_StaticMethods__selectEntireRow$$ = function $$JSCompiler_StaticMethods__selectEntireRow$$$($JSCompiler_StaticMethods__selectEntireRow$self$$, $endIndex$$4_row$$39$$, $event$$61$$) {
  var $startIndex$$3$$;
  $startIndex$$3$$ = $JSCompiler_StaticMethods__selectEntireRow$self$$.createIndex($endIndex$$4_row$$39$$, 0);
  $endIndex$$4_row$$39$$ = $JSCompiler_StaticMethods__selectEntireRow$self$$.createIndex($endIndex$$4_row$$39$$, -1);
  (0,D.$JSCompiler_StaticMethods__selectRange$$)($JSCompiler_StaticMethods__selectEntireRow$self$$, $startIndex$$3$$, $endIndex$$4_row$$39$$, $event$$61$$)
};
D.$JSCompiler_StaticMethods__selectEntireColumn$$ = function $$JSCompiler_StaticMethods__selectEntireColumn$$$($JSCompiler_StaticMethods__selectEntireColumn$self$$, $column$$10_endIndex$$5$$, $event$$62$$) {
  var $startIndex$$4$$;
  $startIndex$$4$$ = $JSCompiler_StaticMethods__selectEntireColumn$self$$.createIndex(0, $column$$10_endIndex$$5$$);
  $column$$10_endIndex$$5$$ = $JSCompiler_StaticMethods__selectEntireColumn$self$$.createIndex(-1, $column$$10_endIndex$$5$$);
  (0,D.$JSCompiler_StaticMethods__selectRange$$)($JSCompiler_StaticMethods__selectEntireColumn$self$$, $startIndex$$4$$, $column$$10_endIndex$$5$$, $event$$62$$)
};
D.$JSCompiler_StaticMethods__selectRange$$ = function $$JSCompiler_StaticMethods__selectRange$$$($JSCompiler_StaticMethods__selectRange$self$$, $newRange_startIndex$$5$$, $endIndex$$6$$, $event$$63$$) {
  (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__selectRange$self$$);
  $newRange_startIndex$$5$$ = $JSCompiler_StaticMethods__selectRange$self$$.createRange($newRange_startIndex$$5$$, $endIndex$$6$$);
  $JSCompiler_StaticMethods__selectRange$self$$.$GetSelection$().push($newRange_startIndex$$5$$);
  (0,D.$JSCompiler_StaticMethods_highlightRange$$)($JSCompiler_StaticMethods__selectRange$self$$, $newRange_startIndex$$5$$);
  $JSCompiler_StaticMethods__selectRange$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__selectRange$self$$.$m_selectionFrontier$ = $JSCompiler_StaticMethods__selectRange$self$$.$m_active$, (0,D.$JSCompiler_StaticMethods_highlightActive$$)($JSCompiler_StaticMethods__selectRange$self$$));
  $JSCompiler_StaticMethods__selectRange$self$$.$fireSelectionEvent$($event$$63$$)
};
D.$DvtDataGrid$$.prototype.$GetSelection$ = function $$DvtDataGrid$$$$$GetSelection$$() {
  this.$m_selection$ == D.$JSCompiler_alias_NULL$$ && (this.$m_selection$ = []);
  return this.$m_selection$
};
D.$DvtDataGrid$$.prototype.GetSelection = D.$DvtDataGrid$$.prototype.$GetSelection$;
D.$DvtDataGrid$$.prototype.$SetSelection$ = function $$DvtDataGrid$$$$$SetSelection$$($selection$$1$$) {
  $selection$$1$$ != D.$JSCompiler_alias_VOID$$ && ($selection$$1$$ == D.$JSCompiler_alias_NULL$$ && ($selection$$1$$ = []), this.$m_selection$ = $selection$$1$$, this.$m_databody$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_applySelection$$)(this, this.$m_startRow$, this.$m_endRow$), this.$fireSelectionEvent$(D.$JSCompiler_alias_NULL$$))
};
D.$DvtDataGrid$$.prototype.SetSelection = D.$DvtDataGrid$$.prototype.$SetSelection$;
D.$DvtDataGrid$$.prototype.$fireSelectionEvent$ = function $$DvtDataGrid$$$$$fireSelectionEvent$$($details$$7_event$$64$$) {
  $details$$7_event$$64$$ = {event:$details$$7_event$$64$$, ui:{selection:this.$GetSelection$()}};
  this.fireEvent("select", $details$$7_event$$64$$)
};
D.$JSCompiler_StaticMethods_extendSelection$$ = function $$JSCompiler_StaticMethods_extendSelection$$$($JSCompiler_StaticMethods_extendSelection$self$$, $index$$74$$) {
  var $anchor_newRange$$1$$, $selection$$2$$, $currentRange$$, $startIndexesMatch$$, $endIndexesMatch$$;
  $anchor_newRange$$1$$ = $JSCompiler_StaticMethods_extendSelection$self$$.$m_active$;
  if($anchor_newRange$$1$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_extendSelection$self$$.$m_selectionFrontier$ = $index$$74$$, "row" == $JSCompiler_StaticMethods_extendSelection$self$$.$m_options$.$getSelectionMode$() && ($index$$74$$ = $JSCompiler_StaticMethods_extendSelection$self$$.createIndex($index$$74$$.row)), $anchor_newRange$$1$$ = $JSCompiler_StaticMethods_extendSelection$self$$.createRange($anchor_newRange$$1$$, $index$$74$$), $selection$$2$$ = $JSCompiler_StaticMethods_extendSelection$self$$.$GetSelection$(), 
  $currentRange$$ = $selection$$2$$[$selection$$2$$.length - 1], $startIndexesMatch$$ = $currentRange$$.startIndex.row == $anchor_newRange$$1$$.startIndex.row, $currentRange$$.startIndex.column != D.$JSCompiler_alias_NULL$$ && $anchor_newRange$$1$$.startIndex.column != D.$JSCompiler_alias_NULL$$ && ($startIndexesMatch$$ = $startIndexesMatch$$ && $currentRange$$.startIndex.column == $anchor_newRange$$1$$.startIndex.column), $endIndexesMatch$$ = $currentRange$$.endIndex.row == $anchor_newRange$$1$$.endIndex.row, 
  $currentRange$$.endIndex.column != D.$JSCompiler_alias_NULL$$ && $anchor_newRange$$1$$.endIndex.column != D.$JSCompiler_alias_NULL$$ && ($endIndexesMatch$$ = $endIndexesMatch$$ && $currentRange$$.endIndex.column == $anchor_newRange$$1$$.endIndex.column), !$startIndexesMatch$$ || !$endIndexesMatch$$)) {
    $selection$$2$$.pop(), $selection$$2$$.push($anchor_newRange$$1$$), (0,D.$JSCompiler_StaticMethods_unhighlightRange$$)($JSCompiler_StaticMethods_extendSelection$self$$, $currentRange$$), (0,D.$JSCompiler_StaticMethods_highlightRange$$)($JSCompiler_StaticMethods_extendSelection$self$$, $anchor_newRange$$1$$, D.$JSCompiler_alias_TRUE$$), (0,D.$JSCompiler_StaticMethods_highlightActive$$)($JSCompiler_StaticMethods_extendSelection$self$$)
  }
};
D.$JSCompiler_StaticMethods_augmentSelectionAndFocus$$ = function $$JSCompiler_StaticMethods_augmentSelectionAndFocus$$$($JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$, $index$$75$$) {
  var $selection$$3$$, $range$$12$$;
  $selection$$3$$ = $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$GetSelection$();
  0 < $selection$$3$$.length && $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$, !$JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$m_discontiguousSelection$);
  $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.setActive($index$$75$$);
  $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$m_selectionFrontier$ = $index$$75$$;
  "row" == $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$m_options$.$getSelectionMode$() && ($index$$75$$ = $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.createIndex($index$$75$$.row));
  $range$$12$$ = $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.createRange($index$$75$$, $index$$75$$);
  $selection$$3$$.push($range$$12$$);
  (0,D.$JSCompiler_StaticMethods_highlightActive$$)($JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$);
  (0,D.$JSCompiler_StaticMethods_highlightIndex$$)($JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$, $index$$75$$, "selected")
};
D.$DvtDataGrid$$.prototype.$selectAndFocus$ = function $$DvtDataGrid$$$$$selectAndFocus$$($index$$76$$) {
  this.$m_discontiguousSelection$ ? this.$m_active$ != D.$JSCompiler_alias_NULL$$ && this.$m_selectionFrontier$ == this.$m_active$ && ((0,D.$JSCompiler_StaticMethods_unhighlightIndex$$)(this, this.$m_active$), this.$GetSelection$().pop()) : (0,D.$JSCompiler_StaticMethods__clearSelection$$)(this);
  (0,D.$JSCompiler_StaticMethods_augmentSelectionAndFocus$$)(this, $index$$76$$)
};
D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$ = function $$JSCompiler_StaticMethods_getFocusableElementsInNode$$$($node$$3_nodes$$1$$) {
  var $inputElems$$, $elem$$28$$, $nodeCount$$, $inputRegExp$$, $i$$41$$;
  $inputElems$$ = [];
  if(window.document.evaluate) {
    $node$$3_nodes$$1$$ = window.document.evaluate(".//input|.//select|.//textarea|.//button|.//a|.//INPUT|.//SELECT|.//TEXTAREA|.//BUTTON|.//A", $node$$3_nodes$$1$$, D.$JSCompiler_alias_NULL$$, window.XPathResult.ANY_TYPE, D.$JSCompiler_alias_NULL$$);
    for($elem$$28$$ = $node$$3_nodes$$1$$.iterateNext();$elem$$28$$;) {
      !$elem$$28$$.disabled && (!$elem$$28$$.tabIndex || 0 < $elem$$28$$.tabIndex) && $inputElems$$.push($elem$$28$$), $elem$$28$$ = $node$$3_nodes$$1$$.iterateNext()
    }
  }else {
    $node$$3_nodes$$1$$ = $node$$3_nodes$$1$$.getElementsByTagName("*");
    $nodeCount$$ = $node$$3_nodes$$1$$.length;
    $inputRegExp$$ = /^INPUT|SELECT|BUTTON|^A\b|TEXTAREA/;
    for($i$$41$$ = 0;$i$$41$$ < $nodeCount$$;$i$$41$$ += 1) {
      $elem$$28$$ = $node$$3_nodes$$1$$[$i$$41$$], $elem$$28$$.tagName.match($inputRegExp$$) && (!$elem$$28$$.disabled && (!$elem$$28$$.tabIndex || 0 < $elem$$28$$.tabIndex)) && $inputElems$$.push($elem$$28$$)
    }
  }
  return $inputElems$$
};
D.$JSCompiler_StaticMethods_handleResize$$ = function $$JSCompiler_StaticMethods_handleResize$$$($JSCompiler_StaticMethods_handleResize$self$$, $event$$53$$) {
  var $header$$24_oldElementHeight$$inline_1081_oldElementWidth$$inline_1079_resizeHeaderMode$$inline_1078$$;
  if($JSCompiler_StaticMethods_handleResize$self$$.$m_isResizing$ === D.$JSCompiler_alias_FALSE$$) {
    $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ = (0,D.$JSCompiler_StaticMethods_manageHeaderCursor$$)($JSCompiler_StaticMethods_handleResize$self$$, $event$$53$$), $JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$ != D.$JSCompiler_alias_NULL$$ && ($header$$24_oldElementHeight$$inline_1081_oldElementWidth$$inline_1079_resizeHeaderMode$$inline_1078$$ = $JSCompiler_StaticMethods_handleResize$self$$.find($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$, 
    "header"), $header$$24_oldElementHeight$$inline_1081_oldElementWidth$$inline_1079_resizeHeaderMode$$inline_1078$$ != D.$JSCompiler_alias_NULL$$ && ($header$$24_oldElementHeight$$inline_1081_oldElementWidth$$inline_1079_resizeHeaderMode$$inline_1078$$.style.cursor = "default" == $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ ? $JSCompiler_StaticMethods_handleResize$self$$.$m_moveCursor$ === D.$JSCompiler_alias_TRUE$$ ? "move" : $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ : 
    $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$))
  }else {
    var $newElementHeight$$inline_1082_newElementWidth$$inline_1080$$;
    $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$ = $event$$53$$.pageX;
    $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$ = $event$$53$$.pageY;
    $JSCompiler_StaticMethods_handleResize$self$$.$m_utils$.$isTouchDevice$() ? ($JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$ = $event$$53$$.touches[0].pageX, $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$ = $event$$53$$.touches[0].pageY) : ($JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$ = $event$$53$$.pageX, $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$ = $event$$53$$.pageY);
    $header$$24_oldElementHeight$$inline_1081_oldElementWidth$$inline_1079_resizeHeaderMode$$inline_1078$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$, $JSCompiler_StaticMethods_handleResize$self$$.getMappedStyle("colheadercell")) ? "column" : "row";
    "col-resize" === $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ ? "column" === $header$$24_oldElementHeight$$inline_1081_oldElementWidth$$inline_1079_resizeHeaderMode$$inline_1078$$ ? ($header$$24_oldElementHeight$$inline_1081_oldElementWidth$$inline_1079_resizeHeaderMode$$inline_1078$$ = (0,window.isNaN)((0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$)) ? 50 : (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$), 
    $newElementHeight$$inline_1082_newElementWidth$$inline_1080$$ = (0,D.$JSCompiler_StaticMethods_getNewElementWidth$$)($JSCompiler_StaticMethods_handleResize$self$$, "column", $header$$24_oldElementHeight$$inline_1081_oldElementWidth$$inline_1079_resizeHeaderMode$$inline_1078$$), (0,D.$JSCompiler_StaticMethods_resizeColWidth$$)($JSCompiler_StaticMethods_handleResize$self$$, $header$$24_oldElementHeight$$inline_1081_oldElementWidth$$inline_1079_resizeHeaderMode$$inline_1078$$, $newElementHeight$$inline_1082_newElementWidth$$inline_1080$$)) : 
    "row" === $header$$24_oldElementHeight$$inline_1081_oldElementWidth$$inline_1079_resizeHeaderMode$$inline_1078$$ && ($header$$24_oldElementHeight$$inline_1081_oldElementWidth$$inline_1079_resizeHeaderMode$$inline_1078$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_rowHeader$), $newElementHeight$$inline_1082_newElementWidth$$inline_1080$$ = (0,D.$JSCompiler_StaticMethods_getNewElementWidth$$)($JSCompiler_StaticMethods_handleResize$self$$, 
    "row", $header$$24_oldElementHeight$$inline_1081_oldElementWidth$$inline_1079_resizeHeaderMode$$inline_1078$$), (0,D.$JSCompiler_StaticMethods_resizeRowWidth$$)($JSCompiler_StaticMethods_handleResize$self$$, $header$$24_oldElementHeight$$inline_1081_oldElementWidth$$inline_1079_resizeHeaderMode$$inline_1078$$, $newElementHeight$$inline_1082_newElementWidth$$inline_1080$$)) : "row-resize" === $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ && ("row" === $header$$24_oldElementHeight$$inline_1081_oldElementWidth$$inline_1079_resizeHeaderMode$$inline_1078$$ ? 
    ($header$$24_oldElementHeight$$inline_1081_oldElementWidth$$inline_1079_resizeHeaderMode$$inline_1078$$ = (0,window.isNaN)((0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$.parentNode)) ? (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)($JSCompiler_StaticMethods_handleResize$self$$) : (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$.parentNode), $newElementHeight$$inline_1082_newElementWidth$$inline_1080$$ = 
    (0,D.$JSCompiler_StaticMethods_getNewElementHeight$$)($JSCompiler_StaticMethods_handleResize$self$$, "row", $header$$24_oldElementHeight$$inline_1081_oldElementWidth$$inline_1079_resizeHeaderMode$$inline_1078$$), (0,D.$JSCompiler_StaticMethods_resizeRowHeight$$)($JSCompiler_StaticMethods_handleResize$self$$, $header$$24_oldElementHeight$$inline_1081_oldElementWidth$$inline_1079_resizeHeaderMode$$inline_1078$$, $newElementHeight$$inline_1082_newElementWidth$$inline_1080$$)) : "column" === $header$$24_oldElementHeight$$inline_1081_oldElementWidth$$inline_1079_resizeHeaderMode$$inline_1078$$ && 
    ($header$$24_oldElementHeight$$inline_1081_oldElementWidth$$inline_1079_resizeHeaderMode$$inline_1078$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_colHeader$), $newElementHeight$$inline_1082_newElementWidth$$inline_1080$$ = (0,D.$JSCompiler_StaticMethods_getNewElementHeight$$)($JSCompiler_StaticMethods_handleResize$self$$, "column", $header$$24_oldElementHeight$$inline_1081_oldElementWidth$$inline_1079_resizeHeaderMode$$inline_1078$$), 
    (0,D.$JSCompiler_StaticMethods_resizeColHeight$$)($JSCompiler_StaticMethods_handleResize$self$$, $header$$24_oldElementHeight$$inline_1081_oldElementWidth$$inline_1079_resizeHeaderMode$$inline_1078$$, $newElementHeight$$inline_1082_newElementWidth$$inline_1080$$)));
    (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_handleResize$self$$);
    $JSCompiler_StaticMethods_handleResize$self$$.$m_lastMouseX$ = $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$;
    $JSCompiler_StaticMethods_handleResize$self$$.$m_lastMouseY$ = $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$
  }
};
D.$JSCompiler_StaticMethods_handleResizeMouseDown$$ = function $$JSCompiler_StaticMethods_handleResizeMouseDown$$$($JSCompiler_StaticMethods_handleResizeMouseDown$self$$, $event$$54$$) {
  if("col-resize" === $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_cursor$ || "row-resize" === $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_cursor$) {
    $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_isResizing$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_utils$.$isTouchDevice$() ? ($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseX$ = $event$$54$$.touches[0].pageX, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseY$ = $event$$54$$.touches[0].pageY) : ($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseX$ = $event$$54$$.pageX, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseY$ = 
    $event$$54$$.pageY), $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeLeft$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeMinLeft$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeTop$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeMinTop$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeRight$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeBottom$ = 
    0
  }
};
D.$JSCompiler_StaticMethods_handleResizeMouseUp$$ = function $$JSCompiler_StaticMethods_handleResizeMouseUp$$$($JSCompiler_StaticMethods_handleResizeMouseUp$self$$, $event$$55$$) {
  var $details$$6_size$$10$$;
  $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_isResizing$ === D.$JSCompiler_alias_TRUE$$ && ($details$$6_size$$10$$ = "col-resize" === $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_cursor$ ? $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$.style.width : $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$.style.height, $details$$6_size$$10$$ = {event:$event$$55$$, ui:{header:$JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$_getKey$($JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$), 
  size:$details$$6_size$$10$$}}, $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.fireEvent("resize", $details$$6_size$$10$$), $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_isResizing$ = D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_cursor$ = "default", $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.find($JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$, "header").style.cursor = $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_cursor$)
};
D.$JSCompiler_StaticMethods__isDOMElementResizable$$ = function $$JSCompiler_StaticMethods__isDOMElementResizable$$$($JSCompiler_StaticMethods__isDOMElementResizable$self$$, $element$$12$$) {
  return"true" === $element$$12$$.getAttribute($JSCompiler_StaticMethods__isDOMElementResizable$self$$.$getResources$().getMappedAttribute("resizable"))
};
D.$JSCompiler_StaticMethods__isDOMElementSiblingResizable$$ = function $$JSCompiler_StaticMethods__isDOMElementSiblingResizable$$$($JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$, $element$$13$$) {
  if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$13$$, $JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$.getMappedStyle("colheadercell"))) {
    if($element$$13$$.previousSibling !== D.$JSCompiler_alias_NULL$$) {
      return"true" === $element$$13$$.previousSibling.getAttribute($JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$.$getResources$().getMappedAttribute("resizable"))
    }
  }else {
    if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$13$$, $JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$.getMappedStyle("rowheadercell")) && $element$$13$$.parentNode.previousSibling.firstChild !== D.$JSCompiler_alias_NULL$$) {
      return"true" === $element$$13$$.parentNode.previousSibling.firstChild.getAttribute($JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$.$getResources$().getMappedAttribute("resizable"))
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_manageHeaderCursor$$ = function $$JSCompiler_StaticMethods_manageHeaderCursor$$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $event$$56$$) {
  var $elem$$21$$ = $event$$56$$.target, $resizeHeaderMode$$, $edges_leftEdge$$inline_1087$$, $cursorX$$, $cursorY$$, $widthResizable$$, $heightResizable$$, $siblingResizable$$, $elem$$inline_1085_rtl$$1_targetHeight$$inline_1090$$;
  ($elem$$21$$ = $JSCompiler_StaticMethods_manageHeaderCursor$self$$.find($event$$56$$.target, "colheadercell")) ? $resizeHeaderMode$$ = "column" : ($elem$$21$$ = $JSCompiler_StaticMethods_manageHeaderCursor$self$$.find($event$$56$$.target, "rowheadercell"), $resizeHeaderMode$$ = "row");
  if(!$elem$$21$$) {
    return"default"
  }
  "column" === $resizeHeaderMode$$ ? ($heightResizable$$ = "enable" === (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_options$, $resizeHeaderMode$$).height ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$, $widthResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$21$$), $siblingResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementSiblingResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, 
  $elem$$21$$)) : "row" === $resizeHeaderMode$$ && ($widthResizable$$ = "enable" === (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_options$, $resizeHeaderMode$$).width ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$, $heightResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$21$$), $siblingResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementSiblingResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, 
  $elem$$21$$));
  $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_utils$.$isTouchDevice$() ? ($cursorX$$ = $event$$56$$.touches[0].pageX, $cursorY$$ = $event$$56$$.touches[0].pageY) : ($cursorX$$ = $event$$56$$.pageX, $cursorY$$ = $event$$56$$.pageY);
  $elem$$inline_1085_rtl$$1_targetHeight$$inline_1090$$ = $elem$$21$$;
  var $elementXY$$inline_1086_topEdge$$inline_1088$$, $targetWidth$$inline_1089$$;
  $elementXY$$inline_1086_topEdge$$inline_1088$$ = (0,D.$JSCompiler_StaticMethods_findPos$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$inline_1085_rtl$$1_targetHeight$$inline_1090$$);
  $edges_leftEdge$$inline_1087$$ = $elementXY$$inline_1086_topEdge$$inline_1088$$[0];
  $elementXY$$inline_1086_topEdge$$inline_1088$$ = $elementXY$$inline_1086_topEdge$$inline_1088$$[1];
  (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($elem$$inline_1085_rtl$$1_targetHeight$$inline_1090$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.getMappedStyle("colheadercell")) ? ($targetWidth$$inline_1089$$ = (0,window.isNaN)((0,D.$JSCompiler_StaticMethods_getElementWidth$$)($elem$$inline_1085_rtl$$1_targetHeight$$inline_1090$$)) ? 50 : (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($elem$$inline_1085_rtl$$1_targetHeight$$inline_1090$$), $elem$$inline_1085_rtl$$1_targetHeight$$inline_1090$$ = 
  (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_colHeader$)) : ($targetWidth$$inline_1089$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_rowHeader$), $elem$$inline_1085_rtl$$1_targetHeight$$inline_1090$$ = (0,window.isNaN)((0,D.$JSCompiler_StaticMethods_getElementHeight$$)($elem$$inline_1085_rtl$$1_targetHeight$$inline_1090$$.parentNode)) ? (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$) : 
  (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($elem$$inline_1085_rtl$$1_targetHeight$$inline_1090$$.parentNode));
  $edges_leftEdge$$inline_1087$$ = [$edges_leftEdge$$inline_1087$$, $elementXY$$inline_1086_topEdge$$inline_1088$$, $edges_leftEdge$$inline_1087$$ + $targetWidth$$inline_1089$$, $elementXY$$inline_1086_topEdge$$inline_1088$$ + $elem$$inline_1085_rtl$$1_targetHeight$$inline_1090$$];
  $elem$$inline_1085_rtl$$1_targetHeight$$inline_1090$$ = $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$getResources$().isRTLMode();
  if($widthResizable$$ && ($elem$$inline_1085_rtl$$1_targetHeight$$inline_1090$$ ? $cursorX$$ < $edges_leftEdge$$inline_1087$$[0] + 5 : $cursorX$$ > $edges_leftEdge$$inline_1087$$[2] - 5)) {
    return $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$21$$, "col-resize"
  }
  if("column" === $resizeHeaderMode$$ && $siblingResizable$$ && ($elem$$inline_1085_rtl$$1_targetHeight$$inline_1090$$ ? $cursorX$$ > $edges_leftEdge$$inline_1087$$[2] - 5 : $cursorX$$ < $edges_leftEdge$$inline_1087$$[0] + 5)) {
    if($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$21$$.previousSibling, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ !== D.$JSCompiler_alias_NULL$$) {
      return"col-resize"
    }
  }
  return $heightResizable$$ && $cursorY$$ > $edges_leftEdge$$inline_1087$$[3] - 5 ? ($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$21$$, "row-resize") : "row" === $resizeHeaderMode$$ && ($siblingResizable$$ && $cursorY$$ < $edges_leftEdge$$inline_1087$$[1] + 5) && ($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$21$$.parentNode.previousSibling.firstChild, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ !== 
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
    var $dir$$inline_1095$$, $databodyRows$$inline_1096$$, $children$$inline_1097$$, $after$$inline_1098$$, $i$$inline_1099$$, $newStart$$inline_1100$$, $j$$inline_1101$$;
    $dir$$inline_1095$$ = $JSCompiler_StaticMethods_resizeColWidth$self$$.$getResources$().isRTLMode() ? "right" : "left";
    $databodyRows$$inline_1096$$ = $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.firstChild.childNodes;
    $children$$inline_1097$$ = $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$.parentNode.childNodes;
    $after$$inline_1098$$ = D.$JSCompiler_alias_FALSE$$;
    if($children$$inline_1097$$.length === $databodyRows$$inline_1096$$[1].childNodes.length) {
      $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.style.display = "none";
      $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_colHeader$.style.display = "none";
      for($i$$inline_1099$$ = 0;$i$$inline_1099$$ < $children$$inline_1097$$.length;$i$$inline_1099$$ += 1) {
        if($children$$inline_1097$$[$i$$inline_1099$$] !== $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$ && $after$$inline_1098$$ === D.$JSCompiler_alias_TRUE$$) {
          $newStart$$inline_1100$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($children$$inline_1097$$[$i$$inline_1099$$], $dir$$inline_1095$$) + $oldElementWidth$$1_widthChange$$;
          (0,D.$JSCompiler_StaticMethods_setElementDir$$)($children$$inline_1097$$[$i$$inline_1099$$], $newStart$$inline_1100$$, $dir$$inline_1095$$);
          for($j$$inline_1101$$ = 1;$j$$inline_1101$$ < $databodyRows$$inline_1096$$.length;$j$$inline_1101$$ += 1) {
            (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databodyRows$$inline_1096$$[$j$$inline_1101$$].childNodes[$i$$inline_1099$$], $newStart$$inline_1100$$, $dir$$inline_1095$$)
          }
        }else {
          if($children$$inline_1097$$[$i$$inline_1099$$] === $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$) {
            $after$$inline_1098$$ = D.$JSCompiler_alias_TRUE$$;
            $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_sizingManager$.$setSize$("column", $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$.getAttribute($JSCompiler_StaticMethods_resizeColWidth$self$$.$getResources$().getMappedAttribute("key")), $newElementWidth$$1$$);
            for($j$$inline_1101$$ = 1;$j$$inline_1101$$ < $databodyRows$$inline_1096$$.length;$j$$inline_1101$$ += 1) {
              (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databodyRows$$inline_1096$$[$j$$inline_1101$$].childNodes[$i$$inline_1099$$], $newElementWidth$$1$$)
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
  var $newScrollerHeight$$, $databodyRows$$inline_1106_newParentHeight$$;
  $heightChange_oldElementHeight$$1$$ = $newElementHeight$$1$$ - $heightChange_oldElementHeight$$1$$;
  $newScrollerHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_scroller$.firstChild) + $heightChange_oldElementHeight$$1$$;
  if($newScrollerHeight$$ >= (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$)) {
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$.parentNode, $newElementHeight$$1$$);
    $databodyRows$$inline_1106_newParentHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.firstChild) + $heightChange_oldElementHeight$$1$$;
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.firstChild, $databodyRows$$inline_1106_newParentHeight$$);
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_scroller$.firstChild, $newScrollerHeight$$);
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.firstChild, $newScrollerHeight$$);
    var $rowHeaders$$inline_1107$$, $after$$inline_1108$$, $i$$inline_1109$$, $newStart$$inline_1110$$;
    $databodyRows$$inline_1106_newParentHeight$$ = $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.firstChild.childNodes;
    $rowHeaders$$inline_1107$$ = $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$.parentNode.parentNode.childNodes;
    $after$$inline_1108$$ = D.$JSCompiler_alias_FALSE$$;
    if($databodyRows$$inline_1106_newParentHeight$$.length === $rowHeaders$$inline_1107$$.length) {
      $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.style.display = "none";
      $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.style.display = "none";
      for($i$$inline_1109$$ = 1;$i$$inline_1109$$ < $rowHeaders$$inline_1107$$.length;$i$$inline_1109$$ += 1) {
        $rowHeaders$$inline_1107$$[$i$$inline_1109$$].firstChild !== $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$ && $after$$inline_1108$$ === D.$JSCompiler_alias_TRUE$$ ? ($newStart$$inline_1110$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowHeaders$$inline_1107$$[$i$$inline_1109$$], "top") + $heightChange_oldElementHeight$$1$$, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeaders$$inline_1107$$[$i$$inline_1109$$], $newStart$$inline_1110$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databodyRows$$inline_1106_newParentHeight$$[$i$$inline_1109$$], 
        $newStart$$inline_1110$$, "top")) : $rowHeaders$$inline_1107$$[$i$$inline_1109$$].firstChild === $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$ && ($after$$inline_1108$$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_sizingManager$.$setSize$("row", $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$.parentNode.getAttribute($JSCompiler_StaticMethods_resizeRowHeight$self$$.$getResources$().getMappedAttribute("key")), 
        $newElementHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyRows$$inline_1106_newParentHeight$$[$i$$inline_1109$$], $newElementHeight$$1$$))
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
D.$JSCompiler_StaticMethods_resizeRowWidth$$ = function $$JSCompiler_StaticMethods_resizeRowWidth$$$($JSCompiler_StaticMethods_resizeRowWidth$self_dir$$11$$, $oldElementWidth$$2_widthChange$$1$$, $newElementWidth$$2$$) {
  var $databody$$13$$, $scroller$$11$$, $colHeader$$8$$, $databodyWidth$$2$$;
  (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_resizeRowWidth$self_dir$$11$$.$m_rowHeader$, $newElementWidth$$2$$);
  $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$11$$.$m_rowHeaderWidth$ = $newElementWidth$$2$$ + "px";
  (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_resizeRowWidth$self_dir$$11$$);
  $databody$$13$$ = $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$11$$.$m_databody$;
  $scroller$$11$$ = $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$11$$.$m_scroller$;
  $colHeader$$8$$ = $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$11$$.$m_colHeader$;
  $oldElementWidth$$2_widthChange$$1$$ = $newElementWidth$$2$$ - $oldElementWidth$$2_widthChange$$1$$;
  $databodyWidth$$2$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$13$$);
  $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$11$$ = $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$11$$.$getResources$().isRTLMode() ? "right" : "left";
  (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databody$$13$$, $databodyWidth$$2$$ - $oldElementWidth$$2_widthChange$$1$$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$13$$, $newElementWidth$$2$$, $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$11$$);
  (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($colHeader$$8$$, $databodyWidth$$2$$ - $oldElementWidth$$2_widthChange$$1$$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($colHeader$$8$$, $newElementWidth$$2$$, $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$11$$);
  (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($scroller$$11$$, (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($scroller$$11$$) - $oldElementWidth$$2_widthChange$$1$$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$11$$, $newElementWidth$$2$$, $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$11$$)
};
D.$JSCompiler_StaticMethods_getNewElementWidth$$ = function $$JSCompiler_StaticMethods_getNewElementWidth$$$($JSCompiler_StaticMethods_getNewElementWidth$self$$, $axis$$24$$, $oldElementWidth$$3$$) {
  var $databodyWidth$$3$$, $deltaWidth$$, $newElementWidth$$3$$, $oldScrollerWidth$$1$$, $halfGridWidth$$;
  $databodyWidth$$3$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_databody$);
  $deltaWidth$$ = $JSCompiler_StaticMethods_getNewElementWidth$self$$.$getResources$().isRTLMode() ? $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_lastMouseX$ - $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_currentMouseX$ : $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_currentMouseX$ - $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_lastMouseX$;
  $newElementWidth$$3$$ = $oldElementWidth$$3$$ + $deltaWidth$$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeLeft$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$;
  $oldScrollerWidth$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_scroller$.firstChild);
  $halfGridWidth$$ = window.Math.round((0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_root$) / 2);
  $oldScrollerWidth$$1$$ + $deltaWidth$$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeLeft$ < $databodyWidth$$3$$ ? ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeLeft$ += $deltaWidth$$ - $databodyWidth$$3$$ + $oldScrollerWidth$$1$$, $newElementWidth$$3$$ = $oldElementWidth$$3$$ + ($databodyWidth$$3$$ - $oldScrollerWidth$$1$$)) : 20 > $newElementWidth$$3$$ ? ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ += $deltaWidth$$ - 20 + 
  $oldElementWidth$$3$$, $newElementWidth$$3$$ = 20) : ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ = 0, $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeLeft$ = 0);
  "row" === $axis$$24$$ && ($newElementWidth$$3$$ > $halfGridWidth$$ ? ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$ += $deltaWidth$$ - $halfGridWidth$$ + $oldElementWidth$$3$$, $newElementWidth$$3$$ = $halfGridWidth$$) : $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$ = 0);
  return $newElementWidth$$3$$
};
D.$JSCompiler_StaticMethods_getNewElementHeight$$ = function $$JSCompiler_StaticMethods_getNewElementHeight$$$($JSCompiler_StaticMethods_getNewElementHeight$self$$, $axis$$25$$, $oldElementHeight$$3$$) {
  var $databodyHeight$$3$$, $deltaHeight$$, $newElementHeight$$3$$, $oldScrollerHeight$$1$$, $halfGridHeight$$;
  $databodyHeight$$3$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_databody$);
  $deltaHeight$$ = $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_currentMouseY$ - $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_lastMouseY$;
  $newElementHeight$$3$$ = $oldElementHeight$$3$$ + $deltaHeight$$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeTop$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$;
  $oldScrollerHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_scroller$.firstChild);
  $halfGridHeight$$ = window.Math.round((0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_root$) / 2);
  $oldScrollerHeight$$1$$ + $deltaHeight$$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeTop$ < $databodyHeight$$3$$ && ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeTop$ += $deltaHeight$$ - $databodyHeight$$3$$ + $oldScrollerHeight$$1$$, $newElementHeight$$3$$ = $oldElementHeight$$3$$ + $databodyHeight$$3$$ - $oldScrollerHeight$$1$$);
  20 > $newElementHeight$$3$$ ? ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ += $deltaHeight$$ - 20 + $oldElementHeight$$3$$, $newElementHeight$$3$$ = 20) : ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ = 0, $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeTop$ = 0);
  "column" === $axis$$25$$ && ($newElementHeight$$3$$ > $halfGridHeight$$ ? ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$ += $deltaHeight$$ - $halfGridHeight$$ + $oldElementHeight$$3$$, $newElementHeight$$3$$ = $halfGridHeight$$) : $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$ = 0);
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
D.$JSCompiler_StaticMethods_handleContextMenuResize$$ = function $$JSCompiler_StaticMethods_handleContextMenuResize$$$($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $initialValue_target$$46$$, $id$$4$$, $val$$25_value$$51$$) {
  $val$$25_value$$51$$ = (0,window.parseInt)($val$$25_value$$51$$, 10);
  if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($initialValue_target$$46$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($initialValue_target$$46$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.getMappedStyle("sortdescending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($initialValue_target$$46$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.getMappedStyle("sortindicators"))) {
    $initialValue_target$$46$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $initialValue_target$$46$$)
  }
  $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$ = $initialValue_target$$46$$;
  "resizeWidth" === $id$$4$$ ? ($initialValue_target$$46$$ = $initialValue_target$$46$$.offsetWidth, $initialValue_target$$46$$ !== $val$$25_value$$51$$ && ((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.getMappedStyle("colheadercell")) ? (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$) && 
  (0,D.$JSCompiler_StaticMethods_resizeColWidth$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $initialValue_target$$46$$, $val$$25_value$$51$$) : (0,D.$JSCompiler_StaticMethods_resizeRowWidth$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $initialValue_target$$46$$, $val$$25_value$$51$$))) : "resizeHeight" === $id$$4$$ && ($initialValue_target$$46$$ = $initialValue_target$$46$$.offsetHeight, $initialValue_target$$46$$ !== $val$$25_value$$51$$ && ((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$, 
  $JSCompiler_StaticMethods_handleContextMenuResize$self$$.getMappedStyle("colheadercell")) ? (0,D.$JSCompiler_StaticMethods_resizeColHeight$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $initialValue_target$$46$$, $val$$25_value$$51$$) : (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$) && (0,D.$JSCompiler_StaticMethods_resizeRowHeight$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, 
  $initialValue_target$$46$$, $val$$25_value$$51$$)));
  (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$)
};
D.$JSCompiler_StaticMethods__toggleSortIconDirection$$ = function $$JSCompiler_StaticMethods__toggleSortIconDirection$$$($JSCompiler_StaticMethods__toggleSortIconDirection$self$$, $header$$15_icon$$1$$, $direction$$5$$) {
  $header$$15_icon$$1$$ != D.$JSCompiler_alias_NULL$$ && ($header$$15_icon$$1$$ = (0,D.$JSCompiler_StaticMethods__getSortIcon$$)($header$$15_icon$$1$$), "descending" === $direction$$5$$ && (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$15_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortascending")) ? ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($header$$15_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortascending")), 
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($header$$15_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortdescending"))) : "ascending" === $direction$$5$$ && (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$15_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortdescending")) && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($header$$15_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortdescending")), 
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($header$$15_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortascending"))))
};
D.$JSCompiler_StaticMethods__showOrHideSortIcon$$ = function $$JSCompiler_StaticMethods__showOrHideSortIcon$$$($JSCompiler_StaticMethods__showOrHideSortIcon$self$$, $header$$16$$, $hide$$) {
  var $icon$$2$$, $sorted$$ = D.$JSCompiler_alias_FALSE$$;
  $header$$16$$ != D.$JSCompiler_alias_NULL$$ && ($icon$$2$$ = (0,D.$JSCompiler_StaticMethods__getSortIcon$$)($header$$16$$), $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ && ($sorted$$ = $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.$m_sortInfo$.key === $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.$_getKey$($header$$16$$)), $hide$$ === D.$JSCompiler_alias_FALSE$$ && !$sorted$$ ? ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($icon$$2$$, 
  $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("disabled")), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($icon$$2$$, $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("default"))) : $hide$$ === D.$JSCompiler_alias_TRUE$$ && !$sorted$$ && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($icon$$2$$, $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("default")), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($icon$$2$$, $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("disabled"))))
};
D.$JSCompiler_StaticMethods__handleHeaderSort$$ = function $$JSCompiler_StaticMethods__handleHeaderSort$$$($JSCompiler_StaticMethods__handleHeaderSort$self$$, $event$$50$$, $direction$$8$$) {
  var $header$$18$$;
  $header$$18$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods__handleHeaderSort$self$$, $event$$50$$.target);
  $header$$18$$ != D.$JSCompiler_alias_NULL$$ && ($direction$$8$$ == D.$JSCompiler_alias_NULL$$ && ($direction$$8$$ = $JSCompiler_StaticMethods__handleHeaderSort$self$$.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__handleHeaderSort$self$$.$m_sortInfo$.key === $JSCompiler_StaticMethods__handleHeaderSort$self$$.$_getKey$($header$$18$$) ? "ascending" === $JSCompiler_StaticMethods__handleHeaderSort$self$$.$m_sortInfo$.direction ? "descending" : "ascending" : "ascending"), (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)($JSCompiler_StaticMethods__handleHeaderSort$self$$, 
  $event$$50$$, $header$$18$$, $direction$$8$$))
};
D.$JSCompiler_StaticMethods__doHeaderSort$$ = function $$JSCompiler_StaticMethods__doHeaderSort$$$($JSCompiler_StaticMethods__doHeaderSort$self$$, $details$$5_event$$52$$, $criteria$$1_header$$20_sortedHeader$$inline_1026$$, $direction$$10$$) {
  var $key$$39$$, $axis$$23_columnHeaderCellClassName$$inline_1018$$;
  $criteria$$1_header$$20_sortedHeader$$inline_1026$$.setAttribute($JSCompiler_StaticMethods__doHeaderSort$self$$.$getResources$().getMappedAttribute("sortDir"), $direction$$10$$);
  $key$$39$$ = $JSCompiler_StaticMethods__doHeaderSort$self$$.$_getKey$($criteria$$1_header$$20_sortedHeader$$inline_1026$$);
  var $oldSortedHeader$$inline_1022_rowHeaderCellClassName$$inline_1019_sortIcon$$inline_1027$$;
  $axis$$23_columnHeaderCellClassName$$inline_1018$$ = $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("colheadercell");
  $oldSortedHeader$$inline_1022_rowHeaderCellClassName$$inline_1019_sortIcon$$inline_1027$$ = $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("rowheadercell");
  $axis$$23_columnHeaderCellClassName$$inline_1018$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($criteria$$1_header$$20_sortedHeader$$inline_1026$$, $axis$$23_columnHeaderCellClassName$$inline_1018$$) ? "column" : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($criteria$$1_header$$20_sortedHeader$$inline_1026$$, $oldSortedHeader$$inline_1022_rowHeaderCellClassName$$inline_1019_sortIcon$$inline_1027$$) ? "row" : D.$JSCompiler_alias_NULL$$;
  var $oldsortIcon$$inline_1023$$;
  $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ && ($oldSortedHeader$$inline_1022_rowHeaderCellClassName$$inline_1019_sortIcon$$inline_1027$$ = (0,D.$JSCompiler_StaticMethods__findColumnHeaderByKey$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.key), $oldsortIcon$$inline_1023$$ = (0,D.$JSCompiler_StaticMethods__getSortIcon$$)($oldSortedHeader$$inline_1022_rowHeaderCellClassName$$inline_1019_sortIcon$$inline_1027$$), 
  (0,D.$JSCompiler_StaticMethods__toggleSortIconDirection$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $oldSortedHeader$$inline_1022_rowHeaderCellClassName$$inline_1019_sortIcon$$inline_1027$$, "ascending"), "descending" === $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.direction && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldsortIcon$$inline_1023$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("sortdescending")), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($oldsortIcon$$inline_1023$$, 
  $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("sortascending"))), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($oldsortIcon$$inline_1023$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("disabled")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldsortIcon$$inline_1023$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("default")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldSortedHeader$$inline_1022_rowHeaderCellClassName$$inline_1019_sortIcon$$inline_1027$$.lastChild, 
  $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("enabled")));
  $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$ = {key:$key$$39$$, axis:$axis$$23_columnHeaderCellClassName$$inline_1018$$, direction:$direction$$10$$};
  (0,D.$JSCompiler_StaticMethods__toggleSortIconDirection$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $criteria$$1_header$$20_sortedHeader$$inline_1026$$, $direction$$10$$);
  $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ && ($criteria$$1_header$$20_sortedHeader$$inline_1026$$ = (0,D.$JSCompiler_StaticMethods__findColumnHeaderByKey$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.key), $oldSortedHeader$$inline_1022_rowHeaderCellClassName$$inline_1019_sortIcon$$inline_1027$$ = (0,D.$JSCompiler_StaticMethods__getSortIcon$$)($criteria$$1_header$$20_sortedHeader$$inline_1026$$), 
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($oldSortedHeader$$inline_1022_rowHeaderCellClassName$$inline_1019_sortIcon$$inline_1027$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("default")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldSortedHeader$$inline_1022_rowHeaderCellClassName$$inline_1019_sortIcon$$inline_1027$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("disabled")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldSortedHeader$$inline_1022_rowHeaderCellClassName$$inline_1019_sortIcon$$inline_1027$$, 
  $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("selected")), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($criteria$$1_header$$20_sortedHeader$$inline_1026$$.lastChild, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("enabled")));
  $direction$$10$$ != D.$JSCompiler_alias_NULL$$ && ($key$$39$$ != D.$JSCompiler_alias_NULL$$ && $axis$$23_columnHeaderCellClassName$$inline_1018$$ != D.$JSCompiler_alias_NULL$$) && ((0,D.$JSCompiler_StaticMethods_showStatusText$$)($JSCompiler_StaticMethods__doHeaderSort$self$$), $criteria$$1_header$$20_sortedHeader$$inline_1026$$ = {axis:$axis$$23_columnHeaderCellClassName$$inline_1018$$, key:$key$$39$$, direction:$direction$$10$$}, $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_dataSource$.sort($criteria$$1_header$$20_sortedHeader$$inline_1026$$, 
  {success:$JSCompiler_StaticMethods__doHeaderSort$self$$.$_handleSortSuccess$.bind($JSCompiler_StaticMethods__doHeaderSort$self$$), error:$JSCompiler_StaticMethods__doHeaderSort$self$$.$_handleSortError$.bind($JSCompiler_StaticMethods__doHeaderSort$self$$)}), $details$$5_event$$52$$ = {event:$details$$5_event$$52$$, ui:{header:$key$$39$$, direction:$direction$$10$$}}, $JSCompiler_StaticMethods__doHeaderSort$self$$.fireEvent("sort", $details$$5_event$$52$$));
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, "ascending" === $direction$$10$$ ? "accessibleSortAscending" : "accessibleSortDescending", {id:$key$$39$$})
};
D.$DvtDataGrid$$.prototype.$_handleSortError$ = function $$DvtDataGrid$$$$$_handleSortError$$() {
  (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this)
};
D.$DvtDataGrid$$.prototype.$_handleSortSuccess$ = function $$DvtDataGrid$$$$$_handleSortSuccess$$() {
  (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this);
  var $newRowHeaderElements$$ = window.document.createElement("div");
  $newRowHeaderElements$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "rowHeader");
  $newRowHeaderElements$$.className = this.$getResources$().getMappedStyle("rowheader") + " " + this.$getResources$().getMappedStyle("header");
  this.fetchHeaders("row", this.$m_startRow$, $newRowHeaderElements$$, this.$m_endRow$ - this.$m_startRow$);
  this.fetchCells(this.$m_databody$, this.$m_scroller$, this.$m_startRow$, this.$m_startCol$, this.$m_endRow$ - this.$m_startRow$, this.$m_endCol$ - this.$m_startCol$, {success:this.$handleCellsFetchSuccessForSort$.bind(this, $newRowHeaderElements$$), error:this.$handleCellsFetchError$})
};
D.$DvtDataGrid$$.prototype.$handleCellsFetchSuccessForSort$ = function $$DvtDataGrid$$$$$handleCellsFetchSuccessForSort$$($newRowHeaderElements$$1_oldRowHeaderElements$$inline_1030$$, $cellSet$$13_oldRowElements$$, $cellRange$$9_delay$$inline_1062_dkey$$inline_1061_newRowElements_order$$inline_1064$$) {
  var $oldLength$$inline_1039_oldRowHeaderElements_rowStart$$8$$, $oldSet$$inline_1040_rowCount$$7$$, $animOrder$$inline_1042_columnStart$$6$$, $newRowHeaderElementsFragment$$;
  this.$m_fetching$.cells = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this);
  $oldLength$$inline_1039_oldRowHeaderElements_rowStart$$8$$ = $cellRange$$9_delay$$inline_1062_dkey$$inline_1061_newRowElements_order$$inline_1064$$[0].start;
  $oldSet$$inline_1040_rowCount$$7$$ = $cellSet$$13_oldRowElements$$.getCount("row");
  $animOrder$$inline_1042_columnStart$$6$$ = $cellRange$$9_delay$$inline_1062_dkey$$inline_1061_newRowElements_order$$inline_1064$$[1].start;
  $cellSet$$13_oldRowElements$$.getCount("column");
  $cellRange$$9_delay$$inline_1062_dkey$$inline_1061_newRowElements_order$$inline_1064$$ = window.document.createDocumentFragment();
  $cellRange$$9_delay$$inline_1062_dkey$$inline_1061_newRowElements_order$$inline_1064$$.appendChild(window.document.createElement("div"));
  $newRowHeaderElementsFragment$$ = window.document.createDocumentFragment();
  (0,D.$JSCompiler_StaticMethods__addRows$$)(this, $cellRange$$9_delay$$inline_1062_dkey$$inline_1061_newRowElements_order$$inline_1064$$, D.$JSCompiler_alias_TRUE$$, this.$m_startRowPixel$, $oldLength$$inline_1039_oldRowHeaderElements_rowStart$$8$$, $oldSet$$inline_1040_rowCount$$7$$, $animOrder$$inline_1042_columnStart$$6$$, D.$JSCompiler_alias_FALSE$$, $cellSet$$13_oldRowElements$$);
  $cellSet$$13_oldRowElements$$ = this.$m_databody$.firstChild;
  $oldLength$$inline_1039_oldRowHeaderElements_rowStart$$8$$ = this.$m_rowHeader$.firstChild;
  if($newRowHeaderElements$$1_oldRowHeaderElements$$inline_1030$$ && $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1030$$.firstChild) {
    for(;$newRowHeaderElements$$1_oldRowHeaderElements$$inline_1030$$.firstChild.firstChild;) {
      $newRowHeaderElementsFragment$$.appendChild($newRowHeaderElements$$1_oldRowHeaderElements$$inline_1030$$.firstChild.firstChild)
    }
  }
  $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1030$$ = $oldLength$$inline_1039_oldRowHeaderElements_rowStart$$8$$;
  var $me$$inline_1037$$, $pos$$inline_1038_restSet$$inline_1043$$, $idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$, $dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$, $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$, $rowHeight$$inline_1046$$, $limitRangeInPixels$$inline_1049_offset$$inline_1047$$, $rowsForAppend$$inline_1051$$, $rowHeadersForAppend$$inline_1052$$, $restSetLength$$inline_1053$$, 
  $j$$inline_1056_rowPos$$inline_1068$$, $k$$inline_1058_key$$inline_1057_l$$inline_1060$$, $keyAttr$$inline_1063$$, $rowHeaderSupport$$inline_1070$$, $newElementSetClone$$inline_1071$$, $newRowHeaderElementsClone$$inline_1072$$;
  $rowHeaderSupport$$inline_1070$$ = D.$JSCompiler_alias_FALSE$$;
  $me$$inline_1037$$ = this;
  $pos$$inline_1038_restSet$$inline_1043$$ = 0;
  $newElementSetClone$$inline_1071$$ = $cellRange$$9_delay$$inline_1062_dkey$$inline_1061_newRowElements_order$$inline_1064$$.cloneNode(D.$JSCompiler_alias_TRUE$$);
  $newRowHeaderElementsClone$$inline_1072$$ = $newRowHeaderElementsFragment$$ ? $newRowHeaderElementsFragment$$.cloneNode(D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_NULL$$;
  $keyAttr$$inline_1063$$ = this.$getResources$().getMappedAttribute("key");
  $oldLength$$inline_1039_oldRowHeaderElements_rowStart$$8$$ = $cellSet$$13_oldRowElements$$.childElementCount;
  $idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$ = (0,D.$JSCompiler_StaticMethods_getDataKeySet$$)(this, $cellRange$$9_delay$$inline_1062_dkey$$inline_1061_newRowElements_order$$inline_1064$$);
  $oldSet$$inline_1040_rowCount$$7$$ = (0,D.$JSCompiler_StaticMethods_getDataKeySet$$)(this, $cellSet$$13_oldRowElements$$);
  $animOrder$$inline_1042_columnStart$$6$$ = [];
  $pos$$inline_1038_restSet$$inline_1043$$ = [];
  $rowsForAppend$$inline_1051$$ = [];
  $rowHeadersForAppend$$inline_1052$$ = [];
  $restSetLength$$inline_1053$$ = 0;
  $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$ = this.getHeight() - (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_colHeader$);
  $rowHeight$$inline_1046$$ = (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)(this);
  ($limitRangeInPixels$$inline_1049_offset$$inline_1047$$ = (0,window.parseInt)($cellSet$$13_oldRowElements$$.childNodes[1].style.top.split("px")[0])) || ($limitRangeInPixels$$inline_1049_offset$$inline_1047$$ = 0);
  $dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$ = this.$m_currentScrollTop$ - $limitRangeInPixels$$inline_1049_offset$$inline_1047$$;
  $limitRangeInPixels$$inline_1049_offset$$inline_1047$$ = [$dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$, $dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$ + $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$];
  $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$ = [window.Math.ceil($dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$ / $rowHeight$$inline_1046$$), window.Math.floor(($dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$ + $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$) / $rowHeight$$inline_1046$$)];
  $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1030$$.childElementCount != $oldLength$$inline_1039_oldRowHeaderElements_rowStart$$8$$ && $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1030$$.firstChild.children.length == $oldLength$$inline_1039_oldRowHeaderElements_rowStart$$8$$ + 1 && ($newRowHeaderElements$$1_oldRowHeaderElements$$inline_1030$$ = $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1030$$.firstChild);
  if($newRowHeaderElements$$1_oldRowHeaderElements$$inline_1030$$.childElementCount == $oldLength$$inline_1039_oldRowHeaderElements_rowStart$$8$$ && $newRowHeaderElementsFragment$$) {
    $rowHeaderSupport$$inline_1070$$ = D.$JSCompiler_alias_TRUE$$;
    for($dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$ = 1;$dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$ < $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1030$$.childElementCount;$dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$++) {
      $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1030$$.childNodes[$dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$].id += "_old"
    }
  }
  if($rowHeaderSupport$$inline_1070$$) {
    for($dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$ = 0;$dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$ < $newRowHeaderElementsClone$$inline_1072$$.childElementCount;$dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$++) {
      $newRowHeaderElementsClone$$inline_1072$$.children[$dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$].style.top = $cellSet$$13_oldRowElements$$.children[$dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$].style.top
    }
  }
  for($dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$ = 0;$dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$ < $oldSet$$inline_1040_rowCount$$7$$.length;$dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$++) {
    $animOrder$$inline_1042_columnStart$$6$$[$oldSet$$inline_1040_rowCount$$7$$[$dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$]] = $dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$
  }
  for($j$$inline_1056_rowPos$$inline_1068$$ = 0;$j$$inline_1056_rowPos$$inline_1068$$ < $idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$.length;$j$$inline_1056_rowPos$$inline_1068$$++) {
    if($animOrder$$inline_1042_columnStart$$6$$.hasOwnProperty($idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$])) {
      if($animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]] < $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$[0] - 1 && $j$$inline_1056_rowPos$$inline_1068$$ < $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$[0] - 1 || $animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]] > 
      $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$[1] + 1 && $j$$inline_1056_rowPos$$inline_1068$$ > $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$[1] + 1 || $animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]] < $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$[0] - 
      1 && $j$$inline_1056_rowPos$$inline_1068$$ > $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$[1] + 1 || $animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]] > $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$[1] + 1 && $j$$inline_1056_rowPos$$inline_1068$$ < $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$[0] - 
      1) {
        $animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]] = "no_0"
      }
      (0,D.$JSCompiler_StaticMethods_isNumeric$$)($animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]]) && ($animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]] > $j$$inline_1056_rowPos$$inline_1068$$ ? ($j$$inline_1056_rowPos$$inline_1068$$ < $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$[0] && 
      $animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]] > $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$[0] ? $dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$ = $animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]] - ($bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$[0] + 
      1) : ((0,D.$JSCompiler_StaticMethods_isNumeric$$)($animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]]) && $animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]] > $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$[1] && ($dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$ = 
      $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$[1] - $animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]] - 1, (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($cellSet$$13_oldRowElements$$.childNodes[$animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]] + 1], 0, 0, 
      "linear", $dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$ * $rowHeight$$inline_1046$$), $rowHeaderSupport$$inline_1070$$ && (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($newRowHeaderElements$$1_oldRowHeaderElements$$inline_1030$$.childNodes[$animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]] + 1], 0, 0, "linear", ($dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$ + 
      1) * $rowHeight$$inline_1046$$)), $dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$ = $animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]] - $j$$inline_1056_rowPos$$inline_1068$$), $animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]] = "up_-" + $dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$) : 
      $animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]] < $j$$inline_1056_rowPos$$inline_1068$$ ? ($j$$inline_1056_rowPos$$inline_1068$$ > $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$[1] && $animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]] < $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$[1] ? 
      $dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$ = $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$[1] + 1 - $animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]] : ((0,D.$JSCompiler_StaticMethods_isNumeric$$)($animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]]) && 
      $animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]] < $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$[0] && ($dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$ = $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$[0] - $animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]] - 
      1, (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($cellSet$$13_oldRowElements$$.childNodes[$animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]] + 1], 0, 0, "linear", $dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$ * $rowHeight$$inline_1046$$), $rowHeaderSupport$$inline_1070$$ && (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($newRowHeaderElements$$1_oldRowHeaderElements$$inline_1030$$.childNodes[$animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]] + 
      1], 0, 0, "linear", $dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$ * $rowHeight$$inline_1046$$)), $dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$ = $j$$inline_1056_rowPos$$inline_1068$$ - $animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]]), $animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]] = 
      "down_" + $dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$) : $animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]] == $j$$inline_1056_rowPos$$inline_1068$$ && ($animOrder$$inline_1042_columnStart$$6$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]] = "no_0"))
    }else {
      $pos$$inline_1038_restSet$$inline_1043$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$[$j$$inline_1056_rowPos$$inline_1068$$]] = $j$$inline_1056_rowPos$$inline_1068$$
    }
  }
  for($idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$ = 0;$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$ < $oldSet$$inline_1040_rowCount$$7$$.length;$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$++) {
    $animOrder$$inline_1042_columnStart$$6$$.hasOwnProperty($oldSet$$inline_1040_rowCount$$7$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$]) && (0,D.$JSCompiler_StaticMethods_isNumeric$$)($animOrder$$inline_1042_columnStart$$6$$[$oldSet$$inline_1040_rowCount$$7$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$]]) && ($animOrder$$inline_1042_columnStart$$6$$[$oldSet$$inline_1040_rowCount$$7$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$]] < $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$[0] && 
    ($animOrder$$inline_1042_columnStart$$6$$[$oldSet$$inline_1040_rowCount$$7$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$]] = "no_0"), $animOrder$$inline_1042_columnStart$$6$$[$oldSet$$inline_1040_rowCount$$7$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$]] > $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$[1] && ($animOrder$$inline_1042_columnStart$$6$$[$oldSet$$inline_1040_rowCount$$7$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$]] = 
    "no_0"), $animOrder$$inline_1042_columnStart$$6$$[$oldSet$$inline_1040_rowCount$$7$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$]] >= $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$[0] && $animOrder$$inline_1042_columnStart$$6$$[$oldSet$$inline_1040_rowCount$$7$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$]] <= $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$[1] && 
    ($dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$ = $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$[1] - $animOrder$$inline_1042_columnStart$$6$$[$oldSet$$inline_1040_rowCount$$7$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$]] + 2, $animOrder$$inline_1042_columnStart$$6$$[$oldSet$$inline_1040_rowCount$$7$$[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$]] = "down_" + $dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$))
  }
  for($k$$inline_1058_key$$inline_1057_l$$inline_1060$$ in $pos$$inline_1038_restSet$$inline_1043$$) {
    $pos$$inline_1038_restSet$$inline_1043$$.hasOwnProperty($k$$inline_1058_key$$inline_1057_l$$inline_1060$$) && ($restSetLength$$inline_1053$$++, $idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$ = $pos$$inline_1038_restSet$$inline_1043$$[$k$$inline_1058_key$$inline_1057_l$$inline_1060$$], $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$ = $limitRangeInPixels$$inline_1049_offset$$inline_1047$$[1] + $cellSet$$13_oldRowElements$$.childNodes[1].clientHeight, 
    $dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$ = $limitRangeInPixels$$inline_1049_offset$$inline_1047$$[0] - $cellSet$$13_oldRowElements$$.childNodes[1].clientHeight, $j$$inline_1056_rowPos$$inline_1068$$ = $idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$ * $cellSet$$13_oldRowElements$$.childNodes[1].clientHeight, $j$$inline_1056_rowPos$$inline_1068$$ < $bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$ && 
    $j$$inline_1056_rowPos$$inline_1068$$ > $dv$$inline_1054_i$$inline_1055_scrollTop$$inline_1048_topLimit$$inline_1067_v$$inline_1044$$ && ($bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$ = $cellRange$$9_delay$$inline_1062_dkey$$inline_1061_newRowElements_order$$inline_1064$$.childNodes[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$ + 1], $rowsForAppend$$inline_1051$$.push($bottomLimit$$inline_1066_child$$inline_1069_gridBodyHeight$$inline_1045_limitRangeInRows$$inline_1050$$), 
    $rowHeaderSupport$$inline_1070$$ && $rowHeadersForAppend$$inline_1052$$.push($newRowHeaderElementsFragment$$.childNodes[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$ + 1])))
  }
  for($k$$inline_1058_key$$inline_1057_l$$inline_1060$$ = 0;$k$$inline_1058_key$$inline_1057_l$$inline_1060$$ < $rowsForAppend$$inline_1051$$.length;$k$$inline_1058_key$$inline_1057_l$$inline_1060$$++) {
    for($idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$ = 0;$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$ < $rowsForAppend$$inline_1051$$[$k$$inline_1058_key$$inline_1057_l$$inline_1060$$].attributes.length;$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$++) {
      $cellRange$$9_delay$$inline_1062_dkey$$inline_1061_newRowElements_order$$inline_1064$$ = D.$JSCompiler_alias_NULL$$, $rowsForAppend$$inline_1051$$[$k$$inline_1058_key$$inline_1057_l$$inline_1060$$].attributes[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$].nodeName == $keyAttr$$inline_1063$$ && ($cellRange$$9_delay$$inline_1062_dkey$$inline_1061_newRowElements_order$$inline_1064$$ = $rowsForAppend$$inline_1051$$[$k$$inline_1058_key$$inline_1057_l$$inline_1060$$].attributes[$idx$$inline_1065_kk$$inline_1059_newSet$$inline_1041$$].nodeValue, 
      $pos$$inline_1038_restSet$$inline_1043$$.hasOwnProperty($cellRange$$9_delay$$inline_1062_dkey$$inline_1061_newRowElements_order$$inline_1064$$) && ($cellRange$$9_delay$$inline_1062_dkey$$inline_1061_newRowElements_order$$inline_1064$$ = $pos$$inline_1038_restSet$$inline_1043$$[$cellRange$$9_delay$$inline_1062_dkey$$inline_1061_newRowElements_order$$inline_1064$$], (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($rowsForAppend$$inline_1051$$[$k$$inline_1058_key$$inline_1057_l$$inline_1060$$], 
      0, 0, "linear", $limitRangeInPixels$$inline_1049_offset$$inline_1047$$[1] - $cellRange$$9_delay$$inline_1062_dkey$$inline_1061_newRowElements_order$$inline_1064$$ * $rowHeight$$inline_1046$$), $rowHeaderSupport$$inline_1070$$ && ($rowHeadersForAppend$$inline_1052$$[$k$$inline_1058_key$$inline_1057_l$$inline_1060$$].style.top = $rowsForAppend$$inline_1051$$[$k$$inline_1058_key$$inline_1057_l$$inline_1060$$].style.top, (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($rowHeadersForAppend$$inline_1052$$[$k$$inline_1058_key$$inline_1057_l$$inline_1060$$], 
      0, 0, "linear", $limitRangeInPixels$$inline_1049_offset$$inline_1047$$[1] - $cellRange$$9_delay$$inline_1062_dkey$$inline_1061_newRowElements_order$$inline_1064$$ * $rowHeight$$inline_1046$$))))
    }
    $cellSet$$13_oldRowElements$$.appendChild($rowsForAppend$$inline_1051$$[$k$$inline_1058_key$$inline_1057_l$$inline_1060$$]);
    $rowHeaderSupport$$inline_1070$$ && $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1030$$.appendChild($rowHeadersForAppend$$inline_1052$$[$k$$inline_1058_key$$inline_1057_l$$inline_1060$$])
  }
  for($k$$inline_1058_key$$inline_1057_l$$inline_1060$$ = 0;$k$$inline_1058_key$$inline_1057_l$$inline_1060$$ < $cellSet$$13_oldRowElements$$.childElementCount;$k$$inline_1058_key$$inline_1057_l$$inline_1060$$++) {
    if($cellRange$$9_delay$$inline_1062_dkey$$inline_1061_newRowElements_order$$inline_1064$$ = 0 * $k$$inline_1058_key$$inline_1057_l$$inline_1060$$ + "ms", $k$$inline_1058_key$$inline_1057_l$$inline_1060$$ < $oldLength$$inline_1039_oldRowHeaderElements_rowStart$$8$$ - 1 ? ($pos$$inline_1038_restSet$$inline_1043$$ = (0,window.parseInt)($animOrder$$inline_1042_columnStart$$6$$[$oldSet$$inline_1040_rowCount$$7$$[$k$$inline_1058_key$$inline_1057_l$$inline_1060$$]].split("_")[1]) * $rowHeight$$inline_1046$$, 
    $pos$$inline_1038_restSet$$inline_1043$$ < $limitRangeInPixels$$inline_1049_offset$$inline_1047$$[1] - $k$$inline_1058_key$$inline_1057_l$$inline_1060$$ * $rowHeight$$inline_1046$$ || ($pos$$inline_1038_restSet$$inline_1043$$ = $limitRangeInPixels$$inline_1049_offset$$inline_1047$$[1] - ($k$$inline_1058_key$$inline_1057_l$$inline_1060$$ - 1) * $cellSet$$13_oldRowElements$$.childNodes[1].clientHeight), (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($cellSet$$13_oldRowElements$$.childNodes[$k$$inline_1058_key$$inline_1057_l$$inline_1060$$ + 
    1], "400ms", $cellRange$$9_delay$$inline_1062_dkey$$inline_1061_newRowElements_order$$inline_1064$$, "ease-in", $pos$$inline_1038_restSet$$inline_1043$$), $rowHeaderSupport$$inline_1070$$ && (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($newRowHeaderElements$$1_oldRowHeaderElements$$inline_1030$$.childNodes[$k$$inline_1058_key$$inline_1057_l$$inline_1060$$ + 1], "400ms", $cellRange$$9_delay$$inline_1062_dkey$$inline_1061_newRowElements_order$$inline_1064$$, "ease-in", $pos$$inline_1038_restSet$$inline_1043$$)) : 
    ((0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($cellSet$$13_oldRowElements$$.childNodes[$k$$inline_1058_key$$inline_1057_l$$inline_1060$$ + 1], "400ms", $cellRange$$9_delay$$inline_1062_dkey$$inline_1061_newRowElements_order$$inline_1064$$, "ease-in", 0), $rowHeaderSupport$$inline_1070$$ && (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($newRowHeaderElements$$1_oldRowHeaderElements$$inline_1030$$.childNodes[$k$$inline_1058_key$$inline_1057_l$$inline_1060$$ + 1], "400ms", $cellRange$$9_delay$$inline_1062_dkey$$inline_1061_newRowElements_order$$inline_1064$$, 
    "ease-in", 0)), $k$$inline_1058_key$$inline_1057_l$$inline_1060$$ == $cellSet$$13_oldRowElements$$.childElementCount - 2) {
      $cellSet$$13_oldRowElements$$.childNodes[$k$$inline_1058_key$$inline_1057_l$$inline_1060$$].addEventListener("transitionend", function() {
        (0,window.setTimeout)(function() {
          if($rowHeaderSupport$$inline_1070$$) {
            var $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1030$$ = $me$$inline_1037$$.$m_rowHeader$.firstChild;
            $me$$inline_1037$$.$m_rowHeader$.firstChild = D.$JSCompiler_alias_NULL$$;
            $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1030$$.innerHTML = "";
            $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1030$$.appendChild($newRowHeaderElementsClone$$inline_1072$$);
            $me$$inline_1037$$.$m_startRowHeader$ = 0
          }
          $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1030$$ = $me$$inline_1037$$.$m_databody$.firstChild;
          $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1030$$.innerHTML = "";
          $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1030$$.appendChild($newElementSetClone$$inline_1071$$)
        }, 1E3)
      }, D.$JSCompiler_alias_FALSE$$);
      break
    }
  }
};
D.$JSCompiler_StaticMethods_isNumeric$$ = function $$JSCompiler_StaticMethods_isNumeric$$$($v$$) {
  return/^-{0,1}\d*\.{0,1}\d+$/.test($v$$)
};
D.$JSCompiler_StaticMethods_getDataKeySet$$ = function $$JSCompiler_StaticMethods_getDataKeySet$$$($JSCompiler_StaticMethods_getDataKeySet$self$$, $initialData$$) {
  var $dataKeySet$$, $keyAttr$$, $i$$29$$, $j$$11$$;
  $dataKeySet$$ = [];
  $keyAttr$$ = $JSCompiler_StaticMethods_getDataKeySet$self$$.$getResources$().getMappedAttribute("key");
  for($i$$29$$ = 0;$i$$29$$ < $initialData$$.childElementCount;$i$$29$$++) {
    for($j$$11$$ = 0;$j$$11$$ < $initialData$$.children[$i$$29$$].attributes.length;$j$$11$$++) {
      if($initialData$$.children[$i$$29$$].attributes[$j$$11$$].nodeName == $keyAttr$$) {
        $dataKeySet$$.push($initialData$$.children[$i$$29$$].attributes[$j$$11$$].nodeValue);
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
  var $vendors$$, $root$$11$$, $i$$30$$, $css3mc$$;
  $vendors$$ = " -moz- -webkit- -o- -ms- -khtml-".split(" ");
  $root$$11$$ = window.document.documentElement;
  for($i$$30$$ = 0;$i$$30$$ < $vendors$$.length;$i$$30$$++) {
    if($css3mc$$ = $toCamel$$($vendors$$[$i$$30$$] + $cssprop$$), "Ms" == $css3mc$$.substr(0, 2) && ($css3mc$$ = "m" + $css3mc$$.substr(1)), $css3mc$$ in $root$$11$$.style) {
      return $css3mc$$
    }
  }
};
D.$JSCompiler_StaticMethods_changeStyleProperty$$ = function $$JSCompiler_StaticMethods_changeStyleProperty$$$($target$$44$$, $prop$$6$$, $value$$50$$) {
  "undefined" != typeof $prop$$6$$ && ($target$$44$$.style[$prop$$6$$] = $value$$50$$)
};
D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$ = function $$JSCompiler_StaticMethods_addUpDownMoveStyle$$$($target$$45$$, $duration$$1$$, $delay$$3$$, $timing$$, $y$$38$$) {
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$45$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-delay"), $delay$$3$$);
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$45$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-timing-function"), $timing$$);
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$45$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-duration"), $duration$$1$$);
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$45$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transform"), "translate3d(0," + $y$$38$$ + "px,0)")
};
D.$JSCompiler_StaticMethods__getSortIcon$$ = function $$JSCompiler_StaticMethods__getSortIcon$$$($header$$22$$) {
  return $header$$22$$.lastChild.firstChild
};
return DvtDataGrid;
});