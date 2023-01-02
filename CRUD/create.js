require('../connection')

const Product = require('../models/Product')

const createProduct = async () => {

  const LaptopOne =  new Product({
        name: 'Laptop HP',
        description: 'RAM 16GB'
    })
    await LaptopOne.save();


    const LaptopTwo =  new Product({
        name: 'ACER ',
        description: 'RAM 16GB x64'
    })
    await LaptopTwo.save();

}

createProduct();