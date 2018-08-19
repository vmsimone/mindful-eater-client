import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

import {loadAuthToken} from './local-storage';
import {setAuthToken, refreshAuthToken} from './actions/auth';

import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';


import reducer from './reducer.js';

const store = createStore(
    combineReducers({
        mindful: reducer,
        form: formReducer,
        auth: authReducer,
        protectedData: protectedDataReducer
    }),
    applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;