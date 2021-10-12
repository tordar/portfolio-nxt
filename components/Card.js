import Link from "next/dist/client/link";
import style from "../styles/Card.module.css"

const Card = (props) => {

    
    return (
        <div className={style.card}>
                <div>
                    <h4 className={style.title}>{props.title}</h4>
                    <p className={style.info}>{props.info}</p>
                    {/* <div className={style.icon}>{element}</div> */}
                </div>
                <div className={style.iconContainer}>
                    <div className={style.icons}>
                        <div>
                            <a href={props.github}>GitHub</a>
                        </div>
                        <div>
                            <a href={props.link}>Link</a>
                        </div>
                    </div>
                    <div className={style.icons}>
                        <div>JS</div>
                        <div>HTML</div>
                    </div>
                </div>
            </div>
    )
}

export default Card;