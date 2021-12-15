const EventEmitter = require('events');
const emitter = new EventEmitter();
var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
  log(message) {
    this.emit('messageLogged', { id: 1, message: message });
  }
}

function log(message) {
  // Send an HTTP
  console.log(message);

  // Raise an event
  emitter.emit('messageLogged', { id: 1, url: 'http://' });
}

module.exports = Logger;
