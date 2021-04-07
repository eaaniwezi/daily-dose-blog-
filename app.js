const express = require('express');
const mongoose = require('mongoose');
const articlesRouter = require('./routes/articles');
const app = express();

mongoose.connect('mongodb://localhost/dailyDose', { useNewUrlParser: true, useUnifiedTopology: true})

app.set('view engine', 'ejs');

app.use('/articles', articlesRouter)

app.get('/', function(req, res){
    const articles = [{
        title: "Testing",
        createdAt: new Date(),
        description: "vdsfujcbvbu"
    }]
    res.render('articles/index', {articles: articles});
});

app.listen(3000)