import React, { useState, Fragment } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'
import classes from './AddUser.module.css'

const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [errorModal, setModalOn] = useState({title: '', age: '', show: false})

  const handleAddUser = event => {
    event.preventDefault()

    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      +enteredAge < 0
    ) {
      
      setModalOn({
        title: 'Invalid Input',
        message: 'Be Sure Name & Age Are Valid',
        show: true
      })
      
      setEnteredAge('')
      setEnteredUsername('')
      return
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('')
    setEnteredAge('')
  }

  const handleUsernameChange = event => {
    setEnteredUsername(event.target.value)
  }

  const handleAgeChange = event => {
    setEnteredAge(event.target.value)
  }

  const handleModalOff = () => {
    setModalOn(prevState => {
      return {title: '', age: '', show: false}
    })
  }

  return (
    <Fragment>
    {errorModal.show && <ErrorModal title={errorModal.title} message={errorModal.message} actions="Stop" handleModalOff={handleModalOff}/>}
    <Card className={classes.input}>
      <form onSubmit={handleAddUser}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          onChange={handleUsernameChange}
          value={enteredUsername}
        />
        <label htmlFor='age'>Age</label>
        <input
          id='age'
          type='number'
          onChange={handleAgeChange}
          value={enteredAge}
        />
        <Button type='submit'>+ User</Button>
      </form>
    </Card>
    </Fragment>
  )
}

export default AddUser
