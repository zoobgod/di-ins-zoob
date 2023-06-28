import'./Hello.css'

const styling =  {
    backgroundColor:'black', fontSize:'22px', color:'red'
}
const Hello = () => {
    const html_users = users.map(item => {
        return (
            <div>
                <h2>{item.name}</h2>
                <p className='textemail'>{item.email}</p>
                </div>
        )
    })
return (
<div>
<h1 style={
    styling
        }>Hello users!</h1>
{
   html_users
}

</div>


)
}

export default Hello