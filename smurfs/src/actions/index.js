import axios from 'axios';
import smurfsList from '../components/smurfsList';

export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR";
export const POST_SMURFS = "POST_SMURFS";
export const POST_SMURFS_SUCCESS = "POST_SMURFS_SUCCESS";
export const POST_SMURFS_ERROR = "POST_SMURFS_ERROR";

export const fetchSmurfs = () => {
    return(dispatch) => {
        dispatch({type: FETCH_SMURFS});
        axios.get('http://localhost:3333/smurfs')
        .then((res) => {
            console.log(res.data)
            dispatch({type: FETCH_SMURFS_SUCCESS,
            payload: res.data})
        })
        .catch((err) => {
            dispatch({type: FETCH_SMURFS_ERROR,
            payload: {message: "Whoops! Looks like Gargamel got here first!"}})
        })
    }
}

export const postSmurfs = (newSmurf) => {
    // return(dispatch) => {
    //     dispatch({type: POST_SMURFS});
        axios.post('http://localhost:3333/smurfs', newSmurf)
        
        .then((res) => {
            console.log('post', res.data)
            // dispatch({type: POST_SMURFS_SUCCESS,
            // payload: res.data})
        })
        .catch((err) => {
            console.log(err)
            // dispatch({type: POST_SMURFS_ERROR,
            // payload: {message: "Whoops! Looks like your new Smurf didn't want to join the Village!"}})
        })
    // }
}