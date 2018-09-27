import { LOGIN_SUCEEDED, LOGIN_FAILD } from '../actions/action'

const initialState = {
    user: {},
    errmsg: '',
    fetched: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCEEDED:
            return { ...state, fetching: false, fetched: true, user: action.data };
        case LOGIN_FAILD:
            return { ...state, fetching: false, errmsg: action.data };
        default:
            return null;
    }
}