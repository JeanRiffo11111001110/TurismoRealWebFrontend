import {TextField, Button, Typography} from '@mui/material';
import {Send} from '@mui/icons-material';
import {makeStyles} from '@material-ui/core/styles';
import {useNavigate} from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
    form:{
        textAlign:'center',
        justifyContent: 'center'
    },
    formDiv:{
        margin:'150px 0 0 100px',
        justifyContent: 'center',
        textAlign:'center',
        position: 'absolute',
        background:'#F6F6F8',
        width:'400px',
        height:'300px',
        borderRadius:'30px'
    }
}));


export default function SignInForm() {

    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <div className={classes.formDiv}>
            <Typography variant='h4' style={{display:'flex', margin:'1rem 4rem'}} textAlign='center'>
                Iniciar Sesión
            </Typography>
            <form classname={classes.form}>
                <TextField variant='filled' label='Escribe tu correo' type='email' sx={{display:'flex', margin:'1rem 4rem'}}/>
                <TextField variant='filled' label='Escribe tu contraseña' type='password' sx={{display:'flex', margin:'1rem 4rem'}}/>
                <Button variant='contained' onClick={()=> navigate('/reservation')}  sx={{display:'flex', margin:'1rem 4rem'}} style={{background:'#ff9f00', color:'#A21313', height:'55px', width:'270px'}} type='submit' endIcon={<Send/>}>
                    Inicia Sesión
                </Button>
            </form>
        </div>
    )
}