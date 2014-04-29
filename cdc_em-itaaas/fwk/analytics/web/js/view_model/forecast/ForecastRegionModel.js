/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['knockout'], function(ko) {

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
        
//        this.config = {
//                "forecastPeriod" : 60,
//                "confidence" : 95,
//                "selectedRegressionModel" : "LINEAR",
//                "showChannels" : false,
//                "showThresholds" : false,
//                "singleChartMode" : false,
//                "showTotalTrend" : true
//            };
        var configJsonString = JSON.stringify(this.config);
        var queryString="config="+configJsonString;
        var newLineSeries = new Array();
        var boundSeries = new Array();
        var xAxisDates = new Array();
        var numSeries;
        //var wsurl = "http://localhost:8080/ITAGlassFish/webresources/forecast/"+self.type+"?"+queryString;
        //var wsurl = "http://dhcp-1op1-1op2-west-144-25-170-26.usdhcp.oraclecorp.com:7101/MyEMWToolsWS-EmwTools-context-root/jersey/ita/analyticQuery/getForecastResults?qd={%22MyQueryWS.QueryDefinition%22:{%22subjectName%22:%22TVMDWFSUBJECT%22,%22cubeName%22:%22TVMDWFLOAD%22,%22sourceReference%22:{%22sdk.emwanalyticstools.model.query.CubeSourceReference%22:{%22alias%22:null,%22cubeName%22:%22TVMDWFLOAD%22,%22cubeTableName%22:%22EMWC_TVMDWFLOAD%22}},%22aggregations%22:{%22java.util.LinkedHashSet%22:[{%22sdk.emwanalyticstools.model.query.MeasureAggregation%22:{%22function%22:%22AVG%22,%22alias%22:%22avgActiveMem%22,%22functionParameters%22:null,%22measureDef%22:{%22MyQueryWS.MeasureDefinition%22:{%22name%22:%22ACTIVE%20MEMORY%22,%22displayName%22:%22ActiveMem%22,%22cubeColumn%22:%22ACTIVE_MEMORY%22,%22measureType%22:1,%22unitType%22:%22byte%22,%22metricGroup%22:null,%22targetType%22:null,%22metricColumn%22:null,%22defaultAggregation%22:1,%22parentCubeName%22:null}}}},{%22sdk.emwanalyticstools.model.query.AggregationAggregation%22:{%22function%22:%22TRUNC_FMT%22,%22alias%22:%22EMWC_TVMDWFLOAD_START_TIME_ID%22,%22functionParameters%22:{%22java.util.ArrayList%22:[%22%27mm%27%22]},%22aggregation%22:{%22sdk.emwanalyticstools.model.query.DateAggregation%22:{%22function%22:%22MIN%22,%22alias%22:null,%22functionParameters%22:null,%22dimensionName%22:%22TIME%22,%22cubeName%22:%22TVMDWFLOAD%22}},%22treatAsMeasure%22:false}}]},%22selections%22:null,%22groupByEntities%22:{%22java.util.LinkedHashSet%22:[{%22sdk.emwanalyticstools.model.query.GroupByLevelEntity%22:{%22withRollup%22:false,%22levelDef%22:{%22MyQueryWS.LevelDefinition%22:{%22subjectName%22:null,%22cubeName%22:null,%22name%22:%22TARGETLEVELCOSTCENTER%22,%22displayName%22:%22Cost%20Center%22,%22description%22:%22Cost%20Center%22,%22levelOrder%22:2,%22createdDate%22:{%22java.sql.Date%22:%222014-03-22%22},%22createdBy%22:%22SYSEMW%22,%22includeParentIdentifiers%22:0,%22parentHierarchyName%22:%22TARGETHIERBYCOSTCENTER%22,%22parentDimName%22:%22TARGET%22,%22Attributes%22:{%22java.util.ArrayList%22:[{%22MyQueryWS.AttributeDefinition%22:{%22name%22:%22COSTCENTER%22,%22displayName%22:%22Cost%20Center%22,%22dataType%22:0,%22precision%22:1024,%22dimensionColumn%22:%22COSTCENTER%22,%22naturalKey%22:0,%22naturalKeyPos%22:0,%22levelIdentifier%22:1,%22levelDescriptor%22:1,%22defaultHierarchyName%22:%22TARGETHIERBYCOSTCENTER%22,%22defaultLevelName%22:%22TARGETLEVELCOSTCENTER%22,%22disableGroupBy%22:false,%22levelOrder%22:0,%22parentDimName%22:%22TARGET%22,%22parentLevelName%22:%22TARGETLEVELCOSTCENTER%22}}]}}},%22levelAttributes%22:{%22java.util.LinkedHashSet%22:[{%22sdk.emwanalyticstools.model.query.AttributeSelection%22:{%22alias%22:%22TARGET_COSTCENTER%22,%22function%22:null,%22functionParameters%22:null,%22attrDef%22:{%22MyQueryWS.AttributeDefinition%22:{%22name%22:%22COSTCENTER%22,%22displayName%22:%22Cost%20Center%22,%22dataType%22:0,%22precision%22:1024,%22dimensionColumn%22:%22COSTCENTER%22,%22naturalKey%22:0,%22naturalKeyPos%22:0,%22levelIdentifier%22:1,%22levelDescriptor%22:1,%22defaultHierarchyName%22:%22TARGETHIERBYCOSTCENTER%22,%22defaultLevelName%22:%22TARGETLEVELCOSTCENTER%22,%22disableGroupBy%22:false,%22levelOrder%22:0,%22parentDimName%22:%22TARGET%22,%22parentLevelName%22:%22TARGETLEVELCOSTCENTER%22}}}}]}}},{%22sdk.emwanalyticstools.model.query.GroupByLevelEntity%22:{%22withRollup%22:false,%22levelDef%22:{%22MyQueryWS.LevelDefinition%22:{%22subjectName%22:null,%22cubeName%22:null,%22name%22:%22TIMELEVELMONTHOFYEAR%22,%22displayName%22:%22Month%20of%20Year%22,%22description%22:%22Month%20of%20year%22,%22levelOrder%22:3,%22createdDate%22:{%22java.sql.Date%22:%222014-03-22%22},%22createdBy%22:%22SYSEMW%22,%22includeParentIdentifiers%22:1,%22parentHierarchyName%22:%22TIMEHIERBYMONTHOFYEAR%22,%22parentDimName%22:%22START_TIME%22,%22Attributes%22:{%22java.util.ArrayList%22:[{%22MyQueryWS.AttributeDefinition%22:{%22name%22:%22MONTHOFYEAR%22,%22displayName%22:%22Month%20of%20year%22,%22dataType%22:0,%22precision%22:2,%22dimensionColumn%22:%22MONTHOFYEAR%22,%22naturalKey%22:0,%22naturalKeyPos%22:0,%22levelIdentifier%22:1,%22levelDescriptor%22:1,%22defaultHierarchyName%22:%22TIMEHIERBYMONTHOFYEAR%22,%22defaultLevelName%22:%22TIMELEVELMONTHOFYEAR%22,%22disableGroupBy%22:false,%22levelOrder%22:0,%22parentDimName%22:%22TIME%22,%22parentLevelName%22:%22TIMELEVELMONTHOFYEAR%22}}]}}},%22levelAttributes%22:{%22java.util.LinkedHashSet%22:[{%22sdk.emwanalyticstools.model.query.AttributeSelection%22:{%22alias%22:%22START_TIME_MONTHOFYEAR%22,%22function%22:null,%22functionParameters%22:null,%22attrDef%22:{%22MyQueryWS.AttributeDefinition%22:{%22name%22:%22MONTHOFYEAR%22,%22displayName%22:%22Month%20of%20year%22,%22dataType%22:0,%22precision%22:2,%22dimensionColumn%22:%22MONTHOFYEAR%22,%22naturalKey%22:0,%22naturalKeyPos%22:0,%22levelIdentifier%22:1,%22levelDescriptor%22:1,%22defaultHierarchyName%22:%22TIMEHIERBYMONTHOFYEAR%22,%22defaultLevelName%22:%22TIMELEVELMONTHOFYEAR%22,%22disableGroupBy%22:false,%22levelOrder%22:0,%22parentDimName%22:%22TIME%22,%22parentLevelName%22:%22TIMELEVELMONTHOFYEAR%22}}}}]}}}]},%22rollupLowestLevels%22:{%22java.util.LinkedHashSet%22:[]},%22startingRollupLevels%22:{%22java.util.LinkedHashSet%22:[]},%22hasDynamicHierarchy%22:false,%22dynHierList%22:null,%22whereExpression%22:{%22sdk.emwanalyticstools.model.query.FilterExpression%22:{%22conjunction%22:%22AND%22,%22filters%22:{%22java.util.LinkedHashSet%22:[{%22sdk.emwanalyticstools.model.query.TimeRangeFilter%22:{%22startDate%22:{%22java.util.Date%22:1334765754904},%22endDate%22:{%22java.util.Date%22:1397837754904}}}]}}},%22havingExpression%22:null,%22identity%22:%22query-720%22,%22topnConfig%22:null,%22parameters%22:null}}&fc={%22forecastPeriod%22:60,%22confidence%22:95,%22selectedRegressionModel%22:%22LINEAR%22,%22showChannels%22:false,%22showThresholds%22:false,%22singleChartMode%22:false,%22showTotalTrend%22:true}";
       // var wsurl = "http://dhcp-1op1-1op2-west-144-25-170-26.usdhcp.oraclecorp.com:7101/MyEMWToolsWS-EmwTools-context-root/jersey/ita/analyticQuery/getForecastResults?qd="+this.qd+"&fc="+configJsonString;
        var wsurl = "/analytics/data/forecast/dataset.json"
        console.log("Calling Forecast Web service...");
        
        $.getJSON(wsurl,function(data) {
        
        console.log("Data returned from web service....");
        numSeries = data.yAxisSeries.length;
        if(numSeries == null)
            numSeries=1;
        for(i=0;i<numSeries;i++)
        {
            newLineSeries.push({name : data.yAxisSeries[i].originalSeries.seriesLabel, items : data.yAxisSeries[i].originalSeries.values,type:'line',lineWidth:'0',markerDisplayed:"on"},
                {name : data.yAxisSeries[i].forecastSeries.seriesLabel, items : data.yAxisSeries[i].forecastSeries.values});
                
            if(data.yAxisSeries[i].upperBound != null)
            {
            boundSeries.push({name : data.yAxisSeries[i].upperBound.seriesLabel, items : data.yAxisSeries[i].upperBound.values},
                {name : data.yAxisSeries[i].lowerBound.seriesLabel, items : data.yAxisSeries[i].lowerBound.values});
            }        
        }
        var monthNames = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
        for(i =0;i<data.xAxisValues.length;i++)
        {
            var dateValue= new Date(data.xAxisValues[i]);
            xAxisDates[i] = dateValue ;// monthNames[dateValue.getMonth()]+" "+dateValue.getDate()+","+dateValue.getFullYear().toString().substr(2,2);
        }
        
        var forecastStartIndex = data.yAxisSeries[0].originalSeries.values.length;
        var forecastEndIndex = data.yAxisSeries[0].forecastSeries.values.length-1;
        var shadedArea = {referenceObjects:[
                 {text:'Forecasted Portion', type: 'area', min: xAxisDates[forecastStartIndex], max: xAxisDates[forecastEndIndex], color: '#d3d3d3', displayInLegend: 'on', location: 'back'}    
                ]};
        
        for(var i=0;i<boundSeries.length;i++)
            newLineSeries.push(boundSeries[i]);
        
        self.yAxisSeries(newLineSeries);
        self.xAxisValues(xAxisDates);
        self.forecastArea(shadedArea);
        $("#loading-pane").hide();
        $("#forecast-chart").show();
        //}
    }); 

    }

    return ForecastRegionModel;
});
