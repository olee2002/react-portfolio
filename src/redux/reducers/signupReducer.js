import { SIGNUP_SUCEEDED, SIGNUP_FAILED } from '../actions/actionType'

const initialState = {
    user: {},
    errmsg: '',
    fetched: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_SUCEEDED:
            return { ...state, fetched: true, user: action.data };
        case SIGNUP_FAILED:
            return { ...state, fetched: false, errmsg: action.data };
        default:
            return null;
    }
}