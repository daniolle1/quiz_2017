'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {

        return queryInterface.bulkInsert('Quizzes', [
            {
                quizId: 0,
                text: 'Roma',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                quizId: 1,
               text: 'Lisboa',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                quizId: 2,
               text: 'Madrid',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
               quizId: 3,
               text: 'París',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: function (queryInterface, Sequelize) {

        return queryInterface.bulkDelete('Tips', null, {});
    }
};
