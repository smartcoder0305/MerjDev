import React from 'react';
import PropTypes from 'prop-types';
import { MdPictureAsPdf as PdfIcon } from 'react-icons/md';

import styles from './styles.scss';

const Desktop = ({ title, documents }) => {
  return (
    <div className={styles.relatedDocsWrapperDesktop}>
      <h4>
        Documents <span>- {title}</span>
      </h4>

      <ul>
        {documents.map((document) => {
          return (
            <li key={document.title}>
              <a href={document.href} target="__blank" rel="noopener noreferrer">
                <PdfIcon />

                <div className={styles.DocName}>{document.title}</div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Desktop.propTypes = {
  title: PropTypes.string,
  documents: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, href: PropTypes.string }),
  ),
};
Desktop.defaultProps = {};

export default Desktop;
