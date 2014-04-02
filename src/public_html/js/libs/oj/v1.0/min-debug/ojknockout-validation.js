define(["ojs/ojcore", "jquery", "knockout", "jqueryui", "ojs/ojknockout"], function($oj$$14$$, $$$$14$$, $ko$$2$$) {
  $oj$$14$$.$ValueBinding$ = $JSCompiler_emptyFn$$();
  $goog$exportPath_$$("ValueBinding", $oj$$14$$.$ValueBinding$, $oj$$14$$);
  $oj$$14$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$ = "invalidComponentTracker";
  $goog$exportPath_$$("ValueBinding._ATTRIBUTE_INVALID_COMPONENT_TRACKER", $oj$$14$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$, $oj$$14$$);
  $oj$$14$$.$ValueBinding$.$_ATTRIBUTE_MESSAGES$ = "messages";
  $oj$$14$$.$ValueBinding$.$_ATTRIBUTE_OPTIONCHANGE$ = "optionChange";
  $oj$$14$$.$ValueBinding$._init = function $$oj$$14$$$$ValueBinding$$_init$($property$$23$$, $initProps$$1_value$$158$$, $element$$47_optionChangeFunc$$, $component$$8$$, $options$$261_valueAccessor$$9$$) {
    $initProps$$1_value$$158$$ = {};
    $options$$261_valueAccessor$$9$$ = $options$$261_valueAccessor$$9$$.call();
    $element$$47_optionChangeFunc$$ = $oj$$14$$.$ComponentBinding$.$_toJS$($options$$261_valueAccessor$$9$$[$oj$$14$$.$ValueBinding$.$_ATTRIBUTE_OPTIONCHANGE$]);
    $property$$23$$ === $oj$$14$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$ ? $element$$47_optionChangeFunc$$ || $oj$$14$$.$ValueBinding$.$_registerInvalidComponentTrackerWriteback$($options$$261_valueAccessor$$9$$, $initProps$$1_value$$158$$, $component$$8$$) : $property$$23$$ === $oj$$14$$.$ValueBinding$.$_ATTRIBUTE_OPTIONCHANGE$ && $oj$$14$$.$ValueBinding$.$_registerInvalidComponentTrackerWriteback$($options$$261_valueAccessor$$9$$, $initProps$$1_value$$158$$, $component$$8$$);
    return $initProps$$1_value$$158$$
  };
  $oj$$14$$.$ValueBinding$.$_registerInvalidComponentTrackerWriteback$ = function $$oj$$14$$$$ValueBinding$$$_registerInvalidComponentTrackerWriteback$$($options$$262$$, $initProps$$2$$, $component$$9$$) {
    var $optionChangeProp$$1$$ = $oj$$14$$.$ValueBinding$.$_ATTRIBUTE_OPTIONCHANGE$, $oldOptionChangeFunc$$, $newMessages$$, $invalidComponentTrackerObs$$ = $options$$262$$[$oj$$14$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$], $items$$, $matched$$ = -1, $newData$$3$$ = {};
    $oldOptionChangeFunc$$ = $oj$$14$$.$ComponentBinding$.$_toJS$($options$$262$$[$optionChangeProp$$1$$]);
    null !== $invalidComponentTrackerObs$$ && (!$oldOptionChangeFunc$$ || $oldOptionChangeFunc$$ instanceof Function) && ($initProps$$2$$[$optionChangeProp$$1$$] = function $$initProps$$2$$$$optionChangeProp$$1$$$($event$$134$$, $data$$83$$) {
      $oldOptionChangeFunc$$ && $oldOptionChangeFunc$$.call(this, $event$$134$$, $data$$83$$);
      $data$$83$$.option === $oj$$14$$.$ValueBinding$.$_ATTRIBUTE_MESSAGES$ && $ko$$2$$.isWriteableObservable($invalidComponentTrackerObs$$) && ($items$$ = $ko$$2$$.utils.unwrapObservable($invalidComponentTrackerObs$$), $oj$$14$$.$Assert$.$assertArray$($items$$), $newMessages$$ = $data$$83$$.value, $$$$14$$.each($items$$, function($index$$133$$, $item$$3$$) {
        0 > $matched$$ && $item$$3$$.component === $component$$9$$ && ($matched$$ = $index$$133$$)
      }), $newMessages$$ && ($newData$$3$$.component = $component$$9$$, $component$$9$$.call($component$$9$$, "isValid") ? $newData$$3$$.valid = !0 : $newData$$3$$.valid = !1, 0 <= $matched$$ ? $invalidComponentTrackerObs$$.splice($matched$$, 1, $newData$$3$$) : $invalidComponentTrackerObs$$.push($newData$$3$$)))
    })
  };
  $oj$$14$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojValue", attributes:[$oj$$14$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$, $oj$$14$$.$ValueBinding$.$_ATTRIBUTE_OPTIONCHANGE$], init:$oj$$14$$.$ValueBinding$._init});
  $oj$$14$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputText", use:"ojValue"});
  $oj$$14$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputNumber", use:"ojValue"});
  $oj$$14$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojRadioCheckbox", use:"ojValue"});
  $oj$$14$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojRadioset", use:"ojValue"});
  $oj$$14$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojCheckboxset", use:"ojValue"});
  $oj$$14$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputDateTime", use:"ojValue"});
  $oj$$14$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputDate", use:"ojValue"});
  $oj$$14$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputTime", use:"ojValue"});
  $oj$$14$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputPassword", use:"ojValue"});
  $oj$$14$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojTextArea", use:"ojValue"});
  $oj$$14$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojCombobox", use:"ojValue"});
  $oj$$14$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojSelect", use:"ojValue"})
});
