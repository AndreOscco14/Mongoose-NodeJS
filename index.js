require('./connection')

// Guardamos el modelo en Const Product
const Product = require('./models/Product')

const product = new Product({
    name: 'laptop',
    description: 'lenovo ThinkPad',
    price: 1300.99
})

product.save((err, document) => {
    if(err) console.log(err);
    console.log(document);    
})

console.log(product);