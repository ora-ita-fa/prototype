/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['knockout'], function(ko) {
    function itaForecastConfig() {
        this.forecastPeriod = 120;
        this.confidence = 95;
        this.selectedRegressionModel = "BESTFIT";
        this.showChannels = false;
        this.showThresholds = false;
        this.singleChartMode = false;
        this.showTotalTrend = true;
        
        return {
            "forecastPeriod": this.forecastPeriod,
            "confidence": this.confidence,
            "selectedRegressionModel": this.selectedRegressionModel,
            "showChannels": this.showChannels,
            "showThresholds": this.showThresholds,
            "singleChartMode": this.singleChartMode,
            "showTotalTrend": this.showTotalTrend
        };
    };
    return itaForecastConfig;
});
