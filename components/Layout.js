import Footer from '../components/Footer'
import ProfilePic from './ProfilePic';
import Navigation from './Navbar';
import Link from "next/dist/client/link";
import style from "../styles/Layout.module.css"



const Layout = ({ children }) => {

    return (
        <div className={style.main}>
            <div className={style.glass}>
                <div className={style.dashboard}>
                    <div className={style.info}>
                    <ProfilePic />
                        <h4 className={style.name}>Tordar T.</h4>
                        <p className={style.title}>Full-stack developer</p>
                    </div>
                    <Navigation />
                    <div className={style.footer}>
                        <a class="icons" href="https://www.linkedin.com/in/tordar/" target="_blank"><i class="fab fa-linkedin fa-2x"></i>LINKEDIN </a>
                        <a class="icons" href="https://github.com/tordar" target="_blank"><i class="fab fa-github fa-2x"></i>GITHUB </a>
                        <a class="icons" href="https://instagram.com/tordar" target="_blank"><i class="fab fa-instagram fa-2x"></i>INSTA</a>
                    </div>
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