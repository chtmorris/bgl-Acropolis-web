import _ from 'lodash';
import React from 'react';
import style from './index.css';
import {Card, CardMedia} from 'material-ui/Card';
import {Grid} from 'reflexbox';
import settings from '_app/lib/settings';
import {investmentProposalApprove, investmentProposalDecline, listenToFundingTargetReachedEvent} from '_app/lib/blockchain-api';

export default class Approval extends React.Component {

    componentDidMount(){
      listenToFundingTargetReachedEvent().then(
        res => {
          let _confirm = confirm('Your funding target has been reached!');
          this.props.router.push("/dashboard");
        }
      );
    }

    handleApprove(e) {
        let id = _.toInteger(e.currentTarget.getAttribute('data-id'));
        let investment = this.props.pending.find(investment => investment.id === id);
        investmentProposalApprove(settings.INVESTOR1).then(result => {
            if (this && this.refs && this.refs.toaster) {
              this.refs.toaster.text = "investment approved";
              this.refs.toaster.open();
            }

        }).catch(err => {
          console.log(err);
        });
        this.props.approve(investment);
    }

    handleDecline(e) {
        let id = _.toInteger(e.currentTarget.getAttribute('data-id'));
        let investment = this.props.pending.find(investment => investment.id === id);

        investmentProposalDecline(settings.INVESTOR1).then(result => {
            this.refs.toaster.text = "investment declined";
            this.refs.toaster.open();
        }).catch(err => {
            alert(err);
        });

        this.props.decline(investment);
    }

    render() {
        return (
            <section>
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
                                    <p className={style['green-text']}>30</p>
                                    <p>Backers</p>
                                </Grid>
                                <Grid col={6} px={2} py={2}>
                                    <p className={style['green-text']}>4</p>
                                    <p>Days remaining</p>
                                </Grid>
                                <Grid col={2} px={2} py={2}>
                                    <p className={style['green-text']}>$0</p>
                                    <p>Amount remaining</p>
                                </Grid>
                            </div>
                        </div>
                        <img src="/assets/img/house-top.png" alt="snapshot" className={style.headerImg}/>
                    </CardMedia>

                    <article>
                      <div>
                        <Grid col={12} px={2} py={2}>
                          <h3 className={style.summaryTitle}>Summary</h3>
                          <img src="/assets/img/bigProgBar.png" alt="snapshot" className={style.bigProgBar}/>
                        </Grid>
                      </div>
                      <div>
                        <Grid col={12} px={2} py={2}>
                          <h3>Pending Approvals</h3>
                          <div>
                              <table className="ss-table">
                                  <thead>
                                      <tr>
                                          <th>Investor</th>
                                          <th>Contact Email Address</th>
                                          <th>Date</th>
                                          <th>Approval</th>
                                          <th>Amount</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      {this.props.pending.map((investment, i) => (
                                          <tr key={i}>
                                              <td>{investment.investor}</td>
                                              <td>{investment.email_address}</td>
                                              <td>23rd April 2017</td>
                                              <td className="layout horizontal">
                                                  <paper-fab mini elevation="4" icon="icons:close" data-id={investment.id} onClick={this.handleDecline.bind(this)}/>
                                                  <paper-fab mini elevation="4" icon="icons:check" data-id={investment.id} onClick={this.handleApprove.bind(this)}/>
                                              </td>
                                              <td>{investment.amount}</td>
                                          </tr>
                                      ))}
                                  </tbody>
                              </table>
                          </div>
                        </Grid>
                      </div>
                    </article>

                    <article>
                      <div>
                        <Grid col={12} px={2} py={2}>
                          <h3 className={style.approvedInvestments}>Approved Investments</h3>
                          <table className="ss-table">
                              <thead>
                                  <tr>
                                      <th>Investor</th>
                                      <th>Contact Email Address</th>
                                      <th>Date</th>
                                      <th>Approval</th>
                                      <th>Amount</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {this.props.approved.map((investment, i) => (
                                      <tr key={i}>
                                          <td>{investment.investor}</td>
                                          <td>{investment.email_address}</td>
                                          <td>23rd April 2017</td>
                                          <td className="layout horizontal">
                                              <paper-fab mini elevation="4" icon="icons:close" data-id={investment.id} onClick={this.handleDecline.bind(this)}/>
                                              <paper-fab mini elevation="4" icon="icons:check" data-id={investment.id} onClick={this.handleApprove.bind(this)}/>
                                          </td>
                                          <td>{investment.amount}</td>
                                      </tr>
                                  ))}
                              </tbody>
                          </table>
                        </Grid>
                      </div>
                    </article>
                </Card>

                <div className={style.footerSpace}>
                  .
                </div>

                <paper-toast ref="toaster"/>

            </section>
        );
    }
}
