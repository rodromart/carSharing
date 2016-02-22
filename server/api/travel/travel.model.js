'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
import {Schema} from 'mongoose';
User = require "./User"

var TravelPoint = new mongoose.Schema({
  direction: String,
  time: String
});

var TravelSchema = new mongoose.Schema({
  travel_id: String,
  carOwner: User.User,
  origin: TravelPoint,
  destination: TravelPoint,
  seats: Number,
  passengers: [User.User],
  active: Boolean
});

export default mongoose.model('Travel', TravelSchema);
