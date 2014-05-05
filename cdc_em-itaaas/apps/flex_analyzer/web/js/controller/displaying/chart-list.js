/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['ojs/ojcore', 'knockout', 'jquery',
    '/analytics/js/model/timeseries/itaToolRemoteDataSource.js', 
    '/analytics/js/model/timeseries/itaTimeSeriesConfig.js',
    '/flex_analyzer/js/controller/setting/fa-config.js',
    'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojchart', 'jqueryui',
     '/analytics/js/controller/timeseries/timeseries-tool.js'],
        function(oj, ko, $, itaToolRemoteDataSource,itaTimeSeriesConfig, faConfig) {
            $(function() {
                $(".chart-list").sortable();

                function addChart() {
                    //print faConfig Content
                    for(var prop in faConfig){
                      console.log(prop+ " : " +faConfig[prop]);
                    }
                    var $newChart = $($("#chart-template").html());
                    $(".chart-list").append($newChart);
                    
                    var _itaTimeSeriesConfig=new itaTimeSeriesConfig(faConfig.chartType,faConfig.enableRollup);
                    console.log(_itaTimeSeriesConfig);
                    var _dataSource = new itaToolRemoteDataSource(
                            "/flex_analyzer/data/sample-qdg-fa.json",
                            "/db_resource_planner/data/dataSet1.json",
                            _itaTimeSeriesConfig);

                    ko.applyBindings({dataSource: _dataSource}, $newChart.get(0));
                        
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
                        document.location.href = "/worksheet/html/worksheet-list.html";
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
