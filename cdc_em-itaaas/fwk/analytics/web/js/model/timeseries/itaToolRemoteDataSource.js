/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['knockout','jquery'], function(ko,$) {
     function itaToolRemoteDataSource(qdgURL,dsgURL,config) {
            this._qdgURL = qdgURL;
            this._dsgURL = dsgURL;
            this._config = config;
            
            this.getDataSetGroup = function(){
                if(this._dsgURL){
                    return $.ajax({
                        type: "GET", 
                        url: this._dsgURL,
                        async: false}).responseText;
                }
            };
            
            this.getQueryDescriptorGroup = function() {
                if(this._qdgURL){
                    return  JSON.parse( $.ajax({
                        type: "GET", 
                        url: this._qdgURL,
                        async: false}).responseText);
                }
            };
            
            this.getConfig = function(){
                return this._config;
            };
        }
        
    return itaToolRemoteDataSource;
});