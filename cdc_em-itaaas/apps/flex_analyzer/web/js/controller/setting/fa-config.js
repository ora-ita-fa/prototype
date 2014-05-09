/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['ojs/ojcore', 'knockout',  'jquery', '/analytics/js/common/ita-core.js',
    '/analytics/js/view_model/timeseries/ChartRegionModel.js',
    '/flex_analyzer/js/view_model/setting/FaSetting.js',
    'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojchart','ojs/ojradioset'], function(oj, ko, $, ita, ChartRegionModel, FaSetting) {
    console.log(ko.mapping);
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



                    var model = new ChartRegionModel();

                    function koBind() {
                        $.getJSON('/warehouse/metadata/subjects', function(resp) {
                            var subjectsForOj = [];
                            $.each(resp, function() {
                                var subjectNode = this;
                                subjectNode.title = this.displayName;
                                subjectNode.attr = {
                                    id: this.id,
                                    type: "subject",
                                    displayName: this.displayName,
                                };
                                subjectsForOj.push(subjectNode);
                                
                                subjectNode.children = [];
                                $.each(this.cubes, function() {
                                    var cubeNode = this;
                                    cubeNode.title = this.displayName;
                                    cubeNode.attr = {
                                        id: this.id,
                                        subjectId: subjectNode.id,
                                        subjectDisplayName:subjectNode.displayName,
                                        displayName: this.displayName,
                                        type: "cube"
                                    };
                                    subjectNode.children.push(cubeNode);
                                });
                            });
                            ko.applyBindings({cubes:subjectsForOj, changeCube: changeCube},$(".cube-selector-container")[0]);
                        });
                        
                        function changeCube(event, ui) {
                            $node = $(ui.item[0]);
                            if ($node.attr("type") !== "cube") {
                                return;
                            }
                            var subjectId = $node.attr("subjectId");
                            var subjectDisplayName = $node.attr("subjectDisplayName");
                            var cubeId= $node.attr("id");
                            var cubeDisplayName= $node.attr("displayName");
                            
                            faSetting.settings.selectedCube.displayName(cubeDisplayName);
                            faSetting.settings.selectedCube.id(cubeId);
                            faSetting.settings.selectedSubject.displayName(subjectDisplayName);
                            faSetting.settings.selectedSubject.id(subjectId);
                            
                            ko.cleanNode($("#measure-selector")[0]);
                            $("#measure-selector").empty();
                            ko.cleanNode($("#dimension-selector")[0]);
                            $("#dimension-selector").empty();
                            
                            $.getJSON('/warehouse/metadata/subject/' + subjectId +'/cube/' + cubeId, function(resp) {
                                var measuresForOj = [];
                                $.each(resp.measures, function(i, measure) {
                                    var measureNode = measure;
                                    measureNode.title = measure.displayName;
                                    measureNode.attr = {id: measure.name};
                                    measuresForOj.push(measureNode);
                                });

                                ko.applyBindings({measures: measuresForOj}, $("#measure-selector")[0]);

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
                            $("#cube-selector-container").hide();
                        }

                        ko.applyBindings(model, $('#chart-container')[0]);

                        var chartTypeButtonClick = function(data, event) {
                            faConfig.chartType = event.currentTarget.id;
                            if (faConfig.chartType === 'line')
                                model.chartType('line');
                            else if (faConfig.chartType === 'bar')
                                model.chartType('bar');
                            else if (faConfig.chartType === 'area')
                                model.chartType('area');
                            return true;
                        };
                        var faSetting = new FaSetting({
                            chartTypeButtonClick: chartTypeButtonClick,
                            saveConfig: function() {
                                var json = (ko.toJSON(faSetting.settings));
                                console.log(json);
                                sessionStorage["region"] = json;
                            }
                        }, sessionStorage["region"]);
                        ko.applyBindings(faSetting, $('#tabs')[0]);

                        function showCubeSelector() {
                            $(".cube-selector-container").show().position({
                                at: "left top",
                                my: "left bottom",
                                of: '.cube-dropdown-button'
                            });
                        }
                        
                        //hide cube pick popup dialog click area out of dialog rather than mouse leave
                        $(".timeseries-main").click(function(event) {
                            if ($(event.target).parent().get( 0 ).id !== 'pick-cube-button' && !$(event.target).parents().filter('#cube-selector-container').length && event.target.id !== 'cube-selector-container' && event.target.id !== 'pick-cube-button') {
                                // close cube selector dialog
                                $("#cube-selector-container").hide();
                            }
                        });
//                        $(".cube-selector-container").mouseleave(function() {
//                            $(this).hide();
//                        });

                        ko.applyBindings({showCubeSelector: showCubeSelector,selectedCube:faSetting.settings.selectedCube},
                        $(".cube-dropdown-button")[0]);
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