import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import reducer from './reducer.js';


export default createStore(
    combineReducers({
        mindful: reducer,
        form: formReducer
    })
);