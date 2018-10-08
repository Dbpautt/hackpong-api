'use strict';

const express = require('express');
const router = express.Router();

const Player = require('../models/player');

router.get('/', (req, res, next) => {
  Player.find({})
    .then((players) => {
      res.json(players);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  if (!req.body.name || !req.body.level) {
    res.status(422).json({ code: 'validation error' });
  }

  const player = new Player(req.body);

  player.save()
    .then(() => {
      res.json(player);
    })
    .catch(next);
});

module.exports = router;
