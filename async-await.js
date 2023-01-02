require('./connection')

const Product = require('./models/Product')

async function main(){
    const product = new Product({
        name: 'keyboard 2',
        description: 'Coursair HP  2',
        price: 150
    })
    
  const productSaved =  await product.save();
    console.log(productSaved);
}

main()
    .then(productSaved => console.log(productSaved))
    .catch(err => console.log(err));