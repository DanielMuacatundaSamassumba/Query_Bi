import React from 'react'
import biliolobama from './assets/IMG-20231008-WA0468.jpg'
import Data from './components/Data'
import { useState } from 'react'
function Events() {

  const [users, setUsers] = useState([
    { id: 1, name: "daniel", Age: 20 },
    { id: 2, name: "Jofre", Age: 20 },
    { id: 3, name: "Francklin", Age: 20 }
  ])
  const Randomvalue = () => {
    const Random = Math.floor(Math.random() * 4);
    setUsers((prevUser) => {
      prevUser.filter((user) => {
        Random !== user.id
      }
      )
    })
  }
  return (
    <div className='container'>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>

        ))}
      </ul>
      <button onClick={Randomvalue}>Delete</button>
    </div>

  )
}

export default Events