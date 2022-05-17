import classes from "./Duedate.module.css";

const Duedate = (props) => {
  const month = props.date.toLocaleString("en-US", {month:"long"});
  const day = props.date.toLocaleString("en-US", {day:"2-digit"});
  const year = props.date.getFullYear();
  return <div className = {classes.date}>
  <div className = {classes.month}>{month}</div>
  <div className = {classes.day}>{day}</div>
  <div className = {classes.year}>{year}</div>
  </div>

}

export default Duedate;
