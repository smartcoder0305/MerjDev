import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
// import { MdChevronRight as ChevronRightIcon } from 'react-icons/md';

import styles from './styles.scss';

import Spinner from '../../../../../../components/Spinner';

const ExchangeTable = ({ title, headers, data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h3 className={styles.headerText}>{title}</h3>
        <div className={styles.legendContainer}>
          <img src="/static/images/token-security.svg" alt="Token Security" />
          <small className={styles.legendText}>Security Token</small>
        </div>
      </div>
      

      <table className={`${styles.ExchangeTable}`}>
        <thead>
          <tr>
            {headers.map((column) => {
              if(column.name) {
                return <td key={column.name}>{column.name}</td>;
              }
            })}
          </tr>
        </thead>

        <tbody >
          {data ? (
            data.map((row) => {
              const symbol = row[1].value;

              return (
                <tr key={symbol}>
                  {row.map((column) => {
                    const columnID = `${symbol}-${column.name}`;
                    let className = '';
                    let tokenSecurityComponent;
                    let hasColumn = false;
                    const linkComponent = column.href ? (
                      <a href={column.href}>{column.value}</a>
                    ) :  (
                      column.value === 'true'? null: column.value
                    );

                    if(column.value && column.name) {
                      hasColumn = true;
                    }                    
                    // let priceChangeComponent;

                    if (column.id === 'securityToken' ) {
                      className = column.isTokenSecurity ? styles.tokenSecurityColumn : styles.hide;

                      tokenSecurityComponent = column.isTokenSecurity ? (
                        <img src="/static/images/token-security.svg" alt="Token Security" />
                      ) : null;
                    }

                    // if (column.id === 'price') {
                    //   className = styles.priceColumn;
                    //   const rotateClassName =
                    //     column.changeDirection === 'positive'
                    //       ? styles.priceIconUp
                    //       : column.changeDirection === 'negative'
                    //       ? styles.priceIconDown
                    //       : null;
                    //   const classNames = `${styles.priceIcon} ${rotateClassName}`;

                    //   priceChangeComponent =
                    //     column.name === 'Price' && rotateClassName ? (
                    //       <ChevronRightIcon className={classNames} />
                    //     ) : (
                    //       <span>- {' -'}</span>
                    //     );
                    // }

                    return (
                        hasColumn ?
                        <td key={columnID} className={className}>
                        {tokenSecurityComponent}
                        
                        {linkComponent}
                        
                        {/* {priceChangeComponent} */}
                        </td> : null
                      
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <Spinner />
          )}
        </tbody>
      </table>

      <div className={styles.footerContainer}>
        <small className={styles.footerText}>
          *Prices displayed are prior day closing prices. Please{' '}
          <Link href="/enquiries/general/enquiries">
            <a>Contact a Member</a> 
          </Link>{' '}
          for live prices and quotations.
          <hr style={{"border": "none", "marginTop": "0px"}}/>
          **The Market Cap does not include 10 million shares of unlisted Common Stock.{' '}
        </small>
        <div className={styles.legendContainer}>
          <img src="/static/images/token-security.svg" alt="Token Security" />

          <small className={styles.legendText}>Security Token</small>
        </div>    
      </div>
    </div>
  );
};

ExchangeTable.propTypes = {
  title: PropTypes.string,
  headers: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired })),
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string,
        href: PropTypes.string,
        changeDirection: PropTypes.oneOf(['negative', 'neutral', 'positive']),
      }),
    ),
  ).isRequired,
};
ExchangeTable.defaultProps = {};

export default ExchangeTable;
