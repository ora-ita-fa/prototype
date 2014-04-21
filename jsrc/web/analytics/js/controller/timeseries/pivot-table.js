/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['ojs/ojcore', 'knockout', 'jquery', '/analytics/js/common/ita-core.js',
    'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojchart'], function(oj, ko, $, ita) {

    ita.registerTool({
        name: 'pivot-table',
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

            var pivotTemplate;

            function drawDim(xDims, yDims) {
                $(element).empty();
                var $pivotTable = $(pivotTemplate);
                $(element).append($pivotTable);
                
                var xDimsWithComputedSpan = computeSpan(xDims);
                var yDimsWithComputedSpan = computeSpan(yDims);

                var horizontalPaths = cartesianAttrPaths(xDims);
                var verticalPaths = cartesianAttrPaths(yDims);

                var horizontalHeader = toHorizontalHeader(xDimsWithComputedSpan);
                var verticalHeader = toVerticalHeader(yDimsWithComputedSpan);
                ko.applyBindings({
                    xDims: xDims,
                    yDims: yDims,
                    horizontalPaths: horizontalPaths,
                    verticalPaths: verticalPaths,
                    horizontalHeader: horizontalHeader,
                    verticalHeader: verticalHeader,
                    showPaths: showPaths,
                    showHorizontalDim: showHorizontalDim,
                    showVerticalDim: showVerticalDim,
                    handleHorizontalDrop: handleHorizontalDrop,
                    handleVerticalDrop: handleVerticalDrop,
                    // just for test
                    "series": [{name: 'Series 1', items: [110, 55, 36, 22, 32, 39]}, {name: 'Series 2', items: [10, 155, 136, 122, 132, 139]}],
                    "groups": [new Date(2014, 2, 4), new Date(2014, 2, 11), new Date(2014, 2, 18), new Date(2014, 2, 25), new Date(2014, 3, 1), new Date(2014, 3, 8)]
                }, $pivotTable[0]);


                // just for showing the dimension path of a cell.
                function showPaths(x, y) {
                    var hPath = horizontalPaths[x];
                    var yPath = verticalPaths[y];
                    var tips = "";
                    $.each(hPath, function(i, step) {
                        tips += '-->' + step.text;
                    });
                    tips += "<br/>";
                    $.each(yPath, function(i, step) {
                        tips += '-->' + step.text;
                    });
                    $("#pathsConsole").html(tips);
                }

                var isDragging = false;
                $('th').resizable();

                var $draggableHeader = $("#draggableHeader");
                var $dropLine = $("#dropLine");
                var $pivotCorner = $(".pivot-corner");

                var dragFromDim;
                var dragFromX;
                var dropToDim;
                var dropToX;
                var beforeTargetDim;

                $draggableHeader.draggable({
                    cursorAt: {top: -5, left: -5},
                    cursor: 'move',
                    revert: true,
                    start: function() {
                        isDragging = true;
                    },
                    stop: function() {
                        isDragging = false;
                        $dropLine.hide();
                        reorganizeDims();
                        drawDim(xDims, yDims);
                    }
                });

                function showHorizontalDim(obj, event) {
                    if (!isDragging) {
                        var $containerTr = $(event.currentTarget).parent();
                        var $thsInLine = $containerTr.find('th:not(.pivot-corner)');

                        var pos = $thsInLine.offset();
                        var height = $containerTr.height();
                        var width = $(".pivot-vertical-header+:not(th)").prev().outerWidth();

                        dragFromDim = obj.dim;
                        dragFromX = true;
                        $draggableHeader.text(dragFromDim.text);
                        $draggableHeader.css('top', pos.top + 'px').css('left', pos.left - width + 'px')
                                .width(width).height(height).show();
                    }
                }

                function showVerticalDim(obj, event) {
                    if (!isDragging) {
                        var $sender = $(event.currentTarget);

                        var $lastHorizontalHeader = $(".pivot-horizontal-header").parent(":last");
                        var top = $lastHorizontalHeader.offset().top;
                        var left = $sender.offset().left;
                        var width = $sender.outerWidth();
                        var height = $lastHorizontalHeader.outerHeight();

                        dragFromDim = obj.dim;
                        dragFromX = false;
                        $draggableHeader.text(dragFromDim.text);
                        $draggableHeader.css('top', top + 'px').css('left', left + 'px')
                                .width(width).height(height).show();
                    }
                }

                function handleHorizontalDrop(obj, event) {
                    if (isDragging) {
                        var $sender = $(event.currentTarget);

                        var offsetY = event.offsetY;
                        beforeTargetDim = (offsetY < $sender.outerHeight() / 2);

                        var top = $sender.offset().top;
                        var left = $pivotCorner.outerWidth();
                        if (!beforeTargetDim) {
                            top += $sender.outerHeight();
                        }
                        var width = $('.pivot-table').outerWidth() - left;

                        $dropLine.width(width).height(5);
                        $dropLine.css('top', top + 'px').css('left', left + 'px');
                        $dropLine.addClass('h-line').removeClass('v-line').show();

                        dropToDim = obj.dim;
                        dropToX = true;
                    }
                }

                function handleVerticalDrop(obj, event) {
                    if (isDragging) {
                        var $sender = $(event.currentTarget);

                        var offsetX = event.offsetX;
                        beforeTargetDim = (offsetX < $sender.outerWidth() / 2);

                        var top = $pivotCorner.outerHeight();
                        var left = $sender.offset().left;
                        if (!beforeTargetDim) {
                            left += $sender.outerWidth();
                        }
                        var height = $('.pivot-table').height() - top;

                        $dropLine.height(height).width(5);
                        $dropLine.css('top', top + 'px').css('left', left + 'px');
                        $dropLine.addClass('v-line').removeClass('h-line').show();

                        dropToDim = obj.dim;
                        dropToX = false;
                    }
                }

                function findDimIndex(dims, dimToFind) {
                    var index = -1;
                    $.each(dims, function(i, dim) {
                        if (dim.key === dimToFind.key) {
                            index = i;
                            return false;
                        }
                    });
                    return index;
                }

                function reorganizeDims() {
                    console.log(xDims);
                    console.log(yDims);

                    var dimToMove = null;
                    if (dragFromX && dragFromDim) {
                        var dimIndex = findDimIndex(xDims, dragFromDim);
                        dimToMove = xDims.splice(dimIndex, 1)[0];
                    } else if (!dragFromX && dragFromDim) {
                        var dimIndex = findDimIndex(yDims, dragFromDim);
                        dimToMove = yDims.splice(dimIndex, 1)[0];
                    }

                    if (dropToX) {
                        var dimIndex = findDimIndex(xDims, dropToDim);
                        !beforeTargetDim && dimIndex++;
                        xDims.splice(dimIndex, 0, dimToMove);
                    } else {
                        var dimIndex = findDimIndex(yDims, dropToDim);
                        !beforeTargetDim && dimIndex++;
                        yDims.splice(dimIndex, 0, dimToMove);
                    }

                    console.log(xDims);
                    console.log(yDims);
                }
            }

            /**
             * Compute the span (will be used as rowspan or colspan in ko table rendering),
             *   along with the repeated times (dimensions in lower levels need to repeat more).
             * @param {type} dims
             * @returns {unresolved}
             */
            function computeSpan(dims) {
                var attrsRepeat = 1;
                for (var i = 0; i < dims.length; i++) {
                    var dim = dims[i];
                    dim.repeat = attrsRepeat;
                    attrsRepeat *= dim.attrs.length;
                }


                dim.span = 0;
                var spanProduct = dims[dims.length - 1].attrs.length;
                for (var i = dims.length - 2; i >= 0; i--) {
                    var dim = dims[i];
                    dim.span = spanProduct;
                    spanProduct *= dim.attrs.length;
                }

                return dims;
            }

            /**
             * Put the dims to into a two dimension array which stands for
             *   a horizontal header.
             * @param {type} dimsWithComputedSpan
             * @returns {Array}
             */
            function toHorizontalHeader(dimsWithComputedSpan) {
                var table = [];
                for (var i = 0; i < dimsWithComputedSpan.length; i++) {
                    var dim = dimsWithComputedSpan[i];
                    var attrArr = alignDimAttr2Arr(dim);
                    table.push(attrArr);
                }
                return table;
            }

            /**
             * Put the dims to into a two dimension array which stands for
             *   a vertical header.
             * @param {type} dimsWithComputedSpan
             * @returns {Array}
             */
            function toVerticalHeader(dimsWithComputedSpan) {
                var table = null;
                for (var i = 0; i < dimsWithComputedSpan.length; i++) {
                    var dim = dimsWithComputedSpan[i];
                    var attrArr = alignDimAttr2Arr(dim);

                    // vertical headers need a row -> column tranfer
                    for (var j = 0; j < attrArr.length; j++) {
                        if (!table) {
                            table = new Array(attrArr.length);
                        }
                        if (!table[j]) {
                            table[j] = new Array(dimsWithComputedSpan.length);
                        }
                        table[j][i] = attrArr[j];
                    }
                }
                return table;
            }

            /**
             * Put the attrs of the dim into an array. Write the copies of the attrs,
             *   and write null for spans. This is useful for ko table rendering.
             * e.g. ["2007", null, "2008", null]
             * e.g. ["World, "Boston", "World", "Boston"]
             * @param {type} dimWithComputedSpan
             * @returns {Array}
             */
            function alignDimAttr2Arr(dimWithComputedSpan) {
                var alignedAttrs = [];
                for (var i = 0; i < dimWithComputedSpan.repeat; i++) {
                    for (var j = 0; j < dimWithComputedSpan.attrs.length; j++) {
                        var attr = dimWithComputedSpan.attrs[j];
                        attr.dim = dimWithComputedSpan;
                        alignedAttrs.push(attr);
                        for (var k = 1; k < dimWithComputedSpan.span; k++) {
                            alignedAttrs.push(null);
                        }
                    }
                }
                return alignedAttrs;
            }

            /**
             * Calculate the cartesian attribute paths into a two-dimension array.
             * @param {type} dims the dimensions, either x-dim or y-dim
             * @returns {Array} 
             * The inside array stands for a certain path of a table cell.
             * e.g.  [{value: "Sales"}, {value: "2007"}, {value: "Boston"}],
             * meaning the x(or y) path of that table cell is Sales-2007-Boston.
             * And the outside array wraps all the paths.
             */
            function cartesianAttrPaths(dims) {
                if (dims.length > 1) {
                    // Always use .slice(0) to copy an array. Operate the arrays
                    //   from the params or returns will cause unwanted results.
                    var slicedDims = dims.slice(0);
                    var dim = slicedDims.shift();
                    // Recursively call this method, calc the rest part of the dims.
                    var paths = cartesianAttrPaths(slicedDims).slice(0);

                    // Keep a copy of last cartesian result.
                    var pathsOrigin = paths.slice(0);
                    var newPaths = [];
                    for (var i = 0; i < dim.attrs.length; i++) {
                        var attr = dim.attrs[i];

                        // Copy the origin paths and it'll be copied for n times 
                        //   (depends on the count of the attrs of current dim).
                        // e.g. if last recursive call returns the following paths:
                        //  [["World"], ["Boston"]], and now we have the attributes
                        //  ["2007", "2008"], and we'll get the following new paths:
                        //  [["2007", "World"], ["2007", "Boston"], 
                        //    ["2008", "World"], ["2008", "Boston"]].
                        //  So the origin paths [["World"], ["Boston"]] are copied.
                        var pathsCopy = pathsOrigin.slice(0);
                        for (var j = 0; j < pathsCopy.length; j++) {
                            var path = pathsCopy[j].slice(0);
                            path.splice(0, 0, attr);
                            pathsCopy[j] = path;
                        }
                        newPaths = newPaths.concat(pathsCopy);
                    }
                    return newPaths;
                } else if (dims.length === 1) {
                    // For leaf dim, we just init the paths into a two-dimension array.
                    var leafPaths = [];
                    for (var i = 0; i < dims[0].attrs.length; i++) {
                        var attr = dims[0].attrs[i];
                        leafPaths.push([attr]);
                    }
                    return leafPaths;
                }
            }

            $.getJSON('/samples/data/pivot-dimension.json', function(pivotData) {
                $.get('/analytics/html/timeseries/pivot-table.html', function(pivotHtml) {
                    pivotTemplate = pivotHtml;
                    drawDim(pivotData.x, pivotData.y);
                });
            });
        }
    });
});
