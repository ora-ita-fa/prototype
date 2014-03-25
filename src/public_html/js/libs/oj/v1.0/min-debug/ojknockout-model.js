define(["ojs/ojcore", "knockout", "ojs/ojmodel"], function($oj$$17$$, $ko$$3$$) {
  $oj$$17$$.$KnockoutUtils$ = $JSCompiler_emptyFn$$();
  $goog$exportPath_$$("KnockoutUtils", $oj$$17$$.$KnockoutUtils$, $oj$$17$$);
  $oj$$17$$.$KnockoutUtils$.$internalObjectProperty$ = "oj._internalObj";
  $oj$$17$$.$KnockoutUtils$.$underUpdateProp$ = "oj._underUpdate";
  $oj$$17$$.$KnockoutUtils$.$collUpdatingProp$ = "oj.collectionUpdating";
  $oj$$17$$.$KnockoutUtils$.map = function $$oj$$17$$$$KnockoutUtils$$map$($m$$25$$, $callback$$86$$, $array$$13_data$$82_updateObservable_updateObservableArrayRemove$$) {
    function $_makeUpdateModel$$($argProp$$) {
      return function($value$$155$$) {
        $koObject$$[$oj$$17$$.$KnockoutUtils$.$underUpdateProp$] || $m$$25$$.set($argProp$$, $value$$155$$)
      }
    }
    var $koObject$$, $i$$195_prop$$77_updateCollection_updateObservableArrayAdd$$, $converted_updateObservableArrayReset$$, $updateModel_updateObservableArraySort$$;
    if($m$$25$$ instanceof $oj$$17$$.$Collection$) {
      $koObject$$ = $array$$13_data$$82_updateObservable_updateObservableArrayRemove$$ ? $ko$$3$$.observableArray() : [];
      $oj$$17$$.$KnockoutUtils$.$_storeOriginalObject$($koObject$$, $m$$25$$);
      for($i$$195_prop$$77_updateCollection_updateObservableArrayAdd$$ = 0;$i$$195_prop$$77_updateCollection_updateObservableArrayAdd$$ < $m$$25$$.$_getLength$();$i$$195_prop$$77_updateCollection_updateObservableArrayAdd$$ += 1) {
        $koObject$$.push($oj$$17$$.$KnockoutUtils$.map($m$$25$$.$_atInternal$($i$$195_prop$$77_updateCollection_updateObservableArrayAdd$$, null, !0, !1), $callback$$86$$))
      }
      $i$$195_prop$$77_updateCollection_updateObservableArrayAdd$$ = function $$i$$195_prop$$77_updateCollection_updateObservableArrayAdd$$$($changes$$1$$) {
        var $i$$196$$;
        try {
          if(!$koObject$$[$oj$$17$$.$KnockoutUtils$.$underUpdateProp$]) {
            $koObject$$[$oj$$17$$.$KnockoutUtils$.$collUpdatingProp$] = !0;
            for($i$$196$$ = 0;$i$$196$$ < $changes$$1$$.length;$i$$196$$++) {
              var $index$$136$$ = $changes$$1$$[$i$$196$$].index, $model$$66$$ = $oj$$17$$.$KnockoutUtils$.$_getModel$($changes$$1$$[$i$$196$$].value), $status$$9$$ = $changes$$1$$[$i$$196$$].status;
              "added" === $status$$9$$ ? $index$$136$$ >= $m$$25$$.length - 1 ? $m$$25$$.add($model$$66$$) : $m$$25$$.add($model$$66$$, {at:$index$$136$$}) : "deleted" === $status$$9$$ && $m$$25$$.$_removeInternal$($model$$66$$, $index$$136$$)
            }
            $m$$25$$.comparator && ($koObject$$[$oj$$17$$.$KnockoutUtils$.$underUpdateProp$] = !0, $koObject$$.sort(function($a$$58$$, $b$$44$$) {
              return $oj$$17$$.$Collection$.$SortFunc$($a$$58$$, $b$$44$$, $m$$25$$.comparator, $m$$25$$, this)
            }), $koObject$$[$oj$$17$$.$KnockoutUtils$.$underUpdateProp$] = !1)
          }
        }catch($e$$45$$) {
          throw $e$$45$$;
        }finally {
          $koObject$$[$oj$$17$$.$KnockoutUtils$.$collUpdatingProp$] = !1
        }
      };
      $array$$13_data$$82_updateObservable_updateObservableArrayRemove$$ && $koObject$$.subscribe && $koObject$$.subscribe($i$$195_prop$$77_updateCollection_updateObservableArrayAdd$$, null, "arrayChange");
      $array$$13_data$$82_updateObservable_updateObservableArrayRemove$$ = function $$array$$13_data$$82_updateObservable_updateObservableArrayRemove$$$($model$$67$$, $collection$$47$$, $options$$247$$) {
        var $index$$137$$;
        try {
          !$koObject$$[$oj$$17$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$47$$ instanceof $oj$$17$$.$Collection$ && ($koObject$$[$oj$$17$$.$KnockoutUtils$.$underUpdateProp$] = !0, $index$$137$$ = $options$$247$$.index, $koObject$$.splice($index$$137$$, 1))
        }catch($e$$46$$) {
          throw $e$$46$$;
        }finally {
          $koObject$$[$oj$$17$$.$KnockoutUtils$.$underUpdateProp$] = !1
        }
      };
      $i$$195_prop$$77_updateCollection_updateObservableArrayAdd$$ = function $$i$$195_prop$$77_updateCollection_updateObservableArrayAdd$$$($model$$68$$, $collection$$48$$, $options$$248$$) {
        var $index$$138$$, $newObservable$$;
        try {
          if(!$koObject$$[$oj$$17$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$48$$ instanceof $oj$$17$$.$Collection$ && ($koObject$$[$oj$$17$$.$KnockoutUtils$.$underUpdateProp$] = !0, $index$$138$$ = $collection$$48$$.$_localIndexOf$($model$$68$$), void 0 !== $index$$138$$ && -1 < $index$$138$$)) {
            if($newObservable$$ = $oj$$17$$.$KnockoutUtils$.map($model$$68$$, $callback$$86$$), $options$$248$$.fillIn) {
              for(var $i$$197$$ = Array.isArray($koObject$$) ? $koObject$$.length : $koObject$$().length;$i$$197$$ < $index$$138$$;$i$$197$$++) {
                $koObject$$.splice($i$$197$$, 0, $oj$$17$$.$KnockoutUtils$.map($collection$$48$$.$_atInternal$($i$$197$$, null, !0, !1), $callback$$86$$))
              }
              $koObject$$.splice($index$$138$$, 1, $newObservable$$)
            }else {
              $koObject$$.splice($index$$138$$, 0, $newObservable$$)
            }
          }
        }catch($e$$47$$) {
          throw $e$$47$$;
        }finally {
          $koObject$$[$oj$$17$$.$KnockoutUtils$.$underUpdateProp$] = !1
        }
      };
      $converted_updateObservableArrayReset$$ = function $$converted_updateObservableArrayReset$$$($collection$$49$$) {
        try {
          !$koObject$$[$oj$$17$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$49$$ instanceof $oj$$17$$.$Collection$ && ($koObject$$[$oj$$17$$.$KnockoutUtils$.$underUpdateProp$] = !0, $ko$$3$$.isObservable($koObject$$) ? $koObject$$.removeAll() : $koObject$$ = [])
        }catch($e$$48$$) {
          throw $e$$48$$;
        }finally {
          $koObject$$[$oj$$17$$.$KnockoutUtils$.$underUpdateProp$] = !1
        }
      };
      $updateModel_updateObservableArraySort$$ = function $$updateModel_updateObservableArraySort$$$($collection$$50$$) {
        try {
          !$koObject$$[$oj$$17$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$50$$ instanceof $oj$$17$$.$Collection$ && ($koObject$$[$oj$$17$$.$KnockoutUtils$.$underUpdateProp$] = !0, $koObject$$.sort(function($a$$59$$, $b$$45$$) {
            return $oj$$17$$.$Collection$.$SortFunc$($a$$59$$, $b$$45$$, $m$$25$$.comparator, $collection$$50$$, this)
          }))
        }catch($e$$49$$) {
          throw $e$$49$$;
        }finally {
          $koObject$$[$oj$$17$$.$KnockoutUtils$.$underUpdateProp$] = !1
        }
      };
      $m$$25$$.$OnInternal$($oj$$17$$.$Events$.$EventType$.ADD, $i$$195_prop$$77_updateCollection_updateObservableArrayAdd$$, void 0, void 0, !0);
      $m$$25$$.$OnInternal$($oj$$17$$.$Events$.$EventType$.REMOVE, $array$$13_data$$82_updateObservable_updateObservableArrayRemove$$, void 0, void 0, !0);
      $m$$25$$.$OnInternal$($oj$$17$$.$Events$.$EventType$.RESET, $converted_updateObservableArrayReset$$, void 0, void 0, !0);
      $m$$25$$.$OnInternal$($oj$$17$$.$Events$.$EventType$.SORT, $updateModel_updateObservableArraySort$$, void 0, void 0, !0)
    }else {
      if(void 0 === $m$$25$$) {
        return
      }
      $koObject$$ = {};
      $array$$13_data$$82_updateObservable_updateObservableArrayRemove$$ = $m$$25$$.attributes;
      $i$$195_prop$$77_updateCollection_updateObservableArrayAdd$$ = null;
      for($i$$195_prop$$77_updateCollection_updateObservableArrayAdd$$ in $array$$13_data$$82_updateObservable_updateObservableArrayRemove$$) {
        $array$$13_data$$82_updateObservable_updateObservableArrayRemove$$.hasOwnProperty($i$$195_prop$$77_updateCollection_updateObservableArrayAdd$$) && ($converted_updateObservableArrayReset$$ = $ko$$3$$.observable($m$$25$$.get($i$$195_prop$$77_updateCollection_updateObservableArrayAdd$$)), $koObject$$[$i$$195_prop$$77_updateCollection_updateObservableArrayAdd$$] = $converted_updateObservableArrayReset$$, $updateModel_updateObservableArraySort$$ = $_makeUpdateModel$$($i$$195_prop$$77_updateCollection_updateObservableArrayAdd$$), 
        $updateModel_updateObservableArraySort$$.$_prop$ = $i$$195_prop$$77_updateCollection_updateObservableArrayAdd$$, $converted_updateObservableArrayReset$$.subscribe && $converted_updateObservableArrayReset$$.subscribe($updateModel_updateObservableArraySort$$))
      }
      $array$$13_data$$82_updateObservable_updateObservableArrayRemove$$ = function $$array$$13_data$$82_updateObservable_updateObservableArrayRemove$$$($model$$69$$) {
        var $attrs$$17$$, $prop$$78$$;
        try {
          for($prop$$78$$ in $koObject$$[$oj$$17$$.$KnockoutUtils$.$underUpdateProp$] = !0, $attrs$$17$$ = $model$$69$$.$changedAttributes$(), $attrs$$17$$) {
            if($attrs$$17$$.hasOwnProperty($prop$$78$$)) {
              $koObject$$[$prop$$78$$]($model$$69$$.get($prop$$78$$))
            }
          }
        }catch($e$$50$$) {
          throw $e$$50$$;
        }finally {
          $koObject$$[$oj$$17$$.$KnockoutUtils$.$underUpdateProp$] = !1
        }
      };
      $m$$25$$.$OnInternal$($oj$$17$$.$Events$.$EventType$.CHANGE, $array$$13_data$$82_updateObservable_updateObservableArrayRemove$$, void 0, void 0, !0);
      $oj$$17$$.$KnockoutUtils$.$_storeOriginalObject$($koObject$$, $m$$25$$);
      $callback$$86$$ && $callback$$86$$($koObject$$)
    }
    return $koObject$$
  };
  $goog$exportPath_$$("KnockoutUtils.map", $oj$$17$$.$KnockoutUtils$.map, $oj$$17$$);
  $oj$$17$$.$KnockoutUtils$.$_getModels$ = function $$oj$$17$$$$KnockoutUtils$$$_getModels$$($arr$$22$$) {
    var $modelArray$$2$$ = [], $i$$198$$, $model$$70$$;
    for($i$$198$$ = 0;$i$$198$$ < $arr$$22$$.length;$i$$198$$ += 1) {
      $model$$70$$ = $oj$$17$$.$KnockoutUtils$.$_getModel$($arr$$22$$[$i$$198$$]), $modelArray$$2$$.push($model$$70$$)
    }
    return $modelArray$$2$$
  };
  $oj$$17$$.$KnockoutUtils$.$_getModel$ = function $$oj$$17$$$$KnockoutUtils$$$_getModel$$($val$$25$$) {
    return $val$$25$$ instanceof $oj$$17$$.$Model$ ? $val$$25$$ : $val$$25$$[$oj$$17$$.$KnockoutUtils$.$internalObjectProperty$]
  };
  $oj$$17$$.$KnockoutUtils$.$_storeOriginalObject$ = function $$oj$$17$$$$KnockoutUtils$$$_storeOriginalObject$$($object$$7$$, $value$$156$$) {
    try {
      Object.defineProperty($object$$7$$, $oj$$17$$.$KnockoutUtils$.$internalObjectProperty$, {value:$value$$156$$, enumerable:!1})
    }catch($e$$51$$) {
      $object$$7$$[$oj$$17$$.$KnockoutUtils$.$internalObjectProperty$] = $value$$156$$
    }
  }
});
