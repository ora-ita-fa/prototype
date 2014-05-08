/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * @deprecated web database is not html5 specified. use localStorage api instead.
 * @returns {unresolved}
 */
require([], function() {
    if (!openDatabase) {
        console.error("Web database is not supported!");
    } else {
        var db = openDatabase("fa", "1.0", "Web database for EMITAaaS", 2 * 1024 * 1024);
        console.log(db);
        // init tables
        var executeSql = function(sql) {
            var queryResults;
            db.transaction(function(tx) {
                tx.executeSql(
                        sql,
                        function(tx, results) {
                            console.log(results);
                        },
                        function(tx, errors) {
                            console.warn(errors);
                        });
            });
            return queryResults;
        };
        
        executeSql('create table if not exists worksheet \
                    (worksheet_name text)');

        executeSql('create table if not exists worksheet_region \
                    (region_name, worksheet_name, region_json)');

        executeSql('insert into worksheet ("Test Worksheet")');
        executeSql('insert into worksheet_region ("Test Region","Test Worksheet", "test json")');

        console.log(executeSql("select * from worksheet_region"));

        return db;
    }
});