'use strict';
const models = require("../models");

module.exports = (sequelize, DataTypes) => {
  const PokemonType = sequelize.define('PokemonType', {
    pokemon_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER
  }, {});
  PokemonType.associate = function (models) {
  };
  return PokemonType;
};