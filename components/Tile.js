import style from "../styles/Tile.module.css"
import React, {useState, useEffect} from 'react'
import { unmountComponentAtNode } from 'react-dom';

const Tile = (props) => {

    const [text, setText] = useState("")
    const [img, setImg] = useState(props.img)
    const [hidden, setHidden] = useState('block')

  
      function mouseEnter() {
        setText(props.info)
        setImg('')
      }
      function mouseLeave() {
        setText("")
        setImg(props.img)
      }
      
      // useEffect(() => {
      //   setHidden('none') 
      // }, [hidden]);

    return (
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className={style.tileDiv}>
          <div>
            <img src={img}/>
          </div>
          <div>
            <p className={style.tile}>{text}</p>
          </div> 
        </div>
    )
}

export default Tile;