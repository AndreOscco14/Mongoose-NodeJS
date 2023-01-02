`use strictQuery`
const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/mywebstore';

// Creamos la coneccion (Ponemos nombre de la BBDD  y Mongoose Se encarga de crear la BBDD)
mongoose.connect(uri);

var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
// });

db.on('open', _ => {
    console.log('BBDD is connected to', uri );
})
db.on('error', err => {
    console.log(err);
})