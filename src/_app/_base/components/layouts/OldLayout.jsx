import React from 'react';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import styles, {muiTheme} from './Layout.style';
import metadata from '_app/_base/lib/metadata';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mounted: false
        };
    }

    componentDidMount() {
        this.initializeStyles();
        this.setState({mounted: true});
    }

    initializeStyles() {
        let _fn = (breakpoint, mql) => {
            if (mql.matches) {
                Object.assign(this.refs.nav.style, styles.mq[breakpoint].nav);
                Object.assign(this.refs.main.style, styles.mq[breakpoint].main);
                Object.assign(this.refs.header.style, styles.mq[breakpoint].header);
            }
        };
        //
        Object.keys(styles.mq).forEach(breakpoint => {
            let mql = window.matchMedia(breakpoint);
            _fn(breakpoint, mql);
            //
            mql.addListener((_mql) => {
                _fn(breakpoint, _mql);
            });
        });
    }

    handleTouchTap() {
        let nav = this.refs.nav.style;
        if (nav.width.startsWith("0")) {
            nav.width = "100vw";
        } else {
            nav.width = "0";
        }
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="fit">
                    <nav ref="nav" className="noselect fixed-right">{this.props.nav}</nav>
                    <main ref="main" className="fit layout vertical">
                        <header ref="header" className="noselect">
                            {metadata['application-name']}
                            <IconButton style={styles.IconButton} onTouchTap={this.handleTouchTap.bind(this)}>
                                <NavigationMenu/>
                            </IconButton>
                        </header>
                        <div className="relative flex-1">
                            {(() => {
                                if (this.state.mounted) {
                                    return this.props.main;
                                }
                            })()}
                        </div>
                    </main>
                </div>
            </MuiThemeProvider>
        );
    }
}
