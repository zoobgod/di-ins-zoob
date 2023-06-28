const {greeting, sayhello} = require('./greeting.js')

// sayhello('kelly')

const {userinfo} = require('./user.js')

const url = 'https://jsonplaceholder.typicode.com/posts/1'
userinfo(url)
.then(data => console.log(data))

