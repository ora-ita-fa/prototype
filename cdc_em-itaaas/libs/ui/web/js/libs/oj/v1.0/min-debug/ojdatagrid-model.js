define(["ojs/ojcore", "jquery", "ojs/ojdatacollection-common", "ojs/ojmodel"], function($oj$$30$$) {
  $oj$$30$$.$CollectionCellSet$ = function $$oj$$30$$$$CollectionCellSet$$($startRow$$2$$, $endRow$$2$$, $startColumn$$2$$, $endColumn$$2$$, $collection$$46$$, $columns$$15$$, $offset$$25$$) {
    $oj$$30$$.$Assert$.$assertNumber$($startRow$$2$$, null);
    $oj$$30$$.$Assert$.$assertNumber$($endRow$$2$$, null);
    $oj$$30$$.$Assert$.$assertNumber$($startColumn$$2$$, null);
    $oj$$30$$.$Assert$.$assertNumber$($endColumn$$2$$, null);
    $oj$$30$$.$Assert$.$assertArrayOrNull$($columns$$15$$);
    this.$m_startRow$ = $startRow$$2$$;
    this.$m_endRow$ = $endRow$$2$$;
    this.$m_startColumn$ = $startColumn$$2$$;
    this.$m_endColumn$ = $endColumn$$2$$;
    this.$m_collection$ = $collection$$46$$;
    this.$m_columns$ = $columns$$15$$;
    this.$m_offset$ = $offset$$25$$
  };
  $goog$exportPath_$$("CollectionCellSet", $oj$$30$$.$CollectionCellSet$, $oj$$30$$);
  $oj$$30$$.$CollectionCellSet$.prototype.getData = function $$oj$$30$$$$CollectionCellSet$$$getData$($column$$21_indexes$$9$$) {
    var $self$$96$$ = this;
    this.$_getModel$($column$$21_indexes$$9$$);
    this.$_getModel$($column$$21_indexes$$9$$).done(function($model$$57$$) {
      $self$$96$$.$model$ = $model$$57$$
    });
    if(null == $self$$96$$.$model$) {
      return null
    }
    $column$$21_indexes$$9$$ = $column$$21_indexes$$9$$.column;
    $oj$$30$$.$Assert$.assert($column$$21_indexes$$9$$ >= this.$m_startColumn$ && $column$$21_indexes$$9$$ <= this.$m_endColumn$);
    return $self$$96$$.$model$.get(this.$m_columns$[$column$$21_indexes$$9$$])
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getData", {getData:$oj$$30$$.$CollectionCellSet$.prototype.getData});
  $oj$$30$$.$CollectionCellSet$.prototype.getMetadata = function $$oj$$30$$$$CollectionCellSet$$$getMetadata$($column$$22_indexes$$10$$) {
    var $self$$97$$ = this;
    this.$_getModel$($column$$22_indexes$$10$$);
    this.$_getModel$($column$$22_indexes$$10$$).done(function($model$$59$$) {
      $self$$97$$.$model$ = $model$$59$$
    });
    if(null == $self$$97$$.$model$) {
      return null
    }
    $column$$22_indexes$$10$$ = $column$$22_indexes$$10$$.column;
    $oj$$30$$.$Assert$.assert($column$$22_indexes$$10$$ >= this.$m_startColumn$ && $column$$22_indexes$$10$$ <= this.$m_endColumn$);
    return{keys:{row:$oj$$30$$.$CollectionDataGridUtils$.$_getModelKey$($self$$97$$.$model$), column:this.$m_columns$[$column$$22_indexes$$10$$]}}
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getMetadata", {getMetadata:$oj$$30$$.$CollectionCellSet$.prototype.getMetadata});
  $oj$$30$$.$CollectionCellSet$.prototype.$_getModel$ = function $$oj$$30$$$$CollectionCellSet$$$$_getModel$$($column$$23_indexes$$11$$) {
    var $row$$45$$;
    $oj$$30$$.$Assert$.$assertObject$($column$$23_indexes$$11$$);
    $row$$45$$ = $column$$23_indexes$$11$$.row;
    null != this.$m_offset$ && ($row$$45$$ += this.$m_offset$);
    $column$$23_indexes$$11$$ = $column$$23_indexes$$11$$.column;
    $oj$$30$$.$Assert$.assert($row$$45$$ >= this.$m_startRow$ && $row$$45$$ <= this.$m_endRow$ && $column$$23_indexes$$11$$ >= this.$m_startColumn$ && $column$$23_indexes$$11$$ <= this.$m_endColumn$);
    return this.$m_collection$.at($row$$45$$, {deferred:!0})
  };
  $oj$$30$$.$CollectionCellSet$.prototype.$getCount$ = function $$oj$$30$$$$CollectionCellSet$$$$getCount$$($axis$$21$$) {
    return"row" === $axis$$21$$ ? Math.max(0, this.$m_endRow$ - this.$m_startRow$) : "column" === $axis$$21$$ ? Math.max(0, this.$m_endColumn$ - this.$m_startColumn$) : 0
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getCount", {$getCount$:$oj$$30$$.$CollectionCellSet$.prototype.$getCount$});
  $oj$$30$$.$CollectionCellSet$.prototype.$getStartRow$ = $JSCompiler_get$$("$m_startRow$");
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getStartRow", {$getStartRow$:$oj$$30$$.$CollectionCellSet$.prototype.$getStartRow$});
  $oj$$30$$.$CollectionCellSet$.prototype.$getEndRow$ = $JSCompiler_get$$("$m_endRow$");
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getEndRow", {$getEndRow$:$oj$$30$$.$CollectionCellSet$.prototype.$getEndRow$});
  $oj$$30$$.$CollectionCellSet$.prototype.$getStartColumn$ = $JSCompiler_get$$("$m_startColumn$");
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getStartColumn", {$getStartColumn$:$oj$$30$$.$CollectionCellSet$.prototype.$getStartColumn$});
  $oj$$30$$.$CollectionCellSet$.prototype.$getEndColumn$ = $JSCompiler_get$$("$m_endColumn$");
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getEndColumn", {$getEndColumn$:$oj$$30$$.$CollectionCellSet$.prototype.$getEndColumn$});
  $oj$$30$$.$CollectionCellSet$.prototype.getCollection = $JSCompiler_get$$("$m_collection$");
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getCollection", {getCollection:$oj$$30$$.$CollectionCellSet$.prototype.getCollection});
  $oj$$30$$.$CollectionCellSet$.prototype.$getColumns$ = $JSCompiler_get$$("$m_columns$");
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getColumns", {$getColumns$:$oj$$30$$.$CollectionCellSet$.prototype.$getColumns$});
  $oj$$30$$.$CollectionDataGridUtils$ = $JSCompiler_emptyFn$$();
  $oj$$30$$.$CollectionDataGridUtils$.$_getModelKey$ = function $$oj$$30$$$$CollectionDataGridUtils$$$_getModelKey$$($model$$60$$) {
    var $key$$107$$;
    $key$$107$$ = $model$$60$$.$GetId$();
    null == $key$$107$$ && ($key$$107$$ = $model$$60$$.$GetCid$());
    return $key$$107$$
  };
  $oj$$30$$.$CollectionHeaderSet$ = function $$oj$$30$$$$CollectionHeaderSet$$($start$$31$$, $end$$8$$, $headers$$5$$, $collection$$47$$, $rowHeader$$3$$, $offset$$26$$) {
    $oj$$30$$.$Assert$.$assertNumber$($start$$31$$, null);
    $oj$$30$$.$Assert$.$assertNumber$($end$$8$$, null);
    $oj$$30$$.$Assert$.$assertArrayOrNull$($headers$$5$$);
    this.$m_start$ = $start$$31$$;
    this.$m_end$ = $end$$8$$;
    this.$m_headers$ = $headers$$5$$;
    this.$m_collection$ = $collection$$47$$;
    this.$m_rowHeader$ = $rowHeader$$3$$;
    this.$m_offset$ = $offset$$26$$
  };
  $goog$exportPath_$$("CollectionHeaderSet", $oj$$30$$.$CollectionHeaderSet$, $oj$$30$$);
  $oj$$30$$.$CollectionHeaderSet$.prototype.getData = function $$oj$$30$$$$CollectionHeaderSet$$$getData$($index$$176$$) {
    $oj$$30$$.$Assert$.assert($index$$176$$ <= this.$m_end$ && $index$$176$$ >= this.$m_start$);
    var $self$$98$$ = this;
    return null != this.$m_rowHeader$ && null != this.$m_collection$ ? (null != this.$m_offset$ && ($index$$176$$ += this.$m_offset$), this.$m_collection$.at($index$$176$$, {deferred:!0}).done(function($model$$61$$) {
      $self$$98$$.$model$ = $model$$61$$
    }), $self$$98$$.$model$.get(this.$m_rowHeader$)) : this.$m_headers$[$index$$176$$]
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getData", {getData:$oj$$30$$.$CollectionHeaderSet$.prototype.getData});
  $oj$$30$$.$CollectionHeaderSet$.prototype.getMetadata = function $$oj$$30$$$$CollectionHeaderSet$$$getMetadata$($index$$177$$) {
    var $self$$99$$;
    return null != this.$m_rowHeader$ && null != this.$m_collection$ ? ($self$$99$$ = this, null != this.$m_offset$ && ($index$$177$$ += this.$m_offset$), this.$m_collection$.at($index$$177$$, {deferred:!0}).done(function($model$$62$$) {
      $self$$99$$.$model$ = $model$$62$$
    }), null == $self$$99$$.$model$ ? null : {key:$oj$$30$$.$CollectionDataGridUtils$.$_getModelKey$($self$$99$$.$model$)}) : {key:this.getData($index$$177$$)}
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getMetadata", {getMetadata:$oj$$30$$.$CollectionHeaderSet$.prototype.getMetadata});
  $oj$$30$$.$CollectionHeaderSet$.prototype.$getCount$ = function $$oj$$30$$$$CollectionHeaderSet$$$$getCount$$() {
    return Math.max(0, this.$m_end$ - this.$m_start$)
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getCount", {$getCount$:$oj$$30$$.$CollectionHeaderSet$.prototype.$getCount$});
  $oj$$30$$.$CollectionHeaderSet$.prototype.$getStart$ = $JSCompiler_get$$("$m_start$");
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getStart", {$getStart$:$oj$$30$$.$CollectionHeaderSet$.prototype.$getStart$});
  $oj$$30$$.$CollectionHeaderSet$.prototype.$getEnd$ = $JSCompiler_get$$("$m_end$");
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getEnd", {$getEnd$:$oj$$30$$.$CollectionHeaderSet$.prototype.$getEnd$});
  $oj$$30$$.$CollectionHeaderSet$.prototype.$getHeaders$ = $JSCompiler_get$$("$m_headers$");
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getHeaders", {$getHeaders$:$oj$$30$$.$CollectionHeaderSet$.prototype.$getHeaders$});
  $oj$$30$$.$CollectionHeaderSet$.prototype.$getRowHeader$ = $JSCompiler_get$$("$m_rowHeader$");
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getRowHeader", {$getRowHeader$:$oj$$30$$.$CollectionHeaderSet$.prototype.$getRowHeader$});
  $oj$$30$$.$CollectionHeaderSet$.prototype.getCollection = $JSCompiler_get$$("$m_collection$");
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getCollection", {getCollection:$oj$$30$$.$CollectionHeaderSet$.prototype.getCollection});
  $oj$$30$$.$CollectionDataGridDataSource$ = function $$oj$$30$$$$CollectionDataGridDataSource$$($collection$$48$$, $options$$286$$) {
    this.$collection$ = $collection$$48$$;
    null != $options$$286$$ && (this.$rowHeader$ = $options$$286$$.rowHeader, this.columns = $options$$286$$.columns);
    this.$_startIndex$ = 0;
    this.$_totalSize$ = this.$_pageSize$ = -1;
    $oj$$30$$.$CollectionDataGridDataSource$.$superclass$.constructor.call(this)
  };
  $goog$exportPath_$$("CollectionDataGridDataSource", $oj$$30$$.$CollectionDataGridDataSource$, $oj$$30$$);
  $oj$$30$$.$Object$.$createSubclass$($oj$$30$$.$CollectionDataGridDataSource$, $oj$$30$$.$DataGridDataSource$, "oj.CollectionDataGridDataSource");
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.Init = function $$oj$$30$$$$CollectionDataGridDataSource$$$Init$() {
    $oj$$30$$.$CollectionDataGridDataSource$.$superclass$.Init.call(this);
    this.$pendingHeaderCallback$ = {};
    !this.$_isRemote$() && (null == this.columns && 0 < this.$collection$.length) && (this.columns = this.$collection$.first().keys(), -1 != this.columns.indexOf(this.$rowHeader$) && this.columns.splice(this.columns.indexOf(this.$rowHeader$), 1));
    this.$_registerEventListeners$()
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.Init", {Init:$oj$$30$$.$CollectionDataGridDataSource$.prototype.Init});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_registerEventListeners$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_registerEventListeners$$() {
    this.$collection$.on("add", this.$_handleModelAdded$.bind(this));
    this.$collection$.on("remove", this.$_handleModelDeleted$.bind(this));
    this.$collection$.on("change", this.$_handleModelChanged$.bind(this));
    this.$collection$.on("refresh", this.$_handleCollectionRefresh$.bind(this))
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_isRemote$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_isRemote$$() {
    return null != this.$collection$.url
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_isDataAvailable$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_isDataAvailable$$() {
    return this.$_isRemote$() ? null != this.data : !0
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_isHeaderAvailable$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_isHeaderAvailable$$($axis$$22$$) {
    if(this.$_isRemote$()) {
      if("column" === $axis$$22$$) {
        return null != this.columns
      }
      if("row" === $axis$$22$$ && null != this.$rowHeader$) {
        return null != this.data
      }
    }
    return!0
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$getCount$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$getCount$$($axis$$23$$) {
    if(!this.$_isHeaderAvailable$($axis$$23$$)) {
      return this.precision = "estimate", -1
    }
    this.precision = "exact";
    return"row" == $axis$$23$$ ? this.size() : "column" == $axis$$23$$ ? this.columns.length : 0
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCount", {$getCount$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$getCount$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$getCountPrecision$$($axis$$24$$) {
    null == this.precision && this.$getCount$($axis$$24$$);
    return this.precision
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$fetchHeaders$$($headerRange$$7$$, $callbacks$$44$$, $callbackObjects$$16$$) {
    var $axis$$25$$, $callback$$101$$;
    $axis$$25$$ = $headerRange$$7$$.axis;
    this.$_isHeaderAvailable$($axis$$25$$) ? this.$_handleHeaderFetchSuccess$($headerRange$$7$$, $callbacks$$44$$, $callbackObjects$$16$$) : null != $callbacks$$44$$ && ($callback$$101$$ = {}, $callback$$101$$.$headerRange$ = $headerRange$$7$$, $callback$$101$$.callbacks = $callbacks$$44$$, $callback$$101$$.$callbackObjects$ = $callbackObjects$$16$$, this.$pendingHeaderCallback$[$axis$$25$$] = $callback$$101$$)
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_handleHeaderFetchSuccess$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_handleHeaderFetchSuccess$$($headerRange$$8$$, $callbacks$$45$$, $callbackObjects$$17$$) {
    var $axis$$26$$, $start$$32$$, $count$$32_end$$9$$, $headerSet$$3$$;
    $axis$$26$$ = $headerRange$$8$$.axis;
    $start$$32$$ = $headerRange$$8$$.start;
    $count$$32_end$$9$$ = $headerRange$$8$$.count;
    $oj$$30$$.$Assert$.assert("row" === $axis$$26$$ || "column" === $axis$$26$$);
    $oj$$30$$.$Assert$.assert(0 < $count$$32_end$$9$$);
    "column" === $axis$$26$$ ? null != this.columns ? ($count$$32_end$$9$$ = Math.min(this.columns.length, $start$$32$$ + $count$$32_end$$9$$), $headerSet$$3$$ = new $oj$$30$$.$CollectionHeaderSet$($start$$32$$, $count$$32_end$$9$$, this.columns)) : $headerSet$$3$$ = new $oj$$30$$.$ArrayHeaderSet$($start$$32$$, $start$$32$$, $axis$$26$$, null) : "row" === $axis$$26$$ && (null != this.$rowHeader$ ? ($count$$32_end$$9$$ = Math.min(this.size(), $start$$32$$ + $count$$32_end$$9$$), 0 < this.$_pageSize$ ? 
    ($count$$32_end$$9$$ = Math.min($count$$32_end$$9$$, this.$_startIndex$ + this.$_pageSize$), $count$$32_end$$9$$ = Math.min($count$$32_end$$9$$, this.totalSize() - this.$_startIndex$), $headerSet$$3$$ = new $oj$$30$$.$CollectionHeaderSet$($start$$32$$, $count$$32_end$$9$$, this.columns, this.$collection$, this.$rowHeader$, this.$_startIndex$)) : $headerSet$$3$$ = new $oj$$30$$.$CollectionHeaderSet$($start$$32$$, $count$$32_end$$9$$, this.columns, this.$collection$, this.$rowHeader$)) : $headerSet$$3$$ = 
    new $oj$$30$$.$ArrayHeaderSet$($start$$32$$, $start$$32$$, $axis$$26$$, null));
    null != $callbacks$$45$$ && $callbacks$$45$$.success && $callbacks$$45$$.success.call($callbackObjects$$17$$.success, $headerSet$$3$$, $headerRange$$8$$);
    this.$pendingHeaderCallback$[$axis$$26$$] = null
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_getRanges$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_getRanges$$($cellRanges$$4$$) {
    var $i$$261$$, $cellRange$$4$$, $rowStart$$4$$, $rowCount$$3$$, $colStart$$1$$, $colCount$$;
    for($i$$261$$ = 0;$i$$261$$ < $cellRanges$$4$$.length;$i$$261$$ += 1) {
      $cellRange$$4$$ = $cellRanges$$4$$[$i$$261$$], $oj$$30$$.$Assert$.assert("row" === $cellRange$$4$$.axis || "column" === $cellRange$$4$$.axis), $oj$$30$$.$Assert$.assert(0 < $cellRange$$4$$.count), "row" === $cellRange$$4$$.axis ? ($rowStart$$4$$ = $cellRange$$4$$.start, $rowCount$$3$$ = $cellRange$$4$$.count) : "column" === $cellRange$$4$$.axis && ($colStart$$1$$ = $cellRange$$4$$.start, $colCount$$ = $cellRange$$4$$.count)
    }
    return{rowStart:$rowStart$$4$$, rowCount:$rowCount$$3$$, colStart:$colStart$$1$$, colCount:$colCount$$}
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_handleCellFetchSuccess$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_handleCellFetchSuccess$$($cellRanges$$5$$, $callbacks$$46$$, $callbackObjects$$18$$) {
    var $colEnd$$1_ranges$$1$$, $cellSet$$3_rowStart$$5$$, $rowEnd$$1$$, $colStart$$2$$;
    $colEnd$$1_ranges$$1$$ = this.$_getRanges$($cellRanges$$5$$);
    $cellSet$$3_rowStart$$5$$ = $colEnd$$1_ranges$$1$$.rowStart;
    $rowEnd$$1$$ = Math.min(this.size(), $cellSet$$3_rowStart$$5$$ + $colEnd$$1_ranges$$1$$.rowCount);
    $colStart$$2$$ = $colEnd$$1_ranges$$1$$.colStart;
    $colEnd$$1_ranges$$1$$ = Math.min(this.columns.length, $colStart$$2$$ + $colEnd$$1_ranges$$1$$.colCount);
    0 < this.$_pageSize$ ? ($rowEnd$$1$$ = Math.min(this.$_pageSize$, this.totalSize() - this.$_startIndex$), $cellSet$$3_rowStart$$5$$ = new $oj$$30$$.$CollectionCellSet$($cellSet$$3_rowStart$$5$$, $rowEnd$$1$$, $colStart$$2$$, $colEnd$$1_ranges$$1$$, this.$collection$, this.columns, this.$_startIndex$)) : $cellSet$$3_rowStart$$5$$ = new $oj$$30$$.$CollectionCellSet$($cellSet$$3_rowStart$$5$$, $rowEnd$$1$$, $colStart$$2$$, $colEnd$$1_ranges$$1$$, this.$collection$, this.columns);
    null != $callbacks$$46$$ && null != $callbacks$$46$$.success && (null != $callbacks$$46$$ && null == $callbackObjects$$18$$ && ($callbackObjects$$18$$ = {}), $callbacks$$46$$.success.call($callbackObjects$$18$$.success, $cellSet$$3_rowStart$$5$$, $cellRanges$$5$$), this.$_fetchCalls$ = 0);
    this.$pendingCellCallback$ = null
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$fetchCells$$($cellRanges$$6$$, $callbacks$$47$$, $callbackObjects$$19$$) {
    this.$_isDataAvailable$() ? this.$_handleCellFetchSuccess$($cellRanges$$6$$, $callbacks$$47$$, $callbackObjects$$19$$) : (null != $callbacks$$47$$ && (this.$pendingCellCallback$ = {}, this.$pendingCellCallback$.$cellRanges$ = $cellRanges$$6$$, this.$pendingCellCallback$.callbacks = $callbacks$$47$$, this.$pendingCellCallback$.$callbackObjects$ = $callbackObjects$$19$$), this.$_fetchCells$($cellRanges$$6$$))
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$fetchCells$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_processPendingHeaderCallbacks$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_processPendingHeaderCallbacks$$($axis$$27_headerRange$$9$$) {
    var $callbackObjects$$20_pendingCallback$$, $callbacks$$48$$;
    $callbackObjects$$20_pendingCallback$$ = this.$pendingHeaderCallback$[$axis$$27_headerRange$$9$$];
    null != $callbackObjects$$20_pendingCallback$$ && ($axis$$27_headerRange$$9$$ = $callbackObjects$$20_pendingCallback$$.$headerRange$, $callbacks$$48$$ = $callbackObjects$$20_pendingCallback$$.callbacks, $callbackObjects$$20_pendingCallback$$ = $callbackObjects$$20_pendingCallback$$.$callbackObjects$, this.$_handleHeaderFetchSuccess$($axis$$27_headerRange$$9$$, $callbacks$$48$$, $callbackObjects$$20_pendingCallback$$))
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_processPendingCellCallbacks$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_processPendingCellCallbacks$$() {
    this.$_handleCellFetchSuccess$(this.$pendingCellCallback$.$cellRanges$, this.$pendingCellCallback$.callbacks, this.$pendingCellCallback$.$callbackObjects$)
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_fetchCells$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_fetchCells$$($cellRanges$$8_ranges$$2$$) {
    var $rowStart$$6$$;
    $cellRanges$$8_ranges$$2$$ = this.$_getRanges$($cellRanges$$8_ranges$$2$$);
    $rowStart$$6$$ = $cellRanges$$8_ranges$$2$$.rowStart;
    0 < this.$_pageSize$ && ($rowStart$$6$$ += this.$_startIndex$);
    this.$collection$.$setRangeLocal$($rowStart$$6$$, $cellRanges$$8_ranges$$2$$.rowCount).done(function() {
      var $first$$6$$ = this.$collection$.at($rowStart$$6$$, {deferred:!0});
      null != $first$$6$$ && void 0 === this.columns && $first$$6$$.done(function($model$$63$$) {
        this.columns = $model$$63$$.keys();
        -1 != this.columns.indexOf(this.$rowHeader$) && this.columns.splice(this.columns.indexOf(this.$rowHeader$), 1)
      }.bind(this));
      null != this.$pendingHeaderCallback$ && (this.$_processPendingHeaderCallbacks$("column"), this.$_processPendingHeaderCallbacks$("row"));
      null != this.$pendingCellCallback$ && this.$_processPendingCellCallbacks$();
      0 < this.$_pageSize$ && $oj$$30$$.$DataGridDataSource$.$superclass$.handleEvent.call(this, "sync", !0)
    }.bind(this))
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.keys = function $$oj$$30$$$$CollectionDataGridDataSource$$$keys$($indexes$$12$$) {
    var $rowIndex$$6$$ = $indexes$$12$$.row + this.$_startIndex$;
    return{row:void 0 === this.$collection$.models[$rowIndex$$6$$] ? void 0 : $oj$$30$$.$CollectionDataGridUtils$.$_getModelKey$(this.$collection$.models[$rowIndex$$6$$]), column:this.columns[$indexes$$12$$.column]}
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.keys", {keys:$oj$$30$$.$CollectionDataGridDataSource$.prototype.keys});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$indexes$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$indexes$$($keys$$13$$) {
    var $columnKey$$3$$ = $keys$$13$$.column;
    return{row:this.$collection$.models.indexOf(this.$collection$.get($keys$$13$$.row)), column:void 0 === this.columns ? this.$collection$.first().keys().indexOf($columnKey$$3$$) : this.columns.indexOf($columnKey$$3$$)}
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.indexes", {$indexes$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$indexes$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.getCapability = function $$oj$$30$$$$CollectionDataGridDataSource$$$getCapability$($feature$$14$$) {
    return"sort" === $feature$$14$$ ? "column" : "move" === $feature$$14$$ ? "row" : null
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCapability", {getCapability:$oj$$30$$.$CollectionDataGridDataSource$.prototype.getCapability});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.sort = function $$oj$$30$$$$CollectionDataGridDataSource$$$sort$($axis$$28_criteria$$12$$, $callbacks$$50$$, $callbackObjects$$22$$) {
    var $comparator$$16$$, $direction$$10$$ = $axis$$28_criteria$$12$$.direction, $key$$108$$ = $axis$$28_criteria$$12$$.key;
    $axis$$28_criteria$$12$$ = $axis$$28_criteria$$12$$.axis;
    null == $callbackObjects$$22$$ && ($callbackObjects$$22$$ = {});
    "column" === $axis$$28_criteria$$12$$ ? (-1 < this.$collection$.$fetchSize$ && this.$collection$.hasMore ? (this.$collection$.comparator = $key$$108$$, this.$collection$.sortDirection = "ascending" === $direction$$10$$ ? 1 : -1) : ("ascending" === $direction$$10$$ && ($comparator$$16$$ = function $$comparator$$16$$$($a$$66$$, $b$$45$$) {
      var $as$$2$$, $bs$$2$$;
      $a$$66$$ = $a$$66$$.get($key$$108$$);
      $b$$45$$ = $b$$45$$.get($key$$108$$);
      $as$$2$$ = isNaN($a$$66$$);
      $bs$$2$$ = isNaN($b$$45$$);
      $a$$66$$ instanceof Date && ($a$$66$$ = $a$$66$$.toISOString(), $as$$2$$ = !0);
      $b$$45$$ instanceof Date && ($b$$45$$ = $b$$45$$.toISOString(), $bs$$2$$ = !0);
      return $as$$2$$ && $bs$$2$$ ? $a$$66$$ < $b$$45$$ ? -1 : $a$$66$$ === $b$$45$$ ? 0 : 1 : $as$$2$$ ? 1 : $bs$$2$$ ? -1 : $a$$66$$ - $b$$45$$
    }), "descending" === $direction$$10$$ && ($comparator$$16$$ = function $$comparator$$16$$$($a$$67$$, $b$$46$$) {
      var $as$$3$$, $bs$$3$$;
      $a$$67$$ = $a$$67$$.get($key$$108$$);
      $b$$46$$ = $b$$46$$.get($key$$108$$);
      $as$$3$$ = isNaN($a$$67$$);
      $bs$$3$$ = isNaN($b$$46$$);
      $a$$67$$ instanceof Date && ($a$$67$$ = $a$$67$$.toISOString());
      $b$$46$$ instanceof Date && ($b$$46$$ = $b$$46$$.toISOString());
      return $as$$3$$ && $bs$$3$$ ? $a$$67$$ > $b$$46$$ ? -1 : $a$$67$$ === $b$$46$$ ? 0 : 1 : $as$$3$$ ? -1 : $bs$$3$$ ? 1 : $b$$46$$ - $a$$67$$
    }), this.$collection$.comparator = $comparator$$16$$), this.$collection$.sort(), null != $callbacks$$50$$ && null != $callbacks$$50$$.success && $callbacks$$50$$.success.call($callbackObjects$$22$$.success)) : null != $callbacks$$50$$ && null != $callbacks$$50$$.error && $callbacks$$50$$.error.call($callbackObjects$$22$$.error, "Axis value not supported")
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.sort", {sort:$oj$$30$$.$CollectionDataGridDataSource$.prototype.sort});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.move = function $$oj$$30$$$$CollectionDataGridDataSource$$$move$($moveKey$$2$$, $atKey$$2$$) {
    var $model$$64$$, $newIndex$$2$$;
    $model$$64$$ = this.$collection$.get($moveKey$$2$$);
    null === $atKey$$2$$ ? (this.$collection$.remove($model$$64$$), this.$collection$.add($model$$64$$)) : ($moveKey$$2$$ === $atKey$$2$$ ? ($newIndex$$2$$ = this.$collection$.indexOf(this.$collection$.get($atKey$$2$$)), this.$collection$.remove($model$$64$$)) : (this.$collection$.remove($model$$64$$), $newIndex$$2$$ = this.$collection$.indexOf(this.$collection$.get($atKey$$2$$))), this.$collection$.add($model$$64$$, {at:$newIndex$$2$$}))
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.move", {move:$oj$$30$$.$CollectionDataGridDataSource$.prototype.move});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_getModelEvent$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_getModelEvent$$($operation$$6$$, $rowKey$$22$$) {
    var $event$$314$$ = {source:this};
    $event$$314$$.operation = $operation$$6$$;
    $event$$314$$.keys = {row:$rowKey$$22$$, column:null};
    return $event$$314$$
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_handleModelAdded$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_handleModelAdded$$($model$$65$$) {
    this.handleEvent("change", this.$_getModelEvent$("insert", $oj$$30$$.$CollectionDataGridUtils$.$_getModelKey$($model$$65$$)))
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_handleModelDeleted$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_handleModelDeleted$$($model$$66$$) {
    this.handleEvent("change", this.$_getModelEvent$("delete", $oj$$30$$.$CollectionDataGridUtils$.$_getModelKey$($model$$66$$)))
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_handleModelChanged$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_handleModelChanged$$($model$$67$$) {
    this.handleEvent("change", this.$_getModelEvent$("update", $oj$$30$$.$CollectionDataGridUtils$.$_getModelKey$($model$$67$$)))
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_handleCollectionRefresh$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_handleCollectionRefresh$$() {
    this.handleEvent("change", this.$_getModelEvent$("refresh", null))
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.setPageSize = $JSCompiler_set$$("$_pageSize$");
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.setPageSize", {setPageSize:$oj$$30$$.$CollectionDataGridDataSource$.prototype.setPageSize});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.size = function $$oj$$30$$$$CollectionDataGridDataSource$$$size$() {
    return 0 === this.$collection$.length ? -1 : null != this.$_pageSize$ && 0 < this.$_pageSize$ && this.$collection$.size() > this.$_pageSize$ ? this.$_pageSize$ : this.$collection$.size()
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.size", {size:$oj$$30$$.$CollectionDataGridDataSource$.prototype.size});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.totalSize = function $$oj$$30$$$$CollectionDataGridDataSource$$$totalSize$() {
    return null != this.$collection$ && 0 > this.$_totalSize$ ? this.$collection$.length : this.$_totalSize$
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.totalSize", {totalSize:$oj$$30$$.$CollectionDataGridDataSource$.prototype.totalSize});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.hasMore = function $$oj$$30$$$$CollectionDataGridDataSource$$$hasMore$() {
    return null != this.$collection$ ? this.$collection$.hasMore : !1
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.hasMore", {hasMore:$oj$$30$$.$CollectionDataGridDataSource$.prototype.hasMore});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.fetch = function $$oj$$30$$$$CollectionDataGridDataSource$$$fetch$($options$$287$$) {
    this.$_startIndex$ = null != $options$$287$$ ? null != $options$$287$$.startIndex ? $options$$287$$.startIndex : 0 : 0;
    this.handleEvent("change", {operation:"sync", pageSize:this.$_pageSize$})
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.getCollection = $JSCompiler_get$$("$collection$");
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCollection", {getCollection:$oj$$30$$.$CollectionDataGridDataSource$.prototype.getCollection});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$getColumns$ = $JSCompiler_get$$("columns");
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getColumns", {$getColumns$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$getColumns$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$getRowHeader$ = $JSCompiler_get$$("$rowHeader$");
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getRowHeader", {$getRowHeader$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$getRowHeader$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$getStartIndex$ = $JSCompiler_get$$("$_startIndex$");
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getStartIndex", {$getStartIndex$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$getStartIndex$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$getPageSize$ = $JSCompiler_get$$("$_pageSize$");
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getPageSize", {$getPageSize$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$getPageSize$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$getTotalSize$ = $JSCompiler_get$$("$_totalSize$");
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getTotalSize", {$getTotalSize$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$getTotalSize$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$getFetchCalls$ = $JSCompiler_get$$("$_fetchCalls$");
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getFetchCalls", {$getFetchCalls$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$getFetchCalls$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.getData = $JSCompiler_get$$("data");
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getData", {getData:$oj$$30$$.$CollectionDataGridDataSource$.prototype.getData})
});
