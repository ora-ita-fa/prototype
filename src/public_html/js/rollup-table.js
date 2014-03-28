/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['ojs/ojcore', 'knockout', 'jquery', 'ita-core', 'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojchart'], function(oj, ko, $, ita) {


    var fakeLevelValueMapping = {
        'All Selected target': ['Center1', 'Center2', 'Center3'],
        'Center1': ['host1', 'database1', 'wls3', 'host4', 'wls7', 'database7', 'database4'],
        'Center2': ['host2', 'wls3', 'database6', 'database5'],
        'Center3': ['wls9', 'database11']
    };

    function RollupTableModel() {
        this.levels = ['All Selected target', 'By COSTCENTER_Level', 'By DISPLAYNAME_Level'];
    }

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
                
                var $el = $(element);
                $el.append(resp);
                ko.applyBindings({
                    dimension: 'target',
                    levels: [
                        {
                            display: 'All Selected target',
                            name: null
                        },
                        {
                            display: 'By COSTCENTER_Level',
                            name: 'COSTCENTER'
                        },
                        {
                            display: 'By DISPLAYNAME_Level',
                            name: 'DISPLAYNAME'
                        }
                    ],
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
                },
                $el.find('.rollup-main').get(0));
            });
        }
    });
});