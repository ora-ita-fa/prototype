define(["ojs/ojcore", "knockout", "ojs/ojmodel"], function($oj$$18$$, $ko$$3$$) {
  $oj$$18$$.$KnockoutUtils$ = $JSCompiler_emptyFn$$();
  $goog$exportPath_$$("KnockoutUtils", $oj$$18$$.$KnockoutUtils$, $oj$$18$$);
  $oj$$18$$.$KnockoutUtils$.$internalObjectProperty$ = "oj._internalObj";
  $oj$$18$$.$KnockoutUtils$.$underUpdateProp$ = "oj._underUpdate";
  $oj$$18$$.$KnockoutUtils$.$collUpdatingProp$ = "oj.collectionUpdating";
  $oj$$18$$.$KnockoutUtils$.map = function $$oj$$18$$$$KnockoutUtils$$map$($m$$20$$, $callback$$90$$, $array$$13_data$$86_updateObservable_updateObservableArrayRemove$$) {
    function $_makeUpdateModel$$($argProp$$) {
      return function($value$$159$$) {
        $koObject$$[$oj$$18$$.$KnockoutUtils$.$underUpdateProp$] || $m$$20$$.set($argProp$$, $value$$159$$)
      }
    }
    var $koObject$$, $i$$200_prop$$81_updateCollection_updateObservableArrayAdd$$, $converted_updateObservableArrayReset$$, $updateModel_updateObservableArraySort$$;
    if($m$$20$$ instanceof $oj$$18$$.$Collection$) {
      $koObject$$ = $array$$13_data$$86_updateObservable_updateObservableArrayRemove$$ ? $ko$$3$$.observableArray() : [];
      $oj$$18$$.$KnockoutUtils$.$_storeOriginalObject$($koObject$$, $m$$20$$);
      for($i$$200_prop$$81_updateCollection_updateObservableArrayAdd$$ = 0;$i$$200_prop$$81_updateCollection_updateObservableArrayAdd$$ < $m$$20$$.$_getLength$();$i$$200_prop$$81_updateCollection_updateObservableArrayAdd$$ += 1) {
        $koObject$$.push($oj$$18$$.$KnockoutUtils$.map($m$$20$$.$_atInternal$($i$$200_prop$$81_updateCollection_updateObservableArrayAdd$$, null, !0, !1), $callback$$90$$))
      }
      $i$$200_prop$$81_updateCollection_updateObservableArrayAdd$$ = function $$i$$200_prop$$81_updateCollection_updateObservableArrayAdd$$$($changes$$1$$) {
        var $i$$201$$;
        try {
          if(!$koObject$$[$oj$$18$$.$KnockoutUtils$.$underUpdateProp$]) {
            $koObject$$[$oj$$18$$.$KnockoutUtils$.$collUpdatingProp$] = !0;
            for($i$$201$$ = 0;$i$$201$$ < $changes$$1$$.length;$i$$201$$++) {
              var $index$$148$$ = $changes$$1$$[$i$$201$$].index, $model$$71$$ = $oj$$18$$.$KnockoutUtils$.$_getModel$($changes$$1$$[$i$$201$$].value), $status$$10$$ = $changes$$1$$[$i$$201$$].status;
              "added" === $status$$10$$ ? $index$$148$$ >= $m$$20$$.length - 1 ? $m$$20$$.add($model$$71$$) : $m$$20$$.add($model$$71$$, {at:$index$$148$$}) : "deleted" === $status$$10$$ && $m$$20$$.$_removeInternal$($model$$71$$, $index$$148$$)
            }
            $m$$20$$.comparator && ($koObject$$[$oj$$18$$.$KnockoutUtils$.$underUpdateProp$] = !0, $koObject$$.sort(function($a$$58$$, $b$$44$$) {
              return $oj$$18$$.$Collection$.$SortFunc$($a$$58$$, $b$$44$$, $m$$20$$.comparator, $m$$20$$, this)
            }), $koObject$$[$oj$$18$$.$KnockoutUtils$.$underUpdateProp$] = !1)
          }
        }catch($e$$45$$) {
          throw $e$$45$$;
        }finally {
          $koObject$$[$oj$$18$$.$KnockoutUtils$.$collUpdatingProp$] = !1
        }
      };
      $array$$13_data$$86_updateObservable_updateObservableArrayRemove$$ && $koObject$$.subscribe && $koObject$$.subscribe($i$$200_prop$$81_updateCollection_updateObservableArrayAdd$$, null, "arrayChange");
      $array$$13_data$$86_updateObservable_updateObservableArrayRemove$$ = function $$array$$13_data$$86_updateObservable_updateObservableArrayRemove$$$($model$$72$$, $collection$$49$$, $options$$274$$) {
        var $index$$149$$;
        try {
          !$koObject$$[$oj$$18$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$49$$ instanceof $oj$$18$$.$Collection$ && ($koObject$$[$oj$$18$$.$KnockoutUtils$.$underUpdateProp$] = !0, $index$$149$$ = $options$$274$$.index, $koObject$$.splice($index$$149$$, 1))
        }catch($e$$46$$) {
          throw $e$$46$$;
        }finally {
          $koObject$$[$oj$$18$$.$KnockoutUtils$.$underUpdateProp$] = !1
        }
      };
      $i$$200_prop$$81_updateCollection_updateObservableArrayAdd$$ = function $$i$$200_prop$$81_updateCollection_updateObservableArrayAdd$$$($model$$73$$, $collection$$50$$, $options$$275$$) {
        var $index$$150$$, $newObservable$$;
        try {
          if(!$koObject$$[$oj$$18$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$50$$ instanceof $oj$$18$$.$Collection$ && ($koObject$$[$oj$$18$$.$KnockoutUtils$.$underUpdateProp$] = !0, $index$$150$$ = $collection$$50$$.$_localIndexOf$($model$$73$$), void 0 !== $index$$150$$ && -1 < $index$$150$$)) {
            if($newObservable$$ = $oj$$18$$.$KnockoutUtils$.map($model$$73$$, $callback$$90$$), $options$$275$$.fillIn) {
              for(var $i$$202$$ = Array.isArray($koObject$$) ? $koObject$$.length : $koObject$$().length;$i$$202$$ < $index$$150$$;$i$$202$$++) {
                $koObject$$.splice($i$$202$$, 0, $oj$$18$$.$KnockoutUtils$.map($collection$$50$$.$_atInternal$($i$$202$$, null, !0, !1), $callback$$90$$))
              }
              $koObject$$.splice($index$$150$$, 1, $newObservable$$)
            }else {
              $koObject$$.splice($index$$150$$, 0, $newObservable$$)
            }
          }
        }catch($e$$47$$) {
          throw $e$$47$$;
        }finally {
          $koObject$$[$oj$$18$$.$KnockoutUtils$.$underUpdateProp$] = !1
        }
      };
      $converted_updateObservableArrayReset$$ = function $$converted_updateObservableArrayReset$$$($collection$$51$$) {
        try {
          !$koObject$$[$oj$$18$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$51$$ instanceof $oj$$18$$.$Collection$ && ($koObject$$[$oj$$18$$.$KnockoutUtils$.$underUpdateProp$] = !0, $ko$$3$$.isObservable($koObject$$) ? $koObject$$.removeAll() : $koObject$$ = [])
        }catch($e$$48$$) {
          throw $e$$48$$;
        }finally {
          $koObject$$[$oj$$18$$.$KnockoutUtils$.$underUpdateProp$] = !1
        }
      };
      $updateModel_updateObservableArraySort$$ = function $$updateModel_updateObservableArraySort$$$($collection$$52$$) {
        try {
          !$koObject$$[$oj$$18$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$52$$ instanceof $oj$$18$$.$Collection$ && ($koObject$$[$oj$$18$$.$KnockoutUtils$.$underUpdateProp$] = !0, $koObject$$.sort(function($a$$59$$, $b$$45$$) {
            return $oj$$18$$.$Collection$.$SortFunc$($a$$59$$, $b$$45$$, $m$$20$$.comparator, $collection$$52$$, this)
          }))
        }catch($e$$49$$) {
          throw $e$$49$$;
        }finally {
          $koObject$$[$oj$$18$$.$KnockoutUtils$.$underUpdateProp$] = !1
        }
      };
      $m$$20$$.$OnInternal$($oj$$18$$.$Events$.$EventType$.ADD, $i$$200_prop$$81_updateCollection_updateObservableArrayAdd$$, void 0, void 0, !0);
      $m$$20$$.$OnInternal$($oj$$18$$.$Events$.$EventType$.REMOVE, $array$$13_data$$86_updateObservable_updateObservableArrayRemove$$, void 0, void 0, !0);
      $m$$20$$.$OnInternal$($oj$$18$$.$Events$.$EventType$.RESET, $converted_updateObservableArrayReset$$, void 0, void 0, !0);
      $m$$20$$.$OnInternal$($oj$$18$$.$Events$.$EventType$.SORT, $updateModel_updateObservableArraySort$$, void 0, void 0, !0)
    }else {
      if(void 0 === $m$$20$$) {
        return
      }
      $koObject$$ = {};
      $array$$13_data$$86_updateObservable_updateObservableArrayRemove$$ = $m$$20$$.attributes;
      $i$$200_prop$$81_updateCollection_updateObservableArrayAdd$$ = null;
      for($i$$200_prop$$81_updateCollection_updateObservableArrayAdd$$ in $array$$13_data$$86_updateObservable_updateObservableArrayRemove$$) {
        $array$$13_data$$86_updateObservable_updateObservableArrayRemove$$.hasOwnProperty($i$$200_prop$$81_updateCollection_updateObservableArrayAdd$$) && ($converted_updateObservableArrayReset$$ = $ko$$3$$.observable($m$$20$$.get($i$$200_prop$$81_updateCollection_updateObservableArrayAdd$$)), $koObject$$[$i$$200_prop$$81_updateCollection_updateObservableArrayAdd$$] = $converted_updateObservableArrayReset$$, $updateModel_updateObservableArraySort$$ = $_makeUpdateModel$$($i$$200_prop$$81_updateCollection_updateObservableArrayAdd$$), 
        $updateModel_updateObservableArraySort$$.$_prop$ = $i$$200_prop$$81_updateCollection_updateObservableArrayAdd$$, $converted_updateObservableArrayReset$$.subscribe && $converted_updateObservableArrayReset$$.subscribe($updateModel_updateObservableArraySort$$))
      }
      $array$$13_data$$86_updateObservable_updateObservableArrayRemove$$ = function $$array$$13_data$$86_updateObservable_updateObservableArrayRemove$$$($model$$74$$) {
        var $attrs$$18$$, $prop$$82$$;
        try {
          for($prop$$82$$ in $koObject$$[$oj$$18$$.$KnockoutUtils$.$underUpdateProp$] = !0, $attrs$$18$$ = $model$$74$$.$changedAttributes$(), $attrs$$18$$) {
            if($attrs$$18$$.hasOwnProperty($prop$$82$$)) {
              $koObject$$[$prop$$82$$]($model$$74$$.get($prop$$82$$))
            }
          }
        }catch($e$$50$$) {
          throw $e$$50$$;
        }finally {
          $koObject$$[$oj$$18$$.$KnockoutUtils$.$underUpdateProp$] = !1
        }
      };
      $m$$20$$.$OnInternal$($oj$$18$$.$Events$.$EventType$.CHANGE, $array$$13_data$$86_updateObservable_updateObservableArrayRemove$$, void 0, void 0, !0);
      $oj$$18$$.$KnockoutUtils$.$_storeOriginalObject$($koObject$$, $m$$20$$);
      $callback$$90$$ && $callback$$90$$($koObject$$)
    }
    return $koObject$$
  };
  $goog$exportPath_$$("KnockoutUtils.map", $oj$$18$$.$KnockoutUtils$.map, $oj$$18$$);
  $oj$$18$$.$KnockoutUtils$.$_getModels$ = function $$oj$$18$$$$KnockoutUtils$$$_getModels$$($arr$$22$$) {
    var $modelArray$$2$$ = [], $i$$203$$, $model$$75$$;
    for($i$$203$$ = 0;$i$$203$$ < $arr$$22$$.length;$i$$203$$ += 1) {
      $model$$75$$ = $oj$$18$$.$KnockoutUtils$.$_getModel$($arr$$22$$[$i$$203$$]), $modelArray$$2$$.push($model$$75$$)
    }
    return $modelArray$$2$$
  };
  $oj$$18$$.$KnockoutUtils$.$_getModel$ = function $$oj$$18$$$$KnockoutUtils$$$_getModel$$($val$$28$$) {
    return $val$$28$$ instanceof $oj$$18$$.$Model$ ? $val$$28$$ : $val$$28$$[$oj$$18$$.$KnockoutUtils$.$internalObjectProperty$]
  };
  $oj$$18$$.$KnockoutUtils$.$_storeOriginalObject$ = function $$oj$$18$$$$KnockoutUtils$$$_storeOriginalObject$$($object$$7$$, $value$$160$$) {
    try {
      Object.defineProperty($object$$7$$, $oj$$18$$.$KnockoutUtils$.$internalObjectProperty$, {value:$value$$160$$, enumerable:!1})
    }catch($e$$51$$) {
      $object$$7$$[$oj$$18$$.$KnockoutUtils$.$internalObjectProperty$] = $value$$160$$
    }
  }
});
