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
    return state;
}
const commentsReducer = (state = [], action) => {
    return state;
}
const understandingReducer = (state = [], action) => {
    return state;
}

const supportReducer = (state = [], action) => {
    return state;
}

const feedbackResultReducer = (state = [], action) => {
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
