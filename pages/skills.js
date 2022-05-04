import styles from '../styles/Skills.module.css'
import Header from '../components/header'


export default function Experience() {

    
    return (
        <div className={styles.container}>
           
        <Header/>

        <main className={styles.main}>
            
                <div className={styles.white_container}>
                    <section className={styles.technologies}>
                        <div className={styles.tech_content}>
                            <img src='/basics.svg' className={styles.tech_name}/>
                            <div className={styles.tech_icons}>
                                <img src='/logo-javascript.svg' title='Javascript'/>
                                <img src='/logo-html5.svg' title='HTML'/>
                                <img src='/logo-css3.svg' title='CSS'/>
                            </div>
                        </div>
                        <div className={styles.tech_content}>
                            <img src='/mern.svg' className={styles.tech_name}/>
                            <div className={styles.tech_icons}>
                                <img src='/logo-nodejs.svg' title='NodeJS'/>
                                <img src='/logo-react.svg' title='ReactJS'/>
                                <img src='/logo-mongodb.svg' title='MongoDB'/>
                            </div>
                        </div>
                        <div className={styles.tech_content}>
                            <img src='/lifesaver.svg' className={styles.tech_name}/>
                            <div className={styles.tech_icons}>
                                <img src='/logo-stackoverflow.svg' title='StackOverflow'/>
                            </div>
                        </div>
                    </section>
                </div>

                <div className={styles.black_container}>
                    <section className={styles.technologies_description}>
                        <h2>Skills</h2>
                        <p>Figma for the design process, while in the part of the frontend Javascript and CSS are the basics, for huge projects I work with the MERN stack (Mongodb, Express, React, Node) but not exclusively. Always learning, always working on new skills. Attention to details and do my best in every challenge. Let's work together, and build something amazing.</p>
                        <p className={styles.other_techs}>Other technologies: Python | Next | Wordpress | GIT</p>
                        <div className={styles.btn_container}>
                            <a className={styles.dwn_btn} href='/CV-Rodrigo-Gibran-(english-version).pdf' download>
                                <img src='/download.svg' />
                                <div className={styles.dwn_text}>
                                    <p>DOWNLOAD</p>
                                    <p>MY RESUME</p>
                                </div>
                            </a>
                            <a href='mailto:rodrigo.gibran.dev@gmail.com' className={styles.get_btn}>
                                <img src='/mail-unread.svg' />
                                <p>GET IN TOUCH</p>
                            </a>
                        </div>
                        <div className={styles.social}>
                            <a href='https://github.com/The-Cyber-Tiger' title='github'>
                                <img src='/logo-github-mini.svg'/>
                            </a>
                            <a href='https://www.linkedin.com/in/rodrigo-gibran/' title='linkedin'>
                                <img src='/logo-linkedin.svg'/>
                            </a>
                        </div>
                    </section>
                    <img className={styles.full_glitter} src='/full-stack-glitter.png'/>
                </div>
                
            
            
        </main>

        </div>
    )
}