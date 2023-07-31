"use strict";

const getHomePage = function(req, res, next) {
    res.render('index', { title: 'API Workshop' });
};


module.exports = {
    getHomePage
}