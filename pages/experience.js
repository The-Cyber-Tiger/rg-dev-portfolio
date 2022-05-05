import Image from 'next/image'
import styles from '../styles/Experience.module.css'
import Header from '../components/header'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import retroPc from '../public/RETRO.png'
import globe_icon from '../public/globe-outline-black.svg'
import github_icon from '../public/logo-github-black.svg'
import check_portfolio from '../public/checkmy-black.svg'

import cart_icon from '../public/cart-outline-black.svg'
import desktop_icon from '../public/desktop-outline-black.svg'
import rocket_icon from '../public/rocket-outline-black.svg'
import home_icon from '../public/home-outline-black.svg'
import go2skills from '../public/go2skills.svg'


import logo_topaciox from '../public/Topaciox-logo-black.svg'
import logo_petcare from '../public/Petcare-logo.svg'
import logo_coinmarket from '../public/CoinMarket-logo.svg'
import logo_mayanplace from '../public/MayanPlace-logo.svg'

import mock_topaciox from '../public/mockup-topaciox.png'
import mock_petcare from '../public/mockup-petcare.png'
import mock_coinmarket from '../public/mockup-coinmarket.png'
import mock_mayanplace from '../public/mockup-mayanplace.png'

import screen_topaciox1 from '../public/topaciox-screen-2.png'
import screen_topaciox2 from '../public/topaciox-screen-1.png'
import screen_petcare1 from '../public/petcare-screen-1.png'
import screen_petcare2 from '../public/petcare-screen-2.png'
import screen_coinmarket1 from '../public/coinmarket-screen-1.png'
import screen_coinmarket2 from '../public/coinmarket-screen-2.png'
import screen_mayanplace1 from '../public/mayanplace-screen-1.png'
import screen_mayanplace2 from '../public/mayanplace-screen-2.png'




export default function Experience() {

    const project = [
    
    {
        nameId: 'Topaciox',
        logoImg: logo_topaciox,
        category: 'e-commerce',
        iconCategory: cart_icon,
        mockupImg: mock_topaciox,
        description: 'TopacioX is a fashion brand who offers handmade accesories, they sell their designs online. Over the e-commerce platform the owner can manage their store and accept all type of payment methods.',
        technologies: 'Wordpress | Woocommerce | MercadoPago',
        screen_view1: screen_topaciox1,
        screen_view2: screen_topaciox2,
        projectURL: 'www.topaciox.com',
        projectREPO: 'https://github.com/The-Cyber-Tiger'
        
    },
    
    {
        nameId: 'PetCare',
        logoImg: logo_petcare,
        category: 'Admin-Dashboards',
        iconCategory: desktop_icon,
        mockupImg: mock_petcare,
        description: 'PetCare is a dashboard platform built for manage a veterinary clinic, the user can control the supplies and pet hotel included, at the time they can store in a Database all the vital information of their more important clients, the pets.',
        technologies: 'React | Node | MongoDB | JWT Auth',
        screen_view1: screen_petcare1,
        screen_view2: screen_petcare2,
        projectURL: 'https://jade-biscochitos-ac01bd.netlify.app/',
        projectREPO: 'https://github.com/The-Cyber-Tiger/PetCare-app-frontend'
    },
    {
        nameId: 'CoinMarket',
        logoImg: logo_coinmarket,
        category: 'Landing page',
        iconCategory: rocket_icon,
        mockupImg: mock_coinmarket,
        description: 'CoinMarket the platform for crypto enthusiast, allow users follow the crypto market in real time, providing fresh information, over the site they can quote prices of the top cryptocurrency for smarter decisions. A dynamic site provided with fancy animations.',
        technologies: 'Vanilla JS | Bootstrap | GreenSock | Fetch API',
        screen_view1: screen_coinmarket1,
        screen_view2: screen_coinmarket2,
        projectURL: 'https://effervescent-jalebi-749274.netlify.app/',
        projectREPO: 'https://github.com/The-Cyber-Tiger/coinmarket'
    },
    {
        nameId: 'MayanPlace',
        logoImg: logo_mayanplace,
        category: 'Real-Estate',
        iconCategory: home_icon,
        mockupImg: mock_mayanplace,
        description: 'Mayan Place is a modern real estate website based on Tulúm Mexico,  allow users swipe between different options to match their favorite place, like tinder. A very elegant design to attract investors to the paradise of Riviera Maya zone.',
        technologies: 'React | Node | MongoDB | Axios | API REST',
        screen_view1: screen_mayanplace1,
        screen_view2: screen_mayanplace2,
        projectURL: 'https://zippy-puffpuff-325d58.netlify.app/',
        projectREPO: 'https://github.com/The-Cyber-Tiger/Mayan-Place-app'
    },
    
    ]

    const [ brand_selected, setBrand_selected ] = useState({})
    const [ introView, setIntroView ] = useState(true)
    const [ mobile, setMobile ] = useState(Boolean)
    const [ width, setWindowWidth ] = useState(0)

    useEffect(()=>{
        updateDimensions()
        window.addEventListener("resize", updateDimensions)

        return ()=>{
            console.log("unmount");
            window.removeEventListener("resize", updateDimensions)
        }

    },[])

    useEffect(()=>{
        
    },[mobile])

    const updateDimensions=()=>{
        const width = window.innerWidth
        setWindowWidth(width)
    }

    useEffect(()=>{

    },[brand_selected])

    useEffect(()=>{

    },[introView])

   
    const ProjectsView = () =>{
  
        return  <section className={styles.projects_view}>
            <div className={styles.pro_icons_container}>

                <div className={styles.pro_icons}>
                    <Image className={styles.pro_icons_single} src={globe_icon} width={35} height={35} alt="globe icon">

                    </Image>
                    <a href={brand_selected.projectURL} target="_blank" rel="noreferrer">Visit {brand_selected.nameId}</a>
                </div>

                <div className={styles.pro_icons}>
                <Image className={styles.pro_icons_single}  src={github_icon} width={35} height={35} alt="globe icon">

                </Image>
                    <a href={brand_selected.projectREPO} target="_blank" rel="noreferrer">GitHub</a>
                </div>

            </div>
            <div className={styles.pro_info_container}>
                <div className={styles.pro_logo}>
                <Image src={brand_selected.logoImg} alt="logo picture" width={220} height={105}>

                </Image>
                </div>
                    
               
                <div className={styles.pro_mockup}>
                    <Image src={brand_selected.mockupImg} layout='responsive' alt='mockup desktop'>

                    </Image>
                </div>
                <div className={styles.pro_category}>
                    <Image src={brand_selected.iconCategory} width={20} height={20} alt='icon category'>

                    </Image>
                    <p>{brand_selected.category}</p>
                    </div>
                <p className={styles.pro_info_description}>{brand_selected.description}</p>
                <p className={styles.pro_info_technologies}>Technologies: {brand_selected.technologies}</p>
            </div>
            <div className={styles.pro_screenshots}>
                <Image src={brand_selected.screen_view1} width={250} height={150} alt='screenshot view'>

                </Image>
                <Image src={brand_selected.screen_view2} width={250} height={150} alt='screenshot view'>

                </Image>
                
            </div>
        </section>
    }

    const InitView = ()=>{
        return <section className={styles.init_view}>
                <div className={styles.retro_pc}>
                <Image
                    src={retroPc}
                    width={350}
                    height={250}
                    alt="Picture of retro PC"
                    priority
                />
                </div>
               
                <div className={styles.experience_text}>
                    <h2>Experience</h2>
                    <p>I been worked on different model business, offering solutions across digital platforms, a professional website can help you to reach your goals. Look at my recent works below.</p>
                </div>
                <div className={styles.checkmy}>
                    <Image
                        src={check_portfolio}
                        alt="Picture check my portfolio"
                        width={219}
                        height={60}
                    />
                </div>
            </section>
    }

    const responsive = {
        showMobile: width < 700
    }

    const Selector = ({responsive}) =>{

        const DesktopView = () =>{
            return  <div className={styles.selector}>
            {project.map(brand=>{
                return <div key={brand.nameId} className={styles.option}>
                    <Image src={brand.iconCategory} width={20} height={20} alt='icon category' >

                    </Image>
                    <p>
                    {brand.category}
                    </p>
                  

                    <input type='radio' name='category' value={brand} onClick={()=>{
                        setBrand_selected(brand)
                        setIntroView(false)

                    }} className={styles.option_circle} />
                </div>
            })}
        </div>
        }

        const MobileView = () =>{
            return <div className={styles.selectorMobile}>
                    <div className={styles.option}>
                
                        {project.map(brand=>{
                            return <input type='radio' name='category' value={brand} onClick={()=>{
                                    setBrand_selected(brand)
                                    setIntroView(false)

                                }} key={brand.nameId}  className={styles.option_circle}/>
                            
                        })}
                    </div>
        </div>
        }

        return <>
            {responsive ? <MobileView/> : <DesktopView/>}
        </>
    }

    return (
        <div className={styles.container}>
        
        <Header/>

        <main className={styles.main}>
            
            { introView ? <InitView/> : <ProjectsView brand={brand_selected}/> }

            <Selector responsive={responsive.showMobile} />

        </main>
        <footer className={styles.footer}>
            <Link href='/skills'>
            <a>
                <Image src={go2skills} width={180} height={50} alt='arrow icon'>

                </Image>
            </a>
            </Link>
        </footer>

        </div>
    )
}
