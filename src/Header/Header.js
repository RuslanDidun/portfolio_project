import React from 'react'
import style from './Header.module.scss'
import Nav from "./Nav/Nav"
import Fade from 'react-reveal/Fade'
import BurgerMenu from "./Burger-menu/BurgerMenu";



const Header = () => {
    return (
        <div className={style.header}>
            <Fade right >
                <Nav/>
                <BurgerMenu/>
            </Fade>
        </div>
    )
}

export default Header