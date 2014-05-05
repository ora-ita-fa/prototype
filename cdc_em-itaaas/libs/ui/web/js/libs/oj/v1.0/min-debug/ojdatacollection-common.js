define(["ojs/ojcore", "jquery"], function($oj$$7$$, $$$$7$$) {
  $oj$$7$$.$DataSource$ = function $$oj$$7$$$$DataSource$$($data$$45$$) {
    this.data = $data$$45$$;
    this.Init()
  };
  $goog$exportPath_$$("DataSource", $oj$$7$$.$DataSource$, $oj$$7$$);
  $oj$$7$$.$Object$.$createSubclass$($oj$$7$$.$DataSource$, $oj$$7$$.$Object$, "oj.DataSource");
  $oj$$7$$.$DataSource$.prototype.Init = function $$oj$$7$$$$DataSource$$$Init$() {
    this.$_eventHandlers$ = [];
    $oj$$7$$.$DataSource$.$superclass$.Init.call(this)
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("DataSource.prototype.Init", {Init:$oj$$7$$.$DataSource$.prototype.Init});
  $oj$$7$$.$DataSource$.prototype.on = function $$oj$$7$$$$DataSource$$$on$($eventType$$21$$, $eventHandler$$) {
    var $foundEventHandler$$ = !1, $i$$103$$;
    for($i$$103$$ = 0;$i$$103$$ < this.$_eventHandlers$.length;$i$$103$$++) {
      if(this.$_eventHandlers$[$i$$103$$].eventType == $eventType$$21$$ && this.$_eventHandlers$[$i$$103$$].eventHandlerFunc == $eventHandler$$) {
        $foundEventHandler$$ = !0;
        break
      }
    }
    $foundEventHandler$$ || this.$_eventHandlers$.push({eventType:$eventType$$21$$, eventHandlerFunc:$eventHandler$$})
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("DataSource.prototype.on", {on:$oj$$7$$.$DataSource$.prototype.on});
  $oj$$7$$.$DataSource$.prototype.off = function $$oj$$7$$$$DataSource$$$off$($eventType$$22$$, $eventHandler$$1$$) {
    var $i$$104$$;
    for($i$$104$$ = this.$_eventHandlers$.length - 1;0 <= $i$$104$$;$i$$104$$--) {
      if(this.$_eventHandlers$[$i$$104$$].eventType == $eventType$$22$$ && this.$_eventHandlers$[$i$$104$$].eventHandlerFunc == $eventHandler$$1$$) {
        this.$_eventHandlers$.splice($i$$104$$, 1);
        break
      }
    }
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("DataSource.prototype.off", {off:$oj$$7$$.$DataSource$.prototype.off});
  $oj$$7$$.$DataSource$.prototype.handleEvent = function $$oj$$7$$$$DataSource$$$handleEvent$($eventType$$23$$, $event$$38$$) {
    var $i$$105$$;
    for($i$$105$$ = 0;$i$$105$$ < this.$_eventHandlers$.length;$i$$105$$++) {
      var $eventHandler$$2$$ = this.$_eventHandlers$[$i$$105$$];
      $eventHandler$$2$$.eventType == $eventType$$23$$ && $eventHandler$$2$$.eventHandlerFunc($event$$38$$)
    }
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("DataSource.prototype.handleEvent", {handleEvent:$oj$$7$$.$DataSource$.prototype.handleEvent});
  $oj$$7$$.$TreeDataSource$ = function $$oj$$7$$$$TreeDataSource$$($data$$46$$) {
    $oj$$7$$.$TreeDataSource$.$superclass$.constructor.call(this, $data$$46$$)
  };
  $goog$exportPath_$$("TreeDataSource", $oj$$7$$.$TreeDataSource$, $oj$$7$$);
  $oj$$7$$.$Object$.$createSubclass$($oj$$7$$.$TreeDataSource$, $oj$$7$$.$DataSource$, "oj.TreeDataSource");
  $oj$$7$$.$TreeDataSource$.prototype.$getChildCount$ = $JSCompiler_returnArg$$(-1);
  $oj$$7$$.$TreeDataSource$.prototype.$fetchChildren$ = function $$oj$$7$$$$TreeDataSource$$$$fetchChildren$$() {
    $oj$$7$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.fetchChildren", {$fetchChildren$:$oj$$7$$.$TreeDataSource$.prototype.$fetchChildren$});
  $oj$$7$$.$TreeDataSource$.prototype.$fetchDescendents$ = function $$oj$$7$$$$TreeDataSource$$$$fetchDescendents$$() {
    $oj$$7$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.fetchDescendents", {$fetchDescendents$:$oj$$7$$.$TreeDataSource$.prototype.$fetchDescendents$});
  $oj$$7$$.$TreeDataSource$.prototype.sort = function $$oj$$7$$$$TreeDataSource$$$sort$() {
    $oj$$7$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.sort", {sort:$oj$$7$$.$TreeDataSource$.prototype.sort});
  $oj$$7$$.$TreeDataSource$.prototype.$getSortCriteria$ = function $$oj$$7$$$$TreeDataSource$$$$getSortCriteria$$() {
    return{key:null, direction:"none"}
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.getSortCriteria", {$getSortCriteria$:$oj$$7$$.$TreeDataSource$.prototype.$getSortCriteria$});
  $oj$$7$$.$TreeDataSource$.prototype.move = function $$oj$$7$$$$TreeDataSource$$$move$() {
    $oj$$7$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.move", {move:$oj$$7$$.$TreeDataSource$.prototype.move});
  $oj$$7$$.$TreeDataSource$.prototype.$moveOK$ = $JSCompiler_returnArg$$("valid");
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.moveOK", {$moveOK$:$oj$$7$$.$TreeDataSource$.prototype.$moveOK$});
  $oj$$7$$.$TreeDataSource$.prototype.getCapability = $JSCompiler_returnArg$$(null);
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.getCapability", {getCapability:$oj$$7$$.$TreeDataSource$.prototype.getCapability});
  $oj$$7$$.$FlattenedTreeDataSource$ = function $$oj$$7$$$$FlattenedTreeDataSource$$($treeDataSource$$, $options$$176$$) {
    this.$m_wrapped$ = $treeDataSource$$;
    this.$m_options$ = $options$$176$$;
    $oj$$7$$.$FlattenedTreeDataSource$.$superclass$.constructor.call(this)
  };
  $goog$exportPath_$$("FlattenedTreeDataSource", $oj$$7$$.$FlattenedTreeDataSource$, $oj$$7$$);
  $oj$$7$$.$Object$.$createSubclass$($oj$$7$$.$FlattenedTreeDataSource$, $oj$$7$$.$DataSource$, "oj.FlattenedTreeDataSource");
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.Init = function $$oj$$7$$$$FlattenedTreeDataSource$$$Init$() {
    var $expanded$$;
    $oj$$7$$.$FlattenedTreeDataSource$.$superclass$.Init.call(this);
    this.$m_wrapped$.on("change", this.$_handleModelEvent$.bind(this));
    this.$m_fetchSize$ = parseInt(this.$m_options$.fetchSize, 10);
    isNaN(this.$m_fetchSize$) && (this.$m_fetchSize$ = 25);
    this.$m_maxCount$ = parseInt(this.$m_options$.maxCount, 10);
    isNaN(this.$m_maxCount$) && (this.$m_maxCount$ = 500);
    $expanded$$ = this.$m_options$.expanded;
    Array.isArray($expanded$$) ? this.$m_expandedKeys$ = $expanded$$ : ("all" === $expanded$$ && (this.$m_collapsedKeys$ = []), this.$m_expandedKeys$ = []);
    this.$m_cache$ = []
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.Init", {Init:$oj$$7$$.$FlattenedTreeDataSource$.prototype.Init});
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.handleEvent = function $$oj$$7$$$$FlattenedTreeDataSource$$$handleEvent$($eventType$$24$$, $event$$39$$) {
    $oj$$7$$.$FlattenedTreeDataSource$.$superclass$.handleEvent.call(this, $eventType$$24$$, $event$$39$$)
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.handleEvent", {handleEvent:$oj$$7$$.$FlattenedTreeDataSource$.prototype.handleEvent});
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$Destory$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$Destory$$() {
    delete this.$m_cache$;
    delete this.$m_expandedKeys$;
    this.$m_wrapped$.off("change");
    this.$m_wrapped$.$Destory$ && this.$m_wrapped$.$Destory$()
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.Destory", {$Destory$:$oj$$7$$.$FlattenedTreeDataSource$.prototype.$Destory$});
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$getExpandedKeys$ = $JSCompiler_get$$("$m_expandedKeys$");
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.getExpandedKeys", {$getExpandedKeys$:$oj$$7$$.$FlattenedTreeDataSource$.prototype.$getExpandedKeys$});
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$getOption$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$getOption$$($option$$12$$) {
    return null != this.$m_options$ ? this.$m_options$[$option$$12$$] : null
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.getOption", {$getOption$:$oj$$7$$.$FlattenedTreeDataSource$.prototype.$getOption$});
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$getWrappedDataSource$ = $JSCompiler_get$$("$m_wrapped$");
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.getWrappedDataSource", {$getWrappedDataSource$:$oj$$7$$.$FlattenedTreeDataSource$.prototype.$getWrappedDataSource$});
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$fetchRows$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$fetchRows$$($range$$6$$, $callbacks$$8$$) {
    this.$_isExpandAll$() ? this.$_fetchRowsFromDescendents$($range$$6$$, $callbacks$$8$$) : this.$_fetchRowsFromChildren$($range$$6$$, $callbacks$$8$$)
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_fetchRowsFromChildren$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_fetchRowsFromChildren$$($range$$7$$, $callbacks$$9$$) {
    var $maxFetchSize_nodeSet_processed$$, $lastEntry$$, $parent$$7$$, $count$$14$$, $index$$81$$, $depth$$5$$;
    if($range$$7$$.start > this.$_getLastIndex$()) {
      $maxFetchSize_nodeSet_processed$$ = this.$_getMaxFetchSize$();
      if(0 > this.$_getLastIndex$()) {
        $range$$7$$.count = Math.min($maxFetchSize_nodeSet_processed$$, $range$$7$$.count);
        this.$m_wrapped$.$fetchChildren$(null, $range$$7$$, {success:function($nodeSet$$1$$) {
          this.$_handleFetchSuccess$($nodeSet$$1$$, null, 0, $range$$7$$, 0, $callbacks$$9$$)
        }.bind(this)});
        return
      }
      if(0 < $maxFetchSize_nodeSet_processed$$) {
        $lastEntry$$ = this.$_getLastEntry$();
        $parent$$7$$ = $lastEntry$$.parent;
        $count$$14$$ = this.$m_wrapped$.$getChildCount$($parent$$7$$);
        $index$$81$$ = $lastEntry$$.index;
        $depth$$5$$ = $lastEntry$$.depth;
        -1 === $count$$14$$ || $index$$81$$ < $count$$14$$ - 1 ? ($range$$7$$.start = $index$$81$$ + 1, $range$$7$$.count = -1 === $count$$14$$ ? this.$m_fetchSize$ : Math.min($maxFetchSize_nodeSet_processed$$, Math.min(this.$m_fetchSize$, $count$$14$$ - $range$$7$$.start)), this.$m_wrapped$.$fetchChildren$($parent$$7$$, $range$$7$$, {success:function($nodeSet$$2$$) {
          this.$_handleFetchSuccess$($nodeSet$$2$$, $parent$$7$$, $depth$$5$$, $range$$7$$, $count$$14$$, $callbacks$$9$$)
        }.bind(this)})) : $index$$81$$ === $count$$14$$ - 1 ? ($maxFetchSize_nodeSet_processed$$ = new $oj$$7$$.$EmptyNodeSet$(null, $range$$7$$.start), null != $callbacks$$9$$ && null != $callbacks$$9$$.success && $callbacks$$9$$.success.call(null, $maxFetchSize_nodeSet_processed$$)) : ($maxFetchSize_nodeSet_processed$$ = this.$_fetchFromAncestors$($parent$$7$$, $depth$$5$$, $callbacks$$9$$, $maxFetchSize_nodeSet_processed$$), $maxFetchSize_nodeSet_processed$$ || ($maxFetchSize_nodeSet_processed$$ = 
        new $oj$$7$$.$EmptyNodeSet$(null, $range$$7$$.start), null != $callbacks$$9$$ && null != $callbacks$$9$$.success && $callbacks$$9$$.success.call(null, $maxFetchSize_nodeSet_processed$$)));
        return
      }
    }
    this.$handleMaxCountReached$($range$$7$$, $callbacks$$9$$)
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_getMaxFetchSize$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_getMaxFetchSize$$() {
    return this.$m_maxCount$ - (this.$_getLastIndex$() + 1)
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_handleFetchSuccess$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_handleFetchSuccess$$($nodeSet$$3$$, $parent$$8_processed$$1$$, $depth$$6$$, $range$$8$$, $count$$15$$, $callbacks$$10$$) {
    var $toExpand$$;
    $toExpand$$ = [];
    $nodeSet$$3$$ = new $oj$$7$$.$NodeSetWrapper$($nodeSet$$3$$, this.$insertMetadata$.bind(this), $range$$8$$);
    this.$_processNodeSet$($nodeSet$$3$$, $parent$$8_processed$$1$$, $depth$$6$$, $toExpand$$);
    -1 === $count$$15$$ && 0 === $nodeSet$$3$$.$getCount$() && null != $parent$$8_processed$$1$$ && 0 < $depth$$6$$ ? ($parent$$8_processed$$1$$ = this.$_fetchFromAncestors$($parent$$8_processed$$1$$, $depth$$6$$, $callbacks$$10$$)) || null != $callbacks$$10$$ && null != $callbacks$$10$$.success && $callbacks$$10$$.success.call(null, $nodeSet$$3$$) : (null != $callbacks$$10$$ && null != $callbacks$$10$$.success && $callbacks$$10$$.success.call(null, $nodeSet$$3$$), this.$_expandRows$($toExpand$$))
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_fetchFromAncestors$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_fetchFromAncestors$$($parent$$9$$, $depth$$7$$, $callbacks$$11$$, $maxFetchSize$$1$$) {
    var $options$$177$$, $remainToFetch$$, $i$$106$$, $currEntry_index$$82$$, $currDepth$$, $count$$16$$, $countUnknown$$, $range$$9$$;
    void 0 === $maxFetchSize$$1$$ && ($maxFetchSize$$1$$ = this.$_getMaxFetchSize$());
    this.$_isBatchFetching$() && ($options$$177$$ = {queueOnly:!0});
    $remainToFetch$$ = this.$m_fetchSize$;
    for($i$$106$$ = this.$_getLastIndex$() - 1;0 <= $i$$106$$;$i$$106$$--) {
      if($currEntry_index$$82$$ = this.$_getEntry$($i$$106$$), $currDepth$$ = $currEntry_index$$82$$.depth, $currDepth$$ < $depth$$7$$ && ($parent$$9$$ = $currEntry_index$$82$$.parent, $count$$16$$ = this.$m_wrapped$.$getChildCount$($parent$$9$$), $currEntry_index$$82$$ = $currEntry_index$$82$$.index, ($countUnknown$$ = -1 === $count$$16$$) || $currEntry_index$$82$$ < $count$$16$$ - 1)) {
        $range$$9$$ = {};
        $range$$9$$.start = $currEntry_index$$82$$ + 1;
        $countUnknown$$ ? ($range$$9$$.count = Math.min($maxFetchSize$$1$$, Math.max(0, $remainToFetch$$)), $options$$177$$ = void 0) : $range$$9$$.count = Math.min($maxFetchSize$$1$$, Math.min($remainToFetch$$, $count$$16$$ - $range$$9$$.start));
        if(0 == $range$$9$$.count) {
          break
        }
        this.$m_wrapped$.$fetchChildren$($parent$$9$$, $range$$9$$, {success:function($nodeSet$$4$$) {
          this.$_handleFetchSuccess$($nodeSet$$4$$, $parent$$9$$, $currDepth$$, $range$$9$$, $count$$16$$, $callbacks$$11$$)
        }.bind(this)}, $options$$177$$);
        $depth$$7$$ = $currDepth$$;
        $remainToFetch$$ = Math.max(0, $remainToFetch$$ - $range$$9$$.count);
        if($countUnknown$$ || 0 === $currDepth$$ || 0 === $remainToFetch$$) {
          break
        }
      }
    }
    void 0 != $options$$177$$ && this.$m_wrapped$.$fetchChildren$($parent$$9$$, {start:$range$$9$$.count, count:0}, {success:function($nodeSet$$5$$) {
      this.$_handleFetchSuccess$($nodeSet$$5$$, $parent$$9$$, $currDepth$$, $range$$9$$, $count$$16$$, $callbacks$$11$$)
    }.bind(this)});
    return $remainToFetch$$ != this.$m_fetchSize$
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_processNodeSet$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_processNodeSet$$($nodeSet$$6$$, $parent$$10$$, $depth$$8$$, $toExpand$$1$$) {
    var $nodeStart$$, $nodeCount$$, $i$$107$$, $key$$39_metadata$$1$$;
    $nodeStart$$ = $nodeSet$$6$$.$getStart$();
    $nodeCount$$ = $nodeSet$$6$$.$getCount$();
    for($i$$107$$ = 0;$i$$107$$ < $nodeCount$$;$i$$107$$++) {
      $key$$39_metadata$$1$$ = $nodeSet$$6$$.getMetadata($nodeStart$$ + $i$$107$$), $key$$39_metadata$$1$$ = $key$$39_metadata$$1$$.key, this.$_addEntry$($key$$39_metadata$$1$$, $depth$$8$$, $nodeStart$$ + $i$$107$$, $parent$$10$$), this.$_isExpanded$($key$$39_metadata$$1$$) && $toExpand$$1$$.push($key$$39_metadata$$1$$)
    }
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$insertMetadata$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$insertMetadata$$($key$$40$$, $metadata$$2$$) {
    this.$_isExpanded$($key$$40$$) && !$metadata$$2$$.leaf ? $metadata$$2$$.state = "expanded" : $metadata$$2$$.state = $metadata$$2$$.leaf ? "leaf" : "collapsed"
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_fetchRowsFromDescendents$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_fetchRowsFromDescendents$$($range$$10$$, $callbacks$$12$$) {
    var $options$$178$$ = {maxCount:this.$m_maxCount$};
    0 <= this.$_getLastIndex$() && ($options$$178$$.start = this.$_getEntry$(this.$_getLastIndex$()).key);
    this.$m_wrapped$.$fetchDescendents$(null, null, {success:function($nodeSet$$7$$) {
      this.$_handleFetchDescendentsSuccess$($nodeSet$$7$$, $range$$10$$, $callbacks$$12$$)
    }.bind(this)}, $options$$178$$)
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_handleFetchDescendentsSuccess$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_handleFetchDescendentsSuccess$$($nodeSet$$8$$, $range$$11$$, $callbacks$$13$$) {
    var $maxFetchSize$$2_options$$179$$, $actualStart_count$$17$$, $lastEntry$$1$$;
    $range$$11$$.start > this.$_getLastIndex$() ? ($maxFetchSize$$2_options$$179$$ = this.$_getMaxFetchSize$(), $actualStart_count$$17$$ = Math.min($maxFetchSize$$2_options$$179$$, $range$$11$$.count), $nodeSet$$8$$ = new $oj$$7$$.$NodeSetWrapper$($nodeSet$$8$$, this.$insertMetadata$.bind(this)), 0 <= this.$_getLastIndex$() ? ($lastEntry$$1$$ = this.$_getLastEntry$(), $maxFetchSize$$2_options$$179$$ = {index:0, found:!1, count:0}, this.$_processDescendentsNodeSet$($nodeSet$$8$$, null, 0, $lastEntry$$1$$, 
    $actualStart_count$$17$$, $maxFetchSize$$2_options$$179$$), $actualStart_count$$17$$ = $maxFetchSize$$2_options$$179$$.index + 1) : ($maxFetchSize$$2_options$$179$$ = {count:0}, this.$_processDescendentsNodeSet$($nodeSet$$8$$, null, 0, null, $actualStart_count$$17$$, $maxFetchSize$$2_options$$179$$), $actualStart_count$$17$$ = 0), null != $callbacks$$13$$ && null != $callbacks$$13$$.success && ($nodeSet$$8$$ = null != $maxFetchSize$$2_options$$179$$ ? 0 === $maxFetchSize$$2_options$$179$$.count ? 
    new $oj$$7$$.$EmptyNodeSet$(null, $range$$11$$.start) : new $oj$$7$$.$FlattenedNodeSet$($nodeSet$$8$$, $actualStart_count$$17$$) : new $oj$$7$$.$FlattenedNodeSet$($nodeSet$$8$$), $callbacks$$13$$.success.call(null, $nodeSet$$8$$))) : this.$handleMaxCountReached$($range$$11$$, $callbacks$$13$$)
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_processDescendentsNodeSet$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_processDescendentsNodeSet$$($nodeSet$$9$$, $parent$$11$$, $depth$$9$$, $lastEntry$$2$$, $maxCount$$, $options$$180$$) {
    var $nodeStart$$1$$, $nodeCount$$1$$, $i$$108$$, $childNodeSet_metadata$$3$$, $key$$41$$;
    $nodeStart$$1$$ = $nodeSet$$9$$.$getStart$();
    $nodeCount$$1$$ = $nodeSet$$9$$.$getCount$();
    for($i$$108$$ = 0;$i$$108$$ < $nodeCount$$1$$ && $options$$180$$.count != $maxCount$$;$i$$108$$++) {
      $childNodeSet_metadata$$3$$ = $nodeSet$$9$$.getMetadata($nodeStart$$1$$ + $i$$108$$);
      $key$$41$$ = $childNodeSet_metadata$$3$$.key;
      $options$$180$$.checkDepth && $lastEntry$$2$$.depth === $depth$$9$$ && ($options$$180$$.found = !0, $options$$180$$.checkDepth = !1);
      if(null == $lastEntry$$2$$ || $options$$180$$.found) {
        this.$_addEntry$($key$$41$$, $depth$$9$$, $nodeStart$$1$$ + $i$$108$$, $parent$$11$$), $options$$180$$.count += 1, $childNodeSet_metadata$$3$$.state = $childNodeSet_metadata$$3$$.leaf ? "leaf" : "expanded"
      }
      null == $lastEntry$$2$$ || $options$$180$$.found || ($key$$41$$ === $lastEntry$$2$$.key ? $childNodeSet_metadata$$3$$.leaf || this.$_isExpanded$($key$$41$$) ? $options$$180$$.found = !0 : $options$$180$$.checkDepth = !0 : $options$$180$$.index += 1);
      $nodeSet$$9$$.$getChildNodeSet$ && ($childNodeSet_metadata$$3$$ = $nodeSet$$9$$.$getChildNodeSet$($i$$108$$), null != $childNodeSet_metadata$$3$$ && this.$_processDescendentsNodeSet$($childNodeSet_metadata$$3$$, $key$$41$$, $depth$$9$$ + 1, $lastEntry$$2$$, $maxCount$$, $options$$180$$))
    }
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.expand = function $$oj$$7$$$$FlattenedTreeDataSource$$$expand$($rowKey$$) {
    this.$_expand$($rowKey$$)
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.expand", {expand:$oj$$7$$.$FlattenedTreeDataSource$.prototype.expand});
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_expand$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_expand$$($rowKey$$1$$) {
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
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.collapse = function $$oj$$7$$$$FlattenedTreeDataSource$$$collapse$($rowKey$$2$$) {
    var $rowIndex$$, $depth$$10_i$$109_parent$$12$$, $count$$19$$, $keys$$3_lastIndex$$, $j$$16$$;
    $rowIndex$$ = this.$getIndex$($rowKey$$2$$) + 1;
    $depth$$10_i$$109_parent$$12$$ = this.$_getEntry$($rowIndex$$ - 1);
    $count$$19$$ = 0;
    $depth$$10_i$$109_parent$$12$$ = $depth$$10_i$$109_parent$$12$$.depth;
    $keys$$3_lastIndex$$ = this.$_getLastIndex$();
    for($j$$16$$ = $rowIndex$$;$j$$16$$ < $keys$$3_lastIndex$$ + 1;$j$$16$$++) {
      var $rowDepth$$ = this.$_getEntry$($j$$16$$).depth;
      if($rowDepth$$ > $depth$$10_i$$109_parent$$12$$) {
        $count$$19$$ += 1
      }else {
        if($rowDepth$$ == $depth$$10_i$$109_parent$$12$$) {
          break
        }
      }
    }
    if(0 != $count$$19$$) {
      this.$_isExpandAll$() ? this.$m_collapsedKeys$.push($rowKey$$2$$) : this.$_removeExpanded$($rowKey$$2$$);
      $keys$$3_lastIndex$$ = [];
      for($depth$$10_i$$109_parent$$12$$ = 0;$depth$$10_i$$109_parent$$12$$ < $count$$19$$;$depth$$10_i$$109_parent$$12$$++) {
        $keys$$3_lastIndex$$.push({key:this.$_getEntry$($rowIndex$$ + $depth$$10_i$$109_parent$$12$$).key, index:$rowIndex$$ + $depth$$10_i$$109_parent$$12$$})
      }
      this.$_removeEntry$($rowIndex$$, $count$$19$$);
      this.$removeRows$($keys$$3_lastIndex$$);
      this.handleEvent("collapse", {rowKey:$rowKey$$2$$})
    }
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.collapse", {collapse:$oj$$7$$.$FlattenedTreeDataSource$.prototype.collapse});
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_isExpanded$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_isExpanded$$($rowKey$$3$$) {
    return this.$_isExpandAll$() ? this.$m_collapsedKeys$ && 0 < this.$m_collapsedKeys$.length ? -1 === this.$_getCollapsedKeyIndex$($rowKey$$3$$) : !0 : this.$m_expandedKeys$ && 0 < this.$m_expandedKeys$.length ? -1 < this.$_getExpandedKeyIndex$($rowKey$$3$$) : !1
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_getCollapsedKeyIndex$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_getCollapsedKeyIndex$$($rowKey$$4$$) {
    return this.$_getKeyIndex$(this.$m_collapsedKeys$, $rowKey$$4$$)
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_getExpandedKeyIndex$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_getExpandedKeyIndex$$($rowKey$$5$$) {
    return this.$_getKeyIndex$(this.$m_expandedKeys$, $rowKey$$5$$)
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_getKeyIndex$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_getKeyIndex$$($arr$$21$$, $rowKey$$6$$) {
    var $i$$110$$, $index$$83$$;
    $index$$83$$ = -1;
    for($i$$110$$ = 0;$i$$110$$ < $arr$$21$$.length;$i$$110$$++) {
      $arr$$21$$[$i$$110$$] === $rowKey$$6$$ && ($index$$83$$ = $i$$110$$)
    }
    return $index$$83$$
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_removeExpanded$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_removeExpanded$$($index$$84_rowKey$$7$$) {
    $index$$84_rowKey$$7$$ = this.$_getExpandedKeyIndex$($index$$84_rowKey$$7$$);
    -1 < $index$$84_rowKey$$7$$ && this.$m_expandedKeys$.splice($index$$84_rowKey$$7$$, 1)
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_removeCollapsed$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_removeCollapsed$$($index$$85_rowKey$$8$$) {
    $index$$85_rowKey$$8$$ = this.$_getCollapsedKeyIndex$($index$$85_rowKey$$8$$);
    -1 < $index$$85_rowKey$$8$$ && this.$m_collapsedKeys$.splice($index$$85_rowKey$$8$$, 1)
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$handleExpandSuccess$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$handleExpandSuccess$$($rowKey$$9$$, $nodeSet$$11$$, $origCount$$) {
    var $refIndex$$1$$, $rangeStart$$, $metadata$$4_rowStart$$, $rowCount$$, $parent$$13$$, $depth$$11$$, $key$$42$$, $toExpand$$2$$, $i$$111$$;
    $nodeSet$$11$$ = new $oj$$7$$.$NodeSetWrapper$($nodeSet$$11$$, this.$insertMetadata$.bind(this));
    $rangeStart$$ = $refIndex$$1$$ = this.$getIndex$($rowKey$$9$$) + 1;
    $metadata$$4_rowStart$$ = $nodeSet$$11$$.$getStart$();
    $rowCount$$ = $nodeSet$$11$$.$getCount$();
    $parent$$13$$ = this.$_getEntry$($refIndex$$1$$ - 1);
    $depth$$11$$ = $parent$$13$$.depth + 1;
    $toExpand$$2$$ = [];
    for($i$$111$$ = $metadata$$4_rowStart$$;$i$$111$$ < $rowCount$$;$i$$111$$++) {
      $metadata$$4_rowStart$$ = $nodeSet$$11$$.getMetadata($i$$111$$), $key$$42$$ = $metadata$$4_rowStart$$.key, this.$_isExpanded$($key$$42$$) && $toExpand$$2$$.push($key$$42$$), this.$_insertRow$($refIndex$$1$$, $metadata$$4_rowStart$$, $parent$$13$$.key, $i$$111$$, $depth$$11$$), $refIndex$$1$$++
    }
    this.$_isExpandAll$() ? this.$_removeCollapsed$($rowKey$$9$$) : -1 === this.$m_expandedKeys$.indexOf($rowKey$$9$$) && this.$m_expandedKeys$.push($rowKey$$9$$);
    this.$insertRows$($rangeStart$$, $rowKey$$9$$, $nodeSet$$11$$);
    -1 === $origCount$$ && $rowCount$$ === this.$m_fetchSize$ || $origCount$$ > $rowCount$$ || $refIndex$$1$$ == this.$m_maxCount$ ? this.$_deleteAllRowsBelow$($refIndex$$1$$) : this.$_getLastIndex$() >= this.$m_maxCount$ && this.$_deleteAllRowsBelow$(this.$m_maxCount$);
    this.$_expandRows$($toExpand$$2$$)
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_expandRows$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_expandRows$$($keys$$4$$) {
    var $options$$182$$, $i$$112$$;
    this.$_isBatchFetching$() && ($options$$182$$ = {queueOnly:!0});
    for($i$$112$$ = 0;$i$$112$$ < $keys$$4$$.length;$i$$112$$++) {
      $i$$112$$ == $keys$$4$$.length - 1 ? this.$_expand$($keys$$4$$[$i$$112$$]) : this.$_expand$($keys$$4$$[$i$$112$$], $options$$182$$)
    }
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_insertRow$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_insertRow$$($index$$86$$, $key$$43_metadata$$5$$, $parentKey$$, $childIndex$$, $depth$$12$$) {
    $key$$43_metadata$$5$$ = $key$$43_metadata$$5$$.key;
    $index$$86$$ <= this.$_getLastIndex$() ? this.$_addEntry$($key$$43_metadata$$5$$, $depth$$12$$, $childIndex$$, $parentKey$$, $index$$86$$) : this.$_addEntry$($key$$43_metadata$$5$$, $depth$$12$$, $childIndex$$, $parentKey$$)
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_deleteAllRowsBelow$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_deleteAllRowsBelow$$($index$$87$$, $count$$20$$) {
    var $keys$$5$$;
    void 0 == $count$$20$$ && ($count$$20$$ = this.$_getLastIndex$() + 1 - $index$$87$$);
    $keys$$5$$ = [];
    for(var $i$$113$$ = 0;$i$$113$$ < $count$$20$$;$i$$113$$++) {
      $keys$$5$$.push({row:this.$_getEntry$($index$$87$$ + $i$$113$$).key})
    }
    this.$_removeEntry$($index$$87$$, $count$$20$$);
    this.$removeRows$($keys$$5$$)
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_handleModelEvent$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_handleModelEvent$$($event$$41$$) {
    var $operation$$4$$, $ancestors_parentKey$$1$$, $index$$88$$;
    $operation$$4$$ = $event$$41$$.operation;
    $ancestors_parentKey$$1$$ = $event$$41$$.parent;
    $ancestors_parentKey$$1$$ = Array.isArray($ancestors_parentKey$$1$$) ? $ancestors_parentKey$$1$$[$ancestors_parentKey$$1$$.length - 1] : $ancestors_parentKey$$1$$;
    $index$$88$$ = $event$$41$$.index;
    "insert" === $operation$$4$$ ? this.$_handleInsertEvent$($ancestors_parentKey$$1$$, $index$$88$$, $event$$41$$.data) : "delete" === $operation$$4$$ ? this.$_handleDeleteEvent$($ancestors_parentKey$$1$$, $index$$88$$) : "refresh" === $operation$$4$$ && this.$_handleRefreshEvent$($ancestors_parentKey$$1$$)
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_handleInsertEvent$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_handleInsertEvent$$($parentKey$$2$$, $index$$89$$, $metadata$$6_nodeSet$$12$$) {
    var $insertIndex_parentIndex$$, $depth$$13$$;
    $insertIndex_parentIndex$$ = this.$getIndex$($parentKey$$2$$);
    $depth$$13$$ = this.$_getEntry$($insertIndex_parentIndex$$).depth + 1;
    $insertIndex_parentIndex$$ = $insertIndex_parentIndex$$ + $index$$89$$ + 1;
    $metadata$$6_nodeSet$$12$$ = $metadata$$6_nodeSet$$12$$.getMetadata($metadata$$6_nodeSet$$12$$.$getStart$());
    this.$_insertRow$($insertIndex_parentIndex$$, $metadata$$6_nodeSet$$12$$, $parentKey$$2$$, $index$$89$$, $depth$$13$$)
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_handleDeleteEvent$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_handleDeleteEvent$$($parentKey$$3$$, $index$$90$$) {
    var $parentIndex$$1_startIndex$$, $currentIndex_parent$$15$$, $start$$17$$, $lastIndex$$1$$, $current$$4$$;
    $parentIndex$$1_startIndex$$ = this.$getIndex$($parentKey$$3$$);
    $currentIndex_parent$$15$$ = this.$_getEntry$($parentIndex$$1_startIndex$$);
    $parentIndex$$1_startIndex$$ += $index$$90$$;
    $start$$17$$ = this.$_getEntry$($parentIndex$$1_startIndex$$);
    $oj$$7$$.$Assert$.assert($start$$17$$.parent === $currentIndex_parent$$15$$ && $start$$17$$.depth === $currentIndex_parent$$15$$.depth + 1);
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
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_handleRefreshEvent$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_handleRefreshEvent$$($parentKey$$4$$) {
    null == $parentKey$$4$$ && this.refresh()
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_isExpandAll$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_isExpandAll$$() {
    var $capability$$ = this.$m_wrapped$.getCapability("fetchDescendents");
    return void 0 != this.$m_collapsedKeys$ && null != $capability$$ && "disable" != $capability$$
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_isBatchFetching$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_isBatchFetching$$() {
    return"enable" === this.$m_wrapped$.getCapability("batchFetch")
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.refresh = function $$oj$$7$$$$FlattenedTreeDataSource$$$refresh$() {
    this.$_clearAll$()
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$getIndex$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$getIndex$$($rowKey$$10$$) {
    var $lastIndex$$2$$, $i$$114$$, $rowData$$2$$;
    $lastIndex$$2$$ = this.$_getLastIndex$();
    for($i$$114$$ = 0;$i$$114$$ <= $lastIndex$$2$$;$i$$114$$++) {
      if($rowData$$2$$ = this.$_getEntry$($i$$114$$), $rowData$$2$$.key == $rowKey$$10$$) {
        return $i$$114$$
      }
    }
    return-1
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.getKey = function $$oj$$7$$$$FlattenedTreeDataSource$$$getKey$($index$$91$$) {
    return 0 > $index$$91$$ || $index$$91$$ > this.$_getLastIndex$() ? null : this.$_getEntry$($index$$91$$).key
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$getFetchedRange$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$getFetchedRange$$() {
    return{start:0, end:this.$_getLastIndex$() + 1}
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$handleMaxCountReached$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$handleMaxCountReached$$($range$$12$$, $callbacks$$14$$) {
    null != $callbacks$$14$$ && null != $callbacks$$14$$.error && $callbacks$$14$$.error.call(null)
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$insertRows$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$insertRows$$() {
    $oj$$7$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$removeRows$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$removeRows$$() {
    $oj$$7$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_getLastIndex$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_getLastIndex$$() {
    return this.$m_cache$.length - 1
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_getLastEntry$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_getLastEntry$$() {
    return this.$m_cache$[this.$_getLastIndex$()]
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_getEntry$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_getEntry$$($index$$92$$) {
    return this.$m_cache$[$index$$92$$]
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_addEntry$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_addEntry$$($key$$44$$, $depth$$14$$, $index$$93$$, $parent$$16$$, $insertAt$$) {
    var $rowData$$3$$ = {};
    $rowData$$3$$.key = $key$$44$$;
    $rowData$$3$$.depth = $depth$$14$$;
    $rowData$$3$$.index = $index$$93$$;
    $rowData$$3$$.parent = $parent$$16$$;
    void 0 === $insertAt$$ ? this.$m_cache$.push($rowData$$3$$) : this.$m_cache$.splice($insertAt$$, 0, $rowData$$3$$)
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_removeEntry$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_removeEntry$$($index$$94$$, $count$$22$$) {
    this.$m_cache$.splice($index$$94$$, $count$$22$$)
  };
  $oj$$7$$.$FlattenedTreeDataSource$.prototype.$_clearAll$ = function $$oj$$7$$$$FlattenedTreeDataSource$$$$_clearAll$$() {
    this.$m_cache$.length = 0
  };
  $oj$$7$$.$_JsonTreeNodeDataSource$ = function $$oj$$7$$$$_JsonTreeNodeDataSource$$() {
    this.id = null;
    this.depth = 0;
    this.parent = null;
    this.children = [];
    this.$leaf$ = this.attr = this.title = null
  };
  $oj$$7$$.$_JsonTreeNodeDataSource$.prototype.$_ascending$ = function $$oj$$7$$$$_JsonTreeNodeDataSource$$$$_ascending$$($key$$45$$) {
    return function($a$$56$$, $b$$35$$) {
      return $a$$56$$.attr && $b$$35$$.attr && $a$$56$$.attr[$key$$45$$] && $b$$35$$.attr[$key$$45$$] ? $a$$56$$.attr[$key$$45$$] < $b$$35$$.attr[$key$$45$$] ? 0 : 1 : $a$$56$$[$key$$45$$] < $b$$35$$[$key$$45$$] ? 0 : 1
    }
  };
  $oj$$7$$.$_JsonTreeNodeDataSource$.prototype.$_descending$ = function $$oj$$7$$$$_JsonTreeNodeDataSource$$$$_descending$$($key$$46$$) {
    return function($a$$57$$, $b$$36$$) {
      return $a$$57$$.attr && $b$$36$$.attr && $a$$57$$.attr[$key$$46$$] && $b$$36$$.attr[$key$$46$$] ? $a$$57$$.attr[$key$$46$$] < $b$$36$$.attr[$key$$46$$] ? 1 : 0 : $a$$57$$[$key$$46$$] < $b$$36$$[$key$$46$$] ? 1 : 0
    }
  };
  $oj$$7$$.$_JsonTreeNodeDataSource$.prototype.$_sortRecursive$ = function $$oj$$7$$$$_JsonTreeNodeDataSource$$$$_sortRecursive$$($criteria$$1$$) {
    var $i$$115_key$$47$$ = $criteria$$1$$.key;
    "ascending" === $criteria$$1$$.direction ? this.children.sort(this.$_ascending$($i$$115_key$$47$$)) : "descending" === $criteria$$1$$.direction && this.children.sort(this.$_descending$($i$$115_key$$47$$));
    for(var $i$$115_key$$47$$ = 0, $l$$3$$ = this.children.length;$i$$115_key$$47$$ < $l$$3$$;$i$$115_key$$47$$++) {
      this.children[$i$$115_key$$47$$].$_sortRecursive$($criteria$$1$$)
    }
  };
  $oj$$7$$.$JsonTreeDataSource$ = function $$oj$$7$$$$JsonTreeDataSource$$($data$$47$$) {
    var $tree$$;
    $tree$$ = new $oj$$7$$.$_JsonTreeNodeDataSource$;
    $data$$47$$.id || ($tree$$.id = "root");
    this.data = this.$_createTreeDataSource$(0, $tree$$, $data$$47$$);
    $oj$$7$$.$JsonTreeDataSource$.$superclass$.constructor.call(this, $tree$$)
  };
  $goog$exportPath_$$("JsonTreeDataSource", $oj$$7$$.$JsonTreeDataSource$, $oj$$7$$);
  $oj$$7$$.$Object$.$createSubclass$($oj$$7$$.$JsonTreeDataSource$, $oj$$7$$.$TreeDataSource$, "oj.JsonTreeDataSource");
  $oj$$7$$.$JsonTreeDataSource$.prototype.Init = function $$oj$$7$$$$JsonTreeDataSource$$$Init$() {
    $oj$$7$$.$JsonTreeDataSource$.$superclass$.Init.call(this)
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.Init", {Init:$oj$$7$$.$JsonTreeDataSource$.prototype.Init});
  $oj$$7$$.$JsonTreeDataSource$.prototype.$_createTreeDataSource$ = function $$oj$$7$$$$JsonTreeDataSource$$$$_createTreeDataSource$$($c$$22$$, $target$$75$$, $source$$7$$, $depth$$15$$) {
    var $children$$1$$, $node$$12$$, $child$$2$$, $prop$$56$$, $propr$$, $prp$$, $j$$17$$;
    $depth$$15$$ || ($depth$$15$$ = 0);
    for($prop$$56$$ in $source$$7$$) {
      if("children" == $prop$$56$$ || 0 == $depth$$15$$ && $source$$7$$ instanceof Array) {
        for($children$$1$$ = 0 == $depth$$15$$ && $source$$7$$ instanceof Array ? $source$$7$$ : $source$$7$$[$prop$$56$$], $depth$$15$$++, $j$$17$$ = 0;$j$$17$$ < $children$$1$$.length;$j$$17$$++) {
          $child$$2$$ = $children$$1$$[$j$$17$$];
          $node$$12$$ = new $oj$$7$$.$_JsonTreeNodeDataSource$;
          $child$$2$$.id || ($c$$22$$++, $child$$2$$.attr ? $child$$2$$.attr.id || ($child$$2$$.attr.id = "rid_" + $c$$22$$) : $node$$12$$.id = "rid_" + $c$$22$$);
          for($propr$$ in $child$$2$$) {
            for($prp$$ in $node$$12$$) {
              $propr$$ == $prp$$ && "children" != $propr$$ && ($node$$12$$[$prp$$] = $child$$2$$[$propr$$]), "depth" == $prp$$ && ($node$$12$$[$prp$$] = $depth$$15$$)
            }
          }
          $target$$75$$.children.push($node$$12$$);
          for($prp$$ in $child$$2$$) {
            "children" == $prp$$ && this.$_createTreeDataSource$($c$$22$$, $target$$75$$.children[$j$$17$$], $child$$2$$, $depth$$15$$)
          }
        }
      }
    }
    return $target$$75$$
  };
  $oj$$7$$.$JsonTreeDataSource$.prototype.$getChildCount$ = function $$oj$$7$$$$JsonTreeDataSource$$$$getChildCount$$($parent$$17_parentKey$$5$$) {
    $parent$$17_parentKey$$5$$ || ($parent$$17_parentKey$$5$$ = this.data.id);
    $parent$$17_parentKey$$5$$ = this.$_searchTreeById$(this.data, $parent$$17_parentKey$$5$$);
    return $parent$$17_parentKey$$5$$.children ? $parent$$17_parentKey$$5$$.children.length : null
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.getChildCount", {$getChildCount$:$oj$$7$$.$JsonTreeDataSource$.prototype.$getChildCount$});
  $oj$$7$$.$JsonTreeDataSource$.prototype.$fetchChildren$ = function $$oj$$7$$$$JsonTreeDataSource$$$$fetchChildren$$($nodeSet$$14_parentKey$$6$$, $i$$116_range$$13$$, $callbacks$$15$$) {
    var $childStart$$, $childEnd$$, $results$$, $parent$$18$$, $node$$13$$;
    $results$$ = [];
    $nodeSet$$14_parentKey$$6$$ || ($nodeSet$$14_parentKey$$6$$ = this.data.id);
    $parent$$18$$ = this.$_searchTreeById$(this.data, $nodeSet$$14_parentKey$$6$$);
    $i$$116_range$$13$$ || ($i$$116_range$$13$$ = [], $i$$116_range$$13$$.start = 0, $i$$116_range$$13$$.count = $parent$$18$$.children.length);
    $i$$116_range$$13$$.count || ($i$$116_range$$13$$.count = $parent$$18$$.children.length);
    $i$$116_range$$13$$.start || ($i$$116_range$$13$$.start = 0);
    $childStart$$ = $i$$116_range$$13$$.start;
    $childEnd$$ = Math.min($parent$$18$$.children.length, $childStart$$ + $i$$116_range$$13$$.count);
    for($i$$116_range$$13$$ = $childStart$$;$i$$116_range$$13$$ < $childEnd$$;$i$$116_range$$13$$ += 1) {
      $node$$13$$ = new $oj$$7$$.$_JsonTreeNodeDataSource$, $parent$$18$$.children[$i$$116_range$$13$$].attr && ($node$$13$$.attr = $parent$$18$$.children[$i$$116_range$$13$$].attr), $parent$$18$$.children[$i$$116_range$$13$$].id && ($node$$13$$.id = $parent$$18$$.children[$i$$116_range$$13$$].id), $parent$$18$$.children[$i$$116_range$$13$$].depth && ($node$$13$$.depth = $parent$$18$$.children[$i$$116_range$$13$$].depth), $parent$$18$$.children[$i$$116_range$$13$$].title && ($node$$13$$.title = $parent$$18$$.children[$i$$116_range$$13$$].title), 
      $parent$$18$$.children[$i$$116_range$$13$$].parent && ($node$$13$$.parent = $parent$$18$$.children[$i$$116_range$$13$$].parent), $node$$13$$.$leaf$ = 0 < $parent$$18$$.children[$i$$116_range$$13$$].children.length ? !1 : !0, $results$$.push($node$$13$$)
    }
    $nodeSet$$14_parentKey$$6$$ = new $oj$$7$$.$JsonNodeSet$($childStart$$, $childEnd$$, $results$$, $nodeSet$$14_parentKey$$6$$, $parent$$18$$.depth);
    null != $callbacks$$15$$ && null != $callbacks$$15$$.success && $callbacks$$15$$.success.call(null, $nodeSet$$14_parentKey$$6$$)
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.fetchChildren", {$fetchChildren$:$oj$$7$$.$JsonTreeDataSource$.prototype.$fetchChildren$});
  $oj$$7$$.$JsonTreeDataSource$.prototype.$fetchDescendents$ = function $$oj$$7$$$$JsonTreeDataSource$$$$fetchDescendents$$($nodeSet$$15_parentKey$$7$$, $childEnd$$1_range$$14$$, $callbacks$$16$$) {
    var $childStart$$1_i$$117$$, $results$$1$$, $parent$$19$$;
    $results$$1$$ = [];
    $nodeSet$$15_parentKey$$7$$ || ($nodeSet$$15_parentKey$$7$$ = this.data.id);
    $parent$$19$$ = this.$_searchTreeById$(this.data, $nodeSet$$15_parentKey$$7$$);
    $childEnd$$1_range$$14$$ || ($childEnd$$1_range$$14$$ = [], $childEnd$$1_range$$14$$.start = 0, $childEnd$$1_range$$14$$.count = $parent$$19$$.children.length);
    $childEnd$$1_range$$14$$.count || ($childEnd$$1_range$$14$$.count = $parent$$19$$.children.length);
    $childEnd$$1_range$$14$$.start || ($childEnd$$1_range$$14$$.start = 0);
    $childStart$$1_i$$117$$ = $childEnd$$1_range$$14$$.start;
    for($childEnd$$1_range$$14$$ = Math.min($parent$$19$$.children.length, $childStart$$1_i$$117$$ + $childEnd$$1_range$$14$$.count);$childStart$$1_i$$117$$ < $childEnd$$1_range$$14$$;$childStart$$1_i$$117$$ += 1) {
      $parent$$19$$.children[$childStart$$1_i$$117$$].$leaf$ = 0 < $parent$$19$$.children[$childStart$$1_i$$117$$].children.length ? !1 : !0, $results$$1$$.push($parent$$19$$.children[$childStart$$1_i$$117$$])
    }
    $nodeSet$$15_parentKey$$7$$ = new $oj$$7$$.$JsonNodeSet$(0, $results$$1$$.length, $results$$1$$, $nodeSet$$15_parentKey$$7$$, $parent$$19$$.depth);
    null != $callbacks$$16$$ && null != $callbacks$$16$$.success && $callbacks$$16$$.success.call(null, $nodeSet$$15_parentKey$$7$$)
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.fetchDescendents", {$fetchDescendents$:$oj$$7$$.$JsonTreeDataSource$.prototype.$fetchDescendents$});
  $oj$$7$$.$JsonTreeDataSource$.prototype.move = function $$oj$$7$$$$JsonTreeDataSource$$$move$($moveNode_nodeToMove$$, $refNode$$8_referenceNode$$, $index$$95_position$$4$$, $callbacks$$17$$) {
    var $parent$$20_refNodeKey$$;
    $parent$$20_refNodeKey$$ = $refNode$$8_referenceNode$$;
    if(!$parent$$20_refNodeKey$$ || $parent$$20_refNodeKey$$ == this.data.id) {
      if("inside" != $index$$95_position$$4$$) {
        console.log("Error: root can not be the reference node if position equals to " + $index$$95_position$$4$$);
        return
      }
      $parent$$20_refNodeKey$$ || ($parent$$20_refNodeKey$$ = this.data.id)
    }
    $moveNode_nodeToMove$$ = this.$_searchTreeById$(null, $moveNode_nodeToMove$$);
    this.$_searchTreeById$($moveNode_nodeToMove$$, $parent$$20_refNodeKey$$) ? console.log("Error: the node to move contains the reference node as its sub-tree.") : ($refNode$$8_referenceNode$$ = this.$_searchTreeById$(null, $parent$$20_refNodeKey$$), $parent$$20_refNodeKey$$ = this.$_getParentById$($parent$$20_refNodeKey$$), this.$_removeFromTree$($moveNode_nodeToMove$$), "inside" == $index$$95_position$$4$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - ($refNode$$8_referenceNode$$.depth + 
    1)), $refNode$$8_referenceNode$$.children.push($moveNode_nodeToMove$$)) : "before" == $index$$95_position$$4$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$.depth), $index$$95_position$$4$$ = $parent$$20_refNodeKey$$.children.indexOf($refNode$$8_referenceNode$$), -1 < $index$$95_position$$4$$ && (0 != $index$$95_position$$4$$ ? $parent$$20_refNodeKey$$.children.splice($index$$95_position$$4$$ - 1, 0, $moveNode_nodeToMove$$) : $parent$$20_refNodeKey$$.children.unshift($moveNode_nodeToMove$$))) : 
    "after" == $index$$95_position$$4$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$.depth), $index$$95_position$$4$$ = $parent$$20_refNodeKey$$.children.indexOf($refNode$$8_referenceNode$$), -1 < $index$$95_position$$4$$ && $parent$$20_refNodeKey$$.children.splice($index$$95_position$$4$$, 0, $moveNode_nodeToMove$$)) : "first" == $index$$95_position$$4$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$.depth), 
    $parent$$20_refNodeKey$$.children.unshift($moveNode_nodeToMove$$)) : "last" == $index$$95_position$$4$$ && (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$.depth), $parent$$20_refNodeKey$$.children.push($moveNode_nodeToMove$$)), null != $callbacks$$17$$ && null != $callbacks$$17$$.success && $callbacks$$17$$.success.call(null, this.data))
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.move", {move:$oj$$7$$.$JsonTreeDataSource$.prototype.move});
  $oj$$7$$.$JsonTreeDataSource$.prototype.sort = function $$oj$$7$$$$JsonTreeDataSource$$$sort$($criteria$$2$$, $callbacks$$18$$) {
    var $parent$$21$$;
    $parent$$21$$ = this.$_searchTreeById$(this.data, this.data.id);
    $parent$$21$$.$_sortRecursive$($criteria$$2$$);
    null != $callbacks$$18$$ && null != $callbacks$$18$$.success && $callbacks$$18$$.success.call(null, $parent$$21$$)
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.sort", {sort:$oj$$7$$.$JsonTreeDataSource$.prototype.sort});
  $oj$$7$$.$JsonTreeDataSource$.prototype.$_getParentById$ = function $$oj$$7$$$$JsonTreeDataSource$$$$_getParentById$$($refNodeKey$$1$$, $currNode$$) {
    var $i$$118$$, $parent$$22$$ = null;
    if($refNodeKey$$1$$ == this.data.id) {
      return null
    }
    $currNode$$ || ($currNode$$ = this.data);
    if($currNode$$.children && 0 < $currNode$$.children.length) {
      for($i$$118$$ = 0;$i$$118$$ < $currNode$$.children.length;$i$$118$$++) {
        if($currNode$$.children[$i$$118$$].id && $currNode$$.children[$i$$118$$].id == $refNodeKey$$1$$ || $currNode$$.children[$i$$118$$].attr && $currNode$$.children[$i$$118$$].attr.id == $refNodeKey$$1$$) {
          return $currNode$$
        }
      }
      for($i$$118$$ = 0;$i$$118$$ < $currNode$$.children.length && !($parent$$22$$ = this.$_getParentById$($refNodeKey$$1$$, $currNode$$.children[$i$$118$$]));$i$$118$$++) {
      }
    }
    return $parent$$22$$
  };
  $oj$$7$$.$JsonTreeDataSource$.prototype.$_searchTreeById$ = function $$oj$$7$$$$JsonTreeDataSource$$$$_searchTreeById$$($currChild$$, $parentKey$$9$$) {
    var $i$$119$$, $result$$10$$ = null;
    $currChild$$ || ($currChild$$ = this.data);
    if($currChild$$.id && $currChild$$.id == $parentKey$$9$$ || $currChild$$.attr && $currChild$$.attr.id == $parentKey$$9$$) {
      return $currChild$$
    }
    if(null != $currChild$$.children) {
      for($i$$119$$ = 0;$i$$119$$ < $currChild$$.children.length && !$result$$10$$;$i$$119$$++) {
        $result$$10$$ = $currChild$$.children[$i$$119$$].id && $currChild$$.children[$i$$119$$].id == $parentKey$$9$$ || $currChild$$.children[$i$$119$$].attr && $currChild$$.children[$i$$119$$].attr.id == $parentKey$$9$$ ? $currChild$$.children[$i$$119$$] : this.$_searchTreeById$($currChild$$.children[$i$$119$$], $parentKey$$9$$)
      }
    }
    return $result$$10$$
  };
  $oj$$7$$.$JsonTreeDataSource$.prototype.$_updateDepth$ = function $$oj$$7$$$$JsonTreeDataSource$$$$_updateDepth$$($currChild$$1$$, $offset$$16$$) {
    var $i$$120$$;
    $currChild$$1$$.depth -= $offset$$16$$;
    if($currChild$$1$$.children && 0 != $currChild$$1$$.children.length) {
      for($i$$120$$ = 0;$i$$120$$ < $currChild$$1$$.children.length;$i$$120$$++) {
        this.$_updateDepth$($currChild$$1$$.children[$i$$120$$], $offset$$16$$)
      }
    }
  };
  $oj$$7$$.$JsonTreeDataSource$.prototype.$_removeFromTree$ = function $$oj$$7$$$$JsonTreeDataSource$$$$_removeFromTree$$($currChild$$2_index$$96$$) {
    var $key$$48_parent$$23$$;
    $currChild$$2_index$$96$$.id ? $key$$48_parent$$23$$ = $currChild$$2_index$$96$$.id : $currChild$$2_index$$96$$.attr && ($key$$48_parent$$23$$ = $currChild$$2_index$$96$$.attr.id);
    ($key$$48_parent$$23$$ = this.$_getParentById$($key$$48_parent$$23$$)) || ($key$$48_parent$$23$$ = this.data);
    $currChild$$2_index$$96$$ = $key$$48_parent$$23$$.children.indexOf($currChild$$2_index$$96$$);
    -1 < $currChild$$2_index$$96$$ && $key$$48_parent$$23$$.children.splice($currChild$$2_index$$96$$, 1)
  };
  $oj$$7$$.$JsonTreeDataSource$.prototype.getCapability = function $$oj$$7$$$$JsonTreeDataSource$$$getCapability$($feature$$5$$) {
    return"fetchDescendents" === $feature$$5$$ ? "enable" : "sort" === $feature$$5$$ ? "default" : "batchFetch" === $feature$$5$$ ? "disable" : null
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.getCapability", {getCapability:$oj$$7$$.$JsonTreeDataSource$.prototype.getCapability});
  $oj$$7$$.$Row$ = function $$oj$$7$$$$Row$$($attributes$$13$$, $options$$184$$) {
    $oj$$7$$.$Row$._init(this, $attributes$$13$$, $options$$184$$, null)
  };
  $goog$exportPath_$$("Row", $oj$$7$$.$Row$, $oj$$7$$);
  $oj$$7$$.$Object$.$createSubclass$($oj$$7$$.$Row$, $oj$$7$$.$Object$, "Row.Row");
  $oj$$7$$.$Row$.prototype.Init = function $$oj$$7$$$$Row$$$Init$() {
    $oj$$7$$.$Row$.$superclass$.Init.call(this)
  };
  $oj$$7$$.$Row$.prototype.attributes = {};
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("Row.prototype.attributes", {attributes:$oj$$7$$.$Row$.prototype.attributes});
  $oj$$7$$.$Row$.prototype.context = {};
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("Row.prototype.context", {context:$oj$$7$$.$Row$.prototype.context});
  $oj$$7$$.$Row$.prototype.id = null;
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("Row.prototype.id", {id:$oj$$7$$.$Row$.prototype.id});
  $oj$$7$$.$Row$.prototype.$idAttribute$ = null;
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("Row.prototype.idAttribute", {$idAttribute$:$oj$$7$$.$Row$.prototype.$idAttribute$});
  $oj$$7$$.$Row$._init = function $$oj$$7$$$$Row$$_init$($row$$2$$, $attributes$$14_prop$$57$$, $options$$185$$, $properties$$7$$) {
    $attributes$$14_prop$$57$$ = null;
    $row$$2$$.Init();
    $row$$2$$.index = -1;
    $options$$185$$ = $options$$185$$ || {};
    $row$$2$$.attributes = {};
    for($attributes$$14_prop$$57$$ in $properties$$7$$) {
      $properties$$7$$.hasOwnProperty($attributes$$14_prop$$57$$) && ($row$$2$$[$attributes$$14_prop$$57$$] = $properties$$7$$[$attributes$$14_prop$$57$$])
    }
    $row$$2$$.rowSet = $options$$185$$.rowSet;
    $row$$2$$.context = $options$$185$$.context
  };
  $oj$$7$$.$Row$.prototype.clone = function $$oj$$7$$$$Row$$$clone$() {
    $oj$$7$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("Row.prototype.clone", {clone:$oj$$7$$.$Row$.prototype.clone});
  $oj$$7$$.$Row$.prototype.get = function $$oj$$7$$$$Row$$$get$() {
    $oj$$7$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("Row.prototype.get", {get:$oj$$7$$.$Row$.prototype.get});
  $oj$$7$$.$Row$.prototype.set = function $$oj$$7$$$$Row$$$set$() {
    $oj$$7$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("Row.prototype.set", {set:$oj$$7$$.$Row$.prototype.set});
  $oj$$7$$.$Row$.prototype.keys = function $$oj$$7$$$$Row$$$keys$() {
    $oj$$7$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("Row.prototype.keys", {keys:$oj$$7$$.$Row$.prototype.keys});
  $oj$$7$$.$Row$.prototype.$values$ = function $$oj$$7$$$$Row$$$$values$$() {
    $oj$$7$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("Row.prototype.values", {$values$:$oj$$7$$.$Row$.prototype.$values$});
  $oj$$7$$.$Row$.prototype.$pairs$ = function $$oj$$7$$$$Row$$$$pairs$$() {
    $oj$$7$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("Row.prototype.pairs", {$pairs$:$oj$$7$$.$Row$.prototype.$pairs$});
  $oj$$7$$.$RowSet$ = function $$oj$$7$$$$RowSet$$($rows$$, $options$$187$$) {
    $oj$$7$$.$RowSet$._init(this, $rows$$, $options$$187$$, null)
  };
  $goog$exportPath_$$("RowSet", $oj$$7$$.$RowSet$, $oj$$7$$);
  $oj$$7$$.$RowSet$.prototype.$comparator$ = null;
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.comparator", {$comparator$:$oj$$7$$.$RowSet$.prototype.$comparator$});
  $oj$$7$$.$RowSet$.prototype.$sortSupported$ = !0;
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.sortSupported", {$sortSupported$:$oj$$7$$.$RowSet$.prototype.$sortSupported$});
  $oj$$7$$.$Object$.$createSubclass$($oj$$7$$.$RowSet$, $oj$$7$$.$Object$, "RowSet.RowSet");
  $oj$$7$$.$RowSet$.prototype.Init = function $$oj$$7$$$$RowSet$$$Init$() {
    $oj$$7$$.$RowSet$.$superclass$.Init.call(this)
  };
  $oj$$7$$.$RowSet$._init = function $$oj$$7$$$$RowSet$$_init$($rowSet$$, $rows$$1$$, $options$$188$$, $properties$$8$$) {
    var $prop$$58$$;
    $rowSet$$.$_eventHandlers$ = [];
    $rowSet$$.Init();
    if($properties$$8$$) {
      for($prop$$58$$ in $properties$$8$$) {
        $properties$$8$$.hasOwnProperty($prop$$58$$) && ($rowSet$$[$prop$$58$$] = $properties$$8$$[$prop$$58$$])
      }
    }
  };
  $oj$$7$$.$RowSet$.prototype.at = function $$oj$$7$$$$RowSet$$$at$() {
    $oj$$7$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.at", {at:$oj$$7$$.$RowSet$.prototype.at});
  $oj$$7$$.$RowSet$.prototype.fetch = function $$oj$$7$$$$RowSet$$$fetch$() {
    $oj$$7$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.fetch", {fetch:$oj$$7$$.$RowSet$.prototype.fetch});
  $oj$$7$$.$RowSet$.prototype.get = function $$oj$$7$$$$RowSet$$$get$() {
    $oj$$7$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.get", {get:$oj$$7$$.$RowSet$.prototype.get});
  $oj$$7$$.$RowSet$.prototype.hasMore = function $$oj$$7$$$$RowSet$$$hasMore$() {
    $oj$$7$$.$Assert$.$failedInAbstractFunction$();
    return!1
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.hasMore", {hasMore:$oj$$7$$.$RowSet$.prototype.hasMore});
  $oj$$7$$.$RowSet$.prototype.indexOf = function $$oj$$7$$$$RowSet$$$indexOf$() {
    $oj$$7$$.$Assert$.$failedInAbstractFunction$();
    return 0
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.indexOf", {indexOf:$oj$$7$$.$RowSet$.prototype.indexOf});
  $oj$$7$$.$RowSet$.prototype.isEmpty = function $$oj$$7$$$$RowSet$$$isEmpty$() {
    $oj$$7$$.$Assert$.$failedInAbstractFunction$();
    return!0
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.isEmpty", {isEmpty:$oj$$7$$.$RowSet$.prototype.isEmpty});
  $oj$$7$$.$RowSet$.prototype.size = function $$oj$$7$$$$RowSet$$$size$() {
    $oj$$7$$.$Assert$.$failedInAbstractFunction$();
    return 0
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.size", {size:$oj$$7$$.$RowSet$.prototype.size});
  $oj$$7$$.$RowSet$.prototype.sort = function $$oj$$7$$$$RowSet$$$sort$() {
    $oj$$7$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.sort", {sort:$oj$$7$$.$RowSet$.prototype.sort});
  $oj$$7$$.$RowSet$.prototype.totalSize = function $$oj$$7$$$$RowSet$$$totalSize$() {
    $oj$$7$$.$Assert$.$failedInAbstractFunction$();
    return 0
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.totalSize", {totalSize:$oj$$7$$.$RowSet$.prototype.totalSize});
  $oj$$7$$.$RowSet$.prototype.on = function $$oj$$7$$$$RowSet$$$on$($eventType$$25$$, $eventHandler$$3$$) {
    var $foundEventHandler$$1$$ = !1, $i$$122$$;
    for($i$$122$$ = 0;$i$$122$$ < this.$_eventHandlers$.length;$i$$122$$++) {
      if(this.$_eventHandlers$[$i$$122$$].eventType == $eventType$$25$$ && this.$_eventHandlers$[$i$$122$$].eventHandlerFunc == $eventHandler$$3$$) {
        $foundEventHandler$$1$$ = !0;
        break
      }
    }
    $foundEventHandler$$1$$ || this.$_eventHandlers$.push({eventType:$eventType$$25$$, eventHandlerFunc:$eventHandler$$3$$})
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.on", {on:$oj$$7$$.$RowSet$.prototype.on});
  $oj$$7$$.$RowSet$.prototype.off = function $$oj$$7$$$$RowSet$$$off$($eventType$$26$$, $eventHandler$$4$$) {
    var $i$$123$$;
    for($i$$123$$ = 0;$i$$123$$ < this.$_eventHandlers$.length;$i$$123$$++) {
      if(this.$_eventHandlers$[$i$$123$$].eventType == $eventType$$26$$ && this.$_eventHandlers$[$i$$123$$].eventHandlerFunc == $eventHandler$$4$$) {
        this.$_eventHandlers$.remove(this.$_eventHandlers$[$i$$123$$]);
        break
      }
    }
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.off", {off:$oj$$7$$.$RowSet$.prototype.off});
  $oj$$7$$.$RowSet$.prototype.$_handleEvent$ = function $$oj$$7$$$$RowSet$$$$_handleEvent$$($eventType$$27$$, $event$$42$$) {
    var $i$$124$$;
    for($i$$124$$ = 0;$i$$124$$ < this.$_eventHandlers$.length;$i$$124$$++) {
      var $eventHandler$$5$$ = this.$_eventHandlers$[$i$$124$$];
      $eventHandler$$5$$.eventType == $eventType$$27$$ && $eventHandler$$5$$.eventHandlerFunc($event$$42$$)
    }
  };
  $goog$exportPath_$$("RowSet.prototype._handleEvent", $oj$$7$$.$RowSet$.prototype.$_handleEvent$, $oj$$7$$);
  $oj$$7$$.$RowSet$.$EventType$ = {ADD:"add", REMOVE:"remove", RESET:"reset", SORT:"sort", CHANGE:"change", DESTROY:"destroy", REQUEST:"request", SYNC:"sync", ERROR:"error", INVALID:"invalid", ALL:"all"};
  $goog$exportPath_$$("RowSet.EventType", $oj$$7$$.$RowSet$.$EventType$, $oj$$7$$);
  $oj$$7$$.$RowSet$.$_ROW_STATUSES$ = {$_ADDED$:"added", $_DELETED$:"deleted", $_UPDATED$:"updated", $_NONE$:"none"};
  $goog$exportPath_$$("RowSet._ROW_STATUSES", $oj$$7$$.$RowSet$.$_ROW_STATUSES$, $oj$$7$$);
  $oj$$7$$.$ArrayRow$ = function $$oj$$7$$$$ArrayRow$$($attributes$$15$$, $options$$193$$) {
    $oj$$7$$.$ArrayRow$._init(this, $attributes$$15$$, $options$$193$$, null)
  };
  $goog$exportPath_$$("ArrayRow", $oj$$7$$.$ArrayRow$, $oj$$7$$);
  $oj$$7$$.$Object$.$createSubclass$($oj$$7$$.$ArrayRow$, $oj$$7$$.$Row$, "ArrayRow.ArrayRow");
  $oj$$7$$.$ArrayRow$.prototype.Init = function $$oj$$7$$$$ArrayRow$$$Init$() {
    $oj$$7$$.$ArrayRow$.$superclass$.Init.call(this)
  };
  $oj$$7$$.$ArrayRow$.prototype.attributes = {};
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.attributes", {attributes:$oj$$7$$.$ArrayRow$.prototype.attributes});
  $oj$$7$$.$ArrayRow$.prototype.id = null;
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.id", {id:$oj$$7$$.$ArrayRow$.prototype.id});
  $oj$$7$$.$ArrayRow$.prototype.$idAttribute$ = null;
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.idAttribute", {$idAttribute$:$oj$$7$$.$ArrayRow$.prototype.$idAttribute$});
  $oj$$7$$.$ArrayRow$._init = function $$oj$$7$$$$ArrayRow$$_init$($row$$4$$, $attributes$$16$$, $options$$194$$, $properties$$9$$) {
    var $prop$$59$$ = null;
    $row$$4$$.Init();
    $row$$4$$.index = -1;
    $options$$194$$ = $options$$194$$ || {};
    $row$$4$$.attributes = $attributes$$16$$;
    for($prop$$59$$ in $properties$$9$$) {
      $properties$$9$$.hasOwnProperty($prop$$59$$) && ($row$$4$$[$prop$$59$$] = $properties$$9$$[$prop$$59$$])
    }
    $row$$4$$.idAttribute = $options$$194$$.idAttribute;
    $row$$4$$.context = $options$$194$$.context;
    $row$$4$$.$_setupId$()
  };
  $oj$$7$$.$ArrayRow$.prototype.clone = function $$oj$$7$$$$ArrayRow$$$clone$() {
    var $c$$23$$ = new this.constructor, $prop$$60$$;
    for($prop$$60$$ in this) {
      this.hasOwnProperty($prop$$60$$) && this[$prop$$60$$] !== this.attributes && ($c$$23$$[$prop$$60$$] = this[$prop$$60$$])
    }
    $c$$23$$.attributes = $oj$$7$$.$ArrayRow$.$_cloneAttributes$(this.attributes, null);
    $c$$23$$.$_setupId$();
    return $c$$23$$
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.clone", {clone:$oj$$7$$.$ArrayRow$.prototype.clone});
  $oj$$7$$.$ArrayRow$.prototype.get = function $$oj$$7$$$$ArrayRow$$$get$($property$$17$$) {
    return this.attributes[$property$$17$$]
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.get", {get:$oj$$7$$.$ArrayRow$.prototype.get});
  $oj$$7$$.$ArrayRow$.prototype.set = function $$oj$$7$$$$ArrayRow$$$set$($property$$18$$, $value$$142$$, $options$$195$$) {
    var $i$$125_opts$$10$$ = {}, $ignoreLastArg$$2$$ = !1;
    if(arguments && 0 < arguments.length) {
      if(1 < arguments.length && arguments[arguments.length - 1] && ($ignoreLastArg$$2$$ = !0, $i$$125_opts$$10$$ = arguments[arguments.length - 1] || {}), $oj$$7$$.$ArrayRow$.$_hasProperties$($property$$18$$)) {
        this.$_setProp$($property$$18$$, $i$$125_opts$$10$$)
      }else {
        for($i$$125_opts$$10$$ = 0;$i$$125_opts$$10$$ < arguments.length;$i$$125_opts$$10$$ += 2) {
          (void 0 !== arguments[$i$$125_opts$$10$$] || $i$$125_opts$$10$$ < arguments.length - 1 || !$ignoreLastArg$$2$$ && $i$$125_opts$$10$$ === arguments.length - 1) && this.$_setProp$(arguments[$i$$125_opts$$10$$], arguments[$i$$125_opts$$10$$ + 1])
        }
      }
    }
    return this
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.set", {set:$oj$$7$$.$ArrayRow$.prototype.set});
  $oj$$7$$.$ArrayRow$.prototype.keys = function $$oj$$7$$$$ArrayRow$$$keys$() {
    var $prop$$62$$, $retArray$$3$$ = [];
    for($prop$$62$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$62$$) && $retArray$$3$$.push($prop$$62$$)
    }
    return $retArray$$3$$
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.keys", {keys:$oj$$7$$.$ArrayRow$.prototype.keys});
  $oj$$7$$.$ArrayRow$.prototype.$values$ = function $$oj$$7$$$$ArrayRow$$$$values$$() {
    var $prop$$63$$, $retArray$$4$$ = [];
    for($prop$$63$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$63$$) && $retArray$$4$$.push(this.get($prop$$63$$))
    }
    return $retArray$$4$$
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.values", {$values$:$oj$$7$$.$ArrayRow$.prototype.$values$});
  $oj$$7$$.$ArrayRow$.prototype.$pairs$ = function $$oj$$7$$$$ArrayRow$$$$pairs$$() {
    var $prop$$64$$, $retObj$$7$$ = {};
    for($prop$$64$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$64$$) && ($retObj$$7$$[$prop$$64$$] = this.get($prop$$64$$))
    }
    return $retObj$$7$$
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.pairs", {$pairs$:$oj$$7$$.$ArrayRow$.prototype.$pairs$});
  $oj$$7$$.$ArrayRow$.prototype.$_getIdAttr$ = function $$oj$$7$$$$ArrayRow$$$$_getIdAttr$$() {
    return this.idAttribute || "id"
  };
  $oj$$7$$.$ArrayRow$.prototype.$_getProp$ = function $$oj$$7$$$$ArrayRow$$$$_getProp$$($prop$$65$$) {
    return this[$prop$$65$$] instanceof Function ? this[$prop$$65$$]() : this[$prop$$65$$]
  };
  $oj$$7$$.$ArrayRow$.$_hasProperties$ = function $$oj$$7$$$$ArrayRow$$$_hasProperties$$($object$$5$$) {
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
  $oj$$7$$.$ArrayRow$.prototype.$_setupId$ = function $$oj$$7$$$$ArrayRow$$$$_setupId$$() {
    this.id = this.attributes[this.$_getIdAttr$()]
  };
  $oj$$7$$.$ArrayRow$.prototype.$_setPropInternal$ = function $$oj$$7$$$$ArrayRow$$$$_setPropInternal$$($prop$$67$$, $value$$143$$) {
    return $oj$$7$$.$Object$.$innerEquals$(this.attributes[$prop$$67$$], $value$$143$$) ? !1 : (this.attributes[$prop$$67$$] = $value$$143$$, this.$_setupId$(), !0)
  };
  $oj$$7$$.$ArrayRow$.prototype.$_setProp$ = function $$oj$$7$$$$ArrayRow$$$$_setProp$$($prop$$68$$, $value$$144$$) {
    if(null == $prop$$68$$) {
      return!0
    }
    var $attrs$$16$$ = {}, $p$$5$$;
    if(1 < arguments.length) {
      $attrs$$16$$[$prop$$68$$] = $value$$144$$
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
  $oj$$7$$.$ArrayRow$.$_cloneAttributes$ = function $$oj$$7$$$$ArrayRow$$$_cloneAttributes$$($oldData$$1$$, $newData$$1$$) {
    var $prop$$69$$;
    $newData$$1$$ = $newData$$1$$ || {};
    for($prop$$69$$ in $oldData$$1$$) {
      $oldData$$1$$.hasOwnProperty($prop$$69$$) && ("object" !== typeof $oldData$$1$$[$prop$$69$$] ? $newData$$1$$.hasOwnProperty($prop$$69$$) ? void 0 !== $oldData$$1$$[$prop$$69$$] && ($newData$$1$$[$prop$$69$$] = $oldData$$1$$[$prop$$69$$]) : $newData$$1$$[$prop$$69$$] = $oldData$$1$$[$prop$$69$$] : $newData$$1$$[$prop$$69$$] = $oj$$7$$.$ArrayRow$.$_cloneAttributes$($oldData$$1$$[$prop$$69$$], null))
    }
    return $newData$$1$$
  };
  $oj$$7$$.$ArrayRowSet$ = function $$oj$$7$$$$ArrayRowSet$$($rows$$2$$, $options$$196$$) {
    $oj$$7$$.$ArrayRowSet$._init(this, $rows$$2$$, $options$$196$$, null)
  };
  $goog$exportPath_$$("ArrayRowSet", $oj$$7$$.$ArrayRowSet$, $oj$$7$$);
  $oj$$7$$.$ArrayRowSet$.prototype.$comparator$ = null;
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.comparator", {$comparator$:$oj$$7$$.$ArrayRowSet$.prototype.$comparator$});
  $oj$$7$$.$ArrayRowSet$.prototype.$sortSupported$ = !0;
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.sortSupported", {$sortSupported$:$oj$$7$$.$ArrayRowSet$.prototype.$sortSupported$});
  $oj$$7$$.$Object$.$createSubclass$($oj$$7$$.$ArrayRowSet$, $oj$$7$$.$RowSet$, "ArrayRowSet.ArrayRowSet");
  $oj$$7$$.$ArrayRowSet$.prototype.Init = function $$oj$$7$$$$ArrayRowSet$$$Init$() {
    $oj$$7$$.$ArrayRowSet$.$superclass$.Init.call(this)
  };
  $oj$$7$$.$ArrayRowSet$._init = function $$oj$$7$$$$ArrayRowSet$$_init$($rowSet$$1$$, $rows$$3$$, $options$$197$$, $properties$$10$$) {
    var $prop$$70$$;
    $rowSet$$1$$.$_eventHandlers$ = [];
    $rowSet$$1$$.$_startIndex$ = 0;
    $rowSet$$1$$.Init();
    if($properties$$10$$) {
      for($prop$$70$$ in $properties$$10$$) {
        $properties$$10$$.hasOwnProperty($prop$$70$$) && ($rowSet$$1$$[$prop$$70$$] = $properties$$10$$[$prop$$70$$])
      }
    }
    $options$$197$$ = $options$$197$$ || {};
    $rowSet$$1$$.$_rows$ = [];
    null != $rows$$3$$ && void 0 !== $rows$$3$$ && ($rowSet$$1$$.$_data$ = $rows$$3$$ instanceof Array ? $rows$$3$$ : $rows$$3$$(), $rows$$3$$ instanceof Array || $rows$$3$$.subscribe(function($rowArray_values$$9$$) {
      $rowArray_values$$9$$ = $rowSet$$1$$.$_getRowArray$($rowArray_values$$9$$, null, null);
      $rowSet$$1$$.reset($rowArray_values$$9$$)
    }, null, "change"), $rowSet$$1$$.$_totalSize$ = $rowSet$$1$$.$_data$.length, $rowSet$$1$$.$_idAttribute$ = "id", null != $options$$197$$ && null != $options$$197$$.idAttribute && ($rowSet$$1$$.$_idAttribute$ = $options$$197$$.idAttribute))
  };
  $oj$$7$$.$ArrayRowSet$.prototype.add = function $$oj$$7$$$$ArrayRowSet$$$add$($m$$18$$, $options$$198$$) {
    $options$$198$$ = $options$$198$$ || {};
    var $deferred$$26$$ = $options$$198$$.deferred;
    this.$_addToRowSet$($m$$18$$, $options$$198$$.at, $options$$198$$);
    return $deferred$$26$$ ? $$$$7$$.Deferred().resolve().promise() : null
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.add", {add:$oj$$7$$.$ArrayRowSet$.prototype.add});
  $oj$$7$$.$ArrayRowSet$.prototype.at = function $$oj$$7$$$$ArrayRowSet$$$at$($index$$99$$, $options$$199$$) {
    $options$$199$$ = $options$$199$$ || {};
    if(0 > $index$$99$$ || $index$$99$$ >= this.$_rows$.length) {
      return null
    }
    var $row$$5$$ = this.$_rows$[$index$$99$$];
    return $options$$199$$.deferred ? $$$$7$$.Deferred().resolve($row$$5$$).promise() : $row$$5$$
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.at", {at:$oj$$7$$.$ArrayRowSet$.prototype.at});
  $oj$$7$$.$ArrayRowSet$.prototype.clone = function $$oj$$7$$$$ArrayRowSet$$$clone$() {
    var $rs$$ = new this.constructor, $i$$126$$, $row$$6$$;
    for($i$$126$$ = 0;$i$$126$$ < this.$_rows$.length;$i$$126$$ += 1) {
      ($row$$6$$ = this.at($i$$126$$, null)) && $rs$$.add($row$$6$$.clone(), {at:$i$$126$$})
    }
    return $rs$$
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.clone", {clone:$oj$$7$$.$ArrayRowSet$.prototype.clone});
  $oj$$7$$.$ArrayRowSet$.prototype.fetch = function $$oj$$7$$$$ArrayRowSet$$$fetch$($options$$200$$) {
    $options$$200$$ = $options$$200$$ || {};
    this.$_startFetch$();
    var $pageSize$$ = 0 < $options$$200$$.pageSize ? $options$$200$$.pageSize : -1;
    this.$_startIndex$ = null != $options$$200$$ ? null != $options$$200$$.startIndex ? $options$$200$$.startIndex : 0 : 0;
    this.$_rows$ = this.$_getRowArray$(this.$_data$, this.$_idAttribute$, this.$_startIndex$, $pageSize$$);
    this.$_endFetch$(!0)
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.fetch", {fetch:$oj$$7$$.$ArrayRowSet$.prototype.fetch});
  $oj$$7$$.$ArrayRowSet$.prototype.get = function $$oj$$7$$$$ArrayRowSet$$$get$($id$$11$$, $options$$201$$) {
    $options$$201$$ = $options$$201$$ || {};
    var $deferred$$28$$ = $options$$201$$.deferred, $i$$127$$, $row$$7$$ = null;
    for($i$$127$$ = 0;$i$$127$$ < this.$_rows$.length;$i$$127$$ += 1) {
      if($row$$7$$ = this.$_rows$[$i$$127$$], void 0 !== $row$$7$$ && $row$$7$$.id == $id$$11$$) {
        if($deferred$$28$$) {
          return $$$$7$$.Deferred().resolve($row$$7$$)
        }
        break
      }
    }
    return $row$$7$$
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.get", {get:$oj$$7$$.$ArrayRowSet$.prototype.get});
  $oj$$7$$.$ArrayRowSet$.prototype.hasMore = $JSCompiler_returnArg$$(!1);
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.hasMore", {hasMore:$oj$$7$$.$ArrayRowSet$.prototype.hasMore});
  $oj$$7$$.$ArrayRowSet$.prototype.indexOf = function $$oj$$7$$$$ArrayRowSet$$$indexOf$($row$$8$$, $options$$202$$) {
    $options$$202$$ = $options$$202$$ || {};
    return $options$$202$$.deferred ? this.get($row$$8$$.id, null).then(function($loc$$2$$) {
      return $loc$$2$$.index
    }) : this.get($row$$8$$.id).index
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.indexOf", {indexOf:$oj$$7$$.$ArrayRowSet$.prototype.indexOf});
  $oj$$7$$.$ArrayRowSet$.prototype.isEmpty = function $$oj$$7$$$$ArrayRowSet$$$isEmpty$() {
    return 0 === this.$_rows$.length
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.isEmpty", {isEmpty:$oj$$7$$.$ArrayRowSet$.prototype.isEmpty});
  $oj$$7$$.$ArrayRowSet$.prototype.remove = function $$oj$$7$$$$ArrayRowSet$$$remove$($row$$9$$, $options$$203$$) {
    $options$$203$$ = $options$$203$$ || {};
    this.$_removeInternal$($row$$9$$, -1, $options$$203$$)
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.remove", {remove:$oj$$7$$.$ArrayRowSet$.prototype.remove});
  $oj$$7$$.$ArrayRowSet$.prototype.reset = function $$oj$$7$$$$ArrayRowSet$$$reset$($data$$48$$, $options$$204$$) {
    var $i$$128$$;
    $options$$204$$ = $options$$204$$ || {};
    $options$$204$$.previousRows = this.$_rows$;
    $options$$204$$.silent = !0;
    if(void 0 === $data$$48$$ || null == $data$$48$$ || $data$$48$$ instanceof Array && 0 == $data$$48$$.length) {
      for($i$$128$$ = 0;$i$$128$$ < this.$_rows$.length;$i$$128$$ += 1) {
        this.$_rows$[$i$$128$$] && (this.$_rows$[$i$$128$$].rowSet = null)
      }
      this.$_rows$ = []
    }else {
      if(this.$_rows$ = [], $data$$48$$ instanceof Array) {
        for($i$$128$$ = 0;$i$$128$$ < $data$$48$$.length;$i$$128$$ += 1) {
          this.add($data$$48$$[$i$$128$$], $options$$204$$)
        }
      }else {
        this.add($data$$48$$, $options$$204$$)
      }
    }
    $oj$$7$$.$ArrayRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$7$$.$RowSet$.$EventType$.RESET, null)
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.reset", {reset:$oj$$7$$.$ArrayRowSet$.prototype.reset});
  $oj$$7$$.$ArrayRowSet$.prototype.size = function $$oj$$7$$$$ArrayRowSet$$$size$() {
    return this.$_rows$.length
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.size", {size:$oj$$7$$.$ArrayRowSet$.prototype.size});
  $oj$$7$$.$ArrayRowSet$.prototype.sort = function $$oj$$7$$$$ArrayRowSet$$$sort$() {
    var $comparator$$10$$ = this.comparator, $self$$34$$;
    this.$_hasComparator$() && ($self$$34$$ = this, this.$_rows$.sort(function($a$$58$$, $b$$37$$) {
      return $oj$$7$$.$ArrayRowSet$.$_sortFunc$($a$$58$$, $b$$37$$, $comparator$$10$$, $self$$34$$, $self$$34$$)
    }), this.$_realignRowIndices$(), $oj$$7$$.$ArrayRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$7$$.$RowSet$.$EventType$.SORT, null))
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.sort", {sort:$oj$$7$$.$ArrayRowSet$.prototype.sort});
  $oj$$7$$.$ArrayRowSet$.prototype.totalSize = $JSCompiler_get$$("$_totalSize$");
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.totalSize", {totalSize:$oj$$7$$.$ArrayRowSet$.prototype.totalSize});
  $oj$$7$$.$ArrayRowSet$.prototype.$_addToRowSet$ = function $$oj$$7$$$$ArrayRowSet$$$$_addToRowSet$$($m$$19$$, $index$$100$$, $i$$129_options$$205$$) {
    var $row$$10$$;
    $i$$129_options$$205$$ = $i$$129_options$$205$$ || {};
    var $silent$$17$$ = $i$$129_options$$205$$.silent;
    $m$$19$$ instanceof Array || ($m$$19$$ = [$m$$19$$]);
    for($i$$129_options$$205$$ = 0;$i$$129_options$$205$$ < $m$$19$$.length;$i$$129_options$$205$$++) {
      $row$$10$$ = $m$$19$$[$i$$129_options$$205$$], $row$$10$$ instanceof $oj$$7$$.$ArrayRow$ || ($row$$10$$ = new $oj$$7$$.$ArrayRow$($row$$10$$, {idAttribute:this.$_idAttribute$})), void 0 === $index$$100$$ ? (this.$_rows$.push($row$$10$$), $row$$10$$.index = this.$_rows$.length - 1) : (this.$_rows$[$index$$100$$ + $i$$129_options$$205$$] = $row$$10$$, $row$$10$$.index = $index$$100$$ + $i$$129_options$$205$$), $row$$10$$.rowSet = this, $silent$$17$$ || $oj$$7$$.$ArrayRowSet$.$superclass$.$_handleEvent$.call(this, 
      $oj$$7$$.$RowSet$.$EventType$.ADD, {rowIdx:$row$$10$$.index, row:$row$$10$$})
    }
  };
  $oj$$7$$.$ArrayRowSet$.$_compareKeys$ = function $$oj$$7$$$$ArrayRowSet$$$_compareKeys$$($keyA$$4$$, $keyB$$4$$, $sortDirection$$1$$) {
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
  $oj$$7$$.$ArrayRowSet$.$_getKey$ = function $$oj$$7$$$$ArrayRowSet$$$_getKey$$($val$$23$$, $attr$$14$$) {
    return $val$$23$$ instanceof $oj$$7$$.$Row$ ? $val$$23$$.get($attr$$14$$) : $$$$7$$.isFunction($val$$23$$[$attr$$14$$]) ? $val$$23$$[$attr$$14$$]() : $val$$23$$[$attr$$14$$]
  };
  $oj$$7$$.$ArrayRowSet$.prototype.$_getRowArray$ = function $$oj$$7$$$$ArrayRowSet$$$$_getRowArray$$($values$$10$$, $idAttribute$$, $rowArray$$1_startIndex$$1$$, $i$$130_pageSize$$1$$) {
    var $endIndex$$ = $values$$10$$.length - 1;
    0 < $i$$130_pageSize$$1$$ && ($endIndex$$ = $rowArray$$1_startIndex$$1$$ + $i$$130_pageSize$$1$$ - 1);
    $endIndex$$ = null != $endIndex$$ ? $endIndex$$ > $values$$10$$.length - 1 ? $values$$10$$.length - 1 : $endIndex$$ : $values$$10$$.length;
    $rowArray$$1_startIndex$$1$$ = [];
    var $prop$$71$$;
    for($i$$130_pageSize$$1$$ = 0;$i$$130_pageSize$$1$$ <= $endIndex$$;$i$$130_pageSize$$1$$++) {
      var $clonedRowValues_row$$11$$ = {}, $rowValues$$ = null, $rowValues$$ = $values$$10$$[$i$$130_pageSize$$1$$] instanceof $oj$$7$$.$Row$ ? $values$$10$$[$i$$130_pageSize$$1$$].$pairs$() : $values$$10$$[$i$$130_pageSize$$1$$];
      for($prop$$71$$ in $rowValues$$) {
        $rowValues$$.hasOwnProperty($prop$$71$$) && ($clonedRowValues_row$$11$$[$prop$$71$$] = $rowValues$$[$prop$$71$$])
      }
      $clonedRowValues_row$$11$$ = new $oj$$7$$.$ArrayRow$($clonedRowValues_row$$11$$, {idAttribute:$idAttribute$$});
      $clonedRowValues_row$$11$$.index = $i$$130_pageSize$$1$$;
      $rowArray$$1_startIndex$$1$$[$i$$130_pageSize$$1$$] = $clonedRowValues_row$$11$$
    }
    return $rowArray$$1_startIndex$$1$$
  };
  $oj$$7$$.$ArrayRowSet$.prototype.$_getSortAttrs$ = function $$oj$$7$$$$ArrayRowSet$$$$_getSortAttrs$$($sortStr$$1$$) {
    return void 0 === $sortStr$$1$$ ? [] : $sortStr$$1$$.split(",")
  };
  $oj$$7$$.$ArrayRowSet$.prototype.$_getSortDirStr$ = function $$oj$$7$$$$ArrayRowSet$$$$_getSortDirStr$$() {
    return-1 === this.sortDirection ? "dsc" : "asc"
  };
  $oj$$7$$.$ArrayRowSet$.prototype.$_hasComparator$ = function $$oj$$7$$$$ArrayRowSet$$$$_hasComparator$$() {
    var $comparator$$11$$ = this.comparator;
    return void 0 !== $comparator$$11$$ && null !== $comparator$$11$$
  };
  $oj$$7$$.$ArrayRowSet$.prototype.$_realignRowIndices$ = function $$oj$$7$$$$ArrayRowSet$$$$_realignRowIndices$$() {
    for(var $row$$12$$, $i$$131$$ = 0;$i$$131$$ < this.$_rows$.length;$i$$131$$++) {
      ($row$$12$$ = this.$_rows$[$i$$131$$]) && ($row$$12$$.index = $i$$131$$)
    }
  };
  $oj$$7$$.$ArrayRowSet$.prototype.$_removeInternal$ = function $$oj$$7$$$$ArrayRowSet$$$$_removeInternal$$($row$$13$$, $index$$101$$, $options$$206$$) {
    $options$$206$$ = $options$$206$$ || {};
    $index$$101$$ = -1 == $index$$101$$ ? this.get($row$$13$$).index : $index$$101$$;
    var $silent$$18$$ = $options$$206$$.silent;
    -1 < $index$$101$$ && (void 0 !== $row$$13$$ && $row$$13$$.$rowSet$ === this && ($row$$13$$.$rowSet$ = null), this.$_rows$.splice($index$$101$$, 1), $silent$$18$$ || ($options$$206$$.index = $index$$101$$, void 0 !== $row$$13$$ && $oj$$7$$.$ArrayRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$7$$.$RowSet$.$EventType$.REMOVE, {rowIdx:$index$$101$$, row:$row$$13$$})));
    return $row$$13$$
  };
  $oj$$7$$.$ArrayRowSet$.$_sortFunc$ = function $$oj$$7$$$$ArrayRowSet$$$_sortFunc$$($a$$59$$, $b$$38$$, $attrs$$17_comparator$$12$$, $rowSet$$2$$, $self$$35$$) {
    var $attrs1$$2_keyA$$5$$, $keyB$$5_retVal$$7$$, $i$$132$$;
    if($$$$7$$.isFunction($attrs$$17_comparator$$12$$)) {
      if(1 === $attrs$$17_comparator$$12$$.length) {
        $attrs1$$2_keyA$$5$$ = $attrs$$17_comparator$$12$$.call($self$$35$$, $a$$59$$);
        $keyB$$5_retVal$$7$$ = $attrs$$17_comparator$$12$$.call($self$$35$$, $b$$38$$);
        $attrs1$$2_keyA$$5$$ = $oj$$7$$.$StringUtils$.$isString$($attrs1$$2_keyA$$5$$) ? $attrs1$$2_keyA$$5$$.split(",") : [$attrs1$$2_keyA$$5$$];
        var $attrs2$$2$$ = $oj$$7$$.$StringUtils$.$isString$($keyB$$5_retVal$$7$$) ? $keyB$$5_retVal$$7$$.split(",") : [$keyB$$5_retVal$$7$$];
        for($i$$132$$ = 0;$i$$132$$ < $attrs1$$2_keyA$$5$$.length;$i$$132$$++) {
          if($keyB$$5_retVal$$7$$ = $oj$$7$$.$ArrayRowSet$.$_compareKeys$($attrs1$$2_keyA$$5$$[$i$$132$$], $attrs2$$2$$[$i$$132$$], $rowSet$$2$$.sortDirection), 0 !== $keyB$$5_retVal$$7$$) {
            return $keyB$$5_retVal$$7$$
          }
        }
      }
      return $attrs$$17_comparator$$12$$.call($self$$35$$, $a$$59$$, $b$$38$$)
    }
    if($oj$$7$$.$StringUtils$.$isString$($attrs$$17_comparator$$12$$)) {
      for($attrs$$17_comparator$$12$$ = $attrs$$17_comparator$$12$$.split(","), $i$$132$$ = 0;$i$$132$$ < $attrs$$17_comparator$$12$$.length;$i$$132$$++) {
        if($attrs1$$2_keyA$$5$$ = $oj$$7$$.$ArrayRowSet$.$_getKey$($a$$59$$, $attrs$$17_comparator$$12$$[$i$$132$$]), $keyB$$5_retVal$$7$$ = $oj$$7$$.$ArrayRowSet$.$_getKey$($b$$38$$, $attrs$$17_comparator$$12$$[$i$$132$$]), $keyB$$5_retVal$$7$$ = $oj$$7$$.$ArrayRowSet$.$_compareKeys$($attrs1$$2_keyA$$5$$, $keyB$$5_retVal$$7$$, $rowSet$$2$$.sortDirection), 0 !== $keyB$$5_retVal$$7$$) {
          return $keyB$$5_retVal$$7$$
        }
      }
    }
    return 0
  };
  $oj$$7$$.$ArrayRowSet$.prototype.$_startFetch$ = function $$oj$$7$$$$ArrayRowSet$$$$_startFetch$$() {
    $oj$$7$$.$ArrayRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$7$$.$RowSet$.$EventType$.REQUEST, null)
  };
  $oj$$7$$.$ArrayRowSet$.prototype.$_endFetch$ = function $$oj$$7$$$$ArrayRowSet$$$$_endFetch$$($refresh$$) {
    $oj$$7$$.$ArrayRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$7$$.$RowSet$.$EventType$.SYNC, $refresh$$)
  };
  $oj$$7$$.$EmptyNodeSet$ = function $$oj$$7$$$$EmptyNodeSet$$($parent$$24$$, $start$$19$$) {
    this.$m_parent$ = $parent$$24$$;
    this.$m_start$ = $start$$19$$
  };
  $goog$exportPath_$$("EmptyNodeSet", $oj$$7$$.$EmptyNodeSet$, $oj$$7$$);
  $oj$$7$$.$EmptyNodeSet$.prototype.getParent = $JSCompiler_get$$("$m_parent$");
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getParent", {getParent:$oj$$7$$.$EmptyNodeSet$.prototype.getParent});
  $oj$$7$$.$EmptyNodeSet$.prototype.$getStart$ = $JSCompiler_get$$("$m_start$");
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getStart", {$getStart$:$oj$$7$$.$EmptyNodeSet$.prototype.$getStart$});
  $oj$$7$$.$EmptyNodeSet$.prototype.$getCount$ = $JSCompiler_returnArg$$(0);
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getCount", {$getCount$:$oj$$7$$.$EmptyNodeSet$.prototype.$getCount$});
  $oj$$7$$.$EmptyNodeSet$.prototype.getData = $JSCompiler_returnArg$$(null);
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getData", {getData:$oj$$7$$.$EmptyNodeSet$.prototype.getData});
  $oj$$7$$.$EmptyNodeSet$.prototype.getMetadata = $JSCompiler_returnArg$$(null);
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getMetadata", {getMetadata:$oj$$7$$.$EmptyNodeSet$.prototype.getMetadata});
  $oj$$7$$.$NodeSetWrapper$ = function $$oj$$7$$$$NodeSetWrapper$$($nodeSet$$16$$, $metadataCallback$$, $range$$15$$) {
    this.$m_nodeSet$ = $nodeSet$$16$$;
    this.$m_callback$ = $metadataCallback$$;
    this.$m_range$ = $range$$15$$
  };
  $goog$exportPath_$$("NodeSetWrapper", $oj$$7$$.$NodeSetWrapper$, $oj$$7$$);
  $oj$$7$$.$NodeSetWrapper$.prototype.getParent = function $$oj$$7$$$$NodeSetWrapper$$$getParent$() {
    return this.$m_nodeSet$.getParent()
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getParent", {getParent:$oj$$7$$.$NodeSetWrapper$.prototype.getParent});
  $oj$$7$$.$NodeSetWrapper$.prototype.$getStart$ = function $$oj$$7$$$$NodeSetWrapper$$$$getStart$$() {
    return null != this.$m_range$ ? this.$m_range$.start : this.$m_nodeSet$.$getStart$()
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getStart", {$getStart$:$oj$$7$$.$NodeSetWrapper$.prototype.$getStart$});
  $oj$$7$$.$NodeSetWrapper$.prototype.$getCount$ = function $$oj$$7$$$$NodeSetWrapper$$$$getCount$$() {
    var $nodeStart$$2$$, $nodeCount$$2$$;
    $nodeStart$$2$$ = this.$m_nodeSet$.$getStart$();
    $nodeCount$$2$$ = this.$m_nodeSet$.$getCount$();
    null != this.$m_range$ && (this.$m_range$.start > $nodeStart$$2$$ ? $nodeCount$$2$$ = Math.min(0, $nodeCount$$2$$ - (this.$m_range$.start - $nodeStart$$2$$)) : this.$m_range$.start < $nodeStart$$2$$ && ($nodeCount$$2$$ = 0));
    return $nodeCount$$2$$
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getCount", {$getCount$:$oj$$7$$.$NodeSetWrapper$.prototype.$getCount$});
  $oj$$7$$.$NodeSetWrapper$.prototype.getData = function $$oj$$7$$$$NodeSetWrapper$$$getData$($index$$105$$) {
    return this.$m_nodeSet$.getData($index$$105$$)
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getData", {getData:$oj$$7$$.$NodeSetWrapper$.prototype.getData});
  $oj$$7$$.$NodeSetWrapper$.prototype.getMetadata = function $$oj$$7$$$$NodeSetWrapper$$$getMetadata$($index$$106$$) {
    var $metadata$$7$$;
    $metadata$$7$$ = this.$m_nodeSet$.getMetadata($index$$106$$);
    $metadata$$7$$.index = $index$$106$$;
    $metadata$$7$$.parentKey = this.getParent();
    this.$m_callback$.call(null, $metadata$$7$$.key, $metadata$$7$$);
    return $metadata$$7$$
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getMetadata", {getMetadata:$oj$$7$$.$NodeSetWrapper$.prototype.getMetadata});
  $oj$$7$$.$NodeSetWrapper$.prototype.$getChildNodeSet$ = function $$oj$$7$$$$NodeSetWrapper$$$$getChildNodeSet$$($index$$107_result$$11$$) {
    return this.$m_nodeSet$.$getChildNodeSet$ && ($index$$107_result$$11$$ = this.$m_nodeSet$.$getChildNodeSet$($index$$107_result$$11$$), null != $index$$107_result$$11$$) ? new $oj$$7$$.$NodeSetWrapper$($index$$107_result$$11$$, this.$m_callback$) : null
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$7$$.$NodeSetWrapper$.prototype.$getChildNodeSet$});
  $oj$$7$$.$JsonNodeSet$ = function $$oj$$7$$$$JsonNodeSet$$($startNode$$, $endNode$$, $data$$49$$, $currKey$$1$$, $depth$$16$$) {
    $oj$$7$$.$Assert$.$assertNumber$($startNode$$, null);
    $oj$$7$$.$Assert$.$assertNumber$($endNode$$, null);
    this.$m_depth$ = $depth$$16$$;
    this.$m_key$ = $currKey$$1$$;
    this.$m_startNode$ = $startNode$$;
    this.$m_endNode$ = $endNode$$;
    this.$m_nodes$ = $data$$49$$
  };
  $goog$exportPath_$$("JsonNodeSet", $oj$$7$$.$JsonNodeSet$, $oj$$7$$);
  $oj$$7$$.$JsonNodeSet$.prototype.getParent = $JSCompiler_get$$("$m_key$");
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getParent", {getParent:$oj$$7$$.$JsonNodeSet$.prototype.getParent});
  $oj$$7$$.$JsonNodeSet$.prototype.$getStart$ = $JSCompiler_get$$("$m_startNode$");
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getStart", {$getStart$:$oj$$7$$.$JsonNodeSet$.prototype.$getStart$});
  $oj$$7$$.$JsonNodeSet$.prototype.$getCount$ = function $$oj$$7$$$$JsonNodeSet$$$$getCount$$() {
    return Math.max(0, this.$m_endNode$ - this.$m_startNode$)
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getCount", {$getCount$:$oj$$7$$.$JsonNodeSet$.prototype.$getCount$});
  $oj$$7$$.$JsonNodeSet$.prototype.getData = function $$oj$$7$$$$JsonNodeSet$$$getData$($index$$108$$) {
    $oj$$7$$.$Assert$.assert($index$$108$$ <= this.$m_endNode$ && $index$$108$$ >= this.$m_startNode$);
    return this.$m_nodes$[$index$$108$$] ? this.$m_nodes$[$index$$108$$].attr : null
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getData", {getData:$oj$$7$$.$JsonNodeSet$.prototype.getData});
  $oj$$7$$.$JsonNodeSet$.prototype.getMetadata = function $$oj$$7$$$$JsonNodeSet$$$getMetadata$($index$$109$$) {
    var $metadata$$8$$ = [];
    $oj$$7$$.$Assert$.assert($index$$109$$ <= this.$m_endNode$ && $index$$109$$ >= this.$m_startNode$);
    $metadata$$8$$.key = this.$m_nodes$[$index$$109$$].id ? this.$m_nodes$[$index$$109$$].id : this.$m_nodes$[$index$$109$$].attr.id;
    $metadata$$8$$.leaf = this.$m_nodes$[$index$$109$$].$leaf$;
    $metadata$$8$$.depth = this.$m_nodes$[$index$$109$$].depth;
    null == $metadata$$8$$.leaf && ($metadata$$8$$.leaf = this.$m_nodes$[$index$$109$$].children && 0 < this.$m_nodes$[$index$$109$$].children.length ? !1 : !0);
    return $metadata$$8$$
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getMetadata", {getMetadata:$oj$$7$$.$JsonNodeSet$.prototype.getMetadata});
  $oj$$7$$.$JsonNodeSet$.prototype.$_updateDepth$ = function $$oj$$7$$$$JsonNodeSet$$$$_updateDepth$$($currChild$$4$$, $offset$$17$$) {
    var $i$$133$$;
    $offset$$17$$++;
    $currChild$$4$$.depth = $offset$$17$$;
    if($currChild$$4$$.children && 0 != $currChild$$4$$.children.length) {
      for($i$$133$$ = 0;$i$$133$$ < $currChild$$4$$.children.length;$i$$133$$++) {
        this.$_updateDepth$($currChild$$4$$.children[$i$$133$$], $offset$$17$$)
      }
    }
  };
  $oj$$7$$.$JsonNodeSet$.prototype.$getChildNodeSet$ = function $$oj$$7$$$$JsonNodeSet$$$$getChildNodeSet$$($index$$110_key$$49$$) {
    var $results$$3$$, $depth$$17$$, $i$$134$$;
    $depth$$17$$ = this.$m_nodes$[$index$$110_key$$49$$].depth;
    $results$$3$$ = this.$m_nodes$[$index$$110_key$$49$$].children;
    if(0 == $results$$3$$.length) {
      return null
    }
    $index$$110_key$$49$$ = this.$m_nodes$[$index$$110_key$$49$$].id ? this.$m_nodes$[$index$$110_key$$49$$].id : this.$m_nodes$[$index$$110_key$$49$$].attr.id;
    for($i$$134$$ = 0;$i$$134$$ < $results$$3$$.length;$i$$134$$++) {
      this.$_updateDepth$($results$$3$$[$i$$134$$], $depth$$17$$)
    }
    return new $oj$$7$$.$JsonNodeSet$(0, $results$$3$$.length, $results$$3$$, $index$$110_key$$49$$, 0)
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$7$$.$JsonNodeSet$.prototype.$getChildNodeSet$});
  $oj$$7$$.$FlattenedNodeSet$ = function $$oj$$7$$$$FlattenedNodeSet$$($nodeSet$$17$$, $actualStart$$1$$) {
    this.$m_nodeSet$ = $nodeSet$$17$$;
    this.$m_start$ = $actualStart$$1$$
  };
  $goog$exportPath_$$("FlattenedNodeSet", $oj$$7$$.$FlattenedNodeSet$, $oj$$7$$);
  $oj$$7$$.$FlattenedNodeSet$.prototype.getParent = function $$oj$$7$$$$FlattenedNodeSet$$$getParent$() {
    return this.$m_nodeSet$.getParent()
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getParent", {getParent:$oj$$7$$.$FlattenedNodeSet$.prototype.getParent});
  $oj$$7$$.$FlattenedNodeSet$.prototype.$getStart$ = function $$oj$$7$$$$FlattenedNodeSet$$$$getStart$$() {
    return void 0 != this.$m_start$ ? this.$m_start$ : this.$m_nodeSet$.$getStart$()
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getStart", {$getStart$:$oj$$7$$.$FlattenedNodeSet$.prototype.$getStart$});
  $oj$$7$$.$FlattenedNodeSet$.prototype.$getCount$ = function $$oj$$7$$$$FlattenedNodeSet$$$$getCount$$() {
    void 0 === this.$m_count$ && (this.$m_count$ = this.$_getCount$(this.$m_nodeSet$, 0), void 0 != this.$m_start$ && (this.$m_count$ -= this.$m_start$));
    return this.$m_count$
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getCount", {$getCount$:$oj$$7$$.$FlattenedNodeSet$.prototype.$getCount$});
  $oj$$7$$.$FlattenedNodeSet$.prototype.$_getCount$ = function $$oj$$7$$$$FlattenedNodeSet$$$$_getCount$$($nodeSet$$18$$, $total$$) {
    var $start$$20$$, $count$$23$$, $i$$135$$, $child$$3$$;
    $start$$20$$ = $nodeSet$$18$$.$getStart$();
    $count$$23$$ = $nodeSet$$18$$.$getCount$();
    $total$$ += $count$$23$$;
    if($nodeSet$$18$$.$getChildNodeSet$) {
      for($i$$135$$ = 0;$i$$135$$ < $count$$23$$;$i$$135$$++) {
        $child$$3$$ = $nodeSet$$18$$.$getChildNodeSet$($i$$135$$ + $start$$20$$), null != $child$$3$$ && ($total$$ = this.$_getCount$($child$$3$$, $total$$))
      }
    }
    return $total$$
  };
  $oj$$7$$.$FlattenedNodeSet$.prototype.getData = function $$oj$$7$$$$FlattenedNodeSet$$$getData$($index$$111$$) {
    return this.$_getDataOrMetadata$(this.$m_nodeSet$, $index$$111$$, {index:this.$m_nodeSet$.$getStart$()}, this.$_getData$)
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getData", {getData:$oj$$7$$.$FlattenedNodeSet$.prototype.getData});
  $oj$$7$$.$FlattenedNodeSet$.prototype.getMetadata = function $$oj$$7$$$$FlattenedNodeSet$$$getMetadata$($index$$112$$) {
    return this.$_getDataOrMetadata$(this.$m_nodeSet$, $index$$112$$, {index:this.$m_nodeSet$.$getStart$()}, this.$_getMetadata$)
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getMetadata", {getMetadata:$oj$$7$$.$FlattenedNodeSet$.prototype.getMetadata});
  $oj$$7$$.$FlattenedNodeSet$.prototype.$_getMetadata$ = function $$oj$$7$$$$FlattenedNodeSet$$$$_getMetadata$$($nodeSet$$19$$, $index$$113$$) {
    return $nodeSet$$19$$.getMetadata($index$$113$$)
  };
  $oj$$7$$.$FlattenedNodeSet$.prototype.$_getData$ = function $$oj$$7$$$$FlattenedNodeSet$$$$_getData$$($nodeSet$$20$$, $index$$114$$) {
    return $nodeSet$$20$$.getData($index$$114$$)
  };
  $oj$$7$$.$FlattenedNodeSet$.prototype.$_getDataOrMetadata$ = function $$oj$$7$$$$FlattenedNodeSet$$$$_getDataOrMetadata$$($nodeSet$$21$$, $index$$115$$, $current$$5$$, $func$$9$$) {
    var $start$$21$$, $count$$24$$, $i$$136$$, $child$$4_currIndex_result$$12$$;
    $start$$21$$ = $nodeSet$$21$$.$getStart$();
    $count$$24$$ = $nodeSet$$21$$.$getCount$();
    for($i$$136$$ = 0;$i$$136$$ < $count$$24$$;$i$$136$$++) {
      $child$$4_currIndex_result$$12$$ = $current$$5$$.index;
      if($child$$4_currIndex_result$$12$$ === $index$$115$$) {
        return $func$$9$$.call(this, $nodeSet$$21$$, $i$$136$$ + $start$$21$$)
      }
      $current$$5$$.index = $child$$4_currIndex_result$$12$$ + 1;
      if($nodeSet$$21$$.$getChildNodeSet$ && ($child$$4_currIndex_result$$12$$ = $nodeSet$$21$$.$getChildNodeSet$($i$$136$$ + $start$$21$$), null != $child$$4_currIndex_result$$12$$ && ($child$$4_currIndex_result$$12$$ = this.$_getDataOrMetadata$($child$$4_currIndex_result$$12$$, $index$$115$$, $current$$5$$, $func$$9$$), null != $child$$4_currIndex_result$$12$$))) {
        return $child$$4_currIndex_result$$12$$
      }
    }
    return null
  };
  $oj$$7$$.$DataGridDataSource$ = function $$oj$$7$$$$DataGridDataSource$$($data$$50$$) {
    $oj$$7$$.$DataGridDataSource$.$superclass$.constructor.call(this, $data$$50$$)
  };
  $goog$exportPath_$$("DataGridDataSource", $oj$$7$$.$DataGridDataSource$, $oj$$7$$);
  $oj$$7$$.$Object$.$createSubclass$($oj$$7$$.$DataGridDataSource$, $oj$$7$$.$DataSource$, "oj.DataGridDataSource");
  $oj$$7$$.$DataGridDataSource$.prototype.$getCount$ = $JSCompiler_returnArg$$(0);
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.getCount", {$getCount$:$oj$$7$$.$DataGridDataSource$.prototype.$getCount$});
  $oj$$7$$.$DataGridDataSource$.prototype.$getCountPrecision$ = $JSCompiler_returnArg$$("exact");
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$7$$.$DataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$7$$.$DataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$7$$$$DataGridDataSource$$$$fetchHeaders$$() {
    $oj$$7$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$7$$.$DataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$7$$.$DataGridDataSource$.prototype.$fetchCells$ = function $$oj$$7$$$$DataGridDataSource$$$$fetchCells$$() {
    $oj$$7$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$7$$.$DataGridDataSource$.prototype.$fetchCells$});
  $oj$$7$$.$DataGridDataSource$.prototype.keys = function $$oj$$7$$$$DataGridDataSource$$$keys$() {
    $oj$$7$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.keys", {keys:$oj$$7$$.$DataGridDataSource$.prototype.keys});
  $oj$$7$$.$DataGridDataSource$.prototype.$indexes$ = function $$oj$$7$$$$DataGridDataSource$$$$indexes$$() {
    $oj$$7$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.indexes", {$indexes$:$oj$$7$$.$DataGridDataSource$.prototype.$indexes$});
  $oj$$7$$.$DataGridDataSource$.prototype.sort = function $$oj$$7$$$$DataGridDataSource$$$sort$() {
    $oj$$7$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.sort", {sort:$oj$$7$$.$DataGridDataSource$.prototype.sort});
  $oj$$7$$.$DataGridDataSource$.prototype.getCapability = $JSCompiler_returnArg$$(null);
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.getCapability", {getCapability:$oj$$7$$.$DataGridDataSource$.prototype.getCapability})
});
