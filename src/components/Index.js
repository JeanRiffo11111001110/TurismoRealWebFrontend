import * as React from 'react';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    root: {
        minHeight:'100vh',
        backgroundImage:`url(${process.env.PUBLIC_URL + '/assets/Banner2.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        height: '100%',
        width: '100%',
        display: 'block', 
        opacity: 0.8,
        position: 'absolute'
      }
}));

export default function Index() {

    const classes = useStyles();

    return (
            <div className={classes.root} elevation={0}>
                
            </div>
    )
}
