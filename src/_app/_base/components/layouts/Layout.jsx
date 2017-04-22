import React from 'react';
import style from './Layout.css';
import { Link } from 'react-router';

export default class Layout extends React.Component {
    render() {
        return (
            <app-drawer-layout fullbleed>
                {/*
                    <app-drawer align="right">{this.props.nav}</app-drawer>
                */}

                <app-header-layout class="layout vertical" fullbleed>
                    <app-header>
                        <app-toolbar>
                            <Link to='/'>
                              <div>
                                <img src='/assets/img/logo.png' className={style.logo}/>
                              </div>
                            </Link>
                            <paper-icon-button icon="menu" drawer-toggle></paper-icon-button>
                        </app-toolbar>
                    </app-header>

                    <div className="relative flex">
                        <main className="fit">
                            {this.props.main}
                        </main>
                    </div>
                </app-header-layout>
            </app-drawer-layout>
        );
    }
}
