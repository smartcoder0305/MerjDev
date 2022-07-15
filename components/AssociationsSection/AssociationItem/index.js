import React from 'react';
import PropTypes from 'prop-types';

const AssociationItem = ({ src, alt, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} />
    </a>
  );
};

AssociationItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  href: PropTypes.string,
};
AssociationItem.defaultProps = {};

export default AssociationItem;
