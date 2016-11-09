var mongoose = require('mongoose');

var plm = require('passport-local-mongoose');

var AccountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: 'Username is needed'

  },
  password: {
    type: String
  }
});

//connect to passport localStrategy
AccountSchema.plugin(plm);
//make this class public
module.exports = mongoose.model('Account', AccountSchema);
