import Footer from '../components/Footer'
import ProfilePic from './ProfilePic';
import Navigation from './Navbar';
import Link from "next/dist/client/link";
import style from "../styles/Layout.module.css"
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/Github';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const Layout = ({ children }) => {

    return (
        <div className={style.parent}>
        <div className={`${style.div1} ${style.base} `}>1 </div>
        <div className={`${style.div2} ${style.base} `}>2 </div>
        <div className={`${style.div3} ${style.base} `}>3 </div>
        <div className={`${style.div4} ${style.base} `}> 4</div>
        <div className={`${style.div5} ${style.base} `}> 
            <EmailIcon fontSize='large'/>
        </div>
        <div className={`${style.div6} ${style.base} `}> 
            <InstagramIcon fontSize='large'/>
        </div>
        <div className={`${style.div7} ${style.base} `}> 
            <GitHubIcon fontSize='large'/>
        </div>
        <div className={`${style.div8} ${style.base} `}>
            <LinkedInIcon fontSize='large'/>
        </div>
        <div className={`${style.div9} ${style.base} `}> 9</div>
        <div className={`${style.div10} ${style.base} `}> 10</div>
        <div className={`${style.div11} ${style.base} `}> 11 </div>
        <div className={`${style.div12} ${style.base} `}> 12</div>
        <div className={`${style.div13} ${style.base} `}> 13</div>
        <div className={`${style.div14} ${style.base} `}> 14</div>
        </div>
    )
}

export default Layout;