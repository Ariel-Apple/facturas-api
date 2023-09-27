'use strict';
const path = require('path');
const { STRING } = require('sequelize');





/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nombre: {
        type: Sequelize.STRING(500),
      },
      Punto: {
        type: Sequelize.STRING(500),
      },
      DNI: {
        type: Sequelize.FLOAT,
      },
      Moneda: {
        type: Sequelize.STRING,
      },
      tipoDocumento: {
        type: Sequelize.STRING(10000),
      },
      tipoEmision: {
        type: Sequelize.STRING(10000),
      },
      tipoTransaccion: {
        type: Sequelize.STRING, // Almacena la ruta de la imagen en el sistema de archivos
      },
      Ruc: {
        type: Sequelize.FLOAT,
      },
      Cpais: {
        type: Sequelize.STRING,
      },
      codigoSeguridadAleatorio: {
        type: Sequelize.STRING,
      },
      Items: {
        type: Sequelize.STRING
      },
      Descripcion: {
        type: Sequelize.STRING(10000), 
      },
      Codigo: {
        type: Sequelize.FLOAT,
      },
      tipoIva: {
        type: Sequelize.STRING,
      },
      UnidadMedida: {
        type: Sequelize.STRING(10000), 

      },
      ivaTasa: {
        type: Sequelize.STRING(3000), 

      },

      ivaAfecta: {
        type: Sequelize.STRING(3000), 

      },
      Cantidad: {
        type: Sequelize.FLOAT, 

      },
      PrecioUnitario: {
        type: Sequelize.FLOAT, 

      },
      PrecioTotal: {
        type: Sequelize.FLOAT, 

      },
      BaseGravItem: {
        type: Sequelize.STRING(3000), 

      },
      LiqIvaItem: {
        type: Sequelize.STRING(3000), 

      },
      tipoPago: {
        type: Sequelize.STRING(3000), 

      },
      Monto: {
        type: Sequelize.FLOAT, 

      },
      totalPago: {
        type: Sequelize.FLOAT, 

      },
      totalRedondeo: {
        type: Sequelize.FLOAT, 

      },
      Pais: {
        type: Sequelize.STRING(3000), 

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
    await queryInterface.dropTable('Posts');
  }
};
