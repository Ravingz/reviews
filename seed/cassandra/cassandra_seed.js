'use strict';

const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');
const cliProgress = require('cli-progress');

const seeder = () => {
    const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    bar1.start(100, 0);

    let totalRestaurants = 7500000;
sele
    // for (var x = 0; x < 1; x++){
        writer.pipe(fs.createWriteStream(`restaurantsTest4.csv`));
        for (let i = 0; i < 2500000; i++) {
            const restaurantName = faker.company.companyName();
            const totalReviews = Math.random() * (15-5) + 5
            for (let j = 0; j < totalReviews; j++){
                const rating = faker.random.number({min:1, max:5});
                const comment = faker.lorem.sentences();
                const createdAt = faker.date.between('2010-01-01', '2020-03-11')
                const username = faker.internet.userName();
                const userCity = faker.fake('{{address.city}}, {{address.state}}');
                const avatar = faker.image.avatar();
                writer.write({
                    review_id: j,
                    restaurant_id: totalRestaurants,  
                    avatar: avatar,
                    comment: comment,
                    createdAt: createdAt,
                    rating: rating,
                    restaurant_name: restaurantName, 
                    updatedAt: createdAt,
                    usercity: userCity,
                    username: username
                })
            }
            totalRestaurants++;
            bar1.increment(.00004);
        }
        bar1.stop();
        console.log('done')
        //   console.log(`CSV number ${x} is complete`)
    }
   
// }  

seeder();
//     'use strict';

// const fs = require('fs');
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const faker = require('faker');
// const cliProgress = require('cli-progress');
// // var async = require('asyncawait/async');
// // var await = require('asyncawait/await');

// const writer = createCsvWriter({
//     path: '../../restaurantsCAS.csv',
//     header: [
//         {id: 'restaurant_id', title: 'restaurant_id'},
//         {id: 'review_id', title: 'review_id'},
//         {id: 'avatar', title: 'avatar'},
//         {id: 'comment', title: 'comment'},
//         {id: 'createdAt', title: 'createdAt'},
//         {id: 'rating', title: 'rating'},
//         {id: 'restaurantName', title: 'restaurantName'},
//         {id: 'updatedAt', title: 'updatedAt'},
//         {id: 'usercity', title: 'usercity'},
//         {id: 'username', title: 'username'} 
//     ]
// });
// let totalRestaurants = 0;
// let count = 1000;
// let total = 0;

// const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
// bar1.start(100, 0);


// const createReview = (newRestaurant, callback) => {
//     newRestaurant.rating = faker.random.number({min:1, max:5});
//     newRestaurant.comment = faker.lorem.sentences();
//     newRestaurant.createdAt = faker.date.between('2010-01-01', '2020-03-11');
//     newRestaurant.updatedAt =  newRestaurant.createdAt; 
//     newRestaurant.username = faker.internet.userName();
//     newRestaurant.usercity = faker.fake('{{address.city}}, {{address.state}}');
//     newRestaurant.avatar = faker.image.avatar();
//     return newRestaurant;
// }

// const createEntries = () => {
//     const entries = [];
//     for (let i = 0; i < count; i++) {
//         const newRestaurant= {};
//         newRestaurant.restaurant_id = totalRestaurants;
//         newRestaurant.restaurantName = faker.company.companyName();
//         const totalReviews = Math.random() * (15-5) + 5
//         for (let j = 0; j < totalReviews; j++){
//             newRestaurant.review_id = j;
//             const review = createReview(newRestaurant, ()=> entries.push(newRestaurant))
//             entries.push(review)
//         }
//         totalRestaurants++;
//     }
//     return entries;
// }

// const seeder = () => {
//     if (total < 10) {
//         const restaurants = createEntries();
//         writer.writeRecords(restaurants)
//             .then(() => {
//                 bar1.increment(.001)
//                 seeder()
//             })
//     total++;
//     }
// }
// seeder();
