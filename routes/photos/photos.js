const router = require('express').Router();
const Photo = require('../../db/models/Photo');

router.get('/', (req, res) => {
  return Photo
    .fetchAll({
      withRelated: [{
        'owner': qb => {
          qb.column('id', 'username')
        }
      }],
    })
    .then(photos => {
      res.json(photos.models);
    })
});

module.exports = router;
