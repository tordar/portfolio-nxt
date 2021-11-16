import Link from "next/dist/client/link";
import Image from 'next/image'
import style from "../styles/Card.module.css"

const Card = (props) => {

    
    return (
        <div className={style.card}>
                <div>
                    <h4 className={style.title}>{props.title}</h4>
                    <p className={style.info}>{props.info}</p>
                </div>
                <div className={style.iconContainer}>
                    <div className={style.icons}>
                        <div>
                            <a href={props.github} target="_blank"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width='20px' height='20px'/></a>
                        </div>
                        <div>
                        <a href={props.link} target="_blank"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" width='20px' height='20px'/></a>
                        </div>
                    </div>
                    <div className={style.icons}>
                        {/* <img src={props.html}/>
                        <img src={props.css}/>
                        <img src={props.bootstrap}/>
                        <img src={props.javascript}/> */}
                    </div>
                </div>
            </div>
    )
}

export default Card;