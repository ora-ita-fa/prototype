define(["ojs/ojcore", "jquery", "ojs/ojmodel", "ojs/ojdatacollection-common", "ojs/ojtable"], function($oj$$12$$, $$$$12$$) {
  $oj$$12$$.$ModelRow$ = function $$oj$$12$$$$ModelRow$$($model$$40$$, $options$$249$$) {
    $oj$$12$$.$ModelRow$._init(this, $model$$40$$, $options$$249$$, null)
  };
  $goog$exportPath_$$("ModelRow", $oj$$12$$.$ModelRow$, $oj$$12$$);
  $oj$$12$$.$Object$.$createSubclass$($oj$$12$$.$ModelRow$, $oj$$12$$.$Row$, "ModelRow.ModelRow");
  $oj$$12$$.$ModelRow$.prototype.Init = function $$oj$$12$$$$ModelRow$$$Init$() {
    $oj$$12$$.$Row$.$superclass$.Init.call(this)
  };
  $oj$$12$$.$ModelRow$.prototype.attributes = {};
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.attributes", {attributes:$oj$$12$$.$ModelRow$.prototype.attributes});
  $oj$$12$$.$ModelRow$.prototype.id = null;
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.id", {id:$oj$$12$$.$ModelRow$.prototype.id});
  $oj$$12$$.$ModelRow$.prototype.$idAttribute$ = null;
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.idAttribute", {$idAttribute$:$oj$$12$$.$ModelRow$.prototype.$idAttribute$});
  $oj$$12$$.$ModelRow$._init = function $$oj$$12$$$$ModelRow$$_init$($row$$41$$, $model$$41$$, $options$$250$$, $properties$$11$$) {
    var $prop$$74$$ = null;
    $row$$41$$.Init();
    $row$$41$$.$_model$ = $model$$41$$;
    $row$$41$$.id = $model$$41$$.id;
    $row$$41$$.$idAttribute$ = $model$$41$$.$idAttribute$;
    $row$$41$$.attributes = $model$$41$$.attributes;
    $row$$41$$.index = $model$$41$$.index;
    $options$$250$$ = $options$$250$$ || {};
    for($prop$$74$$ in $properties$$11$$) {
      $properties$$11$$.hasOwnProperty($prop$$74$$) && ($row$$41$$[$prop$$74$$] = $properties$$11$$[$prop$$74$$])
    }
    $row$$41$$.context = $options$$250$$.context
  };
  $oj$$12$$.$ModelRow$.prototype.clone = function $$oj$$12$$$$ModelRow$$$clone$() {
    return this.$_model$.clone()
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.clone", {clone:$oj$$12$$.$ModelRow$.prototype.clone});
  $oj$$12$$.$ModelRow$.prototype.get = function $$oj$$12$$$$ModelRow$$$get$($property$$20$$) {
    return this.$_model$.get($property$$20$$)
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.get", {get:$oj$$12$$.$ModelRow$.prototype.get});
  $oj$$12$$.$ModelRow$.prototype.$getModel$ = $JSCompiler_get$$("$_model$");
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.getModel", {$getModel$:$oj$$12$$.$ModelRow$.prototype.$getModel$});
  $oj$$12$$.$ModelRow$.prototype.set = function $$oj$$12$$$$ModelRow$$$set$($property$$21$$, $value$$165$$, $options$$251$$) {
    return this.$_model$.set($property$$21$$, $value$$165$$, $options$$251$$)
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.set", {set:$oj$$12$$.$ModelRow$.prototype.set});
  $oj$$12$$.$ModelRow$.prototype.keys = function $$oj$$12$$$$ModelRow$$$keys$() {
    return this.$_model$.keys()
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.keys", {keys:$oj$$12$$.$ModelRow$.prototype.keys});
  $oj$$12$$.$ModelRow$.prototype.$values$ = function $$oj$$12$$$$ModelRow$$$$values$$() {
    return this.$_model$.$values$()
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.values", {$values$:$oj$$12$$.$ModelRow$.prototype.$values$});
  $oj$$12$$.$ModelRow$.prototype.$pairs$ = function $$oj$$12$$$$ModelRow$$$$pairs$$() {
    return this.$_model$.$pairs$()
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.pairs", {$pairs$:$oj$$12$$.$ModelRow$.prototype.$pairs$});
  $oj$$12$$.$CollectionRowSet$ = function $$oj$$12$$$$CollectionRowSet$$($collection$$22$$, $options$$252$$) {
    $oj$$12$$.$CollectionRowSet$._init(this, $collection$$22$$, $options$$252$$, null)
  };
  $goog$exportPath_$$("CollectionRowSet", $oj$$12$$.$CollectionRowSet$, $oj$$12$$);
  $oj$$12$$.$CollectionRowSet$.prototype.$comparator$ = null;
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.comparator", {$comparator$:$oj$$12$$.$CollectionRowSet$.prototype.$comparator$});
  $oj$$12$$.$CollectionRowSet$.prototype.$sortSupported$ = !0;
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.sortSupported", {$sortSupported$:$oj$$12$$.$CollectionRowSet$.prototype.$sortSupported$});
  $oj$$12$$.$Object$.$createSubclass$($oj$$12$$.$CollectionRowSet$, $oj$$12$$.$RowSet$, "CollectionRowSet.CollectionRowSet");
  $oj$$12$$.$CollectionRowSet$.prototype.Init = function $$oj$$12$$$$CollectionRowSet$$$Init$() {
    $oj$$12$$.$CollectionRowSet$.$superclass$.Init.call(this)
  };
  $oj$$12$$.$CollectionRowSet$._init = function $$oj$$12$$$$CollectionRowSet$$_init$($rowSet$$4$$, $collection$$23$$, $options$$253$$, $properties$$12$$) {
    var $prop$$75$$;
    $rowSet$$4$$.$_eventHandlers$ = [];
    $rowSet$$4$$.$_startIndex$ = 0;
    $rowSet$$4$$.Init();
    if($properties$$12$$) {
      for($prop$$75$$ in $properties$$12$$) {
        $properties$$12$$.hasOwnProperty($prop$$75$$) && ($rowSet$$4$$[$prop$$75$$] = $properties$$12$$[$prop$$75$$])
      }
    }
    $rowSet$$4$$.$_collection$ = $collection$$23$$;
    $rowSet$$4$$.$_addCollectionEventListeners$()
  };
  $oj$$12$$.$CollectionRowSet$.prototype.at = function $$oj$$12$$$$CollectionRowSet$$$at$($index$$137$$, $options$$254$$) {
    var $model$$42$$ = this.$_collection$.at($index$$137$$, $options$$254$$);
    if(null != $model$$42$$) {
      if($model$$42$$ instanceof $oj$$12$$.$Model$) {
        return new $oj$$12$$.$ModelRow$($model$$42$$)
      }
      var $deferredModel$$ = $$$$12$$.Deferred();
      $$$$12$$.when($model$$42$$).done(function($resolvedModel$$1$$) {
        $deferredModel$$.resolve(new $oj$$12$$.$ModelRow$($resolvedModel$$1$$))
      });
      return $deferredModel$$
    }
    return null
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.at", {at:$oj$$12$$.$CollectionRowSet$.prototype.at});
  $oj$$12$$.$CollectionRowSet$.prototype.fetch = function $$oj$$12$$$$CollectionRowSet$$$fetch$($options$$255_pageSize$$3$$) {
    if(this.$_canFetch$.call(this)) {
      this.$_startFetch$.call(this);
      $options$$255_pageSize$$3$$ = $options$$255_pageSize$$3$$ || {};
      var $self$$66$$ = this, $isPaged$$ = null != $options$$255_pageSize$$3$$.startIndex ? !0 : !1;
      this.$_startIndex$ = $isPaged$$ ? $options$$255_pageSize$$3$$.startIndex : 0;
      $options$$255_pageSize$$3$$ = 0 < $options$$255_pageSize$$3$$.pageSize ? $options$$255_pageSize$$3$$.pageSize : -1;
      $isPaged$$ ? this.$_collection$.$setRangeLocal$(this.$_startIndex$, $options$$255_pageSize$$3$$).done(function() {
        $self$$66$$.$_endFetch$.call($self$$66$$, !0)
      }) : this.$_collection$.fetch({success:function($collection$$24$$) {
        $self$$66$$.$_collection$ = $collection$$24$$;
        $self$$66$$.$_endFetch$.call($self$$66$$, !0)
      }})
    }
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.fetch", {fetch:$oj$$12$$.$CollectionRowSet$.prototype.fetch});
  $oj$$12$$.$CollectionRowSet$.prototype.get = function $$oj$$12$$$$CollectionRowSet$$$get$($id$$24$$, $options$$257$$) {
    return new $oj$$12$$.$ModelRow$(this.$_collection$.get($id$$24$$, $options$$257$$))
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.get", {get:$oj$$12$$.$CollectionRowSet$.prototype.get});
  $oj$$12$$.$CollectionRowSet$.prototype.getCollection = $JSCompiler_get$$("$_collection$");
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.getCollection", {getCollection:$oj$$12$$.$CollectionRowSet$.prototype.getCollection});
  $oj$$12$$.$CollectionRowSet$.prototype.hasMore = function $$oj$$12$$$$CollectionRowSet$$$hasMore$() {
    return this.$_collection$.hasMore
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.hasMore", {hasMore:$oj$$12$$.$CollectionRowSet$.prototype.hasMore});
  $oj$$12$$.$CollectionRowSet$.prototype.indexOf = function $$oj$$12$$$$CollectionRowSet$$$indexOf$($row$$42$$, $options$$258$$) {
    return this.$_collection$.indexOf($row$$42$$.$getModel$(), $options$$258$$)
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.indexOf", {indexOf:$oj$$12$$.$CollectionRowSet$.prototype.indexOf});
  $oj$$12$$.$CollectionRowSet$.prototype.isEmpty = function $$oj$$12$$$$CollectionRowSet$$$isEmpty$() {
    return this.$_collection$.isEmpty()
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.isEmpty", {isEmpty:$oj$$12$$.$CollectionRowSet$.prototype.isEmpty});
  $oj$$12$$.$CollectionRowSet$.prototype.size = function $$oj$$12$$$$CollectionRowSet$$$size$() {
    return this.$_collection$.size()
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.size", {size:$oj$$12$$.$CollectionRowSet$.prototype.size});
  $oj$$12$$.$CollectionRowSet$.prototype.sort = function $$oj$$12$$$$CollectionRowSet$$$sort$() {
    this.$_collection$.comparator = this.comparator;
    return this.$_collection$.sort(null)
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.sort", {sort:$oj$$12$$.$CollectionRowSet$.prototype.sort});
  $oj$$12$$.$CollectionRowSet$.prototype.totalSize = function $$oj$$12$$$$CollectionRowSet$$$totalSize$() {
    return this.$_collection$.$totalResults$
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.totalSize", {totalSize:$oj$$12$$.$CollectionRowSet$.prototype.totalSize});
  $oj$$12$$.$CollectionRowSet$.prototype.$_addCollectionEventListeners$ = function $$oj$$12$$$$CollectionRowSet$$$$_addCollectionEventListeners$$() {
    var $self$$67$$ = this;
    this.$_collection$.on($oj$$12$$.$Events$.$EventType$.ADD, function($event$$133$$) {
      $oj$$12$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$67$$, $oj$$12$$.$RowSet$.$EventType$.ADD, {rowIdx:$self$$67$$.$_collection$.indexOf($event$$133$$), row:new $oj$$12$$.$ModelRow$($event$$133$$)})
    });
    this.$_collection$.on($oj$$12$$.$Events$.$EventType$.REMOVE, function($event$$134$$) {
      $oj$$12$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$67$$, $oj$$12$$.$RowSet$.$EventType$.REMOVE, {rowIdx:$self$$67$$.$_collection$.indexOf($event$$134$$), row:new $oj$$12$$.$ModelRow$($event$$134$$)})
    });
    this.$_collection$.on($oj$$12$$.$Events$.$EventType$.RESET, function($event$$135$$) {
      $oj$$12$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$67$$, $oj$$12$$.$RowSet$.$EventType$.RESET, $event$$135$$)
    });
    this.$_collection$.on($oj$$12$$.$Events$.$EventType$.SORT, function($event$$136$$, $eventOpts$$1$$) {
      $eventOpts$$1$$.add || $oj$$12$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$67$$, $oj$$12$$.$RowSet$.$EventType$.SORT, $event$$136$$)
    });
    this.$_collection$.on($oj$$12$$.$Events$.$EventType$.CHANGE, function($event$$137$$) {
      $oj$$12$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$67$$, $oj$$12$$.$RowSet$.$EventType$.CHANGE, {rowIdx:$self$$67$$.$_collection$.indexOf($event$$137$$), row:new $oj$$12$$.$ModelRow$($event$$137$$)})
    });
    this.$_collection$.on($oj$$12$$.$Events$.$EventType$.DESTROY, function($event$$138$$) {
      $oj$$12$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$67$$, $oj$$12$$.$RowSet$.$EventType$.DESTROY, $event$$138$$)
    });
    this.$_collection$.on($oj$$12$$.$Events$.$EventType$.SYNC, function($event$$139$$) {
      $oj$$12$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$67$$, $oj$$12$$.$RowSet$.$EventType$.SYNC, $event$$139$$)
    });
    this.$_collection$.on($oj$$12$$.$Events$.$EventType$.ERROR, function($event$$140$$) {
      $oj$$12$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$67$$, $oj$$12$$.$RowSet$.$EventType$.ERROR, $event$$140$$);
      $self$$67$$.$_endFetch$.call($self$$67$$, !1)
    })
  };
  $oj$$12$$.$CollectionRowSet$.prototype.$_canFetch$ = function $$oj$$12$$$$CollectionRowSet$$$$_canFetch$$() {
    return!this.$_isFetching$
  };
  $oj$$12$$.$CollectionRowSet$.prototype.$_startFetch$ = function $$oj$$12$$$$CollectionRowSet$$$$_startFetch$$() {
    this.$_isFetching$ = !0;
    $oj$$12$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$12$$.$RowSet$.$EventType$.REQUEST, null)
  };
  $oj$$12$$.$CollectionRowSet$.prototype.$_endFetch$ = function $$oj$$12$$$$CollectionRowSet$$$$_endFetch$$($refresh$$2$$) {
    this.$_isFetching$ = !1;
    $oj$$12$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$12$$.$RowSet$.$EventType$.SYNC, $refresh$$2$$)
  };
  $oj$$12$$.$CollectionTableDataSource$ = function $$oj$$12$$$$CollectionTableDataSource$$($data$$101$$, $options$$259$$) {
    if(!($data$$101$$ instanceof $oj$$12$$.$Collection$)) {
      var $errSummary$$7$$ = $oj$$12$$.$Translations$.$getTranslatedString$("oj-ojTable.dataInvalidType.summary"), $errDetail$$7$$ = $oj$$12$$.$Translations$.$getTranslatedString$("oj-ojTable.dataInvalidType.detail");
      throw new $oj$$12$$.$Message$($errSummary$$7$$, $errDetail$$7$$, $oj$$12$$.$Message$.$SEVERITY_LEVEL$.ERROR);
    }
    $oj$$12$$.$CollectionTableDataSource$.$superclass$.constructor.call(this, $data$$101$$, $options$$259$$);
    this.$_rowSet$ = new $oj$$12$$.$CollectionRowSet$($data$$101$$, this.options);
    this.$_addRowSetEventListeners$();
    this.Init();
    if(null != $options$$259$$ && ("enabled" == $options$$259$$.startFetch || null == $options$$259$$.startFetch) || null == $options$$259$$) {
      var $self$$68$$ = this;
      setTimeout(function() {
        $self$$68$$.fetch({startFetch:"enabled"})
      }, 0)
    }
  };
  $goog$exportPath_$$("CollectionTableDataSource", $oj$$12$$.$CollectionTableDataSource$, $oj$$12$$);
  $oj$$12$$.$Object$.$createSubclass$($oj$$12$$.$CollectionTableDataSource$, $oj$$12$$.$TableDataSource$, "oj.CollectionTableDataSource");
  $oj$$12$$.$CollectionTableDataSource$.prototype.Init = function $$oj$$12$$$$CollectionTableDataSource$$$Init$() {
    $oj$$12$$.$CollectionTableDataSource$.$superclass$.Init.call(this)
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.Init", {Init:$oj$$12$$.$CollectionTableDataSource$.prototype.Init});
  $oj$$12$$.$CollectionTableDataSource$.prototype.at = function $$oj$$12$$$$CollectionTableDataSource$$$at$($index$$138$$) {
    return this.$_rowSet$.at($index$$138$$)
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.at", {at:$oj$$12$$.$CollectionTableDataSource$.prototype.at});
  $oj$$12$$.$CollectionTableDataSource$.prototype.fetch = function $$oj$$12$$$$CollectionTableDataSource$$$fetch$($options$$260$$) {
    $options$$260$$ = $options$$260$$ || {};
    null != $options$$260$$.startIndex && $oj$$12$$.$CollectionTableDataSource$.$superclass$.startIndex.call(this, $options$$260$$.startIndex);
    "enabled" == $options$$260$$.startFetch ? (this.$_rowSet$.isEmpty() || "undefined" === typeof this.$_rowSet$.size()) && this.$_rowSet$.fetch($options$$260$$) : this.$_rowSet$.fetch($options$$260$$)
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.fetch", {fetch:$oj$$12$$.$CollectionTableDataSource$.prototype.fetch});
  $oj$$12$$.$CollectionTableDataSource$.prototype.get = function $$oj$$12$$$$CollectionTableDataSource$$$get$($id$$25$$) {
    return this.$_rowSet$.get($id$$25$$)
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.get", {get:$oj$$12$$.$CollectionTableDataSource$.prototype.get});
  $oj$$12$$.$CollectionTableDataSource$.prototype.hasMore = function $$oj$$12$$$$CollectionTableDataSource$$$hasMore$() {
    return null != this.$_rowSet$ ? this.$_rowSet$.hasMore() : !1
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.hasMore", {hasMore:$oj$$12$$.$CollectionTableDataSource$.prototype.hasMore});
  $oj$$12$$.$CollectionTableDataSource$.prototype.indexOf = function $$oj$$12$$$$CollectionTableDataSource$$$indexOf$($row$$43$$) {
    return this.$_rowSet$.indexOf($row$$43$$)
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.indexOf", {indexOf:$oj$$12$$.$CollectionTableDataSource$.prototype.indexOf});
  $oj$$12$$.$CollectionTableDataSource$.prototype.size = function $$oj$$12$$$$CollectionTableDataSource$$$size$() {
    return this.$_rowSet$.size()
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.size", {size:$oj$$12$$.$CollectionTableDataSource$.prototype.size});
  $oj$$12$$.$CollectionTableDataSource$.prototype.sort = function $$oj$$12$$$$CollectionTableDataSource$$$sort$($criteria$$10_direction$$8$$) {
    var $key$$71$$ = $criteria$$10_direction$$8$$.key;
    $criteria$$10_direction$$8$$ = $criteria$$10_direction$$8$$.direction;
    var $comparator$$15$$ = null;
    "ascending" == $criteria$$10_direction$$8$$ ? $comparator$$15$$ = function $$comparator$$15$$$($row$$44$$) {
      return $$$$12$$.isFunction($row$$44$$.get) ? $row$$44$$.get($key$$71$$) : $row$$44$$[$key$$71$$]()
    } : "descending" == $criteria$$10_direction$$8$$ && ($comparator$$15$$ = function $$comparator$$15$$$($rowA$$1$$, $rowB$$1$$) {
      var $a$$63$$, $b$$42$$;
      $$$$12$$.isFunction($rowA$$1$$.get) ? ($a$$63$$ = $rowA$$1$$.get($key$$71$$), $b$$42$$ = $rowB$$1$$.get($key$$71$$)) : ($a$$63$$ = $rowA$$1$$[$key$$71$$](), $b$$42$$ = $rowB$$1$$[$key$$71$$]());
      return $a$$63$$ === $b$$42$$ ? 0 : $a$$63$$ > $b$$42$$ ? -1 : 1
    });
    this.$_rowSet$.comparator = $comparator$$15$$;
    this.$_rowSet$.sort()
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.sort", {sort:$oj$$12$$.$CollectionTableDataSource$.prototype.sort});
  $oj$$12$$.$CollectionTableDataSource$.prototype.totalSize = function $$oj$$12$$$$CollectionTableDataSource$$$totalSize$() {
    return this.$_rowSet$.totalSize()
  };
  $oj$$12$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.totalSize", {totalSize:$oj$$12$$.$CollectionTableDataSource$.prototype.totalSize});
  $oj$$12$$.$CollectionTableDataSource$.prototype.$_addRowSetEventListeners$ = function $$oj$$12$$$$CollectionTableDataSource$$$$_addRowSetEventListeners$$() {
    var $self$$69$$ = this;
    this.$_rowSet$.on($oj$$12$$.$RowSet$.$EventType$.ADD, function($event$$141$$) {
      $self$$69$$.$isFetching$ = !1;
      $oj$$12$$.$TableDataSource$.$superclass$.handleEvent.call($self$$69$$, $oj$$12$$.$RowSet$.$EventType$.ADD, $event$$141$$)
    });
    this.$_rowSet$.on($oj$$12$$.$RowSet$.$EventType$.REMOVE, function($event$$142$$) {
      $self$$69$$.$isFetching$ = !1;
      $oj$$12$$.$TableDataSource$.$superclass$.handleEvent.call($self$$69$$, $oj$$12$$.$RowSet$.$EventType$.REMOVE, $event$$142$$)
    });
    this.$_rowSet$.on($oj$$12$$.$RowSet$.$EventType$.REQUEST, function($event$$143$$) {
      $self$$69$$.$isFetching$ = !0;
      $oj$$12$$.$TableDataSource$.$superclass$.handleEvent.call($self$$69$$, $oj$$12$$.$RowSet$.$EventType$.REQUEST, $event$$143$$)
    });
    this.$_rowSet$.on($oj$$12$$.$RowSet$.$EventType$.RESET, function($event$$144$$) {
      $self$$69$$.$isFetching$ = !1;
      $oj$$12$$.$TableDataSource$.$superclass$.handleEvent.call($self$$69$$, $oj$$12$$.$RowSet$.$EventType$.RESET, $event$$144$$)
    });
    this.$_rowSet$.on($oj$$12$$.$RowSet$.$EventType$.SORT, function($event$$145$$) {
      $self$$69$$.$isFetching$ = !1;
      $oj$$12$$.$TableDataSource$.$superclass$.handleEvent.call($self$$69$$, $oj$$12$$.$RowSet$.$EventType$.SORT, $event$$145$$)
    });
    this.$_rowSet$.on($oj$$12$$.$RowSet$.$EventType$.CHANGE, function($event$$146$$) {
      $self$$69$$.$isFetching$ = !1;
      $oj$$12$$.$TableDataSource$.$superclass$.handleEvent.call($self$$69$$, $oj$$12$$.$RowSet$.$EventType$.CHANGE, $event$$146$$)
    });
    this.$_rowSet$.on($oj$$12$$.$RowSet$.$EventType$.DESTROY, function($event$$147$$) {
      $self$$69$$.$isFetching$ = !1;
      $oj$$12$$.$TableDataSource$.$superclass$.handleEvent.call($self$$69$$, $oj$$12$$.$RowSet$.$EventType$.DESTROY, $event$$147$$)
    });
    this.$_rowSet$.on($oj$$12$$.$RowSet$.$EventType$.SYNC, function($event$$148$$) {
      $self$$69$$.$isFetching$ = !1;
      $oj$$12$$.$TableDataSource$.$superclass$.handleEvent.call($self$$69$$, $oj$$12$$.$RowSet$.$EventType$.SYNC, $event$$148$$)
    });
    this.$_rowSet$.on($oj$$12$$.$RowSet$.$EventType$.ERROR, function($event$$149$$) {
      $self$$69$$.$isFetching$ = !1;
      $oj$$12$$.$TableDataSource$.$superclass$.handleEvent.call($self$$69$$, $oj$$12$$.$RowSet$.$EventType$.ERROR, $event$$149$$)
    })
  }
});
