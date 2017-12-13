const db = require("../models");
var cheerio = require("cheerio");
var request = require("request");

// Defining methods for the ArticlesController
module.exports = {
  findAll: function(req, res) {
    db.Article
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  save: function(req, res) {
    db.Saved
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllSaved: function(req, res) {
    db.Saved
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Article
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    var article = {};
    request("http://www.graciemag.com/en/", function(err, request, html)
    {
        if(err){throw err}
        var $ = cheerio.load(html)
        $("div.post-two").each(function(i, element)
        {
            var title = $(element).find("div.iten-right").find("h3").find("a").text();
            var info = $(element).find("div.iten-right").find("p").text();
            var img = $(element).find("img").attr("src");
            var link = $(element).find("div.iten-right").find("h3").find("a").attr("href");
            

            var article = 
            {
                title: title,
                info: info,
                img: img,
                link: link
            }

            
        db.Article.create(article)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        });
            
    });
  },
  update: function(req, res) {
    db.Article
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
