import Link from "next/dist/client/link";
import style from "../styles/Card.module.css"

const Card = (props) => {
    return (
        <div className={style.card}>
                <div class="title">
                    <h4>{props.title}</h4>
                    <div>
                    <p>{props.info}</p>
                </div>
                </div>
                
                {/* <div class="icons">
                     <a href="https://github.com/tordar/tip-calculator-app-main" target="_blank"><i class="fab fa-github-alt fa-2x"></i></a>
                     <a href="https://tordar.github.io/tip-calculator-app-main/" target="_blank"><i class="fab fa-chrome fa-2x"></i></a>
                </div> */}
            </div>
    )
}

export default Card;