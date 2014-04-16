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
                    ko.applyBindings({
                        dims: dimsWithComputedSpan
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

            $.getJSON('/analytics/data/timeseries/data_structure.json', function(resp) {
                drawDim(resp.x);
            });
        }
    });
});
