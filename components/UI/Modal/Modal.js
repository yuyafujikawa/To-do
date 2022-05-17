import Card from "../Card";
import Button from "../Button";
import classes from "./Modal.module.css"
import ReactDOM from "react-dom";
import React from "react"

const Backdrop = props => {
  return <div className = {classes.backdrop} onClick = {props.onCancel} />;
};

const ModalOverlay = props => {
  return <Card className = {classes.modal}>
  <header className = {classes.header}>
  <h2>
  {props.title}
  </h2>
  </header>
  <div className = {classes.content}>
  <p>{props.message}</p>
  </div>
  <footer className = {classes.actions}>
  <Button  onClick = {props.onConfirm}>Ok</Button>
  {props.haveCancel && <Button onClick = {props.onCancel}>Cancel</Button>}

  </footer>
  </Card>;
}

const Modal = (props) => {
  return (<React.Fragment>
  {ReactDOM.createPortal(<Backdrop onCancel = {props.onCancel} />, document.getElementById("backdrop-root"))}
  {ReactDOM.createPortal(<ModalOverlay title = {props.title} message = {props.message} onCancel = {props.onCancel} haveCancel = {props.haveCancel} onConfirm = {props.onConfirm} />, document.getElementById("overlay-root"))}
  </React.Fragment>
);
}

export default Modal;
