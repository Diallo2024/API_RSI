const express = require('express');
const { createInvestment, getInvestments, updateInvestmentState } = require('../controllers/investment.controller');
const validate = require('../app/middlewares/validation.middleware');
const investmentValidationSchema = require('../app/validators/investment.validator');
const Yup = require('yup');
const router = express.Router();

// Crear una inversión
router.post('/', validate(investmentValidationSchema), createInvestment);

// Obtener todas las inversiones
router.get('/', getInvestments);

// Actualizar el estado de una inversión
router.patch('/:id/state', validate(Yup.object({ state: Yup.string().oneOf(['pendiente', 'aprobada', 'rechazada'], 'Estado no válido') })), updateInvestmentState);

module.exports = router;
