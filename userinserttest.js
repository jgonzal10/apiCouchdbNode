var users = require('./db/users');
var user = {  
  email: 'jgo@example.com',
  name: 'JENNIFER GONZALEZ',
  address: '1 Sesame Street'
};
users.create(user, function(err) {  
  if (err) {
    throw err;
  }
  else {
    console.log('user inserted');
  }
});