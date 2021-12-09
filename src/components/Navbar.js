import {AppBar, Link,Box, Container, Toolbar, Typography, Button, Stack} from '@mui/material'
import { makeStyles} from '@material-ui/core/styles';
import { useNavigate} from 'react-router-dom'

const useStyles = makeStyles((theme)=>({
    appbar: {
        color: 'transparent'
    }
}))

export default function Navbar() {

    const classes = useStyles();
    const navigate = useNavigate();
    
    return (
        <Box>
            <AppBar position='fixed' elevation={0} className={classes.appbar}>
                <Container>
                    <Toolbar>
                        <Typography variant='h6' sx={{flexGrow: 1}}>
                            <Link style={{textDecoration: 'none', color:'white'}} href='/'>
                                Turismo Real
                            </Link>
                        </Typography>
                        <Stack spacing={2} direction='row'>
                            <Typography variant='h6'>
                                <Link style={{textDecoration: 'none', color:'white'}} href='/'>
                                    Inicio
                                </Link>
                            </Typography>
                            <Typography variant='h6'>
                                <Link href='/reservation' style={{textDecoration: 'none', color:'white'}}>
                                    Reservar
                                </Link>
                            </Typography>
                            <Typography variant='h6'>
                                <Link style={{textDecoration: 'none', color:'white'}}  href='/aboutUs'>
                                    Acerca de nosotros
                                </Link>
                            </Typography>
                            <Button variant='contained' style={{background:'#ff9f00', color:'white'}} onClick={()=> navigate('/signUp')}>
                                Registrate
                            </Button>
                            <Button variant='contained' style={{background:'#ff9f00', color:'white'}} onClick={()=> navigate('/signIn')}>
                                Inicia Sesión
                            </Button>  
                        </Stack>    
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}
