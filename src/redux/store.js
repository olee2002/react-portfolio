import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import rootReducer from './reducers';


const initialState = {};
const middleware = []

export default createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(promise(), thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);