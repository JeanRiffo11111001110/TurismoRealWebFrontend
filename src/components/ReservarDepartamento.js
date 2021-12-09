import { CardMedia, Button, CardActions} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useNavigate} from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
    departamentoDiv:{
        margin:'0 50px',
        minHeight:'100vh',
        justifyContent: 'center',
        textAlign:'center',
        position: 'absolute',
        background:'#F6F6F8',
        width:'45%',
        height:'80%',
        borderRadius:'30px'
    },
    departamentoDiv2:{

        margin:'0 50px',
        minHeight:'100vh',
        justifyContent: 'right',
        textAlign:'right',
        background:'#F6F6F8',
        width:'45%',
        height:'80%',
        borderRadius:'30px'
    }
}))

export default function ReservarDepartamento() {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <div>
            <div align='left' className={classes.departamentoDiv}>
                <CardMedia
                    component='img'
                    alt='Imagen de Departamento'
                    height='60vh'
                    image='/'
                />
                <CardActions>
                    <form>
                        <label id='lblTitulo'>TITULO</label>
                        <img src="#" alt="Departamento" width="600" height="600" style={{display:'block'}}/>
                        <label id='lblPrecio' style={{display:'block'}}>Precio</label>
                        <label for='fechaEntrada'>Fecha de Entrada</label>
                        <input type='date' id='fechaEntrada'/>
                        <label for='fechaSalida'>Fecha de Salida</label>
                        <input type='date' id='fechaSalida'/>
                        <Button onClick={()=> navigate('/reservas')} type='submit'>Reservar</Button>
                    </form>
                </CardActions>
            </div>
            <div align="right" className={classes.departamentoDiv2}>
                    <CardMedia
                        component='img'
                        alt='Imagen de Departamento'
                        height='60vh'
                        image='/'
                    />
                    <CardActions>
                        <form>
                            <label id='lblTitulo'>TITULO</label>
                            <img src="#" alt="Departamento" width="600" height="600" style={{display:'block'}}/>
                            <label id='lblPrecio' style={{display:'block'}}>Precio</label>
                            <label for='fechaEntrada'>Fecha de Entrada</label>
                            <input type='date' id='fechaEntrada'/>
                            <label for='fechaSalida'>Fecha de Salida</label>
                            <input type='date' id='fechaSalida'/>
                            <Button onClick={()=> navigate('/reservas')} type='submit'>Reservar</Button>
                        </form>
                    </CardActions>
            </div>
        </div>
    )
}
