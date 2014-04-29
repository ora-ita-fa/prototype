/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['knockout'], function(ko) {

    function ChartRegionModel() {
        /* chart data */
        var lineSeries = [{name: "Series 1", items: [74, 62, 70, 76, 66]},
            {name: "Series 2", items: [50, 38, 46, 54, 42]},
            {name: "Series 3", items: [34, 22, 30, 32, 26]},
            {name: "Series 4", items: [18, 6, 14, 22, 10]},
            {name: "Series 5", items: [3, 2, 3, 3, 2]}];
        var lineGroups = [new Date(2014, 2, 4), new Date(2014, 2, 11), new Date(2014, 2, 18), new Date(2014, 2, 25), new Date(2014, 3, 1), new Date(2014, 3, 8)];
        this.lineSeriesValue = ko.observableArray(lineSeries);
        this.lineGroupsValue = ko.observableArray(lineGroups);
        this.chartType = ko.observable('line');
        this.xAxisData = ko.observable({});
        this.yAxisData = ko.observable({});
    }

    return ChartRegionModel;
});
