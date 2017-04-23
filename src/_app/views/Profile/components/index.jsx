import React from 'react';
import style from './index.css';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import {Grid} from 'reflexbox';
import TextField from 'material-ui/TextField';

import StatelessLoading from '_app/_base/components/stateless/Loading';
import settings from '_app/lib/settings';
import {contractDeployAssetLoan, investmentProposalAdd, listenToFundingTargetReachedEvent} from '_app/lib/blockchain-api';

const fieldStyle = {
    underlineStyle: {
        color: '#7ED321'
    }
};

export default class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contractAddressCreated: false,
            buttonText: "Invest with Joan",
            buttonStyle: "mdc-button mdc-button--primary"
        };
    }

    componentDidMount() {
        if (window.localStorage.getItem('contract-address')) {
            this.setState({contractAddressCreated: true});
        } else {
            contractDeployAssetLoan(settings.ASSET_LOAN, 'assetLoan', null, null, (e, contract, id) => {
                if (!e) {
                    if (!contract.address) {
                        console.log("Contract transaction sent: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
                    } else {
                        console.log("err: " + e)
                        console.log('contract address...')
                        window.localStorage.setItem('contract-address', contract.address);
                        console.log('contract address stored');
                        this.setState({contractAddressCreated: true});
                        listenToFundingTargetReachedEvent();
                    }
                };
            });
        }
    }

    addInvestment() {
        this.setState({buttonText: "Pending", buttonStyle: "orange"});

        let investment_amount = parseInt(this.refs.investment_value.getValue(), 10);

        investmentProposalAdd(settings.INVESTOR1, investment_amount).then(res => {

            // todo: future reference
            let _amount = res.args.amount.c[0];
            let _borrower = res.args.borrower;
            let _investor = res.args.investor;

            this.refs.toaster.text = "investment added";
            this.refs.toaster.open();

            this.setState({buttonText: "Submitted!", buttonStyle: "mdc-button mdc-button--primary"});

        }).catch(err => {
            console.error(err);
        });

    }

    render() {
        return (
            <section className="fit layout horizontal">

                {!this.state.contractAddressCreated
                    ? (<StatelessLoading/>)
                    : (
                        <Card>

                            <CardMedia>
                                <div className={style['profile-box']}>
                                    <div>
                                        <Grid col={4} px={2} py={2}>
                                            <img src="/assets/img/Joan.png" alt="pic"/>
                                        </Grid>
                                        <Grid col={8} px={2} py={2}>
                                            <h2>Joan Wagner</h2>
                                            <p className={style['price']}>$1,200,000.00</p>
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
                                        <button className={this.state.buttonStyle} onClick={this.addInvestment.bind(this)}>
                                            {this.state.buttonText}
                                        </button>
                                    </div>

                                </div>
                                <img src="/assets/img/house.png" alt="snapshot" className={style.houseImg}/>
                            </CardMedia>

                            <CardTitle title="Why invest with Joan Wagner" subtitle="Your rate on investment:"/>
                            <p className={style['rate']}>2.00%</p>
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
                                </div>
                            </Grid>

                        </Card>
                    )}

                <paper-toast ref="toaster"/>
            </section>
        );
    }
}
