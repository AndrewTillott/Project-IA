const db = require("../server.js");

const dbAddition = query => {

    if (Object.keys(query).length !== 0) {

        const name = query.Name;
        const email = query['Email Address'];
        const number = query['Phone Number'];
        const postcode = query['Post Code'];
        const typeOfEnterprise = query['type-of-enterprise'];

        if (typeOfEnterprise === 'Influencer') {

            db.collection("Influencers").add({
                Name: name,
                Address: email,
                phoneNumber: number,
                postCode: postcode
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });

        } else {

            db.collection("Businesses").add({
                Name: name,
                Address: email,
                phoneNumber: number,
                postCode: postcode
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
        }
    }
};

module.exports = dbAddition;