const mongoose = require('mongoose');

const {Schema} = mongoose;

let articleSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 50,
  },
  author: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 15,
  },

  body: {
    type: String,
    required: true,
    minlength: 10,
  },
  url: {
    type: String,
    required: true,
    minlength: 15,
    maxlength: 255,
  },
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
  tags: [Schema.Types.ObjectId],
});

const Article = mongoose.model('article', articleSchema);

module.exports = Article;
