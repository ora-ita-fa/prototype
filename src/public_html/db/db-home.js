/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojchart', 'jqueryui',
    'timeseries-tool', 'time-slider'], function(oj, ko, $) {
    $(function() {
        $.get("/src/db/sample-qdg-db.json", function(resp) {

            var nowStamp = new Date();
            var timeSliderVM = {
                totalStart: ko.observable(new Date(nowStamp - 40 * 24 * 60 * 60 * 1000)),
                totalEnd: ko.observable(nowStamp),
                viewStart: ko.observable(new Date(nowStamp - 30 * 24 * 60 * 60 * 1000)),
                viewEnd: ko.observable(new Date(nowStamp - 10 * 24 * 60 * 60 * 1000))
            };

            var qdgSample = resp;

            var _qdg1 = qdgSample;
            _qdg1.identity = "Avg Active Cores";

            var _dsg1 = {
            };

            ko.applyBindings({
                qdg1: _qdg1,
                dsg1: _dsg1
            }, $(".chart-container>div")[0]);


            var _qdg2 = qdgSample;
            _qdg2.identity = "Global Cache Busy";

            var _dsg2 = {
            };

            ko.applyBindings({
                qdg2: _qdg2,
                dsg2: _dsg2
            }, $(".chart-container>div")[1]);


            var _qdg3 = qdgSample;
            _qdg3.identity = "I/O per second";

            var _dsg3 = {
            };

            ko.applyBindings({
                qdg3: _qdg3,
                dsg3: _dsg3
            }, $(".chart-container>div")[2]);


            var _qdg4 = qdgSample;
            _qdg4.identity = "";

            var _dsg4 = {
            };

            ko.applyBindings({
                qdg4: _qdg4,
                dsg4: _dsg4
            }, $(".chart-container>div")[3]);
            
          

            ko.applyBindings(timeSliderVM, $("#global-time-slider")[0]);
        });



    });
});