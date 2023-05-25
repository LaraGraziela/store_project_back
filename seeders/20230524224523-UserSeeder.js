"use strict";
const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    for(let i = 0; i <= 100 ; i++) {
      await queryInterface.bulkInsert(
        "Users",
        [
          {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            type: Math.floor(Math.random() * (3 - 1) + 1),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
    }
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Lara Graziela",
          email: "laragdiogo@gmail.com",
          password: "12345",
          type: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
