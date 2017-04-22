import _ from 'lodash';
import React from 'react';

export default class FixedDataTableWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.setTableDimensions = () => {
            let width = this.refs.wrapper.parentElement.offsetWidth;
            let height = this.refs.wrapper.parentElement.offsetHeight;
            this.setState({width, height});
        };
        this.handleWindowResize = _.debounce(this.setTableDimensions, 200);
    }

    componentDidMount() {
        this.handleWindowResize()
        document.querySelector('app-header-layout').addEventListener('iron-resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        document.querySelector('app-header-layout').removeEventListener('iron-resize', this.handleWindowResize);
    }

    render() {
        let tableprops = {
            width: this.state.width || 0,
            height: this.state.height || 0
        };

        return (
            <div ref="wrapper">
                {React.cloneElement(this.props.children, tableprops)}
            </div>
        );
    }
}

FixedDataTableWrapper.propTypes = {
    children: (props, propName, componentName) => {
        if (props['children'].type.displayName === 'TransitionTable') {} else {
            throw new Error('child component must be a Table type component from fixed-data-table');
        }
    }
};
