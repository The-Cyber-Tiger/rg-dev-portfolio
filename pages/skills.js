import styles from '../styles/Skills.module.css'
import Header from '../components/header'
import Image from 'next/image'

import basics from '../public/basics.svg'
import logo_js from '../public/logo-javascript.svg'
import logo_html from '../public/logo-html5.svg'
import logo_css from '../public/logo-css3.svg'

import mern from '../public/mern.svg'
import node from '../public/logo-nodejs.svg'
import react from '../public/logo-react.svg'
import mongo from '../public/logo-mongodb.svg'

import life from '../public/lifesaver.svg'
import over from '../public/logo-stackoverflow.svg'

import download from '../public/download.svg'
import mail from '../public/mail-unread.svg'
import github from '../public/logo-github-mini.svg'
import linkedin from '../public/logo-linkedin.svg'
import full_stack from '../public/full-stack-glitter.png'

export default function Experience() {

    
    return (
        <div className={styles.container}>
           
        <Header/>

        <main className={styles.main}>
            
                <div className={styles.white_container}>
                    <section className={styles.technologies}>
                        <div className={styles.tech_content}>
                            <Image src={basics} width={167} height={55} alt='label' className={styles.tech_name}>

                            </Image>
                            <div className={styles.tech_icons}>
                                <Image src={logo_js} width={35} height={35} title='Javascript' alt='label'>

                                </Image>
                                <Image src={logo_html} width={35} height={35} title='HTML' alt='label'>

                                </Image>
                                <Image src={logo_css} width={35} height={35} title='CSS' alt='label'>

                                </Image>
                               
                            </div>
                        </div>
                        <div className={styles.tech_content}>
                            <Image src={mern} width={262} height={55} alt='label' className={styles.tech_name}>

                            </Image>
                            <div className={styles.tech_icons}>
                                <Image src={node} width={35} height={35} title='NodeJs' alt='label'>

                                </Image>
                                <Image src={react} width={35} height={35} title='ReactJs' alt='label'>

                                </Image>
                                <Image src={mongo} width={35} height={35} title='MongoDB' alt='label'>

                                </Image>
                              
                            </div>
                        </div>
                        <div className={styles.tech_content}>
                            <Image src={life} width={218} height={55} alt='label' className={styles.tech_name}>
                            </Image>
                            <div className={styles.tech_icons}>
                                <Image src={over} width={35} height={35} title='StackOverflow' alt='label'>

                                </Image>
                            </div>
                        </div>
                    </section>
                </div>

                <div className={styles.black_container}>
                    <section className={styles.technologies_description}>
                        <h2>Skills</h2>
                        <p>Figma for the design process, while in the part of the frontend Javascript and CSS are the basics, for huge projects I work with the MERN stack (Mongodb, Express, React, Node) but not exclusively. Always learning, always working on new skills. Attention to details and do my best in every challenge. Let&apos;s work together, and build something amazing.</p>
                        <p className={styles.other_techs}>Other technologies: Python | Next | Wordpress | GIT</p>
                        <div className={styles.btn_container}>
                            <a className={styles.dwn_btn} href='/CV-Rodrigo-Gibran-(english-version).pdf' rel="noreferrer" download>
                                <Image src={download} width={50} height={50} alt='download icon'>

                                </Image>
                                <div className={styles.dwn_text}>
                                    <p>DOWNLOAD</p>
                                    <p>MY RESUME</p>
                                </div>
                            </a>
                            <a href='mailto:rodrigo.gibran.dev@gmail.com' rel="noreferrer" className={styles.get_btn}>
                                <Image src={mail} width={50} height={50} alt='mail icon'>

                                </Image>
                                <p>GET IN TOUCH</p>
                            </a>
                        </div>
                        <div className={styles.social}>
                            <a href='https://github.com/The-Cyber-Tiger' rel="noreferrer" title='github'>
                                <Image src={github} width={35} height={35} alt='github icon'>

                                </Image>
                            </a>
                            <a href='https://www.linkedin.com/in/rodrigo-gibran/' rel="noreferrer" title='linkedin'>
                                <Image src={linkedin} width={35} height={35} alt='linkedin icon'>

                                </Image>
                            </a>
                        </div>
                    </section>
                    <div className={styles.full_glitter}>
                        <Image src={full_stack} width={90} height={75} alt='fullstack label picture'>

                        </Image>
                    </div>
                </div>
                
            
            
        </main>

        </div>
    )
}