var express = require('express');
var router = express.Router();
var pokemonController = require('../controllers/pokemonController')

/* GET home page. */
router.get('/pokemons', pokemonController.pokemon_all);

module.exports = router;
