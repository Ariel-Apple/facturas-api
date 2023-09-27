const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {

      Post.belongsToMany(models.User, {
        through: 'UserPosts', // Asegúrate de usar el nombre correcto de la tabla intermedia
        foreignKey: 'postId',
      });
    }
  }

  Post.init(
    {
      // Atributos del modelo 'Post'




      
      Nombre: DataTypes.STRING,
      Punto: DataTypes.FLOAT,
      DNI: DataTypes.FLOAT,
      Moneda: DataTypes.STRING,
      tipoDocumento: DataTypes.STRING,
      tipoEmision: DataTypes.STRING,
      tipoTransaccion: DataTypes.STRING,
      Ruc: DataTypes.FLOAT,
      Cpais: DataTypes.STRING,
      codigoSeguridadAleatorio: DataTypes.STRING,
      Items: DataTypes.STRING,
      Descripcion: DataTypes.STRING,
      Codigo: DataTypes.FLOAT,
      tipoIva: DataTypes.STRING,
      UnidadMedida: DataTypes.STRING,
      ivaTasa: DataTypes.STRING,
      ivaAfecta: DataTypes.STRING,
      Cantidad: DataTypes.FLOAT,
      PrecioUnitario: DataTypes.FLOAT,
      PrecioTotal: DataTypes.FLOAT,
      BaseGravItem: DataTypes.STRING,
      LiqIvaItem: DataTypes.STRING,
      tipoPago: DataTypes.STRING,
      Monto: DataTypes.FLOAT,
      totalPago: DataTypes.FLOAT,
      totalRedondeo: DataTypes.FLOAT,
      Pais: DataTypes.STRING,
   


    },
    {
      sequelize,
      modelName: 'Post',
    }
  );
  return Post;
};
