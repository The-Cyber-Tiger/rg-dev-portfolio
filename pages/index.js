import Header from '../components/header'
import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import webCreator from '../public/web-creator.png'
import line_icon from '../public/single_line.svg'
import github_icon from '../public/logo-github-mini.svg'
import tellme from '../public/tellme_glitter.svg'

export default function Home() {

  const [active, setActive] = useState(false)

  useEffect(()=>{
      setTimeout(() => {
        setActive(true)
      }, 2500)
  },[])

  const Tellme = () =>{
    return <div className={styles.tellme}>
      <Link href='/about'>
      <a>
        <div className={styles.tellme_glitter}>
          <Image src={tellme} alt='arrow right icon'>

          </Image>
        </div>
        
      
      </a>
      </Link>

      </div>
  }
  return (
    <div className={styles.container}>

      
      <Header/>

      <main className={styles.main}>
          <div className={styles.hero}>
              <h4>Hello, I&apos;m</h4>
              <h2>RODRIGO GIBRAN</h2>
              <div className={styles.w_d}>
                <div className={styles.w_creator}>
                  <Image 
                  src={webCreator}
                  alt="Web Creator picture"
                  priority>
                  </Image>
                </div>
                
                <div className={styles.w_line}>
                <Image 
                  src={line_icon}
                  width={2}
                  height={100}
                  alt="single line picture">
                  </Image>
                </div>

                

                <h1>DEVELOPER</h1>

              </div>
              {active ? <Tellme/> : null}
          </div>
      </main>

      <footer className={styles.footer}>
          <a href='https://github.com/The-Cyber-Tiger' target="_blank" rel="noreferrer" >
              <Image 
              src={github_icon}
              alt='github icon'
              height={35}
              width={35}
              >

              </Image>
         
          </a>
      </footer>
    </div>
  )
}
