import {combineReducers} from 'redux';

import fetch from './_fetch';
import results from './_results';

export default combineReducers({fetch, results});
