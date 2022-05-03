import React from 'react'
import style from './Header.module.scss'
import Nav from "../Nav/Nav"
import Fade from 'react-reveal/Fade'



const Header = () => {
    return (
        <div className={style.header}>
            <Fade right >
                <Nav/>
            </Fade>
        </div>
    )
}

export default Header