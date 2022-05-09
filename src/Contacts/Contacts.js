import React from 'react'
import style from './Contacts.module.scss'
import Title from "../common/components/title/Title"
import Fade from 'react-reveal/Fade'
import ContactForm from "./ContactForm";

const Contacts = () => {

    return (
        <div id='contacts' className={style.contactBlock}>
            <div className={style.container}>
                <Fade bottom>
                    <Title text={'Contacts'}/>
                </Fade>
                <Fade left cascade>
                    {/*<form className={style.form}*/}
                    {/*      action="https://formspree.io/f/mjvljvrz"*/}
                    {/*      method="POST">*/}
                    {/*    <input type="text" name="name" className={style.formArea} placeholder="Name"  />*/}
                    {/*    <input type="email" name='email' className={style.formArea} placeholder="E-mail"/>*/}
                    {/*    <textarea name={'message'} className={style.messageArea} placeholder="Your Message"/>*/}
                    {/*    <button type="submit">Send Message</button>*/}
                    {/*</form>*/}

                    <ContactForm/>
                </Fade>
            </div>
        </div>
    )
}

export default Contacts