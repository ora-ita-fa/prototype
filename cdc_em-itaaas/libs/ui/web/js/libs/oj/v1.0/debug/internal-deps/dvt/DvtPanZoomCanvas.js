define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  // Copyright (c) 2008, 2014, Oracle and/or its affiliates. All rights reserved.



//TODO: remove focusEvent
/**
 * @extends {DvtContainer}
 * @constructor
 * @class DvtComboBox ComboBox UI control
 * @param {DvtContext} context Platform specific context object
 * @param {String} id Optional id for this object
 * @param {Object} styleMap The object containing style specifications for this component
 */
var DvtComboBox = function(context, id, styleMap) {
  this.Init(context, id, styleMap);
};

/*
 * make DvtComboBox a subclass of DvtContainer
 */
DvtObj.createSubclass(DvtComboBox, DvtContainer, 'DvtComboBox');

DvtComboBox._HIDE_DROPDOWN_DELAY = 100;//in ms
DvtComboBox._DROPDOWN_OUTOFFOCUS_CHECK = 100;//in ms


/**
 * Initialization method called by the constructor
 *
 * @param {DvtContext} context Platform specific context object
 * @param {String} id Optional id for this object
 * @param {object} styleMap The object containing style specifications for this component
 */
DvtComboBox.prototype.Init = function(context, id, styleMap)
{
  DvtComboBox.superclass.Init.call(this, context, null, id);

  this._styleMap = styleMap;

  //array of button states to use for main button when given item is selected
  this._itemButtonStates = [];
  this._items = [];
  this._tooltips = [];
  this._selectedIndex = 0;

  //flag indicating if the main button states should change when
  //the selected item changes
  this._bStaticButtonStates = false;

  //BUG FIX #10142865: flag indicating that the dropdown has been hidden and
  //should be removed
  this._bRemoveDropdown = false;

  this._maxItemDim = new DvtRectangle(0, 0, 0, 0);
  this._dim = new DvtRectangle(0, 0, 0, 0);

  this._tooltipManager = context.getTooltipManager();
  this._isTouchDevice = DvtAgent.isTouchDevice();

  //create the button representing the collapsed state
  this._button = this.createButton(id + '_cl');
  this.addChild(this._button);

  //create the content area of the button, which appears over the button
  //itself instead of in the button so that the content doesn't
  //have to be copied for each button state
  this._contentArea = new DvtContainer(context);
  this._contentArea.setMouseEnabled(false);
  this.addChild(this._contentArea);

  //create timer to auto-hide the dropdown after focus moves out of combobox
  this._hideDropdownTimer = new DvtTimer(context, DvtComboBox._HIDE_DROPDOWN_DELAY,
                                         this.HandleHideDropdownTimer, this, 1);

  this._outOfFocusCheckTimer = new DvtTimer(context, DvtComboBox._DROPDOWN_OUTOFFOCUS_CHECK,
      this.HandleOutOfFocusCheckTimer, this, 1);
  this._dropdownItemClickEvent = false;
};


DvtComboBox.prototype._stopHideDropdownTimer = function() {
  if (this._hideDropdownTimer) {
    this._hideDropdownTimer.stop();
    this._hideDropdownTimer = null;
  }
};


/**
 * Get the index of the selected item.
 * @return {Number}  index of selected item
 */
DvtComboBox.prototype.getSelectedIndex = function() {
  return this._selectedIndex;
};


/**
 * Set the index of the selected item.
 * @param {Number} selectedIndex index of item to select
 */
DvtComboBox.prototype.setSelectedIndex = function(selectedIndex) {
  this._selectedIndex = selectedIndex;

  //only update the content if the states are not static
  if (! this._bStaticButtonStates) {
    //update the content area for the selected item
    this.UpdateContentArea();
  }

  this.FireChangeEvent(selectedIndex);
};


/**
 * Create the button representing the collapsed combo box.
 * @param {string} id Button id
 * @return {DvtButton} button representing the collapsed combo box
 */
DvtComboBox.prototype.createButton = function(id) {
  var button = new DvtButton(this.getCtx(),
                             this.createUpState(id),
                             this.createDownState(id),
                             this.createOverState(id),
                             null,
                             id);
  button.setCallback(this.HandleExpandClick, this);
  button.setCursor(DvtSelectionEffectUtils.getSelectingCursor());
  if (!this._isTouchDevice)
    button.addEvtListener(DvtMouseEvent.MOUSEDOWN, this.HandleButtonDown, false, this);
  button.setToggleEnabled(true);
  return button;
};


/**
 * Create the "up" state of the collapsed combo box button.
 *
 * @return display object representing "up" state
 */
DvtComboBox.prototype.createUpState = function(id) {
  var context = this.getCtx();
  var dim = this.getDimensions();

  var s = new DvtRect(context, 0, 0, dim.w, dim.h, id + '_up');
  s.setCornerRadius(DvtButtonLAFUtils.ROUND_RECT_ELLIPSE);

  //Note: no border
  s.setInvisibleFill();

  s.addChild(DvtComboBox.DrawArrow(context, s.getWidth(), s.getHeight()));
  return s;
};


/**
 * Create the "over" state of the collapsed combo box button.
 *
 * @return display object representing "over" state
 */
DvtComboBox.prototype.createOverState = function(id) {
  var context = this.getCtx();
  var dim = this.getDimensions();

  var s = new DvtRect(context, 0, 0, dim.w, dim.h, id + '_up');
  s.setCornerRadius(DvtButtonLAFUtils.ROUND_RECT_ELLIPSE);

  s.setSolidStroke(DvtButtonLAFUtils.BORDER_COLOR);
  //  s.setFill(new DvtGradientFill(DvtButtonLAFUtils.GRADIENT_LIGHT, 1));      // not passing arrays !!
  s.setFill(new DvtLinearGradientFill(0, [DvtButtonLAFUtils.GRADIENT_DARK, DvtButtonLAFUtils.GRADIENT_LIGHT]));  //temp

  s.addChild(DvtComboBox.DrawArrow(context, s.getWidth(), s.getHeight()));
  return s;
};


/**
 * Create the "down" state of the collapsed combo box button.
 *
 * @return display object representing "down" state
 */
DvtComboBox.prototype.createDownState = function(id) {
  var context = this.getCtx();
  var dim = this.getDimensions();

  var s = new DvtRect(context, 0, 0, dim.w, dim.h, id + '_up');
  s.setSolidStroke(DvtButtonLAFUtils.BORDER_COLOR);
  //  s.setFill(new DvtGradientFill(DvtButtonLAFUtils.GRADIENT_DARK, 1));     // not passing arrays!!
  s.setFill(new DvtLinearGradientFill(0, [DvtButtonLAFUtils.GRADIENT_LIGHT, DvtButtonLAFUtils.GRADIENT_DARK]));   // temp
  s.setCornerRadius(DvtButtonLAFUtils.ROUND_RECT_ELLIPSE);

  s.addChild(DvtComboBox.DrawArrow(context, s.getWidth(), s.getHeight()));
  return s;
};

/**
  * Set the static button states to use for the main button.
  *
  * @param {DvtDisplayable} enaState  enabled state
  * @param {DvtDisplayable} ovrState  over state
  * @param {DvtDisplayable} dwnState  down state
  */
//  Note: this method is only called by panelCard
DvtComboBox.prototype.setStaticButtonStates = function(enaState, ovrState, dwnState) {
  this._button.setUpState(enaState);
  this._button.setDownState(dwnState);
  this._button.setOverState(ovrState);

  //set the flag indicating that the button states are static
  this._bStaticButtonStates = true;
};


/**
 * Add an item to the ComboBox.
 *
 * @param {DvtDisplayablej}  s          display object to add to the ComboBox
 * @param {String}           tooltip    tooltip to show for the item
 * @param {DvtDisplayable}   enaState   enabled state to use for item button in dropdown
 * @param {DvtDisplayable}   ovrState   over state to use for item button in dropdown
 * @param {DvtDisplayable}   dwnState   down state to use for item button in dropdown
 */
DvtComboBox.prototype.addItem = function(obj, tooltip, enaState, ovrState, dwnState)
{
  obj.setMouseEnabled(false);                //disable mouse interaction with item

  this._items.push(obj);
  this._tooltips.push(tooltip);

  // get/set max item width & height

  var itdim = DvtButtonLAFUtils._getDimForced(this.getCtx(), (enaState ? enaState : obj));
  var maxItemDim = this._getMaxItemDim();
  var dim = this.getDimensions();
  var context = this.getCtx();

  if (itdim.w > maxItemDim.w) {
    maxItemDim.w = itdim.w;
    dim.w = itdim.w + 16;
  }
  if (itdim.h > maxItemDim.h) {
    maxItemDim.h = itdim.h;
    dim.h = itdim.h;
  }
  this._maxItemDim = maxItemDim;


  //store the array of states for the item button in the dropdown
  var buttonStates = null;

  if (enaState && ovrState && dwnState) {
    buttonStates = [];
    buttonStates[DvtButton.STATE_ENABLED] = enaState;
    buttonStates[DvtButton.STATE_OVER] = ovrState;
    buttonStates[DvtButton.STATE_DOWN] = dwnState;
  }
  this._itemButtonStates.push(buttonStates);

  //only create a new button and update the content if the states are not static
  if (! this._bStaticButtonStates) {
    //create a new button, taking the new item's dimensions into account
    this.removeChild(this._button);
    this._button = this.createButton(obj.getId());
    this.addChildAt(this._button, 0);

    //update the content area for the selected item
    this.UpdateContentArea();
  }
};


/**
 * Get an item in the ComboBox.
 *
 * @param i index of the item to get
 *
 * @return Sprite item in the ComboBox
 */
DvtComboBox.prototype.getItem = function(i) {
  return this._items[i];
};


/**
 * Get the number of items in the ComboBox.
 *
 * @return number of items in the ComboBox
 */
DvtComboBox.prototype.getItemCount = function() {
  return this._items.length;
};


/**
 * Get the index of the item in the ComboBox.
 *
 * @param s item to get index for
 *
 * @return index of the item in the ComboBox, or -1 if not found
 */
DvtComboBox.prototype.getItemIndex = function(s) {
  for (var i = 0; i < this.getItemCount(); i++) {
    if (this.getItem(i) === s)
      return i;
  }
  return - 1;
};


/**
 * Get the selected item.
 *
 * @return selected item
 */
DvtComboBox.prototype.getSelectedItem = function() {
  var selIndex = this.getSelectedIndex();
  if (selIndex < 0 || selIndex > this._items.length - 1)
    return null;

  return this._items[selIndex];
};


/**
 * Fire a change event.
 *
 * @param index index of the selected item
 *
 * @return true if event was successfully dispatched, false otherwise
 */
DvtComboBox.prototype.FireChangeEvent = function(index) {
  var comboBoxEvent = new DvtComboBoxEvent(DvtComboBoxEvent.SUBTYPE_ITEM_CHANGE, index, this._event);
  this._event = null;
  this.FireListener(comboBoxEvent);

  return true;
};


/**
 * Handle a click on the collapsed combo box to show its dropdown.
 *
 * @param  {MouseEvent}   event
 */
DvtComboBox.prototype.HandleExpandClick = function(event)
{

  DvtEventManager.consumeEvent(event);    //don't want click to fall through to other components

  //BUG FIX #10142865: if the previous dropdown was hidden but hasn't been
  //removed yet, then remove it now before the new dropdown is created
  if (this._bRemoveDropdown) {
    this.RemoveDropdown();
  }

  var context = this.getCtx();

  //create the dropdown containing all the items
  this._dropdown = this.createDropdown();
  var dddim = DvtButtonLAFUtils._getDimForced(context, this._dropdown);
  this.addChild(this._dropdown);

  var dim = this._button.getDimensions();

  //BiDi: in right-to-left locale, shift dropdown towards the left
  var transX;
  if (DvtAgent.isRightToLeft(context)) {
    transX = - dddim.w + dim.w * 1 / 4;
  }
  //position the dropdown relative to the button (based on UI spec)
  else {
    transX = dim.w * 3 / 4;
  }
  this._dropdown.setTranslate(transX, dim.h * 3 / 4);

  //disable the expand button until the dropdown is dismissed
  this._button.setMouseEnabled(false);
  this._button.setToggled(true);

  this.FireListener(new DvtComboBoxEvent(DvtComboBoxEvent.SUBTYPE_SHOW_DROPDOWN));

  //add a mouse focus change listener to the stage to detect
  //when we should auto-hide the dropdown
  var stage = context.getStage();
  if (stage) {
    if (this._isTouchDevice) {
      stage.addEvtListener(DvtTouchEvent.TOUCHSTART, this.HandleStageMouseFocusChange, true, this);
    } else {
      stage.addEvtListener(DvtMouseEvent.MOUSEUP, this.HandleStageMouseFocusChange, true, this);
    }
  }
};


/**
 * Handle an event from the timer used to auto-hide the dropdown.
 *
 * @param event TimerEvent
 */
DvtComboBox.prototype.HandleHideDropdownTimer = function(event) {
  //hide the dropdown
  this.HideDropdown();

  //only update the content if the button states are not static
  if (! this._bStaticButtonStates) {
    //update the content area to show the currently selected item
    this.UpdateContentArea();
  }
};


/**
 * Handle a mouse focus change event on the stage.
 *
 * @param even FocusEvent
 */
DvtComboBox.prototype.HandleStageMouseFocusChange = function(event) {

  this._dropdownItemClickEvent = false;
  this._outOfFocusCheckTimer.reset();
  this._outOfFocusCheckTimer.start();
};


/**
 * Handle an event from the timer used to check focus change.
 * If the user clicked outside of the dropdown - hide the dropdown
 *
 * @param event TimerEvent
 */
DvtComboBox.prototype.HandleOutOfFocusCheckTimer = function(event) {
  if (!this._dropdownItemClickEvent) {
    //reset and start the timer to auto-hide the dropdown;
    //the timer will be stopped if an item in the dropdown was selected
    this._hideDropdownTimer.reset();
    this._hideDropdownTimer.start();
  }
};


/**
 * Create the dropdown showing all the available items to select.
 *
 * @return {DvtPath} display object representing the dropdown
 */
DvtComboBox.prototype.createDropdown = function() {
  //constants for padding around items in dropdown
  var comboBoxStyles = this._styleMap ? this._styleMap['comboBox'] : null;
  var topPadding = DvtStyleUtils.getStyle(comboBoxStyles, DvtPanZoomControlPanel.CP_PADDING_TOP, 0);
  var leftPadding = DvtStyleUtils.getStyle(comboBoxStyles, DvtPanZoomControlPanel.CP_PADDING_LEFT, 0);
  var bottomPadding = DvtStyleUtils.getStyle(comboBoxStyles, DvtPanZoomControlPanel.CP_PADDING_BOTTOM, 0);
  var rightPadding = DvtStyleUtils.getStyle(comboBoxStyles, DvtPanZoomControlPanel.CP_PADDING_RIGHT, 0);
  var interItemPadding = DvtStyleUtils.getStyle(comboBoxStyles, DvtPanZoomControlPanel.CP_PADDING_INNER, 0);

  var currY = topPadding;
  var context = this.getCtx();
  var dim;
  var itemSprite;
  var item;

  var content = new DvtContainer(context, '__dd');
  for (var i = 0; i < this._items.length; i++) {
    item = this._items[i];
    dim = DvtButtonLAFUtils._getDimForced(context, item);

    //move each item below the previous one
    itemSprite = new DvtContainer(context, '__it' + i);
    itemSprite.setTranslate(leftPadding, currY);

    itemSprite.addChild(item);
    item.setMouseEnabled(true);
    item.setCursor(DvtSelectionEffectUtils.getSelectingCursor());

    currY += dim.h + interItemPadding;

    //add event listeners to each item
    if (this._eventManager) {
      var proxy = new DvtPanZoomControlPanelEventHandlerProxy(this, this.HandleDropdownItemClick, this.HandleButtonDown,
          null, null, null,
          this._tooltips[i]);
      this._eventManager.associate(item, proxy);
    }
    content.addChild(itemSprite);
  }

  var dd = DvtButtonLAFUtils.drawDropdownShape(context,
                                               this._getMaxItemDim().w + leftPadding + rightPadding,
                                               currY + bottomPadding - interItemPadding, comboBoxStyles);
  dd.addChild(content);

  //draw the background behind all the items now that we know the size of the dropdown
  var borderColor = DvtStyleUtils.getStyle(this._styleMap, DvtCSSStyle.BORDER_COLOR, null);
  var borderAlpha = DvtStyleUtils.getStyle(this._styleMap, DvtPanZoomControlPanel.FRAME_ROLLOUT_ALPHA, 1);
  var bgColor = DvtStyleUtils.getStyle(this._styleMap, DvtCSSStyle.BACKGROUND_COLOR, null);
  var bgAlpha = DvtStyleUtils.getStyle(this._styleMap, DvtPanZoomControlPanel.BG_ALPHA, 1);

  dd.setSolidStroke(borderColor, borderAlpha);
  if (bgColor)
    dd.setSolidFill(bgColor, bgAlpha);

  return dd;
};


/**
 * Handle a mouse down
 *
 * @param event MouseEvent
 */
DvtComboBox.prototype.HandleButtonDown = function(event) {
  // logEvent(event, "DvtCombo");
  DvtEventManager.consumeEvent();
};


/**
 * Handle a mouse click on an item in the dropdown.
 *
 * @param event MouseEvent
 */
DvtComboBox.prototype.HandleDropdownItemClick = function(event) {
  // logEvent(event, "DvtCombo");
  this._dropdownItemClickEvent = true;

  //stop the dropdown auto-hide timer
  this._hideDropdownTimer.stop();
  //   this._hideDropdownTimer = null;

  //don't want click to fall through to other components
  DvtEventManager.consumeEvent(event);

  //update after the event so that animation is smooth
  // event.updateAfterEvent();

  //hide the dropdown and set the new selected item index
  //get the root sprite of the item
  var eventTarget = DvtComboBox.getRootDropdownItemSprite(event.target);

  var index;
  //get the index of the item
  if (this._dropdown && eventTarget) {
    var content = this._dropdown.getChildAt(0);
    if (content) {
      index = content.getChildIndex(eventTarget);
    }
  }

  this.HideDropdown();

  //Note: this._event is clear after firing
  this._event = event;

  this.setSelectedIndex(index);

};


/**
 * Get the root DropdownItemSprite of the given object in the dropdown.
 *
 * @param displayObject display object in an item in the dropdown
 *
 * @return root DropdownItemSprite parent for the object
 */
DvtComboBox.getRootDropdownItemSprite = function(displayObject) {
  var n;
  var id;
  while (displayObject) {
    id = displayObject.getId();
    if (id && displayObject instanceof DvtContainer && id.substr(0, 4) == '__it') {
      n = displayObject;
      break;
    }
    displayObject = displayObject.getParent();
  }

  return n;
};


/**
 * Hide the dropdown and enable the main button again.
 */
DvtComboBox.prototype.HideDropdown = function() {

  if (this._dropdown) {
    this._dropdown.setVisible(false);
    this._button.setToggled(false);
    this.FireListener(new DvtComboBoxEvent(DvtComboBoxEvent.SUBTYPE_HIDE_DROPDOWN));
    //BUG FIX #10142865: don't remove the dropdown yet, because we want
    //the item the mouse was over to register a mouse rollout event
    //first so that when we next show the dropdown, which will contain
    //the same item, the item won't appear to be highlighted at first;
    //instead, just set the flag to remove the dropdown later
    //this._dropdown.getParent().removeChild(this._dropdown);
    //this._dropdown = null;
    this._bRemoveDropdown = true;
  }

  //remove the mouse focus change listener from the stage now
  //that the dropdown is no longer visible
  //bug 9885226: ACC:keyBoard togggle for show/hide controlPanel is borken
  var stage = this.getCtx().getStage();
  if (stage) {
    if (this._isTouchDevice) {
      stage.removeEvtListener(DvtTouchEvent.TOUCHSTART, this.HandleStageMouseFocusChange, true, this);
    } else {
      stage.removeEvtListener(DvtMouseEvent.MOUSEUP, this.HandleStageMouseFocusChange, true, this);
    }
  }
  //enable expand button again
  this._button.setMouseEnabled(true);
};


/**
 * Remove the dropdown from the display list.
 */
DvtComboBox.prototype.RemoveDropdown = function() {
  //BUG FIX #10142865: remove the dropdown from the display list after
  //the item in it has had time to register a mouse rollout event
  //so that it doesn't appear to be highlighted the next time the
  //dropdown is displayed
  //turn off the flag because we're removing the dropdown now
  this._bRemoveDropdown = false;
  if (this._dropdown) {
    this._dropdown.setVisible(false);
    this._dropdown.getParent().removeChild(this._dropdown);
    this._dropdown = null;
  }
};


/**
 * Get the maximum size of the items.
 *
 * @return maximum size of the items
 */
DvtComboBox.prototype._getMaxItemDim = function() {
  return this._maxItemDim;
};


/**
 * @override
 */
DvtComboBox.prototype.getDimensions = function() {
  return this._dim;
};


/**
 * Update the content area of the collapsed combo box to
 * show the selected item.
 */
DvtComboBox.prototype.UpdateContentArea = function() {
  //flag indicating if the content should re-use the item itself
  var bUseItem = true;

  //if the states for the main button are specified by the item,
  //then use them
  var selIndex = this.getSelectedIndex();
  if (this._itemButtonStates && this._itemButtonStates.length > selIndex) {

    var buttonStates = this._itemButtonStates[selIndex];
    if (buttonStates && buttonStates.length > 2) {
      this._button.setUpState(buttonStates[DvtButton.STATE_ENABLED]);
      this._button.setOverState(buttonStates[DvtButton.STATE_OVER]);
      this._button.setDownState(buttonStates[DvtButton.STATE_DOWN]);

      //toggle the flag because the button states are specified
      bUseItem = false;
    }
  }

  //if using the item itself in the button, update the content with it
  if (bUseItem) {
    //remove old content
    if (this._contentArea.getNumChildren() > 0) {
      this._contentArea.removeChildAt(0);
    }
    //add currently selected item
    this._contentArea.addChild(this.getSelectedItem());
  }
};


/**
 * Draw the arrow in the collapsed combo box button.
 *
 * @param s Sprite in which to draw arrow
 */
DvtComboBox.DrawArrow = function(context, ww, hh) {
  var padding = 4;

  var aPoints = [];
  aPoints.push(ww - 12, hh / 2 - padding / 2);
  aPoints.push(ww - 4, hh / 2 - padding / 2);
  aPoints.push(ww - 8, hh / 2 + padding / 2);
  aPoints.push(ww - 12, hh / 2 - padding / 2);

  var shape = new DvtPolygon(context, aPoints, null);
  shape.setSolidStroke(DvtButtonLAFUtils.BORDER_COLOR);
  shape.setSolidFill(DvtButtonLAFUtils.BORDER_COLOR);
  shape.setMouseEnabled(false);

  return shape;
};


/**
 * Hide the dropdown and enable the main button again.
 */
DvtComboBox.prototype.closeDropdown = function() {
  this.HideDropdown();
};

DvtComboBox.prototype.setEventManager = function(eventManager) {
  this._eventManager = eventManager;
};



/**
 * @constructor
 * DropdownItemSprite Class to use as item in dropdown.
 */
var DropdownItemSprite = function(context, x, y, w, h, id) {
  this.Init(context, x, y, w, h, id);
};

/*
 * make DropdownItemSprite a subclass of DvtRect
 */
DvtObj.createSubclass(DropdownItemSprite, DvtRect, 'DropdownItemSprite');

DropdownItemSprite.prototype.Init = function(context, x, y, w, h, id) {
  DvtRect.superclass.Init.call(this, context);
};


/**
 * @constructor
 *
 * @param {string} subtype The type of DvtComboBoxEvent
 * @param {number} index The selected index, if this is a SUBTYPE_ITEM_CHANGE event
 * @param {DvtBaseEvent} evt the base event that caused this DvtComboBoxEvent
 */
var DvtComboBoxEvent = function(subtype, index, evt) {
  this.Init(subtype, index, evt);
};


/**
 * The type of this event
 *
 * @const
 */
DvtComboBoxEvent.TYPE = 'comboBoxEvent';


/**
 * This event subtype is fired when the combo box selection changes
 *
 * @const
 */
DvtComboBoxEvent.SUBTYPE_ITEM_CHANGE = 'cbItemChange';


/**
 * This event subtype is fired when the dropdown is shown
 *
 * @const
 */
DvtComboBoxEvent.SUBTYPE_SHOW_DROPDOWN = 'cbShowDropdown';


/**
 * This event subtype is fired when the dropdown is hidden
 *
 * @const
 */
DvtComboBoxEvent.SUBTYPE_HIDE_DROPDOWN = 'cbHideDropdown';

DvtObj.createSubclass(DvtComboBoxEvent, DvtBaseEvent, 'DvtComboBoxEvent');


/**
 * Initialization method called by the constructor.
 *
 * @param {string} subtype The subtype of DvtComboBoxEvent
 * @param {number} index The selected index, if this is a SUBTYPE_ITEM_CHANGE event
 * @param {DvtBaseEvent} evt the base event that caused this DvtComboBoxEvent
 */
DvtComboBoxEvent.prototype.Init = function(subtype, index, evt) {
  DvtComboBoxEvent.superclass.Init.call(this, DvtComboBoxEvent.TYPE);

  if (index === undefined) {
    index = -1;
  }
  this.subtype = subtype;
  this._index = index;
  this._evt = evt;
};


/**
 * Get the index of the selected item.
 *
 * @return index of the selected item
 */
DvtComboBoxEvent.prototype.getIndex = function() {
  return this._index;
};
/**
 * @constructor
 * Base Class for PanZoomControl
 */
var DvtBasePanZoomControl = function(context, panZoomCanvas, resources) {
  this.Init(context, panZoomCanvas, resources);
};


/*
 * make DvtBasePanZoomControl a subclass of DvtContainer
 */
DvtObj.createSubclass(DvtBasePanZoomControl, DvtContainer, 'DvtBasePanZoomControl');

/*--------------------------------------------------------------------*/
/*  Init()                                                            */
/*--------------------------------------------------------------------*/
DvtBasePanZoomControl.prototype.Init = function(context, panZoomCanvas, resources) {
  DvtBasePanZoomControl.superclass.Init.call(this, context);

  this._panZoomCanvas = panZoomCanvas;
  this._context = context;
  this._tooltipManager = context.getTooltipManager();
  this._resources = resources;
};


/**
 * Set the tooltip manager to use.
 *
 * @param tooltipManager manager to use
 */
DvtBasePanZoomControl.prototype.setTooltipManager = function(tooltipManager) {
  this._tooltipManager = tooltipManager;
};


/**
 * Get the tooltip manager being used.
 *
 * @return tooltipManager being used
 */
DvtBasePanZoomControl.prototype.getTooltipManager = function() {
  return this._tooltipManager;
};


/**
 * Set the translated resources to use.
 *
 * @param resources translated resources
 */
DvtBasePanZoomControl.prototype.setResources = function(resources) {
  this._resources = resources;
};


/**
 * Get the translated resources to use.
 *
 * @return translated resources
 */
DvtBasePanZoomControl.prototype.getResources = function() {
  if (this._resources == null) {
    this._resources = new DvtPanZoomControlPanelResources();
  }
  return this._resources;
};


/**
 * Show tooltip
 *
 * @return tooltip text to display
 */
DvtBasePanZoomControl.prototype.ShowTooltip = function(event, tooltip) {
  this.getTooltipManager().showTooltip(event.pageX, event.pageY,
                                       tooltip, event.target);
};


/**
 * Hide tooltip
 */
DvtBasePanZoomControl.prototype.HideTooltip = function() {
  this.getTooltipManager().hideTooltip();
};


DvtBasePanZoomControl.prototype._logEvent = function(event) {
  //  var name = this.getTypeName();
  //  if (name === "DvtPanControl") {
  //    logEvent(event, name);
  //  }
};

/**
 * @constructor
 * ZoomInButton for use with Diagram.
 */
var DvtZoomInButton = function(context, button, panZoomCanvas, resources, eventManager) {
  this.Init(context, button, panZoomCanvas, resources, eventManager);
};

DvtZoomInButton._ZOOM_INCR_TIMER_INTERVAL = 100;//in ms
DvtZoomInButton._ZOOM_START_TIMER_INTERVAL = 250;//in ms

/*
 * make DvtZoomInButton a subclass of DvtBasePanZoomControl
 */
DvtObj.createSubclass(DvtZoomInButton, DvtBasePanZoomControl, 'DvtZoomInButton');


/**
 * Helper method called by the constructor to initialize this object.
 * @param {DvtContext} context An object maintaining application specific context, as well as well as providing
 *                             access to platform specific data and objects, such as the factory
 * @param {DvtButton} button A button used by the control
 * @param {DvtPanZoomCanvas} canvas The PanZoomCanvas this control will be associated with
 * @param {DvtXmlNode} resources The map of translated resource strings
 * @param {DvtEventManager} eventManager An event manager to handle events for the control
 */
DvtZoomInButton.prototype.Init = function(context, button, panZoomCanvas, resources, eventManager) {
  DvtZoomInButton.superclass.Init.call(this, context, panZoomCanvas, resources);

  this._bZoomInMouseDown = false;
  this._zoomInTimer = new DvtTimer(context, DvtZoomInButton._ZOOM_INCR_TIMER_INTERVAL,
                                   this.HandleZoomInTimer, this);

  //BUG FIX #10037201: delay the start of the zoom in timer so that there is
  //less chance that it will interfere with a slow, regular click
  this._zoomStartTimer = new DvtTimer(context, DvtZoomInButton._ZOOM_START_TIMER_INTERVAL,
                                      this.HandleZoomStartTimer, this, 1);

  this._zoomInButton = button;
  this._zoomInButton.setCallback(this.HandleZoomInClick, this);
  this._eventManager = eventManager;
  var proxy = new DvtPanZoomControlPanelEventHandlerProxy(this, null, this.HandleZoomInMouseDown,
      this.HandleZoomInMouseUp, this.HandleZoomInMouseUp, null,
      this.getResources().getZoomInTooltip());
  this._eventManager.associate(this._zoomInButton, proxy);
  this.addChild(this._zoomInButton);
};


/**
 *this.Handle a mouse click on the zoom in button.
 *
 * @param event MouseEvent
 */
DvtZoomInButton.prototype.HandleZoomInClick = function(event) {
  this._logEvent(event);

  //don't respond to click event if the timer had been
  //continuously zooming
  if (this._zoomInTimer.isRunning()) {
    return;
  }
  var currZoom = this._panZoomCanvas.getZoom();
  var newZoom = this._panZoomCanvas.getNextZoomLevel(currZoom);
  //trace("zoomIn: " + currZoom + " to " + newZoom);

  var animator = new DvtAnimator(this.getCtx(), this._panZoomCanvas.getAnimationDuration());
  this._panZoomCanvas.zoomTo(newZoom, undefined, undefined, animator);
  animator.play();
};


/**
 *this.Handle a mouse down on the zoom in button.
 *
 * @param event MouseEvent
 */
DvtZoomInButton.prototype.HandleZoomInMouseDown = function(event) {
  this._logEvent(event);

  this._bZoomInMouseDown = true;

  //reset the timers and start the initial delay timer
  //TODO   this._zoomInTimer.reset();
  this._zoomInTimer.stop();

  //BUG FIX #10037201: delay the start of the zoom in timer so that there is
  //less chance that it will interfere with a slow, regular click
  //TODO   this._zoomStartTimer.reset();
  this._zoomStartTimer.stop();
  this._zoomStartTimer.start();
};


/**
 *this.Handle a mouse up on the zoom in button.
 *
 * @param event MouseEvent
 */
DvtZoomInButton.prototype.HandleZoomInMouseUp = function(event) {
  if (this._bZoomInMouseDown) {
    this._logEvent(event);

    this._bZoomInMouseDown = false;

    //stop the timers
    this._zoomInTimer.stop();
    this._zoomStartTimer.stop();
  }

};


/**
 *this.Handle an event from the start timer.
 *
 * @param event TimerEvent
 */
DvtZoomInButton.prototype.HandleZoomStartTimer = function(event) {
  //start the zoom in timer
  this._zoomInTimer.start();
};


/**
 *this.Handle a zoom in timer event to zoom in on the view.
 *
 * @param event TimerEvent
 */
DvtZoomInButton.prototype.HandleZoomInTimer = function(event) {
  var currZoom = this._panZoomCanvas.getZoom();
  var newZoom = this._panZoomCanvas.getNextZoomLevel(currZoom);

  this._panZoomCanvas.zoomTo(newZoom);
};

DvtZoomInButton.prototype._stopTimer = function() {
  if (this._zoomInTimer) {
    this._zoomInTimer.stop();
    this._zoomInTimer = null;
  }
  if (this._zoomStartTimer) {
    this._zoomStartTimer.stop();
    this._zoomStartTimer = null;
  }
};


/**
 * Sets button state
 * @param {boolean} enabled True to enable the button
 */
DvtZoomInButton.prototype.setEnabled = function(enabled) {
  this._zoomInButton.setCursor(enabled ? DvtSelectionEffectUtils.getSelectingCursor() : null);
  this._zoomInButton.setEnabled(enabled);
  this._zoomInButton.initState();
};
/**
 * @constructor
 * ZoomOutButton for use with Diagram.
 */
var DvtZoomOutButton = function(context, button, panZoomCanvas, resources, eventManager) {
  this.Init(context, button, panZoomCanvas, resources, eventManager);
};

DvtZoomOutButton._ZOOM_INCR_TIMER_INTERVAL = 100;//in ms
DvtZoomOutButton._ZOOM_START_TIMER_INTERVAL = 250;//in ms

/*
 * make DvtZoomOutButton a subclass of DvtBasePanZoomControl
 */
DvtObj.createSubclass(DvtZoomOutButton, DvtBasePanZoomControl, 'DvtZoomOutButton');


/**
 * Helper method called by the constructor to initialize this object.
 * @param {DvtContext} context An object maintaining application specific context, as well as well as providing
 *                             access to platform specific data and objects, such as the factory
 * @param {DvtButton} button A button used by the control
 * @param {DvtPanZoomCanvas} canvas The PanZoomCanvas this control will be associated with
 * @param {DvtXmlNode} resources The map of translated resource strings
 * @param {DvtEventManager} eventManager An event manager to handle events for the control
 */
DvtZoomOutButton.prototype.Init = function(context, button, panZoomCanvas, resources, eventManager) {
  DvtZoomOutButton.superclass.Init.call(this, context, panZoomCanvas, resources);
  this._bZoomOutMouseDown = false;
  this._zoomOutTimer = new DvtTimer(context, DvtZoomOutButton._ZOOM_INCR_TIMER_INTERVAL,
                                    this.HandleZoomOutTimer, this);

  //BUG FIX #10037201: delay the start of the zoom out timer so that there is
  //less chance that it will interfere with a slow, regular click
  this._zoomStartTimer = new DvtTimer(context, DvtZoomOutButton._ZOOM_START_TIMER_INTERVAL,
                                      this.HandleZoomStartTimer, this, 1);
  this._zoomOutButton = button;
  this._zoomOutButton.setCallback(this.HandleZoomOutClick, this);
  //this._zoomOutButton.setCursor(DvtSelectionEffectUtils.getSelectingCursor());
  this._eventManager = eventManager;
  var proxy = new DvtPanZoomControlPanelEventHandlerProxy(this, null, this.HandleZoomOutMouseDown,
      this.HandleZoomOutMouseUp, this.HandleZoomOutMouseUp, null,
      this.getResources().getZoomOutTooltip());
  this._eventManager.associate(this._zoomOutButton, proxy);

  this.addChild(this._zoomOutButton);
};


/**
 *this.Handle a mouse click on the zoom out button.
 *
 * @param event MouseEvent
 */
DvtZoomOutButton.prototype.HandleZoomOutClick = function(event) {
  this._logEvent(event);

  //don't respond to click event if the timer had been
  //continuously zooming
  if (this._zoomOutTimer.isRunning()) {
    return;
  }
  var currZoom = this._panZoomCanvas.getZoom();
  var newZoom = this._panZoomCanvas.getPrevZoomLevel(currZoom);
  //trace("zoomOut: " + currZoom + " to " + newZoom);
  var context = this.getCtx();
  var animator = new DvtAnimator(context, this._panZoomCanvas.getAnimationDuration());

  this._panZoomCanvas.zoomTo(newZoom, undefined, undefined, animator);

  animator.play();
};


/**
 *this.Handle a mouse down on the zoom out button.
 *
 * @param event MouseEvent
 */
DvtZoomOutButton.prototype.HandleZoomOutMouseDown = function(event) {
  this._logEvent(event);

  this._bZoomOutMouseDown = true;

  //reset the timers and start the initial delay timer
  //   this._zoomOutTimer.reset();
  this._zoomOutTimer.stop();

  //BUG FIX #10037201: delay the start of the zoom out timer so that there is
  //less chance that it will interfere with a slow, regular click
  //   this._zoomStartTimer.reset();
  this._zoomStartTimer.stop();
  this._zoomStartTimer.start();
};


/**
 *this.Handle a mouse up on the zoom out button.
 *
 * @param event MouseEvent
 */
DvtZoomOutButton.prototype.HandleZoomOutMouseUp = function(event) {
  if (this._bZoomOutMouseDown) {
    this._logEvent(event);

    this._bZoomOutMouseDown = false;

    //stop the timers
    this._zoomOutTimer.stop();
    this._zoomStartTimer.stop();
  }
};


/**
 *this.Handle an event from the start timer.
 *
 * @param event TimerEvent
 */
DvtZoomOutButton.prototype.HandleZoomStartTimer = function(event) {
  //start the zoom out timer
  this._zoomOutTimer.start();
};


/**
 *this.Handle a zoom out timer event to zoom out on the view.
 *
 * @param event TimerEvent
 */
DvtZoomOutButton.prototype.HandleZoomOutTimer = function(event) {
  var currZoom = this._panZoomCanvas.getZoom();
  var newZoom = this._panZoomCanvas.getPrevZoomLevel(currZoom);

  this._panZoomCanvas.zoomTo(newZoom);
};

DvtZoomOutButton.prototype._stopTimer = function() {
  if (this._zoomOutTimer) {
    this._zoomOutTimer.stop();
    this._zoomOutTimer = null;
  }
  if (this._zoomStartTimer) {
    this._zoomStartTimer.stop();
    this._zoomStartTimer = null;
  }
};


/**
 * Sets button state
 * @param {boolean} enabled True to enable the button
 */
DvtZoomOutButton.prototype.setEnabled = function(enabled) {
  this._zoomOutButton.setCursor(enabled ? DvtSelectionEffectUtils.getSelectingCursor() : null);
  this._zoomOutButton.setEnabled(enabled);
  this._zoomOutButton.initState();
};
/**
 * @constructor
 * ZoomToFitButton for use with Diagram.
 */
var DvtZoomToFitButton = function(context, button, panZoomCanvas, resources, eventManager) {
  this.Init(context, button, panZoomCanvas, resources, eventManager);
};

/*
 * make DvtZoomToFitButton a subclass of DvtBasePanZoomControl
 */
DvtObj.createSubclass(DvtZoomToFitButton, DvtBasePanZoomControl, 'DvtZoomToFitButton');


/**
 * Helper method called by the constructor to initialize this object.
 * @param {DvtContext} context An object maintaining application specific context, as well as well as providing
 *                             access to platform specific data and objects, such as the factory
 * @param {DvtButton} button A button used by the control
 * @param {DvtPanZoomCanvas} canvas The PanZoomCanvas this control will be associated with
 * @param {DvtXmlNode} resources The map of translated resource strings
 * @param {DvtEventManager} eventManager An event manager to handle events for the control
 */
DvtZoomToFitButton.prototype.Init = function(context, button, panZoomCanvas, resources, eventManager) {
  DvtZoomToFitButton.superclass.Init.call(this, context, panZoomCanvas, resources);

  this._zoomToFitButton = button;
  this._zoomToFitButton.setCallback(this.HandleZoomToFitClick, this);
  this._zoomToFitButton.setCursor(DvtSelectionEffectUtils.getSelectingCursor());
  this._eventManager = eventManager;
  var proxy = new DvtPanZoomControlPanelEventHandlerProxy(this, null, null,
      null, null, null,
      this.getResources().getZoomToFitTooltip());
  this._eventManager.associate(this._zoomToFitButton, proxy);

  this.addChild(this._zoomToFitButton);
};


/**
 * Handle a mouse click on the zoom to fit button.
 *
 * @param event MouseEvent
 */
DvtZoomToFitButton.prototype.HandleZoomToFitClick = function(event) {
  this._logEvent(event);

  var animator = new DvtAnimator(this.getCtx(), this._panZoomCanvas.getAnimationDuration());
  this._panZoomCanvas.zoomToFit(animator);
  animator.play();
};



/**
 * @constructor
 * ZoomSlider for use with Diagram.
 */
var DvtZoomSlider = function(context, panZoomCanvas, resources, zoomLevels, zoomLevelsTooltips, minScale, maxScale) {
  this.Init(context, panZoomCanvas, resources, zoomLevels, zoomLevelsTooltips, minScale, maxScale);
};

DvtZoomSlider.DEFAULT_ZOOM_LEVELS = [0, .25, .5, .75, 1];
DvtZoomSlider.ZOOM_SLIDER_HEIGHT = 76;
DvtZoomSlider.ZOOM_SLIDER_WIDTH = 15;

/*
 * make DvtZoomSlider a subclass of DvtBasePanZoomControl
 */
DvtObj.createSubclass(DvtZoomSlider, DvtBasePanZoomControl, 'DvtZoomSlider');

/*--------------------------------------------------------------------*/
/*  Init()                                                            */
/*--------------------------------------------------------------------*/
DvtZoomSlider.prototype.Init = function(context, panZoomCanvas, resources, zoomLevels, zoomLevelsTooltips, minScale, maxScale) {
  DvtZoomSlider.superclass.Init.call(this, context, panZoomCanvas, resources);

  this._zoomLevels = DvtZoomSlider.DEFAULT_ZOOM_LEVELS;
  this._bZoomSliderThumbMouseDown = false;
  this._panZoomCanvas.addEvtListener(ZoomEvent.ZOOM, this.HandleZoomEvent, false, this);

  if (!zoomLevels)
    zoomLevels = DvtZoomSlider.DEFAULT_ZOOM_LEVELS;
  this._zoomLevels = zoomLevels;

  this._zoomLevelsTooltips = zoomLevelsTooltips;
  if (!minScale)
    minScale = 0;
  if (!maxScale)
    maxScale = 1;
  this._minScale = minScale;
  this._maxScale = maxScale;

  this.Render();

};

DvtZoomSlider.prototype.getZoomLevels = function() {
  return this._zoomLevels;
};


/**
 * Set the tooltips for the discrete zoom levels in the zoom slider.
 *
 * @param zoomLevelsTooltips tooltips for discrete zoom levels in zoom slider
 */
DvtZoomSlider.prototype.setZoomLevelsTooltips = function(zoomLevelsTooltips) {
  this._zoomLevelsTooltips = zoomLevelsTooltips;

  this.AddZoomSliderCrosslinesTooltipListeners();
};


/**
 * Get the tooltips for the discrete zoom levels in the zoom slider.
 *
 * @return tooltips for discrete zoom levels in zoom slider
 */
DvtZoomSlider.prototype.getZoomLevelsTooltips = function() {
  return this._zoomLevelsTooltips;
};

DvtZoomSlider.prototype.AddZoomSliderCrosslinesTooltipListeners = function() {
  var zoomLevelsTooltips = this.getZoomLevelsTooltips();
  var numZoomLevelsTooltips = 0;
  if (zoomLevelsTooltips)
    numZoomLevelsTooltips = zoomLevelsTooltips.length;

  var crossline;
  var zoomLevelTooltip;
  var numCrosslines = 0;
  if (this._zoomSliderCrosslines)
    numCrosslines = this._zoomSliderCrosslines.length;

  for (var i = 0; i < numCrosslines; i++) {
    if (i < numZoomLevelsTooltips) {
      crossline = this._zoomSliderCrosslines[i];
      zoomLevelTooltip = zoomLevelsTooltips[i];
      if (zoomLevelTooltip != null && zoomLevelTooltip.length > 0) {
        if (!crossline.hasEventListener(DvtMouseEvent.MOUSEOVER)) {
          crossline.addEvtListener(DvtMouseEvent.MOUSEOVER, this.HandleZoomSliderCrosslineRollOver, false, 0, true);
        }
        if (!crossline.hasEventListener(DvtMouseEvent.MOUSEOUT)) {
          crossline.addEvtListener(DvtMouseEvent.MOUSEOUT, this.HandleZoomSliderCrosslineRollOut, false, 0, true);
        }
      }
    }
  }
};


/**
 * Create the zoom slider.
 *
 * @return zoom slider
 */
DvtZoomSlider.prototype.Render = function() {
  this._zoomSliderCrosslines = [];

  var zoomLevels = this.getZoomLevels();
  var numZoomLevels = 0;
  if (zoomLevels != null)
    numZoomLevels = zoomLevels.length;

  var ww = ZOOM_SLIDER_WIDTH;
  var gap = NaN;
  if (numZoomLevels >= 0)
    gap = ZOOM_SLIDER_HEIGHT / 5;
  var padding = 4;

  //set the size of the slider
  var g = graphics;
  g.lineStyle(0, 0, 0);
  g.DvtPathUtils.moveTo(0, 0);
  g.DvtPathUtils.lineTo(ww, ZOOM_SLIDER_HEIGHT);

  var lineThickness = 1;//2;
  var mouseLineThickness = 5;

  this._zoomSliderStartY = 2 * padding;
  this._zoomSliderEndY = height - 2 * padding;

  //draw the incremental cross lines
  var crossline;
  for (var i = 0; i < numZoomLevels; i++) {
    crossline = new Sprite();
    crossline.buttonMode = true;
    var intersectY = this._zoomSliderEndY - ((zoomLevels[i] - this._minScale) / (this._maxScale - this._minScale)) * (this._zoomSliderEndY - this._zoomSliderStartY);
    crossline.y = intersectY;
    addChild(crossline);
    g = crossline.graphics;
    PanZoomDvtButtonLAFUtilsPanelLAFUtils.drawZoomSliderCrossLine(crossline, padding, 0, ww);
    //BUG #6977287: increase mouse detection region
    g.lineStyle(mouseLineThickness, 0, 0);
    g.DvtPathUtils.moveTo(padding, 0);
    g.DvtPathUtils.lineTo(padding + ww, 0);

    this._zoomSliderCrosslines.push(crossline);

    crossline.addEvtListener(DvtMouseEvent.CLICK, this.HandleZoomSliderCrosslineClick, false, 0, true);
  }

  this.addZoomSliderCrosslinesTooltipListeners();

  //create the thumb
  this._zoomSliderThumb = this._createZoomSliderThumb();
  this._positionZoomSliderThumb();

  this.addChild(this._zoomSliderThumb);
};


/**
 * Create the zoom slider thumb.
 *
 * @return zoom slider thumb
 */
DvtZoomSlider.prototype._createZoomSliderThumb = function() {
  var padding = 4;
  var context = this.getCtx();
  var s = new DvtContainer(context);

  // Bug 9506699 - BIDI: Control panel buttons should have local specific icons
  // in case of R2L, zoomslider button should start from right
  var ww = DvtStyleUtils.isLocaleL2R() ? 0 : (ZOOM_SLIDER_WIDTH - 2);

  var button = new DvtButton(context,
      DvtButtonLAFUtils.createZoomSliderButtonState(context, DvtButton.STATE_ENABLED, ww),
      DvtButtonLAFUtils.createZoomSliderButtonState(DvtButton.STATE_OVER, ww),
      DvtButtonLAFUtils.createZoomSliderButtonState(DvtButton.STATE_DOWN, ww));
  s.addChild(button);

  s.addEvtListener(DvtMouseEvent.MOUSEDOWN, this.HandleZoomSliderThumbMouseDown, false, this);
  //BUG FIX #10079178: add mouseMove and mouseUp listeners when we get the mouseDown event
  //s.addEvtListener(DvtMouseEvent.MOUSEMOVE, this.HandleZoomSliderThumbMouseMove, false, this);
  //s.addEvtListener(DvtMouseEvent.MOUSEUP, this.HandleZoomSliderThumbMouseUp, false, this);
  //s.addEvtListener(DvtMouseEvent.MOUSEOUT, this.HandleZoomSliderThumbMouseUp, false, this);
  s.addEvtListener(DvtMouseEvent.CLICK, DvtEventManager.consumeEvent, false, this);

  return s;
};


/**
 * Position the zoom slider thumb based on the current zoom factor.
 */
DvtZoomSlider.prototype._positionZoomSliderThumb = function() {
  if (this._panZoomCanvas && this._zoomSliderThumb) {
    var currZoom = this._panZoomCanvas.getCurrentZoom();

    var yPos = Number(this._zoomSliderEndY) - ((currZoom - this._minScale) / (this._maxScale - this._minScale)) * Number(this._zoomSliderEndY - this._zoomSliderStartY);

    if (yPos > this._zoomSliderEndY)
      yPos = this._zoomSliderEndY;
    else if (yPos < this._zoomSliderStartY)
      yPos = this._zoomSliderStartY;
    this._zoomSliderThumb.y = yPos - (this._zoomSliderThumb.height / 2.0);
  }
};


/**
 *this.Handle a zoom event from the view.
 * The UI should update for the new zoom state.
 *
 * @param event zoom event
 */
DvtZoomSlider.prototype.HandleZoomEvent = function(event) {
  if (event.getSubType() == ZoomEvent.SUBTYPE_ZOOMED) {
    this._positionZoomSliderThumb();
  }
};


/**
 *this.Handle a mouse click on the continuous zoom slider line.
 *
 * @param event MouseEvent
 */
DvtZoomSlider.prototype.HandleZoomSliderBodyClick = function(event) {
  //don't want click to fall through to other components
  DvtEventManager.consumeEvent(event);

  var relY = this._zoomSliderEndY - event.localY;
  if (relY < 0)
    relY = 0;
  var ratio = this._minScale + (relY / (this._zoomSliderEndY - this._zoomSliderStartY)) * (this._maxScale - this._minScale);

  var animator = new DvtAnimator(this.getCtx(), this._panZoomCanvas.getAnimationDuration());
  this._panZoomCanvas.zoomTo(ratio, undefined, undefined, animator);
  animator.play();
};


/**
 *this.Handle a mouse click on one of the incremental
 * cross lines on the zoom slider.
 *
 * @param event MouseEvent
 */
DvtZoomSlider.prototype.HandleZoomSliderCrosslineClick = function(event) {
  //don't want click to fall through to other components
  DvtEventManager.consumeEvent(event);

  var i;
  var numCrosslines = 0;
  if (this._zoomSliderCrosslines != null)
    numCrosslines = this._zoomSliderCrosslines.length;
  for (i = 0; i < numCrosslines; i++) {
    //find the crossline that was clicked, so we know the index,
    //which is the same as the index of its zoom level in the array
    if (event.target == this._zoomSliderCrosslines[i])
      break;
  }
  var newScale = this._zoomLevels[i];

  var animator = new DvtAnimator(this.getCtx(), this._panZoomCanvas.getAnimationDuration());
  this._panZoomCanvas.zoomTo(newScale, undefined, undefined, animator);
  animator.play();
};

DvtZoomSlider.prototype.HandleZoomSliderCrosslineRollOver = function(event) {
  var i;
  var numCrosslines = 0;
  if (this._zoomSliderCrosslines != null)
    numCrosslines = this._zoomSliderCrosslines.length;
  for (i = 0; i < numCrosslines; i++) {
    //find the crossline that was rolled over, so we know the index,
    //which is the same as the index of its tooltip in the array
    if (event.target == this._zoomSliderCrosslines[i])
      break;
  }

  var tooltip = null;
  if (i < this._zoomLevelsTooltips.length)
    tooltip = this._zoomLevelsTooltips[i];

  if (tooltip && this.getTooltipManager()) {
    this.getTooltipManager().showTooltip(tooltip, event.target);
  }
};

DvtZoomSlider.prototype.HandleZoomSliderCrosslineRollOut = function(event) {
  if (this.getTooltipManager() != null)
    this.getTooltipManager().hideTooltip();
};


/**
 *this.Handle a mouse down on the zoom slider thumb.
 *
 * @param event MouseEvent
 */
DvtZoomSlider.prototype.HandleZoomSliderThumbMouseDown = function(event) {
  //don't want click to fall through to other components
  DvtEventManager.consumeEvent(event);

  this._bZoomSliderThumbMouseDown = true;
  //save the offset of the mouse position relative to the thumb position
  //this._zoomSliderThumbMouseDeltaY = event.localY;
  //BUG FIX #7241349: listen to mouse move event on thumb so we can
  //make the drag animation smooth
  //BUG FIX #10079178: add mouseUp listener on the stage so that
  //we can detect it even if the mouse is outside of the thumb
  stage.addEvtListener(DvtMouseEvent.MOUSEMOVE, this.HandleZoomSliderThumbMouseMove, false, 0, true);
  stage.addEvtListener(DvtMouseEvent.MOUSEUP, this.HandleZoomSliderThumbMouseUp, false, 0, true);

  var dragBounds = new Rectangle(this._zoomSliderThumb.x, this._zoomSliderStartY - this._zoomSliderThumb.height / 2, 0, this._zoomSliderEndY - this._zoomSliderStartY);
  this._zoomSliderThumb.startDrag(false, dragBounds);
};


/**
 *this.Handle a mouse move on the zoom slider thumb.
 *
 * @param event MouseEvent
 */
DvtZoomSlider.prototype.HandleZoomSliderThumbMouseMove = function(event) {
  //only respond if the mouse down occurred on the thumb
  if (this._bZoomSliderThumbMouseDown) {
    //BUG FIX #7241349: update the view while dragging so that the
    //animation is smooth
    event.updateAfterEvent();

    /*
        //don't want click to fall through to other components
        DvtEventManager.consumeEvent(event);

        //calculate new thumb position
        var newY = this._zoomSliderThumb.y + event.localY - this._zoomSliderThumbMouseDeltaY;
        //constrain thumb position to length of zoom slider line
        if (newY < this._zoomSliderStartY - this._zoomSliderThumb.height / 2)
          newY = this._zoomSliderStartY - this._zoomSliderThumb.height / 2;
        else if (newY > this._zoomSliderEndY - this._zoomSliderThumb.height / 2)
          newY = this._zoomSliderEndY - this._zoomSliderThumb.height / 2;
        //set the new thumb position
        this._zoomSliderThumb.y = newY;
        */
  }
};


/**
 *this.Handle a mouse up on the zoom slider thumb.
 *
 * @param event MouseEvent
 */
DvtZoomSlider.prototype.HandleZoomSliderThumbMouseUp = function(event) {
  //BUG FIX #7241349: remove mouse move listener on thumb
  //BUG FIX #10079178: remove mouseUp listener that was added when we got the mouseDown event
  stage.removeEvtListener(DvtMouseEvent.MOUSEMOVE, this.HandleZoomSliderThumbMouseMove);
  stage.removeEvtListener(DvtMouseEvent.MOUSEUP, this.HandleZoomSliderThumbMouseUp);

  if (this._bZoomSliderThumbMouseDown) {
    //don't want click to fall through to other components
    DvtEventManager.consumeEvent(event);

    this._bZoomSliderThumbMouseDown = false;

    this._zoomSliderThumb.stopDrag();

    //calculate the new zoom ratio
    var relY = this._zoomSliderEndY - (this._zoomSliderThumb.y + this._zoomSliderThumb.height / 2);
    if (relY < 0)
      relY = 0;
    var ratio = this._minScale + (relY / (this._zoomSliderEndY - this._zoomSliderStartY)) * (this._maxScale - this._minScale);

    var animator = new DvtAnimator(this.getCtx(), this._panZoomCanvas.getAnimationDuration());
    this._panZoomCanvas.zoomTo(ratio, undefined, undefined, animator);
    animator.play();
  }
};


/**
 * @constructor
 * PanControl for use with Diagram.
 */
var DvtPanControl = function(context, panButton, recenterButton, panZoomCanvas, resources, control, styleMap) {
  this.Init(context, panButton, recenterButton, panZoomCanvas, resources, control, styleMap);
};

DvtPanControl.PAN_TIMER_INTERVAL = 50; //in ms
DvtPanControl.PAN_TIMER_ACCELERATE_COUNT = 2 * //seconds
    (1000 / DvtPanControl.PAN_TIMER_INTERVAL);//iterations per second

/*
 * make DvtPanControl a subclass of DvtBasePanZoomControl
 */
DvtObj.createSubclass(DvtPanControl, DvtBasePanZoomControl, 'DvtPanControl');

/*--------------------------------------------------------------------*/
/*  Init()                                                            */
/*--------------------------------------------------------------------*/
DvtPanControl.prototype.Init = function(context, panButton, recenterButton, panZoomCanvas, resources, control, styleMap) {
  DvtPanControl.superclass.Init.call(this, context, panZoomCanvas, resources);

  this._panTimer = new DvtTimer(context, DvtPanControl.PAN_TIMER_INTERVAL,
                                this.HandlePanTimer, this);
  this._bPanMouseDown = false;
  this._panCenter = new DvtPoint(20, 20);

  if (control) {
    this._controls = control;
  }
  else {
    this._controls = DvtPanZoomControlPanel.CONTROLS_ALL;
  }

  panButton.addChild(recenterButton);
  if (recenterButton) {
    this._panCenterSprite = recenterButton;
    this._panCenterSprite.setVisible(false);
    this._panCenterSprite.addEvtListener(DvtTouchEvent.TOUCHSTART, this.HandlePanCenterClick, false, this);
    if (!DvtAgent.isTouchDevice()) {
      this._panCenterSprite.addEvtListener(DvtMouseEvent.CLICK, this.HandlePanCenterClick, false, this);
      this._panCenterSprite.addEvtListener(DvtMouseEvent.MOUSEDOWN, this.HandlePanCenterDown, false, this);
      this._panCenterSprite.addEvtListener(DvtMouseEvent.MOUSEUP, this.HandlePanCenterUp, false, this);
      this._panCenterSprite.addEvtListener(DvtMouseEvent.MOUSEOVER, this.HandlePanCenterRollOver, false, this);
      this._panCenterSprite.addEvtListener(DvtMouseEvent.MOUSEOUT, this.HandlePanCenterRollOut, false, this);
    }

    //Bug 13436842 - pan control rotates when hovering over the re-center button
    this._panCenterSprite.addEvtListener(DvtMouseEvent.MOUSEMOVE, this.HandlePanCenterMouseMove, false, this);
  }

  this._panButton = panButton;
  this._panButton.addEvtListener(DvtTouchEvent.TOUCHSTART, this.HandlePanClick, false, this);
  if (!DvtAgent.isTouchDevice()) {
    this._panButton.addEvtListener(DvtMouseEvent.CLICK, this.HandlePanClick, false, this);
    this._panButton.addEvtListener(DvtMouseEvent.MOUSEDOWN, this.HandlePanMouseDown, false, this);
    this._panButton.addEvtListener(DvtMouseEvent.MOUSEUP, this.HandlePanMouseUp, false, this);
    this._panButton.addEvtListener(DvtMouseEvent.MOUSEOVER, this.HandlePanRollOver, false, this);
    this._panButton.addEvtListener(DvtMouseEvent.MOUSEOUT, this.HandlePanRollOut, false, this);
    this._panButton.addEvtListener(DvtMouseEvent.MOUSEMOVE, this.HandlePanMouseMove, false, this);
  }

  this._panControl = DvtButtonLAFUtils.createPanButtonBackground(context, styleMap);
  this._panControl.addChild(this._panButton);
  this.addChild(this._panControl);
};


/**
 * Handle a click on the pan control.
 *
 * @param event MouseEvent
 */
DvtPanControl.prototype.HandlePanClick = function(event) {
  //don't want click to fall through to other components
  DvtEventManager.consumeEvent(event);
  // this._logEvent(event);
};


/**
 * Handle a mouse down on the pan control.
 *
 * @param event MouseEvent
 */
DvtPanControl.prototype.HandlePanMouseDown = function(event) {

  //don't want click to fall through to other components
  DvtEventManager.consumeEvent(event);
  // this._logEvent(event);

  this._bPanMouseDown = true;
  //  this._panButton._mouseDownHandler(event);

  //hide the pan center button
  if (this._panCenterSprite)
    this._panCenterSprite.setVisible(false);

  //hide the static compass arrows and show the dynamic directional arrow
  //this._panCompassArrows.visible = false;
  //this._panDirectionalArrow.visible = true;
  //rotate the directional arrow to point towards the mouse
  var stagePoint = this._panZoomCanvas.GetRelativeMousePosition(event);
  var localPoint = this._panButton.stageToLocal(stagePoint);
  this._rotatePanControlDirectionalArrow(localPoint.x, localPoint.y, this._panButton.downState);

  //save the mouse point
  this._panMousePoint = new DvtPoint(localPoint.x, localPoint.y);

  //start the pan timer for continuous panning while the mouse button
  //is held down
  this._panTimer.start();
  this._panTimerCount = 0;
};


/**
 * Handle a mouse up on the pan control.
 *
 * @param event MouseEvent
 */
DvtPanControl.prototype.HandlePanMouseUp = function(event) {

  if (this._bPanMouseDown) {
    //don't want click to fall through to other components
    DvtEventManager.consumeEvent(event);
    this._bPanMouseDown = false;

    //show the pan center button
    if (this._panCenterSprite) {
      this._panCenterSprite.setVisible(true);
    }

    //show the static compass arrows and hide the dynamic directional arrow
    //this._panCompassArrows.visible = true;
    //this._panDirectionalArrow.visible = false;
    //stop the pan timer and reset it for use next time
    this._panTimer.stop();
    //     this._panTimer.reset();

  }

  // this._logEvent(event);
  this._panButton._mouseOutHandler(event);

  this.HideTooltip();
};


/**
 * Handle a mouse roll over on the pan control.
 *
 * @param event MouseEvent
 */
DvtPanControl.prototype.HandlePanRollOver = function(event) {
  //  DvtEventManager.consumeEvent(event);
  // this._logEvent(event);

  //show the pan center button
  if (this._panCenterSprite) {
    this._panCenterSprite.setVisible(true);
  }

  //  this._panButton._mouseOverHandler(event);
  this.ShowTooltip(event, this.getResources().getPanControlTooltip());
};


/**
 * Handle a mouse roll out on the pan control.
 *
 * @param event MouseEvent
 */
DvtPanControl.prototype.HandlePanRollOut = function(event) {
  this.HandlePanMouseUp(event);

  //hide the pan center button
  if (this._panCenterSprite) {
    this._panCenterSprite.setVisible(false);
  }
};


/**
 * Handle a mouse move on the pan control.
 *
 * @param event MouseEvent
 */
DvtPanControl.prototype.HandlePanMouseMove = function(event) {

  //don't want click to fall through to other components
  DvtEventManager.consumeEvent(event);
  // this._logEvent(event);

  var stagePoint = this._panZoomCanvas.GetRelativeMousePosition(event);
  var localPoint = this._panButton.stageToLocal(stagePoint);
  if (this._bPanMouseDown) {
    //rotate the directional arrow to point towards the mouse
    this._rotatePanControlDirectionalArrow(localPoint.x, localPoint.y, this._panButton.downState);

    //save the mouse point
    this._panMousePoint = new DvtPoint(localPoint.x, localPoint.y);

  //     event.updateAfterEvent();
  }
  //BUG FIX #7352517: rotate the arrows shown when the mouse is over
  //the pan control
  else {
    //rotate the directional arrow to point towards the mouse
    this._rotatePanControlDirectionalArrow(localPoint.x, localPoint.y, this._panButton.overState);
  }
};


/**
 * Handle a pan timer event to pan the view.
 *
 * @param event TimerEvent
 */
DvtPanControl.prototype.HandlePanTimer = function() {

  if (this._bPanMouseDown) {
    //TODO: ???
    //     event.updateAfterEvent();

    //get the difference between the mouse position and the center of the pan control
    var diffY = this._panCenter.y - this._panMousePoint.y;
    var diffX = this._panCenter.x - this._panMousePoint.x;

    //calculate the slope and angle of the mouse from the center of the pan control
    //var slope = diffY / diffX;
    var angleRads = Math.atan2(diffY, diffX);

    //normalize dx and dy increments
    var deltaX = Math.cos(angleRads);
    var deltaY = Math.sin(angleRads);

    //multiply the normalized increment by this factor to determine
    //the pan distance
    var factor = 15;
    this._panTimerCount++;
    if (this._panTimerCount > DvtPanControl.PAN_TIMER_ACCELERATE_COUNT)
      factor *= 3;
    this._panZoomCanvas.panBy(factor * deltaX, factor * deltaY);
  }
};


/**
 * Handle a mouse click on the center of the pan control.
 *
 * @param event MouseEvent
 */
DvtPanControl.prototype.HandlePanCenterClick = function(event) {

  //don't want click to fall through to other components
  DvtEventManager.consumeEvent(event);
  this._logEvent(event);
  this._panZoomCanvas.zoomAndCenter();
};


/**
 * Handle a mouse down on the center of the pan control.
 *
 * @param event MouseEvent
 */
DvtPanControl.prototype.HandlePanCenterDown = function(event) {

  //don't want down to fall through to other components
  DvtEventManager.consumeEvent(event);
  this._logEvent(event);

  //  this._panCenterSprite._mouseDownHandler(event);
};


/**
 * Handle a mouse up on the center of the pan control.
 *
 * @param event MouseEvent
 */
DvtPanControl.prototype.HandlePanCenterUp = function(event) {

  //don't want up to fall through to other components
  DvtEventManager.consumeEvent(event);
  this._logEvent(event);

  //  this._panCenterSprite._mouseOutHandler(event);
  this.HideTooltip();
};


/**
 * Handle a mouse roll over on the center of the pan control.
 *
 * @param event MouseEvent
 */
DvtPanControl.prototype.HandlePanCenterRollOver = function(event) {
  //don't want up to fall through to other components
  // DvtEventManager.consumeEvent(event);
  this._logEvent(event);

  //  this._panCenterSprite._mouseOverHandler(event);
  this.ShowTooltip(event, this.getResources().getPanControlCenterTooltip());

  //Bug 13399111 - Wrong tooltip for pan control center button
  //Bug 13436842 - pan control rotates when hovering over the re-center button
  this._panCenterSprite.setVisible(true);
  DvtEventManager.consumeEvent(event);
};


/**
 * Handle a mouse roll out on the center of the pan control.
 *
 * @param event MouseEvent
 */
DvtPanControl.prototype.HandlePanCenterRollOut = function(event) {
  //don't want up to fall through to other components
  //  DvtEventManager.consumeEvent(event);
  this._logEvent(event);

  //  this._panCenterSprite._mouseOutHandler(event);
  this.HideTooltip();

  //Bug 13399111 - Wrong tooltip for pan control center button
  //Bug 13436842 - pan control rotates when hovering over the re-center button
  DvtEventManager.consumeEvent(event);
};


/**
 * Handle a mouse move on the center of the pan control.
 *
 * @param event MouseEvent
 */
DvtPanControl.prototype.HandlePanCenterMouseMove = function(event) {
  //Bug 13436842 - pan control rotates when hovering over the re-center button
  DvtEventManager.consumeEvent(event);
  this._logEvent(event);
};


/**
 * Rotate the pan control directional arrow to point towards the mouse.
 *
 * @param localX local mouse X coord
 * @param localY local mouse Y coord
 * @param displayObj DisplayObject to rotate
 */
DvtPanControl.prototype._rotatePanControlDirectionalArrow = function(localX, localY, displayObj) {
  var xOffset = localX - this._panCenter.x;
  var yOffset = localY - this._panCenter.y;

  // var angleDeg = Math.atan2(yOffset, xOffset) * RAD_TO_DEG;
  var angleRad = Math.atan2(yOffset, xOffset);

  //adjust the angle by 45 degrees because the image has the arrow pointing
  //down to the right at an angle of 45 degrees
  // displayObj.rotation = angleDeg - 45;
  displayObj.setRotation(angleRad - Math.PI / 4);

};

/**
 * @constructor
 */
var DvtPanZoomControlPanelEvent = function(subtype) {
  this.Init(DvtPanZoomControlPanelEvent.TYPE);
  this._subtype = subtype;
};

DvtObj.createSubclass(DvtPanZoomControlPanelEvent, DvtBaseComponentEvent, 'DvtPanZoomControlPanelEvent');

DvtPanZoomControlPanelEvent.TYPE = 'dvtPZCPExpand';
DvtPanZoomControlPanelEvent.SUBTYPE_SHOW = 'show';
DvtPanZoomControlPanelEvent.SUBTYPE_HIDE = 'hide';

DvtPanZoomControlPanelEvent.prototype.getSubType = function() {
  return this._subtype;
};
/**
 * @constructor
 * DvtPanZoomControlPanel for use with PanZoomCanvas.
 * This panel contains tools for zooming and panning.
 * By default, the panel is initially collapsed.
 */
var DvtPanZoomControlPanel = function(context, canvas, buttonImages, resources, controls, view) {
  this.Init(context, canvas, buttonImages, resources, controls, view);
};

DvtObj.createSubclass(DvtPanZoomControlPanel, DvtContainer, 'DvtPanZoomControlPanel');

DvtPanZoomControlPanel.STATE_COLLAPSED = 1;
DvtPanZoomControlPanel.STATE_EXPANDED = 2;
DvtPanZoomControlPanel.CONTROLS_ALL = 0xffffff;
DvtPanZoomControlPanel.CONTROLS_ZOOM_SLIDER = 0x000001;
DvtPanZoomControlPanel.CONTROLS_CENTER_BUTTON = 0x000010;
DvtPanZoomControlPanel.CONTROLS_ZOOM_TO_FIT_BUTTON = 0x000100;
DvtPanZoomControlPanel.CONTROLS_ZOOM = 0x001001; // include CONTROLS_ZOOM_SLIDER


DvtPanZoomControlPanel.CONTROL_PANEL_BEHAVIOR_KEY = 'controlPanelBehavior';


//DvtPanZoomControl style names, used in style map
/**
 * Attribute for background opacity
 * @const
 */
DvtPanZoomControlPanel.BG_ALPHA = 'backgroundAlpha';


/**
 * Attribute for background opacity on hover
 * @const
 */
DvtPanZoomControlPanel.BG_ROLLOVER_ALPHA = 'backgroundHoverAlpha';


/**
 * Attribute for background opacity on drag
 * @const
 */
DvtPanZoomControlPanel.BG_DRAG_ALPHA = 'backgroundDragAlpha';


/**
 * Attribute for border opacity
 * @const
 */
DvtPanZoomControlPanel.FRAME_ROLLOUT_ALPHA = 'borderAlpha';


/**
 * Attribute for border opacity on hover
 * @const
 */
DvtPanZoomControlPanel.FRAME_ROLLOVER_ALPHA = 'borderHoverAlpha';


/**
 * Attribute for border opacity on drag
 * @const
 */
DvtPanZoomControlPanel.FRAME_DRAG_ALPHA = 'borderDragAlpha';


/**
 * Attribute for button width style
 * @const
 */
DvtPanZoomControlPanel.CP_BUTTON_WIDTH = 'buttonWidth';


/**
 * Attribute for button height style
 * @const
 */
DvtPanZoomControlPanel.CP_BUTTON_HEIGHT = 'buttonHeight';


/**
 * Attribute for open/close button width style
 * @const
 */
DvtPanZoomControlPanel.CP_OPEN_CLOSE_BUTTON_WIDTH = 'openCloseButtonWidth';


/**
 * Attribute for tab size style
 * @const
 */
DvtPanZoomControlPanel.CP_TAB_SIZE = 'tabSize';


/**
 * Attribute for top padding style
 * @const
 */
DvtPanZoomControlPanel.CP_PADDING_TOP = 'paddingTop';


/**
 * Attribute for side padding style
 * @const
 */
DvtPanZoomControlPanel.CP_PADDING_SIDE = 'paddingSide';


/**
 * Attribute for bottom padding style
 * @const
 */
DvtPanZoomControlPanel.CP_PADDING_BOTTOM = 'paddingBottom';


/**
 * Attribute for left padding style
 * @const
 */
DvtPanZoomControlPanel.CP_PADDING_LEFT = 'paddingLeft';


/**
 * Attribute for right padding style
 * @const
 */
DvtPanZoomControlPanel.CP_PADDING_RIGHT = 'paddingRight';


/**
 * Attribute for inner padding style (padding used between elements)
 * @const
 */
DvtPanZoomControlPanel.CP_PADDING_INNER = 'paddingInner';


/**
 * Attribute for querying panel drawer styles
 * @const
 */
DvtPanZoomControlPanel.CP_PANEL_DRAWER_STYLES = 'panelDrawerStyles';


/**
 * Attribute for image width style
 * @const
 */
DvtPanZoomControlPanel.CP_IMAGE_WIDTH = 'imageWidth';


/**
 * Attribute for image height style
 * @const
 */
DvtPanZoomControlPanel.CP_IMAGE_HEIGHT = 'imageHeight';


/**
 * Attribute for querying center button (pan button) existence
 * @const
 */
DvtPanZoomControlPanel.CP_CENTER_BUTTON_DISPLAYED = 'centerButtonDisplayed';


/**
 * Helper method called by the constructor to initialize this object.
 * @param {DvtContext} context An object maintaining application specific context, as well as well as providing
 *                             access to platform specific data and objects, such as the factory
 * @param {DvtPanZoomCanvas} canvas The PanZoomCanvas this control panel will be associated with
 * @param {DvtXmlNode} buttonImages The map of button images
 * @param {DvtXmlNode} resources The map of translated resource strings
 * @param {number} controls The bit mask specifying which controls to show; constants are
 *        defined in this class and begin with CONTROLS_; the default
 *        is CONTROLS_ALL
 * @param {DvtAbstractPanZoomComponent} view The parent component that extends DvtAbstractPanZoomComponent
 */
DvtPanZoomControlPanel.prototype.Init = function(context, canvas, buttonImages, resources, controls, view) {

  DvtPanZoomControlPanel.superclass.Init.call(this, context, null, '_controlPanel');

  this._bMouseDragPanning = false;
  this._bMouseOver = false;

  this._panZoomCanvas = canvas;
  this._tooltipManager = context.getTooltipManager();

  this._resources = new DvtPanZoomControlPanelResources(resources);

  if (controls == null)
    this._controls = DvtPanZoomControlPanel.CONTROLS_ALL;
  else
    this._controls = controls;

  this._styleMap = null;
  this._view = view;
  if (this._view) {
    // retrieve the control panel style map including skinning defaults from the parent component
    this._styleMap = this._view.getControlPanelStyleMap();
    if (!this._styleMap[DvtPanZoomControlPanel.CP_CENTER_BUTTON_DISPLAYED]) {
      // disable the pan control if necessary and update the parent displayed controls value
      this._controls = this._controls & ~DvtPanZoomControlPanel.CONTROLS_CENTER_BUTTON;
      this._view.setDisplayedControls(this._controls);
    }
  }

  this._zoomLevels = DvtZoomSlider.DEFAULT_ZOOM_LEVELS;
  this._zoomSliderMinScale = 0;
  this._zoomSliderMaxScale = 1;
  this._state = DvtPanZoomControlPanel.STATE_COLLAPSED;
  this._bTransition = false;

  this._buttonImages = buttonImages;

  this._bgAlpha = this._styleMap[DvtPanZoomControlPanel.BG_ALPHA];

  this._eventManager = new DvtPanZoomControlPanelEventManager(context, null, view);
  this._eventManager.addRolloverType(DvtPanZoomControlPanel);
  this._eventManager.addListeners(this);
  this._eventManager.associate(this, this);

  var s = this.RenderCollapsed();
  this._background.setAlpha(this._bgAlpha);
  this._frame.setAlpha(this._styleMap[DvtPanZoomControlPanel.FRAME_ROLLOUT_ALPHA]);
  this.addChild(s);

  //TOOD: disable tabbing for control panel tools
  this.tabChildren = false;
  this.setPixelHinting(true);
};


/**
 * Set the state of this control panel.
 *
 * @param state STATE_EXPANDED or STATE_COLLAPSED
 */
DvtPanZoomControlPanel.prototype.setState = function(state) {
  if (this._state != state) {
    this.toggleExpandCollapse();
    this._state = state;
    this._applyAlphasRollout();
  }
};


/**
 * Get the state of this control panel.
 *
 * @return STATE_EXPANDED or STATE_COLLAPSED
 */
DvtPanZoomControlPanel.prototype.getState = function() {
  return this._state;
};


/**
 * Set the discrete zoom levels that appear in the zoom slider.
 *
 * @param zoomLevels array of discrete zoom levels to show in the zoom slider
 */
DvtPanZoomControlPanel.prototype.setZoomLevels = function(zoomLevels) {
  if (! zoomLevels) {
    zoomLevels = ZoomSlider.DEFAULT_ZOOM_LEVELS;
  }
  this._zoomLevels = zoomLevels;
  this.replaceZoomSlider();
};


/**
 * Get the discrete zoom levels that appear in the zoom slider.
 *
 * @return array of discrete zoom levels to show in the zoom slider
 */
DvtPanZoomControlPanel.prototype.getZoomLevels = function() {
  return this._zoomLevels;
};


/**
 * Set the tooltips for the discrete zoom levels in the zoom slider.
 *
 * @param zoomLevelsTooltips tooltips for discrete zoom levels in zoom slider
 */
DvtPanZoomControlPanel.prototype.setZoomLevelsTooltips = function(zoomLevelsTooltips) {
  this._zoomLevelsTooltips = zoomLevelsTooltips;
  if (this._zoomSlider) {
    this._zoomSlider.setZoomLevelsTooltips(zoomLevelsTooltips);
  }
};


/**
 * Get the tooltips for the discrete zoom levels in the zoom slider.
 *
 * @return tooltips for discrete zoom levels in zoom slider
 */
DvtPanZoomControlPanel.prototype.getZoomLevelsTooltips = function() {
  return this._zoomLevelsTooltips;
};


/**
 * Set the tooltip manager to use.
 *
 * @param tooltipManager manager to use
 */
DvtPanZoomControlPanel.prototype.setTooltipManager = function(tooltipManager) {
  this._tooltipManager = tooltipManager;
  if (this._zoomSlider) {
    this._zoomSlider.setTooltipManager(tooltipManager);
  }
  if (this._zoomInButton)
    this._zoomInButton.setTooltipManager(tooltipManager);
  if (this._zoomOutButton)
    this._zoomOutButton.setTooltipManager(tooltipManager);
  if (this._zoomToFitButton)
    this._zoomToFitButton.setTooltipManager(tooltipManager);

};


/**
 * Get the tooltip manager being used.
 *
 * @return tooltipManager being used
 */
DvtPanZoomControlPanel.prototype.getTooltipManager = function() {
  return this._tooltipManager;
};


/**
 * Set the translated resources to use.
 *
 * @param resources translated resources
 */
DvtPanZoomControlPanel.prototype.setResources = function(resources) {
  this._resources = resources;

  if (this._zoomSlider)
    this._zoomSlider.setResources(resources);
  if (this._zoomInButton)
    this._zoomInButton.setResources(resources);
  if (this._zoomOutButton)
    this._zoomOutButton.setResources(resources);
  if (this._zoomToFitButton)
    this._zoomToFitButton.setResources(resources);
};


/**
 * Get the translated resources to use.
 *
 * @return translated resources
 */
DvtPanZoomControlPanel.prototype.getResources = function() {
  return this._resources;
};


/**
 * Set the min scale for the zoom slider.
 *
 * @param minScale minimum value of zoom slider
 */
DvtPanZoomControlPanel.prototype.setZoomSliderMinScale = function(minScale) {
  this._zoomSliderMinScale = minScale;
  this.replaceZoomSlider();
};


/**
 * Get the min scale for the zoom slider.
 *
 * @return minimum value of zoom slider
 */
DvtPanZoomControlPanel.prototype.getZoomSliderMinScale = function() {
  return this._zoomSliderMinScale;
};


/**
 * Set the max scale for the zoom slider.
 *
 * @param maxScale maximum value of zoom slider
 */
DvtPanZoomControlPanel.prototype.setZoomSliderMaxScale = function(maxScale) {
  this._zoomSliderMaxScale = maxScale;
  this.replaceZoomSlider();
};


/**
 * Get the max scale for the zoom slider.
 *
 * @return maximum value of zoom slider
 */
DvtPanZoomControlPanel.prototype.getZoomSliderMaxScale = function() {
  return this._zoomSliderMaxScale;
};


/**
 * Notify the control panel that mouse drag panning has started.
 */
DvtPanZoomControlPanel.prototype.mouseDragPanningStarted = function() {
  this._bMouseDragPanning = true;
  //disable interaction
  this._background.setMouseEnabled(false);
  this._frame.setMouseEnabled(false);

  //change alphas of background and frame
  this._background.setAlpha(this._styleMap[DvtPanZoomControlPanel.BG_DRAG_ALPHA]);
  this._frame.setAlpha(this._styleMap[DvtPanZoomControlPanel.FRAME_DRAG_ALPHA]);
};


/**
 * Notify the control panel that mouse drag panning has ended.
 */
DvtPanZoomControlPanel.prototype.mouseDragPanningEnded = function() {
  this._bMouseDragPanning = false;
  //enable interaction
  this._background.setMouseEnabled(true);
  this._frame.setMouseEnabled(true);

  //change alphas based on whether the mouse is currently over
  //the control panel
  var bMouseOver = this._bMouseOver;//TODO???hitTestPoint(stage.mouseX, stage.mouseY, true);
  if (bMouseOver) {
    this.HandleRollOver(null);
  }
  else {
    this.HandleRollOut(null);
  }
};


/**
 * Rotate a given DisplayObject to pseudo-flip it horizontally for BiDi.
 * Vertically the DisplayObject must be the exact image of itself because it will
 * end up upside down.
 *
 * @param dispObj DisplayObject to rotate
 */
DvtPanZoomControlPanel.prototype.rotateControlPanelDisplayObject = function(dispObj) {
  dispObj.setRotation(Math.PI);

  var dim = DvtButtonLAFUtils._getDimForced(this._context, dispObj);
  dispObj.setTranslate(dispObj.getTranslateX() + dim.w, dispObj.getTranslateY() + dim.h);
};


//BUG FIX #10154856: show single row of controls in TMap
/**
 * Determine whether the horizontal arm of the control panel shows a single row or
 * two rows.
 * The default is false, meaning that the control panel shows two rows.
 *
 * @return true if the horizontal arm of the control panel shows a single row
 */
DvtPanZoomControlPanel.prototype.isSingleHorzRow = function() {
  return true;
};


//BUG FIX #10154856: show single row of controls in TMap
/**
 * Get the height of the horizontal bar of the control panel.
 *
 * @return {number} height of the horizontal bar of the control panel
 */
DvtPanZoomControlPanel.prototype.getViewPanelHeight = function() {
  var h = 0;
  if (this.isSingleHorzRow())
    h = DvtPanZoomControlPanelLAFUtils.getViewPanelHalfHeight();
  else
    h = DvtPanZoomControlPanelLAFUtils.getViewPanelHeight();
  var defaultHeight = DvtStyleUtils.getStyle(this._styleMap, DvtPanZoomControlPanel.CP_TAB_SIZE, 0);
  return Math.max(defaultHeight, h);
};


/**
 * Get the width of the vertical bar of the control panel.
 *
 * @return {number} the width of the vertical bar of the control panel
 */
DvtPanZoomControlPanel.prototype.getViewPanelWidth = function() {
  return DvtStyleUtils.getStyle(this._styleMap, DvtPanZoomControlPanel.CP_TAB_SIZE, 0);
};


/**
 * Render the collapsed state of the panel.
 *
 * @return {DvtContainer} container representing collapsed state
 */
DvtPanZoomControlPanel.prototype.RenderCollapsed = function() {
  var context = this.getCtx();

  var contentBar = new DvtContainer(context);
  var hh = this.getViewPanelHeight();

  var bR2L = DvtAgent.isRightToLeft(context);
  this._background = DvtPanZoomControlPanelLAFUtils.createEmptyViewClosedShape(context, hh, this._styleMap, bR2L);
  this._frame = DvtPanZoomControlPanelLAFUtils.createEmptyViewClosedFrame(context, hh, this._styleMap, bR2L);

  //Note: get dimensions before adding expand button
  this._collapsedDim = DvtButtonLAFUtils._getDimForced(context, this._frame);

  //create the control panel expand button
  this._expandButton = DvtButtonLAFUtils.createExpandButton(this.getCtx(), this._buttonImages, this.getViewPanelHeight(), this._styleMap, bR2L);
  this._expandButton.setCallback(this.HandleExpandClick, this);
  this._expandButton.setCursor(DvtSelectionEffectUtils.getSelectingCursor());
  var proxy = new DvtPanZoomControlPanelEventHandlerProxy(this, null, null,
      null, null, null,
      this.getResources().getControlPanelExpandTooltip());
  this._eventManager.associate(this._expandButton, proxy);

  this._frame.addChild(this._expandButton);

  contentBar.addChild(this._background);
  contentBar.addChild(this._frame);

  return contentBar;
};


/**
 * Creates and adds zoom to fit button to the vertical bar of the control panel
 * @param {DvtContainer} vertContentBar display object representing the vertical bar
 * @param {number} currY current Y coordinate
 * @return {number} updated current Y coordinate
 */
DvtPanZoomControlPanel.prototype._addZoomToFitButton = function(vertContentBar, currY) {

  //create the zoom to fit button
  if ((this._controls & DvtPanZoomControlPanel.CONTROLS_ZOOM_TO_FIT_BUTTON) != 0) {
    var paddingInner = DvtStyleUtils.getStyle(this._styleMap['vbar'], DvtPanZoomControlPanel.CP_PADDING_INNER, 0);
    var paddingSide = DvtStyleUtils.getStyle(this._styleMap['vbar'], DvtPanZoomControlPanel.CP_PADDING_LEFT, 0);
    this._zoomToFitButton = DvtButtonLAFUtils.createZoomToFitButton(this.getCtx(), this._panZoomCanvas,
        this.getResources(), this._eventManager, this._buttonImages,
        this._styleMap);
    this._zoomToFitButton.setTranslate(paddingSide, this._zoomToFitButton.getTranslateY() + currY);

    var dim = DvtButtonLAFUtils._getDimForced(this.getCtx(), this._zoomToFitButton);
    vertContentBar.addChild(this._zoomToFitButton);
    currY += dim.h;
    currY += paddingInner;
  }
  return currY;
};


/**
 * Creates and adds zoom controls (zoom in, zoom out, zoom slider) to the vertical bar of the control panel
 * @param {DvtContainer} vertContentBar display object representing the vertical bar
 * @param {number} currY current Y coordinate
 * @return {number} updated current Y coordinate
 */
DvtPanZoomControlPanel.prototype._addZoomControls = function(vertContentBar, currY) {

  var dim = null;
  var paddingInner = DvtStyleUtils.getStyle(this._styleMap['vbar'], DvtPanZoomControlPanel.CP_PADDING_INNER, 0);
  var paddingSide = DvtStyleUtils.getStyle(this._styleMap['vbar'], DvtPanZoomControlPanel.CP_PADDING_LEFT, 0);
  if ((this._controls & DvtPanZoomControlPanel.CONTROLS_ZOOM) != 0) {

    //create the zoom in button
    this._zoomInButton = DvtButtonLAFUtils.createZoomInButton(this.getCtx(), this._panZoomCanvas,
                                                              this.getResources(), this._eventManager, this._buttonImages,
                                                              this._styleMap);
    this._zoomInButton.setTranslate(paddingSide, this._zoomInButton.getTranslateY() + currY);

    dim = DvtButtonLAFUtils._getDimForced(this.getCtx(), this._zoomInButton);
    vertContentBar.addChild(this._zoomInButton);
    currY += (dim.h + paddingInner);

    if (this.isZoomSliderShown()) {
      //create the zoom slider
      this._zoomSlider = this.createZoomSlider();
      this._zoomSlider.setTranslate(paddingSide, this._zoomSlider.getTranslateY() + currY);

      dim = DvtButtonLAFUtils._getDimForced(this.getCtx(), this._zoomSlider);
      vertContentBar.addChild(this._zoomSlider);
      currY += (dim.h + paddingInner);
    }

    //create the zoom out button
    this._zoomOutButton = DvtButtonLAFUtils.createZoomOutButton(this.getCtx(), this._panZoomCanvas,
                                                                this.getResources(), this._eventManager, this._buttonImages, this._styleMap);
    this._zoomOutButton.setTranslate(paddingSide, this._zoomOutButton.getTranslateY() + currY);

    dim = DvtButtonLAFUtils._getDimForced(this.getCtx(), this._zoomOutButton);
    vertContentBar.addChild(this._zoomOutButton);
    currY += dim.h;
    this.enableZoomControls();
  }
  return currY;
};


/**
 * Creates vertical bar background and border
 * @param {DvtContainer} horzContentBar display object representing the horizontal bar
 * @param {DvtContainer} vertContentBar display object representing the vertical bar
 * @param {number} nKidHorzContentBar number of child objects on the horizontal bar
 * @param {number} currY current Y coordinate
 * @return {number} updated current Y coordinate
 */
DvtPanZoomControlPanel.prototype._createVBarBackground = function(horzContentBar, vertContentBar, nKidHorzContentBar, currY) {

  var context = this.getCtx();
  if (vertContentBar) {

    // Bug 9686175 - controlPanel looks bad when featuresOff="pan zoom cardSync changeLayout"
    // if zoom-to-fit is the only button left on vertContentBar and there is no buttonss in
    // horzContentBar, make bottom right corner square (not round)

    // Bug 10080038 - inconsistent control panel changes for different values of featuresoff
    // featuresOff = "pan zoom"
    var nKidsVert = vertContentBar.getNumChildren();
    var roundedCorner =
        (nKidsVert > 1 || this._zoomToFitButton == null || nKidHorzContentBar > 1 ||
        (nKidHorzContentBar > 0 && nKidsVert == 1));

    var openside = null; // alta style
    if (this._styleMap && this._styleMap[DvtPanZoomControlPanel.CP_PANEL_DRAWER_STYLES]) {
      if (nKidHorzContentBar > 0)
        openside = DvtPanZoomControlPanelLAFUtils.OPEN_TOP;
      else
        openside = DvtPanZoomControlPanelLAFUtils.OPEN_RIGHT;
    }

    var dim = DvtButtonLAFUtils._getDimForced(context, horzContentBar);

    currY += 4;
    var cpHeight = roundedCorner ? currY : Math.max(dim.h, currY);
    var paddingBottom = DvtStyleUtils.getStyle(this._styleMap['vbar'], DvtPanZoomControlPanel.CP_PADDING_BOTTOM, 0);
    cpHeight += paddingBottom;

    var zoomShape = DvtPanZoomControlPanelLAFUtils.renderEmptyZoomShape(context, cpHeight, this._styleMap, openside, this.getViewPanelHeight());
    var zoomFrame = DvtPanZoomControlPanelLAFUtils.renderEmptyZoomFrame(context, cpHeight, roundedCorner, this._styleMap, openside, this.getViewPanelHeight());

    zoomShape.setTranslate(vertContentBar.getTranslateX(), vertContentBar.getTranslateY());

    this._background.addChild(zoomShape);
    vertContentBar.addChildAt(zoomFrame, 0);
  }

  return currY;
};


/**
 * Positions elements on the vertical bar
 * @param {DvtContainer} horzContentBar display object representing the horizontal bar
 * @param {DvtContainer} vertContentBar display object representing the vertical bar
 * @param {number} currY current Y coordinate
 * @return {number} updated current Y coordinate
 */
DvtPanZoomControlPanel.prototype._positionVBarElements = function(horzContentBar, vertContentBar, currY) {

  var dim = null;
  var context = this.getCtx();
  var bBiDi = DvtAgent.isRightToLeft(context);

  var buttonWidth = DvtStyleUtils.getStyle(this._styleMap, DvtPanZoomControlPanel.CP_OPEN_CLOSE_BUTTON_WIDTH, 0);

  if (! this._additionalContent &&
      (this._controls & DvtPanZoomControlPanel.CONTROLS_CENTER_BUTTON) == 0) {

    if (bBiDi) {
      horzContentBar.setTranslateX(0 - horzContentBar.getTranslateX());
      horzContentBar.setTranslateY(0);

      if (vertContentBar) {
        dim = DvtButtonLAFUtils._getDimForced(context, vertContentBar);
        horzContentBar.setTranslateX(horzContentBar.getTranslateX() - buttonWidth);
        vertContentBar.setTranslateY(0);
      }
    }
    else {
      if (vertContentBar) {
        var cpWidth = this.getViewPanelWidth();
        vertContentBar.setTranslate(0, 0);
        horzContentBar.setTranslate(horzContentBar.getTranslateX() + cpWidth, 0);
      }
      else {
        horzContentBar.setTranslate(horzContentBar.getTranslateX(), 0);
      }
    }
  }
  else if (bBiDi && vertContentBar) {
    var dimHorizontal = DvtButtonLAFUtils._getDimForced(context, horzContentBar);
    var barWidth = this.getViewPanelWidth();
    horzContentBar.setTranslateX(0);
    vertContentBar.setTranslateX(dimHorizontal.w + dimHorizontal.x - barWidth);
  }

};


/**
 * Creates pan control and adds it to the horizontal bar of the control panel
 * @param {DvtContainer} horzContentBar display object representing the horizontal bar
 * @param {number} nKidHorzContentBar number of child objects on the horizontal bar
 * @return {number} updated number of child objects on the horizontal bar
 */
DvtPanZoomControlPanel.prototype._createHBarPanControl = function(horzContentBar, nKidHorzContentBar) {

  var context = this.getCtx();

  //BUG FIX #10154856: determine if the control panel is showing a single or
  //double row of controls
  var bSingleRow = this.isSingleHorzRow();

  // hide panControl if it is off
  if ((this._controls & DvtPanZoomControlPanel.CONTROLS_CENTER_BUTTON) != 0) {
    this._panControl = DvtButtonLAFUtils.createPanControl(context, this._panZoomCanvas, this.getResources(), this._controls, this._buttonImages, this._styleMap);

    //BUG FIX #10154856: create underlays to erase the view of the intersection
    //between the horz and vert arms of the control panel under the pan control,
    //and to show a solid background behind the pan control so that it blends
    //in with the rest of the control panel
    if (bSingleRow) {
      this._panControlUnderlay = DvtButtonLAFUtils.createPanButtonUnderlay(context, this._styleMap);
      this._panControlUnderlay2 = DvtButtonLAFUtils.createPanButtonUnderlay(context, this._styleMap);

      //need to add this one first, because it will be used to erase everything
      //underneath
      horzContentBar.addChild(this._panControlUnderlay2);
      //add this one second, because it will be visible behind the pan control
      horzContentBar.addChild(this._panControlUnderlay);

      //TODO: Note don't have BlendMode in html5
      //need to set container blendMode to LAYER so that we can use ERASE on
      //bottom-most underlay
      //       this.blendMode = BlendMode.LAYER;
      //       panControlUnderlay2.blendMode = BlendMode.ERASE;
    }

    horzContentBar.addChild(this._panControl);
    nKidHorzContentBar++;
  }

  return nKidHorzContentBar;
};


/**
 * Creates a container that holds additional content created by subclasses. Adds the container to the horizontal bar.
 * See PopulateHorzContentBar() method for details about additional content.
 * @param {DvtContainer} horzContentBar display object representing the horizontal bar
 * @param {number} nKidHorzContentBar number of child objects on the horizontal bar
 * @return {number} updated number of child objects on the horizontal bar
 */
DvtPanZoomControlPanel.prototype._createHBarAdditionalContent = function(horzContentBar, nKidHorzContentBar) {

  var context = this.getCtx();

  //allow subclasses to put their custom tools in the horzContentBar
  this._additionalContent = new DvtContainer(context);
  this.PopulateHorzContentBar(this._additionalContent);

  // dont render additionalContent if no children
  if (this._additionalContent.getNumChildren() > 0) {
    horzContentBar.addChild(this._additionalContent);
    nKidHorzContentBar++;
  }
  else {
    this._additionalContent = null;
  }
  return nKidHorzContentBar;

};


/**
 * Creates a collapse button for the horizontal bar
 * @param {DvtContainer} horzContentBar display object representing the horizontal bar
 */
DvtPanZoomControlPanel.prototype._createHBarCollapseButton = function(horzContentBar) {
  this._collapseButton = DvtButtonLAFUtils.createCollapseButton(this.getCtx(), this._buttonImages, this.getViewPanelHeight(), this._styleMap, DvtAgent.isRightToLeft(this.getCtx()));
  this._collapseButton.setCallback(this.HandleCollapseClick, this);
  this._collapseButton.setCursor(DvtSelectionEffectUtils.getSelectingCursor());
  var proxy = new DvtPanZoomControlPanelEventHandlerProxy(this, null, null,
      null, null, null,
      this.getResources().getControlPanelCollapseTooltip());
  this._eventManager.associate(this._collapseButton, proxy);
  horzContentBar.addChild(this._collapseButton);
};


/**
 * Positions elements on the horizontal bar of the control panel
 * @param {boolean} bBiDi true if right-to-left, false otherwise
 * @param {number} currX current X coordinate
 * @return {number} updated current X coordinate
 */
DvtPanZoomControlPanel.prototype._positionHBarElements = function(bBiDi, currX) {
  var context = this._context;
  var dim = null;
  var collapseButtonWidth = DvtStyleUtils.getStyle(this._styleMap, DvtPanZoomControlPanel.CP_OPEN_CLOSE_BUTTON_WIDTH, 0);
  var buttonWidth = DvtStyleUtils.getStyle(this._styleMap, DvtPanZoomControlPanel.CP_BUTTON_WIDTH, 0);
  var panelWidth = this.getViewPanelWidth();
  var panelHeight = this.getViewPanelHeight();
  var buttonPaddingSide = DvtStyleUtils.getStyle(this._styleMap['hbar'], DvtPanZoomControlPanel.CP_PADDING_LEFT, 0);
  var buttonPaddingInner = DvtStyleUtils.getStyle(this._styleMap['hbar'], DvtPanZoomControlPanel.CP_PADDING_INNER, 0);

  if (bBiDi) {
    this._collapseButton.setTranslateX(0);
    currX += collapseButtonWidth;

    if (this._additionalContent) {
      dim = DvtButtonLAFUtils._getDimForced(context, this._additionalContent);
      currX += buttonPaddingInner;
      this._additionalContent.setTranslate(currX, (panelHeight - dim.h) / 2);

      currX += Math.max(dim.w, buttonWidth);
    }

    if (this._panControl) {
      currX += buttonPaddingInner;
      var yy = 3.5;

      this._panControl.setTranslate(currX, yy);

      //BUG FIX #10154856: keep underlays in sync with pan control position
      if (this._panControlUnderlay) {
        this._panControlUnderlay.setTranslate(currX, yy);
      }

      if (this._panControlUnderlay2) {
        this._panControlUnderlay2.setTranslate(currX, yy);
      }
      dim = DvtButtonLAFUtils._getDimForced(context, this._panControl);//40, 40
      currX += dim.w;
    }
    currX += buttonPaddingSide;
  }
  else {
    //position pan control
    if (this._panControl)
    {
      //offset the pan control slightly
      currX += buttonPaddingSide;
      var xx = buttonPaddingSide;
      var yy = 3.5;
      this._panControl.setTranslate(xx, yy);

      //BUG FIX #10154856: keep underlays in sync with pan control position
      if (this._panControlUnderlay) {
        this._panControlUnderlay.setTranslate(xx, yy);
      }
      if (this._panControlUnderlay2) {
        this._panControlUnderlay2.setTranslate(xx, yy);
      }

      dim = DvtButtonLAFUtils._getDimForced(context, this._panControl);
      currX += buttonPaddingInner + dim.w;
      currX += 1;//49
    }

    //position additional content
    if (this._additionalContent) {
      dim = DvtButtonLAFUtils._getDimForced(context, this._additionalContent);
      if (currX == 0)
        currX += buttonPaddingSide;
      this._additionalContent.setTranslate(currX, (panelHeight - dim.h) / 2);

      currX += dim.w;
      currX += buttonPaddingInner;
      currX = Math.max(currX, panelWidth);
    }

    //position collapse button
    this._collapseButton.setTranslateX(currX);
    currX += collapseButtonWidth;
  }
  return currX;
};


/**
 * Creates horizontal bar background and border
 * @param {DvtContainer} horzContentBar display object representing the horizontal bar
 * @param {DvtContainer} vertContentBar display object representing the vertical bar
 * @param {number} nKidHorzContentBar number of child objects on the horizontal bar
 * @param {boolean} bBiDi true if right-to-left, false otherwise
 * @param {number} currX current X coordinate
 */
DvtPanZoomControlPanel.prototype._createHBarBackground = function(horzContentBar, vertContentBar, nKidHorzContentBar, bBiDi, currX) {
  var context = this._context;
  var buttonWidth = DvtStyleUtils.getStyle(this._styleMap, DvtPanZoomControlPanel.CP_OPEN_CLOSE_BUTTON_WIDTH, 0);
  var panelWidth = DvtStyleUtils.getStyle(this._styleMap, DvtPanZoomControlPanel.CP_TAB_SIZE, 0);
  var panelDrawerStyle = DvtStyleUtils.getStyle(this._styleMap, DvtPanZoomControlPanel.CP_PANEL_DRAWER_STYLES, null);
  var backgroundWidth = panelDrawerStyle ? currX : currX - buttonWidth;
  var backgroundHeight = this.getViewPanelHeight();
  var backgroundFrameOffsetX = 0;
  var backgroundShapeOffsetX = 0;
  if (!panelDrawerStyle) {
    backgroundFrameOffsetX = bBiDi ? buttonWidth : 0;
    backgroundShapeOffsetX = bBiDi ? buttonWidth : 0;
  }
  else if (panelDrawerStyle && nKidHorzContentBar == 0)
    backgroundShapeOffsetX = bBiDi ? -panelWidth : panelWidth;

  if (nKidHorzContentBar > 0 || panelDrawerStyle) {
    var viewFrame = null;

    var r = parseInt(DvtStyleUtils.getStyle(this._styleMap, DvtCSSStyle.BORDER_RADIUS, 0));
    if (panelDrawerStyle) {
      var openSide = nKidHorzContentBar > 0 && vertContentBar != null ? DvtPanZoomControlPanelLAFUtils.OPEN_BOTTOM : DvtPanZoomControlPanelLAFUtils.OPEN_LEFT;
      viewFrame = DvtPanZoomControlPanelLAFUtils.makeViewOpenShapeHelperOpenSide(context, r, backgroundWidth, backgroundHeight, openSide, panelWidth);
    }
    else
      viewFrame = DvtPanZoomControlPanelLAFUtils.makeViewOpenShapeHelper(context, r, backgroundWidth - (2 * r), backgroundHeight - (2 * r), 0, 0, !bBiDi);
    viewFrame.setSolidStroke(DvtStyleUtils.getStyle(this._styleMap, DvtCSSStyle.BORDER_COLOR, null));
    viewFrame.setFill(null);
    viewFrame.setTranslateX(horzContentBar.getTranslateX() + backgroundFrameOffsetX);
    horzContentBar.addChildAt(viewFrame, 0);

    var viewShape = DvtPanZoomControlPanelLAFUtils.createEmptyViewOpenShape(context, backgroundWidth,
        this.getViewPanelHeight(), !bBiDi, this._styleMap);
    viewShape.setTranslate(horzContentBar.getTranslateX() + backgroundShapeOffsetX, horzContentBar.getTranslateY());
    this._background.addChild(viewShape);
  }
};


/**
 * Render the expanded state of the panel.
 *
 * @return {DvtContainer} display object representing expanded state
 */
DvtPanZoomControlPanel.prototype.RenderExpanded = function() {

  var context = this.getCtx();
  var s = new DvtContainer(context);

  this._background = new DvtContainer(context);
  this._frame = new DvtContainer(context);
  s.addChild(this._background);
  s.addChild(this._frame);

  var bBiDi = DvtAgent.isRightToLeft(context);

  //initialize the starting locations for content bar tools
  var currX = 0;

  //create the horizontal content bar, which contains the pan control,
  //layout combo box and control panel collapse button
  var horzContentBar = new DvtContainer(context);
  var nKidHorzContentBar = 0;

  nKidHorzContentBar = this._createHBarPanControl(horzContentBar, nKidHorzContentBar);
  this._createHBarCollapseButton(horzContentBar); //create before additional content,
  //additional content dropdown will be on top of collapse button
  nKidHorzContentBar = this._createHBarAdditionalContent(horzContentBar, nKidHorzContentBar);

  currX = this._positionHBarElements(bBiDi, currX);

  //create the vertical content bar, which contains the zoom-to-fit
  //button, zoom in button, zoom out button, and zoom slider

  var vertContentBar = null;
  var currY = this._getVBarButtonsOffsetY(nKidHorzContentBar);
  //BUG FIX #10154856: if showing a single horizontal row, offset the start of the
  //vertical controls to leave room for the pan control
  if (this.isSingleHorzRow() &&
      (this._controls & DvtPanZoomControlPanel.CONTROLS_CENTER_BUTTON) != 0)
    currY += (DvtPanZoomControlPanelLAFUtils.getViewPanelHeight() - this.getViewPanelHeight());

  if ((this._controls & DvtPanZoomControlPanel.CONTROLS_ZOOM_TO_FIT_BUTTON) != 0 ||
      (this._controls & DvtPanZoomControlPanel.CONTROLS_ZOOM) != 0) {

    vertContentBar = new DvtContainer(context);
    vertContentBar.setTranslateY(horzContentBar.getTranslateY() + this.getViewPanelHeight());

    currY = this._addZoomToFitButton(vertContentBar, currY);
    currY = this._addZoomControls(vertContentBar, currY);

    this._frame.addChild(vertContentBar);
  }

  //Bug 13376596 - pan control in control panel difficult to use
  //problem is part of the vertical content bar overlap the pan control
  this._createHBarBackground(horzContentBar, vertContentBar, nKidHorzContentBar, bBiDi, currX);
  this._frame.addChild(horzContentBar);
  this._positionVBarElements(horzContentBar, vertContentBar, currY);

  //render background after all tools have been added so that
  //we know the size of the content bar
  this._createVBarBackground(horzContentBar, vertContentBar, nKidHorzContentBar, currY);
  this._expandedDim = DvtButtonLAFUtils._getDimForced(context, s);

  return s;
};


/**
 * Populate the horzContentBar with additional tools.
 * This implementation does nothing.  Subclasses should override to include
 * custom tools in the control panel.
 *
 * @param contentSprite sprite to contain additional tools that will be
 *        added to the horzContentBar
 */
DvtPanZoomControlPanel.prototype.PopulateHorzContentBar = function(contentSprite) {
  //do nothing
};


/**
 * Toggle the state of the control panel between expanded and collapsed.
 */
DvtPanZoomControlPanel.prototype.toggleExpandCollapse = function() {
  if (!this._bTransition) {
    if (this._state === DvtPanZoomControlPanel.STATE_EXPANDED) {
      this._doCollapse();
    }
    else if (this._state === DvtPanZoomControlPanel.STATE_COLLAPSED) {
      this._doExpand();
    }
  }
};


/**
 * Get the dimensions of the panel in its collapsed state.
 *
 * @return dimensions of collapsed panel
 */
DvtPanZoomControlPanel.prototype.getCollapsedDim = function() {
  return this._collapsedDim;
};

DvtPanZoomControlPanel.prototype.getExpandedDim = function() {
  return this._expandedDim;
};


/**
 * Handle a mouse click on the expand button.
 *
 * @param {DvtMouseEvent} event MouseEvent
 */
DvtPanZoomControlPanel.prototype.HandleExpandClick = function(event) {
  //don't want click to fall through to other components
  DvtEventManager.consumeEvent(event);

  if (!this._bTransition) {
    this._doExpand();
    if (this.getTooltipManager()) {
      this.getTooltipManager().hideTooltip();
    }
  }
};


/**
 * Handles transition from collapsed state to expanded state.
 *
 * @private
 */
DvtPanZoomControlPanel.prototype._doExpand = function() {
  //make sure _doCollapse and _doExpand cannot be called
  this._bTransition = true;
  this.setMouseEnabled(false);

  //render the expanded control panel
  var s = this.RenderExpanded();
  this.addChild(s);

  //apply alphas based on mouse position
  this._applyAlphasForMouse();

  //transition from the collapsed control panel to the expanded one
  this.transitionExpand(this.getChildAt(0), s);

  //update state
  this._state = DvtPanZoomControlPanel.STATE_EXPANDED;

  //BUG FIX #8719343: fire expand event
  this.fireExpandEvent();
};


/**
 * Apply alphas based on whether the mouse is over the control panel.
 */
DvtPanZoomControlPanel.prototype._applyAlphasForMouse = function() {
  //apply alphas based on whether the mouse is over the control panel
  var bMouseOver = false;
  var stage = this.getCtx().getStage();
  if (stage) {
    bMouseOver = true;//TODO???hitTestPoint(stage.mouseX, stage.mouseY, true);
  }
  if (bMouseOver) {
    this._applyAlphasRollover();
  }
  else {
    this._applyAlphasRollout();
  }
};


/**
 * Handle a mouse click on the collapse button.
 *
 * @param {DvtMouseEvent} event MouseEvent
 */
DvtPanZoomControlPanel.prototype.HandleCollapseClick = function(event) {
  //don't want click to fall through to other components
  DvtEventManager.consumeEvent(event);

  if (!this._bTransition) {
    this._doCollapse();
  }
};


/**
 * Handles transition from expanded state to collapsed state.
 *
 * @private
 */
DvtPanZoomControlPanel.prototype._doCollapse = function() {
  //make sure _doCollapse and _doExpand cannot be called
  this._bTransition = true;

  //render the collapsed control panel
  var s = this.RenderCollapsed();
  this.addChild(s);

  //apply alphas based on mouse position
  this._applyAlphasForMouse();

  //transition from the expanded control panel to the collapsed one
  this.transitionCollapse(this.getChildAt(0), s);

  //update state
  this._state = DvtPanZoomControlPanel.STATE_COLLAPSED;

  //BUG FIX #8719343: fire collapse event
  this.fireCollapseEvent();
};


/**
 * Animate the transition from the collapsed control to the expanded control.
 *
 * @param {DvtContainer} oldContent collapsed control
 * @param {DvtContainer} newContent expanded control
*/
DvtPanZoomControlPanel.prototype.transitionExpand = function(oldContent, newContent) {
  var odim = oldContent.getDimensions();
  var openCloseButtonWidth = DvtStyleUtils.getStyle(this._styleMap, DvtPanZoomControlPanel.CP_OPEN_CLOSE_BUTTON_WIDTH, 0);

  // No need to animate if control panel was initially added to the DOM indicating this is an initial render
  if (odim && odim.w != 0) {
    var ndim = newContent.getDimensions();
    //fade out old, fade in new
    var animator = new DvtAnimator(this.getCtx(), .25);
    oldContent.setAlpha(1);
    newContent.setAlpha(0);
    animator.addProp(DvtAnimator.TYPE_NUMBER, oldContent, oldContent.getAlpha, oldContent.setAlpha, 0);
    animator.addProp(DvtAnimator.TYPE_NUMBER, newContent, newContent.getAlpha, newContent.setAlpha, 1);

    //grow new control from size of old
    // newContent.width = oldContent.width;
    // t.$(newContent).scaleX = 1.0;
    newContent.setScaleX(odim.w / ndim.w);
    animator.addProp(DvtAnimator.TYPE_NUMBER, newContent, newContent.getScaleX, newContent.setScaleX, 1);

    //BiDi: need to change x position also, because panel expands out to the left
    if (DvtAgent.isRightToLeft(this.getCtx())) {
      newContent.setTranslateX(oldContent.getTranslateX());
      var dimWidth = ndim.w + ndim.x;
      animator.addProp(DvtAnimator.TYPE_NUMBER, newContent, newContent.getTranslateX, newContent.setTranslateX,
                       oldContent.getTranslateX() + openCloseButtonWidth - dimWidth);
    }

    // newContent.height = oldContent.height;
    // t.$(newContent).scaleY = 1.0;
    newContent.setScaleY(odim.h / ndim.h);
    animator.addProp(DvtAnimator.TYPE_NUMBER, newContent, newContent.getScaleY, newContent.setScaleY, 1);

    //remove the old control at the end of the transition
    // t.removeChild(oldContent);
    // t.play();
    animator.setOnEnd(function() {
      oldContent.getParent().removeChild(oldContent);
      this._bTransition = false;
      this.setMouseEnabled(true);
    }, this);

    animator.play();
  } else {
    oldContent.getParent().removeChild(oldContent);
    var transX;
    if (DvtAgent.isRightToLeft(this.getCtx())) {
      var ndim = DvtDisplayableUtils._getDimForced(this.getCtx(), newContent);
      var dimWidth = Math.floor(ndim.w + ndim.x);
      transX = openCloseButtonWidth - dimWidth;
    }
    else
      transX = 0;
    newContent.setTranslate(transX, 0);
  }
};


/**
 * Animate the transition from the expanded control to the collapsed control.
 *
 * @param {DvtContainer} oldContent expanded control
 * @param {DvtContainer} newContent collapsed control
 */
DvtPanZoomControlPanel.prototype.transitionCollapse = function(oldContent, newContent) {
  var animator = new DvtAnimator(this.getCtx(), .25);

  //fade out old, fade in new
  oldContent.setAlpha(1);
  newContent.setAlpha(0);
  animator.addProp(DvtAnimator.TYPE_NUMBER, oldContent, oldContent.getAlpha, oldContent.setAlpha, 0);
  animator.addProp(DvtAnimator.TYPE_NUMBER, newContent, newContent.getAlpha, newContent.setAlpha, 1);

  //shrink old control to size of new
  var ndim = this.getCollapsedDim();
  var odim = this.getExpandedDim();
  animator.addProp(DvtAnimator.TYPE_NUMBER, oldContent, oldContent.getScaleX, oldContent.setScaleX, ndim.w / odim.w);

  //BiDi: need to change x position also, because panel collapses to the right
  if (DvtAgent.isRightToLeft(this.getCtx())) {
    animator.addProp(DvtAnimator.TYPE_NUMBER, oldContent, oldContent.getTranslateX, oldContent.setTranslateX,
                     newContent.getTranslateX());
  }
  animator.addProp(DvtAnimator.TYPE_NUMBER, oldContent, oldContent.getScaleY, oldContent.setScaleY, ndim.h / odim.h);

  //remove the old control at the end of the transition
  animator.setOnEnd(function() {
    oldContent.getParent().removeChild(oldContent);
    this._bTransition = false;
  }, this);

  animator.play();
};


/**
 * Fire expand event.
 *
 * @return true if event was dispatched successfully,
 *         false otherwise
 */
DvtPanZoomControlPanel.prototype.fireExpandEvent = function() {
  var event = new DvtPanZoomControlPanelEvent(DvtPanZoomControlPanelEvent.SUBTYPE_SHOW);
  this.FireListener(event);
  return true;
};


/**
 * Fire collapse event.
 *
 * @return true if event was dispatched successfully,
 *         false otherwise
 */
DvtPanZoomControlPanel.prototype.fireCollapseEvent = function() {
  var event = new DvtPanZoomControlPanelEvent(DvtPanZoomControlPanelEvent.SUBTYPE_HIDE);
  this.FireListener(event);
  return true;
};


/**
 * Adjust the collapse and expand arrow icons for BiDi.
 *
 * @param dispObjCon display object containing the arrow icon
 * @param offset amount to translate arrow icon
 */
DvtPanZoomControlPanel.prototype.adjustArrowsIconForBiDi = function(dispObjCon, offset) {
  var loader = this.findLoader(dispObjCon);
  if (loader) {
    loader.setTranslateX(loader.getTranslateX() + offset);
  }
};


/**
 * Find a Loader object in the given container.
 *
 * @param dispObjCon container to look for a Loader object in
 *
 * @return Loader object found, or null if none found
 */
DvtPanZoomControlPanel.prototype.findLoader = function(dispObjCon) {
  var childCount = dispObjCon.getNumChildren();
  var dispObj;
  for (var i = 0; i < childCount; i++) {
    dispObj = dispObjCon.getChildAt(i);
    if (dispObj instanceof DvtImage) {
      return dispObj;
    }
    else if (dispObj instanceof DvtContainer) {
      return this.findLoader(dispObj);
    }
  }
  return null;
};

// Mouse event handling
DvtPanZoomControlPanel.prototype.HandleRollOver = function(event) {
  this._bMouseOver = true;
  if (!this._bMouseDragPanning)
  {
    this._applyAlphasRollover();
  }
};

DvtPanZoomControlPanel.prototype.HandleRollOut = function(event) {
  this._bMouseOver = false;
  if (!this._bMouseDragPanning)
  {
    this._applyAlphasRollout();
  }
};


/**
 * Apply alphas to the background and frame for when the
 * mouse is over the control panel.
 */
DvtPanZoomControlPanel.prototype._applyAlphasRollover = function() {
  this._background.setAlpha(this._styleMap[DvtPanZoomControlPanel.BG_ROLLOVER_ALPHA]);
  this._frame.setAlpha(this._styleMap[DvtPanZoomControlPanel.FRAME_ROLLOVER_ALPHA]);

  //BUG FIX #10154856: fade underlay just like control panel fill
  if (this._panControlUnderlay) {
    this._panControlUnderlay.setAlpha(this._styleMap[DvtPanZoomControlPanel.BG_ROLLOVER_ALPHA]);
  }
};


/**
 * Apply alphas to the background and frame for when the
 * mouse is not over the control panel.
 */
DvtPanZoomControlPanel.prototype._applyAlphasRollout = function() {
  this._background.setAlpha(this._bgAlpha);
  this._frame.setAlpha(this._styleMap[DvtPanZoomControlPanel.FRAME_ROLLOUT_ALPHA]);

  //BUG FIX #10154856: fade underlay just like control panel fill
  if (this._panControlUnderlay) {
    this._panControlUnderlay.setAlpha(this._bgAlpha);
  }
};


/**
 * Determine if the zoom slider is supposed to be included in the control panel.
 *
 * @return true if the zoom slider is supposed to be included, false if not
 */
DvtPanZoomControlPanel.prototype.isZoomSliderShown = function() {
  //  return (this._controls & DvtPanZoomControlPanel.CONTROLS_ZOOM_SLIDER) > 0;
  return false;
};

DvtPanZoomControlPanel.prototype.isPanControlShown = function() {
  return (this._controls & DvtPanZoomControlPanel.CONTROLS_CENTER_BUTTON) > 0;
};


/**
 * @override
 */
DvtPanZoomControlPanel.prototype.getDimensions = function() {
  if (! this._dim) {
    this._dim = DvtPanZoomControlPanel.superclass.getDimensions.call(this);
  }
  return this._dim;
};

DvtPanZoomControlPanel.prototype.renderComponent = function() {
};

DvtPanZoomControlPanel.prototype.getButtonImages = function() {
  return this._buttonImages;
};


/**
 * Returns top padding for vertical bar
 * @return {number} number of pixels specified as top padding for vertical bar
 */
DvtPanZoomControlPanel.prototype._getVBarButtonsOffsetY = function(nKidHorzContentBar) {
  // we need extra room if we have pan control or if this is Alta style and horizontal bar is empty
  if ((this._controls & DvtPanZoomControlPanel.CONTROLS_CENTER_BUTTON) ||
      this._styleMap && this._styleMap[DvtPanZoomControlPanel.CP_PANEL_DRAWER_STYLES] && nKidHorzContentBar == 0)
    return DvtStyleUtils.getStyle(this._styleMap['vbar'], DvtPanZoomControlPanel.CP_PADDING_TOP, 0);
  else
    return 0;
};


DvtPanZoomControlPanel.prototype.enableZoomControls = function() {
  var currZoom = this._panZoomCanvas.getZoom();
  var nextZoom = this._panZoomCanvas.getNextZoomLevel(currZoom);
  var prevZoom = this._panZoomCanvas.getPrevZoomLevel(currZoom);
  if (this._zoomInButton)
    this._zoomInButton.setEnabled(currZoom != nextZoom);
  if (this._zoomOutButton)
    this._zoomOutButton.setEnabled(currZoom != prevZoom);
};

DvtPanZoomControlPanel.prototype.enableZoomInControl = function(enabled) {
  if (this._zoomInButton)
    this._zoomInButton.setEnabled(enabled);
};

DvtPanZoomControlPanel.prototype.enableZoomOutControl = function(enabled) {
  if (this._zoomOutButton)
    this._zoomOutButton.setEnabled(enabled);
};
/**
 * Default values and utility functions for PanZoomControlPanel versioning.
 * @class
 */
var DvtPanZoomControlPanelDefaults = new Object();

DvtObj.createSubclass(DvtPanZoomControlPanelDefaults, DvtObj, 'DvtPanZoomControlPanelDefaults');


/**
 * Contains overrides for the 'alta' skin.
 */
DvtPanZoomControlPanelDefaults.SKIN_ALTA = {
  'fill-type': 'solid',
  'backgroundAlpha': 1,
  'backgroundDragAlpha': 1,
  'borderDragAlpha': 1,
  'panelDrawerStyles': true,
  'buttonWidth': 42,
  'buttonHeight': 42,
  'buttonRadius': 0,
  'openCloseButtonWidth': 42,
  'tabSize': 42,
  'paddingTop': 15,
  'paddingSide': -1,
  'imageWidth': 24,
  'imageHeight': 24,
  'centerButtonDisplayed': false,
  'scrollbarBackground': 'linear-gradient(bottom, #dce2e7 0%, #f8f8f8 8%)',
  'scrollbarBorderColor': '#dce2e7',
  'scrollbarHandleColor': '#abb0b4',
  'scrollbarHandleHoverColor' : '#333333',
  'scrollbarHandleActiveColor' : '#333333',
  'comboBox': {
    'paddingTop': 0,
    'paddingBottom': 0,
    'paddingLeft': 0,
    'paddingRight': 0,
    'paddingInner': 0,
    'itemHeight': 30,
    'imagePadding': 0,
    'itemPadding': 10
  },
  'vbar': {
    'paddingTop': 0,
    'paddingBottom': 0,
    'paddingLeft': 0,
    'paddingRight': 0,
    'paddingInner': 0
  },
  'hbar': {
    'paddingTop': 0,
    'paddingBottom': 0,
    'paddingLeft': 0,
    'paddingRight': 0,
    'paddingInner': 0
  }
};


/**
 * Contains overrides for the 'skyros' skin.
 */
DvtPanZoomControlPanelDefaults.SKIN_SKYROS = {
  'fill-type': 'solid'
};


/**
 * Contains control panel defaults.
 */
DvtPanZoomControlPanelDefaults.DEFAULT = {
  'fill-type': 'gradient',
  'border-color': '#ffffff',
  'background-color': '#ffffff',
  'border-radius': 6,
  'backgroundAlpha': .5,
  'backgroundHoverAlpha': 1.0,
  'backgroundDragAlpha': .5,
  'borderAlpha': 1,
  'borderHoverAlpha': 1,
  'borderDragAlpha': .5,
  'tabSize': 26,
  'buttonWidth': 22,
  'buttonHeight': 22,
  'buttonRadius': 3,
  'paddingTop': 5,
  'paddingSide': 5,
  'imageWidth': 22,
  'imageHeight': 20,
  'openCloseButtonWidth': 10,
  'centerButtonDisplayed': true,
  'comboBox': {
    'paddingTop': 2,
    'paddingBottom': 6,
    'paddingLeft': 3,
    'paddingRight': 3,
    'paddingInner': 2,
    'itemHeight': 22,
    'radius': 4,
    'imagePadding': 2,
    'itemPadding': 7
  },
  'vbar': {
    'paddingTop': 2.5,
    'paddingBottom': 2.5,
    'paddingLeft': 2,
    'paddingRight': 2,
    'paddingInner': 2
  },
  'hbar': {
    'paddingTop': 2,
    'paddingBottom': 2,
    'paddingLeft': 3,
    'paddingRight': 3,
    'paddingInner': 2
  }
};


/**
 * Combines the user options with the defaults for the specified version.  Returns the
 * combined options object.  This object will contain internal attribute values and
 * should be accessed in internal code only.
 * @param {object} userOptions The object containing options specifications for this component.
 * @return {object} The combined options object.
 */
DvtPanZoomControlPanelDefaults.calcOptions = function(userOptions) {
  var defaults = DvtPanZoomControlPanelDefaults._getDefaults(userOptions);

  // Use defaults if no overrides specified
  if (!userOptions)
    return defaults;
  else // Merge the options object with the defaults
    return DvtJSONUtils.merge(userOptions, defaults);
};


/**
 * Returns the default options object for the specified version of the component.
 * @param {object} userOptions The object containing options specifications for this component.
 * @private
 */
DvtPanZoomControlPanelDefaults._getDefaults = function(userOptions) {
  var defaults = null;
  if (userOptions && userOptions['skin'] === 'skyros')
    defaults = DvtJSONUtils.merge(DvtPanZoomControlPanelDefaults.SKIN_SKYROS, DvtPanZoomControlPanelDefaults.DEFAULT);
  else if (userOptions && userOptions['skin'] === 'alta')
    defaults = DvtJSONUtils.merge(DvtPanZoomControlPanelDefaults.SKIN_ALTA, DvtPanZoomControlPanelDefaults.DEFAULT);
  else
    defaults = DvtJSONUtils.clone(DvtPanZoomControlPanelDefaults.DEFAULT);
  return defaults;
};
/**
 * @constructor
 * Class used to maintain translated resources used by the PanZoomControlPanel.
 */
var DvtPanZoomControlPanelResources = function(parent) {
  this.Init(parent);
};


/*
 * make DvtPanZoomControlPanelResources a subclass of DvtObj
 */
DvtObj.createSubclass(DvtPanZoomControlPanelResources, DvtObj, 'DvtPanZoomControlPanelResources');


/**
 * Initialize
 * @param {object} parent  Object to parse
 * @protected
 */
DvtPanZoomControlPanelResources.prototype.Init = function(parent) {
  //control panel
  if (!parent) {
    this._controlPanelExpandTooltip = 'Show Control Panel (/)';
    this._controlPanelCollapseTooltip = 'Hide (/)';
    this._panControlCenterTooltip = 'Zoom and Center (Ctrl+Alt+0)';
    this._panControlTooltip = 'Pan';
    this._zoomToFitTooltip = 'Zoom to Fit (0)';
    this._zoomInTooltip = 'Zoom In (+)';
    this._zoomOutTooltip = 'Zoom Out (-)';
    this._panelCardTooltip = 'View';
    this._layoutHierVertTopTooltip = 'Vertical, Top Down';
    this._layoutHierHorzLeftTooltip = 'Horizontal, Left-to-Right';
    this._layoutTreeTooltip = 'Tree';
    this._layoutRadialTooltip = 'Radial';
    this._layoutCircleTooltip = 'Circle';
    this._layoutTooltip = 'Layout';
  } else {
    if (parent.getAttr) {  //XML Node
      this._controlPanelExpandTooltip = parent.getAttr('cpe');
      this._controlPanelCollapseTooltip = parent.getAttr('cpc');
      this._panControlCenterTooltip = parent.getAttr('pcc');
      this._panControlTooltip = parent.getAttr('pc');
      this._zoomToFitTooltip = parent.getAttr('ztf');
      this._zoomInTooltip = parent.getAttr('zi');
      this._zoomOutTooltip = parent.getAttr('zo');
      this._panelCardTooltip = parent.getAttr('pcs');
      this._layoutHierVertTopTooltip = parent.getAttr('lhvt');
      this._layoutHierHorzLeftTooltip = parent.getAttr('lhhl');
      this._layoutTreeTooltip = parent.getAttr('lt');
      this._layoutRadialTooltip = parent.getAttr('lr');
      this._layoutCircleTooltip = parent.getAttr('lc');
      this._layoutTooltip = parent.getAttr('lo');
    } else {  //JSON Object
      this._controlPanelExpandTooltip = parent['cpe'];
      this._controlPanelCollapseTooltip = parent['cpc'];
      this._panControlCenterTooltip = parent['pcc'];
      this._panControlTooltip = parent['pc'];
      this._zoomToFitTooltip = parent['ztf'];
      this._zoomInTooltip = parent['zi'];
      this._zoomOutTooltip = parent['zo'];
      this._panelCardTooltip = parent['pcs'];
      this._layoutHierVertTopTooltip = parent['lhvt'];
      this._layoutHierHorzLeftTooltip = parent['lhhl'];
      this._layoutTreeTooltip = parent['lt'];
      this._layoutRadialTooltip = parent['lr'];
      this._layoutCircleTooltip = parent['lc'];
      this._layoutTooltip = parent['lo'];
    }
  }
};


/**
 * Set the ControlPanelExpandTooltip to use.
 *
 * @param controlPanelExpandToolTip to use
 */
DvtPanZoomControlPanelResources.prototype.setControlPanelExpandTooltip = function(s) {
  this._controlPanelExpandTooltip = s;
};


/**
 * Get the ControlPanelExpandTooltip to use.
 *
 * @return controlPanelExpandToolTip being used
 */
DvtPanZoomControlPanelResources.prototype.getControlPanelExpandTooltip = function() {
  return this._controlPanelExpandTooltip;
};


/**
 * Set the ControlPanelCollapseTooltip to use.
 *
 * @param controlPanelCollapseToolTip to use
 */
DvtPanZoomControlPanelResources.prototype.setControlPanelCollapseTooltip = function(s) {
  this._controlPanelCollapseTooltip = s;
};


/**
 * Get the ControlPanelCollapseTooltip to use.
 *
 * @return controlPanelCollapseToolTip being used
 */
DvtPanZoomControlPanelResources.prototype.getControlPanelCollapseTooltip = function() {
  return this._controlPanelCollapseTooltip;
};


/**
 * Set the PanControlCenterTooltip to use.
 *
 * @param panControlCenterToolTip to use
 */
DvtPanZoomControlPanelResources.prototype.setPanControlCenterTooltip = function(s) {
  this._panControlCenterTooltip = s;
};


/**
 * Get the PanControlCenterTooltip to use.
 *
 * @return panControlCenterToolTip being used
 */
DvtPanZoomControlPanelResources.prototype.getPanControlCenterTooltip = function() {
  return this._panControlCenterTooltip;
};


/**
 * Set the PanControlTooltip to use.
 *
 * @param panControlToolTip to use
 */
DvtPanZoomControlPanelResources.prototype.setPanControlTooltip = function(s) {
  this._panControlTooltip = s;
};


/**
 * Get the PanControlTooltip to use.
 *
 * @return panControlToolTip being used
 */
DvtPanZoomControlPanelResources.prototype.getPanControlTooltip = function() {
  return this._panControlTooltip;
};


/**
 * Set the ZoomToFitTooltip to use.
 *
 * @param zoomToFitToolTip to use
 */
DvtPanZoomControlPanelResources.prototype.setZoomToFitTooltip = function(s) {
  this._zoomToFitTooltip = s;
};


/**
 * Get the ZoomToFitTooltip to use.
 *
 * @return zoomToFitToolTip being used
 */
DvtPanZoomControlPanelResources.prototype.getZoomToFitTooltip = function() {
  return this._zoomToFitTooltip;
};


/**
 * Set the ZoomInTooltip to use.
 *
 * @param zoomInToolTip to use
 */
DvtPanZoomControlPanelResources.prototype.setZoomInTooltip = function(s) {
  this._zoomInTooltip = s;
};

/**
 * Get the ZoomInTooltip to use.
 *
 * @return zoomInToolTip being used
 */

DvtPanZoomControlPanelResources.prototype.getZoomInTooltip = function() {
  return this._zoomInTooltip;
};


/**
 * Set the ZoomOutTooltip to use.
 *
 * @param zoomOutToolTip to use
 */
DvtPanZoomControlPanelResources.prototype.setZoomOutTooltip = function(s) {
  this._zoomOutTooltip = s;
};


/**
 * Get the ZoomOutTooltip to use.
 *
 * @return zoomOutToolTip being used
 */
DvtPanZoomControlPanelResources.prototype.getZoomOutTooltip = function() {
  return this._zoomOutTooltip;
};


/**
 * Set the PanelCardTooltip to use.
 *
 * @param panelCardTooltip to use
 */
DvtPanZoomControlPanelResources.prototype.setPanelCardTooltip = function(s) {
  this._panelCardTooltip = s;
};


/**
 * Get the PanelCardTooltip to use.
 *
 * @return panelCardTooltip being used
 */
DvtPanZoomControlPanelResources.prototype.getPanelCardTooltip = function() {
  return this._panelCardTooltip;
};


/**
 * Set the LayoutHierVertTopTooltip to use.
 *
 * @param LayoutHierVertTopTooltip to use
 */
DvtPanZoomControlPanelResources.prototype.setLayoutHierVertTopTooltip = function(s) {
  this._layoutHierVertTopTooltip = s;
};


/**
 * Get the LayoutHierVertTopTooltip to use.
 *
 * @return LayoutHierVertTopTooltip being used
 */
DvtPanZoomControlPanelResources.prototype.getLayoutHierVertTopTooltip = function() {
  return this._layoutHierVertTopTooltip;
};


/**
 * Set the LayoutHierHorzLeftTooltip to use.
 *
 * @param LayoutHierHorzLeftTooltip to use
 */
DvtPanZoomControlPanelResources.prototype.setLayoutHierHorzLeftTooltip = function(s) {
  this._layoutHierHorzLeftTooltip = s;
};


/**
 * Get the LayoutHierHorzLeftTooltip to use.
 *
 * @return LayoutHierHorzLeftTooltip being used
 */
DvtPanZoomControlPanelResources.prototype.getLayoutHierHorzLeftTooltip = function() {
  return this._layoutHierHorzLeftTooltip;
};


/**
 * Set the LayoutTreeTooltip to use.
 *
 * @param LayoutTreeTooltip to use
 */
DvtPanZoomControlPanelResources.prototype.setLayoutTreeTooltip = function(s) {
  this._layoutTreeTooltip = s;
};


/**
 * Get the LayoutTreeTooltip to use.
 *
 * @return LayoutTreeTooltip being used
 */
DvtPanZoomControlPanelResources.prototype.getLayoutTreeTooltip = function() {
  return this._layoutTreeTooltip;
};


/**
 * Set the LayoutRadialTooltip to use.
 *
 * @param LayoutRadialTooltip to use
 */
DvtPanZoomControlPanelResources.prototype.setLayoutRadialTooltip = function(s) {
  this._layoutRadialTooltip = s;
};


/**
 * Get the LayoutRadialTooltip to use.
 *
 * @return LayoutRadialTooltip being used
 */
DvtPanZoomControlPanelResources.prototype.getLayoutRadialTooltip = function() {
  return this._layoutRadialTooltip;
};


/**
 * Set the LayoutCircleTooltip to use.
 *
 * @param LayoutCircleTooltip to use
 */
DvtPanZoomControlPanelResources.prototype.setLayoutCircleTooltip = function(s) {
  this._layoutCircleTooltip = s;
};


/**
 * Get the LayoutCircleTooltip to use.
 *
 * @return LayoutCircleTooltip being used
 */
DvtPanZoomControlPanelResources.prototype.getLayoutCircleTooltip = function() {
  return this._layoutCircleTooltip;
};


/**
 * Set the LayoutTooltip to use.
 *
 * @param LayoutTooltip to use
 */
DvtPanZoomControlPanelResources.prototype.setLayoutTooltip = function(s) {
  this._layoutTooltip = s;
};


/**
 * Get the LayoutTooltip to use.
 *
 * @return LayoutTooltip being used
 */
DvtPanZoomControlPanelResources.prototype.getLayoutTooltip = function() {
  return this._layoutTooltip;
};

// Copyright (c) 2012, 2014, Oracle and/or its affiliates. All rights reserved.
/**
 * @constructor
 */
var DvtPanZoomControlPanelEventManager = function(context, callback, callbackObj) {
  this.Init(context, callback, callbackObj);
};

DvtObj.createSubclass(DvtPanZoomControlPanelEventManager, DvtEventManager, 'DvtPanZoomControlPanelEventManager');


/**
 * Click event handler.
 * @protected
 */
DvtPanZoomControlPanelEventManager.prototype.OnMouseDown = function(event) {
  var obj = this.GetLogicalObject(this.GetCurrentTargetForEvent(event));
  DvtPanZoomControlPanelEventManager.superclass.OnMouseDown.call(this, event);

  // Done if there is no object
  if (!obj) {
    return;
  }

  if (obj.HandleMouseDown) {
    obj.HandleMouseDown(event);
  }
  event.stopPropagation();
};

DvtPanZoomControlPanelEventManager.prototype.OnMouseUp = function(event) {
  var obj = this.GetLogicalObject(this.GetCurrentTargetForEvent(event));
  DvtPanZoomControlPanelEventManager.superclass.OnMouseUp.call(this, event);

  // Done if there is no object
  if (!obj) {
    return;
  }

  if (obj.HandleMouseUp) {
    obj.HandleMouseUp(event);
  }
  event.stopPropagation();
};

DvtPanZoomControlPanelEventManager.prototype.OnMouseOut = function(event) {
  var obj = this.GetLogicalObject(this.GetCurrentTargetForEvent(event));
  DvtPanZoomControlPanelEventManager.superclass.OnMouseOut.call(this, event);

  // Done if there is no object
  if (!obj) {
    return;
  }

  if (obj.HandleMouseOut) {
    obj.HandleMouseOut(event);
  }
  event.stopPropagation();
};

/**
 * Mouse Move event handler
 * @override
 * @param {DvtMouseEvent} event  Mouse Move event
 */
DvtPanZoomControlPanelEventManager.prototype.OnMouseMove = function(event) {
  //MouseMove event on PanZoom Control Panel is used to display tooltip
  //Once the tooltip is displayed stop the event from propagating
  //Otherwise, parent component may try to show its own tooltip which will hide the displayed tooltip
  //Note: Even if the parent component doesn't have a tooltip, it will still hide the displayed tooltip
  var obj = this.GetLogicalObject(this.GetCurrentTargetForEvent(event));
  DvtPanZoomControlPanelEventManager.superclass.OnMouseMove.call(this, event);

  // Return if no object is found
  if (!obj) {
    return;
  }

  if (obj.HandleMouseMove) {
    obj.HandleMouseMove(event);
  }
  event.stopPropagation();
};

/**
 * Click event handler.
 * @protected
 */
DvtPanZoomControlPanelEventManager.prototype.OnClick = function(event) {

  var obj = this.GetLogicalObject(this.GetCurrentTargetForEvent(event));
  DvtPanZoomControlPanelEventManager.superclass.OnClick.call(this, event);

  // Done if there is no object
  if (!obj) {
    return;
  }

  if (obj.HandleClick) {
    obj.HandleClick(event);
  }
  event.stopPropagation();
};


/**
 * Roll Over event handler
 * @protected
 */
DvtPanZoomControlPanelEventManager.prototype.OnRollOver = function(event) {
  DvtPanZoomControlPanelEventManager.superclass.OnRollOver.call(this, event);
  var obj = this.GetLogicalObject(this.GetCurrentTargetForEvent(event));

  // Return if no object is found
  if (!obj) {
    return;
  }

  if (obj.HandleRollOver) {
    obj.HandleRollOver(event);
  }
};


/**
 * Roll Out event handler
 * @protected
 */
DvtPanZoomControlPanelEventManager.prototype.OnRollOut = function(event) {
  DvtPanZoomControlPanelEventManager.superclass.OnRollOut.call(this, event);
  var obj = this.GetLogicalObject(this.GetCurrentTargetForEvent(event));

  // Return if no object is found
  if (!obj) {
    return;
  }

  if (obj.HandleRollOut) {
    obj.HandleRollOut(event);
  }
};


/**
 * @override
 */
DvtPanZoomControlPanelEventManager.prototype.OnComponentTouchClick = function(event) {
  var obj = this.GetLogicalObject(this.GetCurrentTargetForEvent(event));

  // Return if no object is found
  if (!obj) {
    return;
  }

  if (obj.HandleClick) {
    obj.HandleClick(event);
  }
  event.stopPropagation();
};


/**
 * @override
 */
DvtPanZoomControlPanelEventManager.prototype.HandleImmediateTouchStartInternal = function(event) {
  event.blockTouchHold();
  DvtEventManager.consumeEvent(event);
};

/*
 * DvtPanZoomControlPanelEventHandlerProxy Utility
 */
var DvtPanZoomControlPanelEventHandlerProxy = function(callback, handleClick, handleMouseDown, handleMouseUp, handleMouseOut, handleMouseOver, tooltip) {
  this.Init(callback, handleClick, handleMouseDown, handleMouseUp, handleMouseOut, handleMouseOver, tooltip);
};

DvtObj.createSubclass(DvtPanZoomControlPanelEventHandlerProxy, DvtObj, 'DvtPanZoomControlPanelEventHandlerProxy');

DvtPanZoomControlPanelEventHandlerProxy.prototype.Init = function(callbackObj, handleClick, handleMouseDown, handleMouseUp, handleMouseOut, handleMouseOver, tooltip) {
  this._callbackObj = callbackObj;
  this._handleClick = handleClick;
  this._handleMouseUp = handleMouseUp;
  this._handleMouseDown = handleMouseDown;
  this._handleMouseOut = handleMouseOut;
  this._handleMouseOver = handleMouseOver;
  this._tooltip = tooltip;
};

DvtPanZoomControlPanelEventHandlerProxy.prototype.HandleClick = function(event) {
  if (this._handleClick)
    this._handleClick.call(this._callbackObj, event);
};
DvtPanZoomControlPanelEventHandlerProxy.prototype.HandleMouseDown = function(event) {
  if (this._handleMouseDown)
    this._handleMouseDown.call(this._callbackObj, event);
};
DvtPanZoomControlPanelEventHandlerProxy.prototype.HandleMouseUp = function(event) {
  if (this._handleMouseUp)
    this._handleMouseUp.call(this._callbackObj, event);
};
DvtPanZoomControlPanelEventHandlerProxy.prototype.HandleMouseOut = function(event) {
  if (this._handleMouseOut)
    this._handleMouseOut.call(this._callbackObj, event);
};
DvtPanZoomControlPanelEventHandlerProxy.prototype.HandleMouseOver = function(event) {
  if (this._handleMouseOver)
    this._handleMouseOver.call(this._callbackObj, event);
};
DvtPanZoomControlPanelEventHandlerProxy.prototype.getTooltip = function() {
  return this._tooltip;
};
/*
 * DvtPanZoomControlPanelLAFUtils Utility class for providing LAF for buttons in the control panel.
 */
var DvtPanZoomControlPanelLAFUtils = {};

DvtObj.createSubclass(DvtPanZoomControlPanelLAFUtils, DvtObj, 'DvtPanZoomControlPanelLAFUtils');

DvtPanZoomControlPanelLAFUtils.OPEN_TOP = 'top';
DvtPanZoomControlPanelLAFUtils.OPEN_RIGHT = 'right';
DvtPanZoomControlPanelLAFUtils.OPEN_LEFT = 'left';
DvtPanZoomControlPanelLAFUtils.OPEN_BOTTOM = 'bottom';

DvtPanZoomControlPanelLAFUtils.VIEW_PANEL_HEIGHT = 47;
DvtPanZoomControlPanelLAFUtils.VIEW_PANEL_HALF_HEIGHT = 26;

DvtPanZoomControlPanelLAFUtils.SIN_PI_4 = Math.sin(Math.PI / 4);
DvtPanZoomControlPanelLAFUtils.TAN_PI_8 = Math.tan(Math.PI / 8);


/**
 * Returns the height of the horizontal bar of the control panel to allow
 * showing double rows of controls
 * @return {number} height of the horizontal bar for double rows
 */
DvtPanZoomControlPanelLAFUtils.getViewPanelHeight = function() {
  return DvtPanZoomControlPanelLAFUtils.VIEW_PANEL_HEIGHT;
};


/**
 * Returns the height of the horizontal bar of the control panel to allow
 * showing only a single row of controls, like in TMap.
 * @return {number} height of the horizontal bar for single row
 */
DvtPanZoomControlPanelLAFUtils.getViewPanelHalfHeight = function() {
  //BUG FIX #10154856: show single row of controls in horizontal arm of control panel in TMap
  return DvtPanZoomControlPanelLAFUtils.VIEW_PANEL_HALF_HEIGHT;
};


/**
 * Create the background for the view part of the expanded control panel.
 *
 * @param {DvtContext} context Platform specific context object
 * @param {number} nw width of the view part of the control panel
 * @param {number} nh height of the view part of the control panel
 * @param {boolean} bL2R true if the reading direction is left-to-right, so that the
 *        control panel is in the top left corner of the view
 * @param {Object} styleMap The object containing style specifications for this component
 * @return {DvtPath} background for the view part of the expanded control panel
 */
DvtPanZoomControlPanelLAFUtils.createEmptyViewOpenShape = function(context, nw, nh, bL2R, styleMap) {
  //BUG FIX #10154856: pass in height to show single row of controls in
  //horizontal arm of control panel in TMap
  if (! nw)
    nw = 86;
  if (! nh)
    nh = 47;
  if (bL2R === undefined)
    bL2R = true;

  var r = parseInt(DvtStyleUtils.getStyle(styleMap, DvtCSSStyle.BORDER_RADIUS, 0));
  var ww = nw - (2 * r);
  var hh = nh - (2 * r);

  var xx = 0;
  var yy = 0;

  var mc = DvtPanZoomControlPanelLAFUtils.makeViewOpenShapeHelper(context, r, ww, hh, xx, yy, bL2R);
  mc.setSolidFill(DvtStyleUtils.getStyle(styleMap, DvtCSSStyle.BACKGROUND_COLOR, null));

  return mc;
};

DvtPanZoomControlPanelLAFUtils.makeViewOpenShapeHelper = function(context, r, ww, hh, xx, yy, bL2R) {
  var x = ww + r;
  var y = hh + r;

  //bottom right corner
  var cmds = DvtPathUtils.moveTo(x + r, y + r);
  cmds += DvtPathUtils.lineTo(x - ww, y + r);
  x = x - ww;
  y = y;

  //bottom left corner
  cmds += DvtPathUtils.lineTo(x - r, y + r);
  cmds += DvtPathUtils.lineTo(x - r, y - hh);
  x = x;
  y = y - hh;

  if (bL2R) {
    //top left corner
    cmds += DvtPathUtils.quadTo(- r + x, - DvtPanZoomControlPanelLAFUtils.TAN_PI_8 * r + y,
        - DvtPanZoomControlPanelLAFUtils.SIN_PI_4 * r + x,
        - DvtPanZoomControlPanelLAFUtils.SIN_PI_4 * r + y) +
        DvtPathUtils.quadTo(- DvtPanZoomControlPanelLAFUtils.TAN_PI_8 * r + x, - r + y, x, - r + y) +
        DvtPathUtils.lineTo(x, - r + y);
    cmds += DvtPathUtils.lineTo(x + ww + r, - r + y);
    x = x + ww;
    y = y;
    //bottom right corner
    cmds += DvtPathUtils.lineTo(x + r, y + hh);
  }
  else
  {
    //top left corner
    cmds += DvtPathUtils.lineTo(x - r, - r + y);
    cmds += DvtPathUtils.lineTo(x + ww, - r + y);
    x = x + ww;
    y = y;
    //bottom right corner
    cmds += DvtPathUtils.quadTo(DvtPanZoomControlPanelLAFUtils.TAN_PI_8 * r + x, - r + y,
                                DvtPanZoomControlPanelLAFUtils.SIN_PI_4 * r + x,
                                - DvtPanZoomControlPanelLAFUtils.SIN_PI_4 * r + y) +
        DvtPathUtils.quadTo(r + x, - DvtPanZoomControlPanelLAFUtils.TAN_PI_8 * r + y, r + x, y) +
        DvtPathUtils.lineTo(x + r, y + hh);
  }

  cmds += DvtPathUtils.closePath();
  return new DvtPath(context, cmds);
};


/**
 * Create the background for the collapsed control panel.
 *
 * @param {DvtContext} context Platform specific context object
 * @param {number} nh height of the empty control panel
 * @param {Object} styleMap The object containing style specifications for this component
 * @param {boolean} bL2R true if the reading direction is left-to-right, so that the
 *        control panel is in the top left corner of the view
 * @return {DvtPath} background for the collapsed control panel
 */
DvtPanZoomControlPanelLAFUtils.createEmptyViewClosedShape = function(context, nh, styleMap, bR2L) {
  //BUG FIX #10154856: pass in height to show single row of controls in
  //horizontal arm of control panel in TMap
  if (!nh)
    nh = 47;

  var r = parseInt(DvtStyleUtils.getStyle(styleMap, DvtCSSStyle.BORDER_RADIUS, 0));
  var buttonWidth = DvtStyleUtils.getStyle(styleMap, DvtPanZoomControlPanel.CP_OPEN_CLOSE_BUTTON_WIDTH, 0);
  var buttonHeight = Math.max(nh, DvtStyleUtils.getStyle(styleMap, DvtPanZoomControlPanel.CP_BUTTON_HEIGHT, nh));

  var arPoints = DvtButtonLAFUtils.GetButtonPathCommands(buttonWidth, buttonHeight, r, bR2L);
  arPoints = arPoints.concat('Z');
  var mc = new DvtPath(context, arPoints, 'cls_shape');

  var color = DvtStyleUtils.getStyle(styleMap, DvtAbstractComponent.TAB_BG_COLOR_INACTIVE, null);
  if (!color)
    color = DvtStyleUtils.getStyle(styleMap, DvtCSSStyle.BACKGROUND_COLOR, null);
  mc.setSolidFill(color);

  return mc;
};


/**
 * Create the frame for the collapsed control panel.
 *
 * @param {DvtContext} context Platform specific context object
 * @param {number} nh height of the empty control panel
 * @param {Object} styleMap The object containing style specifications for this component
 * @param {boolean} bL2R true if the reading direction is left-to-right, so that the
 *        control panel is in the top left corner of the view
 * @return {DvtPath} frame for the collapsed control panel
 */
DvtPanZoomControlPanelLAFUtils.createEmptyViewClosedFrame = function(context, nh, styleMap, bR2L) {
  //BUG FIX #10154856: pass in height to show single row of controls in
  //horizontal arm of control panel in TMap
  if (!nh)
    nh = 47;
  var r = parseInt(DvtStyleUtils.getStyle(styleMap, DvtCSSStyle.BORDER_RADIUS, 0));
  var buttonWidth = DvtStyleUtils.getStyle(styleMap, DvtPanZoomControlPanel.CP_OPEN_CLOSE_BUTTON_WIDTH, 0);
  var buttonHeight = Math.max(nh, DvtStyleUtils.getStyle(styleMap, DvtPanZoomControlPanel.CP_BUTTON_HEIGHT, nh));

  var arPoints = DvtButtonLAFUtils.GetButtonPathCommands(buttonWidth, buttonHeight, r, bR2L);
  arPoints = arPoints.concat('Z');
  var mc = new DvtPath(context, arPoints, 'cls_shape');
  mc.setSolidStroke(DvtStyleUtils.getStyle(styleMap, DvtCSSStyle.BORDER_COLOR, null));
  mc.setFill(null);
  return mc;
};


/**
 * Render the background for the vertical bar of the expanded control panel.
 *
 * @param {DvtContext} context Platform specific context object
 * @param {number} nh height of the vertical bar of the control panel
 * @param {Object} styleMap The object containing style specifications for this component
 * @param {string} openSide DvtPanZoomControlPanelLAFUtils.OPEN_TOP or DvtPanZoomControlPanelLAFUtils.OPEN_RIGHT
 * @param {number} openSideSize horizontal bar height
 */
DvtPanZoomControlPanelLAFUtils.renderEmptyZoomShape = function(context, nh, styleMap, openSide, openSideSize) {
  if (!nh) {
    nh = 137;
  }
  var r = parseInt(DvtStyleUtils.getStyle(styleMap, DvtCSSStyle.BORDER_RADIUS, 0));
  var cpWidth = DvtStyleUtils.getStyle(styleMap, DvtPanZoomControlPanel.CP_TAB_SIZE, 0);
  var ww = cpWidth - (2 * r);
  var hh = nh + 7 - (2 * r);
  var xx = 0;
  var yy = 0;

  // Fill
  var mc;
  if (openSide && openSideSize)
    mc = DvtPanZoomControlPanelLAFUtils.makeZoomShapeHelperOpenSide(context, r, cpWidth, nh, openSide, openSideSize);
  else
    mc = DvtPanZoomControlPanelLAFUtils.makeZoomShapeHelper(context, r, ww, hh, xx, yy);
  mc.setSolidFill(DvtStyleUtils.getStyle(styleMap, DvtCSSStyle.BACKGROUND_COLOR, null));

  return mc;
};


/**
 * Render the border for the vertical bar of the expanded control panel.
 *
 * @param {DvtContext} context Platform specific context object
 * @param {number} nh height of the vertical bar of the control panel
 * @param {boolean} roundBottomRight indicator for rounding bottom right
 * @param {Object} styleMap The object containing style specifications for this component
 * @param {string} openSide DvtPanZoomControlPanelLAFUtils.OPEN_TOP or DvtPanZoomControlPanelLAFUtils.OPEN_RIGHT
 * @param {number} openSideSize horizontal bar height
 */
DvtPanZoomControlPanelLAFUtils.renderEmptyZoomFrame = function(context, nh, roundBottomRight, styleMap, openSide, openSideSize) {
  if (!nh)
    nh = 137;
  if (!roundBottomRight)
    roundBottomRight = true;

  var r = parseInt(DvtStyleUtils.getStyle(styleMap, DvtCSSStyle.BORDER_RADIUS, 0));
  var cpWidth = DvtStyleUtils.getStyle(styleMap, DvtPanZoomControlPanel.CP_TAB_SIZE, 0);
  var ww = cpWidth - (2 * r);
  var hh = nh + 7 - (2 * r);
  var xx = 0;
  var yy = 0;

  // Line Style
  var mc = null;
  if (openSide && openSideSize)
    mc = DvtPanZoomControlPanelLAFUtils.makeZoomShapeHelperOpenSide(context, r, cpWidth, nh, openSide, openSideSize);
  else
    mc = DvtPanZoomControlPanelLAFUtils.makeZoomShapeHelper(context, r, ww, hh, xx, yy, roundBottomRight);
  mc.setSolidStroke(DvtStyleUtils.getStyle(styleMap, DvtCSSStyle.BORDER_COLOR, null));
  mc.setFill(null);
  return mc;
};

DvtPanZoomControlPanelLAFUtils.makeZoomShapeHelper = function(context, r, ww, hh, xx, yy, roundBottomRight) {
  if (!roundBottomRight) {
    roundBottomRight = true;
  }
  var x = ww + r;
  var y = hh;

  var cmds = DvtPathUtils.moveTo(x + r, y);

  // Bug 9686175 - controlPanel looks bad when featuresOff="pan zoom cardSync changeLayout"
  if (roundBottomRight) {
    cmds += DvtPathUtils.quadTo(r + x, DvtPanZoomControlPanelLAFUtils.TAN_PI_8 * r + y,
                                DvtPanZoomControlPanelLAFUtils.SIN_PI_4 * r + x,
                                DvtPanZoomControlPanelLAFUtils.SIN_PI_4 * r + y) +
        DvtPathUtils.quadTo(DvtPanZoomControlPanelLAFUtils.TAN_PI_8 * r + x, r + y, x, r + y) +
        DvtPathUtils.lineTo(x, r + y);
  }
  else {
    cmds += DvtPathUtils.lineTo(x + r, y + r);
  }
  cmds += DvtPathUtils.lineTo(x - ww, r + y);
  x = x - ww;
  y = y;

  cmds += DvtPathUtils.quadTo(- DvtPanZoomControlPanelLAFUtils.TAN_PI_8 * r + x, r + y,
      - DvtPanZoomControlPanelLAFUtils.SIN_PI_4 * r + x,
      DvtPanZoomControlPanelLAFUtils.SIN_PI_4 * r + y) +
      DvtPathUtils.quadTo(- r + x, DvtPanZoomControlPanelLAFUtils.TAN_PI_8 * r + y, - r + x, y) +
      DvtPathUtils.lineTo(- r + x, y) + DvtPathUtils.lineTo(- r + x, y - hh);
  x = x;
  y = y - hh;

  cmds += DvtPathUtils.lineTo(x + ww + r, y) + DvtPathUtils.lineTo(x + ww + r, y + hh) + DvtPathUtils.closePath();
  return new DvtPath(context, cmds);
};


/**
 * Creates a path used for the vertical bar according to the specified dimensions
 *
 * @param {DvtContext} context Platform specific context object
 * @param {number} r radius for the generated shape
 * @param {number} width width of the generated shape
 * @param {number} height height of the generated shape
 * @param {string} openSide DvtPanZoomControlPanelLAFUtils.OPEN_TOP or DvtPanZoomControlPanelLAFUtils.OPEN_RIGHT
 * @param {number} openSideSize horizontal bar height
 * @return {DvtPath}  a path for the vertical bar
 */
DvtPanZoomControlPanelLAFUtils.makeZoomShapeHelperOpenSide = function(context, r, width, height, openSide, openSideSize) {
  var arPoints = DvtPanZoomControlPanelLAFUtils.GetShapePathCommands(width, height, r, openSide, openSideSize);
  return new DvtPath(context, arPoints);
};


/**
 * Creates a path used for the horizontal bar according to the specified dimensions
 *
 * @param {DvtContext} context Platform specific context object
 * @param {number} r radius for the generated shape
 * @param {number} width width of the generated shape
 * @param {number} height height of the generated shape
 * @param {string} openSide DvtPanZoomControlPanelLAFUtils.OPEN_TOP or DvtPanZoomControlPanelLAFUtils.OPEN_RIGHT or DvtPanZoomControlPanelLAFUtils.OPEN_BOTTOM
 * @param {number} openSideSize horizontal bar height
 * @return {DvtPath}  a path for the horizontal bar
 */
DvtPanZoomControlPanelLAFUtils.makeViewOpenShapeHelperOpenSide = function(context, r, width, height, openSide, openSideSize) {
  var arPoints = DvtPanZoomControlPanelLAFUtils.GetShapePathCommands(width, height, r, openSide, openSideSize);
  return new DvtPath(context, arPoints);
};


/**
 * Returns an array of commands for the DvtPath. The array is used to generate vertical or horizontal bar shape
 *
 * @param {number} width width of the generated shape
 * @param {number} height height of the generated shape
 * @param {number} r radius for the generated shape
 * @param {string} openSide DvtPanZoomControlPanelLAFUtils.OPEN_TOP or DvtPanZoomControlPanelLAFUtils.OPEN_RIGHT or DvtPanZoomControlPanelLAFUtils.OPEN_BOTTOM
 * @param {number} openSideSize horizontal bar height
 * @return {Array} array is used to generate vertical or horizontal bar shape
 */
DvtPanZoomControlPanelLAFUtils.GetShapePathCommands = function(width, height, r, openSide, openSideSize) {
  var arPoints;
  var bidi = DvtAgent.isRightToLeft();
  if (openSide == DvtPanZoomControlPanelLAFUtils.OPEN_TOP && !bidi) { //vertical bar
    arPoints = ['M', width, 0,
                'L', width, height - r,
                'A', r, r, 0, 0, 1, width - r, height,
                'L', 0, height,
                'L', 0, 0];
  }
  if (openSide == DvtPanZoomControlPanelLAFUtils.OPEN_TOP && bidi) { //vertical bar
    arPoints = ['M', width, 0,
                'L', width, height,
                'L', r, height,
                'A', r, r, 0, 0, 1, 0, height - r,
                'L', 0, 0];
  }
  else if (openSide == DvtPanZoomControlPanelLAFUtils.OPEN_RIGHT && !bidi) { //vertical bar
    arPoints = ['M', width, openSideSize,
                'L', width, height - r,
                'A', r, r, 0, 0, 1, width - r, height,
                'L', 0, height,
                'L', 0, 0,
                'L', width, 0];
  }
  else if (openSide == DvtPanZoomControlPanelLAFUtils.OPEN_RIGHT && bidi) { //vertical bar
    arPoints = ['M', 0, 0,
                'L', width, 0,
                'L', width, height,
                'L', r, height,
                'A', r, r, 0, 0, 1, 0, height - r,
                'L', 0, openSideSize];
  }
  else if (openSide == DvtPanZoomControlPanelLAFUtils.OPEN_LEFT && !bidi) { //horizontal bar
    arPoints = ['M', 0, 0,
                'L', width - r, 0,
                'A', r, r, 0, 0, 1, width, r,
                'L', width, height - r,
                'A', r, r, 0, 0, 1, width - r, height,
                'L', 0, height];
  }
  else if (openSide == DvtPanZoomControlPanelLAFUtils.OPEN_LEFT && bidi) { //horizontal bar
    arPoints = ['M', width, height,
                'L', r, height,
                'A', r, r, 0, 0, 1, 0, height - r,
                'L', 0, r,
                'A', r, r, 0, 0, 1, r, 0,
                'L', width, 0];
  }
  else if (openSide == DvtPanZoomControlPanelLAFUtils.OPEN_BOTTOM && !bidi) { //horizontal bar
    arPoints = ['M', 0, height,
                'L', 0, 0,
                'L', width - r, 0,
                'A', r, r, 0, 0, 1, width, r,
                'L', width, height - r,
                'A', r, r, 0, 0, 1, width - r, height,
                'L', openSideSize, height];
  }
  else if (openSide == DvtPanZoomControlPanelLAFUtils.OPEN_BOTTOM && bidi) { //horizontal bar
    arPoints = ['M', width, height,
                'L', width, 0,
                'L', r, 0,
                'A', r, r, 0, 0, 0, 0, r,
                'L', 0, height - r,
                'A', r, r, 0, 0, 0, r, height,
                'L', width - openSideSize, height];
  }
  return arPoints;
};
/**
 * @constructor
 * @export
 */
var DvtAbstractComponent = function(context)
{
  this.Init(context);
};

DvtObj.createSubclass(DvtAbstractComponent, DvtContainer, 'DvtAbstractComponent');

DvtAbstractComponent.LOAD_XML_INITIAL = 'initial';

DvtAbstractComponent._DEFAULT_BACKGROUND_COLOR = '#7396C8';

DvtAbstractComponent._ELEM_ROOT = 'r';
DvtAbstractComponent._ATTR_INLINE_STYLE = 'inlineStyle';
DvtAbstractComponent._ATTR_SKIN_STYLE = 'skinStyle';
DvtAbstractComponent.SKIN_NAME = 'skin';

// control panel skinning
DvtAbstractComponent._ATTR_CTRLPANEL_BACKGROUND_COLOR = 'cpBackgroundColor';
DvtAbstractComponent._ATTR_CTRLPANEL_BORDER_COLOR = 'cpBorderColor';
DvtAbstractComponent._ATTR_CTRLPANEL_BOX_SHADOW = 'cpBoxShadow';
DvtAbstractComponent._ATTR_CTRLPANEL_BORDER_RADIUS = 'cpBorderRadius';

DvtAbstractComponent.BOX_SHADOW = 'box-shadow';

DvtAbstractComponent._ATTR_TAB_BG_COLOR_INACTIVE = 'tabBgColorInactive';
DvtAbstractComponent._ATTR_TAB_BORDER_COLOR_INACTIVE = 'tabBorderColorInactive';
DvtAbstractComponent.TAB_BG_COLOR_INACTIVE = 'tab-color-inactive';
DvtAbstractComponent.TAB_BORDER_COLOR_INACTIVE = 'tab-border-color-inactive';

DvtAbstractComponent._ATTR_SCROLLBAR_BACKGROUND = 'scrollbarBg';
DvtAbstractComponent._ATTR_SCROLLBAR_BORDER_COLOR = 'scrollbarBorderColor';
DvtAbstractComponent._ATTR_SCROLLBAR_HANDLE_COLOR = 'scrollbarHandleColor';
DvtAbstractComponent._ATTR_SCROLLBAR_HANDLE_ACTIVE_COLOR = 'scrollbarHandleActiveColor';
DvtAbstractComponent._ATTR_SCROLLBAR_HANDLE_HOVER_COLOR = 'scrollbarHandleHoverColor';


/**
 * Helper method called by the constructor for initializing this object
 * @param {DvtContext} context The platform specific context object
 * @protected
 */
DvtAbstractComponent.prototype.Init = function(context)
{
  DvtAbstractComponent.superclass.Init.call(this, context);

  this._backgroundPane = new DvtRect(context, 0, 0, 0, 0);
  this.addChild(this._backgroundPane);

  this._resourcesMap = null;
  this._compCSSStyle = null;
  this._controlPanelStyleMap = null;
  this._legendStyleMap = null;
  this._skinName = '';
  //flag indicating if we're currently rendering null xml, for example based on
  //a resize event from the peer
  this._bRenderNullXml = false;

  //IE10, Flash toolkit and FF version 17 do not support vector-effects=non-scaling-stroke so we still need to set stroke width based on zoom
  this._bSupportsVectorEffects = (!DvtAgent.isPlatformIE() && !(DvtAgent.isPlatformGecko() && DvtAgent.getVersion() <= 17));
};

DvtAbstractComponent.prototype.getBackgroundPane = function()
{
  return this._backgroundPane;
};

DvtAbstractComponent.prototype.renderComponent = function()
{
  this.InitComponentInternal();
  this.RenderComponentInternal();
};

DvtAbstractComponent.prototype.InitComponentInternal = function() {
  this._bAbsCompRendered = false;
};

DvtAbstractComponent.prototype.RenderComponentInternal = function()
{
  //subclasses must extend

  if (!this._bAbsCompRendered)
  {
    this.RenderBackground();
  }

  this._bAbsCompRendered = true;
};

DvtAbstractComponent.prototype.loadXml = function(xmlString, eventType, paramKeys, paramValues)
{
  var parser = this.GetXmlStringParser();
  if (parser)
  {
    var rootXmlNode = parser.parse(xmlString);
    if (rootXmlNode)
    {
      if (rootXmlNode.getName() === DvtAbstractComponent._ELEM_ROOT)
        rootXmlNode = rootXmlNode.getFirstChild();

      if (rootXmlNode)
        this.LoadXmlDom(eventType, rootXmlNode, paramKeys, paramValues);
    }
  }
};


/**
 * Load JSON object
 * @param {object} jsonObj  The JSON object
 * @param {String} eventType  Event type
 * @param {object} paramKeys  Parameter keys
 * @param {object} paramValues  Parameter values
 */
DvtAbstractComponent.prototype.loadJson = function(jsonObj, eventType, paramKeys, paramValues)
{
  if (jsonObj)
    this.LoadJsonObj(eventType, jsonObj, paramKeys, paramValues);
};

DvtAbstractComponent.prototype.GetXmlStringParser = function()
{
  return new DvtXmlParser(this.getCtx());
};

DvtAbstractComponent.prototype.LoadXmlDom = function(eventType, rootXmlNode, paramKeys, paramValues)
{
  switch (eventType)
  {
    case DvtAbstractComponent.LOAD_XML_INITIAL:
    default:
      this.LoadXmlInitial(eventType, rootXmlNode, paramKeys, paramValues);
      break;
  }
};


/**
 * Load JSON object
 * @param {String} eventType  Event type
 * @param {object} jsonObj  The JSON object
 * @param {object} paramKeys  Parameter keys
 * @param {object} paramValues  Parameter values
 */
DvtAbstractComponent.prototype.LoadJsonObj = function(eventType, jsonObj, paramKeys, paramValues)
{
  switch (eventType)
  {
    case DvtAbstractComponent.LOAD_XML_INITIAL:
    default:
      this.LoadJsonInitial(eventType, jsonObj, paramKeys, paramValues);
      break;
  }
};

DvtAbstractComponent.prototype.LoadXmlInitial = function(eventType, rootXmlNode, paramKeys, paramValues)
{
  //subclasses must override
};


/**
 * Load JSON initial
 * @param {String} eventType  Event type
 * @param {object} jsonObj  The JSON object
 * @param {object} paramKeys  Parameter keys
 * @param {object} paramValues  Parameter values
 */
DvtAbstractComponent.prototype.LoadJsonInitial = function(eventType, jsonObj, paramKeys, paramValues)
{
  //subclasses must override
};


/**
 * @export
 */
DvtAbstractComponent.prototype.render = function(xmlString, width, height)
{
  this._width = width;
  this._height = height;

  this._backgroundPane.setWidth(this._width);
  this._backgroundPane.setHeight(this._height);

  //set the flag that we're rendering null xml
  if (!xmlString) {
    this._bRenderNullXml = true;
  }
  else {
    // Convert the data into XML if it's a json string
    xmlString = this.ProcessJSON(xmlString);
  }

  this.loadXml(xmlString);
  this.renderComponent();

  //reset the flag for rendering null xml
  this._bRenderNullXml = false;
};


/**
 * @export
 * Render the JSON response
 * @param {object} jsonObj  JSON object
 * @param {number} width  Width
 * @param {number} height  Height
 */
DvtAbstractComponent.prototype.renderJson = function(jsonObj, width, height)
{
  this._width = width;
  this._height = height;

  this._backgroundPane.setWidth(this._width);
  this._backgroundPane.setHeight(this._height);

  //set the flag that we're rendering null xml
  if (!jsonObj) {
    this._bRenderNullXml = true;
  }
  else {
    // Convert the data into XML if it's a json string
    jsonObj = this.ProcessJSON(jsonObj);
  }

  this.loadJson(jsonObj);
  this.renderComponent();

  //reset the flag for rendering null xml
  this._bRenderNullXml = false;
};

DvtAbstractComponent.prototype.setBackgroundColor = function(color)
{
  this._backgroundColor = color;
};

DvtAbstractComponent.prototype.RenderBackground = function()
{
  //BUG FIX 13704008: if there's an inlineStyle, use its attributes
  //when rendering the background
  if (this.getComponentStyle()) {
    var fill = this._getBackgroundFill();
    if (fill) {
      this._backgroundPane.setFill(fill);
    }
  }
  else if (this._backgroundColor != 'none') {
    var fill = this._getBackgroundGradient(this._backgroundColor);
    this._backgroundPane.setFill(fill);
  }
  else {
    this._backgroundPane.setInvisibleFill();
  }
};

DvtAbstractComponent.prototype._getBackgroundFill = function() {
  var compCSSStyle = this.getComponentStyle();
  if (compCSSStyle) {
    var fillType = compCSSStyle.getStyle(DvtCSSStyle.FILL_TYPE);
    var bgColor = compCSSStyle.getStyle(DvtCSSStyle.BACKGROUND_COLOR);
    if (!bgColor) {
      bgColor = DvtAbstractComponent._DEFAULT_BACKGROUND_COLOR;
    }
    if (fillType == 'solid') {
      return new DvtSolidFill(bgColor);
    }
    else {
      return this._getBackgroundGradient(bgColor);
    }
  }
};

DvtAbstractComponent.prototype._getBackgroundGradient = function(color)
{
  var startColor = '#FFFFFF';
	var midOneColor = '#FFFFFF';
	var midTwoColor = '#AECDEA';
	var endColor = DvtAbstractComponent._DEFAULT_BACKGROUND_COLOR;
  var arColors;
  var bgAlpha = 1;

	if (color && color != endColor) {
    //BUG FIX 13704008: get alpha from the given color
    bgAlpha = DvtColorUtils.getAlpha(color);

		var rrRatio = (DvtColorUtils.getRed(midTwoColor) - DvtColorUtils.getRed(endColor)) /
        (0xff - DvtColorUtils.getRed(endColor));
		var ggRatio = (DvtColorUtils.getGreen(midTwoColor) - DvtColorUtils.getGreen(endColor)) /
		              (0xff - DvtColorUtils.getGreen(endColor));
		var bbRatio = (DvtColorUtils.getBlue(midTwoColor) - DvtColorUtils.getBlue(endColor)) /
		              (0xff - DvtColorUtils.getBlue(endColor));
		var rr = DvtColorUtils.getRed(color);
		var gg = DvtColorUtils.getGreen(color);
		var bb = DvtColorUtils.getBlue(color);
		var newRR = Math.round(rr + rrRatio * (0xff - rr));
		var newGG = Math.round(gg + ggRatio * (0xff - gg));
		var newBB = Math.round(bb + bbRatio * (0xff - bb));
		var newColor = DvtColorUtils.makeRGB(newRR, newGG, newBB);
    //BUG FIX 13704008: make sure to get the RGB (without alpha) from
    //the given color so that the browser doesn't misinterpret the
    //#aarrggbb format (it may assume the color is really #aarrgg)
    var bgRgb = DvtColorUtils.getRGB(color);
		arColors = new Array(startColor, midOneColor, newColor, bgRgb);
	} else {
		arColors = [startColor, midOneColor, midTwoColor, endColor];
	}

  var arAlphas = [bgAlpha, bgAlpha, bgAlpha, bgAlpha];
  var arStops = [0, 45 / 255, 190 / 255, 1];

  var xx = 0;
  var yy = 0;
  var ww = this._width;
  var hh = this._height;
  var n = 1.7;
  var gw = ww * n * n;
  var gh = hh * n;
  var gx = xx + ((ww - gw) / 2);
  var gy = yy - 35;

  var cx = gx + gw / 2;
  var cy = gy + gh / 2;
  //TODO: not sure how to corectly calculate single r for a non-square
  //bounding rect...
  var r = 1.5 * Math.min(gw / 2, gh / 2);
  var arBounds = [gx, gy, gw, gh];

  var fill = new DvtRadialGradientFill(arColors, arAlphas, arStops, cx, cy, r, arBounds);
  return fill;
};


DvtAbstractComponent.prototype.GetWidth = function() {
  return this._width;
};

DvtAbstractComponent.prototype.GetHeight = function() {
  return this._height;
};

DvtAbstractComponent.prototype.getResourcesMap = function() {
  if (!this._resourcesMap) {
    this._resourcesMap = {};
  }
  return this._resourcesMap;
};


DvtAbstractComponent.prototype.setSkinName = function(skinName) {
  this._skinName = skinName;
};

DvtAbstractComponent.prototype.getSkinName = function() {
  return this._skinName;
};

DvtAbstractComponent.prototype.setComponentStyle = function(cssStyle) {
  this._compCSSStyle = cssStyle;
};

DvtAbstractComponent.prototype.getComponentStyle = function() {
  return this._compCSSStyle;
};

DvtAbstractComponent.prototype.setControlPanelStyleMap = function(styleMap) {
  this._controlPanelStyleMap = styleMap;
};

DvtAbstractComponent.prototype.getControlPanelStyleMap = function() {
  return this._controlPanelStyleMap;
};


/**
 * Returns the map containing the legend styling attributes for the skin
 * @return {object} The map of legend styling attributes
 */
DvtAbstractComponent.prototype.getLegendStyleMap = function() {
  return this._legendStyleMap;
};


/**
 * Sets the legend styling map containing skin specific styling attributes
 * @param {object} styleMap The map of legend styling attributes
 */
DvtAbstractComponent.prototype.setLegendStyleMap = function(styleMap) {
  this._legendStyleMap = styleMap;
};


/**
 * Parse component JSON
 * @param {object} jsonObj  The JSON object
 */
DvtAbstractComponent.prototype.parseComponentJson = function(jsonObj) {

  var compCSSStyle = null;
  if (jsonObj) {
    compCSSStyle = this.parseComponentStyle(jsonObj[DvtAbstractComponent._ATTR_SKIN_STYLE], compCSSStyle);
    compCSSStyle = this.parseComponentStyle(jsonObj[DvtAbstractComponent._ATTR_INLINE_STYLE], compCSSStyle);
    if (compCSSStyle)
      this.setComponentStyle(compCSSStyle);

    // parse attributes for the widgets - control panel, search panel and panel drawer
    this.parseWidgetJson(jsonObj);
  }
};

DvtAbstractComponent.prototype.parseComponentAttrs = function(xmlNode) {

  var compCSSStyle = null;
  compCSSStyle = this.parseComponentStyle(xmlNode.getAttr(DvtAbstractComponent._ATTR_SKIN_STYLE), compCSSStyle);
  compCSSStyle = this.parseComponentStyle(xmlNode.getAttr(DvtAbstractComponent._ATTR_INLINE_STYLE), compCSSStyle);
  if (compCSSStyle)
    this.setComponentStyle(compCSSStyle);

  // parse attributes for the widgets - control panel, search panel and panel drawer
  this.parseWidgetAttrs(xmlNode);
};

DvtAbstractComponent.prototype.parseComponentStyle = function(attr, compCSSStyle) {
  if (attr) {
    if (compCSSStyle)
      compCSSStyle.merge(new DvtCSSStyle(attr));
    else
      compCSSStyle = new DvtCSSStyle(attr);
  }
  return compCSSStyle;
};


DvtAbstractComponent.prototype.ProcessJSON = function(xmlString) {
  return xmlString;
};


/**
 * Parses and creates skin specific subcomponent style maps
 * @param {object} jsonObj The xml node containing subcomponent attributes
 */
DvtAbstractComponent.prototype.parseWidgetJson = function(jsonObj) {
  if (!jsonObj)
    return;
  var cpStyleMap = new Object();
  var skinName = jsonObj[DvtAbstractComponent.SKIN_NAME];
  if (skinName) {
    this.setSkinName(skinName);
    cpStyleMap[DvtAbstractComponent.SKIN_NAME] = skinName;
  }

  // control panel, search panel, panel drawer styles
  DvtStyleUtils.setStyle(cpStyleMap, DvtCSSStyle.BACKGROUND_COLOR, jsonObj[DvtAbstractComponent._ATTR_CTRLPANEL_BACKGROUND_COLOR]);
  DvtStyleUtils.setStyle(cpStyleMap, DvtCSSStyle.BORDER_COLOR, jsonObj[DvtAbstractComponent._ATTR_CTRLPANEL_BORDER_COLOR]);
  DvtStyleUtils.setStyle(cpStyleMap, DvtCSSStyle.BORDER_RADIUS, jsonObj[DvtAbstractComponent._ATTR_CTRLPANEL_BORDER_RADIUS]);
  DvtStyleUtils.setStyle(cpStyleMap, DvtAbstractComponent.BOX_SHADOW, jsonObj[DvtAbstractComponent._ATTR_CTRLPANEL_BOX_SHADOW]);
  DvtStyleUtils.setStyle(cpStyleMap, DvtAbstractComponent.TAB_BG_COLOR_INACTIVE, jsonObj[DvtAbstractComponent._ATTR_TAB_BG_COLOR_INACTIVE]);
  DvtStyleUtils.setStyle(cpStyleMap, DvtAbstractComponent.TAB_BORDER_COLOR_INACTIVE, jsonObj[DvtAbstractComponent._ATTR_TAB_BORDER_COLOR_INACTIVE]);

  // scrollbar styles for scrollable container
  DvtStyleUtils.setStyle(cpStyleMap, DvtScrollbar.BACKGROUND, jsonObj[DvtAbstractComponent._ATTR_SCROLLBAR_BACKGROUND]);
  DvtStyleUtils.setStyle(cpStyleMap, DvtScrollbar.BORDER_COLOR, jsonObj[DvtAbstractComponent._ATTR_SCROLLBAR_BORDER_COLOR]);
  DvtStyleUtils.setStyle(cpStyleMap, DvtScrollbar.HANDLE_COLOR, jsonObj[DvtAbstractComponent._ATTR_SCROLLBAR_HANDLE_COLOR]);
  DvtStyleUtils.setStyle(cpStyleMap, DvtScrollbar.HANDLE_ACTIVE_COLOR, jsonObj[DvtAbstractComponent._ATTR_SCROLLBAR_HANDLE_ACTIVE_COLOR]);
  DvtStyleUtils.setStyle(cpStyleMap, DvtScrollbar.HANDLE_HOVER_COLOR, jsonObj[DvtAbstractComponent._ATTR_SCROLLBAR_HANDLE_HOVER_COLOR]);
  //merge skinned styles with defaults
  //TODO: we should reevalute this code when we'll have the defaults coming from a server as a JSON string
  // and merge the defaults in the subcomponent with the corresponding subcomponent's defaults
  cpStyleMap = DvtPanZoomControlPanelDefaults.calcOptions(cpStyleMap);
  this.setControlPanelStyleMap(cpStyleMap);

  // legend
  var legendStyleMap = new Object();
  if (skinName)
    legendStyleMap[DvtAbstractComponent.SKIN_NAME] = skinName;
  this.setLegendStyleMap(DvtCommonLegendDefaults.calcOptions(legendStyleMap));
};


/**
 * Parses and creates skin specific subcomponent style maps
 * @param {DvtXmlNode} xmlNode The xml node containing subcomponent attributes
 */
DvtAbstractComponent.prototype.parseWidgetAttrs = function(xmlNode) {
  var cpStyleMap = new Object();
  var skinName = xmlNode.getAttr(DvtAbstractComponent.SKIN_NAME);
  if (skinName) {
    this.setSkinName(skinName);
    cpStyleMap[DvtAbstractComponent.SKIN_NAME] = skinName;
  }

  // control panel, search panel, panel drawer styles
  DvtStyleUtils.setStyle(cpStyleMap, DvtCSSStyle.BACKGROUND_COLOR, xmlNode.getAttr(DvtAbstractComponent._ATTR_CTRLPANEL_BACKGROUND_COLOR));
  DvtStyleUtils.setStyle(cpStyleMap, DvtCSSStyle.BORDER_COLOR, xmlNode.getAttr(DvtAbstractComponent._ATTR_CTRLPANEL_BORDER_COLOR));
  DvtStyleUtils.setStyle(cpStyleMap, DvtCSSStyle.BORDER_RADIUS, xmlNode.getAttr(DvtAbstractComponent._ATTR_CTRLPANEL_BORDER_RADIUS));
  DvtStyleUtils.setStyle(cpStyleMap, DvtAbstractComponent.BOX_SHADOW, xmlNode.getAttr(DvtAbstractComponent._ATTR_CTRLPANEL_BOX_SHADOW));
  DvtStyleUtils.setStyle(cpStyleMap, DvtAbstractComponent.TAB_BG_COLOR_INACTIVE, xmlNode.getAttr(DvtAbstractComponent._ATTR_TAB_BG_COLOR_INACTIVE));
  DvtStyleUtils.setStyle(cpStyleMap, DvtAbstractComponent.TAB_BORDER_COLOR_INACTIVE, xmlNode.getAttr(DvtAbstractComponent._ATTR_TAB_BORDER_COLOR_INACTIVE));

  // scrollbar styles for scrollable container
  DvtStyleUtils.setStyle(cpStyleMap, DvtScrollbar.BACKGROUND, xmlNode.getAttr(DvtAbstractComponent._ATTR_SCROLLBAR_BACKGROUND));
  DvtStyleUtils.setStyle(cpStyleMap, DvtScrollbar.BORDER_COLOR, xmlNode.getAttr(DvtAbstractComponent._ATTR_SCROLLBAR_BORDER_COLOR));
  DvtStyleUtils.setStyle(cpStyleMap, DvtScrollbar.HANDLE_COLOR, xmlNode.getAttr(DvtAbstractComponent._ATTR_SCROLLBAR_HANDLE_COLOR));
  DvtStyleUtils.setStyle(cpStyleMap, DvtScrollbar.HANDLE_ACTIVE_COLOR, xmlNode.getAttr(DvtAbstractComponent._ATTR_SCROLLBAR_HANDLE_ACTIVE_COLOR));
  DvtStyleUtils.setStyle(cpStyleMap, DvtScrollbar.HANDLE_HOVER_COLOR, xmlNode.getAttr(DvtAbstractComponent._ATTR_SCROLLBAR_HANDLE_HOVER_COLOR));
  //merge skinned styles with defaults
  //TODO: we should reevalute this code when we'll have the defaults coming from a server as a JSON string
  // and merge the defaults in the subcomponent with the corresponding subcomponent's defaults
  cpStyleMap = DvtPanZoomControlPanelDefaults.calcOptions(cpStyleMap);
  this.setControlPanelStyleMap(cpStyleMap);

  // legend
  var legendStyleMap = new Object();
  if (skinName)
    legendStyleMap[DvtAbstractComponent.SKIN_NAME] = skinName;
  this.setLegendStyleMap(DvtCommonLegendDefaults.calcOptions(legendStyleMap));
};


/**
 * Gets whether or not the current rendering technology supports vector effects
 *
 * @return {boolean} whether or not the current rendering technology supports vector effects
 */
DvtAbstractComponent.prototype.supportsVectorEffects = function() {
  return this._bSupportsVectorEffects;
};
/**
 * @constructor
 * @export
 */
var DvtAbstractPanZoomComponent = function(context) {
  this.Init(context);
};

DvtObj.createSubclass(DvtAbstractPanZoomComponent, DvtAbstractComponent, 'DvtAbstractPanZoomComponent');

//control panel is initially collapsed
DvtAbstractPanZoomComponent.CONTROL_PANEL_BEHAVIOR_INIT_COLLAPSED = 'initCollapsed';
//control panel is initially expanded
DvtAbstractPanZoomComponent.CONTROL_PANEL_BEHAVIOR_INIT_EXPANDED = 'initExpanded';
//control panel is not shown
DvtAbstractPanZoomComponent.CONTROL_PANEL_BEHAVIOR_HIDDEN = 'hidden';

DvtAbstractPanZoomComponent._PANNING_OFF = 1;
DvtAbstractPanZoomComponent._ZOOMING_OFF = 2;
DvtAbstractPanZoomComponent._ZOOM_TO_FIT_OFF = 4;

DvtAbstractPanZoomComponent.PAN_ZOOM_KEY = 'panZoomInfo';

//TODO: move some where else
DvtAbstractPanZoomComponent._CHANGE_LAYOUT_OFF = (1 << 29);//536870912
DvtAbstractPanZoomComponent.prototype.Init = function(context) {
  DvtAbstractPanZoomComponent.superclass.Init.call(this, context);
  this._featuresOff = 0;
  this._controlPanelBehavior = DvtAbstractPanZoomComponent.CONTROL_PANEL_BEHAVIOR_INIT_COLLAPSED;
  this._displayedControls = DvtPanZoomCanvas.DEFAULT_DISPLAYED_CONTROLS;
};


/**
 * @override
 */
DvtAbstractPanZoomComponent.prototype.InitComponentInternal = function() {
  DvtAbstractPanZoomComponent.superclass.InitComponentInternal.call(this);

  //if not rendering null xml, recreate the panZoomCanvas
  if (!this._bRenderNullXml) {
    if (this._panZoomCanvas) {
      this.removeChild(this._panZoomCanvas);
      this._panZoomCanvas = null;
    }
    this._panZoomCanvas = this.CreatePanZoomCanvas(this.GetWidth(), this.GetHeight());
    this._panZoomCanvas.renderComponent();
    var controlPanel = this._panZoomCanvas.getControlPanel();
    if (controlPanel)
      controlPanel.addEvtListener(DvtPanZoomControlPanelEvent.TYPE, this.HandleControlPanelEvent, false, this);
  }
  //if rendering null xml, update the size of the panZoomCanvas
  else {
    this._panZoomCanvas.setSize(this.GetWidth(), this.GetHeight());
  }
  this.SetClipRect(this.GetWidth(), this.GetHeight());
};

DvtAbstractPanZoomComponent.prototype.ConvertControlPanelBehaviorStringToInt = function(s) {
  switch (s) {
    case DvtAbstractPanZoomComponent.CONTROL_PANEL_BEHAVIOR_INIT_COLLAPSED:
      return DvtPanZoomCanvas.CONTROL_PANEL_BEHAVIOR_INIT_COLLAPSED;
    case DvtAbstractPanZoomComponent.CONTROL_PANEL_BEHAVIOR_INIT_EXPANDED:
      return DvtPanZoomCanvas.CONTROL_PANEL_BEHAVIOR_INIT_EXPANDED;
    case DvtAbstractPanZoomComponent.CONTROL_PANEL_BEHAVIOR_HIDDEN:
    default:
      return DvtPanZoomCanvas.CONTROL_PANEL_BEHAVIOR_HIDDEN;
  }
};


/**
 * Creates and adds the pan zoom canvas to this component
 *
 * @param {number} ww the width of the pan zoom canvas
 * @param {number} hh the height of the pan zoom canvas
 *
 * @return {DvtPanZoomCanvas} the pan zoom canvas
 */
DvtAbstractPanZoomComponent.prototype.CreatePanZoomCanvas = function(ww, hh) {
  var pzc = new DvtPanZoomCanvas(this.getCtx(),
                                 this.getButtonImages(),
                                 ww,
                                 hh,
                                 null,
                                 this.ConvertControlPanelBehaviorStringToInt(this._controlPanelBehavior),
                                 this.getPanZoomResources(),
                                 this._displayedControls, this);
  pzc.addEvtListener(DvtPanEvent.TYPE, this.HandlePanEvent, false, this);
  pzc.addEvtListener(DvtZoomEvent.TYPE, this.HandleZoomEvent, false, this);
  this.addChildAt(pzc, 1); // Add directly on top of backgroundPane
  return pzc;
};

DvtAbstractPanZoomComponent.prototype.HandleControlPanelEvent = function(event) {
  //do nothing; for subclasses to implement
};

DvtAbstractPanZoomComponent.prototype.HandlePanEvent = function(event) {
  //do nothing; for subclasses to implement
};

DvtAbstractPanZoomComponent.prototype.HandleZoomEvent = function(event) {
  //do nothing; for subclasses to implement
};

DvtAbstractPanZoomComponent.prototype.getPanZoomCanvas = function() {
  return this._panZoomCanvas;
};


/**
 * Pan by the given amount.
 * @param {number} dx horizontal amount to pan by
 * @param {number} dy vertical amount to pan by
 * @param {DvtAnimator} animator optional animator to use to animate the pan
 */
DvtAbstractPanZoomComponent.prototype.panBy = function(dx, dy, animator) {
  this.getPanZoomCanvas().panBy(dx, dy, animator);
};


/**
 * Pan to the given position.
 * @param {number} xx horizontal position to pan to
 * @param {number} yy vertical position to pan to
 * @param {DvtAnimator} animator optional animator to use to animate the pan
 */
DvtAbstractPanZoomComponent.prototype.panTo = function(xx, yy, animator) {
  this.getPanZoomCanvas().panTo(xx, yy, animator);
};


/**
 * Zoom by the given amount.
 * @param {number} dz amount to zoom by
 * @param {number} xx horizontal center of zoom (if not specified, treated as the horizontal center of the canvas)
 * @param {number} yy vertical center of zoom (if not specified, treated as the vertical center of the canvas)
 * @param {DvtAnimator} animator optional animator to use to animate the zoom
 */
DvtAbstractPanZoomComponent.prototype.zoomBy = function(dz, xx, yy, animator) {
  this.getPanZoomCanvas().zoomBy(dz, xx, yy, animator);
};


/**
 * Zoom to the given scale.
 * @param {number} zz new scale
 * @param {number} xx horizontal center of zoom (if not specified, treated as the horizontal center of the canvas)
 * @param {number} yy vertical center of zoom (if not specified, treated as the vertical center of the canvas)
 * @param {DvtAnimator} animator optional animator to use to animate the zoom
 */
DvtAbstractPanZoomComponent.prototype.zoomTo = function(zz, xx, yy, animator) {
  this.getPanZoomCanvas().zoomTo(zz, xx, yy, animator);
};


/**
 * Zoom and pan the content pane to fit the canvas size.
 * @param {DvtAnimator} animator optional animator to use to animate the zoom-to-fit
 */
DvtAbstractPanZoomComponent.prototype.zoomToFit = function(animator) {
  this.getPanZoomCanvas().zoomToFit(animator);
};


/**
 * Get the Resources to use with this view.
 *
 * @return translated resources to use with this view
 */
DvtAbstractPanZoomComponent.prototype.getPanZoomResources = function() {
  return this._panZoomResources;
};


/**
 * Set the Resources to use with this view.
 *
 * @param resources translated resources to use with this view
 */
DvtAbstractPanZoomComponent.prototype.setPanZoomResources = function(resources) {
  this._panZoomResources = resources;
};


/**
 * Get the featuresOff
 *
 * @return featuresOff used with this view
 */
DvtAbstractPanZoomComponent.prototype.getFeaturesOff = function() {
  return this._featuresOff;
};


/**
 * Set the featuresOff
 *
 * @param flags featuresOff used with this view
 */
DvtAbstractPanZoomComponent.prototype.setFeaturesOff = function(flags) {
  this._featuresOff = flags;
};

DvtAbstractPanZoomComponent.prototype.isPanningOff = function() {
  return (this._featuresOff & DvtAbstractPanZoomComponent._PANNING_OFF) != 0;
};

DvtAbstractPanZoomComponent.prototype.isZoomingOff = function() {
  return (this._featuresOff & DvtAbstractPanZoomComponent._ZOOMING_OFF) != 0;
};

DvtAbstractPanZoomComponent.prototype.isZoomToFitOff = function() {
  return (this._featuresOff & DvtAbstractPanZoomComponent._ZOOM_TO_FIT_OFF) != 0;
};

//TODO: don't render layout combo for now
//Move this method to Diagram,er???
DvtAbstractPanZoomComponent.prototype.isChangeLayoutOff = function() {
  return true;//return (this._featuresOff & DvtAbstractPanZoomComponent._CHANGE_LAYOUT_OFF) != 0;
};


/**
 * Get the Resources to use with this view.
 *
 * @return translated resources to use with this view
 */
DvtAbstractPanZoomComponent.prototype.getResources = function() {
  return this._resources;
};


/**
 * Set the Resources to use with this view.
 *
 * @param resources translated resources to use with this view
 */
DvtAbstractPanZoomComponent.prototype.setResources = function(resources) {
  this._resources = resources;
};

DvtAbstractPanZoomComponent.prototype.setButtonImages = function(uris) {
  this._buttonImages = uris;
};

DvtAbstractPanZoomComponent.prototype.getButtonImages = function() {
  return this._buttonImages;
};

/**
 * Set the control panel behavior: initExpanded, initCollapsed, or hidden.
 * The default is initCollapsed.
 *
 * @param behavior control panel behavior
 */
DvtAbstractPanZoomComponent.prototype.setControlPanelBehavior = function(behavior) {
  this._controlPanelBehavior = behavior;
};


/**
 * Get the control panel behavior.
 *
 * @return control panel behavior: initExpanded, initCollapsed, or hidden
 */
DvtAbstractPanZoomComponent.prototype.getControlPanelBehavior = function() {
  return this._controlPanelBehavior;
};


/**
 * Sets the controls that should be displayed in the control panel
 *
 * @param displayedControls flags indicating the controls that should be displayed
 */
DvtAbstractPanZoomComponent.prototype.setDisplayedControls = function(displayedControls) {
  this._displayedControls = displayedControls;
};


/**
 * Gets the controls that should be displayed in the control panel
 *
 * @return flags indicating the controls that should be displayed
 */
DvtAbstractPanZoomComponent.prototype.getDisplayedControls = function() {
  return this._displayedControls;
};


/**
 * Gets whether this component will handle JS MouseWheel events
 *
 * @return {boolean} true if this component will handle JS MouseWheel events, false otherwise
 * @export
 */
DvtAbstractPanZoomComponent.prototype.isMouseWheelHandled = function() {
  return this.getPanZoomCanvas().isZoomingEnabled() && !this.isZoomingOff();
};


/**
 *  Sets a clipping region for the component.
 *  @param {number} ww Component width
 *  @param {number} hh Component height
 */
DvtAbstractPanZoomComponent.prototype.SetClipRect = function(ww, hh) {
  var clipPath = new DvtClipPath('comp');
  clipPath.addRect(this.getTranslateX(), this.getTranslateY(), ww, hh);
  this.setClipPath(clipPath);
};
// Copyright (c) 2011, 2014, Oracle and/or its affiliates. All rights reserved.



/**
  *  Creates a canvas that supports panning and zooming.
  *  @extends {DvtContainer}
  *  @class DvtPanZoomCanvas is a platform independent class representing a
  *  pannable, zoomable canvas.
  *  <p>
  *  <b>Example:</b><br><br> <code>
  *  var canvas = new DvtPanZoomCanvas(context, 400, 200, 'myCanvas') ;<br>
  *  <br>
  *</code>
  *  @constructor
  *  @param {DvtContext} context The context object
  *  @param {number} ww The width of the canvas
  *  @param {number} hh The height of the canvas
  *  @param {string} id optional identifier
  *  @param {number} controlPanelState the control panel state
  *  @param {Object} controlPanelResources the map of control panel button tooltip translations
  *  @param {number} displayedControls flags indicating what controls should be displayed in the control panel
  */
var DvtPanZoomCanvas = function(context, buttonImages, ww, hh, id, controlPanelState, controlPanelResources, displayedControls, view)
{
  this.Init(context, buttonImages, ww, hh, id, controlPanelState, controlPanelResources, displayedControls, view);
};

DvtObj.createSubclass(DvtPanZoomCanvas, DvtContainer, 'DvtPanZoomCanvas');

DvtPanZoomCanvas.DEFAULT_PAN_INCREMENT = 15;
DvtPanZoomCanvas.DEFAULT_ZOOM_INCREMENT = .05;
DvtPanZoomCanvas.DEFAULT_ANIMATION_DURATION = .5;

//control panel is collapsed
DvtPanZoomCanvas.CONTROL_PANEL_BEHAVIOR_INIT_COLLAPSED = 0;
//control panel is expanded
DvtPanZoomCanvas.CONTROL_PANEL_BEHAVIOR_INIT_EXPANDED = 1;
//control panel is not shown
DvtPanZoomCanvas.CONTROL_PANEL_BEHAVIOR_HIDDEN = 2;

DvtPanZoomCanvas.DEFAULT_DISPLAYED_CONTROLS = DvtPanZoomControlPanel.CONTROLS_ALL;

DvtPanZoomCanvas.prototype.Init = function(context, buttonImages, ww, hh, id, controlPanelState, controlPanelResources, displayedControls, view)
{
  DvtPanZoomCanvas.superclass.Init.call(this, context, null, id);

  this._view = view;

  this._ww = ww;
  this._hh = hh;
  this._buttonImages = buttonImages;

  this._px = 0;
  this._py = 0;
  this._mx = 0;
  this._my = 0;

  this._minPanX = null;
  this._maxPanX = null;
  this._minPanY = null;
  this._maxPanY = null;
  this._minZoom = .1;
  this._maxZoom = 1;

  this._panIncrement = DvtPanZoomCanvas.DEFAULT_PAN_INCREMENT;
  this._zoomIncrement = DvtPanZoomCanvas.DEFAULT_ZOOM_INCREMENT;
  this._bTiltPanningEnabled = false;
  this._zoomToFitPadding = 20;

  this._controlPanel = null;
  this._controlPanelState = controlPanelState ? controlPanelState : DvtPanZoomCanvas.CONTROL_PANEL_BEHAVIOR_INIT_COLLAPSED;
  this._displayedControls = (displayedControls || displayedControls == 0) ? displayedControls : DvtPanZoomCanvas.DEFAULT_DISPLAYED_CONTROLS;
  this._controlPanelResources = controlPanelResources;

  this._bPanningEnabled = true;
  this._bZoomingEnabled = true;
  this._bZoomToFitEnabled = true;

  this._backgroundPane = new DvtRect(this.getCtx(),
                                     0, 0, this._ww, this._hh);
  this.addChild(this._backgroundPane);
  this._backgroundPane.setInvisibleFill();

  this._contentPane = new DvtContainer(this.getCtx());
  this.addChild(this._contentPane);
  this._contentPane.setMatrix(new DvtMatrix());

  this._animationDuration = DvtPanZoomCanvas.DEFAULT_ANIMATION_DURATION;

  this._eventManager = new DvtPanZoomCanvasEventManager(context, this.FireListener, this);
  this._eventManager.addListeners(this);

  this._clipIdSuffix = 1;
  this.SetClipRect(ww, hh);

  //flag indicating if constraints should be treated as elastic, so that overflow is possible, with bounce back
  this._bElasticConstraints = false;
  //anim for bouncing back elastic constraints
  this._elasticConstraintsAnim = null;
};


/**
 * Sets the pan zoom canvas size with an optional parameter to set a clipPath
 * @param {number} ww The new width of the pan zoom canvas.
 * @param {number} hh The new height of the pan zoom canvas.
 * @param {boolean} bAdjustSizeOnly If true, only the pan zoom canvas size is adjusted and no clip path is set.
 */
DvtPanZoomCanvas.prototype.setSize = function(ww, hh, bAdjustSizeOnly) {
  this._ww = ww;
  this._hh = hh;
  // Thematic Map uses this method to update canvas width temporarily before a zoom to fit to position the map within
  // a smaller bounds when legend is fixed without actually decreasing the canvas size
  if (!bAdjustSizeOnly) {
    this._backgroundPane.setWidth(ww);
    this._backgroundPane.setHeight(hh);
    //position control panel again, in case it's on the right side for BiDi
    if (this._controlPanel)
      this.PositionControlPanel();
    this.SetClipRect(ww, hh);
  }
};

DvtPanZoomCanvas.prototype.getSize = function() {
  return new DvtDimension(this._ww, this._hh);
};


/**
 *  Sets a clipping region for the panZoomCanvas.
 *  @param {number} ww width
 *  @param {number} hh height
 */
DvtPanZoomCanvas.prototype.SetClipRect = function(ww, hh) {
  var clipPath = new DvtClipPath('pzc');
  clipPath.addRect(this.getTranslateX(), this.getTranslateY(), ww, hh);
  this.setClipPath(clipPath);
};


/**
  * Get the content pane of the canvas.  The content pane is the
  * object that will be panned and zoomed.  Content should be
  * added as a child of the content pane, not the canvas itself.
  * @return {DvtContainer} the content pane of the canvas
  */
DvtPanZoomCanvas.prototype.getContentPane = function()
{
  return this._contentPane;
};

DvtPanZoomCanvas.prototype.setContentPane = function(contentPane) {
  this._contentPane = contentPane;
};


/**
  * Get the background pane of the canvas.  The background
  * pane appears behind the content pane, and should be used
  * for styling.
  * @return {DvtRect} the background pane of the canvas
  */
DvtPanZoomCanvas.prototype.getBackgroundPane = function()
{
  return this._backgroundPane;
};


/**
 * Gets the matrix for this pan zoom canvas
 * @param {DvtAnimator} an optional animator which may continue a destination value for this matrix
 * @return {DvtMatrix} the matrix
 */
DvtPanZoomCanvas.prototype.getContentPaneMatrix = function(animator) {
  if (animator) {
    var mat = animator.getDestVal(this._contentPane, this._contentPane.getMatrix);
    if (mat) {
      return mat;
    }
  }
  return this._contentPane.getMatrix();
};


/**
  * Get the current zoom level.
  * @param {DvtAnimator} animator (optional) The animator to check for a more current value
  * @return {number} the current zoom level
  */
DvtPanZoomCanvas.prototype.getZoom = function(animator)
{
  return this.getContentPaneMatrix(animator).getA();
};


/**
  * Get the current horizontal pan position.
  * @param {DvtAnimator} animator (optional) The animator to check for a more current value
  * @return {number} the current horizontal pan position
  */
DvtPanZoomCanvas.prototype.getPanX = function(animator)
{
  return this.getContentPaneMatrix(animator).getTx();
};


/**
  * Get the current vertical pan position.
  * @param {DvtAnimator} animator (optional) The animator to check for a more current value
  * @return {number} the current vertical pan position
  */
DvtPanZoomCanvas.prototype.getPanY = function(animator)
{
  return this.getContentPaneMatrix(animator).getTy();
};


/**
  * Set the padding to leave around the content when it is zoomed-to-fit.
  * The default value is 20.
  * @param {number} n new zoom-to-fit padding
  */
DvtPanZoomCanvas.prototype.setZoomToFitPadding = function(n)
{
  this._zoomToFitPadding = n;
};


/**
  * Get the padding to leave around the content when it is zoomed-to-fit.
  * @return {number} zoom-to-fit padding
  */
DvtPanZoomCanvas.prototype.getZoomToFitPadding = function()
{
  return this._zoomToFitPadding;
};


/**
  * Pan by the given amount.
  * @param {number} dx horizontal amount to pan by
  * @param {number} dy vertical amount to pan by
  * @param {DvtAnimator} animator optional animator to use to animate the pan
  */
DvtPanZoomCanvas.prototype.panBy = function(dx, dy, animator)
{
  if (!this.isPanningEnabled()) {
    return;
  }

  var oldX = this.getPanX(animator);
  var oldY = this.getPanY(animator);
  var newX = this.ConstrainPanX(oldX + dx);
  var newY = this.ConstrainPanY(oldY + dy);

  var deltaX = newX - oldX;
  var deltaY = newY - oldY;

  var mat = null;
  if (animator)
  {
    mat = animator.getDestVal(this._contentPane, this._contentPane.getMatrix);
    if (mat)
    {
      mat = mat.clone();
    }
  }
  if (!mat)
  {
    mat = this._contentPane.getMatrix().clone();
  }

  mat.translate(deltaX, deltaY);

  var thisRef = this;
  var fireStartEventFunc = function() {
    thisRef.FirePanEvent(DvtPanEvent.SUBTYPE_PANNING, newX, newY, oldX, oldY, animator);
  };
  var fireEndEventFunc = function() {
    thisRef.FirePanEvent(DvtPanEvent.SUBTYPE_PANNED, newX, newY, oldX, oldY, animator);
  };

  if (animator)
  {
    animator.addProp(DvtAnimator.TYPE_MATRIX,
                     this._contentPane,
                     this._contentPane.getMatrix,
                     this._contentPane.setMatrix,
                     mat);
    DvtPlayable.prependOnInit(animator, fireStartEventFunc);
    DvtPlayable.appendOnEnd(animator, fireEndEventFunc);
  }
  else
  {
    fireStartEventFunc();
    this._contentPane.setMatrix(mat);
    fireEndEventFunc();
  }
};


/**
  * Pan to the given position.
  * @param {number} xx horizontal position to pan to
  * @param {number} yy vertical position to pan to
  * @param {DvtAnimator} animator optional animator to use to animate the pan
  */
DvtPanZoomCanvas.prototype.panTo = function(xx, yy, animator)
{
  if (!this.isPanningEnabled()) {
    return;
  }

  var dx = xx - this.getPanX(animator);
  var dy = yy - this.getPanY(animator);
  this.panBy(dx, dy, animator);
};


/**
  * Zoom by the given amount.
  * @param {number} dz amount to zoom by
  * @param {number} xx horizontal center of zoom (if not specified, treated as the horizontal center of the canvas)
  * @param {number} yy vertical center of zoom (if not specified, treated as the vertical center of the canvas)
  * @param {DvtAnimator} animator optional animator to use to animate the zoom
  */
DvtPanZoomCanvas.prototype.zoomBy = function(dz, xx, yy, animator)
{
  if (!this.isZoomingEnabled()) {
    return;
  }

  if (!xx && xx !== 0)
  {
    xx = this._ww / 2;
  }
  if (!yy && yy !== 0)
  {
    yy = this._hh / 2;
  }

  var oldZoom = this.getZoom(animator);
  var newZoom = this.ConstrainZoom(oldZoom * dz);
  this.adjustZoomControls(newZoom);

  if (DvtPanZoomCanvas.RoundFloatForCompare(oldZoom) == DvtPanZoomCanvas.RoundFloatForCompare(newZoom))
  {
    return;
  }

  var deltaZoom = newZoom / oldZoom;

  var mat = null;
  if (animator)
  {
    mat = animator.getDestVal(this._contentPane, this._contentPane.getMatrix);
    if (mat)
    {
      mat = mat.clone();
    }
  }
  if (!mat)
  {
    mat = this._contentPane.getMatrix().clone();
  }

  // determine the new matrix after zooming
  mat.scale(deltaZoom, deltaZoom, xx, yy);

  // shift the update matrix back into bounds
  var xDiff = this.ConstrainPanX(mat.getTx()) - mat.getTx();
  var yDiff = this.ConstrainPanY(mat.getTy()) - mat.getTy();
  this.FireZoomEvent(DvtZoomEvent.SUBTYPE_ADJUST_PAN_CONSTRAINTS, newZoom, oldZoom, animator, null, xx, yy, xDiff, yDiff);

  // shift the update matrix back into bounds again in case the zooming listener changes the pan constraints
  xDiff = this.ConstrainPanX(mat.getTx()) - mat.getTx();
  yDiff = this.ConstrainPanY(mat.getTy()) - mat.getTy();
  mat.translate(xDiff, yDiff);

  var thisRef = this;
  var fireStartEventFunc = function() {
    thisRef.FireZoomEvent(DvtZoomEvent.SUBTYPE_ZOOMING, newZoom, oldZoom, animator, null, xx, yy, xDiff, yDiff);
  };
  var fireEndEventFunc = function() {
    //use current zoom level at time of firing event as new zoom level
    //in event, because if continously scrolling the mouse wheel, each
    //zoom animation gets interrupted by the next one, so each event
    //doesn't actually zoom all the way to the desired scale until the
    //last event
    thisRef.FireZoomEvent(DvtZoomEvent.SUBTYPE_ZOOMED, thisRef.getZoom(), oldZoom, animator, null, xx, yy, xDiff, yDiff);
  };

  if (animator)
  {
    animator.addProp(DvtAnimator.TYPE_MATRIX,
                     this._contentPane,
                     this._contentPane.getMatrix,
                     this._contentPane.setMatrix,
                     mat);
    DvtPlayable.prependOnInit(animator, fireStartEventFunc);
    DvtPlayable.appendOnEnd(animator, fireEndEventFunc);
  }
  else
  {
    fireStartEventFunc();
    this._contentPane.setMatrix(mat);
    fireEndEventFunc();
  }
};


/**
  * Zoom to the given scale.
  * @param {number} zz new scale
  * @param {number} xx horizontal center of zoom (if not specified, treated as the horizontal center of the canvas)
  * @param {number} yy vertical center of zoom (if not specified, treated as the vertical center of the canvas)
  * @param {DvtAnimator} animator optional animator to use to animate the zoom
  */
DvtPanZoomCanvas.prototype.zoomTo = function(zz, xx, yy, animator)
{
  if (!this.isZoomingEnabled()) {
    return;
  }

  var dz = zz / this.getZoom(animator);
  this.zoomBy(dz, xx, yy, animator);
};


/**
  * Pan the content pane to be centered in the canvas.
  * @param {DvtAnimator} animator optional animator to use to animate the zoom-to-fit
  * @param {DvtRectangle} fitBounds optional bounds in content pane coordinate system to zoom-to-fit to
  */
DvtPanZoomCanvas.prototype.center = function(animator, fitBounds) {
  var panningEnabled = this.isPanningEnabled();
  this.setPanningEnabled(true);
  var bounds = fitBounds;
  if (!bounds)
    bounds = this._contentPane.getDimensions();

  var cxBounds = (bounds.x + bounds.w / 2) * this.getZoom();
  var cyBounds = (bounds.y + bounds.h / 2) * this.getZoom();
  var dx = (this._ww / 2) - cxBounds;
  var dy = (this._hh / 2) - cyBounds;
  this.panTo(dx, dy, animator);
  this.setPanningEnabled(panningEnabled);
};


/**
  * Zoom and pan the content pane to fit the canvas size.
  * @param {DvtAnimator} animator optional animator to use to animate the zoom-to-fit
  * @param {DvtRectangle} fitBounds optional bounds in content pane coordinate system to zoom-to-fit to
  */
DvtPanZoomCanvas.prototype.zoomToFit = function(animator, fitBounds)
{
  if (!this.isZoomToFitEnabled()) {
    return;
  }

  var panningEnabled = this.isPanningEnabled();
  var zoomingEnabled = this.isZoomingEnabled();
  this.setPanningEnabled(true);
  this.setZoomingEnabled(true);
  try {
    var bounds = fitBounds;
    if (!bounds) {
      bounds = this._contentPane.getDimensions();
    }

    var event = this.FireZoomEvent(DvtZoomEvent.SUBTYPE_ZOOM_TO_FIT_CALC_BOUNDS, null, null, animator, bounds);
    bounds = event.getZoomToFitBounds();

    var dzx = (this._ww - 2 * this._zoomToFitPadding) / (bounds.w);
    var dzy = (this._hh - 2 * this._zoomToFitPadding) / (bounds.h);
    var dz = Math.min(dzx, dzy);
    dz = this.ConstrainZoom(dz);

    var cxBounds = (bounds.x + bounds.w / 2) * dz;
    var cyBounds = (bounds.y + bounds.h / 2) * dz;
    var dx = (this._ww / 2) - cxBounds;
    var dy = (this._hh / 2) - cyBounds;

    var thisRef = this;
    var fireStartEventFunc = function() {
      thisRef.FireZoomEvent(DvtZoomEvent.SUBTYPE_ZOOM_TO_FIT_BEGIN, null, null, animator, bounds);
    };
    var fireEndEventFunc = function() {
      thisRef.FireZoomEvent(DvtZoomEvent.SUBTYPE_ZOOM_TO_FIT_END, null, null, animator, bounds);
    };

    if (!animator)
      fireStartEventFunc();
    else
      DvtPlayable.prependOnInit(animator, fireStartEventFunc);

    this.zoomTo(dz, 0, 0, animator);
    this.panTo(dx, dy, animator);

    if (animator) {
      DvtPlayable.appendOnEnd(animator, fireEndEventFunc);
    }
    else {
      fireEndEventFunc();
    }
  }
  finally {
    this.setPanningEnabled(panningEnabled);
    this.setZoomingEnabled(zoomingEnabled);
  }
};


/**
  * Calculate the zoom-to-fit scale.
  * @param {DvtRectangle} bounds optional bounds in content pane coordinate system to calculate zoom-to-fit scale to
  */
DvtPanZoomCanvas.prototype.calcZoomToFitScale = function(bounds)
{
  if (!bounds) {
    bounds = this._contentPane.getDimensions();
  }

  var event = this.FireZoomEvent(DvtZoomEvent.SUBTYPE_ZOOM_TO_FIT_CALC_BOUNDS, null, null, null, bounds);

  bounds = event.getZoomToFitBounds();

  var dzx = (this._ww - 2 * this._zoomToFitPadding) / (bounds.w);
  var dzy = (this._hh - 2 * this._zoomToFitPadding) / (bounds.h);
  var dz = Math.min(dzx, dzy);
  dz = this.ConstrainZoom(dz);

  return dz;
};


/**
  * Calculate the zoom-to-fit dimensions.
  */
DvtPanZoomCanvas.prototype.calcZoomToFitBounds = function()
{
  var bounds = this._contentPane.getDimensions();

  var event = this.FireZoomEvent(DvtZoomEvent.SUBTYPE_ZOOM_TO_FIT_CALC_BOUNDS, null, null, null, bounds);

  bounds = event.getZoomToFitBounds();

  bounds.x -= this._zoomToFitPadding;
  bounds.y -= this._zoomToFitPadding;
  bounds.w += 2 * this._zoomToFitPadding;
  bounds.h += 2 * this._zoomToFitPadding;

  return bounds;
};


/**
 * Get the current viewport in the coordinate system of the content pane.
 * @return  {DvtRectangle}  current viewport
 */
DvtPanZoomCanvas.prototype.getViewport = function()
{
  var topLeftGlobal = this.localToStage(new DvtPoint(0, 0));
  var bottomRightGlobal = this.localToStage(new DvtPoint(this._ww, this._hh));
  var topLeftLocal = this.getContentPane().stageToLocal(topLeftGlobal);
  var bottomRightLocal = this.getContentPane().stageToLocal(bottomRightGlobal);
  return new DvtRectangle(topLeftLocal.x, topLeftLocal.y,
                          bottomRightLocal.x - topLeftLocal.x,
                          bottomRightLocal.y - topLeftLocal.y);
};


/**
 * @protected
 * Set whether constraints should be elastic, with overflow and bounce back.
 */
DvtPanZoomCanvas.prototype.SetElasticConstraints = function(bElastic) {
  this._bElasticConstraints = bElastic;

  //if turning on, stop any previously running bounce back anim
  if (bElastic) {
    if (this._elasticConstraintsAnim) {
      if (this._elasticConstraintsAnim.isRunning()) {
        this._elasticConstraintsAnim.stop();
      }
      this._elasticConstraintsAnim = null;
    }
  }
  //if turning off, animate the bounce back to constraint values
  else {
    var currX = this.getPanX();
    var currY = this.getPanY();
    var currZoom = this.getZoom();
    this._bElasticPan = (currX != this.ConstrainPanX(currX) || currY != this.ConstrainPanY(currY));
    this._bElasticZoom = (currZoom != this.ConstrainZoom(currZoom));
    if (this._bElasticPan || this._bElasticZoom) {
      this._elasticConstraintsAnim = new DvtAnimator(this.getCtx(), .4);
      //do cubicOut easing so that the anim happens fast at the beginning and slows down at the end,
      //to make it seem like an elastic
      this._elasticConstraintsAnim.setEasing(DvtEasing.cubicOut);
      //if zoom beyond constraint, constrain it
      if (this._bElasticZoom) {
        this.zoomBy(1, .5 * this._ww, .5 * this._hh, this._elasticConstraintsAnim);
      }
      //if pan is beyond constraints, constrain it
      if (this._bElasticPan) {
        this.panBy(0, 0, this._elasticConstraintsAnim);
      }

      DvtPlayable.appendOnEnd(this._elasticConstraintsAnim, this._elasticConstraintsAnimOnEnd, this);
      if (this._bElasticPan)
        this.FirePanEvent(DvtPanEvent.SUBTYPE_ELASTIC_ANIM_BEGIN, null, null, null, null, this._elasticConstraintsAnim);
      if (this._bElasticZoom)
        this.FireZoomEvent(DvtZoomEvent.SUBTYPE_ELASTIC_ANIM_BEGIN, null, null, null, null, this._elasticConstraintsAnim);
      this._elasticConstraintsAnim.play();
    }
  }
};


/**
 * @protected
 * Determine whether constraints are elastic, with overflow and bounce back.
 */
DvtPanZoomCanvas.prototype.IsElasticConstraints = function() {
  return this._bElasticConstraints;
};


/**
 * @private
 */
DvtPanZoomCanvas.prototype._elasticConstraintsAnimOnEnd = function() {
  this._elasticConstraintsAnim = null;
  if (this._bElasticPan)
    this.FirePanEvent(DvtPanEvent.SUBTYPE_ELASTIC_ANIM_END);
  if (this._bElasticZoom)
    this.FireZoomEvent(DvtZoomEvent.SUBTYPE_ELASTIC_ANIM_END);
};


/**
 * @private
 * Damping function for elastic pan constraints.
 */
DvtPanZoomCanvas.prototype._panDampingFunc = function(delta, whole) {
  //parabola centered at (0,0) expanding to the right: y ^ 2 = 4 * a * x
  var a = .01 * whole;
  return Math.sqrt(4 * a * delta);
};


/**
 * @private
 * Damping function for elastic zoom constraints.
 */
DvtPanZoomCanvas.prototype._zoomDampingFunc = function(delta, whole) {
  //parabola centered at (0,0) expanding to the right: y ^ 2 = 4 * a * x
  var a = .002 * whole;
  return Math.sqrt(4 * a * delta);
};


/**
 * @protected
 * Constrain horizontal panning if needed
 * @param {number} xx new horizontal position
 * @return {number} adjusted horizontal position
 */
DvtPanZoomCanvas.prototype.ConstrainPanX = function(xx)
{
  var offsetX = xx;
  if (this._minPanX != null && offsetX < this._minPanX)
  {
    //if elastic constraints, damp the constraint overflow delta
    if (this.IsElasticConstraints()) {
      var dx = this._minPanX - offsetX;
      offsetX = this._minPanX - this._panDampingFunc(dx, this._ww);
    }
    else {
      offsetX = this._minPanX;
    }
  }
  if (this._maxPanX != null && offsetX > this._maxPanX)
  {
    //if elastic constraints, damp the constraint overflow delta
    if (this.IsElasticConstraints()) {
      var dx = offsetX - this._maxPanX;
      offsetX = this._maxPanX + this._panDampingFunc(dx, this._ww);
    }
    else {
      offsetX = this._maxPanX;
    }
  }
  return offsetX;
};


/**
 * @protected
 * Constrain vertical panning if needed
 * @param {number} xx new vertical position
 * @return {number} adjusted vertical position
 */
DvtPanZoomCanvas.prototype.ConstrainPanY = function(yy)
{
  var offsetY = yy;
  if (this._minPanY != null && offsetY < this._minPanY)
  {
    //if elastic constraints, damp the constraint overflow delta
    if (this.IsElasticConstraints()) {
      var dy = this._minPanY - offsetY;
      offsetY = this._minPanY - this._panDampingFunc(dy, this._hh);
    }
    else {
      offsetY = this._minPanY;
    }
  }
  if (this._maxPanY != null && offsetY > this._maxPanY)
  {
    //if elastic constraints, damp the constraint overflow delta
    if (this.IsElasticConstraints()) {
      var dy = offsetY - this._maxPanY;
      offsetY = this._maxPanY + this._panDampingFunc(dy, this._hh);
    }
    else {
      offsetY = this._maxPanY;
    }
  }
  return offsetY;
};


/**
 * Applies zoom constraints to the specified zoom level
 *
 * @param {number} zz the specified zoom level
 *
 * @return {number} the constrained zoom level
 * @protected
 */
DvtPanZoomCanvas.prototype.ConstrainZoom = function(zz)
{
  var newZ = Math.max(0, zz); // zoom can't be negative
  if (this._minZoom && newZ < this._minZoom)
  {
    //if elastic constraints, damp the constraint overflow delta
    if (this.IsElasticConstraints()) {
      var dz = this._minZoom - newZ;
      newZ = this._minZoom - this._zoomDampingFunc(dz, this._maxZoom - this._minZoom); //TO DO: what if no min/max?
    }
    else {
      newZ = this._minZoom;
    }
  }
  if (this._maxZoom && newZ > this._maxZoom)
  {
    //if elastic constraints, damp the constraint overflow delta
    if (this.IsElasticConstraints()) {
      var dz = newZ - this._maxZoom;
      newZ = this._maxZoom + this._zoomDampingFunc(dz, this._maxZoom - this._minZoom); //TO DO: what if no min/max?
    }
    else {
      newZ = this._maxZoom;
    }
  }
  return newZ;
};

DvtPanZoomCanvas.RoundFloatForCompare = function(n)
{
  return Math.round(n * 100000);
};

DvtPanZoomCanvas.prototype.renderComponent = function() {
  if (this._controlPanelState != DvtPanZoomCanvas.CONTROL_PANEL_BEHAVIOR_HIDDEN && !this._controlPanel) {

    this._controlPanel = new DvtPanZoomControlPanel(this.getCtx(), this, this._buttonImages, this._controlPanelResources, this._displayedControls, this._view);
    this.addChild(this._controlPanel);

    // set control panel state
    if (this._controlPanelState == DvtPanZoomCanvas.CONTROL_PANEL_BEHAVIOR_INIT_COLLAPSED)
      this._controlPanel.setState(DvtPanZoomControlPanel.STATE_COLLAPSED);
    else if (this._controlPanelState == DvtPanZoomCanvas.CONTROL_PANEL_BEHAVIOR_INIT_EXPANDED)
      this._controlPanel.setState(DvtPanZoomControlPanel.STATE_EXPANDED);

    this.PositionControlPanel();
    this._controlPanel.renderComponent();
  }
};

DvtPanZoomCanvas.prototype.setControlPanelState = function(state) {
  this._controlPanelState = state;
  if (this._controlPanelState == DvtPanZoomCanvas.CONTROL_PANEL_BEHAVIOR_HIDDEN)
    this.removeChild(this._controlPanel);
};

DvtPanZoomCanvas.prototype.setControlPanel = function(controlPanel) {
  if (this._controlPanel)
    this.removeChild(this._controlPanel);

  this._controlPanel = controlPanel;
  if (this._controlPanelState != DvtPanZoomCanvas.CONTROL_PANEL_BEHAVIOR_HIDDEN) {
    this.addChild(this._controlPanel);

    if (this._controlPanelState == DvtPanZoomCanvas.CONTROL_PANEL_BEHAVIOR_INIT_COLLAPSED)
      this._controlPanel.setState(DvtPanZoomControlPanel.STATE_COLLAPSED);
    else if (this._controlPanelState == DvtPanZoomCanvas.CONTROL_PANEL_BEHAVIOR_INIT_EXPANDED)
      this._controlPanel.setState(DvtPanZoomControlPanel.STATE_EXPANDED);

    this.PositionControlPanel();
  }
};

DvtPanZoomCanvas.prototype.getControlPanel = function() {
  return this._controlPanel;
};


/**
 * @protected
 * Positions Control panel in a component viewport
 */
DvtPanZoomCanvas.prototype.PositionControlPanel = function() {
  var styleMap = this._view.getControlPanelStyleMap();
  var posX = DvtStyleUtils.getStyle(styleMap, DvtPanZoomControlPanel.CP_PADDING_SIDE, 0);
  var posY = DvtStyleUtils.getStyle(styleMap, DvtPanZoomControlPanel.CP_PADDING_TOP, 0);

  var openCloseButtonWidth = DvtStyleUtils.getStyle(styleMap, DvtPanZoomControlPanel.CP_OPEN_CLOSE_BUTTON_WIDTH, 0);
  var transX;
  if (DvtAgent.isRightToLeft(this.getCtx())) {
    transX = this._ww - openCloseButtonWidth - posX;
  }
  else {
    transX = posX;
  }
  this._controlPanel.setTranslate(transX, posY);
};


/**
 * @protected
 * Get the position relative to the stage of the given mouse event.
 * @param {object} event mouse event
 * @return {DvtPoint}
 */
DvtPanZoomCanvas.prototype.GetRelativeMousePosition = function(event) {
  return this.getCtx().pageToStageCoords(event.pageX, event.pageY);
};


/**
 * @protected
 */
DvtPanZoomCanvas.prototype.FirePanEvent = function(subType, newX, newY, oldX, oldY, animator)
{
  var panEvent = new DvtPanEvent(subType, newX, newY, oldX, oldY, animator);
  this.FireListener(panEvent);
};


/**
 * Fires a DvtZoomEvent to listeners
 *
 * @param {string}  subType  subtype of the event
 * @param {number}  newZoom  new zoom factor
 * @param {number}  oldZoom  old zoom factor
 * @param {DvtAnimator}  animator  optional animator used to animate the zoom
 * @param {DvtRectangle}  zoomToFitBounds  bounds to use for zoom-to-fit
 * @param {number}  xx  horizontal center of zoom
 * @param {number}  yy  vertical center of zoom
 * @param {number}  tx  the horizontal translation applied after the zoom
 * @param {number}  ty  the vertical translation applied after the zoom
 * @protected
 */
DvtPanZoomCanvas.prototype.FireZoomEvent = function(subType, newZoom, oldZoom, animator, zoomToFitBounds, xx, yy, tx, ty)
{
  var zoomEvent = new DvtZoomEvent(subType, newZoom, oldZoom, animator, zoomToFitBounds, new DvtPoint(xx, yy), tx, ty);
  this.FireListener(zoomEvent);
  return zoomEvent;
};


DvtPanZoomCanvas.prototype.zoomAndCenter = function() {
  this.FireZoomEvent(DvtZoomEvent.SUBTYPE_ZOOM_AND_CENTER);
};


/**
 * Get the next incremental, increasing, zoom level.
 *
 * @param currZoom current zoom level
 *
 * @return next zoom level
 */
DvtPanZoomCanvas.prototype.getNextZoomLevel = function(currZoom) {
  var zoomLevel = currZoom;

  zoomLevel += this.getZoomIncrement();
  if (zoomLevel > this.getMaxZoom())
    zoomLevel = this.getMaxZoom();

  return zoomLevel;
};


/**
 * Get the previous incremental, decreasing, zoom level.
 *
 * @param currZoom current zoom level
 *
 * @return previous zoom level
 */
DvtPanZoomCanvas.prototype.getPrevZoomLevel = function(currZoom) {
  var zoomLevel = currZoom;

  zoomLevel -= this.getZoomIncrement();
  if (zoomLevel < this.getMinZoom())
    zoomLevel = this.getMinZoom();

  return zoomLevel;
};


/**
 * Set the increment to use for zooming.
 * The increment should be a percentage between 0 and 1.
 * The default is .05.
 *
 * @param n zoom increment
 */
DvtPanZoomCanvas.prototype.setZoomIncrement = function(n) {
  this._zoomIncrement = n;
};


/**
 * Get the increment to use for zooming.
 *
 * @return zoom increment
 */
DvtPanZoomCanvas.prototype.getZoomIncrement = function() {
  return this._zoomIncrement;
};


/**
 * Set the increment to use for panning.
 * The increment should be in pixels.
 * The default is 15.
 *
 * @param n pan increment
 */
DvtPanZoomCanvas.prototype.setPanIncrement = function(n) {
  this._panIncrement = n;
};


/**
 * Get the increment to use for panning.
 *
 * @return pan increment
 */
DvtPanZoomCanvas.prototype.getPanIncrement = function() {
  return this._panIncrement;
};


/**
 * Set the minimum zoom factor allowed.
 * The default is .1.
 *
 * @param n minimum zoom factor
 */
DvtPanZoomCanvas.prototype.setMinZoom = function(n) {
  this._minZoom = n;
};


/**
 * Get the minimum zoom factor allowed.
 *
 * @return minimum zoom factor
 */
DvtPanZoomCanvas.prototype.getMinZoom = function() {
  return this._minZoom;
};


/**
 * Set the maximum zoom factor allowed.
 *
 * @param n maximum zoom factor
 */
DvtPanZoomCanvas.prototype.setMaxZoom = function(n) {
  if (n < 0)
    n = 1;
  this._maxZoom = n;
};


/**
 * Get the maximum zoom factor allowed.
 *
 * @return maximum zoom factor
 */
DvtPanZoomCanvas.prototype.getMaxZoom = function() {
  return this._maxZoom;
};


/**
 * Set the minimum x coord allowed.
 * The default is NaN, meaning there is no minimum.
 *
 * @param n minimum x coord
 */
DvtPanZoomCanvas.prototype.setMinPanX = function(n) {
  this._minPanX = n;
};


/**
 * Get the minimum x coord allowed.
 *
 * @return minimum x coord
 */
DvtPanZoomCanvas.prototype.getMinPanX = function() {
  return this._minPanX;
};


/**
 * Set the maximum x coord allowed.
 * The default is NaN, meaning there is no maximum.
 *
 * @param n maximum x coord
 */
DvtPanZoomCanvas.prototype.setMaxPanX = function(n) {
  this._maxPanX = n;
};


/**
 * Get the maximum x coord allowed.
 *
 * @return maximum x coord
 */
DvtPanZoomCanvas.prototype.getMaxPanX = function() {
  return this._maxPanX;
};


/**
 * Set the minimum y coord allowed.
 * The default is NaN, meaning there is no minimum.
 *
 * @param n minimum y coord
 */
DvtPanZoomCanvas.prototype.setMinPanY = function(n) {
  this._minPanY = n;
};


/**
 * Get the minimum y coord allowed.
 *
 * @return minimum y coord
 */
DvtPanZoomCanvas.prototype.getMinPanY = function() {
  return this._minPanY;
};


/**
 * Set the maximum y coord allowed.
 * The default is NaN, meaning there is no maximum.
 *
 * @param n maximum y coord
 */
DvtPanZoomCanvas.prototype.setMaxPanY = function(n) {
  this._maxPanY = n;
};


/**
 * Get the maximum y coord allowed.
 *
 * @return maximum y coord
 */
DvtPanZoomCanvas.prototype.getMaxPanY = function() {
  return this._maxPanY;
};


/**
 * Set whether tilt panning is enabled.
 *
 * @param b true to enable tilt panning, false to disable it
 */
DvtPanZoomCanvas.prototype.setTiltPanningEnabled = function(b) {
  this._bTiltPanningEnabled = b;
};


/**
 * Determine whether tilt panning is enabled.
 *
 * @return true if tilt panning is enabled, false if disabled
 */
DvtPanZoomCanvas.prototype.isTiltPanningEnabled = function(b) {
  return this._bTiltPanningEnabled;
};


/**
 * Sets the animation duration (in seconds) for zoom interactions
 *
 * @param animationDuration the animation duration (in seconds)
 */
DvtPanZoomCanvas.prototype.setAnimationDuration = function(animationDuration) {
  this._animationDuration = animationDuration;
};


/**
 * Gets the animation duration (in seconds) for zoom interactions
 *
 * @return the animation duration (in seconds)
 */
DvtPanZoomCanvas.prototype.getAnimationDuration = function() {
  return this._animationDuration;
};

DvtPanZoomCanvas.prototype.setPanningEnabled = function(panningEnabled) {
  this._bPanningEnabled = panningEnabled;
};

DvtPanZoomCanvas.prototype.isPanningEnabled = function() {
  return this._bPanningEnabled;
};

DvtPanZoomCanvas.prototype.setZoomingEnabled = function(zoomingEnabled) {
  this._bZoomingEnabled = zoomingEnabled;
};

DvtPanZoomCanvas.prototype.isZoomingEnabled = function() {
  return this._bZoomingEnabled;
};

DvtPanZoomCanvas.prototype.setZoomToFitEnabled = function(zoomToFitEnabled) {
  this._bZoomToFitEnabled = zoomToFitEnabled;
};

DvtPanZoomCanvas.prototype.isZoomToFitEnabled = function() {
  return this._bZoomToFitEnabled;
};

DvtPanZoomCanvas.prototype.adjustZoomControls = function(next) {
  if (this._controlPanel) {
    var currZoom = this.getZoom();

    if (next == this.getMinZoom() && next == this.getMaxZoom()) {
      this._controlPanel.enableZoomInControl(false);
      this._controlPanel.enableZoomOutControl(false);
    }
    else if (currZoom <= next && next == this.getMaxZoom()) {
      this._controlPanel.enableZoomInControl(false);
      this._controlPanel.enableZoomOutControl(true);
    }
    else if (currZoom >= next && next == this.getMinZoom()) {
      this._controlPanel.enableZoomInControl(true);
      this._controlPanel.enableZoomOutControl(false);
    }
    else {
      this._controlPanel.enableZoomInControl(true);
      this._controlPanel.enableZoomOutControl(true);
    }
  }
};


/**
 * Stores current touch targets (for zoom events)
 * @param {array} targets an array of the current touch targets
 */
DvtPanZoomCanvas.prototype.setCurrentTouchTargets = function(targets) {
  this._currTargets = targets;
};


/**
 * Returns current touch targets (for zoom events)
 * @return {array} an array of the current touch targets
 */
DvtPanZoomCanvas.prototype.getCurrentTouchTargets = function() {
  return this._currTargets;
};
// Copyright (c) 2011, 2014, Oracle and/or its affiliates. All rights reserved.
/**
 * @constructor
 */
var DvtPanZoomCanvasEventManager = function(context, callback, callbackObj) {
  this.Init(context, callback, callbackObj);
};

DvtObj.createSubclass(DvtPanZoomCanvasEventManager, DvtEventManager, 'DvtPanZoomCanvasEventManager');

DvtPanZoomCanvasEventManager.prototype.Init = function(context, callback, callbackObj) {
  DvtPanZoomCanvasEventManager.superclass.Init.call(this, context, callback, callbackObj);
  this._pzc = callbackObj;
  this._zoomAnimator = null;
  this._bPanning = false;
  this._bZooming = false;
  //momentum-based panning (turned on for both touch and desktop)
  this._bMomentumPanning = true;//DvtAgent.isTouchDevice();
};

DvtPanZoomCanvasEventManager.PAN_TOUCH_KEY = 'panTouch';
DvtPanZoomCanvasEventManager.ZOOM_TOUCH_KEY = 'zoomTouch';

DvtPanZoomCanvasEventManager._MOMENTUM_START_TIMER_INTERVAL = 50;


/**
 * @override
 */
DvtPanZoomCanvasEventManager.prototype.addListeners = function(displayable) {
  DvtPanZoomCanvasEventManager.superclass.addListeners.call(this, displayable);
  if (DvtAgent.isPlatformGecko())//Firefox
    displayable.addEvtListener('DOMMouseScroll', this.OnMouseWheel, false, this);
  else
    displayable.addEvtListener(DvtMouseEvent.MOUSEWHEEL, this.OnMouseWheel, false, this);
};


/**
 * @override
 */
DvtPanZoomCanvasEventManager.prototype.OnMouseDown = function(event) {
  if (event.button != DvtMouseEvent.RIGHT_CLICK_BUTTON) {
    var pos = this._callbackObj.GetRelativeMousePosition(event);
    this._mx = pos.x;
    this._my = pos.y;
    this._px = this._mx;
    this._py = this._my;
    this._bDown = true;

    //for elastic constraints, save the original values
    this._origPanX = this._callbackObj.getPanX();
    this._origPanY = this._callbackObj.getPanY();
    this._origZoom = this._callbackObj.getZoom();

    if (this._bMomentumPanning) {
      //save current time for momentum-based panning
      this._currTime = new Date().getTime();
    }
  }
  //if momentum panning was running, stop it
  if (this._momentumTimer && this._momentumTimer.isRunning()) {
    this._momentumTimer.stop();
    this._momentumTimer.reset();
  }
};


/**
 * @override
 */
DvtPanZoomCanvasEventManager.prototype.OnMouseMove = function(event) {
  if (this._bDown) {
    var pos = this._callbackObj.GetRelativeMousePosition(event);
    var xx = pos.x;
    var yy = pos.y;

    if (event.ctrlKey) {
      if (!this._bZooming) {
        this._callback.call(this._callbackObj, new DvtZoomEvent(DvtZoomEvent.SUBTYPE_DRAG_ZOOM_BEGIN));
        this._bZooming = true;
        if (this._pzc.getControlPanel()) {
          this._pzc.getControlPanel().mouseDragPanningStarted();
        }
        //turn on elastic constraints for the duration of this drag
        this._callbackObj.SetElasticConstraints(true);
      }
      //for elastic constraints, use a zoomTo so that the delta is relative to the mouseDown point,
      //resulting in more consistent values and smoother elastic animation
      //var dz = 1 + (this._my - yy) / 100;
      //to emulate the behavior from the line above, which scaled by 1% for each pixel, need to
      //take that 1% with the correct sign and raise it to the power of the total number of pixels moved
      var sign = (this._py >= yy) ? 1 : -1;
      var zz = this._origZoom * Math.pow(1 + sign * .01, Math.abs(this._py - yy));
      if (!this._callbackObj.isPanningEnabled()) {
        //this._callbackObj.zoomBy(dz, null, null);
        this._callbackObj.zoomTo(zz, null, null);
      }
      else {
        //this._callbackObj.zoomBy(dz, this._px, this._py);
        this._callbackObj.zoomTo(zz, this._px, this._py);
      }
    }
    else {
      this._handlePanMove(xx, yy);
    }

    this._mx = xx;
    this._my = yy;
  }
};


/**
 * @override
 */
DvtPanZoomCanvasEventManager.prototype.OnMouseUp = function(event) {
  this._bDown = false;

  if (this._bPanning) {
    this._handlePanEnd();
  }
  if (this._bZooming) {
    this._handleZoomEnd();
  }
};


/**
 * @override
 */
DvtPanZoomCanvasEventManager.prototype.OnMouseOut = function(event) {
  // simulate mouse up event if needed
  if (this._bDown && (this._bPanning || this._bZooming)) {
    if (!event.relatedTarget || event.relatedTarget == null) {
      this.OnMouseUp(event);
    }
  }

  DvtPanZoomCanvasEventManager.superclass.OnMouseOut.call(this, event);
};

DvtPanZoomCanvasEventManager.prototype.OnMouseWheel = function(event) {
  var currZoom = this._callbackObj.getZoom();
  //TODO: re-enable animation after fixing how it works in conjunction with overview window
  var animator = null;//new DvtAnimator(this.getCtx(), this.getAnimationDuration());
  //if there is already a zoom animator running, clean it up
  if (this._zoomAnimator) {
    var oldZoomAnim = this._zoomAnimator;
    //stop the old animator
    this._zoomAnimator.stop();
    //get the destination zoom level of the old animator so that we can add to it
    currZoom = this._callbackObj.getZoom(oldZoomAnim);
    this._zoomAnimator = null;
    oldZoomAnim = null;

    //change the easing function so that it's fast at the start to
    //blend in more seamlessly with the animation we just stopped
    //partway through
    if (animator) {
      animator.setEasing(DvtEasing.cubicOut);
    }
  }
  this._zoomAnimator = animator;

  var delta = 0;
  if (event.wheelDelta != null) {
    delta = event.wheelDelta;

    //reverse the sign of the delta in Firefox so that mouse wheel up zooms in and mouse wheel down zooms out
    if (DvtAgent.isPlatformGecko()) {
      delta = -delta;
    }
  }

  //FIX BUG 17184701: divide by the absolute value of the delta so that the zoom only changes by the increment,
  //just like in native Flash
  var zz = currZoom * (1 + this._callbackObj.getZoomIncrement() * delta / Math.abs(delta));
  var pos = this._callbackObj.GetRelativeMousePosition(event);

  //cancel the mouse wheel event so that the browser doesn't scroll the page
  var docUtils = this.getCtx().getDocumentUtils();
  docUtils.cancelDomEvent(event);

  //elastic constraints don't work right for mouse wheel zooming
  //(cause errors when zooming out in zooming.jspx Diagram demo page)
  //this._callbackObj.SetElasticConstraints(true);
  if (!this._callbackObj.isPanningEnabled()) {
    this._callbackObj.zoomTo(zz, null, null, this._zoomAnimator);
  }
  else {
    this._callbackObj.zoomTo(zz, pos.x, pos.y, this._zoomAnimator);
  }
  //this._callbackObj.SetElasticConstraints(false);

  if (this._zoomAnimator) {
    DvtPlayable.appendOnEnd(this._zoomAnimator, this._clearZoomAnimator, this);
    this._zoomAnimator.play();
  }
};

DvtPanZoomCanvasEventManager.prototype._clearZoomAnimator = function() {
  this._zoomAnimator = null;
};

DvtPanZoomCanvasEventManager.prototype._handleMomentumStartTimer = function() {
  //do nothing
};

DvtPanZoomCanvasEventManager.prototype._handleMomentumTimer = function() {
  //percent to slow down momentum each iteration
  var fraction = .04;//.02;
  //quadratic damping function
  var ratio = 1 - fraction * this._momentumIterCount;
  ratio *= ratio;
  var interval = this._momentumTimer.getInterval();//DvtPanZoomCanvasEventManager._MOMENTUM_START_TIMER_INTERVAL;
  //deltas to pan by for this iteration
  var dx = ratio * this._momentumXperMS * interval;
  var dy = ratio * this._momentumYperMS * interval;
  //add deltas to accumulated values
  this._momentumDx += dx;
  this._momentumDy += dy;
  //add accumulated deltas to the last drag pan position
  var newX = this._origPanX + this._mx - this._px + this._momentumDx;
  var newY = this._origPanY + this._my - this._py + this._momentumDy;
  this._callbackObj.panTo(newX, newY);
  var bStop = false;
  //stop just before ratio goes to 0
  if (this._momentumIterCount >= (1 / fraction) - 1) {
    bStop = true;
  }
  else {
    //stop if we've hit elastic constraints
    var currX = this._callbackObj.getPanX();
    var currY = this._callbackObj.getPanY();
    //if the difference between the desired and actual pan positions is greater than the delta for this timer
    //iteration, we must be hitting the elastic constraints, so stop iterating
    if (Math.abs(currX - newX) > Math.abs(dx) || Math.abs(currY - newY) > Math.abs(dy)) {
      bStop = true;
    }
  }

  if (bStop) {
    this._momentumTimer.stop();
    this._momentumTimer.reset();
    //turn off elastic constraints when momentum stops
    this._callbackObj.SetElasticConstraints(false);
  }
  else {
    this._momentumIterCount++;
  }
};


/**
 * @override
 */
DvtPanZoomCanvasEventManager.prototype.HandleImmediateTouchStartInternal = function(event) {
  if (this._callbackObj.isZoomingEnabled())
    this.TouchManager.processAssociatedTouchAttempt(event, DvtPanZoomCanvasEventManager.ZOOM_TOUCH_KEY, this.ZoomStartTouch, this);

  if (this._callbackObj.isPanningEnabled())
    this.TouchManager.processAssociatedTouchAttempt(event, DvtPanZoomCanvasEventManager.PAN_TOUCH_KEY, this.PanStartTouch, this);
};


/**
 * @override
 */
DvtPanZoomCanvasEventManager.prototype.HandleImmediateTouchMoveInternal = function(event) {
  if (this._callbackObj.isZoomingEnabled())
    this.TouchManager.processAssociatedTouchMove(event, DvtPanZoomCanvasEventManager.ZOOM_TOUCH_KEY);

  if (this._callbackObj.isPanningEnabled())
    this.TouchManager.processAssociatedTouchMove(event, DvtPanZoomCanvasEventManager.PAN_TOUCH_KEY);

  if (event)
    event.preventDefault();
};


/**
 * @override
 */
DvtPanZoomCanvasEventManager.prototype.HandleImmediateTouchEndInternal = function(event) {
  if (this._callbackObj.isZoomingEnabled())
    this.TouchManager.processAssociatedTouchEnd(event, DvtPanZoomCanvasEventManager.ZOOM_TOUCH_KEY);

  if (this._callbackObj.isPanningEnabled())
    this.TouchManager.processAssociatedTouchEnd(event, DvtPanZoomCanvasEventManager.PAN_TOUCH_KEY);
};


/**
 * Handles zoom start for touch device
 * @protected
 * @param {DvtTouchEvent} event Touch event to handle
 * @touch {DvtTouch} touch Touch object for the event
 */
DvtPanZoomCanvasEventManager.prototype.ZoomStartTouch = function(event, touch) {
  var touchIds = this.TouchManager.getTouchIdsForObj(DvtPanZoomCanvasEventManager.ZOOM_TOUCH_KEY);
  if (touchIds.length <= 1) {
    this.TouchManager.saveProcessedTouch(touch.identifier, DvtPanZoomCanvasEventManager.ZOOM_TOUCH_KEY, null, DvtPanZoomCanvasEventManager.ZOOM_TOUCH_KEY, DvtPanZoomCanvasEventManager.ZOOM_TOUCH_KEY, this.ZoomMoveTouch, this.ZoomEndTouch, this);
    this._mx = touch.pageX;
    this._my = touch.pageY;
    this._px = this._mx;
    this._py = this._my;

    //for elastic constraints, save the original values
    this._origPanX = this._callbackObj.getPanX();
    this._origPanY = this._callbackObj.getPanY();
    this._origZoom = this._callbackObj.getZoom();

    //FIX BUG 17185041: save the original finger distance
    this._origDist = null;
    touchIds = this.TouchManager.getTouchIdsForObj(DvtPanZoomCanvasEventManager.ZOOM_TOUCH_KEY);
    this._callbackObj.setCurrentTouchTargets(this.TouchManager.getStartTargetsByIds(touchIds));
  }

  //if momentum panning was running, stop it
  if (this._momentumTimer && this._momentumTimer.isRunning()) {
    this._momentumTimer.stop();
    this._momentumTimer.reset();
  }
};


/**
 * Handles zoom move for touch device
 * @protected
 * @param {DvtTouchEvent} event Touch event to handle
 * @touch {DvtTouch} touch Touch object for the event
 */
DvtPanZoomCanvasEventManager.prototype.ZoomMoveTouch = function(event, touch) {
  var touchIds = this.TouchManager.getTouchIdsForObj(DvtPanZoomCanvasEventManager.ZOOM_TOUCH_KEY);
  if (touchIds.length == 2) {
    var data = this.TouchManager.getMultiTouchData(touchIds);
    if (data) {
      // set a flag so we won't try to pan while zooming
      if (!this._bZooming) {
        this._bZooming = true;
        this.TouchManager.blockTouchHold();
        this._callback.call(this._callbackObj, new DvtZoomEvent(DvtZoomEvent.SUBTYPE_DRAG_ZOOM_BEGIN));

        if (this._pzc.getControlPanel())
          this._pzc.getControlPanel().mouseDragPanningStarted();
      }
      //turn on elastic constraints for the duration of this drag
      this._callbackObj.SetElasticConstraints(true);

      //FIX BUG 17185041:
      //the original distance should be the current distance minus the current delta distance
      if (this._origDist == null) {
        this._origDist = data.dist - data.dz;
      }
      //the new zoom should be the original zoom multiplied by the ratio of current finger distance to original
      //finger distance (e.g. if you move your fingers twice as far apart as they originally were, the view should
      //zoom by a factor of 2)
      var zz = this._origZoom * (data.dist / this._origDist);
      //the center point of the zoom needs to be converted to stage-relative coords
      var cp = this._pzc.getCtx().pageToStageCoords(data.cx, data.cy);

      this.hideTooltip();
      this._callbackObj.setCurrentTouchTargets(this.TouchManager.getStartTargetsByIds(touchIds));
      this._callbackObj.zoomTo(zz, cp.x, cp.y);
      //the center point delta is in page coords, which should be okay for panning
      this._callbackObj.panBy(data.dcx, data.dcy);
    }
  }

};


/**
 * Handles zoom end for touch device
 * @protected
 * @param {DvtTouchEvent} event Touch event to handle
 * @touch {DvtTouch} touch Touch object for the event
 */
DvtPanZoomCanvasEventManager.prototype.ZoomEndTouch = function(event, touch) {
  if (this._bZooming) {
    //FIX BUG 17185041: clear the original finger distance
    this._origDist = null;
    this.TouchManager.unblockTouchHold();
    this._handleZoomEnd();
  }
  var touchIds = this.TouchManager.getTouchIdsForObj(DvtPanZoomCanvasEventManager.ZOOM_TOUCH_KEY);
  this._callbackObj.setCurrentTouchTargets(this.TouchManager.getStartTargetsByIds(touchIds));
  if (touchIds.length == 0)
    this._callback.call(this._callbackObj, new DvtZoomEvent(DvtZoomEvent.SUBTYPE_ZOOM_END));
};

DvtPanZoomCanvasEventManager.prototype.PanStartTouch = function(event, touch) {
  if (!this._bZooming) {
    var touchIds = this.TouchManager.getTouchIdsForObj(DvtPanZoomCanvasEventManager.PAN_TOUCH_KEY);
    if (touchIds.length <= 1) {
      this.TouchManager.saveProcessedTouch(touch.identifier, DvtPanZoomCanvasEventManager.PAN_TOUCH_KEY, null, DvtPanZoomCanvasEventManager.PAN_TOUCH_KEY, DvtPanZoomCanvasEventManager.PAN_TOUCH_KEY, this.PanMoveTouch, this.PanEndTouch, this);
      this._mx = touch.pageX;
      this._my = touch.pageY;
      this._px = this._mx;
      this._py = this._my;

      //for elastic constraints, save the original values
      this._origPanX = this._callbackObj.getPanX();
      this._origPanY = this._callbackObj.getPanY();
      this._origZoom = this._callbackObj.getZoom();

      if (this._bMomentumPanning) {
        //save current time for momentum-based panning
        this._currTime = new Date().getTime();
      }
    }
  }
  //if momentum panning was running, stop it
  if (this._momentumTimer && this._momentumTimer.isRunning()) {
    this._momentumTimer.stop();
    this._momentumTimer.reset();
  }
};

DvtPanZoomCanvasEventManager.prototype.PanMoveTouch = function(event, touch) {
  if (!this._bZooming) {
    var touchIds = this.TouchManager.getTouchIdsForObj(DvtPanZoomCanvasEventManager.PAN_TOUCH_KEY);
    if (touchIds.length == 1) {
      var xx = touch.pageX;
      var yy = touch.pageY;
      this._handlePanMove(xx, yy);
      this._mx = xx;
      this._my = yy;
    }
  }
};

DvtPanZoomCanvasEventManager.prototype.PanEndTouch = function(event, touch) {
  if (!this._bZooming && this._bPanning) {
    this._handlePanEnd();
  }
};

DvtPanZoomCanvasEventManager.prototype._handleZoomEnd = function() {
  this._callback.call(this._callbackObj, new DvtZoomEvent(DvtZoomEvent.SUBTYPE_DRAG_ZOOM_END));
  this._bZooming = false;
  if (this._pzc.getControlPanel())
    this._pzc.getControlPanel().mouseDragPanningEnded();

  //turn off elastic constraints, which will animate a bounce back to constrained values, if necessary
  this._callbackObj.SetElasticConstraints(false);
};

DvtPanZoomCanvasEventManager.prototype._handlePanMove = function(xx, yy) {
  if (!this._bPanning) {
    this._callback.call(this._callbackObj, new DvtPanEvent(DvtPanEvent.SUBTYPE_DRAG_PAN_BEGIN));
    this._bPanning = true;
    if (this._pzc.getControlPanel()) {
      this._pzc.getControlPanel().mouseDragPanningStarted();
    }
    //turn on elastic constraints for the duration of this drag
    this._callbackObj.SetElasticConstraints(true);

    if (this._bMomentumPanning) {
      //keep track of last N mouse moves for momentum-based panning
      this._arLastNMouseMoves = [];
    }
  }

  //for elastic constraints, use a panTo so that the delta is relative to the mouseDown point,
  //resulting in more consistent values and smoother elastic animation
  //this._callbackObj.panBy(xx - this._mx, yy - this._my);
  this._callbackObj.panTo(this._origPanX + xx - this._px, this._origPanY + yy - this._py);

  if (this._bMomentumPanning) {
    //get new timestamp for momentum-based panning
    this._lastTime = this._currTime;
    this._currTime = new Date().getTime();

    //create or reset the timer to determine if we should start momentum-based panning
    if (this._momentumStartTimer) {
      if (this._momentumStartTimer.isRunning()) {
        this._momentumStartTimer.stop();
      }
      this._momentumStartTimer.reset();
    }
    else {
      this._momentumStartTimer = new DvtTimer(this._context, DvtPanZoomCanvasEventManager._MOMENTUM_START_TIMER_INTERVAL, this._handleMomentumStartTimer, this, 1);
    }
    //save the info for this mouse move
    this._arLastNMouseMoves.push({dt: (this._currTime - this._lastTime), dx: (xx - this._mx), dy: (yy - this._my)});
    //only save last N moves, so drop the oldest
    if (this._arLastNMouseMoves.length > 5) {
      this._arLastNMouseMoves.splice(0, 1);
    }
    //start the timer to indicate if we should start momentum-based panning;
    //if the timer expires, we won't do momentum-based panning, if the timer hasn't expired when the
    //mouseup occurs, then we'll start momentum-based panning
    this._momentumStartTimer.start();
  }
};


/**
 * Helper function called on mouseup or touchend events. Handles end of panning movement.
 */
DvtPanZoomCanvasEventManager.prototype._handlePanEnd = function() {
  this._callback.call(this._callbackObj, new DvtPanEvent(DvtPanEvent.SUBTYPE_DRAG_PAN_END));
  this._bPanning = false;
  if (this._pzc.getControlPanel()) {
    this._pzc.getControlPanel().mouseDragPanningEnded();
  }
  //if the momentum-based panning start timer is still running, that means that the mouseup happened
  //very quickly after the last mouse move, so we want to start momentum-based panning
  if (this._momentumStartTimer && this._momentumStartTimer.isRunning()) {
    this._momentumStartTimer.stop();
    this._momentumStartTimer.reset();
    //create or reset the momentum panning timer
    if (!this._momentumTimer) {
      //initialize with start timer interval, but it will later be changed based on mousemove event intervals
      this._momentumTimer = new DvtTimer(this._context, DvtPanZoomCanvasEventManager._MOMENTUM_START_TIMER_INTERVAL, this._handleMomentumTimer, this);
    }
    else {
      this._momentumTimer.reset();
    }

    //use the last N mousemoves to average the x,y deltas per ms
    var dt = 0;
    var dx = 0;
    var dy = 0;
    var numMoves = this._arLastNMouseMoves.length;
    while (this._arLastNMouseMoves.length > 0) {
      var objMove = this._arLastNMouseMoves.pop();
      dt += objMove.dt;
      dx += objMove.dx;
      dy += objMove.dy;
    }
    this._arLastNMouseMoves = null;
    this._momentumXperMS = dx / dt;
    this._momentumYperMS = dy / dt;
    //use timer interval similar to mousemove interval
    this._momentumTimer.setInterval(Math.ceil(dt / numMoves));
    this._momentumIterCount = 1;
    this._momentumDx = 0;
    this._momentumDy = 0;
    //We disable and enable panning on DnD operations. The check should prevent momentum panning when panning is temporary disabled
    if (this._pzc.isPanningEnabled())
      this._momentumTimer.start();
  }
  else {
    //turn off elastic constraints, which will animate a bounce back to constrained values, if necessary
    this._callbackObj.SetElasticConstraints(false);
  }
};
/**
 *  @param {DvtEventManager} manager The owning DvtEventManager
 *  @class DvtPanZoomCanvasKeyboardHandler
 *  @extends {DvtKeyboardHandler}
 *  @constructor
 */
var DvtPanZoomCanvasKeyboardHandler = function(component, manager) {
  this.Init(component, manager);
};

DvtObj.createSubclass(DvtPanZoomCanvasKeyboardHandler, DvtKeyboardHandler, 'DvtPanZoomCanvasKeyboardHandler');


/**
 * @override
 */
DvtPanZoomCanvasKeyboardHandler.prototype.Init = function(component, manager) {
  DvtPanZoomCanvasKeyboardHandler.superclass.Init(manager);
  this._component = component;
};


/**
 * @override
 */
DvtPanZoomCanvasKeyboardHandler.prototype.processKeyDown = function(event) {
  var keyCode = event.keyCode;
  var canvas = this._component.getPanZoomCanvas();
  if (keyCode == DvtKeyboardEvent.PAGE_UP) {
    //TODO handle BiDi panning left/right
    if (event.ctrlKey || event.shiftKey)
      canvas.panBy(canvas.getPanIncrement(), 0);
    else
      canvas.panBy(0, canvas.getPanIncrement());
  }
  else if (keyCode == DvtKeyboardEvent.PAGE_DOWN) {
    if (event.ctrlKey || event.shiftKey)
      canvas.panBy(-canvas.getPanIncrement(), 0);
    else
      canvas.panBy(0, -canvas.getPanIncrement());
  }
  else if (keyCode == DvtKeyboardEvent.FORWARD_SLASH) {
    var controlPanel = canvas.getControlPanel();
    if (controlPanel)
      controlPanel.toggleExpandCollapse();
  }
  else if (DvtKeyboardEvent.isEquals(event) || DvtKeyboardEvent.isPlus(event)) {
    canvas.zoomTo(canvas.getZoom() + canvas.getZoomIncrement());
  }
  else if (DvtKeyboardEvent.isMinus(event) || DvtKeyboardEvent.isUnderscore(event)) {
    canvas.zoomTo(canvas.getZoom() - canvas.getZoomIncrement());
  }
  else if ((keyCode == DvtKeyboardEvent.ZERO || keyCode == DvtKeyboardEvent.NUMPAD_ZERO) && !event.ctrlKey && !event.shiftKey) {
    canvas.zoomToFit();
  }
  else {
    return DvtPanZoomCanvasKeyboardHandler.superclass.processKeyDown.call(this, event);
  }
};
// Copyright (c) 2008, 2014, Oracle and/or its affiliates. All rights reserved.
/**
 *  Creates a DvtCollapsiblePanel
 *  @class DvtCollapsiblePanel
 *  @extends {DvtContainer}
 *  @constructor
 *  @param {DvtContext} context The context object
 *  @param {id} The id of the CollapsiblePanel
 *  @param {x} The leftmost position of the CollapsiblePanel
 *  @param {y} The topmost position of the CollapsiblePanel
 */
var DvtCollapsiblePanel = function(context, maxWidth, maxHeight, collapseDir, buttonImages, styleMap, disclosed, isFixed) {
  this.Init(context, maxWidth, maxHeight, collapseDir, buttonImages, styleMap, disclosed, isFixed);
};

DvtCollapsiblePanel.COLLAPSE_NORTHEAST = 'col_northeast';
DvtCollapsiblePanel.COLLAPSE_SOUTHEAST = 'col_southeast';
DvtCollapsiblePanel.COLLAPSE_NORTHWEST = 'col_northwest';
DvtCollapsiblePanel.COLLAPSE_SOUTHWEST = 'col_southwest';

DvtCollapsiblePanel.ANIMATIONDURATION = 0.25;

DvtCollapsiblePanel.BODYCOLOR = '#EBEFF5';
DvtCollapsiblePanel.TITLEBARCLOSEICON_WIDTH = 10;
DvtCollapsiblePanel.TITLEBARCLOSEICON_HEIGHT = 10;
DvtCollapsiblePanel.BUTTONHEIGHT = 25;

DvtCollapsiblePanel._CONTENT_PADDING = 5;
DvtCollapsiblePanel._SCROLLBAR_CONTENT_PADDING = 3;

DvtObj.createSubclass(DvtCollapsiblePanel, DvtContainer, 'DvtCollapsiblePanel');


/**
 * Initialization method called by the constructor
 *
 * @param {DvtContext} context Platform specific context object
 * @param {number} maxWidth The maximum width of the collapsible panel
 * @param {number} maxHeight The maximum height of the collapsible panel
 * @param {string} collapseDir Collapse direction
 * @param {DvtXmlNode} buttonImages The map of button images
 * @param {object} styleMap The object containing style specifications for this component
 * @param {boolean} disclosed Flag that indicates whether the panel is disclosed
 * @param {boolean} isFixed Flag that indicates whether the panel is collapsible
 * @protected
 */
DvtCollapsiblePanel.prototype.Init = function(context, maxWidth, maxHeight, collapseDir, buttonImages, styleMap, disclosed, isFixed) {
  DvtCollapsiblePanel.superclass.Init.call(this, context);

  this._maxWidth = maxWidth;
  this._maxHeight = maxHeight;

  this.setCollapseDirection(collapseDir);
  this._buttonImages = buttonImages;
  this._isFixed = isFixed ? isFixed : DvtAgent.isEnvironmentBatik();
  this._expandTooltip = null;
  this._collapseTooltip = null;
  this._animation = null;

  this._styleMap = styleMap;
  this._borderColor = DvtStyleUtils.getStyle(this._styleMap, DvtCSSStyle.BORDER_COLOR, null);
  this._borderRadius = parseInt(DvtStyleUtils.getStyle(this._styleMap, DvtCSSStyle.BORDER_RADIUS, null));
  this._bgColor = DvtStyleUtils.getStyle(this._styleMap, DvtCSSStyle.BACKGROUND_COLOR, null);
  this._bgAlpha = DvtStyleUtils.getStyle(this._styleMap, DvtPanZoomControlPanel.BG_ALPHA, 1);

  if (disclosed !== undefined)
    this._collapse = !disclosed;
  else
    this._collapse = false;

  var scrollMaxWidth = maxWidth - 2 * DvtCollapsiblePanel._CONTENT_PADDING;
  var scrollMaxHeight = maxHeight - 2 * DvtCollapsiblePanel._CONTENT_PADDING;
  this._scrollableContainer = new DvtScrollableContainer(context, 0, 0, scrollMaxWidth, scrollMaxHeight,
      DvtCollapsiblePanel._SCROLLBAR_CONTENT_PADDING, 'collapsiblePanel');
  this.addChild(this._scrollableContainer);
  this._scrollableContainer.setHorizontalScrollingEnabled(false);
  this._scrollableContainer.setTranslate(DvtCollapsiblePanel._CONTENT_PADDING, DvtCollapsiblePanel._CONTENT_PADDING);

  this.addEvtListener(DvtMouseEvent.MOUSEOVER, this.HandleMouseOver, false, this);
  this.addEvtListener(DvtMouseEvent.MOUSEOUT, this.HandleMouseOut, false, this);
};


/**
 * @private
 * Creates collapse/expand button
 */
DvtCollapsiblePanel.prototype._drawButton = function() {
  // only draw collapse/expand button if not in print or fixed mode
  if (!this._isFixed) {
    this._buttonFrame = DvtPanZoomControlPanelLAFUtils.createEmptyViewClosedFrame(this.getCtx(), DvtCollapsiblePanel.BUTTONHEIGHT, this._styleMap, false);
    this._buttonFrame.setAlpha(this._styleMap[DvtPanZoomControlPanel.FRAME_ROLLOUT_ALPHA]);
    this.addChild(this._buttonFrame);
    if (this.isCollapsed())
      this._collapseExpandButton = DvtButtonLAFUtils.createExpandButton(this.getCtx(), this._buttonImages, DvtCollapsiblePanel.BUTTONHEIGHT, this._styleMap, false);
    else
      this._collapseExpandButton = DvtButtonLAFUtils.createCollapseButton(this.getCtx(), this._buttonImages, DvtCollapsiblePanel.BUTTONHEIGHT, this._styleMap, false);
    this._buttonFrame.addChild(this._collapseExpandButton);

    var west = this._collapseDir == DvtCollapsiblePanel.COLLAPSE_NORTHWEST || this._collapseDir == DvtCollapsiblePanel.COLLAPSE_SOUTHWEST;
    if (!west) {
      this._buttonFrame.setTranslateY(DvtCollapsiblePanel.BUTTONHEIGHT);
      this._buttonFrame.setRotation(-Math.PI);
    }

    if (DvtAgent.isRightToLeft(this.getCtx()))
      this._buttonFrame.setTranslateX(this._width);

    if (DvtAgent.isTouchDevice()) {
      this._collapseExpandButton.addEvtListener(DvtTouchEvent.TOUCHSTART, this.OnButtonClick, false, this);
    } else {
      this._collapseExpandButton.addEvtListener(DvtMouseEvent.CLICK, this.OnButtonClick, false, this);
      this._collapseExpandButton.addEvtListener(DvtMouseEvent.MOUSEOVER, this.OnButtonHoverOver, false, this);
      this._collapseExpandButton.addEvtListener(DvtMouseEvent.MOUSEOUT, this.OnButtonHoverOut, false, this);
    }
  }
};

DvtCollapsiblePanel.prototype.setBackgroundFill = function(fill) {
  this._background.setFill(fill);
};

DvtCollapsiblePanel.prototype.setBackgroundStroke = function(stroke) {
  this._background.setStroke(stroke);
};

DvtCollapsiblePanel.prototype.setButtonTooltips = function(expand, collapse) {
  this._expandTooltip = expand;
  this._collapseTooltip = collapse;
};

DvtCollapsiblePanel.prototype.addContent = function(object) {
  this._scrollableContainer.addChild(object);
  object.addEvtListener(DvtResizeEvent.RESIZE_EVENT, this.HandleResize, false, this);

  var dims = this._scrollableContainer.getDimensions();
  var width = dims.w + 2 * DvtCollapsiblePanel._CONTENT_PADDING;
  var height = dims.h + 2 * DvtCollapsiblePanel._CONTENT_PADDING;
  this._height = height;
  this._width = width;

  if (!this._background) {
    this._background = this._createRoundRectangle(width, height);
    this.addChildAt(this._background, 0);
    this._drawButton();
  //    if(this._shadow)
  //      this.addDrawEffect(this._shadow);
  } else {
    this._background.setCmds(this._getOutlinePath(width, height));
    var west = this._collapseDir == DvtCollapsiblePanel.COLLAPSE_NORTHWEST || this._collapseDir == DvtCollapsiblePanel.COLLAPSE_SOUTHWEST;
    if (this._buttonFrame && west)
      this._buttonFrame.setTranslateX(this._width);
  }

  if (this._collapse) {
    this._collapseExpand(false);
  }
};

DvtCollapsiblePanel.prototype.HandleResize = function(event) {
  this._scrollableContainer.refresh();

  var dims = this._scrollableContainer.getDimensions();
  var resizeWidth = dims.w + 2 * DvtCollapsiblePanel._CONTENT_PADDING;
  var resizeHeight = dims.h + 2 * DvtCollapsiblePanel._CONTENT_PADDING;

  this._background.setCmds(this._getOutlinePath(resizeWidth, resizeHeight));
  var west = this._collapseDir == DvtCollapsiblePanel.COLLAPSE_NORTHWEST || this._collapseDir == DvtCollapsiblePanel.COLLAPSE_SOUTHWEST;
  if (this._buttonFrame && west)
    this._buttonFrame.setTranslateX(resizeWidth);

  //fire resize event so parent component can reposition
  this.FireListener(new DvtResizeEvent(resizeWidth, resizeHeight, 0, 0));
};


/**
 * Returns whether the collapsible panel is in collapsed state.
 * @return {boolean}  True if the collapsible panel is in collapsed state.  Default to false.
 */
DvtCollapsiblePanel.prototype.isCollapsed = function() {
  return this._collapse;
};


/**
 * Toggles expand/collapse state of the CollapsiblePanel
 * @param {boolean} collapse True to collapse the collapsiblePanel, false to expand
 */
DvtCollapsiblePanel.prototype.setCollapsed = function(collapse) {
  if (this._collapse != collapse) {
    this._collapse = collapse;
    this._collapseExpand(true);
    this.FireListener(new DvtCollapsiblePanelEvent(collapse ? DvtCollapsiblePanelEvent.SUBTYPE_HIDE :
                                                              DvtCollapsiblePanelEvent.SUBTYPE_SHOW));
  }
};


/**
 * Sets the direction this collapsible panel collapses in
 * @param {String} collapseDir The collapse direction
 */
DvtCollapsiblePanel.prototype.setCollapseDirection = function(collapseDir) {
  this._collapseDir = collapseDir ? collapseDir : DvtCollapsiblePanel.COLLAPSE_NORTHEAST;
  if (DvtAgent.isRightToLeft(this.getCtx())) {
    if (this._collapseDir == DvtCollapsiblePanel.COLLAPSE_NORTHEAST)
      this._collapseDir = DvtCollapsiblePanel.COLLAPSE_NORTHWEST;
    else if (this._collapseDir == DvtCollapsiblePanel.COLLAPSE_NORTHWEST)
      this._collapseDir = DvtCollapsiblePanel.COLLAPSE_NORTHEAST;
    else if (this._collapseDir == DvtCollapsiblePanel.COLLAPSE_SOUTHEAST)
      this._collapseDir = DvtCollapsiblePanel.COLLAPSE_SOUTHWEST;
    else if (this._collapseDir == DvtCollapsiblePanel.COLLAPSE_SOUTHWEST)
      this._collapseDir = DvtCollapsiblePanel.COLLAPSE_SOUTHEAST;
  }
};

DvtCollapsiblePanel.prototype.getMaxWidth = function() {
  return this._maxWidth;
};


/**
 * Returns the maximum width the content for this collapsible panel can be
 * taking into account the scrollbar width and padding.
 * @return {number} The maximum width the content for this collapsible panel
 */
DvtCollapsiblePanel.prototype.getMaxContentWidth = function() {
  return this._maxWidth - (2 * DvtCollapsiblePanel._CONTENT_PADDING + DvtScrollableContainer.DEFAULT_SCROLLBAR_WIDTH + DvtCollapsiblePanel._SCROLLBAR_CONTENT_PADDING);
};

DvtCollapsiblePanel.prototype.getMaxHeight = function() {
  return this._maxHeight;
};

DvtCollapsiblePanel.prototype.getMaxContentHeight = function() {
  return this._maxHeight - (2 * DvtCollapsiblePanel._CONTENT_PADDING + DvtScrollableContainer.DEFAULT_SCROLLBAR_WIDTH + DvtCollapsiblePanel._SCROLLBAR_CONTENT_PADDING);
};


/**
 * @private
 * Returns a point to move by used in animation
 * @param {DvtPoint} point The original point that represent one of the corners on collapsibel panel
 * @param {boolean} isScale True to scale the point
 */
DvtCollapsiblePanel.prototype._getRefPoint = function(point, isScale) {
  if (!this.isCollapsed()) {
    if (isScale)
      return new DvtPoint(1 / point.x, 1 / point.y);
    else
      return new DvtPoint(- point.x, - point.y);
  }

  return point;
};


/**
 * Internal method to update the expand/collapse state of the CollapsiblePanel
 * @param {boolean} animate True for animation
 * @private
 */
DvtCollapsiblePanel.prototype._collapseExpand = function(animate) {
  if (this._animation) {
    this._animationStopped = true;
    this._animation.stop(true);
  }

  var north = this._collapseDir == DvtCollapsiblePanel.COLLAPSE_NORTHWEST || this._collapseDir == DvtCollapsiblePanel.COLLAPSE_NORTHEAST;
  var west = this._collapseDir == DvtCollapsiblePanel.COLLAPSE_NORTHWEST || this._collapseDir == DvtCollapsiblePanel.COLLAPSE_SOUTHWEST;

  var translateX = west ? 0 : this._width;
  var translateY = north ? 0 : this._height;

  var scalePoint = new DvtPoint(1 / this._width, 1 / this._height);
  var translatePoint = new DvtPoint(translateX, translateY);
  var adjustment = north ? 0 : DvtCollapsiblePanel.BUTTONHEIGHT;
  var translatePoint2 = new DvtPoint(west ? -this._width : this._width, translateY - adjustment);

  if (!animate) {
    this._background.setAlpha(0);
    if (this._buttonFrame)
      this._buttonFrame.setAlpha(0);
  }

  //TODO figure out actual movement for non animation
  var scaleAnim = new DvtAnimScaleBy(this.getCtx(), this._background, this._getRefPoint(scalePoint, true), animate ? DvtCollapsiblePanel.ANIMATIONDURATION : 0.00001);
  var moveAnim = new DvtAnimMoveBy(this.getCtx(), this._buttonFrame, this._getRefPoint(translatePoint2), animate ? DvtCollapsiblePanel.ANIMATIONDURATION : 0.00001);
  var moveAnim2 = new DvtAnimMoveBy(this.getCtx(), this._background, this._getRefPoint(translatePoint), animate ? DvtCollapsiblePanel.ANIMATIONDURATION : 0.00001);

  this._animation = new DvtParallelPlayable(this.getCtx(), scaleAnim, moveAnim, moveAnim2);

  // If an animation was created, play it
  if (this._animation) {
    this.getCtx().getTooltipManager().hideTooltip();

    // Disable event listeners temporarily
    this.removeEvtListener(DvtMouseEvent.MOUSEOVER, this.HandleMouseOver, false, this);
    this.removeEvtListener(DvtMouseEvent.MOUSEOUT, this.HandleMouseOut, false, this);
    if (this._collapseExpandButton) {
      this._collapseExpandButton.removeEvtListener(DvtTouchEvent.TOUCHSTART, this.OnButtonClick, false, this);
      this._collapseExpandButton.removeEvtListener(DvtMouseEvent.CLICK, this.OnButtonClick, false, this);
      this._collapseExpandButton.removeEvtListener(DvtMouseEvent.MOUSEOVER, this.OnButtonHoverOver, false, this);
      this._collapseExpandButton.removeEvtListener(DvtMouseEvent.MOUSEOUT, this.OnButtonHoverOut, false, this);
    }

    if (this.isCollapsed())
      this._scrollableContainer.setAlpha(0);

    // Start the animation
    this._animation.setOnEnd(this.OnAnimationEnd, this);
    this._animation.play();
  }

};

DvtCollapsiblePanel.prototype._createRoundRectangle = function(width, height) {
  var rect = new DvtPath(this.getCtx(), this._getOutlinePath(width, height));
  var alpha = this._styleMap[DvtPanZoomControlPanel.FRAME_ROLLOUT_ALPHA];
  rect.setSolidFill(this._bgColor, this._bgAlpha);
  rect.setSolidStroke(this._borderColor, alpha);
  return rect;
};

DvtCollapsiblePanel.prototype._getOutlinePath = function(width, height) {
  var r = this._borderRadius;
  var cmds;
  var west = this._collapseDir == DvtCollapsiblePanel.COLLAPSE_NORTHWEST || this._collapseDir == DvtCollapsiblePanel.COLLAPSE_SOUTHWEST;
  if (height <= DvtCollapsiblePanel.BUTTONHEIGHT)
    height = DvtCollapsiblePanel.BUTTONHEIGHT;
  // when collapsing to the west, northwest corner rounded, northeast corner square
  // when collapsing to the east, northwest corner square, northeast corner rounded
  if (this._isFixed || west)
    cmds = DvtPathUtils.moveTo(r, 0);
  else
    cmds = DvtPathUtils.moveTo(0, 0);

  cmds += DvtPathUtils.lineTo(width - r, 0);

  if (!this._isFixed && west) {
    cmds += DvtPathUtils.lineTo(width, 0);
    cmds += DvtPathUtils.lineTo(width, r);
  } else {
    cmds += DvtPathUtils.quadTo(width, 0, width, r);
  }

  // square if one row and west
  if (!this._isFixed && height == DvtCollapsiblePanel.BUTTONHEIGHT && west) {
    cmds += DvtPathUtils.lineTo(width, height);
  } else {
    cmds += DvtPathUtils.lineTo(width, height - r);
    cmds += DvtPathUtils.quadTo(width, height, width - r, height);
  }

  cmds += DvtPathUtils.lineTo(r, height);
  // square if one row and east
  if (!this._isFixed && height == DvtCollapsiblePanel.BUTTONHEIGHT && !west) {
    cmds += DvtPathUtils.lineTo(0, height);
  } else {

    cmds += DvtPathUtils.quadTo(0, height, 0, height - r);
  }

  if (this._isFixed || west) {
    cmds += DvtPathUtils.lineTo(0, r);
    cmds += DvtPathUtils.quadTo(0, 0, r, 0);
  }

  cmds += DvtPathUtils.closePath();
  return cmds;
};


/**
 * @protected
 * Handles animation behavior at the end of the animation.
 */
DvtCollapsiblePanel.prototype.OnAnimationEnd = function() {
  // Reset the animation stopped flag
  this._animationStopped = false;

  // Remove the animation reference
  this._animation = null;

  var stroke = this._background.getStroke().clone();
  stroke.setAlpha(this._styleMap[DvtPanZoomControlPanel.FRAME_ROLLOUT_ALPHA]);
  this._background.setStroke(stroke);

  var alpha = this._styleMap[DvtPanZoomControlPanel.BG_ROLLOUT_ALPHA];
  var fill = this._background.getFill().clone();
  fill.setAlpha(alpha);
  this._background.setFill(fill);

  if (this._buttonFrame)
    this._buttonFrame.setAlpha(this._styleMap[DvtPanZoomControlPanel.FRAME_ROLLOUT_ALPHA]);

  if (!this.isCollapsed())
    this._scrollableContainer.setAlpha(1);

  // Restore event listeners
  this.addEvtListener(DvtMouseEvent.MOUSEOVER, this.HandleMouseOver, false, this);
  this.addEvtListener(DvtMouseEvent.MOUSEOUT, this.HandleMouseOut, false, this);
  if (this._collapseExpandButton) {
    if (this.isCollapsed())
      this._collapseExpandButton = DvtButtonLAFUtils.createExpandButton(this.getCtx(), this._buttonImages, DvtCollapsiblePanel.BUTTONHEIGHT, this._styleMap, false);
    else
      this._collapseExpandButton = DvtButtonLAFUtils.createCollapseButton(this.getCtx(), this._buttonImages, DvtCollapsiblePanel.BUTTONHEIGHT, this._styleMap, false);
    this._buttonFrame.addChild(this._collapseExpandButton);
    this._buttonFrame.removeChildAt(0);

    if (DvtAgent.isTouchDevice()) {
      this._collapseExpandButton.addEvtListener(DvtTouchEvent.TOUCHSTART, this.OnButtonClick, false, this);
    } else {
      this._collapseExpandButton.addEvtListener(DvtMouseEvent.CLICK, this.OnButtonClick, false, this);
      this._collapseExpandButton.addEvtListener(DvtMouseEvent.MOUSEOVER, this.OnButtonHoverOver, false, this);
      this._collapseExpandButton.addEvtListener(DvtMouseEvent.MOUSEOUT, this.OnButtonHoverOut, false, this);
    }
  }
};


/**
 * @protected
 * Hides the tooltip and toggles collapsible panel state
 * @param {DvtMouseEvent} evt The trigger event
 */
DvtCollapsiblePanel.prototype.OnButtonClick = function(evt) {
  this.getCtx().getTooltipManager().hideTooltip();
  this.setCollapsed(!this.isCollapsed());
};


/**
 * @protected
 * Displays tooltip on hover event
 * @param {DvtMouseEvent} evt The trigger event
 */
DvtCollapsiblePanel.prototype.OnButtonHoverOver = function(evt) {
  var tooltip = this.isCollapsed() ? this._expandTooltip : this._collapseTooltip;
  if (tooltip != null)
    this.getCtx().getTooltipManager().showTooltip(evt.pageX, evt.pageY, tooltip, this._collapseExpandButton, true);
};


/**
 * @protected
 */
DvtCollapsiblePanel.prototype.OnButtonHoverOut = function(evt) {
  this.getCtx().getTooltipManager().hideTooltip();
};


/**
 * @protected
 */
DvtCollapsiblePanel.prototype.HandleMouseOver = function(event) {
  var stroke = this._background.getStroke().clone();
  stroke.setAlpha(this._styleMap[DvtPanZoomControlPanel.FRAME_ROLLOVER_ALPHA]);
  this._background.setStroke(stroke);

  var alpha = this._styleMap[DvtPanZoomControlPanel.BG_ROLLOVER_ALPHA];
  var fill = this._background.getFill().clone();
  fill.setAlpha(alpha);
  this._background.setFill(fill);

  if (this._buttonFrame)
    this._buttonFrame.setAlpha(this._styleMap[DvtPanZoomControlPanel.FRAME_ROLLOVER_ALPHA]);
};


/**
 * @protected
 */
DvtCollapsiblePanel.prototype.HandleMouseOut = function(event) {
  var stroke = this._background.getStroke().clone();
  stroke.setAlpha(this._styleMap[DvtPanZoomControlPanel.FRAME_ROLLOUT_ALPHA]);
  this._background.setStroke(stroke);

  var fill = this._background.getFill().clone();
  fill.setAlpha(this._bgAlpha);
  this._background.setFill(fill);

  if (this._buttonFrame)
    this._buttonFrame.setAlpha(this._styleMap[DvtPanZoomControlPanel.FRAME_ROLLOUT_ALPHA]);
};
/**
 * @constructor
 */
var DvtCollapsiblePanelEvent = function(subtype) {
  this.Init(DvtCollapsiblePanelEvent.TYPE);
  this._subtype = subtype;
};

DvtObj.createSubclass(DvtCollapsiblePanelEvent, DvtBaseComponentEvent, 'DvtCollapsiblePanelEvent');

DvtCollapsiblePanelEvent.TYPE = 'dvtCollapsiblePanelEvent';
DvtCollapsiblePanelEvent.SUBTYPE_HIDE = 'hide';
DvtCollapsiblePanelEvent.SUBTYPE_SHOW = 'show';

DvtCollapsiblePanelEvent.prototype.getSubType = function() {
  return this._subtype;
};
/*
 * DvtImageLAFUtils Utility class for image
 */
var DvtImageLAFUtils = {
};

DvtObj.createSubclass(DvtImageLAFUtils, DvtObj, 'DvtImageLAFUtils');

DvtImageLAFUtils.loadIcon = function(context, uri) {
  var image = new DvtImage(context, uri);
  image.setMouseEnabled(false);

  DvtImageLoader.loadImage(context, uri, function(imgDim) {
    // set image size
    if (imgDim != null && imgDim.width && imgDim.height) {
      image.setWidth(imgDim.width);
      image.setHeight(imgDim.height);
    }
  });

  return image;
};
// Copyright (c) 2008, 2014, Oracle and/or its affiliates. All rights reserved.


/**
 * DvtButtonLAFUtils Utility class for providing LAF for buttons in the control panel.
 */
var DvtButtonLAFUtils = {};

DvtObj.createSubclass(DvtButtonLAFUtils, DvtObj, 'DvtButtonLAFUtils');

DvtButtonLAFUtils.EXPAND_COLLAPSE_BUTTON_IMG_OFFSET = -6;

DvtButtonLAFUtils.CONTROL_BUTTON_WIDTH = 23;
DvtButtonLAFUtils.CONTROL_BUTTON_HEIGHT = 21;
DvtButtonLAFUtils.ZOOM_BUTTON_HEIGHT = 20;
DvtButtonLAFUtils.OPEN_CLOSE_IMAGE_WIDTH = 22;
DvtButtonLAFUtils.OPEN_CLOSE_IMAGE_HEIGHT = 20;

DvtButtonLAFUtils.VIEW_PANEL_HEIGHT = 47;
DvtButtonLAFUtils.VIEW_PANEL_HALF_HEIGHT = 26;

DvtButtonLAFUtils.SIN_PI_4 = Math.sin(Math.PI / 4);
DvtButtonLAFUtils.TAN_PI_8 = Math.tan(Math.PI / 8);

DvtButtonLAFUtils.BORDER_COLOR = '#7C8191';
DvtButtonLAFUtils.GRADIENT_DARK = '#E0E1E1';
DvtButtonLAFUtils.GRADIENT_LIGHT = '#F0F1F2';
DvtButtonLAFUtils.ROUND_RECT_ELLIPSE = 8;

DvtButtonLAFUtils.DEFAULT_FILL_TYPE = 'solid';
DvtButtonLAFUtils.DEFAULT_BORDER_COLOR = '#7BA0D9';
DvtButtonLAFUtils.DEFAULT_MID_COLOR = '#3474D3';
DvtButtonLAFUtils.DEFAULT_END_COLOR = '#BFD8FB';


//Button image xml attribute names
DvtButtonLAFUtils._ZOOMIN_ENA = 'zoominUp';
DvtButtonLAFUtils._ZOOMIN_OVR = 'zoominOver';
DvtButtonLAFUtils._ZOOMIN_DWN = 'zoominDown';
DvtButtonLAFUtils._ZOOMIN_DISABLED = 'zoominDisabled';
DvtButtonLAFUtils._ZOOMTOFIT_ENA = 'zoomtofitUp';
DvtButtonLAFUtils._ZOOMTOFIT_OVR = 'zoomtofitOver';
DvtButtonLAFUtils._ZOOMTOFIT_DWN = 'zoomtofitDown';
DvtButtonLAFUtils._ZOOMOUT_ENA = 'zoomoutUp';
DvtButtonLAFUtils._ZOOMOUT_OVR = 'zoomoutOver';
DvtButtonLAFUtils._ZOOMOUT_DWN = 'zoomoutDown';
DvtButtonLAFUtils._ZOOMOUT_DISABLED = 'zoomoutDisabled';
DvtButtonLAFUtils._PAN_ENA = 'pandialUp';
DvtButtonLAFUtils._PAN_OVR = 'pandialOver';
DvtButtonLAFUtils._PAN_DWN = 'pandialDown';
DvtButtonLAFUtils._RECENTER_ENA = 'recenterUp';
DvtButtonLAFUtils._RECENTER_OVR = 'recenterOver';
DvtButtonLAFUtils._RECENTER_DWN = 'recenterDown';
DvtButtonLAFUtils._RESET_ENA = 'resetUp';
DvtButtonLAFUtils._RESET_OVR = 'resetOver';
DvtButtonLAFUtils._RESET_DWN = 'resetDown';
DvtButtonLAFUtils._DRILLUP_ENA = 'drillupUp';
DvtButtonLAFUtils._DRILLUP_OVR = 'drillupOver';
DvtButtonLAFUtils._DRILLUP_DWN = 'drillupDown';
DvtButtonLAFUtils._DRILLDOWN_ENA = 'drilldownUp';
DvtButtonLAFUtils._DRILLDOWN_OVR = 'drilldownOver';
DvtButtonLAFUtils._DRILLDOWN_DWN = 'drilldownDown';

DvtButtonLAFUtils._MAX_ENA = 'maxUp';
DvtButtonLAFUtils._MAX_OVR = 'maxOver';
DvtButtonLAFUtils._MAX_DWN = 'maxDown';
DvtButtonLAFUtils._RESTORE_ENA = 'restoreUp';
DvtButtonLAFUtils._RESTORE_OVR = 'restoreOver';
DvtButtonLAFUtils._RESTORE_DWN = 'restoreDown';

DvtButtonLAFUtils._COLLAPSE_ENA = 'collapseEna';
DvtButtonLAFUtils._COLLAPSE_OVR = 'collapseOvr';
DvtButtonLAFUtils._COLLAPSE_DWN = 'collapseDwn';
DvtButtonLAFUtils._EXPAND_ENA = 'expandEna';
DvtButtonLAFUtils._EXPAND_OVR = 'expandOvr';
DvtButtonLAFUtils._EXPAND_DWN = 'expandDwn';

DvtButtonLAFUtils._QUICKQUERY_ENA = 'quickQueryEna';
DvtButtonLAFUtils._QUICKQUERY_OVR = 'quickQueryOvr';
DvtButtonLAFUtils._QUICKQUERY_DWN = 'quickQueryDwn';

DvtButtonLAFUtils._CLEARRESULTS_ENA = 'clearResultsEna';
DvtButtonLAFUtils._CLEARRESULTS_OVR = 'clearResultsOvr';
DvtButtonLAFUtils._CLEARRESULTS_DWN = 'clearResultsDwn';

//TODO
DvtButtonLAFUtils._ZOOMSLIDER_ENA = '';
DvtButtonLAFUtils._ZOOMSLIDER_OVR = '';
DvtButtonLAFUtils._ZOOMSLIDER_DWN = '';

DvtButtonLAFUtils._UP = 'Up';
DvtButtonLAFUtils._OVER = 'Over';
DvtButtonLAFUtils._DOWN = 'Down';
DvtButtonLAFUtils._SEL = 'Sel';
DvtButtonLAFUtils._R2L = '_r';
DvtButtonLAFUtils._SYNC = 'synchronize';


/**
 * Creates pan control
 * @param {DvtContext} context Platform specific context object
 * @param {DvtPanZoomCanvas} panZoomCanvas The PanZoomCanvas this button will be associated with
 * @param {DvtPanZoomControlPanelResources}  resources An object that contains translated resources for the component
 * @param {DvtXmlNode} imageURIs The xml containing image URIs for the component
 * @param {number} controls The bit mask specifying which controls to show
 * @param {object} styleMap The object containing style specifications for this component
 * @return {DvtBasePanZoomControl} a container used for the pan control
 */
DvtButtonLAFUtils.createPanControl = function(context, panZoomCanvas, resources, controls, imageURIs, styleMap)
{
  var panUpState;
  if (imageURIs && imageURIs.getAttr) {  //XML Node
    panUpState = DvtButtonLAFUtils._createPanButtonState(context, imageURIs.getAttr(DvtButtonLAFUtils._PAN_ENA), styleMap);
  } else { //JSON Object
    panUpState = DvtButtonLAFUtils._createPanButtonState(context, imageURIs[DvtButtonLAFUtils._PAN_ENA], styleMap);
  }

  //need to offset the down state so that we can rotate the arrow around the center of the pan control
  var panDownState = new DvtContainer(context);
  panDownState.setTranslate(20, 20);
  var downImage;
  if (imageURIs && imageURIs.getAttr) {  //XML Node
    downImage = DvtButtonLAFUtils._createPanButtonState(context, imageURIs.getAttr(DvtButtonLAFUtils._PAN_DWN), styleMap);
  } else { //JSON Object
    downImage = DvtButtonLAFUtils._createPanButtonState(context, imageURIs[DvtButtonLAFUtils._PAN_DWN], styleMap);
  }
  downImage.setTranslate(- 20, - 20);
  panDownState.addChild(downImage);

  //need to offset the over state so that we can rotate the arrow around the center of the pan control
  var panOverState = new DvtContainer(context);
  panOverState.setTranslate(20, 20);
  var overImage;
  if (imageURIs && imageURIs.getAttr) {  //XML Node
    overImage = DvtButtonLAFUtils._createPanButtonState(context, imageURIs.getAttr(DvtButtonLAFUtils._PAN_OVR), styleMap);
  } else { //JSON Object
    overImage = DvtButtonLAFUtils._createPanButtonState(context, imageURIs[DvtButtonLAFUtils._PAN_OVR], styleMap);
  }
  overImage.setTranslate(- 20, - 20);
  panOverState.addChild(overImage);

  var panButton = new DvtButton(context, panUpState, panOverState, panDownState);

  if ((controls & DvtPanZoomControlPanel.CONTROLS_CENTER_BUTTON) > 0) {
    //center of pan control is smaller circle that can be used to center the view on the selected node
    var recenterButton;
    if (imageURIs && imageURIs.getAttr) {  //XML Node
      recenterButton = new DvtButton(context,
          DvtButtonLAFUtils._createRecenterButtonState(context, imageURIs.getAttr(DvtButtonLAFUtils._RECENTER_ENA), styleMap),
          DvtButtonLAFUtils._createRecenterButtonState(context, imageURIs.getAttr(DvtButtonLAFUtils._RECENTER_OVR), styleMap),
          DvtButtonLAFUtils._createRecenterButtonState(context, imageURIs.getAttr(DvtButtonLAFUtils._RECENTER_DWN), styleMap));
    } else {
      recenterButton = new DvtButton(context,
          DvtButtonLAFUtils._createRecenterButtonState(context, imageURIs[DvtButtonLAFUtils._RECENTER_ENA], styleMap),
          DvtButtonLAFUtils._createRecenterButtonState(context, imageURIs[DvtButtonLAFUtils._RECENTER_OVR], styleMap),
          DvtButtonLAFUtils._createRecenterButtonState(context, imageURIs[DvtButtonLAFUtils._RECENTER_DWN], styleMap));
    }
    recenterButton.setTranslate(9, 9);
  }

  return new DvtPanControl(context, panButton, recenterButton, panZoomCanvas, resources, controls, styleMap);
};


/**
 * Creates a container used for the drill up button.
 * @param {DvtContext} context Platform specific context object
 * @param {function} mapCallback The function that should be called to dispatch component events
 * @param {DvtPanZoomCanvas} panZoomCanvas The PanZoomCanvas this button will be associated with
 * @param {number} btype A button type - DvtMapControlButton.BUTTON_TYPE_DRILLUP,DvtMapControlButton.BUTTON_TYPE_DRILLDOWN or DvtMapControlButton.BUTTON_TYPE_RESET
 * @param {DvtPanZoomControlPanelResources}  resources An object that contains translated resources for ThematicMap
 * @param {DvtDomXmlNode} imageURIs The xml containing image URIs for the component
 * @param {DvtEventManager} eventManager An event manager for the component
 * @param {object} styleMap The object containing style specifications for this component
 * @return {DvtBasePanZoomControl} a container used for the drill up button
 */
DvtButtonLAFUtils.createDrillUpButton = function(context, mapCallback, panZoomCanvas, btype, resources, imageURIs, eventManager, styleMap)
{
  if (imageURIs && imageURIs.getAttr) {  //XML Node
    var ena = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_ENABLED,
        imageURIs.getAttr(DvtButtonLAFUtils._DRILLUP_ENA), styleMap);
    var ovr = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_OVER,
        imageURIs.getAttr(DvtButtonLAFUtils._DRILLUP_OVR), styleMap);
    var dwn = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_DOWN,
        imageURIs.getAttr(DvtButtonLAFUtils._DRILLUP_DWN), styleMap);
    var dis = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_ENABLED,
        imageURIs.getAttr(DvtButtonLAFUtils._DRILLUP_ENA), styleMap);
    return new DvtMapControlButton(context, new DvtButton(context, ena, ovr, dwn, dis), mapCallback, panZoomCanvas, btype, resources, eventManager);
  } else { //JSON Node
    var ena = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_ENABLED,
        imageURIs[DvtButtonLAFUtils._DRILLUP_ENA], styleMap);
    var ovr = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_OVER,
        imageURIs[DvtButtonLAFUtils._DRILLUP_OVR], styleMap);
    var dwn = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_DOWN,
        imageURIs[DvtButtonLAFUtils._DRILLUP_DWN], styleMap);
    var dis = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_ENABLED,
        imageURIs[DvtButtonLAFUtils._DRILLUP_ENA], styleMap);
    return new DvtMapControlButton(context, new DvtButton(context, ena, ovr, dwn, dis), mapCallback, panZoomCanvas, btype, resources, eventManager);
  }
};


/**
 * Creates a container used for the drill down button.
 * @param {DvtContext} context Platform specific context object
 * @param {function} mapCallback The function that should be called to dispatch component events
 * @param {DvtPanZoomCanvas} panZoomCanvas The PanZoomCanvas this button will be associated with
 * @param {number} btype A button type - DvtMapControlButton.BUTTON_TYPE_DRILLUP,DvtMapControlButton.BUTTON_TYPE_DRILLDOWN or DvtMapControlButton.BUTTON_TYPE_RESET
 * @param {DvtPanZoomControlPanelResources}  resources An object that contains translated resources for ThematicMap
 * @param {DvtDomXmlNode} imageURIs The xml containing image URIs for the component
 * @param {DvtEventManager} eventManager An event manager for the component
 * @param {object} styleMap The object containing style specifications for this component
 * @return {DvtBasePanZoomControl} a container used for the drill down button
 */
DvtButtonLAFUtils.createDrillDownButton = function(context, mapCallback, panZoomCanvas, btype, resources, imageURIs, eventManager, styleMap) {
  if (imageURIs && imageURIs.getAttr) {  //XML Node
    var ena = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_ENABLED,
        imageURIs.getAttr(DvtButtonLAFUtils._DRILLDOWN_ENA), styleMap);
    var ovr = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_OVER,
        imageURIs.getAttr(DvtButtonLAFUtils._DRILLDOWN_OVR), styleMap);
    var dwn = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_DOWN,
        imageURIs.getAttr(DvtButtonLAFUtils._DRILLDOWN_DWN), styleMap);
    var dis = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_ENABLED,
        imageURIs.getAttr(DvtButtonLAFUtils._DRILLDOWN_ENA), styleMap);
    return new DvtMapControlButton(context, new DvtButton(context, ena, ovr, dwn, dis), mapCallback, panZoomCanvas, btype, resources, eventManager);
  } else { //JSON Node
    var ena = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_ENABLED,
        imageURIs[DvtButtonLAFUtils._DRILLDOWN_ENA], styleMap);
    var ovr = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_OVER,
        imageURIs[DvtButtonLAFUtils._DRILLDOWN_OVR], styleMap);
    var dwn = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_DOWN,
        imageURIs[DvtButtonLAFUtils._DRILLDOWN_DWN], styleMap);
    var dis = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_ENABLED,
        imageURIs[DvtButtonLAFUtils._DRILLDOWN_ENA], styleMap);
    return new DvtMapControlButton(context, new DvtButton(context, ena, ovr, dwn, dis), mapCallback, panZoomCanvas, btype, resources, eventManager);
  }
};


/**
 * Creates a container used for the reset button.
 * @param {DvtContext} context Platform specific context object
 * @param {function} mapCallback The function that should be called to dispatch component events
 * @param {DvtPanZoomCanvas} panZoomCanvas The PanZoomCanvas this button will be associated with
 * @param {number} btype A button type - DvtMapControlButton.BUTTON_TYPE_DRILLUP,DvtMapControlButton.BUTTON_TYPE_DRILLDOWN or DvtMapControlButton.BUTTON_TYPE_RESET
 * @param {DvtPanZoomControlPanelResources}  resources An object that contains translated resources for ThematicMap
 * @param {DvtDomXmlNode} imageURIs The xml containing image URIs for the component
 * @param {DvtEventManager} eventManager An event manager for the component
 * @param {object} styleMap The object containing style specifications for this component
 * @return {DvtBasePanZoomControl} a container used for the reset button
 */
DvtButtonLAFUtils.createResetButton = function(context, mapCallback, panZoomCanvas, btype, resources, imageURIs, eventManager, styleMap) {
  if (imageURIs && imageURIs.getAttr) {  //XML Node
    var ena = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_ENABLED,
        imageURIs.getAttr(DvtButtonLAFUtils._RESET_ENA), styleMap);
    var ovr = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_OVER,
        imageURIs.getAttr(DvtButtonLAFUtils._RESET_OVR), styleMap);
    var dwn = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_DOWN,
        imageURIs.getAttr(DvtButtonLAFUtils._RESET_DWN), styleMap);
    var dis = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_ENABLED,
        imageURIs.getAttr(DvtButtonLAFUtils._RESET_ENA), styleMap);
    return new DvtMapControlButton(context, new DvtButton(context, ena, ovr, dwn, dis), mapCallback, panZoomCanvas, btype, resources, eventManager);
  } else { //JSON Node
    var ena = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_ENABLED,
        imageURIs[DvtButtonLAFUtils._RESET_ENA], styleMap);
    var ovr = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_OVER,
        imageURIs[DvtButtonLAFUtils._RESET_OVR], styleMap);
    var dwn = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_DOWN,
        imageURIs[DvtButtonLAFUtils._RESET_DWN], styleMap);
    var dis = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_ENABLED,
        imageURIs[DvtButtonLAFUtils._RESET_ENA], styleMap);
    return new DvtMapControlButton(context, new DvtButton(context, ena, ovr, dwn, dis), mapCallback, panZoomCanvas, btype, resources, eventManager);
  }
};


/**
 * Creates a container used for the zoom-to-fit button.
 * @param {DvtContext} context Platform specific context object
 * @param {DvtPanZoomCanvas} panZoomCanvas The PanZoomCanvas this button will be associated with
 * @param {DvtPanZoomControlPanelResources} resources An object that contains translated resources for the component
 * @param {DvtDomXmlNode} imageURIs The xml containing image URIs for the component
 * @param {object} styleMap The object containing style specifications for this component
 * @return {DvtBasePanZoomControl} a container used for the zoom-to-fit button
 */
DvtButtonLAFUtils.createZoomToFitButton = function(context, panZoomCanvas, resources, eventManager, imageURIs, styleMap) {
  if (imageURIs && imageURIs.getAttr) {  //XML Node
    var ena = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_ENABLED,
        imageURIs.getAttr(DvtButtonLAFUtils._ZOOMTOFIT_ENA), styleMap);
    var ovr = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_OVER,
        imageURIs.getAttr(DvtButtonLAFUtils._ZOOMTOFIT_OVR), styleMap);
    var dwn = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_DOWN,
        imageURIs.getAttr(DvtButtonLAFUtils._ZOOMTOFIT_DWN), styleMap);
    return new DvtZoomToFitButton(context, new DvtButton(context, ena, ovr, dwn), panZoomCanvas, resources, eventManager);
  } else { //JSON Node
    var ena = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_ENABLED,
        imageURIs[DvtButtonLAFUtils._ZOOMTOFIT_ENA], styleMap);
    var ovr = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_OVER,
        imageURIs[DvtButtonLAFUtils._ZOOMTOFIT_OVR], styleMap);
    var dwn = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_DOWN,
        imageURIs[DvtButtonLAFUtils._ZOOMTOFIT_DWN], styleMap);
    return new DvtZoomToFitButton(context, new DvtButton(context, ena, ovr, dwn), panZoomCanvas, resources, eventManager);
  }

};


/**
 * Creates a container used for the zoom-in button.
 * @param {DvtContext} context Platform specific context object
 * @param {DvtPanZoomCanvas} panZoomCanvas The PanZoomCanvas this button will be associated with
 * @param {DvtPanZoomControlPanelResources} resources An object that contains translated resources for the component
 * @param {DvtDomXmlNode} imageURIs The xml containing image URIs for the component
 * @param {object} styleMap The object containing style specifications for this component
 * @return {DvtBasePanZoomControl} a container used for the zoom-in button
 */
DvtButtonLAFUtils.createZoomInButton = function(context, panZoomCanvas, resources, eventManager, imageURIs, styleMap)
{
  if (imageURIs && imageURIs.getAttr) {  //XML Node
    var ena = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_ENABLED,
        imageURIs.getAttr(DvtButtonLAFUtils._ZOOMIN_ENA), styleMap);
    var ovr = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_OVER,
        imageURIs.getAttr(DvtButtonLAFUtils._ZOOMIN_OVR), styleMap);
    var dwn = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_DOWN,
        imageURIs.getAttr(DvtButtonLAFUtils._ZOOMIN_DWN), styleMap);
    var dis = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_DISABLED,
        imageURIs.getAttr(DvtButtonLAFUtils._ZOOMIN_DISABLED), styleMap);
    return new DvtZoomInButton(context, new DvtButton(context, ena, ovr, dwn, dis), panZoomCanvas, resources, eventManager);
  } else { //JSON Node
    var ena = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_ENABLED,
        imageURIs[DvtButtonLAFUtils._ZOOMIN_ENA], styleMap);
    var ovr = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_OVER,
        imageURIs[DvtButtonLAFUtils._ZOOMIN_OVR], styleMap);
    var dwn = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_DOWN,
        imageURIs[DvtButtonLAFUtils._ZOOMIN_DWN], styleMap);
    var dis = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_DISABLED,
        imageURIs[DvtButtonLAFUtils._ZOOMIN_DISABLED], styleMap);
    return new DvtZoomInButton(context, new DvtButton(context, ena, ovr, dwn, dis), panZoomCanvas, resources, eventManager);
  }

};


/**
 * Creates a container used for the zoom-out button.
 * @param {DvtContext} context Platform specific context object
 * @param {DvtPanZoomCanvas} panZoomCanvas The PanZoomCanvas this button will be associated with
 * @param {DvtPanZoomControlPanelResources} resources An object that contains translated resources for the component
 * @param {DvtDomXmlNode} imageURIs The xml containing image URIs for the component
 * @param {object} styleMap The object containing style specifications for this component
 * @return {DvtBasePanZoomControl} a container used for the zoom-out button
 */
DvtButtonLAFUtils.createZoomOutButton = function(context, panZoomCanvas, resources, eventManager, imageURIs, styleMap)
{
  if (imageURIs && imageURIs.getAttr) {  //XML Node
    var ena = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_ENABLED,
        imageURIs.getAttr(DvtButtonLAFUtils._ZOOMOUT_ENA), styleMap);
    var ovr = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_OVER,
        imageURIs.getAttr(DvtButtonLAFUtils._ZOOMOUT_OVR), styleMap);
    var dwn = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_DOWN,
        imageURIs.getAttr(DvtButtonLAFUtils._ZOOMOUT_DWN), styleMap);
    var dis = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_DISABLED,
        imageURIs.getAttr(DvtButtonLAFUtils._ZOOMOUT_DISABLED), styleMap);
    return new DvtZoomOutButton(context, new DvtButton(context, ena, ovr, dwn, dis), panZoomCanvas, resources, eventManager);
  } else { //JSON Node
    var ena = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_ENABLED,
        imageURIs[DvtButtonLAFUtils._ZOOMOUT_ENA], styleMap);
    var ovr = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_OVER,
        imageURIs[DvtButtonLAFUtils._ZOOMOUT_OVR], styleMap);
    var dwn = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_DOWN,
        imageURIs[DvtButtonLAFUtils._ZOOMOUT_DWN], styleMap);
    var dis = DvtButtonLAFUtils._createButtonBaseImage(context, DvtButton.STATE_DISABLED,
        imageURIs[DvtButtonLAFUtils._ZOOMOUT_DISABLED], styleMap);
    return new DvtZoomOutButton(context, new DvtButton(context, ena, ovr, dwn, dis), panZoomCanvas, resources, eventManager);
  }
};


/**
 * Creates a container used for the layout switcher button.
 * @param {DvtContext} context Platform specific context object
 * @param {number} controls Button identifier
 * @param {string} bname Name used to resolve image name
 * @param {number} state Button state - ena, ovr, dwn
 * @param {DvtDomXmlNode} images The xml string that contains image urls for the control
 * @param {object} styleMap The object containing style specifications for this component
 * @return {DvtDisplayable} a container used for the layout switcher button
 */
DvtButtonLAFUtils.createLayoutItemButtonState = function(context, controls, bname, state, images, styleMap)
{
  var r = DvtStyleUtils.getStyle(styleMap, 'buttonRadius', 0);
  var w = DvtStyleUtils.getStyle(styleMap, DvtPanZoomControlPanel.CP_BUTTON_WIDTH, 0);
  var h = DvtStyleUtils.getStyle(styleMap, DvtPanZoomControlPanel.CP_BUTTON_WIDTH, 0);

  var shape = DvtButtonLAFUtils._createBaseButtonShape(context, state, r, w, h, styleMap);
  DvtButtonLAFUtils._setButtonColors(state, shape, w, h + (r * 2), 0, 0, styleMap, true);

  var attrb = DvtButtonLAFUtils._getLayoutURI(context, state, bname);
  var uri;
  if (images && images.getAttr) {  //XML Node
    uri = images.getAttr(attrb);
  } else { //JSON Node
    uri = images[attrb];
  }

  var image = DvtButtonLAFUtils._loadIcon(context, uri, w, h);
  if (image)
    shape.addChild(image);
  return shape;
};


// TODO JSDOC
DvtButtonLAFUtils._getLayoutURI = function(context, state, bname, bSel)
{
  var attrb = bname;
  var r2l = '';

  if (state == DvtButton.STATE_ENABLED)
    state = DvtButtonLAFUtils._UP;
  else if (state == DvtButton.STATE_OVER)
    state = DvtButtonLAFUtils._OVER;
  else if (state == DvtButton.STATE_DOWN)
    state = DvtButtonLAFUtils._DOWN;

  if (bSel) {
    attrb += DvtButtonLAFUtils._SEL;
    if (DvtAgent.isRightToLeft(context))
      r2l = DvtButtonLAFUtils._R2L;
  }
  attrb += state + r2l;

  return attrb;
};


/**
 * Creates a shape used for the panel card switcher button.
 * @param {DvtContext} context Platform specific context object
 * @param {number} state Button state - ena, ovr, dwn
 * @param {object} styleMap The object containing style specifications for this component
 * @param {DvtDomXmlNode} images The xml string that contains image urls for the control
 * @return {DvtDisplayable} a shape for the panel card switcher button
 */
DvtButtonLAFUtils.createPanelCardButtonState = function(context, state, styleMap, images)
{
  var attrb = DvtButtonLAFUtils._getLayoutURI(context, state, DvtButtonLAFUtils._SYNC, true);
  var shape;
  if (images && images.getAttr) {  //XML Node
    shape = DvtButtonLAFUtils._createButtonBaseImage(context, state,
        images.getAttr(attrb), styleMap);
  } else { //JSON Node
    shape = DvtButtonLAFUtils._createButtonBaseImage(context, state,
        images[attrb], styleMap);
  }

  return shape;
};


/**
 * Creates a shape used for the panel card combo box button.
 * @param {DvtContext} context Platform specific context object
 * @param {number} state Button state - ena, ovr, dwn
 * @param {number} ww Button width
 * @param {number} hh Button height
 * @param {object} styleMap The object containing style specifications for this component
 * @param {DvtDomXmlNode} images The xml string that contains image urls for the control
 * @return {DvtDisplayable} a shape for the panel card combo box button
 */
DvtButtonLAFUtils.createPanelCardSyncItemState = function(context, state, ww, hh, styleMap, images)
{
  var r = DvtStyleUtils.getStyle(styleMap, 'buttonRadius', 0);
  var base = DvtButtonLAFUtils._createBaseButtonShape(context, state, r, ww, hh, styleMap);
  DvtButtonLAFUtils._setButtonColors(state, base, ww, hh + (r * 2), 0, 0, styleMap, true);
  return base;
};



DvtButtonLAFUtils.createZoomSliderButton = function(context, state)
{
  return null;
};


/**
 * Creates a shape used for the control panel button.
 * @param {DvtContext} context Platform specific context object
 * @param {string} bname Name used to resolve image name
 * @param {number} state Button state - ena, ovr, dwn
 * @param {object} styleMap The object containing style specifications for this component
 * @param {DvtDomXmlNode} images The xml string that contains image urls for the control
 * @return {DvtDisplayable} a shape for the control panel button
 */
DvtButtonLAFUtils.createControlButtonState = function(context, bname, state, images, styleMap)
{
  var attrb = DvtButtonLAFUtils._getLayoutURI(context, state, bname);
  var shape;
  if (images && images.getAttr) {  //XML Node
    shape = DvtButtonLAFUtils._createButtonBaseImage(context, state, images.getAttr(attrb), styleMap);
  } else { //JSON Node
    shape = DvtButtonLAFUtils._createButtonBaseImage(context, state, images[attrb], styleMap);
  }

  return shape;
};


/**
 * Creates an Expand Button
 * @param {DvtContext} context Platform specific context object
 * @param {object} imageURIs The JSON object containing image URIs for the component
 * @param {number} h height of the close button
 * @param {object} styleMap The object containing style specifications for this component
 * @param {boolean} bL2R true if the reading direction is left-to-right, so that the
 *        control panel is in the top left corner of the view
 * @return {DvtButton} The Expand button
 */
DvtButtonLAFUtils.createExpandButton = function(context, imageURIs, h, styleMap, bR2L) {
  if (imageURIs && imageURIs.getAttr) {  //XML Node
    var ena = DvtButtonLAFUtils._createCollapseExpandButtonState(context, DvtButton.STATE_ENABLED, h, imageURIs.getAttr(DvtButtonLAFUtils._EXPAND_ENA), styleMap, bR2L);
    var ovr = DvtButtonLAFUtils._createCollapseExpandButtonState(context, DvtButton.STATE_OVER, h, imageURIs.getAttr(DvtButtonLAFUtils._EXPAND_OVR), styleMap, bR2L);
    var dwn = DvtButtonLAFUtils._createCollapseExpandButtonState(context, DvtButton.STATE_DOWN, h, imageURIs.getAttr(DvtButtonLAFUtils._EXPAND_DWN), styleMap, bR2L);
    return new DvtButton(context, ena, ovr, dwn);
  } else { //JSON Node
    var ena = DvtButtonLAFUtils._createCollapseExpandButtonState(context, DvtButton.STATE_ENABLED, h, imageURIs[DvtButtonLAFUtils._EXPAND_ENA], styleMap, bR2L);
    var ovr = DvtButtonLAFUtils._createCollapseExpandButtonState(context, DvtButton.STATE_OVER, h, imageURIs[DvtButtonLAFUtils._EXPAND_OVR], styleMap, bR2L);
    var dwn = DvtButtonLAFUtils._createCollapseExpandButtonState(context, DvtButton.STATE_DOWN, h, imageURIs[DvtButtonLAFUtils._EXPAND_DWN], styleMap, bR2L);
    return new DvtButton(context, ena, ovr, dwn);
  }
};


/**
 * Creates a collapse Button
 * @param {DvtContext} context Platform specific context object
 * @param {object} imageURIs The JSON object containing image URIs for the component
 * @param {number} h height of the close button
 * @param {object} styleMap The object containing style specifications for this component
 * @param {boolean} bL2R true if the reading direction is left-to-right, so that the
 *        control panel is in the top left corner of the view
 * @return {DvtButton} The collapse button
 */
DvtButtonLAFUtils.createCollapseButton = function(context, imageURIs, h, styleMap, bR2L) {
  if (imageURIs && imageURIs.getAttr) {  //XML Node
    var ena = DvtButtonLAFUtils._createCollapseExpandButtonState(context, DvtButton.STATE_ENABLED, h, imageURIs.getAttr(DvtButtonLAFUtils._COLLAPSE_ENA), styleMap, bR2L);
    var ovr = DvtButtonLAFUtils._createCollapseExpandButtonState(context, DvtButton.STATE_OVER, h, imageURIs.getAttr(DvtButtonLAFUtils._COLLAPSE_OVR), styleMap, bR2L);
    var dwn = DvtButtonLAFUtils._createCollapseExpandButtonState(context, DvtButton.STATE_DOWN, h, imageURIs.getAttr(DvtButtonLAFUtils._COLLAPSE_DWN), styleMap, bR2L);
    return new DvtButton(context, ena, ovr, dwn);
  } else { //JSON Node
    var ena = DvtButtonLAFUtils._createCollapseExpandButtonState(context, DvtButton.STATE_ENABLED, h, imageURIs[DvtButtonLAFUtils._COLLAPSE_ENA], styleMap, bR2L);
    var ovr = DvtButtonLAFUtils._createCollapseExpandButtonState(context, DvtButton.STATE_OVER, h, imageURIs[DvtButtonLAFUtils._COLLAPSE_OVR], styleMap, bR2L);
    var dwn = DvtButtonLAFUtils._createCollapseExpandButtonState(context, DvtButton.STATE_DOWN, h, imageURIs[DvtButtonLAFUtils._COLLAPSE_DWN], styleMap, bR2L);
    return new DvtButton(context, ena, ovr, dwn);
  }
};


/**
 * Creates a Quick query Button
 * @param {DvtContext} context Platform specific context object
 * @param {object} imageURIs The JSON object containing image URIs for the component
 * @param {number} h height of the close button
 * @param {object} styleMap The object containing style specifications for this component
 * @param {boolean} bL2R true if the reading direction is left-to-right, so that the
 *        control panel is in the top left corner of the view
 * @return {DvtButton} The Quick query button
 */
DvtButtonLAFUtils.createQuickQueryButton = function(context, imageURIs) {
  if (imageURIs && imageURIs.getAttr) {  //XML Node
    var ena = DvtButtonLAFUtils._createQuickQueryButtonState(context, DvtButton.STATE_ENABLED, imageURIs.getAttr(DvtButtonLAFUtils._QUICKQUERY_ENA));
    var ovr = DvtButtonLAFUtils._createQuickQueryButtonState(context, DvtButton.STATE_OVER, imageURIs.getAttr(DvtButtonLAFUtils._QUICKQUERY_OVR));
    var dwn = DvtButtonLAFUtils._createQuickQueryButtonState(context, DvtButton.STATE_DOWN, imageURIs.getAttr(DvtButtonLAFUtils._QUICKQUERY_DWN));
    return new DvtButton(context, ena, ovr, dwn);
  } else { //JSON Node
    var ena = DvtButtonLAFUtils._createQuickQueryButtonState(context, DvtButton.STATE_ENABLED, imageURIs[DvtButtonLAFUtils._QUICKQUERY_ENA]);
    var ovr = DvtButtonLAFUtils._createQuickQueryButtonState(context, DvtButton.STATE_OVER, imageURIs[DvtButtonLAFUtils._QUICKQUERY_OVR]);
    var dwn = DvtButtonLAFUtils._createQuickQueryButtonState(context, DvtButton.STATE_DOWN, imageURIs[DvtButtonLAFUtils._QUICKQUERY_DWN]);
    return new DvtButton(context, ena, ovr, dwn);
  }
};


/**
 * Creates a Clear results Button
 * @param {DvtContext} context Platform specific context object
 * @param {object} imageURIs The JSON object containing image URIs for the component
 * @param {number} h height of the close button
 * @param {object} styleMap The object containing style specifications for this component
 * @param {boolean} bL2R true if the reading direction is left-to-right, so that the
 *        control panel is in the top left corner of the view
 * @return {DvtButton} The Clear results button
 */
DvtButtonLAFUtils.createClearResultsButton = function(context, imageURIs) {
  if (imageURIs && imageURIs.getAttr) {  //XML Node
    var ena = DvtButtonLAFUtils._createQuickQueryButtonState(context, DvtButton.STATE_ENABLED, imageURIs.getAttr(DvtButtonLAFUtils._CLEARRESULTS_ENA));
    var ovr = DvtButtonLAFUtils._createQuickQueryButtonState(context, DvtButton.STATE_OVER, imageURIs.getAttr(DvtButtonLAFUtils._CLEARRESULTS_OVR));
    var dwn = DvtButtonLAFUtils._createQuickQueryButtonState(context, DvtButton.STATE_DOWN, imageURIs.getAttr(DvtButtonLAFUtils._CLEARRESULTS_DWN));
    return new DvtButton(context, ena, ovr, dwn);
  } else { //JSON Node
    var ena = DvtButtonLAFUtils._createQuickQueryButtonState(context, DvtButton.STATE_ENABLED, imageURIs[DvtButtonLAFUtils._CLEARRESULTS_ENA]);
    var ovr = DvtButtonLAFUtils._createQuickQueryButtonState(context, DvtButton.STATE_OVER, imageURIs[DvtButtonLAFUtils._CLEARRESULTS_OVR]);
    var dwn = DvtButtonLAFUtils._createQuickQueryButtonState(context, DvtButton.STATE_DOWN, imageURIs[DvtButtonLAFUtils._CLEARRESULTS_DWN]);
    return new DvtButton(context, ena, ovr, dwn);
  }
};


/**
 * Creates a shape used for the panel card combo box button.
 * @param {DvtContext} context Platform specific context object
 * @param {number} state Button state - ena, ovr, dwn
 * @param {string} uri Image URL for the button state
 * @param {object} styleMap The object containing style specifications for this component
 * @param {number} w Optional button width
 * @param {number} h Optional button height
 * @return {DvtDisplayable} a shape for the panel card combo box button
 */
DvtButtonLAFUtils._createButtonBaseImage = function(context, state, uri, styleMap, w, h) {

  var r = DvtStyleUtils.getStyle(styleMap, 'buttonRadius', 0);
  if (w === 'undefined' || w == null)
    w = DvtStyleUtils.getStyle(styleMap, DvtPanZoomControlPanel.CP_BUTTON_WIDTH, 0);
  if (h === 'undefined' || h == null)
    h = DvtStyleUtils.getStyle(styleMap, DvtPanZoomControlPanel.CP_BUTTON_WIDTH, 0);

  var base = DvtButtonLAFUtils._drawBaseButton(context, state, r, w, h, styleMap);
  var image = DvtButtonLAFUtils._loadIcon(context, uri, w, h);
  if (image)
    base.addChild(image);

  return base;
};

DvtButtonLAFUtils._loadIcon = function(context, uri, buttonWidth, buttonHeight) {
  var image = new DvtImage(context, uri);
  image.setMouseEnabled(false);

  DvtImageLoader.loadImage(context, uri, function(imgDim) {
    // set image size
    if (imgDim != null && imgDim.width && imgDim.height) {
      image.setWidth(imgDim.width);
      image.setHeight(imgDim.height);
      var translateY = buttonHeight / 2 - imgDim.height / 2;
      var translateX = buttonWidth / 2 - imgDim.width / 2;
      image.setTranslate(translateX, translateY);
    }
  });

  return image;
};


/**
 * Create a sprite used in the zoom slider thumb.
 *
 * @param state button state
 *
 * @return Sprite used in zoom slider thumb
 */
DvtButtonLAFUtils._createZoomSliderButtonState = function(context, state, ww, uri) {
  //  var ww = 23;
  var hh = 16;
  var x = ww;
  var y = hh;

  var xx = 0;
  var yy = 0;

  var cmds = DvtPathUtils.moveTo(x, y) + DvtPathUtils.lineTo(x - ww, y);
  x = x - ww;
  y = y;

  cmds += DvtPathUtils.lineTo(x, y - hh);
  x = x;
  y = y - hh;

  cmds += DvtPathUtils.lineTo(x + ww, y);
  x = x + ww;
  y = y;

  cmds += DvtPathUtils.lineTo(x, y + hh) + DvtPathUtils.closePath();

  var mc = new DvtPath(context, cmds);

  var currLoader = DvtImageLAFUtils.loadIcon(context, uri);
  if (currLoader) {
    //left-align icon
    // Bug 9506699 - BIDI: Control panel buttons should have local specific icons
    //center icon vertically
    currLoader.setTranslate(- 6 + sw, - 2);
    //TODO?
    mc.addChild(currLoader);
  }

  // Line Style & fill
  DvtButtonLAFUtils._setSliderButtonColors(state, mc, ww, hh, xx, yy);

  return mc;
};


/**
 * Creates a shape used in the pan button.
 * @private
 * @param {DvtContext} context Platform specific context object
 * @param {DvtXmlNode} uri The map of button images
 * @param {object} styleMap The object containing style specifications for this component
 * @return {DvtShape} shape used in pan button
 */
DvtButtonLAFUtils._createPanButtonState = function(context, uri, styleMap) {
  var mc = new DvtContainer(context);
  var hitZone = new DvtCircle(context, 20, 20, 20);
  hitZone.setAlpha(0);
  var color = DvtStyleUtils.getStyle(styleMap, DvtCSSStyle.BACKGROUND_COLOR, null);
  hitZone.setSolidFill(color);
  mc.addChild(hitZone);

  var image = DvtImageLAFUtils.loadIcon(context, uri);
  if (image) {
    mc.addChild(image);
  }
  return mc;
};


/**
 * Creates a shape used in the re-center button.
 * @private
 * @param {DvtContext} context Platform specific context object
 * @param {DvtXmlNode} uri The map of button images
 * @param {object} styleMap The object containing style specifications for this component
 * @return {DvtShape} shape used in re-center button
 */
DvtButtonLAFUtils._createRecenterButtonState = function(context, uri, styleMap)
{
  var shape = new DvtContainer(context);
  var hitZone = new DvtCircle(context, 11, 11, 8);
  hitZone.setAlpha(0);

  var color = DvtStyleUtils.getStyle(styleMap, DvtCSSStyle.BACKGROUND_COLOR, null);
  hitZone.setSolidFill(color);

  shape.addChild(hitZone);

  var image = DvtImageLAFUtils.loadIcon(context, uri);
  if (image) {
    shape.addChild(image);
  }

  return shape;
};


/**
 * Create a displayable object used in the button to collapse the control panel.
 *
 * @param {DvtContext} context Platform specific context object
 * @param {number} state button state
 * @param {number} nh height of the close button
 * @param {DvtXmlNode} uri The map of button images
 * @param {Object} styleMap
 * @param {boolean} bL2R true if the reading direction is left-to-right, so that the
 *        control panel is in the top left corner of the view
 * @return {DvtPath} displayable object used in collapse button
 */
DvtButtonLAFUtils._createCollapseExpandButtonState = function(context, state, nh, uri, styleMap, bR2L) {

  //BUG FIX #10154856: pass in height so we can show single row in
  //horizontal arm of control panel in TMap
  if (!nh)
    nh = 47;
  var sprite = DvtButtonLAFUtils._drawOpenCloseButtonHelper(context, state, nh, styleMap, bR2L);
  var iconLoader = DvtImageLAFUtils.loadIcon(context, uri);

  //center the icon in the button
  if (iconLoader) {
    var imageW = DvtStyleUtils.getStyle(styleMap, DvtPanZoomControlPanel.CP_IMAGE_WIDTH, 0);
    var imageH = DvtStyleUtils.getStyle(styleMap, DvtPanZoomControlPanel.CP_IMAGE_HEIGHT, 0);

    sprite.addChild(iconLoader);

    var buttonWidth = DvtStyleUtils.getStyle(styleMap, DvtPanZoomControlPanel.CP_OPEN_CLOSE_BUTTON_WIDTH, 0);
    var offsetX = (buttonWidth - imageW) / 2;

    //BUG FIX #10154856: calculate y coord instead of hardcoding because we may
    //show 1 or 2 rows of controls in horizontal arm of control panel
    //(calculation should yield same as old code for 2 rows)
    //icon height is 20
    var offsetY = (nh - imageH) / 2;
    iconLoader.setTranslate(offsetX, offsetY);
  }
  return sprite;
};


/**
 * Create a sprite used in the button to perform a search.
 *
 * @param state button state
 *
 * @return Sprite used in search button
 */
DvtButtonLAFUtils._createQuickQueryButtonState = function(context, state, uri) {
  var iconLoader = DvtImageLAFUtils.loadIcon(context, uri);
  iconLoader.setMouseEnabled(true);
  return iconLoader;
};


/**
 * Creates the background for the pan button.
 * @param {DvtContext} context Platform specific context object
 * @param {object} styleMap The object containing style specifications for this component
 * @return {DvtShape} pan button background
 */
DvtButtonLAFUtils.createPanButtonBackground = function(context, styleMap)
{
  var shape = DvtButtonLAFUtils._drawPanButtonBase(context);
  var r = 20;
  var ww = 2 * r;
  var hh = ww;
  var xx = 0;
  var yy = 0;

  var bgColor = DvtStyleUtils.getStyle(styleMap, DvtCSSStyle.BACKGROUND_COLOR, null);
  var borderColor = DvtStyleUtils.getStyle(styleMap, DvtCSSStyle.BORDER_COLOR, null);
  var fillType = DvtStyleUtils.getStyle(styleMap, DvtCSSStyle.FILL_TYPE, null);

  if (fillType == 'solid') {
    shape.setSolidStroke(borderColor);
    shape.setSolidFill(bgColor);
  }
  else {

    var line_rot = 36;// (1.2) * Math.PI;
    var line_colors = ['#8D93A5', '#E0EAEB', borderColor];
    var line_alphas = [1, 1, 1];
    var line_ratios = [0, 125 / 255, 1];
    shape.setStroke(new DvtLinearGradientStroke(line_rot, line_colors, line_alphas, line_ratios, [xx, yy, ww, hh], 1));

    var rot = 90;// (1.5) * Math.PI;
    var fill_colors = [bgColor, bgColor, '#5A83BE', bgColor];
    var fill_alphas = [.90, .10, 0, .70];
    var fill_ratios = [0, 105 / 255, 150 / 255, 1];
    shape.setFill(new DvtLinearGradientFill(rot, fill_colors, fill_alphas, fill_ratios, [xx, yy, ww, hh]));
  }

  return shape;
};


/**
 * Creates pan button underlay
 * @param {DvtContext} context Platform specific context object
 * @param {object} styleMap The object containing style specifications for this component
 * @return {DvtShape} pan button underlay
 */
DvtButtonLAFUtils.createPanButtonUnderlay = function(context, styleMap)
{
  var shape = DvtButtonLAFUtils._drawPanButtonBase(context);
  var color = DvtStyleUtils.getStyle(styleMap, DvtCSSStyle.BACKGROUND_COLOR, null);

  shape.setSolidStroke(color);
  shape.setSolidFill(color);
  return shape;
};


DvtButtonLAFUtils._drawPanButtonBase = function(context) {
  var r = 20;
  var ww = 2 * r;
  var hh = ww;
  var x = r;
  var y = r;
  var xx = 0;
  var yy = 0;

  var cmds = DvtPathUtils.moveTo(x + r, y) +
             DvtPathUtils.quadTo(r + x, DvtButtonLAFUtils.TAN_PI_8 * r + y, DvtButtonLAFUtils.SIN_PI_4 * r + x,
                                 DvtButtonLAFUtils.SIN_PI_4 * r + y) +
             DvtPathUtils.quadTo(DvtButtonLAFUtils.TAN_PI_8 * r + x, r + y, x, r + y) +
             DvtPathUtils.quadTo(-DvtButtonLAFUtils.TAN_PI_8 * r + x, r + y, -DvtButtonLAFUtils.SIN_PI_4 * r + x,
                                 DvtButtonLAFUtils.SIN_PI_4 * r + y) +
             DvtPathUtils.quadTo(-r + x, DvtButtonLAFUtils.TAN_PI_8 * r + y, -r + x, y) +
             DvtPathUtils.quadTo(-r + x, -DvtButtonLAFUtils.TAN_PI_8 * r + y, -DvtButtonLAFUtils.SIN_PI_4 * r + x,
                                 -DvtButtonLAFUtils.SIN_PI_4 * r + y) +
             DvtPathUtils.quadTo(-DvtButtonLAFUtils.TAN_PI_8 * r + x, -r + y, x, -r + y) +
             DvtPathUtils.quadTo(DvtButtonLAFUtils.TAN_PI_8 * r + x, -r + y, DvtButtonLAFUtils.SIN_PI_4 * r + x,
                                 -DvtButtonLAFUtils.SIN_PI_4 * r + y) +
             DvtPathUtils.quadTo(r + x, -DvtButtonLAFUtils.TAN_PI_8 * r + y, r + x, y) + DvtPathUtils.closePath();

  return new DvtPath(context, cmds, 'draw_pan_button');
};


DvtButtonLAFUtils._setGradientBorder = function(shape, ww, hh, xx, yy)
{
  shape.setSolidStroke('#FFFFFF');

  var line_rot = 63;//TODO? (1.35) * Math.PI;
  var line_colors = ['#8D93A5', '#E0EAEB', '#FFFFFF'];
  var line_alphas = [1, 1, 1];
  var line_ratios = [0, 155 / 255, 1];

  shape.setStroke(new DvtLinearGradientStroke(line_rot, line_colors, line_alphas, line_ratios, [xx, yy, ww, hh], 1));
};


/**
 * @private
 * Helper methods that fills button shape and sets a stroke if necessary
 * @param {number} state One of the button states : STATE_ENABLED, DvtButton.STATE_OVER, DvtButton.STATE_DOWN or DvtButton.STATE_DISABLED
 * @param {DvtPath} shape A button shape
 * @param {number} ww Button width
 * @param {number} hh Button height
 * @param {number} xx Button horizontal offset
 * @param {number} yy Button vertical offset
 * @param {boolean} isDropdownItem True if this is a dropdown item (we might give a different treatment to a dropdown item vs a button on control panel)
 * @param {object} styleMap The object containing style specifications for this component
 */
DvtButtonLAFUtils._setButtonColors = function(state, shape, ww, hh, xx, yy, styleMap, isDropdownItem)
{
  var panelDrawerStyle = DvtStyleUtils.getStyle(styleMap, DvtPanZoomControlPanel.CP_PANEL_DRAWER_STYLES, null);
  if (panelDrawerStyle) {
    if (!isDropdownItem || (isDropdownItem && state == DvtButton.STATE_ENABLED))
      shape.setInvisibleFill();
    else if (state == DvtButton.STATE_OVER || state == DvtButton.STATE_DOWN) //dropdown items
      shape.setFill(new DvtSolidFill('#EBECED'));
  }
  else if (styleMap[DvtAbstractComponent.SKIN_NAME] == DvtCSSStyle.SKIN_SKYROS) {
    switch (state) {
      case DvtButton.STATE_OVER:
        shape.setFill(new DvtSolidFill('#FFFFFF', 0.7));
        shape.setStroke(new DvtSolidStroke(DvtStyleUtils.getStyle(styleMap, DvtCSSStyle.BORDER_COLOR, null)));
        break;
      case DvtButton.STATE_DOWN:
        shape.setFill(new DvtSolidFill('#B3C6DB'));
        shape.setStroke(new DvtSolidStroke(DvtStyleUtils.getStyle(styleMap, DvtCSSStyle.BORDER_COLOR, null)));
        break;
      case DvtButton.STATE_DISABLED:
      case DvtButton.STATE_ENABLED:
      default:
        shape.setInvisibleFill();
    }
  }
  else {
    var fill_colors, fill_alphas, fill_ratios;
    var rot = 90;
    switch (state)
    {
      case DvtButton.STATE_DISABLED:
      case DvtButton.STATE_ENABLED:
        var lineThickness = 0.25;
        fill_colors = ['#5B868A', '#FFFFFF', '#FFFFFF', '#5B868A'];
        fill_alphas = [.01, 0, .05, .01];
        fill_ratios = [0, 120 / 255, 130 / 255, 1];
        break;
      case DvtButton.STATE_OVER:
        DvtButtonLAFUtils._setGradientBorder(shape, ww, hh, xx, yy);
        fill_colors = ['#FFFFFF', '#4671B0', '#4671B0', '#FFFFFF'];
        fill_alphas = [.50, .20, .10, .70];
        fill_ratios = [0, 120 / 255, 130 / 255, 1];
        break;
      case DvtButton.STATE_DOWN:
        DvtButtonLAFUtils._setGradientBorder(shape, ww, hh, xx, yy);
        fill_colors = ['#E0EAEB', '#5B868A', '#4671B0'];
        fill_alphas = [.10, .30, .60];
        fill_ratios = [0, 130 / 255, 1];
        break;
      default: break;
    }

    shape.setFill(new DvtLinearGradientFill(rot, fill_colors, fill_alphas, fill_ratios, [xx, yy, ww, hh]));
  }
};


/**
 * @private
 * Helper methods that fills shape and sets a stroke for close button
 * @param {DvtContext} context Platform specific context object
 * @param {number} state One of the button states : STATE_ENABLED, DvtButton.STATE_OVER, DvtButton.STATE_DOWN or DvtButton.STATE_DISABLED
 * @param {DvtPath} shape A button shape
 * @param {number} ww Button width
 * @param {number} hh Button height
 * @param {number} xx Button horizontal offset
 * @param {number} yy Button vertical offset
 * @param {object} styleMap The object containing style specifications for this component
 */
DvtButtonLAFUtils._setCloseButtonColors = function(context, state, shape, ww, hh, xx, yy, styleMap)
{
  var panelDrawerStyle = DvtStyleUtils.getStyle(styleMap, DvtPanZoomControlPanel.CP_PANEL_DRAWER_STYLES, null);
  if (panelDrawerStyle)
    shape.setInvisibleFill();
  else {
    var stroke, fill;
    var fillType = DvtStyleUtils.getStyle(styleMap, DvtCSSStyle.FILL_TYPE, null);
    var borderColor = DvtStyleUtils.getStyle(styleMap, DvtCSSStyle.BORDER_COLOR, null);
    if (fillType == 'solid') {
      var bgColor = DvtStyleUtils.getStyle(styleMap, DvtCSSStyle.BACKGROUND_COLOR, null);
      switch (state) {
        case DvtButton.STATE_ENABLED:
          bgAlpha = DvtStyleUtils.getStyle(styleMap, DvtPanZoomControlPanel.BG_ALPHA, 1);
          strokeAlpha = DvtStyleUtils.getStyle(styleMap, DvtPanZoomControlPanel.FRAME_ROLLOUT_ALPHA, 1);
          break;
        case DvtButton.STATE_DOWN:
        case DvtButton.STATE_OVER:
          bgAlpha = DvtStyleUtils.getStyle(styleMap, DvtPanZoomControlPanel.BG_ROLLOVER_ALPHA, 1);
          strokeAlpha = DvtStyleUtils.getStyle(styleMap, DvtPanZoomControlPanel.FRAME_ROLLOVER_ALPHA, 1);
          break;
        default: break;
      }
      fill = new DvtSolidFill(bgColor, bgAlpha);
      stroke = new DvtSolidStroke(borderColor, strokeAlpha);
    } else {
      var fill_colors, fill_alphas, fill_ratios;
      var rot = 0;
      switch (state) {
        case DvtButton.STATE_ENABLED:
          fill_colors = ['#FFFFFF', '#5B868A', '#5B868A'];
          fill_alphas = [0, .20, .30];
          fill_ratios = [0, 130 / 255, 1];
          break;
        case DvtButton.STATE_OVER:
          fill_colors = ['#FFFFFF', '#FFFFFF', '#4671B0', '#4671B0'];
          fill_alphas = [.10, .20, .10, .60];
          fill_ratios = [0, 120 / 255, 130 / 255, 1];
          break;
        case DvtButton.STATE_DOWN:
          fill_colors = ['#4671B0', '#5B868A', '#5B868A'];
          fill_alphas = [.50, .20, .40];
          fill_ratios = [0, 130 / 255, 1];
          break;
        default: break;
      }
      fill = new DvtLinearGradientFill(rot, fill_colors, fill_alphas, fill_ratios, [xx, yy, ww, hh]);
      stroke = new DvtSolidStroke(borderColor, 1, 0.8);
    }

    shape.setStroke(stroke);
    shape.setFill(fill);
  }
};



DvtButtonLAFUtils._setSliderButtonColors = function(state, shape, ww, hh, xx, yy)
{
  var rot = 90;
  var fill_colors, fill_alphas, fill_ratios;

  switch (state)
  {
    case DvtButton.STATE_ENABLED:
      var lineThickness = 0.25;
      shape.setSolidStroke('#FFFFFF', 1, lineThickness);
      fill_colors = ['#FFFFFF', '#4671B0', '#E0EAEB', '#FFFFFF'];
      fill_alphas = [.60, .30, .30, .80];
      fill_ratios = [0, 125 / 255, 130 / 255, 1];
      break;
    case DvtButton.STATE_OVER:
      DvtButtonLAFUtils._setGradientBorder(shape, ww, hh, xx, yy);
      fill_colors = ['#4671B0', '#FFFFFF', '#FFFFFF', '#FFFFFF'];
      fill_alphas = [.40, .30, .70, 1];
      fill_ratios = [0, 70 / 255, 200 / 255, 1];
      break;
    case DvtButton.STATE_DOWN:
      DvtButtonLAFUtils._setGradientBorder(shape, ww, hh, xx, yy);
      fill_colors = ['#FFFFFF', '#4671B0', '#E0EAEB'];
      fill_alphas = [.60, .50, .80];
      fill_ratios = [0, 130 / 255, 1];
      break;
    default: break;
  }

  shape.setFill(new DvtLinearGradientFill(rot, fill_colors, fill_alphas, fill_ratios, [xx, yy, ww, hh]));
};


DvtButtonLAFUtils.GetButtonPathCommands = function(buttonWidth, buttonHeight, r, bidi) {
  var arPoints;
  if (!bidi) {
    arPoints = ['M', 0, 0,
                'L', buttonWidth - r, 0,
                'A', r, r, 0, 0, 1, buttonWidth, r,
                'L', buttonWidth, buttonHeight - r,
                'A', r, r, 0, 0, 1, buttonWidth - r, buttonHeight,
                'L', 0, buttonHeight];
  }
  else {
    arPoints = ['M', buttonWidth, 0,
                'L', r, 0,
                'A', r, r, 0, 0, 0, 0, r,
                'L', 0, buttonHeight - r,
                'A', r, r, 0, 0, 0, r, buttonHeight,
                'L', buttonWidth, buttonHeight];
  }
  return arPoints;
};


//BUG FIX #10154856: pass in height to show single row of controls in
//horizontal arm of control panel in TMap
/**
 * Creates a shape for the open close button
 * @param {DvtContext} context Platform specific context object
 * @param {number} state button state
 * @param {number} nh height of the open-close button
 * @param {Object} styleMap The object containing style specifications for this component
 * @param {boolean} bL2R true if the reading direction is left-to-right, so that the
 *        control panel is in the top left corner of the view
 * @return {DvtPath} frame for the collapsed control panel
 */
DvtButtonLAFUtils._drawOpenCloseButtonHelper = function(context, state, nh, styleMap, bR2L)
{
  if (!nh)
    nh = 47;

  var xx = 0;
  var yy = 0;
  var r = parseInt(DvtStyleUtils.getStyle(styleMap, DvtCSSStyle.BORDER_RADIUS, 0));
  var buttonWidth = DvtStyleUtils.getStyle(styleMap, DvtPanZoomControlPanel.CP_OPEN_CLOSE_BUTTON_WIDTH, 0);
  var buttonHeight = Math.max(nh, DvtStyleUtils.getStyle(styleMap, DvtPanZoomControlPanel.CP_BUTTON_HEIGHT, nh));

  var arPoints = DvtButtonLAFUtils.GetButtonPathCommands(buttonWidth, buttonHeight, r, bR2L);
  var shape = new DvtPath(context, arPoints);
  DvtButtonLAFUtils._setCloseButtonColors(context, state, shape, buttonWidth, buttonHeight, xx, yy, styleMap);

  return shape;
};


DvtButtonLAFUtils._drawBaseButton = function(context, state, r, ww, hh, styleMap)
{
  var shape = DvtButtonLAFUtils._createBaseButtonShape(context, state, r, ww, hh, styleMap);
  DvtButtonLAFUtils._setButtonColors(state, shape, ww, hh + (r * 2), 0, 0, styleMap);

  return shape;
};

DvtButtonLAFUtils._createBaseButtonShape = function(context, state, r, ww, hh, styleMap) {
  if (styleMap[DvtAbstractComponent.SKIN_NAME] == DvtCSSStyle.SKIN_SKYROS) {
    return new DvtRect(context, 0, 0, ww, hh);
  } else {
    ww = ww - (2 * r);
    hh = hh - (2 * r);
    var x = ww + r;
    var y = hh + r;

    var cmds = DvtPathUtils.moveTo(x + r, y) + DvtPathUtils.quadTo(r + x, DvtButtonLAFUtils.TAN_PI_8 * r + y, DvtButtonLAFUtils.SIN_PI_4 * r + x, DvtButtonLAFUtils.SIN_PI_4 * r + y) + DvtPathUtils.quadTo(DvtButtonLAFUtils.TAN_PI_8 * r + x, r + y, x, r + y) + DvtPathUtils.lineTo(x, y + r) + DvtPathUtils.lineTo(x - ww, r + y);
    x = x - ww;
    y = y;

    cmds += DvtPathUtils.quadTo(- DvtButtonLAFUtils.TAN_PI_8 * r + x, r + y, - DvtButtonLAFUtils.SIN_PI_4 * r + x, DvtButtonLAFUtils.SIN_PI_4 * r + y) + DvtPathUtils.quadTo(- r + x, DvtButtonLAFUtils.TAN_PI_8 * r + y, - r + x, y) + DvtPathUtils.lineTo(x - r, y) + DvtPathUtils.lineTo(x - r, y - hh);
    x = x;
    y = y - hh;

    cmds += DvtPathUtils.quadTo(- r + x, - DvtButtonLAFUtils.TAN_PI_8 * r + y, - DvtButtonLAFUtils.SIN_PI_4 * r + x, - DvtButtonLAFUtils.SIN_PI_4 * r + y) + DvtPathUtils.quadTo(- DvtButtonLAFUtils.TAN_PI_8 * r + x, - r + y, x, - r + y) + DvtPathUtils.lineTo(x, - r + y) + DvtPathUtils.lineTo(x + ww, - r + y);
    x = x + ww;
    y = y;

    cmds += DvtPathUtils.quadTo(DvtButtonLAFUtils.TAN_PI_8 * r + x, - r + y, DvtButtonLAFUtils.SIN_PI_4 * r + x, - DvtButtonLAFUtils.SIN_PI_4 * r + y) + DvtPathUtils.quadTo(r + x, - DvtButtonLAFUtils.TAN_PI_8 * r + y, r + x, y) + DvtPathUtils.lineTo(x + r, y + hh) + DvtPathUtils.closePath();
    return new DvtPath(context, cmds);
  }
};


/**
 * Draw a cross line on the zoom slider.
 *
 * @param s sprite to draw into
 * @param xx x coord for start of line
 * @param yy y coord for line
 * @param ww width of line
 */
DvtButtonLAFUtils.drawZoomSliderCrossLine = function(context, s, xx, yy, ww) {
  // Line Style & FILL
  lineStyle(1, '#656D81', 1, true);

  var cmds = DvtPathUtils.moveTo(xx, yy) + DvtPathUtils.lineTo(xx + ww, yy);

  /// white
  lineStyle(1, '#FFFFFF', 1, true);

  cmds += DvtPathUtils.moveTo(xx, yy + 1) + DvtPathUtils.lineTo(xx + ww, yy + 1);
};


/**
 * Draw the background for the dropdown from the layout or panel card sync buttons.
 *
 * @param s sprite to draw into
 * @param ww width of dropdown
 * @param hh height of dropdown
 * @param {object} styleMap The object containing style specifications for this component
 */
DvtButtonLAFUtils.drawDropdownShape = function(context, ww, hh, styleMap) {
  var r = DvtStyleUtils.getStyle(styleMap, 'radius', 0);
  ww -= 2 * r;
  hh -= r;
  var x = ww + r;
  var y = (hh);

  var cmds = DvtPathUtils.moveTo(x + r, y) + DvtPathUtils.quadTo(r + x, DvtButtonLAFUtils.TAN_PI_8 * r + y, DvtButtonLAFUtils.SIN_PI_4 * r + x, DvtButtonLAFUtils.SIN_PI_4 * r + y) + DvtPathUtils.quadTo(DvtButtonLAFUtils.TAN_PI_8 * r + x, r + y, x, r + y) + DvtPathUtils.lineTo(x, r + y) + DvtPathUtils.lineTo(x - ww, r + y);

  x = x - ww;
  y = y;
  cmds += DvtPathUtils.quadTo(- DvtButtonLAFUtils.TAN_PI_8 * r + x, r + y, - DvtButtonLAFUtils.SIN_PI_4 * r + x, DvtButtonLAFUtils.SIN_PI_4 * r + y) + DvtPathUtils.quadTo(- r + x, DvtButtonLAFUtils.TAN_PI_8 * r + y, - r + x, y) + DvtPathUtils.lineTo(- r + x, y) + DvtPathUtils.lineTo(- r + x, y - hh);

  x = x;
  y = y - hh;

  cmds += DvtPathUtils.lineTo(x + ww + r, y) + DvtPathUtils.lineTo(x + ww + r, y + hh) + DvtPathUtils.closePath();

  var shape = new DvtPath(context, cmds);
  return shape;
};


/**
  * Apply a drop shadow filter to the given shape.
  *
  * @param {DvtDisplayable}  t shape to which drop shadow filter is to be applied.
  */
DvtButtonLAFUtils.dropShadowFilter = function(context, t)
{
  var distance = 7;
  var angleInDegrees = 45;
  var color = '#5A83BE';
  var alpha = 0.9;
  var blurX = 14;
  var blurY = 14;
  var strength = 1;
  var quality = 3;
  var inner = false;
  var knockout = false;
  var hideObject = false;

  var filter = new DvtDropShadowFilter(distance, angleInDegrees, color, alpha, blurX, blurY, strength, quality, inner, knockout, hideObject);
  var filterArray = [];
  filterArray.push(filter);
  t.filters = filterArray;
};

/*
 * Temporarily add the display object to the stage to get dimensions.
 * Remove it from stage after done
 */
DvtButtonLAFUtils._getDimForced = function(context, obj) {
  //NOTE: if obj is button, getDimensions on its 1st child
  if (obj instanceof DvtButton) {
    obj = obj.getChildAt(0);
  }
  return DvtDisplayableUtils._getDimForced(context, obj);
};


/**
 * Apply Style on button object
 * @public
 * @param {DvtPath} dispObj button path object
 * @param {buttonStyle} DvtCSSStyle  Style object
 */
DvtButtonLAFUtils.parseStyle = function(dispObj, buttonStyle) {
  var fillType = DvtButtonLAFUtils.DEFAULT_FILL_TYPE;
  var borderColor = DvtButtonLAFUtils.DEFAULT_BORDER_COLOR;
  var backgroundColor = DvtButtonLAFUtils.DEFAULT_MID_COLOR;
  var background;

  if (buttonStyle) {
    if (buttonStyle.getStyle(DvtCSSStyle.FILL_TYPE)) {
      fillType = buttonStyle.getStyle(DvtCSSStyle.FILL_TYPE);
    }
    if (buttonStyle.getStyle(DvtCSSStyle.BORDER_COLOR)) {
      borderColor = buttonStyle.getStyle(DvtCSSStyle.BORDER_COLOR);
    }
    if (buttonStyle.getStyle(DvtCSSStyle.BACKGROUND_COLOR)) {
      backgroundColor = buttonStyle.getStyle(DvtCSSStyle.BACKGROUND_COLOR);
    }
    if (buttonStyle.getStyle(DvtCSSStyle.BACKGROUND)) {
      background = buttonStyle.getStyle(DvtCSSStyle.BACKGROUND);
    }
  }

  var stroke = new DvtSolidStroke(borderColor);

  var fill;
  if (fillType == 'solid') {
    fill = new DvtSolidFill(backgroundColor);
  }
  else {
    var fill_colors;
    var fill_alphas;
    var fill_ratios;
    var degree;
    if (background && background.indexOf('linear-gradient') >= 0) {
      var linearGradient = DvtGradientParser.parseCSSGradient(background);
      if (linearGradient) {
        degree = linearGradient.getAngle();
        fill_colors = linearGradient.getColors();
        fill_alphas = linearGradient.getAlphas();
        fill_ratios = linearGradient.getRatios();
      }
    } else {
      var midColor = backgroundColor;
      var endColor = DvtButtonLAFUtils.DEFAULT_END_COLOR;
      if (midColor != DvtButtonLAFUtils.DEFAULT_MID_COLOR) {
        endColor = DvtColorUtils.inferColor(DvtButtonLAFUtils.DEFAULT_MID_COLOR, DvtButtonLAFUtils.DEFAULT_END_COLOR, midColor);
      }
      fill_colors = [midColor, endColor];
      fill_alphas = [.60, .80];
      fill_ratios = [0, 1];
      degree = -270;
    }
    fill = new DvtLinearGradientFill(degree, fill_colors, fill_alphas, fill_ratios);
  }
  dispObj.setFill(fill);
  dispObj.setStroke(stroke);
};
/**
 * Default values and utility functions for DvtCommonLegend versioning.
 * @class
 */
var DvtCommonLegendDefaults = new Object();

DvtObj.createSubclass(DvtCommonLegendDefaults, DvtObj, 'DvtCommonLegendDefaults');


/**
 * Contains overrides for the 'alta' skin.
 */
DvtCommonLegendDefaults.SKIN_ALTA = {
  'rowColGap': 6,
  'separatorGap': 7,
  'indicatorSize': 16,
  'buttonSize': 12,
  'dwn': '#0572CE',
  'ovr': '#5D5D5D',
  'ena': '#7E7F80',
  'separatorColor': '#D9DFE3'
};


/**
 * Contains legend defaults.
 */
DvtCommonLegendDefaults.SKIN_SKYROS = {
  'dwn': '#202F48',
  'ovr': '#184DD8',
  'ena': '#003D5B'
};


/**
 * Contains legend defaults.
 */
DvtCommonLegendDefaults.DEFAULT = {
  'rowColGap': 4,
  'separatorGap': 4,
  'indicatorSize': 11,
  'buttonSize': 11,
  'dwn': '#000000',
  'ovr': '#245EDD',
  'ena': '#495D7C',
  'separatorColor': '#ADB6C7'
};


/**
 * Combines the user options with the defaults for the specified version.  Returns the
 * combined options object.  This object will contain internal attribute values and
 * should be accessed in internal code only.
 * @param {object} userOptions The object containing options specifications for this component.
 * @return {object} The combined options object.
 */
DvtCommonLegendDefaults.calcOptions = function(userOptions) {
  var defaults = DvtCommonLegendDefaults._getDefaults(userOptions);

  // Use defaults if no overrides specified
  if (!userOptions)
    return defaults;
  else // Merge the options object with the defaults
    return DvtJSONUtils.merge(userOptions, defaults);
};


/**
 * Returns the default options object for the specified version of the component.
 * @param {object} userOptions The object containing options specifications for this component.
 * @private
 */
DvtCommonLegendDefaults._getDefaults = function(userOptions) {
  var defaults = null;
  if (userOptions && userOptions['skin'] === 'skyros')
    defaults = DvtJSONUtils.merge(DvtCommonLegendDefaults.SKIN_SKYROS, DvtCommonLegendDefaults.DEFAULT);
  else if (userOptions && userOptions['skin'] === 'alta')
    defaults = DvtJSONUtils.merge(DvtCommonLegendDefaults.SKIN_ALTA, DvtCommonLegendDefaults.DEFAULT);
  else
    defaults = DvtJSONUtils.clone(DvtCommonLegendDefaults.DEFAULT);
  return defaults;
};
/**
 *  @constructor
 *  Creates a legend component
 *  @class DvtCommonLegend
 *  @param {DvtContext} context The context object
 *  @param {ww} The width of the viewport
 *  @param {hh} The height of the viewport
 */
var DvtCommonLegend = function(context, w, h, images, styleMap) {
  this.Init(context, w, h, images, styleMap);
};

DvtObj.createSubclass(DvtCommonLegend, DvtContainer, 'DvtCommonLegend');

DvtCommonLegend.LEGEND_DISCLOSED_KEY = 'isLegendDisclosed';
DvtCommonLegend.SKIN_NAME = 'skin';


/**
 * Helper method called by the constructor to initialize this object
 * @param {DvtContext} context The platform specific context object
 * @param {number} w The width of the legend
 * @param {number} h The height of the legend
 * @param {object} styleMap A map containing the skin specific styling attributes for this legend
 */
DvtCommonLegend.prototype.Init = function(context, w, h, images, styleMap) {
  DvtCommonLegend.superclass.Init.call(this, context, null, w, h); // TODO for JRAMANAT: Passing w,h height is wrong.

  this._isBiDi = DvtAgent.isRightToLeft();

  this._viewportWidth = w;
  this._width = w;
  this._height = h;

  this._attrLookUp = new Object();
  this._hideAttrsLookUp = new Object();

  this._associations = new Array();
  this._addSeparators = false;
  this._separators = [];

  this._showHideEnabled = false;
  this._rollOverEnabled = false;

  this._hidden = [];

  this._images = images;
  this._styleMap = styleMap;
  this._isWordWrap = false;
};

DvtCommonLegend.prototype.GetImages = function() {
  return this._images;
};

DvtCommonLegend.prototype.showHideEnabled = function() {
  return this._showHideEnabled;
};

DvtCommonLegend.prototype.setShowHideEnabled = function(showHideEnabled) {
  this._showHideEnabled = showHideEnabled;
};


/**
 * @param hiddenAttrGroups array of hidden attribute items
 */
DvtCommonLegend.prototype.setHidden = function(hidden) {
  if (hidden) {
    this._hidden = hidden;
  }
};

DvtCommonLegend.prototype.rollOverEnabled = function() {
  return this._rollOverEnabled;
};

DvtCommonLegend.prototype.setRollOverEnabled = function(rollOverEnabled) {
  this._rollOverEnabled = rollOverEnabled;
};


/**
 * Sets whether the text inside the legend can be wrapped
 * @param {Boolean} bWordWrap True if the text in the legend needs to wrap
 * @private
 */
DvtCommonLegend.prototype._setWordWrap = function(bWordWrap) {
  this._isWordWrap = bWordWrap;
};


/**
 * Returns whether the legend text is wrappable
 * @return {Boolean}  Return true if the text in the legend can be wrapped
 */
DvtCommonLegend.prototype.isWordWrap = function() {
  return this._isWordWrap;
};


/**
 *  @param {String} attrGroupId     The attributeGroupId of the group of legend items to retrieve
 *  @return {Array}                Return an array of the displayable of the legend items in the
 *                                  atrributeGroup
 *
 */
DvtCommonLegend.prototype.getAttributeGroupItems = function(attrGroupId) {
  return this._attrLookUp[attrGroupId];
};

DvtCommonLegend.prototype.addAttrLookup = function(attributeGroupId, itemId, itemContainer) {
  if (this._attrLookUp[attributeGroupId] == null)
    this._attrLookUp[attributeGroupId] = new Object();
  this._attrLookUp[attributeGroupId][itemId] = itemContainer;
};

DvtCommonLegend.prototype.addHideAttrsLookup = function(hideAttrs, itemContainer) {
  if (!this._hideAttrsLookUp[hideAttrs])
    this._hideAttrsLookUp[hideAttrs] = itemContainer;
};

DvtCommonLegend.prototype.addAssociation = function(legendRow) {
  this._associations.push(legendRow);
};


/**
 * Set the xml definition of the content of the legend.  The legend will create
 *  new content based on the definition.
 *
 *  @param {DvtDomXmlNode} xml   The xml node that contain definition of the legend's content
 *
 */
DvtCommonLegend.prototype.setXML = function(xml) {
  this._legendNode = xml;
};


/**
 * Set the JSON object of the content of the legend.  The legend will create
 *  new content based on the definition.
 *
 *  @param {object} json   The JSON object that contain definition of the legend's content
 *  @public
 */
DvtCommonLegend.prototype.setJSON = function(json) {
  if (json)
    this._legendJSON = json;
};

DvtCommonLegend.prototype.isDisclosed = function() {
  return this._isDisclosed;
};

DvtCommonLegend.prototype.setDisclosed = function(bDisclosed) {
  this._isDisclosed = bDisclosed;
};

DvtCommonLegend.prototype._parseMarker = function(legendRow, markerNode) {
  var url = markerNode.getAttr('url');
  var shape = markerNode.getAttr('shapeType');
  var color = markerNode.getAttr('color');
  var pattern = markerNode.getAttr('pattern');
  var opacity = markerNode.getAttr('opacity');
  if (opacity)
    opacity = parseFloat(opacity);

  legendRow.setMarker(url, shape, color, pattern, opacity);
};


/**
 * Parse Legend Marker JSON object
 * @param {DvtCommonLegendRow} legendRow  Common Legend row
 * @param {object}  markerNode  Marker JSON object
 * @private
 */
DvtCommonLegend.prototype._parseMarkerJSON = function(legendRow, markerNode) {
  var url = markerNode['url'];
  var shape = markerNode['shapeType'];
  var color = markerNode['color'];
  var pattern = markerNode['pattern'];
  var opacity = markerNode['opacity'];
  if (opacity)
    opacity = parseFloat(opacity);

  legendRow.setMarker(url, shape, color, pattern, opacity);
};

DvtCommonLegend.prototype._parseItem = function(itemNode) {
  var prop = new Object();
  prop['itemId'] = itemNode.getAttr('itemId');
  prop['attributeGroupId'] = itemNode.getAttr('attributeGroupId');
  prop['hideAttrs'] = itemNode.getAttr('hideAttrs');

  var legendListItem = new DvtCommonLegendRow(this.getCtx(), this, prop, this._legendItemStyle, this._styleMap);

  var itemChildren = itemNode.getChildNodes();
  for (var i = 0; i < itemChildren.length; i++) {
    if (itemChildren[i].getName() == 'marker') {
      this._parseMarker(legendListItem, itemChildren[i]);
    }
    else if (itemChildren[i].getName() == 'text') {
      legendListItem.setText(itemChildren[i].getAttr('value'));
    }
  }
  return legendListItem;
};


/**
 * Parse Legend Item JSON object
 * @param {object} itemNode  Item JSON object
 * @return {DvtCommonLegendRow}  Common legend row object
 * @private
 */
DvtCommonLegend.prototype._parseItemJSON = function(itemNode) {
  var prop = new Object();
  prop['itemId'] = itemNode['itemId'];
  prop['attributeGroupId'] = itemNode['attributeGroupId'];
  prop['hideAttrs'] = itemNode['hideAttrs'];

  var legendListItem = new DvtCommonLegendRow(this.getCtx(), this, prop, this._legendItemStyle, this._styleMap);

  this._parseMarkerJSON(legendListItem, itemNode['marker']);

  var textObj = itemNode['text'];
  legendListItem.setText(textObj['value']);

  return legendListItem;
};


/**
 * Renders a legend section
 * @param {DvtXmlNode} legendSectionNode The xml node containing legend section data
 * @param {DvtContainer} parent The parent to add this legend section to
 * @param {DvtRectangle} availSpace The available space left to render this legend section
 * @param {boolean} isBiDi Whether this legend section should be rendered right to left
 * @private
 */
DvtCommonLegend.prototype._renderLegendSection = function(legendSectionNode, parent, availSpace, isBiDi) {
  var sectionTitle = legendSectionNode.getAttr('label');
  var section = new DvtCommonLegendSection(this.getCtx(), this, sectionTitle, this._sectionTitleStyle, this._styleMap);
  section.render(parent, availSpace, isBiDi);

  var childNodes = legendSectionNode.getChildNodes();
  if (childNodes) {
    for (var i = 0; i < childNodes.length; i++) {
      var childNode = childNodes[i];
      var legendListItem;
      if (childNode.getName() == 'item') {
        legendListItem = this._parseItem(childNode);
      }
      else if (childNode.getName() == 'text') {
        legendListItem = new DvtCommonLegendRow(this.getCtx(), this, null, this._legendItemStyle, this._styleMap);
        legendListItem.setText(childNode.getAttr('value'));
      }
      if (legendListItem) {
        legendListItem.render(section, availSpace, isBiDi);
        section.addItem(legendListItem);
      }
    }
  }
  parent.addChild(section);
  // remove the space added by the last legend row and add a gap for the next legend section
  availSpace.y = availSpace.y - this._styleMap['rowColGap'] + this._styleMap['rowColGap'];
  return section;
};


/**
 * Renders a legend section
 * @param {object} legendSectionNode The json node containing legend section data
 * @param {DvtContainer} parent The parent to add this legend section to
 * @param {DvtRectangle} availSpace The available space left to render this legend section
 * @param {boolean} isBiDi Whether this legend section should be rendered right to left
 * @return {DvtCommonLegendSection}  Common legend section object
 * @private
 */
DvtCommonLegend.prototype._renderLegendSectionJSON = function(legendSectionNode, parent, availSpace, isBiDi) {
  var sectionTitle = legendSectionNode['label'];
  var section = new DvtCommonLegendSection(this.getCtx(), this, sectionTitle, this._sectionTitleStyle, this._styleMap);
  section.render(parent, availSpace, isBiDi);

  var legendItems = legendSectionNode['item'];
  var legendListItem;
  if (legendItems) {
    for (var i = 0; i < legendItems.length; i++) {
      legendListItem = this._parseItemJSON(legendItems[i]);
      if (legendListItem) {
        legendListItem.render(section, availSpace, isBiDi);
        section.addItem(legendListItem);
      }
    }
  }
  var textItems = legendSectionNode['text'];
  if (textItems) {
    for (var i = 0; i < textItems.length; i++) {
      legendListItem = new DvtCommonLegendRow(this.getCtx(), this, null, this._legendItemStyle, this._styleMap);
      legendListItem.setText(textItems[i]['value']);
      if (legendListItem) {
        legendListItem.render(section, availSpace, isBiDi);
        section.addItem(legendListItem);
      }
    }
  }

  parent.addChild(section);
  // remove the space added by the last legend row and add a gap for the next legend section
  availSpace.y = availSpace.y - this._styleMap['rowColGap'] + this._styleMap['rowColGap'];
  return section;
};


/**
 * Renders a legend section group
 * @param {DvtXmlNode} legendSectionNode The xml node containing legend section group data
 * @param {DvtContainer} parent The parent to add this legend section group to
 * @param {DvtRectangle} availSpace The available space left to render this legend section group
 * @param {boolean} isBiDi Whether this legend section group should be rendered right to left
 * @private
 */
DvtCommonLegend.prototype._renderLegendSectionGroup = function(legendSectionNode, parent, availSpace, isBiDi) {
  var sectionTitle = legendSectionNode.getAttr('label');
  var disclosed = legendSectionNode.getAttr('disclosed') == 'true';
  var expandTooltip = legendSectionNode.getAttr('expandTooltip');
  var collapseTooltip = legendSectionNode.getAttr('collapseTooltip');
  var sectionGroup = new DvtCommonLegendSectionGroup(this.getCtx(), this, sectionTitle, this._sectionGroupTitleStyle,
      collapseTooltip, expandTooltip, disclosed, this._styleMap);
  sectionGroup.render(parent, availSpace, isBiDi);
  var bidiMultiplier = isBiDi ? -1 : 1;
  var childNodes = legendSectionNode.getChildNodes();
  if (childNodes) {
    for (var i = 0; i < childNodes.length; i++) {
      var childNode = childNodes[i];
      if (childNode.getName() == 'section') {
        // indent legend sub section
        availSpace.x = availSpace.x + (this._styleMap['buttonSize'] + this._styleMap['rowColGap']) * bidiMultiplier;
        var section = this._renderLegendSection(childNode, sectionGroup, availSpace, isBiDi);
        availSpace.x = availSpace.x - (this._styleMap['buttonSize'] + this._styleMap['rowColGap']) * bidiMultiplier;
        sectionGroup.addItem(section);
      }
    }
  }
  // remove the space added by the last legend row and add a gap for the next legend section
  availSpace.y = availSpace.y - this._styleMap['rowColGap'] + this._styleMap['rowColGap'];
  return sectionGroup;
};


/**
 * Renders a legend section group
 * @param {object} legendSectionNode The JSON object containing legend section group data
 * @param {DvtContainer} parent The parent to add this legend section group to
 * @param {DvtRectangle} availSpace The available space left to render this legend section group
 * @param {boolean} isBiDi Whether this legend section group should be rendered right to left
 * @return {DvtCommonLegendSectionGroup}  common legend section group object
 * @private
 */
DvtCommonLegend.prototype._renderLegendSectionGroupJSON = function(legendSectionNode, parent, availSpace, isBiDi) {
  var sectionTitle = legendSectionNode['label'];
  var disclosed = legendSectionNode['disclosed'] == 'true';
  var expandTooltip = legendSectionNode['expandTooltip'];
  var collapseTooltip = legendSectionNode['collapseTooltip'];
  var sectionGroup = new DvtCommonLegendSectionGroup(this.getCtx(), this, sectionTitle, this._sectionGroupTitleStyle,
      collapseTooltip, expandTooltip, disclosed, this._styleMap);
  sectionGroup.render(parent, availSpace, isBiDi);
  var bidiMultiplier = isBiDi ? -1 : 1;
  var sections = legendSectionNode['section'];
  if (sections) {
    for (var i = 0; i < sections.length; i++) {
      // indent legend sub section
      availSpace.x = availSpace.x + (this._styleMap['buttonSize'] + this._styleMap['rowColGap']) * bidiMultiplier;
      var section = this._renderLegendSectionJSON(sections[i], sectionGroup, availSpace, isBiDi);
      availSpace.x = availSpace.x - (this._styleMap['buttonSize'] + this._styleMap['rowColGap']) * bidiMultiplier;
      sectionGroup.addItem(section);
    }
  }
  // remove the space added by the last legend row and add a gap for the next legend section
  availSpace.y = availSpace.y - this._styleMap['rowColGap'] + this._styleMap['rowColGap'];
  return sectionGroup;
};


/**
 * Renders a separator between legend sections
 * @param {DvtContainer} container The parent to add this separator to
 * @param {DvtRectangle} availSpace The available space left to render this separator
 * @return {DvtDisplayable} The separator
 * @private
 */
DvtCommonLegend.prototype._renderSeparator = function(container, availSpace) {
  // add separator gap
  availSpace.y = availSpace.y - this._styleMap['rowColGap'] + this._styleMap['separatorGap'];
  var line1 = new DvtLine(this.getCtx(), availSpace.x, availSpace.y, availSpace.x, availSpace.y);
  line1.setPixelHinting(true);
  line1.setSolidStroke(this._styleMap['separatorColor']);
  this._separators.push(line1);
  var separator;
  // style separator by skin
  if (this._styleMap['skin'] == DvtCSSStyle.SKIN_ALTA) {
    separator = line1;
  } else {
    availSpace.y++;
    var line2 = new DvtLine(this.getCtx(), availSpace.x, availSpace.y, availSpace.x, availSpace.y);
    line2.setSolidStroke('#FFFFFF');
    line2.setPixelHinting(true);
    separator = new DvtContainer(this.getCtx());
    separator.addChild(line1);
    separator.addChild(line2);
    this._separators.push(line2);
  }
  container.addChild(separator);
  availSpace.y = availSpace.y + this._styleMap['separatorGap'];
  return separator;
};


/**
 * Update after collapsing/expanding a section group
 */
DvtCommonLegend.prototype.update = function(updatedSection, diff) {
  var idx = this._children.indexOf(updatedSection);
  idx += 1;
  // reposition children
  while (idx < this._children.length) {
    var oldTransY = this._children[idx].getTranslateY();
    this._children[idx].setTranslateY(oldTransY + diff);
    idx++;
  }

  this._dim.h += diff;
  this.FireListener(new DvtResizeEvent(this._dim.w, this._dim.h, 0, 0));
};

DvtCommonLegend.prototype._processLegendStyleNode = function() {
  var legendStyleNode = this._legendNode.getElementsByTagName('style');
  if (legendStyleNode) {
    var childNodes = legendStyleNode[0].getChildNodes();
    if (childNodes) {
      for (var i = 0; i < childNodes.length; i++) {
        var childNode = childNodes[i];
        if (childNode.getName() == 'legend-title')
          this._legendTitleStyle = childNode.getTextContent();
        else if (childNode.getName() == 'sectionGroup-title')
          this._sectionGroupTitleStyle = childNode.getTextContent();
        else if (childNode.getName() == 'section-title')
          this._sectionTitleStyle = childNode.getTextContent();
        else if (childNode.getName() == 'legend-item')
          this._legendItemStyle = childNode.getTextContent();
      }
    }
  }
};


/**
 * Parse legend style JSON object
 */
DvtCommonLegend.prototype._processLegendStyleNodeJSON = function() {
  var legendStyleNode = this._legendJSON['style'];
  if (legendStyleNode) {
    this._legendTitleStyle = legendStyleNode['legend-title'];
    this._sectionGroupTitleStyle = legendStyleNode['sectionGroup-title'];
    this._sectionTitleStyle = legendStyleNode['section-title'];
    this._legendItemStyle = legendStyleNode['legend-item'];
  }
};

DvtCommonLegend.prototype.getEventManager = function() {
  return this._eventHandler;
};


/**
 * Creates and adds the legend title and sections to the legend.
 */
DvtCommonLegend.prototype.render = function() {
  if (this._legendNode) {
    this._renderXML();
  } else {
    this._renderJSON();
  }
};


/**
 * Render common legend using XML data
 */
DvtCommonLegend.prototype._renderXML = function() {
  this._eventHandler = new DvtCommonLegendEventManager(this.getCtx(), this._legendEventHandler, this);
  this._title = this._legendNode.getAttr('label');
  this._isDisclosed = this._legendNode.getAttr('disclosed') == 'true';
  this._processLegendStyleNode();
  var noWrap = this._legendNode.getAttr('noWrap');
  if (noWrap)
    this._setWordWrap(noWrap == 'false');

  var availSpace;
  if (this._isBiDi) {
    availSpace = new DvtRectangle(this._width, 0, this._width, this._height);
  } else {
    availSpace = new DvtRectangle(0, 0, this._width, this._height);
  }

  this._legendContent = new DvtContainer(this.getCtx());
  this.addChild(this._legendContent);

  if (this._title) {
    var legendTitle;
    if (this.isWordWrap())
      legendTitle = new DvtMultilineText(this.getCtx());
    else
      legendTitle = new DvtOutputText(this.getCtx());

    var fitWidth = availSpace.w - availSpace.x;
    if (this._isBiDi)
      fitWidth = availSpace.w - fitWidth;
    if (fitWidth > 0) {
      if (this._isBiDi)
        legendTitle.alignRight();
      if (this._legendTitleStyle)
        legendTitle.setCSSStyle(new DvtCSSStyle(this._legendTitleStyle));
      legendTitle.setTextString(this._title);
      legendTitle.setX(availSpace.x);
      legendTitle.setY(availSpace.y);
      DvtTextUtils.fitText(legendTitle, fitWidth, availSpace.h, this._legendContent);

      // add text tooltip as needed
      if (legendTitle.isTruncated())
        this._eventHandler.associate(legendTitle, new DvtSimpleObjPeer(this._title));

      // adjust availSpace as needed
      var titleDim = legendTitle.getDimensions();
      if (titleDim && titleDim.h > 0)
        availSpace.y = availSpace.y + titleDim.h + this._styleMap['rowColGap'];
    }
  }

  this._children = [];

  var childNodes = this._legendNode.getChildNodes();
  if (childNodes) {
    for (var i = 0; i < childNodes.length; i++) {
      var childNode = childNodes[i];
      // see if separators should be rendered
      if (childNode.getName() == 'separatorDef') {
        var separators = childNode.getChildNodes();
        if (separators.length > 0 && separators[0].getName() == 'separator') {
          this._addSeparators = true;
          break;
        }
      }
    }
    for (var i = 0; i < childNodes.length; i++) {
      var childNode = childNodes[i];
      availSpace.x = this._isBiDi ? this._width : 0;
      if (childNode.getName() == 'sectionGroup') {
        if (this._addSeparators && (this._title || i > 1))
          this._children.push(this._renderSeparator(this._legendContent, availSpace));
        this._children.push(this._renderLegendSectionGroup(childNode, this._legendContent, availSpace, this._isBiDi));
      }
      else if (childNode.getName() == 'section') {
        if (this._addSeparators && (this._title || i > 1))
          this._children.push(this._renderSeparator(this._legendContent, availSpace));
        this._children.push(this._renderLegendSection(childNode, this._legendContent, availSpace, this._isBiDi));
      }
    }
  }

  // cache legend dimensions so we can keep track of collapsed/expanded sections
  this._dim = this.getDimensions();
  for (var j = 0; j < this._separators.length; j++) {
    if (this._isBiDi) {
      this._dim.x = this._separators[j].getX1() - this._dim.w;
      this._separators[j].setX2(this._dim.x);
    } else {
      this._separators[j].setX2(this._dim.w + this._separators[j].getX1());
    }
  }

  this._eventHandler.addListeners(this);

  for (var i = 0; i < this._associations.length; i++) {
    var legendRow = this._associations[i];
    this._eventHandler.associate(legendRow, legendRow);
    // process hidden items
    if (this._hidden) {
      if (DvtArrayUtils.getIndex(this._hidden, legendRow.getAttributeGroup() + ':' + legendRow.getItemId()) > -1)
        legendRow.filterRow();
    }
  }

  if (this._isBiDi)
    this._legendContent.setTranslateX(-this._dim.x);
};


/**
 * Render common legend using json data
 */
DvtCommonLegend.prototype._renderJSON = function() {
  this._eventHandler = new DvtCommonLegendEventManager(this.getCtx(), this._legendEventHandler, this);
  this._title = this._legendJSON['label'];
  this._isDisclosed = this._legendJSON['disclosed'] == 'true';
  this._processLegendStyleNodeJSON();
  var noWrap = this._legendJSON['noWrap'];
  if (noWrap)
    this._setWordWrap(noWrap == 'false');

  var availSpace;
  if (this._isBiDi) {
    availSpace = new DvtRectangle(this._width, 0, this._width, this._height);
  } else {
    availSpace = new DvtRectangle(0, 0, this._width, this._height);
  }

  this._legendContent = new DvtContainer(this.getCtx());
  this.addChild(this._legendContent);

  if (this._title) {
    var legendTitle;
    if (this.isWordWrap())
      legendTitle = new DvtMultilineText(this.getCtx());
    else
      legendTitle = new DvtOutputText(this.getCtx());

    var fitWidth = availSpace.w - availSpace.x;
    if (this._isBiDi)
      fitWidth = availSpace.w - fitWidth;
    if (fitWidth > 0) {
      if (this._isBiDi)
        legendTitle.alignRight();
      if (this._legendTitleStyle)
        legendTitle.setCSSStyle(new DvtCSSStyle(this._legendTitleStyle));
      legendTitle.setTextString(this._title);
      legendTitle.setX(availSpace.x);
      legendTitle.setY(availSpace.y);
      DvtTextUtils.fitText(legendTitle, fitWidth, availSpace.h, this._legendContent);

      // add text tooltip as needed
      if (legendTitle.isTruncated())
        this._eventHandler.associate(legendTitle, new DvtSimpleObjPeer(this._title));

      // adjust availSpace as needed
      var titleDim = legendTitle.getDimensions();
      if (titleDim && titleDim.h > 0)
        availSpace.y = availSpace.y + titleDim.h + this._styleMap['rowColGap'];
    }
  }

  this._children = [];

  var separatorDefs = this._legendJSON['separatorDef'];
  if (separatorDefs) {
    for (var i = 0; i < separatorDefs.length; i++) {
      var separators = separatorDefs[i]['separator'];
      if (separators && separators.length > 0) {
        this._addSeparators = true;
        break;
      }
    }
  }
  var sectionGroups = this._legendJSON['sectionGroup'];
  availSpace.x = this._isBiDi ? this._width : 0;
  if (sectionGroups) {
    for (var i = 0; i < sectionGroups.length; i++) {
      if (this._addSeparators && (this._title || i > 1))
        this._children.push(this._renderSeparator(this._legendContent, availSpace));
      this._children.push(this._renderLegendSectionGroupJSON(sectionGroups[i], this._legendContent, availSpace, this._isBiDi));
    }
  }
  var sections = this._legendJSON['section'];
  if (sections) {
    for (var i = 0; i < sections.length; i++) {
      if (this._addSeparators && (this._title || i > 1))
        this._children.push(this._renderSeparator(this._legendContent, availSpace));
      this._children.push(this._renderLegendSectionJSON(sections[i], this._legendContent, availSpace, this._isBiDi));
    }
  }

  // cache legend dimensions so we can keep track of collapsed/expanded sections
  this._dim = this.getDimensions();
  for (var j = 0; j < this._separators.length; j++) {
    if (this._isBiDi) {
      this._dim.x = this._separators[j].getX1() - this._dim.w;
      this._separators[j].setX2(this._dim.x);
    } else {
      this._separators[j].setX2(this._dim.w + this._separators[j].getX1());
    }
  }

  this._eventHandler.addListeners(this);

  for (var i = 0; i < this._associations.length; i++) {
    var legendRow = this._associations[i];
    this._eventHandler.associate(legendRow, legendRow);
    // process hidden items
    if (this._hidden) {
      if (DvtArrayUtils.getIndex(this._hidden, legendRow.getAttributeGroup() + ':' + legendRow.getItemId()) > -1)
        legendRow.filterRow();
    }
  }

  if (this._isBiDi)
    this._legendContent.setTranslateX(-this._dim.x);
};



/**
 * @constructor
 */
var DvtCommonLegendSectionGroup = function(context, legend, sectionTitle, sectionTitleStyle, collapseTooltip, expandTooltip, disclosed, styleMap) {
  this.Init(context, legend, sectionTitle, sectionTitleStyle, collapseTooltip, expandTooltip, disclosed, styleMap);
};

DvtObj.createSubclass(DvtCommonLegendSectionGroup, DvtContainer, 'DvtCommonLegendSection');

DvtCommonLegendSectionGroup._EXPANDED = 0;
DvtCommonLegendSectionGroup._COLLAPSED = 1;

DvtCommonLegendSectionGroup._DWN_COLOR = 'dwn';
DvtCommonLegendSectionGroup._OVR_COLOR = 'ovr';
DvtCommonLegendSectionGroup._ENA_COLOR = 'ena';

DvtCommonLegendSectionGroup.prototype.Init = function(context, legend, sectionTitle, sectionTitleStyle, collapseTooltip, expandTooltip, disclosed, styleMap) {
  DvtCommonLegendSection.superclass.Init.call(this, context);
  this._title = sectionTitle;
  this._titleStyle = sectionTitleStyle;
  this._items = new Array();
  this._legend = legend;
  this._collapseTooltip = collapseTooltip;
  this._expandTooltip = expandTooltip;
  this._buttonState = disclosed ? DvtCommonLegendSectionGroup._EXPANDED : DvtCommonLegendSectionGroup._COLLAPSED;
  this._styleMap = styleMap;
};


/**
 * Draws a collapse/expand arrow button for a legend section group
 * @param {DvtContainer} parent The parent container to add the button to
 * @param {DvtRectangle} availSpace The remaining available dimensions to render this button
 * @param {boolean} isBiDi Whether this should be rendered right to left
 * @private
 */
DvtCommonLegendSectionGroup.prototype._drawArrowButton = function(parent, availSpace, isBiDi) {
  this._buttonX = availSpace.x;
  this._buttonY = availSpace.y;
  var bidiMultiplier = isBiDi ? -1 : 1;
  if (this._styleMap['skin'] == DvtCSSStyle.SKIN_ALTA) {
    var images = this._legend.GetImages();
    this._expandedBtn = this._createButton(images, this._buttonX, this._buttonY, this._styleMap['buttonSize'], this._styleMap['buttonSize'], DvtCommonLegendSectionGroup._EXPANDED);
    this._collapsedBtn = this._createButton(images, this._buttonX, this._buttonY, this._styleMap['buttonSize'], this._styleMap['buttonSize'], DvtCommonLegendSectionGroup._COLLAPSED);
    this._button = this._expandedBtn;
  } else {
    this._button = new DvtPolygon(this.getCtx(), [this._buttonX + 1.5 * bidiMultiplier,
      this._buttonY + 1.5, this._buttonX + 9.5 * bidiMultiplier, this._buttonY + 1.5,
      this._buttonX + 5.5 * bidiMultiplier, this._buttonY + 9.5]);
    this._button.setSolidFill(this._styleMap[DvtCommonLegendSectionGroup._ENA_COLOR]);
  }
  parent.addChild(this._button);
  // Do not show tooltips for touch devices and collapse immediately on touchstart following the same behavior as panel splitter
  if (DvtAgent.isTouchDevice()) {
    parent.addEvtListener(DvtTouchEvent.TOUCHSTART, this._handleMouseClick, false, this);
  } else {
    parent.addEvtListener(DvtMouseEvent.CLICK, this._handleMouseClick, false, this);
    parent.addEvtListener(DvtMouseEvent.MOUSEOVER, this._handleMouseOver, false, this);
    parent.addEvtListener(DvtMouseEvent.MOUSEOUT, this._handleMouseOut, false, this);
    parent.addEvtListener(DvtMouseEvent.MOUSEDOWN, this._handleMouseDown, false, this);
  }

  this._buttonState = DvtCommonLegendSectionGroup._EXPANDED;
  var buttonSpace = (this._styleMap['skin'] == DvtCSSStyle.SKIN_ALTA && isBiDi) ? 0 : this._styleMap['buttonSize'];
  availSpace.x = availSpace.x + (buttonSpace + this._styleMap['rowColGap']) * bidiMultiplier;
};


/**
 * Create button
 * @param {DvtXmlNode} images The xml node containing the collapse/expand section group button image uris
 * @param {number} x The button x coordinate
 * @param {number} y The button y coordinate
 * @param {number} width The button width
 * @param {number} height The button height
 * @param {number} buttonState Whether the button should be rendered in a collapsed or expanded state
 * @return {DvtButton} The resulting button in the given state
 * @private
 */
DvtCommonLegendSectionGroup.prototype._createButton = function(images, x, y, width, height, buttonState) {
  if (!images)
    return new DvtButton(this.getCtx());
  //JSON node will not have getAttribute method
  if (!images.getAttr) {
    return this._createButtonJson(images, x, y, width, height, buttonState);
  }
  var button;
  switch (buttonState) {
    case DvtCommonLegendSectionGroup._COLLAPSED:
      var ena = new DvtImage(this.getCtx(), images.getAttr(DvtAccordion.COLLAPSE_ENA), x, y, width, height);
      var ovr = new DvtImage(this.getCtx(), images.getAttr(DvtAccordion.COLLAPSE_OVR), x, y, width, height);
      var dwn = new DvtImage(this.getCtx(), images.getAttr(DvtAccordion.COLLAPSE_DWN), x, y, width, height);
      return button = new DvtButton(this.getCtx(), ena, ovr, dwn);
    default:
      var ena = new DvtImage(this.getCtx(), images.getAttr(DvtAccordion.EXPAND_ENA), x, y, width, height);
      var ovr = new DvtImage(this.getCtx(), images.getAttr(DvtAccordion.EXPAND_OVR), x, y, width, height);
      var dwn = new DvtImage(this.getCtx(), images.getAttr(DvtAccordion.EXPAND_DWN), x, y, width, height);
      return button = new DvtButton(this.getCtx(), ena, ovr, dwn);
  }
};


/**
 * Create button
 * @param {object} images The JSON object containing the collapse/expand section group button image uris
 * @param {number} x The button x coordinate
 * @param {number} y The button y coordinate
 * @param {number} width The button width
 * @param {number} height The button height
 * @param {number} buttonState Whether the button should be rendered in a collapsed or expanded state
 * @return {DvtButton} The resulting button in the given state
 * @private
 */
DvtCommonLegendSectionGroup.prototype._createButtonJson = function(images, x, y, width, height, buttonState) {
  var button;
  switch (buttonState) {
    case DvtCommonLegendSectionGroup._COLLAPSED:
      var ena = new DvtImage(this.getCtx(), images[DvtAccordion.COLLAPSE_ENA], x, y, width, height);
      var ovr = new DvtImage(this.getCtx(), images[DvtAccordion.COLLAPSE_OVR], x, y, width, height);
      var dwn = new DvtImage(this.getCtx(), images[DvtAccordion.COLLAPSE_DWN], x, y, width, height);
      return button = new DvtButton(this.getCtx(), ena, ovr, dwn);
    default:
      var ena = new DvtImage(this.getCtx(), images[DvtAccordion.EXPAND_ENA], x, y, width, height);
      var ovr = new DvtImage(this.getCtx(), images[DvtAccordion.EXPAND_OVR], x, y, width, height);
      var dwn = new DvtImage(this.getCtx(), images[DvtAccordion.EXPAND_DWN], x, y, width, height);
      return button = new DvtButton(this.getCtx(), ena, ovr, dwn);
  }
};


/**
 * Toggles the arrow button to the opposite state and hides or unhides the legend section.
 * @private
 */
DvtCommonLegendSectionGroup.prototype._toggleArrowButton = function() {
  var bidiMultiplier = DvtAgent.isRightToLeft() ? -1 : 1;
  if (!this._sectionHeight)
    this._sectionHeight = this.getDimensions().h - this._headerHeight;

  var diff;

  if (this._buttonState == DvtCommonLegendSectionGroup._EXPANDED) {
    if (this._styleMap['skin'] == DvtCSSStyle.SKIN_ALTA) {
      var parent = this._button.getParent();
      parent.removeChild(this._button);
      this._button = this._collapsedBtn;
      parent.addChild(this._button);
    } else {
      this._button.setPoints([this._buttonX + 1.5 * bidiMultiplier, this._buttonY + 1.5,
                              this._buttonX + 9.5 * bidiMultiplier, this._buttonY + 5.5,
                              this._buttonX + 1.5 * bidiMultiplier, this._buttonY + 9.5]);
    }
    this._itemsVisible = false;
    this._buttonState = DvtCommonLegendSectionGroup._COLLAPSED;
    diff = -this._sectionHeight;
  } else {
    if (this._styleMap['skin'] == DvtCSSStyle.SKIN_ALTA) {
      var parent = this._button.getParent();
      parent.removeChild(this._button);
      this._button = this._expandedBtn;
      parent.addChild(this._button);
    } else {
      this._button.setPoints([this._buttonX + 1.5 * bidiMultiplier, this._buttonY + 1.5,
                              this._buttonX + 9.5 * bidiMultiplier, this._buttonY + 1.5,
                              this._buttonX + 5.5 * bidiMultiplier, this._buttonY + 9.5]);
    }
    this._itemsVisible = true;
    this._buttonState = DvtCommonLegendSectionGroup._EXPANDED;
    diff = this._sectionHeight;
  }

  if (this._itemsVisible) {
    for (var i = 0; i < this._items.length; i++)
      this.addChild(this._items[i]);
  } else {
    for (var i = 0; i < this._items.length; i++)
      this.removeChild(this._items[i]);
  }

  // update legend's other sections
  this._legend.update(this, diff);
};

DvtCommonLegendSectionGroup.prototype._handleMouseClick = function(event) {
  this.getCtx().getTooltipManager().hideTooltip();
  this._toggleArrowButton();
};

DvtCommonLegendSectionGroup.prototype._handleMouseOver = function(event) {
  var tooltip;
  if (this._buttonState == DvtCommonLegendSectionGroup._EXPANDED)
    tooltip = this._collapseTooltip;
  else
    tooltip = this._expandTooltip;

  if (tooltip != null)
    this.getCtx().getTooltipManager().showTooltip(event.pageX, event.pageY, tooltip, this._button, true);
  if (!this._styleMap['skin'] == DvtCSSStyle.SKIN_ALTA)
    this._button.setSolidFill(this._styleMap[DvtCommonLegendSectionGroup._OVR_COLOR]);
};

DvtCommonLegendSectionGroup.prototype._handleMouseOut = function(event) {
  this.getCtx().getTooltipManager().hideTooltip();
  if (!this._styleMap['skin'] == DvtCSSStyle.SKIN_ALTA)
    this._button.setSolidFill(this._styleMap[DvtCommonLegendSectionGroup._ENA_COLOR]);
};

DvtCommonLegendSectionGroup.prototype._handleMouseDown = function(event) {
  if (!this._styleMap['skin'] == DvtCSSStyle.SKIN_ALTA)
    this._button.setSolidFill(this._styleMap[DvtCommonLegendSectionGroup._DWN_COLOR]);
};

DvtCommonLegendSectionGroup.prototype.addItem = function(item) {
  return this._items.push(item);
};


/**
 * Creates the collapsible legend section and title
 * @param {DvtContainer} parent The parent container to add this DvtCommonLegendSectionGroup to
 * @param {DvtRectangle} availSpace The remaining available dimensions to render this DvtCommonLegendSectionGroup
 * @param {boolean} isBiDi Whether this should be rendered right to left
 */
DvtCommonLegendSectionGroup.prototype.render = function(parent, availSpace, isBiDi) {
  parent.addChild(this);
  var collapsibleHitArea = new DvtContainer(this.getCtx());
  this.addChild(collapsibleHitArea);
  this._drawArrowButton(collapsibleHitArea, availSpace, isBiDi);
  if (this._title) {
    var sectionTitle;
    if (this._legend.isWordWrap())
      sectionTitle = new DvtMultilineText(this.getCtx());
    else
      sectionTitle = new DvtOutputText(this.getCtx());
    var fitWidth = availSpace.w - availSpace.x;
    if (isBiDi)
      fitWidth = availSpace.w - fitWidth;
    if (fitWidth > 0) {
      if (isBiDi)
        sectionTitle.alignRight();
      if (this._titleStyle)
        sectionTitle.setCSSStyle(new DvtCSSStyle(this._titleStyle));
      sectionTitle.setTextString(this._title);
      sectionTitle.setX(availSpace.x);
      sectionTitle.setY(availSpace.y);
      DvtTextUtils.fitText(sectionTitle, fitWidth, availSpace.h, collapsibleHitArea);

      // add text tooltip as needed
      if (sectionTitle.isTruncated())
        this._legend.getEventManager().associate(sectionTitle, new DvtSimpleObjPeer(this._title));

      // adjust availSpace as needed
      var dim = sectionTitle.getDimensions();
      availSpace.y = availSpace.y + Math.max(dim ? dim.h : 0, this._styleMap['buttonSize']) + this._styleMap['rowColGap'];
    }
  }

  availSpace.x = availSpace.x + (this._styleMap['buttonSize'] + this._styleMap['rowColGap']) * (isBiDi ? 1 : -1);

  this._headerHeight = this.getDimensions().h;
};



/**
 * @constructor
 * @param {DvtContext} context The context object
 * @param {DvtCommonLegend} legend The legend this section belongs to
 * @param {String} sectionTitle The optional title for this legend section
 * @param {String} sectionTitleStyle The CSS style to apply to the section title
 * @param {Object} styleMap The map containing skin specific style attributes
 */
var DvtCommonLegendSection = function(context, legend, sectionTitle, sectionTitleStyle, styleMap) {
  this.Init(context, legend, sectionTitle, sectionTitleStyle, styleMap);
};

DvtObj.createSubclass(DvtCommonLegendSection, DvtContainer, 'DvtCommonLegendSection');


/**
 * Helper method called by the constructor to initialize this object.
 * @param {DvtContext} context The context object
 * @param {DvtCommonLegend} legend The legend this section belongs to
 * @param {String} sectionTitle The optional title for this legend section
 * @param {String} sectionTitleStyle The CSS style to apply to the section title
 * @param {Object} styleMap The map containing skin specific style attributes
 */
DvtCommonLegendSection.prototype.Init = function(context, legend, sectionTitle, sectionTitleStyle, styleMap) {
  DvtCommonLegendSection.superclass.Init.call(this, context);
  this._title = sectionTitle;
  this._titleStyle = sectionTitleStyle;
  this._items = new Array();
  this._legend = legend;
  this._styleMap = styleMap;
};

DvtCommonLegendSection.prototype.addItem = function(item) {
  return this._items.push(item);
};
DvtCommonLegendSection.prototype.getItems = function() {
  return this._items;
};


/**
 * Creates the legend section and title
 * @param {DvtContainer} parent The parent container to add this DvtCommonLegendSection to
 * @param {DvtRectangle} availSpace The remaining available dimensions to render this DvtCommonLegendSection
 * @param {boolean} isBiDi Whether this should be rendered right to left
 */
DvtCommonLegendSection.prototype.render = function(parent, availSpace, isBiDi) {
  parent.addChild(this);
  if (this._title) {
    var sectionTitle;
    if (this._legend.isWordWrap())
      sectionTitle = new DvtMultilineText(this.getCtx());
    else
      sectionTitle = new DvtOutputText(this.getCtx());

    var fitWidth = availSpace.w - availSpace.x;
    if (isBiDi)
      fitWidth = availSpace.w - fitWidth;
    if (fitWidth > 0) {
      if (isBiDi)
        sectionTitle.alignRight();
      if (this._titleStyle)
        sectionTitle.setCSSStyle(new DvtCSSStyle(this._titleStyle));
      sectionTitle.setTextString(this._title);
      sectionTitle.setX(availSpace.x);
      sectionTitle.setY(availSpace.y);
      DvtTextUtils.fitText(sectionTitle, fitWidth, availSpace.h, this);

      // add text tooltip as needed
      if (sectionTitle.isTruncated())
        this._legend.getEventManager().associate(sectionTitle, new DvtSimpleObjPeer(this._title));

      // adjust availSpace as needed
      var dim = sectionTitle.getDimensions();
      availSpace.y = availSpace.y + (dim ? dim.h : 0) + this._styleMap['rowColGap'];
    }
  }
};



/**
 * @constructor
 */
var DvtCommonLegendRow = function(context, legend, prop, itemStyle, styleMap) {
  this.Init(context, legend, prop, itemStyle, styleMap);
};

DvtObj.createSubclass(DvtCommonLegendRow, DvtContainer, 'DvtCommonLegendRow');

DvtCommonLegendRow.prototype.Init = function(context, legend, prop, itemStyle, styleMap) {
  DvtCommonLegendRow.superclass.Init.call(this, context);
  this._legend = legend;
  this._prop = prop;
  this._itemStyle = itemStyle;
  this._bHidden = false;
  this._styleMap = styleMap;
};

DvtCommonLegendRow.prototype.getAttributeGroup = function() {
  return this._prop['attributeGroupId'];
};

DvtCommonLegendRow.prototype.getItemId = function() {
  return this._prop['itemId'];
};

DvtCommonLegendRow.prototype.getHideAttributes = function() {
  return this._prop['hideAttrs'];
};

DvtCommonLegendRow.prototype.setText = function(text) {
  this._text = text;
};

DvtCommonLegendRow.prototype.setMarker = function(url, shape, color, pattern, opacity) {
  this._url = url;
  this._shape = shape;
  this._color = color ? color : '#000000';
  this._pattern = pattern;
  this._opacity = opacity;
};

DvtCommonLegendRow.prototype.filterRow = function() {
  this._bHidden = !this._bHidden;
  this._marker.setHollow(this._color);
};

DvtCommonLegendRow.prototype.isRowFiltered = function() {
  return this._bHidden;
};


/**
 * Creates the a row in a legend containing a legend marker and text, handliing truncation and tooltips as needed.
 * @param {DvtContainer} parent The parent container to add this DvtCommonLegendRow to
 * @param {DvtRectangle} availSpace The remaining available dimensions to render this DvtCommonLegendRow
 * @param {boolean} isBiDi Whether this should be rendered right to left
 */
DvtCommonLegendRow.prototype.render = function(parent, availSpace, isBiDi) {
  if (this._prop) {
    this._legend.addAttrLookup(this._prop['attributeGroupId'], this._prop['itemId'], this);
    this._legend.addAssociation(this);
    this._legend.addHideAttrsLookup(this._prop['hideAttrs'], this);
  }

  parent.addChild(this);

  var rowX = availSpace.x;
  if (isBiDi)
    availSpace.x -= this._styleMap['indicatorSize'];

  // render marker
  var marker;
  if (this._url || this._shape != null) {
    marker = new DvtMarker(this.getCtx(), this._url ? [this._url] : this._shape, this._styleMap[DvtCommonLegend.SKIN_NAME],
        availSpace.x, availSpace.y, this._styleMap['indicatorSize'], this._styleMap['indicatorSize']);
    var isCustomShape = DvtMarkerUtils.getCustomMarkerInfo(this.getCtx(), this._shape);
    if (!this._url && !isCustomShape) {
      if (!this._pattern)
        marker.setSolidFill(this._color, this._opacity);
      else
        marker.setFill(new DvtPatternFill(this._pattern, this._color));
    }
    this.addChild(marker);
    if (isBiDi)
      availSpace.x = availSpace.x - this._styleMap['rowColGap'];
    else
      availSpace.x = availSpace.x + this._styleMap['indicatorSize'] + this._styleMap['rowColGap'];
  }
  this._marker = marker;

  // render text
  var textDim = new DvtRectangle();
  if (this._text) {
    var fitWidth = availSpace.w - availSpace.x;
    if (isBiDi)
      fitWidth = availSpace.w - fitWidth;
    if (fitWidth < 0) {
      this._legend.getEventManager().associate(this._marker, new DvtSimpleObjPeer(this._text));
    } else {
      var text;
      if (this._legend.isWordWrap())
        text = new DvtMultilineText(this.getCtx());
      else
        text = new DvtOutputText(this.getCtx());
      if (isBiDi)
        text.alignRight();
      if (this._itemStyle)
        text.setCSSStyle(new DvtCSSStyle(this._itemStyle));
      text.setTextString(this._text);
      text.setX(availSpace.x);
      text.setY(availSpace.y);
      var bTextFit = DvtTextUtils.fitText(text, fitWidth, availSpace.h, this);

      // add tooltip as needed
      if (bTextFit) {
        textDim = text.getDimensions();
        if (text.isTruncated())
          this._legend.getEventManager().associate(text, new DvtSimpleObjPeer(this._text));
      } else {
        this._legend.getEventManager().associate(this._marker, new DvtSimpleObjPeer(this._text));
      }
    }
  }

  availSpace.y = availSpace.y + Math.max(this._styleMap['indicatorSize'], textDim.h) + this._styleMap['rowColGap'];
  availSpace.x = rowX;
};



/**
 * @constructor
 */
var DvtCommonLegendEventManager = function(context, callback, legend) {
  this.Init(context, callback, legend);
  this._legend = legend;
};

DvtObj.createSubclass(DvtCommonLegendEventManager, DvtEventManager, 'DvtCommonLegendEventManager');


/**
 * @override
 */
DvtCommonLegendEventManager.prototype.OnClick = function(event) {
  DvtCommonLegendEventManager.superclass.OnClick.call(this, event);
  this._handleClick(event);
};


/**
 * @override
 */
DvtCommonLegendEventManager.prototype.OnMouseOver = function(event) {
  DvtCommonLegendEventManager.superclass.OnMouseOver.call(this, event);
  this._handleRollOver(event);
};


/**
 * @override
 */
DvtCommonLegendEventManager.prototype.OnMouseOut = function(event) {
  DvtCommonLegendEventManager.superclass.OnMouseOut.call(this, event);
  this._handleRollOver(event);
};


/**
 * @override
 */
DvtCommonLegendEventManager.prototype.OnComponentTouchClick = function(event) {
  DvtCommonLegendEventManager.superclass.OnComponentTouchClick.call(this, event);
  this._handleClick(event);
};

DvtCommonLegendEventManager.prototype._handleClick = function(event) {
  if (this._legend.showHideEnabled()) {
    var obj = this.GetLogicalObject(event.target);
    if (obj instanceof DvtCommonLegendRow) {
      this._clickListener(event, obj);
    }
  }
};

DvtCommonLegendEventManager.prototype._handleRollOver = function(event) {
  if (this._legend.rollOverEnabled()) {
    var obj = this.GetLogicalObject(event.target);
    if (obj instanceof DvtCommonLegendRow) {
      this._rollOverListener(event, obj);
    }
  }
};

DvtCommonLegendEventManager.prototype._clickListener = function(evt, listItem) {
  var listItemId = listItem.getItemId();
  var attributeGroupId = listItem.getAttributeGroup();

  var eventType;
  listItem.filterRow();
  var isFiltered = listItem.isRowFiltered();
  if (isFiltered)
    eventType = DvtListItemEvent.HIDE;
  else
    eventType = DvtListItemEvent.SHOW;

  var listItemEvent = new DvtListItemEvent(listItemId, attributeGroupId, eventType, evt);
  this._legend.FireListener(listItemEvent);
};

DvtCommonLegendEventManager.prototype._rollOverListener = function(evt, listItem) {
  var listItemId = listItem.getItemId();
  var attributeGroupId = listItem.getAttributeGroup();
  var hideAttr = listItem.getHideAttributes();
  var rollOverEvent = new DvtLegendItemRollOverEvent(listItemId, attributeGroupId, hideAttr, evt.type, evt);
  this._legend.FireListener(rollOverEvent);
};
});