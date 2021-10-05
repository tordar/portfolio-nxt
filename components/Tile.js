import style from "../styles/Tile.module.css"
import React, {useState} from 'react'


const Tile = () => {

    const [text, setText] = useState('HTML')

      function targetFunction(e) {
        console.log(e.target)
      }

    return (
        <div onClick={targetFunction} className={style.tile}>
                <div>{text}</div>
            </div>
    )
}

export default Tile;