const express = require('express');
const Article = require('./../models/article');
const router = express.Router();

router.get('/new', function(req, res){
    res.render('articles/new');
});

router.post('/', function(req, res){
  //  res.render('articles/new');
});


module.exports = router