/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['knockout'], function(ko) {
    function FaSetting() {
        this.selectedCube = ko.observable({
            displayName: '<Cube>',
            id: 0,
            subject: {
                displayName: '<Subject>',
                id: 1
            }
        });
        this.selectedMeasures = ko.observableArray();
        this.dataDisplay = {
            regionName: ko.observable(),
            displayType: ko.observable("chart"),
            regionAutoHeight: ko.observable(false),
            regionHeightPx: ko.observable(200),
            chartOptions: {
                chartType: ko.observable("line"),
                showMultipleDataSeries: ko.observable(true),
                showLegend: ko.observable(true),
                showTooltips: ko.observable(true),
                showXaxisLabel: ko.observable(false),
                xAxisLabel: ko.observable("<Cutomized X-Axis Label>"),
                showYaxisLabel: ko.observable(false),
                yAxisLabel: ko.observable("<Cutomized X-Axis Label>")
            }
        };

        var me = this;
        this.selectedCube.update = function(options) {
            me.selectedCube(options.data);
        };
    }
    
    return FaSetting;
});