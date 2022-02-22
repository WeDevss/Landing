import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from "@mui/material/Button";
import {BsArrowRight} from "react-icons/bs";
import colorBox from "../../Styles/colors";


export default function ActionAreaCard(props) {
    console.log(props.imgUrl)
    return (
        <Card sx={{ maxWidth: 345,borderRadius:5,mx: 'auto',textAlign: 'center',height:"100%","&:hover":{
            transform: 'scale(1.05)',transition:'0.3s',
            }}}>
            <CardActionArea sx={{paddingY:5}}>
                <CardMedia
                    component="img"
                    // height="40"
                    // width="40"
                    image={props.imgUrl}
                    alt="green iguana"
                    sx={{width: '70px',height: '70px',mx: 'auto',marginTop:'40px'}}

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{minHeight:"32px",padding:5}}>
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary"sx={{paddingX:5 }}>
                        Nunc nonummy metus. Donec elit libero
                    </Typography>
                </CardContent>
                <Button sx={{color: colorBox.bgColor,border:'none',fontSize:'25 px',height:'100%',marginBottom:'20px'}}  variant="outlined" className={"flex items-end"}><BsArrowRight /></Button>
            </CardActionArea>
        </Card>
    );
}
