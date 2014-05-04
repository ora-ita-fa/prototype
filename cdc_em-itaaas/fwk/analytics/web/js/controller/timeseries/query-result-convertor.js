/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['jQuery'], function($) {
  
    return {
        toDataSet: function(rawDataSet) {
            var qd = rawDataSet.queryDescriptor;
            if ($.isArray(qd.startingRollupLevels) && qd.startingRollupLevels.length > 0) {

            } else {
                var selectedAttributes = qd.selectionList;
                
            }
        }
    };
});