var users = require('./db/users');
var user = {  
  _id: 'jgo@example.com',
  _rev: process.argv[2],
  username: 'Jennifer',
  email: 'jgo@example.com',
  access_token: 'ewrewr45fdgdfsgdfg'
};
users.update(user, function(err) {  
  if (err) {
    console.error(err);
  }
  else {
    console.log('user updated');
  }
});