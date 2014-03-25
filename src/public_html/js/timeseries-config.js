/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojchart'], function(oj, ko, $) {

    function loadMeasures() {
        return {
            "data": [
                {
                    "title": "ActiveMem",
                    "attr": {"id": "ActiveMem"}
                },
                {
                    "title": "CPUIoWait",
                    "attr": {"id": "CPUIoWait"}
                },
                {
                    "title": "CPUKernel",
                    "attr": {"id": "CPUKernel"}
                },
                {
                    "title": "CPULoad",
                    "attr": {"id": "CPULoad"}
                },
                {
                    "title": "FreeMem",
                    "attr": {"id": "FreeMem"}
                },
                {
                    "title": "FreeSwap",
                    "attr": {"id": "FreeSwap"}
                },
                {
                    "title": "MemFree%",
                    "attr": {"id": "MemFree%"}
                },
                {
                    "title": "UsedSwap",
                    "attr": {"id": "UsedSwap"}
                },
                {
                    "title": "Records",
                    "attr": {"id": "Records"}
                },
                {
                    "title": "FreeSwap",
                    "attr": {"id": "FreeSwap"}
                },
                {
                    "title": "MemFree%",
                    "attr": {"id": "MemFree%"}
                },
                {
                    "title": "UsedSwap",
                    "attr": {"id": "UsedSwap"}
                },
                {
                    "title": "Records",
                    "attr": {"id": "Records"}
                },
                {
                    "title": "UsedSwap",
                    "attr": {"id": "UsedSwap"}
                },
                {
                    "title": "Records",
                    "attr": {"id": "Records"}
                },
                {
                    "title": "FreeSwap",
                    "attr": {"id": "FreeSwap"}
                },
                {
                    "title": "MemFree%",
                    "attr": {"id": "MemFree%"}
                },
                {
                    "title": "UsedSwap",
                    "attr": {"id": "UsedSwap"}
                },
                {
                    "title": "Records",
                    "attr": {"id": "Records"}
                }
            ]
        };
    }

    function loadDimensions() {
        return {
            "data": [
                {
                    "title": "target",
                    "attr": {"id": "target"},
                    "children": [
                        {
                            "title": "Lifecycle Status",
                            "attr": {"id": ""}
                        },
                        {
                            "title": "Target GUID",
                            "attr": {"id": ""}
                        },
                        {
                            "title": "Contact",
                            "attr": {"id": ""}
                        },
                        {
                            "title": "Department",
                            "attr": {"id": ""}
                        },
                        {
                            "title": "Agent URL",
                            "attr": {"id": ""}
                        },
                        {
                            "title": "Organization ID",
                            "attr": {"id": ""}
                        },
                        {
                            "title": "Line of business",
                            "attr": {"id": ""}
                        },
                        {
                            "title": "Property 3",
                            "attr": {"id": ""}
                        },
                        {
                            "title": "Target Type",
                            "attr": {"id": ""}
                        }
                    ]
                },
                {
                    "title": "degenerate dim",
                    "attr": {"id": "degenerate dim"},
                    "children": [
                        {
                            "title": "// TODO",
                            "attr": {"id": ""}
                        },
                        {
                            "title": "Cost Center",
                            "attr": {"id": ""}
                        },
                        {
                            "title": "Lifecycle Status",
                            "attr": {"id": ""}
                        },
                        {
                            "title": "Target GUID",
                            "attr": {"id": ""}
                        }
                    ]
                },
                {
                    "title": "End Time",
                    "attr": {"id": "End Time"},
                    "children": [
                        {
                            "title": "// TODO",
                            "attr": {"id": ""}
                        },
                        {
                            "title": "Cost Center",
                            "attr": {"id": ""}
                        },
                        {
                            "title": "Lifecycle Status",
                            "attr": {"id": ""}
                        },
                        {
                            "title": "Target GUID",
                            "attr": {"id": ""}
                        }
                    ]
                },
                {
                    "title": "Start Time",
                    "attr": {"id": "Start Time"},
                    "children": [
                        {
                            "title": "// TODO",
                            "attr": {"id": ""}
                        },
                        {
                            "title": "Cost Center",
                            "attr": {"id": ""}
                        },
                        {
                            "title": "Lifecycle Status",
                            "attr": {"id": ""}
                        },
                        {
                            "title": "Target GUID",
                            "attr": {"id": ""}
                        }
                    ]
                },
                {
                    "title": "Time",
                    "attr": {"id": "Time"},
                    "children": [
                        {
                            "title": "// TODO",
                            "attr": {"id": ""}
                        }
                    ]
                },
                {
                    "title": "GEO Component Dimension",
                    "attr": {"id": "GEO Component Dimension"},
                    "children": [
                        {
                            "title": "// TODO",
                            "attr": {"id": ""}
                        }
                    ]
                },
                {
                    "title": "rac database",
                    "attr": {"id": "rac databas"},
                    "children": [
                        {
                            "title": "// TODO",
                            "attr": {"id": ""}
                        }
                    ]
                },
                {
                    "title": "rac node",
                    "attr": {"id": "rac node"},
                    "children": [
                        {
                            "title": "// TODO",
                            "attr": {"id": ""}
                        }
                    ]
                }
            ]
        };
    }

    function ChartModel() {
        /* chart data */
        var lineSeries = [{name: "Series 1", items: [74, 62, 70, 76, 66]},
            {name: "Series 2", items: [50, 38, 46, 54, 42]},
            {name: "Series 3", items: [34, 22, 30, 32, 26]},
            {name: "Series 4", items: [18, 6, 14, 22, 10]},
            {name: "Series 5", items: [3, 2, 3, 3, 2]}];
        var lineGroups = ["Group A", "Group B", "Group C", "Group D", "Group E"];
        this.lineSeriesValue = ko.observableArray(lineSeries);
        this.lineGroupsValue = ko.observableArray(lineGroups);
        this.chartType = ko.observable('line');

    }

    function ChartTypeModel() {
        this.chartTypeButtonClick = function(data, event) {
            var currentType = event.currentTarget.id;
            if (currentType === 'line')
                model.chartType('line');
            else if (currentType === 'bar')
                model.chartType('bar');
            else if (currentType === 'area')
                model.chartType('area');
            return true;
        };
    }

    var model = new ChartModel();
    var chartTypeModel = new ChartTypeModel();

    function koBind() {
        ko.applyBindings({measures: loadMeasures()}, $("#measure-selector")[0]);
        ko.applyBindings({dimensions: loadDimensions()}, $("#dimension-selector")[0]);
        ko.applyBindings(model, $('#chart-container')[0]);
        ko.applyBindings(chartTypeModel, $('#tabs')[0]);
    }

    function renderTo(containerId) {
        if (containerId && typeof containerId === 'string') {
            var $container = $("#" + containerId);
            if ($container && $container.length === 1) {
                $.get('timeseries-config.html', function(resp) {
                    $('head').append('<link rel="stylesheet" href="css/timeseries-config.css">');
                    $container.append(resp);
                    koBind();
                });
            }
        }
    }

    return {
        renderTo: renderTo,
        configs:{
            getChartType:function(){
                return model.chartType();
            }
        }
    };
});