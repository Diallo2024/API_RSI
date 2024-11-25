const Yup = require('yup');

const investmentValidationSchema = Yup.object({
  type: Yup.string()
    .oneOf(['acciones', 'bonos', 'fondos'], 'Tipo de inversión no válido')
    .required('El tipo de inversión es obligatorio'),
  amount: Yup.number()
    .positive('El monto debe ser positivo')
    .required('El monto es obligatorio'),
  state: Yup.string()
    .oneOf(['pendiente', 'aprobada', 'rechazada'], 'Estado de inversión no válido'),
  userId: Yup.number()
    .integer('El ID del usuario debe ser un número entero')
    .required('El ID del usuario es obligatorio'),
});

module.exports = investmentValidationSche