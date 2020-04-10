'use strict';

  const fs = require('fs');
  const createCsvWriter = require('csv-writer').createObjectCsvWriter;
  const faker = require('faker');
  const cliProgress = require('cli-progress');
//   const async = require ('')
  
  const writer = createCsvWriter({
      path: '../../users.csv',
      header: [
          {id: 'user_id', title: 'user_id'},
          {id: 'username', title: 'username'},
          {id: 'usercity', title: 'usercity'}, 
          {id: 'avatar', title: 'avatar'} 
      ]
  });
  let totalUsers = 0;
  let count = 1000;
  let total = 0;
  
  const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
  bar1.start(100, 0);
  
  const createUsers = () => {
      const users = [];
      for (let i = 0; i < count; i++) {
          const newUser= {};
          newUser.user_id = totalUsers;
          newUser.username = faker.internet.userName();
          newUser.usercity = faker.fake('{{address.city}}, {{address.state}}');
          newUser.avatar = faker.image.avatar();
          totalUsers++; 
          users.push(newUser);
          }
      return users;
  }
  
  const seeder = () => {
      if (total < 10000) {
          const users = createUsers();
          writer.writeRecords(users)
              .then(() => {
                  bar1.increment(.001)
                  seeder()
              })
      total++;
      }
  }
  
  seeder();