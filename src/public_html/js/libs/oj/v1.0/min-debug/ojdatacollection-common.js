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
    var $foundEventHandler$$ = !1, $i$$97$$;
    for($i$$97$$ = 0;$i$$97$$ < this.$_eventHandlers$.length;$i$$97$$++) {
      if(this.$_eventHandlers$[$i$$97$$].eventType == $eventType$$21$$ && this.$_eventHandlers$[$i$$97$$].eventHandlerFunc == $eventHandler$$) {
        $foundEventHandler$$ = !0;
        break
      }
    }
    $foundEventHandler$$ || this.$_eventHandlers$.push({eventType:$eventType$$21$$, eventHandlerFunc:$eventHandler$$})
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("DataSource.prototype.on", {on:$oj$$5$$.$DataSource$.prototype.on});
  $oj$$5$$.$DataSource$.prototype.off = function $$oj$$5$$$$DataSource$$$off$($eventType$$22$$, $eventHandler$$1$$) {
    var $i$$98$$;
    for($i$$98$$ = this.$_eventHandlers$.length - 1;0 <= $i$$98$$;$i$$98$$--) {
      if(this.$_eventHandlers$[$i$$98$$].eventType == $eventType$$22$$ && this.$_eventHandlers$[$i$$98$$].eventHandlerFunc == $eventHandler$$1$$) {
        this.$_eventHandlers$.splice($i$$98$$, 1);
        break
      }
    }
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("DataSource.prototype.off", {off:$oj$$5$$.$DataSource$.prototype.off});
  $oj$$5$$.$DataSource$.prototype.handleEvent = function $$oj$$5$$$$DataSource$$$handleEvent$($eventType$$23$$, $event$$41$$) {
    var $i$$99$$;
    for($i$$99$$ = 0;$i$$99$$ < this.$_eventHandlers$.length;$i$$99$$++) {
      var $eventHandler$$2$$ = this.$_eventHandlers$[$i$$99$$];
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
  $oj$$5$$.$FlattenedTreeDataSource$ = function $$oj$$5$$$$FlattenedTreeDataSource$$($options$$173$$) {
    this.$m_options$ = $options$$173$$;
    $oj$$5$$.$FlattenedTreeDataSource$.$superclass$.constructor.call(this)
  };
  $goog$exportPath_$$("FlattenedTreeDataSource", $oj$$5$$.$FlattenedTreeDataSource$, $oj$$5$$);
  $oj$$5$$.$Object$.$createSubclass$($oj$$5$$.$FlattenedTreeDataSource$, $oj$$5$$.$DataSource$, "oj.FlattenedTreeDataSource");
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$Init$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$Init$$() {
    var $expanded$$;
    $oj$$5$$.$FlattenedTreeDataSource$.$superclass$.$Init$.call(this);
    this.$m_wrapped$ = this.$m_options$.dataSource;
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
    var $maxFetchSize_nodeSet_processed$$, $lastEntry$$, $parent$$7$$, $count$$14$$, $index$$78$$, $depth$$5$$;
    if($range$$7$$.start >= this.$m_cache$.length) {
      $maxFetchSize_nodeSet_processed$$ = this.$m_maxCount$ - this.$m_cache$.length;
      if(0 == this.$m_cache$.length) {
        $range$$7$$.count = Math.min($maxFetchSize_nodeSet_processed$$, $range$$7$$.count);
        this.$m_wrapped$.$fetchChildren$(null, $range$$7$$, {success:function($nodeSet$$1$$) {
          this.$_handleFetchSuccess$($nodeSet$$1$$, null, 0, 0, $callbacks$$9$$)
        }.bind(this)});
        return
      }
      if(0 < $maxFetchSize_nodeSet_processed$$) {
        $lastEntry$$ = this.$m_cache$[this.$m_cache$.length - 1];
        $parent$$7$$ = $lastEntry$$.parent;
        $count$$14$$ = this.$m_wrapped$.$getChildCount$($parent$$7$$);
        $index$$78$$ = $lastEntry$$.index;
        $depth$$5$$ = $lastEntry$$.depth;
        -1 === $count$$14$$ || $index$$78$$ < $count$$14$$ - 1 ? ($range$$7$$.start = $index$$78$$ + 1, $range$$7$$.count = -1 === $count$$14$$ ? this.$m_fetchSize$ : Math.min($maxFetchSize_nodeSet_processed$$, Math.min(this.$m_fetchSize$, $count$$14$$ - $range$$7$$.start)), this.$m_wrapped$.$fetchChildren$($parent$$7$$, $range$$7$$, {success:function($nodeSet$$2$$) {
          this.$_handleFetchSuccess$($nodeSet$$2$$, $parent$$7$$, $depth$$5$$, $count$$14$$, $callbacks$$9$$)
        }.bind(this)})) : ($maxFetchSize_nodeSet_processed$$ = this.$_fetchFromAncestors$($parent$$7$$, $depth$$5$$, $callbacks$$9$$, $maxFetchSize_nodeSet_processed$$), $maxFetchSize_nodeSet_processed$$ || ($maxFetchSize_nodeSet_processed$$ = new $oj$$5$$.$EmptyNodeSet$(null, $range$$7$$.start), null != $callbacks$$9$$ && null != $callbacks$$9$$.success && $callbacks$$9$$.success.call(null, $maxFetchSize_nodeSet_processed$$)));
        return
      }
    }
    this.$handleMaxCountReached$($range$$7$$, $callbacks$$9$$)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_handleFetchSuccess$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_handleFetchSuccess$$($nodeSet$$3$$, $parent$$8_processed$$1$$, $depth$$6$$, $count$$15$$, $callbacks$$10$$) {
    var $toExpand$$;
    $toExpand$$ = [];
    this.$_processNodeSet$($nodeSet$$3$$, $parent$$8_processed$$1$$, $depth$$6$$, $toExpand$$);
    -1 === $count$$15$$ && 0 === $nodeSet$$3$$.$getCount$() && null != $parent$$8_processed$$1$$ && 0 < $depth$$6$$ ? ($parent$$8_processed$$1$$ = this.$_fetchFromAncestors$($parent$$8_processed$$1$$, $depth$$6$$, $callbacks$$10$$)) || null != $callbacks$$10$$ && null != $callbacks$$10$$.success && $callbacks$$10$$.success.call(null, $nodeSet$$3$$) : (null != $callbacks$$10$$ && null != $callbacks$$10$$.success && $callbacks$$10$$.success.call(null, $nodeSet$$3$$), this.$_expandRows$($toExpand$$))
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_fetchFromAncestors$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_fetchFromAncestors$$($parent$$9$$, $depth$$7$$, $callbacks$$11$$, $maxFetchSize$$1$$) {
    var $options$$174$$, $remainToFetch$$, $i$$100$$, $currEntry_index$$79$$, $currDepth$$, $count$$16$$, $countUnknown$$, $range$$9$$;
    void 0 === $maxFetchSize$$1$$ && ($maxFetchSize$$1$$ = this.$m_maxCount$ - this.$m_cache$.length);
    this.$_isBatchFetching$() && ($options$$174$$ = {queueOnly:!0});
    $remainToFetch$$ = this.$m_fetchSize$;
    for($i$$100$$ = this.$m_cache$.length - 1 - 1;0 <= $i$$100$$;$i$$100$$--) {
      if($currEntry_index$$79$$ = this.$m_cache$[$i$$100$$], $currDepth$$ = $currEntry_index$$79$$.depth, $currDepth$$ < $depth$$7$$ && ($parent$$9$$ = $currEntry_index$$79$$.parent, $count$$16$$ = this.$m_wrapped$.$getChildCount$($parent$$9$$), $currEntry_index$$79$$ = $currEntry_index$$79$$.index, ($countUnknown$$ = -1 === $count$$16$$) || $currEntry_index$$79$$ < $count$$16$$ - 1)) {
        $range$$9$$ = {};
        $range$$9$$.start = $currEntry_index$$79$$ + 1;
        $countUnknown$$ ? ($range$$9$$.count = Math.min($maxFetchSize$$1$$, Math.max(0, $remainToFetch$$)), $options$$174$$ = void 0) : $range$$9$$.count = Math.min($maxFetchSize$$1$$, Math.min($remainToFetch$$, $count$$16$$ - $range$$9$$.start));
        if(0 == $range$$9$$.count) {
          break
        }
        this.$m_wrapped$.$fetchChildren$($parent$$9$$, $range$$9$$, {success:function($nodeSet$$4$$) {
          this.$_handleFetchSuccess$($nodeSet$$4$$, $parent$$9$$, $currDepth$$, $count$$16$$, $callbacks$$11$$)
        }.bind(this)}, $options$$174$$);
        $depth$$7$$ = $currDepth$$;
        $remainToFetch$$ = Math.max(0, $remainToFetch$$ - $range$$9$$.count);
        if($countUnknown$$ || 0 === $currDepth$$ || 0 === $remainToFetch$$) {
          break
        }
      }
    }
    void 0 != $options$$174$$ && this.$m_wrapped$.$fetchChildren$($parent$$9$$, {start:$range$$9$$.count, count:0}, {success:function($nodeSet$$5$$) {
      this.$_handleFetchSuccess$($nodeSet$$5$$, $parent$$9$$, $currDepth$$, $count$$16$$, $callbacks$$11$$)
    }.bind(this)});
    return $remainToFetch$$ != this.$m_fetchSize$
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_processNodeSet$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_processNodeSet$$($nodeSet$$6$$, $parent$$10$$, $depth$$8$$, $toExpand$$1$$) {
    var $nodeStart$$, $nodeCount$$, $i$$101$$, $metadata$$1_rowData$$, $key$$38$$;
    $nodeStart$$ = $nodeSet$$6$$.$getStart$();
    $nodeCount$$ = $nodeSet$$6$$.$getCount$();
    for($i$$101$$ = 0;$i$$101$$ < $nodeCount$$;$i$$101$$++) {
      $metadata$$1_rowData$$ = $nodeSet$$6$$.getMetadata($nodeStart$$ + $i$$101$$), $key$$38$$ = $metadata$$1_rowData$$.key, $metadata$$1_rowData$$ = {}, $metadata$$1_rowData$$.key = $key$$38$$, $metadata$$1_rowData$$.depth = $depth$$8$$, $metadata$$1_rowData$$.index = $nodeStart$$ + $i$$101$$, $metadata$$1_rowData$$.parent = $parent$$10$$, this.$m_cache$.push($metadata$$1_rowData$$), this.$_isExpanded$($key$$38$$) && $toExpand$$1$$.push($key$$38$$)
    }
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$insertMetadata$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$insertMetadata$$($key$$39$$, $metadata$$2$$) {
    this.$_isExpanded$($key$$39$$) ? $metadata$$2$$.state = "expanded" : $metadata$$2$$.state = $metadata$$2$$.leaf ? "leaf" : "collapsed"
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_fetchRowsFromDescendents$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_fetchRowsFromDescendents$$($range$$10$$, $callbacks$$12$$) {
    var $options$$175$$ = {maxCount:this.$m_maxCount$};
    0 < this.$m_cache$.length && ($options$$175$$.start = this.$m_cache$[this.$m_cache$.length - 1].key);
    this.$m_wrapped$.$fetchDescendents$(null, {success:function($nodeSet$$7$$) {
      this.$_handleFetchDescendentsSuccess$($nodeSet$$7$$, $range$$10$$, $callbacks$$12$$)
    }.bind(this)}, $options$$175$$)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_handleFetchDescendentsSuccess$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_handleFetchDescendentsSuccess$$($nodeSet$$8$$, $range$$11$$, $callbacks$$13$$) {
    var $maxFetchSize$$2_options$$176$$, $actualStart_count$$17$$, $lastEntry$$1$$;
    $range$$11$$.start >= this.$m_cache$.length ? ($maxFetchSize$$2_options$$176$$ = this.$m_maxCount$ - this.$m_cache$.length, $actualStart_count$$17$$ = Math.min($maxFetchSize$$2_options$$176$$, $range$$11$$.count), 0 < this.$m_cache$.length ? ($lastEntry$$1$$ = this.$m_cache$[this.$m_cache$.length - 1], $maxFetchSize$$2_options$$176$$ = {index:0, found:!1, count:0}, this.$_processDescendentsNodeSet$($nodeSet$$8$$, null, 0, $lastEntry$$1$$, $actualStart_count$$17$$, $maxFetchSize$$2_options$$176$$), 
    $actualStart_count$$17$$ = $maxFetchSize$$2_options$$176$$.index + 1) : ($maxFetchSize$$2_options$$176$$ = {count:0}, this.$_processDescendentsNodeSet$($nodeSet$$8$$, null, 0, null, $actualStart_count$$17$$, $maxFetchSize$$2_options$$176$$), $actualStart_count$$17$$ = 0), null != $callbacks$$13$$ && null != $callbacks$$13$$.success && ($nodeSet$$8$$ = null != $maxFetchSize$$2_options$$176$$ ? 0 === $maxFetchSize$$2_options$$176$$.count ? new $oj$$5$$.$EmptyNodeSet$(null, $range$$11$$.start) : 
    new $oj$$5$$.$FlattenedNodeSet$($nodeSet$$8$$, $actualStart_count$$17$$) : new $oj$$5$$.$FlattenedNodeSet$($nodeSet$$8$$), $callbacks$$13$$.success.call(null, $nodeSet$$8$$))) : this.$handleMaxCountReached$($range$$11$$, $callbacks$$13$$)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_processDescendentsNodeSet$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_processDescendentsNodeSet$$($nodeSet$$9$$, $parent$$11$$, $depth$$9$$, $lastEntry$$2$$, $maxCount$$, $options$$177$$) {
    var $nodeStart$$1$$, $nodeCount$$1$$, $i$$102$$, $childNodeSet_rowData$$1$$, $metadata$$3$$, $key$$40$$;
    $nodeStart$$1$$ = $nodeSet$$9$$.$getStart$();
    $nodeCount$$1$$ = $nodeSet$$9$$.$getCount$();
    for($i$$102$$ = 0;$i$$102$$ < $nodeCount$$1$$ && $options$$177$$.count != $maxCount$$;$i$$102$$++) {
      $metadata$$3$$ = $nodeSet$$9$$.getMetadata($nodeStart$$1$$ + $i$$102$$);
      $key$$40$$ = $metadata$$3$$.key;
      $options$$177$$.checkDepth && $lastEntry$$2$$.depth === $depth$$9$$ && ($options$$177$$.found = !0, $options$$177$$.checkDepth = !1);
      if(null == $lastEntry$$2$$ || $options$$177$$.found) {
        $childNodeSet_rowData$$1$$ = {}, $childNodeSet_rowData$$1$$.key = $key$$40$$, $childNodeSet_rowData$$1$$.depth = $depth$$9$$, $childNodeSet_rowData$$1$$.index = $nodeStart$$1$$ + $i$$102$$, $childNodeSet_rowData$$1$$.parent = $parent$$11$$, this.$m_cache$.push($childNodeSet_rowData$$1$$), $options$$177$$.count += 1, $metadata$$3$$.state = $metadata$$3$$.leaf ? "leaf" : "expanded"
      }
      null == $lastEntry$$2$$ || $options$$177$$.found || ($key$$40$$ === $lastEntry$$2$$.key ? $metadata$$3$$.leaf || this.$_isExpanded$($key$$40$$) ? $options$$177$$.found = !0 : $options$$177$$.checkDepth = !0 : $options$$177$$.index += 1);
      $nodeSet$$9$$.$getChildNodeSet$ && ($childNodeSet_rowData$$1$$ = $nodeSet$$9$$.$getChildNodeSet$($i$$102$$), null != $childNodeSet_rowData$$1$$ && this.$_processDescendentsNodeSet$($childNodeSet_rowData$$1$$, $key$$40$$, $depth$$9$$ + 1, $lastEntry$$2$$, $maxCount$$, $options$$177$$))
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
    if(this.$m_cache$.length == this.$m_maxCount$ && ($refIndex$$ = this.$getIndex$($rowKey$$1$$), $refIndex$$ == this.$m_maxCount$ - 1)) {
      return
    }
    0 != $fetchSize$$ && (this.$m_wrapped$.$fetchChildren$($rowKey$$1$$, {start:0, count:$fetchSize$$}, {success:function($nodeSet$$10$$) {
      this.$handleExpandSuccess$($rowKey$$1$$, $nodeSet$$10$$, $count$$18$$)
    }.bind(this)}, {success:this}), this.handleEvent("expand", {rowKey:$rowKey$$1$$}))
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.collapse = function $$oj$$5$$$$FlattenedTreeDataSource$$$collapse$($rowKey$$2$$) {
    var $rowIndex$$, $depth$$10_i$$103_parent$$12$$, $count$$19$$, $j$$15_keys$$3$$;
    $rowIndex$$ = this.$getIndex$($rowKey$$2$$) + 1;
    $depth$$10_i$$103_parent$$12$$ = this.$m_cache$[$rowIndex$$ - 1];
    $count$$19$$ = 0;
    $depth$$10_i$$103_parent$$12$$ = $depth$$10_i$$103_parent$$12$$.depth;
    for($j$$15_keys$$3$$ = $rowIndex$$;$j$$15_keys$$3$$ < this.$m_cache$.length;$j$$15_keys$$3$$++) {
      var $rowDepth$$ = this.$m_cache$[$j$$15_keys$$3$$].depth;
      if($rowDepth$$ > $depth$$10_i$$103_parent$$12$$) {
        $count$$19$$ += 1
      }else {
        if($rowDepth$$ == $depth$$10_i$$103_parent$$12$$) {
          break
        }
      }
    }
    if(0 != $count$$19$$) {
      this.$_isExpandAll$() ? this.$m_collapsedKeys$.push($rowKey$$2$$) : this.$_removeExpanded$($rowKey$$2$$);
      $j$$15_keys$$3$$ = [];
      for($depth$$10_i$$103_parent$$12$$ = 0;$depth$$10_i$$103_parent$$12$$ < $count$$19$$;$depth$$10_i$$103_parent$$12$$++) {
        $j$$15_keys$$3$$.push({row:this.$m_cache$[$rowIndex$$ + $depth$$10_i$$103_parent$$12$$].key})
      }
      this.$m_cache$.splice($rowIndex$$, $count$$19$$);
      this.$removeRows$($j$$15_keys$$3$$);
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
    var $i$$104$$, $index$$80$$;
    $index$$80$$ = -1;
    for($i$$104$$ = 0;$i$$104$$ < $arr$$21$$.length;$i$$104$$++) {
      $arr$$21$$[$i$$104$$] === $rowKey$$6$$ && ($index$$80$$ = $i$$104$$)
    }
    return $index$$80$$
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_removeExpanded$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_removeExpanded$$($index$$81_rowKey$$7$$) {
    $index$$81_rowKey$$7$$ = this.$_getExpandedKeyIndex$($index$$81_rowKey$$7$$);
    -1 < $index$$81_rowKey$$7$$ && this.$m_expandedKeys$.splice($index$$81_rowKey$$7$$, 1)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_removeCollapsed$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_removeCollapsed$$($index$$82_rowKey$$8$$) {
    $index$$82_rowKey$$8$$ = this.$_getCollapsedKeyIndex$($index$$82_rowKey$$8$$);
    -1 < $index$$82_rowKey$$8$$ && this.$m_collapsedKeys$.splice($index$$82_rowKey$$8$$, 1)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$handleExpandSuccess$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$handleExpandSuccess$$($rowKey$$9$$, $nodeSet$$11$$, $origCount$$) {
    var $refIndex$$1$$, $rangeStart$$, $metadata$$4_rowStart$$, $rowCount$$, $parent$$13$$, $depth$$11$$, $key$$41$$, $toExpand$$2$$, $i$$105$$;
    $rangeStart$$ = $refIndex$$1$$ = this.$getIndex$($rowKey$$9$$) + 1;
    $metadata$$4_rowStart$$ = $nodeSet$$11$$.$getStart$();
    $rowCount$$ = $nodeSet$$11$$.$getCount$();
    $parent$$13$$ = this.$m_cache$[$refIndex$$1$$ - 1];
    $depth$$11$$ = $parent$$13$$.depth + 1;
    $toExpand$$2$$ = [];
    for($i$$105$$ = $metadata$$4_rowStart$$;$i$$105$$ < $rowCount$$;$i$$105$$++) {
      $metadata$$4_rowStart$$ = $nodeSet$$11$$.getMetadata($i$$105$$), $key$$41$$ = $metadata$$4_rowStart$$.key, this.$_isExpanded$($key$$41$$) && $toExpand$$2$$.push($key$$41$$), this.$_insertRow$($refIndex$$1$$, $metadata$$4_rowStart$$, $parent$$13$$.key, $i$$105$$, $depth$$11$$), $refIndex$$1$$++
    }
    this.$_isExpandAll$() ? this.$_removeCollapsed$($rowKey$$9$$) : this.$m_expandedKeys$.push($rowKey$$9$$);
    this.$insertRows$($rangeStart$$, $rowKey$$9$$, $nodeSet$$11$$);
    -1 === $origCount$$ && $rowCount$$ === this.$m_fetchSize$ || $origCount$$ > $rowCount$$ || $refIndex$$1$$ == this.$m_maxCount$ ? this.$_deleteAllRowsBelow$($refIndex$$1$$) : this.$m_cache$.length > this.$m_maxCount$ && this.$_deleteAllRowsBelow$(this.$m_maxCount$);
    this.$_expandRows$($toExpand$$2$$)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_expandRows$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_expandRows$$($keys$$4$$) {
    var $options$$179$$, $i$$106$$;
    this.$_isBatchFetching$() && ($options$$179$$ = {queueOnly:!0});
    for($i$$106$$ = 0;$i$$106$$ < $keys$$4$$.length;$i$$106$$++) {
      $i$$106$$ == $keys$$4$$.length - 1 ? this.$_expand$($keys$$4$$[$i$$106$$]) : this.$_expand$($keys$$4$$[$i$$106$$], $options$$179$$)
    }
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_insertRow$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_insertRow$$($index$$83$$, $key$$42_metadata$$5$$, $parentKey$$, $childIndex$$, $depth$$12$$) {
    var $rowData$$3$$;
    $key$$42_metadata$$5$$ = $key$$42_metadata$$5$$.key;
    $rowData$$3$$ = {};
    $rowData$$3$$.key = $key$$42_metadata$$5$$;
    $rowData$$3$$.depth = $depth$$12$$;
    $rowData$$3$$.index = $childIndex$$;
    $rowData$$3$$.parent = $parentKey$$;
    $index$$83$$ < this.$m_cache$.length ? this.$m_cache$.splice($index$$83$$, 0, $rowData$$3$$) : this.$m_cache$.push($rowData$$3$$)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_deleteAllRowsBelow$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_deleteAllRowsBelow$$($index$$84$$, $count$$20$$) {
    var $keys$$5$$;
    void 0 == $count$$20$$ && ($count$$20$$ = this.$m_cache$.length - $index$$84$$);
    $keys$$5$$ = [];
    for(var $i$$107$$ = 0;$i$$107$$ < $count$$20$$;$i$$107$$++) {
      $keys$$5$$.push({row:this.$m_cache$[$index$$84$$ + $i$$107$$].key})
    }
    this.$m_cache$.splice($index$$84$$, $count$$20$$);
    this.$removeRows$($keys$$5$$)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_handleModelEvent$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_handleModelEvent$$($event$$44$$) {
    var $operation$$4$$, $ancestors_parentKey$$1$$, $index$$85$$;
    $operation$$4$$ = $event$$44$$.operation;
    $ancestors_parentKey$$1$$ = $event$$44$$.parent;
    $ancestors_parentKey$$1$$ = Array.isArray($ancestors_parentKey$$1$$) ? $ancestors_parentKey$$1$$[$ancestors_parentKey$$1$$.length - 1] : $ancestors_parentKey$$1$$;
    $index$$85$$ = $event$$44$$.index;
    "insert" === $operation$$4$$ ? this.$_handleInsertEvent$($ancestors_parentKey$$1$$, $index$$85$$, $event$$44$$.data) : "delete" === $operation$$4$$ ? this.$_handleDeleteEvent$($ancestors_parentKey$$1$$, $index$$85$$) : "refresh" === $operation$$4$$ && this.$_handleRefreshEvent$($ancestors_parentKey$$1$$)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_handleInsertEvent$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_handleInsertEvent$$($parentKey$$2$$, $index$$86$$, $metadata$$6_nodeSet$$12$$) {
    var $insertIndex_parentIndex$$, $depth$$13$$;
    $insertIndex_parentIndex$$ = this.$getIndex$($parentKey$$2$$);
    $depth$$13$$ = this.$m_cache$[$insertIndex_parentIndex$$].depth + 1;
    $insertIndex_parentIndex$$ = $insertIndex_parentIndex$$ + $index$$86$$ + 1;
    $metadata$$6_nodeSet$$12$$ = $metadata$$6_nodeSet$$12$$.getMetadata($metadata$$6_nodeSet$$12$$.$getStart$());
    this.$_insertRow$($insertIndex_parentIndex$$, $metadata$$6_nodeSet$$12$$, $parentKey$$2$$, $index$$86$$, $depth$$13$$)
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$_handleDeleteEvent$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$_handleDeleteEvent$$($parentKey$$3$$, $index$$87$$) {
    var $parentIndex$$1_startIndex$$, $currentIndex_parent$$15$$, $start$$17$$, $current$$5$$;
    $parentIndex$$1_startIndex$$ = this.$getIndex$($parentKey$$3$$);
    $currentIndex_parent$$15$$ = this.$m_cache$[$parentIndex$$1_startIndex$$];
    $parentIndex$$1_startIndex$$ += $index$$87$$;
    $start$$17$$ = this.$m_cache$[$parentIndex$$1_startIndex$$];
    $oj$$5$$.$Assert$.assert($start$$17$$.parent === $currentIndex_parent$$15$$ && $start$$17$$.depth === $currentIndex_parent$$15$$.depth + 1);
    for($currentIndex_parent$$15$$ = $parentIndex$$1_startIndex$$ + 1;$currentIndex_parent$$15$$ < this.$m_cache$.length;) {
      $current$$5$$ = this.$m_cache$[$currentIndex_parent$$15$$];
      if($current$$5$$.depth != $start$$17$$.depth) {
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
    this.$m_cache$.length = 0
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$getIndex$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$getIndex$$($rowKey$$10$$) {
    for(var $rowData$$4$$, $i$$108$$ = 0;$i$$108$$ < this.$m_cache$.length;$i$$108$$++) {
      if($rowData$$4$$ = this.$m_cache$[$i$$108$$], $rowData$$4$$.key == $rowKey$$10$$) {
        return $i$$108$$
      }
    }
    return-1
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.getKey = function $$oj$$5$$$$FlattenedTreeDataSource$$$getKey$($index$$88$$) {
    return 0 > $index$$88$$ || $index$$88$$ >= this.$m_cache$.length ? null : this.$m_cache$[$index$$88$$].key
  };
  $oj$$5$$.$FlattenedTreeDataSource$.prototype.$getFetchedRange$ = function $$oj$$5$$$$FlattenedTreeDataSource$$$$getFetchedRange$$() {
    return{start:0, end:this.$m_cache$.length}
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
  $oj$$5$$.$_JsonTreeNodeDataSource$ = function $$oj$$5$$$$_JsonTreeNodeDataSource$$() {
    this.id = null;
    this.depth = 0;
    this.parent = null;
    this.children = [];
    this.attr = this.title = null
  };
  $oj$$5$$.$_JsonTreeNodeDataSource$.prototype.$_ascending$ = function $$oj$$5$$$$_JsonTreeNodeDataSource$$$$_ascending$$($key$$43$$) {
    return function($a$$48$$, $b$$34$$) {
      return $a$$48$$.attr && $b$$34$$.attr && $a$$48$$.attr[$key$$43$$] && $b$$34$$.attr[$key$$43$$] ? $a$$48$$.attr[$key$$43$$] < $b$$34$$.attr[$key$$43$$] ? 0 : 1 : $a$$48$$[$key$$43$$] < $b$$34$$[$key$$43$$] ? 0 : 1
    }
  };
  $oj$$5$$.$_JsonTreeNodeDataSource$.prototype.$_descending$ = function $$oj$$5$$$$_JsonTreeNodeDataSource$$$$_descending$$($key$$44$$) {
    return function($a$$49$$, $b$$35$$) {
      return $a$$49$$.attr && $b$$35$$.attr && $a$$49$$.attr[$key$$44$$] && $b$$35$$.attr[$key$$44$$] ? $a$$49$$.attr[$key$$44$$] < $b$$35$$.attr[$key$$44$$] ? 1 : 0 : $a$$49$$[$key$$44$$] < $b$$35$$[$key$$44$$] ? 1 : 0
    }
  };
  $oj$$5$$.$_JsonTreeNodeDataSource$.prototype.$_sortRecursive$ = function $$oj$$5$$$$_JsonTreeNodeDataSource$$$$_sortRecursive$$($criteria$$1$$) {
    var $i$$109_key$$45$$ = $criteria$$1$$.key;
    "ascending" === $criteria$$1$$.direction ? this.children.sort(this.$_ascending$($i$$109_key$$45$$)) : "descending" === $criteria$$1$$.direction && this.children.sort(this.$_descending$($i$$109_key$$45$$));
    for(var $i$$109_key$$45$$ = 0, $l$$3$$ = this.children.length;$i$$109_key$$45$$ < $l$$3$$;$i$$109_key$$45$$++) {
      this.children[$i$$109_key$$45$$].$_sortRecursive$($criteria$$1$$)
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
  $oj$$5$$.$JsonTreeDataSource$.prototype.$_createTreeDataSource$ = function $$oj$$5$$$$JsonTreeDataSource$$$$_createTreeDataSource$$($target$$82$$, $source$$6$$, $depth$$14$$) {
    var $children$$1$$, $node$$9$$, $child$$2$$, $prop$$55$$, $propr$$, $prp$$1$$, $j$$16$$;
    $depth$$14$$ || ($depth$$14$$ = 0);
    for($prop$$55$$ in $source$$6$$) {
      if("children" == $prop$$55$$ || 0 == $depth$$14$$ && $source$$6$$ instanceof Array) {
        for($children$$1$$ = 0 == $depth$$14$$ && $source$$6$$ instanceof Array ? $source$$6$$ : $source$$6$$[$prop$$55$$], $depth$$14$$++, $j$$16$$ = 0;$j$$16$$ < $children$$1$$.length;$j$$16$$++) {
          $child$$2$$ = $children$$1$$[$j$$16$$];
          $node$$9$$ = new $oj$$5$$.$_JsonTreeNodeDataSource$;
          $child$$2$$.id || ($child$$2$$.attr ? $child$$2$$.attr.id || ($child$$2$$.attr.id = "rid_" + Math.floor(1E3 * Math.random() + 1)) : $node$$9$$.id = "rid_" + Math.floor(1E3 * Math.random() + 1));
          for($propr$$ in $child$$2$$) {
            for($prp$$1$$ in $node$$9$$) {
              $propr$$ == $prp$$1$$ && "children" != $propr$$ && ($node$$9$$[$prp$$1$$] = $child$$2$$[$propr$$]), "depth" == $prp$$1$$ && ($node$$9$$[$prp$$1$$] = $depth$$14$$)
            }
          }
          $target$$82$$.children.push($node$$9$$);
          for($prp$$1$$ in $child$$2$$) {
            "children" == $prp$$1$$ && this.$_createTreeDataSource$($target$$82$$.children[$j$$16$$], $child$$2$$, $depth$$14$$)
          }
        }
      }
    }
    return $target$$82$$
  };
  $oj$$5$$.$JsonTreeDataSource$.prototype.$getChildCount$ = function $$oj$$5$$$$JsonTreeDataSource$$$$getChildCount$$($parent$$16_parentKey$$5$$) {
    $parent$$16_parentKey$$5$$ || ($parent$$16_parentKey$$5$$ = this.data.id);
    $parent$$16_parentKey$$5$$ = this.$_searchTreeById$(this.data, $parent$$16_parentKey$$5$$);
    return $parent$$16_parentKey$$5$$.children ? $parent$$16_parentKey$$5$$.children.length : null
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.getChildCount", {$getChildCount$:$oj$$5$$.$JsonTreeDataSource$.prototype.$getChildCount$});
  $oj$$5$$.$JsonTreeDataSource$.prototype.$fetchChildren$ = function $$oj$$5$$$$JsonTreeDataSource$$$$fetchChildren$$($nodeSet$$14_parentKey$$6$$, $i$$110_range$$13$$, $callbacks$$15$$) {
    var $childStart$$, $childEnd$$, $results$$, $parent$$17$$;
    $results$$ = [];
    $nodeSet$$14_parentKey$$6$$ || ($nodeSet$$14_parentKey$$6$$ = this.data.id);
    $parent$$17$$ = this.$_searchTreeById$(this.data, $nodeSet$$14_parentKey$$6$$);
    $i$$110_range$$13$$ || ($i$$110_range$$13$$ = [], $i$$110_range$$13$$.start = 0, $i$$110_range$$13$$.count = $parent$$17$$.children.length);
    $i$$110_range$$13$$.count || ($i$$110_range$$13$$.count = $parent$$17$$.children.length);
    $i$$110_range$$13$$.start || ($i$$110_range$$13$$.start = 0);
    $childStart$$ = $i$$110_range$$13$$.start;
    $childEnd$$ = Math.min($parent$$17$$.children.length, $childStart$$ + $i$$110_range$$13$$.count);
    for($i$$110_range$$13$$ = $childStart$$;$i$$110_range$$13$$ < $childEnd$$;$i$$110_range$$13$$ += 1) {
      $results$$.push($parent$$17$$.children[$i$$110_range$$13$$])
    }
    $nodeSet$$14_parentKey$$6$$ = new $oj$$5$$.$JsonNodeSet$($childStart$$, $childEnd$$, $results$$, $nodeSet$$14_parentKey$$6$$, $parent$$17$$.depth);
    null != $callbacks$$15$$ && null != $callbacks$$15$$.success && $callbacks$$15$$.success.call(null, $nodeSet$$14_parentKey$$6$$)
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.fetchChildren", {$fetchChildren$:$oj$$5$$.$JsonTreeDataSource$.prototype.$fetchChildren$});
  $oj$$5$$.$JsonTreeDataSource$.prototype.$fetchDescendents$ = function $$oj$$5$$$$JsonTreeDataSource$$$$fetchDescendents$$($nodeSet$$15_parentKey$$7$$, $callbacks$$16$$, $maxCount$$1_results$$1$$) {
    var $parent$$18$$;
    $nodeSet$$15_parentKey$$7$$ || ($nodeSet$$15_parentKey$$7$$ = this.data.id);
    $parent$$18$$ = this.$_searchTreeById$(this.data, $nodeSet$$15_parentKey$$7$$);
    $maxCount$$1_results$$1$$ = this.$_traverseTree$($parent$$18$$, $maxCount$$1_results$$1$$, []);
    $nodeSet$$15_parentKey$$7$$ = new $oj$$5$$.$JsonNodeSet$(0, $maxCount$$1_results$$1$$.length, $maxCount$$1_results$$1$$, $nodeSet$$15_parentKey$$7$$, $parent$$18$$.depth);
    null != $callbacks$$16$$ && null != $callbacks$$16$$.success && $callbacks$$16$$.success.call(null, $nodeSet$$15_parentKey$$7$$)
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.fetchDescendents", {$fetchDescendents$:$oj$$5$$.$JsonTreeDataSource$.prototype.$fetchDescendents$});
  $oj$$5$$.$JsonTreeDataSource$.prototype.move = function $$oj$$5$$$$JsonTreeDataSource$$$move$($moveNode_nodeToMove$$, $refNode$$8_referenceNode$$, $index$$89_position$$4$$, $callbacks$$17$$) {
    var $parent$$19_refNodeKey$$;
    $parent$$19_refNodeKey$$ = $refNode$$8_referenceNode$$;
    if(!$parent$$19_refNodeKey$$ || $parent$$19_refNodeKey$$ == this.data.id) {
      if("inside" != $index$$89_position$$4$$) {
        console.log("Error: root can not be the reference node if position equals to " + $index$$89_position$$4$$);
        return
      }
      $parent$$19_refNodeKey$$ || ($parent$$19_refNodeKey$$ = this.data.id)
    }
    $moveNode_nodeToMove$$ = this.$_searchTreeById$(null, $moveNode_nodeToMove$$);
    this.$_searchTreeById$($moveNode_nodeToMove$$, $parent$$19_refNodeKey$$) ? console.log("Error: the node to move contains the reference node as its sub-tree.") : ($refNode$$8_referenceNode$$ = this.$_searchTreeById$(null, $parent$$19_refNodeKey$$), $parent$$19_refNodeKey$$ = this.$_getParentById$($parent$$19_refNodeKey$$), this.$_removeFromTree$($moveNode_nodeToMove$$), "inside" == $index$$89_position$$4$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - ($refNode$$8_referenceNode$$.depth + 
    1)), $refNode$$8_referenceNode$$.children.push($moveNode_nodeToMove$$)) : "before" == $index$$89_position$$4$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$.depth), $index$$89_position$$4$$ = $parent$$19_refNodeKey$$.children.indexOf($refNode$$8_referenceNode$$), -1 < $index$$89_position$$4$$ && (0 != $index$$89_position$$4$$ ? $parent$$19_refNodeKey$$.children.splice($index$$89_position$$4$$ - 1, 0, $moveNode_nodeToMove$$) : $parent$$19_refNodeKey$$.children.unshift($moveNode_nodeToMove$$))) : 
    "after" == $index$$89_position$$4$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$.depth), $index$$89_position$$4$$ = $parent$$19_refNodeKey$$.children.indexOf($refNode$$8_referenceNode$$), -1 < $index$$89_position$$4$$ && $parent$$19_refNodeKey$$.children.splice($index$$89_position$$4$$, 0, $moveNode_nodeToMove$$)) : "first" == $index$$89_position$$4$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$.depth), 
    $parent$$19_refNodeKey$$.children.unshift($moveNode_nodeToMove$$)) : "last" == $index$$89_position$$4$$ && (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$.depth), $parent$$19_refNodeKey$$.children.push($moveNode_nodeToMove$$)), null != $callbacks$$17$$ && null != $callbacks$$17$$.success && $callbacks$$17$$.success.call(null, this.data))
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.move", {move:$oj$$5$$.$JsonTreeDataSource$.prototype.move});
  $oj$$5$$.$JsonTreeDataSource$.prototype.sort = function $$oj$$5$$$$JsonTreeDataSource$$$sort$($criteria$$2$$, $callbacks$$18$$) {
    var $parent$$20$$;
    $parent$$20$$ = this.$_searchTreeById$(this.data, this.data.id);
    $parent$$20$$.$_sortRecursive$($criteria$$2$$);
    null != $callbacks$$18$$ && null != $callbacks$$18$$.success && $callbacks$$18$$.success.call(null, $parent$$20$$)
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.sort", {sort:$oj$$5$$.$JsonTreeDataSource$.prototype.sort});
  $oj$$5$$.$JsonTreeDataSource$.prototype.$_getParentById$ = function $$oj$$5$$$$JsonTreeDataSource$$$$_getParentById$$($refNodeKey$$1$$, $currNode$$) {
    var $i$$111$$, $parent$$21$$ = null;
    if($refNodeKey$$1$$ == this.data.id) {
      return null
    }
    $currNode$$ || ($currNode$$ = this.data);
    if($currNode$$.children && 0 < $currNode$$.children.length) {
      for($i$$111$$ = 0;$i$$111$$ < $currNode$$.children.length;$i$$111$$++) {
        if($currNode$$.children[$i$$111$$].id && $currNode$$.children[$i$$111$$].id == $refNodeKey$$1$$ || $currNode$$.children[$i$$111$$].attr && $currNode$$.children[$i$$111$$].attr.id == $refNodeKey$$1$$) {
          return $currNode$$
        }
      }
      for($i$$111$$ = 0;$i$$111$$ < $currNode$$.children.length && !($parent$$21$$ = this.$_getParentById$($refNodeKey$$1$$, $currNode$$.children[$i$$111$$]));$i$$111$$++) {
      }
    }
    return $parent$$21$$
  };
  $oj$$5$$.$JsonTreeDataSource$.prototype.$_searchTreeById$ = function $$oj$$5$$$$JsonTreeDataSource$$$$_searchTreeById$$($currChild$$, $parentKey$$9$$) {
    var $i$$112$$, $result$$10$$ = null;
    $currChild$$ || ($currChild$$ = this.data);
    if($currChild$$.id && $currChild$$.id == $parentKey$$9$$ || $currChild$$.attr && $currChild$$.attr.id == $parentKey$$9$$) {
      return $currChild$$
    }
    if(null != $currChild$$.children) {
      for($i$$112$$ = 0;$i$$112$$ < $currChild$$.children.length && !$result$$10$$;$i$$112$$++) {
        $result$$10$$ = $currChild$$.children[$i$$112$$].id && $currChild$$.children[$i$$112$$].id == $parentKey$$9$$ || $currChild$$.children[$i$$112$$].attr && $currChild$$.children[$i$$112$$].attr.id == $parentKey$$9$$ ? $currChild$$.children[$i$$112$$] : this.$_searchTreeById$($currChild$$.children[$i$$112$$], $parentKey$$9$$)
      }
    }
    return $result$$10$$
  };
  $oj$$5$$.$JsonTreeDataSource$.prototype.$_updateDepth$ = function $$oj$$5$$$$JsonTreeDataSource$$$$_updateDepth$$($currChild$$1$$, $offset$$16$$) {
    var $i$$113$$;
    $currChild$$1$$.depth -= $offset$$16$$;
    if($currChild$$1$$.children && 0 != $currChild$$1$$.children.length) {
      for($i$$113$$ = 0;$i$$113$$ < $currChild$$1$$.children.length;$i$$113$$++) {
        this.$_updateDepth$($currChild$$1$$.children[$i$$113$$], $offset$$16$$)
      }
    }
  };
  $oj$$5$$.$JsonTreeDataSource$.prototype.$_removeFromTree$ = function $$oj$$5$$$$JsonTreeDataSource$$$$_removeFromTree$$($currChild$$2_index$$90$$) {
    var $key$$46_parent$$22$$;
    $currChild$$2_index$$90$$.id ? $key$$46_parent$$22$$ = $currChild$$2_index$$90$$.id : $currChild$$2_index$$90$$.attr && ($key$$46_parent$$22$$ = $currChild$$2_index$$90$$.attr.id);
    ($key$$46_parent$$22$$ = this.$_getParentById$($key$$46_parent$$22$$)) || ($key$$46_parent$$22$$ = this.data);
    $currChild$$2_index$$90$$ = $key$$46_parent$$22$$.children.indexOf($currChild$$2_index$$90$$);
    -1 < $currChild$$2_index$$90$$ && $key$$46_parent$$22$$.children.splice($currChild$$2_index$$90$$, 1)
  };
  $oj$$5$$.$JsonTreeDataSource$.prototype.$_traverseTree$ = function $$oj$$5$$$$JsonTreeDataSource$$$$_traverseTree$$($currChild$$3$$, $maxCount$$2$$, $results$$2$$) {
    var $i$$114$$;
    $maxCount$$2$$ && 0 >= $maxCount$$2$$ && ($maxCount$$2$$ = null);
    if(null != $currChild$$3$$.children) {
      for($i$$114$$ = 0;$i$$114$$ < $currChild$$3$$.children.length && (!$maxCount$$2$$ || $results$$2$$.length != $maxCount$$2$$);$i$$114$$++) {
        $results$$2$$.push($currChild$$3$$.children[$i$$114$$]), this.$_traverseTree$($currChild$$3$$.children[$i$$114$$], $maxCount$$2$$, $results$$2$$)
      }
      return $results$$2$$
    }
    return null
  };
  $oj$$5$$.$RowSet$ = function $$oj$$5$$$$RowSet$$($rows$$, $options$$181$$) {
    $oj$$5$$.$RowSet$._init(this, $rows$$, $options$$181$$, null)
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
  $oj$$5$$.$RowSet$._init = function $$oj$$5$$$$RowSet$$_init$($rowSet$$, $rows$$1$$, $options$$182$$, $properties$$7$$) {
    var $prop$$56$$;
    $rowSet$$.$_eventHandlers$ = [];
    $rowSet$$.$_startIndex$ = 0;
    $rowSet$$.$Init$();
    if($properties$$7$$) {
      for($prop$$56$$ in $properties$$7$$) {
        $properties$$7$$.hasOwnProperty($prop$$56$$) && ($rowSet$$[$prop$$56$$] = $properties$$7$$[$prop$$56$$])
      }
    }
    $options$$182$$ = $options$$182$$ || {};
    $rowSet$$.$_rows$ = [];
    null != $rows$$1$$ && void 0 !== $rows$$1$$ && ($rowSet$$.$_data$ = $rows$$1$$ instanceof Array ? $rows$$1$$ : $rows$$1$$(), $rows$$1$$ instanceof Array || $rows$$1$$.$subscribe$(function($rowArray_values$$9$$) {
      $rowArray_values$$9$$ = $rowSet$$.$_getRowArray$($rowArray_values$$9$$, null, null);
      $rowSet$$.reset($rowArray_values$$9$$);
      $rowSet$$.$_handleEvent$.call($rowSet$$, "change", null)
    }, null, "change"), $rowSet$$.$_totalSize$ = $rowSet$$.$_data$.length, $rowSet$$.$_idAttribute$ = "id", null != $options$$182$$ && null != $options$$182$$.idAttribute && ($rowSet$$.$_idAttribute$ = $options$$182$$.idAttribute))
  };
  $oj$$5$$.$RowSet$.prototype.add = function $$oj$$5$$$$RowSet$$$add$($m$$18$$, $options$$183$$) {
    $options$$183$$ = $options$$183$$ || {};
    var $rowArray$$1$$ = [], $index$$91$$ = $options$$183$$.at, $deferred$$25_i$$115$$ = $options$$183$$.deferred, $self$$29$$ = this;
    $m$$18$$ instanceof Array ? $rowArray$$1$$ = $m$$18$$ : $rowArray$$1$$.push($m$$18$$);
    if($deferred$$25_i$$115$$) {
      for(var $doTask$$3$$ = function $$doTask$$3$$$($rowIdx$$) {
        var $defer$$8$$ = $$$$5$$.Deferred();
        $self$$29$$.$_addToRowSet$($rowArray$$1$$[$rowIdx$$], $index$$91$$);
        return $defer$$8$$.resolve().promise()
      }, $currentStep$$3$$ = $doTask$$3$$(0), $deferred$$25_i$$115$$ = 1;$deferred$$25_i$$115$$ < $rowArray$$1$$.length;$deferred$$25_i$$115$$++) {
        $currentStep$$3$$ = $currentStep$$3$$.then($doTask$$3$$($deferred$$25_i$$115$$))
      }
      return $$$$5$$.when($currentStep$$3$$).promise()
    }
    for($deferred$$25_i$$115$$ = 0;$deferred$$25_i$$115$$ < $rowArray$$1$$.length;$deferred$$25_i$$115$$++) {
      this.$_addToRowSet$($rowArray$$1$$[$deferred$$25_i$$115$$], $index$$91$$)
    }
    return null
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.add", {add:$oj$$5$$.$RowSet$.prototype.add});
  $oj$$5$$.$RowSet$.prototype.at = function $$oj$$5$$$$RowSet$$$at$($index$$92$$, $options$$184$$) {
    $options$$184$$ = $options$$184$$ || {};
    if(0 > $index$$92$$ || $index$$92$$ >= this.$_rows$.length) {
      return null
    }
    var $row$$2$$ = this.$_rows$[$index$$92$$];
    return $options$$184$$.deferred ? $$$$5$$.Deferred().resolve($row$$2$$).promise() : $row$$2$$
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.at", {at:$oj$$5$$.$RowSet$.prototype.at});
  $oj$$5$$.$RowSet$.prototype.clone = function $$oj$$5$$$$RowSet$$$clone$() {
    var $rs$$ = new this.constructor, $i$$116$$, $row$$3$$;
    for($i$$116$$ = 0;$i$$116$$ < this.$_rows$.length;$i$$116$$ += 1) {
      ($row$$3$$ = this.at($i$$116$$, null)) && $rs$$.add($row$$3$$.clone(), {at:$i$$116$$})
    }
    return $rs$$
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.clone", {clone:$oj$$5$$.$RowSet$.prototype.clone});
  $oj$$5$$.$RowSet$.prototype.fetch = function $$oj$$5$$$$RowSet$$$fetch$($options$$185_origRowArray$$) {
    $options$$185_origRowArray$$ = $options$$185_origRowArray$$ || {};
    if(this.$_canFetch$()) {
      this.$_startFetch$();
      var $pageSize_updates$$ = 0 < $options$$185_origRowArray$$.pageSize ? $options$$185_origRowArray$$.pageSize : -1, $origStartIndex$$ = this.$_startIndex$;
      this.$_startIndex$ = null != $options$$185_origRowArray$$ ? null != $options$$185_origRowArray$$.startIndex ? $options$$185_origRowArray$$.startIndex : 0 : 0;
      $options$$185_origRowArray$$ = null;
      null != this.$_rows$ && ($options$$185_origRowArray$$ = this.$_rows$);
      this.$_rows$ = this.$_getRowArray$(this.$_data$, this.$_idAttribute$, this.$_startIndex$, $pageSize_updates$$);
      null != $options$$185_origRowArray$$ && ($pageSize_updates$$ = this.$_compareRowArray$($options$$185_origRowArray$$, this.$_rows$, $origStartIndex$$, this.$_startIndex$, $pageSize_updates$$), this.$_processUpdates$($pageSize_updates$$, $options$$185_origRowArray$$));
      this.$_endFetch$(!0)
    }
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.fetch", {fetch:$oj$$5$$.$RowSet$.prototype.fetch});
  $oj$$5$$.$RowSet$.prototype.get = function $$oj$$5$$$$RowSet$$$get$($id$$10$$, $options$$186$$) {
    $options$$186$$ = $options$$186$$ || {};
    var $deferred$$27$$ = $options$$186$$.deferred, $i$$117$$, $row$$4$$ = null;
    for($i$$117$$ = 0;$i$$117$$ < this.$_rows$.length;$i$$117$$ += 1) {
      if($row$$4$$ = this.$_rows$[$i$$117$$], void 0 !== $row$$4$$ && $row$$4$$.id == $id$$10$$) {
        if($deferred$$27$$) {
          return $$$$5$$.Deferred().resolve($row$$4$$)
        }
        break
      }
    }
    return $row$$4$$
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.get", {get:$oj$$5$$.$RowSet$.prototype.get});
  $oj$$5$$.$RowSet$.prototype.hasMore = $JSCompiler_returnArg$$(!1);
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.hasMore", {hasMore:$oj$$5$$.$RowSet$.prototype.hasMore});
  $oj$$5$$.$RowSet$.prototype.indexOf = function $$oj$$5$$$$RowSet$$$indexOf$($row$$5$$, $options$$187$$) {
    $options$$187$$ = $options$$187$$ || {};
    return $options$$187$$.deferred ? this.get($row$$5$$, null).then(function($loc$$2$$) {
      return $loc$$2$$.index
    }) : this.get($row$$5$$).index
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.indexOf", {indexOf:$oj$$5$$.$RowSet$.prototype.indexOf});
  $oj$$5$$.$RowSet$.prototype.$isEmpty$ = function $$oj$$5$$$$RowSet$$$$isEmpty$$() {
    return 0 === this.$_rows$.length
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.isEmpty", {$isEmpty$:$oj$$5$$.$RowSet$.prototype.$isEmpty$});
  $oj$$5$$.$RowSet$.prototype.remove = function $$oj$$5$$$$RowSet$$$remove$($r$$1$$, $options$$188$$) {
    $options$$188$$ = $options$$188$$ || {};
    var $rowArray$$2$$ = [], $i$$118$$;
    $r$$1$$ instanceof Array ? $rowArray$$2$$ = $r$$1$$ : $rowArray$$2$$.push($r$$1$$);
    for($i$$118$$ = $rowArray$$2$$.length - 1;0 <= $i$$118$$;$i$$118$$ -= 1) {
      this.$_removeInternal$($rowArray$$2$$[$i$$118$$], -1, $options$$188$$)
    }
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.remove", {remove:$oj$$5$$.$RowSet$.prototype.remove});
  $oj$$5$$.$RowSet$.prototype.reset = function $$oj$$5$$$$RowSet$$$reset$($data$$49$$, $options$$189$$) {
    var $i$$119$$;
    $options$$189$$ = $options$$189$$ || {};
    $options$$189$$.previousRows = this.$_rows$;
    if(void 0 === $data$$49$$ || null == $data$$49$$ || $data$$49$$ instanceof Array && 0 == $data$$49$$.length) {
      for($i$$119$$ = 0;$i$$119$$ < this.$_rows$.length;$i$$119$$ += 1) {
        this.$_rows$[$i$$119$$] && (this.$_rows$[$i$$119$$].rowSet = null)
      }
      this.$_rows$ = []
    }else {
      if(this.$_rows$ = [], $options$$189$$.parse && ($data$$49$$ = this.parse($data$$49$$)), $data$$49$$ instanceof Array) {
        for($i$$119$$ = 0;$i$$119$$ < $data$$49$$.length;$i$$119$$ += 1) {
          this.add($data$$49$$[$i$$119$$], $options$$189$$)
        }
      }else {
        this.add($data$$49$$, $options$$189$$)
      }
    }
    this.$_handleEvent$($oj$$5$$.$RowSet$.$EventType$.ADD, null)
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.reset", {reset:$oj$$5$$.$RowSet$.prototype.reset});
  $oj$$5$$.$RowSet$.prototype.size = function $$oj$$5$$$$RowSet$$$size$() {
    return this.$_rows$.length
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.size", {size:$oj$$5$$.$RowSet$.prototype.size});
  $oj$$5$$.$RowSet$.prototype.sort = function $$oj$$5$$$$RowSet$$$sort$() {
    var $comparator$$8$$ = this.comparator, $self$$30$$;
    this.$_hasComparator$() && ($self$$30$$ = this, this.$_rows$.sort(function($a$$50$$, $b$$36$$) {
      return $oj$$5$$.$RowSet$.$_sortFunc$($a$$50$$, $b$$36$$, $comparator$$8$$, $self$$30$$, $self$$30$$)
    }), this.$_realignRowIndices$(), this.$_handleEvent$.call(this, $oj$$5$$.$RowSet$.$EventType$.SORT, null))
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.sort", {sort:$oj$$5$$.$RowSet$.prototype.sort});
  $oj$$5$$.$RowSet$.prototype.totalSize = $JSCompiler_get$$("$_totalSize$");
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.totalSize", {totalSize:$oj$$5$$.$RowSet$.prototype.totalSize});
  $oj$$5$$.$RowSet$.prototype.on = function $$oj$$5$$$$RowSet$$$on$($eventType$$25$$, $eventHandler$$3$$) {
    var $foundEventHandler$$1$$ = !1, $i$$120$$;
    for($i$$120$$ = 0;$i$$120$$ < this.$_eventHandlers$.length;$i$$120$$++) {
      if(this.$_eventHandlers$[$i$$120$$].eventType == $eventType$$25$$ && this.$_eventHandlers$[$i$$120$$].eventHandlerFunc == $eventHandler$$3$$) {
        $foundEventHandler$$1$$ = !0;
        break
      }
    }
    $foundEventHandler$$1$$ || this.$_eventHandlers$.push({eventType:$eventType$$25$$, eventHandlerFunc:$eventHandler$$3$$})
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.on", {on:$oj$$5$$.$RowSet$.prototype.on});
  $oj$$5$$.$RowSet$.prototype.off = function $$oj$$5$$$$RowSet$$$off$($eventType$$26$$, $eventHandler$$4$$) {
    var $i$$121$$;
    for($i$$121$$ = 0;$i$$121$$ < this.$_eventHandlers$.length;$i$$121$$++) {
      if(this.$_eventHandlers$[$i$$121$$].eventType == $eventType$$26$$ && this.$_eventHandlers$[$i$$121$$].eventHandlerFunc == $eventHandler$$4$$) {
        this.$_eventHandlers$.remove(this.$_eventHandlers$[$i$$121$$]);
        break
      }
    }
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.off", {off:$oj$$5$$.$RowSet$.prototype.off});
  $oj$$5$$.$RowSet$.prototype.$_addToRowSet$ = function $$oj$$5$$$$RowSet$$$$_addToRowSet$$($row$$6$$, $index$$93$$) {
    void 0 === $index$$93$$ ? this.$_rows$.push($row$$6$$) : this.$_rows$[$index$$93$$] = $row$$6$$;
    $row$$6$$.rowSet = this;
    $row$$6$$.index = this.$_rows$.length;
    this.$_handleEvent$($oj$$5$$.$RowSet$.$EventType$.ADD, $row$$6$$)
  };
  $oj$$5$$.$RowSet$.prototype.$_handleEvent$ = function $$oj$$5$$$$RowSet$$$$_handleEvent$$($eventType$$27$$, $event$$45$$) {
    var $i$$122$$;
    for($i$$122$$ = 0;$i$$122$$ < this.$_eventHandlers$.length;$i$$122$$++) {
      var $eventHandler$$5$$ = this.$_eventHandlers$[$i$$122$$];
      $eventHandler$$5$$.eventType == $eventType$$27$$ && $eventHandler$$5$$.eventHandlerFunc($event$$45$$)
    }
  };
  $goog$exportPath_$$("RowSet.prototype._handleEvent", $oj$$5$$.$RowSet$.prototype.$_handleEvent$, $oj$$5$$);
  $oj$$5$$.$RowSet$.$_compareKeys$ = function $$oj$$5$$$$RowSet$$$_compareKeys$$($keyA$$4$$, $keyB$$4$$, $sortDirection$$1$$) {
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
  $oj$$5$$.$RowSet$.prototype.$_compareRowArray$ = function $$oj$$5$$$$RowSet$$$$_compareRowArray$$($origRowArray$$1$$, $updRowArray$$, $origStartIndex$$1$$, $startIndex$$1$$, $pageSize$$1$$) {
    var $updates$$1$$ = [];
    if(0 < $updRowArray$$.length) {
      var $rowIdx$$1$$, $i$$123$$ = 0;
      for($rowIdx$$1$$ = 0;$rowIdx$$1$$ < $origRowArray$$1$$.length;$rowIdx$$1$$++) {
        $rowIdx$$1$$ < $startIndex$$1$$ ? ($updates$$1$$[$i$$123$$] = {rowIdx:$rowIdx$$1$$, status:$oj$$5$$.$RowSet$.$_ROW_STATUSES$.$_DELETED$}, $i$$123$$++) : 0 < $pageSize$$1$$ && $rowIdx$$1$$ >= $startIndex$$1$$ + $pageSize$$1$$ && ($updates$$1$$[$i$$123$$] = {rowIdx:$rowIdx$$1$$, status:$oj$$5$$.$RowSet$.$_ROW_STATUSES$.$_DELETED$}, $i$$123$$++)
      }
      for($rowIdx$$1$$ = 0;$rowIdx$$1$$ < $updRowArray$$.length;$rowIdx$$1$$++) {
        if(0 < $pageSize$$1$$ && $rowIdx$$1$$ >= $startIndex$$1$$ && $rowIdx$$1$$ < $startIndex$$1$$ + $pageSize$$1$$ || 0 > $pageSize$$1$$) {
          var $origSize_row$$7$$ = $origRowArray$$1$$.length;
          if($rowIdx$$1$$ < $origStartIndex$$1$$ || $rowIdx$$1$$ > $origSize_row$$7$$ - 1) {
            $updates$$1$$[$i$$123$$] = {rowIdx:$rowIdx$$1$$, status:$oj$$5$$.$RowSet$.$_ROW_STATUSES$.$_ADDED$}, $i$$123$$++
          }else {
            var $origSize_row$$7$$ = $updRowArray$$[$rowIdx$$1$$], $keys$$6$$ = $origSize_row$$7$$.keys(), $origRow$$ = $origRowArray$$1$$[$rowIdx$$1$$], $updated$$ = !1, $j$$17$$;
            for($j$$17$$ = 0;$j$$17$$ < $keys$$6$$.length;$j$$17$$++) {
              if($origSize_row$$7$$.get($keys$$6$$[$j$$17$$]).toString() != $origRow$$.get($keys$$6$$[$j$$17$$]).toString()) {
                $updates$$1$$[$i$$123$$] = {rowIdx:$rowIdx$$1$$, status:$oj$$5$$.$RowSet$.$_ROW_STATUSES$.$_UPDATED$};
                $updated$$ = !0;
                $i$$123$$++;
                break
              }
            }
            $updated$$ || ($updates$$1$$[$i$$123$$] = {rowIdx:$rowIdx$$1$$, status:$oj$$5$$.$RowSet$.$_ROW_STATUSES$.$_NONE$}, $i$$123$$++)
          }
        }
      }
    }else {
      for($rowIdx$$1$$ = 0;$rowIdx$$1$$ < $origRowArray$$1$$.length;$rowIdx$$1$$++) {
        $updates$$1$$[$rowIdx$$1$$] = {rowIdx:$origRowArray$$1$$[$rowIdx$$1$$], status:$oj$$5$$.$RowSet$.$_ROW_STATUSES$.$_DELETED$}
      }
    }
    return $updates$$1$$
  };
  $oj$$5$$.$RowSet$.$_getKey$ = function $$oj$$5$$$$RowSet$$$_getKey$$($val$$22$$, $attr$$15$$) {
    return $val$$22$$ instanceof $oj$$5$$.$Row$ ? $val$$22$$.get($attr$$15$$) : $$$$5$$.isFunction($val$$22$$[$attr$$15$$]) ? $val$$22$$[$attr$$15$$]() : $val$$22$$[$attr$$15$$]
  };
  $oj$$5$$.$RowSet$.prototype.$_getRowArray$ = function $$oj$$5$$$$RowSet$$$$_getRowArray$$($values$$10$$, $idAttribute$$, $rowArray$$3_startIndex$$2$$, $i$$124_pageSize$$2$$) {
    var $endIndex$$ = $values$$10$$.length - 1;
    0 < $i$$124_pageSize$$2$$ && ($endIndex$$ = $rowArray$$3_startIndex$$2$$ + $i$$124_pageSize$$2$$ - 1);
    $endIndex$$ = null != $endIndex$$ ? $endIndex$$ > $values$$10$$.length - 1 ? $values$$10$$.length - 1 : $endIndex$$ : $values$$10$$.length;
    $rowArray$$3_startIndex$$2$$ = [];
    var $prop$$57$$;
    for($i$$124_pageSize$$2$$ = 0;$i$$124_pageSize$$2$$ <= $endIndex$$;$i$$124_pageSize$$2$$++) {
      var $clonedRowValues_row$$8$$ = [], $rowValues$$ = null, $rowValues$$ = $values$$10$$[$i$$124_pageSize$$2$$] instanceof $oj$$5$$.$Row$ ? $values$$10$$[$i$$124_pageSize$$2$$].$pairs$() : $values$$10$$[$i$$124_pageSize$$2$$];
      for($prop$$57$$ in $rowValues$$) {
        $rowValues$$.hasOwnProperty($prop$$57$$) && ($clonedRowValues_row$$8$$[$prop$$57$$] = $rowValues$$[$prop$$57$$])
      }
      $clonedRowValues_row$$8$$ = new $oj$$5$$.$Row$($clonedRowValues_row$$8$$, {idAttribute:$idAttribute$$});
      $clonedRowValues_row$$8$$.index = $i$$124_pageSize$$2$$;
      $rowArray$$3_startIndex$$2$$[$i$$124_pageSize$$2$$] = $clonedRowValues_row$$8$$
    }
    return $rowArray$$3_startIndex$$2$$
  };
  $oj$$5$$.$RowSet$.prototype.$_getSortAttrs$ = function $$oj$$5$$$$RowSet$$$$_getSortAttrs$$($sortStr$$1$$) {
    return void 0 === $sortStr$$1$$ ? [] : $sortStr$$1$$.split(",")
  };
  $oj$$5$$.$RowSet$.prototype.$_getSortDirStr$ = function $$oj$$5$$$$RowSet$$$$_getSortDirStr$$() {
    return-1 === this.sortDirection ? "dsc" : "asc"
  };
  $oj$$5$$.$RowSet$.prototype.$_hasComparator$ = function $$oj$$5$$$$RowSet$$$$_hasComparator$$() {
    var $comparator$$9$$ = this.comparator;
    return void 0 !== $comparator$$9$$ && null !== $comparator$$9$$
  };
  $oj$$5$$.$RowSet$.prototype.$_processUpdates$ = function $$oj$$5$$$$RowSet$$$$_processUpdates$$($updates$$2$$, $origRowArray$$2$$) {
    var $allAdded_noneUpdated_rowIdx$$2$$ = !0, $i$$125$$;
    for($i$$125$$ = 0;$i$$125$$ < $updates$$2$$.length;$i$$125$$++) {
      if($updates$$2$$[$i$$125$$].status != $oj$$5$$.$RowSet$.$_ROW_STATUSES$.$_NONE$) {
        $allAdded_noneUpdated_rowIdx$$2$$ = !1;
        break
      }
    }
    if($allAdded_noneUpdated_rowIdx$$2$$) {
      this.$_endFetch$(!1)
    }else {
      $allAdded_noneUpdated_rowIdx$$2$$ = !0;
      for($i$$125$$ = 0;$i$$125$$ < $updates$$2$$.length;$i$$125$$++) {
        if($updates$$2$$[$i$$125$$].status != $oj$$5$$.$RowSet$.$_ROW_STATUSES$.$_ADDED$) {
          $allAdded_noneUpdated_rowIdx$$2$$ = !1;
          break
        }
      }
      if($allAdded_noneUpdated_rowIdx$$2$$) {
        this.$_endFetch$(!0)
      }else {
        for($i$$125$$ = 0;$i$$125$$ < $updates$$2$$.length;$i$$125$$++) {
          $allAdded_noneUpdated_rowIdx$$2$$ = $updates$$2$$[$i$$125$$].rowIdx, $updates$$2$$[$i$$125$$].status == $oj$$5$$.$RowSet$.$_ROW_STATUSES$.$_ADDED$ ? this.$_handleEvent$.call(this, $oj$$5$$.$RowSet$.$EventType$.ADD, this.$_rows$[$allAdded_noneUpdated_rowIdx$$2$$]) : $updates$$2$$[$i$$125$$].status == $oj$$5$$.$RowSet$.$_ROW_STATUSES$.$_DELETED$ ? this.$_handleEvent$.call(this, $oj$$5$$.$RowSet$.$EventType$.REMOVE, $origRowArray$$2$$[$allAdded_noneUpdated_rowIdx$$2$$]) : $updates$$2$$[$i$$125$$].status == 
          $oj$$5$$.$RowSet$.$_ROW_STATUSES$.$_UPDATED$ && this.$_handleEvent$.call(this, $oj$$5$$.$RowSet$.$EventType$.CHANGE, this.$_rows$[$allAdded_noneUpdated_rowIdx$$2$$])
        }
        this.$_endFetch$(!1)
      }
    }
  };
  $oj$$5$$.$RowSet$.prototype.$_realignRowIndices$ = function $$oj$$5$$$$RowSet$$$$_realignRowIndices$$() {
    for(var $row$$9$$, $i$$126$$ = 0;$i$$126$$ < this.$_rows$.length;$i$$126$$++) {
      ($row$$9$$ = this.$_rows$[$i$$126$$]) && ($row$$9$$.index = $i$$126$$)
    }
  };
  $oj$$5$$.$RowSet$.prototype.$_removeInternal$ = function $$oj$$5$$$$RowSet$$$$_removeInternal$$($row$$10$$, $index$$94$$, $options$$191$$) {
    $options$$191$$ = $options$$191$$ || {};
    $index$$94$$ = -1 == $index$$94$$ ? this.get($row$$10$$).index : $index$$94$$;
    var $silent$$15$$ = $options$$191$$.silent;
    -1 < $index$$94$$ && (void 0 !== $row$$10$$ && $row$$10$$.$rowSet$ === this && ($row$$10$$.$rowSet$ = null), this.$_rows$.splice($index$$94$$, 1), $silent$$15$$ || ($options$$191$$.index = $index$$94$$, void 0 !== $row$$10$$ && this.$_handleEvent$($oj$$5$$.$RowSet$.$EventType$.REMOVE, $row$$10$$)));
    return $row$$10$$
  };
  $oj$$5$$.$RowSet$.$_sortFunc$ = function $$oj$$5$$$$RowSet$$$_sortFunc$$($a$$51$$, $b$$37$$, $attrs$$15_comparator$$10$$, $rowSet$$1$$, $self$$31$$) {
    var $attrs1$$2_keyA$$5$$, $keyB$$5_retVal$$6$$, $i$$127$$;
    if($$$$5$$.isFunction($attrs$$15_comparator$$10$$)) {
      if(1 === $attrs$$15_comparator$$10$$.length) {
        $attrs1$$2_keyA$$5$$ = $attrs$$15_comparator$$10$$.call($self$$31$$, $a$$51$$);
        $keyB$$5_retVal$$6$$ = $attrs$$15_comparator$$10$$.call($self$$31$$, $b$$37$$);
        $attrs1$$2_keyA$$5$$ = $oj$$5$$.$StringUtils$.$isString$($attrs1$$2_keyA$$5$$) ? $attrs1$$2_keyA$$5$$.split(",") : [$attrs1$$2_keyA$$5$$];
        var $attrs2$$2$$ = $oj$$5$$.$StringUtils$.$isString$($keyB$$5_retVal$$6$$) ? $keyB$$5_retVal$$6$$.split(",") : [$keyB$$5_retVal$$6$$];
        for($i$$127$$ = 0;$i$$127$$ < $attrs1$$2_keyA$$5$$.length;$i$$127$$++) {
          if($keyB$$5_retVal$$6$$ = $oj$$5$$.$RowSet$.$_compareKeys$($attrs1$$2_keyA$$5$$[$i$$127$$], $attrs2$$2$$[$i$$127$$], $rowSet$$1$$.sortDirection), 0 !== $keyB$$5_retVal$$6$$) {
            return $keyB$$5_retVal$$6$$
          }
        }
      }
      return $attrs$$15_comparator$$10$$.call($self$$31$$, $a$$51$$, $b$$37$$)
    }
    if($oj$$5$$.$StringUtils$.$isString$($attrs$$15_comparator$$10$$)) {
      for($attrs$$15_comparator$$10$$ = $attrs$$15_comparator$$10$$.split(","), $i$$127$$ = 0;$i$$127$$ < $attrs$$15_comparator$$10$$.length;$i$$127$$++) {
        if($attrs1$$2_keyA$$5$$ = $oj$$5$$.$RowSet$.$_getKey$($a$$51$$, $attrs$$15_comparator$$10$$[$i$$127$$]), $keyB$$5_retVal$$6$$ = $oj$$5$$.$RowSet$.$_getKey$($b$$37$$, $attrs$$15_comparator$$10$$[$i$$127$$]), $keyB$$5_retVal$$6$$ = $oj$$5$$.$RowSet$.$_compareKeys$($attrs1$$2_keyA$$5$$, $keyB$$5_retVal$$6$$, $rowSet$$1$$.sortDirection), 0 !== $keyB$$5_retVal$$6$$) {
          return $keyB$$5_retVal$$6$$
        }
      }
    }
    return 0
  };
  $oj$$5$$.$RowSet$.prototype.$_canFetch$ = function $$oj$$5$$$$RowSet$$$$_canFetch$$() {
    return!this.$_isFetching$
  };
  $oj$$5$$.$RowSet$.prototype.$_startFetch$ = function $$oj$$5$$$$RowSet$$$$_startFetch$$() {
    this.$_isFetching$ = !0;
    this.$_handleEvent$.call(this, $oj$$5$$.$RowSet$.$EventType$.REQUEST, null)
  };
  $oj$$5$$.$RowSet$.prototype.$_endFetch$ = function $$oj$$5$$$$RowSet$$$$_endFetch$$($refresh$$) {
    this.$_isFetching$ = !1;
    this.$_handleEvent$.call(this, $oj$$5$$.$RowSet$.$EventType$.SYNC, $refresh$$)
  };
  $oj$$5$$.$RowSet$.$EventType$ = {ADD:"add", REMOVE:"remove", RESET:"reset", SORT:"sort", CHANGE:"change", DESTROY:"destroy", REQUEST:"request", SYNC:"sync", ERROR:"error", INVALID:"invalid", ALL:"all"};
  $goog$exportPath_$$("RowSet.EventType", $oj$$5$$.$RowSet$.$EventType$, $oj$$5$$);
  $oj$$5$$.$RowSet$.$_ROW_STATUSES$ = {$_ADDED$:"added", $_DELETED$:"deleted", $_UPDATED$:"updated", $_NONE$:"none"};
  $goog$exportPath_$$("RowSet._ROW_STATUSES", $oj$$5$$.$RowSet$.$_ROW_STATUSES$, $oj$$5$$);
  $oj$$5$$.$EmptyNodeSet$ = function $$oj$$5$$$$EmptyNodeSet$$($parent$$23$$, $start$$19$$) {
    this.$m_parent$ = $parent$$23$$;
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
  $oj$$5$$.$JsonNodeSet$ = function $$oj$$5$$$$JsonNodeSet$$($startNode$$, $endNode$$, $data$$50$$, $currKey$$1$$, $depth$$15$$) {
    $oj$$5$$.$Assert$.$assertNumber$($startNode$$, null);
    $oj$$5$$.$Assert$.$assertNumber$($endNode$$, null);
    this.$m_depth$ = $depth$$15$$;
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
  $oj$$5$$.$JsonNodeSet$.prototype.getData = function $$oj$$5$$$$JsonNodeSet$$$getData$($index$$98$$) {
    $oj$$5$$.$Assert$.assert($index$$98$$ <= this.$m_endNode$ && $index$$98$$ >= this.$m_startNode$);
    return this.$m_nodes$[$index$$98$$] ? this.$m_nodes$[$index$$98$$].attr : null
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getData", {getData:$oj$$5$$.$JsonNodeSet$.prototype.getData});
  $oj$$5$$.$JsonNodeSet$.prototype.getData = function $$oj$$5$$$$JsonNodeSet$$$getData$($index$$99$$) {
    $oj$$5$$.$Assert$.assert($index$$99$$ <= this.$m_endNode$ && $index$$99$$ >= this.$m_startNode$);
    return this.$m_nodes$[$index$$99$$] ? this.$m_nodes$[$index$$99$$] : null
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getData", {getData:$oj$$5$$.$JsonNodeSet$.prototype.getData});
  $oj$$5$$.$JsonNodeSet$.prototype.getMetadata = function $$oj$$5$$$$JsonNodeSet$$$getMetadata$($index$$100$$) {
    var $metadata$$7$$ = [];
    $oj$$5$$.$Assert$.assert($index$$100$$ <= this.$m_endNode$ && $index$$100$$ >= this.$m_startNode$);
    $metadata$$7$$.key = this.$m_nodes$[$index$$100$$].id ? this.$m_nodes$[$index$$100$$].id : this.$m_nodes$[$index$$100$$].attr.id;
    $metadata$$7$$.leaf = !0;
    $metadata$$7$$.depth = this.$m_nodes$[$index$$100$$].depth;
    this.$m_nodes$[$index$$100$$].children && 0 < this.$m_nodes$[$index$$100$$].children.length && ($metadata$$7$$.leaf = !1);
    return $metadata$$7$$
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getMetadata", {getMetadata:$oj$$5$$.$JsonNodeSet$.prototype.getMetadata});
  $oj$$5$$.$Row$ = function $$oj$$5$$$$Row$$($attributes$$13$$, $options$$192$$) {
    $oj$$5$$.$Row$._init(this, $attributes$$13$$, $options$$192$$, null)
  };
  $goog$exportPath_$$("Row", $oj$$5$$.$Row$, $oj$$5$$);
  $oj$$5$$.$Object$.$createSubclass$($oj$$5$$.$Row$, $oj$$5$$.$Object$, "Row.Row");
  $oj$$5$$.$Row$.prototype.$Init$ = function $$oj$$5$$$$Row$$$$Init$$() {
    $oj$$5$$.$Row$.$superclass$.$Init$.call(this)
  };
  $oj$$5$$.$Row$.prototype.attributes = {};
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("Row.prototype.attributes", {attributes:$oj$$5$$.$Row$.prototype.attributes});
  $oj$$5$$.$Row$.prototype.id = null;
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("Row.prototype.id", {id:$oj$$5$$.$Row$.prototype.id});
  $oj$$5$$.$Row$.prototype.$idAttribute$ = null;
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("Row.prototype.idAttribute", {$idAttribute$:$oj$$5$$.$Row$.prototype.$idAttribute$});
  $oj$$5$$.$Row$._init = function $$oj$$5$$$$Row$$_init$($row$$12$$, $attrCopy$$1_attributes$$14$$, $options$$193$$, $properties$$8$$) {
    var $prop$$58$$ = null;
    $row$$12$$.$Init$();
    $row$$12$$.index = -1;
    $options$$193$$ = $options$$193$$ || {};
    $row$$12$$.attributes = {};
    for($prop$$58$$ in $properties$$8$$) {
      $properties$$8$$.hasOwnProperty($prop$$58$$) && ($row$$12$$[$prop$$58$$] = $properties$$8$$[$prop$$58$$])
    }
    if($attrCopy$$1_attributes$$14$$) {
      if($attrCopy$$1_attributes$$14$$ = $oj$$5$$.$Row$.$_cloneAttributes$($attrCopy$$1_attributes$$14$$, $row$$12$$.attributes), null == $attrCopy$$1_attributes$$14$$ || void 0 === $attrCopy$$1_attributes$$14$$) {
        $row$$12$$.attributes = {}
      }else {
        for($prop$$58$$ in $attrCopy$$1_attributes$$14$$) {
          $attrCopy$$1_attributes$$14$$.hasOwnProperty($prop$$58$$) && $row$$12$$.$_setProp$($prop$$58$$, $attrCopy$$1_attributes$$14$$[$prop$$58$$])
        }
      }
    }
    $row$$12$$.rowSet = $options$$193$$.rowSet;
    $row$$12$$.idAttribute = $options$$193$$.idAttribute;
    $row$$12$$.$_setupId$()
  };
  $oj$$5$$.$Row$.prototype.clone = function $$oj$$5$$$$Row$$$clone$() {
    var $c$$22$$ = new this.constructor, $prop$$59$$;
    for($prop$$59$$ in this) {
      this.hasOwnProperty($prop$$59$$) && this[$prop$$59$$] !== this.attributes && ($c$$22$$[$prop$$59$$] = this[$prop$$59$$])
    }
    $c$$22$$.attributes = $oj$$5$$.$Row$.$_cloneAttributes$(this.attributes, null);
    $c$$22$$.$_setupId$();
    return $c$$22$$
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("Row.prototype.clone", {clone:$oj$$5$$.$Row$.prototype.clone});
  $oj$$5$$.$Row$.prototype.get = function $$oj$$5$$$$Row$$$get$($property$$15$$) {
    return this.attributes[$property$$15$$]
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("Row.prototype.get", {get:$oj$$5$$.$Row$.prototype.get});
  $oj$$5$$.$Row$.prototype.set = function $$oj$$5$$$$Row$$$set$($property$$16$$, $value$$136$$, $options$$194$$) {
    var $i$$128_opts$$10$$ = {}, $ignoreLastArg$$2$$ = !1;
    if(arguments && 0 < arguments.length) {
      if(1 < arguments.length && arguments[arguments.length - 1] && ($ignoreLastArg$$2$$ = !0, $i$$128_opts$$10$$ = arguments[arguments.length - 1] || {}), $oj$$5$$.$Row$.$_hasProperties$($property$$16$$)) {
        this.$_setProp$($property$$16$$, $i$$128_opts$$10$$)
      }else {
        for($i$$128_opts$$10$$ = 0;$i$$128_opts$$10$$ < arguments.length;$i$$128_opts$$10$$ += 2) {
          (void 0 !== arguments[$i$$128_opts$$10$$] || $i$$128_opts$$10$$ < arguments.length - 1 || !$ignoreLastArg$$2$$ && $i$$128_opts$$10$$ === arguments.length - 1) && this.$_setProp$(arguments[$i$$128_opts$$10$$], arguments[$i$$128_opts$$10$$ + 1])
        }
      }
    }
    return this
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("Row.prototype.set", {set:$oj$$5$$.$Row$.prototype.set});
  $oj$$5$$.$Row$.prototype.keys = function $$oj$$5$$$$Row$$$keys$() {
    var $prop$$61$$, $retArray$$3$$ = [];
    for($prop$$61$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$61$$) && $retArray$$3$$.push($prop$$61$$)
    }
    return $retArray$$3$$
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("Row.prototype.keys", {keys:$oj$$5$$.$Row$.prototype.keys});
  $oj$$5$$.$Row$.prototype.$values$ = function $$oj$$5$$$$Row$$$$values$$() {
    var $prop$$62$$, $retArray$$4$$ = [];
    for($prop$$62$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$62$$) && $retArray$$4$$.push(this.get($prop$$62$$))
    }
    return $retArray$$4$$
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("Row.prototype.values", {$values$:$oj$$5$$.$Row$.prototype.$values$});
  $oj$$5$$.$Row$.prototype.$pairs$ = function $$oj$$5$$$$Row$$$$pairs$$() {
    var $prop$$63$$, $retObj$$7$$ = {};
    for($prop$$63$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$63$$) && ($retObj$$7$$[$prop$$63$$] = this.get($prop$$63$$))
    }
    return $retObj$$7$$
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("Row.prototype.pairs", {$pairs$:$oj$$5$$.$Row$.prototype.$pairs$});
  $oj$$5$$.$Row$.prototype.$_getIdAttr$ = function $$oj$$5$$$$Row$$$$_getIdAttr$$() {
    return this.idAttribute || "id"
  };
  $oj$$5$$.$Row$.prototype.$_getProp$ = function $$oj$$5$$$$Row$$$$_getProp$$($prop$$64$$) {
    return this[$prop$$64$$] instanceof Function ? this[$prop$$64$$]() : this[$prop$$64$$]
  };
  $oj$$5$$.$Row$.$_hasProperties$ = function $$oj$$5$$$$Row$$$_hasProperties$$($object$$5$$) {
    var $prop$$65$$;
    if($object$$5$$ && $object$$5$$ instanceof Object) {
      for($prop$$65$$ in $object$$5$$) {
        if($object$$5$$.hasOwnProperty($prop$$65$$)) {
          return!0
        }
      }
    }
    return!1
  };
  $oj$$5$$.$Row$.prototype.$_setupId$ = function $$oj$$5$$$$Row$$$$_setupId$$() {
    this.id = this.attributes[this.$_getIdAttr$()]
  };
  $oj$$5$$.$Row$.prototype.$_setPropInternal$ = function $$oj$$5$$$$Row$$$$_setPropInternal$$($prop$$66$$, $value$$137$$) {
    return $oj$$5$$.$Object$.$innerEquals$(this.attributes[$prop$$66$$], $value$$137$$) ? !1 : (this.attributes[$prop$$66$$] = $value$$137$$, this.$_setupId$(), !0)
  };
  $oj$$5$$.$Row$.prototype.$_setProp$ = function $$oj$$5$$$$Row$$$$_setProp$$($prop$$67$$, $value$$138$$) {
    if(null == $prop$$67$$) {
      return!0
    }
    var $attrs$$16$$ = {}, $p$$5$$;
    if(2 < arguments.length) {
      $attrs$$16$$[$prop$$67$$] = $value$$138$$
    }else {
      for($p$$5$$ in $prop$$67$$) {
        $prop$$67$$.hasOwnProperty($p$$5$$) && ($attrs$$16$$[$p$$5$$] = $prop$$67$$[$p$$5$$])
      }
    }
    for($p$$5$$ in $attrs$$16$$) {
      $attrs$$16$$.hasOwnProperty($p$$5$$) && this.$_setPropInternal$($p$$5$$, $attrs$$16$$[$p$$5$$])
    }
    return!0
  };
  $oj$$5$$.$Row$.$_cloneAttributes$ = function $$oj$$5$$$$Row$$$_cloneAttributes$$($oldData$$1$$, $newData$$1$$) {
    var $prop$$68$$;
    $newData$$1$$ = $newData$$1$$ || {};
    for($prop$$68$$ in $oldData$$1$$) {
      $oldData$$1$$.hasOwnProperty($prop$$68$$) && ("object" !== typeof $oldData$$1$$[$prop$$68$$] ? $newData$$1$$.hasOwnProperty($prop$$68$$) ? void 0 !== $oldData$$1$$[$prop$$68$$] && ($newData$$1$$[$prop$$68$$] = $oldData$$1$$[$prop$$68$$]) : $newData$$1$$[$prop$$68$$] = $oldData$$1$$[$prop$$68$$] : $newData$$1$$[$prop$$68$$] = $oj$$5$$.$Row$.$_cloneAttributes$($oldData$$1$$[$prop$$68$$], null))
    }
    return $newData$$1$$
  };
  $oj$$5$$.$FlattenedNodeSet$ = function $$oj$$5$$$$FlattenedNodeSet$$($nodeSet$$16$$, $actualStart$$1$$) {
    this.$m_nodeSet$ = $nodeSet$$16$$;
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
  $oj$$5$$.$FlattenedNodeSet$.prototype.$_getCount$ = function $$oj$$5$$$$FlattenedNodeSet$$$$_getCount$$($nodeSet$$17$$, $total$$) {
    var $start$$20$$, $count$$22$$, $i$$129$$, $child$$3$$;
    $start$$20$$ = $nodeSet$$17$$.$getStart$();
    $count$$22$$ = $nodeSet$$17$$.$getCount$();
    $total$$ += $count$$22$$;
    if($nodeSet$$17$$.$getChildNodeSet$) {
      for($i$$129$$ = 0;$i$$129$$ < $count$$22$$;$i$$129$$++) {
        $child$$3$$ = $nodeSet$$17$$.$getChildNodeSet$($i$$129$$ + $start$$20$$), null != $child$$3$$ && ($total$$ = this.$_getCount$($child$$3$$, $total$$))
      }
    }
    return $total$$
  };
  $oj$$5$$.$FlattenedNodeSet$.prototype.getData = function $$oj$$5$$$$FlattenedNodeSet$$$getData$($index$$101$$) {
    return this.$_getDataOrMetadata$(this.$m_nodeSet$, $index$$101$$, {index:this.$m_nodeSet$.$getStart$()}, this.$_getData$)
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getData", {getData:$oj$$5$$.$FlattenedNodeSet$.prototype.getData});
  $oj$$5$$.$FlattenedNodeSet$.prototype.getMetadata = function $$oj$$5$$$$FlattenedNodeSet$$$getMetadata$($index$$102$$) {
    return this.$_getDataOrMetadata$(this.$m_nodeSet$, $index$$102$$, {index:this.$m_nodeSet$.$getStart$()}, this.$_getMetadata$)
  };
  $oj$$5$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getMetadata", {getMetadata:$oj$$5$$.$FlattenedNodeSet$.prototype.getMetadata});
  $oj$$5$$.$FlattenedNodeSet$.prototype.$_getMetadata$ = function $$oj$$5$$$$FlattenedNodeSet$$$$_getMetadata$$($nodeSet$$18$$, $index$$103$$) {
    return $nodeSet$$18$$.getMetadata($index$$103$$)
  };
  $oj$$5$$.$FlattenedNodeSet$.prototype.$_getData$ = function $$oj$$5$$$$FlattenedNodeSet$$$$_getData$$($nodeSet$$19$$, $index$$104$$) {
    return $nodeSet$$19$$.getData($index$$104$$)
  };
  $oj$$5$$.$FlattenedNodeSet$.prototype.$_getDataOrMetadata$ = function $$oj$$5$$$$FlattenedNodeSet$$$$_getDataOrMetadata$$($nodeSet$$20$$, $index$$105$$, $current$$6$$, $func$$9$$) {
    var $start$$21$$, $count$$23$$, $i$$130$$, $child$$4_currIndex_result$$11$$;
    $start$$21$$ = $nodeSet$$20$$.$getStart$();
    $count$$23$$ = $nodeSet$$20$$.$getCount$();
    for($i$$130$$ = 0;$i$$130$$ < $count$$23$$;$i$$130$$++) {
      $child$$4_currIndex_result$$11$$ = $current$$6$$.index;
      if($child$$4_currIndex_result$$11$$ === $index$$105$$) {
        return $func$$9$$.call(this, $nodeSet$$20$$, $i$$130$$ + $start$$21$$)
      }
      $current$$6$$.index = $child$$4_currIndex_result$$11$$ + 1;
      if($nodeSet$$20$$.$getChildNodeSet$ && ($child$$4_currIndex_result$$11$$ = $nodeSet$$20$$.$getChildNodeSet$($i$$130$$ + $start$$21$$), null != $child$$4_currIndex_result$$11$$ && ($child$$4_currIndex_result$$11$$ = this.$_getDataOrMetadata$($child$$4_currIndex_result$$11$$, $index$$105$$, $current$$6$$, $func$$9$$), null != $child$$4_currIndex_result$$11$$))) {
        return $child$$4_currIndex_result$$11$$
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
