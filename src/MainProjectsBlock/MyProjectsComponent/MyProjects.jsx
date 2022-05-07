import React from 'react'
import style from './MyProjectsComponent.module.scss'
import Button from "../../common/components/button/Button";


function MyProjects(props) {

    const projects = [
        {
            src: 'https://github.com/Kano066/myTodoListProject',
            text: 'Quick look'
        },

        {
            src: 'https://github.com/Kano066/mySocialNetworkProject',
            text: 'abra-kadabra'
        },
    ]

    // const projectsComponent = projects.map(project => <Button src={project.src}
    //                                                           text={'Quick look'} />)

    return (
        <div className={style.myProjects}>
            <div className={style.icon} style={props.style}>
                {/*{projectsComponent}*/}
                {/*<Button text={"Quick look"}/>*/}
                {projects.map(p => <Button src={p.src}
                                           text={p.text}/>)}

            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    )
}

export default MyProjects