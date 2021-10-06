import style from "../styles/Tile.module.css"
import React, {useState} from 'react'


const Tile = (props) => {

    const [text, setText] = useState(props.text)

      function targetFunction() {
        setText(props.info)
      }

    return (
        <div className={style.tileDiv}>
            <p onClick={targetFunction} className={style.tile}>{text}</p>
        </div>
    )
}

export default Tile;