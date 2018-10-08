'use strict';

const mongoose = require('mongoose');

const Player = require('../../models/player.js');
const data = require('../../data/players.js');

mongoose.connect('mongodb://localhost/hackpong')
  .then(() => {
    console.log('Connected to Mongo!');
    return Player.remove({});
  })
  .then(() => {
    console.log('Empty db');
    return Player.insertMany(data);
  })
  .then((results) => {
    console.log('You have some players', results.length);
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log('There is a problem', error);
  });
