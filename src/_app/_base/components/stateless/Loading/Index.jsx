import React from 'react';
import styles from './Index.style';

const Loading = (props) => (
    <div style={styles.display[props.display]}>
        <div className="fit layout vertical center-center" style={styles.fit}>
            <div>
                <paper-spinner active></paper-spinner>
            </div>
        </div>
    </div>
);

Loading.propTypes = {
    display: React.PropTypes.bool
};

Loading.defaultProps = {
    display: true
};

export default Loading;
