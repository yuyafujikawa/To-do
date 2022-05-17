import "./Card.css";

function Card (props) {
  const classes = "card " + props.className; //alternatively, className = classes
  return <div className = {`card ${props.className}`}>{props.children}</div>;
}

export default Card;
