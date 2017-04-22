import React from 'react';
import style from './Layout.css';

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
                            <div className={style['logo']}>ACROPOLIS</div>
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
