const UserRoutes = require('./UsuarioRoutes');
const express = require('express');
const router = express.Router();

router.use('/users', UserRoutes);

module.exports = router;