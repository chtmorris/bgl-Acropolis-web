import * as _types from '_app/constants/action-types';
import {WS_SEARCH_CLIENT as client} from '_app/constants/api-clients';

let _q,
    _offset,
    _limit,
    _iteration;

export const fetch = (q) => (dispatch) => {
    _q = q;
    _offset = 0;
    _limit = 50;
    _iteration = 1;
    //
    dispatch({type: _types.SEARCH_FETCHING});
    //
    return client.get(`?q=${_q}&offset=${_offset}&limit=${_limit}`).then(({json, response}) => {
        if (q === _q) {
            return Promise.all([
                dispatch({type: _types.SEARCH_FETCHING_COMPLETED}),
                dispatch({type: _types.SEARCH_LOAD, results: json})
            ]);
        } else {
            console.info('fetch ignored');
        }
    }).catch(err => dispatch({type: _types.SEARCH_FETCHING_FAILED, err}));
};

export const fetchMore = (q) => (dispatch) => {
    _offset = ++_iteration * _limit;
    //
    dispatch({type: _types.SEARCH_FETCHING});
    //
    return client.get(`?q=${_q}&offset=${_offset}&limit=${_limit}`).then(({json, response}) => {
        if (q === _q) {
            return Promise.all([
                dispatch({type: _types.SEARCH_FETCHING_COMPLETED}),
                dispatch({type: _types.SEARCH_LOAD_MORE, results: json})
            ]);
        } else {
            console.info('fetch ignored');
        }
    }).catch(err => dispatch({type: _types.SEARCH_FETCHING_FAILED, err}));
};
