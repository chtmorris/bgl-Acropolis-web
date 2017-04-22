import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {grey100} from 'material-ui/styles/colors';

import metadata from '_app/_base/lib/metadata';

const NAV_WIDTH = '256px';
const HEADER_HEIGHT = '3rem';
const common = {
    nav: {
        boxSizing: 'border-box',
        backgroundColor: metadata['theme-color']
    },
    main: {
        boxSizing: 'border-box',
        backgroundColor: grey100,
        overflow: 'auto'
    },
    header: {
        boxSizing: 'border-box',
        backgroundColor: metadata['theme-color'],
        zIndex: 1001,
        height: HEADER_HEIGHT,
        lineHeight: HEADER_HEIGHT,
        padding: '0 3rem 0 1rem',
        borderBottom: '1px solid #fff'
    }
};

export default {
    mq : {
        '(max-width: 700px)': {
            nav: {
                ...Object.assign({}, common.nav, {
                    top: HEADER_HEIGHT,
                    width: 0,
                    opacity: 0.9,
                    zIndex: 1000000,
                    transition: 'width 500ms cubic-bezier(0.445, 0.05, 0.55, 0.95)'
                })
            },
            main: {
                ...Object.assign({}, common.main, {marginRight: 0})
            },
            header: {
                ...Object.assign({}, common.header, {display: 'block'})
            }
        },
        '(min-width: 701px)': {
            nav: {
                ...Object.assign({}, common.nav, {
                    top: 0,
                    width: NAV_WIDTH,
                    opacity: 1,
                    transition: 'initial'
                })
            },
            main: {
                ...Object.assign({}, common.main, {marginRight: NAV_WIDTH})
            },
            header: {
                ...Object.assign({}, common.header, {display: 'none'})
            }
        }
    },
    IconButton : {
        position: 'absolute',
        right: 0
    }
};

export const muiTheme = getMuiTheme();
