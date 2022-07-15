import React from 'react';
import PropTypes from 'prop-types';
import { IoMdDownload as DownloadIcon } from 'react-icons/io';

import styles from './styles.scss';

import Button from '../../../../../components/Button';

const DownloadsSection = ({ publications }) => {
  return (
    <div className={styles.container}>
      {publications.map((item) => {
        const { id, url, name } = item;
        const prettyDocumentName = name
          .split('_')
          .map((subString) => {
            // If the subString is not a number, return it
            return !Number(subString) ? subString : '';
          })
          .join(' ');

        return (
          <div key={id}>
            <Button text={prettyDocumentName} ghost dark href={url} newTab>
              <DownloadIcon size={24} className={styles.icon} />
            </Button>
          </div>
        );
      })}
    </div>
  );
};

DownloadsSection.propTypes = {
  publications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      url: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};
DownloadsSection.defaultProps = {};

export default DownloadsSection;
