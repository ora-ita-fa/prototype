/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['ojs/ojcore', 'knockout', 'jquery', '/analytics/js/common/ita-core.js',
    '/analytics/js/view_model/timeseries/ChartRegionModel.js', 'ojs/ojknockout',
    'ojs/ojcomponents', 'ojs/ojdatagrid', 'ojs/ojchart'], function(oj, ko, $, ita, ChartRegionModel) {
    ita.registerTool({
        name: 'grid-barchart',
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            $.get("/analytics/html/timeseries/grid-barchart.html", function(resp) {
                var countries = [{"country": "US",
                                                        "2008": {"series": [{name: 'Series 1', items: [42, 55, 36, 22, 32, 39]}, {name: 'Series 2', items: [42, 55, 36, 22, 32, 39]}], "groups": [new Date(2014, 2, 4), new Date(2014, 2, 11), new Date(2014, 2, 18), new Date(2014, 2, 25), new Date(2014, 3, 1), new Date(2014, 3, 8)]},
                                                        "2009": {"series": [{name: 'Series 1', items: [42, 55, 36, 22, 32, 39]}, {name: 'Series 2', items: [42, 55, 36, 22, 32, 39]}], "groups": [new Date(2014, 2, 4), new Date(2014, 2, 11), new Date(2014, 2, 18), new Date(2014, 2, 25), new Date(2014, 3, 1), new Date(2014, 3, 8)]}, 
                                                        "2010": {"series": [{name: 'Series 1', items: [42, 55, 36, 22, 32, 39]}, {name: 'Series 2', items: [42, 55, 36, 22, 32, 39]}], "groups": [new Date(2014, 2, 4), new Date(2014, 2, 11), new Date(2014, 2, 18), new Date(2014, 2, 25), new Date(2014, 3, 1), new Date(2014, 3, 8)]}},
                                                    {"country": "CN",
                                                        "2008": {"series": [{name: 'Series 1', items: [42, 55, 36, 22, 32, 39]}, {name: 'Series 2', items: [42, 55, 36, 22, 32, 39]}], "groups": [new Date(2014, 2, 4), new Date(2014, 2, 11), new Date(2014, 2, 18), new Date(2014, 2, 25), new Date(2014, 3, 1), new Date(2014, 3, 8)]}, 
                                                        "2009": {"series": [{name: 'Series 1', items: [42, 55, 36, 22, 32, 39]}, {name: 'Series 2', items: [42, 55, 36, 22, 32, 39]}], "groups": [new Date(2014, 2, 4), new Date(2014, 2, 11), new Date(2014, 2, 18), new Date(2014, 2, 25), new Date(2014, 3, 1), new Date(2014, 3, 8)]}, 
                                                        "2010": {"series": [{name: 'Series 1', items: [42, 55, 36, 22, 32, 39]}, {name: 'Series 2', items: [42, 55, 36, 22, 32, 39]}], "groups": [new Date(2014, 2, 4), new Date(2014, 2, 11), new Date(2014, 2, 18), new Date(2014, 2, 25), new Date(2014, 3, 1), new Date(2014, 3, 8)]}},
                                                   {"country": "EU",
                                                        "2008": {"series": [{name: 'Series 1', items: [42, 55, 36, 22, 32, 39]}, {name: 'Series 2', items: [42, 55, 36, 22, 32, 39]}], "groups": [new Date(2014, 2, 4), new Date(2014, 2, 11), new Date(2014, 2, 18), new Date(2014, 2, 25), new Date(2014, 3, 1), new Date(2014, 3, 8)]}, 
                                                        "2009": {"series": [{name: 'Series 1', items: [42, 55, 36, 22, 32, 39]}, {name: 'Series 2', items: [42, 55, 36, 22, 32, 39]}], "groups": [new Date(2014, 2, 4), new Date(2014, 2, 11), new Date(2014, 2, 18), new Date(2014, 2, 25), new Date(2014, 3, 1), new Date(2014, 3, 8)]}, 
                                                        "2010": {"series": [{name: 'Series 1', items: [42, 55, 36, 22, 32, 39]}, {name: 'Series 2', items: [42, 55, 36, 22, 32, 39]}], "groups": [new Date(2014, 2, 4), new Date(2014, 2, 11), new Date(2014, 2, 18), new Date(2014, 2, 25), new Date(2014, 3, 1), new Date(2014, 3, 8)]}}
                                                ];
                $(element).append(resp);
                ko.applyBindings({dataSource: new oj.ArrayDataGridDataSource(countries, {rowHeader: 'country'})}, $('#datagrid').get(0));
            });
        }
    });
});

