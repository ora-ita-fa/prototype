define(["ojs/ojcore", "jquery", "knockout", "jqueryui", "ojs/ojknockout"], function($oj$$13$$, $$$$13$$, $ko$$2$$) {
  $oj$$13$$.$ValueBinding$ = {};
  $goog$exportPath_$$("ValueBinding", $oj$$13$$.$ValueBinding$, $oj$$13$$);
  $oj$$13$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$ = "invalidComponentTracker";
  $goog$exportPath_$$("ValueBinding._ATTRIBUTE_INVALID_COMPONENT_TRACKER", $oj$$13$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$, $oj$$13$$);
  $oj$$13$$.$ValueBinding$.$_ATTRIBUTE_MESSAGES$ = "messages";
  $oj$$13$$.$ValueBinding$.$_ATTRIBUTE_OPTIONCHANGE$ = "optionChange";
  $oj$$13$$.$ValueBinding$._init = function $$oj$$13$$$$ValueBinding$$_init$($property$$19$$, $initProps$$1_value$$154$$, $element$$46_optionChangeFunc$$, $component$$8$$, $options$$234_valueAccessor$$9$$) {
    $initProps$$1_value$$154$$ = {};
    $options$$234_valueAccessor$$9$$ = $options$$234_valueAccessor$$9$$.call();
    $element$$46_optionChangeFunc$$ = $oj$$13$$.$ComponentBinding$.$_toJS$($options$$234_valueAccessor$$9$$[$oj$$13$$.$ValueBinding$.$_ATTRIBUTE_OPTIONCHANGE$]);
    $property$$19$$ === $oj$$13$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$ ? $element$$46_optionChangeFunc$$ || $oj$$13$$.$ValueBinding$.$_registerInvalidComponentTrackerWriteback$($options$$234_valueAccessor$$9$$, $initProps$$1_value$$154$$, $component$$8$$) : $property$$19$$ === $oj$$13$$.$ValueBinding$.$_ATTRIBUTE_OPTIONCHANGE$ && $oj$$13$$.$ValueBinding$.$_registerInvalidComponentTrackerWriteback$($options$$234_valueAccessor$$9$$, $initProps$$1_value$$154$$, $component$$8$$);
    return $initProps$$1_value$$154$$
  };
  $oj$$13$$.$ValueBinding$.$_registerInvalidComponentTrackerWriteback$ = function $$oj$$13$$$$ValueBinding$$$_registerInvalidComponentTrackerWriteback$$($options$$235$$, $initProps$$2$$, $component$$9$$) {
    var $optionChangeProp$$1$$ = $oj$$13$$.$ValueBinding$.$_ATTRIBUTE_OPTIONCHANGE$, $oldOptionChangeFunc$$, $newMessages$$, $invalidComponentTrackerObs$$ = $options$$235$$[$oj$$13$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$], $items$$, $matched$$ = -1, $newData$$3$$ = {};
    $oldOptionChangeFunc$$ = $oj$$13$$.$ComponentBinding$.$_toJS$($options$$235$$[$optionChangeProp$$1$$]);
    null !== $invalidComponentTrackerObs$$ && (!$oldOptionChangeFunc$$ || $oldOptionChangeFunc$$ instanceof Function) && ($initProps$$2$$[$optionChangeProp$$1$$] = function $$initProps$$2$$$$optionChangeProp$$1$$$($event$$121$$, $data$$79$$) {
      $oldOptionChangeFunc$$ && $oldOptionChangeFunc$$.call(this, $event$$121$$, $data$$79$$);
      $data$$79$$.option === $oj$$13$$.$ValueBinding$.$_ATTRIBUTE_MESSAGES$ && $ko$$2$$.isWriteableObservable($invalidComponentTrackerObs$$) && ($items$$ = $ko$$2$$.utils.unwrapObservable($invalidComponentTrackerObs$$), $oj$$13$$.$Assert$.$assertArray$($items$$), $newMessages$$ = $data$$79$$.value, $$$$13$$.each($items$$, function($index$$121$$, $item$$3$$) {
        0 > $matched$$ && $item$$3$$.component === $component$$9$$ && ($matched$$ = $index$$121$$)
      }), $newMessages$$ && ($newData$$3$$.component = $component$$9$$, $component$$9$$.call($component$$9$$, "isValid") ? $newData$$3$$.valid = !0 : $newData$$3$$.valid = !1, 0 <= $matched$$ ? $invalidComponentTrackerObs$$.splice($matched$$, 1, $newData$$3$$) : $invalidComponentTrackerObs$$.push($newData$$3$$)))
    })
  };
  $oj$$13$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojValue", attributes:[$oj$$13$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$, $oj$$13$$.$ValueBinding$.$_ATTRIBUTE_OPTIONCHANGE$], init:$oj$$13$$.$ValueBinding$._init});
  $oj$$13$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputText", use:"ojValue"});
  $oj$$13$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputNumber", use:"ojValue"});
  $oj$$13$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojRadioCheckbox", use:"ojValue"});
  $oj$$13$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojRadioset", use:"ojValue"});
  $oj$$13$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojCheckboxset", use:"ojValue"});
  $oj$$13$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputDateTime", use:"ojValue"});
  $oj$$13$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputDate", use:"ojValue"});
  $oj$$13$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputTime", use:"ojValue"});
  $oj$$13$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputPassword", use:"ojValue"});
  $oj$$13$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojTextArea", use:"ojValue"});
  $oj$$13$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojCombobox", use:"ojValue"})
});
