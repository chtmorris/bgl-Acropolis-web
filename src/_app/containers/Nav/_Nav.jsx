import React from 'react';
import {Link} from 'react-router';

export default class Nav extends React.Component {
    constructLink(i, link) {
        if (link.path.search('//') > -1) {
            return (
                <a key={i} href={link.path}>
                    <paper-item>{link.title}</paper-item>
                </a>
            );
        }

        return (
            <Link key={i} to={link.path} tabIndex="-1" style={{
                display: 'block'
            }}>
                <paper-item>{link.title}</paper-item>
            </Link>
        );
    }

    render() {
        let links = require('./_links');
        return (
            <paper-header-panel>
                <paper-toolbar style={{
                    backgroundColor: '#00A7CE'
                }}></paper-toolbar>
                <div className="fit layout vertical">
                    <nav>
                        <paper-menu>
                            {links.map((link, i) => this.constructLink(i, link))}
                        </paper-menu>
                    </nav>
                </div>
            </paper-header-panel>
        );
    }
}
