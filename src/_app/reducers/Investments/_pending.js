const _types = require('_app/constants/action-types');

let list = [
    {
        id: 4,
        investor: 'Charlie Morris',
        email_address: 'cmorris@gmail.com',
        date: new Date(),
        amount: 200000
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
