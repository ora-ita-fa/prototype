define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojvalidation', 'ojs/ojpopup'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        */
       function(oj, $)
{

/**
 * A messaging strategy that uses an instance of ojPopup component to show and hide messaging content.
 * 
 * @param {Array} displayOptions an array of messaging artifacts displayed in the popup.
 * @constructor
 * @extends {oj.MessagingStrategy}
 * @private
 */
oj.PopupMessagingStrategy = function (displayOptions)
{
  this.Init(displayOptions);
};

/**
 * Registers the PopupMessagingStrategy constructor function with oj.ComponentMessaging. 
 * 
 * @private
 */
oj.ComponentMessaging.registerMessagingStrategy(oj.ComponentMessaging._DISPLAY_TYPE.NOTEWINDOW, 
                               oj.PopupMessagingStrategy);
                               
// Subclass from oj.MessagingStrategy 
oj.Object.createSubclass(oj.PopupMessagingStrategy, oj.MessagingStrategy, "oj.PopupMessagingStrategy");

/**
 * Some defaults to setup on handlers for events that open and close popups by component type
 * @private
 */
oj.PopupMessagingStrategy._DEFAULT_OPEN_EVENTS_BY_COMPONENT_NAME = {
  "ojRadioset": {open: "focusin mouseover", close: "mouseout"},
  "ojCheckboxset": {open: "focusin mouseover", close: "mouseout"},
  "default": {open: "focusin"}
};

/**
 * Initializes the popup messaging strategy.
 *  
 * @param {Array} displayOptions an array of messaging artifacts displayed in the popup.
 * @private
 */
oj.PopupMessagingStrategy.prototype.Init = function (displayOptions) 
{
  oj.PopupMessagingStrategy.superclass.Init.call(this, displayOptions);
};

/**
 * Sets up a tooltip for the component instance using the messaging content provided. 
 * 
 * @param {Object} component widget instance
 * @param {Object} launcher element that laucnhes the messaging popup. 
 * @param {Object} content the messaging content
 * @private
 * 
 */
oj.PopupMessagingStrategy.prototype.activate = function (component, launcher, content)
{
  oj.PopupMessagingStrategy.superclass.activate.call(this, component, launcher, content);
  this._initMessagingPopup();
  
  // Since activate can be called anytime widget is initialized we want to make sure and update its 
  // state
  this.update(content);
};


/**
 * Updates the tooltip content associated to the component instance using the updated messaging 
 * content provided. 
 * 
 * @param {Object} content the messaging content
 * @private
 * 
 */
oj.PopupMessagingStrategy.prototype.update = function (content)
{
  oj.PopupMessagingStrategy.superclass.update.call(this, content);
};

/**
 * Cleans up messages on the component and destroys any widgets it created.
 * 
 * @param {Object} content the messaging content
 * @private
 */
oj.PopupMessagingStrategy.prototype.deactivate = function (content)
{
  var self = this, 
      events = 
        oj.PopupMessagingStrategy._DEFAULT_OPEN_EVENTS_BY_COMPONENT_NAME[this.GetComponent().widgetName] ||
        oj.PopupMessagingStrategy._DEFAULT_OPEN_EVENTS_BY_COMPONENT_NAME["default"];
  //var jRoot = this.GetComponent().widget();
  
  // Remove event handlers setup on launcher
  if (events['open'])
  {
    this.GetLauncher().off(events['open'], self._openPopup);
  }
  
  if (events['close'])
  {
    this.GetLauncher().off(events['close'], self._closePopup);
  }
  this._destroyTooltip();
  oj.PopupMessagingStrategy.superclass.deactivate.call(this, content);
};

oj.PopupMessagingStrategy.prototype.reinitialize = function (newDisplayOptions)
{
  oj.PopupMessagingStrategy.superclass.reinitialize.call(this, newDisplayOptions);
};

/**
 * 
 * @param {Event} event Opens a popup. This handler is called in the context of 
 * the launcher usually the this.element or some relevant node the messaging 
 * popup is associated to.
 * @property {Object} event.data.strategy the strategy object 
 * @private
 */
oj.PopupMessagingStrategy.prototype._openPopup = function (event)
{
  var self = event.data && event.data['strategy'];
  // window.console.log(event.type + " called: tooltip opened");
  var latestContent = self._buildPopupHtml();
  if (self._isPopupInitialized() && latestContent)
  {
    // replace popup messaging content with new content
    self.$messagingContentRoot.empty();
    self.$messagingContentRoot.append(latestContent);
    self.$messagingContentRoot.ojPopup("open", self.GetLauncher());
  }
};

oj.PopupMessagingStrategy.prototype._closePopup = function (event)
{
  // window.console.log(event.type + " called; tooltip closed");
  //$(this).tooltip("disable").tooltip('close');
  var self = event.data && event.data['strategy'];
  self.$messagingContentRoot.ojPopup("close", self.GetLauncher());
};

oj.PopupMessagingStrategy.prototype._handleMouseLeave = function (e)
{
  // needed to turn off default open of tooltip for mouseleave. 
  // window.console.log(event.type + " called: turning off default open of tooltip");
  e.preventDefault();
  e.stopImmediatePropagation(); 
  return false;
};

// Associates the ojPopup component to the messaging content root.
oj.PopupMessagingStrategy.prototype._initMessagingPopup = function ()
{
  var self = this; 
  // TODO: Message tooltip setup needs to be delegated to a MessagingService?
  // Setup default tooltip options on this, as we are a validating element and will likely 
  // display hints, errors
  if (!this._isPopupInitialized())
  {
    var jqLauncher = this.GetLauncher(), popupOptions,
        events = 
          oj.PopupMessagingStrategy._DEFAULT_OPEN_EVENTS_BY_COMPONENT_NAME[this.GetComponent().widgetName] ||
          oj.PopupMessagingStrategy._DEFAULT_OPEN_EVENTS_BY_COMPONENT_NAME["default"];
    
    // 1. associate the ojPopup component to wrapper <div> for popup content, not the launcher.
    // 2. create just wrapper div and track it on component 
    // 3. call open(launcher) on certain events. E.g., focusin.
    // 4. autoDismissal happens automatically when focus leaves component
    
    this.$messagingContentRoot = $(this._getPopupContentHtml());
    // append to body instead of component root as styles set on it can bleed through
    $("body").append(this.$messagingContentRoot);
    popupOptions = {initialFocus: 'none', 
                         tail: 'simple', 
                         autoDismiss: 'focusLoss', 
                         position: {my: 'start bottom', at: 'end top', collision: 'flipfit'}};
               
    this.$messagingContentRoot.ojPopup(popupOptions);
    // this._ojPopupContentNode = this.$messagingContentRoot.parent();
      
    if (events['open'])
    {
      jqLauncher.on(events['open'], {'strategy': self}, self._openPopup);
    }
    if (events['close'])
    {
      jqLauncher.on(events['close'], {'strategy': self}, self._closePopup);
    }
    
    /*
    this._tooltip = jqLauncher.tooltip({
                    position: {
                      'my': 'left+14 bottom', 
                      'at': 'right top', 
                      'of': jqLauncher, 
                      //jqLauncher.find('input[type=radio]:first'), // the element the tooltip will be positioned relative to
                      'using': function(position, feedback) {
                          $(this).css(position);
                          $("<div>")
                          .addClass("arrow")
                          .addClass(feedback['vertical'])
                          .addClass(feedback['horizontal'])
                          .appendTo(this);
                      }
                    },
                    'open': function (event, ui)
                    {
                      //window.console.log("tooltip opened: " + ui.tooltip.attr("id"));
                    },
                    'close' : function (event, ui)
                    {
                      //window.console.log("tooltip closed: ");
                    },
                    'content' : function ()
                    {
                      // called every time tooltip is enabled or open
                      //window.console.log("tooltip content fetch: ");
                      return self._buildNoteWindowHtml();
                    },
                    'items' : jqLauncher
                  }).off("mouseover mouseout")
                    .on("mouseleave", {target: $(this)}, self._handleMouseLeave)
                    .on("focusout", {target: $(this)}, self._hideTooltip)
                    .on("focusin", {target: $(this)}, self._showTooltip);
    */
            /*
            for checkboxes and radio
             
                  }).on("mouseover", {}, self._showTooltip)
                    .on("mouseout", {}, self._hideTooltip)
                    .on("mouseleave", {}, self._handleMouseLeave)
                    .on("focusin", {}, self._showTooltip)
                    .on("focusout", {}, self._hideTooltip)
                    .on("ojoptionchange", {}, self._handleValidityChange);
            */  
           
  }
};

oj.PopupMessagingStrategy.prototype._getPopupContentHtml = function ()
{
  return "" + "<div class='oj-messaging-popup-container'></div>"; 
};

oj.PopupMessagingStrategy.prototype._destroyTooltip = function ()
{
  if (this._isPopupInitialized())
  {
    if (this.$messagingContentRoot)
    {
      this.$messagingContentRoot.ojPopup("destroy");
      this.$messagingContentRoot.remove();
    }
  }
};

/**
 * Returns the content to show inside popup.
 * @private
 * @return {String|string} content
 */
oj.PopupMessagingStrategy.prototype._buildPopupHtml = function ()
{
  var nwHtml = "", component = this.GetComponent(), jDocument = component.document, 
          document = jDocument[0], nwContent = [], addSeparator = false, that = this; 
  
  if (this.ShowMessages()) 
  {
    nwContent.push(this._buildMessagesHtml());
  }
  
  if (this.ShowConverterHint() || this.ShowValidatorHint())
  {
    nwContent.push(this._buildHintsHtml(document));
  }
  if (this.ShowTitle())
  {
    nwContent.push(this._buildTitleHtml(document));
  }
  
  // TODO: Add support for shortDesc, instrcution text etc.
  $.each(nwContent, function(i, content) 
    {
      if (content)
      {
        if (addSeparator)
        {
          nwHtml = nwHtml.concat(that._getSeparatorHtml(document));
        }
        else
        {
          addSeparator = true; 
        }
        
        nwHtml = nwHtml.concat(content);
      }
    });
    
  return nwHtml;
};

/**
 * Returns the content to show inside tooltip.
 * @private
 * @return {string} content
 */
oj.PopupMessagingStrategy.prototype._buildMessagesHtml = function ()
{
  var messages, content = "", i, j, severity, severityStr,severityLevel,
          message, maxSeverity = this.GetMaxSeverity(), summary, detail, messageObj, 
          messagesByTypes={}, messagesByType = [];

  if (this.HasMessages())
  {
    messages = this.GetMessages();
    
    // Step1: build an indexed array of messages by severity level.
    for (i = 0; i < messages.length; i++)
    {
      message = messages[i];
      
      if (!(message instanceof oj.Message))
      {
        messageObj = new oj.Message(message['summary'], message['detail'], message['severity']);
      }
      else
      {
        messageObj = message;
      }
      
      severityLevel = oj.Message.getSeverityLevel(messageObj['severity']);
      if (!messagesByTypes[severityLevel])
      {
        messagesByTypes[severityLevel] = [];
      }
      
      messagesByTypes[severityLevel].push(messageObj);
    }
    
    // Step 2: starting with maxSeverity level build messages with decreasing severity
    for (i = maxSeverity; i >= oj.Message.SEVERITY_LEVEL['CONFIRMATION']; i--)
    {
      messagesByType = messagesByTypes[i] || [];
      
      for (j = 0; j < messagesByType.length; j++)
      {
        message = messagesByType[j];
        oj.Assert.assertPrototype(message, oj.Message);

        severityLevel = oj.Message.getSeverityLevel(message['severity']);
        severityStr = this._getSeverityTranslatedString(severityLevel);
        summary = message['summary'] || severityStr;
        // if detail is empty we don't care to duplicate summary
        detail = message['detail'] || "";
        
        // build message dom
        // (x) <Summary Text>
        // <Detail Text>
        
        content = content.concat("<div class='oj-message'>")
                         .concat("<span class='" + this._getSeverityIconSelector(severityLevel) + 
                                      "' title='" + severityStr + "' role='img'></span>")
                         .concat("<span class='oj-message-content'>")
                         .concat("<div class='oj-message-summary'>" + summary + "</div>");
        if (detail)
        {
          content = content.concat("<div class='oj-message-detail'>" + detail + "</div>");
        }
        
        content = content.concat("</div>"); // end of oj-message
      }
    }
  }  
  return content;
};

/**
 * @param {Document} document
 * @return {string} html content for all hints.
 * @private
 */
oj.PopupMessagingStrategy.prototype._buildHintsHtml = function (document)
{
  var hints = [], jHintsDom, i;
  if (this.ShowConverterHint())
  {
    hints = hints.concat(this.GetConverterHint());
  }
  if (this.ShowValidatorHint())
  {
    hints = hints.concat(this.GetValidatorHints());
  }
  
  if (hints && hints.length > 0)
  {
    jHintsDom = $(document.createElement("div"));
    jHintsDom.addClass("oj-form-control-hint");
    // AdfDomUtils.addCSSClassName(hDom, AdfDhtmlEditableValuePeer._NOTE_WINDOW_HINT_TEXT_STYLE_CLASS);
    
    for(i = 0; i < hints.length;i++) 
    {
      jHintsDom.append(this._getHintDom(document, hints[i]));
    }
  }
  
  return jHintsDom ? jHintsDom.get(0).outerHTML : "";
};

oj.PopupMessagingStrategy.prototype._buildTitleHtml = function (document)
{
  var title = this.GetTitle(), jTitleDom;
  if (title)
  {
    jTitleDom = $(document.createElement("div"));
    jTitleDom.addClass("oj-form-control-title");
    jTitleDom.append(this._getHintDom(document, title));
  }
  
  return jTitleDom ? jTitleDom.get(0).outerHTML : "";
};

oj.PopupMessagingStrategy.prototype._getHintDom = function(document, hintText) 
{
  var jHintDom = null;
  // 
  if (oj.DomUtils.isHTMLContent(hintText)) 
  {
    jHintDom = oj.DomUtils.cleanHtml(hintText.substring(6, hintText.length - 7));
  }
  else 
  {
    jHintDom = $(document.createElement("div"));
    jHintDom.text(hintText);
    jHintDom = jHintDom.get(0);
  }
    
  return jHintDom;
}; 

oj.PopupMessagingStrategy.prototype._getSeparatorHtml = function (document)
{
  var jSeparatorDom; 
  jSeparatorDom = $(document.createElement("hr"));
  
  return jSeparatorDom ? jSeparatorDom.get(0).outerHTML : "";
};


oj.PopupMessagingStrategy.prototype._getSeverityTranslatedString = function (severity)
{
  var sevTypeStr;
  // get the translated string for the severity
  switch (severity)
  {
    case oj.Message.SEVERITY_LEVEL['FATAL']:
      sevTypeStr = oj.Translations.getTranslatedString('oj-message.fatal');
      break;
    case oj.Message.SEVERITY_LEVEL['ERROR']:
      sevTypeStr = oj.Translations.getTranslatedString('oj-message.error');
      break;
    case oj.Message.SEVERITY_LEVEL['WARNING']:
      sevTypeStr = oj.Translations.getTranslatedString('oj-message.warning');
      break;
    case oj.Message.SEVERITY_LEVEL['INFO']:
      sevTypeStr = oj.Translations.getTranslatedString('oj-message.info');
      break;
    case oj.Message.SEVERITY_LEVEL['CONFIRMATION']:
      sevTypeStr = oj.Translations.getTranslatedString('oj-message.confirmation');
      break;
  }
  
  return sevTypeStr;
  
};

oj.PopupMessagingStrategy.prototype._getSeverityIconSelector = function (severity)
{
  var sevIconStr;
  // get the icon selector for the severity
  switch (severity)
  {
    case oj.Message.SEVERITY_LEVEL['FATAL']:
      sevIconStr = 'oj-message-error-icon';
      break;
    case oj.Message.SEVERITY_LEVEL['ERROR']:
      sevIconStr = 'oj-message-error-icon';
      break;
    case oj.Message.SEVERITY_LEVEL['WARNING']:
      sevIconStr = 'oj-message-warning-icon';
      break;
    case oj.Message.SEVERITY_LEVEL['INFO']:
      sevIconStr = 'oj-message-info-icon';
      break;
    case oj.Message.SEVERITY_LEVEL['CONFIRMATION']:
      sevIconStr = 'oj-message-confirmation-icon';
      break;
  }
  
  return "oj-widget-icon" + " " + sevIconStr;
};

oj.PopupMessagingStrategy.prototype._isPopupInitialized = function ()
{
  return (this.$messagingContentRoot) ? 
    this.$messagingContentRoot.is(":oj-popup") : false;
};


/**
 * @class
 * @abstract
 * @name oj.editableValue
 * @augments oj.baseComponent
 * 
 * @description Abstract base class for all editable components that are value holders. Any 
 * component that provides 'value' option to set/get the value(s) will extend from this class. <p>
 * 
 * @example <caption>Initialize component value using options</caption>
 * &lt;input id="foo" type="text"/&gt;
 * &lt;script&gt;
 * &nbsp;&nbsp;$('#foo").ojInputText({'value': 'abc'});
 * &lt;/script&gt;
 * // using knockout ojComponent binding
 * &lt;input id="foo" data-bind="ojComponent: {component: 'ojInputText', value: 'abc'}"/&gt;
 * @example <caption>Initialize component value using ko observable</caption>
 * &lt;input id="foo" data-bind="ojComponent: {component: 'ojInputText', value: salary}"/&gt;
 * &lt;script&gt;
 * &nbsp;&nbsp;var salary = ko.observable('abc');
 * &lt;/script&gt;
 * @example <caption>Initialize component value using element value</caption>
 * &lt;input id="foo" data-bind="ojComponent: {component: 'ojInputText'}" value='abc'/&gt;
 * 
 * @constructor
 */
oj.editableValue = $.widget('oj.editableValue', $['oj']['baseComponent'], 
/** @lends oj.editableValue.prototype */
{
  widgetEventPrefix: "oj",
  
  options: 
  {
    /** 
     * a converter instance, where each instance duck types oj.Converter, or an converter object 
     * literal containing the following name value pair. 
     * <ul>
     *   <li><i>type</i>: the string conveter type registered with the ConverterFactory. Supported 
     *   types are 'number' and 'datetime'</li>
     *   <li><i>options</i>: an optional Object literal of options that the converter expects.</li>
     * </ul>
     * 
     * If the converter option changes after the component has been initialized then <br/>
     * - if the component is valid, the value option is formatted using the new converter instance and the 
     *   display updated with the new value.<br/>
     * - otoh, if the component is invalid when the converter option changed, it is the 
     * responsibility of the page author to clear messages on the component and reset the value if 
     * needed.<br/>
     * 
     * @example <caption>Initialize the component with converter object literal:</caption>
     * $(".selector").ojInputText({
     *   value: 25000,
     *   converter: {
     *     type: 'number', 
     *     options : {
     *       style: 'currency', 
     *       currency: 'USD', 
     *       maximumFractionDigits: 0
     *     }
     *   }
     * });
     * 
     * @example <caption>Initialize the component with a number converter instance:</caption>
     * // Initialize converter instance using currency options
     * var options = {style: 'currency', 'currency': 'USD', maximumFractionDigits: 0};
     * var numberConverterFactory = oj.Validation.converterFactory("number");
     * var salaryConverter = numberConverterFactory.createConverter(options);<br/>
     * // set converter instance using converter option
     * $(".selector").ojInputText({
     *   value: 25000, 
     *   converter: salaryConverter
     * });
     * 
     * @expose 
     * @access public
     * @instance
     * @memberof! oj.editableValue
     * @type {string|Object|undefined}
     */    
    converter: undefined,

    /** 
     * whether the component is disabled. 
     *  
     * <p>The 2-way <code class="prettyprint">disabled</code> binding offered by 
     * the <code class="prettyprint">ojComponent</code> binding 
     * should be used instead of Knockout's built-in <code class="prettyprint">disable</code> 
     * and <code class="prettyprint">enable</code> bindings, 
     * as the former sets the API, while the latter sets the underlying DOM attribute.
     * 
     * @example <caption>Initialize component with <code class="prettyprint">disabled</code> option:</caption>
     * $(".selector").ojInputText({"disabled": true});
     * 
     * @expose 
     * @type {?boolean|undefined}
     * @default <code class="prettyprint">false</code>. The element's disabled property is used as 
     * its initial value if it exists, when the option is not explicitly set. When neither is set, 
     * disabled defaults to false.
     * @public
     * @instance
     * @memberof! oj.editableValue
     */
    disabled: undefined,
    
    /**
     * The help information that goes on the label. When help is set on the input component, then 
     * help information is added to the input's label. The help options are:
     * <ul>
     * <li>definition - this is the help definition text. It is what shows up
     * when the user hovers over the label or the help icon.</li>
     * <li>source - this is the help source url. If present, a help icon will
     * render next to the label and the anchor's target is this source.
     * </ul>
     * 
     * @expose 
     * @memberof! oj.editableValue
     * @instance
     * @type {Object.<string, string>}
     * @default <code class="prettyprint">{ "definition":"some help definition, "source":"some external url" }</code>
     * 
     * @example <caption>Initialize the input with the help definition and external url information:</caption>
     * $( ".selector" ).ojRadioset({ "help": {"definition":"some help definition, "source":"some external url" } });
     * 
     * @example <caption>Set the <code class="prettyprint">help</code> option, after initialization:</caption>
     *
     * // setter
     * $( ".selector" ).ojRadioset( "option", "help", {"definition":"fill out the name", "source":"http:\\www.oracle.com" } );
     */
    help: {definition: null, source: null},
    
    /** 
     * an array of messages for this component, each instance of type oj.Message or an object that 
     * duck types it. 
     * 
     * @example <caption>Get the current set of <code class="prettyprint">messages</code> for the component:</caption>
     * var messages = $(".selector").ojInputText("option", "messages");
     * 
     * @example <caption>Clear all messages set on the component:</caption>
     * $(".selector").ojInputText("option", "messages", []);
     * 
     * @example <caption>Add a message (of default error severity) to the component using the <code class="prettyprint">messages</code> option:</caption>
     * var msgs = [];
     * msgs.push({'summary': 'Error Summary', 'detail': 'Error Detail'}); 
     * $(".selector").ojInputText("option", "messages", msgs);
     * 
     * @example <caption>Set a <code class="prettyprint">oj.Message</code> instance to the component:</caption>
     * var message = new oj.Message("summary text", "detail text");
     * var messagesArr = [message];
     * $(".selector").ojInputText("option", "messages", messagesArr);
     * 
     * @expose 
     * @access public
     * @instance
     * @memberof! oj.editableValue
     * @default initializes to an empty array when no option is set.
     * @type {Array|undefined}
     */    
    messages : undefined,

    /**
     * an Object literal containing the following property-value pairs, that allows a widget to specify 
     * how it wants various 'messaging artifacts' to be displayed in relation to itself. <br/>
     * Accepted values for the key is a string type of the messaging artifact and they include 
     * 'messages', 'converterHint', 'validatorHint', 'title'. <br/>
     * The value is either an array of display options or a string display option. When an array of 
     * display options is specified the first display option is used first and then the second as 
     * fallback and so on. NOTE: In the future we plan to support additional display options like 
     * 'inline'. 
     * <br/>
     * 
     * 
     * @property {string=} converterHint - supported values are 'placeholder', 'notewindow', 'none'. 
     * E.g. {'converterHint': ['placeholder', 'notewindow']}
     * @property {string=} validatorHint - supported values are 'notewindow', 'none'. 
     * E.g. {'validatorHint': ['notewindow']}
     * @property {string=} messages - supported values are 'notewindow', 'none'. 
     * E.g. {'messages': 'notewindow'}
     * @property {string=} title - supported values are 'notewindow', 'none'. 
     * E.g. {'title': 'notewindow'}
     * 
     * @example <caption>Initialize component and override default for converterHint using <code class="prettyprint">messagingDisplayOptions</code>:</caption>
     * // Only messages will get shown in the notewindow associated to this component
     * $(".selector").ojInputText("option", "messagingDisplayOptions", {
     *   'converterHint': ['notewindow'] // the default is ['placeholder', 'notewindow']
     * });
     * 
     * @expose 
     * @access public
     * @instance
     * @default <code class="prettyprint">
     * {
     *   'messages': ['notewindow'], 
     *   'converterHint': ['placeholder', 'notewindow'], 
     *   'validatorHint': ['notewindow'], 
     *   'title': ['notewindow']
     * }</code>
     * @memberof! oj.editableValue
     * @type {Object|undefined}
     */
    messagingDisplayOptions : undefined,
    
    /** 
     * whether the component is required. Allowed values for required are 
     * 'required' and 'optional', 'optional' being the default.<br/>
     * 
     * When required option is set, the input's label will render a required icon. <br/>
     * When required option is set, a required validator - (@link oj.RequiredValidator) - is 
     * implicitly used. If an explicit required validator is set using the validators option then 
     * that gets used instead.
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">required</code> option:</caption>
     * $(".selector").ojInputNumber({required: 'required'});<br/>
     * @example <caption>Initialize <code class="prettyprint">required</code> otpion from html attribute 'required':</caption>
     * &lt;input type="text" value= "foobar" required/><br/>
     * // reading the required option will return "required"
     * $(".selector").ojInputNumber("option", "required");<br/>
     * 
     * @example <caption>Using <code class="prettyprint">required</code> option and setting an explicit required validator:</caption>
     * &lt;input type="text" value="foobar" required data-bind="ojComponent: {
     *   component: 'ojInputText', 
     *   value: password, 
     *   validators: [{type: 'required', options : {
                               messageSummary: '\'{label}\' Required', 
                               messageDetail: 'A value is required for this field'}}]}"/>
     * @expose 
     * @access public
     * @instance
     * @default when the option is not set, the element's required property is used as its initial 
     * value if it exists.
     * @memberof! oj.editableValue
     * @type {string|undefined}
     */
    required: undefined,
    
    /** 
     * represents advisory information for the component, such as would be appropriate for a tooltip. 
     * 
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">title</code> option:</caption>
     * &lt;input id="username" type="text" data-bind="
     *    ojComponent: {component: 'ojInputText', title : 'enter at least 3 alphanumeric characters', 
     *                  pattern: '[a-zA-Z0-9]{3,}', value: ''}"/><br/>
     * 
     * @example <caption>Initialize <code class="prettyprint">title</code> option from html attribute 'title':</caption>
     * &lt;input id="username" type="text" value= "foobar" title="enter at least 3 alphanumeric characters" 
     *           pattern="[a-zA-Z0-9]{3,}"/><br/>
     * $("#username").ojInputText({});
     * 
     * // reading the title option will return "enter at least 3 alphanumeric characters"
     * $("#username").ojInputText("option", "title");<br/>
     * 
     * @expose 
     * @access public
     * @instance
     * @default when the option is not set, the element's title attribute is used as its initial 
     * value if it exists. 
     * @memberof! oj.editableValue
     * @type {string|undefined}
     */    
    title: undefined,
    
    /**
     * This option allows setting HTML5's placeholder attribute. Though it is possible to set 
     * placeholder attribute on the element itself, the component will only read the value during 
     * creation time; meaning any subsequent changes to the element's placeholder attribute will 
     * not be picked up.
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">placeholder</code> option:</caption>
     * &lt;input id="userId" data-bind="ojComponent: {component: 'ojInputText', placeholder: 'User Name'}" /&gt;
     * 
     * @example <caption>Initialize <code class="prettyprint">placeholder</code> option from html attribute:</caption>
     * &lt;input id="userId" data-bind="ojComponent: {component: 'ojInputText'}" placeholder="User Name" /&gt;
     * 
     * // reading the placeholder option will return "User Name"
     * $(".selector").ojInputText("option", "placeholder");<br/>
     * 
     * @expose 
     * @access public
     * @instance
     * @default when the option is not set, the element's placeholder attribute is used if it exists. 
     * If the attribute is not set then the default can be a converter hint. See 
     * messagingDisplayOptions for details.
     * @memberof! oj.editableValue
     * @type {string|undefined}
     */    
    placeholder: undefined,
    
    /** 
     * an array of validator instances, where each instance duck types oj.Validator, or an array of 
     * validator object literals where each object contains the following name value pairs. 
     * <ul>
     *   <li><i>type</i>: a string validator type that is registered with the oj.ValidatorFactory. 
     *   An instance is created using the factory method on @link oj.ValidatorFactory. </li>
     *   <li><i>options</i>: an optional Object literal of options that the validator expects.</li>
     * </ul>
     * After the component has been initialized with validators, changing the validators on the 
     * component can present issues that need to addressed appropriately <br/>
     * - if the component is valid, the current value that passed validations before may now start 
     * failing. E.g, if value was below a certain max value but a new validator lowered the max 
     * value, invalidating the current value. In such cases the page author has the option of 
     * calling the validate() method to re-run validators against the current value. In some cases 
     * it may be necessary to re-initialize the component.<br/>
     * - if the component was invalid when the validators changed, again it may be necessary to 
     * for the page author to clear messages on the component, or in some cases re-initialize the 
     * component might be necessary.<br/>
     * 
     * @example <caption>Initialize the component with validator object literal:</caption>
     * $(".selector").ojInputNumber({
     *   validators: [{
     *     type: 'numberRange', 
     *     options : {
     *       hint: {hintMinimum: 'Enter a value greater than '{min}'}, 
     *       min: 100
     *     }
     *   }],
     * });
     * NOTE: oj.Validation.validatorFactory('numberRange') returns the validator factory that is used 
     * to instantiate a numberRange validator.
     * 
     * @example <caption>Initialize the component with multiple validator instances:</caption>
     * var validator1 = new MyCustomValidator({'foo': 'A'}); 
     * var validator2 = new MyCustomValidator({'foo': 'B'});
     * $(".selector").ojInputNumber({
     *   value: 10, 
     *   validators: [validator1, validator2]
     * });
     * 
     * @expose 
     * @access public
     * @instance
     * @memberof! oj.editableValue
     * @type {Array|undefined}
     */    
    validators: undefined,
    
    /** 
     * The value of the editable component. 
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">value</code> option specified:</caption>
     * $(".selector").ojInputNumber({'value': 10});<br/>
     * @example <caption>Get or set the <code class="prettyprint">value</code> option, after initialization:</caption>
     * // Getter: returns 10
     * $(".selector").ojInputNumber("option", "value");
     * // Setter: sets 20
     * $(".selector").ojInputNumber("option", "value", 20);
     * 
     * @expose 
     * @access public
     * @instance
     * @default When the option is not set, the element's value property is used as its initial value 
     * if it exists. The type of value is as defined by the component that extends this class. Refer 
     * to specific components for defaults.
     * @memberof! oj.editableValue
     * @type {Object|undefined}
     */
    value: undefined,
    
    // Events
    /**
     * Triggered when the following component options change. 
     * <ul>
     * <li><strong>messages</strong>: a component's validity changes when its messages changes. For example - <br/>
     *   <ul>
     *     <li>when it goes from valid with no messages, to invalid with messages (of severity fatal 
     *      or error), or to valid with messages (of severity warning, info or confirmation). </li>
     *      <li>when it goes from valid with messages, to valid with a new set of messages, or to 
     *        valid with no messages, or to invalid with messages</li>
     *      <li>when it goes from invalid with messages, to invalid with new set of messages, or to 
     *      valid with no messages, or to valid with messages (of severity warning or lower). </li>
     *   </ul>
     * </li>
     * <li><strong>value</strong>: when the component's value changes. </li>
     * </ul>
     * <p>The event payload has the following properties - </p>
     * @property {Event} event <code class="prettyprint">jQuery</code> event object
     * @property {Object} data event payload
     * @property {string} data.option the name of the option that changed, i.e. "messages" or "value"
     * @property {Object} data.previousValue - an Object holding the previous value of the option
     * @property {Object} data.value - an Object holding the current value of the option
     * @property {Object} data.optionMetadata - an Object literal that provides metadata for the option. 
     * 
     * @example <caption>Initialize the ojInputText component with the <code class="prettyprint">optionChange</code> callback to be notified of changes to the component's validity</caption>
     * $(".selector").ojInputText({
     *   'optionChange': function (event, data) {} 
     * });
     * @example <caption>Bind an event listener to the ojoptionchange event</caption>
     * $(".selector").on({
     *   'ojoptionchange': function (event, data) {
     *       window.console.log("option changing is: " + data['option']);
     *   };
     * });
     * 
     * @memberof! oj.editableValue
     * @expose
     * @event 
     * @access public
     * @instance
     *
     */
    optionChange: undefined

	},
  
  // P U B L I C    M E T H O D S
  // value() as a public method is not required to be supported. Customers will use the 'option' 
  // method to set the value instead
  
  /**
   * Reacts to changes to the 'value' or 'messages' option by triggering a 'optionChange' event if 
   * the value changes from its previous value. Refer to the optionChange event for details.
   * 
   * @param {String|Object|string=} key a single string representing a key or an object representing a group 
   * of options
   * @param {Object=} value of the key
   * @fires oj.editableValue#optionChange
   */
  option : function (key, value)
  {
    var retVal, previousValue, previousMsgs, previousMsgDisplay, valueOptionSet = false, newValue, 
        originalEvent, messagesOptionSet = false, deleteSpecialEventKey = false, 
        refreshMessagingOptions = true, placeholderOptionSet = false;
    
    // an explicit key or key/value is passed in.
    if (typeof key === "string" && value !== undefined)
    {
      switch (key)
      {
        case "value":
          valueOptionSet = true;
          previousValue = this.options['value'];
          break;
          
        case "messages":
          messagesOptionSet = true;
          previousMsgs = this.options['messages'] || [];
          break;
          
        case "messagingDisplayOptions":
          previousMsgDisplay = $.extend({}, this.options['messagingDisplayOptions']);
          break;
          
        case "placeholder" :
          placeholderOptionSet = true;
          break;           
      }
    }
    // an object literal of key...values is passed in - ('option', {key: value, key2: value2})
    else if (typeof key === "object")
    {
      if (key)
      {
        if (key['value'] !== undefined)
        {
          valueOptionSet = true;
          previousValue = this.options['value'];
          deleteSpecialEventKey = true;
        }
      
        if (key["messages"] !== undefined)
        {
          messagesOptionSet = true;
          previousMsgs = this.options['messages'];
          deleteSpecialEventKey = true;
        }
        
        // messagingDisplayOptions - 
        if (key['messagingDisplayOptions'])
        {
          previousMsgDisplay = $.extend({}, this.options['messagingDisplayOptions']);
          // key['messagingDisplayOptions'] = $.extend(previousMsgDisplay, key['messagingDisplayOptions']);
        }
        
        if (key['placeholder'])
        {
          placeholderOptionSet = true;
          refreshMessagingOptions = key['_oj_messaging_update'] ? false : true;
          delete key['_oj_messaging_update']; // remove before call to _super
          
        }
        
        if (deleteSpecialEventKey)
        {
          // _SetValue passes a special key for the event, which needs to be removed.
          originalEvent = key['_oj_originalEvent'];
          delete key['_oj_originalEvent']; // remove before call to _super
        }
      }
    }
    
    // Step 2: call the super to set the option 
    retVal = this._superApply(arguments);
    
    // Step 3: trigger events if needed
    if (valueOptionSet)
    {
      newValue = this.options['value'];
      // trigger a optionChange event only when the newValue is different from the previousValue to 
      // avoid recursion. E.g., setOption() triggers optionChange, which calls ko binding callback, 
      // which then writes to observable. Which then causes binding update to call set option again
      if (!this._ValueEquals(previousValue, newValue))
      {
        this._TriggerOptionChange('value', previousValue, originalEvent || null);
      }
    }
    
    if (messagesOptionSet)
    {
      if (!this._messagesEquals(previousMsgs, this.options['messages']))
      {
        this._TriggerOptionChange('messages', previousMsgs, originalEvent || null);
      }
    }
    
    if (placeholderOptionSet)
    {
      if (refreshMessagingOptions)
      {
        // if placeholder was set and it's not from messaging code, then the messaging preferences 
        // will need to re-evaluated. E.g., the default display for 
        // converterHint: ['placeholder', 'notewindow'] is 'placeholder', and if user were to set a 
        // custom placeholder, this overrides the default display for convererHint from 'placeholder'
        // to 'notewindow'. 
        this.__customPlaceholderSet = true;
        this._initComponentMessaging();
      }
      else
      {
        this.__customPlaceholderSet = false;
      }
    }
    
    return retVal;
  },

          
  /**
   * whether the component is currently valid. 
   * @example <caption>Check whether the component is valid:</caption>
   * var value = $(".selector").ojInputText("isValid");
   * @returns {boolean}
   * @access public
   * @instance
   * @expose
   * @memberof! oj.editableValue
   */
  isValid : function ()
  {
    return this.__valid;
  },
  
  /**
   * Called typically when the DOM underneath the component has changed requiring a re-render 
   * of the component, but also when some external condition impacts the rendering of the component,
   * e.g., when the locale for the page change, a component using a converter or translations will 
   * need to be refreshed. <br/>
   * This method override refreshes the component display value to the option value. When the 
   * component was previously invalid it is important to clear the messages explicitly., before 
   * calling refresh.
   * 
   * @example <caption>Clear messages and refresh component.</caption>
   * $(selector).ojInputText("option", "messages", []); <br/>
   * $(selector).ojInputText("refresh");
   * component 
   * @access public
   * @instance
   * @expose
   * @memberof! oj.editableValue
   */
  refresh : function ()
  {
    this._super();
    this._doRefresh(true);
  },
  
  /**
   * A convenience method to validate the option value after it is set programmatically using the 
   * option setter. <br/>
   * 
   * When the value property is set, it's expected to be of the correct type as defined by 
   * the component. To run the value through the validators, this method can be called. When there 
   * are no validators setup for the component this method is a no-op and returns true.
   * When there is at least one validator the first one that fails, updates the component validity, 
   * adds messages and triggers the optionChange event. <br/>
   * Callers should explicitly clear messages when calling this method.
   * 
   * @example <caption>Validate the <code class="prettyprint">value</code> option.</caption>
   * // set value
   * $(.selector).ojInputDate('option', 'value', new Date());
   * // clear current messages on component
   * $(.selector).ojInputText('option', 'messages', []);
   * // validate value. validation errors are displayed if any based on the messagingDisplayOptions.
   * $(.selector).ojInputText('validate');
   * 
   * @param {boolean} requiredOnly If true only runs the required-ness check.
   * 
   * @access public
   * @expose
   * @instance
   * @memberof! oj.editableValue
   */
  validate : function (requiredOnly)
  {
    var newValue, mode = requiredOnly ? this._VALIDATION_MODE.REQUIRED_VALIDATOR_ONLY : 
            this._VALIDATION_MODE.VALIDATORS_ONLY;
    
    // Callers would use the messages option to clear existing messages, before calling validate(). 
    // component("option", "messages", []);
    newValue = this._doRunValidation(this.options['value'], undefined, mode);
    if (!this.isValid())
    {
      return false;
    }
    
    return true;
  },   
    
  // P R O T E C T E D    C O N S T A N T S   A N D   M E T H O D S

  // *********** START WIDGET FACTORY METHODS (they retain _camelcase naming convention) **********
  
  /**
   * Validation mode specifying the kind of validation that gets run.
   * @protected
   * @memberof! oj.editableValue
   * @const
   */       
  _VALIDATION_MODE : {FULL : 1, VALIDATORS_ONLY : 2, REQUIRED_VALIDATOR_ONLY : 3, NONE : 4},

  /**
   * Initializes options defined by this base class.
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _ComponentCreate : function ()
  {
    var node = this.element, 
        attrsToRemove = ["required", "title"], //remove attributes that trigger html5 validation + 
                                               // inline bubble
        savedAttributes = this._GetSavedAttributes(node); 
    
    this._super();
    
    // update element DOM for disabled
    if (typeof this.options['disabled'] === "boolean")
    {
      node.prop("disabled", this.options['disabled']);
    }
    
    // we do this here instead of in _InitOptions because here we have the final value.
    if (this.options['placeholder'])
    {
      // a custom placeholder has been set; remember it because if none is set messaging sets a 
      // default placeholder
      this.__customPlaceholderSet = true;
    }
    
    // remove html5 validation attributes 
    $.each(attrsToRemove, function (index, value)
    {
      if (value in savedAttributes)
      {
        node.removeAttr(value);
      }
    });
  },
  
  /**
   * The value option alone is initialized here since it requires the component to be fully
   * created. Calling this.options.value before this method does not guarantee the correct 
   * value to be returned.
   *
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _AfterCreate : function ()
  {
    this._super();
    
    // decorate the label
    this._createOjLabel();
    
    // refresh value, theming and aria attributes
    this._doRefresh(false);

    // initialize component messaging
    this._initComponentMessaging();
   
    this._TriggerOptionChange('messages', this.options['messages'], null);
    this.widget().addClass("oj-form-control");
  },
          
  
  /**
   * Detaches the widget from the element and restores element exactly like it was before the widget 
   * was attached.
   * @protected
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * 
   */
  _destroy : function ()
  {
    var widget = this.widget();
    
    this._clearMessages(undefined, true);
    this._getComponentMessaging().deactivate(this._getMessagingContent());
    // remove all selectors added to the widget
    $.each(this._OPTION_TO_CSS_MAPPING, function() { 
        widget.removeClass(this.toString());
      });
    widget.removeClass("oj-form-control");
    // remove all aria attributes added to the element  
    this.element.removeAttr("aria-required");
    if (this.$label)
    {
      this.$label._ojLabel( "destroy" );
    }
    return this._super();
  },
          
  /**
   * Called (by the widget factory) when the option changes, this method responds to the change 
   * by refreshing the component if needed. This method is not called for the options passed in 
   * during the creation of the widget.
   * 
   * @param {string} name of the option
   * @param {Object|string} value 
   * 
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _setOption : function (name, value) 
  {
    var retVal = this._superApply(arguments), shouldRefresh = true, hasMessages, maxLevel = 0;
    switch(name)
    {
      case "converter":
        // When the converter changes clear the cached converter instance.
        this.__converter = null;
        
        // also update messagingstrategy as hint associated with converter could have changed
        this._getComponentMessaging().update(this._getMessagingContent(this.__MESSAGING_CONTENT_UPDATE_TYPE.CONVERTER_HINT));
        // shouldRefresh = true; we want component to refresh its display value using new converter
        break;
      
      case "validators":
        // Clear the cached normalized list of all validator instances
        this._ResetAllValidators();
        shouldRefresh = false;
        break;
        
      case "messages":
        
        // When new messages are written determine component validity and severity and update 
        // component messaging
        hasMessages = value && value.length !== 0;
        // When messages are cleared reset component validity
        if (!hasMessages)
        {
          // options.messages is empty; 
          this.__maxSeverityLevel = 0;
          this.__valid = true;
        }
        else 
        {
          // clear current max severity 
          this.__maxSeverityLevel = 0;
          maxLevel = this._getMaxSeverity();
          
          // determine new valid state
          if (maxLevel >= oj.Message.SEVERITY_LEVEL['ERROR'])
          {
            this.__valid = false;
          }
          else
          {
            this.__valid = true;
          }
        }
        
        this._getComponentMessaging().update(this._getMessagingContent());
        break;
        
      case "messagingDisplayOptions" :
        // clear the cached merged options; the getter setup for this.options['messagingDisplayOptions']
        // will merge the new value with the defaults
        this.__messagingDisplayOptions = null;
        this._initComponentMessaging();
        
        break;
      
      case "placeholder":
        this._SetPlaceholder(value);
        shouldRefresh = false; //  no reason to refresh component.
        break;
      
      case "required":
        // shouldRefresh=true because hints and label should refresh to show new state
        break;
        
      case "title":
        // update messagingstrategy
        this._getComponentMessaging().update(this._getMessagingContent(this.__MESSAGING_CONTENT_UPDATE_TYPE.TITLE));
        break;
    }
      
    if (shouldRefresh)
    {
      // TODO: _setOption is calling _Refresh for every option change. 
      // Allowing this only for value and some specific options (see above) breaks inputnumber tests
      this._Refresh(name, value);
      // refresh aria attributes if needed
      this._refreshAria(name, value);

      // some options have special CSS selectors that need to be added or removed on the widget 
      this._refreshTheming(name, value);
    }      

    return retVal;
  },
  
  // *********** END WIDGET FACTORY METHODS **********
  
  /**
   * Returns a jquery object of the element representing the content node. This could be a jQuery 
   * object of the element the widget was invoked on - typically this is an input or select or 
   * textarea element for which a value can be set.
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   * @return {Object} the jquery element that represents the editable content. E.g., an input
   */
  _GetContentElement : function ()
  {
    return this.element;
  },

  /**
   * Returns a jquery object of the element representing the primary label node for the input 
   * component. 
   * First we look for the aria-labelledby attribute on the input.
   * If that's not found, we look for the label with 'for' attribute 
   * pointing to input.
   * If that's not found, we walk up the dom looking for aria-labelledby.
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   * @return {Object} the jquery element that represents the input component's label.
   *  return null if it can't find anything.
   */
  _GetLabelElement : function ()
  {
    // If input has aria-labelledby set, then look for label it is referring to.
    var queryResult = this._getAriaLabelledByElement(this.element);
    if (queryResult !== null && queryResult.length !== 0)
    {
      return queryResult;
    }
    
    // if no aria-labelledby is on the input, then look for a label with 'for'
    // set.
    var id = this.element.prop("id");
    if (id !== undefined)
    {
      var labelQuery = "label[for='" + id + "']";
      queryResult = $(labelQuery);
      if (queryResult.length !== 0)
      {
        return queryResult;
      }
    }
 
    // if no aria-labelledby on input and no label with 'for' pointing to input,
    // then as a final step we walk up the dom to see if aria-labelledby is set.
    // If so, then we find the label it is referring to.
    // This would be the case when you have multiple inputs grouped in a div 
    // <label id="grouplabel">Address</label>
    // <div aria-labelledby="grouplabel"><input/><input/><input/></div>
    var ariaElement = this.element.closest("[aria-labelledby]");
    if (ariaElement.length !== 0)
    {
      // Element has aria-labelledby set, so look for label it is referring to.
      queryResult = this._getAriaLabelledByElement(ariaElement);
      if (queryResult !== null && queryResult.length !== 0)
      {
        return queryResult;
      }
    }
    return null;

  },
  
  
  /**
   * Returns the element's value. Normally, this is a call to this.element.val(), but for some 
   * components, it could be something else. E.g., for ojRadioset the element's value is really the 
   * value of the selected radio in the set. 
   * 
   * @override
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _GetElementValue : function () 
  {
    return this.element.val();
  },
  

/**
   * Returns a jquery object of the element that triggers messaging behavior. The trigger element 
   * is usually an input or select or textarea element for which a value can be set/retrieved and 
   * validated. 
   * 
   * @return {Object} jquery object 
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _GetMessagingLauncherElement : function ()
  {
    return this._GetContentElement();
  },
  
  /**
   * Returns the normalized converter instance.
   * 
   * @return {Object} a converter instance or null
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _GetConverter : function () 
  {
    // this.__converter holds the instance
    if (!this.__converter)
    {
      var converterOption = this.options['converter'];
      this.__converter = oj.IntlConverterUtils.getConverterInstance(converterOption);
    }
    
    return this.__converter || null;
  },

  /**
   * Returns an array of default validators used by component. The list of default validators are 
   * for the internal use of the component and are not a part of this.options.validators. E.g., if 
   * the pattern attribute or option is set, a RegExpValidator instance is automatically created and 
   * added to this list. RequiredValidtor is tracked separately from the default validators.
   * 
   * @return {Object} a map of string name to the validator instance. 
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _GetDefaultValidators : function ()
  {
    if (!this.__defaultValidators)
    {
      this.__defaultValidators = {};
    }
    
    return this.__defaultValidators;
  },
          
  /**
   * Returns the display value that is ready to be passed to the converter.
   * 
   * @param {Object} value the stored value if available that needs to be formatted for display
   * @return {string} usually a string display value
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _GetDisplayValue : function (value) 
  {
    return this._GetContentElement().val();
  },

  /**
   * Returns an array of all validators built by merging the validators option set on the component 
   * and the default validators setup by the component. <br/>
   * This does not include the default required validator. Components can override to add to this 
   * array of validators.
   * 
   * @return {Array} of validators
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _GetAllValidators : function ()
  {
    if (!this.__allValidators)
    {
      var allValidators = [], validatorsOption = this.options['validators'], validator, 
          isValidatorInstance = true, defaultValidatorMap = this._GetDefaultValidators(), 
          defaultValidators = [], vType, vOptions, vTypeStr, normalizedValidators, i;

      // combine public and internal validators to get the combined list
      for (var val in defaultValidatorMap) 
      {
        if (defaultValidatorMap.hasOwnProperty(val)) 
        {
          defaultValidators.push(defaultValidatorMap[val]);
        }          
      }
      allValidators = allValidators.concat(defaultValidators);
        
      if (validatorsOption)
      {
        normalizedValidators = [];
        // Normalize validators 
        for (i = 0; i < validatorsOption.length; i++)
        {
          validator = validatorsOption[i];
          if (typeof validator === "object") 
          {
            // check if we have an actual validator instance that implements the validate() method
            // oj.Validation.__doImplementsCheck(validator, oj.Validator);
            if (!(validator['validate'] && typeof validator['validate'] === "function"))
            {
              isValidatorInstance = false;
            }
            
            if (!isValidatorInstance)
            {
              // we maybe dealing with an object literal
              // {'type': 'numberRange', 'options': { 'min': 100, 'max': 1000,
              //                                    'hint': {'hintMinimum': 'some hint'}}}
              vTypeStr = validator['type'];
              if (vTypeStr && typeof vTypeStr === "string")
              {
                vType = oj.Validation.validatorFactory(vTypeStr);
                if (vType)
                {
                  vOptions = $.extend({}, validator['options']) || {};
                  // we push converter into the options if not provided explicitly. This is to allow
                  // validators to format values shown in the hint and messages
                  vOptions['converter'] = vOptions['converter'] || this._GetConverter();
                  vOptions['label'] = vOptions['label'] || this._getLabelText();
                  validator = vType.createValidator(vOptions);
                }
                else
                {
                  oj.Logger.error("Unable to locate a validatorFactory for the requested type: " + vTypeStr);
                }
              }
            }
            
            normalizedValidators.push(validator);
          }
          else
          {
            oj.Logger.error("Unable to parse the validator provided:" + validator);
          }
        }

        allValidators = allValidators.concat(normalizedValidators);
      }
      
      this.__allValidators = allValidators;
    }
    
    return this.__allValidators || [];
  },
  
  /**
   * EditableValue caches the validators to be run within this.__allValidators variable.
   * This is great; however when the default validators need to be reset [i.e. min + max changing] 
   * then the cached this.__allValidators needs to be cleared out. 
   * This method also updates the messaging strategies as hints associated with validators could 
   * have changed.
   * 
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _ResetAllValidators : function () 
  {
    if (this.__allValidators)
    {
      this.__allValidators.length = 0;
    }
    this.__allValidators = null;
    
    // update messagingstrategy as hints associated with validators could have changed
    this._getComponentMessaging().update(this._getMessagingContent(this.__MESSAGING_CONTENT_UPDATE_TYPE.VALIDATOR_HINTS));

  },

  /**
   * Whether the component is required.
   * 
   * @return {boolean} true if required; false
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _IsRequired : function () 
  {
    // by default we check if required attribute is set on the element.
    return this.options.required === "required";
  },
            
  
  /**
   * Convenience handler for the DOM 'change' event. Subclasses are expected to wire up event 
   * handlers for DOM events that they wish to handle.<br/>
   * 
   * The implementation retrieves the display value for the component by calling _GetDisplayValue() 
   * and calls _SetValue(), with full validation.
   * 
   * @param {Event} event DOM event 
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _HandleChangeEvent : function (event) 
  {
    var submittedValue = this._GetDisplayValue();
    // run full validation
    this._SetValue(submittedValue, event);
  }, 

  /**
   * Called in response to a change in the options set for this component, this method refreshes the 
   * component display value. Subclasses can override to provide custom refresh behavior.
   * 
   * @param {String=} name the name of the option that was changed
   * @param {Object=} value the current value of the option
   * @param {boolean=} fullRefresh false is the default; true means always refresh component 
   * display value
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _Refresh : function (name, value, fullRefresh)
  {
    switch (name)
    {
      case "converter":
        value = this.options['value'];
        // when converter changes format of value could change
        this._refreshComponentDisplayValue(value, true);
        break;
         
      case "value":
        this._refreshComponentDisplayValue(value, fullRefresh);
        break;

      case "required":
        // need to keep the label in sync with the input
        if (this.$label)
        {
          this.$label._ojLabel("option", "required", value);
        }
        break;
        
      case "help":
        // refresh the help - need to keep the label in sync with the input.
        var helpDef = this.options.help["definition"];
        var helpSource = this.options.help["source"];
        var labelHelpIconWrapper = this._ariaDescribedByHelpIconWrapper(helpSource);

        if (this.$label)
        {
          // Calling option this way calls _setOption in _ojLabel.
          // order matters here. When _ojLabel's help is changed, it removes
          // the help dom, then re-adds it. We need to make sure _ojLabel's  
          // describedById option is there so we can find the dom to remove
          // and recreate if needed.
          this.$label._ojLabel("option", "describedById", labelHelpIconWrapper);
          this.$label._ojLabel("option", "help", 
                          {"definition":helpDef, 
                          "source":helpSource});
        }
        break;        
    }
  },
  /**
   * Called when a aria-required attribute needs to be set or removed. 
   * Most inputs/selects need aria-required on the input element (aka 'content')
   * But it is not legal to have aria-required on radio/checkboxes.
   * Subclasses can override to put aria-required where they want.
   * 
   * @param {Object=} value the current value of the required option
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _RefreshAriaRequired : function (value)
  {
    var ariaValue, contentNode = this._GetContentElement();

    ariaValue = (value == "required") ? true : false;
    if (ariaValue && contentNode) 
    {
      contentNode.attr("aria-required", ariaValue);
    }
    else
    {
      contentNode.removeAttr("aria-required");
    }
  },

  /**
   * Called when the display value on the element needs to be updated. This method updates the 
   * (content) element value. Widgets can override this method to update the element appropriately. 
   * 
   * @param {String} displayValue of the new string to be displayed
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
  */  
  _SetDisplayValue : function (displayValue) 
  {
    var contentElem = this._GetContentElement();
    contentElem.val(displayValue);
  },
  
  /**
   * Sets the value on the component after clearing existing messages on the component. This method 
   * is typically called when a component needs to write a user value into the component. <br/>
   * 
   * @param {Object} newValue the value to be set.
   * @param {Object=} event an optional event if this was a result of ui interaction. For user 
   * initiated actions that trigger a DOM event, passing this event is required. E.g., if user action 
   * causes a 'blur' event. <br/>
   * When _SetValue is called as a result of a programmatic update, such as calling a method on a 
   * component, then the event can be undefined. E.g., ojInputNumber.stepUp()
   * @param {{validationMode:number}=} options an Object literal that callers pass in to determine 
   * how validation gets run. Keys and values to pass in options are as follows:
   * 'validationMode': {number} Accepted values (defined in _VALIDATION_MODE) are - 
   * <ul>
   *   <li>FULL - the default and runs both the converter and all validators. </li>
   *   <li>VALIDATORS_ONLY - runs all validators including the required validator is run.</li>
   *   <li>REQUIRED_VALIDATOR_ONLY - runs just the required validator. </li>
   *   <li>NONE - runs no validation and write the value to the options.</li>
   * </ul>  
   * NOTE: All options expect NONE will clear current messages. <br/>
   * 
   * <ul>
   * <li>
   * If validation is to be run, then the newValue is compared with the last element value. If it's 
   * the same then validation is skipped. If not the same validation continues.
   * </li>
   * <li>When there is a validation error, value option not set and the method returns false.</li>
   * <li>If all validations pass, and the new parsed value is the same as the options.value then the 
   * value option is not written, the component display is refreshed and the method returns true. But
   * if the new value is different then it's written to the options and the component refreshed</li>
   * </ul>
   *   
   * @return {boolean} false if value was not set due to validation error. 
   * @example: Widget subclasses can use this convention to run full validation
   * this._SetValue(value, event);
   * 
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   * 
   */
  _SetValue : function (newValue, event, options)
  {
    var previousValue = this.options['value'], mode, runningValidations = true;
    
    // disallow setting a value of undefined by widgets
    if (newValue === undefined)
    {
      oj.Logger.warn("Attempt to set a value of undefined");
      return false;
    }
    
    if (this._CanSetValue())
    {
      mode = options && options.validationMode ? options.validationMode : this._VALIDATION_MODE.FULL;
      runningValidations = (mode !== this._VALIDATION_MODE.NONE);
      
      if (runningValidations)
      {
        // reset validity and clear messages stored on the component if we are validating and 
        // the new (display) value is not the same as the previous display value.
        if (!(newValue === this._getLastElementValue())) 
        {
          // save off the newValue into the last element value
          this._setLastElementValue(newValue);          
          this._clearMessages(event);

          newValue = this._doRunValidation(newValue, event, mode);
          if (!this.isValid())
          {
            return false;
          }
        }
        else
        {
          if (oj.Logger.level > oj.Logger.LEVEL_WARN)
          {
            oj.Logger.info("Validation was skipped because the display value " + 
                    (newValue.toString) ? newValue.toString() : newValue + " as the previous.");
          }
          return false;
        }
      }

      // before writing the new value to the option, we check if it's same as the current option 
      // value to avoid unnecessary writes to option, observable etc. This alos means no triggering 
      // a optionChange event. it may be necessary to refresh the displayValue.
      if (this._ValueEquals(previousValue, newValue))
      {
        this._updateElementDisplayValue(newValue, event);
        if (oj.Logger.level > oj.Logger.LEVEL_WARN)
        {
          oj.Logger.info("The value was not set on the component as it's the same as the current value - " + 
                  (newValue.toString) ? newValue.toString() : newValue);
        }
      }
      else
      {
        // writing to option value.
        this._updateValueOption(newValue, event);
      }
    }
    
    return true;
  },
    
  /**
   * Whether the a value can be set on the component. If the component is 
   * disabled then setting value on component is a no-op. 
   * 
   * @see #_SetValue
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _CanSetValue: function ()
  {
    var disabled = this.options['disabled'] || false;
    
    if (disabled)
    {
      return false;
    }
    
    return true;
  },

  /**
   * Sets the placeholder text on the content element by default. It sets the placeholder attribute
   * on the element. Component subclasses can override this method to control where placeholder text
   * gets set.
   * @param {string} value
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _SetPlaceholder : function(value)
  {
    this._GetContentElement().attr("placeholder", value);
  },
          
  /**
   * Triggers a 'optionChange' event on the component. The payload is the previous and current 
   * values for the option that changed. Currently supported options that trigger this event are 
   * value and messages.
   * 
   * @param {string} option name of the option that changed
   * @param {string|number|Object} previousValue an array of the previous 
   * @param {Event=} originalEvent the original dom event that triggered the validation. If this is 
   * set then writeback happens.
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
   _TriggerOptionChange : function (option, previousValue, originalEvent)
   {
     oj.Assert.assertNonEmptyString(option, "");
     
     // TODO: Several components call _SetValue without the originalEvent, of which ojSelect, 
     // ojCombobox are never setting originalEvent. So the writeback never happens. SO temporarily 
     // setting {writeback : 'shouldWrite'}
     var //writebackVal = originalEvent ? "{'writeback': 'shouldWrite'}" : 
         //    "{'writeback': 'shouldNotWrite'}",
      dataHash = {
       'option': option,
       'previousValue': previousValue, 
       'value' : this.options[option],
       'optionMetadata': {'writeback': 'shouldWrite'}};

     switch(option)
     {
       case 'messages':
         
        this._trigger('optionChange', originalEvent || null, dataHash);
        // not preventing default behavior. So show messages
        this._getComponentMessaging().update(this._getMessagingContent());
        break;
        
      case 'value':
        // users can't cancel the value change event as the event is triggered after the value changes
        this._trigger('optionChange', originalEvent || null, dataHash);
        break;
        
      default:
        break;
     }
     
   },

  /**
   * Compares 2 values for equality and returns true if they are equal; false otherwise. Calls 
   * oj.Object.innerEquals() which works for most Javascript data types.
   * 
   * @param {Object|string|undefined} value1 first value
   * @param {Object|string|undefined} value2 another value
   * @return {boolean}
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _ValueEquals : function (value1, value2)
  {
    return oj.Object.compareValues(value1, value2);
  },
  
  /**
   * Returns the default styleclass for the component. Currently this is 
   * used to pass to the _ojLabel component, which will append -label and 
   * add the style class onto the label. This way we can style the label
   * specific to the input component. For example, for inline labels, the
   * radioset/checkboxset components need to have margin-top:0, whereas all the
   * other inputs need it to be .5em. So we'll have a special margin-top style 
   * for .oj-label-inline.oj-radioset-label
   * All input components must override
   * 
   * @return {string}
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _GetDefaultStyleClass : function ()
  {
    return "oj-editablevalue";
  },
    
  
  // I N T E R N A L   P R I V A T E   C O N S T A N T S    A N D   M E T H O D S 
  // Subclasses should not override or call these methods
  
  
  /**
   * when below listed options are passed to the component, corresponding CSS will be toggled
   * @private
   * @const
   * @type {Object}
   */
  _OPTION_TO_CSS_MAPPING: {
    "disabled": "oj-disabled",
    "required": "oj-required",
    "readOnly": "oj-read-only"
  },
  
  /**
   * Types of messaging content to update.
   * <ul>
   * <li>'ALL' - builds all messaging content</li>
   * <li>'VALIDITY_STATE' - updates only validityState every time validation runs and there are 
   * new messages or when the messages option changes.</li>
   * <li>'CONVERTER_HINT' - updates only converter hints, this is used when converter option 
   * changes</li>
   * <li>'VALIDATOR_HINTS' - updates only validator hints, this is used when validators option 
   * changes</li>
   * <li>'TITLE' - updates only title, when the title property changes</li>
   * </ul>
   * @private
   */
  __MESSAGING_CONTENT_UPDATE_TYPE : {ALL : 1, 
                                     VALIDITY_STATE : 2, 
                                     CONVERTER_HINT : 3, 
                                     VALIDATOR_HINTS : 4, 
                                     TITLE : 5},
                                   
  
  /**
   * Clears messages for this component.  
   * @param {Event=} event
   * @param {boolean=} silentUpdate default value is false; a true value clears the member variable 
   * directly without using the public option method, causing no events to be fired. 
   * @private
  */
  _clearMessages : function (event, silentUpdate) 
  {
    silentUpdate = silentUpdate ? true : false;
    if (!silentUpdate)
    {
      var msgsHash = {};
      msgsHash['messages'] = [];
      if (event)
      {  
        msgsHash['_oj_originalEvent'] = event;
      }
      this.option(msgsHash);
    }
    else
    {
      // if we are destroying widget don't bother setting option
      this.options['messages'] = [];
    }
  },
  
  /**
   * Called at component create time primarily to initialize options, often using DOM values. This 
   * method is called before _ComponentCreate is called, so components that override this method 
   * should be aware that the component has not been rendered yet. The element DOM is available and 
   * can be relied on to retrieve any default values. <p>
   * 
   * This method sets defaults for its options that have a DOM namesake. E.g., value, required, 
   * disabled etc. Subclasses can override this method to set their own defaults for these options.
   * Example, the value option is often not set on this.element for components like radioset, which
   * walk the sub-tree to determine the value.
   * 
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _InitOptions : function()
  {
    var node = this.element, savedAttributes = this._GetSavedAttributes(node), 
            attrsToRemove = ["required", "title"], domValue; 
    this._super();
    
    // TODO: Blake says no options should be initialized by base. Code needs to be removed when the 
    // create/init changes are in

    // DISABLED:
    // if options.disabled is not set (undefined), read from DOM not saved attributes
    // if options.disabled is set to a valid value (boolean), set it on the 
    // element to keep the two in sync. 
    if (this.options['disabled'] === undefined)
    {
      // In the absence of attribute set default value to null
      this.options['disabled'] = this.element.attr("disabled") !== undefined ? 
        !!this.element.prop("disabled") : null;
    }
    this._validateOption("disabled");
    
    // PLACEHOLDER: (expects a non-empty string)
    // if options.placeholder is not set (undefined), use placeholder attribute on element
    if (this.options['placeholder'] === undefined)
    {
      this.options['placeholder'] = this.element.prop("placeholder");
    }
    
    if (this.options['placeholder'])
    {
      // if we have a non-empty value for placeholder option remember it, so we don't set default 
      // placeholder. 
      // TODO: Should default placeholder be pushed to this.optiopns?
      this.__customPlaceholderSet = true;
    }
    
    // REQUIRED: (expects a boolean)
    // if options.required is not set (undefined), use required attribute on the element.
    if (this.options['required'] === undefined)
    {
      // In the absence of attribute set default value to null
      domValue = (this.element.attr("required") !== undefined) ? 
        !!this.element.prop("required") : null;
      this.options['required'] = domValue ? "required" : "optional";
    }
    
    this._validateOption("required");
    
    // TITLE: (expects a string)
    // if options.title set to undefined, use title attribute on element.
    if (this.options['title'] === undefined)
    {
      this.options['title'] = this.element.prop("title");
    }

    // VALUE: (can be one of many types)
    // if value option is undefined check element value. 
    if (this.options['value'] === undefined) 
    {
      // element attribute may not be set, in which case default to null
      this.options['value'] = (this.element.attr('value') !== undefined) ? this.element.val() : null;
    }
    
    // initialize messages to an empty array, so later when we trigger an optionChange event 
    // in _AfterCreate(), invalidComponentTracker is populated. 
    // TODO: This is kludg-ey since ComponentBinding.setupManagedAttributes() does not yet support a 
    // AfterCreate callback 
    if (!this.options['messages'])
    {
      this.options['messages'] = [];
    }
        
    // remove html5 validation attributes to not trigger html5 validation + inline bubble
    $.each(attrsToRemove, function (index, value)
    {
      if (value in savedAttributes)
      {
        node.removeAttr(value);
      }
    });
  },

  /**
   * Refreshes the component to respond to DOM changes, in which case fullRefresh=true. This 
   * internal method is also called when the component's theme or accessibility attributes need to 
   * be refreshed.
   * @param {boolean} fullRefresh true if a full refresh of the component is desired.
   * @private
   */
  _doRefresh : function (fullRefresh)
  {
    // we decided not to clear messages on refresh because the user intends to refresh the component 
    // using the latest DOM and latest option values. Page Authors will need to clear messages and 
    // generally ensure component state is accurate and as expected before calling refresh().
    
    fullRefresh = fullRefresh || false;
    if (fullRefresh)
    {
      // the DOM for the label and its text could have changed. 
      if (this.$label)
      {
        this.$label._ojLabel("refresh");
      }
      
      // also clear out anything that relies on the label 
      this._RefreshLabelDependents();
      
      // also re-initialize component messaging, since refresh() can be called when the locale 
      // changes, requiring component to show messaging artifacts for current locale. 
      // E.g., hints, placeholder, messages are all retrieved for the current locale. Typically when 
      // switching locales user should have cleared messages.
      this._initComponentMessaging();
    }
        
    this._Refresh("value", this.options['value'], fullRefresh);
    this._refreshAria("required", this.options.required);
    this._refreshTheming("required", this.options.required);
  },

  /**
   * Gets the last stored model value
   * 
   * @private
   */
  _getLastModelValue : function ()
  {
    return this.__oj_lastModelValue;
  },
          
  _getLastElementValue : function () 
  {
    return this.__oj_lastElementValue;
  },
  /**
   * Get the element whose id matches the elem's aria-labelledby value, if any.
   * @private
   * @param {Object} elem the dom element from which you want to get the 
   * aria-labelledby property value
   * @return {Object} if element does not have aria-labelledby defined, then
   *    returns null. If it  does, then return a new jQuery object with the 
   *    label with an id equal to the aria-labelledby value. If no match, then
   *    the jQuery object will be empty.
   */
  _getAriaLabelledByElement: function (elem)
  {
    // look for a label with an id equal to the value of aria-labelledby. 
    // .prop does not work for aria-labelledby. Need to use .attr to find
    // aria-labelledby.
    var ariaId = elem.attr("aria-labelledby");

    if (ariaId !== undefined )
    {
      var labelQuery = "label[id='" + ariaId + "']"; 
      return $(labelQuery);
    }    
    else
      return null;
  },

  /**        
   * Create the _ojLabel component
   * @private
   */
  _createOjLabel : function ()
  {
    this.$label = this._GetLabelElement();
    if (this.$label)
    {
      var helpDef = this.options['help']['definition'];
      var helpSource = this.options['help']['source'];

      var labelHelpIconWrapper = this._ariaDescribedByHelpIconWrapper(helpSource);
      // create the ojLabel component 
      this.$label._ojLabel(
    //   {inputLabelStyleClass: this._GetDefaultStyleClass()+"-label",
        {rootAttributes:{'class': this._GetDefaultStyleClass()+"-label"},
        describedById: labelHelpIconWrapper, 
        required:this.options['required'], 
        help:{'definition': helpDef, 'source': helpSource}});

    }    
  },
  /**  
   * If there is help source (an external URL), then construct an
   * id from the element's id, render aria-describedby with this id, and then
   * return the id to be used by the ojLabel.
   * 
   * For accessibility, we need to wrap help icons with a div. 
   * Then, on the input component we use aria-describedby to point to this div.
   * &lt;div id="fooIcons"&gt;
   *   &lt;span class="oj-label-help-icon oj-component-icon oj-clickable-icon"&gt;
   *   /&lt;span/&gt;
   * /&lt;div/&gt;
   * &lt;input aria-describedby="fooIcons" id="foo" type="text"/&gt;
   *    
   * This function constructs an id to put on the help icon div and returns it.
   * It also adds the aria-describedby on the input.
   * 
   * We render the help icon only if there is help source.
   * 
   * @return {string} an id we constructed
   * @param {string} helpSource helpSource must be present
   * for the aria-describedby to be rendered.
   * @private
   */
  _ariaDescribedByHelpIconWrapper : function (helpSource)
  {
    var labelHelpIconWrapperId = this.element.prop("id") + "Icons";
    if (helpSource)
    {  
      var contentElements = this._GetContentElement();        

      // aria-describedby can be a list of ids, so make sure to append
      //contentElements.attr("aria-describedby", labelHelpIconWrapperId);
      contentElements.each(function() {
        var ariaDescBy = $(this).attr("aria-describedby");
        if (ariaDescBy)
          $(this).attr("aria-describedby", ariaDescBy + ' ' + labelHelpIconWrapperId);
        else
          $(this).attr("aria-describedby", labelHelpIconWrapperId);
     });
    }
    return labelHelpIconWrapperId;  
  },
          
  // helper method to retrieve the label text.          
  _getLabelText : function ()
  {
    if (this.$label)
    {
      return this.$label.text();
    }
  },
  /**        
   * For the current list of messages this method returns the current severity.
   * @return {number} See oj.Message.SEVERITY_LEVEL or -1 if 
   * @private
   */
  _getMaxSeverity : function ()
  {
    if (!this.__maxSeverityLevel)
    {
      this.__maxSeverityLevel = oj.Message.getMaxSeverity(this.options['messages']);
    }
    return this.__maxSeverityLevel;
  },
  
  _getValidityState : function ()
  {
    if (this.__validityState)
    {
      var messages = $.extend([], this.options['messages']); //clone array
      this.__validityState.update(this.__valid, messages, this.__maxSeverityLevel);
    }
    else
    {
      if (typeof this.__valid === "undefined")
      {  
        this.__valid = true;
      }
      this.__validityState = new oj.ComponentValidity(this.__valid, 
                                                      this.options['messages'], 
                                                      this.__maxSeverityLevel);
    }
    return this.__validityState;
  },

  /**
   * Initializes component messaging both when component is initialized or when 
   * messagingDisplayOptions is set/changed. 
   * 
   * @private
   */
  _initComponentMessaging : function()
  {
    var compMessaging = this._getComponentMessaging(), 
            messagingLauncher = this._GetMessagingLauncherElement(), 
            messagingContent = this._getMessagingContent(this.__MESSAGING_CONTENT_UPDATE_TYPE.ALL);
    
    // if default placeholder is currently set then it needs to be cleared here. This is needed for 
    // the following reasons
    // i. a component is reinitialized when the locale changed, requiring the converter hint for 
    // new locale to be set as placeholder.
    // ii. or a component's placeholder option or messagingDisplayOptions option, could have changed 
    // requiring the placeholder to be reset if it's currently set to the default.
    // 
    if (!this.__customPlaceholderSet)
    {
      this.options['placeholder'] = "";
    }
    
    compMessaging.activate(messagingLauncher, messagingContent);
  },
  
  _setLastModelValue : function (value)
  {
    this.__oj_lastModelValue = value;
  },

  _setLastElementValue : function (value) 
  {
    this.__oj_lastElementValue = value;
  },

  
  /**
 * Adds a message to this element
 * @param {Object} message a Message object. TODO: contract needs to exposed
 * @param {Event=} event
 * @private
 */
  _updateMessages: function(message, event) 
  {
    var msgs = this.options['messages'].slice(), messagesHash = {};
    oj.Assert.assertPrototype(message, oj.Message);
    
    // this.options['messages'].push(message);
    msgs.push(message);
    messagesHash['messages'] = msgs;
    if (event)
    {  
      messagesHash['_oj_originalEvent'] = event;
    }
    this.option(messagesHash);
  },
          
          
  _updateValueOption : function (newValue, event)
  {
    var values = {};
    values['value'] = newValue;
    if (event)
    {  
      values['_oj_originalEvent'] = event;
    }

    this.option(values);
  },
  
  /**
   * If the value set can be coerced to an accepted value do it, otherwise throw error.
   * 
   * @param {string} optionName
   * @throws {Error} if option value is invalid
   * @private
   */
  _validateOption : function (optionName)
  {
    var optionValue = this.options[optionName], error = false;
    
    switch (optionName)
    {
      case 'required' :
        if (!optionValue) // 0, false, null, "", default to optional
        {
          this.options[optionName] = "optional";
        }
        else
        {
          // coerce value
          optionValue = "" + optionValue;
          if (optionValue !== "required" && optionValue !== "optional")
          {
            error = true; 
          }
        }
        break;
        
      case "disabled" :
        if (optionValue !== null &&  typeof optionValue !== "boolean")
        {
          error = true;
        }
        
        break;
    }
    
    if (error)
    {
      throw "Option '" + optionName + " 'has an invalid value set: " + optionValue;
    }
  },
  
  /**
   * Runs validation based on the mode settings. 
   * @param {Object} value to parse and/or validate
   * @param {Event=} event the original event or undefined
   * @param {number=} mode determines how validation is run. see _VALIDATION_MODE
   * @return {Object|string} parsed value 
   * @private
   */
  _doRunValidation : function (value, event, mode) 
  {
    var newValue = value;

    // callers of this function should clear messages 
    try
    {
      // Step 1: only when "full" validation is requested converters get run
      if (mode === this._VALIDATION_MODE.FULL)
      {
        // Step1: Parse value using converter
        newValue = this._parseValue(value);
      }

      // Step 2: Run validators
      this._validateValue(newValue, mode === this._VALIDATION_MODE.REQUIRED_VALIDATOR_ONLY);
    }
    catch (ve)
    {
      this._processValidationError(ve, event);
    }
    
    return newValue;
  },
          
  
  /**
   * Formats the value for display, based on the converter options. If no converter is set then 
   * returns the value as is.
   * 
   * @param {string} value value to be formatted
   * 
   * @return {string} formatted value
   * @throws {Error} when an error occurs during formatting
   * @private
   */
  _formatValue : function (value)
  {
    var formattedValue = value, converter = this._GetConverter();
    
    // don't clear messages here because we clear messages only when direct user interaction with 
    // component changes value. All other usecases we expect page authors to clear messages.

    if (converter)
    {
      // TODO: We should support chaining converters but for now we use just the first converter 
      // to parse.

      // Check if we have a converter instance
      if (typeof converter === "object") 
      {
        if (converter['format'] && typeof converter['format'] === "function")
        {
          formattedValue = converter['format'](value);
        }
        else
        {
          if (oj.Logger.level > oj.Logger.LEVEL_WARN)
          {
            oj.Logger.info("converter does not support the format method.");
          }
        }
      }
    }
    
    return formattedValue;
  },
  
  /**
   * @private
   */
  _getComponentMessaging : function ()
  {
    if (!this.__componentMessaging)
    {
      this.__componentMessaging = new oj.ComponentMessaging(this);
    }
    
    return this.__componentMessaging;
  },
  
  /**
   * Returns the required validator instance or creates it if needed and caches it.
   * 
   * @private
   */
  _getDefaultRequiredValidator : function ()
  {
    var vf;
    
    // TODO: Should we cache the same instance of required validator for all components?
    this.__defaultReqValOptions = {'label': this._getLabelText()};    
    vf = oj.Validation.validatorFactory(oj.ValidatorFactory.VALIDATOR_TYPE_REQUIRED);
    return vf ? vf.createValidator(this.__defaultReqValOptions) : null;
  },

  /**
   * Returns an array of validator hints.
   * @param {Array} allValidators
   * @private
   */        
  _getHintsForAllValidators : function(allValidators)
  {
    var validator, validatorHints = [], vHint = "", i;
    if (this._IsRequired())
    {
      validator = this._hasRequiredInValidators(allValidators);
      if (!validator)
      {
        // get the hint for the default required validator and push into array if it's not already 
        // present in the validators array
        validator = this._getDefaultRequiredValidator();
        if (validator['getHint'] && typeof validator['getHint'] === "function")
        {
          vHint = validator['getHint']();
          if (vHint)
          {
            validatorHints.push(vHint);
          }
        }
      }
    }

    // loop through all remaining validators
    for (i = 0; i < allValidators.length; i++)
    {
      validator = allValidators[i], vHint = "";
      if (typeof validator === "object") 
      {
        if (validator['getHint'] && typeof validator['getHint'] === "function")
        {
          vHint = validator['getHint']();
          if (vHint)
          {
            validatorHints.push(vHint);
          }
        }
      }
    }

    return validatorHints;
  },
  
  /**
   * Returns content that will be used by messaging strategies.
   * 
   * @param {number} updateType of messaging content to update. Accepted values are defined by 
   * this.__MESSAGING_CONTENT_UPDATE_TYPE.
   * 
   * @private
   */
  _getMessagingContent : function (updateType)
  {
    var messagingContent = {}, converter = this._GetConverter(), converterHint, allValidators, 
            validatorHints = [];
    updateType = updateType || this.__MESSAGING_CONTENT_UPDATE_TYPE.VALIDITY_STATE;
    
    // Add validityState which includes messages, valid and severity
    if (updateType === this.__MESSAGING_CONTENT_UPDATE_TYPE.ALL || 
        updateType === this.__MESSAGING_CONTENT_UPDATE_TYPE.VALIDITY_STATE)
    {
      messagingContent['validityState'] = this._getValidityState();
    }
    
    // Add converter hints
    
    if (updateType === this.__MESSAGING_CONTENT_UPDATE_TYPE.ALL || 
        updateType === this.__MESSAGING_CONTENT_UPDATE_TYPE.CONVERTER_HINT)
    {
      if (converter)
      {
        if (typeof converter === "object") 
        {
          if (converter['getHint'] && typeof converter['getHint'] === "function")
          {
            converterHint = converter['getHint']() || "";
            messagingContent['converterHint'] = converterHint;
          }
        }
      }
    }
    
    if (updateType === this.__MESSAGING_CONTENT_UPDATE_TYPE.ALL || 
        updateType === this.__MESSAGING_CONTENT_UPDATE_TYPE.VALIDATOR_HINTS)
    {
      allValidators = this._GetAllValidators();
      validatorHints = this._getHintsForAllValidators(allValidators) || [];
      messagingContent['validatorHint'] = validatorHints;
    }
    
    if (updateType === this.__MESSAGING_CONTENT_UPDATE_TYPE.ALL || 
        updateType === this.__MESSAGING_CONTENT_UPDATE_TYPE.TITLE)
    {
      messagingContent['title'] = this.options['title'] || "";
    }
    
    return messagingContent;
  },
          
  /**
   * Checks if a required validator is set explicitly on the validators array and return it.
   * @param {Array} allValidators
   * @return {Object|null} required validator instance
   * @private
   */
  _hasRequiredInValidators : function (allValidators)
  {
    var validator = null, i, required = null;
    for (i = 0; i < allValidators.length; i++)
    {
      validator = allValidators[i];
      if (validator instanceof oj.RequiredValidator)
      {
        required = validator;
        break;
      }
    }

    return required;
  },
  
  /**
   * Compares the messages arrays for equality.
   * 
   * @param {Array} pm previous messages
   * @param {Array} m new messages
   * @returns {boolean} true if equal false otherwise
   * @private
   * 
   */
  _messagesEquals : function (pm, m)
  {
    var match = -1, pmo, passed = true, previousMsgs = $.extend([], pm), msgs = $.extend([], m);
    if (previousMsgs === msgs) return true;
    if (previousMsgs == null || msgs == null) 
    {
      return false;
    }
    if (previousMsgs.length !== msgs.length)
    {
      return false;
    }
    
    $.each(previousMsgs, function (i, pMsg) 
    {
      if (!(pMsg instanceof oj.Message))
      {
        // oj.Messge has equals()
        pmo = new oj.Message(pMsg['summary'], pMsg['detail'], pMsg['severity']);
      }
      else
      {
        pmo = pMsg;
      }
      match = -1;
      $.each(msgs, function(j, msg) {
        {
          if (pmo.equals(msg))
          {
            match = j;
            return; // found a match, so break out of loop
          }
        }
      });
      
      // remove entry at 'match' index from msgs
      if (match > -1)
      {
        msgs.splice(match, 1);
      }
      else
      {
        // we found no match so no need to loop
        passed = false;
        return;
      }
    });
    
    return passed;
  },
  
  /**
   * Parses the value using the converter set and returns the parsed value. If parsing fails the 
   * error is written into the element 
   * 
   * @param {string=} submittedValue to parse
   * @return {Object} parsed value 
   * @throws {Error} an Object with message
   * @private
   */
  _parseValue: function(submittedValue) 
  {
    var converter = this._GetConverter(), parsedValue = submittedValue;
    
    if (converter)
    {
      // TODO: We should support chaining converters but for now we use just the first converter 
      // to parse.

      if (typeof converter === "object") 
      {
        if (converter['parse'] && typeof converter['parse'] === "function")
        {
          // we are dealing with a converter instance
          parsedValue = converter['parse'](submittedValue);
        }
        else
        {
          if (oj.Logger.level > oj.Logger.LEVEL_WARN)
          {
            oj.Logger.info("converter does not support the parse method.");
          }
        }
      }
    }
    
    return parsedValue;
  },

 /**
  * Processes the validation exception and updates the element.
  * 
  * @param {Error} e instance of Error
  * @param {Event=} event the original event that triggered the validation. 
  * @private
  */
  _processValidationError : function (e, event)
  {
    var ojmessage, summary, detail, severity, newMsg = {};
    if (e instanceof oj.ConverterError || e instanceof oj.ValidatorError)
    {
      ojmessage = e.getMessage();
      oj.Assert.assertPrototype(ojmessage, oj.Message);

      severity = ojmessage['severity'];
      summary = ojmessage['summary'];
      detail = ojmessage['detail'];
    }
    else
    {
      // TODO: is this error message generic enough to use for both converter and validator errors?
      severity = oj.Message.SEVERITY_LEVEL['ERROR'];
      summary = oj.Translations.getTranslatedString("oj-message.error");
      detail = e['message'] || oj.Translations.getTranslatedString("oj-converter.detail");
      // ojmessage = new oj.Message(summary, detail, severity);
    }
    
    newMsg['summary'] = summary;
    newMsg['severity'] = severity;
    newMsg['detail'] = detail;
    this._updateMessages(newMsg, event);
  },

  /**
   * Called when a aria attribute needs to be set or removed. 
   * @param {string} option name of the option
   * @param {Object|string} value
   * @private
   */
  _refreshAria : function (option, value)
  {

    var ariaValue, contentNode = this._GetContentElement();
    switch (option)
    {
      case "required":
        this._RefreshAriaRequired(value);
        break;
    }
  },
          
  /**
   * Refreshes the component when a property changes, that affects the display of the component. 
   * E.g., displayValue changes when value, converter or validator changes. Likewise the 
   * invalidElementTracker.
   * 
   * @param {Object|undefined} value the changed value that needs to be updated on UI
   * @param {boolean=} fullRefresh false is the default; true means always refresh component 
   * display value
   * @private
   */        
  _refreshComponentDisplayValue : function (value, fullRefresh)
  {
    var modelValue = value || this.options['value'], lastModelValue, elementValueUpdated;
    
    lastModelValue = this._getLastModelValue();
    elementValueUpdated = fullRefresh || (modelValue !== lastModelValue);

    // If instance (value) changes, we clear the element value and reset errors. 
    // But if the modelValue is the same as the element's _lastModelValue, then the element value 
    // need not be updated nor errors cleared. This situation can happen because the ojComponent 
    // binding's update method can be called too often - e.g. when other bindings are called.

    // TODO: If converter changes we want to format the value using the new converter. This means we 
    // clear the element value and reset any errors on it

    // TODO: If validator changes we don't do anything to update the element. The new validator will 
    // get picked up the next time the value is validated. If we support runnning contextual 
    // validators then the element might need to react appropriately. E.g., if a required validator 
    // was added and the field was empty we would need to run the validator

    if (elementValueUpdated)
    {
      this._updateElementDisplayValue(modelValue);
    }
  },
  
  /**
   * Called anytime the label DOM changes requiring a reset of any dependent feature that caches the 
   * label, including all validators.
   * @private
   */        
  _RefreshLabelDependents : function ()
  {
    // for now reset all validators
    this.__defaultReqValOptions = {};
    this._ResetAllValidators();
  },

  /**
   * Toggles css selector on the widget. E.g., when required option changes, the oj-required 
   * selector needs to be toggled.
   * @param {string} option
   * @param {Object|string} value 
   * @private
   */        
  _refreshTheming : function (option, value)
  {
    if (this._OPTION_TO_CSS_MAPPING.hasOwnProperty(option)) 
    {
      // required is 'required' or 'optional'. Treat anything but 'required' as false.
      if (option !== "required") {
        this.widget().toggleClass(this._OPTION_TO_CSS_MAPPING[option], !!value);
      }
      else {
        this.widget().toggleClass(this._OPTION_TO_CSS_MAPPING[option], (value === "required"));
      }
    }
  },

  _updateElementDisplayValue : function (modelValue, event)
  {
    var displayValue;
    // cache the new model value on the element 
    this._setLastModelValue(modelValue);

    // Update element with the displayValue
    displayValue = modelValue;

    try
    {
      displayValue = this._formatValue(modelValue);
    }
    catch (e)
    {
      this._processValidationError(e, event);
    }
    
    // Ugly: we need a special check for input [type=file] as a value cannot be set programmatically 
    // as it's considered a security violation.
    // if (element.type !== "file")
    this._SetDisplayValue(displayValue); 
    this._setLastElementValue(this._GetDisplayValue());
  },
  
  _updateInvalidElementTracker : function (invalidElementTracker)
  {
    // TBD
  },
          
          
  /**
   * Validates the value by running through the list of regsitered validators. The algorithm is as 
   * follows -
   * 1. check to see if we are currently valid, if not return
   * 2. run required check. 
   * 3. if value is not empty get all the validators and validate in sequence. 
   * 4. if all validators pass return.
   * 
   * Callers can rely on the 'valid' options property to determine the validity state of the 
   * component after calling this method
   * 
   * @param {Object|undefined} value to be validated
   * @param {boolean} requiredOnly true only runs required validation
   * @throws {Error} when validation fails.
   * @private
   */
  _validateValue : function (value, requiredOnly)
  {
    if (!this.__valid)
    {
      return;
    }
    
    var allValidators = this._GetAllValidators(), validator, i, reqValRun = false;

    // run required validation before anything else; 
    if (this._IsRequired())
    {
      validator = this._hasRequiredInValidators(allValidators);
      if (!validator)
      {
        validator = this._getDefaultRequiredValidator();
      }
      validator.validate(value);
      reqValRun = true;
    }

    // Only run other validators when required validation passes and only if all validators are 
    // requested to be run
    if (!requiredOnly)
    {
      for (i = 0; i < allValidators.length; i++)
      {
        validator = allValidators[i];
        if (typeof validator === "object") 
        {
          // validators : [required, numberRange]
          if (validator['validate'] && typeof validator['validate'] === "function")
          {
            if (validator instanceof oj.RequiredValidator && reqValRun)
            {
              // skip running required validation again
              continue;
            }
            validator['validate'](value);
          }
          else
          {
            if (oj.Logger.level > oj.Logger.LEVEL_WARN)
            {
              oj.Logger.info("validator does not support the validate method.");
            }
          }
        
        }
      }
    }
  }     
});

oj.Components.setDefaultOptions(
  {
    'editableValue': // properties for all editableValue components 
    {
      'messagingDisplayOptions': oj.Components.createDynamicPropertyGetter(
        function(context) 
        {
          // var inTable = context['containers'].indexOf('ojTable') >= 0;
          return  {
                    'messages': ['notewindow'], 
                    'converterHint': ['placeholder', 'notewindow'], 
                    'validatorHint': ['notewindow'], 
                    'title': ['notewindow']
                  };
        }
      )
    }
  }
);

/*!
 * JET Label This component is private. @VERSION
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
 * The _ojLabel component is a private component. It is not meant to be used
 * on a label element directly. Instead EditableValue components 
 * use the _ojLabel component in the internal implementation. 
 * <p>
 * The _ojLabel component decorates the input component's label with
 * extra dom for the required icon and help information (help
 * icon, help description, and help external url). If oj-label* styles are on
 * the label element, then the _ojLabel element will move them onto its root
 * dom element.
 * </p>
 * <h3 id="keyboard-section">
 *   Keyboard interaction and Focus management
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * <p>You can hover over the help and the required icons for additional information. 
 * You can also hover over the label to see the help definition text if there is some. 
 * </p>
 * @class
 * @private
 * @constructor
 * @name oj._ojLabel
 * @augments oj.baseComponent
 */
oj.__registerWidget("oj._ojLabel", $['oj']['baseComponent'],
{
  version : "1.0.0",  
  defaultElement : "<label>", 
  widgetEventPrefix : "oj", 
  options : 
  {
    /** 
     * The id of the input component that is associated with this label.
     * It is used to create an id for label's help icon dom (if any)
     * and that in turn is referred to with aria-describedby on the 
     * input component. This is needed for accessibility so that the screen
     * reader knows that the help icon is related to the input.
     * @expose 
     * @public
     * @instance
     * @memberof! oj._ojLabel
     */
    describedById: null,
    /**
     * The help information that goes on the label.  The help options are:
     * <ul>
     * <li>definition - this is the help definition text. It is what shows up
     * when the user hovers over the label or the help icon.</li>
     * <li>source - this is the help source url. If present, a help icon will
     * render next to the label and the anchor's target is this source.
     * </ul>
     * 
     * @expose 
     * @memberof! oj._ojLabel
     * @instance
     * @type {Object.<string, string>}
     * @default <code class="prettyprint">TODO: what goes here?</code>
     * 
     * @example <caption>Initialize the label with the help definition and external url information:</caption>
     * $( ".selector" )._ojLabel({ help: {definition:"some help definition", source:"some external url" } });
     * 
     * @example <caption>Set the <code class="prettyprint">help</code> option, after initialization:</caption>
     *
     * // setter
     * $( ".selector" )._ojLabel( "option", "help", {definition:"fill out the name", source:"http:\\www.oracle.com" } );
     */
    help: {definition: null, source: null},
    /** 
     * Whether this label should have a required icon.  Allowed values for 
     * required are 'required' and 'optional', 'optional' being the default.
     * @expose 
     * @public
     * @instance
     * @memberof! oj._ojLabel
     */
    required: null,
    /**
     * Allows you to set certain attributes on the root dom element.
     * For _ojLabel, we use 'class' only. The input components (via
     * EditableValue) set a styleclass on the _ojLabel's root in case
     * component-specific label styling is needed. For example, ojradioset
     * would pass class: 'oj-radioset-label'. ojinputtext would pass class:
     * 'oj-inputtext-label'. 
     *
     * @example <caption>Initialize root dom element with the set of 
     * <code class="prettyprint">rootAttributes</code>:</caption>
     * $(".selector")._ojLabel("option", "rootAttributes", {
     *   'class': 'oj-inputtext-label'
     * });
     * 
     * @expose
     * @access public
     * @memberof! oj._ojLabel
     * @instance
     * @type {Object|undefined}
     * @default <code class="prettyprint">{ id: null, class: null, style:null }</code>
     */
     rootAttributes: undefined
  },
 /**
  * @private
  * @const
  */
  _BUNDLE_KEY:
  {
    _TOOLTIP_HELP:      'tooltipHelp',
    _TOOLTIP_REQUIRED:  'tooltipRequired'    
  },
  /**** start Public APIs ****/
   
  /**
   * Returns a jQuery object containing the root dom element of the label 
   * 
   * <p>This method does not accept any arguments.
   * 
   * @expose
   * @memberof! oj._ojLabel
   * @instance
   * @return {jQuery} the label
  */
  widget : function ()
  {
    return this.uiLabel;
  },
  /**
   * Refreshes the required and help dom.
   * @example <caption>Clear messages and refresh component.</caption>
   * $(selector).ojInputText("option", "messages", []); <br/>
   * $(selector).ojInputText("refresh");
   * component 
   * @access public
   * @instance
   * @expose
   * @memberof! oj._ojLabel
   */
  refresh : function ()
  {
    this._super();
    this._refreshRequired();
    this._refreshHelp();
  },
          
   /**** end Public APIs ****/         
          
  /**** start internal widget functions ****/   
       
  /**
   * After _create, the widget should be 100% set up.
   * @override
   * @private
   */
  _create : function ()
  {
    this._super();

    this._drawOnCreate();

  },
  /**
   * set up styles on create
   * @private
   */
  _drawOnCreate : function ()
  {
    // wrap the label with a root dom element (oj-label) and its child 
    // (oj-label-group). Then point this.uiLabel to the root dom element.

    this.uiLabel = this.element.wrap(this._uiLabelWrapperHtml())
                               .closest(".oj-component");
                       
    // move an oj-label styles off of this.element, and put on the 
    // root dom element. Save these so we can put these back on 
    // this.element on destroy.
    this._moveClassesToRoot();
    if (this.options.help['definition'] || this.options.help['source'])
    { 
      this._insertHelpHtml();
      this._addHelpDefToLabel();
    }
    
    if (this.options.required === "required")
    {
      // Add or remove 'required' dom.
      // required. should go right before the label.
      this.element.before(this._requiredHtml());
    }
   },
   /**
   * move oj-label* classes from label element onto the root dom element
   * @private
   */
  _moveClassesToRoot : function ()
  {
    var classes = this.element.attr("class");
    this.movedClassArray  = [];
    if (classes)
    {
      var arrayOfClasses = classes.split(/\s+/);
      var numClasses = arrayOfClasses.length;
      for (var i=0; i < numClasses; i++)
      {
        var className = arrayOfClasses[i];
        // if class name has -label- in it, then move it
        // (e.g., oj-label, oj-label-inline, oj-md-label-nowrap, 
        // oj-md-labels-inline)
        if (className.indexOf("-label") > 0)
        {
          this.uiLabel.addClass(className); 
          this.element.removeClass(className);
          this.movedClassArray.push(className);
        }
      }
    }
  },
  /**
   * return the html string for the root dom element
   * @private
   */
  _uiLabelWrapperHtml : function ()
  {
    var rootAttributes = this.options.rootAttributes;
    var inputLabelClass;
    
    if (rootAttributes)
    {
      inputLabelClass = this.options.rootAttributes['class'];
    }
    
    if (inputLabelClass !== null)
    {
      return "<div class='oj-label oj-component " + inputLabelClass + 
              "'><div class='oj-label-group'></div></div>";
    }
    else
    {
      return "<div class='oj-label oj-component'><div class='oj-label-group'></div></div>";
    }

    
    
  },
  /** 
   * return the html string for the span with oj-label-required-icon
   * @private
   */
  _requiredHtml : function ()
  {
    var required = this.getTranslatedString(this._BUNDLE_KEY._TOOLTIP_REQUIRED);
    // TODO: Do we need oj-component-icon? I'm not seeing it in the label demos
    return "<span class='oj-label-required-icon oj-component-icon' title='" 
            + required + "'></span>";
  },
  /** 
   * return the html string of the span and its help information.
   * if (source), show help icon
   * if (helpDef), add 'title'=helpDef on help icon.
   * @private
   */
  _helpHtml : function (helpDef, source, describedById)
  {
    // construct the help html
    // if source (external url), then render a clickable help icon
    // if helpDef, then render oj-label-help-def style class on the label
    if (source)
    {
      var helpHtml = "<span id='" + describedById + "'>";
      helpHtml += "<a href='" + source + "' target='_blank'><span class=";
      helpHtml += "'oj-label-help-icon oj-component-icon oj-clickable-icon' title='";
      if (helpDef)
        helpHtml += helpDef;
      else
      {
        var tooltipHelp = this.getTranslatedString(this._BUNDLE_KEY._TOOLTIP_HELP);
        helpHtml += tooltipHelp;
      }
      helpHtml += "' role='img'></span>";
      helpHtml += "</a></span>"
    }
    return helpHtml;
  },
   /** 
   * Add help definition information to the label element.
   * @private
   */
  _addHelpDefToLabel : function ()
  {
    var helpDef = this.options.help['definition'];
    if (helpDef)
    {
      // add oj-label-help-def styleclass to the label.
      // add title to the label.
      // TODO APPEND title to the label if there is already a title
      this.element.addClass("oj-label-help-def");
      // append helpDef to title. We concatenate in case label already has
      // title set. Usually the app dev will use title OR helpDef, not both.
      var title = this.element.attr("title");
      if (title)
        this.element.attr("title", title + ' ' + helpDef);
      else
        this.element.attr("title", helpDef);
      
    }
  },
     /** 
   * Add help definition information to the label element.
   * @private
   */
  _removeHelpDefToLabel : function ()
  {
      this.element.removeClass("oj-label-help-def");
      this.element.attr("title", "");
  },
  /** 
   * finds the oj-label-group dom node and prepends the help html to it.
   * @private
   */
  _insertHelpHtml : function ()
  {
    var helpSource = this.options.help['source'];
    if (helpSource)
    {
      var helpDef = this.options.help['definition'];
      this.uiLabel.find(".oj-label-group").prepend(
        this._helpHtml(helpDef, 
                       helpSource,
                       this.options.describedById));
    }                     
  },
  /** 
   * refresh the help dom --
   * find the help root dom node and remove it if it is there 
   * and add back the help html. Helpful if a help option changed.
   * @private
   */  
  _refreshHelp : function ()
  {
    if (this.options.describedById !== null)
    {
      var describedById = "#" + this.options.describedById;
      this.uiLabel.find(describedById).remove();
    }
    // remove the style off of label dom as well.
    this._removeHelpDefToLabel();
    
    // now insert back if needed
    this._insertHelpHtml();
    this._addHelpDefToLabel();
  },
  /** 
   * refresh the required dom --
   * if required is required, then add the required dom if it isn't already there
   * if required is optional, remove the required dom if it is there.
   * Helpful if the required option changed.
   * @private
   */   
  _refreshRequired : function ()
  {
    // Add or remove 'required' dom.
    if (this.options.required === "required")
    {
      // required. should go right before the label if it isn't already there.
      if (this.uiLabel.find(".oj-label-required-icon").length === 0)
        this.element.before(this._requiredHtml());
    }
    else 
    {
      // not required, so find dom node with oj-label-required-icon on it.
      // Remove it.
      this.uiLabel.find(".oj-label-required-icon").remove();
    }
  },
  /**
   * Note that _setOption does not get called during create. it only gets called
   * when the component has already been created.
   * @override
   * @protected
   */
  _setOption : function (key, value)
  {
    this._super(key, value);

    if (key === "required")
    {
      this._refreshRequired();
    }

    // if user changed the help definition or source, then update the UI.
    // Find the help dom first. If it exists, replace it with new dom.
    // if it doesn't exist, add it.
     if (key === "help")
    {
      this._refreshHelp();
    }
  }, 
  /**
   * Return the subcomponent node represented by the documented locator attribute values.
   * Test authors should target spinner sub elements using the following names:
   * <ul>
   * <li><b>oj-label-help-icon</b>: the label's help icon</li>
   * <li><b>oj-label-help-icon-anchor</b>: the anchor tag of the help icon</li>
   * <li><b>oj-label-required-icon</b>: the label's required icon</li>
   * </ul>
   * 
   * @expose
   * @override
   * @memberof! oj._ojLabel
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
    if (subId === "oj-label-help-icon") {
      return this.widget().find(".oj-label-help-icon")[0];
    }
    if (subId === "oj-label-help-icon-anchor") {
      return this.widget().find(".oj-label-help-icon").parent()[0];
    }
    if (subId === "oj-label-required-icon") {
        return this.widget().find(".oj-label-required-icon")[0];
    }
    
    // Non-null locators have to be handled by the component subclasses
    return null;
  },  
  /**
   * 
   * @override
   * @protected
   */
  _destroy : function ()
  { 
    // replace the dom we added back with the element dom.
    this._super();
    // replace the oj-label* style classes we moved  to the root dom node 
    // on create
    for (var i=0; i < this.movedClassArray.length; i++)
    {
      this.element.addClass(this.movedClassArray[i]);
    }  
    this._removeHelpDefToLabel();
    
    this.uiLabel.replaceWith(this.element);
  }
  
  /**** end internal widget functions ****/ 
 
});
});
