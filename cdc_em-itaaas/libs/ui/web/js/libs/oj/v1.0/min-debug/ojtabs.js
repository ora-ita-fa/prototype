define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojconveyorbelt"], function($oj$$29$$, $$$$29$$) {
  (function() {
    $oj$$29$$.$__registerWidget$("oj.ojTabs", $$$$29$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", delay:300, options:{selected:0, disabled:!1, truncation:"auto", selectOn:"click", orientation:"horizontal", removable:!1, removeCueText:"Removable", reorderable:!1, beforeSelect:null, afterSelect:null, beforeDeselect:null, afterDeselect:null, beforeRemove:null, afterRemove:null, optionChange:null}, $_ComponentCreate$:function() {
      var $self$$91$$ = this, $options$$285$$ = this.options;
      this._super();
      this.$running$ = !1;
      this.$_setupOrientation$($options$$285$$.orientation);
      this.$_processTabs$();
      if(Array.isArray($options$$285$$.disabled)) {
        var $disabledTabs$$ = this.$tabs$.filter(".oj-disabled");
        $options$$285$$.disabled = $$$$29$$.unique($options$$285$$.disabled.concat($$$$29$$.map($disabledTabs$$, function($li$$1$$) {
          return $self$$91$$.$tabs$.index($li$$1$$)
        }))).sort()
      }
      this.$_initialActivate$ = $options$$285$$.selected;
      $options$$285$$.selected = -1;
      this.$_refresh$()
    }, $_showContextMenu$:function($menu$$17$$, $event$$304$$) {
      $menu$$17$$.show($event$$304$$, {launcher:this.element.children(".oj-tabs-nav").children("[tabindex\x3d0]"), focus:"menu"})
    }, $_tabKeydown$:function($event$$305$$) {
      var $anchor_focusedTab$$ = $$$$29$$(this.document[0].activeElement).closest("li"), $selectedIndex$$ = this.$tabs$.index($anchor_focusedTab$$), $goingForward$$ = !0;
      if(!this.$_handlePageNav$($event$$305$$)) {
        switch($event$$305$$.keyCode) {
          case $$$$29$$.ui.keyCode.RIGHT:
          ;
          case $$$$29$$.ui.keyCode.DOWN:
            $selectedIndex$$++;
            break;
          case $$$$29$$.ui.keyCode.UP:
          ;
          case $$$$29$$.ui.keyCode.LEFT:
            $goingForward$$ = !1;
            $selectedIndex$$--;
            break;
          case $$$$29$$.ui.keyCode.END:
            $selectedIndex$$ = this.$tabs$.length - 1;
            break;
          case $$$$29$$.ui.keyCode.HOME:
            $selectedIndex$$ = 0;
            break;
          case 46:
            if($anchor_focusedTab$$ = this.$active$.find(".oj-tabs-close-icon")) {
              $event$$305$$.preventDefault(), this.$_removeTabHandler$({target:$anchor_focusedTab$$, currentTarget:$anchor_focusedTab$$, preventDefault:$$$$29$$.noop})
            }
            return;
          default:
            return
        }
        $event$$305$$.preventDefault();
        clearTimeout(this.$activating$);
        $selectedIndex$$ = this.$_focusNextTab$($selectedIndex$$, $goingForward$$);
        $event$$305$$.ctrlKey || ($anchor_focusedTab$$.attr("aria-selected", "false"), this.$tabs$.eq($selectedIndex$$).attr("aria-selected", "true"), this.$activating$ = this._delay(function() {
          this.option("selected", $selectedIndex$$)
        }, this.delay))
      }
    }, $_panelKeydown$:function($event$$306$$) {
      !this.$_handlePageNav$($event$$306$$) && ($event$$306$$.ctrlKey && $event$$306$$.keyCode === $$$$29$$.ui.keyCode.UP) && ($event$$306$$.preventDefault(), this.$active$.focus())
    }, $_handlePageNav$:function($event$$307$$) {
      if($event$$307$$.ctrlKey && $event$$307$$.keyCode === $$$$29$$.ui.keyCode.PAGE_UP) {
        return this.$_activate$(this.$_focusNextTab$(this.options.selected - 1, !1)), !0
      }
      if($event$$307$$.ctrlKey && $event$$307$$.keyCode === $$$$29$$.ui.keyCode.PAGE_DOWN) {
        return this.$_activate$(this.$_focusNextTab$(this.options.selected + 1, !0)), !0
      }
    }, $_isTabDisabled$:function($index$$163$$) {
      return-1 != $$$$29$$.inArray($index$$163$$, this.options.disabled)
    }, $_findNextTab$:function($index$$164$$, $goingForward$$1$$) {
      function $constrain$$() {
        $index$$164$$ > $lastTabIndex$$ && ($index$$164$$ = 0);
        0 > $index$$164$$ && ($index$$164$$ = $lastTabIndex$$);
        return $index$$164$$
      }
      for(var $lastTabIndex$$ = this.$tabs$.length - 1;this.$_isTabDisabled$($constrain$$());) {
        $index$$164$$ = $goingForward$$1$$ ? $index$$164$$ + 1 : $index$$164$$ - 1
      }
      return $index$$164$$
    }, $_focusNextTab$:function($index$$165$$, $goingForward$$2$$) {
      $index$$165$$ = this.$_findNextTab$($index$$165$$, $goingForward$$2$$);
      this.$tabs$.eq($index$$165$$).focus();
      return $index$$165$$
    }, $_activateNextTab$:function($index$$166$$) {
      for(var $lastTabIndex$$1$$ = this.$tabs$.length - 1, $next$$4$$ = $index$$166$$ + 1;$next$$4$$ <= $lastTabIndex$$1$$;) {
        if(!this.$_isTabDisabled$($next$$4$$)) {
          return this.$_activate$($next$$4$$), $next$$4$$ - 1
        }
        $next$$4$$++
      }
      for($next$$4$$ = $index$$166$$ - 1;0 <= $next$$4$$;) {
        if(!this.$_isTabDisabled$($next$$4$$)) {
          return this.$_activate$($next$$4$$), $next$$4$$
        }
        $next$$4$$--
      }
      return-1
    }, _setOption:function($key$$105$$, $value$$189$$) {
      "selected" === $key$$105$$ ? ("string" === typeof $value$$189$$ && ($value$$189$$ = this.$_parse$($value$$189$$)), this.$_activate$($value$$189$$)) : "disabled" === $key$$105$$ ? this.$_setupDisabled$($value$$189$$) : "removable" === $key$$105$$ ? this.$_setRemovable$($value$$189$$) : "reorderable" === $key$$105$$ ? $value$$189$$ !== this.options.reorderable && (this.options.reorderable = $value$$189$$, this.$_setupReorder$()) : "orientation" === $key$$105$$ ? (this.$_setupOrientation$($value$$189$$), 
      this.refresh()) : (this._super($key$$105$$, $value$$189$$), "selectOn" === $key$$105$$ && (this.$_tearDownEvents$(), this._super($key$$105$$, $value$$189$$), this.$_setupEvents$()))
    }, refresh:function() {
      this._super();
      this.$_destroyCloseIcons$();
      this.$_processTabs$();
      this.$_refresh$()
    }, $_refresh$:function() {
      var $options$$286$$ = this.options;
      this.$active$ = this.$tabs$.length && -1 != $options$$286$$.selected ? this.$_findActive$($options$$286$$.selected) : $$$$29$$();
      this.$_setupDisabled$($options$$286$$.disabled);
      this.$_createCloseIcons$();
      this.$_tearDownEvents$();
      this.$_setupEvents$();
      this.$tabs$.not(this.$active$).attr({"aria-selected":"false", tabIndex:"-1"});
      this.$panels$.not(this.$_getPanelForTab$(this.$active$)).hide().attr({"aria-expanded":"false", "aria-hidden":"true"});
      this.$active$.length ? (this.$active$.addClass("oj-tabs-active").attr({"aria-selected":"true", tabIndex:"0"}), this.$_getPanelForTab$(this.$active$).show().attr({"aria-expanded":"true", "aria-hidden":"false"})) : this.$tabs$.eq(0).attr("tabIndex", "0");
      if(void 0 !== this.$_initialActivate$) {
        var $active$$ = this.$_initialActivate$;
        $options$$286$$.selected = 0 != $active$$ && (0 > $active$$ || $active$$ > this.$tabs$.length) ? 0 : $active$$;
        -1 !== $$$$29$$.inArray($active$$, $options$$286$$.disabled) && ($options$$286$$.selected = this.$_activateNextTab$($active$$));
        this.$_activate$($options$$286$$.selected);
        this.$_initialActivate$ = void 0
      }
      "horizontal" == $options$$286$$.orientation && (this.$_truncateBeforeOverflow$(), this.$_addConveyor$());
      this.$_setupReorder$()
    }, $_addConveyor$:function() {
      if("horizontal" == this.options.orientation) {
        var $tabsId$$ = this.$tablist$.uniqueId().attr("id"), $conveyorDiv$$ = this.$_getTabbarWrapper$().wrap("\x3cdiv\x3e").parent();
        $conveyorDiv$$.uniqueId().attr("id");
        $conveyorDiv$$.addClass("oj-tabs-conveyorbelt");
        this.$conveyor$ = $conveyorDiv$$.ojConveyorBelt({orientation:"horizontal", contentParent:"#" + $tabsId$$})
      }
    }, $_processTabs$:function() {
      var $self$$92$$ = this;
      this.$_destroyTabBar$();
      this.$tablist$ = $$$$29$$("\x3cul\x3e").addClass("oj-tabs-nav oj-helper-clearfix").attr("role", "tablist").prependTo(this.element);
      this.$tabs$ = $$$$29$$();
      this.$panels$ = $$$$29$$();
      this.$titles$ = $$$$29$$();
      this.element.children(":not(.oj-tabs-nav)").each(function($index$$167$$) {
        var $anchorId_header$$7$$ = $$$$29$$(this).find("\x3e :first-child"), $headerClone_tab$$ = $anchorId_header$$7$$.clone();
        $headerClone_tab$$.addClass("oj-tabs-title").css({display:""}).attr({"aria-hidden":"false"});
        $self$$92$$.$_removePrefixIds$($headerClone_tab$$);
        $self$$92$$.$titles$ = $self$$92$$.$titles$.add($headerClone_tab$$);
        var $anchor$$1_ohd_originalAriaControls$$ = $anchorId_header$$7$$[0];
        $anchor$$1_ohd_originalAriaControls$$.id && $self$$92$$.$_addPrefixId$($anchor$$1_ohd_originalAriaControls$$);
        $anchorId_header$$7$$.find("[id]").each(function() {
          $self$$92$$.$_addPrefixId$(this)
        });
        $anchor$$1_ohd_originalAriaControls$$ = $headerClone_tab$$.wrap("\x3cli\x3e\x3cdiv\x3e\x3ca href\x3d'#'\x3e\x3c/a\x3e\x3c/div\x3e\x3c/li\x3e").parent();
        $anchor$$1_ohd_originalAriaControls$$.addClass("oj-tabs-anchor").attr({role:"presentation", tabIndex:"-1"});
        $headerClone_tab$$ = $anchor$$1_ohd_originalAriaControls$$.parent().addClass("oj-tabs-tab-content").parent().addClass("oj-tabs-default").attr({role:"tab", "aria-hidden":"false", tabIndex:"-1"});
        $headerClone_tab$$.appendTo($self$$92$$.$tablist$);
        $self$$92$$.$tabs$ = $self$$92$$.$tabs$.add($headerClone_tab$$);
        $anchorId_header$$7$$.hide().attr({"aria-hidden":"true"});
        var $anchorId_header$$7$$ = $anchor$$1_ohd_originalAriaControls$$.uniqueId().attr("id"), $anchor$$1_ohd_originalAriaControls$$ = $headerClone_tab$$.attr("aria-controls"), $panel$$ = $$$$29$$(this);
        $panel$$.hasClass("oj-disabled") && $self$$92$$.disable($index$$167$$);
        $anchor$$1_ohd_originalAriaControls$$ && $headerClone_tab$$.data("oj-tabs-aria-controls", $anchor$$1_ohd_originalAriaControls$$);
        $headerClone_tab$$.attr({"aria-controls":$panel$$.uniqueId().attr("id"), "aria-labelledby":$anchorId_header$$7$$});
        $self$$92$$.$panels$ = $self$$92$$.$panels$.add($panel$$);
        $panel$$.attr("aria-labelledby", $anchorId_header$$7$$)
      });
      if("vertical" == this.options.orientation) {
        var $maxTabWidth$$ = 0, $sumTabHeight$$ = 0;
        this.$tabs$.addClass("oj-tabs-active").each(function() {
          var $tab$$1$$ = $$$$29$$(this);
          $maxTabWidth$$ = Math.max($maxTabWidth$$, $tab$$1$$.width());
          $sumTabHeight$$ += $tab$$1$$.outerHeight(!0)
        }).removeClass("oj-tabs-active");
        this.options.removable && ($maxTabWidth$$ += 28);
        this.$tabs$.css({width:$maxTabWidth$$ + "px"});
        var $outerWidth$$ = this.$tablist$.outerWidth(!0);
        "rtl" == this.$_GetReadingDirection$() ? this.$panels$.css({"margin-right":$outerWidth$$ - 1 + "px", "min-height":$sumTabHeight$$ + "px"}) : this.$panels$.css({"margin-left":$outerWidth$$ - 1 + "px", "min-height":$sumTabHeight$$ + "px"})
      }
      this.$panels$.addClass("oj-tabs-panel").attr("role", "tabpanel")
    }, $_setupDisabled$:function($disabled$$4$$) {
      Array.isArray($disabled$$4$$) && ($disabled$$4$$.length ? $disabled$$4$$.length === this.$tabs$.length && ($disabled$$4$$ = !0) : $disabled$$4$$ = !1);
      this.$tabs$.each(function($index$$168$$) {
        !0 === $disabled$$4$$ || -1 !== $$$$29$$.inArray($index$$168$$, $disabled$$4$$) ? $$$$29$$(this).addClass("oj-disabled").attr("aria-disabled", "true") : $$$$29$$(this).removeClass("oj-disabled").removeAttr("aria-disabled")
      });
      this.options.disabled = $disabled$$4$$
    }, $_setupEvents$:function() {
      this.element.on("mousedown" + this.eventNamespace, ".oj-tabs-nav \x3e li", function($event$$309$$) {
        $$$$29$$(this).is(".oj-disabled") && $event$$309$$.preventDefault()
      });
      var $events$$4$$ = {keydown:this.$_tabKeydown$}, $enabledTabs_event$$308$$ = this.options.selectOn;
      if($enabledTabs_event$$308$$) {
        var $self$$93$$ = this;
        $$$$29$$.each($enabledTabs_event$$308$$.split(" "), function($index$$169$$, $eventName$$2$$) {
          $events$$4$$[$eventName$$2$$] = $self$$93$$.$_eventHandler$
        })
      }
      $enabledTabs_event$$308$$ = this.$tabs$.not(".oj-disabled");
      this._on($enabledTabs_event$$308$$, $events$$4$$);
      this._on(this.$panels$, {keydown:this.$_panelKeydown$});
      if(this.options.removable) {
        var $revents$$ = {click:this.$_removeTabHandler$};
        this._on($enabledTabs_event$$308$$.find(".oj-tabs-close-icon"), $revents$$)
      }
      this._focusable($enabledTabs_event$$308$$);
      this._hoverable($enabledTabs_event$$308$$);
      this.$_activeable$($enabledTabs_event$$308$$)
    }, $_tearDownEvents$:function() {
      var $enabledTabs$$1$$ = this.$tabs$.not(".oj-disabled");
      this._off($enabledTabs$$1$$);
      this._off(this.$panels$);
      this.element.off("mousedown" + this.eventNamespace)
    }, $_eventHandler$:function($event$$310$$) {
      var $options$$287$$ = this.options, $active$$1_eventData$$10$$ = this.$active$, $tab$$2$$ = $$$$29$$($event$$310$$.currentTarget).closest("li"), $clickedIsActive$$ = $tab$$2$$[0] === $active$$1_eventData$$10$$[0], $toShow$$ = this.$_getPanelForTab$($tab$$2$$), $toHide$$ = $active$$1_eventData$$10$$.length ? this.$_getPanelForTab$($active$$1_eventData$$10$$) : $$$$29$$(), $active$$1_eventData$$10$$ = {oldHeader:$active$$1_eventData$$10$$, oldContent:$toHide$$, newHeader:$tab$$2$$, newContent:$toShow$$}, 
      $deselectData$$ = {oldHeader:$active$$1_eventData$$10$$.newHeader, oldContent:$active$$1_eventData$$10$$.newContent, newHeader:$active$$1_eventData$$10$$.oldHeader, newContent:$active$$1_eventData$$10$$.oldContent};
      $event$$310$$.preventDefault();
      $tab$$2$$.hasClass("oj-disabled") || (this.$running$ || $clickedIsActive$$ || !this.$_initialActivate$ && !1 === this._trigger("beforeDeselect", $event$$310$$, $deselectData$$) || !1 === this._trigger("beforeSelect", $event$$310$$, $active$$1_eventData$$10$$)) || ($options$$287$$.selected = this.$tabs$.index($tab$$2$$), this.$active$ = $clickedIsActive$$ ? $$$$29$$() : $tab$$2$$, $toHide$$.length || $toShow$$.length || $$$$29$$.error("OJ Tabs: Mismatching fragment identifier."), this.$_toggle$($event$$310$$, 
      $active$$1_eventData$$10$$))
    }, $_toggle$:function($event$$311$$, $eventData$$11$$) {
      var $self$$94$$ = this, $toShow$$1$$ = $eventData$$11$$.newContent, $toHide$$1$$ = $eventData$$11$$.oldContent;
      this.$running$ = !0;
      $eventData$$11$$.oldHeader.closest("li").removeClass("oj-tabs-active");
      $toHide$$1$$.hide();
      $eventData$$11$$.newHeader.closest("li").addClass("oj-tabs-active");
      $toShow$$1$$.show();
      (function complete$$2() {
        $self$$94$$.$running$ = !1;
        this.$_initialActivate$ || $self$$94$$._trigger("afterDeselect", $event$$311$$, $eventData$$11$$);
        $self$$94$$._trigger("afterSelect", $event$$311$$, $eventData$$11$$);
        var $oldIndex$$2$$ = -1, $newIndex$$1$$ = -1;
        if($eventData$$11$$) {
          var $tab$$3$$ = $eventData$$11$$.oldHeader;
          $tab$$3$$ && ($oldIndex$$2$$ = $self$$94$$.$tabs$.index($tab$$3$$));
          ($tab$$3$$ = $eventData$$11$$.newHeader) && ($newIndex$$1$$ = $self$$94$$.$tabs$.index($tab$$3$$))
        }
        $self$$94$$.$_fireOptionChange$("selected", $oldIndex$$2$$, $newIndex$$1$$, $event$$311$$ ? !0 : !1)
      })();
      $toHide$$1$$.attr({"aria-expanded":"false", "aria-hidden":"true"});
      $eventData$$11$$.oldHeader.attr("aria-selected", "false");
      $toShow$$1$$.length && $toHide$$1$$.length ? $eventData$$11$$.oldHeader.attr("tabIndex", "-1") : $toShow$$1$$.length && this.$tabs$.filter(function() {
        return"0" === $$$$29$$(this).attr("tabIndex")
      }).attr("tabIndex", "-1");
      $toShow$$1$$.attr({"aria-expanded":"true", "aria-hidden":"false"});
      $eventData$$11$$.newHeader.attr({"aria-selected":"true", tabIndex:"0"})
    }, $_activate$:function($anchor$$3_index$$170$$) {
      var $active$$3$$ = this.$_findActive$($anchor$$3_index$$170$$);
      $active$$3$$[0] !== this.$active$[0] && ($active$$3$$.length || ($active$$3$$ = this.$active$), this.options.selected = $anchor$$3_index$$170$$, $anchor$$3_index$$170$$ = $active$$3$$.find(".oj-tabs-anchor")[0], this.$_eventHandler$({target:$anchor$$3_index$$170$$, currentTarget:$anchor$$3_index$$170$$, preventDefault:$$$$29$$.noop}))
    }, $_findActive$:function($index$$171$$) {
      return this.$tabs$.eq($index$$171$$)
    }, $_createCloseIcons$:function() {
      if(this.options.removable) {
        var $removeCueText$$ = this.options.removeCueText;
        this.$tabs$.not(".oj-disabled").each(function($index$$172_rmId$$) {
          var $div$$5$$ = $$$$29$$(this).find("\x3e :first-child");
          $index$$172_rmId$$ = "ojtabs-id_rm_" + $index$$172_rmId$$;
          $$$$29$$(this).attr("aria-describedby", $index$$172_rmId$$);
          $$$$29$$("\x3ca href\x3d'#'\x3e").addClass("oj-tabs-icon oj-component-icon oj-clickable-icon oj-tabs-close-icon").attr({id:$index$$172_rmId$$, tabIndex:"-1", "aria-label":$removeCueText$$, role:"presentation"}).appendTo($div$$5$$)
        })
      }
    }, $_destroyCloseIcons$:function() {
      this.$tabs$.find("oj-tabs-close-icon").remove()
    }, $_destroyTabBar$:function() {
      this.$_tabMaxWidthApplied$ = !1;
      this.$_hasResizeListener$ && ($oj$$29$$.$DomUtils$.$removeResizeListener$(this.element[0], $$$$29$$.proxy(this.$_handleResize$, this)), this.$_hasResizeListener$ = !1, this.$_originalWidth$ = void 0);
      this.$conveyor$ ? (this.$conveyor$.ojConveyorBelt("destroy"), this.$conveyor$.remove(), this.$active$ = this.$conveyor$ = null) : this.element.children(".oj-tabs-nav").remove()
    }, _destroy:function() {
      var $orientation$$2$$ = this.options.orientation;
      "vertical" == $orientation$$2$$ ? this.element.removeClass("oj-tabs-vertical oj-component oj-helper-clearfix") : this.element.removeClass("oj-tabs oj-component ");
      this.$_destroyTabBar$();
      var $self$$95$$ = this;
      this.$panels$.each(function() {
        $$$$29$$(this).removeAttr("tabIndex").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("role").removeClass("oj-active oj-disabled oj-tabs-panel").css("display", "");
        "vertical" == $orientation$$2$$ && $$$$29$$(this).css("margin-left", "").css("min-height", "");
        var $header$$8$$ = $$$$29$$(this).find("\x3e :first-child");
        $header$$8$$.css("display", "").removeAttr("aria-hidden");
        $self$$95$$.$_removePrefixIds$($header$$8$$)
      })
    }, enable:function($index$$173$$) {
      var $disabled$$5$$ = this.options.disabled;
      !1 !== $disabled$$5$$ && ($disabled$$5$$ = void 0 === $index$$173$$ ? !1 : Array.isArray($disabled$$5$$) ? $$$$29$$.map($disabled$$5$$, function($num$$7$$) {
        return $num$$7$$ !== $index$$173$$ ? $num$$7$$ : null
      }) : $$$$29$$.map(this.$tabs$, function($li$$2$$, $num$$8$$) {
        return $num$$8$$ !== $index$$173$$ ? $num$$8$$ : null
      }), this.$_setupDisabled$($disabled$$5$$))
    }, disable:function($index$$174$$) {
      var $disabled$$6$$ = this.options.disabled;
      if(!0 !== $disabled$$6$$) {
        if(void 0 === $index$$174$$) {
          $disabled$$6$$ = !0
        }else {
          if(-1 !== $$$$29$$.inArray($index$$174$$, $disabled$$6$$)) {
            return
          }
          $disabled$$6$$ = Array.isArray($disabled$$6$$) ? $$$$29$$.merge([$index$$174$$], $disabled$$6$$).sort() : [$index$$174$$]
        }
        this.$_setupDisabled$($disabled$$6$$)
      }
    }, $_setRemovable$:function($removable$$) {
      $removable$$ !== this.options.removable && (this.options.removable = $removable$$, this.refresh())
    }, $_removeTabHandler$:function($event$$312$$) {
      var $tab$$4$$ = $$$$29$$($event$$312$$.currentTarget).closest("li"), $panel$$1$$ = this.$_getPanelForTab$($tab$$4$$), $eventData$$12$$ = {header:$tab$$4$$, content:$panel$$1$$};
      if($tab$$4$$ && !1 !== this._trigger("beforeRemove", $event$$312$$, $eventData$$12$$)) {
        var $idxRmTab$$ = this.$tabs$.index($tab$$4$$);
        $tab$$4$$.hasClass("oj-tabs-active") ? this.options.selected = this.$_activateNextTab$($idxRmTab$$) : $idxRmTab$$ < this.options.selected && (this.options.selected = Math.max(0, this.options.selected - 1));
        if(Array.isArray(this.options.disabled)) {
          for(var $adis$$ = this.options.disabled, $i$$260$$ = $adis$$.length - 1;0 <= $i$$260$$;$i$$260$$--) {
            $idxRmTab$$ == $adis$$[$i$$260$$] ? this.options.disabled = $adis$$ = $adis$$.splice($i$$260$$, 1) : $idxRmTab$$ < $adis$$[$i$$260$$] && ($adis$$[$i$$260$$] -= 1)
          }
        }
        $panel$$1$$.remove();
        $tab$$4$$.remove();
        this.$_initialActivate$ = this.options.selected;
        this.refresh();
        this.$active$.focus();
        this._trigger("afterRemove", $event$$312$$, $eventData$$12$$)
      }
    }, addTab:function($newTab_options$$288$$) {
      this.element.append($newTab_options$$288$$);
      $newTab_options$$288$$ = this.options;
      if(-1 == $newTab_options$$288$$.selected) {
        $newTab_options$$288$$.selected = this.$tabs$.length;
        var $disabledTabs$$1$$ = this.$tabs$.filter(".oj-disabled"), $self$$96$$ = this;
        $newTab_options$$288$$.disabled = $$$$29$$.map($disabledTabs$$1$$, function($li$$3$$) {
          return $self$$96$$.$tabs$.index($li$$3$$)
        })
      }
      this.refresh()
    }, $_setupReorder$:function() {
      var $tabBar$$ = this.$conveyor$ ? this.$conveyor$.find(".oj-tabs-nav") : this.element.children(".oj-tabs-nav");
      if(this.options.reorderable) {
        var $self$$97$$ = this;
        $tabBar$$.sortable({axis:"horizontal" == $self$$97$$.options.orientation ? "x" : "y", stop:function($event$$313$$, $ui$$27$$) {
          var $mvTab_prevTab$$ = $ui$$27$$.item, $mvContent$$ = $self$$97$$.$_getPanelForTab$($mvTab_prevTab$$), $mvTab_prevTab$$ = $mvTab_prevTab$$.prev();
          $mvTab_prevTab$$.length ? $self$$97$$.$_getPanelForTab$($mvTab_prevTab$$).after($mvContent$$) : 0 < $self$$97$$.$panels$.length && $self$$97$$.$panels$.first().before($mvContent$$);
          var $arr$$22$$ = [];
          $tabBar$$.children(".oj-disabled").each(function() {
            $arr$$22$$.push($$$$29$$(this).index())
          });
          $self$$97$$.options.disabled = $arr$$22$$;
          $self$$97$$.options.selected = $tabBar$$.children(".oj-tabs-active").index()
        }})
      }else {
        $tabBar$$.sortable({disabled:!0})
      }
    }, $_setupOrientation$:function($value$$190$$) {
      $value$$190$$ || ($value$$190$$ = this.options.orientation);
      if("horizontal" == $value$$190$$) {
        "vertical" == this.options.orientation && this.$panels$ && this.$panels$.each(function() {
          $$$$29$$(this).css("margin-left", "").css("min-height", "")
        }), this.element.addClass("oj-tabs oj-component")
      }else {
        if("vertical" == $value$$190$$) {
          this.element.addClass("oj-tabs-vertical oj-component oj-helper-clearfix")
        }else {
          return
        }
      }
      this.options.orientation = $value$$190$$
    }, $_sanitizeSelector$:function($hash$$1$$) {
      return $hash$$1$$ ? $hash$$1$$.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$\x26") : ""
    }, $_getPanelForTab$:function($id$$32_tab$$5$$) {
      $id$$32_tab$$5$$ = $$$$29$$($id$$32_tab$$5$$).attr("aria-controls");
      return this.element.find(this.$_sanitizeSelector$("#" + $id$$32_tab$$5$$))
    }, $_addPrefixId$:function($elem$$44$$) {
      0 > $elem$$44$$.id.indexOf("ojtabs-id_") && $$$$29$$($elem$$44$$).attr("id", "ojtabs-id_" + $elem$$44$$.id)
    }, $_removePrefixId$:function($elem$$45$$) {
      0 == $elem$$45$$.id.indexOf("ojtabs-id_") && $$$$29$$($elem$$45$$).attr("id", $elem$$45$$.id.substring(10))
    }, $_removePrefixIds$:function($header$$9$$) {
      var $self$$98$$ = this, $ohd$$1$$ = $header$$9$$[0];
      $ohd$$1$$.id && this.$_removePrefixId$($ohd$$1$$);
      $header$$9$$.find("[id]").each(function() {
        $self$$98$$.$_removePrefixId$(this)
      })
    }, getNodeBySubId:function($index$$175_locator$$21$$) {
      if(null == $index$$175_locator$$21$$) {
        return this.element ? this.element[0] : null
      }
      var $subId$$13$$ = $index$$175_locator$$21$$.subId;
      $index$$175_locator$$21$$ = $index$$175_locator$$21$$.index;
      switch($subId$$13$$) {
        case "oj-conveyorbelt":
          return this.$conveyor$ ? this.$conveyor$[0] : null;
        case "oj-tabs-panel":
          return this.$panels$[$index$$175_locator$$21$$];
        case "oj-tabs-title":
          return this.$titles$[$index$$175_locator$$21$$];
        case "oj-tabs-close-icon":
          return this.$tabs$.eq($index$$175_locator$$21$$).find("." + $subId$$13$$)[0]
      }
      return null
    }, $_getTabsWidth$:function() {
      return this.element[0].clientWidth
    }, $_isOverflow$:function() {
      return this.$_originalWidth$ > this.$_getTabsWidth$()
    }, $_isMaxWidthApplied$:$JSCompiler_get$$("$_tabMaxWidthApplied$"), $_setMaxWidthApplied$:$JSCompiler_set$$("$_tabMaxWidthApplied$"), $_getTabMaxWidth$:function() {
      var $max$$8$$ = Math.floor(this.$_getTabsWidth$() / this.$tabs$.length);
      this.options.removable && ($max$$8$$ -= 28);
      return $max$$8$$
    }, $_applyTabMaxWidth$:function() {
      if(!this.$_tabMaxWidthApplied$) {
        var $maxWidth$$2$$ = this.$_getTabMaxWidth$();
        this.$titles$.each(function() {
          $$$$29$$(this).css("max-width", "" + $maxWidth$$2$$ + "px").addClass("oj-tabs-title-overflow")
        });
        this.$_setMaxWidthApplied$(!0)
      }
    }, $_removeTabMaxWidth$:function() {
      this.$_tabMaxWidthApplied$ && (this.$titles$.each(function() {
        $$$$29$$(this).css("max-width", "").removeClass("oj-tabs-title-overflow")
      }), this.$_setMaxWidthApplied$(!1))
    }, $_logMessage$:$JSCompiler_emptyFn$$(), $_handleResize$:function() {
      this.$_isOverflow$() ? this.$_applyTabMaxWidth$() : this.$_removeTabMaxWidth$()
    }, $_getTabbarWrapper$:function() {
      var $ulParent$$ = this.$tablist$.parent();
      $ulParent$$.hasClass("oj-tabs-conveyor") || ($ulParent$$ = this.$tablist$.wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-conveyor"));
      return $ulParent$$
    }, $_isProgressive$:function() {
      return"auto" == this.options.truncation || "progressive" == this.options.truncation
    }, $_truncateBeforeOverflow$:function() {
      "horizontal" == this.options.orientation && (0 < this.$tabs$.length && this.$_isProgressive$()) && ($oj$$29$$.$DomUtils$.$addResizeListener$(this.element[0], $$$$29$$.proxy(this.$_handleResize$, this)), this.$_hasResizeListener$ = !0, this.$_originalWidth$ = this.$_getTabbarWrapper$()[0].scrollWidth, this.$_isOverflow$() && this.$_applyTabMaxWidth$())
    }, $_fireOptionChange$:function($key$$106$$, $previousValue$$7$$, $value$$191$$, $originalEvent$$4$$) {
      this._trigger("optionChange", $originalEvent$$4$$, {option:$key$$106$$, previousValue:$previousValue$$7$$, value:$value$$191$$, optionMetadata:{writeback:$originalEvent$$4$$ ? "shouldWrite" : "shouldNotWrite"}})
    }})
  })()
});
