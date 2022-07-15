import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { MdChevronRight as ChevronRightIcon } from 'react-icons/md';

import { time } from '../../../utils';
import styles from './styles.scss';

const { convertDateStringToPrettyDate } = time;

// FIXME: This component needs refactor (logic changed with designs and is not declarative)
const CommunityNewsItem = ({ article, articleURL, isArticlePage, isRelatedArticle }) => {
  const { category, publishOn, title, _id } = article;
  const categoryComponent = !isArticlePage && (
    <Link href={`/about/news/?category=${category}`}>
      <div className={`${styles.categoryTag} ${category === 'Press' ? styles.buzzCategoryTag : category === 'Blog' && styles.communityCategoryTag}`}>
        {category.toUpperCase()}
      </div>
    </Link>
  );
  const date = convertDateStringToPrettyDate(publishOn);
  const href = {
    pathname: `${articleURL}`,
    query: { _id },
  };
  let readArticleComponent;

  if (articleURL && !isArticlePage) {
    readArticleComponent = (
      <div className={styles.articleSnippetLink}>
        Read Article <ChevronRightIcon className={styles.articleSnippetLinkIcon} />
      </div>
    );
  }

  const children = (
    <div
      className={`${styles.articleSnippetWrapper} ${isArticlePage && styles.articlePageWrapper}`}
    >
      <div className={styles.meta}>
        {categoryComponent}

        <div className={styles.metaDate}>{date}</div>
      </div>

      <h1
        className={`${styles.title} ${isArticlePage &&
          styles.articlePageTitle} ${isRelatedArticle && styles.relatedArticleTitle}`}
      >
        {title}
      </h1>

    </div>
  );

  if (articleURL && href) {
    return <Link href={href}>{children}</Link>;
  }

  return children;
};

CommunityNewsItem.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string,
    category: PropTypes.string,
    publishOn: PropTypes.string,
    title: PropTypes.string,
  }),
  articleURL: PropTypes.string, // if supplied, render a link to the article page
  isArticlePage: PropTypes.bool,
  isRelatedArticle: PropTypes.bool,
};
CommunityNewsItem.defaultProps = {};

export default CommunityNewsItem;
