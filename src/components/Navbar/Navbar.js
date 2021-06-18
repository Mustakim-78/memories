import React,{useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory, Link, useLocation} from 'react-router-dom';
import {AppBar, Typography, Avatar, Toolbar, Button} from '@material-ui/core';
import memories from '../../images/memories.png';
import useStyles from './styles';

const Navbar = () => {
    const [user, setuser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const Logout = () => {
        dispatch({type:"LOGOUT"});

        history.push('/');
        setuser(null);
    }
    useEffect(() => {
        //  const token = user?.token;
        
        setuser(JSON.parse(localStorage.getItem('profile')));
    }, [location,user]);
    
    const classes = useStyles();
    return(
    <AppBar className={classes.appBar} position = "static" color = "inherit">
        <div>
            <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
            <img className={classes.image} src={memories} alt="memories" height={60}/>
        </div>
        <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" onClick={Logout}>Logout</Button>
                </div>
            ):(
                <Button component={Link} to="/auth" variant="contained" color="primary">SignIn</Button>
            )}
        </Toolbar>
    </AppBar>
)}

export default Navbar;