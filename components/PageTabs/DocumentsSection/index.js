import React from 'react';
import PropTypes from 'prop-types';

import Desktop from './Desktop';
import Mobile from './Mobile';

const DocumentsSection = ({ title, documents }) => {
  return (
    <div>
      <Desktop title={title} documents={documents} />
      <Mobile title={title} documents={documents} />
    </div>
  );
};

DocumentsSection.propTypes = {
  title: PropTypes.string,
  documents: PropTypes.arrayOf(PropTypes.shape({})),
};
DocumentsSection.defaultProps = {};

export default DocumentsSection;
