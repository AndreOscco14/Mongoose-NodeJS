require('../connection')
 
const Product = require('../models/Product')

const someFunction = async() => {
    const result = await Product.deleteMany({name: 'laptop'})

    console.log(result);
}

someFunction();