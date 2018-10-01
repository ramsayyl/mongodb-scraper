var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// This is similar to a Sequelize model
var ArticleSchema = new Schema({
  headline: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },

  link: {
    type: String,
    required: true
  },
  // This allows us to populate the Article with a comment
  comment: {
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
