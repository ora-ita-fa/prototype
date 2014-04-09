define(["ojs/ojcore", "jquery", "knockout"], function($oj$$4$$, $$$$4$$, $ko$$1$$) {
  function $_extractValueFromChangeEvent$$($event$$38$$, $eventData$$1$$) {
    var $nameVal$$ = {};
    $nameVal$$.value = $eventData$$1$$.value;
    return $nameVal$$
  }
  function $_extractOptionChange$$($event$$39$$, $eventData$$2$$) {
    var $nameVal$$1$$ = {}, $metadata$$ = $eventData$$2$$.optionMetadata;
    $metadata$$ && "shouldWrite" === $metadata$$.writeback && ($nameVal$$1$$[$eventData$$2$$.option] = $eventData$$2$$.value);
    return $nameVal$$1$$
  }
  function $GlobalChangeQueue$$() {
    this.$Init$()
  }
  function $ComponentChangeTracker$$($component$$6$$, $queue$$) {
    this.$Init$($component$$6$$, $queue$$)
  }
  function $_getTableColumnTemplateRenderer$$($bindingContext$$, $columnId$$, $type$$67$$, $template$$) {
    var $rendererOption$$ = {};
    (function($template$$1$$, $type$$68$$) {
      $rendererOption$$.renderer = function $$rendererOption$$$renderer$($params$$9$$) {
        var $childContext$$ = null, $parentElement$$ = null;
        "header" == $type$$68$$ ? ($childContext$$ = $bindingContext$$.extend({$column:$params$$9$$.column, $headerContext:$params$$9$$.headerContext}), $parentElement$$ = $params$$9$$.headerContext.parentElement) : "cell" == $type$$68$$ && ($childContext$$ = $bindingContext$$.createChildContext($params$$9$$.row, null, function($binding$$) {
          $binding$$.$column = $params$$9$$.column;
          $binding$$.$cellContext = $params$$9$$.cellContext
        }), $parentElement$$ = $params$$9$$.cellContext.parentElement);
        $ko$$1$$.renderTemplate($template$$1$$, $childContext$$, null, $parentElement$$, "replaceNode")
      }
    })($template$$, $type$$67$$);
    $rendererOption$$.type = $type$$67$$;
    $rendererOption$$.columnId = $columnId$$;
    return $rendererOption$$
  }
  function $_getTableFooterTemplateRenderer$$($bindingContext$$1$$, $template$$2$$) {
    return function($params$$10$$) {
      $ko$$1$$.renderTemplate($template$$2$$, $bindingContext$$1$$, null, $params$$10$$.footerContext.parentElement, "replaceNode")
    }
  }
  function $_getTableRowTemplateRenderer$$($bindingContext$$2$$, $template$$3$$) {
    return function($params$$11$$) {
      var $childContext$$1$$ = $bindingContext$$2$$.createChildContext($params$$11$$.row, null, function($binding$$1$$) {
        $binding$$1$$.$rowContext = $params$$11$$.rowContext
      });
      $ko$$1$$.renderTemplate($template$$3$$, $childContext$$1$$, null, $params$$11$$.rowContext.parentElement, "replaceNode")
    }
  }
  function $_getDataGridHeaderRenderer$$($bindingContext$$3$$, $template$$4$$) {
    return function($context$$32$$) {
      var $parent$$2$$, $childContext$$2$$;
      $parent$$2$$ = $context$$32$$.parentElement;
      $childContext$$2$$ = $bindingContext$$3$$.createChildContext($context$$32$$.data, null, function($binding$$2$$) {
        $binding$$2$$.$key = $context$$32$$.key;
        $binding$$2$$.$metadata = $context$$32$$.metadata;
        $binding$$2$$.$headerContext = $context$$32$$
      });
      $ko$$1$$.renderTemplate($template$$4$$, $childContext$$2$$, null, $parent$$2$$);
      return null
    }
  }
  function $_getDataGridCellRenderer$$($bindingContext$$4$$, $template$$5$$) {
    return function($context$$33$$) {
      var $parent$$3$$, $childContext$$3$$;
      $parent$$3$$ = $context$$33$$.parentElement;
      $childContext$$3$$ = $bindingContext$$4$$.createChildContext($context$$33$$.data, null, function($binding$$3$$) {
        $binding$$3$$.$keys = $context$$33$$.keys;
        $binding$$3$$.$metadata = $context$$33$$.metadata;
        $binding$$3$$.$cellContext = $context$$33$$
      });
      $ko$$1$$.renderTemplate($template$$5$$, $childContext$$3$$, null, $parent$$3$$);
      return null
    }
  }
  $oj$$4$$.$ComponentBinding$ = function $$oj$$4$$$$ComponentBinding$$($name$$82$$, $options$$168$$) {
    this.$Init$($name$$82$$, $options$$168$$)
  };
  $goog$exportPath_$$("ComponentBinding", $oj$$4$$.$ComponentBinding$, $oj$$4$$);
  $oj$$4$$.$Object$.$createSubclass$($oj$$4$$.$ComponentBinding$, $oj$$4$$.$Object$, "oj.ComponentBinding");
  $oj$$4$$.$ComponentBinding$.create = function $$oj$$4$$$$ComponentBinding$$create$($name$$83$$, $options$$169$$) {
    if(null == $name$$83$$) {
      throw"Binding name is required!";
    }
    var $instance$$8$$ = new $oj$$4$$.$ComponentBinding$($name$$83$$, $options$$169$$), $handlers$$6$$ = $ko$$1$$.bindingHandlers, $i$$92$$, $names$$ = Array.isArray($name$$83$$) ? $name$$83$$ : [$name$$83$$];
    for($i$$92$$ = 0;$i$$92$$ < $names$$.length;$i$$92$$++) {
      $handlers$$6$$[$names$$[$i$$92$$]] = $instance$$8$$
    }
    return $instance$$8$$
  };
  $goog$exportPath_$$("ComponentBinding.create", $oj$$4$$.$ComponentBinding$.create, $oj$$4$$);
  $oj$$4$$.$ComponentBinding$.$getDefaultInstance$ = function $$oj$$4$$$$ComponentBinding$$$getDefaultInstance$$() {
    return $oj$$4$$.$ComponentBinding$.$_INSTANCE$
  };
  $goog$exportPath_$$("ComponentBinding.getDefaultInstance", $oj$$4$$.$ComponentBinding$.$getDefaultInstance$, $oj$$4$$);
  $oj$$4$$.$ComponentBinding$.prototype.$setupManagedAttributes$ = function $$oj$$4$$$$ComponentBinding$$$$setupManagedAttributes$$($opts$$8$$) {
    var $forName$$ = $opts$$8$$["for"], $forName$$ = null == $forName$$ ? "@global" : $forName$$;
    $oj$$4$$.$Logger$.option("level") >= $oj$$4$$.$Logger$.$LEVEL_ERROR$ && this.$_managedAttrOptions$[$forName$$] && $oj$$4$$.$Logger$.error("Managed Attributes for '%s' are redefined", $forName$$);
    this.$_managedAttrOptions$[$forName$$] = $opts$$8$$
  };
  $oj$$4$$.$Object$.$exportPrototypeSymbol$("ComponentBinding.prototype.setupManagedAttributes", {$setupManagedAttributes$:$oj$$4$$.$ComponentBinding$.prototype.$setupManagedAttributes$});
  $oj$$4$$.$ComponentBinding$.$deliverChanges$ = function $$oj$$4$$$$ComponentBinding$$$deliverChanges$$() {
    $oj$$4$$.$ComponentBinding$.$_changeQueue$.$deliverChanges$()
  };
  $goog$exportPath_$$("ComponentBinding.deliverChanges", $oj$$4$$.$ComponentBinding$.$deliverChanges$, $oj$$4$$);
  $oj$$4$$.$ComponentBinding$.prototype.$Init$ = function $$oj$$4$$$$ComponentBinding$$$$Init$$($names$$1$$, $options$$170$$) {
    $oj$$4$$.$ComponentBinding$.$superclass$.$Init$.call(this);
    "string" === typeof $options$$170$$ && ($options$$170$$ = {componentName:$options$$170$$});
    this.$_bindingOptions$ = $options$$170$$ || {};
    this.$_bindingNames$ = Array.isArray($names$$1$$) ? $names$$1$$ : [$names$$1$$];
    this.init = $oj$$4$$.$Object$.$createCallback$(this, this._init);
    this.update = $oj$$4$$.$Object$.$createCallback$(this, this.$_update$);
    this.$_managedAttrOptions$ = {}
  };
  $oj$$4$$.$ComponentBinding$.$_NEEDS_JUIB_INIT$ = "_ojNeedsJUIBInit";
  $oj$$4$$.$ComponentBinding$.prototype._init = function $$oj$$4$$$$ComponentBinding$$$_init$($element$$20$$, $valueAccessor$$, $allBindingsAccessor$$, $viewModel$$1$$, $bindingContext$$5$$) {
    $ko$$1$$.applyBindingsToDescendants($bindingContext$$5$$, $element$$20$$);
    $$$$4$$($element$$20$$).data($oj$$4$$.$ComponentBinding$.$_NEEDS_JUIB_INIT$, !0);
    return{controlsDescendantBindings:!0}
  };
  $oj$$4$$.$ComponentBinding$.prototype.$_update$ = function $$oj$$4$$$$ComponentBinding$$$$_update$$($element$$21$$, $valueAccessor$$1$$, $allBindingsAccessor$$1$$, $jelem$$3_viewModel$$2$$, $bindingContext$$6$$) {
    $jelem$$3_viewModel$$2$$ = $$$$4$$($element$$21$$);
    $jelem$$3_viewModel$$2$$.data($oj$$4$$.$ComponentBinding$.$_NEEDS_JUIB_INIT$) && ($jelem$$3_viewModel$$2$$.data($oj$$4$$.$ComponentBinding$.$_NEEDS_JUIB_INIT$, null), this.$_initComponent$($element$$21$$, $jelem$$3_viewModel$$2$$, $valueAccessor$$1$$, $allBindingsAccessor$$1$$, $bindingContext$$6$$))
  };
  $oj$$4$$.$ComponentBinding$.prototype.$_initComponent$ = function $$oj$$4$$$$ComponentBinding$$$$_initComponent$$($element$$22$$, $jelem$$4$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$7$$) {
    var $options$$171$$ = $valueAccessor$$2$$(), $roleAttrName$$ = null, $disposed$$ = !1, $registeredListers$$ = [], $tracker$$2$$ = null, $comp$$ = null, $bindingMap$$ = $oj$$4$$.$ComponentBinding$.$_getBindingValueMap$(this.$_bindingNames$, $element$$22$$, $bindingContext$$7$$), $stage$$ = 0, $attributeEvaluatorCache$$ = {}, $componentName$$1$$ = this.$_bindingOptions$.componentName;
    if(null == $componentName$$1$$) {
      $roleAttrName$$ = "component";
      if(!$bindingMap$$[$roleAttrName$$] && ($roleAttrName$$ = "role", !$bindingMap$$[$roleAttrName$$])) {
        $oj$$4$$.$Logger$.error("component attribute is required for the ojComponent binding");
        return
      }
      var $role$$ = $options$$171$$[$roleAttrName$$];
      if(null == $role$$) {
        $oj$$4$$.$Logger$.error("non-null component attribute is required for the ojComponent binding");
        return
      }
      $ko$$1$$.computed(function() {
        $oj$$4$$.$ComponentBinding$.$_evaluatePropertyExpression$($bindingMap$$[$roleAttrName$$], $roleAttrName$$, $attributeEvaluatorCache$$, $bindingContext$$7$$);
        if(0 == $stage$$) {
          $componentName$$1$$ = $ko$$1$$.utils.unwrapObservable($role$$)
        }else {
          $disposed$$ = !0;
          $bindingMap$$ = null;
          $oj$$4$$.$ComponentBinding$.$_unregisterWritebacks$($jelem$$4$$);
          if($comp$$) {
            $tracker$$2$$.$dispose$();
            $tracker$$2$$ = null;
            var $destroyCallback_l$$2$$ = this.$_bindingOptions$.beforeDestroy;
            $destroyCallback_l$$2$$ && $destroyCallback_l$$2$$($element$$22$$, $comp$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$7$$);
            $comp$$("destroy");
            $comp$$ = null;
            for($destroyCallback_l$$2$$ = 0;$destroyCallback_l$$2$$ < $registeredListers$$.length;$destroyCallback_l$$2$$++) {
              $registeredListers$$[$destroyCallback_l$$2$$].$dispose$()
            }
            $registeredListers$$ = null
          }
          this.$_initComponent$($element$$22$$, $jelem$$4$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$7$$)
        }
        return null
      }, this, {disposeWhenNodeIsRemoved:$element$$22$$})
    }
    if(null != $componentName$$1$$) {
      if($comp$$ = $jelem$$4$$[$componentName$$1$$], "function" === typeof $comp$$) {
        var $comp$$ = $comp$$.bind($jelem$$4$$), $managedAttrMap$$ = $oj$$4$$.$ComponentBinding$.$_resolveManagedAttributes$(this.$_managedAttrOptions$, $bindingMap$$, $componentName$$1$$), $defaultInstance_defaultManagedMap_writablePropMap$$ = $oj$$4$$.$ComponentBinding$.$getDefaultInstance$();
        this !== $defaultInstance_defaultManagedMap_writablePropMap$$ && ($defaultInstance_defaultManagedMap_writablePropMap$$ = $defaultInstance_defaultManagedMap_writablePropMap$$.$_getManagedAttributes$($bindingMap$$, $componentName$$1$$), $oj$$4$$.$CollectionUtils$.$copyInto$($defaultInstance_defaultManagedMap_writablePropMap$$, $managedAttrMap$$), $managedAttrMap$$ = $defaultInstance_defaultManagedMap_writablePropMap$$);
        var $propertyMap$$ = {}, $tracker$$2$$ = new $ComponentChangeTracker$$($comp$$, $oj$$4$$.$ComponentBinding$.$_changeQueue$), $defaultInstance_defaultManagedMap_writablePropMap$$ = {"^slider$":[{event:"slidechange", getter:$_extractValueFromChangeEvent$$}], "^oj*":[{event:"ojoptionchange", getter:$_extractOptionChange$$}]}, $handler$$47$$ = function $$handler$$47$$$() {
          var $initProps_prop$$54_updateProps$$ = this.$_property$, $exp$$1_initFunc_v$$ = $bindingMap$$[$initProps_prop$$54_updateProps$$];
          $exp$$1_initFunc_v$$ && $oj$$4$$.$ComponentBinding$.$_evaluatePropertyExpression$($exp$$1_initFunc_v$$, $initProps_prop$$54_updateProps$$, $attributeEvaluatorCache$$, $bindingContext$$7$$);
          if(0 === $stage$$) {
            var $p$$4_value$$129$$ = $oj$$4$$.$ComponentBinding$.$_toJS$($options$$171$$[$initProps_prop$$54_updateProps$$]);
            null != $managedAttrMap$$[$initProps_prop$$54_updateProps$$] ? ($exp$$1_initFunc_v$$ = $managedAttrMap$$[$initProps_prop$$54_updateProps$$].$init$, null != $exp$$1_initFunc_v$$ && ($initProps_prop$$54_updateProps$$ = $exp$$1_initFunc_v$$($initProps_prop$$54_updateProps$$, $p$$4_value$$129$$, $element$$22$$, $comp$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$7$$) || {}, $oj$$4$$.$CollectionUtils$.$copyInto$($propertyMap$$, $initProps_prop$$54_updateProps$$))) : $propertyMap$$[$initProps_prop$$54_updateProps$$] = 
            $p$$4_value$$129$$
          }else {
            if(!$disposed$$) {
              if($exp$$1_initFunc_v$$ = $oj$$4$$.$ComponentBinding$.$_toJS$($valueAccessor$$2$$()[$initProps_prop$$54_updateProps$$]), null != $managedAttrMap$$[$initProps_prop$$54_updateProps$$]) {
                var $updateFunc$$ = $managedAttrMap$$[$initProps_prop$$54_updateProps$$].update;
                if(null != $updateFunc$$) {
                  for($p$$4_value$$129$$ in $initProps_prop$$54_updateProps$$ = $updateFunc$$($initProps_prop$$54_updateProps$$, $exp$$1_initFunc_v$$, $element$$22$$, $comp$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$7$$) || {}, $initProps_prop$$54_updateProps$$) {
                    $initProps_prop$$54_updateProps$$.hasOwnProperty($p$$4_value$$129$$) && $tracker$$2$$.$addChange$($p$$4_value$$129$$, $initProps_prop$$54_updateProps$$[$p$$4_value$$129$$])
                  }
                }
              }else {
                $tracker$$2$$.$addChange$($initProps_prop$$54_updateProps$$, $exp$$1_initFunc_v$$)
              }
            }
          }
          return null
        }, $createCallback_p$$3$$;
        for($createCallback_p$$3$$ in $options$$171$$) {
          $options$$171$$.hasOwnProperty($createCallback_p$$3$$) && $createCallback_p$$3$$ !== $roleAttrName$$ && $registeredListers$$.push($ko$$1$$.computed($handler$$47$$, {$_property$:$createCallback_p$$3$$}, {disposeWhenNodeIsRemoved:$element$$22$$}))
        }
        $oj$$4$$.$ComponentBinding$.$_registerWritebacks$($jelem$$4$$, $componentName$$1$$, $defaultInstance_defaultManagedMap_writablePropMap$$, $valueAccessor$$2$$, $bindingMap$$, $tracker$$2$$, $bindingContext$$7$$);
        $comp$$($propertyMap$$);
        ($createCallback_p$$3$$ = this.$_bindingOptions$.afterCreate) && $createCallback_p$$3$$($element$$22$$, $comp$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$7$$);
        $propertyMap$$ = null
      }else {
        $oj$$4$$.$Logger$.error("Component %s is not found", $componentName$$1$$)
      }
    }
    $stage$$ = 1
  };
  $oj$$4$$.$ComponentBinding$.$_getBindingValueMap$ = function $$oj$$4$$$$ComponentBinding$$$_getBindingValueMap$$($n$$17_names$$2$$, $elem$$17_keyValueArray$$, $bindingContext$$8_stringTrimRegex$$) {
    var $map$$ = {}, $bindingValue_i$$93_provider$$ = null, $bindingValue_i$$93_provider$$ = $ko$$1$$.bindingProvider.instance, $e$$40_selfVal$$;
    $e$$40_selfVal$$ = null;
    var $keyValueEntry$$, $bindingValue_i$$93_provider$$ = $bindingValue_i$$93_provider$$.$getBindingsString$ ? $bindingValue_i$$93_provider$$.$getBindingsString$($elem$$17_keyValueArray$$, $bindingContext$$8_stringTrimRegex$$) : $elem$$17_keyValueArray$$.getAttribute("data-bind");
    if(!$bindingValue_i$$93_provider$$) {
      return $map$$
    }
    $elem$$17_keyValueArray$$ = $ko$$1$$.jsonExpressionRewriting.parseObjectLiteral($bindingValue_i$$93_provider$$);
    $bindingContext$$8_stringTrimRegex$$ = /^(\s|\u00A0)+|(\s|\u00A0)+$/g;
    for($bindingValue_i$$93_provider$$ = 0;$bindingValue_i$$93_provider$$ < $elem$$17_keyValueArray$$.length;$bindingValue_i$$93_provider$$ += 1) {
      $keyValueEntry$$ = $elem$$17_keyValueArray$$[$bindingValue_i$$93_provider$$];
      var $bindingKey$$ = $keyValueEntry$$.key.replace($bindingContext$$8_stringTrimRegex$$, "");
      if(0 <= $n$$17_names$$2$$.indexOf($bindingKey$$)) {
        $e$$40_selfVal$$ = $keyValueEntry$$.value;
        break
      }
    }
    if(!$e$$40_selfVal$$) {
      return $map$$
    }
    $elem$$17_keyValueArray$$ = $ko$$1$$.jsonExpressionRewriting.parseObjectLiteral($e$$40_selfVal$$);
    for($n$$17_names$$2$$ = 0;$n$$17_names$$2$$ < $elem$$17_keyValueArray$$.length;$n$$17_names$$2$$ += 1) {
      $e$$40_selfVal$$ = $elem$$17_keyValueArray$$[$n$$17_names$$2$$], $map$$[$e$$40_selfVal$$.key.replace($bindingContext$$8_stringTrimRegex$$, "")] = $e$$40_selfVal$$.value.replace($bindingContext$$8_stringTrimRegex$$, "")
    }
    return $map$$
  };
  $oj$$4$$.$ComponentBinding$.$_evaluatePropertyExpression$ = function $$oj$$4$$$$ComponentBinding$$$_evaluatePropertyExpression$$($expOrCallback$$, $key$$36$$, $cache$$, $bindingContext$$9$$) {
    var $evaluator$$ = $cache$$[$key$$36$$];
    void 0 === $evaluator$$ && ("string" !== typeof $expOrCallback$$ && ($expOrCallback$$ = $expOrCallback$$()), $evaluator$$ = null, null !== $expOrCallback$$ && ($evaluator$$ = new Function("$context", "with($context){with($data||{}){return " + $expOrCallback$$ + ";}}")), $cache$$[$key$$36$$] = $evaluator$$);
    return $evaluator$$ ? $evaluator$$($bindingContext$$9$$) : null
  };
  $oj$$4$$.$ComponentBinding$.prototype.$_getManagedAttributes$ = function $$oj$$4$$$$ComponentBinding$$$$_getManagedAttributes$$($bindingMap$$1$$, $componentName$$2$$) {
    return $oj$$4$$.$ComponentBinding$.$_resolveManagedAttributes$(this.$_managedAttrOptions$, $bindingMap$$1$$, $componentName$$2$$)
  };
  $oj$$4$$.$ComponentBinding$.$_resolveManagedAttributes$ = function $$oj$$4$$$$ComponentBinding$$$_resolveManagedAttributes$$($optionMap$$, $bindingMap$$2$$, $componentName$$3_global$$1_n$$18$$) {
    function $traverseOptions$$($name$$84_opt$$14_parents$$) {
      $name$$84_opt$$14_parents$$ = $optionMap$$[$name$$84_opt$$14_parents$$];
      if(null != $name$$84_opt$$14_parents$$) {
        $applicableOptions$$.push($name$$84_opt$$14_parents$$);
        $name$$84_opt$$14_parents$$ = $name$$84_opt$$14_parents$$.use;
        var $i$$94$$;
        if(null != $name$$84_opt$$14_parents$$) {
          for($name$$84_opt$$14_parents$$ = Array.isArray($name$$84_opt$$14_parents$$) ? $name$$84_opt$$14_parents$$ : [$name$$84_opt$$14_parents$$], $i$$94$$ = 0;$i$$94$$ < $name$$84_opt$$14_parents$$.length;$i$$94$$++) {
            $traverseOptions$$($name$$84_opt$$14_parents$$[$i$$94$$])
          }
        }
      }
    }
    var $managedAttrMap$$1$$ = {}, $applicableOptions$$ = [];
    $traverseOptions$$($componentName$$3_global$$1_n$$18$$);
    $componentName$$3_global$$1_n$$18$$ = $optionMap$$["@global"];
    var $attr$$14$$;
    $componentName$$3_global$$1_n$$18$$ && $applicableOptions$$.push($componentName$$3_global$$1_n$$18$$);
    if(0 < $applicableOptions$$.length) {
      for($attr$$14$$ in $bindingMap$$2$$) {
        if($bindingMap$$2$$.hasOwnProperty($attr$$14$$)) {
          for($componentName$$3_global$$1_n$$18$$ = 0;$componentName$$3_global$$1_n$$18$$ < $applicableOptions$$.length;$componentName$$3_global$$1_n$$18$$++) {
            var $opts$$9$$ = $applicableOptions$$[$componentName$$3_global$$1_n$$18$$], $attributes$$12$$ = $opts$$9$$.attributes;
            if(null != $attributes$$12$$ && 0 <= $attributes$$12$$.indexOf($attr$$14$$)) {
              $managedAttrMap$$1$$[$attr$$14$$] = {$init$:$opts$$9$$.init, update:$opts$$9$$.update};
              break
            }
          }
        }
      }
    }
    return $managedAttrMap$$1$$
  };
  $oj$$4$$.$ComponentBinding$.$_HANDLER_NAMESPACE$ = ".ojWriteback";
  $oj$$4$$.$ComponentBinding$.$_unregisterWritebacks$ = function $$oj$$4$$$$ComponentBinding$$$_unregisterWritebacks$$($jelem$$5$$) {
    $jelem$$5$$ && $jelem$$5$$.off($oj$$4$$.$ComponentBinding$.$_HANDLER_NAMESPACE$)
  };
  $oj$$4$$.$ComponentBinding$.$_registerWritebacks$ = function $$oj$$4$$$$ComponentBinding$$$_registerWritebacks$$($jelem$$6$$, $componentName$$4_eventInfos$$, $i$$95_writablePropMap$$1$$, $valueAccessor$$3$$, $bindingMap$$3$$, $tracker$$3$$, $bindingContext$$10$$) {
    var $cachedPropertyExpressionWriters$$ = {}, $info_pattern$$12$$;
    for($info_pattern$$12$$ in $i$$95_writablePropMap$$1$$) {
      if($componentName$$4_eventInfos$$.match($info_pattern$$12$$)) {
        $componentName$$4_eventInfos$$ = $i$$95_writablePropMap$$1$$[$info_pattern$$12$$];
        for($i$$95_writablePropMap$$1$$ = 0;$i$$95_writablePropMap$$1$$ < $componentName$$4_eventInfos$$.length;$i$$95_writablePropMap$$1$$++) {
          $info_pattern$$12$$ = $componentName$$4_eventInfos$$[$i$$95_writablePropMap$$1$$], $jelem$$6$$.on($info_pattern$$12$$.event + $oj$$4$$.$ComponentBinding$.$_HANDLER_NAMESPACE$, {$getter$:$info_pattern$$12$$.getter}, function($evt$$18$$, $data$$45$$) {
            $evt$$18$$.stopPropagation();
            var $nameValues$$ = $evt$$18$$.data.$getter$($evt$$18$$, $data$$45$$);
            $tracker$$3$$.$suspend$();
            try {
              for(var $name$$85$$ in $nameValues$$) {
                $oj$$4$$.$ComponentBinding$.$_writeValueToProperty$($name$$85$$, $valueAccessor$$3$$()[$name$$85$$], $nameValues$$[$name$$85$$], $bindingMap$$3$$[$name$$85$$], $bindingContext$$10$$, $cachedPropertyExpressionWriters$$)
              }
            }finally {
              $tracker$$3$$.$resume$()
            }
          })
        }
        break
      }
    }
  };
  $oj$$4$$.$ComponentBinding$.$_getPropertyWriterExpression$ = function $$oj$$4$$$$ComponentBinding$$$_getPropertyWriterExpression$$($expression$$3$$) {
    var $match$$11_reserveddWords$$ = ["true", "false", "null", "undefined"];
    if(null == $expression$$3$$ || 0 <= $match$$11_reserveddWords$$.indexOf($expression$$3$$)) {
      return null
    }
    $match$$11_reserveddWords$$ = $expression$$3$$.match(/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i);
    return null === $match$$11_reserveddWords$$ ? null : "function(v){" + ($match$$11_reserveddWords$$[1] ? "Object(" + $match$$11_reserveddWords$$[1] + ")" + $match$$11_reserveddWords$$[2] : $expression$$3$$) + "\x3dv;}"
  };
  $oj$$4$$.$ComponentBinding$.$_writeValueToProperty$ = function $$oj$$4$$$$ComponentBinding$$$_writeValueToProperty$$($func$$8_name$$86$$, $property$$13$$, $value$$130$$, $propertyExpression$$, $bindingContext$$11$$, $cachedPropertyExpressionWriters$$1$$) {
    null != $property$$13$$ && $ko$$1$$.isObservable($property$$13$$) ? $ko$$1$$.isWriteableObservable($property$$13$$) && $property$$13$$($value$$130$$) : ($func$$8_name$$86$$ = $oj$$4$$.$ComponentBinding$.$_evaluatePropertyExpression$(function() {
      return $oj$$4$$.$ComponentBinding$.$_getPropertyWriterExpression$($propertyExpression$$)
    }, $func$$8_name$$86$$, $cachedPropertyExpressionWriters$$1$$, $bindingContext$$11$$)) && $func$$8_name$$86$$($value$$130$$)
  };
  $oj$$4$$.$ComponentBinding$.$_toJS$ = function $$oj$$4$$$$ComponentBinding$$$_toJS$$($prop$$55$$) {
    $prop$$55$$ = $ko$$1$$.utils.unwrapObservable($prop$$55$$);
    (Array.isArray($prop$$55$$) || $oj$$4$$.$CollectionUtils$.isPlainObject($prop$$55$$)) && $prop$$55$$.ojConvertToJS && ($prop$$55$$ = $ko$$1$$.toJS($prop$$55$$));
    return $prop$$55$$
  };
  $oj$$4$$.$Object$.$createSubclass$($GlobalChangeQueue$$, $oj$$4$$.$Object$, "ComponentBinding.GlobalChangeQueue");
  $GlobalChangeQueue$$.prototype.$Init$ = function $$GlobalChangeQueue$$$$$Init$$() {
    $GlobalChangeQueue$$.$superclass$.$Init$.call(this);
    this.$_callbacks$ = []
  };
  $GlobalChangeQueue$$.prototype.$registerComponentChanges$ = function $$GlobalChangeQueue$$$$$registerComponentChanges$$($changesCallback$$) {
    -1 === this.$_callbacks$.indexOf($changesCallback$$) && (this.$_callbacks$.push($changesCallback$$), this.$_delayTimer$ || (this.$_delayTimer$ = setTimeout($oj$$4$$.$Object$.$createCallback$(this, this.$_deliverChangesImpl$), 1)))
  };
  $GlobalChangeQueue$$.prototype.$removeComponentChanges$ = function $$GlobalChangeQueue$$$$$removeComponentChanges$$($changesCallback$$1_index$$78$$) {
    $changesCallback$$1_index$$78$$ = this.$_callbacks$.indexOf($changesCallback$$1_index$$78$$);
    0 <= $changesCallback$$1_index$$78$$ && this.$_callbacks$.splice($changesCallback$$1_index$$78$$, 1)
  };
  $GlobalChangeQueue$$.prototype.$deliverChanges$ = function $$GlobalChangeQueue$$$$$deliverChanges$$() {
    this.$_delayTimer$ && clearTimeout(this.$_delayTimer$);
    this.$_deliverChangesImpl$()
  };
  $GlobalChangeQueue$$.prototype.$_deliverChangesImpl$ = function $$GlobalChangeQueue$$$$$_deliverChangesImpl$$() {
    var $i$$96$$;
    this.$_delayTimer$ = null;
    try {
      for($i$$96$$ = 0;$i$$96$$ < this.$_callbacks$.length;$i$$96$$ += 1) {
        this.$_callbacks$[$i$$96$$]()
      }
    }finally {
      this.$_callbacks$ = []
    }
  };
  $oj$$4$$.$Object$.$createSubclass$($ComponentChangeTracker$$, $oj$$4$$.$Object$, "ComponentBinding.ComponentChangeTracker");
  $ComponentChangeTracker$$.prototype.$Init$ = function $$ComponentChangeTracker$$$$$Init$$($component$$7$$, $queue$$1$$) {
    $ComponentChangeTracker$$.$superclass$.$Init$.call(this);
    this.$_component$ = $component$$7$$;
    this.$_queue$ = $queue$$1$$;
    this.$_updateCallback$ = $oj$$4$$.$Object$.$createCallback$(this, this.$_applyUpdates$);
    this.$_changes$ = {};
    this.$_suspendCount$ = 0
  };
  $ComponentChangeTracker$$.prototype.$addChange$ = function $$ComponentChangeTracker$$$$$addChange$$($property$$14$$, $value$$131$$) {
    this.$_isSuspended$() || this.$_disposed$ || (this.$_changes$[$property$$14$$] = $value$$131$$, this.$_queue$.$registerComponentChanges$(this.$_updateCallback$))
  };
  $ComponentChangeTracker$$.prototype.$dispose$ = function $$ComponentChangeTracker$$$$$dispose$$() {
    this.$_queue$.$removeComponentChanges$(this.$_updateCallback$);
    this.$_disposed$ = !0
  };
  $ComponentChangeTracker$$.prototype.$resume$ = function $$ComponentChangeTracker$$$$$resume$$() {
    $oj$$4$$.$Assert$.assert(0 < this.$_suspendCount$, "ComponentChangeTracker._suspendCount underflow");
    this.$_suspendCount$ -= 1
  };
  $ComponentChangeTracker$$.prototype.$suspend$ = function $$ComponentChangeTracker$$$$$suspend$$() {
    this.$_suspendCount$ -= 1
  };
  $ComponentChangeTracker$$.prototype.$_isSuspended$ = function $$ComponentChangeTracker$$$$$_isSuspended$$() {
    return 1 <= this.$_suspendCount$
  };
  $ComponentChangeTracker$$.prototype.$_applyUpdates$ = function $$ComponentChangeTracker$$$$$_applyUpdates$$() {
    try {
      this.$_component$("option", this.$_changes$)
    }finally {
      this.$_changes$ = {}
    }
  };
  $oj$$4$$.$ComponentBinding$.$_changeQueue$ = new $GlobalChangeQueue$$;
  $oj$$4$$.$ComponentBinding$.$_INSTANCE$ = $oj$$4$$.$ComponentBinding$.create(["ojComponent", "jqueryUI"]);
  $oj$$4$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["columnTemplates", "footerTemplate", "rowTemplate"], init:function($columnId$$1_name$$87$$, $value$$132$$, $element$$23_template$$6$$, $widgetConstructor$$, $columnRenderers_valueAccessor$$4$$, $allBindingsAccessor$$3_i$$97$$, $bindingContext$$12$$) {
    var $columnTemplate_type$$69$$;
    if("columnTemplates" == $columnId$$1_name$$87$$) {
      $columnRenderers_valueAccessor$$4$$ = [];
      for($allBindingsAccessor$$3_i$$97$$ = 0;$allBindingsAccessor$$3_i$$97$$ < $value$$132$$.length;$allBindingsAccessor$$3_i$$97$$++) {
        $columnTemplate_type$$69$$ = $value$$132$$[$allBindingsAccessor$$3_i$$97$$], $columnId$$1_name$$87$$ = $columnTemplate_type$$69$$.columnId, $element$$23_template$$6$$ = $columnTemplate_type$$69$$.template, $columnTemplate_type$$69$$ = $columnTemplate_type$$69$$.type, null != $element$$23_template$$6$$ && (null != $columnId$$1_name$$87$$ && null != $columnTemplate_type$$69$$) && ($columnRenderers_valueAccessor$$4$$[$allBindingsAccessor$$3_i$$97$$] = $_getTableColumnTemplateRenderer$$($bindingContext$$12$$, 
        $columnId$$1_name$$87$$, $columnTemplate_type$$69$$, $element$$23_template$$6$$))
      }
      0 < $columnRenderers_valueAccessor$$4$$.length && $widgetConstructor$$({columnRenderers:$columnRenderers_valueAccessor$$4$$})
    }else {
      "rowTemplate" == $columnId$$1_name$$87$$ ? ($element$$23_template$$6$$ = $value$$132$$.template, $widgetConstructor$$({rowRenderer:$_getTableRowTemplateRenderer$$($bindingContext$$12$$, $element$$23_template$$6$$)})) : "footerTemplate" == $columnId$$1_name$$87$$ && ($element$$23_template$$6$$ = $value$$132$$.template, $widgetConstructor$$({footerRenderer:$_getTableFooterTemplateRenderer$$($bindingContext$$12$$, $element$$23_template$$6$$)}))
    }
  }, update:function($columnId$$2_name$$88$$, $value$$133$$, $element$$24_template$$7$$, $columnRenderers$$1_widgetConstructor$$1$$, $i$$98_valueAccessor$$5$$, $allBindingsAccessor$$4_columnTemplate$$1_type$$70$$, $bindingContext$$13$$) {
    if("columnTemplates" == $columnId$$2_name$$88$$) {
      $columnRenderers$$1_widgetConstructor$$1$$ = [];
      for($i$$98_valueAccessor$$5$$ = 0;$i$$98_valueAccessor$$5$$ < $value$$133$$.length;$i$$98_valueAccessor$$5$$++) {
        $allBindingsAccessor$$4_columnTemplate$$1_type$$70$$ = $value$$133$$[$i$$98_valueAccessor$$5$$], $columnId$$2_name$$88$$ = $allBindingsAccessor$$4_columnTemplate$$1_type$$70$$.columnId, $element$$24_template$$7$$ = $allBindingsAccessor$$4_columnTemplate$$1_type$$70$$.template, $allBindingsAccessor$$4_columnTemplate$$1_type$$70$$ = $allBindingsAccessor$$4_columnTemplate$$1_type$$70$$.type, null != $element$$24_template$$7$$ && (null != $columnId$$2_name$$88$$ && null != $allBindingsAccessor$$4_columnTemplate$$1_type$$70$$) && 
        ($columnRenderers$$1_widgetConstructor$$1$$[$i$$98_valueAccessor$$5$$] = $_getTableColumnTemplateRenderer$$($bindingContext$$13$$, $columnId$$2_name$$88$$, $allBindingsAccessor$$4_columnTemplate$$1_type$$70$$, $element$$24_template$$7$$))
      }
      if(0 < $columnRenderers$$1_widgetConstructor$$1$$.length) {
        return{columnRenderers:$columnRenderers$$1_widgetConstructor$$1$$}
      }
    }else {
      if("rowTemplate" == $columnId$$2_name$$88$$) {
        return $element$$24_template$$7$$ = $value$$133$$.template, {rowRenderer:$_getTableRowTemplateRenderer$$($bindingContext$$13$$, $element$$24_template$$7$$)}
      }
      if("footerTemplate" == $columnId$$2_name$$88$$) {
        return $element$$24_template$$7$$ = $value$$133$$.template, {footerRenderer:$_getTableFooterTemplateRenderer$$($bindingContext$$13$$, $element$$24_template$$7$$)}
      }
    }
    return null
  }, "for":"ojTable"});
  $oj$$4$$.$koStringTemplateEngine$ = {};
  $goog$exportPath_$$("koStringTemplateEngine", $oj$$4$$.$koStringTemplateEngine$, $oj$$4$$);
  $oj$$4$$.$koStringTemplateEngine$.$install$ = function $$oj$$4$$$$koStringTemplateEngine$$$install$$() {
    function $StringTemplate$$($template$$8$$) {
      this.$_templateName$ = $template$$8$$;
      this.text = function $this$text$($value$$134$$) {
        if(!$value$$134$$) {
          return $_templateText$$[this.$_templateName$]
        }
        $_templateText$$[this.$_templateName$] = $value$$134$$
      };
      this.data = function $this$data$($key$$37$$, $value$$135$$) {
        $_templateData$$[this.$_templateName$] || ($_templateData$$[this.$_templateName$] = {});
        if(1 === arguments.length) {
          return $_templateData$$[this.$_templateName$][$key$$37$$]
        }
        $_templateData$$[this.$_templateName$][$key$$37$$] = $value$$135$$
      }
    }
    var $_templateText$$ = {}, $_templateData$$ = {}, $_engine$$ = new $ko$$1$$.nativeTemplateEngine;
    $_engine$$.makeTemplateSource = function $$_engine$$$makeTemplateSource$($template$$9$$, $templateDocument$$) {
      if("string" == typeof $template$$9$$) {
        $templateDocument$$ = $templateDocument$$ || document;
        var $elem$$18$$ = $templateDocument$$.getElementById($template$$9$$);
        return $elem$$18$$ ? new $ko$$1$$.templateSources.domElement($elem$$18$$) : new $StringTemplate$$($template$$9$$)
      }
      if($template$$9$$ && 1 == $template$$9$$.nodeType || 8 == $template$$9$$.nodeType) {
        return new $ko$$1$$.templateSources.anonymousTemplate($template$$9$$)
      }
    };
    $ko$$1$$.templates = $_templateText$$;
    $ko$$1$$.setTemplateEngine($_engine$$)
  };
  $goog$exportPath_$$("koStringTemplateEngine.install", $oj$$4$$.$koStringTemplateEngine$.$install$, $oj$$4$$);
  $oj$$4$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["header", "cell"], init:function($cellTemplate_column_name$$89_row$$, $value$$136$$, $columnTemplate$$2_element$$25_rowTemplate$$, $widgetConstructor$$2$$, $valueAccessor$$6$$, $allBindingsAccessor$$5$$, $bindingContext$$14$$) {
    "header" === $cellTemplate_column_name$$89_row$$ ? ($cellTemplate_column_name$$89_row$$ = $value$$136$$.row, null != $cellTemplate_column_name$$89_row$$ && ($columnTemplate$$2_element$$25_rowTemplate$$ = $cellTemplate_column_name$$89_row$$.template, null != $columnTemplate$$2_element$$25_rowTemplate$$ && ($cellTemplate_column_name$$89_row$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$14$$, $columnTemplate$$2_element$$25_rowTemplate$$))), $cellTemplate_column_name$$89_row$$ = $value$$136$$.column, 
    null != $cellTemplate_column_name$$89_row$$ && ($columnTemplate$$2_element$$25_rowTemplate$$ = $cellTemplate_column_name$$89_row$$.template, null != $columnTemplate$$2_element$$25_rowTemplate$$ && ($cellTemplate_column_name$$89_row$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$14$$, $columnTemplate$$2_element$$25_rowTemplate$$))), $widgetConstructor$$2$$({header:$value$$136$$})) : "cell" === $cellTemplate_column_name$$89_row$$ && ($cellTemplate_column_name$$89_row$$ = $value$$136$$.template, 
    null != $cellTemplate_column_name$$89_row$$ && ($value$$136$$.renderer = $_getDataGridCellRenderer$$($bindingContext$$14$$, $cellTemplate_column_name$$89_row$$)), $widgetConstructor$$2$$({cell:$value$$136$$}))
  }, update:function($cellTemplate$$1_column$$1_name$$90_row$$1$$, $value$$137$$, $columnTemplate$$3_element$$26_rowTemplate$$1$$, $widgetConstructor$$3$$, $valueAccessor$$7$$, $allBindingsAccessor$$6$$, $bindingContext$$15$$) {
    return"header" === $cellTemplate$$1_column$$1_name$$90_row$$1$$ ? ($cellTemplate$$1_column$$1_name$$90_row$$1$$ = $value$$137$$.row, null != $cellTemplate$$1_column$$1_name$$90_row$$1$$ && ($columnTemplate$$3_element$$26_rowTemplate$$1$$ = $cellTemplate$$1_column$$1_name$$90_row$$1$$.template, null != $columnTemplate$$3_element$$26_rowTemplate$$1$$ && ($cellTemplate$$1_column$$1_name$$90_row$$1$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$15$$, $columnTemplate$$3_element$$26_rowTemplate$$1$$))), 
    $cellTemplate$$1_column$$1_name$$90_row$$1$$ = $value$$137$$.column, null != $cellTemplate$$1_column$$1_name$$90_row$$1$$ && ($columnTemplate$$3_element$$26_rowTemplate$$1$$ = $cellTemplate$$1_column$$1_name$$90_row$$1$$.template, null != $columnTemplate$$3_element$$26_rowTemplate$$1$$ && ($cellTemplate$$1_column$$1_name$$90_row$$1$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$15$$, $columnTemplate$$3_element$$26_rowTemplate$$1$$))), {header:$value$$137$$}) : "cell" === $cellTemplate$$1_column$$1_name$$90_row$$1$$ ? 
    ($cellTemplate$$1_column$$1_name$$90_row$$1$$ = $value$$137$$.template, null != $cellTemplate$$1_column$$1_name$$90_row$$1$$ && ($value$$137$$.renderer = $_getDataGridCellRenderer$$($bindingContext$$15$$, $cellTemplate$$1_column$$1_name$$90_row$$1$$)), {cell:$value$$137$$}) : null
  }, "for":"ojDataGrid"});
  $ko$$1$$.bindingHandlers.ojContextMenu = {update:function $$ko$$1$$$bindingHandlers$ojContextMenu$update$($element$$27$$, $valueAccessor$$8$$) {
    $$$$4$$($element$$27$$).off(".ojContextMenu");
    var $menu$$2$$ = $ko$$1$$.utils.unwrapObservable($valueAccessor$$8$$());
    $menu$$2$$ && ($menu$$2$$ = $ko$$1$$.utils.unwrapObservable($menu$$2$$.menu));
    $menu$$2$$ || ($menu$$2$$ = $element$$27$$.getAttribute("contextmenu"));
    if($menu$$2$$ && ($menu$$2$$ = $$$$4$$("#" + $menu$$2$$).data("oj-ojMenu"))) {
      var $$element$$ = $$$$4$$($element$$27$$);
      $$element$$.on("keydown.ojContextMenu contextmenu.ojContextMenu", function($event$$40$$) {
        return"contextmenu" === $event$$40$$.type || 121 == $event$$40$$.which && $event$$40$$.shiftKey ? ($menu$$2$$.show($event$$40$$, {launcher:$$element$$, focus:"menu"}), !1) : !0
      })
    }
  }}
});
