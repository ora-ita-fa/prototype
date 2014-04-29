define(["ojs/ojcore", "jquery", "ojs/ojdatacollection-common", "ojs/ojmodel"], function($oj$$27$$, $$$$27$$) {
  $oj$$27$$.$CollectionTreeDataSource$ = function $$oj$$27$$$$CollectionTreeDataSource$$($options$$271$$) {
    $options$$271$$ = $options$$271$$ || {};
    this.$rootCollection$ = $options$$271$$.root;
    this.$childCollectionCallback$ = $options$$271$$.childCollectionCallback;
    this.$parseMetadata$ = $options$$271$$.parseMetadata;
    this.$sortkey$ = null;
    this.$sortdir$ = "none";
    this.$cache$ = {};
    $oj$$27$$.$CollectionTreeDataSource$.$superclass$.constructor.call(this)
  };
  $goog$exportPath_$$("CollectionTreeDataSource", $oj$$27$$.$CollectionTreeDataSource$, $oj$$27$$);
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$parseMetadata$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$parseMetadata$$($model$$42$$) {
    return{key:$model$$42$$.idAttribute + "\x3d" + $model$$42$$.id}
  };
  $oj$$27$$.$Object$.$createSubclass$($oj$$27$$.$CollectionTreeDataSource$, $oj$$27$$.$TreeDataSource$, "oj.CollectionTreeDataSource");
  $oj$$27$$.$CollectionTreeDataSource$.prototype.Init = function $$oj$$27$$$$CollectionTreeDataSource$$$Init$() {
    $oj$$27$$.$CollectionTreeDataSource$.$superclass$.Init.call(this)
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.Init", {Init:$oj$$27$$.$CollectionTreeDataSource$.prototype.Init});
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$getChildCount$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$getChildCount$$($parent$$27$$) {
    var $childColl$$ = this.$cache$[$parent$$27$$];
    if($childColl$$ && 0 < $childColl$$.length) {
      return $childColl$$.length
    }
    this.$getChildCollection$($parent$$27$$, {success:function($coll$$3$$) {
      return $coll$$3$$.length
    }});
    return-1
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getChildCount", {$getChildCount$:$oj$$27$$.$CollectionTreeDataSource$.prototype.$getChildCount$});
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$getChildCollection$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$getChildCollection$$($key$$94$$, $callbacks$$36$$) {
    this.$fetchChildren$($key$$94$$, null, {success:function($nodeSet$$32$$) {
      $callbacks$$36$$.success($nodeSet$$32$$.$collection$)
    }, error:$callbacks$$36$$.error})
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getChildCollection", {$getChildCollection$:$oj$$27$$.$CollectionTreeDataSource$.prototype.$getChildCollection$});
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$fetchChildren$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$fetchChildren$$($parent$$28$$, $range$$22$$, $callbacks$$37$$) {
    $range$$22$$ = $range$$22$$ || {};
    var $start$$26$$ = $range$$22$$.start ? $range$$22$$.start : 0, $count$$26$$ = $range$$22$$.count ? $range$$22$$.count : -1;
    if(null === $parent$$28$$) {
      this.$FetchCollection$(null, $start$$26$$, $count$$26$$, $callbacks$$37$$, null)
    }else {
      var $self$$81$$ = this;
      this.$_getModelForId$(this.$rootCollection$, $parent$$28$$, 0).done(function($collection$$25_parentModel$$) {
        $collection$$25_parentModel$$ ? ($collection$$25_parentModel$$ = $self$$81$$.$GetChildCollection$($collection$$25_parentModel$$.$model$), $self$$81$$.$FetchCollection$($collection$$25_parentModel$$, $start$$26$$, $count$$26$$, $callbacks$$37$$, $parent$$28$$)) : $callbacks$$37$$ && $callbacks$$37$$.error && $callbacks$$37$$.error($parent$$28$$)
      })
    }
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.fetchChildren", {$fetchChildren$:$oj$$27$$.$CollectionTreeDataSource$.prototype.$fetchChildren$});
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$ModelAdded$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$ModelAdded$$($event$$289_model$$43$$, $collection$$26$$, $options$$273$$) {
    var $index$$149$$ = 0;
    $options$$273$$ && $options$$273$$.at && ($index$$149$$ = $options$$273$$.at);
    $event$$289_model$$43$$ = this.$_createEvent$(this, "insert", $index$$149$$, this.$_getParentChain$($collection$$26$$), this.$_putModelInRowset$($event$$289_model$$43$$));
    this.handleEvent("insert", $event$$289_model$$43$$)
  };
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$ModelRemoved$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$ModelRemoved$$($event$$290_model$$44$$, $collection$$27$$, $options$$274$$) {
    var $index$$150$$ = 0;
    $options$$274$$ && $options$$274$$.index && ($index$$150$$ = $options$$274$$.index);
    this.$_removeCollectionFromCache$($event$$290_model$$44$$);
    $event$$290_model$$44$$ = this.$_createEvent$(this, "delete", $index$$150$$, this.$_getParentChain$($collection$$27$$), null);
    this.handleEvent("delete", $event$$290_model$$44$$)
  };
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$ModelUpdated$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$ModelUpdated$$($event$$291_model$$45$$) {
    var $collectionForModel$$ = this.$_getCollectionForModel$($event$$291_model$$45$$), $index$$151$$ = null, $parents$$3$$ = null;
    $collectionForModel$$ && ($index$$151$$ = $collectionForModel$$.index, $parents$$3$$ = this.$_getParentChain$($collectionForModel$$.$collection$));
    $event$$291_model$$45$$ = this.$_createEvent$(this, "update", $index$$151$$, $parents$$3$$, this.$_putModelInRowset$($event$$291_model$$45$$));
    this.handleEvent("update", $event$$291_model$$45$$)
  };
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$CollectionRefreshed$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$CollectionRefreshed$$($collection$$28_event$$292$$) {
    $collection$$28_event$$292$$ = this.$_createEvent$(this, "refresh", null, this.$_getParentChain$($collection$$28_event$$292$$), null);
    this.handleEvent("refresh", $collection$$28_event$$292$$)
  };
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$_putModelInRowset$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$_putModelInRowset$$($model$$46_rowset$$) {
    var $rows$$5$$ = [];
    $rows$$5$$.push($model$$46_rowset$$.attributes);
    var $options$$277$$ = {};
    $options$$277$$.idAttribute = $model$$46_rowset$$.idAttribute;
    $model$$46_rowset$$ = new $oj$$27$$.$ArrayRowSet$($rows$$5$$, $options$$277$$);
    $model$$46_rowset$$.fetch();
    return $model$$46_rowset$$
  };
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$_getParentChain$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$_getParentChain$$($coll$$4_collection$$29$$) {
    var $parents$$4$$ = [], $parent$$29$$ = null;
    do {
      $parent$$29$$ = this.$_getParentOfCollection$($coll$$4_collection$$29$$), null !== $parent$$29$$ && ($parent$$29$$ !== $oj$$27$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$ && $parents$$4$$.unshift($parent$$29$$), $coll$$4_collection$$29$$ = this.$_getCollectionOfKey$($parent$$29$$))
    }while(null != $parent$$29$$);
    return $parents$$4$$
  };
  $oj$$27$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$ = "%!@ROOT%#@!";
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$_getCacheKey$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$_getCacheKey$$($model$$47$$) {
    var $key$$95$$ = $model$$47$$ instanceof $oj$$27$$.$Model$ ? this.$parseMetadata$($model$$47$$).key : $model$$47$$;
    return $model$$47$$ ? $key$$95$$ : $oj$$27$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$
  };
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$__getParentsChildCollectionFromCache$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$__getParentsChildCollectionFromCache$$($model$$48$$) {
    return this.$cache$[this.$_getCacheKey$($model$$48$$)]
  };
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$_setCollectionInCache$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$_setCollectionInCache$$($model$$49$$, $collection$$30$$) {
    $collection$$30$$.on($oj$$27$$.$Events$.$EventType$.ADD, this.$ModelAdded$, this);
    $collection$$30$$.on($oj$$27$$.$Events$.$EventType$.REMOVE, this.$ModelRemoved$, this);
    $collection$$30$$.on($oj$$27$$.$Events$.$EventType$.CHANGE, this.$ModelUpdated$, this);
    $collection$$30$$.on($oj$$27$$.$Events$.$EventType$.SYNC, this.$CollectionRefreshed$, this);
    this.$cache$[this.$_getCacheKey$($model$$49$$)] = $collection$$30$$
  };
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$_removeCollectionFromCache$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$_removeCollectionFromCache$$($key$$96_model$$50$$) {
    $key$$96_model$$50$$ = this.$_getCacheKey$($key$$96_model$$50$$);
    for(var $prop$$78$$ in this.$cache$) {
      if(this.$cache$.hasOwnProperty($prop$$78$$) && $prop$$78$$ === $key$$96_model$$50$$) {
        this.$cache$[$key$$96_model$$50$$].off(null, null, this);
        delete this.$cache$[$key$$96_model$$50$$];
        break
      }
    }
  };
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$_keyInCollection$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$_keyInCollection$$($key$$97$$, $collection$$31$$) {
    for(var $count$$27$$ = $collection$$31$$.length, $i$$258$$ = 0;$i$$258$$ < $count$$27$$;$i$$258$$++) {
      var $currKey$$2$$ = this.$_getCacheKey$($collection$$31$$.at($i$$258$$));
      if($key$$97$$ === $currKey$$2$$) {
        return!0
      }
    }
    return!1
  };
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$_getCollectionForModel$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$_getCollectionForModel$$($model$$51$$) {
    for(var $prop$$79$$ in this.$cache$) {
      if(this.$cache$.hasOwnProperty($prop$$79$$)) {
        for(var $collection$$32$$ = this.$cache$[$prop$$79$$], $i$$259$$ = 0;$i$$259$$ < $collection$$32$$.length;$i$$259$$++) {
          if($collection$$32$$.at($i$$259$$) === $model$$51$$) {
            return{index:$i$$259$$, $collection$:$collection$$32$$}
          }
        }
      }
    }
    return null
  };
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$_getCollectionOfKey$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$_getCollectionOfKey$$($key$$98$$) {
    for(var $prop$$80$$ in this.$cache$) {
      if(this.$cache$.hasOwnProperty($prop$$80$$)) {
        var $collection$$33$$ = this.$cache$[$prop$$80$$];
        if(this.$_keyInCollection$($key$$98$$, $collection$$33$$)) {
          return $collection$$33$$
        }
      }
    }
    return null
  };
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$_getParentOfCollection$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$_getParentOfCollection$$($collection$$34$$) {
    for(var $prop$$81$$ in this.$cache$) {
      if(this.$cache$.hasOwnProperty($prop$$81$$) && this.$cache$[$prop$$81$$] === $collection$$34$$) {
        return $prop$$81$$
      }
    }
    return null
  };
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$GetChildCollection$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$GetChildCollection$$($parentModel$$1$$) {
    var $cached$$ = !0, $collection$$35$$ = this.$__getParentsChildCollectionFromCache$($parentModel$$1$$);
    $collection$$35$$ || ($cached$$ = !1, $collection$$35$$ = this.$childCollectionCallback$(this.$rootCollection$, $parentModel$$1$$), null != $collection$$35$$ && (this.$_applySortToCollection$($collection$$35$$), this.$_setCollectionInCache$($parentModel$$1$$, $collection$$35$$)));
    return{$collection$:$collection$$35$$, $cached$:$cached$$}
  };
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$_createEvent$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$_createEvent$$($source$$10$$, $operation$$5$$, $index$$152$$, $parent$$30$$, $data$$131$$) {
    return{source:$source$$10$$, operation:$operation$$5$$, index:$index$$152$$, parent:$parent$$30$$, data:$data$$131$$}
  };
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$FetchCollection$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$FetchCollection$$($collection$$36$$, $start$$27$$, $count$$28$$, $callbacks$$38$$, $parent$$31$$) {
    var $self$$82$$ = this;
    null === $collection$$36$$ && (($collection$$36$$ = this.$__getParentsChildCollectionFromCache$(null)) ? $collection$$36$$ = {$collection$:$collection$$36$$, $cached$:!0} : ($collection$$36$$ = {$collection$:$self$$82$$.$rootCollection$, $cached$:!1}, $self$$82$$.$_setCollectionInCache$(null, this.$rootCollection$)));
    $collection$$36$$ && $self$$82$$.$_fetch$($collection$$36$$, function($coll$$5$$) {
      $callbacks$$38$$.success && $callbacks$$38$$.success($self$$82$$.$_getNodeSet$($coll$$5$$, $parent$$31$$, $start$$27$$, $count$$28$$))
    }, $callbacks$$38$$.error)
  };
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$_getNodeSet$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$_getNodeSet$$($collection$$37$$, $parent$$32$$, $start$$28$$, $count$$29$$) {
    return new $oj$$27$$.$CollectionNodeSet$($parent$$32$$, $collection$$37$$, this, $start$$28$$, $count$$29$$)
  };
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$_scanForKey$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$_scanForKey$$($collection$$38$$, $key$$99$$) {
    function $checkNext$$($index$$153$$, $collection$$39$$, $key$$100$$) {
      $index$$153$$ < $collection$$39$$.length ? $collection$$39$$.at($index$$153$$, {deferred:!0}).done(function($model$$52$$) {
        if($model$$52$$) {
          var $parse$$2$$ = $self$$83$$.$parseMetadata$($model$$52$$);
          if($key$$100$$ === $parse$$2$$.key) {
            return $dfd$$4$$.resolve($model$$52$$), $dfd$$4$$
          }
        }
        $index$$153$$++;
        $checkNext$$($index$$153$$, $collection$$39$$, $key$$100$$)
      }) : $dfd$$4$$.resolve(null)
    }
    var $dfd$$4$$ = $$$$27$$.Deferred(), $self$$83$$ = this;
    $checkNext$$(0, $collection$$38$$, $key$$99$$);
    return $dfd$$4$$
  };
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$_getModelForId$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$_getModelForId$$($collection$$40$$, $key$$101$$, $depth$$19$$) {
    var $dfd$$5$$ = $$$$27$$.Deferred(), $self$$84$$ = this;
    this.$_scanForKey$($collection$$40$$, $key$$101$$).done(function($model$$53$$) {
      function $getNextCollection$$($index$$154$$, $tds$$) {
        if($index$$154$$ < $max$$7$$) {
          var $childColl$$1$$ = $tds$$.$GetChildCollection$($collection$$40$$.at($index$$154$$));
          $childColl$$1$$.$collection$ ? $tds$$.$_fetch$($childColl$$1$$, function($fetchColl$$) {
            $tds$$.$_getModelForId$($fetchColl$$, $key$$101$$, $depth$$19$$ + 1).done(function($childModel$$) {
              $childModel$$ ? $dfd$$5$$.resolve($childModel$$) : ($index$$154$$++, $getNextCollection$$($index$$154$$, $tds$$))
            })
          }, null) : ($index$$154$$++, $getNextCollection$$($index$$154$$, $tds$$))
        }else {
          $dfd$$5$$.resolve(null)
        }
      }
      if($model$$53$$) {
        return $dfd$$5$$.resolve({$model$:$model$$53$$, depth:$depth$$19$$}), $dfd$$5$$
      }
      var $max$$7$$ = $collection$$40$$.length;
      $getNextCollection$$(0, $self$$84$$)
    });
    return $dfd$$5$$.promise()
  };
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$_fetch$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$_fetch$$($collectionCacheObj$$, $success$$15$$, $error$$15$$) {
    $collectionCacheObj$$.$cached$ ? $success$$15$$($collectionCacheObj$$.$collection$) : (this.$sortkey$ && "none" !== this.$sortkey$ && ($collectionCacheObj$$.$collection$.$comparator$ = this.$sortkey$, $collectionCacheObj$$.$collection$.$sortDirection$ = this.$sortdir$), 0 < $collectionCacheObj$$.$collection$.length ? $success$$15$$($collectionCacheObj$$.$collection$) : $collectionCacheObj$$.$collection$.fetch({success:function($fetchColl$$1$$) {
      $success$$15$$($fetchColl$$1$$)
    }, error:$error$$15$$}))
  };
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$fetchDescendents$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$fetchDescendents$$($parent$$33$$, $callbacks$$39$$) {
    var $self$$85$$ = this;
    null === $parent$$33$$ ? this.$FetchCollection$(null, 0, -1, {success:function($nodeSet$$33$$) {
      $nodeSet$$33$$.$FetchDescendants$({success:function() {
        $callbacks$$39$$.success && $callbacks$$39$$.success($nodeSet$$33$$)
      }})
    }}, null) : this.$_getModelForId$(this.$rootCollection$, $parent$$33$$, 0).done(function($collection$$41_parentModel$$2$$) {
      $collection$$41_parentModel$$2$$ && ($collection$$41_parentModel$$2$$ = $self$$85$$.$GetChildCollection$($collection$$41_parentModel$$2$$.$model$), $self$$85$$.$FetchCollection$($collection$$41_parentModel$$2$$, 0, -1, {success:function($nodeSet$$34$$) {
        $nodeSet$$34$$.$FetchDescendants$({success:function() {
          $callbacks$$39$$.success && $callbacks$$39$$.success($nodeSet$$34$$)
        }})
      }}, $parent$$33$$))
    })
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.fetchDescendents", {$fetchDescendents$:$oj$$27$$.$CollectionTreeDataSource$.prototype.$fetchDescendents$});
  $oj$$27$$.$CollectionTreeDataSource$.prototype.sort = function $$oj$$27$$$$CollectionTreeDataSource$$$sort$($criteria$$11$$, $callbacks$$40$$) {
    var $key$$102$$ = $criteria$$11$$.key, $dir$$ = $criteria$$11$$.direction, $needSort$$2$$ = !1;
    $key$$102$$ !== this.$sortkey$ && (this.$sortkey$ = $key$$102$$, $needSort$$2$$ = !0);
    $dir$$ !== this.$sortdir$ && (this.$sortdir$ = $dir$$, $needSort$$2$$ = !0);
    if($needSort$$2$$) {
      "none" === this.$sortdir$ && (this.$cache$ = {});
      for(var $prop$$82$$ in this.$cache$) {
        this.$cache$.hasOwnProperty($prop$$82$$) && this.$_applySortToCollection$(this.$cache$[$prop$$82$$])
      }
    }
    $callbacks$$40$$ && $callbacks$$40$$.success && $callbacks$$40$$.success()
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.sort", {sort:$oj$$27$$.$CollectionTreeDataSource$.prototype.sort});
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$_applySortToCollection$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$_applySortToCollection$$($collection$$43$$) {
    $collection$$43$$.comparator = this.$sortkey$;
    $collection$$43$$.sortDirection = "ascending" === this.$sortdir$ ? 1 : -1;
    $collection$$43$$.sort()
  };
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$getSortCriteria$ = function $$oj$$27$$$$CollectionTreeDataSource$$$$getSortCriteria$$() {
    return{key:this.$sortkey$, direction:this.$sortdir$}
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getSortCriteria", {$getSortCriteria$:$oj$$27$$.$CollectionTreeDataSource$.prototype.$getSortCriteria$});
  $oj$$27$$.$CollectionTreeDataSource$.prototype.move = function $$oj$$27$$$$CollectionTreeDataSource$$$move$() {
    $oj$$27$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.move", {move:$oj$$27$$.$CollectionTreeDataSource$.prototype.move});
  $oj$$27$$.$CollectionTreeDataSource$.prototype.$moveOK$ = $JSCompiler_returnArg$$("invalid");
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.moveOK", {$moveOK$:$oj$$27$$.$CollectionTreeDataSource$.prototype.$moveOK$});
  $oj$$27$$.$CollectionTreeDataSource$.prototype.getCapability = function $$oj$$27$$$$CollectionTreeDataSource$$$getCapability$($feature$$13$$) {
    return"sort" === $feature$$13$$ ? "default" : "move" === $feature$$13$$ ? "none" : "batchFetch" === $feature$$13$$ || "fetchDescendants" === $feature$$13$$ ? "disable" : null
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getCapability", {getCapability:$oj$$27$$.$CollectionTreeDataSource$.prototype.getCapability});
  $oj$$27$$.$CollectionNodeSet$ = function $$oj$$27$$$$CollectionNodeSet$$($parentKey$$11$$, $collection$$44$$, $treeDataSource$$2$$, $start$$29$$, $count$$30$$) {
    this.$parentKey$ = $parentKey$$11$$;
    this.$collection$ = $collection$$44$$;
    this.$childNodeSet$ = [];
    this.$treeDataSource$ = $treeDataSource$$2$$;
    this.start = $start$$29$$ < $collection$$44$$.length ? $start$$29$$ : $collection$$44$$.length - 1;
    this.count = -1 === $count$$30$$ ? $collection$$44$$.length : Math.min($collection$$44$$.length, $count$$30$$)
  };
  $goog$exportPath_$$("CollectionNodeSet", $oj$$27$$.$CollectionNodeSet$, $oj$$27$$);
  $oj$$27$$.$CollectionNodeSet$.prototype.$FetchDescendants$ = function $$oj$$27$$$$CollectionNodeSet$$$$FetchDescendants$$($callbacks$$42$$) {
    this.$_fetchDescendants$(this).done(function() {
      $callbacks$$42$$.success && $callbacks$$42$$.success()
    })
  };
  $oj$$27$$.$CollectionNodeSet$.prototype.$_fetchDescendants$ = function $$oj$$27$$$$CollectionNodeSet$$$$_fetchDescendants$$($nodeSet$$35$$) {
    function $nextNode$$($index$$155$$) {
      $index$$155$$ < $count$$31$$ ? $nodeSet$$35$$.$FetchChildNodeSet$($index$$155$$, {success:function($childNodeSet$$1$$) {
        null !== $childNodeSet$$1$$ ? $nodeSet$$35$$.$_fetchDescendants$($childNodeSet$$1$$).done(function() {
          $nextNode$$($index$$155$$ + 1)
        }) : $nextNode$$($index$$155$$ + 1)
      }}) : $dfd$$6$$.resolve()
    }
    var $dfd$$6$$ = $$$$27$$.Deferred(), $count$$31$$ = $nodeSet$$35$$.$getCount$();
    $nextNode$$(0);
    return $dfd$$6$$.promise()
  };
  $oj$$27$$.$CollectionNodeSet$.prototype.$FetchChildNodeSet$ = function $$oj$$27$$$$CollectionNodeSet$$$$FetchChildNodeSet$$($index$$156$$, $callbacks$$43$$) {
    var $model$$54_parentKey$$12$$ = this.$collection$.at($index$$156$$);
    if(this.$treeDataSource$.$parseMetadata$($model$$54_parentKey$$12$$).leaf) {
      this.$childNodeSet$[$index$$156$$] = null, $callbacks$$43$$.success(null)
    }else {
      var $collection$$45$$ = this.$treeDataSource$.$GetChildCollection$($model$$54_parentKey$$12$$), $model$$54_parentKey$$12$$ = this.$treeDataSource$.$parseMetadata$($model$$54_parentKey$$12$$).key, $self$$86$$ = this;
      this.$treeDataSource$.$FetchCollection$($collection$$45$$, 0, -1, {success:function($nodeSet$$36$$) {
        $self$$86$$.$childNodeSet$[$index$$156$$] = $nodeSet$$36$$;
        $callbacks$$43$$.success($nodeSet$$36$$)
      }}, $model$$54_parentKey$$12$$)
    }
  };
  $oj$$27$$.$CollectionNodeSet$.prototype.getParent = $JSCompiler_get$$("$parentKey$");
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getParent", {getParent:$oj$$27$$.$CollectionNodeSet$.prototype.getParent});
  $oj$$27$$.$CollectionNodeSet$.prototype.$getStart$ = $JSCompiler_get$$("start");
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getStart", {$getStart$:$oj$$27$$.$CollectionNodeSet$.prototype.$getStart$});
  $oj$$27$$.$CollectionNodeSet$.prototype.$getCount$ = $JSCompiler_get$$("count");
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getCount", {$getCount$:$oj$$27$$.$CollectionNodeSet$.prototype.$getCount$});
  $oj$$27$$.$CollectionNodeSet$.prototype.getData = function $$oj$$27$$$$CollectionNodeSet$$$getData$($index$$157$$) {
    this.$_checkRange$($index$$157$$);
    return this.$collection$.at($index$$157$$).attributes
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getData", {getData:$oj$$27$$.$CollectionNodeSet$.prototype.getData});
  $oj$$27$$.$CollectionNodeSet$.prototype.$_checkRange$ = function $$oj$$27$$$$CollectionNodeSet$$$$_checkRange$$($index$$158$$) {
    if($index$$158$$ < this.start || $index$$158$$ > this.start + this.count) {
      throw"Out of range";
    }
  };
  $oj$$27$$.$CollectionNodeSet$.prototype.getMetadata = function $$oj$$27$$$$CollectionNodeSet$$$getMetadata$($index$$159_model$$55_parse$$4$$) {
    this.$_checkRange$($index$$159_model$$55_parse$$4$$);
    var $metadata$$11$$ = {};
    $index$$159_model$$55_parse$$4$$ = this.$collection$.at($index$$159_model$$55_parse$$4$$);
    $index$$159_model$$55_parse$$4$$ = this.$treeDataSource$.$parseMetadata$($index$$159_model$$55_parse$$4$$);
    $metadata$$11$$.key = $index$$159_model$$55_parse$$4$$.key;
    $metadata$$11$$.leaf = $index$$159_model$$55_parse$$4$$.leaf;
    $metadata$$11$$.depth = $index$$159_model$$55_parse$$4$$.depth;
    return $metadata$$11$$
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getMetadata", {getMetadata:$oj$$27$$.$CollectionNodeSet$.prototype.getMetadata});
  $oj$$27$$.$CollectionNodeSet$.prototype.$getChildNodeSet$ = function $$oj$$27$$$$CollectionNodeSet$$$$getChildNodeSet$$($index$$160$$) {
    this.$_checkRange$($index$$160$$);
    return this.$childNodeSet$[$index$$160$$]
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$27$$.$CollectionNodeSet$.prototype.$getChildNodeSet$})
});
