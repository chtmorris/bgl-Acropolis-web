const _types = require('_app/constants/action-types');

module.exports = (state = {}, action) => {
    switch (action.type) {

        case _types.SEARCH_FETCHING:
            return {loading: true};

        case _types.SEARCH_FETCHING_COMPLETED:
            return {loading: false};

        case _types.SEARCH_FETCHING_FAILED:
            return {loading: false, err: action.err};

        default:
            return state;

    }
};
