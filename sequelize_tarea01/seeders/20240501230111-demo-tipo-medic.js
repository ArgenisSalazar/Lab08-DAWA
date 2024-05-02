'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TipoMedics', [{
      CodTipoMed: 1,
      descripcion: 'Antipirético',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      CodTipoMed: 2,
      descripcion: 'Analgésico',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TipoMedics', null, {});
  }
};

