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

## API Routes

### Show Restaurant

Get restaurant by id

* **URL**
`/api/restaurants/:id/`
* **Method:**
`GET`
* **URL Params**
**Required:**
`id=[integer]`
* **Data Params**
`none`
* **Success Response:**
* **Code:** 200 <br/>
  **Content:** `{ id : 12, name : “Bob’s Donuts”  }`
* **Error Response:**
* **Code:** 404 NOT FOUND <br/>
  **Content**: `{ error : "Restaurant does not exist" }`
 
* **Sample Call:**
  `$.ajax({
    url: `/api/restaurants/${id}`,
    dataType: "json",
    type : "GET",
    success : function(result) {
     console.log(results)
  }
  });`

### Show Reviews From Restaurant

Get all reviews for a restaurant

* **URL**
`/api/restaurants/:id/reviews`
* **Method:**
`GET`
* **URL Params**
**Required:**
`id=[integer]`
* **Data Params**
`none`
* **Success Response:**
* **Code:** 200 <br/>
  **Content:** `{(review)}`
* **Error Response:**
* **Code:** 404 NOT FOUND <br/>
  **Content**: `{ error : "Unable to get reviews for this restaurant}`
 
* **Sample Call:**
  $.ajax({
    url: `/api/restaurants/${id}/reviews`,
    dataType: "json",
    type : "GET",
    success : function(result) {
     this.setState({review: result});
  }
  });

### Add Review

Add a review to a restaurant

* **URL**
`/api/restaurants/:id/`
* **Method:**
`POST`
* **URL Params**
**Required:**
`id=[integer]`
* **Data Params**
`{(review)}` in req.body
* **Success Response:**
* **Code:** 200 <br/>
  **Content:** `{result: "Review was added}`
* **Error Response:**
* **Code:** 404 NOT FOUND
  **Content**: `{ error : "Reviews for this restaurant do not exist" }`
 
* **Sample Call:**
  $.ajax({
    url: `/api/restaurants/${id}`,
    dataType: "json",
    type : "POST",
    success : function(result) {
     console.log(result)});
    }
  });

### Update Review

Update a review 

* **URL**
`/api/restaurants/:id/reviews/:review_id`
* **Method:**
`PUT`
* **URL Params**
**Required:**
`id=[integer]`
`review_id=[integer]`
* **Data Params**
`{(newreview)}` in req.body
* **Success Response:**
* **Code:** 200 <br/>
  **Content:** `{result: "Review was updated}`
* **Error Response:**
* **Code:** 404 NOT FOUND
  **Content**: `{ error : "Unable to update review" }`
 
* **Sample Call:**
  $.ajax({
    url: `/api/restaurants/${id}/reviews/${review_id}`,
    dataType: "json",
    data: newReview
    type : "PUT",
    success : function(result) {
     console.log(result)});
    }
  });

### Delete Review

Delete a review

* **URL**
`/api/restaurants/:id/reviews/:review_id`
* **Method:**
`DELETE`
* **URL Params**
**Required:**
`id=[integer]`
`review_id=[integer]`
* **Data Params**
`none`
* **Success Response:**
* **Code:** 200 <br/>
  **Content:** `{result: "Review was deleted}`
* **Error Response:**
* **Code:** 404 NOT FOUND
  **Content**: `{ error : "Unable to deleted review" }`
 
* **Sample Call:**
  $.ajax({
    url: `/api/restaurants/${id}/reviews/${review_id}`
    dataType: "json",
    type : "DELETE",
    success : function(result) {
     console.log(result)});
    }
  });

