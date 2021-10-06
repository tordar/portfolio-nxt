import Footer from '../components/Footer'
import Link from "next/dist/client/link";
import Image from 'next/image'
import style from "../styles/Layout.module.css"
import image from 'next/image';

const Layout = ({ children, text, setText }) => {
    return (
        <div className={style.main}>
            <div className={style.glass}>
                <div className={style.dashboard}>
                    <div className={style.info}>
                    
                    <Image src={"https://avatars.githubusercontent.com//u/71933707?v=4"} className={style.img} alt="Picture of the author" height='150px' width='150px'/>
                        <h4>Tordar T.</h4>
                        <p>Full-stack developer</p>
                    </div>
                    <nav>
                        <Link href="/">
                            <div className={style.link}>HOME</div>
                         </Link>
                         <Link href="/projects">
                            <div className={style.link}>PROJECTS</div>
                         </Link>
                         <Link href="/about">
                            <div className={style.link}>ABOUT</div>
                         </Link>
                         <Link href="/skills">
                            <div className={style.link}>SKILLS</div>
                         </Link>
                    </nav>
                    {/* <div className={style.footer}>
                        <a class="icons" href="https://www.linkedin.com/in/tordar/" target="_blank"><i class="fab fa-linkedin fa-2x"></i>HEY</a>
                        <a class="icons" href="https://github.com/tordar" target="_blank"><i class="fab fa-github fa-2x"></i>HO</a>
                        <a class="icons" href="https://instagram.com/tordar" target="_blank"><i class="fab fa-instagram fa-2x"></i>LESGO</a>
                    </div> */}
                
                    
                </div>
                <div className={style.app}>
                { children }
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Layout;