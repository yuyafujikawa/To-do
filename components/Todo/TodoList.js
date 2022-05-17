import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";
const TodoList = (props) => {
  if (props.list.length === 0){
    return <h2>No todo list found!</h2>;
  }
  console.log(props.list);
  return (<div className = {classes.list}><ol>
    {props.list.map (todo =>  <li key = {todo.id}><TodoItem id = {todo.id} task = {todo.task} date = {todo.date} onDel = {props.onDel} /></li>) }</ol></div>
  );
}

export default TodoList;
