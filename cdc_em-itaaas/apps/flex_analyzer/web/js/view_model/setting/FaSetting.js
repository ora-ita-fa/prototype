/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['knockout'], function(ko) {
    function FaSetting(eventBindings, settingsJs) {
        if (settingsJs) {
            this.settings = ko.mapping.fromJS(settingsJs);
        } else {
            this.settings = {
                selectedMeasures: ko.observableArray(),
                dataDisplay: {
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
                }
            };
        }
        
        this.eventBindings = eventBindings;
    }

    return FaSetting;
});