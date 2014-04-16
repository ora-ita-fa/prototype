/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['ojs/ojcore', 'knockout', 'jquery', '/analytics/js/common/ita-core.js', 
    '/analytics/js/view_model/timeseries/ChartRegionModel.js',
    'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojchart', 
    '/analytics/js/controller/timeseries/rollup-table.js'], function(oj, ko, $, ita, ChartRegionModel) {
    
    ita.registerTool({
        name: 'timeseries-tool',
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var qdg = valueAccessor().queryDescriptorGroup;
            var dsg = valueAccessor().datasetGroup;
            var timeWindow = valueAccessor().timeWindow;

            $.get("/analytics/html/timeseries/timeseries-tool.html", function(resp) {

                var demoChart = new ChartRegionModel();
                
                if (dsg && dsg.groups && dsg.series) {
                    demoChart.lineSeriesValue = dsg.series;
                    demoChart.lineGroupsValue = dsg.groups;
                }
                if (timeWindow && timeWindow.subscribe && typeof timeWindow.subscribe === 'function') {
                    timeWindow.subscribe(function(newVal) {
                        var constantAreaX = {
                            referenceObjects: [
                                {
                                    text: 'Reference Object', 
                                    type: 'area',
                                    min: newVal.start, 
                                    max: newVal.end, 
                                    color: '#80A0CEEC', 
                                    displayInLegend: 'on',
                                    location: 'back'
                                }
                            ]
                        };
                        demoChart.xAxisData(constantAreaX);
                        console.log(demoChart.xAxisData());
//                        var axisInfo = ko.toJS(demoChart.xAxisData);
//                        console.log(axisInfo);
//                        demoChart.xAxisData(axisInfo);
                    });
                }
                
                var chartType = "line";
                try {
                    chartType = qdg.Parameters.FAUICONFIG.chartType;
                } catch (ignore) {

                }
                demoChart.chartType(chartType);

                var $newChart = $(element);
                $newChart.append(resp);

                var chartEl = $newChart.find('.chart').get(0);


                $newChart.resizable({
                    stop: function(event, ui) {
                        ko.cleanNode(chartEl);
                        ko.applyBindings(demoChart, chartEl);
                        if ($newChart.width() > $(window).width() - 50) {
                            $newChart.removeAttr('style');
                        }
                    }
                });

                var rollupEl = $newChart.find('.rollup-table').get(0);

                function handleRollupDrilldown(series) {
                    var lines = [];
                    $.each(series, function(i, seriesName) {

                        function r() {
                            return Math.floor((Math.random() * 100));
                        }
                        lines.push({
                            name: seriesName,
                            items: [r(), r(), r(), r(), r()]
                        });
                    });
                    demoChart.lineSeriesValue = ko.observableArray(lines);
                    ko.cleanNode(chartEl);
                    ko.applyBindings(demoChart, chartEl);
                }

                var rollupConfig;
                try {
                    rollupConfig = qdg.QueryDescriptor[0].RollupLevels;
                } catch (ignore) {
                    
                }
                if (rollupConfig && rollupConfig.length > 0) {
                    $(rollupEl).addClass("rollup-table-enabled ");
                    $(chartEl).addClass("chart-rollup-enabled");
                    ko.applyBindings({
                        handleRollupDrilldown: handleRollupDrilldown
                    }, rollupEl);
                } else {
                    ko.cleanNode(chartEl);
                    ko.applyBindings(demoChart, chartEl);
                }

            });
        }
    });
});