import React from 'react';
import {Link} from 'react-router';

import styles from './NoMatch.style';

const NoMatch = () => (
    <section style={styles.section} className="fit layout vertical center-center">
        <h2 style={styles.h2}>404</h2>
        <div>
            <Link to="/" tabIndex="-1" style={styles.Link}>
                <span style={styles.span}>/</span>
            </Link>
        </div>
    </section>
);

export default NoMatch;
