import Link from "next/dist/client/link";
import style from "../styles/Navbar.module.css"
// import { Navbar, Nav, Container } from 'react-bootstrap';
import React, {useState} from 'react'


const Navigation = () => {

    const [styles, setStyles] = useState('navBar')

    const showMenu = (e) => {
        console.log(e.target.classList)
        setStyles('mystyle')
    }


    return (
        <div className={style.container}>
        <div>
            <button className={style.toggleBtn}
            onClick={showMenu}
            type='button'
            aria-controls='navbar'
            aria-label='Toggle menu'
            aria-expanded='false'
            >Toggle</button>
        </div>
                <nav className={style.navBar}>
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
        </div> 
    )
}

export default Navigation;

