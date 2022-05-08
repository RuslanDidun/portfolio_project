import React from 'react'
import style from './MyProjectsComponent.module.scss'
import styles from '../../common/components/button/Button.module.scss'

function MyProjects(props) {

    // const projects = [
    //     {
    //         name: 'Social Network',
    //         src: 'https://github.com/Kano066/mySocialNetworkProject',
    //     },
    //
    //     {
    //         name: 'Organizer',
    //         src: 'https://github.com/Kano066/myTodoListProject',
    //     }
    // ]
    // const projectsComponent = projects.map(project =>
    //     <Button text ='look'
    //         src={project.src}/>)

    return (
        <div className={style.myProjects}>
            <div className={style.icon} style={props.style}>
                <a href={props.hrefToProps}
                   className={styles.button}
                   target="_blank"
                   rel="noreferrer">Quick look</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    )
}

export default MyProjects