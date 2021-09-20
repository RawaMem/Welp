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
     {ownerId: 2, title: 'Poached Kitchen', imgUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80', category: 'Restaurant', description: 'Now open and happy to serve you in beautiful Irvine CA', address: '12395 Harvard Ave', city: 'Irvine', state: 'CA', zipCode: '92774', lat: 0.0, lng: 0.0, createdAt: new Date(), updatedAt: new Date()},
     {ownerId: 3, title: 'Chicken Maison', imgUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80', category: 'Restaurant', description: 'Now open and happy to serve you in beautiful Irvine CA', address: '16595 Bolsa Ave', city: 'Westminster', state: 'CA', zipCode: '92334', lat: 0.0, lng: 0.0, createdAt: new Date(), updatedAt: new Date()},
     {ownerId: 4, title: 'Healthy Protein Spot', imgUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2900&q=80', category: 'Restaurant', description: 'Now open and happy to serve you in beautiful Irvine CA', address: '18795 Brookhurst Ave', city: 'Huntington beach', state: 'CA', zipCode: '92114', lat: 0.0, lng: 0.0, createdAt: new Date(), updatedAt: new Date()},
     {ownerId: 5, title: 'Chubbi Tea Shoppe', imgUrl: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80', category: 'Restaurant', description: 'Now open and happy to serve you in beautiful Irvine CA', address: '13395 Edinger Ave', city: 'Foutnain Valley', state: 'CA', zipCode: '92674', lat: 0.0, lng: 0.0, createdAt: new Date(), updatedAt: new Date()},
     {ownerId: 6, title: 'The Dim Sum Co', imgUrl: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80', category: 'Restaurant', description: 'Now open and happy to serve you in beautiful Irvine CA', address: '17125 Trask Ave', city: 'Los Angeles', state: 'CA', zipCode: '92984', lat: 0.0, lng: 0.0, createdAt: new Date(), updatedAt: new Date()},
     {ownerId: 7, title: 'Contemporary Sushi', imgUrl: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80', category: 'Restaurant', description: 'Now open and happy to serve you in beautiful Irvine CA', address: '17595 Westminster Ave', city: 'Long Beach', state: 'CA', zipCode: '92234', lat: 0.0, lng: 0.0, createdAt: new Date(), updatedAt: new Date()},
     {ownerId: 8, title: 'Katsu Bar', imgUrl: 'https://images.unsplash.com/photo-1592417817038-d13fd7342605?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80', category: 'Restaurant', description: 'Now open and happy to serve you in beautiful Irvine CA', address: '17765 La Palma Ave', city: 'Riverside', state: 'CA', zipCode: '92674', lat: 0.0, lng: 0.0, createdAt: new Date(), updatedAt: new Date()},
     {ownerId: 9, title: '7 Spices Asian Kitchen', imgUrl: 'https://images.unsplash.com/photo-1571168136613-46401b03904e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80', category: 'Restaurant', description: 'Now open and happy to serve you in beautiful Irvine CA', address: '11195 Harvard Ave', city: 'Palos Verdes', state: 'CA', zipCode: '92894', lat: 0.0, lng: 0.0, createdAt: new Date(), updatedAt: new Date()},
     {ownerId: 10, title: 'Red Flame', imgUrl: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2900&q=80', category: 'Restaurant', description: 'Now open and happy to serve you in beautiful Irvine CA', address: '17588 Bear Ave', city: 'Westminster', state: 'CA', zipCode: '92524', lat: 0.0, lng: 0.0, createdAt: new Date(), updatedAt: new Date()},


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
