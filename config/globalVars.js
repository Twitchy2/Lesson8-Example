//set up a blobal object to hold variables
//start with the db connection string

module.exports = {
  db: 'mongodb://localhost/test',
  db: 'mongodb://Twitch:Twitch@ds050189.mlab.com:50189/users',
  //db: 'MLabs databse goes here'
  secret: 'The power of (((them)))',
  ids: {
    facebook: {
      clientID: '1803242883249796',
      clientSecret: 'e03e13c6dc4ce48695e25f7c52bd5652',
      callbackURL: 'http://localhost:3000/facebook/callback'
    }
  }
};
