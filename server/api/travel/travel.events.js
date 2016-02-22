/**
 * Travel model events
 */

'use strict';

import {EventEmitter} from 'events';
var Travel = require('./travel.model');
var TravelEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TravelEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Travel.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    TravelEvents.emit(event + ':' + doc._id, doc);
    TravelEvents.emit(event, doc);
  }
}

export default TravelEvents;
