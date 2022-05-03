import React from 'react'
import style from './Contacts.module.scss'
import Title from "../common/components/title/Title"
import Fade from 'react-reveal/Fade'

const Contacts = () => {
    return (
        <div id='contacts' className={style.contactBlock}>
            <div className={style.container}>
                <Fade bottom>
                    <Title text={'Contacts'}/>
                </Fade>
                <Fade left cascade>
                    <form className={style.form}>
                        <input type="text" className={style.formArea} placeholder="Name"/>
                        <input type="text" className={style.formArea} placeholder="E-mail"/>
                        <textarea className={style.messageArea} placeholder="Your Message"/>
                        <button type="submit">Send Message</button>
                    </form>
                </Fade>
            </div>
        </div>
    )
}

export default Contacts