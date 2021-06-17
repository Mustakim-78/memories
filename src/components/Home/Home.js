import React,{useState, useEffect} from 'react'
import  { useDispatch } from 'react-redux';
import {Container, Grow, Grid} from '@material-ui/core';
import Posts from '../Posts/Posts.js';
import Form from '../Form/Form.js';
import { getPosts } from '../../actions/posts.js';
import useStyles from './styles';

function Home() {
    const [currID, setCurrID] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    },[currID,dispatch]);
    return (
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container  justify="space-between" align-items="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrID = {setCurrID}/>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Form currID = {currID} setCurrID = {setCurrID} /> 
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home