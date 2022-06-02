import React, { useState } from 'react'
import AddUser from './Components/Users/AddUser'
import UsersList from './Components/Users/UsersList'

function App () {
  const [users, setUsersList] = useState([])
  const handleAddUser = (userName, userAge) => {
    setUsersList(prevState => {
      return [...prevState, {name: userName, age: userAge, id: Math.random().toString()}]
    })
  }
  return (
    <div>
      <AddUser onAddUser={handleAddUser}/>
      <UsersList users={users} />
    </div>
  )
}

export default App
