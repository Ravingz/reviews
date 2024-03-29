const express = require('express');
const app = express();
const db = require('../database/models.js');
const bodyParser = require('body-parser');
const port = 3003;
const newRelic = require('newrelic');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/api/reviews', (req, res) => {
//   console.log("handling the get request!", req.body)
//   // console.log(db.getRecentReviews)
//   db.getRecentReviews((err, reviews) => {
//     if (err) {
//       console.log('error calling db.getRecentReviews')
//     } else {
//       res.send(reviews);
//     }
//   })
  
// });

app.get('/api/restaurants/:id', (req, res) => {
  console.log("handling the get request for restaurant name!", req.params)
  // console.log(db.getRecentReviews)
  db.getRestaurantName(req.params.id,  (err, result) => {
    if (err) {
      console.log('error calling db.getRecentReviews')
    } else {
      // console.log(result);
      res.send(result.rows[0].name);
    }
  })
});

app.get('/api/restaurants/:id/reviews', (req, res) => {
  console.log('hello from index.js')
  console.log('handeling get request for reviews by restaurant', req.params)
  db.getReviewsByRestaurant(req.params.id, (err, reviews) => {
    if (err) {
      console.log('error calling db.getReviewsByRestaurant')
      res.status(501).send(err);
    } else {
      res.status(200).send(reviews.rows);
    }
  });
});

app.post('/api/restaurants/414432/newreview', (req, res) => {
  console.log('handeling post request for new review by restaurant', req.body)
  let review = req.body;
  db.insertReview(review, (err) => {
    if (err) {
      console.log('error calling db.getReviewsByRestaurant')
      res.status(501).send(err);
    } else {
      console.log('insert review successfully!')
      res.status(200).end();
    }
  });
})

app.listen(port, () => console.log(`listening on port ${port}!`));
