import React from 'react';
import Router from 'next/router';
import styles from './styles.scss';
import helpers from '../../../static/styles/helpers.scss';

import NewsSection from '../../../components/NewsSection';
import Button from '../../../components/Button';

export class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};


  goToNews = ()=>{
    Router.replace('/about/news');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.scrollTop = 0;
  }

  render() {
    return (
      <section className={`${styles.homePageNewsWrapper} animate`}>
        <div className={helpers.paddedInner}>
          <div className={styles.inner}>
            <div className={styles.homePageNewsBuzz}>
              <div className={helpers.componentHeader}>MERJ Press</div>

              <NewsSection category="Press" limitTo={3} />
            </div>

            <div className={styles.homePageNewsGeneral}>
              <div className={helpers.componentHeader}>Market News</div>

              <NewsSection category="News" limitTo={3} />
            </div>
          </div>
            <div className={styles.bottomLine} />
            <div className={styles.centerButton}>
              <Button  primary text="view all" handleClick={this.goToNews} />
            </div>
        </div>
      </section>
    );
  }
}

export default News;
