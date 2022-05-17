import React, {useState} from "react";
import Card from "../UI/Card";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button";
import classes from "./TodoForm.module.css";
const TodoForm = (props) => {

const [enteredDate, setDate] = useState("");
const [enteredTask, setTask] = useState("");
const [searchItem, setSearchItem] = useState("");
const [error, setError] = useState();
const [showRed, setRed] = useState(false);

const dateChangeHandler = (event) => {
  setDate(event.target.value);
  console.log(enteredDate);
}

const taskChangeHandler = (event) => {
   setTask(event.target.value);
   if(enteredTask.trim().length<3){
     setRed(true);
   }else{setRed(false);}
  console.log(enteredTask);
}

const submitHandler = (event) => {
  event.preventDefault();
  if (enteredTask.trim().length<3){
    setError({
      title: "Your task is too short!",
      msg:"Please enter a valid task!"
    });
    return;
  }
  if(enteredDate === ""){
    setError({
      title:"Empty date!",
      msg:"Please enter a date!"
    });
    return;
  }
  const today = new Date();
  console.log(today);
  console.log(new Date(enteredDate));
  if(new Date(enteredDate)<today){
    setError({
      title:"Invalid date",
      msg:"Please enter a date that is today, or later than today!"
    })
    return;
  }

  const newTask = {
    id:Math.random().toString(),
    task:enteredTask,
    date:new Date(enteredDate)
  }
  props.onClick(newTask);

  setTask("");
  setDate("");
}

const rmError = () => {
  setError(null);
}

const searchHandler = (event) => {
  setSearchItem(event.target.value);
  const re = new RegExp(searchItem, "gi");
  props.setFilteredItem(props.list.filter(item=> re.test(item.task)));
  console.log(re);
  console.log(re.test(props.list[0].task));
  console.log(props.list.filter(item=> re.test(item.task)));
  console.log(props.list);
}

  return (
    <React.Fragment>
    <Card>
    {error && <Modal onConfirm = {rmError} onCancel = {rmError} haveCancel = {false} title = {error.title} message = {error.msg} />}
    <form onSubmit = {submitHandler}>
    <input type = "search" onChange = {searchHandler} />
    <button>Search</button>
    <div className = {classes.centerTask}>
    <label>Task</label>
    {/*setting value here ensures that the very latest value gets reflected in the input fields, after the form is submitted, it should be cleared and empty*/}
    <input type = "text" className = {`${classes.task} ${showRed && classes.invalid}`} value = {enteredTask} onChange = {taskChangeHandler} ></input>
    </div>
    <div className = {classes.centerDate}>
    <label>Due date</label>
    <input type = "date" value = {enteredDate} onChange = {dateChangeHandler} className = {classes.date}></input>
    <Button type = "submit" className = {classes.button} onClick = {submitHandler}>Add task</Button>
    </div>


  </form>
  </Card>
  </React.Fragment>
);

}
export default TodoForm;
