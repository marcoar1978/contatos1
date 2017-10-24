var dbConnection = require('../infra/dbConnection');

var api = {}; 


api.listaJson = function(req, res) {
    var connection = dbConnection();
     
      connection.query('select * from produto',function(err,results){
          res.json(results);
          console.log(results);
      });

      connection.end();

};


module.exports = api;

