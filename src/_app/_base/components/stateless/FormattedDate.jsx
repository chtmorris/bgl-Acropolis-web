import React from 'react';
import moment from 'moment';

const TIME_FORMAT = 'HH:MM:ss';
const DATE_FORMAT = 'YYYY-MM-DD';

const FormattedDate = (props) => {
    let date = props.date;
    let styles = {
        dateStyle: props.dateStyle || {},
        timeStyle: props.timeStyle || {
            fontSize: '0.85em'
        }
    };
    //
    if (date === null) {
        return null;
    } else {
        try {
            let _date = moment(new Date(date)).format(DATE_FORMAT);
            let _time = moment(new Date(date)).format(TIME_FORMAT);
            //
            return (
                <span style={styles.dateStyle}>{_date}&nbsp;
                    <span style={styles.timeStyle}>{_time}</span>
                </span>
            );
        } catch (err) {
            throw new Error('Unable to create FormattedDate element');
        }
    }
};

export default FormattedDate;
