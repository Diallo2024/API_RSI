const { User } = require('../app/model/user.model');

// Crear usuario
exports.createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ message: 'Usuario creado con éxito', data: user });
  } catch (error) {
    next(error); // Enviar el error al middleware de manejo de errores
  }
};

// Obtener usuarios (con paginación)
exports.getUsers = async (req, res, next) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const users = await User.findAndCountAll({
      limit: parseInt(limit, 10),
      offset: (page - 1) * limit,
    });
    res.status(200).json({
      total: users.count,
      data: users.rows,
      page: parseInt(page, 10),
      pages: Math.ceil(users.count / limit),
    });
  } catch (error) {
    next(error);
  }
};

// Obtener usuario por ID
exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json({ data: user });
  } catch (error) {
    next(error);
  }
};