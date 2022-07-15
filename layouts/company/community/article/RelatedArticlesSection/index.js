import React from 'react';
import PropTypes from 'prop-types';

import NewsSection from '../../../../../components/NewsSection';

import styles from './styles.scss';

const RelatedArticlesSection = ({ category, currentArticleID }) => {
  return (
    <section className={styles.container}>
      <div className={styles.headingContainer}>
        <h3 className={category === 'buzz' ? styles.buzzH3 : ''}>Related articles</h3>
      </div>

      <NewsSection
        category={category}
        limitTo={4}
        exclude={currentArticleID}
        isArticlePage
        isRelatedArticles
      />
    </section>
  );
};

RelatedArticlesSection.propTypes = {
  category: PropTypes.string,
  currentArticleID: PropTypes.string,
};
RelatedArticlesSection.defaultProps = {};

export default RelatedArticlesSection;
