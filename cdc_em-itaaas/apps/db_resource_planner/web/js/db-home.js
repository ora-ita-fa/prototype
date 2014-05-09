/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['ojall', 'knockout', 'jquery',
    '/analytics/js/model/timeseries/itaToolRemoteDataSource.js',
    '/analytics/js/model/timeseries/itaToolLocalDataSource.js',
    '/analytics/js/model/forecast/itaForecastConfig.js',
    'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojchart', 'jqueryui',
    '/analytics/js/controller/timeseries/timeseries-tool.js',
    '/analytics/js/controller/forecast/forecast-tool.js',
    '/analytics/js/controller/timeseries/time-slider.js'],
        function(oj, ko, $, itaToolRemoteDataSource, itaToolLocalDataSource, itaForecastConfig) {
            $(function() {
                var DAY = 24 * 60 * 60 * 1000;
                var nowStamp = new Date();
                /**
                 * Here is a model that the 'time-slider region' will accept.
                 * The parameters are observable so that position of the sliding block  
                 *   will be redrawn after changing the start or end time.
                 * Also the time-slider provides the event listener 'viewRangeChange'
                 *   so that we can get the signal to reset the dsg(or qdg) of the 'timeseries-tool'
                 */
                var timeSliderVM = {
                    totalStart: ko.observable(new Date(nowStamp - 40 * DAY)),
                    totalEnd: ko.observable(nowStamp),
                    viewStart: ko.observable(new Date(nowStamp - 30 * DAY)),
                    viewEnd: ko.observable(new Date(nowStamp - 10 * DAY)),
                    viewRangeChange: handleTimeChange,
                    slide: maskChart
                };

                function generateGroupWithinTime(startTime, endTime) {

                    var groups = [];
                    for (var timeCur = Math.floor(startTime.getTime() / DAY) * DAY;
                            timeCur < endTime.getTime();
                            timeCur += DAY) {
                        groups.push(new Date(timeCur));
                    }
                    return groups;
                }

                function generatePointsWithRandomY(count) {
                    var points = [];
                    for (var i = 0; i < count; i++) {
                        points.push(Math.floor(Math.random() * 1000));
                    }
                    return points;
                }

                /**
                 * The demo qdg instance is from an ajax response.
                 */
                var sampleDataSource = new itaToolRemoteDataSource("/db_resource_planner/data/sample-qdg-db.json");
                /**
                 * The qdg can be returned by sending any ajax request as long as 
                 *   it responses in the format of qdg json.
                 * Or, even they can manually write a qdg in their js code.
                 * 
                 * When the 'region' of 'timeseries-tool' recognizes a qdg parameter is set,
                 *   it will send an ajax request to get the dsg.
                 */

                /**
                 * Also they can provide a dsg instead of a qdg if they prefer.
                 */

                var _dsg1 = {
                    groups: ko.observableArray(),
                    series: ko.observableArray()
                };

                var sampleDataSource1 = new itaToolLocalDataSource(null, _dsg1);
                var timeWindow = ko.observable();

                ko.applyBindings({
                    datasource1: sampleDataSource1,
                    timeWindow: timeWindow
                }, $(".chart-container>div")[0]);


                var _dsg2 = {
                    groups: ko.observableArray(),
                    series: ko.observableArray()
                };
                var sampleDataSource2 = new itaToolLocalDataSource(null, _dsg2);

                ko.applyBindings({
                    datasource2: sampleDataSource2
                }, $(".chart-container>div")[1]);


                //  _qdg3.identity = "I/O per second";

                var _dsg3 = {
                    groups: ko.observableArray(),
                    series: ko.observableArray()
                };
                var sampleDataSource3 = new itaToolLocalDataSource(null, _dsg3);

                ko.applyBindings({
                    datasource3: sampleDataSource3
                }, $(".chart-container>div")[2]);


                // _qdg4.identity = "";

                var _dsg4 = {
                    groups: ko.observableArray(),
                    series: ko.observableArray()
                };
                var sampleDataSource4 = new itaToolLocalDataSource(null, _dsg4);
                var forecastConfig = new itaForecastConfig();

                // var forecastDataSource = new itaToolRemoteDataSource("http://dhcp-1op1-1op2-west-144-25-170-26.usdhcp.oraclecorp.com:7101/MyEMWToolsWS-EmwTools-context-root/jersey/QueryService/getQDJson",null,forecastConfig);
               // var forecastDataSource = new itaToolRemoteDataSource("/analytics/data/forecast/qd.json", null, forecastConfig);

                ko.applyBindings({
                    datasource4: sampleDataSource4
                }, $(".chart-container>div")[3]);


                /**
                 * reset the groups and series each time the slider finishes a slide
                 */
                function handleTimeChange() {
                    // here we just generate the dsg in this demo

                    resetDsg(sampleDataSource2);
                    resetDsg(sampleDataSource3);
                    resetDsg(sampleDataSource4);
                }

                resetDsg(sampleDataSource1);
                handleTimeChange();

                function resetDsg(sampleDataSource) {
                    var dsg = sampleDataSource.getDataSetGroup();
                    var groups = generateGroupWithinTime(timeSliderVM.viewStart(), timeSliderVM.viewEnd());
                    var points = generatePointsWithRandomY(groups.length);
                    dsg.groups(groups);
                    dsg.series([{
                            name: 'series1',
                            items: points
                        }]);
                }

                function maskChart(startTime, endTime) {
                    timeWindow({
                        start: startTime,
                        end: endTime
                    });
                }

                ko.applyBindings(timeSliderVM, $("#global-time-slider")[0]);
            });
        });