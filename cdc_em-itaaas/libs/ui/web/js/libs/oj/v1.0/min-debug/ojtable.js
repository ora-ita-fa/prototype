define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojmenu", "ojs/ojdatacollection-common"], function($oj$$11$$, $$$$11$$) {
  $oj$$11$$.$FlattenedTreeRowSet$ = function $$oj$$11$$$$FlattenedTreeRowSet$$($data$$79$$, $options$$219$$) {
    $oj$$11$$.$FlattenedTreeRowSet$._init(this, $data$$79$$, $options$$219$$)
  };
  $goog$exportPath_$$("FlattenedTreeRowSet", $oj$$11$$.$FlattenedTreeRowSet$, $oj$$11$$);
  $oj$$11$$.$Object$.$createSubclass$($oj$$11$$.$FlattenedTreeRowSet$, $oj$$11$$.$RowSet$, "oj.FlattenedTreeRowSet");
  $oj$$11$$.$FlattenedTreeRowSet$.prototype.Init = function $$oj$$11$$$$FlattenedTreeRowSet$$$Init$() {
    $oj$$11$$.$FlattenedTreeRowSet$.$superclass$.Init.call(this)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.Init", {Init:$oj$$11$$.$FlattenedTreeRowSet$.prototype.Init});
  $oj$$11$$.$FlattenedTreeRowSet$._init = function $$oj$$11$$$$FlattenedTreeRowSet$$_init$($rowSet$$3$$, $data$$80$$) {
    $rowSet$$3$$.$_eventHandlers$ = [];
    $rowSet$$3$$.$_startIndex$ = 0;
    $rowSet$$3$$.Init();
    $rowSet$$3$$.$_data$ = $data$$80$$;
    $rowSet$$3$$.$_data$.$insertRows$ = function $$rowSet$$3$$$$_data$$$insertRows$$($insertAtIndex$$2$$, $i$$163_insertAtKey$$1$$, $nodeSet$$28$$) {
      var $row$$22$$, $rowIdx$$;
      for($i$$163_insertAtKey$$1$$ = 0;$i$$163_insertAtKey$$1$$ < $nodeSet$$28$$.$getCount$();$i$$163_insertAtKey$$1$$++) {
        $rowIdx$$ = $insertAtIndex$$2$$ + $i$$163_insertAtKey$$1$$, $row$$22$$ = new $oj$$11$$.$ArrayRow$($nodeSet$$28$$.getData($i$$163_insertAtKey$$1$$), {context:$nodeSet$$28$$.getMetadata($i$$163_insertAtKey$$1$$)}), $oj$$11$$.$FlattenedTreeRowSet$.$superclass$.$_handleEvent$.call($rowSet$$3$$, $oj$$11$$.$RowSet$.$EventType$.ADD, {rowIdx:$rowIdx$$, row:$row$$22$$})
      }
    };
    $rowSet$$3$$.$_data$.$removeRows$ = function $$rowSet$$3$$$$_data$$$removeRows$$($rowKeys$$2$$) {
      var $i$$164$$, $rowIdx$$1$$;
      for($i$$164$$ = 0;$i$$164$$ < $rowKeys$$2$$.length;$i$$164$$++) {
        $rowIdx$$1$$ = $rowKeys$$2$$[$i$$164$$].index - $i$$164$$, $oj$$11$$.$FlattenedTreeRowSet$.$superclass$.$_handleEvent$.call($rowSet$$3$$, $oj$$11$$.$RowSet$.$EventType$.REMOVE, {rowIdx:$rowIdx$$1$$, row:null})
      }
    }
  };
  $oj$$11$$.$FlattenedTreeRowSet$.prototype.add = function $$oj$$11$$$$FlattenedTreeRowSet$$$add$() {
    $oj$$11$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.add", {add:$oj$$11$$.$FlattenedTreeRowSet$.prototype.add});
  $oj$$11$$.$FlattenedTreeRowSet$.prototype.at = function $$oj$$11$$$$FlattenedTreeRowSet$$$at$($index$$131$$) {
    var $nodeSet$$29$$ = this.$_currentNodeSet$;
    $index$$131$$ = $nodeSet$$29$$.$getStart$() + $index$$131$$;
    return new $oj$$11$$.$ArrayRow$($nodeSet$$29$$.getData($index$$131$$), {context:$nodeSet$$29$$.getMetadata($index$$131$$)})
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.at", {at:$oj$$11$$.$FlattenedTreeRowSet$.prototype.at});
  $oj$$11$$.$FlattenedTreeRowSet$.prototype.clone = function $$oj$$11$$$$FlattenedTreeRowSet$$$clone$() {
    $oj$$11$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.clone", {clone:$oj$$11$$.$FlattenedTreeRowSet$.prototype.clone});
  $oj$$11$$.$FlattenedTreeRowSet$.prototype.collapse = function $$oj$$11$$$$FlattenedTreeRowSet$$$collapse$($rowKey$$16$$) {
    this.$_data$.collapse($rowKey$$16$$)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.collapse", {collapse:$oj$$11$$.$FlattenedTreeRowSet$.prototype.collapse});
  $oj$$11$$.$FlattenedTreeRowSet$.prototype.expand = function $$oj$$11$$$$FlattenedTreeRowSet$$$expand$($rowKey$$17$$) {
    this.$_data$.expand($rowKey$$17$$)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.expand", {expand:$oj$$11$$.$FlattenedTreeRowSet$.prototype.expand});
  $oj$$11$$.$FlattenedTreeRowSet$.prototype.fetch = function $$oj$$11$$$$FlattenedTreeRowSet$$$fetch$($options$$223$$) {
    $options$$223$$ = $options$$223$$ || {};
    null != $options$$223$$.startIndex && (this.$_startIndex$ = $options$$223$$.startIndex);
    this.$_data$.$fetchRows$({start:this.$_startIndex$, count:30}, {success:function($nodeSet$$30$$) {
      this.$_handleFetchRowsSuccess$($nodeSet$$30$$)
    }.bind(this), error:$JSCompiler_emptyFn$$().bind(this)})
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.fetch", {fetch:$oj$$11$$.$FlattenedTreeRowSet$.prototype.fetch});
  $oj$$11$$.$FlattenedTreeRowSet$.prototype.get = function $$oj$$11$$$$FlattenedTreeRowSet$$$get$() {
    $oj$$11$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.get", {get:$oj$$11$$.$FlattenedTreeRowSet$.prototype.get});
  $oj$$11$$.$FlattenedTreeRowSet$.prototype.hasMore = function $$oj$$11$$$$FlattenedTreeRowSet$$$hasMore$() {
    $oj$$11$$.$Assert$.$failedInAbstractFunction$();
    return!1
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.hasMore", {hasMore:$oj$$11$$.$FlattenedTreeRowSet$.prototype.hasMore});
  $oj$$11$$.$FlattenedTreeRowSet$.prototype.indexOf = function $$oj$$11$$$$FlattenedTreeRowSet$$$indexOf$() {
    $oj$$11$$.$Assert$.$failedInAbstractFunction$();
    return 0
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.indexOf", {indexOf:$oj$$11$$.$FlattenedTreeRowSet$.prototype.indexOf});
  $oj$$11$$.$FlattenedTreeRowSet$.prototype.isEmpty = function $$oj$$11$$$$FlattenedTreeRowSet$$$isEmpty$() {
    $oj$$11$$.$Assert$.$failedInAbstractFunction$();
    return!0
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.isEmpty", {isEmpty:$oj$$11$$.$FlattenedTreeRowSet$.prototype.isEmpty});
  $oj$$11$$.$FlattenedTreeRowSet$.prototype.on = function $$oj$$11$$$$FlattenedTreeRowSet$$$on$($eventType$$30$$, $eventHandler$$8$$) {
    if("expand" == $eventType$$30$$ || "collapse" == $eventType$$30$$) {
      this.$_data$.on($eventType$$30$$, $eventHandler$$8$$)
    }else {
      $oj$$11$$.$FlattenedTreeRowSet$.$superclass$.on.call(this, $eventType$$30$$, $eventHandler$$8$$)
    }
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.on", {on:$oj$$11$$.$FlattenedTreeRowSet$.prototype.on});
  $oj$$11$$.$FlattenedTreeRowSet$.prototype.off = function $$oj$$11$$$$FlattenedTreeRowSet$$$off$($eventType$$31$$, $eventHandler$$9$$) {
    "expand" == $eventType$$31$$ || "collapse" == $eventType$$31$$ ? this.$_data$.off($eventType$$31$$, $eventHandler$$9$$) : $oj$$11$$.$FlattenedTreeRowSet$.$superclass$.off.call(this, $eventType$$31$$, $eventHandler$$9$$)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.off", {off:$oj$$11$$.$FlattenedTreeRowSet$.prototype.off});
  $oj$$11$$.$FlattenedTreeRowSet$.prototype.remove = function $$oj$$11$$$$FlattenedTreeRowSet$$$remove$() {
    $oj$$11$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.remove", {remove:$oj$$11$$.$FlattenedTreeRowSet$.prototype.remove});
  $oj$$11$$.$FlattenedTreeRowSet$.prototype.reset = function $$oj$$11$$$$FlattenedTreeRowSet$$$reset$() {
    $oj$$11$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.reset", {reset:$oj$$11$$.$FlattenedTreeRowSet$.prototype.reset});
  $oj$$11$$.$FlattenedTreeRowSet$.prototype.size = function $$oj$$11$$$$FlattenedTreeRowSet$$$size$() {
    return null == this.$_currentNodeSet$ ? 0 : this.$_currentNodeSet$.$getCount$()
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.size", {size:$oj$$11$$.$FlattenedTreeRowSet$.prototype.size});
  $oj$$11$$.$FlattenedTreeRowSet$.prototype.sort = function $$oj$$11$$$$FlattenedTreeRowSet$$$sort$() {
    $oj$$11$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.sort", {sort:$oj$$11$$.$FlattenedTreeRowSet$.prototype.sort});
  $oj$$11$$.$FlattenedTreeRowSet$.prototype.startIndex = $JSCompiler_returnArg$$(0);
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.startIndex", {startIndex:$oj$$11$$.$FlattenedTreeRowSet$.prototype.startIndex});
  $oj$$11$$.$FlattenedTreeRowSet$.prototype.totalSize = $JSCompiler_returnArg$$(-1);
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.totalSize", {totalSize:$oj$$11$$.$FlattenedTreeRowSet$.prototype.totalSize});
  $oj$$11$$.$FlattenedTreeRowSet$.prototype.$_handleFetchRowsSuccess$ = $JSCompiler_set$$("$_currentNodeSet$");
  $oj$$11$$.$TableDataSource$ = function $$oj$$11$$$$TableDataSource$$($data$$82$$, $options$$229$$) {
    if(this.constructor == $oj$$11$$.$TableDataSource$) {
      var $errSummary$$ = $oj$$11$$.$Translations$.$getTranslatedString$("oj-ojTable.tableDataSourceInstantiated.summary"), $errDetail$$ = $oj$$11$$.$Translations$.$getTranslatedString$("oj-ojTable.tableDataSourceInstantiated.detail");
      throw new $oj$$11$$.$Message$($errSummary$$, $errDetail$$, $oj$$11$$.$Message$.$SEVERITY_LEVEL$.ERROR);
    }
    this.data = $data$$82$$;
    this.options = $options$$229$$;
    this.$isFetching$ = !1;
    this.$_startIndex$ = 0;
    this.Init()
  };
  $goog$exportPath_$$("TableDataSource", $oj$$11$$.$TableDataSource$, $oj$$11$$);
  $oj$$11$$.$Object$.$createSubclass$($oj$$11$$.$TableDataSource$, $oj$$11$$.$DataSource$, "oj.TableDataSource");
  $oj$$11$$.$TableDataSource$.prototype.Init = function $$oj$$11$$$$TableDataSource$$$Init$() {
    $oj$$11$$.$TableDataSource$.$superclass$.Init.call(this)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.Init", {Init:$oj$$11$$.$TableDataSource$.prototype.Init});
  $oj$$11$$.$TableDataSource$.prototype.at = function $$oj$$11$$$$TableDataSource$$$at$() {
    $oj$$11$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.at", {at:$oj$$11$$.$TableDataSource$.prototype.at});
  $oj$$11$$.$TableDataSource$.prototype.fetch = function $$oj$$11$$$$TableDataSource$$$fetch$() {
    $oj$$11$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.fetch", {fetch:$oj$$11$$.$TableDataSource$.prototype.fetch});
  $oj$$11$$.$TableDataSource$.prototype.get = function $$oj$$11$$$$TableDataSource$$$get$() {
    $oj$$11$$.$Assert$.$failedInAbstractFunction$();
    return null
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.get", {get:$oj$$11$$.$TableDataSource$.prototype.get});
  $oj$$11$$.$TableDataSource$.prototype.getCapability = $JSCompiler_returnArg$$(null);
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.getCapability", {getCapability:$oj$$11$$.$TableDataSource$.prototype.getCapability});
  $oj$$11$$.$TableDataSource$.prototype.hasMore = function $$oj$$11$$$$TableDataSource$$$hasMore$() {
    $oj$$11$$.$Assert$.$failedInAbstractFunction$();
    return!1
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.hasMore", {hasMore:$oj$$11$$.$TableDataSource$.prototype.hasMore});
  $oj$$11$$.$TableDataSource$.prototype.indexOf = function $$oj$$11$$$$TableDataSource$$$indexOf$() {
    $oj$$11$$.$Assert$.$failedInAbstractFunction$();
    return 0
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.indexOf", {indexOf:$oj$$11$$.$TableDataSource$.prototype.indexOf});
  $oj$$11$$.$TableDataSource$.prototype.size = function $$oj$$11$$$$TableDataSource$$$size$() {
    $oj$$11$$.$Assert$.$failedInAbstractFunction$();
    return 0
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.size", {size:$oj$$11$$.$TableDataSource$.prototype.size});
  $oj$$11$$.$TableDataSource$.prototype.sort = function $$oj$$11$$$$TableDataSource$$$sort$() {
    $oj$$11$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.sort", {sort:$oj$$11$$.$TableDataSource$.prototype.sort});
  $oj$$11$$.$TableDataSource$.prototype.startIndex = function $$oj$$11$$$$TableDataSource$$$startIndex$($startIndex$$3$$) {
    null != $startIndex$$3$$ && (this.$_startIndex$ = $startIndex$$3$$);
    return this.$_startIndex$
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.startIndex", {startIndex:$oj$$11$$.$TableDataSource$.prototype.startIndex});
  $oj$$11$$.$TableDataSource$.prototype.totalSize = function $$oj$$11$$$$TableDataSource$$$totalSize$() {
    $oj$$11$$.$Assert$.$failedInAbstractFunction$();
    return 0
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.totalSize", {totalSize:$oj$$11$$.$TableDataSource$.prototype.totalSize});
  $oj$$11$$.$PagingTableDataSource$ = function $$oj$$11$$$$PagingTableDataSource$$($dataSource$$5_errSummary$$1$$) {
    if(!($dataSource$$5_errSummary$$1$$ instanceof $oj$$11$$.$TableDataSource$)) {
      $dataSource$$5_errSummary$$1$$ = $oj$$11$$.$Translations$.$getTranslatedString$("oj-table.dataInvalidType.summary");
      var $errDetail$$1$$ = $oj$$11$$.$Translations$.$getTranslatedString$("oj-table.dataInvalidType.detail");
      throw new $oj$$11$$.$Message$($dataSource$$5_errSummary$$1$$, $errDetail$$1$$, $oj$$11$$.$Message$.$SEVERITY_LEVEL$.ERROR);
    }
    this.$dataSource$ = $dataSource$$5_errSummary$$1$$;
    this.$_startIndex$ = 0;
    this.Init()
  };
  $goog$exportPath_$$("PagingTableDataSource", $oj$$11$$.$PagingTableDataSource$, $oj$$11$$);
  $oj$$11$$.$Object$.$createSubclass$($oj$$11$$.$PagingTableDataSource$, $oj$$11$$.$PagingDataSource$, "oj.PagingTableDataSource");
  $oj$$11$$.$PagingTableDataSource$.prototype.Init = function $$oj$$11$$$$PagingTableDataSource$$$Init$() {
    $oj$$11$$.$PagingTableDataSource$.$superclass$.Init.call(this)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.Init", {Init:$oj$$11$$.$PagingTableDataSource$.prototype.Init});
  $oj$$11$$.$PagingTableDataSource$.prototype.fetch = function $$oj$$11$$$$PagingTableDataSource$$$fetch$($options$$232$$) {
    null != $options$$232$$ && (this.$_startIndex$ = $options$$232$$.startIndex);
    this.$dataSource$.fetch({startIndex:this.$_startIndex$, pageSize:null != $options$$232$$.pageSize ? $options$$232$$.pageSize : this.$_pageSize$})
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.fetch", {fetch:$oj$$11$$.$PagingTableDataSource$.prototype.fetch});
  $oj$$11$$.$PagingTableDataSource$.prototype.next = function $$oj$$11$$$$PagingTableDataSource$$$next$() {
    this.$dataSource$.totalSize() > this.$_startIndex$ && (this.$_currentPageSize$ += this.$_pageSize$, this.fetch({startIndex:this.$_startIndex$, pageSize:this.$_currentPageSize$}))
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.next", {next:$oj$$11$$.$PagingTableDataSource$.prototype.next});
  $oj$$11$$.$PagingTableDataSource$.prototype.previous = function $$oj$$11$$$$PagingTableDataSource$$$previous$() {
    if(0 != this.$_startIndex$ || -1 != this.$_startIndex$) {
      this.$_startIndex$ -= this.$_pageSize$, this.$_startIndex$ = 0 > this.$_startIndex$ ? 0 : this.$_startIndex$, this.$_currentPageSize$ += this.$_pageSize$, this.fetch({startIndex:this.$_startIndex$, pageSize:this.$_currentPageSize$})
    }
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.previous", {previous:$oj$$11$$.$PagingTableDataSource$.prototype.previous});
  $oj$$11$$.$PagingTableDataSource$.prototype.setPageSize = function $$oj$$11$$$$PagingTableDataSource$$$setPageSize$($n$$19$$) {
    this.$_pageSize$ = $n$$19$$;
    this.$_currentPageSize$ = this.$_startIndex$ + $n$$19$$
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.setPageSize", {setPageSize:$oj$$11$$.$PagingTableDataSource$.prototype.setPageSize});
  $oj$$11$$.$PagingTableDataSource$.prototype.startIndex = $JSCompiler_get$$("$_startIndex$");
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.startIndex", {startIndex:$oj$$11$$.$PagingTableDataSource$.prototype.startIndex});
  $oj$$11$$.$PagingTableDataSource$.prototype.at = function $$oj$$11$$$$PagingTableDataSource$$$at$($index$$133$$) {
    return this.$dataSource$.at($index$$133$$)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.at", {at:$oj$$11$$.$PagingTableDataSource$.prototype.at});
  $oj$$11$$.$PagingTableDataSource$.prototype.get = function $$oj$$11$$$$PagingTableDataSource$$$get$($id$$21$$) {
    return this.$dataSource$.get($id$$21$$)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.get", {get:$oj$$11$$.$PagingTableDataSource$.prototype.get});
  $oj$$11$$.$PagingTableDataSource$.prototype.getCapability = function $$oj$$11$$$$PagingTableDataSource$$$getCapability$($feature$$11$$) {
    return this.$dataSource$.getCapability($feature$$11$$)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getCapability", {getCapability:$oj$$11$$.$PagingTableDataSource$.prototype.getCapability});
  $oj$$11$$.$PagingTableDataSource$.prototype.hasMore = function $$oj$$11$$$$PagingTableDataSource$$$hasMore$() {
    return this.$dataSource$.hasMore()
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.hasMore", {hasMore:$oj$$11$$.$PagingTableDataSource$.prototype.hasMore});
  $oj$$11$$.$PagingTableDataSource$.prototype.indexOf = function $$oj$$11$$$$PagingTableDataSource$$$indexOf$($model$$38$$) {
    return this.$dataSource$.indexOf($model$$38$$)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.indexOf", {indexOf:$oj$$11$$.$PagingTableDataSource$.prototype.indexOf});
  $oj$$11$$.$PagingTableDataSource$.prototype.on = function $$oj$$11$$$$PagingTableDataSource$$$on$($eventType$$32$$, $eventHandler$$10$$) {
    return this.$dataSource$.on($eventType$$32$$, $eventHandler$$10$$)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.on", {on:$oj$$11$$.$PagingTableDataSource$.prototype.on});
  $oj$$11$$.$PagingTableDataSource$.prototype.off = function $$oj$$11$$$$PagingTableDataSource$$$off$($eventType$$33$$, $eventHandler$$11$$) {
    return this.$dataSource$.off($eventType$$33$$, $eventHandler$$11$$)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.off", {off:$oj$$11$$.$PagingTableDataSource$.prototype.off});
  $oj$$11$$.$PagingTableDataSource$.prototype.size = function $$oj$$11$$$$PagingTableDataSource$$$size$() {
    return null != this.$_currentPageSize$ && 0 < this.$_currentPageSize$ && this.$dataSource$.size() > this.$_currentPageSize$ ? this.$_currentPageSize$ : this.$dataSource$.size()
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.size", {size:$oj$$11$$.$PagingTableDataSource$.prototype.size});
  $oj$$11$$.$PagingTableDataSource$.prototype.sort = function $$oj$$11$$$$PagingTableDataSource$$$sort$($criteria$$8$$) {
    this.$dataSource$.sort($criteria$$8$$)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.sort", {sort:$oj$$11$$.$PagingTableDataSource$.prototype.sort});
  $oj$$11$$.$PagingTableDataSource$.prototype.totalSize = function $$oj$$11$$$$PagingTableDataSource$$$totalSize$() {
    return this.$dataSource$.totalSize()
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.totalSize", {totalSize:$oj$$11$$.$PagingTableDataSource$.prototype.totalSize});
  $oj$$11$$.$ArrayTableDataSource$ = function $$oj$$11$$$$ArrayTableDataSource$$($data$$83$$, $options$$233$$) {
    if(!($data$$83$$ instanceof Array) && "function" != typeof $data$$83$$ && "function" != typeof $data$$83$$.$subscribe$) {
      var $errSummary$$2$$ = $oj$$11$$.$Translations$.$getTranslatedString$("oj-ojTable.dataInvalidType.summary"), $errDetail$$2$$ = $oj$$11$$.$Translations$.$getTranslatedString$("oj-ojTable.dataInvalidType.detail");
      throw new $oj$$11$$.$Message$($errSummary$$2$$, $errDetail$$2$$, $oj$$11$$.$Message$.$SEVERITY_LEVEL$.ERROR);
    }
    $oj$$11$$.$ArrayTableDataSource$.$superclass$.constructor.call(this, $data$$83$$, $options$$233$$);
    this.$_rowSet$ = new $oj$$11$$.$ArrayRowSet$($data$$83$$, this.options);
    this.$_addRowSetEventListeners$();
    if(null != $options$$233$$ && ("enabled" == $options$$233$$.startFetch || null == $options$$233$$.startFetch) || null == $options$$233$$) {
      var $self$$58$$ = this;
      setTimeout(function() {
        $self$$58$$.fetch({startFetch:"enabled"})
      }, 0)
    }
  };
  $goog$exportPath_$$("ArrayTableDataSource", $oj$$11$$.$ArrayTableDataSource$, $oj$$11$$);
  $oj$$11$$.$Object$.$createSubclass$($oj$$11$$.$ArrayTableDataSource$, $oj$$11$$.$TableDataSource$, "oj.ArrayTableDataSource");
  $oj$$11$$.$ArrayTableDataSource$.prototype.Init = function $$oj$$11$$$$ArrayTableDataSource$$$Init$() {
    $oj$$11$$.$ArrayTableDataSource$.$superclass$.Init.call(this)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.Init", {Init:$oj$$11$$.$ArrayTableDataSource$.prototype.Init});
  $oj$$11$$.$ArrayTableDataSource$.prototype.add = function $$oj$$11$$$$ArrayTableDataSource$$$add$($m$$20$$, $options$$234$$) {
    this.$_rowSet$.add($m$$20$$, $options$$234$$)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.add", {add:$oj$$11$$.$ArrayTableDataSource$.prototype.add});
  $oj$$11$$.$ArrayTableDataSource$.prototype.at = function $$oj$$11$$$$ArrayTableDataSource$$$at$($index$$134$$) {
    return this.$_rowSet$.at($index$$134$$)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.at", {at:$oj$$11$$.$ArrayTableDataSource$.prototype.at});
  $oj$$11$$.$ArrayTableDataSource$.prototype.fetch = function $$oj$$11$$$$ArrayTableDataSource$$$fetch$($options$$235$$) {
    $options$$235$$ = $options$$235$$ || {};
    null != $options$$235$$.startIndex && $oj$$11$$.$ArrayTableDataSource$.$superclass$.startIndex.call(this, $options$$235$$.startIndex);
    "enabled" == $options$$235$$.startFetch ? (this.$_rowSet$.isEmpty() || "undefined" === typeof this.$_rowSet$.size()) && this.$_rowSet$.fetch($options$$235$$) : this.$_rowSet$.fetch($options$$235$$)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.fetch", {fetch:$oj$$11$$.$ArrayTableDataSource$.prototype.fetch});
  $oj$$11$$.$ArrayTableDataSource$.prototype.get = function $$oj$$11$$$$ArrayTableDataSource$$$get$($id$$22$$) {
    return this.$_rowSet$.get($id$$22$$)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.get", {get:$oj$$11$$.$ArrayTableDataSource$.prototype.get});
  $oj$$11$$.$ArrayTableDataSource$.prototype.getCapability = $JSCompiler_returnArg$$("full");
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.getCapability", {getCapability:$oj$$11$$.$ArrayTableDataSource$.prototype.getCapability});
  $oj$$11$$.$ArrayTableDataSource$.prototype.hasMore = function $$oj$$11$$$$ArrayTableDataSource$$$hasMore$() {
    return null != this.$_rowSet$ ? this.$_rowSet$.hasMore() : !1
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.hasMore", {hasMore:$oj$$11$$.$ArrayTableDataSource$.prototype.hasMore});
  $oj$$11$$.$ArrayTableDataSource$.prototype.indexOf = function $$oj$$11$$$$ArrayTableDataSource$$$indexOf$($row$$27$$) {
    return this.$_rowSet$.indexOf($row$$27$$)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.indexOf", {indexOf:$oj$$11$$.$ArrayTableDataSource$.prototype.indexOf});
  $oj$$11$$.$ArrayTableDataSource$.prototype.remove = function $$oj$$11$$$$ArrayTableDataSource$$$remove$($m$$21$$, $options$$236$$) {
    this.$_rowSet$.remove($m$$21$$, $options$$236$$)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.remove", {remove:$oj$$11$$.$ArrayTableDataSource$.prototype.remove});
  $oj$$11$$.$ArrayTableDataSource$.prototype.reset = function $$oj$$11$$$$ArrayTableDataSource$$$reset$($data$$85$$, $options$$237$$) {
    this.$_rowSet$.reset($data$$85$$, $options$$237$$)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.reset", {reset:$oj$$11$$.$ArrayTableDataSource$.prototype.reset});
  $oj$$11$$.$ArrayTableDataSource$.prototype.size = function $$oj$$11$$$$ArrayTableDataSource$$$size$() {
    return this.$_rowSet$.size()
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.size", {size:$oj$$11$$.$ArrayTableDataSource$.prototype.size});
  $oj$$11$$.$ArrayTableDataSource$.prototype.sort = function $$oj$$11$$$$ArrayTableDataSource$$$sort$($criteria$$9_direction$$7$$) {
    var $key$$69$$ = $criteria$$9_direction$$7$$.key;
    $criteria$$9_direction$$7$$ = $criteria$$9_direction$$7$$.direction;
    var $comparator$$13$$ = null;
    "ascending" == $criteria$$9_direction$$7$$ ? $comparator$$13$$ = function $$comparator$$13$$$($row$$28$$) {
      return $$$$11$$.isFunction($row$$28$$.get) ? $row$$28$$.get($key$$69$$) : $row$$28$$[$key$$69$$]()
    } : "descending" == $criteria$$9_direction$$7$$ && ($comparator$$13$$ = function $$comparator$$13$$$($rowA$$, $rowB$$) {
      var $a$$62$$, $b$$41$$;
      $$$$11$$.isFunction($rowA$$.get) ? ($a$$62$$ = $rowA$$.get($key$$69$$), $b$$41$$ = $rowB$$.get($key$$69$$)) : ($a$$62$$ = $rowA$$[$key$$69$$](), $b$$41$$ = $rowB$$[$key$$69$$]());
      return $a$$62$$ === $b$$41$$ ? 0 : $a$$62$$ > $b$$41$$ ? -1 : 1
    });
    this.$_rowSet$.comparator = $comparator$$13$$;
    this.$_rowSet$.sort()
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.sort", {sort:$oj$$11$$.$ArrayTableDataSource$.prototype.sort});
  $oj$$11$$.$ArrayTableDataSource$.prototype.totalSize = function $$oj$$11$$$$ArrayTableDataSource$$$totalSize$() {
    return this.$_rowSet$.totalSize()
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.totalSize", {totalSize:$oj$$11$$.$ArrayTableDataSource$.prototype.totalSize});
  $oj$$11$$.$ArrayTableDataSource$.prototype.$_addRowSetEventListeners$ = function $$oj$$11$$$$ArrayTableDataSource$$$$_addRowSetEventListeners$$() {
    var $self$$59$$ = this;
    this.$_rowSet$.on($oj$$11$$.$RowSet$.$EventType$.ADD, function($event$$76$$) {
      $self$$59$$.$isFetching$ = !1;
      $oj$$11$$.$TableDataSource$.$superclass$.handleEvent.call($self$$59$$, $oj$$11$$.$RowSet$.$EventType$.ADD, $event$$76$$)
    });
    this.$_rowSet$.on($oj$$11$$.$RowSet$.$EventType$.REMOVE, function($event$$77$$) {
      $self$$59$$.$isFetching$ = !1;
      $oj$$11$$.$TableDataSource$.$superclass$.handleEvent.call($self$$59$$, $oj$$11$$.$RowSet$.$EventType$.REMOVE, $event$$77$$)
    });
    this.$_rowSet$.on($oj$$11$$.$RowSet$.$EventType$.REQUEST, function($event$$78$$) {
      $self$$59$$.$isFetching$ = !0;
      $oj$$11$$.$TableDataSource$.$superclass$.handleEvent.call($self$$59$$, $oj$$11$$.$RowSet$.$EventType$.REQUEST, $event$$78$$)
    });
    this.$_rowSet$.on($oj$$11$$.$RowSet$.$EventType$.RESET, function($event$$79$$) {
      $self$$59$$.$isFetching$ = !1;
      $oj$$11$$.$TableDataSource$.$superclass$.handleEvent.call($self$$59$$, $oj$$11$$.$RowSet$.$EventType$.RESET, $event$$79$$)
    });
    this.$_rowSet$.on($oj$$11$$.$RowSet$.$EventType$.SORT, function($event$$80$$) {
      $self$$59$$.$isFetching$ = !1;
      $oj$$11$$.$TableDataSource$.$superclass$.handleEvent.call($self$$59$$, $oj$$11$$.$RowSet$.$EventType$.SORT, $event$$80$$)
    });
    this.$_rowSet$.on($oj$$11$$.$RowSet$.$EventType$.CHANGE, function($event$$81$$) {
      $self$$59$$.$isFetching$ = !1;
      $oj$$11$$.$TableDataSource$.$superclass$.handleEvent.call($self$$59$$, $oj$$11$$.$RowSet$.$EventType$.CHANGE, $event$$81$$)
    });
    this.$_rowSet$.on($oj$$11$$.$RowSet$.$EventType$.DESTROY, function($event$$82$$) {
      $self$$59$$.$isFetching$ = !1;
      $oj$$11$$.$TableDataSource$.$superclass$.handleEvent.call($self$$59$$, $oj$$11$$.$RowSet$.$EventType$.DESTROY, $event$$82$$)
    });
    this.$_rowSet$.on($oj$$11$$.$RowSet$.$EventType$.SYNC, function($event$$83$$) {
      $self$$59$$.$isFetching$ = !1;
      $oj$$11$$.$TableDataSource$.$superclass$.handleEvent.call($self$$59$$, $oj$$11$$.$RowSet$.$EventType$.SYNC, $event$$83$$)
    });
    this.$_rowSet$.on($oj$$11$$.$RowSet$.$EventType$.ERROR, function($event$$84$$) {
      $self$$59$$.$isFetching$ = !1;
      $oj$$11$$.$TableDataSource$.$superclass$.handleEvent.call($self$$59$$, $oj$$11$$.$RowSet$.$EventType$.ERROR, $event$$84$$)
    })
  };
  (function() {
    $oj$$11$$.$__registerWidget$("oj.ojTable", $$$$11$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3ctable\x3e", widgetEventPrefix:"oj", options:{accessibility:null, data:null, emptyText:null, horizontalGridVisible:"enabled", rowRenderer:null, selectionMode:null, verticalGridVisible:"enabled", columns:[{renderer:null, className:null, field:null, footerClassName:null, footerRenderer:null, footerStyle:null, headerClassName:null, headerRenderer:null, headerStyle:null, headerText:null, id:null, 
    sortable:"auto", sortProperty:null, style:null}], columnsDefault:{renderer:null, className:null, field:null, footerClassName:null, footerRenderer:null, footerStyle:null, headerClassName:null, headerRenderer:null, headerStyle:null, headerText:null, sortable:"auto", sortProperty:null, style:null}, activeRow:null, preActiveRow:null, select:null, scroll:null}, $_BUNDLE_KEY$:{$_MSG_FETCHING_DATA$:"msgFetchingData", $_MSG_NO_DATA$:"msgNoData", $_LABEL_SELECT_COLUMN$:"labelSelectColumn", $_LABEL_SELECT_ROW$:"labelSelectRow", 
    $_ERR_COLUMN_RENDERER_COLUMN_NOT_FOUND_SUMMARY$:"columnRendererColumnNotFound.summary", $_ERR_COLUMN_RENDERER_COLUMN_NOT_FOUND_DETAIL$:"columnRendererColumnNotFound.detail", $_ERR_COLUMN_RENDERER_OPTION_REQUIRED_SUMMARY$:"columnRendererOptionRequired.summary", $_ERR_COLUMN_RENDERER_OPTION_REQUIRED_DETAIL$:"columnRendererOptionRequired.detail", $_ERR_PREACTIVEROW_ERROR_SUMMARY$:"preActiveRowError.summary", $_ERR_PREACTIVEROW_ERROR_DETAIL$:"preActiveRowError.detail", $_ERR_ACTIVEROW_UNAVAILABLE_INDEX_SUMMARY$:"activeRowUnavailableIndex.summary", 
    $_ERR_ACTIVEROW_UNAVAILABLE_INDEX_DETAIL$:"activeRowUnavailableIndex.detail", $_ERR_REFRESHROW_INVALID_INDEX_SUMMARY$:"refreshRowInvalidRowIndex.summary", $_ERR_REFRESHROW_INVALID_INDEX_DETAIL$:"refreshRowInvalidRowIndex.detail", $_ERR_DATA_INVALID_TYPE_SUMMARY$:"dataInvalidType.summary", $_ERR_DATA_INVALID_TYPE_DETAIL$:"dataInvalidType.detail"}, $_COLUMN_HEADER_ID$:"_headerColumn", $_COLUMN_HEADER_TEXT_ID$:"_headerColumnText", $_COLUMN_HEADER_ASC_ID$:"_headerColumnAsc", $_COLUMN_HEADER_DSC_ID$:"_headerColumnDsc", 
    $_COLUMN_HEADER_ID_PREFIX$:"_hdrCol", $_OPTION_AUTO$:"auto", $_OPTION_ENABLED$:"enabled", $_OPTION_DISABLED$:"disabled", $_OPTION_NONE$:"none", $_OPTION_SELECTION_MODES$:{$_SINGLE$:"single", $_MULTIPLE$:"multiple"}, $_COLUMN_SORT_ORDER$:{$_ASCENDING$:"ascending", $_DESCENDING$:"descending"}, $_KEYBOARD_CODES$:{$_KEYBOARD_CODE_CTRL$:17, $_KEYBOARD_CODE_SHIFT$:16, $_KEYBOARD_CODE_SPACEBAR$:32, $_KEYBOARD_CODE_ENTER$:13, $_KEYBOARD_CODE_UP$:38, $_KEYBOARD_CODE_DOWN$:40, $_KEYBOARD_CODE_LEFT$:37, 
    $_KEYBOARD_CODE_RIGHT$:39, $_KEYBOARD_CODE_HOME$:36, $_KEYBOARD_CODE_END$:35, $_KEYBOARD_CODE_TAB$:9, $_KEYBOARD_CODE_ESC$:27, $_KEYBOARD_MODIFIER_SHIFT$:"shiftKey"}, activeRow:function($errSummary$$3_index$$135$$) {
      if(!this.$_getData$()) {
        return-1
      }
      if(null != $errSummary$$3_index$$135$$) {
        if(this.$_activeRowIndex$ != $errSummary$$3_index$$135$$) {
          var $errDetail$$3_oldIndex$$ = this.$_activeRowIndex$;
          try {
            this._trigger("preactiverow", null, {newRowIndex:$errSummary$$3_index$$135$$, oldRowIndex:$errDetail$$3_oldIndex$$})
          }catch($err$$3$$) {
            throw $errSummary$$3_index$$135$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_PREACTIVEROW_ERROR_SUMMARY$), $errDetail$$3_oldIndex$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_PREACTIVEROW_ERROR_DETAIL$, {error:$err$$3$$.toString()}), new $oj$$11$$.$Message$($errSummary$$3_index$$135$$, $errDetail$$3_oldIndex$$, $oj$$11$$.$Message$.$SEVERITY_LEVEL$.ERROR);
          }
          this.$_activeRowIndex$ = $errSummary$$3_index$$135$$;
          this._trigger("activerow", null, {newRowIndex:$errSummary$$3_index$$135$$, oldRowIndex:$errDetail$$3_oldIndex$$});
          this.$_setRowFocus$($errSummary$$3_index$$135$$, !0, null)
        }
        return $errSummary$$3_index$$135$$
      }
      return null != this.$_activeRowIndex$ ? this.$_activeRowIndex$ : -1
    }, columnMetaData:function($columnIdx$$) {
      var $columns$$2$$ = this.$_getColumnDefs$();
      return null === $columnIdx$$ || 0 == arguments.length ? $columns$$2$$ : $columns$$2$$[$columnIdx$$]
    }, refresh:function() {
      this._super();
      this.$_clearCachedTableDimensions$();
      this.$_refresh$()
    }, refreshRow:function($errDetail$$4_rowIdx$$2$$) {
      var $data$$87_errSummary$$4_row$$29$$ = this.$_getData$();
      if(!$data$$87_errSummary$$4_row$$29$$) {
        return!1
      }
      if(isNaN($errDetail$$4_rowIdx$$2$$) || 0 > $errDetail$$4_rowIdx$$2$$ || $errDetail$$4_rowIdx$$2$$ > $data$$87_errSummary$$4_row$$29$$.size() - 1) {
        throw $data$$87_errSummary$$4_row$$29$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_REFRESHROW_INVALID_INDEX_SUMMARY$), $errDetail$$4_rowIdx$$2$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_REFRESHROW_INVALID_INDEX_DETAIL$, {rowIdx:$errDetail$$4_rowIdx$$2$$.toString()}), new $oj$$11$$.$Message$($data$$87_errSummary$$4_row$$29$$, $errDetail$$4_rowIdx$$2$$, $oj$$11$$.$Message$.$SEVERITY_LEVEL$.ERROR);
      }
      $data$$87_errSummary$$4_row$$29$$ = $data$$87_errSummary$$4_row$$29$$.at($errDetail$$4_rowIdx$$2$$);
      if(null == $data$$87_errSummary$$4_row$$29$$) {
        return!1
      }
      try {
        this.$_refreshTableBodyRow$($errDetail$$4_rowIdx$$2$$, $data$$87_errSummary$$4_row$$29$$)
      }catch($e$$67$$) {
        throw $e$$67$$;
      }
      return!0
    }, selection:function($selection$$2_selectionIdxs$$) {
      if(null != $selection$$2_selectionIdxs$$) {
        this.$_clearSelectedRows$();
        var $i$$165_selectedRowIdxs$$, $j$$23_rangeArray_startRowIdx$$, $endColumnIdx_rangeObj_selectedColumnIdxs$$, $endRowIdx_rowSelection$$, $rangeCount_startColumnIdx$$;
        for($i$$165_selectedRowIdxs$$ = 0;$i$$165_selectedRowIdxs$$ < $selection$$2_selectionIdxs$$.length;$i$$165_selectedRowIdxs$$++) {
          $endColumnIdx_rangeObj_selectedColumnIdxs$$ = $selection$$2_selectionIdxs$$[$i$$165_selectedRowIdxs$$];
          if(null == $endColumnIdx_rangeObj_selectedColumnIdxs$$.start || null == $endColumnIdx_rangeObj_selectedColumnIdxs$$.end) {
            return console.log("Error: Invalid range object in selection. Both start and end objects must be specified"), null
          }
          $j$$23_rangeArray_startRowIdx$$ = $endColumnIdx_rangeObj_selectedColumnIdxs$$.start.row;
          $endRowIdx_rowSelection$$ = $endColumnIdx_rangeObj_selectedColumnIdxs$$.end.row;
          $rangeCount_startColumnIdx$$ = $endColumnIdx_rangeObj_selectedColumnIdxs$$.start.column;
          $endColumnIdx_rangeObj_selectedColumnIdxs$$ = $endColumnIdx_rangeObj_selectedColumnIdxs$$.end.column;
          if(null != $j$$23_rangeArray_startRowIdx$$ && null != $endRowIdx_rowSelection$$ && null != $rangeCount_startColumnIdx$$ && null != $endColumnIdx_rangeObj_selectedColumnIdxs$$) {
            return console.log("Error: Invalid range object in selection - Can only support row or column selection. Not both"), null
          }
          if(null != $j$$23_rangeArray_startRowIdx$$ && null != $endRowIdx_rowSelection$$) {
            for(;$j$$23_rangeArray_startRowIdx$$ <= $endRowIdx_rowSelection$$;$j$$23_rangeArray_startRowIdx$$++) {
              try {
                this.$_setRowSelection$($j$$23_rangeArray_startRowIdx$$, !0, null)
              }catch($e$$68$$) {
                console.log("Error: " + $e$$68$$)
              }
            }
          }else {
            if(null != $rangeCount_startColumnIdx$$ && null != $endColumnIdx_rangeObj_selectedColumnIdxs$$) {
              for($j$$23_rangeArray_startRowIdx$$ = $rangeCount_startColumnIdx$$;$j$$23_rangeArray_startRowIdx$$ <= $endColumnIdx_rangeObj_selectedColumnIdxs$$;$j$$23_rangeArray_startRowIdx$$++) {
                try {
                  this.$_setHeaderColumnSelection$($j$$23_rangeArray_startRowIdx$$, !0, null)
                }catch($e$$69$$) {
                  console.log("Error: " + $e$$69$$)
                }
              }
            }else {
              return console.log("Error: Invalid range object in selection - \n                                  start row: " + $j$$23_rangeArray_startRowIdx$$ + "\n                                  end row: " + $endRowIdx_rowSelection$$ + "\n                                  start column: " + $rangeCount_startColumnIdx$$ + "\n                                  end column: " + $endColumnIdx_rangeObj_selectedColumnIdxs$$), null
            }
          }
        }
        return this.selection()
      }
      $i$$165_selectedRowIdxs$$ = this.$_getSelectedRowIdxs$();
      $endColumnIdx_rangeObj_selectedColumnIdxs$$ = this.$_getSelectedHeaderColumnIdxs$();
      $selection$$2_selectionIdxs$$ = null;
      $endRowIdx_rowSelection$$ = !0;
      if(null != $i$$165_selectedRowIdxs$$ && 0 < $i$$165_selectedRowIdxs$$.length) {
        $selection$$2_selectionIdxs$$ = $i$$165_selectedRowIdxs$$
      }else {
        if(null != $endColumnIdx_rangeObj_selectedColumnIdxs$$ && 0 < $endColumnIdx_rangeObj_selectedColumnIdxs$$.length) {
          $selection$$2_selectionIdxs$$ = $endColumnIdx_rangeObj_selectedColumnIdxs$$, $endRowIdx_rowSelection$$ = !1
        }else {
          return null
        }
      }
      $j$$23_rangeArray_startRowIdx$$ = [];
      $rangeCount_startColumnIdx$$ = 0;
      var $previousIdx$$ = null, $selectionIdx$$;
      for($i$$165_selectedRowIdxs$$ = 0;$i$$165_selectedRowIdxs$$ < $selection$$2_selectionIdxs$$.length;$i$$165_selectedRowIdxs$$++) {
        $selectionIdx$$ = $selection$$2_selectionIdxs$$[$i$$165_selectedRowIdxs$$], 0 == $i$$165_selectedRowIdxs$$ ? ($endColumnIdx_rangeObj_selectedColumnIdxs$$ = [], $endColumnIdx_rangeObj_selectedColumnIdxs$$.start = [], $endColumnIdx_rangeObj_selectedColumnIdxs$$.end = [], $endRowIdx_rowSelection$$ ? ($endColumnIdx_rangeObj_selectedColumnIdxs$$.start.row = $selectionIdx$$, $endColumnIdx_rangeObj_selectedColumnIdxs$$.end.row = $selectionIdx$$) : ($endColumnIdx_rangeObj_selectedColumnIdxs$$.start.column = 
        $selectionIdx$$, $endColumnIdx_rangeObj_selectedColumnIdxs$$.end.column = $selectionIdx$$), $j$$23_rangeArray_startRowIdx$$[0] = $endColumnIdx_rangeObj_selectedColumnIdxs$$) : ($endColumnIdx_rangeObj_selectedColumnIdxs$$ = $j$$23_rangeArray_startRowIdx$$[$rangeCount_startColumnIdx$$], $endRowIdx_rowSelection$$ ? $endColumnIdx_rangeObj_selectedColumnIdxs$$.end.row = $selectionIdx$$ : $endColumnIdx_rangeObj_selectedColumnIdxs$$.end.column = $selectionIdx$$, $selectionIdx$$ != $previousIdx$$ + 
        1 && ($endRowIdx_rowSelection$$ ? ($endColumnIdx_rangeObj_selectedColumnIdxs$$.end.row = $previousIdx$$, $endColumnIdx_rangeObj_selectedColumnIdxs$$ = [], $endColumnIdx_rangeObj_selectedColumnIdxs$$.start = [], $endColumnIdx_rangeObj_selectedColumnIdxs$$.end = [], $endColumnIdx_rangeObj_selectedColumnIdxs$$.start.row = $selectionIdx$$, $endColumnIdx_rangeObj_selectedColumnIdxs$$.end.row = $selectionIdx$$) : ($endColumnIdx_rangeObj_selectedColumnIdxs$$.end.column = $previousIdx$$, $endColumnIdx_rangeObj_selectedColumnIdxs$$ = 
        [], $endColumnIdx_rangeObj_selectedColumnIdxs$$.start = [], $endColumnIdx_rangeObj_selectedColumnIdxs$$.end = [], $endColumnIdx_rangeObj_selectedColumnIdxs$$.start.column = $selectionIdx$$, $endColumnIdx_rangeObj_selectedColumnIdxs$$.end.column = $selectionIdx$$), $rangeCount_startColumnIdx$$++, $j$$23_rangeArray_startRowIdx$$[$rangeCount_startColumnIdx$$] = $endColumnIdx_rangeObj_selectedColumnIdxs$$)), $previousIdx$$ = $selectionIdx$$
      }
      return $j$$23_rangeArray_startRowIdx$$
    }, scrollLeft:function($value$$160$$) {
      if(null != $value$$160$$) {
        if(isNaN($value$$160$$) || 0 > $value$$160$$) {
          return console.log("Error: Invalid scrollLeft value: " + $value$$160$$), null
        }
        this.$_getTableDomUtils$().$getScroller$().scrollLeft($value$$160$$)
      }
      return this.$_getTableDomUtils$().$getScroller$().scrollLeft()
    }, scrollTop:function($value$$161$$) {
      if(null != $value$$161$$) {
        if(isNaN($value$$161$$) || 0 > $value$$161$$) {
          return console.log("Error: Invalid scrollTop value: " + $value$$161$$), null
        }
        this.$_getTableDomUtils$().$getScroller$().scrollTop($value$$161$$)
      }
      return this.$_getTableDomUtils$().$getScroller$().scrollTop()
    }, $_ComponentCreate$:function() {
      this._super();
      this.$_draw$();
      this.$_registerCustomEvents$();
      this._on(this.$_events$);
      this.$_registerDomEventListeners$();
      this.$_registerDataSourceEventListeners$()
    }, _destroy:function() {
      var $data$$88_tableContainer$$ = this.$_getData$();
      if(null != this.$_dataSourceEventHandlers$ && null != $data$$88_tableContainer$$) {
        var $i$$166$$;
        for($i$$166$$ = 0;$i$$166$$ < this.$_dataSourceEventHandlers$.length;$i$$166$$++) {
          $data$$88_tableContainer$$.off(this.$_dataSourceEventHandlers$[$i$$166$$].$eventType$, this.$_dataSourceEventHandlers$[$i$$166$$].$eventHandler$)
        }
      }
      this.$_getTableDomUtils$().$getTableBody$().removeAttr($oj$$11$$.Components.$_OJ_CONTAINER_ATTR$);
      this.element.children().remove("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_CLASS$);
      this.element.children().remove("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_BODY_CLASS$);
      this.element.children().remove("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_STATUS_MESSAGE_CLASS$);
      $data$$88_tableContainer$$ = this.$_getTableDomUtils$().$getTableContainer$();
      null != $data$$88_tableContainer$$ && ($data$$88_tableContainer$$[0].parentNode.appendChild(this.element), $data$$88_tableContainer$$[0].parentNode.removeChild($data$$88_tableContainer$$[0]));
      this.element.removeClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_CLASS$)
    }, $_draw$:function() {
      this.$_tableHeight$ = this.element.height();
      this.$_tableWidth$ = this.element.width();
      this.element.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_CLASS$);
      this.$_getTableDomUtils$().$createInitialTable$(this.$_isTableHeaderless$(), this.$_isTableFooterless$(), this.$_handleContextMenuBeforeShow$.bind(this), this.$_handleContextMenuSelect$.bind(this));
      this.$_getTableDomUtils$().$styleInitialTable$();
      this.$_refreshTableHeader$();
      this.$_refreshTableFooter$();
      this.$_getTableDomUtils$().$refreshTableDimensions$();
      this.options.disabled && this.disable();
      this.$_registerResizeListener$(this.$_getTableDomUtils$().$getTableContainer$())
    }, $_events$:{blur:function($event$$85$$) {
      var $table$$ = this.$_getTableDomUtils$().$getTable$();
      0 < $table$$.has($event$$85$$.relatedTarget).length || null != $event$$85$$.originalEvent && $event$$85$$.originalEvent.explicitOriginalTarget == $table$$[0] || (this.$_clearKeyboardKeys$(), this.$_setTableNavigationMode$(!1))
    }, "click .oj-table-checkbox-acc-select-column":function($event$$86$$) {
      var $columnIdx$$1$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$11$$($event$$86$$.currentTarget)), $selected$$13$$ = $$$$11$$($event$$86$$.currentTarget).is(":checked");
      $selected$$13$$ && this.$_setHeaderColumnFocus$($columnIdx$$1$$, !0, null);
      this.$_setHeaderColumnSelection$($columnIdx$$1$$, $selected$$13$$, $event$$86$$.currentTarget, $event$$86$$);
      $event$$86$$.stopPropagation()
    }, "click .oj-table-checkbox-acc-select-row":function($event$$87$$) {
      var $rowIdx$$3$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$11$$($event$$87$$.currentTarget)), $selected$$14$$ = $$$$11$$($event$$87$$.currentTarget).is(":checked");
      $selected$$14$$ && this.$_setRowFocus$($rowIdx$$3$$, !0, null);
      this.$_setRowSelection$($rowIdx$$3$$, $selected$$14$$, $event$$87$$.currentTarget, $event$$87$$);
      $event$$87$$.stopPropagation()
    }, keydown:function($event$$88$$) {
      if(!(null != this.$_getTableDomUtils$().$getTableFooter$() && 0 < this.$_getTableDomUtils$().$getTableFooter$().has($event$$88$$.target).length) && (this.$_addKeyboardKey$($event$$88$$.keyCode), 1 == this.$_getKeyboardKeys$().length || 2 == this.$_getKeyboardKeys$().length)) {
        if(this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_SPACEBAR$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_HOME$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_END$)) {
          $event$$88$$.preventDefault(), $event$$88$$.stopPropagation()
        }
        this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) ? this.$_handleKeydownUpDown$($event$$88$$) : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_LEFT$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_RIGHT$) ? this.$_handleKeydownLeftRight$($event$$88$$) : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_TAB$) && this.$_handleKeydownTab$($event$$88$$)
      }
    }, keyup:function($event$$89$$) {
      if(!(null != this.$_getTableDomUtils$().$getTableFooter$() && 0 < this.$_getTableDomUtils$().$getTableFooter$().has($event$$89$$.target).length)) {
        if(1 == this.$_getKeyboardKeys$().length) {
          var $keyboardCode1$$ = this.$_getKeyboardKeys$()[0];
          $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_SPACEBAR$ ? this.$_handleKeyupSpacebar$($event$$89$$) : $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_ENTER$ ? this.$_handleKeyupEnter$($event$$89$$) : $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_HOME$ ? this.$_handleKeyupHome$($event$$89$$) : $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_END$ ? this.$_handleKeyupEnd$($event$$89$$) : $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_ESC$ && 
          this.$_handleKeyupEsc$($event$$89$$)
        }
        this.$_removeKeyboardKey$($event$$89$$.keyCode)
      }
    }, "mouseenter .oj-table-column-header":function($columnIdx$$2_event$$90$$) {
      $columnIdx$$2_event$$90$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$11$$($columnIdx$$2_event$$90$$.currentTarget));
      this.$_showTableHeaderColumnSortLink$($columnIdx$$2_event$$90$$, !0);
      this.$_showTableHeaderColumnSortLink$($columnIdx$$2_event$$90$$, !1)
    }, "mouseleave .oj-table-column-header":function($columnIdx$$3_event$$91$$) {
      $columnIdx$$3_event$$91$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$11$$($columnIdx$$3_event$$91$$.currentTarget));
      this.$_hideTableHeaderColumnSortLink$($columnIdx$$3_event$$91$$, !0);
      this.$_hideTableHeaderColumnSortLink$($columnIdx$$3_event$$91$$, !1)
    }, "mouseenter .oj-table-data-cell":function($event$$92_rowIdx$$4$$) {
      $event$$92_rowIdx$$4$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$11$$($event$$92_rowIdx$$4$$.currentTarget));
      this.$_updateRowCellsClass$($event$$92_rowIdx$$4$$, {hover:!0})
    }, "mouseleave .oj-table-data-cell":function($event$$93_rowIdx$$5$$) {
      $event$$93_rowIdx$$5$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$11$$($event$$93_rowIdx$$5$$.currentTarget));
      this.$_updateRowCellsClass$($event$$93_rowIdx$$5$$, {hover:!1})
    }, "click .oj-table-column-header-asc-link":function($event$$94$$) {
      this.$_checkFocus$();
      var $columnIdx$$4$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$11$$($event$$94$$.target));
      this.$_handleSortTableHeaderColumn$($columnIdx$$4$$, !0);
      $event$$94$$.preventDefault();
      $event$$94$$.stopPropagation()
    }, "click .oj-table-column-header-acc-asc-link":function($event$$95$$) {
      this.$_checkFocus$();
      var $columnIdx$$5$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$11$$($event$$95$$.target));
      this.$_handleSortTableHeaderColumn$($columnIdx$$5$$, !0);
      $event$$95$$.preventDefault();
      $event$$95$$.stopPropagation()
    }, "click .oj-table-column-header-dsc-link":function($event$$96$$) {
      this.$_checkFocus$();
      var $columnIdx$$6$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$11$$($event$$96$$.target));
      this.$_handleSortTableHeaderColumn$($columnIdx$$6$$, !1);
      $event$$96$$.preventDefault();
      $event$$96$$.stopPropagation()
    }, "click .oj-table-column-header-acc-dsc-link":function($event$$97$$) {
      this.$_checkFocus$();
      var $columnIdx$$7$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$11$$($event$$97$$.target));
      this.$_handleSortTableHeaderColumn$($columnIdx$$7$$, !1);
      $event$$97$$.preventDefault();
      $event$$97$$.stopPropagation()
    }, "click .oj-table-data-cell":function($event$$98$$) {
      this.$_checkFocus$();
      var $rowIdx$$6$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$11$$($event$$98$$.currentTarget));
      this.$_setRowFocus$($rowIdx$$6$$, !0, $event$$98$$.currentTarget);
      if(1 == this.$_getKeyboardKeys$().length) {
        if(this.$_getKeyboardKeys$()[0] == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_SHIFT$) {
          var $lastSelectedRowIdx$$ = this.$_getLastRowSelection$();
          if(null != $lastSelectedRowIdx$$) {
            if($rowIdx$$6$$ < $lastSelectedRowIdx$$) {
              var $i$$167$$;
              for($i$$167$$ = $rowIdx$$6$$;$i$$167$$ <= $lastSelectedRowIdx$$;$i$$167$$++) {
                this.$_setRowSelection$($i$$167$$, !0, $event$$98$$.currentTarget, $event$$98$$)
              }
            }else {
              for($i$$167$$ = $lastSelectedRowIdx$$;$i$$167$$ <= $rowIdx$$6$$;$i$$167$$++) {
                this.$_setRowSelection$($i$$167$$, !0, $event$$98$$.currentTarget, $event$$98$$)
              }
            }
          }
        }else {
          this.$_getKeyboardKeys$()[0] == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_CTRL$ && this.$_setRowSelection$($rowIdx$$6$$, !this.$_getRowSelection$($rowIdx$$6$$), $event$$98$$.currentTarget, $event$$98$$)
        }
      }else {
        0 == this.$_getKeyboardKeys$().length && this.$_setRowSelection$($rowIdx$$6$$, !this.$_getRowSelection$($rowIdx$$6$$), $event$$98$$.currentTarget, $event$$98$$)
      }
    }, "click .oj-table-column-header":function($event$$99$$) {
      this.$_checkFocus$();
      var $columnIdx$$8$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$11$$($event$$99$$.currentTarget));
      this.$_setHeaderColumnFocus$($columnIdx$$8$$, !0, $event$$99$$.currentTarget);
      if(1 == this.$_getKeyboardKeys$().length) {
        if(this.$_getKeyboardKeys$()[0] == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_SHIFT$) {
          var $lastSelectedColumnIdx$$ = this.$_getLastHeaderColumnSelection$();
          if(null != $lastSelectedColumnIdx$$) {
            if($columnIdx$$8$$ < $lastSelectedColumnIdx$$) {
              var $i$$168$$;
              for($i$$168$$ = $columnIdx$$8$$;$i$$168$$ <= $lastSelectedColumnIdx$$;$i$$168$$++) {
                this.$_setHeaderColumnSelection$($i$$168$$, !0, $event$$99$$.currentTarget, $event$$99$$)
              }
            }else {
              for($i$$168$$ = $lastSelectedColumnIdx$$;$i$$168$$ <= $columnIdx$$8$$;$i$$168$$++) {
                this.$_setHeaderColumnSelection$($i$$168$$, !0, $event$$99$$.currentTarget, $event$$99$$)
              }
            }
          }
        }else {
          this.$_getKeyboardKeys$()[0] == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_CTRL$ && this.$_setHeaderColumnSelection$($columnIdx$$8$$, !this.$_getHeaderColumnSelection$($columnIdx$$8$$), $event$$99$$.currentTarget, $event$$99$$)
        }
      }else {
        0 == this.$_getKeyboardKeys$().length && this.$_setHeaderColumnSelection$($columnIdx$$8$$, !this.$_getHeaderColumnSelection$($columnIdx$$8$$), $event$$99$$.currentTarget, $event$$99$$)
      }
      $event$$99$$.preventDefault()
    }}, $_refresh$:function() {
      this.$_clearCachedMetadata$();
      this.$_clearCachedDataMetadata$();
      var $self$$60$$ = this;
      setTimeout(function() {
        $self$$60$$.$_refreshAll$()
      }, 0)
    }, _setOption:function($key$$70$$, $value$$162$$) {
      this._super($key$$70$$, $value$$162$$);
      this.$_refresh$()
    }, $_addKeyboardKey$:function($keyCode$$) {
      var $foundCode_keyboardKeys$$ = !1, $found$$3_prop$$72$$;
      for($found$$3_prop$$72$$ in this.$_KEYBOARD_CODES$) {
        this.$_KEYBOARD_CODES$.hasOwnProperty($found$$3_prop$$72$$) && this.$_KEYBOARD_CODES$[$found$$3_prop$$72$$] == $keyCode$$ && ($foundCode_keyboardKeys$$ = !0)
      }
      if($foundCode_keyboardKeys$$) {
        $foundCode_keyboardKeys$$ = this.$_getKeyboardKeys$();
        $found$$3_prop$$72$$ = !1;
        var $i$$169$$;
        for($i$$169$$ = 0;$i$$169$$ < $foundCode_keyboardKeys$$.length;$i$$169$$++) {
          if($foundCode_keyboardKeys$$[$i$$169$$] == $keyCode$$) {
            $found$$3_prop$$72$$ = !0;
            break
          }
        }
        $found$$3_prop$$72$$ || $foundCode_keyboardKeys$$.push($keyCode$$)
      }
    }, $_checkFocus$:function() {
      this.$_isFocused$() || this.$_getTableDomUtils$().$getTable$().focus()
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
      var $selectedHeaderColumnIdxs$$ = this.$_getSelectedHeaderColumnIdxs$(), $i$$170$$;
      for($i$$170$$ = 0;$i$$170$$ < $selectedHeaderColumnIdxs$$.length;$i$$170$$++) {
        this.$_setHeaderColumnSelection$($selectedHeaderColumnIdxs$$[$i$$170$$], !1, null)
      }
    }, $_clearSelectedRows$:function() {
      var $selectedRowIdxs$$1$$ = this.$_getSelectedRowIdxs$(), $i$$171$$;
      for($i$$171$$ = 0;$i$$171$$ < $selectedRowIdxs$$1$$.length;$i$$171$$++) {
        this.$_setRowSelection$($selectedRowIdxs$$1$$[$i$$171$$], !1, null)
      }
    }, $_clearSortedHeaderColumn$:function($columnIdx$$9$$) {
      var $sortedTableHeaderColumnIdx$$ = this.$_getSortedTableHeaderColumnIdx$();
      if(null != $sortedTableHeaderColumnIdx$$) {
        var $sortedTableHeaderColumn$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($sortedTableHeaderColumnIdx$$), $sorted$$ = $sortedTableHeaderColumn$$.data("sorted");
        $sortedTableHeaderColumn$$.data("sorted", null);
        $sortedTableHeaderColumnIdx$$ != $columnIdx$$9$$ ? $sorted$$ == this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ ? this.$_hideTableHeaderColumnSortLink$($sortedTableHeaderColumnIdx$$, !0) : this.$_hideTableHeaderColumnSortLink$($sortedTableHeaderColumnIdx$$, !1) : ($sortedTableHeaderColumn$$.find("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$).removeClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$), $sortedTableHeaderColumn$$.find("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$).removeClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$))
      }
    }, $_getColumnDefs$:function() {
      this.$_columnDefArray$ || (this.$_columnDefArray$ = this.$_getColumnMetadata$());
      return this.$_columnDefArray$
    }, $_getColumnMetadata$:function() {
      var $columns$$3_columnsSortedArray$$ = this.options.columns, $columnsDefault_sortSupportedData$$ = this.options.columnsDefault;
      if((0 == $columns$$3_columnsSortedArray$$.length || 1 == $columns$$3_columnsSortedArray$$.length && null == $columns$$3_columnsSortedArray$$[0].id && null == $columns$$3_columnsSortedArray$$[0].headerText && null == $columns$$3_columnsSortedArray$$[0].field) && null == $columnsDefault_sortSupportedData$$.headerText && null == $columnsDefault_sortSupportedData$$.field) {
        return[]
      }
      var $defaultedColumns$$ = [], $data$$89_i$$172$$;
      for($data$$89_i$$172$$ = 0;$data$$89_i$$172$$ < $columns$$3_columnsSortedArray$$.length;$data$$89_i$$172$$++) {
        $defaultedColumns$$[$data$$89_i$$172$$] = $$$$11$$.extend({}, $columnsDefault_sortSupportedData$$, $columns$$3_columnsSortedArray$$[$data$$89_i$$172$$])
      }
      $columns$$3_columnsSortedArray$$ = [];
      for($data$$89_i$$172$$ = 0;$data$$89_i$$172$$ < $defaultedColumns$$.length;$data$$89_i$$172$$++) {
        $columns$$3_columnsSortedArray$$.push($defaultedColumns$$[$data$$89_i$$172$$])
      }
      $data$$89_i$$172$$ = this.$_getData$();
      $columnsDefault_sortSupportedData$$ = !1;
      null != $data$$89_i$$172$$ && "full" == $data$$89_i$$172$$.getCapability("sort") && ($columnsDefault_sortSupportedData$$ = !0);
      for($data$$89_i$$172$$ = 0;$data$$89_i$$172$$ < $defaultedColumns$$.length;$data$$89_i$$172$$++) {
        null == $columns$$3_columnsSortedArray$$[$data$$89_i$$172$$].id && ($columns$$3_columnsSortedArray$$[$data$$89_i$$172$$].id = this.$_COLUMN_HEADER_ID_PREFIX$ + $data$$89_i$$172$$), null != $columns$$3_columnsSortedArray$$[$data$$89_i$$172$$].sortable && $columns$$3_columnsSortedArray$$[$data$$89_i$$172$$].sortable != this.$_OPTION_AUTO$ || !$columnsDefault_sortSupportedData$$ || ($columns$$3_columnsSortedArray$$[$data$$89_i$$172$$].sortable = this.$_OPTION_ENABLED$)
      }
      return $columns$$3_columnsSortedArray$$
    }, $_getColumnIdxsForElementsWithStyleClass$:function($elements$$1_styleClass$$) {
      $elements$$1_styleClass$$ = this.$_getTableDomUtils$().$getTable$().find($elements$$1_styleClass$$);
      var $columnIdxs$$ = [];
      if($elements$$1_styleClass$$ && 0 < $elements$$1_styleClass$$.length) {
        var $i$$173$$, $j$$24$$, $alreadyAdded$$, $columnIdx$$10$$;
        for($i$$173$$ = 0;$i$$173$$ < $elements$$1_styleClass$$.length;$i$$173$$++) {
          $columnIdx$$10$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$11$$($elements$$1_styleClass$$.get($i$$173$$)));
          $alreadyAdded$$ = !1;
          for($j$$24$$ = 0;$j$$24$$ < $columnIdxs$$.length;$j$$24$$++) {
            $columnIdxs$$[$j$$24$$] == $columnIdx$$10$$ && ($alreadyAdded$$ = !0)
          }
          $alreadyAdded$$ || $columnIdxs$$.push($columnIdx$$10$$)
        }
      }
      return $columnIdxs$$
    }, $_getColumnRenderer$:function($columnIdx$$11$$, $type$$70$$) {
      var $column$$9$$ = this.$_getColumnDefs$()[$columnIdx$$11$$];
      return"cell" == $type$$70$$ ? $column$$9$$.renderer : "footer" == $type$$70$$ ? $column$$9$$.footerRenderer : "header" == $type$$70$$ ? $column$$9$$.headerRenderer : null
    }, $_getData$:function() {
      if(!this.$_data$ && null != this.options.data) {
        var $data$$90_errSummary$$5$$ = this.options.data;
        if($data$$90_errSummary$$5$$ instanceof $oj$$11$$.$TableDataSource$ || $data$$90_errSummary$$5$$ instanceof $oj$$11$$.$PagingTableDataSource$) {
          this.$_data$ = $data$$90_errSummary$$5$$
        }else {
          var $data$$90_errSummary$$5$$ = $oj$$11$$.$Translations$.$getTranslatedString$("oj-table.dataInvalidType.summary"), $errDetail$$5$$ = $oj$$11$$.$Translations$.$getTranslatedString$("oj-table.dataInvalidType.detail");
          throw new $oj$$11$$.$Message$($data$$90_errSummary$$5$$, $errDetail$$5$$, $oj$$11$$.$Message$.$SEVERITY_LEVEL$.ERROR);
        }
        this.$_dataMetadata$ = this.options.data;
        this.$_registerDataSourceEventListeners$()
      }
      return this.$_data$
    }, $_getFocusedHeaderColumnIdx$:function() {
      return this.$_getColumnIdxsForElementsWithStyleClass$("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CLASS$ + "." + $oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$)[0]
    }, $_getFocusedRowIdx$:function() {
      return this.$_getRowIdxsForElementsWithStyleClass$("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$ + "." + $oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$)[0]
    }, $_getHeaderColumnFocus$:function($columnIdx$$12$$) {
      return this.$_getHeaderColumnState$($columnIdx$$12$$).$focused$
    }, $_getHeaderColumnSelection$:function($columnIdx$$13$$) {
      return this.$_getHeaderColumnState$($columnIdx$$13$$).selected
    }, $_getColumnSelectionMode$:function() {
      return null == this.options.selectionMode ? null : this.options.selectionMode.column
    }, $_getHeaderColumnState$:function($columnIdx$$14_headerColumn$$) {
      $columnIdx$$14_headerColumn$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$14_headerColumn$$);
      return{$focused$:$columnIdx$$14_headerColumn$$.hasClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$), selected:$columnIdx$$14_headerColumn$$.hasClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$)}
    }, $_getKeyboardKeys$:function() {
      this.$_keyboardKeys$ || (this.$_keyboardKeys$ = []);
      return this.$_keyboardKeys$.reverse()
    }, $_getLastHeaderColumnSelection$:function() {
      return null != this.$_lastSelectedColumnIdxArray$ && 0 < this.$_lastSelectedColumnIdxArray$.length ? this.$_lastSelectedColumnIdxArray$[0] : null
    }, $_getLastRowSelection$:function() {
      return null != this.$_lastSelectedRowIdxArray$ && 0 < this.$_lastSelectedRowIdxArray$.length ? this.$_lastSelectedRowIdxArray$[0] : null
    }, $_getJQueryElement$:function($elements$$2$$, $type$$71$$) {
      var $i$$174$$;
      for($i$$174$$ = 0;$i$$174$$ < $$$$11$$($elements$$2$$).length;$i$$174$$++) {
        if($$$$11$$($$$$11$$($elements$$2$$)[$i$$174$$]).is($type$$71$$)) {
          return $$$$11$$($elements$$2$$)[$i$$174$$]
        }
      }
      return null
    }, $_getRowFocus$:function($rowIdx$$7$$) {
      return this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$7$$).hasClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$)
    }, $_getRowHover$:function($rowIdx$$8$$) {
      return this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$8$$).hasClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$)
    }, $_getRowIdxsForElementsWithStyleClass$:function($elements$$3_styleClass$$1$$) {
      $elements$$3_styleClass$$1$$ = this.$_getTableDomUtils$().$getTable$().find($elements$$3_styleClass$$1$$);
      var $rowIdxs$$ = [];
      if($elements$$3_styleClass$$1$$ && 0 < $elements$$3_styleClass$$1$$.length) {
        var $i$$175$$, $j$$25$$, $rowIdx$$9$$, $alreadyAdded$$1$$;
        for($i$$175$$ = 0;$i$$175$$ < $elements$$3_styleClass$$1$$.length;$i$$175$$++) {
          $rowIdx$$9$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$11$$($elements$$3_styleClass$$1$$.get($i$$175$$)));
          $alreadyAdded$$1$$ = !1;
          for($j$$25$$ = 0;$j$$25$$ < $rowIdxs$$.length;$j$$25$$++) {
            $rowIdxs$$[$j$$25$$] == $rowIdx$$9$$ && ($alreadyAdded$$1$$ = !0)
          }
          $alreadyAdded$$1$$ || $rowIdxs$$.push($rowIdx$$9$$)
        }
      }
      return $rowIdxs$$
    }, $_getRowRenderer$:function() {
      return this.options.rowRenderer
    }, $_getRowSelection$:function($rowIdx$$10$$) {
      return this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$10$$).hasClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$)
    }, $_getRowSelectionMode$:function() {
      return null == this.options.selectionMode ? null : this.options.selectionMode.row
    }, $_getSelectedHeaderColumnIdxs$:function() {
      return this.$_getColumnIdxsForElementsWithStyleClass$("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CLASS$ + "." + $oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$)
    }, $_getSelectedRowIdxs$:function() {
      return this.$_getRowIdxsForElementsWithStyleClass$("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$ + "." + $oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$)
    }, $_getSortedTableHeaderColumnIdx$:function() {
      var $tableHeaderColumns$$ = this.$_getTableDomUtils$().$getTableHeaderColumns$(), $i$$176$$, $sorted$$1$$;
      for($i$$176$$ = 0;$i$$176$$ < $tableHeaderColumns$$.length;$i$$176$$++) {
        if($sorted$$1$$ = $$$$11$$($tableHeaderColumns$$[$i$$176$$]).data("sorted"), null != $sorted$$1$$) {
          return $i$$176$$
        }
      }
      return null
    }, $_getTabbableElements$:function($element$$47_tabbableElements$$) {
      $element$$47_tabbableElements$$ = $element$$47_tabbableElements$$.find(":tabbable");
      return null != $element$$47_tabbableElements$$ && 0 < $element$$47_tabbableElements$$.length ? $element$$47_tabbableElements$$ : null
    }, $_getTableDomUtils$:function() {
      this.$_tableDomUtils$ || (this.$_tableDomUtils$ = new $oj$$11$$.$TableDomUtils$(this));
      return this.$_tableDomUtils$
    }, $_getTableRowCount$:function() {
      var $rows$$4$$ = this.$_getTableDomUtils$().$getTableBodyRows$();
      return null != $rows$$4$$ ? $rows$$4$$.length : 0
    }, $_handleContextMenuBeforeShow$:function($columnIdx$$15_event$$100_headerColumn$$1$$) {
      var $contextMenu$$2_tableBodyCell$$ = this.$_getTableDomUtils$().$_menuContainer$;
      this.$_contextMenuEvent$ = $columnIdx$$15_event$$100_headerColumn$$1$$.originalEvent.originalEvent;
      "keydown" === this.$_contextMenuEvent$.type ? $contextMenu$$2_tableBodyCell$$.ojMenu("option", "menuPosition", {my:"left top", at:"left bottom", of:this.$contextMenuEvent$.target}) : $contextMenu$$2_tableBodyCell$$.ojMenu("option", "menuPosition", {my:"left top", at:"left bottom"});
      $columnIdx$$15_event$$100_headerColumn$$1$$ = this.$_getTableDomUtils$().$getFirstAncestor$($$$$11$$(this.$_contextMenuEvent$.target), "oj-table-column-header");
      $contextMenu$$2_tableBodyCell$$ = this.$_getTableDomUtils$().$getFirstAncestor$($$$$11$$(this.$_contextMenuEvent$.target), "oj-table-data-cell");
      null != $contextMenu$$2_tableBodyCell$$ && ($columnIdx$$15_event$$100_headerColumn$$1$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($contextMenu$$2_tableBodyCell$$), $columnIdx$$15_event$$100_headerColumn$$1$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$15_event$$100_headerColumn$$1$$));
      $columnIdx$$15_event$$100_headerColumn$$1$$.attr("data-oj-sortable") == this.$_OPTION_ENABLED$ ? (this.$_getTableDomUtils$().$_menuContainer$.find("[data-oj-command\x3doj-table-sortAsc]").removeClass("oj-disabled"), this.$_getTableDomUtils$().$_menuContainer$.find("[data-oj-command\x3doj-table-sortDsc]").removeClass("oj-disabled")) : (this.$_getTableDomUtils$().$_menuContainer$.find("[data-oj-command\x3doj-table-sortAsc]").addClass("oj-disabled"), this.$_getTableDomUtils$().$_menuContainer$.find("[data-oj-command\x3doj-table-sortDsc]").addClass("oj-disabled"))
    }, $_handleContextMenuSelect$:function($event$$101$$, $ui$$3$$) {
      var $menuItemCommand$$ = $ui$$3$$.item.attr("data-oj-command"), $headerColumn$$2$$ = this.$_getTableDomUtils$().$getFirstAncestor$($$$$11$$(this.$_contextMenuEvent$.target), "oj-table-column-header"), $tableBodyCell$$1$$ = this.$_getTableDomUtils$().$getFirstAncestor$($$$$11$$(this.$_contextMenuEvent$.target), "oj-table-data-cell"), $columnIdx$$16$$ = null;
      null != $headerColumn$$2$$ && ($columnIdx$$16$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($headerColumn$$2$$));
      null != $tableBodyCell$$1$$ && ($columnIdx$$16$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($tableBodyCell$$1$$));
      "oj-table-sortAsc" == $menuItemCommand$$ ? this.$_handleSortTableHeaderColumn$($columnIdx$$16$$, !0) : "oj-table-sortDsc" == $menuItemCommand$$ && this.$_handleSortTableHeaderColumn$($columnIdx$$16$$, !1)
    }, $_handleDataError$:function($error$$14$$) {
      this.$_hideStatusMessage$();
      throw $error$$14$$;
    }, $_handleDataFetchStart$:function() {
      this.$_showStatusMessage$()
    }, $_handleDataFetchEnd$:function($refresh$$1$$) {
      $refresh$$1$$ && (this.$_refreshTableBody$(), this.$_getTableDomUtils$().$refreshTableDimensions$());
      this.$_hideStatusMessage$()
    }, $_handleDataReset$:function() {
      this.$_hideStatusMessage$();
      this.$_refreshTableBody$();
      this.$_getTableDomUtils$().$refreshTableDimensions$();
      this.activeRow(-1)
    }, $_handleDataRowAdd$:function($event$$104_row$$30$$) {
      var $rowIdx$$11$$ = $event$$104_row$$30$$.rowIdx;
      $event$$104_row$$30$$ = $event$$104_row$$30$$.row;
      if(null == $rowIdx$$11$$ || 0 > $rowIdx$$11$$) {
        $rowIdx$$11$$ = this.$_getData$().indexOf($event$$104_row$$30$$)
      }
      this.$_hideStatusMessage$();
      var $tableBodyRow$$ = this.$_getTableDomUtils$().$createTableBodyRow$();
      this.$_getTableDomUtils$().$styleTableBodyRow$($tableBodyRow$$, this.$_getRowSelectionMode$());
      this.$_getTableDomUtils$().$insertTableBodyRow$($rowIdx$$11$$, $tableBodyRow$$, null);
      this.$_refreshTableBodyRow$($rowIdx$$11$$, $event$$104_row$$30$$);
      this.$_getTableDomUtils$().$refreshTableDimensions$();
      this.$_setRowFocus$($rowIdx$$11$$, !0, null)
    }, $_handleDataRowChange$:function($event$$105_row$$31$$) {
      var $rowIdx$$12$$ = $event$$105_row$$31$$.rowIdx;
      $event$$105_row$$31$$ = $event$$105_row$$31$$.row;
      if(null == $rowIdx$$12$$ || 0 > $rowIdx$$12$$) {
        $rowIdx$$12$$ = this.$_getData$().indexOf($event$$105_row$$31$$)
      }
      this.$_hideStatusMessage$();
      this.$_refreshTableBodyRow$($rowIdx$$12$$, $event$$105_row$$31$$);
      this.$_getTableDomUtils$().$refreshTableDimensions$()
    }, $_handleDataRowRemove$:function($event$$106_row$$32_tableBodyRows$$) {
      var $rowIdx$$13$$ = $event$$106_row$$32_tableBodyRows$$.rowIdx;
      $event$$106_row$$32_tableBodyRows$$ = $event$$106_row$$32_tableBodyRows$$.row;
      if(null == $rowIdx$$13$$ || 0 > $rowIdx$$13$$) {
        $rowIdx$$13$$ = $event$$106_row$$32_tableBodyRows$$.index
      }
      this.$_hideStatusMessage$();
      if($event$$106_row$$32_tableBodyRows$$ = this.$_getTableDomUtils$().$getTableBodyRows$()) {
        var $i$$177$$, $tableBodyRow$$1$$, $deletedRow$$;
        for($i$$177$$ = 0;$i$$177$$ < $event$$106_row$$32_tableBodyRows$$.length;$i$$177$$++) {
          if($tableBodyRow$$1$$ = $$$$11$$($event$$106_row$$32_tableBodyRows$$[$i$$177$$]), $deletedRow$$ = null, this.$_getTableDomUtils$().$getElementRowIdx$($tableBodyRow$$1$$) == $rowIdx$$13$$ && ($deletedRow$$ = $tableBodyRow$$1$$), null != $deletedRow$$) {
            $deletedRow$$[0].parentNode.removeChild($deletedRow$$[0]);
            break
          }
        }
        this.$_getTableDomUtils$().$clearCachedDomRowData$();
        this.$_getTableDomUtils$().$refreshTableDimensions$()
      }
    }, $_handleDataSort$:function() {
      this.$_hideStatusMessage$();
      this.$_refreshTableBody$();
      this.$_getTableDomUtils$().$refreshTableDimensions$();
      var $activeRowIdx$$ = this.activeRow();
      null != $activeRowIdx$$ && this.$_setRowFocus$($activeRowIdx$$, !0, null)
    }, $_handleKeydownLeftRight$:function($event$$108$$) {
      var $focusedHeaderColumnIdx$$1$$ = this.$_getFocusedHeaderColumnIdx$(), $columns$$5_newFocusedHeaderColumnSelection$$ = this.$_getColumnDefs$();
      if(null != $focusedHeaderColumnIdx$$1$$) {
        var $newFocusedHeaderColumnIdx$$ = $focusedHeaderColumnIdx$$1$$;
        this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_LEFT$) ? $newFocusedHeaderColumnIdx$$ = 0 < $focusedHeaderColumnIdx$$1$$ ? $focusedHeaderColumnIdx$$1$$ - 1 : $focusedHeaderColumnIdx$$1$$ : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_RIGHT$) && ($newFocusedHeaderColumnIdx$$ = $focusedHeaderColumnIdx$$1$$ < $columns$$5_newFocusedHeaderColumnSelection$$.length - 1 ? $focusedHeaderColumnIdx$$1$$ + 1 : $focusedHeaderColumnIdx$$1$$);
        $newFocusedHeaderColumnIdx$$ != $focusedHeaderColumnIdx$$1$$ && (this.$_setHeaderColumnFocus$($newFocusedHeaderColumnIdx$$, !0, null), $event$$108$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$] && ($columns$$5_newFocusedHeaderColumnSelection$$ = this.$_getHeaderColumnSelection$($newFocusedHeaderColumnIdx$$), this.$_setHeaderColumnSelection$($newFocusedHeaderColumnIdx$$, !$columns$$5_newFocusedHeaderColumnSelection$$, null, $event$$108$$), $columns$$5_newFocusedHeaderColumnSelection$$ && 
        this.$_getHeaderColumnSelection$($focusedHeaderColumnIdx$$1$$) && this.$_setHeaderColumnSelection$($focusedHeaderColumnIdx$$1$$, !1, null, $event$$108$$)))
      }
    }, $_handleKeydownTab$:function($event$$109$$) {
      var $focusedRowIdx$$1_tabbableElementsInRow_tabbableElementsInTable_table$$1_tableBodyRow$$2$$ = this.$_getFocusedRowIdx$();
      if(null != $focusedRowIdx$$1_tabbableElementsInRow_tabbableElementsInTable_table$$1_tableBodyRow$$2$$ && this.$_tableNavMode$) {
        var $tabbableElementsInBody_tabbableElementsInDocument_tableBody$$ = this.$_getTableDomUtils$().$getTableBody$(), $tabbableElementsInBody_tabbableElementsInDocument_tableBody$$ = this.$_getTabbableElements$($tabbableElementsInBody_tabbableElementsInDocument_tableBody$$);
        if(null != $tabbableElementsInBody_tabbableElementsInDocument_tableBody$$) {
          var $currentFocusElement_tableTabIndex$$ = document.activeElement, $isCurrentlyFocused$$ = !1, $i$$178$$;
          for($i$$178$$ = 0;$i$$178$$ < $tabbableElementsInBody_tabbableElementsInDocument_tableBody$$.length;$i$$178$$++) {
            if($currentFocusElement_tableTabIndex$$ == $tabbableElementsInBody_tabbableElementsInDocument_tableBody$$[$i$$178$$]) {
              $isCurrentlyFocused$$ = !0;
              break
            }
          }
          if($isCurrentlyFocused$$) {
            return
          }
          $event$$109$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$] || ($focusedRowIdx$$1_tabbableElementsInRow_tabbableElementsInTable_table$$1_tableBodyRow$$2$$ = this.$_getTableDomUtils$().$getTableBodyRow$($focusedRowIdx$$1_tabbableElementsInRow_tabbableElementsInTable_table$$1_tableBodyRow$$2$$), $focusedRowIdx$$1_tabbableElementsInRow_tabbableElementsInTable_table$$1_tableBodyRow$$2$$ = this.$_getTabbableElements$($focusedRowIdx$$1_tabbableElementsInRow_tabbableElementsInTable_table$$1_tableBodyRow$$2$$), 
          null != $focusedRowIdx$$1_tabbableElementsInRow_tabbableElementsInTable_table$$1_tableBodyRow$$2$$ ? $$$$11$$($focusedRowIdx$$1_tabbableElementsInRow_tabbableElementsInTable_table$$1_tableBodyRow$$2$$[0]).focus() : $$$$11$$($tabbableElementsInBody_tabbableElementsInDocument_tableBody$$[0]).focus(), $event$$109$$.preventDefault(), $event$$109$$.stopPropagation())
        }
      }else {
        $focusedRowIdx$$1_tabbableElementsInRow_tabbableElementsInTable_table$$1_tableBodyRow$$2$$ = this.$_getTableDomUtils$().$getTable$(), $tabbableElementsInBody_tabbableElementsInDocument_tableBody$$ = this.$_getTabbableElements$($$$$11$$(document)), $focusedRowIdx$$1_tabbableElementsInRow_tabbableElementsInTable_table$$1_tableBodyRow$$2$$ = this.$_getTabbableElements$($focusedRowIdx$$1_tabbableElementsInRow_tabbableElementsInTable_table$$1_tableBodyRow$$2$$), $currentFocusElement_tableTabIndex$$ = 
        $tabbableElementsInBody_tabbableElementsInDocument_tableBody$$.index(this.$_getTableDomUtils$().$getTable$()), $$$$11$$($tabbableElementsInBody_tabbableElementsInDocument_tableBody$$[$currentFocusElement_tableTabIndex$$ + $focusedRowIdx$$1_tabbableElementsInRow_tabbableElementsInTable_table$$1_tableBodyRow$$2$$.length + 1]).focus(), $event$$109$$.preventDefault(), $event$$109$$.stopPropagation()
      }
      this.$_removeKeyboardKey$($event$$109$$.keyCode)
    }, $_handleKeydownUpDown$:function($event$$110$$) {
      var $focusedRowIdx$$2$$ = this.$_getFocusedRowIdx$(), $focusedHeaderColumnIdx$$2_newFocusedRowIdx$$ = this.$_getFocusedHeaderColumnIdx$();
      if(null != $focusedRowIdx$$2$$) {
        var $data$$91_newFocusedRowSelection$$ = this.$_getData$(), $focusedHeaderColumnIdx$$2_newFocusedRowIdx$$ = $focusedRowIdx$$2$$;
        this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$) ? $focusedHeaderColumnIdx$$2_newFocusedRowIdx$$ = 0 < $focusedRowIdx$$2$$ ? $focusedRowIdx$$2$$ - 1 : $focusedRowIdx$$2$$ : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) && ($focusedHeaderColumnIdx$$2_newFocusedRowIdx$$ = $focusedRowIdx$$2$$ < $data$$91_newFocusedRowSelection$$.size() - 1 ? $focusedRowIdx$$2$$ + 1 : $focusedRowIdx$$2$$);
        $focusedHeaderColumnIdx$$2_newFocusedRowIdx$$ != $focusedRowIdx$$2$$ ? (this.$_setRowFocus$($focusedHeaderColumnIdx$$2_newFocusedRowIdx$$, !0, null), $event$$110$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$] && ($data$$91_newFocusedRowSelection$$ = this.$_getRowSelection$($focusedHeaderColumnIdx$$2_newFocusedRowIdx$$), this.$_setRowSelection$($focusedHeaderColumnIdx$$2_newFocusedRowIdx$$, !$data$$91_newFocusedRowSelection$$, null, $event$$110$$), $data$$91_newFocusedRowSelection$$ && 
        this.$_getRowSelection$($focusedRowIdx$$2$$) && this.$_setRowSelection$($focusedRowIdx$$2$$, !1, null, $event$$110$$))) : $focusedHeaderColumnIdx$$2_newFocusedRowIdx$$ == $focusedRowIdx$$2$$ && (0 == $focusedRowIdx$$2$$ && this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$)) && this.$_setHeaderColumnFocus$(0, !0, null)
      }else {
        null != $focusedHeaderColumnIdx$$2_newFocusedRowIdx$$ && this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) && this.$_setRowFocus$(0, !0, null)
      }
    }, $_handleKeyupEnd$:function() {
      var $focusedColumnIdx$$ = this.$_getFocusedHeaderColumnIdx$();
      null != $focusedColumnIdx$$ && $focusedColumnIdx$$ != this.$_getColumnDefs$().length - 1 && this.$_setHeaderColumnFocus$(this.$_getColumnDefs$().length - 1, !0, null)
    }, $_handleKeyupEnter$:function() {
      var $focusedColumnIdx$$1$$ = this.$_getFocusedHeaderColumnIdx$();
      if(null != $focusedColumnIdx$$1$$ && this.$_getColumnDefs$()[$focusedColumnIdx$$1$$].sortable == this.$_OPTION_ENABLED$) {
        var $sorted$$2$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($focusedColumnIdx$$1$$).data("sorted");
        null == $sorted$$2$$ || $sorted$$2$$ == this.$_COLUMN_SORT_ORDER$.$_DESCENDING$ ? this.$_handleSortTableHeaderColumn$($focusedColumnIdx$$1$$, !0) : this.$_handleSortTableHeaderColumn$($focusedColumnIdx$$1$$, !1)
      }
    }, $_handleKeyupEsc$:function($event$$113$$) {
      $event$$113$$.preventDefault();
      $event$$113$$.stopPropagation();
      this.$_getTableDomUtils$().$getTable$().focus();
      this.$_setTableNavigationMode$(!1)
    }, $_handleKeyupHome$:function() {
      var $focusedColumnIdx$$2$$ = this.$_getFocusedHeaderColumnIdx$();
      null != $focusedColumnIdx$$2$$ && 0 != $focusedColumnIdx$$2$$ && this.$_setHeaderColumnFocus$(0, !0, null)
    }, $_handleKeyupSpacebar$:function($event$$115$$) {
      var $focusedHeaderColumnIdx$$3_focusedRowIdx$$3$$ = this.$_getFocusedRowIdx$();
      null != $focusedHeaderColumnIdx$$3_focusedRowIdx$$3$$ ? this.$_setRowSelection$($focusedHeaderColumnIdx$$3_focusedRowIdx$$3$$, !this.$_getRowSelection$($focusedHeaderColumnIdx$$3_focusedRowIdx$$3$$), null, $event$$115$$) : ($focusedHeaderColumnIdx$$3_focusedRowIdx$$3$$ = this.$_getFocusedHeaderColumnIdx$(), null != $focusedHeaderColumnIdx$$3_focusedRowIdx$$3$$ && this.$_setHeaderColumnSelection$($focusedHeaderColumnIdx$$3_focusedRowIdx$$3$$, !this.$_getHeaderColumnSelection$($focusedHeaderColumnIdx$$3_focusedRowIdx$$3$$), 
      null, $event$$115$$))
    }, $_handleSortTableHeaderColumn$:function($columnIdx$$17$$, $ascending$$) {
      this.$_clearSortedHeaderColumn$($columnIdx$$17$$);
      var $column$$10_sortField$$ = this.$_getColumnDefs$()[$columnIdx$$17$$], $column$$10_sortField$$ = null == $column$$10_sortField$$.sortProperty ? $column$$10_sortField$$.field : $column$$10_sortField$$.sortProperty, $tableHeaderColumn$$1$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$17$$);
      this.$_invokeDataSort$($column$$10_sortField$$, $ascending$$, null);
      $ascending$$ ? ($tableHeaderColumn$$1$$.data("sorted", this.$_COLUMN_SORT_ORDER$.$_ASCENDING$), $tableHeaderColumn$$1$$.find("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$).addClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$), this.$_showTableHeaderColumnSortLink$($columnIdx$$17$$, !0)) : ($tableHeaderColumn$$1$$.data("sorted", this.$_COLUMN_SORT_ORDER$.$_DESCENDING$), $tableHeaderColumn$$1$$.find("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$).addClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$), 
      this.$_showTableHeaderColumnSortLink$($columnIdx$$17$$, !1))
    }, $_hideNoDataMessage$:function() {
      this.$_getTableDomUtils$().$getTableNoDataMessage$().css("display", "none")
    }, $_hideStatusMessage$:function() {
      this.$_getTableDomUtils$().$getTableStatusMessage$().css("display", "none")
    }, $_hideTableHeaderColumnSortLink$:function($columnIdx$$18$$, $ascending$$1$$) {
      if(this.$_getColumnDefs$()[$columnIdx$$18$$].sortable == this.$_OPTION_ENABLED$) {
        var $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$2$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$18$$), $sorted$$3$$ = $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$2$$.data("sorted");
        !$ascending$$1$$ || null != $sorted$$3$$ && $sorted$$3$$ != this.$_COLUMN_SORT_ORDER$.$_DESCENDING$ ? $ascending$$1$$ || null != $sorted$$3$$ && $sorted$$3$$ != this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ || ($headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$2$$ = $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$2$$.find("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$), $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$2$$.addClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), 
        $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$2$$.removeClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_ENABLED$), $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$2$$.removeClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$)) : ($headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$2$$ = $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$2$$.find("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$), 
        $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$2$$.addClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$2$$.removeClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_ENABLED$), $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$2$$.removeClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$))
      }
    }, $_invokeDataSort$:function($sortField$$1$$, $ascending$$2$$) {
      var $data$$92$$ = this.$_getData$();
      if(!$data$$92$$) {
        return null
      }
      this.$_showStatusMessage$();
      var $sortCriteria$$ = {};
      $sortCriteria$$.key = $sortField$$1$$;
      $sortCriteria$$.direction = $ascending$$2$$ ? this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ : this.$_COLUMN_SORT_ORDER$.$_DESCENDING$;
      $data$$92$$.sort($sortCriteria$$)
    }, $_isColumnMetadataUpdated$:function() {
      if(null != this.$_columnDefArray$) {
        var $columnsMetadata$$ = this.$_getColumnMetadata$();
        if(this.$_columnDefArray$.length != $columnsMetadata$$.length) {
          return!0
        }
        var $i$$179$$, $prop$$73$$;
        for($i$$179$$ = 0;$i$$179$$ < $columnsMetadata$$.length;$i$$179$$++) {
          for($prop$$73$$ in $columnsMetadata$$[$i$$179$$]) {
            if($columnsMetadata$$[$i$$179$$].hasOwnProperty($prop$$73$$) && $columnsMetadata$$[$i$$179$$][$prop$$73$$] != this.$_columnDefArray$[$i$$179$$][$prop$$73$$]) {
              return!0
            }
          }
        }
        return!1
      }
      return!0
    }, $_isFocused$:function() {
      var $currentFocusElement$$1$$ = $$$$11$$(document.activeElement), $table$$2$$ = this.$_getTableDomUtils$().$getTable$();
      return $table$$2$$[0] != $currentFocusElement$$1$$[0] && 0 == $table$$2$$.has($currentFocusElement$$1$$).length ? !1 : !0
    }, $_isKeyboardKeyPressed$:function($keyCode$$1$$) {
      var $keyboardKeys$$1$$ = this.$_getKeyboardKeys$(), $i$$180$$;
      for($i$$180$$ = 0;$i$$180$$ < $keyboardKeys$$1$$.length;$i$$180$$++) {
        if($keyboardKeys$$1$$[$i$$180$$] == $keyCode$$1$$) {
          return!0
        }
      }
      return!1
    }, $_isTableFooterless$:function() {
      var $columns$$6$$ = this.$_getColumnDefs$(), $i$$181$$, $footerRenderer$$;
      for($i$$181$$ = 0;$i$$181$$ < $columns$$6$$.length;$i$$181$$++) {
        if($footerRenderer$$ = this.$_getColumnRenderer$($i$$181$$, "footer"), null != $footerRenderer$$) {
          return!1
        }
      }
      return!0
    }, $_isTableHeaderless$:function() {
      var $columns$$7$$ = this.$_getColumnDefs$(), $i$$182$$;
      for($i$$182$$ = 0;$i$$182$$ < $columns$$7$$.length;$i$$182$$++) {
        if(null != $columns$$7$$[$i$$182$$].headerText || null != $columns$$7$$[$i$$182$$].headerStyle || null != $columns$$7$$[$i$$182$$].sortable && $columns$$7$$[$i$$182$$].sortable != this.$_OPTION_NONE$ || null != $columns$$7$$[$i$$182$$].sortProperty || null != $columns$$7$$[$i$$182$$].headerRenderer) {
          return!1
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
      this.$_refreshTableBody$();
      null != this.$_getData$() && this.$_getData$().$isFetching$ && this.$_showStatusMessage$();
      this.$_getTableDomUtils$().$refreshTableDimensions$()
    }, $_refreshTableBody$:function() {
      var $self$$61$$ = this, $tableBody$$1$$ = this.$_getTableDomUtils$().$getTableBody$(), $data$$93$$ = this.$_getData$();
      $tableBody$$1$$.empty();
      this.$_getTableDomUtils$().$clearCachedDomRowData$();
      if($data$$93$$ && 0 != $data$$93$$.size() && 0 != this.$_getColumnDefs$().length) {
        this.$_hideNoDataMessage$();
        var $tableBodyDocFrag$$ = $$$$11$$(document.createDocumentFragment()), $row$$33_startIndex$$4$$ = $data$$93$$.startIndex(), $endIndex$$1$$ = $row$$33_startIndex$$4$$ + $data$$93$$.size(), $i$$183$$;
        for($i$$183$$ = $row$$33_startIndex$$4$$;$i$$183$$ < $endIndex$$1$$;$i$$183$$++) {
          $row$$33_startIndex$$4$$ = $data$$93$$.at($i$$183$$), null != $row$$33_startIndex$$4$$ && ($row$$33_startIndex$$4$$ instanceof $oj$$11$$.$Row$ ? this.$_refreshTableBodyRow$($i$$183$$, $row$$33_startIndex$$4$$, $tableBodyDocFrag$$) : $$$$11$$.when($row$$33_startIndex$$4$$).done(function($resolvedModel$$) {
            $self$$61$$.$_refreshTableBodyRow$($i$$183$$, $resolvedModel$$, null)
          }))
        }
        $tableBody$$1$$.append($tableBodyDocFrag$$)
      }else {
        this.$_showNoDataMessage$()
      }
    }, $_refreshTableBodyRow$:function($rowIdx$$14$$, $i$$184_row$$34_rowContent$$, $docFrag_j$$28_tableBodyCell$$2$$) {
      var $cellRenderer_rowRenderer$$ = this.$_getRowRenderer$(), $columns$$8_tableBody$$2$$ = this.$_getColumnDefs$();
      if(isNaN($rowIdx$$14$$) || 0 > $rowIdx$$14$$) {
        throw"Error: Invalid rowIdx value: " + $rowIdx$$14$$;
      }
      this.$_hideNoDataMessage$();
      if($cellRenderer_rowRenderer$$) {
        var $tableBodyCells_tableBodyRow$$3$$ = this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$14$$);
        $tableBodyCells_tableBodyRow$$3$$ ? $tableBodyCells_tableBodyRow$$3$$.empty() : ($tableBodyCells_tableBodyRow$$3$$ = this.$_getTableDomUtils$().$createTableBodyRow$(), this.$_getTableDomUtils$().$styleTableBodyRow$($tableBodyCells_tableBodyRow$$3$$, this.$_getRowSelectionMode$()), this.$_getTableDomUtils$().$insertTableBodyRow$($rowIdx$$14$$, $tableBodyCells_tableBodyRow$$3$$, $docFrag_j$$28_tableBodyCell$$2$$));
        $columns$$8_tableBody$$2$$ = $tableBodyCells_tableBodyRow$$3$$.parent();
        $i$$184_row$$34_rowContent$$ = $cellRenderer_rowRenderer$$({rowContext:this.$_getTableDomUtils$().$getRendererContextObject$($i$$184_row$$34_rowContent$$, $tableBodyCells_tableBodyRow$$3$$[0]), row:$i$$184_row$$34_rowContent$$.$pairs$()});
        null != $i$$184_row$$34_rowContent$$ ? $tableBodyCells_tableBodyRow$$3$$.append($i$$184_row$$34_rowContent$$) : ($tableBodyCells_tableBodyRow$$3$$ = null == $docFrag_j$$28_tableBodyCell$$2$$ ? $$$$11$$($columns$$8_tableBody$$2$$.children()[$rowIdx$$14$$]) : $$$$11$$($docFrag_j$$28_tableBodyCell$$2$$.children()[$rowIdx$$14$$]), this.$_getTableDomUtils$().$clearCachedDomRowData$(), this.$_getTableDomUtils$(), this.$_getTableDomUtils$().$styleTableBodyRow$($tableBodyCells_tableBodyRow$$3$$));
        this.$_getTableDomUtils$().$createTableBodyCellAccSelect$($rowIdx$$14$$, $tableBodyCells_tableBodyRow$$3$$);
        $tableBodyCells_tableBodyRow$$3$$ = $tableBodyCells_tableBodyRow$$3$$.children("td");
        for($i$$184_row$$34_rowContent$$ = 1;$i$$184_row$$34_rowContent$$ < $tableBodyCells_tableBodyRow$$3$$.length;$i$$184_row$$34_rowContent$$++) {
          $docFrag_j$$28_tableBodyCell$$2$$ = $$$$11$$($tableBodyCells_tableBodyRow$$3$$[$i$$184_row$$34_rowContent$$]), this.$_getTableDomUtils$().$setTableBodyCellAttributes$($rowIdx$$14$$, $i$$184_row$$34_rowContent$$ - 1, $docFrag_j$$28_tableBodyCell$$2$$), this.$_getTableDomUtils$().$styleTableBodyCell$($i$$184_row$$34_rowContent$$ - 1, $docFrag_j$$28_tableBodyCell$$2$$)
        }
      }else {
        for(null == $docFrag_j$$28_tableBodyCell$$2$$ ? ($tableBodyCells_tableBodyRow$$3$$ = this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$14$$), $tableBodyCells_tableBodyRow$$3$$ || ($tableBodyCells_tableBodyRow$$3$$ = this.$_getTableDomUtils$().$createTableBodyRow$(), this.$_getTableDomUtils$().$styleTableBodyRow$($tableBodyCells_tableBodyRow$$3$$, this.$_getRowSelectionMode$()))) : ($tableBodyCells_tableBodyRow$$3$$ = this.$_getTableDomUtils$().$createTableBodyRow$(), this.$_getTableDomUtils$().$styleTableBodyRow$($tableBodyCells_tableBodyRow$$3$$, 
        this.$_getRowSelectionMode$())), this.$_getTableDomUtils$().$replaceTableBodyRow$($rowIdx$$14$$, $tableBodyCells_tableBodyRow$$3$$, $docFrag_j$$28_tableBodyCell$$2$$), $docFrag_j$$28_tableBodyCell$$2$$ = 0;$docFrag_j$$28_tableBodyCell$$2$$ < $columns$$8_tableBody$$2$$.length;$docFrag_j$$28_tableBodyCell$$2$$++) {
          $cellRenderer_rowRenderer$$ = this.$_getColumnRenderer$($docFrag_j$$28_tableBodyCell$$2$$, "cell"), this.$_getTableDomUtils$().$setTableBodyCell$($rowIdx$$14$$, $docFrag_j$$28_tableBodyCell$$2$$, $tableBodyCells_tableBodyRow$$3$$, $i$$184_row$$34_rowContent$$, $cellRenderer_rowRenderer$$)
        }
      }
    }, $_refreshTableFooter$:function() {
      var $columns$$9$$ = this.$_getColumnDefs$(), $tableFooter_tableFooterRow$$ = this.$_getTableDomUtils$().$getTableFooter$();
      if(!$tableFooter_tableFooterRow$$) {
        if(this.$_isTableFooterless$()) {
          return
        }
        $tableFooter_tableFooterRow$$ = this.$_getTableDomUtils$().$createTableFooter$();
        this.$_getTableDomUtils$().$styleTableFooter$($tableFooter_tableFooterRow$$)
      }
      $tableFooter_tableFooterRow$$ = this.$_getTableDomUtils$().$getTableFooterRow$();
      $tableFooter_tableFooterRow$$.empty();
      if($columns$$9$$ && 0 < $columns$$9$$.length) {
        this.$_getTableDomUtils$().$createTableFooterAccSelect$($tableFooter_tableFooterRow$$);
        var $i$$185$$, $column$$12_footerCellContent$$, $footerRenderer$$1$$, $footerCell$$;
        for($i$$185$$ = 0;$i$$185$$ < $columns$$9$$.length;$i$$185$$++) {
          $column$$12_footerCellContent$$ = $columns$$9$$[$i$$185$$], $footerRenderer$$1$$ = this.$_getColumnRenderer$($i$$185$$, "footer"), $footerCell$$ = this.$_getTableDomUtils$().$createTableFooterCell$(), this.$_getTableDomUtils$().$styleTableFooterCell$($i$$185$$, $footerCell$$), this.$_getTableDomUtils$().$insertTableFooterCell$($i$$185$$, $footerCell$$), $footerRenderer$$1$$ && ($column$$12_footerCellContent$$ = $footerRenderer$$1$$({footerContext:this.$_getTableDomUtils$().$getRendererContextObject$(null, 
          $footerCell$$[0]), column:$column$$12_footerCellContent$$}), null != $column$$12_footerCellContent$$ ? ($footerCell$$.empty(), $footerCell$$.append($column$$12_footerCellContent$$)) : ($footerCell$$ = $$$$11$$($tableFooter_tableFooterRow$$.children(":not(." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$ + ")")[$i$$185$$]), this.$_getTableDomUtils$().$styleTableFooterCell$($i$$185$$, $footerCell$$)))
        }
      }
    }, $_refreshTableHeader$:function() {
      var $columns$$10$$ = this.$_getColumnDefs$(), $tableHeader_tableHeaderRow$$ = this.$_getTableDomUtils$().$getTableHeader$();
      if(!$tableHeader_tableHeaderRow$$) {
        if(this.$_isTableHeaderless$()) {
          return
        }
        $tableHeader_tableHeaderRow$$ = this.$_getTableDomUtils$().$createTableHeader$();
        this.$_getTableDomUtils$().$styleTableHeader$($tableHeader_tableHeaderRow$$)
      }
      $tableHeader_tableHeaderRow$$ = this.$_getTableDomUtils$().$getTableHeaderRow$();
      $tableHeader_tableHeaderRow$$.empty();
      if($columns$$10$$ && 0 < $columns$$10$$.length) {
        var $i$$186_tableHeaderAccSelectRowColumn$$ = this.$_getTableDomUtils$().$createTableHeaderAccSelectRowColumn$();
        $tableHeader_tableHeaderRow$$.append($i$$186_tableHeaderAccSelectRowColumn$$);
        for(var $column$$13_headerColumnContent$$, $headerRenderer$$, $headerColumn$$3$$, $i$$186_tableHeaderAccSelectRowColumn$$ = 0;$i$$186_tableHeaderAccSelectRowColumn$$ < $columns$$10$$.length;$i$$186_tableHeaderAccSelectRowColumn$$++) {
          $column$$13_headerColumnContent$$ = $columns$$10$$[$i$$186_tableHeaderAccSelectRowColumn$$], $headerRenderer$$ = this.$_getColumnRenderer$($i$$186_tableHeaderAccSelectRowColumn$$, "header"), $headerColumn$$3$$ = this.$_getTableDomUtils$().$createTableHeaderColumn$($i$$186_tableHeaderAccSelectRowColumn$$, this.$_getColumnSelectionMode$()), this.$_getTableDomUtils$().$insertTableHeaderColumn$($i$$186_tableHeaderAccSelectRowColumn$$, $headerColumn$$3$$), $headerRenderer$$ && ($column$$13_headerColumnContent$$ = 
          $headerRenderer$$({headerContext:this.$_getTableDomUtils$().$getRendererContextObject$(null, $headerColumn$$3$$[0]), column:$column$$13_headerColumnContent$$}), null != $column$$13_headerColumnContent$$ ? ($headerColumn$$3$$.empty(), $headerColumn$$3$$.append($column$$13_headerColumnContent$$)) : ($headerColumn$$3$$ = $$$$11$$($tableHeader_tableHeaderRow$$.children(":not(." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$ + ")")[$i$$186_tableHeaderAccSelectRowColumn$$]), 
          this.$_getTableDomUtils$().$setTableHeaderColumnAttributes$($i$$186_tableHeaderAccSelectRowColumn$$, $headerColumn$$3$$), this.$_getTableDomUtils$().$styleTableHeaderColumn$($i$$186_tableHeaderAccSelectRowColumn$$, $headerColumn$$3$$, this.$_getColumnSelectionMode$()))), this.$_getTableDomUtils$().$createTableHeaderColumnAccSelect$($i$$186_tableHeaderAccSelectRowColumn$$, this.$_getColumnSelectionMode$())
        }
        this.$_renderedTableHeaderColumns$ = !0
      }
    }, $_registerCustomEvents$:function() {
      var $jqEventSpecial$$ = $$$$11$$.event.special;
      $jqEventSpecial$$.ojtableactiverow = {handle:function $$jqEventSpecial$$$ojtableactiverow$handle$($event$$116$$, $JSCompiler_OptimizeArgumentsArray_p0$$) {
        return $event$$116$$.handleObj.handler.apply(this, [$event$$116$$, $JSCompiler_OptimizeArgumentsArray_p0$$])
      }};
      $jqEventSpecial$$.ojtablepreactiverow = {handle:function $$jqEventSpecial$$$ojtablepreactiverow$handle$($event$$117$$, $JSCompiler_OptimizeArgumentsArray_p1$$) {
        return $event$$117$$.handleObj.handler.apply(this, [$event$$117$$, $JSCompiler_OptimizeArgumentsArray_p1$$])
      }};
      $jqEventSpecial$$.ojtablescroll = {handle:function $$jqEventSpecial$$$ojtablescroll$handle$($event$$118$$, $JSCompiler_OptimizeArgumentsArray_p2$$) {
        return $event$$118$$.handleObj.handler.apply(this, [$event$$118$$, $JSCompiler_OptimizeArgumentsArray_p2$$])
      }};
      $jqEventSpecial$$.ojtableselect = {handle:function $$jqEventSpecial$$$ojtableselect$handle$($event$$119$$, $JSCompiler_OptimizeArgumentsArray_p3$$) {
        return $event$$119$$.handleObj.handler.apply(this, [$event$$119$$, $JSCompiler_OptimizeArgumentsArray_p3$$])
      }}
    }, $_registerDataSourceEventListeners$:function() {
      var $data$$94$$ = this.$_getData$();
      if(null != $data$$94$$) {
        this.$_dataSourceEventHandlers$ = [];
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$11$$.$RowSet$.$EventType$.REQUEST, eventHandler:this.$_handleDataFetchStart$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$11$$.$RowSet$.$EventType$.SYNC, eventHandler:this.$_handleDataFetchEnd$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$11$$.$RowSet$.$EventType$.SORT, eventHandler:this.$_handleDataSort$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$11$$.$RowSet$.$EventType$.ADD, eventHandler:this.$_handleDataRowAdd$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$11$$.$RowSet$.$EventType$.REMOVE, eventHandler:this.$_handleDataRowRemove$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$11$$.$RowSet$.$EventType$.CHANGE, eventHandler:this.$_handleDataRowChange$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$11$$.$RowSet$.$EventType$.RESET, eventHandler:this.$_handleDataReset$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$11$$.$RowSet$.$EventType$.ERROR, eventHandler:this.$_handleDataError$.bind(this)});
        var $i$$187$$;
        for($i$$187$$ = 0;$i$$187$$ < this.$_dataSourceEventHandlers$.length;$i$$187$$++) {
          $data$$94$$.on(this.$_dataSourceEventHandlers$[$i$$187$$].eventType, this.$_dataSourceEventHandlers$[$i$$187$$].eventHandler)
        }
      }
    }, $_registerDomEventListeners$:function() {
      null != this.$_getTableDomUtils$().$getScroller$() && this.$_getTableDomUtils$().$getScroller$().scroll(function($event$$120$$) {
        var $scrollLeft$$ = $$$$11$$($event$$120$$.target).scrollLeft(), $maxScrollLeft_scrollTop$$1$$ = $$$$11$$($event$$120$$.target)[0].scrollWidth - $$$$11$$($event$$120$$.target)[0].clientWidth;
        "rtl" === this.$_GetReadingDirection$() && ($scrollLeft$$ = $maxScrollLeft_scrollTop$$1$$ - $scrollLeft$$);
        var $maxScrollLeft_scrollTop$$1$$ = $$$$11$$($event$$120$$.target).scrollTop(), $tableHeader$$1_tableHeaderRow$$1$$ = this.$_getTableDomUtils$().$getTableHeader$();
        $tableHeader$$1_tableHeaderRow$$1$$ && (this.$_getTableDomUtils$().$isDivScroller$() ? ("rtl" === this.$_GetReadingDirection$() ? $tableHeader$$1_tableHeaderRow$$1$$.css("right", "-" + $scrollLeft$$ + "px") : $tableHeader$$1_tableHeaderRow$$1$$.css("left", "-" + $scrollLeft$$ + "px"), $tableHeader$$1_tableHeaderRow$$1$$.css("width", this.$_tableHeaderWidth$ + $scrollLeft$$ + "px")) : ($tableHeader$$1_tableHeaderRow$$1$$ = this.$_getTableDomUtils$().$getTableHeaderRow$()) && ("rtl" === this.$_GetReadingDirection$() ? 
        $tableHeader$$1_tableHeaderRow$$1$$.css("right", "-" + $scrollLeft$$ + "px") : $tableHeader$$1_tableHeaderRow$$1$$.css("left", "-" + $scrollLeft$$ + "px")), this._trigger("scroll", $event$$120$$, {scrollLeft:$$$$11$$($event$$120$$.target).scrollLeft(), scrollTop:$maxScrollLeft_scrollTop$$1$$}))
      }.bind(this))
    }, $_registerResizeListener$:function($element$$49$$) {
      if(!this.$_isResizeListenerAdded$) {
        var $self$$62$$ = this;
        $oj$$11$$.$DomUtils$.$addResizeListener$($element$$49$$[0], function() {
          $self$$62$$.$_clearCachedTableDimensions$();
          $self$$62$$.$_getTableDomUtils$().$refreshTableDimensions$()
        });
        this.$_isResizeListenerAdded$ = !0
      }
    }, $_removeKeyboardKey$:function($keyCode$$2$$) {
      var $keyboardKeys$$2$$ = this.$_getKeyboardKeys$(), $i$$188$$;
      for($i$$188$$ = 0;$i$$188$$ < $keyboardKeys$$2$$.length;$i$$188$$++) {
        $keyboardKeys$$2$$[$i$$188$$] == $keyCode$$2$$ && $keyboardKeys$$2$$.splice($i$$188$$, 1)
      }
    }, $_scrollColumnIntoViewport$:function($columnIdx$$19_scrollbarWidth$$) {
      var $tableBody$$3$$ = this.$_getTableDomUtils$().$getTableBody$(), $headerColumnRect_tableHeaderColumn$$3$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$19_scrollbarWidth$$);
      if($headerColumnRect_tableHeaderColumn$$3$$) {
        $columnIdx$$19_scrollbarWidth$$ = this.$_getTableDomUtils$().$getScrollbarWidth$();
        var $headerColumnRect_tableHeaderColumn$$3$$ = $headerColumnRect_tableHeaderColumn$$3$$.get(0).getBoundingClientRect(), $tableBodyRect$$ = $tableBody$$3$$.get(0).getBoundingClientRect(), $scrollLeftDiff_scrolledLeft$$ = !1;
        $headerColumnRect_tableHeaderColumn$$3$$.left < $tableBodyRect$$.left && ($scrollLeftDiff_scrolledLeft$$ = $tableBodyRect$$.left - $headerColumnRect_tableHeaderColumn$$3$$.left, $tableBody$$3$$.scrollLeft($tableBody$$3$$.scrollLeft() - $scrollLeftDiff_scrolledLeft$$), $scrollLeftDiff_scrolledLeft$$ = !0);
        $headerColumnRect_tableHeaderColumn$$3$$.right > $tableBodyRect$$.right - $columnIdx$$19_scrollbarWidth$$ && !$scrollLeftDiff_scrolledLeft$$ && ($scrollLeftDiff_scrolledLeft$$ = $headerColumnRect_tableHeaderColumn$$3$$.right - $tableBodyRect$$.right + $columnIdx$$19_scrollbarWidth$$, $tableBody$$3$$.scrollLeft($tableBody$$3$$.scrollLeft() + $scrollLeftDiff_scrolledLeft$$))
      }
    }, $_scrollRowIntoViewport$:function($rowIdx$$15_scrollTopDiff_scrollbarHeight$$) {
      var $rowRect_tableBodyRow$$4$$ = this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$15_scrollTopDiff_scrollbarHeight$$);
      $rowIdx$$15_scrollTopDiff_scrollbarHeight$$ = this.$_getTableDomUtils$().$getScrollbarHeight$();
      var $rowRect_tableBodyRow$$4$$ = $rowRect_tableBodyRow$$4$$.get(0).getBoundingClientRect(), $scrollingElement$$ = this.$_getTableDomUtils$().$getScroller$(), $scrollingElementRect$$ = $scrollingElement$$.get(0).getBoundingClientRect(), $scrolledDown$$ = !1;
      $rowRect_tableBodyRow$$4$$.bottom > $scrollingElementRect$$.bottom - $rowIdx$$15_scrollTopDiff_scrollbarHeight$$ && ($rowIdx$$15_scrollTopDiff_scrollbarHeight$$ = $rowRect_tableBodyRow$$4$$.bottom - $scrollingElementRect$$.bottom + $rowIdx$$15_scrollTopDiff_scrollbarHeight$$, $scrollingElement$$.scrollTop($scrollingElement$$.scrollTop() + $rowIdx$$15_scrollTopDiff_scrollbarHeight$$), $scrolledDown$$ = !0);
      $rowRect_tableBodyRow$$4$$.top < $scrollingElementRect$$.top && !$scrolledDown$$ && ($rowIdx$$15_scrollTopDiff_scrollbarHeight$$ = $scrollingElementRect$$.top - $rowRect_tableBodyRow$$4$$.top, $scrollingElement$$.scrollTop($scrollingElement$$.scrollTop() - $rowIdx$$15_scrollTopDiff_scrollbarHeight$$))
    }, $_setHeaderColumnFocus$:function($columnIdx$$20$$, $focused$$, $element$$50$$) {
      if($focused$$) {
        var $focusedHeaderColumnIdx$$4$$ = this.$_getFocusedHeaderColumnIdx$();
        null != $focusedHeaderColumnIdx$$4$$ && $focusedHeaderColumnIdx$$4$$ != $columnIdx$$20$$ && this.$_setHeaderColumnFocus$($focusedHeaderColumnIdx$$4$$, !1, $element$$50$$);
        this.$_clearFocusedRow$();
        this.$_clearSelectedRows$();
        this.$_scrollColumnIntoViewport$($columnIdx$$20$$)
      }
      this.$_setHeaderColumnState$($columnIdx$$20$$, {$focused$:$focused$$}, $element$$50$$)
    }, $_setHeaderColumnSelection$:function($accSelectionColumn_columnIdx$$21$$, $selected$$15$$, $element$$51$$, $event$$121$$) {
      if(this.$_getColumnSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ || this.$_getColumnSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_MULTIPLE$) {
        if(isNaN($accSelectionColumn_columnIdx$$21$$) || 0 > $accSelectionColumn_columnIdx$$21$$) {
          throw"Error: Invalid column selection value: " + $accSelectionColumn_columnIdx$$21$$;
        }
        this.$_getColumnSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ && $selected$$15$$ && this.$_clearSelectedHeaderColumns$();
        this.$_setHeaderColumnState$($accSelectionColumn_columnIdx$$21$$, {selected:$selected$$15$$}, $element$$51$$, $event$$121$$);
        this.$_setLastHeaderColumnSelection$($accSelectionColumn_columnIdx$$21$$, $selected$$15$$);
        $accSelectionColumn_columnIdx$$21$$ = this.$_getTableDomUtils$().$getTableHeaderColumnAccSelect$($accSelectionColumn_columnIdx$$21$$);
        $$$$11$$($accSelectionColumn_columnIdx$$21$$.children("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_COLUMN_CLASS$)[0]).prop("checked", $selected$$15$$)
      }
    }, $_setHeaderColumnState$:function($columnIdx$$22$$, $selected$$16_state$$, $element$$52_headerColumn$$4$$, $event$$122$$) {
      if($element$$52_headerColumn$$4$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$22$$)) {
        var $focused$$1$$ = $selected$$16_state$$.$focused$;
        $selected$$16_state$$ = $selected$$16_state$$.selected;
        if(null != $selected$$16_state$$) {
          var $selectionChanged$$ = !1;
          $element$$52_headerColumn$$4$$.hasClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) != $selected$$16_state$$ && ($selected$$16_state$$ ? $element$$52_headerColumn$$4$$.addClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) : $element$$52_headerColumn$$4$$.removeClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$), $selectionChanged$$ = !0);
          $selectionChanged$$ && this._trigger("select", $event$$122$$, {column:$columnIdx$$22$$, selectionAdded:$selected$$16_state$$})
        }
        null != $focused$$1$$ && ($focused$$1$$ ? ($element$$52_headerColumn$$4$$.addClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$), this.$_showTableHeaderColumnSortLink$($columnIdx$$22$$, !0), this.$_showTableHeaderColumnSortLink$($columnIdx$$22$$, !1)) : ($element$$52_headerColumn$$4$$.removeClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$), this.$_hideTableHeaderColumnSortLink$($columnIdx$$22$$, !0), this.$_hideTableHeaderColumnSortLink$($columnIdx$$22$$, !1)));
        this.$_updateHeaderColumnCellsClass$($columnIdx$$22$$)
      }
    }, $_setLastHeaderColumnSelection$:function($columnIdx$$23$$, $selected$$17$$) {
      this.$_lastSelectedColumnIdxArray$ || (this.$_lastSelectedColumnIdxArray$ = []);
      var $i$$189$$;
      for($i$$189$$ = 0;$i$$189$$ < this.$_lastSelectedColumnIdxArray$.length;$i$$189$$++) {
        if(this.$_lastSelectedColumnIdxArray$[$i$$189$$] == $columnIdx$$23$$) {
          this.$_lastSelectedColumnIdxArray$.splice($i$$189$$, 1);
          break
        }
      }
      $selected$$17$$ && this.$_lastSelectedColumnIdxArray$.push($columnIdx$$23$$)
    }, $_setLastRowSelection$:function($rowIdx$$16$$, $selected$$18$$) {
      this.$_lastSelectedRowIdxArray$ || (this.$_lastSelectedRowIdxArray$ = []);
      for(var $i$$190$$ = 0;$i$$190$$ < this.$_lastSelectedRowIdxArray$.length;$i$$190$$++) {
        if(this.$_lastSelectedRowIdxArray$[$i$$190$$] == $rowIdx$$16$$) {
          this.$_lastSelectedRowIdxArray$.splice($i$$190$$, 1);
          break
        }
      }
      $selected$$18$$ && this.$_lastSelectedRowIdxArray$.push($rowIdx$$16$$)
    }, $_setRowFocus$:function($rowIdx$$17$$, $focused$$2$$, $element$$53$$) {
      if(-1 == $rowIdx$$17$$) {
        this.$_clearFocusedRow$()
      }else {
        var $tableBodyRow$$5$$ = this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$17$$);
        if($tableBodyRow$$5$$) {
          if($focused$$2$$) {
            var $focusedRowIdx$$4$$ = this.$_getFocusedRowIdx$();
            null != $focusedRowIdx$$4$$ && $focusedRowIdx$$4$$ != $rowIdx$$17$$ && this.$_setRowFocus$($focusedRowIdx$$4$$, !1, $element$$53$$);
            this.activeRow($rowIdx$$17$$) == $rowIdx$$17$$ && ($tableBodyRow$$5$$.addClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$), this.$_scrollRowIntoViewport$($rowIdx$$17$$), this.$_updateRowCellsClass$($rowIdx$$17$$, {$focused$:!0, hover:!1}), this.$_clearFocusedHeaderColumn$(), this.$_clearSelectedHeaderColumns$(), this.$_setTableNavigationMode$(!0))
          }else {
            $tableBodyRow$$5$$.removeClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$)
          }
          this.$_updateRowCellsClass$($rowIdx$$17$$, {$focused$:$focused$$2$$})
        }
      }
    }, $_setRowSelection$:function($accSelectionCell_rowIdx$$18$$, $selected$$19$$, $element$$54_tableBodyRow$$6$$, $event$$123$$) {
      if(this.$_getRowSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ || this.$_getRowSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_MULTIPLE$) {
        if(isNaN($accSelectionCell_rowIdx$$18$$) || 0 > $accSelectionCell_rowIdx$$18$$) {
          throw"Error: Invalid row selection value: " + $accSelectionCell_rowIdx$$18$$;
        }
        this.$_getRowSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ && $selected$$19$$ && this.$_clearSelectedRows$();
        $element$$54_tableBodyRow$$6$$ = this.$_getTableDomUtils$().$getTableBodyRow$($accSelectionCell_rowIdx$$18$$);
        var $selectionChanged$$1$$ = !1;
        $element$$54_tableBodyRow$$6$$.hasClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) != $selected$$19$$ && ($selected$$19$$ ? $element$$54_tableBodyRow$$6$$.addClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) : $element$$54_tableBodyRow$$6$$.removeClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$), $selectionChanged$$1$$ = !0);
        $selectionChanged$$1$$ && this._trigger("select", $event$$123$$, {row:$accSelectionCell_rowIdx$$18$$, selectionAdded:$selected$$19$$});
        $selectionChanged$$1$$ && ($selected$$19$$ ? this.$_updateRowCellsClass$($accSelectionCell_rowIdx$$18$$, {hover:!1, $focused$:!1, selected:!0}) : this.$_updateRowCellsClass$($accSelectionCell_rowIdx$$18$$, {selected:!1}));
        this.$_setLastRowSelection$($accSelectionCell_rowIdx$$18$$, $selected$$19$$);
        $accSelectionCell_rowIdx$$18$$ = this.$_getTableDomUtils$().$getTableBodyCellAccSelect$($element$$54_tableBodyRow$$6$$);
        $$$$11$$($accSelectionCell_rowIdx$$18$$.children("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_ROW_CLASS$)[0]).prop("checked", $selected$$19$$)
      }
    }, $_setTableNavigationMode$:$JSCompiler_set$$("$_tableNavMode$"), $_showNoDataMessage$:function() {
      this.$_getTableDomUtils$().$getTableNoDataMessage$().css("display", "inline")
    }, $_showStatusMessage$:function() {
      this.$_getTableDomUtils$().$getTableStatusMessage$().css("display", "inline")
    }, $_showTableHeaderColumnSortLink$:function($columnIdx$$24$$, $ascending$$3$$) {
      if(this.$_getColumnDefs$()[$columnIdx$$24$$].sortable == this.$_OPTION_ENABLED$) {
        var $headerColumnAscLink$$2_headerColumnDscLink$$2_tableHeaderColumn$$4$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$24$$);
        $headerColumnAscLink$$2_headerColumnDscLink$$2_tableHeaderColumn$$4$$ && ($headerColumnAscLink$$2_headerColumnDscLink$$2_tableHeaderColumn$$4$$ = $ascending$$3$$ ? $headerColumnAscLink$$2_headerColumnDscLink$$2_tableHeaderColumn$$4$$.find("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$) : $headerColumnAscLink$$2_headerColumnDscLink$$2_tableHeaderColumn$$4$$.find("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$), $headerColumnAscLink$$2_headerColumnDscLink$$2_tableHeaderColumn$$4$$.addClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_ENABLED$), 
        $headerColumnAscLink$$2_headerColumnDscLink$$2_tableHeaderColumn$$4$$.removeClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$))
      }
    }, $_updateHeaderColumnCellsClass$:function($columnIdx$$25$$) {
      var $selected$$20$$ = this.$_getHeaderColumnState$($columnIdx$$25$$).selected, $data$$95$$ = this.$_getData$(), $i$$191$$, $tableBodyCell$$3$$;
      for($i$$191$$ = 0;$i$$191$$ < $data$$95$$.size();$i$$191$$++) {
        $tableBodyCell$$3$$ = this.$_getTableDomUtils$().$getTableBodyCell$($i$$191$$, $columnIdx$$25$$), $selected$$20$$ ? $$$$11$$($tableBodyCell$$3$$).addClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) : $$$$11$$($tableBodyCell$$3$$).removeClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$)
      }
    }, $_updateRowCellsClass$:function($rowIdx$$19$$, $state$$2$$) {
      var $tableBodyCells$$1$$ = this.$_getTableDomUtils$().$getTableBodyCells$($rowIdx$$19$$), $focused$$3$$ = $state$$2$$.$focused$, $selected$$21$$ = $state$$2$$.selected, $hover$$ = $state$$2$$.hover;
      if($tableBodyCells$$1$$) {
        if(null != $hover$$) {
          var $i$$192$$;
          for($i$$192$$ = 0;$i$$192$$ < $tableBodyCells$$1$$.length;$i$$192$$++) {
            $hover$$ ? $$$$11$$($tableBodyCells$$1$$[$i$$192$$]).addClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$) : $$$$11$$($tableBodyCells$$1$$[$i$$192$$]).removeClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$)
          }
        }
        if(null != $focused$$3$$) {
          for($i$$192$$ = 0;$i$$192$$ < $tableBodyCells$$1$$.length;$i$$192$$++) {
            $focused$$3$$ ? $$$$11$$($tableBodyCells$$1$$[$i$$192$$]).addClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$) : $$$$11$$($tableBodyCells$$1$$[$i$$192$$]).removeClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$)
          }
        }
        if(null != $selected$$21$$) {
          for($i$$192$$ = 0;$i$$192$$ < $tableBodyCells$$1$$.length;$i$$192$$++) {
            $selected$$21$$ ? $$$$11$$($tableBodyCells$$1$$[$i$$192$$]).addClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) : $$$$11$$($tableBodyCells$$1$$[$i$$192$$]).removeClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$)
          }
        }
      }
    }})
  })();
  $oj$$11$$.$FlattenedTreeTableDataSource$ = function $$oj$$11$$$$FlattenedTreeTableDataSource$$($data$$96$$, $options$$240$$) {
    $options$$240$$ = $options$$240$$ || {};
    if(!($data$$96$$ instanceof $oj$$11$$.$FlattenedTreeDataSource$)) {
      var $errSummary$$6$$ = $oj$$11$$.$Translations$.$getTranslatedString$("oj-table.dataInvalidType.summary"), $errDetail$$6$$ = $oj$$11$$.$Translations$.$getTranslatedString$("oj-table.dataInvalidType.detail");
      throw new $oj$$11$$.$Message$($errSummary$$6$$, $errDetail$$6$$, $oj$$11$$.$Message$.$SEVERITY_LEVEL$.ERROR);
    }
    this.$_rowSet$ = new $oj$$11$$.$FlattenedTreeRowSet$($data$$96$$, $options$$240$$);
    this.$_addRowSetEventListeners$();
    this.Init();
    if(null != $options$$240$$ && ("enabled" == $options$$240$$.startFetch || null == $options$$240$$.startFetch) || null == $options$$240$$) {
      var $self$$63$$ = this;
      setTimeout(function() {
        $self$$63$$.fetch({startFetch:"enabled"})
      }, 0)
    }
  };
  $goog$exportPath_$$("FlattenedTreeTableDataSource", $oj$$11$$.$FlattenedTreeTableDataSource$, $oj$$11$$);
  $oj$$11$$.$Object$.$createSubclass$($oj$$11$$.$FlattenedTreeTableDataSource$, $oj$$11$$.$TableDataSource$, "oj.FlattenedTreeTableDataSource");
  $oj$$11$$.$FlattenedTreeTableDataSource$.prototype.Init = function $$oj$$11$$$$FlattenedTreeTableDataSource$$$Init$() {
    $oj$$11$$.$FlattenedTreeTableDataSource$.$superclass$.Init.call(this)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.Init", {Init:$oj$$11$$.$FlattenedTreeTableDataSource$.prototype.Init});
  $oj$$11$$.$FlattenedTreeTableDataSource$.prototype.fetch = function $$oj$$11$$$$FlattenedTreeTableDataSource$$$fetch$($options$$241$$) {
    this.$_rowSet$.fetch($options$$241$$)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.fetch", {fetch:$oj$$11$$.$FlattenedTreeTableDataSource$.prototype.fetch});
  $oj$$11$$.$FlattenedTreeTableDataSource$.prototype.at = function $$oj$$11$$$$FlattenedTreeTableDataSource$$$at$($index$$136$$) {
    return this.$_rowSet$.at($index$$136$$)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.at", {at:$oj$$11$$.$FlattenedTreeTableDataSource$.prototype.at});
  $oj$$11$$.$FlattenedTreeTableDataSource$.prototype.collapse = function $$oj$$11$$$$FlattenedTreeTableDataSource$$$collapse$($rowKey$$18$$) {
    this.$_rowSet$.collapse($rowKey$$18$$)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.collapse", {collapse:$oj$$11$$.$FlattenedTreeTableDataSource$.prototype.collapse});
  $oj$$11$$.$FlattenedTreeTableDataSource$.prototype.expand = function $$oj$$11$$$$FlattenedTreeTableDataSource$$$expand$($rowKey$$19$$) {
    this.$_rowSet$.expand($rowKey$$19$$)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.expand", {expand:$oj$$11$$.$FlattenedTreeTableDataSource$.prototype.expand});
  $oj$$11$$.$FlattenedTreeTableDataSource$.prototype.get = function $$oj$$11$$$$FlattenedTreeTableDataSource$$$get$($id$$23$$) {
    return this.$_rowSet$.get($id$$23$$)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.get", {get:$oj$$11$$.$FlattenedTreeTableDataSource$.prototype.get});
  $oj$$11$$.$FlattenedTreeTableDataSource$.prototype.hasMore = function $$oj$$11$$$$FlattenedTreeTableDataSource$$$hasMore$() {
    return this.$_rowSet$.hasMore()
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.hasMore", {hasMore:$oj$$11$$.$FlattenedTreeTableDataSource$.prototype.hasMore});
  $oj$$11$$.$FlattenedTreeTableDataSource$.prototype.indexOf = function $$oj$$11$$$$FlattenedTreeTableDataSource$$$indexOf$($model$$39$$) {
    return this.$_rowSet$.indexOf($model$$39$$)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.indexOf", {indexOf:$oj$$11$$.$FlattenedTreeTableDataSource$.prototype.indexOf});
  $oj$$11$$.$FlattenedTreeTableDataSource$.prototype.on = function $$oj$$11$$$$FlattenedTreeTableDataSource$$$on$($eventType$$34$$, $eventHandler$$12$$) {
    if("expand" == $eventType$$34$$ || "collapse" == $eventType$$34$$) {
      this.$_rowSet$.on($eventType$$34$$, $eventHandler$$12$$)
    }else {
      $oj$$11$$.$FlattenedTreeTableDataSource$.$superclass$.on.call(this, $eventType$$34$$, $eventHandler$$12$$)
    }
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.on", {on:$oj$$11$$.$FlattenedTreeTableDataSource$.prototype.on});
  $oj$$11$$.$FlattenedTreeTableDataSource$.prototype.off = function $$oj$$11$$$$FlattenedTreeTableDataSource$$$off$($eventType$$35$$, $eventHandler$$13$$) {
    "expand" == $eventType$$35$$ || "collapse" == $eventType$$35$$ ? this.$_rowSet$.off($eventType$$35$$, $eventHandler$$13$$) : $oj$$11$$.$FlattenedTreeTableDataSource$.$superclass$.off.call(this, $eventType$$35$$, $eventHandler$$13$$)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.off", {off:$oj$$11$$.$FlattenedTreeTableDataSource$.prototype.off});
  $oj$$11$$.$FlattenedTreeTableDataSource$.prototype.size = function $$oj$$11$$$$FlattenedTreeTableDataSource$$$size$() {
    return this.$_rowSet$.size()
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.size", {size:$oj$$11$$.$FlattenedTreeTableDataSource$.prototype.size});
  $oj$$11$$.$FlattenedTreeTableDataSource$.prototype.sort = function $$oj$$11$$$$FlattenedTreeTableDataSource$$$sort$($comparator$$14$$, $options$$242$$) {
    this.$_rowSet$.sort($options$$242$$)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.sort", {sort:$oj$$11$$.$FlattenedTreeTableDataSource$.prototype.sort});
  $oj$$11$$.$FlattenedTreeTableDataSource$.prototype.startIndex = function $$oj$$11$$$$FlattenedTreeTableDataSource$$$startIndex$() {
    return this.$_rowSet$.startIndex()
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.startIndex", {startIndex:$oj$$11$$.$FlattenedTreeTableDataSource$.prototype.startIndex});
  $oj$$11$$.$FlattenedTreeTableDataSource$.prototype.totalSize = function $$oj$$11$$$$FlattenedTreeTableDataSource$$$totalSize$() {
    return this.$_rowSet$.totalSize()
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.totalSize", {totalSize:$oj$$11$$.$FlattenedTreeTableDataSource$.prototype.totalSize});
  $oj$$11$$.$FlattenedTreeTableDataSource$.prototype.$_addRowSetEventListeners$ = function $$oj$$11$$$$FlattenedTreeTableDataSource$$$$_addRowSetEventListeners$$() {
    var $self$$64$$ = this;
    this.$_rowSet$.on($oj$$11$$.$RowSet$.$EventType$.ADD, function($event$$124$$) {
      $oj$$11$$.$TableDataSource$.$superclass$.handleEvent.call($self$$64$$, $oj$$11$$.$RowSet$.$EventType$.ADD, $event$$124$$)
    });
    this.$_rowSet$.on($oj$$11$$.$RowSet$.$EventType$.REMOVE, function($event$$125$$) {
      $oj$$11$$.$TableDataSource$.$superclass$.handleEvent.call($self$$64$$, $oj$$11$$.$RowSet$.$EventType$.REMOVE, $event$$125$$)
    });
    this.$_rowSet$.on($oj$$11$$.$RowSet$.$EventType$.REQUEST, function($event$$126$$) {
      $oj$$11$$.$TableDataSource$.$superclass$.handleEvent.call($self$$64$$, $oj$$11$$.$RowSet$.$EventType$.REQUEST, $event$$126$$)
    });
    this.$_rowSet$.on($oj$$11$$.$RowSet$.$EventType$.RESET, function($event$$127$$) {
      $oj$$11$$.$TableDataSource$.$superclass$.handleEvent.call($self$$64$$, $oj$$11$$.$RowSet$.$EventType$.RESET, $event$$127$$)
    });
    this.$_rowSet$.on($oj$$11$$.$RowSet$.$EventType$.SORT, function($event$$128$$) {
      $oj$$11$$.$TableDataSource$.$superclass$.handleEvent.call($self$$64$$, $oj$$11$$.$RowSet$.$EventType$.SORT, $event$$128$$)
    });
    this.$_rowSet$.on($oj$$11$$.$RowSet$.$EventType$.CHANGE, function($event$$129$$) {
      $oj$$11$$.$TableDataSource$.$superclass$.handleEvent.call($self$$64$$, $oj$$11$$.$RowSet$.$EventType$.CHANGE, $event$$129$$)
    });
    this.$_rowSet$.on($oj$$11$$.$RowSet$.$EventType$.DESTROY, function($event$$130$$) {
      $oj$$11$$.$TableDataSource$.$superclass$.handleEvent.call($self$$64$$, $oj$$11$$.$RowSet$.$EventType$.DESTROY, $event$$130$$)
    });
    this.$_rowSet$.on($oj$$11$$.$RowSet$.$EventType$.SYNC, function($event$$131$$) {
      $oj$$11$$.$TableDataSource$.$superclass$.handleEvent.call($self$$64$$, $oj$$11$$.$RowSet$.$EventType$.SYNC, $event$$131$$)
    });
    this.$_rowSet$.on($oj$$11$$.$RowSet$.$EventType$.ERROR, function($event$$132$$) {
      $oj$$11$$.$TableDataSource$.$superclass$.handleEvent.call($self$$64$$, $oj$$11$$.$RowSet$.$EventType$.ERROR, $event$$132$$)
    })
  };
  $oj$$11$$.$TableDomUtils$ = function $$oj$$11$$$$TableDomUtils$$($component$$8$$) {
    this.$component$ = $component$$8$$;
    this.options = $component$$8$$.options;
    this.element = $component$$8$$.element;
    this.Init()
  };
  $goog$exportPath_$$("TableDomUtils", $oj$$11$$.$TableDomUtils$, $oj$$11$$);
  $oj$$11$$.$Object$.$createSubclass$($oj$$11$$.$TableDomUtils$, $oj$$11$$.$Object$, "oj.TableDomUtils");
  $oj$$11$$.$TableDomUtils$.prototype.Init = function $$oj$$11$$$$TableDomUtils$$$Init$() {
    $oj$$11$$.$TableDomUtils$.$superclass$.Init.call(this)
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("TableDomUtils.prototype.Init", {Init:$oj$$11$$.$TableDomUtils$.prototype.Init});
  $oj$$11$$.$TableDomUtils$.prototype.$clearCachedDomRowData$ = function $$oj$$11$$$$TableDomUtils$$$$clearCachedDomRowData$$() {
    this.$_cachedDomTableBodyRows$ = null
  };
  $oj$$11$$.$TableDomUtils$.prototype.$createContextMenu$ = function $$oj$$11$$$$TableDomUtils$$$$createContextMenu$$($handleContextMenuBeforeShow$$, $handleContextMenuSelect$$) {
    var $menuContainer$$1_menuContainerId$$ = null, $listItems$$1_sortMenu$$1$$ = $menuContainer$$1_menuContainerId$$ = null, $self$$65$$ = this;
    null != this.options.data && (null == this.options.contextMenu && null == this.$getTable$().attr("contextmenu") ? ($menuContainer$$1_menuContainerId$$ = $$$$11$$(document.createElement("ul")), $menuContainer$$1_menuContainerId$$.css("display", "none"), $menuContainer$$1_menuContainerId$$.attr("id", this.$getTable$().id + "contextmenu"), this.$getTableContainer$().append($menuContainer$$1_menuContainerId$$), $listItems$$1_sortMenu$$1$$ = this.$createContextMenuItem$("sort"), $menuContainer$$1_menuContainerId$$.append($listItems$$1_sortMenu$$1$$), 
    $menuContainer$$1_menuContainerId$$.ojMenu(), this.$component$._setOption("contextMenu", "#" + $menuContainer$$1_menuContainerId$$.attr("id"))) : ($menuContainer$$1_menuContainerId$$ = null == this.options.contextMenu ? this.$getTable$().attr("contextmenu") : this.options.contextMenu, $menuContainer$$1_menuContainerId$$ = $$$$11$$("#" + $menuContainer$$1_menuContainerId$$), $listItems$$1_sortMenu$$1$$ = $menuContainer$$1_menuContainerId$$.find("[data-oj-command]"), $listItems$$1_sortMenu$$1$$.each(function() {
      var $command$$7$$;
      0 === $$$$11$$(this).children("a").length && ($command$$7$$ = $$$$11$$(this).attr("data-oj-command").split("-"), $$$$11$$(this).replaceWith($self$$65$$.$createContextMenuItem$($command$$7$$[$command$$7$$.length - 1])))
    }), $menuContainer$$1_menuContainerId$$.ojMenu("refresh")), $menuContainer$$1_menuContainerId$$.on("ojbeforeshow", $handleContextMenuBeforeShow$$), $menuContainer$$1_menuContainerId$$.on("ojselect", $handleContextMenuSelect$$), this.$_menuContainer$ = $menuContainer$$1_menuContainerId$$)
  };
  $oj$$11$$.$TableDomUtils$.prototype.$createContextMenuItem$ = function $$oj$$11$$$$TableDomUtils$$$$createContextMenuItem$$($command$$8$$) {
    return"sort" === $command$$8$$ ? $$$$11$$(this.$createContextMenuListItem$($command$$8$$)).append($$$$11$$("\x3cul\x3e\x3c/ul\x3e").append($$$$11$$(this.$createContextMenuListItem$("sortAsc"))).append($$$$11$$(this.$createContextMenuListItem$("sortDsc")))) : null
  };
  $oj$$11$$.$TableDomUtils$.prototype.$createContextMenuListItem$ = function $$oj$$11$$$$TableDomUtils$$$$createContextMenuListItem$$($command$$9$$) {
    var $contextMenuListItem$$ = $$$$11$$(document.createElement("li"));
    $contextMenuListItem$$.attr("data-oj-command", "oj-table-" + $command$$9$$);
    $contextMenuListItem$$.append(this.$createContextMenuLabel$($command$$9$$));
    return $contextMenuListItem$$
  };
  $oj$$11$$.$TableDomUtils$.prototype.$createContextMenuLabel$ = function $$oj$$11$$$$TableDomUtils$$$$createContextMenuLabel$$($command$$10$$) {
    var $contextMenuLabel$$ = $$$$11$$(document.createElement("a"));
    $contextMenuLabel$$.attr("href", "#");
    var $commandString$$ = null;
    "sort" == $command$$10$$ ? $commandString$$ = this.$component$.$getTranslatedString$("labelSort") : "sortAsc" == $command$$10$$ ? $commandString$$ = this.$component$.$getTranslatedString$("labelSortAsc") : "sortDsc" == $command$$10$$ && ($commandString$$ = this.$component$.$getTranslatedString$("labelSortDsc"));
    $contextMenuLabel$$.append($commandString$$);
    return $contextMenuLabel$$
  };
  $oj$$11$$.$TableDomUtils$.prototype.$createInitialTable$ = function $$oj$$11$$$$TableDomUtils$$$$createInitialTable$$($isTableHeaderless$$, $isTableFooterless$$, $handleContextMenuBeforeShow$$1$$, $handleContextMenuSelect$$1$$) {
    this.$getTable$();
    this.$createTableContainer$();
    this.$createContextMenu$($handleContextMenuBeforeShow$$1$$, $handleContextMenuSelect$$1$$);
    this.$isDivScroller$() && this.$createTableDivScroller$();
    $isTableHeaderless$$ || this.$createTableHeader$();
    $isTableFooterless$$ || this.$createTableFooter$();
    this.$createTableBody$();
    this.$createTableNoDataMessage$();
    this.$createTableStatusMessage$()
  };
  $oj$$11$$.$TableDomUtils$.prototype.$createTableBody$ = function $$oj$$11$$$$TableDomUtils$$$$createTableBody$$() {
    var $table$$4$$ = this.$getTable$(), $tableBody$$4$$ = $$$$11$$(document.createElement("tbody"));
    $table$$4$$.append($tableBody$$4$$)
  };
  $oj$$11$$.$TableDomUtils$.prototype.$createTableBodyCell$ = function $$oj$$11$$$$TableDomUtils$$$$createTableBodyCell$$() {
    return $$$$11$$(document.createElement("td"))
  };
  $oj$$11$$.$TableDomUtils$.prototype.$createTableBodyCellAccSelect$ = function $$oj$$11$$$$TableDomUtils$$$$createTableBodyCellAccSelect$$($rowIdx$$21$$, $tableBodyRow$$7$$) {
    var $accSelectionCell$$1$$ = this.$getTableBodyCellAccSelect$($tableBodyRow$$7$$), $accSelectCheckbox$$2_isTableHeaderless$$1$$ = null == this.$getTableHeader$() ? !0 : !1;
    if(null == $accSelectionCell$$1$$) {
      $accSelectionCell$$1$$ = $$$$11$$(document.createElement("td"));
      $accSelectionCell$$1$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_ACC_SELECT_CLASS$);
      $accSelectionCell$$1$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
      $accSelectCheckbox$$2_isTableHeaderless$$1$$ || $accSelectionCell$$1$$.attr("headers", $oj$$11$$.$TableDomUtils$.$_COLUMN_HEADER_ROW_SELECT_ID$);
      $accSelectCheckbox$$2_isTableHeaderless$$1$$ = $$$$11$$(document.createElement("input"));
      $accSelectCheckbox$$2_isTableHeaderless$$1$$.attr("id", "acc_sel_row" + $rowIdx$$21$$);
      $accSelectCheckbox$$2_isTableHeaderless$$1$$.attr("type", "checkbox");
      $accSelectCheckbox$$2_isTableHeaderless$$1$$.attr("tabindex", "-1");
      var $selectRowTitle$$ = this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_LABEL_SELECT_ROW$);
      $accSelectCheckbox$$2_isTableHeaderless$$1$$.attr("title", $selectRowTitle$$);
      $accSelectCheckbox$$2_isTableHeaderless$$1$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_ROW_CLASS$);
      $accSelectionCell$$1$$.append($accSelectCheckbox$$2_isTableHeaderless$$1$$);
      $tableBodyRow$$7$$.prepend($accSelectionCell$$1$$)
    }
  };
  $oj$$11$$.$TableDomUtils$.prototype.$createTableBodyRow$ = function $$oj$$11$$$$TableDomUtils$$$$createTableBodyRow$$() {
    return $$$$11$$(document.createElement("tr"))
  };
  $oj$$11$$.$TableDomUtils$.prototype.$createTableContainer$ = function $$oj$$11$$$$TableDomUtils$$$$createTableContainer$$() {
    var $tableContainer$$1$$ = $$$$11$$(document.createElement("div"));
    this.element.parent()[0].replaceChild($tableContainer$$1$$[0], this.element[0]);
    $tableContainer$$1$$.prepend(this.element)
  };
  $oj$$11$$.$TableDomUtils$.prototype.$createTableFooter$ = function $$oj$$11$$$$TableDomUtils$$$$createTableFooter$$() {
    var $table$$5$$ = this.$getTable$(), $tableFooter$$1$$ = $$$$11$$(document.createElement("tfoot")), $tableFooterRow$$1$$ = $$$$11$$(document.createElement("tr"));
    this.$createTableFooterAccSelect$($tableFooterRow$$1$$);
    $tableFooter$$1$$.append($tableFooterRow$$1$$);
    $table$$5$$.append($tableFooter$$1$$);
    return $tableFooter$$1$$
  };
  $oj$$11$$.$TableDomUtils$.prototype.$createTableFooterAccSelect$ = function $$oj$$11$$$$TableDomUtils$$$$createTableFooterAccSelect$$($tableFooterRow$$2$$) {
    var $accFooterCell$$ = $tableFooterRow$$2$$.find("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
    null != $accFooterCell$$ && 0 < $accFooterCell$$.length ? $$$$11$$($accFooterCell$$[0]) : ($accFooterCell$$ = $$$$11$$(document.createElement("td")), $accFooterCell$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$), $accFooterCell$$.attr("tabindex", "-1"), $tableFooterRow$$2$$.prepend($accFooterCell$$))
  };
  $oj$$11$$.$TableDomUtils$.prototype.$createTableFooterCell$ = function $$oj$$11$$$$TableDomUtils$$$$createTableFooterCell$$() {
    return $$$$11$$(document.createElement("td"))
  };
  $oj$$11$$.$TableDomUtils$.prototype.$createTableHeader$ = function $$oj$$11$$$$TableDomUtils$$$$createTableHeader$$() {
    var $table$$6$$ = this.$getTable$(), $tableHeader$$2$$ = $$$$11$$(document.createElement("thead")), $tableHeaderRow$$2$$ = $$$$11$$(document.createElement("tr"));
    $tableHeader$$2$$.append($tableHeaderRow$$2$$);
    $table$$6$$.prepend($tableHeader$$2$$);
    return $tableHeader$$2$$
  };
  $oj$$11$$.$TableDomUtils$.prototype.$createTableHeaderAccSelectRowColumn$ = function $$oj$$11$$$$TableDomUtils$$$$createTableHeaderAccSelectRowColumn$$() {
    var $headerColumn$$5$$ = $$$$11$$(document.createElement("th"));
    $headerColumn$$5$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$);
    $headerColumn$$5$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
    $headerColumn$$5$$.attr("id", $oj$$11$$.$TableDomUtils$.$_COLUMN_HEADER_ROW_SELECT_ID$);
    var $selectRowTitle$$1$$ = this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_LABEL_SELECT_ROW$);
    $headerColumn$$5$$.attr("title", $selectRowTitle$$1$$);
    $headerColumn$$5$$.css("visibility", "hidden");
    $headerColumn$$5$$.append($selectRowTitle$$1$$);
    return $headerColumn$$5$$
  };
  $oj$$11$$.$TableDomUtils$.prototype.$createTableHeaderColumn$ = function $$oj$$11$$$$TableDomUtils$$$$createTableHeaderColumn$$($columnIdx$$28$$, $columnSelectionMode$$1$$) {
    var $column$$14_headerColumnAccDscLink_headerColumnDscLink$$3$$ = this.$component$.columnMetaData($columnIdx$$28$$), $headerColumn$$6$$ = $$$$11$$(document.createElement("th"));
    this.$styleTableHeaderColumn$($columnIdx$$28$$, $headerColumn$$6$$, $columnSelectionMode$$1$$);
    var $headerColumnRowDiv$$ = $$$$11$$(document.createElement("div"));
    $headerColumnRowDiv$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ROW_CLASS$);
    $headerColumnRowDiv$$.css("float", "none");
    $headerColumn$$6$$.append($headerColumnRowDiv$$);
    $headerColumn$$6$$.attr("abbr", $column$$14_headerColumnAccDscLink_headerColumnDscLink$$3$$.headerText);
    var $headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$ = $$$$11$$(document.createElement("div"));
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_TEXT_CLASS$);
    $headerColumnRowDiv$$.append($headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$);
    var $headerColumnAccAscLink_headerColumnAscLink$$3_headerColumnTextCellDiv$$ = $$$$11$$(document.createElement("div"));
    $headerColumnAccAscLink_headerColumnAscLink$$3_headerColumnTextCellDiv$$.attr("style", $column$$14_headerColumnAccDscLink_headerColumnDscLink$$3$$.headerStyle);
    $column$$14_headerColumnAccDscLink_headerColumnDscLink$$3$$.headerClassName && $headerColumnAccAscLink_headerColumnAscLink$$3_headerColumnTextCellDiv$$.addClass($column$$14_headerColumnAccDscLink_headerColumnDscLink$$3$$.headerClassName);
    $headerColumnAccAscLink_headerColumnAscLink$$3_headerColumnTextCellDiv$$.css("display", "table-cell");
    $headerColumnAccAscLink_headerColumnAscLink$$3_headerColumnTextCellDiv$$.css("vertical-align", "middle");
    $headerColumnAccAscLink_headerColumnAscLink$$3_headerColumnTextCellDiv$$.append($column$$14_headerColumnAccDscLink_headerColumnDscLink$$3$$.headerText);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$.append($headerColumnAccAscLink_headerColumnAscLink$$3_headerColumnTextCellDiv$$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$ = $$$$11$$(document.createElement("div"));
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_CLASS$);
    $headerColumnRowDiv$$.append($headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$);
    $column$$14_headerColumnAccDscLink_headerColumnDscLink$$3$$.sortable == $oj$$11$$.$TableDomUtils$.$_OPTION_ENABLED$ && ($headerColumnAccAscLink_headerColumnAscLink$$3_headerColumnTextCellDiv$$ = $$$$11$$(document.createElement("a")), $headerColumnAccAscLink_headerColumnAscLink$$3_headerColumnTextCellDiv$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$), $headerColumnAccAscLink_headerColumnAscLink$$3_headerColumnTextCellDiv$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_WIDGET_ICON_CLASS$), 
    $headerColumnAccAscLink_headerColumnAscLink$$3_headerColumnTextCellDiv$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_ICON_CLASS$), $headerColumnAccAscLink_headerColumnAscLink$$3_headerColumnTextCellDiv$$.addClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), $headerColumnAccAscLink_headerColumnAscLink$$3_headerColumnTextCellDiv$$.addClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$), this.$component$._hoverable($headerColumnAccAscLink_headerColumnAscLink$$3_headerColumnTextCellDiv$$), 
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$.append($headerColumnAccAscLink_headerColumnAscLink$$3_headerColumnTextCellDiv$$), $headerColumnAccAscLink_headerColumnAscLink$$3_headerColumnTextCellDiv$$ = $$$$11$$(document.createElement("a")), $headerColumnAccAscLink_headerColumnAscLink$$3_headerColumnTextCellDiv$$.attr("tabindex", "0"), $headerColumnAccAscLink_headerColumnAscLink$$3_headerColumnTextCellDiv$$.attr("href", "#"), $headerColumnAccAscLink_headerColumnAscLink$$3_headerColumnTextCellDiv$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_ASC_LINK_CLASS$), 
    $headerColumnAccAscLink_headerColumnAscLink$$3_headerColumnTextCellDiv$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$), $headerColumnAccAscLink_headerColumnAscLink$$3_headerColumnTextCellDiv$$.append(this.$component$.$getTranslatedString$("labelSortAsc")), $headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$.append($headerColumnAccAscLink_headerColumnAscLink$$3_headerColumnTextCellDiv$$), $headerColumn$$6$$.attr("data-oj-sortable", $oj$$11$$.$TableDomUtils$.$_OPTION_ENABLED$));
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$ = $$$$11$$(document.createElement("div"));
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_CLASS$);
    $headerColumnRowDiv$$.append($headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$);
    $column$$14_headerColumnAccDscLink_headerColumnDscLink$$3$$.sortable == $oj$$11$$.$TableDomUtils$.$_OPTION_ENABLED$ && ($column$$14_headerColumnAccDscLink_headerColumnDscLink$$3$$ = $$$$11$$(document.createElement("a")), $column$$14_headerColumnAccDscLink_headerColumnDscLink$$3$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$), $column$$14_headerColumnAccDscLink_headerColumnDscLink$$3$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_WIDGET_ICON_CLASS$), $column$$14_headerColumnAccDscLink_headerColumnDscLink$$3$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_ICON_CLASS$), 
    $column$$14_headerColumnAccDscLink_headerColumnDscLink$$3$$.addClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), $column$$14_headerColumnAccDscLink_headerColumnDscLink$$3$$.addClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$), this.$component$._hoverable($column$$14_headerColumnAccDscLink_headerColumnDscLink$$3$$), $headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$.append($column$$14_headerColumnAccDscLink_headerColumnDscLink$$3$$), $column$$14_headerColumnAccDscLink_headerColumnDscLink$$3$$ = 
    $$$$11$$(document.createElement("a")), $column$$14_headerColumnAccDscLink_headerColumnDscLink$$3$$.attr("tabindex", "0"), $column$$14_headerColumnAccDscLink_headerColumnDscLink$$3$$.attr("href", "#"), $column$$14_headerColumnAccDscLink_headerColumnDscLink$$3$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_DSC_LINK_CLASS$), $column$$14_headerColumnAccDscLink_headerColumnDscLink$$3$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$), $column$$14_headerColumnAccDscLink_headerColumnDscLink$$3$$.append(this.$component$.$getTranslatedString$("labelSortDsc")), 
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$.append($column$$14_headerColumnAccDscLink_headerColumnDscLink$$3$$));
    return $headerColumn$$6$$
  };
  $oj$$11$$.$TableDomUtils$.prototype.$createTableHeaderColumnAccSelect$ = function $$oj$$11$$$$TableDomUtils$$$$createTableHeaderColumnAccSelect$$($columnIdx$$29$$, $columnSelectionMode$$2$$) {
    if($columnSelectionMode$$2$$ == $oj$$11$$.$TableDomUtils$.$_OPTION_SELECTION_MODES$.$_SINGLE$ || $columnSelectionMode$$2$$ == $oj$$11$$.$TableDomUtils$.$_OPTION_SELECTION_MODES$.$_MULTIPLE$) {
      var $headerColumn$$7$$ = this.$getTableHeaderColumn$($columnIdx$$29$$), $accSelectionHeaderColumn$$ = this.$getTableHeaderColumnAccSelect$($columnIdx$$29$$);
      if(null == $accSelectionHeaderColumn$$) {
        $accSelectionHeaderColumn$$ = $$$$11$$(document.createElement("div"));
        $accSelectionHeaderColumn$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS$);
        $accSelectionHeaderColumn$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
        var $accSelectCheckbox$$3$$ = $$$$11$$(document.createElement("input"));
        $accSelectCheckbox$$3$$.attr("id", "acc_sel_col" + $columnIdx$$29$$);
        $accSelectCheckbox$$3$$.attr("type", "checkbox");
        $accSelectCheckbox$$3$$.attr("tabindex", "-1");
        var $selectColumnTitle$$ = this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_LABEL_SELECT_COLUMN$);
        $accSelectCheckbox$$3$$.attr("title", $selectColumnTitle$$);
        $accSelectCheckbox$$3$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_COLUMN_CLASS$);
        $accSelectionHeaderColumn$$.append($accSelectCheckbox$$3$$);
        $headerColumn$$7$$.prepend($accSelectionHeaderColumn$$)
      }
    }
  };
  $oj$$11$$.$TableDomUtils$.prototype.$createTableDivScroller$ = function $$oj$$11$$$$TableDomUtils$$$$createTableDivScroller$$() {
    var $table$$7$$ = this.$getTable$(), $tableDivScroller$$ = $$$$11$$(document.createElement("div"));
    $tableDivScroller$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_SCROLLER_CLASS$);
    var $tableContainer$$2$$ = $table$$7$$.parent();
    $tableContainer$$2$$.remove("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_CLASS$);
    $tableContainer$$2$$.append($tableDivScroller$$);
    $tableDivScroller$$.append($table$$7$$)
  };
  $oj$$11$$.$TableDomUtils$.prototype.$createTableNoDataMessage$ = function $$oj$$11$$$$TableDomUtils$$$$createTableNoDataMessage$$() {
    var $tableContainer$$3$$ = this.$getTableContainer$(), $noDataMessage$$2$$ = $$$$11$$(document.createElement("div"));
    $noDataMessage$$2$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_NO_DATA_MESSAGE_CLASS$);
    $noDataMessage$$2$$.css("display", "none");
    $noDataMessage$$2$$.css("position", "absolute");
    $noDataMessage$$2$$.css("z-index", 5E3);
    var $emptyTextMsg$$ = null, $emptyTextMsg$$ = null != this.options.emptyText ? this.options.emptyText : this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_MSG_NO_DATA$);
    $noDataMessage$$2$$.append($emptyTextMsg$$);
    $tableContainer$$3$$.append($noDataMessage$$2$$)
  };
  $oj$$11$$.$TableDomUtils$.prototype.$createTableStatusMessage$ = function $$oj$$11$$$$TableDomUtils$$$$createTableStatusMessage$$() {
    var $tableContainer$$4$$ = this.$getTableContainer$(), $statusMessage$$2$$ = $$$$11$$(document.createElement("div"));
    $statusMessage$$2$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_STATUS_MESSAGE_CLASS$);
    $statusMessage$$2$$.css("display", "none");
    $statusMessage$$2$$.css("position", "absolute");
    $statusMessage$$2$$.css("z-index", 5E3);
    $statusMessage$$2$$.append(this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_MSG_FETCHING_DATA$));
    $tableContainer$$4$$.append($statusMessage$$2$$)
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getElementColumnIdx$ = function $$oj$$11$$$$TableDomUtils$$$$getElementColumnIdx$$($element$$55_tableFooterCell$$1$$) {
    var $tableBodyCell$$5_tableHeaderColumn$$5$$ = this.$getFirstAncestor$($element$$55_tableFooterCell$$1$$, $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$);
    if(null != $tableBodyCell$$5_tableHeaderColumn$$5$$) {
      return $tableBodyCell$$5_tableHeaderColumn$$5$$.parent().children("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$).index($tableBodyCell$$5_tableHeaderColumn$$5$$)
    }
    $tableBodyCell$$5_tableHeaderColumn$$5$$ = this.$getFirstAncestor$($element$$55_tableFooterCell$$1$$, $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CLASS$);
    if(null != $tableBodyCell$$5_tableHeaderColumn$$5$$) {
      return $tableBodyCell$$5_tableHeaderColumn$$5$$.parent().children("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CLASS$).index($tableBodyCell$$5_tableHeaderColumn$$5$$)
    }
    $element$$55_tableFooterCell$$1$$ = this.$getFirstAncestor$($element$$55_tableFooterCell$$1$$, $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$);
    return null != $element$$55_tableFooterCell$$1$$ ? $element$$55_tableFooterCell$$1$$.parent().children("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$).index($element$$55_tableFooterCell$$1$$) : null
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getElementRowIdx$ = function $$oj$$11$$$$TableDomUtils$$$$getElementRowIdx$$($element$$56_tableBodyRow$$9$$) {
    $element$$56_tableBodyRow$$9$$ = this.$getFirstAncestor$($element$$56_tableBodyRow$$9$$, $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$);
    return null != $element$$56_tableBodyRow$$9$$ ? $element$$56_tableBodyRow$$9$$.index() : null
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getEmptyTableDimensions$ = function $$oj$$11$$$$TableDomUtils$$$$getEmptyTableDimensions$$() {
    var $table$$8$$ = this.$getTable$(), $tableBody$$5$$ = this.$getTableBody$(), $tableHeader$$3$$ = this.$getTableHeader$(), $tableFooter$$2$$ = this.$getTableFooter$(), $tableHeaderDisplay$$ = "", $tableBodyDisplay$$ = "", $tableFooterDisplay$$ = "";
    null != $tableHeader$$3$$ && ($tableHeaderDisplay$$ = $tableHeader$$3$$.css("display").toString(), $tableHeader$$3$$.css("display", "none"));
    null != $tableBody$$5$$ && ($tableBodyDisplay$$ = $tableBody$$5$$.css("display").toString(), $tableBody$$5$$.css("display", "none"));
    null != $tableFooter$$2$$ && ($tableFooterDisplay$$ = $tableFooter$$2$$.css("display").toString(), $tableFooter$$2$$.css("display", "none"));
    $table$$8$$.removeClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_CLASS$);
    var $dimensions$$ = {height:$table$$8$$.height(), width:$table$$8$$.width()};
    $table$$8$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_CLASS$);
    null != $tableBody$$5$$ && $tableBody$$5$$.css("display", $tableBodyDisplay$$);
    null != $tableHeader$$3$$ && $tableHeader$$3$$.css("display", $tableHeaderDisplay$$);
    null != $tableFooter$$2$$ && $tableFooter$$2$$.css("display", $tableFooterDisplay$$);
    return $dimensions$$
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getFirstAncestor$ = function $$oj$$11$$$$TableDomUtils$$$$getFirstAncestor$$($element$$57$$, $className$$12$$) {
    var $parents$$2$$;
    if(null == $element$$57$$) {
      return null
    }
    $element$$57$$ = $$$$11$$($element$$57$$);
    if($element$$57$$.hasClass($className$$12$$)) {
      return $element$$57$$
    }
    $parents$$2$$ = $element$$57$$.parents("." + $className$$12$$);
    return 0 != $parents$$2$$.length ? $parents$$2$$.eq(0) : null
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getRendererContextObject$ = function $$oj$$11$$$$TableDomUtils$$$$getRendererContextObject$$($row$$35$$, $parentElement$$1$$) {
    var $context$$36$$ = [];
    $context$$36$$.component = this.$component$;
    $context$$36$$.datasource = this.options.data;
    $context$$36$$.parentElement = $parentElement$$1$$;
    if(null != $row$$35$$) {
      $context$$36$$.status = this.$getRendererStatusObject$($row$$35$$);
      var $rowContext$$ = $row$$35$$.context, $i$$193$$;
      for($i$$193$$ in $rowContext$$) {
        $rowContext$$.hasOwnProperty($i$$193$$) && ($context$$36$$[$i$$193$$] = $rowContext$$[$i$$193$$])
      }
    }
    return $context$$36$$
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getRendererStatusObject$ = function $$oj$$11$$$$TableDomUtils$$$$getRendererStatusObject$$($row$$36$$) {
    return{rowIndex:this.options.data.indexOf($row$$36$$), rowKey:$row$$36$$.id, activeRow:this.$component$.activeRow()}
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getScrollbarHeight$ = function $$oj$$11$$$$TableDomUtils$$$$getScrollbarHeight$$() {
    var $scroller$$ = this.$getScroller$();
    return $scroller$$.get(0).offsetHeight - $scroller$$.get(0).clientHeight
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getScrollbarWidth$ = function $$oj$$11$$$$TableDomUtils$$$$getScrollbarWidth$$() {
    var $scroller$$1$$ = this.$getScroller$();
    return $scroller$$1$$.get(0).offsetWidth - $scroller$$1$$.get(0).clientWidth
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getScroller$ = function $$oj$$11$$$$TableDomUtils$$$$getScroller$$() {
    return this.$isDivScroller$() ? this.$getTableDivScroller$() : this.$getTableBody$()
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getTable$ = function $$oj$$11$$$$TableDomUtils$$$$getTable$$() {
    return $$$$11$$(this.element)
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getTableBody$ = function $$oj$$11$$$$TableDomUtils$$$$getTableBody$$() {
    if(!this.$_cachedDomTableBody$) {
      var $table$$9$$ = this.$getTable$(), $tableBody$$6$$ = null;
      $table$$9$$ && ($tableBody$$6$$ = $table$$9$$.find("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_BODY_CLASS$)) && 0 < $tableBody$$6$$.length && (this.$_cachedDomTableBody$ = $$$$11$$($tableBody$$6$$.get(0)))
    }
    return this.$_cachedDomTableBody$
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getTableBodyCell$ = function $$oj$$11$$$$TableDomUtils$$$$getTableBodyCell$$($rowIdx$$22$$, $columnIdx$$30$$) {
    var $tableBodyCells$$2$$ = this.$getTableBodyCells$($rowIdx$$22$$);
    if(!$tableBodyCells$$2$$) {
      return null
    }
    if($tableBodyCells$$2$$.length > $columnIdx$$30$$ && this.$getElementColumnIdx$($tableBodyCells$$2$$[$columnIdx$$30$$]) == $columnIdx$$30$$) {
      return $$$$11$$($tableBodyCells$$2$$[$columnIdx$$30$$])
    }
    var $i$$194$$;
    for($i$$194$$ = 0;$i$$194$$ < $tableBodyCells$$2$$.length;$i$$194$$++) {
      if(this.$getElementColumnIdx$($tableBodyCells$$2$$[$i$$194$$]) == $columnIdx$$30$$) {
        return $$$$11$$($tableBodyCells$$2$$[$i$$194$$])
      }
    }
    return null
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getTableBodyCellAccSelect$ = function $$oj$$11$$$$TableDomUtils$$$$getTableBodyCellAccSelect$$($accSelectionCell$$2_tableBodyRow$$10$$) {
    return null != $accSelectionCell$$2_tableBodyRow$$10$$ && ($accSelectionCell$$2_tableBodyRow$$10$$ = $accSelectionCell$$2_tableBodyRow$$10$$.find("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_ACC_SELECT_CLASS$), null != $accSelectionCell$$2_tableBodyRow$$10$$ && 0 < $accSelectionCell$$2_tableBodyRow$$10$$.length) ? $$$$11$$($accSelectionCell$$2_tableBodyRow$$10$$[0]) : null
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getTableBodyCells$ = function $$oj$$11$$$$TableDomUtils$$$$getTableBodyCells$$($rowIdx$$23_tableBodyCellElements_tableBodyRow$$11$$) {
    $rowIdx$$23_tableBodyCellElements_tableBodyRow$$11$$ = this.$getTableBodyRow$($rowIdx$$23_tableBodyCellElements_tableBodyRow$$11$$);
    if(!$rowIdx$$23_tableBodyCellElements_tableBodyRow$$11$$) {
      return null
    }
    $rowIdx$$23_tableBodyCellElements_tableBodyRow$$11$$ = $rowIdx$$23_tableBodyCellElements_tableBodyRow$$11$$.children("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$);
    return null != $rowIdx$$23_tableBodyCellElements_tableBodyRow$$11$$ && 0 < $rowIdx$$23_tableBodyCellElements_tableBodyRow$$11$$.length ? $rowIdx$$23_tableBodyCellElements_tableBodyRow$$11$$ : null
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getTableBodyRow$ = function $$oj$$11$$$$TableDomUtils$$$$getTableBodyRow$$($rowIdx$$24$$) {
    var $tableBodyRows$$1$$ = this.$getTableBodyRows$();
    if(!$tableBodyRows$$1$$ || null == $rowIdx$$24$$) {
      return null
    }
    if($tableBodyRows$$1$$.length > $rowIdx$$24$$ && this.$getElementRowIdx$($tableBodyRows$$1$$[$rowIdx$$24$$]) == $rowIdx$$24$$) {
      return $$$$11$$($tableBodyRows$$1$$[$rowIdx$$24$$])
    }
    var $i$$195$$;
    for($i$$195$$ = 0;$i$$195$$ < $tableBodyRows$$1$$.length;$i$$195$$++) {
      if(this.$getElementRowIdx$($tableBodyRows$$1$$[$i$$195$$]) == $rowIdx$$24$$) {
        return $$$$11$$($tableBodyRows$$1$$[$i$$195$$])
      }
    }
    return null
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getTableBodyRows$ = function $$oj$$11$$$$TableDomUtils$$$$getTableBodyRows$$() {
    if(!this.$_cachedDomTableBodyRows$) {
      var $tableBodyRowElements$$ = this.$getTableBody$().children("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$);
      null != $tableBodyRowElements$$ && 0 < $tableBodyRowElements$$.length && (this.$_cachedDomTableBodyRows$ = $tableBodyRowElements$$)
    }
    return this.$_cachedDomTableBodyRows$
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getTableContainer$ = function $$oj$$11$$$$TableDomUtils$$$$getTableContainer$$() {
    this.$_cachedDomTableContainer$ || (this.$isDivScroller$() ? this.$_cachedDomTableContainer$ = $$$$11$$(this.element.get(0).parentNode.parentNode) : this.$_cachedDomTableContainer$ = $$$$11$$(this.element.get(0).parentNode));
    return this.$_cachedDomTableContainer$
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getTableFooter$ = function $$oj$$11$$$$TableDomUtils$$$$getTableFooter$$() {
    var $table$$10$$ = this.$getTable$(), $tableFooter$$3$$ = null;
    return $table$$10$$ && ($tableFooter$$3$$ = $table$$10$$.find("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CLASS$)) && 0 < $tableFooter$$3$$.length ? $$$$11$$($tableFooter$$3$$.get(0)) : null
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getTableFooterRow$ = function $$oj$$11$$$$TableDomUtils$$$$getTableFooterRow$$() {
    if(!this.$_cachedDomTableFooterRow$) {
      var $tableFooter$$4$$ = this.$getTableFooter$();
      if(!$tableFooter$$4$$) {
        return null
      }
      this.$_cachedDomTableFooterRow$ = $$$$11$$($tableFooter$$4$$.children("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_ROW_CLASS$).get(0))
    }
    return this.$_cachedDomTableFooterRow$
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getTableHeader$ = function $$oj$$11$$$$TableDomUtils$$$$getTableHeader$$() {
    if(!this.$_cachedDomTableHeader$) {
      var $table$$11$$ = this.$getTable$(), $tableHeader$$4$$ = null;
      $table$$11$$ && ($tableHeader$$4$$ = $table$$11$$.find("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_CLASS$)) && 0 < $tableHeader$$4$$.length && (this.$_cachedDomTableHeader$ = $$$$11$$($tableHeader$$4$$.get(0)))
    }
    return this.$_cachedDomTableHeader$
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getTableHeaderColumn$ = function $$oj$$11$$$$TableDomUtils$$$$getTableHeaderColumn$$($columnIdx$$31$$) {
    var $headerColumns$$ = this.$getTableHeaderColumns$();
    if(!$headerColumns$$) {
      return null
    }
    if($headerColumns$$.length > $columnIdx$$31$$ && this.$getElementColumnIdx$($headerColumns$$[$columnIdx$$31$$]) == $columnIdx$$31$$) {
      return $$$$11$$($headerColumns$$[$columnIdx$$31$$])
    }
    var $i$$196$$;
    for($i$$196$$ = 0;$i$$196$$ < $headerColumns$$.length;$i$$196$$++) {
      if(this.$getElementColumnIdx$($headerColumns$$[$i$$196$$]) == $columnIdx$$31$$) {
        return $$$$11$$($headerColumns$$[$i$$196$$])
      }
    }
    return null
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getTableHeaderColumnAccSelect$ = function $$oj$$11$$$$TableDomUtils$$$$getTableHeaderColumnAccSelect$$($accSelectionCell$$3_columnIdx$$32_headerColumn$$8$$) {
    $accSelectionCell$$3_columnIdx$$32_headerColumn$$8$$ = this.$getTableHeaderColumn$($accSelectionCell$$3_columnIdx$$32_headerColumn$$8$$);
    return null != $accSelectionCell$$3_columnIdx$$32_headerColumn$$8$$ && ($accSelectionCell$$3_columnIdx$$32_headerColumn$$8$$ = $accSelectionCell$$3_columnIdx$$32_headerColumn$$8$$.find("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS$), null != $accSelectionCell$$3_columnIdx$$32_headerColumn$$8$$ && 0 < $accSelectionCell$$3_columnIdx$$32_headerColumn$$8$$.length) ? $$$$11$$($accSelectionCell$$3_columnIdx$$32_headerColumn$$8$$[0]) : null
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getTableHeaderColumns$ = function $$oj$$11$$$$TableDomUtils$$$$getTableHeaderColumns$$() {
    var $headerColumnElements_tableHeaderRow$$3$$ = this.$getTableHeaderRow$();
    return null != $headerColumnElements_tableHeaderRow$$3$$ && ($headerColumnElements_tableHeaderRow$$3$$ = $headerColumnElements_tableHeaderRow$$3$$.children("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CLASS$), null != $headerColumnElements_tableHeaderRow$$3$$ && 0 < $headerColumnElements_tableHeaderRow$$3$$.length) ? $headerColumnElements_tableHeaderRow$$3$$ : null
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getTableHeaderRow$ = function $$oj$$11$$$$TableDomUtils$$$$getTableHeaderRow$$() {
    if(!this.$_cachedDomTableHeaderRow$) {
      var $tableHeader$$5$$ = this.$getTableHeader$();
      if(!$tableHeader$$5$$) {
        return null
      }
      this.$_cachedDomTableHeaderRow$ = $$$$11$$($tableHeader$$5$$.children("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_ROW_CLASS$).get(0))
    }
    return this.$_cachedDomTableHeaderRow$
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getTableDivScroller$ = function $$oj$$11$$$$TableDomUtils$$$$getTableDivScroller$$() {
    if(!this.$_cachedDomTableDivScroller$) {
      var $tableContainer$$5_tableDivScroller$$1$$ = this.$getTableContainer$();
      $tableContainer$$5_tableDivScroller$$1$$ && ($tableContainer$$5_tableDivScroller$$1$$ = $tableContainer$$5_tableDivScroller$$1$$.find("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_SCROLLER_CLASS$)) && 0 < $tableContainer$$5_tableDivScroller$$1$$.length && (this.$_cachedDomTableDivScroller$ = $$$$11$$($tableContainer$$5_tableDivScroller$$1$$.get(0)))
    }
    return this.$_cachedDomTableDivScroller$
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getTableNoDataMessage$ = function $$oj$$11$$$$TableDomUtils$$$$getTableNoDataMessage$$() {
    if(!this.$_cachedDomTableNoDataMessage$) {
      var $noDataMessage$$3_tableContainer$$6$$ = this.$getTableContainer$();
      $noDataMessage$$3_tableContainer$$6$$ && ($noDataMessage$$3_tableContainer$$6$$ = $noDataMessage$$3_tableContainer$$6$$.find("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_NO_DATA_MESSAGE_CLASS$)) && 0 < $noDataMessage$$3_tableContainer$$6$$.length && (this.$_cachedDomTableNoDataMessage$ = $$$$11$$($noDataMessage$$3_tableContainer$$6$$.get(0)))
    }
    return this.$_cachedDomTableNoDataMessage$
  };
  $oj$$11$$.$TableDomUtils$.prototype.$getTableStatusMessage$ = function $$oj$$11$$$$TableDomUtils$$$$getTableStatusMessage$$() {
    if(!this.$_cachedDomTableStatusMessage$) {
      var $statusMessage$$3_tableContainer$$7$$ = this.$getTableContainer$();
      $statusMessage$$3_tableContainer$$7$$ && ($statusMessage$$3_tableContainer$$7$$ = $statusMessage$$3_tableContainer$$7$$.find("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_STATUS_MESSAGE_CLASS$)) && 0 < $statusMessage$$3_tableContainer$$7$$.length && (this.$_cachedDomTableStatusMessage$ = $$$$11$$($statusMessage$$3_tableContainer$$7$$.get(0)))
    }
    return this.$_cachedDomTableStatusMessage$
  };
  $oj$$11$$.$TableDomUtils$.prototype.$insertTableBodyCell$ = function $$oj$$11$$$$TableDomUtils$$$$insertTableBodyCell$$($rowIdx$$25_tableBodyCells$$3$$, $accSelectionCell$$4_columnIdx$$33$$, $tableBodyCell$$6$$, $tableBodyRow$$12$$) {
    this.$setTableBodyCellAttributes$($rowIdx$$25_tableBodyCells$$3$$, $accSelectionCell$$4_columnIdx$$33$$, $tableBodyCell$$6$$);
    $rowIdx$$25_tableBodyCells$$3$$ = $$$$11$$($tableBodyRow$$12$$).children("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$);
    0 == $accSelectionCell$$4_columnIdx$$33$$ ? ($accSelectionCell$$4_columnIdx$$33$$ = $tableBodyRow$$12$$.find("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_ACC_SELECT_CLASS$), null != $accSelectionCell$$4_columnIdx$$33$$ && 0 < $accSelectionCell$$4_columnIdx$$33$$.length ? $$$$11$$($accSelectionCell$$4_columnIdx$$33$$[0]).after($tableBodyCell$$6$$) : $tableBodyRow$$12$$.prepend($tableBodyCell$$6$$)) : $rowIdx$$25_tableBodyCells$$3$$.length >= $accSelectionCell$$4_columnIdx$$33$$ ? 
    $$$$11$$($rowIdx$$25_tableBodyCells$$3$$.get($accSelectionCell$$4_columnIdx$$33$$ - 1)).after($tableBodyCell$$6$$) : $$$$11$$($tableBodyRow$$12$$).append($tableBodyCell$$6$$)
  };
  $oj$$11$$.$TableDomUtils$.prototype.$insertTableBodyRow$ = function $$oj$$11$$$$TableDomUtils$$$$insertTableBodyRow$$($rowIdx$$26$$, $tableBodyRow$$13$$, $docFrag$$1$$) {
    var $tableBodyRows$$2$$ = null;
    if(null == $docFrag$$1$$) {
      var $tableBody$$8$$ = this.$getTableBody$(), $tableBodyRows$$2$$ = $tableBody$$8$$.children("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$)
    }else {
      $tableBodyRows$$2$$ = $docFrag$$1$$.children("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$)
    }
    this.$createTableBodyCellAccSelect$($rowIdx$$26$$, $tableBodyRow$$13$$);
    null == $docFrag$$1$$ ? 0 == $rowIdx$$26$$ ? $tableBody$$8$$.prepend($tableBodyRow$$13$$) : $tableBodyRows$$2$$.length >= $rowIdx$$26$$ ? $$$$11$$($tableBodyRows$$2$$.get($rowIdx$$26$$ - 1)).after($tableBodyRow$$13$$) : $tableBody$$8$$.append($tableBodyRow$$13$$) : $docFrag$$1$$.append($tableBodyRow$$13$$);
    this.$clearCachedDomRowData$()
  };
  $oj$$11$$.$TableDomUtils$.prototype.$insertTableFooterCell$ = function $$oj$$11$$$$TableDomUtils$$$$insertTableFooterCell$$($columnIdx$$34$$, $tableFooterCell$$2$$) {
    var $tableFooterRow$$3$$ = this.$getTableFooterRow$(), $accFooterCell$$1_tableFooterCells$$ = $$$$11$$($tableFooterRow$$3$$).children("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$);
    0 == $columnIdx$$34$$ ? ($accFooterCell$$1_tableFooterCells$$ = $tableFooterRow$$3$$.find("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$), null != $accFooterCell$$1_tableFooterCells$$ && 0 < $accFooterCell$$1_tableFooterCells$$.length ? $$$$11$$($accFooterCell$$1_tableFooterCells$$[0]).after($tableFooterCell$$2$$) : $tableFooterRow$$3$$.prepend($tableFooterCell$$2$$)) : $tableFooterRow$$3$$.length >= $columnIdx$$34$$ ? $$$$11$$($accFooterCell$$1_tableFooterCells$$.get($columnIdx$$34$$ - 
    1)).after($tableFooterCell$$2$$) : $tableFooterRow$$3$$.append($tableFooterCell$$2$$)
  };
  $oj$$11$$.$TableDomUtils$.prototype.$insertTableHeaderColumn$ = function $$oj$$11$$$$TableDomUtils$$$$insertTableHeaderColumn$$($columnIdx$$35$$, $tableHeaderColumn$$6$$) {
    var $tableHeaderRow$$4$$ = this.$getTableHeaderRow$(), $accSelectionColumn$$1_tableHeaderColumns$$1$$ = this.$getTableHeaderColumns$();
    this.$setTableHeaderColumnAttributes$($columnIdx$$35$$, $tableHeaderColumn$$6$$);
    var $oldTableHeaderColumn$$ = this.$getTableHeaderColumn$($columnIdx$$35$$);
    $oldTableHeaderColumn$$ ? $oldTableHeaderColumn$$.replaceWith($tableHeaderColumn$$6$$) : 0 == $columnIdx$$35$$ ? ($accSelectionColumn$$1_tableHeaderColumns$$1$$ = $tableHeaderRow$$4$$.find("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$), null != $accSelectionColumn$$1_tableHeaderColumns$$1$$ && 0 < $accSelectionColumn$$1_tableHeaderColumns$$1$$.length ? $$$$11$$($accSelectionColumn$$1_tableHeaderColumns$$1$$[0]).after($tableHeaderColumn$$6$$) : $tableHeaderRow$$4$$.prepend($tableHeaderColumn$$6$$)) : 
    $accSelectionColumn$$1_tableHeaderColumns$$1$$.length >= $columnIdx$$35$$ ? $$$$11$$($accSelectionColumn$$1_tableHeaderColumns$$1$$.get($columnIdx$$35$$ - 1)).after($tableHeaderColumn$$6$$) : $tableHeaderRow$$4$$.append($tableHeaderColumn$$6$$)
  };
  $oj$$11$$.$TableDomUtils$.prototype.$isDivScroller$ = function $$oj$$11$$$$TableDomUtils$$$$isDivScroller$$() {
    return this.$_isIE$() && 10 > this.$_isIE$() ? !0 : !1
  };
  $oj$$11$$.$TableDomUtils$.prototype.$refreshTableDimensions$ = function $$oj$$11$$$$TableDomUtils$$$$refreshTableDimensions$$() {
    var $emptyTableDimensions_options$$244$$ = this.options, $minHeight_table$$12_tableDivScroller$$2$$ = this.$getTable$(), $tableHeader$$6$$ = this.$getTableHeader$(), $scrollbarWidth$$2_tableFooter$$5$$ = this.$getTableFooter$(), $tableFooterHeight_tableHeaderRow$$5$$ = this.$getTableHeaderRow$(), $tableBodyHeight_tableContainer$$8$$ = this.$getTableContainer$(), $tableBody$$9_totalHeight$$ = this.$getTableBody$(), $data$$97_tableBodyRow$$14_tableBodyWidth$$ = $emptyTableDimensions_options$$244$$.data;
    this.$_refreshColumnHeaderPadding$();
    this.$_removeTableDimenionsStyling$();
    this.$styleTableContainer$($tableBodyHeight_tableContainer$$8$$, 0, 0);
    $emptyTableDimensions_options$$244$$ = this.$getEmptyTableDimensions$();
    this.$styleTableContainer$($tableBodyHeight_tableContainer$$8$$, $emptyTableDimensions_options$$244$$.height, $emptyTableDimensions_options$$244$$.width);
    var $isTableHeightScrolled$$ = $tableBodyHeight_tableContainer$$8$$[0].scrollHeight > $tableBodyHeight_tableContainer$$8$$[0].clientHeight ? !0 : !1, $isTableWidthScrolled$$ = $tableBodyHeight_tableContainer$$8$$[0].scrollHeight > $tableBodyHeight_tableContainer$$8$$[0].clientHeight ? !0 : !1;
    if($isTableHeightScrolled$$ || $isTableWidthScrolled$$) {
      this.$_setHeaderColumnAndCellColumnWidths$();
      $tableHeaderHeight$$ = 0;
      if(null != $tableHeader$$6$$) {
        if($isTableHeightScrolled$$ || $isTableWidthScrolled$$) {
          $tableHeader$$6$$.css("position", "absolute"), $tableFooterHeight_tableHeaderRow$$5$$.css("display", "block")
        }
        this.$isDivScroller$() && ($tableHeader$$6$$.css("position", "absolute"), $tableHeader$$6$$.css("top", "0px"), $tableBodyHeight_tableContainer$$8$$.css("padding-top", $tableHeader$$6$$.height() + "px"));
        $tableHeaderHeight$$ = $tableHeader$$6$$.height();
        $tableBody$$9_totalHeight$$.css("top", $tableHeaderHeight$$ + "px")
      }
      $tableFooterHeight_tableHeaderRow$$5$$ = 0;
      if(null != $scrollbarWidth$$2_tableFooter$$5$$) {
        if($isTableHeightScrolled$$ || $isTableWidthScrolled$$) {
          $scrollbarWidth$$2_tableFooter$$5$$.css("position", "absolute"), $scrollbarWidth$$2_tableFooter$$5$$.css("display", "block")
        }
        $tableFooterHeight_tableHeaderRow$$5$$ = $scrollbarWidth$$2_tableFooter$$5$$.height()
      }
      $tableBody$$9_totalHeight$$.css("display", "block");
      if($isTableHeightScrolled$$ || $isTableWidthScrolled$$) {
        $minHeight_table$$12_tableDivScroller$$2$$.css("display", "block"), $tableBody$$9_totalHeight$$.css("position", "relative"), this.$isDivScroller$() ? $isTableHeightScrolled$$ && $tableBodyHeight_tableContainer$$8$$.css("padding-top", $tableHeaderHeight$$ + "px") : ($tableBody$$9_totalHeight$$.css("overflow-y", "auto"), $isTableWidthScrolled$$ ? ($tableBody$$9_totalHeight$$.css("overflow-x", "auto"), $tableBody$$9_totalHeight$$.css("width", $emptyTableDimensions_options$$244$$.width), null != 
        $tableHeader$$6$$ && $tableHeader$$6$$.css("width", $emptyTableDimensions_options$$244$$.width)) : $tableBody$$9_totalHeight$$.css("overflow-x", "hidden"), $isTableHeightScrolled$$ && ($tableBodyHeight_tableContainer$$8$$ = $emptyTableDimensions_options$$244$$.height - $tableHeaderHeight$$ - $tableFooterHeight_tableHeaderRow$$5$$, 0 < $tableBodyHeight_tableContainer$$8$$ && ($tableBody$$9_totalHeight$$.css("height", $tableBodyHeight_tableContainer$$8$$ + "px"), $tableBody$$9_totalHeight$$.css("min-height", 
        $tableBodyHeight_tableContainer$$8$$ + "px")))), null != $scrollbarWidth$$2_tableFooter$$5$$ && $scrollbarWidth$$2_tableFooter$$5$$.css("top", $tableHeaderHeight$$ + $tableBody$$9_totalHeight$$.height() + "px")
      }
      $scrollbarWidth$$2_tableFooter$$5$$ = this.$getScrollbarWidth$();
      this.$getScrollbarHeight$();
      $isTableWidthScrolled$$ || (null != $data$$97_tableBodyRow$$14_tableBodyWidth$$ && 0 != $data$$97_tableBodyRow$$14_tableBodyWidth$$.size() || null == $tableHeader$$6$$ ? 0 < $scrollbarWidth$$2_tableFooter$$5$$ ? ($data$$97_tableBodyRow$$14_tableBodyWidth$$ = this.$getTableBodyRow$(0), $tableBody$$9_totalHeight$$.css("width", $data$$97_tableBodyRow$$14_tableBodyWidth$$.width() + $scrollbarWidth$$2_tableFooter$$5$$ + "px")) : $tableBody$$9_totalHeight$$.css("width", "") : $tableBody$$9_totalHeight$$.css("width", 
      $tableHeader$$6$$.width() + "px"));
      $data$$97_tableBodyRow$$14_tableBodyWidth$$ = $tableBody$$9_totalHeight$$.width();
      null != $tableHeader$$6$$ && (0 < $scrollbarWidth$$2_tableFooter$$5$$ ? ($tableHeader$$6$$.css("overflow", "hidden"), $tableHeader$$6$$.css("width", $data$$97_tableBodyRow$$14_tableBodyWidth$$ - $scrollbarWidth$$2_tableFooter$$5$$ + "px")) : $tableHeader$$6$$.css("width", $data$$97_tableBodyRow$$14_tableBodyWidth$$ + "px"));
      $isTableHeightScrolled$$ || (!$isTableWidthScrolled$$ || null == $tableHeader$$6$$ || this.$isDivScroller$()) || ($tableBody$$9_totalHeight$$ = $tableHeaderHeight$$ + $tableFooterHeight_tableHeaderRow$$5$$ + $tableBody$$9_totalHeight$$.height(), $minHeight_table$$12_tableDivScroller$$2$$.css("height", $tableBody$$9_totalHeight$$ + "px"));
      this.$isDivScroller$() && ($minHeight_table$$12_tableDivScroller$$2$$ = this.$getTableDivScroller$(), $minHeight_table$$12_tableDivScroller$$2$$.css("overflow", "auto"), $isTableWidthScrolled$$ && $minHeight_table$$12_tableDivScroller$$2$$.css("width", $emptyTableDimensions_options$$244$$.width), $isTableHeightScrolled$$ && $minHeight_table$$12_tableDivScroller$$2$$.css("height", $emptyTableDimensions_options$$244$$.height), null != $tableHeader$$6$$ && (this.$_tableHeaderWidth$ = $tableHeader$$6$$.width()))
    }else {
      if(this.$styleTableContainer$($tableBodyHeight_tableContainer$$8$$, 0, 0), null != $data$$97_tableBodyRow$$14_tableBodyWidth$$ && 0 < $data$$97_tableBodyRow$$14_tableBodyWidth$$.size() ? $tableBody$$9_totalHeight$$.css("display", "table-row-group") : $tableBody$$9_totalHeight$$.css("display", "block"), !this.$_isIE$() && ($minHeight_table$$12_tableDivScroller$$2$$ = parseInt($minHeight_table$$12_tableDivScroller$$2$$.css("minHeight"), 10), 0 < $minHeight_table$$12_tableDivScroller$$2$$)) {
        var $tableHeaderHeight$$ = 0;
        null != $tableHeader$$6$$ && ($tableHeaderHeight$$ = $tableHeader$$6$$.height());
        $tableFooterHeight_tableHeaderRow$$5$$ = 0;
        null != $scrollbarWidth$$2_tableFooter$$5$$ && ($tableFooterHeight_tableHeaderRow$$5$$ = $scrollbarWidth$$2_tableFooter$$5$$.height());
        $tableBody$$9_totalHeight$$.css("min-height", $minHeight_table$$12_tableDivScroller$$2$$ - $tableHeaderHeight$$ - $tableFooterHeight_tableHeaderRow$$5$$ + "px")
      }
    }
    this.$_refreshTableMessagingPosition$()
  };
  $oj$$11$$.$TableDomUtils$.prototype.$replaceTableBodyRow$ = function $$oj$$11$$$$TableDomUtils$$$$replaceTableBodyRow$$($rowIdx$$28$$, $tableBodyRow$$16$$, $docFrag$$2$$) {
    var $oldTableBodyRow$$ = this.$getTableBodyRow$($rowIdx$$28$$);
    $oldTableBodyRow$$ ? ($oldTableBodyRow$$.replaceWith($tableBodyRow$$16$$), this.$clearCachedDomRowData$()) : this.$insertTableBodyRow$($rowIdx$$28$$, $tableBodyRow$$16$$, $docFrag$$2$$)
  };
  $oj$$11$$.$TableDomUtils$.prototype.$setTableBodyCell$ = function $$oj$$11$$$$TableDomUtils$$$$setTableBodyCell$$($rowIdx$$29$$, $columnIdx$$36$$, $tableBodyRow$$17$$, $cellColumnContent_row$$39$$, $cellRenderer$$1$$) {
    var $column$$15$$ = this.$component$.columnMetaData()[$columnIdx$$36$$], $tableBodyCell$$7$$ = this.$getTableBodyCell$($rowIdx$$29$$, $columnIdx$$36$$);
    $tableBodyCell$$7$$ ? $tableBodyCell$$7$$.empty() : ($tableBodyCell$$7$$ = this.$createTableBodyCell$(), this.$styleTableBodyCell$($columnIdx$$36$$, $tableBodyCell$$7$$), this.$insertTableBodyCell$($rowIdx$$29$$, $columnIdx$$36$$, $tableBodyCell$$7$$, $tableBodyRow$$17$$));
    var $data$$98$$ = null;
    null != $column$$15$$.field && ($data$$98$$ = $cellColumnContent_row$$39$$.get($column$$15$$.field));
    if($cellRenderer$$1$$) {
      var $cellContext$$1$$ = this.$getRendererContextObject$($cellColumnContent_row$$39$$, $tableBodyCell$$7$$[0]);
      $cellColumnContent_row$$39$$ = $cellRenderer$$1$$({cellContext:$cellContext$$1$$, column:$column$$15$$, data:$data$$98$$, row:$cellColumnContent_row$$39$$.$pairs$()});
      null != $cellColumnContent_row$$39$$ ? $tableBodyCell$$7$$.append($cellColumnContent_row$$39$$) : ($tableBodyCell$$7$$ = $$$$11$$($tableBodyRow$$17$$.children(":not(." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_ACC_SELECT_CLASS$ + ")")[$columnIdx$$36$$]), this.$setTableBodyCellAttributes$($rowIdx$$29$$, $columnIdx$$36$$, $tableBodyCell$$7$$), this.$styleTableBodyCell$($columnIdx$$36$$, $tableBodyCell$$7$$))
    }else {
      $tableBodyCell$$7$$.append($data$$98$$)
    }
  };
  $oj$$11$$.$TableDomUtils$.prototype.$setTableBodyCellAttributes$ = function $$oj$$11$$$$TableDomUtils$$$$setTableBodyCellAttributes$$($cellRowHeaderId_rowIdx$$30$$, $column$$16_columnIdx$$37$$, $tableBodyCell$$8$$) {
    var $accessibility_headers$$4$$ = this.options.accessibility;
    $column$$16_columnIdx$$37$$ = this.$component$.columnMetaData($column$$16_columnIdx$$37$$);
    var $rowHeaderColumnId$$ = null, $isTableHeaderless$$2$$ = null == this.$getTableHeader$() ? !0 : !1, $rowHeaderColumnId$$ = null != $accessibility_headers$$4$$ && null != $accessibility_headers$$4$$.rowHeader ? $accessibility_headers$$4$$.rowHeader : this.$component$.columnMetaData(0).id;
    $cellRowHeaderId_rowIdx$$30$$ = $rowHeaderColumnId$$ + "_" + $cellRowHeaderId_rowIdx$$30$$;
    $accessibility_headers$$4$$ = $column$$16_columnIdx$$37$$.id;
    $rowHeaderColumnId$$ == $column$$16_columnIdx$$37$$.id ? ($tableBodyCell$$8$$.attr("id", $cellRowHeaderId_rowIdx$$30$$), $isTableHeaderless$$2$$ && ($accessibility_headers$$4$$ = "")) : $accessibility_headers$$4$$ = $isTableHeaderless$$2$$ ? $cellRowHeaderId_rowIdx$$30$$ : $accessibility_headers$$4$$ + " " + $cellRowHeaderId_rowIdx$$30$$;
    $tableBodyCell$$8$$.attr("headers") || $tableBodyCell$$8$$.attr("headers", $accessibility_headers$$4$$)
  };
  $oj$$11$$.$TableDomUtils$.prototype.$setTableHeaderColumnAttributes$ = function $$oj$$11$$$$TableDomUtils$$$$setTableHeaderColumnAttributes$$($columnIdx$$38$$, $tableHeaderColumn$$7$$) {
    var $column$$17$$ = this.$component$.columnMetaData($columnIdx$$38$$);
    $tableHeaderColumn$$7$$.attr("id") || $tableHeaderColumn$$7$$.attr("id", $column$$17$$.id)
  };
  $oj$$11$$.$TableDomUtils$.prototype.$styleInitialTable$ = function $$oj$$11$$$$TableDomUtils$$$$styleInitialTable$$() {
    var $table$$13$$ = this.$getTable$(), $tableContainer$$9$$ = this.$getTableContainer$(), $tableHeader$$7$$ = $table$$13$$.children("thead"), $tableHeader$$7$$ = 0 < $tableHeader$$7$$.length ? $$$$11$$($tableHeader$$7$$[0]) : null, $tableFooter$$6$$ = $table$$13$$.children("tfoot"), $tableFooter$$6$$ = 0 < $tableFooter$$6$$.length ? $$$$11$$($tableFooter$$6$$[0]) : null, $tableBody$$10$$ = $table$$13$$.children("tbody"), $tableBody$$10$$ = 0 < $tableBody$$10$$.length ? $$$$11$$($tableBody$$10$$[0]) : 
    null;
    $table$$13$$.attr("tabindex", "0");
    this.$component$._focusable($table$$13$$);
    this.$component$._hoverable($table$$13$$);
    this.$styleTableContainer$($tableContainer$$9$$, 0, 0);
    this.$styleTableHeader$($tableHeader$$7$$);
    this.$styleTableFooter$($tableFooter$$6$$);
    this.$styleTableBody$($tableBody$$10$$)
  };
  $oj$$11$$.$TableDomUtils$.prototype.$styleTableBody$ = function $$oj$$11$$$$TableDomUtils$$$$styleTableBody$$($tableBody$$11$$) {
    $tableBody$$11$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_BODY_CLASS$);
    $tableBody$$11$$.attr($oj$$11$$.Components.$_OJ_CONTAINER_ATTR$, this.$component$.widgetName)
  };
  $oj$$11$$.$TableDomUtils$.prototype.$styleTableBodyCell$ = function $$oj$$11$$$$TableDomUtils$$$$styleTableBodyCell$$($columnIdx$$39$$, $tableBodyCell$$9$$) {
    var $options$$245$$ = this.options, $lastColumn$$ = $columnIdx$$39$$ == this.$component$.columnMetaData().length - 1 ? !0 : !1, $column$$18$$ = this.$component$.columnMetaData($columnIdx$$39$$);
    $tableBodyCell$$9$$.attr("style", $column$$18$$.style);
    $tableBodyCell$$9$$.hasClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$) || $tableBodyCell$$9$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$);
    $tableBodyCell$$9$$.css("float", "none");
    $tableBodyCell$$9$$.css("-moz-user-select", "none");
    $options$$245$$.verticalGridVisible != $oj$$11$$.$TableDomUtils$.$_OPTION_ENABLED$ || $lastColumn$$ || $tableBodyCell$$9$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_VGRID_LINES_CLASS$);
    $options$$245$$.horizontalGridVisible == $oj$$11$$.$TableDomUtils$.$_OPTION_ENABLED$ && $tableBodyCell$$9$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_HGRID_LINES_CLASS$);
    $column$$18$$.className && $tableBodyCell$$9$$.addClass($column$$18$$.className)
  };
  $oj$$11$$.$TableDomUtils$.prototype.$styleTableBodyRow$ = function $$oj$$11$$$$TableDomUtils$$$$styleTableBodyRow$$($tableBodyRow$$19$$, $rowSelectionMode$$2$$) {
    $tableBodyRow$$19$$.hasClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$) || $tableBodyRow$$19$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$);
    this.$component$._hoverable($tableBodyRow$$19$$);
    $rowSelectionMode$$2$$ != $oj$$11$$.$TableDomUtils$.$_OPTION_SELECTION_MODES$.$_SINGLE$ && $rowSelectionMode$$2$$ != $oj$$11$$.$TableDomUtils$.$_OPTION_SELECTION_MODES$.$_MULTIPLE$ || $tableBodyRow$$19$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_SELECTOR_CLASS$)
  };
  $oj$$11$$.$TableDomUtils$.prototype.$styleTableContainer$ = function $$oj$$11$$$$TableDomUtils$$$$styleTableContainer$$($tableContainer$$10$$, $height$$15_rootAttributes$$1$$, $value$$164_width$$17$$) {
    0 < $height$$15_rootAttributes$$1$$ ? $tableContainer$$10$$.css("height", $height$$15_rootAttributes$$1$$) : $tableContainer$$10$$.css("height", "");
    0 < $value$$164_width$$17$$ ? $tableContainer$$10$$.css("width", $value$$164_width$$17$$) : $tableContainer$$10$$.css("width", "");
    $height$$15_rootAttributes$$1$$ = this.options.rootAttributes;
    $tableContainer$$10$$.attr("class", "");
    for(var $attr$$17$$ in $height$$15_rootAttributes$$1$$) {
      $height$$15_rootAttributes$$1$$.hasOwnProperty($attr$$17$$) && ($value$$164_width$$17$$ = $height$$15_rootAttributes$$1$$[$attr$$17$$], $tableContainer$$10$$.attr($attr$$17$$, $value$$164_width$$17$$))
    }
    $tableContainer$$10$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_CONTAINER_CLASS$);
    $tableContainer$$10$$.addClass($oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_WIDGET$);
    $tableContainer$$10$$.css("overflow", "hidden")
  };
  $oj$$11$$.$TableDomUtils$.prototype.$styleTableFooter$ = function $$oj$$11$$$$TableDomUtils$$$$styleTableFooter$$($tableFooter$$7_tableFooterRow$$4$$) {
    $tableFooter$$7_tableFooterRow$$4$$ && ($tableFooter$$7_tableFooterRow$$4$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CLASS$), $tableFooter$$7_tableFooterRow$$4$$ = $$$$11$$($tableFooter$$7_tableFooterRow$$4$$.children("tr")[0]), $tableFooter$$7_tableFooterRow$$4$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_ROW_CLASS$), $tableFooter$$7_tableFooterRow$$4$$.css("position", "relative"))
  };
  $oj$$11$$.$TableDomUtils$.prototype.$styleTableFooterCell$ = function $$oj$$11$$$$TableDomUtils$$$$styleTableFooterCell$$($columnIdx$$40$$, $tableFooterCell$$3$$) {
    var $options$$247$$ = this.options, $lastColumn$$1$$ = $columnIdx$$40$$ == this.$component$.columnMetaData().length - 1 ? !0 : !1, $column$$19$$ = this.$component$.columnMetaData($columnIdx$$40$$);
    $tableFooterCell$$3$$.attr("style", $column$$19$$.footerStyle);
    $tableFooterCell$$3$$.hasClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$) || $tableFooterCell$$3$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$);
    $tableFooterCell$$3$$.css("float", "none");
    $tableFooterCell$$3$$.css("-moz-user-select", "none");
    $options$$247$$.verticalGridVisible != $oj$$11$$.$TableDomUtils$.$_OPTION_ENABLED$ || $lastColumn$$1$$ || $tableFooterCell$$3$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_VGRID_LINES_CLASS$);
    $column$$19$$.footerClassName && $tableFooterCell$$3$$.addClass($column$$19$$.footerClassName)
  };
  $oj$$11$$.$TableDomUtils$.prototype.$styleTableHeader$ = function $$oj$$11$$$$TableDomUtils$$$$styleTableHeader$$($tableHeader$$8_tableHeaderRow$$6$$) {
    $tableHeader$$8_tableHeaderRow$$6$$ && ($tableHeader$$8_tableHeaderRow$$6$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_CLASS$), $tableHeader$$8_tableHeaderRow$$6$$.css("display", "table-header-group"), $tableHeader$$8_tableHeaderRow$$6$$ = $$$$11$$($tableHeader$$8_tableHeaderRow$$6$$.children("tr")[0]), $tableHeader$$8_tableHeaderRow$$6$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_ROW_CLASS$), $tableHeader$$8_tableHeaderRow$$6$$.css("position", "relative"))
  };
  $oj$$11$$.$TableDomUtils$.prototype.$styleTableHeaderColumn$ = function $$oj$$11$$$$TableDomUtils$$$$styleTableHeaderColumn$$($column$$20_columnIdx$$41$$, $tableHeaderColumn$$8$$, $columnSelectionMode$$3$$) {
    var $lastColumn$$2$$ = $column$$20_columnIdx$$41$$ == this.$component$.columnMetaData().length - 1 ? !0 : !1;
    $column$$20_columnIdx$$41$$ = this.$component$.columnMetaData($column$$20_columnIdx$$41$$);
    $tableHeaderColumn$$8$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CLASS$);
    $tableHeaderColumn$$8$$.attr("style", $column$$20_columnIdx$$41$$.headerStyle);
    $tableHeaderColumn$$8$$.css("float", "none");
    $lastColumn$$2$$ && $tableHeaderColumn$$8$$.css("borderRight", "none");
    $columnSelectionMode$$3$$ != $oj$$11$$.$TableDomUtils$.$_OPTION_SELECTION_MODES$.$_SINGLE$ && $columnSelectionMode$$3$$ != $oj$$11$$.$TableDomUtils$.$_OPTION_SELECTION_MODES$.$_MULTIPLE$ || $tableHeaderColumn$$8$$.addClass($oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_SELECTOR_CLASS$)
  };
  $oj$$11$$.$TableDomUtils$.prototype.$_isIE$ = function $$oj$$11$$$$TableDomUtils$$$$_isIE$$() {
    if("Microsoft Internet Explorer" == navigator.appName) {
      var $resultArray$$ = /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent);
      if(null != $resultArray$$) {
        return parseFloat($resultArray$$[1])
      }
    }
    return null
  };
  $oj$$11$$.$TableDomUtils$.prototype.$_refreshColumnHeaderPadding$ = function $$oj$$11$$$$TableDomUtils$$$$_refreshColumnHeaderPadding$$() {
    var $columns$$12$$ = this.$component$.columnMetaData(), $i$$197$$, $headerColumn$$9_headerColumnRowDiv$$1$$;
    if(null != this.$getTableHeader$()) {
      var $isRTL$$2$$ = "rtl" === this.$component$.$_GetReadingDirection$(), $headerColumnAscDiv$$1$$, $headerColumnDscDiv$$1$$, $newHeaderColumnRowDivPadding_totalSortLinkWidth$$;
      for($i$$197$$ = 0;$i$$197$$ < $columns$$12$$.length;$i$$197$$++) {
        $headerColumn$$9_headerColumnRowDiv$$1$$ = this.$getTableHeaderColumn$($i$$197$$), null != $headerColumn$$9_headerColumnRowDiv$$1$$ && ($headerColumnAscDiv$$1$$ = $headerColumn$$9_headerColumnRowDiv$$1$$.find("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_CLASS$), $headerColumnDscDiv$$1$$ = $headerColumn$$9_headerColumnRowDiv$$1$$.find("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_CLASS$), $headerColumn$$9_headerColumnRowDiv$$1$$ = $headerColumn$$9_headerColumnRowDiv$$1$$.find("." + 
        $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ROW_CLASS$), $newHeaderColumnRowDivPadding_totalSortLinkWidth$$ = $headerColumnAscDiv$$1$$.width() + $headerColumnDscDiv$$1$$.width(), this.$_headerColumnRowDivPadding$ || (this.$_headerColumnRowDivPadding$ = $isRTL$$2$$ ? $headerColumn$$9_headerColumnRowDiv$$1$$.css("padding-left") : $headerColumn$$9_headerColumnRowDiv$$1$$.css("padding-right")), $newHeaderColumnRowDivPadding_totalSortLinkWidth$$ = parseInt(this.$_headerColumnRowDivPadding$, 
        10) + $newHeaderColumnRowDivPadding_totalSortLinkWidth$$ + "px", $isRTL$$2$$ ? $headerColumn$$9_headerColumnRowDiv$$1$$.css("padding-left", $newHeaderColumnRowDivPadding_totalSortLinkWidth$$) : $headerColumn$$9_headerColumnRowDiv$$1$$.css("padding-right", $newHeaderColumnRowDivPadding_totalSortLinkWidth$$), $isRTL$$2$$ ? $headerColumnAscDiv$$1$$.css("left", $headerColumnDscDiv$$1$$.width() + "px") : $headerColumnAscDiv$$1$$.css("right", $headerColumnDscDiv$$1$$.width() + "px"))
      }
    }
  };
  $oj$$11$$.$TableDomUtils$.prototype.$_refreshTableMessagingPosition$ = function $$oj$$11$$$$TableDomUtils$$$$_refreshTableMessagingPosition$$() {
    var $tableContainer$$11_tableHeaderHeight$$1$$ = this.$getTableContainer$(), $tableHeader$$9$$ = this.$getTableHeader$(), $tableStatusMessage$$ = this.$getTableStatusMessage$(), $tableNoDataMessage$$ = this.$getTableNoDataMessage$();
    $tableStatusMessage$$.css("top", $tableContainer$$11_tableHeaderHeight$$1$$.height() / 2 + "px");
    $tableStatusMessage$$.css("left", ($tableContainer$$11_tableHeaderHeight$$1$$.width() - $tableStatusMessage$$.width()) / 2 + "px");
    null != $tableHeader$$9$$ ? ($tableContainer$$11_tableHeaderHeight$$1$$ = $tableHeader$$9$$.height(), $tableNoDataMessage$$.css("top", $tableContainer$$11_tableHeaderHeight$$1$$ + "px")) : $tableNoDataMessage$$.css("top", "0px")
  };
  $oj$$11$$.$TableDomUtils$.prototype.$_removeHeaderColumnAndCellColumnWidths$ = function $$oj$$11$$$$TableDomUtils$$$$_removeHeaderColumnAndCellColumnWidths$$() {
    var $data$$99_firstRowIdx$$ = this.options.data, $columns$$13$$ = this.$component$.columnMetaData(), $i$$198_tableBodyRows$$3$$, $headerColumn$$10_tableBodyCell$$10$$;
    for($i$$198_tableBodyRows$$3$$ = 0;$i$$198_tableBodyRows$$3$$ < $columns$$13$$.length;$i$$198_tableBodyRows$$3$$++) {
      $headerColumn$$10_tableBodyCell$$10$$ = this.$getTableHeaderColumn$($i$$198_tableBodyRows$$3$$), null != $headerColumn$$10_tableBodyCell$$10$$ && $headerColumn$$10_tableBodyCell$$10$$.css("min-width", "")
    }
    if(null != $data$$99_firstRowIdx$$ && 0 < $data$$99_firstRowIdx$$.size() && ($i$$198_tableBodyRows$$3$$ = this.$getTableBodyRows$(), null != $i$$198_tableBodyRows$$3$$ && 0 < $i$$198_tableBodyRows$$3$$.length)) {
      for($data$$99_firstRowIdx$$ = this.$getElementRowIdx$($i$$198_tableBodyRows$$3$$[0]), $i$$198_tableBodyRows$$3$$ = 0;$i$$198_tableBodyRows$$3$$ < $columns$$13$$.length;$i$$198_tableBodyRows$$3$$++) {
        $headerColumn$$10_tableBodyCell$$10$$ = this.$getTableBodyCell$($data$$99_firstRowIdx$$, $i$$198_tableBodyRows$$3$$), $headerColumn$$10_tableBodyCell$$10$$.css("min-width", "")
      }
    }
  };
  $oj$$11$$.$TableDomUtils$.prototype.$_removeTableDimenionsStyling$ = function $$oj$$11$$$$TableDomUtils$$$$_removeTableDimenionsStyling$$() {
    var $table$$14$$ = this.$getTable$(), $tableHeader$$10$$ = this.$getTableHeader$(), $tableHeaderRow$$7$$ = this.$getTableHeaderRow$(), $tableBody$$12$$ = this.$getTableBody$();
    null != $tableHeader$$10$$ && ($tableHeader$$10$$.css("position", ""), this.$isDivScroller$() && $tableHeader$$10$$.css("top", ""), $tableHeaderRow$$7$$.css("display", ""));
    $table$$14$$.css("display", "");
    $tableBody$$12$$.css("display", "");
    $tableBody$$12$$.css("position", "");
    $tableBody$$12$$.css("overflow-y", "");
    $tableBody$$12$$.css("overflow-x", "");
    $tableBody$$12$$.css("width", "");
    this.$_removeHeaderColumnAndCellColumnWidths$()
  };
  $oj$$11$$.$TableDomUtils$.prototype.$_setHeaderColumnAndCellColumnWidths$ = function $$oj$$11$$$$TableDomUtils$$$$_setHeaderColumnAndCellColumnWidths$$() {
    var $data$$100_firstRowIdx$$1$$ = this.options.data, $columns$$14$$ = this.$component$.columnMetaData(), $columnWidths$$1$$ = [], $columnPaddingWidths$$1$$ = [], $i$$199_tableBodyRows$$4$$, $adjustedColumnWidth$$1_headerColumn$$11_headerColumnRowDiv$$3_tableBodyCellPaddingWidth$$1$$, $headerColumnTextDivHeight$$1_tableBodyCell$$11$$, $headerColumnTextDiv$$2$$;
    for($i$$199_tableBodyRows$$4$$ = 0;$i$$199_tableBodyRows$$4$$ < $columns$$14$$.length;$i$$199_tableBodyRows$$4$$++) {
      $adjustedColumnWidth$$1_headerColumn$$11_headerColumnRowDiv$$3_tableBodyCellPaddingWidth$$1$$ = this.$getTableHeaderColumn$($i$$199_tableBodyRows$$4$$), null != $adjustedColumnWidth$$1_headerColumn$$11_headerColumnRowDiv$$3_tableBodyCellPaddingWidth$$1$$ && ($columnWidths$$1$$[$i$$199_tableBodyRows$$4$$] = $adjustedColumnWidth$$1_headerColumn$$11_headerColumnRowDiv$$3_tableBodyCellPaddingWidth$$1$$.width(), $columnPaddingWidths$$1$$[$i$$199_tableBodyRows$$4$$] = parseInt($adjustedColumnWidth$$1_headerColumn$$11_headerColumnRowDiv$$3_tableBodyCellPaddingWidth$$1$$.css("padding-right"), 
      10) + parseInt($adjustedColumnWidth$$1_headerColumn$$11_headerColumnRowDiv$$3_tableBodyCellPaddingWidth$$1$$.css("padding-left"), 10), $headerColumnTextDivHeight$$1_tableBodyCell$$11$$ = null, ($headerColumnTextDiv$$2$$ = $adjustedColumnWidth$$1_headerColumn$$11_headerColumnRowDiv$$3_tableBodyCellPaddingWidth$$1$$.find("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_TEXT_CLASS$)) && 0 < $headerColumnTextDiv$$2$$.length && ($headerColumnTextDivHeight$$1_tableBodyCell$$11$$ = $headerColumnTextDiv$$2$$.get(0).clientHeight), 
      null != $headerColumnTextDivHeight$$1_tableBodyCell$$11$$ && ($adjustedColumnWidth$$1_headerColumn$$11_headerColumnRowDiv$$3_tableBodyCellPaddingWidth$$1$$ = $adjustedColumnWidth$$1_headerColumn$$11_headerColumnRowDiv$$3_tableBodyCellPaddingWidth$$1$$.find("." + $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ROW_CLASS$), $adjustedColumnWidth$$1_headerColumn$$11_headerColumnRowDiv$$3_tableBodyCellPaddingWidth$$1$$.css("min-height", $headerColumnTextDivHeight$$1_tableBodyCell$$11$$ + 
      "px")))
    }
    for($i$$199_tableBodyRows$$4$$ = 0;$i$$199_tableBodyRows$$4$$ < $columns$$14$$.length;$i$$199_tableBodyRows$$4$$++) {
      $adjustedColumnWidth$$1_headerColumn$$11_headerColumnRowDiv$$3_tableBodyCellPaddingWidth$$1$$ = this.$getTableHeaderColumn$($i$$199_tableBodyRows$$4$$), null != $adjustedColumnWidth$$1_headerColumn$$11_headerColumnRowDiv$$3_tableBodyCellPaddingWidth$$1$$ && $adjustedColumnWidth$$1_headerColumn$$11_headerColumnRowDiv$$3_tableBodyCellPaddingWidth$$1$$.css("min-width", $columnWidths$$1$$[$i$$199_tableBodyRows$$4$$] + "px")
    }
    if(null != $data$$100_firstRowIdx$$1$$ && 0 < $data$$100_firstRowIdx$$1$$.size() && ($i$$199_tableBodyRows$$4$$ = this.$getTableBodyRows$(), null != $i$$199_tableBodyRows$$4$$ && 0 < $i$$199_tableBodyRows$$4$$.length)) {
      for($data$$100_firstRowIdx$$1$$ = this.$getElementRowIdx$($i$$199_tableBodyRows$$4$$[0]), $i$$199_tableBodyRows$$4$$ = 0;$i$$199_tableBodyRows$$4$$ < $columns$$14$$.length;$i$$199_tableBodyRows$$4$$++) {
        $headerColumnTextDivHeight$$1_tableBodyCell$$11$$ = this.$getTableBodyCell$($data$$100_firstRowIdx$$1$$, $i$$199_tableBodyRows$$4$$), $adjustedColumnWidth$$1_headerColumn$$11_headerColumnRowDiv$$3_tableBodyCellPaddingWidth$$1$$ = parseInt($headerColumnTextDivHeight$$1_tableBodyCell$$11$$.css("padding-right"), 10) + parseInt($headerColumnTextDivHeight$$1_tableBodyCell$$11$$.css("padding-left"), 10), $adjustedColumnWidth$$1_headerColumn$$11_headerColumnRowDiv$$3_tableBodyCellPaddingWidth$$1$$ = 
        $adjustedColumnWidth$$1_headerColumn$$11_headerColumnRowDiv$$3_tableBodyCellPaddingWidth$$1$$ > $columnPaddingWidths$$1$$[$i$$199_tableBodyRows$$4$$] ? $columnWidths$$1$$[$i$$199_tableBodyRows$$4$$] - $adjustedColumnWidth$$1_headerColumn$$11_headerColumnRowDiv$$3_tableBodyCellPaddingWidth$$1$$ + $columnPaddingWidths$$1$$[$i$$199_tableBodyRows$$4$$] : $columnWidths$$1$$[$i$$199_tableBodyRows$$4$$] + $columnPaddingWidths$$1$$[$i$$199_tableBodyRows$$4$$] - $adjustedColumnWidth$$1_headerColumn$$11_headerColumnRowDiv$$3_tableBodyCellPaddingWidth$$1$$, 
        $headerColumnTextDivHeight$$1_tableBodyCell$$11$$.css("min-width", $adjustedColumnWidth$$1_headerColumn$$11_headerColumnRowDiv$$3_tableBodyCellPaddingWidth$$1$$ + "px")
      }
    }
  };
  $oj$$11$$.$TableDomUtils$.$CSS_CLASSES$ = {$_CHECKBOX_ACC_SELECT_COLUMN_CLASS$:"oj-table-checkbox-acc-select-column", $_CHECKBOX_ACC_SELECT_ROW_CLASS$:"oj-table-checkbox-acc-select-row", $_TABLE_CONTAINER_CLASS$:"oj-table-container", $_TABLE_SCROLLER_CLASS$:"oj-table-scroller", $_TABLE_CLASS$:"oj-table", $_TABLE_FOOTER_CLASS$:"oj-table-footer", $_TABLE_FOOTER_ROW_CLASS$:"oj-table-footer-row", $_TABLE_HEADER_CLASS$:"oj-table-header", $_TABLE_HEADER_ROW_CLASS$:"oj-table-header-row", $_COLUMN_HEADER_CLASS$:"oj-table-column-header", 
  $_COLUMN_HEADER_SELECTOR_CLASS$:"oj-table-column-header-selector", $_COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS$:"oj-table-column-header-acc-select-column", $_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$:"oj-table-column-header-acc-select-row", $_COLUMN_HEADER_ROW_CLASS$:"oj-table-column-header-row", $_COLUMN_HEADER_TEXT_CLASS$:"oj-table-column-header-text", $_COLUMN_HEADER_ASC_CLASS$:"oj-table-column-header-asc", $_COLUMN_HEADER_DSC_CLASS$:"oj-table-column-header-dsc", $_COLUMN_HEADER_ACC_ASC_LINK_CLASS$:"oj-table-column-header-acc-asc-link", 
  $_COLUMN_HEADER_ACC_DSC_LINK_CLASS$:"oj-table-column-header-acc-dsc-link", $_COLUMN_HEADER_ASC_LINK_CLASS$:"oj-table-column-header-asc-link", $_COLUMN_HEADER_DSC_LINK_CLASS$:"oj-table-column-header-dsc-link", $_COLUMN_HEADER_ASC_ICON_CLASS$:"oj-table-column-header-asc-icon", $_COLUMN_HEADER_DSC_ICON_CLASS$:"oj-table-column-header-dsc-icon", $_TABLE_BODY_CLASS$:"oj-table-body", $_TABLE_DATA_ROW_CLASS$:"oj-table-body-row", $_TABLE_DATA_ROW_SELECTOR_CLASS$:"oj-table-body-row-selector", $_TABLE_DATA_CELL_CLASS$:"oj-table-data-cell", 
  $_TABLE_DATA_CELL_ACC_SELECT_CLASS$:"oj-table-data-cell-acc-select", $_TABLE_DATA_CELL_VGRID_LINES_CLASS$:"oj-table-data-cell-vgrid-lines", $_TABLE_DATA_CELL_HGRID_LINES_CLASS$:"oj-table-data-cell-hgrid-lines", $_TABLE_FOOTER_CELL_CLASS$:"oj-table-footer-cell", $_TABLE_FOOTER_CELL_VGRID_LINES_CLASS$:"oj-table-footer-cell-vgrid-lines", $_TABLE_STATUS_MESSAGE_CLASS$:"oj-table-status-message", $_TABLE_NO_DATA_MESSAGE_CLASS$:"oj-table-no-data-message", $_WIDGET_ICON_CLASS$:"oj-component-icon", $_HIDDEN_CONTENT_ACC_CLASS$:"oj-helper-hidden-accessible"};
  $oj$$11$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$ = {$_WIDGET$:"oj-component", $_ACTIVE$:"oj-active", $_CLICKABLE_ICON$:"oj-clickable-icon", $_DISABLED$:"oj-disabled", $_ENABLED$:"oj-enabled", $_FOCUS$:"oj-focus", $_HOVER$:"oj-hover", $_SELECTED$:"oj-selected"};
  $oj$$11$$.$TableDomUtils$.$_COLUMN_HEADER_ROW_SELECT_ID$ = "_hdrColRowSel";
  $oj$$11$$.$TableDomUtils$.$_OPTION_ENABLED$ = "enabled";
  $oj$$11$$.$TableDomUtils$.$_OPTION_DISABLED$ = "disabled";
  $oj$$11$$.$TableDomUtils$.$_OPTION_SELECTION_MODES$ = {$_SINGLE$:"single", $_MULTIPLE$:"multiple"}
});
