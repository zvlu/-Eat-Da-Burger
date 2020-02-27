var connection = require("./connection");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err,res){
            if (err) {
                throw err;
            }
            cb(res)
        });
           
    },

    insertOne: function(table,cols,vals){
        var queryString = "INSERT INTO ?? (??) VALUES ?"
        connection.query(queryString,[table, cols, vals],function(err,res){
            if(err) {
                throw err;
            }
            cb(res);
        });
    },

    updateOne: function(table, newCol, newVal, condition, oldVal){
        var queryString = "UPDATE ?? SET ??  = ? WHERE ?? = ?";
        connection.query(queryString, [table, newCol, newVal, condition, oldVal], function(err,res){
            if (err) {
                throw err;
            }
            cb(res)
        });
    }

};

module.exports = orm;