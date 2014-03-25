define(["ojs/ojcore", "jquery", "ojs/ojdatacollection-common", "ojs/ojmodel"], function($oj$$15$$, $$$$15$$) {
  $oj$$15$$.$CollectionTreeDataSource$ = function $$oj$$15$$$$CollectionTreeDataSource$$($options$$236$$) {
    $options$$236$$ = $options$$236$$ || {};
    this.$rootCollection$ = $options$$236$$.root;
    this.$childCollectionCallback$ = $options$$236$$.childCollectionCallback;
    this.$parseMetadata$ = $options$$236$$.parseMetadata;
    this.$sortkey$ = null;
    this.$sortdir$ = "none";
    this.$cache$ = {};
    $oj$$15$$.$CollectionTreeDataSource$.$superclass$.constructor.call(this)
  };
  $goog$exportPath_$$("CollectionTreeDataSource", $oj$$15$$.$CollectionTreeDataSource$, $oj$$15$$);
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$parseMetadata$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$parseMetadata$$($model$$41$$) {
    return{key:$model$$41$$.idAttribute + "\x3d" + $model$$41$$.id}
  };
  $oj$$15$$.$Object$.$createSubclass$($oj$$15$$.$CollectionTreeDataSource$, $oj$$15$$.$TreeDataSource$, "oj.CollectionTreeDataSource");
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$Init$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$Init$$() {
    $oj$$15$$.$CollectionTreeDataSource$.$superclass$.$Init$.call(this)
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.Init", {$Init$:$oj$$15$$.$CollectionTreeDataSource$.prototype.$Init$});
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$getChildCount$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$getChildCount$$($parent$$25$$) {
    var $childColl$$ = this.$cache$[$parent$$25$$];
    if($childColl$$ && 0 < $childColl$$.length) {
      return $childColl$$.length
    }
    this.$getChildCollection$($parent$$25$$, {success:function($coll$$3$$) {
      return $coll$$3$$.length
    }});
    return-1
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getChildCount", {$getChildCount$:$oj$$15$$.$CollectionTreeDataSource$.prototype.$getChildCount$});
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$getChildCollection$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$getChildCollection$$($key$$65$$, $callbacks$$36$$) {
    this.$fetchChildren$($key$$65$$, null, {success:function($nodeSet$$27$$) {
      $callbacks$$36$$.success($nodeSet$$27$$.$collection$)
    }, error:$callbacks$$36$$.error})
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getChildCollection", {$getChildCollection$:$oj$$15$$.$CollectionTreeDataSource$.prototype.$getChildCollection$});
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$fetchChildren$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$fetchChildren$$($parent$$26$$, $range$$16$$, $callbacks$$37$$) {
    $range$$16$$ = $range$$16$$ || {};
    var $start$$25$$ = $range$$16$$.start ? $range$$16$$.start : 0, $count$$25$$ = $range$$16$$.count ? $range$$16$$.count : -1;
    if(null === $parent$$26$$) {
      this.$FetchCollection$(null, $start$$25$$, $count$$25$$, $callbacks$$37$$, null)
    }else {
      var $self$$47$$ = this;
      this.$_getModelForId$(this.$rootCollection$, $parent$$26$$, 0).done(function($collection$$22_parentModel$$) {
        $collection$$22_parentModel$$ ? ($collection$$22_parentModel$$ = $self$$47$$.$GetChildCollection$($collection$$22_parentModel$$.$model$), $self$$47$$.$FetchCollection$($collection$$22_parentModel$$, $start$$25$$, $count$$25$$, $callbacks$$37$$, $parent$$26$$)) : $callbacks$$37$$ && $callbacks$$37$$.error && $callbacks$$37$$.error($parent$$26$$)
      })
    }
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.fetchChildren", {$fetchChildren$:$oj$$15$$.$CollectionTreeDataSource$.prototype.$fetchChildren$});
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$ModelAdded$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$ModelAdded$$($event$$123_model$$42$$, $collection$$23$$, $options$$238$$) {
    var $index$$122$$ = 0;
    $options$$238$$ && $options$$238$$.at && ($index$$122$$ = $options$$238$$.at);
    $event$$123_model$$42$$ = this.$_createEvent$(this, "insert", $index$$122$$, this.$_getParentChain$($collection$$23$$), this.$_putModelInRowset$($event$$123_model$$42$$));
    this.handleEvent("insert", $event$$123_model$$42$$)
  };
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$ModelRemoved$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$ModelRemoved$$($event$$124_model$$43$$, $collection$$24$$, $options$$239$$) {
    var $index$$123$$ = 0;
    $options$$239$$ && $options$$239$$.index && ($index$$123$$ = $options$$239$$.index);
    this.$_removeCollectionFromCache$($event$$124_model$$43$$);
    $event$$124_model$$43$$ = this.$_createEvent$(this, "delete", $index$$123$$, this.$_getParentChain$($collection$$24$$), null);
    this.handleEvent("delete", $event$$124_model$$43$$)
  };
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$ModelUpdated$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$ModelUpdated$$($event$$125_model$$44$$) {
    var $collectionForModel$$ = this.$_getCollectionForModel$($event$$125_model$$44$$), $index$$124$$ = null, $parents$$2$$ = null;
    $collectionForModel$$ && ($index$$124$$ = $collectionForModel$$.index, $parents$$2$$ = this.$_getParentChain$($collectionForModel$$.$collection$));
    $event$$125_model$$44$$ = this.$_createEvent$(this, "update", $index$$124$$, $parents$$2$$, this.$_putModelInRowset$($event$$125_model$$44$$));
    this.handleEvent("update", $event$$125_model$$44$$)
  };
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$CollectionRefreshed$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$CollectionRefreshed$$($collection$$25_event$$126$$) {
    $collection$$25_event$$126$$ = this.$_createEvent$(this, "refresh", null, this.$_getParentChain$($collection$$25_event$$126$$), null);
    this.handleEvent("refresh", $collection$$25_event$$126$$)
  };
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$_putModelInRowset$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$_putModelInRowset$$($model$$45_rowset$$) {
    var $rows$$3$$ = [];
    $rows$$3$$.push($model$$45_rowset$$.attributes);
    var $options$$242$$ = {};
    $options$$242$$.idAttribute = $model$$45_rowset$$.idAttribute;
    $model$$45_rowset$$ = new $oj$$15$$.$RowSet$($rows$$3$$, $options$$242$$);
    $model$$45_rowset$$.fetch();
    return $model$$45_rowset$$
  };
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$_getParentChain$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$_getParentChain$$($coll$$4_collection$$26$$) {
    var $parents$$3$$ = [], $parent$$27$$ = null;
    do {
      $parent$$27$$ = this.$_getParentOfCollection$($coll$$4_collection$$26$$), null !== $parent$$27$$ && ($parent$$27$$ !== $oj$$15$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$ && $parents$$3$$.unshift($parent$$27$$), $coll$$4_collection$$26$$ = this.$_getCollectionOfKey$($parent$$27$$))
    }while(null != $parent$$27$$);
    return $parents$$3$$
  };
  $oj$$15$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$ = "%!@ROOT%#@!";
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$_getCacheKey$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$_getCacheKey$$($model$$46$$) {
    var $key$$66$$ = $model$$46$$ instanceof $oj$$15$$.$Model$ ? this.$parseMetadata$($model$$46$$).key : $model$$46$$;
    return $model$$46$$ ? $key$$66$$ : $oj$$15$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$
  };
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$__getParentsChildCollectionFromCache$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$__getParentsChildCollectionFromCache$$($model$$47$$) {
    return this.$cache$[this.$_getCacheKey$($model$$47$$)]
  };
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$_setCollectionInCache$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$_setCollectionInCache$$($model$$48$$, $collection$$27$$) {
    $collection$$27$$.on($oj$$15$$.$Events$.$EventType$.ADD, this.$ModelAdded$, this);
    $collection$$27$$.on($oj$$15$$.$Events$.$EventType$.REMOVE, this.$ModelRemoved$, this);
    $collection$$27$$.on($oj$$15$$.$Events$.$EventType$.CHANGE, this.$ModelUpdated$, this);
    $collection$$27$$.on($oj$$15$$.$Events$.$EventType$.SYNC, this.$CollectionRefreshed$, this);
    this.$cache$[this.$_getCacheKey$($model$$48$$)] = $collection$$27$$
  };
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$_removeCollectionFromCache$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$_removeCollectionFromCache$$($key$$67_model$$49$$) {
    $key$$67_model$$49$$ = this.$_getCacheKey$($key$$67_model$$49$$);
    for(var $prop$$72$$ in this.$cache$) {
      if(this.$cache$.hasOwnProperty($prop$$72$$) && $prop$$72$$ === $key$$67_model$$49$$) {
        this.$cache$[$key$$67_model$$49$$].off(null, null, this);
        delete this.$cache$[$key$$67_model$$49$$];
        break
      }
    }
  };
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$_keyInCollection$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$_keyInCollection$$($key$$68$$, $collection$$28$$) {
    for(var $count$$26$$ = $collection$$28$$.length, $i$$192$$ = 0;$i$$192$$ < $count$$26$$;$i$$192$$++) {
      var $currKey$$2$$ = this.$_getCacheKey$($collection$$28$$.at($i$$192$$));
      if($key$$68$$ === $currKey$$2$$) {
        return!0
      }
    }
    return!1
  };
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$_getCollectionForModel$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$_getCollectionForModel$$($model$$50$$) {
    for(var $prop$$73$$ in this.$cache$) {
      if(this.$cache$.hasOwnProperty($prop$$73$$)) {
        for(var $collection$$29$$ = this.$cache$[$prop$$73$$], $i$$193$$ = 0;$i$$193$$ < $collection$$29$$.length;$i$$193$$++) {
          if($collection$$29$$.at($i$$193$$) === $model$$50$$) {
            return{index:$i$$193$$, $collection$:$collection$$29$$}
          }
        }
      }
    }
    return null
  };
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$_getCollectionOfKey$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$_getCollectionOfKey$$($key$$69$$) {
    for(var $prop$$74$$ in this.$cache$) {
      if(this.$cache$.hasOwnProperty($prop$$74$$)) {
        var $collection$$30$$ = this.$cache$[$prop$$74$$];
        if(this.$_keyInCollection$($key$$69$$, $collection$$30$$)) {
          return $collection$$30$$
        }
      }
    }
    return null
  };
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$_getParentOfCollection$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$_getParentOfCollection$$($collection$$31$$) {
    for(var $prop$$75$$ in this.$cache$) {
      if(this.$cache$.hasOwnProperty($prop$$75$$) && this.$cache$[$prop$$75$$] === $collection$$31$$) {
        return $prop$$75$$
      }
    }
    return null
  };
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$GetChildCollection$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$GetChildCollection$$($parentModel$$1$$) {
    var $cached$$ = !0, $collection$$32$$ = this.$__getParentsChildCollectionFromCache$($parentModel$$1$$);
    $collection$$32$$ || ($cached$$ = !1, $collection$$32$$ = this.$childCollectionCallback$(this.$rootCollection$, $parentModel$$1$$), null != $collection$$32$$ && (this.$_applySortToCollection$($collection$$32$$), this.$_setCollectionInCache$($parentModel$$1$$, $collection$$32$$)));
    return{$collection$:$collection$$32$$, $cached$:$cached$$}
  };
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$_createEvent$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$_createEvent$$($source$$9$$, $operation$$5$$, $index$$125$$, $parent$$28$$, $data$$80$$) {
    return{source:$source$$9$$, operation:$operation$$5$$, index:$index$$125$$, parent:$parent$$28$$, data:$data$$80$$}
  };
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$FetchCollection$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$FetchCollection$$($collection$$33$$, $start$$26$$, $count$$27$$, $callbacks$$38$$, $parent$$29$$) {
    var $self$$48$$ = this;
    null === $collection$$33$$ && (($collection$$33$$ = this.$__getParentsChildCollectionFromCache$(null)) ? $collection$$33$$ = {$collection$:$collection$$33$$, $cached$:!0} : ($collection$$33$$ = {$collection$:$self$$48$$.$rootCollection$, $cached$:!1}, $self$$48$$.$_setCollectionInCache$(null, this.$rootCollection$)));
    $collection$$33$$ && $self$$48$$.$_fetch$($collection$$33$$, function($coll$$5$$) {
      $callbacks$$38$$.success && $callbacks$$38$$.success($self$$48$$.$_getNodeSet$($coll$$5$$, $parent$$29$$, $start$$26$$, $count$$27$$))
    }, $callbacks$$38$$.error)
  };
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$_getNodeSet$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$_getNodeSet$$($collection$$34$$, $parent$$30$$, $start$$27$$, $count$$28$$) {
    return new $oj$$15$$.$CollectionNodeSet$($parent$$30$$, $collection$$34$$, this, $start$$27$$, $count$$28$$)
  };
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$_scanForKey$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$_scanForKey$$($collection$$35$$, $key$$70$$) {
    function $checkNext$$($index$$126$$, $collection$$36$$, $key$$71$$) {
      $index$$126$$ < $collection$$36$$.length ? $collection$$36$$.at($index$$126$$, {deferred:!0}).done(function($model$$51$$) {
        if($model$$51$$) {
          var $parse$$2$$ = $self$$49$$.$parseMetadata$($model$$51$$);
          if($key$$71$$ === $parse$$2$$.key) {
            return $dfd$$3$$.resolve($model$$51$$), $dfd$$3$$
          }
        }
        $index$$126$$++;
        $checkNext$$($index$$126$$, $collection$$36$$, $key$$71$$)
      }) : $dfd$$3$$.resolve(null)
    }
    var $dfd$$3$$ = $$$$15$$.Deferred(), $self$$49$$ = this;
    $checkNext$$(0, $collection$$35$$, $key$$70$$);
    return $dfd$$3$$
  };
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$_getModelForId$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$_getModelForId$$($collection$$37$$, $key$$72$$, $depth$$16$$) {
    var $dfd$$4$$ = $$$$15$$.Deferred(), $self$$50$$ = this;
    this.$_scanForKey$($collection$$37$$, $key$$72$$).done(function($model$$52$$) {
      function $getNextCollection$$($index$$127$$, $tds$$) {
        if($index$$127$$ < $max$$7$$) {
          var $childColl$$1$$ = $tds$$.$GetChildCollection$($collection$$37$$.at($index$$127$$));
          $childColl$$1$$.$collection$ ? $tds$$.$_fetch$($childColl$$1$$, function($fetchColl$$) {
            $tds$$.$_getModelForId$($fetchColl$$, $key$$72$$, $depth$$16$$ + 1).done(function($childModel$$) {
              $childModel$$ ? $dfd$$4$$.resolve($childModel$$) : ($index$$127$$++, $getNextCollection$$($index$$127$$, $tds$$))
            })
          }, null) : ($index$$127$$++, $getNextCollection$$($index$$127$$, $tds$$))
        }else {
          $dfd$$4$$.resolve(null)
        }
      }
      if($model$$52$$) {
        return $dfd$$4$$.resolve({$model$:$model$$52$$, depth:$depth$$16$$}), $dfd$$4$$
      }
      var $max$$7$$ = $collection$$37$$.length;
      $getNextCollection$$(0, $self$$50$$)
    });
    return $dfd$$4$$.promise()
  };
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$_fetch$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$_fetch$$($collectionCacheObj$$, $success$$15$$, $error$$14$$) {
    $collectionCacheObj$$.$cached$ ? $success$$15$$($collectionCacheObj$$.$collection$) : (this.$sortkey$ && "none" !== this.$sortkey$ && ($collectionCacheObj$$.$collection$.$comparator$ = this.$sortkey$, $collectionCacheObj$$.$collection$.$sortDirection$ = this.$sortdir$), 0 < $collectionCacheObj$$.$collection$.length ? $success$$15$$($collectionCacheObj$$.$collection$) : $collectionCacheObj$$.$collection$.fetch({success:function($fetchColl$$1$$) {
      $success$$15$$($fetchColl$$1$$)
    }, error:$error$$14$$}))
  };
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$fetchDescendents$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$fetchDescendents$$($parent$$31$$, $callbacks$$39$$) {
    var $self$$51$$ = this;
    null === $parent$$31$$ ? this.$FetchCollection$(null, 0, -1, {success:function($nodeSet$$28$$) {
      $nodeSet$$28$$.$FetchDescendants$({success:function() {
        $callbacks$$39$$.success && $callbacks$$39$$.success($nodeSet$$28$$)
      }})
    }}, null) : this.$_getModelForId$(this.$rootCollection$, $parent$$31$$, 0).done(function($collection$$38_parentModel$$2$$) {
      $collection$$38_parentModel$$2$$ && ($collection$$38_parentModel$$2$$ = $self$$51$$.$GetChildCollection$($collection$$38_parentModel$$2$$.$model$), $self$$51$$.$FetchCollection$($collection$$38_parentModel$$2$$, 0, -1, {success:function($nodeSet$$29$$) {
        $nodeSet$$29$$.$FetchDescendants$({success:function() {
          $callbacks$$39$$.success && $callbacks$$39$$.success($nodeSet$$29$$)
        }})
      }}, $parent$$31$$))
    })
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.fetchDescendents", {$fetchDescendents$:$oj$$15$$.$CollectionTreeDataSource$.prototype.$fetchDescendents$});
  $oj$$15$$.$CollectionTreeDataSource$.prototype.sort = function $$oj$$15$$$$CollectionTreeDataSource$$$sort$($criteria$$7$$, $callbacks$$40$$) {
    var $key$$73$$ = $criteria$$7$$.key, $dir$$ = $criteria$$7$$.direction, $needSort$$2$$ = !1;
    $key$$73$$ !== this.$sortkey$ && (this.$sortkey$ = $key$$73$$, $needSort$$2$$ = !0);
    $dir$$ !== this.$sortdir$ && (this.$sortdir$ = $dir$$, $needSort$$2$$ = !0);
    if($needSort$$2$$) {
      "none" === this.$sortdir$ && (this.$cache$ = {});
      for(var $prop$$76$$ in this.$cache$) {
        this.$cache$.hasOwnProperty($prop$$76$$) && this.$_applySortToCollection$(this.$cache$[$prop$$76$$])
      }
    }
    $callbacks$$40$$ && $callbacks$$40$$.success && $callbacks$$40$$.success()
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.sort", {sort:$oj$$15$$.$CollectionTreeDataSource$.prototype.sort});
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$_applySortToCollection$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$_applySortToCollection$$($collection$$40$$) {
    $collection$$40$$.comparator = this.$sortkey$;
    $collection$$40$$.sortDirection = "ascending" === this.$sortdir$ ? 1 : -1;
    $collection$$40$$.sort()
  };
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$getSortCriteria$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$getSortCriteria$$() {
    return{key:this.$sortkey$, direction:this.$sortdir$}
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getSortCriteria", {$getSortCriteria$:$oj$$15$$.$CollectionTreeDataSource$.prototype.$getSortCriteria$});
  $oj$$15$$.$CollectionTreeDataSource$.prototype.move = function $$oj$$15$$$$CollectionTreeDataSource$$$move$() {
    $oj$$15$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.move", {move:$oj$$15$$.$CollectionTreeDataSource$.prototype.move});
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$moveOK$ = $JSCompiler_returnArg$$("invalid");
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.moveOK", {$moveOK$:$oj$$15$$.$CollectionTreeDataSource$.prototype.$moveOK$});
  $oj$$15$$.$CollectionTreeDataSource$.prototype.$getCapability$ = function $$oj$$15$$$$CollectionTreeDataSource$$$$getCapability$$($feature$$9$$) {
    return"sort" === $feature$$9$$ ? "default" : "move" === $feature$$9$$ ? "none" : "batchFetch" === $feature$$9$$ || "fetchDescendants" === $feature$$9$$ ? "disable" : null
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getCapability", {$getCapability$:$oj$$15$$.$CollectionTreeDataSource$.prototype.$getCapability$});
  $oj$$15$$.$CollectionNodeSet$ = function $$oj$$15$$$$CollectionNodeSet$$($parentKey$$10$$, $collection$$41$$, $treeDataSource$$, $start$$28$$, $count$$29$$) {
    this.$parentKey$ = $parentKey$$10$$;
    this.$collection$ = $collection$$41$$;
    this.$childNodeSet$ = [];
    this.$treeDataSource$ = $treeDataSource$$;
    this.start = $start$$28$$ < $collection$$41$$.length ? $start$$28$$ : $collection$$41$$.length - 1;
    this.count = -1 === $count$$29$$ ? $collection$$41$$.length : Math.min($collection$$41$$.length, $count$$29$$)
  };
  $goog$exportPath_$$("CollectionNodeSet", $oj$$15$$.$CollectionNodeSet$, $oj$$15$$);
  $oj$$15$$.$CollectionNodeSet$.prototype.$FetchDescendants$ = function $$oj$$15$$$$CollectionNodeSet$$$$FetchDescendants$$($callbacks$$42$$) {
    this.$_fetchDescendants$(this).done(function() {
      $callbacks$$42$$.success && $callbacks$$42$$.success()
    })
  };
  $oj$$15$$.$CollectionNodeSet$.prototype.$_fetchDescendants$ = function $$oj$$15$$$$CollectionNodeSet$$$$_fetchDescendants$$($nodeSet$$30$$) {
    function $nextNode$$($index$$128$$) {
      $index$$128$$ < $count$$30$$ ? $nodeSet$$30$$.$FetchChildNodeSet$($index$$128$$, {success:function($childNodeSet$$1$$) {
        null !== $childNodeSet$$1$$ ? $nodeSet$$30$$.$_fetchDescendants$($childNodeSet$$1$$).done(function() {
          $nextNode$$($index$$128$$ + 1)
        }) : $nextNode$$($index$$128$$ + 1)
      }}) : $dfd$$5$$.resolve()
    }
    var $dfd$$5$$ = $$$$15$$.Deferred(), $count$$30$$ = $nodeSet$$30$$.$getCount$();
    $nextNode$$(0);
    return $dfd$$5$$.promise()
  };
  $oj$$15$$.$CollectionNodeSet$.prototype.$FetchChildNodeSet$ = function $$oj$$15$$$$CollectionNodeSet$$$$FetchChildNodeSet$$($index$$129$$, $callbacks$$43$$) {
    var $model$$53_parentKey$$11$$ = this.$collection$.at($index$$129$$);
    if(this.$treeDataSource$.$parseMetadata$($model$$53_parentKey$$11$$).leaf) {
      this.$childNodeSet$[$index$$129$$] = null, $callbacks$$43$$.success(null)
    }else {
      var $collection$$42$$ = this.$treeDataSource$.$GetChildCollection$($model$$53_parentKey$$11$$), $model$$53_parentKey$$11$$ = this.$treeDataSource$.$parseMetadata$($model$$53_parentKey$$11$$).key, $self$$52$$ = this;
      this.$treeDataSource$.$FetchCollection$($collection$$42$$, 0, -1, {success:function($nodeSet$$31$$) {
        $self$$52$$.$childNodeSet$[$index$$129$$] = $nodeSet$$31$$;
        $callbacks$$43$$.success($nodeSet$$31$$)
      }}, $model$$53_parentKey$$11$$)
    }
  };
  $oj$$15$$.$CollectionNodeSet$.prototype.getParent = $JSCompiler_get$$("$parentKey$");
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getParent", {getParent:$oj$$15$$.$CollectionNodeSet$.prototype.getParent});
  $oj$$15$$.$CollectionNodeSet$.prototype.$getStart$ = $JSCompiler_get$$("start");
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getStart", {$getStart$:$oj$$15$$.$CollectionNodeSet$.prototype.$getStart$});
  $oj$$15$$.$CollectionNodeSet$.prototype.$getCount$ = $JSCompiler_get$$("count");
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getCount", {$getCount$:$oj$$15$$.$CollectionNodeSet$.prototype.$getCount$});
  $oj$$15$$.$CollectionNodeSet$.prototype.getData = function $$oj$$15$$$$CollectionNodeSet$$$getData$($index$$130$$) {
    this.$_checkRange$($index$$130$$);
    return this.$collection$.at($index$$130$$).attributes
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getData", {getData:$oj$$15$$.$CollectionNodeSet$.prototype.getData});
  $oj$$15$$.$CollectionNodeSet$.prototype.$_checkRange$ = function $$oj$$15$$$$CollectionNodeSet$$$$_checkRange$$($index$$131$$) {
    if($index$$131$$ < this.start || $index$$131$$ > this.start + this.count) {
      throw"Out of range";
    }
  };
  $oj$$15$$.$CollectionNodeSet$.prototype.getMetadata = function $$oj$$15$$$$CollectionNodeSet$$$getMetadata$($index$$132_model$$54_parse$$4$$) {
    this.$_checkRange$($index$$132_model$$54_parse$$4$$);
    var $metadata$$11$$ = {};
    $index$$132_model$$54_parse$$4$$ = this.$collection$.at($index$$132_model$$54_parse$$4$$);
    $index$$132_model$$54_parse$$4$$ = this.$treeDataSource$.$parseMetadata$($index$$132_model$$54_parse$$4$$);
    $metadata$$11$$.key = $index$$132_model$$54_parse$$4$$.key;
    $metadata$$11$$.leaf = $index$$132_model$$54_parse$$4$$.leaf;
    $metadata$$11$$.depth = $index$$132_model$$54_parse$$4$$.depth;
    return $metadata$$11$$
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getMetadata", {getMetadata:$oj$$15$$.$CollectionNodeSet$.prototype.getMetadata});
  $oj$$15$$.$CollectionNodeSet$.prototype.$getChildNodeSet$ = function $$oj$$15$$$$CollectionNodeSet$$$$getChildNodeSet$$($index$$133$$) {
    this.$_checkRange$($index$$133$$);
    return this.$childNodeSet$[$index$$133$$]
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$15$$.$CollectionNodeSet$.prototype.$getChildNodeSet$})
});
