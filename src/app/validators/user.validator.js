const Yup = require('yup');

const userValidationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .required('El nombre es obligatorio'),
  email: Yup.string()
    .email('Correo no válido')
    .required('El correo es obligatorio'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
  profil: Yup.string()
    .oneOf(['medio', 'impulsivo', 'reservado'], 'Perfil no válido')
    .required('El perfil es obligatorio'),
});

module.exports = userValidationSchema;
