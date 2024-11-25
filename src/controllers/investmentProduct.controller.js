const { InvestmentProduct } = require('../app/model/investmentProduct.model');

// Crear producto
exports.createProduct = async (req, res, next) => {
  try {
    const product = await InvestmentProduct.create(req.body);
    res.status(201).json({ message: 'Producto creado con éxito', data: product });
  } catch (error) {
    next(error);
  }
};

// Obtener todos los productos
exports.getProducts = async (req, res, next) => {
  try {
    const products = await InvestmentProduct.findAll();
    res.status(200).json({ data: products });
  } catch (error) {
    next(error);
  }
};

// Actualizar producto
exports.updateProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await InvestmentProduct.findByPk(id);
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });

    await product.update(req.body);
    res.status(200).json({ message: 'Producto actualizado con éxito', data: product });
  } catch (error) {
    next(error);
  }
};

// Eliminar producto
exports.deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await InvestmentProduct.destroy({ where: { id_product: id } });
    if (!result) return res.status(404).json({ message: 'Producto no encontrado' });

    res.status(200).json({ message: 'Producto eliminado con éxito' });
  } catch (error) {
    next(error);
  }
};
