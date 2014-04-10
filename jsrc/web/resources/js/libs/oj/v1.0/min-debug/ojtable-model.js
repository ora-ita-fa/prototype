define(["ojs/ojcore", "jquery", "ojs/ojmodel", "ojs/ojdatacollection-common", "ojs/ojtable"], function($oj$$9$$) {
  $oj$$9$$.$ModelRow$ = function $$oj$$9$$$$ModelRow$$($model$$39$$, $options$$245$$) {
    $oj$$9$$.$ModelRow$._init(this, $model$$39$$, $options$$245$$, null)
  };
  $goog$exportPath_$$("ModelRow", $oj$$9$$.$ModelRow$, $oj$$9$$);
  $oj$$9$$.$Object$.$createSubclass$($oj$$9$$.$ModelRow$, $oj$$9$$.$Row$, "ModelRow.ModelRow");
  $oj$$9$$.$ModelRow$.prototype.$Init$ = function $$oj$$9$$$$ModelRow$$$$Init$$() {
    $oj$$9$$.$Row$.$superclass$.$Init$.call(this)
  };
  $oj$$9$$.$ModelRow$.prototype.attributes = {};
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.attributes", {attributes:$oj$$9$$.$ModelRow$.prototype.attributes});
  $oj$$9$$.$ModelRow$.prototype.id = null;
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.id", {id:$oj$$9$$.$ModelRow$.prototype.id});
  $oj$$9$$.$ModelRow$.prototype.$idAttribute$ = null;
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.idAttribute", {$idAttribute$:$oj$$9$$.$ModelRow$.prototype.$idAttribute$});
  $oj$$9$$.$ModelRow$._init = function $$oj$$9$$$$ModelRow$$_init$($row$$41$$, $model$$40$$, $options$$246$$, $properties$$11$$) {
    var $prop$$74$$ = null;
    $row$$41$$.$Init$();
    $row$$41$$.$_model$ = $model$$40$$;
    $row$$41$$.id = $model$$40$$.id;
    $row$$41$$.$idAttribute$ = $model$$40$$.$idAttribute$;
    $row$$41$$.attributes = $model$$40$$.attributes;
    $options$$246$$ = $options$$246$$ || {};
    for($prop$$74$$ in $properties$$11$$) {
      $properties$$11$$.hasOwnProperty($prop$$74$$) && ($row$$41$$[$prop$$74$$] = $properties$$11$$[$prop$$74$$])
    }
    $row$$41$$.context = $options$$246$$.context
  };
  $oj$$9$$.$ModelRow$.prototype.clone = function $$oj$$9$$$$ModelRow$$$clone$() {
    return this.$_model$.clone()
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.clone", {clone:$oj$$9$$.$ModelRow$.prototype.clone});
  $oj$$9$$.$ModelRow$.prototype.get = function $$oj$$9$$$$ModelRow$$$get$($property$$20$$) {
    return this.$_model$.get($property$$20$$)
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.get", {get:$oj$$9$$.$ModelRow$.prototype.get});
  $oj$$9$$.$ModelRow$.prototype.$getModel$ = $JSCompiler_get$$("$_model$");
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.getModel", {$getModel$:$oj$$9$$.$ModelRow$.prototype.$getModel$});
  $oj$$9$$.$ModelRow$.prototype.set = function $$oj$$9$$$$ModelRow$$$set$($property$$21$$, $value$$154$$, $options$$247$$) {
    return this.$_model$.set($property$$21$$, $value$$154$$, $options$$247$$)
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.set", {set:$oj$$9$$.$ModelRow$.prototype.set});
  $oj$$9$$.$ModelRow$.prototype.keys = function $$oj$$9$$$$ModelRow$$$keys$() {
    return this.$_model$.keys()
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.keys", {keys:$oj$$9$$.$ModelRow$.prototype.keys});
  $oj$$9$$.$ModelRow$.prototype.$values$ = function $$oj$$9$$$$ModelRow$$$$values$$() {
    return this.$_model$.$values$()
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.values", {$values$:$oj$$9$$.$ModelRow$.prototype.$values$});
  $oj$$9$$.$ModelRow$.prototype.$pairs$ = function $$oj$$9$$$$ModelRow$$$$pairs$$() {
    return this.$_model$.$pairs$()
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.pairs", {$pairs$:$oj$$9$$.$ModelRow$.prototype.$pairs$});
  $oj$$9$$.$CollectionRowSet$ = function $$oj$$9$$$$CollectionRowSet$$($collection$$20$$, $options$$248$$) {
    $oj$$9$$.$CollectionRowSet$._init(this, $collection$$20$$, $options$$248$$, null)
  };
  $goog$exportPath_$$("CollectionRowSet", $oj$$9$$.$CollectionRowSet$, $oj$$9$$);
  $oj$$9$$.$CollectionRowSet$.prototype.$sortDirection$ = 1;
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.sortDirection", {$sortDirection$:$oj$$9$$.$CollectionRowSet$.prototype.$sortDirection$});
  $oj$$9$$.$CollectionRowSet$.prototype.$comparator$ = null;
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.comparator", {$comparator$:$oj$$9$$.$CollectionRowSet$.prototype.$comparator$});
  $oj$$9$$.$CollectionRowSet$.prototype.$sortSupported$ = !0;
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.sortSupported", {$sortSupported$:$oj$$9$$.$CollectionRowSet$.prototype.$sortSupported$});
  $oj$$9$$.$Object$.$createSubclass$($oj$$9$$.$CollectionRowSet$, $oj$$9$$.$RowSet$, "CollectionRowSet.CollectionRowSet");
  $oj$$9$$.$CollectionRowSet$.prototype.$Init$ = function $$oj$$9$$$$CollectionRowSet$$$$Init$$() {
    $oj$$9$$.$CollectionRowSet$.$superclass$.$Init$.call(this)
  };
  $oj$$9$$.$CollectionRowSet$._init = function $$oj$$9$$$$CollectionRowSet$$_init$($rowSet$$4$$, $collection$$21$$, $options$$249$$, $properties$$12$$) {
    var $prop$$75$$;
    $rowSet$$4$$.$_eventHandlers$ = [];
    $rowSet$$4$$.$_startIndex$ = 0;
    $rowSet$$4$$.$Init$();
    if($properties$$12$$) {
      for($prop$$75$$ in $properties$$12$$) {
        $properties$$12$$.hasOwnProperty($prop$$75$$) && ($rowSet$$4$$[$prop$$75$$] = $properties$$12$$[$prop$$75$$])
      }
    }
    $rowSet$$4$$.$_collection$ = $collection$$21$$;
    $rowSet$$4$$.$_addCollectionEventListeners$()
  };
  $oj$$9$$.$CollectionRowSet$.prototype.at = function $$oj$$9$$$$CollectionRowSet$$$at$($index$$130$$, $options$$250$$) {
    var $model$$41$$ = this.$_collection$.at($index$$130$$, $options$$250$$);
    return null != $model$$41$$ ? new $oj$$9$$.$ModelRow$($model$$41$$) : null
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.at", {at:$oj$$9$$.$CollectionRowSet$.prototype.at});
  $oj$$9$$.$CollectionRowSet$.prototype.fetch = function $$oj$$9$$$$CollectionRowSet$$$fetch$($options$$251$$) {
    if(this.$_canFetch$.call(this)) {
      this.$_startFetch$.call(this);
      $options$$251$$ = $options$$251$$ || {};
      var $self$$48$$ = this, $isPaged$$ = null != $options$$251$$.startIndex ? !0 : !1, $origStartIndex$$2$$ = this.$_startIndex$;
      this.$_startIndex$ = $isPaged$$ ? $options$$251$$.startIndex : 0;
      var $pageSize$$4$$ = 0 < $options$$251$$.pageSize ? $options$$251$$.pageSize : -1, $origCollection$$ = this.$_collection$.clone();
      $isPaged$$ ? this.$_collection$.$setRangeLocal$(this.$_startIndex$, $pageSize$$4$$).done(function() {
        var $updates$$3$$ = $self$$48$$.$_compareCollection$($origCollection$$, $self$$48$$.$_collection$, $origStartIndex$$2$$, $self$$48$$.$_startIndex$, $pageSize$$4$$);
        $self$$48$$.$_addCollectionEventListeners$.call($self$$48$$);
        $self$$48$$.$_processUpdates$.call($self$$48$$, $updates$$3$$, $origCollection$$);
        $self$$48$$.$_endFetch$.call($self$$48$$, !0)
      }) : this.$_collection$.fetch({success:function($collection$$23_updates$$4$$) {
        $collection$$23_updates$$4$$ = $self$$48$$.$_compareCollection$($origCollection$$, $collection$$23_updates$$4$$, $origStartIndex$$2$$, $self$$48$$.$_startIndex$, $pageSize$$4$$);
        $self$$48$$.$_addCollectionEventListeners$.call($self$$48$$);
        $self$$48$$.$_processUpdates$.call($self$$48$$, $collection$$23_updates$$4$$, $origCollection$$);
        $self$$48$$.$_endFetch$.call($self$$48$$, !0)
      }})
    }
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.fetch", {fetch:$oj$$9$$.$CollectionRowSet$.prototype.fetch});
  $oj$$9$$.$CollectionRowSet$.prototype.get = function $$oj$$9$$$$CollectionRowSet$$$get$($id$$17$$, $options$$254$$) {
    return new $oj$$9$$.$ModelRow$(this.$_collection$.get($id$$17$$, $options$$254$$))
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.get", {get:$oj$$9$$.$CollectionRowSet$.prototype.get});
  $oj$$9$$.$CollectionRowSet$.prototype.$getCollection$ = $JSCompiler_get$$("$_collection$");
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.getCollection", {$getCollection$:$oj$$9$$.$CollectionRowSet$.prototype.$getCollection$});
  $oj$$9$$.$CollectionRowSet$.prototype.hasMore = function $$oj$$9$$$$CollectionRowSet$$$hasMore$() {
    return this.$_collection$.hasMore
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.hasMore", {hasMore:$oj$$9$$.$CollectionRowSet$.prototype.hasMore});
  $oj$$9$$.$CollectionRowSet$.prototype.indexOf = function $$oj$$9$$$$CollectionRowSet$$$indexOf$($row$$42$$, $options$$255$$) {
    return this.$_collection$.indexOf($row$$42$$.$getModel$(), $options$$255$$)
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.indexOf", {indexOf:$oj$$9$$.$CollectionRowSet$.prototype.indexOf});
  $oj$$9$$.$CollectionRowSet$.prototype.$isEmpty$ = function $$oj$$9$$$$CollectionRowSet$$$$isEmpty$$() {
    return this.$_collection$.$isEmpty$()
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.isEmpty", {$isEmpty$:$oj$$9$$.$CollectionRowSet$.prototype.$isEmpty$});
  $oj$$9$$.$CollectionRowSet$.prototype.size = function $$oj$$9$$$$CollectionRowSet$$$size$() {
    return this.$_collection$.size()
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.size", {size:$oj$$9$$.$CollectionRowSet$.prototype.size});
  $oj$$9$$.$CollectionRowSet$.prototype.sort = function $$oj$$9$$$$CollectionRowSet$$$sort$() {
    this.$_collection$.comparator = this.comparator;
    return this.$_collection$.sort(null)
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.sort", {sort:$oj$$9$$.$CollectionRowSet$.prototype.sort});
  $oj$$9$$.$CollectionRowSet$.prototype.totalSize = function $$oj$$9$$$$CollectionRowSet$$$totalSize$() {
    return this.$_collection$.$totalResults$
  };
  $oj$$9$$.$CollectionRowSet$.prototype.$_addCollectionEventListeners$ = function $$oj$$9$$$$CollectionRowSet$$$$_addCollectionEventListeners$$() {
    var $self$$49$$ = this;
    this.$_collection$.on($oj$$9$$.$Events$.$EventType$.ADD, function($event$$114$$) {
      $oj$$9$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$49$$, $oj$$9$$.$RowSet$.$EventType$.ADD, {rowIdx:$self$$49$$.$_collection$.indexOf($event$$114$$), row:new $oj$$9$$.$ModelRow$($event$$114$$)})
    });
    this.$_collection$.on($oj$$9$$.$Events$.$EventType$.REMOVE, function($event$$115$$) {
      $oj$$9$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$49$$, $oj$$9$$.$RowSet$.$EventType$.REMOVE, {rowIdx:$self$$49$$.$_collection$.indexOf($event$$115$$), row:new $oj$$9$$.$ModelRow$($event$$115$$)})
    });
    this.$_collection$.on($oj$$9$$.$Events$.$EventType$.RESET, function($event$$116$$) {
      $oj$$9$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$49$$, $oj$$9$$.$RowSet$.$EventType$.RESET, $event$$116$$)
    });
    this.$_collection$.on($oj$$9$$.$Events$.$EventType$.SORT, function($event$$117$$) {
      $oj$$9$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$49$$, $oj$$9$$.$RowSet$.$EventType$.SORT, $event$$117$$)
    });
    this.$_collection$.on($oj$$9$$.$Events$.$EventType$.CHANGE, function($event$$118$$) {
      $oj$$9$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$49$$, $oj$$9$$.$RowSet$.$EventType$.CHANGE, {rowIdx:$self$$49$$.$_collection$.indexOf($event$$118$$), row:new $oj$$9$$.$ModelRow$($event$$118$$)})
    });
    this.$_collection$.on($oj$$9$$.$Events$.$EventType$.DESTROY, function($event$$119$$) {
      $oj$$9$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$49$$, $oj$$9$$.$RowSet$.$EventType$.DESTROY, $event$$119$$)
    });
    this.$_collection$.on($oj$$9$$.$Events$.$EventType$.SYNC, function($event$$120$$) {
      $oj$$9$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$49$$, $oj$$9$$.$RowSet$.$EventType$.SYNC, $event$$120$$)
    });
    this.$_collection$.on($oj$$9$$.$Events$.$EventType$.ERROR, function($event$$121$$) {
      $oj$$9$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$49$$, $oj$$9$$.$RowSet$.$EventType$.ERROR, $event$$121$$);
      $self$$49$$.$_endFetch$.call($self$$49$$, !1)
    })
  };
  $oj$$9$$.$CollectionRowSet$.prototype.$_compareCollection$ = function $$oj$$9$$$$CollectionRowSet$$$$_compareCollection$$($origCollection$$1$$, $updCollection$$, $origStartIndex$$3$$, $startIndex$$7$$, $pageSize$$5$$) {
    var $updates$$5$$ = [];
    if(0 < $updCollection$$.size()) {
      var $i$$183$$ = 0;
      $origCollection$$1$$.each(function($model$$42_rowIdx$$33$$) {
        $model$$42_rowIdx$$33$$ = $origCollection$$1$$.indexOf($model$$42_rowIdx$$33$$);
        $model$$42_rowIdx$$33$$ < $startIndex$$7$$ ? ($updates$$5$$[$i$$183$$] = {rowIdx:$model$$42_rowIdx$$33$$, status:$oj$$9$$.$RowSet$.$_ROW_STATUSES$.$_DELETED$}, $i$$183$$++) : 0 < $pageSize$$5$$ && $model$$42_rowIdx$$33$$ >= $startIndex$$7$$ + $pageSize$$5$$ && ($updates$$5$$[$i$$183$$] = {rowIdx:$model$$42_rowIdx$$33$$, status:$oj$$9$$.$RowSet$.$_ROW_STATUSES$.$_DELETED$}, $i$$183$$++)
      });
      $updCollection$$.each(function($model$$43$$) {
        var $rowIdx$$34$$ = $updCollection$$.indexOf($model$$43$$);
        if(0 < $pageSize$$5$$ && $rowIdx$$34$$ >= $startIndex$$7$$ && $rowIdx$$34$$ < $startIndex$$7$$ + $pageSize$$5$$ || 0 > $pageSize$$5$$) {
          var $keys$$12_origSize$$1$$ = $origCollection$$1$$.size();
          if($rowIdx$$34$$ < $origStartIndex$$3$$ || $rowIdx$$34$$ > $keys$$12_origSize$$1$$ - 1) {
            $updates$$5$$[$i$$183$$] = {rowIdx:$rowIdx$$34$$, status:$oj$$9$$.$RowSet$.$_ROW_STATUSES$.$_ADDED$}, $i$$183$$++
          }else {
            var $keys$$12_origSize$$1$$ = $model$$43$$.keys(), $origModel$$ = $origCollection$$1$$.at($rowIdx$$34$$), $updated$$1$$ = !1, $j$$31$$;
            for($j$$31$$ = 0;$j$$31$$ < $keys$$12_origSize$$1$$.length;$j$$31$$++) {
              if($model$$43$$.get($keys$$12_origSize$$1$$[$j$$31$$]).toString() != $origModel$$.get($keys$$12_origSize$$1$$[$j$$31$$]).toString()) {
                $updates$$5$$[$i$$183$$] = {rowIdx:$rowIdx$$34$$, status:$oj$$9$$.$RowSet$.$_ROW_STATUSES$.$_UPDATED$};
                $updated$$1$$ = !0;
                $i$$183$$++;
                break
              }
            }
            $updated$$1$$ || ($updates$$5$$[$i$$183$$] = {rowIdx:$rowIdx$$34$$, status:$oj$$9$$.$RowSet$.$_ROW_STATUSES$.$_NONE$}, $i$$183$$++)
          }
        }
      })
    }else {
      $i$$183$$ = 0, $origCollection$$1$$.each(function($model$$44$$) {
        $updates$$5$$[$i$$183$$] = {rowIdx:$origCollection$$1$$.indexOf($model$$44$$), status:$oj$$9$$.$RowSet$.$_ROW_STATUSES$.$_DELETED$};
        $i$$183$$++
      })
    }
    return $updates$$5$$
  };
  $oj$$9$$.$CollectionRowSet$.prototype.$_processUpdates$ = function $$oj$$9$$$$CollectionRowSet$$$$_processUpdates$$($updates$$6$$, $origCollection$$2$$) {
    var $allAdded$$1_noneUpdated$$1_rowIdx$$35$$ = !0, $i$$184$$;
    for($i$$184$$ = 0;$i$$184$$ < $updates$$6$$.length;$i$$184$$++) {
      if($updates$$6$$[$i$$184$$].status != $oj$$9$$.$RowSet$.$_ROW_STATUSES$.$_NONE$) {
        $allAdded$$1_noneUpdated$$1_rowIdx$$35$$ = !1;
        break
      }
    }
    if($allAdded$$1_noneUpdated$$1_rowIdx$$35$$) {
      this.$_endFetch$.call(this, !1)
    }else {
      $allAdded$$1_noneUpdated$$1_rowIdx$$35$$ = !0;
      for($i$$184$$ = 0;$i$$184$$ < $updates$$6$$.length;$i$$184$$++) {
        if($updates$$6$$[$i$$184$$].status != $oj$$9$$.$RowSet$.$_ROW_STATUSES$.$_ADDED$) {
          $allAdded$$1_noneUpdated$$1_rowIdx$$35$$ = !1;
          break
        }
      }
      if($allAdded$$1_noneUpdated$$1_rowIdx$$35$$) {
        this.$_endFetch$.call(this, !0)
      }else {
        for($i$$184$$ = 0;$i$$184$$ < $updates$$6$$.length;$i$$184$$++) {
          $allAdded$$1_noneUpdated$$1_rowIdx$$35$$ = $updates$$6$$[$i$$184$$].rowIdx, $updates$$6$$[$i$$184$$].status == $oj$$9$$.$RowSet$.$_ROW_STATUSES$.$_ADDED$ ? $oj$$9$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$9$$.$RowSet$.$EventType$.ADD, {rowIdx:$allAdded$$1_noneUpdated$$1_rowIdx$$35$$, row:this.$_collection$.at($allAdded$$1_noneUpdated$$1_rowIdx$$35$$)}) : $updates$$6$$[$i$$184$$].status == $oj$$9$$.$RowSet$.$_ROW_STATUSES$.$_DELETED$ ? $oj$$9$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call(this, 
          $oj$$9$$.$RowSet$.$EventType$.REMOVE, {rowIdx:$allAdded$$1_noneUpdated$$1_rowIdx$$35$$, row:$origCollection$$2$$.at($allAdded$$1_noneUpdated$$1_rowIdx$$35$$)}) : $updates$$6$$[$i$$184$$].status == $oj$$9$$.$RowSet$.$_ROW_STATUSES$.$_UPDATED$ && $oj$$9$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$9$$.$RowSet$.$EventType$.CHANGE, {rowIdx:$allAdded$$1_noneUpdated$$1_rowIdx$$35$$, row:this.$_collection$.at($allAdded$$1_noneUpdated$$1_rowIdx$$35$$)})
        }
        this.$_endFetch$.call(this, !1)
      }
    }
  };
  $oj$$9$$.$CollectionRowSet$.prototype.$_canFetch$ = function $$oj$$9$$$$CollectionRowSet$$$$_canFetch$$() {
    return!this.$_isFetching$
  };
  $oj$$9$$.$CollectionRowSet$.prototype.$_startFetch$ = function $$oj$$9$$$$CollectionRowSet$$$$_startFetch$$() {
    this.$_isFetching$ = !0;
    $oj$$9$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$9$$.$RowSet$.$EventType$.REQUEST, null)
  };
  $oj$$9$$.$CollectionRowSet$.prototype.$_endFetch$ = function $$oj$$9$$$$CollectionRowSet$$$$_endFetch$$($refresh$$2$$) {
    this.$_isFetching$ = !1;
    $oj$$9$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$9$$.$RowSet$.$EventType$.SYNC, $refresh$$2$$)
  };
  $oj$$9$$.$CollectionTableDataSource$ = function $$oj$$9$$$$CollectionTableDataSource$$($data$$77$$, $options$$257$$) {
    if(!($data$$77$$ instanceof $oj$$9$$.$Collection$)) {
      var $errSummary$$8$$ = $oj$$9$$.$Translations$.$getTranslatedString$("oj-ojTable.dataInvalidType.summary"), $errDetail$$8$$ = $oj$$9$$.$Translations$.$getTranslatedString$("oj-ojTable.dataInvalidType.detail");
      throw new $oj$$9$$.$Message$($errSummary$$8$$, $errDetail$$8$$, $oj$$9$$.$Message$.$SEVERITY_LEVEL$.ERROR);
    }
    $oj$$9$$.$CollectionTableDataSource$.$superclass$.constructor.call(this, $data$$77$$, $options$$257$$);
    this.$_rowSet$ = new $oj$$9$$.$CollectionRowSet$($data$$77$$, this.options);
    this.$_addRowSetEventListeners$();
    this.$Init$();
    if(null != $options$$257$$ && ("enabled" == $options$$257$$.startFetch || null == $options$$257$$.startFetch) || null == $options$$257$$) {
      var $self$$50$$ = this;
      setTimeout(function() {
        $self$$50$$.fetch({startFetch:"enabled"})
      }, 0)
    }
  };
  $goog$exportPath_$$("CollectionTableDataSource", $oj$$9$$.$CollectionTableDataSource$, $oj$$9$$);
  $oj$$9$$.$Object$.$createSubclass$($oj$$9$$.$CollectionTableDataSource$, $oj$$9$$.$TableDataSource$, "oj.CollectionTableDataSource");
  $oj$$9$$.$CollectionTableDataSource$.prototype.$Init$ = function $$oj$$9$$$$CollectionTableDataSource$$$$Init$$() {
    $oj$$9$$.$CollectionTableDataSource$.$superclass$.$Init$.call(this)
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.Init", {$Init$:$oj$$9$$.$CollectionTableDataSource$.prototype.$Init$});
  $oj$$9$$.$CollectionTableDataSource$.prototype.at = function $$oj$$9$$$$CollectionTableDataSource$$$at$($index$$131$$) {
    return this.$_rowSet$.at($index$$131$$)
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.at", {at:$oj$$9$$.$CollectionTableDataSource$.prototype.at});
  $oj$$9$$.$CollectionTableDataSource$.prototype.fetch = function $$oj$$9$$$$CollectionTableDataSource$$$fetch$($options$$258$$) {
    $options$$258$$ = $options$$258$$ || {};
    null != $options$$258$$.startIndex && $oj$$9$$.$CollectionTableDataSource$.$superclass$.startIndex.call(this, $options$$258$$.startIndex);
    "enabled" == $options$$258$$.startFetch ? (this.$_rowSet$.$isEmpty$() || "undefined" === typeof this.$_rowSet$.size()) && this.$_rowSet$.fetch($options$$258$$) : this.$_rowSet$.fetch($options$$258$$)
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.fetch", {fetch:$oj$$9$$.$CollectionTableDataSource$.prototype.fetch});
  $oj$$9$$.$CollectionTableDataSource$.prototype.get = function $$oj$$9$$$$CollectionTableDataSource$$$get$($id$$18$$) {
    return this.$_rowSet$.get($id$$18$$)
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.get", {get:$oj$$9$$.$CollectionTableDataSource$.prototype.get});
  $oj$$9$$.$CollectionTableDataSource$.prototype.hasMore = function $$oj$$9$$$$CollectionTableDataSource$$$hasMore$() {
    return null != this.$_rowSet$ ? this.$_rowSet$.hasMore() : !1
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.hasMore", {hasMore:$oj$$9$$.$CollectionTableDataSource$.prototype.hasMore});
  $oj$$9$$.$CollectionTableDataSource$.prototype.indexOf = function $$oj$$9$$$$CollectionTableDataSource$$$indexOf$($row$$43$$) {
    return this.$_rowSet$.indexOf($row$$43$$)
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.indexOf", {indexOf:$oj$$9$$.$CollectionTableDataSource$.prototype.indexOf});
  $oj$$9$$.$CollectionTableDataSource$.prototype.size = function $$oj$$9$$$$CollectionTableDataSource$$$size$() {
    return this.$_rowSet$.size()
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.size", {size:$oj$$9$$.$CollectionTableDataSource$.prototype.size});
  $oj$$9$$.$CollectionTableDataSource$.prototype.sort = function $$oj$$9$$$$CollectionTableDataSource$$$sort$($comparator$$17$$, $options$$259$$) {
    this.$_rowSet$.comparator = $comparator$$17$$;
    this.$_rowSet$.sort($options$$259$$)
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.sort", {sort:$oj$$9$$.$CollectionTableDataSource$.prototype.sort});
  $oj$$9$$.$CollectionTableDataSource$.prototype.totalSize = function $$oj$$9$$$$CollectionTableDataSource$$$totalSize$() {
    return this.$_rowSet$.totalSize()
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.totalSize", {totalSize:$oj$$9$$.$CollectionTableDataSource$.prototype.totalSize});
  $oj$$9$$.$CollectionTableDataSource$.prototype.$_addRowSetEventListeners$ = function $$oj$$9$$$$CollectionTableDataSource$$$$_addRowSetEventListeners$$() {
    var $self$$51$$ = this;
    this.$_rowSet$.on($oj$$9$$.$RowSet$.$EventType$.ADD, function($event$$122$$) {
      $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call($self$$51$$, $oj$$9$$.$RowSet$.$EventType$.ADD, $event$$122$$)
    });
    this.$_rowSet$.on($oj$$9$$.$RowSet$.$EventType$.REMOVE, function($event$$123$$) {
      $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call($self$$51$$, $oj$$9$$.$RowSet$.$EventType$.REMOVE, $event$$123$$)
    });
    this.$_rowSet$.on($oj$$9$$.$RowSet$.$EventType$.RESET, function($event$$124$$) {
      $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call($self$$51$$, $oj$$9$$.$RowSet$.$EventType$.RESET, $event$$124$$)
    });
    this.$_rowSet$.on($oj$$9$$.$RowSet$.$EventType$.SORT, function($event$$125$$) {
      $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call($self$$51$$, $oj$$9$$.$RowSet$.$EventType$.SORT, $event$$125$$)
    });
    this.$_rowSet$.on($oj$$9$$.$RowSet$.$EventType$.CHANGE, function($event$$126$$) {
      $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call($self$$51$$, $oj$$9$$.$RowSet$.$EventType$.CHANGE, $event$$126$$)
    });
    this.$_rowSet$.on($oj$$9$$.$RowSet$.$EventType$.DESTROY, function($event$$127$$) {
      $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call($self$$51$$, $oj$$9$$.$RowSet$.$EventType$.DESTROY, $event$$127$$)
    });
    this.$_rowSet$.on($oj$$9$$.$RowSet$.$EventType$.SYNC, function($event$$128$$) {
      $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call($self$$51$$, $oj$$9$$.$RowSet$.$EventType$.SYNC, $event$$128$$)
    });
    this.$_rowSet$.on($oj$$9$$.$RowSet$.$EventType$.ERROR, function($event$$129$$) {
      $oj$$9$$.$TableDataSource$.$superclass$.handleEvent.call($self$$51$$, $oj$$9$$.$RowSet$.$EventType$.ERROR, $event$$129$$)
    })
  }
});
