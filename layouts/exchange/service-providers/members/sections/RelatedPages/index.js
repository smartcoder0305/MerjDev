import React from 'react';
import Link from 'next/link';

import styles from './styles.scss';

const RelatedPages = () => {
  return (
    <section className={styles.container}>
      <h2>Related Pages</h2>
      <ul>
        <li>
          <Link href="/exchange/regulation/market-regulation">
            <div className={styles.link}>Market Rules</div>
          </Link>
        </li>
        <li>
          <Link href="/exchange/regulation/member-regulation">
            <div className={styles.link}>Membership Requirements</div>
          </Link>
        </li>
      </ul>
    </section>
  );
};

RelatedPages.propTypes = {};
RelatedPages.defaultProps = {};

export default RelatedPages;
