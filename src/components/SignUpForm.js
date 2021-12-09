import {TextField, Button, Typography} from '@mui/material'
import {Send} from '@mui/icons-material';
import {makeStyles} from '@material-ui/core/styles';
import {useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react';


const useStyles = makeStyles((theme)=>({
    form:{
        textAlign:'center',
        justifyContent: 'center'
    },
    formDiv:{
        margin:'150px 0 0 100px',
        justifyContent: 'center',
        textAlign:'left',
        position: 'absolute',
        background:'#F6F6F8',
        width:'400px',
        height:'600px',
        borderRadius:'30px'
    }
}))


export default function SignUpForm() {

    const [persona,setPersona] = useState({
        rut:'',
        nombres:'',
        apellidos:'',
        telefono: '',
        correo: '',
        contrasenia: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await fetch('http://localhost:8888/api/personas',{
            method: 'POST',
            body: JSON.stringify(persona),
            headers: {"Content-Type": "application/json"},
            
        })

        const data = token.json();
        console.log(data);
    }



    const handleChange = (e) => {
        setPersona({...persona, [e.target.name]: e.target.value});
    }


    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <div className={classes.formDiv}>
            <Typography variant='h4' style={{display:'flex', margin:'1rem 4rem'}} textAlign='center'>
                Registrate
            </Typography>
            <form onSubmit={handleSubmit} classname={classes.form}>
                <TextField onChange={handleChange} name='rut' variant='filled' label='Escribe tu rut' sx={{display:'flex', margin:'1rem 4rem'}}/>
                <TextField onChange={handleChange} variant='filled' name='nombres' label='Escribe tus nombres' sx={{display:'flex', margin:'1rem 4rem'}}/>
                <TextField onChange={handleChange} variant='filled' name='apellidos' label='Escribe tus apellidos' sx={{display:'flex', margin:'1rem 4rem'}}/>
                <TextField onChange={handleChange} variant='filled' name='telefono' label='Escribe tu telefono' sx={{display:'flex', margin:'1rem 4rem'}}/>
                <TextField onChange={handleChange} variant='filled' name='correo' label='Escribe tu correo' type='email' sx={{display:'flex', margin:'1rem 4rem'}}/>
                <TextField onChange={handleChange} variant='filled' name='contrasenia' label='Escribe tu contraseña' type='password' sx={{display:'flex', margin:'1rem 4rem'}}/>
                <Button variant='contained' onClick={()=> navigate('/signIn')}  sx={{display:'flex', margin:'1rem 4rem'}} style={{background:'#ff9f00', color:'#A21313', height:'55px', width:'270px'}} type='submit' endIcon={<Send/>}>
                    Registrate
                </Button>
            </form>
        </div>
    )
}
