DROP DATABASE IF EXISTS ravingz_reviews;

CREATE DATABASE ravingz_reviews;

USE ravingz_reviews;

CREATE TABLE restaurants (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  user_id INT NOT NULL, 
  username VARCHAR(255) NOT NULL,
  usercity VARCHAR(255) NOT NULL,
  avatar VARCHAR(1024) NOT NULL,
)

CREATE TABLE reviews (
  review_id INT NOT NULL AUTO_INCREMENT,
  rating INT NOT NULL,
  comment VARCHAR(2000) NOT NULL,
  date DATE NOT NULL,
  user_id INT NOT NULL,
  restaurant_id INT NOT NULL,
  PRIMARY KEY (review_id),
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

