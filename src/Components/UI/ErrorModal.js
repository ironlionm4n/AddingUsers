import React, { Fragment } from 'react'
import * as ReactDOM from 'react-dom'
import Card from './Card'
import Button from './Button'
import classes from './ErrorModal.module.css'

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.handleModalOff}></div>
}

const ModalOverlay = props => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.handleModalOff}>Understood</Button>
      </footer>
    </Card>
  )
}

const ErrorModal = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop handleModalOff={props.handleModalOff} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          handleModalOff={props.handleModalOff}
        />,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  )
}

export default ErrorModal
