var Thing = require('../models/thing');

module.exports.controller = (app) => {
    // here enter the Controller logics.

    /**
    * This make a request to / and use that
    * model thing.
    *  
    * in laravel, this is a method, like
    * 
    * public function index() {
    *       $data = [];
    *       return view('home', $data);
    *
    *     }
    *
    *    then in routes, this will be set in / to index method
    *    and passing datas.
    *    
    *   so when I want create other method,
    *   I just pass the route and what that route do.
    */

    app.get('/', function(req, res) {
        var rst = {};
        res.dataInfo = {}
        Thing.Stuff.find('all', (err, rows, fields) => {
           res.dataInfo.info = rows;
            res.render('home/home', res.dataInfo)
        })
    });
}