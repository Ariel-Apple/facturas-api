const { User, Post } = require('../database/models');

module.exports = {
  FacturaPost: async (req, res) => {
    const { 
      Nombre,
      Punto,
      DNI,
      Moneda,
      tipoDocumento,
      tipoEmision,
      tipoTransaccion,
      Ruc,
      Cpais,
      codigoSeguridadAleatorio,
      Items,
      Descripcion,
      Codigo,
      tipoIva,
      UnidadMedida,
      ivaTasa,
      ivaAfecta,
      Cantidad,
      PrecioUnitario,
      PrecioTotal,
      BaseGravItem,
      LiqIvaItem,
      tipoPago,
      Monto,
      totalPago,
      totalRedondeo,
      Pais

     } = req.body; // Cambia el nombre del parámetro
    try {
      const postFactura = await Post.create({
        Nombre,
        Punto,
        DNI,
        Moneda,
        tipoDocumento,
        tipoEmision,
        tipoTransaccion,
        Ruc,
        Cpais,
        codigoSeguridadAleatorio,
        Items,
        Descripcion,
        Codigo,
        tipoIva,
        UnidadMedida,
        ivaTasa,
        ivaAfecta,
        Cantidad,
        PrecioUnitario,
        PrecioTotal,
        BaseGravItem,
        LiqIvaItem,
        tipoPago,
        Monto,
        totalPago,
        totalRedondeo,
        Pais
      });

      if (postFactura) {
        res.status(200).send({ data: postFactura });
      } else {
        res.status(404).send({
          message: 'No existen detalles de la publicación'
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  }
};
