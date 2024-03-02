/* eslint-disable max-len */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Usuario = require('./usuario.model');
const authConfig = require('./authConfig.json');

module.exports = {
  register: async (req, res) => {
    const { email } = req.body;

    try {
      if (await Usuario.findOne({ email })) {
        return res.status(400).send({ error: 'Usuário já existente' });
      }

      const usuario = await Usuario.create(req.body);
      usuario.senha = undefined;

      return res.send({ usuario, token: jwt.sign({ id: usuario._id }, authConfig.secret, { expiresIn: 86400 }) });
    } catch (err) {
      // console.log(err)
      return res.status(400).send({ error: 'Falha no registro' });
    }
  },
  login: async (req, res) => {
    const { email, senha } = req.body;
    try {
      const usuario = await Usuario.findOne({ email }).select('+senha');

      if (!usuario) {
        return res.status(404).send({ error: 'Usuário não encontrado' });
      }

      if (!await bcrypt.compare(senha, usuario.senha)) {
        return res.status(400).send({ error: 'Senha incorreta' });
      }

      const token = jwt.sign({ id: usuario.id, name: usuario.nome }, authConfig.secret, { expiresIn: 86400 });

      return res.send({ usuario, token });
    } catch (err) {
      return res.status(400).send({ error: 'Falha no login' });
    }
  },
  verifyJWT: (req, res, next) => {
    const token = req.headers['x-access-token'];
    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) {
        return res.status(401).end();
      }
      req.id = decoded.id;
      return next();
    });
  },
};
