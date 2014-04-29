define("ojs/ojcore jquery ojs/internal-deps/datagrid/DvtDataGrid ojs/ojcomponentcore ojs/ojdatacollection-common ojs/ojinputnumber ojs/ojmenu ojs/ojdialog".split(" "), function($oj$$8$$, $$$$8$$, $DvtDataGrid$$1$$) {
  $oj$$8$$.$ArrayDataGridDataSource$ = function $$oj$$8$$$$ArrayDataGridDataSource$$($data$$51$$, $options$$207$$) {
    null != $options$$207$$ && (this.$rowHeaderKey$ = $options$$207$$.rowHeader);
    $oj$$8$$.$ArrayDataGridDataSource$.$superclass$.constructor.call(this, $data$$51$$)
  };
  $goog$exportPath_$$("ArrayDataGridDataSource", $oj$$8$$.$ArrayDataGridDataSource$, $oj$$8$$);
  $oj$$8$$.$Object$.$createSubclass$($oj$$8$$.$ArrayDataGridDataSource$, $oj$$8$$.$DataGridDataSource$, "oj.ArrayDataGridDataSource");
  $oj$$8$$.$ArrayDataGridDataSource$.prototype.Init = function $$oj$$8$$$$ArrayDataGridDataSource$$$Init$() {
    this.columns = this.$_getColumnsForScaffolding$(this.data);
    this.$_initializeRowKeys$();
    $oj$$8$$.$ArrayDataGridDataSource$.$superclass$.Init.call(this)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.Init", {Init:$oj$$8$$.$ArrayDataGridDataSource$.prototype.Init});
  $oj$$8$$.$ArrayDataGridDataSource$.prototype.$_initializeRowKeys$ = function $$oj$$8$$$$ArrayDataGridDataSource$$$$_initializeRowKeys$$() {
    var $i$$136$$;
    this.$rowKeys$ = [];
    for($i$$136$$ = 0;$i$$136$$ < this.data.length;$i$$136$$ += 1) {
      this.$rowKeys$[$i$$136$$] = $i$$136$$.toString()
    }
  };
  $oj$$8$$.$ArrayDataGridDataSource$.prototype.$_getColumnsForScaffolding$ = function $$oj$$8$$$$ArrayDataGridDataSource$$$$_getColumnsForScaffolding$$($data$$52$$) {
    var $propertyName$$8$$, $columns$$;
    if("number" !== typeof $data$$52$$.length || 0 === $data$$52$$.length) {
      return[]
    }
    $columns$$ = [];
    for($propertyName$$8$$ in $data$$52$$[0]) {
      $data$$52$$[0].hasOwnProperty($propertyName$$8$$) && (void 0 != this.$rowHeaderKey$ && $propertyName$$8$$ == this.$rowHeaderKey$ || $columns$$.push($propertyName$$8$$))
    }
    return $columns$$
  };
  $oj$$8$$.$ArrayDataGridDataSource$.prototype.$getCount$ = function $$oj$$8$$$$ArrayDataGridDataSource$$$$getCount$$($axis$$2$$) {
    return"row" === $axis$$2$$ ? this.data.length : "column" === $axis$$2$$ ? this.columns.length : 0
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getCount", {$getCount$:$oj$$8$$.$ArrayDataGridDataSource$.prototype.$getCount$});
  $oj$$8$$.$ArrayDataGridDataSource$.prototype.$getHeaderData$ = function $$oj$$8$$$$ArrayDataGridDataSource$$$$getHeaderData$$($axis$$3$$, $index$$115$$) {
    if("row" === $axis$$3$$) {
      return void 0 != this.$rowHeaderKey$ ? this.data[$index$$115$$][this.$rowHeaderKey$] : 0 < this.data.length && this.data[0] instanceof Array ? void 0 === this.$rowKeys$[$index$$115$$] ? $index$$115$$.toString() : this.$rowKeys$[$index$$115$$] : null
    }
    if("column" === $axis$$3$$) {
      return this.columns[$index$$115$$]
    }
  };
  $oj$$8$$.$ArrayDataGridDataSource$.prototype.$getHeaderMetadata$ = function $$oj$$8$$$$ArrayDataGridDataSource$$$$getHeaderMetadata$$($axis$$4$$, $index$$116$$) {
    return"row" === $axis$$4$$ && void 0 != this.$rowHeaderKey$ ? {key:$index$$116$$.toString()} : {key:this.$getHeaderData$($axis$$4$$, $index$$116$$)}
  };
  $oj$$8$$.$ArrayDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$8$$$$ArrayDataGridDataSource$$$$fetchHeaders$$($headerRange$$1$$, $callbacks$$22$$, $callbackObjects$$3$$) {
    var $axis$$5_headerSet$$, $start$$22$$, $count$$25_end$$5$$;
    $axis$$5_headerSet$$ = $headerRange$$1$$.axis;
    $start$$22$$ = $headerRange$$1$$.start;
    $count$$25_end$$5$$ = $headerRange$$1$$.count;
    $oj$$8$$.$Assert$.assert("row" === $axis$$5_headerSet$$ || "column" === $axis$$5_headerSet$$);
    $oj$$8$$.$Assert$.assert($start$$22$$ < this.$getCount$($axis$$5_headerSet$$));
    $oj$$8$$.$Assert$.assert(0 < $count$$25_end$$5$$);
    $start$$22$$ = Math.max(0, $start$$22$$);
    $count$$25_end$$5$$ = "column" === $axis$$5_headerSet$$ ? Math.min(this.columns.length, $start$$22$$ + $count$$25_end$$5$$) : void 0 !== this.$rowHeaderKey$ || 0 < this.data.length && this.data[0] instanceof Array ? Math.min(this.data.length, $start$$22$$ + $count$$25_end$$5$$) : $start$$22$$;
    $axis$$5_headerSet$$ = new $oj$$8$$.$ArrayHeaderSet$($start$$22$$, $count$$25_end$$5$$, $axis$$5_headerSet$$, this);
    null != $callbacks$$22$$ && null != $callbacks$$22$$.success && (null == $callbackObjects$$3$$ && ($callbackObjects$$3$$ = {}), $callbacks$$22$$.success.call($callbackObjects$$3$$.success, $axis$$5_headerSet$$, $headerRange$$1$$))
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$8$$.$ArrayDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$8$$.$ArrayDataGridDataSource$.prototype.$getCellData$ = function $$oj$$8$$$$ArrayDataGridDataSource$$$$getCellData$$($row$$15$$, $column$$4$$) {
    return this.data[$row$$15$$][this.columns[$column$$4$$]]
  };
  $oj$$8$$.$ArrayDataGridDataSource$.prototype.$getCellMetadata$ = function $$oj$$8$$$$ArrayDataGridDataSource$$$$getCellMetadata$$($row$$16$$, $column$$5$$) {
    return{keys:{row:this.$rowKeys$[$row$$16$$], column:this.columns[$column$$5$$]}}
  };
  $oj$$8$$.$ArrayDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$8$$$$ArrayDataGridDataSource$$$$fetchCells$$($cellRanges$$, $callbacks$$23$$, $callbackObjects$$4$$) {
    var $cellSet_i$$137$$, $cellRange$$1$$, $rowStart$$1$$, $rowEnd$$, $colStart$$, $colEnd$$;
    for($cellSet_i$$137$$ = 0;$cellSet_i$$137$$ < $cellRanges$$.length;$cellSet_i$$137$$ += 1) {
      $cellRange$$1$$ = $cellRanges$$[$cellSet_i$$137$$], $oj$$8$$.$Assert$.assert("row" === $cellRange$$1$$.axis || "column" === $cellRange$$1$$.axis), $oj$$8$$.$Assert$.assert($cellRange$$1$$.start < this.$getCount$($cellRange$$1$$.axis)), $oj$$8$$.$Assert$.assert(0 < $cellRange$$1$$.count), "row" === $cellRange$$1$$.axis ? ($rowStart$$1$$ = $cellRange$$1$$.start, $rowEnd$$ = Math.min(this.data.length, $rowStart$$1$$ + $cellRange$$1$$.count)) : "column" === $cellRange$$1$$.axis && ($colStart$$ = 
      $cellRange$$1$$.start, $colEnd$$ = Math.min(this.columns.length, $colStart$$ + $cellRange$$1$$.count))
    }
    void 0 === $rowEnd$$ || void 0 === $colEnd$$ ? null != $callbacks$$23$$ && null != $callbacks$$23$$.error && (null == $callbackObjects$$4$$ && ($callbackObjects$$4$$ = {}), $callbacks$$23$$.error.call($callbackObjects$$4$$.error)) : ($cellSet_i$$137$$ = new $oj$$8$$.$ArrayCellSet$($rowStart$$1$$, $rowEnd$$, $colStart$$, $colEnd$$, this), null != $callbacks$$23$$ && null != $callbacks$$23$$.success && (null == $callbackObjects$$4$$ && ($callbackObjects$$4$$ = {}), $callbacks$$23$$.success.call($callbackObjects$$4$$.success, 
    $cellSet_i$$137$$, $cellRanges$$)))
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$8$$.$ArrayDataGridDataSource$.prototype.$fetchCells$});
  $oj$$8$$.$ArrayDataGridDataSource$.prototype.keys = function $$oj$$8$$$$ArrayDataGridDataSource$$$keys$($indexes$$1$$) {
    return{row:this.$rowKeys$[$indexes$$1$$.row], column:this.columns[$indexes$$1$$.column]}
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.keys", {keys:$oj$$8$$.$ArrayDataGridDataSource$.prototype.keys});
  $oj$$8$$.$ArrayDataGridDataSource$.prototype.$indexes$ = function $$oj$$8$$$$ArrayDataGridDataSource$$$$indexes$$($keys$$8$$) {
    var $columnKey$$ = $keys$$8$$.column;
    return{row:this.$rowKeys$.indexOf($keys$$8$$.row), column:this.columns.indexOf($columnKey$$)}
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.indexes", {$indexes$:$oj$$8$$.$ArrayDataGridDataSource$.prototype.$indexes$});
  $oj$$8$$.$ArrayDataGridDataSource$.prototype.sort = function $$oj$$8$$$$ArrayDataGridDataSource$$$sort$($criteria$$4_direction$$4$$, $callbacks$$24$$, $callbackObjects$$5$$) {
    var $sortArray$$ = [], $indices$$ = [], $newData$$2$$ = [], $newColumns$$ = [], $newRowKeys$$ = [], $axis$$6_i$$138$$, $headerIndex_headerKey$$;
    $axis$$6_i$$138$$ = $criteria$$4_direction$$4$$.axis;
    $headerIndex_headerKey$$ = $criteria$$4_direction$$4$$.key;
    $criteria$$4_direction$$4$$ = $criteria$$4_direction$$4$$.direction;
    null != $callbacks$$24$$ && null == $callbackObjects$$5$$ && ($callbackObjects$$5$$ = {});
    if("column" === $axis$$6_i$$138$$) {
      $headerIndex_headerKey$$ = this.columns.indexOf($headerIndex_headerKey$$);
      for($axis$$6_i$$138$$ = 0;$axis$$6_i$$138$$ < this.data.length;$axis$$6_i$$138$$ += 1) {
        $sortArray$$[$axis$$6_i$$138$$] = this.data[$axis$$6_i$$138$$][this.columns[$headerIndex_headerKey$$]], $indices$$[$axis$$6_i$$138$$] = $axis$$6_i$$138$$
      }
      $indices$$.sort(this.$_naturalSort$($sortArray$$, $criteria$$4_direction$$4$$));
      for($axis$$6_i$$138$$ = 0;$axis$$6_i$$138$$ < this.data.length;$axis$$6_i$$138$$ += 1) {
        $newData$$2$$[$axis$$6_i$$138$$] = this.data[$indices$$[$axis$$6_i$$138$$]], $newRowKeys$$[$axis$$6_i$$138$$] = this.$rowKeys$[$indices$$[$axis$$6_i$$138$$]]
      }
      this.data = $newData$$2$$;
      this.$rowKeys$ = $newRowKeys$$;
      null != $callbacks$$24$$ && null != $callbacks$$24$$.success && $callbacks$$24$$.success.call($callbackObjects$$5$$.success)
    }else {
      if("row" === $axis$$6_i$$138$$) {
        $headerIndex_headerKey$$ = this.$rowKeys$.indexOf($headerIndex_headerKey$$);
        for($axis$$6_i$$138$$ = 0;$axis$$6_i$$138$$ < this.columns.length;$axis$$6_i$$138$$ += 1) {
          $sortArray$$[$axis$$6_i$$138$$] = this.data[$headerIndex_headerKey$$][this.columns[$axis$$6_i$$138$$]], $indices$$[$axis$$6_i$$138$$] = $axis$$6_i$$138$$
        }
        $indices$$.sort(this.$_naturalSort$($sortArray$$, $criteria$$4_direction$$4$$));
        for($axis$$6_i$$138$$ = 0;$axis$$6_i$$138$$ < this.columns.length;$axis$$6_i$$138$$ += 1) {
          $newColumns$$[$axis$$6_i$$138$$] = this.columns[$indices$$[$axis$$6_i$$138$$]]
        }
        this.columns = $newColumns$$;
        null !== $callbacks$$24$$ && null != $callbacks$$24$$.success && $callbacks$$24$$.success.call($callbackObjects$$5$$.success)
      }else {
        null !== $callbacks$$24$$ && null != $callbacks$$24$$.error && $callbacks$$24$$.error.call($callbackObjects$$5$$.error, "Invalid axis value")
      }
    }
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.sort", {sort:$oj$$8$$.$ArrayDataGridDataSource$.prototype.sort});
  $oj$$8$$.$ArrayDataGridDataSource$.prototype.getCapability = function $$oj$$8$$$$ArrayDataGridDataSource$$$getCapability$($feature$$7$$) {
    return"sort" === $feature$$7$$ ? "column" : "move" === $feature$$7$$ ? "row" : null
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getCapability", {getCapability:$oj$$8$$.$ArrayDataGridDataSource$.prototype.getCapability});
  $oj$$8$$.$ArrayDataGridDataSource$.prototype.$_naturalSort$ = function $$oj$$8$$$$ArrayDataGridDataSource$$$$_naturalSort$$($sortArray$$1$$, $direction$$5$$) {
    if("ascending" === $direction$$5$$) {
      return function($a$$54$$, $b$$38$$) {
        var $as$$, $bs$$;
        $a$$54$$ = $sortArray$$1$$[$a$$54$$];
        $b$$38$$ = $sortArray$$1$$[$b$$38$$];
        $as$$ = isNaN($a$$54$$);
        $bs$$ = isNaN($b$$38$$);
        $a$$54$$ instanceof Date && ($a$$54$$ = $a$$54$$.toISOString(), $as$$ = !0);
        $b$$38$$ instanceof Date && ($b$$38$$ = $b$$38$$.toISOString(), $bs$$ = !0);
        return $as$$ && $bs$$ ? $a$$54$$ < $b$$38$$ ? -1 : $a$$54$$ === $b$$38$$ ? 0 : 1 : $as$$ ? 1 : $bs$$ ? -1 : $a$$54$$ - $b$$38$$
      }
    }
    if("descending" === $direction$$5$$) {
      return function($a$$55$$, $b$$39$$) {
        var $as$$1$$, $bs$$1$$;
        $a$$55$$ = $sortArray$$1$$[$a$$55$$];
        $b$$39$$ = $sortArray$$1$$[$b$$39$$];
        $as$$1$$ = isNaN($a$$55$$);
        $bs$$1$$ = isNaN($b$$39$$);
        $a$$55$$ instanceof Date && ($a$$55$$ = $a$$55$$.toISOString(), $as$$1$$ = !0);
        $b$$39$$ instanceof Date && ($b$$39$$ = $b$$39$$.toISOString(), $bs$$1$$ = !0);
        return $as$$1$$ && $bs$$1$$ ? $a$$55$$ > $b$$39$$ ? -1 : $a$$55$$ === $b$$39$$ ? 0 : 1 : $as$$1$$ ? -1 : $bs$$1$$ ? 1 : $b$$39$$ - $a$$55$$
      }
    }
  };
  $oj$$8$$.$ArrayDataGridDataSource$.prototype.move = function $$oj$$8$$$$ArrayDataGridDataSource$$$move$($moveKey$$, $atKey$$) {
    var $moveData_moveKeyIndex$$, $atKeyIndex_event$$43$$;
    $moveData_moveKeyIndex$$ = this.$rowKeys$.indexOf($moveKey$$);
    this.$rowKeys$.splice($moveData_moveKeyIndex$$, 1);
    $moveData_moveKeyIndex$$ = this.data.splice($moveData_moveKeyIndex$$, 1)[0];
    $atKeyIndex_event$$43$$ = {source:this, operation:"delete", keys:{row:$moveKey$$, column:null}};
    this.handleEvent("change", $atKeyIndex_event$$43$$);
    null === $atKey$$ ? (this.$rowKeys$.push($moveKey$$), this.data.push($moveData_moveKeyIndex$$)) : ($atKeyIndex_event$$43$$ = this.$rowKeys$.indexOf($atKey$$), this.$rowKeys$.splice($atKeyIndex_event$$43$$, 0, $moveKey$$), this.data.splice($atKeyIndex_event$$43$$, 0, $moveData_moveKeyIndex$$));
    $atKeyIndex_event$$43$$ = {source:this, operation:"insert", keys:{row:$moveKey$$, column:null}};
    this.handleEvent("change", $atKeyIndex_event$$43$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.move", {move:$oj$$8$$.$ArrayDataGridDataSource$.prototype.move});
  $oj$$8$$.$ArrayDataGridDataSource$.prototype.$getRowHeaderKey$ = $JSCompiler_get$$("$rowHeaderKey$");
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getRowHeaderKey", {$getRowHeaderKey$:$oj$$8$$.$ArrayDataGridDataSource$.prototype.$getRowHeaderKey$});
  $oj$$8$$.$ArrayDataGridDataSource$.prototype.$getColumns$ = $JSCompiler_get$$("columns");
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getColumns", {$getColumns$:$oj$$8$$.$ArrayDataGridDataSource$.prototype.$getColumns$});
  $oj$$8$$.$ArrayDataGridDataSource$.prototype.$getRowKeys$ = $JSCompiler_get$$("$rowKeys$");
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getRowKeys", {$getRowKeys$:$oj$$8$$.$ArrayDataGridDataSource$.prototype.$getRowKeys$});
  $oj$$8$$.$ArrayDataGridDataSource$.prototype.getData = $JSCompiler_get$$("data");
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getData", {getData:$oj$$8$$.$ArrayDataGridDataSource$.prototype.getData});
  $oj$$8$$.$DataGridResources$ = function $$oj$$8$$$$DataGridResources$$($rtlMode$$, $translationFunction$$) {
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
    this.$styles$.headercell = "oj-datagrid-header-cell";
    this.$styles$.headercellcontent = "oj-datagrid-header-cell-content";
    this.$styles$.rowheader = "oj-datagrid-row-header";
    this.$styles$.colheader = "oj-datagrid-column-header";
    this.$styles$.colheadercell = "oj-datagrid-column-header-cell";
    this.$styles$.rowheadercell = "oj-datagrid-row-header-cell";
    this.$styles$["scroller-mobile"] = "oj-datagrid-scroller-touch";
    this.$styles$.scroller = "oj-datagrid-scroller";
    this.$styles$.scrollers = "oj-datagrid-scrollers";
    this.$styles$.hover = "oj-hover";
    this.$styles$.active = "oj-active";
    this.$styles$.selected = "oj-selected";
    this.$styles$.disabled = "oj-disabled";
    this.$styles$.enabled = "oj-enabled";
    this.$styles$["default"] = "oj-default";
    this.$styles$.sortcontainer = "oj-datagrid-sort-icon-container";
    this.$styles$.sortascending = "oj-datagrid-sort-ascending-icon";
    this.$styles$.sortdescending = "oj-datagrid-sort-descending-icon";
    this.$styles$.icon = "oj-component-icon";
    this.$styles$.clickableicon = "oj-clickable-icon-nocontext";
    this.$styles$.info = "oj-helper-hidden-accessible";
    this.$styles$.rowexpander = "oj-rowexpander";
    this.$styles$.cut = "oj-datagrid-cut";
    this.$styles$.move = "oj-datagrid-move";
    this.$styles$.droptarget = "oj-datagrid-drop-target";
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
    this.attributes.container = $oj$$8$$.Components.$_OJ_CONTAINER_ATTR$
  };
  $goog$exportPath_$$("DataGridResources", $oj$$8$$.$DataGridResources$, $oj$$8$$);
  $oj$$8$$.$DataGridResources$.prototype.$isRTLMode$ = function $$oj$$8$$$$DataGridResources$$$$isRTLMode$$() {
    return"rtl" === this.$rtlMode$ ? !0 : !1
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.isRTLMode", {$isRTLMode$:$oj$$8$$.$DataGridResources$.prototype.$isRTLMode$});
  $oj$$8$$.$DataGridResources$.prototype.$getTranslatedText$ = function $$oj$$8$$$$DataGridResources$$$$getTranslatedText$$($key$$50$$, $args$$11$$) {
    return this.$translationFunction$($key$$50$$, $args$$11$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getTranslatedText", {$getTranslatedText$:$oj$$8$$.$DataGridResources$.prototype.$getTranslatedText$});
  $oj$$8$$.$DataGridResources$.prototype.$getMappedStyle$ = function $$oj$$8$$$$DataGridResources$$$$getMappedStyle$$($key$$51$$) {
    return null != $key$$51$$ ? this.$styles$[$key$$51$$] : null
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getMappedStyle", {$getMappedStyle$:$oj$$8$$.$DataGridResources$.prototype.$getMappedStyle$});
  $oj$$8$$.$DataGridResources$.prototype.$getMappedCommand$ = function $$oj$$8$$$$DataGridResources$$$$getMappedCommand$$($key$$52$$) {
    return null != $key$$52$$ ? this.$commands$[$key$$52$$] : null
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getMappedCommand", {$getMappedCommand$:$oj$$8$$.$DataGridResources$.prototype.$getMappedCommand$});
  $oj$$8$$.$DataGridResources$.prototype.$getMappedAttribute$ = function $$oj$$8$$$$DataGridResources$$$$getMappedAttribute$$($key$$53$$) {
    return null != $key$$53$$ ? this.attributes[$key$$53$$] : null
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getMappedAttribute", {$getMappedAttribute$:$oj$$8$$.$DataGridResources$.prototype.$getMappedAttribute$});
  $oj$$8$$.$__registerWidget$("oj.ojDataGrid", $$$$8$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{bandingInterval:{row:0, column:0}, data:null, emptyText:null, gridlines:{horizontal:"visible", vertical:"visible"}, scrollPosition:null, selectionMode:null, dnd:{$reorder$:"disable"}, header:{row:{className:null, renderer:null, resizable:{width:"disable", height:"disable"}, sortable:"auto", style:null, template:null}, column:{className:null, renderer:null, resizable:{width:"disable", 
  height:"disable"}, sortable:"auto", style:null, template:null}}, cell:{className:null, renderer:null, style:null, template:null}, select:null, resize:null, sort:null}, _create:function() {
    $$$$8$$(this.root).addClass("oj-component");
    this._super();
    this.root = this.element[0];
    this.$rootId$ = this.root.getAttribute("id");
    this.grid = new $DvtDataGrid$$1$$;
    this.$redrawSet$ = {data:"all", header:["className", "renderer", "style", "template"]}
  }, _init:function() {
    var $self$$35$$ = this;
    $$$$8$$(this.root).empty();
    this._super();
    this.$resources$ = new $oj$$8$$.$DataGridResources$(this.$_GetReadingDirection$(), this.$_getTranslation$.bind($self$$35$$));
    this.$_setDataSource$();
    this.$_addContextMenu$();
    null != this.$datasource$ && this.grid.SetDataSource(this.$datasource$);
    this.grid.SetOptions(this.options);
    this.grid.SetResources(this.$resources$);
    this.grid.SetCreateContextCallback(this.$_modifyContext$.bind($self$$35$$));
    this.grid.addListener("resize", function($details$$2$$) {
      $self$$35$$._trigger("resize", $details$$2$$.event, $details$$2$$.ui)
    });
    this.grid.addListener("select", function($details$$3$$) {
      $self$$35$$._trigger("select", $details$$3$$.event, $details$$3$$.ui)
    });
    this.grid.addListener("sort", function($details$$4$$) {
      $self$$35$$._trigger("sort", $details$$4$$.event, $details$$4$$.ui)
    });
    this.grid.addListener("keydown", function($details$$5$$) {
      $self$$35$$._trigger("keydown", $details$$5$$.event, $details$$5$$.ui)
    });
    this.grid.addListener("active", function($details$$6$$) {
      $self$$35$$._trigger("active", $details$$6$$.event, $details$$6$$.ui)
    });
    this.grid.render(this.root)
  }, refresh:function() {
    this._super();
    $$$$8$$(this.root).empty();
    this.$_setDataSource$();
    null != this.$datasource$ && this.grid.SetDataSource(this.$datasource$);
    this.grid.SetOptions(this.options);
    this.grid.SetResources(this.$resources$);
    this.grid.refresh(this.root)
  }, _destroy:function() {
    this.grid.destroy();
    $$$$8$$(this.root).empty()
  }, _setOptions:function($options$$208$$) {
    var $key$$54$$;
    if(this.$datasource$) {
      this.$_setUpdatedOptions$($options$$208$$)
    }else {
      for($key$$54$$ in $options$$208$$) {
        this._setOption($key$$54$$, $options$$208$$[$key$$54$$])
      }
    }
  }, $_setUpdatedOptions$:function($options$$209$$) {
    var $i$$139$$, $key$$55$$, $isRefresh$$, $elm$$, $itm$$;
    $isRefresh$$ = !1;
    for($key$$55$$ in $options$$209$$) {
      if($key$$55$$ in this.$redrawSet$) {
        if("header" == $key$$55$$) {
          for($elm$$ in $options$$209$$.header) {
            if("column" == $elm$$ || "row" == $elm$$ || "cell" == $elm$$) {
              for($itm$$ in $options$$209$$.header[$elm$$]) {
                for($i$$139$$ = 0;$i$$139$$ < this.$redrawSet$.header.length;$i$$139$$++) {
                  if($itm$$ == this.$redrawSet$.header[$i$$139$$]) {
                    $isRefresh$$ = !0;
                    break
                  }
                }
                if($isRefresh$$) {
                  break
                }
              }
            }
            if($isRefresh$$) {
              break
            }
          }
        }else {
          $isRefresh$$ = !0
        }
      }
    }
    for($key$$55$$ in $options$$209$$) {
      this._setOption($key$$55$$, $options$$209$$[$key$$55$$])
    }
    $isRefresh$$ ? this.refresh() : this.grid.UpdateOptions($options$$209$$)
  }, _setOption:function($key$$56$$, $value$$144$$) {
    this._super($key$$56$$, $value$$144$$)
  }, $_isResizeEnabled$:function($axis$$7$$, $direction$$6$$) {
    return"disable" !== this.options.header[$axis$$7$$].resizable[$direction$$6$$]
  }, $_addContextMenu$:function() {
    var $self$$36$$, $menuContainer$$, $listItems_resizeMenu$$ = null, $sortMenu_temp$$ = null, $moveMenu$$ = null;
    $self$$36$$ = this;
    if(null == this.options.contextMenu) {
      if(null != this.$datasource$) {
        $menuContainer$$ = $$$$8$$("\x3cul\x3e");
        $menuContainer$$.css("display", "none").attr("id", this.$rootId$ + "contextmenu");
        $$$$8$$(this.root).append($menuContainer$$);
        if(this.$_isResizeEnabled$("column", "width") || this.$_isResizeEnabled$("column", "height") || this.$_isResizeEnabled$("row", "width") || this.$_isResizeEnabled$("row", "height")) {
          $listItems_resizeMenu$$ = this.$_buildContextMenuItem$("resize")
        }
        switch(this.$datasource$.getCapability("sort")) {
          case "none":
            break;
          case "column":
            $sortMenu_temp$$ = this.$_buildContextMenuItem$("sortCol");
            break;
          case "row":
            $sortMenu_temp$$ = this.$_buildContextMenuItem$("sortRow");
            break;
          default:
            $sortMenu_temp$$ = this.$_buildContextMenuItem$("sortCol"), $sortMenu_temp$$ = $sortMenu_temp$$.add(this.$_buildContextMenuItem$("sortRow"))
        }
        if("enable" === this.options.dnd.reorder) {
          switch(this.$datasource$.getCapability("move")) {
            case "none":
              break;
            default:
              $moveMenu$$ = $$$$8$$(this.$_buildContextMenuListItem$("cut")).add($$$$8$$(this.$_buildContextMenuListItem$("paste")))
          }
        }
        $menuContainer$$.append($listItems_resizeMenu$$).append($sortMenu_temp$$).append($moveMenu$$);
        $menuContainer$$.ojMenu();
        this._setOption("contextMenu", "#" + $menuContainer$$.attr("id"));
        $menuContainer$$.on("ojbeforeshow", this.$_handleContextMenuBeforeShow$.bind(this));
        $menuContainer$$.on("ojselect", this.$_handleContextMenuSelect$.bind(this))
      }
    }else {
      $menuContainer$$ = $$$$8$$(this.options.contextMenu), $listItems_resizeMenu$$ = $menuContainer$$.find("[data-oj-command]"), $listItems_resizeMenu$$.each(function() {
        var $command$$;
        0 === $$$$8$$(this).children("a").length && ($command$$ = $$$$8$$(this).attr("data-oj-command").split("-"), $$$$8$$(this).replaceWith($self$$36$$.$_buildContextMenuItem$($command$$[$command$$.length - 1])))
      }), $menuContainer$$.ojMenu("refresh"), $menuContainer$$.on("ojbeforeshow", this.$_handleContextMenuBeforeShow$.bind(this)), $menuContainer$$.on("ojselect", this.$_handleContextMenuSelect$.bind(this))
    }
  }, $_buildContextMenuItem$:function($command$$1$$) {
    if("resize" === $command$$1$$) {
      return $$$$8$$(this.$_buildContextMenuListItem$("resize")).append($$$$8$$("\x3cul\x3e\x3c/ul\x3e").append($$$$8$$(this.$_buildContextMenuListItem$("resizeWidth"))).append($$$$8$$(this.$_buildContextMenuListItem$("resizeHeight"))))
    }
    if("sortCol" === $command$$1$$) {
      return $$$$8$$(this.$_buildContextMenuListItem$("sortCol")).append($$$$8$$("\x3cul\x3e\x3c/ul\x3e").append($$$$8$$(this.$_buildContextMenuListItem$("sortColAsc"))).append($$$$8$$(this.$_buildContextMenuListItem$("sortColDsc"))))
    }
    if("sortRow" === $command$$1$$) {
      return $$$$8$$(this.$_buildContextMenuListItem$("sortRow")).append($$$$8$$("\x3cul\x3e\x3c/ul\x3e").append($$$$8$$(this.$_buildContextMenuListItem$("sortRowAsc"))).append($$$$8$$(this.$_buildContextMenuListItem$("sortRowDsc"))))
    }
    if(-1 != Object.keys(this.$resources$.$commands$).indexOf($command$$1$$)) {
      return $$$$8$$(this.$_buildContextMenuListItem$($command$$1$$))
    }
  }, $_buildContextMenuListItem$:function($command$$2$$) {
    return"\x3cli data-oj-command\x3d" + this.$_getMappedCommand$($command$$2$$) + "\x3e" + this.$_buildContextMenuLabel$($command$$2$$) + "\x3c/li\x3e"
  }, $_buildContextMenuLabel$:function($command$$3_key$$57$$) {
    $command$$3_key$$57$$ = "label" + $command$$3_key$$57$$.charAt(0).toUpperCase() + $command$$3_key$$57$$.slice(1);
    return'\x3ca href\x3d"#"\x3e' + this.$_getTranslation$($command$$3_key$$57$$) + "\x3c/a\x3e"
  }, $_getContextMenu$:function() {
    return $$$$8$$(this.options.contextMenu).get(0)
  }, $_getTranslation$:function($key$$58$$, $args$$12$$) {
    return this.$getTranslatedString$($key$$58$$, $args$$12$$)
  }, $_handleResizeDialog$:function() {
    var $value$$145$$ = $$$$8$$("#" + this.$rootId$ + "spinner").ojInputNumber("option", "value");
    $$$$8$$("#" + this.$rootId$ + "dialog").ojDialog("destroy");
    $$$$8$$("#" + this.$rootId$ + "spinner").ojInputNumber("destroy");
    this.grid.handleContextMenuReturn(this.$contextMenuEvent$, this.$menuItemFunction$, $value$$145$$);
    this.$contextMenuEvent$.target.focus()
  }, $_buildResizeDialog$:function($title$$9$$, $initialSize$$) {
    var $dialog$$, $dialogBody$$, $spinner$$, $dialogFooter$$, $dialogOKButton$$;
    $dialog$$ = $$$$8$$("#" + this.$rootId$ + "dialog");
    $spinner$$ = $$$$8$$("#" + this.$rootId$ + "spinner");
    if(0 === $dialog$$.length || 0 === $spinner$$.length) {
      $dialog$$ = $$$$8$$("\x3cdiv\x3e"), $dialog$$.attr("id", this.$rootId$ + "dialog"), $dialog$$.attr("title", $title$$9$$), $dialogBody$$ = $$$$8$$('\x3cdiv class\x3d"oj-dialog-body"\x3e\x3c/div\x3e'), $dialogFooter$$ = $$$$8$$('\x3cdiv class\x3d"oj-dialog-footer"\x3e\x3c/div\x3e'), $dialog$$.append($dialogBody$$).append($dialogFooter$$), $spinner$$ = $$$$8$$('\x3cinput id\x3d"' + this.$rootId$ + 'spinner"/\x3e'), $dialogOKButton$$ = $$$$8$$("\x3cbutton\x3e"), $dialogBody$$.append($spinner$$), 
      $dialogFooter$$.append($dialogOKButton$$), $$$$8$$(this.root).append($dialog$$), $dialogOKButton$$.ojButton({$component$:"ojButton", label:"OK"}), $dialogOKButton$$.on("click", this.$_handleResizeDialog$.bind(this))
    }
    $spinner$$.ojInputNumber({$component$:"ojInputNumber", max:1E3, min:20, step:1, value:$initialSize$$});
    $dialog$$.ojDialog({initialVisibility:"show", position:{my:"center center", at:"center center", collision:"none", of:$$$$8$$(this.root)}})
  }, $_handleContextMenuSelect$:function($event$$45$$, $ui$$) {
    var $initialSize$$1_parent$$25$$;
    this.$menuItemFunction$ = $ui$$.item.attr("data-oj-command");
    if(this.$menuItemFunction$ === this.$_getMappedCommand$("sortColAsc") || this.$menuItemFunction$ === this.$_getMappedCommand$("sortColDsc") || this.$menuItemFunction$ === this.$_getMappedCommand$("cut") || this.$menuItemFunction$ === this.$_getMappedCommand$("paste")) {
      this.grid.handleContextMenuReturn(this.$contextMenuEvent$, this.$menuItemFunction$, null)
    }else {
      if(this.$menuItemFunction$ === this.$_getMappedCommand$("resizeWidth") || this.$menuItemFunction$ === this.$_getMappedCommand$("resizeHeight")) {
        $initialSize$$1_parent$$25$$ = this.$_findFirstAncestor$($$$$8$$(this.$contextMenuEvent$.target), "oj-datagrid-headercell"), $initialSize$$1_parent$$25$$ = null != $initialSize$$1_parent$$25$$ ? this.$menuItemFunction$ === this.$_getMappedCommand$("resizeWidth") ? $initialSize$$1_parent$$25$$.outerWidth() : $initialSize$$1_parent$$25$$.outerHeight() : this.$menuItemFunction$ === this.$_getMappedCommand$("resizeWidth") ? $$$$8$$(this.$contextMenuEvent$.target).outerWidth() : $$$$8$$(this.$contextMenuEvent$.target).outerHeight(), 
        this.$_buildResizeDialog$($ui$$.item.text(), $initialSize$$1_parent$$25$$)
      }
    }
  }, $_handleContextMenuBeforeShow$:function($capabilities_cell_event$$46_header$$4$$) {
    var $contextMenu$$;
    $contextMenu$$ = $$$$8$$(this.$_getContextMenu$());
    this.$contextMenuEvent$ = $capabilities_cell_event$$46_header$$4$$.originalEvent.originalEvent;
    "keydown" === this.$contextMenuEvent$.type ? $contextMenu$$.ojMenu("option", "menuPosition", {my:"left top", at:"left bottom", of:this.$contextMenuEvent$.target}) : $contextMenu$$.ojMenu("option", "menuPosition", {my:"left top", at:"left bottom"});
    $capabilities_cell_event$$46_header$$4$$ = this.$_findFirstAncestor$($$$$8$$(this.$contextMenuEvent$.target).eq(0), this.$_getMappedStyle$("cell"));
    null != $capabilities_cell_event$$46_header$$4$$ ? $capabilities_cell_event$$46_header$$4$$ = this.$_getCellCapability$($capabilities_cell_event$$46_header$$4$$) : ($capabilities_cell_event$$46_header$$4$$ = this.$_findFirstAncestor$($$$$8$$(this.$contextMenuEvent$.target).eq(0), this.$_getMappedStyle$("headercell")), $capabilities_cell_event$$46_header$$4$$ = this.$_getHeaderCapability$($capabilities_cell_event$$46_header$$4$$));
    this.$_manageContextMenu$($capabilities_cell_event$$46_header$$4$$)
  }, $_addContextMenuCapability$:function($command$$4$$) {
    var $contextMenu$$1$$;
    $contextMenu$$1$$ = $$$$8$$(this.$_getContextMenu$());
    $contextMenu$$1$$.find("[data-oj-command\x3d" + $command$$4$$ + "]").hasClass("oj-disabled") || $contextMenu$$1$$.find("[data-oj-command\x3d" + $command$$4$$ + "]").addClass("oj-disabled")
  }, $_removeContextMenuCapability$:function($command$$5$$) {
    $$$$8$$(this.$_getContextMenu$()).find("[data-oj-command\x3d" + $command$$5$$ + "]").removeClass("oj-disabled")
  }, $_manageContextMenu$:function($capabilities$$1$$) {
    var $property$$19$$, $command$$6$$;
    for($property$$19$$ in $capabilities$$1$$) {
      $capabilities$$1$$.hasOwnProperty($property$$19$$) && ($command$$6$$ = this.$resources$.$getMappedCommand$($property$$19$$), "disable" === $capabilities$$1$$[$property$$19$$] ? this.$_addContextMenuCapability$($command$$6$$) : this.$_removeContextMenuCapability$($command$$6$$))
    }
  }, $_findFirstAncestor$:function($element$$31$$, $className$$7$$) {
    var $parents$$1$$;
    if($element$$31$$.hasClass($className$$7$$)) {
      return $element$$31$$
    }
    $parents$$1$$ = $element$$31$$.parents("." + $className$$7$$);
    return 0 != $parents$$1$$.length ? $parents$$1$$.eq(0) : null
  }, $_findCellIndex$:function($columnIndex$$1_element$$32$$) {
    var $row$$17$$;
    $row$$17$$ = $columnIndex$$1_element$$32$$.parent();
    $columnIndex$$1_element$$32$$ = $row$$17$$.children().index($columnIndex$$1_element$$32$$);
    return{rowIndex:$row$$17$$.parent().children().index($row$$17$$) - 1, columnIndex:$columnIndex$$1_element$$32$$}
  }, $_findHeadersByCellIndex$:function($columnHeader_index$$117$$) {
    var $rowHeader$$;
    $rowHeader$$ = this.$_getRowHeader$().children().eq(0).children().eq($columnHeader_index$$117$$.rowIndex + 1);
    $columnHeader_index$$117$$ = this.$_getColumnHeader$().children().eq(0).children().eq($columnHeader_index$$117$$.columnIndex);
    return{rowHeader:$rowHeader$$, columnHeader:$columnHeader_index$$117$$}
  }, $_getGrid$:function() {
    return $$$$8$$(this.root)
  }, $_getColumnHeader$:function() {
    return $$$$8$$("#" + this.$rootId$ + "\\:columnHeader")
  }, $_getRowHeader$:function() {
    return $$$$8$$("#" + this.$rootId$ + "\\:rowHeader")
  }, $_getDatabody$:function() {
    return $$$$8$$("#" + this.$rootId$ + "\\:databody")
  }, $_getDatabodyRows$:function() {
    return $$$$8$$("#" + this.$rootId$ + "\\:databody ." + this.$_getMappedStyle$("row"))
  }, $_getCellCapability$:function($capabilities$$2_cell$$1_index$$118$$) {
    var $columnHeader$$1_headers$$2$$, $rowHeader$$1$$;
    $capabilities$$2_cell$$1_index$$118$$ = this.$_findCellIndex$($capabilities$$2_cell$$1_index$$118$$);
    $columnHeader$$1_headers$$2$$ = this.$_findHeadersByCellIndex$($capabilities$$2_cell$$1_index$$118$$);
    $capabilities$$2_cell$$1_index$$118$$ = {$resizeWidth$:"disable", $resizeHeight$:"disable", $sortRow$:"disable", $sortCol$:"disable"};
    $rowHeader$$1$$ = $columnHeader$$1_headers$$2$$.rowHeader;
    $columnHeader$$1_headers$$2$$ = $columnHeader$$1_headers$$2$$.columnHeader;
    0 !== $columnHeader$$1_headers$$2$$.length && ("true" === $columnHeader$$1_headers$$2$$.attr(this.$_getMappedAttribute$("resizable")) && ($capabilities$$2_cell$$1_index$$118$$.resizeWidth = "enable"), "true" === $columnHeader$$1_headers$$2$$.attr(this.$_getMappedAttribute$("sortable")) && ($capabilities$$2_cell$$1_index$$118$$.sortCol = "enable"));
    0 !== $rowHeader$$1$$.length && ("true" === $rowHeader$$1$$.attr(this.$_getMappedAttribute$("resizable")) && ($capabilities$$2_cell$$1_index$$118$$.resizeHeight = "enable"), "true" === $rowHeader$$1$$.attr(this.$_getMappedAttribute$("sortable")) && ($capabilities$$2_cell$$1_index$$118$$.sortRow = "enable"));
    return $capabilities$$2_cell$$1_index$$118$$
  }, $_getHeaderCapability$:function($header$$5$$) {
    var $capabilities$$3$$;
    $capabilities$$3$$ = {$resizeWidth$:"disable", $resizeHeight$:"disable", $sortRow$:"disable", $sortCol$:"disable"};
    null !== $header$$5$$ && ($header$$5$$.hasClass(this.$_getMappedStyle$("colheadercell")) ? ("true" === $header$$5$$.attr(this.$_getMappedAttribute$("resizable")) && ($capabilities$$3$$.resizeWidth = "enable"), $capabilities$$3$$.resizeHeight = this.$_isResizeEnabled$("column", "height") ? "enable" : "disable", "true" === $header$$5$$.attr(this.$_getMappedAttribute$("sortable")) && ($capabilities$$3$$.sortCol = "enable")) : ("true" === $header$$5$$.attr(this.$_getMappedAttribute$("resizable")) && 
    ($capabilities$$3$$.resizeHeight = "enable"), $capabilities$$3$$.resizeWidth = this.$_isResizeEnabled$("row", "width") ? "enable" : "disable", "true" === $header$$5$$.attr(this.$_getMappedAttribute$("sortable")) && ($capabilities$$3$$.sortRow = "enable")));
    return $capabilities$$3$$
  }, $_setDataSource$:function() {
    this.$datasource$ = null != this.options.data ? this.options.data : null
  }, $_modifyContext$:function($context$$34$$) {
    $context$$34$$.component = this
  }, $_setAccessibleContext$:function($context$$35$$) {
    this.grid.SetAccessibleContext($context$$35$$)
  }, selection:function($ranges$$) {
    if(void 0 === $ranges$$) {
      return this.grid.GetSelection()
    }
    this.grid.SetSelection($ranges$$)
  }, getNodeBySubId:function($columnIndex$$2_index$$119_locator$$4$$) {
    var $axis$$8_subId$$1$$, $className$$8_rowIndex$$3$$;
    if(null == $columnIndex$$2_index$$119_locator$$4$$) {
      return this.element ? this.element[0] : null
    }
    $axis$$8_subId$$1$$ = $columnIndex$$2_index$$119_locator$$4$$.subId;
    switch($axis$$8_subId$$1$$) {
      case "oj-datagrid-cell":
        $className$$8_rowIndex$$3$$ = this.$_getMappedStyle$("cell");
        break;
      case "oj-datagrid-header":
        $className$$8_rowIndex$$3$$ = this.$_getMappedStyle$("headercell");
        break;
      case "oj-datagrid-sort-ascending":
        $className$$8_rowIndex$$3$$ = "oj-datagrid-sort-ascending-icon";
        break;
      case "oj-datagrid-sort-descending":
        $className$$8_rowIndex$$3$$ = "oj-datagrid-sort-descending-icon";
        break;
      default:
        return null
    }
    if("oj-datagrid-cell" === $axis$$8_subId$$1$$) {
      return $className$$8_rowIndex$$3$$ = $columnIndex$$2_index$$119_locator$$4$$.rowIndex, $columnIndex$$2_index$$119_locator$$4$$ = $columnIndex$$2_index$$119_locator$$4$$.columnIndex, this.$_getDatabodyRows$().eq($className$$8_rowIndex$$3$$).children().eq($columnIndex$$2_index$$119_locator$$4$$)
    }
    $axis$$8_subId$$1$$ = $columnIndex$$2_index$$119_locator$$4$$.axis;
    $columnIndex$$2_index$$119_locator$$4$$ = $columnIndex$$2_index$$119_locator$$4$$.index;
    return"column" === $axis$$8_subId$$1$$ ? $$$$8$$("#" + this.$rootId$ + "\\:columnHeader ." + $className$$8_rowIndex$$3$$).eq($columnIndex$$2_index$$119_locator$$4$$) : "row" === $axis$$8_subId$$1$$ ? $$$$8$$("#" + this.$rootId$ + "\\:rowHeader ." + $className$$8_rowIndex$$3$$).eq($columnIndex$$2_index$$119_locator$$4$$) : null
  }, $_getMappedStyle$:function($key$$59$$) {
    return this.$resources$.$getMappedStyle$($key$$59$$)
  }, $_getMappedAttribute$:function($key$$60$$) {
    return this.$resources$.$getMappedAttribute$($key$$60$$)
  }, $_getMappedCommand$:function($key$$61$$) {
    return this.$resources$.$getMappedCommand$($key$$61$$)
  }});
  $oj$$8$$.$FlattenedTreeCellSet$ = function $$oj$$8$$$$FlattenedTreeCellSet$$($startRow$$, $endRow$$, $startColumn$$, $endColumn$$, $nodeSet$$22$$, $columns$$1$$) {
    $oj$$8$$.$Assert$.$assertNumber$($startRow$$, null);
    $oj$$8$$.$Assert$.$assertNumber$($endRow$$, null);
    $oj$$8$$.$Assert$.$assertNumber$($startColumn$$, null);
    $oj$$8$$.$Assert$.$assertNumber$($endColumn$$, null);
    $oj$$8$$.$Assert$.$assertArrayOrNull$($columns$$1$$);
    this.$m_startRow$ = $startRow$$;
    this.$m_endRow$ = $endRow$$;
    this.$m_startColumn$ = $startColumn$$;
    this.$m_endColumn$ = $endColumn$$;
    this.$m_nodeSet$ = $nodeSet$$22$$;
    this.$m_columns$ = $columns$$1$$
  };
  $goog$exportPath_$$("FlattenedTreeCellSet", $oj$$8$$.$FlattenedTreeCellSet$, $oj$$8$$);
  $oj$$8$$.$FlattenedTreeCellSet$.prototype.getData = function $$oj$$8$$$$FlattenedTreeCellSet$$$getData$($indexes$$2_row$$18_rowData$$4$$) {
    var $column$$6_columnKey$$1_relIndex$$;
    $column$$6_columnKey$$1_relIndex$$ = this.$_getRelIndexes$($indexes$$2_row$$18_rowData$$4$$);
    if(null == $column$$6_columnKey$$1_relIndex$$) {
      return null
    }
    $indexes$$2_row$$18_rowData$$4$$ = $column$$6_columnKey$$1_relIndex$$[0];
    $column$$6_columnKey$$1_relIndex$$ = $column$$6_columnKey$$1_relIndex$$[1];
    $oj$$8$$.$Assert$.assert($indexes$$2_row$$18_rowData$$4$$ < this.$m_nodeSet$.$getStart$() + this.$m_nodeSet$.$getCount$() && $column$$6_columnKey$$1_relIndex$$ < this.$m_columns$.length);
    $column$$6_columnKey$$1_relIndex$$ = this.$m_columns$[$column$$6_columnKey$$1_relIndex$$];
    $indexes$$2_row$$18_rowData$$4$$ = this.$m_nodeSet$.getData($indexes$$2_row$$18_rowData$$4$$);
    return null != $indexes$$2_row$$18_rowData$$4$$ ? $indexes$$2_row$$18_rowData$$4$$.get ? $indexes$$2_row$$18_rowData$$4$$.get($column$$6_columnKey$$1_relIndex$$) : $indexes$$2_row$$18_rowData$$4$$[$column$$6_columnKey$$1_relIndex$$] : null
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getData", {getData:$oj$$8$$.$FlattenedTreeCellSet$.prototype.getData});
  $oj$$8$$.$FlattenedTreeCellSet$.prototype.getMetadata = function $$oj$$8$$$$FlattenedTreeCellSet$$$getMetadata$($indexes$$3_metadata$$9_row$$19$$) {
    var $column$$7_columnKey$$2_relIndex$$1$$;
    $column$$7_columnKey$$2_relIndex$$1$$ = this.$_getRelIndexes$($indexes$$3_metadata$$9_row$$19$$);
    if(null == $column$$7_columnKey$$2_relIndex$$1$$) {
      return null
    }
    $indexes$$3_metadata$$9_row$$19$$ = $column$$7_columnKey$$2_relIndex$$1$$[0];
    $column$$7_columnKey$$2_relIndex$$1$$ = $column$$7_columnKey$$2_relIndex$$1$$[1];
    $oj$$8$$.$Assert$.assert($indexes$$3_metadata$$9_row$$19$$ < this.$m_nodeSet$.$getStart$() + this.$m_nodeSet$.$getCount$() && $column$$7_columnKey$$2_relIndex$$1$$ < this.$m_columns$.length);
    $column$$7_columnKey$$2_relIndex$$1$$ = this.$m_columns$[$column$$7_columnKey$$2_relIndex$$1$$];
    $indexes$$3_metadata$$9_row$$19$$ = this.$m_nodeSet$.getMetadata($indexes$$3_metadata$$9_row$$19$$);
    $indexes$$3_metadata$$9_row$$19$$.keys = {row:$indexes$$3_metadata$$9_row$$19$$.key, column:$column$$7_columnKey$$2_relIndex$$1$$};
    return $indexes$$3_metadata$$9_row$$19$$
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getMetadata", {getMetadata:$oj$$8$$.$FlattenedTreeCellSet$.prototype.getMetadata});
  $oj$$8$$.$FlattenedTreeCellSet$.prototype.$_getRelIndexes$ = function $$oj$$8$$$$FlattenedTreeCellSet$$$$_getRelIndexes$$($column$$8_indexes$$4$$) {
    var $row$$20$$;
    $oj$$8$$.$Assert$.$assertObject$($column$$8_indexes$$4$$);
    if(null == this.$m_nodeSet$ || 0 == this.$m_nodeSet$.length) {
      return null
    }
    $row$$20$$ = $column$$8_indexes$$4$$.row - this.$m_startRow$ + this.$m_nodeSet$.$getStart$();
    $column$$8_indexes$$4$$ = $column$$8_indexes$$4$$.column;
    $oj$$8$$.$Assert$.$assertNumber$($row$$20$$, null);
    $oj$$8$$.$Assert$.$assertNumber$($column$$8_indexes$$4$$, null);
    $oj$$8$$.$Assert$.assert(0 <= $row$$20$$ && 0 <= $column$$8_indexes$$4$$);
    return[$row$$20$$, $column$$8_indexes$$4$$]
  };
  $oj$$8$$.$FlattenedTreeCellSet$.prototype.$getStart$ = function $$oj$$8$$$$FlattenedTreeCellSet$$$$getStart$$($axis$$9$$) {
    return"row" === $axis$$9$$ ? this.$m_startRow$ : "column" === $axis$$9$$ ? this.$m_startColumn$ : 0
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getStart", {$getStart$:$oj$$8$$.$FlattenedTreeCellSet$.prototype.$getStart$});
  $oj$$8$$.$FlattenedTreeCellSet$.prototype.$getCount$ = function $$oj$$8$$$$FlattenedTreeCellSet$$$$getCount$$($axis$$10$$) {
    return"row" === $axis$$10$$ ? Math.min(this.$m_endRow$ - this.$m_startRow$, this.$m_nodeSet$.$getCount$()) : "column" === $axis$$10$$ ? this.$m_endColumn$ - this.$m_startColumn$ : 0
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getCount", {$getCount$:$oj$$8$$.$FlattenedTreeCellSet$.prototype.$getCount$});
  $oj$$8$$.$FlattenedTreeHeaderSet$ = function $$oj$$8$$$$FlattenedTreeHeaderSet$$($start$$23$$, $end$$6$$, $headers$$3$$, $nodeSet$$23$$, $rowHeader$$2$$) {
    $oj$$8$$.$Assert$.$assertNumber$($start$$23$$, null);
    $oj$$8$$.$Assert$.$assertNumber$($end$$6$$, null);
    $oj$$8$$.$Assert$.$assertArrayOrNull$($headers$$3$$);
    this.$m_start$ = $start$$23$$;
    this.$m_end$ = $end$$6$$;
    this.$m_headers$ = $headers$$3$$;
    this.$m_nodeSet$ = $nodeSet$$23$$;
    this.$m_rowHeader$ = $rowHeader$$2$$
  };
  $goog$exportPath_$$("FlattenedTreeHeaderSet", $oj$$8$$.$FlattenedTreeHeaderSet$, $oj$$8$$);
  $oj$$8$$.$FlattenedTreeHeaderSet$.prototype.getData = function $$oj$$8$$$$FlattenedTreeHeaderSet$$$getData$($index$$120_rowData$$5$$) {
    $oj$$8$$.$Assert$.assert($index$$120_rowData$$5$$ <= this.$m_end$ && $index$$120_rowData$$5$$ >= this.$m_start$);
    return null != this.$m_rowHeader$ && null != this.$m_nodeSet$ ? ($index$$120_rowData$$5$$ = this.$m_nodeSet$.getData($index$$120_rowData$$5$$), null != $index$$120_rowData$$5$$ ? $index$$120_rowData$$5$$.get(this.$m_rowHeader$) : null) : this.$m_headers$[$index$$120_rowData$$5$$]
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getData", {getData:$oj$$8$$.$FlattenedTreeHeaderSet$.prototype.getData});
  $oj$$8$$.$FlattenedTreeHeaderSet$.prototype.getMetadata = function $$oj$$8$$$$FlattenedTreeHeaderSet$$$getMetadata$($index$$121$$) {
    return null != this.$m_rowHeader$ && null != this.$m_nodeSet$ ? this.$m_nodeSet$.getMetadata($index$$121$$) : {key:this.getData($index$$121$$)}
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getMetadata", {getMetadata:$oj$$8$$.$FlattenedTreeHeaderSet$.prototype.getMetadata});
  $oj$$8$$.$FlattenedTreeHeaderSet$.prototype.$getCount$ = function $$oj$$8$$$$FlattenedTreeHeaderSet$$$$getCount$$() {
    return null != this.$m_rowHeader$ && null != this.$m_nodeSet$ ? Math.min(this.$m_nodeSet$.$getCount$(), this.$m_end$ - this.$m_start$) : Math.max(0, this.$m_end$ - this.$m_start$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getCount", {$getCount$:$oj$$8$$.$FlattenedTreeHeaderSet$.prototype.$getCount$});
  $oj$$8$$.$ArrayCellSet$ = function $$oj$$8$$$$ArrayCellSet$$($startRow$$1$$, $endRow$$1$$, $startColumn$$1$$, $endColumn$$1$$, $callback$$81$$) {
    $oj$$8$$.$Assert$.$assertNumber$($startRow$$1$$, null);
    $oj$$8$$.$Assert$.$assertNumber$($endRow$$1$$, null);
    $oj$$8$$.$Assert$.$assertNumber$($startColumn$$1$$, null);
    $oj$$8$$.$Assert$.$assertNumber$($endColumn$$1$$, null);
    this.$m_startRow$ = $startRow$$1$$;
    this.$m_endRow$ = $endRow$$1$$;
    this.$m_startColumn$ = $startColumn$$1$$;
    this.$m_endColumn$ = $endColumn$$1$$;
    this.$m_callback$ = $callback$$81$$
  };
  $goog$exportPath_$$("ArrayCellSet", $oj$$8$$.$ArrayCellSet$, $oj$$8$$);
  $oj$$8$$.$ArrayCellSet$.prototype.getData = function $$oj$$8$$$$ArrayCellSet$$$getData$($indexes$$5$$) {
    return this.$m_callback$.$getCellData$($indexes$$5$$.row, $indexes$$5$$.column)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getData", {getData:$oj$$8$$.$ArrayCellSet$.prototype.getData});
  $oj$$8$$.$ArrayCellSet$.prototype.getMetadata = function $$oj$$8$$$$ArrayCellSet$$$getMetadata$($indexes$$6$$) {
    return this.$m_callback$.$getCellMetadata$($indexes$$6$$.row, $indexes$$6$$.column)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getMetadata", {getMetadata:$oj$$8$$.$ArrayCellSet$.prototype.getMetadata});
  $oj$$8$$.$ArrayCellSet$.prototype.$getStart$ = function $$oj$$8$$$$ArrayCellSet$$$$getStart$$($axis$$11$$) {
    return"row" == $axis$$11$$ ? this.$m_startRow$ : "column" == $axis$$11$$ ? this.$m_startColumn$ : -1
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStart", {$getStart$:$oj$$8$$.$ArrayCellSet$.prototype.$getStart$});
  $oj$$8$$.$ArrayCellSet$.prototype.$getCount$ = function $$oj$$8$$$$ArrayCellSet$$$$getCount$$($axis$$12$$) {
    return"row" === $axis$$12$$ ? Math.max(0, this.$m_endRow$ - this.$m_startRow$) : "column" === $axis$$12$$ ? Math.max(0, this.$m_endColumn$ - this.$m_startColumn$) : 0
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getCount", {$getCount$:$oj$$8$$.$ArrayCellSet$.prototype.$getCount$});
  $oj$$8$$.$ArrayCellSet$.prototype.$getStartRow$ = $JSCompiler_get$$("$m_startRow$");
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStartRow", {$getStartRow$:$oj$$8$$.$ArrayCellSet$.prototype.$getStartRow$});
  $oj$$8$$.$ArrayCellSet$.prototype.$getStartColumn$ = $JSCompiler_get$$("$m_startColumn$");
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStartColumn", {$getStartColumn$:$oj$$8$$.$ArrayCellSet$.prototype.$getStartColumn$});
  $oj$$8$$.$FlattenedTreeDataGridDataSource$ = function $$oj$$8$$$$FlattenedTreeDataGridDataSource$$($treeDataSource$$1$$, $options$$210$$) {
    $oj$$8$$.$FlattenedTreeDataGridDataSource$.$superclass$.constructor.call(this, $treeDataSource$$1$$, $options$$210$$)
  };
  $goog$exportPath_$$("FlattenedTreeDataGridDataSource", $oj$$8$$.$FlattenedTreeDataGridDataSource$, $oj$$8$$);
  $oj$$8$$.$Object$.$createSubclass$($oj$$8$$.$FlattenedTreeDataGridDataSource$, $oj$$8$$.$FlattenedTreeDataSource$, "oj.FlattenedTreeDataGridDataSource");
  $oj$$8$$.$FlattenedTreeDataGridDataSource$.prototype.Init = function $$oj$$8$$$$FlattenedTreeDataGridDataSource$$$Init$() {
    $oj$$8$$.$FlattenedTreeDataGridDataSource$.$superclass$.Init.call(this);
    this.$m_columns$ = $oj$$8$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getOption$.call(this, "columns");
    this.$m_rowHeader$ = $oj$$8$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getOption$.call(this, "rowHeader")
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.Init", {Init:$oj$$8$$.$FlattenedTreeDataGridDataSource$.prototype.Init});
  $oj$$8$$.$FlattenedTreeDataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$8$$$$FlattenedTreeDataGridDataSource$$$$getCountPrecision$$($axis$$13$$) {
    return"row" === $axis$$13$$ ? "estimate" : "actual"
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$8$$.$FlattenedTreeDataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$8$$.$FlattenedTreeDataGridDataSource$.prototype.$getCount$ = function $$oj$$8$$$$FlattenedTreeDataGridDataSource$$$$getCount$$($axis$$14$$) {
    return"row" === $axis$$14$$ ? -1 : "column" === $axis$$14$$ ? this.$m_columns$.length : 0
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.getCount", {$getCount$:$oj$$8$$.$FlattenedTreeDataGridDataSource$.prototype.$getCount$});
  $oj$$8$$.$FlattenedTreeDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$8$$$$FlattenedTreeDataGridDataSource$$$$fetchHeaders$$($headerRange$$2$$, $callbacks$$25$$, $callbackObjects$$6$$) {
    var $axis$$15$$, $headerSet$$1$$;
    $axis$$15$$ = $headerRange$$2$$.axis;
    if("column" === $axis$$15$$) {
      $headerSet$$1$$ = new $oj$$8$$.$FlattenedTreeHeaderSet$($headerRange$$2$$.start, $headerRange$$2$$.start + $headerRange$$2$$.count, this.$m_columns$)
    }else {
      if("row" === $axis$$15$$) {
        if(null != this.$m_rowHeader$) {
          this.$m_fetchHeaderRequest$ = {range:$headerRange$$2$$, callbacks:$callbacks$$25$$, callbackObjects:$callbackObjects$$6$$};
          return
        }
        $headerSet$$1$$ = new $oj$$8$$.$ArrayHeaderSet$($headerRange$$2$$.start, $headerRange$$2$$.start, $axis$$15$$, null)
      }
    }
    null != $headerSet$$1$$ && (null != $callbacks$$25$$ && null != $callbacks$$25$$.success) && (null == $callbackObjects$$6$$ && ($callbackObjects$$6$$ = {}), $callbacks$$25$$.success.call($callbackObjects$$6$$.success, $headerSet$$1$$, $headerRange$$2$$))
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$8$$.$FlattenedTreeDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$8$$.$FlattenedTreeDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$8$$$$FlattenedTreeDataGridDataSource$$$$fetchCells$$($cellRanges$$1$$, $callbacks$$26$$, $callbackObjects$$7$$) {
    var $i$$140$$, $cellRange$$2$$, $rowStart$$2$$, $rowCount$$1$$;
    for($i$$140$$ = 0;$i$$140$$ < $cellRanges$$1$$.length;$i$$140$$++) {
      if($cellRange$$2$$ = $cellRanges$$1$$[$i$$140$$], "row" == $cellRange$$2$$.axis) {
        $rowStart$$2$$ = $cellRange$$2$$.start;
        $rowCount$$1$$ = $cellRange$$2$$.count;
        break
      }
    }
    $oj$$8$$.$FlattenedTreeDataGridDataSource$.$superclass$.$fetchRows$.call(this, {start:$rowStart$$2$$, count:$rowCount$$1$$}, {success:function($nodeSet$$24$$) {
      this.$_handleFetchRowsSuccess$($nodeSet$$24$$, $cellRanges$$1$$, $callbacks$$26$$, $callbackObjects$$7$$, 0)
    }.bind(this), error:function($status$$7$$) {
      this.$_handleFetchRowsError$($status$$7$$, {start:$rowStart$$2$$, count:$rowCount$$1$$}, $callbacks$$26$$, $callbackObjects$$7$$)
    }.bind(this)})
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$8$$.$FlattenedTreeDataGridDataSource$.prototype.$fetchCells$});
  $oj$$8$$.$FlattenedTreeDataGridDataSource$.prototype.keys = function $$oj$$8$$$$FlattenedTreeDataGridDataSource$$$keys$($colIndex_indexes$$7$$) {
    var $rowIndex$$4$$;
    $rowIndex$$4$$ = $colIndex_indexes$$7$$.row;
    $colIndex_indexes$$7$$ = $colIndex_indexes$$7$$.column;
    return $rowIndex$$4$$ > $oj$$8$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getFetchedRange$.call(this).end || $colIndex_indexes$$7$$ > this.$m_columns$.length ? null : {row:$oj$$8$$.$FlattenedTreeDataGridDataSource$.$superclass$.getKey.call(this, $rowIndex$$4$$), column:this.$m_columns$[$colIndex_indexes$$7$$]}
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.keys", {keys:$oj$$8$$.$FlattenedTreeDataGridDataSource$.prototype.keys});
  $oj$$8$$.$FlattenedTreeDataGridDataSource$.prototype.$indexes$ = function $$oj$$8$$$$FlattenedTreeDataGridDataSource$$$$indexes$$($colKey$$1_keys$$9$$) {
    var $rowIndex$$5_rowKey$$15$$, $colIndex$$1$$, $i$$141$$;
    $rowIndex$$5_rowKey$$15$$ = $colKey$$1_keys$$9$$.row;
    $colKey$$1_keys$$9$$ = $colKey$$1_keys$$9$$.column;
    $rowIndex$$5_rowKey$$15$$ = $oj$$8$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getIndex$.call(this, $rowIndex$$5_rowKey$$15$$);
    for($i$$141$$ = 0;$i$$141$$ < this.$m_columns$.length;$i$$141$$++) {
      if(this.$m_columns$[$i$$141$$] === $colKey$$1_keys$$9$$) {
        $colIndex$$1$$ = $i$$141$$;
        break
      }
    }
    return 0 <= $rowIndex$$5_rowKey$$15$$ && 0 <= $colIndex$$1$$ ? {row:$rowIndex$$5_rowKey$$15$$, column:$colIndex$$1$$} : null
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.indexes", {$indexes$:$oj$$8$$.$FlattenedTreeDataGridDataSource$.prototype.$indexes$});
  $oj$$8$$.$FlattenedTreeDataGridDataSource$.prototype.sort = function $$oj$$8$$$$FlattenedTreeDataGridDataSource$$$sort$($criteria$$5$$, $callbacks$$27$$, $callbackObjects$$8$$) {
    return $oj$$8$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getWrappedDataSource$.call(this).sort($criteria$$5$$, {success:function() {
      this.$_handleSortSuccess$($callbacks$$27$$, $callbackObjects$$8$$)
    }.bind(this), error:$callbacks$$27$$.error})
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.sort", {sort:$oj$$8$$.$FlattenedTreeDataGridDataSource$.prototype.sort});
  $oj$$8$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleSortSuccess$ = function $$oj$$8$$$$FlattenedTreeDataGridDataSource$$$$_handleSortSuccess$$($callbacks$$28$$, $callbackObjects$$9$$) {
    this.refresh();
    $callbacks$$28$$.success && (null == $callbackObjects$$9$$ && ($callbackObjects$$9$$ = {}), $callbacks$$28$$.success.call($callbackObjects$$9$$.success))
  };
  $oj$$8$$.$FlattenedTreeDataGridDataSource$.prototype.getCapability = function $$oj$$8$$$$FlattenedTreeDataGridDataSource$$$getCapability$($feature$$8$$) {
    return $oj$$8$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getWrappedDataSource$.call(this).getCapability($feature$$8$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.getCapability", {getCapability:$oj$$8$$.$FlattenedTreeDataGridDataSource$.prototype.getCapability});
  $oj$$8$$.$FlattenedTreeDataGridDataSource$.prototype.$insertMetadata$ = function $$oj$$8$$$$FlattenedTreeDataGridDataSource$$$$insertMetadata$$($key$$62$$, $metadata$$10$$) {
    $oj$$8$$.$FlattenedTreeDataGridDataSource$.$superclass$.$insertMetadata$.call(this, $key$$62$$, $metadata$$10$$)
  };
  $oj$$8$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleFetchRowsSuccess$ = function $$oj$$8$$$$FlattenedTreeDataGridDataSource$$$$_handleFetchRowsSuccess$$($cellSet$$1_nodeSet$$25$$, $cellRanges$$2$$, $callbacks$$29$$, $callbackObjects$$10$$) {
    var $headerRange$$3_i$$142$$, $cellRange$$3$$, $rowStart$$3$$, $rowCount$$2$$, $columnStart$$, $columnCount$$;
    for($headerRange$$3_i$$142$$ = 0;$headerRange$$3_i$$142$$ < $cellRanges$$2$$.length;$headerRange$$3_i$$142$$++) {
      $cellRange$$3$$ = $cellRanges$$2$$[$headerRange$$3_i$$142$$], "row" == $cellRange$$3$$.axis ? ($rowStart$$3$$ = $cellRange$$3$$.start, $rowCount$$2$$ = $cellRange$$3$$.count) : "column" == $cellRange$$3$$.axis && ($columnStart$$ = $cellRange$$3$$.start, $columnCount$$ = $cellRange$$3$$.count)
    }
    this.$m_fetchHeaderRequest$ && ($headerRange$$3_i$$142$$ = this.$m_fetchHeaderRequest$.range, $headerRange$$3_i$$142$$.start == $rowStart$$3$$ && $headerRange$$3_i$$142$$.count == $rowCount$$2$$ && this.$_handleRowHeaderFetchSuccess$($cellSet$$1_nodeSet$$25$$, $headerRange$$3_i$$142$$, this.$m_fetchHeaderRequest$.callbacks, this.$m_fetchHeaderRequest$.callbackObjects), this.$m_fetchHeaderRequest$ = null);
    $cellSet$$1_nodeSet$$25$$ = new $oj$$8$$.$FlattenedTreeCellSet$($rowStart$$3$$, $rowStart$$3$$ + $rowCount$$2$$, $columnStart$$, $columnStart$$ + $columnCount$$, $cellSet$$1_nodeSet$$25$$, this.$m_columns$);
    $callbacks$$29$$.success && (null == $callbackObjects$$10$$ && ($callbackObjects$$10$$ = {}), $callbacks$$29$$.success.call($callbackObjects$$10$$.success, $cellSet$$1_nodeSet$$25$$, $cellRanges$$2$$))
  };
  $oj$$8$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleFetchRowsError$ = function $$oj$$8$$$$FlattenedTreeDataGridDataSource$$$$_handleFetchRowsError$$($status$$8$$, $headerCallbacks_range$$16$$, $callbacks$$30$$, $callbackObjects$$11$$) {
    var $headerCallbackObjects_headerRange$$4$$;
    this.$m_fetchHeaderRequest$ && ($headerCallbackObjects_headerRange$$4$$ = this.$m_fetchHeaderRequest$.range, $headerCallbackObjects_headerRange$$4$$.start == $headerCallbacks_range$$16$$.start && $headerCallbackObjects_headerRange$$4$$.count == $headerCallbacks_range$$16$$.count && ($headerCallbacks_range$$16$$ = this.$m_fetchHeaderRequest$.callbacks, $headerCallbackObjects_headerRange$$4$$ = this.$m_fetchHeaderRequest$.callbackObjects, $headerCallbacks_range$$16$$.error && (null == $headerCallbackObjects_headerRange$$4$$ && 
    ($headerCallbackObjects_headerRange$$4$$ = {}), $headerCallbacks_range$$16$$.error.call($headerCallbackObjects_headerRange$$4$$.error, $status$$8$$))), this.$m_fetchHeaderRequest$ = null);
    $callbacks$$30$$.error && (null == $callbackObjects$$11$$ && ($callbackObjects$$11$$ = {}), $callbacks$$30$$.success.call($callbackObjects$$11$$.error, $status$$8$$))
  };
  $oj$$8$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleRowHeaderFetchSuccess$ = function $$oj$$8$$$$FlattenedTreeDataGridDataSource$$$$_handleRowHeaderFetchSuccess$$($headerSet$$2_nodeSet$$26$$, $headerRange$$5$$, $callbacks$$31$$, $callbackObjects$$12$$) {
    $headerSet$$2_nodeSet$$26$$ = new $oj$$8$$.$FlattenedTreeHeaderSet$($headerRange$$5$$.start, $headerRange$$5$$.start + $headerRange$$5$$.count, this.$m_columns$, $headerSet$$2_nodeSet$$26$$, this.$m_rowHeader$);
    $callbacks$$31$$.success && (null == $callbackObjects$$12$$ && ($callbackObjects$$12$$ = {}), $callbacks$$31$$.success.call($callbackObjects$$12$$.success, $headerSet$$2_nodeSet$$26$$, $headerRange$$5$$))
  };
  $oj$$8$$.$FlattenedTreeDataGridDataSource$.prototype.$insertRows$ = function $$oj$$8$$$$FlattenedTreeDataGridDataSource$$$$insertRows$$($cellSet$$2_insertAtIndex$$1$$, $insertAtRowKey$$, $event$$47_nodeSet$$27$$) {
    $cellSet$$2_insertAtIndex$$1$$ = new $oj$$8$$.$FlattenedTreeCellSet$($cellSet$$2_insertAtIndex$$1$$, $cellSet$$2_insertAtIndex$$1$$ + $event$$47_nodeSet$$27$$.$getCount$(), 0, this.$m_columns$.length, $event$$47_nodeSet$$27$$, this.$m_columns$);
    $event$$47_nodeSet$$27$$ = {source:this, operation:"insert"};
    $event$$47_nodeSet$$27$$.result = $cellSet$$2_insertAtIndex$$1$$;
    $event$$47_nodeSet$$27$$.keys = {row:$insertAtRowKey$$};
    $oj$$8$$.$FlattenedTreeDataGridDataSource$.$superclass$.handleEvent.call(this, "change", $event$$47_nodeSet$$27$$)
  };
  $oj$$8$$.$FlattenedTreeDataGridDataSource$.prototype.$removeRows$ = function $$oj$$8$$$$FlattenedTreeDataGridDataSource$$$$removeRows$$($event$$48_rowKeys$$1$$) {
    var $keys$$10$$, $i$$143$$;
    $keys$$10$$ = [];
    for($i$$143$$ = 0;$i$$143$$ < $event$$48_rowKeys$$1$$.length;$i$$143$$++) {
      $keys$$10$$.push({row:$event$$48_rowKeys$$1$$[$i$$143$$].key})
    }
    $event$$48_rowKeys$$1$$ = {source:this, operation:"delete"};
    $event$$48_rowKeys$$1$$.keys = $keys$$10$$;
    $oj$$8$$.$FlattenedTreeDataGridDataSource$.$superclass$.handleEvent.call(this, "change", $event$$48_rowKeys$$1$$)
  };
  $oj$$8$$.$FlattenedTreeDataGridDataSource$.prototype.$handleMaxCountReached$ = function $$oj$$8$$$$FlattenedTreeDataGridDataSource$$$$handleMaxCountReached$$($range$$17$$, $callbacks$$32$$) {
    $callbacks$$32$$.success.call(null, new $oj$$8$$.$EmptyNodeSet$(null, $range$$17$$.start))
  };
  $oj$$8$$.$PagingDataGridDataSource$ = function $$oj$$8$$$$PagingDataGridDataSource$$($dataSource$$2$$) {
    if(!($dataSource$$2$$ instanceof $oj$$8$$.$CollectionDataGridDataSource$)) {
      throw new $oj$$8$$.$Message$("Not a datagridatasource", "Not a datagridatasource", $oj$$8$$.$Message$.$SEVERITY_LEVEL$.ERROR);
    }
    this.$dataSource$ = $dataSource$$2$$;
    this.$_startIndex$ = 0;
    this.Init()
  };
  $goog$exportPath_$$("PagingDataGridDataSource", $oj$$8$$.$PagingDataGridDataSource$, $oj$$8$$);
  $oj$$8$$.$Object$.$createSubclass$($oj$$8$$.$PagingDataGridDataSource$, $oj$$8$$.$PagingDataSource$, "oj.PagingDataGridDataSource");
  $oj$$8$$.$PagingDataGridDataSource$.prototype.Init = function $$oj$$8$$$$PagingDataGridDataSource$$$Init$() {
    $oj$$8$$.$PagingDataGridDataSource$.$superclass$.Init.call(this)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.Init", {Init:$oj$$8$$.$PagingDataGridDataSource$.prototype.Init});
  $oj$$8$$.$PagingDataGridDataSource$.prototype.fetch = function $$oj$$8$$$$PagingDataGridDataSource$$$fetch$($options$$212$$) {
    this.$_startIndex$ = $options$$212$$.startIndex;
    this.$dataSource$.setPageSize(this.$_currentPageSize$);
    this.$dataSource$.fetch($options$$212$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.fetch", {fetch:$oj$$8$$.$PagingDataGridDataSource$.prototype.fetch});
  $oj$$8$$.$PagingDataGridDataSource$.prototype.hasMore = function $$oj$$8$$$$PagingDataGridDataSource$$$hasMore$() {
    return this.$dataSource$.hasMore()
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.hasMore", {hasMore:$oj$$8$$.$PagingDataGridDataSource$.prototype.hasMore});
  $oj$$8$$.$PagingDataGridDataSource$.prototype.next = function $$oj$$8$$$$PagingDataGridDataSource$$$next$() {
    this.$dataSource$.totalSize() > this.$_startIndex$ && (this.$_currentPageSize$ += this.$_pageSize$, this.$dataSource$.setPageSize(this.$_currentPageSize$), this.fetch({startIndex:this.$_startIndex$}))
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.next", {next:$oj$$8$$.$PagingDataGridDataSource$.prototype.next});
  $oj$$8$$.$PagingDataGridDataSource$.prototype.previous = function $$oj$$8$$$$PagingDataGridDataSource$$$previous$() {
    if(0 != this.$_startIndex$ || -1 != this.$_startIndex$) {
      this.$_startIndex$ -= this.$_pageSize$, this.$_startIndex$ = 0 > this.$_startIndex$ ? 0 : this.$_startIndex$, this.$_currentPageSize$ += this.$_pageSize$, this.$dataSource$.setPageSize(this.$_currentPageSize$), this.fetch({startIndex:this.$_startIndex$})
    }
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.previous", {previous:$oj$$8$$.$PagingDataGridDataSource$.prototype.previous});
  $oj$$8$$.$PagingDataGridDataSource$.prototype.setPageSize = function $$oj$$8$$$$PagingDataGridDataSource$$$setPageSize$($n$$18$$) {
    this.$_pageSize$ = $n$$18$$;
    this.$_currentPageSize$ = this.$_startIndex$ + $n$$18$$;
    this.$dataSource$.setPageSize(this.$_currentPageSize$)
  };
  $oj$$8$$.$PagingDataGridDataSource$.prototype.startIndex = $JSCompiler_get$$("$_startIndex$");
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.startIndex", {startIndex:$oj$$8$$.$PagingDataGridDataSource$.prototype.startIndex});
  $oj$$8$$.$PagingDataGridDataSource$.prototype.$getCount$ = function $$oj$$8$$$$PagingDataGridDataSource$$$$getCount$$($axis$$16$$) {
    return this.$dataSource$.$getCount$($axis$$16$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getCount", {$getCount$:$oj$$8$$.$PagingDataGridDataSource$.prototype.$getCount$});
  $oj$$8$$.$PagingDataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$8$$$$PagingDataGridDataSource$$$$getCountPrecision$$($axis$$17$$) {
    return this.$dataSource$.$getCountPrecision$($axis$$17$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$8$$.$PagingDataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$8$$.$PagingDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$8$$$$PagingDataGridDataSource$$$$fetchHeaders$$($headerRange$$6$$, $callbacks$$33$$, $callbackObjects$$13$$) {
    return this.$dataSource$.$fetchHeaders$($headerRange$$6$$, $callbacks$$33$$, $callbackObjects$$13$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$8$$.$PagingDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$8$$.$PagingDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$8$$$$PagingDataGridDataSource$$$$fetchCells$$($cellRanges$$3$$, $callbacks$$34$$, $callbackObjects$$14$$) {
    return this.$dataSource$.$fetchCells$($cellRanges$$3$$, $callbacks$$34$$, $callbackObjects$$14$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$8$$.$PagingDataGridDataSource$.prototype.$fetchCells$});
  $oj$$8$$.$PagingDataGridDataSource$.prototype.keys = function $$oj$$8$$$$PagingDataGridDataSource$$$keys$($indexes$$8$$) {
    return this.$dataSource$.keys($indexes$$8$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.keys", {keys:$oj$$8$$.$PagingDataGridDataSource$.prototype.keys});
  $oj$$8$$.$PagingDataGridDataSource$.prototype.$indexes$ = function $$oj$$8$$$$PagingDataGridDataSource$$$$indexes$$($keys$$11$$) {
    return this.$dataSource$.$indexes$($keys$$11$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.indexes", {$indexes$:$oj$$8$$.$PagingDataGridDataSource$.prototype.$indexes$});
  $oj$$8$$.$PagingDataGridDataSource$.prototype.on = function $$oj$$8$$$$PagingDataGridDataSource$$$on$($eventType$$28$$, $eventHandler$$6$$) {
    return this.$dataSource$.on($eventType$$28$$, $eventHandler$$6$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.on", {on:$oj$$8$$.$PagingDataGridDataSource$.prototype.on});
  $oj$$8$$.$PagingDataGridDataSource$.prototype.off = function $$oj$$8$$$$PagingDataGridDataSource$$$off$($eventType$$29$$, $eventHandler$$7$$) {
    return this.$dataSource$.off($eventType$$29$$, $eventHandler$$7$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.off", {off:$oj$$8$$.$PagingDataGridDataSource$.prototype.off});
  $oj$$8$$.$PagingDataGridDataSource$.prototype.getCapability = function $$oj$$8$$$$PagingDataGridDataSource$$$getCapability$($feature$$9$$) {
    return"move" === $feature$$9$$ ? "none" : this.$dataSource$.getCapability($feature$$9$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getCapability", {getCapability:$oj$$8$$.$PagingDataGridDataSource$.prototype.getCapability});
  $oj$$8$$.$PagingDataGridDataSource$.prototype.size = function $$oj$$8$$$$PagingDataGridDataSource$$$size$() {
    return this.$dataSource$.size()
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.size", {size:$oj$$8$$.$PagingDataGridDataSource$.prototype.size});
  $oj$$8$$.$PagingDataGridDataSource$.prototype.sort = function $$oj$$8$$$$PagingDataGridDataSource$$$sort$($criteria$$6$$, $callbacks$$35$$, $callbackObjects$$15$$) {
    this.$dataSource$.sort($criteria$$6$$, $callbacks$$35$$, $callbackObjects$$15$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.sort", {sort:$oj$$8$$.$PagingDataGridDataSource$.prototype.sort});
  $oj$$8$$.$PagingDataGridDataSource$.prototype.totalSize = function $$oj$$8$$$$PagingDataGridDataSource$$$totalSize$() {
    return this.$dataSource$.totalSize()
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.totalSize", {totalSize:$oj$$8$$.$PagingDataGridDataSource$.prototype.totalSize});
  $oj$$8$$.$PagingDataGridDataSource$.prototype.move = function $$oj$$8$$$$PagingDataGridDataSource$$$move$($moveKey$$1$$, $atKey$$1$$) {
    return this.$dataSource$.move($moveKey$$1$$, $atKey$$1$$)
  };
  $oj$$8$$.$ArrayHeaderSet$ = function $$oj$$8$$$$ArrayHeaderSet$$($start$$24$$, $end$$7$$, $axis$$18$$, $callback$$82$$) {
    $oj$$8$$.$Assert$.$assertNumber$($start$$24$$, null);
    $oj$$8$$.$Assert$.$assertNumber$($end$$7$$, null);
    this.$m_start$ = $start$$24$$;
    this.$m_end$ = $end$$7$$;
    this.$m_axis$ = $axis$$18$$;
    this.$m_callback$ = $callback$$82$$
  };
  $goog$exportPath_$$("ArrayHeaderSet", $oj$$8$$.$ArrayHeaderSet$, $oj$$8$$);
  $oj$$8$$.$ArrayHeaderSet$.prototype.getData = function $$oj$$8$$$$ArrayHeaderSet$$$getData$($index$$122$$) {
    if(null == this.$m_callback$) {
      return null
    }
    $oj$$8$$.$Assert$.assert($index$$122$$ <= this.$m_end$ && $index$$122$$ >= this.$m_start$);
    return this.$m_callback$.$getHeaderData$(this.$m_axis$, $index$$122$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getData", {getData:$oj$$8$$.$ArrayHeaderSet$.prototype.getData});
  $oj$$8$$.$ArrayHeaderSet$.prototype.getMetadata = function $$oj$$8$$$$ArrayHeaderSet$$$getMetadata$($index$$123$$) {
    if(null == this.$m_callback$) {
      return null
    }
    $oj$$8$$.$Assert$.assert($index$$123$$ <= this.$m_end$ && $index$$123$$ >= this.$m_start$);
    return this.$m_callback$.$getHeaderMetadata$(this.$m_axis$, $index$$123$$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getMetadata", {getMetadata:$oj$$8$$.$ArrayHeaderSet$.prototype.getMetadata});
  $oj$$8$$.$ArrayHeaderSet$.prototype.$getCount$ = function $$oj$$8$$$$ArrayHeaderSet$$$$getCount$$() {
    return null == this.$m_callback$ ? 0 : Math.max(0, this.$m_end$ - this.$m_start$)
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getCount", {$getCount$:$oj$$8$$.$ArrayHeaderSet$.prototype.$getCount$});
  $oj$$8$$.$ArrayHeaderSet$.prototype.$getStart$ = $JSCompiler_get$$("$m_start$");
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getStart", {$getStart$:$oj$$8$$.$ArrayHeaderSet$.prototype.$getStart$})
});
