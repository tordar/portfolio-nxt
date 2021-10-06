import style from "../styles/Tile.module.css"
import React, {useState} from 'react'


const Tile = (props) => {

    const [text, setText] = useState(props.text)

      function targetFunction() {
        setText(props.info)
      }

    return (
        <p onClick={targetFunction} className={style.tile}>{text}</p>
    )
}

export default Tile;