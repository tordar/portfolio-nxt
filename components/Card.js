import Link from "next/dist/client/link";
import Image from 'next/image'
import style from "../styles/Card.module.css"
import { Card } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from "@mui/material/Chip";

const CardFunction = (props) => {

    
    return (
<Card className={style.card} variant="outlined" sx={{ maxWidth: 500 }}>
      <CardContent>
        <Typography className={style.title} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {props.title} 
        </Typography>
        <Typography variant="h5" component="div">
        {props.info} 
        </Typography>
        <Chip label="GitHub" component="a" href={props.github} clickable>
        
        </Chip>
      </CardContent>
        
      
    </Card>
       
    )
}

export default CardFunction;

/* <div className={style.card}>
<div>
    <h4 className={style.title}>{props.title}</h4>
    <p className={style.info}>{props.info}</p>
</div>
<div className={style.iconContainer}>
    <div className={style.icons}>
        <div>
            <a href={props.github} rel="noreferrer" target="_blank"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width='20px' height='20px'/></a>
        </div>
        <div>
        <a href={props.link} rel="noreferrer" target="_blank"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" width='20px' height='20px'/></a>
        </div>
    </div>
    <div className={style.icons}>
    </div>
</div>
</div> */