const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// const upload = require('../services/multer');

// const singleUpload = upload.single('image')

router.get('/', (req, res) => {
  const queryText = `SELECT "tattoo"."user_id", "user"."username", "tattoo"."ideal_timeframe", "styles"."styles", "tattoo"."description", "body_part"."areas", "tattoo"."email", "tattoo"."photos", "status"."status" FROM "tattoo" 
  JOIN "styles" ON "tattoo"."style_id" = "styles"."id"
  JOIN "user" ON "tattoo"."user_id" = "user"."id"
  JOIN "body_part" ON "tattoo"."area_id" = "body_part"."id"
  JOIN "status" ON "tattoo"."status_id" = "status"."id";`;
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT plant query', err);
      res.sendStatus(500);
    });
});

router.get('/styles', (req, res) => {
  console.log('Getting all styles');
  pool.query(`SELECT * FROM "styles"`)
  .then((results) => {
      res.send(results.rows)
  }).catch((error) => {
      console.log('Something went wrong getting styles', error);
      res.sendStatus(500);
  })
})

router.get('/areas', (req, res) => {
  console.log('Getting all body part areas');
  pool.query(`SELECT * FROM "body_part"`)
  .then((results) => {
      res.send(results.rows)
  }).catch((error) => {
      console.log('Something went wrong getting body parts', error);
      res.sendStatus(500);
  })
})

router.get('/status', (req, res) => {
  console.log('Getting all status');
  pool.query(`SELECT * FROM "status"`)
  .then((results) => {
      res.send(results.rows)
  }).catch((error) => {
      console.log('Something went wrong getting statuses', error);
      res.sendStatus(500);
  })
})

router.get('/id/:id', (req, res) => {
  console.log('Getting ONE current id', req.params.id);
  const sqlText = `SELECT "tattoo"."user_id", "user"."username", "tattoo"."ideal_timeframe", "styles"."styles", "tattoo"."description", "body_part"."areas", "tattoo"."email", "tattoo"."photos", "status"."status", "body_part"."areas" FROM "tattoo" 
  JOIN "styles" ON "tattoo"."style_id" = "styles"."id"
  JOIN "user" ON "tattoo"."user_id" = "user"."id"
  JOIN "body_part" ON "tattoo"."area_id" = "body_part"."id"
  JOIN "status" ON "tattoo"."status_id" = "status"."id"
  WHERE "tattoo"."user_id" = $1;`
  pool.query(sqlText, [req.params.id])
  .then((results) => {
      res.send(results.rows)
  }).catch((error) => {
      console.log('Something went wrong getting current ID', error);
      res.sendStatus(500);
  })
})

router.get('/user/:id', (req, res) => {
  console.log('Getting ONE current id', req.params.id);
  const sqlText = `SELECT "tattoo"."user_id", "user"."username", "tattoo"."ideal_timeframe", "styles"."styles", "tattoo"."description", "body_part"."areas", "tattoo"."email", "tattoo"."photos", "status"."status", "body_part"."areas" FROM "tattoo" 
  JOIN "styles" ON "tattoo"."style_id" = "styles"."id"
  JOIN "user" ON "tattoo"."user_id" = "user"."id"
  JOIN "body_part" ON "tattoo"."area_id" = "body_part"."id"
  JOIN "status" ON "tattoo"."status_id" = "status"."id"
  WHERE "tattoo"."user_id" = $1;`
  pool.query(sqlText, [req.params.id])
  .then((results) => {
      res.send(results.rows)
  }).catch((error) => {
      console.log('Something went wrong getting current ID', error);
      res.sendStatus(500);
  })
})

router.post('/', (req, res) => {
  let tattoo = req.body;
  const TWO = 2
  console.log('Adding in tattoo:', tattoo);
  let sqlText = `INSERT INTO tattoo (name, description, email, ideal_timeframe, area_id, style_id, user_id, status_id) VALUES 
  ($1, $2, $3, $4, $5, $6, $7, $8)`;
  pool.query(sqlText, [tattoo.name, tattoo.description, tattoo.email, tattoo.ideal_timeframe, tattoo.area_id, tattoo.style_id, tattoo.user_id, TWO ])
    .then( (response) => {
      res.sendStatus(201);
    })
    .catch( (error) => {
      console.log('Failed to POST tattoo');
      res.sendStatus(500);
    })
})

// router.post('/image-upload', function(req, res) {
//   singleUpload(req, res, function(err, some) {
//     if (err) {
//       return res.status(422).send({errors: [{title: 'Image Upload Error', detail: err.message}] });
//     }

//     return res.json({'imageUrl': req.file.location});
//   });
// })

router.delete('/:id', (req, res) => {
  console.log(`delete project`, req.params.id);
  
  const sqlText = 'DELETE FROM "tattoo" WHERE user_id=$1';
  pool.query(sqlText, [req.params.id])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error deleting selected project query', err);
      res.sendStatus(500);
    });
});

module.exports = router;