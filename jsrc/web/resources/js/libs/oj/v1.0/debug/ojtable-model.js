define(['ojs/ojcore', 'jquery', 'ojs/ojmodel', 'ojs/ojdatacollection-common', 'ojs/ojtable'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        */
       function(oj, $)
{

/*jslint browser: true*/

/**
 * @export
 * @class oj.ModelRow
 * @classdesc Object representing name/value pairs for a row of data
 *
 * @param {oj.Model} model oj.Model object 
 * @param {Object=} options 
 *                  rowSet: rowSet for this row
 * @constructor
 */
oj.ModelRow = function(model, options)
{
  oj.ModelRow._init(this, model, options, null);
};


// Subclass from oj.Object 
oj.Object.createSubclass(oj.ModelRow, oj.Row, "ModelRow.ModelRow");

oj.ModelRow.prototype.Init = function()
{
  oj.Row.superclass.Init.call(this);
};

/**
 * 
 * @export
 * @desc Attribute/value pairs held by the Row.
 * 
 * @type Object
 */
oj.ModelRow.prototype.attributes = {};

/**
 * @export
 * @desc The Row's unique ID. 
 * 
 * @type String
 */
oj.ModelRow.prototype.id = null;

/**
 * @export
 * @desc The name of the row property to be used as the unique ID. See property id. This defaults to a value of "id".
 *  
 * @type String
 */
oj.ModelRow.prototype.idAttribute = null;

oj.ModelRow._init = function(row, model, options, properties)
{
  var prop = null, attrCopy;

  row.Init();

  row._model = model;
  row.id = model.id;
  row.idAttribute = model.idAttribute;
  row.attributes = model.attributes;

  options = options || {};

  // First, copy all properties passed in
  for (prop in properties)
  {
    if (properties.hasOwnProperty(prop))
    {
      row[prop] = properties[prop];
    }
  }
  row['context'] = options['context'];
};

/**
 * @export
 * Return a copy of the Row with identical attributes and settings
 */
oj.ModelRow.prototype.clone = function()
{
  return this._model.clone();
};

/**
 * Returns the value of the property from the Row.
 * @param {string} property Property to get from row
 * @return {Object} value of property
 * @export
 */
oj.ModelRow.prototype.get = function(property)
{
  return this._model.get(property);
};

/**
 * Return the oj.Model object which was wrapped
 * @return {oj.Model} oj.Model object
 * 
 * @export
 */
oj.ModelRow.prototype.getModel = function()
{
  return this._model;
};

/**
 * Set the value(s) of one or more attributes of the row
 * @param {string||Object} property Property attribute name to set, or an Object containing attribute/value pairs
 * @param {Object=} value Value for property if property is not an Object containing attribute/value pairs
 * @param {Object=} options Options may be passed in
 * @returns {Object||boolean} the row itself, false if failed
 * @export
 */
oj.ModelRow.prototype.set = function(property, value, options)
{
  return this._model.set(property, value, options);
};

/**
 * @export
 * Return all of the Row's attributes as an array
 * 
 * @returns {Array} array of all the Row's attributes
 */
oj.ModelRow.prototype.keys = function()
{
  return this._model.keys();
};

/**
 * @export
 * Return all of the Row's attributes values as an array
 * 
 * @returns {Array} array of all the Row's attributes values
 */
oj.ModelRow.prototype.values = function()
{
  return this._model.values();
};

/**
 * @export
 * Return an array of attributes/value pairs found in the Row 
 * 
 * @returns {Object} returns the Row's attribute/value pairs as an array
 */
oj.ModelRow.prototype.pairs = function()
{
  return this._model.pairs();
};

/*jslint browser: true*/

/**
 * @export
 * @class oj.CollectionRowSet
 * @classdesc RowSet wrapper for oj.Collection 
 * 
 * @param {oj.Collection} collection oj.Collection object 
 * @param {Object=} options Passed through to the user's initialize routine, if any, upon construction 
 * @constructor
 */
oj.CollectionRowSet = function(collection, options) 
{
  // Initialize
  oj.CollectionRowSet._init(this, collection, options, null);
};

/**
 * @export
 * @desc Sort direction for string-based field comparators.  A value of 1 (the default), indicates ascending sorts, -1 indicates descending
 * 
 * @type number
 */
oj.CollectionRowSet.prototype.sortDirection = 1;

/**
 * @export
 * @desc If set, sort the rowSet using the given attribute of a row (if string); function(Row) returning a string attribute
 * by which the sort should take place; function(Row1, Row2) if a user-defined function comparing Row1 and Row2 (see the
 * JavaScript array.sort() for details)
 * 
 * @type {String|function(Object)|function(Object,Object)}
 */
oj.CollectionRowSet.prototype.comparator = null;

/**
 * @export
 * @desc Set to true if sort is supported.
 * 
 * @type boolean
 */
oj.CollectionRowSet.prototype.sortSupported = true;


// Subclass from oj.Object 
oj.Object.createSubclass(oj.CollectionRowSet, oj.RowSet, "CollectionRowSet.CollectionRowSet");

oj.CollectionRowSet.prototype.Init = function()
{
  oj.CollectionRowSet.superclass.Init.call(this);
};

oj.CollectionRowSet._init = function(rowSet, collection, options, properties) 
{
  var prop;
  rowSet._eventHandlers = [];
  rowSet._startIndex = 0;
  
  rowSet.Init();

  // First, copy all properties passed in
  if (properties) 
  {
    for (prop in properties) 
    {
      if (properties.hasOwnProperty(prop)) 
      {
        rowSet[prop] = properties[prop];
      }
    }
  }
  rowSet._collection = collection;
  rowSet._addCollectionEventListeners();
};

/**
 * Return the row object found at the given index of the collection, or a promise object that will return the row to a function
 * in the done() call.
 * 
 * @param {number} index Index for which to return the row object. 
 * @param {Object=} options <p>
 *                  fetchSize: fetch size to use if the call needs to fetch more records from the server, if virtualized.  Overrides the overall fetchSize setting <p>
 *                  deferred: if true, return a deferred/promise object as described below.  If not specified, the return value will
 *                   be determined by whether or not the collection is virtual
 * @return {Object} Row object located at index. If index is out of range, returns null.  If this is a paging/virtual collection or
 *                  if deferred is specified and true, at will return a jQuery promise object which will call its done function,
 *                  passing the value at(index) 
 * @export
 */
oj.CollectionRowSet.prototype.at = function(index, options)
{
  var model = this._collection.at(index, options);
  if (model != null)
  {
    return new oj.ModelRow(model);
  }
  return null;
};

/**
 * Loads the data into the RowSet
 * @param {Object=} options Options to control fetch<p>
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.RowSet
 * @instance
 */
oj.CollectionRowSet.prototype.fetch = function(options)
{
  if (this._canFetch.call(this))
  {
    this._startFetch.call(this);

    options = options || {};
    var self = this;
    var isPaged =  options.startIndex != null ? true : false;
    var origStartIndex = this._startIndex;
    this._startIndex = isPaged ? options.startIndex : 0;
    var pageSize = options['pageSize'] > 0 ? options['pageSize'] : -1;
    var origCollection = this._collection.clone();
    
    if (isPaged)
    {
      this._collection.setRangeLocal(this._startIndex, pageSize).done(function(collection, response, options) 
        {
          var updates = self._compareCollection(origCollection, self._collection, origStartIndex, self._startIndex, pageSize);
          self._addCollectionEventListeners.call(self);
          self._processUpdates.call(self, updates, origCollection);
          self._endFetch.call(self, true);
        });
    }
    else
    {
      this._collection.fetch({
        success: function(collection, response, options) 
        {
          var updates = self._compareCollection(origCollection, collection, origStartIndex, self._startIndex, pageSize);
          self._addCollectionEventListeners.call(self);
          self._processUpdates.call(self, updates, origCollection);
          self._endFetch.call(self, true);
        }
      });
    }
  }
}

/**
 * Return the first row object from the collection whose row id value is the given id
 * Note this method will not function as expected if the id is not set
 * @param {Object|string} id ID for which to return the row object, if found. 
 * @param {Object=} options <p>
 *                  fetchSize: fetch size to use if the call needs to fetch more records from the server, if virtualized.  Overrides the overall fetchSize setting<p>
 *                  deferred: if true, return a promise as though this collection were virtual whether it is or not
 * @return {Object} First row object in the collection where row.id = id. If none are found, returns null.
 *                  If deferred or virtual, return a promise passing the row when done
 * @export
 */
oj.CollectionRowSet.prototype.get = function(id, options)
{
  return new oj.ModelRow(this._collection.get(id, options));
};

/**
 * Return the oj.Collection object which was wrapped
 * @return {oj.Collection} oj.Collection object
 * 
 * @export
 */
oj.CollectionRowSet.prototype.getCollection = function()
{
  return this._collection;
};

/**
 * @export
 * Return whether there is more data which can be fetched.
 * @return {boolean} whether there is more data
 */
oj.CollectionRowSet.prototype.hasMore = function()
{
  return this._collection['hasMore'];
};

/**
 * Return the array index location of the given row object.
 * @param {Object} row Row object to locate 
 * @param {Object=} options deferred: if true, return a promise as though this collection were virtual whether it is or not
 
 * @return {number} The index of the given row object, or a promise that will call with the index when complete.
 *                  If the object is not found, returns -1.
 * @export
 */
oj.CollectionRowSet.prototype.indexOf = function(row, options) 
{
  return this._collection.indexOf(row.getModel(), options);
};

/**
 * @export
 * Determine if the rowset has any rows
 * 
 * @returns {boolean} true if collection is empty
 */
oj.CollectionRowSet.prototype.isEmpty = function() 
{
  return this._collection.isEmpty();
};

/**
 * @export
 * Return the length of the collection
 * @returns {number} length of the collection
 */
oj.CollectionRowSet.prototype.size = function() 
{
  return this._collection.size();
};

/**
 * @export
 * Sort the rows in the rowSet
 * 
 * @param {Object=} options
 */
oj.CollectionRowSet.prototype.sort = function(options) 
{
  this._collection['comparator'] = this['comparator'];
  return this._collection.sort(null);
};

oj.CollectionRowSet.prototype.totalSize = function()
{
  return this._collection.totalResults;
};

/**
 * Add event listeners to the collection
 * @private
 */
oj.CollectionRowSet.prototype._addCollectionEventListeners = function()
{
  var self = this;
  this._collection.on(oj.Events.EventType['ADD'], function(event) {
    oj.CollectionRowSet.superclass._handleEvent.call(self, oj.RowSet.EventType['ADD'], {'rowIdx': self._collection.indexOf(event), 'row': new oj.ModelRow(event)});
  });
  this._collection.on(oj.Events.EventType['REMOVE'], function(event) {
    oj.CollectionRowSet.superclass._handleEvent.call(self, oj.RowSet.EventType['REMOVE'], {'rowIdx': self._collection.indexOf(event), 'row': new oj.ModelRow(event)});
  });
  this._collection.on(oj.Events.EventType['RESET'], function(event) {
    oj.CollectionRowSet.superclass._handleEvent.call(self, oj.RowSet.EventType['RESET'], event);
  });
  this._collection.on(oj.Events.EventType['SORT'], function(event) {
    oj.CollectionRowSet.superclass._handleEvent.call(self, oj.RowSet.EventType['SORT'], event);
  });
  this._collection.on(oj.Events.EventType['CHANGE'], function(event) {
    oj.CollectionRowSet.superclass._handleEvent.call(self, oj.RowSet.EventType['CHANGE'], {'rowIdx': self._collection.indexOf(event), 'row': new oj.ModelRow(event)});
  });
  this._collection.on(oj.Events.EventType['DESTROY'], function(event) {
    oj.CollectionRowSet.superclass._handleEvent.call(self, oj.RowSet.EventType['DESTROY'], event);
  });
  this._collection.on(oj.Events.EventType['SYNC'], function(event) {
    oj.CollectionRowSet.superclass._handleEvent.call(self, oj.RowSet.EventType['SYNC'], event);
  });
  this._collection.on(oj.Events.EventType['ERROR'], function(event) {
    oj.CollectionRowSet.superclass._handleEvent.call(self, oj.RowSet.EventType['ERROR'], event);
    // call endfetch in case a fetch caused the error
    self._endFetch.call(self, false);
  });
};

/**
 * Compare updated collection
 * @param {Object} origCollection  Original collection
 * @param {Object} updCollection  Updated collection
 * @param {number} origStartIndex startIndex for the original collection
 * @param {number} startIndex startIndex for the updated collection
 * @throws {Error}
 * @private
 */
oj.CollectionRowSet.prototype._compareCollection = function(origCollection, updCollection, origStartIndex, startIndex, pageSize)
{
  var updates = [];

  // first check if the updated collection is empty
  if (updCollection.size() > 0)
  {
    var i = 0;

    // next delete rows in the original collection which are less than startIndex or greater than
    // startIndex + pageSize
    origCollection.each(function(model)
    {
      var rowIdx = origCollection.indexOf(model);
      if (rowIdx < startIndex)
      {
        updates[i] = {'rowIdx': rowIdx, 'status': oj.RowSet._ROW_STATUSES._DELETED};
        i++;
      }
      else if (pageSize > 0)
      {
        if (rowIdx >= startIndex + pageSize)
        {
          updates[i] = {'rowIdx': rowIdx, 'status': oj.RowSet._ROW_STATUSES._DELETED};
          i++;
        }
      }
    });

    updCollection.each(function(model)
    {
      var rowIdx = updCollection.indexOf(model);

      if ((pageSize > 0 && rowIdx >= startIndex &&
        rowIdx < startIndex + pageSize) ||
        pageSize < 0)
      {
        var origSize = origCollection.size();

        if (rowIdx < origStartIndex ||
          rowIdx > origSize - 1)
        {
          updates[i] = {'rowIdx': rowIdx, 'status': oj.RowSet._ROW_STATUSES._ADDED};
          i++;
        }
        else
        {
          var keys = model.keys();
          var origModel = origCollection.at(rowIdx);
          var updated = false;
          var j;
          for (j = 0; j < keys.length; j++)
          {
            if (model.get(keys[j]).toString() != origModel.get(keys[j]).toString())
            {
              updates[i] = {'rowIdx': rowIdx, 'status': oj.RowSet._ROW_STATUSES._UPDATED};
              updated = true;
              i++;
              break;
            }
          }
          if (!updated)
          {
            updates[i] = {'rowIdx': rowIdx, 'status': oj.RowSet._ROW_STATUSES._NONE};
            i++;
          }
        }
      }
    });
  }
  else
  {
    var i = 0;
    origCollection.each(function(model)
    {
      updates[i] = {'rowIdx': origCollection.indexOf(model), 'status': oj.RowSet._ROW_STATUSES._DELETED};
      i++;
    });
  }
  return updates;
};

/**
 * Process the updates array
 * @param {Array} updates Array of row updates
 * @param {Object} origCollection  Original collection
 * @private
 */
oj.CollectionRowSet.prototype._processUpdates = function(updates, origCollection)
{
  // if all the rows are not updated then call end fetch without refresh
  var noneUpdated = true;
  var i;
  for (i = 0; i < updates.length; i++)
  {
    if (updates[i]['status'] != oj.RowSet._ROW_STATUSES._NONE)
    {
      noneUpdated = false;
      break;
    }
  }
  if (noneUpdated)
  {
    this._endFetch.call(this, false);
    return;
  }

  // if all the rows are added then refresh the entire table
  var allAdded = true;
  for (i = 0; i < updates.length; i++)
  {
    if (updates[i]['status'] != oj.RowSet._ROW_STATUSES._ADDED)
    {
      allAdded = false;
      break;
    }
  }
  if (allAdded)
  {
    this._endFetch.call(this, true);
    return;
  }

  // process individual row statuses
  for (i = 0; i < updates.length; i++)
  {
    var rowIdx = updates[i]['rowIdx'];
    if (updates[i]['status'] == oj.RowSet._ROW_STATUSES._ADDED)
    {
      oj.CollectionRowSet.superclass._handleEvent.call(this, oj.RowSet.EventType['ADD'], {'rowIdx': rowIdx, 'row':  this._collection.at(rowIdx)});
    }
    else if (updates[i]['status'] == oj.RowSet._ROW_STATUSES._DELETED)
    {
      oj.CollectionRowSet.superclass._handleEvent.call(this, oj.RowSet.EventType['REMOVE'], {'rowIdx': rowIdx, 'row':  origCollection.at(rowIdx)});
    }
    else if (updates[i]['status'] == oj.RowSet._ROW_STATUSES._UPDATED)
    {
      oj.CollectionRowSet.superclass._handleEvent.call(this, oj.RowSet.EventType['CHANGE'], {'rowIdx': rowIdx, 'row':  this._collection.at(rowIdx)});
    }
  }
  this._endFetch.call(this, false);
};

/**
 * Indicate whether we can start a fetch
 * @private
 */
oj.CollectionRowSet.prototype._canFetch = function()
{
  return !this._isFetching;
};

/**
 * Indicate starting fetch
 * @private
 */
oj.CollectionRowSet.prototype._startFetch = function()
{
  this._isFetching = true;
  oj.CollectionRowSet.superclass._handleEvent.call(this, oj.RowSet.EventType['REQUEST'], null);
};

/**
 * Indicate ending fetch
 * @param {boolean} refresh whether the listener should refresh based on the fetched data
 * @private
 */
oj.CollectionRowSet.prototype._endFetch = function(refresh)
{
  this._isFetching = false;
  oj.CollectionRowSet.superclass._handleEvent.call(this, oj.RowSet.EventType['SYNC'], refresh);
};
/*jslint browser: true,devel:true*/
/**
 * @export
 * @class oj.CollectionTableDataSource
 * @classdesc Object representing data used by table component
 * @param {Object} data data supported by the components
 * @param {Object|null} options Array of options for the TableDataSource
 * @constructor
 */
oj.CollectionTableDataSource = function(data, options)
{
  // Initialize
  if (!(data instanceof oj.Collection))
  {
    // we only support Array, oj.Collection, oj.RowSet, or ko.observableArray. To
    // check for observableArray, we can't do instanceof check because it's
    // a function. So we just check if it contains a subscribe function.
    var errSummary = oj.Translations.getTranslatedString('oj-ojTable.dataInvalidType.summary');
    var errDetail = oj.Translations.getTranslatedString('oj-ojTable.dataInvalidType.detail');
    throw new oj.Message(errSummary, errDetail, oj.Message.SEVERITY_LEVEL['ERROR']);
  }
  
  oj.CollectionTableDataSource.superclass.constructor.call(this, data, options);

  this._rowSet = new oj.CollectionRowSet(data, this.options);
  this._addRowSetEventListeners();
  
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
oj.Object.createSubclass(oj.CollectionTableDataSource, oj.TableDataSource, "oj.CollectionTableDataSource");

/**
 * Initializes the instance.
 * @export
 */
oj.CollectionTableDataSource.prototype.Init = function()
{
  oj.CollectionTableDataSource.superclass.Init.call(this);
};

/**
 * Return the oj.Row object found at the given index of the RowSet.
 * 
 * @param {number} index Index for which to return the Row object. 
 * @return {Object} oj.Row object located at index. If index is out of range, returns null.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.CollectionTableDataSource
 * @instance
 */
oj.CollectionTableDataSource.prototype.at = function(index)
{
  return this._rowSet.at(index);
};

/**
 * Fetch the RowSet data.
 * @param {Object=} options Options to control fetch<p>
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.CollectionTableDataSource
 * @instance
 */
oj.CollectionTableDataSource.prototype.fetch = function(options)
{
  options = options || {};
  if (options['startIndex'] != null)
  {
    oj.CollectionTableDataSource.superclass.startIndex.call(this, options['startIndex']);
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
 * @param {Object|string} id ID for which to return the Row object, if found. 
 * @return {Object} First Row object in the RowSet where Row.id = id. If none are found, returns null.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.CollectionTableDataSource
 * @instance
 */
oj.CollectionTableDataSource.prototype.get = function(id)
{
  return this._rowSet.get(id);
};

/**
 * @export
 * Return whether there is more data which can be fetched.
 * @returns {boolean} whether there is more data
 * @expose
 * @memberof! oj.CollectionTableDataSource
 * @instance
 */
oj.CollectionTableDataSource.prototype.hasMore = function()
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
 * @memberof! oj.CollectionTableDataSource
 * @instance
 */
oj.CollectionTableDataSource.prototype.indexOf = function(row)
{
  return this._rowSet.indexOf(row);
};

/**
 * @export
 * Get the length of the RowSet.
 * limit it.
 * @returns {number} length of the RowSet
 * @expose
 * @memberof! oj.CollectionTableDataSource
 * @instance
 */
oj.CollectionTableDataSource.prototype.size = function()
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
 * @memberof! oj.CollectionTableDataSource
 * @instance
 */
oj.CollectionTableDataSource.prototype.sort = function(comparator, options)
{
  this._rowSet['comparator'] = comparator;
  this._rowSet.sort(options);
};

/**
 * @export
 * Return the total size of data available, including server side if not local.
 * @returns {number} total size of data
 * @expose
 * @memberof! oj.CollectionTableDataSource
 * @instance
 */
oj.CollectionTableDataSource.prototype.totalSize = function()
{
  return this._rowSet.totalSize();
};

/**
 * Add event listeners to the RowSet
 * @private
 */
oj.CollectionTableDataSource.prototype._addRowSetEventListeners = function()
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
});
