import _ from 'lodash';
import {connect} from 'react-redux';
import * as actions from '_app/actions/search';
import Search from '../components/Search';

const mapStateToProps = (state) => {
    return {results: state.Search.results, loading: state.Search.fetch.loading};
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetch: (function() {
            let _q;
            let _fetch = _.debounce(() => {
                dispatch(actions.fetch(_q));
            }, 200);
            return (q) => {
                _q = q;
                _fetch();
            }
        })(),
        fetchMore: (q) => {
            return dispatch(actions.fetchMore(q));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
