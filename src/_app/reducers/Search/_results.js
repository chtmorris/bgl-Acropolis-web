const _types = require('_app/constants/action-types');

module.exports = (state = [], action) => {
    switch (action.type) {

        case _types.SEARCH_LOAD:
            return [...action.results];

        case _types.SEARCH_LOAD_MORE:
            return [
                ...state,
                ...action.results
            ];

        default:
            return state;

    }
};
