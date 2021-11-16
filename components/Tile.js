import style from "../styles/Tile.module.css"
import React, {useState, useEffect} from 'react'
import { unmountComponentAtNode } from 'react-dom';

const Tile = (props) => {

    const [text, setText] = useState("")
    const [img, setImg] = useState(props.img)
    const [hidden, setHidden] = useState({display: 'block'})
    
  
      function mouseEnter() {
        setHidden({display: 'none'})
        setText(props.info)
        setImg('')
      }

      function mouseLeave() {
        setHidden({display: 'block'})
        setText("")
        setImg(props.img)
      }
      
    return (
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className={style.tileDiv}>
          <div>
            <img style={hidden} src={img}/>
          </div>
          <div>
            <p className={style.tile}>{text}</p>
          </div> 
        </div>
    )
}

export default Tile;