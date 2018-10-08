'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: {
    type: String
  },

  level: {
    type: String,
    enum: [
      'beginner',
      'intermediate',
      'advanced'
    ],
    default: 'beginner'
  }
});

const Player = mongoose.model('player', playerSchema);

module.exports = Player;
