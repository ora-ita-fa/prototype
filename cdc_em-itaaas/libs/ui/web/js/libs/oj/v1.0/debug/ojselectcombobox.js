define(['ojs/ojcore', 'jquery', 'ojs/ojeditablevalue'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        */
       function(oj, $, compCore, validation)
{

/*
Copyright 2012 Igor Vaynberg

Version: @@ver@@ Timestamp: @@timestamp@@

This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
General Public License version 2 (the "GPL License"). You may choose either license to govern your
use of this software only upon the condition that you accept all of the terms of either the Apache
License or the GPL License.

You may obtain a copy of the Apache License and the GPL License at:

http://www.apache.org/licenses/LICENSE-2.0
http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the
Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
the specific language governing permissions and limitations under the Apache License and the GPL License.
 */

  var _ComboUtils = {
    KEY:
    {
      TAB : 9,
      ENTER : 13,
      ESC : 27,
      SPACE : 32,
      LEFT : 37,
      UP : 38,
      RIGHT : 39,
      DOWN : 40,
      SHIFT : 16,
      CTRL : 17,
      ALT : 18,
      PAGE_UP : 33,
      PAGE_DOWN : 34,
      HOME : 36,
      END : 35,
      BACKSPACE : 8,
      DELETE : 46,
      isArrow : function (k)
      {
        k = k.which ? k.which : k;
        switch (k)
        {
        case _ComboUtils.KEY.LEFT:
        case _ComboUtils.KEY.RIGHT:
        case _ComboUtils.KEY.UP:
        case _ComboUtils.KEY.DOWN:
          return true;
        }
        return false;
      },
      isControl : function (e)
      {
        var k = e.which;
        switch (k)
        {
        case _ComboUtils.KEY.SHIFT:
        case _ComboUtils.KEY.CTRL:
        case _ComboUtils.KEY.ALT:
          return true;
        }
        if (e.metaKey)
          return true;
        return false;
      },
      isFunctionKey : function (k)
      {
        k = k.which ? k.which : k;
        return k >= 112 && k <= 123;
      }
    },

    lastMousePosition: {x : 0, y : 0},
    nextUid: (function () {var counter = 1; return function () { return counter++; };}()),

    //TODO:
    scrollBarDimensions: null,

    /*
     * 4-10 times faster .each replacement
     * it overrides jQuery context of element on each iteration
     */
    each2: function(list, c)
    {
      var j = $(list[0]),
      i = -1,
      l = list.length;
      while (
        ++i < l
          && (j.context = j[0] = list[i])
          && c.call(j[0], i, j) !== false //i=index, j=jQuery object
      )
      {};
      return list;
    },

    measureScrollbar: function()
    {
      var $template = $("<div class='oj-listbox-measure-scrollbar'></div>");
      $template.appendTo('body');
      var dim =
        {
          width : $template.width() - $template[0].clientWidth,
          height : $template.height() - $template[0].clientHeight
        };
      $template.remove();
      return dim;
    },

    /*
     * Splits the string into an array of values, trimming each value. 
     * An empty array is returned for nulls or empty
     */
    splitVal: function(string, separator)
    {
      var val,
      i,
      l;
      if (string === null || string.length < 1)
        return [];
      val = string.split(separator);
      for (i = 0, l = val.length; i < l; i = i + 1)
        val[i] = $.trim(val[i]);
      return val;
    },

    getSideBorderPadding: function(element)
    {
      return element.outerWidth(false) - element.width();
    },

    installKeyUpChangeEvent: function(element)
    {
      var key = "keyup-change-value";
      element.on("keydown", function ()                 
        {
          if ($.data(element, key) === undefined)
          {
            $.data(element, key, element.val());
          }
        });

      element.on("keyup", function (e)
        {
          if (e.which === _ComboUtils.KEY.ENTER)
          {
            e.stopPropagation();
            return;
          }
          var val = $.data(element, key);
          if (val !== undefined && element.val() !== val)
          {
            $.removeData(element, key);
            element.trigger("keyup-change");
          }
        });
    },

    /*
     * filters mouse events so an event is fired only if the mouse moved.
     *
     * filters out mouse events that occur when mouse is stationary but
     * the elements under the pointer are scrolled.
     */
    installFilteredMouseMove: function(element)
    {
      element.on("mousemove", function (e)
        {
          var lastpos = _ComboUtils.lastMousePosition;
          if (lastpos === undefined || lastpos.x !== e.pageX || lastpos.y !== e.pageY)
          {
            $(e.target).trigger("mousemove-filtered", e);
            _ComboUtils.lastMousePosition.x = e.pageX;
            _ComboUtils.lastMousePosition.y = e.pageY;
          }
        });
    },

    thunk: function(formula)
    {
      var evaluated = false,
      value;
      return function ()
        {
          if (evaluated === false)
          {
            value = formula();
            evaluated = true;
          }
          return value;
        };
    },

    _focus: function($el)
    {
      if ($el[0] === document.activeElement)
        return;

      /* set the focus in a 0 timeout - that way the focus is set after the processing
         of the current event has finished - which seems like the only reliable way
         to set focus */
      window.setTimeout(function ()
        {
          var el = $el[0],
          pos = $el.val().length,
          range;
          $el.focus();

          /* make sure el received focus so we do not error out when trying to manipulate the caret.
             sometimes modals or others listeners may steal it after its set */
          if ($el.is(":visible") && el === document.activeElement)
          {
            /* after the focus is set move the caret to the end, necessary when we val()
               just before setting focus */
            if (el.setSelectionRange)
              el.setSelectionRange(pos, pos);
            else if (el.createTextRange)
            {
              range = el.createTextRange();
              range.collapse(false);
              range.select();
            }
          }
        }, 0);
    },

    getCursorInfo: function (el)
    {
      el = $(el)[0];
      var offset = 0;
      var length = 0;
      if ('selectionStart' in el)
      {
        offset = el.selectionStart;
        length = el.selectionEnd - offset;
      }
      else if ('selection' in document)
      {
        el.focus(); //Fixed???
        var sel = document.selection.createRange();
        length = document.selection.createRange().text.length;
        sel.moveStart('character', -el.value.length);
        offset = sel.text.length - length;
      }
      return {offset : offset, length : length};
    },

    killEvent: function(event)
    {
      event.preventDefault();
      event.stopPropagation();
    },

    killEventImmediately: function(event)
    {
      event.preventDefault();
      event.stopImmediatePropagation();
    },

    defaultEscapeMarkup: function(markup)
    {
      var replace_map =
      {
        '\\' : '&#92;',
        '&' : '&amp;',
        '<' : '&lt;',
        '>' : '&gt;',
        '"' : '&quot;',
        "'" : '&#39;',
        "/" : '&#47;'
      };
      return String(markup).replace(/[&<>"'\/\\]/g, function (match)
        {
          return replace_map[match];
        });
    },

    /*
     * Produces a query function that works with a local array
     */
    local: function(options)
    {
      var data = options, // data elements
          dataText,
          tmp,
          // function used to retrieve the text portion of a data item that is matched against the search
          text = function (item)
            {
              return "" + item.text;
            };

      if ($.isArray(data))
      {
        tmp = data;
        data =
          {
            results : tmp
          };
      }
      if ($.isFunction(data) === false)
      {
        tmp = data;
        data = function ()
          {
            return tmp;
          };
      }
      var dataItem = data();
      if (dataItem.text)
      {
        text = dataItem.text;
        // if text is not a function we assume it to be a key name
        if (!$.isFunction(text))
        {
          // we need to store this in a separate variable because in the next step data gets reset 
          // and data.text is no longer available
          dataText = dataItem.text; 
          text = function (item)
            {
              return item[dataText];
            };
        }
      }
      return function (query)
        {
          var t = query.term,
          filtered =
            {
              results : []
            },
          process;
          if (t === "")
          {
            query.callback(data());
            return;
          }
          process = function (datum, collection)
            {
              var group,
              attr;
              datum = datum[0];
              if (datum.children)
              {
                group = {};
                for (attr in datum)
                {
                  if (datum.hasOwnProperty(attr))
                    group[attr] = datum[attr];
                }
                group.children = [];
                _ComboUtils.each2($(datum.children), function (i, childDatum)
                 {
                   process(childDatum, group.children);
                 });

                if (group.children.length || query.matcher(t, text(group), datum))
                {
                  collection.push(group);
                }
              }
              else
              {
                if (query.matcher(t, text(datum), datum))
                {
                  collection.push(datum);
                }
              }
            };
          _ComboUtils.each2($(data().results), function (i, datum)
            {
              process(datum, filtered.results);
            });

          query.callback(filtered);
        };
    },

    checkFormatter: function (ojContext, formatter, formatterName)
    {
      if ($.isFunction(formatter))
        return true;
      if (!formatter)
        return false;

      throw new Error(formatterName + " must be a function or a false value");
    },

    /*
     * Creates a new class
     */
    clazz: function(SuperClass, methods)
    {
      var constructor = function ()  {};
      oj.Object.createSubclass(constructor, SuperClass, '');
      constructor.prototype = $.extend(constructor.prototype, methods);
      return constructor;
    }

  };


  var _AbstractOjChoice = _ComboUtils.clazz(Object,
    {
      _bind : function (func)
      {
        var self = this;
        return function ()
        {
          func.apply(self, arguments);
        };
      },
      _init : function (opts)
      {
        var results,
        search,
        className = this._classNm,
        elemName = this._elemNm,
        resultsSelector = ".oj-listbox-results";

        this.ojContext = opts.ojContext;
        this.opts = opts = this._prepareOpts(opts);
        this.id = opts.id;

        // destroy if called on an existing component
        if (opts.element.data(elemName) !== undefined &&
          opts.element.data(elemName) !== null)
        {
          opts.element.data(elemName)._destroy();
        }
        this.container = this._createContainer();
        this.containerId = "ojChoiceId_" + (opts.element.attr("id") || "autogen" + _ComboUtils.nextUid());
        this.containerSelector = "#" + this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1');
        this.container.attr("id", this.containerId);
        // cache the body so future lookups are cheap
        this.body = _ComboUtils.thunk(function ()
          {
            return opts.element.closest("body");
          }
          );
        this.container.attr("style", opts.element.attr("style"));
        this.elementTabIndex = this.opts.element.attr("tabindex");

        // swap container for the element
        this.opts.element
        .data(elemName, this)
        .attr("tabindex", "-1")
        .before(this.container);
        this.container.data(elemName, this);
        this.dropdown = this.container.find(".oj-listbox-drop");
        this.dropdown.data(elemName, this);
        this.dropdown.on("click", _ComboUtils.killEvent);
        this.results = results = this.container.find(resultsSelector);
        this.search = search = this.container.find("input." + className + "-input");
        this.queryCount = 0;
        this.resultsPage = 0;
        this.context = null;

        // initialize the container
        this._initContainer();
        this.container.on("click", _ComboUtils.killEvent);
        _ComboUtils.installFilteredMouseMove(this.results);
        this.dropdown.on("mousemove-filtered touchstart touchmove touchend", resultsSelector, this._bind(this._highlightUnderEvent));
        // do not propagate change event from the search field out of the component
        $(this.container).on("change", "." + className + "-input", function (e)
        {
          e.stopPropagation();
        }
        );
        $(this.dropdown).on("change", "." + className + "-input", function (e)
        {
          e.stopPropagation();
        }
        );
        _ComboUtils.installKeyUpChangeEvent(search);
        search.on("keyup-change input paste", this._bind(this._updateResults));
        search.on("focus", function ()
        {
          search.addClass(className + "-focused");
        }
        );
        search.on("blur", function ()
        {
          search.removeClass(className + "-focused");
        }
        );
        this.dropdown.on("mouseup", resultsSelector, this._bind(function (e)
          {
            if ($(e.target).closest(".oj-listbox-result-selectable").length > 0)
            {
              this._highlightUnderEvent(e);
              this._selectHighlighted(null, e);
            }
          }
          ));
        // trap all mouse events from leaving the dropdown. sometimes there may be a modal that is listening
        // for mouse events outside of itself so it can close itself. since the dropdown is now outside the combobox's
        // dom it will trigger the popup close, which is not what we want
        this.dropdown.on("click mouseup mousedown", function (e)
        {
          e.stopPropagation();
        }
        );
        if ($.isFunction(this.opts.initSelection))
        {
          // initialize selection based on the current value of the source element
          ///reduce number of call to setVal
          ///multple combobox init values fail without this setVal
          if (opts.value && (this._elemNm === "ojcombobox" ||
                             ! Array.isArray(opts.value)))
          {
            // TODO: pavitra
            // this.setVal() calls super._SetValue() during component creation. This is incorrect!! 
            // By calling _SetValue, you cause converters and validators to run, and triger 
            // optionChange event.
            // _SetValue() should only called as a result of user interaction.
            // So to initialize options, override _InitOptions() and then set this.options.value 
            // by reading DOM entries, if undefined. If DOM not set, I am not sure what the default 
            // should be for your component. null is one. Please send email.
            this.setVal(opts.value);
          }

          ///support ko options-binding
          this._initSelection();
        }
        var disabled = opts.element.prop("disabled");
        if (disabled === undefined)
          disabled = false;
        this._enable(!disabled);
        var readonly = opts.element.prop("readonly");
        if (readonly === undefined)
          readonly = false;
        this._readonly(readonly);
        // Calculate size of scrollbar
        _ComboUtils.scrollBarDimensions = _ComboUtils.scrollBarDimensions || 
                                          _ComboUtils.measureScrollbar();
        this.autofocus = opts.element.prop("autofocus");
        opts.element.prop("autofocus", false);
        if (this.autofocus)
          this._focus();
      },
      _destroy : function ()
      {
        var element = this.opts.element,
            ojcomp = element.data(this._elemNm);

        this.close();
        if (this.propertyObserver)
        {
          delete this.propertyObserver;
          this.propertyObserver = null;
        }
        if (ojcomp !== undefined)
        {
          ojcomp.container.remove();
          ojcomp.dropdown.remove();
          element
          .removeClass(this._classNm + "-offscreen")
          .removeData(this._elemNm)
          .off("." + this._classNm)
          .prop("autofocus", this.autofocus || false);
          if (this.elementTabIndex)
          {
            element.attr(
            {
              tabindex : this.elementTabIndex
            }
            );
          }
          else
          {
            element.removeAttr("tabindex");
          }
          element.show();
        }
      },
      /*
       * Processes option element and return data object
       */
      _optionToData : function (element)
      {
        if (element.is("option"))
        {
          return {
            id : element.prop("value"),
            text : element.text(),
            element : element.get(),
            css : element.attr("class"),
            disabled : element.prop("disabled"),
            locked : (element.attr("locked") === "locked") || (element.data("locked") === true)
          };
        }
        else if (element.is("optgroup"))
        {
          return {
            text : element.attr("label"),
            children : [],
            element : element.get(),
            css : element.attr("class")
          };
        }
      },
      /*
       * Prepares the option items to display in the drop down
       */
      _prepareOpts : function (opts)
      {
        var element,
        datalist,
        idKey,
        self = this;

        element = opts.element;
        var tagName = element.get(0).tagName.toLowerCase();
        if (tagName === "input" && element.attr("list"))
        {
          this.datalist = datalist = $('#' + element.attr("list"));
        }

        ///ojselect
        else if (tagName === "select" && element.children().length > 0)
        {
          this.datalist = datalist = element;
        }

        opts = $.extend({},
          {
            populateResults : function (container, results, query)
            {
              var populate,
              id = this.opts.id;

              populate = function (results, container, depth)
              {
                var i,
                l,
                result,
                selectable,
                disabled,
                node,
                label,
                innerContainer,
                formatted;

                for (i = 0, l = results.length; i < l; i = i + 1)
                {
                  result = results[i];
                  disabled = (result.disabled === true);
                  selectable = (!disabled) && (id(result) !== undefined);

                  node = $("<li></li>");
                  node.addClass("oj-listbox-results-dept-" + depth);
                  node.addClass("oj-listbox-result");
                  node.addClass(selectable ? "oj-listbox-result-selectable" : "oj-listbox-result-unselectable");
                  if (disabled)
                  {
                    node.addClass("oj-disabled");
                  }
                  if (result.children)
                  {
                    node.addClass("oj-listbox-result-with-children");
                  }
                  node.attr("role", "presentation");

                  label = $(document.createElement("div"));
                  label.addClass("oj-listbox-result-label");
                  label.attr("id", "oj-listbox-result-label-" + _ComboUtils.nextUid());
                  label.attr("role", "option");
                  if (disabled)
                    label.attr("aria-disabled", "true");

                  formatted = opts.formatResult(result, label, query, self.opts.escapeMarkup);
                  if (formatted !== undefined)
                  {
                    label.html(formatted);
                  }

                  node.append(label);

                  if (result.children && result.children.length > 0)
                  {
                    innerContainer = $("<ul></ul>");
                    innerContainer.addClass("oj-listbox-result-sub");
                    populate(result.children, innerContainer, depth + 1);
                    node.append(innerContainer);
                  }

                  node.data(self._elemNm, result);
                  container.append(node);
                }
              };
              populate(results, container, 0);
            }
          }, _ojChoice_defaults, (tagName === "select") ? null : _ojCombobox_methods, opts);

        if (typeof(opts.id) !== "function")
        {
          idKey = opts.id;
          opts.id = function (e)
          {
            return e[idKey];
          };
        }

        if (datalist)
        {
          opts.query = this._bind(function (query)
            {
              var data =
              {
                results : [],
                more : false
              },
              term = query.term,
              children,
              process;

              process = function (element, collection)
              {
                var group;
                if (element.is("option"))
                {
                  if (query.matcher(term, element.text(), element))
                  {
                    collection.push(self._optionToData(element));
                  }
                }
                else if (element.is("optgroup"))
                {
                  group = self._optionToData(element);
                  _ComboUtils.each2(element.children(), function (i, elm)
                  {
                    process(elm, group.children);
                  }
                  );
                  if (group.children.length > 0)
                  {
                    collection.push(group);
                  }
                }
              };

              children = datalist.children();

              ///ojselect placeholder
              // filter out the placeholder option if there is one
              if (this._getPlaceholder() !== undefined && children.length > 0)
              {
                var placeholderOption = this._getPlaceholderOption();
                if (placeholderOption)
                {
                  children = children.not(placeholderOption);
                }
              }

              _ComboUtils.each2(children, function (i, elm)
              {
                process(elm, data.results);
              }
              );
              query.callback(data);
            }
            );
          // this is needed because inside val() we construct choices from options and there id is hardcoded
          opts.id = function (e)
          {
            return e.id;
          };
        }
        else if ("data" in opts)
        {
          opts.query = _ComboUtils.local(opts.data);
        }

        return opts;
      },
      _triggerSelect : function (data)
      {
        var evt = $.Event(this._elemNm + "-selecting",
          {
            val : this.id(data),
            object : data
          }
          );
        this.opts.element.trigger(evt);
        return !evt.isDefaultPrevented();
      },
      /*
       * triggers the optionChange event
       * TODO: only use in multiCombobox
       */
      _triggerChange : function ()
      {
        this.ojContext._SetValue(this.getVal());
      },
      _isInterfaceEnabled : function ()
      {
        return this.enabledInterface === true;
      },
      _enableInterface : function ()
      {
        var enabled = this._enabled && !this._readonly,
        disabled = !enabled;

        if (enabled === this.enabledInterface)
          return false;

        this.container.toggleClass("oj-disabled", disabled);
        this.close();
        this.enabledInterface = enabled;

        return true;
      },
      _enable : function (enabled)
      {
        if (enabled === undefined)
          enabled = true;
        if (this._enabled === enabled)
          return;
        this._enabled = enabled;

        this.opts.element.prop("disabled", !enabled);
        this._enableInterface();
      },
      _disable : function ()
      {
        this._enable(false);
      },
      _readonly : function (enabled)
      {
        if (enabled === undefined)
          enabled = false;
        if (this._readonly === enabled)
          return false;
        this._readonly = enabled;

        this.opts.element.prop("readonly", enabled);
        this._enableInterface();
        return true;
      },
      _opened : function ()
      {
        return this.container.hasClass("oj-listbox-dropdown-open");
      },
      _positionDropdown : function ()
      {
        var $dropdown = this.dropdown,
        offset = this.container.offset(),
        height = this.container.outerHeight(false),
        width = this.container.outerWidth(false),
        dropHeight = $dropdown.outerHeight(false),
        $window = $(window),
        windowWidth = $window.width(),
        windowHeight = $window.height(),
        viewPortRight = $window.scrollLeft() + windowWidth,
        viewportBottom = $window.scrollTop() + windowHeight,
        dropTop = offset.top + height,
        dropLeft = offset.left,
        enoughRoomBelow = dropTop + dropHeight <= viewportBottom,
        enoughRoomAbove = (offset.top - dropHeight) >= this.body().scrollTop(),
        dropWidth = $dropdown.outerWidth(false),
        enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight,
        aboveNow = $dropdown.hasClass("oj-listbox-drop-above"),
        bodyOffset,
        above,
        changeDirection,
        css,
        resultsListNode;

        // always prefer the current above/below alignment, unless there is not enough room
        if (aboveNow)
        {
          above = true;
          if (!enoughRoomAbove && enoughRoomBelow)
          {
            changeDirection = true;
            above = false;
          }
        }
        else
        {
          above = false;
          if (!enoughRoomBelow && enoughRoomAbove)
          {
            changeDirection = true;
            above = true;
          }
        }

        //if we are changing direction we need to get positions when dropdown is hidden;
        if (changeDirection)
        {
          $dropdown.hide();
          offset = this.container.offset();
          height = this.container.outerHeight(false);
          width = this.container.outerWidth(false);
          dropHeight = $dropdown.outerHeight(false);
          viewPortRight = $window.scrollLeft() + windowWidth;
          viewportBottom = $window.scrollTop() + windowHeight;
          dropTop = offset.top + height;

          ///ojselect move 1px up to cover up the border bottom of the select box
          if (!above && this._hasSearchBox())
            dropTop -= 1;

          dropLeft = offset.left;
          dropWidth = $dropdown.outerWidth(false);
          enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight;
          $dropdown.show();
        }

        ///ojselect move 1px up to cover up the border bottom of the select box
        else if (!above && this._hasSearchBox())
          dropTop -= 1;

        if (this.opts.dropdownAutoWidth)
        {
          resultsListNode = $(".oj-listbox-results", $dropdown)[0];
          $dropdown.addClass("oj-listbox-drop-auto-width");
          $dropdown.css('width', '');
          // Add scrollbar width to dropdown if vertical scrollbar is present
          dropWidth = $dropdown.outerWidth(false) + 
            (resultsListNode.scrollHeight === resultsListNode.clientHeight ? 0 : 
             _ComboUtils.scrollBarDimensions.width);
          dropWidth > width ? width = dropWidth : dropWidth = width;
          enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight;
        }
        else
        {
          this.container.removeClass("oj-listbox-drop-auto-width");
        }

        // fix positioning when body has an offset and is not position: static
        if (this.body().css('position') !== 'static')
        {
          bodyOffset = this.body().offset();
          dropTop -= bodyOffset.top;
          dropLeft -= bodyOffset.left;
        }

        if (!enoughRoomOnRight)
        {
          dropLeft = offset.left + width - dropWidth;
        }

        css =
        {
          left : dropLeft,
          width : width
        };

        if (above)
        {
          css.bottom = windowHeight - offset.top;
          css.top = 'auto';
          this.container.addClass("oj-listbox-drop-above");
          $dropdown.addClass("oj-listbox-drop-above");
        }
        else
        {
          css.top = dropTop;
          css.bottom = 'auto';
          this.container.removeClass("oj-listbox-drop-above");
          $dropdown.removeClass("oj-listbox-drop-above");
        }

        $dropdown.css(css);
      },
      _shouldOpen : function ()
      {
        var event;

        if (this._opened())
          return false;
        if (this._enabled === false || this._readonly === true)
          return false;

        event = $.Event(this._elemNm + "-opening");
        this.opts.element.trigger(event);
        return !event.isDefaultPrevented();
      },
      _clearDropdownAlignmentPreference : function ()
      {
        // clear the classes used to figure out the preference of where the dropdown should be opened
        this.container.removeClass("oj-listbox-drop-above");
        this.dropdown.removeClass("oj-listbox-drop-above");
      },
      /*
       * Opens the dropdown
       *
       * @return {boolean} whether or not dropdown was opened. This method will return false if, for example,
       * the dropdown is already open, or if the 'open' event listener on the element called preventDefault().
       */
      open : function ()
      {
        if (!this._shouldOpen())
          return false;
        this._opening();
        return true;
      },
      _clearPlaceholder : function ()
      {
        if (this.search.hasClass(this._classNm + "-default"))
        {
          this.search.val("").removeClass(this._classNm + "-default");
        }
      },
      _opening : function ()
      {
        var cid = this.containerId,
        scroll = "scroll." + cid,
        resize = "resize." + cid,
        orient = "orientationchange." + cid,
        className = this._classNm,
        elemName = this._elemNm,
        mask;

        this._clearPlaceholder();
        this.container.addClass("oj-listbox-dropdown-open");

        this._clearDropdownAlignmentPreference();

        if (this.dropdown[0] !== this.body().children().last()[0])
        {
          this.dropdown.detach().appendTo(this.body());
        }

        // create the dropdown mask if doesnt already exist
        mask = $("#oj-listbox-drop-mask" + cid);
        if (mask.length == 0)
        {
          mask = $(document.createElement("div"));
          mask.attr("id", "oj-listbox-drop-mask" + cid).attr("class", "oj-listbox-drop-mask");
          mask.hide();
          mask.appendTo(this.body());

          mask.on("mousedown touchstart click", function (e)
          {
            var dropdown = $("#oj-listbox-drop"),
            self;
            if (dropdown.length > 0)
            {
              self = dropdown.data(elemName);
              if (self.opts.selectOnBlur)
              {
                self._selectHighlighted(
                {
                  noFocus : true
                }, e   ///pass original event
                );
              }
              self.close();
              e.preventDefault();
              e.stopPropagation();
            }
          }
          );
        }

        // ensure the mask is always right before the dropdown
        if (this.dropdown.prev()[0] !== mask[0])
        {
          this.dropdown.before(mask);
        }

        // move the global id to the correct dropdown
        $("#oj-listbox-drop").removeAttr("id");
        this.dropdown.attr("id", "oj-listbox-drop");

        // show the elements
        mask.show();

        this._positionDropdown();
        this.dropdown.show();
        this._positionDropdown();

        ///select: accessibility
        this._getActiveContainer().attr("aria-expanded", true);

        // attach listeners to events that can change the position of the container and thus require
        // the position of the dropdown to be updated as well so it does not come unglued from the container
        var that = this;
        this.container.parents().add(window).each(function ()
        {
          $(this).on(resize + " " + scroll + " " + orient, function (e)
          {
            that._positionDropdown();
          }
          );
        }
        );

      },
      close : function ()
      {
        if (!this._opened())
          return;

        var cid = this.containerId,
        scroll = "scroll." + cid,
        resize = "resize." + cid,
        orient = "orientationchange." + cid;

        // unbind event listeners
        this.container.parents().add(window).each(function ()
        {
          $(this).off(scroll).off(resize).off(orient);
        }
        );

        this._clearDropdownAlignmentPreference();

        $("#oj-listbox-drop-mask" + this.containerId).hide();
        this.dropdown.removeAttr("id");
        this.dropdown.hide();
        this.container.removeClass("oj-listbox-dropdown-open");
        this.results.empty();

        ///select: accessibility
        this._getActiveContainer().attr("aria-expanded", false);
      },
      _clearSearch : function ()  {},
      _ensureHighlightVisible : function ()
      {
        var results = this.results,
        children,
        index,
        child,
        hb,
        rb,
        y,
        more;

        index = this._highlight();

        if (index < 0)
          return;

        if (index == 0)
        {
          // if the first element is highlighted scroll all the way to the top,
          // that way any unselectable headers above it will also be scrolled
          // into view
          results.scrollTop(0);
          return;
        }

        children = this._findHighlightableChoices().find(".oj-listbox-result-label");
        child = $(children[index]);
        hb = child.offset().top + child.outerHeight(true);

        // if this is the last child lets also make sure oj-combobox-more-results is visible
        if (index === children.length - 1)
        {
          more = results.find("li.oj-listbox-more-results");
          if (more.length > 0)
          {
            hb = more.offset().top + more.outerHeight(true);
          }
        }

        rb = results.offset().top + results.outerHeight(true);
        if (hb > rb)
        {
          results.scrollTop(results.scrollTop() + (hb - rb));
        }
        y = child.offset().top - results.offset().top;

        // make sure the top of the element is visible
        if (y < 0 && child.css('display') != 'none')
        {
          results.scrollTop(results.scrollTop() + y); // y is negative
        }
      },
      _findHighlightableChoices : function ()
      {
        return this.results.find(".oj-listbox-result-selectable:not(.oj-disabled, .oj-listbox-selected)");
      },
      _moveHighlight : function (delta)
      {
        var choices = this._findHighlightableChoices(),
        index = this._highlight();
        while (index > -1 && index < choices.length)
        {
          index += delta;
          var choice = $(choices[index]);
          if (choice.hasClass("oj-listbox-result-selectable") && !choice.hasClass("oj-disabled") && 
              !choice.hasClass("oj-listbox-selected"))
          {
            this._highlight(index);
            break;
          }
        }
      },
      _highlight : function (index)
      {
        var choices = this._findHighlightableChoices(),
        choice,
        data;

        if (arguments.length === 0)
        {
          return choices.get().indexOf(choices.filter(".oj-listbox-highlighted")[0]);
        }

        if (index >= choices.length)
          index = choices.length - 1;
        if (index < 0)
          index = 0;

        this._removeHighlight();

        choice = $(choices[index]);
        choice.addClass("oj-listbox-highlighted");

        // ensure assistive technology can determine the active choice
        ///select: accessibility
        this._getActiveContainer().attr("aria-activedescendant", 
                                        choice.find(".oj-listbox-result-label").attr("id"));
          
        this._ensureHighlightVisible();
      },
      _removeHighlight : function ()
      {
        this.results.find(".oj-listbox-highlighted").removeClass("oj-listbox-highlighted");
      },
      _highlightUnderEvent : function (event)
      {
        var el = $(event.target).closest(".oj-listbox-result-selectable");
        if (el.length > 0 && !el.is(".oj-listbox-highlighted"))
        {
          var choices = this._findHighlightableChoices();
          this._highlight(choices.index(el));
        }
        else if (el.length == 0)
        {
          // if we are over an unselectable item remove all highlights
          this._removeHighlight();
        }
      },
      _updateResults : function (initial)
      {
        var search = this.search,
        results = this.results,
        opts = this.opts,
        data,
        self = this,
        input,
        term = search.val(),
        lastTerm = $.data(this.container, this._classNm + "-last-term"),
        // sequence number used to drop out-of-order responses
        queryNumber;

        // prevent duplicate queries against the same term
        if (initial !== true && lastTerm && (term === lastTerm))
          return;

        $.data(this.container, this._classNm + "-last-term", term);

        function postRender()
        {
          self._positionDropdown();
        }

        function render(html)
        {
          results.html(html);
          postRender();
        }

        queryNumber = ++this.queryCount;

        this._removeHighlight();
        input = this.search.val();
        if (input !== undefined && input != null && initial !== true)
        {
          term = input;
        }
        else
        {
          term = "";
        }

        this.resultsPage = 1;

        opts.query(
        {
          element : opts.element,
          term : term,
          page : this.resultsPage,
          context : null,
          matcher : opts.matcher,
          callback : this._bind(function (data)
          {
            var def; // default choice

            // ignore old responses
            if (queryNumber != this.queryCount)
            {
              return;
            }

            // ignore a response if the oj-combobox has been closed before it was received
            if (!this._opened())
            {
              return;
            }

            // save context, if any
            this.context = (data.context === undefined) ? null : data.context;
            // create a default choice and prepend it to the list

            ///ojselect doesn't allow adding a new option
            if (data.results.length === 0 && this.opts.manageNewEntry && search.val() !== "")
            {
              def = this.opts.manageNewEntry.call(self, search.val(), data.results);
              if (def !== undefined && def !== null && self.id(def) !== undefined && self.id(def) !== null)
              {
                if ($(data.results).filter(
                    function ()
                  {
                    return self.id(this) === self.id(def);
                  }
                  ).length === 0)
                {
                  data.results.unshift(def);
                }
              }
            }

            if (data.results.length === 0 && _ComboUtils.checkFormatter(self.ojContext, opts.formatNoMatches, "formatNoMatches"))
            {
              render("<li class='" + "oj-listbox-no-results'>" + opts.formatNoMatches(self.ojContext, search.val()) + "</li>");
              return;
            }

            results.empty();
            self.opts.populateResults.call(this, results, data.results,
            {
              term : search.val(),
              page : this.resultsPage,
              context : null
            }
            );
            this._postprocessResults(data, initial);
            postRender();
          }
          )
        }
        );
      },
      _cancel : function ()
      {
        this.close();
      },

      _focusSearch : function ()
      {
        _ComboUtils._focus(this.search);
      },

      _selectHighlighted : function (options, event)
      {
        var index = this._highlight(),
        highlighted = this.results.find(".oj-listbox-highlighted"),
        data = highlighted.closest(".oj-listbox-result").data(this._elemNm);

        if (data)
        {
          this._highlight(index);
          this._onSelect(data, options, event);
        }
        else if (options && options.noFocus)
        {
          this.close();
        }
      },
      _getPlaceholder : function ()
      {
        return this.opts.element.attr("placeholder") ||
        this.opts.element.attr("data-placeholder") || // jquery 1.4 compat
        this.opts.element.data("placeholder") ||
        this.opts.placeholder;
      },

      ///ojselect placeholder
      _getPlaceholderOption : function ()
      {
        return undefined;
      },

      _initContainerWidth : function ()
      {
        function resolveContainerWidth()
        {
          var style,
          attrs,
          matches,
          i,
          l,
          attr;

          // check if there is inline style on the element that contains width
          style = this.opts.element.attr('style');
          if (style !== undefined)
          {
            attrs = style.split(';');
            for (i = 0, l = attrs.length; i < l; i = i + 1)
            {
              attr = attrs[i].replace(/\s/g, '');
              matches = attr.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i);
              if (matches !== null && matches.length >= 1)
                return matches[1];
            }
          }
        };

        var width = resolveContainerWidth.call(this);
        if (width !== null)
        {
          this.container.css("width", width);
        }
      },

      ///ojselect
      getVal: function () {
        return this.ojContext.option("value");
      },

      ///ojselect
      ///pass original event
      setVal: function (val, event) {
        if (typeof val === "string")
          this.ojContext._SetValue([val], event);
        else
          this.ojContext._SetValue(val, event);
        // also set on the input element
        this.opts.element.val(val);
      },

      ///select: accessibility
      _getActiveContainer : function ()
      {
        return this.search;
      },

      ///ojselect
      _hasSearchBox : function ()
      {
        return (this.opts.minimumResultsForSearch !== undefined &&
          this.container._hasSearchBox !== undefined);
      }

    }
    );

  var _ojChoice_defaults =
  {
    closeOnSelect : true,
    openOnEnter : true,
    formatResult : function (result, container, query, escapeMarkup)
    {
      var markup = [];
      markup.push(escapeMarkup(result.text));
      return markup.join("");
    },
    formatSelection : function (data, container, escapeMarkup)
    {
      return (data && data.text) ? escapeMarkup(data.text) : undefined;
    },
    formatNoMatches : function (ojContext, val)
    {
//      return ojContext.getTranslatedString("noMatchesFound");
      return "No matches found";
    },
    id : function (e)
    {
      return e.id;
    },
    matcher : function (term, text)
    {
      return ('' + text).toUpperCase().indexOf(('' + term).toUpperCase()) >= 0;
    },

    separator : ",",
    escapeMarkup : _ComboUtils.defaultEscapeMarkup,
    blurOnChange : false,
    selectOnBlur : false
  };

  var _ojCombobox_methods =
  {
    manageNewEntry : function (term)
    {
      return {
        id : $.trim(term),
        text : $.trim(term)
      };
    }
  };


  ///ojselect
  var _AbstractSingleChoice = _ComboUtils.clazz(_AbstractOjChoice,
    {
      _enableInterface : function ()
      {
        if (_AbstractSingleChoice.superclass._enableInterface.apply(this, arguments))
        {
          this.search.prop("disabled", !this._isInterfaceEnabled());
        }
      },

      _focus : function ()
      {
        if (this._opened())
        {
          this.close();
        }
      },

      _destroy : function ()
      {
        $("label[for='" + this.search.attr('id') + "']")
        .attr('for', this.opts.element.attr("id"));
        _AbstractSingleChoice.superclass._destroy.apply(this, arguments);
      },

      _clear : function ()
      {
        var data = this.selection.data(this._elemNm);
        if (data)
        { // guard against queued quick consecutive clicks
          this.setVal([]);
          this.search.val("");
          this.selection.removeData(this._elemNm);
        }
        this._setPlaceholder();
      },

      _initSelection : function ()
      {
        var selected,
        element,
        self = this;


        ///support ko options-binding
//        if (this.datalist || this.getVal())
//        {
          if (this.datalist)
            element = this.datalist;
          else
            element = this.opts.element;
          this.opts.initSelection.call(null, element, function (selected)
          {
            if (selected !== undefined && selected !== null)
            {
              ///reduce number of call to setVal
              ///only setVal when selected != prevVal
              var prevVal = self.getVal();
              if (Array.isArray(prevVal))
                prevVal = prevVal[0];

              if (self.id(selected) !== prevVal)
                self.setVal(self.id(selected));

              self._updateSelection(selected);
              self.close();
            }
          }
          );
//        }
      },

      _containerKeydownHandler : function (e)
      {
        if (!this._isInterfaceEnabled())
          return;

        if (e.which === _ComboUtils.KEY.PAGE_UP || e.which === _ComboUtils.KEY.PAGE_DOWN)
        {
          // prevent the page from scrolling
          _ComboUtils.killEvent(e);
          return;
        }

        switch (e.which)
        {
        case _ComboUtils.KEY.UP:
        case _ComboUtils.KEY.DOWN:
          if (this._opened())
          {
            this._moveHighlight((e.which === _ComboUtils.KEY.UP) ? -1 : 1);
          }
          else
          {
            this.open();
          }
          _ComboUtils.killEvent(e);
          return;

        case _ComboUtils.KEY.ENTER:
          this._selectHighlighted(null, e);
          _ComboUtils.killEvent(e);
          return;

        case _ComboUtils.KEY.TAB:
          this._selectHighlighted(
            {
              noFocus : true
            }, e   ///pass original event
          );
          return;

        case _ComboUtils.KEY.ESC:
          this._cancel(e);
          _ComboUtils.killEvent(e);
          return;
        }

        ///ojselect: used by select
        this._userTyping = true;

        if (!this._opened())
          this.open();
      },

      _containerKeyupHandler : function (e)
      {
        if (this._isInterfaceEnabled())
        {
          if (!this._opened())
            this.open();
        }
      },

      _initContainer : function ()
      {
        var selection,
        container = this.container,
        dropdown = this.dropdown,
        idSuffix = _ComboUtils.nextUid(),
        elementLabel;

        this.selection = selection = container.find("." + this._classNm + "-choice");

        elementLabel = $("label[for='" + this.opts.element.attr("id") + "']");
        if (!elementLabel.attr("id"))
          elementLabel.attr('id', this._classNm + "-label-" + idSuffix);

        // add aria associations
        selection.find("." + this._classNm + "-input").attr("id", this._classNm + "-input-" + idSuffix);
        this.results.attr("id", "oj-listbox-results-" + idSuffix);
        this.search.attr("aria-owns", "oj-listbox-results-" + idSuffix);
        this.search.attr("aria-labelledby", elementLabel.attr("id"));

        this.search.on("keydown", this._bind(this._containerKeydownHandler));
        this.search.on("keyup-change input", this._bind(this._containerKeyupHandler));

        selection.on("mousedown", "abbr", this._bind(function (e)
          {
            if (!this._isInterfaceEnabled())
              return;
            this._clear();
            _ComboUtils.killEventImmediately(e);
            this.close();
            this.selection.focus(); //Fixed???
          }
          ));

        selection.on("mousedown", this._bind(function (e)
          {
            if (this._opened())
            {
              this.close();
            }
            else if (this._isInterfaceEnabled())
            {
              this.open();
            }
            this.search.focus();
          }
          ));

        selection.on("focus", this._bind(function (e)
          {
            _ComboUtils.killEvent(e);
          }
          ));

        this.search.on("blur", this._bind(function ()
          {
            this.search.removeClass(this._classNm + "-focused");
          }
          ));

        this._initContainerWidth();
        this.opts.element.addClass(this._classNm + "-offscreen");
        this._setPlaceholder();

      },

      _prepareOpts : function ()
      {
        var opts = _AbstractSingleChoice.superclass._prepareOpts.apply(this, arguments),
        self = this;

        ///ojselect set initial selected value
        var tagName = opts.element.get(0).tagName.toLowerCase();
        if ((tagName === "input" && opts.element.prop("list")) ||
          (tagName === "select" && opts.element.children().length > 0))
        {
          // install the selection initializer
          opts.initSelection = function (element, callback)
          {
            var selected;
            var value = self.getVal();
            if (Array.isArray(value))
              value = value[0];

            if (value !== undefined && value !== null)
            {
              selected = self._optionToData(element.find("option").filter(function ()
                  {
                    return this.value === value;
                  }
                  ));
            }
            else
            {
              selected = self._optionToData(element.find("option").filter(function ()
                  {
                    return this.selected;
                  }
                  ));
            }
            callback(selected);
          };
        }
        else if ("data" in opts || (this.getVal() && this.getVal().length > 0))
        {
          // install default initSelection when applied to hidden input and data is local
          opts.initSelection = opts.initSelection || function (element, callback)
          {
            var id = "";
            if (self.getVal() && self.getVal().length)
              id = self.getVal()[0];

            //search in data by id, storing the actual matching item
            var first = null;
            var match = null;
            opts.query(
            {
              matcher : function (term, text, el)
              {
                var is_match = (id === opts.id(el));
                if (is_match)
                {
                  match = el;
                }
                ///ojselect save the 1st option
                if (!first)
                {
                  first = el;
                }
                return is_match;
              },
              callback : !$.isFunction(callback) ? $.noop : function ()
              {
                ///ojselect if no match, pick the 1st option
                if (!match && tagName === "select")
                {
                  match = first;
                }
                callback(match);
              }
            }
            );
          };
        }
        return opts;
      },

      _setPlaceholder : function ()
      {
        var placeholder = this._getPlaceholder();

        if (placeholder === undefined)
          placeholder = "";
        this.search.val(placeholder).addClass(this._classNm + "-default");
        this.container.removeClass(this._classNm + "-allowclear");
      },

      _postprocessResults : function (data, initial, noHighlightUpdate)
      {
        var selected = 0,
        self = this,
        highlightableChoices;

        highlightableChoices = this._findHighlightableChoices();
        _ComboUtils.each2(highlightableChoices, function (i, elm)
        {
          if (self.getVal() && self.getVal()[0] === self.id(elm.data(self._elemNm)))
          {
            selected = i;
            return false;
          }
        }
        );

        // and highlight it
        if (noHighlightUpdate !== false)
        {
          if (initial === true && selected >= 0)
          {
            this._highlight(selected);
          }
          else
          {
            this._highlight(0);
          }
        }
      },

      ///pass original event
      _onSelect : function (data, options, event)
      {
        if (!this._triggerSelect(data))
        {
          return;
        }

        var old = this.getVal()? this.getVal()[0] : null,
            oldData = this._data();

        ///reduce number of call to setVal
        ///this.setVal(this.id(data));
        this._updateSelection(data);
        this.close();

        if (!(old === this.id(data)))
        {
          ///reduce number of call to setVal
          ///setVal with correct value
          ///this._triggerChange();
          this.setVal(this.id(data), event);
        }
      },

      val : function ()
      {
        var val,
        data = null,
        self = this,
        oldData = this._data();

        if (arguments.length === 0)
        {
          return this.getVal();
        }

        val = arguments[0];

        if (this.datalist)
        {
          var selected;

          selected = this.datalist
            .val(val)
            .find("option").filter(function ()
            {
              return this.selected
            }
            );

          _ComboUtils.each2(selected, function (i, elm)
          {
            data = self._optionToData(elm);
            return false;
          }
          );
          this.setVal(val);
          this._updateSelection(data);
          this._setPlaceholder();
        }
        else
        {
          // val is an id. !val is true for [undefined,null,'',0] - 0 is legal
          if (!val && val !== 0)
          {
            this._clear();
            return;
          }
          if (this.opts.initSelection === undefined)
          {
            throw new Error("cannot call val() if initSelection() is not defined");
          }
          this.setVal(val);
          this.opts.initSelection(this.opts.element, function (data)
          {
            self.setVal(!data ? [] : self.id(data));
            self._updateSelection(data);
            self._setPlaceholder();
          }
          );
        }
      },

      _clearSearch : function ()
      {
        this.search.val("");
      },

      _data : function (value)
      {
        var data;

        if (arguments.length === 0)
        {
          data = this.selection.data(this._elemNm);
          if (data === undefined)
            data = null;
          return data;
        }
        else
        {
          if (!value)
          {
            this._clear();
          }
          else
          {
            data = this._data();
            this.setVal(!value ? [] : this.id(value));
            this._updateSelection(value);
          }
        }
      }

    }
    );


  var _OjSingleCombobox = _ComboUtils.clazz(_AbstractSingleChoice,
    {
      _elemNm : "ojcombobox",
      _classNm : "oj-combobox",

      _createContainer : function ()
      {
        var container = $(document.createElement("div")).attr(
          {
            "class" : "oj-combobox oj-component"
          }
          ).html([
              "<div class='oj-combobox-choice' tabindex='-1' role='presentation'>",
              "   <span class='oj-combobox-search'><input type='text' autocomplete='off' autocorrect='off' autocapitalize='off'",
              "       spellcheck='false' class='oj-combobox-input' role='combobox' aria-expanded='false' aria-autocomplete='list' />",
              "   </span><abbr class='oj-combobox-search-choice-close' role='presentation'></abbr>",
              "   <a class='oj-combobox-arrow' role='presentation'><b class='oj-combobox-icon oj-component-icon oj-clickable-icon oj-combobox-open-icon' role='presentation'></b></a>",
              "</div>",
              "<div class='oj-listbox-drop oj-combobox-display-none' role='presentation'>",
              "   <ul class='oj-listbox-results' role='listbox'>",
              "   </ul>",
              "</div>"].join(""));
        return container;
      },
      close : function ()
      {
        if (!this._opened())
          return;
        _OjSingleCombobox.superclass.close.apply(this, arguments);

        if (this.search.val() == "")
          this._clear();
        else if (!this._data() && this.search.val !== "")
          this._clearSearch();
        else
          this.search.val(this._data().text);
      },

      _opening : function (event)
      {
        var el,
        range,
        len;
        _OjSingleCombobox.superclass._opening.apply(this, arguments);

        el = this.search.get(0);
        if (el.createTextRange)
        {
          range = el.createTextRange();
          range.collapse(false);
          range.select();
        }
        else if (el.setSelectionRange)
        {
          len = this.search.val().length;
          el.setSelectionRange(len, len);
        }

        this._updateResults(true);
        this.opts.element.trigger($.Event("ojexpand"));
      },

      _updateSelection : function (data)
      {
        var formatted;

        this.selection.data(this._elemNm, data);
        if (data !== null)
        {
          formatted = this.opts.formatSelection(data, this.search, this.opts.escapeMarkup);
        }
        if (formatted !== undefined)
        {
          this.search.val(formatted);
        }
        this.search.removeClass(this._classNm + "-default");
        if (this.opts.allowClear)
        {
          this.container.addClass(this._classNm + "-allowclear");
        }
      }
    }
    );


  var _OjSingleSelect = _ComboUtils.clazz(_AbstractSingleChoice,
    {
      _elemNm : "ojselect",
      _classNm : "oj-select",
      _userTyping : false,


      _createContainer : function ()
      {
        var container = $(document.createElement("div")).attr(
          {
            "class" : "oj-select oj-component"
          }
          ).html([
              "<div class='oj-select-choice' tabindex='0' role='combobox' ",
              "     aria-autocomplete='none' aria-expanded='false' aria-ready='true'>",
              "  <span class='oj-select-box'>",
              "    <span class='oj-select-chosen'></span>",
              "    <abbr class='oj-select-search-choice-close' role='presentation'></abbr>",
              "    <a class='oj-component-icon oj-clickable-icon oj-select-open-icon' role='presentation'>",
              "    <b role='presentation'></b></a>",
              "  </span>",
              "</div>",

              "<div class='oj-listbox-drop oj-select-display-none' role='presentation'>",

              "  <div class='oj-select-search-wrapper'>",

              "  <div class='oj-select-search'>",
              "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off'",
              "           spellcheck='false' class='oj-select-input' title='Search field' ",
              "           role='combobox' aria-expanded='false' aria-autocomplete='list' />",

              "    <span class='oj-select-spyglass-box'>",
              "      <span class='oj-component-icon oj-select-search-icon' role='presentation'>",
              "       <b role='presentation'></b></span>",
              "    </span>",
              "  </div>",

              "  </div>",

              "   <ul class='oj-listbox-results' role='listbox'>",
              "   </ul>",
              "</div>"

            ].join(""));


        //Don't allow focus on a disabled "select"
        if (this.opts.element.prop("disabled"))
          container.find(".oj-select-choice").attr("tabindex", "-1");

        return container;
      },

      close : function ()
      {
        if (!this._opened())
          return;
        _OjSingleSelect.superclass.close.apply(this, arguments);

        ///ojselect
        if (this.text.text() == "")
          this._clear();
        //always clear search text when dropdown close
        else
          this._clearSearch();

        //set focus to select box
        _ComboUtils._focus(this.selection);
      },

      _opening : function (event)
      {
        var el,
        range,
        len;

        _OjSingleSelect.superclass._opening.apply(this, arguments);

        //select: focus still stay on the selectBox if open dropdown by mouse click
        this._showSearchBox();

        //James: tab out of an expanded poplist, focus is going all the way to the top of the page.
        if (this._hasSearchBox())
        {
          el = this.search.get(0);
          if (el.createTextRange)
          {
            range = el.createTextRange();
            range.collapse(false);
            range.select();
          }
          else if (el.setSelectionRange)
          {
            len = this.search.val().length;
            el.setSelectionRange(len, len);
          }
        }

        this._updateResults(true);
        this.opts.element.trigger($.Event("ojexpand"));
      },

      _initContainer : function ()
      {
        ///ojselect placeholder
        this.text = this.container.find(".oj-select-chosen");
        _OjSingleSelect.superclass._initContainer.apply(this, arguments);

        ///select: accessibility
        this.container.find(".oj-select-choice")
          .attr("aria-owns", this.search.attr("aria-owns"))
          .attr("aria-labelledby", this.search.attr("aria-labelledby"));
        
        ///ojselect
        this.selection.on("keydown", this._bind(this._containerKeydownHandler));
        this.selection.on("keyup-change input", this._bind(this._containerKeyupHandler));
      },

      _initSelection : function ()
      {
        if (this._isPlaceholderOptionSelected())
        {
          this._updateSelection(null);
          this.close();
          this._setPlaceholder();
        }
        else
        {
          _OjSingleSelect.superclass._initSelection.apply(this, arguments);
        }

      },

      _updateSelection : function (data)
      {
        var formatted;

        this.selection.data(this._elemNm, data);
        //Bug 18326121 - ojet select displaying values incorrectly 
        if (data !== null)
        {
          ///ojselect
          this.text.text(data.text);
        }
        ///ojselect placeholder
        ///reduce number of call to setVal
        ///this.setVal(data? this.opts.id(data) : data);
        this.text.removeClass(this._classNm + "-default");

        if (this.opts.allowClear)
        {
          this.container.addClass(this._classNm + "-allowclear");
        }
      },

      _getActiveContainer : function ()
      {
        var expanded = this.search.attr("aria-expanded");
        return (expanded && this._hasSearchBox()) ? this.search : this.selection;
      },

      _getPlaceholderOption : function ()
      {
        var element = this.opts.element;
        var firstOption = element.children('option').first();
        if (firstOption.text() === "" && firstOption.val() === "")
        {
          return firstOption;
        }
      },

      _isPlaceholderOptionSelected : function ()
      {
        var placeholderOption;
        if (!this._getPlaceholder())
          return false; // no placeholder specified so no option should be considered

        var cval = this.getVal();
        return ((placeholderOption = this._getPlaceholderOption()) !== undefined && placeholderOption.prop("selected"))
         || (cval === "")
         || (cval === undefined)
         || (cval === null);
      },

      _getPlaceholder : function ()
      {
        // if a placeholder is specified on a single select without a valid placeholder option ignore it
        if (this._getPlaceholderOption() === undefined)
        {
          return undefined;
        }

        return _OjSingleSelect.superclass._getPlaceholder.apply(this, arguments);
      },

      _setPlaceholder : function ()
      {
        var placeholder = this._getPlaceholder();

        if (this._isPlaceholderOptionSelected() && placeholder !== undefined)
        {
          // check for a placeholder option if attached to a select
          if (this._getPlaceholderOption() === undefined)
            return;

          if (placeholder === undefined)
            placeholder = "";
          this.text.text(placeholder).addClass(this._classNm + "-default");
          this.container.removeClass(this._classNm + "-allowclear");
        }
      },

      _clearPlaceholder : function ()
      {
        if (this.text.hasClass(this._classNm + "-default"))
        {
          this.text.val("").removeClass(this._classNm + "-default");
        }
      },

      setVal: function (val, event)
      {
        ///pass original event
        _OjSingleSelect.superclass.setVal.call(this, val, event);
        this.selection.data("selectVal", val);
      },

      _containerKeydownHandler : function (e)
      {
        ///ignore shift key 
        if (_ComboUtils.KEY.isControl(e) || _ComboUtils.KEY.isFunctionKey(e))
        {
          return;
        }

        if (e.which === _ComboUtils.KEY.TAB)
        {
          this._selectHighlighted(
            {
              noFocus : true
            }, e   ///pass original event
          );

          //James: tab out of an expanded poplist, focus is going all the way to the top of the page.
          this.selection.focus();
          return;
        }

       _OjSingleSelect.superclass._containerKeydownHandler.apply(this, arguments);
      },

      _showSearchBox : function ()
      {
        var focusOnSearchBox = false;
        var searchBox = this.dropdown.find(".oj-select-search");
        if (searchBox)
        {
          //hide and show the search box
          if (this._hasSearchBox())
          {
            this.dropdown.find(".oj-select-search-wrapper")
              .removeClass("oj-helper-hidden-accessible");

            $(searchBox).removeAttr("aria-hidden");

            focusOnSearchBox = true;
          }
          else
          {
            this.dropdown.find(".oj-select-search-wrapper")
              .addClass("oj-helper-hidden-accessible");

            $(searchBox)
            .attr(
            {
              "aria-hidden" : "true"
            }
            );
          }
        }

        //if search box is being displayed, focus on the search box otherwise focus on the select box
        _ComboUtils._focus(focusOnSearchBox ? this.search : this.selection);
      },

      _hasSearchBox : function ()
      {
        var threshold = this.opts.minimumResultsForSearch;
        var len = this.datalist ? this.datalist[0].length : this.opts.data.length;
        return (len > threshold || this._userTyping);
      }

    }
    );


  /**
   * @class
   * @name oj.ojCombobox
   * @augments oj.editableValue
   *
   * @classdesc
   * <h3 id="comboboxOverview-section">
   *   JET Combobox Component
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#comboboxOverview-section"></a>
   * </h3>
   *
   * <p>Description: JET Combobox enhances a html input and datalist element into a Combobox that supports
   * single-select, multi-select, free text input, and search filtering.
   *
   * <p>A JET Combobox can be created with the following markup. By default, it creates a single-select
   * Combobox. The 'multiple' option can be specified to change it to a multi-select Combobox.
   *
   * <pre class="prettyprint">
   * <code>
   * &lt;input list="items" data-bind="ojComponent: {component: 'ojCombobox', multiple: true}"/>
   *   &lt;datalist id="items">
   *     &lt;option value="option 1">option 1&lt;/option>
   *     &lt;option value="option 2">option 2&lt;/option>
   *     &lt;option value="option 3">option 3&lt;/option>
   *     &lt;option value="option 4">option 4&lt;/option>
   *   &lt;/datalist>
   * </code></pre>
   *
   * <h3 id="keyboard-section">
   *   Keyboard interaction
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
   * </h3>
   *
   * <p>
   * <h5>When the focus is in the input element</h5>
   * </p>
   *
   * <table class="keyboard-table">
   *   <thead>
   *     <tr>
   *       <th>Key</th>
   *       <th>Use</th>
   *     </tr>
   *   </thead>
   *   <tbody>
   *     <tr>
   *       <td><kbd>Enter</kbd></td>
   *       <td> Select the highlighted choice.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>Tab</kbd></td>
   *       <td> Select the highlighted choice.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>UpArrow or DownArrow</kbd></td>
   *       <td> Highlight the option item on the drop down list in the direction of the arrow.
   *         If the drop down is not open, expand the drop down list.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>LeftArrow or RightArrow</kbd></td>
   *       <td> Move focus to the previous or next selected item in Multi-select Combobox.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>Esc</kbd></td>
   *       <td> Collapse the drop down list. If the drop down is already closed, do nothing.</td>
   *     </tr>
   *
   *   </tbody>
   *  </table>
   *
   * <p>Disabled option items receive no highlight and are not selectable.
   *
   *
   * <h3 id="rtl-section">
   *   Reading direction
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
   * </h3>
   *
   * <p>As with any JET component, in the unusual case that the directionality (LTR or RTL) changes post-init, the Combobox must be <code class="prettyprint">refresh()</code>ed.
   *
   *
   * <h3 id="pseudos-section">
   *   Pseudo-selectors
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
   * </h3>
   *
   * <p>The <code class="prettyprint">:oj-combobox</code> pseudo-selector can be used in jQuery expressions to select JET Combobox.  For example:
   *
   * <pre class="prettyprint">
   * <code>$( ":oj-combobox" ) // selects all JET Combobox on the page
   * $myEventTarget.closest( ":oj-combobox" ) // selects the closest ancestor that is a JET Combobox
   * </code></pre>
   *
   *
   * <h3 id="jqui2jet-section">
   *   JET for jQuery UI developers
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
   * </h3>
   *
   * <p>Event names for all JET components are prefixed with "oj", instead of component-specific prefixes like "Combobox".
   *
   * @desc Creates a JET Combobox.
   * @example <caption>Initialize the Combobox with no options specified:</caption>
   * $( ".selector" ).ojCombobox();
   *
   * @example <caption>Initialize the Combobox with some options:</caption>
   * $( ".selector" ).ojCombobox( { "multiple": true, "placeholder": "Select multiple values." } );
   *
   * @example <caption>Initialize the Combobox via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
   * &lt;div id="combobox" data-bind="ojComponent: { component: 'ojCombobox',
   *                                                    multiple: true}">
   */
  oj.__registerWidget("oj.ojCombobox", $['oj']['editableValue'],
  {
    version : "1.0.0",
    defaultElement : "<input>",
    widgetEventPrefix : "oj",
    options :
    {
      /**
       * The placeholder text.
       *
       * @expose
       * @memberof! oj.ojCombobox
       * @instance
       * @type {string}
       *
       * @example <caption>Initialize the combobox with the <code class="prettyprint">placeholder</code> option specified:</caption>
       * $( ".selector" ).ojCombobox( { "placeholder": "Please select ..." } );
       */
      placeholder : "",
      /**
       * If multi-select is enabled for the combobox.
       *
       * @expose
       * @memberof! oj.ojCombobox
       * @instance
       * @type {boolean}
       * @default <code class="prettyprint">false</code>
       *
       * @example <caption>Initialize the Combobox with the <code class="prettyprint">multiple</code> option specified:</caption>
       * $( ".selector" ).ojCombobox( { "multiple": true } );
       */
      multiple : false,
      /**
       * The data for the Combobox. Instead of providing the option items in a datalist, the data can be specified as an array of objects containing id and text.
       * The id is used as the value of the option item and text as the label.
       *
       * @expose
       * @memberof! oj.ojCombobox
       * @instance
       * @type {Array}
       *
       * @example <caption>Initialize the Combobox with the <code class="prettyprint">data</code> option specified:</caption>
       * $( ".selector" ).ojCombobox( { "data": [{id: 'option1', text: 'option1'}, {id: 'option2', text: 'option2'}, {id: 'option3', text: 'option3'},] } );
       */
      data : null,
      /**
       * Triggered after the Combobox drop down has been expanded.
       *
       * @expose
       * @event
       * @memberof! oj.ojCombobox
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       *
       * @example <caption>Initialize the Combobox with the <code class="prettyprint">expand</code> callback specified:</caption>
       * $( ".selector" ).ojCombobox({
       *     "expand": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojexpand</code> event:</caption>
       * $( ".selector" ).on( "ojexpand", function( event, ui ) {} );
       */
      expand : null

    },

    /**
     * Returns a jQuery object containing the element visually representing the combobox.
     *
     * <p>This method does not accept any arguments.
     *
     * @expose
     * @memberof! oj.ojCombobox
     * @instance
     * @return {jQuery} the combobox
     */
    widget : function ()
    {
      return this.combobox.container;
    },

    /**
     * @override
     * @private
     */
    _ComponentCreate : function ()
    {
      this._super();
      this._setup();
    },

    _setup : function ()
    {
      var opts,
      multiple = this.options.multiple;
      opts = {};
      opts.element = this.element;
      opts.ojContext = this;
      opts = $.extend(this.options, opts);

      this.combobox = multiple ? new _OjMultiCombobox() : new _OjSingleCombobox();

      this.combobox._init(opts);
    },

    /**
     * @override
     * @private
     */
    _destroy : function ()
    {
      this.combobox._destroy();
    },
    
    /**
     * Refreshes the combobox.
     *
     * <p>This method does not accept any arguments.
     * 
     * @expose 
     * @memberof! oj.ojCombobox
     * @instance
     */
    refresh : function ()
    {
      this._super();

      this.combobox._destroy();
      this._setup();
    },

    /**
     * Expands the drop down list.
     *
     * This method does not accept any arguments.
     *
     * @expose
     * @memberof! oj.ojCombobox
     * @instance
     */
    expand : function (event)
    {
      this.combobox.open();
      this._trigger("ojexpand", event);
    },

    /**
     * Collapses the drop down list.
     *
     * This method does not accept any arguments.
     *
     * @expose
     * @memberof! oj.ojCombobox
     * @instance
     */
    collapse : function ()
    {
      this.combobox.close();
    },

    /**
     * Handles options specific to combobox.
     * @override
     * @protected
     * @memberof! oj.ojCombobox
     */
    _setOption : function (key, value)
    {
      this._super(key, value);

      if (key === "disabled")
      {
        if (value)
          this.combobox._disable();
        else
          this.combobox._enable();
      }
      else if (key === "value")
      {
        this.combobox._initSelection();
      }
    },

    /**
     * Returns the messaging launcher element
     *
     * @override
     * @protected
     * @memberof! oj.ojCombobox
     */
    _GetMessagingLauncherElement : function ()
    {
      return this.combobox.container;
    },
    
    /**
     * Returns the default styleclass for the component.
     * 
     * @return {string}
     * @expose
     * @memberof! oj.ojCombobox
     * @override
     * @protected
     */
    _GetDefaultStyleClass : function ()
    {
    return "oj-combobox";
    },
    
    /**
     * Return the subcomponent node represented by the documented locator 
     * attribute values.
     * Test authors should target sub elements using the following names:
     * <ul>
     * <li><b>oj-combobox-input</b>: the input field </li>
     * <li><b>oj-combobox-arrow</b>: the drop down arrow for single-select combobox </li>
     * <li><b>oj-combobox-drop</b>: the drop down box </li>
     * <li><b>oj-combobox-results</b>: the filtered result list </li>
     * </ul>
     * @expose
     * @memberof! oj.ojCombobox
     * @instance
     * @override
     * @param {Object} locator An Object containing at minimum a subId property 
     *        whose value is a string, documented by the component, that allows 
     *        the component to look up the subcomponent associated with that 
     *        string.  It contains:<p>
     *        component: optional - in the future there may be more than one 
     *        component contained within a page element<p>
     *        subId: the string, documented by the component, that the component 
     *        expects in getNodeBySubId to locate a particular subcomponent
     * @returns {Element|null} the subcomponent located by the subId string passed
     *          in locator, if found.<p>
     */
    getNodeBySubId: function(locator)
    {
	    if (locator == null)
	    {
        return this.combobox.container ? this.combobox.container[0] : null;
	    }
	    
	    var subId = locator['subId'];
      if (subId == "oj-combobox-drop")
        subId = "oj-listbox-drop";

      if (subId == "oj-combobox-results")
        subId = "oj-listbox-results";

      switch (subId)
      {
        case "oj-combobox-input":
        case "oj-combobox-arrow":
        case "oj-listbox-drop":
        case "oj-listbox-results":
          return this.widget().find(subId)[0];
          break;

	    }

	    // Non-null locators have to be handled by the component subclasses
	    return null;
    }

  }
  );


  /**
   * @class
   * @name oj.ojSelect
   * @augments oj.editableValue
   *
   * @classdesc
   * <h3 id="selectOverview-section">
   *   JET Select Component
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#selectOverview-section"></a>
   * </h3>
   *
   * <p>Description: JET Select enhances a html select and option elements into a Select that supports
   * single-select and search filtering. Note: the 'multiple' option is not supported in V1.
   *
   * <p>A JET Select can be created with the following markup. By default, it creates a single-select
   * Select. 
   *
   * <pre class="prettyprint">
   * <code>
   * &lt;select data-bind="ojComponent: {component: 'ojSelect'}">
   *     &lt;option value="option 1">option 1&lt;/option>
   *     &lt;option value="option 2">option 2&lt;/option>
   *     &lt;option value="option 3">option 3&lt;/option>
   *     &lt;option value="option 4">option 4&lt;/option>
   * &lt;/select>
   * </code></pre>
   *
   * <h3 id="keyboard-section">
   *   Keyboard interaction
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
   * </h3>
   *
   * <p>
   * <h5>When the focus is in the select element</h5>
   * </p>
   *
   * <table class="keyboard-table">
   *   <thead>
   *     <tr>
   *       <th>Key</th>
   *       <th>Use</th>
   *     </tr>
   *   </thead>
   *   <tbody>
   *     <tr>
   *       <td><kbd>Enter</kbd></td>
   *       <td> Select the highlighted choice.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>Tab</kbd></td>
   *       <td> Select the highlighted choice.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>UpArrow or DownArrow</kbd></td>
   *       <td> Highlight the option item on the drop down list in the direction of the arrow.
   *         If the drop down is not open, expand the drop down list.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>Esc</kbd></td>
   *       <td> Collapse the drop down list. If the drop down is already closed, do nothing.</td>
   *     </tr>
   *
   *   </tbody>
   *  </table>
   *
   * <p>Disabled option items receive no highlight and are not selectable.
   *
   *
   * <h3 id="rtl-section">
   *   Reading direction
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
   * </h3>
   *
   * <p>As with any JET component, in the unusual case that the directionality (LTR or RTL) changes post-init, the Select must be <code class="prettyprint">refresh()</code>ed.
   *
   *
   * <h3 id="pseudos-section">
   *   Pseudo-selectors
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
   * </h3>
   *
   * <p>The <code class="prettyprint">:oj-select</code> pseudo-selector can be used in jQuery expressions to select JET Select.  For example:
   *
   * <pre class="prettyprint">
   * <code>$( ":oj-select" ) // selects all JET Select on the page
   * $myEventTarget.closest( ":oj-select" ) // selects the closest ancestor that is a JET Select
   * </code></pre>
   *
   *
   * <h3 id="jqui2jet-section">
   *   JET for jQuery UI developers
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
   * </h3>
   *
   * <p>Event names for all JET components are prefixed with "oj", instead of component-specific prefixes like "Select".
   *
   * @desc Creates a JET Select.
   * @example <caption>Initialize the Select with no options specified:</caption>
   * $( ".selector" ).ojSelect();
   *
   * @example <caption>Initialize the Select with some options:</caption>
   * $( ".selector" ).ojSelect( { "placeholder": "Select a value." } );
   *
   * @example <caption>Initialize the Select via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
   * &lt;div id="select" data-bind="ojComponent: { component: 'ojSelect' }">
   */
  oj.__registerWidget("oj.ojSelect", $['oj']['editableValue'],
  {
    version : "1.0.0",
    defaultElement : "<select>",
    widgetEventPrefix : "oj",
    options :
    {
      /**
       * The threshold for showing the search box in the dropdown when it's expanded.
       * The search box is always displayed when the results size is greater than
       * the threshold, otherwise the search box is initially turned off.
       * However, the search box is displayed as soon as the user starts typing.
       * This property only applies to single-select.
       *
       * @expose
       * @memberof! oj.ojSelect
       * @instance
       * @type {number}
       * @default <code class="prettyprint">10</code>
       */
      minimumResultsForSearch : 10,
      /**
       * The placeholder text. When placeholder is used for a single value select,
       * it requires that you include an empty <option></option> tag as your first option.
       *
       * @expose
       * @memberof! oj.ojSelect
       * @instance
       * @type {string}
       *
       * @example <caption>Initialize the select with the <code class="prettyprint">placeholder</code> option specified:</caption>
       * $( ".selector" ).ojSelect( { "placeholder": "Please select ..." } );
       */
      placeholder : "",
      /**
       * If multi-select is enabled for the select.
       *
       * @expose
       * @memberof! oj.ojSelect
       * @instance
       * @type {boolean}
       * @default <code class="prettyprint">false</code>
       *
       * @example <caption>Initialize the Select with the <code class="prettyprint">multiple</code> option specified:</caption>
       * $( ".selector" ).ojSelect( { "multiple": true } );

      multiple: false,
       */

      /**
       * The data for the Select. Instead of providing a list of option items, the data can be specified as an array of objects containing id and text.
       * The id is used as the value of the option item and text as the label.
       *
       * @expose
       * @memberof! oj.ojSelect
       * @instance
       * @type {Array}
       *
       * @example <caption>Initialize the Select with the <code class="prettyprint">data</code> option specified:</caption>
       * $( ".selector" ).ojSelect( { "data": [{id: 'option1', text: 'option1'}, {id: 'option2', text: 'option2'}, {id: 'option3', text: 'option3'},] } );
       */
      data : null,
      /**
       * Triggered after the Select drop down has been expanded.
       *
       * @expose
       * @event
       * @memberof! oj.ojSelect
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       *
       * @example <caption>Initialize the Select with the <code class="prettyprint">expand</code> callback specified:</caption>
       * $( ".selector" ).ojSelect({
       *     "expand": function( event ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojexpand</code> event:</caption>
       * $( ".selector" ).on( "ojexpand", function( event ) {} );
       */
      expand : null

    },

    /**
     * Returns a jQuery object containing the element visually representing the select.
     *
     * <p>This method does not accept any arguments.
     *
     * @expose
     * @memberof! oj.ojSelect
     * @instance
     * @return {jQuery} the select
     */
    widget : function ()
    {
      return this.select.container;
    },

    /**
     * @override
     * @private
     */
    _ComponentCreate : function ()
    {
      this._setup();
      this._super();
    },

    _setup : function ()
    {
      var opts = {};
      opts.element = this.element;
      opts.ojContext = this;
      opts = $.extend(this.options, opts);

      this.select = new _OjSingleSelect();

      this.select._init(opts);
    },

    /**
     * Refreshes the visual state of the tabs. JET components require a <code class="prettyprint">refresh()</code> or re-init after the DOM is programmatically changed underneath the component.
     *
     * <p>This method does not accept any arguments.
     * 
     * @expose 
     * @memberof! oj.ojSelect
     * @instance
     */
    refresh : function ()
    {
      this._super();

      this.select._destroy();
      this._setup();
      //TODO: apply value in options for the selected value
    },

    /**
     * @override
     * @private
     */
    _destroy : function ()
    {
      this.select._destroy();
    },

    /**
     * Expands the drop down list.
     *
     * This method does not accept any arguments.
     *
     * @expose
     * @memberof! oj.ojSelect
     * @instance
     */
    expand : function ()
    {
      this.select.open();
    },

    /**
     * Collapses the drop down list.
     *
     * This method does not accept any arguments.
     *
     * @expose
     * @memberof! oj.ojSelect
     * @instance
     */
    collapse : function ()
    {
      this.select.close();
    },

    /**
     * Sets the placeholder text on the content element by default. It sets the placeholder attribute
     * on the element. Component subclasses can override this method to control where placeholder text
     * gets set.
     * @param {string} value
     * @expose
     * @memberof! oj.ojSelect
     * @instance
     * @override
     */
    _SetPlaceholder : function(value)
    {
      this._super(value);
      this.select.opts.placeholder = value;
      this.select._setPlaceholder();
    },
    
    /**
     * Handles options specific to select.
     * @override
     * @protected
     * @memberof! oj.ojSelect
     */
    _setOption : function (key, value)
    {
      this._super(key, value);

      if (key === "disabled")
      {
        if (value)
          this.select._disable();
        else
          this.select._enable();
      }
      else if (key === "data")
      {
        this._setup();
      }
      else if (key === "value")
      {
        // [pavitra] don't call setVal() here for the following reasons - 
        // 1. when _setOption() is called for the key === 'value', the value has already been 
        // written into the component option. So calling this.select.setVal() is incorrect because 
        // it ends up calling EditableValue._SetValue(). 
        // 2. EditableValue._SetValue is really intended to be called only when user interacts with 
        // your component and as a result you need to run converters and validators on the 
        // value. There are ways to call _SetValue() so it runs in restricted mode. See JSDocs.
        // 
        // 3. _setOption() method is called when the component value is updated programmatically. In 
        // those cases you don't want to run validations by calling _SetValue.
        this.select._initSelection();
      }

    },

    /**
     * Return the subcomponent node represented by the documented locator 
     * attribute values.
     * Test authors should target sub elements using the following names:
     * <ul>
     * <li><b>oj-select-chosen</b>: the selected text in the select box</li>
     * <li><b>oj-select-search</b>: the search box. Note the searchbox is not always visible</li>
     * <li><b>oj-select-drop</b>: the drop down box </li>
     * <li><b>oj-select-results</b>: the filtered result list </li>
     * </ul>
     * @expose
     * @memberof! oj.ojSelect
     * @instance
     * @override
     * @param {Object} locator An Object containing at minimum a subId property 
     *        whose value is a string, documented by the component, that allows 
     *        the component to look up the subcomponent associated with that 
     *        string.  It contains:<p>
     *        component: optional - in the future there may be more than one 
     *        component contained within a page element<p>
     *        subId: the string, documented by the component, that the component 
     *        expects in getNodeBySubId to locate a particular subcomponent
     * @returns {Element|null} the subcomponent located by the subId string passed
     *          in locator, if found.<p>
     */
    getNodeBySubId: function(locator)
    {
      if (locator == null)
      {
        return this.select.container ? this.select.container[0] : null;
      }
      
      var subId = locator['subId'];
      if (subId == "oj-select-drop")
        subId = "oj-listbox-drop";

      if (subId == "oj-select-results")
        subId = "oj-listbox-results";

      switch (subId) {
      case "oj-select-chosen":
      case "oj-select-search":
      case "oj-listbox-drop":
      case "oj-listbox-results":
        return this.widget().find("." + subId)[0];
      }
      
      // Non-null locators have to be handled by the component subclasses
      return null;
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
     * @expose
     * @memberof! oj.ojSelect
     * @override
     * @protected
     */
    _GetDefaultStyleClass : function ()
    {
      return "oj-select";
    },

    /**
     * Returns the messaging launcher element
     *
     * @override
     * @protected
     * @memberof! oj.ojSelect
     */
    _GetMessagingLauncherElement : function ()
    {
      return this.select.container;
    }

  }
  );


  var _OjMultiCombobox = _ComboUtils.clazz(_AbstractOjChoice,
    {
      _elemNm : "ojcombobox",
      _classNm : "oj-combobox",

      _createContainer : function ()
      {
        var container = $(document.createElement("div")).attr(
          {
            "class" : "oj-combobox oj-combobox-multi oj-component"
          }
          ).html([
              "<ul class='oj-combobox-choices'>",
              "  <li class='oj-combobox-search-field'>",
              "    <input type='text' role='combobox' aria-expanded='false' aria-autocomplete='list' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='oj-combobox-input'>",
              "  </li>",
              "</ul>",
              "<div class='oj-combobox-description oj-helper-hidden-accessible'/>",
              "<div class='oj-listbox-drop oj-listbox-drop-multi oj-combobox-display-none'>",
              "   <ul class='oj-listbox-results' role='listbox'>",
              "   </ul>",
              "</div>"].join(""));
        return container;
      },
      _prepareOpts : function ()
      {
        var opts = _OjMultiCombobox.superclass._prepareOpts.apply(this, arguments),
        self = this;

        if (opts.element.get(0).tagName.toLowerCase() === "input" && opts.element.prop("list"))
        {
          // install the selection initializer
          opts.initSelection = function (element, callback)
          {
            var data = [];
            if (opts.element.val())
            {
              var selected;
              var ids = _ComboUtils.splitVal(opts.element.val(), opts.separator);
              for (var i = 0; i < ids.length; i++)
              {
                var id = ids[i];
                selected = element.find("option").filter(function ()
                  {
                    return this.value === id;
                  }
                  );
                data.push(self._optionToData(selected));
              }
            }
            else
            {
              var selected;
              selected = element.find("option").filter(function ()
                {
                  return this.selected
                }
                );
              _ComboUtils.each2(selected, function (i, elm)
              {
                data.push(self._optionToData(elm));
              }
              );
            }
            callback(data);
          };
        }
        else if ("data" in opts)
        {
          // install default initSelection when applied to hidden input and data is local
          opts.initSelection = opts.initSelection || function (element, callback)
          {
            var ids = _ComboUtils.splitVal(element.val(), opts.separator);
            //search in data by array of ids, storing matching items in a list
            var matches = [];
            opts.query(
            {
              matcher : function (term, text, el)
              {
                var is_match = $.grep(ids, function (id)
                  {
                    return id === opts.id(el);
                  }
                  ).length;
                if (is_match)
                {
                  matches.push(el);
                }
                return is_match;
              },
              callback : !$.isFunction(callback) ? $.noop : function ()
              {
                // reorder matches based on the order they appear in the ids array because right now
                // they are in the order in which they appear in data array
                var ordered = [];
                for (var i = 0; i < ids.length; i++)
                {
                  var id = ids[i];
                  for (var j = 0; j < matches.length; j++)
                  {
                    var match = matches[j];
                    if (id === opts.id(match))
                    {
                      ordered.push(match);
                      matches.splice(j, 1);
                      break;
                    }
                  }
                }
                callback(ordered);
              }
            }
            );
          };
        }
        return opts;
      },
      _selectChoice : function (choice)
      {
        var selected = this.container.find("." + this._classNm + "-search-choice-focus");
        if (selected.length && choice && choice[0] == selected[0])
        {}

        else
        {
          if (selected.length)
          {
            this.opts.element.trigger("choice-deselected", selected);
          }
          selected.removeClass(this._classNm + "-search-choice-focus");
          if (choice && choice.length)
          {
            this.close();
            choice.addClass(this._classNm + "-search-choice-focus");
            this.container.find(".oj-combobox-description").html(choice.attr("valueText") + ". Press back space to delete.")
            .attr("aria-live", "assertive");
            this.opts.element.trigger("choice-selected", choice);
          }
        }
      },
      _destroy : function ()
      {
        $("label[for='" + this.search.attr('id') + "']")
        .attr('for', this.opts.element.attr("id"));
        _OjMultiCombobox.superclass._destroy.apply(this, arguments);
      },

      _initContainer : function ()
      {
        var selector = "." + this._classNm + "-choices",
        selection,
        idSuffix = _ComboUtils.nextUid(),
        elementLabel;

        this.searchContainer = this.container.find("." + this._classNm + "-search-field");
        this.selection = selection = this.container.find(selector);

        var _this = this;
        this.selection.on("click", "." + this._classNm + "-search-choice:not(." + this._classNm + "-locked)", function (e)
        {
          _this.search[0].focus(); //Fixed??
          _this._selectChoice($(this));
        }
        );

        elementLabel = $("label[for='" + this.opts.element.attr("id") + "']");
        if (!elementLabel.attr("id"))
          elementLabel.attr('id', this._classNm + "-label-" + idSuffix);

        // add aria associations
        this.results.attr("id", "oj-listbox-results-" + idSuffix);
        this.search.attr("aria-owns", "oj-listbox-results-" + idSuffix);
        this.search.attr("aria-labelledby", elementLabel.attr("id"));

        this.search.on("input paste", this._bind(function ()
          {
            if (!this._isInterfaceEnabled())
              return;
            if (!this._opened())
            {
              this.open();
            }
          }
          ));

        this.search.attr("tabindex", this.elementTabIndex);
        this.keydowns = 0;
        this.search.on("keydown", this._bind(function (e)
          {
            if (!this._isInterfaceEnabled())
              return;

            ++this.keydowns;
            var selected = selection.find("." + this._classNm + "-search-choice-focus");
            var prev = selected.prev("." + this._classNm + "-search-choice:not(." + this._classNm + "-locked)");
            var next = selected.next("." + this._classNm + "-search-choice:not(." + this._classNm + "-locked)");
            var pos = _ComboUtils.getCursorInfo(this.search);

            if (selected.length &&
              (e.which == _ComboUtils.KEY.LEFT || e.which == _ComboUtils.KEY.RIGHT || e.which == _ComboUtils.KEY.BACKSPACE || e.which == _ComboUtils.KEY.DELETE || e.which == _ComboUtils.KEY.ENTER))
            {
              var selectedChoice = selected;
              if (e.which == _ComboUtils.KEY.LEFT && prev.length)
              {
                selectedChoice = prev;
              }
              else if (e.which == _ComboUtils.KEY.RIGHT)
              {
                selectedChoice = next.length ? next : null;
              }
              else if (e.which === _ComboUtils.KEY.BACKSPACE)
              {
                this._unselect(selected.first());
                this.search.width(10);
                selectedChoice = prev.length ? prev : next;
              }
              else if (e.which == _ComboUtils.KEY.DELETE)
              {
                this._unselect(selected.first());
                this.search.width(10);
                selectedChoice = next.length ? next : null;
              }
              else if (e.which == _ComboUtils.KEY.ENTER)
              {
                selectedChoice = null;
              }

              this._selectChoice(selectedChoice);
              _ComboUtils.killEvent(e);
              if (!selectedChoice || !selectedChoice.length)
              {
                this.open();
              }
              return;
            }
            else if (((e.which === _ComboUtils.KEY.BACKSPACE && this.keydowns == 1)
                 || e.which == _ComboUtils.KEY.LEFT) && (pos.offset == 0 && !pos.length))
            {
              this._selectChoice(selection.find("." + this._classNm + "-search-choice:not(." + this._classNm + "-locked)").last());
              _ComboUtils.killEvent(e);
              return;
            }
            else
            {
              this._selectChoice(null);
            }

            if (this._opened())
            {
              switch (e.which)
              {
              case _ComboUtils.KEY.UP:
              case _ComboUtils.KEY.DOWN:
                this._moveHighlight((e.which === _ComboUtils.KEY.UP) ? -1 : 1);
                _ComboUtils.killEvent(e);
                return;
              case _ComboUtils.KEY.ENTER:
                this._selectHighlighted();
                _ComboUtils.killEvent(e);
                return;
              case _ComboUtils.KEY.TAB:
                this._selectHighlighted(
                {
                  noFocus : true
                }
                );
                this.close();
                return;
              case _ComboUtils.KEY.ESC:
                this._cancel(e);
                _ComboUtils.killEvent(e);
                return;
              }
            }

            if (e.which === _ComboUtils.KEY.TAB || _ComboUtils.KEY.isControl(e) || _ComboUtils.KEY.isFunctionKey(e)
               || e.which === _ComboUtils.KEY.BACKSPACE || e.which === _ComboUtils.KEY.ESC)
            {
              return;
            }

            if (e.which === _ComboUtils.KEY.ENTER)
            {
              if (this.opts.openOnEnter === false)
              {
                return;
              }
              else if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey)
              {
                return;
              }
            }

            this.open();

            if (e.which === _ComboUtils.KEY.PAGE_UP || e.which === _ComboUtils.KEY.PAGE_DOWN)
            {
              // prevent the page from scrolling
              _ComboUtils.killEvent(e);
            }

            if (e.which === _ComboUtils.KEY.ENTER)
            {
              // prevent form from being submitted
              _ComboUtils.killEvent(e);
            }

          }
          ));

        this.search.on("keyup", this._bind(function (e)
          {
            this.keydowns = 0;
            this._resizeSearch();
          }
          ));

        this.search.on("blur", this._bind(function (e)
          {
            this.search.removeClass(this._classNm + "-focused");
            this._selectChoice(null);
            if (!this._opened())
              this._clearSearch();
            e.stopImmediatePropagation();
          }
          ));

        this.container.on("click", selector, this._bind(function (e)
          {
            if (!this._isInterfaceEnabled())
              return;
            if ($(e.target).closest("." + this._classNm + "-search-choice").length > 0)
            {
              // clicked inside a oj-combobox search choice, do not open
              return;
            }
            this._selectChoice(null);
            this._clearPlaceholder();
            this.open();
            this._focusSearch();
            e.preventDefault();
          }
          ));

        this.container.on("focus", selector, this._bind(function ()
          {
            if (!this._isInterfaceEnabled())
              return;
            this._clearPlaceholder();
          }
          ));

        this._initContainerWidth();
        this.opts.element.addClass(this._classNm + "-offscreen");

        // set the placeholder if necessary
        this._clearSearch();
      },
      _enableInterface : function ()
      {
        if (_OjMultiCombobox.superclass._enableInterface.apply(this, arguments))
        {
          this.search.prop("disabled", !this._isInterfaceEnabled());
        }
      },
      _initSelection : function ()
      {
        var data;
        if (this.opts.element.val() === "" && this.opts.element.text() === "")
        {
          this._updateSelection([]);
          this.close();
          // set the placeholder if necessary
          this._clearSearch();
        }
        if (this.datalist || this.opts.element.val() !== "")
        {
          var self = this,
          element;
          if (this.datalist)
            element = this.datalist;
          else
            element = this.opts.element;
          this.opts.initSelection.call(null, element, function (data)
          {
            if (data !== undefined && data !== null)
            {
              self._updateSelection(data);
              self.close();
              // set the placeholder if necessary
              self._clearSearch();
            }
          }
          );
        }
      },
      _clearSearch : function ()
      {
        var placeholder = this._getPlaceholder(),
        maxWidth = this._getMaxSearchWidth();

        if (placeholder !== undefined && (!this.getVal() || this.getVal().length === 0))
        {
          this.search.val(placeholder).addClass(this._classNm + "-default");
          // stretch the search box to full width of the container so as much of the placeholder is visible as possible
          // we could call this._resizeSearch(), but we do not because that requires a sizer and we do not want to create one so early because of a firefox bug, see #944
          this.search.width(maxWidth > 0 ? maxWidth : this.container.css("width"));
        }
        else
        {
          this.search.val("").width(10);
        }
      },
      _clearPlaceholder : function ()
      {
        if (this.search.hasClass(this._classNm + "-default"))
        {
          this.search.val("").removeClass(this._classNm + "-default");
        }
      },
      _opening : function (event)
      {
        this._resizeSearch();
        _OjMultiCombobox.superclass._opening.apply(this, arguments);
        this._focusSearch();
        this._updateResults(true);
        this.search.focus();
        this.opts.element.trigger($.Event("ojexpand"));
      },
      close : function ()
      {
        if (!this._opened())
          return;
        this._clearSearch();
        _OjMultiCombobox.superclass.close.apply(this, arguments);
      },
      _focus : function ()
      {
        this.close();
        this.search.focus();
      },
      _updateSelection : function (data)
      {
        var ids = [],
        filtered = [],
        self = this;

        // filter out duplicates
        $(data).each(function ()
        {
          if (ids.indexOf(self.id(this)) < 0)
          {
            ids.push(self.id(this));
            filtered.push(this);
          }
        }
        );
        data = filtered;
        this.selection.find("." + this._classNm + "-search-choice").remove();
        $(data).each(function ()
        {
          self._addSelectedChoice(this);
        }
        );
        self._postprocessResults();
      },
      _onSelect : function (data, options)
      {
        if (!this._triggerSelect(data))
        {
          return;
        }
        this._addSelectedChoice(data);
        if (this.select || !this.opts.closeOnSelect)
          this._postprocessResults(data, false, this.opts.closeOnSelect === true);
        if (this.opts.closeOnSelect)
        {
          this.close();
          this.search.width(10);
        }
        else
        {
          if (this._findHighlightableChoices().length > 0)
          {
            this._clearSearch();
            this.search.width(10);
            this._resizeSearch();
            this._positionDropdown();
          }
          else
          {
            // if nothing left to select close
            this.close();
            this.search.width(10);
          }
        }
        // since its not possible to select an element that has already been
        // added we do not need to check if this is a new element before firing change
        this._triggerChange();

        if (!options || !options.noFocus)
          this._focusSearch();
      },
      _cancel : function ()
      {
        this.close();
        this._focusSearch();
      },
      _addSelectedChoice : function (data)
      {
        var enableChoice = !data.locked,
        enabledItem = $(
            "<li class='" + this._classNm + "-search-choice'>" +
            "    <div></div>" +
            "    <a href='#' onclick='return false;' class='" + this._classNm + "-search-choice-close' tabindex='-1'></a>" +
            "</li>"),
        disabledItem = $(
            //"<li class='oj-combobox-search-choice oj-combobox-locked'>" +
            "<li class='" + this._classNm + "-search-choice " + this._classNm + "-locked'>" +
            "<div></div>" +
            "</li>");
        var choice = enableChoice ? enabledItem : disabledItem,
        id = this.id(data),
        val = this.getVal(),
        formatted;

        formatted = this.opts.formatSelection(data, choice.find("div"), this.opts.escapeMarkup);
        if (formatted !== undefined)
        {
          choice.find("div").replaceWith("<div>" + formatted + "</div>");
          choice.attr("valueText", formatted);
        }
        if (enableChoice)
        {
          choice.find("." + this._classNm + "-search-choice-close")
          .on("mousedown", _ComboUtils.killEvent)
          .on("click dblclick", this._bind(function (e)
            {
              if (!this._isInterfaceEnabled())
                return;

              $(e.target).closest("." + this._classNm + "-search-choice").fadeOut('fast', this._bind(function ()
                {
                  this._unselect($(e.target));
                  this.selection.find("." + this._classNm + "-search-choice-focus").removeClass(this._classNm + "-search-choice-focus");
                  this.close();
                  this._focusSearch();
                }
                )).dequeue();
              _ComboUtils.killEvent(e);
            }
            ));
        }
        choice.data(this._elemNm, data);
        choice.insertBefore(this.searchContainer);
        $(data).each(function ()
        {
          if (val.indexOf(id) < 0)
          {
            val.push(id);
          }
        }
        );
        this.setVal(val);
      },
      _unselect : function (selected)
      {
        var val = this.getVal(),
        data,
        index;
        selected = selected.closest("." + this._classNm + "-search-choice");
        if (selected.length === 0)
        {
//TODO: translation string
          throw "Invalid argument: " + selected + ". Must be ." + this._classNm + "-search-choice";
        }
        data = selected.data(this._elemNm);
        if (!data)
        {
          // prevent a race condition when the 'x' is clicked really fast repeatedly the event can be queued
          // and invoked on an element already removed
          return;
        }
        while ((index = val.indexOf(this.id(data))) >= 0)
        {
          val.splice(index, 1);
          this.setVal(val);
          if (this.select)
            this._postprocessResults();
        }
        selected.remove();
        this._triggerChange();
      },
      _postprocessResults : function (data, initial, noHighlightUpdate)
      {
        var val = this.getVal(),
        choices = this.results.find(".oj-listbox-result"),
        compound = this.results.find(".oj-listbox-result-with-children"),
        self = this;

        _ComboUtils.each2(choices, function (i, choice)
        {
          var id = self.id(choice.data(self._elemNm));
          if (val.indexOf(id) >= 0)
          {
            choice.addClass("oj-listbox-selected");
            // mark all children of the selected parent as selected
            choice.find(".oj-listbox-result-selectable").addClass("oj-listbox-selected");
          }
        }
        );
        _ComboUtils.each2(compound, function (i, choice)
        {
          // hide an optgroup if it doesnt have any selectable children
          if (!choice.is(".oj-listbox-result-selectable")
             && choice.find(".oj-listbox-result-selectable:not(.oj-listbox-selected)").length === 0)
          {
            choice.addClass("oj-listbox-selected");
          }
        }
        );
        if (this._highlight() == -1 && noHighlightUpdate !== false)
        {
          self._highlight(0);
        }
        //If all results are chosen render formatNoMAtches
        if (!this.opts.manageNewEntry && 
            !choices.filter('.oj-listbox-result:not(.oj-listbox-selected)').length > 0)
        {
          if (!data || data && !data.more && this.results.find(".oj-listbox-no-results").length === 0)
          {
            if (_ComboUtils.checkFormatter(self.ojContext, self.opts.formatNoMatches, "formatNoMatches"))
            {
              this.results.append("<li class='oj-listbox-no-results'>" +
                                  self.opts.formatNoMatches(self.ojContext, self.search.val()) + "</li>");
            }
          }
        }
      },
      _getMaxSearchWidth : function ()
      {
        return this.selection.width() - _ComboUtils.getSideBorderPadding(this.search);
      },
      _resizeSearch : function ()
      {
        var minimumWidth,
        left,
        maxWidth,
        containerLeft,
        searchWidth,
        sideBorderPadding = _ComboUtils.getSideBorderPadding(this.search);

        minimumWidth = this.search.width() + 10;
        left = this.search.offset().left;
        maxWidth = this.selection.width();
        containerLeft = this.selection.offset().left;
        searchWidth = maxWidth - (left - containerLeft) - sideBorderPadding;
        if (searchWidth < minimumWidth)
        {
          searchWidth = maxWidth - sideBorderPadding;
        }
        if (searchWidth < 40)
        {
          searchWidth = maxWidth - sideBorderPadding;
        }
        if (searchWidth <= 0)
        {
          searchWidth = minimumWidth;
        }
        this.search.width(Math.floor(searchWidth));
      },
      
      getVal : function ()
      {
        var val;
        val = this.opts.element.val();
        return _ComboUtils.splitVal(val, this.opts.separator);

      },
      setVal : function (val)
      {
        var unique;
        unique = [];
        
        if (typeof val === "string")
          val = _ComboUtils.splitVal(val, this.opts.separator);
        // filter out duplicates
        $(val).each(function ()
        {
          if (unique.indexOf(this) < 0)
            unique.push(this);
        }
        );

        this.opts.element.val(unique.length === 0 ? "" : unique.join(this.opts.separator));
        this.search.attr("aria-activedescendant", this.opts.element.attr("id"));
      },
      val : function (val)
      {
        var oldData,
        self = this;

        if (arguments.length === 0)
        {
          return this.getVal();
        }
        oldData = this._data();
        if (!oldData.length)
          oldData = [];
        // val is an id. !val is true for [undefined,null,'',0] - 0 is legal
        if (!val && val !== 0)
        {
          this.opts.element.val(null);
          this._updateSelection([]);
          this._clearSearch();
          this._triggerChange();
          return;
        }
        // val is a list of ids
        this.setVal(val);
        if (this.select)
        {
          this.opts.initSelection(this.select, this._bind(this._updateSelection));
          this._triggerChange();
        }
        else
        {
          if (this.opts.initSelection === undefined)
          {
            throw new Error("cannot call val() if initSelection() is not defined");
          }

          this.opts.initSelection(this.opts.element, function (data)
          {
            var ids = $.map(data, self.id);
            self.setVal(ids);
            self._updateSelection(data);
            self._clearSearch();
            self._triggerChange();
          }
          );
        }
        this._clearSearch();
      },
      _data : function (values)
      {
        var self = this,
        ids,
        old;
        if (arguments.length === 0)
        {
          return this.selection
          .find("." + this._classNm + "-search-choice")
          .map(function ()
          {
            return $(this).data(self._elemNm);
          }
          )
          .get();
        }
        else
        {
          old = this._data();
          if (!values)
          {
            values = [];
          }
          ids = $.map(values, function (e)
            {
              return self.opts.id(e);
            }
            );
          this.setVal(ids);
          this._updateSelection(values);
          this._clearSearch();
        }
      }
    }
    );


});
