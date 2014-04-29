define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdatacollection-common"], function($oj$$8$$, $$$$8$$) {
  $oj$$8$$.$FlattenedTreeRowSet$ = function $$oj$$8$$$$FlattenedTreeRowSet$$($data$$55$$, $options$$212$$) {
    $oj$$8$$.$FlattenedTreeRowSet$._init(this, $data$$55$$, $options$$212$$)
  };
  $goog$exportPath_$$("FlattenedTreeRowSet", $oj$$8$$.$FlattenedTreeRowSet$, $oj$$8$$);
  $oj$$8$$.$Object$.$createSubclass$($oj$$8$$.$FlattenedTreeRowSet$, $oj$$8$$.$RowSet$, "oj.FlattenedTreeRowSet");
  $oj$$8$$.$FlattenedTreeRowSet$.prototype.$Init$ = function $$oj$$8$$$$FlattenedTreeRowSet$$$$Init$$() {
    $oj$$8$$.$FlattenedTreeRowSet$.$superclass$.$Init$.call(this)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.Init", {$Init$:$oj$$8$$.$FlattenedTreeRowSet$.prototype.$Init$});
  $oj$$8$$.$FlattenedTreeRowSet$._init = function $$oj$$8$$$$FlattenedTreeRowSet$$_init$($rowSet$$3$$, $data$$56$$) {
    $rowSet$$3$$.$_eventHandlers$ = [];
    $rowSet$$3$$.$_startIndex$ = 0;
    $rowSet$$3$$.$Init$();
    $rowSet$$3$$.$_data$ = $data$$56$$
  };
  $oj$$8$$.$FlattenedTreeRowSet$.prototype.add = function $$oj$$8$$$$FlattenedTreeRowSet$$$add$() {
    $oj$$8$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.add", {add:$oj$$8$$.$FlattenedTreeRowSet$.prototype.add});
  $oj$$8$$.$FlattenedTreeRowSet$.prototype.at = function $$oj$$8$$$$FlattenedTreeRowSet$$$at$($index$$124$$) {
    var $nodeSet$$28$$ = this.$_currentNodeSet$, $startIndex$$3$$ = $nodeSet$$28$$.$getStart$();
    return new $oj$$8$$.$ArrayRow$($nodeSet$$28$$.getData($startIndex$$3$$ + $index$$124$$))
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.at", {at:$oj$$8$$.$FlattenedTreeRowSet$.prototype.at});
  $oj$$8$$.$FlattenedTreeRowSet$.prototype.clone = function $$oj$$8$$$$FlattenedTreeRowSet$$$clone$() {
    $oj$$8$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.clone", {clone:$oj$$8$$.$FlattenedTreeRowSet$.prototype.clone});
  $oj$$8$$.$FlattenedTreeRowSet$.prototype.fetch = function $$oj$$8$$$$FlattenedTreeRowSet$$$fetch$($options$$216$$) {
    $options$$216$$ = $options$$216$$ || {};
    null != $options$$216$$.startIndex && (this.$_startIndex$ = $options$$216$$.startIndex);
    this.$_data$.$fetchRows$({start:this.$_startIndex$, count:30}, {success:function($nodeSet$$29$$) {
      this.$_handleFetchRowsSuccess$($nodeSet$$29$$)
    }.bind(this), error:$JSCompiler_emptyFn$$().bind(this)})
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.fetch", {fetch:$oj$$8$$.$FlattenedTreeRowSet$.prototype.fetch});
  $oj$$8$$.$FlattenedTreeRowSet$.prototype.get = function $$oj$$8$$$$FlattenedTreeRowSet$$$get$() {
    $oj$$8$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.get", {get:$oj$$8$$.$FlattenedTreeRowSet$.prototype.get});
  $oj$$8$$.$FlattenedTreeRowSet$.prototype.hasMore = function $$oj$$8$$$$FlattenedTreeRowSet$$$hasMore$() {
    $oj$$8$$.$Assert$.$failedInAbstractFunction$();
    return!1
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.hasMore", {hasMore:$oj$$8$$.$FlattenedTreeRowSet$.prototype.hasMore});
  $oj$$8$$.$FlattenedTreeRowSet$.prototype.indexOf = function $$oj$$8$$$$FlattenedTreeRowSet$$$indexOf$() {
    $oj$$8$$.$Assert$.$failedInAbstractFunction$();
    return 0
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.indexOf", {indexOf:$oj$$8$$.$FlattenedTreeRowSet$.prototype.indexOf});
  $oj$$8$$.$FlattenedTreeRowSet$.prototype.$isEmpty$ = function $$oj$$8$$$$FlattenedTreeRowSet$$$$isEmpty$$() {
    $oj$$8$$.$Assert$.$failedInAbstractFunction$();
    return!0
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.isEmpty", {$isEmpty$:$oj$$8$$.$FlattenedTreeRowSet$.prototype.$isEmpty$});
  $oj$$8$$.$FlattenedTreeRowSet$.prototype.remove = function $$oj$$8$$$$FlattenedTreeRowSet$$$remove$() {
    $oj$$8$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.remove", {remove:$oj$$8$$.$FlattenedTreeRowSet$.prototype.remove});
  $oj$$8$$.$FlattenedTreeRowSet$.prototype.reset = function $$oj$$8$$$$FlattenedTreeRowSet$$$reset$() {
    $oj$$8$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.reset", {reset:$oj$$8$$.$FlattenedTreeRowSet$.prototype.reset});
  $oj$$8$$.$FlattenedTreeRowSet$.prototype.size = function $$oj$$8$$$$FlattenedTreeRowSet$$$size$() {
    return null == this.$_currentNodeSet$ ? 0 : this.$_currentNodeSet$.$getCount$()
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.size", {size:$oj$$8$$.$FlattenedTreeRowSet$.prototype.size});
  $oj$$8$$.$FlattenedTreeRowSet$.prototype.sort = function $$oj$$8$$$$FlattenedTreeRowSet$$$sort$() {
    $oj$$8$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.sort", {sort:$oj$$8$$.$FlattenedTreeRowSet$.prototype.sort});
  $oj$$8$$.$FlattenedTreeRowSet$.prototype.startIndex = $JSCompiler_returnArg$$(0);
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.startIndex", {startIndex:$oj$$8$$.$FlattenedTreeRowSet$.prototype.startIndex});
  $oj$$8$$.$FlattenedTreeRowSet$.prototype.totalSize = $JSCompiler_returnArg$$(-1);
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.totalSize", {totalSize:$oj$$8$$.$FlattenedTreeRowSet$.prototype.totalSize});
  $oj$$8$$.$FlattenedTreeRowSet$.prototype.$_handleFetchRowsSuccess$ = function $$oj$$8$$$$FlattenedTreeRowSet$$$$_handleFetchRowsSuccess$$($nodeSet$$30$$) {
    this.$_currentNodeSet$ = $nodeSet$$30$$;
    var $i$$142$$, $nodeCount$$2$$ = $nodeSet$$30$$.$getCount$(), $startIndex$$4$$ = $nodeSet$$30$$.$getStart$();
    for($i$$142$$ = 0;$i$$142$$ < $nodeCount$$2$$;$i$$142$$++) {
      $oj$$8$$.$FlattenedTreeRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$8$$.$RowSet$.$EventType$.ADD, {row:new $oj$$8$$.$ArrayRow$($nodeSet$$30$$.getData($i$$142$$), {context:$nodeSet$$30$$.getMetadata($i$$142$$)}), rowIdx:$startIndex$$4$$ + $i$$142$$})
    }
  };
  $oj$$8$$.$TableDataSource$ = function $$oj$$8$$$$TableDataSource$$($data$$58$$, $options$$222$$) {
    if(this.constructor == $oj$$8$$.$TableDataSource$) {
      var $errSummary$$ = $oj$$8$$.$Translations$.$getTranslatedString$("oj-ojTable.tableDataSourceInstantiated.summary"), $errDetail$$ = $oj$$8$$.$Translations$.$getTranslatedString$("oj-ojTable.tableDataSourceInstantiated.detail");
      throw new $oj$$8$$.$Message$($errSummary$$, $errDetail$$, $oj$$8$$.$Message$.$SEVERITY_LEVEL$.ERROR);
    }
    this.data = $data$$58$$;
    this.options = $options$$222$$;
    this.$_startIndex$ = 0;
    this.$Init$()
  };
  $goog$exportPath_$$("TableDataSource", $oj$$8$$.$TableDataSource$, $oj$$8$$);
  $oj$$8$$.$Object$.$createSubclass$($oj$$8$$.$TableDataSource$, $oj$$8$$.$DataSource$, "oj.TableDataSource");
  $oj$$8$$.$TableDataSource$.prototype.$Init$ = function $$oj$$8$$$$TableDataSource$$$$Init$$() {
    $oj$$8$$.$TableDataSource$.$superclass$.$Init$.call(this)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.Init", {$Init$:$oj$$8$$.$TableDataSource$.prototype.$Init$});
  $oj$$8$$.$TableDataSource$.prototype.at = function $$oj$$8$$$$TableDataSource$$$at$() {
    $oj$$8$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.at", {at:$oj$$8$$.$TableDataSource$.prototype.at});
  $oj$$8$$.$TableDataSource$.prototype.fetch = function $$oj$$8$$$$TableDataSource$$$fetch$() {
    $oj$$8$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.fetch", {fetch:$oj$$8$$.$TableDataSource$.prototype.fetch});
  $oj$$8$$.$TableDataSource$.prototype.get = function $$oj$$8$$$$TableDataSource$$$get$() {
    $oj$$8$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.get", {get:$oj$$8$$.$TableDataSource$.prototype.get});
  $oj$$8$$.$TableDataSource$.prototype.hasMore = function $$oj$$8$$$$TableDataSource$$$hasMore$() {
    $oj$$8$$.$Assert$.$failedInAbstractFunction$();
    return!1
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.hasMore", {hasMore:$oj$$8$$.$TableDataSource$.prototype.hasMore});
  $oj$$8$$.$TableDataSource$.prototype.indexOf = function $$oj$$8$$$$TableDataSource$$$indexOf$() {
    $oj$$8$$.$Assert$.$failedInAbstractFunction$();
    return 0
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.indexOf", {indexOf:$oj$$8$$.$TableDataSource$.prototype.indexOf});
  $oj$$8$$.$TableDataSource$.prototype.size = function $$oj$$8$$$$TableDataSource$$$size$() {
    $oj$$8$$.$Assert$.$failedInAbstractFunction$();
    return 0
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.size", {size:$oj$$8$$.$TableDataSource$.prototype.size});
  $oj$$8$$.$TableDataSource$.prototype.sort = function $$oj$$8$$$$TableDataSource$$$sort$() {
    $oj$$8$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.sort", {sort:$oj$$8$$.$TableDataSource$.prototype.sort});
  $oj$$8$$.$TableDataSource$.prototype.startIndex = function $$oj$$8$$$$TableDataSource$$$startIndex$($startIndex$$5$$) {
    null != $startIndex$$5$$ && (this.$_startIndex$ = $startIndex$$5$$);
    return this.$_startIndex$
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.startIndex", {startIndex:$oj$$8$$.$TableDataSource$.prototype.startIndex});
  $oj$$8$$.$TableDataSource$.prototype.totalSize = function $$oj$$8$$$$TableDataSource$$$totalSize$() {
    $oj$$8$$.$Assert$.$failedInAbstractFunction$();
    return 0
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.totalSize", {totalSize:$oj$$8$$.$TableDataSource$.prototype.totalSize});
  $oj$$8$$.$PagingTableDataSource$ = function $$oj$$8$$$$PagingTableDataSource$$($dataSource$$5_errSummary$$1$$) {
    if(!($dataSource$$5_errSummary$$1$$ instanceof $oj$$8$$.$TableDataSource$)) {
      $dataSource$$5_errSummary$$1$$ = $oj$$8$$.$Translations$.$getTranslatedString$("oj-table.dataInvalidType.summary");
      var $errDetail$$1$$ = $oj$$8$$.$Translations$.$getTranslatedString$("oj-table.dataInvalidType.detail");
      throw new $oj$$8$$.$Message$($dataSource$$5_errSummary$$1$$, $errDetail$$1$$, $oj$$8$$.$Message$.$SEVERITY_LEVEL$.ERROR);
    }
    this.$dataSource$ = $dataSource$$5_errSummary$$1$$;
    this.$_startIndex$ = 0;
    this.$Init$()
  };
  $goog$exportPath_$$("PagingTableDataSource", $oj$$8$$.$PagingTableDataSource$, $oj$$8$$);
  $oj$$8$$.$Object$.$createSubclass$($oj$$8$$.$PagingTableDataSource$, $oj$$8$$.$PagingDataSource$, "oj.PagingTableDataSource");
  $oj$$8$$.$PagingTableDataSource$.prototype.$Init$ = function $$oj$$8$$$$PagingTableDataSource$$$$Init$$() {
    $oj$$8$$.$PagingTableDataSource$.$superclass$.$Init$.call(this)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.Init", {$Init$:$oj$$8$$.$PagingTableDataSource$.prototype.$Init$});
  $oj$$8$$.$PagingTableDataSource$.prototype.fetch = function $$oj$$8$$$$PagingTableDataSource$$$fetch$($options$$226$$) {
    null != $options$$226$$ && (this.$_startIndex$ = $options$$226$$.startIndex);
    this.$dataSource$.fetch({startIndex:this.$_startIndex$, pageSize:null != $options$$226$$.pageSize ? $options$$226$$.pageSize : this.$_pageSize$})
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.fetch", {fetch:$oj$$8$$.$PagingTableDataSource$.prototype.fetch});
  $oj$$8$$.$PagingTableDataSource$.prototype.next = function $$oj$$8$$$$PagingTableDataSource$$$next$() {
    this.$dataSource$.totalSize() > this.$_startIndex$ && (this.$_currentPageSize$ += this.$_pageSize$, this.fetch({startIndex:this.$_startIndex$, pageSize:this.$_currentPageSize$}))
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.next", {next:$oj$$8$$.$PagingTableDataSource$.prototype.next});
  $oj$$8$$.$PagingTableDataSource$.prototype.previous = function $$oj$$8$$$$PagingTableDataSource$$$previous$() {
    if(0 != this.$_startIndex$ || -1 != this.$_startIndex$) {
      this.$_startIndex$ -= this.$_pageSize$, this.$_startIndex$ = 0 > this.$_startIndex$ ? 0 : this.$_startIndex$, this.$_currentPageSize$ += this.$_pageSize$, this.fetch({startIndex:this.$_startIndex$, pageSize:this.$_currentPageSize$})
    }
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.previous", {previous:$oj$$8$$.$PagingTableDataSource$.prototype.previous});
  $oj$$8$$.$PagingTableDataSource$.prototype.$setPageSize$ = function $$oj$$8$$$$PagingTableDataSource$$$$setPageSize$$($n$$20$$) {
    this.$_pageSize$ = $n$$20$$;
    this.$_currentPageSize$ = this.$_startIndex$ + $n$$20$$
  };
  $oj$$8$$.$PagingTableDataSource$.prototype.startIndex = $JSCompiler_get$$("$_startIndex$");
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.startIndex", {startIndex:$oj$$8$$.$PagingTableDataSource$.prototype.startIndex});
  $oj$$8$$.$PagingTableDataSource$.prototype.at = function $$oj$$8$$$$PagingTableDataSource$$$at$($index$$126$$) {
    return this.$dataSource$.at($index$$126$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.at", {at:$oj$$8$$.$PagingTableDataSource$.prototype.at});
  $oj$$8$$.$PagingTableDataSource$.prototype.get = function $$oj$$8$$$$PagingTableDataSource$$$get$($id$$14$$) {
    return this.$dataSource$.get($id$$14$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.get", {get:$oj$$8$$.$PagingTableDataSource$.prototype.get});
  $oj$$8$$.$PagingTableDataSource$.prototype.hasMore = function $$oj$$8$$$$PagingTableDataSource$$$hasMore$() {
    return this.$dataSource$.hasMore()
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.hasMore", {hasMore:$oj$$8$$.$PagingTableDataSource$.prototype.hasMore});
  $oj$$8$$.$PagingTableDataSource$.prototype.indexOf = function $$oj$$8$$$$PagingTableDataSource$$$indexOf$($model$$37$$) {
    return this.$dataSource$.indexOf($model$$37$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.indexOf", {indexOf:$oj$$8$$.$PagingTableDataSource$.prototype.indexOf});
  $oj$$8$$.$PagingTableDataSource$.prototype.on = function $$oj$$8$$$$PagingTableDataSource$$$on$($eventType$$30$$, $eventHandler$$8$$) {
    return this.$dataSource$.on($eventType$$30$$, $eventHandler$$8$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.on", {on:$oj$$8$$.$PagingTableDataSource$.prototype.on});
  $oj$$8$$.$PagingTableDataSource$.prototype.off = function $$oj$$8$$$$PagingTableDataSource$$$off$($eventType$$31$$, $eventHandler$$9$$) {
    return this.$dataSource$.off($eventType$$31$$, $eventHandler$$9$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.off", {off:$oj$$8$$.$PagingTableDataSource$.prototype.off});
  $oj$$8$$.$PagingTableDataSource$.prototype.size = function $$oj$$8$$$$PagingTableDataSource$$$size$() {
    return null != this.$_currentPageSize$ && 0 < this.$_currentPageSize$ && this.$dataSource$.size() > this.$_currentPageSize$ ? this.$_currentPageSize$ : this.$dataSource$.size()
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.size", {size:$oj$$8$$.$PagingTableDataSource$.prototype.size});
  $oj$$8$$.$PagingTableDataSource$.prototype.sort = function $$oj$$8$$$$PagingTableDataSource$$$sort$($comparator$$14$$, $options$$227$$) {
    this.$dataSource$.sort($comparator$$14$$, $options$$227$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.sort", {sort:$oj$$8$$.$PagingTableDataSource$.prototype.sort});
  $oj$$8$$.$PagingTableDataSource$.prototype.totalSize = function $$oj$$8$$$$PagingTableDataSource$$$totalSize$() {
    return this.$dataSource$.totalSize()
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.totalSize", {totalSize:$oj$$8$$.$PagingTableDataSource$.prototype.totalSize});
  $oj$$8$$.$ArrayTableDataSource$ = function $$oj$$8$$$$ArrayTableDataSource$$($data$$59$$, $options$$228$$) {
    if(!($data$$59$$ instanceof Array) && "function" != typeof $data$$59$$ && "function" != typeof $data$$59$$.$subscribe$) {
      var $errSummary$$2$$ = $oj$$8$$.$Translations$.$getTranslatedString$("oj-ojTable.dataInvalidType.summary"), $errDetail$$2$$ = $oj$$8$$.$Translations$.$getTranslatedString$("oj-ojTable.dataInvalidType.detail");
      throw new $oj$$8$$.$Message$($errSummary$$2$$, $errDetail$$2$$, $oj$$8$$.$Message$.$SEVERITY_LEVEL$.ERROR);
    }
    $oj$$8$$.$ArrayTableDataSource$.$superclass$.constructor.call(this, $data$$59$$, $options$$228$$);
    this.$_rowSet$ = new $oj$$8$$.$ArrayRowSet$($data$$59$$, this.options);
    this.$_addRowSetEventListeners$();
    if(null != $options$$228$$ && ("enabled" == $options$$228$$.startFetch || null == $options$$228$$.startFetch) || null == $options$$228$$) {
      var $self$$42$$ = this;
      setTimeout(function() {
        $self$$42$$.fetch({startFetch:"enabled"})
      }, 0)
    }
  };
  $goog$exportPath_$$("ArrayTableDataSource", $oj$$8$$.$ArrayTableDataSource$, $oj$$8$$);
  $oj$$8$$.$Object$.$createSubclass$($oj$$8$$.$ArrayTableDataSource$, $oj$$8$$.$TableDataSource$, "oj.ArrayTableDataSource");
  $oj$$8$$.$ArrayTableDataSource$.prototype.$Init$ = function $$oj$$8$$$$ArrayTableDataSource$$$$Init$$() {
    $oj$$8$$.$ArrayTableDataSource$.$superclass$.$Init$.call(this)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.Init", {$Init$:$oj$$8$$.$ArrayTableDataSource$.prototype.$Init$});
  $oj$$8$$.$ArrayTableDataSource$.prototype.add = function $$oj$$8$$$$ArrayTableDataSource$$$add$($m$$18$$, $options$$229$$) {
    this.$_rowSet$.add($m$$18$$, $options$$229$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.add", {add:$oj$$8$$.$ArrayTableDataSource$.prototype.add});
  $oj$$8$$.$ArrayTableDataSource$.prototype.at = function $$oj$$8$$$$ArrayTableDataSource$$$at$($index$$127$$) {
    return this.$_rowSet$.at($index$$127$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.at", {at:$oj$$8$$.$ArrayTableDataSource$.prototype.at});
  $oj$$8$$.$ArrayTableDataSource$.prototype.fetch = function $$oj$$8$$$$ArrayTableDataSource$$$fetch$($options$$230$$) {
    $options$$230$$ = $options$$230$$ || {};
    null != $options$$230$$.startIndex && $oj$$8$$.$ArrayTableDataSource$.$superclass$.startIndex.call(this, $options$$230$$.startIndex);
    "enabled" == $options$$230$$.startFetch ? (this.$_rowSet$.$isEmpty$() || "undefined" === typeof this.$_rowSet$.size()) && this.$_rowSet$.fetch($options$$230$$) : this.$_rowSet$.fetch($options$$230$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.fetch", {fetch:$oj$$8$$.$ArrayTableDataSource$.prototype.fetch});
  $oj$$8$$.$ArrayTableDataSource$.prototype.get = function $$oj$$8$$$$ArrayTableDataSource$$$get$($id$$15$$) {
    return this.$_rowSet$.get($id$$15$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.get", {get:$oj$$8$$.$ArrayTableDataSource$.prototype.get});
  $oj$$8$$.$ArrayTableDataSource$.prototype.hasMore = function $$oj$$8$$$$ArrayTableDataSource$$$hasMore$() {
    return null != this.$_rowSet$ ? this.$_rowSet$.hasMore() : !1
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.hasMore", {hasMore:$oj$$8$$.$ArrayTableDataSource$.prototype.hasMore});
  $oj$$8$$.$ArrayTableDataSource$.prototype.indexOf = function $$oj$$8$$$$ArrayTableDataSource$$$indexOf$($row$$28$$) {
    return this.$_rowSet$.indexOf($row$$28$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.indexOf", {indexOf:$oj$$8$$.$ArrayTableDataSource$.prototype.indexOf});
  $oj$$8$$.$ArrayTableDataSource$.prototype.remove = function $$oj$$8$$$$ArrayTableDataSource$$$remove$($m$$19$$, $options$$231$$) {
    this.$_rowSet$.remove($m$$19$$, $options$$231$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.remove", {remove:$oj$$8$$.$ArrayTableDataSource$.prototype.remove});
  $oj$$8$$.$ArrayTableDataSource$.prototype.reset = function $$oj$$8$$$$ArrayTableDataSource$$$reset$($data$$61$$, $options$$232$$) {
    this.$_rowSet$.reset($data$$61$$, $options$$232$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.reset", {reset:$oj$$8$$.$ArrayTableDataSource$.prototype.reset});
  $oj$$8$$.$ArrayTableDataSource$.prototype.size = function $$oj$$8$$$$ArrayTableDataSource$$$size$() {
    return this.$_rowSet$.size()
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.size", {size:$oj$$8$$.$ArrayTableDataSource$.prototype.size});
  $oj$$8$$.$ArrayTableDataSource$.prototype.sort = function $$oj$$8$$$$ArrayTableDataSource$$$sort$($comparator$$15$$, $options$$233$$) {
    this.$_rowSet$.comparator = $comparator$$15$$;
    this.$_rowSet$.sort($options$$233$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.sort", {sort:$oj$$8$$.$ArrayTableDataSource$.prototype.sort});
  $oj$$8$$.$ArrayTableDataSource$.prototype.totalSize = function $$oj$$8$$$$ArrayTableDataSource$$$totalSize$() {
    return this.$_rowSet$.totalSize()
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.totalSize", {totalSize:$oj$$8$$.$ArrayTableDataSource$.prototype.totalSize});
  $oj$$8$$.$ArrayTableDataSource$.prototype.$_addRowSetEventListeners$ = function $$oj$$8$$$$ArrayTableDataSource$$$$_addRowSetEventListeners$$() {
    var $self$$43$$ = this;
    this.$_rowSet$.on($oj$$8$$.$RowSet$.$EventType$.ADD, function($event$$69$$) {
      $oj$$8$$.$TableDataSource$.$superclass$.handleEvent.call($self$$43$$, $oj$$8$$.$RowSet$.$EventType$.ADD, $event$$69$$)
    });
    this.$_rowSet$.on($oj$$8$$.$RowSet$.$EventType$.REMOVE, function($event$$70$$) {
      $oj$$8$$.$TableDataSource$.$superclass$.handleEvent.call($self$$43$$, $oj$$8$$.$RowSet$.$EventType$.REMOVE, $event$$70$$)
    });
    this.$_rowSet$.on($oj$$8$$.$RowSet$.$EventType$.RESET, function($event$$71$$) {
      $oj$$8$$.$TableDataSource$.$superclass$.handleEvent.call($self$$43$$, $oj$$8$$.$RowSet$.$EventType$.RESET, $event$$71$$)
    });
    this.$_rowSet$.on($oj$$8$$.$RowSet$.$EventType$.SORT, function($event$$72$$) {
      $oj$$8$$.$TableDataSource$.$superclass$.handleEvent.call($self$$43$$, $oj$$8$$.$RowSet$.$EventType$.SORT, $event$$72$$)
    });
    this.$_rowSet$.on($oj$$8$$.$RowSet$.$EventType$.CHANGE, function($event$$73$$) {
      $oj$$8$$.$TableDataSource$.$superclass$.handleEvent.call($self$$43$$, $oj$$8$$.$RowSet$.$EventType$.CHANGE, $event$$73$$)
    });
    this.$_rowSet$.on($oj$$8$$.$RowSet$.$EventType$.DESTROY, function($event$$74$$) {
      $oj$$8$$.$TableDataSource$.$superclass$.handleEvent.call($self$$43$$, $oj$$8$$.$RowSet$.$EventType$.DESTROY, $event$$74$$)
    });
    this.$_rowSet$.on($oj$$8$$.$RowSet$.$EventType$.SYNC, function($event$$75$$) {
      $oj$$8$$.$TableDataSource$.$superclass$.handleEvent.call($self$$43$$, $oj$$8$$.$RowSet$.$EventType$.SYNC, $event$$75$$)
    });
    this.$_rowSet$.on($oj$$8$$.$RowSet$.$EventType$.ERROR, function($event$$76$$) {
      $oj$$8$$.$TableDataSource$.$superclass$.handleEvent.call($self$$43$$, $oj$$8$$.$RowSet$.$EventType$.ERROR, $event$$76$$)
    })
  };
  (function() {
    $oj$$8$$.$__registerWidget$("oj.ojTable", $$$$8$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3ctable\x3e", widgetEventPrefix:"oj", options:{accessibility:null, columnRenderers:null, containerClassName:null, data:null, footerRenderer:null, horizontalGridVisible:"enabled", rowRenderer:null, selectionMode:null, verticalGridVisible:"enabled", columns:[{className:null, displayIndex:null, field:null, headerClassName:null, headerStyle:null, headerText:null, id:null, showRequired:"disabled", 
    sortable:"disabled", sortProperty:null, style:null}]}, $_BUNDLE_KEY$:{$_MSG_FETCHING_DATA$:"msgFetchingData", $_MSG_NO_DATA$:"msgNoData", $_LABEL_SELECT_COLUMN$:"labelSelectColumn", $_LABEL_SELECT_ROW$:"labelSelectRow", $_LABEL_REQUIRED$:"labelRequired", $_ERR_COLUMN_RENDERER_COLUMN_NOT_FOUND_SUMMARY$:"columnRendererColumnNotFound.summary", $_ERR_COLUMN_RENDERER_COLUMN_NOT_FOUND_DETAIL$:"columnRendererColumnNotFound.detail", $_ERR_COLUMN_RENDERER_OPTION_REQUIRED_SUMMARY$:"columnRendererOptionRequired.summary", 
    $_ERR_COLUMN_RENDERER_OPTION_REQUIRED_DETAIL$:"columnRendererOptionRequired.detail", $_ERR_PREACTIVEROW_ERROR_SUMMARY$:"preActiveRowError.summary", $_ERR_PREACTIVEROW_ERROR_DETAIL$:"preActiveRowError.detail", $_ERR_ACTIVEROW_UNAVAILABLE_INDEX_SUMMARY$:"activeRowUnavailableIndex.summary", $_ERR_ACTIVEROW_UNAVAILABLE_INDEX_DETAIL$:"activeRowUnavailableIndex.detail", $_ERR_REFRESHROW_INVALID_INDEX_SUMMARY$:"refreshRowInvalidRowIndex.summary", $_ERR_REFRESHROW_INVALID_INDEX_DETAIL$:"refreshRowInvalidRowIndex.detail", 
    $_ERR_DATA_INVALID_TYPE_SUMMARY$:"dataInvalidType.summary", $_ERR_DATA_INVALID_TYPE_DETAIL$:"dataInvalidType.detail"}, $_COLUMN_HEADER_ID$:"_headerColumn", $_COLUMN_HEADER_TEXT_ID$:"_headerColumnText", $_COLUMN_HEADER_ASC_ID$:"_headerColumnAsc", $_COLUMN_HEADER_DSC_ID$:"_headerColumnDsc", $_COLUMN_HEADER_ROW_SELECT_ID$:"_hdrColRowSel", $_COLUMN_HEADER_ID_PREFIX$:"_hdrCol", $_MARKER_STYLE_CLASSES$:{$_WIDGET$:"oj-widget", $_ACTIVE$:"oj-active", $_CLICKABLE_ICON$:"oj-clickable-icon", $_DISABLED$:"oj-disabled", 
    $_ENABLED$:"oj-enabled", $_FOCUS$:"oj-focus", $_HOVER$:"oj-hover", $_SELECTED$:"oj-checked"}, $_CSS_CLASSES$:{$_CHECKBOX_ACC_SELECT_COLUMN_CLASS$:"oj-table-checkbox-acc-select-column", $_CHECKBOX_ACC_SELECT_ROW_CLASS$:"oj-table-checkbox-acc-select-row", $_TABLE_CONTAINER_CLASS$:"oj-table-container", $_TABLE_SCROLLER_CLASS$:"oj-table-scroller", $_TABLE_CLASS$:"oj-table", $_TABLE_FOOTER_CLASS$:"oj-table-footer", $_TABLE_HEADER_CLASS$:"oj-table-header", $_TABLE_HEADER_ROW_CLASS$:"oj-table-header-row", 
    $_COLUMN_HEADER_CLASS$:"oj-table-column-header", $_COLUMN_HEADER_SELECTOR_CLASS$:"oj-table-column-header-selector", $_COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS$:"oj-table-column-header-acc-select-column", $_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$:"oj-table-column-header-acc-select-row", $_COLUMN_HEADER_ROW_CLASS$:"oj-table-column-header-row", $_COLUMN_HEADER_SHOW_REQUIRED_CLASS$:"oj-table-column-header-show-required", $_COLUMN_HEADER_TEXT_CLASS$:"oj-table-column-header-text", $_COLUMN_HEADER_ASC_CLASS$:"oj-table-column-header-asc", 
    $_COLUMN_HEADER_DSC_CLASS$:"oj-table-column-header-dsc", $_COLUMN_HEADER_ASC_LINK_CLASS$:"oj-table-column-header-asc-link", $_COLUMN_HEADER_DSC_LINK_CLASS$:"oj-table-column-header-dsc-link", $_COLUMN_HEADER_ASC_ICON_CLASS$:"oj-table-column-header-asc-icon", $_COLUMN_HEADER_DSC_ICON_CLASS$:"oj-table-column-header-dsc-icon", $_TABLE_BODY_CLASS$:"oj-table-body", $_TABLE_DATA_ROW_CLASS$:"oj-table-body-row", $_TABLE_DATA_ROW_SELECTOR_CLASS$:"oj-table-body-row-selector", $_TABLE_DATA_CELL_CLASS$:"oj-table-data-cell", 
    $_TABLE_DATA_CELL_ACC_SELECT_CLASS$:"oj-table-data-cell-acc-select", $_TABLE_DATA_CELL_VGRID_LINES_CLASS$:"oj-table-data-cell-vgrid-lines", $_TABLE_DATA_CELL_HGRID_LINES_CLASS$:"oj-table-data-cell-hgrid-lines", $_TABLE_STATUS_MESSAGE_CLASS$:"oj-table-status-message", $_TABLE_NO_DATA_MESSAGE_CLASS$:"oj-table-no-data-message", $_WIDGET_ICON_CLASS$:"oj-widget-icon", $_HIDDEN_CONTENT_ACC_CLASS$:"oj-helper-hidden-accessible"}, $_OPTION_ENABLED$:"enabled", $_OPTION_DISABLED$:"disabled", $_OPTION_SELECTION_MODES$:{$_SINGLE$:"single", 
    $_MULTIPLE$:"multiple"}, $_COLUMN_SORT_ORDER$:{$_ASCENDING$:"ascending", $_DESCENDING$:"descending"}, $_KEYBOARD_CODES$:{$_KEYBOARD_CODE_CTRL$:17, $_KEYBOARD_CODE_SHIFT$:16, $_KEYBOARD_CODE_SPACEBAR$:32, $_KEYBOARD_CODE_ENTER$:13, $_KEYBOARD_CODE_UP$:38, $_KEYBOARD_CODE_DOWN$:40, $_KEYBOARD_CODE_LEFT$:37, $_KEYBOARD_CODE_RIGHT$:39, $_KEYBOARD_CODE_HOME$:36, $_KEYBOARD_CODE_END$:35, $_KEYBOARD_CODE_TAB$:9, $_KEYBOARD_CODE_ESC$:27, $_KEYBOARD_MODIFIER_SHIFT$:"shiftKey"}, activeRow:function($errSummary$$3_index$$128$$) {
      if(!this.$_getData$()) {
        return-1
      }
      if(null != $errSummary$$3_index$$128$$) {
        if(this.$_activeRowIndex$ != $errSummary$$3_index$$128$$) {
          var $errDetail$$3_oldIndex$$ = this.$_activeRowIndex$;
          try {
            this._trigger("preactiverow", null, {newRowIndex:$errSummary$$3_index$$128$$, oldRowIndex:$errDetail$$3_oldIndex$$})
          }catch($err$$5$$) {
            throw $errSummary$$3_index$$128$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_PREACTIVEROW_ERROR_SUMMARY$), $errDetail$$3_oldIndex$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_PREACTIVEROW_ERROR_DETAIL$, $err$$5$$.toString()), new $oj$$8$$.$Message$($errSummary$$3_index$$128$$, $errDetail$$3_oldIndex$$, $oj$$8$$.$Message$.$SEVERITY_LEVEL$.ERROR);
          }
          this.$_activeRowIndex$ = $errSummary$$3_index$$128$$;
          this._trigger("activerow", null, {newRowIndex:$errSummary$$3_index$$128$$, oldRowIndex:$errDetail$$3_oldIndex$$});
          this.$_setRowFocus$($errSummary$$3_index$$128$$, !0, null)
        }
        return $errSummary$$3_index$$128$$
      }
      return null != this.$_activeRowIndex$ ? this.$_activeRowIndex$ : -1
    }, columnMetaData:function($columnId$$3$$) {
      var $columns$$2$$ = this.$_getColumnDefs$();
      if(null == $columnId$$3$$) {
        return $columns$$2$$
      }
      var $i$$143$$;
      for($i$$143$$ = 0;$i$$143$$ < $columns$$2$$.length;$i$$143$$++) {
        if($columns$$2$$[$i$$143$$].id == $columnId$$3$$) {
          return $columns$$2$$[$i$$143$$]
        }
      }
      return null
    }, refresh:function() {
      this._super();
      this.$_clearCachedTableDimensions$();
      this.$_refresh$()
    }, refreshRow:function($errDetail$$4_rowIdx$$2$$) {
      var $data$$63_errSummary$$4_row$$29$$ = this.$_getData$();
      if(!$data$$63_errSummary$$4_row$$29$$) {
        return!1
      }
      if(isNaN($errDetail$$4_rowIdx$$2$$) || 0 > $errDetail$$4_rowIdx$$2$$ || $errDetail$$4_rowIdx$$2$$ > $data$$63_errSummary$$4_row$$29$$.size() - 1) {
        throw $data$$63_errSummary$$4_row$$29$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_REFRESHROW_INVALID_INDEX_SUMMARY$), $errDetail$$4_rowIdx$$2$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_REFRESHROW_INVALID_INDEX_DETAIL$, $errDetail$$4_rowIdx$$2$$.toString()), new $oj$$8$$.$Message$($data$$63_errSummary$$4_row$$29$$, $errDetail$$4_rowIdx$$2$$, $oj$$8$$.$Message$.$SEVERITY_LEVEL$.ERROR);
      }
      $data$$63_errSummary$$4_row$$29$$ = $data$$63_errSummary$$4_row$$29$$.at($errDetail$$4_rowIdx$$2$$);
      if(null == $data$$63_errSummary$$4_row$$29$$) {
        return!1
      }
      try {
        this.$_refreshTableBodyRow$($errDetail$$4_rowIdx$$2$$, $data$$63_errSummary$$4_row$$29$$)
      }catch($e$$42$$) {
        throw $e$$42$$;
      }
      return!0
    }, selection:function($selection_selectionIdxs$$) {
      if(null != $selection_selectionIdxs$$) {
        this.$_clearSelectedRows$();
        var $i$$144_selectedRowIdxs$$, $j$$21_rangeArray_startRowIdx$$, $endColumnIdx_rangeObj_selectedColumnIdxs$$, $endRowIdx_rowSelection$$, $rangeCount_startColumnIdx$$;
        for($i$$144_selectedRowIdxs$$ = 0;$i$$144_selectedRowIdxs$$ < $selection_selectionIdxs$$.length;$i$$144_selectedRowIdxs$$++) {
          $endColumnIdx_rangeObj_selectedColumnIdxs$$ = $selection_selectionIdxs$$[$i$$144_selectedRowIdxs$$];
          if(null == $endColumnIdx_rangeObj_selectedColumnIdxs$$.start || null == $endColumnIdx_rangeObj_selectedColumnIdxs$$.end) {
            return console.log("Error: Invalid range object in selection. Both start and end objects must be specified"), null
          }
          $j$$21_rangeArray_startRowIdx$$ = $endColumnIdx_rangeObj_selectedColumnIdxs$$.start.row;
          $endRowIdx_rowSelection$$ = $endColumnIdx_rangeObj_selectedColumnIdxs$$.end.row;
          $rangeCount_startColumnIdx$$ = $endColumnIdx_rangeObj_selectedColumnIdxs$$.start.column;
          $endColumnIdx_rangeObj_selectedColumnIdxs$$ = $endColumnIdx_rangeObj_selectedColumnIdxs$$.end.column;
          if(null != $j$$21_rangeArray_startRowIdx$$ && null != $endRowIdx_rowSelection$$ && null != $rangeCount_startColumnIdx$$ && null != $endColumnIdx_rangeObj_selectedColumnIdxs$$) {
            return console.log("Error: Invalid range object in selection - Can only support row or column selection. Not both"), null
          }
          if(null != $j$$21_rangeArray_startRowIdx$$ && null != $endRowIdx_rowSelection$$) {
            for(;$j$$21_rangeArray_startRowIdx$$ <= $endRowIdx_rowSelection$$;$j$$21_rangeArray_startRowIdx$$++) {
              try {
                this.$_setRowSelection$($j$$21_rangeArray_startRowIdx$$, !0, null)
              }catch($e$$43$$) {
                console.log("Error: " + $e$$43$$)
              }
            }
          }else {
            if(null != $rangeCount_startColumnIdx$$ && null != $endColumnIdx_rangeObj_selectedColumnIdxs$$) {
              for($j$$21_rangeArray_startRowIdx$$ = $rangeCount_startColumnIdx$$;$j$$21_rangeArray_startRowIdx$$ <= $endColumnIdx_rangeObj_selectedColumnIdxs$$;$j$$21_rangeArray_startRowIdx$$++) {
                try {
                  this.$_setHeaderColumnSelection$($j$$21_rangeArray_startRowIdx$$, !0, null)
                }catch($e$$44$$) {
                  console.log("Error: " + $e$$44$$)
                }
              }
            }else {
              return console.log("Error: Invalid range object in selection - \n                                  start row: " + $j$$21_rangeArray_startRowIdx$$ + "\n                                  end row: " + $endRowIdx_rowSelection$$ + "\n                                  start column: " + $rangeCount_startColumnIdx$$ + "\n                                  end column: " + $endColumnIdx_rangeObj_selectedColumnIdxs$$), null
            }
          }
        }
        return this.selection()
      }
      $i$$144_selectedRowIdxs$$ = this.$_getSelectedRowIdxs$();
      $endColumnIdx_rangeObj_selectedColumnIdxs$$ = this.$_getSelectedHeaderColumnIdxs$();
      $selection_selectionIdxs$$ = null;
      $endRowIdx_rowSelection$$ = !0;
      if(null != $i$$144_selectedRowIdxs$$ && 0 < $i$$144_selectedRowIdxs$$.length) {
        $selection_selectionIdxs$$ = $i$$144_selectedRowIdxs$$
      }else {
        if(null != $endColumnIdx_rangeObj_selectedColumnIdxs$$ && 0 < $endColumnIdx_rangeObj_selectedColumnIdxs$$.length) {
          $selection_selectionIdxs$$ = $endColumnIdx_rangeObj_selectedColumnIdxs$$, $endRowIdx_rowSelection$$ = !1
        }else {
          return null
        }
      }
      $j$$21_rangeArray_startRowIdx$$ = [];
      $rangeCount_startColumnIdx$$ = 0;
      var $previousIdx$$ = null, $selectionIdx$$;
      for($i$$144_selectedRowIdxs$$ = 0;$i$$144_selectedRowIdxs$$ < $selection_selectionIdxs$$.length;$i$$144_selectedRowIdxs$$++) {
        $selectionIdx$$ = $selection_selectionIdxs$$[$i$$144_selectedRowIdxs$$], 0 == $i$$144_selectedRowIdxs$$ ? ($endColumnIdx_rangeObj_selectedColumnIdxs$$ = [], $endColumnIdx_rangeObj_selectedColumnIdxs$$.start = [], $endColumnIdx_rangeObj_selectedColumnIdxs$$.end = [], $endRowIdx_rowSelection$$ ? ($endColumnIdx_rangeObj_selectedColumnIdxs$$.start.row = $selectionIdx$$, $endColumnIdx_rangeObj_selectedColumnIdxs$$.end.row = $selectionIdx$$) : ($endColumnIdx_rangeObj_selectedColumnIdxs$$.start.column = 
        $selectionIdx$$, $endColumnIdx_rangeObj_selectedColumnIdxs$$.end.column = $selectionIdx$$), $j$$21_rangeArray_startRowIdx$$[0] = $endColumnIdx_rangeObj_selectedColumnIdxs$$) : ($endColumnIdx_rangeObj_selectedColumnIdxs$$ = $j$$21_rangeArray_startRowIdx$$[$rangeCount_startColumnIdx$$], $endRowIdx_rowSelection$$ ? $endColumnIdx_rangeObj_selectedColumnIdxs$$.end.row = $selectionIdx$$ : $endColumnIdx_rangeObj_selectedColumnIdxs$$.end.column = $selectionIdx$$, $selectionIdx$$ != $previousIdx$$ + 
        1 && ($endRowIdx_rowSelection$$ ? ($endColumnIdx_rangeObj_selectedColumnIdxs$$.end.row = $previousIdx$$, $endColumnIdx_rangeObj_selectedColumnIdxs$$ = [], $endColumnIdx_rangeObj_selectedColumnIdxs$$.start = [], $endColumnIdx_rangeObj_selectedColumnIdxs$$.end = [], $endColumnIdx_rangeObj_selectedColumnIdxs$$.start.row = $selectionIdx$$, $endColumnIdx_rangeObj_selectedColumnIdxs$$.end.row = $selectionIdx$$) : ($endColumnIdx_rangeObj_selectedColumnIdxs$$.end.column = $previousIdx$$, $endColumnIdx_rangeObj_selectedColumnIdxs$$ = 
        [], $endColumnIdx_rangeObj_selectedColumnIdxs$$.start = [], $endColumnIdx_rangeObj_selectedColumnIdxs$$.end = [], $endColumnIdx_rangeObj_selectedColumnIdxs$$.start.column = $selectionIdx$$, $endColumnIdx_rangeObj_selectedColumnIdxs$$.end.column = $selectionIdx$$), $rangeCount_startColumnIdx$$++, $j$$21_rangeArray_startRowIdx$$[$rangeCount_startColumnIdx$$] = $endColumnIdx_rangeObj_selectedColumnIdxs$$)), $previousIdx$$ = $selectionIdx$$
      }
      return $j$$21_rangeArray_startRowIdx$$
    }, scrollLeft:function($value$$150$$) {
      if(null != $value$$150$$) {
        if(isNaN($value$$150$$) || 0 > $value$$150$$) {
          return console.log("Error: Invalid scrollLeft value: " + $value$$150$$), null
        }
        this.$_getScroller$().scrollLeft($value$$150$$)
      }
      return this.$_getScroller$().scrollLeft()
    }, scrollTop:function($value$$151$$) {
      if(null != $value$$151$$) {
        if(isNaN($value$$151$$) || 0 > $value$$151$$) {
          return console.log("Error: Invalid scrollTop value: " + $value$$151$$), null
        }
        this.$_getScroller$().scrollTop($value$$151$$)
      }
      return this.$_getScroller$().scrollTop()
    }, _init:function() {
      this._super();
      this.$_clearCachedMetadata$();
      this.$_clearCachedDataMetadata$();
      this.$_refresh$();
      this.$_registerDomEventListeners$();
      this.$_registerDataSourceEventListeners$()
    }, _create:function() {
      this._super();
      this.$_registerCustomEvents$();
      this.$_draw$();
      this._on(this.$_events$)
    }, _destroy:function() {
      var $data$$64_tableContainer$$ = this.$_getData$();
      if(null != this.$_dataSourceEventHandlers$ && null != $data$$64_tableContainer$$) {
        var $i$$145$$;
        for($i$$145$$ = 0;$i$$145$$ < this.$_dataSourceEventHandlers$.length;$i$$145$$++) {
          $data$$64_tableContainer$$.off(this.$_dataSourceEventHandlers$[$i$$145$$].$eventType$, this.$_dataSourceEventHandlers$[$i$$145$$].$eventHandler$)
        }
      }
      this.$_getTableBody$().removeAttr($oj$$8$$.Components.$_OJ_CONTAINER_ATTR$);
      this.element.children().remove("." + this.$_CSS_CLASSES$.$_TABLE_HEADER_CLASS$);
      this.element.children().remove("." + this.$_CSS_CLASSES$.$_TABLE_BODY_CLASS$);
      this.element.children().remove("." + this.$_CSS_CLASSES$.$_TABLE_STATUS_MESSAGE_CLASS$);
      $data$$64_tableContainer$$ = this.$_getTableContainer$();
      null != $data$$64_tableContainer$$ && ($data$$64_tableContainer$$[0].parentNode.appendChild(this.element), $data$$64_tableContainer$$[0].parentNode.removeChild($data$$64_tableContainer$$[0]));
      this.element.removeClass(this.$_CSS_CLASSES$.$_TABLE_CLASS$)
    }, $_draw$:function() {
      this.$_tableHeight$ = this.element.height();
      this.$_tableWidth$ = this.element.width();
      this.$_useFallbackScrolling$ = this.$_isIE$() && 10 > this.$_isIE$() ? !0 : !1;
      this.element.addClass(this.$_CSS_CLASSES$.$_TABLE_CLASS$);
      this.element.attr("tabindex", "0");
      this._focusable(this.element);
      this._hoverable(this.element);
      this.$_createTableContainer$();
      this.$_createContextMenu$();
      this.$_useFallbackScrolling$ && this.$_createTableDivScroller$();
      this.$_isTableHeaderless$() || this.$_createTableHeader$();
      this.$_isTableFooterless$() || this.$_createTableFooter$();
      this.$_createTableBody$();
      this.$_createTableNoDataMessage$();
      this.$_createTableStatusMessage$();
      this.$_refreshTableHeader$();
      this.$_refreshTableFooter$();
      this.$_refreshTableDimensions$();
      this.options.disabled && this.disable()
    }, $_events$:{blur:function($event$$77$$) {
      var $table$$ = this.$_getTable$();
      0 < $table$$.has($event$$77$$.relatedTarget).length || null != $event$$77$$.originalEvent && $event$$77$$.originalEvent.explicitOriginalTarget == $table$$[0] || (this.$_clearKeyboardKeys$(), this.$_setTableNavigationMode$(!1))
    }, "change .oj-table-checkbox-acc-select-column":function($event$$78$$) {
      var $columnIdx$$ = this.$_getElementColumnIdx$($$$$8$$($event$$78$$.currentTarget)), $selected$$4$$ = $$$$8$$($event$$78$$.currentTarget).is(":checked");
      $selected$$4$$ && this.$_setHeaderColumnFocus$($columnIdx$$, !0, null);
      this.$_setHeaderColumnSelection$($columnIdx$$, $selected$$4$$, $event$$78$$.currentTarget, $event$$78$$)
    }, "change .oj-table-checkbox-acc-select-row":function($event$$79$$) {
      var $rowIdx$$3$$ = this.$_getElementRowIdx$($$$$8$$($event$$79$$.currentTarget)), $selected$$5$$ = $$$$8$$($event$$79$$.currentTarget).is(":checked");
      $selected$$5$$ && this.$_setRowFocus$($rowIdx$$3$$, !0, null);
      this.$_setRowSelection$($rowIdx$$3$$, $selected$$5$$, $event$$79$$.currentTarget, $event$$79$$)
    }, keydown:function($event$$80$$) {
      if(!(0 < this.$_getTableFooter$().has($event$$80$$.target).length) && (this.$_addKeyboardKey$($event$$80$$.keyCode), 1 == this.$_getKeyboardKeys$().length || 2 == this.$_getKeyboardKeys$().length)) {
        if(this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_SPACEBAR$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_HOME$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_END$)) {
          $event$$80$$.preventDefault(), $event$$80$$.stopPropagation()
        }
        this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) ? this.$_handleKeydownUpDown$($event$$80$$) : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_LEFT$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_RIGHT$) ? this.$_handleKeydownLeftRight$($event$$80$$) : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_TAB$) && this.$_handleKeydownTab$($event$$80$$)
      }
    }, keyup:function($event$$81$$) {
      if(!(0 < this.$_getTableFooter$().has($event$$81$$.target).length)) {
        if(1 == this.$_getKeyboardKeys$().length) {
          var $keyboardCode1$$ = this.$_getKeyboardKeys$()[0];
          $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_SPACEBAR$ ? this.$_handleKeyupSpacebar$($event$$81$$) : $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_ENTER$ ? this.$_handleKeyupEnter$($event$$81$$) : $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_HOME$ ? this.$_handleKeyupHome$($event$$81$$) : $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_END$ ? this.$_handleKeyupEnd$($event$$81$$) : $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_ESC$ && 
          this.$_handleKeyupEsc$($event$$81$$)
        }
        this.$_removeKeyboardKey$($event$$81$$.keyCode)
      }
    }, "mouseenter .oj-table-column-header":function($columnIdx$$1_event$$82$$) {
      $columnIdx$$1_event$$82$$ = this.$_getElementColumnIdx$($$$$8$$($columnIdx$$1_event$$82$$.currentTarget));
      this.$_showTableHeaderColumnSortLink$($columnIdx$$1_event$$82$$, !0);
      this.$_showTableHeaderColumnSortLink$($columnIdx$$1_event$$82$$, !1)
    }, "mouseleave .oj-table-column-header":function($columnIdx$$2_event$$83$$) {
      $columnIdx$$2_event$$83$$ = this.$_getElementColumnIdx$($$$$8$$($columnIdx$$2_event$$83$$.currentTarget));
      this.$_hideTableHeaderColumnSortLink$($columnIdx$$2_event$$83$$, !0);
      this.$_hideTableHeaderColumnSortLink$($columnIdx$$2_event$$83$$, !1)
    }, "mouseenter .oj-table-data-cell":function($event$$84_rowIdx$$4$$) {
      $event$$84_rowIdx$$4$$ = this.$_getElementRowIdx$($$$$8$$($event$$84_rowIdx$$4$$.currentTarget));
      this.$_updateRowCellsClass$($event$$84_rowIdx$$4$$, {hover:!0})
    }, "mouseleave .oj-table-data-cell":function($event$$85_rowIdx$$5$$) {
      $event$$85_rowIdx$$5$$ = this.$_getElementRowIdx$($$$$8$$($event$$85_rowIdx$$5$$.currentTarget));
      this.$_updateRowCellsClass$($event$$85_rowIdx$$5$$, {hover:!1})
    }, "click .oj-table-column-header-asc-link":function($event$$86$$) {
      this.$_checkFocus$();
      var $columnIdx$$3$$ = this.$_getElementColumnIdx$($$$$8$$($event$$86$$.target));
      this.$_handleSortTableHeaderColumn$($columnIdx$$3$$, !0);
      $event$$86$$.preventDefault();
      $event$$86$$.stopPropagation()
    }, "click .oj-table-column-header-dsc-link":function($event$$87$$) {
      this.$_checkFocus$();
      var $columnIdx$$4$$ = this.$_getElementColumnIdx$($$$$8$$($event$$87$$.target));
      this.$_handleSortTableHeaderColumn$($columnIdx$$4$$, !1);
      $event$$87$$.preventDefault();
      $event$$87$$.stopPropagation()
    }, "click .oj-table-data-cell":function($event$$88$$) {
      this.$_checkFocus$();
      var $rowIdx$$6$$ = this.$_getElementRowIdx$($$$$8$$($event$$88$$.currentTarget));
      this.$_setRowFocus$($rowIdx$$6$$, !0, $event$$88$$.currentTarget);
      if(1 == this.$_getKeyboardKeys$().length) {
        if(this.$_getKeyboardKeys$()[0] == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_SHIFT$) {
          var $lastSelectedRowIdx$$ = this.$_getLastRowSelection$();
          if(null != $lastSelectedRowIdx$$) {
            if($rowIdx$$6$$ < $lastSelectedRowIdx$$) {
              var $i$$146$$;
              for($i$$146$$ = $rowIdx$$6$$;$i$$146$$ <= $lastSelectedRowIdx$$;$i$$146$$++) {
                this.$_setRowSelection$($i$$146$$, !0, $event$$88$$.currentTarget, $event$$88$$)
              }
            }else {
              for($i$$146$$ = $lastSelectedRowIdx$$;$i$$146$$ <= $rowIdx$$6$$;$i$$146$$++) {
                this.$_setRowSelection$($i$$146$$, !0, $event$$88$$.currentTarget, $event$$88$$)
              }
            }
          }
        }else {
          this.$_getKeyboardKeys$()[0] == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_CTRL$ && this.$_setRowSelection$($rowIdx$$6$$, !this.$_getRowSelection$($rowIdx$$6$$), $event$$88$$.currentTarget, $event$$88$$)
        }
      }else {
        0 == this.$_getKeyboardKeys$().length && this.$_setRowSelection$($rowIdx$$6$$, !this.$_getRowSelection$($rowIdx$$6$$), $event$$88$$.currentTarget, $event$$88$$)
      }
    }, "click .oj-table-column-header":function($event$$89$$) {
      this.$_checkFocus$();
      var $columnIdx$$5$$ = this.$_getElementColumnIdx$($$$$8$$($event$$89$$.currentTarget));
      this.$_setHeaderColumnFocus$($columnIdx$$5$$, !0, $event$$89$$.currentTarget);
      if(1 == this.$_getKeyboardKeys$().length) {
        if(this.$_getKeyboardKeys$()[0] == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_SHIFT$) {
          var $lastSelectedColumnIdx$$ = this.$_getLastHeaderColumnSelection$();
          if(null != $lastSelectedColumnIdx$$) {
            if($columnIdx$$5$$ < $lastSelectedColumnIdx$$) {
              var $i$$147$$;
              for($i$$147$$ = $columnIdx$$5$$;$i$$147$$ <= $lastSelectedColumnIdx$$;$i$$147$$++) {
                this.$_setHeaderColumnSelection$($i$$147$$, !0, $event$$89$$.currentTarget, $event$$89$$)
              }
            }else {
              for($i$$147$$ = $lastSelectedColumnIdx$$;$i$$147$$ <= $columnIdx$$5$$;$i$$147$$++) {
                this.$_setHeaderColumnSelection$($i$$147$$, !0, $event$$89$$.currentTarget, $event$$89$$)
              }
            }
          }
        }else {
          this.$_getKeyboardKeys$()[0] == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_CTRL$ && this.$_setHeaderColumnSelection$($columnIdx$$5$$, !this.$_getHeaderColumnSelection$($columnIdx$$5$$), $event$$89$$.currentTarget, $event$$89$$)
        }
      }else {
        0 == this.$_getKeyboardKeys$().length && this.$_setHeaderColumnSelection$($columnIdx$$5$$, !this.$_getHeaderColumnSelection$($columnIdx$$5$$), $event$$89$$.currentTarget, $event$$89$$)
      }
      $event$$89$$.preventDefault()
    }}, $_refresh$:function() {
      var $self$$44$$ = this;
      setTimeout(function() {
        $self$$44$$.$_refreshAll$()
      }, 0)
    }, _setOption:function($key$$61$$, $value$$152$$) {
      this._super($key$$61$$, $value$$152$$);
      this.$_refresh$()
    }, $_addKeyboardKey$:function($keyCode$$) {
      var $foundCode_keyboardKeys$$ = !1, $found$$3_prop$$72$$;
      for($found$$3_prop$$72$$ in this.$_KEYBOARD_CODES$) {
        this.$_KEYBOARD_CODES$.hasOwnProperty($found$$3_prop$$72$$) && this.$_KEYBOARD_CODES$[$found$$3_prop$$72$$] == $keyCode$$ && ($foundCode_keyboardKeys$$ = !0)
      }
      if($foundCode_keyboardKeys$$) {
        $foundCode_keyboardKeys$$ = this.$_getKeyboardKeys$();
        $found$$3_prop$$72$$ = !1;
        var $i$$148$$;
        for($i$$148$$ = 0;$i$$148$$ < $foundCode_keyboardKeys$$.length;$i$$148$$++) {
          if($foundCode_keyboardKeys$$[$i$$148$$] == $keyCode$$) {
            $found$$3_prop$$72$$ = !0;
            break
          }
        }
        $found$$3_prop$$72$$ || $foundCode_keyboardKeys$$.push($keyCode$$)
      }
    }, $_checkColumnRendererMetadata$:function($type$$71$$) {
      var $columns$$3$$ = this.$_getColumnDefs$();
      if($columns$$3$$ && 0 < $columns$$3$$.length) {
        var $columnRenderers$$2$$ = this.options.columnRenderers;
        if($columnRenderers$$2$$) {
          var $i$$149$$, $errSummary$$5_j$$22$$, $column$$7$$, $errDetail$$5_foundMatchingColumn$$;
          for($i$$149$$ = 0;$i$$149$$ < $columnRenderers$$2$$.length;$i$$149$$++) {
            if(null == $columnRenderers$$2$$[$i$$149$$].type && ($errSummary$$5_j$$22$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_COLUMN_RENDERER_OPTION_REQUIRED_SUMMARY$, "type"), $errDetail$$5_foundMatchingColumn$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_COLUMN_RENDERER_OPTION_REQUIRED_DETAIL$), console.log($errSummary$$5_j$$22$$ + $errDetail$$5_foundMatchingColumn$$)), null == $columnRenderers$$2$$[$i$$149$$].renderer && ($errSummary$$5_j$$22$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_COLUMN_RENDERER_OPTION_REQUIRED_SUMMARY$, 
            "renderer"), $errDetail$$5_foundMatchingColumn$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_COLUMN_RENDERER_OPTION_REQUIRED_DETAIL$), console.log($errSummary$$5_j$$22$$ + $errDetail$$5_foundMatchingColumn$$)), $columnRenderers$$2$$[$i$$149$$].type == $type$$71$$) {
              $errDetail$$5_foundMatchingColumn$$ = !1;
              for($errSummary$$5_j$$22$$ = 0;$errSummary$$5_j$$22$$ < $columns$$3$$.length;$errSummary$$5_j$$22$$++) {
                if($column$$7$$ = $columns$$3$$[$errSummary$$5_j$$22$$], $columnRenderers$$2$$[$i$$149$$].columnId == $column$$7$$.id) {
                  $errDetail$$5_foundMatchingColumn$$ = !0;
                  break
                }
              }
              $errDetail$$5_foundMatchingColumn$$ || ($errSummary$$5_j$$22$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_COLUMN_RENDERER_COLUMN_NOT_FOUND_SUMMARY$, $column$$7$$.id), $errDetail$$5_foundMatchingColumn$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_COLUMN_RENDERER_COLUMN_NOT_FOUND_DETAIL$), console.log($errSummary$$5_j$$22$$ + $errDetail$$5_foundMatchingColumn$$))
            }
          }
        }
      }
    }, $_checkFocus$:function() {
      this.$_isFocused$() || this.$_getTable$().focus()
    }, $_clearCachedDomRowData$:function() {
      this.$_cachedDomTableBodyRows$ = null
    }, $_clearCachedMetadata$:function() {
      this.$_columnDefArray$ = null;
      this.$_setTableNavigationMode$(!1)
    }, $_clearCachedDataMetadata$:function() {
      this.$_data$ = null
    }, $_clearCachedTableDimensions$:function() {
      this.$_tableWidth$ = this.$_tableHeight$ = null
    }, $_clearKeyboardKeys$:function() {
      this.$_keyboardKeys$ = []
    }, $_clearFocusedHeaderColumn$:function() {
      var $focusedHeaderColumnIdx$$ = this.$_getFocusedHeaderColumnIdx$();
      null != $focusedHeaderColumnIdx$$ && this.$_setHeaderColumnFocus$($focusedHeaderColumnIdx$$, !1, null)
    }, $_clearFocusedRow$:function() {
      var $focusedRowIdx$$ = this.$_getFocusedRowIdx$();
      null != $focusedRowIdx$$ && this.$_setRowFocus$($focusedRowIdx$$, !1, null)
    }, $_clearSelectedHeaderColumns$:function() {
      var $selectedHeaderColumnIdxs$$ = this.$_getSelectedHeaderColumnIdxs$(), $i$$150$$;
      for($i$$150$$ = 0;$i$$150$$ < $selectedHeaderColumnIdxs$$.length;$i$$150$$++) {
        this.$_setHeaderColumnSelection$($selectedHeaderColumnIdxs$$[$i$$150$$], !1, null)
      }
    }, $_clearSelectedRows$:function() {
      var $selectedRowIdxs$$1$$ = this.$_getSelectedRowIdxs$(), $i$$151$$;
      for($i$$151$$ = 0;$i$$151$$ < $selectedRowIdxs$$1$$.length;$i$$151$$++) {
        this.$_setRowSelection$($selectedRowIdxs$$1$$[$i$$151$$], !1, null)
      }
    }, $_clearSortedHeaderColumn$:function() {
      var $sortedTableHeaderColumnIdx$$ = this.$_getSortedTableHeaderColumnIdx$();
      if(null != $sortedTableHeaderColumnIdx$$) {
        var $sortedTableHeaderColumn$$ = this.$_getTableHeaderColumn$($sortedTableHeaderColumnIdx$$), $sorted$$ = $sortedTableHeaderColumn$$.data("sorted");
        $sortedTableHeaderColumn$$.data("sorted", null);
        $sorted$$ == this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ ? this.$_hideTableHeaderColumnSortLink$($sortedTableHeaderColumnIdx$$, !0) : this.$_hideTableHeaderColumnSortLink$($sortedTableHeaderColumnIdx$$, !1)
      }
    }, $_getColumnDefs$:function() {
      this.$_columnDefArray$ || (this.$_columnDefArray$ = this.$_getColumnMetadata$());
      return this.$_columnDefArray$
    }, $_getColumnMetadata$:function() {
      var $columns$$4$$ = this.options.columns;
      if(0 == $columns$$4$$.length || 1 == $columns$$4$$.length && null == $columns$$4$$[0].id && null == $columns$$4$$[0].headerText && null == $columns$$4$$[0].field) {
        return[]
      }
      var $columnsIndArray$$ = [], $i$$152$$, $j$$23$$;
      for($i$$152$$ = 0;$i$$152$$ < $columns$$4$$.length;$i$$152$$++) {
        null != $columns$$4$$[$i$$152$$].displayIndex && $columnsIndArray$$.push($columns$$4$$[$i$$152$$].displayIndex)
      }
      $columnsIndArray$$.sort(function($a$$54$$, $b$$40$$) {
        return $a$$54$$ - $b$$40$$
      });
      var $columnsSortedArray$$ = [];
      for($i$$152$$ = 0;$i$$152$$ < $columnsIndArray$$.length;$i$$152$$++) {
        for($j$$23$$ = 0;$j$$23$$ < $columns$$4$$.length;$j$$23$$++) {
          $columns$$4$$[$j$$23$$].displayIndex == $columnsIndArray$$[$i$$152$$] && $columnsSortedArray$$.push($columns$$4$$[$j$$23$$])
        }
      }
      for($i$$152$$ = 0;$i$$152$$ < $columns$$4$$.length;$i$$152$$++) {
        null == $columns$$4$$[$i$$152$$].displayIndex && $columnsSortedArray$$.push($columns$$4$$[$i$$152$$])
      }
      for($i$$152$$ = 0;$i$$152$$ < $columns$$4$$.length;$i$$152$$++) {
        null == $columnsSortedArray$$[$i$$152$$].id && ($columnsSortedArray$$[$i$$152$$].id = this.$_COLUMN_HEADER_ID_PREFIX$ + $i$$152$$)
      }
      return $columnsSortedArray$$
    }, $_getColumnIdxsForElementsWithStyleClass$:function($elements$$1_styleClass$$) {
      $elements$$1_styleClass$$ = this.$_getTable$().find($elements$$1_styleClass$$);
      var $columnIdxs$$ = [];
      if($elements$$1_styleClass$$ && 0 < $elements$$1_styleClass$$.length) {
        var $i$$153$$, $j$$24$$, $alreadyAdded$$, $columnIdx$$6$$;
        for($i$$153$$ = 0;$i$$153$$ < $elements$$1_styleClass$$.length;$i$$153$$++) {
          $columnIdx$$6$$ = this.$_getElementColumnIdx$($$$$8$$($elements$$1_styleClass$$.get($i$$153$$)));
          $alreadyAdded$$ = !1;
          for($j$$24$$ = 0;$j$$24$$ < $columnIdxs$$.length;$j$$24$$++) {
            $columnIdxs$$[$j$$24$$] == $columnIdx$$6$$ && ($alreadyAdded$$ = !0)
          }
          $alreadyAdded$$ || $columnIdxs$$.push($columnIdx$$6$$)
        }
      }
      return $columnIdxs$$
    }, $_getColumnRenderer$:function($columnIdx$$7$$, $type$$72$$) {
      var $column$$8$$ = this.$_getColumnDefs$()[$columnIdx$$7$$], $columnRenderers$$3$$ = this.options.columnRenderers;
      if($columnRenderers$$3$$) {
        this.$_checkColumnRendererMetadata$("cell");
        var $i$$154$$;
        for($i$$154$$ = 0;$i$$154$$ < $columnRenderers$$3$$.length;$i$$154$$++) {
          if($columnRenderers$$3$$[$i$$154$$].columnId == $column$$8$$.id && $columnRenderers$$3$$[$i$$154$$].type == $type$$72$$) {
            return $columnRenderers$$3$$[$i$$154$$].renderer
          }
        }
      }
      return null
    }, $_getData$:function() {
      if(!this.$_data$ && null != this.options.data) {
        var $data$$65_errSummary$$6$$ = this.options.data;
        if($data$$65_errSummary$$6$$ instanceof $oj$$8$$.$TableDataSource$ || $data$$65_errSummary$$6$$ instanceof $oj$$8$$.$PagingTableDataSource$) {
          this.$_data$ = $data$$65_errSummary$$6$$
        }else {
          var $data$$65_errSummary$$6$$ = $oj$$8$$.$Translations$.$getTranslatedString$("oj-table.dataInvalidType.summary"), $errDetail$$6$$ = $oj$$8$$.$Translations$.$getTranslatedString$("oj-table.dataInvalidType.detail");
          throw new $oj$$8$$.$Message$($data$$65_errSummary$$6$$, $errDetail$$6$$, $oj$$8$$.$Message$.$SEVERITY_LEVEL$.ERROR);
        }
        this.$_dataMetadata$ = this.options.data
      }
      return this.$_data$
    }, $_getElementColumnIdx$:function($element$$32$$) {
      return null != $$$$8$$($element$$32$$).attr("data-oj-columnIdx") ? parseInt($$$$8$$($element$$32$$).attr("data-oj-columnIdx"), 10) : null
    }, $_getElementRowIdx$:function($element$$33$$) {
      return null != $$$$8$$($element$$33$$).attr("data-oj-rowIdx") ? parseInt($$$$8$$($element$$33$$).attr("data-oj-rowIdx"), 10) : null
    }, $_getElementRowKey$:function($element$$34_rowKey$$18$$) {
      $element$$34_rowKey$$18$$ = $$$$8$$($element$$34_rowKey$$18$$).attr("data-oj-rowKey");
      return null != $element$$34_rowKey$$18$$ ? $element$$34_rowKey$$18$$.toString() : null
    }, $_getFirstAncestor$:function($element$$35$$, $className$$8$$) {
      var $parents$$2$$;
      if($element$$35$$.hasClass($className$$8$$)) {
        return $element$$35$$
      }
      $parents$$2$$ = $element$$35$$.parents("." + $className$$8$$);
      return 0 != $parents$$2$$.length ? $parents$$2$$.eq(0) : null
    }, $_getFocusedHeaderColumnIdx$:function() {
      return this.$_getColumnIdxsForElementsWithStyleClass$("." + this.$_CSS_CLASSES$.$_COLUMN_HEADER_CLASS$ + "." + this.$_MARKER_STYLE_CLASSES$.$_FOCUS$)[0]
    }, $_getFocusedRowIdx$:function() {
      return this.$_getRowIdxsForElementsWithStyleClass$("." + this.$_CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$ + "." + this.$_MARKER_STYLE_CLASSES$.$_FOCUS$)[0]
    }, $_getHeaderColumnFocus$:function($columnIdx$$9$$) {
      return this.$_getHeaderColumnState$($columnIdx$$9$$).$focused$
    }, $_getHeaderColumnSelection$:function($columnIdx$$10$$) {
      return this.$_getHeaderColumnState$($columnIdx$$10$$).selected
    }, $_getColumnSelectionMode$:function() {
      return null == this.options.selectionMode ? null : this.options.selectionMode.column
    }, $_getHeaderColumnState$:function($columnIdx$$11_headerColumn$$) {
      $columnIdx$$11_headerColumn$$ = this.$_getTableHeaderColumn$($columnIdx$$11_headerColumn$$);
      return{$focused$:$columnIdx$$11_headerColumn$$.hasClass(this.$_MARKER_STYLE_CLASSES$.$_FOCUS$), selected:$columnIdx$$11_headerColumn$$.hasClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$)}
    }, $_getKeyboardKeys$:function() {
      this.$_keyboardKeys$ || (this.$_keyboardKeys$ = []);
      return this.$_keyboardKeys$.reverse()
    }, $_getLastHeaderColumnSelection$:function() {
      return null != this.$_lastSelectedColumnIdxArray$ && 0 < this.$_lastSelectedColumnIdxArray$.length ? this.$_lastSelectedColumnIdxArray$[0] : null
    }, $_getLastRowSelection$:function() {
      return null != this.$_lastSelectedRowIdxArray$ && 0 < this.$_lastSelectedRowIdxArray$.length ? this.$_lastSelectedRowIdxArray$[0] : null
    }, $_getJQueryElement$:function($elements$$2$$, $type$$73$$) {
      var $i$$155$$;
      for($i$$155$$ = 0;$i$$155$$ < $$$$8$$($elements$$2$$).length;$i$$155$$++) {
        if($$$$8$$($$$$8$$($elements$$2$$)[$i$$155$$]).is($type$$73$$)) {
          return $$$$8$$($elements$$2$$)[$i$$155$$]
        }
      }
      return null
    }, $_getRowFocus$:function($rowIdx$$8$$) {
      return this.$_getTableBodyRow$($rowIdx$$8$$).hasClass(this.$_MARKER_STYLE_CLASSES$.$_FOCUS$)
    }, $_getRowHover$:function($rowIdx$$9$$) {
      return this.$_getTableBodyRow$($rowIdx$$9$$).hasClass(this.$_MARKER_STYLE_CLASSES$.$_HOVER$)
    }, $_getRowIdxsForElementsWithStyleClass$:function($elements$$3_styleClass$$1$$) {
      $elements$$3_styleClass$$1$$ = this.$_getTable$().find($elements$$3_styleClass$$1$$);
      var $rowIdxs$$ = [];
      if($elements$$3_styleClass$$1$$ && 0 < $elements$$3_styleClass$$1$$.length) {
        var $i$$156$$, $j$$25$$, $rowIdx$$10$$, $alreadyAdded$$1$$;
        for($i$$156$$ = 0;$i$$156$$ < $elements$$3_styleClass$$1$$.length;$i$$156$$++) {
          $rowIdx$$10$$ = this.$_getElementRowIdx$($$$$8$$($elements$$3_styleClass$$1$$.get($i$$156$$)));
          $alreadyAdded$$1$$ = !1;
          for($j$$25$$ = 0;$j$$25$$ < $rowIdxs$$.length;$j$$25$$++) {
            $rowIdxs$$[$j$$25$$] == $rowIdx$$10$$ && ($alreadyAdded$$1$$ = !0)
          }
          $alreadyAdded$$1$$ || $rowIdxs$$.push($rowIdx$$10$$)
        }
      }
      return $rowIdxs$$
    }, $_getRowRenderer$:function() {
      return this.options.rowRenderer
    }, $_getRowSelection$:function($rowIdx$$11$$) {
      return this.$_getTableBodyRow$($rowIdx$$11$$).hasClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$)
    }, $_getRowSelectionMode$:function() {
      return null == this.options.selectionMode ? null : this.options.selectionMode.row
    }, $_getScroller$:function() {
      return this.$_useFallbackScrolling$ ? this.$_getTableDivScroller$() : this.$_getTableBody$()
    }, $_getScrollbarHeight$:function() {
      var $scroller$$ = this.$_getScroller$();
      return $scroller$$.get(0).offsetHeight - $scroller$$.get(0).clientHeight
    }, $_getScrollbarWidth$:function() {
      var $scroller$$1$$ = this.$_getScroller$();
      return $scroller$$1$$.get(0).offsetWidth - $scroller$$1$$.get(0).clientWidth
    }, $_getSelectedHeaderColumnIdxs$:function() {
      return this.$_getColumnIdxsForElementsWithStyleClass$("." + this.$_CSS_CLASSES$.$_COLUMN_HEADER_CLASS$ + "." + this.$_MARKER_STYLE_CLASSES$.$_SELECTED$)
    }, $_getSelectedRowIdxs$:function() {
      return this.$_getRowIdxsForElementsWithStyleClass$("." + this.$_CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$ + "." + this.$_MARKER_STYLE_CLASSES$.$_SELECTED$)
    }, $_getSortedTableHeaderColumnIdx$:function() {
      var $tableHeaderColumns$$ = this.$_getTableHeaderColumns$(), $i$$157$$, $sorted$$1$$;
      for($i$$157$$ = 0;$i$$157$$ < $tableHeaderColumns$$.length;$i$$157$$++) {
        if($sorted$$1$$ = $$$$8$$($tableHeaderColumns$$[$i$$157$$]).data("sorted"), null != $sorted$$1$$) {
          return $i$$157$$
        }
      }
      return null
    }, $_getRendererContextObject$:function($row$$30$$, $parentElement$$1$$) {
      var $context$$35$$ = [];
      $context$$35$$.component = this;
      $context$$35$$.datasource = this.$_getData$();
      $context$$35$$.parentElement = $parentElement$$1$$;
      if(null != $row$$30$$) {
        $context$$35$$.status = this.$_getRendererStatusObject$($row$$30$$);
        var $rowContext$$ = $row$$30$$.context, $i$$158$$;
        for($i$$158$$ in $rowContext$$) {
          $rowContext$$.hasOwnProperty($i$$158$$) && ($context$$35$$[$i$$158$$] = $rowContext$$[$i$$158$$])
        }
      }
      return $context$$35$$
    }, $_getRendererStatusObject$:function($row$$31$$) {
      return{rowIndex:this.$_getData$().indexOf($row$$31$$), rowKey:$row$$31$$.id, activeRow:this.activeRow()}
    }, $_getSpecifiedTableHeight$:function() {
      null == this.$_tableHeight$ && (this.$_tableHeight$ = this.element.height());
      return this.$_tableHeight$
    }, $_getSpecifiedTableWidth$:function() {
      null == this.$_tableWidth$ && (this.$_tableWidth$ = this.element.width());
      return this.$_tableWidth$
    }, $_getTabbableElements$:function($element$$36_tabbableElements$$) {
      $element$$36_tabbableElements$$ = $element$$36_tabbableElements$$.find(":tabbable");
      return null != $element$$36_tabbableElements$$ && 0 < $element$$36_tabbableElements$$.length ? $element$$36_tabbableElements$$ : null
    }, $_getTableRowCount$:function() {
      var $rows$$4$$ = this.$_getTableBodyRows$();
      return null != $rows$$4$$ ? $rows$$4$$.length : 0
    }, $_handleContextMenuBeforeShow$:function($columnIdx$$12_event$$90_headerColumn$$1$$) {
      var $contextMenu$$2_tableBodyCell$$ = this.$_getContextMenu$();
      this.$_contextMenuEvent$ = $columnIdx$$12_event$$90_headerColumn$$1$$.originalEvent.originalEvent;
      "keydown" === this.$_contextMenuEvent$.type ? $contextMenu$$2_tableBodyCell$$.ojMenu("option", "menuPosition", {my:"left top", at:"left bottom", of:this.$contextMenuEvent$.target}) : $contextMenu$$2_tableBodyCell$$.ojMenu("option", "menuPosition", {my:"left top", at:"left bottom"});
      $columnIdx$$12_event$$90_headerColumn$$1$$ = this.$_getFirstAncestor$($$$$8$$(this.$_contextMenuEvent$.target), "oj-table-column-header");
      $contextMenu$$2_tableBodyCell$$ = this.$_getFirstAncestor$($$$$8$$(this.$_contextMenuEvent$.target), "oj-table-data-cell");
      null != $contextMenu$$2_tableBodyCell$$ && ($columnIdx$$12_event$$90_headerColumn$$1$$ = this.$_getElementColumnIdx$($contextMenu$$2_tableBodyCell$$), $columnIdx$$12_event$$90_headerColumn$$1$$ = this.$_getTableHeaderColumn$($columnIdx$$12_event$$90_headerColumn$$1$$));
      $columnIdx$$12_event$$90_headerColumn$$1$$.attr("data-oj-sortable") == this.$_OPTION_ENABLED$ ? (this.$_getContextMenu$().find("[data-oj-command\x3doj-table-sortAsc]").removeClass("oj-disabled"), this.$_getContextMenu$().find("[data-oj-command\x3doj-table-sortDsc]").removeClass("oj-disabled")) : (this.$_getContextMenu$().find("[data-oj-command\x3doj-table-sortAsc]").addClass("oj-disabled"), this.$_getContextMenu$().find("[data-oj-command\x3doj-table-sortDsc]").addClass("oj-disabled"))
    }, $_handleContextMenuSelect$:function($event$$91$$, $ui$$5$$) {
      var $menuItemCommand$$ = $ui$$5$$.item.attr("data-oj-command"), $headerColumn$$2$$ = this.$_getFirstAncestor$($$$$8$$(this.$_contextMenuEvent$.target), "oj-table-column-header"), $tableBodyCell$$1$$ = this.$_getFirstAncestor$($$$$8$$(this.$_contextMenuEvent$.target), "oj-table-data-cell"), $columnIdx$$13$$ = null;
      null != $headerColumn$$2$$ && ($columnIdx$$13$$ = this.$_getElementColumnIdx$($headerColumn$$2$$));
      null != $tableBodyCell$$1$$ && ($columnIdx$$13$$ = this.$_getElementColumnIdx$($tableBodyCell$$1$$));
      "oj-table-sortAsc" == $menuItemCommand$$ ? this.$_handleSortTableHeaderColumn$($columnIdx$$13$$, !0) : "oj-table-sortDsc" == $menuItemCommand$$ && this.$_handleSortTableHeaderColumn$($columnIdx$$13$$, !1)
    }, $_handleDataError$:function($error$$13$$) {
      this.$_hideStatusMessage$();
      throw $error$$13$$;
    }, $_handleDataFetchStart$:function() {
      this.$_showStatusMessage$()
    }, $_handleDataFetchEnd$:function($refresh$$1$$) {
      $refresh$$1$$ && (this.$_refreshTableBody$(), this.$_refreshTableDimensions$());
      this.$_hideStatusMessage$()
    }, $_handleDataReset$:function() {
      this.$_hideStatusMessage$();
      this.$_refreshTableBody$();
      this.$_refreshTableDimensions$();
      this.activeRow(-1)
    }, $_handleDataRowAdd$:function($event$$94_row$$32$$) {
      var $rowIdx$$12$$ = $event$$94_row$$32$$.rowIdx;
      $event$$94_row$$32$$ = $event$$94_row$$32$$.row;
      null == $rowIdx$$12$$ && ($rowIdx$$12$$ = this.$_getData$().indexOf($event$$94_row$$32$$));
      this.$_hideStatusMessage$();
      this.$_refreshTableBodyRow$($rowIdx$$12$$, $event$$94_row$$32$$);
      this.$_refreshTableBodyRowIdxs$();
      this.$_refreshTableDimensions$();
      this.$_setRowFocus$($rowIdx$$12$$, !0, null)
    }, $_handleDataRowChange$:function($event$$95_row$$33$$) {
      var $rowIdx$$13$$ = $event$$95_row$$33$$.rowIdx;
      $event$$95_row$$33$$ = $event$$95_row$$33$$.row;
      null == $rowIdx$$13$$ && ($rowIdx$$13$$ = this.$_getData$().indexOf($event$$95_row$$33$$));
      this.$_hideStatusMessage$();
      this.$_refreshTableBodyRow$($rowIdx$$13$$, $event$$95_row$$33$$);
      this.$_refreshTableDimensions$()
    }, $_handleDataRowRemove$:function($event$$96_row$$34_rowKey$$19$$) {
      $event$$96_row$$34_rowKey$$19$$ = $event$$96_row$$34_rowKey$$19$$.row;
      this.$_hideStatusMessage$();
      $event$$96_row$$34_rowKey$$19$$ = $event$$96_row$$34_rowKey$$19$$.id;
      var $tableBodyRows$$ = this.$_getTableBodyRows$();
      if($tableBodyRows$$) {
        var $i$$159$$, $tableBodyRow$$, $deletedRow$$;
        for($i$$159$$ = 0;$i$$159$$ < $tableBodyRows$$.length;$i$$159$$++) {
          if($tableBodyRow$$ = $$$$8$$($tableBodyRows$$[$i$$159$$]), $deletedRow$$ = null, this.$_getElementRowKey$($tableBodyRow$$) == $event$$96_row$$34_rowKey$$19$$ && ($deletedRow$$ = $tableBodyRow$$), null != $deletedRow$$) {
            $deletedRow$$[0].parentNode.removeChild($deletedRow$$[0]);
            break
          }
        }
        this.$_clearCachedDomRowData$();
        this.$_refreshTableBodyRowIdxs$();
        this.$_refreshTableDimensions$()
      }
    }, $_handleDataSort$:function() {
      this.$_hideStatusMessage$();
      this.$_refreshTableBody$();
      this.$_refreshTableDimensions$();
      var $activeRowIdx$$ = this.activeRow();
      null != $activeRowIdx$$ && this.$_setRowFocus$($activeRowIdx$$, !0, null)
    }, $_handleKeydownLeftRight$:function($event$$98$$) {
      var $focusedHeaderColumnIdx$$1$$ = this.$_getFocusedHeaderColumnIdx$(), $columns$$6_newFocusedHeaderColumnSelection$$ = this.$_getColumnDefs$();
      if(null != $focusedHeaderColumnIdx$$1$$) {
        var $newFocusedHeaderColumnIdx$$ = $focusedHeaderColumnIdx$$1$$;
        this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_LEFT$) ? $newFocusedHeaderColumnIdx$$ = 0 < $focusedHeaderColumnIdx$$1$$ ? $focusedHeaderColumnIdx$$1$$ - 1 : $focusedHeaderColumnIdx$$1$$ : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_RIGHT$) && ($newFocusedHeaderColumnIdx$$ = $focusedHeaderColumnIdx$$1$$ < $columns$$6_newFocusedHeaderColumnSelection$$.length - 1 ? $focusedHeaderColumnIdx$$1$$ + 1 : $focusedHeaderColumnIdx$$1$$);
        $newFocusedHeaderColumnIdx$$ != $focusedHeaderColumnIdx$$1$$ && (this.$_setHeaderColumnFocus$($newFocusedHeaderColumnIdx$$, !0, null), $event$$98$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$] && ($columns$$6_newFocusedHeaderColumnSelection$$ = this.$_getHeaderColumnSelection$($newFocusedHeaderColumnIdx$$), this.$_setHeaderColumnSelection$($newFocusedHeaderColumnIdx$$, !$columns$$6_newFocusedHeaderColumnSelection$$, null, $event$$98$$), $columns$$6_newFocusedHeaderColumnSelection$$ && 
        this.$_getHeaderColumnSelection$($focusedHeaderColumnIdx$$1$$) && this.$_setHeaderColumnSelection$($focusedHeaderColumnIdx$$1$$, !1, null, $event$$98$$)))
      }
    }, $_handleKeydownTab$:function($event$$99$$) {
      var $focusedRowIdx$$1_tabbableElementsInRow_tabbableElementsInTable_table$$1_tableBodyRow$$1$$ = this.$_getFocusedRowIdx$();
      if(null != $focusedRowIdx$$1_tabbableElementsInRow_tabbableElementsInTable_table$$1_tableBodyRow$$1$$ && this.$_tableNavMode$) {
        var $tabbableElementsInBody_tabbableElementsInDocument_tableBody$$ = this.$_getTableBody$(), $tabbableElementsInBody_tabbableElementsInDocument_tableBody$$ = this.$_getTabbableElements$($tabbableElementsInBody_tabbableElementsInDocument_tableBody$$);
        if(null != $tabbableElementsInBody_tabbableElementsInDocument_tableBody$$) {
          var $currentFocusElement_tableTabIndex$$ = document.activeElement, $isCurrentlyFocused$$ = !1, $i$$160$$;
          for($i$$160$$ = 0;$i$$160$$ < $tabbableElementsInBody_tabbableElementsInDocument_tableBody$$.length;$i$$160$$++) {
            if($currentFocusElement_tableTabIndex$$ == $tabbableElementsInBody_tabbableElementsInDocument_tableBody$$[$i$$160$$]) {
              $isCurrentlyFocused$$ = !0;
              break
            }
          }
          if($isCurrentlyFocused$$) {
            return
          }
          $event$$99$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$] || ($focusedRowIdx$$1_tabbableElementsInRow_tabbableElementsInTable_table$$1_tableBodyRow$$1$$ = this.$_getTableBodyRow$($focusedRowIdx$$1_tabbableElementsInRow_tabbableElementsInTable_table$$1_tableBodyRow$$1$$), $focusedRowIdx$$1_tabbableElementsInRow_tabbableElementsInTable_table$$1_tableBodyRow$$1$$ = this.$_getTabbableElements$($focusedRowIdx$$1_tabbableElementsInRow_tabbableElementsInTable_table$$1_tableBodyRow$$1$$), 
          null != $focusedRowIdx$$1_tabbableElementsInRow_tabbableElementsInTable_table$$1_tableBodyRow$$1$$ ? $$$$8$$($focusedRowIdx$$1_tabbableElementsInRow_tabbableElementsInTable_table$$1_tableBodyRow$$1$$[0]).focus() : $$$$8$$($tabbableElementsInBody_tabbableElementsInDocument_tableBody$$[0]).focus(), $event$$99$$.preventDefault(), $event$$99$$.stopPropagation())
        }
      }else {
        $focusedRowIdx$$1_tabbableElementsInRow_tabbableElementsInTable_table$$1_tableBodyRow$$1$$ = this.$_getTable$(), $tabbableElementsInBody_tabbableElementsInDocument_tableBody$$ = this.$_getTabbableElements$($$$$8$$(document)), $focusedRowIdx$$1_tabbableElementsInRow_tabbableElementsInTable_table$$1_tableBodyRow$$1$$ = this.$_getTabbableElements$($focusedRowIdx$$1_tabbableElementsInRow_tabbableElementsInTable_table$$1_tableBodyRow$$1$$), $currentFocusElement_tableTabIndex$$ = $tabbableElementsInBody_tabbableElementsInDocument_tableBody$$.index(this.$_getTable$()), 
        $$$$8$$($tabbableElementsInBody_tabbableElementsInDocument_tableBody$$[$currentFocusElement_tableTabIndex$$ + $focusedRowIdx$$1_tabbableElementsInRow_tabbableElementsInTable_table$$1_tableBodyRow$$1$$.length + 1]).focus(), $event$$99$$.preventDefault(), $event$$99$$.stopPropagation()
      }
      this.$_removeKeyboardKey$($event$$99$$.keyCode)
    }, $_handleKeydownUpDown$:function($event$$100$$) {
      var $focusedRowIdx$$2$$ = this.$_getFocusedRowIdx$(), $focusedHeaderColumnIdx$$2_newFocusedRowIdx$$ = this.$_getFocusedHeaderColumnIdx$();
      if(null != $focusedRowIdx$$2$$) {
        var $data$$66_newFocusedRowSelection$$ = this.$_getData$(), $focusedHeaderColumnIdx$$2_newFocusedRowIdx$$ = $focusedRowIdx$$2$$;
        this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$) ? $focusedHeaderColumnIdx$$2_newFocusedRowIdx$$ = 0 < $focusedRowIdx$$2$$ ? $focusedRowIdx$$2$$ - 1 : $focusedRowIdx$$2$$ : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) && ($focusedHeaderColumnIdx$$2_newFocusedRowIdx$$ = $focusedRowIdx$$2$$ < $data$$66_newFocusedRowSelection$$.size() - 1 ? $focusedRowIdx$$2$$ + 1 : $focusedRowIdx$$2$$);
        $focusedHeaderColumnIdx$$2_newFocusedRowIdx$$ != $focusedRowIdx$$2$$ ? (this.$_setRowFocus$($focusedHeaderColumnIdx$$2_newFocusedRowIdx$$, !0, null), $event$$100$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$] && ($data$$66_newFocusedRowSelection$$ = this.$_getRowSelection$($focusedHeaderColumnIdx$$2_newFocusedRowIdx$$), this.$_setRowSelection$($focusedHeaderColumnIdx$$2_newFocusedRowIdx$$, !$data$$66_newFocusedRowSelection$$, null, $event$$100$$), $data$$66_newFocusedRowSelection$$ && 
        this.$_getRowSelection$($focusedRowIdx$$2$$) && this.$_setRowSelection$($focusedRowIdx$$2$$, !1, null, $event$$100$$))) : $focusedHeaderColumnIdx$$2_newFocusedRowIdx$$ == $focusedRowIdx$$2$$ && (0 == $focusedRowIdx$$2$$ && this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$)) && this.$_setHeaderColumnFocus$(0, !0, null)
      }else {
        null != $focusedHeaderColumnIdx$$2_newFocusedRowIdx$$ && this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) && this.$_setRowFocus$(0, !0, null)
      }
    }, $_handleKeyupEnd$:function() {
      var $focusedColumnIdx$$ = this.$_getFocusedHeaderColumnIdx$();
      null != $focusedColumnIdx$$ && $focusedColumnIdx$$ != this.$_getColumnDefs$().length - 1 && this.$_setHeaderColumnFocus$(this.$_getColumnDefs$().length - 1, !0, null)
    }, $_handleKeyupEnter$:function() {
      var $focusedColumnIdx$$1$$ = this.$_getFocusedHeaderColumnIdx$();
      if(null != $focusedColumnIdx$$1$$ && this.$_getColumnDefs$()[$focusedColumnIdx$$1$$].sortable == this.$_OPTION_ENABLED$) {
        var $sorted$$2$$ = this.$_getTableHeaderColumn$($focusedColumnIdx$$1$$).data("sorted");
        null == $sorted$$2$$ || $sorted$$2$$ == this.$_COLUMN_SORT_ORDER$.$_DESCENDING$ ? this.$_handleSortTableHeaderColumn$($focusedColumnIdx$$1$$, !0) : this.$_handleSortTableHeaderColumn$($focusedColumnIdx$$1$$, !1)
      }
    }, $_handleKeyupEsc$:function($event$$103$$) {
      $event$$103$$.preventDefault();
      $event$$103$$.stopPropagation();
      this.$_getTable$().focus();
      this.$_setTableNavigationMode$(!1)
    }, $_handleKeyupHome$:function() {
      var $focusedColumnIdx$$2$$ = this.$_getFocusedHeaderColumnIdx$();
      null != $focusedColumnIdx$$2$$ && 0 != $focusedColumnIdx$$2$$ && this.$_setHeaderColumnFocus$(0, !0, null)
    }, $_handleKeyupSpacebar$:function($event$$105$$) {
      var $focusedHeaderColumnIdx$$3_focusedRowIdx$$3$$ = this.$_getFocusedRowIdx$();
      null != $focusedHeaderColumnIdx$$3_focusedRowIdx$$3$$ ? this.$_setRowSelection$($focusedHeaderColumnIdx$$3_focusedRowIdx$$3$$, !this.$_getRowSelection$($focusedHeaderColumnIdx$$3_focusedRowIdx$$3$$), null, $event$$105$$) : ($focusedHeaderColumnIdx$$3_focusedRowIdx$$3$$ = this.$_getFocusedHeaderColumnIdx$(), null != $focusedHeaderColumnIdx$$3_focusedRowIdx$$3$$ && this.$_setHeaderColumnSelection$($focusedHeaderColumnIdx$$3_focusedRowIdx$$3$$, !this.$_getHeaderColumnSelection$($focusedHeaderColumnIdx$$3_focusedRowIdx$$3$$), 
      null, $event$$105$$))
    }, $_handleSortTableHeaderColumn$:function($columnIdx$$14$$, $ascending$$) {
      this.$_clearSortedHeaderColumn$();
      var $column$$9_sortField$$ = this.$_getColumnDefs$()[$columnIdx$$14$$], $column$$9_sortField$$ = null == $column$$9_sortField$$.sortProperty ? $column$$9_sortField$$.field : $column$$9_sortField$$.sortProperty, $tableHeaderColumn$$1$$ = this.$_getTableHeaderColumn$($columnIdx$$14$$);
      this.$_invokeDataSort$($column$$9_sortField$$, $ascending$$, null);
      $ascending$$ ? ($tableHeaderColumn$$1$$.data("sorted", this.$_COLUMN_SORT_ORDER$.$_ASCENDING$), $tableHeaderColumn$$1$$.find("." + this.$_CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$).addClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$), this.$_showTableHeaderColumnSortLink$($columnIdx$$14$$, !0)) : ($tableHeaderColumn$$1$$.data("sorted", this.$_COLUMN_SORT_ORDER$.$_DESCENDING$), $tableHeaderColumn$$1$$.find("." + this.$_CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$).addClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$), 
      this.$_showTableHeaderColumnSortLink$($columnIdx$$14$$, !1))
    }, $_hideNoDataMessage$:function() {
      this.$_getTableNoDataMessage$().css("display", "none")
    }, $_hideStatusMessage$:function() {
      this.$_getTableStatusMessage$().css("display", "none")
    }, $_hideTableHeaderColumnSortLink$:function($columnIdx$$15$$, $ascending$$1$$) {
      if(this.$_getColumnDefs$()[$columnIdx$$15$$].sortable == this.$_OPTION_ENABLED$) {
        var $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$2$$ = this.$_getTableHeaderColumn$($columnIdx$$15$$), $sorted$$3$$ = $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$2$$.data("sorted");
        !$ascending$$1$$ || null != $sorted$$3$$ && $sorted$$3$$ != this.$_COLUMN_SORT_ORDER$.$_DESCENDING$ ? $ascending$$1$$ || null != $sorted$$3$$ && $sorted$$3$$ != this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ || ($headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$2$$ = $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$2$$.find("." + this.$_CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$), $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$2$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), 
        $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$2$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$2$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$)) : ($headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$2$$ = $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$2$$.find("." + this.$_CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$), $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$2$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), 
        $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$2$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$2$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$))
      }
    }, $_invokeDataSort$:function($sortField$$1$$, $ascending$$2$$) {
      var $data$$67$$ = this.$_getData$();
      if(!$data$$67$$) {
        return null
      }
      this.$_showStatusMessage$();
      var $options$$235$$ = {};
      $options$$235$$.sortProperty = $sortField$$1$$;
      $ascending$$2$$ ? ($options$$235$$.sortDirection = this.$_COLUMN_SORT_ORDER$.$_ASCENDING$, $data$$67$$.sort(function($row$$35$$) {
        return $$$$8$$.isFunction($row$$35$$.get) ? $row$$35$$.get($sortField$$1$$) : $row$$35$$[$sortField$$1$$]()
      }, $options$$235$$)) : ($options$$235$$.sortDirection = this.$_COLUMN_SORT_ORDER$.$_DESCENDING$, $data$$67$$.sort(function($rowA$$, $rowB$$) {
        var $a$$55$$, $b$$41$$;
        $$$$8$$.isFunction($rowA$$.get) ? ($a$$55$$ = $rowA$$.get($sortField$$1$$), $b$$41$$ = $rowB$$.get($sortField$$1$$)) : ($a$$55$$ = $rowA$$[$sortField$$1$$](), $b$$41$$ = $rowB$$[$sortField$$1$$]());
        return $a$$55$$ === $b$$41$$ ? 0 : $a$$55$$ > $b$$41$$ ? -1 : 1
      }, $options$$235$$))
    }, $_isColumnMetadataUpdated$:function() {
      if(null != this.$_columnDefArray$) {
        var $columnsMetadata$$ = this.$_getColumnMetadata$();
        if(this.$_columnDefArray$.length != $columnsMetadata$$.length) {
          return!0
        }
        var $i$$161$$, $prop$$73$$;
        for($i$$161$$ = 0;$i$$161$$ < $columnsMetadata$$.length;$i$$161$$++) {
          for($prop$$73$$ in $columnsMetadata$$[$i$$161$$]) {
            if($columnsMetadata$$[$i$$161$$].hasOwnProperty($prop$$73$$) && $columnsMetadata$$[$i$$161$$][$prop$$73$$] != this.$_columnDefArray$[$i$$161$$][$prop$$73$$]) {
              return!0
            }
          }
        }
        return!1
      }
      return!0
    }, $_isDataMetadataUpdated$:function() {
      return this.$_dataMetadata$ != this.options.data ? !0 : !1
    }, $_isFocused$:function() {
      var $currentFocusElement$$1$$ = $$$$8$$(document.activeElement), $table$$2$$ = this.$_getTable$();
      return $table$$2$$[0] != $currentFocusElement$$1$$[0] && 0 == $table$$2$$.has($currentFocusElement$$1$$).length ? !1 : !0
    }, $_isIE$:function() {
      if("Microsoft Internet Explorer" == navigator.appName) {
        var $resultArray$$ = /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent);
        if(null != $resultArray$$) {
          return parseFloat($resultArray$$[1])
        }
      }
      return null
    }, $_isKeyboardKeyPressed$:function($keyCode$$1$$) {
      var $keyboardKeys$$1$$ = this.$_getKeyboardKeys$(), $i$$162$$;
      for($i$$162$$ = 0;$i$$162$$ < $keyboardKeys$$1$$.length;$i$$162$$++) {
        if($keyboardKeys$$1$$[$i$$162$$] == $keyCode$$1$$) {
          return!0
        }
      }
      return!1
    }, $_isTableFooterless$:function() {
      return this.options.footerRenderer ? !1 : !0
    }, $_isTableHeightSet$:function() {
      return 0 < this.$_getSpecifiedTableHeight$() ? !0 : !1
    }, $_isTableWidthSet$:function() {
      return 0 < this.$_getSpecifiedTableWidth$() ? !0 : !1
    }, $_isTableHeaderless$:function() {
      var $columns$$7_j$$27$$ = this.$_getColumnDefs$(), $columnRenderers$$4_i$$163$$;
      for($columnRenderers$$4_i$$163$$ = 0;$columnRenderers$$4_i$$163$$ < $columns$$7_j$$27$$.length;$columnRenderers$$4_i$$163$$++) {
        if(null != $columns$$7_j$$27$$[$columnRenderers$$4_i$$163$$].headerText || null != $columns$$7_j$$27$$[$columnRenderers$$4_i$$163$$].headerStyle || null != $columns$$7_j$$27$$[$columnRenderers$$4_i$$163$$].showRequired && $columns$$7_j$$27$$[$columnRenderers$$4_i$$163$$].showRequired != this.$_OPTION_DISABLED$ || null != $columns$$7_j$$27$$[$columnRenderers$$4_i$$163$$].sortable && $columns$$7_j$$27$$[$columnRenderers$$4_i$$163$$].showRequired != this.$_OPTION_DISABLED$ || null != $columns$$7_j$$27$$[$columnRenderers$$4_i$$163$$].sortProperty) {
          return!1
        }
      }
      if($columnRenderers$$4_i$$163$$ = this.options.columnRenderers) {
        for($columns$$7_j$$27$$ = 0;$columns$$7_j$$27$$ < $columnRenderers$$4_i$$163$$.length;$columns$$7_j$$27$$++) {
          if("header" == $columnRenderers$$4_i$$163$$[$columns$$7_j$$27$$].type) {
            return!1
          }
        }
      }
      return!0
    }, $_isTableHeaderColumnsRendered$:function() {
      return!0 == this.$_renderedTableHeaderColumns$
    }, $_isTableNavigationMode$:$JSCompiler_get$$("$_tableNavMode$"), $_refreshAll$:function() {
      if(this.$_isColumnMetadataUpdated$() || !this.$_isTableHeaderColumnsRendered$() && !this.$_isTableHeaderless$()) {
        this.$_clearCachedMetadata$(), this.$_refreshTableHeader$()
      }
      this.$_refreshTableFooter$();
      var $dataMetadataUpdated$$ = !1;
      this.$_isDataMetadataUpdated$() && ($dataMetadataUpdated$$ = !0, this.$_clearCachedDataMetadata$());
      this.$_refreshTableBody$();
      this.$_refreshTableDimensions$();
      $dataMetadataUpdated$$ && this.$_registerDataSourceEventListeners$()
    }, $_refreshColumnHeaderPadding$:function() {
      var $columns$$8$$ = this.$_getColumnDefs$(), $i$$164$$, $headerColumn$$3_headerColumnRowDiv$$;
      if(!this.$_isTableHeaderless$()) {
        var $isRTL$$2$$ = "rtl" === this._GetReadingDirection(), $headerColumnAscDiv$$, $headerColumnDscDiv$$, $newHeaderColumnRowDivPadding_totalSortLinkWidth$$;
        for($i$$164$$ = 0;$i$$164$$ < $columns$$8$$.length;$i$$164$$++) {
          $headerColumn$$3_headerColumnRowDiv$$ = this.$_getTableHeaderColumn$($i$$164$$), null != $headerColumn$$3_headerColumnRowDiv$$ && ($headerColumnAscDiv$$ = $headerColumn$$3_headerColumnRowDiv$$.find("." + this.$_CSS_CLASSES$.$_COLUMN_HEADER_ASC_CLASS$), $headerColumnDscDiv$$ = $headerColumn$$3_headerColumnRowDiv$$.find("." + this.$_CSS_CLASSES$.$_COLUMN_HEADER_DSC_CLASS$), $headerColumn$$3_headerColumnRowDiv$$ = $headerColumn$$3_headerColumnRowDiv$$.find("." + this.$_CSS_CLASSES$.$_COLUMN_HEADER_ROW_CLASS$), 
          $newHeaderColumnRowDivPadding_totalSortLinkWidth$$ = $headerColumnAscDiv$$.width() + $headerColumnDscDiv$$.width(), this.$_headerColumnRowDivPadding$ || (this.$_headerColumnRowDivPadding$ = $isRTL$$2$$ ? $headerColumn$$3_headerColumnRowDiv$$.css("padding-left") : $headerColumn$$3_headerColumnRowDiv$$.css("padding-right")), $newHeaderColumnRowDivPadding_totalSortLinkWidth$$ = parseInt(this.$_headerColumnRowDivPadding$, 10) + $newHeaderColumnRowDivPadding_totalSortLinkWidth$$ + "px", $isRTL$$2$$ ? 
          $headerColumn$$3_headerColumnRowDiv$$.css("padding-left", $newHeaderColumnRowDivPadding_totalSortLinkWidth$$) : $headerColumn$$3_headerColumnRowDiv$$.css("padding-right", $newHeaderColumnRowDivPadding_totalSortLinkWidth$$), $isRTL$$2$$ ? $headerColumnAscDiv$$.css("left", $headerColumnDscDiv$$.width() + "px") : $headerColumnAscDiv$$.css("right", $headerColumnDscDiv$$.width() + "px"))
        }
      }
    }, $_refreshTableBody$:function() {
      var $tableBody$$1$$ = this.$_getTableBody$(), $data$$68$$ = this.$_getData$();
      $tableBody$$1$$.empty();
      this.$_clearCachedDomRowData$();
      if($data$$68$$ && 0 != $data$$68$$.size() && 0 != this.$_getColumnDefs$().length) {
        this.$_hideNoDataMessage$();
        for(var $tableBodyDocFrag$$ = $$$$8$$(document.createDocumentFragment()), $i$$165_startIndex$$6$$ = $data$$68$$.startIndex(), $endIndex$$1$$ = $i$$165_startIndex$$6$$ + $data$$68$$.size(), $row$$36$$;$i$$165_startIndex$$6$$ < $endIndex$$1$$;$i$$165_startIndex$$6$$++) {
          $row$$36$$ = $data$$68$$.at($i$$165_startIndex$$6$$), null != $row$$36$$ && this.$_refreshTableBodyRow$($i$$165_startIndex$$6$$, $row$$36$$, $tableBodyDocFrag$$)
        }
        $tableBody$$1$$.append($tableBodyDocFrag$$)
      }else {
        this.$_showNoDataMessage$()
      }
    }, $_refreshTableBodyRow$:function($rowIdx$$14$$, $row$$37_tableBodyCells$$, $docFrag_j$$28_tableBodyCell$$2$$) {
      var $isTableBodyRowNew_rowContent_rowRenderer$$ = this.$_getRowRenderer$(), $columns$$9_tableBody$$2$$ = this.$_getColumnDefs$();
      if(isNaN($rowIdx$$14$$) || 0 > $rowIdx$$14$$) {
        throw"Error: Invalid rowIdx value: " + $rowIdx$$14$$;
      }
      this.$_hideNoDataMessage$();
      if($isTableBodyRowNew_rowContent_rowRenderer$$) {
        var $i$$166_tableBodyRow$$2$$ = this.$_createTableBodyRow$();
        this.$_insertTableBodyRow$($rowIdx$$14$$, $i$$166_tableBodyRow$$2$$, $row$$37_tableBodyCells$$, $docFrag_j$$28_tableBodyCell$$2$$);
        $columns$$9_tableBody$$2$$ = $i$$166_tableBodyRow$$2$$.parent();
        $isTableBodyRowNew_rowContent_rowRenderer$$ = $isTableBodyRowNew_rowContent_rowRenderer$$({rowContext:this.$_getRendererContextObject$($row$$37_tableBodyCells$$, $i$$166_tableBodyRow$$2$$[0]), row:$row$$37_tableBodyCells$$.$pairs$()});
        null != $isTableBodyRowNew_rowContent_rowRenderer$$ ? $i$$166_tableBodyRow$$2$$.append($isTableBodyRowNew_rowContent_rowRenderer$$) : ($i$$166_tableBodyRow$$2$$ = null == $docFrag_j$$28_tableBodyCell$$2$$ ? $$$$8$$($columns$$9_tableBody$$2$$.children()[$rowIdx$$14$$]) : $$$$8$$($docFrag_j$$28_tableBodyCell$$2$$.children()[$rowIdx$$14$$]), this.$_setTableBodyRowAttributes$($rowIdx$$14$$, $row$$37_tableBodyCells$$, $i$$166_tableBodyRow$$2$$), this.$_styleTableBodyRow$($i$$166_tableBodyRow$$2$$));
        this.$_createTableBodyCellAccSelect$($i$$166_tableBodyRow$$2$$);
        $row$$37_tableBodyCells$$ = $i$$166_tableBodyRow$$2$$.children("td");
        for($i$$166_tableBodyRow$$2$$ = 1;$i$$166_tableBodyRow$$2$$ < $row$$37_tableBodyCells$$.length;$i$$166_tableBodyRow$$2$$++) {
          $docFrag_j$$28_tableBodyCell$$2$$ = $$$$8$$($row$$37_tableBodyCells$$[$i$$166_tableBodyRow$$2$$]), this.$_setTableBodyCellAttributes$($rowIdx$$14$$, $i$$166_tableBodyRow$$2$$ - 1, $docFrag_j$$28_tableBodyCell$$2$$), this.$_styleTableBodyCell$($i$$166_tableBodyRow$$2$$ - 1, $docFrag_j$$28_tableBodyCell$$2$$)
        }
      }else {
        for($isTableBodyRowNew_rowContent_rowRenderer$$ = !1, null == $docFrag_j$$28_tableBodyCell$$2$$ ? ($i$$166_tableBodyRow$$2$$ = this.$_getTableBodyRow$($rowIdx$$14$$), $i$$166_tableBodyRow$$2$$ || ($i$$166_tableBodyRow$$2$$ = this.$_createTableBodyRow$(), $isTableBodyRowNew_rowContent_rowRenderer$$ = !0)) : ($i$$166_tableBodyRow$$2$$ = this.$_createTableBodyRow$(), $isTableBodyRowNew_rowContent_rowRenderer$$ = !0), this.$_insertTableBodyRow$($rowIdx$$14$$, $i$$166_tableBodyRow$$2$$, $row$$37_tableBodyCells$$, 
        $docFrag_j$$28_tableBodyCell$$2$$), $docFrag_j$$28_tableBodyCell$$2$$ = 0;$docFrag_j$$28_tableBodyCell$$2$$ < $columns$$9_tableBody$$2$$.length;$docFrag_j$$28_tableBodyCell$$2$$++) {
          this.$_setTableBodyCell$($rowIdx$$14$$, $docFrag_j$$28_tableBodyCell$$2$$, $i$$166_tableBodyRow$$2$$, $row$$37_tableBodyCells$$, $isTableBodyRowNew_rowContent_rowRenderer$$)
        }
      }
    }, $_refreshTableBodyRowIdxs$:function() {
      var $tableBodyRows$$1$$ = this.$_getTableBodyRows$(), $data$$69$$ = this.$_getData$();
      if(null != $tableBodyRows$$1$$ && 0 < $tableBodyRows$$1$$.length) {
        var $i$$167$$, $j$$29_tableBodyRow$$3$$, $rowIdx$$15_rowKey$$20_tableRowModel$$, $tableBodyCells$$1$$;
        for($i$$167$$ = 0;$i$$167$$ < $tableBodyRows$$1$$.length;$i$$167$$++) {
          if($j$$29_tableBodyRow$$3$$ = $$$$8$$($tableBodyRows$$1$$[$i$$167$$]), $rowIdx$$15_rowKey$$20_tableRowModel$$ = this.$_getElementRowKey$($j$$29_tableBodyRow$$3$$), $rowIdx$$15_rowKey$$20_tableRowModel$$ = $data$$69$$.get($rowIdx$$15_rowKey$$20_tableRowModel$$), null != $rowIdx$$15_rowKey$$20_tableRowModel$$) {
            for($rowIdx$$15_rowKey$$20_tableRowModel$$ = $data$$69$$.indexOf($rowIdx$$15_rowKey$$20_tableRowModel$$), this.$_setElementRowIdx$($rowIdx$$15_rowKey$$20_tableRowModel$$, $j$$29_tableBodyRow$$3$$), $tableBodyCells$$1$$ = this.$_getTableBodyCells$($rowIdx$$15_rowKey$$20_tableRowModel$$), $j$$29_tableBodyRow$$3$$ = 0;$j$$29_tableBodyRow$$3$$ < $tableBodyCells$$1$$.length;$j$$29_tableBodyRow$$3$$++) {
              this.$_setElementRowIdx$($rowIdx$$15_rowKey$$20_tableRowModel$$, $tableBodyCells$$1$$[$j$$29_tableBodyRow$$3$$])
            }
          }
        }
      }
    }, $_refreshTableDimensions$:function() {
      var $minHeight_table$$3_tableDivScroller$$ = this.$_getTable$(), $tableHeader$$ = this.$_getTableHeader$(), $scrollbarWidth$$1_tableFooter$$ = this.$_getTableFooter$(), $tableFooterHeight_tableHeaderRow$$ = this.$_getTableHeaderRow$(), $tableBodyHeight_tableContainer$$1$$ = this.$_getTableContainer$(), $tableBody$$3_totalHeight$$ = this.$_getTableBody$(), $data$$70_tableBodyRow$$4_tableBodyWidth$$ = this.$_getData$();
      this.$_styleTableContainer$($tableBodyHeight_tableContainer$$1$$);
      this.$_refreshColumnHeaderPadding$();
      this.$_removeTableDimenionsStyling$();
      if(this.$_isTableHeightSet$() || this.$_isTableWidthSet$()) {
        this.$_setHeaderColumnAndCellColumnWidths$();
        $tableHeaderHeight$$ = 0;
        if(null != $tableHeader$$) {
          if(this.$_isTableHeightSet$() || this.$_isTableWidthSet$()) {
            $tableHeader$$.css("position", "absolute"), $tableFooterHeight_tableHeaderRow$$.css("display", "block")
          }
          this.$_useFallbackScrolling$ && ($tableHeader$$.css("position", "absolute"), $tableHeader$$.css("top", "0px"), $tableBodyHeight_tableContainer$$1$$.css("padding-top", $tableHeader$$.height() + "px"));
          $tableHeaderHeight$$ = $tableHeader$$.height();
          $tableBody$$3_totalHeight$$.css("top", $tableHeaderHeight$$ + "px")
        }
        $tableFooterHeight_tableHeaderRow$$ = 0;
        if(null != $scrollbarWidth$$1_tableFooter$$) {
          if(this.$_isTableHeightSet$() || this.$_isTableWidthSet$()) {
            $scrollbarWidth$$1_tableFooter$$.css("position", "absolute"), $scrollbarWidth$$1_tableFooter$$.css("display", "block")
          }
          $tableFooterHeight_tableHeaderRow$$ = $scrollbarWidth$$1_tableFooter$$.height()
        }
        $tableBody$$3_totalHeight$$.css("display", "block");
        if(this.$_isTableHeightSet$() || this.$_isTableWidthSet$()) {
          $minHeight_table$$3_tableDivScroller$$.css("display", "block"), $tableBody$$3_totalHeight$$.css("position", "relative"), this.$_useFallbackScrolling$ ? this.$_isTableHeightSet$() && $tableBodyHeight_tableContainer$$1$$.css("padding-top", $tableHeaderHeight$$ + "px") : ($tableBody$$3_totalHeight$$.css("overflow-y", "auto"), this.$_isTableWidthSet$() ? ($tableBody$$3_totalHeight$$.css("overflow-x", "auto"), $tableBody$$3_totalHeight$$.css("width", this.$_getSpecifiedTableWidth$()), null != 
          $tableHeader$$ && $tableHeader$$.css("width", this.$_getSpecifiedTableWidth$())) : $tableBody$$3_totalHeight$$.css("overflow-x", "hidden"), this.$_isTableHeightSet$() && ($tableBodyHeight_tableContainer$$1$$ = this.$_getSpecifiedTableHeight$() - $tableHeaderHeight$$ - $tableFooterHeight_tableHeaderRow$$, $tableBody$$3_totalHeight$$.css("height", $tableBodyHeight_tableContainer$$1$$ + "px"), $tableBody$$3_totalHeight$$.css("min-height", $tableBodyHeight_tableContainer$$1$$ + "px"))), null != 
          $scrollbarWidth$$1_tableFooter$$ && $scrollbarWidth$$1_tableFooter$$.css("top", $tableHeaderHeight$$ + $tableBody$$3_totalHeight$$.height() + "px")
        }
        $scrollbarWidth$$1_tableFooter$$ = this.$_getScrollbarWidth$();
        this.$_getScrollbarHeight$();
        this.$_isTableWidthSet$() || (null != $data$$70_tableBodyRow$$4_tableBodyWidth$$ && 0 != $data$$70_tableBodyRow$$4_tableBodyWidth$$.size() || null == $tableHeader$$ ? 0 < $scrollbarWidth$$1_tableFooter$$ ? ($data$$70_tableBodyRow$$4_tableBodyWidth$$ = this.$_getTableBodyRow$(0), $tableBody$$3_totalHeight$$.css("width", $data$$70_tableBodyRow$$4_tableBodyWidth$$.width() + $scrollbarWidth$$1_tableFooter$$ + "px")) : $tableBody$$3_totalHeight$$.css("width", "") : $tableBody$$3_totalHeight$$.css("width", 
        $tableHeader$$.width() + "px"));
        $data$$70_tableBodyRow$$4_tableBodyWidth$$ = $tableBody$$3_totalHeight$$.width();
        null != $tableHeader$$ && (0 < $scrollbarWidth$$1_tableFooter$$ ? ($tableHeader$$.css("overflow", "hidden"), $tableHeader$$.css("width", $data$$70_tableBodyRow$$4_tableBodyWidth$$ - $scrollbarWidth$$1_tableFooter$$ + "px")) : $tableHeader$$.css("width", $data$$70_tableBodyRow$$4_tableBodyWidth$$ + "px"));
        this.$_isTableHeightSet$() || (!this.$_isTableWidthSet$() || null == $tableHeader$$ || this.$_useFallbackScrolling$) || ($tableBody$$3_totalHeight$$ = $tableHeaderHeight$$ + $tableFooterHeight_tableHeaderRow$$ + $tableBody$$3_totalHeight$$.height(), $minHeight_table$$3_tableDivScroller$$.css("height", $tableBody$$3_totalHeight$$ + "px"));
        this.$_useFallbackScrolling$ && ($minHeight_table$$3_tableDivScroller$$ = this.$_getTableDivScroller$(), $minHeight_table$$3_tableDivScroller$$.css("overflow", "auto"), this.$_isTableWidthSet$() && $minHeight_table$$3_tableDivScroller$$.css("width", this.$_getSpecifiedTableWidth$()), this.$_isTableHeightSet$() && $minHeight_table$$3_tableDivScroller$$.css("height", this.$_getSpecifiedTableHeight$()), null != $tableHeader$$ && (this.$_tableHeaderWidth$ = $tableHeader$$.width()))
      }else {
        if(null != $data$$70_tableBodyRow$$4_tableBodyWidth$$ && 0 < $data$$70_tableBodyRow$$4_tableBodyWidth$$.size() ? $tableBody$$3_totalHeight$$.css("display", "table-row-group") : $tableBody$$3_totalHeight$$.css("display", "block"), !this.$_isIE$() && ($minHeight_table$$3_tableDivScroller$$ = parseInt($minHeight_table$$3_tableDivScroller$$.css("minHeight"), 10), 0 < $minHeight_table$$3_tableDivScroller$$)) {
          var $tableHeaderHeight$$ = 0;
          null != $tableHeader$$ && ($tableHeaderHeight$$ = $tableHeader$$.height());
          $tableFooterHeight_tableHeaderRow$$ = 0;
          null != $scrollbarWidth$$1_tableFooter$$ && ($tableFooterHeight_tableHeaderRow$$ = $scrollbarWidth$$1_tableFooter$$.height());
          $tableBody$$3_totalHeight$$.css("min-height", $minHeight_table$$3_tableDivScroller$$ - $tableHeaderHeight$$ - $tableFooterHeight_tableHeaderRow$$ + "px")
        }
      }
      this.$_refreshTableMessagingPosition$()
    }, $_refreshTableFooter$:function() {
      var $tableFooter$$1$$ = this.$_getTableFooter$();
      $tableFooter$$1$$ || ($tableFooter$$1$$ = this.$_createTableFooter$(), $tableFooter$$1$$.empty());
      var $footerContent_footerRenderer$$1$$ = this.options.footerRenderer;
      $footerContent_footerRenderer$$1$$ && ($footerContent_footerRenderer$$1$$ = $footerContent_footerRenderer$$1$$({footerContext:this.$_getRendererContextObject$(null, $tableFooter$$1$$[0])}), null != $footerContent_footerRenderer$$1$$ ? $tableFooter$$1$$.append($footerContent_footerRenderer$$1$$) : ($tableFooter$$1$$ = $$$$8$$(this.$_getTable$().children("tfoot")[0]), $tableFooter$$1$$.addClass(this.$_CSS_CLASSES$.$_TABLE_FOOTER_CLASS$)))
    }, $_refreshTableHeader$:function() {
      var $columns$$10$$ = this.$_getColumnDefs$();
      if(!this.$_getTableHeader$()) {
        if(this.$_isTableHeaderless$()) {
          return
        }
        this.$_createTableHeader$()
      }
      var $tableHeaderRow$$1$$ = this.$_getTableHeaderRow$();
      $tableHeaderRow$$1$$.empty();
      if($columns$$10$$ && 0 < $columns$$10$$.length) {
        var $i$$168_tableHeaderAccSelectRowColumn$$ = this.$_createTableHeaderAccSelectRowColumn$();
        $tableHeaderRow$$1$$.append($i$$168_tableHeaderAccSelectRowColumn$$);
        this.$_checkColumnRendererMetadata$("header");
        for(var $column$$11_headerColumnContent$$, $headerRenderer$$, $headerColumn$$4$$, $i$$168_tableHeaderAccSelectRowColumn$$ = 0;$i$$168_tableHeaderAccSelectRowColumn$$ < $columns$$10$$.length;$i$$168_tableHeaderAccSelectRowColumn$$++) {
          $column$$11_headerColumnContent$$ = $columns$$10$$[$i$$168_tableHeaderAccSelectRowColumn$$], $headerRenderer$$ = this.$_getColumnRenderer$($i$$168_tableHeaderAccSelectRowColumn$$, "header"), $headerColumn$$4$$ = this.$_createTableHeaderColumn$($i$$168_tableHeaderAccSelectRowColumn$$), this.$_insertTableHeaderColumn$($i$$168_tableHeaderAccSelectRowColumn$$, $headerColumn$$4$$), $headerRenderer$$ && ($column$$11_headerColumnContent$$ = $headerRenderer$$({headerContext:this.$_getRendererContextObject$(null, 
          $headerColumn$$4$$[0]), column:$column$$11_headerColumnContent$$}), null != $column$$11_headerColumnContent$$ ? ($headerColumn$$4$$.empty(), $headerColumn$$4$$.append($column$$11_headerColumnContent$$)) : ($headerColumn$$4$$ = $$$$8$$($tableHeaderRow$$1$$.children(":not(." + this.$_CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$ + ")")[$i$$168_tableHeaderAccSelectRowColumn$$]), this.$_setTableHeaderColumnAttributes$($i$$168_tableHeaderAccSelectRowColumn$$, $headerColumn$$4$$), this.$_styleTableHeaderColumn$($i$$168_tableHeaderAccSelectRowColumn$$, 
          $headerColumn$$4$$))), this.$_createTableHeaderColumnAccSelect$($i$$168_tableHeaderAccSelectRowColumn$$)
        }
        this.$_renderedTableHeaderColumns$ = !0
      }
    }, $_refreshTableMessagingPosition$:function() {
      var $tableContainer$$2_tableHeaderHeight$$1$$ = this.$_getTableContainer$(), $tableHeader$$2$$ = this.$_getTableHeader$(), $tableStatusMessage$$ = this.$_getTableStatusMessage$(), $tableNoDataMessage$$ = this.$_getTableNoDataMessage$();
      $tableStatusMessage$$.css("top", $tableContainer$$2_tableHeaderHeight$$1$$.height() / 2 + "px");
      $tableStatusMessage$$.css("left", ($tableContainer$$2_tableHeaderHeight$$1$$.width() - $tableStatusMessage$$.width()) / 2 + "px");
      null != $tableHeader$$2$$ ? ($tableContainer$$2_tableHeaderHeight$$1$$ = $tableHeader$$2$$.height(), $tableNoDataMessage$$.css("top", $tableContainer$$2_tableHeaderHeight$$1$$ + "px")) : $tableNoDataMessage$$.css("top", "0px")
    }, $_registerCustomEvents$:function() {
      var $jqEventSpecial$$ = $$$$8$$.event.special;
      $jqEventSpecial$$.ojtableactiverow = {handle:function $$jqEventSpecial$$$ojtableactiverow$handle$($event$$106$$, $JSCompiler_OptimizeArgumentsArray_p0$$) {
        return $event$$106$$.handleObj.handler.apply(this, [$event$$106$$, $JSCompiler_OptimizeArgumentsArray_p0$$])
      }};
      $jqEventSpecial$$.ojtablepreactiverow = {handle:function $$jqEventSpecial$$$ojtablepreactiverow$handle$($event$$107$$, $JSCompiler_OptimizeArgumentsArray_p1$$) {
        return $event$$107$$.handleObj.handler.apply(this, [$event$$107$$, $JSCompiler_OptimizeArgumentsArray_p1$$])
      }};
      $jqEventSpecial$$.ojtablescroll = {handle:function $$jqEventSpecial$$$ojtablescroll$handle$($event$$108$$, $JSCompiler_OptimizeArgumentsArray_p2$$) {
        return $event$$108$$.handleObj.handler.apply(this, [$event$$108$$, $JSCompiler_OptimizeArgumentsArray_p2$$])
      }};
      $jqEventSpecial$$.ojtableselect = {handle:function $$jqEventSpecial$$$ojtableselect$handle$($event$$109$$, $JSCompiler_OptimizeArgumentsArray_p3$$) {
        return $event$$109$$.handleObj.handler.apply(this, [$event$$109$$, $JSCompiler_OptimizeArgumentsArray_p3$$])
      }}
    }, $_registerDataSourceEventListeners$:function() {
      var $data$$71$$ = this.$_getData$();
      if(null != $data$$71$$) {
        this.$_dataSourceEventHandlers$ = [];
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$8$$.$RowSet$.$EventType$.REQUEST, eventHandler:this.$_handleDataFetchStart$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$8$$.$RowSet$.$EventType$.SYNC, eventHandler:this.$_handleDataFetchEnd$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$8$$.$RowSet$.$EventType$.SORT, eventHandler:this.$_handleDataSort$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$8$$.$RowSet$.$EventType$.ADD, eventHandler:this.$_handleDataRowAdd$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$8$$.$RowSet$.$EventType$.REMOVE, eventHandler:this.$_handleDataRowRemove$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$8$$.$RowSet$.$EventType$.CHANGE, eventHandler:this.$_handleDataRowChange$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$8$$.$RowSet$.$EventType$.RESET, eventHandler:this.$_handleDataReset$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$8$$.$RowSet$.$EventType$.ERROR, eventHandler:this.$_handleDataError$.bind(this)});
        var $i$$169$$;
        for($i$$169$$ = 0;$i$$169$$ < this.$_dataSourceEventHandlers$.length;$i$$169$$++) {
          $data$$71$$.on(this.$_dataSourceEventHandlers$[$i$$169$$].eventType, this.$_dataSourceEventHandlers$[$i$$169$$].eventHandler)
        }
      }
    }, $_registerDomEventListeners$:function() {
      (this.$_isTableWidthSet$() || this.$_isTableHeightSet$()) && this.$_getScroller$().scroll(function($event$$110$$) {
        var $scrollLeft$$ = $$$$8$$($event$$110$$.target).scrollLeft(), $maxScrollLeft_scrollTop$$1$$ = $$$$8$$($event$$110$$.target)[0].scrollWidth - $$$$8$$($event$$110$$.target)[0].clientWidth;
        "rtl" === this._GetReadingDirection() && ($scrollLeft$$ = $maxScrollLeft_scrollTop$$1$$ - $scrollLeft$$);
        var $maxScrollLeft_scrollTop$$1$$ = $$$$8$$($event$$110$$.target).scrollTop(), $tableHeader$$3_tableHeaderRow$$2$$ = this.$_getTableHeader$();
        $tableHeader$$3_tableHeaderRow$$2$$ && (this.$_useFallbackScrolling$ ? ("rtl" === this._GetReadingDirection() ? $tableHeader$$3_tableHeaderRow$$2$$.css("right", "-" + $scrollLeft$$ + "px") : $tableHeader$$3_tableHeaderRow$$2$$.css("left", "-" + $scrollLeft$$ + "px"), $tableHeader$$3_tableHeaderRow$$2$$.css("width", this.$_tableHeaderWidth$ + $scrollLeft$$ + "px")) : ($tableHeader$$3_tableHeaderRow$$2$$ = this.$_getTableHeaderRow$()) && ("rtl" === this._GetReadingDirection() ? $tableHeader$$3_tableHeaderRow$$2$$.css("right", 
        "-" + $scrollLeft$$ + "px") : $tableHeader$$3_tableHeaderRow$$2$$.css("left", "-" + $scrollLeft$$ + "px")), this._trigger("scroll", $event$$110$$, {scrollLeft:$$$$8$$($event$$110$$.target).scrollLeft(), scrollTop:$maxScrollLeft_scrollTop$$1$$}))
      }.bind(this))
    }, $_registerResizeListener$:function($element$$38$$) {
      if(!this.$_isResizeListenerAdded$) {
        var $self$$45$$ = this;
        $oj$$8$$.$DomUtils$.$addResizeListener$($element$$38$$[0], function() {
          $self$$45$$.$_refreshTableDimensions$()
        });
        this.$_isResizeListenerAdded$ = !0
      }
    }, $_removeHeaderColumnAndCellColumnWidths$:function() {
      var $data$$72_firstRowIdx$$ = this.$_getData$(), $columns$$11$$ = this.$_getColumnDefs$(), $i$$170_tableBodyRows$$2$$, $headerColumn$$5_tableBodyCell$$3$$;
      for($i$$170_tableBodyRows$$2$$ = 0;$i$$170_tableBodyRows$$2$$ < $columns$$11$$.length;$i$$170_tableBodyRows$$2$$++) {
        $headerColumn$$5_tableBodyCell$$3$$ = this.$_getTableHeaderColumn$($i$$170_tableBodyRows$$2$$), null != $headerColumn$$5_tableBodyCell$$3$$ && $headerColumn$$5_tableBodyCell$$3$$.css("min-width", "")
      }
      if(null != $data$$72_firstRowIdx$$ && 0 < $data$$72_firstRowIdx$$.size() && ($i$$170_tableBodyRows$$2$$ = this.$_getTableBodyRows$(), null != $i$$170_tableBodyRows$$2$$ && 0 < $i$$170_tableBodyRows$$2$$.length)) {
        for($data$$72_firstRowIdx$$ = this.$_getElementRowIdx$($i$$170_tableBodyRows$$2$$[0]), $i$$170_tableBodyRows$$2$$ = 0;$i$$170_tableBodyRows$$2$$ < $columns$$11$$.length;$i$$170_tableBodyRows$$2$$++) {
          $headerColumn$$5_tableBodyCell$$3$$ = this.$_getTableBodyCell$($data$$72_firstRowIdx$$, $i$$170_tableBodyRows$$2$$), $headerColumn$$5_tableBodyCell$$3$$.css("min-width", "")
        }
      }
    }, $_removeKeyboardKey$:function($keyCode$$2$$) {
      var $keyboardKeys$$2$$ = this.$_getKeyboardKeys$(), $i$$171$$;
      for($i$$171$$ = 0;$i$$171$$ < $keyboardKeys$$2$$.length;$i$$171$$++) {
        $keyboardKeys$$2$$[$i$$171$$] == $keyCode$$2$$ && $keyboardKeys$$2$$.splice($i$$171$$, 1)
      }
    }, $_removeTableDimenionsStyling$:function() {
      var $table$$4$$ = this.$_getTable$(), $tableHeader$$4$$ = this.$_getTableHeader$(), $tableHeaderRow$$3$$ = this.$_getTableHeaderRow$(), $tableBody$$4$$ = this.$_getTableBody$();
      null != $tableHeader$$4$$ && ($tableHeader$$4$$.css("position", ""), this.$_useFallbackScrolling$ && $tableHeader$$4$$.css("top", ""), $tableHeaderRow$$3$$.css("display", ""));
      $table$$4$$.css("display", "");
      $tableBody$$4$$.css("display", "");
      $tableBody$$4$$.css("position", "");
      $tableBody$$4$$.css("overflow-y", "");
      $tableBody$$4$$.css("overflow-x", "");
      $tableBody$$4$$.css("width", "");
      this.$_removeHeaderColumnAndCellColumnWidths$()
    }, $_scrollColumnIntoViewport$:function($columnIdx$$16_scrollbarWidth$$2$$) {
      var $tableBody$$5$$ = this.$_getTableBody$(), $headerColumnRect_tableHeaderColumn$$3$$ = this.$_getTableHeaderColumn$($columnIdx$$16_scrollbarWidth$$2$$);
      if($headerColumnRect_tableHeaderColumn$$3$$) {
        $columnIdx$$16_scrollbarWidth$$2$$ = this.$_getScrollbarWidth$();
        var $headerColumnRect_tableHeaderColumn$$3$$ = $headerColumnRect_tableHeaderColumn$$3$$.get(0).getBoundingClientRect(), $tableBodyRect$$ = $tableBody$$5$$.get(0).getBoundingClientRect(), $scrollLeftDiff_scrolledLeft$$ = !1;
        $headerColumnRect_tableHeaderColumn$$3$$.left < $tableBodyRect$$.left && ($scrollLeftDiff_scrolledLeft$$ = $tableBodyRect$$.left - $headerColumnRect_tableHeaderColumn$$3$$.left, $tableBody$$5$$.scrollLeft($tableBody$$5$$.scrollLeft() - $scrollLeftDiff_scrolledLeft$$), $scrollLeftDiff_scrolledLeft$$ = !0);
        $headerColumnRect_tableHeaderColumn$$3$$.right > $tableBodyRect$$.right - $columnIdx$$16_scrollbarWidth$$2$$ && !$scrollLeftDiff_scrolledLeft$$ && ($scrollLeftDiff_scrolledLeft$$ = $headerColumnRect_tableHeaderColumn$$3$$.right - $tableBodyRect$$.right + $columnIdx$$16_scrollbarWidth$$2$$, $tableBody$$5$$.scrollLeft($tableBody$$5$$.scrollLeft() + $scrollLeftDiff_scrolledLeft$$))
      }
    }, $_scrollRowIntoViewport$:function($rowIdx$$16_scrollTopDiff_scrollbarHeight$$2$$) {
      var $rowRect_tableBodyRow$$5$$ = this.$_getTableBodyRow$($rowIdx$$16_scrollTopDiff_scrollbarHeight$$2$$);
      $rowIdx$$16_scrollTopDiff_scrollbarHeight$$2$$ = this.$_getScrollbarHeight$();
      var $rowRect_tableBodyRow$$5$$ = $rowRect_tableBodyRow$$5$$.get(0).getBoundingClientRect(), $scrollingElement$$ = this.$_getScroller$(), $scrollingElementRect$$ = $scrollingElement$$.get(0).getBoundingClientRect(), $scrolledDown$$ = !1;
      $rowRect_tableBodyRow$$5$$.bottom > $scrollingElementRect$$.bottom - $rowIdx$$16_scrollTopDiff_scrollbarHeight$$2$$ && ($rowIdx$$16_scrollTopDiff_scrollbarHeight$$2$$ = $rowRect_tableBodyRow$$5$$.bottom - $scrollingElementRect$$.bottom + $rowIdx$$16_scrollTopDiff_scrollbarHeight$$2$$, $scrollingElement$$.scrollTop($scrollingElement$$.scrollTop() + $rowIdx$$16_scrollTopDiff_scrollbarHeight$$2$$), $scrolledDown$$ = !0);
      $rowRect_tableBodyRow$$5$$.top < $scrollingElementRect$$.top && !$scrolledDown$$ && ($rowIdx$$16_scrollTopDiff_scrollbarHeight$$2$$ = $scrollingElementRect$$.top - $rowRect_tableBodyRow$$5$$.top, $scrollingElement$$.scrollTop($scrollingElement$$.scrollTop() - $rowIdx$$16_scrollTopDiff_scrollbarHeight$$2$$))
    }, $_setElementColumnIdx$:function($columnIdx$$17$$, $element$$39$$) {
      $$$$8$$($element$$39$$).attr("data-oj-columnIdx", $columnIdx$$17$$)
    }, $_setElementRowIdx$:function($rowIdx$$17$$, $element$$40$$) {
      $$$$8$$($element$$40$$).attr("data-oj-rowIdx", $rowIdx$$17$$)
    }, $_setElementRowKey$:function($rowKey$$21$$, $element$$41$$) {
      $$$$8$$($element$$41$$).attr("data-oj-rowKey", $rowKey$$21$$)
    }, $_setHeaderColumnAndCellColumnWidths$:function() {
      var $data$$73_firstRowIdx$$1$$ = this.$_getData$(), $columns$$12$$ = this.$_getColumnDefs$(), $columnWidths$$1$$ = [], $columnPaddingWidths$$1$$ = [], $i$$172_tableBodyRows$$3$$, $adjustedColumnWidth$$1_headerColumn$$6_headerColumnRowDiv$$2_tableBodyCellPaddingWidth$$1$$, $headerColumnTextDivHeight$$1_tableBodyCell$$4$$, $headerColumnTextDiv$$1$$;
      for($i$$172_tableBodyRows$$3$$ = 0;$i$$172_tableBodyRows$$3$$ < $columns$$12$$.length;$i$$172_tableBodyRows$$3$$++) {
        $adjustedColumnWidth$$1_headerColumn$$6_headerColumnRowDiv$$2_tableBodyCellPaddingWidth$$1$$ = this.$_getTableHeaderColumn$($i$$172_tableBodyRows$$3$$), null != $adjustedColumnWidth$$1_headerColumn$$6_headerColumnRowDiv$$2_tableBodyCellPaddingWidth$$1$$ && ($columnWidths$$1$$[$i$$172_tableBodyRows$$3$$] = $adjustedColumnWidth$$1_headerColumn$$6_headerColumnRowDiv$$2_tableBodyCellPaddingWidth$$1$$.width(), $columnPaddingWidths$$1$$[$i$$172_tableBodyRows$$3$$] = parseInt($adjustedColumnWidth$$1_headerColumn$$6_headerColumnRowDiv$$2_tableBodyCellPaddingWidth$$1$$.css("padding-right"), 
        10) + parseInt($adjustedColumnWidth$$1_headerColumn$$6_headerColumnRowDiv$$2_tableBodyCellPaddingWidth$$1$$.css("padding-left"), 10), $headerColumnTextDivHeight$$1_tableBodyCell$$4$$ = null, ($headerColumnTextDiv$$1$$ = $adjustedColumnWidth$$1_headerColumn$$6_headerColumnRowDiv$$2_tableBodyCellPaddingWidth$$1$$.find("." + this.$_CSS_CLASSES$.$_COLUMN_HEADER_TEXT_CLASS$)) && 0 < $headerColumnTextDiv$$1$$.length && ($headerColumnTextDivHeight$$1_tableBodyCell$$4$$ = $headerColumnTextDiv$$1$$.get(0).clientHeight), 
        null != $headerColumnTextDivHeight$$1_tableBodyCell$$4$$ && ($adjustedColumnWidth$$1_headerColumn$$6_headerColumnRowDiv$$2_tableBodyCellPaddingWidth$$1$$ = $adjustedColumnWidth$$1_headerColumn$$6_headerColumnRowDiv$$2_tableBodyCellPaddingWidth$$1$$.find("." + this.$_CSS_CLASSES$.$_COLUMN_HEADER_ROW_CLASS$), $adjustedColumnWidth$$1_headerColumn$$6_headerColumnRowDiv$$2_tableBodyCellPaddingWidth$$1$$.css("min-height", $headerColumnTextDivHeight$$1_tableBodyCell$$4$$ + "px")))
      }
      for($i$$172_tableBodyRows$$3$$ = 0;$i$$172_tableBodyRows$$3$$ < $columns$$12$$.length;$i$$172_tableBodyRows$$3$$++) {
        $adjustedColumnWidth$$1_headerColumn$$6_headerColumnRowDiv$$2_tableBodyCellPaddingWidth$$1$$ = this.$_getTableHeaderColumn$($i$$172_tableBodyRows$$3$$), null != $adjustedColumnWidth$$1_headerColumn$$6_headerColumnRowDiv$$2_tableBodyCellPaddingWidth$$1$$ && $adjustedColumnWidth$$1_headerColumn$$6_headerColumnRowDiv$$2_tableBodyCellPaddingWidth$$1$$.css("min-width", $columnWidths$$1$$[$i$$172_tableBodyRows$$3$$] + "px")
      }
      if(null != $data$$73_firstRowIdx$$1$$ && 0 < $data$$73_firstRowIdx$$1$$.size() && ($i$$172_tableBodyRows$$3$$ = this.$_getTableBodyRows$(), null != $i$$172_tableBodyRows$$3$$ && 0 < $i$$172_tableBodyRows$$3$$.length)) {
        for($data$$73_firstRowIdx$$1$$ = this.$_getElementRowIdx$($i$$172_tableBodyRows$$3$$[0]), $i$$172_tableBodyRows$$3$$ = 0;$i$$172_tableBodyRows$$3$$ < $columns$$12$$.length;$i$$172_tableBodyRows$$3$$++) {
          $headerColumnTextDivHeight$$1_tableBodyCell$$4$$ = this.$_getTableBodyCell$($data$$73_firstRowIdx$$1$$, $i$$172_tableBodyRows$$3$$), $adjustedColumnWidth$$1_headerColumn$$6_headerColumnRowDiv$$2_tableBodyCellPaddingWidth$$1$$ = parseInt($headerColumnTextDivHeight$$1_tableBodyCell$$4$$.css("padding-right"), 10) + parseInt($headerColumnTextDivHeight$$1_tableBodyCell$$4$$.css("padding-left"), 10), $adjustedColumnWidth$$1_headerColumn$$6_headerColumnRowDiv$$2_tableBodyCellPaddingWidth$$1$$ = 
          $adjustedColumnWidth$$1_headerColumn$$6_headerColumnRowDiv$$2_tableBodyCellPaddingWidth$$1$$ > $columnPaddingWidths$$1$$[$i$$172_tableBodyRows$$3$$] ? $columnWidths$$1$$[$i$$172_tableBodyRows$$3$$] - $adjustedColumnWidth$$1_headerColumn$$6_headerColumnRowDiv$$2_tableBodyCellPaddingWidth$$1$$ + $columnPaddingWidths$$1$$[$i$$172_tableBodyRows$$3$$] : $columnWidths$$1$$[$i$$172_tableBodyRows$$3$$] + $columnPaddingWidths$$1$$[$i$$172_tableBodyRows$$3$$] - $adjustedColumnWidth$$1_headerColumn$$6_headerColumnRowDiv$$2_tableBodyCellPaddingWidth$$1$$, 
          $headerColumnTextDivHeight$$1_tableBodyCell$$4$$.css("min-width", $adjustedColumnWidth$$1_headerColumn$$6_headerColumnRowDiv$$2_tableBodyCellPaddingWidth$$1$$ + "px")
        }
      }
    }, $_setHeaderColumnFocus$:function($columnIdx$$18$$, $focused$$, $element$$42$$) {
      if($focused$$) {
        var $focusedHeaderColumnIdx$$4$$ = this.$_getFocusedHeaderColumnIdx$();
        null != $focusedHeaderColumnIdx$$4$$ && $focusedHeaderColumnIdx$$4$$ != $columnIdx$$18$$ && this.$_setHeaderColumnFocus$($focusedHeaderColumnIdx$$4$$, !1, $element$$42$$);
        this.$_clearFocusedRow$();
        this.$_clearSelectedRows$();
        this.$_scrollColumnIntoViewport$($columnIdx$$18$$)
      }
      this.$_setHeaderColumnState$($columnIdx$$18$$, {$focused$:$focused$$}, $element$$42$$)
    }, $_setHeaderColumnSelection$:function($accSelectionColumn_columnIdx$$19$$, $selected$$6$$, $element$$43$$, $event$$111$$) {
      if(this.$_getColumnSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ || this.$_getColumnSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_MULTIPLE$) {
        if(isNaN($accSelectionColumn_columnIdx$$19$$) || 0 > $accSelectionColumn_columnIdx$$19$$) {
          throw"Error: Invalid column selection value: " + $accSelectionColumn_columnIdx$$19$$;
        }
        this.$_getColumnSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ && $selected$$6$$ && this.$_clearSelectedHeaderColumns$();
        this.$_setHeaderColumnState$($accSelectionColumn_columnIdx$$19$$, {selected:$selected$$6$$}, $element$$43$$, $event$$111$$);
        this.$_setLastHeaderColumnSelection$($accSelectionColumn_columnIdx$$19$$, $selected$$6$$);
        $accSelectionColumn_columnIdx$$19$$ = this.$_getTableHeaderColumnAccSelect$($accSelectionColumn_columnIdx$$19$$);
        $$$$8$$($accSelectionColumn_columnIdx$$19$$.children("." + this.$_CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_COLUMN_CLASS$)[0]).prop("checked", $selected$$6$$)
      }
    }, $_setHeaderColumnState$:function($columnIdx$$20$$, $selected$$7_state$$, $element$$44_headerColumn$$7$$, $event$$112$$) {
      if($element$$44_headerColumn$$7$$ = this.$_getTableHeaderColumn$($columnIdx$$20$$)) {
        var $focused$$1$$ = $selected$$7_state$$.$focused$;
        $selected$$7_state$$ = $selected$$7_state$$.selected;
        if(null != $selected$$7_state$$) {
          var $selectionChanged$$ = !1;
          $element$$44_headerColumn$$7$$.hasClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$) != $selected$$7_state$$ && ($selected$$7_state$$ ? $element$$44_headerColumn$$7$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$) : $element$$44_headerColumn$$7$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$), $selectionChanged$$ = !0);
          $selectionChanged$$ && this._trigger("select", $event$$112$$, {column:$columnIdx$$20$$, selectionAdded:$selected$$7_state$$})
        }
        null != $focused$$1$$ && ($focused$$1$$ ? ($element$$44_headerColumn$$7$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_FOCUS$), this.$_showTableHeaderColumnSortLink$($columnIdx$$20$$, !0), this.$_showTableHeaderColumnSortLink$($columnIdx$$20$$, !1)) : ($element$$44_headerColumn$$7$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_FOCUS$), this.$_hideTableHeaderColumnSortLink$($columnIdx$$20$$, !0), this.$_hideTableHeaderColumnSortLink$($columnIdx$$20$$, !1)));
        this.$_updateHeaderColumnCellsClass$($columnIdx$$20$$)
      }
    }, $_setLastHeaderColumnSelection$:function($columnIdx$$21$$, $selected$$8$$) {
      this.$_lastSelectedColumnIdxArray$ || (this.$_lastSelectedColumnIdxArray$ = []);
      var $i$$173$$;
      for($i$$173$$ = 0;$i$$173$$ < this.$_lastSelectedColumnIdxArray$.length;$i$$173$$++) {
        if(this.$_lastSelectedColumnIdxArray$[$i$$173$$] == $columnIdx$$21$$) {
          this.$_lastSelectedColumnIdxArray$.splice($i$$173$$, 1);
          break
        }
      }
      $selected$$8$$ && this.$_lastSelectedColumnIdxArray$.push($columnIdx$$21$$)
    }, $_setLastRowSelection$:function($rowIdx$$18$$, $selected$$9$$) {
      this.$_lastSelectedRowIdxArray$ || (this.$_lastSelectedRowIdxArray$ = []);
      for(var $i$$174$$ = 0;$i$$174$$ < this.$_lastSelectedRowIdxArray$.length;$i$$174$$++) {
        if(this.$_lastSelectedRowIdxArray$[$i$$174$$] == $rowIdx$$18$$) {
          this.$_lastSelectedRowIdxArray$.splice($i$$174$$, 1);
          break
        }
      }
      $selected$$9$$ && this.$_lastSelectedRowIdxArray$.push($rowIdx$$18$$)
    }, $_setRowFocus$:function($rowIdx$$19$$, $focused$$2$$, $element$$45$$) {
      if(-1 == $rowIdx$$19$$) {
        this.$_clearFocusedRow$()
      }else {
        var $tableBodyRow$$6$$ = this.$_getTableBodyRow$($rowIdx$$19$$);
        if($focused$$2$$) {
          var $focusedRowIdx$$4$$ = this.$_getFocusedRowIdx$();
          null != $focusedRowIdx$$4$$ && $focusedRowIdx$$4$$ != $rowIdx$$19$$ && this.$_setRowFocus$($focusedRowIdx$$4$$, !1, $element$$45$$);
          this.activeRow($rowIdx$$19$$) == $rowIdx$$19$$ && ($tableBodyRow$$6$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_FOCUS$), this.$_scrollRowIntoViewport$($rowIdx$$19$$), this.$_updateRowCellsClass$($rowIdx$$19$$, {$focused$:!0, hover:!1}), this.$_clearFocusedHeaderColumn$(), this.$_clearSelectedHeaderColumns$(), this.$_setTableNavigationMode$(!0))
        }else {
          $tableBodyRow$$6$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_FOCUS$)
        }
        this.$_updateRowCellsClass$($rowIdx$$19$$, {$focused$:$focused$$2$$})
      }
    }, $_setRowSelection$:function($accSelectionCell_rowIdx$$20$$, $selected$$10$$, $element$$46_tableBodyRow$$7$$, $event$$113$$) {
      if(this.$_getRowSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ || this.$_getRowSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_MULTIPLE$) {
        if(isNaN($accSelectionCell_rowIdx$$20$$) || 0 > $accSelectionCell_rowIdx$$20$$) {
          throw"Error: Invalid row selection value: " + $accSelectionCell_rowIdx$$20$$;
        }
        this.$_getRowSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ && $selected$$10$$ && this.$_clearSelectedRows$();
        $element$$46_tableBodyRow$$7$$ = this.$_getTableBodyRow$($accSelectionCell_rowIdx$$20$$);
        var $selectionChanged$$1$$ = !1;
        $element$$46_tableBodyRow$$7$$.hasClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$) != $selected$$10$$ && ($selected$$10$$ ? $element$$46_tableBodyRow$$7$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$) : $element$$46_tableBodyRow$$7$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$), $selectionChanged$$1$$ = !0);
        $selectionChanged$$1$$ && this._trigger("select", $event$$113$$, {row:$accSelectionCell_rowIdx$$20$$, selectionAdded:$selected$$10$$});
        $selectionChanged$$1$$ && ($selected$$10$$ ? this.$_updateRowCellsClass$($accSelectionCell_rowIdx$$20$$, {hover:!1, $focused$:!1, selected:!0}) : this.$_updateRowCellsClass$($accSelectionCell_rowIdx$$20$$, {selected:!1}));
        this.$_setLastRowSelection$($accSelectionCell_rowIdx$$20$$, $selected$$10$$);
        $accSelectionCell_rowIdx$$20$$ = this.$_getTableBodyCellAccSelect$($element$$46_tableBodyRow$$7$$);
        $$$$8$$($accSelectionCell_rowIdx$$20$$.children("." + this.$_CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_ROW_CLASS$)[0]).prop("checked", $selected$$10$$)
      }
    }, $_setTableNavigationMode$:$JSCompiler_set$$("$_tableNavMode$"), $_showNoDataMessage$:function() {
      this.$_getTableNoDataMessage$().css("display", "inline")
    }, $_showStatusMessage$:function() {
      this.$_getTableStatusMessage$().css("display", "inline")
    }, $_showTableHeaderColumnSortLink$:function($columnIdx$$22$$, $ascending$$3$$) {
      if(this.$_getColumnDefs$()[$columnIdx$$22$$].sortable == this.$_OPTION_ENABLED$) {
        var $headerColumnAscLink$$2_headerColumnDscLink$$2_tableHeaderColumn$$4$$ = this.$_getTableHeaderColumn$($columnIdx$$22$$);
        $headerColumnAscLink$$2_headerColumnDscLink$$2_tableHeaderColumn$$4$$ && ($headerColumnAscLink$$2_headerColumnDscLink$$2_tableHeaderColumn$$4$$ = $ascending$$3$$ ? $headerColumnAscLink$$2_headerColumnDscLink$$2_tableHeaderColumn$$4$$.find("." + this.$_CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$) : $headerColumnAscLink$$2_headerColumnDscLink$$2_tableHeaderColumn$$4$$.find("." + this.$_CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$), $headerColumnAscLink$$2_headerColumnDscLink$$2_tableHeaderColumn$$4$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), 
        $headerColumnAscLink$$2_headerColumnDscLink$$2_tableHeaderColumn$$4$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$))
      }
    }, $_updateHeaderColumnCellsClass$:function($columnIdx$$23$$) {
      var $selected$$11$$ = this.$_getHeaderColumnState$($columnIdx$$23$$).selected, $data$$74$$ = this.$_getData$(), $i$$175$$, $tableBodyCell$$5$$;
      for($i$$175$$ = 0;$i$$175$$ < $data$$74$$.size();$i$$175$$++) {
        $tableBodyCell$$5$$ = this.$_getTableBodyCell$($i$$175$$, $columnIdx$$23$$), $selected$$11$$ ? $$$$8$$($tableBodyCell$$5$$).addClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$) : $$$$8$$($tableBodyCell$$5$$).removeClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$)
      }
    }, $_updateRowCellsClass$:function($rowIdx$$21$$, $state$$2$$) {
      var $tableBodyCells$$2$$ = this.$_getTableBodyCells$($rowIdx$$21$$), $focused$$3$$ = $state$$2$$.$focused$, $selected$$12$$ = $state$$2$$.selected, $hover$$ = $state$$2$$.hover;
      if($tableBodyCells$$2$$) {
        if(null != $hover$$) {
          var $i$$176$$;
          for($i$$176$$ = 0;$i$$176$$ < $tableBodyCells$$2$$.length;$i$$176$$++) {
            $hover$$ ? $$$$8$$($tableBodyCells$$2$$[$i$$176$$]).addClass(this.$_MARKER_STYLE_CLASSES$.$_HOVER$) : $$$$8$$($tableBodyCells$$2$$[$i$$176$$]).removeClass(this.$_MARKER_STYLE_CLASSES$.$_HOVER$)
          }
        }
        if(null != $focused$$3$$) {
          for($i$$176$$ = 0;$i$$176$$ < $tableBodyCells$$2$$.length;$i$$176$$++) {
            $focused$$3$$ ? $$$$8$$($tableBodyCells$$2$$[$i$$176$$]).addClass(this.$_MARKER_STYLE_CLASSES$.$_FOCUS$) : $$$$8$$($tableBodyCells$$2$$[$i$$176$$]).removeClass(this.$_MARKER_STYLE_CLASSES$.$_FOCUS$)
          }
        }
        if(null != $selected$$12$$) {
          for($i$$176$$ = 0;$i$$176$$ < $tableBodyCells$$2$$.length;$i$$176$$++) {
            $selected$$12$$ ? $$$$8$$($tableBodyCells$$2$$[$i$$176$$]).addClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$) : $$$$8$$($tableBodyCells$$2$$[$i$$176$$]).removeClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$)
          }
        }
      }
    }, $_createContextMenu$:function() {
      var $menuContainer$$1$$ = null, $listItems$$1_sortMenu$$1$$ = null, $self$$46$$ = this;
      null != this.$_getData$() && (null == this.options.contextMenu.menu ? ($menuContainer$$1$$ = $$$$8$$(document.createElement("ul")), $menuContainer$$1$$.css("display", "none"), $menuContainer$$1$$.attr("id", this.$_getTable$().id + "contextmenu"), this.$_getTableContainer$().append($menuContainer$$1$$), $listItems$$1_sortMenu$$1$$ = this.$_createContextMenuItem$("sort"), $menuContainer$$1$$.append($listItems$$1_sortMenu$$1$$), $menuContainer$$1$$.ojMenu(), this._setOption("contextMenu", {menu:$menuContainer$$1$$.attr("id")})) : 
      ($menuContainer$$1$$ = $$$$8$$("#" + this.options.contextMenu.menu), $listItems$$1_sortMenu$$1$$ = $menuContainer$$1$$.find("[data-oj-command]"), $listItems$$1_sortMenu$$1$$.each(function() {
        var $command$$7$$;
        0 === $$$$8$$(this).children("a").length && ($command$$7$$ = $$$$8$$(this).attr("data-oj-command").split("-"), $$$$8$$(this).replaceWith($self$$46$$.$_createContextMenuItem$($command$$7$$[$command$$7$$.length - 1])))
      }), $menuContainer$$1$$.ojMenu("refresh")), $menuContainer$$1$$.on("ojbeforeshow", this.$_handleContextMenuBeforeShow$.bind(this)), $menuContainer$$1$$.on("ojselect", this.$_handleContextMenuSelect$.bind(this)), this.$_menuContainer$ = $menuContainer$$1$$);
      return $menuContainer$$1$$
    }, $_createContextMenuItem$:function($command$$8$$) {
      return"sort" === $command$$8$$ ? $$$$8$$(this.$_createContextMenuListItem$($command$$8$$)).append($$$$8$$("\x3cul\x3e\x3c/ul\x3e").append($$$$8$$(this.$_createContextMenuListItem$("sortAsc"))).append($$$$8$$(this.$_createContextMenuListItem$("sortDsc")))) : -1 != Object.keys(this.$resources$.$commands$).indexOf($command$$8$$) ? $$$$8$$(this.$_createContextMenuListItem$($command$$8$$)) : null
    }, $_createContextMenuListItem$:function($command$$9$$) {
      var $contextMenuListItem$$ = $$$$8$$(document.createElement("li"));
      $contextMenuListItem$$.attr("data-oj-command", "oj-table-" + $command$$9$$);
      $contextMenuListItem$$.append(this.$_createContextMenuLabel$($command$$9$$));
      return $contextMenuListItem$$
    }, $_createContextMenuLabel$:function($command$$10$$) {
      var $contextMenuLabel$$ = $$$$8$$(document.createElement("a"));
      $contextMenuLabel$$.attr("href", "#");
      var $commandString$$ = null;
      "sort" == $command$$10$$ ? $commandString$$ = this.$getTranslatedString$("labelSort") : "sortAsc" == $command$$10$$ ? $commandString$$ = this.$getTranslatedString$("labelSortAsc") : "sortDsc" == $command$$10$$ && ($commandString$$ = this.$getTranslatedString$("labelSortDsc"));
      $contextMenuLabel$$.append($commandString$$);
      return $contextMenuLabel$$
    }, $_createTableBody$:function() {
      var $table$$5$$ = this.$_getTable$(), $tableBody$$6$$ = $$$$8$$(document.createElement("tbody"));
      $tableBody$$6$$.addClass(this.$_CSS_CLASSES$.$_TABLE_BODY_CLASS$);
      $table$$5$$.append($tableBody$$6$$);
      $tableBody$$6$$.attr($oj$$8$$.Components.$_OJ_CONTAINER_ATTR$, this.widgetName);
      return $tableBody$$6$$
    }, $_createTableBodyCell$:function($rowIdx$$22$$, $columnIdx$$24$$) {
      var $tableBodyCell$$6$$ = $$$$8$$(document.createElement("td"));
      this.$_styleTableBodyCell$($columnIdx$$24$$, $tableBodyCell$$6$$);
      return $tableBodyCell$$6$$
    }, $_createTableBodyCellAccSelect$:function($tableBodyRow$$8$$) {
      var $rowIdx$$23_selectRowTitle$$ = this.$_getElementRowIdx$($tableBodyRow$$8$$), $accSelectionCell$$1$$ = this.$_getTableBodyCellAccSelect$($tableBodyRow$$8$$);
      if(null != $accSelectionCell$$1$$) {
        return $accSelectionCell$$1$$
      }
      $accSelectionCell$$1$$ = $$$$8$$(document.createElement("td"));
      $accSelectionCell$$1$$.addClass(this.$_CSS_CLASSES$.$_TABLE_DATA_CELL_ACC_SELECT_CLASS$);
      $accSelectionCell$$1$$.addClass(this.$_CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
      this.$_isTableHeaderless$() || $accSelectionCell$$1$$.attr("headers", this.$_COLUMN_HEADER_ROW_SELECT_ID$);
      var $accSelectCheckbox$$2$$ = $$$$8$$(document.createElement("input"));
      this.$_setElementRowIdx$($rowIdx$$23_selectRowTitle$$, $accSelectCheckbox$$2$$);
      $accSelectCheckbox$$2$$.attr("id", "acc_sel_row" + $rowIdx$$23_selectRowTitle$$);
      $accSelectCheckbox$$2$$.attr("type", "checkbox");
      $accSelectCheckbox$$2$$.attr("tabindex", "-1");
      $rowIdx$$23_selectRowTitle$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_SELECT_ROW$);
      $accSelectCheckbox$$2$$.attr("title", $rowIdx$$23_selectRowTitle$$);
      $accSelectCheckbox$$2$$.addClass(this.$_CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_ROW_CLASS$);
      $accSelectionCell$$1$$.append($accSelectCheckbox$$2$$);
      $tableBodyRow$$8$$.prepend($accSelectionCell$$1$$);
      return $accSelectionCell$$1$$
    }, $_createTableBodyRow$:function() {
      var $tableBodyRow$$9$$ = $$$$8$$(document.createElement("tr"));
      this.$_styleTableBodyRow$($tableBodyRow$$9$$);
      return $tableBodyRow$$9$$
    }, $_createTableContainer$:function() {
      var $tableContainer$$3$$ = $$$$8$$(document.createElement("div"));
      this.element.parent()[0].replaceChild($tableContainer$$3$$[0], this.element[0]);
      $tableContainer$$3$$.prepend(this.element);
      this.$_styleTableContainer$($tableContainer$$3$$);
      return $tableContainer$$3$$
    }, $_createTableFooter$:function() {
      var $table$$6$$ = this.$_getTable$(), $tableFooter$$2$$ = $$$$8$$(document.createElement("tfoot"));
      $tableFooter$$2$$.addClass(this.$_CSS_CLASSES$.$_TABLE_FOOTER_CLASS$);
      $table$$6$$.append($tableFooter$$2$$);
      return $tableFooter$$2$$
    }, $_createTableHeader$:function() {
      var $table$$7$$ = this.$_getTable$(), $tableHeader$$5$$ = $$$$8$$(document.createElement("thead"));
      $tableHeader$$5$$.addClass(this.$_CSS_CLASSES$.$_TABLE_HEADER_CLASS$);
      $tableHeader$$5$$.css("display", "table-header-group");
      var $tableHeaderRow$$4$$ = $$$$8$$(document.createElement("tr"));
      $tableHeaderRow$$4$$.addClass(this.$_CSS_CLASSES$.$_TABLE_HEADER_ROW_CLASS$);
      $tableHeaderRow$$4$$.css("position", "relative");
      $tableHeader$$5$$.append($tableHeaderRow$$4$$);
      $table$$7$$.prepend($tableHeader$$5$$);
      return $tableHeader$$5$$
    }, $_createTableHeaderAccSelectRowColumn$:function() {
      var $headerColumn$$8$$ = $$$$8$$(document.createElement("th"));
      $headerColumn$$8$$.addClass(this.$_CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$);
      $headerColumn$$8$$.addClass(this.$_CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
      $headerColumn$$8$$.attr("id", this.$_COLUMN_HEADER_ROW_SELECT_ID$);
      var $selectRowTitle$$1$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_SELECT_ROW$);
      $headerColumn$$8$$.attr("title", $selectRowTitle$$1$$);
      $headerColumn$$8$$.append($selectRowTitle$$1$$);
      return $headerColumn$$8$$
    }, $_createTableHeaderColumn$:function($columnIdx$$25$$) {
      var $column$$12_headerColumnDscLink$$3$$ = this.$_getColumnDefs$()[$columnIdx$$25$$], $headerColumn$$9$$ = $$$$8$$(document.createElement("th"));
      this.$_styleTableHeaderColumn$($columnIdx$$25$$, $headerColumn$$9$$);
      var $headerColumnRowDiv$$3$$ = $$$$8$$(document.createElement("div"));
      $headerColumnRowDiv$$3$$.addClass(this.$_CSS_CLASSES$.$_COLUMN_HEADER_ROW_CLASS$);
      $headerColumnRowDiv$$3$$.css("float", "none");
      $headerColumn$$9$$.append($headerColumnRowDiv$$3$$);
      var $headerColumnAscDiv$$1_headerColumnDscDiv$$1_headerColumnTextDiv$$2$$ = $$$$8$$(document.createElement("div")), $headerColumnAscLink$$3_headerColumnShowRequiredSpan_headerColumnTextCellDiv$$ = null;
      $column$$12_headerColumnDscLink$$3$$.showRequired == this.$_OPTION_ENABLED$ && ($headerColumnAscLink$$3_headerColumnShowRequiredSpan_headerColumnTextCellDiv$$ = $$$$8$$(document.createElement("span")), $headerColumnAscLink$$3_headerColumnShowRequiredSpan_headerColumnTextCellDiv$$.addClass(this.$_CSS_CLASSES$.$_COLUMN_HEADER_SHOW_REQUIRED_CLASS$), $headerColumnAscLink$$3_headerColumnShowRequiredSpan_headerColumnTextCellDiv$$.attr("title", "Required"), $headerColumnAscLink$$3_headerColumnShowRequiredSpan_headerColumnTextCellDiv$$.append("*"));
      null != $headerColumnAscLink$$3_headerColumnShowRequiredSpan_headerColumnTextCellDiv$$ && $headerColumnAscDiv$$1_headerColumnDscDiv$$1_headerColumnTextDiv$$2$$.append($headerColumnAscLink$$3_headerColumnShowRequiredSpan_headerColumnTextCellDiv$$);
      $headerColumnAscDiv$$1_headerColumnDscDiv$$1_headerColumnTextDiv$$2$$.addClass(this.$_CSS_CLASSES$.$_COLUMN_HEADER_TEXT_CLASS$);
      $headerColumnRowDiv$$3$$.append($headerColumnAscDiv$$1_headerColumnDscDiv$$1_headerColumnTextDiv$$2$$);
      $headerColumnAscLink$$3_headerColumnShowRequiredSpan_headerColumnTextCellDiv$$ = $$$$8$$(document.createElement("div"));
      $headerColumnAscLink$$3_headerColumnShowRequiredSpan_headerColumnTextCellDiv$$.attr("style", $column$$12_headerColumnDscLink$$3$$.headerStyle);
      $column$$12_headerColumnDscLink$$3$$.headerClassName && $headerColumnAscLink$$3_headerColumnShowRequiredSpan_headerColumnTextCellDiv$$.addClass($column$$12_headerColumnDscLink$$3$$.headerClassName);
      $headerColumnAscLink$$3_headerColumnShowRequiredSpan_headerColumnTextCellDiv$$.css("display", "table-cell");
      $headerColumnAscLink$$3_headerColumnShowRequiredSpan_headerColumnTextCellDiv$$.css("vertical-align", "middle");
      $headerColumnAscLink$$3_headerColumnShowRequiredSpan_headerColumnTextCellDiv$$.append($column$$12_headerColumnDscLink$$3$$.headerText);
      $headerColumnAscDiv$$1_headerColumnDscDiv$$1_headerColumnTextDiv$$2$$.append($headerColumnAscLink$$3_headerColumnShowRequiredSpan_headerColumnTextCellDiv$$);
      $headerColumnAscDiv$$1_headerColumnDscDiv$$1_headerColumnTextDiv$$2$$ = $$$$8$$(document.createElement("div"));
      $headerColumnAscDiv$$1_headerColumnDscDiv$$1_headerColumnTextDiv$$2$$.addClass(this.$_CSS_CLASSES$.$_COLUMN_HEADER_ASC_CLASS$);
      $headerColumnRowDiv$$3$$.append($headerColumnAscDiv$$1_headerColumnDscDiv$$1_headerColumnTextDiv$$2$$);
      $column$$12_headerColumnDscLink$$3$$.sortable == this.$_OPTION_ENABLED$ && ($headerColumnAscLink$$3_headerColumnShowRequiredSpan_headerColumnTextCellDiv$$ = $$$$8$$(document.createElement("a")), $headerColumnAscLink$$3_headerColumnShowRequiredSpan_headerColumnTextCellDiv$$.addClass(this.$_CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$), $headerColumnAscLink$$3_headerColumnShowRequiredSpan_headerColumnTextCellDiv$$.addClass(this.$_CSS_CLASSES$.$_WIDGET_ICON_CLASS$), $headerColumnAscLink$$3_headerColumnShowRequiredSpan_headerColumnTextCellDiv$$.addClass(this.$_CSS_CLASSES$.$_COLUMN_HEADER_ASC_ICON_CLASS$), 
      $headerColumnAscLink$$3_headerColumnShowRequiredSpan_headerColumnTextCellDiv$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $headerColumnAscLink$$3_headerColumnShowRequiredSpan_headerColumnTextCellDiv$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$), this._hoverable($headerColumnAscLink$$3_headerColumnShowRequiredSpan_headerColumnTextCellDiv$$), this.$_setElementColumnIdx$($columnIdx$$25$$, $headerColumnAscLink$$3_headerColumnShowRequiredSpan_headerColumnTextCellDiv$$), $headerColumnAscDiv$$1_headerColumnDscDiv$$1_headerColumnTextDiv$$2$$.append($headerColumnAscLink$$3_headerColumnShowRequiredSpan_headerColumnTextCellDiv$$), 
      $headerColumn$$9$$.attr("data-oj-sortable", this.$_OPTION_ENABLED$));
      $headerColumnAscDiv$$1_headerColumnDscDiv$$1_headerColumnTextDiv$$2$$ = $$$$8$$(document.createElement("div"));
      $headerColumnAscDiv$$1_headerColumnDscDiv$$1_headerColumnTextDiv$$2$$.addClass(this.$_CSS_CLASSES$.$_COLUMN_HEADER_DSC_CLASS$);
      $headerColumnRowDiv$$3$$.append($headerColumnAscDiv$$1_headerColumnDscDiv$$1_headerColumnTextDiv$$2$$);
      $column$$12_headerColumnDscLink$$3$$.sortable == this.$_OPTION_ENABLED$ && ($column$$12_headerColumnDscLink$$3$$ = $$$$8$$(document.createElement("a")), $column$$12_headerColumnDscLink$$3$$.addClass(this.$_CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$), $column$$12_headerColumnDscLink$$3$$.addClass(this.$_CSS_CLASSES$.$_WIDGET_ICON_CLASS$), $column$$12_headerColumnDscLink$$3$$.addClass(this.$_CSS_CLASSES$.$_COLUMN_HEADER_DSC_ICON_CLASS$), $column$$12_headerColumnDscLink$$3$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), 
      $column$$12_headerColumnDscLink$$3$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$), this._hoverable($column$$12_headerColumnDscLink$$3$$), this.$_setElementColumnIdx$($columnIdx$$25$$, $column$$12_headerColumnDscLink$$3$$), $headerColumnAscDiv$$1_headerColumnDscDiv$$1_headerColumnTextDiv$$2$$.append($column$$12_headerColumnDscLink$$3$$));
      return $headerColumn$$9$$
    }, $_createTableHeaderColumnAccSelect$:function($columnIdx$$26_selectColumnTitle$$) {
      if(this.$_getColumnSelectionMode$() != this.$_OPTION_SELECTION_MODES$.$_SINGLE$ && this.$_getColumnSelectionMode$() != this.$_OPTION_SELECTION_MODES$.$_MULTIPLE$) {
        return null
      }
      var $headerColumn$$10$$ = this.$_getTableHeaderColumn$($columnIdx$$26_selectColumnTitle$$), $accSelectionHeaderColumn$$ = this.$_getTableHeaderColumnAccSelect$($columnIdx$$26_selectColumnTitle$$);
      if(null != $accSelectionHeaderColumn$$) {
        return $accSelectionHeaderColumn$$
      }
      $accSelectionHeaderColumn$$ = $$$$8$$(document.createElement("div"));
      $accSelectionHeaderColumn$$.addClass(this.$_CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS$);
      $accSelectionHeaderColumn$$.addClass(this.$_CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
      var $accSelectCheckbox$$3$$ = $$$$8$$(document.createElement("input"));
      this.$_setElementColumnIdx$($columnIdx$$26_selectColumnTitle$$, $accSelectCheckbox$$3$$);
      $accSelectCheckbox$$3$$.attr("id", "acc_sel_col" + $columnIdx$$26_selectColumnTitle$$);
      $accSelectCheckbox$$3$$.attr("type", "checkbox");
      $accSelectCheckbox$$3$$.attr("tabindex", "-1");
      $columnIdx$$26_selectColumnTitle$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_SELECT_COLUMN$);
      $accSelectCheckbox$$3$$.attr("title", $columnIdx$$26_selectColumnTitle$$);
      $accSelectCheckbox$$3$$.addClass(this.$_CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_COLUMN_CLASS$);
      $accSelectionHeaderColumn$$.append($accSelectCheckbox$$3$$);
      $headerColumn$$10$$.prepend($accSelectionHeaderColumn$$);
      return $accSelectionHeaderColumn$$
    }, $_createTableDivScroller$:function() {
      var $table$$8$$ = this.$_getTable$(), $tableDivScroller$$1$$ = $$$$8$$(document.createElement("div"));
      $tableDivScroller$$1$$.addClass(this.$_CSS_CLASSES$.$_TABLE_SCROLLER_CLASS$);
      var $tableContainer$$4$$ = $table$$8$$.parent();
      $tableContainer$$4$$.remove("." + this.$_CSS_CLASSES$.$_TABLE_CLASS$);
      $tableContainer$$4$$.append($tableDivScroller$$1$$);
      $tableDivScroller$$1$$.append($table$$8$$);
      return $tableDivScroller$$1$$
    }, $_createTableNoDataMessage$:function() {
      var $tableContainer$$5$$ = this.$_getTableContainer$(), $noDataMessage$$2$$ = $$$$8$$(document.createElement("div"));
      $noDataMessage$$2$$.addClass(this.$_CSS_CLASSES$.$_TABLE_NO_DATA_MESSAGE_CLASS$);
      $noDataMessage$$2$$.css("display", "none");
      $noDataMessage$$2$$.css("position", "absolute");
      $noDataMessage$$2$$.css("z-index", 5E3);
      $noDataMessage$$2$$.append(this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_MSG_NO_DATA$));
      $tableContainer$$5$$.append($noDataMessage$$2$$);
      return $noDataMessage$$2$$
    }, $_createTableStatusMessage$:function() {
      var $tableContainer$$6$$ = this.$_getTableContainer$(), $statusMessage$$2$$ = $$$$8$$(document.createElement("div"));
      $statusMessage$$2$$.addClass(this.$_CSS_CLASSES$.$_TABLE_STATUS_MESSAGE_CLASS$);
      $statusMessage$$2$$.css("display", "none");
      $statusMessage$$2$$.css("position", "absolute");
      $statusMessage$$2$$.css("z-index", 5E3);
      $statusMessage$$2$$.append(this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_MSG_FETCHING_DATA$));
      $tableContainer$$6$$.append($statusMessage$$2$$);
      return $statusMessage$$2$$
    }, $_getContextMenu$:$JSCompiler_get$$("$_menuContainer$"), $_getTable$:function() {
      return $$$$8$$(this.element)
    }, $_getTableBody$:function() {
      if(!this.$_cachedDomTableBody$) {
        var $table$$9$$ = this.$_getTable$(), $tableBody$$7$$ = null;
        $table$$9$$ && ($tableBody$$7$$ = $table$$9$$.find("." + this.$_CSS_CLASSES$.$_TABLE_BODY_CLASS$)) && 0 < $tableBody$$7$$.length && (this.$_cachedDomTableBody$ = $$$$8$$($tableBody$$7$$.get(0)))
      }
      return this.$_cachedDomTableBody$
    }, $_getTableBodyCell$:function($i$$177_rowIdx$$24$$, $columnIdx$$27$$, $tableBodyRow$$10$$) {
      var $tableBodyCells$$3$$ = null;
      if(null == $tableBodyRow$$10$$) {
        if($tableBodyCells$$3$$ = this.$_getTableBodyCells$($i$$177_rowIdx$$24$$), !$tableBodyCells$$3$$) {
          return null
        }
      }else {
        $tableBodyCells$$3$$ = $tableBodyRow$$10$$.children("." + this.$_CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$)
      }
      if($tableBodyCells$$3$$.length > $columnIdx$$27$$ && this.$_getElementColumnIdx$($tableBodyCells$$3$$[$columnIdx$$27$$]) == $columnIdx$$27$$) {
        return $$$$8$$($tableBodyCells$$3$$[$columnIdx$$27$$])
      }
      for($i$$177_rowIdx$$24$$ = 0;$i$$177_rowIdx$$24$$ < $tableBodyCells$$3$$.length;$i$$177_rowIdx$$24$$++) {
        if(this.$_getElementColumnIdx$($tableBodyCells$$3$$[$i$$177_rowIdx$$24$$]) == $columnIdx$$27$$) {
          return $$$$8$$($tableBodyCells$$3$$[$i$$177_rowIdx$$24$$])
        }
      }
      return null
    }, $_getTableBodyCellAccSelect$:function($accSelectionCell$$2_tableBodyRow$$11$$) {
      return null != $accSelectionCell$$2_tableBodyRow$$11$$ && ($accSelectionCell$$2_tableBodyRow$$11$$ = $accSelectionCell$$2_tableBodyRow$$11$$.find("." + this.$_CSS_CLASSES$.$_TABLE_DATA_CELL_ACC_SELECT_CLASS$), null != $accSelectionCell$$2_tableBodyRow$$11$$ && 0 < $accSelectionCell$$2_tableBodyRow$$11$$.length) ? $$$$8$$($accSelectionCell$$2_tableBodyRow$$11$$[0]) : null
    }, $_getTableBodyCells$:function($rowIdx$$25_tableBodyCellElements_tableBodyRow$$12$$) {
      $rowIdx$$25_tableBodyCellElements_tableBodyRow$$12$$ = this.$_getTableBodyRow$($rowIdx$$25_tableBodyCellElements_tableBodyRow$$12$$);
      if(!$rowIdx$$25_tableBodyCellElements_tableBodyRow$$12$$) {
        return null
      }
      $rowIdx$$25_tableBodyCellElements_tableBodyRow$$12$$ = $rowIdx$$25_tableBodyCellElements_tableBodyRow$$12$$.children("." + this.$_CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$);
      return null != $rowIdx$$25_tableBodyCellElements_tableBodyRow$$12$$ && 0 < $rowIdx$$25_tableBodyCellElements_tableBodyRow$$12$$.length ? $rowIdx$$25_tableBodyCellElements_tableBodyRow$$12$$ : null
    }, $_getTableBodyRow$:function($rowIdx$$26$$) {
      var $tableBodyRows$$4$$ = this.$_getTableBodyRows$();
      if(!$tableBodyRows$$4$$) {
        return null
      }
      if($tableBodyRows$$4$$.length > $rowIdx$$26$$ && this.$_getElementRowIdx$($tableBodyRows$$4$$[$rowIdx$$26$$]) == $rowIdx$$26$$) {
        return $$$$8$$($tableBodyRows$$4$$[$rowIdx$$26$$])
      }
      var $i$$178$$;
      for($i$$178$$ = 0;$i$$178$$ < $tableBodyRows$$4$$.length;$i$$178$$++) {
        if(this.$_getElementRowIdx$($tableBodyRows$$4$$[$i$$178$$]) == $rowIdx$$26$$) {
          return $$$$8$$($tableBodyRows$$4$$[$i$$178$$])
        }
      }
      return null
    }, $_getTableBodyRows$:function() {
      if(!this.$_cachedDomTableBodyRows$) {
        var $tableBodyRowElements$$ = this.$_getTableBody$().children("." + this.$_CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$);
        null != $tableBodyRowElements$$ && 0 < $tableBodyRowElements$$.length && (this.$_cachedDomTableBodyRows$ = $tableBodyRowElements$$)
      }
      return this.$_cachedDomTableBodyRows$
    }, $_getTableContainer$:function() {
      this.$_cachedDomTableContainer$ || (this.$_cachedDomTableContainer$ = this.$_useFallbackScrolling$ ? $$$$8$$(this.element.get(0).parentNode.parentNode) : $$$$8$$(this.element.get(0).parentNode));
      return this.$_cachedDomTableContainer$
    }, $_getTableFooter$:function() {
      var $table$$10$$ = this.$_getTable$(), $tableFooter$$3$$ = null;
      $table$$10$$ && ($tableFooter$$3$$ = $table$$10$$.find("." + this.$_CSS_CLASSES$.$_TABLE_FOOTER_CLASS$)) && 0 < $tableFooter$$3$$.length && ($tableFooter$$3$$ = $$$$8$$($tableFooter$$3$$.get(0)));
      return $tableFooter$$3$$
    }, $_getTableHeader$:function() {
      if(!this.$_cachedDomTableHeader$) {
        var $table$$11$$ = this.$_getTable$(), $tableHeader$$6$$ = null;
        $table$$11$$ && ($tableHeader$$6$$ = $table$$11$$.find("." + this.$_CSS_CLASSES$.$_TABLE_HEADER_CLASS$)) && 0 < $tableHeader$$6$$.length && (this.$_cachedDomTableHeader$ = $$$$8$$($tableHeader$$6$$.get(0)))
      }
      return this.$_cachedDomTableHeader$
    }, $_getTableHeaderColumn$:function($columnIdx$$28$$) {
      var $headerColumns$$ = this.$_getTableHeaderColumns$();
      if(!$headerColumns$$) {
        return null
      }
      if($headerColumns$$.length > $columnIdx$$28$$ && this.$_getElementRowIdx$($headerColumns$$[$columnIdx$$28$$]) == $columnIdx$$28$$) {
        return $$$$8$$($headerColumns$$[$columnIdx$$28$$])
      }
      var $i$$179$$;
      for($i$$179$$ = 0;$i$$179$$ < $headerColumns$$.length;$i$$179$$++) {
        if(this.$_getElementColumnIdx$($headerColumns$$[$i$$179$$]) == $columnIdx$$28$$) {
          return $$$$8$$($headerColumns$$[$i$$179$$])
        }
      }
      return null
    }, $_getTableHeaderColumnAccSelect$:function($accSelectionCell$$3_columnIdx$$29_headerColumn$$11$$) {
      $accSelectionCell$$3_columnIdx$$29_headerColumn$$11$$ = this.$_getTableHeaderColumn$($accSelectionCell$$3_columnIdx$$29_headerColumn$$11$$);
      return null != $accSelectionCell$$3_columnIdx$$29_headerColumn$$11$$ && ($accSelectionCell$$3_columnIdx$$29_headerColumn$$11$$ = $accSelectionCell$$3_columnIdx$$29_headerColumn$$11$$.find("." + this.$_CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS$), null != $accSelectionCell$$3_columnIdx$$29_headerColumn$$11$$ && 0 < $accSelectionCell$$3_columnIdx$$29_headerColumn$$11$$.length) ? $$$$8$$($accSelectionCell$$3_columnIdx$$29_headerColumn$$11$$[0]) : null
    }, $_getTableHeaderColumns$:function() {
      var $headerColumnElements_tableHeaderRow$$5$$ = this.$_getTableHeaderRow$();
      return null != $headerColumnElements_tableHeaderRow$$5$$ && ($headerColumnElements_tableHeaderRow$$5$$ = $headerColumnElements_tableHeaderRow$$5$$.children("." + this.$_CSS_CLASSES$.$_COLUMN_HEADER_CLASS$), null != $headerColumnElements_tableHeaderRow$$5$$ && 0 < $headerColumnElements_tableHeaderRow$$5$$.length) ? $headerColumnElements_tableHeaderRow$$5$$ : null
    }, $_getTableHeaderRow$:function() {
      if(!this.$_cachedDomTableHeaderRow$) {
        var $tableHeader$$7$$ = this.$_getTableHeader$();
        if(!$tableHeader$$7$$) {
          return null
        }
        this.$_cachedDomTableHeaderRow$ = $$$$8$$($tableHeader$$7$$.children("." + this.$_CSS_CLASSES$.$_TABLE_HEADER_ROW_CLASS$).get(0))
      }
      return this.$_cachedDomTableHeaderRow$
    }, $_getTableDivScroller$:function() {
      if(!this.$_cachedDomTableDivScroller$) {
        var $tableContainer$$7_tableDivScroller$$2$$ = this.$_getTableContainer$();
        $tableContainer$$7_tableDivScroller$$2$$ && ($tableContainer$$7_tableDivScroller$$2$$ = $tableContainer$$7_tableDivScroller$$2$$.find("." + this.$_CSS_CLASSES$.$_TABLE_SCROLLER_CLASS$)) && 0 < $tableContainer$$7_tableDivScroller$$2$$.length && (this.$_cachedDomTableDivScroller$ = $$$$8$$($tableContainer$$7_tableDivScroller$$2$$.get(0)))
      }
      return this.$_cachedDomTableDivScroller$
    }, $_getTableNoDataMessage$:function() {
      if(!this.$_cachedDomTableNoDataMessage$) {
        var $noDataMessage$$3_tableContainer$$8$$ = this.$_getTableContainer$();
        $noDataMessage$$3_tableContainer$$8$$ && ($noDataMessage$$3_tableContainer$$8$$ = $noDataMessage$$3_tableContainer$$8$$.find("." + this.$_CSS_CLASSES$.$_TABLE_NO_DATA_MESSAGE_CLASS$)) && 0 < $noDataMessage$$3_tableContainer$$8$$.length && (this.$_cachedDomTableNoDataMessage$ = $$$$8$$($noDataMessage$$3_tableContainer$$8$$.get(0)))
      }
      return this.$_cachedDomTableNoDataMessage$
    }, $_getTableStatusMessage$:function() {
      if(!this.$_cachedDomTableStatusMessage$) {
        var $statusMessage$$3_tableContainer$$9$$ = this.$_getTableContainer$();
        $statusMessage$$3_tableContainer$$9$$ && ($statusMessage$$3_tableContainer$$9$$ = $statusMessage$$3_tableContainer$$9$$.find("." + this.$_CSS_CLASSES$.$_TABLE_STATUS_MESSAGE_CLASS$)) && 0 < $statusMessage$$3_tableContainer$$9$$.length && (this.$_cachedDomTableStatusMessage$ = $$$$8$$($statusMessage$$3_tableContainer$$9$$.get(0)))
      }
      return this.$_cachedDomTableStatusMessage$
    }, $_insertTableBodyCell$:function($rowIdx$$27_tableBodyCells$$4$$, $columnIdx$$30$$, $tableBodyCell$$7$$, $i$$180_previousCell_tableBodyRow$$13$$, $isTableBodyRowNew$$1$$) {
      this.$_setTableBodyCellAttributes$($rowIdx$$27_tableBodyCells$$4$$, $columnIdx$$30$$, $tableBodyCell$$7$$);
      $rowIdx$$27_tableBodyCells$$4$$ = $$$$8$$($i$$180_previousCell_tableBodyRow$$13$$).children("." + this.$_CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$);
      if(0 == $columnIdx$$30$$) {
        $i$$180_previousCell_tableBodyRow$$13$$.append($tableBodyCell$$7$$)
      }else {
        if($isTableBodyRowNew$$1$$) {
          $$$$8$$($rowIdx$$27_tableBodyCells$$4$$.get($rowIdx$$27_tableBodyCells$$4$$.length - 1)).after($tableBodyCell$$7$$)
        }else {
          if($rowIdx$$27_tableBodyCells$$4$$.length >= $columnIdx$$30$$ && ($i$$180_previousCell_tableBodyRow$$13$$ = $$$$8$$($rowIdx$$27_tableBodyCells$$4$$.get($columnIdx$$30$$ - 1)), this.$_getElementColumnIdx$($i$$180_previousCell_tableBodyRow$$13$$) == $columnIdx$$30$$ - 1)) {
            return $i$$180_previousCell_tableBodyRow$$13$$.after($tableBodyCell$$7$$), $tableBodyCell$$7$$
          }
          for($i$$180_previousCell_tableBodyRow$$13$$ = 0;$i$$180_previousCell_tableBodyRow$$13$$ < $rowIdx$$27_tableBodyCells$$4$$.length;$i$$180_previousCell_tableBodyRow$$13$$++) {
            if(this.$_getElementColumnIdx$($$$$8$$($rowIdx$$27_tableBodyCells$$4$$.get($i$$180_previousCell_tableBodyRow$$13$$))) == $columnIdx$$30$$ - 1) {
              $$$$8$$($rowIdx$$27_tableBodyCells$$4$$.get($i$$180_previousCell_tableBodyRow$$13$$)).after($tableBodyCell$$7$$);
              break
            }
          }
        }
      }
      return $tableBodyCell$$7$$
    }, $_insertTableBodyRow$:function($rowIdx$$28$$, $tableBodyRow$$14$$, $i$$181_oldTableBodyRow_row$$38$$, $docFrag$$1_inserted$$) {
      var $tableBodyRows$$5$$ = null;
      if(null == $docFrag$$1_inserted$$) {
        var $tableBody$$9$$ = this.$_getTableBody$(), $tableBodyRows$$5$$ = $tableBody$$9$$.children("." + this.$_CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$)
      }else {
        $tableBodyRows$$5$$ = $docFrag$$1_inserted$$.children("." + this.$_CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$)
      }
      this.$_setTableBodyRowAttributes$($rowIdx$$28$$, $i$$181_oldTableBodyRow_row$$38$$, $tableBodyRow$$14$$);
      this.$_createTableBodyCellAccSelect$($tableBodyRow$$14$$);
      if(null == $docFrag$$1_inserted$$) {
        if($i$$181_oldTableBodyRow_row$$38$$ = this.$_getTableBodyRow$($rowIdx$$28$$)) {
          $i$$181_oldTableBodyRow_row$$38$$.replaceWith($tableBodyRow$$14$$)
        }else {
          if(0 == $rowIdx$$28$$ || 0 == $tableBodyRows$$5$$.length) {
            $tableBody$$9$$.prepend($tableBodyRow$$14$$)
          }else {
            $docFrag$$1_inserted$$ = !1;
            for($i$$181_oldTableBodyRow_row$$38$$ = 0;$i$$181_oldTableBodyRow_row$$38$$ < $tableBodyRows$$5$$.length;$i$$181_oldTableBodyRow_row$$38$$++) {
              if(this.$_getElementRowIdx$($$$$8$$($tableBodyRows$$5$$.get($i$$181_oldTableBodyRow_row$$38$$))) > $rowIdx$$28$$) {
                $$$$8$$($tableBodyRows$$5$$.get($i$$181_oldTableBodyRow_row$$38$$)).before($tableBodyRow$$14$$);
                $docFrag$$1_inserted$$ = !0;
                break
              }
            }
            $docFrag$$1_inserted$$ || $tableBody$$9$$.append($tableBodyRow$$14$$)
          }
        }
      }else {
        $docFrag$$1_inserted$$.append($tableBodyRow$$14$$)
      }
      this.$_clearCachedDomRowData$()
    }, $_insertTableHeaderColumn$:function($columnIdx$$31$$, $tableHeaderColumn$$5$$) {
      var $i$$182_tableHeaderRow$$6$$ = this.$_getTableHeaderRow$(), $tableHeaderColumns$$1$$ = this.$_getTableHeaderColumns$();
      this.$_setTableHeaderColumnAttributes$($columnIdx$$31$$, $tableHeaderColumn$$5$$);
      var $oldTableHeaderColumn$$ = this.$_getTableHeaderColumn$($columnIdx$$31$$);
      if($oldTableHeaderColumn$$) {
        $oldTableHeaderColumn$$.replaceWith($tableHeaderColumn$$5$$)
      }else {
        if(0 == $columnIdx$$31$$) {
          $i$$182_tableHeaderRow$$6$$.append($tableHeaderColumn$$5$$)
        }else {
          for($i$$182_tableHeaderRow$$6$$ = 0;$i$$182_tableHeaderRow$$6$$ < $tableHeaderColumns$$1$$.length;$i$$182_tableHeaderRow$$6$$++) {
            if(this.$_getElementColumnIdx$($tableHeaderColumns$$1$$[$i$$182_tableHeaderRow$$6$$]) == $columnIdx$$31$$ - 1) {
              $$$$8$$($tableHeaderColumns$$1$$[$i$$182_tableHeaderRow$$6$$]).after($tableHeaderColumn$$5$$);
              break
            }
          }
        }
      }
    }, $_removeTableBodyRow$:function($rowIdx$$29_tableBodyRow$$15$$) {
      $rowIdx$$29_tableBodyRow$$15$$ = this.$_getTableBodyRow$($rowIdx$$29_tableBodyRow$$15$$);
      null != $rowIdx$$29_tableBodyRow$$15$$ && ($rowIdx$$29_tableBodyRow$$15$$[0].parentNode.removeChild($rowIdx$$29_tableBodyRow$$15$$[0]), this.$_clearCachedDomRowData$())
    }, $_setTableBodyCell$:function($rowIdx$$30$$, $columnIdx$$32$$, $tableBodyRow$$16$$, $cellColumnContent_row$$39$$, $data$$75_isTableBodyRowNew$$2$$) {
      var $column$$13$$ = this.$_getColumnDefs$()[$columnIdx$$32$$], $cellRenderer$$ = this.$_getColumnRenderer$($columnIdx$$32$$, "cell"), $tableBodyCell$$8$$ = this.$_getTableBodyCell$($rowIdx$$30$$, $columnIdx$$32$$, $tableBodyRow$$16$$);
      $tableBodyCell$$8$$ ? $tableBodyCell$$8$$.empty() : ($tableBodyCell$$8$$ = this.$_createTableBodyCell$($rowIdx$$30$$, $columnIdx$$32$$), this.$_insertTableBodyCell$($rowIdx$$30$$, $columnIdx$$32$$, $tableBodyCell$$8$$, $tableBodyRow$$16$$, $data$$75_isTableBodyRowNew$$2$$));
      $data$$75_isTableBodyRowNew$$2$$ = null;
      null != $column$$13$$.field && ($data$$75_isTableBodyRowNew$$2$$ = $cellColumnContent_row$$39$$.get($column$$13$$.field));
      $cellRenderer$$ ? ($cellColumnContent_row$$39$$ = $cellRenderer$$({cellContext:this.$_getRendererContextObject$($cellColumnContent_row$$39$$, $tableBodyCell$$8$$[0]), column:$column$$13$$, data:$data$$75_isTableBodyRowNew$$2$$, row:$cellColumnContent_row$$39$$.$pairs$()}), null != $cellColumnContent_row$$39$$ ? $tableBodyCell$$8$$.append($cellColumnContent_row$$39$$) : ($tableBodyCell$$8$$ = $$$$8$$($tableBodyRow$$16$$.children(":not(." + this.$_CSS_CLASSES$.$_TABLE_DATA_CELL_ACC_SELECT_CLASS$ + 
      ")")[$columnIdx$$32$$]), this.$_setTableBodyCellAttributes$($rowIdx$$30$$, $columnIdx$$32$$, $tableBodyCell$$8$$), this.$_styleTableBodyCell$($columnIdx$$32$$, $tableBodyCell$$8$$))) : $tableBodyCell$$8$$.append($data$$75_isTableBodyRowNew$$2$$)
    }, $_setTableBodyCellAttributes$:function($cellRowHeaderId_rowIdx$$31$$, $columnIdx$$33_rowHeaderColumnId$$, $tableBodyCell$$9$$) {
      var $accessibility_headers$$4$$ = this.options.accessibility, $column$$14$$ = this.$_getColumnDefs$()[$columnIdx$$33_rowHeaderColumnId$$];
      this.$_setElementRowIdx$($cellRowHeaderId_rowIdx$$31$$, $tableBodyCell$$9$$);
      this.$_setElementColumnIdx$($columnIdx$$33_rowHeaderColumnId$$, $tableBodyCell$$9$$);
      $columnIdx$$33_rowHeaderColumnId$$ = null;
      $columnIdx$$33_rowHeaderColumnId$$ = null != $accessibility_headers$$4$$ && null != $accessibility_headers$$4$$.rowHeader ? $accessibility_headers$$4$$.rowHeader : this.$_getColumnDefs$()[0].id;
      $cellRowHeaderId_rowIdx$$31$$ = $columnIdx$$33_rowHeaderColumnId$$ + "_" + $cellRowHeaderId_rowIdx$$31$$;
      $accessibility_headers$$4$$ = $column$$14$$.id;
      $columnIdx$$33_rowHeaderColumnId$$ == $column$$14$$.id ? ($tableBodyCell$$9$$.attr("id", $cellRowHeaderId_rowIdx$$31$$), this.$_isTableHeaderless$() && ($accessibility_headers$$4$$ = "")) : $accessibility_headers$$4$$ = this.$_isTableHeaderless$() ? $cellRowHeaderId_rowIdx$$31$$ : $accessibility_headers$$4$$ + " " + $cellRowHeaderId_rowIdx$$31$$;
      $tableBodyCell$$9$$.attr("headers") || $tableBodyCell$$9$$.attr("headers", $accessibility_headers$$4$$)
    }, $_setTableBodyRowAttributes$:function($rowIdx$$32$$, $row$$40$$, $tableBodyRow$$17$$) {
      this.$_setElementRowIdx$($rowIdx$$32$$, $tableBodyRow$$17$$);
      this.$_setElementRowKey$($row$$40$$.id, $tableBodyRow$$17$$)
    }, $_setTableHeaderColumnAttributes$:function($columnIdx$$34$$, $tableHeaderColumn$$6$$) {
      var $column$$15$$ = this.$_getColumnDefs$()[$columnIdx$$34$$];
      this.$_setElementColumnIdx$($columnIdx$$34$$, $tableHeaderColumn$$6$$);
      $tableHeaderColumn$$6$$.attr("id") || $tableHeaderColumn$$6$$.attr("id", $column$$15$$.id)
    }, $_styleTableContainer$:function($tableContainer$$10$$) {
      var $options$$240$$ = this.options;
      $tableContainer$$10$$.attr("class", "");
      $tableContainer$$10$$.addClass(this.$_CSS_CLASSES$.$_TABLE_CONTAINER_CLASS$);
      $tableContainer$$10$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_WIDGET$);
      null != $options$$240$$.containerClassName && $tableContainer$$10$$.addClass($options$$240$$.containerClassName);
      $tableContainer$$10$$.css("overflow", "hidden");
      if(this.$_isTableHeightSet$() || this.$_isTableWidthSet$()) {
        this.$_isTableHeightSet$() && $tableContainer$$10$$.css("height", this.$_getTable$()[0].style.height), this.$_isTableWidthSet$() && $tableContainer$$10$$.css("width", this.$_getTable$()[0].style.width), this.$_registerResizeListener$($tableContainer$$10$$)
      }
    }, $_styleTableBodyCell$:function($columnIdx$$35$$, $tableBodyCell$$10$$) {
      var $options$$241$$ = this.options, $lastColumn$$ = $columnIdx$$35$$ == this.$_getColumnDefs$().length - 1 ? !0 : !1, $column$$16$$ = this.$_getColumnDefs$()[$columnIdx$$35$$];
      $tableBodyCell$$10$$.attr("style", $column$$16$$.style);
      $tableBodyCell$$10$$.hasClass(this.$_CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$) || $tableBodyCell$$10$$.addClass(this.$_CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$);
      $tableBodyCell$$10$$.css("float", "none");
      $tableBodyCell$$10$$.css("-moz-user-select", "none");
      $options$$241$$.verticalGridVisible != this.$_OPTION_ENABLED$ || $lastColumn$$ || $tableBodyCell$$10$$.addClass(this.$_CSS_CLASSES$.$_TABLE_DATA_CELL_VGRID_LINES_CLASS$);
      $options$$241$$.horizontalGridVisible == this.$_OPTION_ENABLED$ && $tableBodyCell$$10$$.addClass(this.$_CSS_CLASSES$.$_TABLE_DATA_CELL_HGRID_LINES_CLASS$);
      $column$$16$$.className && $tableBodyCell$$10$$.addClass($column$$16$$.className)
    }, $_styleTableBodyRow$:function($tableBodyRow$$18$$) {
      $tableBodyRow$$18$$.hasClass(this.$_CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$) || $tableBodyRow$$18$$.addClass(this.$_CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$);
      this._hoverable($tableBodyRow$$18$$);
      this.$_getRowSelectionMode$() != this.$_OPTION_SELECTION_MODES$.$_SINGLE$ && this.$_getRowSelectionMode$() != this.$_OPTION_SELECTION_MODES$.$_MULTIPLE$ || $tableBodyRow$$18$$.addClass(this.$_CSS_CLASSES$.$_TABLE_DATA_ROW_SELECTOR_CLASS$)
    }, $_styleTableHeaderColumn$:function($columnIdx$$36$$, $tableHeaderColumn$$7$$) {
      var $lastColumn$$1$$ = $columnIdx$$36$$ == this.$_getColumnDefs$().length - 1 ? !0 : !1, $column$$17$$ = this.$_getColumnDefs$()[$columnIdx$$36$$];
      $tableHeaderColumn$$7$$.addClass(this.$_CSS_CLASSES$.$_COLUMN_HEADER_CLASS$);
      $tableHeaderColumn$$7$$.attr("style", $column$$17$$.headerStyle);
      $tableHeaderColumn$$7$$.css("float", "none");
      $lastColumn$$1$$ && $tableHeaderColumn$$7$$.css("borderRight", "none");
      this.$_getColumnSelectionMode$() != this.$_OPTION_SELECTION_MODES$.$_SINGLE$ && this.$_getColumnSelectionMode$() != this.$_OPTION_SELECTION_MODES$.$_MULTIPLE$ || $tableHeaderColumn$$7$$.addClass(this.$_CSS_CLASSES$.$_COLUMN_HEADER_SELECTOR_CLASS$)
    }})
  })();
  $oj$$8$$.$FlattenedTreeTableDataSource$ = function $$oj$$8$$$$FlattenedTreeTableDataSource$$($data$$76$$, $options$$242$$) {
    $options$$242$$ = $options$$242$$ || {};
    if(!($data$$76$$ instanceof $oj$$8$$.$FlattenedTreeDataSource$)) {
      var $errSummary$$7$$ = $oj$$8$$.$Translations$.$getTranslatedString$("oj-table.dataInvalidType.summary"), $errDetail$$7$$ = $oj$$8$$.$Translations$.$getTranslatedString$("oj-table.dataInvalidType.detail");
      throw new $oj$$8$$.$Message$($errSummary$$7$$, $errDetail$$7$$, $oj$$8$$.$Message$.$SEVERITY_LEVEL$.ERROR);
    }
    this.$_rowSet$ = new $oj$$8$$.$FlattenedTreeRowSet$($data$$76$$, $options$$242$$);
    this.$Init$();
    if(null != $options$$242$$ && ("enabled" == $options$$242$$.startFetch || null == $options$$242$$.startFetch) || null == $options$$242$$) {
      var $self$$47$$ = this;
      setTimeout(function() {
        $self$$47$$.fetch({startFetch:"enabled"})
      }, 0)
    }
  };
  $goog$exportPath_$$("FlattenedTreeTableDataSource", $oj$$8$$.$FlattenedTreeTableDataSource$, $oj$$8$$);
  $oj$$8$$.$Object$.$createSubclass$($oj$$8$$.$FlattenedTreeTableDataSource$, $oj$$8$$.$TableDataSource$, "oj.FlattenedTreeTableDataSource");
  $oj$$8$$.$FlattenedTreeTableDataSource$.prototype.$Init$ = function $$oj$$8$$$$FlattenedTreeTableDataSource$$$$Init$$() {
    $oj$$8$$.$FlattenedTreeTableDataSource$.$superclass$.$Init$.call(this)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.Init", {$Init$:$oj$$8$$.$FlattenedTreeTableDataSource$.prototype.$Init$});
  $oj$$8$$.$FlattenedTreeTableDataSource$.prototype.fetch = function $$oj$$8$$$$FlattenedTreeTableDataSource$$$fetch$($options$$243$$) {
    this.$_rowSet$.fetch($options$$243$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.fetch", {fetch:$oj$$8$$.$FlattenedTreeTableDataSource$.prototype.fetch});
  $oj$$8$$.$FlattenedTreeTableDataSource$.prototype.at = function $$oj$$8$$$$FlattenedTreeTableDataSource$$$at$($index$$129$$) {
    return this.$_rowSet$.at($index$$129$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.at", {at:$oj$$8$$.$FlattenedTreeTableDataSource$.prototype.at});
  $oj$$8$$.$FlattenedTreeTableDataSource$.prototype.get = function $$oj$$8$$$$FlattenedTreeTableDataSource$$$get$($id$$16$$) {
    return this.$_rowSet$.get($id$$16$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.get", {get:$oj$$8$$.$FlattenedTreeTableDataSource$.prototype.get});
  $oj$$8$$.$FlattenedTreeTableDataSource$.prototype.hasMore = function $$oj$$8$$$$FlattenedTreeTableDataSource$$$hasMore$() {
    return this.$_rowSet$.hasMore()
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.hasMore", {hasMore:$oj$$8$$.$FlattenedTreeTableDataSource$.prototype.hasMore});
  $oj$$8$$.$FlattenedTreeTableDataSource$.prototype.indexOf = function $$oj$$8$$$$FlattenedTreeTableDataSource$$$indexOf$($model$$38$$) {
    return this.$_rowSet$.indexOf($model$$38$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.indexOf", {indexOf:$oj$$8$$.$FlattenedTreeTableDataSource$.prototype.indexOf});
  $oj$$8$$.$FlattenedTreeTableDataSource$.prototype.size = function $$oj$$8$$$$FlattenedTreeTableDataSource$$$size$() {
    return this.$_rowSet$.size()
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.size", {size:$oj$$8$$.$FlattenedTreeTableDataSource$.prototype.size});
  $oj$$8$$.$FlattenedTreeTableDataSource$.prototype.sort = function $$oj$$8$$$$FlattenedTreeTableDataSource$$$sort$($comparator$$16$$, $options$$244$$) {
    this.$_rowSet$.sort($options$$244$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.sort", {sort:$oj$$8$$.$FlattenedTreeTableDataSource$.prototype.sort});
  $oj$$8$$.$FlattenedTreeTableDataSource$.prototype.startIndex = function $$oj$$8$$$$FlattenedTreeTableDataSource$$$startIndex$() {
    return this.$_rowSet$.startIndex()
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.startIndex", {startIndex:$oj$$8$$.$FlattenedTreeTableDataSource$.prototype.startIndex});
  $oj$$8$$.$FlattenedTreeTableDataSource$.prototype.totalSize = function $$oj$$8$$$$FlattenedTreeTableDataSource$$$totalSize$() {
    return this.$_rowSet$.totalSize()
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.totalSize", {totalSize:$oj$$8$$.$FlattenedTreeTableDataSource$.prototype.totalSize})
});
