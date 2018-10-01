var extend = require('util')._extend;  
var messages = require('./db/messages');
var message = {  
  from: 'jennifer.alzate@example.com',
  to: 'jgo@example.com',
  subject: 'Test JGO',
  body: 'Test message body'
};
var count = 10;  
var left = count;
for(var i = 1 ; i <= count ; i ++) {  
  messages.create(message, created);
}
function created(err) {  
  if (err) {
    throw err;
  }
  if (-- left == 0) {
    console.log('%d messages inserted', count);
  }
}