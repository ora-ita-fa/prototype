/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojchart'],
function(oj, ko, $)
{   
    function ChartModel() {
        var self = this;
        self.timeAxisTypeValue = ko.observable('enabled');
        /* toggle button variables */
        self.stackValue = ko.observable('off');
        self.orientationValue = ko.observable('vertical');
        self.initialStackValue = 'off';
        self.initialOrientationValue = 'vertical';
        /* chart data */
        var regularSeries = [{name: "Series 1", items: [42, 55, 36, 22, 32, 39]},
                             {name: "Series 2", items: [34, 30, 50, 46, 36, 27]}];
        var regularGroups = [new Date(2014,2,4), new Date(2014,2,11), new Date(2014,2,18), new Date(2014,2,25), new Date(2014,3,1), new Date(2014,3,8)];
        var mixedSeries = [{name: "Series 1", items: [
                                {x: new Date(2014,2,4), y: 42},
                                {x: new Date(2014,2,10), y: 55},
                                {x: new Date(2014,2,18), y: 36},
                                {x: new Date(2014,2,27), y: 22}]},
                           {name: "Series 2", items: [
                                {x: new Date(2014,2,6), y: 34},
                                {x: new Date(2014,2,11), y: 30},
                                {x: new Date(2014,2,15), y: 50},
                                {x: new Date(2014,2,22), y: 46}]}];
        var mixedGroups = ["Group A", "Group B", "Group C", "Group D"];
        self.regularSeriesValue = ko.observableArray(regularSeries);
        self.regularGroupsValue = ko.observableArray(regularGroups);
        self.mixedSeriesValue = ko.observableArray(mixedSeries);
        self.mixedGroupsValue = ko.observableArray(mixedGroups);
        /* toggle buttons*/
        self.setNoChrome = function(event) {
            $(event.target).parent().addClass("oj-button-no-chrome");
        };
        self.stackOptions = [
            {id: 'unstacked', label: 'unstacked', value: 'off', icon: 'demo-area-vert'},
            {id: 'stacked', label: 'stacked', value: 'on', icon: 'demo-area-stack'}
        ];
        self.stackValueChange = function(selectedItem) {
            self.stackValue(selectedItem.value);
            return true;
        }
        self.orientationOptions = [
            {id: 'vertical', label: 'vertical', value: 'vertical', icon: 'demo-area-vert'},
            {id: 'horizontal', label: 'horizontal', value: 'horizontal', icon: 'demo-area-horiz'}
        ];
        self.orientationValueChange = function(selectedItem) {
            self.orientationValue(selectedItem.value);
            return true;
        }
    }
    var chartModel = new ChartModel();
    $(document).ready(
    function(){
            ko.applyBindings(chartModel, document.getElementById('chart-container'));
    }
    );
}); 