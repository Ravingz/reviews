const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();
var faker = require('faker');

const seeder = () => {
    writer.pipe(fs.createWriteStream('restaurants.csv'));
    for (let i = 0; i < 100; i++) {
        const restaurantName = faker.company.companyName();
        writer.write({
            restaurant_id: i,
            restaurant_name: restaurantName
        })
      }
    writer.end();
    console.log('done')
}

seeder();