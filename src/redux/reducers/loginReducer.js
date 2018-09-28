import { LOGIN_GUEST, LOGIN_SUCEEDED, LOGIN_FAILED } from '../actions/actionType'

const initialState = {
    user: {},
    errmsg: '',
    fetched: false,
    guest: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_GUEST:
            return { ...state, fetched: true, user: action.data }
        case LOGIN_SUCEEDED:
            return { ...state, fetched: true, user: action.data };
        case LOGIN_FAILED:
            return { ...state, fetched: false, errmsg: action.data };
        default:
            return null;
    }
}