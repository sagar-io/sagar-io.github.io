import React from "react";

function SkillsFactory(props) {
  return (
    <div className="skill">
      <img src={props.iconSrc} alt="" />
      <h3>{props.skillName}</h3>
    </div>
  );
}

export default SkillsFactory;
