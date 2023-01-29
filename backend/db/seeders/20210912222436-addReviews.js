'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

options.tableName = 'Reviews'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert(options, [
     {userId: 1, businessId: 1, rating: 2, content: 'This place was very clean and organized. The employees are very helpful and welcoming. They have a great variety of food and it is all very tasty. The service was great and experience was an overall 10/10. I definitely recommend.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 2, businessId: 1, rating: 3, content: 'This place was incredible. Amazing food and fantastic service. They have indoor and outdoor dinning with very comfortable chairs. Definitely recommend coming here!!!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 3, businessId: 1, rating: 4, content: 'This Place was amazing we would definitely go back anytime. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 4, businessId: 1, rating: 4, content: 'At first I didnt want to fo to this place but it was definitely worth it. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 5, businessId: 1, rating: 5, content: 'We found this place on Yelp and we are so happy we did. We plan to always eat here forever. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 6, businessId: 1, rating: 2, content: 'You might want to give this place a pass because it wasnt that good. There are much better restaurants. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 7, businessId: 1, rating: 3, content: 'I took my family here and everyone was happy and satisfied. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 8, businessId: 1, rating: 4, content: 'Never come here, you will become too happy and you will never want to leave. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 9, businessId: 1, rating: 5, content: 'I didnt want to go here because I had to take care of some work, but my firneds convinced me to go and it was amazing. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 1, businessId: 2, rating: 2, content: 'This place was very clean and organized. The employees are very helpful and welcoming. They have a great variety of food and it is all very tasty. The service was great and experience was an overall 10/10. I definitely recommend.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 2, businessId: 2, rating: 3, content: 'This place was incredible. Amazing food and fantastic service. They have indoor and outdoor dinning with very comfortable chairs. Definitely recommend coming here!!!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 3, businessId: 2, rating: 4, content: 'This Place was amazing we would definitely go back anytime. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 4, businessId: 2, rating: 4, content: 'At first I didnt want to fo to this place but it was definitely worth it. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 5, businessId: 2, rating: 5, content: 'We found this place on Yelp and we are so happy we did. We plan to always eat here forever. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 6, businessId: 2, rating: 2, content: 'You might want to give this place a pass because it wasnt that good. There are much better restaurants. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 7, businessId: 2, rating: 3, content: 'I took my family here and everyone was happy and satisfied. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 8, businessId: 2, rating: 4, content: 'Never come here, you will become too happy and you will never want to leave. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 9, businessId: 2, rating: 5, content: 'I didnt want to go here because I had to take care of some work, but my firneds convinced me to go and it was amazing. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 1, businessId: 3, rating: 2, content: 'This place was very clean and organized. The employees are very helpful and welcoming. They have a great variety of food and it is all very tasty. The service was great and experience was an overall 10/10. I definitely recommend.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 2, businessId: 3, rating: 3, content: 'This place was incredible. Amazing food and fantastic service. They have indoor and outdoor dinning with very comfortable chairs. Definitely recommend coming here!!!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 3, businessId: 3, rating: 4, content: 'This Place was amazing we would definitely go back anytime. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 4, businessId: 3, rating: 4, content: 'At first I didnt want to fo to this place but it was definitely worth it. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 5, businessId: 3, rating: 5, content: 'We found this place on Yelp and we are so happy we did. We plan to always eat here forever. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 6, businessId: 3, rating: 2, content: 'You might want to give this place a pass because it wasnt that good. There are much better restaurants. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 7, businessId: 3, rating: 3, content: 'I took my family here and everyone was happy and satisfied. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 8, businessId: 3, rating: 4, content: 'Never come here, you will become too happy and you will never want to leave. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 9, businessId: 3, rating: 5, content: 'I didnt want to go here because I had to take care of some work, but my firneds convinced me to go and it was amazing. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 1, businessId: 4, rating: 2, content: 'This place was very clean and organized. The employees are very helpful and welcoming. They have a great variety of food and it is all very tasty. The service was great and experience was an overall 10/10. I definitely recommend.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 2, businessId: 4, rating: 3, content: 'This place was incredible. Amazing food and fantastic service. They have indoor and outdoor dinning with very comfortable chairs. Definitely recommend coming here!!!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 3, businessId: 4, rating: 4, content: 'This Place was amazing we would definitely go back anytime. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 4, businessId: 4, rating: 4, content: 'At first I didnt want to fo to this place but it was definitely worth it. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 5, businessId: 4, rating: 5, content: 'We found this place on Yelp and we are so happy we did. We plan to always eat here forever. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 6, businessId: 4, rating: 2, content: 'You might want to give this place a pass because it wasnt that good. There are much better restaurants. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 7, businessId: 4, rating: 3, content: 'I took my family here and everyone was happy and satisfied. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 8, businessId: 4, rating: 4, content: 'Never come here, you will become too happy and you will never want to leave. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 9, businessId: 4, rating: 5, content: 'I didnt want to go here because I had to take care of some work, but my firneds convinced me to go and it was amazing. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 1, businessId: 5, rating: 2, content: 'This place was very clean and organized. The employees are very helpful and welcoming. They have a great variety of food and it is all very tasty. The service was great and experience was an overall 10/10. I definitely recommend.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 2, businessId: 5, rating: 3, content: 'This place was incredible. Amazing food and fantastic service. They have indoor and outdoor dinning with very comfortable chairs. Definitely recommend coming here!!!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 3, businessId: 5, rating: 4, content: 'This Place was amazing we would definitely go back anytime. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 4, businessId: 5, rating: 4, content: 'At first I didnt want to fo to this place but it was definitely worth it. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 5, businessId: 5, rating: 5, content: 'We found this place on Yelp and we are so happy we did. We plan to always eat here forever. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 6, businessId: 5, rating: 2, content: 'You might want to give this place a pass because it wasnt that good. There are much better restaurants. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 7, businessId: 5, rating: 3, content: 'I took my family here and everyone was happy and satisfied. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 8, businessId: 5, rating: 4, content: 'Never come here, you will become too happy and you will never want to leave. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 9, businessId: 5, rating: 5, content: 'I didnt want to go here because I had to take care of some work, but my firneds convinced me to go and it was amazing. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 1, businessId: 6, rating: 2, content: 'This place was very clean and organized. The employees are very helpful and welcoming. They have a great variety of food and it is all very tasty. The service was great and experience was an overall 10/10. I definitely recommend.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 2, businessId: 6, rating: 3, content: 'This place was incredible. Amazing food and fantastic service. They have indoor and outdoor dinning with very comfortable chairs. Definitely recommend coming here!!!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 3, businessId: 6, rating: 4, content: 'This Place was amazing we would definitely go back anytime. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 4, businessId: 6, rating: 4, content: 'At first I didnt want to fo to this place but it was definitely worth it. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 5, businessId: 6, rating: 5, content: 'We found this place on Yelp and we are so happy we did. We plan to always eat here forever. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 6, businessId: 6, rating: 2, content: 'You might want to give this place a pass because it wasnt that good. There are much better restaurants. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 7, businessId: 6, rating: 3, content: 'I took my family here and everyone was happy and satisfied. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 8, businessId: 6, rating: 4, content: 'Never come here, you will become too happy and you will never want to leave. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 9, businessId: 6, rating: 5, content: 'I didnt want to go here because I had to take care of some work, but my firneds convinced me to go and it was amazing. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 1, businessId: 7, rating: 2, content: 'This place was very clean and organized. The employees are very helpful and welcoming. They have a great variety of food and it is all very tasty. The service was great and experience was an overall 10/10. I definitely recommend.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 2, businessId: 7, rating: 3, content: 'This place was incredible. Amazing food and fantastic service. They have indoor and outdoor dinning with very comfortable chairs. Definitely recommend coming here!!!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 3, businessId: 7, rating: 4, content: 'This Place was amazing we would definitely go back anytime. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 4, businessId: 7, rating: 4, content: 'At first I didnt want to fo to this place but it was definitely worth it. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 5, businessId: 7, rating: 5, content: 'We found this place on Yelp and we are so happy we did. We plan to always eat here forever. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 6, businessId: 7, rating: 2, content: 'You might want to give this place a pass because it wasnt that good. There are much better restaurants. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 7, businessId: 7, rating: 3, content: 'I took my family here and everyone was happy and satisfied. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 8, businessId: 7, rating: 4, content: 'Never come here, you will become too happy and you will never want to leave. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 9, businessId: 7, rating: 5, content: 'I didnt want to go here because I had to take care of some work, but my firneds convinced me to go and it was amazing. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 1, businessId: 8, rating: 2, content: 'This place was very clean and organized. The employees are very helpful and welcoming. They have a great variety of food and it is all very tasty. The service was great and experience was an overall 10/10. I definitely recommend.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 2, businessId: 8, rating: 3, content: 'This place was incredible. Amazing food and fantastic service. They have indoor and outdoor dinning with very comfortable chairs. Definitely recommend coming here!!!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 3, businessId: 8, rating: 4, content: 'This Place was amazing we would definitely go back anytime. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 4, businessId: 8, rating: 4, content: 'At first I didnt want to fo to this place but it was definitely worth it. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 5, businessId: 8, rating: 5, content: 'We found this place on Yelp and we are so happy we did. We plan to always eat here forever. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 6, businessId: 8, rating: 2, content: 'You might want to give this place a pass because it wasnt that good. There are much better restaurants. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 7, businessId: 8, rating: 3, content: 'I took my family here and everyone was happy and satisfied. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 8, businessId: 8, rating: 4, content: 'Never come here, you will become too happy and you will never want to leave. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 9, businessId: 8, rating: 5, content: 'I didnt want to go here because I had to take care of some work, but my firneds convinced me to go and it was amazing. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 1, businessId: 9, rating: 2, content: 'This place was very clean and organized. The employees are very helpful and welcoming. They have a great variety of food and it is all very tasty. The service was great and experience was an overall 10/10. I definitely recommend.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 2, businessId: 9, rating: 3, content: 'This place was incredible. Amazing food and fantastic service. They have indoor and outdoor dinning with very comfortable chairs. Definitely recommend coming here!!!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 3, businessId: 9, rating: 4, content: 'This Place was amazing we would definitely go back anytime. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 4, businessId: 9, rating: 4, content: 'At first I didnt want to fo to this place but it was definitely worth it. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 5, businessId: 9, rating: 5, content: 'We found this place on Yelp and we are so happy we did. We plan to always eat here forever. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 6, businessId: 9, rating: 2, content: 'You might want to give this place a pass because it wasnt that good. There are much better restaurants. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 7, businessId: 9, rating: 3, content: 'I took my family here and everyone was happy and satisfied. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 8, businessId: 9, rating: 4, content: 'Never come here, you will become too happy and you will never want to leave. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 9, businessId: 9, rating: 5, content: 'I didnt want to go here because I had to take care of some work, but my firneds convinced me to go and it was amazing. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 1, businessId: 10, rating: 2, content: 'This place was very clean and organized. The employees are very helpful and welcoming. They have a great variety of food and it is all very tasty. The service was great and experience was an overall 10/10. I definitely recommend.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 2, businessId: 10, rating: 3, content: 'This place was incredible. Amazing food and fantastic service. They have indoor and outdoor dinning with very comfortable chairs. Definitely recommend coming here!!!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 3, businessId: 10, rating: 4, content: 'This Place was amazing we would definitely go back anytime. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 4, businessId: 10, rating: 4, content: 'At first I didnt want to fo to this place but it was definitely worth it. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 5, businessId: 10, rating: 5, content: 'We found this place on Yelp and we are so happy we did. We plan to always eat here forever. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 6, businessId: 10, rating: 2, content: 'You might want to give this place a pass because it wasnt that good. There are much better restaurants. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 7, businessId: 10, rating: 3, content: 'I took my family here and everyone was happy and satisfied. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 8, businessId: 10, rating: 4, content: 'Never come here, you will become too happy and you will never want to leave. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 9, businessId: 10, rating: 5, content: 'I didnt want to go here because I had to take care of some work, but my firneds convinced me to go and it was amazing. Carlo, our server, was absolutely FANTASTIC!! He is a top 10 server, loved him. The food was amazing, the setting is beautiful, we had an amazing time!', createdAt: new Date(), updatedAt: new Date()},

   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete(options, null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
