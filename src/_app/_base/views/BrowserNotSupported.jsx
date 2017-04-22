import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const BrowserNotSupported = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className="fit layout vertical center-center noselect" style={{
            backgroundColor: '#eee'
        }}>
            <Paper zDepth={3} style={{
                margin: '1.618em',
                padding: '1em 1.618em'
            }}>
                <article>
                    <header style={{
                        marginBottom: '4em'
                    }}>
                        <h3>Browser Not Supported</h3>
                        <p>The browser you are currently using is not supported for this site. To view this site, please use Chrome.</p>
                    </header>
                    <section>
                        <a href="https://www.google.com/chrome/browser">
                            <RaisedButton primary={true} label="download chrome" linkButton={true}/>
                        </a>
                    </section>
                </article>
            </Paper>
        </div>
    </MuiThemeProvider>
);

ReactDOM.render((<BrowserNotSupported/>), document.getElementById('app'));
