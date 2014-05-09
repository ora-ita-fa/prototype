/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['knockout','jquery'], function(ko,$) {

    function ForecastRegionModel(qd,config) {
        /* chart data */
        var self = this;
        var lineSeries = [];
        var lineGroups = [];
        this.yAxisSeries = ko.observableArray(lineSeries);
        this.xAxisValues = ko.observableArray(lineGroups);
        this.chartType = ko.observable('line');
        this.forecastArea = ko.observable({});
        this.yAxisData = ko.observable({});
        this.qd = qd;
        this.config = config;
        this.type = "Linear";
        this.qdObject = qd;
        this.qdIdentity = this.qdObject["MyQueryWS.QueryDefinition"].identity;   
        this.progressValue = ko.observable(-1);
        var configJsonString = JSON.stringify(this.config);
        var queryString="config="+configJsonString;
        var newLineSeries = new Array();
        var boundSeries = new Array();
        var xAxisDates = new Array();
        var numSeries;
        
        //var wsurl = "http://dhcp-1op1-1op2-west-144-25-170-26.usdhcp.oraclecorp.com:7101/MyEMWToolsWS-EmwTools-context-root/jersey/ita/analyticQuery/getForecastResults?qd="+this.qd+"&fc="+configJsonString;
        var wsurl = "/analytics/data/forecast/dataset2.json"
        
        console.log("Calling Forecast Web service...");
        $.getJSON(wsurl,function(data) {
        console.log("Data returned from web service....");
        numSeries = data.yAxisSeries.length;
        var forecastStartIndex;
        var forecastEndIndex;
        console.log(data);
        if(numSeries!=null)
        {
            for(i=0;i<numSeries;i++)
            {
//                newLineSeries.push({name : data.yAxisSeries[i].originalSeries.seriesLabel, items : data.yAxisSeries[i].originalSeries.values,type:'line',lineWidth:'0',markerDisplayed:"on"},
//                {name : data.yAxisSeries[i].forecastSeries.seriesLabel, items : data.yAxisSeries[i].forecastSeries.values});
              
             if(data.yAxisSeries[i].originalSeries!=null)   
                lineSeries.push({name : data.yAxisSeries[i].originalSeries.seriesLabel, items : data.yAxisSeries[i].originalSeries.values,type:'line',lineWidth:'0',markerDisplayed:"on"});
            
             lineSeries.push({name : data.yAxisSeries[i].forecastSeries.seriesLabel, items : data.yAxisSeries[i].forecastSeries.values});
                
                if(data.yAxisSeries[i].upperBound != null)
                {
                boundSeries.push({name : data.yAxisSeries[i].upperBound.seriesLabel, items : data.yAxisSeries[i].upperBound.values},
                    {name : data.yAxisSeries[i].lowerBound.seriesLabel, items : data.yAxisSeries[i].lowerBound.values});
                }        
            }
            forecastStartIndex = data.yAxisSeries[0].originalSeries.values.length;
            forecastEndIndex = data.yAxisSeries[0].forecastSeries.values.length;

        }
        else
            {
            lineSeries.push({name : data.yAxisSeries.originalSeries.seriesLabel, items : data.yAxisSeries.originalSeries.values,type:'line',lineWidth:'0',markerDisplayed:"on"},
                {name : data.yAxisSeries.forecastSeries.seriesLabel, items : data.yAxisSeries.forecastSeries.values});
                
            if(data.yAxisSeries.upperBound != null)
            {
            boundSeries.push({name : data.yAxisSeries.upperBound.seriesLabel, items : data.yAxisSeries.upperBound.values},
                {name : data.yAxisSeries.lowerBound.seriesLabel, items : data.yAxisSeries.lowerBound.values});
            }        
             
            forecastStartIndex = data.yAxisSeries.originalSeries.values.length;
            forecastEndIndex = data.yAxisSeries.forecastSeries.values.length-1;
        }

        for(i =0;i<data.xAxisValues.length;i++)
        {
            var dateValue= new Date(data.xAxisValues[i]);
            xAxisDates[i] = dateValue ; 
        }
        
        var shadedArea = {referenceObjects:[
                 {text:'Forecasted Portion', type: 'area', min: xAxisDates[forecastStartIndex], max: xAxisDates[forecastEndIndex], color: '#d3d3d3', displayInLegend: 'on', location: 'back'}    
                ]};
        
        for(var i=0;i<lineSeries.length;i++)    {
            newLineSeries.push(lineSeries[i]);
        }
        for(var i=0;i<boundSeries.length;i++)
            newLineSeries.push(boundSeries[i]);
        
        self.yAxisSeries(newLineSeries);
        self.xAxisValues(xAxisDates);
        self.forecastArea(shadedArea);
        $("#loading-pane").hide();
        $("#forecast-chart").show();
        
    }); 

    }

    return ForecastRegionModel;
});
