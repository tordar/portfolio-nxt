import Link from "next/dist/client/link";
import style from "../styles/Timeline.module.css"

const Timeline = (props) => {

    
    return (
        <div className={style.timelineDiv}>
            <h2 className={style.header}>
                {props.time}  
            </h2>
            <p className={style.content}>
                {props.content}
            </p>
        </div>
    )
}

export default Timeline;