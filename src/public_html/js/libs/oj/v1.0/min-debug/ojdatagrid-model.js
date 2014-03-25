define(["ojs/ojcore", "jquery", "ojs/ojdatacollection-common", "ojs/ojmodel"], function($oj$$16$$) {
  $oj$$16$$.$CollectionCellSet$ = function $$oj$$16$$$$CollectionCellSet$$($startRow$$2$$, $endRow$$2$$, $startColumn$$2$$, $endColumn$$2$$, $collection$$43$$, $columns$$14$$) {
    $oj$$16$$.$Assert$.$assertNumber$($startRow$$2$$, null);
    $oj$$16$$.$Assert$.$assertNumber$($endRow$$2$$, null);
    $oj$$16$$.$Assert$.$assertNumber$($startColumn$$2$$, null);
    $oj$$16$$.$Assert$.$assertNumber$($endColumn$$2$$, null);
    $oj$$16$$.$Assert$.$assertArrayOrNull$($columns$$14$$);
    this.$m_startRow$ = $startRow$$2$$;
    this.$m_endRow$ = $endRow$$2$$;
    this.$m_startColumn$ = $startColumn$$2$$;
    this.$m_endColumn$ = $endColumn$$2$$;
    this.$m_collection$ = $collection$$43$$;
    this.$m_columns$ = $columns$$14$$
  };
  $goog$exportPath_$$("CollectionCellSet", $oj$$16$$.$CollectionCellSet$, $oj$$16$$);
  $oj$$16$$.$CollectionCellSet$.prototype.getData = function $$oj$$16$$$$CollectionCellSet$$$getData$($column$$18_indexes$$9$$) {
    var $self$$53$$ = this;
    this.$_getModel$($column$$18_indexes$$9$$);
    this.$_getModel$($column$$18_indexes$$9$$).done(function($model$$56$$) {
      $self$$53$$.$model$ = $model$$56$$
    });
    if(null == $self$$53$$.$model$) {
      return null
    }
    $column$$18_indexes$$9$$ = $column$$18_indexes$$9$$.column;
    $oj$$16$$.$Assert$.assert($column$$18_indexes$$9$$ >= this.$m_startColumn$ && $column$$18_indexes$$9$$ <= this.$m_endColumn$);
    return $self$$53$$.$model$.get(this.$m_columns$[$column$$18_indexes$$9$$])
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getData", {getData:$oj$$16$$.$CollectionCellSet$.prototype.getData});
  $oj$$16$$.$CollectionCellSet$.prototype.getMetadata = function $$oj$$16$$$$CollectionCellSet$$$getMetadata$($column$$19_indexes$$10$$) {
    var $self$$54$$ = this;
    this.$_getModel$($column$$19_indexes$$10$$);
    this.$_getModel$($column$$19_indexes$$10$$).done(function($model$$58$$) {
      $self$$54$$.$model$ = $model$$58$$
    });
    if(null == $self$$54$$.$model$) {
      return null
    }
    $column$$19_indexes$$10$$ = $column$$19_indexes$$10$$.column;
    $oj$$16$$.$Assert$.assert($column$$19_indexes$$10$$ >= this.$m_startColumn$ && $column$$19_indexes$$10$$ <= this.$m_endColumn$);
    return{keys:{row:$self$$54$$.$model$.$GetCid$(), column:this.$m_columns$[$column$$19_indexes$$10$$]}}
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getMetadata", {getMetadata:$oj$$16$$.$CollectionCellSet$.prototype.getMetadata});
  $oj$$16$$.$CollectionCellSet$.prototype.$_getModel$ = function $$oj$$16$$$$CollectionCellSet$$$$_getModel$$($column$$20_indexes$$11$$) {
    var $row$$35$$;
    $oj$$16$$.$Assert$.$assertObject$($column$$20_indexes$$11$$);
    $row$$35$$ = $column$$20_indexes$$11$$.row;
    null != this.$m_collection$.offset && ($row$$35$$ += this.$m_collection$.offset);
    $column$$20_indexes$$11$$ = $column$$20_indexes$$11$$.column;
    $oj$$16$$.$Assert$.assert($row$$35$$ >= this.$m_startRow$ && $row$$35$$ <= this.$m_endRow$ && $column$$20_indexes$$11$$ >= this.$m_startColumn$ && $column$$20_indexes$$11$$ <= this.$m_endColumn$);
    return this.$m_collection$.at($row$$35$$, {deferred:!0})
  };
  $oj$$16$$.$CollectionCellSet$.prototype.$getCount$ = function $$oj$$16$$$$CollectionCellSet$$$$getCount$$($axis$$19$$) {
    return"row" === $axis$$19$$ ? Math.max(0, this.$m_endRow$ - this.$m_startRow$) : "column" === $axis$$19$$ ? Math.max(0, this.$m_endColumn$ - this.$m_startColumn$) : 0
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getCount", {$getCount$:$oj$$16$$.$CollectionCellSet$.prototype.$getCount$});
  $oj$$16$$.$CollectionCellSet$.prototype.$getStartRow$ = $JSCompiler_get$$("$m_startRow$");
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getStartRow", {$getStartRow$:$oj$$16$$.$CollectionCellSet$.prototype.$getStartRow$});
  $oj$$16$$.$CollectionCellSet$.prototype.$getEndRow$ = $JSCompiler_get$$("$m_endRow$");
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getEndRow", {$getEndRow$:$oj$$16$$.$CollectionCellSet$.prototype.$getEndRow$});
  $oj$$16$$.$CollectionCellSet$.prototype.$getStartColumn$ = $JSCompiler_get$$("$m_startColumn$");
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getStartColumn", {$getStartColumn$:$oj$$16$$.$CollectionCellSet$.prototype.$getStartColumn$});
  $oj$$16$$.$CollectionCellSet$.prototype.$getEndColumn$ = $JSCompiler_get$$("$m_endColumn$");
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getEndColumn", {$getEndColumn$:$oj$$16$$.$CollectionCellSet$.prototype.$getEndColumn$});
  $oj$$16$$.$CollectionCellSet$.prototype.$getCollection$ = $JSCompiler_get$$("$m_collection$");
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getCollection", {$getCollection$:$oj$$16$$.$CollectionCellSet$.prototype.$getCollection$});
  $oj$$16$$.$CollectionCellSet$.prototype.$getColumns$ = $JSCompiler_get$$("$m_columns$");
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getColumns", {$getColumns$:$oj$$16$$.$CollectionCellSet$.prototype.$getColumns$});
  $oj$$16$$.$CollectionHeaderSet$ = function $$oj$$16$$$$CollectionHeaderSet$$($start$$29$$, $end$$8$$, $headers$$5$$, $collection$$44$$, $rowHeader$$4$$) {
    $oj$$16$$.$Assert$.$assertNumber$($start$$29$$, null);
    $oj$$16$$.$Assert$.$assertNumber$($end$$8$$, null);
    $oj$$16$$.$Assert$.$assertArrayOrNull$($headers$$5$$);
    this.$m_start$ = $start$$29$$;
    this.$m_end$ = $end$$8$$;
    this.$m_headers$ = $headers$$5$$;
    this.$m_collection$ = $collection$$44$$;
    this.$m_rowHeader$ = $rowHeader$$4$$
  };
  $goog$exportPath_$$("CollectionHeaderSet", $oj$$16$$.$CollectionHeaderSet$, $oj$$16$$);
  $oj$$16$$.$CollectionHeaderSet$.prototype.getData = function $$oj$$16$$$$CollectionHeaderSet$$$getData$($index$$134$$) {
    $oj$$16$$.$Assert$.assert($index$$134$$ <= this.$m_end$ && $index$$134$$ >= this.$m_start$);
    var $self$$55$$ = this;
    return null != this.$m_rowHeader$ && null != this.$m_collection$ ? (null != this.$m_collection$.offset && ($index$$134$$ += this.$m_collection$.offset), this.$m_collection$.at($index$$134$$, {deferred:!0}).done(function($model$$60$$) {
      $self$$55$$.$model$ = $model$$60$$
    }), $self$$55$$.$model$.get(this.$m_rowHeader$)) : this.$m_headers$[$index$$134$$]
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getData", {getData:$oj$$16$$.$CollectionHeaderSet$.prototype.getData});
  $oj$$16$$.$CollectionHeaderSet$.prototype.getMetadata = function $$oj$$16$$$$CollectionHeaderSet$$$getMetadata$($index$$135$$) {
    var $self$$56$$;
    return null != this.$m_rowHeader$ && null != this.$m_collection$ ? ($self$$56$$ = this, this.$m_collection$.at($index$$135$$, {deferred:!0}).done(function($model$$61$$) {
      $self$$56$$.$model$ = $model$$61$$
    }), null == $self$$56$$.$model$ ? null : {key:$self$$56$$.$model$.$GetCid$()}) : {key:this.getData($index$$135$$)}
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getMetadata", {getMetadata:$oj$$16$$.$CollectionHeaderSet$.prototype.getMetadata});
  $oj$$16$$.$CollectionHeaderSet$.prototype.$getCount$ = function $$oj$$16$$$$CollectionHeaderSet$$$$getCount$$() {
    return Math.max(0, this.$m_end$ - this.$m_start$)
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getCount", {$getCount$:$oj$$16$$.$CollectionHeaderSet$.prototype.$getCount$});
  $oj$$16$$.$CollectionHeaderSet$.prototype.$getStart$ = $JSCompiler_get$$("$m_start$");
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getStart", {$getStart$:$oj$$16$$.$CollectionHeaderSet$.prototype.$getStart$});
  $oj$$16$$.$CollectionHeaderSet$.prototype.$getEnd$ = $JSCompiler_get$$("$m_end$");
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getEnd", {$getEnd$:$oj$$16$$.$CollectionHeaderSet$.prototype.$getEnd$});
  $oj$$16$$.$CollectionHeaderSet$.prototype.$getHeaders$ = $JSCompiler_get$$("$m_headers$");
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getHeaders", {$getHeaders$:$oj$$16$$.$CollectionHeaderSet$.prototype.$getHeaders$});
  $oj$$16$$.$CollectionHeaderSet$.prototype.$getRowHeader$ = $JSCompiler_get$$("$m_rowHeader$");
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getRowHeader", {$getRowHeader$:$oj$$16$$.$CollectionHeaderSet$.prototype.$getRowHeader$});
  $oj$$16$$.$CollectionHeaderSet$.prototype.$getCollection$ = $JSCompiler_get$$("$m_collection$");
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getCollection", {$getCollection$:$oj$$16$$.$CollectionHeaderSet$.prototype.$getCollection$});
  $oj$$16$$.$CollectionDataGridDataSource$ = function $$oj$$16$$$$CollectionDataGridDataSource$$($collection$$45$$, $options$$244$$) {
    this.$collection$ = $collection$$45$$;
    null != $options$$244$$ && (this.$rowHeader$ = $options$$244$$.rowHeader, this.columns = $options$$244$$.columns);
    this.$_startIndex$ = 0;
    this.$_totalSize$ = this.$_pageSize$ = -1;
    this.$syncing$ = this.$initialSync$ = !1;
    $oj$$16$$.$CollectionDataGridDataSource$.$superclass$.constructor.call(this)
  };
  $goog$exportPath_$$("CollectionDataGridDataSource", $oj$$16$$.$CollectionDataGridDataSource$, $oj$$16$$);
  $oj$$16$$.$Object$.$createSubclass$($oj$$16$$.$CollectionDataGridDataSource$, $oj$$16$$.$DataGridDataSource$, "oj.CollectionDataGridDataSource");
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.$Init$ = function $$oj$$16$$$$CollectionDataGridDataSource$$$$Init$$() {
    $oj$$16$$.$CollectionDataGridDataSource$.$superclass$.$Init$.call(this);
    this.$pendingHeaderCallback$ = {};
    this.$_isRemote$() ? (this.$initialSync$ = !0, this.$collection$.fetch({success:this.$_handleCollectionFetched$.bind(this, !0)})) : null == this.columns && 0 < this.$collection$.length && (this.columns = this.$collection$.first().keys(), -1 != this.columns.indexOf(this.$rowHeader$) && this.columns.splice(this.columns.indexOf(this.$rowHeader$), 1));
    this.$_registerEventListeners$()
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.Init", {$Init$:$oj$$16$$.$CollectionDataGridDataSource$.prototype.$Init$});
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.$_registerEventListeners$ = function $$oj$$16$$$$CollectionDataGridDataSource$$$$_registerEventListeners$$() {
    this.$collection$.on("add", this.$_handleModelAdded$.bind(this));
    this.$collection$.on("remove", this.$_handleModelDeleted$.bind(this));
    this.$collection$.on("change", this.$_handleModelChanged$.bind(this));
    this.$collection$.on("sync", this.$_handleSync$.bind(this))
  };
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.$_isRemote$ = function $$oj$$16$$$$CollectionDataGridDataSource$$$$_isRemote$$() {
    return null != this.$collection$.url
  };
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.$_isDataAvailable$ = function $$oj$$16$$$$CollectionDataGridDataSource$$$$_isDataAvailable$$() {
    return this.$_isRemote$() ? null != this.data : !0
  };
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.$_handleCollectionFetched$ = function $$oj$$16$$$$CollectionDataGridDataSource$$$$_handleCollectionFetched$$($isInit$$, $collection$$46$$, $response$$10$$) {
    var $axis$$20$$;
    this.data = $response$$10$$;
    !0 === $isInit$$ ? this.$initialSync$ = !1 : this.$syncing$ = !1;
    this.$_totalSize$ = void 0 === $collection$$46$$.$totalResults$ ? $collection$$46$$.length : $collection$$46$$.$totalResults$;
    $oj$$16$$.$DataGridDataSource$.$superclass$.handleEvent.call(this, "sync", !0);
    null == this.columns && 0 < this.$collection$.models.length && (this.columns = this.$collection$.models[0].keys(), -1 != this.columns.indexOf(this.$rowHeader$) && this.columns.splice(this.columns.indexOf(this.$rowHeader$), 1));
    for($axis$$20$$ in this.$pendingHeaderCallback$) {
      this.$pendingHeaderCallback$.hasOwnProperty($axis$$20$$) && null != this.$pendingHeaderCallback$[$axis$$20$$] && this.$fetchHeaders$(this.$pendingHeaderCallback$[$axis$$20$$].$headerRange$, this.$pendingHeaderCallback$[$axis$$20$$].callbacks, this.$pendingHeaderCallback$[$axis$$20$$].$callbackObjects$)
    }
    null != this.$pendingCellCallback$ && this.$fetchCells$(this.$pendingCellCallback$.$cellRanges$, this.$pendingCellCallback$.callbacks, this.$pendingCellCallback$.$callbackObjects$)
  };
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.$getCount$ = function $$oj$$16$$$$CollectionDataGridDataSource$$$$getCount$$($axis$$21$$) {
    if(!this.$_isDataAvailable$()) {
      return this.precision = "estimate", 100
    }
    this.precision = "exact";
    return"row" == $axis$$21$$ ? this.size() : "column" == $axis$$21$$ ? this.columns.length : 0
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCount", {$getCount$:$oj$$16$$.$CollectionDataGridDataSource$.prototype.$getCount$});
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$16$$$$CollectionDataGridDataSource$$$$getCountPrecision$$($axis$$22$$) {
    null == this.precision && this.$getCount$($axis$$22$$);
    return this.precision
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$16$$.$CollectionDataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$16$$$$CollectionDataGridDataSource$$$$fetchHeaders$$($headerRange$$7$$, $callbacks$$44$$, $callbackObjects$$16$$) {
    var $axis$$23$$, $callback$$85_start$$30$$, $count$$31_end$$9$$, $headerSet$$3$$;
    $axis$$23$$ = $headerRange$$7$$.axis;
    this.$_isDataAvailable$() ? ($callback$$85_start$$30$$ = $headerRange$$7$$.start, $count$$31_end$$9$$ = $headerRange$$7$$.count, $oj$$16$$.$Assert$.assert("row" === $axis$$23$$ || "column" === $axis$$23$$), $oj$$16$$.$Assert$.assert($callback$$85_start$$30$$ < this.$getCount$($axis$$23$$)), $oj$$16$$.$Assert$.assert(0 < $count$$31_end$$9$$), "column" === $axis$$23$$ ? ($count$$31_end$$9$$ = Math.min(this.columns.length, $callback$$85_start$$30$$ + $count$$31_end$$9$$), $headerSet$$3$$ = new $oj$$16$$.$CollectionHeaderSet$($callback$$85_start$$30$$, 
    $count$$31_end$$9$$, this.columns)) : "row" === $axis$$23$$ && (null != this.$rowHeader$ ? ($count$$31_end$$9$$ = Math.min(this.size(), $callback$$85_start$$30$$ + $count$$31_end$$9$$), 0 < this.$_pageSize$ && ($count$$31_end$$9$$ = Math.min($count$$31_end$$9$$, this.$_startIndex$ + this.$_pageSize$), $count$$31_end$$9$$ = Math.min($count$$31_end$$9$$, this.totalSize() - this.$_startIndex$)), $headerSet$$3$$ = new $oj$$16$$.$CollectionHeaderSet$($callback$$85_start$$30$$, $count$$31_end$$9$$, 
    this.columns, this.$collection$, this.$rowHeader$)) : $headerSet$$3$$ = new $oj$$16$$.$ArrayHeaderSet$($callback$$85_start$$30$$, $callback$$85_start$$30$$, $axis$$23$$, null)), null != $callbacks$$44$$ && null != $callbacks$$44$$.success && (null == $callbackObjects$$16$$ && ($callbackObjects$$16$$ = {}), $callbacks$$44$$.success.call($callbackObjects$$16$$.success, $headerSet$$3$$, $headerRange$$7$$)), this.$pendingHeaderCallback$[$axis$$23$$] = null) : null != $callbacks$$44$$ && null == this.$pendingHeaderCallback$[$axis$$23$$] && 
    ($callback$$85_start$$30$$ = {}, $callback$$85_start$$30$$.$headerRange$ = $headerRange$$7$$, $callback$$85_start$$30$$.callbacks = $callbacks$$44$$, $callback$$85_start$$30$$.$callbackObjects$ = $callbackObjects$$16$$, this.$pendingHeaderCallback$[$axis$$23$$] = $callback$$85_start$$30$$)
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$16$$.$CollectionDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$16$$$$CollectionDataGridDataSource$$$$fetchCells$$($cellRanges$$4$$, $callbacks$$45$$, $callbackObjects$$17$$) {
    var $cellSet$$3_i$$194$$, $cellRange$$4$$, $rowStart$$4$$, $rowEnd$$1$$, $colStart$$1$$, $colEnd$$1$$;
    $colEnd$$1$$ = $rowEnd$$1$$ = 0;
    if(this.$_isDataAvailable$()) {
      for($cellSet$$3_i$$194$$ = 0;$cellSet$$3_i$$194$$ < $cellRanges$$4$$.length;$cellSet$$3_i$$194$$ += 1) {
        $cellRange$$4$$ = $cellRanges$$4$$[$cellSet$$3_i$$194$$], $oj$$16$$.$Assert$.assert("row" === $cellRange$$4$$.axis || "column" === $cellRange$$4$$.axis), $oj$$16$$.$Assert$.assert($cellRange$$4$$.start < this.$getCount$($cellRange$$4$$.axis)), $oj$$16$$.$Assert$.assert(0 < $cellRange$$4$$.count), "row" === $cellRange$$4$$.axis ? ($rowStart$$4$$ = $cellRange$$4$$.start, $rowEnd$$1$$ = Math.min(this.size(), $rowStart$$4$$ + $cellRange$$4$$.count), 0 < this.$_pageSize$ && ($rowEnd$$1$$ = Math.min($rowEnd$$1$$, 
        this.$_startIndex$ + this.$_pageSize$), $rowEnd$$1$$ = Math.min($rowEnd$$1$$, this.totalSize() - this.$_startIndex$))) : "column" === $cellRange$$4$$.axis && ($colStart$$1$$ = $cellRange$$4$$.start, $colEnd$$1$$ = Math.min(this.columns.length, $colStart$$1$$ + $cellRange$$4$$.count))
      }
      $cellSet$$3_i$$194$$ = new $oj$$16$$.$CollectionCellSet$($rowStart$$4$$, $rowEnd$$1$$, $colStart$$1$$, $colEnd$$1$$, this.$collection$, this.columns);
      null != $callbacks$$45$$ && null != $callbacks$$45$$.success && (null != $callbacks$$45$$ && null == $callbackObjects$$17$$ && ($callbackObjects$$17$$ = {}), $callbacks$$45$$.success.call($callbackObjects$$17$$.success, $cellSet$$3_i$$194$$, $cellRanges$$4$$), this.$_fetchCalls$ = 0);
      this.$pendingCellCallback$ = null
    }else {
      null != $callbacks$$45$$ && null == this.$pendingCellCallback$ && (this.$pendingCellCallback$ = {}, this.$pendingCellCallback$.$cellRanges$ = $cellRanges$$4$$, this.$pendingCellCallback$.callbacks = $callbacks$$45$$, this.$pendingCellCallback$.$callbackObjects$ = $callbackObjects$$17$$)
    }
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$16$$.$CollectionDataGridDataSource$.prototype.$fetchCells$});
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.keys = function $$oj$$16$$$$CollectionDataGridDataSource$$$keys$($indexes$$12$$) {
    var $rowIndex$$6$$ = $indexes$$12$$.row;
    return{row:void 0 === this.$collection$.models[$rowIndex$$6$$] ? void 0 : this.$collection$.models[$rowIndex$$6$$].cid, column:this.columns[$indexes$$12$$.column]}
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.keys", {keys:$oj$$16$$.$CollectionDataGridDataSource$.prototype.keys});
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.$indexes$ = function $$oj$$16$$$$CollectionDataGridDataSource$$$$indexes$$($keys$$15$$) {
    var $columnKey$$3$$ = $keys$$15$$.column;
    return{row:this.$collection$.models.indexOf(this.$collection$.$getByCid$($keys$$15$$.row)), column:void 0 === this.columns ? this.$collection$.first().keys().indexOf($columnKey$$3$$) : this.columns.indexOf($columnKey$$3$$)}
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.indexes", {$indexes$:$oj$$16$$.$CollectionDataGridDataSource$.prototype.$indexes$});
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.$getCapability$ = function $$oj$$16$$$$CollectionDataGridDataSource$$$$getCapability$$($feature$$10$$) {
    return"sort" === $feature$$10$$ ? "column" : "move" === $feature$$10$$ ? "row" : null
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCapability", {$getCapability$:$oj$$16$$.$CollectionDataGridDataSource$.prototype.$getCapability$});
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.sort = function $$oj$$16$$$$CollectionDataGridDataSource$$$sort$($axis$$24_criteria$$8$$, $callbacks$$46$$, $callbackObjects$$18$$) {
    var $comparator$$13$$, $direction$$7$$ = $axis$$24_criteria$$8$$.direction, $header$$6$$ = $axis$$24_criteria$$8$$.key;
    $axis$$24_criteria$$8$$ = $axis$$24_criteria$$8$$.axis;
    null == $callbackObjects$$18$$ && ($callbackObjects$$18$$ = {});
    "column" === $axis$$24_criteria$$8$$ ? ("ascending" === $direction$$7$$ && ($comparator$$13$$ = function $$comparator$$13$$$($a$$56$$, $b$$42$$) {
      var $as$$2$$, $bs$$2$$;
      $a$$56$$ = $a$$56$$.get($header$$6$$);
      $b$$42$$ = $b$$42$$.get($header$$6$$);
      $as$$2$$ = isNaN($a$$56$$);
      $bs$$2$$ = isNaN($b$$42$$);
      $a$$56$$ instanceof Date && ($a$$56$$ = $a$$56$$.toISOString(), $as$$2$$ = !0);
      $b$$42$$ instanceof Date && ($b$$42$$ = $b$$42$$.toISOString(), $bs$$2$$ = !0);
      return $as$$2$$ && $bs$$2$$ ? $a$$56$$ < $b$$42$$ ? -1 : $a$$56$$ === $b$$42$$ ? 0 : 1 : $as$$2$$ ? 1 : $bs$$2$$ ? -1 : $a$$56$$ - $b$$42$$
    }), "descending" === $direction$$7$$ && ($comparator$$13$$ = function $$comparator$$13$$$($a$$57$$, $b$$43$$) {
      var $as$$3$$, $bs$$3$$;
      $a$$57$$ = $a$$57$$.get($header$$6$$);
      $b$$43$$ = $b$$43$$.get($header$$6$$);
      $as$$3$$ = isNaN($a$$57$$);
      $bs$$3$$ = isNaN($b$$43$$);
      $a$$57$$ instanceof Date && ($a$$57$$ = $a$$57$$.toISOString());
      $b$$43$$ instanceof Date && ($b$$43$$ = $b$$43$$.toISOString());
      return $as$$3$$ && $bs$$3$$ ? $a$$57$$ > $b$$43$$ ? -1 : $a$$57$$ === $b$$43$$ ? 0 : 1 : $as$$3$$ ? -1 : $bs$$3$$ ? 1 : $b$$43$$ - $a$$57$$
    }), void 0 !== $comparator$$13$$ ? (this.$collection$.comparator = $comparator$$13$$, this.$collection$.sort(), null != $callbacks$$46$$ && null != $callbacks$$46$$.success && $callbacks$$46$$.success.call($callbackObjects$$18$$.success)) : null != $callbacks$$46$$ && null != $callbacks$$46$$.error && $callbacks$$46$$.error.call($callbackObjects$$18$$.error, "Direction value was invalid")) : null != $callbacks$$46$$ && null != $callbacks$$46$$.error && $callbacks$$46$$.error.call($callbackObjects$$18$$.error, 
    "Axis value not supported")
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.sort", {sort:$oj$$16$$.$CollectionDataGridDataSource$.prototype.sort});
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.move = function $$oj$$16$$$$CollectionDataGridDataSource$$$move$($moveKey$$2$$, $atKey$$2$$) {
    var $model$$62$$, $newIndex$$;
    $model$$62$$ = this.$collection$.$getByCid$($moveKey$$2$$);
    null === $atKey$$2$$ ? (this.$collection$.remove($model$$62$$), this.$collection$.add($model$$62$$)) : ($moveKey$$2$$ === $atKey$$2$$ ? ($newIndex$$ = this.$collection$.indexOf(this.$collection$.$getByCid$($atKey$$2$$)), this.$collection$.remove($model$$62$$)) : (this.$collection$.remove($model$$62$$), $newIndex$$ = this.$collection$.indexOf(this.$collection$.$getByCid$($atKey$$2$$))), this.$collection$.add($model$$62$$, {at:$newIndex$$}))
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.move", {move:$oj$$16$$.$CollectionDataGridDataSource$.prototype.move});
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.$_getModelEvent$ = function $$oj$$16$$$$CollectionDataGridDataSource$$$$_getModelEvent$$($operation$$6$$, $rowKey$$23$$) {
    var $event$$127$$ = {source:this};
    $event$$127$$.operation = $operation$$6$$;
    $event$$127$$.keys = {row:$rowKey$$23$$, column:null};
    return $event$$127$$
  };
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.$_handleModelAdded$ = function $$oj$$16$$$$CollectionDataGridDataSource$$$$_handleModelAdded$$($event$$128_model$$63_rowKey$$24$$) {
    !1 === this.$syncing$ && !1 === this.$initialSync$ && ($event$$128_model$$63_rowKey$$24$$ = $event$$128_model$$63_rowKey$$24$$.$GetCid$(), $event$$128_model$$63_rowKey$$24$$ = this.$_getModelEvent$("insert", $event$$128_model$$63_rowKey$$24$$), this.handleEvent("change", $event$$128_model$$63_rowKey$$24$$))
  };
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.$_handleModelDeleted$ = function $$oj$$16$$$$CollectionDataGridDataSource$$$$_handleModelDeleted$$($event$$129_model$$64_rowKey$$25$$) {
    !1 === this.$syncing$ && !1 === this.$initialSync$ && ($event$$129_model$$64_rowKey$$25$$ = $event$$129_model$$64_rowKey$$25$$.$GetCid$(), $event$$129_model$$64_rowKey$$25$$ = this.$_getModelEvent$("delete", $event$$129_model$$64_rowKey$$25$$), this.handleEvent("change", $event$$129_model$$64_rowKey$$25$$))
  };
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.$_handleModelChanged$ = function $$oj$$16$$$$CollectionDataGridDataSource$$$$_handleModelChanged$$($event$$130_model$$65_rowKey$$26$$) {
    !1 === this.$syncing$ && !1 === this.$initialSync$ && ($event$$130_model$$65_rowKey$$26$$ = $event$$130_model$$65_rowKey$$26$$.$GetCid$(), $event$$130_model$$65_rowKey$$26$$ = this.$_getModelEvent$("update", $event$$130_model$$65_rowKey$$26$$), this.handleEvent("change", $event$$130_model$$65_rowKey$$26$$))
  };
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.$_handleSync$ = function $$oj$$16$$$$CollectionDataGridDataSource$$$$_handleSync$$() {
    0 < this.$_pageSize$ && (this.$pendingHeaderCallback$ = {}, this.$pendingCellCallback$ = null, this.handleEvent("change", {operation:"sync", pageSize:this.$_pageSize$, rowIndex:this.$_startIndex$}))
  };
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.$setPageSize$ = $JSCompiler_set$$("$_pageSize$");
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.setPageSize", {$setPageSize$:$oj$$16$$.$CollectionDataGridDataSource$.prototype.$setPageSize$});
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.size = function $$oj$$16$$$$CollectionDataGridDataSource$$$size$() {
    return 0 === this.$collection$.length ? -1 : null != this.$_pageSize$ && 0 < this.$_pageSize$ && this.$collection$.size() > this.$_pageSize$ ? this.$_pageSize$ : this.$collection$.size()
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.size", {size:$oj$$16$$.$CollectionDataGridDataSource$.prototype.size});
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.totalSize = function $$oj$$16$$$$CollectionDataGridDataSource$$$totalSize$() {
    return null != this.$collection$ && 0 > this.$_totalSize$ ? this.$collection$.totalResults : this.$_totalSize$
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.totalSize", {totalSize:$oj$$16$$.$CollectionDataGridDataSource$.prototype.totalSize});
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.hasMore = function $$oj$$16$$$$CollectionDataGridDataSource$$$hasMore$() {
    return null != this.$collection$ ? this.$collection$.hasMore : !1
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.hasMore", {hasMore:$oj$$16$$.$CollectionDataGridDataSource$.prototype.hasMore});
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.fetch = function $$oj$$16$$$$CollectionDataGridDataSource$$$fetch$($options$$246$$) {
    this.$syncing$ = !0;
    this.$_startIndex$ = null != $options$$246$$ ? null != $options$$246$$.startIndex ? $options$$246$$.startIndex : 0 : 0;
    this.$collection$.fetch({success:this.$_handleCollectionFetched$.bind(this, !1), startIndex:this.$_startIndex$})
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.fetch", {fetch:$oj$$16$$.$CollectionDataGridDataSource$.prototype.fetch});
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.$getCollection$ = $JSCompiler_get$$("$collection$");
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCollection", {$getCollection$:$oj$$16$$.$CollectionDataGridDataSource$.prototype.$getCollection$});
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.$getColumns$ = $JSCompiler_get$$("columns");
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getColumns", {$getColumns$:$oj$$16$$.$CollectionDataGridDataSource$.prototype.$getColumns$});
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.$getRowHeader$ = $JSCompiler_get$$("$rowHeader$");
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getRowHeader", {$getRowHeader$:$oj$$16$$.$CollectionDataGridDataSource$.prototype.$getRowHeader$});
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.$getStartIndex$ = $JSCompiler_get$$("$_startIndex$");
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getStartIndex", {$getStartIndex$:$oj$$16$$.$CollectionDataGridDataSource$.prototype.$getStartIndex$});
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.$getPageSize$ = $JSCompiler_get$$("$_pageSize$");
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getPageSize", {$getPageSize$:$oj$$16$$.$CollectionDataGridDataSource$.prototype.$getPageSize$});
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.$getTotalSize$ = $JSCompiler_get$$("$_totalSize$");
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getTotalSize", {$getTotalSize$:$oj$$16$$.$CollectionDataGridDataSource$.prototype.$getTotalSize$});
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.$getFetchCalls$ = $JSCompiler_get$$("$_fetchCalls$");
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getFetchCalls", {$getFetchCalls$:$oj$$16$$.$CollectionDataGridDataSource$.prototype.$getFetchCalls$});
  $oj$$16$$.$CollectionDataGridDataSource$.prototype.getData = $JSCompiler_get$$("data");
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getData", {getData:$oj$$16$$.$CollectionDataGridDataSource$.prototype.getData})
});
