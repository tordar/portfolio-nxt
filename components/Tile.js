import style from "../styles/Tile.module.css"
import React, {useState} from 'react'


const Tile = (props) => {

    const [text, setText] = useState("")
    const [img, setImg] = useState(props.img)

      function mouseEnter() {
        setText(props.info)
        setImg('')
      }
      function mouseLeave() {
        setText("")
        setImg(props.img)
      }

    return (
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className={style.tileDiv}>
          <div>
            <img src={props.img}/>
          </div>
          <div>
            <p className={style.tile}>{text}</p>
          </div> 
        </div>
    )
}

export default Tile;