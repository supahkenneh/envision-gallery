const router = require('express').Router();
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const Photo = require('../../db/models/Photo');
const Comment = require('../../db/models/Comment');

const BUCKET_NAME = process.env.BUCKET_NAME;
const IAM_USER_KEY = process.env.IAM_USER_KEY;
const IAM_USER_SECRET = process.env.IAM_USER_SECRET;

const s3 = new aws.S3({
  accessKeyId: IAM_USER_KEY,
  secretAccessKey: IAM_USER_SECRET
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: BUCKET_NAME,
    acl: 'public-read-write',
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(
        null,
        `${req.user.username}/${Date.now().toString()}-${file.originalname}`
      );
    }
  })
});

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

router.get('/:id/all', (req, res) => {
  // id is user
  const id = req.params.id;
  return Photo
    .where({ owner: id })
    .fetchAll()
    .then(photos => {
      res.json(photos);
    })
})

router.post('/upload', upload.single('photo'), (req, res) => {
  const photoLink = req.file.location;
  const { description } = req.body;
  return new Photo({
    link: photoLink,
    owner: req.user.id,
    description
  })
    .save()
    .then(photo => {
      res.json(photo)
    })
})

router.put('/:id', (req, res) => {
  const { description } = req.body
  const id = req.params.id;
  return new Photo({ id })
    .save({ description }, { patch: true })
    .then(photo => {
      return photo.refresh({
        withRelated: [{
          'owner': qb => { qb.column('id', 'username') }
        }]
      })
    })
    .then(photo => {
      res.json(photo);
    })
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  return new Photo({ id })
    .destroy()
    .then(response => {
      return res.json({ success: true })
    })
});

router.get('/:id/comments', (req, res) => {
  const photo_id = req.params.id;
  return Comment
    .where({ photo_id })
    .fetchAll({
      withRelated: [{
        'author': qb => { qb.column('id', 'username') }
      }]
    })
    .then(comments => {
      res.json(comments);
    })
});

router.post('/:id/comments', (req, res) => {
  const photo_id = req.params.id;
  const author = req.user.id;
  const { content } = req.body;
  return new Comment({
    author,
    photo_id,
    content
  })
    .save()
    .then(comment => {
      return comment.refresh({
        withRelated: [{
          'author': qb => { qb.column('id', 'username') }
        }]
      })
    })
    .then(comment => {
      res.json(comment);
    })
});

module.exports = router;
