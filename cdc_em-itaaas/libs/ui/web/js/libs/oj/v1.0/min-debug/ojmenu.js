define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$17$$, $$$$17$$) {
  (function() {
    $oj$$17$$.$__registerWidget$("oj.ojMenu", $$$$17$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cul\x3e", delay:300, role:"menu", widgetEventPrefix:"oj", $_MENU_CLICK_AWAY_HANDLER_KEY$:"ojMenuClickAwayHandler", options:{menuPosition:{my:"left top", at:"left bottom"}, menuSelector:"ul", submenuPosition:{my:"left top", at:"right top"}, beforeShow:null, blur:null, focus:null, select:null}, _create:function() {
      this.$activeMenu$ = this.element;
      this.$mouseHandled$ = !1;
      this.element.uniqueId().addClass("oj-menu oj-component").toggleClass("oj-menu-icons", !!this.element.find(".oj-component-icon").length).attr({role:this.role, tabIndex:"0"});
      this._on(!0, {"mousedown .oj-menu-item":function($event$$176$$) {
        this.options.disabled && $event$$176$$.preventDefault()
      }, click:function($event$$177$$) {
        this.options.disabled && $event$$177$$.preventDefault()
      }, keydown:function($event$$178$$) {
        this.options.disabled && $event$$178$$.keyCode === $$$$17$$.ui.keyCode.ESCAPE && this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$178$$)
      }});
      this.options.disabled && this.element.addClass("oj-disabled").attr("aria-disabled", "true");
      this._on({"mousedown .oj-menu-item \x3e a":function($event$$179$$) {
        $event$$179$$.preventDefault()
      }, "click .oj-disabled \x3e a":function($event$$180$$) {
        $event$$180$$.preventDefault()
      }, click:function() {
        this.$mouseHandled$ = !1
      }, "click .oj-menu-item:has(a)":function($event$$182$$) {
        var $target$$76$$ = $$$$17$$($event$$182$$.target).closest(".oj-menu-item");
        !this.$mouseHandled$ && $target$$76$$.not(".oj-disabled").length && (this.$mouseHandled$ = !0, this.$active$ && this.$active$.closest($target$$76$$).length && this.$active$.get(0) != $target$$76$$.get(0) || ($target$$76$$.has(".oj-menu").length ? this.expand($event$$182$$) : (this.select($event$$182$$), this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.$active$ && 1 === this.$active$.parents(".oj-menu").length && clearTimeout(this.$timer$)))))
      }, "mouseenter .oj-menu-item":function($event$$183$$) {
        var $target$$77$$ = $$$$17$$($event$$183$$.currentTarget);
        $target$$77$$.siblings().children(".oj-active").removeClass("oj-active");
        this.focus($event$$183$$, $target$$77$$)
      }, mouseleave:this.collapseAll, "mouseleave .oj-menu":this.collapseAll, focus:function($event$$184$$, $keepActiveItem$$) {
        var $item$$4$$ = this.$active$ || this.element.children(".oj-menu-item").eq(0);
        $keepActiveItem$$ || this.focus($event$$184$$, $item$$4$$)
      }, keydown:this.$_keydown$, keyup:function($event$$185$$) {
        if($event$$185$$.keyCode == $$$$17$$.ui.keyCode.ENTER || $event$$185$$.keyCode == $$$$17$$.ui.keyCode.SPACE) {
          this.$__spaceEnterDownInMenu$ = !1
        }
      }});
      this.$_setup$();
      this.$_registerClickAwayHandler$();
      this._super()
    }, $_registerClickAwayHandler$:function() {
      var $clikAwayHandler$$ = this.document.data(this.$_MENU_CLICK_AWAY_HANDLER_KEY$);
      $clikAwayHandler$$ || ($clikAwayHandler$$ = function $$clikAwayHandler$$$($event$$186$$) {
        if("focus" === $event$$186$$.type || "mousedown" === $event$$186$$.type || 93 == $event$$186$$.which || 121 == $event$$186$$.which && $event$$186$$.shiftKey || 93 == $event$$186$$.keyCode) {
          var $openPopupMenus$$ = $_openPopupMenus$$.slice(0, $_openPopupMenus$$.length);
          $$$$17$$.each($openPopupMenus$$, function($index$$143$$, $menu$$9$$) {
            $$$$17$$($event$$186$$.target).closest($menu$$9$$.element).length || "keydown" !== $event$$186$$.type && ("mousedown" !== $event$$186$$.type || 3 !== $event$$186$$.which) && $$$$17$$($event$$186$$.target).closest($menu$$9$$.$_launcher$).length || ($menu$$9$$.collapseAll($event$$186$$), $menu$$9$$.$_launcher$ && $menu$$9$$.$__dismiss$($event$$186$$))
          })
        }
      }, this.document.data(this.$_MENU_CLICK_AWAY_HANDLER_KEY$, $clikAwayHandler$$), this.document[0].addEventListener("keydown", $clikAwayHandler$$, !0), this.document[0].addEventListener("mousedown", $clikAwayHandler$$, !0), this.document[0].addEventListener("focus", $clikAwayHandler$$, !0))
    }, $_unregisterClickAwayHandler$:function() {
      var $clikAwayHandler$$1$$ = this.document.data(this.$_MENU_CLICK_AWAY_HANDLER_KEY$);
      $clikAwayHandler$$1$$ && 1 === $$$$17$$(":oj-menu").length && (this.document[0].removeEventListener("keydown", $clikAwayHandler$$1$$, !0), this.document[0].removeEventListener("mousedown", $clikAwayHandler$$1$$, !0), this.document[0].removeEventListener("focus", $clikAwayHandler$$1$$, !0), this.document.removeData(this.$_MENU_CLICK_AWAY_HANDLER_KEY$))
    }, _destroy:function() {
      this.element.removeAttr("aria-activedescendant").find(".oj-menu").addBack().removeClass("oj-menu oj-component oj-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
      this.element.find(".oj-menu-item").removeClass("oj-menu-item").removeAttr("role").children("a").removeAttr("aria-disabled").removeUniqueId().removeClass("oj-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
        var $elem$$22$$ = $$$$17$$(this);
        $elem$$22$$.data("oj-ojMenu-submenu-icon") && $elem$$22$$.remove()
      });
      this.element.find("a").removeAttr("aria-expanded");
      this.element.find(".oj-menu-divider").removeClass("oj-menu-divider").removeAttr("role");
      this.$_unregisterClickAwayHandler$();
      0 <= $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1)
    }, $_keydown$:function($event$$187$$) {
      function $escape$$1$$($value$$173$$) {
        return $value$$173$$.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$\x26")
      }
      var $match$$16_prev$$2$$, $activeItemId_character$$, $skip_topLevelAnchorSelector$$, $regex$$1$$, $preventDefault$$ = !0;
      switch($event$$187$$.keyCode) {
        case $$$$17$$.ui.keyCode.HOME:
          this.$_move$("first", "first", $event$$187$$);
          break;
        case $$$$17$$.ui.keyCode.END:
          this.$_move$("last", "last", $event$$187$$);
          break;
        case $$$$17$$.ui.keyCode.UP:
          this.previous($event$$187$$);
          break;
        case $$$$17$$.ui.keyCode.DOWN:
          this.next($event$$187$$);
          break;
        case $$$$17$$.ui.keyCode.LEFT:
        ;
        case $$$$17$$.ui.keyCode.RIGHT:
          $event$$187$$.keyCode === $$$$17$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? this.$active$ && !this.$active$.is(".oj-disabled") && this.expand($event$$187$$) : this.collapse($event$$187$$);
          break;
        case $$$$17$$.ui.keyCode.ENTER:
        ;
        case $$$$17$$.ui.keyCode.SPACE:
          this.$_activate$($event$$187$$);
          this.$__spaceEnterDownInMenu$ = !0;
          var $self$$73$$ = this;
          setTimeout(function() {
            $self$$73$$.$__spaceEnterDownInMenu$ = !1
          }, 100);
          break;
        case $$$$17$$.ui.keyCode.ESCAPE:
          this.$_launcher$ ? ($activeItemId_character$$ = this.element.attr("aria-activedescendant"), $skip_topLevelAnchorSelector$$ = "#" + this.element.attr("id") + "\x3e*\x3ea", $activeItemId_character$$ && !$$$$17$$("#" + $activeItemId_character$$).is($skip_topLevelAnchorSelector$$) ? this.collapse($event$$187$$) : this.$_focusLauncherAndDismiss$($event$$187$$)) : this.collapse($event$$187$$);
          break;
        default:
          $preventDefault$$ = !1, $match$$16_prev$$2$$ = this.$previousFilter$ || "", $activeItemId_character$$ = String.fromCharCode($event$$187$$.keyCode), $skip_topLevelAnchorSelector$$ = !1, clearTimeout(this.$filterTimer$), $activeItemId_character$$ === $match$$16_prev$$2$$ ? $skip_topLevelAnchorSelector$$ = !0 : $activeItemId_character$$ = $match$$16_prev$$2$$ + $activeItemId_character$$, $regex$$1$$ = RegExp("^" + $escape$$1$$($activeItemId_character$$), "i"), $match$$16_prev$$2$$ = this.$activeMenu$.children(".oj-menu-item").filter(function() {
            return $regex$$1$$.test($$$$17$$(this).children("a").text())
          }), $match$$16_prev$$2$$ = $skip_topLevelAnchorSelector$$ && -1 !== $match$$16_prev$$2$$.index(this.$active$.next()) ? this.$active$.nextAll(".oj-menu-item") : $match$$16_prev$$2$$, $match$$16_prev$$2$$.length || ($activeItemId_character$$ = String.fromCharCode($event$$187$$.keyCode), $regex$$1$$ = RegExp("^" + $escape$$1$$($activeItemId_character$$), "i"), $match$$16_prev$$2$$ = this.$activeMenu$.children(".oj-menu-item").filter(function() {
            return $regex$$1$$.test($$$$17$$(this).children("a").text())
          })), $match$$16_prev$$2$$.length ? (this.focus($event$$187$$, $match$$16_prev$$2$$), 1 < $match$$16_prev$$2$$.length ? (this.$previousFilter$ = $activeItemId_character$$, this.$filterTimer$ = this._delay(function() {
            delete this.$previousFilter$
          }, 1E3)) : delete this.$previousFilter$) : delete this.$previousFilter$
      }
      $preventDefault$$ && $event$$187$$.preventDefault()
    }, $_activate$:function($event$$188$$) {
      this.$active$.is(".oj-disabled") || (this.$active$.children("a[aria-haspopup\x3d'true']").length ? this.expand($event$$188$$) : this.select($event$$188$$))
    }, refresh:function() {
      this._super();
      this.$_setup$()
    }, $_setup$:function() {
      this.$isRtl$ = "rtl" === this.$_GetReadingDirection$();
      var $self$$74$$ = this, $children$$4_submenus$$ = this.element.find(this.options.menuSelector);
      $children$$4_submenus$$.filter(":not(.oj-menu)").addClass("oj-menu oj-component").hide().attr({role:this.role, "aria-hidden":"true"}).each(function() {
        var $menu$$10$$ = $$$$17$$(this), $item$$5_itemId$$ = $self$$74$$.$_getSubmenuItem$($menu$$10$$), $submenuIcon$$ = $$$$17$$("\x3cspan\x3e");
        $submenuIcon$$.addClass("oj-menu-submenu-icon oj-component-icon").data("oj-ojMenu-submenu-icon", !0);
        $item$$5_itemId$$.attr("aria-haspopup", "true").attr("aria-expanded", "false").prepend($submenuIcon$$);
        $item$$5_itemId$$ = $item$$5_itemId$$.attr("id");
        $menu$$10$$.attr("aria-labelledby", $item$$5_itemId$$)
      });
      $children$$4_submenus$$ = $children$$4_submenus$$.add(this.element).children();
      $children$$4_submenus$$.filter(".oj-menu-divider").has("a").removeClass("oj-menu-divider oj-menu-item").removeAttr("role");
      $children$$4_submenus$$.filter(":not(.oj-menu-item):has(a)").addClass("oj-menu-item").attr("role", "presentation").children("a").uniqueId().attr({tabIndex:"-1", role:"menuitem"});
      $children$$4_submenus$$.filter(":not(.oj-menu-item)").each(function() {
        var $item$$6$$ = $$$$17$$(this);
        /[^\-\u2014\u2013\s]/.test($item$$6$$.text()) || $item$$6$$.addClass("oj-menu-divider").attr("role", "separator")
      });
      $children$$4_submenus$$.filter(".oj-disabled").children("a").attr("aria-disabled", "true");
      $children$$4_submenus$$.filter(":not(.oj-disabled)").children("a").removeAttr("aria-disabled");
      this.$active$ && !$$$$17$$.contains(this.element[0], this.$active$[0]) && this.blur()
    }, $_getSubmenuItem$:function($submenu$$) {
      return $submenu$$.prev("a")
    }, $_itemRole$:$JSCompiler_returnArg$$("menuitem"), focus:function($event$$189$$, $item$$7$$) {
      var $focused$$4_nested$$;
      this.blur($event$$189$$, $event$$189$$ && "focus" === $event$$189$$.type);
      this.$active$ = $item$$7$$.first();
      $focused$$4_nested$$ = this.$active$.children("a").addClass("oj-focus");
      this.role && this.element.attr("aria-activedescendant", $focused$$4_nested$$.attr("id"));
      this.$active$.parent().closest(".oj-menu-item").children("a:first").addClass("oj-active");
      $event$$189$$ && "keydown" === $event$$189$$.type ? this.$_close$() : this.$timer$ = this._delay(function() {
        this.$_close$()
      }, this.delay);
      $focused$$4_nested$$ = $item$$7$$.children(".oj-menu");
      $focused$$4_nested$$.length && ($event$$189$$ && /^mouse/.test($event$$189$$.type) && !this.$active$.hasClass("oj-disabled")) && this.$_startOpening$($focused$$4_nested$$);
      this.$activeMenu$ = $item$$7$$.parent();
      this._trigger("focus", $event$$189$$, {item:$item$$7$$})
    }, blur:function($event$$190$$, $JSCompiler_OptimizeArgumentsArray_p4$$) {
      $JSCompiler_OptimizeArgumentsArray_p4$$ || clearTimeout(this.$timer$);
      this.$active$ && (this.$active$.children("a").removeClass("oj-focus"), this.$active$ = null, this._trigger("blur", $event$$190$$, {item:this.$active$}))
    }, $_focusLauncherAndDismiss$:function($event$$191$$) {
      this.$_launcher$.focus();
      this.$__dismiss$($event$$191$$)
    }, $__dismiss$:function($event$$192$$) {
      this.element.hide().attr("aria-hidden", "true");
      this.$_launcher$ = void 0;
      this._trigger("__dismiss", $event$$192$$, {});
      0 <= $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1)
    }, show:function($event$$193$$, $params$$15$$) {
      this.$_popupInited$ || (this.$_popupInit$(), this.$_popupInited$ = !0);
      if($params$$15$$ && $params$$15$$.launcher) {
        var $launcher$$7$$ = $params$$15$$.launcher;
        if(this._trigger("beforeShow", $event$$193$$, {launcher:$launcher$$7$$})) {
          var $launcher$$7$$ = "string" === $$$$17$$.type($launcher$$7$$) ? $$$$17$$("#" + $launcher$$7$$) : $launcher$$7$$, $currentMenu$$ = this.element[0], $focusFirstItem_openPopupMenus$$1_position$$6$$ = $_openPopupMenus$$.slice(0, $_openPopupMenus$$.length);
          $$$$17$$.each($focusFirstItem_openPopupMenus$$1_position$$6$$, function($index$$144$$, $menu$$11$$) {
            $menu$$11$$.element[0] !== $currentMenu$$ && ($menu$$11$$.collapseAll($event$$193$$), $menu$$11$$.$_launcher$ && $menu$$11$$.$__dismiss$($event$$193$$))
          });
          $focusFirstItem_openPopupMenus$$1_position$$6$$ = $$$$17$$.extend({}, this.options.menuPosition);
          null == $focusFirstItem_openPopupMenus$$1_position$$6$$.of && ($focusFirstItem_openPopupMenus$$1_position$$6$$.of = $event$$193$$ && "contextmenu" === $event$$193$$.type ? $event$$193$$ : $launcher$$7$$);
          this.element.show().removeAttr("aria-hidden").position($focusFirstItem_openPopupMenus$$1_position$$6$$);
          (($focusFirstItem_openPopupMenus$$1_position$$6$$ = "firstItem" === $params$$15$$.focus) || "menu" === $params$$15$$.focus) && this.element.focus();
          $focusFirstItem_openPopupMenus$$1_position$$6$$ ? this.focus($event$$193$$, this.element.children().first()) : this.blur($event$$193$$);
          this.$_launcher$ = $launcher$$7$$;
          $_openPopupMenus$$.push(this)
        }
      }
    }, $_popupInit$:function() {
      this.element.css({position:"absolute", zIndex:999})
    }, $_startOpening$:function($submenu$$1$$) {
      clearTimeout(this.$timer$);
      "true" === $submenu$$1$$.attr("aria-hidden") && (this.$timer$ = this._delay(function() {
        this.$_close$();
        this.$_open$($submenu$$1$$)
      }, this.delay))
    }, $_open$:function($submenu$$2$$) {
      var $position$$7$$ = $$$$17$$.extend({of:this.$active$}, this.options.submenuPosition);
      clearTimeout(this.$timer$);
      this.element.find(".oj-menu").not($submenu$$2$$.parents(".oj-menu")).hide().attr("aria-hidden", "true");
      $submenu$$2$$.show().removeAttr("aria-hidden").position($position$$7$$);
      this.$_getSubmenuItem$($submenu$$2$$).attr("aria-expanded", "true");
      !this.$_launcher$ && 0 > $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.push(this)
    }, collapseAll:function($event$$194$$, $all$$1$$) {
      this.$_collapseAll$($event$$194$$, $all$$1$$, this.delay)
    }, $_collapseAll$:function($event$$195$$, $all$$2$$, $delay$$3$$) {
      function $collapseMenu$$() {
        var $currentMenu$$1$$ = $all$$2$$ ? $self$$75$$.element : $$$$17$$($event$$195$$ && $event$$195$$.target).closest($self$$75$$.element.find(".oj-menu"));
        $currentMenu$$1$$.length || ($currentMenu$$1$$ = $self$$75$$.element);
        $self$$75$$.$_close$($currentMenu$$1$$);
        $self$$75$$.blur($event$$195$$);
        $self$$75$$.$activeMenu$ = $currentMenu$$1$$
      }
      clearTimeout(this.$timer$);
      var $self$$75$$ = this;
      $delay$$3$$ ? this.$timer$ = this._delay($collapseMenu$$, $delay$$3$$) : $collapseMenu$$()
    }, $_close$:function($startMenu$$) {
      $startMenu$$ || ($startMenu$$ = this.$active$ ? this.$active$.parent() : this.element);
      var $menus$$1$$ = $startMenu$$.find(".oj-menu");
      $menus$$1$$.hide().attr("aria-hidden", "true");
      this.$_getSubmenuItem$($menus$$1$$).attr("aria-expanded", "false");
      $startMenu$$.find("a.oj-active").removeClass("oj-active");
      this.$_launcher$ || 0 <= $_openPopupMenus$$.indexOf(this) && $startMenu$$ === this.element && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1)
    }, collapse:function($event$$196$$) {
      var $newItem$$ = this.$active$ && this.$active$.parent().closest(".oj-menu-item", this.element);
      $newItem$$ && $newItem$$.length && (this.$_close$(), this.focus($event$$196$$, $newItem$$))
    }, expand:function($event$$197$$) {
      var $newItem$$1$$ = this.$active$ && this.$active$.children(".oj-menu ").children(".oj-menu-item").first();
      $newItem$$1$$ && $newItem$$1$$.length && (this.$_open$($newItem$$1$$.parent()), this._delay(function() {
        this.focus($event$$197$$, $newItem$$1$$)
      }))
    }, next:function($event$$198$$) {
      this.$_move$("next", "first", $event$$198$$)
    }, previous:function($event$$199$$) {
      this.$_move$("prev", "last", $event$$199$$)
    }, $_isFirstItem$:function() {
      return this.$active$ && !this.$active$.prevAll(".oj-menu-item").length
    }, $_isLastItem$:function() {
      return this.$active$ && !this.$active$.nextAll(".oj-menu-item").length
    }, $_move$:function($direction$$9$$, $filter$$3$$, $event$$200$$) {
      var $next$$2$$;
      this.$active$ && ($next$$2$$ = "first" === $direction$$9$$ || "last" === $direction$$9$$ ? this.$active$["first" === $direction$$9$$ ? "prevAll" : "nextAll"](".oj-menu-item").eq(-1) : this.$active$[$direction$$9$$ + "All"](".oj-menu-item").eq(0));
      $next$$2$$ && $next$$2$$.length && this.$active$ || ($next$$2$$ = this.$activeMenu$.children(".oj-menu-item")[$filter$$3$$]());
      this.focus($event$$200$$, $next$$2$$)
    }, select:function($event$$201$$) {
      if(!this.$active$ && $event$$201$$ && $event$$201$$.target) {
        var $menuItem_ui$$7$$ = $$$$17$$($event$$201$$.target).closest(".oj-menu-item");
        $menuItem_ui$$7$$.closest(this.element).length && (this.$active$ = $menuItem_ui$$7$$)
      }
      this.$active$ && ($menuItem_ui$$7$$ = {item:this.$active$}, this.$active$.has(".oj-menu").length || this.$_collapseAll$($event$$201$$, !0), this.$_launcher$ && ($menuItem_ui$$7$$.item.children(this.options.menuSelector).length || this.$_focusLauncherAndDismiss$($event$$201$$)), this._trigger("select", $event$$201$$, $menuItem_ui$$7$$))
    }});
    var $_openPopupMenus$$ = []
  })()
});
