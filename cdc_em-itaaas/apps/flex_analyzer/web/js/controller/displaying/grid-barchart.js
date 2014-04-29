/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojchart', 'jqueryui',
    '/analytics/js/controller/timeseries/grid-barchart.js'],
        function(oj, ko, $) {
                ko.applyBindings(null, $('.grid-barchart-test')[0]);
        });