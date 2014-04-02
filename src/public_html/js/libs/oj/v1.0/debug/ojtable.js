define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojdatacollection-common'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        */
       function(oj, $, compCore)
{

/**
 * @export
 * @class oj.FlattenedTreeRowSet
 * @classdesc RowSet wrapper for FlattenedTreeDataSource
 * 
 * @param {oj.FlattenedTreeDataSource} data oj.FlattenedTreeDataSource
 * @param {Object=} options Passed through to the user's initialize routine, if any, upon construction 
 * @constructor
 */
oj.FlattenedTreeRowSet = function(data, options) 
{
  // Initialize
  oj.FlattenedTreeRowSet._init(this, data, options);
};

// Subclass from oj.FlattenedTreeDataSource
oj.Object.createSubclass(oj.FlattenedTreeRowSet, oj.RowSet, "oj.FlattenedTreeRowSet");

/**
 * Initializes the data source.
 * @export
 */
oj.FlattenedTreeRowSet.prototype.Init = function()
{
    oj.FlattenedTreeRowSet.superclass.Init.call(this);
};

oj.FlattenedTreeRowSet._init = function(rowSet, data, options) 
{
  rowSet._eventHandlers = [];
  rowSet._startIndex = 0;
  
  rowSet.Init();
  rowSet._data = data;
  //rowSet._addCollectionEventListeners();
};

/**
 * Add an instance of this RowSet's Row(s) to the end of the RowSet.
 * @param {oj.Row} row Row object
 * @param {Object=} options at: splice the new Row into the RowSet at the value given (at:index) <p>
 *                          deferred: if true, return a promise as though this RowSet were virtual whether it is or not
 * 
 * @returns {Object} if deferred or virtual, return a promise when the set has completed
 * @export
 */
oj.FlattenedTreeRowSet.prototype.add = function(row, options)
{
  oj.Assert.failedInAbstractFunction();
  return null;
};

/**
 * Return the Row object found at the given index of the RowSet, or a promise object that will return the Row to a function
 * in the done() call.
 * 
 * @param {number} index Index for which to return the Row object. 
 * @param {Object=} options <p>
 *                  fetchSize: fetch size to use if the call needs to fetch more records from the server, if virtualized.  Overrides the overall fetchSize setting <p>
 *                  deferred: if true, return a deferred/promise object as described below.  If not specified, the return value will
 *                   be determined by whether or not the RowSet is virtual
 * @return {Object} Row object located at index. If index is out of range, returns null.  If this is a paging/virtual RowSet or
 *                  if deferred is specified and true, at will return a jQuery promise object which will call its done function,
 *                  passing the value at(index) 
 * @export
 */
oj.FlattenedTreeRowSet.prototype.at = function(index, options)
{
  var nodeSet = this._currentNodeSet;
  var startIndex = nodeSet.getStart();
  return new oj.ArrayRow(nodeSet.getData(startIndex + index));
};

/**
 * @export
 * Return a copy of the RowSet
 * @return {Object} copy of the RowSet
 */
oj.FlattenedTreeRowSet.prototype.clone = function()
{
  oj.Assert.failedInAbstractFunction();
  return null;
};

/**
 * Fetch the RowSet data.
 * @param {Object=} options Options to control fetch<p>
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeRowSet
 * @instance
 */
oj.FlattenedTreeRowSet.prototype.fetch = function(options)
{
  options = options || {};
  if (options['startIndex'] != null)
  {
    this._startIndex = options['startIndex'];
  }
  var rangeOption = {'start': this._startIndex, 'count':  30};
  this._data.fetchRows(rangeOption,
    {
      "success": function(nodeSet)
      {
        this._handleFetchRowsSuccess(nodeSet);
      }.bind(this),
      "error": function(status)
      {
        //this._handleFetchRowsError(status, {'start': rowStart, 'count': rowCount}, callbacks, callbackObjects);
      }.bind(this)
    }
  ); 
};

/**
 * Return the first Row object from the RowSet whose Row id value is the given id
 * Note this method will not function as expected if the id is not set
 * @param {Object|string} id ID for which to return the Row object, if found. 
 * @param {Object=} options <p>
 *                  fetchSize: fetch size to use if the call needs to fetch more records from the server, if virtualized.  Overrides the overall fetchSize setting<p>
 *                  deferred: if true, return a promise as though this RowSet were virtual whether it is or not
 * @return {Object} First Row object in the RowSet where Row.id = id. If none are found, returns null.
 *                  If deferred or virtual, return a promise passing the Row when done
 * @export
 */
oj.FlattenedTreeRowSet.prototype.get = function(id, options)
{
  oj.Assert.failedInAbstractFunction();
  return null;
};

/**
 * @export
 * Return whether there is more data which can be fetched.
 * @return {boolean} whether there is more data
 */
oj.FlattenedTreeRowSet.prototype.hasMore = function()
{
  oj.Assert.failedInAbstractFunction();
  return false;
};

/**
 * Return the array index location of the given Row object.
 * @param {Object} row Row object to locate 
 * @param {Object=} options deferred: if true, return a promise as though this RowSet were virtual whether it is or not
 
 * @return {number} The index of the given Row object, or a promise that will call with the index when complete.
 *                  If the object is not found, returns -1.
 * @export
 */
oj.FlattenedTreeRowSet.prototype.indexOf = function(row, options)
{
  oj.Assert.failedInAbstractFunction();
  return 0;
};

/**
 * @export
 * Determine if the RowSet has any Rows
 * 
 * @returns {boolean} true if RowSet is empty
 */
oj.FlattenedTreeRowSet.prototype.isEmpty = function()
{
  oj.Assert.failedInAbstractFunction();
  return true;
};

/**
 * Remove a Row from the RowSet, if found.
 * @param {oj.Row} row Row object
 * @param {Object=} options silent: if set, do not fire a remove event 
 * @export
 */
oj.FlattenedTreeRowSet.prototype.remove = function(row, options)
{
  oj.Assert.failedInAbstractFunction();
};

/**
 * Remove and replace the RowSet's entire list of Rows with a new set of Rows, if provided. Otherwise, empty the RowSet.
 * @param {Object=} data Array of Row objects with which to replace the RowSet's data. 
 * @param {Object=} options user options, passed to event
 * @export
 */
oj.FlattenedTreeRowSet.prototype.reset = function(data, options)
{
  oj.Assert.failedInAbstractFunction();
};

/**
 * @export
 * Return the length of the RowSet
 * @returns {number} length of the RowSet
 */
oj.FlattenedTreeRowSet.prototype.size = function()
{ 
  return this._currentNodeSet == null ? 0 : this._currentNodeSet.getCount();
};

/**
 * @export
 * Sort the Rows in the RowSet
 * 
 * @param {Object=} options
 */
oj.FlattenedTreeRowSet.prototype.sort = function(options)
{
  oj.Assert.failedInAbstractFunction();
};

/**
 * @export
 * Return current start index.
 * @returns {number} start index
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.FlattenedTreeRowSet.prototype.startIndex = function() {
  return 0;
};

/**
 * @export
 * Return the total length of the RowSet
 * @returns {number} length of the RowSet
 */
oj.FlattenedTreeRowSet.prototype.totalSize = function()
{
  return -1;
};

oj.FlattenedTreeRowSet.prototype._handleFetchRowsSuccess = function(nodeSet)
{
  this._currentNodeSet = nodeSet;
  var i;
  var nodeCount = nodeSet.getCount();
  var startIndex = nodeSet.getStart();
  for (i = 0; i < nodeCount; i++)
  {
    oj.FlattenedTreeRowSet.superclass._handleEvent.call(this, oj.RowSet.EventType['ADD'], {'row': new oj.ArrayRow(nodeSet.getData(i), {'context': nodeSet.getMetadata(i)}), 'rowIdx': startIndex + i});
  }
};
/*jslint browser: true,devel:true*/
/**
 * @export
 * @class oj.TableDataSource
 * @classdesc Abstract object representing data used by table component
 * @param {Object} data data supported by the components
 * @param {Object|null} options Array of options for the TableDataSource
 * @constructor
 */
oj.TableDataSource = function(data, options)
{
  if (this.constructor == oj.TableDataSource)
  {
    // This should only be called by the constructors of the subclasses. If you need
    // to initialize a new TableDataSource then call the constructors of the subclasses such
    // as oj.ArrayTableDataSource or oj.CollectionTableDataSource.
    var errSummary = oj.Translations.getTranslatedString('oj-ojTable.tableDataSourceInstantiated.summary');
    var errDetail = oj.Translations.getTranslatedString('oj-ojTable.tableDataSourceInstantiated.detail');
    throw new oj.Message(errSummary, errDetail, oj.Message.SEVERITY_LEVEL['ERROR']);
  }
  // Initialize
  this.data = data;
  this.options = options;
  this._startIndex = 0;
  this.Init();
};

// Subclass from oj.DataSource 
oj.Object.createSubclass(oj.TableDataSource, oj.DataSource, "oj.TableDataSource");

/**
 * Initializes the instance.
 * @export
 */
oj.TableDataSource.prototype.Init = function()
{
  oj.TableDataSource.superclass.Init.call(this);
};

/**
 * Return the oj.Row object found at the given index of the RowSet.
 * 
 * @param {number} index Index for which to return the Row object. 
 * @return {Object} oj.Row object located at index. If index is out of range, returns null.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.at = function(index)
{
  oj.Assert.failedInAbstractFunction();
  return null;
};

/**
 * Fetch the RowSet data.
 * @param {Object=} options Options to control fetch<p>
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.fetch = function(options)
{
  oj.Assert.failedInAbstractFunction();
};

/**
 * Return the first oj.Row object from the RowSet whose Row id value is the given id
 * @param {Object|string} id ID for which to return the Row object, if found. 
 * @return {Object} First Row object in the RowSet where Row.id = id. If none are found, returns null.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.get = function(id)
{
  oj.Assert.failedInAbstractFunction();
  return null;
};

/**
 * @export
 * Return whether there is more data which can be fetched.
 * @returns {boolean} whether there is more data
 * @expose
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.hasMore = function()
{
  oj.Assert.failedInAbstractFunction();
  return false;
};

/**
 * Return the array index location of the given Row object.
 * @param {Object} row oj.Row object to locate 
 * @return {number} The index of the given Row object. If the object is not found, returns -1.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.indexOf = function(row)
{
  oj.Assert.failedInAbstractFunction();
  return 0;
};

/**
 * @export
 * Get the length of the RowSet.
 * limit it.
 * @returns {number} length of the RowSet
 * @expose
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.size = function()
{
  oj.Assert.failedInAbstractFunction();
  return 0;
};

/**
 * Sort the Rows in the RowSet
 * @param {Object=} comparator
 * @param {Object=} options silent: if true, do not fire the sort event
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.sort = function(comparator, options)
{
  oj.Assert.failedInAbstractFunction();
};

/**
 * @export
 * Get or set the current start index.
 * @param {number} startIndex start index
 * @returns {number} start index
 * @expose
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.startIndex = function(startIndex) 
{
  if (startIndex != null)
  {
    this._startIndex = startIndex;
  }
  return this._startIndex;
};

/**
 * @export
 * Return the total size of data available, including server side if not local.
 * @returns {number} total size of data
 * @expose
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.totalSize = function()
{
  oj.Assert.failedInAbstractFunction();
  return 0;
};
/*jslint browser: true,devel:true*/
/**
 * @export
 * @class oj.PagingTableDataSource
 * @classdesc Object representing data used by the paging component
 * @param {Object} dataSource
 * @param {Object|null} options Array of options for the PagingControlDataSource
 * @constructor
 */
oj.PagingTableDataSource = function(dataSource, options)
{
  // Initialize
  options = options || {};
  
  if (!(dataSource instanceof oj.TableDataSource))
  {
    // we only support Array, oj.Collection, or ko.observableArray. To
    // check for observableArray, we can't do instanceof check because it's
    // a function. So we just check if it contains a subscribe function.
    var errSummary = oj.Translations.getTranslatedString('oj-table.dataInvalidType.summary');
    var errDetail = oj.Translations.getTranslatedString('oj-table.dataInvalidType.detail');
    throw new oj.Message(errSummary, errDetail, oj.Message.SEVERITY_LEVEL['ERROR']);
  }
  this.dataSource = dataSource;
  this._startIndex = 0;
  this.Init();
};

// Subclass from oj.DataSource 
oj.Object.createSubclass(oj.PagingTableDataSource, oj.PagingDataSource, "oj.PagingTableDataSource");

/**
 * Initializes the instance.
 * @export
 */
oj.PagingTableDataSource.prototype.Init = function()
{
  oj.PagingTableDataSource.superclass.Init.call(this);
};

/**
 * Calls fetch on the datasource with paging options.
 * @param {Object=} options Options to control fetch<p>
 *                  startIndex: The index at which to start fetching records.<p>
 *                  pageSize: The number of records to be fetched.<p>
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.fetch = function(options)
{
  if (options != null)
  {
    this._startIndex = options['startIndex'];
  }
  var pageSize = options['pageSize'] != null ? options['pageSize'] : this._pageSize;
  this.dataSource.fetch({'startIndex': this._startIndex, 'pageSize': pageSize});
};

/**
 * Calls fetch for the next page of data. No-op if no more data.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.next = function()
{
  if (this.dataSource.totalSize() > this._startIndex)
  {
    this._currentPageSize = this._currentPageSize + this._pageSize;
    this.fetch({'startIndex': this._startIndex, 'pageSize': this._currentPageSize});
  }
};

/**
 * Calls fetch for the previous page of data. No-op if at the beginning.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.previous = function()
{
  if (this._startIndex != 0 || this._startIndex != -1)
  {
    this._startIndex = this._startIndex - this._pageSize;
    this._startIndex = this._startIndex < 0 ? 0 : this._startIndex;
    this._currentPageSize = this._currentPageSize + this._pageSize;
    this.fetch({'startIndex': this._startIndex, 'pageSize': this._currentPageSize});
  }
};

/**
 * Set or change the number of models in a page
 * 
 * @param {number} n page size
 */
oj.PagingTableDataSource.prototype.setPageSize = function(n) {
  this._pageSize = n;
  this._currentPageSize = this._startIndex + n;
};

/**
 * @export
 * Return current start index. -1 if initial fetch has not been done yet.
 * @returns {number} start index
 * @expose
 * @memberof! oj.PagingControlDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.startIndex = function() {
  return this._startIndex;
};


/**** start delegated functions ****/

/**
 * Return the model object found at the given index of the collection.
 * 
 * @param {number} index Index for which to return the model object. 
 * @return {Object} Model object located at index. If index is out of range, returns null.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.at = function(index)
{
  return this.dataSource.at(index);
};

/**
 * Return the first model object from the collection whose model id value is the given id or cid, or the id or cid from a passed in model
 * @param {Object|string} id ID, cid, or Model (see Model id or cid) for which to return the model object, if found. 
 * @return {Object} First model object in the collection where model.id = id or model.cid = id. If none are found, returns null.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.get = function(id)
{
  return this.dataSource.get(id);
};

/**
 * @export
 * Return whether there is more data which can be fetched.
 * @returns {boolean} whether there is more data
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.hasMore = function()
{
  return this.dataSource.hasMore();
};

/**
 * Return the array index location of the given model object.
 * @param {Object} model Model object to locate 
 * @return {number} The index of the given model object. If the object is not found, returns -1.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.indexOf = function(model)
{
  return this.dataSource.indexOf(model);
};

/**
 * Attach an event handler to the datasource
 * @param {string} eventType eventType supported by the datasource
 * @param {function(Object)} eventHandler event handler function
 * @export
 */
oj.PagingTableDataSource.prototype.on = function(eventType, eventHandler)
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
oj.PagingTableDataSource.prototype.off = function(eventType, eventHandler)
{
  var dataSource = (/** @type {{off: Function}} */ (this.dataSource));
  return dataSource.off(eventType, eventHandler);
};

/**
 * @export
 * Return the size of the data locally in the dataSource. -1 if an initial fetch has not been
 * done yet.
 * @returns {number} size of data
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.size = function()
{
  if (this._currentPageSize != null && this._currentPageSize > 0)
  {
    if (this.dataSource.size() > this._currentPageSize)
    {
      return this._currentPageSize;
    }
  }
  return this.dataSource.size();
};

/**
 * Sort the models in the collection
 * @param {Object=} comparator
 * @param {Object=} options silent: if true, do not fire the sort event
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.sort = function(comparator, options)
{
  this.dataSource.sort(comparator, options);
};

/**
 * @export
 * Return the total size of data available, including server side if not local.
 * @returns {number} total size of data
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.totalSize = function()
{
  return this.dataSource.totalSize();
};

/**** end delegated functions ****/

/*jslint browser: true,devel:true*/
/**
 * @export
 * @class oj.ArrayTableDataSource
 * @classdesc Object representing data used by table component
 * @param {Array|Object|function():Array} data data supported by the components
 * @param {Object|null} options Array of options for the TableDataSource
 * @constructor
 */
oj.ArrayTableDataSource = function(data, options)
{
  // Initialize
  if (!(data instanceof Array) &&
      (typeof (data) != 'function' &&
       typeof (data.subscribe) != 'function'))
  {
    // we only support Array or ko.observableArray. To
    // check for observableArray, we can't do instanceof check because it's
    // a function. So we just check if it contains a subscribe function.
    var errSummary = oj.Translations.getTranslatedString('oj-ojTable.dataInvalidType.summary');
    var errDetail = oj.Translations.getTranslatedString('oj-ojTable.dataInvalidType.detail');
    throw new oj.Message(errSummary, errDetail, oj.Message.SEVERITY_LEVEL['ERROR']);
  }

  oj.ArrayTableDataSource.superclass.constructor.call(this, data, options);

  this._rowSet = new oj.ArrayRowSet(/** @type Array */ (data), this.options);
  this._addRowSetEventListeners();

  if ((options != null && (options['startFetch'] == 'enabled' || options['startFetch'] == null))
    || options == null)
  {
    // do an initial fetch
    var self = this;
    setTimeout(function()
    {
      self.fetch({'startFetch': 'enabled'});
    }, 0);
  }
};

// Subclass from oj.DataSource 
oj.Object.createSubclass(oj.ArrayTableDataSource, oj.TableDataSource, "oj.ArrayTableDataSource");

/**
 * Initializes the instance.
 * @export
 */
oj.ArrayTableDataSource.prototype.Init = function()
{
  oj.ArrayTableDataSource.superclass.Init.call(this);
};

/**
 * Add an instance of oj.Row to the end of the RowSet.
 * @param {Object} m Row object (or array of rows) to add. These can be already-created instance of the oj.Row object, or sets of attribute/values, which will be wrapped by add().
 * @param {Object=} options silent: if set, do not fire an add event<p>
 *                          at: splice the new Row into the RowSet at the value given (at:index) <p>
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.add = function(m, options)
{
  this._rowSet.add(m, options);
};

/**
 * Return the oj.Row object found at the given index of the RowSet.
 * 
 * @param {number} index Index for which to return the Row object. 
 * @return {Object} oj.Row object located at index. If index is out of range, returns null.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.at = function(index)
{
  return this._rowSet.at(index);
};

/**
 * Fetch the RowSet data.
 * @param {Object=} options Options to control fetch<p>
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.fetch = function(options)
{
  options = options || {};
  if (options['startIndex'] != null)
  {
    oj.ArrayTableDataSource.superclass.startIndex.call(this, options['startIndex']);
  }
  var data = this.data;

  if (options['startFetch'] == 'enabled')
  {
    // only do an initial fetch if collection is empty
    if (this._rowSet.isEmpty() ||
      (typeof this._rowSet.size() === 'undefined'))
    {
      this._rowSet.fetch(options);
    }
  }
  else
  {
    this._rowSet.fetch(options);
  }
};

/**
 * Return the first oj.Row object from the RowSet whose Row id value is the given id
 * @param {string} id ID for which to return the Row object, if found. 
 * @return {Object} First Row object in the RowSet where Row.id = id. If none are found, returns null.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.get = function(id)
{
  return this._rowSet.get(id);
};

/**
 * @export
 * Return whether there is more data which can be fetched.
 * @returns {boolean} whether there is more data
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.hasMore = function()
{
  if (this._rowSet != null)
  {
    return this._rowSet.hasMore();
  }
  return false;
};

/**
 * Return the array index location of the given Row object.
 * @param {Object} row oj.Row object to locate 
 * @return {number} The index of the given Row object. If the object is not found, returns -1.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.indexOf = function(row)
{
  return this._rowSet.indexOf(row);
};

/**
 * Remove a Row from the RowSet, if found.
 * @param {Object} m oj.Row object or array of Rows to remove. 
 * @param {Object=} options silent: if set, do not fire a remove event 
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.remove = function(m, options)
{
  this._rowSet.remove(m, options);
};

/**
 * Remove and replace the RowSet's entire list of Rows with a new set of Rows, if provided. Otherwise, empty the RowSet.
 * @param {Object=} data Array of Row objects or attribute/value pair objects with which to replace the RowSet's data. 
 * @param {Object=} options user options, passed to event
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.reset = function(data, options)
{
  this._rowSet.reset(data, options);
};

/**
 * @export
 * Get the length of the RowSet.
 * limit it.
 * @returns {number} length of the RowSet
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.size = function()
{
  return this._rowSet.size();
};

/**
 * Sort the Rows in the RowSet
 * @param {Object=} comparator
 * @param {Object=} options silent: if true, do not fire the sort event
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.sort = function(comparator, options)
{
  this._rowSet['comparator'] = comparator;
  this._rowSet.sort(options);
};

/**
 * @export
 * Return the total size of data available, including server side if not local.
 * @returns {number} total size of data
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.totalSize = function()
{
  return this._rowSet.totalSize();
};

/**
 * Add event listeners to the RowSet
 * @private
 */
oj.ArrayTableDataSource.prototype._addRowSetEventListeners = function()
{
  var self = this;
  (/** @type {{on: Function}} */  (this._rowSet)).on(oj.RowSet.EventType['ADD'], function(event) {
    oj.TableDataSource.superclass.handleEvent.call(self, oj.RowSet.EventType['ADD'], event);
  });
  (/** @type {{on: Function}} */  (this._rowSet)).on(oj.RowSet.EventType['REMOVE'], function(event) {
    oj.TableDataSource.superclass.handleEvent.call(self, oj.RowSet.EventType['REMOVE'], event);
  });
  (/** @type {{on: Function}} */  (this._rowSet)).on(oj.RowSet.EventType['RESET'], function(event) {
    oj.TableDataSource.superclass.handleEvent.call(self, oj.RowSet.EventType['RESET'], event);
  });
  (/** @type {{on: Function}} */  (this._rowSet)).on(oj.RowSet.EventType['SORT'], function(event) {
    oj.TableDataSource.superclass.handleEvent.call(self, oj.RowSet.EventType['SORT'], event);
  });
  (/** @type {{on: Function}} */  (this._rowSet)).on(oj.RowSet.EventType['CHANGE'], function(event) {
    oj.TableDataSource.superclass.handleEvent.call(self, oj.RowSet.EventType['CHANGE'], event);
  });
  (/** @type {{on: Function}} */  (this._rowSet)).on(oj.RowSet.EventType['DESTROY'], function(event) {
    oj.TableDataSource.superclass.handleEvent.call(self, oj.RowSet.EventType['DESTROY'], event);
  });
  (/** @type {{on: Function}} */  (this._rowSet)).on(oj.RowSet.EventType['SYNC'], function(event) {
    oj.TableDataSource.superclass.handleEvent.call(self, oj.RowSet.EventType['SYNC'], event);
  });
  (/** @type {{on: Function}} */  (this._rowSet)).on(oj.RowSet.EventType['ERROR'], function(event) {
    oj.TableDataSource.superclass.handleEvent.call(self, oj.RowSet.EventType['ERROR'], event);
  });
};
/**
 * The ojTable component enhances a HTML table element into one that supports all
 * the features in JET Table.
 * 
 * <h3 id="keyboard-section">
 *   Keyboard interaction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * When existing focus is on a column header.
 * <table class="keyboard-table">
 *   <thead>
 *     <tr>
 *       <th>Key</th>
 *       <th>Use</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td><kbd>Tab</kbd></td>
 *       <td>Navigate to next focusable element on page (outside table).</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+Tab</kbd></td>
 *       <td>Navigate to previous focusable element on page (outside table).</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>DownArrow</kbd></td>
 *       <td>Move focus to the first row.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>UpArrow</kbd></td>
 *       <td>Do nothing.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>LeftArrow</kbd></td>
 *       <td>Move focus to previous column header.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+LeftArrow</kbd></td>
 *       <td>Select and move focus to previous column header.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>RightArrow</kbd></td>
 *       <td>Move focus to next column header.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+RightArrow</kbd></td>
 *       <td>Select and move focus to next column header.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Home</kbd></td>
 *       <td>Move focus to first column header.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>End</kbd></td>
 *       <td>Move focus to last column header.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Space</kbd></td>
 *       <td>Select column.</td>
 *     </tr>
 * </tbody></table>
 * When existing focus is on a row element.
 * <table class="keyboard-table">
 *   <thead>
 *     <tr>
 *       <th>Key</th>
 *       <th>Use</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td><kbd>Tab</kbd></td>
 *       <td>Move focus to next focusable element in row.
 *           <br>If focus is on the last focusable element in the row, move focus to first focusable element in next row.
 *           <br>If focus is on the last focusable element in the last row, move focus to next focusable element on the page (outside table).
 *       </td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+Tab</kbd></td>
 *       <td>Move focus to previous focusable element in row.
 *           <br>If focus is on the first focusable element in the row, move focus to last focusable element in previous row.
 *           <br>If focus is on the first focusable element in the first row, move focus to previous focusable element on the page (outside table).
 *       </td>
 *     </tr>
 *     <tr>
 *       <td><kbd>DownArrow</kbd></td>
 *       <td>Move focus to the next row.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+DownArrow</kbd></td>
 *       <td>Select and move focus to the next row.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>UpArrow</kbd></td>
 *       <td>Move focus to the previous row. If at the first row then move to the column header.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+UpArrow</kbd></td>
 *       <td>Select and move focus to the previous row.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>LeftArrow</kbd></td>
 *       <td>Do nothing.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>RightArrow</kbd></td>
 *       <td>Do nothing.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Home</kbd></td>
 *       <td>Move focus to first row.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>End</kbd></td>
 *       <td>Move focus to last row.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Space</kbd></td>
 *       <td>Select row.</td>
 *     </tr>
 * </tbody></table>
 * 
 * <h3>Events:</h3>
 * <ul>
 *   <li>ojactiverow(event, data) - Type: ojactiverow<p>
 *   Triggered when the active row is changed in the table.
 *   </li>
 *   <li>ojpreactiverow(event, data) - Type: ojpreactiverow<p>
 *   Triggered before the active row is changed in the table. If any listener on
 *   this event throws an exception then the active row will
 *   not be changed.
 *   </li>
 *   <li>ojselect(event, data) - Type: ojselect<p>
 *   Triggered if the user makes a table row or column selection in the UI. Multiple
 *   rows and columns can be selected.
 *   </li>
 *   <li>ojscroll(event, data) - Type: ojscroll<p>
 *   Triggered if the user scrolls the table.
 *   </li>
 * </ul>
 * 
 * <h3>Support for knockout templates:</h3>
 * When knockout bindings are used, the following additional options are available to use
 * knockout templates to customize JET Table.
 * <ul>
 *   <li>columnTemplates<p>
 *   An array of column templates. Each entry must contain the following parameters:
 *   <br>columnId: Points to the column specified in the columns option with the referenced Id.
 *   <br>type: Can be either 'cell' or 'header'.
 *   <br>template: The name of the knockout template to use.
 *   </li>
 *   <li>footerTemplate<p>
 *   The name of the knockout template for the table footer to use.
 *   </li>
 *   <li>rowTemplate<p>
 *   The name of the knockout template for each row to use.
 *   </li>
 * </ul>
 * 
 * @example  <caption>Initialize the table via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;table id="table" data-bind="ojComponent: {component: 'ojTable', data: datasource, columns:
 *      [{headerText: 'Department Id', field: 'DepartmentId'},
 *      {headerText: 'Department Name', field: 'DepartmentName'},
 *      {headerText: 'Location Id', field: 'LocationId'},
 *      {headerText: 'Manager Id', field: 'ManagerId'}]}"&gt;
 *      
 * @example  <caption>Initialize the table with columnTemplates via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;table id="table" data-bind="ojComponent: {component: 'ojTable', data: datasource, columns:
 *      [{headerText: 'Department Id', field: 'DepartmentId'},
 *      {headerText: 'Department Name', field: 'DepartmentName'},
 *      {headerText: 'Location Id', field: 'LocationId'},
 *      {headerText: 'Manager Id', field: 'ManagerId'}]},
 *      {id: 'column5'}],
 *      columnTemplates: [{columnId: 'column5', type: 'header', template: 'oracle_link_hdr'},
 *                        {columnId: 'column5', type: 'cell', template: 'oracle_link'}]}"&gt;
 * &lt;script type="text/html" id="oracle_link_hdr"&gt;
 *    &lt;th style="padding-left: 5px; padding-right: 5px;"&gt;
 *       Oracle Link
 *    &lt;/th&gt;
 * &lt;/script&gt;
 * &lt;script type="text/html" id="oracle_link"&gt;
 *     &lt;td&gt;
 *         &lt;a href="http://www.oracle.com"&gt;Oracle&lt;/a&gt;
 *     &lt;/td&gt;
 * &lt;/script&gt;
 *
 * @example  <caption>Initialize the table with rowTemplate via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;table id="table" data-bind="ojComponent: {component: 'ojTable', data: datasource, columns:
 *      [{headerText: 'Department Id', field: 'DepartmentId'},
 *      {headerText: 'Department Name', field: 'DepartmentName'},
 *      {headerText: 'Location Id', field: 'LocationId'},
 *      {headerText: 'Manager Id', field: 'ManagerId'}]},,
 *      rowTemplate: {template: 'row_tmpl'}}"&gt;
 * &lt;script type="text/html" id="row_tmpl"&gt;
 *   &lt;tr&gt;
 *       &lt;td data-bind="text: DepartmentId"&gt;
 *       &lt;/td&gt;
 *       &lt;td data-bind="text: DepartmentName"&gt;
 *       &lt;/td&gt;
 *       &lt;td data-bind="text: LocationId"&gt;
 *       &lt;/td&gt;
 *       &lt;td data-bind="text: ManagerId"&gt;
 *       &lt;/td&gt;
 *   &lt;/tr&gt;
 * &lt;/script&gt;
 * 
 * @class
 * @constructor
 * @name oj.ojTable
 * @augments oj.baseComponent
 */
(function() {
  oj.__registerWidget("oj.ojTable", $['oj']['baseComponent'],
    {
      version: '1.0.0',
      defaultElement: '<table>',
      widgetEventPrefix: 'oj',
      options:
        {
          /** 
           * Accessibility options. 
           * <p>
           * The following options are supported:
           * <ul>
           *   <li>rowHeader: columnId</li>
           * </ul>
           * The td cells in the column specified by the rowHeader
           * attribute will be assigned an id and then referenced by the
           * headers attribute in the rest of the cells in the row.
           * This is required by screenReaders. By default the first column
           * will be taken as the rowHeader.
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @default <code class="prettyprint">null</code>
           */
          accessibility: null,
          /** 
           * An Array of column renderers to use. 
           * <p>
           * Each entry in the array
           * should be an object which specifies the following options:
           * <ul>
           *   <li>columnId: The column Id of the column the renderer should be applied to</li>
           *   <li>type: 'header' or 'cell'</li>
           *   <li>renderer: cell or header renderer function</li>
           * </ul>
           * <p>
           * For cell renderers:
           * <p>
           * The renderer function that renders the content of the cell. 
           * The function will be passed a context object which contains 
           * the following objects:
           * <ul>
           *   <li>data: The cell data</li>
           *   <li>column: The column object</li>
           *   <li>component: Instance of the component</li>
           *   <li>datasource: Instance of the datasource used by the table </li>
           *   <li>row: Key/value pairs of the row</li>
           *   <li>status: Contains the rowIndex, rowKey, and activeRow</li>
           *   <li>parentElement: Empty rendered <td> element</li>
           * </ul>
           * The function returns  either a String or 
           * a DOM element of the content inside the header. If the developer chooses 
           * to manipulate the cell element directly, the function should return 
           * nothing. If no renderer is specified, the Table will treat the cell data as a String.
           * <p>
           * For header renderers:
           * <p>
           * The renderer function that renders the content of the header. 
           * The function will be passed a context object which contains 
           * the following objects:
           * <ul>
           *   <li>column: The column object</li>
           *   <li>component: Instance of the component</li>
           *   <li>parentElement: Empty rendered TH element</li>
           * </ul>
           * The function returns either a String or 
           * a DOM element of the content inside the header. If the developer chooses 
           * to manipulate the cell element directly, the function should return 
           * nothing. If no renderer is specified, the Table will treat the header data as a String.
           * 
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @default <code class="prettyprint">null</code>
           */
          columnRenderers: null,
          /** 
           * The CSS class to apply to the table container
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @default <code class="prettyprint">null</code>
           */
          containerClassName: null,
          /** 
           * The data to bind to the component. 
           * <p>
           * Must be of type oj.TableDataSource {@link oj.TableDataSource}
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @default <code class="prettyprint">null</code>
           */
          data: null,
          /** 
           * The footer renderer function to use.
           * <p>
           * The renderer function will be passed in an Object which contains the fields:
           * <ul>
           *   <li>component: Instance of the component</li>
           *   <li>parentElement: Empty rendered TFOOT element</li>
           *   <li>datasource: Instance of the datasource used by the table </li>
           * </ul>
           * The function returns either a String or 
           * a DOM element of the content inside the footer. If the developer chooses 
           * to manipulate the footer element directly, the function should return 
           * nothing.
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @default <code class="prettyprint">null</code>
           */
          footerRenderer: null,
          /** 
           * Whether the horizontal gridlines are to be drawn.
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @default <code class="prettyprint">"enabled"</code>
           */
          horizontalGridVisible: 'enabled',
          /** 
           * The row renderer function to use.
           * <p>
           * The renderer function will be passed in an Object which contains the fields:
           * <ul>
           *   <li>component: Instance of the component</li>
           *   <li>row: Key/value pairs of the row</li>
           *   <li>status: Contains the rowIndex, rowKey, and activeRow</li>
           *   <li>parentElement: Empty rendered TR element</li>
           * </ul>
           * The function returns  either a String or 
           * a DOM element of the content inside the row. If the developer chooses 
           * to manipulate the row element directly, the function should return 
           * nothing.
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @default <code class="prettyprint">null</code>
           */
          rowRenderer: null,
          /** 
           * The row and column selection modes. Both can be either single or multiple.
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @default <code class="prettyprint">null</code>
           * @example <caption>Initialize the table with the <code class="prettyprint">selectionMode</code> option specified:</caption>
           * &lt;table id="table" data-bind="ojComponent: {component: 'ojTable', data: datasource, selectionMode: {row: 'multiple', column: 'multiple'}, columns:
           * [{displayIndex: 0, headerText: 'Department Id', field: 'DepartmentId'},
           * {displayIndex: 1, headerText: 'Department Name', field: 'DepartmentName']}"&gt;
           */
          selectionMode: null,
          /** 
           * Whether the vertical gridlines are to be drawn.
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @default <code class="prettyprint">"enabled"</code>
           */
          verticalGridVisible: 'enabled',
          /** 
           * An array of column definitions.
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @default <code class="prettyprint">null</code>
           * @example <caption>Initialize the table with the <code class="prettyprint">columns</code> option specified:</caption>
           * &lt;table id="table" data-bind="ojComponent: {component: 'ojTable', data: datasource, columns:
           * [{headerText: 'Department Id', field: 'DepartmentId'},
           * {headerText: 'Department Name', field: 'DepartmentName']}"&gt;
           */
          columns: [{
              /** 
               * The CSS class to apply to the column cells
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @default <code class="prettyprint">null</code>
               */
              className: null,
              /** 
               * The display order index of the column. 
               * <p>
               * Columns are sorted based on the displayIndex property, columns 
               * without displayIndex are displayed at the end, 
               * in the order in which they appear.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @default <code class="prettyprint">null</code>
               * @example <caption>Initialize the table with the <code class="prettyprint">displayIndex</code> option specified for columns:</caption>
               * &lt;table id="table" data-bind="ojComponent: {component: 'ojTable', data: datasource, columns:
               * [{displayIndex: 0, headerText: 'Department Id', field: 'DepartmentId'},
               * {displayIndex: 1, headerText: 'Department Name', field: 'DepartmentName']}"&gt;
               */
              displayIndex: null,
              /** 
               * The data field this column refers to. 
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @default <code class="prettyprint">null</code>
               */
              field: null,
              /** 
               * The CSS class to apply to the column header text.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @default <code class="prettyprint">null</code>
               */
              headerClassName: null,
              /** 
               * The CSS styling to apply to the column header text.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @default <code class="prettyprint">null</code>
               */
              headerStyle: null,
              /** 
               * Text to display in the header of the column.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @default <code class="prettyprint">null</code>
               */
              headerText: null,
              /** 
               * The identifier for the column
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @default <code class="prettyprint">null</code>
               */
              id: null,
              /** 
               * Indicates whether the columns displays a visual 
               * indication of required user input.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @default <code class="prettyprint">"disabled"</code>
               */
              showRequired: 'disabled',
              /** 
               * Whether or not the column is sortable. 
               * <p>
               * A sortable column has a clickable header that (when clicked) 
               * sorts the table by that column's property. Note that 
               * in order for a column to be sortable, this attribute 
               * must be set to "true" and the underlying model must 
               * support sorting by this column's property.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @default <code class="prettyprint">"disabled"</code>
               */
              sortable: 'disabled',
              /** 
               * This is the property that the framework uses to 
               * sort the Table's data.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @default <code class="prettyprint">null</code>
               */
              sortProperty: null,
              /** 
               * The CSS styling to apply to the column cells
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @default <code class="prettyprint">null</code>
               */
              style: null
            }]
        },
      /**
       * @private
       * @const
       */
      _BUNDLE_KEY:
        {
          _MSG_FETCHING_DATA:                             'msgFetchingData',
          _MSG_NO_DATA:                                   'msgNoData',
          _LABEL_SELECT_COLUMN:                           'labelSelectColumn',
          _LABEL_SELECT_ROW:                              'labelSelectRow',
          _LABEL_REQUIRED:                                'labelRequired',
          _ERR_COLUMN_RENDERER_COLUMN_NOT_FOUND_SUMMARY:  'columnRendererColumnNotFound.summary',
          _ERR_COLUMN_RENDERER_COLUMN_NOT_FOUND_DETAIL:   'columnRendererColumnNotFound.detail',
          _ERR_COLUMN_RENDERER_OPTION_REQUIRED_SUMMARY:   'columnRendererOptionRequired.summary',
          _ERR_COLUMN_RENDERER_OPTION_REQUIRED_DETAIL:    'columnRendererOptionRequired.detail',
          _ERR_PREACTIVEROW_ERROR_SUMMARY:                'preActiveRowError.summary',
          _ERR_PREACTIVEROW_ERROR_DETAIL:                 'preActiveRowError.detail',
          _ERR_ACTIVEROW_UNAVAILABLE_INDEX_SUMMARY:       'activeRowUnavailableIndex.summary',
          _ERR_ACTIVEROW_UNAVAILABLE_INDEX_DETAIL:        'activeRowUnavailableIndex.detail',
          _ERR_REFRESHROW_INVALID_INDEX_SUMMARY:          'refreshRowInvalidRowIndex.summary',
          _ERR_REFRESHROW_INVALID_INDEX_DETAIL:           'refreshRowInvalidRowIndex.detail',
          _ERR_DATA_INVALID_TYPE_SUMMARY:                 'dataInvalidType.summary',
          _ERR_DATA_INVALID_TYPE_DETAIL:                  'dataInvalidType.detail'
        },
      /**
       * @private
       * @const
       * @type {string}
       */
      _COLUMN_HEADER_ID:                                  '_headerColumn',
      /**
       * @private
       * @const
       * @type {string}
       */
      _COLUMN_HEADER_TEXT_ID:                             '_headerColumnText',
      /**
       * @private
       * @const
       * @type {string}
       */
      _COLUMN_HEADER_ASC_ID:                              '_headerColumnAsc',
      /**
       * @private
       * @const
       * @type {string}
       */
      _COLUMN_HEADER_DSC_ID:                              '_headerColumnDsc',
      /**
       * @private
       * @const
       * @type {string}
       */
      _COLUMN_HEADER_ROW_SELECT_ID:                       '_hdrColRowSel',
      /**
       * @private
       * @const
       * @type {string}
       */
      _COLUMN_HEADER_ID_PREFIX:                           '_hdrCol',
      /**
       * @private
       * @const
       */
      _MARKER_STYLE_CLASSES:
        {
          _WIDGET:                                        'oj-widget',
          _ACTIVE:                                        'oj-active',
          _CLICKABLE_ICON:                                'oj-clickable-icon',
          _DISABLED:                                      'oj-disabled',
          _ENABLED:                                       'oj-enabled',
          _FOCUS:                                         'oj-focus',
          _HOVER:                                         'oj-hover',
          _SELECTED:                                      'oj-checked'
        },
      /**
       * @private
       * @const
       */
      _CSS_CLASSES:
        {
          _CHECKBOX_ACC_SELECT_COLUMN_CLASS:              'oj-table-checkbox-acc-select-column',
          _CHECKBOX_ACC_SELECT_ROW_CLASS:                 'oj-table-checkbox-acc-select-row',
          _TABLE_CONTAINER_CLASS:                         'oj-table-container',
          _TABLE_SCROLLER_CLASS:                          'oj-table-scroller',
          _TABLE_CLASS:                                   'oj-table',
          _TABLE_FOOTER_CLASS:                            'oj-table-footer',
          _TABLE_HEADER_CLASS:                            'oj-table-header',
          _TABLE_HEADER_ROW_CLASS:                        'oj-table-header-row',
          _COLUMN_HEADER_CLASS:                           'oj-table-column-header',
          _COLUMN_HEADER_SELECTOR_CLASS:                  'oj-table-column-header-selector',
          _COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS:         'oj-table-column-header-acc-select-column',
          _COLUMN_HEADER_ACC_SELECT_ROW_CLASS:            'oj-table-column-header-acc-select-row',
          _COLUMN_HEADER_ROW_CLASS:                       'oj-table-column-header-row',
          _COLUMN_HEADER_SHOW_REQUIRED_CLASS:             'oj-table-column-header-show-required',
          _COLUMN_HEADER_TEXT_CLASS:                      'oj-table-column-header-text',
          _COLUMN_HEADER_ASC_CLASS:                       'oj-table-column-header-asc',
          _COLUMN_HEADER_DSC_CLASS:                       'oj-table-column-header-dsc',
          _COLUMN_HEADER_ASC_LINK_CLASS:                  'oj-table-column-header-asc-link',
          _COLUMN_HEADER_DSC_LINK_CLASS:                  'oj-table-column-header-dsc-link',
          _COLUMN_HEADER_ASC_ICON_CLASS:                  'oj-table-column-header-asc-icon',
          _COLUMN_HEADER_DSC_ICON_CLASS:                  'oj-table-column-header-dsc-icon',
          _TABLE_BODY_CLASS:                              'oj-table-body',
          _TABLE_DATA_ROW_CLASS:                          'oj-table-body-row',
          _TABLE_DATA_ROW_SELECTOR_CLASS:                 'oj-table-body-row-selector',
          _TABLE_DATA_CELL_CLASS:                         'oj-table-data-cell',
          _TABLE_DATA_CELL_ACC_SELECT_CLASS:              'oj-table-data-cell-acc-select',
          _TABLE_DATA_CELL_VGRID_LINES_CLASS:             'oj-table-data-cell-vgrid-lines',
          _TABLE_DATA_CELL_HGRID_LINES_CLASS:             'oj-table-data-cell-hgrid-lines',
          _TABLE_STATUS_MESSAGE_CLASS:                    'oj-table-status-message',
          _TABLE_NO_DATA_MESSAGE_CLASS:                   'oj-table-no-data-message',
          _WIDGET_ICON_CLASS:                             'oj-widget-icon',
          _HIDDEN_CONTENT_ACC_CLASS:                      'oj-helper-hidden-accessible'
        },
      /**
       * @private
       * @const
       * @type {string}
       */
      _OPTION_ENABLED:                                    'enabled',
      /**
       * @private
       * @const
       * @type {string}
       */
      _OPTION_DISABLED:                                   'disabled',
      /**
       * @private
       * @const
       */
      _OPTION_SELECTION_MODES:
        {
          _SINGLE:                                        'single',
          _MULTIPLE:                                      'multiple'
        },
      /**
       * @private
       * @const
       */
      _COLUMN_SORT_ORDER:
        {
          _ASCENDING:                                     'ascending',
          _DESCENDING:                                    'descending'
        },
      /**
       * @private
       * @const
       */
      _KEYBOARD_CODES:
        {
          _KEYBOARD_CODE_CTRL:                            17,
          _KEYBOARD_CODE_SHIFT:                           16,
          _KEYBOARD_CODE_SPACEBAR:                        32,
          _KEYBOARD_CODE_ENTER:                           13,
          _KEYBOARD_CODE_UP:                              38,
          _KEYBOARD_CODE_DOWN:                            40,
          _KEYBOARD_CODE_LEFT:                            37,
          _KEYBOARD_CODE_RIGHT:                           39,
          _KEYBOARD_CODE_HOME:                            36,
          _KEYBOARD_CODE_END:                             35,
          _KEYBOARD_CODE_TAB:                             9,
          _KEYBOARD_CODE_ESC:                             27,
          _KEYBOARD_MODIFIER_SHIFT:                       'shiftKey'
        },
      /**** start Public APIs ****/

      /**
       * Get or update the active row. If called with no arguments then returns
       * the current active row index. If called iwth -1 then resets the activeRow.
       * If selection argument is specified then sets the active row. A preactiverow 
       * event is fired before the active row is changed,. If that event results in
       * an error then the actove row will not be changed.
       * @expose
       * @memberof! oj.ojTable
       * @instance
       * @param {number} index  Row index. 
       * @return {number} Index of active row or -1 if no active row.
       * @throws {Error}
       * @export
       * @example <caption>Invoke the <code class="prettyprint">activeRow</code> method:</caption>
       * $( ".selector" ).ojTable( "activeRow", 1 );
       */
      'activeRow': function(index)
      {
        var data = this._getData();
        // if no data then bail
        if (!data)
        {
          return -1;
        }

        if (index != null)
        {
          if (this._activeRowIndex != index)
          {
            // if new active row is different from the existing one then trigger
            // an event
            var oldIndex = this._activeRowIndex;
            try
            {
              this._trigger('preactiverow', null, {'newRowIndex': index, 'oldRowIndex': oldIndex});
            }
            catch (err)
            {
              // caught an error. Do not change active row
              var errSummary = this.getTranslatedString(this._BUNDLE_KEY._ERR_PREACTIVEROW_ERROR_SUMMARY);
              var errDetail = this.getTranslatedString(this._BUNDLE_KEY._ERR_PREACTIVEROW_ERROR_DETAIL, err.toString());
              throw new oj.Message(errSummary, errDetail, oj.Message.SEVERITY_LEVEL['ERROR']);
            }
            this._activeRowIndex = index;
            this._trigger('activerow', null, {'newRowIndex': index, 'oldRowIndex': oldIndex});
            this._setRowFocus(index, true, null);
          }
          return index;
        }
        else if (this._activeRowIndex != null)
        {
          return this._activeRowIndex;
        }

        return -1;
      },
      /**
       * Get the column metadata
       * @expose
       * @memberof! oj.ojTable
       * @instance
       * @param {string} columnId  Column Id of the column. Null returns all columns
       * @return {Object|null} Column metadata or null if not found
       * @export
       * @example <caption>Invoke the <code class="prettyprint">columnMetaData</code> method:</caption>
       * $( ".selector" ).ojTable( "columnMetaData", "columnId1" );
       */
      'columnMetaData': function(columnId)
      {
        var columns = this._getColumnDefs();

        if (columnId == null)
        {
          return columns;
        }
        else
        {
          var i;
          for (i = 0; i < columns.length; i++)
          {
            if (columns[i].id == columnId)
            {
              return columns[i];
            }
          }
        }
        return null;
      },
      /**
       * Refresh the table.
       * @expose
       * @memberof! oj.ojTable
       * @instance
       * @export
       * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
       * $( ".selector" ).ojTable( "refresh" );
       */
      'refresh': function()
      {
        this._super();
        // When a programmatic refresh is called, clear any cached
        // table dimenions because they may have been re-specified
        this._clearCachedTableDimensions();
        this._refresh();
      },
      /**
       * Refresh a row in the table.
       * @expose
       * @memberof! oj.ojTable
       * @instance
       * @param {number} rowIdx  Index of the row to refresh.
       * @return {boolean} true if refreshed, false if not
       * @throws {Error}
       * @export
       * @example <caption>Invoke the <code class="prettyprint">refreshRow</code> method:</caption>
       * $( ".selector" ).ojTable( "refreshRow", 1 );
       */
      'refreshRow': function(rowIdx)
      {
        var data = this._getData();
        // if no data then bail
        if (!data)
        {
          return false;
        }

        if (isNaN(rowIdx) || rowIdx < 0 || rowIdx > data.size() - 1)
        {
          // validate rowIdx value
          var errSummary = this.getTranslatedString(this._BUNDLE_KEY._ERR_REFRESHROW_INVALID_INDEX_SUMMARY);
          var errDetail = this.getTranslatedString(this._BUNDLE_KEY._ERR_REFRESHROW_INVALID_INDEX_DETAIL, rowIdx.toString());
          throw new oj.Message(errSummary, errDetail, oj.Message.SEVERITY_LEVEL['ERROR']);
        }

        // get row at rowIdx
        var row = data.at(rowIdx);
        if (row == null)
        {
          return false;
        }
        // refresh table row DOM with row
        try
        {
          this._refreshTableBodyRow(rowIdx, row);
        }
        catch (e)
        {
          throw e;
        }
        return true;
      },
      /**
       * Get or update the table selection. If called with no arguments then returns
       * the current selection which is an Array of ranges. Ranges consist of start and end
       * objects which contain row and column indexes.
       * If selection argument is specified then sets the selection.
       * @expose
       * @memberof! oj.ojTable
       * @instance
       * @param {Array} selection  Array of range objects. 
       * @return {Array|null} array of Range objects or null if no selection
       * @export
       * @example <caption>Invoke the <code class="prettyprint">selection</code> method:</caption>
       * $( ".selector" ).ojTable( "selection", mySelection );
       */
      'selection': function(selection)
      {
        if (selection != null)
        {
          // first clear currently selected rows
          this._clearSelectedRows();
          // we need to set the selection
          var i, j, rangeObj, startRowIdx, endRowIdx, startColumnIdx, endColumnIdx;
          for (i = 0; i < selection.length; i++)
          {
            rangeObj = selection[i];

            if (rangeObj['start'] == null || rangeObj['end'] == null)
            {
              console.log('Error: Invalid range object in selection. Both start and end objects must be specified');
              return null;
            }

            startRowIdx = rangeObj['start']['row'];
            endRowIdx = rangeObj['end']['row'];
            startColumnIdx = rangeObj['start']['column'];
            endColumnIdx = rangeObj['end']['column'];

            if (startRowIdx != null && endRowIdx != null && startColumnIdx != null && endColumnIdx != null)
            {
              console.log('Error: Invalid range object in selection - Can only support row or column selection. Not both');
              return null;
            }
            if (startRowIdx != null && endRowIdx != null)
            {
              // this is a row based selection
              for (j = startRowIdx; j <= endRowIdx; j++)
              {
                try
                {
                  this._setRowSelection(j, true, null);
                }
                catch (e)
                {
                  console.log('Error: ' + e);
                }
              }
            }
            else if (startColumnIdx != null && endColumnIdx != null)
            {
              // this is a column based selection
              for (j = startColumnIdx; j <= endColumnIdx; j++)
              {
                try
                {
                  this._setHeaderColumnSelection(j, true, null);
                }
                catch (e)
                {
                  console.log('Error: ' + e);
                }
              }
            }
            else
            {
              console.log('Error: Invalid range object in selection - \n\
                                  start row: ' + startRowIdx + '\n\
                                  end row: ' + endRowIdx + '\n\
                                  start column: ' + startColumnIdx + '\n\
                                  end column: ' + endColumnIdx);
              return null;
            }
          }
          return this['selection']();
        }
        else
        {
          var selectedRowIdxs = this._getSelectedRowIdxs();
          var selectedColumnIdxs = this._getSelectedHeaderColumnIdxs();
          var selectionIdxs = null;
          var rowSelection = true;
          if (selectedRowIdxs != null && selectedRowIdxs.length > 0)
          {
            selectionIdxs = selectedRowIdxs;
          }
          else if (selectedColumnIdxs != null && selectedColumnIdxs.length > 0)
          {
            selectionIdxs = selectedColumnIdxs;
            rowSelection = false;
          }
          else
          {
            return null;
          }

          var rangeArray = [];

          // first count the number of ranges we have by seeing how many
          // non-continguous selections we have
          var rangeCount = 0;
          var previousIdx = null;
          var rangeObj, selectionIdx;
          var i;
          for (i = 0; i < selectionIdxs.length; i++)
          {
            selectionIdx = selectionIdxs[i];
            if (i == 0)
            {
              rangeObj = [];
              rangeObj['start'] = [];
              rangeObj['end'] = [];
              if (rowSelection)
              {
                rangeObj['start']['row'] = selectionIdx;
                rangeObj['end']['row'] = selectionIdx;
              }
              else
              {
                rangeObj['start']['column'] = selectionIdx;
                rangeObj['end']['column'] = selectionIdx;
              }
              rangeArray[0] = rangeObj;
            }
            else
            {
              rangeObj = rangeArray[rangeCount];
              if (rowSelection)
              {
                rangeObj['end']['row'] = selectionIdx;
              }
              else
              {
                rangeObj['end']['column'] = selectionIdx;
              }
              if (selectionIdx != previousIdx + 1)
              {
                if (rowSelection)
                {
                  rangeObj['end']['row'] = previousIdx;
                  rangeObj = [];
                  rangeObj['start'] = [];
                  rangeObj['end'] = [];
                  rangeObj['start']['row'] = selectionIdx;
                  rangeObj['end']['row'] = selectionIdx;
                }
                else
                {
                  rangeObj['end']['column'] = previousIdx;
                  rangeObj = [];
                  rangeObj['start'] = [];
                  rangeObj['end'] = [];
                  rangeObj['start']['column'] = selectionIdx;
                  rangeObj['end']['column'] = selectionIdx;
                }
                rangeCount++;
                rangeArray[rangeCount] = rangeObj;
              }
            }
            previousIdx = selectionIdx;
          }
          return rangeArray;
        }
      },
      /**
       * Get or update scroll left position.
       * @expose
       * @memberof! oj.ojTable
       * @instance
       * @param {number} value  ScrollLeft value. 
       * @return {number|null} ScrollLeft value. 
       * @export
       * @example <caption>Invoke the <code class="prettyprint">scrollLeft</code> method:</caption>
       * $( ".selector" ).ojTable( "scrollLeft", 100 );
       */
      'scrollLeft': function(value)
      {
        if (value != null)
        {
          if (isNaN(value) || value < 0)
          {
            // validate value
            console.log('Error: Invalid scrollLeft value: ' + value);
            return null;
          }
          this._getScroller().scrollLeft(value);
        }
        return this._getScroller().scrollLeft();
      },
      /**
       * Get or update scroll top position.
       * @expose
       * @memberof! oj.ojTable
       * @instance
       * @param {number} value  ScrollTop value. 
       * @return {number|null} ScrollTop value. 
       * @export
       * @example <caption>Invoke the <code class="prettyprint">scrollTop</code> method:</caption>
       * $( ".selector" ).ojTable( "scrollTop", 100 );
       */
      'scrollTop': function(value)
      {
        if (value != null)
        {
          if (isNaN(value) || value < 0)
          {
            // validate value
            console.log('Error: Invalid scrollTop value: ' + value);
            return null;
          }
          this._getScroller().scrollTop(value);
        }
        return this._getScroller().scrollTop();
      },
      /**** end Public APIs ****/

      /**** start internal widget functions ****/

      /**
       * @override
       * @private
       */
      _init: function()
      {
        this._super();
        this._clearCachedMetadata();
        this._clearCachedDataMetadata();
        this._refresh();
        // register event listeners for table on the datasource so that the table
        // component is notified when rows are added, deleted, etc from the datasource.
        this._registerDomEventListeners();
        this._registerDataSourceEventListeners();
      },
      /**
       * @override
       * @private
       */
      _create: function()
      {
        this._super();
        this._registerCustomEvents();
        this._draw();
        this._on(this._events);
      },
      /**
       * @override
       * @private
       */
      _destroy: function()
      {
        var data = this._getData();
        // unregister the listeners on the datasource
        if (this._dataSourceEventHandlers != null && data != null)
        {
          var i;
          for (i = 0; i < this._dataSourceEventHandlers.length; i++)
            data.off(this._dataSourceEventHandlers[i].eventType, this._dataSourceEventHandlers[i].eventHandler);
        }
        
        this._getTableBody().removeAttr(oj.Components._OJ_CONTAINER_ATTR);

        this.element.children().remove('.' + this._CSS_CLASSES._TABLE_HEADER_CLASS);
        this.element.children().remove('.' + this._CSS_CLASSES._TABLE_BODY_CLASS);
        this.element.children().remove('.' + this._CSS_CLASSES._TABLE_STATUS_MESSAGE_CLASS);

        var tableContainer = this._getTableContainer();
        if (tableContainer != null)
        {
          // add the table back tgo the parent element and remove the 
          // tableContainer div
          tableContainer[0].parentNode.appendChild(this.element);
          tableContainer[0].parentNode.removeChild(tableContainer[0]);
        }
        this.element.removeClass(this._CSS_CLASSES._TABLE_CLASS);
      },
      /**
       * @override
       * @private
       */
      _draw: function()
      {
        var options = this.options;

        this._tableHeight = this.element.height();
        this._tableWidth = this.element.width();

        // IE9 and below does not support tbody scrolling so we have to scroll
        // using the scroller div. Set a flag to let the rest of the code know whether
        // to do so.
        this._useFallbackScrolling = this._isIE() && this._isIE() < 10 ? true : false;

        // add main css class to element
        this.element.addClass(this._CSS_CLASSES._TABLE_CLASS);
        // set the tabindex
        this.element.attr('tabindex', '0');
        // set focusable
        this._focusable(this.element);
        // set focusable
        this._hoverable(this.element);
        // create all of our DOM. These _create* calls create skeleton DOM elements
        // the content is populated later.
        this._createTableContainer();
        // create the context menu
        this._createContextMenu();
        // we only need a scroller div if we are using fallback scrolling
        if (this._useFallbackScrolling)
        {
          this._createTableDivScroller();
        }

        if (!this._isTableHeaderless())
        {
          this._createTableHeader();
        }
        if (!this._isTableFooterless())
        {
          this._createTableFooter();
        }
        this._createTableBody();
        this._createTableNoDataMessage();
        this._createTableStatusMessage();

        // populate the table header DOM with header content
        this._refreshTableHeader();

        // populate the table footer DOM with footer content
        this._refreshTableFooter();

        // resize the table dimensions to accomodate the completed tableheader
        this._refreshTableDimensions();

        if (this.options.disabled)
        {
          this.disable();
        }
      },
      /**
       * @override
       * @private
       */
      _events:
        {
          /**
           * Reset the keyboard state on blur and set the inactive
           * selected rows
           */
          'blur': function(event)
          {
            // make sure the blur isn't for a focus to an element within
            // the table
            var table = this._getTable();
            if (table.has(event.relatedTarget).length > 0)
            {
              return;
            }
            // In FF we check explicitOriginalTarget
            else if (event.originalEvent != null && event.originalEvent.explicitOriginalTarget == table[0])
            {
              return;
            }

            this._clearKeyboardKeys();
            this._setTableNavigationMode(false);
          },
          /**
           * Capture acc selected column event
           */
          'change .oj-table-checkbox-acc-select-column': function(event)
          {
            var columnIdx = this._getElementColumnIdx($(event.currentTarget));
            var selected = $(event.currentTarget).is(':checked');
            // if selected then focus on the column
            if (selected)
            {
              this._setHeaderColumnFocus(columnIdx, true, null);
            }
            this._setHeaderColumnSelection(columnIdx, selected, event.currentTarget, event);
          },
          /**
           * Capture acc selected row event
           */
          'change .oj-table-checkbox-acc-select-row': function(event)
          {
            var rowIdx = this._getElementRowIdx($(event.currentTarget));
            var selected = $(event.currentTarget).is(':checked');
            // if selected then focus on the row
            if (selected)
            {
              this._setRowFocus(rowIdx, true, null);
            }
            this._setRowSelection(rowIdx, selected, event.currentTarget, event);
          },
          /**
           * Capture keyboard down events
           */
          'keydown': function(event)
          {
            // ignore key event on the footer
            if (this._getTableFooter().has(event.target).length > 0)
            {
              return;
            }
            this._addKeyboardKey(event.keyCode);
            // process single or two key events
            if (this._getKeyboardKeys().length == 1 ||
              this._getKeyboardKeys().length == 2)
            {
              if (this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_UP) ||
                this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_DOWN) ||
                this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_SPACEBAR) ||
                this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_HOME) ||
                this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_END))
              {
                event.preventDefault();
                event.stopPropagation();
              }

              if (this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_UP) ||
                this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_DOWN))
              {
                this._handleKeydownUpDown(event);
              }
              else if (this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_LEFT) ||
                this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_RIGHT))
              {
                this._handleKeydownLeftRight(event);
              }
              else if (this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_TAB))
              {
                this._handleKeydownTab(event);
              }
            }
          },
          /**
           * Capture keyboard up events
           */
          'keyup': function(event)
          {
            // ignore key event on the footer
            if (this._getTableFooter().has(event.target).length > 0)
            {
              return;
            }
            // process single or 2 key events
            if (this._getKeyboardKeys().length == 1)
            {
              var keyboardCode1 = this._getKeyboardKeys()[0];

              if (keyboardCode1 == this._KEYBOARD_CODES._KEYBOARD_CODE_SPACEBAR)
              {
                this._handleKeyupSpacebar(event);
              }
              else if (keyboardCode1 == this._KEYBOARD_CODES._KEYBOARD_CODE_ENTER)
              {
                this._handleKeyupEnter(event);
              }
              else if (keyboardCode1 == this._KEYBOARD_CODES._KEYBOARD_CODE_HOME)
              {
                this._handleKeyupHome(event);
              }
              else if (keyboardCode1 == this._KEYBOARD_CODES._KEYBOARD_CODE_END)
              {
                this._handleKeyupEnd(event);
              }
              else if (keyboardCode1 == this._KEYBOARD_CODES._KEYBOARD_CODE_ESC)
              {
                this._handleKeyupEsc(event);
              }
            }
            // remove the keycode from our internal list of pressed keys.
            this._removeKeyboardKey(event.keyCode);
          },
          /**
           * show the ascending/descending links when the mouse 
           * enters a column header
           */
          'mouseenter .oj-table-column-header': function(event)
          {
            // get the column index of the header element
            var columnIdx = this._getElementColumnIdx($(event.currentTarget));
            // show the asc/dsc links for the header
            this._showTableHeaderColumnSortLink(columnIdx, true);
            this._showTableHeaderColumnSortLink(columnIdx, false);
          },
          /**
           * hide the ascending/descending links when the mouse 
           * leaves a column header
           */
          'mouseleave .oj-table-column-header': function(event)
          {
            // get the column index of the header element
            var columnIdx = this._getElementColumnIdx($(event.currentTarget));
            // hide the asc/dsc links for the header
            this._hideTableHeaderColumnSortLink(columnIdx, true);
            this._hideTableHeaderColumnSortLink(columnIdx, false);
          },
          /**
           * show the row hover when the mouse enters a table cell
           */
          'mouseenter .oj-table-data-cell': function(event)
          {
            // get the row index of the cell element
            var rowIdx = this._getElementRowIdx($(event.currentTarget));
            // set row hover
            this._updateRowCellsClass(rowIdx, {hover: true});
          },
          /**
           * hide the row hover when the mouse leaves a table cell
           */
          'mouseleave .oj-table-data-cell': function(event)
          {
            // get the row index of the cell element
            var rowIdx = this._getElementRowIdx($(event.currentTarget));
            // unset row hover
            this._updateRowCellsClass(rowIdx, {hover: false});
          },
          /**
           * invoke a sort on the column data when the mouse clicks the ascending link
           */
          'click .oj-table-column-header-asc-link': function(event)
          {
            this._checkFocus();
            var columnIdx = this._getElementColumnIdx($(event.target));
            this._handleSortTableHeaderColumn(columnIdx, true);
            event.preventDefault();
            event.stopPropagation();
          },
          /**
           * invoke a sort on the column data when the mouse clicks the descending link
           */
          'click .oj-table-column-header-dsc-link': function(event)
          {
            this._checkFocus();
            var columnIdx = this._getElementColumnIdx($(event.target));
            this._handleSortTableHeaderColumn(columnIdx, false);
            event.preventDefault();
            event.stopPropagation();
          },
          /**
           * set the row focus or selection when the mouse clicks on a cell.
           * Ctrl + click results in selection and focus. Plain click results in focus.
           * Plain click on a selected row removes the selection.
           */
          'click .oj-table-data-cell': function(event)
          {
            this._checkFocus();
            // get the row index of the cell element
            var rowIdx = this._getElementRowIdx($(event.currentTarget));
            // set the row focus
            this._setRowFocus(rowIdx, true, event.currentTarget);
            // check if we are selecting
            if (this._getKeyboardKeys().length == 1)
            {
              if (this._getKeyboardKeys()[0] == this._KEYBOARD_CODES._KEYBOARD_CODE_SHIFT)
              {
                var lastSelectedRowIdx = this._getLastRowSelection();
                if (lastSelectedRowIdx != null)
                {
                  // shift selection is always from the last selected row
                  if (rowIdx < lastSelectedRowIdx)
                  {
                    var i;
                    for (i = rowIdx; i <= lastSelectedRowIdx; i++)
                    {
                      this._setRowSelection(i, true, event.currentTarget, event);
                    }
                  }
                  else
                  {
                    var i;
                    for (i = lastSelectedRowIdx; i <= rowIdx; i++)
                      this._setRowSelection(i, true, event.currentTarget, event);
                  }
                }
              }
              else if (this._getKeyboardKeys()[0] == this._KEYBOARD_CODES._KEYBOARD_CODE_CTRL)
              {
                this._setRowSelection(rowIdx, !this._getRowSelection(rowIdx), event.currentTarget, event);
              }
            }
            else if (this._getKeyboardKeys().length == 0)
            {
              this._setRowSelection(rowIdx, !this._getRowSelection(rowIdx), event.currentTarget, event);
            }
          },
          /**
           * set the column header selection and focus. Plain click results in
           * focus and selection. If Ctrl is not pressed then we have single column selection.
           */
          'click .oj-table-column-header': function(event)
          {
            this._checkFocus();
            // get the column index
            var columnIdx = this._getElementColumnIdx($(event.currentTarget));
            // set the column focus
            this._setHeaderColumnFocus(columnIdx, true, event.currentTarget);
            // check if we are selecting
            if (this._getKeyboardKeys().length == 1)
            {
              if (this._getKeyboardKeys()[0] == this._KEYBOARD_CODES._KEYBOARD_CODE_SHIFT)
              {
                var lastSelectedColumnIdx = this._getLastHeaderColumnSelection();
                if (lastSelectedColumnIdx != null)
                {
                  // shift selection is always from the last selected column
                  if (columnIdx < lastSelectedColumnIdx)
                  {
                    var i;
                    for (i = columnIdx; i <= lastSelectedColumnIdx; i++)
                    {
                      this._setHeaderColumnSelection(i, true, event.currentTarget, event);
                    }
                  }
                  else
                  {
                    var i;
                    for (i = lastSelectedColumnIdx; i <= columnIdx; i++)
                      this._setHeaderColumnSelection(i, true, event.currentTarget, event);
                  }
                }
              }
              else if (this._getKeyboardKeys()[0] == this._KEYBOARD_CODES._KEYBOARD_CODE_CTRL)
              {
                this._setHeaderColumnSelection(columnIdx, !this._getHeaderColumnSelection(columnIdx), event.currentTarget, event);
              }
            }
            else if (this._getKeyboardKeys().length == 0)
            {
              this._setHeaderColumnSelection(columnIdx, !this._getHeaderColumnSelection(columnIdx), event.currentTarget, event);
            }
            event.preventDefault();
          }
        },
      /**
       * @override
       * @private
       */
      _refresh: function()
      {
        var self = this;
        setTimeout(function()
        {
          self._refreshAll()
        }, 0);
      },
      /**
       * @override
       * @private
       */
      _setOption: function(key, value)
      {
        this._super(key, value);
        this._refresh();
      },
      /**** end internal widget functions ****/

      /**** start internal functions ****/

      /**
       * Add a keyCode to internally track pressed keys. keyCodes should be added on 
       * mouse down and then later removed on mouse up.
       * @param {number} keyCode  KeyCode of the keyboard key.
       * @private
       */
      _addKeyboardKey: function(keyCode)
      {
        var foundCode = false;
        for (var prop in this._KEYBOARD_CODES)
        {
          if (this._KEYBOARD_CODES.hasOwnProperty(prop))
          {
            if (this._KEYBOARD_CODES[prop] == keyCode)
            {
              foundCode = true;
            }
          }
        }

        if (!foundCode)
        {
          // only add keys we are interested in
          return;
        }

        var keyboardKeys = this._getKeyboardKeys();
        var found = false;
        var i;
        for (i = 0; i < keyboardKeys.length; i++)
        {
          if (keyboardKeys[i] == keyCode)
          {
            found = true;
            break;
          }
        }
        if (!found)
        {
          keyboardKeys.push(keyCode);
        }
      },
      /**
       * Check the column renderer metadata
       * @private
       */
      _checkColumnRendererMetadata: function(type)
      {
        var columns = this._getColumnDefs();
        if (columns && columns.length > 0)
        {
          var columnRenderers = this.options['columnRenderers'];
          if (columnRenderers)
          {
            var i, j, column, foundMatchingColumn, errSummary, errDetail;
            for (i = 0; i < columnRenderers.length; i++)
            {
              if (columnRenderers[i]['type'] == null)
              {
                errSummary = this.getTranslatedString(this._BUNDLE_KEY._ERR_COLUMN_RENDERER_OPTION_REQUIRED_SUMMARY, 'type');
                errDetail = this.getTranslatedString(this._BUNDLE_KEY._ERR_COLUMN_RENDERER_OPTION_REQUIRED_DETAIL);
                console.log(errSummary + errDetail);
              }
              if (columnRenderers[i]['renderer'] == null)
              {
                errSummary = this.getTranslatedString(this._BUNDLE_KEY._ERR_COLUMN_RENDERER_OPTION_REQUIRED_SUMMARY, 'renderer');
                errDetail = this.getTranslatedString(this._BUNDLE_KEY._ERR_COLUMN_RENDERER_OPTION_REQUIRED_DETAIL);
                console.log(errSummary + errDetail);
              }

              if (columnRenderers[i]['type'] == type)
              {
                foundMatchingColumn = false;
                for (j = 0; j < columns.length; j++)
                {
                  column = columns[j];
                  if (columnRenderers[i]['columnId'] == column.id)
                  {
                    foundMatchingColumn = true;
                    break;
                  }
                }
                if (!foundMatchingColumn)
                {
                  errSummary = this.getTranslatedString(this._BUNDLE_KEY._ERR_COLUMN_RENDERER_COLUMN_NOT_FOUND_SUMMARY, column.id);
                  errDetail = this.getTranslatedString(this._BUNDLE_KEY._ERR_COLUMN_RENDERER_COLUMN_NOT_FOUND_DETAIL);
                  console.log(errSummary + errDetail);
                }
              }
            }
          }
        }
      },
      /**
       * Check the focus is on the table or descendent focusable element
       * @private
       */
      _checkFocus: function()
      {
        // set focus on the table
        if (!this._isFocused())
        {
          // only focus if focus is not on some child element of table
          this._getTable().focus();
        }
      },
      /**
       * Clear any cached DOM rows
       * @private
       */
      _clearCachedDomRowData: function()
      {
        this._cachedDomTableBodyRows = null;
      },
      /**
       * Clear any cached metadata
       * @private
       */
      _clearCachedMetadata: function()
      {
        this._columnDefArray = null;
        this._setTableNavigationMode(false);
      },
      /**
       * Clear any cached data metadata
       * @private
       */
      _clearCachedDataMetadata: function()
      {
        this._data = null;
      },
      /**
       * Clear any cached table dimensions
       * @private
       */
      _clearCachedTableDimensions: function()
      {
        this._tableHeight = null;
        this._tableWidth = null;
      },
      /**
       * Clear any keyboard keys
       * @private
       */
      _clearKeyboardKeys: function()
      {
        this._keyboardKeys = [];
      },
      /**
       * Clear the focused column header
       * @private
       */
      _clearFocusedHeaderColumn: function()
      {
        var focusedHeaderColumnIdx = this._getFocusedHeaderColumnIdx();
        if (focusedHeaderColumnIdx != null)
        {
          this._setHeaderColumnFocus(focusedHeaderColumnIdx, false, null);
        }
      },
      /**
       * Clear the focused row
       * @private
       */
      _clearFocusedRow: function()
      {
        var focusedRowIdx = this._getFocusedRowIdx();
        if (focusedRowIdx != null)
        {
          this._setRowFocus(focusedRowIdx, false, null);
        }
      },
      /**
       * Clear the selected column headers
       * @private
       */
      _clearSelectedHeaderColumns: function()
      {
        var selectedHeaderColumnIdxs = this._getSelectedHeaderColumnIdxs();

        var i;
        for (i = 0; i < selectedHeaderColumnIdxs.length; i++)
        {
          this._setHeaderColumnSelection(selectedHeaderColumnIdxs[i], false, null);
        }
      },
      /**
       * Clear the selected rows
       * @private
       */
      _clearSelectedRows: function()
      {
        var selectedRowIdxs = this._getSelectedRowIdxs();

        var i;
        for (i = 0; i < selectedRowIdxs.length; i++)
          this._setRowSelection(selectedRowIdxs[i], false, null);
      },
      /**
       * Clear the sorted column header indicator. Note this does not affect the order
       * of the data. This is just to clear the UI indication.
       * @private
       */
      _clearSortedHeaderColumn: function()
      {
        var sortedTableHeaderColumnIdx = this._getSortedTableHeaderColumnIdx();
        if (sortedTableHeaderColumnIdx != null)
        {
          var sortedTableHeaderColumn = this._getTableHeaderColumn(sortedTableHeaderColumnIdx);
          var sorted = sortedTableHeaderColumn.data('sorted');
          sortedTableHeaderColumn.data('sorted', null);
          if (sorted == this._COLUMN_SORT_ORDER._ASCENDING)
          {
            this._hideTableHeaderColumnSortLink(sortedTableHeaderColumnIdx, true);
          }
          else
          {
            this._hideTableHeaderColumnSortLink(sortedTableHeaderColumnIdx, false);
          }
        }
      },
      /**
       * Return the column definitions
       * @return {Array} array of column metadata Objects.
       * @private
       */
      _getColumnDefs: function()
      {
        // cache the columns array in this._columnDefArray
        if (!this._columnDefArray)
        {
          this._columnDefArray = this._getColumnMetadata();
        }
        return this._columnDefArray;
      },
      /**
       * Return the column metadata in sorted oder. Ordered by the displayIndex followed by
       * columns with no displayIndex added in the ordered they are defined.
       * @return {Array} array of column metadata Objects.
       * @private
       */
      _getColumnMetadata: function()
      {
        // get the columns metadata
        var columns = this.options.columns;

        if (columns.length == 0 ||
          (columns.length == 1 &&
            columns[0].id == null &&
            columns[0].headerText == null &&
            columns[0].field == null))
        {
          return [];
        }

        var columnsIndArray = [];
        // sort by displayIndex
        var i, j;
        for (i = 0; i < columns.length; i++)
        {
          if (columns[i].displayIndex != null)
          {
            // add all the displayIndexes 
            columnsIndArray.push(columns[i].displayIndex);
          }
        }
        // sort all the displayIndexes
        columnsIndArray.sort(function(a, b) {
          return a - b
        });

        // add all the columns with displayIndex in sorted order in the array
        var columnsSortedArray = [];
        for (i = 0; i < columnsIndArray.length; i++)
        {
          for (j = 0; j < columns.length; j++)
          {
            if (columns[j].displayIndex == columnsIndArray[i])
            {
              columnsSortedArray.push(columns[j]);
            }
          }
        }
        // add the rest of the columns in the array
        for (i = 0; i < columns.length; i++)
        {
          if (columns[i].displayIndex == null)
          {
            columnsSortedArray.push(columns[i]);
          }
        }

        // generate ids for columns which don't have it specified
        for (i = 0; i < columns.length; i++)
        {
          if (columnsSortedArray[i].id == null)
          {
            columnsSortedArray[i].id = this._COLUMN_HEADER_ID_PREFIX + i;
          }
        }
        return columnsSortedArray;
      },
      /**
       * Return all the column indexes for elements with a particular style class
       * @param {string} styleClass  style class
       * @return {Array} Array of column indexes
       * @private
       */
      _getColumnIdxsForElementsWithStyleClass: function(styleClass)
      {
        var elements = this._getTable().find(styleClass);
        var columnIdxs = [];
        if (elements && elements.length > 0)
        {
          var i, j, alreadyAdded, columnIdx;
          for (i = 0; i < elements.length; i++)
          {
            columnIdx = this._getElementColumnIdx($(elements.get(i)));

            alreadyAdded = false;
            for (j = 0; j < columnIdxs.length; j++)
            {
              if (columnIdxs[j] == columnIdx)
              {
                alreadyAdded = true;
              }
            }
            if (!alreadyAdded)
            {
              columnIdxs.push(columnIdx);
            }
          }
        }

        return columnIdxs;
      },
      /**
       * Return the column renderer
       * @param {number} columnIdx  column index
       * @param {String} type  renderer type
       * @return {Object} renderer
       * @private
       */
      _getColumnRenderer: function(columnIdx, type)
      {
        var columns = this._getColumnDefs();
        var column = columns[columnIdx];
        var columnRenderers = this.options['columnRenderers'];
        if (columnRenderers)
        {
          // first validate column renderer metadata
          this._checkColumnRendererMetadata('cell');

          var i;
          for (i = 0; i < columnRenderers.length; i++)
          {
            if (columnRenderers[i]['columnId'] == column.id &&
              columnRenderers[i]['type'] == type)
            {
              return columnRenderers[i]['renderer'];
            }
          }
        }

        return null;
      },
      /**
       * Return the datasource object defined for this table
       * @return {Object} Datasource object.
       * @throws {Error}
       * @private
       */
      _getData: function()
      {
        if (!this._data && this.options.data != null)
        {
          var data = this.options.data;
          if (data instanceof oj.TableDataSource ||
              data instanceof oj.PagingTableDataSource)
          {
            this._data = data;
          }
          else
          {
            // we only support TableDataSource
            var errSummary = oj.Translations.getTranslatedString('oj-table.dataInvalidType.summary');
            var errDetail = oj.Translations.getTranslatedString('oj-table.dataInvalidType.detail');
            throw new oj.Message(errSummary, errDetail, oj.Message.SEVERITY_LEVEL['ERROR']);
          }
          this._dataMetadata = this.options.data;
        }
        return this._data;
      },
      /**
       * Get the column index of the DOM element. e.g. pass in the table cell to
       * see which column it's in.
       * @param {jQuery} element  DOM element
       * @return {number|null} the column index
       * @private
       */
      _getElementColumnIdx: function(element)
      {
        // column index is stored in the HTML5 data attribute data-oj-columnIdx
        var columnIdx = $(element).attr('data-oj-columnIdx');

        if (columnIdx != null)
        {
          return parseInt($(element).attr('data-oj-columnIdx'), 10);
        }

        return null;
      },
      /**
       * Get the row index of the DOM element. e.g. pass in the table cell to
       * see which row it's in.
       * @param {jQuery} element  DOM element
       * @return {number|null} the row index
       * @private
       */
      _getElementRowIdx: function(element)
      {
        var rowIdx = $(element).attr('data-oj-rowIdx');

        if (rowIdx != null)
        {
          return parseInt($(element).attr('data-oj-rowIdx'), 10);
        }

        return null;
      },
      /**
       * Get the rowKey of the DOM element.
       * @param {jQuery} element  DOM element
       * @return {string|null} the rowKey
       * @private
       */
      _getElementRowKey: function(element)
      {
        var rowKey = $(element).attr('data-oj-rowKey');

        if (rowKey != null)
        {
          return rowKey.toString();
        }
        else
        {
          return null;
        }
      },
      /**
       * Find the first ancestor of an element with a specific class name
       * @param {jQuery} element the element to find the nearest class name to
       * @param {string} className the class name to look for
       * @return {jQuery|null} the element with the className, if there is none returns null 
       * @private	 
       */
      _getFirstAncestor: function(element, className) {
        var parents;
        
        if (element.hasClass(className))
        {
          return element;
        }
        parents = element.parents('.' + className);
        if (parents.length != 0)
        {
          return parents.eq(0);
        }
        return null;
      },
      /**
       * Get the focused column header index
       * @return {number|null} the column index
       * @private
       */
      _getFocusedHeaderColumnIdx: function()
      {
        // focused column headers have the focused style class. There should only be one focused header
        return this._getColumnIdxsForElementsWithStyleClass('.' + this._CSS_CLASSES._COLUMN_HEADER_CLASS + '.' + this._MARKER_STYLE_CLASSES._FOCUS)[0];
      },
      /**
       * Get the focused row index
       * @return {number|null} the row index
       * @private
       */
      _getFocusedRowIdx: function()
      {
        // focused rows have cells with focused style class. There should only be one focused row
        return this._getRowIdxsForElementsWithStyleClass('.' + this._CSS_CLASSES._TABLE_DATA_ROW_CLASS + '.' + this._MARKER_STYLE_CLASSES._FOCUS)[0];
      },
      /**
       * Return whether the column header at the index is focused
       * @param {number} columnIdx  column index
       * @return {boolean} whether it's focused
       * @private
       */
      _getHeaderColumnFocus: function(columnIdx)
      {
        return this._getHeaderColumnState(columnIdx).focused;
      },
      /**
       * Return whether the column header at the index is selected
       * @param {number} columnIdx  column index
       * @return {boolean} whether it's selected
       * @private
       */
      _getHeaderColumnSelection: function(columnIdx)
      {
        return this._getHeaderColumnState(columnIdx).selected;
      },
      /**
       * Return the column selection mode
       * @return {string|null} single, multiple, or null
       * @private
       */
      _getColumnSelectionMode: function()
      {
        var columnSelectionMode = this.options.selectionMode == null ? null : this.options.selectionMode['column'];
        return columnSelectionMode;
      },
      /**
       * Return the state of the column header at a partiocular index
       * @param {number} columnIdx  column index
       * @return {Object} Object which contains booleans focused and selected
       * @private
       */
      _getHeaderColumnState: function(columnIdx)
      {
        var headerColumn = this._getTableHeaderColumn(columnIdx);

        return {focused: headerColumn.hasClass(this._MARKER_STYLE_CLASSES._FOCUS),
          selected: headerColumn.hasClass(this._MARKER_STYLE_CLASSES._SELECTED)};
      },
      /**
       * Return the currently pressed keyboard keys
       * @return {Array} Array of keyCodes
       * @private
       */
      _getKeyboardKeys: function()
      {
        if (!this._keyboardKeys)
        {
          this._keyboardKeys = [];
        }

        // reverse the array since we want the keybaord keys to be a LIFO stack
        return this._keyboardKeys.reverse();
      },
      /**
       * Return the last column which was selected (chronologically)
       * @return {number|null} last selected column
       * @private
       */
      _getLastHeaderColumnSelection: function()
      {
        if (this._lastSelectedColumnIdxArray != null &&
          this._lastSelectedColumnIdxArray.length > 0)
        {
          return this._lastSelectedColumnIdxArray[0];
        }
        return null;
      },
      /**
       * Return the last row which was selected (chronologically)
       * @return {number|null} last selected row
       * @private
       */
      _getLastRowSelection: function()
      {
        if (this._lastSelectedRowIdxArray != null &&
          this._lastSelectedRowIdxArray.length > 0)
        {
          return this._lastSelectedRowIdxArray[0];
        }
        return null;
      },
      /**
       * Get the element from an array of elements according to type
       * @param {Object} elements  Array of jquery elements
       * @param {string} type  DOM type
       * @return {Object|null} element
       * @private
       */
      _getJQueryElement: function(elements, type)
      {
        var i;
        for (i = 0; i < $(elements).length; i++)
        {
          if ($($(elements)[i]).is(type))
          {
            return $(elements)[i];
          }
        }
        return null;
      },
      /**
       * Return whether the row is focused
       * @param {number} rowIdx  row index
       * @return {boolean} whether the row is focused
       * @private
       */
      _getRowFocus: function(rowIdx)
      {
        return this._getTableBodyRow(rowIdx).hasClass(this._MARKER_STYLE_CLASSES._FOCUS);
      },
      /**
       * Return whether the row is hovered
       * @param {number} rowIdx  row index
       * @return {boolean} whether the row is hovered
       * @private
       */
      _getRowHover: function(rowIdx)
      {
        return this._getTableBodyRow(rowIdx).hasClass(this._MARKER_STYLE_CLASSES._HOVER);
      },
      /**
       * Return all the row indexes for elements with a particular style class
       * @param {string} styleClass  style class
       * @return {Array} Array of row indexes
       * @private
       */
      _getRowIdxsForElementsWithStyleClass: function(styleClass)
      {
        var elements = this._getTable().find(styleClass);
        var rowIdxs = [];
        if (elements && elements.length > 0)
        {
          var i, j, rowIdx, alreadyAdded;
          for (i = 0; i < elements.length; i++)
          {
            rowIdx = this._getElementRowIdx($(elements.get(i)));

            alreadyAdded = false;
            for (j = 0; j < rowIdxs.length; j++)
            {
              if (rowIdxs[j] == rowIdx)
              {
                alreadyAdded = true;
              }
            }
            if (!alreadyAdded)
            {
              rowIdxs.push(rowIdx);
            }
          }
        }

        return rowIdxs;
      },
      /**
       * Return the row renderer
       * @return {Object} renderer
       * @private
       */
      _getRowRenderer: function()
      {
        return this.options['rowRenderer'];
      },
      /**
       * Return whether the row is selected
       * @param {number} rowIdx  row index
       * @return {boolean} whether the row is selected
       * @private
       */
      _getRowSelection: function(rowIdx)
      {
        return this._getTableBodyRow(rowIdx).hasClass(this._MARKER_STYLE_CLASSES._SELECTED);
      },
      /**
       * Return the row selection mode
       * @return {string|null} single, multiple, or null
       * @private
       */
      _getRowSelectionMode: function()
      {
        var rowSelectionMode = this.options['selectionMode'] == null ? null : this.options['selectionMode']['row'];
        return rowSelectionMode;
      },
      /**
       * Return the table scroller
       * @return {number} scrolbar height
       * @private
       */
      _getScroller: function()
      {
        if (!this._useFallbackScrolling)
        {
          return this._getTableBody();
        }
        else
        {
          return this._getTableDivScroller();
        }
      },
      /**
       * Return the scrollbar height
       * @return {number} scrolbar height
       * @private
       */
      _getScrollbarHeight: function()
      {
        var scroller = this._getScroller();
        var scrollbarHeight = scroller.get(0).offsetHeight - scroller.get(0).clientHeight;

        return scrollbarHeight;
      },
      /**
       * Return the scrollbar width
       * @return {number} scrolbar width
       * @private
       */
      _getScrollbarWidth: function()
      {
        var scroller = this._getScroller();
        var scrollbarWidth = scroller.get(0).offsetWidth - scroller.get(0).clientWidth;

        return scrollbarWidth;
      },
      /**
       * Return the selected column header indexes
       * @return {Array} array of column header indexes
       * @private
       */
      _getSelectedHeaderColumnIdxs: function()
      {
        // selected column headers have the selected css class
        return this._getColumnIdxsForElementsWithStyleClass('.' + this._CSS_CLASSES._COLUMN_HEADER_CLASS + '.' + this._MARKER_STYLE_CLASSES._SELECTED);
      },
      /**
       * Return the selected row indexes
       * @return {Array} array of row indexes
       * @private
       */
      _getSelectedRowIdxs: function()
      {
        // selected rows have the selected css class
        return this._getRowIdxsForElementsWithStyleClass('.' + this._CSS_CLASSES._TABLE_DATA_ROW_CLASS + '.' + this._MARKER_STYLE_CLASSES._SELECTED);
      },
      /**
       * Return the currnetly sorted column index
       * @return {number|null} column index
       * @private
       */
      _getSortedTableHeaderColumnIdx: function()
      {
        var tableHeaderColumns = this._getTableHeaderColumns();

        var i, sorted;
        for (i = 0; i < tableHeaderColumns.length; i++)
        {
          // sorted column will have the sorted data attr
          sorted = $(tableHeaderColumns[i]).data('sorted');

          if (sorted != null)
          {
            return i;
          }
        }
        return null;
      },
      /**
       * Get the context object to pass into the renderer
       * @param {Object} row  oj.Row instance
       * @param {Object} parentElement element
       * @private
       */
      _getRendererContextObject: function(row, parentElement)
      {
        var context = [];
        context['component'] = this;
        context['datasource'] = this._getData();
        context['parentElement'] = parentElement;
      
        if (row != null)
        {
          context['status'] = this._getRendererStatusObject(row);
          var rowContext = row.context;
          var i;
          for (i in rowContext)
          {
            if (rowContext.hasOwnProperty(i))
            {
              context[i] = rowContext[i];
            }
          }
        }
        
        return context;
      },
      /**
       * Get the status object to pass into the renderer
       * @param {Object} row  oj.Row instance
       * @return {Object} status object
       * @private
       */
      _getRendererStatusObject: function(row)
      {
        return {'rowIndex': this._getData().indexOf(row),
          'rowKey': row['id'],
          'activeRow': this['activeRow']()};
      },
      /**
       * Return the specified table height
       * @return {number}
       * @private
       */
      _getSpecifiedTableHeight: function()
      {
        if (this._tableHeight == null)
        {
          this._tableHeight = this.element.height();
        }
        return this._tableHeight;
      },
      /**
       * Return the specified table width
       * @return {number}
       * @private
       */
      _getSpecifiedTableWidth: function()
      {
        if (this._tableWidth == null)
        {
          this._tableWidth = this.element.width();
        }
        return this._tableWidth;
      },
      /**
       * Get tabbable elements within the element
       * @param {jQuery} element  DOM element
       * @return {jQuery|null} jQuery array of DOM elements
       * @private
       */
      _getTabbableElements: function(element)
      {
        var tabbableElements = element.find(':tabbable');

        if (tabbableElements != null && tabbableElements.length > 0)
        {
          return tabbableElements;
        }
        return null;
      },
      /**
       * Return the number of DOM rows in the table
       * @return {number} row count.
       * @private
       */
      _getTableRowCount: function()
      {
        var rows = this._getTableBodyRows();

        if (rows != null)
        {
          return rows.length;
        }
        return 0;
      },
      /**
       * Handle an ojbeforeshow event on the context menu. Set the position correctly for keyboard events and store the Keyboard/Mouse event that called the context menu
       * @private	 
       */
      _handleContextMenuBeforeShow: function(event, ui)
      {
        var contextMenu = this._getContextMenu();

        this._contextMenuEvent = event['originalEvent']['originalEvent'];
        if (this._contextMenuEvent['type'] === 'keydown')
        {
          contextMenu.ojMenu("option", "menuPosition", {"my": "left top", "at": "left bottom", "of": this.contextMenuEvent['target']});
        }
        else
        {
          contextMenu.ojMenu("option", "menuPosition", {"my": "left top", "at": "left bottom"});
        }
        
        var headerColumn = this._getFirstAncestor($(this._contextMenuEvent['target']), 'oj-table-column-header');
        var tableBodyCell = this._getFirstAncestor($(this._contextMenuEvent['target']), 'oj-table-data-cell');
        
        if (tableBodyCell != null)
        {
          var columnIdx = this._getElementColumnIdx(tableBodyCell);
          headerColumn = this._getTableHeaderColumn(columnIdx);
        }

        if (headerColumn.attr('data-oj-sortable') == this._OPTION_ENABLED)
        {
          this._getContextMenu().find('[data-oj-command=oj-table-sortAsc]').removeClass('oj-disabled');
          this._getContextMenu().find('[data-oj-command=oj-table-sortDsc]').removeClass('oj-disabled');
        }
        else
        {
          this._getContextMenu().find('[data-oj-command=oj-table-sortAsc]').addClass('oj-disabled');
          this._getContextMenu().find('[data-oj-command=oj-table-sortDsc]').addClass('oj-disabled');
        }
      },
      /**
       * Handle an ojselect event on a menu item, if sort call the handler on the core.
       * If resize prompt the user with a dialog box
       * @private	 
       */
      _handleContextMenuSelect: function(event, ui)
      {
        var menuItemCommand = ui.item.attr('data-oj-command');
        var headerColumn = this._getFirstAncestor($(this._contextMenuEvent['target']), 'oj-table-column-header');
        var tableBodyCell = this._getFirstAncestor($(this._contextMenuEvent['target']), 'oj-table-data-cell');
        var columnIdx = null;
        
        if (headerColumn != null)
        {
          columnIdx = this._getElementColumnIdx(headerColumn);
        }
        if (tableBodyCell != null)
        {
          columnIdx = this._getElementColumnIdx(tableBodyCell);
        }
        if (menuItemCommand == 'oj-table-sortAsc')
        {
          this._handleSortTableHeaderColumn(columnIdx, true);
        }
        else if (menuItemCommand == 'oj-table-sortDsc')
        {
          this._handleSortTableHeaderColumn(columnIdx, false);
        }
      },
      /**
       * Callback handler for data error.
       * @param {Object} error 
       * @private
       */
      _handleDataError: function(error)
      {
        this._hideStatusMessage();
        throw error;
      },
      /**
       * Callback handler for fetch start in the datasource.
       * @param {Object} event 
       * @private
       */
      _handleDataFetchStart: function(event)
      {
        this._showStatusMessage();
      },
      /**
       * Callback handler for fetch completed in the datasource. Refresh entire
       * table body DOM and refresh the table dimensions if refresh == true. Hide the Fetching Data... 
       * status message.
       * @param {boolean} refresh
       * @private
       */
      _handleDataFetchEnd: function(refresh)
      {
        if (refresh)
        {
          this._refreshTableBody();
          this._refreshTableDimensions();
        }
        this._hideStatusMessage();
      },
      /**
       * Callback handler for reset in the datasource. Refresh entire
       * table body DOM and refresh the table dimensions.
       * @param {Object} event 
       * @private
       */
      _handleDataReset: function(event)
      {
        this._hideStatusMessage();
        this._refreshTableBody();
        this._refreshTableDimensions();
        this['activeRow'](-1);
      },
      /**
       * Callback handler for rows added into the datasource. Refresh the DOM
       * at the row index and refresh the table dimensions to accomodate the new
       * row
       * @param {Object} event
       * @private
       */
      _handleDataRowAdd: function(event)
      {
        var rowIdx = event['rowIdx'];
        var row = event['row'];
        
        if (rowIdx == null)
        {
          rowIdx = this._getData().indexOf(row);
        }
        this._hideStatusMessage();
        this._refreshTableBodyRow(rowIdx, row);
        // refresh the rowIdx of all remaining rows
        this._refreshTableBodyRowIdxs();
        this._refreshTableDimensions();
        this._setRowFocus(rowIdx, true, null);
      },
      /**
       * Callback handler for row change in the datasource. Refresh the changed
       * row.
       * @param {Object} event
       * @private
       */
      _handleDataRowChange: function(event)
      {
        var rowIdx = event['rowIdx'];
        var row = event['row'];
        
        if (rowIdx == null)
        {
          rowIdx = this._getData().indexOf(row);
        }
        this._hideStatusMessage();
        this._refreshTableBodyRow(rowIdx, row);
        this._refreshTableDimensions();
      },
      /**
       * Callback handler for row removed in the datasource. Remove the row DOM from the
       * table body by searching for the matching rowKey. New rows will have null rowKey.
       * After removing the row, refresh all the remaining row indexes since
       * they will have shifted. Lastly, refresh the table dimensions
       * @param {Object} event
       * @private
       */
      _handleDataRowRemove: function(event)
      {
        var row = event['row'];
        this._hideStatusMessage();
        var rowKey = row.id;

        var tableBodyRows = this._getTableBodyRows();

        if (!tableBodyRows)
        {
          return;
        }

        var i, j, tableBodyRow, deletedRow;
        for (i = 0; i < tableBodyRows.length; i++)
        {
          tableBodyRow = $(tableBodyRows[i]);
          deletedRow = null;
          if (this._getElementRowKey(tableBodyRow) == rowKey)
          {
            deletedRow = tableBodyRow;
          }
          if (deletedRow != null)
          {
            deletedRow[0].parentNode.removeChild(deletedRow[0]);
            break;
          }
        }
        this._clearCachedDomRowData();

        // refresh the rowIdx of all remaining rows
        this._refreshTableBodyRowIdxs();
        this._refreshTableDimensions();
      },
      /**
       * Callback handler for sort completed in the datasource. Refresh entire
       * table body DOM and refresh the table dimensions. Set row focus to the
       * active row.
       * @param {Object} event 
       * @private
       */
      _handleDataSort: function(event)
      {
        this._hideStatusMessage();
        this._refreshTableBody();
        this._refreshTableDimensions();
        var activeRowIdx = this['activeRow']();
        if (activeRowIdx != null)
        {
          this._setRowFocus(activeRowIdx, true, null);
        }
      },
      /**
       * Handler for Left/Right keydown.
       * @param {Object} event
       * @private
       */
      _handleKeydownLeftRight: function(event)
      {
        // pressing left/right navigates the column headers
        var focusedHeaderColumnIdx = this._getFocusedHeaderColumnIdx();
        var columns = this._getColumnDefs();

        if (focusedHeaderColumnIdx != null)
        {
          var newFocusedHeaderColumnIdx = focusedHeaderColumnIdx;

          if (this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_LEFT))
          {
            newFocusedHeaderColumnIdx = focusedHeaderColumnIdx > 0 ? focusedHeaderColumnIdx - 1 : focusedHeaderColumnIdx;
          }
          else if (this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_RIGHT))
          {
            newFocusedHeaderColumnIdx = focusedHeaderColumnIdx < columns.length - 1 ? focusedHeaderColumnIdx + 1 : focusedHeaderColumnIdx;
          }

          if (newFocusedHeaderColumnIdx != focusedHeaderColumnIdx)
          {
            this._setHeaderColumnFocus(newFocusedHeaderColumnIdx, true, null);

            if (event[this._KEYBOARD_CODES._KEYBOARD_MODIFIER_SHIFT])
            {
              // if shift is also pressed then we need to select too
              var newFocusedHeaderColumnSelection = this._getHeaderColumnSelection(newFocusedHeaderColumnIdx);
              // we may be clearing or setting the selection
              this._setHeaderColumnSelection(newFocusedHeaderColumnIdx, !newFocusedHeaderColumnSelection, null, event);
              // if we are clearing the selection, then clear the previous column too.
              if (newFocusedHeaderColumnSelection)
              {
                if (this._getHeaderColumnSelection(focusedHeaderColumnIdx))
                {
                  this._setHeaderColumnSelection(focusedHeaderColumnIdx, false, null, event);
                }
              }
            }
          }
        }
      },
      /**
       * Handler for Tab keydown.
       * @param {Object} event
       * @private
       */
      _handleKeydownTab: function(event)
      {
        // if Tab is pressed while a row has focus then we 
        // want to Tab within that row and then go to the 
        // next row until Esc is pressed
        var focusedRowIdx = this._getFocusedRowIdx();

        if (focusedRowIdx != null && this._isTableNavigationMode())
        {

          var tableBody = this._getTableBody();
          var tabbableElementsInBody = this._getTabbableElements(tableBody);
          // only bother if there are any tabbable elements
          if (tabbableElementsInBody != null)
          {
            var currentFocusElement = document.activeElement;

            var isCurrentlyFocused = false;
            var i, tableBodyRow, tabbableElementsInRow;
            for (i = 0; i < tabbableElementsInBody.length; i++)
            {
              if (currentFocusElement == tabbableElementsInBody[i])
              {
                isCurrentlyFocused = true;
                break;
              }
            }
            // if already focused on an element in the body, then
            // don't do anything
            if (isCurrentlyFocused)
            {
              return;
            }
            else if (!event[this._KEYBOARD_CODES._KEYBOARD_MODIFIER_SHIFT])
            {
              tableBodyRow = this._getTableBodyRow(focusedRowIdx);
              tabbableElementsInRow = this._getTabbableElements(tableBodyRow);

              if (tabbableElementsInRow != null)
              {
                $(tabbableElementsInRow[0]).focus();
              }
              else
              {
                // if there are no tabbable elements
                // in the row then focus on the first 
                // tabbable element in the body
                $(tabbableElementsInBody[0]).focus();
              }
              event.preventDefault();
              event.stopPropagation();
            }
          }
        }
        else
        {
          // tab out of the component to the next tabbable
          // element on the page
          var table = this._getTable();
          var tabbableElementsInDocument = this._getTabbableElements($(document));
          var tabbableElementsInTable = this._getTabbableElements(table);
          var tableTabIndex = tabbableElementsInDocument.index(this._getTable());
          $(tabbableElementsInDocument[tableTabIndex + tabbableElementsInTable.length + 1]).focus();
          event.preventDefault();
          event.stopPropagation();
        }
        // we need to remove Tab on keydown because we may not
        // get a keyup for it if focus moves
        // outside of table
        this._removeKeyboardKey(event.keyCode);
      },
      /**
       * Handler for Up/Down keydown.
       * @param {Object} event
       * @private
       */
      _handleKeydownUpDown: function(event)
      {
        var focusedRowIdx = this._getFocusedRowIdx();
        var focusedHeaderColumnIdx = this._getFocusedHeaderColumnIdx();

        if (focusedRowIdx != null)
        {
          // if row is focused then up/down navigates the rows
          var data = this._getData();
          var newFocusedRowIdx = focusedRowIdx;

          if (this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_UP))
          {
            if (focusedRowIdx > 0)
            {
              newFocusedRowIdx = focusedRowIdx - 1;
            }
            else
            {
              newFocusedRowIdx = focusedRowIdx;
            }
          }
          else if (this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_DOWN))
          {
            newFocusedRowIdx = focusedRowIdx < data.size() - 1 ? focusedRowIdx + 1 : focusedRowIdx;
          }

          if (newFocusedRowIdx != focusedRowIdx)
          {
            this._setRowFocus(newFocusedRowIdx, true, null);

            if (event[this._KEYBOARD_CODES._KEYBOARD_MODIFIER_SHIFT])
            {
              // if shift is also pressed then we need to select too
              var newFocusedRowSelection = this._getRowSelection(newFocusedRowIdx);
              // we may be clearing or setting the selection
              this._setRowSelection(newFocusedRowIdx, !newFocusedRowSelection, null, event);
              // if we are clearing the selection, then clear the previous row too.
              if (newFocusedRowSelection)
              {
                if (this._getRowSelection(focusedRowIdx))
                {
                  this._setRowSelection(focusedRowIdx, false, null, event);
                }
              }
            }
          }
          // if user is on the first row and presses up the focus on the first column header
          else if (newFocusedRowIdx == focusedRowIdx &&
            focusedRowIdx == 0 &&
            this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_UP))
          {
            this._setHeaderColumnFocus(0, true, null);
          }
        }
        // if user is on a column header and pressed down then focus on the first row
        else if (focusedHeaderColumnIdx != null &&
          this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_DOWN))
        {
          this._setRowFocus(0, true, null);
        }
      },
      /**
       * Handler for End keyup.
       * @param {Object} event
       * @private
       */
      _handleKeyupEnd: function(event)
      {
        // pressing End focuses on last column
        var focusedColumnIdx = this._getFocusedHeaderColumnIdx();

        if (focusedColumnIdx != null &&
          focusedColumnIdx != this._getColumnDefs().length - 1)
        {
          this._setHeaderColumnFocus(this._getColumnDefs().length - 1, true, null);
        }
      },
      /**
       * Handler for Enter keyup.
       * @param {Object} event
       * @private
       */
      _handleKeyupEnter: function(event)
      {
        // pressing enter does sort on the focused column header
        var focusedColumnIdx = this._getFocusedHeaderColumnIdx();

        if (focusedColumnIdx != null && this._getColumnDefs()[focusedColumnIdx].sortable == this._OPTION_ENABLED)
        {
          var tableHeaderColumn = this._getTableHeaderColumn(focusedColumnIdx);
          var sorted = tableHeaderColumn.data('sorted');
          // if not already sorted then sort ascending. If already sorted
          // ascending then do descending sort and vice versa.
          if (sorted == null || sorted == this._COLUMN_SORT_ORDER._DESCENDING)
          {
            this._handleSortTableHeaderColumn(focusedColumnIdx, true);
          }
          else
          {
            this._handleSortTableHeaderColumn(focusedColumnIdx, false);
          }
        }
      },
      /**
       * Handler for Esc keyup.
       * @param {Object} event
       * @private
       */
      _handleKeyupEsc: function(event)
      {
        // pressing Esc always returns focus back to the table.
        // This is for when users are tabbing through focuable
        // elements and need to get back to general table nav
        event.preventDefault();
        event.stopPropagation();
        this._getTable().focus();
        this._setTableNavigationMode(false);
      },
      /**
       * Handler for Home keyup.
       * @param {Object} event
       * @private
       */
      _handleKeyupHome: function(event)
      {
        // pressing Home focuses on first column
        var focusedColumnIdx = this._getFocusedHeaderColumnIdx();

        if (focusedColumnIdx != null && focusedColumnIdx != 0)
        {
          this._setHeaderColumnFocus(0, true, null);
        }
      },
      /**
       * Handler for Spacebar keyup.
       * @param {Object} event
       * @private
       */
      _handleKeyupSpacebar: function(event)
      {
        // pressing spacebar selects the focused row/column
        var focusedRowIdx = this._getFocusedRowIdx();

        if (focusedRowIdx != null)
        {
          this._setRowSelection(focusedRowIdx, !this._getRowSelection(focusedRowIdx), null, event);
        }
        else
        {
          var focusedHeaderColumnIdx = this._getFocusedHeaderColumnIdx();
          if (focusedHeaderColumnIdx != null)
          {
            this._setHeaderColumnSelection(focusedHeaderColumnIdx, !this._getHeaderColumnSelection(focusedHeaderColumnIdx), null, event);
          }
        }
      },
      /**
       * Handler for column sort
       * @param {number} columnIdx  column index
       * @param {boolean} ascending  sort order ascending
       * @private
       */
      _handleSortTableHeaderColumn: function(columnIdx, ascending)
      {
        // clear the sorted indicator on any other column
        this._clearSortedHeaderColumn();
        // get the column metadata
        var column = this._getColumnDefs()[columnIdx];
        // get which field to sort on
        var sortField = column.sortProperty == null ? column.field : column.sortProperty;
        // get the column header DOM element
        var tableHeaderColumn = this._getTableHeaderColumn(columnIdx);
        // invoke sort on the data
        this._invokeDataSort(sortField, ascending, null);

        if (ascending)
        {
          // store sort order on the DOM element
          tableHeaderColumn.data('sorted', this._COLUMN_SORT_ORDER._ASCENDING);
          var headerColumnAscLink = tableHeaderColumn.find('.' + this._CSS_CLASSES._COLUMN_HEADER_ASC_LINK_CLASS);
          headerColumnAscLink.addClass(this._MARKER_STYLE_CLASSES._SELECTED);
          this._showTableHeaderColumnSortLink(columnIdx, true);
        }
        else
        {
          // store sort order on the DOM element
          tableHeaderColumn.data('sorted', this._COLUMN_SORT_ORDER._DESCENDING);
          var headerColumnDscLink = tableHeaderColumn.find('.' + this._CSS_CLASSES._COLUMN_HEADER_DSC_LINK_CLASS);
          headerColumnDscLink.addClass(this._MARKER_STYLE_CLASSES._SELECTED);
          this._showTableHeaderColumnSortLink(columnIdx, false);
        }
      },
      /**
       * Hide the 'No data to display.' message.
       * @private
       */
      _hideNoDataMessage: function()
      {
        var noDataMessage = this._getTableNoDataMessage();
        noDataMessage.css('display', 'none');
      },
      /**
       * Hide the Fetching Data... status message.
       * @private
       */
      _hideStatusMessage: function()
      {
        var statusMessage = this._getTableStatusMessage();
        statusMessage.css('display', 'none');
      },
      /**
       * Hide the column header sort link
       * @param {number} columnIdx  column index
       * @param {boolean} ascending  sort order ascending
       * @private
       */
      _hideTableHeaderColumnSortLink: function(columnIdx, ascending)
      {
        // check if the column is sortable. If not, then there won't be any sort links
        if (this._getColumnDefs()[columnIdx].sortable == this._OPTION_ENABLED)
        {
          var tableHeaderColumn = this._getTableHeaderColumn(columnIdx);
          // check if the column is currently sorted
          var sorted = tableHeaderColumn.data('sorted');

          // we should only hide the ascending sort link if the column is not sorted or
          // is sorted by descending order
          if (ascending && (sorted == null || sorted == this._COLUMN_SORT_ORDER._DESCENDING))
          {
            var headerColumnAscLink = tableHeaderColumn.find('.' + this._CSS_CLASSES._COLUMN_HEADER_ASC_LINK_CLASS);
            headerColumnAscLink.addClass(this._MARKER_STYLE_CLASSES._DISABLED);
            headerColumnAscLink.removeClass(this._MARKER_STYLE_CLASSES._ENABLED);
            headerColumnAscLink.removeClass(this._MARKER_STYLE_CLASSES._SELECTED);
          }
          // we should only hide the descending sort link if the column is not sorted or
          // is sorted by ascending order
          else if (!ascending && (sorted == null || sorted == this._COLUMN_SORT_ORDER._ASCENDING))
          {
            var headerColumnDscLink = tableHeaderColumn.find('.' + this._CSS_CLASSES._COLUMN_HEADER_DSC_LINK_CLASS);
            headerColumnDscLink.addClass(this._MARKER_STYLE_CLASSES._DISABLED);
            headerColumnDscLink.removeClass(this._MARKER_STYLE_CLASSES._ENABLED);
            headerColumnDscLink.removeClass(this._MARKER_STYLE_CLASSES._SELECTED);
          }
        }
      },
      /**
       * Invoke sort on a field. This function is called when a user clicks the 
       * column header sort links
       * @param {string} sortField  field name
       * @param {boolean} ascending  sort order ascending
       * @param {jQuery} element  DOM element which triggered the sort
       * @private
       */
      _invokeDataSort: function(sortField, ascending, element)
      {
        var data = this._getData();
        // if no data then bail
        if (!data)
        {
          return null;
        }

        // show the Fetching Data... message
        this._showStatusMessage();
        
        var options = {};
        options['sortProperty'] = sortField;

        // the sort function on the datasource takes comparators
        if (ascending)
        {
          options['sortDirection'] = this._COLUMN_SORT_ORDER._ASCENDING;
          data.sort(function(row) {
            if ($.isFunction(row.get))
            {
              return row.get(sortField);
            }
            else
            {
              return row[sortField]();
            }
          }, options);
        }
        else
        {
          options['sortDirection'] = this._COLUMN_SORT_ORDER._DESCENDING;
          data.sort(function(rowA, rowB) {
            var a, b;
            if ($.isFunction(rowA.get))
            {
              a = rowA.get(sortField);
              b = rowB.get(sortField);
            }
            else
            {
              a = rowA[sortField]();
              b = rowB[sortField]();
            }
            if (a === b)
            {
              return 0;
            }
            return a > b ? -1 : 1;
          }, options);
        }
      },
      /**
       * Whether the columns have been updated
       * @return {boolean} true or false
       * @private
       */
      _isColumnMetadataUpdated: function()
      {
        if (this._columnDefArray != null)
        {
          var columnsMetadata = this._getColumnMetadata();
          if (this._columnDefArray.length != columnsMetadata.length)
          {
            return true;
          }
          else
          {
            var i, prop;
            for (i = 0; i < columnsMetadata.length; i++)
            {
              for (prop in columnsMetadata[i]) {
                if (columnsMetadata[i].hasOwnProperty(prop)) {
                  if (columnsMetadata[i][prop] != this._columnDefArray[i][prop])
                  {
                    return true;
                  }
                }
              }
            }
          }
          return false;
        }
        return true;
      },
      /**
       * Whether the data metadata has have been updated
       * @return {boolean} true or false
       * @private
       */
      _isDataMetadataUpdated: function()
      {
        if (this._dataMetadata != this.options.data)
        {
          return true;
        }
        return false;
      },
      /**
       * Whether the focus is on the table or descendent focusable element
       * @return {boolean} true or false
       * @private
       */
      _isFocused: function()
      {
        // set focus on the table
        var currentFocusElement = $(document.activeElement);
        var table = this._getTable();
        if (table[0] != currentFocusElement[0] &&
          table.has(currentFocusElement).length == 0)
        {
          return false;
        }
        return true;
      },
      /**
       * Helper function which returns if the browser is IE and if so the version.
       * @return {number|null} IE version. null if not IE.
       * @private
       */
      _isIE: function()
      {
        if (navigator.appName == 'Microsoft Internet Explorer')
        {
          var userAgent = navigator.userAgent;
          var resultArray = (new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})')).exec(userAgent);
          if (resultArray != null)
          {
            return parseFloat(resultArray[1]);
          }
        }
        return null;
      },
      /**
       * Is keybaord key pressed
       * @param {number} keyCode  KeyCode of the keyboard key.
       * @return {boolean} true or false
       * @private
       */
      _isKeyboardKeyPressed: function(keyCode)
      {
        var keyboardKeys = this._getKeyboardKeys();
        var i;
        for (i = 0; i < keyboardKeys.length; i++)
        {
          if (keyboardKeys[i] == keyCode)
          {
            return true;
          }
        }
        return false;
      },
      /**
       * Returns whether the table is footerless
       * @return {boolean} true or false
       * @private
       */
      _isTableFooterless: function()
      {
        var footerRenderer = this.options['footerRenderer'];

        if (footerRenderer)
        {
          return false;
        }
        return true;
      },
      /**
       * Return whether styling has been applied to set the table height
       * @return {boolean} true or false
       * @private
       */
      _isTableHeightSet: function()
      {
        return this._getSpecifiedTableHeight() > 0 ? true : false;
      },
      /**
       * Return whether styling has been applied to set the table width
       * @return {boolean} true or false
       * @private
       */
      _isTableWidthSet: function()
      {
        return this._getSpecifiedTableWidth() > 0 ? true : false;
      },
      /**
       * Returns whether the table is headerless
       * @return {boolean} true or false
       * @private
       */
      _isTableHeaderless: function()
      {
        var columns = this._getColumnDefs();

        var i, j;
        for (i = 0; i < columns.length; i++)
        {
          if (columns[i]['headerText'] != null ||
            columns[i]['headerStyle'] != null ||
            (columns[i]['showRequired'] != null &&
              columns[i]['showRequired'] != this._OPTION_DISABLED) ||
            (columns[i]['sortable'] != null &&
              columns[i]['showRequired'] != this._OPTION_DISABLED) ||
            columns[i]['sortProperty'] != null)
          {
            return false;
          }
        }

        var columnRenderers = this.options['columnRenderers'];

        if (columnRenderers)
        {
          for (j = 0; j < columnRenderers.length; j++)
          {
            if (columnRenderers[j]['type'] == 'header')
            {
              return false;
            }
          }
        }

        return true;
      },
      /**
       * Returns whether the table header columns were rendered
       * @return {boolean} true or false
       * @private
       */
      _isTableHeaderColumnsRendered: function()
      {
        return this._renderedTableHeaderColumns == true;
      },
      /**
       * Return whether the component is in table navigation mode
       * @return {boolean} true or false
       * @private
       */
      _isTableNavigationMode: function()
      {
        return this._tableNavMode;
      },
      /**
       * @override
       * @private
       */
      _refreshAll: function()
      {
        if (this._isColumnMetadataUpdated() ||
            (!this._isTableHeaderColumnsRendered() &&
            !this._isTableHeaderless()))
        {
          this._clearCachedMetadata();
          this._refreshTableHeader();
        }
        this._refreshTableFooter();
        var dataMetadataUpdated = false;
        if (this._isDataMetadataUpdated())
        {
          dataMetadataUpdated = true;
          this._clearCachedDataMetadata();
        }
        this._refreshTableBody();
        this._refreshTableDimensions();
        if (dataMetadataUpdated)
        {
          this._registerDataSourceEventListeners();
        }
      },
      /**
       * Fix up the table header padding to accommodate the sort links
       * @private
       */
      _refreshColumnHeaderPadding: function()
      {
        var options = this.options;
        var columns = this._getColumnDefs();
        
        var i, headerColumn, headerColumnRowDiv;
        if (!this._isTableHeaderless())
        {
          var isRTL = this._GetReadingDirection() === "rtl";
          var headerColumnAscDiv, headerColumnDscDiv, newHeaderColumnRowDivPadding;
          for (i = 0; i < columns.length; i++)
          {
            headerColumn = this._getTableHeaderColumn(i);
            if (headerColumn != null)
            {
              // add extra headerColumnRow padding to have enough space for the
              // sort link icons
              headerColumnAscDiv = headerColumn.find('.' + this._CSS_CLASSES._COLUMN_HEADER_ASC_CLASS);
              headerColumnDscDiv = headerColumn.find('.' + this._CSS_CLASSES._COLUMN_HEADER_DSC_CLASS);
              headerColumnRowDiv = headerColumn.find('.' + this._CSS_CLASSES._COLUMN_HEADER_ROW_CLASS);
              var totalSortLinkWidth = headerColumnAscDiv.width() + headerColumnDscDiv.width();
              if (!this._headerColumnRowDivPadding)
              {
                this._headerColumnRowDivPadding = isRTL ? headerColumnRowDiv.css("padding-left") : headerColumnRowDiv.css("padding-right");
              }
              newHeaderColumnRowDivPadding = parseInt(this._headerColumnRowDivPadding, 10) + totalSortLinkWidth + 'px';
              if (isRTL)
              {
                headerColumnRowDiv.css("padding-left", newHeaderColumnRowDivPadding);
              }
              else
              {
                headerColumnRowDiv.css("padding-right", newHeaderColumnRowDivPadding);
              }
              isRTL ? headerColumnAscDiv.css('left', headerColumnDscDiv.width() + 'px') : headerColumnAscDiv.css('right', headerColumnDscDiv.width() + 'px')
            }
          }
        }
      },
      /**
       * Refresh the entire table body with data from the datasource
       * @private
       */
      _refreshTableBody: function()
      {
        var tableBody = this._getTableBody();
        var data = this._getData();
        tableBody.empty();
        this._clearCachedDomRowData();
        
        // if no data then bail
        if (!data || data.size() == 0 || this._getColumnDefs().length == 0)
        {
          this._showNoDataMessage();
        }
        else
        {
          this._hideNoDataMessage();
          var tableBodyDocFrag = $(document.createDocumentFragment());
          var startIndex = data.startIndex();
          var endIndex = startIndex + data.size();
          var i, row;
          for (i = startIndex; i < endIndex; i++)
          {
            row = data.at(i);
            if (row != null)
            {
              this._refreshTableBodyRow(i, row, tableBodyDocFrag);
            }
          }
          tableBody.append(tableBodyDocFrag);
        }
      },
      /**
       * Refresh the row at a particular index with the row data
       * @param {number} rowIdx  row index
       * @param {Object} row  oj.Row
       * @param {Object} docFrag  document fragment
       * @private
       */
      _refreshTableBodyRow: function(rowIdx, row, docFrag)
      {
        var options = this.options;
        var rowRenderer = this._getRowRenderer();
        var columns = this._getColumnDefs();

        if (isNaN(rowIdx) || rowIdx < 0)
        {
          // validate rowIdx value
          throw 'Error: Invalid rowIdx value: ' + rowIdx;
        }

        this._hideNoDataMessage();

        // check if a row renderer was defined
        if (rowRenderer)
        {
          // call the row renderer to return a <tr> DOM element
          var tableBodyRow = this._createTableBodyRow();
          // insert the <tr> element in to the table body DOM
          this._insertTableBodyRow(rowIdx, tableBodyRow, row, docFrag);
          var tableBody = tableBodyRow.parent();

          var rowContent = rowRenderer({'rowContext': this._getRendererContextObject(row, tableBodyRow[0]), 
                                        'row': row.pairs()});

          if (rowContent != null)
          {
            // if the renderer returned a value then we set it as the content
            // for the row
            tableBodyRow.append(rowContent);
          }
          else
          {
            // if the renderer didn't return a value then the existing
            // row was manipulated. So get it and set the required
            // attributes just in case it was replaced or the attributes
            // got removed
            if (docFrag == null)
            {
              tableBodyRow = $(tableBody.children()[rowIdx]);
            }
            else
            {
              tableBodyRow = $(docFrag.children()[rowIdx]);
            }
            this._setTableBodyRowAttributes(rowIdx, row, tableBodyRow);
            this._styleTableBodyRow(tableBodyRow);
          }
          this._createTableBodyCellAccSelect(tableBodyRow);

          // set the cell attributes and styling. Skip the 1st one
          // because it's the acc row select td
          var tableBodyCells = tableBodyRow.children('td');
          var i;
          for (i = 1; i < tableBodyCells.length; i++)
          {
            var tableBodyCell = $(tableBodyCells[i]);
            this._setTableBodyCellAttributes(rowIdx, i - 1, tableBodyCell);
            this._styleTableBodyCell(i - 1, tableBodyCell);
          }
        }
        else
        {
          var tableBodyRow = null;
          var isTableBodyRowNew = false;
          if (docFrag == null)
          {
            // check if we already have a <tr> element at that index
            tableBodyRow = this._getTableBodyRow(rowIdx);
            if (!tableBodyRow)
            {
              // if not then create one
              tableBodyRow = this._createTableBodyRow();
              isTableBodyRowNew = true;
            }
          }
          else
          {
            // if we have a documentFragment then always create a new <tr>
            tableBodyRow = this._createTableBodyRow();
            isTableBodyRowNew = true;
          }
          // insert the empty <tr> element into the table body DOM
          this._insertTableBodyRow(rowIdx, tableBodyRow, row, docFrag);
          var j, column;
          for (j = 0; j < columns.length; j++)
          {
            column = columns[j];
            // set the cells in the inserted row with values from the row
            this._setTableBodyCell(rowIdx, j, tableBodyRow, row, isTableBodyRowNew);
          }
        }
      },
      /**
       * Refresh the rowIdxs of all the rows in the table
       * @private
       */
      _refreshTableBodyRowIdxs: function()
      {
        var tableBodyRows = this._getTableBodyRows();
        var data = this._getData();
        if (tableBodyRows != null && tableBodyRows.length > 0)
        {
          var i, j, rowKey, tableBodyRow, tableRowModel, rowIdx, tableBodyCells;
          for (i = 0; i < tableBodyRows.length; i++)
          {
            tableBodyRow = $(tableBodyRows[i]);
            rowKey = this._getElementRowKey(tableBodyRow);
            tableRowModel = data.get(rowKey);
            if (tableRowModel != null)
            {
              rowIdx = data.indexOf(tableRowModel);

              this._setElementRowIdx(rowIdx, tableBodyRow);
              tableBodyCells = this._getTableBodyCells(rowIdx);

              for (j = 0; j < tableBodyCells.length; j++)
              {
                this._setElementRowIdx(rowIdx, tableBodyCells[j]);
              }
            }
          }
        }
      },
      /**
       * Refresh the table dimensions
       * @private
       */
      _refreshTableDimensions: function()
      {
        var options = this.options;
        var table = this._getTable();
        var tableHeader = this._getTableHeader();
        var tableFooter = this._getTableFooter();
        var tableHeaderRow = this._getTableHeaderRow();
        var tableContainer = this._getTableContainer();
        var tableBody = this._getTableBody();
        var data = this._getData();

        // set the style attr just in case it was updated
        this._styleTableContainer(tableContainer);

        // fix up the table header padding to accommodate the sort links
        this._refreshColumnHeaderPadding();

        // first remove any styling so that the browser sizes the table
        this._removeTableDimenionsStyling();

        if (!this._isTableHeightSet() && !this._isTableWidthSet())
        {
          if (data != null && data.size() > 0)
          {
            // if we have data and height and width are not specified then
            // we want the databody to be the same size as the row data
            tableBody.css('display', 'table-row-group');
          }
          else
          {
            tableBody.css('display', 'block');
          }

          if (!this._isIE())
          {
            // size the tableBody so it's at least min size
            var minHeight = parseInt(table.css('minHeight'), 10);
            if (minHeight > 0)
            {
              var tableHeaderHeight = 0;
              if (tableHeader != null)
              {
                tableHeaderHeight = tableHeader.height();
              }
              var tableFooterHeight = 0;
              if (tableFooter != null)
              {
                tableFooterHeight = tableFooter.height();
              }
              tableBody.css('min-height', minHeight - tableHeaderHeight - tableFooterHeight + 'px');
            }
          }

          this._refreshTableMessagingPosition();

          // we don't need to set any other table dimensions if height or width are not specified
          // just let the browser do everything
          return;
        }

        this._setHeaderColumnAndCellColumnWidths();

        // apply the styling which sets the fixed column headers, etc
        var tableHeaderHeight = 0;
        if (tableHeader != null)
        {
          if (this._isTableHeightSet() || this._isTableWidthSet())
          {
            tableHeader.css('position', 'absolute');
            tableHeaderRow.css('display', 'block');
          }

          if (this._useFallbackScrolling)
          {
            tableHeader.css('position', 'absolute');
            tableHeader.css('top', '0px');
            // if we use fallback scrolling then the padding top of the container is used to 
            // position the table scroller to below the table header.
            tableContainer.css('padding-top', tableHeader.height() + 'px');
          }
          tableHeaderHeight = tableHeader.height();
          tableBody.css('top', tableHeaderHeight + 'px');
        }
        var tableFooterHeight = 0;
        if (tableFooter != null)
        {
          if (this._isTableHeightSet() || this._isTableWidthSet())
          {
            tableFooter.css('position', 'absolute');
            tableFooter.css('display', 'block');
          }
          tableFooterHeight = tableFooter.height();
        }

        tableBody.css('display', 'block');

        if (this._isTableHeightSet() || this._isTableWidthSet())
        {
          table.css('display', 'block');
          tableBody.css('position', 'relative');

          if (!this._useFallbackScrolling)
          {
            tableBody.css('overflow-y', 'auto');

            if (this._isTableWidthSet())
            {
              tableBody.css('overflow-x', 'auto');
              tableBody.css('width', this._getSpecifiedTableWidth());
              if (tableHeader != null)
              {
                tableHeader.css('width', this._getSpecifiedTableWidth());
              }
            }
            else
            {
              tableBody.css('overflow-x', 'hidden');
            }

            if (this._isTableHeightSet())
            {
              // if we don't use fallbacks crolling then size the table body
              // to fit in the height
              var tableBodyHeight = this._getSpecifiedTableHeight() - tableHeaderHeight - tableFooterHeight;
              tableBody.css('height', tableBodyHeight + 'px');
              tableBody.css('min-height', tableBodyHeight + 'px');
            }
          }
          else
          {
            if (this._isTableHeightSet())
            {
              // if we use fallback scrolling then we don't size the table body 
              // because the table scroller div is used to size the data body
              // and provide scrolling
              tableContainer.css('padding-top', tableHeaderHeight + 'px');
            }
          }
          
          if (tableFooter != null)
          {
            // position the footer at the bottom
            tableFooter.css('top', tableHeaderHeight + tableBody.height() + 'px');
          }
        }

        var scrollbarWidth = this._getScrollbarWidth();
        var scrollbarHeight = this._getScrollbarHeight();

        if (!this._isTableWidthSet())
        {
          if ((data == null || data.size() == 0) && tableHeader != null)
          {
            // if width is not set and we don't currently have any data. We should
            // set the tableBody width to the tableHeader width to prevent 
            // a zero width table.
            tableBody.css('width', tableHeader.width() + 'px');
          }
          else
          {
            if (scrollbarWidth > 0)
            {
              // size the databody so it's full width
              var tableBodyRow = this._getTableBodyRow(0);
              tableBody.css('width', tableBodyRow.width() + scrollbarWidth + 'px');
            }
            else
            {
              tableBody.css('width', '');
            }
          }
        }

        var tableBodyWidth = tableBody.width();

        if (tableHeader != null)
        {
          if (scrollbarWidth > 0)
          {
            // if we have scrollbars then size the tableheader 
            // to align with the scrollbars
            tableHeader.css('overflow', 'hidden');
            tableHeader.css('width', tableBodyWidth - scrollbarWidth + 'px');
          }
          else
          {
            // else table header should be the same width as the table body
            tableHeader.css('width', tableBodyWidth + 'px');
          }
        }

        if (!this._isTableHeightSet() &&
          this._isTableWidthSet() &&
          tableHeader != null && !this._useFallbackScrolling)
        {
          // if only table width is set then we need to size the 
          // tableContainer div so that it includes the tbody and thead.
          // We need to manually do this because the thead has absolute positioning
          // and hence does not get included in the container div sizing
          var totalHeight = tableHeaderHeight + tableFooterHeight + tableBody.height();
          table.css('height', totalHeight + 'px');
        }

        if (this._useFallbackScrolling)
        {
          var tableDivScroller = this._getTableDivScroller();
          tableDivScroller.css('overflow', 'auto');

          if (this._isTableWidthSet())
          {
            tableDivScroller.css('width', this._getSpecifiedTableWidth());
          }

          if (this._isTableHeightSet())
          {
            tableDivScroller.css('height', this._getSpecifiedTableHeight());
          }

          if (tableHeader != null)
          {
            // save the tableHeader width for use later
            this._tableHeaderWidth = tableHeader.width();
          }
        }
        this._refreshTableMessagingPosition();
      },
      /**
       * Refresh the table footer
       * @private
       */
      _refreshTableFooter: function()
      {
        var tableFooter = this._getTableFooter();

        if (!tableFooter)
        {
          tableFooter = this._createTableFooter();
          tableFooter.empty();
        }
        var footerRenderer = this.options['footerRenderer'];

        if (footerRenderer)
        {
          var footerContent = footerRenderer({'footerContext': this._getRendererContextObject(null, tableFooter[0])});
           
          if (footerContent != null)
          {
            // if the renderer returned a value then we set it as the content
            // for the footer
            tableFooter.append(footerContent);
          }
          else
          {
            tableFooter = $(this._getTable().children('tfoot')[0]);
            tableFooter.addClass(this._CSS_CLASSES._TABLE_FOOTER_CLASS);
          }
        }
      },
      /**
       * Refresh the table header
       * @private
       */
      _refreshTableHeader: function()
      {
        var columns = this._getColumnDefs();
        var tableHeader = this._getTableHeader();

        if (!tableHeader)
        {
          if (this._isTableHeaderless())
          {
            return;
          }
          else
          {
            // metadata could have been updated to add column headers
            tableHeader = this._createTableHeader();
          }
        }

        var tableHeaderRow = this._getTableHeaderRow();
        // remove all the existing column headers
        tableHeaderRow.empty();

        if (columns && columns.length > 0)
        {
          var tableHeaderAccSelectRowColumn = this._createTableHeaderAccSelectRowColumn();
          tableHeaderRow.append(tableHeaderAccSelectRowColumn);
          // first validate column renderer metadata
          this._checkColumnRendererMetadata('header');

          var i, j, column, columnRenderers, headerRenderer, headerColumn, headerColumnContent;
          for (i = 0; i < columns.length; i++)
          {
            column = columns[i];
            columnRenderers = this.options['columnRenderers'];
            headerRenderer = this._getColumnRenderer(i, 'header');
            headerColumn = this._createTableHeaderColumn(i);
            this._insertTableHeaderColumn(i, headerColumn);

            if (headerRenderer)
            {
              // if headerRenderer is defined then call that
              headerColumnContent = headerRenderer({'headerContext': this._getRendererContextObject(null, headerColumn[0]),
                                                    'column': column});
              
              if (headerColumnContent != null)
              {
                // if the renderer returned a value then we set it as the content
                // for the headerColumn
                headerColumn.empty();
                headerColumn.append(headerColumnContent);
              }
              else
              {
                // if the renderer didn't return a value then the existing
                // headerColumn was manipulated. So get it and set the required
                // attributes just in case it was replaced or the attributes
                // got removed
                headerColumn = $(tableHeaderRow.children(':not(' + '.' + this._CSS_CLASSES._COLUMN_HEADER_ACC_SELECT_ROW_CLASS + ')')[i]);
                this._setTableHeaderColumnAttributes(i, headerColumn);
                this._styleTableHeaderColumn(i, headerColumn);
              }
            }
            // set the acc column selection checkbox
            this._createTableHeaderColumnAccSelect(i);
          }
          this._renderedTableHeaderColumns = true;
        }
      },
      /**
       * Refresh the table messaging position
       * @private
       */
      _refreshTableMessagingPosition: function()
      {
        var tableContainer = this._getTableContainer();
        var tableHeader = this._getTableHeader();
        var tableStatusMessage = this._getTableStatusMessage();
        var tableNoDataMessage = this._getTableNoDataMessage();
        // refresh the status message position
        tableStatusMessage.css('top', tableContainer.height() / 2 + 'px');
        tableStatusMessage.css('left', (tableContainer.width() - tableStatusMessage.width()) / 2 + 'px');

        // refresh the no data message position
        if (tableHeader != null)
        {
          var tableHeaderHeight = tableHeader.height();
          tableNoDataMessage.css('top', tableHeaderHeight + 'px');
        }
        else
        {
          tableNoDataMessage.css('top', '0px');
        }
      },
      /**
       * Register the events which will be published by the table component.
       * @private
       */
      _registerCustomEvents: function()
      {
        // ojtableactiverow handlers will be passed an object which contains the
        // old and new active row
        var jqEvent = (/** @type {{special: Object}} */($.event));
        var jqEventSpecial = jqEvent['special'];
        jqEventSpecial['ojtableactiverow'] = {
          /**
           * Handle event
           * @param {{handleObj: {handler: {apply: Function}}}} event
           * @private
           */
          handle: function(event) {
            var handleObj = event['handleObj'];
            return handleObj['handler'].apply(this, [event, arguments[1]]);
          }
        };
        // ojtablepreactiverow handlers will be passed an object which contains the
        // old and new active row
        jqEventSpecial['ojtablepreactiverow'] = {
          /**
           * Handle event
           * @param {{handleObj: {handler: {apply: Function}}}} event
           * @private
           */
          handle: function(event) {
            var handleObj = event['handleObj'];
            return handleObj['handler'].apply(this, [event, arguments[1]]);
          }
        };
        // ojtablescroll handlers will be passed an object which contains
        // the scrollTop and scrollLeft
        jqEventSpecial['ojtablescroll'] = {
          /**
           * Handle event
           * @param {{handleObj: {handler: {apply: Function}}}} event
           * @private
           */
          handle: function(event) {
            var handleObj = event['handleObj'];
            return handleObj['handler'].apply(this, [event, arguments[1]]);
          }
        };
        // ojtableselect handlers will be passed an object which contains
        // either the row or column index and the selectionAdded boolean which indicates whether
        // the selection was added or removed.
        jqEventSpecial['ojtableselect'] = {
          /**
           * Handle event
           * @param {{handleObj: {handler: {apply: Function}}}} event
           * @private
           */
          handle: function(event) {
            var handleObj = event['handleObj'];
            return handleObj['handler'].apply(this, [event, arguments[1]]);
          }
        };
      },
      /**
       * Register event listeners which need to be registered datasource. 
       * @private
       */
      _registerDataSourceEventListeners: function()
      {
        // register the listeners on the datasource
        var data = this._getData();
        if (data != null)
        {
          this._dataSourceEventHandlers = [];
          this._dataSourceEventHandlers.push({'eventType': oj.RowSet.EventType['REQUEST'], 'eventHandler': this._handleDataFetchStart.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.RowSet.EventType['SYNC'], 'eventHandler': this._handleDataFetchEnd.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.RowSet.EventType['SORT'], 'eventHandler': this._handleDataSort.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.RowSet.EventType['ADD'], 'eventHandler': this._handleDataRowAdd.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.RowSet.EventType['REMOVE'], 'eventHandler': this._handleDataRowRemove.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.RowSet.EventType['CHANGE'], 'eventHandler': this._handleDataRowChange.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.RowSet.EventType['RESET'], 'eventHandler': this._handleDataReset.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.RowSet.EventType['ERROR'], 'eventHandler': this._handleDataError.bind(this)});

          var i;
          for (i = 0; i < this._dataSourceEventHandlers.length; i++)
            data.on(this._dataSourceEventHandlers[i]['eventType'], this._dataSourceEventHandlers[i]['eventHandler']);
        }
      },
      /**
       * Register event listeners which need to be registered directly on
       * the DOM element.
       * @private
       */
      _registerDomEventListeners: function()
      {
        if (this._isTableWidthSet() || this._isTableHeightSet())
        {
          // if width or height is defined then we can have scrollbars so register scroll event listeners
          this._getScroller().scroll((function(event) {
            var scrollLeft = $(event.target).scrollLeft();
            var maxScrollLeft = $(event.target)[0].scrollWidth - $(event.target)[0].clientWidth;

            if (this._GetReadingDirection() === "rtl")
            {
              scrollLeft = maxScrollLeft - scrollLeft;
            }

            var scrollTop = $(event.target).scrollTop();
            var tableHeader = this._getTableHeader();

            if (!tableHeader)
            {
              return;
            }

            if (!this._useFallbackScrolling)
            {
              var tableHeaderRow = this._getTableHeaderRow();
              if (tableHeaderRow)
              {
                if (this._GetReadingDirection() === "rtl")
                {
                  tableHeaderRow.css('right', '-' + scrollLeft + 'px');
                }
                else
                {
                  tableHeaderRow.css('left', '-' + scrollLeft + 'px');
                }
              }
            }
            else
            {
              if (this._GetReadingDirection() === "rtl")
              {
                tableHeader.css('right', '-' + scrollLeft + 'px');
              }
              else
              {
                tableHeader.css('left', '-' + scrollLeft + 'px');
              }
              tableHeader.css('width', this._tableHeaderWidth + scrollLeft + 'px');
            }
            // trigger the ojtablescroll event so that listeners on the table
            // // component will be notified that the table was scrolled.
            this._trigger('scroll', event, {'scrollLeft': $(event.target).scrollLeft(), 'scrollTop': scrollTop});
          }).bind(this));
        }
      },
      /**
       * Register event listeners for resize the container DOM element.
       * @param {jQuery} element  DOM element
       * @private
       */
      _registerResizeListener: function(element)
      {         
        if (!this._isResizeListenerAdded)
        {
          var self = this;
          oj.DomUtils.addResizeListener(element[0], function(width, height)
                                                    {
                                                      self._refreshTableDimensions();
                                                    });
          this._isResizeListenerAdded = true;
        }
      },
       /**
       * Iterate through the columns and remove the widths
       * @private
       */
      _removeHeaderColumnAndCellColumnWidths: function()
      {
        var data = this._getData();
        var columns = this._getColumnDefs();
        
        var columnWidths = [];
        var columnPaddingWidths = [];
        var i, headerColumn, headerColumnRowDiv, headerColumnTextDivHeight, headerColumnTextDiv;
        for (i = 0; i < columns.length; i++)
        {
          headerColumn = this._getTableHeaderColumn(i);
          if (headerColumn != null)
          {
            headerColumn.css('min-width', '');
          }
        }
        
        if (data != null && data.size() > 0)
        {
          var tableBodyRows = this._getTableBodyRows();
          if (tableBodyRows != null && tableBodyRows.length > 0)
          {
            var firstRowIdx = this._getElementRowIdx(tableBodyRows[0]);
            var tableBodyCell, tableBodyCellPaddingWidth, adjustedColumnWidth;
            for (i = 0; i < columns.length; i++)
            {

              tableBodyCell = this._getTableBodyCell(firstRowIdx, i);
              tableBodyCell.css('min-width', '');
            }
          }
        }
      },
      /**
       * Remove a keyCode from our internal list of pressed keys. This is done on keyup.
       * @private
       */
      _removeKeyboardKey: function(keyCode)
      {
        var keyboardKeys = this._getKeyboardKeys();
        var i;
        for (i = 0; i < keyboardKeys.length; i++)
        {
          if (keyboardKeys[i] == keyCode)
          {
            keyboardKeys.splice(i, 1);
          }
        }
      },
      /**
       * Remove table dimensions styling
       * @private
       */
      _removeTableDimenionsStyling: function()
      {
        var table = this._getTable();
        var tableHeader = this._getTableHeader();        
        var tableHeaderRow = this._getTableHeaderRow();
        var tableBody = this._getTableBody();

        // first remove any styling so that the browser sizes the table
        if (tableHeader != null)
        {
          tableHeader.css('position', '');
          if (this._useFallbackScrolling)
          {
            tableHeader.css('top', '');
          }
          tableHeaderRow.css('display', '');
        }
        table.css('display', '');
        tableBody.css('display', '');
        tableBody.css('position', '');
        tableBody.css('overflow-y', '');
        tableBody.css('overflow-x', '');
        tableBody.css('width', '');
        
        this._removeHeaderColumnAndCellColumnWidths();
      },
      /**
       * Scroll column into viewport
       * @param {number} columnIdx  row index
       * @private
       */
      _scrollColumnIntoViewport: function(columnIdx)
      {
        var tableBody = this._getTableBody();
        var tableHeaderColumn = this._getTableHeaderColumn(columnIdx);

        if (!tableHeaderColumn)
        {
          return;
        }

        var scrollbarWidth = this._getScrollbarWidth();
        var headerColumnRect = tableHeaderColumn.get(0).getBoundingClientRect();
        var tableBodyRect = tableBody.get(0).getBoundingClientRect();

        var scrolledLeft = false;
        if (headerColumnRect.left < tableBodyRect.left)
        {
          var scrollLeftDiff = tableBodyRect.left - headerColumnRect.left;
          tableBody.scrollLeft(tableBody.scrollLeft() - scrollLeftDiff);
          scrolledLeft = true;
        }

        if (headerColumnRect.right > tableBodyRect.right - scrollbarWidth && !scrolledLeft)
        {
          var scrollLeftDiff = headerColumnRect.right - tableBodyRect.right + scrollbarWidth;
          tableBody.scrollLeft(tableBody.scrollLeft() + scrollLeftDiff);
        }
      },
      /**
       * Scroll row into viewport
       * @param {number} rowIdx  row index
       * @private
       */
      _scrollRowIntoViewport: function(rowIdx)
      {

        var tableBodyRow = this._getTableBodyRow(rowIdx);
        var scrollbarHeight = this._getScrollbarHeight();
        var rowRect = tableBodyRow.get(0).getBoundingClientRect();
        var scrollingElement = this._getScroller();
        var scrollingElementRect = scrollingElement.get(0).getBoundingClientRect();

        var scrolledDown = false;
        if (rowRect.bottom > scrollingElementRect.bottom - scrollbarHeight)
        {
          var scrollTopDiff = rowRect.bottom - scrollingElementRect.bottom + scrollbarHeight;
          scrollingElement.scrollTop(scrollingElement.scrollTop() + scrollTopDiff);
          scrolledDown = true;
        }

        if (rowRect.top < scrollingElementRect.top && !scrolledDown)
        {
          var scrollTopDiff = scrollingElementRect.top - rowRect.top;
          scrollingElement.scrollTop(scrollingElement.scrollTop() - scrollTopDiff);
        }

      },
      /**
       * Set column index on element
       * @param {number} columnIdx  column index
       * @param {jQuery} element  DOM element
       * @private
       */
      _setElementColumnIdx: function(columnIdx, element)
      {
        $(element).attr('data-oj-columnIdx', columnIdx);
      },
      /**
       * Set row index on element
       * @param {number} rowIdx  column index
       * @param {jQuery} element  DOM element
       * @private
       */
      _setElementRowIdx: function(rowIdx, element)
      {
        $(element).attr('data-oj-rowIdx', rowIdx);
      },
      /**
       * Set row key on element
       * @param {number} rowKey  row key
       * @param {jQuery} element  DOM element
       * @private
       */
      _setElementRowKey: function(rowKey, element)
      {
        $(element).attr('data-oj-rowKey', rowKey);
      },
       /**
       * Iterate through the columns and get and then set the widths
       * for the columns and first row this is so that when we re-apply the styling
       * the headers will align with the cells
       * @private
       */
      _setHeaderColumnAndCellColumnWidths: function()
      {
        var data = this._getData();
        var columns = this._getColumnDefs();
        
        var columnWidths = [];
        var columnPaddingWidths = [];
        var i, headerColumn, headerColumnRowDiv, headerColumnTextDivHeight, headerColumnTextDiv;
        for (i = 0; i < columns.length; i++)
        {
          headerColumn = this._getTableHeaderColumn(i);
          if (headerColumn != null)
          {
            // read in the widths first. Set the widths in a separate loop so setting
            // the widths of early columns does not affect the widths of the rest
            columnWidths[i] = headerColumn.width();
            columnPaddingWidths[i] = parseInt(headerColumn.css('padding-right'), 10) + parseInt(headerColumn.css('padding-left'), 10);

            // also set the header heights
            headerColumnTextDivHeight = null;
            headerColumnTextDiv = headerColumn.find('.' + this._CSS_CLASSES._COLUMN_HEADER_TEXT_CLASS);
            if (headerColumnTextDiv && headerColumnTextDiv.length > 0)
            {
              headerColumnTextDivHeight = headerColumnTextDiv.get(0).clientHeight;
            }
            if (headerColumnTextDivHeight != null)
            {
              headerColumnRowDiv = headerColumn.find('.' + this._CSS_CLASSES._COLUMN_HEADER_ROW_CLASS);
              headerColumnRowDiv.css('min-height', headerColumnTextDivHeight + 'px');
            }
          }
        }
        for (i = 0; i < columns.length; i++)
        {
          headerColumn = this._getTableHeaderColumn(i);
          if (headerColumn != null)
          {
            headerColumn.css('min-width', columnWidths[i] + 'px');
          }
        }
        
        if (data != null && data.size() > 0)
        {
          var tableBodyRows = this._getTableBodyRows();
          if (tableBodyRows != null && tableBodyRows.length > 0)
          {
            var firstRowIdx = this._getElementRowIdx(tableBodyRows[0]);
            var tableBodyCell, tableBodyCellPaddingWidth, adjustedColumnWidth;
            for (i = 0; i < columns.length; i++)
            {

              tableBodyCell = this._getTableBodyCell(firstRowIdx, i);
              tableBodyCellPaddingWidth = parseInt(tableBodyCell.css('padding-right'), 10) + parseInt(tableBodyCell.css('padding-left'), 10);
              adjustedColumnWidth = null;
              if (tableBodyCellPaddingWidth > columnPaddingWidths[i])
              {
                adjustedColumnWidth = columnWidths[i] - tableBodyCellPaddingWidth + columnPaddingWidths[i];
              }
              else
              {
                adjustedColumnWidth = columnWidths[i] + columnPaddingWidths[i] - tableBodyCellPaddingWidth;
              }
              tableBodyCell.css('min-width', adjustedColumnWidth + 'px');
            }
          }
        }
      },
      /**
       * Set focus on column header
       * @param {number} columnIdx  column index
       * @param {boolean} focused  whether it's focused
       * @param {jQuery} element  DOM element which triggered the column header focus
       * @private
       */
      _setHeaderColumnFocus: function(columnIdx, focused, element)
      {
        if (focused)
        {
          var focusedHeaderColumnIdx = this._getFocusedHeaderColumnIdx();
          if (focusedHeaderColumnIdx != null && focusedHeaderColumnIdx != columnIdx)
          {
            this._setHeaderColumnFocus(focusedHeaderColumnIdx, false, element);
          }
          // clear focused row
          this._clearFocusedRow();
          // clear selected rows
          this._clearSelectedRows();
          // scroll column into view
          this._scrollColumnIntoViewport(columnIdx);
        }
        this._setHeaderColumnState(columnIdx, {focused: focused}, element);
      },
      /**
       * Set selection on column header
       * @param {number} columnIdx  column index
       * @param {boolean} selected  whether it's focused
       * @param {jQuery} element  DOM element which triggered the column header selection
       * @param {Object} event
       * @private
       */
      _setHeaderColumnSelection: function(columnIdx, selected, element, event)
      {
        if (this._getColumnSelectionMode() == this._OPTION_SELECTION_MODES._SINGLE ||
          this._getColumnSelectionMode() == this._OPTION_SELECTION_MODES._MULTIPLE)
        {
          if (isNaN(columnIdx) || columnIdx < 0)
          {
            // validate value
            throw 'Error: Invalid column selection value: ' + columnIdx;
          }

          // if we have single selection then clear any existing selections
          if (this._getColumnSelectionMode() == this._OPTION_SELECTION_MODES._SINGLE && selected)
          {
            this._clearSelectedHeaderColumns();
          }
          this._setHeaderColumnState(columnIdx, {selected: selected}, element, event);
          // save it
          this._setLastHeaderColumnSelection(columnIdx, selected);
          
          // update the acc checkbox
          var accSelectionColumn = this._getTableHeaderColumnAccSelect(columnIdx);
          var accSelectCheckbox = $(accSelectionColumn.children('.' + this._CSS_CLASSES._CHECKBOX_ACC_SELECT_COLUMN_CLASS)[0]);
          accSelectCheckbox.prop('checked', selected);
        }
      },
      /**
       * Set the state of the column header. e.g., focused, selected, etc.
       * @param {number} columnIdx  column index
       * @param {Object} state  Object which contains whether it's focused or selected
       * @param {jQuery} element  DOM element which triggered the column header state
       * @param {Object} event
       * @private
       */
      _setHeaderColumnState: function(columnIdx, state, element, event)
      {
        var headerColumn = this._getTableHeaderColumn(columnIdx);

        if (!headerColumn)
        {
          return;
        }

        var focused = state.focused;
        var selected = state.selected;

        if (selected != null)
        {
          var headerColumnSelected = headerColumn.hasClass(this._MARKER_STYLE_CLASSES._SELECTED);

          var selectionChanged = false;
          if (headerColumnSelected != selected)
          {
            if (!selected)
            {
              headerColumn.removeClass(this._MARKER_STYLE_CLASSES._SELECTED);
            }
            else
            {
              headerColumn.addClass(this._MARKER_STYLE_CLASSES._SELECTED);
            }
            selectionChanged = true;
          }

          if (selectionChanged)
          {
            this._trigger('select', event, {'column': columnIdx, 'selectionAdded': selected});
          }
        }
        if (focused != null)
        {
          if (!focused)
          {
            headerColumn.removeClass(this._MARKER_STYLE_CLASSES._FOCUS);
            this._hideTableHeaderColumnSortLink(columnIdx, true);
            this._hideTableHeaderColumnSortLink(columnIdx, false);
          }
          else
          {
            headerColumn.addClass(this._MARKER_STYLE_CLASSES._FOCUS);
            this._showTableHeaderColumnSortLink(columnIdx, true);
            this._showTableHeaderColumnSortLink(columnIdx, false);
          }
        }
        this._updateHeaderColumnCellsClass(columnIdx);
      },
      /**
       * Set the last column which was selected (chronologically)
       * @param {number} columnIdx  column index
       * @param {boolean} selected  whether it's selected
       * @private
       */
      _setLastHeaderColumnSelection: function(columnIdx, selected)
      {
        if (!this._lastSelectedColumnIdxArray)
        {
          this._lastSelectedColumnIdxArray = [];
        }

        var i;
        for (i = 0; i < this._lastSelectedColumnIdxArray.length; i++)
        {
          if (this._lastSelectedColumnIdxArray[i] == columnIdx)
          {
            this._lastSelectedColumnIdxArray.splice(i, 1);
            break;
          }
        }

        if (selected)
        {
          this._lastSelectedColumnIdxArray.push(columnIdx);
        }
      },
      /**
       * Set the last row which was selected (chronologically)
       * @param {number} rowIdx  row index
       * @param {boolean} selected  whether it's selected
       * @private
       */
      _setLastRowSelection: function(rowIdx, selected)
      {
        if (!this._lastSelectedRowIdxArray)
        {
          this._lastSelectedRowIdxArray = [];
        }

        for (var i = 0; i < this._lastSelectedRowIdxArray.length; i++)
        {
          if (this._lastSelectedRowIdxArray[i] == rowIdx)
          {
            this._lastSelectedRowIdxArray.splice(i, 1);
            break;
          }
        }

        if (selected)
        {
          this._lastSelectedRowIdxArray.push(rowIdx);
        }
      },
      /**
       * Set focus on row
       * @param {number} rowIdx  row index
       * @param {boolean} focused  whether it's focused
       * @param {jQuery} element  DOM element which triggered the row focus
       * @private
       */
      _setRowFocus: function(rowIdx, focused, element)
      {
        if (rowIdx == -1)
        {
          this._clearFocusedRow();
          return;
        }
        var tableBodyRow = this._getTableBodyRow(rowIdx);

        if (focused)
        {
          var focusedRowIdx = this._getFocusedRowIdx();
          if (focusedRowIdx != null && focusedRowIdx != rowIdx)
          {
            this._setRowFocus(focusedRowIdx, false, element);
          }
          var activeRowIdx = this['activeRow'](rowIdx);
          if (activeRowIdx == rowIdx)
          {
            tableBodyRow.addClass(this._MARKER_STYLE_CLASSES._FOCUS);
            // only change focus if the active row assignment was successful
            this._scrollRowIntoViewport(rowIdx);
            // clear any hover on the row
            this._updateRowCellsClass(rowIdx, {focused: true, hover: false});
            // clear any focused column header
            this._clearFocusedHeaderColumn();
            // clear any selected column header
            this._clearSelectedHeaderColumns();
            // set to table navigation mode
            this._setTableNavigationMode(true);
          }
        }
        else
        {
          tableBodyRow.removeClass(this._MARKER_STYLE_CLASSES._FOCUS);
        }
        // update focus style for the cells
        this._updateRowCellsClass(rowIdx, {focused: focused});
      },
      /**
       * Set selection on row
       * @param {number} rowIdx  column index
       * @param {boolean} selected  whether it's selected
       * @param {jQuery} element  DOM element which triggered the row selection
       * @param {Object} event
       * @private
       */
      _setRowSelection: function(rowIdx, selected, element, event)
      {
        if (this._getRowSelectionMode() == this._OPTION_SELECTION_MODES._SINGLE ||
          this._getRowSelectionMode() == this._OPTION_SELECTION_MODES._MULTIPLE)
        {
          if (isNaN(rowIdx) || rowIdx < 0)
          {
            // validate value
            throw 'Error: Invalid row selection value: ' + rowIdx;
          }

          // if we have single selection then clear any existing selections
          if (this._getRowSelectionMode() == this._OPTION_SELECTION_MODES._SINGLE && selected)
          {
            this._clearSelectedRows();
          }
          var tableBodyRow = this._getTableBodyRow(rowIdx);
          var selectionChanged = false;

          var rowSelected = tableBodyRow.hasClass(this._MARKER_STYLE_CLASSES._SELECTED);

          if (rowSelected != selected)
          {
            if (!selected)
            {
              tableBodyRow.removeClass(this._MARKER_STYLE_CLASSES._SELECTED);
            }
            else
            {
              tableBodyRow.addClass(this._MARKER_STYLE_CLASSES._SELECTED);
            }
            selectionChanged = true;
          }

          if (selectionChanged)
          {
            this._trigger('select', event, {'row': rowIdx, 'selectionAdded': selected});
          }

          if (selectionChanged)
          {
            // if selection was set then we want to override
            // the default style precedence
            if (selected)
            {
              this._updateRowCellsClass(rowIdx, {hover: false, focused: false, selected: true});
            }
            else
            {
              this._updateRowCellsClass(rowIdx, {selected: false});
            }
          }
          // save it
          this._setLastRowSelection(rowIdx, selected);

          // update the acc checkbox
          var accSelectionCell = this._getTableBodyCellAccSelect(tableBodyRow);
          var accSelectCheckbox = $(accSelectionCell.children('.' + this._CSS_CLASSES._CHECKBOX_ACC_SELECT_ROW_CLASS)[0]);
          accSelectCheckbox.prop('checked', selected);
        }
      },
      /**
       * Set whether the component is in table navigation mode
       * @param {boolean} value true or false
       * @private
       */
      _setTableNavigationMode: function(value)
      {
        this._tableNavMode = value;
      },
      /**
       * Show the 'No data to display.'
       * @private
       */
      _showNoDataMessage: function()
      {
        var noDataMessage = this._getTableNoDataMessage();
        noDataMessage.css('display', 'inline');
      },
      /**
       * Show the Fetching Data... status message.
       * @private
       */
      _showStatusMessage: function()
      {
        var statusMessage = this._getTableStatusMessage();
        statusMessage.css('display', 'inline');
      },
      /**
       * Show the column header sort link
       * @param {number} columnIdx  column index
       * @param {boolean} ascending  sort order ascending
       * @private
       */
      _showTableHeaderColumnSortLink: function(columnIdx, ascending)
      {
        if (this._getColumnDefs()[columnIdx].sortable == this._OPTION_ENABLED)
        {
          var tableHeaderColumn = this._getTableHeaderColumn(columnIdx);

          if (!tableHeaderColumn)
          {
            return;
          }

          if (ascending)
          {
            var headerColumnAscLink = tableHeaderColumn.find('.' + this._CSS_CLASSES._COLUMN_HEADER_ASC_LINK_CLASS);
            headerColumnAscLink.addClass(this._MARKER_STYLE_CLASSES._ENABLED);
            headerColumnAscLink.removeClass(this._MARKER_STYLE_CLASSES._DISABLED);
          }
          else
          {
            var headerColumnDscLink = tableHeaderColumn.find('.' + this._CSS_CLASSES._COLUMN_HEADER_DSC_LINK_CLASS);
            headerColumnDscLink.addClass(this._MARKER_STYLE_CLASSES._ENABLED);
            headerColumnDscLink.removeClass(this._MARKER_STYLE_CLASSES._DISABLED);
          }
        }
      },
      /**
       * Update the css class from all the cells in a column according to column state
       * @param {number} columnIdx  column index
       * @param {boolean} blur  true or false
       * @private
       */
      _updateHeaderColumnCellsClass: function(columnIdx, blur)
      {
        var state = this._getHeaderColumnState(columnIdx);
        var selected = state.selected;
        var data = this._getData();
        var i, tableBodyCell;
        for (i = 0; i < data.size(); i++)
        {
          tableBodyCell = this._getTableBodyCell(i, columnIdx);
          if (!selected)
          {
            $(tableBodyCell).removeClass(this._MARKER_STYLE_CLASSES._SELECTED);
          }
          else
          {
            $(tableBodyCell).addClass(this._MARKER_STYLE_CLASSES._SELECTED);
          }
        }
      },
      /**
       * Update the css class from all the cells in a row according to row state
       * @param {number} rowIdx  row index
       * @param {Object} state  row state
       * @param {boolean} blur  true or false
       * @private
       */
      _updateRowCellsClass: function(rowIdx, state, blur)
      {
        var tableBodyCells = this._getTableBodyCells(rowIdx);
        var focused = state.focused;
        var selected = state.selected;
        var hover = state.hover;

        if (!tableBodyCells)
        {
          return;
        }

        if (hover != null)
        {
          var i;
          for (i = 0; i < tableBodyCells.length; i++)
          {
            if (!hover)
            {
              $(tableBodyCells[i]).removeClass(this._MARKER_STYLE_CLASSES._HOVER);
            }
            else
            {
              $(tableBodyCells[i]).addClass(this._MARKER_STYLE_CLASSES._HOVER);
            }
          }
        }
        if (focused != null)
        {
          var i;
          for (i = 0; i < tableBodyCells.length; i++)
          {
            if (!focused)
            {
              $(tableBodyCells[i]).removeClass(this._MARKER_STYLE_CLASSES._FOCUS);
            }
            else
            {
              $(tableBodyCells[i]).addClass(this._MARKER_STYLE_CLASSES._FOCUS);
            }
          }
        }
        if (selected != null)
        {
          var i;
          for (i = 0; i < tableBodyCells.length; i++)
          {
            if (!selected)
            {
              $(tableBodyCells[i]).removeClass(this._MARKER_STYLE_CLASSES._SELECTED);
            }
            else
            {
              $(tableBodyCells[i]).addClass(this._MARKER_STYLE_CLASSES._SELECTED);
            }
          }
        }
      },
      /**** end internal functions ****/

      /**** start internal DOM functions ****/

      /**
       * Add a default context menu to the table container if there is none. If there is
       * a context menu set on the table options we use that one. Add listeners
       * for context menu before show and select.
       * @return {jQuery} jQuery ul DOM element
       * @private	 
       */
      _createContextMenu: function()
      {
        var menuContainer = null;
        var sortMenu = null, listItems;
        var self = this;

        if (this._getData() != null)
        {
          if (this.options["contextMenu"]['menu'] == null)
          {
            menuContainer = $(document.createElement('ul'));
            menuContainer.css('display', 'none');
            menuContainer.attr('id', this._getTable().id + 'contextmenu');
            this._getTableContainer().append(menuContainer);
            sortMenu = this._createContextMenuItem('sort');
            menuContainer.append(sortMenu);
            menuContainer.ojMenu();
            this._setOption("contextMenu", {menu: menuContainer.attr('id')});
          }
          else
          {
            menuContainer = $('#' + this.options["contextMenu"]['menu']);
            listItems = menuContainer.find('[data-oj-command]');
            listItems.each(function() {
              var command;
              if ($(this).children('a').length === 0)
              {
                command = $(this).attr('data-oj-command').split("-");
                $(this).replaceWith(self._createContextMenuItem(command[command.length - 1]));
              }
            });
            menuContainer.ojMenu('refresh');
          }
          menuContainer.on("ojbeforeshow", this._handleContextMenuBeforeShow.bind(this));
          menuContainer.on("ojselect", this._handleContextMenuSelect.bind(this));
          this._menuContainer = menuContainer;
        }
        return menuContainer;
      },
      /**
       * Builds a menu for a command, takes care of submenus where appropriate
       * @return {jQuery} jQuery li DOM element
       * @private	 
       */
      _createContextMenuItem: function(command)
      {
        if (command === 'sort')
        {
          return $(this._createContextMenuListItem(command)).append($('<ul></ul>').append($(this._createContextMenuListItem('sortAsc'))).append($(this._createContextMenuListItem('sortDsc'))));
        }
        else if (Object.keys(this.resources.commands).indexOf(command) != -1)
        {
          return $(this._createContextMenuListItem(command));
        }
        return null;
      },
      /**
       * Builds a context menu list item from a command
       * @param {string} command the string to look up command value for as well as translation
       * @return {jQuery} jQuery li DOM element
       * @private	 
       */
      _createContextMenuListItem: function(command)
      {
        var contextMenuListItem = $(document.createElement('li'));
        contextMenuListItem.attr('data-oj-command', 'oj-table-' + command);
        contextMenuListItem.append(this._createContextMenuLabel(command));
        
        return contextMenuListItem;
      },
      /**
       * Builds a context menu label by looking up command translation
       * @param {string} command the string to look up translation for
       * @return {jQuery} jQuery a DOM element
       * @private	 
       */
      _createContextMenuLabel: function(command)
      {
        var contextMenuLabel = $(document.createElement('a'));
        contextMenuLabel.attr('href', '#');
        var commandString = null;
        if (command == 'sort')
        {
           commandString = this.getTranslatedString('labelSort');
        }
        else if (command == 'sortAsc')
        {
          commandString = this.getTranslatedString('labelSortAsc');
        }
        else if (command == 'sortDsc')
        {
          commandString = this.getTranslatedString('labelSortDsc');
        }
        contextMenuLabel.append(commandString);
        
        return contextMenuLabel;
      },
      /**
       * Create an empty tbody element with appropriate styling
       * @return {jQuery} jQuery tbody DOM element
       * @private
       */
      _createTableBody: function()
      {
        var table = this._getTable();
        var tableBody = $(document.createElement('tbody'));
        tableBody.addClass(this._CSS_CLASSES._TABLE_BODY_CLASS);
        table.append(tableBody);
        
        // Add a special marker attribute to tell child components that they are container within table
        tableBody.attr(oj.Components._OJ_CONTAINER_ATTR, this.widgetName);

        return tableBody;
      },
      /**
       * Create an empty td element with appropriate styling
       * @param {number} rowIdx  row index
       * @param {number} columnIdx  column index
       * @return {jQuery} jQuery td DOM element
       * @private
       */
      _createTableBodyCell: function(rowIdx, columnIdx)
      {
        var tableBodyCell = $(document.createElement('td'));
        this._styleTableBodyCell(columnIdx, tableBodyCell);

        return tableBodyCell;
      },
      /**
       * Create a checkbox for accessibility row selection
       * @param {jQuery} tableBodyRow  tr DOM element
       * @return {jQuery} jQuery td DOM element
       * @private
       */
      _createTableBodyCellAccSelect: function(tableBodyRow)
      {
        var rowIdx = this._getElementRowIdx(tableBodyRow);
        var accSelectionCell = this._getTableBodyCellAccSelect(tableBodyRow);

        if (accSelectionCell != null)
        {
          return accSelectionCell;
        }

        accSelectionCell = $(document.createElement('td'));
        accSelectionCell.addClass(this._CSS_CLASSES._TABLE_DATA_CELL_ACC_SELECT_CLASS);
        accSelectionCell.addClass(this._CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS);
        if (!this._isTableHeaderless())
        {
          accSelectionCell.attr('headers', this._COLUMN_HEADER_ROW_SELECT_ID);
        }
        var accSelectCheckbox = $(document.createElement('input'));
        // set the row index on the element
        this._setElementRowIdx(rowIdx, accSelectCheckbox);
        accSelectCheckbox.attr('id', 'acc_sel_row' + rowIdx);
        accSelectCheckbox.attr('type', 'checkbox');
        accSelectCheckbox.attr('tabindex', '-1');
        var selectRowTitle = this.getTranslatedString(this._BUNDLE_KEY._LABEL_SELECT_ROW);
        accSelectCheckbox.attr('title', selectRowTitle);
        accSelectCheckbox.addClass(this._CSS_CLASSES._CHECKBOX_ACC_SELECT_ROW_CLASS);
        accSelectionCell.append(accSelectCheckbox);
        tableBodyRow.prepend(accSelectionCell);

        return accSelectionCell;
      },
      /**
       * Create an empty tr element with appropriate styling
       * @return {jQuery} jQuery tr DOM element
       * @private
       */
      _createTableBodyRow: function()
      {
        var tableBodyRow = $(document.createElement('tr'));
        this._styleTableBodyRow(tableBodyRow);

        return tableBodyRow;
      },
      /**
       * Create an empty div element with appropriate styling
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createTableContainer: function()
      {
        var options = this.options;
        // need to enclose the table in a div to provide horizontal scrolling
        var tableContainer = $(document.createElement('div'));
        this.element.parent()[0].replaceChild(tableContainer[0], this.element[0]);
        tableContainer.prepend(this.element);
        this._styleTableContainer(tableContainer);

        return tableContainer;
      },
      /**
       * Create an empty tfoot with appropriate styling
       * @return {jQuery} jQuery tfoot DOM element
       * @private
       */
      _createTableFooter: function()
      {
        var table = this._getTable();
        var tableFooter = $(document.createElement('tfoot'));
        tableFooter.addClass(this._CSS_CLASSES._TABLE_FOOTER_CLASS);
        table.append(tableFooter);

        return tableFooter;
      },
      /**
       * Create an empty thead & tr element with appropriate styling
       * @return {jQuery} jQuery thead DOM element
       * @private
       */
      _createTableHeader: function()
      {
        var table = this._getTable();
        var tableHeader = $(document.createElement('thead'));
        tableHeader.addClass(this._CSS_CLASSES._TABLE_HEADER_CLASS);
        tableHeader.css('display', 'table-header-group');
        var tableHeaderRow = $(document.createElement('tr'));
        tableHeaderRow.addClass(this._CSS_CLASSES._TABLE_HEADER_ROW_CLASS);
        tableHeaderRow.css('position', 'relative');
        tableHeader.append(tableHeaderRow);
        table.prepend(tableHeader);

        return tableHeader;
      },
      /**
       * Create a th element for accessibility row selection
       * @return {jQuery} jQuery th DOM element
       * @private
       */
      _createTableHeaderAccSelectRowColumn: function()
      {
        var headerColumn = $(document.createElement('th'));
        headerColumn.addClass(this._CSS_CLASSES._COLUMN_HEADER_ACC_SELECT_ROW_CLASS);
        headerColumn.addClass(this._CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS);
        headerColumn.attr('id', this._COLUMN_HEADER_ROW_SELECT_ID);
        var selectRowTitle = this.getTranslatedString(this._BUNDLE_KEY._LABEL_SELECT_ROW);
        headerColumn.attr('title', selectRowTitle);
        headerColumn.append(selectRowTitle);

        return headerColumn;
      },
      /**
       * Create a th element with appropriate styling and column content
       * @param {number} columnIdx  column index
       * @return {jQuery} jQuery th DOM element
       * @private
       */
      _createTableHeaderColumn: function(columnIdx)
      {
        var column = this._getColumnDefs()[columnIdx];
        var headerColumn = $(document.createElement('th'));
        this._styleTableHeaderColumn(columnIdx, headerColumn);
        var headerColumnRowDiv = $(document.createElement('div'));
        headerColumnRowDiv.addClass(this._CSS_CLASSES._COLUMN_HEADER_ROW_CLASS);
        headerColumnRowDiv.css('float', 'none');
        headerColumn.append(headerColumnRowDiv);
        // the text div contains the column header text
        var headerColumnTextDiv = $(document.createElement('div'));
        var headerColumnShowRequiredSpan = null;

        if (column.showRequired == this._OPTION_ENABLED)
        {
          // show required asterix
          headerColumnShowRequiredSpan = $(document.createElement('span'));
          headerColumnShowRequiredSpan.addClass(this._CSS_CLASSES._COLUMN_HEADER_SHOW_REQUIRED_CLASS);
          headerColumnShowRequiredSpan.attr('title', 'Required');
          headerColumnShowRequiredSpan.append('*');
        }
        if (headerColumnShowRequiredSpan != null)
        {
          headerColumnTextDiv.append(headerColumnShowRequiredSpan);
        }
        headerColumnTextDiv.addClass(this._CSS_CLASSES._COLUMN_HEADER_TEXT_CLASS);
        headerColumnRowDiv.append(headerColumnTextDiv);
        var headerColumnTextCellDiv = $(document.createElement('div'));
        headerColumnTextCellDiv.attr('style', column.headerStyle);
        if (column.headerClassName)
        {
          headerColumnTextCellDiv.addClass(column.headerClassName);
        }
        headerColumnTextCellDiv.css('display', 'table-cell');
        headerColumnTextCellDiv.css('vertical-align', 'middle');
        headerColumnTextCellDiv.append(column.headerText);
        headerColumnTextDiv.append(headerColumnTextCellDiv);
        // sort ascending link
        var headerColumnAscDiv = $(document.createElement('div'));
        headerColumnAscDiv.addClass(this._CSS_CLASSES._COLUMN_HEADER_ASC_CLASS);
        headerColumnRowDiv.append(headerColumnAscDiv);
        if (column.sortable == this._OPTION_ENABLED)
        {
          var headerColumnAscLink = $(document.createElement('a'));
          headerColumnAscLink.addClass(this._CSS_CLASSES._COLUMN_HEADER_ASC_LINK_CLASS);
          headerColumnAscLink.addClass(this._CSS_CLASSES._WIDGET_ICON_CLASS);
          headerColumnAscLink.addClass(this._CSS_CLASSES._COLUMN_HEADER_ASC_ICON_CLASS);
          headerColumnAscLink.addClass(this._MARKER_STYLE_CLASSES._DISABLED);
          headerColumnAscLink.addClass(this._MARKER_STYLE_CLASSES._CLICKABLE_ICON);
          this._hoverable(headerColumnAscLink);
          this._setElementColumnIdx(columnIdx, headerColumnAscLink);
          headerColumnAscDiv.append(headerColumnAscLink);
          headerColumn.attr('data-oj-sortable', this._OPTION_ENABLED);
        }
        //sort descending link
        var headerColumnDscDiv = $(document.createElement('div'));
        headerColumnDscDiv.addClass(this._CSS_CLASSES._COLUMN_HEADER_DSC_CLASS);
        headerColumnRowDiv.append(headerColumnDscDiv);
        if (column.sortable == this._OPTION_ENABLED)
        {
          var headerColumnDscLink = $(document.createElement('a'));
          headerColumnDscLink.addClass(this._CSS_CLASSES._COLUMN_HEADER_DSC_LINK_CLASS);
          headerColumnDscLink.addClass(this._CSS_CLASSES._WIDGET_ICON_CLASS);
          headerColumnDscLink.addClass(this._CSS_CLASSES._COLUMN_HEADER_DSC_ICON_CLASS);
          headerColumnDscLink.addClass(this._MARKER_STYLE_CLASSES._DISABLED);
          headerColumnDscLink.addClass(this._MARKER_STYLE_CLASSES._CLICKABLE_ICON);
          this._hoverable(headerColumnDscLink);
          this._setElementColumnIdx(columnIdx, headerColumnDscLink);
          headerColumnDscDiv.append(headerColumnDscLink);
        }

        return headerColumn;
      },
      /**
       * Create a checkbox for accessibility column selection
       * @param {number} columnIdx  column index
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createTableHeaderColumnAccSelect: function(columnIdx)
      {
        if (this._getColumnSelectionMode() != this._OPTION_SELECTION_MODES._SINGLE &&
          this._getColumnSelectionMode() != this._OPTION_SELECTION_MODES._MULTIPLE)
        {
          return null;
        }
        var headerColumn = this._getTableHeaderColumn(columnIdx);
        var accSelectionHeaderColumn = this._getTableHeaderColumnAccSelect(columnIdx);

        if (accSelectionHeaderColumn != null)
        {
          return accSelectionHeaderColumn;
        }

        accSelectionHeaderColumn = $(document.createElement('div'));
        accSelectionHeaderColumn.addClass(this._CSS_CLASSES._COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS);
        accSelectionHeaderColumn.addClass(this._CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS);
        var accSelectCheckbox = $(document.createElement('input'));
        // set the column index on the element
        this._setElementColumnIdx(columnIdx, accSelectCheckbox);
        accSelectCheckbox.attr('id', 'acc_sel_col' + columnIdx);
        accSelectCheckbox.attr('type', 'checkbox');
        accSelectCheckbox.attr('tabindex', '-1');
        var selectColumnTitle = this.getTranslatedString(this._BUNDLE_KEY._LABEL_SELECT_COLUMN);
        accSelectCheckbox.attr('title', selectColumnTitle);
        accSelectCheckbox.addClass(this._CSS_CLASSES._CHECKBOX_ACC_SELECT_COLUMN_CLASS);
        accSelectionHeaderColumn.append(accSelectCheckbox);
        headerColumn.prepend(accSelectionHeaderColumn);

        return accSelectionHeaderColumn;
      },
      /**
       * Create a div element for table scrolling. Used in scrolling fallback mode.
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createTableDivScroller: function()
      {
        var table = this._getTable();
        var tableDivScroller = $(document.createElement('div'));
        tableDivScroller.addClass(this._CSS_CLASSES._TABLE_SCROLLER_CLASS);
        var tableContainer = table.parent();
        tableContainer.remove('.' + this._CSS_CLASSES._TABLE_CLASS);
        tableContainer.append(tableDivScroller);
        tableDivScroller.append(table);

        return tableDivScroller;
      },
      /**
       * Create a div element for the 'No data to display' message
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createTableNoDataMessage: function()
      {
        var tableContainer = this._getTableContainer();
        var noDataMessage = $(document.createElement('div'));
        noDataMessage.addClass(this._CSS_CLASSES._TABLE_NO_DATA_MESSAGE_CLASS);
        noDataMessage.css('display', 'none');
        noDataMessage.css('position', 'absolute');
        noDataMessage.css('z-index', 5000);
        noDataMessage.append(this.getTranslatedString(this._BUNDLE_KEY._MSG_NO_DATA));
        tableContainer.append(noDataMessage);

        return noDataMessage;
      },
      /**
       * Create a div element for the Fetching Data... status message
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createTableStatusMessage: function()
      {
        var tableContainer = this._getTableContainer();
        var statusMessage = $(document.createElement('div'));
        statusMessage.addClass(this._CSS_CLASSES._TABLE_STATUS_MESSAGE_CLASS);
        statusMessage.css('display', 'none');
        statusMessage.css('position', 'absolute');
        statusMessage.css('z-index', 5000);
        statusMessage.append(this.getTranslatedString(this._BUNDLE_KEY._MSG_FETCHING_DATA));
        tableContainer.append(statusMessage);

        return statusMessage;
      },
      /**
       * Get the context menu
       * @return  {jQuery} jQuery table DOM element
       * @private	 
       */
      _getContextMenu: function()
      {
        return this._menuContainer;
      },
      /**
       * Return the table element
       * @return {jQuery} jQuery table DOM element
       * @private
       */
      _getTable: function()
      {
        return $(this.element);
      },
      /**
       * Return the table body element
       * @return {jQuery|null} jQuery tbody DOM element
       * @private
       */
      _getTableBody: function()
      {
        if (!this._cachedDomTableBody)
        {
          var table = this._getTable();
          var tableBody = null;
          if (table)
          {
            tableBody = table.find('.' + this._CSS_CLASSES._TABLE_BODY_CLASS);
            if (tableBody && tableBody.length > 0)
            {
              this._cachedDomTableBody = $(tableBody.get(0));
            }
          }
        }

        return this._cachedDomTableBody;
      },
      /**
       * Return the cell element
       * param {number} rowIdx  row index
       * param {number} columnIdx  column index
       * @param {jQuery} tableBodyRow  tr DOM element
       * @return {jQuery|null} jQuery td DOM element
       * 
       * @private
       */
      _getTableBodyCell: function(rowIdx, columnIdx, tableBodyRow)
      {
        var tableBodyCells = null;
        if (tableBodyRow == null)
        {
          tableBodyCells = this._getTableBodyCells(rowIdx);
          if (!tableBodyCells)
          {
            return null;
          }
        }
        else
        {
          tableBodyCells = tableBodyRow.children('.' + this._CSS_CLASSES._TABLE_DATA_CELL_CLASS);
        }

        // this should return the correct cell
        if (tableBodyCells.length > columnIdx)
        {
          var tableBodyCellColumnIdx = this._getElementColumnIdx(tableBodyCells[columnIdx]);
          if (tableBodyCellColumnIdx == columnIdx)
          {
            return $(tableBodyCells[columnIdx]);
          }
        }

        // if not, search through all the cells
        var i;
        for (i = 0; i < tableBodyCells.length; i++)
        {
          if (this._getElementColumnIdx(tableBodyCells[i]) == columnIdx)
          {
            return $(tableBodyCells[i]);
          }
        }

        return null;
      },
      /**
       * Get checkbox cell for accessibility row selection
       * @param {jQuery} tableBodyRow  tr DOM element
       * @return {jQuery|null} jQuery td DOM element
       * @private
       */
      _getTableBodyCellAccSelect: function(tableBodyRow)
      {
        if (tableBodyRow != null)
        {
          var accSelectionCell = tableBodyRow.find('.' + this._CSS_CLASSES._TABLE_DATA_CELL_ACC_SELECT_CLASS);

          if (accSelectionCell != null && accSelectionCell.length > 0)
          {
            return $(accSelectionCell[0]);
          }
        }
        return null;
      },
      /**
       * Return all the cell elements in a row
       * @param {number} rowIdx  row index
       * @return {jQuery|null} jQuery array of td DOM elements
       * @private
       */
      _getTableBodyCells: function(rowIdx)
      {
        var tableBodyRow = this._getTableBodyRow(rowIdx);

        if (!tableBodyRow)
        {
          return null;
        }

        var tableBodyCellElements = tableBodyRow.children('.' + this._CSS_CLASSES._TABLE_DATA_CELL_CLASS);

        if (tableBodyCellElements != null && tableBodyCellElements.length > 0)
        {
          return tableBodyCellElements;
        }

        return null;
      },
      /**
       * Return table row
       * @param {number} rowIdx  row index
       * @return {jQuery|null} jQuery tr DOM element
       * @private
       */
      _getTableBodyRow: function(rowIdx)
      {
        var tableBodyRows = this._getTableBodyRows();

        if (!tableBodyRows)
        {
          return null;
        }

        // this should return the correct row
        if (tableBodyRows.length > rowIdx)
        {
          var tableBodyRowIdx = this._getElementRowIdx(tableBodyRows[rowIdx]);
          if (tableBodyRowIdx == rowIdx)
          {
            return $(tableBodyRows[rowIdx]);
          }
        }

        // if not, search through all the rows
        var i;
        for (i = 0; i < tableBodyRows.length; i++)
        {
          if (this._getElementRowIdx(tableBodyRows[i]) == rowIdx)
          {
            return $(tableBodyRows[i]);
          }
        }

        return null;
      },
      /**
       * Return all the table rows
       * @return {jQuery|null} jQuery array of tr DOM elements
       * @private
       */
      _getTableBodyRows: function()
      {
        if (!this._cachedDomTableBodyRows)
        {
          var tableBody = this._getTableBody();
          var tableBodyRowElements = tableBody.children('.' + this._CSS_CLASSES._TABLE_DATA_ROW_CLASS);

          if (tableBodyRowElements != null && tableBodyRowElements.length > 0)
          {
            this._cachedDomTableBodyRows = tableBodyRowElements;
          }
        }

        return this._cachedDomTableBodyRows;
      },
      /**
       * Return the table container
       * @return {jQuery|null} jQuery div DOM element
       * @private
       */
      _getTableContainer: function()
      {
        if (!this._cachedDomTableContainer)
        {
          if (!this._useFallbackScrolling)
          {
            this._cachedDomTableContainer = $(this.element.get(0).parentNode);
          }
          else
          {
            this._cachedDomTableContainer = $(this.element.get(0).parentNode.parentNode);
          }
        }

        return this._cachedDomTableContainer;
      },
      /**
       * Return the table footer
       * @return {jQuery|null} jQuery tfoot DOM element
       * @private
       */
      _getTableFooter: function()
      {
        var table = this._getTable();
        var tableFooter = null;
        if (table)
        {
          tableFooter = table.find('.' + this._CSS_CLASSES._TABLE_FOOTER_CLASS);
          if (tableFooter && tableFooter.length > 0)
          {
            tableFooter = $(tableFooter.get(0));
          }
        }

        return tableFooter;
      },
      /**
       * Return the table header
       * @return {jQuery|null} jQuery thead DOM element
       * @private
       */
      _getTableHeader: function()
      {
        if (!this._cachedDomTableHeader)
        {
          var table = this._getTable();
          var tableHeader = null;
          if (table)
          {
            tableHeader = table.find('.' + this._CSS_CLASSES._TABLE_HEADER_CLASS);
            if (tableHeader && tableHeader.length > 0)
            {
              this._cachedDomTableHeader = $(tableHeader.get(0));
            }
          }
        }

        return this._cachedDomTableHeader;
      },
      /**
       * Return table column header
       * @param {number} columnIdx  column index
       * @return {jQuery|null} jQuery th DOM element
       * @private
       */
      _getTableHeaderColumn: function(columnIdx)
      {
        var headerColumns = this._getTableHeaderColumns();

        if (!headerColumns)
        {
          return null;
        }

        // this should return the correct header column
        if (headerColumns.length > columnIdx)
        {
          var headerColumnIdx = this._getElementRowIdx(headerColumns[columnIdx]);
          if (headerColumnIdx == columnIdx)
          {
            return $(headerColumns[columnIdx]);
          }
        }

        // if not, search through all the headdesre columns
        var i;
        for (i = 0; i < headerColumns.length; i++)
        {
          if (this._getElementColumnIdx(headerColumns[i]) == columnIdx)
          {
            return $(headerColumns[i]);
          }
        }

        return null;
      },
      /**
       * Get checkbox cell for accessibility column selection
       * @param {number} columnIdx  column index
       * @return {jQuery|null} jQuery td DOM element
       * @private
       */
      _getTableHeaderColumnAccSelect: function(columnIdx)
      {
        var headerColumn = this._getTableHeaderColumn(columnIdx);
        
        if (headerColumn != null)
        {
          var accSelectionCell = headerColumn.find('.' + this._CSS_CLASSES._COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS);

          if (accSelectionCell != null && accSelectionCell.length > 0)
          {
            return $(accSelectionCell[0]);
          }
        }
        return null;
      },
      /**
       * Return all table column headers
       * @return {jQuery|null} jQuery array of th DOM elements
       * @private
       */
      _getTableHeaderColumns: function()
      {
        var tableHeaderRow = this._getTableHeaderRow();
        
        if (tableHeaderRow != null)
        {
          var headerColumnElements = tableHeaderRow.children('.' + this._CSS_CLASSES._COLUMN_HEADER_CLASS);

          if (headerColumnElements != null && headerColumnElements.length > 0)
          {
            return headerColumnElements;
          }
        }

        return null;
      },
      /**
       * Return table header row
       * @return {jQuery|null} jQuery th DOM element
       * @private
       */
      _getTableHeaderRow: function()
      {
        if (!this._cachedDomTableHeaderRow)
        {
          var tableHeader = this._getTableHeader();

          if (!tableHeader)
          {
            return null;
          }

          this._cachedDomTableHeaderRow = $(tableHeader.children('.' + this._CSS_CLASSES._TABLE_HEADER_ROW_CLASS).get(0));
        }

        return this._cachedDomTableHeaderRow;
      },
      /**
       * Return the table div scroller
       * @return {jQuery|null} jQuery div DOM element
       * @private
       */
      _getTableDivScroller: function()
      {
        if (!this._cachedDomTableDivScroller)
        {
          var tableContainer = this._getTableContainer();
          if (tableContainer)
          {
            var tableDivScroller = tableContainer.find('.' + this._CSS_CLASSES._TABLE_SCROLLER_CLASS);
            if (tableDivScroller && tableDivScroller.length > 0)
            {
              this._cachedDomTableDivScroller = $(tableDivScroller.get(0));
            }
          }
        }
        return this._cachedDomTableDivScroller;
      },
      /**
       * Return the table no data message element
       * @return {jQuery|null} jQuery div DOM element
       * @private
       */
      _getTableNoDataMessage: function()
      {
        if (!this._cachedDomTableNoDataMessage)
        {
          var tableContainer = this._getTableContainer();
          if (tableContainer)
          {
            var noDataMessage = tableContainer.find('.' + this._CSS_CLASSES._TABLE_NO_DATA_MESSAGE_CLASS);
            if (noDataMessage && noDataMessage.length > 0)
            {
              this._cachedDomTableNoDataMessage = $(noDataMessage.get(0));
            }
          }
        }
        return this._cachedDomTableNoDataMessage;
      },
      /**
       * Return the table status message element
       * @return {jQuery|null} jQuery div DOM element
       * @private
       */
      _getTableStatusMessage: function()
      {
        if (!this._cachedDomTableStatusMessage)
        {
          var tableContainer = this._getTableContainer();
          if (tableContainer)
          {
            var statusMessage = tableContainer.find('.' + this._CSS_CLASSES._TABLE_STATUS_MESSAGE_CLASS);
            if (statusMessage && statusMessage.length > 0)
            {
              this._cachedDomTableStatusMessage = $(statusMessage.get(0));
            }
          }
        }

        return this._cachedDomTableStatusMessage;
      },
      /**
       * Insert a td element in the appropriate place in the DOM
       * @param {number} rowIdx  row index
       * @param {number} columnIdx  column index
       * @param {jQuery} tableBodyCell  DOM element
       * @param {jQuery} tableBodyRow  tr DOM element
       * @param {boolean} isTableBodyRowNew Is row new?
       * @private
       */
      _insertTableBodyCell: function(rowIdx, columnIdx, tableBodyCell, tableBodyRow, isTableBodyRowNew)
      {
        this._setTableBodyCellAttributes(rowIdx, columnIdx, tableBodyCell);

        var tableBodyCells = $(tableBodyRow).children('.' + this._CSS_CLASSES._TABLE_DATA_CELL_CLASS);
        if (columnIdx == 0)
        {
          // just append it
          tableBodyRow.append(tableBodyCell);
        }
        else
        {
          if (isTableBodyRowNew)
          {
            // if it's a new row then just keep appending the tows at the end
            $(tableBodyCells.get(tableBodyCells.length - 1)).after(tableBodyCell);
            return tableBodyCell;
          }
          else
          {
            // should get us the correct position
            if (tableBodyCells.length >= columnIdx)
            {
              var previousCell = $(tableBodyCells.get(columnIdx - 1));
              if (this._getElementColumnIdx(previousCell) == columnIdx - 1)
              {
                previousCell.after(tableBodyCell);
                return tableBodyCell;
              }
            }

            // iterate through the cells to find the position
            var i;
            for (i = 0; i < tableBodyCells.length; i++)
            {
              // find the location where it should be inserted
              if (this._getElementColumnIdx($(tableBodyCells.get(i))) == columnIdx - 1)
              {
                $(tableBodyCells.get(i)).after(tableBodyCell);
                break;
              }
            }
          }
        }

        return tableBodyCell;
      },
      /**
       * Insert a tr element in the appropriate place in the DOM
       * @param {number} rowIdx  row index
       * @param {jQuery} tableBodyRow  DOM element
       * @param {Object} row  oj.Row
       * @param {Object} docFrag  document fragment
       * @private
       */
      _insertTableBodyRow: function(rowIdx, tableBodyRow, row, docFrag)
      {
        var tableBodyRows = null;

        if (docFrag == null)
        {
          // if docFragm is null then get from the DOM nodes
          var tableBody = this._getTableBody();
          tableBodyRows = tableBody.children('.' + this._CSS_CLASSES._TABLE_DATA_ROW_CLASS);
        }
        else
        {
          tableBodyRows = docFrag.children('.' + this._CSS_CLASSES._TABLE_DATA_ROW_CLASS);
        }
        this._setTableBodyRowAttributes(rowIdx, row, tableBodyRow);
        this._createTableBodyCellAccSelect(tableBodyRow);

        var replacedRow = false;
        if (docFrag == null)
        {
          // if there is an existing tr at the row index then replace it
          var oldTableBodyRow = this._getTableBodyRow(rowIdx);
          if (oldTableBodyRow)
          {
            oldTableBodyRow.replaceWith(tableBodyRow);
            replacedRow = true;
          }
          else
          {
            if (rowIdx == 0 || tableBodyRows.length == 0)
            {
              // just prepend it
              tableBody.prepend(tableBodyRow);
            }
            else
            {
              var i;
              var inserted = false;
              for (i = 0; i < tableBodyRows.length; i++)
              {
                // find the location where it should be inserted
                if (this._getElementRowIdx($(tableBodyRows.get(i))) > rowIdx)
                {
                  $(tableBodyRows.get(i)).before(tableBodyRow);
                  inserted = true;
                  break;
                }
              }
              if (!inserted)
              {
                // if it wasn't inserted then the rowIdx is larger than any existing one
                // so append at the end.
                tableBody.append(tableBodyRow);
              }
            }
          }
        }
        else
        {
          docFrag.append(tableBodyRow);
        }
        this._clearCachedDomRowData();
      },
      /**
       * Insert a th element in the appropriate place in the DOM
       * @param {number} columnIdx  column index
       * @param {jQuery} tableHeaderColumn  DOM element
       * @private
       */
      _insertTableHeaderColumn: function(columnIdx, tableHeaderColumn)
      {
        var tableHeaderRow = this._getTableHeaderRow();
        var tableHeaderColumns = this._getTableHeaderColumns();
        // save the column index on the element
        this._setTableHeaderColumnAttributes(columnIdx, tableHeaderColumn);

        // if there is an existing th at the index then replace it
        var oldTableHeaderColumn = this._getTableHeaderColumn(columnIdx);
        if (oldTableHeaderColumn)
          oldTableHeaderColumn.replaceWith(tableHeaderColumn);
        else
        {
          if (columnIdx == 0)
          {
            // just append it
            tableHeaderRow.append(tableHeaderColumn);
          }
          else
          {
            var i;
            for (i = 0; i < tableHeaderColumns.length; i++)
            {
              // find the location where it should be inserted
              if (this._getElementColumnIdx(tableHeaderColumns[i]) == columnIdx - 1)
              {
                $(tableHeaderColumns[i]).after(tableHeaderColumn);
                break;
              }
            }
          }
        }
      },
      /**
       * Remove a tr element from the DOM
       * @param {number} rowIdx  row index
       * @private
       */
      _removeTableBodyRow: function(rowIdx)
      {
        var tableBodyRow = this._getTableBodyRow(rowIdx);
        if (tableBodyRow != null)
        {
          tableBodyRow[0].parentNode.removeChild(tableBodyRow[0]);
          this._clearCachedDomRowData();
        }
      },
      /**
       * Set the td cell. Calls the cell renderer or populates the value.
       * @param {number} rowIdx  row index
       * @param {number} columnIdx  column index
       * @param {jQuery} tableBodyRow  tr DOM element
       * @param {Object} row  oj.Row
       * @param {boolean} isTableBodyRowNew Is row new?
       * @private
       */
      _setTableBodyCell: function(rowIdx, columnIdx, tableBodyRow, row, isTableBodyRowNew)
      {
        var columns = this._getColumnDefs();
        var column = columns[columnIdx];
        var cellRenderer = this._getColumnRenderer(columnIdx, 'cell');
        
        var tableBodyCell = this._getTableBodyCell(rowIdx, columnIdx, tableBodyRow);

        if (!tableBodyCell)
        {
          tableBodyCell = this._createTableBodyCell(rowIdx, columnIdx);
          this._insertTableBodyCell(rowIdx, columnIdx, tableBodyCell, tableBodyRow, isTableBodyRowNew);
        }
        else
        {
          tableBodyCell.empty();
        }
        var data = null;

        if (column.field != null)
        {
          data = row.get(column.field);
        }
          
        if (cellRenderer)
        {
          var cellColumnContent = cellRenderer({'cellContext': this._getRendererContextObject(row, tableBodyCell[0]), 
                                                'column': column,                                    
                                                'data': data,
                                                'row': row.pairs()});
          
          if (cellColumnContent != null)
          {
            // if the renderer returned a value then we set it as the content
            // for the cell
            tableBodyCell.append(cellColumnContent);
          }
          else
          {
            // if the renderer didn't return a value then the existing
            // cell was manipulated. So get it and set the required
            // attributes just in case it was replaced or the attributes
            // got removed
            tableBodyCell = $(tableBodyRow.children(':not(' + '.' + this._CSS_CLASSES._TABLE_DATA_CELL_ACC_SELECT_CLASS + ')')[columnIdx]);
            this._setTableBodyCellAttributes(rowIdx, columnIdx, tableBodyCell);
            this._styleTableBodyCell(columnIdx, tableBodyCell);
          }
        }
        else
        {
          tableBodyCell.append(data);
        }
      },
      /**
       * Set the attributes on the cell like rowIdx, columnIdx, etc
       * @param {number} rowIdx  row index
       * @param {number} columnIdx  column index
       * @param {jQuery} tableBodyCell  td DOM element
       * @private
       */
      _setTableBodyCellAttributes: function(rowIdx, columnIdx, tableBodyCell)
      {
        var accessibility = this.options['accessibility'];
        var column = this._getColumnDefs()[columnIdx];

        // set the row and column indexes on the element
        this._setElementRowIdx(rowIdx, tableBodyCell);
        this._setElementColumnIdx(columnIdx, tableBodyCell);

        var rowHeaderColumnId = null;

        if (accessibility != null && accessibility['rowHeader'] != null)
        {
          rowHeaderColumnId = accessibility['rowHeader'];
        }
        else
        {
          rowHeaderColumnId = this._getColumnDefs()[0].id;
        }

        var cellRowHeaderId = rowHeaderColumnId + '_' + rowIdx;

        var headers = column.id;
        if (rowHeaderColumnId == column.id)
        {
          tableBodyCell.attr('id', cellRowHeaderId);

          if (this._isTableHeaderless())
          {
            headers = '';
          }
        }
        else
        {
          if (!this._isTableHeaderless())
          {
            headers = headers + ' ' + cellRowHeaderId;
          }
          else
          {
            headers = cellRowHeaderId;
          }
        }

        if (!tableBodyCell.attr('headers'))
        {
          tableBodyCell.attr('headers', headers);
        }
      },
      /**
       * Set the attributes on the row like rowIdx, etc
       * @param {number} rowIdx  row index
       * @param {Object} row  oj.Row
       * @param {jQuery} tableBodyRow  tr DOM element
       * @private
       */
      _setTableBodyRowAttributes: function(rowIdx, row, tableBodyRow)
      {
        // set the row index on the element
        this._setElementRowIdx(rowIdx, tableBodyRow);
        this._setElementRowKey(row['id'], tableBodyRow);
      },
      /**
       * Set the attributes on the header like columndx, etc
       * @param {number} columnIdx  column index
       * @param {jQuery} tableHeaderColumn  th DOM element
       * @private
       */
      _setTableHeaderColumnAttributes: function(columnIdx, tableHeaderColumn)
      {
        var column = this._getColumnDefs()[columnIdx];

        // set the row index on the element
        this._setElementColumnIdx(columnIdx, tableHeaderColumn);

        if (!tableHeaderColumn.attr('id'))
        {
          tableHeaderColumn.attr('id', column.id);
        }
      },
      /**
       * Style the table container
       * @param {jQuery} tableContainer  div DOM element
       * @private
       */
      _styleTableContainer: function(tableContainer)
      {
        var options = this.options;
        tableContainer.attr('class', '');
        tableContainer.addClass(this._CSS_CLASSES._TABLE_CONTAINER_CLASS);
        tableContainer.addClass(this._MARKER_STYLE_CLASSES._WIDGET);
        if (options['containerClassName'] != null)
        {
          tableContainer.addClass(options['containerClassName']);
        }
        tableContainer.css('overflow', 'hidden');
        
        if (this._isTableHeightSet() || this._isTableWidthSet())
        {
          // propagate the dimensions to the container. Also register
          // resize listeners in case percentage dimensions were specified
          if (this._isTableHeightSet())
          {
            tableContainer.css('height', this._getTable()[0].style.height);
          }
          if (this._isTableWidthSet())
          {
            tableContainer.css('width', this._getTable()[0].style.width);
          }
          this._registerResizeListener(tableContainer);
        }
      },
      /**
       * Style the td element
       * @param {number} columnIdx  column index
       * @param {jQuery} tableBodyCell  td DOM element
       * @private
       */
      _styleTableBodyCell: function(columnIdx, tableBodyCell)
      {
        var options = this.options;
        var lastColumn = columnIdx == this._getColumnDefs().length - 1 ? true : false;
        var column = this._getColumnDefs()[columnIdx];

        tableBodyCell.attr('style', column.style);
        if (!tableBodyCell.hasClass(this._CSS_CLASSES._TABLE_DATA_CELL_CLASS))
        {
          tableBodyCell.addClass(this._CSS_CLASSES._TABLE_DATA_CELL_CLASS);
        }
        tableBodyCell.css('float', 'none');
        // needed to prevent the cell outline from showing in FF 
        // when user Ctrl + click on the cell.
        tableBodyCell.css('-moz-user-select', 'none');
        if (options.verticalGridVisible == this._OPTION_ENABLED && !lastColumn)
        {
          tableBodyCell.addClass(this._CSS_CLASSES._TABLE_DATA_CELL_VGRID_LINES_CLASS);
        }
        if (options.horizontalGridVisible == this._OPTION_ENABLED)
        {
          tableBodyCell.addClass(this._CSS_CLASSES._TABLE_DATA_CELL_HGRID_LINES_CLASS);
        }
        if (column.className)
        {
          tableBodyCell.addClass(column.className);
        }
      },
      /**
       * Style the tr element
       * @param {jQuery} tableBodyRow  tr DOM element
       * @private
       */
      _styleTableBodyRow: function(tableBodyRow)
      {
        if (!tableBodyRow.hasClass(this._CSS_CLASSES._TABLE_DATA_ROW_CLASS))
        {
          tableBodyRow.addClass(this._CSS_CLASSES._TABLE_DATA_ROW_CLASS);
        }

        this._hoverable(tableBodyRow);

        if (this._getRowSelectionMode() == this._OPTION_SELECTION_MODES._SINGLE ||
          this._getRowSelectionMode() == this._OPTION_SELECTION_MODES._MULTIPLE)
        {
          tableBodyRow.addClass(this._CSS_CLASSES._TABLE_DATA_ROW_SELECTOR_CLASS);
        }
      },
      /**
       * Style the th element
       * @param {number} columnIdx  column index
       * @param {jQuery} tableHeaderColumn  th DOM element
       * @private
       */
      _styleTableHeaderColumn: function(columnIdx, tableHeaderColumn)
      {
        var lastColumn = columnIdx == this._getColumnDefs().length - 1 ? true : false;
        var column = this._getColumnDefs()[columnIdx];
        tableHeaderColumn.addClass(this._CSS_CLASSES._COLUMN_HEADER_CLASS);
        tableHeaderColumn.attr('style', column.headerStyle);
        tableHeaderColumn.css('float', 'none');

        if (lastColumn)
        {
          tableHeaderColumn.css('borderRight', 'none');
        }

        if (this._getColumnSelectionMode() == this._OPTION_SELECTION_MODES._SINGLE ||
          this._getColumnSelectionMode() == this._OPTION_SELECTION_MODES._MULTIPLE)
        {
          tableHeaderColumn.addClass(this._CSS_CLASSES._COLUMN_HEADER_SELECTOR_CLASS);
        }
      }
      /**** end internal DOM functions ****/
    })
}());
/*jslint browser: true,devel:true*/
/**
 * @export
 * @class oj.FlattenedTreeTableDataSource
 * @classdesc Object representing data used by the rowexpander component
 * @param {Object} data
 * @param {Object|null} options Array of options for the TreeTableDataSource
 * @constructor
 */
oj.FlattenedTreeTableDataSource = function(data, options)
{
  // Initialize
  options = options || {};

  if (!(data instanceof oj.FlattenedTreeDataSource))
  {
    var errSummary = oj.Translations.getTranslatedString('oj-table.dataInvalidType.summary');
    var errDetail = oj.Translations.getTranslatedString('oj-table.dataInvalidType.detail');
    throw new oj.Message(errSummary, errDetail, oj.Message.SEVERITY_LEVEL['ERROR']);
  }

  this._rowSet = new oj.FlattenedTreeRowSet(data, options);
  this.Init();
  
  if ((options != null && (options['startFetch'] == 'enabled' || options['startFetch'] == null))
    || options == null)
  {
    // do an initial fetch
    var self = this;
    setTimeout(function()
    {
      self.fetch({'startFetch': 'enabled'});
    }, 0);
  }
};

// Subclass from oj.DataSource 
oj.Object.createSubclass(oj.FlattenedTreeTableDataSource, oj.TableDataSource, "oj.FlattenedTreeTableDataSource");

/**
 * Initializes the instance.
 * @export
 */
oj.FlattenedTreeTableDataSource.prototype.Init = function()
{
  oj.FlattenedTreeTableDataSource.superclass.Init.call(this);
};

/**
 * Calls fetch on the datasource.
 * @param {Object=} options Options to control fetch<p>
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.fetch = function(options)
{
  this._rowSet.fetch(options);
};




/**** start delegated functions ****/

/**
 * Return the model object found at the given index of the collection.
 * 
 * @param {number} index Index for which to return the model object. 
 * @return {Object} Model object located at index. If index is out of range, returns null.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.at = function(index)
{
  return this._rowSet.at(index);
};

/**
 * Return the first model object from the collection whose model id value is the given id or cid, or the id or cid from a passed in model
 * @param {Object|string} id ID, cid, or Model (see Model id or cid) for which to return the model object, if found. 
 * @return {Object} First model object in the collection where model.id = id or model.cid = id. If none are found, returns null.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.get = function(id)
{
  return this._rowSet.get(id);
};

/**
 * @export
 * Return whether there is more data which can be fetched.
 * @returns {boolean} whether there is more data
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.hasMore = function()
{
  return this._rowSet.hasMore();
};

/**
 * Return the array index location of the given model object.
 * @param {Object} model Model object to locate 
 * @return {number} The index of the given model object. If the object is not found, returns -1.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.indexOf = function(model)
{
  return this._rowSet.indexOf(model);
};

/**
 * @export
 * Return the size of the data locally in the dataSource. -1 if an initial fetch has not been
 * done yet.
 * @returns {number} size of data
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.size = function()
{
  return this._rowSet.size();
};

/**
 * Sort the models in the collection
 * @param {Object=} comparator
 * @param {Object=} options silent: if true, do not fire the sort event
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.sort = function(comparator, options)
{
  this._rowSet.sort(options);
};

/**
 * @export
 * Return current start index.
 * @returns {number} start index
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.startIndex = function() {
  return this._rowSet.startIndex();
};

/**
 * @export
 * Return the total size of data available, including server side if not local.
 * @returns {number} total size of data
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.totalSize = function()
{
  return this._rowSet.totalSize();
};

/**** end delegated functions ****/

});
