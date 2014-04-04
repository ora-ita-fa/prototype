/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojtreemap'],
function(oj, ko, $)
{   
    function TreemapModel() {
        var self = this;
        var total = createNode("total", 301461533, 51);

        var reg_testDev = createNode("Test &amp; Dev", 54906297, 57);
        var reg_staging = createNode("Staging", 66336038, 49932);
        var reg_production = createNode("Production", 110450832, 47);
        var reg_missionCri = createNode("Mission Critical", 69768366, 56);

        addChildNodes(total, [reg_testDev, reg_staging, reg_production, reg_missionCri]);

        addChildNodes(reg_testDev, [
            createNode("db03", 3494487, 67),
            createNode("db87", 1316380, 46),
            createNode("db54", 6511176, 64),
            createNode("db52", 1315419, 63),
            createNode("db04", 1057381, 55),
            createNode("db09", 620414, 51),
            createNode("db98", 8650548, 68),
            createNode("db31", 19423896, 55),
            createNode("db30", 12516596, 49)    
        ]);

        addChildNodes(reg_staging, [
            createNode("db23", 6342469, 47),
            createNode("db91", 12785043, 55),
            createNode("db47", 10039208, 48),
            createNode("db63", 11511858, 47),
            createNode("db37", 5599420, 51),
            createNode("db21", 2978880, 68),
            createNode("db78", 2777835, 48),
            createNode("db71", 5188581, 57),
            createNode("db72", 5904382, 46),
            createNode("db88", 1772124, 47),
            createNode("db19", 639725, 65),
            createNode("db14", 796513, 44)
        ]);

        addChildNodes(reg_production, [
            createNode("db06", 863832, 57),
            createNode("db70", 588433, 56),
            createNode("db25", 18222420, 47),
            createNode("db42", 9497667, 49),
            createNode("db59", 5637418, 89),
            createNode("db47", 9045705, 45),
            createNode("db08", 4416867, 43),
            createNode("db72", 7721730, 70)
        ]);

        addChildNodes(reg_missionCri, [
            createNode("db64", 863832, 57),
            createNode("db16", 588433, 36),
            createNode("db37", 18222420, 47),
            createNode("db25", 9497667, 49),
            createNode("db20", 5637418, 89),
            createNode("db19", 9045705, 45),
            createNode("db16", 4416867, 43),
            createNode("db69", 7721730, 60)
        ]);

        function createNode(label, core_count, percent_change) {
            return {label: label,
                    id: label,
                    value: core_count,
                    color: getColor(percent_change),
                    shortDesc: "&lt;b&gt;"+label+"&lt;/b&gt;&lt;br/&gt;Active Core Count: "+core_count+"&lt;br/&gt;Percent Change: "+percent_change+"%"};
        }

        function getColor(percent_change) {
            if (percent_change < 47) // 1st quartile
                return '#ed6647';
            else if (percent_change < 50) // 2nd quartile
                return '#fad55c';
            else if (percent_change < 60) // 3rd quartile
                return '#68c182';
            else if (percent_change < 67) // 3rd quartile
                return '#FF9900';
            else
                return '#267db3';
        }

        function addChildNodes(parent, childNodes) {
            parent.nodes = [];
            for (var i = 0; i < childNodes.length; i++) {
                parent.nodes.push(childNodes[i]);
            }
        }

        self.nodeValues = ko.observableArray([total]);
        self.sortingValue = ko.observable('on');
        
        self.initialSorting = 'on';
        self.sortingOptions = ko.observableArray([
            {id: 'on', label: 'on', value: 'on'},
            {id: 'off', label: 'off', value: 'off'}
        ]);
        self.sortingChange = function(selectedItem) {
            self.sortingValue(selectedItem.value);
            return true;
        };
        
        self.otherThresholdValue = 0.1;
        self.otherThresholdChange = function() {
            return true;
        };
    }
    
    var treemapModel = new TreemapModel();
    
    $(document).ready(
	function()
	{
            ko.applyBindings(treemapModel, document.getElementById('treemap-container'));
	}
    );
});
