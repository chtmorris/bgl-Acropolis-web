import _ from 'lodash';
import React from 'react';

let investmentsPendingApproval = [
    {
        id: 1,
        investor: 'Jay Grant',
        email_address: 'jgrant@kobo.com',
        date: new Date(),
        amount: 15000
    }
];

let investmentsApproved = [];

export default class Approval extends React.Component {

    handleApprove(e) {
        let id = _.toInteger(e.currentTarget.getAttribute('data-id'));
        investmentsApproved.push(investmentsPendingApproval.find(investement => investement.id === id));
        investmentsPendingApproval = investmentsPendingApproval.filter((investement) => !(investement.id === id));
        this.render();
    }

    handleDecline(e) {
        let id = _.toInteger(e.currentTarget.getAttribute('data-id'));
        investmentsPendingApproval = investmentsPendingApproval.filter((investement) => !(investement.id === id));
        this.render();
    }

    render() {
        return (
            <section>

                <article>
                    <h3>Summary</h3>
                    <div>
                        <div>A Right Media Mix Can Make The Difference</div>
                    </div>
                </article>

                <article>
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
                                {investmentsPendingApproval.map((investment, i) => (
                                    <tr key={i}>
                                        <td>{investment.investor}</td>
                                        <td>{investment.email_address}</td>
                                        <td></td>
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
                </article>

                <article>
                    <h3>Investors Update</h3>
                </article>

            </section>
        );
    }
}
