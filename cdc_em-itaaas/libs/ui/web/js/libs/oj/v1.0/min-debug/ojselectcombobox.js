define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue"], function($oj$$9$$, $$$$9$$) {
  var $_ComboUtils$$ = {$KEY$:{TAB:9, ENTER:13, $ESC$:27, SPACE:32, LEFT:37, UP:38, RIGHT:39, DOWN:40, $SHIFT$:16, $CTRL$:17, $ALT$:18, PAGE_UP:33, PAGE_DOWN:34, HOME:36, END:35, $BACKSPACE$:8, $DELETE$:46, $isArrow$:function($k$$3$$) {
    $k$$3$$ = $k$$3$$.which ? $k$$3$$.which : $k$$3$$;
    switch($k$$3$$) {
      case $_ComboUtils$$.$KEY$.LEFT:
      ;
      case $_ComboUtils$$.$KEY$.RIGHT:
      ;
      case $_ComboUtils$$.$KEY$.UP:
      ;
      case $_ComboUtils$$.$KEY$.DOWN:
        return!0
    }
    return!1
  }, $isControl$:function($e$$40$$) {
    switch($e$$40$$.which) {
      case $_ComboUtils$$.$KEY$.$SHIFT$:
      ;
      case $_ComboUtils$$.$KEY$.$CTRL$:
      ;
      case $_ComboUtils$$.$KEY$.$ALT$:
        return!0
    }
    return $e$$40$$.metaKey ? !0 : !1
  }, $isFunctionKey$:function($k$$5$$) {
    $k$$5$$ = $k$$5$$.which ? $k$$5$$.which : $k$$5$$;
    return 112 <= $k$$5$$ && 123 >= $k$$5$$
  }}, $lastMousePosition$:{x:0, y:0}, $nextUid$:function() {
    var $counter$$ = 1;
    return function() {
      return $counter$$++
    }
  }(), $scrollBarDimensions$:null, $each2$:function($list$$, $c$$24$$) {
    for(var $j$$18$$ = $$$$9$$($list$$[0]), $i$$145$$ = -1, $l$$4$$ = $list$$.length;++$i$$145$$ < $l$$4$$ && ($j$$18$$.context = $j$$18$$[0] = $list$$[$i$$145$$]) && !1 !== $c$$24$$.call($j$$18$$[0], $i$$145$$, $j$$18$$);) {
    }
    return $list$$
  }, $measureScrollbar$:function() {
    var $$template$$ = $$$$9$$("\x3cdiv class\x3d'oj-listbox-measure-scrollbar'\x3e\x3c/div\x3e");
    $$template$$.appendTo("body");
    var $dim$$ = {width:$$template$$.width() - $$template$$[0].clientWidth, height:$$template$$.height() - $$template$$[0].clientHeight};
    $$template$$.remove();
    return $dim$$
  }, $splitVal$:function($string$$3$$, $separator$$1$$) {
    var $val$$24$$, $i$$146$$, $l$$5$$;
    if(null === $string$$3$$ || 1 > $string$$3$$.length) {
      return[]
    }
    $val$$24$$ = $string$$3$$.split($separator$$1$$);
    $i$$146$$ = 0;
    for($l$$5$$ = $val$$24$$.length;$i$$146$$ < $l$$5$$;$i$$146$$ += 1) {
      $val$$24$$[$i$$146$$] = $$$$9$$.trim($val$$24$$[$i$$146$$])
    }
    return $val$$24$$
  }, $getSideBorderPadding$:function($element$$33$$) {
    return $element$$33$$.outerWidth(!1) - $element$$33$$.width()
  }, $installKeyUpChangeEvent$:function($element$$34$$) {
    $element$$34$$.on("keydown", function() {
      void 0 === $$$$9$$.data($element$$34$$, "keyup-change-value") && $$$$9$$.data($element$$34$$, "keyup-change-value", $element$$34$$.val())
    });
    $element$$34$$.on("keyup", function($e$$41_val$$25$$) {
      $e$$41_val$$25$$.which === $_ComboUtils$$.$KEY$.ENTER ? $e$$41_val$$25$$.stopPropagation() : ($e$$41_val$$25$$ = $$$$9$$.data($element$$34$$, "keyup-change-value"), void 0 !== $e$$41_val$$25$$ && $element$$34$$.val() !== $e$$41_val$$25$$ && ($$$$9$$.removeData($element$$34$$, "keyup-change-value"), $element$$34$$.trigger("keyup-change")))
    })
  }, $installFilteredMouseMove$:function($element$$35$$) {
    $element$$35$$.on("mousemove", function($e$$42$$) {
      var $lastpos$$ = $_ComboUtils$$.$lastMousePosition$;
      if(void 0 === $lastpos$$ || $lastpos$$.x !== $e$$42$$.pageX || $lastpos$$.y !== $e$$42$$.pageY) {
        $$$$9$$($e$$42$$.target).trigger("mousemove-filtered", $e$$42$$), $_ComboUtils$$.$lastMousePosition$.x = $e$$42$$.pageX, $_ComboUtils$$.$lastMousePosition$.y = $e$$42$$.pageY
      }
    })
  }, $thunk$:function($formula$$) {
    var $evaluated$$ = !1, $value$$147$$;
    return function() {
      !1 === $evaluated$$ && ($value$$147$$ = $formula$$(), $evaluated$$ = !0);
      return $value$$147$$
    }
  }, $_focus$:function($$el$$) {
    $$el$$[0] !== document.activeElement && window.setTimeout(function() {
      var $el$$3_range$$18$$ = $$el$$[0], $pos$$5$$ = $$el$$.val().length;
      $$el$$.focus();
      $$el$$.is(":visible") && $el$$3_range$$18$$ === document.activeElement && ($el$$3_range$$18$$.setSelectionRange ? $el$$3_range$$18$$.setSelectionRange($pos$$5$$, $pos$$5$$) : $el$$3_range$$18$$.createTextRange && ($el$$3_range$$18$$ = $el$$3_range$$18$$.createTextRange(), $el$$3_range$$18$$.collapse(!1), $el$$3_range$$18$$.select()))
    }, 0)
  }, $getCursorInfo$:function($el$$4$$) {
    $el$$4$$ = $$$$9$$($el$$4$$)[0];
    var $offset$$18_sel$$ = 0, $length$$15$$ = 0;
    "selectionStart" in $el$$4$$ ? ($offset$$18_sel$$ = $el$$4$$.selectionStart, $length$$15$$ = $el$$4$$.selectionEnd - $offset$$18_sel$$) : "selection" in document && ($el$$4$$.focus(), $offset$$18_sel$$ = document.selection.createRange(), $length$$15$$ = document.selection.createRange().text.length, $offset$$18_sel$$.moveStart("character", -$el$$4$$.value.length), $offset$$18_sel$$ = $offset$$18_sel$$.text.length - $length$$15$$);
    return{offset:$offset$$18_sel$$, length:$length$$15$$}
  }, $killEvent$:function($event$$49$$) {
    $event$$49$$.preventDefault();
    $event$$49$$.stopPropagation()
  }, $killEventImmediately$:function($event$$50$$) {
    $event$$50$$.preventDefault();
    $event$$50$$.stopImmediatePropagation()
  }, $defaultEscapeMarkup$:function($markup$$) {
    var $replace_map$$ = {"\\":"\x26#92;", "\x26":"\x26amp;", "\x3c":"\x26lt;", "\x3e":"\x26gt;", '"':"\x26quot;", "'":"\x26#39;"};
    return String($markup$$).replace(/[&<>"'\\]/g, function($match$$13$$) {
      return $replace_map$$[$match$$13$$]
    })
  }, $local$:function($dataItem_options$$213$$) {
    function $text$$7$$($item$$2$$) {
      return"" + $item$$2$$.text
    }
    var $data$$54$$ = $dataItem_options$$213$$, $dataText$$, $tmp$$1$$;
    $$$$9$$.isArray($data$$54$$) && ($tmp$$1$$ = $data$$54$$, $data$$54$$ = {$results$:$tmp$$1$$});
    !1 === $$$$9$$.isFunction($data$$54$$) && ($tmp$$1$$ = $data$$54$$, $data$$54$$ = function $$data$$54$$$() {
      return $tmp$$1$$
    });
    $dataItem_options$$213$$ = $data$$54$$();
    $dataItem_options$$213$$.text && ($text$$7$$ = $dataItem_options$$213$$.text, $$$$9$$.isFunction($text$$7$$) || ($dataText$$ = $dataItem_options$$213$$.text, $text$$7$$ = function $$text$$7$$$($item$$3$$) {
      return $item$$3$$[$dataText$$]
    }));
    return function($query$$3$$) {
      var $t$$ = $query$$3$$.$term$, $filtered$$ = {$results$:[]}, $process$$;
      "" === $t$$ ? $query$$3$$.$callback$($data$$54$$()) : ($process$$ = function $$process$$$($datum$$, $collection$$20$$) {
        var $group$$, $attr$$15$$;
        $datum$$ = $datum$$[0];
        if($datum$$.children) {
          $group$$ = {};
          for($attr$$15$$ in $datum$$) {
            $datum$$.hasOwnProperty($attr$$15$$) && ($group$$[$attr$$15$$] = $datum$$[$attr$$15$$])
          }
          $group$$.children = [];
          $_ComboUtils$$.$each2$($$$$9$$($datum$$.children), function($i$$147$$, $childDatum$$) {
            $process$$($childDatum$$, $group$$.children)
          });
          ($group$$.children.length || $query$$3$$.$matcher$($t$$, $text$$7$$($group$$), $datum$$)) && $collection$$20$$.push($group$$)
        }else {
          $query$$3$$.$matcher$($t$$, $text$$7$$($datum$$), $datum$$) && $collection$$20$$.push($datum$$)
        }
      }, $_ComboUtils$$.$each2$($$$$9$$($data$$54$$().$results$), function($i$$148$$, $datum$$1$$) {
        $process$$($datum$$1$$, $filtered$$.$results$)
      }), $query$$3$$.$callback$($filtered$$))
    }
  }, $checkFormatter$:function($ojContext$$, $formatter$$, $formatterName$$) {
    if($$$$9$$.isFunction($formatter$$)) {
      return!0
    }
    if(!$formatter$$) {
      return!1
    }
    throw Error($formatterName$$ + " must be a function or a false value");
  }, $clazz$:function($SuperClass$$, $methods$$1$$) {
    function $constructor$$1$$() {
    }
    $oj$$9$$.$Object$.$createSubclass$($constructor$$1$$, $SuperClass$$, "");
    $constructor$$1$$.prototype = $$$$9$$.extend($constructor$$1$$.prototype, $methods$$1$$);
    return $constructor$$1$$
  }}, $_AbstractOjChoice$$ = $_ComboUtils$$.$clazz$(Object, {$_bind$:function($func$$10$$) {
    var $self$$38$$ = this;
    return function() {
      $func$$10$$.apply($self$$38$$, arguments)
    }
  }, _init:function($opts$$11$$) {
    var $search$$1$$, $className$$9$$ = this.$_classNm$, $disabled$$1_elemName_readonly$$ = this.$_elemNm$;
    this.$ojContext$ = $opts$$11$$.$ojContext$;
    this.$opts$ = $opts$$11$$ = this.$_prepareOpts$($opts$$11$$);
    this.id = $opts$$11$$.id;
    void 0 !== $opts$$11$$.element.data($disabled$$1_elemName_readonly$$) && null !== $opts$$11$$.element.data($disabled$$1_elemName_readonly$$) && $opts$$11$$.element.data($disabled$$1_elemName_readonly$$)._destroy();
    this.$container$ = this.$_createContainer$();
    this.$containerId$ = "ojChoiceId_" + ($opts$$11$$.element.attr("id") || "autogen" + $_ComboUtils$$.$nextUid$());
    this.$containerSelector$ = "#" + this.$containerId$.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1");
    this.$container$.attr("id", this.$containerId$);
    this.body = $_ComboUtils$$.$thunk$(function() {
      return $opts$$11$$.element.closest("body")
    });
    this.$container$.attr("style", $opts$$11$$.element.attr("style"));
    this.$elementTabIndex$ = this.$opts$.element.attr("tabindex");
    this.$opts$.element.data($disabled$$1_elemName_readonly$$, this).attr("tabindex", "-1").before(this.$container$);
    this.$container$.data($disabled$$1_elemName_readonly$$, this);
    this.$dropdown$ = this.$container$.find(".oj-listbox-drop");
    this.$dropdown$.data($disabled$$1_elemName_readonly$$, this);
    this.$dropdown$.on("click", $_ComboUtils$$.$killEvent$);
    this.$results$ = this.$container$.find(".oj-listbox-results");
    this.search = $search$$1$$ = this.$container$.find("input." + $className$$9$$ + "-input");
    this.$resultsPage$ = this.$queryCount$ = 0;
    this.context = null;
    this.$_initContainer$();
    this.$container$.on("click", $_ComboUtils$$.$killEvent$);
    $_ComboUtils$$.$installFilteredMouseMove$(this.$results$);
    this.$dropdown$.on("mousemove-filtered touchstart touchmove touchend", ".oj-listbox-results", this.$_bind$(this.$_highlightUnderEvent$));
    $$$$9$$(this.$container$).on("change", "." + $className$$9$$ + "-input", function($e$$43$$) {
      $e$$43$$.stopPropagation()
    });
    $$$$9$$(this.$dropdown$).on("change", "." + $className$$9$$ + "-input", function($e$$44$$) {
      $e$$44$$.stopPropagation()
    });
    $_ComboUtils$$.$installKeyUpChangeEvent$($search$$1$$);
    $search$$1$$.on("keyup-change input paste", this.$_bind$(this.$_updateResults$));
    $search$$1$$.on("focus", function() {
      $search$$1$$.addClass($className$$9$$ + "-focused")
    });
    $search$$1$$.on("blur", function() {
      $search$$1$$.removeClass($className$$9$$ + "-focused")
    });
    this.$dropdown$.on("mouseup", ".oj-listbox-results", this.$_bind$(function($e$$45$$) {
      0 < $$$$9$$($e$$45$$.target).closest(".oj-listbox-result-selectable").length && (this.$_highlightUnderEvent$($e$$45$$), this.$_selectHighlighted$(null, $e$$45$$))
    }));
    this.$dropdown$.on("click mouseup mousedown", function($e$$46$$) {
      $e$$46$$.stopPropagation()
    });
    $$$$9$$.isFunction(this.$opts$.$initSelection$) && (!$opts$$11$$.value || "ojcombobox" !== this.$_elemNm$ && Array.isArray($opts$$11$$.value) || this.$setVal$($opts$$11$$.value), this.$_initSelection$());
    $disabled$$1_elemName_readonly$$ = $opts$$11$$.element.prop("disabled");
    void 0 === $disabled$$1_elemName_readonly$$ && ($disabled$$1_elemName_readonly$$ = !1);
    this.$_enable$(!$disabled$$1_elemName_readonly$$);
    $disabled$$1_elemName_readonly$$ = $opts$$11$$.element.prop("readonly");
    void 0 === $disabled$$1_elemName_readonly$$ && ($disabled$$1_elemName_readonly$$ = !1);
    this.$_readonly$($disabled$$1_elemName_readonly$$);
    $_ComboUtils$$.$scrollBarDimensions$ = $_ComboUtils$$.$scrollBarDimensions$ || $_ComboUtils$$.$measureScrollbar$();
    this.autofocus = $opts$$11$$.element.prop("autofocus");
    $opts$$11$$.element.prop("autofocus", !1);
    this.autofocus && this.$_focus$()
  }, _destroy:function() {
    var $element$$36$$ = this.$opts$.element, $ojcomp$$ = $element$$36$$.data(this.$_elemNm$);
    this.close();
    this.$propertyObserver$ && (delete this.$propertyObserver$, this.$propertyObserver$ = null);
    void 0 !== $ojcomp$$ && ($ojcomp$$.$container$.remove(), $ojcomp$$.$dropdown$.remove(), $element$$36$$.removeClass(this.$_classNm$ + "-offscreen").removeData(this.$_elemNm$).off("." + this.$_classNm$).prop("autofocus", this.autofocus || !1), this.$elementTabIndex$ ? $element$$36$$.attr({$tabindex$:this.$elementTabIndex$}) : $element$$36$$.removeAttr("tabindex"), $element$$36$$.show())
  }, $_optionToData$:function($element$$37$$) {
    if($element$$37$$.is("option")) {
      return{id:$element$$37$$.prop("value"), text:$element$$37$$.text(), element:$element$$37$$.get(), css:$element$$37$$.attr("class"), disabled:$element$$37$$.prop("disabled"), locked:"locked" === $element$$37$$.attr("locked") || !0 === $element$$37$$.data("locked")}
    }
    if($element$$37$$.is("optgroup")) {
      return{text:$element$$37$$.attr("label"), children:[], element:$element$$37$$.get(), css:$element$$37$$.attr("class")}
    }
  }, $_prepareOpts$:function($opts$$12$$) {
    var $element$$38$$, $datalist$$, $idKey$$, $self$$39$$ = this;
    $element$$38$$ = $opts$$12$$.element;
    var $tagName$$1$$ = $element$$38$$.get(0).tagName.toLowerCase();
    "input" === $tagName$$1$$ && $element$$38$$.attr("list") ? this.$datalist$ = $datalist$$ = $$$$9$$("#" + $element$$38$$.attr("list")) : "select" === $tagName$$1$$ && 0 < $element$$38$$.children().length && (this.$datalist$ = $datalist$$ = $element$$38$$);
    $opts$$12$$ = $$$$9$$.extend({}, {$populateResults$:function($container$$2$$, $results$$5$$, $query$$4$$) {
      var $populate$$, $id$$12$$ = this.$opts$.id;
      $populate$$ = function $$populate$$$($results$$6$$, $container$$3$$, $depth$$18$$) {
        var $i$$149$$, $l$$6$$, $result$$13$$, $label$$4_selectable$$, $disabled$$2_formatted_innerContainer$$, $node$$14$$;
        $i$$149$$ = 0;
        for($l$$6$$ = $results$$6$$.length;$i$$149$$ < $l$$6$$;$i$$149$$ += 1) {
          $result$$13$$ = $results$$6$$[$i$$149$$], $disabled$$2_formatted_innerContainer$$ = !0 === $result$$13$$.disabled, $label$$4_selectable$$ = !$disabled$$2_formatted_innerContainer$$ && void 0 !== $id$$12$$($result$$13$$), $node$$14$$ = $$$$9$$("\x3cli\x3e\x3c/li\x3e"), $node$$14$$.addClass("oj-listbox-results-dept-" + $depth$$18$$), $node$$14$$.addClass("oj-listbox-result"), $node$$14$$.addClass($label$$4_selectable$$ ? "oj-listbox-result-selectable" : "oj-listbox-result-unselectable"), 
          $disabled$$2_formatted_innerContainer$$ && $node$$14$$.addClass("oj-disabled"), $result$$13$$.children && $node$$14$$.addClass("oj-listbox-result-with-children"), $node$$14$$.attr("role", "presentation"), $label$$4_selectable$$ = $$$$9$$(document.createElement("div")), $label$$4_selectable$$.addClass("oj-listbox-result-label"), $label$$4_selectable$$.attr("id", "oj-listbox-result-label-" + $_ComboUtils$$.$nextUid$()), $label$$4_selectable$$.attr("role", "option"), $disabled$$2_formatted_innerContainer$$ && 
          $label$$4_selectable$$.attr("aria-disabled", "true"), $disabled$$2_formatted_innerContainer$$ = $opts$$12$$.$formatResult$($result$$13$$, $label$$4_selectable$$, $query$$4$$, $self$$39$$.$opts$.$escapeMarkup$), void 0 !== $disabled$$2_formatted_innerContainer$$ && $label$$4_selectable$$.html($disabled$$2_formatted_innerContainer$$), $node$$14$$.append($label$$4_selectable$$), $result$$13$$.children && 0 < $result$$13$$.children.length && ($disabled$$2_formatted_innerContainer$$ = $$$$9$$("\x3cul\x3e\x3c/ul\x3e"), 
          $disabled$$2_formatted_innerContainer$$.addClass("oj-listbox-result-sub"), $populate$$($result$$13$$.children, $disabled$$2_formatted_innerContainer$$, $depth$$18$$ + 1), $node$$14$$.append($disabled$$2_formatted_innerContainer$$)), $node$$14$$.data($self$$39$$.$_elemNm$, $result$$13$$), $container$$3$$.append($node$$14$$)
        }
      };
      $populate$$($results$$5$$, $container$$2$$, 0)
    }}, $_ojChoice_defaults$$, "select" === $tagName$$1$$ ? null : $_ojCombobox_methods$$, $opts$$12$$);
    "function" !== typeof $opts$$12$$.id && ($idKey$$ = $opts$$12$$.id, $opts$$12$$.id = function $$opts$$12$$$id$($e$$47$$) {
      return $e$$47$$[$idKey$$]
    });
    $datalist$$ ? ($opts$$12$$.$query$ = this.$_bind$(function($query$$5$$) {
      var $data$$55$$ = {$results$:[], $more$:!1}, $term$$ = $query$$5$$.$term$, $children$$2$$, $process$$1$$;
      $process$$1$$ = function $$process$$1$$$($element$$39$$, $collection$$21$$) {
        var $group$$1$$;
        $element$$39$$.is("option") ? $query$$5$$.$matcher$($term$$, $element$$39$$.text(), $element$$39$$) && $collection$$21$$.push($self$$39$$.$_optionToData$($element$$39$$)) : $element$$39$$.is("optgroup") && ($group$$1$$ = $self$$39$$.$_optionToData$($element$$39$$), $_ComboUtils$$.$each2$($element$$39$$.children(), function($i$$150$$, $elm$$1$$) {
          $process$$1$$($elm$$1$$, $group$$1$$.children)
        }), 0 < $group$$1$$.children.length && $collection$$21$$.push($group$$1$$))
      };
      $children$$2$$ = $datalist$$.children();
      if(void 0 !== this.$_getPlaceholder$() && 0 < $children$$2$$.length) {
        var $placeholderOption$$ = this.$_getPlaceholderOption$();
        $placeholderOption$$ && ($children$$2$$ = $children$$2$$.not($placeholderOption$$))
      }
      $_ComboUtils$$.$each2$($children$$2$$, function($i$$151$$, $elm$$2$$) {
        $process$$1$$($elm$$2$$, $data$$55$$.$results$)
      });
      $query$$5$$.$callback$($data$$55$$)
    }), $opts$$12$$.id = function $$opts$$12$$$id$($e$$48$$) {
      return $e$$48$$.id
    }) : "data" in $opts$$12$$ && ($opts$$12$$.$query$ = $_ComboUtils$$.$local$($opts$$12$$.data));
    return $opts$$12$$
  }, $_triggerSelect$:function($data$$56_evt$$18$$) {
    $data$$56_evt$$18$$ = $$$$9$$.Event(this.$_elemNm$ + "-selecting", {val:this.id($data$$56_evt$$18$$), object:$data$$56_evt$$18$$});
    this.$opts$.element.trigger($data$$56_evt$$18$$);
    return!$data$$56_evt$$18$$.isDefaultPrevented()
  }, $_triggerChange$:function() {
    this.$ojContext$.$_SetValue$(this.$getVal$())
  }, $_isInterfaceEnabled$:function() {
    return!0 === this.$enabledInterface$
  }, $_enableInterface$:function() {
    var $enabled$$ = this.$_enabled$ && !this.$_readonly$;
    if($enabled$$ === this.$enabledInterface$) {
      return!1
    }
    this.$container$.toggleClass("oj-disabled", !$enabled$$);
    this.close();
    this.$enabledInterface$ = $enabled$$;
    return!0
  }, $_enable$:function($enabled$$1$$) {
    void 0 === $enabled$$1$$ && ($enabled$$1$$ = !0);
    this.$_enabled$ !== $enabled$$1$$ && (this.$_enabled$ = $enabled$$1$$, this.$opts$.element.prop("disabled", !$enabled$$1$$), this.$_enableInterface$())
  }, $_disable$:function() {
    this.$_enable$(!1)
  }, $_readonly$:function($enabled$$2$$) {
    void 0 === $enabled$$2$$ && ($enabled$$2$$ = !1);
    if(this.$_readonly$ === $enabled$$2$$) {
      return!1
    }
    this.$_readonly$ = $enabled$$2$$;
    this.$opts$.element.prop("readonly", $enabled$$2$$);
    this.$_enableInterface$();
    return!0
  }, $_opened$:function() {
    return this.$container$.hasClass("oj-listbox-dropdown-open")
  }, $_positionDropdown$:function() {
    var $$dropdown$$ = this.$dropdown$, $offset$$19$$ = this.$container$.offset(), $dropTop_height$$12$$ = this.$container$.outerHeight(!1), $css_width$$13$$ = this.$container$.outerWidth(!1), $above_dropHeight$$ = $$dropdown$$.outerHeight(!1), $$window_resultsListNode$$ = $$$$9$$(window), $windowWidth$$ = $$window_resultsListNode$$.width(), $windowHeight$$ = $$window_resultsListNode$$.height(), $bodyOffset_viewPortRight$$ = $$window_resultsListNode$$.scrollLeft() + $windowWidth$$, $enoughRoomBelow_viewportBottom$$ = 
    $$window_resultsListNode$$.scrollTop() + $windowHeight$$, $dropTop_height$$12$$ = $offset$$19$$.top + $dropTop_height$$12$$, $dropLeft$$ = $offset$$19$$.left, $enoughRoomBelow_viewportBottom$$ = $dropTop_height$$12$$ + $above_dropHeight$$ <= $enoughRoomBelow_viewportBottom$$, $enoughRoomAbove$$ = $offset$$19$$.top - $above_dropHeight$$ >= this.body().scrollTop(), $dropWidth$$ = $$dropdown$$.outerWidth(!1), $enoughRoomOnRight$$ = $dropLeft$$ + $dropWidth$$ <= $bodyOffset_viewPortRight$$, $changeDirection$$;
    $$dropdown$$.hasClass("oj-listbox-drop-above") ? ($above_dropHeight$$ = !0, !$enoughRoomAbove$$ && $enoughRoomBelow_viewportBottom$$ && ($changeDirection$$ = !0, $above_dropHeight$$ = !1)) : ($above_dropHeight$$ = !1, !$enoughRoomBelow_viewportBottom$$ && $enoughRoomAbove$$ && ($above_dropHeight$$ = $changeDirection$$ = !0));
    $changeDirection$$ ? ($$dropdown$$.hide(), $offset$$19$$ = this.$container$.offset(), $dropTop_height$$12$$ = this.$container$.outerHeight(!1), $css_width$$13$$ = this.$container$.outerWidth(!1), $$dropdown$$.outerHeight(!1), $bodyOffset_viewPortRight$$ = $$window_resultsListNode$$.scrollLeft() + $windowWidth$$, $$window_resultsListNode$$.scrollTop(), $dropTop_height$$12$$ = $offset$$19$$.top + $dropTop_height$$12$$, !$above_dropHeight$$ && this.$_hasSearchBox$() && ($dropTop_height$$12$$ -= 
    1), $dropLeft$$ = $offset$$19$$.left, $dropWidth$$ = $$dropdown$$.outerWidth(!1), $enoughRoomOnRight$$ = $dropLeft$$ + $dropWidth$$ <= $bodyOffset_viewPortRight$$, $$dropdown$$.show()) : !$above_dropHeight$$ && this.$_hasSearchBox$() && ($dropTop_height$$12$$ -= 1);
    this.$opts$.$dropdownAutoWidth$ ? ($$window_resultsListNode$$ = $$$$9$$(".oj-listbox-results", $$dropdown$$)[0], $$dropdown$$.addClass("oj-listbox-drop-auto-width"), $$dropdown$$.css("width", ""), $dropWidth$$ = $$dropdown$$.outerWidth(!1) + ($$window_resultsListNode$$.scrollHeight === $$window_resultsListNode$$.clientHeight ? 0 : $_ComboUtils$$.$scrollBarDimensions$.width), $dropWidth$$ > $css_width$$13$$ ? $css_width$$13$$ = $dropWidth$$ : $dropWidth$$ = $css_width$$13$$, $enoughRoomOnRight$$ = 
    $dropLeft$$ + $dropWidth$$ <= $bodyOffset_viewPortRight$$) : this.$container$.removeClass("oj-listbox-drop-auto-width");
    "static" !== this.body().css("position") && ($bodyOffset_viewPortRight$$ = this.body().offset(), $dropTop_height$$12$$ -= $bodyOffset_viewPortRight$$.top, $dropLeft$$ -= $bodyOffset_viewPortRight$$.left);
    $enoughRoomOnRight$$ || ($dropLeft$$ = $offset$$19$$.left + $css_width$$13$$ - $dropWidth$$);
    $css_width$$13$$ = {left:$dropLeft$$, width:$css_width$$13$$};
    $above_dropHeight$$ ? ($css_width$$13$$.bottom = $windowHeight$$ - $offset$$19$$.top, $css_width$$13$$.top = "auto", this.$container$.addClass("oj-listbox-drop-above"), $$dropdown$$.addClass("oj-listbox-drop-above")) : ($css_width$$13$$.top = $dropTop_height$$12$$, $css_width$$13$$.bottom = "auto", this.$container$.removeClass("oj-listbox-drop-above"), $$dropdown$$.removeClass("oj-listbox-drop-above"));
    $$dropdown$$.css($css_width$$13$$)
  }, $_shouldOpen$:function() {
    var $event$$51$$;
    if(this.$_opened$() || !1 === this.$_enabled$ || !0 === this.$_readonly$) {
      return!1
    }
    $event$$51$$ = $$$$9$$.Event(this.$_elemNm$ + "-opening");
    this.$opts$.element.trigger($event$$51$$);
    return!$event$$51$$.isDefaultPrevented()
  }, $_clearDropdownAlignmentPreference$:function() {
    this.$container$.removeClass("oj-listbox-drop-above");
    this.$dropdown$.removeClass("oj-listbox-drop-above")
  }, open:function() {
    if(!this.$_shouldOpen$()) {
      return!1
    }
    this.$_opening$();
    return!0
  }, $_clearPlaceholder$:function() {
    this.search.hasClass(this.$_classNm$ + "-default") && this.search.val("").removeClass(this.$_classNm$ + "-default")
  }, $_opening$:function() {
    var $cid$$6$$ = this.$containerId$, $scroll$$ = "scroll." + $cid$$6$$, $resize$$ = "resize." + $cid$$6$$, $orient$$ = "orientationchange." + $cid$$6$$, $elemName$$1$$ = this.$_elemNm$, $mask$$5$$;
    this.$_clearPlaceholder$();
    this.$container$.addClass("oj-listbox-dropdown-open");
    this.$_clearDropdownAlignmentPreference$();
    this.$dropdown$[0] !== this.body().children().last()[0] && this.$dropdown$.detach().appendTo(this.body());
    $mask$$5$$ = $$$$9$$("#oj-listbox-drop-mask" + $cid$$6$$);
    0 == $mask$$5$$.length && ($mask$$5$$ = $$$$9$$(document.createElement("div")), $mask$$5$$.attr("id", "oj-listbox-drop-mask" + $cid$$6$$).attr("class", "oj-listbox-drop-mask"), $mask$$5$$.hide(), $mask$$5$$.appendTo(this.body()), $mask$$5$$.on("mousedown touchstart click", function($e$$49$$) {
      var $dropdown_self$$40$$ = $$$$9$$("#oj-listbox-drop");
      0 < $dropdown_self$$40$$.length && ($dropdown_self$$40$$ = $dropdown_self$$40$$.data($elemName$$1$$), $dropdown_self$$40$$.$opts$.$selectOnBlur$ && $dropdown_self$$40$$.$_selectHighlighted$({$noFocus$:!0}, $e$$49$$), $dropdown_self$$40$$.close(), $e$$49$$.preventDefault(), $e$$49$$.stopPropagation())
    }));
    this.$dropdown$.prev()[0] !== $mask$$5$$[0] && this.$dropdown$.before($mask$$5$$);
    $$$$9$$("#oj-listbox-drop").removeAttr("id");
    this.$dropdown$.attr("id", "oj-listbox-drop");
    $mask$$5$$.show();
    this.$_positionDropdown$();
    this.$dropdown$.show();
    this.$_positionDropdown$();
    this.$_getActiveContainer$().attr("aria-expanded", !0);
    var $that$$2$$ = this;
    this.$container$.parents().add(window).each(function() {
      $$$$9$$(this).on($resize$$ + " " + $scroll$$ + " " + $orient$$, function() {
        $that$$2$$.$_positionDropdown$()
      })
    })
  }, close:function() {
    if(this.$_opened$()) {
      var $cid$$7$$ = this.$containerId$, $scroll$$1$$ = "scroll." + $cid$$7$$, $resize$$1$$ = "resize." + $cid$$7$$, $orient$$1$$ = "orientationchange." + $cid$$7$$;
      this.$container$.parents().add(window).each(function() {
        $$$$9$$(this).off($scroll$$1$$).off($resize$$1$$).off($orient$$1$$)
      });
      this.$_clearDropdownAlignmentPreference$();
      $$$$9$$("#oj-listbox-drop-mask" + this.$containerId$).hide();
      this.$dropdown$.removeAttr("id");
      this.$dropdown$.hide();
      this.$container$.removeClass("oj-listbox-dropdown-open");
      this.$results$.empty();
      this.$_getActiveContainer$().attr("aria-expanded", !1)
    }
  }, $_clearSearch$:$JSCompiler_emptyFn$$(), $_ensureHighlightVisible$:function() {
    var $results$$7$$ = this.$results$, $children$$3_more_rb$$, $index$$125$$, $child$$5$$, $hb_y$$38$$;
    $index$$125$$ = this.$_highlight$();
    0 > $index$$125$$ || (0 == $index$$125$$ ? $results$$7$$.scrollTop(0) : ($children$$3_more_rb$$ = this.$_findHighlightableChoices$().find(".oj-listbox-result-label"), $child$$5$$ = $$$$9$$($children$$3_more_rb$$[$index$$125$$]), $hb_y$$38$$ = $child$$5$$.offset().top + $child$$5$$.outerHeight(!0), $index$$125$$ === $children$$3_more_rb$$.length - 1 && ($children$$3_more_rb$$ = $results$$7$$.find("li.oj-listbox-more-results"), 0 < $children$$3_more_rb$$.length && ($hb_y$$38$$ = $children$$3_more_rb$$.offset().top + 
    $children$$3_more_rb$$.outerHeight(!0))), $children$$3_more_rb$$ = $results$$7$$.offset().top + $results$$7$$.outerHeight(!0), $hb_y$$38$$ > $children$$3_more_rb$$ && $results$$7$$.scrollTop($results$$7$$.scrollTop() + ($hb_y$$38$$ - $children$$3_more_rb$$)), $hb_y$$38$$ = $child$$5$$.offset().top - $results$$7$$.offset().top, 0 > $hb_y$$38$$ && "none" != $child$$5$$.css("display") && $results$$7$$.scrollTop($results$$7$$.scrollTop() + $hb_y$$38$$)))
  }, $_findHighlightableChoices$:function() {
    return this.$results$.find(".oj-listbox-result-selectable:not(.oj-disabled, .oj-listbox-selected)")
  }, $_moveHighlight$:function($delta$$2$$) {
    for(var $choices$$ = this.$_findHighlightableChoices$(), $index$$126$$ = this.$_highlight$();-1 < $index$$126$$ && $index$$126$$ < $choices$$.length;) {
      var $index$$126$$ = $index$$126$$ + $delta$$2$$, $choice$$ = $$$$9$$($choices$$[$index$$126$$]);
      if($choice$$.hasClass("oj-listbox-result-selectable") && !$choice$$.hasClass("oj-disabled") && !$choice$$.hasClass("oj-listbox-selected")) {
        this.$_highlight$($index$$126$$);
        break
      }
    }
  }, $_highlight$:function($index$$127$$) {
    var $choice$$1_choices$$1$$ = this.$_findHighlightableChoices$();
    if(0 === arguments.length) {
      return $choice$$1_choices$$1$$.get().indexOf($choice$$1_choices$$1$$.filter(".oj-listbox-highlighted")[0])
    }
    $index$$127$$ >= $choice$$1_choices$$1$$.length && ($index$$127$$ = $choice$$1_choices$$1$$.length - 1);
    0 > $index$$127$$ && ($index$$127$$ = 0);
    this.$_removeHighlight$();
    $choice$$1_choices$$1$$ = $$$$9$$($choice$$1_choices$$1$$[$index$$127$$]);
    $choice$$1_choices$$1$$.addClass("oj-listbox-highlighted");
    this.$_getActiveContainer$().attr("aria-activedescendant", $choice$$1_choices$$1$$.find(".oj-listbox-result-label").attr("id"));
    this.$_ensureHighlightVisible$()
  }, $_removeHighlight$:function() {
    this.$results$.find(".oj-listbox-highlighted").removeClass("oj-listbox-highlighted")
  }, $_highlightUnderEvent$:function($el$$5_event$$52$$) {
    $el$$5_event$$52$$ = $$$$9$$($el$$5_event$$52$$.target).closest(".oj-listbox-result-selectable");
    if(0 < $el$$5_event$$52$$.length && !$el$$5_event$$52$$.is(".oj-listbox-highlighted")) {
      var $choices$$2$$ = this.$_findHighlightableChoices$();
      this.$_highlight$($choices$$2$$.index($el$$5_event$$52$$))
    }else {
      0 == $el$$5_event$$52$$.length && this.$_removeHighlight$()
    }
  }, $_updateResults$:function($initial$$) {
    function $render$$($html$$) {
      $results$$8$$.html($html$$);
      $self$$41$$.$_positionDropdown$()
    }
    var $search$$2$$ = this.search, $results$$8$$ = this.$results$, $opts$$13$$ = this.$opts$, $self$$41$$ = this, $input_term$$1$$;
    $input_term$$1$$ = $search$$2$$.val();
    var $lastTerm$$ = $$$$9$$.data(this.$container$, this.$_classNm$ + "-last-term"), $queryNumber$$;
    !0 !== $initial$$ && $lastTerm$$ && $input_term$$1$$ === $lastTerm$$ || ($$$$9$$.data(this.$container$, this.$_classNm$ + "-last-term", $input_term$$1$$), $queryNumber$$ = ++this.$queryCount$, this.$_removeHighlight$(), $input_term$$1$$ = this.search.val(), this.$resultsPage$ = 1, $opts$$13$$.$query$({element:$opts$$13$$.element, $term$:void 0 !== $input_term$$1$$ && null != $input_term$$1$$ && !0 !== $initial$$ ? $input_term$$1$$ : "", page:this.$resultsPage$, context:null, $matcher$:$opts$$13$$.$matcher$, 
    $callback$:this.$_bind$(function($data$$59$$) {
      var $def$$;
      $queryNumber$$ == this.$queryCount$ && this.$_opened$() && (this.context = void 0 === $data$$59$$.context ? null : $data$$59$$.context, 0 === $data$$59$$.$results$.length && (this.$opts$.$manageNewEntry$ && "" !== $search$$2$$.val()) && ($def$$ = this.$opts$.$manageNewEntry$.call($self$$41$$, $search$$2$$.val(), $data$$59$$.$results$), void 0 !== $def$$ && null !== $def$$ && void 0 !== $self$$41$$.id($def$$) && null !== $self$$41$$.id($def$$) && 0 === $$$$9$$($data$$59$$.$results$).filter(function() {
        return $self$$41$$.id(this) === $self$$41$$.id($def$$)
      }).length && $data$$59$$.$results$.unshift($def$$)), 0 === $data$$59$$.$results$.length && $_ComboUtils$$.$checkFormatter$($self$$41$$.$ojContext$, $opts$$13$$.$formatNoMatches$, "formatNoMatches") ? $render$$("\x3cli class\x3d'oj-listbox-no-results'\x3e" + $opts$$13$$.$formatNoMatches$($self$$41$$.$ojContext$, $search$$2$$.val()) + "\x3c/li\x3e") : ($results$$8$$.empty(), $self$$41$$.$opts$.$populateResults$.call(this, $results$$8$$, $data$$59$$.$results$, {$term$:$search$$2$$.val(), page:this.$resultsPage$, 
      context:null}), this.$_postprocessResults$($data$$59$$, $initial$$), $self$$41$$.$_positionDropdown$()))
    })}))
  }, $_cancel$:function() {
    this.close()
  }, $_focusSearch$:function() {
    $_ComboUtils$$.$_focus$(this.search)
  }, $_selectHighlighted$:function($options$$214$$, $event$$53$$) {
    var $index$$128$$ = this.$_highlight$(), $data$$60$$ = this.$results$.find(".oj-listbox-highlighted").closest(".oj-listbox-result").data(this.$_elemNm$);
    $data$$60$$ ? (this.$_highlight$($index$$128$$), this.$_onSelect$($data$$60$$, $options$$214$$, $event$$53$$)) : $options$$214$$ && $options$$214$$.$noFocus$ && this.close()
  }, $_getPlaceholder$:function() {
    return this.$opts$.element.attr("placeholder") || this.$opts$.element.attr("data-placeholder") || this.$opts$.element.data("placeholder") || this.$opts$.placeholder
  }, $_getPlaceholderOption$:$JSCompiler_emptyFn$$(), $_initContainerWidth$:function() {
    var $attrs$$inline_633_style$$inline_632_width$$14$$;
    a: {
      var $attr$$inline_637_matches$$inline_634$$, $i$$inline_635$$, $l$$inline_636$$;
      $attrs$$inline_633_style$$inline_632_width$$14$$ = this.$opts$.element.attr("style");
      if(void 0 !== $attrs$$inline_633_style$$inline_632_width$$14$$) {
        for($attrs$$inline_633_style$$inline_632_width$$14$$ = $attrs$$inline_633_style$$inline_632_width$$14$$.split(";"), $i$$inline_635$$ = 0, $l$$inline_636$$ = $attrs$$inline_633_style$$inline_632_width$$14$$.length;$i$$inline_635$$ < $l$$inline_636$$;$i$$inline_635$$ += 1) {
          if($attr$$inline_637_matches$$inline_634$$ = $attrs$$inline_633_style$$inline_632_width$$14$$[$i$$inline_635$$].replace(/\s/g, ""), $attr$$inline_637_matches$$inline_634$$ = $attr$$inline_637_matches$$inline_634$$.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== $attr$$inline_637_matches$$inline_634$$ && 1 <= $attr$$inline_637_matches$$inline_634$$.length) {
            $attrs$$inline_633_style$$inline_632_width$$14$$ = $attr$$inline_637_matches$$inline_634$$[1];
            break a
          }
        }
      }
      $attrs$$inline_633_style$$inline_632_width$$14$$ = void 0
    }
    null !== $attrs$$inline_633_style$$inline_632_width$$14$$ && this.$container$.css("width", $attrs$$inline_633_style$$inline_632_width$$14$$)
  }, $getVal$:function() {
    return this.$ojContext$.option("value")
  }, $setVal$:function($val$$26$$, $event$$54$$) {
    "string" === typeof $val$$26$$ ? this.$ojContext$.$_SetValue$([$val$$26$$], $event$$54$$) : this.$ojContext$.$_SetValue$($val$$26$$, $event$$54$$);
    this.$opts$.element.val($val$$26$$)
  }, $_getActiveContainer$:$JSCompiler_get$$("search"), $_hasSearchBox$:function() {
    return void 0 !== this.$opts$.minimumResultsForSearch && void 0 !== this.$container$.$_hasSearchBox$
  }}), $_ojChoice_defaults$$ = {$closeOnSelect$:!0, $openOnEnter$:!0, $formatResult$:function($result$$14$$, $container$$4_markup$$1$$, $query$$6$$, $escapeMarkup$$) {
    $container$$4_markup$$1$$ = [];
    $container$$4_markup$$1$$.push($escapeMarkup$$($result$$14$$.text));
    return $container$$4_markup$$1$$.join("")
  }, $formatSelection$:function($data$$61$$, $container$$5$$, $escapeMarkup$$1$$) {
    return $data$$61$$ && $data$$61$$.text ? $escapeMarkup$$1$$($data$$61$$.text) : void 0
  }, $formatNoMatches$:$JSCompiler_returnArg$$("No matches found"), id:function($e$$51$$) {
    return $e$$51$$.id
  }, $matcher$:function($term$$2$$, $text$$8$$) {
    return 0 <= ("" + $text$$8$$).toUpperCase().indexOf(("" + $term$$2$$).toUpperCase())
  }, separator:",", $escapeMarkup$:$_ComboUtils$$.$defaultEscapeMarkup$, $blurOnChange$:!1, $selectOnBlur$:!1}, $_ojCombobox_methods$$ = {$manageNewEntry$:function($term$$3$$) {
    return{id:$$$$9$$.trim($term$$3$$), text:$$$$9$$.trim($term$$3$$)}
  }}, $_AbstractSingleChoice$$ = $_ComboUtils$$.$clazz$($_AbstractOjChoice$$, {$_enableInterface$:function() {
    $_AbstractSingleChoice$$.$superclass$.$_enableInterface$.apply(this, arguments) && this.search.prop("disabled", !this.$_isInterfaceEnabled$())
  }, $_focus$:function() {
    this.$_opened$() && this.close()
  }, _destroy:function() {
    $$$$9$$("label[for\x3d'" + this.search.attr("id") + "']").attr("for", this.$opts$.element.attr("id"));
    $_AbstractSingleChoice$$.$superclass$._destroy.apply(this, arguments)
  }, $_clear$:function() {
    this.selection.data(this.$_elemNm$) && (this.$setVal$([]), this.search.val(""), this.selection.removeData(this.$_elemNm$));
    this.$_setPlaceholder$()
  }, $_initSelection$:function() {
    var $self$$42$$ = this;
    this.$opts$.$initSelection$.call(null, this.$datalist$ ? this.$datalist$ : this.$opts$.element, function($selected$$1$$) {
      if(void 0 !== $selected$$1$$ && null !== $selected$$1$$) {
        var $prevVal$$ = $self$$42$$.$getVal$();
        Array.isArray($prevVal$$) && ($prevVal$$ = $prevVal$$[0]);
        $self$$42$$.id($selected$$1$$) !== $prevVal$$ && $self$$42$$.$setVal$($self$$42$$.id($selected$$1$$));
        $self$$42$$.$_updateSelection$($selected$$1$$);
        $self$$42$$.close()
      }
    })
  }, $_containerKeydownHandler$:function($e$$52$$) {
    if(this.$_isInterfaceEnabled$()) {
      if($e$$52$$.which === $_ComboUtils$$.$KEY$.PAGE_UP || $e$$52$$.which === $_ComboUtils$$.$KEY$.PAGE_DOWN) {
        $_ComboUtils$$.$killEvent$($e$$52$$)
      }else {
        switch($e$$52$$.which) {
          case $_ComboUtils$$.$KEY$.UP:
          ;
          case $_ComboUtils$$.$KEY$.DOWN:
            this.$_opened$() ? this.$_moveHighlight$($e$$52$$.which === $_ComboUtils$$.$KEY$.UP ? -1 : 1) : this.open();
            $_ComboUtils$$.$killEvent$($e$$52$$);
            return;
          case $_ComboUtils$$.$KEY$.ENTER:
            this.$_selectHighlighted$(null, $e$$52$$);
            $_ComboUtils$$.$killEvent$($e$$52$$);
            return;
          case $_ComboUtils$$.$KEY$.TAB:
            this.$_selectHighlighted$({$noFocus$:!0}, $e$$52$$);
            return;
          case $_ComboUtils$$.$KEY$.$ESC$:
            this.$_cancel$($e$$52$$);
            $_ComboUtils$$.$killEvent$($e$$52$$);
            return
        }
        this.$_userTyping$ = !0;
        this.$_opened$() || this.open()
      }
    }
  }, $_containerKeyupHandler$:function() {
    this.$_isInterfaceEnabled$() && !this.$_opened$() && this.open()
  }, $_initContainer$:function() {
    var $container$$6_selection$$;
    $container$$6_selection$$ = this.$container$;
    var $idSuffix$$ = $_ComboUtils$$.$nextUid$(), $elementLabel$$;
    this.selection = $container$$6_selection$$ = $container$$6_selection$$.find("." + this.$_classNm$ + "-choice");
    $elementLabel$$ = $$$$9$$("label[for\x3d'" + this.$opts$.element.attr("id") + "']");
    $elementLabel$$.attr("id") || $elementLabel$$.attr("id", this.$_classNm$ + "-label-" + $idSuffix$$);
    $container$$6_selection$$.find("." + this.$_classNm$ + "-input").attr("id", this.$_classNm$ + "-input-" + $idSuffix$$);
    this.$results$.attr("id", "oj-listbox-results-" + $idSuffix$$);
    this.search.attr("aria-owns", "oj-listbox-results-" + $idSuffix$$);
    this.search.attr("aria-labelledby", $elementLabel$$.attr("id"));
    this.search.on("keydown", this.$_bind$(this.$_containerKeydownHandler$));
    this.search.on("keyup-change input", this.$_bind$(this.$_containerKeyupHandler$));
    $container$$6_selection$$.on("mousedown", "abbr", this.$_bind$(function($e$$54$$) {
      this.$_isInterfaceEnabled$() && (this.$_clear$(), $_ComboUtils$$.$killEventImmediately$($e$$54$$), this.close(), this.selection.focus())
    }));
    $container$$6_selection$$.on("mousedown", this.$_bind$(function($e$$55$$) {
      this.$opts$.element.prop("disabled") && $_ComboUtils$$.$killEvent$($e$$55$$);
      this.$_opened$() ? this.close() : this.$_isInterfaceEnabled$() && this.open();
      this.search.focus()
    }));
    $container$$6_selection$$.on("focus", this.$_bind$(function($e$$56$$) {
      $_ComboUtils$$.$killEvent$($e$$56$$)
    }));
    this.search.on("blur", this.$_bind$(function() {
      this.search.removeClass(this.$_classNm$ + "-focused")
    }));
    this.$_initContainerWidth$();
    this.$opts$.element.addClass(this.$_classNm$ + "-offscreen");
    this.$_setPlaceholder$()
  }, $_prepareOpts$:function() {
    var $opts$$14$$ = $_AbstractSingleChoice$$.$superclass$.$_prepareOpts$.apply(this, arguments), $self$$43$$ = this, $tagName$$2$$ = $opts$$14$$.element.get(0).tagName.toLowerCase();
    if("input" === $tagName$$2$$ && $opts$$14$$.element.prop("list") || "select" === $tagName$$2$$ && 0 < $opts$$14$$.element.children().length) {
      $opts$$14$$.$initSelection$ = function $$opts$$14$$$$initSelection$$($element$$41$$, $callback$$83$$) {
        var $selected$$2$$, $value$$148$$ = $self$$43$$.$getVal$();
        Array.isArray($value$$148$$) && ($value$$148$$ = $value$$148$$[0]);
        $selected$$2$$ = void 0 !== $value$$148$$ && null !== $value$$148$$ ? $self$$43$$.$_optionToData$($element$$41$$.find("option").filter(function() {
          return this.value === $value$$148$$
        })) : $self$$43$$.$_optionToData$($element$$41$$.find("option").filter($JSCompiler_get$$("selected")));
        $callback$$83$$($selected$$2$$)
      }
    }else {
      if("data" in $opts$$14$$ || this.$getVal$() && 0 < this.$getVal$().length) {
        $opts$$14$$.$initSelection$ = $opts$$14$$.$initSelection$ || function($element$$42$$, $callback$$84$$) {
          var $id$$13$$ = "";
          $self$$43$$.$getVal$() && $self$$43$$.$getVal$().length && ($id$$13$$ = $self$$43$$.$getVal$()[0]);
          var $first$$3$$ = null, $match$$14$$ = null;
          $opts$$14$$.$query$({$matcher$:function($is_match_term$$4$$, $text$$9$$, $el$$6$$) {
            ($is_match_term$$4$$ = $id$$13$$ === $opts$$14$$.id($el$$6$$)) && ($match$$14$$ = $el$$6$$);
            $first$$3$$ || ($first$$3$$ = $el$$6$$);
            return $is_match_term$$4$$
          }, $callback$:$$$$9$$.isFunction($callback$$84$$) ? function() {
            $match$$14$$ || "select" !== $tagName$$2$$ || ($match$$14$$ = $first$$3$$);
            $callback$$84$$($match$$14$$)
          } : $$$$9$$.noop})
        }
      }
    }
    return $opts$$14$$
  }, $_setPlaceholder$:function() {
    var $placeholder$$ = this.$_getPlaceholder$();
    void 0 === $placeholder$$ && ($placeholder$$ = "");
    this.search.val($placeholder$$).addClass(this.$_classNm$ + "-default");
    this.$container$.removeClass(this.$_classNm$ + "-allowclear")
  }, $_postprocessResults$:function($data$$63_highlightableChoices$$, $initial$$1$$, $noHighlightUpdate$$) {
    var $selected$$3$$ = 0, $self$$44$$ = this;
    $data$$63_highlightableChoices$$ = this.$_findHighlightableChoices$();
    $_ComboUtils$$.$each2$($data$$63_highlightableChoices$$, function($i$$153$$, $elm$$3$$) {
      if($self$$44$$.$getVal$() && $self$$44$$.$getVal$()[0] === $self$$44$$.id($elm$$3$$.data($self$$44$$.$_elemNm$))) {
        return $selected$$3$$ = $i$$153$$, !1
      }
    });
    !1 !== $noHighlightUpdate$$ && (!0 === $initial$$1$$ && 0 <= $selected$$3$$ ? this.$_highlight$($selected$$3$$) : this.$_highlight$(0))
  }, $_onSelect$:function($data$$64$$, $old_options$$215$$, $event$$55$$) {
    this.$_triggerSelect$($data$$64$$) && ($old_options$$215$$ = this.$getVal$() ? this.$getVal$()[0] : null, this.$_data$(), this.$_updateSelection$($data$$64$$), this.close(), $old_options$$215$$ !== this.id($data$$64$$) && this.$setVal$(this.id($data$$64$$), $event$$55$$))
  }, val:function() {
    var $val$$28$$, $data$$65$$ = null, $self$$45$$ = this;
    this.$_data$();
    if(0 === arguments.length) {
      return this.$getVal$()
    }
    $val$$28$$ = arguments[0];
    if(this.$datalist$) {
      var $selected$$4$$;
      $selected$$4$$ = this.$datalist$.val($val$$28$$).find("option").filter($JSCompiler_get$$("selected"));
      $_ComboUtils$$.$each2$($selected$$4$$, function($i$$154$$, $elm$$4$$) {
        $data$$65$$ = $self$$45$$.$_optionToData$($elm$$4$$);
        return!1
      });
      this.$setVal$($val$$28$$);
      this.$_updateSelection$($data$$65$$);
      this.$_setPlaceholder$()
    }else {
      if($val$$28$$ || 0 === $val$$28$$) {
        if(void 0 === this.$opts$.$initSelection$) {
          throw Error("cannot call val() if initSelection() is not defined");
        }
        this.$setVal$($val$$28$$);
        this.$opts$.$initSelection$(this.$opts$.element, function($data$$66$$) {
          $self$$45$$.$setVal$($data$$66$$ ? $self$$45$$.id($data$$66$$) : []);
          $self$$45$$.$_updateSelection$($data$$66$$);
          $self$$45$$.$_setPlaceholder$()
        })
      }else {
        this.$_clear$()
      }
    }
  }, $_clearSearch$:function() {
    this.search.val("")
  }, $_data$:function($value$$149$$) {
    var $data$$67$$;
    if(0 === arguments.length) {
      return $data$$67$$ = this.selection.data(this.$_elemNm$), void 0 === $data$$67$$ && ($data$$67$$ = null), $data$$67$$
    }
    $value$$149$$ ? (this.$_data$(), this.$setVal$($value$$149$$ ? this.id($value$$149$$) : []), this.$_updateSelection$($value$$149$$)) : this.$_clear$()
  }}), $_OjSingleCombobox$$ = $_ComboUtils$$.$clazz$($_AbstractSingleChoice$$, {$_elemNm$:"ojcombobox", $_classNm$:"oj-combobox", $_createContainer$:function() {
    return $$$$9$$(document.createElement("div")).attr({"class":"oj-combobox oj-component"}).html("\x3cdiv class\x3d'oj-combobox-choice' tabindex\x3d'-1' role\x3d'presentation'\x3e   \x3cspan class\x3d'oj-combobox-search'\x3e\x3cinput type\x3d'text' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off'       spellcheck\x3d'false' class\x3d'oj-combobox-input' role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' /\x3e   \x3c/span\x3e\x3cabbr class\x3d'oj-combobox-search-choice-close' role\x3d'presentation'\x3e\x3c/abbr\x3e   \x3ca class\x3d'oj-combobox-arrow' role\x3d'presentation'\x3e\x3cb class\x3d'oj-combobox-icon oj-component-icon oj-clickable-icon oj-combobox-open-icon' role\x3d'presentation'\x3e\x3c/b\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'oj-listbox-drop oj-combobox-display-none' role\x3d'presentation'\x3e   \x3cul class\x3d'oj-listbox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e")
  }, close:function() {
    this.$_opened$() && ($_OjSingleCombobox$$.$superclass$.close.apply(this, arguments), "" == this.search.val() ? this.$_clear$() : this.$_data$() || "" === this.search.val ? this.search.val(this.$_data$().text) : this.$_clearSearch$())
  }, $_opening$:function($event$$56$$) {
    var $el$$7_range$$19$$, $len$$7$$;
    $_OjSingleCombobox$$.$superclass$.$_opening$.apply(this, arguments);
    $el$$7_range$$19$$ = this.search.get(0);
    $el$$7_range$$19$$.createTextRange ? ($el$$7_range$$19$$ = $el$$7_range$$19$$.createTextRange(), $el$$7_range$$19$$.collapse(!1), $el$$7_range$$19$$.select()) : $el$$7_range$$19$$.setSelectionRange && ($len$$7$$ = this.search.val().length, $el$$7_range$$19$$.setSelectionRange($len$$7$$, $len$$7$$));
    this.$_updateResults$(!0);
    this.$opts$.element.trigger($$$$9$$.Event("ojexpand"))
  }, $_updateSelection$:function($data$$68$$) {
    var $formatted$$1$$;
    this.selection.data(this.$_elemNm$, $data$$68$$);
    null !== $data$$68$$ && ($formatted$$1$$ = this.$opts$.$formatSelection$($data$$68$$, this.search, this.$opts$.$escapeMarkup$));
    void 0 !== $formatted$$1$$ && this.search.val($formatted$$1$$);
    this.search.removeClass(this.$_classNm$ + "-default");
    this.$opts$.$allowClear$ && this.$container$.addClass(this.$_classNm$ + "-allowclear")
  }}), $_OjSingleSelect$$ = $_ComboUtils$$.$clazz$($_AbstractSingleChoice$$, {$_elemNm$:"ojselect", $_classNm$:"oj-select", $_userTyping$:!1, $_createContainer$:function() {
    var $container$$8$$ = $$$$9$$(document.createElement("div")).attr({"class":"oj-select oj-component"}).html("\x3cdiv class\x3d'oj-select-choice' tabindex\x3d'0' role\x3d'combobox'      aria-autocomplete\x3d'none' aria-expanded\x3d'false' aria-ready\x3d'true'\x3e  \x3cspan class\x3d'oj-select-box'\x3e    \x3cspan class\x3d'oj-select-chosen'\x3e\x3c/span\x3e    \x3cabbr class\x3d'oj-select-search-choice-close' role\x3d'presentation'\x3e\x3c/abbr\x3e    \x3ca class\x3d'oj-component-icon oj-clickable-icon oj-select-open-icon' role\x3d'presentation'\x3e    \x3cb role\x3d'presentation'\x3e\x3c/b\x3e\x3c/a\x3e  \x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d'oj-listbox-drop oj-select-display-none' role\x3d'presentation'\x3e  \x3cdiv class\x3d'oj-select-search-wrapper'\x3e  \x3cdiv class\x3d'oj-select-search'\x3e    \x3cinput type\x3d'text' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off'           spellcheck\x3d'false' class\x3d'oj-select-input' title\x3d'Search field'            role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' /\x3e    \x3cspan class\x3d'oj-select-spyglass-box'\x3e      \x3cspan class\x3d'oj-component-icon oj-select-search-icon' role\x3d'presentation'\x3e       \x3cb role\x3d'presentation'\x3e\x3c/b\x3e\x3c/span\x3e    \x3c/span\x3e  \x3c/div\x3e  \x3c/div\x3e   \x3cul class\x3d'oj-listbox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e");
    this.$opts$.element.prop("disabled") && ($container$$8$$.find(".oj-select-choice").attr("tabindex", "-1"), $container$$8$$.find(".oj-select-open-icon").addClass("oj-disabled"));
    return $container$$8$$
  }, close:function() {
    this.$_opened$() && ($_OjSingleSelect$$.$superclass$.close.apply(this, arguments), "" == this.text.text() ? this.$_clear$() : this.$_clearSearch$(), $_ComboUtils$$.$_focus$(this.selection), this.$container$.find(".oj-select-spyglass-box").off("mouseup click"))
  }, $_opening$:function($event$$57$$) {
    var $el$$8_range$$20$$, $len$$8$$;
    $_OjSingleSelect$$.$superclass$.$_opening$.apply(this, arguments);
    this.$_showSearchBox$();
    this.$_hasSearchBox$() && ($el$$8_range$$20$$ = this.search.get(0), $el$$8_range$$20$$.createTextRange ? ($el$$8_range$$20$$ = $el$$8_range$$20$$.createTextRange(), $el$$8_range$$20$$.collapse(!1), $el$$8_range$$20$$.select()) : $el$$8_range$$20$$.setSelectionRange && ($len$$8$$ = this.search.val().length, $el$$8_range$$20$$.setSelectionRange($len$$8$$, $len$$8$$)));
    this.$_updateResults$(!0);
    this.$opts$.element.trigger($$$$9$$.Event("ojexpand"))
  }, $_initContainer$:function() {
    this.text = this.$container$.find(".oj-select-chosen");
    $_OjSingleSelect$$.$superclass$.$_initContainer$.apply(this, arguments);
    this.$container$.find(".oj-select-choice").attr("aria-owns", this.search.attr("aria-owns")).attr("aria-labelledby", this.search.attr("aria-labelledby"));
    this.selection.on("keydown", this.$_bind$(this.$_containerKeydownHandler$));
    this.selection.on("keyup-change input", this.$_bind$(this.$_containerKeyupHandler$))
  }, $_initSelection$:function() {
    this.$_isPlaceholderOptionSelected$() ? (this.$_updateSelection$(null), this.close(), this.$_setPlaceholder$()) : $_OjSingleSelect$$.$superclass$.$_initSelection$.apply(this, arguments)
  }, $_updateSelection$:function($data$$69$$) {
    this.selection.data(this.$_elemNm$, $data$$69$$);
    null !== $data$$69$$ && this.text.text($data$$69$$.text);
    this.text.removeClass(this.$_classNm$ + "-default");
    this.$opts$.$allowClear$ && this.$container$.addClass(this.$_classNm$ + "-allowclear")
  }, $_getActiveContainer$:function() {
    return this.search.attr("aria-expanded") && this.$_hasSearchBox$() ? this.search : this.selection
  }, $_getPlaceholderOption$:function() {
    var $firstOption$$ = this.$opts$.element.children("option").first();
    if("" === $firstOption$$.text() && "" === $firstOption$$.val()) {
      return $firstOption$$
    }
  }, $_isPlaceholderOptionSelected$:function() {
    var $placeholderOption$$1$$;
    if(!this.$_getPlaceholder$()) {
      return!1
    }
    var $cval$$ = this.$getVal$();
    return void 0 !== ($placeholderOption$$1$$ = this.$_getPlaceholderOption$()) && $placeholderOption$$1$$.prop("selected") || "" === $cval$$ || void 0 === $cval$$ || null === $cval$$
  }, $_getPlaceholder$:function() {
    return void 0 === this.$_getPlaceholderOption$() ? void 0 : $_OjSingleSelect$$.$superclass$.$_getPlaceholder$.apply(this, arguments)
  }, $_setPlaceholder$:function() {
    var $placeholder$$1$$ = this.$_getPlaceholder$();
    this.$_isPlaceholderOptionSelected$() && void 0 !== $placeholder$$1$$ && void 0 !== this.$_getPlaceholderOption$() && (void 0 === $placeholder$$1$$ && ($placeholder$$1$$ = ""), this.text.text($placeholder$$1$$).addClass(this.$_classNm$ + "-default"), this.$container$.removeClass(this.$_classNm$ + "-allowclear"))
  }, $_clearPlaceholder$:function() {
    this.text.hasClass(this.$_classNm$ + "-default") && this.text.val("").removeClass(this.$_classNm$ + "-default")
  }, $setVal$:function($val$$29$$, $event$$58$$) {
    $_OjSingleSelect$$.$superclass$.$setVal$.call(this, $val$$29$$, $event$$58$$);
    this.selection.data("selectVal", $val$$29$$)
  }, $_containerKeydownHandler$:function($e$$57$$) {
    if(!$_ComboUtils$$.$KEY$.$isControl$($e$$57$$) && !$_ComboUtils$$.$KEY$.$isFunctionKey$($e$$57$$)) {
      switch($e$$57$$.which) {
        case $_ComboUtils$$.$KEY$.TAB:
          this.$_selectHighlighted$({$noFocus$:!0}, $e$$57$$);
          this.selection.focus();
          return;
        case $_ComboUtils$$.$KEY$.ENTER:
          if($e$$57$$.target === this.selection[0] && !this.$_opened$()) {
            this.open();
            $_ComboUtils$$.$killEvent$($e$$57$$);
            return
          }
      }
      $_OjSingleSelect$$.$superclass$.$_containerKeydownHandler$.apply(this, arguments)
    }
  }, $_showSearchBox$:function() {
    var $focusOnSearchBox$$ = !1, $searchBox$$ = this.$dropdown$.find(".oj-select-search");
    $searchBox$$ && (this.$_hasSearchBox$() ? (this.$dropdown$.find(".oj-select-search-wrapper").removeClass("oj-helper-hidden-accessible"), $$$$9$$($searchBox$$).removeAttr("aria-hidden"), $focusOnSearchBox$$ = !0) : (this.$dropdown$.find(".oj-select-search-wrapper").addClass("oj-helper-hidden-accessible"), $$$$9$$($searchBox$$).attr({"aria-hidden":"true"})));
    $_ComboUtils$$.$_focus$($focusOnSearchBox$$ ? this.search : this.selection);
    if($focusOnSearchBox$$) {
      var $self$$46$$ = this;
      $searchBox$$.find(".oj-select-spyglass-box").on("mouseup click", function($e$$58$$) {
        $self$$46$$.search.focus();
        $e$$58$$.stopPropagation()
      })
    }
  }, $_hasSearchBox$:function() {
    return(this.$datalist$ ? this.$datalist$[0].length : this.$opts$.data.length) > this.$opts$.minimumResultsForSearch || this.$_userTyping$
  }});
  $oj$$9$$.$__registerWidget$("oj.ojCombobox", $$$$9$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{placeholder:"", multiple:!1, data:null, expand:null}, widget:function() {
    return this.$combobox$.$container$
  }, $_ComponentCreate$:function() {
    this._super();
    this.$_setup$()
  }, $_setup$:function() {
    var $opts$$15$$, $multiple$$ = this.options.multiple;
    $opts$$15$$ = {};
    $opts$$15$$.element = this.element;
    $opts$$15$$.$ojContext$ = this;
    $opts$$15$$ = $$$$9$$.extend(this.options, $opts$$15$$);
    this.$combobox$ = $multiple$$ ? new $_OjMultiCombobox$$ : new $_OjSingleCombobox$$;
    this.$combobox$._init($opts$$15$$)
  }, _destroy:function() {
    this.$combobox$._destroy()
  }, refresh:function() {
    this._super();
    this.$combobox$._destroy();
    this.$_setup$()
  }, expand:function($event$$59$$) {
    this.$combobox$.open();
    this._trigger("ojexpand", $event$$59$$)
  }, collapse:function() {
    this.$combobox$.close()
  }, _setOption:function($key$$64$$, $value$$150$$) {
    this._super($key$$64$$, $value$$150$$);
    "disabled" === $key$$64$$ ? $value$$150$$ ? this.$combobox$.$_disable$() : this.$combobox$.$_enable$() : "value" === $key$$64$$ && this.$combobox$.$_initSelection$()
  }, _GetMessagingLauncherElement:function() {
    return this.$combobox$.$container$
  }, _GetDefaultStyleClass:$JSCompiler_returnArg$$("oj-combobox"), getNodeBySubId:function($locator$$5_subId$$2$$) {
    if(null == $locator$$5_subId$$2$$) {
      return this.$combobox$.$container$ ? this.$combobox$.$container$[0] : null
    }
    $locator$$5_subId$$2$$ = $locator$$5_subId$$2$$.subId;
    "oj-combobox-drop" == $locator$$5_subId$$2$$ && ($locator$$5_subId$$2$$ = "oj-listbox-drop");
    "oj-combobox-results" == $locator$$5_subId$$2$$ && ($locator$$5_subId$$2$$ = "oj-listbox-results");
    switch($locator$$5_subId$$2$$) {
      case "oj-combobox-input":
      ;
      case "oj-combobox-arrow":
      ;
      case "oj-listbox-drop":
      ;
      case "oj-listbox-results":
        return this.widget().find($locator$$5_subId$$2$$)[0]
    }
    return null
  }});
  $oj$$9$$.$__registerWidget$("oj.ojSelect", $$$$9$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cselect\x3e", widgetEventPrefix:"oj", options:{minimumResultsForSearch:10, placeholder:"", data:null, expand:null}, widget:function() {
    return this.select.$container$
  }, $_ComponentCreate$:function() {
    this._super();
    this.$_setup$()
  }, $_setup$:function() {
    var $opts$$16$$ = {};
    $opts$$16$$.element = this.element;
    $opts$$16$$.$ojContext$ = this;
    $opts$$16$$ = $$$$9$$.extend(this.options, $opts$$16$$);
    this.select = new $_OjSingleSelect$$;
    this.select._init($opts$$16$$)
  }, refresh:function() {
    this._super();
    this.select._destroy();
    this.$_setup$()
  }, _destroy:function() {
    this.select._destroy()
  }, expand:function() {
    this.select.open()
  }, collapse:function() {
    this.select.close()
  }, _SetPlaceholder:function($value$$151$$) {
    this._super($value$$151$$);
    this.select.$opts$.placeholder = $value$$151$$;
    this.select.$_setPlaceholder$()
  }, _setOption:function($key$$65$$, $value$$152$$) {
    this._super($key$$65$$, $value$$152$$);
    "disabled" === $key$$65$$ ? $value$$152$$ ? this.select.$_disable$() : this.select.$_enable$() : "data" === $key$$65$$ ? this.$_setup$() : "value" === $key$$65$$ && this.select.$_initSelection$()
  }, getNodeBySubId:function($locator$$6_subId$$3$$) {
    if(null == $locator$$6_subId$$3$$) {
      return this.select.$container$ ? this.select.$container$[0] : null
    }
    $locator$$6_subId$$3$$ = $locator$$6_subId$$3$$.subId;
    "oj-select-drop" == $locator$$6_subId$$3$$ && ($locator$$6_subId$$3$$ = "oj-listbox-drop");
    "oj-select-results" == $locator$$6_subId$$3$$ && ($locator$$6_subId$$3$$ = "oj-listbox-results");
    switch($locator$$6_subId$$3$$) {
      case "oj-select-chosen":
      ;
      case "oj-select-search":
      ;
      case "oj-listbox-drop":
      ;
      case "oj-listbox-results":
        return this.widget().find("." + $locator$$6_subId$$3$$)[0]
    }
    return null
  }, _GetDefaultStyleClass:$JSCompiler_returnArg$$("oj-select"), _GetMessagingLauncherElement:function() {
    return this.select.$container$
  }});
  var $_OjMultiCombobox$$ = $_ComboUtils$$.$clazz$($_AbstractOjChoice$$, {$_elemNm$:"ojcombobox", $_classNm$:"oj-combobox", $_createContainer$:function() {
    return $$$$9$$(document.createElement("div")).attr({"class":"oj-combobox oj-combobox-multi oj-component"}).html("\x3cul class\x3d'oj-combobox-choices'\x3e  \x3cli class\x3d'oj-combobox-search-field'\x3e    \x3cinput type\x3d'text' role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off' spellcheck\x3d'false' class\x3d'oj-combobox-input'\x3e  \x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d'oj-combobox-description oj-helper-hidden-accessible'/\x3e\x3cdiv class\x3d'oj-listbox-drop oj-listbox-drop-multi oj-combobox-display-none'\x3e   \x3cul class\x3d'oj-listbox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e")
  }, $_prepareOpts$:function() {
    var $opts$$17$$ = $_OjMultiCombobox$$.$superclass$.$_prepareOpts$.apply(this, arguments), $self$$47$$ = this;
    "input" === $opts$$17$$.element.get(0).tagName.toLowerCase() && $opts$$17$$.element.prop("list") ? $opts$$17$$.$initSelection$ = function $$opts$$17$$$$initSelection$$($element$$44$$, $callback$$85$$) {
      var $data$$70$$ = [];
      if($opts$$17$$.element.val()) {
        for(var $selected$$5$$, $ids$$ = $_ComboUtils$$.$splitVal$($opts$$17$$.element.val(), $opts$$17$$.separator), $i$$155$$ = 0;$i$$155$$ < $ids$$.length;$i$$155$$++) {
          var $id$$14$$ = $ids$$[$i$$155$$];
          $selected$$5$$ = $element$$44$$.find("option").filter(function() {
            return this.value === $id$$14$$
          });
          $data$$70$$.push($self$$47$$.$_optionToData$($selected$$5$$))
        }
      }else {
        $selected$$5$$ = $element$$44$$.find("option").filter($JSCompiler_get$$("selected")), $_ComboUtils$$.$each2$($selected$$5$$, function($i$$156$$, $elm$$5$$) {
          $data$$70$$.push($self$$47$$.$_optionToData$($elm$$5$$))
        })
      }
      $callback$$85$$($data$$70$$)
    } : "data" in $opts$$17$$ && ($opts$$17$$.$initSelection$ = $opts$$17$$.$initSelection$ || function($element$$45$$, $callback$$86$$) {
      var $ids$$1$$ = $_ComboUtils$$.$splitVal$($element$$45$$.val(), $opts$$17$$.separator), $matches$$2$$ = [];
      $opts$$17$$.$query$({$matcher$:function($is_match$$1_term$$5$$, $text$$10$$, $el$$9$$) {
        ($is_match$$1_term$$5$$ = $$$$9$$.grep($ids$$1$$, function($id$$15$$) {
          return $id$$15$$ === $opts$$17$$.id($el$$9$$)
        }).length) && $matches$$2$$.push($el$$9$$);
        return $is_match$$1_term$$5$$
      }, $callback$:$$$$9$$.isFunction($callback$$86$$) ? function() {
        for(var $ordered$$ = [], $i$$157$$ = 0;$i$$157$$ < $ids$$1$$.length;$i$$157$$++) {
          for(var $id$$16$$ = $ids$$1$$[$i$$157$$], $j$$19$$ = 0;$j$$19$$ < $matches$$2$$.length;$j$$19$$++) {
            var $match$$15$$ = $matches$$2$$[$j$$19$$];
            if($id$$16$$ === $opts$$17$$.id($match$$15$$)) {
              $ordered$$.push($match$$15$$);
              $matches$$2$$.splice($j$$19$$, 1);
              break
            }
          }
        }
        $callback$$86$$($ordered$$)
      } : $$$$9$$.noop})
    });
    return $opts$$17$$
  }, $_selectChoice$:function($choice$$2$$) {
    var $selected$$6$$ = this.$container$.find("." + this.$_classNm$ + "-search-choice-focus");
    $selected$$6$$.length && $choice$$2$$ && $choice$$2$$[0] == $selected$$6$$[0] || ($selected$$6$$.length && this.$opts$.element.trigger("choice-deselected", $selected$$6$$), $selected$$6$$.removeClass(this.$_classNm$ + "-search-choice-focus"), $choice$$2$$ && $choice$$2$$.length && (this.close(), $choice$$2$$.addClass(this.$_classNm$ + "-search-choice-focus"), this.$container$.find(".oj-combobox-description").html($choice$$2$$.attr("valueText") + ". Press back space to delete.").attr("aria-live", 
    "assertive"), this.$opts$.element.trigger("choice-selected", $choice$$2$$)))
  }, _destroy:function() {
    $$$$9$$("label[for\x3d'" + this.search.attr("id") + "']").attr("for", this.$opts$.element.attr("id"));
    $_OjMultiCombobox$$.$superclass$._destroy.apply(this, arguments)
  }, $_initContainer$:function() {
    var $selector$$14$$ = "." + this.$_classNm$ + "-choices", $selection$$1$$, $idSuffix$$1$$ = $_ComboUtils$$.$nextUid$(), $elementLabel$$1$$;
    this.$searchContainer$ = this.$container$.find("." + this.$_classNm$ + "-search-field");
    this.selection = $selection$$1$$ = this.$container$.find($selector$$14$$);
    var $_this$$ = this;
    this.selection.on("click", "." + this.$_classNm$ + "-search-choice:not(." + this.$_classNm$ + "-locked)", function() {
      $_this$$.search[0].focus();
      $_this$$.$_selectChoice$($$$$9$$(this))
    });
    $elementLabel$$1$$ = $$$$9$$("label[for\x3d'" + this.$opts$.element.attr("id") + "']");
    $elementLabel$$1$$.attr("id") || $elementLabel$$1$$.attr("id", this.$_classNm$ + "-label-" + $idSuffix$$1$$);
    this.$results$.attr("id", "oj-listbox-results-" + $idSuffix$$1$$);
    this.search.attr("aria-owns", "oj-listbox-results-" + $idSuffix$$1$$);
    this.search.attr("aria-labelledby", $elementLabel$$1$$.attr("id"));
    this.search.on("input paste", this.$_bind$(function() {
      this.$_isInterfaceEnabled$() && !this.$_opened$() && this.open()
    }));
    this.search.attr("tabindex", this.$elementTabIndex$);
    this.$keydowns$ = 0;
    this.search.on("keydown", this.$_bind$(function($e$$60$$) {
      if(this.$_isInterfaceEnabled$()) {
        ++this.$keydowns$;
        var $selected$$7$$ = $selection$$1$$.find("." + this.$_classNm$ + "-search-choice-focus"), $prev$$ = $selected$$7$$.prev("." + this.$_classNm$ + "-search-choice:not(." + this.$_classNm$ + "-locked)"), $next$$ = $selected$$7$$.next("." + this.$_classNm$ + "-search-choice:not(." + this.$_classNm$ + "-locked)"), $pos$$6_selectedChoice$$ = $_ComboUtils$$.$getCursorInfo$(this.search);
        if(!$selected$$7$$.length || $e$$60$$.which != $_ComboUtils$$.$KEY$.LEFT && $e$$60$$.which != $_ComboUtils$$.$KEY$.RIGHT && $e$$60$$.which != $_ComboUtils$$.$KEY$.$BACKSPACE$ && $e$$60$$.which != $_ComboUtils$$.$KEY$.$DELETE$ && $e$$60$$.which != $_ComboUtils$$.$KEY$.ENTER) {
          if(($e$$60$$.which !== $_ComboUtils$$.$KEY$.$BACKSPACE$ || 1 != this.$keydowns$) && $e$$60$$.which != $_ComboUtils$$.$KEY$.LEFT || 0 != $pos$$6_selectedChoice$$.offset || $pos$$6_selectedChoice$$.length) {
            this.$_selectChoice$(null);
            if(this.$_opened$()) {
              switch($e$$60$$.which) {
                case $_ComboUtils$$.$KEY$.UP:
                ;
                case $_ComboUtils$$.$KEY$.DOWN:
                  this.$_moveHighlight$($e$$60$$.which === $_ComboUtils$$.$KEY$.UP ? -1 : 1);
                  $_ComboUtils$$.$killEvent$($e$$60$$);
                  return;
                case $_ComboUtils$$.$KEY$.ENTER:
                  this.$_selectHighlighted$();
                  $_ComboUtils$$.$killEvent$($e$$60$$);
                  return;
                case $_ComboUtils$$.$KEY$.TAB:
                  this.$_selectHighlighted$({$noFocus$:!0});
                  this.close();
                  return;
                case $_ComboUtils$$.$KEY$.$ESC$:
                  this.$_cancel$($e$$60$$);
                  $_ComboUtils$$.$killEvent$($e$$60$$);
                  return
              }
            }
            $e$$60$$.which === $_ComboUtils$$.$KEY$.TAB || ($_ComboUtils$$.$KEY$.$isControl$($e$$60$$) || $_ComboUtils$$.$KEY$.$isFunctionKey$($e$$60$$) || $e$$60$$.which === $_ComboUtils$$.$KEY$.$BACKSPACE$ || $e$$60$$.which === $_ComboUtils$$.$KEY$.$ESC$) || $e$$60$$.which === $_ComboUtils$$.$KEY$.ENTER && (!1 === this.$opts$.$openOnEnter$ || $e$$60$$.altKey || $e$$60$$.ctrlKey || $e$$60$$.shiftKey || $e$$60$$.metaKey) || (this.open(), $e$$60$$.which !== $_ComboUtils$$.$KEY$.PAGE_UP && $e$$60$$.which !== 
            $_ComboUtils$$.$KEY$.PAGE_DOWN || $_ComboUtils$$.$killEvent$($e$$60$$), $e$$60$$.which === $_ComboUtils$$.$KEY$.ENTER && $_ComboUtils$$.$killEvent$($e$$60$$))
          }else {
            this.$_selectChoice$($selection$$1$$.find("." + this.$_classNm$ + "-search-choice:not(." + this.$_classNm$ + "-locked)").last()), $_ComboUtils$$.$killEvent$($e$$60$$)
          }
        }else {
          $pos$$6_selectedChoice$$ = $selected$$7$$, $e$$60$$.which == $_ComboUtils$$.$KEY$.LEFT && $prev$$.length ? $pos$$6_selectedChoice$$ = $prev$$ : $e$$60$$.which == $_ComboUtils$$.$KEY$.RIGHT ? $pos$$6_selectedChoice$$ = $next$$.length ? $next$$ : null : $e$$60$$.which === $_ComboUtils$$.$KEY$.$BACKSPACE$ ? (this.$_unselect$($selected$$7$$.first()), this.search.width(10), $pos$$6_selectedChoice$$ = $prev$$.length ? $prev$$ : $next$$) : $e$$60$$.which == $_ComboUtils$$.$KEY$.$DELETE$ ? (this.$_unselect$($selected$$7$$.first()), 
          this.search.width(10), $pos$$6_selectedChoice$$ = $next$$.length ? $next$$ : null) : $e$$60$$.which == $_ComboUtils$$.$KEY$.ENTER && ($pos$$6_selectedChoice$$ = null), this.$_selectChoice$($pos$$6_selectedChoice$$), $_ComboUtils$$.$killEvent$($e$$60$$), $pos$$6_selectedChoice$$ && $pos$$6_selectedChoice$$.length || this.open()
        }
      }
    }));
    this.search.on("keyup", this.$_bind$(function() {
      this.$keydowns$ = 0;
      this.$_resizeSearch$()
    }));
    this.search.on("blur", this.$_bind$(function($e$$62$$) {
      this.search.removeClass(this.$_classNm$ + "-focused");
      this.$_selectChoice$(null);
      this.$_opened$() || this.$_clearSearch$();
      $e$$62$$.stopImmediatePropagation()
    }));
    this.$container$.on("click", $selector$$14$$, this.$_bind$(function($e$$63$$) {
      !this.$_isInterfaceEnabled$() || 0 < $$$$9$$($e$$63$$.target).closest("." + this.$_classNm$ + "-search-choice").length || (this.$_selectChoice$(null), this.$_clearPlaceholder$(), this.open(), this.$_focusSearch$(), $e$$63$$.preventDefault())
    }));
    this.$container$.on("focus", $selector$$14$$, this.$_bind$(function() {
      this.$_isInterfaceEnabled$() && this.$_clearPlaceholder$()
    }));
    this.$_initContainerWidth$();
    this.$opts$.element.addClass(this.$_classNm$ + "-offscreen");
    this.$_clearSearch$()
  }, $_enableInterface$:function() {
    $_OjMultiCombobox$$.$superclass$.$_enableInterface$.apply(this, arguments) && this.search.prop("disabled", !this.$_isInterfaceEnabled$())
  }, $_initSelection$:function() {
    "" === this.$opts$.element.val() && "" === this.$opts$.element.text() && (this.$_updateSelection$([]), this.close(), this.$_clearSearch$());
    if(this.$datalist$ || "" !== this.$opts$.element.val()) {
      var $self$$48$$ = this;
      this.$opts$.$initSelection$.call(null, this.$datalist$ ? this.$datalist$ : this.$opts$.element, function($data$$72$$) {
        void 0 !== $data$$72$$ && null !== $data$$72$$ && ($self$$48$$.$_updateSelection$($data$$72$$), $self$$48$$.close(), $self$$48$$.$_clearSearch$())
      })
    }
  }, $_clearSearch$:function() {
    var $placeholder$$2$$ = this.$_getPlaceholder$(), $maxWidth$$ = this.$_getMaxSearchWidth$();
    void 0 === $placeholder$$2$$ || this.$getVal$() && 0 !== this.$getVal$().length ? this.search.val("").width(10) : (this.search.val($placeholder$$2$$).addClass(this.$_classNm$ + "-default"), this.search.width(0 < $maxWidth$$ ? $maxWidth$$ : this.$container$.css("width")))
  }, $_clearPlaceholder$:function() {
    this.search.hasClass(this.$_classNm$ + "-default") && this.search.val("").removeClass(this.$_classNm$ + "-default")
  }, $_opening$:function($event$$60$$) {
    this.$_resizeSearch$();
    $_OjMultiCombobox$$.$superclass$.$_opening$.apply(this, arguments);
    this.$_focusSearch$();
    this.$_updateResults$(!0);
    this.search.focus();
    this.$opts$.element.trigger($$$$9$$.Event("ojexpand"))
  }, close:function() {
    this.$_opened$() && (this.$_clearSearch$(), $_OjMultiCombobox$$.$superclass$.close.apply(this, arguments))
  }, $_focus$:function() {
    this.close();
    this.search.focus()
  }, $_updateSelection$:function($data$$73$$) {
    var $ids$$2$$ = [], $filtered$$1$$ = [], $self$$49$$ = this;
    $$$$9$$($data$$73$$).each(function() {
      0 > $ids$$2$$.indexOf($self$$49$$.id(this)) && ($ids$$2$$.push($self$$49$$.id(this)), $filtered$$1$$.push(this))
    });
    $data$$73$$ = $filtered$$1$$;
    this.selection.find("." + this.$_classNm$ + "-search-choice").remove();
    $$$$9$$($data$$73$$).each(function() {
      $self$$49$$.$_addSelectedChoice$(this)
    });
    $self$$49$$.$_postprocessResults$()
  }, $_onSelect$:function($data$$74$$, $options$$216$$) {
    this.$_triggerSelect$($data$$74$$) && (this.$_addSelectedChoice$($data$$74$$), !this.select && this.$opts$.$closeOnSelect$ || this.$_postprocessResults$($data$$74$$, !1, !0 === this.$opts$.$closeOnSelect$), this.$opts$.$closeOnSelect$ ? (this.close(), this.search.width(10)) : 0 < this.$_findHighlightableChoices$().length ? (this.$_clearSearch$(), this.search.width(10), this.$_resizeSearch$(), this.$_positionDropdown$()) : (this.close(), this.search.width(10)), this.$_triggerChange$(), $options$$216$$ && 
    $options$$216$$.$noFocus$ || this.$_focusSearch$())
  }, $_cancel$:function() {
    this.close();
    this.$_focusSearch$()
  }, $_addSelectedChoice$:function($data$$75$$) {
    var $enableChoice$$ = !$data$$75$$.locked, $choice$$3_enabledItem$$ = $$$$9$$("\x3cli class\x3d'" + this.$_classNm$ + "-search-choice'\x3e    \x3cdiv\x3e\x3c/div\x3e    \x3ca href\x3d'#' onclick\x3d'return false;' class\x3d'" + this.$_classNm$ + "-search-choice-close' tabindex\x3d'-1'\x3e\x3c/a\x3e\x3c/li\x3e"), $disabledItem_formatted$$3$$ = $$$$9$$("\x3cli class\x3d'" + this.$_classNm$ + "-search-choice " + this.$_classNm$ + "-locked'\x3e\x3cdiv\x3e\x3c/div\x3e\x3c/li\x3e"), $choice$$3_enabledItem$$ = 
    $enableChoice$$ ? $choice$$3_enabledItem$$ : $disabledItem_formatted$$3$$, $id$$17$$ = this.id($data$$75$$), $val$$30$$ = this.$getVal$(), $disabledItem_formatted$$3$$ = this.$opts$.$formatSelection$($data$$75$$, $choice$$3_enabledItem$$.find("div"), this.$opts$.$escapeMarkup$);
    void 0 !== $disabledItem_formatted$$3$$ && ($choice$$3_enabledItem$$.find("div").replaceWith("\x3cdiv\x3e" + $disabledItem_formatted$$3$$ + "\x3c/div\x3e"), $choice$$3_enabledItem$$.attr("valueText", $disabledItem_formatted$$3$$));
    if($enableChoice$$) {
      $choice$$3_enabledItem$$.find("." + this.$_classNm$ + "-search-choice-close").on("mousedown", $_ComboUtils$$.$killEvent$).on("click dblclick", this.$_bind$(function($e$$64$$) {
        this.$_isInterfaceEnabled$() && ($$$$9$$($e$$64$$.target).closest("." + this.$_classNm$ + "-search-choice").fadeOut("fast", this.$_bind$(function() {
          this.$_unselect$($$$$9$$($e$$64$$.target));
          this.selection.find("." + this.$_classNm$ + "-search-choice-focus").removeClass(this.$_classNm$ + "-search-choice-focus");
          this.close();
          this.$_focusSearch$()
        })).dequeue(), $_ComboUtils$$.$killEvent$($e$$64$$))
      }))
    }
    $choice$$3_enabledItem$$.data(this.$_elemNm$, $data$$75$$);
    $choice$$3_enabledItem$$.insertBefore(this.$searchContainer$);
    $$$$9$$($data$$75$$).each(function() {
      0 > $val$$30$$.indexOf($id$$17$$) && $val$$30$$.push($id$$17$$)
    });
    this.$setVal$($val$$30$$)
  }, $_unselect$:function($selected$$8$$) {
    var $val$$31$$ = this.$getVal$(), $data$$76$$, $index$$129$$;
    $selected$$8$$ = $selected$$8$$.closest("." + this.$_classNm$ + "-search-choice");
    if(0 === $selected$$8$$.length) {
      throw"Invalid argument: " + $selected$$8$$ + ". Must be ." + this.$_classNm$ + "-search-choice";
    }
    if($data$$76$$ = $selected$$8$$.data(this.$_elemNm$)) {
      for(;0 <= ($index$$129$$ = $val$$31$$.indexOf(this.id($data$$76$$)));) {
        $val$$31$$.splice($index$$129$$, 1), this.$setVal$($val$$31$$), this.select && this.$_postprocessResults$()
      }
      $selected$$8$$.remove();
      this.$_triggerChange$()
    }
  }, $_postprocessResults$:function($data$$77$$, $choices$$3_initial$$2$$, $noHighlightUpdate$$1$$) {
    var $val$$32$$ = this.$getVal$();
    $choices$$3_initial$$2$$ = this.$results$.find(".oj-listbox-result");
    var $compound$$ = this.$results$.find(".oj-listbox-result-with-children"), $self$$50$$ = this;
    $_ComboUtils$$.$each2$($choices$$3_initial$$2$$, function($i$$158$$, $choice$$4$$) {
      var $id$$18$$ = $self$$50$$.id($choice$$4$$.data($self$$50$$.$_elemNm$));
      0 <= $val$$32$$.indexOf($id$$18$$) && ($choice$$4$$.addClass("oj-listbox-selected"), $choice$$4$$.find(".oj-listbox-result-selectable").addClass("oj-listbox-selected"))
    });
    $_ComboUtils$$.$each2$($compound$$, function($i$$159$$, $choice$$5$$) {
      $choice$$5$$.is(".oj-listbox-result-selectable") || 0 !== $choice$$5$$.find(".oj-listbox-result-selectable:not(.oj-listbox-selected)").length || $choice$$5$$.addClass("oj-listbox-selected")
    });
    -1 == this.$_highlight$() && !1 !== $noHighlightUpdate$$1$$ && $self$$50$$.$_highlight$(0);
    !this.$opts$.$manageNewEntry$ && 0 < !$choices$$3_initial$$2$$.filter(".oj-listbox-result:not(.oj-listbox-selected)").length && (!$data$$77$$ || $data$$77$$ && !$data$$77$$.$more$ && 0 === this.$results$.find(".oj-listbox-no-results").length) && $_ComboUtils$$.$checkFormatter$($self$$50$$.$ojContext$, $self$$50$$.$opts$.$formatNoMatches$, "formatNoMatches") && this.$results$.append("\x3cli class\x3d'oj-listbox-no-results'\x3e" + $self$$50$$.$opts$.$formatNoMatches$($self$$50$$.$ojContext$, $self$$50$$.search.val()) + 
    "\x3c/li\x3e")
  }, $_getMaxSearchWidth$:function() {
    return this.selection.width() - $_ComboUtils$$.$getSideBorderPadding$(this.search)
  }, $_resizeSearch$:function() {
    var $minimumWidth$$, $left$$5_searchWidth$$, $maxWidth$$1$$, $containerLeft$$, $sideBorderPadding$$ = $_ComboUtils$$.$getSideBorderPadding$(this.search);
    $minimumWidth$$ = this.search.width() + 10;
    $left$$5_searchWidth$$ = this.search.offset().left;
    $maxWidth$$1$$ = this.selection.width();
    $containerLeft$$ = this.selection.offset().left;
    $left$$5_searchWidth$$ = $maxWidth$$1$$ - ($left$$5_searchWidth$$ - $containerLeft$$) - $sideBorderPadding$$;
    $left$$5_searchWidth$$ < $minimumWidth$$ && ($left$$5_searchWidth$$ = $maxWidth$$1$$ - $sideBorderPadding$$);
    40 > $left$$5_searchWidth$$ && ($left$$5_searchWidth$$ = $maxWidth$$1$$ - $sideBorderPadding$$);
    0 >= $left$$5_searchWidth$$ && ($left$$5_searchWidth$$ = $minimumWidth$$);
    this.search.width(Math.floor($left$$5_searchWidth$$))
  }, $getVal$:function() {
    var $val$$33$$;
    $val$$33$$ = this.$opts$.element.val();
    return $_ComboUtils$$.$splitVal$($val$$33$$, this.$opts$.separator)
  }, $setVal$:function($val$$34$$) {
    var $unique$$;
    $unique$$ = [];
    "string" === typeof $val$$34$$ && ($val$$34$$ = $_ComboUtils$$.$splitVal$($val$$34$$, this.$opts$.separator));
    $$$$9$$($val$$34$$).each(function() {
      0 > $unique$$.indexOf(this) && $unique$$.push(this)
    });
    this.$opts$.element.val(0 === $unique$$.length ? "" : $unique$$.join(this.$opts$.separator));
    this.search.attr("aria-activedescendant", this.$opts$.element.attr("id"))
  }, val:function($val$$35$$) {
    var $oldData$$4$$, $self$$51$$ = this;
    if(0 === arguments.length) {
      return this.$getVal$()
    }
    $oldData$$4$$ = this.$_data$();
    $oldData$$4$$.length || ($oldData$$4$$ = []);
    if($val$$35$$ || 0 === $val$$35$$) {
      this.$setVal$($val$$35$$);
      if(this.select) {
        this.$opts$.$initSelection$(this.select, this.$_bind$(this.$_updateSelection$)), this.$_triggerChange$()
      }else {
        if(void 0 === this.$opts$.$initSelection$) {
          throw Error("cannot call val() if initSelection() is not defined");
        }
        this.$opts$.$initSelection$(this.$opts$.element, function($data$$78$$) {
          var $ids$$3$$ = $$$$9$$.map($data$$78$$, $self$$51$$.id);
          $self$$51$$.$setVal$($ids$$3$$);
          $self$$51$$.$_updateSelection$($data$$78$$);
          $self$$51$$.$_clearSearch$();
          $self$$51$$.$_triggerChange$()
        })
      }
      this.$_clearSearch$()
    }else {
      this.$opts$.element.val(null), this.$_updateSelection$([]), this.$_clearSearch$(), this.$_triggerChange$()
    }
  }, $_data$:function($values$$11$$) {
    var $self$$52$$ = this, $ids$$4$$;
    if(0 === arguments.length) {
      return this.selection.find("." + this.$_classNm$ + "-search-choice").map(function() {
        return $$$$9$$(this).data($self$$52$$.$_elemNm$)
      }).get()
    }
    this.$_data$();
    $values$$11$$ || ($values$$11$$ = []);
    $ids$$4$$ = $$$$9$$.map($values$$11$$, function($e$$65$$) {
      return $self$$52$$.$opts$.id($e$$65$$)
    });
    this.$setVal$($ids$$4$$);
    this.$_updateSelection$($values$$11$$);
    this.$_clearSearch$()
  }})
});
