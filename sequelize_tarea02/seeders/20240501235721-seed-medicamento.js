'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Medicamentos', [{
      CodMedicamento: 1,
      descripcionMed: 'Ibuprofeno 400mg',
      fechaFabricacion: new Date(2023, 0, 1), 
      fechaVencimiento: new Date(2025, 11, 31),
      presentacion: 'Tabletas',
      stock: 1500,
      precioVentaUni: 0.15,
      precioVentaPres: 14.50,
      CodTipoMed: 101,
      Marca: 'Genérico',
      CodEspec: 301,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Medicamentos', null, {});
  }
};