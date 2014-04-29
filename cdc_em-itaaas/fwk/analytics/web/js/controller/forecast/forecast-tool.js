/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['ojs/ojcore', 'knockout', 'jquery', '/analytics/js/common/ita-core.js', 
    '/analytics/js/view_model/forecast/ForecastRegionModel.js',
    'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojchart'], function(oj, ko, $, ita, ForecastRegionModel) {
    
    ita.registerTool({
        name: 'forecast-tool',
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            
            var dataSource = valueAccessor().dataSource;
            var qdg = dataSource.getQueryDescriptorGroup();
            var dsg = dataSource.getDataSetGroup();
            var config = dataSource.getConfig();
            var timeWindow = valueAccessor().timeWindow;
            
            $.get("/analytics/html/forecast/forecast-tool.html", function(resp) {

                var demoChart = new ForecastRegionModel(qdg,config);
                
//                if (dsg && dsg.groups && dsg.series) {
//                    demoChart.lineSeriesValue = dsg.series;
//                    demoChart.lineGroupsValue = dsg.groups;
//                }
                
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
                    ko.cleanNode(chartEl);
                    ko.applyBindings(demoChart, chartEl);
            });
        }
    });
});