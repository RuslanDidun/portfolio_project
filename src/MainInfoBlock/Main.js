import React from 'react'
import style from './Main.module.scss'
import Fade from 'react-reveal/Fade';


const Main = () => {
    return (
        <div id='main' className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.bgImage}/>
                <div className={style.mainText}>
                    <Fade bottom>
                        <span> Hi There!</span>
                        <span>I am Ruslan <span>Didun</span></span>
                        <h1>Frontend Developer</h1>
                    </Fade>
                    <Fade bottom>
                        <div className={style.quoteDiv}>
                            <blockquote>
                                " Simplicity is the soul of efficiency "
                            </blockquote>
                            <cite> ~ Austin Freeman</cite>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Main