import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';

import ComponentSearch from '_app/_base/components/Search';
import FormattedDate from '_app/_base/components/stateless/FormattedDate';

export default class Search extends React.Component {
    handleSelect(context, rowIndex) {
        let ticket = this.props.results[rowIndex];
        this.props.router.push(`/tickets/${ticket.ticket_no}`);
    }

    render() {
        let tickets = this.props.results || [];
        let tableprops = {
            width: 0,
            height: 0,
            rowHeight: 50,
            headerHeight: 50
        };
        return (
            <ComponentSearch loading={this.props.loading} fetch={this.props.fetch} fetchMore={this.props.fetchMore}>
                <Table {...tableprops} rowsCount={tickets.length} onRowClick={this.handleSelect.bind(this)}>

                    <Column fixed={true} header={(
                        <Cell>Reference No</Cell>
                    )} cell={props => (
                        <Cell>{tickets[props.rowIndex].ticket_no}</Cell>
                    )} width={150}/>

                    <Column fixed={true} header={(
                        <Cell>Created Date</Cell>
                    )} cell={props => (
                        <Cell>
                            <FormattedDate date={tickets[props.rowIndex].created_at} timeStyle={{
                                display: 'none'
                            }}/>
                        </Cell>
                    )} width={150}/>

                    <Column fixed={true} header={(
                        <Cell>Status</Cell>
                    )} cell={props => (
                        <Cell>{tickets[props.rowIndex].status}</Cell>
                    )} width={150}/>

                    <Column header={(
                        <Cell>Customer Name</Cell>
                    )} cell={props => (
                        <Cell>{tickets[props.rowIndex].first_name} {tickets[props.rowIndex].last_name}</Cell>
                    )} width={200}/>

                    <Column header={(
                        <Cell>Customer Email Address</Cell>
                    )} cell={props => (
                        <Cell>{tickets[props.rowIndex].email_address}</Cell>
                    )} width={250}/>

                    <Column header={(
                        <Cell>City</Cell>
                    )} cell={props => (
                        <Cell>{tickets[props.rowIndex].city}</Cell>
                    )} width={200}/>

                    <Column header={(
                        <Cell>Country</Cell>
                    )} cell={props => (
                        <Cell>{tickets[props.rowIndex].country}</Cell>
                    )} width={200}/>

                </Table>
            </ComponentSearch>
        );
    }
}
