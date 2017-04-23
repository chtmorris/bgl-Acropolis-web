const _types = require('_app/constants/action-types');

let list = [
  {
      id: 3,
      investor: 'Adam Lemmon',
      email_address: 'alemmon@gmail.com',
      date: new Date(),
      amount: 300000
  }
]

module.exports = (state = list, action) => {
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
