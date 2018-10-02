const router = require('express').Router();
const photos = require('./photos/photos');
const users = require('./users/users');
const auth = require('./auth/auth');

router.use('/', auth);
router.use('/photos', photos);
router.use('/users', users);

module.exports = router;