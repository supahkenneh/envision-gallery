const router = require('express').Router();
const photos = require('./photos/photos');
const users = require('./users/users');

router.use('/photos', photos);
router.use('/users', users);

module.exports = router;