define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$21$$, $$$$21$$) {
  (function() {
    function $_addSheet$$($opts$$18$$) {
      var $tmp$$2$$ = !1, $isNew$$ = !0;
      $opts$$18$$.$str$ && ($opts$$18$$.title && ($tmp$$2$$ = $$$$21$$("style[id\x3d'" + $opts$$18$$.title + "-stylesheet']")[0]), $tmp$$2$$ ? $isNew$$ = !1 : ($tmp$$2$$ = document.createElement("style"), $tmp$$2$$.setAttribute("type", "text/css"), $opts$$18$$.title && $tmp$$2$$.setAttribute("id", $opts$$18$$.title + "-stylesheet")), $tmp$$2$$.styleSheet ? $isNew$$ ? (document.getElementsByTagName("head")[0].appendChild($tmp$$2$$), $tmp$$2$$.styleSheet.cssText = $opts$$18$$.$str$) : $tmp$$2$$.styleSheet.cssText = 
      $tmp$$2$$.styleSheet.cssText + " " + $opts$$18$$.$str$ : ($tmp$$2$$.appendChild(document.createTextNode($opts$$18$$.$str$)), document.getElementsByTagName("head")[0].appendChild($tmp$$2$$)))
    }
    function $_addKeyFilter$$($obj$$52$$) {
      $_aKeyHandlerStack$$.push($obj$$52$$);
      $$$$21$$($obj$$52$$.$_selector$).keydown($_KeyFilterHandler$$)
    }
    function $_KeyFilterHandler$$($e$$71$$) {
      var $s$$10$$ = "";
      $e$$71$$.ctrlKey ? $s$$10$$ += "ctrl+" : $e$$71$$.shiftKey && ($s$$10$$ += "shift+");
      var $key$$84$$ = $e$$71$$.which;
      switch($key$$84$$) {
        case 32:
          $s$$10$$ += "space";
          break;
        case 37:
          $s$$10$$ += "left";
          break;
        case 38:
          $s$$10$$ += "up";
          break;
        case 39:
          $s$$10$$ += "right";
          break;
        case 40:
          $s$$10$$ += "down";
          break;
        case 46:
          $s$$10$$ += "del";
          break;
        case 33:
          $s$$10$$ += "pgup";
          break;
        case 34:
          $s$$10$$ += "pgdn";
          break;
        case 35:
          $s$$10$$ += "end";
          break;
        case 36:
          $s$$10$$ += "home";
          break;
        case 113:
          $s$$10$$ += "f" + (1 - (112 - $key$$84$$))
      }
      if(0 !== $s$$10$$.length) {
        var $retHandler$$ = void 0;
        $$$$21$$.each($_aKeyHandlerStack$$, function($i$$225$$, $obj$$53$$) {
          if($obj$$53$$.$_this$.$_data$.ui.$focused$ && $obj$$53$$.$_handler$[$s$$10$$]) {
            return $e$$71$$.preventDefault(), $retHandler$$ = $obj$$53$$.$_handler$[$s$$10$$].call($obj$$53$$.$_this$, $e$$71$$), !1
          }
        });
        return $retHandler$$
      }
    }
    function $_removeKeyFilter$$($selector$$17$$) {
      $$$$21$$.each($_aKeyHandlerStack$$, function($i$$226$$) {
        if($_aKeyHandlerStack$$[$i$$226$$].$_selector$ === $selector$$17$$) {
          return $$$$21$$($selector$$17$$).off("keydown"), $_aKeyHandlerStack$$[$i$$226$$] = null, $_aKeyHandlerStack$$.splice($i$$226$$, 1), !1
        }
      })
    }
    var $_arMenuCmdMap$$ = {cut:"ojtreecut", copy:"ojtreecopy", paste:"ojtreepaste", remove:"ojtreeremove", rename:"ojtreerename"}, $_aEvNames$$ = "select deselect hover dehover expand collapse loaded move remove deselectAll rename refresh expandAll collapseAll destroy create before remove cut copy paste".split(" "), $scrollbar_width$$, $e1$$, $e2$$;
    $$$$21$$(function() {
      /msie/.test(navigator.userAgent.toLowerCase()) ? ($e1$$ = $$$$21$$('\x3ctextarea cols\x3d"10" rows\x3d"2"\x3e\x3c/textarea\x3e').css({position:"absolute", top:-1E3, left:0}).appendTo("body"), $e2$$ = $$$$21$$('\x3ctextarea cols\x3d"10" rows\x3d"2" style\x3d"overflow: hidden;"\x3e\x3c/textarea\x3e').css({position:"absolute", top:-1E3, left:0}).appendTo("body"), $scrollbar_width$$ = $e1$$.width() - $e2$$.width(), $e1$$.add($e2$$).remove()) : ($e1$$ = $$$$21$$("\x3cdiv /\x3e").css({width:100, 
      height:100, overflow:"auto", position:"absolute", top:-1E3, left:0}).prependTo("body").append("\x3cdiv /\x3e").find("div").css({width:"100%", height:200}), $scrollbar_width$$ = 100 - $e1$$.width(), $e1$$.parent().remove())
    });
    var $_aKeyHandlerStack$$ = [], $_instance$$ = -1, $_aInstances$$ = [];
    $oj$$21$$.$__registerWidget$("oj.ojTree", $$$$21$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", defaultElement:"\x3cdiv\x3e", options:{animDuration:500, dnd:!1, expandParents:!1, initExpanded:null, $initLoaded$:[], selectionMode:"single", selectedParentCollapse:!1, selectedParentExpand:!0, selectPrevOnDelete:!1, data:null, emptyText:null, icons:!0, types:null, before:null, collapse:null, create:null, collapseAll:null, cut:null, dehover:null, remove:null, deselect:null, deselectAll:null, 
    destroy:null, expand:null, expandAll:null, hover:null, loaded:null, move:null, paste:null, refresh:null, rename:null, select:null}, collapse:function($node$$24$$, $skipAnim$$) {
      $node$$24$$ = this.$_getNode$($node$$24$$);
      var $s$$11$$ = $skipAnim$$ || this.options.animDuration, $t$$1$$ = this;
      if(!$node$$24$$.length || -1 === $node$$24$$ || !$node$$24$$.hasClass("oj-tree-open") || this.$_data$.$core$.locked || $node$$24$$.hasClass("oj-disabled")) {
        return!1
      }
      var $rslt$$ = this.$_emitEvent$({obj:$node$$24$$, func:"collapse"}, "before");
      if("boolean" != typeof $rslt$$ || $rslt$$) {
        $s$$11$$ && $node$$24$$.children("ul").attr("style", "display:block !important"), $node$$24$$.removeClass("oj-tree-open").addClass("oj-tree-closed").attr("aria-expanded", "false"), $s$$11$$ ? $node$$24$$.children("ul").stop(!0, !0).slideUp($s$$11$$, function() {
          this.style.display = "";
          $t$$1$$.after_close($node$$24$$)
        }) : $t$$1$$.after_close($node$$24$$), this.$_emitEvent$({obj:$node$$24$$}, "collapse")
      }
    }, collapseAll:function($node$$25$$, $anim$$) {
      var $origTarg$$ = $node$$25$$ ? $node$$25$$ : -1, $_this$$1$$ = this;
      if(!this.$_data$.$core$.locked && (($node$$25$$ = $node$$25$$ ? this.$_getNode$($node$$25$$) : this.$_$container$) && -1 !== $origTarg$$ && ($origTarg$$ = $node$$25$$), $node$$25$$ && -1 !== $origTarg$$ || ($node$$25$$ = this.$_$container_ul$), !$node$$25$$.hasClass("oj-disabled"))) {
        var $subject$$;
        -1 !== $origTarg$$ && this.isExpanded($node$$25$$) && ($subject$$ = $node$$25$$[0]);
        var $objs$$ = $node$$25$$.find("li.oj-tree-open");
        $objs$$.length && $objs$$.each(function() {
          $_this$$1$$.collapse(this, !$anim$$)
        });
        $subject$$ && (this.collapse($subject$$, !$anim$$), $objs$$.splice(0, 0, $subject$$));
        $objs$$.length && this.$_emitEvent$({obj:$objs$$, targ:$origTarg$$}, "collapseAll")
      }
    }, expand:function($node$$26$$, $skipAnim$$1$$) {
      this.$_expand$($node$$26$$, !1, $skipAnim$$1$$)
    }, expanded:function($nodes$$, $skipAnim$$2$$) {
      var $exlr$$, $exlen$$, $_this$$2$$ = this;
      if($nodes$$ && "array" === $$$$21$$.type($nodes$$)) {
        if(this.$_data$.$core$.locked) {
          return null
        }
        $exlen$$ = $nodes$$.length;
        $$$$21$$.each($nodes$$, function($i$$227$$, $val$$38$$) {
          $_this$$2$$.$_expand$($val$$38$$, !1, $skipAnim$$2$$)
        });
        return null
      }
      $nodes$$ = this.$_$container_ul$.find("li.oj-tree-open");
      $exlen$$ = $nodes$$.length;
      $exlr$$ = [];
      for(var $n$$22$$ = 0;$n$$22$$ < $exlen$$;$n$$22$$++) {
        $exlr$$.push($nodes$$[$n$$22$$])
      }
      return $$$$21$$($exlr$$)
    }, expandAll:function($node$$27$$, $anim$$1$$) {
      this.$_expandAll$($node$$27$$, $anim$$1$$)
    }, toggleExpand:function($node$$28$$) {
      $node$$28$$ = this.$_getNode$($node$$28$$);
      if(-1 !== $node$$28$$ && !$node$$28$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        if($node$$28$$.hasClass("oj-tree-closed")) {
          return this.expand($node$$28$$)
        }
        if($node$$28$$.hasClass("oj-tree-open")) {
          return this.collapse($node$$28$$)
        }
      }
    }, deselect:function($node$$29$$) {
      $node$$29$$ = this.$_getNode$($node$$29$$);
      if(!$node$$29$$.length) {
        return!1
      }
      $node$$29$$.hasClass("oj-disabled") || this.$_data$.$core$.locked || !this.isSelected($node$$29$$) || ($node$$29$$.children("a").removeClass("oj-tree-clicked"), $node$$29$$.removeAttr("aria-selected"), this.$_data$.ui.selected = this.$_data$.ui.selected.not($node$$29$$), this.$_data$.ui.$last_selected$.get(0) === $node$$29$$.get(0) && (this.$_data$.ui.$last_selected$ = this.$_data$.ui.selected.eq(0)), this.$_emitEvent$({obj:$node$$29$$}, "deselect"))
    }, deselectAll:function($context$$44$$) {
      this.$_data$.$core$.locked || this.$_deselectAll$($context$$44$$, !1)
    }, select:function($node$$30$$) {
      this.$_select$($node$$30$$)
    }, selected:function($nodes$$1$$) {
      if(this.$_data$.$core$.locked) {
        return null
      }
      if(void 0 === $nodes$$1$$) {
        return this.$_getSelected$()
      }
      if(void 0 !== $nodes$$1$$.length) {
        var $_this$$3$$ = this;
        $$$$21$$.each($nodes$$1$$, function($i$$228$$, $val$$39$$) {
          $val$$39$$ && $_this$$3$$.$_select$($val$$39$$, !0)
        })
      }
      return null
    }, toggleSelect:function($node$$31$$) {
      $node$$31$$ = this.$_getNode$($node$$31$$);
      if(!$node$$31$$.length) {
        return!1
      }
      $node$$31$$.hasClass("oj-disabled") || this.$_data$.$core$.locked || (this.isSelected($node$$31$$) ? this.deselect($node$$31$$) : this.$_select$($node$$31$$, !0))
    }, isCollapsed:function($node$$32$$) {
      return($node$$32$$ = this.$_getNode$($node$$32$$)) && -1 !== $node$$32$$ && $node$$32$$.hasClass("oj-tree-closed")
    }, isExpanded:function($node$$33$$) {
      return($node$$33$$ = this.$_getNode$($node$$33$$)) && -1 !== $node$$33$$ && $node$$33$$.hasClass("oj-tree-open")
    }, isLeaf:function($node$$34$$) {
      return this.$_isLeaf$($node$$34$$)
    }, isSelected:function($node$$35$$) {
      return 0 <= this.$_data$.ui.selected.index(this.$_getNode$($node$$35$$))
    }, create:function($refnode$$, $position$$9$$, $data$$111$$) {
      return this.$_create_node$($refnode$$, $position$$9$$, $data$$111$$)
    }, remove:function($node$$36$$) {
      $node$$36$$ = this.$_getNode$($node$$36$$);
      if(!$node$$36$$.length || $node$$36$$.hasClass("oj-disabled") || this.$_data$.$core$.locked) {
        return!1
      }
      var $p$$7_rslt$$1$$ = this.$_emitEvent$({obj:$node$$36$$, func:"remove"}, "before");
      if("boolean" == typeof $p$$7_rslt$$1$$ && !$p$$7_rslt$$1$$) {
        return!1
      }
      this.$__rollback$();
      var $p$$7_rslt$$1$$ = this.$_getParent$($node$$36$$), $prev$$3$$ = $$$$21$$([]), $t$$2$$ = this, $sib$$ = this.$_getPrev$($node$$36$$);
      $node$$36$$.each(function() {
        $prev$$3$$ = $prev$$3$$.add($t$$2$$.$_getPrev$(this))
      });
      $node$$36$$ = $node$$36$$.detach();
      -1 !== $p$$7_rslt$$1$$ && 0 === $p$$7_rslt$$1$$.find("\x3e ul \x3e li").length && $p$$7_rslt$$1$$.removeClass("oj-tree-open oj-tree-closed").addClass("oj-tree-leaf").removeAttr("aria-expanded");
      this.$_clean_node$($p$$7_rslt$$1$$);
      this.$_emitEvent$({obj:$node$$36$$, prev:$sib$$, parent:$p$$7_rslt$$1$$}, "remove");
      return $node$$36$$
    }, getText:function($node$$37$$) {
      $node$$37$$ = this.$_getNode$($node$$37$$);
      if(!$node$$37$$.length) {
        return!1
      }
      var $ht$$ = this.$_data$.$core$.$htmlTitles$;
      $node$$37$$ = $node$$37$$.children("a:eq(0)");
      if($ht$$) {
        return $node$$37$$ = $node$$37$$.clone(), $node$$37$$.children("INS").remove(), $node$$37$$.html()
      }
      $node$$37$$ = $node$$37$$.find("span:eq(0)");
      return $node$$37$$[0].textContent
    }, rename:function($node$$38$$, $text$$12$$) {
      this.$_rename_node$($node$$38$$, $text$$12$$)
    }, hover:function($node$$39$$) {
      $node$$39$$ = this.$_getNode$($node$$39$$);
      if(!$node$$39$$.length) {
        return!1
      }
      if(!$node$$39$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        var $rslt$$2$$ = this.$_emitEvent$({obj:$node$$39$$, func:"hover"}, "before");
        if("boolean" != typeof $rslt$$2$$ || $rslt$$2$$) {
          $node$$39$$.hasClass("oj-tree-hovered") || this.dehover(), this.$_data$.ui.$hovered$ = $node$$39$$.children("a").addClass("oj-tree-hovered").parent(), this.$_$container_ul$.attr("aria-activedescendant", this.$_data$.ui.$hovered$.attr("id")), this.$_fix_scroll$($node$$39$$), this.$_emitEvent$({obj:$node$$39$$}, "hover")
        }
      }
    }, dehover:function() {
      var $obj$$54$$ = this.$_data$.ui.$hovered$, $p$$8$$;
      if(!$obj$$54$$ || !$obj$$54$$.length) {
        return!1
      }
      $obj$$54$$.hasClass("oj-disabled") || this.$_data$.$core$.locked || ($p$$8$$ = $obj$$54$$.children("a").removeClass("oj-tree-hovered").parent(), this.$_$container_ul$.removeAttr("aria-activedescendant"), this.$_data$.ui.$hovered$[0] === $p$$8$$[0] && (this.$_data$.ui.$hovered$ = null), this.$_emitEvent$({obj:$obj$$54$$}, "dehover"))
    }, getPath:function($node$$40$$, $idMode$$) {
      var $p$$9$$ = [], $_this$$4$$ = this;
      $node$$40$$ = this.$_getNode$($node$$40$$);
      if(-1 === $node$$40$$ || !$node$$40$$ || !$node$$40$$.length) {
        return!1
      }
      $node$$40$$.parentsUntil(".oj-tree", "li").each(function() {
        $p$$9$$.push($idMode$$ ? this.id : $_this$$4$$.getText(this))
      });
      $p$$9$$.reverse();
      $p$$9$$.push($idMode$$ ? $node$$40$$.attr("id") : this.getText($node$$40$$));
      return $p$$9$$
    }, getRoot:function() {
      return this.$_$container$.children("ul:eq(0)")
    }, refresh:function($node$$41$$) {
      this._super();
      this.$_data$.$core$.locked || this.$_refresh$($node$$41$$)
    }, move:function($node$$42$$, $refnode$$1$$, $position$$10$$, $iscopy$$) {
      this.$_move_node$($node$$42$$, $refnode$$1$$, $position$$10$$, $iscopy$$)
    }, getType:function($node$$43$$) {
      return this.$_getType$($node$$43$$)
    }, setType:function($node$$44$$, $str$$17$$) {
      return this.$_setType$($node$$44$$, $str$$17$$)
    }, getNodeBySubId:function($locator$$15$$) {
      return $locator$$15$$ ? this.$_processSubId$($locator$$15$$) : this.element ? this.element[0] : null
    }, destroy:function() {
      this.$_emitEvent$({obj:-1}, "destroy");
      this._super()
    }, _create:function() {
      this._super();
      this.$_bCreate$ = !0;
      this.$_elemId$ = "#" + this.element.attr("id");
      this.$_$container$ = $$$$21$$(this.$_elemId$ ? this.$_elemId$.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$\x26") : "");
      this.$_$container_ul$ = null;
      this.$_data$ = {};
      this.$_tds$ = null;
      this.$_index$ = this.$_newIndex$();
      $_aInstances$$.push(this);
      this.$_isRtl$ = "rtl" === this.$_GetReadingDirection$();
      this.$_initTree$();
      this.$_bCreate$ = !1
    }, _destroy:function() {
      this.$_clearTree$();
      this.$_data$.html.$useExistingMarkup$ && this.$_data$.html.$cloneMarkup$ && this.$_$container$.append(this.$_data$.html.$cloneMarkup$);
      this._super()
    }, _setOption:function($key$$85$$, $newval$$) {
      var $ret$$30$$;
      if(this.$_bCreate$) {
        this._super($key$$85$$, $newval$$)
      }else {
        var $val$$40$$;
        if("selectionMode" === $key$$85$$) {
          $val$$40$$ = "none" === $newval$$ ? 0 : "single" === $newval$$ ? 1 : "multiple" === $newval$$ ? -1 : void 0, $val$$40$$ != this.$_data$.$core$.$selectMode$ && (this.$_data$.$core$.$selectMode$ = $val$$40$$)
        }else {
          if("icons" === $key$$85$$) {
            "boolean" == $$$$21$$.type($newval$$) && $newval$$ != this.$_data$.$themes$.icons && (this.$_data$.$themes$.icons = $newval$$, this[$newval$$ ? "show_icons" : "hide_icons"]())
          }else {
            if("contextMenu" === $key$$85$$) {
              this.$_clearMenu$(), $newval$$ && this.$_initMenu$($newval$$)
            }else {
              if("disabled" === $key$$85$$) {
                $ret$$30$$ = this.$_handleDisabledChanged$($newval$$)
              }else {
                if("data" === $key$$85$$) {
                  this._super($key$$85$$, $newval$$);
                  this.$_initDSOpts$();
                  this.$_initDataSource$();
                  this.$_load_node$(-1, function() {
                    this.$_loaded$();
                    this.$_reload_nodes$()
                  });
                  return
                }
              }
            }
          }
        }
        this._super($key$$85$$, $newval$$);
        return $ret$$30$$
      }
    }, $_clearTree$:function() {
      var $n$$23$$ = this.$_index$;
      this.$_$container$.unbind(".oj-tree").undelegate(".oj-tree").removeData("oj-tree-instance-id").find("[class^\x3d'oj-tree']").addBack().attr("class", function() {
        return this.className.replace(/oj-tree[^ ]*|$/ig, "")
      });
      var $cl$$ = this.$_$container$.attr("class"), $cl$$ = $cl$$.trim();
      0 === $cl$$.length && this.$_$container$.removeAttr("class");
      $_removeKeyFilter$$(this.$_$container_ul$);
      $$$$21$$(document).unbind(".oj-tree-" + $n$$23$$).undelegate(".oj-tree-" + $n$$23$$);
      this.$_$container_ul$.remove();
      this.$_$container_ul$ = null
    }, $_getNodeCore$:function($obj$$55$$) {
      var $$obj$$ = $$$$21$$($obj$$55$$, this.$_$container$);
      if($$obj$$.is(".oj-tree") || -1 == $obj$$55$$) {
        return-1
      }
      $$obj$$ = $$obj$$.closest("li", this.$_$container$);
      return $$obj$$.length ? $$obj$$ : !1
    }, $_getNode$:function($obj$$56$$, $allow_multiple$$) {
      if("undefined" === typeof $obj$$56$$ || null === $obj$$56$$) {
        return $allow_multiple$$ ? this.$_data$.ui.selected : this.$_data$.ui.$last_selected$
      }
      var $$obj$$1$$ = $$$$21$$($obj$$56$$, this.$_$container$);
      if($$obj$$1$$.is(".oj-tree") || -1 === $obj$$56$$) {
        return-1
      }
      $$obj$$1$$ = $$obj$$1$$.closest("li", this.$_$container$);
      return $$obj$$1$$.length ? $$obj$$1$$ : !1
    }, $_getPrev$:function($obj$$57$$, $strict$$) {
      $obj$$57$$ = this.$_getNode$($obj$$57$$);
      if(-1 === $obj$$57$$) {
        return this.$_$container$.find("\x3e ul \x3e li:last-child")
      }
      if(!$obj$$57$$.length) {
        return!1
      }
      if($strict$$) {
        return 0 < $obj$$57$$.prevAll("li").length ? $obj$$57$$.prevAll("li:eq(0)") : !1
      }
      if($obj$$57$$.prev("li").length) {
        for($obj$$57$$ = $obj$$57$$.prev("li").eq(0);$obj$$57$$.hasClass("oj-tree-open");) {
          $obj$$57$$ = $obj$$57$$.children("ul:eq(0)").children("li:last")
        }
        return $obj$$57$$
      }
      var $o$$14$$ = $obj$$57$$.parentsUntil(".oj-tree", "li:eq(0)");
      return $o$$14$$.length ? $o$$14$$ : !1
    }, $_getNext$:function($obj$$58$$, $strict$$1$$) {
      $obj$$58$$ = this.$_getNode$($obj$$58$$);
      return-1 === $obj$$58$$ ? this.$_$container$.find("\x3e ul \x3e li:first-child") : $obj$$58$$.length ? $strict$$1$$ ? 0 < $obj$$58$$.nextAll("li").size() ? $obj$$58$$.nextAll("li:eq(0)") : !1 : $obj$$58$$.hasClass("oj-tree-open") ? $obj$$58$$.find("li:eq(0)") : 0 < $obj$$58$$.nextAll("li").size() ? $obj$$58$$.nextAll("li:eq(0)") : $obj$$58$$.parentsUntil(".oj-tree", "li").next("li").eq(0) : !1
    }, $_getParent$:function($o$$15_obj$$59$$) {
      $o$$15_obj$$59$$ = this.$_getNode$($o$$15_obj$$59$$);
      if(-1 == $o$$15_obj$$59$$ || !$o$$15_obj$$59$$.length) {
        return!1
      }
      $o$$15_obj$$59$$ = $o$$15_obj$$59$$.parentsUntil(".oj-tree", "li:eq(0)");
      return $o$$15_obj$$59$$.length ? $o$$15_obj$$59$$ : -1
    }, $_getChildren$:function($obj$$60$$) {
      $obj$$60$$ = this.$_getNode$($obj$$60$$);
      return-1 === $obj$$60$$ ? this.$_$container$.children("ul:eq(0)").children("li") : $obj$$60$$.length ? $obj$$60$$.children("ul:eq(0)").children("li") : !1
    }, $_isLeaf$:function($node$$45$$) {
      return($node$$45$$ = this.$_getNode$($node$$45$$)) && -1 !== $node$$45$$ && $node$$45$$.hasClass("oj-tree-leaf")
    }, $_reference$:function($node$$46$$) {
      $node$$46$$.parents("div").eq(0);
      return this
    }, $_applyDefaults$:function($to$$1$$, $from$$1$$) {
      void 0 != $to$$1$$ && void 0 != $from$$1$$ && $$$$21$$.each($from$$1$$, function($prop$$77$$, $val$$41$$) {
        void 0 == $to$$1$$[$prop$$77$$] && ($to$$1$$[$prop$$77$$] = $val$$41$$)
      })
    }, $_handleDisabledChanged$:function($newval$$1$$) {
      var $curState$$ = this.$_$container_ul$.hasClass("oj-disabled");
      $curState$$ || ($curState$$ = !1);
      if("undefined" === typeof $newval$$1$$) {
        return $curState$$
      }
      $curState$$ != $newval$$1$$ && ($newval$$1$$ ? (this.$_$container_ul$.addClass("oj-disabled"), this.$_$container_ul$.prop("disabled", "disabled")) : (this.$_$container_ul$.removeClass("oj-disabled"), this.$_$container_ul$.removeAttr("disabled")), this.$_lock$($newval$$1$$))
    }, $_lock$:function($lstate$$) {
      $lstate$$ ? (this.$_data$.$core$.locked = !0, this.$_data$.ui.opacity = this.$_$container$.children("ul").css("opacity"), this.$_$container_ul$.addClass("oj-tree-locked").css("opacity", "0.9")) : (this.$_data$.$core$.locked = !1, this.$_$container_ul$.removeClass("oj-tree-locked").css("opacity", this.$_data$.ui.opacity))
    }, $_prepare_move$:function($o$$16$$, $r$$1$$, $pos$$9$$, $cb$$1$$, $is_cb$$) {
      var $p$$10$$ = {$ot$:this};
      $p$$10$$.$o$ = $p$$10$$.$ot$.$_getNode$($o$$16$$);
      $p$$10$$.$r$ = -1 === $r$$1$$ ? -1 : this.$_getNode$($r$$1$$);
      $p$$10$$.$p$ = "undefined" === typeof $pos$$9$$ || !1 === $pos$$9$$ ? "last" : $pos$$9$$;
      if(!$is_cb$$ && this.$_data$.$core$.$prepared_move$.$o$ && this.$_data$.$core$.$prepared_move$.$o$[0] === $p$$10$$.$o$[0] && this.$_data$.$core$.$prepared_move$.$r$[0] === $p$$10$$.$r$[0] && this.$_data$.$core$.$prepared_move$.$p$ === $p$$10$$.$p$) {
        this.$_emitEvent$(this.$_data$.$core$.$prepared_move$), $cb$$1$$ && $cb$$1$$.call(this, this.$_data$.$core$.$prepared_move$)
      }else {
        $p$$10$$.$ot$ = this;
        $p$$10$$.$rt$ = this;
        if(-1 !== $p$$10$$.$r$ && $p$$10$$.$r$) {
          if(!/^(before|after)$/.test($p$$10$$.$p$) && !this.$_is_loaded$($p$$10$$.$r$)) {
            return this.$_load_node$($p$$10$$.$r$, function() {
              this.$_prepare_move$($o$$16$$, $r$$1$$, $pos$$9$$, $cb$$1$$, !0)
            })
          }
          switch($p$$10$$.$p$) {
            case "before":
              $p$$10$$.$cp$ = $p$$10$$.$r$.index();
              $p$$10$$.$cr$ = $p$$10$$.$rt$.$_getParent$($p$$10$$.$r$);
              break;
            case "after":
              $p$$10$$.$cp$ = $p$$10$$.$r$.index() + 1;
              $p$$10$$.$cr$ = $p$$10$$.$rt$.$_getParent$($p$$10$$.$r$);
              break;
            case "inside":
            ;
            case "first":
              $p$$10$$.$cp$ = 0;
              $p$$10$$.$cr$ = $p$$10$$.$r$;
              break;
            case "last":
              $p$$10$$.$cp$ = $p$$10$$.$r$.find(" \x3e ul \x3e li").length;
              $p$$10$$.$cr$ = $p$$10$$.$r$;
              break;
            default:
              $p$$10$$.$cp$ = $p$$10$$.$p$, $p$$10$$.$cr$ = $p$$10$$.$r$
          }
        }else {
          switch($p$$10$$.$cr$ = -1, $p$$10$$.$p$) {
            case "first":
            ;
            case "before":
            ;
            case "inside":
              $p$$10$$.$cp$ = 0;
              break;
            case "after":
            ;
            case "last":
              $p$$10$$.$cp$ = $p$$10$$.$rt$.$_$container$.find(" \x3e ul \x3e li").length;
              break;
            default:
              $p$$10$$.$cp$ = $p$$10$$.$p$
          }
        }
        $p$$10$$.$np$ = -1 == $p$$10$$.$cr$ ? $p$$10$$.$rt$.$_$container$ : $p$$10$$.$cr$;
        $p$$10$$.$op$ = $p$$10$$.$ot$.$_getParent$($p$$10$$.$o$);
        $p$$10$$.$cop$ = $p$$10$$.$o$.index();
        -1 === $p$$10$$.$op$ && ($p$$10$$.$op$ = $p$$10$$.$ot$ ? $p$$10$$.$ot$.$_$container$ : this.$_$container$);
        !/^(before|after)$/.test($p$$10$$.$p$) && ($p$$10$$.$op$ && $p$$10$$.$np$ && $p$$10$$.$op$[0] === $p$$10$$.$np$[0] && $p$$10$$.$o$.index() < $p$$10$$.$cp$) && $p$$10$$.$cp$++;
        $p$$10$$.$or$ = $p$$10$$.$np$.find(" \x3e ul \x3e li:nth-child(" + ($p$$10$$.$cp$ + 1) + ")");
        this.$_data$.$core$.$prepared_move$ = $p$$10$$;
        this.$_emitEvent$(this.$_data$.$core$.$prepared_move$, "prepare_move");
        $cb$$1$$ && $cb$$1$$.call(this, this.$_data$.$core$.$prepared_move$, "prepare_move")
      }
    }, check_move:function() {
      var $obj$$61$$ = this.$_data$.$core$.$prepared_move$, $ret$$31$$ = !0, $r$$2$$;
      $r$$2$$ = -1 === $obj$$61$$.$r$ ? this.$_$container$() : $obj$$61$$.$r$;
      if(!$obj$$61$$ || !$obj$$61$$.$o$ || $obj$$61$$.$or$[0] === $obj$$61$$.$o$[0]) {
        return!1
      }
      if(!$obj$$61$$.$cy$) {
        if($obj$$61$$.$op$ && $obj$$61$$.$np$ && $obj$$61$$.$op$[0] === $obj$$61$$.$np$[0] && $obj$$61$$.$cp$ - 1 === $obj$$61$$.$o$.index()) {
          return!1
        }
        $obj$$61$$.$o$.each(function() {
          if(-1 !== $r$$2$$.parentsUntil(".oj-tree", "li").addBack().index(this)) {
            return $ret$$31$$ = !1
          }
        })
      }
      return $ret$$31$$
    }, $_rename_node$:function($node$$47$$, $text$$13$$) {
      var $t$$3$$;
      $node$$47$$ = this.$_getNode$($node$$47$$);
      this.$__rollback$();
      $t$$3$$ = this.getText($node$$47$$);
      if($node$$47$$ && $node$$47$$.length) {
        var $rslt$$3$$ = this.$_emitEvent$({obj:$node$$47$$, func:"rename", title:$text$$13$$, prevTitle:$t$$3$$}, "before");
        if("boolean" == typeof $rslt$$3$$ && !$rslt$$3$$) {
          return
        }
      }
      $node$$47$$ && ($node$$47$$.length && this.$_set_text$.apply(this, Array.prototype.slice.call(arguments))) && this.$_emitEvent$({obj:$node$$47$$, title:$text$$13$$, prevTitle:$t$$3$$}, "rename")
    }, $_move_node$:function($obj$$62$$, $d$$3_o$$17_ref$$2$$, $position$$11$$, $is_copy$$, $is_prepared$$, $skip_check$$) {
      if(!($obj$$62$$.hasClass && $obj$$62$$.hasClass("oj-disabled") || this.$_data$.$core$.locked)) {
        if(!$is_prepared$$) {
          return this.$_prepare_move$($obj$$62$$, $d$$3_o$$17_ref$$2$$, $position$$11$$, function($p$$11$$) {
            this.$_move_node$($p$$11$$, !1, !1, $is_copy$$, !0, $skip_check$$)
          })
        }
        $is_copy$$ && (this.$_data$.$core$.$prepared_move$.$cy$ = !0);
        if(!$skip_check$$ && !this.check_move()) {
          return!1
        }
        this.$__rollback$();
        $d$$3_o$$17_ref$$2$$ = !1;
        $is_copy$$ ? ($d$$3_o$$17_ref$$2$$ = $obj$$62$$.$o$.clone(!0), $d$$3_o$$17_ref$$2$$.find("*[id]").addBack().each(function() {
          this.id && (this.id = "copy_" + this.id)
        })) : $d$$3_o$$17_ref$$2$$ = $obj$$62$$.$o$;
        $obj$$62$$.$or$.length ? $obj$$62$$.$or$.before($d$$3_o$$17_ref$$2$$) : ($obj$$62$$.$np$.children("ul").length || $$$$21$$("\x3cul /\x3e").appendTo($obj$$62$$.$np$), $obj$$62$$.$np$.children("ul:eq(0)").append($d$$3_o$$17_ref$$2$$));
        try {
          $obj$$62$$.$ot$.$_clean_node$($obj$$62$$.$op$), $obj$$62$$.$rt$.$_clean_node$($obj$$62$$.$np$), $obj$$62$$.$op$.find("\x3e ul \x3e li").length || $obj$$62$$.$op$.removeClass("oj-tree-open oj-tree-closed").removeAttr("aria-expanded").addClass("oj-tree-leaf").children("ul").remove()
        }catch($e$$72$$) {
        }
        $is_copy$$ && (this.$_data$.$core$.$prepared_move$.$cy$ = !0, this.$_data$.$core$.$prepared_move$.$oc$ = $d$$3_o$$17_ref$$2$$);
        $d$$3_o$$17_ref$$2$$ = $$$$21$$.extend(!0, {}, this.$_data$.$core$.$prepared_move$);
        $d$$3_o$$17_ref$$2$$.obj = $obj$$62$$.$o$;
        this.$_emitEvent$($d$$3_o$$17_ref$$2$$, "move");
        return this.$_data$.$core$.$prepared_move$
      }
    }, $_getMove$:function() {
      return this.$_data$.$crrm$.$prepared_move$
    }, $_getType$:function($node$$48$$) {
      return($node$$48$$ = this.$_getNode$($node$$48$$)) && $node$$48$$.length ? $node$$48$$.attr(this.options.types.attr) || "default" : !1
    }, $_setType$:function($str$$18$$, $node$$49$$) {
      var $s$$12$$ = this.options.types, $ret$$32$$ = !1;
      $node$$49$$ = this.$_getNode$($node$$49$$);
      ($ret$$32$$ = $s$$12$$ ? $node$$49$$.length && $str$$18$$ ? $node$$49$$.attr(this.options.types.attr, $str$$18$$) : !1 : !1) && this.$_emitEvent$({obj:$node$$49$$, type:$str$$18$$}, "settype");
      return $ret$$32$$
    }, $_check$:function($rule$$3$$, $obj$$63$$, $opts$$19$$) {
      $obj$$63$$ = this.$_getNode$($obj$$63$$);
      var $v$$1$$ = !1, $ty$$ = this.$_getType$($obj$$63$$), $d$$4$$ = 0, $_this$$6$$ = this, $s$$13$$ = this.$_getOptions$().types, $data$$112$$ = !1;
      if(-1 === $obj$$63$$) {
        if($s$$13$$[$rule$$3$$]) {
          $v$$1$$ = $s$$13$$[$rule$$3$$]
        }else {
          return
        }
      }else {
        if(!1 === $ty$$) {
          return
        }
        ($data$$112$$ = this.$_data$.types.$defaults$.useData ? $obj$$63$$.data("oj-tree") : !1) && $data$$112$$.types && "undefined" !== typeof $data$$112$$.types[$rule$$3$$] ? $v$$1$$ = $data$$112$$.types[$rule$$3$$] : $s$$13$$.types[$ty$$] && "undefined" !== typeof $s$$13$$.types[$ty$$][$rule$$3$$] ? $v$$1$$ = $s$$13$$.types[$ty$$][$rule$$3$$] : $s$$13$$.types["default"] && "undefined" !== typeof $s$$13$$.types["default"][$rule$$3$$] && ($v$$1$$ = $s$$13$$.types["default"][$rule$$3$$])
      }
      $$$$21$$.isFunction($v$$1$$) && ($v$$1$$ = $v$$1$$.call(this, $obj$$63$$));
      var $md$$ = this.$_data$.types.$defaults$.maxDepth;
      "maxDepth" === $rule$$3$$ && (-1 !== $obj$$63$$ && !1 !== $opts$$19$$ && -2 !== this.$_data$.types.$defaults$.maxDepth && 0 !== $v$$1$$) && $obj$$63$$.children("a:eq(0)").parentsUntil(".oj-tree", "li").each(function($i$$229$$) {
        if(-1 !== $md$$ && 0 >= $md$$ - ($i$$229$$ + 1)) {
          return $v$$1$$ = 0, !1
        }
        $d$$4$$ = 0 === $i$$229$$ ? $v$$1$$ : $_this$$6$$.$_check$($rule$$3$$, this, !1);
        if(-1 !== $d$$4$$ && 0 >= $d$$4$$ - ($i$$229$$ + 1)) {
          return $v$$1$$ = 0, !1
        }
        0 <= $d$$4$$ && ($d$$4$$ - ($i$$229$$ + 1) < $v$$1$$ || 0 > $v$$1$$) && ($v$$1$$ = $d$$4$$ - ($i$$229$$ + 1));
        0 <= $md$$ && ($md$$ - ($i$$229$$ + 1) < $v$$1$$ || 0 > $v$$1$$) && ($v$$1$$ = $md$$ - ($i$$229$$ + 1))
      });
      return $v$$1$$
    }, $_clean_node$:function($obj$$64$$) {
      $obj$$64$$ = $obj$$64$$ && -1 != $obj$$64$$ ? $$$$21$$($obj$$64$$) : this.$_$container_ul$;
      $obj$$64$$ = $obj$$64$$.is("li") ? $obj$$64$$.find("li").addBack() : $obj$$64$$.find("li");
      $obj$$64$$.removeClass("oj-tree-last").filter("li:last-child").addClass("oj-tree-last").end().filter(":has(li)").not(".oj-tree-open").removeClass("oj-tree-leaf").addClass("oj-tree-closed").attr("aria-expanded", "false");
      $obj$$64$$.not(".oj-tree-open, .oj-tree-closed").addClass("oj-tree-leaf").children("ul").remove();
      this.$_emitEvent$({obj:$obj$$64$$}, "clean_node")
    }, $_create_node$:function($obj$$65$$, $position$$12$$, $js$$, $callback$$94$$, $is_loaded$$) {
      $obj$$65$$ = this.$_getNode$($obj$$65$$);
      if(-1 !== $obj$$65$$ && !$obj$$65$$.length) {
        return!1
      }
      $position$$12$$ = "undefined" === typeof $position$$12$$ ? "last" : $position$$12$$;
      var $d$$5$$ = $$$$21$$("\x3cli /\x3e"), $tmp$$3$$;
      if(!$is_loaded$$ && !this.$_is_loaded$($obj$$65$$)) {
        return this.$_load_node$($obj$$65$$, function() {
          this.$_create_node$($obj$$65$$, $position$$12$$, $js$$, $callback$$94$$, !0)
        }), !1
      }
      this.$__rollback$();
      "string" === typeof $js$$ && ($js$$ = {data:$js$$});
      $js$$ || ($js$$ = {});
      $js$$.attr && $d$$5$$.attr($js$$.attr);
      $js$$.metadata && $d$$5$$.data($js$$.metadata);
      $js$$.state && $d$$5$$.addClass("oj-tree-" + ("expanded" === $js$$.state ? "open" : "closed"));
      $js$$.data || ($js$$.data = void 0 !== $js$$.title ? $js$$.title : this.$getTranslatedString$("m_newnode"));
      $$$$21$$.isArray($js$$.data) || ($tmp$$3$$ = $js$$.data, $js$$.data = [], $js$$.data.push($tmp$$3$$));
      var $_this$$7$$ = this;
      $$$$21$$.each($js$$.data, function($i$$230$$, $m$$22$$) {
        $tmp$$3$$ = $$$$21$$("\x3ca /\x3e");
        $$$$21$$.isFunction($m$$22$$) && ($m$$22$$ = $m$$22$$.call(this, $js$$));
        if("string" == typeof $m$$22$$) {
          $tmp$$3$$.attr("href", "#")[$_this$$7$$.$_data$.$core$.$htmlTitles$ ? "html" : "text"]($m$$22$$)
        }else {
          $m$$22$$.attr || ($m$$22$$.attr = {}), $m$$22$$.attr.href || ($m$$22$$.attr.href = "#"), $tmp$$3$$.attr($m$$22$$.attr)[$_this$$7$$.$_data$.$core$.$htmlTitles$ ? "html" : "text"]($m$$22$$.title), $m$$22$$.language && $tmp$$3$$.addClass($m$$22$$.language)
        }
        $tmp$$3$$.prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e");
        !$m$$22$$.icon && $js$$.icon && ($m$$22$$.icon = $js$$.icon);
        $m$$22$$.icon && (-1 === $m$$22$$.icon.indexOf("/") ? $tmp$$3$$.children("ins").addClass($m$$22$$.icon) : $tmp$$3$$.children("ins").css("background", "url('" + $m$$22$$.icon + "') center center no-repeat"));
        $d$$5$$.append($tmp$$3$$)
      });
      $d$$5$$.prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e");
      -1 === $obj$$65$$ && ($obj$$65$$ = this.$_$container$, "before" === $position$$12$$ && ($position$$12$$ = "first"), "after" === $position$$12$$ && ($position$$12$$ = "last"));
      switch($position$$12$$) {
        case "before":
          $obj$$65$$.before($d$$5$$);
          $tmp$$3$$ = this.$_getParent$($obj$$65$$);
          break;
        case "after":
          $obj$$65$$.after($d$$5$$);
          $tmp$$3$$ = this.$_getParent$($obj$$65$$);
          break;
        case "inside":
        ;
        case "first":
          $obj$$65$$.children("ul").length || $obj$$65$$.append("\x3cul /\x3e");
          $obj$$65$$.children("ul").prepend($d$$5$$);
          $tmp$$3$$ = $obj$$65$$;
          break;
        case "last":
          $obj$$65$$.children("ul").length || $obj$$65$$.append("\x3cul /\x3e");
          $obj$$65$$.children("ul").append($d$$5$$);
          $tmp$$3$$ = $obj$$65$$;
          break;
        default:
          $obj$$65$$.children("ul").length || $obj$$65$$.append("\x3cul /\x3e"), $position$$12$$ || ($position$$12$$ = 0), $tmp$$3$$ = $obj$$65$$.children("ul").children("li").eq($position$$12$$), $tmp$$3$$.length ? $tmp$$3$$.before($d$$5$$) : $obj$$65$$.children("ul").append($d$$5$$), $tmp$$3$$ = $obj$$65$$
      }
      if(-1 === $tmp$$3$$ || $tmp$$3$$.get(0) === this.$_$container$.get(0)) {
        $tmp$$3$$ = -1
      }
      this.$_clean_node$($tmp$$3$$);
      this.$_emitEvent$({obj:$d$$5$$, parent:$tmp$$3$$}, "create_node");
      $callback$$94$$ && $callback$$94$$.call(this, $d$$5$$);
      return $d$$5$$
    }, $_expand$:function($obj$$66$$, $callback$$95$$, $skip_animation$$) {
      $obj$$66$$ = this.$_getNode$($obj$$66$$);
      if(!$obj$$66$$.length) {
        return!1
      }
      if(!$obj$$66$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        if(!$obj$$66$$.hasClass("oj-tree-closed")) {
          return $callback$$95$$ && $callback$$95$$.call(), !1
        }
        var $rslt$$4_s$$15$$ = this.$_emitEvent$({obj:$obj$$66$$, func:"expand"}, "before");
        if("boolean" != typeof $rslt$$4_s$$15$$ || $rslt$$4_s$$15$$) {
          var $rslt$$4_s$$15$$ = $skip_animation$$ || this.options.animDuration, $t$$4$$ = this;
          this.$_is_loaded$($obj$$66$$) ? (this.options.expandParents && $obj$$66$$.parentsUntil(".oj-tree", ".oj-tree-closed").each(function() {
            $t$$4$$.expand(this, !1, !0)
          }), $rslt$$4_s$$15$$ && $obj$$66$$.children("ul").css("display", "none"), $obj$$66$$.removeClass("oj-tree-closed").addClass("oj-tree-open").attr("aria-expanded", "true").children("a").removeClass("oj-tree-loading"), $rslt$$4_s$$15$$ ? $obj$$66$$.children("ul").stop(!0, !0).slideDown($rslt$$4_s$$15$$, function() {
            this.style.display = "";
            $t$$4$$.after_open($obj$$66$$)
          }) : $t$$4$$.after_open($obj$$66$$), this.$_emitEvent$({obj:$obj$$66$$}, "expand"), $callback$$95$$ && $callback$$95$$.call()) : ($obj$$66$$.children("a").addClass("oj-tree-loading"), this.$_load_node$($obj$$66$$, function() {
            $t$$4$$.expand($obj$$66$$, $callback$$95$$, $skip_animation$$)
          }, $callback$$95$$))
        }
      }
    }, $_expandAll$:function($obj$$67$$, $do_animation$$, $original_obj$$) {
      var $origTarg$$1$$ = $obj$$67$$ ? $obj$$67$$ : -1;
      ($obj$$67$$ = $obj$$67$$ ? this.$_getNode$($obj$$67$$) : -1) && -1 !== $obj$$67$$ ? $origTarg$$1$$ = $obj$$67$$ : $obj$$67$$ = this.$_$container_ul$;
      $original_obj$$ ? $obj$$67$$ = $obj$$67$$.find("li.oj-tree-closed") : ($original_obj$$ = $obj$$67$$, $obj$$67$$ = $obj$$67$$.is(".oj-tree-closed") ? $obj$$67$$.find("li.oj-tree-closed").addBack() : $obj$$67$$.find("li.oj-tree-closed"));
      var $_this$$8$$ = this;
      $obj$$67$$.each(function() {
        var $__this$$ = this;
        $_this$$8$$.$_is_loaded$(this) ? $_this$$8$$.$_expand$(this, !1, !$do_animation$$) : $_this$$8$$.expand(this, function() {
          $_this$$8$$.$_expandAll$($__this$$, $do_animation$$, $original_obj$$)
        }, !$do_animation$$)
      });
      0 === $original_obj$$.find("li.oj-tree-closed").length && this.$_emitEvent$({obj:$obj$$67$$, targ:$origTarg$$1$$}, "expandAll")
    }, $_select$:function($node$$50$$, $check$$, $e$$73$$) {
      if(0 == this.$_data$.$core$.$selectMode$) {
        return!1
      }
      $node$$50$$ = this.$_getNode$($node$$50$$);
      if(-1 == $node$$50$$ || !$node$$50$$ || !$node$$50$$.length) {
        return!1
      }
      if(!$node$$50$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        var $rslt$$5_s$$16$$ = this.$_emitEvent$({obj:$node$$50$$, func:"select"}, "before");
        if("boolean" != typeof $rslt$$5_s$$16$$ || $rslt$$5_s$$16$$) {
          var $rslt$$5_s$$16$$ = this.options, $is_multiple_selMultMod$$ = this.$_data$.ui.$defaults$.selectMultipleModifier, $is_range_selRangeMod$$ = this.$_data$.ui.$defaults$.selectRangeModifier, $disSelChildren$$ = this.$_data$.ui.$defaults$.disableSelectingChildren, $is_multiple_selMultMod$$ = "on" == $is_multiple_selMultMod$$ || !1 !== $is_multiple_selMultMod$$ && $e$$73$$ && $e$$73$$[$is_multiple_selMultMod$$ + "Key"], $is_range_selRangeMod$$ = !1 !== $is_range_selRangeMod$$ && $e$$73$$ && 
          $e$$73$$[$is_range_selRangeMod$$ + "Key"] && this.$_data$.ui.$last_selected$ && this.$_data$.ui.$last_selected$[0] !== $node$$50$$[0] && this.$_data$.ui.$last_selected$.parent()[0] === $node$$50$$.parent()[0], $is_selected$$ = this.isSelected($node$$50$$), $proceed$$ = !0, $t$$5$$ = this;
          if($check$$) {
            if($disSelChildren$$ && $is_multiple_selMultMod$$ && ($node$$50$$.parentsUntil(".oj-tree", "li").children("a.oj-tree-clicked").length || $node$$50$$.children("ul").find("a.oj-tree-clicked:eq(0)").length)) {
              return!1
            }
            $proceed$$ = !1;
            switch(!0) {
              case $is_range_selRangeMod$$:
                this.$_data$.ui.$last_selected$.addClass("oj-tree-last-selected");
                $node$$50$$ = $node$$50$$[$node$$50$$.index() < this.$_data$.ui.$last_selected$.index() ? "nextUntil" : "prevUntil"](".oj-tree-last-selected").addBack();
                -1 == this.$_data$.$core$.$selectMode$ || $node$$50$$.length < this.$_data$.$core$.$selectMode$ ? (this.$_data$.ui.$last_selected$.removeClass("oj-tree-last-selected"), this.$_data$.ui.selected.each(function() {
                  this !== $t$$5$$.$_data$.ui.$last_selected$[0] && $t$$5$$.deselect(this)
                }), $is_selected$$ = !1, $proceed$$ = !0) : $proceed$$ = !1;
                break;
              case $is_selected$$ && !$is_multiple_selMultMod$$:
                this.deselectAll();
                this.$_data$.ui.$spacebar$ || ($is_selected$$ = !1);
                $proceed$$ = !0;
                break;
              case !$is_selected$$ && !$is_multiple_selMultMod$$:
                $e$$73$$ ? this.$_data$.ui.selected && 1 == this.$_data$.ui.selected.length ? this.deselect(this.$_data$.ui.selected) : this.deselectAll(this.$_data$.ui.selected) : 1 === this.$_data$.$core$.$selectMode$ ? this.deselect(this.$_data$.ui.selected) : 1 < this.$_data$.$core$.$selectMode$ && this.deselectAll();
                $proceed$$ = !0;
                break;
              case $is_selected$$ && $is_multiple_selMultMod$$:
                this.deselect($node$$50$$);
                break;
              case !$is_selected$$ && $is_multiple_selMultMod$$:
                if(-1 == this.$_data$.$core$.$selectMode$ || this.$_data$.ui.selected.length + 1 <= this.$_data$.$core$.$selectMode$) {
                  $proceed$$ = !0
                }
            }
          }
          $proceed$$ && !$is_selected$$ && ($is_range_selRangeMod$$ || (this.$_data$.ui.$last_selected$ = $node$$50$$), $node$$50$$.children("a").addClass("oj-tree-clicked"), $node$$50$$.attr("aria-selected", "true"), $rslt$$5_s$$16$$.selectedParentExpand && $node$$50$$.parents(".oj-tree-closed").each(function() {
            $t$$5$$.expand(this, !1, !0)
          }), this.$_data$.ui.selected = this.$_data$.ui.selected.add($node$$50$$), this.$_fix_scroll$($node$$50$$.eq(0)), this.$_emitEvent$({obj:$node$$50$$, e:$e$$73$$}, "select"))
        }
      }
    }, $_deselectAll$:function($context$$45$$, $bSeparate$$) {
      if(!this.$_data$.$core$.locked) {
        if($bSeparate$$) {
          if($origTarg$$2$$ = $context$$45$$ ? $context$$45$$ : -1, $ret$$33$$ = $context$$45$$ ? $$$$21$$($context$$45$$).find("a.oj-tree-clicked").parent() : this.$_$container$.find("a.oj-tree-clicked").parent(), !$ret$$33$$.hasClass("oj-disabled")) {
            var $_this$$9$$ = this;
            $$$$21$$.each($ret$$33$$, function() {
              $_this$$9$$.deselect(this)
            })
          }
        }else {
          var $origTarg$$2$$ = $context$$45$$ ? $context$$45$$ : -1, $ret$$33$$ = $context$$45$$ ? $$$$21$$($context$$45$$).find("a.oj-tree-clicked").parent() : this.$_$container$.find("a.oj-tree-clicked").parent();
          $ret$$33$$.hasClass("oj-disabled") || ($ret$$33$$.children("a.oj-tree-clicked").removeClass("oj-tree-clicked"), $ret$$33$$.removeAttr("aria-selected"), this.$_data$.ui.selected = $$$$21$$([]), this.$_data$.ui.$last_selected$ = !1, $ret$$33$$.length && this.$_emitEvent$({obj:$ret$$33$$, targ:$origTarg$$2$$}, "deselectAll"))
        }
      }
    }, $_refresh$:function($node$$51$$) {
      this.$_refresh_core$($node$$51$$)
    }, $_refresh_core$:function($node$$52$$) {
      var $origTarg$$3$$ = $node$$52$$ ? $node$$52$$ : -1, $_this$$10$$ = this;
      this.$_save_opened$();
      $node$$52$$ || ($node$$52$$ = -1);
      ($node$$52$$ = this.$_getNode$($node$$52$$)) ? $origTarg$$3$$ = $node$$52$$ : $node$$52$$ = -1;
      -1 !== $node$$52$$ ? $node$$52$$.children("UL").remove() : this.$_$container_ul$.empty();
      this.$_load_node$($node$$52$$, function() {
        $_this$$10$$.$_emitEvent$({obj:$origTarg$$3$$}, "refresh");
        $_this$$10$$.$_reload_nodes$()
      })
    }, $_refresh_ui$:function($obj$$68$$) {
      this.save_selected();
      this.$_refresh_core$($obj$$68$$)
    }, after_open:function($obj$$69$$) {
      this.$_emitEvent$({obj:$obj$$69$$}, "after_open")
    }, after_close:function($obj$$70$$) {
      this.$_emitEvent$({obj:$obj$$70$$}, "after_close")
    }, $_reopen$:function() {
      var $_this$$11$$ = this;
      this.$_data$.$core$.$toExpand$.length && $$$$21$$.each(this.$_data$.$core$.$toExpand$, function($i$$231$$, $val$$42$$) {
        $_this$$11$$.$_expand$($val$$42$$, !1, !0)
      });
      this.$_emitEvent$({}, "reopen")
    }, $_getSelected$:function($context$$46$$) {
      return $context$$46$$ ? $$$$21$$($context$$46$$).find("a.oj-tree-clicked").parent() : this.$_data$.ui.selected
    }, $_set_text$:function($obj$$71$$, $val$$43$$) {
      $obj$$71$$ = this.$_getNode$($obj$$71$$);
      if(!$obj$$71$$.length) {
        return!1
      }
      $obj$$71$$ = $obj$$71$$.children("a:eq(0)");
      if(this.$_data$.$core$.$htmlTitles$) {
        var $tmp$$4$$ = $obj$$71$$.children("INS").clone();
        $obj$$71$$.html($val$$43$$).prepend($tmp$$4$$);
        this.$_emitEvent$({obj:$obj$$71$$, name:$val$$43$$}, "set_text");
        return!0
      }
      $obj$$71$$ = $obj$$71$$.find("span:eq(0)");
      this.$_emitEvent$({obj:$obj$$71$$, name:$val$$43$$}, "set_text");
      return $obj$$71$$[0].textContent = $val$$43$$
    }, $_load_node$:function($obj$$72$$) {
      this.$_emitEvent$({obj:$obj$$72$$}, "load_node")
    }, $_is_loaded$:$JSCompiler_returnArg$$(!0), $_load_node_DS$:function($obj$$74$$, $s_call$$, $e_call$$) {
      var $_this$$12$$ = this;
      this.$_load_node_tree$($obj$$74$$, function() {
        $_this$$12$$.$_emitEvent$({obj:$_this$$12$$.$_getNode$($obj$$74$$)}, "load_node");
        $s_call$$.call(this)
      }, $e_call$$)
    }, $_is_loaded_DS$:function($obj$$75$$) {
      $obj$$75$$ = this.$_getNode$($obj$$75$$);
      return-1 === $obj$$75$$ || !$obj$$75$$ || $obj$$75$$.is(".oj-tree-open, .oj-tree-leaf") || 0 < $obj$$75$$.children("ul").children("li").length
    }, $_refresh_DS$:function($obj$$76$$) {
      ($obj$$76$$ = this.$_getNode$($obj$$76$$)) && -1 !== $obj$$76$$ && $obj$$76$$.removeData("oj-tree-children");
      return this.$_refresh_ui$($obj$$76$$)
    }, $_load_node_J$:function($obj$$77$$, $s_call$$1$$, $e_call$$1$$) {
      var $_this$$13$$ = this;
      this.$_load_node_json$($obj$$77$$, function() {
        $_this$$13$$.$_emitEvent$({obj:$_this$$13$$.$_getNode$($obj$$77$$)}, "load_node");
        $s_call$$1$$.call(this)
      }, $e_call$$1$$)
    }, $_is_loaded_J$:function($obj$$78$$) {
      var $s$$17$$ = this.options.data;
      $obj$$78$$ = this.$_getNode$($obj$$78$$);
      return-1 == $obj$$78$$ || !$obj$$78$$ || !$s$$17$$.ajax && !this.$_data$.$ds$.$progressiveRender$ && !$$$$21$$.isFunction($s$$17$$.data) || $obj$$78$$.is(".oj-tree-open, .oj-tree-leaf") || 0 < $obj$$78$$.children("ul").children("li").length
    }, $_load_node_H$:function($obj$$79$$, $s_call$$2$$, $e_call$$2$$) {
      var $_this$$14$$ = this;
      this.$_load_node_html$($obj$$79$$, function() {
        $_this$$14$$.$_emitEvent$({obj:$_this$$14$$.$_getNode$($obj$$79$$)}, "load_node");
        $s_call$$2$$.call(this)
      }, $e_call$$2$$)
    }, $_is_loaded_H$:function($obj$$80$$) {
      var $s$$18$$ = this.options.data, $data$$113$$ = null, $ajax$$ = null;
      $s$$18$$ && ($data$$113$$ = $s$$18$$.data || null, $ajax$$ = $s$$18$$.ajax || null);
      $obj$$80$$ = this.$_getNode$($obj$$80$$);
      return-1 == $obj$$80$$ || !$obj$$80$$ || !$ajax$$ && !$$$$21$$.isFunction($data$$113$$) || $obj$$80$$.is(".oj-tree-open, .oj-tree-leaf") || 0 < $obj$$80$$.children("ul").children("li").size()
    }, reselect:function() {
      var $_this$$15$$ = this, $s$$19$$ = this.$_data$.ui.$to_select$, $s$$19$$ = $$$$21$$.map($$$$21$$.makeArray($s$$19$$), function($n$$24$$) {
        return"#" + $n$$24$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:")
      });
      $$$$21$$.each($s$$19$$, function($i$$232$$, $val$$44$$) {
        $val$$44$$ && "#" !== $val$$44$$ && $_this$$15$$.select($val$$44$$)
      });
      this.$_data$.ui.selected = this.$_data$.ui.selected.filter($JSCompiler_get$$("parentNode"));
      this.$_emitEvent$(null, "reselect")
    }, save_selected:function() {
      var $_this$$16$$ = this;
      this.$_data$.ui.$to_select$ = [];
      this.$_data$.ui.selected.each(function() {
        this.id && $_this$$16$$.$_data$.ui.$to_select$.push("#" + this.id.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:"))
      });
      this.$_emitEvent$(this.$_data$.ui.$to_select$, "save_selected")
    }, rollback:function($rb$$1$$) {
      $rb$$1$$ && ($$$$21$$.isArray($rb$$1$$) || ($rb$$1$$ = [$rb$$1$$]), $$$$21$$.each($rb$$1$$, $JSCompiler_emptyFn$$()))
    }, get_rollback:function() {
      this.$_emitEvent$(null, "get_rollback");
      return{$i$:this.$_index$, $h$:this.$_$container$.children("ul").clone(!0), $d$:this.data}
    }, set_rollback:function($html$$3$$, $data$$114$$) {
      this.$_$container$ && this.$_$container_ul$ && this.$_$container_ul$.empty().append($html$$3$$);
      this.data = $data$$114$$;
      this.$_emitEvent$(null, "set_rollback")
    }, $_load_node_tree$:function($obj$$81$$, $s_call$$3$$) {
      var $d$$6_rslt$$6$$ = this.$_JsonDSToJson$($obj$$81$$);
      if($d$$6_rslt$$6$$.success && $d$$6_rslt$$6$$.$js$) {
        var $$u_bTree$$ = !$obj$$81$$ || -1 === $obj$$81$$, $s$$20$$ = this.options.data;
        if($s$$20$$.data && !$s$$20$$.ajax || $s$$20$$.data && $s$$20$$.ajax && $$u_bTree$$) {
          $$u_bTree$$ && (($d$$6_rslt$$6$$ = this.$_parseJson$($d$$6_rslt$$6$$.$js$, $obj$$81$$)) ? (this.$_$container_ul$.empty().append($d$$6_rslt$$6$$.children()), this.$_clean_node$()) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty()), $s_call$$3$$ && $s_call$$3$$.call(this)
        }else {
          if(!$s$$20$$.data && $s$$20$$.ajax || $s$$20$$.data && $s$$20$$.ajax && !$$u_bTree$$) {
            ($d$$6_rslt$$6$$ = this.$_parseJson$($d$$6_rslt$$6$$.$js$, $obj$$81$$)) ? ($$u_bTree$$ ? ($$u_bTree$$ = this.$_$container_ul$, $$u_bTree$$.empty().append($d$$6_rslt$$6$$.children()), $$u_bTree$$.attr("role", "tree").attr("tabindex", "0").css("outline", "none"), -1 === this.$_data$.$core$.$selectMode$ && $$u_bTree$$.attr("aria-multiselectable", !0)) : ($obj$$81$$.append($d$$6_rslt$$6$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$81$$.removeData("oj-tree-is-loading")), 
            this.$_clean_node$($obj$$81$$), $s_call$$3$$ && $s_call$$3$$.call(this)) : $$u_bTree$$ ? this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$3$$ && $s_call$$3$$.call(this)) : ($obj$$81$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$81$$.removeData("oj-tree-is-loading"), $s$$20$$.correct_state && (this.$_correct_state$($obj$$81$$), $s_call$$3$$ && $s_call$$3$$.call(this)))
          }
        }
      }
    }, $_JsonDSToJson$:function($parentKey$$10$$, $node$$53$$) {
      var $arJson$$ = [], $ds$$ = this.$_tds$, $cc$$, $range$$21$$ = {}, $rslt$$7$$ = {success:!1, $js$:null};
      -1 == $parentKey$$10$$ && ($parentKey$$10$$ = null, $range$$21$$.start = 0);
      $cc$$ = $ds$$.$getChildCount$($parentKey$$10$$);
      0 < $cc$$ && ($range$$21$$.count = $cc$$, $ds$$.$fetchChildren$($parentKey$$10$$, $range$$21$$, {success:$$$$21$$.proxy(function($jns$$) {
        for(var $c$$27$$ = $jns$$.$getCount$(), $attr$$18_n$$25_r$$3$$, $i$$234$$ = 0;$i$$234$$ < $c$$27$$;$i$$234$$++) {
          $node$$53$$ = {};
          ($attr$$18_n$$25_r$$3$$ = $jns$$.getData($i$$234$$)) && ($node$$53$$.attr = $attr$$18_n$$25_r$$3$$);
          $node$$53$$.title = $jns$$.$m_nodes$[$i$$234$$].title;
          $attr$$18_n$$25_r$$3$$.$metadata$ && ($node$$53$$.metadata = $jns$$.$m_nodes$[$i$$234$$].$metadata$);
          var $key$$86$$ = $node$$53$$.attr.id;
          $attr$$18_n$$25_r$$3$$ = $ds$$.$getChildCount$($key$$86$$);
          0 < $attr$$18_n$$25_r$$3$$ && ($attr$$18_n$$25_r$$3$$ = this.$_JsonDSToJson$($key$$86$$, $node$$53$$), $node$$53$$.children = $attr$$18_n$$25_r$$3$$.$js$);
          $arJson$$.push($node$$53$$)
        }
        $rslt$$7$$.success = !0;
        $rslt$$7$$.$js$ = $arJson$$
      }, this), error:function() {
        $rslt$$7$$.success = !1
      }}));
      return $rslt$$7$$
    }, $_refresh_json$:function($obj$$82$$) {
      $obj$$82$$ = this.$_getNode$($obj$$82$$);
      if(!this.$_data$.$core$.locked) {
        var $bTree$$1$$ = !$obj$$82$$ || -1 !== $obj$$82$$ || !$obj$$82$$.length;
        if($bTree$$1$$ || !$obj$$82$$.hasClass("oj-disabled")) {
          var $s$$21$$ = this.options.data.json;
          !$bTree$$1$$ && (this.$_data$.$ds$.$progressiveUnload$ && ($$$$21$$.isFunction($s$$21$$.data) || $s$$21$$.ajax)) && $obj$$82$$.removeData("oj-tree-children");
          return this.$_refresh_ui$($obj$$82$$)
        }
      }
    }, $_load_node_json$:function($obj$$83$$, $s_call$$4$$, $e_call$$4$$) {
      function $success_func$$() {
      }
      function $error_func$$() {
      }
      var $d$$7_s$$22$$ = this.$_getOptions$().data, $data$$115$$ = $d$$7_s$$22$$ && $d$$7_s$$22$$.data || null, $ajax$$1$$ = $d$$7_s$$22$$ && $d$$7_s$$22$$.ajax || null;
      !$d$$7_s$$22$$ || ($data$$115$$ || $ajax$$1$$) || ($data$$115$$ = $d$$7_s$$22$$);
      if(($obj$$83$$ = this.$_getNode$($obj$$83$$)) && -1 !== $obj$$83$$ && (this.$_data$.$ds$.$progressiveRender$ || this.$_data$.$ds$.$progressiveUnload$) && !$obj$$83$$.is(".oj-tree-open, .oj-tree-leaf") && 0 === $obj$$83$$.children("ul").children("li").length && $obj$$83$$.data("oj-tree-children")) {
        if($d$$7_s$$22$$ = this.$_parseJson$($obj$$83$$.data("oj-tree-children"), $obj$$83$$)) {
          $obj$$83$$.append($d$$7_s$$22$$), this.$_data$.$ds$.$progressiveUnload$ || $obj$$83$$.removeData("oj-tree-children")
        }
        this.$_clean_node$($obj$$83$$);
        $s_call$$4$$ && $s_call$$4$$.call(this)
      }else {
        if($obj$$83$$ && -1 !== $obj$$83$$) {
          if($obj$$83$$.data("oj-tree-is-loading")) {
            return
          }
          $obj$$83$$.data("oj-tree-is-loading", !0)
        }
        switch(!0) {
          case !$data$$115$$ && !$ajax$$1$$:
            throw"ojTree - neither data nor ajax settings supplied.";;
          case $$$$21$$.isFunction($data$$115$$):
            $data$$115$$.call(this, $obj$$83$$, $$$$21$$.proxy(function($d$$8$$) {
              ($d$$8$$ = this.$_parseJson$($d$$8$$, $obj$$83$$)) ? (-1 !== $obj$$83$$ && $obj$$83$$ ? ($obj$$83$$.append($d$$8$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$83$$.removeData("oj-tree-is-loading")) : this.$_$container_ul$.empty().append($d$$8$$.children()), this.$_clean_node$($obj$$83$$), $s_call$$4$$ && $s_call$$4$$.call(this)) : (-1 !== $obj$$83$$ && $obj$$83$$ ? ($obj$$83$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$83$$.removeData("oj-tree-is-loading"), 
              this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$83$$)) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty(), $e_call$$4$$ && $e_call$$4$$.call(this))
            }, this));
            break;
          case !!$data$$115$$ && !$ajax$$1$$ || !!$data$$115$$ && !!$ajax$$1$$ && (!$obj$$83$$ || -1 === $obj$$83$$):
            $obj$$83$$ && -1 != $obj$$83$$ || (($d$$7_s$$22$$ = this.$_parseJson$($data$$115$$, $obj$$83$$)) ? (this.$_$container_ul$.empty().append($d$$7_s$$22$$.children()), this.$_clean_node$()) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty());
            $s_call$$4$$ && $s_call$$4$$.call(this);
            break;
          case !$data$$115$$ && !!$ajax$$1$$ || !!$data$$115$$ && !!$ajax$$1$$ && $obj$$83$$ && -1 !== $obj$$83$$:
            $error_func$$ = function $$error_func$$$($x$$55$$, $t$$6$$, $e$$74$$) {
              var $ef$$ = this.$_getOptions$().data.ajax.error;
              $ef$$ && $ef$$.call(this, $t$$6$$, $e$$74$$, $x$$55$$);
              -1 != $obj$$83$$ && $obj$$83$$.length ? ($obj$$83$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$83$$.removeData("oj-tree-is-loading"), "success" === $t$$6$$ && this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$83$$)) : "success" === $t$$6$$ && this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty();
              $e_call$$4$$ && $e_call$$4$$.call(this)
            }, $success_func$$ = function $$success_func$$$($d$$9$$, $$u$$1_t$$7$$, $x$$56$$) {
              var $sf$$ = this.$_getOptions$().data.ajax.success;
              $sf$$ && ($d$$9$$ = $sf$$.call(this, $d$$9$$, $$u$$1_t$$7$$, $x$$56$$) || $d$$9$$);
              if("" === $d$$9$$ || $d$$9$$ && $d$$9$$.toString && "" === $d$$9$$.toString().replace(/^[\s\n]+$/, "") || !$$$$21$$.isArray($d$$9$$) && !$$$$21$$.isPlainObject($d$$9$$)) {
                return $error_func$$.call(this, $x$$56$$, $$u$$1_t$$7$$, "")
              }
              ($d$$9$$ = this.$_parseJson$($d$$9$$, $obj$$83$$)) ? (-1 !== $obj$$83$$ && $obj$$83$$ ? ($obj$$83$$.append($d$$9$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$83$$.removeData("oj-tree-is-loading")) : ($$u$$1_t$$7$$ = this.$_$container_ul$, $$u$$1_t$$7$$.empty().append($d$$9$$.children()), $$u$$1_t$$7$$.attr("role", "tree").attr("tabindex", "0").css("outline", "none"), -1 === this.$_data$.$core$.$selectMode$ && $$u$$1_t$$7$$.attr("aria-multiselectable", !0)), 
              this.$_clean_node$($obj$$83$$), $s_call$$4$$ && $s_call$$4$$.call(this)) : -1 !== $obj$$83$$ && $obj$$83$$ ? ($obj$$83$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$83$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$83$$), $s_call$$4$$ && $s_call$$4$$.call(this))) : this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$4$$ && $s_call$$4$$.call(this))
            }, $d$$7_s$$22$$.ajax.context = this, $d$$7_s$$22$$.ajax.error = $error_func$$, $d$$7_s$$22$$.ajax.success = $success_func$$, $d$$7_s$$22$$.dataType || ($d$$7_s$$22$$.ajax.dataType = "json"), $$$$21$$.isFunction($d$$7_s$$22$$.ajax.url) && ($d$$7_s$$22$$.ajax.url = $d$$7_s$$22$$.ajax.url.call(this, $obj$$83$$)), $$$$21$$.isFunction($d$$7_s$$22$$.ajax.data) && ($d$$7_s$$22$$.ajax.data = $d$$7_s$$22$$.ajax.data.call(this, $obj$$83$$)), $$$$21$$.ajax($d$$7_s$$22$$.ajax)
        }
      }
    }, $_parseJson$:function($js$$1$$, $obj$$84_ul2$$, $isRecurse_ul1$$) {
      var $d$$10$$ = !1, $tmp$$5$$, $i$$235$$, $j$$32$$, $title$$11$$;
      if(!$js$$1$$) {
        return $d$$10$$
      }
      this.$_data$.$ds$.$progressiveUnload$ && ($obj$$84_ul2$$ && -1 !== $obj$$84_ul2$$) && $obj$$84_ul2$$.data("oj-tree-children", $d$$10$$);
      if("string" == typeof $js$$1$$) {
        try {
          $js$$1$$ = $$$$21$$.parseJSON($js$$1$$)
        }catch($err$$4$$) {
          $js$$1$$ = []
        }
      }
      if($$$$21$$.isArray($js$$1$$)) {
        $d$$10$$ = $$$$21$$("\x3cul\x3e");
        if(!$js$$1$$.length) {
          return!1
        }
        $i$$235$$ = 0;
        for($j$$32$$ = $js$$1$$.length;$i$$235$$ < $j$$32$$;$i$$235$$++) {
          $tmp$$5$$ = this.$_parseJson$($js$$1$$[$i$$235$$], $obj$$84_ul2$$, !0), $tmp$$5$$.length && ($d$$10$$ = $d$$10$$.append($tmp$$5$$))
        }
        $d$$10$$ = $d$$10$$.children()
      }else {
        "string" == typeof $js$$1$$ && ($js$$1$$ = {data:$js$$1$$});
        $title$$11$$ = "string" == typeof $js$$1$$.title ? $js$$1$$.title : " ";
        $d$$10$$ = $$$$21$$("\x3cli role\x3d'treeitem' /\x3e");
        $js$$1$$.attr && (this.$_data$.types.$defType$ && !$js$$1$$.attr.type && ($js$$1$$.attr.type = "oj-tree-deftype"), $d$$10$$.attr($js$$1$$.attr));
        $js$$1$$.metadata && $d$$10$$.data($js$$1$$.metadata);
        ($js$$1$$.state || $js$$1$$.children && 0 === $js$$1$$.children.length) && $d$$10$$.addClass("oj-tree-" + ("expanded" === $js$$1$$.state ? "open" : "closed"));
        $js$$1$$.data || ($js$$1$$.data = {dummy:0});
        var $bIns$$ = !1;
        $tmp$$5$$ = $$$$21$$("\x3ca tabindex\x3d'-1' /\x3e");
        $$$$21$$.each($js$$1$$.data, function($i$$236$$, $m$$23$$) {
          $$$$21$$.isFunction($m$$23$$) && ($m$$23$$ = $m$$23$$.call(this, $js$$1$$));
          "string" != typeof $m$$23$$ && ("attr" == $i$$236$$ ? $tmp$$5$$.attr($m$$23$$) : "style" == $i$$236$$ && $tmp$$5$$.css($m$$23$$), "language" == $i$$236$$ && $tmp$$5$$.addClass($m$$23$$));
          $bIns$$ || ($tmp$$5$$.prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e\x3cspan class\x3d'oj-tree-title'\x3e" + $title$$11$$ + "\x3c/span\x3e"), $bIns$$ = !0);
          !$m$$23$$.icon && $js$$1$$.icon && ($m$$23$$.icon = $js$$1$$.icon);
          $m$$23$$.icon && (-1 === $m$$23$$.icon.indexOf("/") ? $tmp$$5$$.children("ins").addClass($m$$23$$.icon) : $tmp$$5$$.children("ins").css("background", "url('" + $m$$23$$.icon + "') center center no-repeat"))
        });
        $d$$10$$.append($tmp$$5$$);
        $d$$10$$.prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e");
        $js$$1$$.children && (this.$_data$.$ds$.$progressiveRender$ && "expanded" !== $js$$1$$.state ? $d$$10$$.addClass("oj-tree-closed").attr("aria-expanded", "false").data("oj-tree-children", $js$$1$$.children) : (this.$_data$.$ds$.$progressiveUnload$ && $d$$10$$.data("oj-tree-children", $js$$1$$.children), $$$$21$$.isArray($js$$1$$.children) && $js$$1$$.children.length && ($tmp$$5$$ = this.$_parseJson$($js$$1$$.children, $obj$$84_ul2$$, !0), $tmp$$5$$.length && ($obj$$84_ul2$$ = $$$$21$$("\x3cul role\x3d'group' /\x3e"), 
        $obj$$84_ul2$$.append($tmp$$5$$), $d$$10$$.append($obj$$84_ul2$$)))))
      }
      $isRecurse_ul1$$ || ($isRecurse_ul1$$ = $$$$21$$("\x3cul /\x3e"), $isRecurse_ul1$$.append($d$$10$$), $d$$10$$ = $isRecurse_ul1$$);
      return $d$$10$$
    }, $_getJson$:function($obj$$85$$, $li_attr$$, $a_attr$$, $is_callback$$) {
      var $result$$17$$ = [], $s$$23$$ = this.options, $_this$$17$$ = this, $tmp1$$, $tmp2$$, $li$$, $a$$69$$, $t$$8$$, $lang$$;
      ($obj$$85$$ = this.$_getNode$($obj$$85$$)) && -1 !== $obj$$85$$ || ($obj$$85$$ = this.$_$container$.find("\x3e ul \x3e li"));
      $li_attr$$ = $$$$21$$.isArray($li_attr$$) ? $li_attr$$ : ["id", "class"];
      !$is_callback$$ && $s$$23$$.types && $li_attr$$.push($s$$23$$.types.attr);
      $a_attr$$ = $$$$21$$.isArray($a_attr$$) ? $a_attr$$ : [];
      $obj$$85$$.each(function() {
        $li$$ = $$$$21$$(this);
        $tmp1$$ = {data:[]};
        $li_attr$$.length && ($tmp1$$.attr = {});
        $$$$21$$.each($li_attr$$, function($i$$237$$, $v$$2$$) {
          ($tmp2$$ = $li$$.attr($v$$2$$)) && ($tmp2$$.length && $tmp2$$.replace(/oj-tree[^ ]*/ig, "").length) && ($tmp1$$.attr[$v$$2$$] = (" " + $tmp2$$).replace(/ oj-tree[^ ]*/ig, "").replace(/\s+$/ig, " ").replace(/^ /, "").replace(/ $/, ""))
        });
        $li$$.hasClass("oj-tree-open") && ($tmp1$$.state = "open");
        $li$$.hasClass("oj-tree-closed") && ($tmp1$$.state = "closed");
        $li$$.data() && ($tmp1$$.$metadata$ = $li$$.data());
        $a$$69$$ = $li$$.children("a");
        $a$$69$$.each(function() {
          $t$$8$$ = $$$$21$$(this);
          $a_attr$$.length || -1 !== $$$$21$$.inArray("languages", $s$$23$$.plugins) || $t$$8$$.children("ins").get(0).style.backgroundImage.length || $t$$8$$.children("ins").get(0).className && $t$$8$$.children("ins").get(0).className.replace(/oj-tree[^ ]*|$/ig, "").length ? ($lang$$ = !1, -1 !== $$$$21$$.inArray("languages", $s$$23$$.plugins) && ($$$$21$$.isArray($s$$23$$.languages) && $s$$23$$.languages.length) && $$$$21$$.each($s$$23$$.languages, function($l$$8$$, $lv$$) {
            if($t$$8$$.hasClass($lv$$)) {
              return $lang$$ = $lv$$, !1
            }
          }), $tmp2$$ = {attr:{}, title:$_this$$17$$.getText($t$$8$$, $lang$$)}, $$$$21$$.each($a_attr$$, function($k$$7$$, $z$$4$$) {
            $tmp2$$.attr[$z$$4$$] = (" " + ($t$$8$$.attr($z$$4$$) || "")).replace(/ oj-tree[^ ]*/ig, "").replace(/\s+$/ig, " ").replace(/^ /, "").replace(/ $/, "")
          }), -1 !== $$$$21$$.inArray("languages", $s$$23$$.plugins) && ($$$$21$$.isArray($s$$23$$.languages) && $s$$23$$.languages.length) && $$$$21$$.each($s$$23$$.languages, function($k$$8$$, $z$$5$$) {
            if($t$$8$$.hasClass($z$$5$$)) {
              return $tmp2$$.language = $z$$5$$, !0
            }
          }), $t$$8$$.children("ins").get(0).className.replace(/oj-tree[^ ]*|$/ig, "").replace(/^\s+$/ig, "").length && ($tmp2$$.$icon$ = $t$$8$$.children("ins").get(0).className.replace(/oj-tree[^ ]*|$/ig, "").replace(/\s+$/ig, " ").replace(/^ /, "").replace(/ $/, "")), $t$$8$$.children("ins").get(0).style.backgroundImage.length && ($tmp2$$.$icon$ = $t$$8$$.children("ins").get(0).style.backgroundImage.replace("url(", "").replace(")", ""))) : $tmp2$$ = $_this$$17$$.getText($t$$8$$);
          1 < $a$$69$$.length ? $tmp1$$.data.push($tmp2$$) : $tmp1$$.data = $tmp2$$
        });
        $li$$ = $li$$.find("\x3e ul \x3e li");
        $li$$.length && ($tmp1$$.children = $_this$$17$$.$_getJson$($li$$, $li_attr$$, $a_attr$$, !0));
        $result$$17$$.push($tmp1$$)
      });
      return $result$$17$$
    }, $_correct_state$:function($obj$$86$$) {
      $obj$$86$$ = this.$_getNode$($obj$$86$$);
      if(!$obj$$86$$ || -1 === $obj$$86$$) {
        return!1
      }
      $obj$$86$$.removeClass("oj-tree-closed oj-tree-open").removeAttr("aria-expanded").addClass("oj-tree-leaf").children("ul").remove();
      this.$_emitEvent$({obj:$obj$$86$$}, "correct_state")
    }, $_core_notify$:function($n$$26$$, $data$$116$$) {
      $data$$116$$.$opened$ && this.$_expand$($n$$26$$, !1, !0)
    }, $_loaded$:function() {
      this.$_emitEvent$(null, "loaded")
    }, $_load_node_html$:function($obj$$87$$, $s_call$$5$$, $e_call$$5$$) {
      function $success_func$$1$$() {
      }
      function $error_func$$1$$() {
      }
      var $d$$11_s$$24$$ = this.$_getOptions$().data, $data$$117$$ = $d$$11_s$$24$$ && $d$$11_s$$24$$.data || null, $ajax$$2$$ = $d$$11_s$$24$$ && $d$$11_s$$24$$.ajax || null;
      if(($obj$$87$$ = this.$_getNode$($obj$$87$$)) && -1 !== $obj$$87$$) {
        if($obj$$87$$.data("oj-tree-is-loading")) {
          return
        }
        $obj$$87$$.data("oj-tree-is-loading", !0)
      }
      switch(!0) {
        case !$data$$117$$ && !$ajax$$2$$ && $d$$11_s$$24$$ && "string" === typeof $d$$11_s$$24$$:
          this.$_loadHtmlString$($d$$11_s$$24$$, $obj$$87$$, $s_call$$5$$, $e_call$$5$$);
          break;
        case $$$$21$$.isFunction($data$$117$$):
          $data$$117$$.call(this, $obj$$87$$, $$$$21$$.proxy(function($d$$12$$) {
            this.$_loadHtmlString$($d$$12$$, $obj$$87$$, $s_call$$5$$, $e_call$$5$$)
          }, this));
          break;
        case !$data$$117$$ && !$ajax$$2$$:
          $obj$$87$$ && -1 != $obj$$87$$ || (this.$_$container_ul$.empty().append(this.$_data$.html.$markup$).find("li, a").filter(function() {
            return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName
          }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon"), this.$_insertHtmlTextSpan$(this.$_$container_ul$), this.$_data$.types.$defType$ && this.$_addDefType$(this.$_$container_ul$), this.$_clean_node$(), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"), this.$_$container_ul$.find("a").attr("tabindex", -1));
          $s_call$$5$$ && $s_call$$5$$.call(this);
          break;
        case !!$data$$117$$ && !$ajax$$2$$ || !!$data$$117$$ && !!$ajax$$2$$ && (!$obj$$87$$ || -1 === $obj$$87$$):
          $obj$$87$$ && -1 != $obj$$87$$ || ($d$$11_s$$24$$ = $$$$21$$($data$$117$$), $d$$11_s$$24$$.is("ul") || ($d$$11_s$$24$$ = $$$$21$$("\x3cul /\x3e").append($d$$11_s$$24$$)), this.$_$container_ul$.empty().append($d$$11_s$$24$$.children()).find("li, a").filter(function() {
            return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName
          }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon"), this.$_insertHtmlTextSpan$(this.$_$container_ul$), this.$_data$.types.$defType$ && this.$_addDefType$(this.$_$container_ul$), this.$_clean_node$(), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"), this.$_$container_ul$.find("a").attr("tabindex", "-1"));
          $s_call$$5$$ && $s_call$$5$$.call(this);
          break;
        case !$data$$117$$ && !!$ajax$$2$$ || !!$data$$117$$ && !!$ajax$$2$$ && $obj$$87$$ && -1 !== $obj$$87$$:
          $obj$$87$$ = this.$_getNode$($obj$$87$$), $error_func$$1$$ = function $$error_func$$1$$$($x$$57$$, $t$$9$$, $e$$75$$) {
            var $ef$$1$$ = this.$_getOptions$().data.ajax.error;
            $ef$$1$$ && $ef$$1$$.call(this, $x$$57$$, $t$$9$$, $e$$75$$);
            -1 != $obj$$87$$ && $obj$$87$$.length ? ($obj$$87$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$87$$.removeData("oj-tree-is-loading"), "success" === $t$$9$$ && this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$87$$)) : "success" === $t$$9$$ && this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty();
            $e_call$$5$$ && $e_call$$5$$.call(this)
          }, $success_func$$1$$ = function $$success_func$$1$$$($d$$13_parent$$26$$, $t$$10$$, $x$$58$$) {
            var $sf$$1$$ = this.$_getOptions$().data.ajax.success;
            $sf$$1$$ && ($d$$13_parent$$26$$ = $sf$$1$$.call(this, $d$$13_parent$$26$$, $t$$10$$, $x$$58$$) || $d$$13_parent$$26$$);
            if("" === $d$$13_parent$$26$$ || $d$$13_parent$$26$$ && $d$$13_parent$$26$$.toString && "" === $d$$13_parent$$26$$.toString().replace(/^[\s\n]+$/, "")) {
              return $error_func$$1$$.call(this, $x$$58$$, $t$$10$$, "")
            }
            $d$$13_parent$$26$$ ? ($d$$13_parent$$26$$ = $$$$21$$($d$$13_parent$$26$$), $d$$13_parent$$26$$.is("ul") || ($d$$13_parent$$26$$ = $$$$21$$("\x3cul /\x3e").append($d$$13_parent$$26$$)), -1 != $obj$$87$$ && $obj$$87$$ ? ($obj$$87$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), this.$_removeEmptyUL$($obj$$87$$), $obj$$87$$.append($d$$13_parent$$26$$).children("ul").find("li, a").filter(function() {
              return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName
            }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon"), $obj$$87$$.removeData("oj-tree-is-loading"), $d$$13_parent$$26$$ = $obj$$87$$) : (this.$_$container_ul$.empty().append($d$$13_parent$$26$$.children()).find("li, a").filter(function() {
              return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName
            }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon"), $d$$13_parent$$26$$ = this.$_$container_ul$), this.$_handleHtmlParentNoChildren$($d$$13_parent$$26$$), this.$_insertHtmlTextSpan$($d$$13_parent$$26$$), this.$_data$.types.$defType$ && $d$$13_parent$$26$$ && this.$_addDefType$(this.$_$container_ul$), this.$_clean_node$($obj$$87$$), $s_call$$5$$ && $s_call$$5$$.call(this)) : 
            ($obj$$87$$ && -1 !== $obj$$87$$ ? ($obj$$87$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$87$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$87$$), $s_call$$5$$ && $s_call$$5$$.call(this))) : this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$5$$ && $s_call$$5$$.call(this)), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"))
          }, $d$$11_s$$24$$.ajax.context = this, $d$$11_s$$24$$.ajax.error = $error_func$$1$$, $d$$11_s$$24$$.ajax.success = $success_func$$1$$, $d$$11_s$$24$$.ajax.dataType || ($d$$11_s$$24$$.ajax.dataType = "html"), $$$$21$$.isFunction($d$$11_s$$24$$.ajax.url) && ($d$$11_s$$24$$.ajax.url = $d$$11_s$$24$$.ajax.url.call(this, $obj$$87$$)), $$$$21$$.isFunction($d$$11_s$$24$$.ajax.data) && ($d$$11_s$$24$$.ajax.data = $d$$11_s$$24$$.ajax.data.call(this, $obj$$87$$)), $$$$21$$.ajax($d$$11_s$$24$$.ajax)
      }
    }, $_handleHtmlParentNoChildren$:function($lazy$$1_parent$$27$$) {
      $lazy$$1_parent$$27$$ = $lazy$$1_parent$$27$$.find($lazy$$1_parent$$27$$.is("ul") ? "li ul" : "ul").filter(function() {
        return!this.firstChild || 0 == this.childNodes.length || 1 == this.childNodes.length && 3 == this.firstChild.nodeType
      });
      $$$$21$$.each($lazy$$1_parent$$27$$, function() {
        $$$$21$$(this).closest("li").addClass("oj-tree-closed")
      })
    }, $_removeEmptyUL$:function($l$$9_parent$$28$$) {
      $l$$9_parent$$28$$ = $l$$9_parent$$28$$.find("ul").filter(function() {
        return!this.firstChild || 0 == this.childNodes.length || 1 == this.childNodes.length && 3 == this.firstChild.nodeType
      });
      0 < $l$$9_parent$$28$$.length && $l$$9_parent$$28$$.remove()
    }, $_loadHtmlString$:function($parent$$29_s$$25$$, $obj$$88$$, $s_call$$6$$) {
      $parent$$29_s$$25$$ && "" !== $parent$$29_s$$25$$ && $parent$$29_s$$25$$.toString && "" !== $parent$$29_s$$25$$.toString().replace(/^[\s\n]+$/, "") ? ($parent$$29_s$$25$$ = $$$$21$$($parent$$29_s$$25$$), $parent$$29_s$$25$$.is("ul") || ($parent$$29_s$$25$$ = $$$$21$$("\x3cul /\x3e").append($parent$$29_s$$25$$)), -1 != $obj$$88$$ && $obj$$88$$ ? ($obj$$88$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$88$$.append($parent$$29_s$$25$$).children("ul").find("li, a").filter(function() {
        return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName
      }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon"), $obj$$88$$.removeData("oj-tree-is-loading"), $parent$$29_s$$25$$ = $obj$$88$$, this.$_addDefType$(this.$obj$)) : (this.$_$container_ul$.empty().append($parent$$29_s$$25$$.children()).find("li, a").filter(function() {
        return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName
      }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon"), $parent$$29_s$$25$$ = this.$_$container_ul$, this.$_addDefType$(this.$_$container_ul$)), $parent$$29_s$$25$$ && this.$_insertHtmlTextSpan$($parent$$29_s$$25$$), this.$_clean_node$($obj$$88$$), $s_call$$6$$ && $s_call$$6$$.call(this)) : $obj$$88$$ && -1 !== $obj$$88$$ ? ($obj$$88$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), 
      $obj$$88$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$88$$), $s_call$$6$$ && $s_call$$6$$.call(this))) : this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$6$$ && $s_call$$6$$.call(this))
    }, $_insertHtmlTextSpan$:function($elem$$43$$) {
      $$$$21$$.each($elem$$43$$.find("li a"), function($i$$238$$, $val$$46$$) {
        var $ih$$ = $val$$46$$.innerHTML, $ih$$ = $ih$$.replace("ins\x3e", "ins\x3e\x3cspan class\x3d'oj-tree-title'\x3e");
        $val$$46$$.innerHTML = $ih$$ + "\x3c/span\x3e"
      })
    }, $_addDefType$:function($obj$$89$$) {
      var $s$$26$$, $typeAttr$$;
      this.$_data$.types.$defType$ && ($typeAttr$$ = ($s$$26$$ = this.options.types) ? $s$$26$$.attr : this.$_data$.types.$defaults$.attr, $$$$21$$.each($obj$$89$$.find("li"), function($i$$239$$, $val$$47$$) {
        $val$$47$$ = $$$$21$$($val$$47$$);
        $val$$47$$.attr($typeAttr$$) || $val$$47$$.attr($typeAttr$$, "oj-tree-deftype")
      }))
    }, $_dnd_prepare$:function() {
      var $a$$70_vars$$ = this.$_data$.dnd.$vars$;
      if($a$$70_vars$$.$r$ && $a$$70_vars$$.$r$.length) {
        this.$_data$.dnd.off = $a$$70_vars$$.$r$.offset();
        this.$_isRtl$ && (this.$_data$.dnd.off.right = this.$_data$.dnd.off.left + $a$$70_vars$$.$r$.width());
        if(this.$_data$.dnd.$foreign$) {
          return $a$$70_vars$$ = this.options.dnd.drag_check.call(this, {o:$a$$70_vars$$.$o$, r:$a$$70_vars$$.$r$}), this.$_data$.dnd.after = $a$$70_vars$$.after, this.$_data$.dnd.before = $a$$70_vars$$.before, this.$_data$.dnd.inside = $a$$70_vars$$.inside, this.$_data$.dnd.$prepared$ = !0, this.$_dnd_show$()
        }
        this.$_prepare_move$($a$$70_vars$$.$o$, $a$$70_vars$$.$r$, "before");
        this.$_data$.dnd.before = this.check_move();
        this.$_prepare_move$($a$$70_vars$$.$o$, $a$$70_vars$$.$r$, "after");
        this.$_data$.dnd.after = this.check_move();
        this.$_is_loaded$($a$$70_vars$$.$r$) ? (this.$_prepare_move$($a$$70_vars$$.$o$, $a$$70_vars$$.$r$, "inside"), this.$_data$.dnd.inside = this.check_move()) : this.$_data$.dnd.inside = !1;
        this.$_data$.dnd.$prepared$ = !0;
        return this.$_dnd_show$()
      }
    }, $_dnd_show$:function() {
      var $dnd_pos$$10$$ = this.$_data$.dnd;
      if($dnd_pos$$10$$.$prepared$) {
        var $o$$18$$ = ["before", "inside", "after"], $r$$4$$ = !1, $ctl$$ = $dnd_pos$$10$$.$ctl$, $vars$$1$$ = $dnd_pos$$10$$.$vars$, $o$$18$$ = $dnd_pos$$10$$.$w$ < this.$_data$.$core$.$li_height$ / 3 ? ["before", "inside", "after"] : $dnd_pos$$10$$.$w$ <= 2 * this.$_data$.$core$.$li_height$ / 3 ? $dnd_pos$$10$$.$w$ < this.$_data$.$core$.$li_height$ / 2 ? ["inside", "before", "after"] : ["inside", "after", "before"] : ["after", "inside", "before"];
        $$$$21$$.each($o$$18$$, $$$$21$$.proxy(function($i$$240$$, $val$$48$$) {
          if(this.$_data$.dnd[$val$$48$$]) {
            return $ctl$$.helper.children("ins").removeClass("oj-tree-invalid").addClass("oj-tree-ok"), $r$$4$$ = $val$$48$$, !1
          }
        }, this));
        !1 === $r$$4$$ && $ctl$$.helper.children("ins").removeClass("oj-tree-ok").addClass("oj-tree-invalid");
        $dnd_pos$$10$$ = this.$_isRtl$ ? this.$_data$.dnd.off.right - 18 : this.$_data$.dnd.off.left + 10;
        switch($r$$4$$) {
          case "before":
            $vars$$1$$.$m$.css({left:$dnd_pos$$10$$ + "px", top:this.$_data$.dnd.off.top - 8 + "px"}).show();
            $vars$$1$$.$ml$ && $vars$$1$$.$ml$.css({left:$dnd_pos$$10$$ + 8 + "px", top:this.$_data$.dnd.off.top - 3 + "px"}).show();
            break;
          case "after":
            $vars$$1$$.$m$.css({left:$dnd_pos$$10$$ + "px", top:this.$_data$.dnd.off.top + this.$_data$.$core$.$li_height$ - 8 + "px"}).show();
            $vars$$1$$.$ml$ && $vars$$1$$.$ml$.css({left:$dnd_pos$$10$$ + 8 + "px", top:this.$_data$.dnd.off.top + this.$_data$.$core$.$li_height$ - 3 + "px"}).show();
            break;
          case "inside":
            $vars$$1$$.$m$.css({left:$dnd_pos$$10$$ + (this.$_isRtl$ ? -4 : 4) + "px", top:this.$_data$.dnd.off.top + this.$_data$.$core$.$li_height$ / 2 - 5 + "px"}).show();
            $vars$$1$$.$ml$ && $vars$$1$$.$ml$.hide();
            break;
          default:
            $vars$$1$$.$m$.hide(), $vars$$1$$.$ml$ && $vars$$1$$.$ml$.hide()
        }
        return $vars$$1$$.$last_pos$ = $r$$4$$
      }
    }, $_dnd_enter$:function($obj$$90_openTimeout_s$$27$$) {
      var $dnd$$1$$ = this.$_data$.dnd, $vars$$2$$ = $dnd$$1$$.$vars$;
      $dnd$$1$$.$mto$ && (clearTimeout($dnd$$1$$.$mto$), $dnd$$1$$.$mto$ = !1);
      $dnd$$1$$.$prepared$ = !1;
      $vars$$2$$.$r$ = this.$_getNode$($obj$$90_openTimeout_s$$27$$);
      $obj$$90_openTimeout_s$$27$$ = this.options.dnd;
      var $checkTimeout$$ = $obj$$90_openTimeout_s$$27$$.check_timeout;
      $checkTimeout$$ ? ($dnd$$1$$.$to1$ && clearTimeout($dnd$$1$$.$to1$), $dnd$$1$$.$to1$ = setTimeout($$$$21$$.proxy(this.$_dnd_prepare$, this), $checkTimeout$$)) : this.$_dnd_prepare$();
      ($obj$$90_openTimeout_s$$27$$ = $obj$$90_openTimeout_s$$27$$.open_timeout) ? ($dnd$$1$$.$to2$ && clearTimeout($dnd$$1$$.$to2$), $vars$$2$$.$r$ && ($vars$$2$$.$r$.length && $vars$$2$$.$r$.hasClass("oj-tree-closed")) && ($dnd$$1$$.$to2$ = setTimeout($$$$21$$.proxy(this.$_dnd_open$, this), $obj$$90_openTimeout_s$$27$$))) : $vars$$2$$.$r$ && ($vars$$2$$.$r$.length && $vars$$2$$.$r$.hasClass("oj-tree-closed")) && this.$_dnd_open$()
    }, $_dnd_leave$:function($e$$76$$) {
      var $dnd$$2$$ = this.$_data$.dnd, $vars$$3$$ = this.$_data$.dnd.$vars$;
      $dnd$$2$$.after = !1;
      $dnd$$2$$.before = !1;
      $dnd$$2$$.inside = !1;
      this.$_data$.dnd.$ctl$.helper.children("ins").removeClass("oj-tree-ok").addClass("oj-tree-invalid");
      $vars$$3$$.$m$.hide();
      $vars$$3$$.$ml$ && $vars$$3$$.$ml$.hide();
      $vars$$3$$.$r$ && $vars$$3$$.$r$[0] === $e$$76$$.target.parentNode && ($dnd$$2$$.$to1$ && (clearTimeout($dnd$$2$$.$to1$), $dnd$$2$$.$to1$ = !1), $dnd$$2$$.$to2$ && (clearTimeout($dnd$$2$$.$to2$), $dnd$$2$$.$to2$ = !1))
    }, $_dnd_open$:function() {
      var $vars$$4$$ = this.$_data$.dnd.$vars$;
      this.$_data$.dnd.$to2$ = !1;
      this.expand($vars$$4$$.$r$, $$$$21$$.proxy(this.$_dnd_prepare$, this), !0)
    }, $_dnd_finish$:function($e$$77$$) {
      var $dnd$$3$$ = this.$_data$.dnd, $vars$$5$$ = this.$_data$.dnd.$vars$;
      $dnd$$3$$.$foreign$ ? ($dnd$$3$$.after || $dnd$$3$$.before || $dnd$$3$$.inside) && this.options.dnd.drag_finish.call(this, {o:$vars$$5$$.$o$, r:$vars$$5$$.$r$, p:$vars$$5$$.$last_pos$}) : (this.$_dnd_prepare$(), this.$_move_node$($vars$$5$$.$o$, $vars$$5$$.$r$, $vars$$5$$.$last_pos$, $e$$77$$[this.options.dnd.copy_modifier + "Key"]));
      $vars$$5$$.$o$ = !1;
      $vars$$5$$.$r$ = !1;
      $vars$$5$$.$m$.hide();
      $vars$$5$$.$ml$ && $vars$$5$$.$ml$.hide()
    }, $_start_drag$:function($obj$$91$$, $e$$78$$) {
      var $dnd$$4$$ = this.$_data$.dnd, $vars$$6$$ = this.$_data$.dnd.$vars$;
      $vars$$6$$.$o$ = this.$_getNode$($obj$$91$$);
      if(!$vars$$6$$.$o$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        this.$_data$.ui && this.isSelected($vars$$6$$.$o$) && ($vars$$6$$.$o$ = this.$_getNode$(null, !0));
        var $dt$$ = 1 < $vars$$6$$.$o$.length ? this.$getTranslatedString$("m_multisel") : this.getText($vars$$6$$.$o$), $cnt$$ = this.$_$container$;
        this.$_data$.$core$.$htmlTitles$ || ($dt$$ = $dt$$.replace(/</ig, "\x26lt;").replace(/>/ig, "\x26gt;"));
        this.$_drag_start$($e$$78$$, {$jstree$:!0, $obj$:$vars$$6$$.$o$}, "\x3cins class\x3d'oj-tree-icon'\x3e\x3c/ins\x3e" + $dt$$);
        this.$_data$.$themes$ && ($vars$$6$$.$m$ && $vars$$6$$.$m$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $dnd$$4$$.$ctl$.helper.addClass("oj-tree-dnd-helper oj-tree-" + this.$_data$.$themes$.$theme$));
        $dnd$$4$$.$cof$ = $cnt$$.offset();
        $dnd$$4$$.$cw$ = parseInt($cnt$$.width(), 10);
        $dnd$$4$$.ch = parseInt($cnt$$.height(), 10);
        $dnd$$4$$.$active$ = !0
      }
    }, $_drag_start$:function($e$$79$$, $data$$118$$, $html$$4$$) {
      var $ctl$$1$$ = this.$_data$.dnd.$ctl$;
      $ctl$$1$$.$is_drag$ && this.$_drag_stop$();
      try {
        $e$$79$$.currentTarget.unselectable = "on", $e$$79$$.currentTarget.onselectstart = $JSCompiler_returnArg$$(!1), $e$$79$$.currentTarget.style && ($e$$79$$.currentTarget.style.MozUserSelect = "none")
      }catch($err$$5$$) {
      }
      $ctl$$1$$.$init_x$ = $e$$79$$.pageX;
      $ctl$$1$$.$init_y$ = $e$$79$$.pageY;
      $ctl$$1$$.$user_data$ = $data$$118$$;
      $ctl$$1$$.$is_down$ = !0;
      $ctl$$1$$.helper = $$$$21$$("\x3cdiv class\x3d'ojtreeu-dragged' /\x3e").html($html$$4$$);
      $$$$21$$(document).bind("mousemove", this.$_drag$.bind(this));
      $$$$21$$(document).bind("mouseup", this.$_drag_stop$.bind(this));
      return!1
    }, $_drag$:function($e$$80$$) {
      var $ctl$$2$$ = this.$_data$.dnd.$ctl$, $vars$$7$$ = this.$_data$.dnd.$vars$;
      if($ctl$$2$$.$is_down$) {
        if(!$ctl$$2$$.$is_drag$) {
          if(5 < Math.abs($e$$80$$.pageX - $ctl$$2$$.$init_x$) || 5 < Math.abs($e$$80$$.pageY - $ctl$$2$$.$init_y$)) {
            $ctl$$2$$.helper.appendTo("body"), $ctl$$2$$.$is_drag$ = !0, $$$$21$$(document).triggerHandler("drag_start.ojtreeu", [{event:$e$$80$$, data:$ctl$$2$$.$user_data$}])
          }else {
            return
          }
        }
        if("mousemove" === $e$$80$$.type) {
          var $d$$14_l$$10$$ = $$$$21$$(document), $t$$11$$ = $d$$14_l$$10$$.scrollTop(), $d$$14_l$$10$$ = $d$$14_l$$10$$.scrollLeft();
          20 > $e$$80$$.pageY - $t$$11$$ ? ($vars$$7$$.$sti$ && "down" === $vars$$7$$.$dir1$ && (clearInterval($vars$$7$$.$sti$), $vars$$7$$.$sti$ = void 0), $vars$$7$$.$sti$ || ($vars$$7$$.$dir1$ = "up", $vars$$7$$.$sti$ = setInterval(function() {
            $$$$21$$(document).scrollTop($$$$21$$(document).scrollTop() - $ctl$$2$$.$scroll_spd$)
          }, 150))) : $vars$$7$$.$sti$ && "up" === $vars$$7$$.$dir1$ && (clearInterval($vars$$7$$.$sti$), $vars$$7$$.$sti$ = void 0);
          20 > $$$$21$$(window).height() - ($e$$80$$.pageY - $t$$11$$) ? ($vars$$7$$.$sti$ && "up" === $vars$$7$$.$dir1$ && (clearInterval($vars$$7$$.$sti$), $vars$$7$$.$sti$ = void 0), $vars$$7$$.$sti$ || ($vars$$7$$.$dir1$ = "down", $vars$$7$$.$sti$ = setInterval(function() {
            $$$$21$$(document).scrollTop(Number($$$$21$$(document).scrollTop()) + $ctl$$2$$.$scroll_spd$)
          }, 150))) : $vars$$7$$.$sti$ && "down" === $vars$$7$$.$dir1$ && (clearInterval($vars$$7$$.$sti$), $vars$$7$$.$sti$ = void 0);
          20 > $e$$80$$.pageX - $d$$14_l$$10$$ ? ($vars$$7$$.$sli$ && "right" === $vars$$7$$.$dir2$ && (clearInterval($vars$$7$$.$sli$), $vars$$7$$.$sli$ = void 0), $vars$$7$$.$sli$ || ($vars$$7$$.$dir2$ = "left", $vars$$7$$.$sli$ = setInterval(function() {
            $$$$21$$(document).scrollLeft($$$$21$$(document).scrollLeft() - $ctl$$2$$.$scroll_spd$)
          }, 150))) : $vars$$7$$.$sli$ && "left" === $vars$$7$$.$dir2$ && (clearInterval($vars$$7$$.$sli$), $vars$$7$$.$sli$ = void 0);
          20 > $$$$21$$(window).width() - ($e$$80$$.pageX - $d$$14_l$$10$$) ? ($vars$$7$$.$sli$ && "left" === $vars$$7$$.$dir2$ && (clearInterval($vars$$7$$.$sli$), $vars$$7$$.$sli$ = void 0), $vars$$7$$.$sli$ || ($vars$$7$$.$dir2$ = "right", $vars$$7$$.$sli$ = setInterval(function() {
            $$$$21$$(document).scrollLeft(Number($$$$21$$(document).scrollLeft()) + $ctl$$2$$.$scroll_spd$)
          }, 150))) : $vars$$7$$.$sli$ && "right" === $vars$$7$$.$dir2$ && (clearInterval($vars$$7$$.$sli$), $vars$$7$$.$sli$ = void 0)
        }
        $ctl$$2$$.helper.css({left:$e$$80$$.pageX + $ctl$$2$$.$helper_left$ + "px", top:$e$$80$$.pageY + $ctl$$2$$.$helper_top$ + "px"});
        $$$$21$$(document).triggerHandler("drag.ojtreeu", [{event:$e$$80$$, data:$ctl$$2$$.$user_data$}])
      }
    }, $_drag_stop$:function($e$$81$$) {
      var $vars$$8$$ = this.$_data$.dnd.$vars$, $ctl$$3$$ = this.$_data$.dnd.$ctl$;
      $vars$$8$$.$sli$ && clearInterval($vars$$8$$.$sli$);
      $vars$$8$$.$sti$ && clearInterval($vars$$8$$.$sti$);
      $$$$21$$(document).unbind("mousemove", this.$_drag$.bind(this));
      $$$$21$$(document).unbind("mouseup", this.$_drag_stop$.bind(this));
      $$$$21$$(document).triggerHandler("drag_stop.ojtreeu", [{event:$e$$81$$ ? $e$$81$$ : {}, data:$ctl$$3$$.$user_data$}]);
      $ctl$$3$$.helper.remove();
      $ctl$$3$$.$init_x$ = 0;
      $ctl$$3$$.$init_y$ = 0;
      $ctl$$3$$.$user_data$ = {};
      $ctl$$3$$.$is_down$ = !1;
      $ctl$$3$$.$is_drag$ = !1
    }, $_save_opened$:function() {
      var $_this$$18$$ = this;
      this.$_data$.$core$.$toExpand$ = [];
      this.$_$container_ul$.find("li.oj-tree-open").each(function() {
        this.id && $_this$$18$$.$_data$.$core$.$toExpand$.push("#" + this.id.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:"))
      });
      this.$_emitEvent$($_this$$18$$.$_data$.$core$.$toExpand$, "save_opened")
    }, $_reload_nodes$:function($bExpandAll_is_callback$$1$$) {
      var $_this$$19$$ = this, $done$$ = !0, $current$$6$$ = [], $remaining$$ = [];
      $bExpandAll_is_callback$$1$$ || (this.$_data$.$core$.$reopen$ = !1, this.$_data$.$core$.$refreshing$ = !0, ($bExpandAll_is_callback$$1$$ = "all" === this.$_data$.$core$.$toExpand$) ? this.$_data$.$core$.$toExpand$ = [] : "array" === $$$$21$$.type(this.$_data$.$core$.$toExpand$) && (0 < this.$_data$.$core$.$toExpand$.length && "all" === this.$_data$.$core$.$toExpand$[0]) && (this.$_data$.$core$.$toExpand$.length = 0, $bExpandAll_is_callback$$1$$ = !0), $bExpandAll_is_callback$$1$$ && this.$_$container_ul$.find("li.oj-tree-closed").each(function() {
        $$$$21$$(this).attr("id");
        $_this$$19$$.$_data$.$core$.$toExpand$.push("#" + $$$$21$$(this).attr("id"))
      }), this.$_data$.$core$.$toExpand$ = $$$$21$$.map($$$$21$$.makeArray(this.$_data$.$core$.$toExpand$), function($n$$27$$) {
        return"#" + $n$$27$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:")
      }), this.$_data$.$core$.$toLoad$ = $$$$21$$.map($$$$21$$.makeArray(this.$_data$.$core$.$toLoad$), function($n$$28$$) {
        return"#" + $n$$28$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:")
      }), this.$_data$.$core$.$toExpand$.length && (this.$_data$.$core$.$toLoad$ = this.$_data$.$core$.$toLoad$.concat(this.$_data$.$core$.$toExpand$)));
      this.$_data$.$core$.$toLoad$.length && ($$$$21$$.each(this.$_data$.$core$.$toLoad$, function($i$$241$$, $val$$49$$) {
        if("#" == $val$$49$$) {
          return!0
        }
        $$$$21$$($val$$49$$).length ? $current$$6$$.push($val$$49$$) : $remaining$$.push($val$$49$$)
      }), $current$$6$$.length && (this.$_data$.$core$.$toLoad$ = $remaining$$, $$$$21$$.each($current$$6$$, function($i$$242$$, $val$$50$$) {
        $_this$$19$$.$_is_loaded$($val$$50$$) || ($_this$$19$$.$_load_node$($val$$50$$, function() {
          $_this$$19$$.$_reload_nodes$(!0)
        }, function() {
          $_this$$19$$.$_reload_nodes$(!0)
        }), $done$$ = !1)
      })));
      this.$_data$.$core$.$toExpand$.length && $$$$21$$.each(this.$_data$.$core$.$toExpand$, function($i$$243$$, $val$$51$$) {
        $_this$$19$$.expand($val$$51$$, !1, !0)
      });
      $done$$ && (this.$_data$.$core$.$reopen$ && clearTimeout(this.$_data$.$core$.$reopen$), this.$_data$.$core$.$reopen$ = setTimeout(function() {
        $_this$$19$$.$_emitEvent$({}, "reload_nodes")
      }, 50), this.$_data$.$core$.$refreshing$ = !1, this.$_reopen$())
    }, set_theme:function($theme_name$$, $theme_url$$) {
      if(!$theme_name$$) {
        return!1
      }
      $theme_url$$ || ($theme_url$$ = this.$_data$.$themes$.$_themes$ + $theme_name$$ + "/style.css");
      -1 == $$$$21$$.inArray($theme_url$$, this.$_data$.$themes$.$themes_loaded$) && ($_addSheet$$({url:$theme_url$$}), this.$_data$.$themes$.$themes_loaded$.push($theme_url$$));
      this.$_data$.$themes$.$theme$ != $theme_name$$ && (this.$_$container$.removeClass("oj-tree-" + this.$_data$.$themes$.$theme$), this.$_data$.$themes$.$theme$ = $theme_name$$);
      this.$_$container$.addClass("oj-tree-" + $theme_name$$);
      this.$_data$.$themes$.$dots$ ? this.show_dots() : this.hide_dots();
      this.$_data$.$themes$.icons ? this.show_icons() : this.hide_icons();
      this.$_emitEvent$(null, "set_theme")
    }, show_dots:function() {
      this.$_data$.$themes$.$dots$ = !0;
      this.$_$container$.children("ul").removeClass("oj-tree-no-dots")
    }, hide_dots:function() {
      this.$_data$.$themes$.$dots$ = !1;
      this.$_$container$.children("ul").addClass("oj-tree-no-dots")
    }, toggle_dots:function() {
      this.$_data$.$themes$.$dots$ ? this.hide_dots() : this.show_dots()
    }, isIcons:function() {
      return this.$_data$.$themes$.icons
    }, show_icons:function() {
      this.$_data$.$themes$.icons = !0;
      this.$_$container$.children("ul").removeClass("oj-tree-no-icons")
    }, hide_icons:function() {
      this.$_data$.$themes$.icons = !1;
      this.$_$container$.children("ul").addClass("oj-tree-no-icons")
    }, toggle_icons:function() {
      this.data.$themes$.icons ? this.hide_icons() : this.show_icons()
    }, $_enableKeys$:function() {
      this.$_data$.keys.enabled = !0
    }, $_disableKeys$:function() {
      this.$_data$.keys.enabled = !1
    }, $_initTree$:function() {
      this.$_initData$();
      this.$_initCoreOpts$();
      this.$_initDSOpts$();
      this.$_initTypeOpts$();
      this.$_initDnDOpts$();
      this.$_initCore$();
      this.$_initUI$();
      this.$_initThemes$();
      this.$_initDataSource$();
      this.$_initTypes$();
      this.$_initDnD$();
      this.$_initMenu$();
      this.$_start$()
    }, $_emitEvent$:function($data$$119$$, $eventname$$) {
      if($eventname$$ && "string" === $$$$21$$.type($eventname$$)) {
        var $args$$13_rslt$$8$$, $func$$11_inst$$;
        $args$$13_rslt$$8$$ = Array.prototype.slice.call(arguments);
        var $evname_s$$inline_698$$ = $eventname$$;
        $func$$11_inst$$ = this.$_$container$;
        var $isBefore$$ = "before" === $eventname$$, $b$$inline_701_isPublic$$ = !1, $item$$8$$;
        if(!0 !== this.$_data$.$core$.locked || "unlock" === $eventname$$ || "isLocked" === $eventname$$ || "lock" === $eventname$$) {
          $evname_s$$inline_698$$ = $eventname$$;
          "rename_node" === $evname_s$$inline_698$$ ? $evname_s$$inline_698$$ = "rename" : "set_focus" === $evname_s$$inline_698$$ ? $evname_s$$inline_698$$ = "focus" : "unset_focus" === $evname_s$$inline_698$$ ? $evname_s$$inline_698$$ = "unfocus" : "delete_node" === $evname_s$$inline_698$$ ? $evname_s$$inline_698$$ = "remove" : "move_node" === $evname_s$$inline_698$$ ? $evname_s$$inline_698$$ = "move" : "create_node" === $evname_s$$inline_698$$ && ($evname_s$$inline_698$$ = "create");
          ($b$$inline_701_isPublic$$ = 0 <= $$$$21$$.inArray($evname_s$$inline_698$$, $_aEvNames$$)) || "create_node" != $evname_s$$inline_698$$ || ($b$$inline_701_isPublic$$ = !0);
          $b$$inline_701_isPublic$$ || ($evname_s$$inline_698$$ = "tree" + $evname_s$$inline_698$$);
          $item$$8$$ = $data$$119$$ ? $data$$119$$.obj : void 0;
          "loaded" === $evname_s$$inline_698$$ && ($item$$8$$ = -1);
          var $eventdata$$ = {};
          $eventdata$$.item = $item$$8$$;
          $eventdata$$.inst = $func$$11_inst$$;
          if($isBefore$$) {
            $func$$11_inst$$ = $data$$119$$.func, $eventdata$$.func = $func$$11_inst$$, $eventdata$$.args = $args$$13_rslt$$8$$, "rename" === $func$$11_inst$$ && ($eventdata$$.title = $data$$119$$.title, $eventdata$$.prevTitle = $data$$119$$.prevTitle)
          }else {
            if($b$$inline_701_isPublic$$) {
              if("move" == $evname_s$$inline_698$$) {
                $eventdata$$.position = $data$$119$$.$p$, $eventdata$$.reference = $data$$119$$.$r$, $eventdata$$.data = $data$$119$$
              }else {
                if("rename" == $evname_s$$inline_698$$) {
                  $eventdata$$.title = $data$$119$$.title, $eventdata$$.prevTitle = $data$$119$$.prevTitle
                }else {
                  if("remove" == $evname_s$$inline_698$$) {
                    $eventdata$$.parent = $data$$119$$.parent, $eventdata$$.prev = $data$$119$$.prev
                  }else {
                    if("delete" == $evname_s$$inline_698$$) {
                      $eventdata$$.prev = $data$$119$$.prev, $eventdata$$.parent = $data$$119$$.parent
                    }else {
                      if("expandAll" === $evname_s$$inline_698$$ || "collapseAll" === $evname_s$$inline_698$$ || "deselectAll" === $evname_s$$inline_698$$) {
                        $eventdata$$.targ = $data$$119$$.targ
                      }
                    }
                  }
                }
              }
            }
          }
          if($b$$inline_701_isPublic$$) {
            if($args$$13_rslt$$8$$ = this._trigger($evname_s$$inline_698$$, new $$$$21$$.Event("oj" + $evname_s$$inline_698$$), $eventdata$$), $isBefore$$) {
              return"undefined" != typeof $args$$13_rslt$$8$$ && ($args$$13_rslt$$8$$ = $args$$13_rslt$$8$$ ? !0 : !1), $args$$13_rslt$$8$$
            }
          }else {
            this.$_$container$.trigger($evname_s$$inline_698$$, $eventdata$$)
          }
        }
      }
    }, $__rollback$:function() {
      return this.get_rollback()
    }, $__call_old$:$JSCompiler_emptyFn$$(), $_start$:function() {
      this.$set_focus$();
      this.$_isRtl$ && this.$_$container$.addClass("oj-tree-rtl").css("direction", "rtl");
      this.$_$container$.html("\x3cul role\x3d'tree' tabindex\x3d'0' class\x3d'oj-tree-list' style\x3d'outline:none'" + (-1 === this.$_data$.$core$.$selectMode$ ? " aria-multiselectable\x3d'true'" : "") + "\x3e\x3cli class\x3d'oj-tree-last oj-tree-leaf'\x3e\x3cins\x3e\x26#160;\x3c/ins\x3e\x3ca class\x3d'oj-tree-loading' href\x3d'#'\x3e\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e" + this.$getTranslatedString$("m_loading") + "\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e");
      this.$_$container_ul$ = this.$_$container$.children("ul:eq(0)");
      this.$_$container$.data("oj-tree-instance-id", this.$_index$);
      this.$_data$.$core$.$li_height$ = this.$_$container_ul$.find("li.oj-tree-closed, li.oj-tree-leaf").eq(0).height() || 18;
      this.$_$container$.delegate(".oj-tree-list li \x3e ins", "click.ojtree", $$$$21$$.proxy(function($event$$260_trgt$$) {
        $event$$260_trgt$$ = $$$$21$$($event$$260_trgt$$.target);
        this.toggleExpand($event$$260_trgt$$)
      }, this)).bind("mousedown.ojtree", $$$$21$$.proxy(function() {
        this.$set_focus$()
      }, this)).bind("dblclick.ojtree", function() {
        var $sel$$2$$;
        if(document.selection && document.selection.empty) {
          document.selection.empty()
        }else {
          if(window.getSelection) {
            $sel$$2$$ = window.getSelection();
            try {
              $sel$$2$$.removeAllRanges(), $sel$$2$$.collapse(document.getElementsByTagName("body")[0], 0)
            }catch($err$$6$$) {
            }
          }
        }
      });
      this.$_$container_ul$.focus($$$$21$$.proxy(function() {
        this.$_data$.ui.$focused$ = !0
      }, this)).blur($$$$21$$.proxy(function() {
        this.$_data$.ui.$focused$ = !1
      }, this));
      this.$_data$.$core$.$notify_plugins$ && this.$_$container$.bind("treeload_node", $$$$21$$.proxy(function($e$$84$$, $ui$$18$$) {
        var $o$$19$$ = this.$_getNode$($ui$$18$$.item), $t$$12$$ = this;
        -1 === $o$$19$$ && ($o$$19$$ = this.$_$container_ul$);
        $o$$19$$.length && $o$$19$$.find("li").each(function() {
          var $th$$ = $$$$21$$(this);
          $th$$.data("oj-tree") && $$$$21$$.each($th$$.data("oj-tree"), function($plugin$$, $values$$12$$) {
            $th$$.data[$plugin$$] && $$$$21$$.isFunction($t$$12$$["_" + $plugin$$ + "_notify"]) && $t$$12$$["_" + $plugin$$ + "_notify"].call($t$$12$$, $th$$, $values$$12$$)
          })
        })
      }, this));
      this.$_data$.$core$.$load_open$ && this.$_$container$.bind("treeload_node", $$$$21$$.proxy(function($e$$85$$, $ui$$19$$) {
        var $o$$20$$ = this.$_getNode$($ui$$19$$.item);
        -1 === $o$$20$$ && ($o$$20$$ = this.$_$container_ul$);
        $o$$20$$.length && $o$$20$$.find("li.oj-tree-open:not(:has(ul))").each(function() {
          this.$_load_node$(this, $$$$21$$.noop, $$$$21$$.noop)
        })
      }, this));
      this.$_emitEvent$({}, "init");
      0 !== this.$_data$.$ds$.type && -1 !== this.$_data$.$ds$.type ? this.$_load_node$(-1, function() {
        this.$_loaded$();
        this.$_reload_nodes$()
      }) : this.$_applyEmptyText$();
      this.$_data$.menu.$usermenu$ && this.$_applyMenu$();
      $_addKeyFilter$$({$_handler$:this.$_keyHandler$, $_selector$:this.$_$container_ul$, $_this$:this});
      this.$_enableKeys$()
    }, $_initCore$:function() {
      this.$_data$.$core$.locked = !1;
      this.$_$container$.addClass("oj-tree oj-tree-" + this.$_index$);
      this.$_$container$.css("outline", "none");
      this.$_$container$.css("MozUserSelect", "none");
      this.$_$container$.css("WebkitTouchCallout", "none");
      this.$_$container$.css("WebkitUserSelect", "none");
      this.$_$container$.css("WebkitTapHighlightColor", "rgba(0,0,0,0)")
    }, $_initUI$:function() {
      this.$_data$.ui.selected = $$$$21$$();
      this.$_data$.ui.$last_selected$ = !1;
      this.$_data$.ui.$hovered$ = null;
      this.$_$container$.delegate(".oj-tree-list a", "click.ojtree", $$$$21$$.proxy(function($event$$262$$) {
        $event$$262$$.preventDefault();
        $event$$262$$.currentTarget.blur();
        $$$$21$$($event$$262$$.currentTarget).hasClass("oj-tree-loading") || (this.$set_focus$(), this.$_select$($event$$262$$.currentTarget, !0, $event$$262$$))
      }, this)).delegate(".oj-tree-list a", "mouseenter.ojtree", $$$$21$$.proxy(function($event$$263$$) {
        $$$$21$$($event$$263$$.currentTarget).hasClass("oj-tree-loading") || this.hover($event$$263$$.target)
      }, this)).delegate(".oj-tree-list a", "mouseleave.ojtree", $$$$21$$.proxy(function($event$$264$$) {
        $$$$21$$($event$$264$$.currentTarget).hasClass("oj-tree-loading") || this.dehover($event$$264$$.target)
      }, this)).bind("treereopen", $$$$21$$.proxy(function() {
        this.reselect()
      }, this)).bind("treeget_rollback", $$$$21$$.proxy(function() {
        this.dehover();
        this.save_selected()
      }, this)).bind("treeset_rollback", $$$$21$$.proxy(function() {
        this.reselect()
      }, this)).bind("ojcollapse", $$$$21$$.proxy(function($event$$265$$, $ui$$20$$) {
        var $obj$$92$$ = this.$_getNode$($ui$$20$$.item), $clk$$ = $obj$$92$$ && $obj$$92$$.length ? $obj$$92$$.children("ul").find("a.oj-tree-clicked") : $$$$21$$();
        !1 !== this.options.selectedParentCollapse && $clk$$.length && $clk$$.each(function() {
          this.deselect(this);
          "selectParent" === this.options.selectedParentCollapse && this.select($obj$$92$$)
        })
      }, this)).bind("ojremove", $$$$21$$.proxy(function($event$$266$$, $ui$$21$$) {
        var $s$$28$$ = this.options.selectPrevOnDelete, $clk$$1_obj$$93$$ = this.$_getNode$($ui$$21$$.item), $clk$$1_obj$$93$$ = $clk$$1_obj$$93$$ && $clk$$1_obj$$93$$.length ? $clk$$1_obj$$93$$.find("a.oj-tree-clicked") : [], $_this$$21$$ = this;
        $clk$$1_obj$$93$$.each(function() {
          $_this$$21$$.deselect(this)
        });
        $s$$28$$ && $clk$$1_obj$$93$$.length && $ui$$21$$.prev.each(function() {
          if(this.parentNode) {
            return $_this$$21$$.select(this), !1
          }
        })
      }, this)).bind("ojmove", $$$$21$$.proxy(function($event$$267$$, $ui$$22$$) {
        var $data$$120$$ = $ui$$22$$.data;
        $data$$120$$.cy && ($data$$120$$.oc.find("a.oj-tree-clicked").removeClass("oj-tree-clicked"), $data$$120$$.oc.removeAttr("aria-selected"))
      }, this))
    }, $_initDataSource$:function() {
      this.$_initTreeData$();
      this.$_initJsonData$();
      this.$_initHtmlData$()
    }, $_initTreeData$:function() {
      1 === this.$_data$.$ds$.type && (this.$_tds$ = this.options.data || null, this.$_load_node$ = this.$_load_node_DS$, this.$_is_loaded$ = this.$_is_loaded_DS$, this.$_refresh$ = this.$_refresh_DS$)
    }, $_initJsonData$:function() {
      3 === this.$_data$.$ds$.type && (this.$_data$.$ds$.$progressiveUnload$ && this.$_$container$.bind("treeafter_close", function($e$$86$$, $ui$$23$$) {
        $ui$$23$$.item.children("ul").remove()
      }), this.$_load_node$ = this.$_load_node_J$, this.$_is_loaded$ = this.$_is_loaded_J$, this.$_refresh$ = this.$_refresh_json$)
    }, $_initHtmlData$:function() {
      4 === this.$_data$.$ds$.type && (this.$_data$.html.$useExistingMarkup$ && (this.$_data$.html.$markup$ = this.$_$container$.find(" \x3e ul \x3e li"), this.$_data$.html.$cloneMarkup$ = this.$_data$.html.$markup$.clone(!0), this.$_data$.html.$markup$.find("li").addBack().contents().filter(function() {
        return 3 == this.nodeType
      }).remove()), this.$_load_node$ = this.$_load_node_H$, this.$_is_loaded$ = this.$_is_loaded_H$, this.$_refresh$ = this.$_refresh_ui$)
    }, $_initThemes$:function() {
      !1 === this.$_data$.$themes$.$_themes$ && $$$$21$$("script").each(function() {
        if(this.src.toString().match(/jquery\.oj-tree[^\/]*?\.js(\?.*)?$/)) {
          return this.$_data$.$themes$.$_themes$ = this.src.toString().replace(/jquery\.oj-tree[^\/]*?\.js(\?.*)?$/, "") + "themes/", !1
        }
      });
      !1 === this.$_data$.$themes$.$_themes$ && (this.$_data$.$themes$.$_themes$ = "themes/");
      this.$_$container$.bind("treeinit", $$$$21$$.proxy(function() {
        var $s$$29$$ = this.options;
        this.$_data$.$themes$.$dots$ = $s$$29$$.dots;
        this.$_data$.$themes$.icons = $s$$29$$.icons;
        this.set_theme(this.$_data$.$themes$.$theme$, this.$_data$.$themes$.url)
      }, this)).bind("ojloaded", $$$$21$$.proxy(function() {
        this.$_data$.$themes$.$dots$ ? this.show_dots() : this.hide_dots();
        this.$_data$.$themes$.icons ? this.show_icons() : this.hide_icons()
      }, this))
    }, $_initTypes$:function() {
      var $s$$30$$ = this.options.types;
      $s$$30$$ && this.$_$container$.bind("treeinit", $$$$21$$.proxy(function() {
        var $types$$ = $$$$21$$.extend(!0, {}, $s$$30$$.types), $attr$$19$$ = $s$$30$$.attr || this.$_data$.types.$defaults$.attr, $icons_css$$ = "", $_this$$22$$ = this;
        $$$$21$$.each($types$$, function($i$$244$$, $tp$$) {
          $$$$21$$.each($tp$$, function($k$$9$$) {
            /^(maxDepth|maxChildren|icon|validChildren)$/.test($k$$9$$) || $_this$$22$$.$_data$.types.$attachTo$.push($k$$9$$)
          });
          var $ot$$ = typeof $tp$$.icon;
          if("undefined" === $ot$$) {
            $ot$$ = typeof $tp$$.image;
            if("boolean" === $ot$$ && !$tp$$.image) {
              $tp$$.image = "ojt$none"
            }else {
              if(!$tp$$.image && !$tp$$.position) {
                return!0
              }
            }
            $tp$$.icon = {};
            $tp$$.image && ($tp$$.icon.image = $tp$$.image, delete $tp$$.image);
            void 0 !== $tp$$.position && ($tp$$.icon.position = $tp$$.position, delete $tp$$.position)
          }
          if($tp$$.icon.image || $tp$$.icon.position) {
            "default" == $i$$244$$ ? ($_this$$22$$.$_data$.types.$defType$ = !0, $icons_css$$ += ".oj-tree-" + $_this$$22$$.$_index$ + " .oj-tree-list a \x3e .oj-tree-icon { ", $icons_css$$ += $_this$$22$$.$_addTypeCss$($tp$$, $icons_css$$), $icons_css$$ += "} ", $icons_css$$ += ".oj-tree-" + $_this$$22$$.$_index$ + " .oj-tree-list li[" + $attr$$19$$ + '\x3d"oj-tree-deftype"] \x3e a .oj-tree-icon { ') : $tp$$.icon.image && ($icons_css$$ += ".oj-tree-" + $_this$$22$$.$_index$ + " .oj-tree-list li[" + 
            $attr$$19$$ + '\x3d"' + $i$$244$$ + '"] \x3e a \x3e ins.oj-tree-icon { '), $icons_css$$ += $_this$$22$$.$_addTypeCss$($tp$$, $icons_css$$), $icons_css$$ += "} "
          }
        });
        "" !== $icons_css$$ && $_addSheet$$({$str$:$icons_css$$, title:"oj-tree-types"})
      }, this)).bind("ojbefore", $$$$21$$.proxy(function($e$$87$$, $data$$121$$) {
        var $d$$15_o$$21_s$$31$$, $ty$$1$$, $func$$12$$ = $data$$121$$.func, $item$$9$$ = $data$$121$$.item;
        if(($d$$15_o$$21_s$$31$$ = ($d$$15_o$$21_s$$31$$ = this.$_data$.types.$defaults$.useData ? this.$_getNode$($item$$9$$) : !1) && -1 !== $d$$15_o$$21_s$$31$$ && $d$$15_o$$21_s$$31$$.length ? $d$$15_o$$21_s$$31$$.data("oj-tree") : !1) && $d$$15_o$$21_s$$31$$.types && !1 === $d$$15_o$$21_s$$31$$[$func$$12$$] || -1 !== $$$$21$$.inArray($func$$12$$, this.$_data$.types.$attachTo$) && ($data$$121$$.item && ($data$$121$$.item.tagName || $data$$121$$.item.jquery)) && ($d$$15_o$$21_s$$31$$ = this.options.types.types, 
        $ty$$1$$ = this.$_getType$($item$$9$$), ($d$$15_o$$21_s$$31$$[$ty$$1$$] && "undefined" !== typeof $d$$15_o$$21_s$$31$$[$ty$$1$$][$func$$12$$] || $d$$15_o$$21_s$$31$$["default"] && "undefined" !== typeof $d$$15_o$$21_s$$31$$["default"][$func$$12$$]) && !1 === this.$_check$($func$$12$$, $item$$9$$))) {
          return $e$$87$$.stopImmediatePropagation(), !1
        }
      }, this))
    }, $_addTypeCss$:function($tp$$1$$) {
      var $css$$2$$ = "", $css$$2$$ = "ojt$none" !== $tp$$1$$.icon.image ? $css$$2$$ + (" background-image:url(" + $tp$$1$$.icon.image + "); ") : $css$$2$$ + " background-image:none; ";
      return $css$$2$$ = $tp$$1$$.icon.position ? $css$$2$$ + (" background-position:" + $tp$$1$$.icon.position + "; ") : $css$$2$$ + " background-position:0 0; "
    }, $_initDnD$:function() {
      if(this.$_data$.dnd.$reorder$) {
        var $s$$32_vars$$9$$ = this.$_data$.dnd.$vars$;
        $s$$32_vars$$9$$.$m$ = $$$$21$$("\x3cdiv /\x3e").addClass("oj-tree-marker").hide().html("\x26raquo;").bind("mouseleave mouseenter", $$$$21$$.proxy(function($e$$88$$) {
          var $vars$$10$$ = this.$_data$.dnd.$vars$;
          $vars$$10$$.$m$.hide();
          $vars$$10$$.$ml$.hide();
          $e$$88$$.preventDefault();
          $e$$88$$.stopImmediatePropagation();
          return!1
        }, this)).appendTo("body");
        $s$$32_vars$$9$$.$ml$ = $$$$21$$("\x3cdiv /\x3e").addClass("oj-tree-marker-line").hide().bind("mouseup", function($e$$89$$) {
          var $vars$$11$$ = this.$_data$.dnd.$vars$;
          if($vars$$11$$.$r$ && $vars$$11$$.$r$.length) {
            return $vars$$11$$.$r$.children("a").trigger($e$$89$$), $e$$89$$.preventDefault(), $e$$89$$.stopImmediatePropagation(), !1
          }
        }).bind("mouseleave", $$$$21$$.proxy(function($e$$90$$) {
          var $vars$$12$$ = this.$_data$.dnd.$vars$, $rt$$ = $$$$21$$($e$$90$$.relatedTarget);
          if(($rt$$.is(".oj-tree") || 0 === $rt$$.closest(".oj-tree").length) && $vars$$12$$.$r$ && $vars$$12$$.$r$.length) {
            return $vars$$12$$.$r$.children("a").trigger($e$$90$$), $vars$$12$$.$m$.hide(), $vars$$12$$.$ml$.hide(), $e$$90$$.preventDefault(), $e$$90$$.stopImmediatePropagation(), !1
          }
        }, this)).appendTo("body");
        $$$$21$$(document).bind("drag_start.ojtreeu", $$$$21$$.proxy(function($e$$91$$, $data$$122$$) {
          var $vars$$13$$ = this.$_data$.dnd.$vars$;
          $data$$122$$.data.$jstree$ && ($vars$$13$$.$m$.show(), $vars$$13$$.$ml$ && $vars$$13$$.$ml$.show())
        }, this));
        $$$$21$$(document).bind("drag_stop.ojtreeu", $$$$21$$.proxy(function($e$$92$$, $data$$123$$) {
          var $vars$$14$$ = this.$_data$.dnd.$vars$;
          $data$$123$$.data.$jstree$ && ($vars$$14$$.$m$.hide(), $vars$$14$$.$ml$ && $vars$$14$$.$ml$.hide())
        }, this));
        this.$_$container$.bind("mouseenter.ojtree", $$$$21$$.proxy(function($e$$93_tr$$) {
          var $ctl$$4$$ = this.$_data$.dnd.$ctl$, $dc_vars$$15$$ = this.$_data$.dnd.$vars$;
          $ctl$$4$$.$is_drag$ && $ctl$$4$$.$user_data$.$jstree$ && (this.options.themes && ($dc_vars$$15$$.$m$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $dc_vars$$15$$.$ml$ && $dc_vars$$15$$.$ml$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $ctl$$4$$.helper.addClass("oj-tree-dnd-helper oj-tree-" + this.$_data$.$themes$.$theme$)), $e$$93_tr$$.currentTarget === $e$$93_tr$$.target && ($ctl$$4$$.$user_data$.$obj$ && $$$$21$$($ctl$$4$$.$user_data$.$obj$).length && $$$$21$$($ctl$$4$$.$user_data$.$obj$).parents(".oj-tree:eq(0)")[0] !== 
          $e$$93_tr$$.target) && ($e$$93_tr$$ = this.$_reference$($e$$93_tr$$.target), $e$$93_tr$$.data.dnd.$foreign$ ? ($dc_vars$$15$$ = $e$$93_tr$$.options.dnd.drag_check.call(this, {o:$dc_vars$$15$$.$o$, r:$e$$93_tr$$.$_$container$, is_root:!0}), !0 !== $dc_vars$$15$$ && !0 !== $dc_vars$$15$$.inside && !0 !== $dc_vars$$15$$.before && !0 !== $dc_vars$$15$$.after || $ctl$$4$$.helper.children("ins").removeClass("oj-tree-invalid").addClass("oj-tree-ok")) : ($e$$93_tr$$.$_prepare_move$($dc_vars$$15$$.$o$, 
          $e$$93_tr$$.$_$container$, "last"), $e$$93_tr$$.check_move() && $ctl$$4$$.helper.children("ins").removeClass("oj-tree-invalid").addClass("oj-tree-ok"))))
        }, this)).bind("mouseup.ojtree", $$$$21$$.proxy(function($dc$$1_e$$94$$) {
          var $vars$$16$$ = this.$_data$.dnd.$vars$, $ctl$$5_tr$$1$$ = this.$_data$.dnd.$ctl$;
          $ctl$$5_tr$$1$$.$is_drag$ && ($ctl$$5_tr$$1$$.$user_data$.$jstree$ && $dc$$1_e$$94$$.currentTarget === $dc$$1_e$$94$$.target && $ctl$$5_tr$$1$$.$user_data$.$obj$ && $$$$21$$($ctl$$5_tr$$1$$.$user_data$.$obj$).length && $$$$21$$($ctl$$5_tr$$1$$.$user_data$.$obj$).parents(".oj-tree:eq(0)")[0] !== $dc$$1_e$$94$$.target) && ($ctl$$5_tr$$1$$ = this.$_reference$($dc$$1_e$$94$$.currentTarget), $ctl$$5_tr$$1$$.data.dnd.foreign ? ($dc$$1_e$$94$$ = $ctl$$5_tr$$1$$.$_getOptions$().dnd.drag_check.call(this, 
          {o:$vars$$16$$.$o$, r:$ctl$$5_tr$$1$$.$_$container$, is_root:!0}), !0 !== $dc$$1_e$$94$$ && !0 !== $dc$$1_e$$94$$.inside && !0 !== $dc$$1_e$$94$$.before && !0 !== $dc$$1_e$$94$$.after || $ctl$$5_tr$$1$$.$_getOptions$().dnd.drag_finish.call(this, {o:$vars$$16$$.$o$, r:$ctl$$5_tr$$1$$.$_$container$, is_root:!0})) : $ctl$$5_tr$$1$$.$_move_node$($vars$$16$$.$o$, $ctl$$5_tr$$1$$.$_$container$, "last", $dc$$1_e$$94$$[$ctl$$5_tr$$1$$.options.dnd.copy_modifier + "Key"]))
        }, this)).bind("mouseleave.ojtree", $$$$21$$.proxy(function($e$$95$$) {
          var $ctl$$6$$ = this.$_data$.dnd.$ctl$;
          if($e$$95$$.relatedTarget && $$$$21$$($e$$95$$.relatedTarget).hasClass("oj-tree-marker-line")) {
            return!1
          }
          $ctl$$6$$.$is_drag$ && $ctl$$6$$.$user_data$.$jstree$ && (this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$), this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$), this.$_data$.dnd.$to1$ && clearTimeout(this.$_data$.dnd.$to1$), this.$_data$.dnd.$to2$ && clearTimeout(this.$_data$.dnd.$to2$), $ctl$$6$$.helper.children("ins").hasClass("oj-tree-ok") && $ctl$$6$$.helper.children("ins").removeClass("oj-tree-ok").addClass("oj-tree-invalid"))
        }, this)).bind("mousemove.ojtree", $$$$21$$.proxy(function($e$$96$$) {
          var $ctl$$7$$ = this.$_data$.dnd.$ctl$;
          if($ctl$$7$$.$is_drag$ && $ctl$$7$$.$user_data$.$jstree$) {
            var $cnt$$1$$ = this.$_$container$[0];
            $e$$96$$.pageX + 24 > this.$_data$.dnd.$cof$.left + this.$_data$.dnd.$cw$ ? (this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$), this.$_data$.dnd.$i1$ = setInterval($$$$21$$.proxy(function() {
              this.scrollLeft += $ctl$$7$$.$scroll_spd$
            }, $cnt$$1$$), 100)) : $e$$96$$.pageX - 24 < this.$_data$.dnd.$cof$.left ? (this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$), this.$_data$.dnd.$i1$ = setInterval($$$$21$$.proxy(function() {
              this.scrollLeft -= $ctl$$7$$.$scroll_spd$
            }, $cnt$$1$$), 100)) : this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$);
            $e$$96$$.pageY + 24 > this.$_data$.dnd.$cof$.top + this.$_data$.dnd.ch ? (this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$), this.$_data$.dnd.$i2$ = setInterval($$$$21$$.proxy(function() {
              this.scrollTop += $ctl$$7$$.$scroll_spd$
            }, $cnt$$1$$), 100)) : $e$$96$$.pageY - 24 < this.$_data$.dnd.$cof$.top ? (this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$), this.$_data$.dnd.$i2$ = setInterval($$$$21$$.proxy(function() {
              this.scrollTop -= $ctl$$7$$.$scroll_spd$
            }, $cnt$$1$$), 100)) : this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$)
          }
        }, this)).bind("scroll.ojtree", $$$$21$$.proxy(function() {
          var $ctl$$8$$ = this.$_data$.dnd.$ctl$, $vars$$17$$ = this.$_data$.dnd.$vars$;
          $ctl$$8$$.$is_drag$ && ($ctl$$8$$.$user_data$.$jstree$ && $vars$$17$$.$m$ && $vars$$17$$.$ml$) && ($vars$$17$$.$m$.hide(), $vars$$17$$.$ml$.hide())
        }, this)).delegate(".oj-tree-list a", "mousedown.ojtree", $$$$21$$.proxy(function($e$$98$$) {
          if(1 === $e$$98$$.which) {
            return this.$_start_drag$($e$$98$$.currentTarget, $e$$98$$), !1
          }
        }, this)).delegate(".oj-tree-list a", "mouseenter.ojtree", $$$$21$$.proxy(function($e$$99$$) {
          var $ctl$$9$$ = this.$_data$.dnd.$ctl$;
          $ctl$$9$$.$is_drag$ && $ctl$$9$$.$user_data$.$jstree$ && this.$_dnd_enter$($e$$99$$.currentTarget)
        }, this)).delegate(".oj-tree-list a", "mousemove.ojtree", $$$$21$$.proxy(function($e$$100$$) {
          var $ctl$$10$$ = this.$_data$.dnd.$ctl$, $vars$$18$$ = this.$_data$.dnd.$vars$;
          $ctl$$10$$.$is_drag$ && $ctl$$10$$.$user_data$.$jstree$ && ($vars$$18$$.$r$ && $vars$$18$$.$r$.length && $vars$$18$$.$r$.children("a")[0] === $e$$100$$.currentTarget || this.$_dnd_enter$($e$$100$$.currentTarget), "undefined" === typeof this.$_data$.dnd.off.top && (this.$_data$.dnd.off = $$$$21$$($e$$100$$.target).offset()), "undefined" === typeof this.$_data$.dnd.off.top && (this.$_data$.dnd.off = $$$$21$$($e$$100$$.target).offset()), this.$_data$.dnd.$w$ = ($e$$100$$.pageY - (this.$_data$.dnd.off.top || 
          0)) % this.$_data$.$core$.$li_height$, 0 > this.$_data$.dnd.$w$ && (this.$_data$.dnd.$w$ += this.$_data$.$core$.$li_height$), this.$_dnd_show$())
        }, this)).delegate(".oj-tree-list a", "mouseleave.ojtree", $$$$21$$.proxy(function($e$$101$$) {
          var $ctl$$11$$ = this.$_data$.dnd.$ctl$, $vars$$19$$ = this.$_data$.dnd.$vars$;
          if($ctl$$11$$.$is_drag$ && $ctl$$11$$.$user_data$.$jstree$) {
            if($e$$101$$.relatedTarget && $$$$21$$($e$$101$$.relatedTarget).hasClass("oj-tree-marker-line")) {
              return!1
            }
            $vars$$19$$.$m$ && $vars$$19$$.$m$.hide();
            $vars$$19$$.$ml$ && $vars$$19$$.$ml$.hide();
            this.$_data$.dnd.$mto$ = setTimeout(function($t$$14$$) {
              return function() {
                $t$$14$$.$_dnd_leave$($e$$101$$)
              }
            }(this), 0)
          }
        }, this)).delegate(".oj-tree-list a", "mouseup.ojtree", $$$$21$$.proxy(function($e$$102$$) {
          var $ctl$$12$$ = this.$_data$.dnd.$ctl$;
          $ctl$$12$$.$is_drag$ && $ctl$$12$$.$user_data$.$jstree$ && this.$_dnd_finish$($e$$102$$)
        }, this));
        $$$$21$$(document).bind("drag_stop.ojtreeu", $$$$21$$.proxy(function() {
          var $dnd$$5$$ = this.$_data$.dnd, $vars$$20$$ = this.$_data$.dnd.$vars$;
          $dnd$$5$$.$to1$ && clearTimeout($dnd$$5$$.$to1$);
          $dnd$$5$$.$to2$ && clearTimeout($dnd$$5$$.$to2$);
          $dnd$$5$$.$i1$ && clearInterval($dnd$$5$$.$i1$);
          $dnd$$5$$.$i2$ && clearInterval($dnd$$5$$.$i2$);
          $dnd$$5$$.after = !1;
          $dnd$$5$$.before = !1;
          $dnd$$5$$.inside = !1;
          $dnd$$5$$.off = !1;
          $dnd$$5$$.$prepared$ = !1;
          $dnd$$5$$.$w$ = !1;
          $dnd$$5$$.$to1$ = !1;
          $dnd$$5$$.$to2$ = !1;
          $dnd$$5$$.$i1$ = !1;
          $dnd$$5$$.$i2$ = !1;
          $dnd$$5$$.$active$ = !1;
          $dnd$$5$$.$foreign$ = !1;
          $vars$$20$$.$m$ && $vars$$20$$.$m$.css({top:"-2000px"});
          $vars$$20$$.$ml$ && $vars$$20$$.$ml$.css({top:"-2000px"})
        }, this)).bind("drag_start.ojtreeu", $$$$21$$.proxy(function($e$$103$$, $data$$124$$) {
          if($data$$124$$.data.$jstree$) {
            var $et$$ = $$$$21$$($data$$124$$.event.target);
            $et$$.closest(".jstree").hasClass("oj-tree-" + this.$_index$) && this.$_dnd_enter$($et$$)
          }
        }, this));
        $s$$32_vars$$9$$ = this.options.dnd;
        $s$$32_vars$$9$$.drag_target && $$$$21$$(document).delegate($s$$32_vars$$9$$.drag_target, "mousedown.ojtree-" + this.$_index$, $$$$21$$.proxy(function($e$$104$$) {
          var $cnt$$2_ctl$$13$$ = this.$_data$.dnd.$ctl$, $dnd$$6$$ = this.$_data$.dnd, $vars$$21$$ = this.$_data$.dnd.$vars$;
          $vars$$21$$.$o$ = $e$$104$$.target;
          this.$_drag_start$($e$$104$$, {$jstree$:!0, $obj$:$e$$104$$.target}, "\x3cins class\x3d'oj-tree-icon'\x3e\x3c/ins\x3e" + $$$$21$$($e$$104$$.target).text());
          this.$_data$.$themes$ && ($vars$$21$$.$m$ && $vars$$21$$.$m$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $vars$$21$$.$ml$ && $vars$$21$$.$ml$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $cnt$$2_ctl$$13$$.helper.addClass("oj-tree-dnd-helper oj-tree-" + this.$_data$.$themes$.$theme$));
          $cnt$$2_ctl$$13$$.helper.children("ins").removeClass("oj-tree-ok").addClass("oj-tree-invalid");
          $cnt$$2_ctl$$13$$ = this.$_$container$;
          $dnd$$6$$.$cof$ = $cnt$$2_ctl$$13$$.offset();
          $dnd$$6$$.$cw$ = parseInt($cnt$$2_ctl$$13$$.width(), 10);
          $dnd$$6$$.ch = parseInt($cnt$$2_ctl$$13$$.height(), 10);
          $dnd$$6$$.$foreign$ = !0;
          $e$$104$$.preventDefault()
        }, this));
        $s$$32_vars$$9$$.drop_target && $$$$21$$(document).delegate($s$$32_vars$$9$$.drop_target, "mouseenter.ojtreex-" + this.$_index$, $$$$21$$.proxy(function($e$$105$$) {
          var $dnd$$7$$ = this.$_data$.dnd, $vars$$22$$ = this.$_data$.dnd.$vars$;
          $dnd$$7$$.$active$ && this.options.dnd.drop_check.call(this, {o:$vars$$22$$.$o$, r:$$$$21$$($e$$105$$.target), e:$e$$105$$}) && $dnd$$7$$.$ctl$.helper.children("ins").removeClass("oj-tree-invalid").addClass("oj-tree-ok")
        }, this)).delegate($s$$32_vars$$9$$.drop_target, "mouseleave.ojtree-" + this.$_index$, $$$$21$$.proxy(function() {
          this.$_data$.dnd.$active$ && this.$_data$.dnd.$ctl$.helper.children("ins").removeClass("oj-tree-ok").addClass("oj-tree-invalid")
        }, this)).delegate($s$$32_vars$$9$$.drop_target, "mouseup.ojtreex-" + this.$_index$, $$$$21$$.proxy(function($e$$107$$) {
          var $vars$$23$$ = this.$_data$.dnd.$vars$;
          this.$_data$.dnd.$active$ && this.$_data$.dnd.$ctl$.helper.children("ins").hasClass("oj-tree-ok") && this.options.dnd.drop_finish.call(this, {o:$vars$$23$$.$o$, r:$$$$21$$($e$$107$$.target), e:$e$$107$$})
        }, this))
      }
    }, $_initDnDOpts$:function() {
      var $opts$$20$$ = this.options.dnd, $ot$$1$$ = typeof $opts$$20$$;
      "undefined" !== $ot$$1$$ && ("boolean" === $ot$$1$$ && $opts$$20$$ ? this.$_data$.dnd.$reorder$ = !0 : "object" === $ot$$1$$ ? "boolean" === typeof $opts$$20$$.reorder && (this.$_data$.dnd.$reorder$ = $opts$$20$$.reorder) : "string" == $ot$$1$$ && "reorder" == $opts$$20$$ && (this.$_data$.dnd.$reorder$ = !0), this.$_data$.dnd.$reorder$ && (this.options.dnd = {}, this.$_applyDefaults$(this.options.dnd, this.$_data$.dnd.$defaults$)))
    }, $_initCrrm$:function() {
      this.$_$container$.bind("ojmove", $$$$21$$.proxy($JSCompiler_emptyFn$$(), this))
    }, $_initKeys$:$JSCompiler_emptyFn$$(), $_initMenu$:function($newVal$$) {
      var $$m_menu$$12$$, $dm_t$$16$$;
      if($newVal$$ || this.options.contextMenu) {
        $$m_menu$$12$$ = $newVal$$ || this.options.contextMenu;
        $dm_t$$16$$ = $$$$21$$.type($$m_menu$$12$$);
        if("function" == $dm_t$$16$$) {
          try {
            $$m_menu$$12$$ = $$m_menu$$12$$()
          }catch($e$$109$$) {
            $$m_menu$$12$$ = null
          }
          $dm_t$$16$$ = $$$$21$$.type($$m_menu$$12$$)
        }
        if("string" === $dm_t$$16$$) {
          if($$m_menu$$12$$ = $$$$21$$($$m_menu$$12$$)) {
            $$m_menu$$12$$.css("display", "none"), $dm_t$$16$$ = this.$_data$.menu, $dm_t$$16$$.$$container$ = $$m_menu$$12$$, $dm_t$$16$$.$usermenu$ = !0
          }
          this.$_data$.menu.$usermenu$ && $newVal$$ && this.$_applyMenu$()
        }
      }
    }, $_handleContextMenuBeforeShow$:function($e$$110_state$$3$$) {
      this.$_data$.menu.$node$ = "keydown" === $e$$110_state$$3$$.originalEvent.originalEvent.type ? this.$_data$.ui.$hovered$ : $$$$21$$($e$$110_state$$3$$.originalEvent.target.parentNode);
      this.$_data$.menu.$treeDivId$ = this.$_data$.menu.$node$.closest("div").attr("id");
      this.$_data$.menu.$$container$.ojMenu("option", "menuPosition", {my:"left top", at:"left bottom", of:this.$_data$.menu.$node$[0]});
      if(this.$_data$.menu.$usermenu$ && this.$_data$.menu.$$elemPaste$) {
        $e$$110_state$$3$$ = this.$_data$.menu.$$elemPaste$.hasClass("oj-disabled");
        var $disabledState$$ = !this.$_data$.$crrm$.$ct_nodes$ && !this.$_data$.$crrm$.$cp_nodes$;
        $e$$110_state$$3$$ || ($e$$110_state$$3$$ = !1);
        $e$$110_state$$3$$ != $disabledState$$ && ($disabledState$$ ? this.$_data$.menu.$$elemPaste$.addClass("oj-disabled") : this.$_data$.menu.$$elemPaste$.removeClass("oj-disabled"), this.$_data$.menu.$$container$.ojMenu("refresh"))
      }
    }, $_handleContextMenuSelect$:function($ev$$1$$, $ui$$25$$) {
      if(!$ui$$25$$.inst && this.$_data$.menu.$treeDivId$ == this.$_elemId$.substr(1)) {
        var $id$$30$$ = $ui$$25$$ ? $ui$$25$$.item.attr("id") : void 0;
        "ojtreecopy" === $id$$30$$ ? this.$_crrm_copy$(this.$_data$.menu.$node$) : "ojtreecut" === $id$$30$$ ? this.$_crrm_cut$(this.$_data$.menu.$node$) : "ojtreepaste" === $id$$30$$ ? this.$_crrm_paste$(this.$_data$.menu.$node$) : "ojtreeremove" === $id$$30$$ ? this.isSelected(this.$_data$.menu.$node$) ? this.$_crrm_remove$() : this.$_crrm_remove$(this.$_data$.menu.$node$) : "ojtreerename" === $id$$30$$ ? this.$_crrm_rename$(this.$_data$.menu.$node$) : "ojtreecreate" === $id$$30$$ && this.$_crrm_create$(this.$_data$.menu.$node$)
      }
    }, $_showContextMenu$:function($menu$$13$$, $event$$268$$) {
      $menu$$13$$.show($event$$268$$, {launcher:this.$_$container_ul$, focus:"menu"})
    }, $_initCoreOpts$:function() {
      var $val$$52$$ = this.options.selectionMode, $val$$52$$ = void 0 == $val$$52$$ ? "single" : $val$$52$$;
      "none" === $val$$52$$ ? $val$$52$$ = 0 : "single" === $val$$52$$ ? $val$$52$$ = 1 : "multiple" === $val$$52$$ && ($val$$52$$ = -1);
      this.$_data$.$core$.$selectMode$ = $val$$52$$;
      this.$_data$.$themes$.icons = this.options.icons;
      this.$_data$.$core$.$toExpand$ = this.options.initExpanded;
      null == this.$_data$.$core$.$toExpand$ && (this.$_data$.$core$.$toExpand$ = []);
      this.$_data$.$core$.$toLoad$ = this.options.initLoaded
    }, $_initUIOpts$:$JSCompiler_emptyFn$$(), $_initDSOpts$:function() {
      var $s$$33$$ = this.options.data, $dt$$1_ot$$2$$;
      this.$_data$.$ds$.type = 0;
      this.$_data$.html.$useExistingMarkup$ = !1;
      if($s$$33$$) {
        if($dt$$1_ot$$2$$ = $$$$21$$.type($s$$33$$), "string" === $dt$$1_ot$$2$$) {
          this.$_isHtml$($s$$33$$) ? this.$_data$.$ds$.type = 4 : this.$_data$.$ds$.type = 3
        }else {
          if("array" === $dt$$1_ot$$2$$) {
            this.$_data$.$ds$.type = 3
          }else {
            if("object" === $dt$$1_ot$$2$$) {
              try {
                $s$$33$$ instanceof $oj$$21$$.$JsonTreeDataSource$ && (this.$_data$.$ds$.type = 1)
              }catch($e$$111$$) {
                this.$_data$.$ds$.type = -1
              }
              if(1 !== this.$_data$.$ds$.type) {
                try {
                  $s$$33$$ instanceof $oj$$21$$.$CollectionTreeDataSource$ && (this.$_data$.$ds$.type = 2)
                }catch($e$$112$$) {
                  this.$_data$.$ds$.type = -1
                }
              }
              1 !== this.$_data$.$ds$.type && 2 !== this.$_data$.$ds$.type && ($s$$33$$.data || $s$$33$$.ajax) && (($dt$$1_ot$$2$$ = $s$$33$$.dataType) ? "json" === $dt$$1_ot$$2$$ ? this.$_data$.$ds$.type = 3 : "html" === $dt$$1_ot$$2$$ && (this.$_data$.$ds$.type = 4) : ($s$$33$$.dataType = "json", this.$_data$.$ds$.type = 3))
            }
          }
        }
      }
      0 == this.$_data$.$ds$.type && 0 < this.$_$container$.find("ul").length && (this.$_data$.$ds$.type = 4, this.$_data$.html.$useExistingMarkup$ = !0)
    }, $_initTreeDSOpts$:$JSCompiler_emptyFn$$(), $_initJsonOpts$:$JSCompiler_emptyFn$$(), $_initHtmlOpts$:$JSCompiler_emptyFn$$(), $_initCrrmOpts$:$JSCompiler_emptyFn$$(), $_initMenuOpts$:$JSCompiler_emptyFn$$(), $_initThemeOpts$:$JSCompiler_emptyFn$$(), $_initTypeOpts$:function() {
      var $o$$22$$ = this.options.types;
      "object" === typeof $o$$22$$ && this.$_applyDefaults$($o$$22$$, {attr:this.$_data$.types.$defaults$.attr})
    }, $_initData$:function() {
      var $data$$126$$ = this.$_data$;
      $data$$126$$.$core$ = {$htmlTitles$:!1, $initLoaded$:[], $selectMode$:1, $load_open$:!1, $li_height$:0, $notify_plugins$:!0, $toExpand$:!1, $toLoad$:!1, $prepared_move$:{}};
      $data$$126$$.ui = {selected:$$$$21$$(), $last_selected$:!1, $hovered$:null, $to_select$:null, opacity:1, $spacebar$:!1, $focused$:!1};
      $data$$126$$.ui.$defaults$ = {selectMultipleModifier:"ctrl", selectRangeModifier:"shift", disableSelectingChildren:!1};
      $data$$126$$.$crrm$ = {};
      $data$$126$$.$crrm$.$cp_nodes$ = !1;
      $data$$126$$.$crrm$.$ct_nodes$ = !1;
      $data$$126$$.$crrm$.$defaults$ = {inputWidthLimit:200, move:{alwaysCopy:!1, openOnMove:!0, defaultPosition:"last", checkMove:$JSCompiler_returnArg$$(!0)}};
      $data$$126$$.$crrm$.$prepared_move$ = {};
      $data$$126$$.$ds$ = {};
      $data$$126$$.$ds$.$progressiveRender$ = !1;
      $data$$126$$.$ds$.$progressiveUnload$ = !1;
      $data$$126$$.$ds$.$correctState$ = !0;
      $data$$126$$.$ds$.type = 0;
      $data$$126$$.$json$ = {};
      $data$$126$$.$json$.$defaults$ = {data:!1, ajax:!1};
      $data$$126$$.html = {};
      $data$$126$$.html.$defaults$ = {data:!1, ajax:!1};
      $data$$126$$.html.$useExistingMarkup$ = !1;
      $data$$126$$.html.$markup$ = !1;
      $data$$126$$.html.$cloneMarkup$ = !1;
      $data$$126$$.$themes$ = {};
      $data$$126$$.$themes$.icons = !0;
      $data$$126$$.$themes$.$dots$ = !1;
      $data$$126$$.$themes$.$theme$ = "default";
      $data$$126$$.$themes$.url = !1;
      $data$$126$$.$themes$.$themes_loaded$ = [];
      $data$$126$$.$themes$.$_themes$ = !1;
      $data$$126$$.types = {};
      $data$$126$$.types.$attachTo$ = [];
      $data$$126$$.types.$defType$ = !1;
      $data$$126$$.types.$defaults$ = {maxChildren:-1, maxDepth:-1, validChildren:"all", useData:!1, attr:"type", types:{"default":{maxChildren:-1, maxDepth:-1, validChildren:"all"}}};
      $data$$126$$.menu = {};
      $data$$126$$.menu.$usermenu$ = !1;
      $data$$126$$.menu.$$container$ = !1;
      $data$$126$$.menu.$$elemPaste$ = !1;
      $data$$126$$.menu.$node$ = !1;
      $data$$126$$.keys = {};
      $data$$126$$.keys.enabled = !0;
      $data$$126$$.keys.bound = [];
      $data$$126$$.dnd = {};
      $data$$126$$.dnd.$reorder$ = !1;
      $data$$126$$.dnd.$active$ = !1;
      $data$$126$$.dnd.after = !1;
      $data$$126$$.dnd.inside = !1;
      $data$$126$$.dnd.before = !1;
      $data$$126$$.dnd.off = !1;
      $data$$126$$.dnd.$prepared$ = !1;
      $data$$126$$.dnd.$w$ = 0;
      $data$$126$$.dnd.$to1$ = !1;
      $data$$126$$.dnd.$to2$ = !1;
      $data$$126$$.dnd.$cof$ = !1;
      $data$$126$$.dnd.$cw$ = !1;
      $data$$126$$.dnd.ch = !1;
      $data$$126$$.dnd.$i1$ = !1;
      $data$$126$$.dnd.$i2$ = !1;
      $data$$126$$.dnd.$mto$ = !1;
      $data$$126$$.dnd.$defaults$ = {copy_modifier:"ctrl", check_timeout:100, open_timeout:500, drop_target:".oj-tree-drop", drop_check:$JSCompiler_returnArg$$(!0), drop_finish:$$$$21$$.noop, drag_target:".oj-tree-draggable", drag_finish:$$$$21$$.noop, drag_check:function $$data$$126$$$dnd$$defaults$$drag_check$() {
        return{after:!1, before:!1, inside:!0}
      }};
      $data$$126$$.dnd.$vars$ = {};
      $data$$126$$.dnd.$vars$.$o$ = !1;
      $data$$126$$.dnd.$vars$.$r$ = !1;
      $data$$126$$.dnd.$vars$.$m$ = !1;
      $data$$126$$.dnd.$vars$.$ml$ = !1;
      $data$$126$$.dnd.$vars$.$sli$ = void 0;
      $data$$126$$.dnd.$vars$.$sti$ = void 0;
      $data$$126$$.dnd.$vars$.$dir1$ = !1;
      $data$$126$$.dnd.$vars$.$dir2$ = !1;
      $data$$126$$.dnd.$vars$.$last_pos$ = !1;
      $data$$126$$.dnd.$ctl$ = {};
      $data$$126$$.dnd.$ctl$.$is_down$ = !1;
      $data$$126$$.dnd.$ctl$.$is_drag$ = !1;
      $data$$126$$.dnd.$ctl$.helper = !1;
      $data$$126$$.dnd.$ctl$.$scroll_spd$ = 10;
      $data$$126$$.dnd.$ctl$.$init_x$ = 0;
      $data$$126$$.dnd.$ctl$.$init_y$ = 0;
      $data$$126$$.dnd.$ctl$.$threshold$ = 5;
      $data$$126$$.dnd.$ctl$.$helper_left$ = 5;
      $data$$126$$.dnd.$ctl$.$helper_top$ = 10;
      $data$$126$$.dnd.$ctl$.$user_data$ = {}
    }, $_fix_scroll$:function($obj$$94_t$$17$$) {
      var $c$$28$$ = this.$_$container$[0];
      $c$$28$$.scrollHeight > $c$$28$$.offsetHeight && ($obj$$94_t$$17$$ = this.$_getNode$($obj$$94_t$$17$$)) && (-1 !== $obj$$94_t$$17$$ && $obj$$94_t$$17$$.length && $obj$$94_t$$17$$.is(":visible")) && ($obj$$94_t$$17$$ = $obj$$94_t$$17$$.offset().top - this.$_$container$.offset().top, 0 > $obj$$94_t$$17$$ && ($c$$28$$.scrollTop = $c$$28$$.scrollTop + $obj$$94_t$$17$$ - 1), $obj$$94_t$$17$$ + this.$_data$.$core$.$li_height$ + ($c$$28$$.scrollWidth > $c$$28$$.offsetWidth ? $scrollbar_width$$ : 0) > 
      $c$$28$$.offsetHeight && ($c$$28$$.scrollTop += $obj$$94_t$$17$$ - $c$$28$$.offsetHeight + this.$_data$.$core$.$li_height$ + 1 + ($c$$28$$.scrollWidth > $c$$28$$.offsetWidth ? $scrollbar_width$$ : 0)))
    }, $set_focus$:function() {
      this.$_isFocused$() || (this.$_focused$() && this.$unset_focus$(), this.$_$container$.addClass("oj-tree-focused"), this.$_$container_ul$ && this.$_$container_ul$.focus(), this.$_data$.ui.$focused$ = !0, this.$_emitEvent$(null, "set_focus"))
    }, $_isFocused$:function() {
      return this.$_data$.ui.$focused$
    }, $unset_focus$:function() {
      this.$_isFocused$() && (this.$_$container$.removeClass("oj-tree-focused"), this.$_data$.ui.$focused$ = !1, this.$_$container_ul$ && this.$_$container_ul$.blur());
      this.$_emitEvent$(null, "unset_focus")
    }, $_focused$:function() {
      var $ret$$34$$ = null;
      $$$$21$$.each($_aInstances$$, function($i$$245$$, $_this$$23$$) {
        if($_this$$23$$.$_data$.ui.$focused$) {
          return $ret$$34$$ = $_this$$23$$, !1
        }
      });
      return $ret$$34$$
    }, $_newIndex$:function() {
      return++$_instance$$
    }, $_getIndex$:$JSCompiler_get$$("$_index$"), $_getOptions$:function() {
      return $$$$21$$.extend(!0, {}, this.options)
    }, $_getContainer$:$JSCompiler_get$$("$_$container$"), $_keyHandler$:{up:function() {
      this.hover(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1));
      return!1
    }, "ctrl+up":function() {
      this.hover(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1));
      return!1
    }, "shift+up":function() {
      this.select(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1), -1 !== this.$_data$.ui.$selectMode$);
      return!1
    }, down:function() {
      this.hover(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1));
      return!1
    }, "ctrl+down":function() {
      this.hover(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1));
      return!1
    }, "shift+down":function() {
      this.select(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1), -1 !== this.$_data$.ui.$selectMode$);
      return!1
    }, left:function() {
      var $o$$29$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$29$$ && ($o$$29$$.hasClass("oj-tree-open") ? this.collapse($o$$29$$) : this.hover(this.$_getPrev$($o$$29$$)));
      return!1
    }, "ctrl+left":function() {
      var $o$$30$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$30$$ && ($o$$30$$.hasClass("oj-tree-open") ? this.collapse($o$$30$$) : this.hover(this.$_getPrev$($o$$30$$)));
      return!1
    }, "shift+left":function() {
      var $o$$31$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$31$$ && ($o$$31$$.hasClass("oj-tree-open") ? this.collapse($o$$31$$) : this.hover(this.$_getPrev$($o$$31$$)));
      return!1
    }, right:function() {
      var $o$$32$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$32$$ && $o$$32$$.length && ($o$$32$$.hasClass("oj-tree-closed") ? this.expand($o$$32$$) : this.hover(this.$_getNext$($o$$32$$)));
      return!1
    }, "ctrl+right":function() {
      var $o$$33$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$33$$ && $o$$33$$.length && ($o$$33$$.hasClass("oj-tree-closed") ? this.expand($o$$33$$) : this.hover(this.$_getNext$($o$$33$$)));
      return!1
    }, "shift+right":function() {
      var $o$$34$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$34$$ && $o$$34$$.length && ($o$$34$$.hasClass("oj-tree-closed") ? this.expand($o$$34$$) : this.hover(this.$_getNext$($o$$34$$)));
      return!1
    }, space:function() {
      this.$_data$.ui.$hovered$ && (this.$_data$.ui.$spacebar$ = !0, this.$_data$.ui.$hovered$.children("a:eq(0)").click(), this.$_data$.ui.$spacebar$ = !1);
      return!1
    }, home:function() {
      this.hover(this.$_$container_ul$.find("li:first"));
      return!1
    }, end:function() {
      var $a$$71$$ = this.$_$container_ul$.find("li.oj-tree-last:visible");
      this.hover($a$$71$$[$a$$71$$.length - 1]);
      return!1
    }, "*":function() {
      this.$_$container_ul$.find("a");
      this.$_expandAll$(-1, !1);
      return!1
    }, "ctrl+space":function() {
      if(this.$_data$.ui.$hovered$) {
        var $ev$$2$$ = $$$$21$$.Event("click");
        $ev$$2$$.ctrlKey = !0;
        this.$_data$.ui.$hovered$.children("a:eq(0)").trigger($ev$$2$$)
      }
      return!1
    }, "shift+space":function() {
      if(this.$_data$.ui.$hovered$) {
        var $ev$$3$$ = $$$$21$$.Event("click");
        $ev$$3$$.shiftKey = !0;
        this.$_data$.ui.$hovered$.children("a:eq(0)").trigger($ev$$3$$)
      }
      return!1
    }, "shift+home":function() {
      var $hover$$1$$ = this.$_data$.ui.$hovered$;
      if($hover$$1$$) {
        var $bContinue$$ = !0, $_this$$24$$ = this, $nodes$$2$$ = this.$_$container_ul$.find("li:visible"), $hover$$1$$ = $hover$$1$$[0];
        $$$$21$$.each($nodes$$2$$, function($i$$246$$, $node$$54$$) {
          $node$$54$$ == $hover$$1$$ && ($bContinue$$ = !1);
          $_this$$24$$.$_select$($node$$54$$, !0);
          return $bContinue$$
        })
      }
      return!1
    }, "shift+pgdn":function() {
      var $hover$$2$$ = this.$_data$.ui.$hovered$;
      if($hover$$2$$) {
        var $bFound$$ = !1, $_this$$25$$ = this, $l$$12$$ = this.$_$container_ul$.find("li:visible"), $hover$$2$$ = $hover$$2$$[0];
        $$$$21$$.each($l$$12$$, function($i$$247$$, $node$$55$$) {
          $bFound$$ || $node$$55$$ == $hover$$2$$ && ($bFound$$ = !0);
          $bFound$$ && $_this$$25$$.$_select$($node$$55$$, !0);
          return!0
        })
      }
      return!1
    }, f2:function() {
      this.rename(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$);
      return!1
    }, del:function() {
      this.remove(this.$_data$.ui.$hovered$ || this.$_getNode$(null));
      return!1
    }}, $_applyMenu$:function() {
      if(this.$_data$.menu.$usermenu$) {
        var $$menuContainer$$ = this.$_data$.menu.$$container$, $_this$$26$$ = this;
        $$menuContainer$$.on("ojselect", $$$$21$$.proxy(this.$_handleContextMenuSelect$, this));
        $$menuContainer$$.on("ojbeforeshow", $$$$21$$.proxy(this.$_handleContextMenuBeforeShow$, this));
        var $bChanged$$ = !1;
        $$menuContainer$$.find("[data-oj-command]").each(function() {
          var $cmd$$;
          0 === $$$$21$$(this).children("a").length && ($cmd$$ = $$$$21$$(this).attr("data-oj-command").split("-"), $$$$21$$(this).replaceWith($_this$$26$$.$_buildContextMenuItem$($cmd$$[$cmd$$.length - 1])), $$$$21$$(this).hasClass("oj-menu-divider") && ($$$$21$$(this).removeClass("oj-menu-divider"), $$$$21$$(this).addClass("oj-menu-item")), $bChanged$$ = !0)
        });
        $bChanged$$ && $$menuContainer$$.ojMenu("refresh");
        this.$_data$.menu.$$elemPaste$ = $$menuContainer$$.find("#ojtreepaste")
      }
    }, $_clearMenu$:function() {
      var $um$$ = this.$_data$.menu;
      $um$$.$usermenu$ && ($um$$.$usermenu$ = !1, $um$$.$$container$.off("ojselect"), $um$$.$$container$.off("beforeshow"), $um$$.$$container$ = null)
    }, $_buildContextMenuItem$:function($cmd$$1$$) {
      return $$$$21$$(this.$_buildContextMenuListItem$($cmd$$1$$))
    }, $_buildContextMenuListItem$:function($cmd$$2$$) {
      return"\x3cli id\x3d" + $_arMenuCmdMap$$[$cmd$$2$$] + "\x3e" + this.$_buildContextMenuLabel$($cmd$$2$$) + "\x3c/li\x3e"
    }, $_buildContextMenuLabel$:function($cmd$$3$$) {
      return'\x3ca href\x3d"#"\x3e' + this.$getTranslatedString$("m_" + $cmd$$3$$) + "\x3c/a\x3e"
    }, $_crrm_cut$:function($obj$$95$$) {
      $obj$$95$$ = this.$_getNode$($obj$$95$$, !0);
      if(!$obj$$95$$ || !$obj$$95$$.length) {
        return!1
      }
      this.$_data$.$crrm$.$cp_nodes$ = !1;
      this.$_data$.$crrm$.$ct_nodes$ = $obj$$95$$;
      this.$_emitEvent$({obj:$obj$$95$$}, "cut")
    }, $_crrm_copy$:function($obj$$96$$) {
      $obj$$96$$ = this.$_getNode$($obj$$96$$, !0);
      if(!$obj$$96$$ || !$obj$$96$$.length) {
        return!1
      }
      this.$_data$.$crrm$.$ct_nodes$ = !1;
      this.$_data$.$crrm$.$cp_nodes$ = $obj$$96$$;
      this.$_emitEvent$({obj:$obj$$96$$}, "copy")
    }, $_crrm_paste$:function($obj$$97$$) {
      $obj$$97$$ = this.$_getNode$($obj$$97$$);
      if(!$obj$$97$$ || !$obj$$97$$.length) {
        return!1
      }
      var $nodes$$3$$ = this.$_data$.$crrm$.$ct_nodes$ ? this.$_data$.$crrm$.$ct_nodes$ : this.$_data$.$crrm$.$cp_nodes$;
      if(!this.$_data$.$crrm$.$ct_nodes$ && !this.$_data$.$crrm$.$cp_nodes$) {
        return!1
      }
      this.$_data$.$crrm$.$ct_nodes$ && (this.$_crrm_move_node$(this.$_data$.$crrm$.$ct_nodes$, $obj$$97$$), this.$_data$.$crrm$.$ct_nodes$ = !1);
      this.$_data$.$crrm$.$ct_nodes$ && (this.$_crrm_move_node$(this.$_data$.$crrm$.$ct_nodes$, $obj$$97$$), this.$_data$.$crrm$.$ct_nodes$ = !1);
      this.$_data$.$crrm$.$cp_nodes$ && this.$_crrm_move_node$(this.$_data$.$crrm$.$cp_nodes$, $obj$$97$$, !1, !0);
      this.$_emitEvent$({obj:$obj$$97$$, nodes:$nodes$$3$$}, "paste")
    }, $_crrm_move_node$:function($obj$$98$$, $ref$$3$$, $position$$13$$, $is_copy$$1$$, $is_prepared$$1$$, $skip_check$$1$$) {
      var $s$$34$$ = this.$_data$.$crrm$.$defaults$.move;
      if(!$is_prepared$$1$$) {
        return"undefined" === typeof $position$$13$$ && ($position$$13$$ = $s$$34$$.defaultPosition), "inside" !== $position$$13$$ || $s$$34$$.defaultPosition.match(/^(before|after)$/) || ($position$$13$$ = $s$$34$$.defaultPosition), this.$_move_node$($obj$$98$$, $ref$$3$$, $position$$13$$, $is_copy$$1$$, !1, $skip_check$$1$$)
      }
      if(!0 === $s$$34$$.alwaysCopy || "multitree" === $s$$34$$.alwaysCopy && $obj$$98$$.$rt$.$_index$ !== $obj$$98$$.$ot$.$_index$) {
        $is_copy$$1$$ = !0
      }
      this.$_move_node$($obj$$98$$, $ref$$3$$, $position$$13$$, $is_copy$$1$$, !0, $skip_check$$1$$)
    }, $_crrm_remove$:function($obj$$99$$) {
      $obj$$99$$ = this.$_getNode$($obj$$99$$, !0);
      this.$__rollback$();
      this.remove($obj$$99$$)
    }, $_crrm_rename$:function($obj$$100$$) {
      $obj$$100$$ = this.$_getNode$($obj$$100$$);
      this.$__rollback$();
      this.$_crrm_showInput$($obj$$100$$, $JSCompiler_emptyFn$$())
    }, $_crrm_showInput$:function($obj$$102$$, $callback$$96$$) {
      $obj$$102$$ = this.$_getNode$($obj$$102$$);
      var $rtl$$2$$ = this.$_isRtl$, $w$$7$$ = this.$_data$.$crrm$.$defaults$.inputWidthLimit, $w1$$ = $obj$$102$$.children("ins").width(), $w2$$ = $obj$$102$$.find("\x3e a:visible \x3e ins").width() * $obj$$102$$.find("\x3e a:visible \x3e ins").length, $t$$19$$ = this.getText($obj$$102$$), $_this$$27$$ = this, $h1$$ = $$$$21$$("\x3cdiv /\x3e", {css:{position:"absolute", top:"-200px", left:$rtl$$2$$ ? "0px" : "-1000px", visibility:"hidden"}}).appendTo("body"), $h2$$ = $obj$$102$$.css("position", 
      "relative").append($$$$21$$("\x3cinput /\x3e", {value:$t$$19$$, "class":"oj-tree-rename-input", css:{padding:"0", border:"1px solid silver", position:"absolute", left:$rtl$$2$$ ? "auto" : $w1$$ + $w2$$ + 4 + "px", right:$rtl$$2$$ ? $w1$$ + $w2$$ + 4 + "px" : "auto", top:"0px", height:this.$_data$.$core$.$li_height$ - 2 + "px", lineHeight:this.$_data$.$core$.$li_height$ - 2 + "px", width:"150px"}, blur:$$$$21$$.proxy(function() {
        var $i$$248$$ = $obj$$102$$.children(".oj-tree-rename-input"), $v$$4$$ = $i$$248$$.val();
        "" === $v$$4$$ && ($v$$4$$ = $t$$19$$);
        $h1$$.remove();
        $i$$248$$.remove();
        this.$_set_text$($obj$$102$$, $t$$19$$);
        this.$_rename_node$($obj$$102$$, $v$$4$$);
        $callback$$96$$.call(this, $obj$$102$$, $v$$4$$, $t$$19$$);
        $obj$$102$$.css("position", "")
      }, this), keyup:function($event$$273_key$$87$$) {
        $event$$273_key$$87$$ = $event$$273_key$$87$$.keyCode || $event$$273_key$$87$$.which;
        if(!$_this$$27$$.$_done$) {
          return $_this$$27$$.$_done$ = !0, !1
        }
        27 == $event$$273_key$$87$$ ? ($_this$$27$$.$_done$ = !1, this.value = $t$$19$$, this.blur()) : 13 == $event$$273_key$$87$$ ? ($_this$$27$$.$_done$ = !1, this.blur()) : $h2$$.width(Math.min($h1$$.text("pW" + this.value).width(), $w$$7$$))
      }, keypress:function($event$$274$$) {
        if(13 == ($event$$274$$.keyCode || $event$$274$$.which)) {
          return!1
        }
      }})).children(".oj-tree-rename-input");
      this.$_set_text$($obj$$102$$, "");
      $h1$$.css({fontFamily:$h2$$.css("fontFamily") || "", fontSize:$h2$$.css("fontSize") || "", fontWeight:$h2$$.css("fontWeight") || "", fontStyle:$h2$$.css("fontStyle") || "", fontStretch:$h2$$.css("fontStretch") || "", fontVariant:$h2$$.css("fontVariant") || "", letterSpacing:$h2$$.css("letterSpacing") || "", wordSpacing:$h2$$.css("wordSpacing") || ""});
      $h2$$.width(Math.min($h1$$.text("pW" + $h2$$[0].value).width(), $w$$7$$))[0].select()
    }, $_crrm_create$:function($obj$$103$$, $position$$14$$, $js$$2$$, $callback$$97$$, $skip_rename$$) {
      var $_this$$28$$ = this;
      ($obj$$103$$ = this.$_getNode$($obj$$103$$)) || ($obj$$103$$ = -1);
      this.$__rollback$();
      return this.$_create_node$($obj$$103$$, $position$$14$$, $js$$2$$, function($t$$21$$) {
        var $p$$12$$ = this.$_getParent$($t$$21$$), $pos$$11$$ = $$$$21$$($t$$21$$).index();
        $callback$$97$$ && $callback$$97$$.call(this, $t$$21$$);
        $p$$12$$.length && $p$$12$$.hasClass("oj-tree-closed") && this.expand($p$$12$$, !1, !0);
        $skip_rename$$ ? $_this$$28$$.$_emitEvent$({obj:$t$$21$$, name:this.getText($t$$21$$), parent:$p$$12$$, position:$pos$$11$$}) : this.$_crrm_showInput$($t$$21$$, function($obj$$104$$, $new_name$$1$$) {
          $_this$$28$$.$_emitEvent$({obj:$obj$$104$$, name:$new_name$$1$$, parent:$p$$12$$, position:$pos$$11$$})
        })
      })
    }, $_crrm_check_move$:$JSCompiler_returnArg$$(!1), $_isHtml$:function($s$$36$$) {
      if(!$s$$36$$ || 3 > $s$$36$$.length) {
        return!1
      }
      $s$$36$$ = $s$$36$$.trim();
      return"\x3c" === $s$$36$$.charAt(0)
    }, $_applyEmptyText$:function() {
      var $d$$16_txt$$ = this.option.emptyText;
      "string" !== typeof $d$$16_txt$$ && ($d$$16_txt$$ = this.$getTranslatedString$("m_emptyText"));
      $d$$16_txt$$ && 0 < $d$$16_txt$$.length && ($d$$16_txt$$ = "\x3cli class\x3d'oj-tree-empty'\x3e" + $d$$16_txt$$ + "\x3c/li\x3e", this.$_$container_ul$.empty().append($d$$16_txt$$))
    }, $_processSubId$:function($l$$13_locator$$16$$) {
      var $subId$$9$$ = $l$$13_locator$$16$$.subId, $origNode$$ = $l$$13_locator$$16$$.node, $node$$56$$ = $origNode$$ ? this.$_getNode$($origNode$$) : null, $key$$89$$ = "string" === typeof $l$$13_locator$$16$$.key ? $l$$13_locator$$16$$.key : null, $val$$53$$ = "string" === typeof $l$$13_locator$$16$$.value ? $l$$13_locator$$16$$.value : null, $$elem$$, $txt$$1$$;
      switch($subId$$9$$) {
        case "disclosure":
          if(-1 === $origNode$$ || -1 === $node$$56$$) {
            return this.$_$container_ul$ ? this.$_$container_ul$[0] : null
          }
          if($key$$89$$) {
            $l$$13_locator$$16$$ = this.$_$container_ul$.find("li"), $$$$21$$.each($l$$13_locator$$16$$, function($i$$249$$, $v$$5$$) {
              $v$$5$$ = $$$$21$$($v$$5$$);
              if($v$$5$$.attr($key$$89$$) && $v$$5$$.attr($key$$89$$) === $val$$53$$) {
                return $node$$56$$ = $v$$5$$, !1
              }
            })
          }else {
            if(!$node$$56$$ && "string" === typeof $origNode$$) {
              $txt$$1$$ = $origNode$$.trim();
              $l$$13_locator$$16$$ = this.$_$container_ul$.find("a");
              $$$$21$$.each($l$$13_locator$$16$$, function($i$$250$$, $v$$6$$) {
                if($v$$6$$.text.trim() === $txt$$1$$) {
                  return $$elem$$ = $$$$21$$($v$$6$$), !1
                }
              });
              if(!$$elem$$) {
                break
              }
              $node$$56$$ = $$elem$$.closest("li")
            }else {
              if($node$$56$$ && this.$_isLeaf$($node$$56$$)) {
                break
              }
            }
          }
          if($node$$56$$ && !this.$_isLeaf$($node$$56$$)) {
            return $node$$56$$.find(" \x3e ins:eq(0)")
          }
          break;
        case "icon":
          if(-1 === $origNode$$ || -1 === $node$$56$$) {
            return this.$_$container_ul$ ? this.$_$container_ul$[0] : null
          }
          if($key$$89$$) {
            return $l$$13_locator$$16$$ = this.$_$container_ul$.find("li"), $$$$21$$.each($l$$13_locator$$16$$, function($i$$251$$, $v$$7$$) {
              $v$$7$$ = $$$$21$$($v$$7$$);
              if($v$$7$$.attr($key$$89$$) && $v$$7$$.attr($key$$89$$) === $val$$53$$) {
                return $node$$56$$ = $v$$7$$, !1
              }
            }), $node$$56$$ && ($node$$56$$ = $node$$56$$.find(" \x3e a").closest("ins")), $node$$56$$
          }
          if(!$node$$56$$ && "string" === typeof $origNode$$) {
            return $txt$$1$$ = $origNode$$.trim(), $l$$13_locator$$16$$ = this.$_$container_ul$.find("a"), $$$$21$$.each($l$$13_locator$$16$$, function($i$$252$$, $v$$8$$) {
              if($v$$8$$.text.trim() === $txt$$1$$) {
                return $$elem$$ = $$$$21$$($v$$8$$), !1
              }
            }), $$elem$$
          }
          if($node$$56$$ && $node$$56$$.length) {
            return $node$$56$$.find(" \x3e a \x3e ins:eq(0)")
          }
          break;
        case "link":
          if(-1 === $origNode$$ || -1 === $node$$56$$) {
            return this.$_$container_ul$ ? this.$_$container_ul$[0] : null
          }
          if($key$$89$$) {
            return $l$$13_locator$$16$$ = this.$_$container_ul$.find("li"), $$$$21$$.each($l$$13_locator$$16$$, function($i$$253$$, $v$$9$$) {
              $v$$9$$ = $$$$21$$($v$$9$$);
              if($v$$9$$.attr($key$$89$$) && $v$$9$$.attr($key$$89$$) === $val$$53$$) {
                return $node$$56$$ = $v$$9$$, !1
              }
            }), $node$$56$$ && ($node$$56$$ = $node$$56$$.find(" \x3e a:eq(0)")) ? $node$$56$$ : !1
          }
          if(!$node$$56$$ && "string" === typeof $origNode$$) {
            return $txt$$1$$ = $origNode$$.trim(), $l$$13_locator$$16$$ = this.$_$container_ul$.find("a"), $$$$21$$.each($l$$13_locator$$16$$, function($i$$254$$, $v$$10$$) {
              if($v$$10$$.text.trim() === $txt$$1$$) {
                return $$elem$$ = $$$$21$$($v$$10$$), !1
              }
            }), $$elem$$
          }
          if($node$$56$$ && $node$$56$$.length) {
            return $node$$56$$.find(" a:eq(0)")
          }
          break;
        case "parent":
          return $node$$56$$ && -1 !== $origNode$$ && ($node$$56$$ = this.$_getParent$($node$$56$$)), $node$$56$$ = $node$$56$$ && -1 != $node$$56$$ ? $node$$56$$ : null;
        case "first":
          return $node$$56$$ && -1 != $node$$56$$ && -1 != $origNode$$ || ($node$$56$$ = this.$_$container_ul$), $node$$56$$.find("li:eq(0)");
        case "last":
          return $node$$56$$ && -1 != $node$$56$$ && -1 != $origNode$$ || ($node$$56$$ = this.$_$container_ul$), $node$$56$$.find("li:last-child").last();
        case "prevSib":
          return $node$$56$$ = -1 !== $node$$56$$ ? ($node$$56$$ = this.$_getPrev$($node$$56$$, !0)) ? $node$$56$$[0] : null : null, $node$$56$$;
        case "nextSib":
          return $node$$56$$ = -1 !== $node$$56$$ ? ($node$$56$$ = this.$_getNext$($node$$56$$, !0)) ? $node$$56$$[0] : null : null, $node$$56$$
      }
      return null
    }})
  })()
});
