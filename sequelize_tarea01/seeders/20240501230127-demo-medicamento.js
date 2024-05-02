'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Medicamentos', [{
      CodMedicamento: 1,
      descripcionMed: 'Aspirina',
      fechaFabricacion: new Date(),
      fechaVencimiento: new Date(),
      presentacion: 'Tabletas',
      stock: 100,
      precioVentaUni: 5.00,
      precioVentaPres: 5.00,
      CodTipoMed: 1,
      Marca: 'Bayer',
      CodEspec: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      CodMedicamento: 2,
      descripcionMed: 'Ibuprofeno',
      fechaFabricacion: new Date(),
      fechaVencimiento: new Date(),
      presentacion: 'Capsulas',
      stock: 200,
      precioVentaUni: 8.00,
      precioVentaPres: 8.00,
      CodTipoMed: 2,
      Marca: 'Genfar',
      CodEspec: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Medicamentos', null, {});
  }
};

