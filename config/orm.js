var connection = require("../config/connection.js");

var orm = {
    selectAndOrder: function (whatToSelect, table, orderCol) {
        var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
        connection.query(queryString, [whatToSelect, table, orderCol], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;