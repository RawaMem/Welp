'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Businesses', [
     {ownerId: 1, title: 'The Lighthouse Cafe', imgUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/HnhXCqxu9rPBvoTN-o0a0g/o.jpg', category: 'Restaurant', description: 'Waterfront dining on Newport Harbor. Located on the Balboa Peninsula featuring daily brunch and dinner options. Rooftop deck with stunning views of the bay and a patio just a few feet from the sand. We offer a full bar and have a great selection of beers and wines. We only accept Yelp waitlist and walk-ins during weekend brunch, we cannot accommodate reservations between 9am and 4pm Saturday and Sunday.', address: '1600 W Balboa Blvd', city: 'Newport Beach', state: 'CA', zipCode: '92663', lat: 0.0, lng: 0.0, createdAt: new Date(), updatedAt: new Date()},
     {ownerId: 2, title: 'Poached Kitchen', imgUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/35WfXpcA1QeIU04qxcJqWQ/o.jpg', category: 'Restaurant', description: 'Now open and happy to serve you in beautiful Irvine CA', address: '17595 Harvard Ave Unit A', city: 'Irvine', state: 'CA', zipCode: '92614', lat: 0.0, lng: 0.0, createdAt: new Date(), updatedAt: new Date()},


   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Businesses', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
