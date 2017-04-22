import React from 'react';
import StatelessLoading from '_app/_base/components/stateless/Loading';
import FixedDataTableWrapper from '_app/_base/components/FixedDataTableWrapper';
import styles from './Index.style';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        };
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.state.search === nextState.search) {} else {
            this.props.fetch(nextState.search.trim());
        }
    }

    handleTouchTapLoadMore() {
        this.props.fetchMore(this.state.search);
    }

    handleChangeOnSearchInput(event) {
        this.setState({search: event.target.value});
    }

    render() {
        return (
            <section className="fit layout vertical" style={styles.section}>
                <header style={styles.header}>
                    <paper-material elevation="2" class="layout horizontal">
                        <div className="layout vertical center-center">
                            <iron-icon icon="icons:search"/>
                        </div>
                        <input type="text" className="flex" style={styles.input} value={this.state.search} onChange={this.handleChangeOnSearchInput.bind(this)} autoFocus/>
                    </paper-material>
                </header>
                <div className="relative flex">
                    <FixedDataTableWrapper>
                        {this.props.children}
                    </FixedDataTableWrapper>
                    <StatelessLoading display={this.props.loading}/>
                </div>
                <footer style={styles.footer} className="layout horizontal center-center">
                    <paper-button onTouchTap={this.handleTouchTapLoadMore.bind(this)} raised>Load More</paper-button>
                </footer>
            </section>
        );
    }
}

Search.propTypes = {
    fetch: React.PropTypes.func,
    fetchMore: React.PropTypes.func,
    loading: React.PropTypes.bool
};

Search.defaultProps = {
    loading: false
};
