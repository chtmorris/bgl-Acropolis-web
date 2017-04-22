import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import reducer from '_app/reducers';
import DevTools from '_app/_base/configuration/DevTools';

export default createStore(reducer, compose(applyMiddleware(thunk), DevTools.instrument()));
