import React from "react";
import Button from "./Button";
import Image from "./IconJessica";

function Card(){
  return(
      <div className="card">
        <Image className="image"/>
        <h1>Jessica Randall</h1>
        <p className="from">London, United Kingdom</p>
        <p className="job">"Front-end developer and avid reader."</p>
        <Button text="Github" name="GitHub"/>
        <Button text="Frontend Mentor" name="FrontendMentor"/>
        <Button text="LinkedIn" name="LinkedIn"/>
        <Button text="Twitter" name="Twitter"/>
        <Button text="Instagram" name="Instagram"/>
      </div>  
  )
}

export default Card;