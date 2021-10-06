import style from "../styles/Tile.module.css"
import React, {useState} from 'react'


const Tile = (props) => {

    const [text, setText] = useState(props.text)

      function mouseEnter() {
        setText(props.info)
      }
      function mouseLeave() {
        setText(props.text)
      }

    return (
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className={style.tileDiv}>
            <p className={style.tile}>{text}</p>
        </div>
    )
}

export default Tile;