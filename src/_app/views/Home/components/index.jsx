import React from 'react';
import Slider from 'material-ui/Slider';

const data = [
    {
        name: 'Joan Wagner',
        market_value: 4000000,
        address: '135 Toronto Street',
        minimum_investment: 25000,
        commited_investment: 0.75,
        pic: '/assets/img/Joan.png',
        snapshot: '/assets/img/house.png'
    }, {
        name: 'Joe Meyer',
        market_value: 1800000,
        address: '135 Toronto Street',
        minimum_investment: 50000,
        commited_investment: 0.45,
        pic: '/assets/img/Joan.png',
        snapshot: '/assets/img/house.png'
    }, {
        name: 'Adam Lemmon',
        market_value: 1800000,
        address: '135 Toronto Street',
        minimum_investment: 50000,
        commited_investment: 0.45,
        pic: '/assets/img/Joan.png',
        snapshot: '/assets/img/house.png'
    }, {
        name: 'Charlie Morris',
        market_value: 1800000,
        address: '135 Toronto Street',
        minimum_investment: 50000,
        commited_investment: 0.45,
        pic: '/assets/img/Joan.png',
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
                                    <article className="layout horizontal">
                                        <div>
                                            <img src={profile.pic} alt="pic" style={{
                                                maxHeight: '4rem',
                                                margin: '1rem'
                                            }}/>
                                        </div>
                                        <div className="flex">
                                            <div>{profile.name}</div>
                                            <div>{profile.market_value}</div>
                                            <div>{profile.address}</div>
                                            <div style={{
                                                margin: '0.382rem 0'
                                            }}>
                                                <div>Minimum Investment</div>
                                                <div>${profile.minimum_investment}</div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div style={{
                                    padding: '0 1rem'
                                }}>
                                    <Slider defaultValue={profile.commited_investment}/>
                                </div>
                            </div>
                            <div className="card-actions">
                                <div className="layout horizontal center-center">
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
