'use strict';

const fs = require('fs');
const csvWriter = require('csv-write-stream')
const faker = require('faker');
const cliProgress = require('cli-progress');
const writer = csvWriter();

const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
bar1.start(100, 0);

let totalRestaurants = 0;
const seeder = () => {
// for (var x = 0; x < 1; x++){
    writer.pipe(fs.createWriteStream(`reviewsTest5+.csv`));
    for (let i = 0; i < 10000000; i++) {
        const restaurant_id = faker.random.number({min:0, max:10000000});
        const review_id = i;
        const rating = faker.random.number({min:1, max:5});
        const comment = faker.lorem.sentences();
        const createdAt = faker.date.between('2010-01-01', '2020-03-11');
        const user_id = faker.random.number({min:0, max:10000000});
        writer.write({
            review_id: review_id,
            rating: rating,
            comment: comment,
            createdAt: createdAt,
            updatedAt: createdAt,
            user_id: user_id,
            restaurant_id: restaurant_id  
        })
        totalRestaurants++;
        bar1.increment(.000002);
    }
    
    bar1.stop();
    console.log('done')
 }

 seeder();

    //   console.log(`CSV number ${x} is complete`)

   
// }  


// const writer = createCsvWriter({
//     path: '../../reviews.csv',
//     header: [
//         {id: 'review_id', title: 'review_id'},
//         {id: 'rating', title: 'rating'},
//         {id: 'comment', title: 'comment'},
//         {id: 'createdAt', title: 'createdAt'},
//         {id: 'updatedAt', title: 'updatedAt'},
//         {id: 'user_id', title: 'user_id'},
//         {id: 'username', title: 'username'},
//         {id: 'usercity', title: 'usercity'},
//         {id: 'avatar', title: 'avatar'},
//         {id: 'restaurant_id', title: 'restaurant_id'},
//     ]
// });
// let totalReviews = 0;
// let count = 1000;
// let total = 0;

// const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
// bar1.start(100, 0);

// const createEntries = async () => {
//     const reviews = [];
//     for (let i = 0; i < count; i++) {
//         const newReview= {};
//         const review_id = totalReviews;
//         const rating = faker.random.number({min:1, max:5});
//         const comment = faker.lorem.sentences();
//         const createdAt = faker.date.between('2010-01-01', '2020-03-11').toLocaleDateString();
//         const updatedAt =  createdAt; 
//         const user_id = faker.random.number({min:0, max:10000000});
//         const username = faker.internet.userName();
//         const usercity = faker.fake('{{address.city}}, {{address.state}}');
//         const avatar = faker.image.avatar();
//         const id = faker.random.number({min:0, max:10000000});
//         totalReviews++;
//         reviews.push(newReview);
//     }
//     return reviews;
// }


// const seeder = () => {
//     if (total < 10000) {
//         const restaurants = createEntries();
//         writer.writeRecords(restaurants)
//             .then(() => {
//                 bar1.increment(.01)
//                 seeder()
//             })
//     total++;
//     }
// }

// seeder();


