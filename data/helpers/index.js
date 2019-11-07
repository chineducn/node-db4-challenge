const db = require('../db-config')

module.exports = {

}

function getrecipes() {
    return db('recipes')
}