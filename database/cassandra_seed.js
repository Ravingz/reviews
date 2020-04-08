'use strict';

const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');
const cliProgress = require('cli-progress');

const seeder = (total) => {
    const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    bar1.start(100, 0);

    for (var x = 0; x < 1; x++){
        writer.pipe(fs.createWriteStream(`restaurants${x}.csv`));
        for (let i = 0; i < total; i++) {
            const restaurantName = faker.company.companyName();
            const totalReviews = Math.random() * (10-1) + 1
            for (let j = 0; j < totalReviews; j++){
                const rating = Math.random() * (5-1) + 1
                const comment = faker.lorem.sentences();
                const createdAt = faker.date.between('2010-01-01', '2020-03-11').toLocaleDateString();
                const username = faker.internet.userName();
                const userCity = faker.fake('{{address.city}}, {{address.state}}');
                const avatar = faker.image.avatar();
                writer.write({
                    restaurant_id: i,  
                    review_id: j,
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
        
            bar1.increment(.00001);
        }
        
        //   console.log(`CSV number ${x} is complete`)
    }
    bar1.stop();
    writer.end();
    console.log('done')
}

seeder(10000000);

