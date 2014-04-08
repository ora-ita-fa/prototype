/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['ojs/ojcore', 'knockout', 'jquery', 'ita-core', 'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojchart', 'rollup-table'], function(oj, ko, $, ita) {
    ita.registerTool({
        name: 'timeseries-tool',
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var qdg = valueAccessor().queryDescriptorGroup;

            if ($("#timeseries-tool-css").length === 0) {
                $("head").append('<link id="timeseries-tool-css" rel="stylesheet" href="/src/css/timeseries-tool.css">');
            }

            $.get("/src/timeseries-tool.html", function(resp) {
                function DemoChartModel() {
                    /* chart data */
                    var lineSeries = [{name: "Series 1", items: [74, 62, 70, 76, 66]},
                        {name: "Series 2", items: [50, 38, 46, 54, 42]},
                        {name: "Series 3", items: [34, 22, 30, 32, 26]},
                        {name: "Series 4", items: [18, 6, 14, 22, 10]},
                        {name: "Series 5", items: [3, 2, 3, 3, 2]}];
                    var lineGroups = ["Group A", "Group B", "Group C", "Group D", "Group E"];
                    this.lineSeriesValue = ko.observableArray(lineSeries);
                    this.lineGroupsValue = ko.observableArray(lineGroups);
                    this.chartType = ko.observable('line');
                }

                var demoChart = new DemoChartModel();
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