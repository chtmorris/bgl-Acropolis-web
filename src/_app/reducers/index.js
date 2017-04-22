import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';

const rootReducer = combineReducers(Object.assign({}, {
    routing
}, require('./_reducers')));

export default rootReducer;
