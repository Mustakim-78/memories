import axios from 'axios';

//const url = 'https://yourawesomememories.herokuapp.com/posts';
//const API = axios.create({baseURL:'http://localhost:5000'});

const API = axios.create({baseURL:'https://yourawesomememories.herokuapp.com'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})

export const fetchPosts = () => API.get('/posts');

export const createPost = async (newPost) => (await API.post('/posts',newPost))

export const updatePost = async (id,updatedPost) => (await API.patch(`/posts/${id}`,updatedPost));

export const deletePost = async (id) => (await API.delete(`/posts/${id}`))

export const likePost = async (id) => (await API.patch(`/posts/${id}/likePost`));

//Auth Api endpoint
export const signIn = async (data) => (await API.post(`/user/signin`,data));

export const signUp = async (data) => (await API.post(`/user/signup`,data));