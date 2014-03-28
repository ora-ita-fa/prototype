/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['timeseries-config', 'rollup-table', 'ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojchart', 'jqueryui'],
        function(timeseriesRegion, rollupTable, oj, ko, $) {

            $(function() {
                $(".chart-list").sortable();

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

                function addChart() {
                    var $newChart = $($("#chart-template").html());
                    $("#add-chart").before($newChart);

                    var chartEl = $newChart.find('.chart').get(0);
                    var demoChart = new DemoChartModel();
                    demoChart.chartType(timeseriesRegion.configs.getChartType());
                    $newChart.resizable({
                        stop: function(event, ui) {
                            ko.cleanNode(chartEl);
                            ko.applyBindings(demoChart, chartEl);
                        }
                    });
                    
                    var rollupEl = $newChart.find('.rollup-table').get(0);
                    
                    function handleRollupDrilldown(series){
                        lines = [];
                        $.each(series,function(i,seriesName){
                            
                            function r(){
                                return Math.floor((Math.random()*100));
                            }
                            lines.push({
                                name: seriesName, 
                                items: [r(),r(),r(),r(),r()]
                            });
                        });
                        demoChart.lineSeriesValue = ko.observableArray(lines);
                        ko.cleanNode(chartEl);
                        ko.applyBindings(demoChart, chartEl);                       
                    }
                    ko.applyBindings({
                        handleRollupDrilldown:handleRollupDrilldown
                    },rollupEl);
                }

                var renderred = false;
                $("#add-chart").click(function() {
                    $('.chart-list').toggle('slide');
                    $('.timeseries-container').toggle('slide', function() {
                        // render the timeseries after finishing slide effects,
                        // to prevent chart displaying problems.
                        if (!renderred) {
                            console.log($('.timeseries-region').get(0));
                            ko.applyBindings(null, $('.timeseries-region').get(0));
                            renderred = true;
                        }
                    });
                });

                ko.applyBindings({
                    goBack: function() {
                        $('.timeseries-container').toggle('slide');
                        $('.chart-list').toggle('slide', function() {
                            addChart();
                        });
                    }
                }, $("#back-to-chart-list")[0]);
            });
        });
