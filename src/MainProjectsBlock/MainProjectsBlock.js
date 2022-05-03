import React from 'react'
import style from './Main-projects.module.scss'
import styleContainer from '../common/styles/container.module.css'
import MyProjects from './MyProjectsComponent/MyProjects'
import Title from '../common/components/title/Title'
import socialImage1 from '../Assets/Images/socialImg1.jpeg'
import todoImage from '../Assets/Images/todoListImg.webp'
import Fade from 'react-reveal/Fade'

const MainProjectsBlock = () => {
//прокидываем картинку через style
    const socialNetworkImage = {
        backgroundImage: `url(${socialImage1})`,
    }
    const todoListImage = {
        backgroundImage: `url(${todoImage})`,
    }

    return (
        <div id='projects' className={style.mainProjectBlock}>
            <div className={`${styleContainer.container} ${style.blockContainer}`}>
                <div>
                    <Fade bottom>
                        <Title text={'Projects'}/>
                    </Fade>
                </div>
                <div className={style.myProjects}>
                    <Fade bottom>
                        <MyProjects style={socialNetworkImage}
                                    title={'Social Network'}
                                    description={'Absolutely functional social network.' +
                                        'Used React + redux. Hooks, Reducers, Thunks.'}/>
                        <MyProjects style={todoListImage}
                                    title={'Organizer'}
                                    description={'Small application, which helps to make your own todo list.' +
                                        'Used React + redux'}/>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default MainProjectsBlock