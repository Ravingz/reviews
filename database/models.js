const db = require('../database')
var colors = require('colors');



const getRecentReviews = (callback) => {
  //get most recent 15 reviews
  let queryString = 'SELECT * FROM reviews ORDER BY createdAt DESC LIMIT 15';
  db.query(queryString, (err, results) => {
    if (err) {
      console.log('error getting recent reviews from database', err)
    } else {
      // console.log(results);
      callback(null, results);
    }
  })
} 

const getRestaurantName = (id, callback) => {
  //get the restrant by restaurant id
  let queryString = `SELECT name FROM restaurants WHERE restaurant_id=${id}`;
  db.query(queryString, (err, result) => {
    if (err) {
      console.log('error getting restaurant name from database', err)
    } else {
      callback(null, result);
    }
  })
} 

const getReviewsByRestaurant = (id, callback) => {
  // get All the reviews by a resturant id
  let queryString = `SELECT * FROM reviews INNER JOIN users ON users.user_id = reviews.user_id WHERE reviews.restaurant_id = ${id} ORDER BY updatedat DESC`
  db.query(queryString, (err, results) => {
    if (err) {
      console.log('error getting reviews by restaurant from database', err)
    } else {
      callback(null, results);
    }
  });
}

const insertReview = (review, callback) => {
  console.log((review.createdAt).green);
  let queryString = `INSERT INTO reviews(rating, comment, createdat, updatedat, user_id, restaurant_id)  VALUES(${review.rating}, '${review.comment}', '${review.createdAt}', '${review.updatedAt}', ${review.user_id}, ${review.restaurant_id})`;
  db.query(queryString, (err, results) => {
    if (err) {
      console.log('error inserting review', err)
    } else {
      callback(null, results);
    }
  })
}

module.exports = { getRecentReviews, getRestaurantName, getReviewsByRestaurant, insertReview };

