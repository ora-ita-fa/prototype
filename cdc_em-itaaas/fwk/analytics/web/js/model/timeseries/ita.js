/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['knockout', 'jquery'], function(ko, $) {
    return {
        LocalDataSource: function(qdg, dsg) {
            this._qdg = qdg;
            this._dsg = dsg;

            this.getDataSetGroup = function() {
                return this._dsg;
            };

            this.getQueryDescriptorGroup = function() {
                return this._qdg;
            };
        },
        RemoteDataSource: function(qdgURL, dsgURL) {
            this._qdgURL = qdgURL;
            this._dsgURL = dsgURL;

            this.getDataSetGroup = function() {
                $.get(_qdgURL, function(resp) {
                    return resp;
                });
            };

            this.getQueryDescriptorGroup = function() {
                return $.get(_dsgURL, function(resp) {
                });
            };
        }
    };

});
