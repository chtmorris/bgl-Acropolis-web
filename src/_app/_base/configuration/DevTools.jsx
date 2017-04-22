import React from 'react';
import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const props = {
    defaultPosition: 'left',
    defaultIsVisible: false,
    changeMonitorKey: 'ctrl-m',
    changePositionKey: 'ctrl-w',
    toggleVisibilityKey: 'ctrl-h'
};

const DevTools = createDevTools(
    <DockMonitor {...props}>
        <LogMonitor/>
    </DockMonitor>
);

export default DevTools;
