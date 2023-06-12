import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
//importing redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


//reducers
//action.payload returns us whatever user put in the feeling input
//if get_new_feedback action is triggered empty reducers
//return action.payload is pushing our inputs to array
//our action is the dispatch and payload was set to our input
//thats how action.payload has our input value
const feelingsReducer = (state = [], action) => {
    if( action.type === 'GET_FEELINGS') {
        return action.payload
    }
    else if (action.type === 'GET_NEW_FEEDBACK') {
        return state = []
    }
    return state;
}
const commentsReducer = (state = [], action) => {
    console.group('action.payload for comment is', action.payload)
    if( action.type === 'GET_COMMENTS') {
        return action.payload
    }
    else if (action.type === 'GET_NEW_FEEDBACK') {
        return state = []
    }
    return state;
}
const understandingReducer = (state = [], action) => {
    if( action.type === 'GET_UNDERSTANDING') {
        return action.payload
    }
    else if (action.type === 'GET_NEW_FEEDBACK') {
        return state = []
    }
    
    return state;
}

const supportReducer = (state = [], action) => {
    if( action.type === 'GET_SUPPORT') {
        return action.payload
    }
    else if (action.type === 'GET_NEW_FEEDBACK') {
        return state = []
    }
    return state;
}

const feedbackResultReducer = (state = [], action) => {
    if( action.type === 'GET_FEEDBACK_RESULT') {
        return action.payload
    }
    else if (action.type === 'GET_NEW_FEEDBACK') {
        return state = []
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
//store can be used on other pages
//but how its only wrapped around app??????
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store = {reduxStore}>
        <App />
        </Provider>
    </React.StrictMode>
);
