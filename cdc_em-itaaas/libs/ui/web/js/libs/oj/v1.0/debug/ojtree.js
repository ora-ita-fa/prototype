define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        */
       function(oj, $)
{

/*-------------------------------------------------------------------------*/
/* Copyright (c) 2013, Oracle and/or its affiliates. All rights reserved.  */
/*-------------------------------------------------------------------------*/
/*                                                                         */
/* ojTree v1.0        Displays a Hierarchical Tree                         */
/*-------------------------------------------------------------------------*/
/* Depends:                                                                */
/*   jquery.ui.core.js                                                     */
/*   jquery.ui.widget.js                                                   */
/*-------------------------------------------------------------------------*/
/* This component is based on a heavily modified version of the following: */
/* jsTree 1.0-rc3                                                          */
/* http://jstree.com/                                                      */
/* Copyright (c) 2010 Ivan Bozhanov (vakata.com)                           */
/* Licensed same as jquery - under the terms of either the MIT License or  */
/* the GPL Version 2 License                                               */
/*   http://www.opensource.org/licenses/mit-license.php                    */
/*   http://www.gnu.org/licenses/gpl.html                                  */
/* $Date: 2011-02-09 01:17:14 +0200                                        */
/* $Revision: 236 $                                                        */
/*-------------------------------------------------------------------------*/


(function () 
{
  /*
  function debugObj(o)  {
    var s ;
    try { s = JSON.stringify(o) ; }
    catch (e) { s = "ERROR";}
    return s ;
  };
  */

  //  ojTree class names  
  var  /** @const */   OJT_OPEN          = "oj-tree-open",
       /** @const */   OJT_CLOSED        = "oj-tree-closed",
       /** @const */   OJT_LEAF          = "oj-tree-leaf",
       /** @const */   OJT_ICON          = "oj-tree-icon",
       /** @const */   OJT_HOVER         = "oj-tree-hovered",
       /** @const */   OJT_CLICKED       = "oj-tree-clicked",
       /** @const */   OJT_LAST          = "oj-tree-last",
       /** @const */   OJT_LOADING       = "oj-tree-loading",
       /** @const */   OJT_LAST_SELECTED = "oj-tree-last-selected",
       /** @const */   OJT_TITLE         = "oj-tree-title",
       /** @const */   OJT_DISABLED      = "oj-disabled";

  //  ojTree reorder class names  
  var  /** @const */   OJT_DRAG_OK       = "oj-tree-ok",
       /** @const */   OJT_DRAG_INVALID  = "oj-tree-invalid",
       /** @const */   OJT_MARKER        = "oj-tree-marker",
       /** @const */   OJT_MARKER_LINE   = "oj-tree-marker-line";

  //  WAI-ARIA  
  var  /** @const */   WA_ROLE              = "role",
       /** @const */   WA_TREE              = "tree",
       /** @const */   WA_TREEITEM          = "treeitem",
       /** @const */   WA_GROUP             = "group",
       /** @const */   WA_SELECTED          = "aria-selected",
       /** @const */   WA_EXPANDED          = "aria-expanded",
       /** @const */   WA_ACTIVEDESCENDANT  = "aria-activedescendant",
       /** @const */   WA_MULTISELECTABLE   = "aria-multiselectable";

  //  Data source in use
  var  /** @const */  DS_TREE       =  1,
       /** @const */  DS_COLLECTION =  2,
       /** @const */  DS_JSON       =  3,
       /** @const */  DS_HTML       =  4,
       /** @const */  DS_NONE       =  0,
       /** @const */  DS_ERROR      = -1;

  // Context Menu item id's
  var  /** @const */  _arMenuCmdMap = { "cut"    : "ojtreecut",
                                        "copy"   : "ojtreecopy",
                                        "paste"  : "ojtreepaste",
                                        "remove" : "ojtreeremove",
                                        "rename" : "ojtreerename"
                                      } ;
  /**
    *  Public event names
    *  @const
    */
  var  _aEvNames = ["select", "deselect", "hover", "dehover", "expand", "collapse", "loaded", "move",
                    "remove", "deselectAll", "rename", "refresh", "expandAll", "collapseAll", "destroy",
                    "create", "before",
                    "remove", "cut", "copy", "paste"] ;

  /**
    *  Return sanitized selector
    *  @private
    */
  function  _sanitizeSelector(hash) {
       return hash ? hash.replace( /[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&" ) : "";
  };

  /**
    *  Return sanitized html fragment for security
    *  @private
    */
  function  _escapeHtml(s) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(s)) ;
    return div.innerHTML;
  };

  /**
    *  Return true if event name is public. 
    *  @private
    */
  function _isPublicEvent(s) {
     var  b = ($.inArray(s, _aEvNames) >= 0) ;
     if ((! b) && (s == "create_node")) {
       b = true ;
     }
     return b ;
  };

  /**
    *  Convert event names to ojTree style.
    *  @private
    */
  function _convertEventName(s) {
    // jsTree uses the same event names as its methods.  This behavior is changed for ojTree

    if      (s === "rename_node") {s = "rename";}
    else if (s === "set_focus")   {s = "focus";}
    else if (s === "unset_focus") {s = "unfocus";}
    else if (s === "delete_node") {s = "remove";}
    else if (s === "move_node")   {s = "move";}
    else if (s === "create_node") {s = "create";}

    return s ;
  };


  var scrollbar_width, e1, e2;
  $(function() {
     if (/msie/.test(navigator.userAgent.toLowerCase())) {
       e1 = $('<textarea cols="10" rows="2"></textarea>').css({ position: 'absolute', top: -1000, left: 0 }).appendTo('body');
       e2 = $('<textarea cols="10" rows="2" style="overflow: hidden;"></textarea>').css({ position: 'absolute', top: -1000, left: 0 }).appendTo('body');
       scrollbar_width = e1.width() - e2.width();
       e1.add(e2).remove();
     }
     else {
       e1 = $('<div />').css({ width: 100, height: 100, overflow: 'auto', position: 'absolute', top: -1000, left: 0 })
                        .prependTo('body').append('<div />').find('div').css({ width: '100%', height: 200 });
       scrollbar_width = 100 - e1.width();
       e1.parent().remove();
     }
  });


  /**
    *  Last remnants of jsTree css stuff.  TO BE REMOVED  TDO
    *  @param {Object=}  opts  The css data.
    *  @param {boolean=} bLink  True if opts.url is to be ignored.
    *  @private
    */
  function  _addSheet(opts, bLink)
  {
    var tmp    = false,
        isNew  = true;

    if (opts.str)  {
      if (opts.title)  {
        tmp = $("style[id='" + opts.title + "-stylesheet']")[0];
      }
      if (tmp)  {
        isNew = false;
      }
      else   {
        tmp = document.createElement("style");
        tmp.setAttribute('type',"text/css");
        if (opts.title) {
          tmp.setAttribute("id", opts.title + "-stylesheet");
        }
      }

      if (tmp.styleSheet)  {
        if (isNew)  {
          document.getElementsByTagName("head")[0].appendChild(tmp); 
          tmp.styleSheet.cssText = opts.str; 
        }
        else  {
          tmp.styleSheet.cssText = tmp.styleSheet.cssText + " " + opts.str;
        }
      }
      else   {
        tmp.appendChild(document.createTextNode(opts.str));
        document.getElementsByTagName("head")[0].appendChild(tmp);
      }

      return tmp.sheet || tmp.styleSheet;
    }

    if (opts.url) {
      if (bLink) {
        if (document.createStyleSheet)  {
          try  {
                 tmp = document.createStyleSheet(opts.url);    // IE
          }
          catch (e) { }

        }
        else  {
          tmp        = document.createElement('link');
          tmp.rel    = 'stylesheet';
          tmp.type   = 'text/css';
          tmp.media  = "all";
          tmp.href   = opts.url;

          document.getElementsByTagName("head")[0].appendChild(tmp);
          return tmp.styleSheet;
        }
      }
    }
  };

  /**
    * Stack of key handler objects for all trees
    * @private
    */
  var  _aKeyHandlerStack = [] ;

  /**
    * Add key combination handler to stack, and add listener 
    * @private
    */
  function  _addKeyFilter(obj)
  {
    _aKeyHandlerStack.push(obj) ;
    $(obj._selector).keydown(_KeyFilterHandler) ;
  };  

  /**
    * Handle keystroke from _KeyFilter and dispatch to the 
    * relevent accessibility key combination handler.
    * @private
    */
  function  _KeyFilterHandler(e)
  {
    var s = "" ;
  
    if (e.ctrlKey) {
      s += "ctrl+" ;
    }
    else if (e.shiftKey) {
      s += "shift+" ;
    }
//  if (e.metaKey) {
//    s += "meta+" ;                // TDO  Mac!
//  }

    var key = e.which ;
    switch(key) {
      case 32:                      // Space
                s += "space"
                break;
      case 37:                      // Left arrow
                s += "left"
                break;
      case 38:                      // Up arrow
                s += "up"
                break;
      case 39:                      // Right arrow
                s += "right"
                break;
      case 40:                      // Down arrow
                s += "down"
                break;
      case 46:                      // Delete
                s += "del"
                break;
      case 33:                      // Page Up
                s += "pgup"
                break;
      case 34:                      // Page Down
                s += "pgdn"
                break;
      case 35:                      // End
                s += "end"
                break;
      case 36:                      // Home
                s += "home"
                break;
//    case 112:                     // F1
      case 113:                     // F2
/*
      case 114:                     // F3
      case 115:                     // F4
      case 116:                     // F5
      case 117:                     // F6
      case 118:                     // F7
      case 119:                     // F8
      case 120:                     // F9
      case 121:                     // F10
      case 122:                     // F11
      case 123:                     // F12
*/
                s += ("f" + ('1' - (112 - key))) ;
                break;
    }

    if (s.length === 0) {
      return ;
    }

    // If we can find a handler from a tree with focus, dispatch
    // the keystroke event to it.
    var retHandler = undefined ;
    $.each(_aKeyHandlerStack, function(i, obj) {
        if (obj._this._data.ui.focused) {         // does associated tree have focus
          if (obj._handler[s]) {                  // yes, does it have a matching handler function
            e.preventDefault() ;
            retHandler = obj._handler[s].call(obj._this, e) ;
            return false ;          // break out of $.each
          }
        }
    });
    return retHandler;

  };

  /**
    * Remove key combination handler from stack and remove listener 
    * @private
    */
  function  _removeKeyFilter(selector)
  {
    $.each(_aKeyHandlerStack, function(i) {
       if (_aKeyHandlerStack[i]._selector === selector) {
         $(selector).off("keydown") ;
         _aKeyHandlerStack[i] = null ;
         _aKeyHandlerStack.splice(i, 1) ;
         return false ;
       }
    }) ;
  };


  /**
    * @private
    */
  var _instance   = -1 ;      // current Tree instance id
  var _aInstances = [] ;

/**
  * @class
  * @name oj.ojTree
  * @augments oj.baseComponent
  *
  * @classdesc
  * <h3 id="treeOverview-section">
  *   JET Tree Component
  *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#treeOverview-section"></a>
  * </h3>
  *
  * The ojTree component allows a user to display the hierarchical relationship between the nodes of a tree.<p>
  * The tree contents can be specified in JSON format, or by prepopulating the tree's containing &lt;div&gt; with
  * HTML &lt;ul&gt; list markup.
  * </p></br>
  * 
  * <h4 id="treeJSON-section"> JSON Node Format</h4>
  * </br>
  * Each node object typically has a <code class="prettyprint">title</code> and an
  * <code class="prettyprint">attr</code> property. Any node can be defined as a parent by supplying
  * a <code class="prettyprint">children</code> property, which is an array of more node definitions.
  * (Note that if a node has a <code class="prettyprint">children</code> property defined, but no children
  * are actually specified, then ojTree will perform lazy-loading by requesting child node data only
  * when a node is expanded for the first time - refer to <code class="prettyprint">option</code> property
  * <code class="prettyprint">data</code>.
  * <p>Example: Basic JSON Tree definition
  * <pre class="prettyprint">
  * <code>
  *[
  *   {                                    
  *     "title": "Home",
  *     "attr": {"id": "home"},
  *   },
  *   { 
  *     "title": "News",
  *     "attr": {"id": "news"}
  *   },
  *   { 
  *      "title": "Blogs",
  *      "attr": {"id": "blogs"},
  *      "children": [ {
  *                       "title": "Today",
  *                       "attr": {"id": "today"}
  *                    },
  *                    {
  *                       "title": "Yesterday",
  *                       "attr": {"id": "yesterday"}
  *                    }
  *                  ]
  *   }
  *] 
  *</code></pre>
  *</p></br>
  * Whatever attributes are defined for the <code class="prettyprint">attr</code> property are transferred
  * to the associated DOM &lt;li&gt; element. A <code class="prettyprint">metadata</code> attribute can also be
  * defined for arbitrary user-defined data that is to be associated with a node. (This metadata is
  * maintained within the ojTree instance, and is not represented in the DOM.)  A node's metadata can be retrieved
  * using the jQuery .data() method.
  * </p></br>Example: Expanded use of the <code class="prettyprint">attr</code> property
  * <pre class="prettyprint">
  * <code>
  *[
  *  { 
  *    "title": "Home",
  *    "attr": {
  *               "id": "home",
  *               "myattr1": "Hello",         &lt;-- additional user-defined attributes
  *               "myattr2": "World"         &lt;-- additional user-defined attributes 
  *            },
  *    "metadata": {                          &lt;-- node metadata
  *                  "type": "T123",
  *                  "val": 42,
  *                  "active": true
  *                }
  *  },
  *
  *  . . .
  *]
  *</code></pre>
  *
  * </p></br>Example: Retrieving node attributes and data
  * <pre class="prettyprint">
  * <code>
  *$("#mytree).on("ojtreehover", function (ev, ui){
  *
  *  // ui.item = node
  *  // ui.item.attr("id")         -  retrieve a node attribute
  *  // ui.item.attr("myattr1")    -    ..
  *  // ui.item.data("active")     -  retrieve the "active" meta-data value from previous example
  *
  *});
  *</code></pre>
  *</p></br>
  * For flexibility, attributes can also be applied to the node's &lt;a&gt; element if required, by specifying
  * the node <code class="prettyprint">data</code> property as an object.
  * </p>Example: Using the data property
  * <pre class="prettyprint">
  * <code>
  *{
  *   "attr" : { "id" : "myid" },                    &lt;-- this is set on the &lt;li&gt;
  *   "data" : {
  *              "attr" : {
  *                         "flags"   : "A-B",       &lt;-- this is set on the &lt;a&gt;
  *                         "title" : "This is a tooltip"
  *                       }
  *             }
  *}
  *</code></pre>
  *</p></br>
  * <h4 id="treeHTML-section"> HTML Node Format</h4>
  * </br>
  * A Tree can be populated via standard HTML markup using a &lt;ul&gt; list structure - refer to
  * <code class="prettyprint">option</code> property <code class="prettyprint">"data"</code>.  In
  * the case where the <code class="prettyprint">"data"</code> option has not been defined, ojTree
  * will use any HTML markup defined in the Tree's containing &lt;div&gt;, and on startup the &lt;ul&gt;
  * the markup will be detached from the containing &lt;div&gt;, saved, and used as a template to create a new
  * tree structure in its place.  When the tree is destroyed, the original markup is restored.  Lazy loading of 
  * a node's children (when expanded) is performed if any node indicates that it has children,  
  * but its child &lt;ul&gt; list is left empty.
  * </p></br>Example: Using HTML markup to populate a Tree.
  * <pre class="prettyprint">
  * <code>
  * &lt;div id="mytree"&gt;
  *    &lt;ul&gt;
  *       &lt;li id="home"&gt;
  *          &lt;a href="#"&lt;Home&gt;/a&gt;
  *       &lt;/li&gt;
  *       &lt;li id="news"&gt;
  *          &lt;a href="#"&gt;News&lt;/a&gt;
  *       &lt;/li&gt;
  *       &lt;li id="blogs"&gt;
  *            &lt;a href="#"&gt;Blogs&lt;/a&gt;
  *            &lt;ul&gt;
  *              &lt;li id="today"&gt;
  *                 &lt;a href="#"&gt;Today&lt;/a&gt;
  *              &lt;/li>
  *              &lt;li id="yesterday"&gt;
  *                 &lt;a href="#"&gt;Yesterday&lt;/a&gt;
  *              &lt;/li&gt;
  *            &lt;/ul&gt;
  *       &lt;/li&gt;
  * &lt;/div&gt;
  </code></pre>
  * </p></br>
  * <h3 id="keyboard-section">Keyboard interaction<a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a></h3>
  * <table class="keyboard-table">
  *   <thead>
  *     <tr>
  *       <th>Key</th>
  *       <th>Use</th>
  *     </tr>
  *   </thead>
  *   <tbody>
  *     <tr>
  *       <td><kbd>Up/down arrow</kbd></td>
  *       <td>Moves between visible nodes.</td>
  *     </tr>
  *     <tr>
  *       <td><kbd>Left-arrow</kbd></td>
  *       <td>On an expanded node, collapses the node.<br>On a collapsed or leaf node, moves focus to the node's parent.</td>
  *     </tr>
  *     <tr>
  *       <td><kbd>Right-arrow</kbd></td>
  *       <td>On a collapsed node, expands the node.<br>On an expanded node, moves to the first first child of the node.<br>On an end node, does nothing.</td>
  *     </tr>
  *     <tr>
  *       <td><kbd>Space bar</kbd></td>
  *       <td>Toggles the select status of the node.</td>
  *     </tr>
  *     <tr>
  *       <td><kbd>Home</kbd></td>
  *       <td>Moves to the top node of the tree.</td>
  *     </tr>
  *     <tr>
  *       <td><kbd>End</kbd></td>
  *       <td>Moves to the last visible node of the tree.</td>
  *     </tr>
  *     <tr>
  *       <td><kbd>Shift-Up arrow</kbd></td>
  *       <td>Extends selection up one node (assuming multiple selection has been defined).</td>
  *     </tr>
  *     <tr>
  *       <td><kbd>Shift-Down arrow</kbd></td>
  *       <td>Extends selection down one node (assuming multiple selection has been defined).</td>
  *     </tr>
  *     <tr>
  *       <td><kbd>Shift-Home</kbd></td>
  *       <td>Extends selection up to the top-most node.</td>
  *     </tr>
  *     <tr>
  *       <td><kbd>Shift+pgDn</kbd></td>
  *       <td>Extends selection to the last node.</td>
  *     </tr>
  *     <tr>
  *       <td><kbd>Ctrl+Space bar</kbd></td>
  *       <td>Toggles the selection state of the current node (assuming multiple selection has been defined).</td>
  *     </tr>
  *     <tr>
  *       <td><kbd>Shift+Space bar</kbd></td>
  *       <td>Extends selection to the current node (assuming multiple selection has been defined).</td>
  *     </tr>
  *     <tr>
  *       <td><kbd>* (asterisk)</kbd></td>
  *       <td>Expands all nodes.</td>
  *     </tr>
  * </tbody></table>
  *
  *
  * @desc Creates a JET Tree.
  * @param {Object=} options a map of option-value pairs to set on the component
  * 
  * @example <caption>Initialize the Tree with options:</caption>
  * $( ".selector" ).ojTree( {"animDuration": 0, "selectionMode": "single"} );
  * 
  */
  oj.__registerWidget("oj.ojTree", $['oj']['baseComponent'], 
  {
     version           : "1.0.0", 
     widgetEventPrefix : "oj", 
     defaultElement    : "<div>", 

     options: {
                /** Disables the tree if set to <code class="prettyprint">true</code>.
                  * 
                  * @member
                  * @name disabled
                  * @memberof! oj.ojTree
                  * @instance
                  * @type {boolean}
                  * @default <code class="prettyprint">false</code>
                  * 
                  * @example <caption>Initialize the tree with the <code class="prettyprint">disabled</code> option specified:</caption>
                  * $( ".selector" ).ojTree( { "disabled": true } );
                  * 
                  * @example <caption>Get or set the <code class="prettyprint">disabled</code> option, after initialization:</caption>
                  * // getter
                  * var disabled = $( ".selector" ).ojTree( "option", "disabled" );
                  * 
                  * // setter
                  * $( ".selector" ).ojTree( "option", "disabled", true );
                  */
                  // disabled option declared in superclass, but we still want the above API doc

                /**
                  * Identifies the JET Menu that the component should launch as a context menu on right-click or
                  * <kbd>Shift-F10</kbd>. If specified, the browser's native context menu will be replaced by the
                  * specified JET Menu.
                  * 
                  * <p>To specify a JET context menu on a DOM element that is not a JET component, see the
                  * <code class="prettyprint">ojContextMenu</code> binding.  
                  * 
                  * <p>To make the page semantically accurate from the outset, applications are encouraged to specify the
                  * context menu via the standard HTML5 syntax shown in the below example.  When the component is
                  * initialized, the context menu thus specified will be set on the component.
                  *
                  * <p>When defining a contextMenu, ojTree will provide built-in behavior for "edit" style functionality
                  *  (e.g. cut/copy/paste) if the following format for menu &lt;li&gt; item's is used (no &lt;a&gt; 
                  *  elements are required):
                  * <ul><li> &lt;li data-oj-command="oj-tree-cut" /&gt;</li>
                  *     <li> &lt;li data-oj-command="oj-tree-copy" /&gt;</li>
                  *     <li> &lt;li data-oj-command="oj-tree-paste" /&gt;</li>
                  *     <li> &lt;li data-oj-command="oj-tree-remove" /&gt;</li>
                  *     <li> &lt;li data-oj-command="oj-tree-rename" /&gt;</li>
                  * </ul>
                  * The available translated text will be applied to menu items defined this way.
                  *
                  * <p>The JET Menu should be initialized before any component using it as a context menu.
                  * 
                  * @member
                  * @name contextMenu
                  * @memberof! oj.ojTree
                  * @instance
                  * @type {string | null}
                  * @default <code class="prettyprint">null</code>
                  * 
                  * @example <caption>Initialize a JET Tree with a context menu:</caption>
                  * // via recommended HTML5 syntax:
                  * &lt;div id="myTree" contextmenu="myMenu" data-bind="ojComponent: { ... }>
                  * 
                  * // via JET initializer (less preferred) :
                  * $( ".selector" ).ojTree({ "contextMenu": "#myContextMenu"  ... } });
                  * 
                  * @example <caption>Get or set the <code class="prettyprint">contextMenu</code> option for
                  *      an ojTree after initialization:</caption>
                  * // getter
                  * var menu = $( ".selector" ).ojTree( "option", "contextMenu" );
                  * 
                  * // setter
                  * $( ".selector" ).ojTree( "option", "contextMenu", "#myContextMenu"} );
                  */

                /**
                  * Specifies an animation duration in milliseconds for expanding or collapsing a node.
                  * Specify zero to inhibit animation.
                  * @type {number}
                  * @default <code class="prettyprint">500</code>
                  * @expose
                  * @instance
                  * @memberof! oj.ojTree
                  */
                animDuration  : 500,

                /**
                  * Specifies whether the user is permitted to reorder the nodes within the same tree using drag and drop.</br></br>
                  * Specify an object with the property "reorder" set to <code class="prettyprint">true</code> to enable
                  * reordering.  Setting the <code class="prettyprint">"reorder"</code> property to <code class="prettyprint">false</code>,
                  * or setting the <code class="prettyprint">"dnd"</code> property to <code class="prettyprint">false</code> (or omitting
                  * it), disables reordering support. 
                  * 
                  * @example <caption>Example: Enable drag and drop for tree node reordering</caption>
                  * dnd : (
                  *         "reorder" : true
                  *       }
                  *
                  * @type {Object | boolean}
                  * @default <code class="prettyprint">false</code>
                  * @expose
                  * @instance
                  * @memberof! oj.ojTree
                  */
                dnd : false,

                /**
                  * Specify <span class="code-caption">true</span> if expanding a node programatically should
                  * also expand its parents (i.e all parent nodes down to this node will be expanded).
                  * @type {boolean}
                  * @default <code class="prettyprint">false</code>
                  * @expose
                  * @instance
                  * @memberof! oj.ojTree
                  */
                expandParents : false,

                /**
                  * Specifies whether any nodes should be initially expanded on start-up.   Specify an array
                  * of node id's, or the string <span class="code-caption">"all"</span> if all parent nodes
                  * should be expanded.  The value may optionally be specified as an empty array.
                  * @type {Array | null}
                  * @default <code class="prettyprint">null</code>
                  * @expose
                  * @instance
                  * @memberof! oj.ojTree
                  */
                initExpanded  : null,

                initLoaded    : [],                  // suppressed per design review

                /**
                  * Specifies whether selection is permitted, and whether more than one node
                  * can be selected at a time.  Values are <span class="code-caption">"single"</span>
                  * for single selection, <span class="code-caption">"multiple"</span> to allow multiple
                  * concurrent selections, and <span class="code-caption">"none"</span> to inhibit selection.
                  * @type {string}
                  * @default <code class="prettyprint">"single"</code>
                  * @expose
                  * @instance
                  * @memberof! oj.ojTree
                  */
                selectionMode             :  "single" ,

                /**
                  *  Specifies what action is to be taken when a selected node's parent is collapsed.  Specify
                  *  false if nothing is to be done. Specify <span class="code-caption">"selectParent"</span>
                  *  if the node's closed parent is to be selected, or specify <span class="code-caption">"deselect"</span>
                  *  if the node is to be deselected.
                  * @type {boolean | string}
                  * @default <code class="prettyprint">false</code>
                  * @expose
                  * @instance
                  * @memberof! oj.ojTree
                  */
                selectedParentCollapse    :  false ,

                /**
                  *  Specifies what action is to be taken when a node is programmatically expanded.  Specify
                  *  <span class="code-caption">true</span> if all of the node's closed parents should be opened
                  *  automatically.  If <span class="code-caption">false</span> is specified, the node is selected but will
                  *  remain invisible if its parents are currently collapsed.
                  * @type {boolean}
                  * @default <code class="prettyprint">true</code>
                  * @expose
                  * @instance
                  * @memberof! oj.ojTree
                  */
                selectedParentExpand      :  true ,

                /**
                  * Specifies the action to take when a selected node is deleted.  If set to 
                  * <span class="code-caption">true</span>, its previous sibling (or parent, if no previous siblings)
                  * is selected.  If <span class="code-caption">false</span> is specified, no action is taken.
                  * @type {boolean}
                  * @default <code class="prettyprint">false</code>
                  * @expose
                  * @instance
                  * @memberof! oj.ojTree
                  */
                selectPrevOnDelete        :  false ,

//              "initSelected"              :  [],         // removed per Design Review

                /**
                  * Specifies the data source used to populate the tree. Currently supported data sources are a <code class="prettyprint">JsonTreeDataSource</code>,
                  * or json, or html.</br></br> 
                  * The general format of the <code class="prettyprint">data</code> option is one of the following:
                  *</br></br>
                  *<ul>
                  *   <li>data : oj.JsonTreeDataSource</br></br></li>
                  *   <li>data : null    (or omit) - ojTree will look at the containing &lt;div&gt;
                  *                       and use any existing html &lt;ul&gt; markup found</br></br></li>
                  *   <li>data : "  json string  "</br></br></li>
                  *   <li>data : [ array of json objects ]</br></br></li>
                  *   <li>data : "&lt;ul&gt;&lt;li&gt; ...  html markup string  &lt;/ul&gt;"</br></br></li>
                  *   <li>data : { "data" : &nbsp; &nbsp; ... or &nbsp; &nbsp; "ajax" : &nbsp; &nbsp; . . . &nbsp; &nbsp;}  &nbsp; &nbsp; &nbsp; // retrieve json or html</li>
                  * </ul>
                  *</br>
                  * Use of the <code class="prettyprint">"data"</code> property of the <code class="prettyprint">data</code> option,
                  * specifies that the tree is to be populated from JSON or HTML (local or remote).
                  * The <code class="prettyprint">"data"</code> object contains one of two properties:
                  * <ul>
                  *  <li>"data"</li>
                  *  <li>"ajax"</li>
                  * </ul>
                  *  An optional <code class="prettyprint">"dataType"</code> property may also be specified, which can take the
                  *  value <code class="prettyprint">"json"</code> or <code class="prettyprint">"html"</code>, and indicates
                  *  what kind of data is being returned in the <code class="prettyprint">"data"</code> or
                  *  <code class="prettyprint">"ajax"</code> method (default is "json").
                  * </ul>
                  *
                  * When <span class="code-caption">"data"</span> is specified as an object, its <span class="code-caption">"data"</span> property may be specified as a function which
                  * receives two arguments: <span class="code-caption">node</span>, and <span class="code-caption">fn</span>.
                  * </p></br>
                  * Example: Skeleton outline of a <code class="prettyprint">"data"</code> function:
                  *</br>
                  *<pre class="prettyprint">
                  *<code>
                  *data : {
                  *          "data" : function(node, fn) {
                  *                    // node  -  the jQuery wrapped node to be expanded for a lazy load,
                  *                    //          or -1 if it is the initial call to load the tree.
                  *                    // fn    -  a function to call with the JSON to be applied.
                  *
                  *                    fn( new_json_node_data ) ;   // return the JSON
                  *                   }
                  *        }
                  *</code></pre>
                  * </br>
                  * The <code class="prettyprint">"ajax"</code> property of the <code class="prettyprint">"data"</code> option
                  * allows remote JSON to be retrieved. It may be specified as an object (refer to the
                  * jQuery .ajax() settings object). If may also be specified as <code class="prettyprint">false</code> or
                  * omitted, if no AJAX operations are performed.</br></br>
                  * When specified as an object, it should contain the following two properties:
                  * <ul>
                  *  <li>type</li>
                  *  <li>url</li>
                  * </ul>
                  *<pre class="prettyprint">
                  *<code>
                  *"ajax" : {
                  *           "type": "GET",
                  *           "url":   "my_url"      // some url to the content
                  *          }
                  *</code></pre>
                  * <code class="prettyprint">"url"</code> may also be specified as a function which should return
                  * a url string:
                  *</br>
                  *<pre class="prettyprint">
                  *<code>
                  *"ajax" : {
                  *           "type" : "GET",
                  *           "url":   function (node) {
                  *                         ... return a url string ...
                  *                     }
                  *          )
                  *</code></pre>
                  * </br>
                  *  where  <span class="code-caption">node</span> is a parent node (can be used for lazy loading), or -1 to
                  *  indicate the initial tree load.
                  * </br></br>
                  *  Optionally, <span class="code-caption">success</span> and <span class="code-caption">error</span>
                  *  functions may be defined. If the <span class="code-caption">success</span> function returns a
                  *  value, it will be used to populate the tree; this can be useful if there is a need to transform
                  *  the data returned by a server at the client before it is displayed in the tree.
                  * </br></br></br>
                  *
                  * Note: to enable lazy loading of a parent node, specify that it has children but do not define them.
                  * When it is opened, data() or ajax() will be called with the node whose JSON is to be returned.</br></br>
                  *@example <caption>Example 1: Skeleton outline of success and error functions</caption>
                  *<code>
                  *"ajax": {
                  *          "type":"GET",
                  *          "url": myurl    &lt;-- url to full tree JSON
                  *          "success" : function(data, status, obj) {
                  *                        // data   = the JSON data
                  *                        // status = "success"
                  *                        // obj    = the AJAX object.
                  *                        trace("Ajax " + status) ;
                  *                        // return the data, can transform it first if required.
                  *                        // if no return value, the data is used untransformed.
                  *          },
                  *          "error" : function(reason, feedback, obj) {
                  *                        // reason e.g. "parsererror"
                  *                        // feedback.message  e.g. "unexpected string"
                  *                        // obj    = the AJAX object.
                  *                        trace("Ajax error " + reason + " feedback=" + feedback.message) ;
                  *          },
                  * </code>
                  *
                  *@example <caption>Example 2:  Load the complete tree from locally defined JSON.</caption>
                  *<code>
                  *"data" :  [
                  *            { 
                  *             "title": "Home",
                  *             "attr": {"id": "home"},
                  *            },
                  *            { 
                  *              "title": "News",
                  *              "attr": {"id": "news"}
                  *            },
                  *            { 
                  *              "title": "Blogs",
                  *              "attr": {"id": "blogs"},
                  *              "children": [ { 
                  *                             "title": "Today",
                  *                             "attr": {"id": "today"}
                  *                            },
                  *                            { 
                  *                              "title": "Yesterday",
                  *                              "attr": {"id": "yesterday"}
                  *                            }
                  *                          ]
                  *            }
                  *          ]
                  *</code>
                  *
                  *@example <caption>Example 3:  Load the complete tree with remotely served JSON.</caption>
                  *<code>
                  *"data" : {
                  *            "ajax": {
                  *                     "type":"GET",
                  *                     "url": myurl    <-- url to full tree JSON
                  *                    }
                  *           
                  *          }  
                  *</code>
                  *
                  *@example <caption>Example 4:  Load the complete tree with remotely served JSON via a function.</caption>
                  *<code>
                  *"data" : {
                  *           
                  *           "ajax": {
                  *                     "type":"GET",
                  *                     "url": function() {
                  *                               return (a url) ;
                  *                            }
                  *                   }
                  *           
                  *          }  
                  * </code>
                  *
                  *@example <caption>Example 5:  Load a partial tree, and retrieve node data when a parent node is expanded and needs to be populated.</caption>
                  *<code>
                  *"data" : {
                  *           "ajax": {
                  *                     "type":"GET",
                  *                     "url": function(node) {
                  *                             if (node === -1) {                       // -1 indicates initial load
                  *                               return (url for for  partial json) ;   // the tree outline with parent nodes empty.
                  *                             }
                  *                             else {
                  *                               var id = node.attr("id") ;
                  *
                  *                               return (a url based on the node id to retrieve just the node children) ; 
                  *                             }
                  *                           }
                  *                   }
                  *           
                  *          }
                  *</code>
                  *
                  *@example <caption>Example 6:  Transform data received from server before passing to ojTree.</caption>
                  *<code>
                  *"data" : {
                  *           "ajax": {
                  *                     "type":"GET",
                  *                     "url": function(node) {
                  *                              . . .
                  *                            },
                  *                      "success" : function (data)  {
                  *                                    . . .    // transform the received data into node JSON format
                  *
                  *                                    return (transformed data) ;
                  *                                  },
                  *                      "error" : function () {
                  *                                   // ajax call failed.
                  *                                }
                  *                   } 
                  *           
                  *          }
                  *</code>
                  *
                  * @example <caption>Example 7:  Use own mechanism to load a partial tree and retrieve node data when a parent is expanded.</caption>
                  * <code>
                  * // Sample outline of a tree.  Note that the parent nodes "Node2" and "Node3" have
                  * // their "children" property specifed, but no children are actually defined.
                  *
                  *{
                  *  "title" : Node1",
                  *  "attr" : {"id" : "n1"}
                  *},
                  *{
                  *  "title" : Node2",
                  *  "attr" : {"id" : "n2"},
                  *  "children" : []
                  *},
                  *{
                  *  "title" : Node3",
                  *  "attr" : {"id" : "n3"},
                  *  "children" : []
                  *},
                  *
                  *
                  *"data" : {
                  *           "data": function(node, fn) {
                  *                     // node  =  the node whose children are to be retrieved
                  *                     // fn    =  the function to call with the retrieved node json 
                  *
                  *                     if (node === -1) {             // initial tree load
                  *                       fn( acquired node json for the tree) ;
                  *                     }
                  *                     else {                         // node lazy load
                  *                       var id = node.attr("id") ;   // get the node id, will be "n2" 
                  *                                                    // or "n3", in this example.  
                  *                       fn( acquired node json for the expanded node ) ;
                  *                     }
                  *                  }
                  *           
                  *          }
                  *}
                  * </code>
                  * @type {Object | Array | string | null}
                  * @default <code class="prettyprint">null</code>
                  * @expose
                  * @instance
                  * @memberof! oj.ojTree
                  */
                 data : null,

                /**
                 * The text to display when there are no data in the Tree. If not specified, 
                 * default text is extracted from the resource bundle.  Specify an empty string if
                 * this default behavior is not required.
                 * 
                 * @expose 
                 * @memberof! oj.ojTree
                 * @instance
                 * @type {string|null}
                 * @default <code class="prettyprint">"No data"</code>
                 * 
                 * @example <caption>Initialize the tree with text set to 'no data':</caption>
                 * $( ".selector" ).ojTree({ "data":data, "emptyText": "no data" });
                 */
                emptyText: null,

                //  Themes

                /**
                  * Specifies whether node icons are to be displayed.  Specify <span class="code-caption">true</span>
                  * to display icons, or <span class="code-caption">false </span> to suppress node icons.
                  * @type {boolean}
                  * @default <code class="prettyprint">true</code>
                  * @expose
                  * @instance
                  * @memberof! oj.ojTree
                  */
                icons : true,

                /*
                 *  Specifies whether hierarchy lines between nodes are displayed.
                 *  // not exposed in V1
                 */
                //dots" : false,


                /**
                  * The <span class="code-caption">'types'</span> option allow nodes to be classified and their appearance
                  * and behavior modified.</br></br>
                  * Typical uses are to define a specific icon for a particular node, or to inhibit certain
                  * operations on a particular type of folder (e.g. the root node cannot be deleted or moved).
                  * <p>
                  * A node <span class="code-caption">type</span> has the following properties:
                  * <ul>
                  *   <li><span class="code-caption">"image"</span> -  specifies the location of the icon to be used
                  *         (optional). May also be specified as <span class="code-caption">false</span> to suppress
                  *         the image.</br></br></li>
                  *   <li><span class="code-caption">"position"</span> - position of sprite in the image in the format 
                  *        <span class="code-caption">"left top"</span>, e.g. "-36px -16px".</br>
                  *        Optional - omit if icon is not contained within a multi-sprite image.</br></br></li>
                  *   <li><span class="code-caption">method name</span> - specify a function or a
                  *         boolean. Optional.</br>  Any node operation method (that
                  *         is, takes a node as its first argument) can be redefined (e.g. <span class="code-caption">select</span>,
                  *         <span class="code-caption">expand</span>, <span class="code-caption">collapse</span>, etc). 
                  *         Alternatively, the method can be defined as <span class="code-caption">true</span> or 
                  *         <span class="code-caption">false</span> to permit or inhibit the operation, or a
                  *         function that returns a boolean value. The default value
                  *         if omitted is <span class="code-caption">true</span> (i.e. the operation is permitted).</li>
                  * </ul>
                  * In the following example, three node types have been defined: <span class="code-caption">"myroot"</span>,
                  * <span class="code-caption">"myfolder"</span>, and <span class="code-caption">"myleaf"</span>.
                  * Any node that does not have one of these types defaults its behavior to the default type
                  * (whose properties can also be redefined).  The default <span class="code-caption">"default"</span>
                  * node type has no restrictions on the operations that can be performed on the node. In the following
                  * example, a modification to the default type properties have been made.  Also, for the
                  * <span class="code-caption">"myroot"</span> node type, the standard <span class="code-caption">select</span>,
                  * <span class="code-caption">remove</span> and <span class="code-caption">move</span> operations return false
                  * which inhibts those operations.
                  * been redefined to be no-ops.
                  * @example <caption>Example 1:  Add custom appearance and node behavior.</caption>
                  * <code>
                  *"types": {
                  *            "myroot" :   {
                  *                            "image"  : baseurl + "/img/root.png",
                  *                            "select" : function() { return false; },
                  *                            "remove" : function() { return false; },
                  *                            "move" :   function() { return false; },
                  *                         },
                  *            "myfolder" : {
                  *                            "image" : baseurl + "/img/folder.png"
                  *                         },
                  *            "myleaf" :   {
                  *                           "image" : "baseurl + "/img/leaf.png"
                  *                         },
                  *            "default" : {   <-- optional redefinition of the default behavior
                  *                           "image" : "baseurl + "/img/leaf.png",
                  *                           "remove" : function() { return false; }
                  *                        }
                  *
                  *          }
                  *}
                  *</code>
                  * User-defined types are specified as an attribute of the node.  The default
                  * node type attribute is <span class="code-caption">"type"</span>, but this could be changed if desired using
                  * the <span class="code-caption">"attr"</span> property. Thus, for the node types in example 1 above, the node
                  * type attribute values in the node definitions could be set as in example 2:
                  * @example <caption>Example 2:  Using node types in the tree JSON.</caption>
                  * <code>
                  *[
                  *   {                                    
                  *     "title": "Root",
                  *     "attr": {
                  *               "id": "root",                       
                  *               "type": "myroot"                      &lt;--- node type 
                  *             },
                  *     "children": [
                  *                   {
                  *                     "title": "Home",
                  *                     "attr": {"id": "home",
                  *                              "type": "myleaf"}      &lt;--- node type
                  *                   },
                  *                   { 
                  *                     "title": "News",
                  *                     "attr": {
                  *                               "id": "news",
                  *                               "type": "myleaf"      &lt;--- node type
                  *                             }
                  *                   },
                  *                   { 
                  *                     "title": "Blogs",
                  *                     "attr": {
                  *                               "id": "blogs",
                  *                               "type": "myfolder"    &lt;--- node type
                  *                             },
                  *                     "children": [ {
                  *                                     "title": "Today",
                  *                                     "attr": {
                  *                                               "id": "today",
                  *                                               "type": "myleaf"
                  *                                             }
                  *                                   },
                  *                                   {                 &lt;--- default node type
                  *                                     "title": "Yesterday",
                  *                                     "attr": {"id": "yesterday"}
                  *                                   }
                  *                                 ]
                  *                   }
                  *                 ] 
                  *  }
                  *]
                  *</code>
                  * As described above, the node type attribute used on the corresponding tree
                  * &lt;li&gt; element defaults to <span class="code-caption">"type"</span>, but this can be redefined using the <span class="code-caption">attr</span>
                  * property as in the following example:
                  * @example <caption>Example 2:  Using node types in the tree JSON.</caption>
                  * <code>
                  *"types": {
                  *           "attr" : "mytype",    &lt;--- node type attribute is now "mytype"
                  *           "types": {
                  *                      "myroot" : {
                  *                                   "image" : . . .
                  *                                    . . .
                  *                                 }
                  *          }
                  *</code>
                  * @type {Object | null}
                  * @default <code class="prettyprint">true</code>
                  * @expose
                  * @instance
                  * @memberof! oj.ojTree
                  */
                types: null,


                //---------------------------//
                //   Option Event callbacks  //
                //---------------------------//

				/**
				  * Triggered prior to an event.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {string} ui.func the event causing this <code class="prettyprint">before</code> event to be triggered.
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">before</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "before": function(event, ui)  {
				  *                                       console.log("Before event " + ui.func);
				  *               }
				  * });
			      *
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojbefore</code> event:</caption>
				  * $( ".selector" ).on( "ojbefore", function( event, ui ) {
				  *                                       console.log("Before event " + ui.func);
				  *                                  });
				  */
				before : null,

				/**
				  * Triggered when a tree node is collapsed.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that has been collapsed
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">collapse</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "collapse": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojcollapse</code> event:</caption>
				  * $( ".selector" ).on( "ojcollapse", function(event, ui) {. . .}
				  *                    );
				  */
				collapse : null,

				/**
				  * Triggered when a tree node has been created and added to the tree.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that has been created
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">create</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "create": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojcreate</code> event:</caption>
				  * $( ".selector" ).on( "ojcreate", function(event, ui) {. . .}
				  *                    );
				  */
				create : null,

				/**
				  * Triggered when all nodes of a parent node, or the complete tree, have been collapsed.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node(s) that were collapsed.
				  * @property {Object} ui.targ the node that was targeted for collapseAll, or -1 if the complete tree is collapsed.
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">collapseAll</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "collapseAll": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojcollapseall</code> event:</caption>
				  * $( ".selector" ).on( "ojcollapseall", function( event, ui ) {. . .} );
				  */
				collapseAll : null,

				/**
				  * Triggered when a tree node has been cut from the tree via the context menu.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that was cut
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">cut</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "cut": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojcut</code> event:</caption>
				  * $( ".selector" ).on( "ojcut", function( event, ui ) {. . .} );
				  */
				cut : null,

				/**
				  * Triggered when a tree node is no longer hovered over.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that is no longer hovered over
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">dehover</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "dehover": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojdehover</code> event:</caption>
				  * $( ".selector" ).on( "ojdehover", function( event, ui ) {. . .} );
				  */
				dehover : null,

				/**
				  * Triggered when a tree node has been removed.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that has been removed.
				  * @property {Object} ui.parent the parent of the node that was removed.
				  * @property {Object} ui.prev the previous sibling, or if ui.item is the first child of
				  *                    its parent, the parent node.
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">remove</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "remove": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojremove</code> event:</caption>
				  * $( ".selector" ).on( "ojremove", function( event, ui ) {. . .} );
				  */
				remove : null,

				/**
				  * Triggered when a tree node is deselected.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that has become de-selected.
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">deselect</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "deselect": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojdeselect</code> event:</caption>
				  * $( ".selector" ).on( "ojdeselect", function( event, ui ) {. . .} );
				  */
				deselect : null,

				/**
				  * Triggered when all nodes of a parent node, or the complete tree, have been de-selected.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node(s) that have become de-selected.
				  * @property {Object} ui.targ the context node that was targeted for deselectAll, or -1 if the complete tree is deselected.
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">deselectAll</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "deselectAll": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojdeselectall</code> event:</caption>
				  * $( ".selector" ).on( "ojdeselectall", function( event, ui ) {. . .} );
				  */
				deselectAll : null,

				/**
				  * Triggered when a tree is destroyed.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">destroy</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "destroy": function( event, ui ) {}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojdestroy</code> event:</caption>
				  * $( ".selector" ).on( "ojdestroy", function( event, ui ) {} );
				  */
				destroy : null,

				/**
				  * Triggered when a tree node is expanded.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that has been expanded
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">expand</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "expand": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojexpand</code> event:</caption>
				  * $( ".selector" ).on( "ojexpand", function( event, ui ) {. . .} );
				  */
				expand : null,

				/**
				  * Triggered when all nodes of a parent node, or the complete tree, have been expanded.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node(s) that were expanded.
				  * @property {Object} ui.targ the node that was targeted for expandAll, or -1 if the complete tree is collapsed.
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">expandAll</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "expandAll": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojexpandall</code> event:</caption>
				  * $( ".selector" ).on( "ojexpandall", function( event, ui ) {. . .} );
				  */
				expandAll : null,

				/**
				  * Triggered when a tree node is hovered over.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that is hovered over
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">hover</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "hover": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojhover</code> event:</caption>
				  * $( ".selector" ).on( "ojhover", function( event, ui ) {. . .} );
				  */
				hover : null,

				/**
				  * Triggered when a tree has been loaded and the node data has been applied.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">loaded</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "loaded": function( event, ui ) {}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojloaded</code> event:</caption>
				  * $( ".selector" ).on( "ojloaded", function( event, ui ) {} );
				  */
				loaded : null,

				/**
				  * Triggered when a tree node has been moved within the tree.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that was moved
				  * @property {string} ui.position the moved node's new position relative to the reference node.
				  *                    Can be "before", "after", or "inside".
				  * @property {Object} ui.reference the reference node that ui.position refers to.
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">move</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "move": function(event, ui) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojmove</code> event:</caption>
				  * $( ".selector" ).on( "ojmove", function(event, ui) {. . .} );
				  */
				move : null,

				/**
				  * Triggered when a tree node has been pasted into the tree via the context menu.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that was pasted
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">paste</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "paste": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojpaste</code> event:</caption>
				  * $( ".selector" ).on( "ojpaste", function( event, ui ) {. . .} );
				  */
				paste : null,

				/**
				  * Triggered when a tree node, or the complete tree, has been refreshed.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that has been refreshed, or -1 if the whole tree has been refreshed.
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">refresh</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "refresh": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojrefresh</code> event:</caption>
				  * $( ".selector" ).on( "ojrefresh", function( event, ui ) {. . .} );
				  */
				refresh : null,

				/**
				  * Triggered when a tree node has been renamed.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that has been renamed
				  * @property {string} ui.title the new node text title.
				  * @property {string} ui.prevTitle the node title prior to the rename.
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">rename</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "rename": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojrename</code> event:</caption>
				  * $( ".selector" ).on( "ojrename", function( event, ui ) {. . .} );
				  */
				rename : null,

				/**
				  * Triggered when a tree node is selected.
				  *
				  * @expose 
				  * @event 
				  * @memberof! oj.ojTree
				  * @instance
				  * @property {Event} event <code class="prettyprint">jQuery</code> event object
				  * @property {Object} ui Parameters
				  * @property {Object} ui.item the node that has been selected.
				  * 
				  * @example <caption>Initialize the Tree with the <code class="prettyprint">select</code> callback specified:</caption>
				  * $( ".selector" ).ojTree({
				  *     "select": function( event, ui ) {. . .}
				  * });
				  *
				  * @example <caption>Bind an event listener to the <code class="prettyprint">ojselect</code> event:</caption>
				  * $( ".selector" ).on( "ojselect", function( event, ui ) {. . .} );
				  */
				select : null

     },   // end options


     /*---------------*/
     /* Public API's  */
     /*---------------*/

     /** Collapses an expanded node, so that its children are not visible.  Triggers a "collapse" event.
       *
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, or a selector
       *                        pointing to the element to be collapsed.
       * @param {boolean=} skipAnim - Set to true to suppress node collapse animation (assuming
       *                        option property "animDuration" is defined or defaulted). Default is false.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     collapse : function(node, skipAnim)
     {
        node = this._getNode(node);
        var s = skipAnim || this.options["animDuration"],
            t = this;

        if (!node.length || node === -1 || !node.hasClass(OJT_OPEN) ||
                            this._data.core.locked || node.hasClass("oj-disabled"))  {
          return false;
        }

        var rslt = this._emitEvent({"obj" : node, "func" : "collapse"}, "before") ;
        if (typeof rslt == "boolean" && (!rslt)) {
          return ;
        }

        if (s)  {
          node.children("ul").attr("style","display:block !important");
        }
        node.removeClass(OJT_OPEN).addClass(OJT_CLOSED).attr(WA_EXPANDED, "false");
        if (s) {
          node.children("ul").stop(true, true).slideUp(s, function ()
                                                          {
                                                            this.style.display = "";
//                                                          this["style"]["display"] = "";
                                                            t["after_close"](node);
                                                          });
        }
        else   {
          t["after_close"](node);
        }
        this._emitEvent({ "obj" : node }, "collapse");
     },


     /** Collapses a node and all its descendants.  Triggers a "collapseall" event.
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, or a
       *                       selector pointing to the element whose descendants are to be collapsed. 
       *                       If omitted , or set to -1, all nodes in the tree are collapsed.
       * @param {boolean=} anim - Set to true (or omit) if all nodes are to collapsed with animation (assuming
       *                        option property "animDuration" is defined or defaulted). Default is true.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
     */
     collapseAll : function(node, anim)
     {
        var origTarg = node? node : -1 ;
        var _this = this;

        if (this._data.core.locked) {
          return ;
        }

        node = node ? this._getNode(node) : this._$container;
        if (node && origTarg !== -1) {
          origTarg = node ;
        }
        if (!node || origTarg === -1)  {
          node = this._$container_ul;
        }

        if (node.hasClass("oj-disabled")) {
          return ;
        }

        var subject ;
        if (origTarg !== -1 && this["isExpanded"](node)) {
          subject = node[0] ;
        }

        var objs  =  node.find("li.oj-tree-open") ;  // open child nodes that are also parents
        if (objs.length)  {
          objs.each(function ()  {
                        _this["collapse"](this, !anim);
                    });
        }

        if (subject) {                               // if subject node is also expanded
          this["collapse"](subject, !anim) ;         // include it in the list
          objs.splice(0, 0, subject) ;
        }

        if (objs.length) {
          this._emitEvent({ "obj" : objs, "targ" : origTarg }, "collapseAll");
        }
     },


     /** Expands a collapsed parent node, so that its children are visible. Triggers an "expand" event.
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
       *                        or a selector pointing to the element to be expanded.
       * @param {boolean=} skipAnim - Set to true to suppress node expansion animation (assuming
       *                        option property "animDuration" is defined or defaulted). Default is false.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     expand : function(node, skipAnim)
     {
        this._expand(node, false, skipAnim) ;
     },

     /** May be used as a getter of setter.  If no argument is supplied, the method returns an
       * array of nodes currently expanded. (An empty array implies that no nodes are expanded.)  
       * If an array of nodes is supplied as an argument, the specified nodes are expanded.
       * @param {Array=} nodes - Omit to use as a getter, or specify an array of nodes to be
       *                 expanded.  Nodes may be defined as elements, id strings, jQuery wrapped nodes, or
       *                 selectors pointing to the elements to be expanded.
       * @param {boolean=} skipAnim - Set to true to suppress node expansion animation (assuming
       *                        option property "animDuration" is defined or defaulted). Default is false.
       * @return {Object | null} A jQuery wrapped array of nodes if used as a getter, else null
       *                        if used as a setter.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     expanded : function(nodes, skipAnim)
     {
        var exlr,
            exlen,
            _this = this;

        if (nodes && $.type(nodes) === "array")  {    // setter

          if (this._data.core.locked) {
            return null ;
          }

          exlen = nodes.length ;
          $.each(nodes, function (i, val) {
                          _this._expand(val, false, skipAnim); 
          });
          return null ;
        }
        else  {     // getter

          nodes = this._$container_ul.find("li.oj-tree-open");
          exlen  = nodes.length ;
          exlr   = [] ;
          for (var n = 0; n < exlen; n++)  {
            exlr.push(nodes[n]);
          };
          return $(exlr) ;
        }
     },


     /** Expands a node and all its descendants.  Triggers an "expandall" event.
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node,
       *                        or a selector pointing to the element whose descendants are to be expanded.
       *                        If omitted , or set to -1, all nodes in the tree are expanded.
       * @param {boolean=} anim - Set to true (or omit) if all nodes are to expanded with animation (assuming
       *                        option property "animDuration" is greater than zero). Default is true.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     expandAll : function(node, anim)
     {
        this._expandAll(node, anim) ;
     },

     /** Expands a node if collapsed, or collapses a node if expanded. Triggers an "expand" or "collapse" event.
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
       *                        or a selector pointing to the element to be expanded/collapsed.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     toggleExpand : function (node)
     {
        node = this._getNode(node);
        if (node === -1) {
          return ;
        }
        if (node.hasClass("oj-disabled") || this._data.core.locked) {
          return ;
        }

        if (node.hasClass(OJT_CLOSED))  {
          return this["expand"](node);
        }
        if (node.hasClass(OJT_OPEN))  {
          return this["collapse"](node);
        }
     },


     /** Deselects a node. Triggers a "deselect" event.
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
       *                        or a selector pointing to the element to be deselected.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     deselect : function (node)
     {
       node = this._getNode(node);
       if (!node.length)  {
         return false;
       }
       if (node.hasClass("oj-disabled") || this._data.core.locked) {
         return ;
       }

       if (this["isSelected"](node))  {
         node.children("a").removeClass(OJT_CLICKED);
         node.removeAttr(WA_SELECTED);
         this._data.ui.selected = this._data.ui.selected.not(node);

//Wed     if(this.data.ui.last_selected.get(0) === obj.get(0)) { this.data.ui.last_selected = this.data.ui.selected.eq(0); }

          if (this._data.ui.last_selected.get(0) === node.get(0))  {
            this._data.ui.last_selected = this._data.ui.selected.eq(0);
          }

          this._emitEvent({ "obj" : node }, "deselect");
       }

     },


     /** Deselects all selected nodes. If optional argument "context" is specified, only the selected
       * nodes within that context will be selected. Triggers a "deselectall" event.
       * @param {HTMLElement | Object | string=} context - Can be a DOM element, a jQuery wrapped node, 
       *                        or a selector pointing to an element within the tree.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     deselectAll : function(context)
     {
       if (this._data.core.locked) {
         return ;
       }

       this._deselectAll(context, false) ;
     },

     /** Selects a node. Triggers a "select" event.
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
       *                       or a selector pointing to the element to be deselected.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     select : function (node)
     {
        this._select(node) ;
     },


     /** May be used as a getter of setter.  If no argument is supplied, the method returns a 
       * jqQery wrapped list of nodes currently selected. If an array or list (that is the argument
       * has a "length" property) of nodes is supplied as an argument, the specified nodes are selected.
       *
       * @param {Array | Object=} nodes - Omit to use as a getter, or specify an array or list of nodes to be
       *                 expanded.  Nodes may be defined as elements, jQuery wrapped nodes, or
       *                 selectors pointing to the elements to be expanded.
       * @return {Array | null} An array of nodes if used as a getter.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     selected : function(nodes)
     {
        if (this._data.core.locked) {
          return null ;
        }

        if (nodes === undefined)  {
          return this._getSelected() ;
        }
        else  if (nodes.length !== undefined)     // setter
        {
          var _this = this;
          $.each(nodes, function (i, val) {
            if (val)  {
              _this._select(val, true);
            }
          });
        }
        return null ;
     },


     /** Selects a node if deselected, or deselects a node if selected. Triggers a "select" or "deselect" event.
       * 
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
       *                        or a selector pointing to the element to be expanded/collapsed.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     toggleSelect : function (node)
     {
        node = this._getNode(node) ;
        if (!node.length)  {
           return false;
        }

        if (node.hasClass("oj-disabled") || this._data.core.locked) {
          return ;
        }

        if (this["isSelected"](node))  {
          this["deselect"](node);
        }
        else  {
          this._select(node, true);
        }
     },

     /** Returns true if the node is collapsed, else false.
       *
	   * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
	   *                        or a selector pointing to the element.
       * @return {boolean} true if the node is collapsed, else false.
       * @expose 
       * @public
       * @instance
 	   * @memberof! oj.ojTree 
       */
     isCollapsed : function(node)
     {
       node = this._getNode(node);
       return node && node !== -1 && node.hasClass(OJT_CLOSED);
     },

     /** Returns true if the node is expanded, else false.
       *
	   * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
	   *                        or a selector pointing to the element.
       * @return {boolean} true if the node is expanded,  else false.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     isExpanded : function(node)
     {
       node = this._getNode(node);
       return node && node !== -1 && node.hasClass(OJT_OPEN);
     },

     /** Returns true if the node is a leaf node (that is, it has no children), else false.
       *
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
       *                        or a selector pointing to the element.
       * @return {boolean} true if the node is a leaf node, else false.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     isLeaf : function(node)
     {
       return this._isLeaf(node) ;
     },

     /** Returns true if the node is selected, else false.
       *
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
       *                        or a selector pointing to the element.
       * @return {boolean} true if the node is selected,  else false.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     isSelected : function(node)
     {
       return this._data.ui.selected.index(this._getNode(node)) >= 0;
     },


     /** Creates a new node and adds it to the tree.  Triggers a createnode" event.
       *
       * @param {HTMLElement | Object | string} refnode - specifies the node that the new node will be
       *                       placed in, or next to, depending on the "position" argument. Can be a
       *                       DOM element, a jQuery wrapped node, or a selector pointing to the element.
       * @param {string | number} position - specifies the position of the newly created node in relation
       *                       to the "refnode" specified by the first argument.  Can be a string : "before",
       *                       "after", "inside", "first",, "last", or a zero-based index to position the
       *                       new node at a specific point among the childfren of "refnode".
       * @param {Object} data - An object literal containing data to create the new node.  The object properties
       *                       are:<br>
       *                       "attr" - an object of attribute name/value pairs (at least an "id" property should
       *                       be defined).<br>
       *                       "title" - a string used for the visible text of the node.<br><br>
       * <code>
       * var new Node = { "title" : "My Title", "attr" : { "id": "myid" } };
       * </code>
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     create : function(refnode, position, data)
     {
        return this._create_node(refnode, position, data);
     },

     /**  Removes a node. Triggers a "remove" event.
       *
       *  @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
       *                        or a selector pointing to the element.
       *  @return {Object | boolean}   The jQuery wrapped node used as an argument.
       *  @expose 
       *  @public
       *  @instance
       *  @memberof! oj.ojTree 
       */ 
     remove : function(node)
     {
       node = this._getNode(node);
       if (!node.length) {
         return false;
       }

       if (node.hasClass("oj-disabled") || this._data.core.locked) {
         return false;
       }

       var rslt = this._emitEvent({"obj" : node, "func" : "remove"}, "before") ;
       if (typeof rslt == "boolean" && (!rslt)) {
         return false ;
       }

       this.__rollback();
       var p    = this._getParent(node),
           prev = $([]),
           t = this,
           sib = this._getPrev(node) ;

       node.each(function () {
           prev = prev.add(t._getPrev(this));
       });

       node = node.detach();

       if (p !== -1 && p.find("> ul > li").length === 0)  {
         p.removeClass("oj-tree-open oj-tree-closed")
          .addClass(OJT_LEAF)
          .removeAttr(WA_EXPANDED);
       }

       this._clean_node(p);
       this._emitEvent({ "obj" : node, "prev" : sib, "parent" : p }, "remove");
       return node ;
     },


     /** Returns the title of the specified node
       *
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
       *                       or a selector pointing to the element.
       * @return {string | boolean} The text string title of the node.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     getText : function(node)
     {
       node = this._getNode(node) ;
       if (!node.length) {
          return false;
       }

       var ht = this._data.core.htmlTitles;
       node = node.children("a:eq(0)");

       if (ht)  {
          node = node.clone();
          node.children("INS").remove();
          return node.html();
       }
       else  {
//       node = node.contents().filter(function()
//                             {
//                               return this.nodeType == 3;
//                             })[0];
//       return node.nodeValue;
         node = node.find("span:eq(0)") ;
         return node[0].textContent;
       }

     },

     /** Renames a node title.
       *
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
       *                        or a selector pointing to the element.
       * @param {string=} text - The new text string.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     rename : function(node, text)
     {
       this._rename_node(node, text) ;
     },

     /** Sets the specifed node as the current node of interest (e.g. a mouse-over).  Triggers a "hover" event.
       *
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
       *                        or a selector pointing to the element.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     hover : function(node)
     {
       node = this._getNode(node);
       if (! node.length)  {
         return false;
       }

       if (node.hasClass("oj-disabled") || this._data.core.locked) {
         return ;
       }

       var rslt = this._emitEvent({"obj" : node, "func" : "hover"}, "before") ;
       if (typeof rslt == "boolean" && (!rslt)) {
         return ;
       }

       //if(this.data.ui.hovered && node.get(0) === this.data.ui.hovered.get(0)) { return; }
       if (! node.hasClass(OJT_HOVER))  {
          this["dehover"]();
       }

       this._data.ui.hovered = node.children("a").addClass(OJT_HOVER).parent();
       this._$container_ul.attr(WA_ACTIVEDESCENDANT, this._data.ui.hovered.attr("id")) ;
       this._fix_scroll(node);
       this._emitEvent({ "obj" : node }, "hover");
     },


     /** Removes the "hover" state of the currently hovered node.  Triggers a "dehover" event.
       *
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     dehover : function()
     {
       var obj = this._data.ui.hovered,
            p;
       if (!obj || !obj.length) {
         return false;
       }

       if (obj.hasClass("oj-disabled") || this._data.core.locked) {
         return ;
       }

       p = obj.children("a").removeClass(OJT_HOVER).parent();
       this._$container_ul.removeAttr(WA_ACTIVEDESCENDANT) ;

       if(this._data.ui.hovered[0] === p[0]) { 
           this._data.ui.hovered = null;
       }
       this._emitEvent({ "obj" : obj }, "dehover");
     },

     /** Returns the full path to a node, either as an array of ID's or node names, depending on
       * the value of the "idMode" argument.
       *
       * @param {HTMLElement | Object | string} node - Can be a DOM element, a jQuery wrapped node, 
       *                       or a selector pointing to the element.
       * @param {boolean=} idMode - Set to true (or omit) to return ID's from the node attribute
       *                       "id"), or false to return the names (i.e. text titles).  Default is true.
       *
       * @return {Array | boolean} An array of node ID's or names.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     getPath : function(node, idMode)
     {
        var p     = [],
            _this = this;

        node = this._getNode(node);
        if (node === -1 || !node || !node.length)  {
          return false;
        }

        node.parentsUntil(".oj-tree", "li").each(function () {
               p.push( idMode ? this.id : _this["getText"](this) );
        });

        p.reverse();
        p.push( idMode ? node.attr("id") : this["getText"](node) );

        return p;
      },

     /** Returns the jQuery wrapped top outer &lt;ul&gt; element of the tree.
       *
       * @return {Object} The jQuery wrapped &lt;ul&gt; element of the tree.
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       */
     getRoot : function()
     {
        return this._$container.children("ul:eq(0)");    // return the top <ul>
     },

     /**  Refreshes the tree or a node.
       *
       *  @param {HTMLElement | Object | string | number=} node - If -1 is specified (or the argument is omitted),
       *                   the whole tree is refreshed.  Alternatively, a specific node to be refreshed can be
       *                   supplied. Can be a DOM element, a jQuery wrapped node, or a selector pointing to the element.
       *  @expose 
       *  @public
       *  @instance
       *  @memberof! oj.ojTree 
       */
     refresh : function(node)
     {
       this._super() ;

        if (this._data.core.locked) {
          return ;
        }

       this._refresh(node) ;
     },


     /**  Moves a tree node.
       *
       *  @param {HTMLElement | Object | string | number} node  The node to be moved. Can be a DOM element,
       *            a jQuery wrapped node, or a selector pointing to the element.
       *  @param {HTMLElement | Object | string | number} refnode  The reference node for the move. Can be
       *            a DOM element, a jQuery wrapped node, or a selector pointing to the element. If -1 is 
       *            specified, the container element is used.
       *  @param {string | number} position  The position of the moved node relative to the reference node refnode.
       *            Can be "before", "after", "inside", "first", "last", or the zero-based index to position the node at a
       *            specific point among the reference node's current children.
       *  @param {boolean=} iscopy  Specify false for a move operation, or true for a copy.
       *  @expose 
       *  @public
       *  @instance
       *  @memberof! oj.ojTree 
       */
     move : function(node, refnode, position, iscopy)
     {
        this._move_node(node, refnode, position, iscopy);
     },

     /**
       *  Returns the user classified node type applied to the node in the
       *  <span class="code-caption">"types"</span> option. 
       *  @return {string}  The node's type.
       *  @expose 
       *  @public
       *  @instance
       *  @memberof! oj.ojTree 
       */
     getType : function(node)
     {
         return this._getType(node) ;
     },

     /**
       *  Sets the "type" attribute of the node.
       *  @return {boolean}  true if the change was successful, else false. 
       *  @expose 
       *  @public
       *  @instance
       *  @memberof! oj.ojTree 
       */
     setType : function(node, str)
     {
         return this._setType(node, str) ;
     },

     /**
       * Return the subcomponent node element represented by the locator object properties.</br></br>
       * This is under development!!
       * 
       * @expose 
       * @public
       * @instance
       * @memberof! oj.ojTree 
       * @param {Object} locator An Object containing at minimum a "subId" property whose value is a string.<p>
       * <table style="border-collapse:collapse;border:1px solid"><tr style="background-color:#eee"><th>Property</th><th>Value</th><th>Description</th></tr>
       *  <tr style="border-collapse:collapse;border:1px solid"><td>subId</td><td><em>"disclosure"</em></td><td>Returns the &lt;ins&gt; element for the disclosure (expand/collapse)
       *                                           icon of a parent node.</td></tr>
       *  <tr style="border-collapse:collapse;border:1px solid"><td>node</td><td>String | Object</td><td>Can be a selector
       *                 for the parent node (e.g. "#mynode"), a DOM element (a node &lt;li&gt; or any element contained within
       *                 the node &lt;li&gt;), a jQuery wrapped node (possibly from an event).  For any other string, an attempt
       *                 is made to find the node with the specified text value).</td></tr>
       * </table>
       * <p>
       * <table style="border-collapse:collapse;border:1px solid"><tr style="background-color:#eee;"><th>Property</th><th>Value</th><th>Description</th></tr>
       *  <tr><td>subId</td><td><em>"icon"</em></td><td>Returns the &lt;ins&gt; element for the node icon.</td></tr>
       *  <tr><td>node</td><td>String | Object</td><td>Can be a selector for the node (e.g. "#mynode"), a DOM
       *                 element (a node &lt;li&gt; or any element contained within the node &lt;li&gt;), a jQuery
       *                 wrapped node (possibly from an event). For any other string, an attempt is made to find
       *                 the node with the specified text value).</td></tr>
       </td></tr>
       * </table>
       * <p>
       * <table style="border-collapse:collapse;border:1px solid"><tr style="background-color:#eee;"><th>Property</th><th>Value</th><th>Description</th></tr>
       *  <tr><td>subId</td><td><em>"node"</em></td><td>Returns the &lt;li&gt; element for the node. </td></tr>
       *  <tr><td>node</td><td>String | Object</td><td>Can be a selector for the node (e.g. "#mynode"), a DOM element (a
       *                 node &lt;li&gt; or any element contained within the node &lt;li&gt;), a jQuery
       *                 wrapped node (possibly from an event). For any other string, an attempt is made to find
       *                 the node with the specified text value).</td></tr>
       * </table>
       * <p>
       * <table style="border-collapse:collapse;border:1px solid"><tr style="background-color:#eee;"><th>Property</th><th>Value</th><th>Description</th></tr>
       *  <tr><td>subId</td><td><em>"link"</em></td><td>Returns the &lt;a&gt; element for the node. </td></tr>
       *  <tr><td>node</td><td>String | Object</td><td>Can be a selector for the node (e.g. "#mynode"), a DOM
       *                 element (a node &lt;li&gt; or any element contained within the &lt;li&gt;), a jQuery
       *                 wrapped node (possibly from an event). For any other string, an attempt is made to find
       *                 the node with the specified text value).</td></tr>
       * </table>
       * <p>
       * <table style="border-collapse:collapse;border:1px solid"><tr style="background-color:#eee;"><th>Property</th><th>Value</th><th>Description</th></tr>
       *  <tr><td>subId</td><td><em>"disclosure"</em> |<em>"icon"</em> | <em>"node"</em> | <em>"link"</em></td><td>Returns
       *                 the element as described above, based on an attribute of a node &lt;li&gt; element.</td></tr>
       *  <tr><td>key</td><td>String</td><td>The name of an attribute on the node.</td></tr>
       *  <tr><td>value</td><td>String</td><td>The value of the attribute specified by "key".</td></tr>
       * </table>
       * <p>
       * <table style="border-collapse:collapse;border:1px solid"><tr style="background-color:#eee;"><th>Property</th><th>Value</th><th>Description</th></tr>
       *  <tr><td>subId</td><td><em>"parent"</em> |</br><em>"prevSib"</em> |</br> <em>"nextSib"</em> |</br> "first"</em> |</br><em>"last"</em></td><td>Returns a node &lt;li&gt; element
       *                 based on the "subId" value and the "node" value.
       *                 <ul><li>"parent" - returns the parent of the node specified by "node", or null if there is no parent</li></br>
       *                   <li>"prevSib" - returns the previous sibling of the node specified by "node", or null if there is no previous sibling</li></br>
       *                   <li>"nextSib" - returns the next sibling of the node specified by "node", or null if there is no next sibling</li></br>
       *                   <li>"first" - returns the first child of the parent node specified by "node". If "node"
       *                                 is -1 or omitted, the first node of the tree is returned.</li></br>
       *                   <li>"last" - returns the last child of the parent node specified by "node". If "node"
       *                                is -1 or omitted, the last node of the tree is returned</li></br>
       *                 </ul>
       *  <tr><td>node</td><td>String | Object</td><td>Can be a selector for the node (e.g. "#mynode"), a DOM
       *                 element (a node &lt;li&gt; or any element contained within the &lt;li&gt;), a jQuery
       *                 wrapped node (possibly from an event). For any other string, an attempt
       *                 is made to find the node with the specified text value).</td></tr>
       * </table>
       * @return {Element|null} the subcomponent located by the subId string passed in locator, if found.<p>
       */
     getNodeBySubId: function(locator)
     {
        if (! locator)  {
          return this.element ? this.element[0] : null;
        }

        return this._processSubId(locator)
     },

     /**
       *  Removes all traces of ojTree in the DOM (only the ones set using oj-tree*)
       *  and cleans out all events.  If the tree was constructed from original user
       *  markup found in the div, reinstate the markup.
       *  @expose 
       *  @public
       *  @instance
       *  @memberof! oj.ojTree 
       */
     destroy : function ()
     {
        this._emitEvent({ "obj" : -1}, "destroy"); 
        this._super() ;
     },



     //-----------------------------------------//
     //     Internal API's and data             //
     //-----------------------------------------//


     /**
       *  Called the first time the widget is called on an element.
       *  @private
       */
     _create: function ()
     {
        this._super() ;

        this._bCreate       = true ;                                // in _create()
        this._elemId        = "#" + this.element.attr("id") ;       // tree element id
        this._$container    = $(_sanitizeSelector(this._elemId)) ;  // the containing <div>
        this._$container_ul = null ;                                // the containing <ul>
        this._data          = {} ;                                  // working data
        this._tds           = null ;                                // Tree DataSource
        this._index         = this._newIndex() ;                    // index for this instance
        _aInstances.push(this) ;
        this._isRtl         = this._GetReadingDirection() === "rtl";
        this._initTree() ;
        this._bCreate       = false ;
     },

     /**
       *  Widget is being destroyed.
       *  @private
       */
     _destroy : function()
     {
        this._clearTree() ;    // Clean out the DOM.  After this, the tree markup has
                               // been removed from the div, and all event handlers
                               // removed.

        // If the tree was constructed from existing user markup found in the div,
        // reinstate that markup to reset the div to its original state pre tree create.
        if (this._data.html.useExistingMarkup) {
          if (this._data.html.cloneMarkup) {
            this._$container.append(this._data.html.cloneMarkup) ;
          }
        }
  
        this._super() ;
     },


     /**
       *  Handle an option changes.
       *  Called by $(selector).ojtree("options", "prop", value)
       *  @private
       */
     _setOption: function (key, newval)
     {
        var ret ;

        if (this._bCreate) {      // if in _create(), option already in this.options
          this._super(key, newval);
          return ;
        }

        var _this = this ;
        var prev  = this.options[key] ;
        var val ;

        if (key === "selectionMode") {
          if (newval === "none") {
            val = 0 ;
          }
          else if (newval === "single") {
            val = 1;
          }
          else if (newval === "multiple") {
            val = -1 ;
          }
          else {
            val = undefined ;
          }
          if (val != _this._data.core.selectMode) {
            _this._data.core.selectMode = val ;
          }
        }
        else if (key === "icons") {
           if ($.type(newval) == "boolean") {
             if (newval != _this._data.themes.icons) {
               _this._data.themes.icons = newval ;
               _this[newval? "show_icons" : "hide_icons"]() ;
             }
           }
        }                                // end "core/ui" options
        else if (key === "contextMenu") {
           this._clearMenu() ;
           if (newval) {  
             this._initMenuOpts() ;
             this._initMenu(newval) ;
           }
        }                                // end "contextMenu"
        else if (key === "disabled")  {
           ret = this._handleDisabledChanged(newval) ;
        }                            // end "disabled"
        else if (key === "data") {    //TDO
          this._super(key, newval);
          this._initDSOpts() ;
          this._initDataSource();
          this._load_node(-1, function ()  {
                              this._loaded();
                              this._reload_nodes();
                            });
          return ;
        }

        this._super(key, newval);
        return ret ;
     },

     /**
       *  Clears out the tree dom
       *  @private
       */
     _clearTree : function()
     {
        var  n = this._getIndex();

        this._$container
            .unbind(".oj-tree")
            .undelegate(".oj-tree")
            .removeData("oj-tree-instance-id")
            .find("[class^='oj-tree']")
            .addBack()
            .attr("class", function ()
                    {
                      return this["className"].replace(/oj-tree[^ ]*|$/ig,'');
                    });

        var cl = this._$container.attr("class") ;      // if jQuery has left us with a
        cl = cl.trim();                                // class of blanks, remove it.
        if (cl.length === 0) {
          this._$container.removeAttr("class") ;
        }

        _removeKeyFilter(this._$container_ul) ;        // remove keyboard listener because
                                                       // _$container_ul will be removed
        $(document)
            .unbind(".oj-tree-" + n)
            .undelegate(".oj-tree-" + n);

        // Remove the constructed tree from the DOM.
        this._$container_ul.remove() ;
        this._$container_ul = null ;
     },

     /**
       *  Returns a jQuery wrapped tree node.  obj can be a selector pointing 
       *  to an element within the tree, a DOM node, or a jQuery wrapped node.  If -1 is used
       *  (indicating the whole tree), -1 is returned.
       *  @private
       */
     _getNodeCore : function(obj) 
     {
         var $obj = $(obj, this._$container); 

         if ($obj.is(".oj-tree") || obj == -1)  {
            return -1;
         } 
         $obj = $obj.closest("li", this._$container);
         return $obj.length ? $obj : false; 
     },

     /**
       *  Returns a jQuery wrapped tree node.  obj can be a selector pointing 
       *  to an element within the tree, a DOM node, or a jQuery wrapped node.  If obj is -1
       *  (indicating the whole tree), -1 is returned.
       *  @private
       */
     _getNode :  function (obj, allow_multiple)
     {
       if (typeof obj === "undefined" || obj === null) {
         return allow_multiple ? this._data.ui.selected : this._data.ui.last_selected;
       }

       var $obj = $(obj, this._getContainer()); 

       if ($obj.is(".oj-tree") || obj === -1) {
          return -1;
       } 

       $obj = $obj.closest("li", this._getContainer()); 
       return $obj.length ? $obj : false; 
     },

     /**
       *  Returns the node previous to the supplied obj.  obj can be a selector pointing 
       *  to an element within the tree, a DOM node, or a jQuery wrapped node.  If -1 is used
       *  (indicating the whole tree), -1 is returned.  If arg strict is true, only immediate
       *  siblings are considered, else if the obj has no previous siblings (i.e is the first
       *  child of its parent), the parent is returned.
       *  @private
       */
     _getPrev  : function (obj, strict)
     {
        obj = this._getNode(obj);
        if (obj === -1) {
          return this._$container.find("> ul > li:last-child");
        }
        if (!obj.length) {
          return false;
        }
        if (strict) {
         return (obj.prevAll("li").length > 0) ? obj.prevAll("li:eq(0)") : false;
        }

        if (obj.prev("li").length) {
            obj = obj.prev("li").eq(0);
            while (obj.hasClass(OJT_OPEN)) {
               obj = obj.children("ul:eq(0)").children("li:last");
            }
           return obj;
        }
        else {
           var o = obj.parentsUntil(".oj-tree","li:eq(0)");
           return o.length ? o : false;
        }
     },

     /**  Returns the node after the supplied obj.  obj can be a selector pointing 
       *  to an element within the tree, a DOM node, or a jQuery wrapped node.  If -1 is used
       *  (indicating the whole tree), -1 is returned.  If arg strict is true, only immediate
       *  siblings are considered, else if the obj has no more siblings (i.e is the last
       *  child of its parent), the parent's next sibling is returned.
       *  @private
       */
     _getNext  : function (obj, strict)
     {
        obj = this._getNode(obj);
        if (obj === -1)  {
          return this._$container.find("> ul > li:first-child");
        }
        if (!obj.length) {
           return false;
         }
        if (strict)  {
           return (obj.nextAll("li").size() > 0) ? obj.nextAll("li:eq(0)") : false;
        }
        
        if (obj.hasClass(OJT_OPEN))  {
          return obj.find("li:eq(0)");
        }
        else if(obj.nextAll("li").size() > 0)  {
          return obj.nextAll("li:eq(0)");
        }
        else  {
           return obj.parentsUntil(".oj-tree","li").next("li").eq(0);
        }
     },


     /**
       *  Returns the parent node of the supplied obj.  obj can be a selector pointing 
       *  to an element within the tree, a DOM node, or a jQuery wrapped node.
       *  child of its parent), the parent is returned.
       *  @private
       */
     _getParent  : function (obj)
     {
        obj = this._getNode(obj);
        if (obj == -1 || !obj.length)  {
          return false;
        }
        var o = obj.parentsUntil(".oj-tree", "li:eq(0)");
        return o.length ? o : -1;
     },

     /**
       *  Returns the child nodes of the supplied obj, or false if no children or failure.
       *  obj can be a selector pointing to an element within the tree, a DOM node, or a
       *  jQuery wrapped node.  If -1 can be used to indicate the whole tree.
       *  @private
       */
     _getChildren   : function (obj)
     {
        obj = this._getNode(obj);
        if (obj === -1) {
          return this._$container.children("ul:eq(0)").children("li");
        }
        if (!obj.length) {
          return false;
        }
        return obj.children("ul:eq(0)").children("li");
     },

     _isLeaf : function(node)
     {
       node = this._getNode(node) ;
       return node && node !== -1 && node.hasClass(OJT_LEAF);
     },

     /**
       *  Returns the widget instance for the supplied node.  Not currently used.  TDO
       *  @private
       */
     _reference : function(node)
     {
        var div  = node.parents("div").eq(0) ;

        return this ;
     },

     /**
       *  Add default values to options, unless already defined in options.
       *  @private
       */
     _applyDefaults :  function(to, from)
     {
        if (to != undefined && from != undefined)  {
          $.each(from, function(prop, val) {
                                             if (to[prop] == undefined) {
                                               to[prop] = val ;
                                             }  
                                            });
        }
     },

     /**
          Handle change of the disabled option
       *  @private
       */
     _handleDisabledChanged  : function(newval)
     {
        var curState  = this._$container_ul.hasClass("oj-disabled") ;
        if (! curState) {
          curState = false ;      // in case undefined
        }

        if (typeof newval === "undefined")  {
          return curState ;
        }

        if (curState != newval) {
          if (newval) {
            this._$container_ul.addClass("oj-disabled") ;
            this._$container_ul.prop("disabled", "disabled");
          }
          else {
            this._$container_ul.removeClass("oj-disabled") ;
            this._$container_ul.removeAttr("disabled");
          }
          this._lock(newval) ;
        }
     },


     /**
       *  @private
       */
     _lock : function (lstate) {                // unpublished per Design Review

        lstate = lstate || false ;
        if (lstate) {
          this._data.core.locked = true;
          this._data.ui.opacity  = this._$container.children("ul").css("opacity") ;
          this._$container_ul.addClass("oj-tree-locked").css("opacity","0.9");
        }
        else {
          this._data.core.locked = false;
          this._$container_ul.removeClass("oj-tree-locked").css("opacity", this._data.ui.opacity);
        }
//      this._emitEvent({});
     },

     /**
       *  Creates a "move" object containing details of the impending move, and
       *  stores it in this._data.core.prepared_move
       *
       *  The object contains :
       *     .o   the node being moved
       *     .r   the reference node
       *     .p   the destination position relative to the reference node
       *     .np  the new parent
       *     .oc  the original node if there was a copy
       *     .cy  boolean indicating if the move was a copy
       *     .op  the former parent
       *     .or  the node that was previously in the position of the moved node
       *     .ot  the original tree instance
       *     .rt  the reference tree instance
       *     .cr  same as .np but if a root node is created this is -1
       *
       *   @private
       */
     _prepare_move :  function (o, r, pos, cb, is_cb)
     {
       var p = {};
             
       p.ot =  this;
       p.o  = p.ot._getNode(o);
       p.r  = r === - 1 ? -1 : this._getNode(r);
       p.p = (typeof pos === "undefined" || pos === false) ? "last" : pos; // TODO: move to a setting

       if (!is_cb && this._data.core.prepared_move.o && this._data.core.prepared_move.o[0] === p.o[0] 
                                                     && this._data.core.prepared_move.r[0] === p.r[0]
                                                     && this._data.core.prepared_move.p    === p.p)  {
          this._emitEvent(this._data.core.prepared_move);
          if (cb)  {
            cb.call(this, this._data.core.prepared_move);
          }
          return;
       }

       p.ot = this;
       p.rt = this; // r === -1 ? p.ot : $.jstree._reference(p.r) || this
 
       if (p.r === -1 || !p.r)  {
         p.cr = -1;

         switch(p.p)
         {
            case "first":
            case "before":
            case "inside":
                           p.cp = 0; 
                           break;
            case "after":
            case "last":
                           p.cp = p.rt._$container.find(" > ul > li").length; 
                           break;
            default:
                           p.cp = p.p;
                           break;
         }
       }
       else {
         if (!/^(before|after)$/.test(p.p) && !this._is_loaded(p.r)) {
           return this._load_node(p.r, function ()
                                                    {
                                                      this._prepare_move(o, r, pos, cb, true);
                                                    });
         }
          switch(p.p)
          {
             case "before":  p.cp = p.r.index();
                             p.cr = p.rt._getParent(p.r);
                             break;
             case "after":   p.cp = p.r.index() + 1;
                             p.cr = p.rt._getParent(p.r);
                             break;
             case "inside":
             case "first":
                             p.cp = 0;
                             p.cr = p.r;
                             break;
             case "last":
                             p.cp = p.r.find(" > ul > li").length; 
                             p.cr = p.r;
                             break;
             default: 
                             p.cp = p.p;
                             p.cr = p.r;
                             break;
          }
       }

       p.np  = p.cr == -1 ? p.rt._getContainer() : p.cr;
       p.op  = p.ot._getParent(p.o);
       p.cop = p.o.index();

       if (p.op === -1)  {
         p.op = p.ot ? p.ot._$container : this._$container;
       }
       if (!/^(before|after)$/.test(p.p) && p.op && p.np && p.op[0] === p.np[0] && p.o.index() < p.cp)
       {
         p.cp++;
       }

       //if(p.p === "before" && p.op && p.np && p.op[0] === p.np[0] && p.o.index() < p.cp) { p.cp--; }
       p.or = p.np.find(" > ul > li:nth-child(" + (p.cp + 1) + ")");
       this._data.core.prepared_move = p;
       this._emitEvent(this._data.core.prepared_move, "prepare_move");
       if (cb) {
         cb.call(this, this._data.core.prepared_move, "prepare_move");
       }
     },


     "check_move" : function ()
     {
       var obj  = this._data.core.prepared_move,
           ret  = true,
           r ;

       r = obj.r === -1 ? this._$container() : obj.r;

       if (!obj || !obj.o || obj.or[0] === obj.o[0]) {
         return false;
       }

       if (!obj.cy) {
         if (obj.op && obj.np && obj.op[0] === obj.np[0] && obj.cp - 1 === obj.o.index())  { 
           return false;
         }
         obj.o.each(function ()
                    { 
                      if (r.parentsUntil(".oj-tree", "li").addBack().index(this) !== -1)  {
                        ret = false; return false;
                      }
                    });
       }

       return ret;
     },

     /**
       *  Changes the text title of a node
       *  @private
       */
     _rename_node : function(node, text)
     {
       var  t ;

       node = this._getNode(node);
       this.__rollback();
       t  = this["getText"](node) ;

       if (node && node.length) {
          var rslt = this._emitEvent({"obj"  : node,
                                      "func" : "rename",
                                      "title" : text,
                                      "prevTitle": t}, "before") ;
          if (typeof rslt == "boolean" && (!rslt)) {
            return ;
          }
       }

       if (node && node.length && this._set_text.apply(this, Array.prototype.slice.call(arguments)))  {
         this._emitEvent({ "obj" : node, "title" : text, "prevTitle" : t}, "rename");
       }
     },

     /**
       *   Moves a node within the tree
       *   @private
       */ 
     _move_node : function (obj, ref, position, is_copy, is_prepared, skip_check)
     {
        if ((obj.hasClass && obj.hasClass("oj-disabled")) || this._data.core.locked) {
          return ;
        }

        if (!is_prepared)  { 
          return this._prepare_move(obj, ref, position, function (p)
                                                        {
                                                          this._move_node(p, false, false,
                                                                          is_copy, true, skip_check);
                                                        });
        }
        if (is_copy) { 
          this._data.core.prepared_move.cy = true;
        }
        if (!skip_check && !this["check_move"]())  {
          return false;
        }

        this.__rollback();
        var o = false;

        if (is_copy)  {
           o = obj.o.clone(true);
           o.find("*[id]").addBack().each(function () {
                                             if (this.id) {
                                               this.id = "copy_" + this.id;
                                             }
                                         });
        }
        else   {
          o = obj.o;
        }

        if (obj.or.length)  {
          obj.or.before(o);
        }
        else   { 
           if (!obj.np.children("ul").length)  {
             $("<ul />").appendTo(obj.np);
           }
           obj.np.children("ul:eq(0)").append(o); 
        }

        try { 
               obj.ot._clean_node(obj.op);
               obj.rt._clean_node(obj.np);
               if (!obj.op.find("> ul > li").length)  {
                obj.op.removeClass("oj-tree-open oj-tree-closed")
                      .removeAttr(WA_EXPANDED)
                      .addClass(OJT_LEAF)
                      .children("ul")
                      .remove();
               }
        } catch (e) { }

        if (is_copy)  { 
           this._data.core.prepared_move.cy = true;
           this._data.core.prepared_move.oc = o; 
        }
        var d = $.extend(true, {}, this._data.core.prepared_move) ;
        d["obj"] = obj.o ;  
//Fri28 this._emitEvent(this._data.core.prepared_move, "move");
        this._emitEvent(d, "move");
        return this._data.core.prepared_move;
     },


      /**
        *  Returns the "move" object created by a previous _prepare_move()
        *
        *  The object contains :
        *     .o   the node being moved
        *     .r   the reference node
        *     .p   the destination position relative to the reference node
        *     .np  the new parent
        *     .oc  the original node if there was a copy
        *     .cy  boolean indicating if the move was a copy
        *     .op  the former parent
        *     .or  the node that was previously in the position of the moved node
        *     .ot  the original tree instance
        *     .rt  the reference tree instance
        *     .cr  same as .np but if a root node is created this is -1
        *
        *  @private
        */
      _getMove  : function ()
      {
         return this._data.crrm.prepared_move;
      },


      /**
        *  Returns the "type" attribute of the node.  If not found, returns "default"
        *  @private
        */
      _getType : function (node)
      {
         node = this._getNode(node);

         return (!node || !node.length) ? false : node.attr(this.options["types"]["attr"]) || "default";
      },

      /**
        *  Sets the "type" attribute of the node.
        *  @return {boolean}  true if the change was successful, else false. 
        *  @private
        */
      _setType : function (str, node)
      {
         var  s   = this.options["types"], 
              ret = false ;

         node = this._getNode(node);

         if (s) {
           ret = (!node.length || !str) ? false : node.attr(this.options["types"]["attr"], str);
         }
         else {
           ret = false ;
         }

         if (ret)  {
           this._emitEvent({ "obj" : node, "type" : str}, "settype"); 
         }
         return ret;
      },


      /**
        *  @private
        */
      _check : function (rule, obj, opts)
      {
         obj = this._getNode(obj);

         var v     = false,
             ty    = this._getType(obj),
             d     = 0,
             _this = this,
             s     = this._getOptions()["types"],
             data  = false;

             if (obj === -1) { 
               if (!!s[rule])  {
                 v = s[rule];
                }
               else  {
                 return;
               }
             }
             else   {
               if (ty === false)  {
                 return;
               }

               data = this._data.types.defaults["useData"] ? obj.data("oj-tree") : false;
               if (data && data["types"] && typeof data["types"][rule] !== "undefined")  {
                 v = data["types"][rule];
               }
               else if(!!s["types"][ty] && typeof s["types"][ty][rule] !== "undefined") {
                   v = s["types"][ty][rule];
               }
               else if(!!s["types"]["default"] && typeof s["types"]["default"][rule] !== "undefined")  {
                   v = s["types"]["default"][rule]; }
               }

               if ($.isFunction(v))  {
                   v = v.call(this, obj);
               }

               var md = this._data.types.defaults["maxDepth"] ;

               if (rule === "maxDepth" && obj !== -1 && opts !== false && this._data.types.defaults["maxDepth"] !== -2 && v !== 0)  {
                 // also include the node itself - otherwise if root node it is not checked
                 obj.children("a:eq(0)").parentsUntil(".oj-tree","li").each(function (i)
                        {
                           // check if current depth already exceeds global tree depth
                           if ((md !== -1) && (md - (i + 1) <= 0))  {
                             v = 0;
                             return false;
                           }

                           d = (i === 0) ? v : _this._check(rule, this, false);

                           // Check if current node max depth is already matched or exceeded
                           if (d !== -1 && d - (i + 1) <= 0)  {
                             v = 0; return false;
                           }

                           // otherwise - set the max depth to the current value minus current depth
                           if (d >= 0 && (d - (i + 1) < v || v < 0) )  {
                             v = d - (i + 1);
                           }

                           // If the global tree depth exists and it minus the nodes calculated
                           // so far is less than `v` or `v` is unlimited
                           if ((md >= 0) && (md - (i + 1) < v || v < 0) )  {
                             v = md - (i + 1);
                           }
                        });
               }

               return v;
     },


     /**
       *  @private
       */
      _clean_node  : function (obj)
      {
         obj = obj && obj != -1 ? $(obj) : this._$container_ul;
         obj = obj.is("li") ? obj.find("li").addBack() : obj.find("li");

         obj.removeClass("oj-tree-last")
             .filter("li:last-child").addClass("oj-tree-last").end()
             .filter(":has(li)")
             .not(".oj-tree-open")
             .removeClass(OJT_LEAF)
             .addClass(OJT_CLOSED)
             .attr(WA_EXPANDED, "false");
//JRM        .not(".oj-tree-open").removeClass("oj-tree-leaf").addClass("oj-tree-closed");
         obj.not(".oj-tree-open, .oj-tree-closed").addClass(OJT_LEAF).children("ul").remove();

         this._emitEvent({ "obj" : obj }, "clean_node");
      },


      /**
        *  Creates a new node
        *  @private
        */
      _create_node :  function (obj, position, js, callback, is_loaded)
      {
         obj = this._getNode(obj);
         if (obj !== -1 && !obj.length) {
           return false;
         }

         position = typeof position === "undefined" ? "last" : position;
         var d = $("<li />"),
             s = this.options,
             tmp;

         if (!is_loaded && !this._is_loaded(obj)) {
           this._load_node(obj, function () 
                               {
                                 this._create_node(obj, position, js, callback, true);
                               });
           return false;
         }
           
         this.__rollback();
           
         if (typeof js === "string") {
            js = { "data" : js };
         }
         if (!js) {
            js = {};
         }
         if (js["attr"])  {
           d.attr(js["attr"]);
         }
         if (js["metadata"]) {
           d.data(js["metadata"]);
         }
         if (js["state"]) {
           d.addClass("oj-tree-" + ((js["state"] === "expanded")? "open" : "closed"));
         }
         if (!js["data"]) {
           js["data"] = (js["title"] !== undefined)? js["title"] :
                                                     this.getTranslatedString("m_newnode");
         }
           
         if (!$.isArray(js["data"]))  {
           tmp = js["data"];
           js["data"] = [];
           js["data"].push(tmp);
         }

         var _this = this ;
         $.each(js["data"], function (i, m) {
             tmp = $("<a />");
             if ($.isFunction(m)) {
                m = m.call(this, js);
             }
             if (typeof m == "string")  {
                tmp.attr('href','#')[ _this._data.core.htmlTitles? "html" : "text" ](m);
             }
             else  {
               if (! m["attr"])  {
                  m["attr"] = {};
               }
               if (! m["attr"]["href"])  {
                  m["attr"]["href"] = '#';
               }
               tmp.attr(m["attr"])[ _this._data.core.htmlTitles? "html" : "text" ](m["title"]);
               if (m["language"]) {
                 tmp.addClass(m["language"]);
               }
             }
             tmp.prepend("<ins class='oj-tree-icon'>&#160;</ins>");

             if (!m["icon"] && js["icon"]) {
               m["icon"] = js["icon"];
             }
             if (m["icon"]) { 
               if (m["icon"].indexOf("/") === -1)  {
                  tmp.children("ins").addClass(m["icon"]);
               }
               else  {
                  tmp.children("ins").css("background","url('" + m["icon"] + "') center center no-repeat");
               }
             }
             d.append(tmp);
         });

         d.prepend("<ins class='oj-tree-icon'>&#160;</ins>");
         if (obj === -1) {
           obj = this._$container;
           if (position === "before")  {
             position = "first";
           }
           if (position === "after") {
             position = "last";
           }
         }

         switch(position)
         {
           case "before":  obj.before(d);
                           tmp = this._getParent(obj);
                           break;
           case "after" :  obj.after(d);
                           tmp = this._getParent(obj);
                           break;
           case "inside":
           case "first" :  if (!obj.children("ul").length) {
                            obj.append("<ul />");
                           }
                           obj.children("ul").prepend(d);
                           tmp = obj;
                           break;
           case "last":    if (!obj.children("ul").length) {
                             obj.append("<ul />");
                           }
                           obj.children("ul").append(d);
                           tmp = obj;
                           break;
           default:        if (!obj.children("ul").length) {
                             obj.append("<ul />");
                           }
                           if (!position) {
                             position = 0;
                           }
                           tmp = obj.children("ul").children("li").eq(position);
                           if (tmp.length)  {
                             tmp.before(d);
                           }
                           else  {
                             obj.children("ul").append(d);
                           }
                           tmp = obj;
                           break;
         }

         if (tmp === -1 || tmp.get(0) === this._$container.get(0)) {
           tmp = -1;
         }
         this._clean_node(tmp);
         this._emitEvent({ "obj" : d, "parent" : tmp }, "create_node");

         if (callback) {
           callback.call(this, d);
         }

         return d;
      },


      /**
        *  Expands a collapsed node
        *  @private
        */
      _expand   : function (obj, callback, skip_animation)
      {
         obj = this._getNode(obj);
         if (! obj.length) {
           return false;
         }

         if (obj.hasClass("oj-disabled") || this._data.core.locked) {
           return ;
         }

         if (! obj.hasClass(OJT_CLOSED))  {
           if (callback)  {
             callback.call();
           }
           return false;
         }

         var rslt = this._emitEvent({"obj" : obj, "func" : "expand"}, "before") ;
         if (typeof rslt == "boolean" && (!rslt)) {
           return ;
         }

         var s = skip_animation || this.options["animDuration"],
             t = this;

         if (! this._is_loaded(obj))  {
           obj.children("a").addClass("oj-tree-loading");
           this._load_node(obj, function () {
                                   t["expand"](obj, callback, skip_animation);
                                }, callback) ;
         }
         else    {
           if (this.options["expandParents"])  {
             obj.parentsUntil(".oj-tree",".oj-tree-closed").each(function ()
                                   {
                                     t["expand"](this, false, true);
                                    });
           }
           if (s)  {
             obj.children("ul").css("display","none");
           }
           obj.removeClass(OJT_CLOSED).addClass(OJT_OPEN)
                                      .attr(WA_EXPANDED, "true")
                                      .children("a")
                                      .removeClass("oj-tree-loading");

           if (s)  {
             obj.children("ul").stop(true, true).slideDown(s, function ()
                                                               {
                                                                 this.style.display = ""; 
//                                                               this["style"]["display"] = ""; 
                                                                 t["after_open"](obj);
                                                                });
           }
           else  {
              t["after_open"](obj);
           }

           this._emitEvent({ "obj" : obj }, "expand");
           if (callback)  {
             callback.call();
           }
         }
    },


    /**
      *  Expands all collapsed nodes
      *  @private
      */
    _expandAll  : function (obj, do_animation, original_obj)
    {
      var origTarg = obj? obj : -1 ;

      obj = obj ? this._getNode(obj) : -1;
      if (!obj || obj === -1) {
        obj = this._$container_ul;
      }
      else {
        origTarg = obj ;
      }

      if (original_obj)  { 
        obj = obj.find("li.oj-tree-closed");
      }
      else   {
        original_obj = obj;
        if (obj.is(".oj-tree-closed"))
        {
          obj = obj.find("li.oj-tree-closed").addBack();
        }
        else  {
          obj = obj.find("li.oj-tree-closed");
        }
      }

      var _this = this;
      obj.each(function ()
           { 
             var __this = this; 

             if (!_this._is_loaded(this))   {
               _this["expand"](this, function()
                                     {
                                       _this._expandAll(__this, do_animation, original_obj);
                                     }, !do_animation);
             }
             else  {
               _this._expand(this, false, !do_animation);
             }
           });

      // so that callback is fired AFTER all nodes are open
      if (original_obj.find('li.oj-tree-closed').length === 0)  {
        this._emitEvent({ "obj" : obj, "targ" : origTarg }, "expandAll");
      }
   },


    /**
      *  Selects a node
      *  @private
      */
    _select : function (node, check, e)
    {
       if (this._data.core.selectMode == 0) {
         return false ;
       }

       node = this._getNode(node);

       if (node == -1 || !node || !node.length)  {
         return false;
       }

       if (node.hasClass("oj-disabled") || this._data.core.locked) {
         return ;
       }

       var rslt = this._emitEvent({"obj" : node, "func":"select"}, "before") ;
       if (typeof rslt == "boolean" && (!rslt)) {
         return ;
       }

       var s = this.options ;
       var selMultMod     = this._data.ui.defaults["selectMultipleModifier"] ;  // not published yet
       var selRangeMod    = this._data.ui.defaults["selectRangeModifier"] ;     // not yet published
       var disSelChildren = this._data.ui.defaults["disableSelectingChildren"] ; // not yet published 
       var is_multiple    = (selMultMod == "on" || (selMultMod !== false && e && (e[selMultMod + "Key"]))),
           is_range       = ((selRangeMod !== false) && (e &&  (e[selRangeMod + "Key"]))  &&
                            this._data.ui.last_selected && this._data.ui.last_selected[0] !== node[0] &&
                            (this._data.ui.last_selected.parent()[0] === node.parent()[0])),
           is_selected    = this["isSelected"](node),
           proceed        = true,
           t              = this;

       if (check)   {
          if (disSelChildren && is_multiple && 
              ((node.parentsUntil(".oj-tree","li").children("a.oj-tree-clicked").length) ||
               (node.children("ul").find("a.oj-tree-clicked:eq(0)").length)))  {
             return false;
          }
          proceed = false;
          switch(!0)  {
             case (is_range):
                 this._data.ui.last_selected.addClass("oj-tree-last-selected");
                 node = node[ node.index() < this._data.ui.last_selected.index() ? "nextUntil" : "prevUntil" ](".oj-tree-last-selected").addBack();

                 if (this._data.core.selectMode == -1 || node.length < this._data.core.selectMode)  {
                   this._data.ui.last_selected.removeClass("oj-tree-last-selected");
                   this._data.ui.selected.each(function ()
                                           {
                                              if (this !== t._data.ui.last_selected[0])  {
                                                t["deselect"](this);
                                              }
                                         });
                   is_selected = false;
                   proceed     = true;
                 }
                 else {
                   proceed = false;
                 }
                 break;

             case (is_selected && !is_multiple): 
                 this["deselectAll"]();
                 if (!this._data.ui.spacebar) {  // only kbd toggles selected status
                   is_selected = false;
                 }
                 proceed     = true;
                 break;

             case (! is_selected && !is_multiple): 
                 if (e) {                                         // if mouse click
                   if (this._data.ui.selected && (this._data.ui.selected.length == 1)) {
                     this["deselect"](this._data.ui.selected) ;  // clear the selection
                   }
                   else {
                     this["deselectAll"](this._data.ui.selected) ;  // clear all selections
                   }
                 }
                 else  //if (this._data.core.selectMode == -1 || this._data.core.selectMode > 0)  {
                       if (this._data.core.selectMode === 1)  {
                   this["deselect"](this._data.ui.selected) ;
                 }
                 else if (this._data.core.selectMode > 1)  {  // TDO check if the selected count will exceed the
                   this["deselectAll"]();                     // the selectMode count. Do we veto this select?
                 }
                 proceed = true;
                 break;

             case (is_selected && is_multiple): 
                 this["deselect"](node);
                 break;

             case (! is_selected && is_multiple): 
                 if (this._data.core.selectMode == -1 || this._data.ui.selected.length + 1 <= this._data.core.selectMode)  { 
                   proceed = true;
                 }
                 break;
          }
       }

       if (proceed && !is_selected)  {
          if (!is_range)  {
            this._data.ui.last_selected = node;
          }
          node.children("a").addClass(OJT_CLICKED);
          node.attr(WA_SELECTED, "true");

          if (s["selectedParentExpand"])  {
             node.parents(".oj-tree-closed").each(function () {
                                                   t["expand"](this, false, true);
                                            });
          }
          this._data.ui.selected = this._data.ui.selected.add(node);
          this._fix_scroll(node.eq(0));

           this._emitEvent({ "obj" : node, "e" : e }, "select");
        }

     },


      /**
        *  Deselect all nodes.  Nodes can be deselected all together with a "deselectAll" event,
        *  or separately with "deselect" events.
        *  @private
        */
     _deselectAll : function(context, bSeparate)
     {
       if (this._data.core.locked) {
         return ;
       }

       if (! bSeparate) {
         var origTarg = context? context : -1 ;
         var ret = context ? $(context).find("a.oj-tree-clicked").parent() :
                             this._$container.find("a.oj-tree-clicked").parent();

         if (ret.hasClass("oj-disabled")) {
           return ;
         }

         ret.children("a.oj-tree-clicked").removeClass(OJT_CLICKED);
         ret.removeAttr(WA_SELECTED);
         this._data.ui.selected = $([]);
         this._data.ui.last_selected = false;

         if (ret.length) {
           this._emitEvent({ "obj" : ret, "targ": origTarg}, "deselectAll");
         }
       }
       else {
         var origTarg = context? context : -1 ;
         var ret = context ? $(context).find("a.oj-tree-clicked").parent() :
                             this._$container.find("a.oj-tree-clicked").parent();

         if (ret.hasClass("oj-disabled")) {
           return ;
         }

         var _this = this ;
         $.each(ret, function() {
            _this["deselect"](this) ;
         }) ;
       }
     },


      /**
        *  Placeholder for a more specific refresh action. It is replaced
        *  by refresh_json() for json_data, or _refresh_ui() for html_data.
        *  @private
        */
     _refresh : function(node) {
        this._refresh_core(node) ;
     },


     /**
       *  Base _refresh action
       *  @private
       */
     _refresh_core : function(node)
     {
       var origTarg = node? node : -1 ;
       var _this    = this;
       
       this._save_opened();
       if (!node) {
          node = -1;
       }
       node = this._getNode(node);
       if (!node)  {
         node = -1;
       }
       else {
         origTarg = node
       }

       if (node !== -1)  {
         node.children("UL").remove();
       }
       else  {
         this._$container_ul.empty();
       }
       this._load_node(node, function ()
                           {
                             _this._emitEvent({ "obj" : origTarg}, "refresh");
                             _this._reload_nodes();
                            }
                      );
     },


     /**
       *  Ui _refresh action 
       *  @private
       */
     _refresh_ui : function (obj)
     {
        this["save_selected"]();
//wed5  return this.__call_old();
        this._refresh_core(obj) ;
     },


    /**
      *  Emits an "after_open" event for internal use only.
      *  @private
      */
    "after_open"  : function (obj)
    { 
       this._emitEvent({ "obj" : obj }, "after_open");
    },


    /**
      *  Emits an internal "after_close" event for internal use only.
      *  @private
      */
    "after_close" : function (obj)
    { 
       this._emitEvent({ "obj" : obj }, "after_close");
    },


    /**
      *  Expand any nodes that have been specified to be expanded.
      *  Emits an internal "reopen" event.
      *  @private
      */
    _reopen : function ()
    {
       var _this = this;

       if (this._data.core.toExpand.length) {
         $.each(this._data.core.toExpand, function (i, val)
                                          {
                                             _this._expand(val, false, true); 
                                          });
       }
       this._emitEvent({}, "reopen");
     },


     /**
       *  Returns an array of currently selected nodes.
       *  @private
       */
     _getSelected : function (context)
     { 
         return context ? $(context).find("a.oj-tree-clicked").parent() : this._data.ui.selected ; 
     },


     /**
       *  Changes the text title of the node's <a>
       *  @private
       */
     _set_text  : function (obj, val)
     {
        obj = this._getNode(obj);
        if (!obj.length)  {
          return false;
        }

        obj = obj.children("a:eq(0)");
        if (this._data.core.htmlTitles)  {
           var tmp = obj.children("INS").clone();
           obj.html(val).prepend(tmp);
           this._emitEvent({ "obj" : obj, "name" : val }, "set_text");
           return true;
        }
        else
        {
//         obj = obj.contents().filter(function() {
//                                 return this.nodeType == 3;
//                              })[0];

           obj = obj.find("span:eq(0)") ;
           this._emitEvent({ "obj" : obj, "name" : val }, "set_text");
           return (obj[0].textContent = val);
        }
     },


    /**
      *  @private
      */ 
     _load_node : function(obj, success_callback, error_callback)     // Dummy function overriden by data methods
     {
        this._emitEvent({ "obj" : obj }, "load_node");

     },

     /**
       *  Returns whether a node is current loaded. This is a dummy function
       *  overriden by data methods (such as_load_node_J()).
       *  @private
       */
     _is_loaded  : function (obj)                 // Dummy function overriden by data methods
     {
       return true;
     },


     /*
      *  TreeDataSource's _load_node
      *  @private
      */
     _load_node_DS : function (obj, s_call, e_call)
     {
        var _this = this;
        this._load_node_tree(obj, function ()  {
                                      _this._emitEvent({ "obj" : _this._getNode(obj) }, "load_node");
                                      s_call.call(this);
                                  }, e_call);
     },


     /*
      *   JsonTreeDataSource's _is_loaded()
      *   @return {boolean}
      *   @private
      */
     _is_loaded_DS : function (obj)
     { 
//     var s = this.options["data"]["json"];

       obj = this._getNode(obj); 

//     return (obj === -1 || !obj ) || (!s["ajax"] && !this._data.ds.progressiveRender && !$.isFunction(s["data"]))
       return (obj === -1 || !obj ) || obj.is(".oj-tree-open, .oj-tree-leaf")
                                    || obj.children("ul").children("li").length > 0;
     },


     /**
      *   JsonTreeDataSource's _refreshDS
       *  @private
       */
     _refresh_DS  : function (obj)
     {
        obj = this._getNode(obj);

//      var s = this.options["data"]["json"];
//      if (obj && obj !== -1 && this._data.ds.progressiveUnload && ($.isFunction(s["data"]) || !!s["ajax"]))  {
        if (obj && obj !== -1)  {
          obj.removeData("oj-tree-children");
        }
//Wed5  return this.__call_old();
        return this._refresh_ui(obj);
     },


     /*
      *  json_data's _load_node
      *  @private
      */
     _load_node_J : function (obj, s_call, e_call)
     {
        var _this = this;
        this._load_node_json(obj, function ()  {
                                      _this._emitEvent({ "obj" : _this._getNode(obj) }, "load_node");
                                      s_call.call(this);
                                  }, e_call);
     },

     /*
      *   json_data's _is_loaded
      *   @private
      */
     _is_loaded_J : function (obj)
     { 
       var s = this.options["data"];

       obj = this._getNode(obj); 
       return obj == -1 || !obj || (!s["ajax"] && !this._data.ds.progressiveRender && !$.isFunction(s["data"]))
                        || obj.is(".oj-tree-open, .oj-tree-leaf")
                        || obj.children("ul").children("li").length > 0;
     },


     /*
      *   html_data's _load_node
      *   @private
      */
     _load_node_H : function (obj, s_call, e_call)
     {
       var _this = this;
       this._load_node_html(obj, function ()  {
                                   _this._emitEvent({ "obj" : _this._getNode(obj)}, "load_node") ;
                                   s_call.call(this);
                                 }, e_call);
     },

     /*
      *  html_data's _load_node
      *  @private
      */
     _is_loaded_H : function (obj)
     { 
       var s    = this.options["data"],
           data = null,
           ajax = null ;

      if (s) {
        data  = s["data"] || null ;
        ajax  = s["ajax"] || null ;
      }

       obj = this._getNode(obj); 

       return obj == -1 || !obj || (!ajax && !$.isFunction(data)) ||
                           obj.is(".oj-tree-open, .oj-tree-leaf") || obj.children("ul").children("li").size() > 0;
     },


     "reselect" : function ()
     {
        var _this = this,
            s      = this._data.ui.to_select;

        s = $.map($.makeArray(s), function (n) {
                           return "#" + n.toString().replace(/^#/,"")
                                                    .replace(/\\\//g,"/").replace(/\//g,"\\\/").replace(/\\\./g,".").replace(/\./g,"\\.").replace(/\:/g,"\\:"); });
        // this.deselect_all(); WHY deselect, breaks plugin state notifier?
        $.each(s, function (i, val)
                   {
                      if (val && val !== "#")  {
                        _this["select"](val);
                      }
              });

        this._data.ui.selected = this._data.ui.selected.filter(function ()
                                           {
                                             return this["parentNode"];
                                            });
        this._emitEvent(null, "reselect");
     },

     "save_selected" : function ()
     {
        var _this = this;

        this._data.ui.to_select = [];
        this._data.ui.selected.each(function ()
                  {
                    if (this.id) {
                      _this._data.ui.to_select.push("#" + this.id.toString().replace(/^#/,"").replace(/\\\//g,"/").replace(/\//g,"\\\/").replace(/\\\./g,".").replace(/\./g,"\\.").replace(/\:/g,"\\:")); 
                     }
                  });
        this._emitEvent(this._data.ui.to_select, "save_selected");
     },


     /*
      *      Not documented
      */
     "rollback" : function (rb)
     {
        if (rb)  {
          if (!$.isArray(rb))  {
            rb = [ rb ];
          }
          $.each(rb, function (i, val)
                     {
//                       instances[val.i]["set_rollback"](val.h, val.d);     //TDO
                     });
        }
    },


    "get_rollback" : function ()
    { 
       this._emitEvent(null, "get_rollback");
       return {
                i : this._getIndex(),
                h : this._$container.children("ul").clone(true),
                d : this["data"]                    // TDO ???
              }; 
    },
           
    "set_rollback" : function (html, data)
    {
       if (this._$container && this._$container_ul)   {
         this._$container_ul.empty().append(html);
       }

       this["data"] = data;                       // TDO ???
       this._emitEvent(null, "set_rollback");
    },


    /*
     *  Load json for a particular node (or the whole tree)
     *  @private
     */
    _load_node_tree : function (obj, s_call, e_call)
    {
       var rslt = this._JsonDSToJson(obj) ;

       if (! rslt.success) {
         return ; // TDO
       }

       if (! rslt.js) {
         return ;       // TDO
       }

       var  bTree = ((! obj) || (obj === -1)) ;
       var  s     = this.options["data"] ;
       var  d ;

       if ((!!s["data"] && !s["ajax"]) || (!!s["data"] && !!s["ajax"] && bTree))  {
         if (bTree)  {
           d = this._parseJson(rslt.js, obj) ;
           if (d)  {
             this._$container_ul.empty().append(d.children());
             this._clean_node();
           }
           else  { 
              if (this._data.ds.correctState) {
                  this._$container_ul.empty();
               }
           }
         }
         if (s_call) {
            s_call.call(this);
         }
       }
       else if  ((!s["data"] && !!s["ajax"]) || (!!s["data"] && !!s["ajax"] && (! bTree))) {
          d = this._parseJson(rslt.js, obj);
          if (d)  {
            if (bTree)  {
              var $u =  this._$container_ul;
              $u.empty().append(d.children());
              $u.attr(WA_ROLE, WA_TREE).attr("tabindex", "0").css("outline", "none") ;
              if (this._data.core.selectMode === -1)  {
                $u.attr("aria-multiselectable", true) ;
              }
            }
            else  {
              obj.append(d).children("a.oj-tree-loading").removeClass("oj-tree-loading");
              obj.removeData("oj-tree-is-loading");
            }
   
            this._clean_node(obj);
            if (s_call)  {
              s_call.call(this);
            }
          }
          else  {
            if (bTree) {
              if (this._data.ds.correctState)  { 
                this._$container_ul.empty(); 
                if (s_call) {
                  s_call.call(this);
                }
              }
            }
            else  {
               obj.children("a.oj-tree-loading").removeClass("oj-tree-loading");
               obj.removeData("oj-tree-is-loading");
               if (s["correct_state"]) { 
                 this._correct_state(obj);
                 if (s_call)  {
                   s_call.call(this);
                 } 
               }
            }
          }
       }

     },


    /**
      * Process a JsonTreeDataSource to a Json array ready for parsing.
      * This is temporary - it assumes that all nodes are available in the Json;
      * that is, there is no lazy-loading.   TDO
      * @private
      * @return {Object} contains "success" (boolean) and "js" (the json nodes)
      */
     _JsonDSToJson : function (parentKey, node)
     {
        var arJson = [],
            ds = this._tds,
            cc,
            range = {},
            rslt  = {success : false, js : null} ;

        if (parentKey == -1) {
          parentKey = null ;
          range["start"] = 0 ;
        }
        else {
          // TDO
        }

        cc = ds.getChildCount(parentKey) ;   
        if (cc > 0) {
          range["count"] = cc ;
          ds.fetchChildren(parentKey, range,              // get the JsonNodeSet 
              {
                "success" : $.proxy(function(jns) {
                     var c = jns.getCount(),
                         attr,
                         n ;

                     for (var i = 0; i < c; i++) {
                        node = {} ;
                        attr = jns.getData(i) ;           // get the attribute list to be applied 
                        if (attr) {
                          node["attr"] = attr ;
                        }
                       node["title"] = jns.m_nodes[i].title ;         // hack, wait for chadwick
                       if (attr.metadata) {
                         node["metadata"] = jns.m_nodes[i].metadata ; // hack, wait for chadwick
                       }

                       var key  = node["attr"]["id"] ;

                       n = ds.getChildCount(key) ;
                       if (n > 0) {
                          var r = this._JsonDSToJson(key, node) ;
                          node["children"] = r.js ;
                       }

                       arJson.push(node) ;
                     }
  
                     rslt.success = true ;
                     rslt.js      = arJson ;
                   }, this),

                "error" :  function(status) {
                              rslt.success = false ;
                           }
              }) ;
        }
        return rslt ;
     },


     /**
       *  @private
       */
     _refresh_json  : function (obj)
     {
        obj = this._getNode(obj);

        if (this._data.core.locked) {
          return ;
        }

        var bTree = (!obj || obj !== -1 || !obj.length) ;
        if (!bTree && obj.hasClass("oj-disabled")) {
          return ;
        }

        var s = this.options["data"]["json"];

        if (! bTree && this._data.ds.progressiveUnload && ($.isFunction(s["data"]) || !!s["ajax"]))  {
          obj.removeData("oj-tree-children");
        }
//Wed5  return this.__call_old();
        return this._refresh_ui(obj);
     },


     /*
      *  Load json for a particular node (or the whole tree)
      *  @private
      */
     _load_node_json : function (obj, s_call, e_call)
     {
       var s = this._getOptions()["data"],        // work on a copy of the options to avoid
           d,                                     // endless loop in calling success/error funcs
           error_func   = function () {},
           success_func = function () {},
           data         = (s && s["data"]) || null,
           ajax         = (s && s["ajax"]) || null;

       if (s && !data && !ajax) {
         data = s ;                               // we just have data, no data() ajax() methods defined
       }

       obj = this._getNode(obj);

       if (obj && obj !== -1 && (this._data.ds.progressiveRender || this._data.ds.progressiveUnload)
                             && !obj.is(".oj-tree-open, .oj-tree-leaf")
                             && obj.children("ul").children("li").length === 0 && obj.data("oj-tree-children")) {
          d = this._parseJson(obj.data("oj-tree-children"), obj);
          if (d)  {
            obj.append(d);
            if (! this._data.ds.progressiveUnload) {
              obj.removeData("oj-tree-children");
            }
          }

          this._clean_node(obj);
          if (s_call)  {
            s_call.call(this);
          }
          return;
       }

       if (obj && obj !== -1) {
         if (obj.data("oj-tree-is-loading"))  {
            return;
         }
         else  {
            obj.data("oj-tree-is-loading",true);
         }
       }

       switch (!0)
       {
          case (!data && !ajax) : throw "ojTree - neither data nor ajax settings supplied.";

          // function option added here for easier model integration (also supporting async - see callback)

          case ($.isFunction(data)):
                       data.call(this, obj, $.proxy(function (d) {
                           d = this._parseJson(d, obj);
                           if (!d) { 
                              if (obj === -1 || !obj)  {
                                if (this._data.ds.correctState)  {
                                  this._$container_ul.empty();
                                }
                              }
                              else  {
                                 obj.children("a.oj-tree-loading").removeClass("oj-tree-loading");
                                 obj.removeData("oj-tree-is-loading");

                                 if (this._data.ds.correctState) {
                                   this._correct_state(obj);
                                 }
                              }
                              if (e_call) {
                                e_call.call(this);
                              }
                           }
                           else  {
                              if (obj === -1 || !obj)  {
                                 this._$container_ul.empty().append(d.children());
                              }
                              else  {
                                 obj.append(d).children("a.oj-tree-loading").removeClass("oj-tree-loading");
                                 obj.removeData("oj-tree-is-loading");
                              }
                              this._clean_node(obj);
                              if (s_call)  {
                                s_call.call(this);
                              }
                           }
                       }, this));
                       break;

          case (!!data && !ajax) || (!!data && !!ajax && (!obj || obj === -1)):

                       if (!obj || obj == -1)  {
                         d = this._parseJson(data, obj) ;
                         if (d)  {
                           this._$container_ul.empty().append(d.children());
                           this._clean_node();
                         }
                         else  { 
                            if (this._data.ds.correctState) {
                              this._$container_ul.empty();
                             }
                         }
                       }
                       if (s_call) {
                          s_call.call(this);
                       }
                       break;

          case (!data && !!ajax) || (!!data && !!ajax && obj && obj !== -1):

                       error_func = function (x, t, e)
                       {
                         var ef = this._getOptions()["data"]["ajax"]["error"];  // reget the options       
                         if (ef) {                                              // without our updated ajax
                           ef.call(this, t, e, x);                              // changes to avoid forever loop
                         }
                         if (obj != -1 && obj.length)  {
                            obj.children("a.oj-tree-loading").removeClass("oj-tree-loading");
                            obj.removeData("oj-tree-is-loading");
                            if (t === "success" && this._data.ds.correctState)  {
                              this._correct_state(obj);
                            }
                         }
                         else   {
                           if (t === "success" && this._data.ds.correctState)  {
                             this._$container_ul.empty();
                           }
                         }
                         if (e_call)  {
                           e_call.call(this);
                         }
                       };

                       success_func = function (d, t, x)
                       {
                         var sf = this._getOptions()["data"]["ajax"]["success"];  // reget the options
                         if (sf) {                                                // without our updated ajax
                           d = sf.call(this, d, t, x) || d;                       // changes to avoid forever loop
                         }

                         if (d === "" || (d && d.toString && d.toString().replace(/^[\s\n]+$/,"") === "") || (!$.isArray(d) && !$.isPlainObject(d)))  {
                           return error_func.call(this, x, t, "");
                         }

                         d = this._parseJson(d, obj);
                         if (d)  {
                            if (obj === -1 || !obj)  {
                               var $u =  this._$container_ul;
                               $u.empty().append(d.children());
                               $u.attr(WA_ROLE, WA_TREE).attr("tabindex", "0").css("outline", "none") ;
                               if (this._data.core.selectMode === -1)  {
                                 $u.attr("aria-multiselectable", true) ;
                               }
                             }
                             else   {
                                obj.append(d).children("a.oj-tree-loading").removeClass("oj-tree-loading");
                                obj.removeData("oj-tree-is-loading");
                             }

                             this._clean_node(obj);
                             if (s_call)  {
                               s_call.call(this);
                             }
                         }
                         else  {
                           if (obj === -1 || !obj) {
                              if (this._data.ds.correctState)  { 
                                 this._$container_ul.empty(); 
                                 if (s_call) {
                                   s_call.call(this);
                                 }
                              }
                           }
                           else  {
                              obj.children("a.oj-tree-loading").removeClass("oj-tree-loading");
                              obj.removeData("oj-tree-is-loading");
                              if (this._data.ds.correctState) { 
                                this._correct_state(obj);
                                if (s_call)  {
                                  s_call.call(this);
                                } 
                              }
                           }
                         }
                       };

                       //  Prepare for an ajax op. (note: we are updating a copy of the options)
                       s["ajax"]["context"] = this;
                       s["ajax"]["error"]   = error_func;
                       s["ajax"]["success"] = success_func;

                       if (! s["dataType"])  {
                         s["ajax"]["dataType"] = "json";
                       }
                       if ($.isFunction(s["ajax"]["url"]))  {
                         s["ajax"]["url"] = s["ajax"]["url"].call(this, obj);
                       }
                       if ($.isFunction(s["ajax"]["data"]))  {
                         s["ajax"]["data"] = s["ajax"]["data"].call(this, obj);
                       }
                       $.ajax(s["ajax"]);
                       break;
               }                       // end switch

     },


     /*
      *  Parse a JSON representation of the tree into a jQUery wrapped <ul> structure
      *  @private
      */
     _parseJson : function (js, obj, isRecurse)
     {
        var d = false, 
            tmp, i, j, ul1, ul2, title;

        if (!js) {
          return d;
        }

        if (this._data.ds.progressiveUnload && obj && obj !== -1)  { 
          obj.data("oj-tree-children", d);
        }

        if (typeof js == "string")  {
          try {
                js = $.parseJSON(js) ;
              } catch(err) {js = [];}     // have nothing useful to display
        }

        if ($.isArray(js))  {
          d = $('<ul>');
          if (! js.length)  {
            return false;
          }

          for (i = 0, j = js.length; i < j; i++)  {
             tmp = this._parseJson(js[i], obj, true);
             if (tmp.length)  {
               d = d.append(tmp);
             }
          }

          d = d.children();
        }
        else  {
           //  We have an individual node object

           if (typeof js == "string")  {
             js = { "data" : js };
           }

           // jstree wants js.data to be an object or a string (for the title).
           // If not object,  we expect a title property.

//         if (! js["data"] && js["data"] !== "")  {
//           if (js["title"] !== undefined)  {
//             js["data"] = js["title"];
//             delete js["title"];
//           }
//           else  {
//              return d;
//           }
//         }


//JRM      if(!js.data && js.data !== "") { return d; }

           title = (typeof js["title"] == "string")?  js["title"] : " " ;

           d = $("<li role='" + WA_TREEITEM + "' />");

           if (js["attr"])  {
             if (this._data.types.defType && (! js["attr"]["type"])) {  // if no type and "default" type
               js["attr"]["type"] = "oj-tree-deftype" ;                 // defined, add default type
             }
             d.attr(js["attr"]);       // apply attr's to the <li>
           }
           if (js["metadata"])  {      // and any user defined arbitrary data
             d.data(js["metadata"]);
           }

           // js.state     // not published - per Design Review

           if (js["state"] || (js["children"] && js["children"].length === 0)) {    // length zero means lazy load
             d.addClass("oj-tree-" + ((js["state"] === "expanded")? "open" : "closed"));
           }

//         if (!$.isArray(js["data"])) {
//           tmp = js["data"];
//           js["data"] = [];
//           js["data"].push(tmp);
//         }
           
           if (! js["data"]) {
             js["data"] = {"dummy": 0} ;
           }

           var ht   = this._data.core.htmlTitles ;
           var bIns = false ;

           tmp = $("<a tabindex='-1' />");
           $.each(js["data"], function (i, m)   {
//                    tmp = $("<a role=presentation tabindex=-1 />");
                      if ($.isFunction(m)) {
                        m = m.call(this, js);
                      }
                      if (typeof m == "string")  {
//                      tmp.attr('href','#')[ ht? "html" : "text" ](title);
                      }
                      else  {
//                      if (!m["attr"]) {
//                        m["attr"] = {};
//                      }

//                      for (var x in m) {
//                         if (x !== "attr") {
//                           m["attr"][x] = m[x] ;
//                         }
//                      }

//                        if (!m["attr"]["href"]) {
//                          m["attr"]["href"] = '#';
//                        }

//                       tmp.attr(m["attr"]);                // apply attr's to the <a>
                       if (i == "attr") {
                         tmp.attr(m) ;
                       }
                       else if (i == "style") {
                         tmp.css(m) ;
                       }
//                     tmp[ ht? "html" : "text" ](m["title"]? m["title"] : js["title"]);
//                      if (m["language"]) {
                        if (i == "language") {
                          tmp.addClass(m);
                        }
                      }

//                    tmp.prepend("<ins class='oj-tree-icon'>&#160;</ins>");
                      if (! bIns) {
                         tmp.prepend("<ins class='oj-tree-icon'>&#160;</ins><span class='" + OJT_TITLE + "'>" + title + "</span>");
                         bIns = true ;
                      }
                      if (!m["icon"] && js["icon"])  {
                        m["icon"] = js["icon"];
                      }
                      if (m["icon"])  { 
                        if (m["icon"].indexOf("/") === -1)  {
                          tmp.children("ins").addClass(m["icon"]);
                        }
                        else  {
                          tmp.children("ins").css("background","url('" + m["icon"] + "') center center no-repeat");
                        }
                      }
//                    d.append(tmp);
           });

           d.append(tmp);
           d.prepend("<ins class='oj-tree-icon'>&#160;</ins>");

           if (js["children"])  { 
             if (this._data.ds.progressiveRender && js["state"] !== "expanded")  {
               d.addClass(OJT_CLOSED).attr(WA_EXPANDED, "false")
                                     .data("oj-tree-children", js["children"]);
             }
             else  {
               if (this._data.ds.progressiveUnload)  {
                 d.data("oj-tree-children", js["children"]);
               }
               if ($.isArray(js["children"]) && js["children"].length) {
                 tmp = this._parseJson(js["children"], obj, true);
                 if (tmp.length)  {
                   ul2 = $("<ul role='" + WA_GROUP + "' />");
                   ul2.append(tmp);
                   d.append(ul2);
                 }
               }
             }
           }
        }  // end else

        if (! isRecurse)  {
          ul1 = $("<ul />");
          ul1.append(d);
          d = ul1;
        }

        return d;
     },

     /*
      *   Returns a Json representation of a node
      *   @private
      */
     _getJson : function (obj, li_attr, a_attr, is_callback)
     {
       var result = [], 
           s      = this.options, 
           _this  = this,
           tmp1,
           tmp2,
           li,
           a,
           t,
           lang;

       obj = this._getNode(obj);

       if (!obj || obj === -1)  {
         obj = this._$container.find("> ul > li");
       }
       li_attr = $.isArray(li_attr) ? li_attr : [ "id", "class" ];

       if (!is_callback && s["types"])  {
         li_attr.push(s["types"]["attr"]);
       }
       a_attr = $.isArray(a_attr) ? a_attr : [ ];

       obj.each(function () {
                  li = $(this);
                  tmp1 = { data : [] };

                  if (li_attr.length)  {
                    tmp1.attr = { };
                  }
                  $.each(li_attr, function (i, v)  { 
                                    tmp2 = li.attr(v); 
                                    if (tmp2 && tmp2.length && tmp2.replace(/oj-tree[^ ]*/ig,'').length)  {
                                      tmp1.attr[v] = (" " + tmp2).replace(/ oj-tree[^ ]*/ig,'')
                                                                 .replace(/\s+$/ig," ")
                                                                 .replace(/^ /,"").replace(/ $/,""); 
                                    }
                  });

                  if (li.hasClass(OJT_OPEN))  {
                    tmp1.state = "open";
                  }
                  if (li.hasClass(OJT_CLOSED))  {
                    tmp1.state = "closed";
                  }
                  if (li.data())  {
                    tmp1.metadata = li.data();
                  }
                  a = li.children("a");
                  a.each(function ()  {
                          t = $(this);

                          if ( a_attr.length || $.inArray("languages", s["plugins"]) !== -1 || 
//wed3                         t.children("ins").get(0).style.backgroundImage.length || 
                               t.children("ins").get(0)["style"]["backgroundImage"].length || 
//wed3                        (t.children("ins").get(0).className && t.children("ins").get(0).className.replace(/oj-tree[^ ]*|$/ig,'').length))
                              (t.children("ins").get(0)["className"] && t.children("ins").get(0)["className"].replace(/oj-tree[^ ]*|$/ig,'').length))
                          { 
                            lang = false;
                            if ($.inArray("languages", s["plugins"]) !== -1 && $.isArray(s["languages"]) && s["languages"].length)  {
//                            $.each(s.languages, function (l, lv)   {
                              $.each(s["languages"], function (l, lv)   {

                                                     if (t.hasClass(lv))  {
                                                       lang = lv;
                                                       return false;
                                                     }
                              });
                            }

                            tmp2 = { "attr" : { }, "title" : _this.getText(t, lang) }; 
                            $.each(a_attr, function (k, z) {
                                tmp2.attr[z] = (" " + (t.attr(z) || "")).replace(/ oj-tree[^ ]*/ig,'')
                                                                        .replace(/\s+$/ig," ")
                                                                        .replace(/^ /,"")
                                                                        .replace(/ $/,"");
                            });
                            if ($.inArray("languages", s["plugins"]) !== -1 && $.isArray(s["languages"]) && s["languages"].length) {
                               $.each(s["languages"], function (k, z)  {
                                  if (t.hasClass(z))  {
                                    tmp2.language = z;
                                    return true;
                                  }
                               });
                            }

                            if (t.children("ins").get(0)["className"].replace(/oj-tree[^ ]*|$/ig,'').replace(/^\s+$/ig,"").length)
                            {
                              tmp2.icon = t.children("ins").get(0)["className"].replace(/oj-tree[^ ]*|$/ig,'').replace(/\s+$/ig," ").replace(/^ /,"").replace(/ $/,"");
                            }
                            if (t.children("ins").get(0)["style"]["backgroundImage"].length)
                            {
                              tmp2.icon = t.children("ins").get(0)["style"]["backgroundImage"].replace("url(","").replace(")","");
                            }
                          }
                          else   {
                             tmp2 = _this["getText"](t);
                          }

                          if (a.length > 1)  {
                            tmp1.data.push(tmp2);
                          }
                          else   {
                            tmp1.data = tmp2;
                         }
                  });

                  li = li.find("> ul > li");
                  if (li.length)  {
                     tmp1.children = _this._getJson(li, li_attr, a_attr, true);
                  }
                  result.push(tmp1);
       });

       return result;
     },

     /**
       *  @private
       */
     _correct_state   : function (obj)
     {
         obj = this._getNode(obj);
         if (!obj || obj === -1) {
           return false;
         }
         obj.removeClass("oj-tree-closed oj-tree-open")
            .removeAttr(WA_EXPANDED)
            .addClass(OJT_LEAF)
            .children("ul")
            .remove();
         this._emitEvent({ "obj" : obj }, "correct_state");
     },


     /**
       *  @private
       */
     _core_notify : function (n, data)
     {
        if (data.opened)  {
          this._expand(n, false, true);
        }
     },


     /*
      *  Dummy function to fire after the first load (so that there is a loaded event)
      *  @private
      */
     _loaded  : function ()
     { 
        this._emitEvent(null, "loaded"); 
      },


     /**
       *   Process the user tree <ul> list placed in the tree div, or loaded via ajax.
       *   @private
       */
     _load_node_html : function (obj, s_call, e_call)
     {
       var s = this._getOptions()["data"],        // work on a copy of the options to avoid
           d,                                     // endless loop in calling success/error funcs
           error_func   = function () {},
           success_func = function () {},
           data         = (s && s["data"]) || null,
           ajax         = (s && s["ajax"]) || null;

       obj = this._getNode(obj);
       if (obj && obj !== -1)  {
         if (obj.data("oj-tree-is-loading")) {
           return;
         }
         else  {
           obj.data("oj-tree-is-loading", true);
         }
       }

       switch(!0)
       {
          case ((!data && !ajax) && (s && (typeof s === "string"))) :
                    this._loadHtmlString(s, obj, s_call, e_call) ;
                    break ;

          case $.isFunction(data):
                    data.call(this, obj, $.proxy(function (d)
                              {
                                 this._loadHtmlString(d, obj, s_call, e_call) ;
                              }, this));
                    break;

          case (!data && !ajax):
                    if (!obj || obj == -1 )  {
                      this._$container_ul
                              .empty()
                              .append(this._data.html.markup)
                              .find("li, a")
                              .filter(function () {
                                               return (!this.firstChild || !this.firstChild.tagName ||
                                                       this.firstChild.tagName !== "INS");
                                                   })
                              .prepend("<ins class='oj-tree-icon'>&#160;</ins>").end()
                              .filter("a").children("ins:first-child")
                              .not(".oj-tree-icon")
                              .addClass(OJT_ICON);

                      //  No point in checking for empty parent <ul> because we don't have a
                      //  "data" option in the first place, so no lazy loading posssible.

                      //  Add the <a> text <span> for hover/click styling
                      this._insertHtmlTextSpan(this._$container_ul) ;

                      if (this._data.types.defType) {             // if "default" type defined
                        this._addDefType(this._$container_ul) ;   // apply to nodes with no asooc type
                      }

                      this._clean_node();
                      this._$container_ul.find("ul").attr(WA_ROLE, WA_GROUP) ;
                      this._$container_ul.find("li").attr(WA_ROLE, WA_TREEITEM) ;
                      this._$container_ul.find("a").attr("tabindex", -1) ;
                    }
                    if (s_call)  {
                      s_call.call(this);
                    }
                    break;

          case (!!data && !ajax) || (!!data && !!ajax && (!obj || obj === -1)):
                    if (!obj || obj == -1) {
                           d = $(data);
                           if (!d.is("ul")) {
                             d = $("<ul />").append(d);
                           }
                           this._$container_ul
                               .empty()
                               .append(d
                               .children())
                               .find("li, a")
                               .filter(function ()
                                           {
                                              return (!this.firstChild || !this.firstChild.tagName ||
                                                      this.firstChild.tagName !== "INS");
                                           })
                               .prepend("<ins class='oj-tree-icon'>&#160;</ins>").end()
                               .filter("a")
                               .children("ins:first-child")
                               .not(".oj-tree-icon")
                               .addClass(OJT_ICON);

                           //  Add the <a> text <span> for hover/click styling
                           this._insertHtmlTextSpan(this._$container_ul) ;

                           if (this._data.types.defType) {             // if "default" type defined
                             this._addDefType(this._$container_ul) ;   // apply to nodes with no asooc type
                           }

                           this._clean_node();
                           this._$container_ul.find("ul").attr(WA_ROLE, WA_GROUP) ;
                           this._$container_ul.find("li").attr(WA_ROLE, WA_TREEITEM) ;
                           this._$container_ul.find("a").attr("tabindex", "-1") ;
                    }
                    if (s_call)  {
                         s_call.call(this);
                    }
                    break;

          case (!data && !!ajax) || (!!data && !!ajax && obj && obj !== -1):
                    obj = this._getNode(obj);
                    error_func = function (x, t, e)
                         {
                           var ef = this._getOptions()["data"]["ajax"]["error"];  // reget the options
                           if (ef) {                                              // without our updated ajax
                             ef.call(this, x, t, e);                              // changes to avoid forever loop
                           }

                           if (obj != -1 && obj.length)  {
                             obj.children("a.oj-tree-loading").removeClass("oj-tree-loading");
                             obj.removeData("oj-tree-is-loading");
                             if (t === "success" && this._data.ds.correctState) {
                                this._correct_state(obj);
                             }
                           }
                           else  {
                             if (t === "success" && this._data.ds.correctState) {
                               this._$container_ul.empty();
                             }
                           }
                           if (e_call)  {
                             e_call.call(this);
                           }
                        };
                    success_func = function (d, t, x)
                        {
                          var parent, lazy ;
                          var sf = this._getOptions()["data"]["ajax"]["success"];  // reget the options
                          if (sf) {                                                // without our updated ajax
                            d = sf.call(this, d, t, x) || d;                       // changes to avoid forever loop
                          }

                          if (d === "" || (d && d.toString && d.toString().replace(/^[\s\n]+$/,"") === "")) {
                            return error_func.call(this, x, t, "");
                          }

                          if (d)  {
                            d = $(d);
                            if (!d.is("ul")) {
                              d = $("<ul />").append(d);
                            }
                            if (obj == -1 || !obj) {
                              this._$container_ul.empty()
                                                 .append(d.children())
                                                 .find("li, a")
                                                 .filter(function ()
                                                    {
                                                      return !this.firstChild || !this.firstChild.tagName ||
                                                                                 this.firstChild.tagName !== "INS";
                                                    })
                                                 .prepend("<ins class='oj-tree-icon'>&#160;</ins>")
                                                 .end()
                                                 .filter("a")
                                                 .children("ins:first-child")
                                                 .not(".oj-tree-icon")
                                                 .addClass(OJT_ICON);

                              parent = this._$container_ul ;

                            }
                            else  {
                               obj.children("a.oj-tree-loading")
                                  .removeClass("oj-tree-loading");

                               this._removeEmptyUL(obj) ;

                               obj.append(d)
                                  .children("ul")
                                  .find("li, a")
                                  .filter(function () {
                                             return (!this.firstChild || !this.firstChild.tagName ||
                                                                         this.firstChild.tagName !== "INS");
                                          })
                                  .prepend("<ins class='oj-tree-icon'>&#160;</ins>")
                                  .end()
                                  .filter("a")
                                  .children("ins:first-child")
                                  .not(".oj-tree-icon")
                                  .addClass(OJT_ICON);
                               obj.removeData("oj-tree-is-loading");
                               parent = obj ;
                            }

                            //  Look for parents with empty children <ul> list (lazy loading),
                            //  and add the closed class to make it a parent.
                            this._handleHtmlParentNoChildren(parent) ;

                            //  Add the <a> text <span> for hover/click styling
                            this._insertHtmlTextSpan(parent) ;

                            // If "default" type defined, apply to nodes with no assoc type
                            if (this._data.types.defType && parent)  {
                              this._addDefType(this._$container_ul) ;
                            }

                            this._clean_node(obj);
                            if (s_call)  {
                              s_call.call(this);
                            }
                          }
                          else  {
                            if (obj && obj !== -1)  {
                               obj.children("a.oj-tree-loading").removeClass("oj-tree-loading");
                               obj.removeData("oj-tree-is-loading");
                               if (this._data.ds.correctState)  { 
                                  this._correct_state(obj);
                                  if (s_call) {
                                    s_call.call(this);
                                  } 
                               }
                              }
                              else  {
                                if (this._data.ds.correctState)  { 
                                   this._$container_ul.empty();
                                   if (s_call) {
                                     s_call.call(this);
                                   } 
                                }
                              }
                              this._$container_ul.find("ul").attr(WA_ROLE, WA_GROUP) ;
                              this._$container_ul.find("li").attr(WA_ROLE, WA_TREEITEM) ;
                          }
                        };

                        //  Prepare for an ajax op. (note: we are updating a copy of the options)
                        s["ajax"]["context"] = this;
                        s["ajax"]["error"]   = error_func;
                        s["ajax"]["success"] = success_func;

                        if (!s["ajax"]["dataType"]) {
                          s["ajax"]["dataType"] = "html";
                        }
                        if ($.isFunction(s["ajax"]["url"])) {
                          s["ajax"]["url"] = s["ajax"]["url"].call(this, obj);
                        }
                        if ($.isFunction(s["ajax"]["data"])) {
                          s["ajax"]["data"] = s["ajax"]["data"].call(this, obj);
                        }
                        $.ajax(s["ajax"]);
                        break;
       }
     },


     /**
       *   Look for parents with empty children <ul> list (lazy loading), and add the closed
       *   class to make it a parent.
       *   @private
       */
     _handleHtmlParentNoChildren : function (parent)
     {
        var lazy = parent
                     .find(parent.is("ul")?  "li ul" : "ul")
                     .filter(function () {
                                return (!this.firstChild ||
                                        this.childNodes.length == 0 ||
                                        (this.childNodes.length == 1 && this.firstChild.nodeType ==3));
                                       }) ;
        $.each(lazy, function() {
                                  $(this).closest("li")
                                         .addClass(OJT_CLOSED) ;
                                }) ;
     },


     /**
       *   Remove an empty <ul> in a node (lazy loading).
       *   @private
       */
     _removeEmptyUL : function(parent)
     {
        var l = parent.find("ul")
                     .filter(function () {
                                return (!this.firstChild ||
                                        this.childNodes.length == 0 ||
                                        (this.childNodes.length == 1 && this.firstChild.nodeType ==3));
                                       }) ;
       if (l.length > 0) {
         l.remove() ;
       }
     },




     /**
       *   Load an HTML <ul><li>...</ul> markup string
       *   @private
       */
     _loadHtmlString : function (s, obj, s_call, e_call)
     {
        var parent ;

        if (s && s !== "" && s.toString && s.toString().replace(/^[\s\n]+$/,"") !== "") {
          s = $(s);
          if (! s.is("ul")) {
            s = $("<ul />").append(s);
          }

          if (obj == -1 || !obj) {
            this._$container_ul.empty()
                               .append(s.children())
                               .find("li, a")
                               .filter(function () {
                                         return (!this.firstChild || !this.firstChild.tagName ||
                                                 this.firstChild.tagName !== "INS");
                                       })
                               .prepend("<ins class='oj-tree-icon'>&#160;</ins>")
                               .end().filter("a")
                               .children("ins:first-child")
                               .not(".oj-tree-icon")
                               .addClass(OJT_ICON);

            parent = this._$container_ul ;

            //  No point in checking for empty parent <ul> because we don't have a
            //  "data" option in the first place, so no lazy loading posssible.

            //  If the "default" node type has been defined, add the def type to any nodes
            //  that have not been given an explicit type
            this._addDefType(this._$container_ul) ;
          }
          else  {
            obj.children("a.oj-tree-loading").removeClass("oj-tree-loading");
            obj.append(s)
               .children("ul")
               .find("li, a")
               .filter(function ()
                          {
                             return !this.firstChild || !this.firstChild.tagName ||
                                                         this.firstChild.tagName !== "INS";
                          })
               .prepend("<ins class='oj-tree-icon'>&#160;</ins>")
               .end().filter("a")
               .children("ins:first-child")
               .not(".oj-tree-icon")
               .addClass("oj-tree-icon");
            obj.removeData("oj-tree-is-loading");

            parent = obj ;

            //  If the "default" node type has been defined, add the def type to
            //  any nodes that have not been given an explicit type
            this._addDefType(this.obj) ;
          }

            //  Add the <a> text <span> for hover/click styling
          if (parent) {
            this._insertHtmlTextSpan(parent) ;
          }

          this._clean_node(obj);
          if (s_call)  {
            s_call.call(this);
          }
        }
        else  {
          if (obj && obj !== -1)  {
            obj.children("a.oj-tree-loading").removeClass("oj-tree-loading");
            obj.removeData("oj-tree-is-loading");
            if (this._data.ds.correctState) { 
              this._correct_state(obj);
              if (s_call) {
                s_call.call(this);
              } 
            }
          }
          else  {
            if (this._data.ds.correctState)
            { 
              this._$container_ul.empty();
              if (s_call) {
                s_call.call(this);
              } 
            }
          }
        }
     },

     /**
       *  Insert the <a> text <span> for hover/click styling
       *  @private
       */
     _insertHtmlTextSpan : function(elem)
     {
        $.each(elem.find("li a"), function (i, val) {
        	 var ih = val.innerHTML ;
             ih = ih.replace("ins>", "ins><span class='" + OJT_TITLE + "'>") ;
             ih += "</span>" ;
        	 val.innerHTML = ih ;
        });
     },

     /**
       *  Add the "default" type attr to all nodes that do not have an explicit type defined.
       *  @private
       */
     _addDefType : function(obj)
     {
        var s, typeAttr ;
        if (this._data.types.defType) {
          s = this.options["types"];
          typeAttr = s? s["attr"] : this._data.types.defaults["attr"];

          $.each(obj.find("li"), function (i, val) {
                  val = $(val)
                  if (! val.attr(typeAttr)) {
                    val.attr(typeAttr, "oj-tree-deftype") ;
                  }
            });
        }
     },


     /*
      *
      *   @private
      */
     _dnd_prepare : function ()
     {
       var  vars = this._data.dnd.vars ;

       if (! vars.r || ! vars.r.length) {
         return;
       }
       this._data.dnd.off = vars.r.offset();

       if (this._isRtl) {
         this._data.dnd.off.right = this._data.dnd.off.left + vars.r.width();
       }

       if (this._data.dnd.foreign)  {

         var a = this.options["dnd"]["drag_check"].call(this, { "o" : vars.o, "r" : vars.r });

         this._data.dnd["after"]   = a["after"];
         this._data.dnd["before"]  = a["before"];
         this._data.dnd["inside"]  = a["inside"];
         this._data.dnd.prepared   = true;
         return this._dnd_show();
       }

       this._prepare_move(vars.o, vars.r, "before");
       this._data.dnd["before"] = this["check_move"]();
       this._prepare_move(vars.o, vars.r, "after");
       this._data.dnd["after"]  = this["check_move"]();

       if (this._is_loaded(vars.r)) {
         this._prepare_move(vars.o, vars.r, "inside");
         this._data.dnd["inside"] = this["check_move"]();
       }
       else  {
         this._data.dnd["inside"] = false;
       }

       this._data.dnd.prepared = true;
       return this._dnd_show();
     },


     /*
      *
      *   @private
      */
     _dnd_show : function ()
     {
        var  dnd = this._data.dnd ;

        if (! dnd.prepared)  {
          return;
        }

        var o     =  ["before","inside","after"],
            r     =  false,
            pos,
            ctl   =  dnd.ctl,
            vars  =  dnd.vars ;

        if (dnd.w < this._data.core.li_height/3)  {
           o = ["before","inside","after"];
        }
        else if (dnd.w <= this._data.core.li_height * 2/3)  {
          o = dnd.w < this._data.core.li_height/2 ? ["inside","before","after"] :
                                                    ["inside","after","before"] ;
        }
        else {
          o = ["after","inside","before"];
        }
 
        $.each(o, $.proxy(function (i, val)
           { 
             if (this._data.dnd[val])  {
               ctl.helper.children("ins").removeClass(OJT_DRAG_INVALID).addClass(OJT_DRAG_OK);
               r = val;
               return false;
             }
        }, this));

        if (r === false)  {
           ctl.helper.children("ins").removeClass(OJT_DRAG_OK).addClass(OJT_DRAG_INVALID);
        }
        
        pos = this._isRtl ? (this._data.dnd.off.right - 18) : (this._data.dnd.off.left + 10);
        switch(r)
         {
            case "before":
                vars.m.css({ "left" : pos + "px",
//mon20                      "top"  : (this._data.dnd.off.top - 6) + "px" }).show();
                             "top"  : (this._data.dnd.off.top - 8) + "px" }).show();
                if (vars.ml) {
                  vars.ml.css({ "left" : (pos + 8) + "px",
//mon20                         "top"  : (this._data.dnd.off.top - 1) + "px" }).show();
                                "top"  : (this._data.dnd.off.top - 3) + "px" }).show();
                }
                break;

            case "after":
                vars.m.css({ "left" : pos + "px",
                             "top"  : (this._data.dnd.off.top +
//mon20                                this._data.core.li_height - 6) + "px" }).show();
                                       this._data.core.li_height - 8) + "px" }).show();
                if (vars.ml) {
                  vars.ml.css({ "left" : (pos + 8) + "px",
                                "top" : (this._data.dnd.off.top +
//mon20                                  this._data.core.li_height - 1) + "px" }).show();
                                         this._data.core.li_height - 3) + "px" }).show();
                }
                break;

            case "inside":
                vars.m.css({ "left" : pos + ( this._isRtl ? -4 : 4) + "px",
                             "top" : (this._data.dnd.off.top + this._data.core.li_height/2 - 5) + "px" }).show();
                if (vars.ml)  {
                  vars.ml.hide();
                }
                break;

            default:
                vars.m.hide();
                if (vars.ml) {
                  vars.ml.hide();
                }
                break;
        }

        vars.last_pos = r;

        return  r;

     },



     /*
      *
      *   @private
      */
     _dnd_enter : function (obj)
     {
        var dnd = this._data.dnd,
            vars = dnd.vars ;

        if (dnd.mto)  { 
          clearTimeout(dnd.mto);
          dnd.mto = false;
        }

        dnd.prepared = false;
        vars.r = this._getNode(obj);

        var s             = this.options["dnd"];
        var checkTimeout  = s["check_timeout"] ;

        if (checkTimeout)  { 

           // do the calculations after a minimal timeout (users tend to drag quickly to the desired location)

           if (dnd.to1)  {
             clearTimeout(dnd.to1);
           }
           dnd.to1 = setTimeout($.proxy(this._dnd_prepare, this), checkTimeout); 
        }
        else { 
            this._dnd_prepare(); 
        }

        var openTimeout  = s["open_timeout"] ;
        if (openTimeout)  { 
          if (dnd.to2)  {
            clearTimeout(dnd.to2);
          }
          if (vars.r && vars.r.length && vars.r.hasClass(OJT_CLOSED))  { 
            // if the node is closed - open it, then recalculate
            dnd.to2 = setTimeout($.proxy(this._dnd_open, this), openTimeout);
          }
        }
        else   {
          if (vars.r && vars.r.length && vars.r.hasClass(OJT_CLOSED))  { 
             this._dnd_open();
          }
        }
  
     },


     /*
      *
      *   @private
      */
     _dnd_leave : function (e)
     {
        var dnd  = this._data.dnd,
            vars = this._data.dnd.vars ;

        dnd["after"]   = false;
        dnd["before"]  = false;
        dnd["inside"]  = false;

        this._data.dnd.ctl.helper.children("ins").removeClass(OJT_DRAG_OK).addClass(OJT_DRAG_INVALID);

        vars.m.hide();

        if (vars.ml) {
          vars.ml.hide();
        }
        if (vars.r && vars.r[0] === e.target.parentNode)
        {
          if (dnd.to1) {
            clearTimeout(dnd.to1);
            dnd.to1 = false;
          }
          if (dnd.to2)  {
            clearTimeout(dnd.to2);
            dnd.to2 = false;
          }
        }

     },


     /**
       *  Expand the node hovered over while dragging so the user can drop inside a folder.
       *  @private
       */
     _dnd_open : function ()
     {
        var  vars = this._data.dnd.vars ;

        this._data.dnd.to2 = false;
        this["expand"](vars.r, $.proxy(this._dnd_prepare, this), true);
     },


     /**
       *  Drag is complete - move the node.
       *  @private
       */
     _dnd_finish : function (e)
      {
         var dnd  = this._data.dnd,
             vars = this._data.dnd.vars ;

         if (dnd.foreign)   {
           if (dnd["after"] || dnd["before"] || dnd["inside"])  {
              this.options["dnd"]["drag_finish"].call(this, { "o" : vars.o, "r" : vars.r, "p" : vars.last_pos });
           }
         }
         else  {
           this._dnd_prepare();
           this._move_node(vars.o, vars.r, vars.last_pos, e[this.options["dnd"]["copy_modifier"] + "Key"]);
         }

         vars.o = false;
         vars.r = false;
         vars.m.hide();

         if (vars.ml) {
           vars.ml.hide();
         }
     },


     /**
       *  Mouse is down on an <a>, prepare for drag and drop
       *  @private
       */
     _start_drag : function (obj, e)
     {
        var  dnd  = this._data.dnd,
             vars = this._data.dnd.vars ;

        vars.o = this._getNode(obj);

        if (vars.o.hasClass("oj-disabled") || this._data.core.locked) {
          return ;
        }

        if (this._data.ui && this["isSelected"](vars.o))  {
          vars.o = this._getNode(null, true);
        }

        var dt  = vars.o.length > 1 ? this.getTranslatedString("m_multisel") : this["getText"](vars.o),
            cnt = this._getContainer();

        if (!this._data.core.htmlTitles) {
          dt = dt.replace(/</ig,"&lt;").replace(/>/ig,"&gt;");
        }
        this._drag_start(e, { jstree : true,
                              obj    : vars.o
                            }, "<ins class='oj-tree-icon'></ins>" + dt);

        if (this._data.themes) {
          if (vars.m) {
             vars.m.addClass("oj-tree-" + this._data.themes.theme);
          }
          dnd.ctl.helper.addClass("oj-tree-dnd-helper oj-tree-" + this._data.themes.theme); 
        }

        dnd.cof    = cnt.offset();
        dnd.cw     = parseInt(cnt.width(),10);
        dnd.ch     = parseInt(cnt.height(),10);
        dnd.active = true;
     },


     /**
       *  Start drag/drop process
       *  @private
       */
     _drag_start : function (e, data, html)
     {  
         var ctl = this._data.dnd.ctl ;

         if (ctl.is_drag)  {
           this._drag_stop() ;
         }
         try {
               e.currentTarget.unselectable = "on";
               e.currentTarget.onselectstart = function()  { return false; };

               if (e.currentTarget.style)  {
                e.currentTarget.style.MozUserSelect = "none";
               }
         } catch(err) { }

         ctl.init_x    = e.pageX;
         ctl.init_y    = e.pageY;
         ctl.user_data = data;
         ctl.is_down   = true;
         ctl.helper    = $("<div class='ojtreeu-dragged' />").html(html); //.fadeTo(10,0.25);

         // Listen for mouse drag and mouse up events
         $(document).bind("mousemove", this._drag.bind(this));
         $(document).bind("mouseup",   this._drag_stop.bind(this));

         return false;
     },


     /**
       *  Mouse is down and we are dragging 
       *  @private
       */
     _drag :  function (e)
     { 
        var ctl  = this._data.dnd.ctl,
            vars = this._data.dnd.vars ;

        if (! ctl.is_down) {
          return;
        }
        if (! ctl.is_drag)  {
          if (Math.abs(e.pageX - ctl.init_x) > 5 || Math.abs(e.pageY - ctl.init_y) > 5)  { 
            ctl.helper.appendTo("body");
            ctl.is_drag = true;
            $(document).triggerHandler("drag_start.ojtreeu", [{
                                                                 "event" : e,
                                                                 "data"  : ctl.user_data
                                                              }]);
          }
          else  {
            return;
          }
        }


        // maybe use a scrolling parent element instead of document?
        if (e.type === "mousemove")
        {   // thought of adding scroll in order to move the helper, but mouse position is n/a
           var d = $(document),
               t = d.scrollTop(),
               l = d.scrollLeft();

           if (e.pageY - t < 20)  { 
             if (vars.sti && vars.dir1 === "down") {
                clearInterval(vars.sti);
                vars.sti = undefined;
             }
             if (! vars.sti)  {
               vars.dir1 = "up";
               vars.sti = setInterval(function ()
                            {
                              $(document).scrollTop( $(document).scrollTop() - ctl.scroll_spd );
                            }, 150);
             }
           }
           else  { 
              if (vars.sti && vars.dir1 === "up")   {
                clearInterval(vars.sti);
                vars.sti = undefined;
              }
           }

           if ($(window).height() - (e.pageY - t) < 20)   {
             if (vars.sti && vars.dir1 === "up")  {
                clearInterval(vars.sti);
                vars.sti = undefined;
             }
             if (! vars.sti)  {
               vars.dir1 = "down";
               vars.sti = setInterval(function ()
                         {
                           $(document).scrollTop( Number($(document).scrollTop()) + ctl.scroll_spd );
                           // above Number() is for the closure compiler!!
                         }, 150);
             }
           }
           else   { 
              if (vars.sti && vars.dir1 === "down")  {
                clearInterval(vars.sti);
                vars.sti = undefined;
              }
           }

           if (e.pageX - l < 20)   {
             if (vars.sli && vars.dir2 === "right")  {
                clearInterval(vars.sli);
                vars.sli = undefined;
             }
             if (! vars.sli)  {
                vars.dir2 = "left";
                vars.sli = setInterval(function ()
                       {
                         $(document).scrollLeft( $(document).scrollLeft() - ctl.scroll_spd );
                       }, 150);
             }
           }
           else   { 
             if (vars.sli && vars.dir2 === "left")   {
               clearInterval(vars.sli);
               vars.sli = undefined;
             }
           }

           if ($(window).width() - (e.pageX - l) < 20)   {
             if (vars.sli && vars.dir2 === "left")  {
                clearInterval(vars.sli);
                vars.sli = undefined;
             }
             if (! vars.sli)   {
               vars.dir2 = "right";
               vars.sli = setInterval(function ()
                        {
//                        Number() is for the closure compiler!!
                          $(document).scrollLeft(Number($(document).scrollLeft()) + ctl.scroll_spd);
                        }, 150);
             }
           }
           else  { 
             if (vars.sli && vars.dir2 === "right")  {
               clearInterval(vars.sli);
               vars.sli = undefined;
             }
           }
        }

        ctl.helper.css({ left : (e.pageX + ctl.helper_left) + "px", top : (e.pageY + ctl.helper_top) + "px" });
        $(document).triggerHandler("drag.ojtreeu", [{
                                                      "event" : e,
                                                      "data"  : ctl.user_data
                                                    }]);
     },


     /**
       *  @private
       */
     _drag_stop  : function (e)
     {
        var vars = this._data.dnd.vars,
            ctl  = this._data.dnd.ctl ;

        if (vars.sli)  {
          clearInterval(vars.sli);
        }
        if (vars.sti)   {
          clearInterval(vars.sti);
        }

        $(document).unbind("mousemove", this._drag.bind(this));
        $(document).unbind("mouseup",   this._drag_stop.bind(this));
        $(document).triggerHandler("drag_stop.ojtreeu", [{
                                                           "event" : e? e: {},
                                                           "data"  : ctl.user_data
                                                         }]);
        ctl.helper.remove();
        ctl.init_x    = 0;
        ctl.init_y    = 0;
        ctl.user_data = {};
        ctl.is_down   = false;
        ctl.is_drag   = false;
    },


     /**
       *  @private
       */
     _save_opened : function ()
     {
        var _this = this;
        this._data.core.toExpand = [];
        this._$container_ul.find("li.oj-tree-open").each(function () { 
            if (this.id)  { 
              _this._data.core.toExpand.push("#" + this.id.toString().replace(/^#/,"").replace(/\\\//g,"/").replace(/\//g,"\\\/").replace(/\\\./g,".").replace(/\./g,"\\.").replace(/\:/g,"\\:"));
            }
        });

        this._emitEvent(_this._data.core.toExpand, "save_opened");
     },


     /*
      *   Reload tree nodes
      *   @private
      */
      _reload_nodes : function (is_callback)
      {
         var _this     = this,
             done      = true,
             current   = [],
             remaining = [],
             ea,
             bExpandAll ;
     
         if (!is_callback)  { 
            this._data.core.reopen     = false; 
            this._data.core.refreshing = true; 

            bExpandAll = this._data.core.toExpand === "all" ;
            if (bExpandAll) {
              this._data.core.toExpand  = [];
            }
            else  if (($.type(this._data.core.toExpand) === "array") && (this._data.core.toExpand.length > 0) &&
                                                                        (this._data.core.toExpand[0] === "all")) {
              this._data.core.toExpand.length = 0 ;
              bExpandAll = true ;
            }

            if (bExpandAll) {
              ea = this._$container_ul.find("li.oj-tree-closed").each(function() {
                     var id = $(this).attr("id") ;
                     _this._data.core.toExpand.push('#' + $(this).attr("id")) ;
                   }) ;
            }
     
            this._data.core.toExpand = 
                     $.map(
                            $.makeArray(this._data.core.toExpand),
                                function (n) {
                                   return "#" + n.toString().replace(/^#/, "")
                                                            .replace(/\\\//g, "/")
                                                            .replace(/\//g, "\\\/")
                                                            .replace(/\\\./g, ".")
                                                            .replace(/\./g, "\\.")
                                                            .replace(/\:/g, "\\:");
                                }
                          );
     
            this._data.core.toLoad = 
                       $.map(
                              $.makeArray(this._data.core.toLoad),
                                  function (n)  {
                                     return "#" + n.toString().replace(/^#/,"")
                                                              .replace(/\\\//g,"/")
                                                              .replace(/\//g,"\\\/")
                                                              .replace(/\\\./g,".")
                                                              .replace(/\./g,"\\.")
                                                              .replace(/\:/g,"\\:");
                            }
                       );
     
            if (this._data.core.toExpand.length)  {
              this._data.core.toLoad  = this._data.core.toLoad.concat(this._data.core.toExpand);
            }
         }
     
         if (this._data.core.toLoad.length) {
            $.each(this._data.core.toLoad, function (i, val) {
                if (val == "#") {
                  return true;
                }
                if ($(val).length) {
                  current.push(val);
                }
                else {
                  remaining.push(val);
                }
            });
     
            if (current.length) {
               this._data.core.toLoad  =  remaining;
               $.each(current, function (i, val) { 
                   if (! _this._is_loaded(val))  {
                      _this._load_node(val, function ()  {
                                               _this._reload_nodes(true);
                                             }, function ()  {
                                                 _this._reload_nodes(true);
                                                }
                                      );
                      done = false;
                   }
               });
            }
         }

         if (this._data.core.toExpand.length)
         {
            $.each(this._data.core.toExpand, function (i, val) {
                 _this["expand"](val, false, true); 
            });
         }

         if (done)  { 
            // TODO: find a more elegant approach to syncronizing returning requests

            if (this._data.core.reopen)  {
              clearTimeout(this._data.core.reopen);
            }
            this._data.core.reopen = setTimeout(function ()  {
                                                   _this._emitEvent({}, "reload_nodes");
                                               }, 50);

            this._data.core.refreshing = false;
            this._reopen();
         }
    },


     /*
      *   TDO   replace with Jet theming.
      *   @private
      */
    "set_theme" : function (theme_name, theme_url)
    {
       if (! theme_name)  {
         return false;
       }

       if (! theme_url)  {
          theme_url = this._data.themes._themes + theme_name + '/style.css';
       }

       if ($.inArray(theme_url, this._data.themes.themes_loaded) == -1)  {
         _addSheet({ url : theme_url });
         this._data.themes.themes_loaded.push(theme_url);
       }

       if (this._data.themes.theme != theme_name)  {
         this._$container.removeClass('oj-tree-' + this._data.themes.theme);
         this._data.themes.theme = theme_name;
       }

       this._$container.addClass('oj-tree-' + theme_name);

       if (! this._data.themes.dots) {
         this["hide_dots"]();
       }
       else  {
          this["show_dots"]();
       }

       if (! this._data.themes.icons)  {
         this["hide_icons"]();
       }
       else  {
         this["show_icons"]();
       }
 
       this._emitEvent(null, "set_theme");

    },


    /*
     *   Shows the hierarchy lines.  Not used in V1
     *   @private
     */
    "show_dots"  : function ()
    {
      this._data.themes.dots = true;
      this._$container.children("ul").removeClass("oj-tree-no-dots");
    },

    /*
     *   Hides the hierarchy lines.  Not used in V1
     *   @private
     */
    "hide_dots"   : function ()
    {
      this._data.themes.dots = false;
      this._$container.children("ul").addClass("oj-tree-no-dots");
    },

    /*
     *   Toggles the current hierarchy line state.  Not used in V1
     *   @private
     */
    "toggle_dots" : function ()
    {
       if (this._data.themes.dots) {
         this["hide_dots"]();
       }
       else  {
         this["show_dots"]();
       }
    },

    /*
     *   Returns true if node icons are currently displayed.  Users can find this state from options.
     *   @private
     */
    "isIcons"  : function ()
    {
       return this._data.themes.icons ;
    },


    /*
     *   Displays node icons. Users can set this state from options.
     *   @private
     */
    "show_icons"  : function ()
    {
       this._data.themes.icons = true;
       this._$container.children("ul").removeClass("oj-tree-no-icons");
    },

    /*
     *   Hides node icons. Users can set this state from options.
     *   @private
     */
    "hide_icons"  : function ()
    {
       this._data.themes.icons = false;
       this._$container.children("ul").addClass("oj-tree-no-icons");
    },

    /*
     *   Toggles the display state of node icons. User can set this state from options.
     *   @private
     */
    "toggle_icons" : function ()
    {
       if (this.data.themes.icons) {
         this["hide_icons"]();
       }
       else  {
         this["show_icons"]();
       }
    },

    /**
      *   Enables keyboard support
      *   @private
      */
    _enableKeys : function ()
    {
       this._data.keys.enabled = true;
    },

    /**
      *   Disables keyboard support
      *   @private
      */
    _disableKeys : function ()
    {
       this._data.keys.enabled = false;
    },


    /**
      *   Initializes the widget, examining options and setting up
      *   internal data structures.
      *   @private
      */
     _initTree : function()
     {
        this._initData() ;
        this._initCoreOpts() ;
        this._initUIOpts() ;
        this._initCrrmOpts() ;
        this._initThemeOpts()
        this._initDSOpts() ;
        this._initTypeOpts()
        this._initDnDOpts() ;
        this._initMenuOpts() ;

        this._initCore() ;
        this._initUI() ;
        this._initThemes() ;
        this._initDataSource() ;
//        this._initCrrm() ;
        this._initTypes() ;
        this._initDnD() ;
        this._initKeys() ;
        this._initMenu() ;

        this._start() ;
     },


     /**
       *   Emit events
       *   @param {Object} data an object containing details about the event.
       *   @param {string} eventname the raw event name (e.g. "select", or "expandAll".
       *                             When the event is fired, it is "ojselect" and "ojexpandall",
       *                             but also the options "select" and "expandAll" are called.
       *   @private
       */
     _emitEvent : function (data, eventname) 
     { 
        if ((! eventname) || $.type(eventname) !== "string"){
          return ;
        } 

        var rslt,
            func,
            args     = Array.prototype.slice.call(arguments),
            rlbk     = false,
            evname   = eventname,
            inst     = this._$container,
            isBefore = (eventname === "before"),
            isPublic = false,
            item ;

        if ((this._data.core.locked === true) && (eventname !== "unlock")
                                              && (eventname !== "isLocked")
                                              && (eventname !== "lock")) {
          return;
        }

        evname   =  _convertEventName(eventname) ;
        isPublic = _isPublicEvent(evname) ;
        if (! isPublic)  {
          evname = "tree" + evname ;        // internal event
        }

        item = (data? data["obj"] : undefined) ;
        if (evname === "loaded") {
          item = -1 ;
        }

        //  Trigger the event

        var eventdata = {} ;                       // build the "ui" argument
        eventdata["item"] = item ;
        eventdata["inst"] = inst ;

        if (isBefore) {
          func               = data["func"] ;      // target method
          eventdata["func"]  = func ;
          eventdata["args"]  = args ;
          if (func === "rename") {
            eventdata["title"]     = data["title"] ;
            eventdata["prevTitle"] = data["prevTitle"] ;
          }
        }
        else  if (isPublic) {
          if (evname == "move") {
            eventdata["position"]  = data.p ;      // position relative to the reference node
            eventdata["reference"] = data.r ;      // the reference node
            eventdata["data"]      = data ;        // (req'd internally)
          }
          else if (evname == "rename") {
            eventdata["title"]     = data["title"] ;      // the new node title to be
            eventdata["prevTitle"] = data["prevTitle"] ;  // the current title
          }
          else if (evname == "remove") {            // node was deleted via context menu
            eventdata["parent"]  = data["parent"] ; // parent node
            eventdata["prev"]    = data["prev"] ;   // the "previous" node
          }
          else if (evname == "delete") {            // node was deleted via context menu
            eventdata["prev"]   = data["prev"] ;    // (req'd internally) - the "previous" node
            eventdata["parent"] = data["parent"] ;  // parent node
          }
          else if (evname === "expandAll" || evname === "collapseAll" || evname === "deselectAll") {         
            eventdata["targ"]   = data["targ"] ;    // the target of the op (node or -1)
          }
        }

        // console.log("Event (" + eventname + ")  " + evname + " isPublic=" + isPublic +
        //                            (isBefore? (" isBefore=true - " + eventdata["func"]) : ""));

        if (isPublic) {
          rslt = this._trigger(evname, new $.Event("oj" + evname), eventdata) ;

          if (isBefore) {
            //  console.log("Event (" + eventname + ") " + eventdata["func"] + " returned " + rslt);
            if (typeof rslt != "undefined") {
              rslt = rslt? true : false ;         // returns true/false/undefined
            }
            return rslt ;
          }
        }
        else {
          this._$container.trigger(evname, eventdata) ;    // internal event
        }
        
     },


     /**
       *  TDO _not currently used in V1
       *  @private
       */
     __rollback : function ()
     { 
         var
         rlbk = this["get_rollback"]();
         return rlbk;
     },


     /**
       *   To Be Removed  TDO 
       *   @private
       */
     __call_old : function (replace_arguments)
     {
//       return func.old.apply(this, (replace_arguments ? Array.prototype.slice.call(arguments, 1) : args ) );
     },


     /*
      *  Tree initialization is complete.  Build and render the tree.
      *  @private
      */
     _start : function()
     {
       this.set_focus(); 

       if (this._isRtl) {
         this._$container.addClass("oj-tree-rtl").css("direction", "rtl");
       }

       //  Create the outer <ul> with a temporary <li> saying "Loading..."

       this._$container.html("<ul role='tree' tabindex='0' class='oj-tree-list' style='outline:none'" + 
                    ((this._data.core.selectMode === -1)? " aria-multiselectable='true'" : "") +
                    "><li class='oj-tree-last oj-tree-leaf'><ins>&#160;</ins><a class='oj-tree-loading' href='#'><ins class='oj-tree-icon'>&#160;</ins>" + this.getTranslatedString("m_loading") + "</a></li></ul>");

       this._$container_ul = this._$container.children("ul:eq(0)");
       this._$container.data("oj-tree-instance-id", this._getIndex());

       this._data.core.li_height = this._$container_ul.find("li.oj-tree-closed, li.oj-tree-leaf").eq(0).height() || 18;

       this._$container
              .delegate(".oj-tree-list li > ins", "click.ojtree", $.proxy(function (event)  {
                     var trgt = $(event.target);
                     // if(trgt.is("ins") && event.pageY - trgt.offset().top < this.data.core.li_height) { this.toggle_node(trgt); }
                     this["toggleExpand"](trgt);
                }, this))
              .bind("mousedown.ojtree", $.proxy(function ()  { 
                     this.set_focus(); // This used to be setTimeout(set_focus,0) - why?
                }, this))
              .bind("dblclick.ojtree", function (event)  { 
                     var sel;
                     if (document.selection && document.selection.empty) {
                       document.selection.empty();
                     }
                     else  {
                       if (window.getSelection)  {
                         sel = window.getSelection();
                         try { 
                               sel.removeAllRanges();
                               sel["collapse"](document.getElementsByTagName("body")[0], 0);
                             } catch (err) { }
                       }
                     }
                });
       this._$container_ul
               .focus($.proxy(function(e) {
                        this._data.ui.focused = true ;
                      }, this)
               )
               .blur($.proxy(function(e) {
                        this._data.ui.focused = false ;
                     }, this)
               );

       if (this._data.core.notify_plugins)  {          // TDO is it needed
         this._$container
             .bind("treeload_node", $.proxy(function (e, ui)  { 
                  var o = this._getNode(ui["item"]),
                      t = this;
                  if (o === -1)  {
                    o = this._$container_ul;
                  }
                  if (! o.length)  {
                    return;
                  }

                  o.find("li").each(function ()  {
                       var th = $(this);
                       if (th.data("oj-tree"))
                       {
                         $.each(/** @type {Array} */(th.data("oj-tree")), function (plugin, values)
//COD                    $.each(th.data("oj-tree"), function (plugin, values)
                            {
//Fri                          if (t.data[plugin] && $.isFunction(t["_" + plugin + "_notify"]))
//Sat22                        if (t["data"][plugin] && $.isFunction(t["_" + plugin + "_notify"]))
                               if (th["data"][plugin] && $.isFunction(t["_" + plugin + "_notify"]))   //TDO
                               {
                                 t["_" + plugin + "_notify"].call(t, th, values);
                               }
                            });
                       }
                  });

             }, this));
       }

       if (this._data.core.load_open)   {

         this._$container
            .bind("treeload_node", $.proxy(function (e, ui)  { 
                 var o = this._getNode(ui["item"]),
                     t = this;
                 if (o === -1)  {
                   o = this._$container_ul;
                 }
                 if (!o.length)  {
                   return;
                 }
                 o.find("li.oj-tree-open:not(:has(ul))").each(function ()
                     {
                        this._load_node(this, $.noop, $.noop);
                 });
            }, this));
       }

       this._emitEvent({}, "init");      // Tree is now init'd (but nodes have not yet been added)

       if (this._data.ds.type !== DS_NONE && this._data.ds.type !== DS_ERROR) {
         this._load_node(-1, function ()  {                  //  Construct and add the nodes
                               this._loaded();
                               this._reload_nodes();
                             });
       }
       else {
          this._applyEmptyText() ;     //  Use emptyText option if defined.
       }

       //  Tree div is now constructed, note if context menu has been set.
       if (this._data.menu.usermenu) {
         this._applyMenu() ;
       }

       // Add this tree's keyboard combination handler
       _addKeyFilter( {
                        _handler : this._keyHandler,
                        _selector: this._$container_ul,
                        _this    : this
                      }) ;
       this._enableKeys();
     },


     /*
      *  Initialize the Core section
      *  @private
      */ 
     _initCore : function()
     {
       this._data.core.locked   = false;

       this._$container.addClass("oj-tree oj-tree-" + this._getIndex()) ;     //TDO TDO

       this._$container.css("outline", "none");
       this._$container.css("MozUserSelect", "none");
       this._$container.css("WebkitTouchCallout", "none");
       this._$container.css("WebkitUserSelect", "none");
       this._$container.css("WebkitTapHighlightColor", "rgba(0,0,0,0)");
     },


    /*
     *  Initialize the UI section
     *  @private
     */
     _initUI : function() 
     {
         this._data.ui.selected      = $(); 
         this._data.ui.last_selected = false; 
         this._data.ui.hovered       = null;
//       this._data.ui.to_select     = this.options["initSelected"];  // removed per Design Review

        // Bind to events
        this._$container
             .delegate(".oj-tree-list a", "click.ojtree", $.proxy(function (event)
                {
                  event.preventDefault();
                  event.currentTarget.blur();
                  if (!$(event.currentTarget).hasClass("oj-tree-loading"))  {
                    this.set_focus();
                    this._select(event.currentTarget, true, event);
                  }
                }, this))
             .delegate(".oj-tree-list a", "mouseenter.ojtree", $.proxy(function (event)
                {
                  if (! $(event.currentTarget).hasClass("oj-tree-loading"))  {
                     this["hover"](event.target);
                  }
                }, this))
             .delegate(".oj-tree-list a", "mouseleave.ojtree", $.proxy(function (event)
               {
                  if (! $(event.currentTarget).hasClass("oj-tree-loading"))  {
                    this["dehover"](event.target);
                  }
               }, this))
             .bind("treereopen", $.proxy(function ()
               { 
                 this["reselect"]();
               }, this))
             .bind("treeget_rollback", $.proxy(function ()
               { 
                  this["dehover"]();
                  this["save_selected"]();
               }, this))
             .bind("treeset_rollback", $.proxy(function ()
               { 
                  this["reselect"]();
               }, this))
             .bind("ojcollapse", $.proxy(function (event, ui)
              { 
                var obj   = this._getNode(ui["item"]),
                    clk   = (obj && obj.length) ? obj.children("ul").find("a.oj-tree-clicked") : $(),
                    _this = this;
                if (this.options["selectedParentCollapse"] === false || (! clk.length))  {
                  return;
                }
                clk.each(function ()  { 
                               this["deselect"](this);
                               if (this.options["selectedParentCollapse"] === "selectParent")  {
                                  this["select"](obj);
                               }
                         });
                 }, this))
             .bind("ojremove", $.proxy(function (event, ui)         // node delete 
                { 
                   var s     = this.options["selectPrevOnDelete"],
                       obj   = this._getNode(ui["item"]),
                       clk   = (obj && obj.length) ? obj.find("a.oj-tree-clicked") : [],
                       _this = this;

                     clk.each(function ()
                                {
                                   _this["deselect"](this);
                                });
                     if (s && clk.length)
                     { 
                       ui["prev"].each(function ()
                          { 
//Wed3                      if(this.parentNode)
                            if (this["parentNode"])
                            {
                              _this["select"](this);
                              return false;   // if return false is removed all prev nodes will be selected 
                            }
                         });
                     }
                 }, this))
             .bind("ojmove", $.proxy(function (event, ui)
                { 
                   var data = ui["data"] ;
                   if (data["cy"])  { 
                     data["oc"].find("a.oj-tree-clicked").removeClass(OJT_CLICKED);
                     data["oc"].removeAttr(WA_SELECTED);
                   }
                 }, this));

     },

     /*
      *  Initialize the data source
      *  @private
      */
     _initDataSource : function()
     {
        this._initTreeData() ;
        this._initJsonData() ;
        this._initHtmlData() ;
     },

     /*
      *  Initialize the tree data source
      *  @private
      */
     _initTreeData : function()
     {
        if (this._data.ds.type === DS_TREE) {
          this._tds        = (this.options["data"] || null) ;     // the tree data source
          this._load_node  = this._load_node_DS ;
          this._is_loaded  = this._is_loaded_DS ;
          this._refresh    = this._refresh_DS ;
       }
     },

     /*
      *  Initialize the json_data section if requested
      *  @private
      */
     _initJsonData : function()
     {
        if (this._data.ds.type === DS_JSON) {
          if (this._data.ds.progressiveUnload)  {
            this._$container.bind("treeafter_close", function (e, ui)  {
                                     ui["item"].children("ul").remove();
                                   });
          }

          this._load_node  = this._load_node_J ;
          this._is_loaded  = this._is_loaded_J ;
          this._refresh    = this._refresh_json ;
        }
     },


     /**
       *  Initialize html_data support if requested.
       *  @private
       */
     _initHtmlData : function()
     {
       if (this._data.ds.type !== DS_HTML) {
         return ;
       }

       if (this._data.html.useExistingMarkup) {
         // this used to use html() and clean the whitespace, but this way any attached data was lost
         this._data.html.markup      = this._$container.find(" > ul > li");
         this._data.html.cloneMarkup = this._data.html.markup.clone(true);

         // remove white space from LI node - otherwise nodes appear a bit to the right
//         this._data.html.originalContainerHtml.find("li").addBack()
//                                                         .contents()
//                                                         .filter(function()
//                                                             {
//                                                                return this.nodeType == 3;
//                                                             }).remove();
         this._data.html.markup.find("li").addBack()
                                          .contents()
                                          .filter(function()
                                              {
                                                 return this.nodeType == 3;
                                              }).remove();
       }

       this._load_node = this._load_node_H ;
       this._is_loaded = this._is_loaded_H ;
       this._refresh   = this._refresh_ui ;
     },


     /*
      *  Initialize the Themes section   -  TDO replace with Jet functionality
      *  @private
      */
     _initThemes : function()
     {
        // autodetect themes path
        if (this._data.themes._themes === false)  {
           $("script").each(function ()
            { 
              if( this.src.toString().match(/jquery\.oj-tree[^\/]*?\.js(\?.*)?$/))  { 
                 this._data.themes._themes = this.src.toString().replace(/jquery\.oj-tree[^\/]*?\.js(\?.*)?$/, "") + 'themes/'; 
                 return false; 
              }
            });
        }
        if (this._data.themes._themes === false)    {
          this._data.themes._themes = "themes/";
        }

        this._$container
             .bind("treeinit", $.proxy(function ()
                {
                   var s = this.options ;

                   this._data.themes.dots  = s["dots"]; 
                   this._data.themes.icons = s["icons"]; 
                   this["set_theme"](this._data.themes.theme, this._data.themes.url);

                }, this))

             .bind("ojloaded", $.proxy(function ()
                {
                   // bound here too, as simple HTML tree's won't honor dots & icons otherwise
                   if (! this._data.themes.dots)  {
                     this["hide_dots"]();
                   }
                   else  {
                     this["show_dots"]();
                   }
                   if (!this._data.themes.icons)  {
                     this["hide_icons"]();
                   }
                   else  {
                     this["show_icons"]();
                   }
                }, this));

     },


     /*
      *  Initialize the icon type functionality
      *  @private
      */
     _initTypes : function()
     {
        var s = this.options["types"];
        if (! s) {
          return ;
        }

        this._$container
               .bind("treeinit", $.proxy(function ()
                  { 
                    var types     = $.extend(true, {}, s["types"]),
                        attr      = s["attr"] || this._data.types.defaults["attr"],
                        icons_css = "", 
                        _this     = this;

                    $.each(types, function (i, tp)
                       {
                         $.each(tp, function (k, v)
                            { 
                              if (!/^(maxDepth|maxChildren|icon|validChildren)$/.test(k))  {
                                _this._data.types.attachTo.push(k);
                              }
                            });

                         // For ojTree we allow image and position props to not
                         // have to be in an icon object like jsTree.
                         var ot = (typeof tp["icon"]) ;
                         if (ot === "undefined") {
                           ot = (typeof tp["image"]) ;
                           if ((ot === "boolean") && (!tp["image"])) {
                             tp["image"] = "ojt$none" ;
                           }
                           else if ((! tp["image"]) && (! tp["position"])) {
                             return true;
                           }

                           tp["icon"] = {} ;
                           if (tp["image"])  {
                             tp["icon"]["image"] = tp["image"]; 
                             delete tp["image"] ;
                           } 

                           if (tp["position"] !== undefined)  {
                             tp["icon"]["position"] = tp["position"] ;
                             delete tp["position"] ;
                           }
                         }    

                         if ( tp["icon"]["image"] || tp["icon"]["position"])  {
                           if (i == "default")  {
                             _this._data.types.defType = true ;     // note that the "default" type has been defined                             icons_css += '.oj-tree-' + _this._getIndex() + ' a > .oj-tree-icon { ';
                             icons_css += '.oj-tree-' + _this._getIndex() + ' .oj-tree-list a > .oj-tree-icon { ';
                             icons_css += _this._addTypeCss(tp, icons_css) ;
                             icons_css += '} ';
                             icons_css += '.oj-tree-' + _this._getIndex() + ' .oj-tree-list li[' + attr + '="oj-tree-deftype"] > a .oj-tree-icon { ';
                           }
                           else if (tp["icon"]["image"]) {
                             icons_css += '.oj-tree-' + _this._getIndex() + ' .oj-tree-list li[' + attr + '="' + i + '"] > a > ins.oj-tree-icon { ';
                           }

                           icons_css += _this._addTypeCss(tp, icons_css) ;
                           icons_css += '} ';
                         }
                    });

                    if (icons_css !== "")  {
                      _addSheet({ str : icons_css, title : "oj-tree-types" });
                    }
                   }, this))
               .bind("ojbefore", $.proxy(function (e, data)
                  { 
                     var s,
                         ty, 
                         func = data["func"],
                         item = data["item"],
                         o = this._data.types.defaults["useData"] ? this._getNode(item) : false, 
                         d = (o && o !== -1 && o.length)? o.data("oj-tree") : false;

                     if (d && d["types"] && d[func] === false)
                     {
                       e.stopImmediatePropagation();
                       return false;
                     }

                     if ($.inArray(func, this._data.types.attachTo) !== -1)  {
                       if (!data["item"] || (!data["item"]["tagName"] && !data["item"]["jquery"]))  {
                         return;
                       }
                       s   = this.options["types"]["types"];
                       ty  = this._getType(item);             // get "type" attr name for node

                       if (( (s[ty] && typeof s[ty][func] !== "undefined") || 
                             (s["default"] && typeof s["default"][func] !== "undefined") 
                            ) && this._check(func, item) === false)  {
                         e.stopImmediatePropagation();
                         return false;
                       }
                     }

                  }, this));
     },

     /**
       *  Add css for the type.
       *  @private
       */
     _addTypeCss : function(tp)
     {
         var css = "" ;

         if (tp["icon"]["image"] !== "ojt$none")  {
           css += ' background-image:url(' + tp["icon"]["image"] + '); ';
         }
         else  {
           css += " background-image:none; ";
         }

         if (tp["icon"]["position"])  {
           css += ' background-position:' + tp["icon"]["position"] + '; ';
         }
         else  {
           css += ' background-position:0 0; ';
         }
         return css ;
     },

     /*
      *  Initialize Drag and Drop functionality.  TDO - this will change when the JET support is available.
      *  @private
      */
     _initDnD : function()
     {
        if (! this._data.dnd.reorder) {          // only handling a temporary version
          return ;                               // of Dnd for reorder within the tree.
        }
  
        var vars = this._data.dnd.vars ;

        vars.m = $("<div />").addClass(OJT_MARKER).hide().html("&raquo;")   // dnd marker div
            .bind("mouseleave mouseenter", $.proxy(function (e) { 

                var vars = this._data.dnd.vars ;
                vars.m.hide();
                vars.ml.hide();
                e.preventDefault(); 
                e.stopImmediatePropagation(); 
                return false; 
            }, this))
            .appendTo("body");

        vars.ml = $("<div />").addClass(OJT_MARKER_LINE).hide()             // dnd marker line
            .bind("mouseup", function (e) { 

               var vars = this._data.dnd.vars ;

               if (vars.r && vars.r.length) { 
                  vars.r.children("a").trigger(e); 
                  e.preventDefault(); 
                  e.stopImmediatePropagation(); 
                  return false; 
               } 
            })
            .bind("mouseleave", $.proxy(function (e)  { 

                var vars = this._data.dnd.vars ;
                var rt = $(e.relatedTarget);

                if (rt.is(".oj-tree") || rt.closest(".oj-tree").length === 0) {
                    if (vars.r && vars.r.length) { 
                        vars.r.children("a").trigger(e); 
                        vars.m.hide();
                        vars.ml.hide();
                        e.preventDefault(); 
                        e.stopImmediatePropagation(); 
                        return false; 
                    }
                }
            }, this))
            .appendTo("body");

        $(document).bind("drag_start.ojtreeu", $.proxy(function (e, data)
            {
             var vars = this._data.dnd.vars ;

             if (data.data.jstree)  {
                vars.m.show();
                if (vars.ml)  {
                   vars.ml.show();
                 }
             }
           }, this));

        $(document).bind("drag_stop.ojtreeu", $.proxy(function (e, data)
           {
              var vars = this._data.dnd.vars ;

              if (data.data.jstree)  {
                vars.m.hide();
                if (vars.ml) {
                  vars.ml.hide();
                }
              }
           }, this));

        this._getContainer()
            .bind("mouseenter.ojtree", $.proxy(function (e)
                {
                  var  ctl  = this._data.dnd.ctl,
                       vars = this._data.dnd.vars ;

                  if (ctl.is_drag && ctl.user_data.jstree)  {
                    if (this.options["themes"]) {
                      vars.m.addClass("oj-tree-" + this._data.themes.theme); 
                      if (vars.ml) {
                        vars.ml.addClass("oj-tree-" + this._data.themes.theme);
                      }
                      ctl.helper.addClass("oj-tree-dnd-helper oj-tree-" + this._data.themes.theme);
                    }
                      //if($(e.currentTarget).find("> ul > li").length === 0) {
                    if (e.currentTarget === e.target && ctl.user_data.obj &&
                        $(ctl.user_data.obj).length && $(ctl.user_data.obj).parents(".oj-tree:eq(0)")[0] !== e.target)
                    {
                      // node should not be from the same tree
                      var tr = this._reference(e.target),   //TDO
                          dc;

                      if (tr.data.dnd.foreign) {
                        dc = tr.options["dnd"]["drag_check"].call(this, { "o" : vars.o, "r" : tr._getContainer(), "is_root" : true });
                         if (dc === true || dc["inside"] === true || dc["before"] === true || dc["after"] === true)  {
                           ctl.helper.children("ins").removeClass(OJT_DRAG_INVALID).addClass(OJT_DRAG_OK);
                         }
                      }
                      else {
                         tr._prepare_move(vars.o, tr._getContainer(), "last");
                         if (tr["check_move"]()) {
                           ctl.helper.children("ins").removeClass(OJT_DRAG_INVALID).addClass(OJT_DRAG_OK);
                         }
                      }
                    }
                  }
                 }, this))
            .bind("mouseup.ojtree", $.proxy(function (e)
               {
                  var vars = this._data.dnd.vars,
                      ctl = this._data.dnd.ctl ;       // jsTree helper class

                  if (ctl.is_drag && ctl.user_data.jstree && e.currentTarget === e.target  &&
                                     ctl.user_data.obj    && $(ctl.user_data.obj).length   &&
                                     $(ctl.user_data.obj).parents(".oj-tree:eq(0)")[0] !== e.target)
                  {  // node should not be from the same tree
                      var tr = this._reference(e["currentTarget"]),
                          dc;
                      if (tr["data"]["dnd"]["foreign"])  {
                        dc = tr._getOptions()["dnd"]["drag_check"].call(this, { "o" : vars.o, "r" : tr._getContainer(), "is_root" : true });
                        if (dc === true || dc["inside"] === true || dc["before"] === true || dc["after"] === true)
                        {
                           tr._getOptions()["dnd"]["drag_finish"].call(this, { "o" : vars.o, "r" : tr._getContainer(), "is_root" : true });
                        }
                      }
                      else  {
                         tr._move_node(vars.o, tr._getContainer(), "last", e[tr.options["dnd"]["copy_modifier"] + "Key"]);
                      }
                  }
                 }, this))
            .bind("mouseleave.ojtree", $.proxy(function (e)
               {
                  var ctl = this._data.dnd.ctl ;       // jsTree helper class

                  if (e.relatedTarget && $(e.relatedTarget).hasClass(OJT_MARKER_LINE))  {
                    return false; 
                  }
                  if (ctl.is_drag && ctl.user_data.jstree)  {
                    if (this._data.dnd.i1) {
                       clearInterval(this._data.dnd.i1);
                    }
                    if (this._data.dnd.i2) {
                      clearInterval(this._data.dnd.i2);
                    }
                    if (this._data.dnd.to1)  {
                      clearTimeout(this._data.dnd.to1);
                    }
                    if (this._data.dnd.to2) {
                      clearTimeout(this._data.dnd.to2);
                    }
                    if (ctl.helper.children("ins").hasClass(OJT_DRAG_OK))  {
                      ctl.helper.children("ins").removeClass(OJT_DRAG_OK).addClass(OJT_DRAG_INVALID);
                    }
                  }
                }, this))
            .bind("mousemove.ojtree", $.proxy(function (e)
               {
                  var ctl = this._data.dnd.ctl ;       // jsTree helper class

                  if (ctl.is_drag && ctl.user_data.jstree) {
                    var cnt = this._getContainer()[0];

                    // Horizontal scroll
                    if (e.pageX + 24 > this._data.dnd.cof.left + this._data.dnd.cw) {
                      if (this._data.dnd.i1) {
                        clearInterval(this._data.dnd.i1);
                      }
                      this._data.dnd.i1 = setInterval($.proxy(function () {
                                                   this.scrollLeft += ctl.scroll_spd;
                                                 }, cnt), 100);
                    }
                    else if (e.pageX - 24 < this._data.dnd.cof.left)  {
                      if (this._data.dnd.i1) {
                        clearInterval(this._data.dnd.i1);
                      }
                      this._data.dnd.i1 = setInterval($.proxy(function () {
                                                this.scrollLeft -= ctl.scroll_spd;
                                              }, cnt), 100);
                    }
                    else   {
                      if (this._data.dnd.i1)  {
                        clearInterval(this._data.dnd.i1);
                      }
                    }

                    // Vertical scroll
                    if (e.pageY + 24 > this._data.dnd.cof.top + this._data.dnd.ch)  {
                      if (this._data.dnd.i2)  {
                        clearInterval(this._data.dnd.i2);
                      }
                      this._data.dnd.i2 = setInterval($.proxy(function () {
                                                this.scrollTop += ctl.scroll_spd;
                                             }, cnt), 100);
                    }
                    else if (e.pageY - 24 < this._data.dnd.cof.top) {
                        if (this._data.dnd.i2)  {
                          clearInterval(this._data.dnd.i2);
                        }
                        this._data.dnd.i2 = setInterval($.proxy(function () {
                                                 this.scrollTop -= ctl.scroll_spd;
                                               }, cnt), 100);
                    }
                    else   {
                       if (this._data.dnd.i2) {
                         clearInterval(this._data.dnd.i2);
                       }
                    }

                  }
                }, this))
            .bind("scroll.ojtree", $.proxy(function (e)
               { 
                  var ctl  = this._data.dnd.ctl,        // jsTree helper class
                      vars = this._data.dnd.vars ; 

                  if (ctl.is_drag && ctl.user_data.jstree && vars.m && vars.ml)  {
                     vars.m.hide();
                     vars.ml.hide();
                  }
                }, this))
            .delegate(".oj-tree-list a", "mousedown.ojtree", $.proxy(function (e)
                { 
                  if (e.which === 1) {
                    this._start_drag(e.currentTarget, e);
                    return false;
                  }
                }, this))
            .delegate(".oj-tree-list a", "mouseenter.ojtree", $.proxy(function (e)
                { 
                  var ctl = this._data.dnd.ctl ;       // jsTree helper class

                  if (ctl.is_drag && ctl.user_data.jstree)  {
                    this._dnd_enter(e.currentTarget);
                  }
                }, this))
            .delegate(".oj-tree-list a", "mousemove.ojtree", $.proxy(function (e)
                { 
                  var  ctl  = this._data.dnd.ctl,       // jsTree helper class
                       vars = this._data.dnd.vars ;

                  if (ctl.is_drag && ctl.user_data.jstree)  {
                     if (! vars.r || ! vars.r.length || vars.r.children("a")[0] !== e.currentTarget) {
                         this._dnd_enter(e.currentTarget);
                     }
                     if (typeof this._data.dnd.off.top === "undefined") {
                       this._data.dnd.off = $(e.target).offset();
                     }
                     if (typeof this._data.dnd.off.top === "undefined")  {
                       this._data.dnd.off = $(e.target).offset();
                     }

                     this._data.dnd.w = (e.pageY - (this._data.dnd.off.top || 0)) % this._data.core.li_height ;

                     if (this._data.dnd.w < 0)   {
                       this._data.dnd.w += this._data.core.li_height;
                     }
                     this._dnd_show();
                  }
                }, this))
            .delegate(".oj-tree-list a", "mouseleave.ojtree", $.proxy(function (e)
                { 
                  var ctl  = this._data.dnd.ctl,        // jsTree helper class
                      vars = this._data.dnd.vars ;

                  if (ctl.is_drag && ctl.user_data.jstree)  {
                     if (e.relatedTarget && $(e.relatedTarget).hasClass(OJT_MARKER_LINE))  {
                       return false; 
                     }
                     if (vars.m) {
                        vars.m.hide();
                     }
                     if (vars.ml) {
                       vars.ml.hide();
                     }
                     /*
                     var ec = $(e.currentTarget).closest("li"), 
                         er = $(e.relatedTarget).closest("li");
                     if(er[0] !== ec.prev()[0] && er[0] !== ec.next()[0]) {
                         if(m) { m.hide(); }
                         if(ml) { ml.hide(); }
                     }
                     */

                     this._data.dnd.mto = setTimeout( (function (t) {
                                                         return function () {
                                                                   t._dnd_leave(e);
                                                                };
                                                       })(this), 0);
                  }
                }, this))
            .delegate(".oj-tree-list a", "mouseup.ojtree", $.proxy(function (e)
                { 
                  var ctl = this._data.dnd.ctl ;       // jsTree helper class

                  if (ctl.is_drag && ctl.user_data.jstree)  {
                    this._dnd_finish(e);
                  }
                }, this));

            $(document)
                .bind("drag_stop.ojtreeu", $.proxy(function ()
                   {
                     var dnd  = this._data.dnd,
                         vars = this._data.dnd.vars ;

                     if (dnd.to1) {
                       clearTimeout(dnd.to1);
                     }
                     if (dnd.to2) {
                       clearTimeout(dnd.to2);
                     }
                     if (dnd.i1)  {
                       clearInterval(dnd.i1);
                     }
                     if (dnd.i2)  {
                       clearInterval(dnd.i2);
                     }

                     dnd["after"]   = false;
                     dnd["before"]  = false;
                     dnd["inside"]  = false;
                     dnd.off        = false;
                     dnd.prepared   = false;
                     dnd.w          = false;
                     dnd.to1        = false;
                     dnd.to2        = false;
                     dnd.i1         = false;
                     dnd.i2         = false;
                     dnd.active     = false;
                     dnd.foreign    = false;

                     if (vars.m) {
                       vars.m.css({ "top" : "-2000px" });
                     }
                     if (vars.ml) {
                       vars.ml.css({ "top" : "-2000px" });
                     }
                   }, this))
                .bind("drag_start.ojtreeu", $.proxy(function (e, data)
                   {
                      if (data.data.jstree) { 
                        var et = $(data.event.target);
                        if (et.closest(".jstree").hasClass("oj-tree-" + this._getIndex())) {
                          this._dnd_enter(et);
                        }
                      }
                   }, this));

                /*
                .bind("keydown.jstree-" + this.get_index() + " keyup.jstree-" + this.get_index(), $.proxy(function(e) {
                        if($.vakata.dnd.is_drag && $.vakata.dnd.user_data.jstree && !this.data.dnd.foreign) {
                            var h = $.vakata.dnd.helper.children("ins");
                            if(e[this._get_settings().dnd.copy_modifier + "Key"] && h.hasClass("jstree-ok")) {
                                h.parent().html(h.parent().html().replace(/ \(Copy\)$/, "") + " (Copy)");
                            } 
                            else {
                                h.parent().html(h.parent().html().replace(/ \(Copy\)$/, ""));
                            }
                        }
                    }, this)); */



            var s = this.options["dnd"];
            if (s["drag_target"])
            {
               $(document)
                   .delegate(s["drag_target"], "mousedown.ojtree-" + this._getIndex(), $.proxy(function (e) {

                       var ctl  = this._data.dnd.ctl,
                           dnd  = this._data.dnd,
                           vars = this._data.dnd.vars ;

                       vars.o = e.target;

                       this._drag_start(e, { jstree : true,
                                             obj    : e.target
                                         }, "<ins class='oj-tree-icon'></ins>" + $(e.target).text());
                       if (this._data.themes) { 
                         if (vars.m) {
                            vars.m.addClass("oj-tree-" + this._data.themes.theme);
                         }
                         if (vars.ml) {
                           vars.ml.addClass("oj-tree-" + this._data.themes.theme);
                         }
                         ctl.helper.addClass("oj-tree-dnd-helper oj-tree-" + this._data.themes.theme); 
                       }

                       ctl.helper.children("ins").removeClass(OJT_DRAG_OK).addClass(OJT_DRAG_INVALID);

                       var cnt     = this._getContainer();
                       dnd.cof     = cnt.offset();
                       dnd.cw      = parseInt(cnt.width(),10);
                       dnd.ch      = parseInt(cnt.height(),10);
                       dnd.foreign = true;
                       e.preventDefault();
                   }, this));
            }

            if (s["drop_target"])
            {
                $(document)
                    .delegate(s["drop_target"], "mouseenter.ojtreex-" + this._getIndex(), $.proxy(function (e)
                         {
                           var dnd  = this._data.dnd,
                               vars = this._data.dnd.vars ;

                           if (dnd.active && this.options["dnd"]["drop_check"].call(this, { "o" : vars.o, "r" : $(e.target), "e" : e }))  {
                              dnd.ctl.helper.children("ins").removeClass(OJT_DRAG_INVALID).addClass(OJT_DRAG_OK);
                            }
                        }, this))
                    .delegate(s["drop_target"], "mouseleave.ojtree-" + this._getIndex(), $.proxy(function (e)
                        {
                           if (this._data.dnd.active)  {
                             this._data.dnd.ctl.helper.children("ins").removeClass(OJT_DRAG_OK).addClass(OJT_DRAG_INVALID);
                            }
                        }, this))
                    .delegate(s["drop_target"], "mouseup.ojtreex-" + this._getIndex(), $.proxy(function (e)
                       {
                         var vars = this._data.dnd.vars ;

                         if (this._data.dnd.active && this._data.dnd.ctl.helper.children("ins").hasClass(OJT_DRAG_OK))  {
                           this.options["dnd"]["drop_finish"].call(this, { "o" : vars.o, "r" : $(e.target), "e" : e });
                         }
                        }, this));
            }

          // TDO

     },


     /**
       *  Process Drag and Drop options.
       *  @private
       */
     _initDnDOpts : function()
     {
        var opts = this.options["dnd"],
            ot   = typeof opts ;

        if (ot !== "undefined")  {
          if (ot === "boolean"  && opts) {
              this._data.dnd.reorder = true ;
          }
          else if (ot === "object") {
            if (typeof opts["reorder"] === "boolean")  {
              this._data.dnd.reorder = opts["reorder"] ;
            }
          }
          else if (ot == "string" && opts == "reorder") {
              this._data.dnd.reorder = true ;
          }

          if (this._data.dnd.reorder) {
            //  Add our default requirements until these are made public and can be
            //  defined in options.
            this.options["dnd"] = {} ;
            this._applyDefaults(this.options["dnd"], this._data.dnd.defaults) ;
          }
        }

     },


     /*
      *  Initialize the context menu cut/copy/paste/remove/rename support.
      *  @private
      */
     _initCrrm :  function()
     {
        this._$container
                .bind("ojmove",
                     $.proxy(function (e, data)
                               {
                                 //if (this.options["crrm"]["move"]["openOnMove"])
                                 if (this._data.crrm.defaults["move"]["openOnMove"]) {
                                   var t = this;
/*  Tue4
                                   data.rslt.np.parentsUntil(".oj-tree").addBack()
                                                                        .filter(".oj-tree-closed")
                                                                        .each(function ()
                                                                          {
                                                                           t["expand"](this, false, true);
                                                                          });
*/  //Tue4
                                 }
                               }, this));

     },


     /**
       *  Initialize keyboard support
       *  @private
       */
     _initKeys  :  function()
     {
        //  HotKeys plugin no longer used.
/*
        this._$container()
               .bind("treelock", $.proxy(function ()
                  {
                    if (this._data.hotkeys.enabled)  {
                      this._data.hotkeys.enabled = false;
                      this._data.hotkeys.revert  = true;
                    }
                  }, this))
               .bind("treeunlock", $.proxy(function () 
                  {
                    if (this._data.hotkeys.revert)  {
                      this._data.hotkeys.enabled = true;
                    }
                  }, this));
*/
     },


     /**
       *  Initialize the context menu.  This is called on startup, or on option
       *  "contextMenu" change.
       *  @param {Object=} newVal   true if called because of an option change.
       *  @private
       */
     _initMenu : function(newVal)
     {
       var  menu, t, html, $html ;

       if ((! newVal) && (! this.options["contextMenu"])) {
         return ;
       }

       menu =  newVal || this.options["contextMenu"] ;
       t = $.type(menu) ;
       if (t == "function") {
         try {
            menu = menu() ;             // call user's method to get the context menu
         }
         catch (e) {
            menu = null;
         }
         t = $.type(menu) ;
       }

       if (t !== "string") {
         return ;      // unknown
       }

       var $m = $(menu) ;                    // get the user's <ul> list   
       if ($m) {
         $m.css("display", "none") ;         // ensure it's not visible
         var  dm       = this._data.menu ;
         dm.$container = $m ;
         dm.usermenu   = true ;              // have a context menu
       }
       
       if (this._data.menu.usermenu) {       // if we have a context menu
         if (newVal) {                       // and it is it being changed
           this._applyMenu() ;               // complete menu creation/attachnment
         }
       }

       //  If not a new val from options, Menu will be noted at the end of initialization in _start()
     },


     /**
       *  Note the tree node that the menu has just been activated on.  Also note
       *  the associated Tree Id in case the app has multiple Tree's and is
       *  sharing a context menu with all of them.
       *  @private
       */
     _handleContextMenuBeforeShow: function(e, ui)
     {
        var ev = e['originalEvent']['originalEvent'];

        if (ev['type'] === 'keydown') {
          this._data.menu.node   = this._data.ui.hovered ;
        }
        else  {
           this._data.menu.node  = $(e.originalEvent.target.parentNode) ;
        }
        this._data.menu.treeDivId = this._data.menu.node.closest("div").attr("id") ;

        this._data.menu.$container.ojMenu("option", "menuPosition", {"my" : "left top",
                                                                     "at" : "left bottom",
                                                                     "of" : this._data.menu.node[0]});

        // Set menu "Paste" disable state, depending on whether there's been a
        // previous "cut"/"copy"
        if (this._data.menu.usermenu && this._data.menu.$elemPaste) {

          var state         = this._data.menu.$elemPaste.hasClass("oj-disabled") ;
          var disabledState = (! this._data.crrm.ct_nodes && !this._data.crrm.cp_nodes) ;

          if (! state) {
            state = false ;      // in case undefined
          }
          if (state != disabledState) {
            if (disabledState) {
              this._data.menu.$elemPaste.addClass("oj-disabled") ;
            }
            else {
              this._data.menu.$elemPaste.removeClass("oj-disabled") ;
            }
            this._data.menu.$container.ojMenu("refresh") ;
          }
        }

     },

     /**
       *   Check menu selected to see if it one of our predefined remove/cut/copy/paste id's
       *   @private
       */
     _handleContextMenuSelect: function(ev, ui)
     {
        //  Make sure its a menu ojselect and not from ojTree
        if (ui["inst"]) {
          return ;
        }

        // There may be multiple trees sharing (and thereby listening to) the same 
        // context menu.  Check that this tree is the same as the tree on which the
        // menu was invoked on.
        if (this._data.menu.treeDivId != this._elemId.substr(1)) {
          return ;
        }

        var  id = ui? ui.item.attr("id") : undefined ;

        if (id === "ojtreecopy") {
          this._crrm_copy(this._data.menu.node);
        }
        else if (id === "ojtreecut") {
          this._crrm_cut(this._data.menu.node);
        }
        else if (id === "ojtreepaste") {
          this._crrm_paste(this._data.menu.node);
        }
        else if (id === "ojtreeremove") {
          if (this["isSelected"](this._data.menu.node)) {
            this._crrm_remove();
          }
          else {
           this._crrm_remove(this._data.menu.node);
          }
        }
        else if (id === "ojtreerename") {
          this._crrm_rename(this._data.menu.node);
        }
        else if (id === "ojtreecreate") {
          this._crrm_create(this._data.menu.node);
        }
     },

     /*
       *  Ensure that focus returns to the tree if the menu is dismissed in
       *  some way via the keyboard.  This is temporary and is awaiting the general
       *  proposal from Pavitra re each component having a .focus() method.
       */
     _showContextMenu: function(menu, event)
     {
       menu.show(event, {"launcher": this._$container_ul, "focus": "menu"});
     },


     /**
       *  Process Core options
       *  @private
       */
     _initCoreOpts : function()
     {
        var val = this.options["selectionMode"] ;

        val = (val == undefined)? "single" : val ;
        if (val === "none") {
          val = 0 ;
        }
        else if (val === "single") {
          val = 1;
        }
        else if (val === "multiple") {
          val = -1 ;
        }
        this._data.core.selectMode = val ;

        this._data.themes.icons = this.options["icons"] ;

        this._data.core.toExpand = this.options["initExpanded"];  
        if (this._data.core.toExpand == null) {
          this._data.core.toExpand = [] ;
        }
        this._data.core.toLoad   = this.options["initLoaded"];
     },


     /**
       *  Process UI type options
       *  @private
       */
     _initUIOpts : function()
     {
     },

     /**
       *  Process data source options
       *  @private
       */
     _initDSOpts : function()
     {
        var s = this.options["data"],
            dt,
            ot ;

        this._data.ds.type = DS_NONE ;               // clear in case this is a "data" option change
        this._data.html.useExistingMarkup = false ;

        if (s) {
          ot = $.type(s) ;
          if (ot === "string") {
           if (this._isHtml(s)) {
             this._data.ds.type = DS_HTML ;          // we have an non-Tree DS html source
           }
           else {
             this._data.ds.type = DS_JSON ;          // we have a non-tree DS json source
             this._initJsonOpts() ;
           }
          }
          else if (ot === "array") {
             //  we have an array of local json objects
             this._data.ds.type = DS_JSON ;           // we have a non-tree DS json source
          }
          else if (ot === "object") { 
             try
             {                                           // don't crash if no ojdatacollection-common
               if (s instanceof oj.JsonTreeDataSource) {
                 this._data.ds.type = DS_TREE ;          // we have a tree DS source
               }
             }
             catch(e)
             {
                this._data.ds.type = DS_ERROR
             } ;
             if (this._data.ds.type !== DS_TREE) {
               try
               {                                         // don't crash if no ojtree-model
                  if (s instanceof oj.CollectionTreeDataSource) {
                    this._data.ds.type = DS_COLLECTION ;   // we have a tree DS source
                  }
               }
               catch(e)
               {
                  this._data.ds.type = DS_ERROR
               } ;
             }
             if ((this._data.ds.type === DS_TREE)   ||
                 (this._data.ds.type === DS_COLLECTION))  {
               this._initTreeDSOpts() ;
             }
             else {
               if (s["data"] || s["ajax"])  {
                 dt = s["dataType"] ;
                 if (dt) {
                   if (dt === "json") {
                     this._data.ds.type = DS_JSON ;    // we have a non-tree DS json source
                     this._initJsonOpts() ;
                   }
                   else if (dt === "html") {
                     this._data.ds.type = DS_HTML ;    // we have a non-tree DS html source
                     this._initHtmlOpts() ;
                   }
                 }
                 else {
                   s["dataType"]      = "json" ;
                   this._data.ds.type = DS_JSON ;      // we have a non-tree DS json source
                   this._initJsonOpts() ;
                 }
               }
             }
          }
        }

        //  If no data defined, see if there is user markup in the div
        if (this._data.ds.type == DS_NONE) {
          if (this._$container.find("ul").length > 0) {
            this._data.ds.type                = DS_HTML ; // note we have an non-Tree DS html source
            this._data.html.useExistingMarkup = true ;
          }
        }
     },

     /**
       *  Process Tree DataSource options
       *  @private
       */
     _initTreeDSOpts : function()
     {
     },

     /**
       *  Process json_data options
       *  @private
       */
     _initJsonOpts : function()
     {
     },


     /**
       *  Process html_data options
       *  @private
       */
     _initHtmlOpts : function()
     {
     },

     /**
       *  Process cut/copy/paste/rename/remove options
       *  @private
       */
     _initCrrmOpts : function()
     {
       //if (this.options["crrm"] == undefined)  {
         //  Will use our defaults until these are made public and can be
         //  defined in options.
         //  this._applyDefaults(this.options["crrm"], this._data.crrm.defaults) ;
       //}

     },

     /**
       *  Process context menu options
       *  @private
       */
     _initMenuOpts : function()
     {
     },

     /**
       *  Process theme options
       *  @private
       */
     _initThemeOpts : function()
     {
       //  Themes support not yet published
     },


     /**
       *  Process node type options
       *  @private
       */
     _initTypeOpts  : function()
     {
       var opts ;
       var o = this.options["types"] ;

//     For V1, there are no default options that we publish
//     if (typeof o === "object") {
//       //  Add our default requirements until these are made public and can be
//       //  defined in options.
//       this._applyDefaults(this["options"]["types"], this._data.types.defaults) ;
//     }
       if (typeof o === "object") {
         this._applyDefaults(o, {"attr" : this._data.types.defaults["attr"]}) ;
       }
     },


     /**
       *  Set up tree instance data
       *  @private
       */
     _initData : function()
     {
        //  Establish working values, and define default values

        var data = this._data ;
         
        //  Core
        data.core  =  {
                        htmlTitles     : false,      // this option not currently exposed
                        initLoaded     : [],
                        selectMode     : 1,          //  0, 1, 2 ... or -1 for unlimited
                        load_open      : false,
                        li_height      : 0,
                        notify_plugins : true,       // TDO is it needed, this is jstree default
                        toExpand       : false,
                        toLoad         : false,
                        prepared_move  : {}          // for the move_node function
                      };

        // UI
        data.ui =  {
                      selected          :  $(),       // selected node jquery list
                      last_selected     :  false,
                      hovered           :  null,
                      to_select         :  null,      // removed per Design Review
                      opacity           : 1,          // used by disable/_lock()
                      spacebar          : false,      // true if select caused by keybd (toggles)
                      focused           : false       // tree has focus
                   };

        data.ui.defaults = {                          // default values not yet published or suppressed
                                                      // design committee 
                             "selectMultipleModifier"  :  "ctrl" ,      // on, or ctrl, shift, alt
                             "selectRangeModifier"     :  "shift" ,
                             "disableSelectingChildren" :  false
                           } ;


        //  Creating/renaming/removing/moving via context menu

        data.crrm = {} ;
        data.crrm.cp_nodes = false;     // nodes that have been copy'd
        data.crrm.ct_nodes = false;     // node(s) that have been cut
        data.crrm.defaults = {
                               "inputWidthLimit" : 200,
                               "move"            : {
                                                     "alwaysCopy"       : false, // false, true or "multitree"
                                                     "openOnMove"       : true,
                                                     "defaultPosition"  : "last",
                                                     "checkMove"        : function (m) {
                                                                             return true;
                                                                          }
                                                   }
                             };
        data.crrm.prepared_move = {} ;   // for the move node function

        // Data Source

        data.ds = {} ;
        data.ds.progressiveRender = false ;       // options not currently exposed
        data.ds.progressiveUnload = false ;
        data.ds.correctState      = true ;

        data.ds.type              = DS_NONE ;     // type of data source (DS_TREE, DS_JSON, DS_HTML)

        //  json data source

        data.json = {} ;
        data.json.defaults = {
                               "data"  : false,   // `data` can be a function:
                                                  //  accepts two arguments - node being loaded
                                                  //  and a callback to pass the result to,
                                                  //  & ajax won't be supported
                               "ajax"  : false
                             } ;

        // html data source

       data.html = {} ;
       data.html.defaults = {
                              "data"   : false,   // `data` can be a function:
                              "ajax"   : false
                            };

       data.html.useExistingMarkup  = false ;  // true == use existing div markup
       data.html.markup             = false ;  // the user's markup 
       data.html.cloneMarkup        = false ;  // clone of user's orig markup

        //  Themes

        data.themes       = {} ;
        data.themes.icons = true ;
        data.themes.dots  = false ;
        data.themes.theme = "default" ;
        data.themes.url   = false ;

        data.themes.themes_loaded = [];
        data.themes._themes = false;   //  path to themes folder - if false - it will be autodetected

        //  Types

        data.types           = {} ;
        data.types.attachTo  = [];
        data.types.defType   = false ;                    // true if "default" type defined
        data.types.defaults  = {                                 //  Options not published in V1
                                 "maxChildren"         : -1,     // defines max number of root nodes
                                                                 // (-1 = unlimited, -2 = disable maxChildren checking)
                                 "maxDepth"            : -1,     //  maximum depth of the tree
                                 "validChildren"       : "all",  // defines valid node types for the root nodes
                                 "useData"             : false,  // whether to use $.data     TDO
                                 "attr"                : "type", // attr name in <li> where type is stored
                                 "types" : {                     // a list of types
                                             "default" : {       // the default type
                                                           "maxChildren"   : -1,
                                                           "maxDepth"      : -1,
                                                           "validChildren" : "all"
                                       
                                                           // Bound functions - you can bind any other function here
                                                           // (using boolean or function)
                                                           //"select_node" : true
                                                         }
                                           }
                               } ;

        //  Context menu

        data.menu              = {} ;
        data.menu.usermenu     = false ;   // user has supplied an ojMenu id if true
        data.menu.$container   = false ;   // the menu <ul>
        data.menu.$elemPaste   = false ;   // the menu "Paste" element
        data.menu.node         = false ;   // the tree node the menu was activated on


        //  Keyboard support

        data.keys         = {} ;
        data.keys.enabled = true ;
        data.keys.bound   = [];

        // Drag and Drop

        data.dnd            = {} ;
        data.dnd.reorder    = false ;

        data.dnd.active     = false ;
        data.dnd["after"]   = false ;
        data.dnd["inside"]  = false ;
        data.dnd["before"]  = false ;
        data.dnd.off        = false ;
        data.dnd.prepared   = false ;
        data.dnd.w          = 0,
        data.dnd.to1        = false ;
        data.dnd.to2        = false ;
        data.dnd.cof        = false ;
        data.dnd.cw         = false ;
        data.dnd.ch         = false ;
        data.dnd.i1         = false ;
        data.dnd.i2         = false ;
        data.dnd.mto        = false ;
  
        data.dnd.defaults = {
                              "copy_modifier"  : "ctrl",
                              "check_timeout"  : 100,
                              "open_timeout"   : 500,
                              "drop_target"    : ".oj-tree-drop",
                              "drop_check"     : function (data) { return true; },
                              "drop_finish"    : $.noop,
                              "drag_target"    : ".oj-tree-draggable",
                              "drag_finish"    : $.noop,
                              "drag_check"     : function (data)
                                                  {
                                                     return {
                                                              "after"  : false,
                                                              "before" : false,
                                                              "inside" : true
                                                            };
                                                  }
                            } ;


        data.dnd.vars          = {}
        data.dnd.vars.o        = false ;
        data.dnd.vars.r        = false ;
        data.dnd.vars.m        = false ;     // marker pointer div
        data.dnd.vars.ml       = false ;     // marker line div
        data.dnd.vars.sli      = undefined ;
        data.dnd.vars.sti      = undefined ;
        data.dnd.vars.dir1     = false ;
        data.dnd.vars.dir2     = false ;
        data.dnd.vars.last_pos = false ;

        data.dnd.ctl             = {} ;      //  this was the old ojtreeu helper
        data.dnd.ctl.is_down     = false,
        data.dnd.ctl.is_drag     = false,
        data.dnd.ctl.helper      = false,
        data.dnd.ctl.scroll_spd  = 10,
        data.dnd.ctl.init_x      = 0,
        data.dnd.ctl.init_y      = 0,
        data.dnd.ctl.threshold   = 5,
        data.dnd.ctl.helper_left = 5,
        data.dnd.ctl.helper_top  = 10,
        data.dnd.ctl.user_data   = {}
     },

     /**
       *  @private
       */
     _fix_scroll : function (obj)
     {
        var c = this._$container[0],
            t;
       
       if (c.scrollHeight > c.offsetHeight)
       {
          obj = this._getNode(obj);
          if (!obj || obj === -1 || !obj.length || !obj.is(":visible"))  {
             return;
          }

          t = obj.offset().top - this._$container.offset().top;

          if (t < 0)  { 
            c.scrollTop = c.scrollTop + t - 1; 
          }

         if (t + this._data.core.li_height + (c.scrollWidth > c.offsetWidth ? scrollbar_width : 0) > c.offsetHeight)  { 
           c.scrollTop = c.scrollTop + (t - c.offsetHeight + this._data.core.li_height + 1 + (c.scrollWidth > c.offsetWidth ? scrollbar_width : 0)); 
          }
       }
     },

     /**
       *  @private
       */
     set_focus   : function ()            // undocumented per Design Review
     { 
       if (this._isFocused()) {
          return;
       }
       var f = this._focused();
       if (f) {
         this.unset_focus();
       }
           
       this._$container.addClass("oj-tree-focused"); 
       if (this._$container_ul) {
         this._$container_ul.focus() ;
       }
       this._data.ui.focused = true ;
       this._emitEvent(null, "set_focus");
     },

     /**
       *  Return true if this tree has focus.
       *  @private
       */
     _isFocused  : function ()            // undocumented per Design Review
     { 
        return this._data.ui.focused ;
     },

     /**
       *  @private
       */
     unset_focus : function ()            // undocumented per Design Review
     {
        if (this._isFocused()) {
          this._$container.removeClass("oj-tree-focused"); 
          this._data.ui.focused = false ;
          if (this._$container_ul) {
            this._$container_ul.blur() ;
          }
        }
        this._emitEvent(null, "unset_focus");
      },

     /**
       *  Return the "this of the tree that currently has focus, or null.
       *  @private
       */
     _focused : function ()
     {
        var ret = null ;
        $.each(_aInstances, function(i, _this) {
            if (_this._data.ui.focused) {
              ret = _this ;
              return false ;
            }
        });

        return ret ;
     },

     /**
       *  Returns the next instance index to use.
       *  @private
       */
     _newIndex: function()
     {
       return ++_instance
     },

     /**
       *  Returns the current instance index.
       *  @private
       */
     _getIndex : function()
     {
        return this._index ;
     },

     /**
       *  Returns a copy of the options.
       *  @private
       */
     _getOptions : function()
     {
        return ($.extend(true, {}, this.options)) ;
     },

     /**
       *  Returns the tree containig div
       *  #private
       */ 
     _getContainer : function()
     {
        return this._$container ;
     },

     /**
       *   Handle keystroke and combination keystrokes.
       *   The return value is passed to the jQuery keydown handler.
       *   @private
       */
     _keyHandler : {

         "up" : function ()
         { 
            var o = this._data.ui.hovered || this._data.ui.last_selected || -1;
            this["hover"](this._getPrev(o));
            return false; 
         },

         "ctrl+up" : function ()
         { 
            var o = this._data.ui.hovered || this._data.ui.last_selected || -1;
            this["hover"](this._getPrev(o));
            return false; 
         },

         "shift+up" : function (t)
         { 
            var o = this._data.ui.hovered || this._data.ui.last_selected || -1;
            this["select"](this._getPrev(o), (this._data.ui.selectMode !== -1));
            return false; 
         },

         "down" : function ()
         { 
            var o = this._data.ui.hovered || this._data.ui.last_selected || -1;
            this["hover"](this._getNext(o));
            return false;
         },

         "ctrl+down" : function ()
         { 
            var o = this._data.ui.hovered || this._data.ui.last_selected || -1;
            this["hover"](this._getNext(o));
            return false;
         },

         "shift+down" : function ()
         { 
           var o = this._data.ui.hovered || this._data.ui.last_selected || -1;
           this["select"](this._getNext(o), (this._data.ui.selectMode !== -1));
           return false;
         },

         "left" : function ()
         { 
            var o = this._data.ui.hovered || this._data.ui.last_selected;
            if (o) {
              if (o.hasClass(OJT_OPEN))  {
                this["collapse"](o);
              }
              else  {
                this["hover"](this._getPrev(o));
              }
            }
            return false;
         },

         "ctrl+left" : function ()
         { 
           var o = this._data.ui.hovered || this._data.ui.last_selected;
           if (o)  {
             if (o.hasClass(OJT_OPEN))  {
                this["collapse"](o);
             }
             else  {
               this["hover"](this._getPrev(o));
             }
           }
           return false;
         },

         "shift+left" : function ()
         { 
           var o = this._data.ui.hovered || this._data.ui.last_selected;
            if (o) {
              if (o.hasClass(OJT_OPEN)) {
                this["collapse"](o);
              }
              else  {
                this["hover"](this._getPrev(o));
              }
            }
            return false;
         },

         "right" : function ()
         { 
            var o = this._data.ui.hovered || this._data.ui.last_selected;
            if (o && o.length) {
               if (o.hasClass(OJT_CLOSED))  {
                  this["expand"](o);
               }
               else  {
                  this["hover"](this._getNext(o));
               }
            }
            return false;
         },

         "ctrl+right" : function ()
         { 
            var o = this._data.ui.hovered || this._data.ui.last_selected;
            if (o && o.length) {
               if (o.hasClass(OJT_CLOSED)) {
                 this["expand"](o);
               }
               else   {
                 this["hover"](this._getNext(o));
               }
            }
            return false;
         },

         "shift+right" : function ()
         { 
            var o = this._data.ui.hovered || this._data.ui.last_selected;
            if (o && o.length) {
              if (o.hasClass(OJT_CLOSED))  {
                this["expand"](o);
              }
              else  {
                this["hover"](this._getNext(o));
              }
            }
            return false;
         },

         "space" : function ()              // toggle hovered node select status
         { 
            if (this._data.ui.hovered)  {
              this._data.ui.spacebar = true ;      // note keyboard - so click will toggle
              this._data.ui.hovered.children("a:eq(0)").click();
              this._data.ui.spacebar = false ;
            } 
            return false; 
         },

         "home" : function ()               // move hover to top node
         { 
           this["hover"](this._$container_ul.find("li:first"));
           return false; 
         },

         "end" : function ()                // move hover to last visible node
         { 
           var a = this._$container_ul.find("li.oj-tree-last:visible");
           this["hover"](a[a.length-1]) ;
           return false; 
         },

         "*" : function ()                  // expand all nodes
         { 
           var l = this._$container_ul.find("a") ;
           this._expandAll(-1, false) ;
           return false; 
         },

         "ctrl+space" : function (event)    // toggle the select state
         { 
           if (this._data.ui.hovered)  { 
             var ev = $.Event("click") ;
             ev.ctrlKey = true;
             this._data.ui.hovered.children("a:eq(0)").trigger(ev);
           } 
           return false; 
         },

         "shift+space" : function (event)   // select to the hovered node
         { 
           if (this._data.ui.hovered)  {
             var ev = $.Event("click") ;
             ev.shiftKey = true;
             this._data.ui.hovered.children("a:eq(0)").trigger(ev);
           } 
           return false; 
         },

         "shift+home" : function (event)   // extend selection to top node
         { 
           var hover  = this._data.ui.hovered;

           if (hover)  {
             var bContinue  = true,
                 _this      = this,
                 nodes      = this._$container_ul.find("li:visible");

             hover = hover[0] ;
             $.each(nodes, function(i, node) {
                  if (node == hover) {
                    bContinue = false ;
                  }
                  _this._select(node, true) ; 
                  return bContinue ;
             });
           } 
           return false; 
         },

         "shift+pgdn" : function (event)   // extend selection to last node
         { 
           var hover  = this._data.ui.hovered;
           if (hover)  {
             var bFound = false,
                 _this  = this,
                 l      = this._$container_ul.find("li:visible");

             hover = hover[0] ;
             $.each(l, function(i, node) {
                if (! bFound) {
                  if (node == hover) {
                    bFound = true ;
                  }
                }
                if (bFound) {
                  _this._select(node, true) ; 
                }
                return true ;
             });
           } 
           return false; 
         },

         "f2" : function ()
         {
           this["rename"](this._data.ui.hovered || this._data.ui.last_selected);
           return false ;
         },

         "del" : function ()
         {
           this["remove"](this._data.ui.hovered || this._getNode(null));
           return false ;
         }
     },

     /**
       *   Attach the user menu <ul> list to the tree div, and set up listeners on it.
       *   @private
       */
     _applyMenu : function()
     {
       if (! this._data.menu.usermenu) {
         return ;
       }

       // Add our listeners so that we can handle build-in cut/copy/paste, etc
       var $menuContainer = this._data.menu.$container ;
       var _this          = this ;

       $menuContainer.on("ojselect",     $.proxy(this._handleContextMenuSelect,     this));
       $menuContainer.on("ojbeforeshow", $.proxy(this._handleContextMenuBeforeShow, this));

       // If there are any ojTree built in menu item ids, construct the menu items
       var listItems = $menuContainer.find("[data-oj-command]");
       var bChanged  = false ;

       listItems.each(function()  {
              var cmd;
              if ($(this).children('a').length === 0)  {
                cmd = $(this).attr('data-oj-command').split("-");
                $(this).replaceWith(_this._buildContextMenuItem(cmd[cmd.length-1]));
                if ($(this).hasClass("oj-menu-divider")) {
                  $(this).removeClass("oj-menu-divider")
                  $(this).addClass("oj-menu-item")
                }
                bChanged = true ;
              }
          });

       if (bChanged) {
         $menuContainer.ojMenu('refresh');
       }

       //  Note "paste" element for disabling if no prev cut/copy
       this._data.menu.$elemPaste = $menuContainer.find("#ojtreepaste") ;
       
     },

     /**
       *  Clear out any contextMenu data.
       *  @private
       */
     _clearMenu : function() {

       var um = this._data.menu ;

       if (um.usermenu)  {
         um.usermenu   = false ;
         um.$container.off("ojselect") ;
         um.$container.off("beforeshow") ;
         um.$container = null ;
       }
     },

     /**
       * Builds a menu for a command, takes care of submenus where appropriate
       * @param {string} cmd
       * @private	 
       */            
     _buildContextMenuItem : function(cmd)
     {
        return $(this._buildContextMenuListItem(cmd)) ;
     },

     /**
       * Builds a context menu list item from a command
       * @param {string} cmd the string to look up command value for as well as translation
       * @return {string} an HTML string containing a list item and a  
       * @private	 
       */
     _buildContextMenuListItem: function(cmd)
     {
        var id = _arMenuCmdMap[cmd] ;
        return '<li id=' + id + '>' + this._buildContextMenuLabel(cmd) + '</li>';
     },

     /**
       * Builds a context menu anchor element with translated text
       * @param {string} cmd the command string whose label translated label should be used.
       * @return {string} an HTML anchor element string containing the translated label  
       * @private	 
       */
     _buildContextMenuLabel: function(cmd)
     {
         return '<a href="#">' + this.getTranslatedString("m_" + cmd) + '</a>';
     },        


     /**
       *  Menu "cut" functionality
       *  @private
       */
     _crrm_cut : function (obj)
     {
        obj = this._getNode(obj, true);
        if (!obj || !obj.length)  {
          return false;
        }

        this._data.crrm.cp_nodes = false;
        this._data.crrm.ct_nodes = obj;

        this._emitEvent({ "obj" : obj }, "cut");
     },

     /**
       *  Menu "copy" functionality
       *  @private
       */
     _crrm_copy : function (obj)
     {
        obj = this._getNode(obj, true);
        if (!obj || !obj.length)  {
          return false;
        }
        this._data.crrm.ct_nodes = false;
        this._data.crrm.cp_nodes = obj;
        this._emitEvent({ "obj" : obj }, "copy");
     },

     /**
       *  Menu "paste" functionality
       *  @private
       */
     _crrm_paste : function (obj)
     { 
        obj = this._getNode(obj);
        if (!obj || !obj.length) {
          return false;
        }
        var nodes = this._data.crrm.ct_nodes ? this._data.crrm.ct_nodes : this._data.crrm.cp_nodes;

        if (! this._data.crrm.ct_nodes && !this._data.crrm.cp_nodes)  {
           return false;
         }
         if (this._data.crrm.ct_nodes)  {
//         this.move_node(this._data.crrm.ct_nodes, obj);
           this._crrm_move_node(this._data.crrm.ct_nodes, obj);
           this._data.crrm.ct_nodes = false;
         }
         if (this._data.crrm.ct_nodes)
         {
//         this.move_node(this._data.crrm.ct_nodes, obj);
           this._crrm_move_node(this._data.crrm.ct_nodes, obj);
           this._data.crrm.ct_nodes = false;
         }
         if (this._data.crrm.cp_nodes)  {
//         this.move_node(this._data.crrm.cp_nodes, obj, false, true);
           this._crrm_move_node(this._data.crrm.cp_nodes, obj, false, true);
         }
         this._emitEvent({ "obj" : obj, "nodes" : nodes}, "paste");
     },

    /**
      *  Menu move node support for paste
      * @private
      */
     _crrm_move_node : function (obj, ref, position, is_copy, is_prepared, skip_check)
     {
        //var s = this.options["crrm"]["move"];
        var s = this._data.crrm.defaults["move"];
        if (! is_prepared)  { 
          if (typeof position === "undefined")  {
            position = s["defaultPosition"];
          }
          if (position === "inside" && !s["defaultPosition"].match(/^(before|after)$/))  {
            position = s["defaultPosition"];
          }
//Wed5      return this.__call_old(true, obj, ref, position, is_copy, false, skip_check);
            return this._move_node(obj, ref, position, is_copy, false, skip_check);
        }

        // if the move is already prepared
        if (s["alwaysCopy"] === true || (s["alwaysCopy"] === "multitree" && obj.rt._getIndex() !== obj.ot._getIndex() ))  { 
          is_copy = true;
        }
//Wed5  this.__call_old(true, obj, ref, position, is_copy, true, skip_check);
        this._move_node(obj, ref, position, is_copy, true, skip_check);
     },

     /**
       *  Menu "remove" (i.e. delete) functionality
       *  @private
       */
     _crrm_remove : function (obj)
     {
        obj = this._getNode(obj, true);

//      var p   = this._getParent(obj),
//          prev = this._getPrev(obj);

         this.__rollback();
         obj = this["remove"](obj);
//         if (obj !== false) {
//           this._emitEvent({ "obj" : obj, "prev" : prev, "parent" : p }, "remove");
//         }
     },

     /**
       *  Menu rename a node functionality
       *  @private
       */
     _crrm_rename  :  function (obj)
     {
        var f = this._emitEvent;

        obj = this._getNode(obj);
        this.__rollback();
        this._crrm_showInput(obj, function (obj, new_name, old_name)
                                  { 
                                    //  Emit rename event
//                                    f.call(this, {
//                                                   "obj"       : obj,
//                                                   "title"     : new_name,
//                                                   "prevTitle" : old_name 
//                                                 },  "rename");
                                  });
     },

     /**
       *  Turn node into an input field to allow the user to rename the node.
       *  @private
       */
     _crrm_showInput : function (obj, callback)
     {
        obj = this._getNode(obj);

        var rtl = this._isRtl,
//          w   = this.options["crrm"]["inputWidthLimit"],       // applyDefaults() not done for V1
            w   = this._data.crrm.defaults["inputWidthLimit"],
            w1  = obj.children("ins").width(),
            w2  = obj.find("> a:visible > ins").width() * obj.find("> a:visible > ins").length,
            t   = this["getText"](obj),
_this = this,

            h1  = $("<div />", { css : { "position"   : "absolute",
                                         "top"        : "-200px",
                                         "left"       : (rtl ? "0px" : "-1000px"),
                                         "visibility" : "hidden"
                                       }
                               }).appendTo("body"),

            h2  = obj.css("position", "relative").append(
                $("<input />", { 
                    "value" : t,
                    "class" : "oj-tree-rename-input",
                    // "size" : t.length,
                    "css" : {
                              "padding"  : "0",
                              "border"   : "1px solid silver",
                              "position" : "absolute",
                              "left"     : (rtl ? "auto" : (w1 + w2 + 4) + "px"),
                              "right"    : (rtl ? (w1 + w2 + 4) + "px" : "auto"),
                              "top"      : "0px",
                              "height"   : (this._data.core.li_height - 2) + "px",
                              "lineHeight" : (this._data.core.li_height - 2) + "px",
                              "width"    : "150px" // will be set a bit further down
                             },
                    "blur" : $.proxy(function ()
                      {
                        var i = obj.children(".oj-tree-rename-input"),
                            v = i.val();
                        if (v === "")  {
                          v = t;
                        }
                        h1.remove();
                        i.remove();                    // rollback purposes
                        this._set_text(obj, t);        // rollback purposes
                        this._rename_node(obj, v);
                        callback.call(this, obj, v, t);
                        obj.css("position","");
                    }, this),

                    "keyup" : function (event)
                      {
                        var key = event.keyCode || event.which;
// ignore first enter, it appears to be left
// over from hitting enter on the menu rename item????!!!
if (! _this._done) {
  _this._done=true ;
  return false;
}
                        if(key == 27)  {
_this._done = false ;
                           this.value = t;
                           this.blur();
                           return;
                        }
                        else if(key == 13)  {
_this._done = false ;
                           this.blur();
                           return;
                        }
                        else  {
                           h2.width(Math.min(h1.text("pW" + this.value).width(),w));
                        }
                    },

                    "keypress" : function(event)
                    {
                      var key = event.keyCode || event.which;
                      if (key == 13)  {
                        return false;
                      }
                    }
                })
            ).children(".oj-tree-rename-input"); 
            this._set_text(obj, "");
            h1.css({
                    fontFamily      : h2.css('fontFamily')      || '',
                    fontSize        : h2.css('fontSize')        || '',
                    fontWeight      : h2.css('fontWeight')      || '',
                    fontStyle       : h2.css('fontStyle')       || '',
                    fontStretch     : h2.css('fontStretch')     || '',
                    fontVariant     : h2.css('fontVariant')     || '',
                    letterSpacing   : h2.css('letterSpacing')   || '',
                    wordSpacing     : h2.css('wordSpacing')     || ''
            });
//Fri2      h2.width(Math.min(h1.text("pW" + h2[0].value).width(),w))[0].select();
            h2.width(Math.min(h1.text("pW" + h2[0].value).width(),w))[0]["select"]();
     },

     /**
       *  @private
       */
     _crrm_create : function (obj, position, js, callback, skip_rename)
     {
        var t, _this = this;
        obj = this._getNode(obj);
        if (!obj) {
           obj = -1;
        }
        this.__rollback();
        t = this._create_node(obj, position, js, function (t)
             {
                var p = this._getParent(t),
                    pos = $(t).index();

                if (callback)  {
                   callback.call(this, t);
                }
                if (p.length && p.hasClass(OJT_CLOSED))  {
                   this["expand"](p, false, true);
                }
                if (!skip_rename)  { 
                  this._crrm_showInput(t, function (obj, new_name, old_name)
                         { 
                            _this._emitEvent({ "obj"      : obj,
                                               "name"     : new_name,
                                               "parent"   : p,
                                               "position" : pos
                                              });
                         });
                }
                else  {
                   _this._emitEvent({ "obj"      : t, 
                                      "name"     : this["getText"](t),
                                      "parent"   : p,
                                      "position" : pos 
                                    });
                }
             });

        return t;
     },

     /**
       *  @private
       */
     _crrm_check_move : function ()
     {
        if (! this.__call_old())  {
          return false;
        }
        //var s = this.options["crrm"]["move"];
        var s = this._data.defaults.crrm["move"];
        if (! s["checkMove"].call(this, this._getMove()))  {
          return false;
        }
        return true;
     },

     /**
       *  @private
       */
     _isHtml : function(s)
     {
        if (!s || s.length < 3) {
          return false ;
        }

        s = s.trim() ;
        return (s.charAt(0) === "<") ;
     },


     /**
       *  Use emptyText option if defined.
       *  @private
       */
     _applyEmptyText : function()
     {
        var txt = this.option.emptyText ;

        if (typeof txt !== "string") {
          txt = this.getTranslatedString("m_emptyText");
        }
        if (txt && txt.length > 0)  {

          var $u =  this._$container_ul;
          var d  = "<li class='oj-tree-empty'>" + txt + "</li>" ;   // no <a>, not interactive 
          $u.empty().append(d);
        }
      },

     /**
       *  Return the HTMLElement based on the locator object properties.
       *  @private
       */
     _processSubId : function(locator)
     {
        // Parent node
        // <li role="treeitem" id="blogs" class="oj-tree-open">
        //    <ins class="oj-tree-icon"> </ins>               <-- disclosure icon
        //    <a tabindex="-1" href="#">
        //       <ins class="oj-tree-icon"> </ins>            <-- node icon
        //       <span class="oj-tree-title">Blogs</span>     <-- node title
        //       <ul role="group"> 
        //          <li . . .child nodes...
        //       </ul>
        //    </a>
        // </li>
        //
        //  Leaf node
        // <li role="treeitem" id="home" myattr1="Hello" class="oj-tree-leaf">
        //    <ins class="oj-tree-icon"> </ins>
        //    <a tabindex="-1" href="#">
        //       <ins class="oj-tree-icon"> ;</ins>           <-- node icon
        //       <span class="oj-tree-title">Home</span>      <-- node title
        //    </a>
        // </li>

        var  subId      = locator["subId"],
             origNode   = locator["node"],
             node       = (origNode? this._getNode(origNode) : null),
//           index      = ((typeof locator["index"] === "number")?  locator["index"] : -1),
//           vis        = ((typeof locator["visible"] === "boolean")?  locator["index"] : false),
             key        = ((typeof locator["key"]   === "string")?  locator["key"] : null),
             val        = ((typeof locator["value"] === "string")?  locator["value"] : null),
             $elem,
             txt,
             l ;

        switch (subId) {
           case "disclosure" :         // returns the disclosure icon element for the parent node
                      if (origNode === -1 || node === -1) {
                        return (this._$container_ul? this._$container_ul[0] : null) ;
                      }

                      if (key) {                                // we ignore node and find by attr
                        l = this._$container_ul.find("li") ;
                        $.each(l, function(i, v) {
                                     v = $(v)
                                     if (v.attr(key) && (v.attr(key) === val))  {
                                       node = v ;
                                       return false ;
                                     }
                                  }) ;
                      }

                      else if ( (!node) && typeof origNode === "string") {
                        // node not found, see if we can locate by text
                        txt = origNode.trim() ;
                        l = this._$container_ul.find("a") ;
                        $.each(l, function(i, v) {
                                     if (v.text.trim() === txt)  {
                                       $elem = $(v) ;
                                       return false ;
                                     }
                                  }) ;
                        if (! $elem) {
                          return null ;               // not found by text
                        }

                        node = $elem.closest("li")
                      }

                      else if (node) {                // did _getNode() resolve to a node
                          if (this._isLeaf(node)) {   // we have a node and
                            return null ;             // not a parent
                          }
                      }


                      // Search complete, did we find the node?
                      if (node) {
                        if (! this._isLeaf(node)) {
                          // Have a parent node
                          return  node.find(" > ins:eq(0)") ;
                        }
                      }
                      return null ;                 // unsuccessful
                      break ;

           case "icon" :              // returns the icon element for the node
                      if (origNode === -1 || node === -1) {
                        return (this._$container_ul? this._$container_ul[0] : null) ;
                      }

                      if (key) {                                // we ignore node and find by attr
                        l = this._$container_ul.find("li") ;
                        $.each(l, function(i, v) {
                                     v = $(v)
                                     if (v.attr(key) && (v.attr(key) === val))  {
                                       node = v ;
                                       return false ;
                                     }
                                  }) ;
                        if (node) {
                          node = node.find(" > a").closest("ins") ;
                        }
                        return node ;
                      }

                      else if ( (!node) && typeof origNode === "string") {
                        // node not found, see if we can locate by text
                        txt = origNode.trim() ;
                        l = this._$container_ul.find("a") ;
                        $.each(l, function(i, v) {
                                     if (v.text.trim() === txt)  {
                                       $elem = $(v) ;
                                       return false ;
                                     }
                                  }) ;
                        return $elem ;
                      }

                      // Search complete, did we find the node?
                      if (node && node.length) {
                        return  node.find(" > a > ins:eq(0)") ;
                      }
                      return null ;                 // unsuccessful
                      break ;

           case "link" :              // returns the <a> element for the node
                      if (origNode === -1 || node === -1) {
                        return (this._$container_ul? this._$container_ul[0] : null) ;
                      }

                      if (key) {                                // we ignore node and find by attr
                        l = this._$container_ul.find("li") ;
                        $.each(l, function(i, v) {
                                     v = $(v)
                                     if (v.attr(key) && (v.attr(key) === val))  {
                                       node = v ;
                                       return false ;
                                     }
                                  }) ;
                        if (node) {
                          node = node.find(" > a:eq(0)") ;
                          if (node) {
                            return node ;
                          }
                        }
                        return false ;
                      }

                      else if ( (!node) && typeof origNode === "string") {
                        // node not found, see if we can locate by text
                        txt = origNode.trim() ;
                        l = this._$container_ul.find("a") ;
                        $.each(l, function(i, v) {
                                     if (v.text.trim() === txt)  {
                                       $elem = $(v) ;
                                       return false ;
                                     }
                                  }) ;
                        return $elem ;
                      }


                      // Search complete, did we find the node?
                      if (node && node.length) {
                        return  node.find(" a:eq(0)") ;
                      }
                      return null ;                 // unsuccessful
                      break ;

           case "parent" :
                      if (node && (origNode !== -1)) {
                        node =  this._getParent(node) ;
                      }
                      node = (node && (node != -1))? node : null ;
                      return  node ;
                      break ;

           case "first" :
                      if ((! node) || (node == -1) || (origNode == -1)) {
                        node = this._$container_ul
                      }
                      return  node.find("li:eq(0)") ;
                      break ;

           case "last" :
                      if ((! node) || (node == -1) || (origNode == -1)) {
                        node = this._$container_ul
                      }
                      return  node.find("li:last-child").last() ;
                      break ;

           case "prevSib" :
                      if (node !== -1) {
                        node = this._getPrev(node, true) ;
                        node = node ? node[0] : null;
                      }
                      else {
                        node = null ;
                      }
                      return  node ;
                      break ;

           case "nextSib" :
                      if (node !== -1) {
                        node = this._getNext(node, true) ;
                        node = node ? node[0] : null;
                      }
                      else {
                        node = null ;
                      }
                      return  node ;
                      break ;

        }

        return null ;
     }

  }) ;    // end    $.widget("oj.ojTree", ...


/*
   // load the css when DOM is ready  -  need to remove this  - TDO
   $(function() {
       var  css = '' + 
           '.oj-tree-list, .oj-tree-list ul, .oj-tree-list li { display:block; margin:0 0 0 0; padding:0 0 0 0; list-style-type:none; } ' + 
           '.oj-tree-list li { display:block; min-height:18px; line-height:18px; white-space:nowrap; margin-left:18px; min-width:18px; } ' + 
           '.oj-tree-rtl li { margin-left:0; margin-right:18px; } ' + 
           '.oj-tree-list > ul > li { margin-left:0px; } ' + 
           '.oj-tree-rtl > ul > li { margin-right:0px; } ' + 
           '.oj-tree-list ins { display:inline-block; text-decoration:none; width:18px; height:18px; margin:0 0 0 0; padding:0; } ' + 
           '.oj-tree-list a { display:inline-block; line-height:16px; height:16px; color:black; white-space:nowrap; text-decoration:none; padding:1px 2px; margin:0; } ' + 
           '.oj-tree-list a:focus { outline: none; } ' + 
           '.oj-tree-list a > ins { height:16px; width:16px; } ' + 
           '.oj-tree-list a > .oj-tree-icon { margin-right:3px; } ' + 
           '.oj-tree-rtl a > .oj-tree-icon { margin-left:3px; margin-right:0; } ' + 
           'li.oj-tree-open > ul { display:block; } ' + 
           'li.oj-tree-closed > ul { display:none; } ';
       // the default stylesheet
       _addSheet({ str : css, title : "oj-tree" });
   });
*/

})();

});
