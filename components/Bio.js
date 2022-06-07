import style from "../styles/Bio.module.css"

const Bio = (props) => {


    return (
        <div className={style.bio}>
                <div>{props.content}</div>
            </div>
    )
}

export default Bio;