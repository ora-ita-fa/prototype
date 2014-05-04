/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['knockout'], function(ko) {
    function itaTimeSeriesConfig(chartType,enableRollup) {
        this.chartType =(chartType? chartType:'line');
        this.enableRollup=(enableRollup? enableRollup:false)
        
        return {
            chartType: this.chartType,
            enableRollup: this.enableRollup
        };
    };
    return itaTimeSeriesConfig;
});


