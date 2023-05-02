import Footer from '../components/Footer'
import ProfilePic from './ProfilePic';
import Navigation from './Navbar';
import Link from "next/dist/client/link";
import style from "../styles/Layout.module.css"



const Layout = ({ children }) => {

    return (
        <div className={style.parent}>
        <div className={`${style.div1} ${style.base} `}>1 </div>
        <div className={`${style.div2} ${style.base} `}>2 </div>
        <div className={`${style.div3} ${style.base} `}>3 </div>
        <div className={`${style.div4} ${style.base} `}> 4</div>
        <div className={`${style.div5} ${style.base} `}> 6</div>
        <div className={`${style.div6} ${style.base} `}> </div>
        <div className={`${style.div7} ${style.base} `}> </div>
        <div className={`${style.div8} ${style.base} `}> </div>
        <div className={`${style.div9} ${style.base} `}> </div>
        <div className={`${style.div10} ${style.base} `}> </div>
        <div className={`${style.div11} ${style.base} `}> </div>
        <div className={`${style.div12} ${style.base} `}> </div>
        <div className={`${style.div13} ${style.base} `}> </div>
        <div className={`${style.div14} ${style.base} `}> </div>
        </div>
    )
}

export default Layout;