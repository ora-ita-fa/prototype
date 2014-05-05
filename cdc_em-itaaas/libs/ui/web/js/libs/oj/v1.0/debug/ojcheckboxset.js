define(['ojs/ojcore', 'jquery', 'ojs/ojeditablevalue', 'ojs/ojradiocheckbox'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        */
       function(oj, $)
{

/*!
 * JET Checkboxset @VERSION
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundertion and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Depends:
 *  jquery.ui.widget.js
 */
/**
 * @class
 * @name oj.ojCheckboxset
 * @augments oj.editableValue
 * @classdesc
 * <p>
 * The JET Checkboxset component (ojCheckboxset) enhances a group of <code class="prettyprint">input type="checkbox"</code> elements and 
 * manages the selected values of the group. It also adds and removes the correct
 * oj-* styles to the dom elements so it has the JET styling and is themable.
 * </p>
 * <p>To use an ojCheckboxset, group all the inputs and their labels within a container dom element, e.g., div. 
 *   For accessibility, set <code class="prettyprint">aria-labelledby</code> on this container dom element.
 *   Also set each input's <code class="prettyprint">id</code> attribute, and refer to that in the input's label's <code class="prettyprint">for</code> attribute.
 *   Then create the ojCheckboxset on this container dom element.  
 * </p>
 * <p>
 *  Checkboxset is used by selecting a container element which contains the 
 *  checkbox input elements and calling <code class="prettyprint">ojCheckboxset()</code>. You can enable and disable a checkbox set, 
 *  which will enable and disable all contained checkboxes. 
 * </p>
 * <p>
 *  Checkboxset does not have a readOnly option since HTML does not support
 *  readonly on radios and checkboxes.
 * </p>
 * <h3 id="keyboard-section">
 *   Keyboard interaction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * 
 * <p>The checkboxset does not add any extra keyboard navigation to the input checkboxes. 
 * The keyboard interaction comes from the native browser.
 * </p>
 * <h3 id="a11y-section">
 *   Accessibility
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
 * </h3>
 * 
 * <p>JET Checkboxset takes care of setting <code class="prettyprint">role="group"</code> on the checkboxset element.  
 * 
 * <p>As shown in the online demos, the application is responsible for applying <code class="prettyprint">aria-labelledby</code>
 * to point to the main label element for the group of checkboxes.
 * <h3 id="eventHandling-section">
 *   Event Handling
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#eventHandling-section"></a>
 * </h3>
 * <ul>
 *  <li>optionChange(event, ui) - Type: ojoptionchange
 *  <p>
 *   Triggered if the value changes when the user interacts with the component 
 *   (clicking on one of the checkboxe buttons); or if the value has 
 *   changed programmatically via the value option. 
 *  </li>
 * </ul>
 * <h3 id="jqui2jet-section">
 *   JET for jQuery UI developers
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
 * </h3>
 * 
 * <p>
 *   All JQUI and JET components inherit <code class="prettyprint">disable()</code> and <code class="prettyprint">enable()</code> methods from the base class.  This API 
 *       duplicates the functionality of the <code class="prettyprint">disabled</code> option.  In JET, to keep the API as lean as possible, we 
 *       have chosen not to document these methods outside of this section.
 * </p>
 * <!-- - - - - Above this point, the tags are for the class.
 *              Below this point, the tags are for the constructor (initializer). - - - - - - -->
 * 
 * @desc Creates or re-initializes a JET Checkboxset.  For JET components, re-initing 
 * is generally like a hard refresh, meaning it typically does everything 
 * <code class="prettyprint">refresh()</code> does, plus potentially a bit more. 
 *  For JET Checkboxset, if the DOM changes (for example, you add/remove a checkbox), you should refresh.
 * 
 * <p>Don't confuse the re-initializer with the <code class="prettyprint">option()</code> method, 
 * which (in one overload) also accepts a map of option-value pairs
 * to set on the component, but does not re-init.  
 * 
 * @param {Object=} options a map of option-value pairs to set on the component
 * 
 * @example <caption>Initialize the checkboxset with no options specified:</caption>
 * $(".selector").ojCheckboxset();
 * 
 * @example <caption>Initialize the checkboxset with some options and callbacks specified:</caption>
 * $( ".selector" ).ojCheckboxset( { "value": ["copy"], "valuechange": 
 * function( event, ui ) {alert("valuechanged from " + ui.previousValue + " to " + ui.value);} } );             
 * @example <caption>Initialize component using widget API</caption>
 * &lt;label id="grouplabel">Greetings&lt;/label>
 * &lt;div id="checkboxset" aria-labelledby="grouplabel">
 *   &lt;input id="helloid" value="hello" type="checkbox" name="greetings"/&gt;
 *   &lt;label for="helloid"/&gt;Hello&lt;/label>
 *   &lt;input id="bonjourid" value="bonjour" type="checkbox" name="greetings"/&gt;
 *   &lt;label for="bonjourid"/&gt;Bonjour&lt;/label>
 *   &lt;input id="ciaoid" value="ciao" type="checkbox" name="greetings"/&gt;
 *   &lt;label for="ciaoid"/&gt;Ciao&lt;/label>
 * &lt;div>
 * <br/>
 * // set the value to "ciao". (The 'ciao' checkbox will be checked)
 * $("#checkboxset").ojCheckboxset({'option', 'value', ['ciao']});
 * 
 * @example <caption>Initialize a checkboxset via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;label id="grouplabel">Time&lt;/label>
 * &lt;div id="checkboxset" data-bind="ojComponent: {component: 'ojCheckboxset', value: ['night']} 
 *   aria-labelledby="grouplabel" >
 *   &lt;input id="morningid" value="morning" type="checkbox" name="time"/&gt;
 *   &lt;label for="morningid"/&gt;Morning&lt;/label>
 *   &lt;input id="nightid" value="night" type="checkbox" name="time"/&gt;
 *   &lt;label for="nightid"/&gt;Night&lt;/label>
 * &lt;div>
 * <br/>
  * @example <caption>Using knockout, value bind to observable:</caption>
 * &lt;label id="grouplabel">Time&lt;/label>
 * &lt;div id="checkboxset" data-bind="ojComponent: {component: 'ojCheckboxset', value: currentTime} 
 *   aria-labelledby="grouplabel" >
 *   &lt;input id="morningid" value="morning" type="checkbox" name="time"/&gt;
 *   &lt;label for="morningid"/&gt;Morning&lt;/label>
 *   &lt;input id="nightid" value="night" type="checkbox" name="time"/&gt;
 *   &lt;label for="nightid"/&gt;Night&lt;/label>
 * &lt;div>
 * <br/>
 * // in the model, make the currentTime variable a knockout observable.
 * // The model and the component's value option will stay in sync. Change the
 * // component's value option and the model will change. Change the model,
 * // and the component's value option will change. Click on a checkbox, and both
 * // will change.
 * self.currentTime = ko.observable(["night"]);
 * @constructor
 */
oj.__registerWidget("oj.ojCheckboxset", $['oj']['editableValue'],
{
  version : "1.0.0",  
  defaultElement : "<div>", 
  widgetEventPrefix : "oj", 
  options : 
  {
 
  },
  /**** start Public APIs ****/
      
   /**
   * Refreshes the checkboxset
   * <p>A <code class="prettyprint">refresh()</code> or re-init is required 
   * when a checkboxset is programatically changed, like in the following circumstances:
   * <ul>
   *   <li>After checkboxes are added or removed or modified (without using ojCheckboxset) in the DOM.</li>
   * </ul>    
   * @expose 
   * @memberof! oj.ojCheckboxset
   * @instance
   * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
   * $( ".selector" ).ojCheckboxset( "refresh" );
   */
  refresh: function() 
  {
    this._super();
    // refresh the ojCheckbox's that exist, and  of the type=checkbox inputs that 
    // are not yet ojcheckboxes, make them ojcheckboxes.
    this.$checkboxes = this._findCheckboxesWithMatchingName()
                    .filter( ".oj-checkbox" )
                    ._ojRadioCheckbox("refresh")
                    .end()                  
                    // Create ojCheckbox out of any 'new' checkboxes.

                     // the END is key here. It makes it so that 
                     // this.$checkboxes has ALL the checkboxes.

                     // .not if a filter, it removes elements that do not have the
                     // oj-checkbox style class from the list of all input[type=checkbox]s.
                    .not( ".oj-checkbox" )

                    ._ojRadioCheckbox()
                    .end();
         
    this._setup();
  },
  /**
   * Returns a jQuery object containing the element visually representing the checkboxset. 
   * 
   * <p>This method does not accept any arguments.
   * 
   * @expose
   * @memberof! oj.ojCheckboxset
   * @instance
   * @return {jQuery} the checkbox
  */
  widget : function ()
  {
    return this.uiCheckboxset;
  },
          
   /**** end Public APIs ****/         
          
  /**** start internal widget functions ****/   
       
  /**
   * After _ComponentCreate and _AfterCreate, 
   * the widget should be 100% set up. this._super should be called first.
   * @override
   * @protected
   */
  _ComponentCreate : function ()
  {
    this._super();
    // turn each checkbox into ojCheckbox. Do this first, since we need it
    // in calls from 'create'.
    this.$checkboxes = this._findCheckboxesWithMatchingName()._ojRadioCheckbox();
    this.uiCheckboxset = this.element.addClass("oj-checkboxset oj-component")
                                  .attr( "role", "group" );
    this._on(this._events);
    this._setup();
    
  },
  /**
   * Returns a jquery object that is a set of elements that are input type checkbox
   * and have the name of the first checkbox found.
   * 
   * @return {Object} jquery object of all the checkboxes within the root dom element
   * that have the same 'name' attribute as the first checkbox found.
   * @private
   */
  _findCheckboxesWithMatchingName : function ()

  {
    //return this.element.find('input[type=checkbox]'); // simplest thing to do.
    
    var first = this.element.find("input[type=checkbox]:first");
    if (first.length === 0)
    {
      oj.Logger.warn("Could not find any input type=checkbox within this element");
    }
    // get the name attribute of the first input checkbox
    var name = first.attr("name");
    // find all input checkboxes with matching name
    if (name === undefined)
    {
    	// search for all checkboxes with no name
      var allcheckboxes = this.element.find("input[type=checkbox]");
      // now loop and find the ones without 'name' attribute
      return allcheckboxes.not("[name]");
    }
    else
    {
    	// search for all checkboxes with the name
      var selector = "input[type=checkbox][name=" + name + "]";
      return this.element.find(selector);
    	
    }
  },
  /* 
   * Component developers: This API and functionality is subject to change pending architectural review!
   * See the baseComponent method for preliminary API doc.
   */
  _showContextMenu: function(menu, event)
  {
    // TODO: confirm this logic
    var checkboxes = this.element.find("input[type=checkbox]");
    var checked = checkboxes.filter(":checked");
    var launcher = checked.length ? checked : checkboxes.first(); 
    menu.show(event, {"launcher": launcher, "focus": "menu"});
  },
  _setup: function() 
  {

    // disable checkbox if element was already disabled
    if (this.options.disabled)
    {
      // calls _setOption disable is true, which in turn disables all checkboxs.
      this.disable();
    }
  },   
  _events : 
  {
    'change' : function (event)
    {
      
      this._HandleChangeEvent(event);
    }
  },

  /**
   * @param {Event} event DOM event 
   * @override
   * @protected
   * @memberof! oj.ojCheckboxset
   */
  _HandleChangeEvent: function(event)
  {
    // TODO make sure the target is an input checkbox?
    // TODO any more checks I need to do?
    //alert("XYZ In _changeSetValue target is " + event.target + " And the value of the input is " + event.target.value);

    // should I double check that the event.target is the same as the 'checked'?
    // if (event.target === this.$checkboxes.filter(":checked"))???
    // _SetValue triggers valuechange event
    this._super(event);
  },
                  
  /**
   * Returns the display value that is ready to be passed to the converter.
   * 
   * @param {Object} value the stored value if available that needs to be formatted for display
   * @override
   * @protected
   * @memberof! oj.ojCheckboxset
   */
  _GetDisplayValue : function (value) 
  {
    // return the value of the 'checked' checkboxes
    return this._GetElementValue();
  },
  /**
   * Called when the display value on the element needs to be updated 
   * as a result of a value change. 
   * ojCheckboxset stores an Array value, and this value matches the values
   * of the currently checked checkboxes. So, if we need to set the display value,
   * what this means is we need to 'check' the checkboxes whose values match the
   * displayValue.
   * 
   * @param {String} checkedBoxes of the new string to be displayed
   * @override
   * @protected
   * @memberof! oj.ojCheckboxset
  */  
 _SetDisplayValue : function (checkedBoxes) 
  {
    this.$checkboxes._ojRadioCheckbox("option", "checked", false);
    if (checkedBoxes != null)
    {
      // Uncheck all the checkboxes then iterate through and checkoff any matching checkboxes from the value
      for(var i = 0; i < checkedBoxes.length; i++) {

      var displayValue = checkedBoxes[i];
      var valueFilter = "[value='" + displayValue + "']"; 
      if (valueFilter !== undefined && this.$checkboxes !== undefined)
      {
        var checkboxWithMatchingValue = 
            this.$checkboxes.filter(valueFilter);
        // found a checkbox with a matching value


        if (checkboxWithMatchingValue !== undefined && checkboxWithMatchingValue.length > 0)
        {
          // if not already checked, then mark as checked.
          if (!checkboxWithMatchingValue.prop('checked'))

          {
            checkboxWithMatchingValue._ojRadioCheckbox("option", "checked", true);
          }
        }
      }
      }
      // TODO Do I need to refresh
    } 
  },
  /**
   * Returns the element's value. Normally, this is a call to this.element.val(),
   * but in the case of ojCheckboxset, the element's value is really the value
   * of the checked checkboxes in the set.
   * @override
   * @protected
   * @memberof! oj.ojCheckboxset
   */
  _GetElementValue : function () 
  {
    // "input:checked" selects checkboxes that are currently checked as 
    // reflected in their boolean (true or false) checked property, 
    // which is affected when the user clicks the checkbox for example.
    // for checkbox, there will be one or none checked; 
    // if none are checked, return null (selectedCheckbox.val() is undefined if nothing is checked)
    var checkedValues=new Array();
    var selectedCheckbox = this.$checkboxes.filter(":checked");
    if (selectedCheckbox.length === 0)
      return null;
    else 
    { 
      selectedCheckbox.each(function(){checkedValues.push($(this).val());});
      return checkedValues;
    }
  },
  
  /**
   * Overridden to set the default value for options.value when it's null or undefined.
   * 
   * @memberof! oj.ojCheckboxset
   * @instance
   * @protected
   */  
  _InitOptions : function ()
  {
    var checkboxes, checkedValues = new Array(), selectedCheckbox, result;
    this._super();
    
    if (this.options["value"] == null) // null or undefined
    {
      // return the checked values by looking at DOM nodes
      // TODO: Jeanne review needed
      
      checkboxes = this._findCheckboxesWithMatchingName();
      selectedCheckbox = checkboxes.filter(":checked");
      if (selectedCheckbox.length === 0)
      {
        result = null;
      }
      else 
      { 
        selectedCheckbox.each(function(){
          checkedValues.push($(this).val());
        });
        result = checkedValues;
      }
      this.options["value"] = result;
    }
  },
  
  /**
   * Returns the default styleclass for the component. Currently this is 
   * used to pass to the _ojLabel component, which will append -label and 
   * add the style class onto the label. This way we can style the label
   * specific to the input component. For example, for inline labels, the
   * checkboxset/checkboxset components need to have margin-top:0, whereas all the
   * other inputs need it to be .5em. So we'll have a special margin-top style 
   * for .oj-label-inline.oj-checkboxset-label
   * All input components must override
   * 
   * @return {string}
   * @memberof! oj.ojCheckboxset
   * @override
   * @protected
   */
  _GetDefaultStyleClass : function ()
  {
    return "oj-checkboxset";
  },
  /**
   * Returns a jquery object of the elements representing the content nodes (checkboxes/labels).
   * @protected
   * @override
   * @memberof! oj.ojCheckboxset
   */
  _GetContentElement : function ()
  {
    return this._findCheckboxesWithMatchingName();
  },
  /**
   * Called when a aria-required attribute needs to be set or removed. 
   * Most inputs/selects need aria-required on the input element (aka 'content')
   * But it is not legal to have aria-required on radio/checkboxes.
   * Subclasses can override to put aria-required where they want.
   * 
   * @param {Object=} value the current value of the required option
   * @memberof! oj.ojCheckboxset
   * @instance
   * @protected
   */
  _RefreshAriaRequired : function (value)
  {
    var ariaValue, rootNode = this.uiCheckboxset;

    ariaValue = (value == "required") ? true : false;
    if (ariaValue && rootNode) 
    {
      rootNode.attr("aria-required", ariaValue);
    }
    else
    {
      rootNode.removeAttr("aria-required");
    }
  },
  /**
   * @override
   * @private
   */
  _setOption : function (key, value)
  {
    this._super(key, value);

    if ( key === "disabled" ) {
      // disables all the checkboxs
      this.$checkboxes._ojRadioCheckbox( "option", key, value );
    }
  },
/**
   * Return the subcomponent node represented by the documented locator attribute values.
   * Test authors should target spinner sub elements using the following names:
   * <ul>
   * <li><b>oj-checkboxset-inputs</b>: the checkboxset's input elements</li>
   * </ul>
   * 
   * @expose
   * @override
   * @memberof! oj.ojCheckboxset
   * @instance
   * @param {Object} locator An Object containing at minimum a subId property 
   * whose value is a string, documented by the component, that allows the component to 
   * look up the subcomponent associated with that string.  It contains:
   * <ul>
   * <li>
   * component: optional - in the future there may be more than one component 
   *   contained within a page element
   * </li>
   * <li>
   * subId: the string, documented by the component, that the component expects 
   * in getNodeBySubId to locate a particular subcomponent 
   * </li>
   * </ul>  
   * @returns {Element|null} the subcomponent located by the subId string 
   * passed in locator, if found.
   */
  getNodeBySubId: function(locator)
  {
    if (locator == null)
    {
      return this.element ? this.element[0] : null;
    }
    
    var subId = locator['subId'];
    if (subId === "oj-checkboxset-inputs") {
      return this.$checkboxes;
    }
    
    // Non-null locators have to be handled by the component subclasses
    return null;
  }, 
  /**
   * TODO: What is our 'destroy' strategy with regards to html attributes that 
   * they have initially on their dom, but we change? like disabled? Do we store 
   * on data at the beginning, then restore from this data, and then call removeData?
   * @override
   * @private
   */
  _destroy : function ()
  {  
    this._super();
    // base class removes oj-disabled
    this.element.removeClass("oj-checkboxset oj-enabled oj-component")
                .removeAttr( "role" );
    if (this.$checkboxes)
    {
      this.$checkboxes._ojRadioCheckbox( "destroy" );
    }
  }
  /**** end internal widget functions ****/ 
 
});
});
