import { LOGIN_STARTED, LOGIN_SUCEEDED, LOGIN_FAILD } from '../actions/loginType'

const initialState = {
    user: {},
    errmsg: '',
    fetching: false,
    fetched: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_STARTED:
            return { ...state, fetching: true };
            break;
        case LOGIN_SUCEEDED:
            return { ...state, fetching: false, fetched: true, users: action.data };
            break;
        case LOGIN_FAILD:
            return { ...state, fetching: false, errmsg: action.data };
            break;
        default:
            return null;
    }
    return state;
}