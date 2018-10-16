const router = require('express').Router();
const Photo = require('../../db/models/Photo');

router.get('/:id', (req, res) => {
  const id = req.params.id;
  return Photo
    .where({ owner: id })
    .fetchAll({
      withRelated: [{
        'owner': qb => { qb.column('id', 'username') }
      }],
    })
    .then(photos => {
      res.json(photos);
    })
    .catch(err => console.log('Error: ', err))
})

module.exports = router;