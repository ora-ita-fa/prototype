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
                    var verticalTable = toVerticalTableLayout(dimsWithComputedSpan);
                    console.log(verticalTable);
                    ko.applyBindings({
                        dims: dimsWithComputedSpan,
                        verticalHeader: verticalTable
                    }, $pivotTable[0]);
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

            function toVerticalTableLayout(dimsWithColspan) {
                var table = null;
                for (var i = 0; i < dimsWithColspan.length; i++) {
                    var dim = dimsWithColspan[i];
                    var attrArr = alignDimAttr2Arr(dim);
                    for (var j = 0; j < attrArr.length; j++) {
                        if (!table) {
                            table = new Array(attrArr.length);
                        }
                        if (!table[j]) {
                            table[j] = new Array(dimsWithColspan.length);
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

            $.getJSON('/analytics/data/timeseries/pivot-dimension.json', function(resp) {
                drawDim(resp.x);
            });
        }
    });
});
