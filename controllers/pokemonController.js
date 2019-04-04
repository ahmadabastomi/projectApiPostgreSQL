const models = require("../models");

exports.pokemon_all = async function (req, res) {
    try {
        const pokemon = await models.Pokemon.findAll({
            include: [{ model: models.Category, as: 'category' },
            { model: models.Type, as: 'type' }]
        })
        return res.status(200).send(pokemon)
    } catch (error) {
        return res.status(404).send('Pokemon Not Found')
    }
}; 