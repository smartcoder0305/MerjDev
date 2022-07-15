import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

import WithNews from './withNews';
import CommunityNewsItem from './newsItem';
import Spinner from '../Spinner';

const CommunitySection = ({ category, startAt, limitTo, exclude, isArticlePage, isRelatedArticles, searchQuery }) => {
  const articleURL = '/about/news/article';

  return (
    <WithNews
      category={category}
      startAt={startAt}
      limitTo={limitTo}
      exclude={exclude}
      searchQuery={searchQuery}
      render={(news) => {
        if (news) {
          return (
            <div >
              {
                news.length > 0 ? news.map((item) => {
                return (
                  <div key={item.id} className={styles.communityPost}>
                    <CommunityNewsItem
                      article={item}
                      articleURL={articleURL}
                      isArticlePage={isArticlePage}
                      isRelatedArticle={isRelatedArticles}
                    />
                  </div>
                );
              }) : (
                <div className={isRelatedArticles && styles.itemContainer}>
                  <div className={styles.emptyFeed}>
                    There are no community posts.
                  </div>
                </div>
              )
              }
            </div>
          );
        }

        return (
          <div>
            <Spinner />
          </div>
        );
      }}
    />
  );
};

CommunitySection.propTypes = {
  category: PropTypes.string,
  startAt: PropTypes.number,
  limitTo: PropTypes.number,
  exclude: PropTypes.string, // article id
  isArticlePage: PropTypes.bool,
  isRelatedArticles: PropTypes.bool,
};
CommunitySection.defaultProps = {};

export default CommunitySection;
