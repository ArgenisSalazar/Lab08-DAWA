'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Medicamentos', {
      CodMedicamento: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descripcionMed: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fechaFabricacion: {
        type: Sequelize.DATE
      },
      fechaVencimiento: {
        type: Sequelize.DATE
      },
      presentacion: {
        type: Sequelize.STRING
      },
      stock: {
        type: Sequelize.INTEGER
      },
      precioVentaUni: {
        type: Sequelize.DECIMAL(10, 2)
      },
      precioVentaPres: {
        type: Sequelize.DECIMAL(10, 2)
      },
      CodTipoMed: {
        type: Sequelize.INTEGER
      },
      Marca: {
        type: Sequelize.STRING
      },
      CodEspec: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Medicamentos');
  }
};