import React from 'react'
import style from './Skill.module.scss'


const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}> <div className={style.skillIcon}>{props.icon}</div> </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.projectDescription}>{props.description}</span>
            </div>
        </div>

    )
}

export default Skill