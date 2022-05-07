import React from 'react'
import style from './Button.module.scss'


const Button = (props) => {

    return (
        <a href={props.src}
           className={style.button}
           target="_blank"
           rel="noreferrer">{props.text}</a>
    )
}

export default Button