const faker = require ('faker');

const countries = []
for (let i = 0; i<50; i++){
    countries.push({
    
        country: faker.address.country(),
        zipcode: faker.address.zipCode(),
        city: faker.address.city(),
        timezone: faker.address.timeZone(),
        ll: `${faker.address.longitude()} ${faker.address.latitude()}`
     })
    }


console.log (countries)