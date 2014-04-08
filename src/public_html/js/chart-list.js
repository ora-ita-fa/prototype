/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojchart', 'jqueryui',
    'timeseries-config', 'timeseries-tool'],
        function(oj, ko, $) {

            $(function() {
                $(".chart-list").sortable();

                function addChart() {
                    var $newChart = $($("#chart-template").html());
                    $(".chart-list").append($newChart);

                    $.get("/src/js/sample-qdg-fa.json", function(resp) {
                        ko.applyBindings({qdg: resp}, $newChart.get(0));
                    });
                }

                var slideDir = {direction: "up"};
                var renderred = false;
                function addChartFunction() {
                    $('.chart-list-main').toggle('slide', slideDir);
                    $('.timeseries-container').toggle('slide', slideDir, function() {
                        // render the timeseries after finishing slide effects,
                        // to prevent chart displaying problems.
                        if (!renderred) {
                            ko.applyBindings(null, $('.timeseries-region').get(0));
                            renderred = true;
                        }
                    });
                }
                $("#add-chart-button").click(addChartFunction);

                ko.applyBindings({
                    goBack: function() {
                        $('.timeseries-container').toggle('slide', slideDir);
                        $('.chart-list-main').toggle('slide', slideDir, function() {
                            addChart();
                        });
                    }
                }, $("#back-to-chart-list")[0]);

                function MenuModel() {
                    var self = this;
                    self.saveWorksheet = function() {
                        document.location.href = "worksheet-list.html";
                    };
                    self.selectedMenuItem = ko.observable("(None selected yet)");
                    self.menuItemSelect = function(event, ui) {
                        self.selectedMenuItem(ui.item.children("a").text());
                    };
                }
                //binding menu mode;
                for (var i = 0; i < $('#menu-container div').size(); i++) {
                    ko.applyBindings(new MenuModel(), $('#menu-container div')[i]);
                }

                function ButtonModel() {
                    this.setHalfChrome = function(event) {
                        $(event.target).parent().addClass("oj-button-half-chrome");
                    };
                    this.setNoChrome = function(event) {
                        $(event.target).parent().addClass("oj-button-no-chrome");
                    };
                }
                ;
                //binding view model to menu bar buttons 
                for (var i = 0; i < $('.menus-bar button').size(); i++) {
                    ko.applyBindings(new ButtonModel(), $('.menus-bar button')[i]);
                }

                addChartFunction();

            });


        });
