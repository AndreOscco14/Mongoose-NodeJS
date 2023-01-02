require('./connection')
const User = require('./models/User')

async function createUsers(){

 const user = new User({
    username: 'Julian',
    password: '12345'
 })
 await user.save();

const userTwo = new User({
    username: 'Elian',
    password: '123456'
})
 await userTwo.save();

}

createUsers()