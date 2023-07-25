import Footer from '../components/Footer'
import ProfilePic from './ProfilePic';
import Navigation from './Navbar';
import Link from "next/dist/client/link";
import style from "../styles/Layout.module.css"
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
// import GitHubIcon from '@mui/icons-material/GithubIcon';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import Image from 'next/dist/client/image';
import { useState } from 'react';
import { Providers } from '../pages/providers'
import { useTheme } from 'next-themes'



const Layout = ({ children }) => {
    const [card, setCard] = useState(0)
    const { theme, setTheme } = useTheme()

    function onNext(){
        setCard(card + 1)
        console.log(card)
    }

    function onPrevious(){
        setCard(card - 1)
        console.log(card)
    }

    return (
        <html suppressHydrationWarning>
      <head />
      <body>
        <Providers>
        <div className={style.parent}>
        <div className={`${style.div1} ${style.base} `}>
            <Navigation /> </div>
        <div className={`${style.div2} ${style.base} `}>
        2
        </div>
        <div className={`${style.div3} ${style.base} `}>The current theme is: {theme} </div>
        <div className={`${style.div4} ${style.base} `}> <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button></div>
        <div className={`${style.div5} ${style.base} `}> 
            <EmailIcon fontSize='large'/>
        </div>
            <div className={`${style.div15} ${style.base} `}>
                <EmailIcon fontSize='large'/>
            </div>
        <div className={`${style.div6} ${style.base} `}> 
            <InstagramIcon fontSize='large'/>
        </div>
            <div className={`${style.div16} ${style.base} `}>
                <EmailIcon fontSize='large'/>
            </div>
        <div className={`${style.div7} ${style.base} `}> 
            Some text
        </div>
        <div className={`${style.div8} ${style.base} `}>
            <LinkedInIcon fontSize='large'/>
        </div>
        <div className={`${style.div9} ${style.base} `}> CONTACT INFO </div>
        <div className={`${style.div10} ${style.base} `}> 10</div>
        <div className={`${style.div11} ${style.base} `}> 11 </div>
        <div className={`${style.div12} ${style.base} ${"hover:bg-gray-50"} ${"text-gray-50"}  ${"hover:text-black"}`} > 
            <WestIcon fontSize='large' onClick={onPrevious}/>
        </div>
        <div className={`${style.div13} ${style.base} ${"hover:bg-gray-50"} ${"text-gray-50"}  ${"hover:text-black"}`}> 
            <EastIcon fontSize='large' onClick={onNext}/>
        </div>
        <div card className={`${style.div14} ${style.base} `}> 
        { children }
        </div>
        </div>
        </Providers>
        </body>
    </html>
    )
}

export default Layout;