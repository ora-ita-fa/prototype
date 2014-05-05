define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$18$$, $$$$18$$) {
  window.adf || (window.adf = {});
  var $adf$$ = window.adf;
  $adf$$.$shared$ = $adf$$.$shared$ || {};
  $adf$$.$shared$.$impl$ = $adf$$.$shared$.$impl$ || {};
  $adf$$.$shared$.$impl$.$conveyorBelt$ = $adf$$.$shared$.$impl$.$conveyorBelt$ || {};
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$($agentName_elem$$23$$, $orientation$$, $contentParent$$, $bRtl$$, $buttonInfo$$, $callbackInfo$$) {
    this.$_elem$ = $agentName_elem$$23$$;
    this.$_orientation$ = $orientation$$;
    this.$_contentParent$ = $contentParent$$;
    this.$_bRtl$ = $bRtl$$;
    $buttonInfo$$ && ($buttonInfo$$.$prevButtonId$ && (this.$_prevButtonId$ = $buttonInfo$$.$prevButtonId$), $buttonInfo$$.$nextButtonId$ && (this.$_nextButtonId$ = $buttonInfo$$.$nextButtonId$), $buttonInfo$$.$prevButtonStyleClass$ && (this.$_prevButtonStyleClass$ = $buttonInfo$$.$prevButtonStyleClass$), $buttonInfo$$.$nextButtonStyleClass$ && (this.$_nextButtonStyleClass$ = $buttonInfo$$.$nextButtonStyleClass$), $buttonInfo$$.$prevButtonIcon$ && (this.$_prevButtonIcon$ = $buttonInfo$$.$prevButtonIcon$), 
    $buttonInfo$$.$nextButtonIcon$ && (this.$_nextButtonIcon$ = $buttonInfo$$.$nextButtonIcon$));
    $callbackInfo$$ && ($callbackInfo$$.$scrollFunc$ && (this.$_scrollFunc$ = $callbackInfo$$.$scrollFunc$), $callbackInfo$$.$firstVisibleItemChangedFunc$ && (this.$_firstVisibleItemChangedFunc$ = $callbackInfo$$.$firstVisibleItemChangedFunc$), $callbackInfo$$.$callbackObj$ && (this.$_callbackObj$ = $callbackInfo$$.$callbackObj$), $callbackInfo$$.$addResizeListener$ && (this.$_addResizeListenerFunc$ = $callbackInfo$$.$addResizeListener$), $callbackInfo$$.$removeResizeListener$ && (this.$_removeResizeListenerFunc$ = 
    $callbackInfo$$.$removeResizeListener$));
    this.$_bExternalScroll$ = !0;
    this.$_firstVisibleItemIndex$ = 0;
    $agentName_elem$$23$$ = navigator.userAgent.toLowerCase();
    if(-1 !== $agentName_elem$$23$$.indexOf("gecko/")) {
      this.$_bAgentGecko$ = !0
    }else {
      if(-1 !== $agentName_elem$$23$$.indexOf("opera")) {
        this.$_bAgentOpera$ = !0
      }else {
        if(-1 !== $agentName_elem$$23$$.indexOf("applewebkit") || -1 !== $agentName_elem$$23$$.indexOf("safari")) {
          this.$_bAgentWebkit$ = !0
        }
      }
    }
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$setup$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$setup$$($bInit$$) {
    var $self$$76$$ = this, $cbcClass$$ = $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$;
    if($bInit$$) {
      this.$_createInnerContainers$();
      this.$_createPrevButton$(this.$_prevButtonId$, this.$_prevButtonStyleClass$, this.$_prevButtonIcon$);
      this.$_createNextButton$(this.$_nextButtonId$, this.$_nextButtonStyleClass$, this.$_nextButtonIcon$);
      var $nextButton$$ = this.$_nextButton$, $tableCellDivNextButton_vertDivNextButton$$ = this.$_tableCellDivNextButton$;
      $tableCellDivNextButton_vertDivNextButton$$ ? (this.$_buttonWidth$ = $tableCellDivNextButton_vertDivNextButton$$.offsetWidth, this.$_buttonHeight$ = $nextButton$$.offsetHeight) : ($tableCellDivNextButton_vertDivNextButton$$ = this.$_vertDivNextButton$, this.$_buttonWidth$ = $nextButton$$.offsetWidth, this.$_buttonHeight$ = $tableCellDivNextButton_vertDivNextButton$$.offsetHeight);
      this.$_hidePrevButton$();
      this.$_hideNextButton$();
      this.$_mouseWheelListener$ = function $this$$_mouseWheelListener$$($event$$202$$) {
        $self$$76$$.$_handleMouseWheel$($event$$202$$)
      };
      $cbcClass$$.$_addBubbleEventListener$(this.$_elem$, "mousewheel", this.$_mouseWheelListener$);
      $cbcClass$$.$_addBubbleEventListener$(this.$_elem$, "wheel", this.$_mouseWheelListener$);
      this.$_touchStartListener$ = function $this$$_touchStartListener$$($event$$203$$) {
        $self$$76$$.$_handleTouchStart$($event$$203$$)
      };
      $cbcClass$$.$_addBubbleEventListener$(this.$_overflowContainer$, "touchstart", this.$_touchStartListener$);
      this.$_touchMoveListener$ = function $this$$_touchMoveListener$$($event$$204$$) {
        $self$$76$$.$_handleTouchMove$($event$$204$$)
      };
      $cbcClass$$.$_addBubbleEventListener$(this.$_overflowContainer$, "touchmove", this.$_touchMoveListener$);
      this.$_touchEndListener$ = function $this$$_touchEndListener$$() {
        $self$$76$$.$_handleTouchEnd$()
      };
      $cbcClass$$.$_addBubbleEventListener$(this.$_overflowContainer$, "touchend", this.$_touchEndListener$);
      $cbcClass$$.$_addBubbleEventListener$(this.$_overflowContainer$, "touchcancel", this.$_touchEndListener$);
      this.$_origScroll$ = 0
    }else {
      this.$_reinitializeInnerDom$()
    }
    this.$_clearCachedSizes$();
    this.$_adjustOverflowSize$($bInit$$);
    this.$_handleResize$(!0);
    $bInit$$ && this.$_addResizeListenerFunc$ && (this.$_handleResizeFunc$ = function $this$$_handleResizeFunc$$() {
      $self$$76$$.$_handleResize$(!1)
    }, this.$_addResizeListenerFunc$.call(this.$_callbackObj$, this.$_elem$, this.$_handleResizeFunc$), this.$_addResizeListenerFunc$.call(this.$_callbackObj$, this.$_contentContainer$, this.$_handleResizeFunc$))
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.destroy = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$destroy$() {
    var $elem$$24$$ = this.$_elem$, $cbcClass$$1$$ = $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$;
    $cbcClass$$1$$.$_removeBubbleEventListener$($elem$$24$$, "mousewheel", this.$_mouseWheelListener$);
    $cbcClass$$1$$.$_removeBubbleEventListener$($elem$$24$$, "wheel", this.$_mouseWheelListener$);
    $cbcClass$$1$$.$_removeBubbleEventListener$(this.$_overflowContainer$, "touchstart", this.$_touchStartListener$);
    $cbcClass$$1$$.$_removeBubbleEventListener$(this.$_overflowContainer$, "touchmove", this.$_touchMoveListener$);
    $cbcClass$$1$$.$_removeBubbleEventListener$(this.$_overflowContainer$, "touchend", this.$_touchEndListener$);
    $cbcClass$$1$$.$_removeBubbleEventListener$(this.$_overflowContainer$, "touchcancel", this.$_touchEndListener$);
    this.$_touchEndListener$ = this.$_touchMoveListener$ = this.$_touchStartListener$ = this.$_mouseWheelListener$ = null;
    this.$_removeResizeListenerFunc$ && this.$_handleResizeFunc$ && (this.$_removeResizeListenerFunc$.call(this.$_callbackObj$, $elem$$24$$, this.$_handleResizeFunc$), this.$_removeResizeListenerFunc$.call(this.$_callbackObj$, this.$_contentContainer$, this.$_handleResizeFunc$));
    this.$_handleResizeFunc$ = null;
    $cbcClass$$1$$.$_reparentChildrenFromTable$(this.$_contentTableDiv$, $elem$$24$$);
    this.$_arContentElements$ = null;
    this.$_tableDiv$ ? $elem$$24$$.removeChild(this.$_tableDiv$) : ($elem$$24$$.removeChild(this.$_overflowContainer$), $elem$$24$$.removeChild(this.$_vertDivNextButton$), $elem$$24$$.removeChild(this.$_vertDivPrevButton$));
    this.$_vertDivNextButton$ = this.$_vertDivPrevButton$ = this.$_nextButtonWrapper$ = this.$_prevButtonWrapper$ = this.$_tableCellDivNextButton$ = this.$_tableCellDivPrevButton$ = this.$_tableDiv$ = this.$_contentTableDiv$ = this.$_overflowContainer$ = this.$_contentContainer$ = this.$_prevButton$ = this.$_nextButton$ = null;
    this.$_clearCachedSizes$();
    this.$_callbackObj$ = this.$_removeResizeListenerFunc$ = this.$_addResizeListenerFunc$ = this.$_firstVisibleItemChangedFunc$ = this.$_scrollFunc$ = this.$_elem$ = null
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_reparentChildrenToTable$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_reparentChildrenToTable$$($fromNode_fromNodeChildren$$, $toTable$$, $bHoriz$$) {
    var $cbcClass$$2$$ = $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$, $tableRow$$ = null;
    $bHoriz$$ && ($tableRow$$ = $cbcClass$$2$$.$_createTableRowDiv$(), $toTable$$.appendChild($tableRow$$));
    var $arElements$$ = null;
    for($fromNode_fromNodeChildren$$ = $fromNode_fromNodeChildren$$.childNodes;0 < $fromNode_fromNodeChildren$$.length;) {
      $arElements$$ || ($arElements$$ = []);
      var $child$$6$$ = $fromNode_fromNodeChildren$$[0];
      if(1 === $child$$6$$.nodeType) {
        $bHoriz$$ || ($tableRow$$ = $cbcClass$$2$$.$_createTableRowDiv$(), $toTable$$.appendChild($tableRow$$));
        var $tableCell$$ = $cbcClass$$2$$.$_createTableCellDiv$();
        $tableCell$$.appendChild($child$$6$$);
        $tableRow$$.appendChild($tableCell$$);
        $arElements$$.push($child$$6$$)
      }else {
        $bHoriz$$ ? $tableRow$$.appendChild($child$$6$$) : $toTable$$.appendChild($child$$6$$)
      }
    }
    return $arElements$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_reparentChildrenFromTable$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_reparentChildrenFromTable$$($fromTable$$, $toNode$$) {
    if($fromTable$$) {
      for(var $tableRows$$ = $fromTable$$.childNodes;0 < $tableRows$$.length;) {
        var $tableRow$$1$$ = $tableRows$$[0];
        if(1 === $tableRow$$1$$.nodeType) {
          for(var $tableCells$$ = $tableRow$$1$$.childNodes;0 < $tableCells$$.length;) {
            var $tableCell$$1$$ = $tableCells$$[0];
            1 === $tableCell$$1$$.nodeType ? ($toNode$$.appendChild($tableCell$$1$$.firstChild), $tableRow$$1$$.removeChild($tableCell$$1$$)) : $toNode$$.appendChild($tableCell$$1$$)
          }
          $fromTable$$.removeChild($tableRow$$1$$)
        }else {
          $toNode$$.appendChild($tableRow$$1$$)
        }
      }
    }
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_getComputedStyle$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_getComputedStyle$$($elem$$25$$) {
    var $defView$$ = $elem$$25$$.ownerDocument.defaultView, $computedStyle$$ = null;
    return $computedStyle$$ = $defView$$ ? $defView$$.getComputedStyle($elem$$25$$, null) : $elem$$25$$.currentStyle
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_getElemInnerWidth$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_getElemInnerWidth$$($computedStyle$$1_elem$$26$$) {
    var $cbcClass$$3$$ = $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$;
    $computedStyle$$1_elem$$26$$ = $cbcClass$$3$$.$_getComputedStyle$($computedStyle$$1_elem$$26$$);
    return $cbcClass$$3$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$26$$.width)
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_getElemInnerHeight$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_getElemInnerHeight$$($computedStyle$$2_elem$$27$$) {
    var $cbcClass$$4$$ = $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$;
    $computedStyle$$2_elem$$27$$ = $cbcClass$$4$$.$_getComputedStyle$($computedStyle$$2_elem$$27$$);
    return $cbcClass$$4$$.$_getCSSLengthAsInt$($computedStyle$$2_elem$$27$$.height)
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_getCSSLengthAsInt$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_getCSSLengthAsInt$$($cssLength_intLength$$) {
    return 0 < $cssLength_intLength$$.length && "auto" != $cssLength_intLength$$ ? ($cssLength_intLength$$ = parseInt($cssLength_intLength$$, 10), isNaN($cssLength_intLength$$) && ($cssLength_intLength$$ = 0), $cssLength_intLength$$) : 0
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_addBubbleEventListener$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_addBubbleEventListener$$($node$$22$$, $type$$75$$, $listener$$36$$) {
    $node$$22$$.addEventListener ? $node$$22$$.addEventListener($type$$75$$, $listener$$36$$, !1) : $node$$22$$.attachEvent && $node$$22$$.attachEvent("on" + $type$$75$$, $listener$$36$$)
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_removeBubbleEventListener$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_removeBubbleEventListener$$($node$$23$$, $type$$76$$, $listener$$37$$) {
    $node$$23$$.removeEventListener ? $node$$23$$.removeEventListener($type$$76$$, $listener$$37$$, !1) : $node$$23$$.detachEvent && $node$$23$$.detachEvent("on" + $type$$76$$, $listener$$37$$)
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_getWheelDelta$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_getWheelDelta$$($event$$206$$) {
    var $wheelDelta$$ = 0;
    return $wheelDelta$$ = null != $event$$206$$.wheelDelta ? $event$$206$$.wheelDelta : null != $event$$206$$.deltaY ? -$event$$206$$.deltaY : -$event$$206$$.detail
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_createTableDiv$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_createTableDiv$$() {
    var $tableDiv$$ = document.createElement("div");
    $tableDiv$$.style.display = "table";
    return $tableDiv$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_createTableRowDiv$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_createTableRowDiv$$() {
    var $tableRowDiv$$ = document.createElement("div");
    $tableRowDiv$$.style.display = "table-row";
    return $tableRowDiv$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_createTableCellDiv$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_createTableCellDiv$$() {
    var $tableCellDiv$$ = document.createElement("div");
    $tableCellDiv$$.style.display = "table-cell";
    return $tableCellDiv$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_wrapAndRestrictSize$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$_wrapAndRestrictSize$$($elem$$28$$, $parentElem$$, $bWidth$$, $bHeight$$) {
    var $wrapperDiv$$ = document.createElement("div"), $wrapperDivStyle$$ = $wrapperDiv$$.style;
    $wrapperDivStyle$$.display = "inline-block";
    $wrapperDiv$$.appendChild($elem$$28$$);
    $parentElem$$.appendChild($wrapperDiv$$);
    $bWidth$$ && ($wrapperDivStyle$$.maxWidth = $wrapperDiv$$.offsetWidth + "px");
    $bHeight$$ && ($wrapperDivStyle$$.maxHeight = $wrapperDiv$$.offsetHeight + "px");
    return $wrapperDiv$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_isHorizontal$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_isHorizontal$$() {
    return"horizontal" === this.$_orientation$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_isEmpty$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_isEmpty$$() {
    return!this.$_getContentParent$().hasChildNodes()
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_reinitializeInnerDom$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_reinitializeInnerDom$$() {
    this.$_origScroll$ = this.$_getCurrScroll$();
    this.$_clearOverflowMaxSize$();
    this.$_setOverflowScroll$(0);
    this.$_hidePrevButton$();
    this.$_hideNextButton$()
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_clearCachedSizes$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_clearCachedSizes$$() {
    this.$_sizes$ = this.$_totalSize$ = null
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_handleResize$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_handleResize$$($bSetup_totalSize$$) {
    $bSetup_totalSize$$ || this.$_reinitializeInnerDom$();
    this.$_clearCachedSizes$();
    this.$_totalSize$ && this.$_sizes$ || (this.$_totalSize$ = this.$_measureContents$());
    $bSetup_totalSize$$ || this.$_adjustOverflowSize$();
    $bSetup_totalSize$$ = this.$_totalSize$;
    this.$_alignButtons$($bSetup_totalSize$$.$w$, $bSetup_totalSize$$.$h$)
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_alignButtons$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_alignButtons$$($w$$5$$, $h$$5$$) {
    var $nextButtonStyle$$ = this.$_nextButton$.style, $prevButtonStyle$$ = this.$_prevButton$.style;
    if(this.$_isHorizontal$()) {
      var $hOffset_vOffset$$ = 0.5 * ($h$$5$$ - this.$_buttonHeight$);
      $nextButtonStyle$$.top = $hOffset_vOffset$$ + "px";
      $prevButtonStyle$$.top = $hOffset_vOffset$$ + "px"
    }else {
      $hOffset_vOffset$$ = 0.5 * ($w$$5$$ - this.$_buttonWidth$), this.$_bRtl$ ? ($nextButtonStyle$$.left = -$hOffset_vOffset$$ + "px", $prevButtonStyle$$.left = -$hOffset_vOffset$$ + "px") : ($nextButtonStyle$$.left = $hOffset_vOffset$$ + "px", $prevButtonStyle$$.left = $hOffset_vOffset$$ + "px")
    }
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_adjustOverflowSize$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_adjustOverflowSize$$($bInit$$1$$) {
    var $contentContainer$$ = this.$_contentContainer$, $bHoriz$$2$$ = this.$_isHorizontal$(), $cbcClass$$5_elemInnerSize$$ = $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$, $cbcClass$$5_elemInnerSize$$ = $bHoriz$$2$$ ? $cbcClass$$5_elemInnerSize$$.$_getElemInnerWidth$(this.$_elem$) : $cbcClass$$5_elemInnerSize$$.$_getElemInnerHeight$(this.$_elem$);
    ($bHoriz$$2$$ ? $contentContainer$$.offsetWidth : $contentContainer$$.offsetHeight) > $cbcClass$$5_elemInnerSize$$ && this.$_setOverflowMaxSize$($cbcClass$$5_elemInnerSize$$);
    this.$_minScroll$ = 0;
    this.$_maxScroll$ = $bHoriz$$2$$ ? $contentContainer$$.offsetWidth - $cbcClass$$5_elemInnerSize$$ + this.$_buttonWidth$ : $contentContainer$$.offsetHeight - $cbcClass$$5_elemInnerSize$$ + this.$_buttonHeight$;
    0 > this.$_maxScroll$ && (this.$_maxScroll$ = 0);
    this.$_hidePrevButton$();
    this.$_hideNextButton$();
    this.$_setCurrScroll$($bInit$$1$$ ? this.$_minScroll$ : this.$_origScroll$, !0);
    this.$_origScroll$ = 0
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_createInnerContainers$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_createInnerContainers$$() {
    var $self$$77$$ = this, $bHoriz$$3_overflowHeight$$ = this.$_isHorizontal$(), $overflowContainer$$ = document.createElement("div");
    this.$_overflowContainer$ = $overflowContainer$$;
    var $overflowContainerStyle$$ = $overflowContainer$$.style;
    $overflowContainerStyle$$.overflow = "hidden";
    $overflowContainerStyle$$.display = this.$_getCssDisplay$();
    $overflowContainerStyle$$.position = "relative";
    $bHoriz$$3_overflowHeight$$ && ($overflowContainerStyle$$.verticalAlign = "top");
    var $elem$$29$$ = this.$_elem$, $cbcClass$$6$$ = $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$, $contentContainer$$1_contentHeight$$ = document.createElement("div");
    this.$_contentContainer$ = $contentContainer$$1_contentHeight$$;
    var $contentContainerStyle_tableDiv$$1_vertDivPrevButton$$ = $contentContainer$$1_contentHeight$$.style;
    $contentContainerStyle_tableDiv$$1_vertDivPrevButton$$.position = "relative";
    $bHoriz$$3_overflowHeight$$ && ($contentContainerStyle_tableDiv$$1_vertDivPrevButton$$.display = "inline-block");
    $overflowContainer$$.appendChild($contentContainer$$1_contentHeight$$);
    $contentContainerStyle_tableDiv$$1_vertDivPrevButton$$ = null;
    if($bHoriz$$3_overflowHeight$$) {
      this.$_tableDiv$ = $contentContainerStyle_tableDiv$$1_vertDivPrevButton$$ = $cbcClass$$6$$.$_createTableDiv$();
      var $contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$ = $cbcClass$$6$$.$_createTableRowDiv$(), $arContentElements_tableCellDivPrevButton$$ = $cbcClass$$6$$.$_createTableCellDiv$();
      this.$_tableCellDivPrevButton$ = $arContentElements_tableCellDivPrevButton$$;
      var $contentChildren_tableCellDivOverflow$$ = $cbcClass$$6$$.$_createTableCellDiv$(), $numContentChildren_tableCellDivNextButton$$1$$ = $cbcClass$$6$$.$_createTableCellDiv$();
      this.$_tableCellDivNextButton$ = $numContentChildren_tableCellDivNextButton$$1$$;
      $contentChildren_tableCellDivOverflow$$.appendChild($overflowContainer$$);
      $contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$.appendChild($arContentElements_tableCellDivPrevButton$$);
      $contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$.appendChild($contentChildren_tableCellDivOverflow$$);
      $contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$.appendChild($numContentChildren_tableCellDivNextButton$$1$$);
      $contentContainerStyle_tableDiv$$1_vertDivPrevButton$$.appendChild($contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$)
    }
    $contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$ = $cbcClass$$6$$.$_createTableDiv$();
    $arContentElements_tableCellDivPrevButton$$ = $cbcClass$$6$$.$_reparentChildrenToTable$($elem$$29$$, $contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$, $bHoriz$$3_overflowHeight$$);
    if(this.$_contentParent$) {
      for(var $arContentElements_tableCellDivPrevButton$$ = [], $contentChildren_tableCellDivOverflow$$ = this.$_contentParent$.children, $numContentChildren_tableCellDivNextButton$$1$$ = $contentChildren_tableCellDivOverflow$$.length, $i$$207$$ = 0;$i$$207$$ < $numContentChildren_tableCellDivNextButton$$1$$;$i$$207$$++) {
        var $child$$7$$ = $contentChildren_tableCellDivOverflow$$[$i$$207$$];
        1 === $child$$7$$.nodeType && $arContentElements_tableCellDivPrevButton$$.push($child$$7$$)
      }
    }
    (this.$_arContentElements$ = $arContentElements_tableCellDivPrevButton$$) && 0 < $arContentElements_tableCellDivPrevButton$$.length && (this.$_contentTableDiv$ = $contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$, $contentContainer$$1_contentHeight$$.appendChild($contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$));
    $contentContainerStyle_tableDiv$$1_vertDivPrevButton$$ ? $elem$$29$$.appendChild($contentContainerStyle_tableDiv$$1_vertDivPrevButton$$) : (this.$_vertDivPrevButton$ = $contentContainerStyle_tableDiv$$1_vertDivPrevButton$$ = document.createElement("div"), this.$_vertDivNextButton$ = $contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$ = document.createElement("div"), $elem$$29$$.appendChild($contentContainerStyle_tableDiv$$1_vertDivPrevButton$$), $elem$$29$$.appendChild($overflowContainer$$), 
    $elem$$29$$.appendChild($contentTableDiv_tableRowDiv$$1_vertDivNextButton$$1$$));
    $bHoriz$$3_overflowHeight$$ && ($bHoriz$$3_overflowHeight$$ = $overflowContainer$$.offsetHeight, $contentContainer$$1_contentHeight$$ = $contentContainer$$1_contentHeight$$.offsetHeight, $bHoriz$$3_overflowHeight$$ > $contentContainer$$1_contentHeight$$ && ($overflowContainerStyle$$.marginBottom = $contentContainer$$1_contentHeight$$ - $bHoriz$$3_overflowHeight$$ + "px"));
    $cbcClass$$6$$.$_addBubbleEventListener$($overflowContainer$$, "scroll", function($event$$207$$) {
      $self$$77$$.$_handleScroll$($event$$207$$)
    })
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_getCssDisplay$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_getCssDisplay$$() {
    return this.$_isHorizontal$() ? "inline-block" : "block"
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_createPrevButton$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_createPrevButton$$($bHoriz$$4_buttonId$$, $buttonStyleClass_cbcClass$$7_prevButtonStyle$$1$$, $icon$$) {
    var $self$$78$$ = this, $prevButton$$1$$ = document.createElement("div");
    this.$_prevButton$ = $prevButton$$1$$;
    $bHoriz$$4_buttonId$$ && $prevButton$$1$$.setAttribute("id", $bHoriz$$4_buttonId$$);
    $prevButton$$1$$.setAttribute("class", $buttonStyleClass_cbcClass$$7_prevButtonStyle$$1$$);
    $prevButton$$1$$.setAttribute("aria-hidden", "true");
    $buttonStyleClass_cbcClass$$7_prevButtonStyle$$1$$ = $prevButton$$1$$.style;
    $buttonStyleClass_cbcClass$$7_prevButtonStyle$$1$$.display = this.$_getCssDisplay$();
    $buttonStyleClass_cbcClass$$7_prevButtonStyle$$1$$.position = "relative";
    if($bHoriz$$4_buttonId$$ = this.$_isHorizontal$()) {
      $buttonStyleClass_cbcClass$$7_prevButtonStyle$$1$$.verticalAlign = "top"
    }
    $buttonStyleClass_cbcClass$$7_prevButtonStyle$$1$$ = $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$;
    $buttonStyleClass_cbcClass$$7_prevButtonStyle$$1$$.$_addBubbleEventListener$($prevButton$$1$$, "click", function() {
      $self$$78$$.$_scrollPrev$()
    });
    this.$_tableCellDivPrevButton$ ? this.$_prevButtonWrapper$ = $buttonStyleClass_cbcClass$$7_prevButtonStyle$$1$$.$_wrapAndRestrictSize$($prevButton$$1$$, this.$_tableCellDivPrevButton$, $bHoriz$$4_buttonId$$, !$bHoriz$$4_buttonId$$) : this.$_vertDivPrevButton$.appendChild($prevButton$$1$$);
    $icon$$ && $prevButton$$1$$.appendChild($icon$$)
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_createNextButton$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_createNextButton$$($bHoriz$$5_buttonId$$1$$, $buttonStyleClass$$1_cbcClass$$8_nextButtonStyle$$1$$, $icon$$1$$) {
    var $self$$79$$ = this, $nextButton$$2$$ = document.createElement("div");
    this.$_nextButton$ = $nextButton$$2$$;
    $bHoriz$$5_buttonId$$1$$ && $nextButton$$2$$.setAttribute("id", $bHoriz$$5_buttonId$$1$$);
    $nextButton$$2$$.setAttribute("class", $buttonStyleClass$$1_cbcClass$$8_nextButtonStyle$$1$$);
    $nextButton$$2$$.setAttribute("aria-hidden", "true");
    $buttonStyleClass$$1_cbcClass$$8_nextButtonStyle$$1$$ = $nextButton$$2$$.style;
    $buttonStyleClass$$1_cbcClass$$8_nextButtonStyle$$1$$.display = this.$_getCssDisplay$();
    $buttonStyleClass$$1_cbcClass$$8_nextButtonStyle$$1$$.position = "relative";
    if($bHoriz$$5_buttonId$$1$$ = this.$_isHorizontal$()) {
      $buttonStyleClass$$1_cbcClass$$8_nextButtonStyle$$1$$.verticalAlign = "top"
    }
    $buttonStyleClass$$1_cbcClass$$8_nextButtonStyle$$1$$ = $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$;
    $buttonStyleClass$$1_cbcClass$$8_nextButtonStyle$$1$$.$_addBubbleEventListener$($nextButton$$2$$, "click", function() {
      $self$$79$$.$_scrollNext$()
    });
    this.$_tableCellDivNextButton$ ? this.$_nextButtonWrapper$ = $buttonStyleClass$$1_cbcClass$$8_nextButtonStyle$$1$$.$_wrapAndRestrictSize$($nextButton$$2$$, this.$_tableCellDivNextButton$, $bHoriz$$5_buttonId$$1$$, !$bHoriz$$5_buttonId$$1$$) : this.$_vertDivNextButton$.appendChild($nextButton$$2$$);
    $icon$$1$$ && $nextButton$$2$$.appendChild($icon$$1$$)
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_getContentParent$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_getContentParent$$() {
    var $contentParent$$3$$ = this.$_contentParent$;
    $contentParent$$3$$ || ($contentParent$$3$$ = this.$_contentContainer$);
    return $contentParent$$3$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_measureContents$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_measureContents$$() {
    var $bHoriz$$6_contentTableDiv$$1$$ = this.$_contentTableDiv$, $arContentElements$$1$$ = this.$_arContentElements$, $totalSize$$1$$ = {$w$:0, $h$:0}, $sizes$$1$$ = [];
    if(this.$_getContentParent$().hasChildNodes() && $bHoriz$$6_contentTableDiv$$1$$ && $arContentElements$$1$$ && 0 < $arContentElements$$1$$.length) {
      for(var $bHoriz$$6_contentTableDiv$$1$$ = this.$_isHorizontal$(), $contentWidth$$ = 0, $contentWidth$$ = this.$_contentContainer$.offsetWidth, $startOffset$$ = 0, $prevSizeObj$$ = null, $i$$208$$ = 0;$i$$208$$ < $arContentElements$$1$$.length;$i$$208$$++) {
        var $child$$8_overlap$$ = $arContentElements$$1$$[$i$$208$$];
        if(1 === $child$$8_overlap$$.nodeType) {
          var $ww$$ = $child$$8_overlap$$.offsetWidth, $hh$$ = $child$$8_overlap$$.offsetHeight, $sizeObj$$1$$ = {$w$:$ww$$, $h$:$hh$$, id:$child$$8_overlap$$.id};
          $bHoriz$$6_contentTableDiv$$1$$ ? ($sizeObj$$1$$.start = this.$_bRtl$ ? $contentWidth$$ - ($child$$8_overlap$$.offsetLeft + $ww$$) : $child$$8_overlap$$.offsetLeft, 0 === $i$$208$$ && ($startOffset$$ = $sizeObj$$1$$.start), $sizeObj$$1$$.start -= $startOffset$$, $totalSize$$1$$.$w$ = $sizeObj$$1$$.start + $ww$$, $totalSize$$1$$.$h$ = Math.max($totalSize$$1$$.$h$, $hh$$), $sizeObj$$1$$.end = $totalSize$$1$$.$w$ - 1) : ($sizeObj$$1$$.start = $child$$8_overlap$$.offsetTop, $totalSize$$1$$.$w$ = 
          Math.max($totalSize$$1$$.$w$, $ww$$), $totalSize$$1$$.$h$ = $sizeObj$$1$$.start + $hh$$, $sizeObj$$1$$.end = $totalSize$$1$$.$h$ - 1);
          $prevSizeObj$$ && $prevSizeObj$$.end >= $sizeObj$$1$$.start && ($child$$8_overlap$$ = $prevSizeObj$$.end - ($sizeObj$$1$$.start - 1), $prevSizeObj$$.end -= $child$$8_overlap$$, $bHoriz$$6_contentTableDiv$$1$$ ? $prevSizeObj$$.$w$ -= $child$$8_overlap$$ : $prevSizeObj$$.$h$ -= $child$$8_overlap$$);
          $sizes$$1$$.push($sizeObj$$1$$);
          $prevSizeObj$$ = $sizeObj$$1$$
        }
      }
    }
    this.$_sizes$ = $sizes$$1$$;
    return $totalSize$$1$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_getSizes$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_getSizes$$() {
    if(!this.$_sizes$) {
      var $totalSize$$2$$ = this.$_measureContents$();
      this.$_totalSize$ || (this.$_totalSize$ = $totalSize$$2$$)
    }
    return this.$_sizes$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_getNextButtonDisplayElem$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_getNextButtonDisplayElem$$() {
    return this.$_nextButtonWrapper$ ? this.$_nextButtonWrapper$ : this.$_nextButton$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_getPrevButtonDisplayElem$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_getPrevButtonDisplayElem$$() {
    return this.$_prevButtonWrapper$ ? this.$_prevButtonWrapper$ : this.$_prevButton$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_showNextButton$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_showNextButton$$() {
    this.$_getNextButtonDisplayElem$().style.display = this.$_getCssDisplay$()
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_showPrevButton$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_showPrevButton$$() {
    this.$_getPrevButtonDisplayElem$().style.display = this.$_getCssDisplay$()
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_hideNextButton$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_hideNextButton$$() {
    this.$_getNextButtonDisplayElem$().style.display = "none"
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_hidePrevButton$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_hidePrevButton$$() {
    this.$_getPrevButtonDisplayElem$().style.display = "none"
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_isNextButtonShown$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_isNextButtonShown$$() {
    return"none" !== this.$_getNextButtonDisplayElem$().style.display
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_isPrevButtonShown$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_isPrevButtonShown$$() {
    return"none" !== this.$_getPrevButtonDisplayElem$().style.display
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_getButtonSize$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_getButtonSize$$() {
    return this.$_isHorizontal$() ? this.$_buttonWidth$ : this.$_buttonHeight$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_updateButtonVisibility$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_updateButtonVisibility$$($scroll$$2$$) {
    var $buttonSize$$ = this.$_getButtonSize$(), $ovScroll$$ = this.$_getCurrScroll$(), $ovSize$$ = this.$_getCurrViewportSize$(), $bNeedsScroll$$ = this.$_needsScroll$();
    $scroll$$2$$ <= this.$_minScroll$ ? (this.$_isPrevButtonShown$() && ($ovSize$$ += $buttonSize$$, $ovScroll$$ -= $buttonSize$$), this.$_hidePrevButton$()) : $bNeedsScroll$$ && (this.$_isPrevButtonShown$() || ($ovSize$$ -= $buttonSize$$, $ovScroll$$ += $buttonSize$$), this.$_showPrevButton$());
    $scroll$$2$$ >= this.$_maxScroll$ ? (this.$_isNextButtonShown$() && ($ovSize$$ += $buttonSize$$), this.$_hideNextButton$()) : $bNeedsScroll$$ && (this.$_isNextButtonShown$() || ($ovSize$$ -= $buttonSize$$), this.$_showNextButton$());
    this.$_setOverflowScroll$($ovScroll$$);
    $bNeedsScroll$$ ? this.$_setOverflowMaxSize$($ovSize$$) : this.$_clearOverflowMaxSize$()
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_setOverflowMaxSize$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_setOverflowMaxSize$$($s$$5_size$$11$$) {
    var $overflowContainerStyle$$1$$ = this.$_overflowContainer$.style;
    $s$$5_size$$11$$ += "px";
    this.$_isHorizontal$() ? $overflowContainerStyle$$1$$.maxWidth = $s$$5_size$$11$$ : $overflowContainerStyle$$1$$.maxHeight = $s$$5_size$$11$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_clearOverflowMaxSize$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_clearOverflowMaxSize$$() {
    var $overflowContainerStyle$$2$$ = this.$_overflowContainer$.style;
    this.$_isHorizontal$() ? $overflowContainerStyle$$2$$.maxWidth = "" : $overflowContainerStyle$$2$$.maxHeight = ""
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_setOverflowScroll$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_setOverflowScroll$$($scroll$$3$$) {
    var $overflowContainer$$3$$ = this.$_overflowContainer$;
    this.$_isHorizontal$() ? $overflowContainer$$3$$.scrollLeft = this.$_convertScrollLogicalToBrowser$($scroll$$3$$) : $overflowContainer$$3$$.scrollTop = $scroll$$3$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_getCurrViewportSize$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_getCurrViewportSize$$() {
    var $overflowContainer$$4$$ = this.$_overflowContainer$;
    return this.$_isHorizontal$() ? $overflowContainer$$4$$.offsetWidth : $overflowContainer$$4$$.offsetHeight
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_setCurrScroll$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_setCurrScroll$$($scroll$$4$$, $bImmediate$$) {
    this.$_bScrolling$ || (this.$_bExternalScroll$ = !1, this.$_setCurrScrollHelper$($scroll$$4$$, $bImmediate$$))
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_setCurrScrollHelper$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_setCurrScrollHelper$$($scroll$$5$$, $bImmediate$$1$$) {
    if(!this.$_isEmpty$()) {
      this.$_bScrolling$ = !0;
      $scroll$$5$$ = this.$_constrainScroll$($scroll$$5$$);
      this.$_updateButtonVisibility$($scroll$$5$$);
      var $scrollFunc$$ = this.$_scrollFunc$;
      if($bImmediate$$1$$ || !$scrollFunc$$ || $scroll$$5$$ === this.$_getCurrScroll$()) {
        this.$_onScrollAnimEnd$($scroll$$5$$)
      }else {
        var $self$$80$$ = this;
        $scrollFunc$$.call(this.$_callbackObj$, this.$_overflowContainer$, this.$_convertScrollLogicalToBrowser$($scroll$$5$$), Math.abs(this.$_getCurrScroll$() - $scroll$$5$$) / $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_SCROLL_SPEED$, function() {
          $self$$80$$.$_onScrollAnimEnd$($scroll$$5$$)
        })
      }
    }
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_getCurrScroll$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_getCurrScroll$$() {
    var $overflowContainer$$5$$ = this.$_overflowContainer$;
    return this.$_isHorizontal$() ? this.$_convertScrollBrowserToLogical$($overflowContainer$$5$$.scrollLeft) : $overflowContainer$$5$$.scrollTop
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_needsScroll$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_needsScroll$$() {
    var $contentContainer$$3$$ = this.$_contentContainer$, $overflowContainer$$6$$ = this.$_overflowContainer$;
    return this.$_isHorizontal$() ? $contentContainer$$3$$.offsetWidth > $overflowContainer$$6$$.offsetWidth : $contentContainer$$3$$.offsetHeight > $overflowContainer$$6$$.offsetHeight
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_constrainScroll$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_constrainScroll$$($scroll$$6$$) {
    !this.$_needsScroll$() || $scroll$$6$$ < this.$_minScroll$ ? $scroll$$6$$ = this.$_minScroll$ : $scroll$$6$$ > this.$_maxScroll$ && ($scroll$$6$$ = this.$_maxScroll$);
    return $scroll$$6$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_handleMouseWheel$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_handleMouseWheel$$($event$$210$$) {
    var $bConsumeEvent$$ = this.$_bScrolling$;
    if(this.$_needsScroll$() && !this.$_bScrolling$) {
      var $wheelDelta$$1$$ = $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_getWheelDelta$($event$$210$$);
      0 > $wheelDelta$$1$$ && this.$_isNextButtonShown$() ? ($bConsumeEvent$$ = !0, this.$_scrollNext$()) : 0 < $wheelDelta$$1$$ && this.$_isPrevButtonShown$() && ($bConsumeEvent$$ = !0, this.$_scrollPrev$())
    }
    $bConsumeEvent$$ && ($event$$210$$.preventDefault(), $event$$210$$.stopPropagation())
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_handleTouchStart$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_handleTouchStart$$($event$$211_eventTouches_firstTouch$$) {
    $event$$211_eventTouches_firstTouch$$ = $event$$211_eventTouches_firstTouch$$.touches;
    this.$_needsScroll$() && (!this.$_bScrolling$ && 1 === $event$$211_eventTouches_firstTouch$$.length) && (this.$_bTouch$ = !0, $event$$211_eventTouches_firstTouch$$ = $event$$211_eventTouches_firstTouch$$[0], this.$_touchStartCoord$ = this.$_isHorizontal$() ? $event$$211_eventTouches_firstTouch$$.pageX : $event$$211_eventTouches_firstTouch$$.pageY, this.$_touchStartScroll$ = this.$_getCurrScroll$(), this.$_touchStartNextScroll$ = this.$_calcNextScroll$(), this.$_touchStartPrevScroll$ = this.$_calcPrevScroll$())
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_handleTouchMove$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_handleTouchMove$$($diff_event$$212_firstTouch$$1$$) {
    if(this.$_bTouch$) {
      var $bHoriz$$7$$ = this.$_isHorizontal$();
      $diff_event$$212_firstTouch$$1$$ = $diff_event$$212_firstTouch$$1$$.touches[0];
      $diff_event$$212_firstTouch$$1$$ = ($bHoriz$$7$$ ? $diff_event$$212_firstTouch$$1$$.pageX : $diff_event$$212_firstTouch$$1$$.pageY) - this.$_touchStartCoord$;
      var $overflowContainer$$7$$ = this.$_overflowContainer$;
      Math.abs($diff_event$$212_firstTouch$$1$$) < $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_SWIPE_THRESHOLD$ * ($bHoriz$$7$$ ? $overflowContainer$$7$$.offsetWidth : $overflowContainer$$7$$.offsetHeight) ? this.$_setCurrScroll$(this.$_touchStartScroll$ - $diff_event$$212_firstTouch$$1$$, !0) : (this.$_setCurrScroll$(($bHoriz$$7$$ && this.$_bRtl$ ? 0 < $diff_event$$212_firstTouch$$1$$ : 0 > $diff_event$$212_firstTouch$$1$$) ? this.$_touchStartNextScroll$ : this.$_touchStartPrevScroll$), 
      this.$_bTouch$ = !1)
    }
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_handleTouchEnd$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_handleTouchEnd$$() {
    this.$_bTouch$ && this.$_setCurrScroll$(this.$_touchStartScroll$);
    this.$_bTouch$ = !1
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_handleScroll$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_handleScroll$$() {
    this.$_bExternalScroll$ && !this.$_bScrolling$ && this.$_setCurrScrollHelper$(this.$_getCurrScroll$(), !0)
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_onScrollAnimEnd$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_onScrollAnimEnd$$($lastVisIndex_scroll$$7$$) {
    this.$_setOverflowScroll$($lastVisIndex_scroll$$7$$);
    this.$_setExternalScrollTimeout$();
    this.$_bScrolling$ = !1;
    if(this.$_firstVisibleItemChangedFunc$) {
      this.$_firstVisibleItemIndex$ = this.$_calcFirstVisibleItemIndex$();
      $lastVisIndex_scroll$$7$$ = this.$_calcLastVisibleItemIndex$();
      var $sizes$$2$$ = this.$_getSizes$(), $sizeObj$$2$$ = $sizes$$2$$[this.$_firstVisibleItemIndex$];
      this.$_firstVisibleItemIndex$ !== $lastVisIndex_scroll$$7$$ && (this.$_getCurrScroll$() > $sizeObj$$2$$.start && this.$_firstVisibleItemIndex$ < $sizes$$2$$.length - 2) && (this.$_firstVisibleItemIndex$++, $sizeObj$$2$$ = $sizes$$2$$[this.$_firstVisibleItemIndex$]);
      this.$_firstVisibleItemId$ = $sizeObj$$2$$.id;
      this.$_firstVisibleItemChangedFunc$.call(this.$_callbackObj$, this.$_firstVisibleItemId$)
    }
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_setExternalScrollTimeout$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_setExternalScrollTimeout$$() {
    var $self$$81$$ = this;
    window.setTimeout(function() {
      $self$$81$$ && ($self$$81$$.$_bExternalScroll$ = !0)
    }, 0)
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_scrollNext$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_scrollNext$$() {
    this.$_bScrolling$ || this.$_setCurrScroll$(this.$_calcNextScroll$())
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_scrollPrev$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_scrollPrev$$() {
    this.$_bScrolling$ || this.$_setCurrScroll$(this.$_calcPrevScroll$())
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_calcNextScroll$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_calcNextScroll$$() {
    var $nextIndex$$ = this.$_calcNextVisibleItemIndex$(), $scroll$$8$$ = 0;
    return $scroll$$8$$ = $nextIndex$$ === this.$_calcFirstVisibleItemIndex$() ? this.$_getCurrScroll$() + this.$_getCurrViewportSize$() : this.$_calcStartScroll$($nextIndex$$)
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_calcPrevScroll$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_calcPrevScroll$$() {
    var $prevIndex$$ = this.$_calcPrevVisibleItemIndex$(), $scroll$$9$$ = 0, $scroll$$9$$ = $prevIndex$$ === this.$_calcLastVisibleItemIndex$() ? this.$_getCurrScroll$() - this.$_getCurrViewportSize$() : this.$_calcEndScroll$($prevIndex$$);
    this.$_isNextButtonShown$() || ($scroll$$9$$ += this.$_getButtonSize$());
    $scroll$$9$$ < this.$_getButtonSize$() && ($scroll$$9$$ = this.$_minScroll$);
    return $scroll$$9$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_calcStartScroll$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_calcStartScroll$$($index$$145$$) {
    return this.$_getSizes$()[$index$$145$$].start
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_calcEndScroll$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_calcEndScroll$$($index$$146$$) {
    return this.$_getSizes$()[$index$$146$$].end - this.$_getCurrViewportSize$() + 1
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_calcFirstVisibleItemIndex$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_calcFirstVisibleItemIndex$$() {
    var $i$$209$$ = this.$_calcItemIndex$(this.$_getCurrScroll$());
    return 0 > $i$$209$$ ? 0 : $i$$209$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_calcLastVisibleItemIndex$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_calcLastVisibleItemIndex$$() {
    var $i$$210$$ = this.$_calcItemIndex$(this.$_getCurrScroll$() + this.$_getCurrViewportSize$() - 1), $sizes$$5$$ = this.$_getSizes$();
    return 0 > $i$$210$$ ? $sizes$$5$$.length - 1 : $i$$210$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_calcPrevVisibleItemIndex$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_calcPrevVisibleItemIndex$$() {
    var $i$$211$$ = this.$_calcItemIndex$(this.$_getCurrScroll$() - 1);
    return 0 > $i$$211$$ ? 0 : $i$$211$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_calcNextVisibleItemIndex$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_calcNextVisibleItemIndex$$() {
    var $i$$212$$ = this.$_calcItemIndex$(this.$_getCurrScroll$() + this.$_getCurrViewportSize$()), $sizes$$6$$ = this.$_getSizes$();
    return 0 > $i$$212$$ ? $sizes$$6$$.length - 1 : $i$$212$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_calcItemIndex$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_calcItemIndex$$($scroll$$10$$) {
    for(var $sizes$$7$$ = this.$_getSizes$(), $i$$213$$ = 0;$i$$213$$ < $sizes$$7$$.length;$i$$213$$++) {
      if($scroll$$10$$ <= $sizes$$7$$[$i$$213$$].end) {
        return $i$$213$$
      }
    }
    return-1
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_convertScrollLogicalToBrowser$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_convertScrollLogicalToBrowser$$($scroll$$11$$) {
    var $newScroll$$ = $scroll$$11$$;
    if(this.$_bRtl$ && this.$_isHorizontal$()) {
      if(this.$_bAgentGecko$) {
        $newScroll$$ = -$scroll$$11$$
      }else {
        if(this.$_bAgentWebkit$ || this.$_bAgentOpera$) {
          $newScroll$$ = this.$_contentContainer$.offsetWidth - this.$_overflowContainer$.offsetWidth - $scroll$$11$$
        }
      }
    }
    return $newScroll$$
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.prototype.$_convertScrollBrowserToLogical$ = function $$adf$$$$shared$$$impl$$$conveyorBelt$$$ConveyorBeltCommon$$$$_convertScrollBrowserToLogical$$($scroll$$12$$) {
    return this.$_convertScrollLogicalToBrowser$($scroll$$12$$)
  };
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_SCROLL_SPEED$ = 1.1;
  $adf$$.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$.$_SWIPE_THRESHOLD$ = 0.33;
  (function() {
    $oj$$18$$.$__registerWidget$("oj.ojConveyorBelt", $$$$18$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{orientation:"horizontal", contentParent:null}, $_ComponentCreate$:function() {
      this._super();
      this.element.addClass("oj-conveyorbelt oj-component")
    }, _init:function() {
      this.$_setup$(!0)
    }, refresh:function() {
      this._super();
      var $bRecreate$$ = "rtl" === this.$_GetReadingDirection$() !== this.$_bRTL$;
      $bRecreate$$ && this.$_destroyCBCommon$();
      this.$_setup$($bRecreate$$)
    }, $_setup$:function($children$$6_isInit$$) {
      this.$_bRTL$ = "rtl" === this.$_GetReadingDirection$();
      var $elem$$39_numChildren$$ = this.element, $i$$214_options$$266$$ = this.options;
      if($children$$6_isInit$$ && !this.$_cbCommon$) {
        var $child$$9_orientation$$1$$ = $i$$214_options$$266$$.orientation, $callbackInfo$$1_prevStyleClass$$ = null, $nextStyleClass$$ = null, $prevIcon$$ = null, $nextIcon$$ = null, $animateScrollFunc_contentParentElem$$ = null;
        "vertical" !== $child$$9_orientation$$1$$ ? ($callbackInfo$$1_prevStyleClass$$ = "oj-enabled oj-conveyorbelt-overflow-indicator oj-start oj-default", $nextStyleClass$$ = "oj-enabled oj-conveyorbelt-overflow-indicator oj-end oj-default", $prevIcon$$ = this.$_createIcon$("oj-conveyorbelt-overflow-icon oj-start"), $nextIcon$$ = this.$_createIcon$("oj-conveyorbelt-overflow-icon oj-end"), $animateScrollFunc_contentParentElem$$ = this.$_animateScrollLeft$) : ($callbackInfo$$1_prevStyleClass$$ = 
        "oj-enabled oj-conveyorbelt-overflow-indicator oj-top oj-default", $nextStyleClass$$ = "oj-enabled oj-conveyorbelt-overflow-indicator oj-bottom oj-default", $prevIcon$$ = this.$_createIcon$("oj-conveyorbelt-overflow-icon oj-top"), $nextIcon$$ = this.$_createIcon$("oj-conveyorbelt-overflow-icon oj-bottom"), $animateScrollFunc_contentParentElem$$ = this.$_animateScrollTop$);
        var $buttonInfo$$1$$ = {};
        $buttonInfo$$1$$.$prevButtonStyleClass$ = $callbackInfo$$1_prevStyleClass$$;
        $buttonInfo$$1$$.$nextButtonStyleClass$ = $nextStyleClass$$;
        $buttonInfo$$1$$.$prevButtonIcon$ = $prevIcon$$;
        $buttonInfo$$1$$.$nextButtonIcon$ = $nextIcon$$;
        $callbackInfo$$1_prevStyleClass$$ = {};
        $callbackInfo$$1_prevStyleClass$$.$addResizeListener$ = $oj$$18$$.$DomUtils$.$addResizeListener$;
        $callbackInfo$$1_prevStyleClass$$.$removeResizeListener$ = $oj$$18$$.$DomUtils$.$removeResizeListener$;
        "true" !== $elem$$39_numChildren$$.attr("_ojConveyorBeltTesting") && ($callbackInfo$$1_prevStyleClass$$.$scrollFunc$ = $animateScrollFunc_contentParentElem$$);
        $animateScrollFunc_contentParentElem$$ = null;
        $i$$214_options$$266$$.contentParent && ($animateScrollFunc_contentParentElem$$ = $$$$18$$($i$$214_options$$266$$.contentParent)[0]);
        this.$_cbCommon$ = new window.adf.$shared$.$impl$.$conveyorBelt$.$ConveyorBeltCommon$($elem$$39_numChildren$$[0], $child$$9_orientation$$1$$, $animateScrollFunc_contentParentElem$$, this.$_bRTL$, $buttonInfo$$1$$, $callbackInfo$$1_prevStyleClass$$)
      }
      this.$_cbCommon$.$setup$($children$$6_isInit$$);
      if($children$$6_isInit$$) {
        for($children$$6_isInit$$ = $elem$$39_numChildren$$.find(".oj-conveyorbelt-overflow-indicator"), $elem$$39_numChildren$$ = $children$$6_isInit$$.size(), $i$$214_options$$266$$ = 0;$i$$214_options$$266$$ < $elem$$39_numChildren$$;$i$$214_options$$266$$++) {
          $child$$9_orientation$$1$$ = $children$$6_isInit$$.get($i$$214_options$$266$$), this.$_setupButtonMouseStyles$($child$$9_orientation$$1$$)
        }
      }
    }, _destroy:function() {
      this.$_destroyCBCommon$();
      this.element.removeClass("oj-conveyorbelt oj-component");
      this._super()
    }, _setOption:function($key$$81$$, $value$$174$$) {
      var $bRecreate$$1$$ = !1;
      switch($key$$81$$) {
        case "containerParent":
        ;
        case "orientation":
          $bRecreate$$1$$ = !0
      }
      $bRecreate$$1$$ && this.$_destroyCBCommon$();
      this._super($key$$81$$, $value$$174$$);
      $bRecreate$$1$$ && this.$_setup$(!0)
    }, $_destroyCBCommon$:function() {
      var $cbCommon$$1$$ = this.$_cbCommon$;
      $cbCommon$$1$$ && $cbCommon$$1$$.destroy();
      this.$_cbCommon$ = null
    }, $_setupButtonMouseStyles$:function($element$$59$$) {
      this._on($element$$59$$, {mousedown:function($event$$215$$) {
        $$$$18$$($event$$215$$.currentTarget).addClass("oj-active")
      }, mouseup:function($event$$216$$) {
        $$$$18$$($event$$216$$.currentTarget).removeClass("oj-active")
      }, mouseenter:function($currTarget$$2_event$$217$$) {
        $currTarget$$2_event$$217$$ = $currTarget$$2_event$$217$$.currentTarget;
        $$$$18$$($currTarget$$2_event$$217$$).addClass("oj-hover");
        $$$$18$$($currTarget$$2_event$$217$$).removeClass("oj-default")
      }, mouseleave:function($currTarget$$3_event$$218$$) {
        $currTarget$$3_event$$218$$ = $currTarget$$3_event$$218$$.currentTarget;
        $$$$18$$($currTarget$$3_event$$218$$).removeClass("oj-hover");
        $$$$18$$($currTarget$$3_event$$218$$).removeClass("oj-active");
        $$$$18$$($currTarget$$3_event$$218$$).addClass("oj-default")
      }})
    }, $_createIcon$:function($iconStyleClass$$) {
      var $span$$ = document.createElement("span");
      $span$$.setAttribute("class", "oj-component-icon oj-clickable-icon " + $iconStyleClass$$);
      return $span$$
    }, $_animateScrollLeft$:function($elem$$41$$, $value$$175$$, $duration$$11$$, $onEndFunc$$1$$) {
      var $props$$4$$ = {};
      $props$$4$$.scrollLeft = $value$$175$$;
      $$$$18$$($elem$$41$$).animate($props$$4$$, $duration$$11$$, "swing", $onEndFunc$$1$$)
    }, $_animateScrollTop$:function($elem$$42$$, $value$$176$$, $duration$$12$$, $onEndFunc$$2$$) {
      var $props$$5$$ = {};
      $props$$5$$.scrollTop = $value$$176$$;
      $$$$18$$($elem$$42$$).animate($props$$5$$, $duration$$12$$, "swing", $onEndFunc$$2$$)
    }, getNodeBySubId:function($locator$$11_subId$$7$$) {
      if(null == $locator$$11_subId$$7$$) {
        return this.element ? this.element[0] : null
      }
      $locator$$11_subId$$7$$ = $locator$$11_subId$$7$$.subId;
      return"oj-conveyorbelt-start-overflow-indicator" === $locator$$11_subId$$7$$ ? this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-start")[0] : "oj-conveyorbelt-end-overflow-indicator" === $locator$$11_subId$$7$$ ? this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-end")[0] : "oj-conveyorbelt-top-overflow-indicator" === $locator$$11_subId$$7$$ ? this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-top")[0] : "oj-conveyorbelt-bottom-overflow-indicator" === $locator$$11_subId$$7$$ ? 
      this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-bottom")[0] : null
    }})
  })()
});
