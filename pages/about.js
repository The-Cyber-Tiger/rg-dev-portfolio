import styles from '../styles/About.module.css'
import Header from '../components/header'
import Image from 'next/image'
import devPicture from '../public/ME-DEV.png'
import Link from 'next/link'
import arrow from '../public/4you.svg'

export default function About() {


  return (
    <div className={styles.container}>
    
      <Header/>

      <main className={styles.main}>
        <div className={styles.black_section}>

        </div>
          <div className={styles.me} >
            <Image src={devPicture} alt='author picture' priority/>
          </div>
      
         <div className={styles.about_text}>
            <h2>About</h2>
            <p>I&apos;m passionate creator who enjoy the process of develop ideas from zero to success,  feeling the concept, understanding the requirements, and playing with the design to obtain a unique identity in every work.</p>
            <Link href='/experience'>
            <a>
              <div className={styles.see_you}>
                <Image
                src={arrow}
                alt='arrow right icon'
                layout='responsive'
                >
                </Image>
              </div>
              
            </a>
            </Link>

         </div>
        
      </main>


    </div>
  )
}
