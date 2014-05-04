define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojvalidation", "ojs/ojpopup"], function($oj$$3$$, $$$$3$$) {
  $oj$$3$$.$PopupMessagingStrategy$ = function $$oj$$3$$$$PopupMessagingStrategy$$($displayOptions$$4$$) {
    this.Init($displayOptions$$4$$)
  };
  $oj$$3$$.$ComponentMessaging$.$registerMessagingStrategy$($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$NOTEWINDOW$, $oj$$3$$.$PopupMessagingStrategy$);
  $oj$$3$$.$Object$.$createSubclass$($oj$$3$$.$PopupMessagingStrategy$, $oj$$3$$.$MessagingStrategy$, "oj.PopupMessagingStrategy");
  $oj$$3$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$ = {ojRadioset:{position:"launcher", $events$:{open:"focusin mouseover", close:"mouseout"}}, ojCheckboxset:{position:"launcher", $events$:{open:"focusin mouseover", close:"mouseout"}}, "default":{$events$:{open:"focusin"}}};
  $oj$$3$$.$PopupMessagingStrategy$.prototype.Init = function $$oj$$3$$$$PopupMessagingStrategy$$$Init$($displayOptions$$5$$) {
    $oj$$3$$.$PopupMessagingStrategy$.$superclass$.Init.call(this, $displayOptions$$5$$)
  };
  $oj$$3$$.$PopupMessagingStrategy$.prototype.$activate$ = function $$oj$$3$$$$PopupMessagingStrategy$$$$activate$$($component$$4$$, $launcher$$6$$, $content$$18$$) {
    $oj$$3$$.$PopupMessagingStrategy$.$superclass$.$activate$.call(this, $component$$4$$, $launcher$$6$$, $content$$18$$);
    this.$_initMessagingPopup$();
    this.update($content$$18$$)
  };
  $oj$$3$$.$PopupMessagingStrategy$.prototype.update = function $$oj$$3$$$$PopupMessagingStrategy$$$update$($content$$19$$) {
    $oj$$3$$.$PopupMessagingStrategy$.$superclass$.update.call(this, $content$$19$$)
  };
  $oj$$3$$.$PopupMessagingStrategy$.prototype.$deactivate$ = function $$oj$$3$$$$PopupMessagingStrategy$$$$deactivate$$($content$$20$$) {
    var $compDefaults_events$$ = $oj$$3$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$[this.$_component$.widgetName], $compDefaults_events$$ = $compDefaults_events$$ ? $compDefaults_events$$.$events$ : $oj$$3$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$["default"].$events$;
    $compDefaults_events$$.open && this.$_launcher$.off($compDefaults_events$$.open, this.$_openPopup$);
    $compDefaults_events$$.close && this.$_launcher$.off($compDefaults_events$$.close, this.$_closePopup$);
    this.$_destroyTooltip$();
    $oj$$3$$.$PopupMessagingStrategy$.$superclass$.$deactivate$.call(this, $content$$20$$)
  };
  $oj$$3$$.$PopupMessagingStrategy$.prototype.$_openPopup$ = function $$oj$$3$$$$PopupMessagingStrategy$$$$_openPopup$$($event$$24_self$$30$$) {
    $event$$24_self$$30$$ = $event$$24_self$$30$$.data && $event$$24_self$$30$$.data.strategy;
    var $latestContent$$ = $event$$24_self$$30$$.$_buildPopupHtml$();
    $event$$24_self$$30$$.$_isPopupInitialized$() && $latestContent$$ && ($event$$24_self$$30$$.$$messagingContentRoot$.empty(), $event$$24_self$$30$$.$$messagingContentRoot$.append($latestContent$$), $event$$24_self$$30$$.$$messagingContentRoot$.ojPopup("open", $event$$24_self$$30$$.$_launcher$))
  };
  $oj$$3$$.$PopupMessagingStrategy$.prototype.$_closePopup$ = function $$oj$$3$$$$PopupMessagingStrategy$$$$_closePopup$$($event$$25_self$$31$$) {
    $event$$25_self$$31$$ = $event$$25_self$$31$$.data && $event$$25_self$$31$$.data.strategy;
    $event$$25_self$$31$$.$$messagingContentRoot$.ojPopup("close", $event$$25_self$$31$$.$_launcher$)
  };
  $oj$$3$$.$PopupMessagingStrategy$.prototype.$_initMessagingPopup$ = function $$oj$$3$$$$PopupMessagingStrategy$$$$_initMessagingPopup$$() {
    if(!this.$_isPopupInitialized$()) {
      var $jqLauncher$$ = this.$_launcher$, $jPositionOf$$ = this.$_getPopupPosition$(), $compDefaults$$1_events$$1$$ = $oj$$3$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$[this.$_component$.widgetName], $compDefaults$$1_events$$1$$ = $compDefaults$$1_events$$1$$ ? $compDefaults$$1_events$$1$$.$events$ : $oj$$3$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$["default"].$events$;
      this.$$messagingContentRoot$ = $$$$3$$("\x3cdiv class\x3d'oj-messaging-popup-container'\x3e\x3c/div\x3e");
      $$$$3$$("body").append(this.$$messagingContentRoot$);
      this.$$messagingContentRoot$.ojPopup({initialFocus:"none", tail:"simple", autoDismiss:"focusLoss", position:{my:"start bottom", at:"end top", collision:"flipfit", of:$jPositionOf$$}});
      if($compDefaults$$1_events$$1$$.open) {
        $jqLauncher$$.on($compDefaults$$1_events$$1$$.open, {strategy:this}, this.$_openPopup$)
      }
      if($compDefaults$$1_events$$1$$.close) {
        $jqLauncher$$.on($compDefaults$$1_events$$1$$.close, {strategy:this}, this.$_closePopup$)
      }
    }
  };
  $oj$$3$$.$PopupMessagingStrategy$.prototype.$_getPopupPosition$ = function $$oj$$3$$$$PopupMessagingStrategy$$$$_getPopupPosition$$() {
    var $compDefaults$$2$$ = $oj$$3$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$[this.$_component$.widgetName];
    return $compDefaults$$2$$ && $compDefaults$$2$$.position && "launcher" === $compDefaults$$2$$.position ? this.$_launcher$ : this.$_component$.widget()
  };
  $oj$$3$$.$PopupMessagingStrategy$.prototype.$_destroyTooltip$ = function $$oj$$3$$$$PopupMessagingStrategy$$$$_destroyTooltip$$() {
    this.$_isPopupInitialized$() && this.$$messagingContentRoot$ && (this.$$messagingContentRoot$.ojPopup("destroy"), this.$$messagingContentRoot$.remove())
  };
  $oj$$3$$.$PopupMessagingStrategy$.prototype.$_buildPopupHtml$ = function $$oj$$3$$$$PopupMessagingStrategy$$$$_buildPopupHtml$$() {
    var $nwHtml$$ = "", $document$$1$$ = this.$_component$.document[0], $nwContent$$ = [], $addSeparator$$ = !1, $that$$1$$ = this;
    this.$ShowMessages$() && $nwContent$$.push(this.$_buildMessagesHtml$());
    (this.$ShowConverterHint$() || this.$ShowValidatorHint$()) && $nwContent$$.push(this.$_buildHintsHtml$($document$$1$$));
    this.$ShowTitle$() && $nwContent$$.push(this.$_buildTitleHtml$($document$$1$$));
    $$$$3$$.each($nwContent$$, function($i$$75$$, $content$$21$$) {
      $content$$21$$ && ($addSeparator$$ ? $nwHtml$$ = $nwHtml$$.concat($that$$1$$.$_getSeparatorHtml$($document$$1$$)) : $addSeparator$$ = !0, $nwHtml$$ = $nwHtml$$.concat($content$$21$$))
    });
    return $nwHtml$$
  };
  $oj$$3$$.$PopupMessagingStrategy$.prototype.$_buildMessagesHtml$ = function $$oj$$3$$$$PopupMessagingStrategy$$$$_buildMessagesHtml$$() {
    var $messages$$4_messagesByType$$, $content$$22$$ = "", $i$$76$$, $j$$9_maxSeverity$$4$$, $severityStr$$, $severityLevel$$, $detail$$3_message$$27_messageObj$$;
    $j$$9_maxSeverity$$4$$ = this.$GetMaxSeverity$();
    var $summary$$, $messagesByTypes$$ = {};
    $messages$$4_messagesByType$$ = [];
    if(this.$HasMessages$()) {
      $messages$$4_messagesByType$$ = this.$GetMessages$();
      for($i$$76$$ = 0;$i$$76$$ < $messages$$4_messagesByType$$.length;$i$$76$$++) {
        $detail$$3_message$$27_messageObj$$ = $messages$$4_messagesByType$$[$i$$76$$], $detail$$3_message$$27_messageObj$$ = $detail$$3_message$$27_messageObj$$ instanceof $oj$$3$$.$Message$ ? $detail$$3_message$$27_messageObj$$ : new $oj$$3$$.$Message$($detail$$3_message$$27_messageObj$$.summary, $detail$$3_message$$27_messageObj$$.detail, $detail$$3_message$$27_messageObj$$.severity), $severityLevel$$ = $oj$$3$$.$Message$.$getSeverityLevel$($detail$$3_message$$27_messageObj$$.severity), $messagesByTypes$$[$severityLevel$$] || 
        ($messagesByTypes$$[$severityLevel$$] = []), $messagesByTypes$$[$severityLevel$$].push($detail$$3_message$$27_messageObj$$)
      }
      for($i$$76$$ = $j$$9_maxSeverity$$4$$;$i$$76$$ >= $oj$$3$$.$Message$.$SEVERITY_LEVEL$.CONFIRMATION;$i$$76$$--) {
        for($messages$$4_messagesByType$$ = $messagesByTypes$$[$i$$76$$] || [], $j$$9_maxSeverity$$4$$ = 0;$j$$9_maxSeverity$$4$$ < $messages$$4_messagesByType$$.length;$j$$9_maxSeverity$$4$$++) {
          $detail$$3_message$$27_messageObj$$ = $messages$$4_messagesByType$$[$j$$9_maxSeverity$$4$$], $oj$$3$$.$Assert$.$assertPrototype$($detail$$3_message$$27_messageObj$$, $oj$$3$$.$Message$), $severityLevel$$ = $oj$$3$$.$Message$.$getSeverityLevel$($detail$$3_message$$27_messageObj$$.severity), $severityStr$$ = this.$_getSeverityTranslatedString$($severityLevel$$), $summary$$ = $detail$$3_message$$27_messageObj$$.summary || $severityStr$$, $detail$$3_message$$27_messageObj$$ = $detail$$3_message$$27_messageObj$$.detail || 
          "", $content$$22$$ = $content$$22$$.concat("\x3cdiv class\x3d'oj-message'\x3e").concat("\x3cspan class\x3d'" + this.$_getSeverityIconSelector$($severityLevel$$) + "' title\x3d'" + $severityStr$$ + "' role\x3d'img'\x3e\x3c/span\x3e").concat("\x3cspan class\x3d'oj-message-content'\x3e").concat("\x3cdiv class\x3d'oj-message-summary'\x3e" + $summary$$ + "\x3c/div\x3e"), $detail$$3_message$$27_messageObj$$ && ($content$$22$$ = $content$$22$$.concat("\x3cdiv class\x3d'oj-message-detail'\x3e" + 
          $detail$$3_message$$27_messageObj$$ + "\x3c/div\x3e")), $content$$22$$ = $content$$22$$.concat("\x3c/div\x3e")
        }
      }
    }
    return $content$$22$$
  };
  $oj$$3$$.$PopupMessagingStrategy$.prototype.$_buildHintsHtml$ = function $$oj$$3$$$$PopupMessagingStrategy$$$$_buildHintsHtml$$($document$$2$$) {
    var $hints$$3$$ = [], $jHintsDom$$, $i$$77$$;
    this.$ShowConverterHint$() && ($hints$$3$$ = $hints$$3$$.concat(this.$GetConverterHint$()));
    this.$ShowValidatorHint$() && ($hints$$3$$ = $hints$$3$$.concat(this.$GetValidatorHints$()));
    if($hints$$3$$ && 0 < $hints$$3$$.length) {
      for($jHintsDom$$ = $$$$3$$($document$$2$$.createElement("div")), $jHintsDom$$.addClass("oj-form-control-hint"), $i$$77$$ = 0;$i$$77$$ < $hints$$3$$.length;$i$$77$$++) {
        $jHintsDom$$.append(this.$_getHintDom$($document$$2$$, $hints$$3$$[$i$$77$$]))
      }
    }
    return $jHintsDom$$ ? $jHintsDom$$.get(0).outerHTML : ""
  };
  $oj$$3$$.$PopupMessagingStrategy$.prototype.$_buildTitleHtml$ = function $$oj$$3$$$$PopupMessagingStrategy$$$$_buildTitleHtml$$($document$$3$$) {
    var $title$$7$$ = this.$GetTitle$(), $jTitleDom$$;
    $title$$7$$ && ($jTitleDom$$ = $$$$3$$($document$$3$$.createElement("div")), $jTitleDom$$.addClass("oj-form-control-title"), $jTitleDom$$.append(this.$_getHintDom$($document$$3$$, $title$$7$$)));
    return $jTitleDom$$ ? $jTitleDom$$.get(0).outerHTML : ""
  };
  $oj$$3$$.$PopupMessagingStrategy$.prototype.$_getHintDom$ = function $$oj$$3$$$$PopupMessagingStrategy$$$$_getHintDom$$($document$$4$$, $hintText$$) {
    var $jHintDom$$ = null;
    $oj$$3$$.$DomUtils$.$isHTMLContent$($hintText$$) ? $jHintDom$$ = $oj$$3$$.$DomUtils$.$cleanHtml$($hintText$$.substring(6, $hintText$$.length - 7)) : ($jHintDom$$ = $$$$3$$($document$$4$$.createElement("div")), $jHintDom$$.text($hintText$$), $jHintDom$$ = $jHintDom$$.get(0));
    return $jHintDom$$
  };
  $oj$$3$$.$PopupMessagingStrategy$.prototype.$_getSeparatorHtml$ = function $$oj$$3$$$$PopupMessagingStrategy$$$$_getSeparatorHtml$$($document$$5_jSeparatorDom$$) {
    return($document$$5_jSeparatorDom$$ = $$$$3$$($document$$5_jSeparatorDom$$.createElement("hr"))) ? $document$$5_jSeparatorDom$$.get(0).outerHTML : ""
  };
  $oj$$3$$.$PopupMessagingStrategy$.prototype.$_getSeverityTranslatedString$ = function $$oj$$3$$$$PopupMessagingStrategy$$$$_getSeverityTranslatedString$$($severity$$1$$) {
    var $sevTypeStr$$;
    switch($severity$$1$$) {
      case $oj$$3$$.$Message$.$SEVERITY_LEVEL$.FATAL:
        $sevTypeStr$$ = $oj$$3$$.$Translations$.$getTranslatedString$("oj-message.fatal");
        break;
      case $oj$$3$$.$Message$.$SEVERITY_LEVEL$.ERROR:
        $sevTypeStr$$ = $oj$$3$$.$Translations$.$getTranslatedString$("oj-message.error");
        break;
      case $oj$$3$$.$Message$.$SEVERITY_LEVEL$.WARNING:
        $sevTypeStr$$ = $oj$$3$$.$Translations$.$getTranslatedString$("oj-message.warning");
        break;
      case $oj$$3$$.$Message$.$SEVERITY_LEVEL$.INFO:
        $sevTypeStr$$ = $oj$$3$$.$Translations$.$getTranslatedString$("oj-message.info");
        break;
      case $oj$$3$$.$Message$.$SEVERITY_LEVEL$.CONFIRMATION:
        $sevTypeStr$$ = $oj$$3$$.$Translations$.$getTranslatedString$("oj-message.confirmation")
    }
    return $sevTypeStr$$
  };
  $oj$$3$$.$PopupMessagingStrategy$.prototype.$_getSeverityIconSelector$ = function $$oj$$3$$$$PopupMessagingStrategy$$$$_getSeverityIconSelector$$($severity$$2$$) {
    var $sevIconStr$$;
    switch($severity$$2$$) {
      case $oj$$3$$.$Message$.$SEVERITY_LEVEL$.FATAL:
        $sevIconStr$$ = "oj-message-error-icon";
        break;
      case $oj$$3$$.$Message$.$SEVERITY_LEVEL$.ERROR:
        $sevIconStr$$ = "oj-message-error-icon";
        break;
      case $oj$$3$$.$Message$.$SEVERITY_LEVEL$.WARNING:
        $sevIconStr$$ = "oj-message-warning-icon";
        break;
      case $oj$$3$$.$Message$.$SEVERITY_LEVEL$.INFO:
        $sevIconStr$$ = "oj-message-info-icon";
        break;
      case $oj$$3$$.$Message$.$SEVERITY_LEVEL$.CONFIRMATION:
        $sevIconStr$$ = "oj-message-confirmation-icon"
    }
    return"oj-widget-icon " + $sevIconStr$$
  };
  $oj$$3$$.$PopupMessagingStrategy$.prototype.$_isPopupInitialized$ = function $$oj$$3$$$$PopupMessagingStrategy$$$$_isPopupInitialized$$() {
    return this.$$messagingContentRoot$ ? this.$$messagingContentRoot$.is(":oj-popup") : !1
  };
  $oj$$3$$.$editableValue$ = $$$$3$$.widget("oj.editableValue", $$$$3$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{converter:void 0, disabled:void 0, help:{definition:null, source:null}, messages:void 0, messagingDisplayOptions:void 0, required:void 0, title:void 0, placeholder:void 0, validators:void 0, value:void 0, optionChange:void 0}, option:function($key$$32$$, $value$$69$$) {
    var $deleteSpecialEventKey_retVal$$4$$, $previousValue$$, $previousMsgs$$, $newValue_valueOptionSet$$ = !1, $originalEvent$$, $messagesOptionSet$$ = !1;
    $deleteSpecialEventKey_retVal$$4$$ = !1;
    var $refreshMessagingOptions$$ = !0, $placeholderOptionSet$$ = !1;
    if("string" === typeof $key$$32$$ && void 0 !== $value$$69$$) {
      switch($key$$32$$) {
        case "value":
          $newValue_valueOptionSet$$ = !0;
          $previousValue$$ = this.options.value;
          break;
        case "messages":
          $messagesOptionSet$$ = !0;
          $previousMsgs$$ = this.options.messages || [];
          break;
        case "messagingDisplayOptions":
          $$$$3$$.extend({}, this.options.messagingDisplayOptions);
          break;
        case "placeholder":
          $placeholderOptionSet$$ = !0
      }
    }else {
      "object" === typeof $key$$32$$ && $key$$32$$ && (void 0 !== $key$$32$$.value && ($newValue_valueOptionSet$$ = !0, $previousValue$$ = this.options.value, $deleteSpecialEventKey_retVal$$4$$ = !0), void 0 !== $key$$32$$.messages && ($messagesOptionSet$$ = !0, $previousMsgs$$ = this.options.messages, $deleteSpecialEventKey_retVal$$4$$ = !0), $key$$32$$.messagingDisplayOptions && $$$$3$$.extend({}, this.options.messagingDisplayOptions), $key$$32$$.placeholder && ($placeholderOptionSet$$ = !0, $refreshMessagingOptions$$ = 
      $key$$32$$._oj_messaging_update ? !1 : !0, delete $key$$32$$._oj_messaging_update), $deleteSpecialEventKey_retVal$$4$$ && ($originalEvent$$ = $key$$32$$._oj_originalEvent, delete $key$$32$$._oj_originalEvent))
    }
    $deleteSpecialEventKey_retVal$$4$$ = this._superApply(arguments);
    $newValue_valueOptionSet$$ && ($newValue_valueOptionSet$$ = this.options.value, this.$_ValueEquals$($previousValue$$, $newValue_valueOptionSet$$) || this.$_TriggerOptionChange$("value", $previousValue$$, $originalEvent$$ || null));
    $messagesOptionSet$$ && (this.$_messagesEquals$($previousMsgs$$, this.options.messages) || this.$_TriggerOptionChange$("messages", $previousMsgs$$, $originalEvent$$ || null));
    $placeholderOptionSet$$ && ($refreshMessagingOptions$$ ? (this.$__customPlaceholderSet$ = !0, this.$_initComponentMessaging$()) : this.$__customPlaceholderSet$ = !1);
    return $deleteSpecialEventKey_retVal$$4$$
  }, isValid:$JSCompiler_get$$("$__valid$"), refresh:function() {
    this._super();
    this.$_doRefresh$(!0)
  }, validate:function($requiredOnly$$) {
    this.$_doRunValidation$(this.options.value, void 0, $requiredOnly$$ ? this.$_VALIDATION_MODE$.$REQUIRED_VALIDATOR_ONLY$ : this.$_VALIDATION_MODE$.$VALIDATORS_ONLY$);
    return this.isValid() ? !0 : !1
  }, $_VALIDATION_MODE$:{$FULL$:1, $VALIDATORS_ONLY$:2, $REQUIRED_VALIDATOR_ONLY$:3, NONE:4}, $_ComponentCreate$:function() {
    var $node$$9$$ = this.element, $savedAttributes$$1$$ = this.$_GetSavedAttributes$($node$$9$$);
    this._super();
    "boolean" === typeof this.options.disabled && $node$$9$$.prop("disabled", this.options.disabled);
    this.options.placeholder && (this.$__customPlaceholderSet$ = !0);
    $$$$3$$.each(["required", "title"], function($index$$72$$, $value$$70$$) {
      $value$$70$$ in $savedAttributes$$1$$ && $node$$9$$.removeAttr($value$$70$$)
    })
  }, $_AfterCreate$:function() {
    this._super();
    this.$_createOjLabel$();
    this.$_doRefresh$(!1);
    this.$_initComponentMessaging$();
    this.$_TriggerOptionChange$("messages", this.options.messages, null);
    this.widget().addClass("oj-form-control")
  }, _destroy:function() {
    var $widget$$2$$ = this.widget();
    this.$_clearMessages$(void 0, !0);
    this.$_getComponentMessaging$().$deactivate$(this.$_getMessagingContent$());
    $$$$3$$.each(this.$_OPTION_TO_CSS_MAPPING$, function() {
      $widget$$2$$.removeClass(this.toString())
    });
    $widget$$2$$.removeClass("oj-form-control");
    this.element.removeAttr("aria-required");
    this.$$label$ && this.$$label$._ojLabel("destroy");
    return this._super()
  }, _setOption:function($name$$75$$, $value$$71$$) {
    var $retVal$$5$$ = this._superApply(arguments), $shouldRefresh$$ = !0, $hasMessages_maxLevel$$;
    $hasMessages_maxLevel$$ = 0;
    switch($name$$75$$) {
      case "converter":
        this.$__converter$ = null;
        this.$_getComponentMessaging$().update(this.$_getMessagingContent$(this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$CONVERTER_HINT$));
        break;
      case "validators":
        this.$_ResetAllValidators$();
        $shouldRefresh$$ = !1;
        break;
      case "messages":
        ($hasMessages_maxLevel$$ = $value$$71$$ && 0 !== $value$$71$$.length) ? (this.$__maxSeverityLevel$ = 0, $hasMessages_maxLevel$$ = this.$_getMaxSeverity$(), this.$__valid$ = $hasMessages_maxLevel$$ >= $oj$$3$$.$Message$.$SEVERITY_LEVEL$.ERROR ? !1 : !0) : (this.$__maxSeverityLevel$ = 0, this.$__valid$ = !0);
        this.$_getComponentMessaging$().update(this.$_getMessagingContent$());
        break;
      case "messagingDisplayOptions":
        this.$__messagingDisplayOptions$ = null;
        this.$_initComponentMessaging$();
        break;
      case "placeholder":
        this._SetPlaceholder($value$$71$$);
        $shouldRefresh$$ = !1;
        break;
      case "title":
        this.$_getComponentMessaging$().update(this.$_getMessagingContent$(this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$TITLE$))
    }
    $shouldRefresh$$ && (this.$_Refresh$($name$$75$$, $value$$71$$), this.$_refreshAria$($name$$75$$, $value$$71$$), this.$_refreshTheming$($name$$75$$, $value$$71$$));
    return $retVal$$5$$
  }, $_GetContentElement$:$JSCompiler_get$$("element"), $_GetLabelElement$:function() {
    var $ariaElement_id$$9_queryResult$$ = this.$_getAriaLabelledByElement$(this.element);
    if(null !== $ariaElement_id$$9_queryResult$$ && 0 !== $ariaElement_id$$9_queryResult$$.length) {
      return $ariaElement_id$$9_queryResult$$
    }
    $ariaElement_id$$9_queryResult$$ = this.element.prop("id");
    if(void 0 !== $ariaElement_id$$9_queryResult$$ && ($ariaElement_id$$9_queryResult$$ = $$$$3$$("label[for\x3d'" + $ariaElement_id$$9_queryResult$$ + "']"), 0 !== $ariaElement_id$$9_queryResult$$.length)) {
      return $ariaElement_id$$9_queryResult$$
    }
    $ariaElement_id$$9_queryResult$$ = this.element.closest("[aria-labelledby]");
    return 0 !== $ariaElement_id$$9_queryResult$$.length && ($ariaElement_id$$9_queryResult$$ = this.$_getAriaLabelledByElement$($ariaElement_id$$9_queryResult$$), null !== $ariaElement_id$$9_queryResult$$ && 0 !== $ariaElement_id$$9_queryResult$$.length) ? $ariaElement_id$$9_queryResult$$ : null
  }, $_GetElementValue$:function() {
    return this.element.val()
  }, _GetMessagingLauncherElement:function() {
    return this.$_GetContentElement$()
  }, $_GetConverter$:function() {
    this.$__converter$ || (this.$__converter$ = $oj$$3$$.$IntlConverterUtils$.getConverterInstance(this.options.converter));
    return this.$__converter$ || null
  }, $_GetDefaultValidators$:function() {
    this.$__defaultValidators$ || (this.$__defaultValidators$ = {});
    return this.$__defaultValidators$
  }, $_GetDisplayValue$:function() {
    return this.$_GetContentElement$().val()
  }, $_GetAllValidators$:function() {
    if(!this.$__allValidators$) {
      var $allValidators$$ = [], $validatorsOption$$ = this.options.validators, $vOptions_validator$$, $isValidatorInstance$$ = !0, $defaultValidatorMap_vType$$ = this.$_GetDefaultValidators$(), $defaultValidators_normalizedValidators$$ = [], $vTypeStr$$, $i$$78_val$$20$$;
      for($i$$78_val$$20$$ in $defaultValidatorMap_vType$$) {
        $defaultValidatorMap_vType$$.hasOwnProperty($i$$78_val$$20$$) && $defaultValidators_normalizedValidators$$.push($defaultValidatorMap_vType$$[$i$$78_val$$20$$])
      }
      $allValidators$$ = $allValidators$$.concat($defaultValidators_normalizedValidators$$);
      if($validatorsOption$$) {
        $defaultValidators_normalizedValidators$$ = [];
        for($i$$78_val$$20$$ = 0;$i$$78_val$$20$$ < $validatorsOption$$.length;$i$$78_val$$20$$++) {
          $vOptions_validator$$ = $validatorsOption$$[$i$$78_val$$20$$], "object" === typeof $vOptions_validator$$ ? ($vOptions_validator$$.validate && "function" === typeof $vOptions_validator$$.validate || ($isValidatorInstance$$ = !1), $isValidatorInstance$$ || ($vTypeStr$$ = $vOptions_validator$$.type) && "string" === typeof $vTypeStr$$ && (($defaultValidatorMap_vType$$ = $oj$$3$$.$Validation$.$validatorFactory$($vTypeStr$$)) ? ($vOptions_validator$$ = $$$$3$$.extend({}, $vOptions_validator$$.options) || 
          {}, $vOptions_validator$$.converter = $vOptions_validator$$.converter || this.$_GetConverter$(), $vOptions_validator$$.label = $vOptions_validator$$.label || this.$_getLabelText$(), $vOptions_validator$$ = $defaultValidatorMap_vType$$.createValidator($vOptions_validator$$)) : $oj$$3$$.$Logger$.error("Unable to locate a validatorFactory for the requested type: " + $vTypeStr$$)), $defaultValidators_normalizedValidators$$.push($vOptions_validator$$)) : $oj$$3$$.$Logger$.error("Unable to parse the validator provided:" + 
          $vOptions_validator$$)
        }
        $allValidators$$ = $allValidators$$.concat($defaultValidators_normalizedValidators$$)
      }
      this.$__allValidators$ = $allValidators$$
    }
    return this.$__allValidators$ || []
  }, $_ResetAllValidators$:function() {
    this.$__allValidators$ && (this.$__allValidators$.length = 0);
    this.$__allValidators$ = null;
    this.$_getComponentMessaging$().update(this.$_getMessagingContent$(this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$VALIDATOR_HINTS$))
  }, $_IsRequired$:function() {
    return"required" === this.options.required
  }, $_HandleChangeEvent$:function($event$$26$$) {
    var $submittedValue$$ = this.$_GetDisplayValue$();
    this.$_SetValue$($submittedValue$$, $event$$26$$)
  }, $_Refresh$:function($helpDef_name$$76$$, $helpSource_value$$73$$, $fullRefresh_labelHelpIconWrapper$$) {
    switch($helpDef_name$$76$$) {
      case "converter":
        $helpSource_value$$73$$ = this.options.value;
        this.$_refreshComponentDisplayValue$($helpSource_value$$73$$, !0);
        break;
      case "value":
        this.$_refreshComponentDisplayValue$($helpSource_value$$73$$, $fullRefresh_labelHelpIconWrapper$$);
        break;
      case "required":
        this.$$label$ && this.$$label$._ojLabel("option", "required", $helpSource_value$$73$$);
        break;
      case "help":
        $helpDef_name$$76$$ = this.options.help.definition, $helpSource_value$$73$$ = this.options.help.source, $fullRefresh_labelHelpIconWrapper$$ = this.$_ariaDescribedByHelpIconWrapper$($helpSource_value$$73$$), this.$$label$ && (this.$$label$._ojLabel("option", "describedById", $fullRefresh_labelHelpIconWrapper$$), this.$$label$._ojLabel("option", "help", {definition:$helpDef_name$$76$$, source:$helpSource_value$$73$$}))
    }
  }, $_RefreshAriaRequired$:function($ariaValue_value$$74$$) {
    var $contentNode$$ = this.$_GetContentElement$();
    ($ariaValue_value$$74$$ = "required" == $ariaValue_value$$74$$ ? !0 : !1) && $contentNode$$ ? $contentNode$$.attr("aria-required", $ariaValue_value$$74$$) : $contentNode$$.removeAttr("aria-required")
  }, $_SetDisplayValue$:function($displayValue$$) {
    this.$_GetContentElement$().val($displayValue$$)
  }, $_SetValue$:function($newValue$$2$$, $event$$27$$, $mode$$9_options$$99$$) {
    var $previousValue$$1$$ = this.options.value, $runningValidations$$ = !0;
    if(void 0 === $newValue$$2$$) {
      return $oj$$3$$.$Logger$.warn("Attempt to set a value of undefined"), !1
    }
    if(this.$_CanSetValue$()) {
      $mode$$9_options$$99$$ = $mode$$9_options$$99$$ && $mode$$9_options$$99$$.$validationMode$ ? $mode$$9_options$$99$$.$validationMode$ : this.$_VALIDATION_MODE$.$FULL$;
      if($runningValidations$$ = $mode$$9_options$$99$$ !== this.$_VALIDATION_MODE$.NONE) {
        if($newValue$$2$$ !== this.$__oj_lastElementValue$) {
          if(this.$_setLastElementValue$($newValue$$2$$), this.$_clearMessages$($event$$27$$), $newValue$$2$$ = this.$_doRunValidation$($newValue$$2$$, $event$$27$$, $mode$$9_options$$99$$), !this.isValid()) {
            return!1
          }
        }else {
          return $oj$$3$$.$Logger$.$level$ > $oj$$3$$.$Logger$.$LEVEL_WARN$ && $oj$$3$$.$Logger$.info("Validation was skipped because the display value " + $newValue$$2$$.toString ? $newValue$$2$$.toString() : $newValue$$2$$ + " as the previous."), !1
        }
      }
      this.$_ValueEquals$($previousValue$$1$$, $newValue$$2$$) ? (this.$_updateElementDisplayValue$($newValue$$2$$, $event$$27$$), $oj$$3$$.$Logger$.$level$ > $oj$$3$$.$Logger$.$LEVEL_WARN$ && $oj$$3$$.$Logger$.info("The value was not set on the component as it's the same as the current value - " + $newValue$$2$$.toString ? $newValue$$2$$.toString() : $newValue$$2$$)) : this.$_updateValueOption$($newValue$$2$$, $event$$27$$)
    }
    return!0
  }, $_CanSetValue$:function() {
    return this.options.disabled ? !1 : !0
  }, _SetPlaceholder:function($value$$75$$) {
    this.$_GetContentElement$().attr("placeholder", $value$$75$$)
  }, $_TriggerOptionChange$:function($option$$, $dataHash_previousValue$$2$$, $originalEvent$$1$$) {
    $oj$$3$$.$Assert$.$assertNonEmptyString$($option$$, "");
    $dataHash_previousValue$$2$$ = {option:$option$$, previousValue:$dataHash_previousValue$$2$$, value:this.options[$option$$], optionMetadata:{writeback:"shouldWrite"}};
    switch($option$$) {
      case "messages":
        this._trigger("optionChange", $originalEvent$$1$$ || null, $dataHash_previousValue$$2$$);
        this.$_getComponentMessaging$().update(this.$_getMessagingContent$());
        break;
      case "value":
        this._trigger("optionChange", $originalEvent$$1$$ || null, $dataHash_previousValue$$2$$)
    }
  }, $_ValueEquals$:function($value1$$6$$, $value2$$6$$) {
    return $oj$$3$$.$Object$.compareValues($value1$$6$$, $value2$$6$$)
  }, _GetDefaultStyleClass:$JSCompiler_returnArg$$("oj-editablevalue"), $_OPTION_TO_CSS_MAPPING$:{disabled:"oj-disabled", required:"oj-required"}, $__MESSAGING_CONTENT_UPDATE_TYPE$:{$ALL$:1, $VALIDITY_STATE$:2, $CONVERTER_HINT$:3, $VALIDATOR_HINTS$:4, $TITLE$:5}, $_clearMessages$:function($event$$28$$, $silentUpdate$$) {
    if($silentUpdate$$) {
      this.options.messages = []
    }else {
      var $msgsHash$$ = {messages:[]};
      $event$$28$$ && ($msgsHash$$._oj_originalEvent = $event$$28$$);
      this.option($msgsHash$$)
    }
  }, $_InitOptions$:function() {
    var $node$$10$$ = this.element, $savedAttributes$$2$$ = this.$_GetSavedAttributes$($node$$10$$), $attrVal$$, $propVal$$;
    this._super();
    void 0 === this.options.disabled && (this.options.disabled = void 0 !== this.element.attr("disabled") ? !!this.element.prop("disabled") : null);
    this.$_validateOption$("disabled");
    void 0 === this.options.placeholder && (this.options.placeholder = this.element.prop("placeholder"));
    this.options.placeholder && (this.$__customPlaceholderSet$ = !0);
    void 0 === this.options.required && ($attrVal$$ = this.element.attr("required"), $propVal$$ = this.element.prop("required"), this.options.required = void 0 !== $attrVal$$ && (void 0 !== $propVal$$ ? $propVal$$ : $attrVal$$) ? "required" : "optional");
    this.$_validateOption$("required");
    void 0 === this.options.title && (this.options.title = this.element.prop("title"));
    void 0 === this.options.value && (this.options.value = void 0 !== this.element.attr("value") ? this.element.val() : null);
    this.options.messages || (this.options.messages = []);
    $$$$3$$.each(["required", "title"], function($index$$73$$, $value$$76$$) {
      $value$$76$$ in $savedAttributes$$2$$ && $node$$10$$.removeAttr($value$$76$$)
    })
  }, $_doRefresh$:function($fullRefresh$$1$$) {
    if($fullRefresh$$1$$ = $fullRefresh$$1$$ || !1) {
      this.$$label$ && this.$$label$._ojLabel("refresh"), this.$_RefreshLabelDependents$(), this.$_initComponentMessaging$()
    }
    this.$_Refresh$("value", this.options.value, $fullRefresh$$1$$);
    this.$_refreshAria$("required", this.options.required);
    this.$_refreshTheming$("required", this.options.required);
    this.$_refreshTheming$("disabled", this.options.disabled)
  }, $_getLastModelValue$:$JSCompiler_get$$("$__oj_lastModelValue$"), $_getLastElementValue$:$JSCompiler_get$$("$__oj_lastElementValue$"), $_getAriaLabelledByElement$:function($ariaId_elem$$16$$) {
    $ariaId_elem$$16$$ = $ariaId_elem$$16$$.attr("aria-labelledby");
    return void 0 !== $ariaId_elem$$16$$ ? $$$$3$$("label[id\x3d'" + $ariaId_elem$$16$$ + "']") : null
  }, $_createOjLabel$:function() {
    if(this.$$label$ = this.$_GetLabelElement$()) {
      var $helpDef$$1$$ = this.options.help.definition, $helpSource$$1$$ = this.options.help.source, $labelHelpIconWrapper$$1$$ = this.$_ariaDescribedByHelpIconWrapper$($helpSource$$1$$);
      this.$$label$._ojLabel({rootAttributes:{"class":this._GetDefaultStyleClass() + "-label"}, describedById:$labelHelpIconWrapper$$1$$, required:this.options.required, help:{definition:$helpDef$$1$$, source:$helpSource$$1$$}})
    }
  }, $_ariaDescribedByHelpIconWrapper$:function($helpSource$$2$$) {
    var $labelHelpIconWrapperId$$ = this.element.prop("id") + "Icons";
    $helpSource$$2$$ && this.$_GetContentElement$().each(function() {
      var $ariaDescBy$$ = $$$$3$$(this).attr("aria-describedby");
      $ariaDescBy$$ ? $$$$3$$(this).attr("aria-describedby", $ariaDescBy$$ + " " + $labelHelpIconWrapperId$$) : $$$$3$$(this).attr("aria-describedby", $labelHelpIconWrapperId$$)
    });
    return $labelHelpIconWrapperId$$
  }, $_getLabelText$:function() {
    if(this.$$label$) {
      return this.$$label$.text()
    }
  }, $_getMaxSeverity$:function() {
    this.$__maxSeverityLevel$ || (this.$__maxSeverityLevel$ = $oj$$3$$.$Message$.$getMaxSeverity$(this.options.messages));
    return this.$__maxSeverityLevel$
  }, $_getValidityState$:function() {
    if(this.$__validityState$) {
      var $messages$$5$$ = $$$$3$$.extend([], this.options.messages);
      this.$__validityState$.update(this.$__valid$, $messages$$5$$, this.$__maxSeverityLevel$)
    }else {
      "undefined" === typeof this.$__valid$ && (this.$__valid$ = !0), this.$__validityState$ = new $oj$$3$$.$ComponentValidity$(this.$__valid$, this.options.messages, this.$__maxSeverityLevel$)
    }
    return this.$__validityState$
  }, $_initComponentMessaging$:function() {
    var $compMessaging$$ = this.$_getComponentMessaging$(), $messagingLauncher$$ = this._GetMessagingLauncherElement(), $messagingContent$$ = this.$_getMessagingContent$(this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$);
    this.$__customPlaceholderSet$ || (this.options.placeholder = "");
    $compMessaging$$.$activate$($messagingLauncher$$, $messagingContent$$)
  }, $_setLastModelValue$:$JSCompiler_set$$("$__oj_lastModelValue$"), $_setLastElementValue$:$JSCompiler_set$$("$__oj_lastElementValue$"), $_updateMessages$:function($message$$28$$, $event$$29$$) {
    var $msgs$$ = this.options.messages.slice(), $messagesHash$$ = {};
    $oj$$3$$.$Assert$.$assertPrototype$($message$$28$$, $oj$$3$$.$Message$);
    $msgs$$.push($message$$28$$);
    $messagesHash$$.messages = $msgs$$;
    $event$$29$$ && ($messagesHash$$._oj_originalEvent = $event$$29$$);
    this.option($messagesHash$$)
  }, $_updateValueOption$:function($newValue$$3$$, $event$$30$$) {
    var $values$$6$$ = {};
    $values$$6$$.value = $newValue$$3$$;
    $event$$30$$ && ($values$$6$$._oj_originalEvent = $event$$30$$);
    this.option($values$$6$$)
  }, $_validateOption$:function($optionName$$) {
    var $optionValue$$1$$ = this.options[$optionName$$], $error$$9$$ = !1;
    switch($optionName$$) {
      case "required":
        $optionValue$$1$$ ? ($optionValue$$1$$ = "" + $optionValue$$1$$, "required" !== $optionValue$$1$$ && "optional" !== $optionValue$$1$$ && ($error$$9$$ = !0)) : this.options[$optionName$$] = "optional";
        break;
      case "disabled":
        null !== $optionValue$$1$$ && "boolean" !== typeof $optionValue$$1$$ && ($error$$9$$ = !0)
    }
    if($error$$9$$) {
      throw"Option '" + $optionName$$ + " 'has an invalid value set: " + $optionValue$$1$$;
    }
  }, $_doRunValidation$:function($value$$79$$, $event$$31$$, $mode$$10$$) {
    var $newValue$$4$$ = $value$$79$$;
    try {
      $mode$$10$$ === this.$_VALIDATION_MODE$.$FULL$ && ($newValue$$4$$ = this.$_parseValue$($value$$79$$)), this.$_validateValue$($newValue$$4$$, $mode$$10$$ === this.$_VALIDATION_MODE$.$REQUIRED_VALIDATOR_ONLY$)
    }catch($ve$$) {
      this.$_processValidationError$($ve$$, $event$$31$$)
    }
    return $newValue$$4$$
  }, $_formatValue$:function($value$$80$$) {
    var $formattedValue$$ = $value$$80$$, $converter$$ = this.$_GetConverter$();
    $converter$$ && "object" === typeof $converter$$ && ($converter$$.format && "function" === typeof $converter$$.format ? $formattedValue$$ = $converter$$.format($value$$80$$) : $oj$$3$$.$Logger$.$level$ > $oj$$3$$.$Logger$.$LEVEL_WARN$ && $oj$$3$$.$Logger$.info("converter does not support the format method."));
    return $formattedValue$$
  }, $_getComponentMessaging$:function() {
    this.$__componentMessaging$ || (this.$__componentMessaging$ = new $oj$$3$$.$ComponentMessaging$(this));
    return this.$__componentMessaging$
  }, $_getDefaultRequiredValidator$:function() {
    var $vf$$;
    this.$__defaultReqValOptions$ = {label:this.$_getLabelText$()};
    return($vf$$ = $oj$$3$$.$Validation$.$validatorFactory$($oj$$3$$.$ValidatorFactory$.VALIDATOR_TYPE_REQUIRED)) ? $vf$$.createValidator(this.$__defaultReqValOptions$) : null
  }, $_getHintsForAllValidators$:function($allValidators$$1$$) {
    var $vHint_validator$$1$$, $validatorHints$$ = [];
    $vHint_validator$$1$$ = "";
    var $i$$79$$;
    this.$_IsRequired$() && ($vHint_validator$$1$$ = this.$_hasRequiredInValidators$($allValidators$$1$$), $vHint_validator$$1$$ || ($vHint_validator$$1$$ = this.$_getDefaultRequiredValidator$(), $vHint_validator$$1$$.getHint && "function" === typeof $vHint_validator$$1$$.getHint && ($vHint_validator$$1$$ = $vHint_validator$$1$$.getHint()) && $validatorHints$$.push($vHint_validator$$1$$)));
    for($i$$79$$ = 0;$i$$79$$ < $allValidators$$1$$.length;$i$$79$$++) {
      $vHint_validator$$1$$ = $allValidators$$1$$[$i$$79$$], "object" === typeof $vHint_validator$$1$$ && $vHint_validator$$1$$.getHint && "function" === typeof $vHint_validator$$1$$.getHint && ($vHint_validator$$1$$ = $vHint_validator$$1$$.getHint()) && $validatorHints$$.push($vHint_validator$$1$$)
    }
    return $validatorHints$$
  }, $_getMessagingContent$:function($updateType$$) {
    var $messagingContent$$1$$ = {}, $allValidators$$2_converter$$1_converterHint$$1$$ = this.$_GetConverter$(), $validatorHints$$1$$ = [];
    $updateType$$ = $updateType$$ || this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$VALIDITY_STATE$;
    if($updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$ || $updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$VALIDITY_STATE$) {
      $messagingContent$$1$$.validityState = this.$_getValidityState$()
    }
    ($updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$ || $updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$CONVERTER_HINT$) && ($allValidators$$2_converter$$1_converterHint$$1$$ && "object" === typeof $allValidators$$2_converter$$1_converterHint$$1$$ && $allValidators$$2_converter$$1_converterHint$$1$$.getHint && "function" === typeof $allValidators$$2_converter$$1_converterHint$$1$$.getHint) && ($allValidators$$2_converter$$1_converterHint$$1$$ = $allValidators$$2_converter$$1_converterHint$$1$$.getHint() || 
    "", $messagingContent$$1$$.converterHint = $allValidators$$2_converter$$1_converterHint$$1$$);
    if($updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$ || $updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$VALIDATOR_HINTS$) {
      $allValidators$$2_converter$$1_converterHint$$1$$ = this.$_GetAllValidators$(), $validatorHints$$1$$ = this.$_getHintsForAllValidators$($allValidators$$2_converter$$1_converterHint$$1$$) || [], $messagingContent$$1$$.validatorHint = $validatorHints$$1$$
    }
    if($updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$ || $updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$TITLE$) {
      $messagingContent$$1$$.title = this.options.title || ""
    }
    return $messagingContent$$1$$
  }, $_hasRequiredInValidators$:function($allValidators$$3$$) {
    var $validator$$2$$ = null, $i$$80$$, $required$$ = null;
    for($i$$80$$ = 0;$i$$80$$ < $allValidators$$3$$.length;$i$$80$$++) {
      if($validator$$2$$ = $allValidators$$3$$[$i$$80$$], $validator$$2$$ instanceof $oj$$3$$.$RequiredValidator$) {
        $required$$ = $validator$$2$$;
        break
      }
    }
    return $required$$
  }, $_messagesEquals$:function($pm$$, $m$$10$$) {
    var $match$$ = -1, $pmo$$, $passed$$ = !0, $previousMsgs$$1$$ = $$$$3$$.extend([], $pm$$), $msgs$$1$$ = $$$$3$$.extend([], $m$$10$$);
    if($previousMsgs$$1$$ === $msgs$$1$$) {
      return!0
    }
    if(null == $previousMsgs$$1$$ || null == $msgs$$1$$ || $previousMsgs$$1$$.length !== $msgs$$1$$.length) {
      return!1
    }
    $$$$3$$.each($previousMsgs$$1$$, function($i$$81$$, $pMsg$$) {
      $pmo$$ = $pMsg$$ instanceof $oj$$3$$.$Message$ ? $pMsg$$ : new $oj$$3$$.$Message$($pMsg$$.summary, $pMsg$$.detail, $pMsg$$.severity);
      $match$$ = -1;
      $$$$3$$.each($msgs$$1$$, function($j$$10$$, $msg$$1$$) {
        $pmo$$.$equals$($msg$$1$$) && ($match$$ = $j$$10$$)
      });
      -1 < $match$$ ? $msgs$$1$$.splice($match$$, 1) : $passed$$ = !1
    });
    return $passed$$
  }, $_parseValue$:function($submittedValue$$1$$) {
    var $converter$$2$$ = this.$_GetConverter$(), $parsedValue$$ = $submittedValue$$1$$;
    $converter$$2$$ && "object" === typeof $converter$$2$$ && ($converter$$2$$.parse && "function" === typeof $converter$$2$$.parse ? $parsedValue$$ = $converter$$2$$.parse($submittedValue$$1$$) : $oj$$3$$.$Logger$.$level$ > $oj$$3$$.$Logger$.$LEVEL_WARN$ && $oj$$3$$.$Logger$.info("converter does not support the parse method."));
    return $parsedValue$$
  }, $_processValidationError$:function($e$$25$$, $event$$32$$) {
    var $detail$$4_ojmessage$$, $summary$$1$$, $severity$$3$$, $newMsg$$ = {};
    $e$$25$$ instanceof $oj$$3$$.$ConverterError$ || $e$$25$$ instanceof $oj$$3$$.$ValidatorError$ ? ($detail$$4_ojmessage$$ = $e$$25$$.$getMessage$(), $oj$$3$$.$Assert$.$assertPrototype$($detail$$4_ojmessage$$, $oj$$3$$.$Message$), $severity$$3$$ = $detail$$4_ojmessage$$.severity, $summary$$1$$ = $detail$$4_ojmessage$$.summary, $detail$$4_ojmessage$$ = $detail$$4_ojmessage$$.detail) : ($severity$$3$$ = $oj$$3$$.$Message$.$SEVERITY_LEVEL$.ERROR, $summary$$1$$ = $oj$$3$$.$Translations$.$getTranslatedString$("oj-message.error"), 
    $detail$$4_ojmessage$$ = $e$$25$$.message || $oj$$3$$.$Translations$.$getTranslatedString$("oj-converter.detail"));
    $newMsg$$.summary = $summary$$1$$;
    $newMsg$$.severity = $severity$$3$$;
    $newMsg$$.detail = $detail$$4_ojmessage$$;
    this.$_updateMessages$($newMsg$$, $event$$32$$)
  }, $_refreshAria$:function($option$$1$$, $value$$81$$) {
    this.$_GetContentElement$();
    switch($option$$1$$) {
      case "required":
        this.$_RefreshAriaRequired$($value$$81$$)
    }
  }, $_refreshComponentDisplayValue$:function($value$$82$$, $fullRefresh$$2$$) {
    var $modelValue$$ = $value$$82$$ || this.options.value, $lastModelValue$$;
    $lastModelValue$$ = this.$__oj_lastModelValue$;
    ($fullRefresh$$2$$ || $modelValue$$ !== $lastModelValue$$) && this.$_updateElementDisplayValue$($modelValue$$)
  }, $_RefreshLabelDependents$:function() {
    this.$__defaultReqValOptions$ = {};
    this.$_ResetAllValidators$()
  }, $_refreshTheming$:function($option$$2$$, $value$$83$$) {
    this.$_OPTION_TO_CSS_MAPPING$.hasOwnProperty($option$$2$$) && ("required" !== $option$$2$$ ? this.widget().toggleClass(this.$_OPTION_TO_CSS_MAPPING$[$option$$2$$], !!$value$$83$$) : this.widget().toggleClass(this.$_OPTION_TO_CSS_MAPPING$[$option$$2$$], "required" === $value$$83$$))
  }, $_updateElementDisplayValue$:function($modelValue$$1$$, $event$$33$$) {
    var $displayValue$$1$$;
    this.$_setLastModelValue$($modelValue$$1$$);
    $displayValue$$1$$ = $modelValue$$1$$;
    try {
      $displayValue$$1$$ = this.$_formatValue$($modelValue$$1$$)
    }catch($e$$26$$) {
      this.$_processValidationError$($e$$26$$, $event$$33$$)
    }
    this.$_SetDisplayValue$($displayValue$$1$$);
    this.$_setLastElementValue$(this.$_GetDisplayValue$())
  }, $_updateInvalidElementTracker$:$JSCompiler_emptyFn$$(), $_validateValue$:function($value$$84$$, $requiredOnly$$1$$) {
    if(this.$__valid$) {
      var $allValidators$$4$$ = this.$_GetAllValidators$(), $validator$$3$$, $i$$82$$, $reqValRun$$ = !1;
      this.$_IsRequired$() && (($validator$$3$$ = this.$_hasRequiredInValidators$($allValidators$$4$$)) || ($validator$$3$$ = this.$_getDefaultRequiredValidator$()), $validator$$3$$.validate($value$$84$$), $reqValRun$$ = !0);
      if(!$requiredOnly$$1$$) {
        for($i$$82$$ = 0;$i$$82$$ < $allValidators$$4$$.length;$i$$82$$++) {
          $validator$$3$$ = $allValidators$$4$$[$i$$82$$], "object" === typeof $validator$$3$$ && ($validator$$3$$.validate && "function" === typeof $validator$$3$$.validate ? $validator$$3$$ instanceof $oj$$3$$.$RequiredValidator$ && $reqValRun$$ || $validator$$3$$.validate($value$$84$$) : $oj$$3$$.$Logger$.$level$ > $oj$$3$$.$Logger$.$LEVEL_WARN$ && $oj$$3$$.$Logger$.info("validator does not support the validate method."))
        }
      }
    }
  }});
  $oj$$3$$.Components.$setDefaultOptions$({editableValue:{messagingDisplayOptions:$oj$$3$$.Components.$createDynamicPropertyGetter$(function() {
    return{messages:["notewindow"], converterHint:["placeholder", "notewindow"], validatorHint:["notewindow"], title:["notewindow"]}
  })}});
  $oj$$3$$.$__registerWidget$("oj._ojLabel", $$$$3$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3clabel\x3e", widgetEventPrefix:"oj", options:{describedById:null, help:{definition:null, source:null}, required:null, rootAttributes:void 0}, $_BUNDLE_KEY$:{$_TOOLTIP_HELP$:"tooltipHelp", $_TOOLTIP_REQUIRED$:"tooltipRequired"}, widget:$JSCompiler_get$$("$uiLabel$"), refresh:function() {
    this._super();
    this.$_refreshRequired$();
    this.$_refreshHelp$()
  }, _create:function() {
    this._super();
    this.$_drawOnCreate$()
  }, $_drawOnCreate$:function() {
    this.$uiLabel$ = this.element.wrap(this.$_uiLabelWrapperHtml$()).closest(".oj-component");
    this.$_moveClassesToRoot$();
    if(this.options.help.definition || this.options.help.source) {
      this.$_insertHelpHtml$(), this.$_addHelpDefToLabel$()
    }
    "required" === this.options.required && this.element.before(this.$_requiredHtml$())
  }, $_moveClassesToRoot$:function() {
    var $arrayOfClasses_classes$$ = this.element.attr("class");
    this.$movedClassArray$ = [];
    if($arrayOfClasses_classes$$) {
      for(var $arrayOfClasses_classes$$ = $arrayOfClasses_classes$$.split(/\s+/), $numClasses$$ = $arrayOfClasses_classes$$.length, $i$$83$$ = 0;$i$$83$$ < $numClasses$$;$i$$83$$++) {
        var $className$$6$$ = $arrayOfClasses_classes$$[$i$$83$$];
        0 < $className$$6$$.indexOf("-label") && (this.$uiLabel$.addClass($className$$6$$), this.element.removeClass($className$$6$$), this.$movedClassArray$.push($className$$6$$))
      }
    }
  }, $_uiLabelWrapperHtml$:function() {
    var $inputLabelClass$$;
    this.options.rootAttributes && ($inputLabelClass$$ = this.options.rootAttributes["class"]);
    return null !== $inputLabelClass$$ ? "\x3cdiv class\x3d'oj-label oj-component " + $inputLabelClass$$ + "'\x3e\x3cdiv class\x3d'oj-label-group'\x3e\x3c/div\x3e\x3c/div\x3e" : "\x3cdiv class\x3d'oj-label oj-component'\x3e\x3cdiv class\x3d'oj-label-group'\x3e\x3c/div\x3e\x3c/div\x3e"
  }, $_requiredHtml$:function() {
    return"\x3cspan class\x3d'oj-label-required-icon oj-component-icon' title\x3d'" + this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_REQUIRED$) + "'\x3e\x3c/span\x3e"
  }, $_helpHtml$:function($helpDef$$2_tooltipHelp$$, $source$$6$$, $describedById$$) {
    if($source$$6$$) {
      var $helpHtml$$;
      $helpHtml$$ = "\x3cspan id\x3d'" + $describedById$$ + "'\x3e" + ("\x3ca href\x3d'" + $source$$6$$ + "' target\x3d'_blank'\x3e\x3cspan class\x3d");
      $helpHtml$$ += "'oj-label-help-icon oj-component-icon oj-clickable-icon' title\x3d'";
      $helpDef$$2_tooltipHelp$$ || ($helpDef$$2_tooltipHelp$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_HELP$));
      $helpHtml$$ += $helpDef$$2_tooltipHelp$$;
      $helpHtml$$ += "' role\x3d'img'\x3e\x3c/span\x3e";
      $helpHtml$$ += "\x3c/a\x3e\x3c/span\x3e"
    }
    return $helpHtml$$
  }, $_addHelpDefToLabel$:function() {
    var $helpDef$$3$$ = this.options.help.definition;
    if($helpDef$$3$$) {
      this.element.addClass("oj-label-help-def");
      var $title$$8$$ = this.element.attr("title");
      $title$$8$$ ? this.element.attr("title", $title$$8$$ + " " + $helpDef$$3$$) : this.element.attr("title", $helpDef$$3$$)
    }
  }, $_removeHelpDefToLabel$:function() {
    this.element.removeClass("oj-label-help-def");
    this.element.attr("title", "")
  }, $_insertHelpHtml$:function() {
    var $helpSource$$3$$ = this.options.help.source;
    if($helpSource$$3$$) {
      var $helpDef$$4$$ = this.options.help.definition;
      this.$uiLabel$.find(".oj-label-group").prepend(this.$_helpHtml$($helpDef$$4$$, $helpSource$$3$$, this.options.describedById))
    }
  }, $_refreshHelp$:function() {
    null !== this.options.describedById && this.$uiLabel$.find("#" + this.options.describedById).remove();
    this.$_removeHelpDefToLabel$();
    this.$_insertHelpHtml$();
    this.$_addHelpDefToLabel$()
  }, $_refreshRequired$:function() {
    "required" === this.options.required ? 0 === this.$uiLabel$.find(".oj-label-required-icon").length && this.element.before(this.$_requiredHtml$()) : this.$uiLabel$.find(".oj-label-required-icon").remove()
  }, _setOption:function($key$$33$$, $value$$85$$) {
    this._super($key$$33$$, $value$$85$$);
    "required" === $key$$33$$ && this.$_refreshRequired$();
    "help" === $key$$33$$ && this.$_refreshHelp$()
  }, getNodeBySubId:function($locator$$2_subId$$) {
    if(null == $locator$$2_subId$$) {
      return this.element ? this.element[0] : null
    }
    $locator$$2_subId$$ = $locator$$2_subId$$.subId;
    return"oj-label-help-icon" === $locator$$2_subId$$ ? this.widget().find(".oj-label-help-icon")[0] : "oj-label-help-icon-anchor" === $locator$$2_subId$$ ? this.widget().find(".oj-label-help-icon").parent()[0] : "oj-label-required-icon" === $locator$$2_subId$$ ? this.widget().find(".oj-label-required-icon")[0] : null
  }, _destroy:function() {
    this._super();
    for(var $i$$84$$ = 0;$i$$84$$ < this.$movedClassArray$.length;$i$$84$$++) {
      this.element.addClass(this.$movedClassArray$[$i$$84$$])
    }
    this.$_removeHelpDefToLabel$();
    this.$uiLabel$.replaceWith(this.element)
  }})
});
