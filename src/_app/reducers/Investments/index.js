import {combineReducers} from 'redux';

import approved from './_approved';
import pending from './_pending';

export default combineReducers({approved, pending});
