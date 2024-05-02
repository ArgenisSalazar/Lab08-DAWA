'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Laboratorios', [{
      CodLab: 1,
      razonSocial: 'Laboratorios BestPharma',
      direccion: '123 Pharma St, HealthCity',
      telefono: '555-1234',
      email: 'info@bestpharma.com',
      contacto: 'Juan Pérez',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Laboratorios', null, {});
  }
};

