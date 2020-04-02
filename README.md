# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## API ROUTES

### Show Restaurant 
URL
/api/restaurants/:id
Method:
GET
URL Params
Required:
id=[integer]
Data Params
none
Success Response:
Code: 200
Content: { id : 12, name : “Bob’s Donuts”  }
Error Response:
Code: 404 NOT FOUND
Content: { error : "Restaurant doesn't exist" }
 
Sample Call:
  $.ajax({
    url: `/api/restaurants/${id}`,
    dataType: "json",
    type : "GET",
    success : function(result) {
      console.log(result);
    }
  });

### Show Reviews From Restaurant
URL
/api/restaurants/:id/reviews
Method:
GET
URL Params
Required:
id=[integer]
Data Params
none
Success Response:
Code: 200
Content: Array of… [{ "review_id": 924, "rating": 4, "comment": "Inventore dolore sequi ad quo praesentium assumenda voluptatibus et illum. Veniam consectetur temporibus id a quidem ut quos iste nisi.", "date": "2019-08-29T07:00:00.000Z", "username": "Braden_Schinner", "usercity": "West Sage, Wyoming", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/dactrtr/128.jpg", "restaurant_id": 2, "id": 2, "name": "Kozey - Hagenes" }]
Error Response:
Code: 404 NOT FOUND
Content: { error : "Reviews for this restaurant do not exist" }
 
Sample Call:
  $.ajax({
    url: `/api/restaurants/${id}/reviews`,
    dataType: "json",
    type : "GET",
    success : function(result) {
     this.setState({review: result});
  }
  });

### Add Review
URL
/api/restaurants/:id/newreview
Method:
POST
URL Params
Required:
id=[integer]
Data Params
review (req.body)
Success Response:
Code: 200
Content  { result : “Review was added to the database” }
Error Response:
Code: 404 NOT FOUND
Content: { error : "Unable to add reviews to the database" }
 
Sample Call:
  $.ajax({
    url: `/api/restaurants/${review.restaurant_id}/reviews`,
    dataType: "json",
    Data: review ,
    type : "POST",
    success : function(result) {
      console.log(result);
    }
  });
 
### Update Review
URL
/api/restaurants/:id/reviews/review_id
Method:
PUT
URL Params
Required:
id=[integer]
review_id=[integer]
Data Params
newReview (req.body)
Success Response:
Code: 200
Content  { result : “Review has been updated” }
Error Response:
Code: 404 NOT FOUND
Content: { error : "Unable to update reviews" }
 
Sample Call:
  $.ajax({
    url: `/api/restaurants/${review.restaurant_id}/changereview`,
    dataType: "json",
    Data: newReview, 
    type : "PUT",
    success : function(result) {
      console.log(result);
    }
  });
 
 

### Delete Review
URL
/api/restaurants/:id/reviews/review_id
Method:
POST
URL Params
Required:
id=[integer]
review_id=[integer]
Data Params
review (req.body)
Success Response:
Code: 200
Content  { result : “Review was added to the database” }
Error Response:
Code: 404 NOT FOUND
Content: { error : "Unable to add reviews to the database" }
 
Sample Call:
  $.ajax({
    url: `/api/restaurants/${review.restaurant_id}/reviews`,
    dataType: "json",
    type : "DELETE",
    success : function(result) {
      console.log(result);
    }
  });




