import React, {useState} from 'react'
import style from './BurgerNav.module.scss'
import {Link} from 'react-scroll'


const BurgerMenu = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)
    let onBurgerButtonClick = () => {
        setMenuIsOpen(
            !menuIsOpen
        )
        console.log(menuIsOpen)
    }

    return (
        <div className={style.burger}>
            <div className={menuIsOpen ? `${style.burgerDiv} ${style.show}` : style.burgerDiv}>
                <Link to='main' spy={true} smoth={true}
                      offset={1} duration={1000}>Main</Link>
                <Link to='skills' spy={true} smoth={true}
                      offset={1} duration={1000}>Skills</Link>
                <Link to='projects' spy={true} smoth={true}
                      offset={1} duration={1000}>Projects</Link>
                <Link to='contacts' spy={true} smoth={true}
                      offset={1} duration={1000}>Contacts</Link>
            </div>
            <div onClick={onBurgerButtonClick} className={style.BurgerButton}> </div>
        </div>
    )
}

export default BurgerMenu