const models = require('../models');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

exports.user_create = async function (req, res) {
    const password = req.body.password
    const hash = bcrypt.hashSync(password, salt);
    try {
        const user = await models.User.create({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })
        res.status(200).send("Create new User Success")
    } catch (error) {
        res.status(400).send('Failed Create New User')
    }
};

//Login 
exports.user_login = async function (req, res) {
    try {
        const user = await models.User.findOne({ username: req.body.username })
        if (user) {
            const check = bcrypt.compareSync(req.body.password, user.password);
            if (check) {
                const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
                res.json({
                    id: user.id,
                    token: token
                })
            } else {
                res.send('Wrong Username / Password')
            }
        }
        else {
            res.send('Wrong Username / Password')
        }
    } catch (error) {
        res.status(404).send('Account Not Registered')
    }
};

