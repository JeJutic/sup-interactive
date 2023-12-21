import "./Button.css";

function Button({ text, props }) {
  return <input className="sup-interactive-btn" value={text} {...props} />;
}

export default Button;
