define(["ojs/ojcore", "knockout", "ojs/ojmodel"], function($oj$$32$$, $ko$$3$$) {
  $oj$$32$$.$KnockoutUtils$ = $JSCompiler_emptyFn$$();
  $goog$exportPath_$$("KnockoutUtils", $oj$$32$$.$KnockoutUtils$, $oj$$32$$);
  $oj$$32$$.$KnockoutUtils$.$internalObjectProperty$ = "oj._internalObj";
  $oj$$32$$.$KnockoutUtils$.$underUpdateProp$ = "oj._underUpdate";
  $oj$$32$$.$KnockoutUtils$.$collUpdatingProp$ = "oj.collectionUpdating";
  $oj$$32$$.$KnockoutUtils$.map = function $$oj$$32$$$$KnockoutUtils$$map$($m$$25$$, $callback$$103$$, $array$$14_data$$136_updateObservable_updateObservableArrayRemove$$) {
    function $_makeUpdateModel$$($argProp$$) {
      return function($value$$200$$) {
        $koObject$$[$oj$$32$$.$KnockoutUtils$.$underUpdateProp$] || $m$$25$$.set($argProp$$, $value$$200$$)
      }
    }
    var $koObject$$, $i$$263_prop$$83_updateCollection_updateObservableArrayAdd$$, $converted_updateObservableArrayReset$$, $updateModel_updateObservableArraySort$$;
    if($m$$25$$ instanceof $oj$$32$$.$Collection$) {
      $koObject$$ = $array$$14_data$$136_updateObservable_updateObservableArrayRemove$$ ? $ko$$3$$.observableArray() : [];
      $oj$$32$$.$KnockoutUtils$.$_storeOriginalObject$($koObject$$, $m$$25$$);
      for($i$$263_prop$$83_updateCollection_updateObservableArrayAdd$$ = 0;$i$$263_prop$$83_updateCollection_updateObservableArrayAdd$$ < $m$$25$$.$_getLength$();$i$$263_prop$$83_updateCollection_updateObservableArrayAdd$$ += 1) {
        $koObject$$.push($oj$$32$$.$KnockoutUtils$.map($m$$25$$.$_atInternal$($i$$263_prop$$83_updateCollection_updateObservableArrayAdd$$, null, !0, !1), $callback$$103$$))
      }
      $i$$263_prop$$83_updateCollection_updateObservableArrayAdd$$ = function $$i$$263_prop$$83_updateCollection_updateObservableArrayAdd$$$($changes$$) {
        var $i$$264$$;
        try {
          if(!$koObject$$[$oj$$32$$.$KnockoutUtils$.$underUpdateProp$]) {
            $koObject$$[$oj$$32$$.$KnockoutUtils$.$collUpdatingProp$] = !0;
            for($i$$264$$ = 0;$i$$264$$ < $changes$$.length;$i$$264$$++) {
              var $index$$181$$ = $changes$$[$i$$264$$].index, $model$$69$$ = $oj$$32$$.$KnockoutUtils$.$_getModel$($changes$$[$i$$264$$].value), $status$$11$$ = $changes$$[$i$$264$$].status;
              "added" === $status$$11$$ ? $index$$181$$ >= $m$$25$$.length - 1 ? $m$$25$$.add($model$$69$$) : $m$$25$$.add($model$$69$$, {at:$index$$181$$}) : "deleted" === $status$$11$$ && $m$$25$$.$_removeInternal$($model$$69$$, $index$$181$$)
            }
            $m$$25$$.comparator && ($koObject$$[$oj$$32$$.$KnockoutUtils$.$underUpdateProp$] = !0, $koObject$$.sort(function($a$$74$$, $b$$48$$) {
              return $oj$$32$$.$Collection$.$SortFunc$($a$$74$$, $b$$48$$, $m$$25$$.comparator, $m$$25$$, this)
            }), $koObject$$[$oj$$32$$.$KnockoutUtils$.$underUpdateProp$] = !1)
          }
        }catch($e$$113$$) {
          throw $e$$113$$;
        }finally {
          $koObject$$[$oj$$32$$.$KnockoutUtils$.$collUpdatingProp$] = !1
        }
      };
      $array$$14_data$$136_updateObservable_updateObservableArrayRemove$$ && $koObject$$.subscribe && $koObject$$.subscribe($i$$263_prop$$83_updateCollection_updateObservableArrayAdd$$, null, "arrayChange");
      $array$$14_data$$136_updateObservable_updateObservableArrayRemove$$ = function $$array$$14_data$$136_updateObservable_updateObservableArrayRemove$$$($model$$70$$, $collection$$49$$, $options$$295$$) {
        var $index$$182$$;
        try {
          !$koObject$$[$oj$$32$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$49$$ instanceof $oj$$32$$.$Collection$ && ($koObject$$[$oj$$32$$.$KnockoutUtils$.$underUpdateProp$] = !0, $index$$182$$ = $options$$295$$.index, $koObject$$.splice($index$$182$$, 1))
        }catch($e$$114$$) {
          throw $e$$114$$;
        }finally {
          $koObject$$[$oj$$32$$.$KnockoutUtils$.$underUpdateProp$] = !1
        }
      };
      $i$$263_prop$$83_updateCollection_updateObservableArrayAdd$$ = function $$i$$263_prop$$83_updateCollection_updateObservableArrayAdd$$$($model$$71$$, $collection$$50$$, $options$$296$$) {
        var $index$$183$$, $newObservable$$;
        try {
          if(!$koObject$$[$oj$$32$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$50$$ instanceof $oj$$32$$.$Collection$ && ($koObject$$[$oj$$32$$.$KnockoutUtils$.$underUpdateProp$] = !0, $index$$183$$ = $collection$$50$$.$_localIndexOf$($model$$71$$), void 0 !== $index$$183$$ && -1 < $index$$183$$)) {
            if($newObservable$$ = $oj$$32$$.$KnockoutUtils$.map($model$$71$$, $callback$$103$$), $options$$296$$.fillIn) {
              for(var $i$$265$$ = Array.isArray($koObject$$) ? $koObject$$.length : $koObject$$().length;$i$$265$$ < $index$$183$$;$i$$265$$++) {
                $koObject$$.splice($i$$265$$, 0, $oj$$32$$.$KnockoutUtils$.map($collection$$50$$.$_atInternal$($i$$265$$, null, !0, !1), $callback$$103$$))
              }
              $koObject$$.splice($index$$183$$, 1, $newObservable$$)
            }else {
              $koObject$$.splice($index$$183$$, 0, $newObservable$$)
            }
          }
        }catch($e$$115$$) {
          throw $e$$115$$;
        }finally {
          $koObject$$[$oj$$32$$.$KnockoutUtils$.$underUpdateProp$] = !1
        }
      };
      $converted_updateObservableArrayReset$$ = function $$converted_updateObservableArrayReset$$$($collection$$51$$) {
        try {
          !$koObject$$[$oj$$32$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$51$$ instanceof $oj$$32$$.$Collection$ && ($koObject$$[$oj$$32$$.$KnockoutUtils$.$underUpdateProp$] = !0, $ko$$3$$.isObservable($koObject$$) ? $koObject$$.removeAll() : $koObject$$ = [])
        }catch($e$$116$$) {
          throw $e$$116$$;
        }finally {
          $koObject$$[$oj$$32$$.$KnockoutUtils$.$underUpdateProp$] = !1
        }
      };
      $updateModel_updateObservableArraySort$$ = function $$updateModel_updateObservableArraySort$$$($collection$$52$$) {
        try {
          !$koObject$$[$oj$$32$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$52$$ instanceof $oj$$32$$.$Collection$ && ($koObject$$[$oj$$32$$.$KnockoutUtils$.$underUpdateProp$] = !0, $koObject$$.sort(function($a$$75$$, $b$$49$$) {
            return $oj$$32$$.$Collection$.$SortFunc$($a$$75$$, $b$$49$$, $m$$25$$.comparator, $collection$$52$$, this)
          }))
        }catch($e$$117$$) {
          throw $e$$117$$;
        }finally {
          $koObject$$[$oj$$32$$.$KnockoutUtils$.$underUpdateProp$] = !1
        }
      };
      $m$$25$$.$OnInternal$($oj$$32$$.$Events$.$EventType$.ADD, $i$$263_prop$$83_updateCollection_updateObservableArrayAdd$$, void 0, void 0, !0);
      $m$$25$$.$OnInternal$($oj$$32$$.$Events$.$EventType$.REMOVE, $array$$14_data$$136_updateObservable_updateObservableArrayRemove$$, void 0, void 0, !0);
      $m$$25$$.$OnInternal$($oj$$32$$.$Events$.$EventType$.RESET, $converted_updateObservableArrayReset$$, void 0, void 0, !0);
      $m$$25$$.$OnInternal$($oj$$32$$.$Events$.$EventType$.SORT, $updateModel_updateObservableArraySort$$, void 0, void 0, !0)
    }else {
      if(void 0 === $m$$25$$) {
        return
      }
      $koObject$$ = {};
      $array$$14_data$$136_updateObservable_updateObservableArrayRemove$$ = $m$$25$$.attributes;
      $i$$263_prop$$83_updateCollection_updateObservableArrayAdd$$ = null;
      for($i$$263_prop$$83_updateCollection_updateObservableArrayAdd$$ in $array$$14_data$$136_updateObservable_updateObservableArrayRemove$$) {
        $array$$14_data$$136_updateObservable_updateObservableArrayRemove$$.hasOwnProperty($i$$263_prop$$83_updateCollection_updateObservableArrayAdd$$) && ($converted_updateObservableArrayReset$$ = $ko$$3$$.observable($m$$25$$.get($i$$263_prop$$83_updateCollection_updateObservableArrayAdd$$)), $koObject$$[$i$$263_prop$$83_updateCollection_updateObservableArrayAdd$$] = $converted_updateObservableArrayReset$$, $updateModel_updateObservableArraySort$$ = $_makeUpdateModel$$($i$$263_prop$$83_updateCollection_updateObservableArrayAdd$$), 
        $updateModel_updateObservableArraySort$$.$_prop$ = $i$$263_prop$$83_updateCollection_updateObservableArrayAdd$$, $converted_updateObservableArrayReset$$.subscribe && $converted_updateObservableArrayReset$$.subscribe($updateModel_updateObservableArraySort$$))
      }
      $array$$14_data$$136_updateObservable_updateObservableArrayRemove$$ = function $$array$$14_data$$136_updateObservable_updateObservableArrayRemove$$$($model$$72$$) {
        var $attrs$$19$$, $prop$$84$$;
        try {
          for($prop$$84$$ in $koObject$$[$oj$$32$$.$KnockoutUtils$.$underUpdateProp$] = !0, $attrs$$19$$ = $model$$72$$.$changedAttributes$(), $attrs$$19$$) {
            if($attrs$$19$$.hasOwnProperty($prop$$84$$)) {
              $koObject$$[$prop$$84$$]($model$$72$$.get($prop$$84$$))
            }
          }
        }catch($e$$118$$) {
          throw $e$$118$$;
        }finally {
          $koObject$$[$oj$$32$$.$KnockoutUtils$.$underUpdateProp$] = !1
        }
      };
      $m$$25$$.$OnInternal$($oj$$32$$.$Events$.$EventType$.CHANGE, $array$$14_data$$136_updateObservable_updateObservableArrayRemove$$, void 0, void 0, !0);
      $oj$$32$$.$KnockoutUtils$.$_storeOriginalObject$($koObject$$, $m$$25$$);
      $callback$$103$$ && $callback$$103$$($koObject$$)
    }
    return $koObject$$
  };
  $goog$exportPath_$$("KnockoutUtils.map", $oj$$32$$.$KnockoutUtils$.map, $oj$$32$$);
  $oj$$32$$.$KnockoutUtils$.$_getModels$ = function $$oj$$32$$$$KnockoutUtils$$$_getModels$$($arr$$23$$) {
    var $modelArray$$2$$ = [], $i$$266$$, $model$$73$$;
    for($i$$266$$ = 0;$i$$266$$ < $arr$$23$$.length;$i$$266$$ += 1) {
      $model$$73$$ = $oj$$32$$.$KnockoutUtils$.$_getModel$($arr$$23$$[$i$$266$$]), $modelArray$$2$$.push($model$$73$$)
    }
    return $modelArray$$2$$
  };
  $oj$$32$$.$KnockoutUtils$.$_getModel$ = function $$oj$$32$$$$KnockoutUtils$$$_getModel$$($val$$57$$) {
    return $val$$57$$ instanceof $oj$$32$$.$Model$ ? $val$$57$$ : $val$$57$$[$oj$$32$$.$KnockoutUtils$.$internalObjectProperty$]
  };
  $oj$$32$$.$KnockoutUtils$.$_storeOriginalObject$ = function $$oj$$32$$$$KnockoutUtils$$$_storeOriginalObject$$($object$$7$$, $value$$201$$) {
    Object.defineProperty($object$$7$$, $oj$$32$$.$KnockoutUtils$.$internalObjectProperty$, {value:$value$$201$$, enumerable:!1})
  }
});
