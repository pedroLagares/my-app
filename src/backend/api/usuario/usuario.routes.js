const express = require('express');

const router = express.Router();
const api = require('./usuario.api');

router.post('/register', async (req, res) => api.register(req, res));

router.post('/login', async (req, res) => api.login(req, res));

module.exports = (app) => app.use('/usuario', router);
