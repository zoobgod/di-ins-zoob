import React, { useState, useEffect} from 'react'

const User = () => {
        const [myInput, changeInput] = useState('');
      
        const myChangedInput = (event) => {
            changeInput(event.target.value);
          console.log(event.target.value);
        };

  const [users, setUsers] = useState([])

  useEffect (() =>{
    fetchUsers()
}, [])

  const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const b = await res.json();
    setUsers(b)
  }

  return (
    <div >
    <div>
      <input type="text" value={myInput} onChange={myChangedInput} />
    </div>
      {users.map((user) => (
        <div className="tc bg-light-green br3 pa3 ma2 dib bw2 grow shadow-5" key={user.id}>
            <img src={`https://robohash.org/${user.id}?size=150x150`} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.username}</p>
        </div>
      ))}
    </div>
  )
}

export default User;