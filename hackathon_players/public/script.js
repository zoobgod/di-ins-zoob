


const getProductsFile = async() => {
try {
const res = await fetch('/api/products')
const data = await res.json()
render(data)
}   
catch(e){
console.log(e)
} 
}

const render = (arr) => {
    const html = arr.map(item => {
        return `<div>
        <h2> ${player.name} </h2>
        <h2> ${player.surname} </p>
        </div>`
    })
    document.getElementById('root').innerHTML= html.join('')
}

getProductsFile()