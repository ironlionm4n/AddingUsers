import React from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'

const AddUser = props => {
  const handleAddUser = event => {
    event.preventDefault()
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={handleAddUser}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' />
        <label htmlFor='age'>Age</label>
        <input id='age' type='number' />
        <button type='submit'>+ User</button>
      </form>
    </Card>
  )
}

export default AddUser
