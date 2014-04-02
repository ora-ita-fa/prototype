define(['ojs/ojcore', 'jquery', 'knockout', 'jqueryui', 'ojs/ojknockout'], function(oj, $, ko)
{
/*jslint browser: true, devel: true*/

/**
 * An extension to oj.ComponentBinding, properties exposed on this binding are available 
 * to jet components that extend from oj.editableValue. 
 * 
 * @class oj.ValueBinding 
 * 
 * @constructor
 * @class
 * @export
 * @see oj.ComponentBinding
 * @see oj.editableValue
 */
oj.ValueBinding = function(){};


/** 
 * An array of objects containing the following properties <br>
 * <ul>
 * <li>'component' - the component instance </li>
 * <li>'valid' - whether the component is valid or not. </li>
 * </ul>
 * 
 * When this attribute is present, the binding registers a default handler for the 'optionChange' 
 * event fired by jet value holder components whenever its validity (i.e. 'messages' option) changes. 
 * The handler pushes the current validity of the component into the tracker. The same array 
 * instance can be used across multiple component binding declarations. E.g., <br/>
 * @example <caption>Track validity of multiple components using the same array for the <code class="prettyprint">invalidComponentTracker</code> attribute:</caption>
 * &lt;input id="username" type="text" name="username" required 
 *   data-bind="ojComponent: {component: 'ojInputText', value: userName, 
 *                            invalidComponentTracker: invalidComponents}">
 * &lt;input id="password" type="password" name="password" required 
 *   data-bind="ojComponent: {component: 'ojInputPassword', value: password, 
 *   invalidComponentTracker: invalidComponents}"/>
 *   
 * // The viewModel that defines the invalidComponents array 
 * &lt;script>
 * function MemberViewModel() 
 * { 
 *   var self = this;
 *   
 *   self.invalidComponents = ko.observableArray([]);
 *   self.userName = ko.observable();   
 *   self.password = ko.observable();
 * }
 * &lt;/script>
 * 
 * @export
 * @access public
 * @name invalidComponentTracker
 * @instance
 * @memberof! oj.ValueBinding

 */
oj.ValueBinding._ATTRIBUTE_INVALID_COMPONENT_TRACKER = 'invalidComponentTracker';

oj.ValueBinding._ATTRIBUTE_MESSAGES = 'messages';

/** 
 * The optionChange attribute is managed in order to wrap an existing callback or register a 
 * default invalidComponentTracker writeback, when the 'messages' option changes. 
 * The registered callback is called when the optionChange event is triggered.
 * 
 * @private
 * @const
 */
oj.ValueBinding._ATTRIBUTE_OPTIONCHANGE = "optionChange";

oj.ValueBinding._init = function (property, value, element, component, valueAccessor) 
{
  var initProps = {}, options = valueAccessor.call(), 
      optionChangeProp = oj.ValueBinding._ATTRIBUTE_OPTIONCHANGE,
      optionChangeObs = options[optionChangeProp], 
      optionChangeFunc = oj.ComponentBinding._toJS(optionChangeObs);
  
  if (property === oj.ValueBinding._ATTRIBUTE_INVALID_COMPONENT_TRACKER)
  {
    // register a writeback for invalidComponentTracker property by registering an event handler for 
    // the optionChange event.
    if (!optionChangeFunc)
    {
      oj.ValueBinding._registerInvalidComponentTrackerWriteback(options, initProps, component);
    }
    // initProps[property] = value; // we don't really need to initialize this property on component
  }
  else if (property === oj.ValueBinding._ATTRIBUTE_OPTIONCHANGE)
  {
    oj.ValueBinding._registerInvalidComponentTrackerWriteback(options, initProps, component);
  }
 
  return initProps;
};

/**
 * Register a default callback for the 'optionChange' event. The callback writes the component and 
 * its validity to the invalidComponentTracker observable.
 * 
 * @param {Object} options
 * @param {Object} initProps
 * @param {Object} component
 * @private
 */
oj.ValueBinding._registerInvalidComponentTrackerWriteback = function(options, initProps, component)
{
  var optionChangeProp = oj.ValueBinding._ATTRIBUTE_OPTIONCHANGE, 
      optionChangeObs = options[optionChangeProp], oldOptionChangeFunc, newMessages,
      invalidComponentTrackerObs = options[oj.ValueBinding._ATTRIBUTE_INVALID_COMPONENT_TRACKER], 
      items, index, item, matched = -1, newData = {};


  oldOptionChangeFunc = oj.ComponentBinding._toJS(optionChangeObs);
  
  // we don;t push to invalidComponentTracker if the observable is not set.
  if (invalidComponentTrackerObs !== null)
  {
    // Register a default callback for the (oj)'optionChange' event. The callback writes the 
    // validity payload to 'invalidComponentTracker' observable
    if (!oldOptionChangeFunc || oldOptionChangeFunc instanceof Function)
    {
      // The anonymous inner function listener will be delegating to the original listener if there 
      // is one. 
      initProps[optionChangeProp] = function(event, data)
      {
        if (oldOptionChangeFunc)
        {
          oldOptionChangeFunc.call(this, event, data);
        }
        
        // optionChange can be triggered for various options; we are interested in changes to 
        // messages
        if (data['option'] === oj.ValueBinding._ATTRIBUTE_MESSAGES)
        {
          // remove component if it's valid but an entry is present in the tracker or add a new entry 
          // to the invalidComponentTracker
          if (ko.isWriteableObservable(invalidComponentTrackerObs))
          {
            items = ko.utils.unwrapObservable(invalidComponentTrackerObs);
            oj.Assert.assertArray(items);
            newMessages = data['value'];

            $.each(items, function (index, item)
            {
              if (matched < 0 && item['component'] === component)
              {
                matched = index;
                return;
              }
            });

            // add/update/remove from array as the case may be
            if (newMessages)
            {
              newData['component'] = component;
              if (component.call(component, "isValid"))
              {
                newData['valid'] = true;
                if (matched >= 0)
                {
                  invalidComponentTrackerObs.splice(matched, 1, newData);
                }
                else
                {
                  // push component into array
                  invalidComponentTrackerObs.push(newData);
                }
              }
              else
              {
                // if component continues to be invalid
                newData['valid'] = false;
                if (matched >= 0)
                {
                  // update tracker
                  invalidComponentTrackerObs.splice(matched, 1, newData);
                }
                else
                {
                  // add new invalid component to tracker
                  invalidComponentTrackerObs.push(newData);
                }
              }
            }
          }
        }
      };
    }
  }
};

/**
 * ojValue Behavior Definition and Injection
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojValue',
  
  'attributes': [oj.ValueBinding._ATTRIBUTE_INVALID_COMPONENT_TRACKER,
                 oj.ValueBinding._ATTRIBUTE_OPTIONCHANGE],
               
  'init': oj.ValueBinding._init
});

/**
 * Default declaration for ojInputText
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojInputText',
  'use': 'ojValue'
});

/**
 * Default declaration for ojInputNumber
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojInputNumber',
  'use': 'ojValue'
});

/**
 * Default declaration for ojRadioCheckbox
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojRadioCheckbox',
  'use': 'ojValue'
});

oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojRadioset',
  'use': 'ojValue'
});

oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojCheckboxset',
  'use': 'ojValue'
});
/**
 * Default declaration for ojInputDateTime
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojInputDateTime',
  'use': 'ojValue'
});

/**
 * Default declaration for ojInputDate
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojInputDate',
  'use': 'ojValue'
});

/**
 * Default declaration for ojInputTime
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojInputTime',
  'use': 'ojValue'
});

/**
 * Default declaration for ojInputPassword
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojInputPassword',
  'use': 'ojValue'
});

/**
 * Default declaration for ojTextArea
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojTextArea',
  'use': 'ojValue'
});

/**
 * Default declaration for ojCombobox
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojCombobox',
  'use': 'ojValue'
});

/**
 * Default declaration for ojSelect
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojSelect',
  'use': 'ojValue'
});
});
