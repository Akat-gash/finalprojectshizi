const router = require('express').Router();
const controllers = require('../controllers/authentication_controller');

router.post('/login', controllers.login);
router.post('/register', controllers.register);

module.exports = router;
