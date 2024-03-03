/* eslint-disable func-names */

const { Schema } = require('mongoose');
const bcrypt = require('bcryptjs');

exports.modelName = 'Usuario';
exports.getSchema = function () {
  const UsuarioSchema = new Schema({
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    senha: {
      type: String,
      required: true,
      select: false,
    },
  });

  UsuarioSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;
    next();
  });

  return UsuarioSchema;
};
