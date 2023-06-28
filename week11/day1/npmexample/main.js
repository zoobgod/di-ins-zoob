const axios = require('axios');
const url = 'https://jsonplaceholder.typicode.com/posts/1'

axios.get(url)
.then(res=> {
    if(res.status === 200) {
        console.log(res.data)
    }



})