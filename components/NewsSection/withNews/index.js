import React from 'react';
import PropTypes from 'prop-types';

import * as APIHelper from '../../../utils/APIHelper';
// Fetches news articles from the api and passes it down to its children as render props.
export default class WithNews extends React.Component {
  constructor(props) {
    super(props);

    this.fetchNews = this.fetchNews.bind(this);
    this.setNews = this.setNews.bind(this);

    this.state = {
      news: null,
    };

    this.state = {};
  }

  static propTypes = {
    category: PropTypes.string,
    startAt: PropTypes.number,
    limitTo: PropTypes.number,
    exclude: PropTypes.string,
    render: PropTypes.func,
  };

  static defaultProps = {};

  componentDidMount() {
    const { category } = this.props;

    this.fetchNews(category);
  }

  componentDidUpdate(prevProps) {
    const { category, startAt, searchQuery } = this.props;
    if (category !== prevProps.category || startAt !== prevProps.startAt || searchQuery !== prevProps.searchQuery) {
      this.fetchNews(category);
    }
  }

  async fetchNews(category) {
    const { startAt, limitTo, exclude, searchQuery } = this.props;
    let query = searchQuery ? searchQuery.replace(/ /g, "+") : "";

    APIHelper.fetchNews(category, startAt, limitTo, exclude, query).then((resolve) => {
      return resolve.json();
    }).then((result) => {
      this.setNews(result);
    })

  }

  setNews(news) {
    this.setState({
      news,
    });
  }

  render() {
    const { news } = this.state;
    const { render } = this.props;

    return render(news);
  }
}
