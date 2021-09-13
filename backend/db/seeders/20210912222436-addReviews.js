'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Reviews', [
     {userId: 1, businessId: 2, rating: 4, content: 'This place was very clean and organized. The employees are very helpful and welcoming. They have a great variety of food and it is all very tasty. The service was great and experience was an overall 10/10. I definitely recommend.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 2, businessId: 1, rating: 4, content: 'This place was incredible. Amazing food and fantastic service. They have indoor and outdoor dinning with very comfortable chairs. Definitely recommend coming here!!!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 3, businessId: 1, rating: 5, content: 'Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Reviews', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
