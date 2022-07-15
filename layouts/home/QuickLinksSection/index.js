import React from 'react';

import QUICK_LINKS from './quickLinks';
import helpers from '../../../static/styles/helpers.scss';
import styles from './styles.scss';

import QuickLinkItem from './QuickLinkItem';

const QuickLinksSection = () => {
  return (
    <section className={`${styles.quickLinksWrapper} animate`}>
      <div className={helpers.paddedInner}>
        <h2 className={helpers.componentHeader}>Quick Links</h2>
        <div className={styles.quickLinksCardsWrapper}>
          {QUICK_LINKS.map((quickLink) => {
            return <QuickLinkItem key={quickLink.title} {...quickLink} />;
          })}
        </div>
      </div>
    </section>
  );
};

QuickLinksSection.propTypes = {};
QuickLinksSection.defaultProps = {};

export default QuickLinksSection;
