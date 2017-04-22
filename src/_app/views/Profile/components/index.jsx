import React from 'react';
import style from './index.css';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import {Grid} from 'reflexbox';
import TextField from 'material-ui/TextField';

import settings from '_app/lib/settings';
import {investmentProposalAdd} from '_app/lib/blockchain-api';

const fieldStyle = {
    underlineStyle: {
        color: '#7ED321'
    }
};

export default class Profile extends React.Component {
    addInvestment() {
        console.log(this.refs.investment_value.value)

        investmentProposalAdd(settings.INVESTOR1, 10000, () => {
            console.log('investment added')
        });
    }

    render() {
        return (
            <div>
                <Card>

                    <CardMedia>
                        <div className={style['profile-box']}>
                            <div>
                                <Grid col={4} px={2} py={2}>
                                    <img src="/assets/img/Joan.png" alt="pic"/>
                                </Grid>
                                <Grid col={8} px={2} py={2}>
                                    <h2>Joan Wagner</h2>
                                    <p className={style['price']}>$4,450,114.00</p>
                                    <h4>123 Street, Toronto</h4>
                                </Grid>
                            </div>
                            <div>
                                <Grid col={4} px={2} py={2}>
                                    <p className={style['green-text']}>570</p>
                                    <p>Credit score</p>
                                </Grid>
                                <Grid col={6} px={2} py={2}>
                                    <p className={style['green-text']}>General Electric</p>
                                    <p>Job at Fortune 500 company</p>
                                </Grid>
                                <Grid col={2} px={2} py={2}>
                                    <p className={style['green-text']}>30</p>
                                    <p>Backers</p>
                                </Grid>
                            </div>

                            {/* ===== LINK HERE TO SMART CONTRACT ===== */}
                            <div className={style['invest']}>
                                <TextField ref="investment_value" hintText="How much would you like to invest?" underlineStyle={fieldStyle.underlineStyle}/>
                                <span className={style['investAmount']}></span>
                                <button className="mdc-button mdc-button--primary" onClick={this.addInvestment.bind(this)}>
                                    Invest with Joan
                                </button>
                            </div>

                        </div>
                        <img src="/assets/img/house.png" alt="snapshot"/>
                    </CardMedia>

                    <CardTitle title="Why invest with Joan Wagner" subtitle="Your rate on investment:"/>
                    <p className={style['rate']}>8.00%</p>
                    <Grid col={4} px={2} py={2}>
                        <p className={style['green-text']}>About Joan</p>
                        <p>Mom with two kids and a loving husband. Work at a GE Aviation unit as an Engineer.</p>
                    </Grid>
                    <Grid col={4} px={2} py={2}>
                        <p className={style['green-text']}>The neighbourhood</p>
                        <p>
                            The Ultimate Of Luxury Living! Spectacular Ravine Lot! Magnificent Forest Hill Newer Custom Built Home By Lorne Rose Architect And Defined By Stately Style, Impeccable Details, Exquisite Craftsmanship And Luxury Finishes.
                        </p>
                    </Grid>
                    <Grid col={4} px={2} py={2}>
                        <div className={style['video']}>
                            <img src="/assets/img/vidThumbnail.png" alt="thumbnail"/>
                            <p>Backers</p>
                        </div>
                    </Grid>

                </Card>
            </div>
        );
    }
}
