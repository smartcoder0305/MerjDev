import React from 'react';

import NonTradingDays from '../../../../components/NonTradingDaysSection';
import Spinner from '../../../../components/Spinner';

import HourItem from './MarketHour';
import styles from '../../styles.scss'
import helpers from '../../../../static/styles/helpers.scss'

const MarketHoursSection = () =>{

    return (
        <section className={styles.container}>
            <div className={styles.marketWrapper}>
                <h1>Market Hours</h1>
                <div>
                    <p>Monday to Friday: 10:00am to 06:00am (GMT +4)</p>
                </div>
                <div>
                    <h3>Non-Trading Days</h3>
                    <p>
                    MERJ Exchange would like to inform Equities Market Participants that the Non-Trading Days for {new Date().getFullYear()} will be as follows:
                    </p>
                </div>
                    <table className={styles.marketTimesTable}>{
                        <NonTradingDays render={(days) =>{
                            
                            if(days){
                                return(
                                    <tbody className = {styles.listStyle}>
                                        {
                                            days.map((day)=>{
                                                return (<HourItem key={day.id} Name={day.Name} Day={day.Day} AllowDateRange={day.AllowDateRange} endDay={day.EndDay}/>);
                                            })
                                        }
                                    </tbody>
                                );
                            }

                            return(
                                <div>
                                    <Spinner />
                                </div>
                            )
                        }} />
                    }</table>
                     <div className={styles.marketclosingtime}>*Market closes at 12pm</div>
            <p>The operations of MERJ Clearing & Settlement Ltd and MERJ Depository and Registry Ltd will also be closed on the Non-Trading Days.</p>
            </div>
           
        </section>
    );

};
MarketHoursSection.propTypes = {};
MarketHoursSection.defaultProps = {};

export default MarketHoursSection;