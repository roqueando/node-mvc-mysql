var model = require('../model');

var Stuff = new model.db({
    tableName: "stuff"
});

exports.Stuff = Stuff;
