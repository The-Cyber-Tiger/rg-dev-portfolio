import Image from 'next/image'
import styles from '../styles/Experience.module.css'
import Header from '../components/header'
import { useEffect, useState } from 'react'
import retroPc from '../public/RETRO.png'

export default function Experience() {

    const project = [
    
    {
        nameId: 'Topaciox',
        logoImg: '/Topaciox-logo-black.svg',
        category: 'e-commerce',
        iconCategory: '/cart-outline-black.svg',
        mockupImg: '/mockup-topaciox.png',
        description: 'TopacioX is a fashion brand who offers handmade accesories, they sell their designs online. Over the e-commerce platform the owner can manage their store and accept all type of payment methods.',
        technologies: 'Wordpress | Woocommerce | MercadoPago',
        screen_view1: '/topaciox-screen-2.png',
        screen_view2: '/topaciox-screen-1.png',
        projectURL: 'www.topaciox.com',
        projectREPO: 'https://github.com/The-Cyber-Tiger'
        
    },
    
    {
        nameId: 'PetCare',
        logoImg: '/Petcare-logo.svg',
        category: 'Admin-Dashboards',
        iconCategory: '/desktop-outline-black.svg',
        mockupImg: '/mockup-petcare.png',
        description: 'PetCare is a dashboard platform built for manage a veterinary clinic, the user can control the supplies and pet hotel included, at the time they can store in a Database all the vital information of their more important clients, the pets.',
        technologies: 'React | Node | MongoDB | JWT Auth',
        screen_view1: '/petcare-screen-1.png',
        screen_view2: '/petcare-screen-2.png',
        projectURL: 'https://jade-biscochitos-ac01bd.netlify.app/',
        projectREPO: 'https://github.com/The-Cyber-Tiger/PetCare-app-frontend'
    },
    {
        nameId: 'CoinMarket',
        logoImg: '/CoinMarket-logo.svg',
        category: 'Landing page',
        iconCategory: '/rocket-outline-black.svg',
        mockupImg: '/mockup-coinmarket.png',
        description: 'CoinMarket the platform for crypto enthusiast, allow users follow the crypto market in real time, providing fresh information, over the site they can quote prices of the top cryptocurrency for smarter decisions. A dynamic site provided with fancy animations.',
        technologies: 'Vanilla JS | Bootstrap | GreenSock | Fetch API',
        screen_view1: '/coinmarket-screen-1.png',
        screen_view2: '/coinmarket-screen-2.png',
        projectURL: 'https://effervescent-jalebi-749274.netlify.app/',
        projectREPO: 'https://github.com/The-Cyber-Tiger/coinmarket'
    },
    {
        nameId: 'MayanPlace',
        logoImg: '/MayanPlace-logo.svg',
        category: 'Real-Estate',
        iconCategory: '/home-outline-black.svg',
        mockupImg: '/mockup-mayanplace.png',
        description: 'Mayan Place is a modern real estate website based on Tulúm Mexico,  allow users swipe between different options to match their favorite place, like tinder. A very elegant design to attract investors to the paradise of Riviera Maya zone.',
        technologies: 'React | Node | MongoDB | Axios | API REST',
        screen_view1: '/mayanplace-screen-1.png',
        screen_view2: '/mayanplace-screen-2.png',
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

        return () =>{
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
                    <img src='/globe-outline-black.svg'/>
                    <a href={brand_selected.projectURL} target="_blank">Visit {brand_selected.nameId}</a>
                </div>

                <div className={styles.pro_icons}>
                    <img src='/logo-github-black.svg' />
                    <a href={brand_selected.projectREPO} target="_blank">GitHub</a>
                </div>

            </div>
            <div className={styles.pro_info_container}>
                <img src={brand_selected.logoImg} className={styles.pro_logo}/>
                <img src={brand_selected.mockupImg} className={styles.pro_mockup}/>
                <div className={styles.pro_category}>
                <img src={brand_selected.iconCategory}/>
                    <p>{brand_selected.category}</p>
                    </div>
                <p className={styles.pro_info_description}>{brand_selected.description}</p>
                <p className={styles.pro_info_technologies}>Technologies: {brand_selected.technologies}</p>
            </div>
            <div className={styles.pro_screenshots}>
                <img src={brand_selected.screen_view1}/>
                <img src={brand_selected.screen_view2}/>
            </div>
        </section>
    }

    const InitView = ()=>{
        return <section className={styles.init_view}>
                <div className={styles.retro_pc}>
                <Image
                    src={retroPc}
                    alt="Picture of retro PC"
                    placeholder='empty'
                    layout='fill'
                    priority
                />
                </div>
               
                <div className={styles.experience_text}>
                    <h2>Experience</h2>
                        <p>I been worked on different model business, offering solutions across digital platforms, a professional website can help you to reach your goals. Look at my recent works below.</p>
                </div>
                <div className={styles.checkmy}>
                <Image
                    src='/checkmy-black.svg'
                    alt="Picture check my portfolio"
                    width="219px"
                    height="60px"
                    placeholder='blur'
                    blurDataURL='/vercel.svg'
                    layout='intrinsic'

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
                    <img src={brand.iconCategory}/>
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
            <a href='/skills'>
            <img src='/go2skills.svg'/>
            </a>
        </footer>

        </div>
    )
}
