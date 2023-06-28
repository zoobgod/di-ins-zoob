const name = 'Mike Tyson';
const {greeting, sayhello} = require('./greeting.js')
const {userinfo} = require('./user.js')

const url = 'https://jsonplaceholder.typicode.com/users/1'
userinfo(url)
.then(users => console.log(users))


// greeting(name)
// sayhello('Jonah')

// console.log(obj.greeting)