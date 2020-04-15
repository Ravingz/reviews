DROP DATABASE IF EXISTS ravingz_reviews;

CREATE DATABASE ravingz_reviews;

USE ravingz_reviews;

CREATE TABLE restaurants (
  restaurant_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY, 
  username VARCHAR(255) NOT NULL,
  usercity VARCHAR(255) NOT NULL,
  avatar VARCHAR(1024) NOT NULL
)

CREATE TABLE reviews (
  review_id SERIAL PRIMARY KEY,
  rating INT NOT NULL,
  comment VARCHAR(2000) NOT NULL,
  createdAt VARCHAR(40) NOT NULL,
  updatedAt VARCHAR(40) NOT NULL,
  user_id INT NOT NULL,
  restaurant_id INT NOT NULL,
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(restaurant_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);
