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

            function drawDim(dims) {
                $.get('/analytics/html/timeseries/pivot-table.html', function(resp) {
                    var $pivotTable = $(resp);
                    $(element).append($pivotTable);
                    var dimsWithComputedSpan = computeSpan(dims);
                    var horizonHeader = toHorizontalHeader(dimsWithComputedSpan);
                    var verticalHeader = toVerticalHeader(dimsWithComputedSpan);
                    ko.applyBindings({
                        dims: dimsWithComputedSpan,
                        horizontalHeader: horizonHeader,
                        verticalHeader: verticalHeader
                    }, $pivotTable[0]);
                    $('td').resizable();
                });
            }

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

            function toHorizontalHeader(dimsWithComputedSpan) {
                var table = [];
                for (var i = 0; i < dimsWithComputedSpan.length; i++) {
                    var dim = dimsWithComputedSpan[i];
                    var attrArr = alignDimAttr2Arr(dim);
                    table.push(attrArr);
                }
                return table;
            }

            function toVerticalHeader(dimsWithComputedSpan) {
                var table = null;
                for (var i = 0; i < dimsWithComputedSpan.length; i++) {
                    var dim = dimsWithComputedSpan[i];
                    var attrArr = alignDimAttr2Arr(dim);
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

            function alignDimAttr2Arr(dim) {
                var trs = [];
                for (var i = 0; i < dim.repeat; i++) {
                    for (var j = 0; j < dim.attrs.length; j++) {
                        var attr = dim.attrs[j];
                        attr.dim = dim;
                        trs.push(attr);
                        for (var k = 1; k < dim.span; k++) {
                            trs.push(null);
                        }
                    }
                }
                return trs;
            }

            $.getJSON('/samples/data/pivot-dimension.json', function(resp) {
                drawDim(resp.x);
            });
        }
    });
});
