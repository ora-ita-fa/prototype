/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['knockout'], function(ko) {
     function itaToolLocalDataSource(qdg,dsg,config) {
            this._qdg = qdg;
            this._dsg = dsg;
            this._config = config;
            
            this.getDataSetGroup = function() {
                return this._dsg;
            };
            
            this.getQueryDescriptorGroup = function() {
                return this._qdg;
            };
            
            this.getConfig = function(){
                return this._config;
            };
        }
        
    return itaToolLocalDataSource;
});