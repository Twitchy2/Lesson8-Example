var express = require('express');
var router = express.Router();
var Account = require('../models/account.js');
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lesson 9', message: 'Learning cool link things', user: req.user });
});


//get router
router.get('/register', function(req, res, next) {
  res.render('register', {
    'title': 'Register',
    user: req.user
  });
});
//postage
router.post('/register', function(req,res,next) {
  Account.register(new Account({ username: req.body.username }), req.body.password, function(err, account) {
      if (err) {
        console.log(err);
        res.redirect('/error');
      }
      else {
        res.redirect('/login');
      }
  });
});

router.get('/login', function(req, res, next) {

  //get messages, short hand version of just var messages;
var messages = req.session.messages || [];

//clear them
req.session.messages = [];

  if (req.user) {
    res.redirect('/team');
  }
  res.render('login', {
    'title': 'Login',
    message: messages,
    user: req.user
  });
});

router.post('/login', passport.authenticate('local',
 {
      successRedirect: '/teams',
      failureRedirect: '/login',
      failureMessage: 'Invalid Login' //auto stores in req.sessions.messages

}));

//get Log out
router.get ('/logout', function(req,res,next) {
  req.logout();
  res.redirect('/login');
});

//get facebook., show fb login popup
router.get('/facebook', passport.authenticate('facebook'));

//get facebook/callbackURL
router.get('/facebook/callback', passport.authenticate('facebook', {
   failureRedirect: '/login',
   failureMessage: 'Invalid Login'
}), function(req,res,next) {
  res.redirect('/teams');
});

module.exports = router;
