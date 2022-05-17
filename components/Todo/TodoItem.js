import React, {useState} from "react";
import classes from "./TodoItem.module.css";
import Card from "../UI/Card";
import Duedate from "./Duedate.js";
import Button from "../UI/Button";
import Modal from "../UI/Modal/Modal";
const TodoItem = (props) => {

const [showDelete, setDelete] = useState(false);

const deleteHandler = ()=>{
  props.onDel(props.id);
}

const cancelHandler = () => {
  console.log("ss");
    setDelete(false);
  }


const showConfirm = () => {
  setDelete(true);
}

//DON'T miss () for return otherwise entire child component not rendered!!!
return(
  <Card>
  {showDelete && <Modal title = "Confirmation" message = {"Are you sure you want to delete this item: '"+props.task+"'?"} onConfirm = {deleteHandler} haveCancel = {true} onCancel = {cancelHandler}></Modal>
  }
  <div>
  <h2 className = {classes.task}>{props.task}
  </h2>

  </div>
  <div>
  <Duedate date = {props.date}/>
  </div>
  <Button onClick = {showConfirm}>Delete</Button>
  </Card>
);
}

export default TodoItem;
