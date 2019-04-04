'use strict';
const models = require("../models");

module.exports = (sequelize, DataTypes) => {
  const Pokemon = sequelize.define('Pokemon', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Pokemon.associate = function (models) {
    Pokemon.belongsTo(models.Category, {
      as: 'category',
      foreignKey: 'category_id'
    });
    Pokemon.belongsToMany(models.Type, {
      as: 'type',
      through: 'PokemonType',
      foreignKey: 'pokemon_id',
      otherKey: 'type_id'
    });
  };
  return Pokemon;
};