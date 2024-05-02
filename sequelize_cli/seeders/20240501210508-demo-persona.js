'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Personas', [
      {
        nomCli: 'Argenis',
        apeCli: 'Salazar Sihuay',
        dirCli: 'Ate',
        dniCli: '45632178',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Personas', null, {});
  },
};
