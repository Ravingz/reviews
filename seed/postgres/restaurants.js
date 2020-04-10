'use strict';

  const fs = require('fs');
  const createCsvWriter = require('csv-writer').createObjectCsvWriter;
  const faker = require('faker');
  const cliProgress = require('cli-progress');
  
  const writer = createCsvWriter({
      path: '../../restaurants.csv',
      header: [
          {id: 'restaurant_id', title: 'restaurant_id'},
          {id: 'restaurantName', title: 'restaurantName'}
      ]
  });

  let totalRestaurants = 0;
  let count = 1000;
  let total = 0;
  
  const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
  bar1.start(100, 0);
  
  const createRestaurant = () => {
      const restaurants = [];
      for (let i = 0; i < count; i++) {
          const newRestaurant= {};
          newRestaurant.restaurant_id = totalRestaurants;
          newRestaurant.restaurantName = faker.company.companyName();
          totalRestaurants++; 
          restaurants.push(newRestaurant);
          }
      return restaurants;
  }
  
  const seeder = () => {
      if (total < 10000) {
          const users = createRestaurant();
          writer.writeRecords(users)
              .then(() => {
                  bar1.increment(.01)
                  seeder()
              })
      total++;
      }
  }
  
  seeder();