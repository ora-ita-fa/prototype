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
        var countries = [{
        "country": "US",
                "2008": {"x_axis": {tickLabel: {rendered: 'of'}}, "y_axis": {tickLabel: {rendered: 'on'}}, "series": [{name: 'Series 1', items: [42, 55, 36, 22, 32, 39]}, {name: 'Series 2', items: [42, 55, 36, 22, 32, 39]}], "groups": [new Date(2014, 2, 4), new Date(2014, 2, 11), new Date(2014, 2, 18), new Date(2014, 2, 25), new Date(2014, 3, 1), new Date(2014, 3, 8)]},
                "2009": {"x_axis": {tickLabel: {rendered: 'off'}}, "y_axis": {tickLabel: {rendered: 'off'}}, "series": [{name: 'Series 1', items: [42, 55, 36, 22, 32, 39]}, {name: 'Series 2', items: [42, 55, 36, 22, 32, 39]}], "groups": [new Date(2014, 2, 4), new Date(2014, 2, 11), new Date(2014, 2, 18), new Date(2014, 2, 25), new Date(2014, 3, 1), new Date(2014, 3, 8)]},
                "2010": {"x_axis": {tickLabel: {rendered: 'off'}}, "y_axis": {tickLabel: {rendered: 'off'}}, "series": [{name: 'Series 1', items: [42, 55, 36, 22, 32, 39]}, {name: 'Series 2', items: [42, 55, 36, 22, 32, 39]}], "groups": [new Date(2014, 2, 4), new Date(2014, 2, 11), new Date(2014, 2, 18), new Date(2014, 2, 25), new Date(2014, 3, 1), new Date(2014, 3, 8)]}},
        {"country": "CN",
                "2008": {"x_axis": {tickLabel: {rendered: 'of'}}, "y_axis": {tickLabel: {rendered: 'on'}}, "series": [{name: 'Series 1', items: [42, 55, 36, 22, 32, 39]}, {name: 'Series 2', items: [42, 55, 36, 22, 32, 39]}], "groups": [new Date(2014, 2, 4), new Date(2014, 2, 11), new Date(2014, 2, 18), new Date(2014, 2, 25), new Date(2014, 3, 1), new Date(2014, 3, 8)]},
                "2009": {"x_axis": {tickLabel: {rendered: 'off'}}, "y_axis": {tickLabel: {rendered: 'off'}}, "series": [{name: 'Series 1', items: [42, 55, 36, 22, 32, 39]}, {name: 'Series 2', items: [42, 55, 36, 22, 32, 39]}], "groups": [new Date(2014, 2, 4), new Date(2014, 2, 11), new Date(2014, 2, 18), new Date(2014, 2, 25), new Date(2014, 3, 1), new Date(2014, 3, 8)]},
                "2010": {"x_axis": {tickLabel: {rendered: 'off'}}, "y_axis": {tickLabel: {rendered: 'off'}}, "series": [{name: 'Series 1', items: [42, 55, 36, 22, 32, 39]}, {name: 'Series 2', items: [42, 55, 36, 22, 32, 39]}], "groups": [new Date(2014, 2, 4), new Date(2014, 2, 11), new Date(2014, 2, 18), new Date(2014, 2, 25), new Date(2014, 3, 1), new Date(2014, 3, 8)]}},
        {"country": "EU",
                "2008": {"x_axis": {tickLabel: {rendered: 'on'}}, "y_axis": {tickLabel: {rendered: 'on'}}, "series": [{name: 'Series 1', items: [42, 55, 36, 22, 32, 39]}, {name: 'Series 2', items: [42, 55, 36, 22, 32, 39]}], "groups": [new Date(2014, 2, 4), new Date(2014, 2, 11), new Date(2014, 2, 18), new Date(2014, 2, 25), new Date(2014, 3, 1), new Date(2014, 3, 8)]},
                "2009": {"x_axis": {tickLabel: {rendered: 'on'}}, "y_axis": {tickLabel: {rendered: 'off'}}, "series": [{name: 'Series 1', items: [42, 55, 36, 22, 32, 39]}, {name: 'Series 2', items: [42, 55, 36, 22, 32, 39]}], "groups": [new Date(2014, 2, 4), new Date(2014, 2, 11), new Date(2014, 2, 18), new Date(2014, 2, 25), new Date(2014, 3, 1), new Date(2014, 3, 8)]},
                "2010": {"x_axis": {tickLabel: {rendered: 'on'}}, "y_axis": {tickLabel: {rendered: 'off'}}, "series": [{name: 'Series 1', items: [42, 55, 36, 22, 32, 39]}, {name: 'Series 2', items: [42, 55, 36, 22, 32, 39]}], "groups": [new Date(2014, 2, 4), new Date(2014, 2, 11), new Date(2014, 2, 18), new Date(2014, 2, 25), new Date(2014, 3, 1), new Date(2014, 3, 8)]}
        }];
                $(element).append(resp);
                ko.applyBindings({dataSource: new oj.ArrayDataGridDataSource(countries, {rowHeader: 'country'})}, $('#datagrid').get(0));
                var   xAxis_content= $('#datagrid\\:databody svg>g>g>g>g[transform]').filter(':nth-child(3n):gt(5)').attr('transform',function(index,attr){ 
                    var translateXValue = index * 200 + 20;
                    $(this).attr('transform','translate('+translateXValue+',0)');
                });
            
                var fixed_xAxis = $("<div class='fixed_xAxis' style='padding:0px 0px 1px 2px;height:25px;top:474px;width:600px;left:50px;position:fixed;background-color:#DFE4E7;vertical-align:bottom'><svg width='600px' height='25px'></svg></div>").find('svg').append(xAxis_content).end();
                $('#datagrid').after(fixed_xAxis);
        });
        }
});
        });

