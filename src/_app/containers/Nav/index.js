import {connect} from 'react-redux';
import _Nav from './_Nav';

const mapStateToProps = ({routing}) => ({routing});
export default connect(mapStateToProps)(_Nav);
