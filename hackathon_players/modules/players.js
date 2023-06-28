const {db} = require('../config/dbsql.js')

const getPlayerCountry = () => {
    return db('football_players')
    .select('*')
    .orderBy('country')
}

const getPlayerByNameOrSurname = (nameOrSurname) => {
    return db('football_players')
    .select('*')
    .where('name', '=', nameOrSurname)
    .orWhere('surname', '=', nameOrSurname)
    .first()
}


const getRandomPlayer = async () => {
    const count = await db('football_players').count('id as count').first()
    const randomId = Math.floor(Math.random() * count.count) + 1
    const player = await db('football_players').select('id', 'name', 'surname', 'country', 'current_team', 'age', 'position', 'shirt_number', 'world_cups_won').where('id', '=', randomId).first()
    return player
}

const getAllPlayers = () => {
    return db('football_players')
    .select('id', 'name', 'surname', 'country', 'current_team', 'age', 'position', 'shirt_number', 'world_cups_won')
    .orderBy('name')
}

module.exports = {
    getRandomPlayer,
    getAllPlayers,
    getPlayerByNameOrSurname,
    getPlayerCountry,
    getPlayerName,
    getPlayerSurname,
    getPlayerAge,
    getPlayerPosition,
    getPlayerNumber,
    getPlayerClub,
    getPlayerWorldCupsWon
}