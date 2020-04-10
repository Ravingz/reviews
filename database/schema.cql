CREATE KEYSPACE reviews WITH replication = {'class':'SimpleStrategy', 'replication_factor':3}

CREATE TABLE reviews (
  restaurant_id int,
  restaurant_name varchar,
  review_id int,
  rating int,
  comment varchar,  
  createdAt varchar,
  updatedAt varchar,
  username varchar, 
  usercity varchar,
  avatar varchar,
  PRIMARY KEY (restaurant_id, review_id)
) 