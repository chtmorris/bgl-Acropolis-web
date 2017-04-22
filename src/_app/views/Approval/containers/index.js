import _ from 'lodash';
import {connect} from 'react-redux';
import * as actions from '_app/actions/investments';
import Search from '../components';

const mapStateToProps = (state) => {
    return {approved: state.Investments.approved, pending: state.Investments.pending};
};

const mapDispatchToProps = (dispatch) => {
    return {
        approve: (investment) => {
            dispatch(actions.pushApprovedInvestment(investment));
            dispatch(actions.popPendingInvestment(investment));
        },
        decline: (investment) => {
            dispatch(actions.popPendingInvestment(investment));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
