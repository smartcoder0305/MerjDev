import React from 'react';
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  FacebookShareCount,
  LinkedinShareCount,
} from 'react-share';

import { SEO } from '../../../../../config';
import styles from './styles.scss';

const HASH_TAGS = [
  '#merjexchange',
  '#digitalassets',
  '#securitytokens',
  '#stockmarket',
  '#digitalsecurities',
];

// Note: Twitter share count is not available
const SocialSection = ({ url, title }) => {
  return (
    <section className={styles.container}>
      <div className={styles.shareCount}>
        <FacebookShareCount url={url}>
          {(facebookShareCount) => (
            <LinkedinShareCount url={url}>
              {(linkedinShareCount) => (
                <div>
                  <span>{facebookShareCount + linkedinShareCount}</span> Shares
                </div>
              )}
            </LinkedinShareCount>
          )}
        </FacebookShareCount>
      </div>

      <div className={styles.socialButton}>
        <FacebookShareButton url={url} quote={title} hashtag={HASH_TAGS[0]}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>

      <div className={styles.socialButton}>
        <TwitterShareButton url={url} title={title} via={SEO.twitter.handle} hashtags={HASH_TAGS}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>

      <div className={styles.socialButton}>
        <LinkedinShareButton url={url} title={title} description={SEO.description}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    </section>
  );
};

SocialSection.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};
SocialSection.defaultProps = {};

export default SocialSection;
