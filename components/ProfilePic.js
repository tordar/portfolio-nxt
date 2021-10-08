import style from "../styles/ProfilePic.module.css"
import Image from 'next/image'
import React, {useState} from 'react'


const ProfilePic = () => {

    const [pic, setPic] = useState('https://avatars.githubusercontent.com//u/71933707?v=4')

    function mouseEnter() {
      setPic('https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80')
    }
    function mouseLeave() {
      setPic('https://avatars.githubusercontent.com//u/71933707?v=4')
    }

    return (
        <Image onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} src={pic} className={style.img} alt="Picture of the author" height='150px' width='150px'/>
    )
}

export default ProfilePic;