var express = require('express');
var router = express.Router();

const games = [
  { title: 'League of Legends', id: '1', genre: 'mmorpg' },
  { title: 'Roblox', id: '2', genre: 'fps' },
  { title: 'Rocket League', id: '3', genre: 'mmorpg' },
  { title: 'Minecraft', id: '4', genre: 'sandbox' },
  { title: 'World of Warcraft', id: '5', genre: 'rpg' },
  { title: 'Genshin Impact', id: '6', genre: 'rpg' },
];

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('League of Legends, Age of Empire IV, Roblox');
});

router.get('/game/:id', function (req, res, next) {
  const id = req.params.id;
  const foundGame = games.find((v) => v.id === id);
  res.send(foundGame);
});

router.get('/game', function (req, res, next) {
  const id = req.query.id;
  const foundGame = games.find((v) => v.id === id);
  res.send(foundGame);
});

// Finds all rpg games from games array

router.get('/genre/:genre', function (req, res, next) {
  const genre = req.params.genre;
  const foundGames = games.filter((v) => v.genre === genre);
  res.send(foundGames);
});

router.get('/genre', function (req, res, next) {
  const genre = req.query.genre;
  const foundGames = games.filter((v) => v.genre === genre);
  res.send(foundGames);
});

router.get('/rpg', function (req, res, next) {
  res.send('WoW, Maplestory, Genshin Impact');
});

module.exports = router;
