const router = require('express').Router();
const User = require('../../db/models/User');

router.get('/', (req, res) => {
  console.log('auth');
})

module.exports = router;