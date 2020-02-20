import React from 'react';
import ReactDOM from 'react-dom';
import Apps from './App';
import { BrowserRouter} from 'react-router-dom';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import employeReducer from './redux/employeReducer';
import loginReducer from './redux/loginReducer';

const rootReducer = combineReducers({
    user:employeReducer,
    auth:loginReducer});

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Apps />
        </BrowserRouter>
</Provider>
, document.getElementById('root'));


