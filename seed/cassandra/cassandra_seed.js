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
}

seeder();