import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

import helpers from '../../../static/styles/helpers.scss';
// FIXME: Should be in config, its not a layout
import CATEGORIES from '../../../layouts/company/news/categories';

import Header from '../../../components/Header';
import Jumbotron from '../../../components/Jumbotron';
import Footer from '../../../components/Footer';

import NewsSection from '../../../layouts/company/news/NewsSection';
import CategoriesSection from '../../../layouts/company/news/CategoriesSection';
import SubscriptionSection from '../../../layouts/company/news/SubscriptionSection';

import withRouteMeta from '../../../enhancers/withRouteMeta';
import styles from './styles.scss';
import Button from '../../../components/Button';

class News extends React.Component {
  constructor(){
    super();
    this.state = {
      query: "",
      searchQuery: ""
    };
  }
  

  searchNews = (query) => {
    if(query === "") {
      this.setState({searchQuery: query, query});
    } else {
      this.setState({query});
    }
  }

  search = () => {
    this.setState({searchQuery: this.state.query});
  }

  componentDidMount() {

    const location = window.location;
    const search = location.search;
    let query = '';
    if(search.includes('?query=')) {
       query = search.replace('?', '').replace('query=', "");
       window.scrollTo({top: 0})
    }
    this.setState({query, searchQuery: query});
  }

  render() {
  const { pathname, query } = this.props.router;
  const { title, description } = this.props.routeMeta;
  const { category } = query;
  let categoryTitle;
  let categoryDescription;

  if (category) {
    const categoryItem = CATEGORIES.filter((item) => item.name === category)[0];

    if(categoryItem) {
      categoryTitle = categoryItem.title;
      categoryDescription = categoryItem.description;
    }
    
  }




  return (
    <div>
      <Jumbotron
        title={categoryTitle || title}
        subtitle={categoryDescription || description}
        secondary
      />

      <main className={helpers.noTopMargin}>
        <div className={helpers.paddedInner}>
          
          <div className={styles.quickSearchContainer}>
            <div className={styles.quickSearchLabel}>LOOKING FOR SOMETHING?</div>
            <div className={styles.quickSearch}><input value={this.state.query} onChange={(e) => {this.searchNews(e.target.value)}}/><div className={styles.searchBtn}><button  onClick={() => {this.search()}}> SEARCH </button></div></div>
          </div>

          <div className={helpers.flexMe}>
            <div className={helpers.flex70}>
              <NewsSection searchQuery={this.state.searchQuery} category={category} />

            </div>
            <div className={helpers.flex30}>
              <CategoriesSection pathname={pathname} />
              <SubscriptionSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
  }
}

News.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string,
    query: PropTypes.shape({
      category: PropTypes.string,
    }),
  }),
  routeMeta: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default withRouteMeta(withRouter(News));
