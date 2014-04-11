/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojchart', 'jqueryui',
    '/analytics/js/controller/timeseries/timeseries-tool.js',
    '/analytics/js/controller/timeseries/time-slider.js'], function(oj, ko, $) {
    $(function() {
        $.get("/db_resource_planner/data/sample-qdg-db.json", function(resp) {

            var DAY = 24 * 60 * 60 * 1000;
            var nowStamp = new Date();
            /**
             * Here is a model that the 'time-slider region' will accept.
             * The parameters are observable so that position of the sliding block  
             *   will be redraw after changing the start or end time.
             * Also the time-slider provides the event listener 'viewRangeChange'
             *   so that we can get the signal to reset the dsg(or qdg) of the 'timeseries-tool'
             */
            var timeSliderVM = {
                totalStart: ko.observable(new Date(nowStamp - 40 * DAY)),
                totalEnd: ko.observable(nowStamp),
                viewStart: ko.observable(new Date(nowStamp - 30 * DAY)),
                viewEnd: ko.observable(new Date(nowStamp - 10 * DAY)),
                viewRangeChange: handleTimeChange
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
            var qdgSample = resp;

            /**
             * The qdg can be returned by sending any ajax request as long as 
             *   it responses in the format of qdg json.
             * Or, even they can manually write a qdg in their js code.
             * 
             * When the 'region' of 'timeseries-tool' recognizes a qdg parameter is set,
             *   it will send an ajax request to get the dsg.
             */
            var _qdg1 = qdgSample;

            /**
             * Also they can provide a dsg instead of a qdg if they prefer.
             */
            var _dsg1 = {
                groups: ko.observableArray(),
                series: ko.observableArray()
            };


            ko.applyBindings({
                qdg1: _qdg1,
                dsg1: _dsg1
            }, $(".chart-container>div")[0]);


            var _qdg2 = qdgSample;

            var _dsg2 = {
                groups: ko.observableArray(),
                series: ko.observableArray()
            };

            ko.applyBindings({
                qdg2: _qdg2,
                dsg2: _dsg2
            }, $(".chart-container>div")[1]);


            var _qdg3 = qdgSample;
            _qdg3.identity = "I/O per second";

            var _dsg3 = {
                groups: ko.observableArray(),
                series: ko.observableArray()
            };

            ko.applyBindings({
                qdg3: _qdg3,
                dsg3: _dsg3
            }, $(".chart-container>div")[2]);


            var _qdg4 = qdgSample;
            _qdg4.identity = "";

            var _dsg4 = {
                groups: ko.observableArray(),
                series: ko.observableArray()
            };

            ko.applyBindings({
                qdg4: _qdg4,
                dsg4: _dsg4
            }, $(".chart-container>div")[3]);


            /**
             * reset the groups and series each time the slider finishes a slide
             */
            function handleTimeChange() {
                // here we just generate the dsg in this demo
                resetDsg(_dsg1);
                resetDsg(_dsg2);
                resetDsg(_dsg3);
                resetDsg(_dsg4);
            }

            handleTimeChange();

            function resetDsg(dsg) {
                var groups = generateGroupWithinTime(timeSliderVM.viewStart(), timeSliderVM.viewEnd());
                var points = generatePointsWithRandomY(groups.length);
                dsg.groups(groups);
                dsg.series([{
                        name: 'series1',
                        items: points
                    }]);
            }

            ko.applyBindings(timeSliderVM, $("#global-time-slider")[0]);
        });



    });
});