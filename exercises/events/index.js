// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  // Register an event handler
  constructor() {
    this.events = {};
  }
  on(eventName, callback) {
    this.events[eventName] ? this.events[eventName].push(callback) :
      this.events[eventName] = [callback];
    // if (this.events[eventName])
    //   this.events[eventName].push(callback);
    // else
    //   this.events[eventName] = [callback];
  }
  // the idea here is to create an event and i dont know yet
  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      for (const cb of this.events[eventName]) {
        cb();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName];
  }
}

module.exports = Events;
