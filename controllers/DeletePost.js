const { Post } = require('../database/models');

module.exports = {
  DeletePost: async (req, res) => {
    const { postId } = req.params;

    try {
      // Verificar si la publicación existe
      const post = await Post.findByPk(postId);

      if (!post) {
        console.log('Publicación no encontrada');
        return res.status(404).json({ message: 'Publicación no encontrada' });
      }

      // Eliminar la publicación
      await post.destroy();
      console.log('Publicación eliminada exitosamente');
      res.status(200).json({ message: 'Publicación eliminada exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
