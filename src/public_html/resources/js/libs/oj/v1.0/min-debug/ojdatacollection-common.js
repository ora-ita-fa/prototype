define(["ojs/ojcore", "jquery"], function($oj$$5$$, $$$$5$$) {
  $oj$$5$$.$DataSource$ = function $$oj$$5$$$$DataSource$$($data$$46$$) {
    this.data = $data$$46$$;
    this.$Init$()
  };
  $goog$exportPath_$$("DataSource", $oj$$5$$.$DataSource$, $oj$$5$$);
  $oj$$5$$.$Object$.$createSubclass$($oj$$5$$.$DataSource$, $oj$$5$$.$Object$, "oj.DataSource");
  $oj$$5$$.$DataSource$.prototype.$Init$ = function $$oj$$5$$$$DataSource$$$$Init$$() {
    this.$_eventHandlers$ = [];
    $oj$$5$$.$DataSource$.$superclass$.$Init$.call(this)
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("DataSource.prototype.Init", {$Init$:$oj$$5$$.$DataSource$.prototype.$Init$});
  $oj$$5$$.$DataSource$.prototype.on = function $$oj$$5$$$$DataSource$$$on$($eventType$$21$$, $eventHandler$$) {
    var $foundEventHandler$$ = !1, $i$$99$$;
    for($i$$99$$ = 0;$i$$99$$ < this.$_eventHandlers$.length;$i$$99$$++) {
      if(this.$_eventHandlers$[$i$$99$$].eventType == $eventType$$21$$ && this.$_eventHandlers$[$i$$99$$].eventHandlerFunc == $eventHandler$$) {
        $foundEventHandler$$ = !0;
        break
      }
    }
    $foundEventHandler$$ || this.$_eventHandlers$.push({eventType:$eventType$$21$$, eventHandlerFunc:$eventHandler$$})
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("DataSource.prototype.on", {on:$oj$$5$$.$DataSource$.prototype.on});
  $oj$$5$$.$DataSource$.prototype.off = function $$oj$$5$$$$DataSource$$$off$($eventType$$22$$, $eventHandler$$1$$) {
    var $i$$100$$;
    for($i$$100$$ = this.$_eventHandlers$.length - 1;0 <= $i$$100$$;$i$$100$$--) {
      if(this.$_eventHandlers$[$i$$100$$].eventType == $eventType$$22$$ && this.$_eventHandlers$[$i$$100$$].eventHandlerFunc == $eventHandler$$1$$) {
        this.$_eventHandlers$.splice($i$$100$$, 1);
        break
      }
    }
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("DataSource.prototype.off", {off:$oj$$5$$.$DataSource$.prototype.off});
  $oj$$5$$.$DataSource$.prototype.handleEvent = function $$oj$$5$$$$DataSource$$$handleEvent$($eventType$$23$$, $event$$41$$) {
    var $i$$101$$;
    for($i$$101$$ = 0;$i$$101$$ < this.$_eventHandlers$.length;$i$$101$$++) {
      var $eventHandler$$2$$ = this.$_eventHandlers$[$i$$101$$];
      $eventHandler$$2$$.eventType == $eventType$$23$$ && $eventHandler$$2$$.eventHandlerFunc($event$$41$$)
    }
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("DataSource.prototype.handleEvent", {handleEvent:$oj$$5$$.$DataSource$.prototype.handleEvent});
  $oj$$5$$.$TreeDataSource$ = function $$oj$$5$$$$TreeDataSource$$($data$$47$$) {
    $oj$$5$$.$TreeDataSource$.$superclass$.constructor.call(this, $data$$47$$)
  };
  $goog$exportPath_$$("TreeDataSource", $oj$$5$$.$TreeDataSource$, $oj$$5$$);
  $oj$$5$$.$Object$.$createSubclass$($oj$$5$$.$TreeDataSource$, $oj$$5$$.$DataSource$, "oj.TreeDataSource");
  $oj$$5$$.$TreeDataSource$.prototype.$getChildCount$ = $JSCompiler_returnArg$$(-1);
  $oj$$5$$.$TreeDataSource$.prototype.$fetchChildren$ = function $$oj$$5$$$$TreeDataSource$$$$fetchChildren$$() {
    $oj$$5$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.fetchChildren", {$fetchChildren$:$oj$$5$$.$TreeDataSource$.prototype.$fetchChildren$});
  $oj$$5$$.$TreeDataSource$.prototype.$fetchDescendents$ = function $$oj$$5$$$$TreeDataSource$$$$fetchDescendents$$() {
    $oj$$5$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.fetchDescendents", {$fetchDescendents$:$oj$$5$$.$TreeDataSource$.prototype.$fetchDescendents$});
  $oj$$5$$.$TreeDataSource$.prototype.sort = function $$oj$$5$$$$TreeDataSource$$$sort$() {
    $oj$$5$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.sort", {sort:$oj$$5$$.$TreeDataSource$.prototype.sort});
  $oj$$5$$.$TreeDataSource$.prototype.$getSortCriteria$ = function $$oj$$5$$$$TreeDataSource$$$$getSortCriteria$$() {
    return{key:null, direction:"none"}
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.getSortCriteria", {$getSortCriteria$:$oj$$5$$.$TreeDataSource$.prototype.$getSortCriteria$});
  $oj$$5$$.$TreeDataSource$.prototype.move = function $$oj$$5$$$$TreeDataSource$$$move$() {
    $oj$$5$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.move", {move:$oj$$5$$.$TreeDataSource$.prototype.move});
  $oj$$5$$.$TreeDataSource$.prototype.$moveOK$ = $JSCompiler_returnArg$$("valid");
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.moveOK", {$moveOK$:$oj$$5$$.$TreeDataSource$.prototype.$moveOK$});
  $oj$$5$$.$TreeDataSource$.prototype.$getCapability$ = $JSCompiler_returnArg$$(null);
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.getCapability", {$getCapability$:$oj$$5$$.$TreeDataSource$.prototype.$getCapability$});
  $oj$$5$$.$FlattenedTreeDataSource$ = function $$oj$$5$$$$FlattenedTreeDataSource$$($treeDataSource$$, $options$$174$$) {
    this.$m_wrapped$ = $treeDataSource$$;
    this.$m_options$ = $options$$174$$;
    $oj$$5$$.$FlattenedTreeDataSource$.$superclass$.constructor.call(this)
  };
  $goog$exportPath_$$("FlattenedTreeDataSource", $oj$$5$$.$FlattenedTreeDataSource$, $oj$$5$$);
  $oj$$5$$.$Object$.$createSubclass$($oj$$5$$.$FlattenedTreeDataSource$, $oj$$5$$.$DataSource$, "oj.FlattenedTreeDataSource");
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$Init$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$Init$$() {
    var $expanded$$;
    $oj$$5$$.$FlattenedTreeDataSource$.$superclass$.$Init$.call(this);
    this.$m_wrapped$.on("change", this.$_handleModelEvent$.bind(this));
    this.$m_fetchSize$ = parseInt(this.$m_options$.fetchSize, 10);
    isNaN(this.$m_fetchSize$) && (this.$m_fetchSize$ = 25);
    this.$m_maxCount$ = parseInt(this.$m_options$.maxCount, 10);
    isNaN(this.$m_maxCount$) && (this.$m_maxCount$ = 500);
    $expanded$$ = this.$m_options$.expanded;
    Array.isArray($expanded$$) ? this.$m_expandedKeys$ = $expanded$$ : ("all" === $expanded$$ && (this.$m_collapsedKeys$ = []), this.$m_expandedKeys$ = []);
    this.$m_cache$ = []
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.Init", {$Init$:$oj$$5$$.$FlattenedTreeDataSource$.prototype.$Init$});
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.handleEvent = function $$oj$$5$$$$FlattenedTreeDataSource$$$handleEvent$($eventType$$24$$, $event$$42$$) {
    $oj$$5$$.$FlattenedTreeDataSource$.$superclass$.handleEvent.call(this, $eventType$$24$$, $event$$42$$)
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.handleEvent", {handleEvent:$oj$$5$$.$FlattenedTreeDataSource$.prototype.handleEvent});
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$Destory$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$Destory$$() {
    delete this.$m_cache$;
    delete this.$m_expandedKeys$;
    this.$m_wrapped$.off("change");
    this.$m_wrapped$.$Destory$ && this.$m_wrapped$.$Destory$()
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.Destory", {$Destory$:$oj$$5$$.$FlattenedTreeDataSource$.prototype.$Destory$});
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$getExpandedKeys$ = $JSCompiler_get$$("$m_expandedKeys$");
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.getExpandedKeys", {$getExpandedKeys$:$oj$$5$$.$FlattenedTreeDataSource$.prototype.$getExpandedKeys$});
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$getOption$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$getOption$$($option$$11$$) {
    return null != this.$m_options$ ? this.$m_options$[$option$$11$$] : null
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.getOption", {$getOption$:$oj$$5$$.$FlattenedTreeDataSource$.prototype.$getOption$});
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$getWrappedDataSource$ = $JSCompiler_get$$("$m_wrapped$");
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$fetchRows$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$fetchRows$$($range$$6$$, $callbacks$$8$$) {
    this.$_isExpandAll$() ? this.$_fetchRowsFromDescendents$($range$$6$$, $callbacks$$8$$) : this.$_fetchRowsFromChildren$($range$$6$$, $callbacks$$8$$)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_fetchRowsFromChildren$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_fetchRowsFromChildren$$($range$$7$$, $callbacks$$9$$) {
    var $maxFetchSize_nodeSet_processed$$, $lastEntry$$, $parent$$7$$, $count$$14$$, $index$$79$$, $depth$$5$$;
    if($range$$7$$.start > this.$_getLastIndex$()) {
      $maxFetchSize_nodeSet_processed$$ = this.$_getMaxFetchSize$();
      if(0 > this.$_getLastIndex$()) {
        $range$$7$$.count = Math.min($maxFetchSize_nodeSet_processed$$, $range$$7$$.count);
        this.$m_wrapped$.$fetchChildren$(null, $range$$7$$, {success:function($nodeSet$$1$$) {
          this.$_handleFetchSuccess$($nodeSet$$1$$, null, 0, 0, $callbacks$$9$$)
        }.bind(this)});
        return
      }
      if(0 < $maxFetchSize_nodeSet_processed$$) {
        $lastEntry$$ = this.$_getLastEntry$();
        $parent$$7$$ = $lastEntry$$.parent;
        $count$$14$$ = this.$m_wrapped$.$getChildCount$($parent$$7$$);
        $index$$79$$ = $lastEntry$$.index;
        $depth$$5$$ = $lastEntry$$.depth;
        -1 === $count$$14$$ || $index$$79$$ < $count$$14$$ - 1 ? ($range$$7$$.start = $index$$79$$ + 1, $range$$7$$.count = -1 === $count$$14$$ ? this.$m_fetchSize$ : Math.min($maxFetchSize_nodeSet_processed$$, Math.min(this.$m_fetchSize$, $count$$14$$ - $range$$7$$.start)), this.$m_wrapped$.$fetchChildren$($parent$$7$$, $range$$7$$, {success:function($nodeSet$$2$$) {
          this.$_handleFetchSuccess$($nodeSet$$2$$, $parent$$7$$, $depth$$5$$, $count$$14$$, $callbacks$$9$$)
        }.bind(this)})) : $index$$79$$ === $count$$14$$ - 1 ? ($maxFetchSize_nodeSet_processed$$ = new $oj$$5$$.$EmptyNodeSet$(null, $range$$7$$.start), null != $callbacks$$9$$ && null != $callbacks$$9$$.success && $callbacks$$9$$.success.call(null, $maxFetchSize_nodeSet_processed$$)) : ($maxFetchSize_nodeSet_processed$$ = this.$_fetchFromAncestors$($parent$$7$$, $depth$$5$$, $callbacks$$9$$, $maxFetchSize_nodeSet_processed$$), $maxFetchSize_nodeSet_processed$$ || ($maxFetchSize_nodeSet_processed$$ = 
        new $oj$$5$$.$EmptyNodeSet$(null, $range$$7$$.start), null != $callbacks$$9$$ && null != $callbacks$$9$$.success && $callbacks$$9$$.success.call(null, $maxFetchSize_nodeSet_processed$$)));
        return
      }
    }
    this.$handleMaxCountReached$($range$$7$$, $callbacks$$9$$)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_getMaxFetchSize$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_getMaxFetchSize$$() {
    return this.$m_maxCount$ - (this.$_getLastIndex$() + 1)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_handleFetchSuccess$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_handleFetchSuccess$$($nodeSet$$3$$, $parent$$8_processed$$1$$, $depth$$6$$, $count$$15$$, $callbacks$$10$$) {
    var $toExpand$$;
    $toExpand$$ = [];
    $nodeSet$$3$$ = new $oj$$5$$.$NodeSetWrapper$($nodeSet$$3$$, this.$insertMetadata$.bind(this));
    this.$_processNodeSet$($nodeSet$$3$$, $parent$$8_processed$$1$$, $depth$$6$$, $toExpand$$);
    -1 === $count$$15$$ && 0 === $nodeSet$$3$$.$getCount$() && null != $parent$$8_processed$$1$$ && 0 < $depth$$6$$ ? ($parent$$8_processed$$1$$ = this.$_fetchFromAncestors$($parent$$8_processed$$1$$, $depth$$6$$, $callbacks$$10$$)) || null != $callbacks$$10$$ && null != $callbacks$$10$$.success && $callbacks$$10$$.success.call(null, $nodeSet$$3$$) : (null != $callbacks$$10$$ && null != $callbacks$$10$$.success && $callbacks$$10$$.success.call(null, $nodeSet$$3$$), this.$_expandRows$($toExpand$$))
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_fetchFromAncestors$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_fetchFromAncestors$$($parent$$9$$, $depth$$7$$, $callbacks$$11$$, $maxFetchSize$$1$$) {
    var $options$$175$$, $remainToFetch$$, $i$$102$$, $currEntry_index$$80$$, $currDepth$$, $count$$16$$, $countUnknown$$, $range$$9$$;
    void 0 === $maxFetchSize$$1$$ && ($maxFetchSize$$1$$ = this.$_getMaxFetchSize$());
    this.$_isBatchFetching$() && ($options$$175$$ = {queueOnly:!0});
    $remainToFetch$$ = this.$m_fetchSize$;
    for($i$$102$$ = this.$_getLastIndex$() - 1;0 <= $i$$102$$;$i$$102$$--) {
      if($currEntry_index$$80$$ = this.$_getEntry$($i$$102$$), $currDepth$$ = $currEntry_index$$80$$.depth, $currDepth$$ < $depth$$7$$ && ($parent$$9$$ = $currEntry_index$$80$$.parent, $count$$16$$ = this.$m_wrapped$.$getChildCount$($parent$$9$$), $currEntry_index$$80$$ = $currEntry_index$$80$$.index, ($countUnknown$$ = -1 === $count$$16$$) || $currEntry_index$$80$$ < $count$$16$$ - 1)) {
        $range$$9$$ = {};
        $range$$9$$.start = $currEntry_index$$80$$ + 1;
        $countUnknown$$ ? ($range$$9$$.count = Math.min($maxFetchSize$$1$$, Math.max(0, $remainToFetch$$)), $options$$175$$ = void 0) : $range$$9$$.count = Math.min($maxFetchSize$$1$$, Math.min($remainToFetch$$, $count$$16$$ - $range$$9$$.start));
        if(0 == $range$$9$$.count) {
          break
        }
        this.$m_wrapped$.$fetchChildren$($parent$$9$$, $range$$9$$, {success:function($nodeSet$$4$$) {
          this.$_handleFetchSuccess$($nodeSet$$4$$, $parent$$9$$, $currDepth$$, $count$$16$$, $callbacks$$11$$)
        }.bind(this)}, $options$$175$$);
        $depth$$7$$ = $currDepth$$;
        $remainToFetch$$ = Math.max(0, $remainToFetch$$ - $range$$9$$.count);
        if($countUnknown$$ || 0 === $currDepth$$ || 0 === $remainToFetch$$) {
          break
        }
      }
    }
    void 0 != $options$$175$$ && this.$m_wrapped$.$fetchChildren$($parent$$9$$, {start:$range$$9$$.count, count:0}, {success:function($nodeSet$$5$$) {
      this.$_handleFetchSuccess$($nodeSet$$5$$, $parent$$9$$, $currDepth$$, $count$$16$$, $callbacks$$11$$)
    }.bind(this)});
    return $remainToFetch$$ != this.$m_fetchSize$
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_processNodeSet$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_processNodeSet$$($nodeSet$$6$$, $parent$$10$$, $depth$$8$$, $toExpand$$1$$) {
    var $nodeStart$$, $nodeCount$$, $i$$103$$, $key$$38_metadata$$1$$;
    $nodeStart$$ = $nodeSet$$6$$.$getStart$();
    $nodeCount$$ = $nodeSet$$6$$.$getCount$();
    for($i$$103$$ = 0;$i$$103$$ < $nodeCount$$;$i$$103$$++) {
      $key$$38_metadata$$1$$ = $nodeSet$$6$$.getMetadata($nodeStart$$ + $i$$103$$), $key$$38_metadata$$1$$ = $key$$38_metadata$$1$$.key, this.$_addEntry$($key$$38_metadata$$1$$, $depth$$8$$, $nodeStart$$ + $i$$103$$, $parent$$10$$), this.$_isExpanded$($key$$38_metadata$$1$$) && $toExpand$$1$$.push($key$$38_metadata$$1$$)
    }
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$insertMetadata$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$insertMetadata$$($key$$39$$, $metadata$$2$$) {
    this.$_isExpanded$($key$$39$$) && !$metadata$$2$$.leaf ? $metadata$$2$$.state = "expanded" : $metadata$$2$$.state = $metadata$$2$$.leaf ? "leaf" : "collapsed"
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_fetchRowsFromDescendents$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_fetchRowsFromDescendents$$($range$$10$$, $callbacks$$12$$) {
    var $options$$176$$ = {maxCount:this.$m_maxCount$};
    0 <= this.$_getLastIndex$() && ($options$$176$$.start = this.$_getEntry$(this.$_getLastIndex$()).key);
    this.$m_wrapped$.$fetchDescendents$(null, null, {success:function($nodeSet$$7$$) {
      this.$_handleFetchDescendentsSuccess$($nodeSet$$7$$, $range$$10$$, $callbacks$$12$$)
    }.bind(this)}, $options$$176$$)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_handleFetchDescendentsSuccess$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_handleFetchDescendentsSuccess$$($nodeSet$$8$$, $range$$11$$, $callbacks$$13$$) {
    var $maxFetchSize$$2_options$$177$$, $actualStart_count$$17$$, $lastEntry$$1$$;
    $range$$11$$.start > this.$_getLastIndex$() ? ($maxFetchSize$$2_options$$177$$ = this.$_getMaxFetchSize$(), $actualStart_count$$17$$ = Math.min($maxFetchSize$$2_options$$177$$, $range$$11$$.count), $nodeSet$$8$$ = new $oj$$5$$.$NodeSetWrapper$($nodeSet$$8$$, this.$insertMetadata$.bind(this)), 0 <= this.$_getLastIndex$() ? ($lastEntry$$1$$ = this.$_getLastEntry$(), $maxFetchSize$$2_options$$177$$ = {index:0, found:!1, count:0}, this.$_processDescendentsNodeSet$($nodeSet$$8$$, null, 0, $lastEntry$$1$$, 
    $actualStart_count$$17$$, $maxFetchSize$$2_options$$177$$), $actualStart_count$$17$$ = $maxFetchSize$$2_options$$177$$.index + 1) : ($maxFetchSize$$2_options$$177$$ = {count:0}, this.$_processDescendentsNodeSet$($nodeSet$$8$$, null, 0, null, $actualStart_count$$17$$, $maxFetchSize$$2_options$$177$$), $actualStart_count$$17$$ = 0), null != $callbacks$$13$$ && null != $callbacks$$13$$.success && ($nodeSet$$8$$ = null != $maxFetchSize$$2_options$$177$$ ? 0 === $maxFetchSize$$2_options$$177$$.count ? 
    new $oj$$5$$.$EmptyNodeSet$(null, $range$$11$$.start) : new $oj$$5$$.$FlattenedNodeSet$($nodeSet$$8$$, $actualStart_count$$17$$) : new $oj$$5$$.$FlattenedNodeSet$($nodeSet$$8$$), $callbacks$$13$$.success.call(null, $nodeSet$$8$$))) : this.$handleMaxCountReached$($range$$11$$, $callbacks$$13$$)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_processDescendentsNodeSet$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_processDescendentsNodeSet$$($nodeSet$$9$$, $parent$$11$$, $depth$$9$$, $lastEntry$$2$$, $maxCount$$, $options$$178$$) {
    var $nodeStart$$1$$, $nodeCount$$1$$, $i$$104$$, $childNodeSet_metadata$$3$$, $key$$40$$;
    $nodeStart$$1$$ = $nodeSet$$9$$.$getStart$();
    $nodeCount$$1$$ = $nodeSet$$9$$.$getCount$();
    for($i$$104$$ = 0;$i$$104$$ < $nodeCount$$1$$ && $options$$178$$.count != $maxCount$$;$i$$104$$++) {
      $childNodeSet_metadata$$3$$ = $nodeSet$$9$$.getMetadata($nodeStart$$1$$ + $i$$104$$);
      $key$$40$$ = $childNodeSet_metadata$$3$$.key;
      $options$$178$$.checkDepth && $lastEntry$$2$$.depth === $depth$$9$$ && ($options$$178$$.found = !0, $options$$178$$.checkDepth = !1);
      if(null == $lastEntry$$2$$ || $options$$178$$.found) {
        this.$_addEntry$($key$$40$$, $depth$$9$$, $nodeStart$$1$$ + $i$$104$$, $parent$$11$$), $options$$178$$.count += 1, $childNodeSet_metadata$$3$$.state = $childNodeSet_metadata$$3$$.leaf ? "leaf" : "expanded"
      }
      null == $lastEntry$$2$$ || $options$$178$$.found || ($key$$40$$ === $lastEntry$$2$$.key ? $childNodeSet_metadata$$3$$.leaf || this.$_isExpanded$($key$$40$$) ? $options$$178$$.found = !0 : $options$$178$$.checkDepth = !0 : $options$$178$$.index += 1);
      $nodeSet$$9$$.$getChildNodeSet$ && ($childNodeSet_metadata$$3$$ = $nodeSet$$9$$.$getChildNodeSet$($i$$104$$), null != $childNodeSet_metadata$$3$$ && this.$_processDescendentsNodeSet$($childNodeSet_metadata$$3$$, $key$$40$$, $depth$$9$$ + 1, $lastEntry$$2$$, $maxCount$$, $options$$178$$))
    }
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.expand = function $$oj$$5$$$$FlattenedTreeDataSource$$$expand$($rowKey$$) {
    this.$_expand$($rowKey$$)
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.expand", {expand:$oj$$5$$.$FlattenedTreeDataSource$.prototype.expand});
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_expand$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_expand$$($rowKey$$1$$) {
    var $count$$18$$, $fetchSize$$, $refIndex$$;
    $count$$18$$ = this.$m_wrapped$.$getChildCount$($rowKey$$1$$);
    $fetchSize$$ = Math.min(this.$m_fetchSize$, -1 == $count$$18$$ ? this.$m_fetchSize$ : $count$$18$$);
    if(this.$_getLastIndex$() + 1 === this.$m_maxCount$ && ($refIndex$$ = this.$getIndex$($rowKey$$1$$), $refIndex$$ == this.$m_maxCount$ - 1)) {
      return
    }
    0 != $fetchSize$$ && (this.$m_wrapped$.$fetchChildren$($rowKey$$1$$, {start:0, count:$fetchSize$$}, {success:function($nodeSet$$10$$) {
      this.$handleExpandSuccess$($rowKey$$1$$, $nodeSet$$10$$, $count$$18$$)
    }.bind(this)}, {success:this}), this.handleEvent("expand", {rowKey:$rowKey$$1$$}))
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.collapse = function $$oj$$5$$$$FlattenedTreeDataSource$$$collapse$($rowKey$$2$$) {
    var $rowIndex$$, $depth$$10_i$$105_parent$$12$$, $count$$19$$, $keys$$3_lastIndex$$, $j$$16$$;
    $rowIndex$$ = this.$getIndex$($rowKey$$2$$) + 1;
    $depth$$10_i$$105_parent$$12$$ = this.$_getEntry$($rowIndex$$ - 1);
    $count$$19$$ = 0;
    $depth$$10_i$$105_parent$$12$$ = $depth$$10_i$$105_parent$$12$$.depth;
    $keys$$3_lastIndex$$ = this.$_getLastIndex$();
    for($j$$16$$ = $rowIndex$$;$j$$16$$ < $keys$$3_lastIndex$$ + 1;$j$$16$$++) {
      var $rowDepth$$ = this.$_getEntry$($j$$16$$).depth;
      if($rowDepth$$ > $depth$$10_i$$105_parent$$12$$) {
        $count$$19$$ += 1
      }else {
        if($rowDepth$$ == $depth$$10_i$$105_parent$$12$$) {
          break
        }
      }
    }
    if(0 != $count$$19$$) {
      this.$_isExpandAll$() ? this.$m_collapsedKeys$.push($rowKey$$2$$) : this.$_removeExpanded$($rowKey$$2$$);
      $keys$$3_lastIndex$$ = [];
      for($depth$$10_i$$105_parent$$12$$ = 0;$depth$$10_i$$105_parent$$12$$ < $count$$19$$;$depth$$10_i$$105_parent$$12$$++) {
        $keys$$3_lastIndex$$.push({row:this.$_getEntry$($rowIndex$$ + $depth$$10_i$$105_parent$$12$$).key})
      }
      this.$_removeEntry$($rowIndex$$, $count$$19$$);
      this.$removeRows$($keys$$3_lastIndex$$);
      this.handleEvent("collapse", {rowKey:$rowKey$$2$$})
    }
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.collapse", {collapse:$oj$$5$$.$FlattenedTreeDataSource$.prototype.collapse});
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_isExpanded$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_isExpanded$$($rowKey$$3$$) {
    return this.$_isExpandAll$() ? this.$m_collapsedKeys$ && 0 < this.$m_collapsedKeys$.length ? -1 === this.$_getCollapsedKeyIndex$($rowKey$$3$$) : !0 : this.$m_expandedKeys$ && 0 < this.$m_expandedKeys$.length ? -1 < this.$_getExpandedKeyIndex$($rowKey$$3$$) : !1
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_getCollapsedKeyIndex$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_getCollapsedKeyIndex$$($rowKey$$4$$) {
    return this.$_getKeyIndex$(this.$m_collapsedKeys$, $rowKey$$4$$)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_getExpandedKeyIndex$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_getExpandedKeyIndex$$($rowKey$$5$$) {
    return this.$_getKeyIndex$(this.$m_expandedKeys$, $rowKey$$5$$)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_getKeyIndex$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_getKeyIndex$$($arr$$21$$, $rowKey$$6$$) {
    var $i$$106$$, $index$$81$$;
    $index$$81$$ = -1;
    for($i$$106$$ = 0;$i$$106$$ < $arr$$21$$.length;$i$$106$$++) {
      $arr$$21$$[$i$$106$$] === $rowKey$$6$$ && ($index$$81$$ = $i$$106$$)
    }
    return $index$$81$$
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_removeExpanded$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_removeExpanded$$($index$$82_rowKey$$7$$) {
    $index$$82_rowKey$$7$$ = this.$_getExpandedKeyIndex$($index$$82_rowKey$$7$$);
    -1 < $index$$82_rowKey$$7$$ && this.$m_expandedKeys$.splice($index$$82_rowKey$$7$$, 1)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_removeCollapsed$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_removeCollapsed$$($index$$83_rowKey$$8$$) {
    $index$$83_rowKey$$8$$ = this.$_getCollapsedKeyIndex$($index$$83_rowKey$$8$$);
    -1 < $index$$83_rowKey$$8$$ && this.$m_collapsedKeys$.splice($index$$83_rowKey$$8$$, 1)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$handleExpandSuccess$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$handleExpandSuccess$$($rowKey$$9$$, $nodeSet$$11$$, $origCount$$) {
    var $refIndex$$1$$, $rangeStart$$, $metadata$$4_rowStart$$, $rowCount$$, $parent$$13$$, $depth$$11$$, $key$$41$$, $toExpand$$2$$, $i$$107$$;
    $nodeSet$$11$$ = new $oj$$5$$.$NodeSetWrapper$($nodeSet$$11$$, this.$insertMetadata$.bind(this));
    $rangeStart$$ = $refIndex$$1$$ = this.$getIndex$($rowKey$$9$$) + 1;
    $metadata$$4_rowStart$$ = $nodeSet$$11$$.$getStart$();
    $rowCount$$ = $nodeSet$$11$$.$getCount$();
    $parent$$13$$ = this.$_getEntry$($refIndex$$1$$ - 1);
    $depth$$11$$ = $parent$$13$$.depth + 1;
    $toExpand$$2$$ = [];
    for($i$$107$$ = $metadata$$4_rowStart$$;$i$$107$$ < $rowCount$$;$i$$107$$++) {
      $metadata$$4_rowStart$$ = $nodeSet$$11$$.getMetadata($i$$107$$), $key$$41$$ = $metadata$$4_rowStart$$.key, this.$_isExpanded$($key$$41$$) && $toExpand$$2$$.push($key$$41$$), this.$_insertRow$($refIndex$$1$$, $metadata$$4_rowStart$$, $parent$$13$$.key, $i$$107$$, $depth$$11$$), $refIndex$$1$$++
    }
    this.$_isExpandAll$() ? this.$_removeCollapsed$($rowKey$$9$$) : -1 === this.$m_expandedKeys$.indexOf($rowKey$$9$$) && this.$m_expandedKeys$.push($rowKey$$9$$);
    this.$insertRows$($rangeStart$$, $rowKey$$9$$, $nodeSet$$11$$);
    -1 === $origCount$$ && $rowCount$$ === this.$m_fetchSize$ || $origCount$$ > $rowCount$$ || $refIndex$$1$$ == this.$m_maxCount$ ? this.$_deleteAllRowsBelow$($refIndex$$1$$) : this.$_getLastIndex$() >= this.$m_maxCount$ && this.$_deleteAllRowsBelow$(this.$m_maxCount$);
    this.$_expandRows$($toExpand$$2$$)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_expandRows$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_expandRows$$($keys$$4$$) {
    var $options$$180$$, $i$$108$$;
    this.$_isBatchFetching$() && ($options$$180$$ = {queueOnly:!0});
    for($i$$108$$ = 0;$i$$108$$ < $keys$$4$$.length;$i$$108$$++) {
      $i$$108$$ == $keys$$4$$.length - 1 ? this.$_expand$($keys$$4$$[$i$$108$$]) : this.$_expand$($keys$$4$$[$i$$108$$], $options$$180$$)
    }
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_insertRow$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_insertRow$$($index$$84$$, $key$$42_metadata$$5$$, $parentKey$$, $childIndex$$, $depth$$12$$) {
    $key$$42_metadata$$5$$ = $key$$42_metadata$$5$$.key;
    $index$$84$$ <= this.$_getLastIndex$() ? this.$_addEntry$($key$$42_metadata$$5$$, $depth$$12$$, $childIndex$$, $parentKey$$, $index$$84$$) : this.$_addEntry$($key$$42_metadata$$5$$, $depth$$12$$, $childIndex$$, $parentKey$$)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_deleteAllRowsBelow$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_deleteAllRowsBelow$$($index$$85$$, $count$$20$$) {
    var $keys$$5$$;
    void 0 == $count$$20$$ && ($count$$20$$ = this.$_getLastIndex$() + 1 - $index$$85$$);
    $keys$$5$$ = [];
    for(var $i$$109$$ = 0;$i$$109$$ < $count$$20$$;$i$$109$$++) {
      $keys$$5$$.push({row:this.$_getEntry$($index$$85$$ + $i$$109$$).key})
    }
    this.$_removeEntry$($index$$85$$, $count$$20$$);
    this.$removeRows$($keys$$5$$)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_handleModelEvent$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_handleModelEvent$$($event$$44$$) {
    var $operation$$4$$, $ancestors_parentKey$$1$$, $index$$86$$;
    $operation$$4$$ = $event$$44$$.operation;
    $ancestors_parentKey$$1$$ = $event$$44$$.parent;
    $ancestors_parentKey$$1$$ = Array.isArray($ancestors_parentKey$$1$$) ? $ancestors_parentKey$$1$$[$ancestors_parentKey$$1$$.length - 1] : $ancestors_parentKey$$1$$;
    $index$$86$$ = $event$$44$$.index;
    "insert" === $operation$$4$$ ? this.$_handleInsertEvent$($ancestors_parentKey$$1$$, $index$$86$$, $event$$44$$.data) : "delete" === $operation$$4$$ ? this.$_handleDeleteEvent$($ancestors_parentKey$$1$$, $index$$86$$) : "refresh" === $operation$$4$$ && this.$_handleRefreshEvent$($ancestors_parentKey$$1$$)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_handleInsertEvent$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_handleInsertEvent$$($parentKey$$2$$, $index$$87$$, $metadata$$6_nodeSet$$12$$) {
    var $insertIndex_parentIndex$$, $depth$$13$$;
    $insertIndex_parentIndex$$ = this.$getIndex$($parentKey$$2$$);
    $depth$$13$$ = this.$_getEntry$($insertIndex_parentIndex$$).depth + 1;
    $insertIndex_parentIndex$$ = $insertIndex_parentIndex$$ + $index$$87$$ + 1;
    $metadata$$6_nodeSet$$12$$ = $metadata$$6_nodeSet$$12$$.getMetadata($metadata$$6_nodeSet$$12$$.$getStart$());
    this.$_insertRow$($insertIndex_parentIndex$$, $metadata$$6_nodeSet$$12$$, $parentKey$$2$$, $index$$87$$, $depth$$13$$)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_handleDeleteEvent$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_handleDeleteEvent$$($parentKey$$3$$, $index$$88$$) {
    var $parentIndex$$1_startIndex$$, $currentIndex_parent$$15$$, $start$$17$$, $lastIndex$$1$$, $current$$4$$;
    $parentIndex$$1_startIndex$$ = this.$getIndex$($parentKey$$3$$);
    $currentIndex_parent$$15$$ = this.$_getEntry$($parentIndex$$1_startIndex$$);
    $parentIndex$$1_startIndex$$ += $index$$88$$;
    $start$$17$$ = this.$_getEntry$($parentIndex$$1_startIndex$$);
    $oj$$5$$.$Assert$.assert($start$$17$$.parent === $currentIndex_parent$$15$$ && $start$$17$$.depth === $currentIndex_parent$$15$$.depth + 1);
    $currentIndex_parent$$15$$ = $parentIndex$$1_startIndex$$ + 1;
    for($lastIndex$$1$$ = this.$_getLastIndex$();$currentIndex_parent$$15$$ <= $lastIndex$$1$$;) {
      $current$$4$$ = this.$_getEntry$($currentIndex_parent$$15$$);
      if($current$$4$$.depth != $start$$17$$.depth) {
        break
      }
      $currentIndex_parent$$15$$++
    }
    this.$_deleteAllRowsBelow$($parentIndex$$1_startIndex$$, 1)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_handleRefreshEvent$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_handleRefreshEvent$$($parentKey$$4$$) {
    null == $parentKey$$4$$ && this.refresh()
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_isExpandAll$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_isExpandAll$$() {
    var $capability$$ = this.$m_wrapped$.$getCapability$("fetchDescendents");
    return void 0 != this.$m_collapsedKeys$ && null != $capability$$ && "disable" != $capability$$
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_isBatchFetching$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_isBatchFetching$$() {
    return"enable" === this.$m_wrapped$.$getCapability$("batchFetch")
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.refresh = function $$oj$$5$$$$FlattenedTreeDataSource$$$refresh$() {
    this.$_clearAll$()
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$getIndex$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$getIndex$$($rowKey$$10$$) {
    var $lastIndex$$2$$, $i$$110$$, $rowData$$2$$;
    $lastIndex$$2$$ = this.$_getLastIndex$();
    for($i$$110$$ = 0;$i$$110$$ <= $lastIndex$$2$$;$i$$110$$++) {
      if($rowData$$2$$ = this.$_getEntry$($i$$110$$), $rowData$$2$$.key == $rowKey$$10$$) {
        return $i$$110$$
      }
    }
    return-1
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.getKey = function $$oj$$5$$$$FlattenedTreeDataSource$$$getKey$($index$$89$$) {
    return 0 > $index$$89$$ || $index$$89$$ > this.$_getLastIndex$() ? null : this.$_getEntry$($index$$89$$).key
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$getFetchedRange$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$getFetchedRange$$() {
    return{start:0, end:this.$_getLastIndex$() + 1}
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$handleMaxCountReached$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$handleMaxCountReached$$($range$$12$$, $callbacks$$14$$) {
    null != $callbacks$$14$$ && null != $callbacks$$14$$.error && $callbacks$$14$$.error.call(null)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$insertRows$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$insertRows$$() {
    $oj$$5$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$removeRows$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$removeRows$$() {
    $oj$$5$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_getLastIndex$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_getLastIndex$$() {
    return this.$m_cache$.length - 1
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_getLastEntry$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_getLastEntry$$() {
    return this.$m_cache$[this.$_getLastIndex$()]
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_getEntry$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_getEntry$$($index$$90$$) {
    return this.$m_cache$[$index$$90$$]
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_addEntry$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_addEntry$$($key$$43$$, $depth$$14$$, $index$$91$$, $parent$$16$$, $insertAt$$) {
    var $rowData$$3$$ = {};
    $rowData$$3$$.key = $key$$43$$;
    $rowData$$3$$.depth = $depth$$14$$;
    $rowData$$3$$.index = $index$$91$$;
    $rowData$$3$$.parent = $parent$$16$$;
    void 0 === $insertAt$$ ? this.$m_cache$.push($rowData$$3$$) : this.$m_cache$.splice($insertAt$$, 0, $rowData$$3$$)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_removeEntry$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_removeEntry$$($index$$92$$, $count$$22$$) {
    this.$m_cache$.splice($index$$92$$, $count$$22$$)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_clearAll$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_clearAll$$() {
    this.$m_cache$.length = 0
  };
  $oj$$5$$.$_JsonTreeNodeDataSource$ = function $$oj$$5$$$$_JsonTreeNodeDataSource$$() {
    this.id = null;
    this.depth = 0;
    this.parent = null;
    this.children = [];
    this.$leaf$ = this.attr = this.title = null
  };
  $oj$$5$$.$_JsonTreeNodeDataSource$.prototype.$_ascending$ = function $$oj$$5$$$$_JsonTreeNodeDataSource$$$$_ascending$$($key$$44$$) {
    return function($a$$48$$, $b$$34$$) {
      return $a$$48$$.attr && $b$$34$$.attr && $a$$48$$.attr[$key$$44$$] && $b$$34$$.attr[$key$$44$$] ? $a$$48$$.attr[$key$$44$$] < $b$$34$$.attr[$key$$44$$] ? 0 : 1 : $a$$48$$[$key$$44$$] < $b$$34$$[$key$$44$$] ? 0 : 1
    }
  };
  $oj$$5$$.$_JsonTreeNodeDataSource$.prototype.$_descending$ = function $$oj$$5$$$$_JsonTreeNodeDataSource$$$$_descending$$($key$$45$$) {
    return function($a$$49$$, $b$$35$$) {
      return $a$$49$$.attr && $b$$35$$.attr && $a$$49$$.attr[$key$$45$$] && $b$$35$$.attr[$key$$45$$] ? $a$$49$$.attr[$key$$45$$] < $b$$35$$.attr[$key$$45$$] ? 1 : 0 : $a$$49$$[$key$$45$$] < $b$$35$$[$key$$45$$] ? 1 : 0
    }
  };
  $oj$$5$$.$_JsonTreeNodeDataSource$.prototype.$_sortRecursive$ = function $$oj$$5$$$$_JsonTreeNodeDataSource$$$$_sortRecursive$$($criteria$$1$$) {
    var $i$$111_key$$46$$ = $criteria$$1$$.key;
    "ascending" === $criteria$$1$$.direction ? this.children.sort(this.$_ascending$($i$$111_key$$46$$)) : "descending" === $criteria$$1$$.direction && this.children.sort(this.$_descending$($i$$111_key$$46$$));
    for(var $i$$111_key$$46$$ = 0, $l$$3$$ = this.children.length;$i$$111_key$$46$$ < $l$$3$$;$i$$111_key$$46$$++) {
      this.children[$i$$111_key$$46$$].$_sortRecursive$($criteria$$1$$)
    }
  };
  $oj$$5$$.$JsonTreeDataSource$ = function $$oj$$5$$$$JsonTreeDataSource$$($data$$48$$) {
    var $tree$$;
    $tree$$ = new $oj$$5$$.$_JsonTreeNodeDataSource$;
    $data$$48$$.id || ($tree$$.id = "root");
    this.data = this.$_createTreeDataSource$($tree$$, $data$$48$$);
    $oj$$5$$.$JsonTreeDataSource$.$superclass$.constructor.call(this, $tree$$)
  };
  $goog$exportPath_$$("JsonTreeDataSource", $oj$$5$$.$JsonTreeDataSource$, $oj$$5$$);
  $oj$$5$$.$Object$.$createSubclass$($oj$$5$$.$JsonTreeDataSource$, $oj$$5$$.$TreeDataSource$, "oj.JsonTreeDataSource");
  $oj$$5$$.$JsonTreeDataSource$.prototype.$Init$ = function $$oj$$5$$$$JsonTreeDataSource$$$$Init$$() {
    $oj$$5$$.$JsonTreeDataSource$.$superclass$.$Init$.call(this)
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.Init", {$Init$:$oj$$5$$.$JsonTreeDataSource$.prototype.$Init$});
  $oj$$5$$.$JsonTreeDataSource$.prototype.$_createTreeDataSource$ = function $$oj$$5$$$$JsonTreeDataSource$$$$_createTreeDataSource$$($target$$82$$, $source$$6$$, $depth$$15$$) {
    var $children$$1$$, $node$$9$$, $child$$2$$, $prop$$56$$, $propr$$, $prp$$, $j$$17$$;
    $depth$$15$$ || ($depth$$15$$ = 0);
    for($prop$$56$$ in $source$$6$$) {
      if("children" == $prop$$56$$ || 0 == $depth$$15$$ && $source$$6$$ instanceof Array) {
        for($children$$1$$ = 0 == $depth$$15$$ && $source$$6$$ instanceof Array ? $source$$6$$ : $source$$6$$[$prop$$56$$], $depth$$15$$++, $j$$17$$ = 0;$j$$17$$ < $children$$1$$.length;$j$$17$$++) {
          $child$$2$$ = $children$$1$$[$j$$17$$];
          $node$$9$$ = new $oj$$5$$.$_JsonTreeNodeDataSource$;
          $child$$2$$.id || ($child$$2$$.attr ? $child$$2$$.attr.id || ($child$$2$$.attr.id = "rid_" + Math.floor(1E3 * Math.random() + 1)) : $node$$9$$.id = "rid_" + Math.floor(1E3 * Math.random() + 1));
          for($propr$$ in $child$$2$$) {
            for($prp$$ in $node$$9$$) {
              $propr$$ == $prp$$ && "children" != $propr$$ && ($node$$9$$[$prp$$] = $child$$2$$[$propr$$]), "depth" == $prp$$ && ($node$$9$$[$prp$$] = $depth$$15$$)
            }
          }
          $target$$82$$.children.push($node$$9$$);
          for($prp$$ in $child$$2$$) {
            "children" == $prp$$ && this.$_createTreeDataSource$($target$$82$$.children[$j$$17$$], $child$$2$$, $depth$$15$$)
          }
        }
      }
    }
    return $target$$82$$
  };
  $oj$$5$$.$JsonTreeDataSource$.prototype.$getChildCount$ = function $$oj$$5$$$$JsonTreeDataSource$$$$getChildCount$$($parent$$17_parentKey$$5$$) {
    $parent$$17_parentKey$$5$$ || ($parent$$17_parentKey$$5$$ = this.data.id);
    $parent$$17_parentKey$$5$$ = this.$_searchTreeById$(this.data, $parent$$17_parentKey$$5$$);
    return $parent$$17_parentKey$$5$$.children ? $parent$$17_parentKey$$5$$.children.length : null
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.getChildCount", {$getChildCount$:$oj$$5$$.$JsonTreeDataSource$.prototype.$getChildCount$});
  $oj$$5$$.$JsonTreeDataSource$.prototype.$fetchChildren$ = function $$oj$$5$$$$JsonTreeDataSource$$$$fetchChildren$$($nodeSet$$14_parentKey$$6$$, $i$$112_range$$13$$, $callbacks$$15$$) {
    var $childStart$$, $childEnd$$, $results$$, $parent$$18$$, $node$$10$$;
    $results$$ = [];
    $nodeSet$$14_parentKey$$6$$ || ($nodeSet$$14_parentKey$$6$$ = this.data.id);
    $parent$$18$$ = this.$_searchTreeById$(this.data, $nodeSet$$14_parentKey$$6$$);
    $i$$112_range$$13$$ || ($i$$112_range$$13$$ = [], $i$$112_range$$13$$.start = 0, $i$$112_range$$13$$.count = $parent$$18$$.children.length);
    $i$$112_range$$13$$.count || ($i$$112_range$$13$$.count = $parent$$18$$.children.length);
    $i$$112_range$$13$$.start || ($i$$112_range$$13$$.start = 0);
    $childStart$$ = $i$$112_range$$13$$.start;
    $childEnd$$ = Math.min($parent$$18$$.children.length, $childStart$$ + $i$$112_range$$13$$.count);
    for($i$$112_range$$13$$ = $childStart$$;$i$$112_range$$13$$ < $childEnd$$;$i$$112_range$$13$$ += 1) {
      $node$$10$$ = new $oj$$5$$.$_JsonTreeNodeDataSource$, $parent$$18$$.children[$i$$112_range$$13$$].attr && ($node$$10$$.attr = $parent$$18$$.children[$i$$112_range$$13$$].attr), $parent$$18$$.children[$i$$112_range$$13$$].id && ($node$$10$$.id = $parent$$18$$.children[$i$$112_range$$13$$].id), $parent$$18$$.children[$i$$112_range$$13$$].depth && ($node$$10$$.depth = $parent$$18$$.children[$i$$112_range$$13$$].depth), $parent$$18$$.children[$i$$112_range$$13$$].title && ($node$$10$$.title = $parent$$18$$.children[$i$$112_range$$13$$].title), 
      $parent$$18$$.children[$i$$112_range$$13$$].parent && ($node$$10$$.parent = $parent$$18$$.children[$i$$112_range$$13$$].parent), $node$$10$$.$leaf$ = 0 < $parent$$18$$.children[$i$$112_range$$13$$].children.length ? !1 : !0, $results$$.push($node$$10$$)
    }
    $nodeSet$$14_parentKey$$6$$ = new $oj$$5$$.$JsonNodeSet$($childStart$$, $childEnd$$, $results$$, $nodeSet$$14_parentKey$$6$$, $parent$$18$$.depth);
    null != $callbacks$$15$$ && null != $callbacks$$15$$.success && $callbacks$$15$$.success.call(null, $nodeSet$$14_parentKey$$6$$)
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.fetchChildren", {$fetchChildren$:$oj$$5$$.$JsonTreeDataSource$.prototype.$fetchChildren$});
  $oj$$5$$.$JsonTreeDataSource$.prototype.$fetchDescendents$ = function $$oj$$5$$$$JsonTreeDataSource$$$$fetchDescendents$$($nodeSet$$15_parentKey$$7$$, $childEnd$$1_range$$14$$, $callbacks$$16$$) {
    var $childStart$$1_i$$113$$, $results$$1$$, $parent$$19$$;
    $results$$1$$ = [];
    $nodeSet$$15_parentKey$$7$$ || ($nodeSet$$15_parentKey$$7$$ = this.data.id);
    $parent$$19$$ = this.$_searchTreeById$(this.data, $nodeSet$$15_parentKey$$7$$);
    $childEnd$$1_range$$14$$ || ($childEnd$$1_range$$14$$ = [], $childEnd$$1_range$$14$$.start = 0, $childEnd$$1_range$$14$$.count = $parent$$19$$.children.length);
    $childEnd$$1_range$$14$$.count || ($childEnd$$1_range$$14$$.count = $parent$$19$$.children.length);
    $childEnd$$1_range$$14$$.start || ($childEnd$$1_range$$14$$.start = 0);
    $childStart$$1_i$$113$$ = $childEnd$$1_range$$14$$.start;
    for($childEnd$$1_range$$14$$ = Math.min($parent$$19$$.children.length, $childStart$$1_i$$113$$ + $childEnd$$1_range$$14$$.count);$childStart$$1_i$$113$$ < $childEnd$$1_range$$14$$;$childStart$$1_i$$113$$ += 1) {
      $parent$$19$$.children[$childStart$$1_i$$113$$].$leaf$ = 0 < $parent$$19$$.children[$childStart$$1_i$$113$$].children.length ? !1 : !0, $results$$1$$.push($parent$$19$$.children[$childStart$$1_i$$113$$])
    }
    $nodeSet$$15_parentKey$$7$$ = new $oj$$5$$.$JsonNodeSet$(0, $results$$1$$.length, $results$$1$$, $nodeSet$$15_parentKey$$7$$, $parent$$19$$.depth);
    null != $callbacks$$16$$ && null != $callbacks$$16$$.success && $callbacks$$16$$.success.call(null, $nodeSet$$15_parentKey$$7$$)
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.fetchDescendents", {$fetchDescendents$:$oj$$5$$.$JsonTreeDataSource$.prototype.$fetchDescendents$});
  $oj$$5$$.$JsonTreeDataSource$.prototype.move = function $$oj$$5$$$$JsonTreeDataSource$$$move$($moveNode_nodeToMove$$, $refNode$$8_referenceNode$$, $index$$93_position$$4$$, $callbacks$$17$$) {
    var $parent$$20_refNodeKey$$;
    $parent$$20_refNodeKey$$ = $refNode$$8_referenceNode$$;
    if(!$parent$$20_refNodeKey$$ || $parent$$20_refNodeKey$$ == this.data.id) {
      if("inside" != $index$$93_position$$4$$) {
        console.log("Error: root can not be the reference node if position equals to " + $index$$93_position$$4$$);
        return
      }
      $parent$$20_refNodeKey$$ || ($parent$$20_refNodeKey$$ = this.data.id)
    }
    $moveNode_nodeToMove$$ = this.$_searchTreeById$(null, $moveNode_nodeToMove$$);
    this.$_searchTreeById$($moveNode_nodeToMove$$, $parent$$20_refNodeKey$$) ? console.log("Error: the node to move contains the reference node as its sub-tree.") : ($refNode$$8_referenceNode$$ = this.$_searchTreeById$(null, $parent$$20_refNodeKey$$), $parent$$20_refNodeKey$$ = this.$_getParentById$($parent$$20_refNodeKey$$), this.$_removeFromTree$($moveNode_nodeToMove$$), "inside" == $index$$93_position$$4$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - ($refNode$$8_referenceNode$$.depth + 
    1)), $refNode$$8_referenceNode$$.children.push($moveNode_nodeToMove$$)) : "before" == $index$$93_position$$4$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$.depth), $index$$93_position$$4$$ = $parent$$20_refNodeKey$$.children.indexOf($refNode$$8_referenceNode$$), -1 < $index$$93_position$$4$$ && (0 != $index$$93_position$$4$$ ? $parent$$20_refNodeKey$$.children.splice($index$$93_position$$4$$ - 1, 0, $moveNode_nodeToMove$$) : $parent$$20_refNodeKey$$.children.unshift($moveNode_nodeToMove$$))) : 
    "after" == $index$$93_position$$4$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$.depth), $index$$93_position$$4$$ = $parent$$20_refNodeKey$$.children.indexOf($refNode$$8_referenceNode$$), -1 < $index$$93_position$$4$$ && $parent$$20_refNodeKey$$.children.splice($index$$93_position$$4$$, 0, $moveNode_nodeToMove$$)) : "first" == $index$$93_position$$4$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$.depth), 
    $parent$$20_refNodeKey$$.children.unshift($moveNode_nodeToMove$$)) : "last" == $index$$93_position$$4$$ && (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$.depth), $parent$$20_refNodeKey$$.children.push($moveNode_nodeToMove$$)), null != $callbacks$$17$$ && null != $callbacks$$17$$.success && $callbacks$$17$$.success.call(null, this.data))
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.move", {move:$oj$$5$$.$JsonTreeDataSource$.prototype.move});
  $oj$$5$$.$JsonTreeDataSource$.prototype.sort = function $$oj$$5$$$$JsonTreeDataSource$$$sort$($criteria$$2$$, $callbacks$$18$$) {
    var $parent$$21$$;
    $parent$$21$$ = this.$_searchTreeById$(this.data, this.data.id);
    $parent$$21$$.$_sortRecursive$($criteria$$2$$);
    null != $callbacks$$18$$ && null != $callbacks$$18$$.success && $callbacks$$18$$.success.call(null, $parent$$21$$)
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.sort", {sort:$oj$$5$$.$JsonTreeDataSource$.prototype.sort});
  $oj$$5$$.$JsonTreeDataSource$.prototype.$_getParentById$ = function $$oj$$5$$$$JsonTreeDataSource$$$$_getParentById$$($refNodeKey$$1$$, $currNode$$) {
    var $i$$114$$, $parent$$22$$ = null;
    if($refNodeKey$$1$$ == this.data.id) {
      return null
    }
    $currNode$$ || ($currNode$$ = this.data);
    if($currNode$$.children && 0 < $currNode$$.children.length) {
      for($i$$114$$ = 0;$i$$114$$ < $currNode$$.children.length;$i$$114$$++) {
        if($currNode$$.children[$i$$114$$].id && $currNode$$.children[$i$$114$$].id == $refNodeKey$$1$$ || $currNode$$.children[$i$$114$$].attr && $currNode$$.children[$i$$114$$].attr.id == $refNodeKey$$1$$) {
          return $currNode$$
        }
      }
      for($i$$114$$ = 0;$i$$114$$ < $currNode$$.children.length && !($parent$$22$$ = this.$_getParentById$($refNodeKey$$1$$, $currNode$$.children[$i$$114$$]));$i$$114$$++) {
      }
    }
    return $parent$$22$$
  };
  $oj$$5$$.$JsonTreeDataSource$.prototype.$_searchTreeById$ = function $$oj$$5$$$$JsonTreeDataSource$$$$_searchTreeById$$($currChild$$, $parentKey$$9$$) {
    var $i$$115$$, $result$$10$$ = null;
    $currChild$$ || ($currChild$$ = this.data);
    if($currChild$$.id && $currChild$$.id == $parentKey$$9$$ || $currChild$$.attr && $currChild$$.attr.id == $parentKey$$9$$) {
      return $currChild$$
    }
    if(null != $currChild$$.children) {
      for($i$$115$$ = 0;$i$$115$$ < $currChild$$.children.length && !$result$$10$$;$i$$115$$++) {
        $result$$10$$ = $currChild$$.children[$i$$115$$].id && $currChild$$.children[$i$$115$$].id == $parentKey$$9$$ || $currChild$$.children[$i$$115$$].attr && $currChild$$.children[$i$$115$$].attr.id == $parentKey$$9$$ ? $currChild$$.children[$i$$115$$] : this.$_searchTreeById$($currChild$$.children[$i$$115$$], $parentKey$$9$$)
      }
    }
    return $result$$10$$
  };
  $oj$$5$$.$JsonTreeDataSource$.prototype.$_updateDepth$ = function $$oj$$5$$$$JsonTreeDataSource$$$$_updateDepth$$($currChild$$1$$, $offset$$16$$) {
    var $i$$116$$;
    $currChild$$1$$.depth -= $offset$$16$$;
    if($currChild$$1$$.children && 0 != $currChild$$1$$.children.length) {
      for($i$$116$$ = 0;$i$$116$$ < $currChild$$1$$.children.length;$i$$116$$++) {
        this.$_updateDepth$($currChild$$1$$.children[$i$$116$$], $offset$$16$$)
      }
    }
  };
  $oj$$5$$.$JsonTreeDataSource$.prototype.$_removeFromTree$ = function $$oj$$5$$$$JsonTreeDataSource$$$$_removeFromTree$$($currChild$$2_index$$94$$) {
    var $key$$47_parent$$23$$;
    $currChild$$2_index$$94$$.id ? $key$$47_parent$$23$$ = $currChild$$2_index$$94$$.id : $currChild$$2_index$$94$$.attr && ($key$$47_parent$$23$$ = $currChild$$2_index$$94$$.attr.id);
    ($key$$47_parent$$23$$ = this.$_getParentById$($key$$47_parent$$23$$)) || ($key$$47_parent$$23$$ = this.data);
    $currChild$$2_index$$94$$ = $key$$47_parent$$23$$.children.indexOf($currChild$$2_index$$94$$);
    -1 < $currChild$$2_index$$94$$ && $key$$47_parent$$23$$.children.splice($currChild$$2_index$$94$$, 1)
  };
  $oj$$5$$.$JsonTreeDataSource$.prototype.$getCapability$ = function $$oj$$5$$$$JsonTreeDataSource$$$$getCapability$$($feature$$5$$) {
    return"fetchDescendents" === $feature$$5$$ ? "enable" : "sort" === $feature$$5$$ ? "default" : "batchFetch" === $feature$$5$$ ? "disable" : null
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.getCapability", {$getCapability$:$oj$$5$$.$JsonTreeDataSource$.prototype.$getCapability$});
  $oj$$5$$.$Row$ = function $$oj$$5$$$$Row$$($attributes$$13$$, $options$$182$$) {
    $oj$$5$$.$Row$._init(this, $attributes$$13$$, $options$$182$$, null)
  };
  $goog$exportPath_$$("Row", $oj$$5$$.$Row$, $oj$$5$$);
  $oj$$5$$.$Object$.$createSubclass$($oj$$5$$.$Row$, $oj$$5$$.$Object$, "Row.Row");
  $oj$$5$$.$Row$.prototype.$Init$ = function $$oj$$5$$$$Row$$$$Init$$() {
    $oj$$5$$.$Row$.$superclass$.$Init$.call(this)
  };
  $oj$$5$$.$Row$.prototype.attributes = {};
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("Row.prototype.attributes", {attributes:$oj$$5$$.$Row$.prototype.attributes});
  $oj$$5$$.$Row$.prototype.context = {};
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("Row.prototype.context", {context:$oj$$5$$.$Row$.prototype.context});
  $oj$$5$$.$Row$.prototype.id = null;
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("Row.prototype.id", {id:$oj$$5$$.$Row$.prototype.id});
  $oj$$5$$.$Row$.prototype.$idAttribute$ = null;
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("Row.prototype.idAttribute", {$idAttribute$:$oj$$5$$.$Row$.prototype.$idAttribute$});
  $oj$$5$$.$Row$._init = function $$oj$$5$$$$Row$$_init$($row$$2$$, $attributes$$14_prop$$57$$, $options$$183$$, $properties$$7$$) {
    $attributes$$14_prop$$57$$ = null;
    $row$$2$$.$Init$();
    $row$$2$$.index = -1;
    $options$$183$$ = $options$$183$$ || {};
    $row$$2$$.attributes = {};
    for($attributes$$14_prop$$57$$ in $properties$$7$$) {
      $properties$$7$$.hasOwnProperty($attributes$$14_prop$$57$$) && ($row$$2$$[$attributes$$14_prop$$57$$] = $properties$$7$$[$attributes$$14_prop$$57$$])
    }
    $row$$2$$.rowSet = $options$$183$$.rowSet;
    $row$$2$$.context = $options$$183$$.context
  };
  $oj$$5$$.$Row$.prototype.clone = function $$oj$$5$$$$Row$$$clone$() {
    $oj$$5$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("Row.prototype.clone", {clone:$oj$$5$$.$Row$.prototype.clone});
  $oj$$5$$.$Row$.prototype.get = function $$oj$$5$$$$Row$$$get$() {
    $oj$$5$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("Row.prototype.get", {get:$oj$$5$$.$Row$.prototype.get});
  $oj$$5$$.$Row$.prototype.set = function $$oj$$5$$$$Row$$$set$() {
    $oj$$5$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("Row.prototype.set", {set:$oj$$5$$.$Row$.prototype.set});
  $oj$$5$$.$Row$.prototype.keys = function $$oj$$5$$$$Row$$$keys$() {
    $oj$$5$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("Row.prototype.keys", {keys:$oj$$5$$.$Row$.prototype.keys});
  $oj$$5$$.$Row$.prototype.$values$ = function $$oj$$5$$$$Row$$$$values$$() {
    $oj$$5$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("Row.prototype.values", {$values$:$oj$$5$$.$Row$.prototype.$values$});
  $oj$$5$$.$Row$.prototype.$pairs$ = function $$oj$$5$$$$Row$$$$pairs$$() {
    $oj$$5$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("Row.prototype.pairs", {$pairs$:$oj$$5$$.$Row$.prototype.$pairs$});
  $oj$$5$$.$RowSet$ = function $$oj$$5$$$$RowSet$$($rows$$, $options$$185$$) {
    $oj$$5$$.$RowSet$._init(this, $rows$$, $options$$185$$, null)
  };
  $goog$exportPath_$$("RowSet", $oj$$5$$.$RowSet$, $oj$$5$$);
  $oj$$5$$.$RowSet$.prototype.$sortDirection$ = 1;
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.sortDirection", {$sortDirection$:$oj$$5$$.$RowSet$.prototype.$sortDirection$});
  $oj$$5$$.$RowSet$.prototype.$comparator$ = null;
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.comparator", {$comparator$:$oj$$5$$.$RowSet$.prototype.$comparator$});
  $oj$$5$$.$RowSet$.prototype.$sortSupported$ = !0;
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.sortSupported", {$sortSupported$:$oj$$5$$.$RowSet$.prototype.$sortSupported$});
  $oj$$5$$.$Object$.$createSubclass$($oj$$5$$.$RowSet$, $oj$$5$$.$Object$, "RowSet.RowSet");
  $oj$$5$$.$RowSet$.prototype.$Init$ = function $$oj$$5$$$$RowSet$$$$Init$$() {
    $oj$$5$$.$RowSet$.$superclass$.$Init$.call(this)
  };
  $oj$$5$$.$RowSet$._init = function $$oj$$5$$$$RowSet$$_init$($rowSet$$, $rows$$1$$, $options$$186$$, $properties$$8$$) {
    var $prop$$58$$;
    $rowSet$$.$_eventHandlers$ = [];
    $rowSet$$.$Init$();
    if($properties$$8$$) {
      for($prop$$58$$ in $properties$$8$$) {
        $properties$$8$$.hasOwnProperty($prop$$58$$) && ($rowSet$$[$prop$$58$$] = $properties$$8$$[$prop$$58$$])
      }
    }
  };
  $oj$$5$$.$RowSet$.prototype.at = function $$oj$$5$$$$RowSet$$$at$() {
    $oj$$5$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.at", {at:$oj$$5$$.$RowSet$.prototype.at});
  $oj$$5$$.$RowSet$.prototype.fetch = function $$oj$$5$$$$RowSet$$$fetch$() {
    $oj$$5$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.fetch", {fetch:$oj$$5$$.$RowSet$.prototype.fetch});
  $oj$$5$$.$RowSet$.prototype.get = function $$oj$$5$$$$RowSet$$$get$() {
    $oj$$5$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.get", {get:$oj$$5$$.$RowSet$.prototype.get});
  $oj$$5$$.$RowSet$.prototype.hasMore = function $$oj$$5$$$$RowSet$$$hasMore$() {
    $oj$$5$$.$Assert$.$failedInAbstractFunction$();
    return!1
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.hasMore", {hasMore:$oj$$5$$.$RowSet$.prototype.hasMore});
  $oj$$5$$.$RowSet$.prototype.indexOf = function $$oj$$5$$$$RowSet$$$indexOf$() {
    $oj$$5$$.$Assert$.$failedInAbstractFunction$();
    return 0
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.indexOf", {indexOf:$oj$$5$$.$RowSet$.prototype.indexOf});
  $oj$$5$$.$RowSet$.prototype.$isEmpty$ = function $$oj$$5$$$$RowSet$$$$isEmpty$$() {
    $oj$$5$$.$Assert$.$failedInAbstractFunction$();
    return!0
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.isEmpty", {$isEmpty$:$oj$$5$$.$RowSet$.prototype.$isEmpty$});
  $oj$$5$$.$RowSet$.prototype.size = function $$oj$$5$$$$RowSet$$$size$() {
    $oj$$5$$.$Assert$.$failedInAbstractFunction$();
    return 0
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.size", {size:$oj$$5$$.$RowSet$.prototype.size});
  $oj$$5$$.$RowSet$.prototype.sort = function $$oj$$5$$$$RowSet$$$sort$() {
    $oj$$5$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.sort", {sort:$oj$$5$$.$RowSet$.prototype.sort});
  $oj$$5$$.$RowSet$.prototype.totalSize = function $$oj$$5$$$$RowSet$$$totalSize$() {
    $oj$$5$$.$Assert$.$failedInAbstractFunction$();
    return 0
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.totalSize", {totalSize:$oj$$5$$.$RowSet$.prototype.totalSize});
  $oj$$5$$.$RowSet$.prototype.on = function $$oj$$5$$$$RowSet$$$on$($eventType$$25$$, $eventHandler$$3$$) {
    var $foundEventHandler$$1$$ = !1, $i$$118$$;
    for($i$$118$$ = 0;$i$$118$$ < this.$_eventHandlers$.length;$i$$118$$++) {
      if(this.$_eventHandlers$[$i$$118$$].eventType == $eventType$$25$$ && this.$_eventHandlers$[$i$$118$$].eventHandlerFunc == $eventHandler$$3$$) {
        $foundEventHandler$$1$$ = !0;
        break
      }
    }
    $foundEventHandler$$1$$ || this.$_eventHandlers$.push({eventType:$eventType$$25$$, eventHandlerFunc:$eventHandler$$3$$})
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.on", {on:$oj$$5$$.$RowSet$.prototype.on});
  $oj$$5$$.$RowSet$.prototype.off = function $$oj$$5$$$$RowSet$$$off$($eventType$$26$$, $eventHandler$$4$$) {
    var $i$$119$$;
    for($i$$119$$ = 0;$i$$119$$ < this.$_eventHandlers$.length;$i$$119$$++) {
      if(this.$_eventHandlers$[$i$$119$$].eventType == $eventType$$26$$ && this.$_eventHandlers$[$i$$119$$].eventHandlerFunc == $eventHandler$$4$$) {
        this.$_eventHandlers$.remove(this.$_eventHandlers$[$i$$119$$]);
        break
      }
    }
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.off", {off:$oj$$5$$.$RowSet$.prototype.off});
  $oj$$5$$.$RowSet$.prototype.$_handleEvent$ = function $$oj$$5$$$$RowSet$$$$_handleEvent$$($eventType$$27$$, $event$$45$$) {
    var $i$$120$$;
    for($i$$120$$ = 0;$i$$120$$ < this.$_eventHandlers$.length;$i$$120$$++) {
      var $eventHandler$$5$$ = this.$_eventHandlers$[$i$$120$$];
      $eventHandler$$5$$.eventType == $eventType$$27$$ && $eventHandler$$5$$.eventHandlerFunc($event$$45$$)
    }
  };
  $goog$exportPath_$$("RowSet.prototype._handleEvent", $oj$$5$$.$RowSet$.prototype.$_handleEvent$, $oj$$5$$);
  $oj$$5$$.$RowSet$.$EventType$ = {ADD:"add", REMOVE:"remove", RESET:"reset", SORT:"sort", CHANGE:"change", DESTROY:"destroy", REQUEST:"request", SYNC:"sync", ERROR:"error", INVALID:"invalid", ALL:"all"};
  $goog$exportPath_$$("RowSet.EventType", $oj$$5$$.$RowSet$.$EventType$, $oj$$5$$);
  $oj$$5$$.$RowSet$.$_ROW_STATUSES$ = {$_ADDED$:"added", $_DELETED$:"deleted", $_UPDATED$:"updated", $_NONE$:"none"};
  $goog$exportPath_$$("RowSet._ROW_STATUSES", $oj$$5$$.$RowSet$.$_ROW_STATUSES$, $oj$$5$$);
  $oj$$5$$.$ArrayRow$ = function $$oj$$5$$$$ArrayRow$$($attributes$$15$$, $options$$192$$) {
    $oj$$5$$.$ArrayRow$._init(this, $attributes$$15$$, $options$$192$$, null)
  };
  $goog$exportPath_$$("ArrayRow", $oj$$5$$.$ArrayRow$, $oj$$5$$);
  $oj$$5$$.$Object$.$createSubclass$($oj$$5$$.$ArrayRow$, $oj$$5$$.$Row$, "ArrayRow.ArrayRow");
  $oj$$5$$.$ArrayRow$.prototype.$Init$ = function $$oj$$5$$$$ArrayRow$$$$Init$$() {
    $oj$$5$$.$ArrayRow$.$superclass$.$Init$.call(this)
  };
  $oj$$5$$.$ArrayRow$.prototype.attributes = {};
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.attributes", {attributes:$oj$$5$$.$ArrayRow$.prototype.attributes});
  $oj$$5$$.$ArrayRow$.prototype.id = null;
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.id", {id:$oj$$5$$.$ArrayRow$.prototype.id});
  $oj$$5$$.$ArrayRow$.prototype.$idAttribute$ = null;
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.idAttribute", {$idAttribute$:$oj$$5$$.$ArrayRow$.prototype.$idAttribute$});
  $oj$$5$$.$ArrayRow$._init = function $$oj$$5$$$$ArrayRow$$_init$($row$$4$$, $attributes$$16$$, $options$$193$$, $properties$$9$$) {
    var $prop$$59$$ = null;
    $row$$4$$.$Init$();
    $row$$4$$.index = -1;
    $options$$193$$ = $options$$193$$ || {};
    $row$$4$$.attributes = $attributes$$16$$;
    for($prop$$59$$ in $properties$$9$$) {
      $properties$$9$$.hasOwnProperty($prop$$59$$) && ($row$$4$$[$prop$$59$$] = $properties$$9$$[$prop$$59$$])
    }
    $row$$4$$.idAttribute = $options$$193$$.idAttribute;
    $row$$4$$.context = $options$$193$$.context;
    $row$$4$$.$_setupId$()
  };
  $oj$$5$$.$ArrayRow$.prototype.clone = function $$oj$$5$$$$ArrayRow$$$clone$() {
    var $c$$22$$ = new this.constructor, $prop$$60$$;
    for($prop$$60$$ in this) {
      this.hasOwnProperty($prop$$60$$) && this[$prop$$60$$] !== this.attributes && ($c$$22$$[$prop$$60$$] = this[$prop$$60$$])
    }
    $c$$22$$.attributes = $oj$$5$$.$ArrayRow$.$_cloneAttributes$(this.attributes, null);
    $c$$22$$.$_setupId$();
    return $c$$22$$
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.clone", {clone:$oj$$5$$.$ArrayRow$.prototype.clone});
  $oj$$5$$.$ArrayRow$.prototype.get = function $$oj$$5$$$$ArrayRow$$$get$($property$$17$$) {
    return this.attributes[$property$$17$$]
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.get", {get:$oj$$5$$.$ArrayRow$.prototype.get});
  $oj$$5$$.$ArrayRow$.prototype.set = function $$oj$$5$$$$ArrayRow$$$set$($property$$18$$, $value$$139$$, $options$$194$$) {
    var $i$$121_opts$$10$$ = {}, $ignoreLastArg$$2$$ = !1;
    if(arguments && 0 < arguments.length) {
      if(1 < arguments.length && arguments[arguments.length - 1] && ($ignoreLastArg$$2$$ = !0, $i$$121_opts$$10$$ = arguments[arguments.length - 1] || {}), $oj$$5$$.$ArrayRow$.$_hasProperties$($property$$18$$)) {
        this.$_setProp$($property$$18$$, $i$$121_opts$$10$$)
      }else {
        for($i$$121_opts$$10$$ = 0;$i$$121_opts$$10$$ < arguments.length;$i$$121_opts$$10$$ += 2) {
          (void 0 !== arguments[$i$$121_opts$$10$$] || $i$$121_opts$$10$$ < arguments.length - 1 || !$ignoreLastArg$$2$$ && $i$$121_opts$$10$$ === arguments.length - 1) && this.$_setProp$(arguments[$i$$121_opts$$10$$], arguments[$i$$121_opts$$10$$ + 1])
        }
      }
    }
    return this
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.set", {set:$oj$$5$$.$ArrayRow$.prototype.set});
  $oj$$5$$.$ArrayRow$.prototype.keys = function $$oj$$5$$$$ArrayRow$$$keys$() {
    var $prop$$62$$, $retArray$$3$$ = [];
    for($prop$$62$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$62$$) && $retArray$$3$$.push($prop$$62$$)
    }
    return $retArray$$3$$
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.keys", {keys:$oj$$5$$.$ArrayRow$.prototype.keys});
  $oj$$5$$.$ArrayRow$.prototype.$values$ = function $$oj$$5$$$$ArrayRow$$$$values$$() {
    var $prop$$63$$, $retArray$$4$$ = [];
    for($prop$$63$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$63$$) && $retArray$$4$$.push(this.get($prop$$63$$))
    }
    return $retArray$$4$$
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.values", {$values$:$oj$$5$$.$ArrayRow$.prototype.$values$});
  $oj$$5$$.$ArrayRow$.prototype.$pairs$ = function $$oj$$5$$$$ArrayRow$$$$pairs$$() {
    var $prop$$64$$, $retObj$$7$$ = {};
    for($prop$$64$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$64$$) && ($retObj$$7$$[$prop$$64$$] = this.get($prop$$64$$))
    }
    return $retObj$$7$$
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.pairs", {$pairs$:$oj$$5$$.$ArrayRow$.prototype.$pairs$});
  $oj$$5$$.$ArrayRow$.prototype.$_getIdAttr$ = function $$oj$$5$$$$ArrayRow$$$$_getIdAttr$$() {
    return this.idAttribute || "id"
  };
  $oj$$5$$.$ArrayRow$.prototype.$_getProp$ = function $$oj$$5$$$$ArrayRow$$$$_getProp$$($prop$$65$$) {
    return this[$prop$$65$$] instanceof Function ? this[$prop$$65$$]() : this[$prop$$65$$]
  };
  $oj$$5$$.$ArrayRow$.$_hasProperties$ = function $$oj$$5$$$$ArrayRow$$$_hasProperties$$($object$$5$$) {
    var $prop$$66$$;
    if($object$$5$$ && $object$$5$$ instanceof Object) {
      for($prop$$66$$ in $object$$5$$) {
        if($object$$5$$.hasOwnProperty($prop$$66$$)) {
          return!0
        }
      }
    }
    return!1
  };
  $oj$$5$$.$ArrayRow$.prototype.$_setupId$ = function $$oj$$5$$$$ArrayRow$$$$_setupId$$() {
    this.id = this.attributes[this.$_getIdAttr$()]
  };
  $oj$$5$$.$ArrayRow$.prototype.$_setPropInternal$ = function $$oj$$5$$$$ArrayRow$$$$_setPropInternal$$($prop$$67$$, $value$$140$$) {
    return $oj$$5$$.$Object$.$innerEquals$(this.attributes[$prop$$67$$], $value$$140$$) ? !1 : (this.attributes[$prop$$67$$] = $value$$140$$, this.$_setupId$(), !0)
  };
  $oj$$5$$.$ArrayRow$.prototype.$_setProp$ = function $$oj$$5$$$$ArrayRow$$$$_setProp$$($prop$$68$$, $value$$141$$) {
    if(null == $prop$$68$$) {
      return!0
    }
    var $attrs$$16$$ = {}, $p$$5$$;
    if(1 < arguments.length) {
      $attrs$$16$$[$prop$$68$$] = $value$$141$$
    }else {
      for($p$$5$$ in $prop$$68$$) {
        $prop$$68$$.hasOwnProperty($p$$5$$) && ($attrs$$16$$[$p$$5$$] = $prop$$68$$[$p$$5$$])
      }
    }
    for($p$$5$$ in $attrs$$16$$) {
      $attrs$$16$$.hasOwnProperty($p$$5$$) && this.$_setPropInternal$($p$$5$$, $attrs$$16$$[$p$$5$$])
    }
    return!0
  };
  $oj$$5$$.$ArrayRow$.$_cloneAttributes$ = function $$oj$$5$$$$ArrayRow$$$_cloneAttributes$$($oldData$$1$$, $newData$$1$$) {
    var $prop$$69$$;
    $newData$$1$$ = $newData$$1$$ || {};
    for($prop$$69$$ in $oldData$$1$$) {
      $oldData$$1$$.hasOwnProperty($prop$$69$$) && ("object" !== typeof $oldData$$1$$[$prop$$69$$] ? $newData$$1$$.hasOwnProperty($prop$$69$$) ? void 0 !== $oldData$$1$$[$prop$$69$$] && ($newData$$1$$[$prop$$69$$] = $oldData$$1$$[$prop$$69$$]) : $newData$$1$$[$prop$$69$$] = $oldData$$1$$[$prop$$69$$] : $newData$$1$$[$prop$$69$$] = $oj$$5$$.$ArrayRow$.$_cloneAttributes$($oldData$$1$$[$prop$$69$$], null))
    }
    return $newData$$1$$
  };
  $oj$$5$$.$ArrayRowSet$ = function $$oj$$5$$$$ArrayRowSet$$($rows$$2$$, $options$$195$$) {
    $oj$$5$$.$ArrayRowSet$._init(this, $rows$$2$$, $options$$195$$, null)
  };
  $goog$exportPath_$$("ArrayRowSet", $oj$$5$$.$ArrayRowSet$, $oj$$5$$);
  $oj$$5$$.$ArrayRowSet$.prototype.$sortDirection$ = 1;
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.sortDirection", {$sortDirection$:$oj$$5$$.$ArrayRowSet$.prototype.$sortDirection$});
  $oj$$5$$.$ArrayRowSet$.prototype.$comparator$ = null;
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.comparator", {$comparator$:$oj$$5$$.$ArrayRowSet$.prototype.$comparator$});
  $oj$$5$$.$ArrayRowSet$.prototype.$sortSupported$ = !0;
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.sortSupported", {$sortSupported$:$oj$$5$$.$ArrayRowSet$.prototype.$sortSupported$});
  $oj$$5$$.$Object$.$createSubclass$($oj$$5$$.$ArrayRowSet$, $oj$$5$$.$RowSet$, "ArrayRowSet.ArrayRowSet");
  $oj$$5$$.$ArrayRowSet$.prototype.$Init$ = function $$oj$$5$$$$ArrayRowSet$$$$Init$$() {
    $oj$$5$$.$ArrayRowSet$.$superclass$.$Init$.call(this)
  };
  $oj$$5$$.$ArrayRowSet$._init = function $$oj$$5$$$$ArrayRowSet$$_init$($rowSet$$1$$, $rows$$3$$, $options$$196$$, $properties$$10$$) {
    var $prop$$70$$;
    $rowSet$$1$$.$_eventHandlers$ = [];
    $rowSet$$1$$.$_startIndex$ = 0;
    $rowSet$$1$$.$Init$();
    if($properties$$10$$) {
      for($prop$$70$$ in $properties$$10$$) {
        $properties$$10$$.hasOwnProperty($prop$$70$$) && ($rowSet$$1$$[$prop$$70$$] = $properties$$10$$[$prop$$70$$])
      }
    }
    $options$$196$$ = $options$$196$$ || {};
    $rowSet$$1$$.$_rows$ = [];
    null != $rows$$3$$ && void 0 !== $rows$$3$$ && ($rowSet$$1$$.$_data$ = $rows$$3$$ instanceof Array ? $rows$$3$$ : $rows$$3$$(), $rows$$3$$ instanceof Array || $rows$$3$$.$subscribe$(function($rowArray_values$$9$$) {
      $rowArray_values$$9$$ = $rowSet$$1$$.$_getRowArray$($rowArray_values$$9$$, null, null);
      $rowSet$$1$$.reset($rowArray_values$$9$$);
      $rowSet$$1$$.$superclass$.$_handleEvent$.call($rowSet$$1$$, "change", null)
    }, null, "change"), $rowSet$$1$$.$_totalSize$ = $rowSet$$1$$.$_data$.length, $rowSet$$1$$.$_idAttribute$ = "id", null != $options$$196$$ && null != $options$$196$$.idAttribute && ($rowSet$$1$$.$_idAttribute$ = $options$$196$$.idAttribute))
  };
  $oj$$5$$.$ArrayRowSet$.prototype.add = function $$oj$$5$$$$ArrayRowSet$$$add$($row$$5$$, $options$$197$$) {
    $options$$197$$ = $options$$197$$ || {};
    var $deferred$$26$$ = $options$$197$$.deferred;
    this.$_addToRowSet$($row$$5$$, $options$$197$$.at);
    return $deferred$$26$$ ? $$$$5$$.Deferred().resolve().promise() : null
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.add", {add:$oj$$5$$.$ArrayRowSet$.prototype.add});
  $oj$$5$$.$ArrayRowSet$.prototype.at = function $$oj$$5$$$$ArrayRowSet$$$at$($index$$97$$, $options$$198$$) {
    $options$$198$$ = $options$$198$$ || {};
    if(0 > $index$$97$$ || $index$$97$$ >= this.$_rows$.length) {
      return null
    }
    var $row$$6$$ = this.$_rows$[$index$$97$$];
    return $options$$198$$.deferred ? $$$$5$$.Deferred().resolve($row$$6$$).promise() : $row$$6$$
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.at", {at:$oj$$5$$.$ArrayRowSet$.prototype.at});
  $oj$$5$$.$ArrayRowSet$.prototype.clone = function $$oj$$5$$$$ArrayRowSet$$$clone$() {
    var $rs$$ = new this.constructor, $i$$122$$, $row$$7$$;
    for($i$$122$$ = 0;$i$$122$$ < this.$_rows$.length;$i$$122$$ += 1) {
      ($row$$7$$ = this.at($i$$122$$, null)) && $rs$$.add($row$$7$$.clone(), {at:$i$$122$$})
    }
    return $rs$$
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.clone", {clone:$oj$$5$$.$ArrayRowSet$.prototype.clone});
  $oj$$5$$.$ArrayRowSet$.prototype.fetch = function $$oj$$5$$$$ArrayRowSet$$$fetch$($options$$199_origRowArray$$) {
    $options$$199_origRowArray$$ = $options$$199_origRowArray$$ || {};
    if(this.$_canFetch$()) {
      this.$_startFetch$();
      var $pageSize_updates$$ = 0 < $options$$199_origRowArray$$.pageSize ? $options$$199_origRowArray$$.pageSize : -1, $origStartIndex$$ = this.$_startIndex$;
      this.$_startIndex$ = null != $options$$199_origRowArray$$ ? null != $options$$199_origRowArray$$.startIndex ? $options$$199_origRowArray$$.startIndex : 0 : 0;
      $options$$199_origRowArray$$ = null;
      null != this.$_rows$ && ($options$$199_origRowArray$$ = this.$_rows$);
      this.$_rows$ = this.$_getRowArray$(this.$_data$, this.$_idAttribute$, this.$_startIndex$, $pageSize_updates$$);
      null != $options$$199_origRowArray$$ && ($pageSize_updates$$ = this.$_compareRowArray$($options$$199_origRowArray$$, this.$_rows$, $origStartIndex$$, this.$_startIndex$, $pageSize_updates$$), this.$_processUpdates$($pageSize_updates$$, $options$$199_origRowArray$$));
      this.$_endFetch$(!0)
    }
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.fetch", {fetch:$oj$$5$$.$ArrayRowSet$.prototype.fetch});
  $oj$$5$$.$ArrayRowSet$.prototype.get = function $$oj$$5$$$$ArrayRowSet$$$get$($id$$11$$, $options$$200$$) {
    $options$$200$$ = $options$$200$$ || {};
    var $deferred$$28$$ = $options$$200$$.deferred, $i$$123$$, $row$$8$$ = null;
    for($i$$123$$ = 0;$i$$123$$ < this.$_rows$.length;$i$$123$$ += 1) {
      if($row$$8$$ = this.$_rows$[$i$$123$$], void 0 !== $row$$8$$ && $row$$8$$.id == $id$$11$$) {
        if($deferred$$28$$) {
          return $$$$5$$.Deferred().resolve($row$$8$$)
        }
        break
      }
    }
    return $row$$8$$
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.get", {get:$oj$$5$$.$ArrayRowSet$.prototype.get});
  $oj$$5$$.$ArrayRowSet$.prototype.hasMore = $JSCompiler_returnArg$$(!1);
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.hasMore", {hasMore:$oj$$5$$.$ArrayRowSet$.prototype.hasMore});
  $oj$$5$$.$ArrayRowSet$.prototype.indexOf = function $$oj$$5$$$$ArrayRowSet$$$indexOf$($row$$9$$, $options$$201$$) {
    $options$$201$$ = $options$$201$$ || {};
    return $options$$201$$.deferred ? this.get($row$$9$$.id, null).then(function($loc$$2$$) {
      return $loc$$2$$.index
    }) : this.get($row$$9$$.id).index
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.indexOf", {indexOf:$oj$$5$$.$ArrayRowSet$.prototype.indexOf});
  $oj$$5$$.$ArrayRowSet$.prototype.$isEmpty$ = function $$oj$$5$$$$ArrayRowSet$$$$isEmpty$$() {
    return 0 === this.$_rows$.length
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.isEmpty", {$isEmpty$:$oj$$5$$.$ArrayRowSet$.prototype.$isEmpty$});
  $oj$$5$$.$ArrayRowSet$.prototype.remove = function $$oj$$5$$$$ArrayRowSet$$$remove$($row$$10$$, $options$$202$$) {
    $options$$202$$ = $options$$202$$ || {};
    this.$_removeInternal$($row$$10$$, -1, $options$$202$$)
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.remove", {remove:$oj$$5$$.$ArrayRowSet$.prototype.remove});
  $oj$$5$$.$ArrayRowSet$.prototype.reset = function $$oj$$5$$$$ArrayRowSet$$$reset$($data$$49$$, $options$$203$$) {
    var $i$$124$$;
    $options$$203$$ = $options$$203$$ || {};
    $options$$203$$.previousRows = this.$_rows$;
    if(void 0 === $data$$49$$ || null == $data$$49$$ || $data$$49$$ instanceof Array && 0 == $data$$49$$.length) {
      for($i$$124$$ = 0;$i$$124$$ < this.$_rows$.length;$i$$124$$ += 1) {
        this.$_rows$[$i$$124$$] && (this.$_rows$[$i$$124$$].rowSet = null)
      }
      this.$_rows$ = []
    }else {
      if(this.$_rows$ = [], $data$$49$$ instanceof Array) {
        for($i$$124$$ = 0;$i$$124$$ < $data$$49$$.length;$i$$124$$ += 1) {
          this.add($data$$49$$[$i$$124$$], $options$$203$$)
        }
      }else {
        this.add($data$$49$$, $options$$203$$)
      }
    }
    $oj$$5$$.$ArrayRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$5$$.$RowSet$.$EventType$.RESET, null)
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.reset", {reset:$oj$$5$$.$ArrayRowSet$.prototype.reset});
  $oj$$5$$.$ArrayRowSet$.prototype.size = function $$oj$$5$$$$ArrayRowSet$$$size$() {
    return this.$_rows$.length
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.size", {size:$oj$$5$$.$ArrayRowSet$.prototype.size});
  $oj$$5$$.$ArrayRowSet$.prototype.sort = function $$oj$$5$$$$ArrayRowSet$$$sort$() {
    var $comparator$$10$$ = this.comparator, $self$$30$$;
    this.$_hasComparator$() && ($self$$30$$ = this, this.$_rows$.sort(function($a$$50$$, $b$$36$$) {
      return $oj$$5$$.$ArrayRowSet$.$_sortFunc$($a$$50$$, $b$$36$$, $comparator$$10$$, $self$$30$$, $self$$30$$)
    }), this.$_realignRowIndices$(), $oj$$5$$.$ArrayRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$5$$.$RowSet$.$EventType$.SORT, null))
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.sort", {sort:$oj$$5$$.$ArrayRowSet$.prototype.sort});
  $oj$$5$$.$ArrayRowSet$.prototype.totalSize = $JSCompiler_get$$("$_totalSize$");
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.totalSize", {totalSize:$oj$$5$$.$ArrayRowSet$.prototype.totalSize});
  $oj$$5$$.$ArrayRowSet$.prototype.$_addToRowSet$ = function $$oj$$5$$$$ArrayRowSet$$$$_addToRowSet$$($row$$11$$, $index$$98$$) {
    void 0 === $index$$98$$ ? this.$_rows$.push($row$$11$$) : this.$_rows$[$index$$98$$] = $row$$11$$;
    $row$$11$$.rowSet = this;
    $row$$11$$.index = this.$_rows$.length;
    $oj$$5$$.$ArrayRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$5$$.$RowSet$.$EventType$.ADD, {rowIdx:$index$$98$$, row:$row$$11$$})
  };
  $oj$$5$$.$ArrayRowSet$.$_compareKeys$ = function $$oj$$5$$$$ArrayRowSet$$$_compareKeys$$($keyA$$4$$, $keyB$$4$$, $sortDirection$$1$$) {
    if(-1 === $sortDirection$$1$$) {
      if($keyA$$4$$ < $keyB$$4$$) {
        return 1
      }
      if($keyB$$4$$ < $keyA$$4$$) {
        return-1
      }
    }else {
      if($keyA$$4$$ > $keyB$$4$$) {
        return 1
      }
      if($keyB$$4$$ > $keyA$$4$$) {
        return-1
      }
    }
    return 0
  };
  $oj$$5$$.$ArrayRowSet$.prototype.$_compareRowArray$ = function $$oj$$5$$$$ArrayRowSet$$$$_compareRowArray$$($origRowArray$$1$$, $updRowArray$$, $origStartIndex$$1$$, $startIndex$$1$$, $pageSize$$1$$) {
    var $updates$$1$$ = [];
    if(0 < $updRowArray$$.length) {
      var $rowIdx$$, $i$$125$$ = 0;
      for($rowIdx$$ = 0;$rowIdx$$ < $origRowArray$$1$$.length;$rowIdx$$++) {
        $rowIdx$$ < $startIndex$$1$$ ? ($updates$$1$$[$i$$125$$] = {rowIdx:$rowIdx$$, status:$oj$$5$$.$RowSet$.$_ROW_STATUSES$.$_DELETED$}, $i$$125$$++) : 0 < $pageSize$$1$$ && $rowIdx$$ >= $startIndex$$1$$ + $pageSize$$1$$ && ($updates$$1$$[$i$$125$$] = {rowIdx:$rowIdx$$, status:$oj$$5$$.$RowSet$.$_ROW_STATUSES$.$_DELETED$}, $i$$125$$++)
      }
      for($rowIdx$$ = 0;$rowIdx$$ < $updRowArray$$.length;$rowIdx$$++) {
        if(0 < $pageSize$$1$$ && $rowIdx$$ >= $startIndex$$1$$ && $rowIdx$$ < $startIndex$$1$$ + $pageSize$$1$$ || 0 > $pageSize$$1$$) {
          var $origSize_row$$12$$ = $origRowArray$$1$$.length;
          if($rowIdx$$ < $origStartIndex$$1$$ || $rowIdx$$ > $origSize_row$$12$$ - 1) {
            $updates$$1$$[$i$$125$$] = {rowIdx:$rowIdx$$, status:$oj$$5$$.$RowSet$.$_ROW_STATUSES$.$_ADDED$}, $i$$125$$++
          }else {
            var $origSize_row$$12$$ = $updRowArray$$[$rowIdx$$], $keys$$6$$ = $origSize_row$$12$$.keys(), $origRow$$ = $origRowArray$$1$$[$rowIdx$$], $updated$$ = !1, $j$$18$$;
            for($j$$18$$ = 0;$j$$18$$ < $keys$$6$$.length;$j$$18$$++) {
              if($origSize_row$$12$$.get($keys$$6$$[$j$$18$$]).toString() != $origRow$$.get($keys$$6$$[$j$$18$$]).toString()) {
                $updates$$1$$[$i$$125$$] = {rowIdx:$rowIdx$$, status:$oj$$5$$.$RowSet$.$_ROW_STATUSES$.$_UPDATED$};
                $updated$$ = !0;
                $i$$125$$++;
                break
              }
            }
            $updated$$ || ($updates$$1$$[$i$$125$$] = {rowIdx:$rowIdx$$, status:$oj$$5$$.$RowSet$.$_ROW_STATUSES$.$_NONE$}, $i$$125$$++)
          }
        }
      }
    }else {
      for($rowIdx$$ = 0;$rowIdx$$ < $origRowArray$$1$$.length;$rowIdx$$++) {
        $updates$$1$$[$rowIdx$$] = {rowIdx:$origRowArray$$1$$[$rowIdx$$], status:$oj$$5$$.$RowSet$.$_ROW_STATUSES$.$_DELETED$}
      }
    }
    return $updates$$1$$
  };
  $oj$$5$$.$ArrayRowSet$.$_getKey$ = function $$oj$$5$$$$ArrayRowSet$$$_getKey$$($val$$25$$, $attr$$15$$) {
    return $val$$25$$ instanceof $oj$$5$$.$Row$ ? $val$$25$$.get($attr$$15$$) : $$$$5$$.isFunction($val$$25$$[$attr$$15$$]) ? $val$$25$$[$attr$$15$$]() : $val$$25$$[$attr$$15$$]
  };
  $oj$$5$$.$ArrayRowSet$.prototype.$_getRowArray$ = function $$oj$$5$$$$ArrayRowSet$$$$_getRowArray$$($values$$10$$, $idAttribute$$, $rowArray$$1_startIndex$$2$$, $i$$126_pageSize$$2$$) {
    var $endIndex$$ = $values$$10$$.length - 1;
    0 < $i$$126_pageSize$$2$$ && ($endIndex$$ = $rowArray$$1_startIndex$$2$$ + $i$$126_pageSize$$2$$ - 1);
    $endIndex$$ = null != $endIndex$$ ? $endIndex$$ > $values$$10$$.length - 1 ? $values$$10$$.length - 1 : $endIndex$$ : $values$$10$$.length;
    $rowArray$$1_startIndex$$2$$ = [];
    var $prop$$71$$;
    for($i$$126_pageSize$$2$$ = 0;$i$$126_pageSize$$2$$ <= $endIndex$$;$i$$126_pageSize$$2$$++) {
      var $clonedRowValues_row$$13$$ = [], $rowValues$$ = null, $rowValues$$ = $values$$10$$[$i$$126_pageSize$$2$$] instanceof $oj$$5$$.$Row$ ? $values$$10$$[$i$$126_pageSize$$2$$].$pairs$() : $values$$10$$[$i$$126_pageSize$$2$$];
      for($prop$$71$$ in $rowValues$$) {
        $rowValues$$.hasOwnProperty($prop$$71$$) && ($clonedRowValues_row$$13$$[$prop$$71$$] = $rowValues$$[$prop$$71$$])
      }
      $clonedRowValues_row$$13$$ = new $oj$$5$$.$ArrayRow$($clonedRowValues_row$$13$$, {idAttribute:$idAttribute$$});
      $clonedRowValues_row$$13$$.index = $i$$126_pageSize$$2$$;
      $rowArray$$1_startIndex$$2$$[$i$$126_pageSize$$2$$] = $clonedRowValues_row$$13$$
    }
    return $rowArray$$1_startIndex$$2$$
  };
  $oj$$5$$.$ArrayRowSet$.prototype.$_getSortAttrs$ = function $$oj$$5$$$$ArrayRowSet$$$$_getSortAttrs$$($sortStr$$1$$) {
    return void 0 === $sortStr$$1$$ ? [] : $sortStr$$1$$.split(",")
  };
  $oj$$5$$.$ArrayRowSet$.prototype.$_getSortDirStr$ = function $$oj$$5$$$$ArrayRowSet$$$$_getSortDirStr$$() {
    return-1 === this.sortDirection ? "dsc" : "asc"
  };
  $oj$$5$$.$ArrayRowSet$.prototype.$_hasComparator$ = function $$oj$$5$$$$ArrayRowSet$$$$_hasComparator$$() {
    var $comparator$$11$$ = this.comparator;
    return void 0 !== $comparator$$11$$ && null !== $comparator$$11$$
  };
  $oj$$5$$.$ArrayRowSet$.prototype.$_processUpdates$ = function $$oj$$5$$$$ArrayRowSet$$$$_processUpdates$$($updates$$2$$, $origRowArray$$2$$) {
    var $allAdded_noneUpdated_rowIdx$$1$$ = !0, $i$$127$$;
    for($i$$127$$ = 0;$i$$127$$ < $updates$$2$$.length;$i$$127$$++) {
      if($updates$$2$$[$i$$127$$].status != $oj$$5$$.$RowSet$.$_ROW_STATUSES$.$_NONE$) {
        $allAdded_noneUpdated_rowIdx$$1$$ = !1;
        break
      }
    }
    if($allAdded_noneUpdated_rowIdx$$1$$) {
      this.$_endFetch$(!1)
    }else {
      $allAdded_noneUpdated_rowIdx$$1$$ = !0;
      for($i$$127$$ = 0;$i$$127$$ < $updates$$2$$.length;$i$$127$$++) {
        if($updates$$2$$[$i$$127$$].status != $oj$$5$$.$RowSet$.$_ROW_STATUSES$.$_ADDED$) {
          $allAdded_noneUpdated_rowIdx$$1$$ = !1;
          break
        }
      }
      if($allAdded_noneUpdated_rowIdx$$1$$) {
        this.$_endFetch$(!0)
      }else {
        for($i$$127$$ = 0;$i$$127$$ < $updates$$2$$.length;$i$$127$$++) {
          $allAdded_noneUpdated_rowIdx$$1$$ = $updates$$2$$[$i$$127$$].rowIdx, $updates$$2$$[$i$$127$$].status == $oj$$5$$.$RowSet$.$_ROW_STATUSES$.$_ADDED$ ? $oj$$5$$.$ArrayRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$5$$.$RowSet$.$EventType$.ADD, {rowIdx:$allAdded_noneUpdated_rowIdx$$1$$, row:this.$_rows$[$allAdded_noneUpdated_rowIdx$$1$$]}) : $updates$$2$$[$i$$127$$].status == $oj$$5$$.$RowSet$.$_ROW_STATUSES$.$_DELETED$ ? $oj$$5$$.$ArrayRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$5$$.$RowSet$.$EventType$.REMOVE, 
          {rowIdx:$allAdded_noneUpdated_rowIdx$$1$$, row:$origRowArray$$2$$[$allAdded_noneUpdated_rowIdx$$1$$]}) : $updates$$2$$[$i$$127$$].status == $oj$$5$$.$RowSet$.$_ROW_STATUSES$.$_UPDATED$ && $oj$$5$$.$ArrayRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$5$$.$RowSet$.$EventType$.CHANGE, {rowIdx:$allAdded_noneUpdated_rowIdx$$1$$, row:this.$_rows$[$allAdded_noneUpdated_rowIdx$$1$$]})
        }
        this.$_endFetch$(!1)
      }
    }
  };
  $oj$$5$$.$ArrayRowSet$.prototype.$_realignRowIndices$ = function $$oj$$5$$$$ArrayRowSet$$$$_realignRowIndices$$() {
    for(var $row$$14$$, $i$$128$$ = 0;$i$$128$$ < this.$_rows$.length;$i$$128$$++) {
      ($row$$14$$ = this.$_rows$[$i$$128$$]) && ($row$$14$$.index = $i$$128$$)
    }
  };
  $oj$$5$$.$ArrayRowSet$.prototype.$_removeInternal$ = function $$oj$$5$$$$ArrayRowSet$$$$_removeInternal$$($row$$15$$, $index$$99$$, $options$$205$$) {
    $options$$205$$ = $options$$205$$ || {};
    $index$$99$$ = -1 == $index$$99$$ ? this.get($row$$15$$).index : $index$$99$$;
    var $silent$$15$$ = $options$$205$$.silent;
    -1 < $index$$99$$ && (void 0 !== $row$$15$$ && $row$$15$$.$rowSet$ === this && ($row$$15$$.$rowSet$ = null), this.$_rows$.splice($index$$99$$, 1), $silent$$15$$ || ($options$$205$$.index = $index$$99$$, void 0 !== $row$$15$$ && $oj$$5$$.$ArrayRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$5$$.$RowSet$.$EventType$.REMOVE, {rowIdx:$index$$99$$, row:$row$$15$$})));
    return $row$$15$$
  };
  $oj$$5$$.$ArrayRowSet$.$_sortFunc$ = function $$oj$$5$$$$ArrayRowSet$$$_sortFunc$$($a$$51$$, $b$$37$$, $attrs$$17_comparator$$12$$, $rowSet$$2$$, $self$$31$$) {
    var $attrs1$$2_keyA$$5$$, $keyB$$5_retVal$$6$$, $i$$129$$;
    if($$$$5$$.isFunction($attrs$$17_comparator$$12$$)) {
      if(1 === $attrs$$17_comparator$$12$$.length) {
        $attrs1$$2_keyA$$5$$ = $attrs$$17_comparator$$12$$.call($self$$31$$, $a$$51$$);
        $keyB$$5_retVal$$6$$ = $attrs$$17_comparator$$12$$.call($self$$31$$, $b$$37$$);
        $attrs1$$2_keyA$$5$$ = $oj$$5$$.$StringUtils$.$isString$($attrs1$$2_keyA$$5$$) ? $attrs1$$2_keyA$$5$$.split(",") : [$attrs1$$2_keyA$$5$$];
        var $attrs2$$2$$ = $oj$$5$$.$StringUtils$.$isString$($keyB$$5_retVal$$6$$) ? $keyB$$5_retVal$$6$$.split(",") : [$keyB$$5_retVal$$6$$];
        for($i$$129$$ = 0;$i$$129$$ < $attrs1$$2_keyA$$5$$.length;$i$$129$$++) {
          if($keyB$$5_retVal$$6$$ = $oj$$5$$.$ArrayRowSet$.$_compareKeys$($attrs1$$2_keyA$$5$$[$i$$129$$], $attrs2$$2$$[$i$$129$$], $rowSet$$2$$.sortDirection), 0 !== $keyB$$5_retVal$$6$$) {
            return $keyB$$5_retVal$$6$$
          }
        }
      }
      return $attrs$$17_comparator$$12$$.call($self$$31$$, $a$$51$$, $b$$37$$)
    }
    if($oj$$5$$.$StringUtils$.$isString$($attrs$$17_comparator$$12$$)) {
      for($attrs$$17_comparator$$12$$ = $attrs$$17_comparator$$12$$.split(","), $i$$129$$ = 0;$i$$129$$ < $attrs$$17_comparator$$12$$.length;$i$$129$$++) {
        if($attrs1$$2_keyA$$5$$ = $oj$$5$$.$ArrayRowSet$.$_getKey$($a$$51$$, $attrs$$17_comparator$$12$$[$i$$129$$]), $keyB$$5_retVal$$6$$ = $oj$$5$$.$ArrayRowSet$.$_getKey$($b$$37$$, $attrs$$17_comparator$$12$$[$i$$129$$]), $keyB$$5_retVal$$6$$ = $oj$$5$$.$ArrayRowSet$.$_compareKeys$($attrs1$$2_keyA$$5$$, $keyB$$5_retVal$$6$$, $rowSet$$2$$.sortDirection), 0 !== $keyB$$5_retVal$$6$$) {
          return $keyB$$5_retVal$$6$$
        }
      }
    }
    return 0
  };
  $oj$$5$$.$ArrayRowSet$.prototype.$_canFetch$ = function $$oj$$5$$$$ArrayRowSet$$$$_canFetch$$() {
    return!this.$_isFetching$
  };
  $oj$$5$$.$ArrayRowSet$.prototype.$_startFetch$ = function $$oj$$5$$$$ArrayRowSet$$$$_startFetch$$() {
    this.$_isFetching$ = !0;
    $oj$$5$$.$ArrayRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$5$$.$RowSet$.$EventType$.REQUEST, null)
  };
  $oj$$5$$.$ArrayRowSet$.prototype.$_endFetch$ = function $$oj$$5$$$$ArrayRowSet$$$$_endFetch$$($refresh$$) {
    this.$_isFetching$ = !1;
    $oj$$5$$.$ArrayRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$5$$.$RowSet$.$EventType$.SYNC, $refresh$$)
  };
  $oj$$5$$.$EmptyNodeSet$ = function $$oj$$5$$$$EmptyNodeSet$$($parent$$24$$, $start$$19$$) {
    this.$m_parent$ = $parent$$24$$;
    this.$m_start$ = $start$$19$$
  };
  $goog$exportPath_$$("EmptyNodeSet", $oj$$5$$.$EmptyNodeSet$, $oj$$5$$);
  $oj$$5$$.$EmptyNodeSet$.prototype.getParent = $JSCompiler_get$$("$m_parent$");
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getParent", {getParent:$oj$$5$$.$EmptyNodeSet$.prototype.getParent});
  $oj$$5$$.$EmptyNodeSet$.prototype.$getStart$ = $JSCompiler_get$$("$m_start$");
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getStart", {$getStart$:$oj$$5$$.$EmptyNodeSet$.prototype.$getStart$});
  $oj$$5$$.$EmptyNodeSet$.prototype.$getCount$ = $JSCompiler_returnArg$$(0);
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getCount", {$getCount$:$oj$$5$$.$EmptyNodeSet$.prototype.$getCount$});
  $oj$$5$$.$EmptyNodeSet$.prototype.getData = $JSCompiler_returnArg$$(null);
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getData", {getData:$oj$$5$$.$EmptyNodeSet$.prototype.getData});
  $oj$$5$$.$EmptyNodeSet$.prototype.getMetadata = $JSCompiler_returnArg$$(null);
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getMetadata", {getMetadata:$oj$$5$$.$EmptyNodeSet$.prototype.getMetadata});
  $oj$$5$$.$NodeSetWrapper$ = function $$oj$$5$$$$NodeSetWrapper$$($nodeSet$$16$$, $metadataCallback$$) {
    this.$m_nodeSet$ = $nodeSet$$16$$;
    this.$m_callback$ = $metadataCallback$$
  };
  $goog$exportPath_$$("NodeSetWrapper", $oj$$5$$.$NodeSetWrapper$, $oj$$5$$);
  $oj$$5$$.$NodeSetWrapper$.prototype.getParent = function $$oj$$5$$$$NodeSetWrapper$$$getParent$() {
    return this.$m_nodeSet$.getParent()
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getParent", {getParent:$oj$$5$$.$NodeSetWrapper$.prototype.getParent});
  $oj$$5$$.$NodeSetWrapper$.prototype.$getStart$ = function $$oj$$5$$$$NodeSetWrapper$$$$getStart$$() {
    return this.$m_nodeSet$.$getStart$()
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getStart", {$getStart$:$oj$$5$$.$NodeSetWrapper$.prototype.$getStart$});
  $oj$$5$$.$NodeSetWrapper$.prototype.$getCount$ = function $$oj$$5$$$$NodeSetWrapper$$$$getCount$$() {
    return this.$m_nodeSet$.$getCount$()
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getCount", {$getCount$:$oj$$5$$.$NodeSetWrapper$.prototype.$getCount$});
  $oj$$5$$.$NodeSetWrapper$.prototype.getData = function $$oj$$5$$$$NodeSetWrapper$$$getData$($index$$103$$) {
    return this.$m_nodeSet$.getData($index$$103$$)
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getData", {getData:$oj$$5$$.$NodeSetWrapper$.prototype.getData});
  $oj$$5$$.$NodeSetWrapper$.prototype.getMetadata = function $$oj$$5$$$$NodeSetWrapper$$$getMetadata$($index$$104_metadata$$7$$) {
    $index$$104_metadata$$7$$ = this.$m_nodeSet$.getMetadata($index$$104_metadata$$7$$);
    this.$m_callback$.call(null, $index$$104_metadata$$7$$.key, $index$$104_metadata$$7$$);
    return $index$$104_metadata$$7$$
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getMetadata", {getMetadata:$oj$$5$$.$NodeSetWrapper$.prototype.getMetadata});
  $oj$$5$$.$NodeSetWrapper$.prototype.$getChildNodeSet$ = function $$oj$$5$$$$NodeSetWrapper$$$$getChildNodeSet$$($index$$105_result$$11$$) {
    return this.$m_nodeSet$.$getChildNodeSet$ && ($index$$105_result$$11$$ = this.$m_nodeSet$.$getChildNodeSet$($index$$105_result$$11$$), null != $index$$105_result$$11$$) ? new $oj$$5$$.$NodeSetWrapper$($index$$105_result$$11$$, this.$m_callback$) : null
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$5$$.$NodeSetWrapper$.prototype.$getChildNodeSet$});
  $oj$$5$$.$JsonNodeSet$ = function $$oj$$5$$$$JsonNodeSet$$($startNode$$, $endNode$$, $data$$50$$, $currKey$$1$$, $depth$$16$$) {
    $oj$$5$$.$Assert$.$assertNumber$($startNode$$, null);
    $oj$$5$$.$Assert$.$assertNumber$($endNode$$, null);
    this.$m_depth$ = $depth$$16$$;
    this.$m_key$ = $currKey$$1$$;
    this.$m_startNode$ = $startNode$$;
    this.$m_endNode$ = $endNode$$;
    this.$m_nodes$ = $data$$50$$
  };
  $goog$exportPath_$$("JsonNodeSet", $oj$$5$$.$JsonNodeSet$, $oj$$5$$);
  $oj$$5$$.$JsonNodeSet$.prototype.getParent = $JSCompiler_get$$("$m_key$");
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getParent", {getParent:$oj$$5$$.$JsonNodeSet$.prototype.getParent});
  $oj$$5$$.$JsonNodeSet$.prototype.$getStart$ = $JSCompiler_get$$("$m_startNode$");
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getStart", {$getStart$:$oj$$5$$.$JsonNodeSet$.prototype.$getStart$});
  $oj$$5$$.$JsonNodeSet$.prototype.$getCount$ = function $$oj$$5$$$$JsonNodeSet$$$$getCount$$() {
    return Math.max(0, this.$m_endNode$ - this.$m_startNode$)
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getCount", {$getCount$:$oj$$5$$.$JsonNodeSet$.prototype.$getCount$});
  $oj$$5$$.$JsonNodeSet$.prototype.getData = function $$oj$$5$$$$JsonNodeSet$$$getData$($index$$106$$) {
    $oj$$5$$.$Assert$.assert($index$$106$$ <= this.$m_endNode$ && $index$$106$$ >= this.$m_startNode$);
    return this.$m_nodes$[$index$$106$$] ? this.$m_nodes$[$index$$106$$].attr : null
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getData", {getData:$oj$$5$$.$JsonNodeSet$.prototype.getData});
  $oj$$5$$.$JsonNodeSet$.prototype.getMetadata = function $$oj$$5$$$$JsonNodeSet$$$getMetadata$($index$$107$$) {
    var $metadata$$8$$ = [];
    $oj$$5$$.$Assert$.assert($index$$107$$ <= this.$m_endNode$ && $index$$107$$ >= this.$m_startNode$);
    $metadata$$8$$.key = this.$m_nodes$[$index$$107$$].id ? this.$m_nodes$[$index$$107$$].id : this.$m_nodes$[$index$$107$$].attr.id;
    $metadata$$8$$.leaf = this.$m_nodes$[$index$$107$$].$leaf$;
    $metadata$$8$$.depth = this.$m_nodes$[$index$$107$$].depth;
    null == $metadata$$8$$.leaf && ($metadata$$8$$.leaf = this.$m_nodes$[$index$$107$$].children && 0 < this.$m_nodes$[$index$$107$$].children.length ? !1 : !0);
    return $metadata$$8$$
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getMetadata", {getMetadata:$oj$$5$$.$JsonNodeSet$.prototype.getMetadata});
  $oj$$5$$.$JsonNodeSet$.prototype.$_updateDepth$ = function $$oj$$5$$$$JsonNodeSet$$$$_updateDepth$$($currChild$$4$$, $offset$$17$$) {
    var $i$$130$$;
    $offset$$17$$++;
    $currChild$$4$$.depth = $offset$$17$$;
    if($currChild$$4$$.children && 0 != $currChild$$4$$.children.length) {
      for($i$$130$$ = 0;$i$$130$$ < $currChild$$4$$.children.length;$i$$130$$++) {
        this.$_updateDepth$($currChild$$4$$.children[$i$$130$$], $offset$$17$$)
      }
    }
  };
  $oj$$5$$.$JsonNodeSet$.prototype.$getChildNodeSet$ = function $$oj$$5$$$$JsonNodeSet$$$$getChildNodeSet$$($index$$108_key$$48$$) {
    var $results$$3$$, $depth$$17$$, $i$$131$$;
    $depth$$17$$ = this.$m_nodes$[$index$$108_key$$48$$].depth;
    $results$$3$$ = this.$m_nodes$[$index$$108_key$$48$$].children;
    if(0 == $results$$3$$.length) {
      return null
    }
    $index$$108_key$$48$$ = this.$m_nodes$[$index$$108_key$$48$$].id ? this.$m_nodes$[$index$$108_key$$48$$].id : this.$m_nodes$[$index$$108_key$$48$$].attr.id;
    for($i$$131$$ = 0;$i$$131$$ < $results$$3$$.length;$i$$131$$++) {
      this.$_updateDepth$($results$$3$$[$i$$131$$], $depth$$17$$)
    }
    return new $oj$$5$$.$JsonNodeSet$(0, $results$$3$$.length, $results$$3$$, $index$$108_key$$48$$, 0)
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$5$$.$JsonNodeSet$.prototype.$getChildNodeSet$});
  $oj$$5$$.$FlattenedNodeSet$ = function $$oj$$5$$$$FlattenedNodeSet$$($nodeSet$$17$$, $actualStart$$1$$) {
    this.$m_nodeSet$ = $nodeSet$$17$$;
    this.$m_start$ = $actualStart$$1$$
  };
  $goog$exportPath_$$("FlattenedNodeSet", $oj$$5$$.$FlattenedNodeSet$, $oj$$5$$);
  $oj$$5$$.$FlattenedNodeSet$.prototype.getParent = function $$oj$$5$$$$FlattenedNodeSet$$$getParent$() {
    return this.$m_nodeSet$.getParent()
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getParent", {getParent:$oj$$5$$.$FlattenedNodeSet$.prototype.getParent});
  $oj$$5$$.$FlattenedNodeSet$.prototype.$getStart$ = function $$oj$$5$$$$FlattenedNodeSet$$$$getStart$$() {
    return void 0 != this.$m_start$ ? this.$m_start$ : this.$m_nodeSet$.$getStart$()
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getStart", {$getStart$:$oj$$5$$.$FlattenedNodeSet$.prototype.$getStart$});
  $oj$$5$$.$FlattenedNodeSet$.prototype.$getCount$ = function $$oj$$5$$$$FlattenedNodeSet$$$$getCount$$() {
    void 0 === this.$m_count$ && (this.$m_count$ = this.$_getCount$(this.$m_nodeSet$, 0), void 0 != this.$m_start$ && (this.$m_count$ -= this.$m_start$));
    return this.$m_count$
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getCount", {$getCount$:$oj$$5$$.$FlattenedNodeSet$.prototype.$getCount$});
  $oj$$5$$.$FlattenedNodeSet$.prototype.$_getCount$ = function $$oj$$5$$$$FlattenedNodeSet$$$$_getCount$$($nodeSet$$18$$, $total$$) {
    var $start$$20$$, $count$$23$$, $i$$132$$, $child$$3$$;
    $start$$20$$ = $nodeSet$$18$$.$getStart$();
    $count$$23$$ = $nodeSet$$18$$.$getCount$();
    $total$$ += $count$$23$$;
    if($nodeSet$$18$$.$getChildNodeSet$) {
      for($i$$132$$ = 0;$i$$132$$ < $count$$23$$;$i$$132$$++) {
        $child$$3$$ = $nodeSet$$18$$.$getChildNodeSet$($i$$132$$ + $start$$20$$), null != $child$$3$$ && ($total$$ = this.$_getCount$($child$$3$$, $total$$))
      }
    }
    return $total$$
  };
  $oj$$5$$.$FlattenedNodeSet$.prototype.getData = function $$oj$$5$$$$FlattenedNodeSet$$$getData$($index$$109$$) {
    return this.$_getDataOrMetadata$(this.$m_nodeSet$, $index$$109$$, {index:this.$m_nodeSet$.$getStart$()}, this.$_getData$)
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getData", {getData:$oj$$5$$.$FlattenedNodeSet$.prototype.getData});
  $oj$$5$$.$FlattenedNodeSet$.prototype.getMetadata = function $$oj$$5$$$$FlattenedNodeSet$$$getMetadata$($index$$110$$) {
    return this.$_getDataOrMetadata$(this.$m_nodeSet$, $index$$110$$, {index:this.$m_nodeSet$.$getStart$()}, this.$_getMetadata$)
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getMetadata", {getMetadata:$oj$$5$$.$FlattenedNodeSet$.prototype.getMetadata});
  $oj$$5$$.$FlattenedNodeSet$.prototype.$_getMetadata$ = function $$oj$$5$$$$FlattenedNodeSet$$$$_getMetadata$$($nodeSet$$19$$, $index$$111$$) {
    return $nodeSet$$19$$.getMetadata($index$$111$$)
  };
  $oj$$5$$.$FlattenedNodeSet$.prototype.$_getData$ = function $$oj$$5$$$$FlattenedNodeSet$$$$_getData$$($nodeSet$$20$$, $index$$112$$) {
    return $nodeSet$$20$$.getData($index$$112$$)
  };
  $oj$$5$$.$FlattenedNodeSet$.prototype.$_getDataOrMetadata$ = function $$oj$$5$$$$FlattenedNodeSet$$$$_getDataOrMetadata$$($nodeSet$$21$$, $index$$113$$, $current$$5$$, $func$$9$$) {
    var $start$$21$$, $count$$24$$, $i$$133$$, $child$$4_currIndex_result$$12$$;
    $start$$21$$ = $nodeSet$$21$$.$getStart$();
    $count$$24$$ = $nodeSet$$21$$.$getCount$();
    for($i$$133$$ = 0;$i$$133$$ < $count$$24$$;$i$$133$$++) {
      $child$$4_currIndex_result$$12$$ = $current$$5$$.index;
      if($child$$4_currIndex_result$$12$$ === $index$$113$$) {
        return $func$$9$$.call(this, $nodeSet$$21$$, $i$$133$$ + $start$$21$$)
      }
      $current$$5$$.index = $child$$4_currIndex_result$$12$$ + 1;
      if($nodeSet$$21$$.$getChildNodeSet$ && ($child$$4_currIndex_result$$12$$ = $nodeSet$$21$$.$getChildNodeSet$($i$$133$$ + $start$$21$$), null != $child$$4_currIndex_result$$12$$ && ($child$$4_currIndex_result$$12$$ = this.$_getDataOrMetadata$($child$$4_currIndex_result$$12$$, $index$$113$$, $current$$5$$, $func$$9$$), null != $child$$4_currIndex_result$$12$$))) {
        return $child$$4_currIndex_result$$12$$
      }
    }
    return null
  };
  $oj$$5$$.$DataGridDataSource$ = function $$oj$$5$$$$DataGridDataSource$$($data$$51$$) {
    $oj$$5$$.$DataGridDataSource$.$superclass$.constructor.call(this, $data$$51$$)
  };
  $goog$exportPath_$$("DataGridDataSource", $oj$$5$$.$DataGridDataSource$, $oj$$5$$);
  $oj$$5$$.$Object$.$createSubclass$($oj$$5$$.$DataGridDataSource$, $oj$$5$$.$DataSource$, "oj.DataGridDataSource");
  $oj$$5$$.$DataGridDataSource$.prototype.$getCount$ = $JSCompiler_returnArg$$(0);
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.getCount", {$getCount$:$oj$$5$$.$DataGridDataSource$.prototype.$getCount$});
  $oj$$5$$.$DataGridDataSource$.prototype.$getCountPrecision$ = $JSCompiler_returnArg$$("exact");
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$5$$.$DataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$5$$.$DataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$5$$$$DataGridDataSource$$$$fetchHeaders$$() {
    $oj$$5$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$5$$.$DataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$5$$.$DataGridDataSource$.prototype.$fetchCells$ = function $$oj$$5$$$$DataGridDataSource$$$$fetchCells$$() {
    $oj$$5$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$5$$.$DataGridDataSource$.prototype.$fetchCells$});
  $oj$$5$$.$DataGridDataSource$.prototype.keys = function $$oj$$5$$$$DataGridDataSource$$$keys$() {
    $oj$$5$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.keys", {keys:$oj$$5$$.$DataGridDataSource$.prototype.keys});
  $oj$$5$$.$DataGridDataSource$.prototype.$indexes$ = function $$oj$$5$$$$DataGridDataSource$$$$indexes$$() {
    $oj$$5$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.indexes", {$indexes$:$oj$$5$$.$DataGridDataSource$.prototype.$indexes$});
  $oj$$5$$.$DataGridDataSource$.prototype.sort = function $$oj$$5$$$$DataGridDataSource$$$sort$() {
    $oj$$5$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.sort", {sort:$oj$$5$$.$DataGridDataSource$.prototype.sort});
  $oj$$5$$.$DataGridDataSource$.prototype.$getCapability$ = $JSCompiler_returnArg$$(null);
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.getCapability", {$getCapability$:$oj$$5$$.$DataGridDataSource$.prototype.$getCapability$})
});
