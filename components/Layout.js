import Link from "next/dist/client/link";
import style from "../styles/Layout.module.css"

const Layout = ({ children }) => {
    return (
        <div className={style.main}>
            <div className={style.glass}>
                <div className={style.dashboard}>
                    <div className={style.info}>
                        {/* <img src="https://avatars.githubusercontent.com/u/71933707?v=4" alt=""> */}
                        <h4>Tordar T.</h4>
                        <p>Full-stack developer</p>
                    </div>
                    <div className={style.links}>
                        <a href="/" data-link><div class="link">HOME</div></a>
                        <a href="/projects" data-link><div class="link">PROJECTS</div></a>
                        <a href="/about" data-link><div class="link">ABOUT</div></a>
                        <a href="/skills" data-link><div class="link">SKILLS</div></a>
                    </div>
                    <div className={style.footer}>
                        <a class="icons" href="https://www.linkedin.com/in/tordar/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
                        <a class="icons" href="https://github.com/tordar" target="_blank"><i class="fab fa-github fa-2x"></i></a>
                        <a class="icons" href="https://instagram.com/tordar" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
                    </div>
                {/* <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/projects">
                    <a>Projects</a>
                </Link>
                </nav> */}
                    
                </div>
                <div className={style.app}>
                { children }
                </div>
            </div>
        </div>
    )
}

export default Layout;