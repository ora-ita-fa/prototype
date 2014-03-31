/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['ojs/ojcore', 'knockout', 'jquery', 'ita-core', 'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojchart', 'ojs/ojtable', 'ojs/ojdatetimepicker'], function(oj, ko, $, ita) {
    function WorksheetModel() {
        var self = this;
        var worksheets = [
            {
                "Name": "worksheet1",
                "ApplicationType": "Flexible Analysis",
                "Description": "Test Worksheet1",
                "Created": "3/26/2014",
                "CreatedBy": "Sysman",
                "ExecutionStatus": "Completed",
                "LastExecutionTime": "3/26/2014",
                "LastExecutionUser": "Sysman",
                "Updated": "3/26/2014",
                "UpdatedBy": "Sysman",
                "Precalculated": "true"
            },
            {
                "Name": "worksheet2",
                "ApplicationType": "Flexible Analysis",
                "Description": "Test Worksheet2",
                "Created": "3/26/2014",
                "CreatedBy": "Sysman",
                "ExecutionStatus": "Completed",
                "LastExecutionTime": "3/26/2014",
                "LastExecutionUser": "Sysman",
                "Updated": "3/26/2014",
                "UpdatedBy": "Sysman",
                "Precalculated": "true"
            },
            {
                "Name": "worksheet3",
                "ApplicationType": "Flexible Analysis",
                "Description": "Test Worksheet3",
                "Created": "3/26/2014",
                "CreatedBy": "Sysman",
                "ExecutionStatus": "Completed",
                "LastExecutionTime": "3/26/2014",
                "LastExecutionUser": "Sysman",
                "Updated": "3/26/2014",
                "UpdatedBy": "Sysman",
                "Precalculated": "true"
            }
        ];
        self.datasource = new oj.TableDataSource(worksheets, {idAttribute: 'Name'});
    }
    function MenuModel() {
        var self = this;
        self.selectedMenuItem = ko.observable("(None selected yet)");
        self.menuItemSelect = function(event, ui) {
            self.selectedMenuItem(ui.item.children("a").text());
        };
    }
    var wm = new WorksheetModel;
    $(document).ready
            (
                    function()
                    {
                        //console.log($("#worksheet-menu")[0]);

                        ko.applyBindings(wm, $("#worksheet-table")[0]);
                        ko.applyBindings(new MenuModel(), $('#menu-container')[0]);
                        ko.applyBindings(null, $('#menuSet')[0]);
                        ko.applyBindings(null, $(".worksheet-search")[0]);
                    }
            );
});

