module.exports = function(){
  var config = require('../configurations/config');
  var mongoose = require('mongoose');
  var log = require('tracer').colorConsole(config.loggingConfig);

  //Mongo DB Database Connection
  mongoose.connect(config.mongoDBconnect, { useNewUrlParser: true, useCreateIndex: true }, function(err) {
      if (err) {
        log.error(err);
      }
    });
};
