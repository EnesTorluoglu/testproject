const mongoose = require('mongoose');
const connectDataBase = require("./database");
const fetch = require("./fetch")
const User = require("./models/user");

const main  = async () => {
    await connectDataBase();

    const users = await fetch();

    for (const userData of users) {
        const newUser = new User({
            _id: userData.id, // Set the _id field
            name: userData.name,
            username: userData.username,
            email: userData.email,
            address: {
                street: userData.address.street,
                suite: userData.address.suite,
                city: userData.address.city,
                zipcode: userData.address.zipcode,
                geo: {
                    lat: userData.address.geo.lat,
                    lng: userData.address.geo.lng,
                }
            },
            phone: userData.phone,
            website: userData.website,
            company: {
                name: userData.company.name,
                catchPhrase: userData.company.catchPhrase,
                bs: userData.company.bs,
            }
        });

        try {
            await newUser.save();
            console.log(`${newUser.username} saved to db`);
        } catch (err) {
            console.error(err)
        }
    }

    mongoose.connection.close();
}

main();