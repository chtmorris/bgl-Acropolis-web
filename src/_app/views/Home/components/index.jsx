import React from 'react';
import {Link} from 'react-router';
import style from './index.css';
import data from './data';

export default class Home extends React.Component {

    render() {
        let ids = Object.keys(data);
        return (
            <section className="layout vertical">
                <div className="flex" style={{
                    margin: '1rem'
                }}>

                    {ids.map(id => {
                        let profile = data[id];
                        return (

                            <paper-card key={id} image={profile.snapshot} style={{
                                maxWidth: '300px',
                                margin: '1rem'
                            }}>

                                <div className="card-content">
                                    <div className="cafe-header">
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
                                        <img src={profile.prog} alt="progress bar"/>
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
                                            <Link to={`/profile/${id}`}>Invest</Link>
                                        </paper-button>
                                    </div>
                                </div>

                            </paper-card>

                        );
                    })}

                </div>
            </section>
        );
    }

}
