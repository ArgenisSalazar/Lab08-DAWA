'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DetalleOrdenCompras', {
      CodMedicamento: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Medicamentos',
          key: 'CodMedicamento'
        },
        primaryKey: true,
        allowNull: false
      },
      NroOrdenC: {
        type: Sequelize.INTEGER,
        references: {
          model: 'OrdenCompras',
          key: 'NroOrdenC'
        },
        primaryKey: true,
        allowNull: false
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cantidad: {
        type: Sequelize.INTEGER
      },
      precio: {
        type: Sequelize.DECIMAL(10, 2)
      },
      montouni: {
        type: Sequelize.DECIMAL(10, 2)
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
    await queryInterface.dropTable('DetalleOrdenCompras');
  }
};