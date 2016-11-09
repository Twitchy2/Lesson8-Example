
//link to mongoose
var mongoose = require('mongoose');

var teamSchema = new mongoose.Schema ({
  city: {
    type: String,
    required: 'City cannot be blank'
  },
  nickname: {
    type: String,
    required: 'Nickname cannot be blank'
  },
  wins: {
    type: Number,
    min: 0
  },
  losses: {
    type: Number,
    min: 0
  }
});

//make schema public
//not public class name is singular and starts with captial
module.exports = mongoose.model('Team', teamSchema)
