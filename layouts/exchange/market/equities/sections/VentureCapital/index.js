import React from 'react';

import helpers from '../../../../../../static/styles/helpers.scss';
import styles from '../styles.scss';
const VentureCapitalBoard = () => {
  return (
    <section >
      <h2>Venture Capital Board</h2>
      <p>
        The VCAP Board is aimed at companies that are considered to be a start-up company with little or no
        operating history and have the potential for high growth. All funds relating to an IPO or
        placement must be held in an escrow or trust account, and outward transactions must obtain
        approval of both the issuer and its Sponsor Advisor according to the funding milestone
        timetable.
      </p>
      <div className={styles.tableContainer}>

      <table className={styles.marketEquitiesTables}>
        <thead>
          <tr>
            <td>Requirement</td>
            <td>Venture Capital Board</td>
            <td>Small and Medium Board</td>
            <td>Main Board</td>
            <td>SPACS</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <strong>Minimum Public Shareholders</strong>
            </td>
            <td>A minimum of 10% by a minimum of 5 persons.</td>
            <td>A minimum of 15% by a minimum of 20 persons.</td>
            <td>A minimum of 25% by a minimum of 60 persons.</td>
            <td>A minimum of between 25 and 100 shareholders dependent on capital raised.</td>
          </tr>
          <tr>
            <td>
              <strong>Lock-in Period</strong>
            </td>
            <td>Funding Milestones based</td>
            <td>Six months</td>
            <td>No requirements</td>
            <td>Until qualifying acquisition</td>
          </tr>
          <tr>
            <td>
              <strong>Financial Statements</strong>
            </td>
            <td>No history required, but 5 years financial projections required.</td>
            <td>Audited financial statements from most recent year. </td>
            <td>Audited financial statements from most recent 3 years. </td>
            <td>No Profit history.</td>
          </tr>
        </tbody>
      </table>
      </div>
    </section>
  );
};

VentureCapitalBoard.propTypes = {};
VentureCapitalBoard.defaultProps = {};

export default VentureCapitalBoard;
