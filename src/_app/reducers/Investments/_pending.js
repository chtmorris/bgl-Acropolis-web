const _types = require('_app/constants/action-types');

let list = [
    {
        id: 1,
        investor: 'Jay Grant',
        email_address: 'jgrant@kobo.com',
        date: new Date(),
        amount: 15000
    }, {
        id: 2,
        investor: 'Juan Barinas',
        email_address: 'jbarinas@gmail.com',
        date: new Date(),
        amount: 37000
    }, {
        id: 3,
        investor: 'Adam Lemmon',
        email_address: 'alemmon@gmail.com',
        date: new Date(),
        amount: 100000
    }, {
        id: 4,
        investor: 'Charlie Morris',
        email_address: 'cmorris@gmail.com',
        date: new Date(),
        amount: 74789
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
