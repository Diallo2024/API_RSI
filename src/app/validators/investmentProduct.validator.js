const Yup = require('yup');

const investmentProductValidationSchema = Yup.object({
  product_name: Yup.string()
    .required('El nombre del producto es obligatorio'),
  description: Yup.string(),
  risk: Yup.string()
    .oneOf(['bajo', 'medio', 'alto'], 'Riesgo no válido')
    .required('El riesgo es obligatorio'),
  expected_profit: Yup.number()
    .positive('La ganancia esperada debe ser positiva')
    .required('La ganancia esperada es obligatoria'),
  available_date: Yup.date()
    .required('La fecha de disponibilidad es obligatoria'),
});

module.exports = investmentProductValidationSchema;
