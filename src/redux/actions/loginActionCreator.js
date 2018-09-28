import { LOGIN_GUEST, LOGIN_SUCEEDED, LOGIN_FAILED } from './actionType';
import axios from 'axios';

const API_HOST_URL = process.env.REACT_APP_API_HOST_URL;

export const logInUsers = (payload) => dispatch => {

    if (payload && payload['email'] === 'guest') dispatch({ type: LOGIN_GUEST, data: payload });

    axios
        .post(`${API_HOST_URL}/api/login`, payload)
        .then((res) => {
            sessionStorage.setItem("user", JSON.stringify(res.data));
            dispatch({ type: LOGIN_SUCEEDED, data: res.data })
        })
        .catch((err) => {
            dispatch({ type: LOGIN_FAILED, data: err });
        });
}
