import { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css';
import x_icon from '../public/X.svg'


function Header() {

    const [active, setActive] = useState(false)
    
    const Menu = ()=>{
        return <div className={styles.menu_active}>
            <div className={styles.m_option}>
            <div className={styles.m_circle}>
                <Image src={x_icon} width={15} height={15} alt='dot icon'>

                </Image>
            </div>
            <Link href="/">
            <a>Home</a>
            </Link>
            </div>
            <div className={styles.m_option}>
            <div className={styles.m_circle}>
            <Image src={x_icon} width={15} height={15} alt='dot icon'>

            </Image>
            </div>
            <Link href="/about">
            <a>About</a>
            </Link>
            </div>
            <div className={styles.m_option}>
            <div className={styles.m_circle}>
            <Image src={x_icon} width={15} height={15} alt='dot icon'>

            </Image>
            </div>
            <Link href="/experience">
            <a>Experience</a>
            </Link>
            </div>
            <div className={styles.m_option}>
            <div className={styles.m_circle}>
            <Image src={x_icon} width={15} height={15} alt='dot icon'>

            </Image>
            </div>
            <Link href="/skills">
            <a>Skills</a>
            </Link>
            </div>
            
        </div>
    }

    function handleMenu(){
        setActive(!active)
    }
    return ( 
        <header className={styles.header}>
            <div className={styles.menu}>
                <button onClick={handleMenu}>
                <svg width="69" height="33" viewBox="0 0 69 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.9375 6.53125C2.53125 5.03125 3.53125 3.6875 4.9375 2.5C6.375 1.28125 8.1875 0.65625 10.375 0.625H28C28.875 0.625 29.6094 0.9375 30.2031 1.5625C30.8281 2.15625 31.1406 2.89062 31.1406 3.76562C31.1406 4.64062 30.8281 5.39062 30.2031 6.01562C29.6094 6.60938 28.875 6.90625 28 6.90625H10.1875C9.59375 6.90625 9.07812 7.15625 8.64062 7.65625C8.20312 8.125 7.85938 8.6875 7.60938 9.34375C7.39062 10 7.28125 10.625 7.28125 11.2188V19.4219C7.09375 21.2969 6.0625 22.3125 4.1875 22.4688C3.3125 22.4688 2.54688 22.1875 1.89062 21.625C1.26562 21.0312 0.953125 20.2969 0.953125 19.4219V11.2656H1C1 9.64062 1.3125 8.0625 1.9375 6.53125ZM62.0781 8.125C62.0781 7.34375 61.6719 6.9375 60.8594 6.90625H44.4531C43.8594 6.9375 43.3438 7.20312 42.9062 7.70312C42.4688 8.17188 42.1406 8.73438 41.9219 9.39062C41.7344 10.0156 41.6406 10.6562 41.6406 11.3125C41.6406 11.9375 41.7344 12.5781 41.9219 13.2344C42.1406 13.8594 42.4688 14.4219 42.9062 14.9219C43.3438 15.3906 43.8594 15.625 44.4531 15.625H56.4531C57.3281 15.625 58.0625 15.9375 58.6562 16.5625C59.2812 17.1562 59.5938 17.8906 59.5938 18.7656C59.5938 19.6406 59.2812 20.375 58.6562 20.9688C58.0625 21.5938 57.3281 21.9062 56.4531 21.9062H44.6406C42.4531 21.875 40.6406 21.2656 39.2031 20.0781C37.7969 18.8594 36.7812 17.5 36.1562 16C35.5625 14.4688 35.2656 12.8906 35.2656 11.2656C35.2656 9.70312 35.5781 8.17188 36.2031 6.67188C36.8281 5.14062 37.8438 3.78125 39.25 2.59375C40.6562 1.375 42.7344 0.71875 45.4844 0.625H65.1719C66.0469 0.625 66.7969 0.921875 67.4219 1.51562C68.0469 2.07812 68.375 2.79688 68.4062 3.67188V18.4844C68.4062 20.9844 68.0625 23.3438 67.375 25.5625C66.75 27.5312 65.7188 29.1875 64.2812 30.5312C62.875 31.9062 61.0781 32.6562 58.8906 32.7812H42.6719C41.8281 32.75 41.1094 32.4375 40.5156 31.8438C39.9531 31.2812 39.6562 30.5781 39.625 29.7344C39.625 28.8594 39.9062 28.1094 40.4688 27.4844C41.0625 26.8594 41.7969 26.5312 42.6719 26.5H57.2969C58.4844 26.4375 59.4688 25.9844 60.25 25.1406C61.0312 24.2969 61.5312 23.3125 61.75 22.1875C61.9688 21.0625 62.0781 19.6094 62.0781 17.8281V8.125Z" fill="#E5E5E5"/>
                </svg>

                </button>
                {active ? <Menu/> : null }
            </div>
        </header>
     );
}

export default Header;