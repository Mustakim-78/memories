//import { connect } from 'react-redux';
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api';

export const getPosts = () => async(dispatch) => {

    try{
        const { data } = await api.fetchPosts();
        dispatch({type:FETCH_ALL, payload: data});

    }
    catch(e){
        console.log(e.message);
    }
}
export const createPost = (post) => async (dispatch) => {

    try{        
        const {data} = await api.createPost(post);

        dispatch({type:CREATE, payload: data});
    }
    catch(e){
        console.log(e);
    }
}

export const updatePost = (id,updatedPost) => async (dispatch) => {

    try{
        const {data} = await api.updatePost(id,updatedPost);

        dispatch({type:UPDATE, payload: data});
    }
    catch(e){
        console.log(e);
    }
}

export const deletePost = (id) => async (dispatch) => {

    try{
        await api.deletePost(id);
        
        dispatch({type:DELETE, payload: id});
    }
    catch(e){
        console.log(e);
    }
}

export const likePost = (id) => async (dispatch) => {

    try{
        const {data} = await api.likePost(id);
        
        dispatch({type:UPDATE, payload: data});
    }
    catch(e){
        console.log(e);
    }
}