define("ojs/ojcore jquery ojs/internal-deps/datagrid/DvtDataGrid ojs/ojcomponentcore ojs/ojdatacollection-common ojs/ojpagingcontrol".split(" "), function($oj$$6$$, $$$$6$$, $DvtDataGrid$$1$$) {
  $oj$$6$$.$ArrayDataGridDataSource$ = function $$oj$$6$$$$ArrayDataGridDataSource$$($data$$52$$, $options$$195$$) {
    null != $options$$195$$ && (this.$rowHeaderKey$ = $options$$195$$.rowHeader);
    $oj$$6$$.$ArrayDataGridDataSource$.$superclass$.constructor.call(this, $data$$52$$)
  };
  $goog$exportPath_$$("ArrayDataGridDataSource", $oj$$6$$.$ArrayDataGridDataSource$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$ArrayDataGridDataSource$, $oj$$6$$.$DataGridDataSource$, "oj.ArrayDataGridDataSource");
  $oj$$6$$.$ArrayDataGridDataSource$.prototype.$Init$ = function $$oj$$6$$$$ArrayDataGridDataSource$$$$Init$$() {
    this.columns = this.$_getColumnsForScaffolding$(this.data);
    this.$_initializeRowKeys$();
    $oj$$6$$.$ArrayDataGridDataSource$.$superclass$.$Init$.call(this)
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.Init", {$Init$:$oj$$6$$.$ArrayDataGridDataSource$.prototype.$Init$});
  $oj$$6$$.$ArrayDataGridDataSource$.prototype.$_initializeRowKeys$ = function $$oj$$6$$$$ArrayDataGridDataSource$$$$_initializeRowKeys$$() {
    var $i$$131$$;
    this.$rowKeys$ = [];
    for($i$$131$$ = 0;$i$$131$$ < this.data.length;$i$$131$$ += 1) {
      this.$rowKeys$[$i$$131$$] = $i$$131$$.toString()
    }
  };
  $oj$$6$$.$ArrayDataGridDataSource$.prototype.$_getColumnsForScaffolding$ = function $$oj$$6$$$$ArrayDataGridDataSource$$$$_getColumnsForScaffolding$$($data$$53$$) {
    var $propertyName$$8$$, $columns$$;
    if("number" !== typeof $data$$53$$.length || 0 === $data$$53$$.length) {
      return[]
    }
    $columns$$ = [];
    for($propertyName$$8$$ in $data$$53$$[0]) {
      $data$$53$$[0].hasOwnProperty($propertyName$$8$$) && (void 0 != this.$rowHeaderKey$ && $propertyName$$8$$ == this.$rowHeaderKey$ || $columns$$.push($propertyName$$8$$))
    }
    return $columns$$
  };
  $oj$$6$$.$ArrayDataGridDataSource$.prototype.$getCount$ = function $$oj$$6$$$$ArrayDataGridDataSource$$$$getCount$$($axis$$2$$) {
    return"row" === $axis$$2$$ ? this.data.length : "column" === $axis$$2$$ ? this.columns.length : 0
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getCount", {$getCount$:$oj$$6$$.$ArrayDataGridDataSource$.prototype.$getCount$});
  $oj$$6$$.$ArrayDataGridDataSource$.prototype.$getHeaderData$ = function $$oj$$6$$$$ArrayDataGridDataSource$$$$getHeaderData$$($axis$$3$$, $index$$106$$) {
    if("row" === $axis$$3$$) {
      return void 0 != this.$rowHeaderKey$ ? this.data[$index$$106$$][this.$rowHeaderKey$] : 0 < this.data.length && this.data[0] instanceof Array ? void 0 === this.$rowKeys$[$index$$106$$] ? $index$$106$$.toString() : this.$rowKeys$[$index$$106$$] : null
    }
    if("column" === $axis$$3$$) {
      return this.columns[$index$$106$$]
    }
  };
  $oj$$6$$.$ArrayDataGridDataSource$.prototype.$getHeaderMetadata$ = function $$oj$$6$$$$ArrayDataGridDataSource$$$$getHeaderMetadata$$($axis$$4$$, $index$$107$$) {
    return"row" === $axis$$4$$ && void 0 != this.$rowHeaderKey$ ? {key:$index$$107$$.toString()} : {key:this.$getHeaderData$($axis$$4$$, $index$$107$$)}
  };
  $oj$$6$$.$ArrayDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$6$$$$ArrayDataGridDataSource$$$$fetchHeaders$$($headerRange$$1$$, $callbacks$$22$$, $callbackObjects$$3$$) {
    var $axis$$5_headerSet$$, $start$$22$$, $count$$24_end$$5$$;
    $axis$$5_headerSet$$ = $headerRange$$1$$.axis;
    $start$$22$$ = $headerRange$$1$$.start;
    $count$$24_end$$5$$ = $headerRange$$1$$.count;
    $oj$$6$$.$Assert$.assert("row" === $axis$$5_headerSet$$ || "column" === $axis$$5_headerSet$$);
    $oj$$6$$.$Assert$.assert($start$$22$$ < this.$getCount$($axis$$5_headerSet$$));
    $oj$$6$$.$Assert$.assert(0 < $count$$24_end$$5$$);
    $start$$22$$ = Math.max(0, $start$$22$$);
    $count$$24_end$$5$$ = "column" === $axis$$5_headerSet$$ ? Math.min(this.columns.length, $start$$22$$ + $count$$24_end$$5$$) : void 0 !== this.$rowHeaderKey$ || 0 < this.data.length && this.data[0] instanceof Array ? Math.min(this.data.length, $start$$22$$ + $count$$24_end$$5$$) : $start$$22$$;
    $axis$$5_headerSet$$ = new $oj$$6$$.$ArrayHeaderSet$($start$$22$$, $count$$24_end$$5$$, $axis$$5_headerSet$$, this);
    null != $callbacks$$22$$ && null != $callbacks$$22$$.success && (null == $callbackObjects$$3$$ && ($callbackObjects$$3$$ = {}), $callbacks$$22$$.success.call($callbackObjects$$3$$.success, $axis$$5_headerSet$$, $headerRange$$1$$))
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$6$$.$ArrayDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$6$$.$ArrayDataGridDataSource$.prototype.$getCellData$ = function $$oj$$6$$$$ArrayDataGridDataSource$$$$getCellData$$($row$$13$$, $column$$2$$) {
    return this.data[$row$$13$$][this.columns[$column$$2$$]]
  };
  $oj$$6$$.$ArrayDataGridDataSource$.prototype.$getCellMetadata$ = function $$oj$$6$$$$ArrayDataGridDataSource$$$$getCellMetadata$$($row$$14$$, $column$$3$$) {
    return{keys:{row:this.$rowKeys$[$row$$14$$], column:this.columns[$column$$3$$]}}
  };
  $oj$$6$$.$ArrayDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$6$$$$ArrayDataGridDataSource$$$$fetchCells$$($cellRanges$$, $callbacks$$23$$, $callbackObjects$$4$$) {
    var $cellSet_i$$132$$, $cellRange$$1$$, $rowStart$$1$$, $rowEnd$$, $colStart$$, $colEnd$$;
    for($cellSet_i$$132$$ = 0;$cellSet_i$$132$$ < $cellRanges$$.length;$cellSet_i$$132$$ += 1) {
      $cellRange$$1$$ = $cellRanges$$[$cellSet_i$$132$$], $oj$$6$$.$Assert$.assert("row" === $cellRange$$1$$.axis || "column" === $cellRange$$1$$.axis), $oj$$6$$.$Assert$.assert($cellRange$$1$$.start < this.$getCount$($cellRange$$1$$.axis)), $oj$$6$$.$Assert$.assert(0 < $cellRange$$1$$.count), "row" === $cellRange$$1$$.axis ? ($rowStart$$1$$ = $cellRange$$1$$.start, $rowEnd$$ = Math.min(this.data.length, $rowStart$$1$$ + $cellRange$$1$$.count)) : "column" === $cellRange$$1$$.axis && ($colStart$$ = 
      $cellRange$$1$$.start, $colEnd$$ = Math.min(this.columns.length, $colStart$$ + $cellRange$$1$$.count))
    }
    void 0 === $rowEnd$$ || void 0 === $colEnd$$ ? null != $callbacks$$23$$ && null != $callbacks$$23$$.error && (null == $callbackObjects$$4$$ && ($callbackObjects$$4$$ = {}), $callbacks$$23$$.error.call($callbackObjects$$4$$.error)) : ($cellSet_i$$132$$ = new $oj$$6$$.$ArrayCellSet$($rowStart$$1$$, $rowEnd$$, $colStart$$, $colEnd$$, this), null != $callbacks$$23$$ && null != $callbacks$$23$$.success && (null == $callbackObjects$$4$$ && ($callbackObjects$$4$$ = {}), $callbacks$$23$$.success.call($callbackObjects$$4$$.success, 
    $cellSet_i$$132$$, $cellRanges$$)))
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$6$$.$ArrayDataGridDataSource$.prototype.$fetchCells$});
  $oj$$6$$.$ArrayDataGridDataSource$.prototype.keys = function $$oj$$6$$$$ArrayDataGridDataSource$$$keys$($indexes$$1$$) {
    return{row:this.$rowKeys$[$indexes$$1$$.row], column:this.columns[$indexes$$1$$.column]}
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.keys", {keys:$oj$$6$$.$ArrayDataGridDataSource$.prototype.keys});
  $oj$$6$$.$ArrayDataGridDataSource$.prototype.$indexes$ = function $$oj$$6$$$$ArrayDataGridDataSource$$$$indexes$$($keys$$9$$) {
    var $columnKey$$ = $keys$$9$$.column;
    return{row:this.$rowKeys$.indexOf($keys$$9$$.row), column:this.columns.indexOf($columnKey$$)}
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.indexes", {$indexes$:$oj$$6$$.$ArrayDataGridDataSource$.prototype.$indexes$});
  $oj$$6$$.$ArrayDataGridDataSource$.prototype.sort = function $$oj$$6$$$$ArrayDataGridDataSource$$$sort$($criteria$$4_direction$$4$$, $callbacks$$24$$, $callbackObjects$$5$$) {
    var $sortArray$$ = [], $indices$$ = [], $newData$$2$$ = [], $newColumns$$ = [], $newRowKeys$$ = [], $axis$$6_i$$133$$, $headerIndex_headerKey$$;
    $axis$$6_i$$133$$ = $criteria$$4_direction$$4$$.axis;
    $headerIndex_headerKey$$ = $criteria$$4_direction$$4$$.key;
    $criteria$$4_direction$$4$$ = $criteria$$4_direction$$4$$.direction;
    null != $callbacks$$24$$ && null == $callbackObjects$$5$$ && ($callbackObjects$$5$$ = {});
    if("column" === $axis$$6_i$$133$$) {
      $headerIndex_headerKey$$ = this.columns.indexOf($headerIndex_headerKey$$);
      for($axis$$6_i$$133$$ = 0;$axis$$6_i$$133$$ < this.data.length;$axis$$6_i$$133$$ += 1) {
        $sortArray$$[$axis$$6_i$$133$$] = this.data[$axis$$6_i$$133$$][this.columns[$headerIndex_headerKey$$]], $indices$$[$axis$$6_i$$133$$] = $axis$$6_i$$133$$
      }
      $indices$$.sort(this.$_naturalSort$($sortArray$$, $criteria$$4_direction$$4$$));
      for($axis$$6_i$$133$$ = 0;$axis$$6_i$$133$$ < this.data.length;$axis$$6_i$$133$$ += 1) {
        $newData$$2$$[$axis$$6_i$$133$$] = this.data[$indices$$[$axis$$6_i$$133$$]], $newRowKeys$$[$axis$$6_i$$133$$] = this.$rowKeys$[$indices$$[$axis$$6_i$$133$$]]
      }
      this.data = $newData$$2$$;
      this.$rowKeys$ = $newRowKeys$$;
      null != $callbacks$$24$$ && null != $callbacks$$24$$.success && $callbacks$$24$$.success.call($callbackObjects$$5$$.success)
    }else {
      if("row" === $axis$$6_i$$133$$) {
        $headerIndex_headerKey$$ = this.$rowKeys$.indexOf($headerIndex_headerKey$$);
        for($axis$$6_i$$133$$ = 0;$axis$$6_i$$133$$ < this.columns.length;$axis$$6_i$$133$$ += 1) {
          $sortArray$$[$axis$$6_i$$133$$] = this.data[$headerIndex_headerKey$$][this.columns[$axis$$6_i$$133$$]], $indices$$[$axis$$6_i$$133$$] = $axis$$6_i$$133$$
        }
        $indices$$.sort(this.$_naturalSort$($sortArray$$, $criteria$$4_direction$$4$$));
        for($axis$$6_i$$133$$ = 0;$axis$$6_i$$133$$ < this.columns.length;$axis$$6_i$$133$$ += 1) {
          $newColumns$$[$axis$$6_i$$133$$] = this.columns[$indices$$[$axis$$6_i$$133$$]]
        }
        this.columns = $newColumns$$;
        null !== $callbacks$$24$$ && null != $callbacks$$24$$.success && $callbacks$$24$$.success.call($callbackObjects$$5$$.success)
      }else {
        null !== $callbacks$$24$$ && null != $callbacks$$24$$.error && $callbacks$$24$$.error.call($callbackObjects$$5$$.error, "Invalid axis value")
      }
    }
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.sort", {sort:$oj$$6$$.$ArrayDataGridDataSource$.prototype.sort});
  $oj$$6$$.$ArrayDataGridDataSource$.prototype.$getCapability$ = function $$oj$$6$$$$ArrayDataGridDataSource$$$$getCapability$$($feature$$6$$) {
    return"sort" === $feature$$6$$ ? "column" : "move" === $feature$$6$$ ? "row" : null
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getCapability", {$getCapability$:$oj$$6$$.$ArrayDataGridDataSource$.prototype.$getCapability$});
  $oj$$6$$.$ArrayDataGridDataSource$.prototype.$_naturalSort$ = function $$oj$$6$$$$ArrayDataGridDataSource$$$$_naturalSort$$($sortArray$$1$$, $direction$$5$$) {
    if("ascending" === $direction$$5$$) {
      return function($a$$52$$, $b$$38$$) {
        var $as$$, $bs$$;
        $a$$52$$ = $sortArray$$1$$[$a$$52$$];
        $b$$38$$ = $sortArray$$1$$[$b$$38$$];
        $as$$ = isNaN($a$$52$$);
        $bs$$ = isNaN($b$$38$$);
        $a$$52$$ instanceof Date && ($a$$52$$ = $a$$52$$.toISOString(), $as$$ = !0);
        $b$$38$$ instanceof Date && ($b$$38$$ = $b$$38$$.toISOString(), $bs$$ = !0);
        return $as$$ && $bs$$ ? $a$$52$$ < $b$$38$$ ? -1 : $a$$52$$ === $b$$38$$ ? 0 : 1 : $as$$ ? 1 : $bs$$ ? -1 : $a$$52$$ - $b$$38$$
      }
    }
    if("descending" === $direction$$5$$) {
      return function($a$$53$$, $b$$39$$) {
        var $as$$1$$, $bs$$1$$;
        $a$$53$$ = $sortArray$$1$$[$a$$53$$];
        $b$$39$$ = $sortArray$$1$$[$b$$39$$];
        $as$$1$$ = isNaN($a$$53$$);
        $bs$$1$$ = isNaN($b$$39$$);
        $a$$53$$ instanceof Date && ($a$$53$$ = $a$$53$$.toISOString(), $as$$1$$ = !0);
        $b$$39$$ instanceof Date && ($b$$39$$ = $b$$39$$.toISOString(), $bs$$1$$ = !0);
        return $as$$1$$ && $bs$$1$$ ? $a$$53$$ > $b$$39$$ ? -1 : $a$$53$$ === $b$$39$$ ? 0 : 1 : $as$$1$$ ? -1 : $bs$$1$$ ? 1 : $b$$39$$ - $a$$53$$
      }
    }
  };
  $oj$$6$$.$ArrayDataGridDataSource$.prototype.move = function $$oj$$6$$$$ArrayDataGridDataSource$$$move$($moveKey$$, $atKey$$) {
    var $moveData_moveKeyIndex$$, $atKeyIndex_event$$46$$;
    $moveData_moveKeyIndex$$ = this.$rowKeys$.indexOf($moveKey$$);
    this.$rowKeys$.splice($moveData_moveKeyIndex$$, 1);
    $moveData_moveKeyIndex$$ = this.data.splice($moveData_moveKeyIndex$$, 1)[0];
    $atKeyIndex_event$$46$$ = {source:this, operation:"delete", keys:{row:$moveKey$$, column:null}};
    this.handleEvent("change", $atKeyIndex_event$$46$$);
    null === $atKey$$ ? (this.$rowKeys$.push($moveKey$$), this.data.push($moveData_moveKeyIndex$$)) : ($atKeyIndex_event$$46$$ = this.$rowKeys$.indexOf($atKey$$), this.$rowKeys$.splice($atKeyIndex_event$$46$$, 0, $moveKey$$), this.data.splice($atKeyIndex_event$$46$$, 0, $moveData_moveKeyIndex$$));
    $atKeyIndex_event$$46$$ = {source:this, operation:"insert", keys:{row:$moveKey$$, column:null}};
    this.handleEvent("change", $atKeyIndex_event$$46$$)
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.move", {move:$oj$$6$$.$ArrayDataGridDataSource$.prototype.move});
  $oj$$6$$.$ArrayDataGridDataSource$.prototype.$getRowHeaderKey$ = $JSCompiler_get$$("$rowHeaderKey$");
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getRowHeaderKey", {$getRowHeaderKey$:$oj$$6$$.$ArrayDataGridDataSource$.prototype.$getRowHeaderKey$});
  $oj$$6$$.$ArrayDataGridDataSource$.prototype.$getColumns$ = $JSCompiler_get$$("columns");
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getColumns", {$getColumns$:$oj$$6$$.$ArrayDataGridDataSource$.prototype.$getColumns$});
  $oj$$6$$.$ArrayDataGridDataSource$.prototype.$getRowKeys$ = $JSCompiler_get$$("$rowKeys$");
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getRowKeys", {$getRowKeys$:$oj$$6$$.$ArrayDataGridDataSource$.prototype.$getRowKeys$});
  $oj$$6$$.$ArrayDataGridDataSource$.prototype.getData = $JSCompiler_get$$("data");
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getData", {getData:$oj$$6$$.$ArrayDataGridDataSource$.prototype.getData});
  $oj$$6$$.$DataGridResources$ = function $$oj$$6$$$$DataGridResources$$($rtlMode$$, $translationFunction$$) {
    this.$rtlMode$ = $rtlMode$$;
    this.$translationFunction$ = $translationFunction$$;
    this.$styles$ = {};
    this.$styles$.datagrid = "oj-datagrid";
    this.$styles$.cell = "oj-datagrid-cell";
    this.$styles$.banded = "oj-datagrid-banded";
    this.$styles$.row = "oj-datagrid-row";
    this.$styles$.databody = "oj-datagrid-databody";
    this.$styles$.topcorner = "oj-datagrid-top-corner";
    this.$styles$.bottomcorner = "oj-datagrid-bottom-corner";
    this.$styles$.rowheaderspacer = "oj-datagrid-row-header-spacer";
    this.$styles$.colheaderspacer = "oj-datagrid-column-header-spacer";
    this.$styles$.status = "oj-datagrid-status";
    this.$styles$.emptytext = "oj-datagrid-empty-text";
    this.$styles$.header = "oj-datagrid-header";
    this.$styles$.headercell = "oj-datagrid-headercell";
    this.$styles$.rowheader = "oj-datagrid-rowheader";
    this.$styles$.colheader = "oj-datagrid-colheader";
    this.$styles$.colheadercell = "oj-datagrid-colheadercell";
    this.$styles$.rowheadercell = "oj-datagrid-rowheadercell";
    this.$styles$["scroller-mobile"] = "oj-datagrid-scroller-mobile";
    this.$styles$.scroller = "oj-datagrid-scroller";
    this.$styles$.scrollers = "oj-datagrid-scrollers";
    this.$styles$.hover = "oj-hover";
    this.$styles$.active = "oj-active";
    this.$styles$.selected = "oj-checked";
    this.$styles$.disabled = "oj-disabled";
    this.$styles$.sortindicators = "oj-datagrid-sort-indicators";
    this.$styles$.sortascending = "oj-datagrid-sort-ascending-icon";
    this.$styles$.sortdescending = "oj-datagrid-sort-descending-icon";
    this.$styles$.icon = "oj-widget-icon";
    this.$styles$.clickableicon = "oj-clickable-icon";
    this.$styles$.info = "oj-helper-hidden-accessible";
    this.$styles$.rowexpander = "oj-rowexpander";
    this.$styles$.cut = "oj-datagrid-cut";
    this.$styles$.move = "oj-datagrid-move";
    this.$styles$.droptarget = "oj-datagrid-droptarget";
    this.$commands$ = {};
    this.$commands$.sortCol = "oj-datagrid-sortCol";
    this.$commands$.sortColAsc = "oj-datagrid-sortColAsc";
    this.$commands$.sortColDsc = "oj-datagrid-sortColDsc";
    this.$commands$.sortRow = "oj-datagrid-sortRow";
    this.$commands$.sortRowAsc = "oj-datagrid-sortRowAsc";
    this.$commands$.sortRowDsc = "oj-datagrid-sortRowDsc";
    this.$commands$.resize = "oj-datagrid-resize";
    this.$commands$.resizeWidth = "oj-datagrid-resizeWidth";
    this.$commands$.resizeHeight = "oj-datagrid-resizeHeight";
    this.$commands$.cut = "oj-datagrid-cut";
    this.$commands$.paste = "oj-datagrid-paste";
    this.attributes = {};
    this.attributes.key = "data-oj-key";
    this.attributes.resizable = "data-oj-resizable";
    this.attributes.sortable = "data-oj-sortable";
    this.attributes.sortDir = "data-oj-sortdir";
    this.attributes.expander = "data-oj-expander";
    this.attributes.expanderIndex = "data-oj-expander-index";
    this.attributes.container = $oj$$6$$.Components.$_OJ_CONTAINER_ATTR$
  };
  $goog$exportPath_$$("DataGridResources", $oj$$6$$.$DataGridResources$, $oj$$6$$);
  $oj$$6$$.$DataGridResources$.prototype.$isRTLMode$ = function $$oj$$6$$$$DataGridResources$$$$isRTLMode$$() {
    return"rtl" === this.$rtlMode$ ? !0 : !1
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.isRTLMode", {$isRTLMode$:$oj$$6$$.$DataGridResources$.prototype.$isRTLMode$});
  $oj$$6$$.$DataGridResources$.prototype.$getTranslatedText$ = function $$oj$$6$$$$DataGridResources$$$$getTranslatedText$$($key$$47$$, $args$$12$$) {
    return this.$translationFunction$($key$$47$$, $args$$12$$)
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getTranslatedText", {$getTranslatedText$:$oj$$6$$.$DataGridResources$.prototype.$getTranslatedText$});
  $oj$$6$$.$DataGridResources$.prototype.$getMappedStyle$ = function $$oj$$6$$$$DataGridResources$$$$getMappedStyle$$($key$$48$$) {
    return null != $key$$48$$ ? this.$styles$[$key$$48$$] : null
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getMappedStyle", {$getMappedStyle$:$oj$$6$$.$DataGridResources$.prototype.$getMappedStyle$});
  $oj$$6$$.$DataGridResources$.prototype.$getMappedCommand$ = function $$oj$$6$$$$DataGridResources$$$$getMappedCommand$$($key$$49$$) {
    return null != $key$$49$$ ? this.$commands$[$key$$49$$] : null
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getMappedCommand", {$getMappedCommand$:$oj$$6$$.$DataGridResources$.prototype.$getMappedCommand$});
  $oj$$6$$.$DataGridResources$.prototype.$getMappedAttribute$ = function $$oj$$6$$$$DataGridResources$$$$getMappedAttribute$$($key$$50$$) {
    return null != $key$$50$$ ? this.attributes[$key$$50$$] : null
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getMappedAttribute", {$getMappedAttribute$:$oj$$6$$.$DataGridResources$.prototype.$getMappedAttribute$});
  $oj$$6$$.$__registerWidget$("oj.ojDataGrid", $$$$6$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{bandingInterval:{row:0, column:0}, data:null, emptyText:null, gridlines:{horizontal:"visible", vertical:"visible"}, scrollPolicy:"auto", scrollPosition:null, selectionMode:null, header:{row:{className:null, renderer:null, resizable:{width:"disable", height:"disable"}, sortable:"default", style:null, template:null}, column:{className:null, renderer:null, resizable:{width:"disable", 
  height:"disable"}, sortable:"default", style:null, template:null}}, cell:{className:null, renderer:null, style:null, template:null}, select:null, resize:null, sort:null}, _create:function() {
    $$$$6$$(this.root).addClass("oj-widget");
    this._super();
    this.root = this.element[0];
    this.$rootId$ = this.root.getAttribute("id");
    this.$grid$ = new $DvtDataGrid$$1$$
  }, _init:function() {
    var $self$$32$$ = this;
    $$$$6$$(this.root).empty();
    this._super();
    this.$resources$ = new $oj$$6$$.$DataGridResources$(this._GetReadingDirection(), this.$_getTranslation$.bind($self$$32$$));
    this.$_setDataSource$();
    this.$_registerDataSourceListeners$();
    this.$_addContextMenu$();
    null != this.$datasource$ && this.$grid$.SetDataSource(this.$datasource$);
    this.$grid$.SetOptions(this.options);
    this.$grid$.SetResources(this.$resources$);
    this.$grid$.SetCreateContextCallback(this.$_modifyContext$.bind($self$$32$$));
    this.$grid$.addListener("resize", function($details$$2$$) {
      $self$$32$$._trigger("resize", $details$$2$$.event, $details$$2$$.ui)
    });
    this.$grid$.addListener("select", function($details$$3$$) {
      $self$$32$$._trigger("select", $details$$3$$.event, $details$$3$$.ui)
    });
    this.$grid$.addListener("sort", function($details$$4$$) {
      $self$$32$$._trigger("sort", $details$$4$$.event, $details$$4$$.ui)
    });
    this.$grid$.render(this.root)
  }, refresh:function() {
    this._super();
    $$$$6$$(this.root).empty();
    this.$_setDataSource$();
    null != this.$datasource$ && this.$grid$.SetDataSource(this.$datasource$);
    this.$grid$.SetOptions(this.options);
    this.$grid$.SetResources(this.$resources$);
    this.$grid$.refresh(this.root)
  }, _destroy:function() {
    this.$grid$.destroy();
    $$$$6$$(this.root).empty()
  }, $_registerDataSourceListeners$:function() {
    null != this.$datasource$ && (this.$datasource$.on("expand", this.$_handleExpandEvent$.bind(this), this), this.$datasource$.on("collapse", this.$_handleCollapseEvent$.bind(this), this))
  }, $_handleExpandEvent$:function($event$$47_rowKey$$12$$) {
    $event$$47_rowKey$$12$$ = $event$$47_rowKey$$12$$.rowKey;
    this.$_getDatabody$().find("[" + this.$_getMappedAttribute$("key") + '\x3d"' + $event$$47_rowKey$$12$$ + '"]').find("." + this.$_getMappedStyle$("rowexpander")).ojRowExpander("handleExpandEvent")
  }, $_handleCollapseEvent$:function($event$$48_rowKey$$13$$) {
    $event$$48_rowKey$$13$$ = $event$$48_rowKey$$13$$.rowKey;
    this.$_getDatabody$().find("[" + this.$_getMappedAttribute$("key") + '\x3d"' + $event$$48_rowKey$$13$$ + '"]').find("." + this.$_getMappedStyle$("rowexpander")).ojRowExpander("handleCollapseEvent")
  }, $_isResizeEnabled$:function($axis$$7$$, $direction$$6$$) {
    return"disable" !== this.options.header[$axis$$7$$].resizable[$direction$$6$$]
  }, $_addContextMenu$:function() {
    var $self$$33$$, $menuContainer$$, $listItems_resizeMenu$$ = null, $sortMenu_temp$$ = null, $moveMenu$$ = null;
    $self$$33$$ = this;
    if(null == this.options.contextMenu.menu) {
      if(null != this.$datasource$) {
        $menuContainer$$ = $$$$6$$("\x3cul\x3e");
        $menuContainer$$.css("display", "none").attr("id", this.$rootId$ + "contextmenu");
        $$$$6$$(this.root).append($menuContainer$$);
        if(this.$_isResizeEnabled$("column", "width") || this.$_isResizeEnabled$("column", "height") || this.$_isResizeEnabled$("row", "width") || this.$_isResizeEnabled$("row", "height")) {
          $listItems_resizeMenu$$ = $$$$6$$(this.$_buildContextMenuListItem$("resize")).append($$$$6$$("\x3cul\x3e\x3c/ul\x3e").append($$$$6$$(this.$_buildContextMenuListItem$("resizeWidth"))).append($$$$6$$(this.$_buildContextMenuListItem$("resizeHeight"))))
        }
        switch(this.$datasource$.$getCapability$("sort")) {
          case "none":
            break;
          case "column":
            $sortMenu_temp$$ = $$$$6$$(this.$_buildContextMenuListItem$("sortCol")).append($$$$6$$("\x3cul\x3e\x3c/ul\x3e").append($$$$6$$(this.$_buildContextMenuListItem$("sortColAsc"))).append($$$$6$$(this.$_buildContextMenuListItem$("sortColDsc"))));
            break;
          case "row":
            $sortMenu_temp$$ = $$$$6$$(this.$_buildContextMenuListItem$("sortRow")).append($$$$6$$("\x3cul\x3e\x3c/ul\x3e").append($$$$6$$(this.$_buildContextMenuListItem$("sortRowAsc"))).append($$$$6$$(this.$_buildContextMenuListItem$("sortRowDsc"))));
            break;
          default:
            $sortMenu_temp$$ = $$$$6$$(this.$_buildContextMenuListItem$("sortCol")).append($$$$6$$("\x3cul\x3e\x3c/ul\x3e").append($$$$6$$(this.$_buildContextMenuListItem$("sortColAsc"))).append($$$$6$$(this.$_buildContextMenuListItem$("sortColDsc")))), $sortMenu_temp$$ = $sortMenu_temp$$.add($$$$6$$(this.$_buildContextMenuListItem$("sortRow")).append($$$$6$$("\x3cul\x3e\x3c/ul\x3e").append($$$$6$$(this.$_buildContextMenuListItem$("sortRowAsc"))).append($$$$6$$(this.$_buildContextMenuListItem$("sortRowDsc")))))
        }
        switch(this.$datasource$.$getCapability$("move")) {
          case "none":
            break;
          default:
            $moveMenu$$ = $$$$6$$(this.$_buildContextMenuListItem$("cut")).add($$$$6$$(this.$_buildContextMenuListItem$("paste")))
        }
        $menuContainer$$.append($listItems_resizeMenu$$).append($sortMenu_temp$$).append($moveMenu$$);
        $menuContainer$$.ojMenu();
        this._setOption("contextMenu", {menu:$menuContainer$$.attr("id")});
        $menuContainer$$.on("ojbeforeshow", this.$_handleContextMenuBeforeShow$.bind(this));
        $menuContainer$$.on("ojselect", this.$_handleContextMenuSelect$.bind(this))
      }
    }else {
      $menuContainer$$ = $$$$6$$("#" + this.options.contextMenu.menu), $listItems_resizeMenu$$ = $menuContainer$$.find("[data-oj-command]"), $listItems_resizeMenu$$.each(function() {
        var $command$$;
        0 === $$$$6$$(this).children("a").length && ($command$$ = $$$$6$$(this).attr("data-oj-command").split("-"), $$$$6$$(this).prepend($self$$33$$.$_buildContextMenuLabel$($command$$[$command$$.length - 1])))
      }), $menuContainer$$.ojMenu("refresh"), $menuContainer$$.on("ojbeforeshow", this.$_handleContextMenuBeforeShow$.bind(this)), $menuContainer$$.on("ojselect", this.$_handleContextMenuSelect$.bind(this))
    }
  }, $_buildContextMenuListItem$:function($command$$1$$) {
    return"\x3cli data-oj-command\x3d" + this.$_getMappedCommand$($command$$1$$) + "\x3e" + this.$_buildContextMenuLabel$($command$$1$$) + "\x3c/li\x3e"
  }, $_buildContextMenuLabel$:function($command$$2$$) {
    return'\x3ca href\x3d"#"\x3e' + this.$_getTranslation$($command$$2$$) + "\x3c/a\x3e"
  }, $_getContextMenu$:function() {
    return document.getElementById(this.options.contextMenu.menu)
  }, $_getTranslation$:function($key$$51$$, $args$$13$$) {
    return this.$getTranslatedString$($key$$51$$, $args$$13$$)
  }, $_handleResizeDialog$:function() {
    var $value$$139$$ = $$$$6$$("#" + this.$rootId$ + "spinner").ojInputNumber("option", "value");
    $$$$6$$("#" + this.$rootId$ + "dialog").ojDialog("destroy");
    this.$grid$.handleContextMenuReturn(this.$contextMenuEvent$, this.$menuItemFunction$, $value$$139$$);
    this.$contextMenuEvent$.target.focus()
  }, $_handleContextMenuSelect$:function($event$$50$$, $ui$$2$$) {
    var $dialog_parent$$24$$, $spinner$$, $rootId$$1$$, $initialSize$$;
    $rootId$$1$$ = $$$$6$$(this.root).attr("id");
    this.$menuItemFunction$ = $ui$$2$$.item.attr("data-oj-command");
    if(this.$menuItemFunction$ === this.$_getMappedCommand$("sortColAsc") || this.$menuItemFunction$ === this.$_getMappedCommand$("sortColDsc") || this.$menuItemFunction$ === this.$_getMappedCommand$("cut") || this.$menuItemFunction$ === this.$_getMappedCommand$("paste")) {
      this.$grid$.handleContextMenuReturn(this.$contextMenuEvent$, this.$menuItemFunction$, null)
    }else {
      if(this.$menuItemFunction$ === this.$_getMappedCommand$("resizeWidth") || this.$menuItemFunction$ === this.$_getMappedCommand$("resizeHeight")) {
        $dialog_parent$$24$$ = this.$_findFirstAncestor$($$$$6$$(this.$contextMenuEvent$.target), "oj-datagrid-headercell"), $initialSize$$ = null != $dialog_parent$$24$$ ? this.$menuItemFunction$ === this.$_getMappedCommand$("resizeWidth") ? $dialog_parent$$24$$.outerWidth() : $dialog_parent$$24$$.outerHeight() : this.$menuItemFunction$ === this.$_getMappedCommand$("resizeWidth") ? $$$$6$$(this.$contextMenuEvent$.target).outerWidth() : $$$$6$$(this.$contextMenuEvent$.target).outerHeight(), $spinner$$ = 
        $$$$6$$("\x3cinput\x3e"), $spinner$$.attr("id", $rootId$$1$$ + "spinner"), $dialog_parent$$24$$ = $$$$6$$("\x3cdiv\x3e"), $dialog_parent$$24$$.attr("id", $rootId$$1$$ + "dialog"), $dialog_parent$$24$$.append($spinner$$), $spinner$$.ojInputNumber({value:$initialSize$$, max:250, min:20, step:1}), $dialog_parent$$24$$.ojDialog({buttons:{$OK$:this.$_handleResizeDialog$.bind(this)}, title:$ui$$2$$.item.text(), appendTo:this.root})
      }
    }
  }, $_handleContextMenuBeforeShow$:function($capabilities_cell_event$$51_header$$4$$) {
    var $contextMenu$$;
    $contextMenu$$ = $$$$6$$(this.$_getContextMenu$());
    this.$contextMenuEvent$ = $capabilities_cell_event$$51_header$$4$$.originalEvent.originalEvent;
    "keydown" === this.$contextMenuEvent$.type ? $contextMenu$$.ojMenu("option", "menuPosition", {my:"left top", at:"left bottom", of:this.$contextMenuEvent$.target}) : $contextMenu$$.ojMenu("option", "menuPosition", {my:"left top", at:"left bottom"});
    $capabilities_cell_event$$51_header$$4$$ = this.$_findFirstAncestor$($$$$6$$(this.$contextMenuEvent$.target).eq(0), this.$_getMappedStyle$("cell"));
    null != $capabilities_cell_event$$51_header$$4$$ ? $capabilities_cell_event$$51_header$$4$$ = this.$_getCellCapability$($capabilities_cell_event$$51_header$$4$$) : ($capabilities_cell_event$$51_header$$4$$ = this.$_findFirstAncestor$($$$$6$$(this.$contextMenuEvent$.target).eq(0), this.$_getMappedStyle$("headercell")), $capabilities_cell_event$$51_header$$4$$ = this.$_getHeaderCapability$($capabilities_cell_event$$51_header$$4$$));
    this.$_manageContextMenu$($capabilities_cell_event$$51_header$$4$$)
  }, $_addContextMenuCapability$:function($command$$3$$) {
    var $contextMenu$$1$$;
    $contextMenu$$1$$ = $$$$6$$(this.$_getContextMenu$());
    $contextMenu$$1$$.find("[data-oj-command\x3d" + $command$$3$$ + "]").hasClass("oj-disabled") || $contextMenu$$1$$.find("[data-oj-command\x3d" + $command$$3$$ + "]").addClass("oj-disabled")
  }, $_removeContextMenuCapability$:function($command$$4$$) {
    $$$$6$$(this.$_getContextMenu$()).find("[data-oj-command\x3d" + $command$$4$$ + "]").removeClass("oj-disabled")
  }, $_manageContextMenu$:function($capabilities$$1$$) {
    var $property$$17$$, $command$$5$$;
    for($property$$17$$ in $capabilities$$1$$) {
      $capabilities$$1$$.hasOwnProperty($property$$17$$) && ($command$$5$$ = this.$resources$.$getMappedCommand$($property$$17$$), "disable" === $capabilities$$1$$[$property$$17$$] ? this.$_addContextMenuCapability$($command$$5$$) : this.$_removeContextMenuCapability$($command$$5$$))
    }
  }, $_findFirstAncestor$:function($element$$29$$, $className$$6$$) {
    var $parents$$1$$;
    if($element$$29$$.hasClass($className$$6$$)) {
      return $element$$29$$
    }
    $parents$$1$$ = $element$$29$$.parents($className$$6$$);
    return 0 != $parents$$1$$.length ? $parents$$1$$.eq(0) : null
  }, $_findCellIndex$:function($columnIndex$$1_element$$30$$) {
    var $row$$15$$;
    $row$$15$$ = $columnIndex$$1_element$$30$$.parent();
    $columnIndex$$1_element$$30$$ = $row$$15$$.children().index($columnIndex$$1_element$$30$$);
    return{rowIndex:$row$$15$$.parent().children().index($row$$15$$) - 1, columnIndex:$columnIndex$$1_element$$30$$}
  }, $_findHeadersByCellIndex$:function($columnHeader_index$$108$$) {
    var $rowHeader$$;
    $rowHeader$$ = this.$_getRowHeader$().children().eq(0).children().eq($columnHeader_index$$108$$.rowIndex + 1);
    $columnHeader_index$$108$$ = this.$_getColumnHeader$().children().eq(0).children().eq($columnHeader_index$$108$$.columnIndex);
    return{rowHeader:$rowHeader$$, columnHeader:$columnHeader_index$$108$$}
  }, $_getGrid$:function() {
    return $$$$6$$(this.root)
  }, $_getColumnHeader$:function() {
    return $$$$6$$("#" + this.$rootId$ + "\\:columnHeader")
  }, $_getRowHeader$:function() {
    return $$$$6$$("#" + this.$rootId$ + "\\:rowHeader")
  }, $_getDatabody$:function() {
    return $$$$6$$("#" + this.$rootId$ + "\\:databody")
  }, $_getDatabodyRows$:function() {
    return $$$$6$$("#" + this.$rootId$ + "\\:databody ." + this.$_getMappedStyle$("row"))
  }, $_getCellCapability$:function($capabilities$$2_cell$$1_index$$109$$) {
    var $columnHeader$$1_headers$$2$$, $rowHeader$$1$$;
    $capabilities$$2_cell$$1_index$$109$$ = this.$_findCellIndex$($capabilities$$2_cell$$1_index$$109$$);
    $columnHeader$$1_headers$$2$$ = this.$_findHeadersByCellIndex$($capabilities$$2_cell$$1_index$$109$$);
    $capabilities$$2_cell$$1_index$$109$$ = {$resizeWidth$:"disable", $resizeHeight$:"disable", $sortRow$:"disable", $sortCol$:"disable"};
    $rowHeader$$1$$ = $columnHeader$$1_headers$$2$$.rowHeader;
    $columnHeader$$1_headers$$2$$ = $columnHeader$$1_headers$$2$$.columnHeader;
    0 !== $columnHeader$$1_headers$$2$$.length && ("true" === $columnHeader$$1_headers$$2$$.attr(this.$_getMappedAttribute$("resizable")) && ($capabilities$$2_cell$$1_index$$109$$.resizeWidth = "enable"), "true" === $columnHeader$$1_headers$$2$$.attr(this.$_getMappedAttribute$("sortable")) && ($capabilities$$2_cell$$1_index$$109$$.sortCol = "enable"));
    0 !== $rowHeader$$1$$.length && ("true" === $rowHeader$$1$$.attr(this.$_getMappedAttribute$("resizable")) && ($capabilities$$2_cell$$1_index$$109$$.resizeHeight = "enable"), "true" === $rowHeader$$1$$.attr(this.$_getMappedAttribute$("sortable")) && ($capabilities$$2_cell$$1_index$$109$$.sortRow = "enable"));
    return $capabilities$$2_cell$$1_index$$109$$
  }, $_getHeaderCapability$:function($header$$5$$) {
    var $capabilities$$3$$;
    $capabilities$$3$$ = {$resizeWidth$:"disable", $resizeHeight$:"disable", $sortRow$:"disable", $sortCol$:"disable"};
    null !== $header$$5$$ && ($header$$5$$.hasClass(this.$_getMappedStyle$("colheadercell")) ? ("true" === $header$$5$$.attr(this.$_getMappedAttribute$("resizable")) && ($capabilities$$3$$.resizeWidth = "enable"), $capabilities$$3$$.resizeHeight = this.$_isResizeEnabled$("column", "height") ? "enable" : "disable", "true" === $header$$5$$.attr(this.$_getMappedAttribute$("sortable")) && ($capabilities$$3$$.sortCol = "enable")) : ("true" === $header$$5$$.attr(this.$_getMappedAttribute$("resizable")) && 
    ($capabilities$$3$$.resizeHeight = "enable"), $capabilities$$3$$.resizeWidth = this.$_isResizeEnabled$("row", "width") ? "enable" : "disable", "true" === $header$$5$$.attr(this.$_getMappedAttribute$("sortable")) && ($capabilities$$3$$.sortRow = "enable")));
    return $capabilities$$3$$
  }, $_setDataSource$:function() {
    var $data$$54$$, $rowHeader$$2$$;
    null != this.options.data ? ($data$$54$$ = this.options.data.data, $rowHeader$$2$$ = this.options.data.rowHeader, void 0 === $data$$54$$ && ($data$$54$$ = this.options.data), this.$datasource$ = $data$$54$$ instanceof Array ? new $oj$$6$$.$ArrayDataGridDataSource$($data$$54$$, {rowHeader:$rowHeader$$2$$}) : $data$$54$$.constructor.prototype instanceof $oj$$6$$.$Collection$ ? new $oj$$6$$.$CollectionDataGridDataSource$($data$$54$$, {rowHeader:$rowHeader$$2$$}) : $data$$54$$ instanceof $oj$$6$$.$TreeDataSource$ ? 
    new $oj$$6$$.$FlattenedTreeDataGridDataSource$($data$$54$$) : $data$$54$$) : this.$datasource$ = null
  }, $_modifyContext$:function($context$$35$$) {
    $context$$35$$.component = this
  }, $_registerRowExpander$:function($rowExpander$$2$$) {
    null != this.$grid$ && null != $rowExpander$$2$$ && this.$grid$.registerRowExpander($rowExpander$$2$$.element[0]);
    $rowExpander$$2$$.$_parseMetadata$ = this.$_parseMetadata$
  }, $_parseMetadata$:function($metadata$$8$$) {
    var $parsed$$1$$ = {};
    $parsed$$1$$.state = $metadata$$8$$.row.state;
    $parsed$$1$$.depth = $metadata$$8$$.row.depth;
    $parsed$$1$$.key = $metadata$$8$$.row.key;
    return $parsed$$1$$
  }, selection:function($ranges$$) {
    if(void 0 === $ranges$$) {
      return this.$grid$.GetSelection()
    }
    this.$grid$.SetSelection($ranges$$)
  }, getNodeBySubId:function($columnIndex$$2_index$$110_locator$$3$$) {
    var $axis$$8_subId$$, $className$$7_rowIndex$$3$$;
    if(null == $columnIndex$$2_index$$110_locator$$3$$) {
      return this.element ? this.element[0] : null
    }
    $axis$$8_subId$$ = $columnIndex$$2_index$$110_locator$$3$$.subId;
    switch($axis$$8_subId$$) {
      case "oj-datagrid-cell":
        $className$$7_rowIndex$$3$$ = this.$_getMappedStyle$("cell");
        break;
      case "oj-datagrid-header":
        $className$$7_rowIndex$$3$$ = this.$_getMappedStyle$("headercell");
        break;
      case "oj-datagrid-sort-ascending":
        $className$$7_rowIndex$$3$$ = "oj-datagrid-sort-ascending-icon";
        break;
      case "oj-datagrid-sort-descending":
        $className$$7_rowIndex$$3$$ = "oj-datagrid-sort-descending-icon";
        break;
      default:
        return null
    }
    if("oj-datagrid-cell" === $axis$$8_subId$$) {
      return $className$$7_rowIndex$$3$$ = $columnIndex$$2_index$$110_locator$$3$$.rowIndex, $columnIndex$$2_index$$110_locator$$3$$ = $columnIndex$$2_index$$110_locator$$3$$.columnIndex, this.$_getDatabodyRows$().eq($className$$7_rowIndex$$3$$).children().eq($columnIndex$$2_index$$110_locator$$3$$)
    }
    $axis$$8_subId$$ = $columnIndex$$2_index$$110_locator$$3$$.axis;
    $columnIndex$$2_index$$110_locator$$3$$ = $columnIndex$$2_index$$110_locator$$3$$.index;
    return"column" === $axis$$8_subId$$ ? $$$$6$$("#" + this.$rootId$ + "\\:columnHeader ." + $className$$7_rowIndex$$3$$).eq($columnIndex$$2_index$$110_locator$$3$$) : "row" === $axis$$8_subId$$ ? $$$$6$$("#" + this.$rootId$ + "\\:rowHeader ." + $className$$7_rowIndex$$3$$).eq($columnIndex$$2_index$$110_locator$$3$$) : null
  }, $_getMappedStyle$:function($key$$52$$) {
    return this.$resources$.$getMappedStyle$($key$$52$$)
  }, $_getMappedAttribute$:function($key$$53$$) {
    return this.$resources$.$getMappedAttribute$($key$$53$$)
  }, $_getMappedCommand$:function($key$$54$$) {
    return this.$resources$.$getMappedCommand$($key$$54$$)
  }});
  $oj$$6$$.$FlattenedTreeCellSet$ = function $$oj$$6$$$$FlattenedTreeCellSet$$($startRow$$, $endRow$$, $startColumn$$, $endColumn$$, $nodeSet$$21$$, $columns$$1$$, $metadataCallback$$) {
    $oj$$6$$.$Assert$.$assertNumber$($startRow$$, null);
    $oj$$6$$.$Assert$.$assertNumber$($endRow$$, null);
    $oj$$6$$.$Assert$.$assertNumber$($startColumn$$, null);
    $oj$$6$$.$Assert$.$assertNumber$($endColumn$$, null);
    $oj$$6$$.$Assert$.$assertArrayOrNull$($columns$$1$$);
    this.$m_startRow$ = $startRow$$;
    this.$m_endRow$ = $endRow$$;
    this.$m_startColumn$ = $startColumn$$;
    this.$m_endColumn$ = $endColumn$$;
    this.$m_nodeSet$ = $nodeSet$$21$$;
    this.$m_columns$ = $columns$$1$$;
    this.$m_callback$ = $metadataCallback$$
  };
  $goog$exportPath_$$("FlattenedTreeCellSet", $oj$$6$$.$FlattenedTreeCellSet$, $oj$$6$$);
  $oj$$6$$.$FlattenedTreeCellSet$.prototype.getData = function $$oj$$6$$$$FlattenedTreeCellSet$$$getData$($indexes$$2_row$$16_rowData$$5$$) {
    var $column$$4_columnKey$$1_relIndex$$;
    $column$$4_columnKey$$1_relIndex$$ = this.$_getRelIndexes$($indexes$$2_row$$16_rowData$$5$$);
    if(null == $column$$4_columnKey$$1_relIndex$$) {
      return null
    }
    $indexes$$2_row$$16_rowData$$5$$ = $column$$4_columnKey$$1_relIndex$$[0];
    $column$$4_columnKey$$1_relIndex$$ = $column$$4_columnKey$$1_relIndex$$[1];
    $oj$$6$$.$Assert$.assert($indexes$$2_row$$16_rowData$$5$$ < this.$m_nodeSet$.$getStart$() + this.$m_nodeSet$.$getCount$() && $column$$4_columnKey$$1_relIndex$$ < this.$m_columns$.length);
    $column$$4_columnKey$$1_relIndex$$ = this.$m_columns$[$column$$4_columnKey$$1_relIndex$$];
    $indexes$$2_row$$16_rowData$$5$$ = this.$m_nodeSet$.getData($indexes$$2_row$$16_rowData$$5$$);
    return null != $indexes$$2_row$$16_rowData$$5$$ ? $indexes$$2_row$$16_rowData$$5$$.get ? $indexes$$2_row$$16_rowData$$5$$.get($column$$4_columnKey$$1_relIndex$$) : $indexes$$2_row$$16_rowData$$5$$[$column$$4_columnKey$$1_relIndex$$] : null
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getData", {getData:$oj$$6$$.$FlattenedTreeCellSet$.prototype.getData});
  $oj$$6$$.$FlattenedTreeCellSet$.prototype.getMetadata = function $$oj$$6$$$$FlattenedTreeCellSet$$$getMetadata$($indexes$$3_row$$17_rowMetadata$$) {
    var $column$$5_columnKey$$2_keys$$10_relIndex$$1$$;
    $column$$5_columnKey$$2_keys$$10_relIndex$$1$$ = this.$_getRelIndexes$($indexes$$3_row$$17_rowMetadata$$);
    if(null == $column$$5_columnKey$$2_keys$$10_relIndex$$1$$) {
      return null
    }
    $indexes$$3_row$$17_rowMetadata$$ = $column$$5_columnKey$$2_keys$$10_relIndex$$1$$[0];
    $column$$5_columnKey$$2_keys$$10_relIndex$$1$$ = $column$$5_columnKey$$2_keys$$10_relIndex$$1$$[1];
    $oj$$6$$.$Assert$.assert($indexes$$3_row$$17_rowMetadata$$ < this.$m_nodeSet$.$getStart$() + this.$m_nodeSet$.$getCount$() && $column$$5_columnKey$$2_keys$$10_relIndex$$1$$ < this.$m_columns$.length);
    $column$$5_columnKey$$2_keys$$10_relIndex$$1$$ = this.$m_columns$[$column$$5_columnKey$$2_keys$$10_relIndex$$1$$];
    $indexes$$3_row$$17_rowMetadata$$ = this.$m_nodeSet$.getMetadata($indexes$$3_row$$17_rowMetadata$$);
    var $metadata$$9_rowKey$$14$$ = $indexes$$3_row$$17_rowMetadata$$.key;
    $column$$5_columnKey$$2_keys$$10_relIndex$$1$$ = {row:$metadata$$9_rowKey$$14$$, column:$column$$5_columnKey$$2_keys$$10_relIndex$$1$$};
    null != this.$m_callback$ && this.$m_callback$.call(null, $metadata$$9_rowKey$$14$$, $indexes$$3_row$$17_rowMetadata$$);
    $metadata$$9_rowKey$$14$$ = {};
    $metadata$$9_rowKey$$14$$.row = $indexes$$3_row$$17_rowMetadata$$;
    $metadata$$9_rowKey$$14$$.keys = $column$$5_columnKey$$2_keys$$10_relIndex$$1$$;
    return $metadata$$9_rowKey$$14$$
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getMetadata", {getMetadata:$oj$$6$$.$FlattenedTreeCellSet$.prototype.getMetadata});
  $oj$$6$$.$FlattenedTreeCellSet$.prototype.$_getRelIndexes$ = function $$oj$$6$$$$FlattenedTreeCellSet$$$$_getRelIndexes$$($column$$6_indexes$$4$$) {
    var $row$$18$$;
    $oj$$6$$.$Assert$.$assertObject$($column$$6_indexes$$4$$);
    if(null == this.$m_nodeSet$ || 0 == this.$m_nodeSet$.length) {
      return null
    }
    $row$$18$$ = $column$$6_indexes$$4$$.row - this.$m_startRow$ + this.$m_nodeSet$.$getStart$();
    $column$$6_indexes$$4$$ = $column$$6_indexes$$4$$.column;
    $oj$$6$$.$Assert$.$assertNumber$($row$$18$$, null);
    $oj$$6$$.$Assert$.$assertNumber$($column$$6_indexes$$4$$, null);
    $oj$$6$$.$Assert$.assert(0 <= $row$$18$$ && 0 <= $column$$6_indexes$$4$$);
    return[$row$$18$$, $column$$6_indexes$$4$$]
  };
  $oj$$6$$.$FlattenedTreeCellSet$.prototype.$getStart$ = function $$oj$$6$$$$FlattenedTreeCellSet$$$$getStart$$($axis$$9$$) {
    return"row" === $axis$$9$$ ? this.$m_startRow$ : "column" === $axis$$9$$ ? this.$m_startColumn$ : 0
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getStart", {$getStart$:$oj$$6$$.$FlattenedTreeCellSet$.prototype.$getStart$});
  $oj$$6$$.$FlattenedTreeCellSet$.prototype.$getCount$ = function $$oj$$6$$$$FlattenedTreeCellSet$$$$getCount$$($axis$$10$$) {
    return"row" === $axis$$10$$ ? Math.min(this.$m_endRow$ - this.$m_startRow$, this.$m_nodeSet$.$getCount$()) : "column" === $axis$$10$$ ? this.$m_endColumn$ - this.$m_startColumn$ : 0
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getCount", {$getCount$:$oj$$6$$.$FlattenedTreeCellSet$.prototype.$getCount$});
  $oj$$6$$.$FlattenedTreeHeaderSet$ = function $$oj$$6$$$$FlattenedTreeHeaderSet$$($start$$23$$, $end$$6$$, $headers$$3$$, $nodeSet$$22$$, $rowHeader$$3$$) {
    $oj$$6$$.$Assert$.$assertNumber$($start$$23$$, null);
    $oj$$6$$.$Assert$.$assertNumber$($end$$6$$, null);
    $oj$$6$$.$Assert$.$assertArrayOrNull$($headers$$3$$);
    this.$m_start$ = $start$$23$$;
    this.$m_end$ = $end$$6$$;
    this.$m_headers$ = $headers$$3$$;
    this.$m_nodeSet$ = $nodeSet$$22$$;
    this.$m_rowHeader$ = $rowHeader$$3$$
  };
  $goog$exportPath_$$("FlattenedTreeHeaderSet", $oj$$6$$.$FlattenedTreeHeaderSet$, $oj$$6$$);
  $oj$$6$$.$FlattenedTreeHeaderSet$.prototype.getData = function $$oj$$6$$$$FlattenedTreeHeaderSet$$$getData$($index$$111_rowData$$6$$) {
    $oj$$6$$.$Assert$.assert($index$$111_rowData$$6$$ <= this.$m_end$ && $index$$111_rowData$$6$$ >= this.$m_start$);
    return null != this.$m_rowHeader$ && null != this.$m_nodeSet$ ? ($index$$111_rowData$$6$$ = this.$m_nodeSet$.getData($index$$111_rowData$$6$$), null != $index$$111_rowData$$6$$ ? $index$$111_rowData$$6$$.get(this.$m_rowHeader$) : null) : this.$m_headers$[$index$$111_rowData$$6$$]
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getData", {getData:$oj$$6$$.$FlattenedTreeHeaderSet$.prototype.getData});
  $oj$$6$$.$FlattenedTreeHeaderSet$.prototype.getMetadata = function $$oj$$6$$$$FlattenedTreeHeaderSet$$$getMetadata$($index$$112$$) {
    return null != this.$m_rowHeader$ && null != this.$m_nodeSet$ ? this.$m_nodeSet$.getMetadata($index$$112$$) : {key:this.getData($index$$112$$)}
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getMetadata", {getMetadata:$oj$$6$$.$FlattenedTreeHeaderSet$.prototype.getMetadata});
  $oj$$6$$.$FlattenedTreeHeaderSet$.prototype.$getCount$ = function $$oj$$6$$$$FlattenedTreeHeaderSet$$$$getCount$$() {
    return null != this.$m_rowHeader$ && null != this.$m_nodeSet$ ? Math.min(this.$m_nodeSet$.$getCount$(), this.$m_end$ - this.$m_start$) : Math.max(0, this.$m_end$ - this.$m_start$)
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getCount", {$getCount$:$oj$$6$$.$FlattenedTreeHeaderSet$.prototype.$getCount$});
  $oj$$6$$.$ArrayCellSet$ = function $$oj$$6$$$$ArrayCellSet$$($startRow$$1$$, $endRow$$1$$, $startColumn$$1$$, $endColumn$$1$$, $callback$$77$$) {
    $oj$$6$$.$Assert$.$assertNumber$($startRow$$1$$, null);
    $oj$$6$$.$Assert$.$assertNumber$($endRow$$1$$, null);
    $oj$$6$$.$Assert$.$assertNumber$($startColumn$$1$$, null);
    $oj$$6$$.$Assert$.$assertNumber$($endColumn$$1$$, null);
    this.$m_startRow$ = $startRow$$1$$;
    this.$m_endRow$ = $endRow$$1$$;
    this.$m_startColumn$ = $startColumn$$1$$;
    this.$m_endColumn$ = $endColumn$$1$$;
    this.$m_callback$ = $callback$$77$$
  };
  $goog$exportPath_$$("ArrayCellSet", $oj$$6$$.$ArrayCellSet$, $oj$$6$$);
  $oj$$6$$.$ArrayCellSet$.prototype.getData = function $$oj$$6$$$$ArrayCellSet$$$getData$($indexes$$5$$) {
    return this.$m_callback$.$getCellData$($indexes$$5$$.row, $indexes$$5$$.column)
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getData", {getData:$oj$$6$$.$ArrayCellSet$.prototype.getData});
  $oj$$6$$.$ArrayCellSet$.prototype.getMetadata = function $$oj$$6$$$$ArrayCellSet$$$getMetadata$($indexes$$6$$) {
    return this.$m_callback$.$getCellMetadata$($indexes$$6$$.row, $indexes$$6$$.column)
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getMetadata", {getMetadata:$oj$$6$$.$ArrayCellSet$.prototype.getMetadata});
  $oj$$6$$.$ArrayCellSet$.prototype.$getStart$ = function $$oj$$6$$$$ArrayCellSet$$$$getStart$$($axis$$11$$) {
    return"row" == $axis$$11$$ ? this.$m_startRow$ : "column" == $axis$$11$$ ? this.$m_startColumn$ : -1
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStart", {$getStart$:$oj$$6$$.$ArrayCellSet$.prototype.$getStart$});
  $oj$$6$$.$ArrayCellSet$.prototype.$getCount$ = function $$oj$$6$$$$ArrayCellSet$$$$getCount$$($axis$$12$$) {
    return"row" === $axis$$12$$ ? Math.max(0, this.$m_endRow$ - this.$m_startRow$) : "column" === $axis$$12$$ ? Math.max(0, this.$m_endColumn$ - this.$m_startColumn$) : 0
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getCount", {$getCount$:$oj$$6$$.$ArrayCellSet$.prototype.$getCount$});
  $oj$$6$$.$ArrayCellSet$.prototype.$getStartRow$ = $JSCompiler_get$$("$m_startRow$");
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStartRow", {$getStartRow$:$oj$$6$$.$ArrayCellSet$.prototype.$getStartRow$});
  $oj$$6$$.$ArrayCellSet$.prototype.$getStartColumn$ = $JSCompiler_get$$("$m_startColumn$");
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStartColumn", {$getStartColumn$:$oj$$6$$.$ArrayCellSet$.prototype.$getStartColumn$});
  $oj$$6$$.$FlattenedTreeDataGridDataSource$ = function $$oj$$6$$$$FlattenedTreeDataGridDataSource$$($options$$196$$) {
    $oj$$6$$.$FlattenedTreeDataGridDataSource$.$superclass$.constructor.call(this, $options$$196$$)
  };
  $goog$exportPath_$$("FlattenedTreeDataGridDataSource", $oj$$6$$.$FlattenedTreeDataGridDataSource$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$FlattenedTreeDataGridDataSource$, $oj$$6$$.$FlattenedTreeDataSource$, "oj.FlattenedTreeDataGridDataSource");
  $oj$$6$$.$FlattenedTreeDataGridDataSource$.prototype.$Init$ = function $$oj$$6$$$$FlattenedTreeDataGridDataSource$$$$Init$$() {
    $oj$$6$$.$FlattenedTreeDataGridDataSource$.$superclass$.$Init$.call(this);
    this.$m_columns$ = $oj$$6$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getOption$.call(this, "columns");
    this.$m_rowHeader$ = $oj$$6$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getOption$.call(this, "rowHeader")
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.Init", {$Init$:$oj$$6$$.$FlattenedTreeDataGridDataSource$.prototype.$Init$});
  $oj$$6$$.$FlattenedTreeDataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$6$$$$FlattenedTreeDataGridDataSource$$$$getCountPrecision$$($axis$$13$$) {
    return"row" === $axis$$13$$ ? "estimate" : "actual"
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$6$$.$FlattenedTreeDataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$6$$.$FlattenedTreeDataGridDataSource$.prototype.$getCount$ = function $$oj$$6$$$$FlattenedTreeDataGridDataSource$$$$getCount$$($axis$$14$$) {
    return"row" === $axis$$14$$ ? -1 : "column" === $axis$$14$$ ? this.$m_columns$.length : 0
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.getCount", {$getCount$:$oj$$6$$.$FlattenedTreeDataGridDataSource$.prototype.$getCount$});
  $oj$$6$$.$FlattenedTreeDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$6$$$$FlattenedTreeDataGridDataSource$$$$fetchHeaders$$($headerRange$$2$$, $callbacks$$25$$, $callbackObjects$$6$$) {
    var $axis$$15$$, $headerSet$$1$$;
    $axis$$15$$ = $headerRange$$2$$.axis;
    if("column" === $axis$$15$$) {
      $headerSet$$1$$ = new $oj$$6$$.$FlattenedTreeHeaderSet$($headerRange$$2$$.start, $headerRange$$2$$.start + $headerRange$$2$$.count, this.$m_columns$)
    }else {
      if("row" === $axis$$15$$) {
        if(null != this.$m_rowHeader$) {
          this.$m_fetchHeaderRequest$ = {range:$headerRange$$2$$, callbacks:$callbacks$$25$$, callbackObjects:$callbackObjects$$6$$};
          return
        }
        $headerSet$$1$$ = new $oj$$6$$.$ArrayHeaderSet$($headerRange$$2$$.start, $headerRange$$2$$.start, $axis$$15$$, null)
      }
    }
    null != $headerSet$$1$$ && (null != $callbacks$$25$$ && null != $callbacks$$25$$.success) && (null == $callbackObjects$$6$$ && ($callbackObjects$$6$$ = {}), $callbacks$$25$$.success.call($callbackObjects$$6$$.success, $headerSet$$1$$, $headerRange$$2$$))
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$6$$.$FlattenedTreeDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$6$$.$FlattenedTreeDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$6$$$$FlattenedTreeDataGridDataSource$$$$fetchCells$$($cellRanges$$1$$, $callbacks$$26$$, $callbackObjects$$7$$) {
    var $i$$134$$, $cellRange$$2$$, $rowStart$$2$$, $rowCount$$1$$;
    for($i$$134$$ = 0;$i$$134$$ < $cellRanges$$1$$.length;$i$$134$$++) {
      if($cellRange$$2$$ = $cellRanges$$1$$[$i$$134$$], "row" == $cellRange$$2$$.axis) {
        $rowStart$$2$$ = $cellRange$$2$$.start;
        $rowCount$$1$$ = $cellRange$$2$$.count;
        break
      }
    }
    $oj$$6$$.$FlattenedTreeDataGridDataSource$.$superclass$.$fetchRows$.call(this, {start:$rowStart$$2$$, count:$rowCount$$1$$}, {success:function($nodeSet$$23$$) {
      this.$_handleFetchRowsSuccess$($nodeSet$$23$$, $cellRanges$$1$$, $callbacks$$26$$, $callbackObjects$$7$$)
    }.bind(this), error:function($status$$7$$) {
      this.$_handleFetchRowsError$($status$$7$$, {start:$rowStart$$2$$, count:$rowCount$$1$$}, $callbacks$$26$$, $callbackObjects$$7$$)
    }.bind(this)})
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$6$$.$FlattenedTreeDataGridDataSource$.prototype.$fetchCells$});
  $oj$$6$$.$FlattenedTreeDataGridDataSource$.prototype.keys = function $$oj$$6$$$$FlattenedTreeDataGridDataSource$$$keys$($colIndex_indexes$$7$$) {
    var $rowIndex$$4$$;
    $rowIndex$$4$$ = $colIndex_indexes$$7$$.row;
    $colIndex_indexes$$7$$ = $colIndex_indexes$$7$$.column;
    return $rowIndex$$4$$ > $oj$$6$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getFetchedRange$.call(this).end || $colIndex_indexes$$7$$ > this.$m_columns$.length ? null : {row:$oj$$6$$.$FlattenedTreeDataGridDataSource$.$superclass$.getKey.call(this, $rowIndex$$4$$), column:this.$m_columns$[$colIndex_indexes$$7$$]}
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.keys", {keys:$oj$$6$$.$FlattenedTreeDataGridDataSource$.prototype.keys});
  $oj$$6$$.$FlattenedTreeDataGridDataSource$.prototype.$indexes$ = function $$oj$$6$$$$FlattenedTreeDataGridDataSource$$$$indexes$$($colKey$$1_keys$$11$$) {
    var $rowIndex$$5_rowKey$$16$$, $colIndex$$1$$, $i$$135$$;
    $rowIndex$$5_rowKey$$16$$ = $colKey$$1_keys$$11$$.row;
    $colKey$$1_keys$$11$$ = $colKey$$1_keys$$11$$.column;
    $rowIndex$$5_rowKey$$16$$ = $oj$$6$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getIndex$.call(this, $rowIndex$$5_rowKey$$16$$);
    for($i$$135$$ = 0;$i$$135$$ < this.$m_columns$.length;$i$$135$$++) {
      if(this.$m_columns$[$i$$135$$] === $colKey$$1_keys$$11$$) {
        $colIndex$$1$$ = $i$$135$$;
        break
      }
    }
    return 0 <= $rowIndex$$5_rowKey$$16$$ && 0 <= $colIndex$$1$$ ? {row:$rowIndex$$5_rowKey$$16$$, column:$colIndex$$1$$} : null
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.indexes", {$indexes$:$oj$$6$$.$FlattenedTreeDataGridDataSource$.prototype.$indexes$});
  $oj$$6$$.$FlattenedTreeDataGridDataSource$.prototype.sort = function $$oj$$6$$$$FlattenedTreeDataGridDataSource$$$sort$($criteria$$5$$, $callbacks$$27$$, $callbackObjects$$8$$) {
    return $oj$$6$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getWrappedDataSource$.call(this).sort($criteria$$5$$, {success:function() {
      this.$_handleSortSuccess$($callbacks$$27$$, $callbackObjects$$8$$)
    }.bind(this), error:$callbacks$$27$$.error})
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.sort", {sort:$oj$$6$$.$FlattenedTreeDataGridDataSource$.prototype.sort});
  $oj$$6$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleSortSuccess$ = function $$oj$$6$$$$FlattenedTreeDataGridDataSource$$$$_handleSortSuccess$$($callbacks$$28$$, $callbackObjects$$9$$) {
    this.refresh();
    $callbacks$$28$$.success && (null == $callbackObjects$$9$$ && ($callbackObjects$$9$$ = {}), $callbacks$$28$$.success.call($callbackObjects$$9$$.success))
  };
  $oj$$6$$.$FlattenedTreeDataGridDataSource$.prototype.$getCapability$ = function $$oj$$6$$$$FlattenedTreeDataGridDataSource$$$$getCapability$$($feature$$7$$) {
    return $oj$$6$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getWrappedDataSource$.call(this).$getCapability$($feature$$7$$)
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.getCapability", {$getCapability$:$oj$$6$$.$FlattenedTreeDataGridDataSource$.prototype.$getCapability$});
  $oj$$6$$.$FlattenedTreeDataGridDataSource$.prototype.$insertMetadata$ = function $$oj$$6$$$$FlattenedTreeDataGridDataSource$$$$insertMetadata$$($key$$55$$, $metadata$$10$$) {
    $oj$$6$$.$FlattenedTreeDataGridDataSource$.$superclass$.$insertMetadata$.call(this, $key$$55$$, $metadata$$10$$)
  };
  $oj$$6$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleFetchRowsSuccess$ = function $$oj$$6$$$$FlattenedTreeDataGridDataSource$$$$_handleFetchRowsSuccess$$($cellSet$$1_nodeSet$$24$$, $cellRanges$$2$$, $callbacks$$29$$, $callbackObjects$$10$$) {
    var $headerRange$$3_i$$136$$, $cellRange$$3$$, $rowStart$$3$$, $rowCount$$2$$, $columnStart$$, $columnCount$$;
    for($headerRange$$3_i$$136$$ = 0;$headerRange$$3_i$$136$$ < $cellRanges$$2$$.length;$headerRange$$3_i$$136$$++) {
      $cellRange$$3$$ = $cellRanges$$2$$[$headerRange$$3_i$$136$$], "row" == $cellRange$$3$$.axis ? ($rowStart$$3$$ = $cellRange$$3$$.start, $rowCount$$2$$ = $cellRange$$3$$.count) : "column" == $cellRange$$3$$.axis && ($columnStart$$ = $cellRange$$3$$.start, $columnCount$$ = $cellRange$$3$$.count)
    }
    this.$m_fetchHeaderRequest$ && ($headerRange$$3_i$$136$$ = this.$m_fetchHeaderRequest$.range, $headerRange$$3_i$$136$$.start == $rowStart$$3$$ && $headerRange$$3_i$$136$$.count == $rowCount$$2$$ && this.$_handleRowHeaderFetchSuccess$($cellSet$$1_nodeSet$$24$$, $headerRange$$3_i$$136$$, this.$m_fetchHeaderRequest$.callbacks, this.$m_fetchHeaderRequest$.callbackObjects), this.$m_fetchHeaderRequest$ = null);
    $cellSet$$1_nodeSet$$24$$ = new $oj$$6$$.$FlattenedTreeCellSet$($rowStart$$3$$, $rowStart$$3$$ + $rowCount$$2$$, $columnStart$$, $columnStart$$ + $columnCount$$, $cellSet$$1_nodeSet$$24$$, this.$m_columns$, this.$insertMetadata$.bind(this));
    $callbacks$$29$$.success && (null == $callbackObjects$$10$$ && ($callbackObjects$$10$$ = {}), $callbacks$$29$$.success.call($callbackObjects$$10$$.success, $cellSet$$1_nodeSet$$24$$, $cellRanges$$2$$))
  };
  $oj$$6$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleFetchRowsError$ = function $$oj$$6$$$$FlattenedTreeDataGridDataSource$$$$_handleFetchRowsError$$($status$$8$$, $headerCallbacks_range$$14$$, $callbacks$$30$$, $callbackObjects$$11$$) {
    var $headerCallbackObjects_headerRange$$4$$;
    this.$m_fetchHeaderRequest$ && ($headerCallbackObjects_headerRange$$4$$ = this.$m_fetchHeaderRequest$.range, $headerCallbackObjects_headerRange$$4$$.start == $headerCallbacks_range$$14$$.start && $headerCallbackObjects_headerRange$$4$$.count == $headerCallbacks_range$$14$$.count && ($headerCallbacks_range$$14$$ = this.$m_fetchHeaderRequest$.callbacks, $headerCallbackObjects_headerRange$$4$$ = this.$m_fetchHeaderRequest$.callbackObjects, $headerCallbacks_range$$14$$.error && (null == $headerCallbackObjects_headerRange$$4$$ && 
    ($headerCallbackObjects_headerRange$$4$$ = {}), $headerCallbacks_range$$14$$.error.call($headerCallbackObjects_headerRange$$4$$.error, $status$$8$$))), this.$m_fetchHeaderRequest$ = null);
    $callbacks$$30$$.error && (null == $callbackObjects$$11$$ && ($callbackObjects$$11$$ = {}), $callbacks$$30$$.success.call($callbackObjects$$11$$.error, $status$$8$$))
  };
  $oj$$6$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleRowHeaderFetchSuccess$ = function $$oj$$6$$$$FlattenedTreeDataGridDataSource$$$$_handleRowHeaderFetchSuccess$$($headerSet$$2_nodeSet$$25$$, $headerRange$$5$$, $callbacks$$31$$, $callbackObjects$$12$$) {
    $headerSet$$2_nodeSet$$25$$ = new $oj$$6$$.$FlattenedTreeHeaderSet$($headerRange$$5$$.start, $headerRange$$5$$.start + $headerRange$$5$$.count, this.$m_columns$, $headerSet$$2_nodeSet$$25$$, this.$m_rowHeader$);
    $callbacks$$31$$.success && (null == $callbackObjects$$12$$ && ($callbackObjects$$12$$ = {}), $callbacks$$31$$.success.call($callbackObjects$$12$$.success, $headerSet$$2_nodeSet$$25$$, $headerRange$$5$$))
  };
  $oj$$6$$.$FlattenedTreeDataGridDataSource$.prototype.$insertRows$ = function $$oj$$6$$$$FlattenedTreeDataGridDataSource$$$$insertRows$$($cellSet$$2_insertAtIndex$$1$$, $insertAtRowKey$$, $event$$52_nodeSet$$26$$) {
    $cellSet$$2_insertAtIndex$$1$$ = new $oj$$6$$.$FlattenedTreeCellSet$($cellSet$$2_insertAtIndex$$1$$, $cellSet$$2_insertAtIndex$$1$$ + $event$$52_nodeSet$$26$$.$getCount$(), 0, this.$m_columns$.length, $event$$52_nodeSet$$26$$, this.$m_columns$, this.$insertMetadata$.bind(this));
    $event$$52_nodeSet$$26$$ = {source:this, operation:"insert"};
    $event$$52_nodeSet$$26$$.result = $cellSet$$2_insertAtIndex$$1$$;
    $event$$52_nodeSet$$26$$.keys = {row:$insertAtRowKey$$};
    $oj$$6$$.$FlattenedTreeDataGridDataSource$.$superclass$.handleEvent.call(this, "change", $event$$52_nodeSet$$26$$)
  };
  $oj$$6$$.$FlattenedTreeDataGridDataSource$.prototype.$removeRows$ = function $$oj$$6$$$$FlattenedTreeDataGridDataSource$$$$removeRows$$($rowKeys$$1$$) {
    var $event$$53$$ = {source:this, operation:"delete"};
    $event$$53$$.keys = $rowKeys$$1$$;
    $oj$$6$$.$FlattenedTreeDataGridDataSource$.$superclass$.handleEvent.call(this, "change", $event$$53$$)
  };
  $oj$$6$$.$FlattenedTreeDataGridDataSource$.prototype.$handleMaxCountReached$ = function $$oj$$6$$$$FlattenedTreeDataGridDataSource$$$$handleMaxCountReached$$($range$$15$$, $callbacks$$32$$) {
    $callbacks$$32$$.success.call(null, new $oj$$6$$.$EmptyNodeSet$(null, $range$$15$$.start))
  };
  $oj$$6$$.$PagingDataGridDataSource$ = function $$oj$$6$$$$PagingDataGridDataSource$$($dataSource$$2$$) {
    if(!($dataSource$$2$$ instanceof $oj$$6$$.$CollectionDataGridDataSource$)) {
      throw new $oj$$6$$.$Message$("Not a datagridatasource", "Not a datagridatasource", $oj$$6$$.$Message$.$SEVERITY_LEVEL$.ERROR);
    }
    this.$dataSource$ = $dataSource$$2$$;
    this.$_startIndex$ = 0;
    this.$Init$()
  };
  $goog$exportPath_$$("PagingDataGridDataSource", $oj$$6$$.$PagingDataGridDataSource$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$PagingDataGridDataSource$, $oj$$6$$.$PagingDataSource$, "oj.PagingDataGridDataSource");
  $oj$$6$$.$PagingDataGridDataSource$.prototype.$Init$ = function $$oj$$6$$$$PagingDataGridDataSource$$$$Init$$() {
    $oj$$6$$.$PagingDataGridDataSource$.$superclass$.$Init$.call(this)
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.Init", {$Init$:$oj$$6$$.$PagingDataGridDataSource$.prototype.$Init$});
  $oj$$6$$.$PagingDataGridDataSource$.prototype.fetch = function $$oj$$6$$$$PagingDataGridDataSource$$$fetch$($options$$198$$) {
    this.$_startIndex$ = $options$$198$$.startIndex;
    this.$dataSource$.$setPageSize$(this.$_currentPageSize$);
    this.$dataSource$.fetch($options$$198$$)
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.fetch", {fetch:$oj$$6$$.$PagingDataGridDataSource$.prototype.fetch});
  $oj$$6$$.$PagingDataGridDataSource$.prototype.hasMore = function $$oj$$6$$$$PagingDataGridDataSource$$$hasMore$() {
    return this.$dataSource$.hasMore()
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.hasMore", {hasMore:$oj$$6$$.$PagingDataGridDataSource$.prototype.hasMore});
  $oj$$6$$.$PagingDataGridDataSource$.prototype.next = function $$oj$$6$$$$PagingDataGridDataSource$$$next$() {
    this.$dataSource$.totalSize() > this.$_startIndex$ && (this.$_currentPageSize$ += this.$_pageSize$, this.$dataSource$.$setPageSize$(this.$_currentPageSize$), this.fetch({startIndex:this.$_startIndex$}))
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.next", {next:$oj$$6$$.$PagingDataGridDataSource$.prototype.next});
  $oj$$6$$.$PagingDataGridDataSource$.prototype.previous = function $$oj$$6$$$$PagingDataGridDataSource$$$previous$() {
    if(0 != this.$_startIndex$ || -1 != this.$_startIndex$) {
      this.$_startIndex$ -= this.$_pageSize$, this.$_startIndex$ = 0 > this.$_startIndex$ ? 0 : this.$_startIndex$, this.$_currentPageSize$ += this.$_pageSize$, this.$dataSource$.$setPageSize$(this.$_currentPageSize$), this.fetch({startIndex:this.$_startIndex$})
    }
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.previous", {previous:$oj$$6$$.$PagingDataGridDataSource$.prototype.previous});
  $oj$$6$$.$PagingDataGridDataSource$.prototype.$setPageSize$ = function $$oj$$6$$$$PagingDataGridDataSource$$$$setPageSize$$($n$$19$$) {
    this.$_pageSize$ = $n$$19$$;
    this.$_currentPageSize$ = this.$_startIndex$ + $n$$19$$;
    this.$dataSource$.$setPageSize$(this.$_currentPageSize$)
  };
  $oj$$6$$.$PagingDataGridDataSource$.prototype.startIndex = $JSCompiler_get$$("$_startIndex$");
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.startIndex", {startIndex:$oj$$6$$.$PagingDataGridDataSource$.prototype.startIndex});
  $oj$$6$$.$PagingDataGridDataSource$.prototype.$getCount$ = function $$oj$$6$$$$PagingDataGridDataSource$$$$getCount$$($axis$$16$$) {
    return this.$dataSource$.$getCount$($axis$$16$$)
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getCount", {$getCount$:$oj$$6$$.$PagingDataGridDataSource$.prototype.$getCount$});
  $oj$$6$$.$PagingDataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$6$$$$PagingDataGridDataSource$$$$getCountPrecision$$($axis$$17$$) {
    return this.$dataSource$.$getCountPrecision$($axis$$17$$)
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$6$$.$PagingDataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$6$$.$PagingDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$6$$$$PagingDataGridDataSource$$$$fetchHeaders$$($headerRange$$6$$, $callbacks$$33$$, $callbackObjects$$13$$) {
    return this.$dataSource$.$fetchHeaders$($headerRange$$6$$, $callbacks$$33$$, $callbackObjects$$13$$)
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$6$$.$PagingDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$6$$.$PagingDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$6$$$$PagingDataGridDataSource$$$$fetchCells$$($cellRanges$$3$$, $callbacks$$34$$, $callbackObjects$$14$$) {
    return this.$dataSource$.$fetchCells$($cellRanges$$3$$, $callbacks$$34$$, $callbackObjects$$14$$)
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$6$$.$PagingDataGridDataSource$.prototype.$fetchCells$});
  $oj$$6$$.$PagingDataGridDataSource$.prototype.keys = function $$oj$$6$$$$PagingDataGridDataSource$$$keys$($indexes$$8$$) {
    return this.$dataSource$.keys($indexes$$8$$)
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.keys", {keys:$oj$$6$$.$PagingDataGridDataSource$.prototype.keys});
  $oj$$6$$.$PagingDataGridDataSource$.prototype.$indexes$ = function $$oj$$6$$$$PagingDataGridDataSource$$$$indexes$$($keys$$12$$) {
    return this.$dataSource$.$indexes$($keys$$12$$)
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.indexes", {$indexes$:$oj$$6$$.$PagingDataGridDataSource$.prototype.$indexes$});
  $oj$$6$$.$PagingDataGridDataSource$.prototype.on = function $$oj$$6$$$$PagingDataGridDataSource$$$on$($eventType$$28$$, $eventHandler$$6$$) {
    return this.$dataSource$.on($eventType$$28$$, $eventHandler$$6$$)
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.on", {on:$oj$$6$$.$PagingDataGridDataSource$.prototype.on});
  $oj$$6$$.$PagingDataGridDataSource$.prototype.off = function $$oj$$6$$$$PagingDataGridDataSource$$$off$($eventType$$29$$, $eventHandler$$7$$) {
    return this.$dataSource$.off($eventType$$29$$, $eventHandler$$7$$)
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.off", {off:$oj$$6$$.$PagingDataGridDataSource$.prototype.off});
  $oj$$6$$.$PagingDataGridDataSource$.prototype.$getCapability$ = function $$oj$$6$$$$PagingDataGridDataSource$$$$getCapability$$($feature$$8$$) {
    return this.$dataSource$.$getCapability$($feature$$8$$)
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getCapability", {$getCapability$:$oj$$6$$.$PagingDataGridDataSource$.prototype.$getCapability$});
  $oj$$6$$.$PagingDataGridDataSource$.prototype.size = function $$oj$$6$$$$PagingDataGridDataSource$$$size$() {
    return this.$dataSource$.size()
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.size", {size:$oj$$6$$.$PagingDataGridDataSource$.prototype.size});
  $oj$$6$$.$PagingDataGridDataSource$.prototype.sort = function $$oj$$6$$$$PagingDataGridDataSource$$$sort$($criteria$$6$$, $callbacks$$35$$, $callbackObjects$$15$$) {
    this.$dataSource$.sort($criteria$$6$$, $callbacks$$35$$, $callbackObjects$$15$$)
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.sort", {sort:$oj$$6$$.$PagingDataGridDataSource$.prototype.sort});
  $oj$$6$$.$PagingDataGridDataSource$.prototype.totalSize = function $$oj$$6$$$$PagingDataGridDataSource$$$totalSize$() {
    return this.$dataSource$.totalSize()
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.totalSize", {totalSize:$oj$$6$$.$PagingDataGridDataSource$.prototype.totalSize});
  $oj$$6$$.$PagingDataGridDataSource$.prototype.move = function $$oj$$6$$$$PagingDataGridDataSource$$$move$($moveKey$$1$$, $atKey$$1$$) {
    return this.$dataSource$.move($moveKey$$1$$, $atKey$$1$$)
  };
  $oj$$6$$.$ArrayHeaderSet$ = function $$oj$$6$$$$ArrayHeaderSet$$($start$$24$$, $end$$7$$, $axis$$18$$, $callback$$78$$) {
    $oj$$6$$.$Assert$.$assertNumber$($start$$24$$, null);
    $oj$$6$$.$Assert$.$assertNumber$($end$$7$$, null);
    this.$m_start$ = $start$$24$$;
    this.$m_end$ = $end$$7$$;
    this.$m_axis$ = $axis$$18$$;
    this.$m_callback$ = $callback$$78$$
  };
  $goog$exportPath_$$("ArrayHeaderSet", $oj$$6$$.$ArrayHeaderSet$, $oj$$6$$);
  $oj$$6$$.$ArrayHeaderSet$.prototype.getData = function $$oj$$6$$$$ArrayHeaderSet$$$getData$($index$$113$$) {
    if(null == this.$m_callback$) {
      return null
    }
    $oj$$6$$.$Assert$.assert($index$$113$$ <= this.$m_end$ && $index$$113$$ >= this.$m_start$);
    return this.$m_callback$.$getHeaderData$(this.$m_axis$, $index$$113$$)
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getData", {getData:$oj$$6$$.$ArrayHeaderSet$.prototype.getData});
  $oj$$6$$.$ArrayHeaderSet$.prototype.getMetadata = function $$oj$$6$$$$ArrayHeaderSet$$$getMetadata$($index$$114$$) {
    if(null == this.$m_callback$) {
      return null
    }
    $oj$$6$$.$Assert$.assert($index$$114$$ <= this.$m_end$ && $index$$114$$ >= this.$m_start$);
    return this.$m_callback$.$getHeaderMetadata$(this.$m_axis$, $index$$114$$)
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getMetadata", {getMetadata:$oj$$6$$.$ArrayHeaderSet$.prototype.getMetadata});
  $oj$$6$$.$ArrayHeaderSet$.prototype.$getCount$ = function $$oj$$6$$$$ArrayHeaderSet$$$$getCount$$() {
    return null == this.$m_callback$ ? 0 : Math.max(0, this.$m_end$ - this.$m_start$)
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getCount", {$getCount$:$oj$$6$$.$ArrayHeaderSet$.prototype.$getCount$});
  $oj$$6$$.$ArrayHeaderSet$.prototype.$getStart$ = $JSCompiler_get$$("$m_start$");
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getStart", {$getStart$:$oj$$6$$.$ArrayHeaderSet$.prototype.$getStart$})
});
