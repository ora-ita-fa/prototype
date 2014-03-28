/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['ojs/ojcore', 'knockout', 'jquery', 'ita-core', 'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojchart'], function(oj, ko, $, ita) {


    ita.registerTool({
        name: 'rollup-table',
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            // This will be called when the binding is first applied to an element
            // Set up any initial state, event handlers, etc. here
            console.log(element);
            console.log(valueAccessor());
            console.log(allBindings);
            console.log(viewModel);
            console.log(bindingContext);
            $.get('rollup-table.html', function(resp) {
                $('head').append('<link rel="stylesheet" href="css/rollup-table.css">');
                
                var properties = valueAccessor();

                var $rollupTableRoot;

                var levels = [
                                {
                                    display: 'All Selected target',
                                    name: 'root'
                                },
                                {
                                    display: 'By COSTCENTER_Level',
                                    name: 'COSTCENTER'
                                },
                                {
                                    display: 'By DISPLAYNAME_Level',
                                    name: 'DISPLAYNAME'
                                }
                            ];
                var dimension = 'target';

                var rootLevel = 
                        {
                            dimension: dimension,
                            levels: levels,
                            currentLevel: {
                                name: 'root'
                            },
                            attributeValues: [
                                {
                                    value: 'all targets'
                                }
                            ]
                        };

                var costCenterLevel =
                        {
                            dimension: dimension,
                            levels: levels,
                            currentLevel: {
                                name: 'COSTCENTER'
                            },
                            attributeValues: [
                                {
                                    value: 'cost center 1'
                                },
                                {
                                    value: 'cost center 2'
                                },
                                {
                                    value: 'cost center 3'
                                }
                            ]
                        };

                var targetInstanceLevel = 
                        {
                            dimension: dimension,
                            levels: levels,
                            currentLevel: {
                                name: 'DISPLAYNAME'
                            },
                            attributeValues: [
                                {
                                    value: 'host1'
                                },
                                {
                                    value: 'database1'
                                },
                                {
                                    value: 'wls3'
                                },
                                {
                                    value: 'database7'
                                },
                                {
                                    value: 'database5'
                                },
                                {
                                    value: 'database6'
                                },
                                {
                                    value: 'database11'
                                },
                                {
                                    value: 'wls9'
                                }
                            ]       
                        };

                function redraw(model){
                    var el = $rollupTableRoot.find('.rollup-main').get(0);
                    ko.cleanNode(el);
                    model.drilldown = drilldown;
                    model.rollup = rollup;
                    ko.applyBindings(model, el);

                    var series = [];
                    $.each(model.attributeValues,function(i,attr){
                        series.push(attr.value);
                    });

                    var listener = properties.rollupDrilldown;
                    if(listener && typeof listener === 'function'){
                        listener(series);
                    }
                }

                function drilldown(currentLevel){
                    var mappedModel = null;
                    switch(currentLevel){
                        case 'root':
                            mappedModel = costCenterLevel;
                            break;
                        case 'COSTCENTER':
                            mappedModel = targetInstanceLevel;
                            break;
                    }
                    if(mappedModel !== null){
                        redraw(mappedModel);
                    }
                }

                function rollup(currentLevel){
                    var mappedModel = null;
                    switch(currentLevel){
                        case 'DISPLAYNAME':
                            mappedModel = costCenterLevel;
                            break;
                        case 'COSTCENTER':
                            mappedModel = rootLevel;
                            break;
                    }
                    if(mappedModel !== null){
                        redraw(mappedModel);
                    }
                }
                $rollupTableRoot = $(element);
                $rollupTableRoot.append(resp);
                
                redraw(targetInstanceLevel);
            });
        }
    });
});