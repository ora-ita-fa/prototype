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

            function drawDim(xDims, yDims) {
                $.get('/analytics/html/timeseries/pivot-table.html', function(resp) {
                    var $pivotTable = $(resp);
                    $(element).append($pivotTable);
                    var xDimsWithComputedSpan = computeSpan(xDims);
                    var yDimsWithComputedSpan = computeSpan(yDims);

                    var horizontalPaths = cartesianAttrPaths(xDims);
                    var verticalPaths = cartesianAttrPaths(yDims);
                    console.log(horizontalPaths);
                    console.log(verticalPaths);

                    var horizontalHeader = toHorizontalHeader(xDimsWithComputedSpan);
                    var verticalHeader = toVerticalHeader(yDimsWithComputedSpan);
                    ko.applyBindings({
                        xDims: xDims,
                        yDims: yDims,
                        horizontalPaths: horizontalPaths,
                        verticalPaths: verticalPaths,
                        horizontalHeader: horizontalHeader,
                        verticalHeader: verticalHeader,
                        showPaths: showPaths
                    }, $pivotTable[0]);
                    $('td').resizable();
                    
                    function showPaths(x, y) {
                        var hPath = horizontalPaths[x];
                        var yPath = verticalPaths[y];
                        var tips = "";
                        $.each(hPath, function(i,step) {
                            tips += '-->' + step.text;
                        });
                        tips += "<br/>";
                        $.each(yPath, function(i,step) {
                            tips += '-->' + step.text;
                        });
                        $("#pathsConsole").html(tips);
                    }
                });
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

            $.getJSON('/samples/data/pivot-dimension.json', function(resp) {
                drawDim(resp.x, resp.y);
            });
        }
    });
});
