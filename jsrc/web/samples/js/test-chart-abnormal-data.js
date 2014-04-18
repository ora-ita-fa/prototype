/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojchart'],
function(oj, ko, $) {
    function ChartModel() {
        var self = this;
        /* chart data */
        
        var lineSeries = [{name: "host1", items: [74, 74, 87, 62, 70, 76, 66]},
            {name: "host2", items: [50, 50, 21, 38, 46, 54, 42]},
            {name: "db1", items: [34, 34, 15, 22, 30, 32, 26]},
            {name: "db2", items: [18,18, 7, 6, 14, 22, 10]},
            {name: "wls1", items: [3, 3, 1, 2, 3, 3, 2]}];
        var lineGroups = [new Date("April 11, 2014"), new Date("April 12, 2014"), new Date("April 13, 2014"), new Date("April 14, 2014"), new Date("April 15, 2014"), new Date("April 16, 2014"), new Date("April 17, 2014")];
        this.lineSeriesValue = ko.observableArray(lineSeries);
        this.lineGroupsValue = ko.observableArray(lineGroups);
        
        var lineSeries1 = [{name: "host1", items: [74, 87, 62, 70, 76, 66]},
            {name: "host2", items: [50, 21, 38, 46, 54, 42]},
            {name: "db1", items: [34, 15, 22, 30, 32, 26]},
            {name: "db2", items: [18, 7, 6, 14, 22, 10]},
            {name: "wls1", items: [3, 1, 2, 3, 3, 2]}];
        var lineGroups1 = [new Date("April 11, 2014"), new Date("April 13, 2014"), new Date("April 14, 2014"), new Date("April 15, 2014"), new Date("April 16, 2014"), new Date("April 17, 2014")];
        this.lineSeriesValue1 = ko.observableArray(lineSeries1);
        this.lineGroupsValue1 = ko.observableArray(lineGroups1);
    }
    /* chart data */
    var lineSeries2 = [{name: "host1", items: [65, 74, 0, 62, 70, 0, 66]},
        {name: "host2", items: [42, 50, 0, 38, 46, 0, 42]},
        {name: "db1", items: [22, 34, 0, 22, 0, 0, 26]},
        {name: "db2", items: [16, 18, 0, 6, 14, 0, 10]},
        {name: "wls1", items: [1, 3, 0, 2, 3, 0, 2]}];
    var lineGroups2 = [new Date("April 11, 2014"), new Date("April 12, 2014"), new Date("April 13, 2014"), new Date("April 14, 2014"), new Date("April 15, 2014"), new Date("April 16, 2014"), new Date("April 17, 2014")];
    this.lineSeriesValue2 = ko.observableArray(lineSeries2);
    this.lineGroupsValue2 = ko.observableArray(lineGroups2);

    /* chart data */
    var lineSeries3 = [{name: "host1", items: [74, null, 62, 70, 87, 66]},
        {name: "host2", items: [50, null, 38, 46, 54, 42]},
        {name: "db1", items: [34, null, 22, Number.NaN, 23, 26]},
        {name: "db2", items: [18, null, 6, 14, 18, 10]},
        {name: "wls1", items: [3, null, 2, 3, 6, 2]}];
    var lineGroups3 = [new Date("April 11, 2014"), new Date("April 12, 2014"), new Date("April 13, 2014"), new Date("April 14, 2014"), new Date("April 15, 2014"), new Date("April 16, 2014"), new Date("April 17, 2014")];
    this.lineSeriesValue3 = ko.observableArray(lineSeries3);
    this.lineGroupsValue3 = ko.observableArray(lineGroups3);
    $(
        function() {
            ko.applyBindings(new ChartModel(), $('#chart-container')[0]);
        }
    );
});