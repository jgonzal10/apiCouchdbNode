var user = process.argv[2];
if (! user) {  
  console.error('please specify user');
  return;
}
var messages = require('./db/messages');
messages.getFor(user, function(err, messages) {  
  if (err) {
    throw err;
  }
  console.log('messages for user %s:', user);
  messages.forEach(printMessage);
});
function printMessage(message) {  
  console.log(message);
}