const { Investment } = require('../app/model/investment.model');

// Crear inversión
exports.createInvestment = async (req, res, next) => {
  try {
    const investment = await Investment.create(req.body);
    res.status(201).json({ message: 'Inversión creada con éxito', data: investment });
  } catch (error) {
    next(error);
  }
};

// Obtener todas las inversiones
exports.getInvestments = async (req, res, next) => {
  try {
    const investments = await Investment.findAll();
    res.status(200).json({ data: investments });
  } catch (error) {
    next(error);
  }
};

// Actualizar el estado de una inversión
exports.updateInvestmentState = async (req, res, next) => {
  const { id } = req.params;
  const { state } = req.body;

  try {
    const investment = await Investment.findByPk(id);
    if (!investment) {
      return res.status(404).json({ message: 'Inversión no encontrada' });
    }

    investment.state = state;
    await investment.save();
    res.status(200).json({ message: 'Estado actualizado con éxito', data: investment });
  } catch (error) {
    next(error);
  }
};
