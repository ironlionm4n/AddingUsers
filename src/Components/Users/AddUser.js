import React, { useState, Fragment, useRef } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'
import classes from './AddUser.module.css'

const AddUser = props => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [errorModal, setModalOn] = useState({ title: '', age: '', show: false })

  const handleAddUser = event => {
    event.preventDefault()

    const enteredName = nameInputRef.current.value
    const enteredUserAge = ageInputRef.current.value

    if (
      enteredName.trim().length === 0 ||
      enteredUserAge.trim().length === 0 ||
      +enteredUserAge < 1
    ) {
      setModalOn({
        title: 'Invalid Input',
        message: 'Be Sure Name & Age Are Valid',
        show: true
      })
      return
    }
    props.onAddUser(enteredName, enteredUserAge)
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  }

  const handleModalOff = () => {
    setModalOn(prevState => {
      return { title: '', message: '', show: false }
    })
  }

  return (
    <Fragment>
      {errorModal.show && (
        <ErrorModal
          title={errorModal.title}
          message={errorModal.message}
          actions='Stop'
          handleModalOff={handleModalOff}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={handleAddUser}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            ref={nameInputRef}
          />
          <label htmlFor='age'>Age</label>
          <input
            id='age'
            type='number'
            ref={ageInputRef}
          />
          <Button type='submit'>+ User</Button>
        </form>
      </Card>
    </Fragment>
  )
}

export default AddUser
