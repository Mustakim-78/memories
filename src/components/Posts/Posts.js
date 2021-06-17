import React from 'react'
import {Grid, CircularProgress} from '@material-ui/core'; 
import { useSelector } from 'react-redux';
import Post from './Post/Post'
import useStyles from './styles';
function Posts({setCurrID}) {
    const classes = useStyles();
    const allposts = useSelector((state) => state.posts);
    return (
        !allposts.length ? <CircularProgress /> : (
             <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                 {
                     allposts.map((post) => (
                         <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} setCurrID = {setCurrID}/>
                         </Grid>
                     ))
                 }
             </Grid>
        )
    );
}

export default Posts
