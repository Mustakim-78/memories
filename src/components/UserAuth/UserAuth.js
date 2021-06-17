import React, {useState} from 'react';
import {Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core';
import {GoogleLogin} from 'react-google-login';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {signup, signin} from '../../actions/auth.js';
//import { LockOutlinedIcon } from '@material-ui/icons/LockOutlined';
import InputData from './InputData.js';
import Icon from './Icon.js';
import useStyles from './styles';
//client id = 583471655601-941a4hnv387l2ak4l09mvhk0v59vu4t2.apps.googleusercontent.com
//client secret = ndpE6pkBjyzaYTiXLykS36mg
const UserAuth = () => {
    const initialState = {
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    };
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const clientID = "583471655601-941a4hnv387l2ak4l09mvhk0v59vu4t2.apps.googleusercontent.com"
    //const isSignup = true;
    const [formData, setFormData] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setSignUp] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignup){
            dispatch(signup(formData,history));
        }
        else{
            dispatch(signin(formData,history));
        }
        console.log(formData);
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch({ type: 'AUTH', data: { result, token }});
            history.push('/')
        } catch (error) {
            console.log(error);
        }

    }
    const googleFailure = () => {
        console.log("Login Error")
    }
    const switchMode = () => setSignUp((prevSignUp) => !prevSignUp);
    const handleShowPassword = () => setShowPassword((prevPassword) => !prevPassword);
    return (
    <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                {/*<LockOutlinedIcon />*/}
            </Avatar>
            <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignup && (
                            <>
                                <InputData name="firstName" label="First Name" handleChange={handleChange} autoFocus half />          
                                <InputData name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                        )
                    }
                    <InputData name="email" label="Email Address" handleChange={handleChange} type="email" /> 
                    <InputData name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} /> 
                    { isSignup && <InputData name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                </Grid>
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >{isSignup ? 'Sign Up' : 'Sign In'}</Button>
                <GoogleLogin
                    clientId={clientID}
                    render={(renderProps) => (
                        <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                                Google Sign In
                        </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                />
                <Grid container justify="flex-end">
                    <Grid item>
                        <Button onClick={switchMode}>
                            {isSignup ? "Already have an Account? Sign In": "Don't have an Account? Sign Up"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    </Container>
    )
}

export default UserAuth;