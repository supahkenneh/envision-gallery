const router = require('express').Router();
const Photo = require('../../db/models/Photo');

router.get('/', (req, res) => {
  return Photo
    .fetchAll({
      withRelated: [{
        'owner': qb => { qb.column('id', 'username') }
      }],
    })
    .then(photos => {
      res.json(photos.models);
    })
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  return Photo
    .where({ id })
    .fetch({
      withRelated: [{
        'owner': qb => { qb.column('id', 'username') }
      }]
    })
    .then(photo => {
      res.json(photo);
    })
})

module.exports = router;
