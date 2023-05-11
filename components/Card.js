import Link from "next/dist/client/link";
import Image from 'next/image'
import style from "../styles/Card.module.css"
import { Card, Grid } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from "@mui/material/Chip";


const CardFunction = (props) => {


    
    return (
        <Grid item s>
            <Card className={style.card} variant="outlined" sx={{ maxWidth: 500 }}>
                <CardContent>
                    <Typography className={style.title} sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                    {props.title} 
                    </Typography>
                    <Typography variant="body2" component="div">
                    {props.info} 
                    </Typography>
                    <Chip label="GitHub" component="a" href={props.github} clickable>
                    </Chip>
                </CardContent>
            </Card>
        </Grid>
       
    )
}

export default CardFunction;

