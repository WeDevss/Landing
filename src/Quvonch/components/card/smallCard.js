import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCardSmall(props) {
    console.log(props)
    return (
        <Card style={props.style} sx={{ maxWidth: 345,borderRadius:3,"&:hover":{
                    transform: 'scale(1.05)',transition:'all 0.3s',} }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={props.imgUrl}
                    alt="green iguana"
                    sx={{width: '70px',height: '70px',mx: 'auto',marginTop:'40px',display:'flex',justifyContent:'start',alignItems: 'start',}}

                />
                <CardContent>
                    <Typography  sx={{color:`${props.style.color}`}} >
                        {props.bottomText}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
