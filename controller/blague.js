const data = require('../models/data.json');
const fs = require('fs');
const path = require('path');

const controllerBlague = {

    allBlague: (req, res) => {
        res.status(200).json(data);
    },

    findById: (req, res) => {
        const id = parseInt(req.params.id);
        const blague = data.find((blague) => blague.id === id);
        if (blague) {
            res.status(200).json(blague);
        } else {
            res.status(404).json({ message: `La Blague avec l'ID: ${id} n'existe pas !` });
        }
    },

    random: (req, res) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        res.status(200).json(data[randomIndex]);
    },

}

module.exports = controllerBlague;
