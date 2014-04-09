define(['ojs/ojcore', 'jquery','ojs/internal-deps/datagrid/DvtDataGrid', 'ojs/ojcomponentcore', 'ojs/ojdatacollection-common','ojs/ojpagingcontrol'], function(oj, $, DvtDataGrid)
{
/**
 * An array based implementation of the DataGridDataSource.
 * @param {Array} data the data in the form of array.
 * @param {Object=} options the options specific to this DataGridDataSource.
 * @param {string=} options.rowHeader the key to the header designated as the row header.
 * @export
 * @constructor
 * @extends oj.DataGridDataSource
 */
oj.ArrayDataGridDataSource = function(data, options)
{
    if (options != null)
    {
        this.rowHeaderKey = options['rowHeader'];
    }

    oj.ArrayDataGridDataSource.superclass.constructor.call(this, data);
};

// Subclass from oj.DataGridDataSource
oj.Object.createSubclass(oj.ArrayDataGridDataSource, oj.DataGridDataSource, "oj.ArrayDataGridDataSource");

/**
 * Initial the array based data source.
 * @export
 */
oj.ArrayDataGridDataSource.prototype.Init = function()
{
    // suck out the column definition from data
    this.columns = this._getColumnsForScaffolding(this.data);
    this._initializeRowKeys();
    
    // call super
    oj.ArrayDataGridDataSource.superclass.Init.call(this);
};

/**
 * Initialize the generated row keys.
 * @private
 */
oj.ArrayDataGridDataSource.prototype._initializeRowKeys = function()
{
    var i;
    this.rowKeys = [];
    for (i=0; i<this.data.length; i+=1)
    {
        this.rowKeys[i] = i.toString();
    }
};

/**
 * Get the column headers from the data, if it is an array of arrays with no row header key set,
 * gets the column number as the column header.
 * @param {Object} data the data to extract the column information.
 * @return {Array} the columns extracted from the data.
 * @private
 */
oj.ArrayDataGridDataSource.prototype._getColumnsForScaffolding = function(data) 
{
    var propertyName, columns;
    if ((typeof data.length !== 'number') || data.length === 0)
    {
        return [];
    }

    columns = [];
    for (propertyName in data[0])
    {
        if (data[0].hasOwnProperty(propertyName)){
            if (!(this.rowHeaderKey != undefined && propertyName == this.rowHeaderKey)){
                columns.push(propertyName);
            }
        }
    }

    return columns;
};

/**
 * Returns the total number of rows or columns.  If the value return is not >= 0 then it is automatically assumed
 * that the total count is unknown.
 * @param {string} axis the axis in which we inquire for the total count.  Valid values are "row" and "column".
 * @return {number} the total number of rows/columns.
 * @export
 */
oj.ArrayDataGridDataSource.prototype.getCount = function(axis)
{
    if (axis === "row")
    {
        return this.data.length;
    }

    if (axis === "column")
    {
        return this.columns.length;
    }

    return 0;
};

/**
 * Retrieve the data for the header of a specified index.
 * @param {string} axis the axis of the header.  Valid values are "row" and "column".
 * @param {number} index the index in which to get the data.
 * @protected
 */
oj.ArrayDataGridDataSource.prototype.getHeaderData = function(axis, index)
{
    if (axis === 'row')
    {
        // if row header is specified
        if (this.rowHeaderKey != undefined)
        {
            return this.data[index][this.rowHeaderKey];
        }
        else if (this.data.length > 0 && this.data[0] instanceof Array)
        {
            // generate default row header for two dimensional array
            if (this.rowKeys[index] === undefined)
            {
                return index.toString();
            }
            else
            {
                return this.rowKeys[index];
            }   
        }
        else
        {
            return null;
        }
    }
    else if (axis === 'column')
    {
        return this.columns[index];
    }
};

/**
 * Retrieve the metadata for the header of a specified index.
 * @param {string} axis the axis of the header.  Valid values are "row" and "column".
 * @param {number} index the index in which to get the metadata.
 * @protected
 */
oj.ArrayDataGridDataSource.prototype.getHeaderMetadata = function(axis, index)
{
    if (axis === 'row')
    {
        if (this.rowHeaderKey != undefined)
        {
            return {'key':index.toString()};            
        }
    }

    return {'key': this.getHeaderData(axis, index)};
};

/**
 * Fetch a range of headers from the data source.
 * @param {Object} headerRange information about the header range, it must contain the following properties:
 *        axis, start, count.
 * @param {string} headerRange.axis the axis of the header that are fetched.  Valid values are "row" and "column".
 * @param {number} headerRange.start the start index of the range in which the header data are fetched.
 * @param {number} headerRange.count the size of the range in which the header data are fetched.  
 * @param {Object} callbacks the callbacks to be invoke when fetch headers operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(HeaderSet)} callbacks.success the callback to invoke when fetch headers completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch cells failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" keys.
 * @export
 */
oj.ArrayDataGridDataSource.prototype.fetchHeaders = function(headerRange, callbacks, callbackObjects)
{
    var axis, start, count, end, headerSet;
    
    axis = headerRange.axis;
    start = headerRange.start;
    count = headerRange.count;
  
    oj.Assert.assert(axis === 'row' || axis === 'column');
    oj.Assert.assert(start < this.getCount(axis));
    oj.Assert.assert(count > 0);

    start = Math.max(0, start);
    if (axis === "column")
    {
        end = Math.min(this.columns.length, start+count);
    }
    else
    {
        // check if no row header is available
        if (this.rowHeaderKey === undefined && !(this.data.length > 0 && this.data[0] instanceof Array))
        {
            // header count = 0
            end = start;
        }
        else
        {
            end = Math.min(this.data.length, start+count);
        }
    }
    headerSet = new oj.ArrayHeaderSet(start, end, axis, this);

    if (callbacks != null && callbacks['success'] != null)
    {
        // make sure callbackObjects is not null
        if (callbackObjects == null)
        {
            callbackObjects = {};
        }        
        callbacks['success'].call(callbackObjects['success'], headerSet, headerRange);
    }
 
};

/**
 * Retrieve the data for the cell of a specified indexes.
 * @param {number} row the row index in which to get the data.
 * @param {number} column the column index in which to get the data.
 * @protected
 */
oj.ArrayDataGridDataSource.prototype.getCellData = function(row, column)
{
    var col = this.columns[column];
    return this.data[row][col];
};

/**
 * Retrieve the metadata for the cell of a specified indexes.
 * @param {number} row the row index in which to get the data.
 * @param {number} column the column index in which to get the data.
 * @protected
 */
oj.ArrayDataGridDataSource.prototype.getCellMetadata = function(row, column)
{
    var keys = {"row": this.rowKeys[row], "column": this.columns[column]};
    return {"keys": keys};
};

/**
 * Fetch a range of cells from the data source.
 * @param {Array.<Object>} cellRanges Information about the cell range.  A cell range is defined by an array 
 *        of range info for each axis, where each range contains three properties: axis, start, count.
 * @param {string} cellRanges.axis the axis associated with this range where cells are fetched.  Valid 
 *        values are "row" and "column".
 * @param {number} cellRanges.start the start index of the range for this axis in which the cells are fetched.
 * @param {number} cellRanges.count the size of the range for this axis in which the cells are fetched. 
 * @param {Object} callbacks the callbacks to be invoke when fetch cells operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(CellSet)} callbacks.success the callback to invoke when fetch cells completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch cells failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" keys.
 * @export
 */
oj.ArrayDataGridDataSource.prototype.fetchCells = function(cellRanges, callbacks, callbackObjects)
{
    var i, cellRange, rowStart, rowEnd, cellSet, colStart, colEnd;
   
    // extract the start and end row/column info from cellRanges (there should only be two, one for each axis)
    for (i=0; i<cellRanges.length; i+=1)
    {
        cellRange = cellRanges[i];   
        oj.Assert.assert(cellRange['axis'] === 'row' || cellRange['axis'] === 'column');
        oj.Assert.assert(cellRange['start'] < this.getCount(cellRange['axis']));
        oj.Assert.assert(cellRange['count'] > 0);        
        if (cellRange['axis'] === "row")
        {
            rowStart = cellRange['start'];
            rowEnd = Math.min(this.data.length, rowStart + cellRange['count']);
        }
        else if (cellRange['axis'] === "column")
        {
            colStart = cellRange['start'];
            colEnd = Math.min(this.columns.length, colStart + cellRange['count']);
        }
    }

    // check for errors
    if (rowEnd === undefined || colEnd === undefined)
    {
        if (callbacks != null && callbacks['error'] != null)
        {
            // make sure callbackObjects is not null
            if (callbackObjects == null)
            {
                callbackObjects = {};
            }            
            callbacks['error'].call(callbackObjects['error']);
        }
        return;
    }

    cellSet = new oj.ArrayCellSet(rowStart, rowEnd, colStart, colEnd, this);

    if (callbacks != null && callbacks['success'] != null)
    {
        // make sure callbackObjects is not null
        if (callbackObjects == null)
        {
            callbackObjects = {};
        }            
        callbacks['success'].call(callbackObjects['success'], cellSet, cellRanges);
    }    
};

/**
 * Returns the keys based on the indexes. 
 * @param {Object} indexes the index for each axis
 * @param {Object} indexes.row the index for the row axis
 * @param {Object} indexes.column the index for the column axis
 * @return {Object.<Object, Object>} an object containing the keys for each axis
 * @export
 */
oj.ArrayDataGridDataSource.prototype.keys = function(indexes)
{
    var rowIndex = indexes['row'], columnIndex = indexes['column'];
    return {"row": this.rowKeys[rowIndex], "column": this.columns[columnIndex]};
};

/**
 * Returns the row and column index based on the keys.
 * @param {Object} keys the key for each axis
 * @param {Object} keys.row the key for the row axis
 * @param {Object} keys.column the key for the column axis
 * @return {Object.<number, number>} indexes an object containing the index for each axis
 * @export
 */
oj.ArrayDataGridDataSource.prototype.indexes = function(keys)
{
    var rowKey = keys['row'], columnKey = keys['column'];
    return {"row": this.rowKeys.indexOf(rowKey), "column": this.columns.indexOf(columnKey)};
};

/**
 * Performs a sort on the data source.
 * @param {Object} criteria the sort criteria. 
 * @param {string} criteria.axis The axis in which the sort is performed, valid values are "row", "column"
 * @param {Object} criteria.key The key that identifies which header to sort
 * @param {string} criteria.direction the sort direction, valid values are "ascending", "descending", "none" (default)
 * @param {Object} callbacks the callbacks to be invoke upon completion of the sort operation.  The callback
 *        properties are "success" and "error".
 * @param {function()} callbacks.success the callback to invoke when the sort completed successfully.  
 * @param {function({status: Object})} callbacks.error the callback to invoke when sort failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" properties.
 * @export
 */
oj.ArrayDataGridDataSource.prototype.sort = function(criteria, callbacks, callbackObjects)
{
    var sortArray = [], indices = [], newData = [], newColumns = [], newRowKeys = [], i, headerIndex, axis, headerKey, direction; 
            
    axis = criteria['axis']; 
    headerKey = criteria['key']; 
    direction = criteria['direction'];
    
    // make sure callbackObjects is non null
    if (callbacks != null && callbackObjects == null)
    {
        callbackObjects = {};
    }

    if (axis === 'column')
    {
        headerIndex = this.columns.indexOf(headerKey);
        //get the values in the column and create an array of each index
        for (i=0; i<this.data.length; i+=1)
        {
            sortArray[i] = this.data[i][this.columns[headerIndex]];
            indices[i] = i;
        }
        
        //sort the indicies so we can map where everything needs to move
        indices.sort(this._naturalSort(sortArray, direction));

        //reorder the data
        for (i=0; i<this.data.length; i+=1)
        {
            newData[i] = this.data[indices[i]];
            newRowKeys[i] = this.rowKeys[indices[i]];
        }
        
        //set the data
        this.data = newData;
        this.rowKeys = newRowKeys;
        if (callbacks != null && callbacks['success'] != null)
        {
            callbacks['success'].call(callbackObjects['success']);
        }
    }
    else if (axis === 'row')
    {
        headerIndex = this.rowKeys.indexOf(headerKey);
        for (i=0; i<this.columns.length; i+=1)
        {
            sortArray[i] = this.data[headerIndex][this.columns[i]];
            indices[i] = i;
        }
        
        indices.sort(this._naturalSort(sortArray, direction));
        
        for (i=0; i<this.columns.length; i+=1)
        {
            newColumns[i] = this.columns[indices[i]];
        }
        
        this.columns = newColumns;
        if (callbacks !== null && callbacks['success'] != null)
        {
            callbacks['success'].call(callbackObjects['success']);
        }        
    }
    else
    {
        if (callbacks !== null && callbacks['error'] != null)
        {
            callbacks['error'].call(callbackObjects['error'], "Invalid axis value");
        }    
    }
};

/**
 * Determines whether this DataGridDataSource supports certain feature.
 * @param {string} feature the feature in which its capabilities is inquired.  Currently the only valid feature is "sort".
 * @return {string|null} the name of the feature.  For sort, the valid return values are: "full", "none".  Returns null if the
 *         feature is not recognized.
 * @export
 */
oj.ArrayDataGridDataSource.prototype.getCapability = function(feature)
{
    if (feature === 'sort')
    {
        // array based data source supports column sorting only
        return 'column';
    }
    if (feature === 'move')
    {
        return 'row';
    }
    return null;
};

/**
 * Get a comparator fuicntion for natural sorting of objects
 * @param {Array} sortArray the array to actually sort based on
 * @param {string} direction ascending, descending 
 * @returns {function(Object, Object)|undefined} a comapartor function, dependent on direction
 * @private
 */
oj.ArrayDataGridDataSource.prototype._naturalSort = function(sortArray, direction) 
{
    if (direction === 'ascending')
    {
        return function(a, b) 
        {
            var as, bs;
            //Get the values the array we're sorting
            a = sortArray[a];
            b = sortArray[b];
            //Strings of numbers return false, so we can compare strings of numebers with numbers                
            as = isNaN(a);
            bs = isNaN(b);
            //If they are strings, check to see if they are dates, if they are, turn the string to a sortable date formatted string           
            if (a instanceof Date) {
                a = a.toISOString();
                as = true;
            }
            if (b instanceof Date) {
                b = b.toISOString();
                bs = true;
            }
            //both are string
            if (as && bs)
            {
                return a < b ? -1 : a === b ? 0 : 1;
            }
            //only a is a string
            if (as)
            {
                return 1;
            }
            //only b is a string
            if (bs)
            {
                return -1;
            }
            //both are numbers
            return a - b;
        };
    }
    if (direction === 'descending')
    {
        return function(a, b) 
        {
            var as, bs;
            a = sortArray[a];
            b = sortArray[b];
            as = isNaN(a);
            bs = isNaN(b);
            if (a instanceof Date) {
                a = a.toISOString();
                as = true;
            }
            if (b instanceof Date) {
                b = b.toISOString();
                bs = true;
            }
            if (as && bs)
            {
                return a > b ? -1 : a === b ? 0 : 1;
            }
            if (as)
            {
                return -1;
            }
            if (bs)
            {
                return 1;
            }
            return b - a;
        };
    }

    // only if direction is not recognized
    return;
};


/**
 * Move a model to a new index in the collection
 * @export
 */
oj.ArrayDataGridDataSource.prototype.move = function(moveKey, atKey)
{
    var moveKeyIndex, moveData, atKeyIndex, event;
    moveKeyIndex = this.rowKeys.indexOf(moveKey);

    this.rowKeys.splice(moveKeyIndex,1);
    moveData = this.data.splice(moveKeyIndex,1)[0];
    
    event = {'source': this, 'operation':'delete', 'keys':{'row':moveKey, 'column':null}};
    this.handleEvent("change", event);    
    
    if (atKey === null)
    {
        this.rowKeys.push(moveKey);
        this.data.push(moveData);    
    }
    else
    {
        atKeyIndex = this.rowKeys.indexOf(atKey);
        this.rowKeys.splice(atKeyIndex,0, moveKey);
        this.data.splice(atKeyIndex,0, moveData);    
    }

    event = {'source': this, 'operation':'insert', 'keys':{'row':moveKey, 'column':null}};
    this.handleEvent("change", event);
};


//////// testing methods to get properties /////////

/**
 * Gets the rowHeaderKey property
 * @export
 */
oj.ArrayDataGridDataSource.prototype.getRowHeaderKey = function()
{
    return this.rowHeaderKey;
};

/**
 * Gets the columns property
 * @export
 */
oj.ArrayDataGridDataSource.prototype.getColumns = function()
{
    return this.columns;
};

/**
 * Gets the rowKeys property
 * @export
 */
oj.ArrayDataGridDataSource.prototype.getRowKeys = function()
{
    return this.rowKeys;
};

/**
 * Gets the data property
 * @export
 */
oj.ArrayDataGridDataSource.prototype.getData = function()
{
    return this.data;
};
/*jslint browser: true*/
/**
 * @export    
 * This class captures all translation resources and style classes used by the DataGrid.
 * This should be populated with information extracted through the framework and set on the DataGrid.
 * Internal.  Developers should never use this class.
 * @constructor
 */
oj.DataGridResources = function(rtlMode, translationFunction)
{
    this.rtlMode = rtlMode;
    this.translationFunction = translationFunction;
    this.styles = {};
    this.styles['datagrid'] = "oj-datagrid";
    this.styles['cell'] = "oj-datagrid-cell";
    this.styles['banded'] = "oj-datagrid-banded";
    this.styles['row'] = "oj-datagrid-row";
    this.styles['databody'] = "oj-datagrid-databody";
    this.styles['topcorner'] = "oj-datagrid-top-corner";
    this.styles['bottomcorner'] = "oj-datagrid-bottom-corner";
    this.styles['rowheaderspacer'] = "oj-datagrid-row-header-spacer";
    this.styles['colheaderspacer'] = "oj-datagrid-column-header-spacer";
    this.styles['status'] = "oj-datagrid-status";
    this.styles['emptytext'] = "oj-datagrid-empty-text";
    this.styles['header'] = "oj-datagrid-header";                
    this.styles['headercell'] = "oj-datagrid-headercell";
    this.styles['rowheader'] = "oj-datagrid-rowheader";
    this.styles['colheader'] = "oj-datagrid-colheader";
    this.styles['colheadercell'] = "oj-datagrid-colheadercell";
    this.styles['rowheadercell'] = "oj-datagrid-rowheadercell";
    this.styles['scroller-mobile'] = "oj-datagrid-scroller-mobile";
    this.styles['scroller'] = "oj-datagrid-scroller";
    this.styles['scrollers'] = "oj-datagrid-scrollers";
    this.styles['hover'] = "oj-hover";
    this.styles['active'] = "oj-active";
    this.styles['selected'] = "oj-checked";
    this.styles['disabled'] = "oj-disabled";
    this.styles['sortindicators'] = "oj-datagrid-sort-indicators";
    this.styles['sortascending'] = "oj-datagrid-sort-ascending-icon";
    this.styles['sortdescending'] = "oj-datagrid-sort-descending-icon";
    this.styles['icon'] = "oj-widget-icon";
    this.styles['clickableicon'] = "oj-clickable-icon";    
    this.styles['info'] = "oj-helper-hidden-accessible";
    this.styles['rowexpander'] = "oj-rowexpander";
    this.styles['cut'] = "oj-datagrid-cut";
    this.styles['move'] = "oj-datagrid-move";
    this.styles['droptarget'] = "oj-datagrid-droptarget";
    
    this.commands = {};
    this.commands['sortCol'] = "oj-datagrid-sortCol";
    this.commands['sortColAsc'] = "oj-datagrid-sortColAsc";
    this.commands['sortColDsc'] = "oj-datagrid-sortColDsc";
    this.commands['sortRow'] = "oj-datagrid-sortRow";
    this.commands['sortRowAsc'] = "oj-datagrid-sortRowAsc";
    this.commands['sortRowDsc'] = "oj-datagrid-sortRowDsc";
    this.commands['resize'] = "oj-datagrid-resize";
    this.commands['resizeWidth'] = "oj-datagrid-resizeWidth";
    this.commands['resizeHeight'] = "oj-datagrid-resizeHeight";
    this.commands['cut'] = "oj-datagrid-cut";
    this.commands['paste'] = "oj-datagrid-paste";
    
    this.attributes = {};
    this.attributes['key'] = "data-oj-key";
    this.attributes['resizable'] = "data-oj-resizable";
    this.attributes['sortable'] = "data-oj-sortable";    
    this.attributes['sortDir'] = "data-oj-sortdir";    
    this.attributes['expander'] = "data-oj-expander";    
    this.attributes['expanderIndex'] = "data-oj-expander-index";    
    this.attributes['container'] = oj.Components._OJ_CONTAINER_ATTR;
};

/**
 * Whether the reading direction is right to left.
 * @return {boolean} true if reading direction is right to left, false otherwise.
 * @export
 */
oj.DataGridResources.prototype.isRTLMode = function()
{
    return (this.rtlMode === "rtl") ? true : false;
};

/**
 * Gets the translated text
 * @param {string} key the key to the translated text
 * @param {Array=} args optional arguments to format the translated text
 * @return {string|null} the translated text
 * @export
 */
oj.DataGridResources.prototype.getTranslatedText = function(key, args)
{
    return this.translationFunction(key, args);
};

/**
 * Gets the mapped style class
 * @param {string} key the key to the style class
 * @return {string|null} the style class
 * @export
 */
oj.DataGridResources.prototype.getMappedStyle = function(key)
{
    if (key != null)
    {
        return this.styles[key];
    }
    return null;
};

/**
 * Gets the mapped command class
 * @param {string} key the key to the command class
 * @return {string|null} the command class
 * @export
 */
oj.DataGridResources.prototype.getMappedCommand = function(key)
{
    if (key != null)
    {
        return this.commands[key];
    }
    return null;
};

/**
 * Gets the mapped attribute
 * @param {string} key the key to the attribute
 * @return {string|null} the attribute
 * @export
 */
oj.DataGridResources.prototype.getMappedAttribute = function(key)
{
    if (key != null)
    {
        return this.attributes[key];
    }
    return null;
};
/**
 * @class 
 * @name oj.ojDataGrid
 * @augments oj.baseComponent
 */
oj.__registerWidget('oj.ojDataGrid', $['oj']['baseComponent'],
{
    version: "1.0.0",
    widgetEventPrefix: 'oj',
    options:
            {
                /**
                 * Banding interval for rows/columns within the data grid body.
                 * 
                 * @expose 
                 * @memberof! oj.ojDataGrid
                 * @instance
                 * @type {Object.<string, number>}
                 * @default <code class="prettyprint">{ "row":0, "column":0 }</code>
                 * 
                 * @example <caption>Initialize the data grid with the row banding interval set to every other row:</caption>
                 * $( ".selector" ).ojDataGrid({ "data":data, "bandingInterval": {"row":1} });
                 * 
                 * @example <caption>Get or set the <code class="prettyprint">rowBanding</code> option, after initialization:</caption>
                 * // getter
                 * var bandingInterval = $( ".selector" ).ojDataGrid( "option", "bandingInterval" );
                 * 
                 * // setter
                 * $( ".selector" ).ojDataGrid( "option", "bandingInterval", {"row":1, "column":1 } );
                 */
                bandingInterval: {row: 0, column: 0},
                /**
                 * The data source for the DataGrid. If an array (single or two-dimensional) 
                 * or oj collection is specified, the widget will automatically create 
                 * the appropriate adapter for it. A custom data source can be passed in as well.
                 * To specify a row header key or index pass in an Object as such:
                 * {"data": {oj.DataGridDataSource|oj.Collection|Array}, "rowHeader":{string|number}
                 * If the data attribute is not specified, an empty data grid is displayed.
                 * 
                 * @expose 
                 * @memberof! oj.ojDataGrid
                 * @instance
                 * @type {oj.DataGridDataSource|oj.Collection|Array|Object|null}
                 * @default <code class="prettyprint">null</code>
                 * 
                 * @example <caption>Initialize the data grid with a one-dimensional array:</caption>
                 * $( ".selector" ).ojDataGrid({ "data":[1,2,3]});
                 * 
                 * @example <caption>Initialize the data grid with a two-dimensional array:</caption>
                 * $( ".selector" ).ojDataGrid({ "data":['X','X','O'],['O','X','O'],['O','O','X']});
                 * 
                 * @example <caption>Initialize the data grid with a two-dimensional array and set an index for row headers:</caption>
                 * $( ".selector" ).ojDataGrid({ "data":{"rowHeader":2 , "data":['1','2','Cat'],['1','4','Dog'],['5','1','Bird']}});
                 * 
                 * @example <caption>Initialize the data grid with an oj.Collection:</caption>
                 * $( ".selector" ).ojDataGrid({ "data": new oj.Collection.extend({url: 'file.json'}) });
                 * 
                 * @example <caption>Initialize the data grid with an oj.Collection and specify a row header:</caption>
                 * $( ".selector" ).ojDataGrid({ "data":{ "data":new oj.Collection.extend({url: 'file.json'}), "rowHeader":'key' }});
                 * 
                 * @example <caption>Initialize the data grid with a custom data source</caption>
                 * $( ".selector" ).ojDataGrid({ "data":new CustomDataSource()});
                 */
                data: null,
                /**
                 * The text to display when there are no data in the Grid. If it is not defined, 
                 * then a default empty text is extracted from the resource bundle.
                 * 
                 * @expose 
                 * @memberof! oj.ojDataGrid
                 * @instance
                 * @type {String|null}
                 * @default <code class="prettyprint">"There are no data to display"</code>
                 * 
                 * @example <caption>Initialize the data grid with the empty text set to 'no data':</caption>
                 * $( ".selector" ).ojDataGrid({ "data":data, "emptyText": "no data" });
                 */
                emptyText: null,
                /**
                 * Specifies whether or not the horizontal/vertical grid lines are visible. Gridlines are
                 * visible by default, and must be set to 'hidden' in order to be hidden.
                 * 
                 * @expose 
                 * @memberof! oj.ojDataGrid
                 * @instance
                 * @type {Object.<string, string>}
                 * @default <code class="prettyprint">{"horizontal": "visible", "vertical": "visible"}</code>
                 * 
                 * @example <caption>Initialize the data grid with only horizontal gridlines visible:</caption>
                 * $( ".selector" ).ojDataGrid({ "data":data, "gridlines": {"horizontal": "visible", "vertical": "hidden"} });
                 */
                gridlines: {"horizontal": "visible", "vertical": "visible"},
                /**
                 * Specifies the mechanism used to scroll the data inside the data grid. possible values are: auto(datagrid will decide), loadMoreOnScroll, and scroll.
                 * When loadMoreOnScroll is specified, additional data are fetched when the user scrolls to the bottom of the data grid.
                 * When scroll is specified, then virtual scrolling is used meaning only rows/columns visibile in the viewport are fetched.
                 * 
                 * @expose 
                 * @memberof! oj.ojDataGrid
                 * @instance
                 * @type {string|null}
                 * @default <code class="prettyprint">null</code>
                 * 
                 * @example <caption>Initialize the data grid to use virtualized scrolling:</caption>
                 * $( ".selector" ).ojDataGrid({ "data":data, "scrollPolicy": "scroll"});
                 */
                scrollPolicy: "auto",
                /**
                 * The index or key of the row and/or column to display initially in the data grid.
                 * 
                 * @expose 
                 * @memberof! oj.ojDataGrid
                 * @instance
                 * @type {Object.<string, Object>|null}
                 * @default <code class="prettyprint">null</code>
                 * 
                 * @example <caption>Initialize the data grid to scroll to row index 5 and column index 7:</caption>
                 * $( ".selector" ).ojDataGrid({ "data":data, "scrollPosition": {"index":{"row": 5, "column": 7}}});
                 * 
                 * @example <caption>Initialize the data grid to scroll to row key 'id5' and column key 'id7':</caption>
                 * $( ".selector" ).ojDataGrid({ "data":data, "scrollPosition": {"key":{"row": "id5", "column": "id7"}}}); 
                 */
                scrollPosition: null,
                /**
                 * Specifies whether row/cell selection can be made and the cardinality 
                 * of each (single/multiple/none) selection in the Grid.
                 * 
                 * @expose 
                 * @memberof! oj.ojDataGrid
                 * @instance
                 * @type {Object.<string, string>|null}
                 * @default <code class="prettyprint">null</code>
                 * 
                 * @example <caption>Initialize the data grid to enable single row selection:</caption>
                 * $( ".selector" ).ojDataGrid({ "data":data, "selectionMode": {"row":"single"}});
                 * 
                 * @example <caption>Initialize the data grid to enable multiple cell selection:</caption>
                 * $( ".selector" ).ojDataGrid({ "data":data, "selectionMode": {"cell":"multiple"}});
                 */
                selectionMode: null,
                /** @expose */
                header: {
                    /** @expose */
                    row: {
                        /**
                         * A CSS style class to use for the row header.
                         * 
                         * @expose 
                         * @memberof! oj.ojDataGrid
                         * @instance
                         * @type {string|null}
                         * @default <code class="prettyprint">null</code>
                         * 
                         * @example <caption>Initialize the data grid with row header style calss set to 'rhstyle':</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "row": {"className":"rhstyle"} } });
                         */
                        className: null,
                        /**
                         * The renderer function that renders the content of the row header cell. 
                         * The headerContext contains information about the header such as its index, 
                         * axis, data, and parent element. The function returns  either a String or 
                         * a DOM element of the content inside the header. If the developer chooses 
                         * to manipulate the header element directly, the function should return 
                         * nothing. If no renderer is specified, the Grid will treat the cell data as a String.
                         * 
                         * @expose 
                         * @memberof! oj.ojDataGrid
                         * @instance
                         * @type {function(Object)|null}
                         * @default <code class="prettyprint">null</code>
                         * 
                         * @example <caption>Initialize the data grid with row header renderer that capitalizes each character in the row header cells:</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "row": {"renderer": function(headerContext) {
                         *                                            return headerContext['key'].toUpperCase();}}}});
                         */
                        renderer: null,
                        /**
                         * Whether the header width or height or both can be resize. Note 
                         * that for column header, function cannot be used with "height" 
                         * and for row header, function cannot be used with "width".
                         * 
                         * @expose 
                         * @memberof! oj.ojDataGrid
                         * @instance
                         * @type {Object.<string, string>}
                         * @default <code class="prettyprint">{"width": "disable", "height": "disable"}</code>
                         * 
                         * @example <caption>Initialize the data grid with row header height resizable only:</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "row": {"resizable": {"height":"enable"}}}});
                         */
                        resizable: {width: 'disable', height: 'disable'},
                        /**
                         * Whether or not the field bounded by this header is sortable. The 
                         * data source associated with the DataGrid must have the sort function defined.
                         * 
                         * @expose 
                         * @memberof! oj.ojDataGrid
                         * @instance
                         * @type {string}
                         * @default <code class="prettyprint">"default"</code>
                         * 
                         * @example <caption>Initialize the data grid with row header sort disabled:</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "row": {"sortable": null}}});
                         */
                        sortable: "default",
                        /**
                         * The CSS style to set on the header element.
                         * 
                         * @expose 
                         * @memberof! oj.ojDataGrid
                         * @instance
                         * @type {string|null}
                         * @default <code class="prettyprint">null</code>
                         * 
                         * @example <caption>Initialize the data grid with row headers to have green backgrounds:</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "row": {style: "background-color: green"}}});
                         * 
                         * @example <caption>Initialize the data grid with every other row header to have a green background:</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "row": {style: function(headerContext) {
                         *                                            if (headerContext['index'] % 2 === 0)
                         *                                               return "background-color: green";
                         *                                            return;}}}});           
                         */
                        style: null,
                        /**
                         * The template to use to render the row headers
                         * 
                         * @expose 
                         * @memberof! oj.ojDataGrid
                         * @instance
                         * @type {string|null}
                         * @default <code class="prettyprint">null</code>
                         * 
                         */
                        template:null                        
                    },
                    /** @expose */
                    column: {
                        /**
                         * A CSS style class to use for the column header.
                         * 
                         * @expose 
                         * @memberof! oj.ojDataGrid
                         * @instance
                         * @type {string|null}
                         * @default <code class="prettyprint">null</code>
                         * 
                         * @example <caption>Initialize the data grid with row header style calss set to 'rhstyle':</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "column": {"className":"rhstyle"} } });
                         */
                        className: null,
                        /**
                         * The renderer function that renders the content of the column header cell. 
                         * The headerContext contains information about the header such as its index, 
                         * axis, data, and parent element. The function returns  either a String or 
                         * a DOM element of the content inside the header. If the developer chooses 
                         * to manipulate the header element directly, the function should return 
                         * nothing. If no renderer is specified, the Grid will treat the cell data as a String.
                         * 
                         * @expose 
                         * @memberof! oj.ojDataGrid
                         * @instance
                         * @type {function(Object)|null}
                         * @default <code class="prettyprint">null</code>
                         * 
                         * @example <caption>Initialize the data grid with column header renderer that capitalizes each character in the column header cells:</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "column": {"renderer": function(headerContext) {
                         *                                            return headerContext['key'].toUpperCase();}}}});
                         */
                        renderer: null,
                        /**
                         * Whether the header width or height or both can be resize. Note 
                         * that for column header, function cannot be used with "height" 
                         * and for row header, function cannot be used with "width".
                         * 
                         * @expose 
                         * @memberof! oj.ojDataGrid
                         * @instance
                         * @type {Object.<string, string>|null}
                         * @default <code class="prettyprint">{"width": "disable", "height": "disable"}</code>
                         * 
                         * @example <caption>Initialize the data grid with column header width resizable only:</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "row": {"resizable": {"width":"enable"}}}});
                         */
                        resizable: {width: 'disable', height: 'disable'},
                        /**
                         * Whether or not the field bounded by this header is sortable. The 
                         * data source associated with the DataGrid must have the sort function defined.
                         * 
                         * @expose 
                         * @memberof! oj.ojDataGrid
                         * @instance
                         * @type {string}
                         * @default <code class="prettyprint">"default"</code>
                         * 
                         * @example <caption>Initialize the data grid with column header sort disabled:</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "column": {"sortable": null}}});
                         */
                        sortable: "default",
                        /**
                         * The CSS style to set on the header element.
                         * 
                         * @expose 
                         * @memberof! oj.ojDataGrid
                         * @instance
                         * @type {string|null}
                         * @default <code class="prettyprint">null</code>
                         * 
                         * @example <caption>Initialize the data grid with column headers to have green backgrounds:</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "column": {style: "background-color: green"}}});
                         * 
                         * @example <caption>Initialize the data grid with every other column header to have a green background:</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "column": {style: function(headerContext) {
                         *                                            if (headerContext['index'] % 2 === 0)
                         *                                               return "background-color: green";
                         *                                            return;}}}});           
                         */
                        style: null,
                       /**
                         * The template to use to render the column headers
                         * 
                         * @expose 
                         * @memberof! oj.ojDataGrid
                         * @instance
                         * @type {string|null}
                         * @default <code class="prettyprint">null</code>
                         * 
                         */                        
                        template:null
                    }
                },
                /** @expose */
                cell: {
                    /**
                     * A CSS style class to use for the cell.
                     * 
                     * @expose 
                     * @memberof! oj.ojDataGrid
                     * @instance
                     * @type {string|null}
                     * @default <code class="prettyprint">null</code>
                     * 
                     * @example <caption>Initialize the data grid with row header style calss set to 'rhstyle':</caption>
                     * $( ".selector" ).ojDataGrid({ "data":data, "cell":{"className":"cellstyle"} });
                     */
                    className: null,
                    /**
                     * The renderer function that renders the content of the cell. 
                     * The headerContext contains information about the header such as its index, 
                     * axis, data, and parent element. The function returns  either a String or 
                     * a DOM element of the content inside the header. If the developer chooses 
                     * to manipulate the header element directly, the function should return 
                     * nothing. If no renderer is specified, the Grid will treat the cell data as a String.
                     * 
                     * @expose 
                     * @memberof! oj.ojDataGrid
                     * @instance
                     * @type {function(Object)|null}
                     * @default <code class="prettyprint">null</code>
                     * 
                     * @example <caption>Initialize the data grid with column header renderer that capitalizes each character in the cells:</caption>
                     * $( ".selector" ).ojDataGrid({ "data":data, "cell": {"renderer": function(headerContext) {
                     *                                            return headerContext['key'].toUpperCase();}}});
                     */
                    renderer: null,
                    /**
                     * The CSS style to set on the cell.
                     * 
                     * @expose 
                     * @memberof! oj.ojDataGrid
                     * @instance
                     * @type {string|null}
                     * @default <code class="prettyprint">null</code>
                     * 
                     * @example <caption>Initialize the data grid with cells to have green backgrounds:</caption>
                     * $( ".selector" ).ojDataGrid({ "data":data, "cell":{style: "background-color: green"}});
                     * 
                     * @example <caption>Initialize the data grid with every other column header to have a green background:</caption>
                     * $( ".selector" ).ojDataGrid({ "data":data, "cell": {style: function(headerContext) {
                     *                                            if (headerContext['index'] % 2 === 0)
                     *                                               return "background-color: green";
                     *                                            return;}}});           
                     */
                    style: null,
                    /**
                    * The template to use to render the cells
                    * 
                    * @expose 
                    * @memberof! oj.ojDataGrid
                    * @instance
                    * @type {string|null}
                    * @default <code class="prettyprint">null</code>
                    * 
                    */    
                    template:null
                },

                /**
                 * Triggered when a portion of the data grid is selected
                 *
                 * @expose 
                 * @event 
                 * @memberof! oj.ojDataGrid
                 * @instance
                 * @property {Event} event <code class="prettyprint">jQuery</code> event object
                 * @property {Object} ui Parameters
                 * @property {Array} ui.selection the datagrid selection object
                 * 
                 * @example <caption>Initialize the data grid with the <code class="prettyprint">select</code> callback specified:</caption>
                 * $( ".selector" ).ojDataGrid({
                 *     "select": function( event, ui ) {}
                 * });
                 *
                 * @example <caption>Bind an event listener to the <code class="prettyprint">ojselect</code> event:</caption>
                 * $( ".selector" ).on( "ojselect", function( event, ui ) {} );
                 */
                select: null,

                /**
                 * Triggered when a portion of the data grid is resized
                 *
                 * @expose 
                 * @event 
                 * @memberof! oj.ojDataGrid
                 * @instance
                 * @property {Event} event <code class="prettyprint">jQuery</code> event object
                 * @property {Object} ui Parameters
                 * @property {Element} ui.header the header Element which was resized
                 * @property {string} ui.size the new pixel size string (ex: '75px')
                 *
                 * @example <caption>Initialize the data grid with the <code class="prettyprint">resize</code> callback specified:</caption>
                 * $( ".selector" ).ojDataGrid({
                 *     "resize": function( event, ui ) {}
                 * });
                 *
                 * @example <caption>Bind an event listener to the <code class="prettyprint">ojresize</code> event:</caption>
                 * $( ".selector" ).on( "ojresize", function( event, ui ) {} );
                 */
                resize: null,				

                /**
                 * Triggered when a sort is performed on the data grid
                 *
                 * @expose 
                 * @event 
                 * @memberof! oj.ojDataGrid
                 * @instance
                 * @property {Event} event <code class="prettyprint">jQuery</code> event object
                 * @property {Object} ui Parameters
                 * @property {Element} ui.header the header Element which was sorted on				 
                 * @property {string} ui.direction the direction of the sort ascending/descending
                 * 
                 * @example <caption>Initialize the data grid with the <code class="prettyprint">sort</code> callback specified:</caption>
                 * $( ".selector" ).ojDataGrid({
                 *     "sort": function( event, ui ) {}
                 * });
                 *
                 * @example <caption>Bind an event listener to the <code class="prettyprint">ojsort</code> event:</caption>
                 * $( ".selector" ).on( "ojsort", function( event, ui ) {} );
                 */
                sort: null	
            },
    /**
     * Create the grid
     * @memberof! oj.ojDataGrid
     * @private
     */
    _create: function()
    {
        $(this.root).addClass("oj-widget");
        this._super();
        this.root = this.element[0];
        this.rootId = this.root.getAttribute('id');        
        this.grid = new DvtDataGrid();        
    },
    /**
     * Initialize the grid
     * @memberof! oj.ojDataGrid
     * @private
     */            
    _init: function()
    {     
        var self = this;
        $(this.root).empty();
        this._super();          
        this.resources = new oj.DataGridResources(this._GetReadingDirection(), this._getTranslation.bind(self));
        this._setDataSource();
        this._registerDataSourceListeners();

        this._addContextMenu();    
        if (this.datasource != null)
        {
            this.grid.SetDataSource(this.datasource);
        }
        this.grid.SetOptions(this.options);
        this.grid.SetResources(this.resources);
        this.grid.SetCreateContextCallback(this._modifyContext.bind(self));

        //listen for resizing, selection, sort and trigger relevent events
        this.grid.addListener('resize', function(details)
        {
            self._trigger('resize', details['event'], details['ui']);
        });
        this.grid.addListener('select', function(details)
        {
            self._trigger('select', details['event'], details['ui']);
        });
        this.grid.addListener('sort', function(details)
        {
            self._trigger('sort', details['event'], details['ui']);
        });

        this.grid.render(this.root);   
    },
    /**
     * Redraw the entire data grid after having made some external modifications.
     *      
     * <p>This method does not accept any arguments.
     * 
     * @expose 
     * @memberof! oj.ojDataGrid
     * @instance
     * 
     * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
     * $( ".selector" ).ojDataGrid( "refresh" );
     */
    refresh: function()
    {
        this._super();	
        $(this.root).empty();
        this._setDataSource();
        if (this.datasource != null)
        {
            this.grid.SetDataSource(this.datasource);
        }
        this.grid.SetOptions(this.options);
        this.grid.SetResources(this.resources);        
        this.grid.refresh(this.root);
    },
    /**
     * Destroy the grid
     * @memberof! oj.ojDataGrid
     * @private
     */
    _destroy: function()
    {
        this.grid.destroy();
        $(this.root).empty();
    },
            
    /**
     * Register data source event handlers that are JET specific
     * @private
     */
    _registerDataSourceListeners: function()
    {
        if (this.datasource != null)
        {
            this.datasource.on("expand", this._handleExpandEvent.bind(this), this);
            this.datasource.on("collapse", this._handleCollapseEvent.bind(this), this);
        }
    },            
            
    /**
     * Handle an expand event coming from the datasource, 
     * tell the rowexpander to handle expand
     * @param {Object} event an object which should contain the rowKey
     * @private
     */            
    _handleExpandEvent: function(event)
    {
        var rowKey, rowExpander;
        rowKey = event['rowKey'];
        rowExpander = this._getDatabody().find('[' + this._getMappedAttribute('key') + '="' + rowKey + '"]').find('.' + this._getMappedStyle('rowexpander'));
        rowExpander.ojRowExpander('handleExpandEvent');

    },

    /**
     * Handle a collapse event coming from the datasource, 
     * tell the rowexpander to handle collapse
     * @private
     * @param {Object} event an object which should contain the rowKey
     */                        
    _handleCollapseEvent: function(event)
    {
        var rowKey, rowExpander;
        rowKey = event['rowKey'];
        rowExpander = this._getDatabody().find('[' + this._getMappedAttribute('key') + '="' + rowKey + '"]').find('.' + this._getMappedStyle('rowexpander'));
        rowExpander.ojRowExpander('handleCollapseEvent');    
    },                        
            
    /**
     * Checks if resize is enabled along a given axis width/height
     * @private	 
     * @param {string} axis column/row
     * @param {string} direction width/height
     * @return {boolean} true if resize is not set to 'disable'
     */
    _isResizeEnabled: function(axis, direction)
    {
        return this.options['header'][axis]['resizable'][direction] !== 'disable';
    },
            
    /**
     * Add a default context menu to the grid if there is none. If there is
     * a context menu set on the grid options we use that one. Add listeners
     * for context menu before show and select. 
     * @private	 
     */
    _addContextMenu: function()
    {
        var self, menuContainer, rootId, resizeMenu = null, sortMenu = null, moveMenu = null, listItems, temp;
        self = this;

        if (this.options["contextMenu"]['menu'] == null)
        {
            if (this.datasource != null) {
                menuContainer = $('<ul>');
                menuContainer.css('display', 'none').attr('id', this.rootId + 'contextmenu');
                $(this.root).append(menuContainer);
                if (this._isResizeEnabled('column', 'width') || this._isResizeEnabled('column', 'height') ||
                        this._isResizeEnabled('row', 'width') || this._isResizeEnabled('row', 'height'))
                {
                    resizeMenu = this._buildContextMenuItem('resize');
                }
                switch (this.datasource.getCapability('sort'))
                {
                    case 'none':
                        break;
                    case 'column':
                        sortMenu = this._buildContextMenuItem('sortCol');
                        break;
                    case 'row':
                        sortMenu = this._buildContextMenuItem('sortRow');
                        break;
                    default:
                        temp = this._buildContextMenuItem('sortCol');
                        sortMenu = temp.add(this._buildContextMenuItem('sortRow'));
                }
                switch (this.datasource.getCapability('move'))
                {
                    case 'none':
                        break;
                    default:
                        moveMenu = $(this._buildContextMenuListItem('cut')).add($(this._buildContextMenuListItem('paste')));
                }                
                menuContainer.append(resizeMenu).append(sortMenu).append(moveMenu);
                menuContainer.ojMenu();
                this._setOption("contextMenu", {menu: menuContainer.attr('id')});
                menuContainer.on("ojbeforeshow", this._handleContextMenuBeforeShow.bind(this));
                menuContainer.on("ojselect", this._handleContextMenuSelect.bind(this));
            }
        }
        else
        {
            menuContainer = $('#'+this.options["contextMenu"]['menu']);
            listItems = menuContainer.find('[data-oj-command]');
            listItems.each(function(){
                var command;
                if ($(this).children('a').length === 0)
                {
                    command = $(this).attr('data-oj-command').split("-");
                    $(this).replaceWith(self._buildContextMenuItem(command[command.length-1]));
                }
            });
            menuContainer.ojMenu('refresh');
            menuContainer.on("ojbeforeshow", this._handleContextMenuBeforeShow.bind(this));
            menuContainer.on("ojselect", this._handleContextMenuSelect.bind(this));
        }
    },
            
    /**
     * Builds a menu for a command, takes care of submenus where appropriate
     * @private	 
     */            
    _buildContextMenuItem: function(command)
    {
        if (command === 'resize')
        {
            return $(this._buildContextMenuListItem('resize')).append($('<ul></ul>').append($(this._buildContextMenuListItem('resizeWidth'))).append($(this._buildContextMenuListItem('resizeHeight'))));
        }
        else if(command === 'sortCol')
        {
            return $(this._buildContextMenuListItem('sortCol')).append($('<ul></ul>').append($(this._buildContextMenuListItem('sortColAsc'))).append($(this._buildContextMenuListItem('sortColDsc'))));
        }
        else if(command === 'sortRow')
        {
            return $(this._buildContextMenuListItem('sortRow')).append($('<ul></ul>').append($(this._buildContextMenuListItem('sortRowAsc'))).append($(this._buildContextMenuListItem('sortRowDsc'))));
        }        
        else if (Object.keys(this.resources.commands).indexOf(command) != -1)
        {
            return $(this._buildContextMenuListItem(command));         
        }
    },
            
    /**
     * Builds a context menu list item from a command
     * @param {string} command the string to look up command value for as well as translation
     * @return {string} an HTML string containing a list item and a  
     * @private	 
     */
    _buildContextMenuListItem: function(command)
    {
        return '<li data-oj-command=' + this._getMappedCommand(command) + '>' + this._buildContextMenuLabel(command) + '</li>';
    },
    /**
     * Builds a context menu label by looking up command translation
     * @param {string} command the string to look up translation for
     * @return {string} an HTML string containing a label  
     * @private	 
     */
    _buildContextMenuLabel: function(command)
    {
        return '<a href="#">' + this._getTranslation(command) + '</a>';
    },        
            
    /**
     * Get the context menu from the grid
     * @return {Element} the context menu element that is set in the options
     * @private	 
     */
    _getContextMenu: function()
    {
        return document.getElementById(this.options["contextMenu"]["menu"]);
    },
    /**
     * Get a translation from the translation resources or one the user set
     * @param {string} key the key of the translation to look up
     * @param {Array|Object|null} args the arguments to pass into the translated string
     * @return {string} the string returned from the resources
     * @private	 
     */
    _getTranslation: function(key, args)
    {        
        return this.getTranslatedString(key, args);
    },
    /**
     * Callback from the resize dialog box, which sends the results to the grid
     * @param {Event} event the event that triggered the dialog button press
     * @private	 
     */
    _handleResizeDialog: function(event)
    {
        var value = $('#' + this.rootId + 'spinner').ojInputNumber("option", "value");
        $('#' + this.rootId + 'dialog').ojDialog('destroy');
        this.grid.handleContextMenuReturn(this.contextMenuEvent, this.menuItemFunction, value);
        this.contextMenuEvent['target'].focus();
    },
    /**
     * Handle an ojselect event on a menu item, if sort call the handler on the core.
     * If resize prompt the user with a dialog box
     * @private	 
     */
    _handleContextMenuSelect: function(event, ui)
    {
        var dialog, spinner, rootId, initialSize, parent;
        
        rootId = $(this.root).attr('id');
        this.menuItemFunction = ui.item.attr('data-oj-command');
        if (this.menuItemFunction === this._getMappedCommand('sortColAsc') || this.menuItemFunction === this._getMappedCommand('sortColDsc')
            || this.menuItemFunction === this._getMappedCommand('cut') || this.menuItemFunction === this._getMappedCommand('paste'))
        {
            this.grid.handleContextMenuReturn(this.contextMenuEvent, this.menuItemFunction, null);
            //this.contextMenuEvent['target'].focus();
        }
        else if (this.menuItemFunction === this._getMappedCommand('resizeWidth') || this.menuItemFunction === this._getMappedCommand('resizeHeight'))
        {
            parent = this._findFirstAncestor($(this.contextMenuEvent['target']), "oj-datagrid-headercell");
            if (parent != null)
            {
                initialSize = this.menuItemFunction === this._getMappedCommand('resizeWidth') ? parent.outerWidth() : parent.outerHeight();
            }
            else
            {
                initialSize = this.menuItemFunction === this._getMappedCommand('resizeWidth') ? $(this.contextMenuEvent['target']).outerWidth() : $(this.contextMenuEvent['target']).outerHeight();
            }
            spinner = $('<input>');
            spinner.attr('id', rootId + 'spinner');
            dialog = $('<div>');
            dialog.attr('id', rootId + 'dialog');
            dialog.append(spinner);
            spinner.ojInputNumber({'value': initialSize, 'max': 250, 'min': 20, 'step': 1});
            dialog.ojDialog({buttons: {OK: this._handleResizeDialog.bind(this)}, title: ui.item.text(), appendTo: this.root});
        }
    },
    /**
     * Handle an ojbeforeshow event on the context menu. Set the position correctly for keyboard events and store the Keyboard/Mouse event that called the context menu
     * @private	 
     */
    _handleContextMenuBeforeShow: function(event, ui)
    {
        var contextMenu, cell, header, capabilities;
        contextMenu = $(this._getContextMenu());

        this.contextMenuEvent = event['originalEvent']['originalEvent'];
        if (this.contextMenuEvent['type'] === 'keydown')
        {
            contextMenu.ojMenu("option", "menuPosition", {"my": "left top", "at": "left bottom", "of": this.contextMenuEvent['target']});
        }
        else
        {
            contextMenu.ojMenu("option", "menuPosition", {"my": "left top", "at": "left bottom"});
        }

        cell = this._findFirstAncestor($(this.contextMenuEvent['target']).eq(0), this._getMappedStyle('cell'));
        if (cell != null)
        {
            capabilities = this._getCellCapability(cell);
        }
        else
        {
            header = this._findFirstAncestor($(this.contextMenuEvent['target']).eq(0), this._getMappedStyle('headercell'));
            capabilities = this._getHeaderCapability(header);
        }

        this._manageContextMenu(capabilities);
    },
    /**
     * Add the disabled class to the menu item with a given command
     * @param {string} command the command to add the diabled attribute to
     * @private	 
     */            
    _addContextMenuCapability: function(command)
    {
        var contextMenu;
        contextMenu = $(this._getContextMenu());
        if (!contextMenu.find("[data-oj-command=" + command + "]").hasClass('oj-disabled'))
        {
            contextMenu.find("[data-oj-command=" + command + "]").addClass('oj-disabled');
        }
    },
    /**
     * Remove the disabled class to the menu item with a given command
     * @param {string} command the command to remove the diabled attribute to
     * @private	 
     */                    
    _removeContextMenuCapability: function(command)
    {
        $(this._getContextMenu()).find("[data-oj-command=" + command + "]").removeClass('oj-disabled');
    },
    /**
     * Based on an object containing the capabilities, add or remove the disable attribute
     * @param {Object} capabilities an object with keys of resizable, sortable
     * @private	 
     */              
    _manageContextMenu: function(capabilities)
    {
        var property, command;
        for (property in capabilities)
        {
            if (capabilities.hasOwnProperty(property))
            {
                command = this.resources.getMappedCommand(property);
                if (capabilities[property] === 'disable')
                {
                    this._addContextMenuCapability(command);
                }
                else
                {
                    this._removeContextMenuCapability(command);
                }
            }
        }
    },
            
    /**
     * Find the first ancestor of an element with a specific class name
     * @param {Object} element the element to find the nearest class name to
     * @param {string} className the class name to look for
     * @return {Object|null} the element with the className, if there is none returns null 
     * @private	 
     */                  
    _findFirstAncestor: function(element, className) {
        var parents;
        if (element.hasClass(className))
        {
            return element;
        }
        parents = element.parents(className);
        if (parents.length != 0)
        {
            return parents.eq(0);
        }
        return null;
    },
    /**
     * Find the index of a cell
     * @param {Object} element the cell to find the index of
     * @return {Object} an object containing rowIndex and columnIndex 
     * @private	 
     */                     
    _findCellIndex: function(element) {
        var row, rowIndex, columnIndex;
        row = element.parent();
        columnIndex = row.children().index(element);
        rowIndex = row.parent().children().index(row) - 1;
        return {'rowIndex': rowIndex, 'columnIndex': columnIndex};
    },
            
    /**
     * Find the headers corresponding to a cell indicies
     * @param {Object} index the index to find the headers at
     * @return {Object} an object containing rowHeader and columnHeader 
     * @private	 
     */                     
    _findHeadersByCellIndex: function(index) {
        var rowHeader, columnHeader;
        rowHeader = this._getRowHeader().children().eq(0).children().eq(index['rowIndex'] + 1);
        columnHeader = this._getColumnHeader().children().eq(0).children().eq(index['columnIndex']);
        return {'rowHeader': rowHeader, 'columnHeader': columnHeader};
    },       
            
    /**
     * @private	 
     */   			
    _getGrid: function()
    {
        return $(this.root);
    },     
	
    /**
     * @private	 
     */   		            
    _getColumnHeader: function() {
        return $('#' + this.rootId + '\\:columnHeader');
    },
	
    /**
     * @private	 
     */   		            
    _getRowHeader: function() {
        return $('#' + this.rootId + '\\:rowHeader');
    },
	
    /**
     * @private	 
     */   		            
    _getDatabody: function() {
        return $('#' + this.rootId + '\\:databody');
    },
            
    /**
     * @private	 
     */   		            
    _getDatabodyRows: function() {
        return $('#' + this.rootId + '\\:databody .'+ this._getMappedStyle('row'));
    },            
    
	/**
     * @private	 
     */   		
    _getCellCapability: function(cell) {
        var index, headers, capabilities, rowHeader, columnHeader;
        index = this._findCellIndex(cell);
        headers = this._findHeadersByCellIndex(index);
        capabilities = {resizeWidth: 'disable', resizeHeight: 'disable', sortRow: 'disable', sortCol: 'disable'};
        rowHeader = headers['rowHeader'];
        columnHeader = headers['columnHeader'];
        if (columnHeader.length !== 0)
        {
            if (columnHeader.attr(this._getMappedAttribute('resizable')) === 'true')
            {
                capabilities['resizeWidth'] = 'enable';
            }
            if (columnHeader.attr(this._getMappedAttribute('sortable')) === 'true')
            {
                capabilities['sortCol'] = 'enable';
            }
        }
        if (rowHeader.length !== 0)
        {
            if (rowHeader.attr(this._getMappedAttribute('resizable')) === 'true')
            {
                capabilities['resizeHeight'] = 'enable';
            }
            if (rowHeader.attr(this._getMappedAttribute('sortable')) === 'true')
            {
                capabilities['sortRow'] = 'enable';
            }
        }
        return capabilities;
    },

    /**
     * @private	 
     */   			
    _getHeaderCapability: function(header) {
        var capabilities;
        capabilities = {resizeWidth: 'disable', resizeHeight: 'disable', sortRow: 'disable', sortCol: 'disable'};
        if (header !== null)
        {
            if (header.hasClass(this._getMappedStyle('colheadercell')))
            {
                if (header.attr(this._getMappedAttribute('resizable')) === 'true')
                {
                    capabilities['resizeWidth'] = 'enable';
                }
                capabilities['resizeHeight'] = this._isResizeEnabled('column', 'height') ? 'enable' : 'disable';
                if (header.attr(this._getMappedAttribute('sortable')) === 'true')
                {
                    capabilities['sortCol'] = 'enable';
                }
            }
            else
            {
                if (header.attr(this._getMappedAttribute('resizable')) === 'true')
                {
                    capabilities['resizeHeight'] = 'enable';
                }
                capabilities['resizeWidth'] = this._isResizeEnabled('row', 'width') ? 'enable' : 'disable';
                if (header.attr(this._getMappedAttribute('sortable')) === 'true')
                {
                    capabilities['sortRow'] = 'enable';
                }
            }
        }
        return capabilities;
    },

    /**
     * @private	 
     */   			
    _setDataSource: function()
    {
        if (this.options['data'] != null)
        {
			this.datasource = this.options['data'];
        }
        else
        {
            this.datasource = null;
        }
    },
       
    /**
     * Modify the header and cell context before passing to the renderer.
     * @param {Object} context the header or cell context.
     * @private
     */
    _modifyContext: function(context)
    {
        context['component'] = this;
    },
    /**
     * Register a row expander widget.
     * @param {Object} rowExpander the row expander widget.
     * @private
     */
    _registerRowExpander: function(rowExpander)
    {
        var self = this;
        if (self.grid != null && rowExpander != null)
        {
            // the datagrid should update internal state for screenreader
            self.grid.registerRowExpander(rowExpander.element[0]);
        }
    },

    /**
     * If no arguments are passed in, gets the current selections in the Grid. 
     * Returns an empty array if there's no selection. Returns "all" if everything 
     * is selected. Returns an array of range objects for all other cases.
     * 
     * <p> If argument passed in, sets the current selections in the Grid
     *      
     * 
     * @expose 
     * @memberof! oj.ojDataGrid
     * @instance
     * @param {Array.<Object>=} ranges optional, an array of selection objects
     * 
     * @example <caption>Get the current selection:</caption>
     * $( ".selector" ).ojDataGrid( "selection" );
     * 
     * @example <caption>Set a row selection on the grid:</caption>
     * $(".selector").ojDataGrid("selection", [{startIndex: "row":1}, endIndex:{"row":3}}]);
     * 
     * @example <caption>Set a cell selection on the grid:</caption>
     * $(".selector").ojDataGrid("selection", [{start: {"row":1, "column":2}, end: {"row":3, "column":4}}]);
     */
    selection: function(ranges)
    {
        if (ranges === undefined)
        {
            return this.grid.GetSelection();
        }
        this.grid.SetSelection(ranges);
    },
            
    /**
     * @expose
     * Return the subcomponent node represented by the documented locator attribute values.
     * 
     * To lookup a cell the locator object should have the following:
     *          subId: 'oj-datagrid-cell'
     *          rowIndex: number
     *          columnIndex: number
     *          
     * To lookup a header the locator object should have the following:
     *          subId: 'oj-datagrid-header'
     *          axis: 'column'/'row'
     *          index: number      
     *          
     * To lookup a sort icon the locator object should have the following:
     *          subId: 'oj-datagrid-sort-ascending'/'oj-datagrid-sort-descending'
     *          axis: 'column'/'row'
     *          index: number                
     * 
     * @override
     * @param {Object} locator An Object containing at minimum a subId property whose value is a string
     * 
     */
    getNodeBySubId: function(locator)
    {
        var subId, className, rowIndex,columnIndex, index, axis;
        if (locator == null)
        {
          return this.element ? this.element[0] : null;
        }

        subId = locator['subId'];
        switch (subId)
        {
            case 'oj-datagrid-cell':
                className = this._getMappedStyle('cell');
                break;
            case'oj-datagrid-header':
                className = this._getMappedStyle('headercell');                
                break;
            case 'oj-datagrid-sort-ascending':
                className = 'oj-datagrid-sort-ascending-icon';                                
                break;
            case 'oj-datagrid-sort-descending':
                className = 'oj-datagrid-sort-descending-icon';                                
                break;
            default:
                return null;
        }
        
        if (subId === 'oj-datagrid-cell')
        {
            rowIndex = locator['rowIndex'];
            columnIndex = locator['columnIndex'];
            return this._getDatabodyRows().eq(rowIndex).children().eq(columnIndex);
        }
        else
        {
            axis = locator['axis'];
            index = locator['index'];
            if (axis === 'column')
            {
                return $('#' + this.rootId + '\\:columnHeader .' + className).eq(index);
            }
            else if (axis === 'row')
            {
                return $('#' + this.rootId + '\\:rowHeader .' + className).eq(index);
            }
        }

        // Non-null locators have to be handled by the component subclasses
        return null;
    },              
          
    /**
     * Get the mapped style from the resources
	 * @private
     */
    _getMappedStyle: function(key)
    {
        return this.resources.getMappedStyle(key);
    },
            
    /**
     * Get the mapped attribute from the resources
	 * @private
     */
    _getMappedAttribute: function(key)
    {
        return this.resources.getMappedAttribute(key);
    },
            
    /**
     * Get the mapped command from the resources
	 * @private
     */
    _getMappedCommand: function(key)
    {
        return this.resources.getMappedCommand(key);
    }             
});

/**
 * A CellSet represents a collection of cells.  The CellSet is an object returned by the success callback
 * of the fetchCells method on DataGridDataSource.  The FlattenedTreeCellSet is a FlattenedDataGridDataSource specific 
 * implementation of methods on CellSet. 
 * @param {number} startRow the start row index of the cell set
 * @param {number} endRow the end row index of the cell set
 * @param {number} startColumn the start column index of the cell set
 * @param {number} endColumn the end column index of the cell set
 * @param {Object} nodeSet the node set in which this cell set wraps around
 * @param {Array|null} columns the set of column keys
 * @constructor
 * @export
 */
oj.FlattenedTreeCellSet = function(startRow, endRow, startColumn, endColumn, nodeSet, columns)
{
    // assert startRow/startColumn are number
    oj.Assert.assertNumber(startRow, null);
    oj.Assert.assertNumber(endRow, null);
    oj.Assert.assertNumber(startColumn, null);
    oj.Assert.assertNumber(endColumn, null);
    oj.Assert.assertArrayOrNull(columns);

    this.m_startRow = startRow;
    this.m_endRow = endRow;
    this.m_startColumn = startColumn;
    this.m_endColumn = endColumn;
    this.m_nodeSet = nodeSet;
    this.m_columns = columns;
};

/**
 * Gets the data of the specified index.  An error is throw when 1) the range is not yet available 
 * 2) the index specified is out of bounds. 
 * @param {Object} indexes the index of each axis in which we want to retrieve the data from.  
 * @param {number} indexes.row the index of the row axis.
 * @param {number} indexes.column the index of the column axis.
 * @return {Object} the data object for the specified index.
 * @export
 */
oj.FlattenedTreeCellSet.prototype.getData = function(indexes)
{
    var relIndex, row, column, columnKey, rowData;

    // convert to relative index
    relIndex = this._getRelIndexes(indexes);
    if (relIndex == null)
    {
        return null;
    }

    row = relIndex[0];
    column = relIndex[1];

    // make sure index are valid
    oj.Assert.assert(row < this.m_nodeSet.getStart()+this.m_nodeSet.getCount() && column < this.m_columns.length);

    columnKey = this.m_columns[column];
    rowData = this.m_nodeSet.getData(row);
    if (rowData != null)
    {
        if (rowData.get)
        {
            return rowData.get(columnKey);
        }
        else
        {
            return rowData[columnKey];
        }
    }
    return null;
};

/**
 * Gets the metadata of the specified index.  An error is throw when 1) the range is not yet available 
 * 2) the index specified is out of bounds. 
 * @param {Object} indexes the index of each axis in which we want to retrieve the metadata from.  
 * @param {number} indexes.row the index of the row axis.
 * @param {number} indexes.column the index of the column axis.
 * @return the metadata object for the specific index.  The metadata that the DataGrid supports are: 
 *         1) keys - the key (of each axis) of the cell.
 * @export
 */
oj.FlattenedTreeCellSet.prototype.getMetadata = function(indexes)
{
    var relIndex, row, column, columnKey, metadata, rowKey;

    // convert to relative index
    relIndex = this._getRelIndexes(indexes);
    if (relIndex == null)
    {
        return null;
    }

    row = relIndex[0];
    column = relIndex[1];

    // make sure index are valid
    oj.Assert.assert(row < this.m_nodeSet.getStart()+this.m_nodeSet.getCount() && column < this.m_columns.length);

    columnKey = this.m_columns[column];

    metadata = this.m_nodeSet.getMetadata(row);
    rowKey = metadata['key'];

    metadata['keys'] = {"row": rowKey, "column": columnKey};

    return metadata;
};

/**
 * Helper method to validate and retrieve the relative indexes.
 * @param {Object} indexes the row and column index
 * @param {number} indexes.row the index of the row axis.
 * @param {number} indexes.column the index of the column axis.
 * @return {Object.<number, number>} the relative indexes
 * @private
 */
oj.FlattenedTreeCellSet.prototype._getRelIndexes = function(indexes)
{
    var row, column;

    oj.Assert.assertObject(indexes);

    if (this.m_nodeSet == null || this.m_nodeSet.length == 0)
    {
        return null;
    }

    // map to the index in nodeSet
    row = indexes['row'] - this.m_startRow + this.m_nodeSet.getStart();
    column = indexes['column'];

    // make sure index are valid
    oj.Assert.assertNumber(row, null);
    oj.Assert.assertNumber(column, null);
    oj.Assert.assert(row >= 0 && column >= 0); 

    return [row, column];
};

/**
 * Gets the start index of the result set for the specified axis.
 * @param {string} axis the axis in which to inquire the actual count of the result set.  
 *        Valid values are "row" and "column".
 * @return {number} the start of the index of the result set for the specified axis.  
 * @export
 */
oj.FlattenedTreeCellSet.prototype.getStart = function(axis)
{
    if (axis === "row")
    {
        return this.m_startRow;
    }

    if (axis === "column")
    {
        return this.m_startColumn;
    }

    return 0;
};

/**
 * Gets the actual count of the result set for the specified axis. 
 * @param {string} axis the axis in which to inquire the actual count of the result set.  
 *        Valid values are "row" and "column".
 * @return {number} the actual count of the result set for the specified axis.  
 * @export
 */
oj.FlattenedTreeCellSet.prototype.getCount = function(axis)
{
    if (axis === "row")
    {
        return Math.min(this.m_endRow - this.m_startRow, this.m_nodeSet.getCount());
    }
    
    if (axis === "column")
    {
        return this.m_endColumn - this.m_startColumn;
    }

    return 0;
};
/**
 * A HeaderSet represents a collection of headers.  The HeaderSet is an object returned by the success callback
 * of the fetchHeaders method on DataGridDataSource.  This is an OJ collection specific implementation of the HeaderSet.
 * @param {number} start the start index of header set.
 * @param {number} end the end index of the header set.
 * @param {Array} headers the array of headers.  Required for column headers.
 * @param {Object=} nodeSet the node set containing data about the row header.  Required for row headers.
 * @param {string=} rowHeader the id of the row header column.  Required for row headers.
 * @constructor
 * @export
 */
oj.FlattenedTreeHeaderSet = function(start, end, headers, nodeSet, rowHeader)
{
    // assert start/end are number
    oj.Assert.assertNumber(start, null);
    oj.Assert.assertNumber(end, null);
    oj.Assert.assertArrayOrNull(headers);

    this.m_start = start;
    this.m_end = end;
    this.m_headers = headers;
    this.m_nodeSet = nodeSet;
    this.m_rowHeader = rowHeader;
};

/**
 * Gets the data of the specified index.  An error is throw when 1) the range is not yet available and
 * 2) the index specified is out of bounds. 
 * @param {number} index the index of the header in which we want to retrieve the header from.  
 * @return {Object} the data object for the specific index.
 * @export
 */
oj.FlattenedTreeHeaderSet.prototype.getData = function(index)
{
    var rowData;

    // make sure index are valid
    oj.Assert.assert(index <= this.m_end && index >= this.m_start); 

    // row or column header
    if (this.m_rowHeader != null && this.m_nodeSet != null)
    {
        rowData = this.m_nodeSet.getData(index);
        if (rowData != null)
            return rowData.get(this.m_rowHeader);
        else
            return null;
    }
    else
    {
        return this.m_headers[index];
    }
};

/**
 * Gets the metadata of the specified index.  An error is throw when 1) the range is not yet available and 
 * 2) the index specified is out of bounds. 
 * The metadata that the data source can optionally return are:
 *  1) sortDirection - the initial sort direction of the header.  Valid values are "ascending" and "descending".
 *  2) key - the key of the row/column header.
 * @param {number} index the index of the header in which we want to retrieve the metadata from.  
 * @return {Object} the metadata object for the specific index.
 * @export
 */
oj.FlattenedTreeHeaderSet.prototype.getMetadata = function(index)
{
    var data;

    if (this.m_rowHeader != null && this.m_nodeSet != null)
    {
        return this.m_nodeSet.getMetadata(index);
    }
    else
    {
        data = this.getData(index);
        return {'key': data};
    }
};

/**
 * Gets the actual count of the result set.
 * @return {number} the actual count of the result set.  
 * @export
 */
oj.FlattenedTreeHeaderSet.prototype.getCount = function()
{
    if (this.m_rowHeader != null && this.m_nodeSet != null)
    {
        return Math.min(this.m_nodeSet.getCount(), this.m_end - this.m_start);
    }
    else
    {
        return Math.max(0, this.m_end - this.m_start);
    }
};
/**
 * A CellSet represents a collection of cells.  The CellSet is an object returned by the success callback
 * of the fetchCells method on DataGridDataSource.  This implementation of CellSet is used by the
 * array DataGridDataSource.   
 * @param {number} startRow the start row index of the cell set
 * @param {number} endRow the end row index of the cell set
 * @param {number} startColumn the start column index of the cell set
 * @param {number} endColumn the end column index of the cell set
 * @param {Object} callback the callback to invoke on to retrieve data and metadata. 
 * @constructor
 * @export
 */
oj.ArrayCellSet = function(startRow, endRow, startColumn, endColumn, callback)
{
    // assert startRow/startColumn are number
    oj.Assert.assertNumber(startRow, null);
    oj.Assert.assertNumber(endRow, null);
    oj.Assert.assertNumber(startColumn, null);
    oj.Assert.assertNumber(endColumn, null);

    this.m_startRow = startRow;
    this.m_endRow = endRow;
    this.m_startColumn = startColumn;
    this.m_endColumn = endColumn;
    this.m_callback = callback;
};

/**
 * Gets the data of the specified index.  An error is throw when 1) the range is not yet available 
 * 2) the index specified is out of bounds. 
 * @param {Object} indexes the index of each axis in which we want to retrieve the data from.  
 * @param {number} indexes.row the index of the row axis.
 * @param {number} indexes.column the index of the column axis.
 * @return {Object} the data object for the specified index.
 * @export
 */
oj.ArrayCellSet.prototype.getData = function(indexes)
{
    return this.m_callback.getCellData(indexes['row'], indexes['column']);
};

/**
 * Gets the metadata of the specified index.  An error is throw when 1) the range is not yet available 
 * 2) the index specified is out of bounds. 
 * @param {Object} indexes the index of each axis in which we want to retrieve the metadata from.  
 * @param {number} indexes.row the index of the row axis.
 * @param {number} indexes.column the index of the column axis.
 * @return the metadata object for the specific index.  The metadata that the DataGrid supports are: 
 *         1) keys - the key (of each axis) of the cell.
 * @export
 */
oj.ArrayCellSet.prototype.getMetadata = function(indexes)
{
    return this.m_callback.getCellMetadata(indexes['row'], indexes['column']);
};

/**
 * Gets the start index of the result set for the specified axis.  Valid values are "row" and "column".
 * @param {string} axis the axis in which to inquire the actual count of the result set.
 * @return {number} the start index of the result set for the specified axis.  
 * @export
 */
oj.ArrayCellSet.prototype.getStart = function(axis)
{
    if (axis == "row")
    {
        return this.m_startRow;
    }
    else if (axis == "column")
    {
        return this.m_startColumn;
    }

    return -1;
};

/**
 * Gets the actual count of the result set for the specified axis.  Valid values are "row" and "column".
 * @param {string} axis the axis in which to inquire the actual count of the result set.
 * @return {number} the actual count of the result set for the specified axis.  
 * @export
 */
oj.ArrayCellSet.prototype.getCount = function(axis)
{
    if (axis === "row")
    {
        return Math.max(0, this.m_endRow - this.m_startRow);
    }
    
    if (axis === "column")
    {
        return Math.max(0, this.m_endColumn - this.m_startColumn);
    }

    return 0;
};

////// testing methods to get properties //////
/**
 * Gets the start row property
 * @export
 */
oj.ArrayCellSet.prototype.getStartRow = function()
{
    return this.m_startRow;
};

/**
 * Gets the start column property
 * @export
 */
oj.ArrayCellSet.prototype.getStartColumn = function()
{
    return this.m_startColumn;
};
/**
 * The DataGrid specific implementation of the FlattenedTreeDataSource class.
 * @param {Object} treeDataSource the instance of TreeDataSource to flattened
 * @param {Object=} options the options set on this data source.  See documentation for a list
 *        of supported options.
 * @constructor
 * @export
 */
oj.FlattenedTreeDataGridDataSource = function(treeDataSource, options)
{
    oj.FlattenedTreeDataGridDataSource.superclass.constructor.call(this, treeDataSource, options);
};

// Subclass from oj.FlattenedTreeDataSource
oj.Object.createSubclass(oj.FlattenedTreeDataGridDataSource, oj.FlattenedTreeDataSource, "oj.FlattenedTreeDataGridDataSource");

/**
 * Initializes the data source.
 * @export
 */
oj.FlattenedTreeDataGridDataSource.prototype.Init = function()
{
    oj.FlattenedTreeDataGridDataSource.superclass.Init.call(this);

    this.m_columns = oj.FlattenedTreeDataGridDataSource.superclass.getOption.call(this, 'columns');
    this.m_rowHeader = oj.FlattenedTreeDataGridDataSource.superclass.getOption.call(this, 'rowHeader');
};

/**
 * Returns whether the total count returned in getCount function is an actual or an estimate.
 * @param {string} axis the axis in which we inquire whether the total count is an estimate.  Valid values are 
 *        "row" and "column".
 * @return {string} "exact" if the count returned in getCount function is the actual count, "estimate" if the 
 *         count returned in getCount function is an estimate.  The default value is "exact".
 * @export
 */
oj.FlattenedTreeDataGridDataSource.prototype.getCountPrecision = function(axis)
{
    // always returns estimate row count to ensure high watermark scrolling is used.
    if (axis === "row")
    {
        return "estimate";
    }

    return "actual";
};

/**
 * Returns the total number of rows or columns.  If the value return is not >= 0 then it is automatically assumed
 * that the total count is unknown.
 * @param {string} axis the axis in which we inquire for the total count.  Valid values are "row" and "column".
 * @return {number} the total number of rows/columns.
 * @export
 */
oj.FlattenedTreeDataGridDataSource.prototype.getCount = function(axis)
{
    // always returns -1 to ensure high watermark scrolling is used.
    if (axis === "row")
    {
        return -1;
    }

    if (axis === "column")
    {
        return this.m_columns.length;
    }

    return 0;
};

/**
 * Fetch a range of headers from the data source.
 * @param {Object} headerRange information about the header range, it must contain the following properties:
 *        axis, start, count.
 * @param {string} headerRange.axis the axis of the header that are fetched.  Valid values are "row" and "column".
 * @param {number} headerRange.start the start index of the range in which the header data are fetched.
 * @param {number} headerRange.count the size of the range in which the header data are fetched.  
 * @param {Object} callbacks the callbacks to be invoke when fetch headers operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(oj.HeaderSet)} callbacks.success the callback to invoke when fetch headers completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch cells failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" keys.
 * @export
 */
oj.FlattenedTreeDataGridDataSource.prototype.fetchHeaders = function(headerRange, callbacks, callbackObjects)
{
    var axis, headerSet;

    axis = headerRange['axis'];
    if (axis === "column")
    {
        headerSet = new oj.FlattenedTreeHeaderSet(headerRange['start'], headerRange['start']+headerRange['count'], this.m_columns);
    }
    else if (axis === "row")
    {
        if (this.m_rowHeader != null)
        {
            // assumes that a fetch header request is immediately followed by a fetch cells request
            // avoid doing two fetch requests for the same set of data, wait until fetch cells request is available
            // before handling the header request
            // since the two fetches are converge on fetchCell, the range should always be in sync
            this.m_fetchHeaderRequest = {'range': headerRange, 'callbacks': callbacks, 'callbackObjects': callbackObjects};
            return;
        }
        else
        {
            // no row header, return empty result set
            headerSet = new oj.ArrayHeaderSet(headerRange['start'], headerRange['start'], axis, null);
        }
    }

    if (headerSet != null)
    {
        if (callbacks != null && callbacks['success'] != null)
        {
            // todo: get rid of callbackObjects
            if (callbackObjects == null)
            {
                callbackObjects = {};
            }	            
            callbacks['success'].call(callbackObjects['success'], headerSet, headerRange);
        }
    }
};

/**
 * Fetch a range of cells from the data source.
 * @param {Array.<Object>} cellRanges Information about the cell range.  A cell range is defined by an array 
 *        of range info for each axis, where each range contains three properties: axis, start, count.
 * @param {string} cellRanges.axis the axis associated with this range where cells are fetched.  Valid 
 *        values are "row" and "column".
 * @param {number} cellRanges.start the start index of the range for this axis in which the cells are fetched.
 * @param {number} cellRanges.count the size of the range for this axis in which the cells are fetched. 
 * @param {Object} callbacks the callbacks to be invoke when fetch cells operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(oj.CellSet)} callbacks.success the callback to invoke when fetch cells completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch cells failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" keys.
 * @export
 */
oj.FlattenedTreeDataGridDataSource.prototype.fetchCells = function(cellRanges, callbacks, callbackObjects)
{
    var i, cellRange, rowStart, rowCount;

    // extract row range information needed to make the fetchRows call
    for (i=0; i<cellRanges.length; i++)
    {
        cellRange = cellRanges[i];   
        if (cellRange['axis'] == "row")
        {
            rowStart = cellRange['start'];
            rowCount = cellRange['count'];
            break;
        }
    }

    oj.FlattenedTreeDataGridDataSource.superclass.fetchRows.call(this, {'start': rowStart, 'count': rowCount}, {"success": function(nodeSet){this._handleFetchRowsSuccess(nodeSet, cellRanges, callbacks, callbackObjects, 0);}.bind(this), "error": function(status){this._handleFetchRowsError(status, {'start': rowStart, 'count': rowCount}, callbacks, callbackObjects);}.bind(this)}); 
};

/**
 * Returns the keys based on the indexes. 
 * @param {Object} indexes the index for each axis
 * @param {Object} indexes.row the index for the row axis
 * @param {Object} indexes.column the index for the column axis
 * @return {Object.<Object, Object>} an object containing the keys for each axis
 * @export
 */
oj.FlattenedTreeDataGridDataSource.prototype.keys = function(indexes)
{
    var rowIndex, colIndex, rowKey, colKey;

    rowIndex = indexes['row'];
    colIndex = indexes['column'];

    // if it hasn't been fetched yet or invalid column index, return null
    if (rowIndex > oj.FlattenedTreeDataGridDataSource.superclass.getFetchedRange.call(this)['end'] || colIndex > this.m_columns.length)
        return null;

    rowKey = oj.FlattenedTreeDataGridDataSource.superclass.getKey.call(this, rowIndex);
    colKey = this.m_columns[colIndex];

    return {"row": rowKey, "column": colKey};
};

/**
 * Returns the row and column index based on the keys.
 * @param {Object} keys the key for each axis
 * @param {Object} keys.row the key for the row axis
 * @param {Object} keys.column the key for the column axis
 * @return {Object.<number, number>} indexes an object containing the index for each axis. 
 *         Return null if the indexes cannot be found.
 * @export
 */
oj.FlattenedTreeDataGridDataSource.prototype.indexes = function(keys)
{
    var rowIndex, colIndex, rowKey, colKey, i;

    rowKey = keys['row'];
    colKey = keys['column'];

    // call helper method to find the flattened index
    rowIndex = oj.FlattenedTreeDataGridDataSource.superclass.getIndex.call(this, rowKey);
    // for column index, just search through the column keys array
    for (i=0; i<this.m_columns.length; i++)
    {
        if (this.m_columns[i] === colKey)
        {
            colIndex = i;
            break;
        }
    }

    // make sure the indexes are valid
    if (rowIndex >= 0 && colIndex >= 0)
    {
        return {"row": rowIndex, "column": colIndex};
    }

    // can't find it
    return null;
};

/**
 * Performs a sort on the data source.
 * @param {Object} criteria the sort criteria. 
 * @param {string} criteria.axis The axis in which the sort is performed, valid values are "row", "column"
 * @param {Object} criteria.key The key that identifies which header to sort
 * @param {string} criteria.direction the sort direction, valid values are "ascending", "descending", "none" (default)
 * @param {Object} callbacks the callbacks to be invoke upon completion of the sort operation.  The callback
 *        properties are "success" and "error".
 * @param {function()} callbacks.success the callback to invoke when the sort completed successfully.  
 * @param {function({status: Object})} callbacks.error the callback to invoke when sort failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" properties.
 * @export
 */
oj.FlattenedTreeDataGridDataSource.prototype.sort = function(criteria, callbacks, callbackObjects)
{
    var dataSource = oj.FlattenedTreeDataGridDataSource.superclass.getWrappedDataSource.call(this);

    // delegates to the underlying TreeDataSource but intercept the success callback so that we can clear the cache
    return dataSource.sort(criteria, {"success": function(){this._handleSortSuccess(callbacks, callbackObjects);}.bind(this), "error": callbacks['error']});
};

/**
 * Handles sort success callback.
 * @param {Object} callbacks the original callbacks for the sort operation
 * @param {Object} callbackObjects the original callbackObjects for the sort operation
 * @private
 */
oj.FlattenedTreeDataGridDataSource.prototype._handleSortSuccess = function(callbacks, callbackObjects)
{
    // reset state
    this.refresh();

    // invoke original sort success callback
    if (callbacks['success'])
    {
        // todo: get rid of callbackObjects
        if (callbackObjects == null)
        {
            callbackObjects = {};
        }	            
        callbacks['success'].call(callbackObjects['success']);
    }
};

/**
 * Determines whether this DataGridDataSource supports certain feature.
 * @param {string} feature the feature in which its capabilities is inquired.  Currently the only valid feature is "sort".
 * @return {string|null} the name of the feature.  For "sort", the valid return values are: "full", "none", "row", "column".  
 *         Returns null if the feature is not recognized.
 * @export
 */
oj.FlattenedTreeDataGridDataSource.prototype.getCapability = function(feature)
{
    var dataSource = oj.FlattenedTreeDataGridDataSource.superclass.getWrappedDataSource.call(this);

    // just delegates to the underlying TreeDataSource
    return dataSource.getCapability(feature);
};

/**
 * A hook for FlattenedTreeDataSource to inject additional metadata into the NodeSet
 * @param {Object} key the row key identifying the row
 * @param {Object} metadata the existing metadata to inject into
 * @protected
 */
oj.FlattenedTreeDataGridDataSource.prototype.insertMetadata = function(key, metadata)
{
    // just call super
    oj.FlattenedTreeDataGridDataSource.superclass.insertMetadata.call(this, key, metadata);
};

/**
 * Callback method to handle success callback for fetchRows operation on FlattenedTreeDataSource.
 * @param {Object} nodeSet the result node set from the fetchRows called.
 * @param {Array.<Object>} cellRanges Information about the cell range.  A cell range is defined by an array 
 *        of range info for each axis, where each range contains three properties: axis, start, count.
 * @param {string} cellRanges.axis the axis associated with this range where cells are fetched.  Valid 
 *        values are "row" and "column".
 * @param {number} cellRanges.start the start index of the range for this axis in which the cells are fetched.
 * @param {number} cellRanges.count the size of the range for this axis in which the cells are fetched. 
 * @param {Object} callbacks the callbacks to be invoke when fetch cells operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(oj.CellSet)} callbacks.success the callback to invoke when fetch cells completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch cells failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" keys.
 * @private
 */
oj.FlattenedTreeDataGridDataSource.prototype._handleFetchRowsSuccess = function(nodeSet, cellRanges, callbacks, callbackObjects)
{
    var i, cellRange, rowStart, rowCount, columnStart, columnCount, headerRange, cellSet;

    // extract range information
    for (i=0; i<cellRanges.length; i++)
    {
        cellRange = cellRanges[i];   
        if (cellRange['axis'] == "row")
        {
            rowStart = cellRange['start'];
            rowCount = cellRange['count'];
        }
        else if (cellRange['axis'] == "column")
        {
            columnStart = cellRange['start'];
            columnCount = cellRange['count'];
        }
    }

    // checks whether there is an outstanding fetch header request with the same range
    if (this.m_fetchHeaderRequest)
    {
        headerRange = this.m_fetchHeaderRequest['range'];
        if (headerRange['start'] == rowStart && headerRange['count'] == rowCount)
        {
            // handle row header request
            this._handleRowHeaderFetchSuccess(nodeSet, headerRange, this.m_fetchHeaderRequest['callbacks'], this.m_fetchHeaderRequest['callbackObjects']);
        }
        this.m_fetchHeaderRequest = null;
    }

    // create wrapper
    cellSet = new oj.FlattenedTreeCellSet(rowStart, rowStart+rowCount, columnStart, columnStart+columnCount, nodeSet, this.m_columns);
    // invoke success callback
    if (callbacks['success'])
    {
        // todo: get rid of callbackObjects
        if (callbackObjects == null)
        {
            callbackObjects = {};
        }            
        callbacks["success"].call(callbackObjects['success'], cellSet, cellRanges);
    }
};

/**
 * Callback method to handle error callback for fetchRows operation on FlattenedTreeDataSource.
 * @param {Object} status the error status.
 * @param {Object} range Information about the row range.  
 * @param {Object} callbacks the callbacks to be invoke when fetch cells operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(oj.CellSet)} callbacks.success the callback to invoke when fetch cells completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch cells failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" keys.
 * @private
 */
oj.FlattenedTreeDataGridDataSource.prototype._handleFetchRowsError = function(status, range, callbacks, callbackObjects)
{
    var headerRange, headerCallbacks, headerCallbackObjects;

    // checks whether there is an outstanding fetch header request with the same range
    if (this.m_fetchHeaderRequest)
    {
        headerRange = this.m_fetchHeaderRequest['range'];
        if (headerRange['start'] == range['start'] && headerRange['count'] == range['count'])
        {
            // invoke error callback on fetch header
            headerCallbacks = this.m_fetchHeaderRequest['callbacks'];
            headerCallbackObjects = this.m_fetchHeaderRequest['callbackObjects'];

            if (headerCallbacks['error'])
            {
                // todo: get rid of callbackObjects
                if (headerCallbackObjects == null)
                {
                    headerCallbackObjects = {};
                }            
                headerCallbacks['error'].call(headerCallbackObjects['error'], status);
            }
        }
        this.m_fetchHeaderRequest = null;
    }

    // invoke error callback
    if (callbacks['error'])
    {
        // todo: get rid of callbackObjects
        if (callbackObjects == null)
        {
            callbackObjects = {};
        }            
        callbacks["success"].call(callbackObjects['error'], status);
    }
};

/**
 * Handles header fetch success request based on results from fetch cell operation.
 * @param {Object} nodeSet the result node set from the fetchRows called.
 * @param {Object} headerRange information about the header range, it must contain the following properties:
 *        axis, start, count.
 * @param {string} headerRange.axis the axis of the header that are fetched.  Valid values are "row" and "column".
 * @param {number} headerRange.start the start index of the range in which the header data are fetched.
 * @param {number} headerRange.count the size of the range in which the header data are fetched.  
 * @param {Object} callbacks the callbacks to be invoke when fetch headers operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(oj.HeaderSet)} callbacks.success the callback to invoke when fetch headers completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch cells failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" keys.
 * @private
 */
oj.FlattenedTreeDataGridDataSource.prototype._handleRowHeaderFetchSuccess = function(nodeSet, headerRange, callbacks, callbackObjects)
{
    // create wrapper
    var headerSet = new oj.FlattenedTreeHeaderSet(headerRange['start'], headerRange['start']+headerRange['count'], this.m_columns, nodeSet, this.m_rowHeader);
    // invoke success callback
    if (callbacks['success'])
    {
        // todo: get rid of callbackObjects
        if (callbackObjects == null)
        {
            callbackObjects = {};
        }            
        callbacks['success'].call(callbackObjects['success'], headerSet, headerRange);
    }
};

/**
 * Implementation of abstract method to insert a set of rows into the DataGrid
 * @param {number} insertAtIndex the flattened index of the node where the rows are inserted.
 * @param {Object} insertAtRowKey the key of the node where the rows are inserted (the parent key)
 * @param {Object} nodeSet the node set containing data/metadata of inserted rows
 * @protected
 */
oj.FlattenedTreeDataGridDataSource.prototype.insertRows = function(insertAtIndex, insertAtRowKey, nodeSet)
{
    var cellSet, event;

    // create a CellSet that wraps around a RowSet 
    cellSet = new oj.FlattenedTreeCellSet(insertAtIndex, insertAtIndex+nodeSet.getCount(), 0, this.m_columns.length, nodeSet, this.m_columns);

    // construct model insert event with a set of rows to insert
    event = {};
    event['source'] = this;
    event['operation'] = 'insert';
    event['result'] = cellSet;
    event['keys'] = {"row": insertAtRowKey};

    oj.FlattenedTreeDataGridDataSource.superclass.handleEvent.call(this, "change", event);
};

/**
 * Implementation of bstract method to remove the specified rows in the DataGrid
 * @param {Array.<Object>} rowKeys an array of keys of the rows to be remove.
 * @protected
 */
oj.FlattenedTreeDataGridDataSource.prototype.removeRows = function(rowKeys)
{
    // construct model delete event with a set of row keys to delete
    var event = {};
    event['source'] = this;
    event['operation'] = 'delete';
    event['keys'] = rowKeys;

    oj.FlattenedTreeDataGridDataSource.superclass.handleEvent.call(this, "change", event);
};

/**
 * Handles the case when the maximum number of rows have been reached
 * @param {Object} range the range of the fetch request that cause the max count to be reached
 * @param {number} range.start the start index of the range
 * @param {number} range.count the count of the range
 * @protected
 */
oj.FlattenedTreeDataGridDataSource.prototype.handleMaxCountReached = function(range, callbacks)
{
    var empty = new oj.EmptyNodeSet(null, range['start']);
    callbacks["success"].call(null, empty);
};
/*jslint browser: true,devel:true*/
/**
 * @export
 * @class oj.PagingDataGridDataSource
 * @classdesc Object representing data used by the paging component
 * @param {oj.DataGridDataSource|null} dataSource
 * @param {Object|null} options Array of options for the PagingControlDataSource
 * @extends oj.PagingDataSource
 * @constructor
 */
oj.PagingDataGridDataSource = function(dataSource, options) 
{
    // Initialize
    if (!(dataSource instanceof oj.CollectionDataGridDataSource))
    {
        // we only support Array, oj.Collection, or ko.observableArray. To
        // check for observableArray, we can't do instanceof check because it's
        // a function. So we just check if it contains a subscribe function.
        throw new oj.Message('Not a datagridatasource', 'Not a datagridatasource', oj.Message.SEVERITY_LEVEL['ERROR']);
    }
    this.dataSource = dataSource;
    this._startIndex = 0;
    this.Init();
};

// Subclass from oj.DataSource 
oj.Object.createSubclass(oj.PagingDataGridDataSource, oj.PagingDataSource, "oj.PagingDataGridDataSource");

/**
 * Initializes the instance.
 * @export
 */
oj.PagingDataGridDataSource.prototype.Init = function()
{
    oj.PagingDataGridDataSource.superclass.Init.call(this);
};

/**
 * Calls fetch on the datasource with paging options.
 * @param {Object=} options Options to control fetch<p>
 *                  startIndex: The index at which to start fetching records.<p>
 *                  pageSize: The number of records to be fetched.<p>
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.PagingControlDataSource
 * @instance
 */
oj.PagingDataGridDataSource.prototype.fetch = function (options) 
{
    this._startIndex = options.startIndex;

    this.dataSource.setPageSize(this._currentPageSize);
    this.dataSource.fetch(options);
};

/**
 * @export
 * Return whether there is more data which can be fetched.
 * @returns {boolean} whether there is more data
 * @expose
 * @memberof! oj.PagingControlDataSource
 * @instance
 */
oj.PagingDataGridDataSource.prototype.hasMore = function() { 
    return this.dataSource.hasMore();
};

/**
 * Calls fetch for the next page of data. No-op if no more data.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.PagingControlDataSource
 * @instance
 */
oj.PagingDataGridDataSource.prototype.next = function () 
{
  if (this.dataSource.totalSize() > this._startIndex)
  {
    this._currentPageSize = this._currentPageSize + this._pageSize;
    this.dataSource.setPageSize(this._currentPageSize);
    this.fetch({startIndex: this._startIndex});
  }
};

/**
 * Calls fetch for the previous page of data. No-op if at the beginning.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.PagingControlDataSource
 * @instance
 */
oj.PagingDataGridDataSource.prototype.previous = function () 
{
  if (this._startIndex != 0 || this._startIndex != -1)
  {
    this._startIndex = this._startIndex - this._pageSize;
    this._startIndex = this._startIndex < 0 ? 0 : this._startIndex;
    this._currentPageSize = this._currentPageSize + this._pageSize;
    this.dataSource.setPageSize(this._currentPageSize);
    this.fetch({startIndex: this._startIndex});
  }
};

/**
 * Set or change the number of models in a page
 * 
 * @param {number} n page size
 */
oj.PagingDataGridDataSource.prototype.setPageSize = function(n) {
  this._pageSize = n;
  this._currentPageSize = this._startIndex + n;
  this.dataSource.setPageSize(this._currentPageSize);
};

/**
 * @export
 * Return current start index. -1 if initial fetch has not been done yet.
 * @returns {number} start index
 * @expose
 * @memberof! oj.PagingControlDataSource
 * @instance
 */
oj.PagingDataGridDataSource.prototype.startIndex = function() { 
  return this._startIndex;
};

/**** start delegated functions ****/


/**
 * Returns the total number of rows or columns.  If the value return is not >= 0 then it is automatically assumed
 * that the total count is unknown. In the case of paging returns the total number of rows/colums on the page.
 * @param {string} axis the axis in which we inquire for the total count.  Valid values are "row" and "column".
 * @return {number} the total number of rows/columns.
 * @export
 */
oj.PagingDataGridDataSource.prototype.getCount = function(axis)
{
    return this.dataSource.getCount(axis);
};

/**
 * Returns whether the total count returned in getCount function is an actual or an estimate.
 * @param {string} axis the axis in which we inquire whether the total count is an estimate.  Valid values are 
 *        "row" and "column".
 * @return {string} "actual" if the count returned in getCount function is the actual count, "estimate" if the 
 *         count returned in getCount function is an estimate.  The default value is "actual".
 * @export
 */
oj.PagingDataGridDataSource.prototype.getCountPrecision = function(axis)
{
  return this.dataSource.getCountPrecision(axis);
};

/**
 * Fetch a range of headers from the data source.
 * @param {Object} headerRange information about the header range, it must contain the following properties:
 *        axis, start, count.
 * @param {string} headerRange.axis the axis of the header that are fetched.  Valid values are "row" and "column".
 * @param {number} headerRange.start the start index of the range in which the header data are fetched.
 * @param {number} headerRange.count the size of the range in which the header data are fetched.  
 * @param {Object} callbacks the callbacks to be invoke when fetch headers operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(HeaderSet)} callbacks.success the callback to invoke when fetch headers completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch cells failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" keys.
 * @export
 */
oj.PagingDataGridDataSource.prototype.fetchHeaders = function(headerRange, callbacks, callbackObjects)
{
  return this.dataSource.fetchHeaders(headerRange, callbacks, callbackObjects);
};

/**
 * Fetch a range of cells from the data source.
 * @param {Array.<Object>} cellRanges Information about the cell range.  A cell range is defined by an array 
 *        of range info for each axis, where each range contains three properties: axis, start, count.
 * @param {string} cellRanges.axis the axis associated with this range where cells are fetched.  Valid 
 *        values are "row" and "column".
 * @param {number} cellRanges.start the start index of the range for this axis in which the cells are fetched.
 * @param {number} cellRanges.count the size of the range for this axis in which the cells are fetched. 
 * @param {Object} callbacks the callbacks to be invoke when fetch cells operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(CellSet)} callbacks.success the callback to invoke when fetch cells completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch cells failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" keys.
 * @export
 */
oj.PagingDataGridDataSource.prototype.fetchCells = function(cellRanges, callbacks, callbackObjects)
{
  return this.dataSource.fetchCells(cellRanges, callbacks, callbackObjects);
};

/**
 * Returns the keys based on the indexes. 
 * @param {Object} indexes the index for each axis
 * @param {Object} indexes.row the index for the row axis
 * @param {Object} indexes.column the index for the column axis
 * @return {Object.<Object, Object>} an object containing the keys for each axis
 * @export
 */
oj.PagingDataGridDataSource.prototype.keys = function(indexes)
{
  return this.dataSource.keys(indexes);
};

/**
 * Returns the row and column index based on the keys.
 * @param {Object} keys the key for each axis
 * @param {Object} keys.row the key for the row axis
 * @param {Object} keys.column the key for the column axis
 * @return {Object.<number, number>} indexes an object containing the index for each axis
 * @export
 */
oj.PagingDataGridDataSource.prototype.indexes = function(keys)
{
  return this.dataSource.indexes(keys);
};

/**
 * Attach an event handler to the datasource
 * @param {string} eventType eventType supported by the datasource
 * @param {function(Object)} eventHandler event handler function
 * @export
 */
oj.PagingDataGridDataSource.prototype.on = function(eventType, eventHandler)
{
  var dataSource = (/** @type {{on: Function}} */ (this.dataSource));
  return dataSource.on(eventType, eventHandler);
};

/**
 * Detach an event handler from the datasource
 * @param {string} eventType eventType supported by the datasource
 * @param {function(Object)} eventHandler event handler function
 * @export
 */
oj.PagingDataGridDataSource.prototype.off = function(eventType, eventHandler)
{
  var dataSource = (/** @type {{off: Function}} */ (this.dataSource));
  return dataSource.off(eventType, eventHandler);
};

/**
 * Determines whether this DataGridDataSource supports certain feature.
 * @param {string} feature the feature in which its capabilities is inquired.  Currently the only valid feature is "sort".
 * @return {string|null} the name of the feature.  For sort, the valid return values are: "full", "none".  Returns null if the
 *         feature is not recognized.
 * @export
 */
oj.PagingDataGridDataSource.prototype.getCapability = function(feature)
{
  if (feature === 'move')
  {
      return "none"
  }
  return this.dataSource.getCapability(feature);
};

/**
 * @export
 * Return the size of the data locally in the dataSource. -1 if an initial fetch has not been
 * done yet.
 * @returns {number} size of data
 * @expose
 * @memberof! oj.PagingDataGridDataSource
 * @instance
 */
oj.PagingDataGridDataSource.prototype.size = function()
{
  return this.dataSource.size();
};

/**
 * Performs a sort on the data source.
 * @param {Object} criteria the sort criteria. 
 * @param {string} criteria.axis The axis in which the sort is performed, valid values are "row", "column"
 * @param {Object} criteria.key The key that identifies which header to sort
 * @param {string} criteria.direction the sort direction, valid values are "ascending", "descending", "none" (default)
 * @param {Object} callbacks the callbacks to be invoke upon completion of the sort operation.  The callback
 *        properties are "success" and "error".
 * @param {function()} callbacks.success the callback to invoke when the sort completed successfully.  
 * @param {function({status: Object})} callbacks.error the callback to invoke when sort failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" properties.
 * @export
 */
oj.PagingDataGridDataSource.prototype.sort = function(criteria, callbacks, callbackObjects)
{
  this.dataSource.sort(criteria, callbacks, callbackObjects);
};

/**
 * @export
 * Return the total size of data available, including server side if not local.
 * @returns {number} total size of data
 * @expose
 * @memberof! oj.PagingDataGridDataSource
 * @instance
 */
oj.PagingDataGridDataSource.prototype.totalSize = function()
{
  return this.dataSource.totalSize();
};

oj.PagingDataGridDataSource.prototype.move = function(moveKey, atKey)
{
  return this.dataSource.move(moveKey, atKey);
};



/**** end delegated functions ****/



/**
 * A HeaderSet represents a collection of headers.  The HeaderSet is an object returned by the success callback
 * of the fetchHeaders method on DataGridDataSource.  This implementation of HeaderSet is used by the
 * array DataGridDataSource.   
 * @param {number} start the start index of the header set.
 * @param {number} end the end index of the header set.
 * @param {string} axis the axis of the header, value is either 'row' or 'column'.
 * @param {Object} callback the callback to invoke on to retrieve data and metadata. 
 * @constructor
 * @export
 */
oj.ArrayHeaderSet = function(start, end, axis, callback)
{
    // assert start/end are number
    oj.Assert.assertNumber(start, null);
    oj.Assert.assertNumber(end, null);

    this.m_start = start;
    this.m_end = end;
    this.m_axis = axis;
    this.m_callback = callback;
};

/**
 * Gets the data of the specified index.  An error is throw when 1) the range is not yet available and
 * 2) the index specified is out of bounds. 
 * @param {number} index the index of the header in which we want to retrieve the header from.  
 * @return {Object} the data object for the specific index.
 * @export
 */
oj.ArrayHeaderSet.prototype.getData = function(index)
{
    if (this.m_callback == null)
    {
        return null;
    }

    // make sure index are valid
    oj.Assert.assert(index <= this.m_end && index >= this.m_start); 

    return this.m_callback.getHeaderData(this.m_axis, index);
};

/**
 * Gets the metadata of the specified index.  An error is throw when 1) the range is not yet available and 
 * 2) the index specified is out of bounds. 
 * The metadata that the data source can optionally return are:
 *  1) sortDirection - the initial sort direction of the header.  Valid values are "ascending" and "descending".
 *  2) key - the key of the row/column header.
 * @param {number} index the index of the header in which we want to retrieve the metadata from.  
 * @return {Object} the metadata object for the specific index.
 * @export
 */
oj.ArrayHeaderSet.prototype.getMetadata = function(index)
{
    if (this.m_callback == null)
    {
        return null;
    }

    // make sure index are valid
    oj.Assert.assert(index <= this.m_end && index >= this.m_start); 

    return this.m_callback.getHeaderMetadata(this.m_axis, index);
};

/**
 * Gets the actual count of the result set.
 *
 * @return {number} the actual count of the result set.  
 * @export
 */
oj.ArrayHeaderSet.prototype.getCount = function()
{
    if (this.m_callback == null)
    {
        return 0;
    }

    return Math.max(0, this.m_end - this.m_start);
};

/**
 * Gets the start index of the result set.
 * @return {number} the start index of the result set.
 * @export
 */
oj.ArrayHeaderSet.prototype.getStart = function()
{
    return this.m_start;
};
});
