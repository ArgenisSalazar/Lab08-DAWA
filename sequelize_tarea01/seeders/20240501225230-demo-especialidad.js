'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Especialidades', [{
      CodEspec: 1,
      descripcionEsp: 'Cardiología',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      CodEspec: 2,
      descripcionEsp: 'Neurología',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Especialidades', null, {});
  }
};
