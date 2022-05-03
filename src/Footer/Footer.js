import React from 'react'
import style from './Footer.module.scss'
import styleContainer from "../common/styles/container.module.css"
import Title from "../common/components/title/Title"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {library} from "@fortawesome/fontawesome-svg-core"
import {fab} from '@fortawesome/free-brands-svg-icons'
import Fade from 'react-reveal/Fade'

library.add(fab);

const Footer = () => {

    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div>
                    <Fade bottom>
                        <Title text={'Ruslan Didun'}/>
                    </Fade>

                    <Fade left cascade>
                        <div className={style.icons}>
                            <a href='https://www.instagram.com/romanovych_rus/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} size='2x' color={'white'}/></a>
                            <a href='https://t.me/Romanovych_Rus' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={['fab', 'telegram-plane']} size='2x' color={'white'}/></a>
                            <a href='https://www.facebook.com/profile.php?id=100010465055493' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} size='2x' color={'white'}/></a>
                            <a href='https://github.com/Kano066' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={['fab', 'github']} size='2x' color={'white'}/></a>
                            <a href='https://www.linkedin.com/in/Ruslan-Didun' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} size='2x' color={'white'}/></a>
                        </div>
                    </Fade>
                </div>
            </div>
            <Fade left cascade>
                <span className={style.rightsReserved}>©2022 All rights reserved</span>
            </Fade>
        </div>
    )
}
export default Footer




// alternative icons
// const faceBookIcon = {
//     backgroundImage: `url(${FacebookIcon})`,
// }
// const instagramIcon = {
//     backgroundImage: `url(${InstagramIcon})`,
// }
// const gitHubIcon = {
//     backgroundImage: `url(${GithubIcon})`,
// }
// const linkedinIcon = {
//     backgroundImage: `url(${LinkedinIcon})`,
// }

// <div className={style.icons}>
//     <div className={style.socialIcons}
//         style={faceBookIcon}>  </div>
//     <div className={style.socialIcons}
//          style={instagramIcon}> </div>
//     <div className={style.socialIcons}
//         style={gitHubIcon}> </div>
//    <div className={style.socialIcons}
//          style={linkedinIcon}> </div>
// </div>