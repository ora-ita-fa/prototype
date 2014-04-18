/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojchart'],
function(oj, ko, $) {
    $(function() {
        function r() {
            return Math.floor((Math.random() * 100));
        };
        
        var pointsAmount=7;
        var seriesAmount=1;
        var lineSeries = [];
        var lineGroups=[];
        
        for (var i = 0; i < seriesAmount; i++) {
            var serie = {};
            serie.items = [];
            serie.name = "host" + (i + 1);
            for (var j = 0; j < pointsAmount; j++) {
                serie.items.push(r());
            }
            lineSeries.push(serie);
        }
        var xAxis = {tickLabel: {rendered: 'on'},
            axisLine: {rendered: 'on'},
            referenceObjects: []
        };

        for (var j = 0; j < pointsAmount; j++) {
            var d = new Date("April 11, 2014");
            d.setDate(d.getDate() + j);
            lineGroups.push(d);
            
            var referenceObject={
                    text: 'Reference Object',
                    type: 'line',
                    value: d,
                    color: '#FFFFFF',
                    displayInLegend: 'off',
                    lineWidth: 1,
                    location: 'front'
                };
                
            xAxis.referenceObjects.push(referenceObject);
        }
        
        ko.applyBindings(
                {lineSeriesValue: ko.observableArray(lineSeries),
                    lineGroupsValue: ko.observableArray(lineGroups),
                    xAxisData: ko.observable(xAxis)
                }, 
                $('#chart-container')[0]);
    });
});

