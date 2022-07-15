import React from 'react';

import TEAM from './team';
import styles from './styles.scss';
import helpers from '../../../../static/styles/helpers.scss';

import TeamItem from './TeamItem';

const TeamSection = () => {
  return (
    <section className={styles.theTeamWrapper}>
      <div className={helpers.paddedInner}>
        <h4>The Team</h4>
        <ul>
          {TEAM.map((item) => {
            return <TeamItem key={item.name} {...item} />;
          })}
        </ul>
      </div>
    </section>
  );
};

TeamSection.propTypes = {};
TeamSection.defaultProps = {};

export default TeamSection;
