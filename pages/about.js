import styles from '../styles/About.module.css'
import Header from '../components/header'
import Image from 'next/image'
import devPicture from '../public/ME-DEV.png'

export default function About() {


  return (
    <div className={styles.container}>
    
      <Header/>

      <main className={styles.main}>
        <div className={styles.black_section}>

        </div>
          <div className={styles.me} >
            <Image src={devPicture} priority/>
          </div>
      
         <div className={styles.about_text}>
            <h2>About</h2>
            <p>I’m passionate creator who enjoy the process of develop ideas from zero to success,  feeling the concept, understanding the requirements, and playing with the design to obtain a unique identity in every work.</p>
            <a href='/experience'>
              <img src='/4you.svg'/>
            </a>
         </div>
        
      </main>


    </div>
  )
}
