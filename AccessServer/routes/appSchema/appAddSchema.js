var Url = require('url');
var config = require('../../config');
var request = require('request');
var App = require('../../models/app').App;
var HttpError = require('../../error').HttpError;

// Создание Приложения
exports.post = function (req, res, next) {
    App.AddSchema(req.params.appId, req.body, function(err, schema){
        if(err) return next(err);

        res.send(schema);
    });
}