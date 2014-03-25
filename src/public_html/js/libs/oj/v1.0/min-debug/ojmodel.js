define(["ojs/ojcore", "jquery"], function($oj$$1$$, $$$$1$$) {
  $oj$$1$$.$Events$ = window.oj.Events = {on:function $window$oj$Events$on$($eventType$$7$$, $callback$$58$$, $context$$5$$) {
    return this.$OnInternal$($eventType$$7$$, $callback$$58$$, $context$$5$$, !1, !1)
  }, off:function $window$oj$Events$off$($eventType$$8$$, $callback$$59$$, $context$$6$$) {
    return this.$_offInternal$($eventType$$8$$, $callback$$59$$, $context$$6$$, !1)
  }, trigger:function $window$oj$Events$trigger$($eventType$$9$$) {
    var $args$$7$$ = Array.prototype.slice.call(arguments);
    $args$$7$$.unshift(!1);
    return $oj$$1$$.$Events$.$TriggerInternal$.apply(this, $args$$7$$)
  }, once:function $window$oj$Events$once$($eventType$$10$$, $callback$$60$$, $context$$7$$) {
    return this.$_onceInternal$($eventType$$10$$, $callback$$60$$, $context$$7$$, !1)
  }, listenTo:function $window$oj$Events$listenTo$($otherObj$$, $eventArray_eventType$$11$$, $callback$$61_e$$15$$) {
    var $event$$4_eventString$$, $attr$$, $listenerObj$$, $prop$$9$$, $eventMap$$ = {};
    $eventArray_eventType$$11$$.constructor === String ? $eventMap$$[$eventArray_eventType$$11$$] = $callback$$61_e$$15$$ : $eventMap$$ = $eventArray_eventType$$11$$;
    for($prop$$9$$ in $eventMap$$) {
      if($eventMap$$.hasOwnProperty($prop$$9$$)) {
        for($eventArray_eventType$$11$$ = $oj$$1$$.$Events$.$_getEvents$($prop$$9$$), $callback$$61_e$$15$$ = 0;$callback$$61_e$$15$$ < $eventArray_eventType$$11$$.length;$callback$$61_e$$15$$ += 1) {
          $event$$4_eventString$$ = $eventArray_eventType$$11$$[$callback$$61_e$$15$$].event, $attr$$ = $eventArray_eventType$$11$$[$callback$$61_e$$15$$].$attribute$, $listenerObj$$ = {event:$event$$4_eventString$$, $attribute$:$attr$$, object:$otherObj$$, $callback$:$eventMap$$[$prop$$9$$]}, this.$_checkForHandler$(this.$listeningList$, $listenerObj$$, $oj$$1$$.$Events$.$_listenersIdentical$), $event$$4_eventString$$ = $attr$$ ? $event$$4_eventString$$ + ":" + $attr$$ : $event$$4_eventString$$, 
          void 0 === this.$listeningList$ && (this.$listeningList$ = []), this.$listeningList$.push($listenerObj$$), $otherObj$$.$OnInternal$($event$$4_eventString$$, $eventMap$$[$prop$$9$$], null, !0, !1)
        }
      }
    }
    return this
  }, listenToOnce:function $window$oj$Events$listenToOnce$($otherObj$$1$$, $eventArray$$1_eventType$$12$$, $callback$$62_e$$16$$) {
    var $event$$5_eventString$$1$$, $attr$$1$$, $listenerObj$$1$$, $prop$$10$$, $eventMap$$1$$ = {};
    $eventArray$$1_eventType$$12$$.constructor === String ? $eventMap$$1$$[$eventArray$$1_eventType$$12$$] = $callback$$62_e$$16$$ : $eventMap$$1$$ = $eventArray$$1_eventType$$12$$;
    for($prop$$10$$ in $eventMap$$1$$) {
      if($eventMap$$1$$.hasOwnProperty($prop$$10$$)) {
        for($eventArray$$1_eventType$$12$$ = $oj$$1$$.$Events$.$_getEvents$($prop$$10$$), $callback$$62_e$$16$$ = 0;$callback$$62_e$$16$$ < $eventArray$$1_eventType$$12$$.length;$callback$$62_e$$16$$ += 1) {
          $event$$5_eventString$$1$$ = $eventArray$$1_eventType$$12$$[$callback$$62_e$$16$$].event, $attr$$1$$ = $eventArray$$1_eventType$$12$$[$callback$$62_e$$16$$].$attribute$, $listenerObj$$1$$ = {event:$event$$5_eventString$$1$$, $attribute$:$attr$$1$$, object:$otherObj$$1$$, $callback$:$eventMap$$1$$[$prop$$10$$]}, this.$_checkForHandler$(this.$listeningList$, $listenerObj$$1$$, $oj$$1$$.$Events$.$_listenersIdentical$), $event$$5_eventString$$1$$ = $attr$$1$$ ? $event$$5_eventString$$1$$ + 
          ":" + $attr$$1$$ : $event$$5_eventString$$1$$, void 0 === this.$listeningList$ && (this.$listeningList$ = []), this.$listeningList$.push($listenerObj$$1$$), $otherObj$$1$$.$_onceInternal$($event$$5_eventString$$1$$, $eventMap$$1$$[$prop$$10$$], null, !0)
        }
      }
    }
    return this
  }, stopListening:function $window$oj$Events$stopListening$($otherObj$$2$$, $eventType$$13$$, $callback$$63$$) {
    var $actualType_eventArray$$2$$, $eventMap$$2$$ = {}, $e$$17$$, $oneEvent$$, $oneAttr$$, $attrEqual_event$$6$$, $len_objEqual$$, $cb_eventEqual$$, $callbackEqual$$, $i$$9$$, $prop$$11$$;
    if(null == arguments || 0 == arguments.length) {
      $len_objEqual$$ = this.$listeningList$ ? this.$listeningList$.length : 0;
      for($i$$9$$ = 0;$i$$9$$ < $len_objEqual$$;$i$$9$$++) {
        $cb_eventEqual$$ = this.$listeningList$[$i$$9$$].object.$_offInternal$, $cb_eventEqual$$.apply(this.$listeningList$[$i$$9$$].object, [this.$listeningList$[$i$$9$$].event, this.$listeningList$[$i$$9$$].$callback$, this.$listeningList$[$i$$9$$].context, !0])
      }
      this.$listeningList$ = [];
      return this
    }
    $actualType_eventArray$$2$$ = $eventType$$13$$;
    $otherObj$$2$$ && $otherObj$$2$$.constructor === String && ($actualType_eventArray$$2$$ = $otherObj$$2$$);
    $actualType_eventArray$$2$$.constructor === String ? $eventMap$$2$$[$actualType_eventArray$$2$$] = $callback$$63$$ : $eventMap$$2$$ = $actualType_eventArray$$2$$;
    for($prop$$11$$ in $eventMap$$2$$) {
      if($eventMap$$2$$.hasOwnProperty($prop$$11$$)) {
        for($actualType_eventArray$$2$$ = $oj$$1$$.$Events$.$_getEvents$($prop$$11$$), $e$$17$$ = 0;$e$$17$$ < $actualType_eventArray$$2$$.length;$e$$17$$ += 1) {
          for($oneEvent$$ = $actualType_eventArray$$2$$[$e$$17$$].event, $oneAttr$$ = $actualType_eventArray$$2$$[$e$$17$$].$attribute$, $len_objEqual$$ = this.$listeningList$ ? this.$listeningList$.length : 0, $i$$9$$ = $len_objEqual$$ - 1;0 <= $i$$9$$;$i$$9$$ -= 1) {
            $attrEqual_event$$6$$ = this.$listeningList$[$i$$9$$], $len_objEqual$$ = $otherObj$$2$$ ? $otherObj$$2$$ === $attrEqual_event$$6$$.object : !0, $cb_eventEqual$$ = $oneEvent$$ ? $oneEvent$$ === $attrEqual_event$$6$$.event : !0, $callbackEqual$$ = $callback$$63$$ ? $eventMap$$2$$[$prop$$11$$] === $attrEqual_event$$6$$.$callback$ : !0, $attrEqual_event$$6$$ = $oneAttr$$ ? $oneAttr$$ === $attrEqual_event$$6$$.$attribute$ : !0, $len_objEqual$$ && ($cb_eventEqual$$ && $callbackEqual$$ && $attrEqual_event$$6$$) && 
            ($cb_eventEqual$$ = this.$listeningList$[$i$$9$$].object.$_offInternal$, $cb_eventEqual$$.apply(this.$listeningList$[$i$$9$$].object, [this.$listeningList$[$i$$9$$].event, this.$listeningList$[$i$$9$$].$callback$, this.$listeningList$[$i$$9$$].context, !0]), this.$listeningList$.splice($i$$9$$, 1))
          }
        }
      }
    }
    return this
  }};
  $oj$$1$$.$Events$.bind = $oj$$1$$.$Events$.on;
  $oj$$1$$.$Events$.unbind = $oj$$1$$.$Events$.off;
  $oj$$1$$.$Events$.$EventType$ = {ADD:"add", REMOVE:"remove", RESET:"reset", SORT:"sort", CHANGE:"change", DESTROY:"destroy", REQUEST:"request", SYNC:"sync", ERROR:"error", INVALID:"invalid", ALL:"all"};
  $goog$exportPath_$$("Events.EventType", $oj$$1$$.$Events$.$EventType$, $oj$$1$$);
  $oj$$1$$.$Events$.$Mixin$ = function $$oj$$1$$$$Events$$$Mixin$$($myClass$$, $source$$5$$) {
    var $methodName$$, $obj$$46$$ = $source$$5$$ || this;
    for($methodName$$ in $obj$$46$$) {
      "function" === typeof $obj$$46$$[$methodName$$] && ($myClass$$[$methodName$$] = $obj$$46$$[$methodName$$])
    }
    $myClass$$.$eventHandlers$ = {};
    $myClass$$.$listeningList$ = []
  };
  $oj$$1$$.$Events$.$_onceInternal$ = function $$oj$$1$$$$Events$$$_onceInternal$$($eventArray$$3_eventType$$14$$, $callback$$64_e$$18$$, $context$$8$$, $listenTo$$) {
    var $event$$7$$, $attr$$2$$, $eventMap$$3$$, $prop$$12$$;
    $eventMap$$3$$ = this.$_getEventMap$($eventArray$$3_eventType$$14$$, $callback$$64_e$$18$$);
    for($prop$$12$$ in $eventMap$$3$$) {
      if($eventMap$$3$$.hasOwnProperty($prop$$12$$)) {
        for($eventArray$$3_eventType$$14$$ = this.$_getEvents$($prop$$12$$), $callback$$64_e$$18$$ = 0;$callback$$64_e$$18$$ < $eventArray$$3_eventType$$14$$.length;$callback$$64_e$$18$$ += 1) {
          $event$$7$$ = $eventArray$$3_eventType$$14$$[$callback$$64_e$$18$$].event, $attr$$2$$ = $eventArray$$3_eventType$$14$$[$callback$$64_e$$18$$].$attribute$, void 0 === this.$eventHandlers$ && (this.$eventHandlers$ = []), void 0 === this.$eventHandlers$[$event$$7$$] && (this.$eventHandlers$[$event$$7$$] = []), this.$eventHandlers$[$event$$7$$].push({$callback$:$eventMap$$3$$[$prop$$12$$], context:$context$$8$$, $attribute$:$attr$$2$$, $once$:!0, fired:!1, $listen$:$listenTo$$})
        }
      }
    }
    return this
  };
  $oj$$1$$.$Events$.$_shouldFire$ = function $$oj$$1$$$$Events$$$_shouldFire$$($handler$$42$$) {
    return $handler$$42$$.$once$ ? $handler$$42$$.fired ? !1 : $handler$$42$$.fired = !0 : !0
  };
  $oj$$1$$.$Events$.$TriggerInternal$ = function $$oj$$1$$$$Events$$$TriggerInternal$$($silent$$, $eventType$$15$$) {
    var $eventArray$$4_handlers$$1$$ = this.$_getEvents$($eventType$$15$$), $e$$19$$, $event$$8_i$$10$$, $args$$8_attr$$3$$, $eventsToFire$$, $allHandlers$$, $callback$$65$$;
    $eventsToFire$$ = [];
    for($e$$19$$ = 0;$e$$19$$ < $eventArray$$4_handlers$$1$$.length;$e$$19$$ += 1) {
      $event$$8_i$$10$$ = $eventArray$$4_handlers$$1$$[$e$$19$$].event, $args$$8_attr$$3$$ = $eventArray$$4_handlers$$1$$[$e$$19$$].$attribute$, $eventsToFire$$.push({event:$event$$8_i$$10$$, $attribute$:$args$$8_attr$$3$$})
    }
    for($e$$19$$ = 0;$e$$19$$ < $eventsToFire$$.length;$e$$19$$ += 1) {
      $allHandlers$$ = this.$_getHandlers$(this.$eventHandlers$, $oj$$1$$.$Events$.$EventType$.ALL);
      $eventArray$$4_handlers$$1$$ = $oj$$1$$.$Events$.$_getHandlers$(this.$eventHandlers$, $eventsToFire$$[$e$$19$$].event, !1);
      for($event$$8_i$$10$$ = 0;$event$$8_i$$10$$ < ($eventArray$$4_handlers$$1$$ ? $eventArray$$4_handlers$$1$$.length : 0);$event$$8_i$$10$$ += 1) {
        $eventArray$$4_handlers$$1$$[$event$$8_i$$10$$].$attribute$ === $eventsToFire$$[$e$$19$$].$attribute$ && $eventArray$$4_handlers$$1$$[$event$$8_i$$10$$].$callback$ && ($args$$8_attr$$3$$ = Array.prototype.slice.call(arguments), $eventArray$$4_handlers$$1$$ && ($eventArray$$4_handlers$$1$$[$event$$8_i$$10$$] && $eventArray$$4_handlers$$1$$[$event$$8_i$$10$$].$once$) && this.$_removeHandler$($oj$$1$$.$Events$.$_getHandlers$(this.$eventHandlers$, $eventsToFire$$[$e$$19$$].event, !0), $eventArray$$4_handlers$$1$$[$event$$8_i$$10$$]), 
        $eventArray$$4_handlers$$1$$ && ($eventArray$$4_handlers$$1$$[$event$$8_i$$10$$] && this.$_shouldFire$($eventArray$$4_handlers$$1$$[$event$$8_i$$10$$])) && ($callback$$65$$ = $eventArray$$4_handlers$$1$$[$event$$8_i$$10$$].$callback$, $silent$$ && !$eventArray$$4_handlers$$1$$[$event$$8_i$$10$$].$ignoreSilent$ || $callback$$65$$.apply($eventArray$$4_handlers$$1$$[$event$$8_i$$10$$].context || this, $args$$8_attr$$3$$.slice(2))))
      }
      for($event$$8_i$$10$$ = 0;$event$$8_i$$10$$ < ($allHandlers$$ ? $allHandlers$$.length : 0);$event$$8_i$$10$$ += 1) {
        $args$$8_attr$$3$$ = Array.prototype.slice.call(arguments), 0 < $args$$8_attr$$3$$.length && ($args$$8_attr$$3$$[1] = $eventsToFire$$[$e$$19$$].$attribute$ ? $eventsToFire$$[$e$$19$$].event + ":" + $eventsToFire$$[$e$$19$$].$attribute$ : $eventsToFire$$[$e$$19$$].event), $allHandlers$$ && ($allHandlers$$[$event$$8_i$$10$$] && $allHandlers$$[$event$$8_i$$10$$].$callback$ && this.$_shouldFire$($allHandlers$$[$event$$8_i$$10$$])) && ($callback$$65$$ = $allHandlers$$[$event$$8_i$$10$$].$callback$, 
        $silent$$ && !$allHandlers$$[$event$$8_i$$10$$].$ignoreSilent$ || $callback$$65$$.apply($allHandlers$$[$event$$8_i$$10$$].context || this, $args$$8_attr$$3$$.slice(1))), $allHandlers$$ && ($allHandlers$$[$event$$8_i$$10$$] && $allHandlers$$[$event$$8_i$$10$$].$once$) && this.$_removeHandler$(this.$_getHandlers$(this.$eventHandlers$, $oj$$1$$.$Events$.$EventType$.ALL, !0), $allHandlers$$[$event$$8_i$$10$$])
      }
    }
    return this
  };
  $oj$$1$$.$Events$.$OnInternal$ = function $$oj$$1$$$$Events$$$OnInternal$$($eventMap$$4_eventType$$16$$, $callback$$66_eventArray$$5$$, $context$$9$$, $listenTo$$1$$, $ignoreSilent$$) {
    var $prop$$13$$, $i$$11$$, $event$$9$$, $attr$$4_eventObj$$;
    $eventMap$$4_eventType$$16$$ = this.$_getEventMap$($eventMap$$4_eventType$$16$$, $callback$$66_eventArray$$5$$);
    for($prop$$13$$ in $eventMap$$4_eventType$$16$$) {
      if($eventMap$$4_eventType$$16$$.hasOwnProperty($prop$$13$$)) {
        for($callback$$66_eventArray$$5$$ = this.$_getEvents$($prop$$13$$), $i$$11$$ = 0;$i$$11$$ < $callback$$66_eventArray$$5$$.length;$i$$11$$ += 1) {
          $event$$9$$ = $callback$$66_eventArray$$5$$[$i$$11$$].event, $attr$$4_eventObj$$ = $callback$$66_eventArray$$5$$[$i$$11$$].$attribute$, void 0 === this.$eventHandlers$ && (this.$eventHandlers$ = []), void 0 === this.$eventHandlers$[$event$$9$$] && (this.$eventHandlers$[$event$$9$$] = []), $attr$$4_eventObj$$ = {$callback$:$eventMap$$4_eventType$$16$$[$prop$$13$$], context:$context$$9$$, $attribute$:$attr$$4_eventObj$$, $listen$:$listenTo$$1$$, $ignoreSilent$:$ignoreSilent$$}, -1 === this.$_checkForHandler$(this.$eventHandlers$[$event$$9$$], 
          $attr$$4_eventObj$$, $oj$$1$$.$Events$.$_handlersIdentical$) && this.$eventHandlers$[$event$$9$$].push($attr$$4_eventObj$$)
        }
      }
    }
    return this
  };
  $oj$$1$$.$Events$.$_offInternal$ = function $$oj$$1$$$$Events$$$_offInternal$$($eventType$$17$$, $callback$$67$$, $context$$10$$, $listen$$) {
    var $eventMap$$5$$, $prop$$14$$;
    if(null == arguments || 0 == arguments.length) {
      return this.$eventHandlers$ = {}, this
    }
    if(null == $eventType$$17$$) {
      return this.$_removeEvent$($eventType$$17$$, $callback$$67$$, $context$$10$$, $listen$$), this
    }
    $eventMap$$5$$ = this.$_getEventMap$($eventType$$17$$, $callback$$67$$);
    for($prop$$14$$ in $eventMap$$5$$) {
      $eventMap$$5$$.hasOwnProperty($prop$$14$$) && this.$_removeEvent$($prop$$14$$, $eventMap$$5$$[$prop$$14$$], $context$$10$$, $listen$$)
    }
    return this
  };
  $oj$$1$$.$Events$.$_getEventMap$ = function $$oj$$1$$$$Events$$$_getEventMap$$($eventType$$18$$, $callback$$68$$) {
    var $eventMap$$6$$ = {};
    $eventType$$18$$.constructor === String ? $eventMap$$6$$[$eventType$$18$$] = $callback$$68$$ : $eventMap$$6$$ = $eventType$$18$$;
    return $eventMap$$6$$
  };
  $oj$$1$$.$Events$.$_removeEvent$ = function $$oj$$1$$$$Events$$$_removeEvent$$($e$$20_eventType$$19$$, $callback$$69$$, $context$$12$$, $listen$$1$$) {
    var $eventArray$$6$$ = [], $i$$12$$, $event$$10$$, $attr$$5$$, $handlers$$2$$, $callbacks$$2$$, $contexts$$, $attrs$$, $listenEq$$;
    if($e$$20_eventType$$19$$) {
      $eventArray$$6$$ = $oj$$1$$.$Events$.$_getEvents$($e$$20_eventType$$19$$)
    }else {
      if(void 0 !== this.$eventHandlers$) {
        for($event$$10$$ in this.$eventHandlers$) {
          this.$eventHandlers$.hasOwnProperty($event$$10$$) && $eventArray$$6$$.push({event:$event$$10$$})
        }
      }
    }
    for($e$$20_eventType$$19$$ = 0;$e$$20_eventType$$19$$ < $eventArray$$6$$.length;$e$$20_eventType$$19$$ += 1) {
      if($event$$10$$ = $eventArray$$6$$[$e$$20_eventType$$19$$].event, $attr$$5$$ = $eventArray$$6$$[$e$$20_eventType$$19$$].$attribute$, void 0 !== this.$eventHandlers$ && this.$eventHandlers$[$event$$10$$] instanceof Array) {
        $handlers$$2$$ = this.$eventHandlers$[$event$$10$$];
        for($i$$12$$ = $handlers$$2$$.length - 1;0 <= $i$$12$$;$i$$12$$ -= 1) {
          $callbacks$$2$$ = void 0 === $callback$$69$$ || null === $callback$$69$$ || $handlers$$2$$[$i$$12$$].$callback$ == $callback$$69$$, $contexts$$ = void 0 === $context$$12$$ || null === $context$$12$$ || $handlers$$2$$[$i$$12$$].context == $context$$12$$, $attrs$$ = void 0 === $attr$$5$$ || null === $attr$$5$$ || $handlers$$2$$[$i$$12$$].$attribute$ == $attr$$5$$, $listenEq$$ = void 0 === $listen$$1$$ || null === $listen$$1$$ || $handlers$$2$$[$i$$12$$].$listen$ == $listen$$1$$, $callbacks$$2$$ && 
          ($contexts$$ && $attrs$$ && $listenEq$$) && $handlers$$2$$.splice($i$$12$$, 1)
        }
        0 === $handlers$$2$$.length && delete this.$eventHandlers$[$event$$10$$]
      }
    }
  };
  $oj$$1$$.$Events$.$_removeHandler$ = function $$oj$$1$$$$Events$$$_removeHandler$$($handlers$$3$$, $handler$$43$$) {
    var $i$$13$$, $callbacks$$3$$, $contexts$$1$$, $attrs$$1$$, $listenEq$$1$$, $onceEq$$;
    for($i$$13$$ = $handlers$$3$$.length - 1;0 <= $i$$13$$;$i$$13$$ -= 1) {
      $callbacks$$3$$ = void 0 === $handler$$43$$.$callback$ || null === $handler$$43$$.$callback$ || $handlers$$3$$[$i$$13$$].$callback$ == $handler$$43$$.$callback$, $contexts$$1$$ = void 0 === $handler$$43$$.context || null === $handler$$43$$.context || $handlers$$3$$[$i$$13$$].context == $handler$$43$$.context, $attrs$$1$$ = void 0 === $handler$$43$$.$attribute$ || null === $handler$$43$$.$attribute$ || $handlers$$3$$[$i$$13$$].$attribute$ == $handler$$43$$.$attribute$, $listenEq$$1$$ = void 0 === 
      $handler$$43$$.$listen$ || null === $handler$$43$$.$listen$ || $handlers$$3$$[$i$$13$$].$listen$ == $handler$$43$$.$listen$, $onceEq$$ = void 0 === $handler$$43$$.$once$ || null === $handler$$43$$.$once$ || $handlers$$3$$[$i$$13$$].$once$ == $handler$$43$$.$once$, $callbacks$$3$$ && ($contexts$$1$$ && $attrs$$1$$ && $listenEq$$1$$ && $onceEq$$) && $handlers$$3$$.splice($i$$13$$, 1)
    }
  };
  $oj$$1$$.$Events$.$_getEvents$ = function $$oj$$1$$$$Events$$$_getEvents$$($eventList_eventString$$2$$) {
    $eventList_eventString$$2$$ = $eventList_eventString$$2$$ ? $eventList_eventString$$2$$.split(" ") : [];
    var $retList$$ = [], $i$$14$$, $attr$$6_eventWithAttr$$, $name$$68$$;
    for($i$$14$$ = 0;$i$$14$$ < $eventList_eventString$$2$$.length;$i$$14$$ += 1) {
      $attr$$6_eventWithAttr$$ = $eventList_eventString$$2$$[$i$$14$$].split(":"), $name$$68$$ = $attr$$6_eventWithAttr$$[0], $attr$$6_eventWithAttr$$ = 1 < $attr$$6_eventWithAttr$$.length ? $attr$$6_eventWithAttr$$[1] : null, $retList$$.push({event:$name$$68$$, $attribute$:$attr$$6_eventWithAttr$$})
    }
    return $retList$$
  };
  $oj$$1$$.$Events$.$_handlersIdentical$ = function $$oj$$1$$$$Events$$$_handlersIdentical$$($handler1$$, $handler2$$) {
    return $handler1$$.$callback$ === $handler2$$.$callback$ && $handler1$$.$attribute$ === $handler2$$.$attribute$ && $handler1$$.context === $handler2$$.context && $handler1$$.$listen$ === $handler2$$.$listen$ && $handler1$$.$once$ === $handler2$$.$once$
  };
  $oj$$1$$.$Events$.$_listenersIdentical$ = function $$oj$$1$$$$Events$$$_listenersIdentical$$($listener1$$, $listener2$$) {
    return $listener1$$.event === $listener2$$.event && $listener1$$.$attribute$ === $listener2$$.$attribute$ && $listener1$$.context === $listener2$$.context && $listener1$$.object === $listener2$$.object
  };
  $oj$$1$$.$Events$.$_checkForHandler$ = function $$oj$$1$$$$Events$$$_checkForHandler$$($handlerList$$, $handler$$44$$, $handlerTest$$) {
    var $i$$15$$;
    if(void 0 === $handlerList$$) {
      return-1
    }
    for($i$$15$$ = 0;$i$$15$$ < $handlerList$$.length;$i$$15$$ += 1) {
      if($handlerTest$$($handlerList$$[$i$$15$$], $handler$$44$$)) {
        return $i$$15$$
      }
    }
    return-1
  };
  $oj$$1$$.$Events$.$_getHandlers$ = function $$oj$$1$$$$Events$$$_getHandlers$$($handlers$$4$$, $eventType$$20$$, $handlerReturn_original$$1$$) {
    if($handlers$$4$$ && $handlers$$4$$[$eventType$$20$$] instanceof Array) {
      if($handlerReturn_original$$1$$) {
        return $handlers$$4$$[$eventType$$20$$]
      }
      $handlerReturn_original$$1$$ = [];
      var $i$$16$$;
      for($i$$16$$ = 0;$i$$16$$ < $handlers$$4$$[$eventType$$20$$].length;$i$$16$$++) {
        $handlerReturn_original$$1$$.push($handlers$$4$$[$eventType$$20$$][$i$$16$$])
      }
      return $handlerReturn_original$$1$$
    }
    return null
  };
  $oj$$1$$.$Model$ = function $$oj$$1$$$$Model$$($attributes$$, $options$$9$$) {
    $oj$$1$$.$Model$._init(this, $attributes$$, $options$$9$$, null)
  };
  $goog$exportPath_$$("Model", $oj$$1$$.$Model$, $oj$$1$$);
  $oj$$1$$.$Object$.$createSubclass$($oj$$1$$.$Model$, $oj$$1$$.$Object$, "Model.Model");
  $oj$$1$$.$Model$.prototype.$Init$ = function $$oj$$1$$$$Model$$$$Init$$() {
    $oj$$1$$.$Model$.$superclass$.$Init$.call(this)
  };
  $oj$$1$$.$Model$.prototype.attributes = {};
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.attributes", {attributes:$oj$$1$$.$Model$.prototype.attributes});
  $oj$$1$$.$Model$.prototype.$defaults$ = {};
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.defaults", {$defaults$:$oj$$1$$.$Model$.prototype.$defaults$});
  $oj$$1$$.$Model$.prototype.id = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.id", {id:$oj$$1$$.$Model$.prototype.id});
  $oj$$1$$.$Model$.prototype.$idAttribute$ = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.idAttribute", {$idAttribute$:$oj$$1$$.$Model$.prototype.$idAttribute$});
  $oj$$1$$.$Model$.prototype.$urlRoot$ = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.urlRoot", {$urlRoot$:$oj$$1$$.$Model$.prototype.$urlRoot$});
  $oj$$1$$.$Model$.prototype.$customURL$ = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.customURL", {$customURL$:$oj$$1$$.$Model$.prototype.$customURL$});
  $oj$$1$$.$Model$.$_idCount$ = 0;
  $oj$$1$$.$Model$._init = function $$oj$$1$$$$Model$$_init$($model$$, $attributes$$1$$, $options$$10$$, $parse_properties$$3$$) {
    var $prop$$15$$ = null, $attrCopy$$;
    if(!$oj$$1$$.$Model$.$_justExtending$) {
      $model$$.$Init$();
      $oj$$1$$.$Events$.$Mixin$($model$$);
      $model$$.$_clearChanged$();
      $model$$.$previousAttrs$ = {};
      $model$$.$nestedSet$ = !1;
      $model$$.index = -1;
      $options$$10$$ = $options$$10$$ || {};
      $model$$.attributes = {};
      $model$$.defaults && ($model$$.attributes = $oj$$1$$.$Model$.$_cloneAttributes$($oj$$1$$.$Model$.$IsFunction$($model$$.defaults) ? $model$$.defaults() : $model$$.defaults, null));
      for($prop$$15$$ in $parse_properties$$3$$) {
        $parse_properties$$3$$.hasOwnProperty($prop$$15$$) && ($model$$[$prop$$15$$] = $parse_properties$$3$$[$prop$$15$$])
      }
      if($attributes$$1$$) {
        if($parse_properties$$3$$ = $options$$10$$.parse, $oj$$1$$.$Model$.$IsFunction$($parse_properties$$3$$) && ($model$$.parse = $parse_properties$$3$$), $attrCopy$$ = $oj$$1$$.$Model$.$_cloneAttributes$($attributes$$1$$, $model$$.attributes), $attrCopy$$ = $parse_properties$$3$$ ? $model$$.parse($attrCopy$$) : $attrCopy$$, null == $attrCopy$$ || void 0 === $attrCopy$$) {
          $model$$.attributes = {}
        }else {
          for($prop$$15$$ in $attrCopy$$) {
            $attrCopy$$.hasOwnProperty($prop$$15$$) && $model$$.$_setProp$($prop$$15$$, $attrCopy$$[$prop$$15$$], $options$$10$$)
          }
        }
      }
      $model$$.$SetCid$();
      $model$$.$SetCollection$($options$$10$$.collection);
      $options$$10$$.customURL && ($model$$.customURL = $options$$10$$.customURL);
      $options$$10$$.url && ($model$$.url = $options$$10$$.url);
      $options$$10$$.urlRoot && ($model$$.urlRoot = $options$$10$$.urlRoot);
      $model$$.initialize && $model$$.initialize($attributes$$1$$, $options$$10$$);
      $model$$.$SetupId$()
    }
  };
  $oj$$1$$.$Model$.extend = function $$oj$$1$$$$Model$$extend$($properties$$4$$, $classProperties$$) {
    $oj$$1$$.$Model$.$_justExtending$ = !0;
    var $obj$$47$$, $prop$$16$$;
    $obj$$47$$ = new $oj$$1$$.$Model$;
    $oj$$1$$.$Model$.$_justExtending$ = !1;
    $oj$$1$$.$Events$.$Mixin$($obj$$47$$, this.prototype);
    $properties$$4$$ = $properties$$4$$ || {};
    for($prop$$16$$ in $properties$$4$$) {
      $properties$$4$$.hasOwnProperty($prop$$16$$) && ($obj$$47$$[$prop$$16$$] = $properties$$4$$[$prop$$16$$])
    }
    var $Model$$;
    $Model$$ = $properties$$4$$ && $properties$$4$$.constructor && $properties$$4$$.hasOwnProperty("constructor") ? $properties$$4$$.constructor : function($attributes$$2$$, $options$$11$$) {
      $oj$$1$$.$Model$._init(this, $attributes$$2$$, $options$$11$$, $properties$$4$$)
    };
    $Model$$.prototype = $obj$$47$$;
    $Model$$.extend = $oj$$1$$.$Model$.extend;
    $Model$$.prototype.constructor = $Model$$;
    $oj$$1$$.$Events$.$Mixin$($Model$$, this);
    if($classProperties$$) {
      for($prop$$16$$ in $classProperties$$) {
        $classProperties$$.hasOwnProperty($prop$$16$$) && ($Model$$[$prop$$16$$] = $classProperties$$[$prop$$16$$])
      }
    }
    return $Model$$
  };
  $goog$exportPath_$$("Model.extend", $oj$$1$$.$Model$.extend, $oj$$1$$);
  $oj$$1$$.$Model$.prototype.$TriggerInternal$ = $JSCompiler_emptyFn$$();
  $oj$$1$$.$Model$.prototype.$SetCid$ = function $$oj$$1$$$$Model$$$$SetCid$$() {
    this.$GetCid$() || (this.cid = "id" + $oj$$1$$.$Model$.$_idCount$, $oj$$1$$.$Model$.$_idCount$ += 1)
  };
  $oj$$1$$.$Model$.prototype.$GetCid$ = $JSCompiler_get$$("cid");
  $oj$$1$$.$Model$.prototype.$SetIndex$ = $JSCompiler_set$$("index");
  $oj$$1$$.$Model$.prototype.$SetNext$ = $JSCompiler_set$$("next");
  $oj$$1$$.$Model$.prototype.$GetNext$ = $JSCompiler_get$$("next");
  $oj$$1$$.$Model$.prototype.$SetPrevious$ = function $$oj$$1$$$$Model$$$$SetPrevious$$($model$$2$$) {
    var $retVal$$1$$ = this.previous;
    this.previous = $model$$2$$;
    return $retVal$$1$$
  };
  $oj$$1$$.$Model$.prototype.$GetPrevious$ = $JSCompiler_get$$("previous");
  $oj$$1$$.$Model$.prototype.$_getProp$ = function $$oj$$1$$$$Model$$$$_getProp$$($prop$$17$$) {
    return $oj$$1$$.$Model$.$IsFunction$(this[$prop$$17$$]) ? this[$prop$$17$$]() : this[$prop$$17$$]
  };
  $oj$$1$$.$Model$.prototype.$Merge$ = function $$oj$$1$$$$Model$$$$Merge$$($model$$3$$, $comparator$$) {
    var $prop$$18$$, $needSort$$ = !1, $isStringComparator$$ = $oj$$1$$.$StringUtils$.$isString$($comparator$$), $valueChange$$;
    for($prop$$18$$ in $model$$3$$.attributes) {
      $model$$3$$.attributes.hasOwnProperty($prop$$18$$) && ($valueChange$$ = this.attributes[$prop$$18$$] != $model$$3$$.attributes[$prop$$18$$], $isStringComparator$$ ? $prop$$18$$ === $comparator$$ && $valueChange$$ && ($needSort$$ = !0) : $valueChange$$ && ($needSort$$ = !0), $valueChange$$ && (this.attributes[$prop$$18$$] = $model$$3$$.attributes[$prop$$18$$], this.$_addChange$($prop$$18$$, $model$$3$$.attributes[$prop$$18$$])))
    }
    this.$SetupId$();
    return $needSort$$
  };
  $oj$$1$$.$Model$.$_hasProperties$ = function $$oj$$1$$$$Model$$$_hasProperties$$($object$$4$$) {
    var $prop$$19$$;
    if($object$$4$$ && $object$$4$$ instanceof Object) {
      for($prop$$19$$ in $object$$4$$) {
        if($object$$4$$.hasOwnProperty($prop$$19$$)) {
          return!0
        }
      }
    }
    return!1
  };
  $oj$$1$$.$Model$.prototype.$SetCollection$ = function $$oj$$1$$$$Model$$$$SetCollection$$($coll$$) {
    null == $coll$$ ? delete this.collection : this.collection = $coll$$
  };
  $oj$$1$$.$Model$.prototype.$GetCollection$ = $JSCompiler_get$$("collection");
  $oj$$1$$.$Model$.prototype.$_fireAttrChange$ = function $$oj$$1$$$$Model$$$$_fireAttrChange$$($prop$$20$$, $value$$55$$, $options$$13$$, $silent$$2$$) {
    null != $prop$$20$$ && this.$TriggerInternal$($silent$$2$$, $oj$$1$$.$Events$.$EventType$.CHANGE + ":" + $prop$$20$$, this, $value$$55$$, $options$$13$$)
  };
  $oj$$1$$.$Model$.prototype.$_fireChange$ = function $$oj$$1$$$$Model$$$$_fireChange$$($options$$14$$, $silent$$3$$) {
    var $coll$$1$$;
    this.$TriggerInternal$($silent$$3$$, $oj$$1$$.$Events$.$EventType$.CHANGE, this, $options$$14$$, null);
    ($coll$$1$$ = this.$GetCollection$()) && $coll$$1$$.$TriggerInternal$($silent$$3$$, $oj$$1$$.$Events$.$EventType$.CHANGE, this, $coll$$1$$, $options$$14$$, null)
  };
  $oj$$1$$.$Model$.prototype.$SetupId$ = function $$oj$$1$$$$Model$$$$SetupId$$() {
    this.id = this.attributes[this.$_getIdAttr$()]
  };
  $oj$$1$$.$Model$.prototype.$_setPropInternal$ = function $$oj$$1$$$$Model$$$$_setPropInternal$$($prop$$21$$, $value$$56$$) {
    return $oj$$1$$.$Object$.$innerEquals$(this.attributes[$prop$$21$$], $value$$56$$) ? !1 : (this.attributes[$prop$$21$$] = $value$$56$$, this.$SetupId$(), !0)
  };
  $oj$$1$$.$Model$.prototype.$_clearChanged$ = function $$oj$$1$$$$Model$$$$_clearChanged$$() {
    this.changed = {}
  };
  $oj$$1$$.$Model$.prototype.$_addChange$ = function $$oj$$1$$$$Model$$$$_addChange$$($property$$3$$, $value$$57$$) {
    this.changed[$property$$3$$] = $value$$57$$
  };
  $oj$$1$$.$Model$.prototype.$_setProp$ = function $$oj$$1$$$$Model$$$$_setProp$$($prop$$22$$, $value$$58$$, $options$$15$$) {
    if(null == $prop$$22$$) {
      return!0
    }
    var $attrs$$2$$ = {}, $p$$, $isNested$$ = this.$nestedSet$, $changes$$, $opts$$;
    $opts$$ = $oj$$1$$.$Model$.$_copyOptions$($options$$15$$);
    if(2 < arguments.length) {
      $attrs$$2$$[$prop$$22$$] = $value$$58$$
    }else {
      for($p$$ in $prop$$22$$) {
        $prop$$22$$.hasOwnProperty($p$$) && ($attrs$$2$$[$p$$] = $prop$$22$$[$p$$])
      }
      $opts$$ = $value$$58$$
    }
    $opts$$ = $opts$$ || {};
    $changes$$ = [];
    if(!this.$_checkValid$($attrs$$2$$, {validate:$opts$$.validate}, !1)) {
      return!1
    }
    $isNested$$ || this.$_clearChanged$();
    this.$nestedSet$ || (this.$previousAttrs$ = $oj$$1$$.$Model$.$_cloneAttributes$(this.attributes, null));
    this.$nestedSet$ = !0;
    for($p$$ in $attrs$$2$$) {
      $attrs$$2$$.hasOwnProperty($p$$) && (this.$_setPropInternal$($p$$, $attrs$$2$$[$p$$]) ? (this.$_addChange$($p$$, $attrs$$2$$[$p$$]), $changes$$.push($p$$)) : delete $attrs$$2$$[$p$$])
    }
    var $silent$$4$$ = $opts$$.silent;
    for($p$$ in $attrs$$2$$) {
      $attrs$$2$$.hasOwnProperty($p$$) && ($changes$$.length && !$silent$$4$$ && (this.$pendingChanges$ = !0), this.$_fireAttrChange$($p$$, $attrs$$2$$[$p$$], $opts$$, $silent$$4$$))
    }
    if($isNested$$) {
      return!0
    }
    if(!$silent$$4$$) {
      for(;this.$pendingChanges$;) {
        this.$pendingChanges$ = !1, this.$_fireChange$($opts$$, $silent$$4$$)
      }
    }
    this.$nestedSet$ = !1;
    return!0
  };
  $oj$$1$$.$Model$.prototype.clear = function $$oj$$1$$$$Model$$$clear$($options$$16$$) {
    var $prop$$23$$, $unsetOpt$$ = {silent:!0}, $silent$$5$$;
    $options$$16$$ = $options$$16$$ || {};
    $silent$$5$$ = $options$$16$$.silent;
    $unsetOpt$$.validate = $options$$16$$.validate;
    this.$_clearChanged$();
    for($prop$$23$$ in this.attributes) {
      if(this.attributes.hasOwnProperty($prop$$23$$)) {
        if(!this.$_unsetInternal$($prop$$23$$, $unsetOpt$$, !0)) {
          return!1
        }
        this.$TriggerInternal$($silent$$5$$, $oj$$1$$.$Events$.$EventType$.CHANGE + ":" + $prop$$23$$, this, void 0, null)
      }
    }
    this.attributes = {};
    this.$SetupId$();
    this.$_fireAttrChange$(null, null, null, $silent$$5$$);
    this.$_fireChange$(null, $silent$$5$$);
    return this
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.clear", {clear:$oj$$1$$.$Model$.prototype.clear});
  $oj$$1$$.$Model$.$_cloneAttributes$ = function $$oj$$1$$$$Model$$$_cloneAttributes$$($oldData$$, $newData$$) {
    var $prop$$24$$;
    $newData$$ = $newData$$ || {};
    for($prop$$24$$ in $oldData$$) {
      $oldData$$.hasOwnProperty($prop$$24$$) && ("object" !== typeof $oldData$$[$prop$$24$$] ? $newData$$.hasOwnProperty($prop$$24$$) ? void 0 !== $oldData$$[$prop$$24$$] && ($newData$$[$prop$$24$$] = $oldData$$[$prop$$24$$]) : $newData$$[$prop$$24$$] = $oldData$$[$prop$$24$$] : $newData$$[$prop$$24$$] = $oj$$1$$.$Model$.$_cloneAttributes$($oldData$$[$prop$$24$$], null))
    }
    return $newData$$
  };
  $oj$$1$$.$Model$.prototype.clone = function $$oj$$1$$$$Model$$$clone$() {
    var $c$$13$$ = new this.constructor, $prop$$25$$;
    for($prop$$25$$ in this) {
      this.hasOwnProperty($prop$$25$$) && this[$prop$$25$$] !== this.attributes && ($c$$13$$[$prop$$25$$] = this[$prop$$25$$])
    }
    $c$$13$$.attributes = $oj$$1$$.$Model$.$_cloneAttributes$(this.attributes, null);
    delete $c$$13$$.cid;
    $c$$13$$.$SetCid$();
    $c$$13$$.$SetupId$();
    return $c$$13$$
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.clone", {clone:$oj$$1$$.$Model$.prototype.clone});
  $oj$$1$$.$Model$.prototype.$Match$ = function $$oj$$1$$$$Model$$$$Match$$($id$$1$$, $cid$$) {
    var $modCid_modId$$ = this.$GetId$();
    if(void 0 !== $modCid_modId$$ && $modCid_modId$$ == $id$$1$$) {
      return!0
    }
    $modCid_modId$$ = this.cid;
    return void 0 !== $modCid_modId$$ && $modCid_modId$$ == $cid$$ ? !0 : !1
  };
  $oj$$1$$.$Model$.prototype.set = function $$oj$$1$$$$Model$$$set$($property$$4$$, $value$$59$$, $options$$17$$) {
    var $opts$$1$$ = {}, $ignoreLastArg$$ = !1, $i$$17_prop$$26$$, $valid$$ = !0;
    if(arguments && 0 < arguments.length) {
      if(1 < arguments.length && arguments[arguments.length - 1] && ($ignoreLastArg$$ = !0, $opts$$1$$ = arguments[arguments.length - 1] || {}), $oj$$1$$.$Model$.$_hasProperties$($property$$4$$)) {
        if($opts$$1$$.unset) {
          for($i$$17_prop$$26$$ in $property$$4$$) {
            $property$$4$$.hasOwnProperty($i$$17_prop$$26$$) && this.$_unsetInternal$($i$$17_prop$$26$$, null, !1)
          }
        }else {
          this.$_setProp$($property$$4$$, $opts$$1$$) || ($valid$$ = !1)
        }
      }else {
        for($i$$17_prop$$26$$ = 0;$i$$17_prop$$26$$ < arguments.length;$i$$17_prop$$26$$ += 2) {
          if(void 0 !== arguments[$i$$17_prop$$26$$] || $i$$17_prop$$26$$ < arguments.length - 1 || !$ignoreLastArg$$ && $i$$17_prop$$26$$ === arguments.length - 1) {
            $opts$$1$$.unset ? this.$_unsetInternal$(arguments[$i$$17_prop$$26$$], null, !1) : this.$_setProp$(arguments[$i$$17_prop$$26$$], arguments[$i$$17_prop$$26$$ + 1], $opts$$1$$) || ($valid$$ = !1)
          }
        }
      }
    }
    return $valid$$ ? this : !1
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.set", {set:$oj$$1$$.$Model$.prototype.set});
  $oj$$1$$.$Model$.prototype.$unset$ = function $$oj$$1$$$$Model$$$$unset$$($property$$5$$, $options$$18$$) {
    return this.$_unsetInternal$($property$$5$$, $options$$18$$, !1)
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.unset", {$unset$:$oj$$1$$.$Model$.prototype.$unset$});
  $oj$$1$$.$Model$.prototype.$_unsetInternal$ = function $$oj$$1$$$$Model$$$$_unsetInternal$$($property$$6$$, $options$$19$$, $clear$$) {
    $options$$19$$ = $options$$19$$ || {};
    var $silent$$6$$ = $options$$19$$.silent, $attrs$$3$$ = {};
    if(this.has($property$$6$$)) {
      if(!this.$_checkValid$($attrs$$3$$, $options$$19$$, !1)) {
        return!1
      }
      $clear$$ || this.$_clearChanged$();
      delete this.attributes[$property$$6$$];
      this.$_addChange$($property$$6$$, void 0);
      this.$_fireAttrChange$($property$$6$$, null, null, $silent$$6$$);
      this.$_fireChange$(null, $silent$$6$$)
    }
    this.$SetupId$();
    return!0
  };
  $oj$$1$$.$Model$.prototype.get = function $$oj$$1$$$$Model$$$get$($property$$7$$) {
    return this.attributes[$property$$7$$]
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.get", {get:$oj$$1$$.$Model$.prototype.get});
  $oj$$1$$.$Model$.prototype.has = function $$oj$$1$$$$Model$$$has$($property$$8$$) {
    return void 0 !== this.attributes[$property$$8$$] && null !== this.attributes[$property$$8$$]
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.has", {has:$oj$$1$$.$Model$.prototype.has});
  $oj$$1$$.$Model$.prototype.fetch = function $$oj$$1$$$$Model$$$fetch$($options$$20$$) {
    $options$$20$$ = $options$$20$$ || {};
    var $success$$8$$ = $options$$20$$.success, $userErr$$ = $options$$20$$.error, $self$$1$$ = this, $opts$$2$$;
    $opts$$2$$ = $oj$$1$$.$Model$.$_copyOptions$($options$$20$$);
    $opts$$2$$.error = function $$opts$$2$$$error$($xhr$$, $status$$, $err$$) {
      $self$$1$$.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.ERROR, $self$$1$$, $xhr$$, $options$$20$$);
      $userErr$$ && $userErr$$.call($self$$1$$, arguments)
    };
    $opts$$2$$.success = function $$opts$$2$$$success$($response$$) {
      $oj$$1$$.$Model$.$_fireSyncEvent$($self$$1$$, $response$$, $opts$$2$$);
      $oj$$1$$.$Model$.$IsFunction$(this.parse) && this.set(this.parse($response$$), $opts$$2$$);
      $success$$8$$ && $success$$8$$.call($self$$1$$, this, $response$$, $options$$20$$)
    };
    $oj$$1$$.$Model$.$_internalSync$("read", this, $opts$$2$$)
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.fetch", {fetch:$oj$$1$$.$Model$.prototype.fetch});
  $oj$$1$$.$Model$.prototype.parse = function $$oj$$1$$$$Model$$$parse$($rawData$$) {
    this.attributes = $rawData$$;
    this.$SetupId$();
    return this.attributes
  };
  $oj$$1$$.$Model$.prototype.url = function $$oj$$1$$$$Model$$$url$() {
    var $coll$$2_collUrl_urlRoot$$ = this.$_getUrlRoot$(), $id$$2_slash$$ = this.$GetId$();
    if($coll$$2_collUrl_urlRoot$$) {
      return $id$$2_slash$$ ? $coll$$2_collUrl_urlRoot$$ + "/" + encodeURIComponent($id$$2_slash$$) : $coll$$2_collUrl_urlRoot$$
    }
    if($coll$$2_collUrl_urlRoot$$ = this.collection) {
      return $coll$$2_collUrl_urlRoot$$ = $oj$$1$$.$Model$.$IsFunction$($coll$$2_collUrl_urlRoot$$.url) ? $coll$$2_collUrl_urlRoot$$.url() : $coll$$2_collUrl_urlRoot$$.url, $id$$2_slash$$ && $coll$$2_collUrl_urlRoot$$ ? ($id$$2_slash$$ = "/" == $oj$$1$$.$Model$.$_getLastChar$($coll$$2_collUrl_urlRoot$$) ? "" : "/", $coll$$2_collUrl_urlRoot$$ + $id$$2_slash$$ + encodeURIComponent(this.$GetId$())) : $coll$$2_collUrl_urlRoot$$
    }
    throw"No URL defined";
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.url", {url:$oj$$1$$.$Model$.prototype.url});
  $oj$$1$$.$Model$.prototype.keys = function $$oj$$1$$$$Model$$$keys$() {
    var $prop$$27$$, $retArray$$ = [];
    for($prop$$27$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$27$$) && $retArray$$.push($prop$$27$$)
    }
    return $retArray$$
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.keys", {keys:$oj$$1$$.$Model$.prototype.keys});
  $oj$$1$$.$Model$.prototype.$values$ = function $$oj$$1$$$$Model$$$$values$$() {
    var $prop$$28$$, $retArray$$1$$ = [];
    for($prop$$28$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$28$$) && $retArray$$1$$.push(this.get($prop$$28$$))
    }
    return $retArray$$1$$
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.values", {$values$:$oj$$1$$.$Model$.prototype.$values$});
  $oj$$1$$.$Model$.prototype.$pairs$ = function $$oj$$1$$$$Model$$$$pairs$$() {
    var $prop$$29$$, $retObj$$ = {};
    for($prop$$29$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$29$$) && ($retObj$$[$prop$$29$$] = this.get($prop$$29$$))
    }
    return $retObj$$
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.pairs", {$pairs$:$oj$$1$$.$Model$.prototype.$pairs$});
  $oj$$1$$.$Model$.prototype.$omit$ = function $$oj$$1$$$$Model$$$$omit$$($keys$$1$$) {
    var $keyArr$$ = [], $i$$18$$, $prop$$30$$, $retObj$$1$$ = {};
    if($keys$$1$$ instanceof Array) {
      $keyArr$$ = $keys$$1$$
    }else {
      if(arguments) {
        for($i$$18$$ = 0;$i$$18$$ < arguments.length;$i$$18$$++) {
          $keyArr$$.push(arguments[$i$$18$$])
        }
      }else {
        return this.$pairs$()
      }
    }
    for($prop$$30$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$30$$) && -1 == $keyArr$$.indexOf($prop$$30$$) && ($retObj$$1$$[$prop$$30$$] = this.get($prop$$30$$))
    }
    return $retObj$$1$$
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.omit", {$omit$:$oj$$1$$.$Model$.prototype.$omit$});
  $oj$$1$$.$Model$.prototype.$pick$ = function $$oj$$1$$$$Model$$$$pick$$($keys$$2$$) {
    var $keyArr$$1$$ = [], $i$$19$$, $retObj$$2$$ = {};
    if($keys$$2$$ instanceof Array) {
      $keyArr$$1$$ = $keys$$2$$
    }else {
      if(arguments) {
        for($i$$19$$ = 0;$i$$19$$ < arguments.length;$i$$19$$++) {
          $keyArr$$1$$.push(arguments[$i$$19$$])
        }
      }else {
        return this.$pairs$()
      }
    }
    for($i$$19$$ = 0;$i$$19$$ < $keyArr$$1$$.length;$i$$19$$++) {
      this.attributes.hasOwnProperty($keyArr$$1$$[$i$$19$$]) && ($retObj$$2$$[$keyArr$$1$$[$i$$19$$]] = this.get($keyArr$$1$$[$i$$19$$]))
    }
    return $retObj$$2$$
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.pick", {$pick$:$oj$$1$$.$Model$.prototype.$pick$});
  $oj$$1$$.$Model$.prototype.$invert$ = function $$oj$$1$$$$Model$$$$invert$$() {
    var $prop$$31$$, $retObj$$3$$ = {}, $val$$14$$;
    for($prop$$31$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$31$$) && ($val$$14$$ = this.get($prop$$31$$), $retObj$$3$$[$val$$14$$] = $prop$$31$$)
    }
    return $retObj$$3$$
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.invert", {$invert$:$oj$$1$$.$Model$.prototype.$invert$});
  $oj$$1$$.$Model$.$_getLastChar$ = function $$oj$$1$$$$Model$$$_getLastChar$$($str$$11$$) {
    return $str$$11$$.charAt($str$$11$$.length - 1)
  };
  $oj$$1$$.$Model$.prototype.$_saveUrl$ = function $$oj$$1$$$$Model$$$$_saveUrl$$() {
    var $urlRoot$$1$$ = this.$_getUrlRoot$();
    return $urlRoot$$1$$ ? $urlRoot$$1$$ : this.$GetCollection$() ? this.$GetCollection$().url : null
  };
  $oj$$1$$.$Model$.prototype.$_getUrlRoot$ = function $$oj$$1$$$$Model$$$$_getUrlRoot$$() {
    return $oj$$1$$.$Model$.$IsFunction$(this.urlRoot) ? this.urlRoot() : this.urlRoot
  };
  $oj$$1$$.$Model$.prototype.parseSave = function $$oj$$1$$$$Model$$$parseSave$($modelData$$) {
    return $modelData$$
  };
  $oj$$1$$.$Model$.prototype.isValid = function $$oj$$1$$$$Model$$$isValid$() {
    var $options$$21$$ = {};
    $options$$21$$.validate = this.validate;
    return this.$_checkValid$(this.attributes, $options$$21$$, !1)
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.isValid", {isValid:$oj$$1$$.$Model$.prototype.isValid});
  $oj$$1$$.$Model$.$_isValidateSet$ = function $$oj$$1$$$$Model$$$_isValidateSet$$($options$$22$$, $save$$) {
    $options$$22$$ = $options$$22$$ || {};
    return void 0 !== $options$$22$$.validate && null !== $options$$22$$.validate ? $options$$22$$.validate : $save$$
  };
  $oj$$1$$.$Model$.prototype.$_checkValid$ = function $$oj$$1$$$$Model$$$$_checkValid$$($attributes$$3$$, $options$$23$$, $save$$1$$) {
    var $validate$$ = this.validate;
    return $validate$$ && $oj$$1$$.$Model$.$_isValidateSet$($options$$23$$, $save$$1$$) && (this.validationError = $validate$$.call(this, $attributes$$3$$, $options$$23$$)) ? (this.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.INVALID, this, this.validationError, $options$$23$$), !1) : !0
  };
  $oj$$1$$.$Model$.$_processArgs$ = function $$oj$$1$$$$Model$$$_processArgs$$($args$$9$$) {
    var $ignoreLastArg$$1$$ = !1, $options$$24$$ = {}, $i$$20_prop$$32$$, $attributes$$4$$ = {};
    if($args$$9$$ && 0 < $args$$9$$.length) {
      1 < $args$$9$$.length && ($args$$9$$[$args$$9$$.length - 1] && $oj$$1$$.$Model$.$_hasProperties$($args$$9$$[$args$$9$$.length - 1])) && ($ignoreLastArg$$1$$ = !0, $options$$24$$ = $args$$9$$[$args$$9$$.length - 1] || {});
      if(null == $args$$9$$[0]) {
        return{attributes:null, options:$options$$24$$}
      }
      if($oj$$1$$.$Model$.$_hasProperties$($args$$9$$[0])) {
        for($i$$20_prop$$32$$ in $args$$9$$[0]) {
          $args$$9$$[0].hasOwnProperty($i$$20_prop$$32$$) && ($attributes$$4$$[$i$$20_prop$$32$$] = $args$$9$$[0][$i$$20_prop$$32$$])
        }
      }else {
        for($i$$20_prop$$32$$ = 0;$i$$20_prop$$32$$ < $args$$9$$.length;$i$$20_prop$$32$$ += 2) {
          if(void 0 !== $args$$9$$[$i$$20_prop$$32$$] || $i$$20_prop$$32$$ < $args$$9$$.length - 1 || !$ignoreLastArg$$1$$ && $i$$20_prop$$32$$ === $args$$9$$.length - 1) {
            $attributes$$4$$[$args$$9$$[$i$$20_prop$$32$$]] = $args$$9$$[$i$$20_prop$$32$$ + 1]
          }
        }
      }
    }
    return{attributes:$attributes$$4$$, options:$options$$24$$}
  };
  $oj$$1$$.$Model$.$_copyOptions$ = function $$oj$$1$$$$Model$$$_copyOptions$$($options$$25$$) {
    var $optReturn$$ = {}, $prop$$33$$;
    $options$$25$$ = $options$$25$$ || {};
    for($prop$$33$$ in $options$$25$$) {
      $options$$25$$.hasOwnProperty($prop$$33$$) && ($optReturn$$[$prop$$33$$] = $options$$25$$[$prop$$33$$])
    }
    return $optReturn$$
  };
  $oj$$1$$.$Model$.prototype.save = function $$oj$$1$$$$Model$$$save$($attributes$$5$$, $options$$26$$) {
    var $argResults_forceNew$$, $success$$9$$, $callback$$70$$, $self$$2$$, $userErr$$1$$, $patch$$;
    $argResults_forceNew$$ = $oj$$1$$.$Model$.$_processArgs$(arguments);
    var $opts$$3$$, $oldAttrs$$, $attrArgs$$;
    $attrArgs$$ = void 0 === $attributes$$5$$ ? void 0 : $argResults_forceNew$$.attributes;
    $opts$$3$$ = $oj$$1$$.$Model$.$_copyOptions$($argResults_forceNew$$.options);
    $opts$$3$$.wait || this.set($attrArgs$$);
    if(!this.$_checkValid$(this.attributes, $opts$$3$$, !0)) {
      return!1
    }
    $argResults_forceNew$$ = void 0 === $opts$$3$$.forceNew ? !1 : $opts$$3$$.forceNew;
    $self$$2$$ = this;
    $userErr$$1$$ = $opts$$3$$.error;
    $patch$$ = $opts$$3$$.patch;
    $opts$$3$$.error = function $$opts$$3$$$error$($xhr$$1$$, $status$$1$$, $err$$1$$) {
      $self$$2$$.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.ERROR, $self$$2$$, $xhr$$1$$, $options$$26$$);
      $userErr$$1$$ && $userErr$$1$$.call($self$$2$$, arguments)
    };
    $opts$$3$$.saveAttrs = $opts$$3$$.wait ? this.$_attrUnion$($attrArgs$$) : this.attributes;
    $oldAttrs$$ = this.attributes;
    this.attributes = $opts$$3$$.saveAttrs;
    $opts$$3$$.saveAttrs = this.toJSON();
    this.attributes = $oldAttrs$$;
    if(!$argResults_forceNew$$ && !this.$isNew$()) {
      return $success$$9$$ = $opts$$3$$.success, $opts$$3$$.success = function $$opts$$3$$$success$($resp$$) {
        var $attrs$$4$$;
        $resp$$ && ($attrs$$4$$ = $oj$$1$$.$Model$.$IsFunction$(this.parse) ? this.parse($resp$$) : $resp$$, $self$$2$$.attributes = $attrs$$4$$, $self$$2$$.$SetupId$());
        $oj$$1$$.$Model$.$_fireSyncEvent$($self$$2$$, $resp$$, $opts$$3$$);
        $success$$9$$ && $success$$9$$.call($oj$$1$$.$Model$.$GetContext$($opts$$3$$, $self$$2$$), $self$$2$$, $resp$$, $options$$26$$);
        $self$$2$$.$_clearChanged$()
      }, $opts$$3$$.attrs = void 0 === $attrArgs$$ ? void 0 : $patch$$ ? $attrArgs$$ : $opts$$3$$.saveAttrs, $oj$$1$$.$Model$.$_internalSync$($patch$$ ? "patch" : "update", this, $opts$$3$$)
    }
    $callback$$70$$ = $oj$$1$$.$Model$.$_getSuccess$($opts$$3$$);
    $opts$$3$$.success = function $$opts$$3$$$success$($resp$$1$$) {
      var $attrs$$5$$;
      if($resp$$1$$) {
        $attrs$$5$$ = $oj$$1$$.$Model$.$IsFunction$($self$$2$$.parse) ? $self$$2$$.parse($resp$$1$$) : $resp$$1$$;
        if(!$self$$2$$.$_checkValid$($attrs$$5$$, $opts$$3$$, !0)) {
          return
        }
        $self$$2$$.attributes = $attrs$$5$$;
        $self$$2$$.$SetupId$()
      }
      $opts$$3$$.wait && $self$$2$$.set($attrArgs$$);
      $oj$$1$$.$Model$.$_fireSyncEvent$($self$$2$$, $resp$$1$$, $opts$$3$$);
      $callback$$70$$ && $callback$$70$$.call($oj$$1$$.$Model$.$GetContext$($opts$$3$$, $self$$2$$), $self$$2$$, $resp$$1$$, $options$$26$$);
      $self$$2$$.$_clearChanged$()
    };
    $opts$$3$$.attrs = $opts$$3$$.saveAttrs;
    $opts$$3$$.parse = !0;
    return $oj$$1$$.$Model$.$_internalSync$("create", this, $opts$$3$$)
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.save", {save:$oj$$1$$.$Model$.prototype.save});
  $oj$$1$$.$Model$.prototype.$_attrUnion$ = function $$oj$$1$$$$Model$$$$_attrUnion$$($attrs$$6$$) {
    var $attrReturn$$ = {}, $prop$$34$$;
    for($prop$$34$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$34$$) && ($attrReturn$$[$prop$$34$$] = this.attributes[$prop$$34$$])
    }
    for($prop$$34$$ in $attrs$$6$$) {
      $attrs$$6$$.hasOwnProperty($prop$$34$$) && ($attrReturn$$[$prop$$34$$] = $attrs$$6$$[$prop$$34$$])
    }
    return $attrReturn$$
  };
  $oj$$1$$.$Model$.isArray = function $$oj$$1$$$$Model$$isArray$($obj$$48$$) {
    return $obj$$48$$.constructor === Array
  };
  $oj$$1$$.$Model$.$IsFunction$ = function $$oj$$1$$$$Model$$$IsFunction$$($obj$$49$$) {
    return $obj$$49$$ instanceof Function
  };
  $oj$$1$$.$Model$.prototype.$_hasAttrs$ = function $$oj$$1$$$$Model$$$$_hasAttrs$$($attrs$$7$$) {
    for(var $prop$$35$$ in $attrs$$7$$) {
      if($attrs$$7$$.hasOwnProperty($prop$$35$$) && (!this.attributes.hasOwnProperty($prop$$35$$) || $attrs$$7$$[$prop$$35$$] !== this.attributes[$prop$$35$$])) {
        return!1
      }
    }
    return!0
  };
  $oj$$1$$.$Model$.prototype.$Contains$ = function $$oj$$1$$$$Model$$$$Contains$$($attrList_attrs$$8$$) {
    $attrList_attrs$$8$$ = $attrList_attrs$$8$$.constructor === Array ? $attrList_attrs$$8$$ : [$attrList_attrs$$8$$];
    var $i$$21$$;
    for($i$$21$$ = 0;$i$$21$$ < $attrList_attrs$$8$$.length;$i$$21$$++) {
      if(this.$_hasAttrs$($attrList_attrs$$8$$[$i$$21$$])) {
        return!0
      }
    }
    return!1
  };
  $oj$$1$$.$Model$.$_getSuccess$ = function $$oj$$1$$$$Model$$$_getSuccess$$($options$$27$$) {
    return null != $options$$27$$ && $options$$27$$.success ? $options$$27$$.success : null
  };
  $oj$$1$$.$Model$.$GetContext$ = function $$oj$$1$$$$Model$$$GetContext$$($options$$28$$, $model$$4$$) {
    return void 0 !== $options$$28$$ && void 0 !== $options$$28$$.context ? $options$$28$$.context : $model$$4$$
  };
  $oj$$1$$.$Model$.prototype.$isNew$ = function $$oj$$1$$$$Model$$$$isNew$$() {
    return void 0 == this.$GetId$()
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.isNew", {$isNew$:$oj$$1$$.$Model$.prototype.$isNew$});
  $oj$$1$$.$Model$.prototype.$_getIdAttr$ = function $$oj$$1$$$$Model$$$$_getIdAttr$$() {
    return this.idAttribute || "id"
  };
  $oj$$1$$.$Model$.prototype.$GetId$ = $JSCompiler_get$$("id");
  $oj$$1$$.$Model$.prototype.$changedAttributes$ = function $$oj$$1$$$$Model$$$$changedAttributes$$($attributes$$6$$) {
    if($attributes$$6$$) {
      var $internalChanges$$ = {}, $prop$$36$$;
      for($prop$$36$$ in $attributes$$6$$) {
        $attributes$$6$$.hasOwnProperty($prop$$36$$) && ($oj$$1$$.$Object$.$innerEquals$($attributes$$6$$[$prop$$36$$], this.attributes[$prop$$36$$]) || ($internalChanges$$[$prop$$36$$] = $attributes$$6$$[$prop$$36$$]))
      }
      return $oj$$1$$.$Object$.$isEmpty$($internalChanges$$) ? !1 : $internalChanges$$
    }
    return $oj$$1$$.$Object$.$isEmpty$(this.changed) ? !1 : this.changed
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.changedAttributes", {$changedAttributes$:$oj$$1$$.$Model$.prototype.$changedAttributes$});
  $oj$$1$$.$Model$.prototype.$hasChanged$ = function $$oj$$1$$$$Model$$$$hasChanged$$($attribute$$) {
    return void 0 !== $attribute$$ ? $oj$$1$$.$Model$.$_hasProperties$(this.changed) && this.changed.hasOwnProperty($attribute$$) : $oj$$1$$.$Model$.$_hasProperties$(this.changed)
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.hasChanged", {$hasChanged$:$oj$$1$$.$Model$.prototype.$hasChanged$});
  $oj$$1$$.$Model$.prototype.change = function $$oj$$1$$$$Model$$$change$() {
    for(var $prop$$37$$ in this.changed) {
      this.changed.hasOwnProperty($prop$$37$$) && (this.$_fireAttrChange$($prop$$37$$, this.get($prop$$37$$), null, !1), this.$_fireChange$(null, !1))
    }
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.change", {change:$oj$$1$$.$Model$.prototype.change});
  $oj$$1$$.$Model$.prototype.destroy = function $$oj$$1$$$$Model$$$destroy$($options$$29$$) {
    $options$$29$$ = $options$$29$$ || {};
    var $isWait$$ = $options$$29$$.wait, $callback$$71$$, $userErr$$2$$ = $options$$29$$.error, $self$$3$$ = this, $xhr$$3$$, $opts$$4$$;
    $opts$$4$$ = $oj$$1$$.$Model$.$_copyOptions$($options$$29$$);
    $callback$$71$$ = $oj$$1$$.$Model$.$_getSuccess$($opts$$4$$);
    $opts$$4$$.success = function $$opts$$4$$$success$($data$$31$$) {
      $isWait$$ && $self$$3$$.$_fireDestroy$();
      $oj$$1$$.$Model$.$_fireSyncEvent$($self$$3$$, $data$$31$$, $opts$$4$$);
      $callback$$71$$ && $callback$$71$$.call($oj$$1$$.$Model$.$GetContext$($opts$$4$$, $self$$3$$), $self$$3$$, $data$$31$$, $options$$29$$)
    };
    $opts$$4$$.error = function $$opts$$4$$$error$($xhr$$5$$, $status$$4$$, $err$$2$$) {
      $self$$3$$.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.ERROR, $self$$3$$, $xhr$$5$$, $opts$$4$$);
      $userErr$$2$$ && $userErr$$2$$.call($self$$3$$, arguments)
    };
    if(!this.$isNew$()) {
      return $xhr$$3$$ = $oj$$1$$.$Model$.$_internalSync$("delete", this, $opts$$4$$), $isWait$$ || this.$_fireDestroy$(), $xhr$$3$$
    }
    $isWait$$ || this.$_fireDestroy$();
    $callback$$71$$ && $callback$$71$$.call($oj$$1$$.$Model$.$GetContext$($opts$$4$$, $self$$3$$), $self$$3$$, null, $options$$29$$);
    return!1
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.destroy", {destroy:$oj$$1$$.$Model$.prototype.destroy});
  $oj$$1$$.$Model$.prototype.$_fireDestroy$ = function $$oj$$1$$$$Model$$$$_fireDestroy$$() {
    this.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.DESTROY, this, this.collection, null)
  };
  $oj$$1$$.$Model$.$_fireSyncEvent$ = function $$oj$$1$$$$Model$$$_fireSyncEvent$$($model$$5$$, $resp$$2$$, $options$$30$$) {
    $model$$5$$.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.SYNC, $model$$5$$, $resp$$2$$, $options$$30$$)
  };
  $oj$$1$$.$Model$.prototype.toJSON = function $$oj$$1$$$$Model$$$toJSON$() {
    var $retObj$$4$$ = {}, $prop$$38$$;
    for($prop$$38$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$38$$) && (Array.isArray(this.attributes[$prop$$38$$]) ? $retObj$$4$$[$prop$$38$$] = this.attributes[$prop$$38$$].slice(0) : $retObj$$4$$[$prop$$38$$] = this.attributes[$prop$$38$$])
    }
    return $retObj$$4$$
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.toJSON", {toJSON:$oj$$1$$.$Model$.prototype.toJSON});
  $oj$$1$$.$Model$.prototype.previous = function $$oj$$1$$$$Model$$$previous$($attr$$7$$) {
    return this.$previousAttrs$[$attr$$7$$]
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.previous", {previous:$oj$$1$$.$Model$.prototype.previous});
  $oj$$1$$.$Model$.prototype.$previousAttributes$ = $JSCompiler_get$$("$previousAttrs$");
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.previousAttributes", {$previousAttributes$:$oj$$1$$.$Model$.prototype.$previousAttributes$});
  $oj$$1$$.$Model$.prototype.$previousChanges$ = $JSCompiler_get$$("$previousAttrs$");
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.previousChanges", {$previousChanges$:$oj$$1$$.$Model$.prototype.$previousChanges$});
  $oj$$1$$.$Model$.prototype.sync = function $$oj$$1$$$$Model$$$sync$($method$$3$$, $model$$6$$, $options$$31$$) {
    return window.oj.sync($method$$3$$, $model$$6$$, $options$$31$$)
  };
  $oj$$1$$.$Model$.$_internalSync$ = function $$oj$$1$$$$Model$$$_internalSync$$($method$$4$$, $model$$7$$, $options$$32$$) {
    $options$$32$$ = $options$$32$$ || {};
    $model$$7$$.oauth && ($options$$32$$.oauthHeader = $model$$7$$.oauth.getHeader());
    !$options$$32$$.dataType && $model$$7$$.dataType && ($options$$32$$.dataType = $model$$7$$.dataType);
    !$options$$32$$.jsonpCallback && $model$$7$$.jsonpCallback && ($options$$32$$.jsonpCallback = $model$$7$$.jsonpCallback);
    if("create" === $method$$4$$ || "patch" === $method$$4$$ || "update" === $method$$4$$) {
      $options$$32$$.$parsedData$ = $model$$7$$.parseSave.call($model$$7$$, "patch" === $method$$4$$ ? $model$$7$$.changed : $options$$32$$.saveAttrs)
    }
    return $model$$7$$.sync($method$$4$$, $model$$7$$, $options$$32$$)
  };
  $oj$$1$$.$sync$ = function $$oj$$1$$$$sync$$($method$$5$$, $model$$8$$, $options$$33$$) {
    $options$$33$$ = $options$$33$$ || {};
    var $customURL_restService$$, $success$$10$$ = $options$$33$$.success, $error$$4$$ = $options$$33$$.error;
    $customURL_restService$$ = $model$$8$$.customURL;
    if("create" === $method$$5$$.valueOf()) {
      return $customURL_restService$$ = new $oj$$1$$.$RestImpl$($model$$8$$.$_saveUrl$(), $customURL_restService$$), $customURL_restService$$.$addRecord$($options$$33$$.$parsedData$, $error$$4$$, $options$$33$$, $model$$8$$)
    }
    if("read" === $method$$5$$.valueOf()) {
      if($model$$8$$ instanceof $oj$$1$$.$Model$) {
        return $customURL_restService$$ = new $oj$$1$$.$RestImpl$($model$$8$$.url(), $customURL_restService$$), $customURL_restService$$.$getRecord$($success$$10$$, $error$$4$$, $model$$8$$.$GetId$(), $options$$33$$, $oj$$1$$.$Model$.$GetContext$($options$$33$$, $model$$8$$))
      }
      $customURL_restService$$ = new $oj$$1$$.$RestImpl$($model$$8$$.$GetCollectionFetchUrl$($options$$33$$), $customURL_restService$$);
      return $customURL_restService$$.$getRecords$($success$$10$$, $error$$4$$, $options$$33$$, $model$$8$$)
    }
    $customURL_restService$$ = new $oj$$1$$.$RestImpl$($model$$8$$.url(), $customURL_restService$$);
    var $recordId$$ = null;
    $model$$8$$ instanceof $oj$$1$$.$Model$ && ($recordId$$ = $model$$8$$.$GetId$());
    return"update" === $method$$5$$.valueOf() ? $customURL_restService$$.$updateRecord$($success$$10$$, $recordId$$, $options$$33$$.$parsedData$, $error$$4$$, $options$$33$$, $model$$8$$, !1) : "patch" === $method$$5$$.valueOf() ? $customURL_restService$$.$updateRecord$($success$$10$$, $recordId$$, $options$$33$$.$parsedData$, $error$$4$$, $options$$33$$, $model$$8$$, !0) : "delete" === $method$$5$$.valueOf() ? $customURL_restService$$.$deleteRecord$($recordId$$, $error$$4$$, $options$$33$$, $model$$8$$) : 
    null
  };
  $goog$exportPath_$$("sync", $oj$$1$$.$sync$, $oj$$1$$);
  $oj$$1$$.ajax = function $$oj$$1$$$ajax$() {
    return $$$$1$$.ajax.apply(window.oj, arguments)
  };
  $oj$$1$$.$Collection$ = function $$oj$$1$$$$Collection$$($models$$, $options$$34$$) {
    $oj$$1$$.$Collection$.$_justExtending$ || $oj$$1$$.$Collection$._init(this, $models$$, $options$$34$$, null)
  };
  $goog$exportPath_$$("Collection", $oj$$1$$.$Collection$, $oj$$1$$);
  $oj$$1$$.$Collection$.prototype.$model$ = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.model", {$model$:$oj$$1$$.$Collection$.prototype.$model$});
  $oj$$1$$.$Collection$.prototype.length = 0;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.length", {length:$oj$$1$$.$Collection$.prototype.length});
  $oj$$1$$.$Collection$.prototype.$models$ = [];
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.models", {$models$:$oj$$1$$.$Collection$.prototype.$models$});
  $oj$$1$$.$Collection$.prototype.url = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.url", {url:$oj$$1$$.$Collection$.prototype.url});
  $oj$$1$$.$Collection$.prototype.$customURL$ = $JSCompiler_returnArg$$(null);
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.customURL", {$customURL$:$oj$$1$$.$Collection$.prototype.$customURL$});
  $oj$$1$$.$Collection$.prototype.$customPagingOptions$ = $JSCompiler_returnArg$$(null);
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.customPagingOptions", {$customPagingOptions$:$oj$$1$$.$Collection$.prototype.$customPagingOptions$});
  $oj$$1$$.$Collection$.prototype.$lastFetchSize$ = 0;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.lastFetchSize", {$lastFetchSize$:$oj$$1$$.$Collection$.prototype.$lastFetchSize$});
  $oj$$1$$.$Collection$.prototype.hasMore = !1;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.hasMore", {hasMore:$oj$$1$$.$Collection$.prototype.hasMore});
  $oj$$1$$.$Collection$.prototype.$totalResults$ = 0;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.totalResults", {$totalResults$:$oj$$1$$.$Collection$.prototype.$totalResults$});
  $oj$$1$$.$Collection$.prototype.$lastFetchCount$ = 0;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.lastFetchCount", {$lastFetchCount$:$oj$$1$$.$Collection$.prototype.$lastFetchCount$});
  $oj$$1$$.$Collection$.prototype.$modelLimit$ = -1;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.modelLimit", {$modelLimit$:$oj$$1$$.$Collection$.prototype.$modelLimit$});
  $oj$$1$$.$Collection$.prototype.offset = 0;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.offset", {offset:$oj$$1$$.$Collection$.prototype.offset});
  $oj$$1$$.$Collection$.prototype.$fetchSize$ = -1;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.fetchSize", {$fetchSize$:$oj$$1$$.$Collection$.prototype.$fetchSize$});
  $oj$$1$$.$Collection$.prototype.$sortDirection$ = 1;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.sortDirection", {$sortDirection$:$oj$$1$$.$Collection$.prototype.$sortDirection$});
  $oj$$1$$.$Collection$.prototype.$comparator$ = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.comparator", {$comparator$:$oj$$1$$.$Collection$.prototype.$comparator$});
  $oj$$1$$.$Collection$.prototype.$sortSupported$ = !0;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.sortSupported", {$sortSupported$:$oj$$1$$.$Collection$.prototype.$sortSupported$});
  $oj$$1$$.$Object$.$createSubclass$($oj$$1$$.$Collection$, $oj$$1$$.$Object$, "Collection.Collection");
  $oj$$1$$.$Collection$.prototype.$Init$ = function $$oj$$1$$$$Collection$$$$Init$$() {
    $oj$$1$$.$Collection$.$superclass$.$Init$.call(this)
  };
  $oj$$1$$.$Collection$.extend = function $$oj$$1$$$$Collection$$extend$($properties$$5$$) {
    $oj$$1$$.$Collection$.$_justExtending$ = !0;
    var $obj$$50$$ = new $oj$$1$$.$Collection$;
    $oj$$1$$.$Collection$.$_justExtending$ = !1;
    var $Collection$$;
    $Collection$$ = $properties$$5$$ && $properties$$5$$.constructor && $properties$$5$$.hasOwnProperty("constructor") ? $properties$$5$$.constructor : function($models$$1$$, $options$$36$$) {
      $oj$$1$$.$Collection$._init(this, $models$$1$$, $options$$36$$, $properties$$5$$)
    };
    $Collection$$.prototype = $obj$$50$$;
    return $Collection$$.prototype.constructor = $Collection$$
  };
  $goog$exportPath_$$("Collection.extend", $oj$$1$$.$Collection$.extend, $oj$$1$$);
  $oj$$1$$.$Collection$._init = function $$oj$$1$$$$Collection$$_init$($collection$$3$$, $models$$2$$, $options$$37$$, $properties$$6$$) {
    var $i$$22_prop$$39$$, $modelList_optionlist$$;
    $collection$$3$$.$Init$();
    $oj$$1$$.$Events$.$Mixin$($collection$$3$$);
    if($properties$$6$$) {
      for($i$$22_prop$$39$$ in $properties$$6$$) {
        $properties$$6$$.hasOwnProperty($i$$22_prop$$39$$) && ($collection$$3$$[$i$$22_prop$$39$$] = $properties$$6$$[$i$$22_prop$$39$$])
      }
    }
    $options$$37$$ = $options$$37$$ || {};
    $modelList_optionlist$$ = ["url", "comparator", "model", $oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$, "modelLimit", "customURL"];
    for($i$$22_prop$$39$$ = 0;$i$$22_prop$$39$$ < $modelList_optionlist$$.length;$i$$22_prop$$39$$++) {
      $options$$37$$.hasOwnProperty($modelList_optionlist$$[$i$$22_prop$$39$$]) && void 0 !== $options$$37$$[$modelList_optionlist$$[$i$$22_prop$$39$$]] && ($collection$$3$$[$modelList_optionlist$$[$i$$22_prop$$39$$]] = $options$$37$$[$modelList_optionlist$$[$i$$22_prop$$39$$]])
    }
    void 0 === $collection$$3$$.$_getFetchSize$(null) && $collection$$3$$.$setFetchSize$(-1);
    void 0 === $collection$$3$$.modelLimit && $collection$$3$$.$setModelLimit$(-1);
    $collection$$3$$.hasMore = !1;
    $collection$$3$$.$lruCount$ = 0;
    $collection$$3$$.$_setModels$([]);
    $options$$37$$.parse && ($models$$2$$ = $collection$$3$$.parse($models$$2$$));
    if(null != $models$$2$$ && void 0 !== $models$$2$$) {
      for($modelList_optionlist$$ = $models$$2$$ instanceof Array ? $models$$2$$ : [$models$$2$$], $i$$22_prop$$39$$ = 0;$i$$22_prop$$39$$ < $modelList_optionlist$$.length;$i$$22_prop$$39$$ += 1) {
        $collection$$3$$.add($modelList_optionlist$$[$i$$22_prop$$39$$], $options$$37$$)
      }
    }
    $collection$$3$$.$_setLength$();
    $properties$$6$$ && $properties$$6$$.initialize && $properties$$6$$.initialize.call($collection$$3$$, $models$$2$$, $options$$37$$)
  };
  $oj$$1$$.$Collection$.prototype.on = $JSCompiler_emptyFn$$();
  $oj$$1$$.$Collection$.prototype.$OnInternal$ = $JSCompiler_emptyFn$$();
  $oj$$1$$.$Collection$.prototype.$TriggerInternal$ = $JSCompiler_emptyFn$$();
  $oj$$1$$.$Collection$.prototype.$_setModels$ = $JSCompiler_set$$("models");
  $oj$$1$$.$Collection$.prototype.$_getModels$ = $JSCompiler_get$$("models");
  $oj$$1$$.$Collection$.prototype.$_getModelsLength$ = function $$oj$$1$$$$Collection$$$$_getModelsLength$$() {
    return this.$_getModels$().length
  };
  $oj$$1$$.$Collection$.prototype.$_overUpperLimit$ = function $$oj$$1$$$$Collection$$$$_overUpperLimit$$($index$$49$$) {
    return $index$$49$$ < this.$_getModelsLength$() || this.$_isVirtual$() && !this.$_hasTotalResults$() ? !1 : !0
  };
  $oj$$1$$.$Collection$.prototype.$_hasTotalResults$ = function $$oj$$1$$$$Collection$$$$_hasTotalResults$$() {
    return void 0 !== this.totalResults && null != this.totalResults
  };
  $oj$$1$$.$Collection$.prototype.$_pushModels$ = function $$oj$$1$$$$Collection$$$$_pushModels$$($model$$9$$) {
    this.$_makeModelHead$($model$$9$$);
    this.$_getModels$().push($model$$9$$);
    this.$lruCount$++;
    $model$$9$$.$SetIndex$(this.$_getModelsLength$() - 1)
  };
  $oj$$1$$.$Collection$.prototype.$_reduceLRU$ = function $$oj$$1$$$$Collection$$$$_reduceLRU$$($removed$$) {
    if($removed$$) {
      for(var $i$$23$$ = 0;$i$$23$$ < $removed$$.length;$i$$23$$++) {
        $removed$$[$i$$23$$] && this.$lruCount$--
      }
    }
  };
  $oj$$1$$.$Collection$.prototype.$_spliceModels$ = function $$oj$$1$$$$Collection$$$$_spliceModels$$($start$$6$$, $count$$6$$, $model$$10$$) {
    for(var $i$$24$$ = $start$$6$$;$i$$24$$ < $start$$6$$ + $count$$6$$;$i$$24$$++) {
      this.$_removePrevNext$(this.$_getModels$()[$i$$24$$])
    }
    void 0 === $model$$10$$ ? this.$_reduceLRU$(this.$_getModels$().splice($start$$6$$, $count$$6$$)) : (this.$_reduceLRU$(this.$_getModels$().splice($start$$6$$, $count$$6$$, $model$$10$$)), this.$_makeModelHead$($model$$10$$));
    0 > this.$lruCount$ && (this.$lruCount$ = 0);
    this.$_realignModelIndices$($start$$6$$)
  };
  $oj$$1$$.$Collection$.prototype.$_getModel$ = function $$oj$$1$$$$Collection$$$$_getModel$$($index$$50$$) {
    return this.$_getModels$()[$index$$50$$]
  };
  $oj$$1$$.$Collection$.prototype.$_realignModelIndices$ = function $$oj$$1$$$$Collection$$$$_realignModelIndices$$($model$$11_start$$7$$) {
    for(var $i$$25$$ = $model$$11_start$$7$$;$i$$25$$ < this.$_getModelsLength$();$i$$25$$++) {
      ($model$$11_start$$7$$ = this.$_getModel$($i$$25$$)) && $model$$11_start$$7$$.$SetIndex$($i$$25$$)
    }
  };
  $oj$$1$$.$Collection$.prototype.$_removePrevNext$ = function $$oj$$1$$$$Collection$$$$_removePrevNext$$($model$$12_oldNext$$) {
    if($model$$12_oldNext$$) {
      var $oldPrev$$ = $model$$12_oldNext$$.$GetPrevious$();
      $model$$12_oldNext$$ = $model$$12_oldNext$$.$GetNext$();
      $oldPrev$$ ? $oldPrev$$.$SetNext$($model$$12_oldNext$$) : this.head = $model$$12_oldNext$$;
      $model$$12_oldNext$$ ? $model$$12_oldNext$$.$SetPrevious$($oldPrev$$) : this.$tail$ = $oldPrev$$
    }
  };
  $oj$$1$$.$Collection$.prototype.$_makeModelHead$ = function $$oj$$1$$$$Collection$$$$_makeModelHead$$($model$$13$$) {
    $model$$13$$.$SetNext$(this.head);
    this.head ? this.head.$SetPrevious$($model$$13$$) : this.$tail$ = $model$$13$$;
    $model$$13$$.$SetPrevious$(null);
    this.head = $model$$13$$
  };
  $oj$$1$$.$Collection$.prototype.$_setModel$ = function $$oj$$1$$$$Collection$$$$_setModel$$($index$$51$$, $model$$14$$) {
    var $oldModel$$ = this.$_getModels$()[$index$$51$$];
    this.$_removePrevNext$($oldModel$$);
    $oldModel$$ || this.$lruCount$++;
    this.$_getModels$()[$index$$51$$] = $model$$14$$;
    $model$$14$$.$SetIndex$($index$$51$$);
    this.$_makeModelHead$($model$$14$$)
  };
  $oj$$1$$.$Collection$.prototype.$_clearOutModels$ = function $$oj$$1$$$$Collection$$$$_clearOutModels$$($n$$1$$) {
    var $current$$ = this.$tail$, $index$$52$$, $model$$15$$, $i$$26$$ = 0;
    for(this.$tail$ = null;$current$$ && $i$$26$$ < $n$$1$$;) {
      $index$$52$$ = $current$$.index, ($model$$15$$ = this.$_getModels$()[$index$$52$$]) && $model$$15$$.$hasChanged$() ? (this.$tail$ || (this.$tail$ = $current$$), $current$$ = $current$$.$GetPrevious$()) : (this.$lruCount$--, -1 < $index$$52$$ && (this.$_getModels$()[$index$$52$$] = void 0), $current$$.$SetNext$(null), $current$$ = $current$$.$SetPrevious$(null), $i$$26$$++)
    }
    this.$tail$ || (this.$tail$ = $current$$);
    0 > this.$lruCount$ && (this.$lruCount$ = 0);
    0 === this.$lruCount$ && (this.$tail$ = this.head = null)
  };
  $oj$$1$$.$Collection$.prototype.$_resetLRU$ = function $$oj$$1$$$$Collection$$$$_resetLRU$$() {
    this.$lruCount$ = 0;
    this.$tail$ = this.head = null
  };
  $oj$$1$$.$Collection$.prototype.$_manageLRU$ = function $$oj$$1$$$$Collection$$$$_manageLRU$$($incoming$$) {
    if(this.$_isVirtual$()) {
      var $limit$$ = this.$_getModelLimit$();
      -1 < $limit$$ && this.$lruCount$ + $incoming$$ > $limit$$ && this.$_clearOutModels$(this.$lruCount$ + $incoming$$ - $limit$$)
    }
  };
  $oj$$1$$.$Collection$.prototype.clone = function $$oj$$1$$$$Collection$$$clone$() {
    var $c$$14$$ = new this.constructor, $i$$27$$, $model$$16$$;
    this.$_isVirtual$() && ($c$$14$$ = this.$_copyProperties$($c$$14$$), $c$$14$$.$_resetModelsToFullLength$());
    for($i$$27$$ = 0;$i$$27$$ < this.$_getLength$();$i$$27$$ += 1) {
      ($model$$16$$ = this.$_atInternal$($i$$27$$, null, !0, !1)) && $c$$14$$.$_addInternal$($model$$16$$.clone(), {at:$i$$27$$}, !0, !1)
    }
    return $c$$14$$
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.clone", {clone:$oj$$1$$.$Collection$.prototype.clone});
  $oj$$1$$.$Collection$.prototype.$_copyProperties$ = function $$oj$$1$$$$Collection$$$$_copyProperties$$($collection$$4$$) {
    var $props$$1$$ = ["totalResults", "hasMore", $oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$], $prop$$40$$, $i$$28$$;
    for($i$$28$$ = 0;$i$$28$$ < $props$$1$$.length;$i$$28$$++) {
      $prop$$40$$ = $props$$1$$[$i$$28$$], $collection$$4$$[$prop$$40$$] = this[$prop$$40$$]
    }
    return $collection$$4$$
  };
  $oj$$1$$.$Collection$.prototype.$_getLength$ = $JSCompiler_get$$("length");
  $oj$$1$$.$Collection$.prototype.$_setLength$ = function $$oj$$1$$$$Collection$$$$_setLength$$() {
    var $modelsLen$$ = this.$_getModelsLength$();
    this.length = $modelsLen$$;
    this.$_isVirtual$() || (this.totalResults = $modelsLen$$)
  };
  $oj$$1$$.$Collection$.prototype.$_newModel$ = function $$oj$$1$$$$Collection$$$$_newModel$$($m$$, $options$$39$$) {
    var $newModel$$ = null, $validationValue$$, $newModel$$ = $m$$ instanceof $oj$$1$$.$Model$ ? $m$$ : this.model ? $oj$$1$$.$Model$.$IsFunction$(this.model) ? new this.model($m$$, $options$$39$$) : new this.model.constructor($m$$, $options$$39$$) : new $oj$$1$$.$Model$($m$$, $options$$39$$);
    $options$$39$$ = $options$$39$$ || {};
    return $options$$39$$.validate && $newModel$$.validate && ($validationValue$$ = $newModel$$.validate($newModel$$.attributes)) ? ($options$$39$$.validationError = $validationValue$$, this.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.INVALID, this, $validationValue$$, $options$$39$$), null) : $newModel$$
  };
  $oj$$1$$.$Collection$.prototype.add = function $$oj$$1$$$$Collection$$$add$($m$$1$$, $options$$40$$) {
    this.$_manageLRU$(1);
    return this.$_addInternal$($m$$1$$, $options$$40$$, !1, ($options$$40$$ || {}).deferred)
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.add", {add:$oj$$1$$.$Collection$.prototype.add});
  $oj$$1$$.$Collection$.prototype.$_addInternal$ = function $$oj$$1$$$$Collection$$$$_addInternal$$($i$$29_m$$2$$, $options$$41$$, $fillIn$$, $currentStep_deferred$$2$$) {
    function $mergeAttrs$$($collection$$7$$, $modelToTryAndMerge$$, $modelFoundInCollection$$1$$, $newModel$$3$$, $deferred$$4$$) {
      var $existingModel$$2$$;
      $merge$$ && $modelFoundInCollection$$1$$ ? $needSort$$1$$ = $modelFoundInCollection$$1$$.$Merge$($modelToTryAndMerge$$, $collection$$7$$.comparator) : ($existingModel$$2$$ = $collection$$7$$.$_getLocal$($newModel$$3$$), void 0 === $existingModel$$2$$ && (void 0 === $at$$ ? ($collection$$7$$.$_pushModels$($newModel$$3$$), $index$$53$$ = $collection$$7$$.$_getModelsLength$() - 1, $collection$$7$$.$_getModel$($index$$53$$).$SetCid$()) : ($index$$53$$ = $at$$, $collection$$7$$.$_isVirtual$() && 
      $fillIn$$ ? $collection$$7$$.$_setModel$($index$$53$$, $newModel$$3$$) : $collection$$7$$.$_spliceModels$($index$$53$$, 0, $newModel$$3$$), $collection$$7$$.$_getModel$($index$$53$$).$SetCid$(), $at$$ += 1), void 0 === $newModel$$3$$.$GetCollection$() && $newModel$$3$$.$SetCollection$($collection$$7$$), $collection$$7$$.$_setLength$(), $collection$$7$$.$_listenToModel$($newModel$$3$$), $added$$ = !0));
      $fillIn$$ && ($options$$41$$ = $options$$41$$ || {}, $options$$41$$.fillIn = !0);
      $needSort$$1$$ && (void 0 === $existingModel$$2$$ && !$sort$$ && void 0 === $at$$ && 1 < $collection$$7$$.$_getLength$()) && (-1 < $index$$53$$ && ($cid$$1$$ = $collection$$7$$.$_getModel$($index$$53$$).cid), $collection$$7$$.sort($options$$41$$), -1 < $index$$53$$ && ($index$$53$$ = $collection$$7$$.indexOf($collection$$7$$.$getByCid$($cid$$1$$), $deferred$$4$$)));
      $added$$ && ($newModel$$3$$ ? $newModel$$3$$.$TriggerInternal$($silent$$10$$, $oj$$1$$.$Events$.$EventType$.ADD, $newModel$$3$$, $collection$$7$$, $options$$41$$) : $modelFoundInCollection$$1$$.$TriggerInternal$($silent$$10$$, $oj$$1$$.$Events$.$EventType$.ADD, $modelFoundInCollection$$1$$, $collection$$7$$, $options$$41$$))
    }
    function $doAdd$$($collection$$8$$, $model$$17$$, $deferred$$5$$) {
      var $newModel$$4$$ = $collection$$8$$.$_newModel$($model$$17$$, $options$$41$$), $modelToTryAndMerge$$1$$ = null, $modelFoundInCollection$$2$$ = null;
      if(null != $newModel$$4$$) {
        $index$$53$$ = -1;
        $newModel$$4$$.$SetupId$();
        $modelToTryAndMerge$$1$$ = $model$$17$$ instanceof $oj$$1$$.$Model$ ? $model$$17$$ : $newModel$$4$$;
        if($deferred$$5$$) {
          return $collection$$8$$.$_getInternal$($modelToTryAndMerge$$1$$, null, $deferred$$5$$, !0).done(function($modInfo$$) {
            $modelFoundInCollection$$2$$ = $modInfo$$.m;
            return $mergeAttrs$$($collection$$8$$, $modelToTryAndMerge$$1$$, $modelFoundInCollection$$2$$, $newModel$$4$$, $deferred$$5$$)
          })
        }
        $modelFoundInCollection$$2$$ = $fillIn$$ ? $collection$$8$$.$_getLocal$($modelToTryAndMerge$$1$$) : $collection$$8$$.get($modelToTryAndMerge$$1$$);
        $mergeAttrs$$($collection$$8$$, $modelToTryAndMerge$$1$$, $modelFoundInCollection$$2$$, $newModel$$4$$, $deferred$$5$$)
      }
    }
    $options$$41$$ = $options$$41$$ || {};
    var $modelArray$$ = [], $at$$ = $options$$41$$.at, $silent$$10$$ = $options$$41$$.silent, $index$$53$$, $cid$$1$$, $merge$$ = $options$$41$$.merge || !1, $sort$$ = $options$$41$$.sort, $needSort$$1$$ = !0, $added$$ = !1;
    $i$$29_m$$2$$ instanceof Array ? $modelArray$$ = $i$$29_m$$2$$ : $modelArray$$.push($i$$29_m$$2$$);
    if(!$fillIn$$ && (this.$_isVirtual$() || $currentStep_deferred$$2$$)) {
      var $self$$4$$ = this, $doTask$$ = function $$doTask$$$($index$$54$$) {
        var $defer$$ = $$$$1$$.Deferred();
        $doAdd$$($self$$4$$, $modelArray$$[$index$$54$$], !0).done(function() {
          $defer$$.resolve($index$$54$$)
        });
        return $defer$$.promise()
      };
      $currentStep_deferred$$2$$ = $doTask$$(0);
      var $nextTask$$ = function $$nextTask$$$($j$$1$$) {
        return $doTask$$($j$$1$$ + 1)
      };
      for($i$$29_m$$2$$ = 1;$i$$29_m$$2$$ < $modelArray$$.length;$i$$29_m$$2$$++) {
        $currentStep_deferred$$2$$ = $currentStep_deferred$$2$$.then($nextTask$$)
      }
      return $$$$1$$.when($currentStep_deferred$$2$$).promise()
    }
    for($i$$29_m$$2$$ = 0;$i$$29_m$$2$$ < $modelArray$$.length;$i$$29_m$$2$$++) {
      $doAdd$$(this, $modelArray$$[$i$$29_m$$2$$], !1)
    }
  };
  $oj$$1$$.$Collection$.prototype.$_hasComparator$ = function $$oj$$1$$$$Collection$$$$_hasComparator$$() {
    var $comparator$$1$$ = this.comparator;
    return void 0 !== $comparator$$1$$ && null !== $comparator$$1$$
  };
  $oj$$1$$.$Collection$.prototype.sort = function $$oj$$1$$$$Collection$$$sort$($options$$42_silent$$11_totalResults$$) {
    $options$$42_silent$$11_totalResults$$ = $options$$42_silent$$11_totalResults$$ || {};
    $options$$42_silent$$11_totalResults$$ = $options$$42_silent$$11_totalResults$$.silent;
    var $comparator$$2$$ = this.comparator, $self$$5$$;
    this.$_hasComparator$() && (this.$_isVirtual$() && this.$_hasMore$() ? ($options$$42_silent$$11_totalResults$$ = this.totalResults, void 0 !== $options$$42_silent$$11_totalResults$$ ? this.$_setModels$(Array($options$$42_silent$$11_totalResults$$)) : (this.$_setModels$([]), this.$_resetLRU$(), this.$_setLength$())) : ($self$$5$$ = this, this.$_getModels$().sort(function($a$$40$$, $b$$23$$) {
      return $oj$$1$$.$Collection$.$SortFunc$($a$$40$$, $b$$23$$, $comparator$$2$$, $self$$5$$, $self$$5$$)
    }), this.$_realignModelIndices$(0), this.$TriggerInternal$($options$$42_silent$$11_totalResults$$, $oj$$1$$.$Events$.$EventType$.SORT, this, null, null)))
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.sort", {sort:$oj$$1$$.$Collection$.prototype.sort});
  $oj$$1$$.$Collection$.$_getKey$ = function $$oj$$1$$$$Collection$$$_getKey$$($val$$15$$, $attr$$8$$) {
    return $val$$15$$ instanceof $oj$$1$$.$Model$ ? $val$$15$$.get($attr$$8$$) : $oj$$1$$.$Model$.$IsFunction$($val$$15$$[$attr$$8$$]) ? $val$$15$$[$attr$$8$$]() : $val$$15$$[$attr$$8$$]
  };
  $oj$$1$$.$Collection$.$SortFunc$ = function $$oj$$1$$$$Collection$$$SortFunc$$($a$$41$$, $b$$24$$, $attrs$$9_comparator$$3$$, $collection$$9$$, $self$$6$$) {
    var $attrs1_keyA$$, $keyB_retVal$$2$$, $i$$30$$;
    if($oj$$1$$.$Model$.$IsFunction$($attrs$$9_comparator$$3$$)) {
      if(1 === $attrs$$9_comparator$$3$$.length) {
        $attrs1_keyA$$ = $attrs$$9_comparator$$3$$.call($self$$6$$, $a$$41$$);
        $keyB_retVal$$2$$ = $attrs$$9_comparator$$3$$.call($self$$6$$, $b$$24$$);
        $attrs1_keyA$$ = $oj$$1$$.$StringUtils$.$isString$($attrs1_keyA$$) ? $attrs1_keyA$$.split(",") : [$attrs1_keyA$$];
        var $attrs2$$ = $oj$$1$$.$StringUtils$.$isString$($keyB_retVal$$2$$) ? $keyB_retVal$$2$$.split(",") : [$keyB_retVal$$2$$];
        for($i$$30$$ = 0;$i$$30$$ < $attrs1_keyA$$.length;$i$$30$$++) {
          if($keyB_retVal$$2$$ = $oj$$1$$.$Collection$.$_compareKeys$($attrs1_keyA$$[$i$$30$$], $attrs2$$[$i$$30$$], $collection$$9$$.sortDirection), 0 !== $keyB_retVal$$2$$) {
            return $keyB_retVal$$2$$
          }
        }
      }
      return $attrs$$9_comparator$$3$$.call($self$$6$$, $a$$41$$, $b$$24$$)
    }
    if($oj$$1$$.$StringUtils$.$isString$($attrs$$9_comparator$$3$$)) {
      for($attrs$$9_comparator$$3$$ = $attrs$$9_comparator$$3$$.split(","), $i$$30$$ = 0;$i$$30$$ < $attrs$$9_comparator$$3$$.length;$i$$30$$++) {
        if($attrs1_keyA$$ = $oj$$1$$.$Collection$.$_getKey$($a$$41$$, $attrs$$9_comparator$$3$$[$i$$30$$]), $keyB_retVal$$2$$ = $oj$$1$$.$Collection$.$_getKey$($b$$24$$, $attrs$$9_comparator$$3$$[$i$$30$$]), $keyB_retVal$$2$$ = $oj$$1$$.$Collection$.$_compareKeys$($attrs1_keyA$$, $keyB_retVal$$2$$, $collection$$9$$.sortDirection), 0 !== $keyB_retVal$$2$$) {
          return $keyB_retVal$$2$$
        }
      }
    }
    return 0
  };
  $oj$$1$$.$Collection$.prototype.$sortedIndex$ = function $$oj$$1$$$$Collection$$$$sortedIndex$$($model$$18$$) {
    var $comparator$$4$$ = this.comparator;
    if(!this.$_hasComparator$()) {
      return-1
    }
    this.$_throwErrIfVirtual$("sortedIndex");
    return $oj$$1$$.$Collection$.$_find$(this.$_getModels$(), $model$$18$$, $comparator$$4$$)
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.sortedIndex", {$sortedIndex$:$oj$$1$$.$Collection$.prototype.$sortedIndex$});
  $oj$$1$$.$Collection$.$_find$ = function $$oj$$1$$$$Collection$$$_find$$($modelArray$$1$$, $model$$19$$, $comparator$$5$$) {
    function $search$$($min$$, $max$$) {
      var $cid$$2_mid$$, $id$$3$$;
      if($min$$ > $max$$) {
        return-1
      }
      $cid$$2_mid$$ = $model$$19$$.$GetCid$();
      $id$$3$$ = $model$$19$$.$GetId$();
      if($modelArray$$1$$[$min$$].$Match$($id$$3$$, $cid$$2_mid$$)) {
        return $min$$
      }
      if($modelArray$$1$$[$max$$].$Match$($id$$3$$, $cid$$2_mid$$)) {
        return $max$$
      }
      $cid$$2_mid$$ = Math.floor(($max$$ + $min$$) / 2);
      return-1 === $comparator$$5$$($modelArray$$1$$[$cid$$2_mid$$], $model$$19$$) ? $search$$($min$$ + 1, $cid$$2_mid$$) : 1 === $comparator$$5$$($modelArray$$1$$[$cid$$2_mid$$], $model$$19$$) ? $search$$($cid$$2_mid$$, $max$$ - 1) : $cid$$2_mid$$
    }
    return $search$$(0, $modelArray$$1$$.length - 1)
  };
  $oj$$1$$.$Collection$.$_compareKeys$ = function $$oj$$1$$$$Collection$$$_compareKeys$$($keyA$$2$$, $keyB$$2$$, $sortDirection$$) {
    if(-1 === $sortDirection$$) {
      if($keyA$$2$$ < $keyB$$2$$) {
        return 1
      }
      if($keyB$$2$$ < $keyA$$2$$) {
        return-1
      }
    }else {
      if($keyA$$2$$ > $keyB$$2$$) {
        return 1
      }
      if($keyB$$2$$ > $keyA$$2$$) {
        return-1
      }
    }
    return 0
  };
  $oj$$1$$.$Collection$.prototype.unshift = function $$oj$$1$$$$Collection$$$unshift$($m$$3$$, $options$$43$$) {
    var $opt$$2$$ = {};
    $oj$$1$$.$CollectionUtils$.$copyInto$($opt$$2$$, $options$$43$$ || {});
    $opt$$2$$.at || ($opt$$2$$.at = 0);
    this.$_manageLRU$(1);
    return this.$_addInternal$($m$$3$$, $opt$$2$$, !1, $opt$$2$$.deferred)
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.unshift", {unshift:$oj$$1$$.$Collection$.prototype.unshift});
  $oj$$1$$.$Collection$.prototype.shift = function $$oj$$1$$$$Collection$$$shift$($options$$44$$) {
    var $deferred$$6$$ = this.$_getDeferred$($options$$44$$);
    if(this.$_isVirtual$() || $deferred$$6$$) {
      var $self$$8$$ = this;
      return this.at(0, $options$$44$$).then(function($model$$20$$) {
        return $self$$8$$.$_removeInternal$($model$$20$$, 0, $options$$44$$)
      })
    }
    return this.$_removeInternal$(this.at(0), 0, $options$$44$$)
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.shift", {shift:$oj$$1$$.$Collection$.prototype.shift});
  $oj$$1$$.$Collection$.prototype.$initial$ = function $$oj$$1$$$$Collection$$$$initial$$($n$$2$$) {
    void 0 === $n$$2$$ && ($n$$2$$ = 1);
    var $array$$9$$ = [], $i$$32$$;
    for($i$$32$$ = 0;$i$$32$$ < this.$_getLength$() - $n$$2$$;$i$$32$$ += 1) {
      $array$$9$$.push(this.at($i$$32$$))
    }
    return $array$$9$$
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.initial", {$initial$:$oj$$1$$.$Collection$.prototype.$initial$});
  $oj$$1$$.$Collection$.prototype.$_getDeferred$ = function $$oj$$1$$$$Collection$$$$_getDeferred$$($options$$45$$) {
    return($options$$45$$ || {}).deferred
  };
  $oj$$1$$.$Collection$.prototype.last = function $$oj$$1$$$$Collection$$$last$($n$$3$$, $options$$46$$) {
    var $deferred$$7_i$$33$$ = this.$_getDeferred$($options$$46$$);
    void 0 === $n$$3$$ && ($n$$3$$ = 1);
    if(1 === $n$$3$$) {
      var $len$$1$$ = this.$_getModelsLength$();
      0 === $len$$1$$ && ($len$$1$$ = $n$$3$$);
      return 0 < $len$$1$$ ? this.at($len$$1$$ - 1, $deferred$$7_i$$33$$) : null
    }
    var $array$$10_start$$8$$ = [], $len$$1$$ = this.$_getLength$();
    if($deferred$$7_i$$33$$ || this.$_isVirtual$()) {
      return $array$$10_start$$8$$ = $len$$1$$ - $n$$3$$, 0 > $array$$10_start$$8$$ && ($array$$10_start$$8$$ = 0), 0 === $len$$1$$ && ($len$$1$$ = $n$$3$$), this.$_iterativeAt$($array$$10_start$$8$$, $len$$1$$)
    }
    for($deferred$$7_i$$33$$ = $len$$1$$ - $n$$3$$;$deferred$$7_i$$33$$ < $len$$1$$;$deferred$$7_i$$33$$ += 1) {
      $array$$10_start$$8$$.push(this.at($deferred$$7_i$$33$$))
    }
    return $array$$10_start$$8$$
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.last", {last:$oj$$1$$.$Collection$.prototype.last});
  $oj$$1$$.$Collection$.prototype.$_iterativeAt$ = function $$oj$$1$$$$Collection$$$$_iterativeAt$$($start$$9$$, $end$$3$$) {
    function $nextTask$$1$$($j$$2$$) {
      return $doTask$$1$$($j$$2$$ + 1)
    }
    function $doTask$$1$$($index$$55$$) {
      var $defer$$1$$ = $$$$1$$.Deferred();
      $self$$9$$.$_deferredAt$($index$$55$$, null).done(function($model$$21$$) {
        $array$$11$$.push($model$$21$$);
        $defer$$1$$.resolve($index$$55$$)
      });
      return $defer$$1$$.promise()
    }
    var $array$$11$$ = [], $i$$34$$, $self$$9$$ = this, $currentStep$$1$$ = $doTask$$1$$($start$$9$$);
    for($i$$34$$ = $start$$9$$ + 1;$i$$34$$ < $end$$3$$;$i$$34$$++) {
      $currentStep$$1$$ = $currentStep$$1$$.then($nextTask$$1$$)
    }
    return $$$$1$$.when($currentStep$$1$$).then(function() {
      return $array$$11$$
    })
  };
  $oj$$1$$.$Collection$.prototype.$_getDefaultFetchSize$ = function $$oj$$1$$$$Collection$$$$_getDefaultFetchSize$$($n$$4$$) {
    return void 0 === $n$$4$$ || null === $n$$4$$ ? this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] : $n$$4$$
  };
  $oj$$1$$.$Collection$.prototype.$_calculateNextStart$ = function $$oj$$1$$$$Collection$$$$_calculateNextStart$$() {
    var $lastFetch$$ = this.lastFetchCount;
    if(void 0 === $lastFetch$$ || null === $lastFetch$$) {
      $lastFetch$$ = this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$]
    }
    return void 0 === this.offset || null === this.offset ? $lastFetch$$ : this.offset + $lastFetch$$
  };
  $oj$$1$$.$Collection$.prototype.next = function $$oj$$1$$$$Collection$$$next$($n$$5$$, $options$$47$$) {
    $options$$47$$ = $options$$47$$ || {};
    $options$$47$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] = this.$_getDefaultFetchSize$($n$$5$$);
    var $start$$10$$ = this.$_calculateNextStart$(), $length$$13$$ = this.$_getLength$();
    if(0 === $length$$13$$ && 0 < $options$$47$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$]) {
      $start$$10$$ = 0
    }else {
      if($start$$10$$ >= $length$$13$$) {
        return $options$$47$$.success && $options$$47$$.success.call($oj$$1$$.$Model$.$GetContext$($options$$47$$, this), this, null, $options$$47$$), null
      }
    }
    $options$$47$$.startIndex = $start$$10$$;
    return this.fetch($options$$47$$)
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.next", {next:$oj$$1$$.$Collection$.prototype.next});
  $oj$$1$$.$Collection$.prototype.$_calculatePrevStart$ = function $$oj$$1$$$$Collection$$$$_calculatePrevStart$$($n$$6$$) {
    return void 0 === this.offset || null === this.offset ? 0 : this.offset - $n$$6$$
  };
  $oj$$1$$.$Collection$.prototype.previous = function $$oj$$1$$$$Collection$$$previous$($n$$7$$, $options$$48$$) {
    $options$$48$$ = $options$$48$$ || {};
    if(0 === this.offset) {
      return $options$$48$$.success && this.lastFetchCount && $options$$48$$.success.call($oj$$1$$.$Model$.$GetContext$($options$$48$$, this), this, null, $options$$48$$), null
    }
    $options$$48$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] = this.$_getDefaultFetchSize$($n$$7$$);
    var $start$$11$$ = this.$_calculatePrevStart$($options$$48$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$]);
    0 > $start$$11$$ && ($options$$48$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] = this.offset, $start$$11$$ = 0);
    $options$$48$$.startIndex = $start$$11$$;
    return this.fetch($options$$48$$)
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.previous", {previous:$oj$$1$$.$Collection$.prototype.previous});
  $oj$$1$$.$Collection$.prototype.$setModelLimit$ = function $$oj$$1$$$$Collection$$$$setModelLimit$$($n$$8$$) {
    this.modelLimit = $n$$8$$;
    this.$_manageLRU$(0)
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.setModelLimit", {$setModelLimit$:$oj$$1$$.$Collection$.prototype.$setModelLimit$});
  $oj$$1$$.$Collection$.prototype.$_getModelLimit$ = $JSCompiler_get$$("modelLimit");
  $oj$$1$$.$Collection$.prototype.$setFetchSize$ = function $$oj$$1$$$$Collection$$$$setFetchSize$$($n$$9$$) {
    this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] = $n$$9$$
  };
  $oj$$1$$.$Collection$.prototype.$rest$ = function $$oj$$1$$$$Collection$$$$rest$$($n$$10$$, $options$$49$$) {
    var $deferred$$8_i$$35$$ = this.$_getDeferred$($options$$49$$);
    void 0 === $n$$10$$ && ($n$$10$$ = 1);
    var $array$$12$$ = [];
    if(this.$_isVirtual$() || $deferred$$8_i$$35$$) {
      return this.$_iterativeAt$($n$$10$$, this.$_getLength$())
    }
    for($deferred$$8_i$$35$$ = $n$$10$$;$deferred$$8_i$$35$$ < this.$_getLength$();$deferred$$8_i$$35$$ += 1) {
      $array$$12$$.push(this.at($deferred$$8_i$$35$$))
    }
    return $array$$12$$
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.rest", {$rest$:$oj$$1$$.$Collection$.prototype.$rest$});
  $oj$$1$$.$Collection$.prototype.remove = function $$oj$$1$$$$Collection$$$remove$($m$$4$$, $options$$50$$) {
    $options$$50$$ = $options$$50$$ || {};
    var $modArray$$ = [], $mod$$;
    $m$$4$$ instanceof Array ? $modArray$$ = $m$$4$$ : $modArray$$.push($m$$4$$);
    for($mod$$ = $modArray$$.length - 1;0 <= $mod$$;$mod$$ -= 1) {
      this.$_removeInternal$($modArray$$[$mod$$], -1, $options$$50$$)
    }
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.remove", {remove:$oj$$1$$.$Collection$.prototype.remove});
  $oj$$1$$.$Collection$.prototype.$_removeInternal$ = function $$oj$$1$$$$Collection$$$$_removeInternal$$($modInfo$$1_model$$22$$, $index$$56$$, $options$$51$$) {
    $options$$51$$ = $options$$51$$ || {};
    $modInfo$$1_model$$22$$ = -1 == $index$$56$$ ? this.$_getInternal$($modInfo$$1_model$$22$$) : $oj$$1$$.$Collection$.$_getModinfo$($index$$56$$, $modInfo$$1_model$$22$$);
    var $silent$$12$$ = $options$$51$$.silent;
    $index$$56$$ = $modInfo$$1_model$$22$$.index;
    if(-1 < $index$$56$$) {
      var $mod$$1$$ = $modInfo$$1_model$$22$$.m;
      void 0 !== $mod$$1$$ && $mod$$1$$.$GetCollection$() === this && $mod$$1$$.$SetCollection$(null);
      this.$_spliceModels$($index$$56$$, 1);
      this.$_setLength$();
      var $opt$$4$$ = {};
      $oj$$1$$.$CollectionUtils$.$copyInto$($opt$$4$$, $options$$51$$);
      $opt$$4$$.index = $index$$56$$;
      void 0 !== $mod$$1$$ && $mod$$1$$.$TriggerInternal$($silent$$12$$, $oj$$1$$.$Events$.$EventType$.REMOVE, $mod$$1$$, this, $opt$$4$$);
      this.$_unlistenToModel$($mod$$1$$)
    }
    return $modInfo$$1_model$$22$$.m
  };
  $oj$$1$$.$Collection$.prototype.$_unlistenToModel$ = function $$oj$$1$$$$Collection$$$$_unlistenToModel$$($m$$5$$) {
    void 0 !== $m$$5$$ && $m$$5$$.off(null, null, this)
  };
  $oj$$1$$.$Collection$.prototype.$_listenToModel$ = function $$oj$$1$$$$Collection$$$$_listenToModel$$($m$$6$$) {
    $m$$6$$.$OnInternal$($oj$$1$$.$Events$.$EventType$.ALL, this.$_modelEvent$, this, !1, !0)
  };
  $oj$$1$$.$Collection$.prototype.$_modelEvent$ = function $$oj$$1$$$$Collection$$$$_modelEvent$$($event$$15$$, $model$$23$$, $collection$$10$$, $options$$52$$) {
    $event$$15$$ === $oj$$1$$.$Events$.$EventType$.DESTROY && this.remove($model$$23$$);
    if(void 0 === $collection$$10$$ || $collection$$10$$ === this) {
      Array.prototype.slice.call(arguments), this.$TriggerInternal$($options$$52$$ && $options$$52$$.silent, $event$$15$$, $model$$23$$, $collection$$10$$, $options$$52$$)
    }
  };
  $oj$$1$$.$Collection$.prototype.reset = function $$oj$$1$$$$Collection$$$reset$($data$$32$$, $options$$53$$) {
    var $i$$36$$;
    $options$$53$$ = $options$$53$$ || {};
    $options$$53$$.previousModels = this.$_getModels$();
    if(void 0 === $data$$32$$ || null == $data$$32$$ || $data$$32$$ instanceof Array && 0 == $data$$32$$.length) {
      for($i$$36$$ = 0;$i$$36$$ < this.$_getModelsLength$();$i$$36$$ += 1) {
        this.$_getModel$($i$$36$$) && this.$_getModel$($i$$36$$).$SetCollection$(null)
      }
      this.$_setModels$([]);
      this.$_resetLRU$()
    }else {
      if(this.$_setModels$([]), this.$_resetLRU$(), $options$$53$$.parse && ($data$$32$$ = this.parse($data$$32$$)), $data$$32$$ instanceof Array) {
        for(this.$_manageLRU$($data$$32$$.length), $i$$36$$ = 0;$i$$36$$ < $data$$32$$.length;$i$$36$$ += 1) {
          this.$_addInternal$($data$$32$$[$i$$36$$], $options$$53$$, !0, !1)
        }
      }else {
        this.$_manageLRU$(1), this.$_addInternal$($data$$32$$, $options$$53$$, !0, !1)
      }
    }
    this.$_setLength$();
    this.$TriggerInternal$(void 0 !== $options$$53$$.silent && $options$$53$$.silent, $oj$$1$$.$Events$.$EventType$.RESET, this, $options$$53$$, null)
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.reset", {reset:$oj$$1$$.$Collection$.prototype.reset});
  $oj$$1$$.$Collection$.prototype.at = function $$oj$$1$$$$Collection$$$at$($index$$57$$, $options$$54$$) {
    return this.$_atInternal$($index$$57$$, $options$$54$$, !1, this.$_getDeferred$($options$$54$$))
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.at", {at:$oj$$1$$.$Collection$.prototype.at});
  $oj$$1$$.$Collection$.prototype.$_atInternal$ = function $$oj$$1$$$$Collection$$$$_atInternal$$($index$$58$$, $options$$55$$, $local$$, $deferred$$10$$) {
    return 0 > $index$$58$$ || this.$_overUpperLimit$($index$$58$$) ? null : $local$$ || !this.$_isVirtual$() && !$deferred$$10$$ ? this.$_getModel$($index$$58$$) : this.$_deferredAt$($index$$58$$, $options$$55$$).promise()
  };
  $oj$$1$$.$Collection$.prototype.$_deferredAt$ = function $$oj$$1$$$$Collection$$$$_deferredAt$$($index$$59$$, $options$$56$$) {
    function $resp$$3$$() {
      $dfd$$.resolve($self$$12$$.$_getModel$($index$$59$$))
    }
    var $self$$12$$ = this, $dfd$$ = $$$$1$$.Deferred(), $model$$24_opts$$5$$ = this.$_getModel$($index$$59$$);
    return void 0 === $model$$24_opts$$5$$ ? ($model$$24_opts$$5$$ = {}, $oj$$1$$.$CollectionUtils$.$copyInto$($model$$24_opts$$5$$, $options$$56$$ || {}), $model$$24_opts$$5$$.context = this, $model$$24_opts$$5$$.startIndex = $index$$59$$, this.$_fetchInternal$($model$$24_opts$$5$$, !1).then($resp$$3$$), $dfd$$) : $$$$1$$.Deferred().resolve($model$$24_opts$$5$$)
  };
  $oj$$1$$.$Collection$.prototype.$getByCid$ = function $$oj$$1$$$$Collection$$$$getByCid$$($clientId$$) {
    var $i$$37$$, $model$$25$$;
    for($i$$37$$ = 0;$i$$37$$ < this.$_getModelsLength$();$i$$37$$ += 1) {
      if($model$$25$$ = this.$_getModel$($i$$37$$), void 0 !== $model$$25$$ && $clientId$$ === $model$$25$$.cid) {
        return $model$$25$$
      }
    }
    if(this.$_isVirtual$()) {
      throw Error("Not found locally and not supported by server for virtual collections");
    }
    return null
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.getByCid", {$getByCid$:$oj$$1$$.$Collection$.prototype.$getByCid$});
  $oj$$1$$.$Collection$.prototype.get = function $$oj$$1$$$$Collection$$$get$($id$$4$$, $options$$57$$) {
    var $internalGet$$ = this.$_getInternal$($id$$4$$, $options$$57$$, this.$_getDeferred$($options$$57$$));
    if($internalGet$$) {
      if($$$$1$$.isFunction($internalGet$$.promise)) {
        return $internalGet$$.then(function($modInfo$$2$$) {
          return $modInfo$$2$$.m
        })
      }
      if($internalGet$$.hasOwnProperty("m")) {
        return $internalGet$$.m
      }
    }
    return null
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.get", {get:$oj$$1$$.$Collection$.prototype.get});
  $oj$$1$$.$Collection$.prototype.$_getLocal$ = function $$oj$$1$$$$Collection$$$$_getLocal$$($id$$5_internalGet$$1$$) {
    return($id$$5_internalGet$$1$$ = this.$_getLocalInternal$($id$$5_internalGet$$1$$)) ? $id$$5_internalGet$$1$$.m : null
  };
  $oj$$1$$.$Collection$.prototype.$_getLocalInternal$ = function $$oj$$1$$$$Collection$$$$_getLocalInternal$$($id$$6$$) {
    var $i$$38$$, $cid$$3$$ = $id$$6$$, $len$$2$$ = this.$_getModelsLength$(), $model$$26$$;
    $id$$6$$ instanceof $oj$$1$$.$Model$ ? ($cid$$3$$ = $id$$6$$.$GetCid$(), $id$$6$$ = $id$$6$$.$GetId$()) : void 0 !== $id$$6$$ && (null != $id$$6$$ && void 0 !== $id$$6$$.id) && ($id$$6$$ = $id$$6$$.id);
    for($i$$38$$ = 0;$i$$38$$ < $len$$2$$;$i$$38$$ += 1) {
      if($model$$26$$ = this.$_getModel$($i$$38$$), void 0 !== $model$$26$$ && $model$$26$$.$Match$($id$$6$$, $cid$$3$$)) {
        return $oj$$1$$.$Collection$.$_getModinfo$($i$$38$$, $model$$26$$)
      }
    }
    return $oj$$1$$.$Collection$.$_getModinfo$(-1, void 0)
  };
  $oj$$1$$.$Collection$.prototype.$_getInternal$ = function $$oj$$1$$$$Collection$$$$_getInternal$$($id$$7_retObj$$5_undefinedModInfo$$, $options$$58$$, $deferred$$12_opts$$6$$, $fillIn$$1$$) {
    var $i$$39$$, $cid$$4$$ = $id$$7_retObj$$5_undefinedModInfo$$;
    void 0 === $fillIn$$1$$ && ($fillIn$$1$$ = !1);
    $id$$7_retObj$$5_undefinedModInfo$$ instanceof $oj$$1$$.$Model$ ? ($cid$$4$$ = $id$$7_retObj$$5_undefinedModInfo$$.$GetCid$(), $id$$7_retObj$$5_undefinedModInfo$$ = $id$$7_retObj$$5_undefinedModInfo$$.$GetId$()) : void 0 !== $id$$7_retObj$$5_undefinedModInfo$$ && (null != $id$$7_retObj$$5_undefinedModInfo$$ && void 0 !== $id$$7_retObj$$5_undefinedModInfo$$.id) && ($id$$7_retObj$$5_undefinedModInfo$$ = $id$$7_retObj$$5_undefinedModInfo$$.id);
    var $model$$27$$;
    for($i$$39$$ = 0;$i$$39$$ < this.$_getModelsLength$();$i$$39$$ += 1) {
      if($model$$27$$ = this.$_getModel$($i$$39$$), void 0 !== $model$$27$$ && $model$$27$$.$Match$($id$$7_retObj$$5_undefinedModInfo$$, $cid$$4$$)) {
        return $id$$7_retObj$$5_undefinedModInfo$$ = $oj$$1$$.$Collection$.$_getModinfo$($i$$39$$, $model$$27$$), $deferred$$12_opts$$6$$ ? $$$$1$$.Deferred().resolve($id$$7_retObj$$5_undefinedModInfo$$) : $id$$7_retObj$$5_undefinedModInfo$$
      }
    }
    if(this.$_isVirtual$()) {
      if(void 0 === $id$$7_retObj$$5_undefinedModInfo$$ && void 0 !== $cid$$4$$) {
        throw Error("cid not supported on virtual get by ID: only id supported");
      }
      var $dfd$$1$$ = $$$$1$$.Deferred(), $self$$13$$ = this;
      $deferred$$12_opts$$6$$ = {};
      $oj$$1$$.$CollectionUtils$.$copyInto$($deferred$$12_opts$$6$$, $options$$58$$ || {});
      $deferred$$12_opts$$6$$.context = this;
      $deferred$$12_opts$$6$$.startID = $id$$7_retObj$$5_undefinedModInfo$$;
      this.$_fetchInternal$($deferred$$12_opts$$6$$, $fillIn$$1$$).then(function($index$$60_resp$$5$$) {
        null != $index$$60_resp$$5$$ ? ($index$$60_resp$$5$$ = $self$$13$$.$_getOffset$(), $dfd$$1$$.resolve($oj$$1$$.$Collection$.$_getModinfo$($index$$60_resp$$5$$, $self$$13$$.$_getModel$($index$$60_resp$$5$$)))) : $dfd$$1$$.resolve($oj$$1$$.$Collection$.$_getModinfo$(-1, void 0))
      });
      return $dfd$$1$$
    }
    $id$$7_retObj$$5_undefinedModInfo$$ = $oj$$1$$.$Collection$.$_getModinfo$(-1, void 0);
    return $deferred$$12_opts$$6$$ ? $$$$1$$.Deferred().resolve($id$$7_retObj$$5_undefinedModInfo$$) : $id$$7_retObj$$5_undefinedModInfo$$
  };
  $oj$$1$$.$Collection$.$_getModinfo$ = function $$oj$$1$$$$Collection$$$_getModinfo$$($index$$61$$, $model$$28$$) {
    return{index:$index$$61$$, m:$model$$28$$}
  };
  $oj$$1$$.$Collection$.prototype.parse = function $$oj$$1$$$$Collection$$$parse$($response$$2$$) {
    var $prop$$41$$;
    if($response$$2$$ instanceof Array || !$response$$2$$) {
      return $response$$2$$
    }
    for($prop$$41$$ in $response$$2$$) {
      if($response$$2$$.hasOwnProperty($prop$$41$$) && $response$$2$$[$prop$$41$$] instanceof Array) {
        return $response$$2$$[$prop$$41$$]
      }
    }
    return $response$$2$$
  };
  $oj$$1$$.$Collection$.prototype.$setRangeLocal$ = function $$oj$$1$$$$Collection$$$$setRangeLocal$$($start$$12$$, $count$$7$$) {
    var $dfd$$2$$ = $$$$1$$.Deferred();
    if(this.$isRangeLocal$($start$$12$$, $count$$7$$)) {
      return $$$$1$$.Deferred().resolve()
    }
    var $limit$$1$$ = this.$_getMaxLength$($start$$12$$, $count$$7$$);
    !this.$_hasTotalResults$() && $limit$$1$$ < $start$$12$$ + $count$$7$$ && ($limit$$1$$ = $start$$12$$ + $count$$7$$);
    this.$_fetchInternal$(this.$_isVirtual$() ? {context:this, startIndex:$start$$12$$, fetchSize:$limit$$1$$ - $start$$12$$} : {context:this}, !1).then(function() {
      $dfd$$2$$.resolve()
    });
    return $dfd$$2$$
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.setRangeLocal", {$setRangeLocal$:$oj$$1$$.$Collection$.prototype.$setRangeLocal$});
  $oj$$1$$.$Collection$.prototype.$_getMaxLength$ = function $$oj$$1$$$$Collection$$$$_getMaxLength$$($start$$13$$, $count$$8$$) {
    var $len$$3$$ = this.$_getModelsLength$();
    return $start$$13$$ + $count$$8$$ > $len$$3$$ ? $len$$3$$ : $start$$13$$ + $count$$8$$
  };
  $oj$$1$$.$Collection$.prototype.$isRangeLocal$ = function $$oj$$1$$$$Collection$$$$isRangeLocal$$($start$$14$$, $count$$9$$) {
    if(!this.$_isVirtual$()) {
      return 0 < this.$_getModelsLength$()
    }
    var $limit$$2$$ = this.$_getMaxLength$($start$$14$$, $count$$9$$);
    if(!this.$_hasTotalResults$() && $limit$$2$$ < $start$$14$$ + $count$$9$$) {
      return!1
    }
    for(var $i$$40$$ = $start$$14$$;$i$$40$$ < $limit$$2$$;$i$$40$$++) {
      if(void 0 === this.$_getModel$($i$$40$$)) {
        return!1
      }
    }
    return!0
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.isRangeLocal", {$isRangeLocal$:$oj$$1$$.$Collection$.prototype.$isRangeLocal$});
  $oj$$1$$.$Collection$.prototype.fetch = function $$oj$$1$$$$Collection$$$fetch$($options$$59$$) {
    return this.$_fetchInternal$($options$$59$$, !1)
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.fetch", {fetch:$oj$$1$$.$Collection$.prototype.fetch});
  $oj$$1$$.$Collection$.prototype.$_fetchInternal$ = function $$oj$$1$$$$Collection$$$$_fetchInternal$$($options$$60$$, $fillIn$$2$$) {
    var $opt$$5$$ = $options$$60$$ || {}, $success$$11$$ = $opt$$5$$.success, $parsedModel$$, $self$$15$$;
    void 0 === $opt$$5$$.parse && ($opt$$5$$.parse = !0);
    $self$$15$$ = this;
    $opt$$5$$.success = function $$opt$$5$$$success$($response$$3$$) {
      var $data$$33_i$$41$$, $modelInstance$$;
      $self$$15$$.$_setPagingReturnValues$($response$$3$$, $options$$60$$);
      $data$$33_i$$41$$ = $self$$15$$.parse($response$$3$$, $options$$60$$);
      var $dataList$$ = null;
      if($opt$$5$$.add || $self$$15$$.model) {
        if($self$$15$$.$_isVirtual$() ? $fillIn$$2$$ || $self$$15$$.$_resetModelsToFullLength$() : $opt$$5$$.add || $self$$15$$.reset(), $modelInstance$$ = $oj$$1$$.$Collection$.$_createParsingModel$($self$$15$$), $data$$33_i$$41$$) {
          var $dataList$$ = $data$$33_i$$41$$ instanceof Array ? $data$$33_i$$41$$ : [$data$$33_i$$41$$], $addOpt$$ = {}, $offset$$14$$ = $self$$15$$.$_getOffset$();
          $self$$15$$.$_manageLRU$($dataList$$.length);
          for($data$$33_i$$41$$ = 0;$data$$33_i$$41$$ < $dataList$$.length;$data$$33_i$$41$$ += 1) {
            $parsedModel$$ = $modelInstance$$ && $opt$$5$$.parse ? $modelInstance$$.parse($dataList$$[$data$$33_i$$41$$]) : $dataList$$[$data$$33_i$$41$$], $self$$15$$.$_isVirtual$() && ($addOpt$$ = {at:$offset$$14$$ + $data$$33_i$$41$$}), $addOpt$$.silent = !0, $self$$15$$.$_addInternal$($parsedModel$$, $addOpt$$, !0, !1)
          }
        }
      }else {
        $dataList$$ = $data$$33_i$$41$$ instanceof Array ? $data$$33_i$$41$$ : [$data$$33_i$$41$$], $fillIn$$2$$ || $self$$15$$.reset($data$$33_i$$41$$)
      }
      $self$$15$$.$_isVirtual$() && $dataList$$ && ($self$$15$$.lastFetchCount = $dataList$$.length);
      $self$$15$$.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.SYNC, $self$$15$$, $response$$3$$, $opt$$5$$);
      $success$$11$$ && $success$$11$$.call($oj$$1$$.$Model$.$GetContext$($options$$60$$, $self$$15$$), $self$$15$$, $response$$3$$, $opt$$5$$)
    };
    return this.$_fetchCall$($opt$$5$$)
  };
  $oj$$1$$.$Collection$.prototype.$_fetchOnly$ = function $$oj$$1$$$$Collection$$$$_fetchOnly$$($options$$61$$) {
    var $opt$$7$$ = $options$$61$$ || {}, $success$$12$$ = $opt$$7$$.success, $parsedModel$$1$$, $self$$16$$;
    void 0 === $opt$$7$$.parse && ($opt$$7$$.parse = !0);
    $self$$16$$ = this;
    $opt$$7$$.success = function $$opt$$7$$$success$($response$$4$$) {
      var $data$$34_i$$42$$, $modelInstance$$1$$;
      $data$$34_i$$42$$ = $self$$16$$.parse($response$$4$$, $options$$61$$);
      var $dataList$$1$$ = null, $fetchedModels$$ = [];
      if($opt$$7$$.add || $self$$16$$.model) {
        if($modelInstance$$1$$ = $oj$$1$$.$Collection$.$_createParsingModel$($self$$16$$), $data$$34_i$$42$$) {
          for($dataList$$1$$ = $data$$34_i$$42$$ instanceof Array ? $data$$34_i$$42$$ : [$data$$34_i$$42$$], $data$$34_i$$42$$ = 0;$data$$34_i$$42$$ < $dataList$$1$$.length;$data$$34_i$$42$$ += 1) {
            $parsedModel$$1$$ = $modelInstance$$1$$ && $opt$$7$$.parse ? $modelInstance$$1$$.parse($dataList$$1$$[$data$$34_i$$42$$]) : $dataList$$1$$[$data$$34_i$$42$$], $fetchedModels$$.push($self$$16$$.$_newModel$($parsedModel$$1$$))
          }
        }
      }
      $self$$16$$.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.SYNC, $self$$16$$, $response$$4$$, $opt$$7$$);
      $success$$12$$ && $success$$12$$.call($oj$$1$$.$Model$.$GetContext$($options$$61$$, $self$$16$$), $self$$16$$, $fetchedModels$$, $opt$$7$$)
    };
    this.$_fetchCall$($opt$$7$$)
  };
  $oj$$1$$.$Collection$.$_createParsingModel$ = function $$oj$$1$$$$Collection$$$_createParsingModel$$($collection$$12$$) {
    if($collection$$12$$.model) {
      return $oj$$1$$.$Model$.$IsFunction$($collection$$12$$.model) ? new $collection$$12$$.model : new $collection$$12$$.model.constructor
    }
  };
  $oj$$1$$.$Collection$.prototype.$_fetchCall$ = function $$oj$$1$$$$Collection$$$$_fetchCall$$($opt$$8$$) {
    try {
      return $oj$$1$$.$Model$.$_internalSync$("read", this, $opt$$8$$)
    }catch($e$$21$$) {
      throw this.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.ERROR, this, null, $opt$$8$$), $e$$21$$;
    }
  };
  $oj$$1$$.$Collection$.prototype.$_resetModelsToFullLength$ = function $$oj$$1$$$$Collection$$$$_resetModelsToFullLength$$() {
    var $totalResults$$1$$ = this.totalResults;
    void 0 !== $totalResults$$1$$ && this.$_getModelsLength$() !== $totalResults$$1$$ && (this.$_setModels$(Array($totalResults$$1$$)), this.$_resetLRU$())
  };
  $oj$$1$$.$Collection$.prototype.$_getFetchSize$ = function $$oj$$1$$$$Collection$$$$_getFetchSize$$($options$$62$$) {
    $options$$62$$ = $options$$62$$ || {};
    return $options$$62$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] || this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$]
  };
  $oj$$1$$.$Collection$.prototype.$_hasMore$ = function $$oj$$1$$$$Collection$$$$_hasMore$$() {
    return void 0 !== this.hasMore && this.hasMore
  };
  $oj$$1$$.$Collection$.prototype.$_isVirtual$ = function $$oj$$1$$$$Collection$$$$_isVirtual$$() {
    return-1 < this.$_getFetchSize$(null)
  };
  $oj$$1$$.$Collection$.prototype.$_getReturnProperty$ = function $$oj$$1$$$$Collection$$$$_getReturnProperty$$($customObj_value$$60$$, $response$$5$$, $property$$9$$, $optionValue$$, $defaultValue$$) {
    $customObj_value$$60$$ = parseInt($oj$$1$$.$Collection$.$_getProp$($customObj_value$$60$$, $response$$5$$, $property$$9$$), 10);
    return void 0 === $customObj_value$$60$$ || null === $customObj_value$$60$$ || isNaN($customObj_value$$60$$) ? $optionValue$$ ? $optionValue$$ : $defaultValue$$ : $customObj_value$$60$$
  };
  $oj$$1$$.$Collection$.prototype.$_setPagingReturnValues$ = function $$oj$$1$$$$Collection$$$$_setPagingReturnValues$$($response$$6$$, $options$$63$$) {
    var $customObj$$1$$ = {};
    this.customPagingOptions && (($customObj$$1$$ = this.customPagingOptions.call(this, $response$$6$$)) || ($customObj$$1$$ = {}));
    $options$$63$$ = $options$$63$$ || {};
    this.lastFetchSize = this.$_getReturnProperty$($customObj$$1$$, $response$$6$$, "limit", $options$$63$$.fetchSize, this.fetchSize);
    this.offset = this.$_getReturnProperty$($customObj$$1$$, $response$$6$$, "offset", $options$$63$$.startIndex, 0);
    this.lastFetchCount = this.$_getReturnProperty$($customObj$$1$$, $response$$6$$, "count", this.lastFetchCount, this.lastFetchCount);
    this.totalResults = this.$_getReturnProperty$($customObj$$1$$, $response$$6$$, "totalResults", this.totalResults, this.totalResults);
    this.hasMore = this.$_getHasMore$($oj$$1$$.$Collection$.$_getProp$($customObj$$1$$, $response$$6$$, "hasMore"), this.offset, this.lastFetchSize, this.totalResults);
    !this.$_isVirtual$() && this.lastFetchSize && this.$setFetchSize$(this.lastFetchSize)
  };
  $oj$$1$$.$Collection$.prototype.$_getHasMore$ = function $$oj$$1$$$$Collection$$$$_getHasMore$$($hasMore$$, $offset$$15$$, $lastFetchSize$$, $totalResults$$2$$) {
    return $hasMore$$ && void 0 !== $hasMore$$ ? $hasMore$$ : $offset$$15$$ + $lastFetchSize$$ > $totalResults$$2$$ ? !1 : !0
  };
  $oj$$1$$.$Collection$.$_getProp$ = function $$oj$$1$$$$Collection$$$_getProp$$($custom$$, $response$$7$$, $prop$$42$$) {
    return $custom$$[$prop$$42$$] ? $custom$$[$prop$$42$$] : $response$$7$$ ? $response$$7$$[$prop$$42$$] : void 0
  };
  $oj$$1$$.$Collection$.prototype.$_getOffset$ = function $$oj$$1$$$$Collection$$$$_getOffset$$() {
    return void 0 !== this.offset ? this.offset : 0
  };
  $oj$$1$$.$Collection$.prototype.create = function $$oj$$1$$$$Collection$$$create$($attributes$$7$$, $options$$64$$) {
    function $doSave$$($collection$$13$$, $newModel$$6$$, $validate$$2$$, $opt$$9$$) {
      return!1 === $newModel$$6$$.save($attributes$$7$$ instanceof $oj$$1$$.$Model$ ? null : $attributes$$7$$, $opt$$9$$) && ($options$$64$$.validationError = $newModel$$6$$.validationError, $collection$$13$$.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.INVALID, $collection$$13$$, $newModel$$6$$.validationError, $opt$$9$$), $validate$$2$$) ? ($collection$$13$$.$_unlistenToModel$($newModel$$6$$), $collection$$13$$.remove($newModel$$6$$), !1) : $newModel$$6$$
    }
    var $deferred$$13$$ = this.$_getDeferred$($options$$64$$);
    $options$$64$$ = $options$$64$$ || {};
    var $newModel$$5$$ = this.$_newModel$($attributes$$7$$, $options$$64$$), $callback$$74$$ = $options$$64$$.success, $context$$15$$ = $options$$64$$.context, $validate$$1$$ = $options$$64$$.validate;
    $options$$64$$.context = this;
    $options$$64$$.success = function $$options$$64$$$success$($model$$29$$, $resp$$7$$, $options$$65$$) {
      $callback$$74$$ && $callback$$74$$.call(null != $context$$15$$ ? $context$$15$$ : this, $model$$29$$, $resp$$7$$, $options$$65$$)
    };
    if(null == $newModel$$5$$) {
      return!1
    }
    $options$$64$$.forceNew = null != $newModel$$5$$.$GetId$();
    $newModel$$5$$.$SetCollection$(this);
    var $self$$17$$ = this;
    if($deferred$$13$$ || this.$_isVirtual$()) {
      var $defer$$2$$ = $$$$1$$.Deferred();
      this.add($newModel$$5$$, {merge:!0, deferred:!0}).done(function() {
        $options$$64$$.success = function $$options$$64$$$success$($model$$31$$, $resp$$8$$, $options$$66$$) {
          $callback$$74$$ && $callback$$74$$.call(null != $context$$15$$ ? $context$$15$$ : this, $model$$31$$, $resp$$8$$, $options$$66$$);
          $defer$$2$$.resolve($model$$31$$)
        };
        var $model$$30$$ = $doSave$$($self$$17$$, $newModel$$5$$, $validate$$1$$, $options$$64$$);
        $model$$30$$ || $defer$$2$$.resolve($model$$30$$)
      });
      return $defer$$2$$.promise()
    }
    this.add($newModel$$5$$, {merge:!0});
    return $doSave$$(this, $newModel$$5$$, $validate$$1$$, $options$$64$$)
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.create", {create:$oj$$1$$.$Collection$.prototype.create});
  $oj$$1$$.$Collection$.prototype.$pluck$ = function $$oj$$1$$$$Collection$$$$pluck$$($attr$$9$$) {
    var $arr$$17$$ = [], $i$$43$$;
    this.$_throwErrIfVirtual$("pluck");
    for($i$$43$$ = 0;$i$$43$$ < this.$_getLength$();$i$$43$$ += 1) {
      $arr$$17$$.push(this.at($i$$43$$).get($attr$$9$$))
    }
    return $arr$$17$$
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.pluck", {$pluck$:$oj$$1$$.$Collection$.prototype.$pluck$});
  $oj$$1$$.$Collection$.prototype.$where$ = function $$oj$$1$$$$Collection$$$$where$$($attrs$$10$$, $options$$67$$) {
    var $deferred$$14$$ = this.$_getDeferred$($options$$67$$);
    if(this.$_isVirtual$()) {
      var $defer$$3$$ = $$$$1$$.Deferred();
      this.$_fetchOnly$({query:$attrs$$10$$, success:function($collection$$14$$, $fetchedModels$$1$$) {
        $defer$$3$$.resolve($fetchedModels$$1$$)
      }});
      return $defer$$3$$.promise()
    }
    var $arr$$18$$ = [], $i$$44$$, $m$$7$$;
    for($i$$44$$ = 0;$i$$44$$ < this.$_getLength$();$i$$44$$ += 1) {
      $m$$7$$ = this.at($i$$44$$), $m$$7$$.$Contains$($attrs$$10$$) && $arr$$18$$.push($m$$7$$)
    }
    return $deferred$$14$$ ? $$$$1$$.Deferred().resolve($arr$$18$$) : $arr$$18$$
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.where", {$where$:$oj$$1$$.$Collection$.prototype.$where$});
  $oj$$1$$.$Collection$.prototype.$_throwErrIfVirtual$ = function $$oj$$1$$$$Collection$$$$_throwErrIfVirtual$$($func$$6$$) {
    if(this.$_isVirtual$()) {
      throw Error($func$$6$$ + " not valid on a virtual Collection");
    }
  };
  $oj$$1$$.$Collection$.prototype.map = function $$oj$$1$$$$Collection$$$map$($iterator$$, $context$$16$$) {
    var $retArr$$ = [], $value$$61$$, $i$$45$$;
    this.$_throwErrIfVirtual$("map");
    for($i$$45$$ = 0;$i$$45$$ < this.$_getModelsLength$();$i$$45$$ += 1) {
      $value$$61$$ = $iterator$$.call($context$$16$$ || this, this.$_getModel$($i$$45$$)), $retArr$$.push($value$$61$$)
    }
    return $retArr$$
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.map", {map:$oj$$1$$.$Collection$.prototype.map});
  $oj$$1$$.$Collection$.prototype.each = function $$oj$$1$$$$Collection$$$each$($iterator$$1$$, $context$$17$$) {
    this.$_throwErrIfVirtual$("each");
    this.$_getModels$().forEach($iterator$$1$$, $context$$17$$)
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.each", {each:$oj$$1$$.$Collection$.prototype.each});
  $oj$$1$$.$Collection$.prototype.size = function $$oj$$1$$$$Collection$$$size$() {
    return this.$_getLength$()
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.size", {size:$oj$$1$$.$Collection$.prototype.size});
  $oj$$1$$.$Collection$.prototype.$sortBy$ = function $$oj$$1$$$$Collection$$$$sortBy$$($iterator$$2$$, $context$$18$$) {
    var $i$$46$$, $retArr$$1$$ = [], $self$$18$$;
    this.$_throwErrIfVirtual$("sortBy");
    for($i$$46$$ = 0;$i$$46$$ < this.$_getModelsLength$();$i$$46$$ += 1) {
      $retArr$$1$$.push(this.$_getModel$($i$$46$$))
    }
    $self$$18$$ = this;
    $retArr$$1$$.sort(function($a$$43$$, $b$$26$$) {
      var $keyA$$3$$, $keyB$$3$$;
      if($oj$$1$$.$Model$.$IsFunction$($iterator$$2$$)) {
        return $keyA$$3$$ = $iterator$$2$$.call($context$$18$$ || $self$$18$$, $a$$43$$), $keyB$$3$$ = $iterator$$2$$.call($context$$18$$ || $self$$18$$, $b$$26$$), $oj$$1$$.$Collection$.$_compareKeys$($keyA$$3$$, $keyB$$3$$, $self$$18$$.sortDirection)
      }
      $keyA$$3$$ = $a$$43$$.get($iterator$$2$$);
      $keyB$$3$$ = $b$$26$$.get($iterator$$2$$);
      return $oj$$1$$.$Collection$.$_compareKeys$($keyA$$3$$, $keyB$$3$$, $self$$18$$.sortDirection)
    });
    return $retArr$$1$$
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.sortBy", {$sortBy$:$oj$$1$$.$Collection$.prototype.$sortBy$});
  $oj$$1$$.$Collection$.prototype.$groupBy$ = function $$oj$$1$$$$Collection$$$$groupBy$$($iterator$$3$$, $context$$19$$) {
    var $i$$47$$, $retObj$$6$$ = {}, $groupVal$$;
    this.$_throwErrIfVirtual$("groupBy");
    for($i$$47$$ = 0;$i$$47$$ < this.$_getModelsLength$();$i$$47$$ += 1) {
      $groupVal$$ = $oj$$1$$.$Model$.$IsFunction$($iterator$$3$$) ? $iterator$$3$$.call($context$$19$$ || this, this.$_getModel$($i$$47$$)) : this.$_getModel$($i$$47$$).get($iterator$$3$$), void 0 === $retObj$$6$$[$groupVal$$] && ($retObj$$6$$[$groupVal$$] = []), $retObj$$6$$[$groupVal$$].push(this.$_getModel$($i$$47$$))
    }
    return $retObj$$6$$
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.groupBy", {$groupBy$:$oj$$1$$.$Collection$.prototype.$groupBy$});
  $oj$$1$$.$Collection$.prototype.min = function $$oj$$1$$$$Collection$$$min$($iterator$$4$$, $context$$20$$) {
    var $i$$48$$, $minModel$$ = {}, $minModelValue$$, $currValue$$;
    this.$_throwErrIfVirtual$("min");
    if(0 == this.$_getModelsLength$()) {
      return null
    }
    $minModel$$ = this.$_getModel$(0);
    $minModelValue$$ = $iterator$$4$$.call($context$$20$$ || this, this.$_getModel$(0));
    for($i$$48$$ = 1;$i$$48$$ < this.$_getModelsLength$();$i$$48$$ += 1) {
      $currValue$$ = $iterator$$4$$.call($context$$20$$ || this, this.$_getModel$($i$$48$$)), $currValue$$ < $minModelValue$$ && ($minModel$$ = this.$_getModel$($i$$48$$), $minModelValue$$ = $currValue$$)
    }
    return $minModel$$
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.min", {min:$oj$$1$$.$Collection$.prototype.min});
  $oj$$1$$.$Collection$.prototype.max = function $$oj$$1$$$$Collection$$$max$($iterator$$5$$, $context$$21$$) {
    var $i$$49$$, $maxModel$$ = {}, $maxModelValue$$, $currValue$$1$$;
    this.$_throwErrIfVirtual$("max");
    if(0 == this.$_getModelsLength$()) {
      return null
    }
    $maxModel$$ = this.$_getModel$(0);
    $maxModelValue$$ = $iterator$$5$$.call($context$$21$$, this.$_getModel$(0));
    for($i$$49$$ = 1;$i$$49$$ < this.$_getModelsLength$();$i$$49$$ += 1) {
      $currValue$$1$$ = $iterator$$5$$.call($context$$21$$ || this, this.$_getModel$($i$$49$$)), $currValue$$1$$ > $maxModelValue$$ && ($maxModel$$ = this.$_getModel$($i$$49$$), $maxModelValue$$ = $currValue$$1$$)
    }
    return $maxModel$$
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.max", {max:$oj$$1$$.$Collection$.prototype.max});
  $oj$$1$$.$Collection$.prototype.filter = function $$oj$$1$$$$Collection$$$filter$($iterator$$6$$, $context$$22$$) {
    var $i$$50$$, $retArr$$2$$ = [];
    this.$_throwErrIfVirtual$("filter");
    for($i$$50$$ = 0;$i$$50$$ < this.$_getModelsLength$();$i$$50$$ += 1) {
      $iterator$$6$$.call($context$$22$$ || this, this.$_getModel$($i$$50$$)) && $retArr$$2$$.push(this.$_getModel$($i$$50$$))
    }
    return $retArr$$2$$
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.filter", {filter:$oj$$1$$.$Collection$.prototype.filter});
  $oj$$1$$.$Collection$.prototype.$without$ = function $$oj$$1$$$$Collection$$$$without$$($var_args$$43$$) {
    var $retArr$$3$$ = [], $i$$51$$, $j$$3$$, $add$$;
    this.$_throwErrIfVirtual$("without");
    if(arguments) {
      for($i$$51$$ = 0;$i$$51$$ < this.$_getModelsLength$();$i$$51$$ += 1) {
        $add$$ = !0;
        for($j$$3$$ = 0;$j$$3$$ < arguments.length;$j$$3$$ += 1) {
          if(this.$_getModel$($i$$51$$).$Match$(arguments[$j$$3$$].$GetId$(), arguments[$j$$3$$].$GetCid$())) {
            $add$$ = !1;
            break
          }
        }
        $add$$ && $retArr$$3$$.push(this.$_getModel$($i$$51$$))
      }
      return $retArr$$3$$
    }
    return this.$_getModels$()
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.without", {$without$:$oj$$1$$.$Collection$.prototype.$without$});
  $oj$$1$$.$Collection$.prototype.$isEmpty$ = function $$oj$$1$$$$Collection$$$$isEmpty$$() {
    return 0 === this.$_getLength$()
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.isEmpty", {$isEmpty$:$oj$$1$$.$Collection$.prototype.$isEmpty$});
  $oj$$1$$.$Collection$.prototype.$any$ = function $$oj$$1$$$$Collection$$$$any$$($iterator$$7$$, $context$$23$$) {
    var $i$$52$$;
    this.$_throwErrIfVirtual$("any");
    for($i$$52$$ = 0;$i$$52$$ < this.$_getModelsLength$();$i$$52$$ += 1) {
      if($iterator$$7$$.call($context$$23$$ || this, this.$_getModel$($i$$52$$))) {
        return!0
      }
    }
    return!1
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.any", {$any$:$oj$$1$$.$Collection$.prototype.$any$});
  $oj$$1$$.$Collection$.prototype.$findWhere$ = function $$oj$$1$$$$Collection$$$$findWhere$$($attrs$$11$$, $options$$69$$) {
    var $arr$$19_deferred$$15$$ = this.$_getDeferred$($options$$69$$);
    if(this.$_isVirtual$() || $arr$$19_deferred$$15$$) {
      var $defer$$4$$ = $$$$1$$.Deferred();
      this.$where$($attrs$$11$$, $options$$69$$).done(function($modelList$$1$$) {
        $modelList$$1$$ && 0 < $modelList$$1$$.length && $defer$$4$$.resolve($modelList$$1$$[0]);
        $defer$$4$$.resolve(null)
      });
      return $defer$$4$$.promise()
    }
    $arr$$19_deferred$$15$$ = this.$where$($attrs$$11$$);
    return 0 < $arr$$19_deferred$$15$$.length ? $arr$$19_deferred$$15$$[0] : null
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.findWhere", {$findWhere$:$oj$$1$$.$Collection$.prototype.$findWhere$});
  $oj$$1$$.$Collection$.prototype.slice = function $$oj$$1$$$$Collection$$$slice$($i$$53_start$$15$$, $end$$4$$, $options$$70_ret$$1$$) {
    var $deferred$$16$$ = this.$_getDeferred$($options$$70_ret$$1$$);
    $options$$70_ret$$1$$ = [];
    if(void 0 === $end$$4$$) {
      if(this.$_isVirtual$ && !this.$_hasTotalResults$()) {
        throw Error("End must be set for virtual collections with no totalResults");
      }
      $end$$4$$ = this.$_getModelsLength$()
    }
    if($deferred$$16$$ || this.$_isVirtual$()) {
      return this.$_iterativeAt$($i$$53_start$$15$$, $end$$4$$)
    }
    for(;$i$$53_start$$15$$ < $end$$4$$;$i$$53_start$$15$$ += 1) {
      $options$$70_ret$$1$$.push(this.$_getModel$($i$$53_start$$15$$))
    }
    return $options$$70_ret$$1$$
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.slice", {slice:$oj$$1$$.$Collection$.prototype.slice});
  $oj$$1$$.$Collection$.prototype.set = function $$oj$$1$$$$Collection$$$set$($models$$4$$, $options$$71$$) {
    return this.$_setInternal$($models$$4$$, $options$$71$$, this.$_getDeferred$($options$$71$$))
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.set", {set:$oj$$1$$.$Collection$.prototype.set});
  $oj$$1$$.$Collection$.$_removeAfterSet$ = function $$oj$$1$$$$Collection$$$_removeAfterSet$$($collection$$15$$, $i$$54_remove$$, $foundModels$$, $options$$72$$) {
    if($i$$54_remove$$) {
      for($i$$54_remove$$ = $collection$$15$$.$_getModelsLength$() - 1;0 <= $i$$54_remove$$;$i$$54_remove$$ -= 1) {
        -1 == $foundModels$$.indexOf($i$$54_remove$$) && $collection$$15$$.$_removeInternal$($collection$$15$$.$_getModel$($i$$54_remove$$), $i$$54_remove$$, $options$$72$$)
      }
    }
  };
  $oj$$1$$.$Collection$.prototype.$_setInternal$ = function $$oj$$1$$$$Collection$$$$_setInternal$$($i$$55_models$$5$$, $options$$73$$, $deferred$$18$$) {
    $options$$73$$ = $options$$73$$ || {};
    var $add$$1$$ = void 0 === $options$$73$$.add ? !0 : $options$$73$$.add, $remove$$1$$ = void 0 === $options$$73$$.remove ? !0 : $options$$73$$.remove, $merge$$1$$ = void 0 === $options$$73$$.merge ? !0 : $options$$73$$.merge, $foundModels$$1$$ = [], $currModel$$ = null, $modelList$$2$$;
    $options$$73$$.parse && ($i$$55_models$$5$$ = this.parse($i$$55_models$$5$$));
    $modelList$$2$$ = $oj$$1$$.$Model$.isArray($i$$55_models$$5$$) ? $i$$55_models$$5$$ : [$i$$55_models$$5$$];
    if(this.$_isVirtual$() || $deferred$$18$$) {
      return this.$_deferredSet$($modelList$$2$$, $options$$73$$, $remove$$1$$, $add$$1$$, $merge$$1$$)
    }
    for($i$$55_models$$5$$ = 0;$i$$55_models$$5$$ < $modelList$$2$$.length;$i$$55_models$$5$$ += 1) {
      $currModel$$ = this.$_updateModel$(this.$_newModel$($modelList$$2$$[$i$$55_models$$5$$], $options$$73$$), $add$$1$$, $merge$$1$$, $deferred$$18$$), -1 !== $currModel$$ && $foundModels$$1$$.push($currModel$$)
    }
    $oj$$1$$.$Collection$.$_removeAfterSet$(this, $remove$$1$$, $foundModels$$1$$, $options$$73$$)
  };
  $oj$$1$$.$Collection$.prototype.$_deferredSet$ = function $$oj$$1$$$$Collection$$$$_deferredSet$$($modelList$$3$$, $options$$74$$, $remove$$2$$, $add$$2$$, $merge$$2$$) {
    function $nextTask$$2$$($j$$4$$) {
      return $doTask$$2$$($j$$4$$ + 1)
    }
    function $doTask$$2$$($index$$62$$) {
      var $defer$$5$$ = $$$$1$$.Deferred();
      $self$$19$$.$_updateModel$($self$$19$$.$_newModel$($modelList$$3$$[$index$$62$$], $options$$74$$), $add$$2$$, $merge$$2$$, !0).done(function($currModel$$1$$) {
        -1 !== $currModel$$1$$ && $foundModels$$2$$.push($currModel$$1$$);
        $defer$$5$$.resolve($index$$62$$)
      });
      return $defer$$5$$.promise()
    }
    var $foundModels$$2$$ = [], $i$$56$$, $self$$19$$ = this, $currentStep$$2$$ = $doTask$$2$$(0);
    for($i$$56$$ = 1;$i$$56$$ < $modelList$$3$$.length;$i$$56$$ += 1) {
      $currentStep$$2$$ = $currentStep$$2$$.then($nextTask$$2$$)
    }
    return $$$$1$$.when($currentStep$$2$$).then(function() {
      $oj$$1$$.$Collection$.$_removeAfterSet$($self$$19$$, $remove$$2$$, $foundModels$$2$$, $options$$74$$)
    })
  };
  $oj$$1$$.$Collection$.prototype.$_updateModel$ = function $$oj$$1$$$$Collection$$$$_updateModel$$($model$$32$$, $add$$3$$, $merge$$3$$, $deferred$$19_found$$) {
    function $update$$($collection$$16$$, $found$$1_opt$$11$$, $deferred$$20$$) {
      var $index$$63$$ = $found$$1_opt$$11$$ ? $found$$1_opt$$11$$.index : -1;
      if($found$$1_opt$$11$$ && $found$$1_opt$$11$$.m) {
        if($merge$$3$$) {
          $found$$1_opt$$11$$ = {merge:$merge$$3$$};
          if($deferred$$20$$) {
            var $defer$$7$$ = $$$$1$$.Deferred();
            $collection$$16$$.$_addInternal$($model$$32$$, $found$$1_opt$$11$$, !1, !0).done(function() {
              $defer$$7$$.resolve($index$$63$$)
            });
            return $defer$$7$$.promise()
          }
          $collection$$16$$.add($model$$32$$, $found$$1_opt$$11$$)
        }
      }else {
        if($add$$3$$) {
          if($deferred$$20$$) {
            return $defer$$7$$ = $$$$1$$.Deferred(), $collection$$16$$.add($model$$32$$, {deferred:!0}).done(function() {
              $defer$$7$$.resolve($collection$$16$$.$_getLength$() - 1)
            }), $defer$$7$$.promise()
          }
          $collection$$16$$.add($model$$32$$);
          $index$$63$$ = $collection$$16$$.$_getLength$() - 1
        }
      }
      return $index$$63$$
    }
    if($deferred$$19_found$$ || this.$_isVirtual$()) {
      var $self$$20$$ = this, $defer$$6$$ = $$$$1$$.Deferred();
      this.$_getInternal$($model$$32$$, null, $deferred$$19_found$$).done(function($found$$2$$) {
        $update$$($self$$20$$, $found$$2$$, !0).done(function($index$$64$$) {
          $defer$$6$$.resolve($index$$64$$)
        })
      });
      return $defer$$6$$.promise()
    }
    $deferred$$19_found$$ = this.$_getInternal$($model$$32$$);
    return $update$$(this, $deferred$$19_found$$, !1)
  };
  $oj$$1$$.$Collection$.prototype.toJSON = function $$oj$$1$$$$Collection$$$toJSON$() {
    var $retArr$$4$$ = [], $i$$57$$;
    this.$_throwErrIfVirtual$("toJSON");
    for($i$$57$$ = 0;$i$$57$$ < this.$_getModelsLength$();$i$$57$$ += 1) {
      $retArr$$4$$.push(this.$_getModel$($i$$57$$).toJSON())
    }
    return $retArr$$4$$
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.toJSON", {toJSON:$oj$$1$$.$Collection$.prototype.toJSON});
  $oj$$1$$.$Collection$.prototype.first = function $$oj$$1$$$$Collection$$$first$($n$$11$$, $options$$75$$) {
    var $deferred$$21_i$$58_virtual$$ = this.$_getDeferred$($options$$75$$), $elementCount$$ = this.$_getLength$(), $retArray$$2$$ = [];
    $n$$11$$ ? $elementCount$$ = $n$$11$$ : $n$$11$$ = 1;
    $deferred$$21_i$$58_virtual$$ = this.$_isVirtual$() || $deferred$$21_i$$58_virtual$$;
    if(1 === $n$$11$$) {
      return $deferred$$21_i$$58_virtual$$ ? this.$_deferredAt$(0, null).promise() : 0 < this.$_getModelsLength$() ? this.$_getModel$(0) : null
    }
    $elementCount$$ > this.$_getModelsLength$() && (!this.$_isVirtual$() || this.$_hasTotalResults$()) && ($elementCount$$ = this.$_getModelsLength$());
    if($deferred$$21_i$$58_virtual$$) {
      return this.$_iterativeAt$(0, $elementCount$$)
    }
    for($deferred$$21_i$$58_virtual$$ = 0;$deferred$$21_i$$58_virtual$$ < $elementCount$$;$deferred$$21_i$$58_virtual$$ += 1) {
      $retArray$$2$$.push(this.$_getModel$($deferred$$21_i$$58_virtual$$))
    }
    return $retArray$$2$$
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.first", {first:$oj$$1$$.$Collection$.prototype.first});
  $oj$$1$$.$Collection$.prototype.indexOf = function $$oj$$1$$$$Collection$$$indexOf$($model$$33$$, $options$$76$$) {
    var $deferred$$22$$ = this.$_getDeferred$($options$$76$$);
    return this.$_isVirtual$() || $deferred$$22$$ ? this.$_getInternal$($model$$33$$, null, !0).then(function($loc$$1$$) {
      return $loc$$1$$.index
    }) : this.$_getInternal$($model$$33$$).index
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.indexOf", {indexOf:$oj$$1$$.$Collection$.prototype.indexOf});
  $oj$$1$$.$Collection$.prototype.$_localIndexOf$ = function $$oj$$1$$$$Collection$$$$_localIndexOf$$($location$$22_model$$34$$) {
    $location$$22_model$$34$$ = this.$_getLocalInternal$($location$$22_model$$34$$);
    return void 0 !== $location$$22_model$$34$$ ? $location$$22_model$$34$$.index : -1
  };
  $oj$$1$$.$Collection$.prototype.pop = function $$oj$$1$$$$Collection$$$pop$($options$$77$$) {
    var $deferred$$23_m$$8$$ = this.$_getDeferred$($options$$77$$);
    if(this.$_isVirtual$() || $deferred$$23_m$$8$$) {
      var $self$$21$$ = this;
      return this.at(this.$_getLength$() - 1, {deferred:$deferred$$23_m$$8$$}).then(function($model$$35$$) {
        $self$$21$$.remove($model$$35$$, $options$$77$$);
        return $model$$35$$
      })
    }
    $deferred$$23_m$$8$$ = this.at(this.$_getLength$() - 1);
    this.remove($deferred$$23_m$$8$$, $options$$77$$);
    return $deferred$$23_m$$8$$
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.pop", {pop:$oj$$1$$.$Collection$.prototype.pop});
  $oj$$1$$.$Collection$.prototype.push = function $$oj$$1$$$$Collection$$$push$($m$$9$$, $options$$78$$) {
    var $deferred$$24$$ = this.$_getDeferred$($options$$78$$);
    this.$_manageLRU$(1);
    return this.$_addInternal$($m$$9$$, $options$$78$$, !1, $deferred$$24$$)
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.push", {push:$oj$$1$$.$Collection$.prototype.push});
  $oj$$1$$.$Collection$.prototype.lastIndexOf = function $$oj$$1$$$$Collection$$$lastIndexOf$($model$$36$$, $fromIndex$$2$$) {
    var $i$$59$$;
    this.$_throwErrIfVirtual$("lastIndexOf");
    void 0 === $fromIndex$$2$$ && ($fromIndex$$2$$ = 0);
    for($i$$59$$ = this.$_getLength$() - 1;$i$$59$$ >= $fromIndex$$2$$;$i$$59$$ -= 1) {
      if($oj$$1$$.$Object$.$innerEquals$($model$$36$$, this.at($i$$59$$))) {
        return $i$$59$$
      }
    }
    return-1
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.lastIndexOf", {lastIndexOf:$oj$$1$$.$Collection$.prototype.lastIndexOf});
  $oj$$1$$.$Collection$.prototype.$_getSortAttrs$ = function $$oj$$1$$$$Collection$$$$_getSortAttrs$$($sortStr$$) {
    return void 0 === $sortStr$$ ? [] : $sortStr$$.split(",")
  };
  $oj$$1$$.$Collection$.$_getQueryString$ = function $$oj$$1$$$$Collection$$$_getQueryString$$($q_queries$$) {
    $q_queries$$ = $oj$$1$$.$Model$.isArray($q_queries$$) ? $q_queries$$ : [$q_queries$$];
    var $str$$12$$ = "", $query$$2$$, $exp$$, $i$$60$$, $prop$$43$$;
    for($i$$60$$ = 0;$i$$60$$ < $q_queries$$.length;$i$$60$$++) {
      $query$$2$$ = $q_queries$$[$i$$60$$];
      for($prop$$43$$ in $query$$2$$) {
        $query$$2$$.hasOwnProperty($prop$$43$$) && ($exp$$ = $prop$$43$$ + "\x3d" + $query$$2$$[$prop$$43$$], $str$$12$$ += $exp$$ + "+")
      }
      $str$$12$$ = $str$$12$$.substring(0, $str$$12$$.length - 1) + ","
    }
    return"," === $str$$12$$.substring($str$$12$$.length - 1) ? $str$$12$$.substring(0, $str$$12$$.length - 1) : $str$$12$$
  };
  $oj$$1$$.$Collection$.prototype.$ModifyOptionsForCustomURL$ = function $$oj$$1$$$$Collection$$$$ModifyOptionsForCustomURL$$($attrs$$12_comparator$$6_options$$79$$) {
    var $opt$$12$$ = {}, $i$$61_prop$$44$$;
    for($i$$61_prop$$44$$ in $attrs$$12_comparator$$6_options$$79$$) {
      $attrs$$12_comparator$$6_options$$79$$.hasOwnProperty($i$$61_prop$$44$$) && ($opt$$12$$[$i$$61_prop$$44$$] = $attrs$$12_comparator$$6_options$$79$$[$i$$61_prop$$44$$])
    }
    if($attrs$$12_comparator$$6_options$$79$$ = this.comparator) {
      $attrs$$12_comparator$$6_options$$79$$ = this.$_getSortAttrs$($attrs$$12_comparator$$6_options$$79$$);
      for($i$$61_prop$$44$$ = 0;$i$$61_prop$$44$$ < $attrs$$12_comparator$$6_options$$79$$.length;$i$$61_prop$$44$$++) {
        $opt$$12$$.sort = 0 === $i$$61_prop$$44$$ ? $attrs$$12_comparator$$6_options$$79$$[$i$$61_prop$$44$$] : $opt$$12$$.sort + ("," + $attrs$$12_comparator$$6_options$$79$$[$i$$61_prop$$44$$])
      }
      $opt$$12$$.sortDir = this.$_getSortDirStr$()
    }
    this.$_isVirtual$() && ($opt$$12$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] = this.$_getFetchSize$(null));
    return $opt$$12$$
  };
  $oj$$1$$.$Collection$.prototype.$GetCollectionFetchUrl$ = function $$oj$$1$$$$Collection$$$$GetCollectionFetchUrl$$($attrs$$13_comparator$$7_options$$80_queryString$$) {
    var $url$$29$$ = $oj$$1$$.$Model$.$IsFunction$(this.url) ? this.url() : this.url;
    if(this.$_isVirtual$()) {
      $url$$29$$ += "?limit\x3d" + this.$_getFetchSize$($attrs$$13_comparator$$7_options$$80_queryString$$);
      $attrs$$13_comparator$$7_options$$80_queryString$$.startIndex && ($url$$29$$ += "\x26offset\x3d" + $attrs$$13_comparator$$7_options$$80_queryString$$.startIndex);
      $attrs$$13_comparator$$7_options$$80_queryString$$.startID && ($url$$29$$ += "\x26fromID\x3d" + $attrs$$13_comparator$$7_options$$80_queryString$$.startID);
      $attrs$$13_comparator$$7_options$$80_queryString$$.since && ($url$$29$$ += "\x26since\x3d" + $attrs$$13_comparator$$7_options$$80_queryString$$.since);
      $attrs$$13_comparator$$7_options$$80_queryString$$.until && ($url$$29$$ += "\x26until\x3d" + $attrs$$13_comparator$$7_options$$80_queryString$$.until);
      $attrs$$13_comparator$$7_options$$80_queryString$$.query && ($attrs$$13_comparator$$7_options$$80_queryString$$ = $oj$$1$$.$Collection$.$_getQueryString$($attrs$$13_comparator$$7_options$$80_queryString$$.query)) && 0 < $attrs$$13_comparator$$7_options$$80_queryString$$.length && ($url$$29$$ += "\x26q\x3d" + $attrs$$13_comparator$$7_options$$80_queryString$$);
      if($attrs$$13_comparator$$7_options$$80_queryString$$ = this.comparator) {
        $attrs$$13_comparator$$7_options$$80_queryString$$ = this.$_getSortAttrs$($attrs$$13_comparator$$7_options$$80_queryString$$);
        var $sortDirStr$$ = this.$_getSortDirStr$(), $i$$62$$;
        for($i$$62$$ = 0;$i$$62$$ < $attrs$$13_comparator$$7_options$$80_queryString$$.length;$i$$62$$++) {
          $url$$29$$ = 0 === $i$$62$$ ? $url$$29$$ + ("\x26orderBy\x3d" + $attrs$$13_comparator$$7_options$$80_queryString$$[$i$$62$$] + ":" + $sortDirStr$$) : $url$$29$$ + ("," + $attrs$$13_comparator$$7_options$$80_queryString$$[$i$$62$$] + ":" + $sortDirStr$$)
        }
      }
      $url$$29$$ += "\x26totalResults\x3dtrue"
    }
    return $url$$29$$
  };
  $oj$$1$$.$Collection$.prototype.$_getSortDirStr$ = function $$oj$$1$$$$Collection$$$$_getSortDirStr$$() {
    return-1 === this.sortDirection ? "dsc" : "asc"
  };
  $oj$$1$$.$Collection$.prototype.sync = function $$oj$$1$$$$Collection$$$sync$($method$$6$$, $collection$$17$$, $options$$81$$) {
    return window.oj.sync($method$$6$$, $collection$$17$$, $options$$81$$)
  };
  $oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$ = "fetchSize";
  $oj$$1$$.$RestImpl$ = function $$oj$$1$$$$RestImpl$$($rootURL$$, $custom$$1$$) {
    this.$rootURL$ = $rootURL$$;
    this.$customURL$ = $custom$$1$$;
    jQuery.support.cors = !0
  };
  $oj$$1$$.$RestImpl$.$_HEADER_PROP$ = "headers";
  $oj$$1$$.$RestImpl$.$addOptions$ = function $$oj$$1$$$$RestImpl$$$addOptions$$($starter$$, $options$$82$$, $customOptions$$) {
    var $prop$$45$$;
    $starter$$ = $$$$1$$.extend(!0, $starter$$, $customOptions$$);
    for($prop$$45$$ in $options$$82$$) {
      $options$$82$$.hasOwnProperty($prop$$45$$) && "oauthHeader" !== $prop$$45$$ && ($starter$$.hasOwnProperty($prop$$45$$) || ($starter$$[$prop$$45$$] = $options$$82$$[$prop$$45$$]), $prop$$45$$ === $oj$$1$$.$RestImpl$.$_HEADER_PROP$ && ($starter$$[$prop$$45$$] = $$$$1$$.extend(!0, $starter$$[$prop$$45$$], $options$$82$$[$prop$$45$$])))
    }
    if($options$$82$$.oauthHeader) {
      for($prop$$45$$ in $starter$$[$oj$$1$$.$RestImpl$.$_HEADER_PROP$] || ($starter$$[$oj$$1$$.$RestImpl$.$_HEADER_PROP$] = {}), $options$$82$$.oauthHeader) {
        $options$$82$$.oauthHeader.hasOwnProperty($prop$$45$$) && ($starter$$[$oj$$1$$.$RestImpl$.$_HEADER_PROP$].hasOwnProperty($prop$$45$$) || ($starter$$[$oj$$1$$.$RestImpl$.$_HEADER_PROP$][$prop$$45$$] = $options$$82$$.oauthHeader[$prop$$45$$]))
      }
    }
    return $starter$$
  };
  $oj$$1$$.$RestImpl$.prototype.$getRecords$ = function $$oj$$1$$$$RestImpl$$$$getRecords$$($ajaxOptions_callback$$75$$, $errFunc$$, $options$$83$$, $context$$24$$) {
    $options$$83$$ = $options$$83$$ || {};
    var $isJsonp$$ = "jsonp" === $options$$83$$.dataType, $urlInfo$$ = this.$_getURL$("read", this.$rootURL$, this.$customURL$, null, $context$$24$$, $options$$83$$);
    $ajaxOptions_callback$$75$$ = {crossDomain:$options$$83$$.crossDomain || !$isJsonp$$, dataType:$options$$83$$.dataType || "json", jsonpCallback:$options$$83$$.jsonpCallback, context:null !== $context$$24$$ ? $context$$24$$ : this, success:$ajaxOptions_callback$$75$$, error:$errFunc$$};
    $ajaxOptions_callback$$75$$ = this.$_addHeaderProp$($ajaxOptions_callback$$75$$);
    $ajaxOptions_callback$$75$$ = $oj$$1$$.$RestImpl$.$addOptions$($ajaxOptions_callback$$75$$, $options$$83$$, $urlInfo$$);
    $options$$83$$.xhr = this.ajax($ajaxOptions_callback$$75$$);
    return $options$$83$$.xhr
  };
  $oj$$1$$.$RestImpl$.prototype.$_addHeaderProp$ = function $$oj$$1$$$$RestImpl$$$$_addHeaderProp$$($options$$84$$) {
    $options$$84$$[$oj$$1$$.$RestImpl$.$_HEADER_PROP$] = {"Accept-Language":this.$getLocale$()};
    return $options$$84$$
  };
  $oj$$1$$.$RestImpl$.prototype.$getRecord$ = function $$oj$$1$$$$RestImpl$$$$getRecord$$($ajaxOptions$$1_success$$14$$, $error$$5$$, $recordID_urlInfo$$1$$, $options$$85$$, $context$$25$$) {
    $options$$85$$ = $options$$85$$ || {};
    var $isJsonp$$1$$ = "jsonp" === $options$$85$$.dataType;
    $recordID_urlInfo$$1$$ = this.$_getURL$("read", this.$rootURL$, this.$customURL$, $recordID_urlInfo$$1$$, $context$$25$$, $options$$85$$);
    $ajaxOptions$$1_success$$14$$ = {crossDomain:$options$$85$$.crossDomain || !$isJsonp$$1$$, dataType:$options$$85$$.dataType || "json", jsonpCallback:$options$$85$$.jsonpCallback, context:null !== $context$$25$$ ? $context$$25$$ : this, success:$ajaxOptions$$1_success$$14$$, error:$error$$5$$};
    $ajaxOptions$$1_success$$14$$ = this.$_addHeaderProp$($ajaxOptions$$1_success$$14$$);
    $ajaxOptions$$1_success$$14$$ = $oj$$1$$.$RestImpl$.$addOptions$($ajaxOptions$$1_success$$14$$, $options$$85$$, $recordID_urlInfo$$1$$);
    $options$$85$$.xhr = this.ajax($ajaxOptions$$1_success$$14$$);
    return $options$$85$$.xhr
  };
  $oj$$1$$.$RestImpl$.prototype.$updateRecord$ = function $$oj$$1$$$$RestImpl$$$$updateRecord$$($ajaxOptions$$2_callback$$76$$, $recordID$$1_urlInfo$$2$$, $record$$, $error$$6$$, $options$$86$$, $context$$26$$, $patch$$1$$) {
    $options$$86$$ = $options$$86$$ || {};
    var $isJsonp$$2$$ = "jsonp" === $options$$86$$.dataType;
    $recordID$$1_urlInfo$$2$$ = this.$_getURL$($patch$$1$$ ? "patch" : "update", this.$rootURL$, this.$customURL$, $recordID$$1_urlInfo$$2$$, $context$$26$$, $options$$86$$);
    $ajaxOptions$$2_callback$$76$$ = {crossDomain:$options$$86$$.crossDomain || !$isJsonp$$2$$, contentType:$options$$86$$.contentType || "application/json", dataType:$options$$86$$.dataType || "json", jsonpCallback:$options$$86$$.jsonpCallback, data:JSON.stringify($record$$), success:$ajaxOptions$$2_callback$$76$$, error:$error$$6$$, context:null !== $context$$26$$ ? $context$$26$$ : this};
    $ajaxOptions$$2_callback$$76$$ = this.$_addHeaderProp$($ajaxOptions$$2_callback$$76$$);
    $ajaxOptions$$2_callback$$76$$ = $oj$$1$$.$RestImpl$.$addOptions$($ajaxOptions$$2_callback$$76$$, $options$$86$$, $recordID$$1_urlInfo$$2$$);
    $options$$86$$.xhr = this.ajax($ajaxOptions$$2_callback$$76$$);
    return $options$$86$$.xhr
  };
  $oj$$1$$.$RestImpl$.prototype.$_getHTTPMethod$ = function $$oj$$1$$$$RestImpl$$$$_getHTTPMethod$$($operation$$2$$, $options$$87$$) {
    return $options$$87$$.type ? $options$$87$$.type : "create" === $operation$$2$$ ? "POST" : "delete" === $operation$$2$$ ? "DELETE" : "patch" === $operation$$2$$ ? "PATCH" : "update" === $operation$$2$$ ? "PUT" : "GET"
  };
  $oj$$1$$.$RestImpl$.prototype.$_setCustomURLOptions$ = function $$oj$$1$$$$RestImpl$$$$_setCustomURLOptions$$($recordID$$2$$, $context$$27_options$$88$$, $opt$$13$$) {
    $context$$27_options$$88$$ = $context$$27_options$$88$$ instanceof $oj$$1$$.$Collection$ ? $context$$27_options$$88$$.$ModifyOptionsForCustomURL$($opt$$13$$) : {};
    $recordID$$2$$ && ($context$$27_options$$88$$.recordID = $recordID$$2$$);
    return $context$$27_options$$88$$
  };
  $oj$$1$$.$RestImpl$.prototype.$_getURL$ = function $$oj$$1$$$$RestImpl$$$$_getURL$$($operation$$3$$, $rootURL$$1$$, $customURL$$1_result$$, $recordID$$3$$, $context$$28$$, $options$$89$$) {
    if($oj$$1$$.$Model$.$IsFunction$($customURL$$1_result$$)) {
      $customURL$$1_result$$ = $customURL$$1_result$$.call(this, $operation$$3$$, $context$$28$$, this.$_setCustomURLOptions$($recordID$$3$$, $context$$28$$, $options$$89$$));
      if($oj$$1$$.$StringUtils$.$isString$($customURL$$1_result$$)) {
        return{url:$customURL$$1_result$$, type:this.$_getHTTPMethod$($operation$$3$$, $options$$89$$)}
      }
      if($customURL$$1_result$$) {
        return $customURL$$1_result$$.url = $customURL$$1_result$$.hasOwnProperty("url") ? $customURL$$1_result$$.url : $rootURL$$1$$, $customURL$$1_result$$.type = $customURL$$1_result$$.hasOwnProperty("type") ? $customURL$$1_result$$.type : this.$_getHTTPMethod$($operation$$3$$, $options$$89$$), $customURL$$1_result$$
      }
    }
    return{url:$rootURL$$1$$, type:this.$_getHTTPMethod$($operation$$3$$, $options$$89$$)}
  };
  $oj$$1$$.$RestImpl$.prototype.$deleteRecord$ = function $$oj$$1$$$$RestImpl$$$$deleteRecord$$($recordID$$4_urlInfo$$3$$, $ajaxOptions$$3_error$$7$$, $options$$90$$, $context$$29$$) {
    $options$$90$$ = $options$$90$$ || {};
    var $isJsonp$$3$$ = "jsonp" === $options$$90$$.dataType;
    $recordID$$4_urlInfo$$3$$ = this.$_getURL$("delete", this.$rootURL$, this.$customURL$, $recordID$$4_urlInfo$$3$$, $context$$29$$, $options$$90$$);
    $ajaxOptions$$3_error$$7$$ = {crossDomain:$options$$90$$.crossDomain || !$isJsonp$$3$$, success:$options$$90$$.success, error:$ajaxOptions$$3_error$$7$$, context:null !== $context$$29$$ ? $context$$29$$ : this};
    $ajaxOptions$$3_error$$7$$ = $oj$$1$$.$RestImpl$.$addOptions$($ajaxOptions$$3_error$$7$$, $options$$90$$, $recordID$$4_urlInfo$$3$$);
    $options$$90$$.xhr = this.ajax($ajaxOptions$$3_error$$7$$);
    return $options$$90$$.xhr
  };
  $oj$$1$$.$RestImpl$.prototype.$addRecord$ = function $$oj$$1$$$$RestImpl$$$$addRecord$$($record$$1_urlInfo$$4$$, $ajaxOptions$$4_error$$8$$, $options$$91$$, $context$$30$$) {
    $options$$91$$ = $options$$91$$ || {};
    var $recordStr$$ = JSON.stringify($record$$1_urlInfo$$4$$), $isJsonp$$4$$ = "jsonp" === $options$$91$$.dataType;
    $record$$1_urlInfo$$4$$ = this.$_getURL$("create", this.$rootURL$, this.$customURL$, null, $context$$30$$, $options$$91$$);
    $ajaxOptions$$4_error$$8$$ = {crossDomain:$options$$91$$.crossDomain || !$isJsonp$$4$$, contentType:$options$$91$$.contentType || "application/json", dataType:$options$$91$$.dataType || "json", jsonpCallback:$options$$91$$.jsonpCallback, data:$recordStr$$, success:$options$$91$$.success, error:$ajaxOptions$$4_error$$8$$, context:null !== $context$$30$$ ? $context$$30$$ : this};
    $ajaxOptions$$4_error$$8$$ = this.$_addHeaderProp$($ajaxOptions$$4_error$$8$$);
    $ajaxOptions$$4_error$$8$$ = $oj$$1$$.$RestImpl$.$addOptions$($ajaxOptions$$4_error$$8$$, $options$$91$$, $record$$1_urlInfo$$4$$);
    $options$$91$$.xhr = this.ajax($ajaxOptions$$4_error$$8$$);
    return $options$$91$$.xhr
  };
  $oj$$1$$.$RestImpl$.prototype.$getLocale$ = function $$oj$$1$$$$RestImpl$$$$getLocale$$() {
    return $oj$$1$$.$Config$.$getLocale$()
  };
  $oj$$1$$.$RestImpl$.prototype.ajax = function $$oj$$1$$$$RestImpl$$$ajax$($settings$$3$$) {
    return window.oj.ajax($settings$$3$$)
  };
  $oj$$1$$.$OAuth$ = function $$oj$$1$$$$OAuth$$($header$$2$$, $attributes$$8$$) {
    $attributes$$8$$ = $attributes$$8$$ || {};
    $oj$$1$$.$OAuth$._init(this, $attributes$$8$$, $header$$2$$ || "Authorization")
  };
  $goog$exportPath_$$("OAuth", $oj$$1$$.$OAuth$, $oj$$1$$);
  $oj$$1$$.$Object$.$createSubclass$($oj$$1$$.$OAuth$, $oj$$1$$.$Object$, "OAuth.OAuth");
  $oj$$1$$.$OAuth$.prototype.$Init$ = function $$oj$$1$$$$OAuth$$$$Init$$() {
    $oj$$1$$.$OAuth$.$superclass$.$Init$.call(this)
  };
  $oj$$1$$.$OAuth$.prototype.getHeader = function $$oj$$1$$$$OAuth$$$getHeader$() {
    var $headers$$ = {};
    this.$accessTokenResponse$.access_token || this.$clientCredentialGrant$();
    $headers$$[this.$accessTokenRequest$.$auth_header$] = "Bearer " + this.$accessTokenResponse$.access_token;
    return $headers$$
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.getHeader", {getHeader:$oj$$1$$.$OAuth$.prototype.getHeader});
  $oj$$1$$.$OAuth$.prototype.$isInitialized$ = function $$oj$$1$$$$OAuth$$$$isInitialized$$() {
    return this.$accessTokenResponse$.$access_token$ ? !0 : !1
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.isInitialized", {$isInitialized$:$oj$$1$$.$OAuth$.prototype.$isInitialized$});
  $oj$$1$$.$OAuth$.prototype.$clientCredentialGrant$ = function $$oj$$1$$$$OAuth$$$$clientCredentialGrant$$() {
    var $headers$$1$$ = {}, $self$$22$$ = this;
    $headers$$1$$[$self$$22$$.$accessTokenRequest$.$auth_header$] = "Basic " + $oj$$1$$.$OAuth$.$_base64_encode$($self$$22$$.$accessTokenRequest$.client_id + ":" + $self$$22$$.$accessTokenRequest$.client_secret);
    $$$$1$$.ajax({type:"POST", async:!1, url:this.$accessTokenRequest$.bearer_url, data:"grant_type\x3dclient_credentials", headers:$headers$$1$$, success:function($data$$35$$) {
      $oj$$1$$.$OAuth$.$_initAccessToken$($self$$22$$.$accessTokenResponse$, $data$$35$$)
    }, error:function($jqXHR$$1$$) {
      throw Error($jqXHR$$1$$.responseText);
    }})
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.clientCredentialGrant", {$clientCredentialGrant$:$oj$$1$$.$OAuth$.prototype.$clientCredentialGrant$});
  $oj$$1$$.$OAuth$.prototype.$setAccessTokenResponse$ = function $$oj$$1$$$$OAuth$$$$setAccessTokenResponse$$($data$$36$$) {
    $oj$$1$$.$OAuth$.$_initAccessToken$(this.$accessTokenResponse$, $data$$36$$)
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.setAccessTokenResponse", {$setAccessTokenResponse$:$oj$$1$$.$OAuth$.prototype.$setAccessTokenResponse$});
  $oj$$1$$.$OAuth$.prototype.$getAccessTokenResponse$ = $JSCompiler_get$$("$accessTokenResponse$");
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.getAccessTokenResponse", {$getAccessTokenResponse$:$oj$$1$$.$OAuth$.prototype.$getAccessTokenResponse$});
  $oj$$1$$.$OAuth$.prototype.$cleanAccessTokenResponse$ = function $$oj$$1$$$$OAuth$$$$cleanAccessTokenResponse$$() {
    $oj$$1$$.$OAuth$.$_cleanAccessToken$(this.$accessTokenResponse$)
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.cleanAccessTokenResponse", {$cleanAccessTokenResponse$:$oj$$1$$.$OAuth$.prototype.$cleanAccessTokenResponse$});
  $oj$$1$$.$OAuth$.prototype.$setAccessTokenRequest$ = function $$oj$$1$$$$OAuth$$$$setAccessTokenRequest$$($data$$37$$) {
    $oj$$1$$.$OAuth$.$_initAccessToken$(this.$accessTokenRequest$, $data$$37$$)
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.setAccessTokenRequest", {$setAccessTokenRequest$:$oj$$1$$.$OAuth$.prototype.$setAccessTokenRequest$});
  $oj$$1$$.$OAuth$.prototype.$getAccessTokenRequest$ = $JSCompiler_get$$("$accessTokenRequest$");
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.getAccessTokenRequest", {$getAccessTokenRequest$:$oj$$1$$.$OAuth$.prototype.$getAccessTokenRequest$});
  $oj$$1$$.$OAuth$.prototype.$cleanAccessTokenRequest$ = function $$oj$$1$$$$OAuth$$$$cleanAccessTokenRequest$$() {
    $oj$$1$$.$OAuth$.$_cleanAccessToken$(this.$accessTokenRequest$)
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.cleanAccessTokenRequest", {$cleanAccessTokenRequest$:$oj$$1$$.$OAuth$.prototype.$cleanAccessTokenRequest$});
  $oj$$1$$.$OAuth$._init = function $$oj$$1$$$$OAuth$$_init$($oauth$$, $attributes$$9$$, $header$$3$$) {
    $oauth$$.$Init$();
    $oauth$$.$accessTokenRequest$ = {};
    $oauth$$.$accessTokenResponse$ = {};
    $attributes$$9$$.access_token ? $oj$$1$$.$OAuth$.$_initAccessToken$($oauth$$.$accessTokenResponse$, $attributes$$9$$) : $attributes$$9$$.client_id && ($attributes$$9$$.client_secret && $attributes$$9$$.bearer_url) && $oj$$1$$.$OAuth$.$_initAccessToken$($oauth$$.$accessTokenRequest$, $attributes$$9$$);
    $oauth$$.$accessTokenRequest$.$auth_header$ = $header$$3$$
  };
  $oj$$1$$.$OAuth$.$_initAccessToken$ = function $$oj$$1$$$$OAuth$$$_initAccessToken$$($oauthObj$$, $data$$38$$) {
    var $prop$$46$$;
    $data$$38$$ = $data$$38$$ || {};
    for($prop$$46$$ in $data$$38$$) {
      $oauthObj$$[$prop$$46$$] = $data$$38$$[$prop$$46$$]
    }
  };
  $oj$$1$$.$OAuth$.$_cleanAccessToken$ = function $$oj$$1$$$$OAuth$$$_cleanAccessToken$$($oauthObj$$1$$) {
    for(var $key$$25$$ in $oauthObj$$1$$) {
      $oauthObj$$1$$.hasOwnProperty($key$$25$$) && "auth_header" !== $key$$25$$ && ($oauthObj$$1$$[$key$$25$$] = null, delete $oauthObj$$1$$[$key$$25$$])
    }
  };
  $oj$$1$$.$OAuth$.$_base64_encode$ = function $$oj$$1$$$$OAuth$$$_base64_encode$$($a$$44$$) {
    var $d$$, $e$$22$$, $f$$, $b$$27$$, $g$$ = 0, $h$$4$$ = 0, $c$$15$$ = [];
    do {
      $d$$ = $a$$44$$.charCodeAt($g$$++), $e$$22$$ = $a$$44$$.charCodeAt($g$$++), $f$$ = $a$$44$$.charCodeAt($g$$++), $b$$27$$ = $d$$ << 16 | $e$$22$$ << 8 | $f$$, $d$$ = $b$$27$$ >> 18 & 63, $e$$22$$ = $b$$27$$ >> 12 & 63, $f$$ = $b$$27$$ >> 6 & 63, $b$$27$$ &= 63, $c$$15$$[$h$$4$$++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt($d$$) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt($e$$22$$) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt($f$$) + 
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt($b$$27$$)
    }while($g$$ < $a$$44$$.length);
    $c$$15$$ = $c$$15$$.join("");
    $d$$ = $a$$44$$.length % 3;
    return($d$$ ? $c$$15$$.slice(0, $d$$ - 3) : $c$$15$$) + "\x3d\x3d\x3d".slice($d$$ || 3)
  }
});
