import Link from "next/dist/client/link";
import style from "../styles/Card.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />

const Card = (props) => {

    return (
        <div className={style.card}>
                <div className="title">
                    <h4>{props.title}</h4>
                    <div>
                    <p>{props.info}</p>
                    {/* <div className={style.icon}>{element}</div> */}
                </div>
                </div>
            </div>
    )
}

export default Card;