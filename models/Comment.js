var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// This is similar to a Sequelize model
var CommentSchema = new Schema({
  title: String,
  body: String
});

// This creates our model from the above schema, using mongoose's model method
var Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
