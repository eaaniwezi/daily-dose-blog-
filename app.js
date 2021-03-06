const express = require("express");
const mongoose = require("mongoose");
const Article = require("./models/article");
const articlesRouter = require("./routes/articles");
const methodOverride = require("method-override");
const app = express();

mongoose.connect("mongodb://localhost/dailyDose", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.get("/", async function (req, res) {
  const articles = await Article.find().sort({
    createdAt: "desc",
  });
  res.render("articles/index", { articles: articles });
});

// app.use("/articles", articlesRouter);
// app.listen(3000);

app.use("/articles", articlesRouter);
// jgsfgh
app.listen(3000);
