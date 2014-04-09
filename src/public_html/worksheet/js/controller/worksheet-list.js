/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojchart', 'ojs/ojtable', 'ojs/ojdatetimepicker','ojs/ojdatacollection-common','jqueryui'], function(oj, ko, $, ita) {
    $(function() {
        var worksheetData;
        var worksheet;
        $.getJSON("/worksheet/data/worksheet-list.json",function(data){
            worksheetData=data;
            worksheet = {
                datasource : new oj.ArrayTableDataSource(data, {idAttribute: 'Name'})
            };
            $(".worksheet-list").append($("#worksheet-template").html());
            
        var availableWorksheets = [ ];
            for (var key in data) {
                console.log(data[key].Name);
                var value=data[key].Name;
                availableWorksheets.push(data[key].Name.substring(value.indexOf('>')+1, value.lastIndexOf('</a>')));
//            $.each(data[key], function(k, arrayItem) {
//              console.log(k);
//            });
        }
    $( "#inputcontrol" ).autocomplete({
      source: availableWorksheets
    });
            ko.applyBindings(worksheet, $("#worksheet-table")[0]);
        });
              
        
        $.getJSON("/worksheet/data/worksheet-list-app-type.json", function(data) {
            var wsMenu = (function() {
                return {
                    selectedMenuItem: ko.observable("(None selected yet)"),
                    menuItemSelect: function(event, ui) {
                        this.selectedMenuItem(ui.item.children("a").text());
                    },
                    appTypes: data
                };
            })(); 
            
            var searchModel={
                appTypes: data,
                filteredWorksheetName: ko.observable(),
                selectedAppType: ko.observableArray([]),
                handleSearchEvent: function(data1, event) {
                    var self = this;
                    var newData = $.grep(worksheetData, function(element, index) {
                        if (self.filteredWorksheetName() != null)
                            if (element.Name.indexOf(self.filteredWorksheetName()) === -1)
                                return false;
                        if ( self.selectedAppType()[0] != null) {
                            if (element.ApplicationTypeID !== self.selectedAppType()[0])                                
                                return false;

                        }
                        return true; // retain appropriate elements
                    });
                    //   var arrayRowSet=new ArrayRowSet(worksheetData)  ;
                 //   worksheet.datasource.reset(worksheetData);
                  // worksheet.datasource.data=newData;
                    worksheet.datasource=new oj.ArrayTableDataSource(newData, {idAttribute: 'Name'});
                
                    
                   // ko.cleanNode($("#worksheet-table")[0]);
                    $(".worksheet-list").html($("#worksheet-template").html());
                    //ko.cleanNode($("#worksheet-table")[0]);
//                    var $worksheetTable = $("#worksheet-table").empty().removeClass('oj-table');
//                    $(".worksheet-list").append($worksheetTable());
//                    $(".worksheet-list>.oj-table-container").remove();
//                    ko.applyBindings(worksheet, $("#worksheet-table")[0]);
//                    this.selectedAppType(this.selectedAppType().push("abc"));
                    ko.applyBindings(worksheet, $("#worksheet-table")[0]);
                },
                handleShowSearchEvent: function(data, event){
                    $("#searchForm").toggle( 'blind', null, 500 );
                }
            };
            
            ko.applyBindings(wsMenu, $('#menu-container')[0]);
            ko.applyBindings(null, $('#menuSet')[0]);
            ko.applyBindings(searchModel, $(".worksheet-search")[0]);
        });
    });
});

