'use strict';
const postHandler = require('./posts-handler');
const util = require('./handler-util');


function route(req, res) {
    switch(req.url){
        case '/posts':
        postHandler.handle(req, res);
            break;
        case '/logout':
        util.handleLogout(req, res);
            break;
        default:
        util.handleNotFound(req,res);
            break;
    }
} // function route()の終わり


module.exports = {
    route: route
};
