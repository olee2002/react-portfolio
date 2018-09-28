import { SIGNUP_SUCEEDED, SIGNUP_FAILED } from './actionType';
import axios from 'axios';

const API_HOST_URL = process.env.REACT_APP_API_HOST_URL;

export const registerUsers = (payload) => dispatch => {
    axios
        .post(`${API_HOST_URL}/api/register`, payload)
        .then((res) => {
            sessionStorage.setItem("user", JSON.stringify(res.data));
            dispatch({ type: SIGNUP_SUCEEDED, data: res.data })
        })
        .catch((err) => {
            dispatch({ type: SIGNUP_FAILED, data: err.response.data });
        });
}
