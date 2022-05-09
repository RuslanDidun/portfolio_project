import React from 'react';
import {useForm, ValidationError} from '@formspree/react';
import style from './Contacts.module.scss'
import Fade from 'react-reveal/Fade'


function ContactForm() {
    const [state, handleSubmit] = useForm("mjvljvrz");
    if (state.succeeded) {
        return <p style={{color: 'white', fontSize: '14px', fontWeight: '700'}}>Thank you for contacting me!
            I will get back to you as soon as possible.</p>
    }
    return (
        <Fade left cascade>
            <form onSubmit={handleSubmit} className={style.form}>
                <input type="text" name="name" className={style.formArea} placeholder="Name"/>
                <input type="email" name='email' className={style.formArea} placeholder="E-mail"/>
                <ValidationError prefix="Email" field="email" errors={state.errors}/>
                <textarea name={'message'} className={style.messageArea} placeholder="Your Message"/>
                <ValidationError prefix="Message" field="message" errors={state.errors}/>
                <button type="submit" disabled={state.submitting}>Send Message</button>
            </form>
        </Fade>
    )
}

export default ContactForm;