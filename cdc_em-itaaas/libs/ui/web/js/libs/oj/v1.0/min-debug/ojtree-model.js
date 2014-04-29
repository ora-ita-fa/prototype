define(["ojs/ojcore", "jquery", "ojs/ojdatacollection-common", "ojs/ojmodel"], function($oj$$16$$, $$$$16$$) {
  $oj$$16$$.$CollectionTreeDataSource$ = function $$oj$$16$$$$CollectionTreeDataSource$$($options$$263$$) {
    $options$$263$$ = $options$$263$$ || {};
    this.$rootCollection$ = $options$$263$$.root;
    this.$childCollectionCallback$ = $options$$263$$.childCollectionCallback;
    this.$parseMetadata$ = $options$$263$$.parseMetadata;
    this.$sortkey$ = null;
    this.$sortdir$ = "none";
    this.$cache$ = {};
    $oj$$16$$.$CollectionTreeDataSource$.$superclass$.constructor.call(this)
  };
  $goog$exportPath_$$("CollectionTreeDataSource", $oj$$16$$.$CollectionTreeDataSource$, $oj$$16$$);
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$parseMetadata$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$parseMetadata$$($model$$45$$) {
    return{key:$model$$45$$.idAttribute + "\x3d" + $model$$45$$.id}
  };
  $oj$$16$$.$Object$.$createSubclass$($oj$$16$$.$CollectionTreeDataSource$, $oj$$16$$.$TreeDataSource$, "oj.CollectionTreeDataSource");
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$Init$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$Init$$() {
    $oj$$16$$.$CollectionTreeDataSource$.$superclass$.$Init$.call(this)
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.Init", {$Init$:$oj$$16$$.$CollectionTreeDataSource$.prototype.$Init$});
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$getChildCount$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$getChildCount$$($parent$$26$$) {
    var $childColl$$ = this.$cache$[$parent$$26$$];
    if($childColl$$ && 0 < $childColl$$.length) {
      return $childColl$$.length
    }
    this.$getChildCollection$($parent$$26$$, {success:function($coll$$3$$) {
      return $coll$$3$$.length
    }});
    return-1
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getChildCount", {$getChildCount$:$oj$$16$$.$CollectionTreeDataSource$.prototype.$getChildCount$});
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$getChildCollection$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$getChildCollection$$($key$$67$$, $callbacks$$36$$) {
    this.$fetchChildren$($key$$67$$, null, {success:function($nodeSet$$31$$) {
      $callbacks$$36$$.success($nodeSet$$31$$.$collection$)
    }, error:$callbacks$$36$$.error})
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getChildCollection", {$getChildCollection$:$oj$$16$$.$CollectionTreeDataSource$.prototype.$getChildCollection$});
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$fetchChildren$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$fetchChildren$$($parent$$27$$, $range$$17$$, $callbacks$$37$$) {
    $range$$17$$ = $range$$17$$ || {};
    var $start$$25$$ = $range$$17$$.start ? $range$$17$$.start : 0, $count$$26$$ = $range$$17$$.count ? $range$$17$$.count : -1;
    if(null === $parent$$27$$) {
      this.$FetchCollection$(null, $start$$25$$, $count$$26$$, $callbacks$$37$$, null)
    }else {
      var $self$$52$$ = this;
      this.$_getModelForId$(this.$rootCollection$, $parent$$27$$, 0).done(function($collection$$24_parentModel$$) {
        $collection$$24_parentModel$$ ? ($collection$$24_parentModel$$ = $self$$52$$.$GetChildCollection$($collection$$24_parentModel$$.$model$), $self$$52$$.$FetchCollection$($collection$$24_parentModel$$, $start$$25$$, $count$$26$$, $callbacks$$37$$, $parent$$27$$)) : $callbacks$$37$$ && $callbacks$$37$$.error && $callbacks$$37$$.error($parent$$27$$)
      })
    }
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.fetchChildren", {$fetchChildren$:$oj$$16$$.$CollectionTreeDataSource$.prototype.$fetchChildren$});
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$ModelAdded$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$ModelAdded$$($event$$136_model$$46$$, $collection$$25$$, $options$$265$$) {
    var $index$$134$$ = 0;
    $options$$265$$ && $options$$265$$.at && ($index$$134$$ = $options$$265$$.at);
    $event$$136_model$$46$$ = this.$_createEvent$(this, "insert", $index$$134$$, this.$_getParentChain$($collection$$25$$), this.$_putModelInRowset$($event$$136_model$$46$$));
    this.handleEvent("insert", $event$$136_model$$46$$)
  };
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$ModelRemoved$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$ModelRemoved$$($event$$137_model$$47$$, $collection$$26$$, $options$$266$$) {
    var $index$$135$$ = 0;
    $options$$266$$ && $options$$266$$.index && ($index$$135$$ = $options$$266$$.index);
    this.$_removeCollectionFromCache$($event$$137_model$$47$$);
    $event$$137_model$$47$$ = this.$_createEvent$(this, "delete", $index$$135$$, this.$_getParentChain$($collection$$26$$), null);
    this.handleEvent("delete", $event$$137_model$$47$$)
  };
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$ModelUpdated$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$ModelUpdated$$($event$$138_model$$48$$) {
    var $collectionForModel$$ = this.$_getCollectionForModel$($event$$138_model$$48$$), $index$$136$$ = null, $parents$$3$$ = null;
    $collectionForModel$$ && ($index$$136$$ = $collectionForModel$$.index, $parents$$3$$ = this.$_getParentChain$($collectionForModel$$.$collection$));
    $event$$138_model$$48$$ = this.$_createEvent$(this, "update", $index$$136$$, $parents$$3$$, this.$_putModelInRowset$($event$$138_model$$48$$));
    this.handleEvent("update", $event$$138_model$$48$$)
  };
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$CollectionRefreshed$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$CollectionRefreshed$$($collection$$27_event$$139$$) {
    $collection$$27_event$$139$$ = this.$_createEvent$(this, "refresh", null, this.$_getParentChain$($collection$$27_event$$139$$), null);
    this.handleEvent("refresh", $collection$$27_event$$139$$)
  };
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$_putModelInRowset$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$_putModelInRowset$$($model$$49_rowset$$) {
    var $rows$$5$$ = [];
    $rows$$5$$.push($model$$49_rowset$$.attributes);
    var $options$$269$$ = {};
    $options$$269$$.idAttribute = $model$$49_rowset$$.idAttribute;
    $model$$49_rowset$$ = new $oj$$16$$.$ArrayRowSet$($rows$$5$$, $options$$269$$);
    $model$$49_rowset$$.fetch();
    return $model$$49_rowset$$
  };
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$_getParentChain$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$_getParentChain$$($coll$$4_collection$$28$$) {
    var $parents$$4$$ = [], $parent$$28$$ = null;
    do {
      $parent$$28$$ = this.$_getParentOfCollection$($coll$$4_collection$$28$$), null !== $parent$$28$$ && ($parent$$28$$ !== $oj$$16$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$ && $parents$$4$$.unshift($parent$$28$$), $coll$$4_collection$$28$$ = this.$_getCollectionOfKey$($parent$$28$$))
    }while(null != $parent$$28$$);
    return $parents$$4$$
  };
  $oj$$16$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$ = "%!@ROOT%#@!";
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$_getCacheKey$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$_getCacheKey$$($model$$50$$) {
    var $key$$68$$ = $model$$50$$ instanceof $oj$$16$$.$Model$ ? this.$parseMetadata$($model$$50$$).key : $model$$50$$;
    return $model$$50$$ ? $key$$68$$ : $oj$$16$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$
  };
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$__getParentsChildCollectionFromCache$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$__getParentsChildCollectionFromCache$$($model$$51$$) {
    return this.$cache$[this.$_getCacheKey$($model$$51$$)]
  };
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$_setCollectionInCache$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$_setCollectionInCache$$($model$$52$$, $collection$$29$$) {
    $collection$$29$$.on($oj$$16$$.$Events$.$EventType$.ADD, this.$ModelAdded$, this);
    $collection$$29$$.on($oj$$16$$.$Events$.$EventType$.REMOVE, this.$ModelRemoved$, this);
    $collection$$29$$.on($oj$$16$$.$Events$.$EventType$.CHANGE, this.$ModelUpdated$, this);
    $collection$$29$$.on($oj$$16$$.$Events$.$EventType$.SYNC, this.$CollectionRefreshed$, this);
    this.$cache$[this.$_getCacheKey$($model$$52$$)] = $collection$$29$$
  };
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$_removeCollectionFromCache$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$_removeCollectionFromCache$$($key$$69_model$$53$$) {
    $key$$69_model$$53$$ = this.$_getCacheKey$($key$$69_model$$53$$);
    for(var $prop$$76$$ in this.$cache$) {
      if(this.$cache$.hasOwnProperty($prop$$76$$) && $prop$$76$$ === $key$$69_model$$53$$) {
        this.$cache$[$key$$69_model$$53$$].off(null, null, this);
        delete this.$cache$[$key$$69_model$$53$$];
        break
      }
    }
  };
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$_keyInCollection$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$_keyInCollection$$($key$$70$$, $collection$$30$$) {
    for(var $count$$27$$ = $collection$$30$$.length, $i$$197$$ = 0;$i$$197$$ < $count$$27$$;$i$$197$$++) {
      var $currKey$$2$$ = this.$_getCacheKey$($collection$$30$$.at($i$$197$$));
      if($key$$70$$ === $currKey$$2$$) {
        return!0
      }
    }
    return!1
  };
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$_getCollectionForModel$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$_getCollectionForModel$$($model$$54$$) {
    for(var $prop$$77$$ in this.$cache$) {
      if(this.$cache$.hasOwnProperty($prop$$77$$)) {
        for(var $collection$$31$$ = this.$cache$[$prop$$77$$], $i$$198$$ = 0;$i$$198$$ < $collection$$31$$.length;$i$$198$$++) {
          if($collection$$31$$.at($i$$198$$) === $model$$54$$) {
            return{index:$i$$198$$, $collection$:$collection$$31$$}
          }
        }
      }
    }
    return null
  };
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$_getCollectionOfKey$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$_getCollectionOfKey$$($key$$71$$) {
    for(var $prop$$78$$ in this.$cache$) {
      if(this.$cache$.hasOwnProperty($prop$$78$$)) {
        var $collection$$32$$ = this.$cache$[$prop$$78$$];
        if(this.$_keyInCollection$($key$$71$$, $collection$$32$$)) {
          return $collection$$32$$
        }
      }
    }
    return null
  };
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$_getParentOfCollection$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$_getParentOfCollection$$($collection$$33$$) {
    for(var $prop$$79$$ in this.$cache$) {
      if(this.$cache$.hasOwnProperty($prop$$79$$) && this.$cache$[$prop$$79$$] === $collection$$33$$) {
        return $prop$$79$$
      }
    }
    return null
  };
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$GetChildCollection$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$GetChildCollection$$($parentModel$$1$$) {
    var $cached$$ = !0, $collection$$34$$ = this.$__getParentsChildCollectionFromCache$($parentModel$$1$$);
    $collection$$34$$ || ($cached$$ = !1, $collection$$34$$ = this.$childCollectionCallback$(this.$rootCollection$, $parentModel$$1$$), null != $collection$$34$$ && (this.$_applySortToCollection$($collection$$34$$), this.$_setCollectionInCache$($parentModel$$1$$, $collection$$34$$)));
    return{$collection$:$collection$$34$$, $cached$:$cached$$}
  };
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$_createEvent$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$_createEvent$$($source$$9$$, $operation$$5$$, $index$$137$$, $parent$$29$$, $data$$84$$) {
    return{source:$source$$9$$, operation:$operation$$5$$, index:$index$$137$$, parent:$parent$$29$$, data:$data$$84$$}
  };
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$FetchCollection$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$FetchCollection$$($collection$$35$$, $start$$26$$, $count$$28$$, $callbacks$$38$$, $parent$$30$$) {
    var $self$$53$$ = this;
    null === $collection$$35$$ && (($collection$$35$$ = this.$__getParentsChildCollectionFromCache$(null)) ? $collection$$35$$ = {$collection$:$collection$$35$$, $cached$:!0} : ($collection$$35$$ = {$collection$:$self$$53$$.$rootCollection$, $cached$:!1}, $self$$53$$.$_setCollectionInCache$(null, this.$rootCollection$)));
    $collection$$35$$ && $self$$53$$.$_fetch$($collection$$35$$, function($coll$$5$$) {
      $callbacks$$38$$.success && $callbacks$$38$$.success($self$$53$$.$_getNodeSet$($coll$$5$$, $parent$$30$$, $start$$26$$, $count$$28$$))
    }, $callbacks$$38$$.error)
  };
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$_getNodeSet$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$_getNodeSet$$($collection$$36$$, $parent$$31$$, $start$$27$$, $count$$29$$) {
    return new $oj$$16$$.$CollectionNodeSet$($parent$$31$$, $collection$$36$$, this, $start$$27$$, $count$$29$$)
  };
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$_scanForKey$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$_scanForKey$$($collection$$37$$, $key$$72$$) {
    function $checkNext$$($index$$138$$, $collection$$38$$, $key$$73$$) {
      $index$$138$$ < $collection$$38$$.length ? $collection$$38$$.at($index$$138$$, {deferred:!0}).done(function($model$$55$$) {
        if($model$$55$$) {
          var $parse$$2$$ = $self$$54$$.$parseMetadata$($model$$55$$);
          if($key$$73$$ === $parse$$2$$.key) {
            return $dfd$$3$$.resolve($model$$55$$), $dfd$$3$$
          }
        }
        $index$$138$$++;
        $checkNext$$($index$$138$$, $collection$$38$$, $key$$73$$)
      }) : $dfd$$3$$.resolve(null)
    }
    var $dfd$$3$$ = $$$$16$$.Deferred(), $self$$54$$ = this;
    $checkNext$$(0, $collection$$37$$, $key$$72$$);
    return $dfd$$3$$
  };
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$_getModelForId$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$_getModelForId$$($collection$$39$$, $key$$74$$, $depth$$18$$) {
    var $dfd$$4$$ = $$$$16$$.Deferred(), $self$$55$$ = this;
    this.$_scanForKey$($collection$$39$$, $key$$74$$).done(function($model$$56$$) {
      function $getNextCollection$$($index$$139$$, $tds$$) {
        if($index$$139$$ < $max$$7$$) {
          var $childColl$$1$$ = $tds$$.$GetChildCollection$($collection$$39$$.at($index$$139$$));
          $childColl$$1$$.$collection$ ? $tds$$.$_fetch$($childColl$$1$$, function($fetchColl$$) {
            $tds$$.$_getModelForId$($fetchColl$$, $key$$74$$, $depth$$18$$ + 1).done(function($childModel$$) {
              $childModel$$ ? $dfd$$4$$.resolve($childModel$$) : ($index$$139$$++, $getNextCollection$$($index$$139$$, $tds$$))
            })
          }, null) : ($index$$139$$++, $getNextCollection$$($index$$139$$, $tds$$))
        }else {
          $dfd$$4$$.resolve(null)
        }
      }
      if($model$$56$$) {
        return $dfd$$4$$.resolve({$model$:$model$$56$$, depth:$depth$$18$$}), $dfd$$4$$
      }
      var $max$$7$$ = $collection$$39$$.length;
      $getNextCollection$$(0, $self$$55$$)
    });
    return $dfd$$4$$.promise()
  };
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$_fetch$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$_fetch$$($collectionCacheObj$$, $success$$15$$, $error$$14$$) {
    $collectionCacheObj$$.$cached$ ? $success$$15$$($collectionCacheObj$$.$collection$) : (this.$sortkey$ && "none" !== this.$sortkey$ && ($collectionCacheObj$$.$collection$.$comparator$ = this.$sortkey$, $collectionCacheObj$$.$collection$.$sortDirection$ = this.$sortdir$), 0 < $collectionCacheObj$$.$collection$.length ? $success$$15$$($collectionCacheObj$$.$collection$) : $collectionCacheObj$$.$collection$.fetch({success:function($fetchColl$$1$$) {
      $success$$15$$($fetchColl$$1$$)
    }, error:$error$$14$$}))
  };
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$fetchDescendents$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$fetchDescendents$$($parent$$32$$, $callbacks$$39$$) {
    var $self$$56$$ = this;
    null === $parent$$32$$ ? this.$FetchCollection$(null, 0, -1, {success:function($nodeSet$$32$$) {
      $nodeSet$$32$$.$FetchDescendants$({success:function() {
        $callbacks$$39$$.success && $callbacks$$39$$.success($nodeSet$$32$$)
      }})
    }}, null) : this.$_getModelForId$(this.$rootCollection$, $parent$$32$$, 0).done(function($collection$$40_parentModel$$2$$) {
      $collection$$40_parentModel$$2$$ && ($collection$$40_parentModel$$2$$ = $self$$56$$.$GetChildCollection$($collection$$40_parentModel$$2$$.$model$), $self$$56$$.$FetchCollection$($collection$$40_parentModel$$2$$, 0, -1, {success:function($nodeSet$$33$$) {
        $nodeSet$$33$$.$FetchDescendants$({success:function() {
          $callbacks$$39$$.success && $callbacks$$39$$.success($nodeSet$$33$$)
        }})
      }}, $parent$$32$$))
    })
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.fetchDescendents", {$fetchDescendents$:$oj$$16$$.$CollectionTreeDataSource$.prototype.$fetchDescendents$});
  $oj$$16$$.$CollectionTreeDataSource$.prototype.sort = function $$oj$$16$$$$CollectionTreeDataSource$$$sort$($criteria$$7$$, $callbacks$$40$$) {
    var $key$$75$$ = $criteria$$7$$.key, $dir$$ = $criteria$$7$$.direction, $needSort$$2$$ = !1;
    $key$$75$$ !== this.$sortkey$ && (this.$sortkey$ = $key$$75$$, $needSort$$2$$ = !0);
    $dir$$ !== this.$sortdir$ && (this.$sortdir$ = $dir$$, $needSort$$2$$ = !0);
    if($needSort$$2$$) {
      "none" === this.$sortdir$ && (this.$cache$ = {});
      for(var $prop$$80$$ in this.$cache$) {
        this.$cache$.hasOwnProperty($prop$$80$$) && this.$_applySortToCollection$(this.$cache$[$prop$$80$$])
      }
    }
    $callbacks$$40$$ && $callbacks$$40$$.success && $callbacks$$40$$.success()
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.sort", {sort:$oj$$16$$.$CollectionTreeDataSource$.prototype.sort});
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$_applySortToCollection$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$_applySortToCollection$$($collection$$42$$) {
    $collection$$42$$.comparator = this.$sortkey$;
    $collection$$42$$.sortDirection = "ascending" === this.$sortdir$ ? 1 : -1;
    $collection$$42$$.sort()
  };
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$getSortCriteria$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$getSortCriteria$$() {
    return{key:this.$sortkey$, direction:this.$sortdir$}
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getSortCriteria", {$getSortCriteria$:$oj$$16$$.$CollectionTreeDataSource$.prototype.$getSortCriteria$});
  $oj$$16$$.$CollectionTreeDataSource$.prototype.move = function $$oj$$16$$$$CollectionTreeDataSource$$$move$() {
    $oj$$16$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.move", {move:$oj$$16$$.$CollectionTreeDataSource$.prototype.move});
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$moveOK$ = $JSCompiler_returnArg$$("invalid");
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.moveOK", {$moveOK$:$oj$$16$$.$CollectionTreeDataSource$.prototype.$moveOK$});
  $oj$$16$$.$CollectionTreeDataSource$.prototype.$getCapability$ = function $$oj$$16$$$$CollectionTreeDataSource$$$$getCapability$$($feature$$10$$) {
    return"sort" === $feature$$10$$ ? "default" : "move" === $feature$$10$$ ? "none" : "batchFetch" === $feature$$10$$ || "fetchDescendants" === $feature$$10$$ ? "disable" : null
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getCapability", {$getCapability$:$oj$$16$$.$CollectionTreeDataSource$.prototype.$getCapability$});
  $oj$$16$$.$CollectionNodeSet$ = function $$oj$$16$$$$CollectionNodeSet$$($parentKey$$10$$, $collection$$43$$, $treeDataSource$$2$$, $start$$28$$, $count$$30$$) {
    this.$parentKey$ = $parentKey$$10$$;
    this.$collection$ = $collection$$43$$;
    this.$childNodeSet$ = [];
    this.$treeDataSource$ = $treeDataSource$$2$$;
    this.start = $start$$28$$ < $collection$$43$$.length ? $start$$28$$ : $collection$$43$$.length - 1;
    this.count = -1 === $count$$30$$ ? $collection$$43$$.length : Math.min($collection$$43$$.length, $count$$30$$)
  };
  $goog$exportPath_$$("CollectionNodeSet", $oj$$16$$.$CollectionNodeSet$, $oj$$16$$);
  $oj$$16$$.$CollectionNodeSet$.prototype.$FetchDescendants$ = function $$oj$$16$$$$CollectionNodeSet$$$$FetchDescendants$$($callbacks$$42$$) {
    this.$_fetchDescendants$(this).done(function() {
      $callbacks$$42$$.success && $callbacks$$42$$.success()
    })
  };
  $oj$$16$$.$CollectionNodeSet$.prototype.$_fetchDescendants$ = function $$oj$$16$$$$CollectionNodeSet$$$$_fetchDescendants$$($nodeSet$$34$$) {
    function $nextNode$$($index$$140$$) {
      $index$$140$$ < $count$$31$$ ? $nodeSet$$34$$.$FetchChildNodeSet$($index$$140$$, {success:function($childNodeSet$$1$$) {
        null !== $childNodeSet$$1$$ ? $nodeSet$$34$$.$_fetchDescendants$($childNodeSet$$1$$).done(function() {
          $nextNode$$($index$$140$$ + 1)
        }) : $nextNode$$($index$$140$$ + 1)
      }}) : $dfd$$5$$.resolve()
    }
    var $dfd$$5$$ = $$$$16$$.Deferred(), $count$$31$$ = $nodeSet$$34$$.$getCount$();
    $nextNode$$(0);
    return $dfd$$5$$.promise()
  };
  $oj$$16$$.$CollectionNodeSet$.prototype.$FetchChildNodeSet$ = function $$oj$$16$$$$CollectionNodeSet$$$$FetchChildNodeSet$$($index$$141$$, $callbacks$$43$$) {
    var $model$$57_parentKey$$11$$ = this.$collection$.at($index$$141$$);
    if(this.$treeDataSource$.$parseMetadata$($model$$57_parentKey$$11$$).leaf) {
      this.$childNodeSet$[$index$$141$$] = null, $callbacks$$43$$.success(null)
    }else {
      var $collection$$44$$ = this.$treeDataSource$.$GetChildCollection$($model$$57_parentKey$$11$$), $model$$57_parentKey$$11$$ = this.$treeDataSource$.$parseMetadata$($model$$57_parentKey$$11$$).key, $self$$57$$ = this;
      this.$treeDataSource$.$FetchCollection$($collection$$44$$, 0, -1, {success:function($nodeSet$$35$$) {
        $self$$57$$.$childNodeSet$[$index$$141$$] = $nodeSet$$35$$;
        $callbacks$$43$$.success($nodeSet$$35$$)
      }}, $model$$57_parentKey$$11$$)
    }
  };
  $oj$$16$$.$CollectionNodeSet$.prototype.getParent = $JSCompiler_get$$("$parentKey$");
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getParent", {getParent:$oj$$16$$.$CollectionNodeSet$.prototype.getParent});
  $oj$$16$$.$CollectionNodeSet$.prototype.$getStart$ = $JSCompiler_get$$("start");
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getStart", {$getStart$:$oj$$16$$.$CollectionNodeSet$.prototype.$getStart$});
  $oj$$16$$.$CollectionNodeSet$.prototype.$getCount$ = $JSCompiler_get$$("count");
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getCount", {$getCount$:$oj$$16$$.$CollectionNodeSet$.prototype.$getCount$});
  $oj$$16$$.$CollectionNodeSet$.prototype.getData = function $$oj$$16$$$$CollectionNodeSet$$$getData$($index$$142$$) {
    this.$_checkRange$($index$$142$$);
    return this.$collection$.at($index$$142$$).attributes
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getData", {getData:$oj$$16$$.$CollectionNodeSet$.prototype.getData});
  $oj$$16$$.$CollectionNodeSet$.prototype.$_checkRange$ = function $$oj$$16$$$$CollectionNodeSet$$$$_checkRange$$($index$$143$$) {
    if($index$$143$$ < this.start || $index$$143$$ > this.start + this.count) {
      throw"Out of range";
    }
  };
  $oj$$16$$.$CollectionNodeSet$.prototype.getMetadata = function $$oj$$16$$$$CollectionNodeSet$$$getMetadata$($index$$144_model$$58_parse$$4$$) {
    this.$_checkRange$($index$$144_model$$58_parse$$4$$);
    var $metadata$$11$$ = {};
    $index$$144_model$$58_parse$$4$$ = this.$collection$.at($index$$144_model$$58_parse$$4$$);
    $index$$144_model$$58_parse$$4$$ = this.$treeDataSource$.$parseMetadata$($index$$144_model$$58_parse$$4$$);
    $metadata$$11$$.key = $index$$144_model$$58_parse$$4$$.key;
    $metadata$$11$$.leaf = $index$$144_model$$58_parse$$4$$.leaf;
    $metadata$$11$$.depth = $index$$144_model$$58_parse$$4$$.depth;
    return $metadata$$11$$
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getMetadata", {getMetadata:$oj$$16$$.$CollectionNodeSet$.prototype.getMetadata});
  $oj$$16$$.$CollectionNodeSet$.prototype.$getChildNodeSet$ = function $$oj$$16$$$$CollectionNodeSet$$$$getChildNodeSet$$($index$$145$$) {
    this.$_checkRange$($index$$145$$);
    return this.$childNodeSet$[$index$$145$$]
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$16$$.$CollectionNodeSet$.prototype.$getChildNodeSet$})
});
