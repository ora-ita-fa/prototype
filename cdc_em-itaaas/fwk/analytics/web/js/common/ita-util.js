/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['jQuery'], function($) {
    return {
        QueryDescriptor:
                function(subject,
                        cube,
                        source,
                        aggregations,
                        selections,
                        groupByEntities,
                        rollupLowestLevels,
                        startingRollupLevels,
                        whereExpression,
                        havingExpression,
                        topNConfig,
                        identity) {
                    var queryDescriptor;
                    queryDescriptor.subject = subject;
                    queryDescriptor.cube = cube;
                    queryDescriptor.source = source;
                    queryDescriptor.aggregations = aggregations;
                    queryDescriptor.selections = selections;
                    queryDescriptor.groupByEntities = groupByEntities;
                    queryDescriptor.rollupLowestLevels = rollupLowestLevels;
                    queryDescriptor.startingRollupLevels = startingRollupLevels;
                    queryDescriptor.whereExpression = whereExpression;
                    queryDescriptor.havingExpression = havingExpression;
                    queryDescriptor.topNConfig = topNConfig;
                    queryDescriptor.identity = identity;
//                    $.parseJSON();
//                    JSON.stringify(queryDescriptor);
                    return queryDescriptor;
                }
        ,
        QueryDescriptorGroup: function() {
            return;
        },
        DataSet: function() {
            return;
        }
    }
});

