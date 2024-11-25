const app = require('./app/app'); 
const { sequelize } = require('./app/model/user.model');

const PORT = process.env.PORT || 3001;

//Aranque del servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

