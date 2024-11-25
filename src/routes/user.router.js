const express = require('express');
const { createUser, getUsers }  = require('../controllers/user.controller');
const validate = require('../app/middlewares/validation.middleware');   
const userValidationSchema = require('../app/validators/user.validator');   

//Rutas
const router = express.Router();
router.post('/', validate(userValidationSchema), createUser);
router.get('/', getUsers);

// CREATE
router.post('/', async (req, res) => {
  try {
    const users = await users.create(req.body);
    res.status(201).json({ message: 'Usuario creado con éxito', data: user });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el usuario', error: error.message });
  }
});

// READ BY ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.status(200).json({ data: user });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el usuario', error: error.message });
  }
});

// UPDATE CALL
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await User.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ message: 'Usuario no encontrado para actualizar' });
    const updatedUser = await User.findByPk(req.params.id);
    res.status(200).json({ message: 'Usuario actualizado con éxito', data: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el usuario', error: error.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await User.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: 'Usuario no encontrado para eliminar' });
    res.status(200).json({ message: 'Usuario eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el usuario', error: error.message });
  }
});

module.exports = router;
