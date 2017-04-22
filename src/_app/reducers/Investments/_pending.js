const _types = require('_app/constants/action-types');

let list = [
    {
        id: 1,
        investor: 'Jay Grant',
        email_address: 'jgrant@kobo.com',
        date: new Date(),
        amount: 15000
    }
]

module.exports = (state = list, action) => {
    switch (action.type) {

        case _types.INVESTMENT_PENDING_PUSH:
            return [
                ...state,
                action.investment
            ];

        case _types.INVESTMENT_PENDING_POP:
            let _new_state = state.filter(investment => !(investment.id === action.investment.id));
            return [..._new_state];

        default:
            return state;

    }
};
