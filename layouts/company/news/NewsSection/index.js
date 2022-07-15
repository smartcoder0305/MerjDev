import React from 'react';
import PropTypes from 'prop-types';
import 'isomorphic-unfetch';

import * as APIHelper from '../../../../utils/APIHelper';
import NewsSection from '../../../../components/NewsSection';
import Pagination from './Pagination';

export default class News extends React.Component {
  constructor(props) {
    super(props);

    this.fetchNewsArticlesCount = this.fetchNewsArticlesCount.bind(this);
    this.setNewsArticlesCount = this.setNewsArticlesCount.bind(this);
    this.onPaginationClick = this.onPaginationClick.bind(this);
    this.setCurrentPage = this.setCurrentPage.bind(this);

    this.newsArticlesPerPage = 10;

    this.state = {
      newsArticlesCount: null,
      currentPage: 1,
    };
  }

  static propTypes = {
    category: PropTypes.string,
  };

  static defaultProps = {};

  componentDidMount() {
    const { category } = this.props;

    this.fetchNewsArticlesCount(category);
  }

  componentDidUpdate(prevProps) {
    const { category, searchQuery } = this.props;
    const prevCategory = prevProps.category;

    if (category !== prevCategory || searchQuery !== prevProps.searchQuery) {
      this.fetchNewsArticlesCount(category);
    }
  }

  async fetchNewsArticlesCount(category) {
    APIHelper.fetchNewsArticlesCount(category, this.props.searchQuery).then((resolve) => {
      return resolve.json();
    }).then((result) => {
      this.setNewsArticlesCount(result);
    })
  }

  setNewsArticlesCount(newsArticlesCount) {
    this.setState({
      newsArticlesCount,
    });
  }

  onPaginationClick(page) {
    this.setCurrentPage(page);

    window.scrollTo(0, 0); // scroll to top of page
  }

  setCurrentPage(currentPage) {
    this.setState({
      currentPage,
    });
  }

  render() {
    const { newsArticlesCount, currentPage } = this.state;
    const { category } = this.props;
    let pageCount;
    let paginationComponent;

    // When we have the news articles count
    if (newsArticlesCount) {
      pageCount = Math.ceil(newsArticlesCount / this.newsArticlesPerPage);
      // Only display it if there are more than this.newsArticlesPerPage
      if (newsArticlesCount > this.newsArticlesPerPage) {
        paginationComponent = (
          <Pagination
            pageCount={pageCount}
            currentPage={currentPage}
            handleClick={this.onPaginationClick}
          />
        );
      }
    }

    const startAt = pageCount > 0 ? this.newsArticlesPerPage * (currentPage - 1) : 0;

    return (
      <div className="animate">
        <NewsSection searchQuery={this.props.searchQuery} category={category} startAt={startAt} limitTo={this.newsArticlesPerPage} />

        {paginationComponent}
      </div>
    );
  }
}
