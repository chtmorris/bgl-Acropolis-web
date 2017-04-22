import React from 'react';
import Slider from 'material-ui/Slider';

const data = [
    {
        name: 'Joan Wagner',
        market_value: 4000000,
        address: '135 Toronto Street',
        minimum_investment: 25000,
        commited_investment: 0.75,
        snapshot: '/assets/img/house.png'
    }, {
        name: 'Joe Meyer',
        market_value: 1800000,
        address: '135 Toronto Street',
        minimum_investment: 50000,
        commited_investment: 0.45,
        snapshot: '/assets/img/house.png'
    }, {
        name: 'Adam Lemmon',
        market_value: 1800000,
        address: '135 Toronto Street',
        minimum_investment: 50000,
        commited_investment: 0.45,
        snapshot: '/assets/img/house.png'
    }, {
        name: 'Charlie Morris',
        market_value: 1800000,
        address: '135 Toronto Street',
        minimum_investment: 50000,
        commited_investment: 0.45,
        snapshot: '/assets/img/house.png'
    }

];

export default class Home extends React.Component {
    render() {
        return (
            <section className="layout vertical">
                <div className="flex" style={{
                    margin: '1rem'
                }}>

                    {data.map((profile, i) => (
                        <paper-card image={profile.snapshot} style={{
                            maxWidth: '300px',
                            margin: '1rem'
                        }}>
                            <div class="card-content">
                                <div class="cafe-header">
                                    <paper-item>
                                        <paper-item-body two-line>
                                            <div>{profile.name}</div>
                                            <div secondary>{profile.market_value}</div>
                                        </paper-item-body>
                                        <iron-icon icon="warning"></iron-icon>
                                    </paper-item>
                                </div>
                                <div>
                                    <Slider defaultValue={profile.commited_investment}/>
                                </div>
                            </div>
                            <div class="card-actions">
                                <div class="horizontal justified">
                                    <paper-button>Invest</paper-button>
                                </div>
                            </div>
                        </paper-card>
                    ))}

                </div>
            </section>
        );
    }
}
