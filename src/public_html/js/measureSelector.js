/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojcomponents'], function(oj, ko, $){
    return (function(){
    
        function MeasureSelector(){
            this.currentValue = ko.observable(-20);
        }
        measure = new MeasureSelector();

        $(function(){
            ko.applyBindings(measure, document.getElementById('form1'));
        }); 
        
        return {
            measure:measure,
            /**
             * 
             * @param {type} qd
             * @param {type} eventHandler
             * @returns {undefined}
             */
            popup:function(qd,eventHandler){
//                setTimeout(function(){
//                    var dataset = "query finished...";
//                    eventHandler(dataset,"");
//                },5000);
                $.get("measure.segment.html",function(resp){
                    $("body").append(resp);
                    $("#inputnumber-id2").ojInputNumber();
                });
//                eventHandler("ok",["cpu load","active mem"]);
            }
        };
        
        
    
    })();
});