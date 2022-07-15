import React from 'react';
import Moment from 'react-moment'


import styles from './styles.scss'
import PropTypes from 'prop-types';

const HourItem = ({Name , Day, AllowDateRange, endDay})=>{
    return (
        <tr>
            <td className={styles.markerTimesData}>{Name}</td>
            <td className={styles.marketTimesDate}>

                {
                    AllowDateRange ? 

                    <React.Fragment> 
                        <Moment format='DD'>
                            {Day}
                        </Moment> <span> - </span>
                         <Moment format='DD-MMM'>
                            {endDay}
                        </Moment>

                    </React.Fragment> : <Moment format='DD-MMM'>
                        {Day}
                    </Moment>
                }
                
            </td>
        </tr>
    );
};

HourItem.propTypes = {
    Name: PropTypes.string,
    Day: PropTypes.string,
};
HourItem.defaultProps = {}

export default HourItem;
