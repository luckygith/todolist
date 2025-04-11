const mongoose = require("mogoose");

const TodoSchema = new mongoose.Schema({
  task: String,
});

const TodoModel = mongoose.model("todos", TodoSchema);
module.exports = TodoModel;
