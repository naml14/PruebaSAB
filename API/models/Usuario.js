const connection = require("../knexfile")['development'];

const database = require('knex')(connection);

const createUser = (user) => {
    return database('usuario')
        .insert(user);
};

const getUsers = () => {
    return database.select('*').from('usuario');
};

const deleteOneUser = (id) => {
    return database.delete().from('usuario').where('usuario_id', id);
};

module.exports = {
    createUser,
    getUsers,
    deleteOneUser,
}