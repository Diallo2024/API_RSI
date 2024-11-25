const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const userRouter = require('../routes/user.router');
const errorHandler = require('../app/middlewares/error.middleware');
const investmentRouter = require('../routes/investment.router');    
const { sequelize } = require('./model/user.model');
const investmentProductRouter = require('../routes/investmentProduct.router');  


const app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

sequelize.sync({ alter: true})
.then(() => console.log('Base de datos sincronizada'))
.catch((err) => console.log('Error al sincronizar la base datos:', err));


app.use('/v1', userRouter);
app.use('/v1/investments', investmentRouter);
app.use('/v1/investmentproducts', investmentProductRouter);
app.use(errorHandler);

module.exports = app;
