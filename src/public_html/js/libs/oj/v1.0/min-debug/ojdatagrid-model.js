define(["ojs/ojcore", "jquery", "ojs/ojdatacollection-common", "ojs/ojmodel"], function($oj$$17$$) {
  $oj$$17$$.$CollectionCellSet$ = function $$oj$$17$$$$CollectionCellSet$$($startRow$$2$$, $endRow$$2$$, $startColumn$$2$$, $endColumn$$2$$, $collection$$45$$, $columns$$14$$) {
    $oj$$17$$.$Assert$.$assertNumber$($startRow$$2$$, null);
    $oj$$17$$.$Assert$.$assertNumber$($endRow$$2$$, null);
    $oj$$17$$.$Assert$.$assertNumber$($startColumn$$2$$, null);
    $oj$$17$$.$Assert$.$assertNumber$($endColumn$$2$$, null);
    $oj$$17$$.$Assert$.$assertArrayOrNull$($columns$$14$$);
    this.$m_startRow$ = $startRow$$2$$;
    this.$m_endRow$ = $endRow$$2$$;
    this.$m_startColumn$ = $startColumn$$2$$;
    this.$m_endColumn$ = $endColumn$$2$$;
    this.$m_collection$ = $collection$$45$$;
    this.$m_columns$ = $columns$$14$$
  };
  $goog$exportPath_$$("CollectionCellSet", $oj$$17$$.$CollectionCellSet$, $oj$$17$$);
  $oj$$17$$.$CollectionCellSet$.prototype.getData = function $$oj$$17$$$$CollectionCellSet$$$getData$($column$$18_indexes$$9$$) {
    var $self$$58$$ = this;
    this.$_getModel$($column$$18_indexes$$9$$);
    this.$_getModel$($column$$18_indexes$$9$$).done(function($model$$60$$) {
      $self$$58$$.$model$ = $model$$60$$
    });
    if(null == $self$$58$$.$model$) {
      return null
    }
    $column$$18_indexes$$9$$ = $column$$18_indexes$$9$$.column;
    $oj$$17$$.$Assert$.assert($column$$18_indexes$$9$$ >= this.$m_startColumn$ && $column$$18_indexes$$9$$ <= this.$m_endColumn$);
    return $self$$58$$.$model$.get(this.$m_columns$[$column$$18_indexes$$9$$])
  };
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getData", {getData:$oj$$17$$.$CollectionCellSet$.prototype.getData});
  $oj$$17$$.$CollectionCellSet$.prototype.getMetadata = function $$oj$$17$$$$CollectionCellSet$$$getMetadata$($column$$19_indexes$$10$$) {
    var $self$$59$$ = this;
    this.$_getModel$($column$$19_indexes$$10$$);
    this.$_getModel$($column$$19_indexes$$10$$).done(function($model$$62$$) {
      $self$$59$$.$model$ = $model$$62$$
    });
    if(null == $self$$59$$.$model$) {
      return null
    }
    $column$$19_indexes$$10$$ = $column$$19_indexes$$10$$.column;
    $oj$$17$$.$Assert$.assert($column$$19_indexes$$10$$ >= this.$m_startColumn$ && $column$$19_indexes$$10$$ <= this.$m_endColumn$);
    return{keys:{row:$self$$59$$.$model$.$GetCid$(), column:this.$m_columns$[$column$$19_indexes$$10$$]}}
  };
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getMetadata", {getMetadata:$oj$$17$$.$CollectionCellSet$.prototype.getMetadata});
  $oj$$17$$.$CollectionCellSet$.prototype.$_getModel$ = function $$oj$$17$$$$CollectionCellSet$$$$_getModel$$($column$$20_indexes$$11$$) {
    var $row$$46$$;
    $oj$$17$$.$Assert$.$assertObject$($column$$20_indexes$$11$$);
    $row$$46$$ = $column$$20_indexes$$11$$.row;
    $column$$20_indexes$$11$$ = $column$$20_indexes$$11$$.column;
    $oj$$17$$.$Assert$.assert($row$$46$$ >= this.$m_startRow$ && $row$$46$$ <= this.$m_endRow$ && $column$$20_indexes$$11$$ >= this.$m_startColumn$ && $column$$20_indexes$$11$$ <= this.$m_endColumn$);
    return this.$m_collection$.at($row$$46$$, {deferred:!0})
  };
  $oj$$17$$.$CollectionCellSet$.prototype.$getCount$ = function $$oj$$17$$$$CollectionCellSet$$$$getCount$$($axis$$19$$) {
    return"row" === $axis$$19$$ ? Math.max(0, this.$m_endRow$ - this.$m_startRow$) : "column" === $axis$$19$$ ? Math.max(0, this.$m_endColumn$ - this.$m_startColumn$) : 0
  };
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getCount", {$getCount$:$oj$$17$$.$CollectionCellSet$.prototype.$getCount$});
  $oj$$17$$.$CollectionCellSet$.prototype.$getStartRow$ = $JSCompiler_get$$("$m_startRow$");
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getStartRow", {$getStartRow$:$oj$$17$$.$CollectionCellSet$.prototype.$getStartRow$});
  $oj$$17$$.$CollectionCellSet$.prototype.$getEndRow$ = $JSCompiler_get$$("$m_endRow$");
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getEndRow", {$getEndRow$:$oj$$17$$.$CollectionCellSet$.prototype.$getEndRow$});
  $oj$$17$$.$CollectionCellSet$.prototype.$getStartColumn$ = $JSCompiler_get$$("$m_startColumn$");
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getStartColumn", {$getStartColumn$:$oj$$17$$.$CollectionCellSet$.prototype.$getStartColumn$});
  $oj$$17$$.$CollectionCellSet$.prototype.$getEndColumn$ = $JSCompiler_get$$("$m_endColumn$");
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getEndColumn", {$getEndColumn$:$oj$$17$$.$CollectionCellSet$.prototype.$getEndColumn$});
  $oj$$17$$.$CollectionCellSet$.prototype.$getCollection$ = $JSCompiler_get$$("$m_collection$");
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getCollection", {$getCollection$:$oj$$17$$.$CollectionCellSet$.prototype.$getCollection$});
  $oj$$17$$.$CollectionCellSet$.prototype.$getColumns$ = $JSCompiler_get$$("$m_columns$");
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getColumns", {$getColumns$:$oj$$17$$.$CollectionCellSet$.prototype.$getColumns$});
  $oj$$17$$.$CollectionHeaderSet$ = function $$oj$$17$$$$CollectionHeaderSet$$($start$$29$$, $end$$8$$, $headers$$5$$, $collection$$46$$, $rowHeader$$3$$) {
    $oj$$17$$.$Assert$.$assertNumber$($start$$29$$, null);
    $oj$$17$$.$Assert$.$assertNumber$($end$$8$$, null);
    $oj$$17$$.$Assert$.$assertArrayOrNull$($headers$$5$$);
    this.$m_start$ = $start$$29$$;
    this.$m_end$ = $end$$8$$;
    this.$m_headers$ = $headers$$5$$;
    this.$m_collection$ = $collection$$46$$;
    this.$m_rowHeader$ = $rowHeader$$3$$
  };
  $goog$exportPath_$$("CollectionHeaderSet", $oj$$17$$.$CollectionHeaderSet$, $oj$$17$$);
  $oj$$17$$.$CollectionHeaderSet$.prototype.getData = function $$oj$$17$$$$CollectionHeaderSet$$$getData$($index$$146$$) {
    $oj$$17$$.$Assert$.assert($index$$146$$ <= this.$m_end$ && $index$$146$$ >= this.$m_start$);
    var $self$$60$$ = this;
    return null != this.$m_rowHeader$ && null != this.$m_collection$ ? (this.$m_collection$.at($index$$146$$, {deferred:!0}).done(function($model$$64$$) {
      $self$$60$$.$model$ = $model$$64$$
    }), $self$$60$$.$model$.get(this.$m_rowHeader$)) : this.$m_headers$[$index$$146$$]
  };
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getData", {getData:$oj$$17$$.$CollectionHeaderSet$.prototype.getData});
  $oj$$17$$.$CollectionHeaderSet$.prototype.getMetadata = function $$oj$$17$$$$CollectionHeaderSet$$$getMetadata$($index$$147$$) {
    var $self$$61$$;
    return null != this.$m_rowHeader$ && null != this.$m_collection$ ? ($self$$61$$ = this, this.$m_collection$.at($index$$147$$, {deferred:!0}).done(function($model$$65$$) {
      $self$$61$$.$model$ = $model$$65$$
    }), null == $self$$61$$.$model$ ? null : {key:$self$$61$$.$model$.$GetCid$()}) : {key:this.getData($index$$147$$)}
  };
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getMetadata", {getMetadata:$oj$$17$$.$CollectionHeaderSet$.prototype.getMetadata});
  $oj$$17$$.$CollectionHeaderSet$.prototype.$getCount$ = function $$oj$$17$$$$CollectionHeaderSet$$$$getCount$$() {
    return Math.max(0, this.$m_end$ - this.$m_start$)
  };
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getCount", {$getCount$:$oj$$17$$.$CollectionHeaderSet$.prototype.$getCount$});
  $oj$$17$$.$CollectionHeaderSet$.prototype.$getStart$ = $JSCompiler_get$$("$m_start$");
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getStart", {$getStart$:$oj$$17$$.$CollectionHeaderSet$.prototype.$getStart$});
  $oj$$17$$.$CollectionHeaderSet$.prototype.$getEnd$ = $JSCompiler_get$$("$m_end$");
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getEnd", {$getEnd$:$oj$$17$$.$CollectionHeaderSet$.prototype.$getEnd$});
  $oj$$17$$.$CollectionHeaderSet$.prototype.$getHeaders$ = $JSCompiler_get$$("$m_headers$");
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getHeaders", {$getHeaders$:$oj$$17$$.$CollectionHeaderSet$.prototype.$getHeaders$});
  $oj$$17$$.$CollectionHeaderSet$.prototype.$getRowHeader$ = $JSCompiler_get$$("$m_rowHeader$");
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getRowHeader", {$getRowHeader$:$oj$$17$$.$CollectionHeaderSet$.prototype.$getRowHeader$});
  $oj$$17$$.$CollectionHeaderSet$.prototype.$getCollection$ = $JSCompiler_get$$("$m_collection$");
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getCollection", {$getCollection$:$oj$$17$$.$CollectionHeaderSet$.prototype.$getCollection$});
  $oj$$17$$.$CollectionDataGridDataSource$ = function $$oj$$17$$$$CollectionDataGridDataSource$$($collection$$47$$, $options$$271$$) {
    this.$collection$ = $collection$$47$$;
    null != $options$$271$$ && (this.$rowHeader$ = $options$$271$$.rowHeader, this.columns = $options$$271$$.columns);
    this.$_startIndex$ = 0;
    this.$_totalSize$ = this.$_pageSize$ = -1;
    this.$syncing$ = this.$initialSync$ = !1;
    $oj$$17$$.$CollectionDataGridDataSource$.$superclass$.constructor.call(this)
  };
  $goog$exportPath_$$("CollectionDataGridDataSource", $oj$$17$$.$CollectionDataGridDataSource$, $oj$$17$$);
  $oj$$17$$.$Object$.$createSubclass$($oj$$17$$.$CollectionDataGridDataSource$, $oj$$17$$.$DataGridDataSource$, "oj.CollectionDataGridDataSource");
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$Init$ = function $$oj$$17$$$$CollectionDataGridDataSource$$$$Init$$() {
    $oj$$17$$.$CollectionDataGridDataSource$.$superclass$.$Init$.call(this);
    this.$pendingHeaderCallback$ = {};
    this.$_isRemote$() ? this.$initialSync$ = !0 : null == this.columns && 0 < this.$collection$.length && (this.columns = this.$collection$.first().keys(), -1 != this.columns.indexOf(this.$rowHeader$) && this.columns.splice(this.columns.indexOf(this.$rowHeader$), 1));
    this.$_registerEventListeners$()
  };
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.Init", {$Init$:$oj$$17$$.$CollectionDataGridDataSource$.prototype.$Init$});
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$_registerEventListeners$ = function $$oj$$17$$$$CollectionDataGridDataSource$$$$_registerEventListeners$$() {
    this.$collection$.on("add", this.$_handleModelAdded$.bind(this));
    this.$collection$.on("remove", this.$_handleModelDeleted$.bind(this));
    this.$collection$.on("change", this.$_handleModelChanged$.bind(this));
    this.$collection$.on("sync", this.$_handleSync$.bind(this))
  };
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$_isRemote$ = function $$oj$$17$$$$CollectionDataGridDataSource$$$$_isRemote$$() {
    return null != this.$collection$.url
  };
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$_isDataAvailable$ = function $$oj$$17$$$$CollectionDataGridDataSource$$$$_isDataAvailable$$() {
    return this.$_isRemote$() ? null != this.data : !0
  };
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$_handleCollectionFetched$ = function $$oj$$17$$$$CollectionDataGridDataSource$$$$_handleCollectionFetched$$($isInit$$, $collection$$48$$, $response$$10$$) {
    var $axis$$20$$;
    this.data = $response$$10$$;
    !0 === $isInit$$ ? this.$initialSync$ = !1 : this.$syncing$ = !1;
    this.$_totalSize$ = void 0 === $collection$$48$$.$totalResults$ ? $collection$$48$$.length : $collection$$48$$.$totalResults$;
    $oj$$17$$.$DataGridDataSource$.$superclass$.handleEvent.call(this, "sync", !0);
    null == this.columns && 0 < this.$collection$.models.length && (this.columns = this.$collection$.models[0].keys(), -1 != this.columns.indexOf(this.$rowHeader$) && this.columns.splice(this.columns.indexOf(this.$rowHeader$), 1));
    for($axis$$20$$ in this.$pendingHeaderCallback$) {
      this.$pendingHeaderCallback$.hasOwnProperty($axis$$20$$) && null != this.$pendingHeaderCallback$[$axis$$20$$] && this.$fetchHeaders$(this.$pendingHeaderCallback$[$axis$$20$$].$headerRange$, this.$pendingHeaderCallback$[$axis$$20$$].callbacks, this.$pendingHeaderCallback$[$axis$$20$$].$callbackObjects$)
    }
    null != this.$pendingCellCallback$ && this.$fetchCells$(this.$pendingCellCallback$.$cellRanges$, this.$pendingCellCallback$.callbacks, this.$pendingCellCallback$.$callbackObjects$)
  };
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$getCount$ = function $$oj$$17$$$$CollectionDataGridDataSource$$$$getCount$$($axis$$21$$) {
    if(!this.$_isDataAvailable$()) {
      return this.precision = "estimate", -1
    }
    this.precision = "exact";
    return"row" == $axis$$21$$ ? this.size() : "column" == $axis$$21$$ ? this.columns.length : 0
  };
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCount", {$getCount$:$oj$$17$$.$CollectionDataGridDataSource$.prototype.$getCount$});
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$17$$$$CollectionDataGridDataSource$$$$getCountPrecision$$($axis$$22$$) {
    null == this.precision && this.$getCount$($axis$$22$$);
    return this.precision
  };
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$17$$.$CollectionDataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$17$$$$CollectionDataGridDataSource$$$$fetchHeaders$$($headerRange$$7$$, $callbacks$$44$$, $callbackObjects$$16$$) {
    var $axis$$23$$, $callback$$88$$;
    $axis$$23$$ = $headerRange$$7$$.axis;
    this.$_isDataAvailable$() ? this.$_handleHeaderFetchSuccess$($headerRange$$7$$, $callbacks$$44$$, $callbackObjects$$16$$) : null != $callbacks$$44$$ && null == this.$pendingHeaderCallback$[$axis$$23$$] && ($callback$$88$$ = {}, $callback$$88$$.$headerRange$ = $headerRange$$7$$, $callback$$88$$.callbacks = $callbacks$$44$$, $callback$$88$$.$callbackObjects$ = $callbackObjects$$16$$, this.$pendingHeaderCallback$[$axis$$23$$] = $callback$$88$$)
  };
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$17$$.$CollectionDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$_handleHeaderFetchSuccess$ = function $$oj$$17$$$$CollectionDataGridDataSource$$$$_handleHeaderFetchSuccess$$($headerRange$$8$$, $callbacks$$45$$, $callbackObjects$$17$$) {
    var $axis$$24$$, $start$$30$$, $count$$32_end$$9$$, $headerSet$$3$$;
    $axis$$24$$ = $headerRange$$8$$.axis;
    $start$$30$$ = $headerRange$$8$$.start;
    $count$$32_end$$9$$ = $headerRange$$8$$.count;
    $oj$$17$$.$Assert$.assert("row" === $axis$$24$$ || "column" === $axis$$24$$);
    $oj$$17$$.$Assert$.assert(0 < $count$$32_end$$9$$);
    "column" === $axis$$24$$ ? null != this.columns ? ($count$$32_end$$9$$ = Math.min(this.columns.length, $start$$30$$ + $count$$32_end$$9$$), $headerSet$$3$$ = new $oj$$17$$.$CollectionHeaderSet$($start$$30$$, $count$$32_end$$9$$, this.columns)) : $headerSet$$3$$ = new $oj$$17$$.$ArrayHeaderSet$($start$$30$$, $start$$30$$, $axis$$24$$, null) : "row" === $axis$$24$$ && (null != this.$rowHeader$ ? ($count$$32_end$$9$$ = Math.min(this.size(), $start$$30$$ + $count$$32_end$$9$$), 0 < this.$_pageSize$ && 
    ($count$$32_end$$9$$ = Math.min($count$$32_end$$9$$, this.$_startIndex$ + this.$_pageSize$), $count$$32_end$$9$$ = Math.min($count$$32_end$$9$$, this.totalSize() - this.$_startIndex$)), $headerSet$$3$$ = new $oj$$17$$.$CollectionHeaderSet$($start$$30$$, $count$$32_end$$9$$, this.columns, this.$collection$, this.$rowHeader$)) : $headerSet$$3$$ = new $oj$$17$$.$ArrayHeaderSet$($start$$30$$, $start$$30$$, $axis$$24$$, null));
    null != $callbacks$$45$$ && $callbacks$$45$$.success && $callbacks$$45$$.success.call($callbackObjects$$17$$.success, $headerSet$$3$$, $headerRange$$8$$);
    this.$pendingHeaderCallback$[$axis$$24$$] = null
  };
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$_getRanges$ = function $$oj$$17$$$$CollectionDataGridDataSource$$$$_getRanges$$($cellRanges$$4$$) {
    var $i$$199$$, $cellRange$$4$$, $rowStart$$4$$, $rowCount$$3$$, $colStart$$1$$, $colCount$$;
    for($i$$199$$ = 0;$i$$199$$ < $cellRanges$$4$$.length;$i$$199$$ += 1) {
      $cellRange$$4$$ = $cellRanges$$4$$[$i$$199$$], $oj$$17$$.$Assert$.assert("row" === $cellRange$$4$$.axis || "column" === $cellRange$$4$$.axis), $oj$$17$$.$Assert$.assert(0 < $cellRange$$4$$.count), "row" === $cellRange$$4$$.axis ? ($rowStart$$4$$ = $cellRange$$4$$.start, $rowCount$$3$$ = $cellRange$$4$$.count) : "column" === $cellRange$$4$$.axis && ($colStart$$1$$ = $cellRange$$4$$.start, $colCount$$ = $cellRange$$4$$.count)
    }
    return{rowStart:$rowStart$$4$$, rowCount:$rowCount$$3$$, colStart:$colStart$$1$$, colCount:$colCount$$}
  };
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$_handleCellFetchSuccess$ = function $$oj$$17$$$$CollectionDataGridDataSource$$$$_handleCellFetchSuccess$$($cellRanges$$5$$, $callbacks$$46$$, $callbackObjects$$18$$) {
    var $colEnd$$1_ranges$$1$$, $cellSet$$3_rowStart$$5$$, $rowEnd$$1$$, $colStart$$2$$;
    $colEnd$$1_ranges$$1$$ = this.$_getRanges$($cellRanges$$5$$);
    $cellSet$$3_rowStart$$5$$ = $colEnd$$1_ranges$$1$$.rowStart;
    $rowEnd$$1$$ = Math.min(this.size(), $cellSet$$3_rowStart$$5$$ + $colEnd$$1_ranges$$1$$.rowCount);
    $colStart$$2$$ = $colEnd$$1_ranges$$1$$.colStart;
    $colEnd$$1_ranges$$1$$ = Math.min(this.columns.length, $colStart$$2$$ + $colEnd$$1_ranges$$1$$.colCount);
    $cellSet$$3_rowStart$$5$$ = new $oj$$17$$.$CollectionCellSet$($cellSet$$3_rowStart$$5$$, $rowEnd$$1$$, $colStart$$2$$, $colEnd$$1_ranges$$1$$, this.$collection$, this.columns);
    null != $callbacks$$46$$ && null != $callbacks$$46$$.success && (null != $callbacks$$46$$ && null == $callbackObjects$$18$$ && ($callbackObjects$$18$$ = {}), $callbacks$$46$$.success.call($callbackObjects$$18$$.success, $cellSet$$3_rowStart$$5$$, $cellRanges$$5$$), this.$_fetchCalls$ = 0);
    this.$pendingCellCallback$ = null
  };
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$17$$$$CollectionDataGridDataSource$$$$fetchCells$$($cellRanges$$6$$, $callbacks$$47$$, $callbackObjects$$19$$) {
    this.$_isDataAvailable$() ? this.$_handleCellFetchSuccess$($cellRanges$$6$$, $callbacks$$47$$, $callbackObjects$$19$$) : (null != $callbacks$$47$$ && null == this.$pendingCellCallback$ && (this.$pendingCellCallback$ = {}, this.$pendingCellCallback$.$cellRanges$ = $cellRanges$$6$$, this.$pendingCellCallback$.callbacks = $callbacks$$47$$, this.$pendingCellCallback$.$callbackObjects$ = $callbackObjects$$19$$), this.$_fetchCells$($cellRanges$$6$$))
  };
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$17$$.$CollectionDataGridDataSource$.prototype.$fetchCells$});
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$_processPendingHeaderCallbacks$ = function $$oj$$17$$$$CollectionDataGridDataSource$$$$_processPendingHeaderCallbacks$$($axis$$25_headerRange$$9$$) {
    var $callbackObjects$$20_pendingCallback$$, $callbacks$$48$$;
    $callbackObjects$$20_pendingCallback$$ = this.$pendingHeaderCallback$[$axis$$25_headerRange$$9$$];
    null != $callbackObjects$$20_pendingCallback$$ && ($axis$$25_headerRange$$9$$ = $callbackObjects$$20_pendingCallback$$.$headerRange$, $callbacks$$48$$ = $callbackObjects$$20_pendingCallback$$.callbacks, $callbackObjects$$20_pendingCallback$$ = $callbackObjects$$20_pendingCallback$$.$callbackObjects$, this.$_handleHeaderFetchSuccess$($axis$$25_headerRange$$9$$, $callbacks$$48$$, $callbackObjects$$20_pendingCallback$$))
  };
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$_processPendingCellCallbacks$ = function $$oj$$17$$$$CollectionDataGridDataSource$$$$_processPendingCellCallbacks$$() {
    this.$_handleCellFetchSuccess$(this.$pendingCellCallback$.$cellRanges$, this.$pendingCellCallback$.callbacks, this.$pendingCellCallback$.$callbackObjects$)
  };
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$_fetchCells$ = function $$oj$$17$$$$CollectionDataGridDataSource$$$$_fetchCells$$($cellRanges$$8_ranges$$3$$) {
    var $rowStart$$7$$;
    $cellRanges$$8_ranges$$3$$ = this.$_getRanges$($cellRanges$$8_ranges$$3$$);
    $rowStart$$7$$ = $cellRanges$$8_ranges$$3$$.rowStart;
    this.$collection$.$setRangeLocal$($rowStart$$7$$, $cellRanges$$8_ranges$$3$$.rowCount).done(function() {
      var $first$$3$$ = this.$collection$.at($rowStart$$7$$, {deferred:!0});
      null != $first$$3$$ && void 0 === this.columns && $first$$3$$.done(function($model$$66$$) {
        this.columns = $model$$66$$.keys();
        -1 != this.columns.indexOf(this.$rowHeader$) && this.columns.splice(this.columns.indexOf(this.$rowHeader$), 1)
      }.bind(this));
      null != this.$pendingHeaderCallback$ && (this.$_processPendingHeaderCallbacks$("column"), this.$_processPendingHeaderCallbacks$("row"));
      null != this.$pendingCellCallback$ && this.$_processPendingCellCallbacks$()
    }.bind(this))
  };
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.keys = function $$oj$$17$$$$CollectionDataGridDataSource$$$keys$($indexes$$12$$) {
    var $rowIndex$$6$$ = $indexes$$12$$.row;
    return{row:void 0 === this.$collection$.models[$rowIndex$$6$$] ? void 0 : this.$collection$.models[$rowIndex$$6$$].cid, column:this.columns[$indexes$$12$$.column]}
  };
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.keys", {keys:$oj$$17$$.$CollectionDataGridDataSource$.prototype.keys});
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$indexes$ = function $$oj$$17$$$$CollectionDataGridDataSource$$$$indexes$$($keys$$14$$) {
    var $columnKey$$3$$ = $keys$$14$$.column;
    return{row:this.$collection$.models.indexOf(this.$collection$.$getByCid$($keys$$14$$.row)), column:void 0 === this.columns ? this.$collection$.first().keys().indexOf($columnKey$$3$$) : this.columns.indexOf($columnKey$$3$$)}
  };
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.indexes", {$indexes$:$oj$$17$$.$CollectionDataGridDataSource$.prototype.$indexes$});
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$getCapability$ = function $$oj$$17$$$$CollectionDataGridDataSource$$$$getCapability$$($feature$$11$$) {
    return"sort" === $feature$$11$$ ? "column" : "move" === $feature$$11$$ ? "row" : null
  };
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCapability", {$getCapability$:$oj$$17$$.$CollectionDataGridDataSource$.prototype.$getCapability$});
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.sort = function $$oj$$17$$$$CollectionDataGridDataSource$$$sort$($axis$$26_criteria$$8$$, $callbacks$$50$$, $callbackObjects$$22$$) {
    var $comparator$$18$$, $direction$$7$$ = $axis$$26_criteria$$8$$.direction, $header$$6$$ = $axis$$26_criteria$$8$$.key;
    $axis$$26_criteria$$8$$ = $axis$$26_criteria$$8$$.axis;
    null == $callbackObjects$$22$$ && ($callbackObjects$$22$$ = {});
    "column" === $axis$$26_criteria$$8$$ ? ("ascending" === $direction$$7$$ && ($comparator$$18$$ = function $$comparator$$18$$$($a$$56$$, $b$$42$$) {
      var $as$$2$$, $bs$$2$$;
      $a$$56$$ = $a$$56$$.get($header$$6$$);
      $b$$42$$ = $b$$42$$.get($header$$6$$);
      $as$$2$$ = isNaN($a$$56$$);
      $bs$$2$$ = isNaN($b$$42$$);
      $a$$56$$ instanceof Date && ($a$$56$$ = $a$$56$$.toISOString(), $as$$2$$ = !0);
      $b$$42$$ instanceof Date && ($b$$42$$ = $b$$42$$.toISOString(), $bs$$2$$ = !0);
      return $as$$2$$ && $bs$$2$$ ? $a$$56$$ < $b$$42$$ ? -1 : $a$$56$$ === $b$$42$$ ? 0 : 1 : $as$$2$$ ? 1 : $bs$$2$$ ? -1 : $a$$56$$ - $b$$42$$
    }), "descending" === $direction$$7$$ && ($comparator$$18$$ = function $$comparator$$18$$$($a$$57$$, $b$$43$$) {
      var $as$$3$$, $bs$$3$$;
      $a$$57$$ = $a$$57$$.get($header$$6$$);
      $b$$43$$ = $b$$43$$.get($header$$6$$);
      $as$$3$$ = isNaN($a$$57$$);
      $bs$$3$$ = isNaN($b$$43$$);
      $a$$57$$ instanceof Date && ($a$$57$$ = $a$$57$$.toISOString());
      $b$$43$$ instanceof Date && ($b$$43$$ = $b$$43$$.toISOString());
      return $as$$3$$ && $bs$$3$$ ? $a$$57$$ > $b$$43$$ ? -1 : $a$$57$$ === $b$$43$$ ? 0 : 1 : $as$$3$$ ? -1 : $bs$$3$$ ? 1 : $b$$43$$ - $a$$57$$
    }), void 0 !== $comparator$$18$$ ? (this.$collection$.comparator = $comparator$$18$$, this.$collection$.sort(), null != $callbacks$$50$$ && null != $callbacks$$50$$.success && $callbacks$$50$$.success.call($callbackObjects$$22$$.success)) : null != $callbacks$$50$$ && null != $callbacks$$50$$.error && $callbacks$$50$$.error.call($callbackObjects$$22$$.error, "Direction value was invalid")) : null != $callbacks$$50$$ && null != $callbacks$$50$$.error && $callbacks$$50$$.error.call($callbackObjects$$22$$.error, 
    "Axis value not supported")
  };
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.sort", {sort:$oj$$17$$.$CollectionDataGridDataSource$.prototype.sort});
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.move = function $$oj$$17$$$$CollectionDataGridDataSource$$$move$($moveKey$$2$$, $atKey$$2$$) {
    var $model$$67$$, $newIndex$$;
    $model$$67$$ = this.$collection$.$getByCid$($moveKey$$2$$);
    null === $atKey$$2$$ ? (this.$collection$.remove($model$$67$$), this.$collection$.add($model$$67$$)) : ($moveKey$$2$$ === $atKey$$2$$ ? ($newIndex$$ = this.$collection$.indexOf(this.$collection$.$getByCid$($atKey$$2$$)), this.$collection$.remove($model$$67$$)) : (this.$collection$.remove($model$$67$$), $newIndex$$ = this.$collection$.indexOf(this.$collection$.$getByCid$($atKey$$2$$))), this.$collection$.add($model$$67$$, {at:$newIndex$$}))
  };
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.move", {move:$oj$$17$$.$CollectionDataGridDataSource$.prototype.move});
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$_getModelEvent$ = function $$oj$$17$$$$CollectionDataGridDataSource$$$$_getModelEvent$$($operation$$6$$, $rowKey$$24$$) {
    var $event$$140$$ = {source:this};
    $event$$140$$.operation = $operation$$6$$;
    $event$$140$$.keys = {row:$rowKey$$24$$, column:null};
    return $event$$140$$
  };
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$_handleModelAdded$ = function $$oj$$17$$$$CollectionDataGridDataSource$$$$_handleModelAdded$$($event$$141_model$$68_rowKey$$25$$) {
    !1 === this.$syncing$ && !1 === this.$initialSync$ && ($event$$141_model$$68_rowKey$$25$$ = $event$$141_model$$68_rowKey$$25$$.$GetCid$(), $event$$141_model$$68_rowKey$$25$$ = this.$_getModelEvent$("insert", $event$$141_model$$68_rowKey$$25$$), this.handleEvent("change", $event$$141_model$$68_rowKey$$25$$))
  };
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$_handleModelDeleted$ = function $$oj$$17$$$$CollectionDataGridDataSource$$$$_handleModelDeleted$$($event$$142_model$$69_rowKey$$26$$) {
    !1 === this.$syncing$ && !1 === this.$initialSync$ && ($event$$142_model$$69_rowKey$$26$$ = $event$$142_model$$69_rowKey$$26$$.$GetCid$(), $event$$142_model$$69_rowKey$$26$$ = this.$_getModelEvent$("delete", $event$$142_model$$69_rowKey$$26$$), this.handleEvent("change", $event$$142_model$$69_rowKey$$26$$))
  };
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$_handleModelChanged$ = function $$oj$$17$$$$CollectionDataGridDataSource$$$$_handleModelChanged$$($event$$143_model$$70_rowKey$$27$$) {
    !1 === this.$syncing$ && !1 === this.$initialSync$ && ($event$$143_model$$70_rowKey$$27$$ = $event$$143_model$$70_rowKey$$27$$.$GetCid$(), $event$$143_model$$70_rowKey$$27$$ = this.$_getModelEvent$("update", $event$$143_model$$70_rowKey$$27$$), this.handleEvent("change", $event$$143_model$$70_rowKey$$27$$))
  };
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$_handleSync$ = function $$oj$$17$$$$CollectionDataGridDataSource$$$$_handleSync$$() {
    0 < this.$_pageSize$ && (this.$pendingHeaderCallback$ = {}, this.$pendingCellCallback$ = null, this.handleEvent("change", {operation:"sync", pageSize:this.$_pageSize$, rowIndex:this.$_startIndex$}))
  };
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$setPageSize$ = $JSCompiler_set$$("$_pageSize$");
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.setPageSize", {$setPageSize$:$oj$$17$$.$CollectionDataGridDataSource$.prototype.$setPageSize$});
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.size = function $$oj$$17$$$$CollectionDataGridDataSource$$$size$() {
    return 0 === this.$collection$.length ? -1 : null != this.$_pageSize$ && 0 < this.$_pageSize$ && this.$collection$.size() > this.$_pageSize$ ? this.$_pageSize$ : this.$collection$.size()
  };
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.size", {size:$oj$$17$$.$CollectionDataGridDataSource$.prototype.size});
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.totalSize = function $$oj$$17$$$$CollectionDataGridDataSource$$$totalSize$() {
    return null != this.$collection$ && 0 > this.$_totalSize$ ? this.$collection$.totalResults : this.$_totalSize$
  };
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.totalSize", {totalSize:$oj$$17$$.$CollectionDataGridDataSource$.prototype.totalSize});
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.hasMore = function $$oj$$17$$$$CollectionDataGridDataSource$$$hasMore$() {
    return null != this.$collection$ ? this.$collection$.hasMore : !1
  };
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.hasMore", {hasMore:$oj$$17$$.$CollectionDataGridDataSource$.prototype.hasMore});
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.fetch = function $$oj$$17$$$$CollectionDataGridDataSource$$$fetch$($options$$273$$) {
    this.$syncing$ = !0;
    this.$_startIndex$ = null != $options$$273$$ ? null != $options$$273$$.startIndex ? $options$$273$$.startIndex : 0 : 0;
    this.$collection$.fetch({success:this.$_handleCollectionFetched$.bind(this, !1), startIndex:this.$_startIndex$})
  };
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.fetch", {fetch:$oj$$17$$.$CollectionDataGridDataSource$.prototype.fetch});
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$getCollection$ = $JSCompiler_get$$("$collection$");
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCollection", {$getCollection$:$oj$$17$$.$CollectionDataGridDataSource$.prototype.$getCollection$});
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$getColumns$ = $JSCompiler_get$$("columns");
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getColumns", {$getColumns$:$oj$$17$$.$CollectionDataGridDataSource$.prototype.$getColumns$});
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$getRowHeader$ = $JSCompiler_get$$("$rowHeader$");
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getRowHeader", {$getRowHeader$:$oj$$17$$.$CollectionDataGridDataSource$.prototype.$getRowHeader$});
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$getStartIndex$ = $JSCompiler_get$$("$_startIndex$");
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getStartIndex", {$getStartIndex$:$oj$$17$$.$CollectionDataGridDataSource$.prototype.$getStartIndex$});
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$getPageSize$ = $JSCompiler_get$$("$_pageSize$");
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getPageSize", {$getPageSize$:$oj$$17$$.$CollectionDataGridDataSource$.prototype.$getPageSize$});
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$getTotalSize$ = $JSCompiler_get$$("$_totalSize$");
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getTotalSize", {$getTotalSize$:$oj$$17$$.$CollectionDataGridDataSource$.prototype.$getTotalSize$});
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.$getFetchCalls$ = $JSCompiler_get$$("$_fetchCalls$");
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getFetchCalls", {$getFetchCalls$:$oj$$17$$.$CollectionDataGridDataSource$.prototype.$getFetchCalls$});
  $oj$$17$$.$CollectionDataGridDataSource$.prototype.getData = $JSCompiler_get$$("data");
  $oj$$17$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getData", {getData:$oj$$17$$.$CollectionDataGridDataSource$.prototype.getData})
});
