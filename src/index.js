import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
//importing redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


//reducers
const feelingsReducer = (state = [], action) => {
    if( action.type === 'GET_FEELINGS') {
        return action.payload
    }
    return state;
}
const commentsReducer = (state = [], action) => {
    console.group('action.payload for comment is', action.payload)
    if( action.type === 'GET_COMMENTS') {
        return action.payload
    }
    return state;
}
const understandingReducer = (state = [], action) => {
    if( action.type === 'GET_UNDERSTANDING') {
        return action.payload
    }
    return state;
}

const supportReducer = (state = [], action) => {
    if( action.type === 'GET_SUPPORT') {
        return action.payload
    }
    return state;
}

const feedbackResultReducer = (state = [], action) => {
    if( action.type === 'GET_FEEDBACK_RESULT') {
        return action.payload
    }
    return state;
}

//store
const reduxStore = createStore(
    combineReducers({
        feedbackResultReducer,
        feelingsReducer,
        commentsReducer,
        understandingReducer,
        supportReducer

    }),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store = {reduxStore}>
        <App />
        </Provider>
    </React.StrictMode>
);
