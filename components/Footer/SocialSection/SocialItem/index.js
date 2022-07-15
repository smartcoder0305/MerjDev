import React from 'react';
import PropTypes from 'prop-types';

import helpers from '../../../../static/styles/helpers.scss';

const SocialItem = ({ src, alt, href }) => {
  return (
    <a className={helpers.growonHover} href={href} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} />
    </a>
  );
};

SocialItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  href: PropTypes.string,
};
SocialItem.defaultProps = {};

export default SocialItem;
