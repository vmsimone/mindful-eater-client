import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

import reducer from './reducer.js';


export default createStore(
    combineReducers({
        mindful: reducer,
        form: formReducer
    }),
    applyMiddleware(thunk)
);