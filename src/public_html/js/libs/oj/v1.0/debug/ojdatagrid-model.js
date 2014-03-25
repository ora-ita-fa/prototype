define(['ojs/ojcore', 'jquery', 'ojs/ojdatacollection-common', 'ojs/ojmodel'], function(oj, $)
{
/**
 * @export
 * A CellSet represents a collection of cells.  The CellSet is an object returned by the success callback
 * of the fetchCells method on DataGridDataSource.  The OJCollectionCellSet is an oj collection specific 
 * implementation of methods on CellSet. 
 * @param {number} startRow the start row index of the cell set
 * @param {number} endRow the end row index of the cell set
 * @param {number} startColumn the start column index of the cell set
 * @param {number} endColumn the end column index of the cell set
 * @param {Object} collection the OJ collection instance
 * @param {Array|null} columns the set of column keys
 * @constructor
 */
oj.CollectionCellSet = function(startRow, endRow, startColumn, endColumn, collection, columns)
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
    this.m_collection = collection;
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
oj.CollectionCellSet.prototype.getData = function(indexes)
{
    var row, column, model;
    var self = this;
    model = this._getModel(indexes);
    this._getModel(indexes).done(function (model) { self.model = model });
    if (self.model == null)
    {
        return null;
    }

    // extract column index
    column = indexes['column'];

    // make sure index are valid (row index is checked in _getModel
    oj.Assert.assert(column >= this.m_startColumn && column <= this.m_endColumn); 

    return self.model.get(this.m_columns[column]);
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
oj.CollectionCellSet.prototype.getMetadata = function(indexes)
{
    var row, column, model, keys;
    var self = this;
    model = this._getModel(indexes);
    this._getModel(indexes).done(function (model) { self.model = model });
    
    if (self.model == null)
    {
        return null;
    }

    // extract column index
    column = indexes['column'];

    // make sure index are valid (row index is checked in _getModel
    oj.Assert.assert(column >= this.m_startColumn && column <= this.m_endColumn); 

    keys = {"row": self.model.GetCid(), "column": this.m_columns[column]};
    return {"keys": keys};
};

/**
 * Gets the Model based on indexes.
 * @private
 */
oj.CollectionCellSet.prototype._getModel = function(indexes)
{
    var row, column, model;

    oj.Assert.assertObject(indexes);

    // extract row and column index
    row = indexes['row'];
    if (this.m_collection.offset != null)
    {
        row += this.m_collection.offset;
    }      
    column = indexes['column'];

    // make sure index are valid
    oj.Assert.assert(row >= this.m_startRow && row <= this.m_endRow && column >= this.m_startColumn && column <= this.m_endColumn); 

    return this.m_collection.at(row, {'deferred':true});
};

/**
 * Gets the actual count of the result set for the specified axis.  Valid values are "row" and "column".
 * @param {string} axis the axis in which to inquire the actual count of the result set.
 * @return {number} the actual count of the result set for the specified axis.  
 * @export
 */
oj.CollectionCellSet.prototype.getCount = function(axis)
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

/**
 * Gets the m_startRow property
 * @export
 */
oj.CollectionCellSet.prototype.getStartRow = function()
{
    return this.m_startRow;
};

/**
 * Gets the m_endRow property
 * @export
 */
oj.CollectionCellSet.prototype.getEndRow = function()
{
    return this.m_endRow;
};

/**
 * Gets the m_startColumn property
 * @export
 */
oj.CollectionCellSet.prototype.getStartColumn = function()
{
    return this.m_startColumn;
};

/**
 * Gets the m_endColumn property
 * @export
 */
oj.CollectionCellSet.prototype.getEndColumn = function()
{
    return this.m_endColumn;
};

/**
 * Gets the m_collection property
 * @export
 */
oj.CollectionCellSet.prototype.getCollection = function()
{
    return this.m_collection;
};

/**
 * Gets the m_columns property
 * @export
 */
oj.CollectionCellSet.prototype.getColumns = function()
{
    return this.m_columns;
};


/**
 * @export
 * A HeaderSet represents a collection of headers.  The HeaderSet is an object returned by the success callback
 * of the fetchHeaders method on DataGridDataSource.  This is an oj collection specific implementation of the HeaderSet.
 * @param {number} start the start index of header set.
 * @param {number} end the end index of the header set.
 * @param {Array} headers the array of headers
 * @param {Object=} collection the OJ collection.  Required for row headers.
 * @param {string=} rowHeader the id of the row header column.  Required for row headers.
 * @constructor
 */
oj.CollectionHeaderSet = function(start, end, headers, collection, rowHeader)
{
    // assert start/end are number
    oj.Assert.assertNumber(start, null);
    oj.Assert.assertNumber(end, null);
    oj.Assert.assertArrayOrNull(headers);

    this.m_start = start;
    this.m_end = end;
    this.m_headers = headers;
    this.m_collection = collection;
    this.m_rowHeader = rowHeader;
};

/**
 * Gets the data of the specified index.  An error is throw when 1) the range is not yet available and
 * 2) the index specified is out of bounds. 
 * @param {number} index the index of the header in which we want to retrieve the header from.  
 * @return {Object} the data object for the specific index.
 * @export
 */
oj.CollectionHeaderSet.prototype.getData = function(index)
{
    // make sure index are valid
    oj.Assert.assert(index <= this.m_end && index >= this.m_start); 
    var self = this;
    // row or column header
    if (this.m_rowHeader != null && this.m_collection != null)
    {
        if (this.m_collection.offset != null)
        {
            index += this.m_collection.offset;
        }  
        this.m_collection.at(index, {'deferred':true}).done(function (model) { self.model = model });
        return self.model.get(this.m_rowHeader);
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
oj.CollectionHeaderSet.prototype.getMetadata = function(index)
{
    var data, self;
    if (this.m_rowHeader != null && this.m_collection != null)
    {
        self = this;
        this.m_collection.at(index, {'deferred':true}).done(function (model) { self.model = model });
        
        if (self.model == null)
        {
            return null;
        }
        
        return {'key':self.model.GetCid()};
    }    
    else
    {
        data = this.getData(index);
        return {'key': data};
    }    
    
};

/**
 * Gets the actual count of the result set.
 *
 * @return {number} the actual count of the result set.  
 * @export
 */
oj.CollectionHeaderSet.prototype.getCount = function()
{
    return Math.max(0, this.m_end - this.m_start);
};

/**
 * Gets the m_start property
 * @export
 */
oj.CollectionHeaderSet.prototype.getStart = function()
{
    return this.m_start;
};

/**
 * Gets the m_end property
 * @export
 */
oj.CollectionHeaderSet.prototype.getEnd = function()
{
    return this.m_end;
};

/**
 * Gets the m_headers property
 * @export
 */
oj.CollectionHeaderSet.prototype.getHeaders = function()
{
    return this.m_headers;
};

/**
 * Gets the m_rowHeader property
 * @export
 */
oj.CollectionHeaderSet.prototype.getRowHeader = function()
{
    return this.m_rowHeader;
};

/**
 * Gets the m_collection property
 * @export
 */
oj.CollectionHeaderSet.prototype.getCollection = function()
{
    return this.m_collection;
};


/**
 * An OJ Collection based implementation of the DataGridDataSource.
 * @param {Object} collection the oj collection to adapter the DataGridDataSource
 * @param {Object=} options optional settings on this oj collection data source
 * @param {string=} options.rowHeader the cid of the attribute designated as the row header
 * @param {Array.<string>=} options.columns explicitly specifies columns to display and in 
 *        what order.  These columns must be a subset of attributes from Model. * @constructor
 * @export
 * @constructor
 * @extends oj.DataSource
 */
oj.CollectionDataGridDataSource = function(collection, options)
{
    this.collection = collection;
    if (options != null)
    {
        this.rowHeader = options['rowHeader'];
        this.columns = options['columns'];
    }
    this._startIndex = 0;
    this._pageSize = -1;
    this._totalSize = -1;
    this.initialSync = false;    
    this.syncing = false;
    oj.CollectionDataGridDataSource.superclass.constructor.call(this);
};

//subclass of DataGridDataSource
oj.Object.createSubclass(oj.CollectionDataGridDataSource, oj.DataGridDataSource, "oj.CollectionDataGridDataSource");

/**
 * Initial the OJ collection based data source.
 * @export
 */
oj.CollectionDataGridDataSource.prototype.Init = function()
{
    // call super
    oj.CollectionDataGridDataSource.superclass.Init.call(this);

    this.pendingHeaderCallback = {};

    // start fetching from collection
    if (this._isRemote())
    {
        this.initialSync = true;
        this.collection.fetch({success:this._handleCollectionFetched.bind(this, true)});        
    }
    else
    {
        // extract column info for local collection
        if (this.columns == null && this.collection.length > 0)
        {
            this.columns = this.collection.first().keys();
            if (this.columns.indexOf(this.rowHeader) != -1)
            {
                this.columns.splice(this.columns.indexOf(this.rowHeader),1);
            }
        }
    }
 
    this._registerEventListeners();
};

/**
 * Register event handlers on the underlying OJ collection.
 * @private
 */
oj.CollectionDataGridDataSource.prototype._registerEventListeners = function()
{
    this.collection.on("add", this._handleModelAdded.bind(this));
    this.collection.on("remove", this._handleModelDeleted.bind(this));
    this.collection.on("change", this._handleModelChanged.bind(this));
    this.collection.on("sync", this._handleSync.bind(this));
};

/**
 * Whether this collection is associated with a remote rest services
 * @private
 */
oj.CollectionDataGridDataSource.prototype._isRemote = function()
{
    // if this is a url specified in the option
    return (this.collection['url'] != null);
};

oj.CollectionDataGridDataSource.prototype._isDataAvailable = function()
{
    if (this._isRemote())
    {
        return (this.data != null);
    }
    // for local collection, always return true;
    return true;
};

/**
 * Callback after fetch
 * @param {boolean} isInit bound by callback of if it is the inital fetch
 * @param {Object=} collection the result collection
 * @param {Object=} response the response
 * @param {Object=} options any options
 * @private
 */
oj.CollectionDataGridDataSource.prototype._handleCollectionFetched = function(isInit, collection, response, options)
{
    var axis;
    this.data = response;
    if (isInit === true)
    {
        this.initialSync = false;
    }    
    else
    {
        this.syncing = false;
    }
    this._totalSize = collection.totalResults === undefined ? collection.length : collection.totalResults;
        
    //call sync or fetchend on the datasource
    oj.DataGridDataSource.superclass.handleEvent.call(this, 'sync', true);
    
    if (this.columns == null && this.collection['models'].length > 0)
    {
        this.columns = this.collection['models'][0].keys();
        if (this.columns.indexOf(this.rowHeader) != -1)
        {
            this.columns.splice(this.columns.indexOf(this.rowHeader),1);
        }
    }
    
    // if there is a pending callback from fetchCells or fetchHeaders call, handle it now
    for (axis in this.pendingHeaderCallback)
    {   
        if (this.pendingHeaderCallback.hasOwnProperty(axis) && this.pendingHeaderCallback[axis] != null)
        {
            this.fetchHeaders(this.pendingHeaderCallback[axis].headerRange, this.pendingHeaderCallback[axis].callbacks, this.pendingHeaderCallback[axis].callbackObjects);
        }
    }
    
    if (this.pendingCellCallback != null)
    {
        this.fetchCells(this.pendingCellCallback.cellRanges, this.pendingCellCallback.callbacks, this.pendingCellCallback.callbackObjects);
    }
 
};

/**
 * Returns the total number of rows or columns.  If the value return is not >= 0 then it is automatically assumed
 * that the total count is unknown. In the case of paging returns the total number of rows/colums on the page.
 * @param {string} axis the axis in which we inquire for the total count.  Valid values are "row" and "column".
 * @return {number} the total number of rows/columns.
 * @export
 */
oj.CollectionDataGridDataSource.prototype.getCount = function(axis)
{
    // not done fetching yet, provide an estimate count
    if (!this._isDataAvailable())
    {
        this.precision = "estimate";
        return 100;  // arbitrary number, should be large enough to cover viewport
    }

    this.precision = "exact";
    if (axis == "row")
    {
        return this.size();
    }
    if (axis == "column")
    {
        return this.columns.length;
    }

    // should not get here
    return 0;
};

/**
 * Returns whether the total count returned in getCount function is an actual or an estimate.
 * @param {string} axis the axis in which we inquire whether the total count is an estimate.  Valid values are 
 *        "row" and "column".
 * @return {string} "actual" if the count returned in getCount function is the actual count, "estimate" if the 
 *         count returned in getCount function is an estimate.  The default value is "actual".
 * @export
 */
oj.CollectionDataGridDataSource.prototype.getCountPrecision = function(axis)
{
    // if precision has not been determine, invoke getCount
    if (this.precision == null)
    {
        this.getCount(axis);
    }
    return this.precision;
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
oj.CollectionDataGridDataSource.prototype.fetchHeaders = function(headerRange, callbacks, callbackObjects)
{
    var axis, start, count, end, callback, headerSet;

    axis = headerRange.axis;
    if (this._isDataAvailable())
    {
        start = headerRange.start;
        count = headerRange.count;	            

        oj.Assert.assert(axis === 'row' || axis === 'column');
        oj.Assert.assert(start < this.getCount(axis));
        oj.Assert.assert(count > 0);
		
        if (axis === "column")
        {  
            end = Math.min(this.columns.length, start+count);
            headerSet = new oj.CollectionHeaderSet(start, end, this.columns);
        }
        else if (axis === "row")
        {
            if (this.rowHeader != null)
            {
                end = Math.min(this.size(), start+count);
                if (this._pageSize > 0)
                {
                    end = Math.min(end, this._startIndex + this._pageSize);
                    end = Math.min(end, this.totalSize() - this._startIndex);                    
                }                    
                headerSet = new oj.CollectionHeaderSet(start, end, this.columns, this.collection, this.rowHeader);
            }
            else
            {
                // no row header, return empty result set
                headerSet = new oj.ArrayHeaderSet(start, start, axis, null);
            }
        }

        if (callbacks != null && callbacks['success'] != null)
        {
            if (callbackObjects == null)
            {
                callbackObjects = {};
            }	            
            callbacks['success'].call(callbackObjects['success'], headerSet, headerRange);
        }
        // clear any pending callback
        this.pendingHeaderCallback[axis] = null;
    }
    else
    {
        // still fetching, just store the callback info
        if (callbacks != null && this.pendingHeaderCallback[axis] == null)
        {
            callback = {};
            callback.headerRange = headerRange;
            callback.callbacks = callbacks;
            callback.callbackObjects = callbackObjects;
            this.pendingHeaderCallback[axis] = callback;
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
 * @param {function(CellSet)} callbacks.success the callback to invoke when fetch cells completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch cells failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" keys.
 * @export
 */
oj.CollectionDataGridDataSource.prototype.fetchCells = function(cellRanges, callbacks, callbackObjects)
{
    var i, cellRange, rowStart, rowEnd, cellSet, colStart, colEnd;

    rowEnd = 0;
    colEnd = 0;

    // checks if data is available
    if (this._isDataAvailable())
    {

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
                rowEnd = Math.min(this.size(), rowStart + cellRange['count']);
                if (this._pageSize > 0)
                {
                    rowEnd = Math.min(rowEnd, this._startIndex + this._pageSize);
                    rowEnd = Math.min(rowEnd, this.totalSize() - this._startIndex);                    
                }    
            }
            else if (cellRange['axis'] === "column")
            {
                colStart = cellRange['start'];
                colEnd = Math.min(this.columns.length, colStart + cellRange['count']);
            }
        }			

        // create CellSet and invoke callback
        cellSet = new oj.CollectionCellSet(rowStart, rowEnd, colStart, colEnd, this.collection, this.columns);
        
        if (callbacks != null && callbacks['success'] != null)
        {
            if (callbacks != null && callbackObjects == null)
            {
                callbackObjects = {};
            }
            callbacks['success'].call(callbackObjects['success'], cellSet, cellRanges);
            this._fetchCalls = 0;
        }
        // clear any pending callback
        this.pendingCellCallback = null;
        
    }
    else
    {
        // still fetching, just store the callback info
        if (callbacks != null && this.pendingCellCallback == null)
        {
            this.pendingCellCallback = {};
            this.pendingCellCallback.cellRanges = cellRanges;
            this.pendingCellCallback.callbacks = callbacks;
            this.pendingCellCallback.callbackObjects = callbackObjects;
        }
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
oj.CollectionDataGridDataSource.prototype.keys = function(indexes)
{
    var rowIndex = indexes['row'], columnIndex = indexes['column'], rowKey;
    rowKey =  this.collection['models'][rowIndex] === undefined ? undefined:this.collection['models'][rowIndex]['cid'];	
    return {"row": rowKey, "column": this.columns[columnIndex]};
};

/**
 * Returns the row and column index based on the keys.
 * @param {Object} keys the key for each axis
 * @param {Object} keys.row the key for the row axis
 * @param {Object} keys.column the key for the column axis
 * @return {Object.<number, number>} indexes an object containing the index for each axis
 * @export
 */
oj.CollectionDataGridDataSource.prototype.indexes = function(keys)
{
    var rowKey = keys['row'], columnKey = keys['column'];
    return {"row": this.collection['models'].indexOf(this.collection.getByCid(rowKey)), "column": this.columns === undefined ? this.collection.first().keys().indexOf(columnKey):this.columns.indexOf(columnKey)};
};

/**
 * Determines whether this DataGridDataSource supports certain feature.
 * @param {string} feature the feature in which its capabilities is inquired.  Currently the only valid feature is "sort".
 * @return {string|null} the name of the feature.  For sort, the valid return values are: "full", "none".  Returns null if the
 *         feature is not recognized.
 * @export
 */
oj.CollectionDataGridDataSource.prototype.getCapability = function(feature)
{
    if (feature === 'sort')
    {
        // OJ collection based data source supports column sorting only
        return 'column';
    }
    else if (feature === 'move')
    {
        // OJ collection based data source supports row moving only
        return 'row';        
    }
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
oj.CollectionDataGridDataSource.prototype.sort = function(criteria, callbacks, callbackObjects)
{
    var comparator, direction = criteria['direction'], header = criteria['key'], axis = criteria['axis'];

    // make sure callbackObjects is not null
    if (callbackObjects == null)
    {
        callbackObjects = {};
    }

    if (axis === "column") {
        if (direction === 'ascending') {
            comparator = function(a, b) {
                var as, bs;
                //Get the values from the model objects
                a = a.get(header);
                b = b.get(header);
                //Strings of numbers return false, so we can compare strings of numebers with numbers                
                as = isNaN(a);
                bs = isNaN(b);
                //If they dates, turn them into sortable strings         
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
        if (direction === 'descending') {
            comparator = function(a, b) {
                var as, bs;
                a = a.get(header);
                b = b.get(header);
                as = isNaN(a);
                bs = isNaN(b); 
                if (a instanceof Date) {
                    a = a.toISOString();
                }
                if (b instanceof Date) {
                    b = b.toISOString();
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

        if (comparator !== undefined) 
        {
            //No setter on the comparator yet for oj.Collection
            this.collection['comparator'] = comparator;
            this.collection.sort();

            if (callbacks != null && callbacks['success'] != null)
            {
                callbacks['success'].call(callbackObjects['success']);
            }
        } 
        else
        {
            if (callbacks != null && callbacks['error'] != null)
            {
                callbacks['error'].call(callbackObjects['error'], "Direction value was invalid");
            }
        }
    }
    else
    { 
        if (callbacks != null && callbacks['error'] != null)
        {
            callbacks['error'].call(callbackObjects['error'], "Axis value not supported");
        }
    }
};

/**
 * Move a model to a new index in the collection, if atKey is null adds to the end
 * @export
 */
oj.CollectionDataGridDataSource.prototype.move = function(moveKey, atKey)
{
    var model, newIndex;    
    model = this.collection.getByCid(moveKey);
    if (atKey === null)
    {
        this.collection.remove(model);
        this.collection.add(model);         
    }
    else
    {
        if (moveKey === atKey)
        {
            newIndex = this.collection.indexOf(this.collection.getByCid(atKey));
            this.collection.remove(model);
        }
        else
        {
            this.collection.remove(model);            
            newIndex = this.collection.indexOf(this.collection.getByCid(atKey));
        }
        this.collection.add(model, {at:newIndex});         
    }
};

//////////////////////////////////// Event listeners /////////////////////////////////////
/**
 * Returns an Object for an event 
 * @param {string} operation the operation done on the model
 * @param {Object|null} rowKey the key for the row axis
 * @param {Object|null} columnKey the key for the column axis
 * @return {Object} an object containing the the source, operation, and keys of the event
 * @protected
 */
oj.CollectionDataGridDataSource.prototype._getModelEvent = function(operation, rowKey, columnKey)
{
    var event = {};
    event['source'] = this;
    event['operation'] = operation;
    event['keys'] = {'row': rowKey, 'column': columnKey};

    return event;
};

/**
 * Handle a model add to the collection
 * @param {Object} model The model being added to the collection 
 * @protected
 */
oj.CollectionDataGridDataSource.prototype._handleModelAdded = function(model)
{
    var event, rowKey;
    //make sure there are no open fetch calls
    if (this.syncing === false && this.initialSync === false)
    {
        rowKey = model.GetCid();
        event = this._getModelEvent('insert', rowKey, null);
        this.handleEvent("change", event);
    }
};

/**
 * Handle a model delete from the collection
 * @param {Object} model The model being deleted from the collection 
 * @protected
 */
oj.CollectionDataGridDataSource.prototype._handleModelDeleted = function(model)
{
    var event, rowKey;
    if (this.syncing === false && this.initialSync === false)
    {    
        rowKey = model.GetCid();
        event = this._getModelEvent('delete', rowKey, null);
        this.handleEvent("change", event);
    }
};

/**
 * Handle a model change in the collection
 * @param {Object} model The model being changed in the collection 
 * @protected
 */
oj.CollectionDataGridDataSource.prototype._handleModelChanged = function(model)
{
    var event, rowKey;
    if (this.syncing === false && this.initialSync === false)
    {
        rowKey = model.GetCid();
        event = this._getModelEvent('update', rowKey, null);
        this.handleEvent("change", event);
    }
};

/**
 * Handle a sync or fetch end in the collection
 * @protected
 */
oj.CollectionDataGridDataSource.prototype._handleSync = function()
{
    if (this._pageSize > 0)
    {
        this.pendingHeaderCallback = {};
        this.pendingCellCallback = null;
        this.handleEvent("change", {'operation': 'sync', 'pageSize': this._pageSize, 'rowIndex':this._startIndex});
    }
};

/**
 * Set or change the number of models in a page
 * @export
 * @param {number} n page size
 */
oj.CollectionDataGridDataSource.prototype.setPageSize = function(n) {
    this._pageSize = n;
};

/**
 * @export
 * Get the length of the collection. -1 if an initial fetch has not been
 * done yet. Default to the size of the collection. If pageSize is set then
 * limit it.
 * @returns {number} length of the collection
 * @expose
 * @memberof! oj.CollectionDataGridDataSource
 * @instance
 */
oj.CollectionDataGridDataSource.prototype.size = function() 
{
    if (this.collection.length === 0)
    {
        return -1;
    }
    if (this._pageSize != null && this._pageSize > 0)
    {
        if (this.collection.size() > this._pageSize)
        {
            return this._pageSize;
        }
    }
    return this.collection.size();
};

/**
 * @export
 * Return the total size of data available, including server side if not local.
 * @returns {number} total size of data
 * @expose
 * @memberof! oj.CollectionDataGridDataSource
 * @instance
 */
oj.CollectionDataGridDataSource.prototype.totalSize = function() 
{ 
    if (this.collection != null && this._totalSize < 0)
    {
        return this.collection['totalResults'];
    }
    return this._totalSize;
};

/**
 * @export
 * Return whether there is more data which can be fetched.
 * @returns {boolean} whether there is more data
 * @expose
 * @memberof! oj.CollectionDataGridDataSource
 * @instance
 */
oj.CollectionDataGridDataSource.prototype.hasMore = function() 
{    
    if (this.collection != null)
    {
        return this.collection.hasMore;
    }
    return false;
};

/**
 * @export
 * Perform a fetch call from the options specified
 * @expose
 * @memberof! oj.CollectionDataGridDataSource
 * @instance
 */
oj.CollectionDataGridDataSource.prototype.fetch = function(options) 
{    
    this.syncing = true;
    this._startIndex = options != null ? (options['startIndex'] != null ? options['startIndex'] : 0) : 0;    
    this.collection.fetch({success:this._handleCollectionFetched.bind(this, false), startIndex:this._startIndex});
};
    
//////////////////////////////////// Property Getters  /////////////////////////////////////    
/**
 * Gets the collection property
 * @export
 */
oj.CollectionDataGridDataSource.prototype.getCollection = function()
{
    return this.collection;
};    

/**
 * Gets the columns property
 * @export
 */
oj.CollectionDataGridDataSource.prototype.getColumns = function()
{
    return this.columns;
};    

/**
 * Gets the rowHeader property
 * @export
 */
oj.CollectionDataGridDataSource.prototype.getRowHeader = function()
{
    return this.rowHeader;
};

/**
 * Gets the _startIndex property
 * @export
 */
oj.CollectionDataGridDataSource.prototype.getStartIndex = function()
{
    return this._startIndex;
};

/**
 * Gets the _pageSize property
 * @export
 */
oj.CollectionDataGridDataSource.prototype.getPageSize = function()
{
    return this._pageSize;
};

/**
 * Gets the _totalSize property
 * @export
 */
oj.CollectionDataGridDataSource.prototype.getTotalSize = function()
{
    return this._totalSize;
};

/**
 * Gets the _fetchCalls property
 * @export
 */
oj.CollectionDataGridDataSource.prototype.getFetchCalls = function()
{
    return this._fetchCalls;
};

/**
 * Gets the data property
 * @export
 */
oj.CollectionDataGridDataSource.prototype.getData = function()
{
    return this.data;
};
});
