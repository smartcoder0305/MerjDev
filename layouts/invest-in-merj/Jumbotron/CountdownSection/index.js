import React from 'react';

import { app } from '../../../../config';
import styles from './styles.scss';

const CountdownSection = () => {
  // FIXME: Should be a util
  const { presaleDate } = app;
  const date = new Date(presaleDate);
  const dateTime = date.getTime();
  const now = new Date();
  const nowTime = now.getTime();
  const timeLeft = dateTime - nowTime;
  const oneMinute = 1000 * 60; // ms * sec
  const oneHour = oneMinute * 60; // oneMinute * min
  const oneDay = oneHour * 24; // oneHour * hr
  const daysLeft = timeLeft / oneDay;
  const roundedDaysLeft = Math.floor(daysLeft);
  const leftOverDays = daysLeft - roundedDaysLeft;
  let leftOverTime = leftOverDays * oneDay;
  const hoursLeft = leftOverTime / oneHour;
  const roundedHoursLeft = Math.floor(hoursLeft);
  const leftOverHours = hoursLeft - roundedHoursLeft;
  leftOverTime = leftOverHours * oneHour;
  const minutesLeft = leftOverTime / oneMinute;
  const roundedMinutesLeft = Math.floor(minutesLeft);

  return (
    <div className={styles.countdownInner}>
      <div className={styles.title}>Presale Starts In</div>

      <div className={styles.countdownBoxes}>
        <div className={styles.Days}>
          <div className={styles.label}>Days</div>
          <div className={styles.count}>{roundedDaysLeft}</div>
        </div>
        <div className={styles.Hours}>
          <div className={styles.label}>Hours</div>
          <div className={styles.count}>{roundedHoursLeft}</div>
        </div>
        <div className={styles.Minutes}>
          <div className={styles.label}>Minutes</div>
          <div className={styles.count}>{roundedMinutesLeft}</div>
        </div>
      </div>
    </div>
  );
};

CountdownSection.propTypes = {};
CountdownSection.defaultProps = {};

export default CountdownSection;
