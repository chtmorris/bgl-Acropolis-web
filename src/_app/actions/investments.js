import * as _types from '_app/constants/action-types';

export const pushApprovedInvestment = (investment) => {
    return {type: _types.INVESTMENT_APPROVED_PUSH, investment};
};

export const pushPendingInvestment = (investment) => {
    return {type: _types.INVESTMENT_PENDING_PUSH, investment};
};

export const popPendingInvestment = (investment) => {
    return {type: _types.INVESTMENT_PENDING_POP, investment};
};
