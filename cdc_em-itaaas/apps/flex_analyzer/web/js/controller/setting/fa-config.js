/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['ojs/ojcore', 'knockout', 'jquery', '/analytics/js/common/ita-core.js',
    '/analytics/js/view_model/timeseries/ChartRegionModel.js',
    'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojchart','ojs/ojradioset'], function(oj, ko, $, ita, ChartRegionModel) {
    var faConfig={
        selectedMeasures:[],
        selectedDimensions:[]
    };
    ita.registerTool(
            {
                name: 'fa-config',
                init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                    // This will be called when the binding is first applied to an element
                    // Set up any initial state, event handlers, etc. here

                    function ChartTypeModel() {
                        this.chartTypeButtonClick = function(data, event) {
                            faConfig.chartType = event.currentTarget.id;
                            if (faConfig.chartType === 'line')
                                model.chartType('line');
                            else if (faConfig.chartType === 'bar')
                                model.chartType('bar');
                            else if (faConfig.chartType === 'area')
                                model.chartType('area');
                            return true;
                        };
                    }

                    var model = new ChartRegionModel();
                    var chartTypeModel = new ChartTypeModel();

                    function koBind() {
                        $.getJSON('/warehouse/metadata/subject/2162/cube/2171', function(resp) {
                            var measuresFromAPI = [];
                            $.each(resp.measures, function(i, measure) {
                                var measureNode = measure;
                                measureNode.title = measure.displayName;
                                measureNode.attr = {id: measure.name};
                                measuresFromAPI.push(measureNode);
                            });

                            ko.applyBindings({measures: measuresFromAPI}, $("#measure-selector")[0]);

                            var dimensionsFromAPI = [];
                            $.each(resp.dimensionRefs, function(i, roleDimension) {
                                var dimensionNode = roleDimension;
                                dimensionNode.title = roleDimension.roleDisplayName;
                                dimensionNode.attr = {id: roleDimension.roleName};

                                function getBaseDimension(baseDimensionName) {
                                    var baseDim;
                                    $.each(resp.dimensions, function(i, dimension) {
                                        if (dimension.name === baseDimensionName) {
                                            baseDim = dimension;
                                            return false;
                                        }
                                    });
                                    return baseDim;
                                }

                                var attrNodes = [];
                                var baseDimension = getBaseDimension(roleDimension.dimension);
                                $.each(baseDimension.attributes, function(i, attr) {
                                    var attrNode = attr;
                                    attrNode.title = attr.displayName;
                                    attrNode.attr = {id: attr.attributeId};
                                    attrNodes.push(attrNode);
                                });

                                dimensionNode.children = attrNodes;
                                dimensionsFromAPI.push(dimensionNode);
                            });
                            
                            ko.applyBindings({dimensions: dimensionsFromAPI}, $("#dimension-selector")[0]);
                        });

                        ko.applyBindings(model, $('#chart-container')[0]);
                        ko.applyBindings(chartTypeModel, $('#tabs')[0]);
                    }
                    function registerListeners(){
                        $("#measure-selector").on("ojselect", function(event, data) {
                            console.log(event);
                            var id = data.item.attr("id");     //  get tree node id attribute
                            //.if()
                            if(faConfig.selectedMeasures.indexOf(id))
                                faConfig.selectedMeasures.push(id);
                        });
                        $("#measure-selector").on( "ojdeselect", function( event, data ) {
                            var id = data.item.attr("id");     //  get tree node id attribute
                            var index=faConfig.selectedMeasures.indexOf(id);
                            if (index > -1) {
                                faConfig.selectedMeasures.splice(index, 1);
                            }
                        } );
                        
                        $("#dimension-selector").on("ojselect", function(event, data) {
                            console.log(event);
                            var id = data.item.attr("id");     //  get tree node id attribute
                            //.if()
                            if(faConfig.selectedDimensions.indexOf(id))
                                faConfig.selectedDimensions.push(id);
                        });
                        $("#dimension-selector").on( "ojdeselect", function( event, data ) {
                            var id = data.item.attr("id");     //  get tree node id attribute
                            var index=faConfig.selectedDimensions.indexOf(id);
                            if (index > -1) {
                                faConfig.selectedDimensions.splice(index, 1);
                            }
                        } );
                    }
                    function initTabs() {
                        $('#lowest-level-div').hide();
                        $('#check-by-month-of-year').change(function() {
                            if (this.checked) {
                                $('#lowest-level-div').show();
                            } else {
                                $('#lowest-level-div').hide();
                            }
                            faConfig.enableRollup=this.checked;
                        });

                        $('.top-bottom-editable :input').attr("disabled", true).css('background-color', '#B2B2B2');
                        $('.top-bottom .inputnumber').hide();
                        $('#check-show-only-topbottom').change(function() {
                            if (!this.checked) {
                                $('.top-bottom .inputnumber').hide();
                                $('.top-bottom-editable :input').each(function() {
                                    $(this).attr("disabled", true).css('background-color', '#B2B2B2');
                                });
                            }
                            else {
                                $('.top-bottom-editable :input').attr("disabled", false).css('background-color', 'white');
                                $('.top-bottom .inputnumber').show();
                            }
                        });

                        $('#include-select').change(function() {
                            if ($(this).val() === 'bottom') {
                                $('#top-or-bottom-span').html('Bottom');
                                $('#largest-or-smallest-span').html('Smallest');
                            } else {
                                $('#top-or-bottom-span').html('Top');
                                $('#largest-or-smallest-span').html('Largest');
                            }
                        });

                    }

                    $.get('/flex_analyzer/html/setting/fa-config.html', function(resp) {
                        var $container = $(element);
                        $container.append(resp);
                        koBind();
                        registerListeners();
                        initTabs();
                    });
                }
            }
    );
    return faConfig;
});