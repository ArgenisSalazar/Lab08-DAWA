'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('DetalleOrdenCompras', [{
      NroOrdenC: 1,
      CodMedicamento: 1,
      descripcion: 'Compra de paracetamol',
      cantidad: 500,
      precio: 0.10,
      montouni: 50,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('DetalleOrdenCompras', null, {});
  }
};

