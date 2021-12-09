import React from 'react'
import {Card, CardMedia, CardActions, Button, } from '@mui/material'
import {makeStyles} from '@material-ui/core/styles';
import {useNavigate} from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
    departamentoDiv:{
        margin:'120px 100px',
        justifyContent: 'center',
        textAlign:'left',
        position: 'absolute',
        background:'#F6F6F8',
        width:'45%',
        height:'300px',
        borderRadius:'30px'
    }
}))

export default function Reservation() {

    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <div className={classes.departamentoDiv}>
            <Card>
                <CardMedia
                component="img"
                alt="green iguana"
                height="300"
                image="/static/images/cards/contemplative-reptile.jpg"
                />
                <CardActions>
                    <Button onClick={()=> navigate('/reservarDepartamento')}>Reservar</Button>
                </CardActions>
            </Card>
        </div>
    )
}
