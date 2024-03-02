const mongoose = require('mongoose');

const { modelName, getSchema } = require('../../schemas/usuario.schema');

module.exports = mongoose.model(modelName, getSchema());
