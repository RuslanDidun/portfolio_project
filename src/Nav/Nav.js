import React from 'react'
import style from './Nav.module.scss'
import {Link} from 'react-scroll'


const Nav = () => {
    return (
        <div className={style.nav}>
            <Link to='main' spy={true} smoth='true'
                  offset={1} duration={1000}>Main</Link>
            <Link to='skills' spy={true} smoth='true'
                  offset={1} duration={1000}>Skills</Link>
            <Link to='projects' spy={true} smoth='true'
                  offset={1} duration={1000}>Projects</Link>
            <Link to='contacts' spy={true} smoth='true'
                  offset={1} duration={1000}>Contacts</Link>
        </div>
    )
}

export default Nav