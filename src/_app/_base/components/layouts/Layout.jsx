import React from 'react';

export default class Layout extends React.Component {
    render() {
        return (
            <app-drawer-layout fullbleed>
                <app-drawer align="right">{this.props.nav}</app-drawer>

                <app-header-layout class="layout vertical" fullbleed>
                    {(() => {
                        if (this.props.title) {
                            return (
                                <app-header>
                                    <app-toolbar>
                                        <div>{this.props.title}</div>
                                        <paper-icon-button icon="menu" drawer-toggle></paper-icon-button>
                                    </app-toolbar>
                                </app-header>
                            );
                        }
                    })()}

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
