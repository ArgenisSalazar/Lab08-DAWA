'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('OrdenCompras', [{
      NroOrdenC: 1,
      fechaEmision: new Date(),
      Situacion: 'Activa',
      Total: 50,
      CodLab: 1,
      NrofacturaProv: 'FACT001',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('OrdenCompras', null, {});
  }
};
