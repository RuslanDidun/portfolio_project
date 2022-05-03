import React from 'react'
import style from './Skills.module.scss'
import styleContainer from '../common/styles/container.module.css'
import Skill from "./Skill/Skill"
import Title from "../common/components/title/Title"
import {faReact} from "@fortawesome/free-brands-svg-icons/faReact"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCss3, faGit, faGithub, faHtml5, faJs} from "@fortawesome/free-brands-svg-icons"
import {faCode} from "@fortawesome/free-solid-svg-icons"
import Fade from 'react-reveal/Fade';


const MySkills = () => {

    return (

        <div id='skills' className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}> {/*присваиваем два класса*/}

                <div>
                    <Fade bottom>
                        <Title text={'Skills'}/>
                    </Fade>
                </div>
                <div className={style.skills}>
                    <Fade bottom>
                        <Skill title={'HTML5'}
                               description={'It is the fifth and last major HTML version. Using markup language for structuring, ' +
                                   'presenting content and create semantic layout.'}
                               icon={<FontAwesomeIcon icon={faHtml5} size={"4x"}/>}/>
                        <Skill title={'Css3/SaSS'}
                               description={'Using CSS to create the style of site, also cross-browser and semantic layout, ' +
                                   'Use a variety of libraries and animations.' +
                                   'Mixins, extensions, grid, variables.'}
                               icon={<FontAwesomeIcon icon={faCss3} size={"4x"}/>}/>
                        <Skill title={'Java Script'}
                               description={'Using JavaScript to write logic. Understanding the structure of the tree virtual DOM. ' +
                                   'Knowledge of the principles object-oriented programming.'}
                               icon={<FontAwesomeIcon icon={faJs} size={"4x"}/>}/>
                    </Fade>
                    <Fade bottom>
                        <Skill title={'React/Redux'}
                               description={'Create projects with React.js. ' +
                                   'FLUX Cycle, HOC, Hook, Thunks,REST API, AJAX, AXIOS. ' +
                                   'Understanding the component life cycle and asynchronous queries and operations.' +
                                   'Using Redux as state management library.'}
                               icon={<FontAwesomeIcon icon={faReact} size={"4x"}/>}/>
                        <Skill title={'Type Script'}
                               description={'Understanding of TypeScript helps to avoid errors and maintenance projects.'}
                               icon={<FontAwesomeIcon icon={faCode} size={"4x"}/>}/>

                        <Skill title={'Git/Github'}
                               description={'Using a hosting platform for version control and collaboration.'}
                               icon={<FontAwesomeIcon icon={faGithub} size={"4x"}/>}/>
                    </Fade>

                </div>
            </div>
        </div>

    )
}

export default MySkills