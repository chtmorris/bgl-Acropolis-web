import React from 'react';
import Slider from 'material-ui/Slider';
import {Link} from 'react-router';
import style from './index.css';

const data = [
    {
        name: 'Joan Wagner',
        market_value: '$4,000,000',
        address: '135 Toronto Street',
        minimum_investment: 25000,
        commited_investment: 0.75,
        pic: '/assets/img/Joan.png',
        snapshot: '/assets/img/house1.png',
        prog: '/assets/img/progBar1.png'
    }, {
        name: 'Joe Meyer',
        market_value: '$1,800,000',
        address: '135 Toronto Street',
        minimum_investment: 50000,
        commited_investment: 0.45,
        pic: '/assets/img/person2.png',
        snapshot: '/assets/img/house2.png',
        prog: '/assets/img/progBar2.png'
    }, {
        name: 'Adam Lemmon',
        market_value: '$1,800,000',
        address: '135 Toronto Street',
        minimum_investment: 50000,
        commited_investment: 0.45,
        pic: '/assets/img/person3.png',
        snapshot: '/assets/img/house3.png',
        prog: '/assets/img/progBar3.png'
    }, {
        name: 'Charlie Morris',
        market_value: '$1,800,000',
        address: '135 Toronto Street',
        minimum_investment: 50000,
        commited_investment: 0.45,
        pic: '/assets/img/person4.png',
        snapshot: '/assets/img/house4.png',
        prog: '/assets/img/progBar3.png'
    }, {
        name: 'Joan Wagner',
        market_value: '$4,000,000',
        address: '135 Toronto Street',
        minimum_investment: 25000,
        commited_investment: 0.75,
        pic: '/assets/img/person5.png',
        snapshot: '/assets/img/house5.png',
        prog: '/assets/img/progBar1.png'
    }, {
        name: 'Joe Meyer',
        market_value: '$1,800,000',
        address: '135 Toronto Street',
        minimum_investment: 50000,
        commited_investment: 0.45,
        pic: '/assets/img/person6.png',
        snapshot: '/assets/img/house6.png',
        prog: '/assets/img/progBar2.png'
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
                                            <div className={style.name}>{profile.name}</div>
                                            <div className={style.value}>{profile.market_value}</div>
                                            <div className={style.address}>{profile.address}</div>
                                            <div style={{
                                                margin: '0.382rem 0'
                                            }}>
                                                <div className={style.minVal}>Minimum Investment</div>
                                                <div>${profile.minimum_investment}</div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className={style.progbar}>
                                    <img src={profile.prog}/>
                                </div>

                                {/* <div style={{
                                    padding: '0 1rem'
                                }}>
                                    <Slider defaultValue={profile.commited_investment}/>
                                </div> */}
                            </div>
                            <div className="card-actions">
                                <div className="layout horizontal center-center">
                                    <paper-button>
                                        <Link to="/profile">Invest</Link>
                                    </paper-button>
                                </div>
                            </div>

                        </paper-card>
                    ))}

                </div>
            </section>
        );
    }
}
