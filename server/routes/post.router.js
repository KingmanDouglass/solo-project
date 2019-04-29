// const express = require('express');
// const router = express.Router();
// const upload = require('../services/image-upload');
// const pool = require('../modules/pool');
// const singleUpload = upload.single('image');


// router.post('/image-upload', function(req, res) {
//   singleUpload(req, res, function(err) {
//     if (err) {
//       return res.status(422).send({errors: [{title: 'Image Upload Error', detail: err.message}]});
//     }
//     return res.json({'imageUrl': req.file.location});
//   });
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

const multer  = require('multer');
const multerDest = process.env.multer_dest || '../uploads';
const upload = multer({ dest: multerDest });
const { uploadPost, uploadPostWithText, generateSignedUrls } = require('../modules/imageHandler');

router.post('/image', upload.single('file'), (req, res) => {
    uploadPost(req, res);
});

router.post('/imageAndText', upload.single('file'), (req, res) => {
    uploadPostWithText(req, res);
});

router.get('/', (req, res) => {
    const queryText = `SELECT * from post WHERE "user_id"=$1`;
    pool.query(queryText, [req.user.id])
        .then(response => { generateSignedUrls(res, response.rows) })
        .catch(error => { res.sendStatus(500) })
})

router.get('/admin', (req, res) => {
    const queryText = `SELECT * from post WHERE "user_id"=$1`;
    pool.query(queryText, [req.user.id])
        .then(response => { generateSignedUrls(res, response.rows) })
        .catch(error => { res.sendStatus(500) })
})

module.exports = router;