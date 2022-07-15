import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.scss';
import Button from '../../../../components/Button';
const QuickLinkItem = ({ imageSrc, title, subtitle, buttonText, href, faqLink }) => {
  return (
    <div className={styles.quickLinksCard}>
      <img src={imageSrc} alt={title} />
      <div className={styles.title}>{title}</div>
  <div className={styles.description}>{subtitle} {faqLink}</div>
      <Button text={buttonText} secondary link={{ href }} />
    </div>
  );
};
QuickLinkItem.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
  href: PropTypes.string,
};
QuickLinkItem.defaultProps = {};
export default QuickLinkItem;