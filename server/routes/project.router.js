const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

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
  console.log('Getting all current id', req.body);
  const sqlText = `SELECT "tattoo"."user_id", "user"."username", "tattoo"."ideal_timeframe", "styles"."styles", "tattoo"."description", "body_part"."areas", "tattoo"."email", "tattoo"."photos", "status"."status" FROM "tattoo" 
  JOIN "styles" ON "tattoo"."style_id" = "styles"."id"
  JOIN "user" ON "tattoo"."user_id" = "user"."id"
  JOIN "body_part" ON "tattoo"."area_id" = "body_part"."id"
  JOIN "status" ON "tattoo"."status_id" = "status"."id"
  WHERE "tattoo"."user_id" = $1;`
  pool.query(sqlText, [req.body])
  .then((results) => {
      res.send(results.rows)
  }).catch((error) => {
      console.log('Something went wrong getting styles', error);
      res.sendStatus(500);
  })
})

router.post('/', (req, res) => {
  const newProject = req.body;
  console.log(req.body);
  
  const queryText = `INSERT INTO projects ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
  VALUES ($1, $2, $3, $4, $5, $6, $7)`;
  const queryValues = [
    newProject.name,
    newProject.description,
    newProject.thumbnail,
    newProject.website,
    newProject.github,
    newProject.date_completed,
    newProject.tag_id,
  ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing SELECT project query', err);
      res.sendStatus(500);
    });
});


router.delete('/:id', (req, res) => {
  console.log(`delete project`, req.params.id);
  
  const sqlText = 'DELETE FROM "projects" WHERE name=$1';
  pool.query(sqlText, [req.params.id])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error deleting SELECT project query', err);
      res.sendStatus(500);
    });
});

module.exports = router;