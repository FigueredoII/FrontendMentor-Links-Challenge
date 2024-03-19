import react from "react";

function Button({text},{name}){
  return(
    <div>
      <button id={name} className={name} >{text}</button>
    </div>
  )
}

export default Button