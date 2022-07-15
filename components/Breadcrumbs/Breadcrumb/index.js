import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './styles.scss';

const Breadcrumb = ({ title, href, secondary, isLastItem }) => {
  const slashComponent = !isLastItem && (
    <div className={`${styles.text} ${secondary && styles.secondaryText} ${styles.slashText}`}>
      /
    </div>
  );
  const children = (
    <div className={`${styles.container} ${href ? styles.hover : ''}`}>
      <div
        key={title}
        className={`${styles.text} ${secondary && styles.secondaryText} ${isLastItem &&
          styles.lastItemText} `}
      >
        {title}
      </div>

      {slashComponent}
    </div>
  );

  if (href) {
    return <Link href={href}>{children}</Link>;
  }

  return children;
};

Breadcrumb.propTypes = {
  title: PropTypes.string,
  secondary: PropTypes.bool,
  isLastItem: PropTypes.bool,
};
Breadcrumb.defaultProps = {};

export default Breadcrumb;
