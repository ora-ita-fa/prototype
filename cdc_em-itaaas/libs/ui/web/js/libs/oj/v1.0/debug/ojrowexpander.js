define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojmodel','ojs/ojdatacollection-common'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        */
       function(oj, $, compCore)
{

/**
 * @class 
 * @name oj.ojRowExpander
 * @augments oj.baseComponent
 */
oj.__registerWidget('oj.ojRowExpander', $['oj']['baseComponent'],
{
    version: "1.0.0",
    widgetEventPrefix: 'oj',
    options:
            {
                /**
                 * The context object obtained from the column renderer (Table) or cell renderer (DataGrid)
                 * 
                 * @expose 
                 * @memberof! oj.ojRowExpander
                 * @instance
                 * @type {Object}
                 * @default <code class="prettyprint">null</code>
                 * 
                 */
                context: null,
                /**
                 * The number of pixels to indent for each level
                 * 
                 * @expose 
                 * @memberof! oj.ojRowExpander
                 * @instance
                 * @type {number}
                 * @default <code class="prettyprint">10</code>
                 * 
                 */
                indent: 10,
                /**
                 * Triggered when a expand is performed on the row expander
                 *
                 * @expose 
                 * @event 
                 * @memberof! oj.ojRowExpander
                 * @instance
                 * @property {Event} event <code class="prettyprint">jQuery</code> event object
                 * 
                 * @example <caption>Initialize the row expander with the <code class="prettyprint">expand</code> callback specified:</caption>
                 * $( ".selector" ).ojRowExpander({
                 *     "expand": function( event, ui ) {}
                 * });
                 *
                 * @example <caption>Bind an event listener to the <code class="prettyprint">ojexpand</code> event:</caption>
                 * $( ".selector" ).on( "ojexpand", function( event, ui ) {} );
                 */
                expand: null,
                /**
                 * Triggered when a collapse is performed on the row expander
                 *
                 * @expose 
                 * @event 
                 * @memberof! oj.ojRowExpander
                 * @instance
                 * @property {Event} event <code class="prettyprint">jQuery</code> event object
                 * 
                 * @example <caption>Initialize the row expander with the <code class="prettyprint">collapse</code> callback specified:</caption>
                 * $( ".selector" ).ojRowExpander({
                 *     "collapse": function( event, ui ) {}
                 * });
                 *
                 * @example <caption>Bind an event listener to the <code class="prettyprint">ojcollapse</code> event:</caption>
                 * $( ".selector" ).on( "ojcollapse", function( event, ui ) {} );
                 */
                collapse: null
            },
    classNames:
            {
                'root': 'oj-rowexpander',
                'icon': 'oj-widget-icon',
                'clickable': 'oj-clickable-icon',
                'expand': 'oj-rowexpander-expand-icon',
                'collapse': 'oj-rowexpander-collapse-icon',
                'leaf': 'oj-rowexpander-leaf-icon',
                'lazyload': 'oj-rowexpander-lazyload-icon'
            },
    /**
     * Create the row expander
     * @memberof! oj.ojRowExpander
     * @private
     */
    _create: function()
    {
        this._super();
        this.element.addClass(this.classNames['root']);
    },
    /**
     * Initialize the row expander
     * @memberof! oj.ojRowExpander
     * @private
     */
    _init: function()
    {
        var self = this, context;
        this._super();
        this._addIcon();
        
        context = this.options['context'];
        this.component = context['component'];
        this.datasource = context['datasource'];
        if (this.component._registerRowExpander)
        {
            this.component._registerRowExpander(this);
        }

        //root hidden so subtract 1
        this.indentation = (context['depth'] - 1) * this.options['indent'];
        this.iconState = context['state'];
        this.rowKey = context['key'];
        this._setIndentationWidth();
        this._setIconStateClass();

        if (this.iconState === 'expanded' || this.iconState === 'collapsed')
        {
            $(this.icon).on('click', function() {
                self._fireExpandCollapse();
            });
            $(this.element).on('keypress', function(event) {
                var code = event.keyCode || event.which;
                if (code === $.ui.keyCode.ENTER || $.ui.keyCode.SPACE)
                {
                    self._fireExpandCollapse();
                }
            });
        }
    },
    /**
     * Refresh the row expander having made external modifications
     *      
     * <p>This method does not accept any arguments.
     * 
     * @expose 
     * @memberof! oj.ojRowExpander
     * @instance
     * 
     * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
     * $( ".selector" ).ojRowExpander( "refresh" );
     */
    refresh: function()
    {
        this.element.empty();
        this._init();
    },
    /**
     * destroy the row expander
     *      
     * <p>This method does not accept any arguments.
     * 
     * @expose 
     * @memberof! oj.ojRowExpander
     * @instance
     * @private     
     * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
     * $( ".selector" ).ojRowExpander( "destroy" );
     */
    _destroy: function()
    {
        this.removeClass(this.classNames['root']);
        this.element.empty();
    },
    /**
     * Add an icon to the row expander with appropriate class names for a clickable icon.
     * @private	 
     */
    _addIcon: function()
    {
        this.icon = $('<a></a>').addClass(this.classNames['icon']).addClass(this.classNames['clickable']);
        this.element.append(this.icon);
    },
    /**
     * Add a class name on the icon
     * @private	 
     * @param {string} classKey the key of the appropriate icon class expand/collapse/leaf
     */
    _addIconClass: function(classKey)
    {
        this.icon.addClass(this.classNames[classKey]);
    },
    /**
     * Remove a class name on the icon
     * @private
     * @param {string} classKey the key of the appropriate icon class expand/collapse/leaf
     */
    _removeIconClass: function(classKey)
    {
        this.icon.removeClass(this.classNames[classKey]);
    },
    /**
     * Set the icon class to the the iconState property
     * @private
     */
    _setIconStateClass: function()
    {
        switch (this.iconState)
        {
            case 'leaf':
                this._addIconClass('leaf');
                break;
            case 'collapsed':
                this._addIconClass('expand');
                this._ariaExpanded(false);
                break;
            case 'expanded':
                this._addIconClass('collapse');
                this._ariaExpanded(true);
                break;
        }

    },
    /**
     * Removes the icon class of the iconState property
     * @private
     */
    _removeIconStateClass: function()
    {
        switch (this.iconState)
        {
            case 'leaf':
                this._removeIconClass('leaf');
                break;
            case 'collapsed':
                this._removeIconClass('expand');
                break;
            case 'expanded':
                this._removeIconClass('collapse');
                break;
        }

    },
    /**
     * Handle an expand event coming from the datasource, 
     * update the icon and the aria-expand property
     * @expose
     */
    handleExpandEvent: function()
    {
        this._removeIconStateClass();
        this.iconState = 'expanded';
        this._setIconStateClass();
        this._ariaExpanded(true);
        this._trigger('expand');
    },
    /**
     * Handle a collapse event coming from the datasource, 
     * update the icon and the aria-expand property
     * @expose
     */
    handleCollapseEvent: function()
    {
        this._removeIconStateClass();
        this.iconState = 'collapsed';
        this._setIconStateClass();
        this._ariaExpanded(false);
        this._trigger('collapse');        
    },
    /**
     * Fire the expand or collapse on the datasource and the oj event on the widget 
     * @private
     */
    _fireExpandCollapse: function()
    {
        if (this.iconState === 'collapsed')
        {
            this.datasource.expand(this.rowKey);
        }
        else if (this.iconState === 'expanded')
        {
            this.datasource.collapse(this.rowKey);
        }
    },
    /**
     * Sets the indentation width to the original width plus the indentation
     * @private
     */
    _setIndentationWidth: function()
    {
        if (this._GetReadingDirection() === "rtl")
        {
            this.element.width((this.element.width() + this.indentation) + 'px');
        }
        else
        {
            this.element.width((this.element.width() + this.indentation) + 'px');
        }
    },
    /**
     * Sets the icon's aria-expanded property to the boolean passed in
     * @param {boolean|null} bool true if expanded false if not
     * @private
     */
    _ariaExpanded: function(bool)
    {
        this.icon.attr('aria-expanded', bool);
    }
});

});
