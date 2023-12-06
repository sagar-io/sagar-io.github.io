import React from 'react'

function SkillsFactory(props) {
    return (
        <div className="skill">
           <img src={props.iconSrc} />
           <h3>{props.skillName}</h3>
        </div>
    )
}

export default SkillsFactory;