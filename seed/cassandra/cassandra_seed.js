'use strict';

const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');
const cliProgress = require('cli-progress');

const writer = createCsvWriter({
    path: 'restaurants.csv',
    header: [
        {id: 'restaurant_id', title: 'restaurant_id'},
        {id: 'restaurantName', title: 'restaurantName'},
        {id: 'rating', title: 'rating'},
        {id: 'comment', title: 'comment'},
        {id: 'createdAt', title: 'createdAt'},
        {id: 'updatedAt', title: 'updatedAt'},
        {id: 'username', title: 'username'},
        {id: 'usercity', title: 'usercity'},
        {id: 'avatar', title: 'avatar'}
    ]
});
let totalRestaurants = 0;
let count = 10;
let total = 0;

const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
bar1.start(100, 0);

const createEntries = () => {
    const entries = [];
    for (let i = 0; i < count; i++) {
        const newRestaurant= {};
        newRestaurant.restaurant_id = totalRestaurants;
        newRestaurant.restaurantName = faker.company.companyName();
        const totalReviews = Math.random() * (10-1) + 1
        for (let j = 0; j < totalReviews; j++){
            const rating = faker.random.number({min:1, max:5});
            const comment = faker.lorem.sentences();
            const createdAt = faker.date.between('2010-01-01', '2020-03-11').toLocaleDateString();
            const updatedAt =  createdAt;
            const username = faker.internet.userName();
            const usercity = faker.fake('{{address.city}}, {{address.state}}');
            const avatar = faker.image.avatar();
            newRestaurant.rating = rating;
            newRestaurant.comment = comment;
            newRestaurant.createdAt = createdAt;
            newRestaurant.updatedAt = updatedAt;
            newRestaurant.username = username;
            newRestaurant.usercity = usercity;
            newRestaurant.avatar = avatar;
            entries.push(newRestaurant);   
        }
    totalRestaurants++;
    }
    return entries;
}


const seeder = () => {
    if (total < 10) {
        const restaurants = createEntries();
        writer.writeRecords(restaurants)
            .then(() => {
                bar1.increment(.001)
                seeder()
            })
    total++;
    }
}

seeder();
