require('../connection');

const User = require('../models/User');

// ==== Otra forma en la que se Actualiza ====
// const someFunction = async () => {
//   const user =   await User.findOne({username: 'Elian'});
//     console.log(user);
//     user.password= 'nuevaPassword';
//     user.save();
// }

// const updateUsers = async () => {
//   const user = await User.update({username: 'Andre'}, {
//                                 password: 'Contraseñaaa'
//   });
//     console.log(user);
//   }

const otherFunction = async () => {
   const user = await  User.findOneAndUpdate({username: 'Andre'},{
        name: 'Andreee Actualizado'
    }, {new: true})
    console.log(user);
}

otherFunction()