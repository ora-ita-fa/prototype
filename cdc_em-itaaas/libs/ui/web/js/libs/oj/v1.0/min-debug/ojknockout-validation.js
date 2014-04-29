define(["ojs/ojcore", "jquery", "knockout", "jqueryui", "ojs/ojknockout"], function($oj$$24$$, $$$$24$$, $ko$$2$$) {
  $oj$$24$$.$ValueBinding$ = $JSCompiler_emptyFn$$();
  $goog$exportPath_$$("ValueBinding", $oj$$24$$.$ValueBinding$, $oj$$24$$);
  $oj$$24$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$ = "invalidComponentTracker";
  $goog$exportPath_$$("ValueBinding._ATTRIBUTE_INVALID_COMPONENT_TRACKER", $oj$$24$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$, $oj$$24$$);
  $oj$$24$$.$ValueBinding$.$_ATTRIBUTE_MESSAGES$ = "messages";
  $oj$$24$$.$ValueBinding$.$_ATTRIBUTE_OPTIONCHANGE$ = "optionChange";
  $oj$$24$$.$ValueBinding$._init = function $$oj$$24$$$$ValueBinding$$_init$($property$$23$$, $initProps$$1_value$$183$$, $element$$61_optionChangeFunc$$, $component$$9$$, $options$$269_valueAccessor$$9$$) {
    $initProps$$1_value$$183$$ = {};
    $options$$269_valueAccessor$$9$$ = $options$$269_valueAccessor$$9$$.call();
    $element$$61_optionChangeFunc$$ = $oj$$24$$.$ComponentBinding$.$_toJS$($options$$269_valueAccessor$$9$$[$oj$$24$$.$ValueBinding$.$_ATTRIBUTE_OPTIONCHANGE$]);
    $property$$23$$ === $oj$$24$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$ ? $element$$61_optionChangeFunc$$ || $oj$$24$$.$ValueBinding$.$_registerInvalidComponentTrackerWriteback$($options$$269_valueAccessor$$9$$, $initProps$$1_value$$183$$, $component$$9$$) : $property$$23$$ === $oj$$24$$.$ValueBinding$.$_ATTRIBUTE_OPTIONCHANGE$ && $oj$$24$$.$ValueBinding$.$_registerInvalidComponentTrackerWriteback$($options$$269_valueAccessor$$9$$, $initProps$$1_value$$183$$, $component$$9$$);
    return $initProps$$1_value$$183$$
  };
  $oj$$24$$.$ValueBinding$.$_registerInvalidComponentTrackerWriteback$ = function $$oj$$24$$$$ValueBinding$$$_registerInvalidComponentTrackerWriteback$$($options$$270$$, $initProps$$2$$, $component$$10$$) {
    var $optionChangeProp$$1$$ = $oj$$24$$.$ValueBinding$.$_ATTRIBUTE_OPTIONCHANGE$, $oldOptionChangeFunc$$, $newMessages$$, $invalidComponentTrackerObs$$ = $options$$270$$[$oj$$24$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$], $items$$, $matched$$ = -1, $newData$$3$$ = {};
    $oldOptionChangeFunc$$ = $oj$$24$$.$ComponentBinding$.$_toJS$($options$$270$$[$optionChangeProp$$1$$]);
    null !== $invalidComponentTrackerObs$$ && (!$oldOptionChangeFunc$$ || $oldOptionChangeFunc$$ instanceof Function) && ($initProps$$2$$[$optionChangeProp$$1$$] = function $$initProps$$2$$$$optionChangeProp$$1$$$($event$$279$$, $data$$130$$) {
      $oldOptionChangeFunc$$ && $oldOptionChangeFunc$$.call(this, $event$$279$$, $data$$130$$);
      $data$$130$$.option === $oj$$24$$.$ValueBinding$.$_ATTRIBUTE_MESSAGES$ && $ko$$2$$.isWriteableObservable($invalidComponentTrackerObs$$) && ($items$$ = $ko$$2$$.utils.unwrapObservable($invalidComponentTrackerObs$$), $oj$$24$$.$Assert$.$assertArray$($items$$), $newMessages$$ = $data$$130$$.value, $$$$24$$.each($items$$, function($index$$147$$, $item$$11$$) {
        0 > $matched$$ && $item$$11$$.component === $component$$10$$ && ($matched$$ = $index$$147$$)
      }), $newMessages$$ && ($newData$$3$$.component = $component$$10$$, $component$$10$$.call($component$$10$$, "isValid") ? $newData$$3$$.valid = !0 : $newData$$3$$.valid = !1, 0 <= $matched$$ ? $invalidComponentTrackerObs$$.splice($matched$$, 1, $newData$$3$$) : $invalidComponentTrackerObs$$.push($newData$$3$$)))
    })
  };
  $oj$$24$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojValue", attributes:[$oj$$24$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$, $oj$$24$$.$ValueBinding$.$_ATTRIBUTE_OPTIONCHANGE$], init:$oj$$24$$.$ValueBinding$._init});
  $oj$$24$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputText", use:"ojValue"});
  $oj$$24$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputNumber", use:"ojValue"});
  $oj$$24$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojRadioCheckbox", use:"ojValue"});
  $oj$$24$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojRadioset", use:"ojValue"});
  $oj$$24$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojCheckboxset", use:"ojValue"});
  $oj$$24$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputDateTime", use:"ojValue"});
  $oj$$24$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputDate", use:"ojValue"});
  $oj$$24$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputTime", use:"ojValue"});
  $oj$$24$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputPassword", use:"ojValue"});
  $oj$$24$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojTextArea", use:"ojValue"});
  $oj$$24$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojCombobox", use:"ojValue"});
  $oj$$24$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojSelect", use:"ojValue"})
});
