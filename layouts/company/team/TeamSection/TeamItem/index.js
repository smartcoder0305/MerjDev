import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const TeamItem = ({ name, title }) => {
  return (
    <li className={`${styles.teamMemberSingle} animate`}>
      <div className={styles.teamMemberName}>{name}</div>
      <div className={styles.teamMemberTitle}>{title}</div>
    </li>
  );
};

TeamItem.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
};
TeamItem.defaultProps = {};

export default TeamItem;
