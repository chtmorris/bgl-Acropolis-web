const _types = require('_app/constants/action-types');

module.exports = (state = [], action) => {
    switch (action.type) {

        case _types.INVESTMENT_APPROVED_PUSH:
            return [
                ...state,
                action.investment
            ];

        default:
            return state;

    }
};
