import Link from "next/dist/client/link";
import style from "../styles/Card.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />

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
                        <div>hello</div>
                        <div>hello</div>
                    </div>
                    <div className={style.techIcons}>
                        <div>hello</div>
                        <div>hello</div>
                    </div>
                </div>
            </div>
    )
}

export default Card;