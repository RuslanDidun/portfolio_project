import React from 'react'
import style from './MyProjectsComponent.module.scss'
import Button from "../../common/components/button/Button";


const MyProjects = (props) => {

    return (
        <div className={style.myProjects}>
            <div className={style.icon} style={props.style}>
               <Button text={"Quick look"}/>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    )
}

export default MyProjects