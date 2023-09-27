const { User, Post } = require('../database/models');

module.exports = {
  DetailsFactura: async (req, res) => {
    const { idFacturas } = req.params; // Cambia el nombre del parámetro
    try {
      const postDetails = await Post.findByPk(idFacturas);

      if (postDetails) {
        res.status(200).send({ data: postDetails });
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
