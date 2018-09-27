import { LOGIN_SUCEEDED, LOGIN_FAILD } from './action';
import axios from 'axios';

const API_HOST_URL = process.env.REACT_APP_API_HOST_URL;

export const postUsers = (payload) => dispatch => {
    axios
        .post(`${API_HOST_URL}/api/login`, payload)
        .then((res) => {
            sessionStorage.setItem("user", JSON.stringify(res.data));
            dispatch({ type: LOGIN_SUCEEDED, data: res.data })
        })
        .catch((err) => {
            dispatch({ type: LOGIN_FAILD, data: err });
        });
}
