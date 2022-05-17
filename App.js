import React, {useState} from "react";
import './App.css';
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";
function App() {
  let todoList = [
    {id: "t1", task:"xD", date: new Date(2022, 1, 23)},
    {id: "t2", task:"Test", date: new Date(2021, 2, 3)}
  ];
  console.log("key"+todoList[0].id);
  const [task, setTask] = useState(todoList);

const removeTask = (taskId) => {
  setTask(prevTasks =>{
    return prevTasks.filter(task => task.id!==taskId);}
);
}
  const setFilterHandler = (newList) => {
    setTask(newList);
  }
  const addTaskHandler = (newTask) => {
    setTask(prevTasks => {
      return [...prevTasks, newTask]
    });
    console.log("new:"+todoList);
  }
  console.log(task);
  return (
    <React.Fragment>
    <TodoForm onClick = {addTaskHandler} list = {task} setFilteredItem = {setFilterHandler}></TodoForm>
    <TodoList list = {task} onDel = {removeTask}></TodoList>
    </React.Fragment>
  );
}

export default App;
