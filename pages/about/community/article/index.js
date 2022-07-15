import React from 'react';
import PropTypes from 'prop-types';
import 'isomorphic-unfetch';
import { withRouter } from 'next/router';

import * as APIHelper from '../../../../utils/APIHelper';
import helpers from '../../../../static/styles/helpers.scss';

import Header from '../../../../components/Header';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import NewsItem from '../../../../components/NewsItem';
import SpringboardsSection from '../../../../components/SpringboardsSection';
import Footer from '../../../../components/Footer';

import DownloadsSection from '../../../../layouts/company/news/article/DownloadsSection';
import SocialSection from '../../../../layouts/company/news/article/SocialSection';
import RelatedArticlesSection from '../../../../layouts/company/news/article/RelatedArticlesSection';
import SubscriptionSection from '../../../../layouts/company/news/SubscriptionSection';
const ReactMarkdown = require('react-markdown/with-html');


export class Article extends React.Component {
  constructor(props) {
    super(props);

    this.createMarkup = this.createMarkup.bind(this);

    this.state = {
      article: {}
    };
  }

  static propTypes = {
    article: PropTypes.shape({
      content: PropTypes.string,
    }),
    router: PropTypes.shape({
      pathname: PropTypes.string,
      query: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  };

  static defaultProps = {};

  componentDidMount() {
    APIHelper.getArticle(this.props.router.query._id).then((resolve) => {
      return resolve.json();
    }).then((result) => {
      const article = result[0];
      APIHelper.GetConfig().then((resolve) => {
        this.setState({ article, strapiUrl: resolve.strapiUrl });
      })
    })

  }

  createMarkup(html) {
    return {
      __html: html,
    };
  }

  render() {
    const { router } = this.props;
    const { article } = this.state;
    const { pathname, query } = router;
    const url = `${this.state.strapiUrl}${pathname}/?_id=${query._id}`;


    if (article) {
      // For export
      const { content, publication } = article;
      const downloadsComponent = publication && publication.length ? (
        <DownloadsSection publications={publication} />
      ) : null;

      return (
          <main>
            <div className={helpers.paddedInner}>
              <div className={helpers.flexMe}>
                <div className={helpers.flex70}>
                  <Breadcrumbs
                    secondary
                    additionalRoutes={[
                      {
                        title: article.category,
                        href: `/about/news/?category=${article.category}`,
                      },
                    ]}
                  />

                  <NewsItem article={article} isArticlePage />

                  <div
                    className={helpers.newsArticleContent}
                  > <ReactMarkdown escapeHtml={false} source={content} /> </div>


                  {downloadsComponent}

                  <SocialSection url={url} title={article.title} />

                  <RelatedArticlesSection
                    category={article.category}
                    currentArticleID={article.id}
                  />
                </div>

                <div className={helpers.flex30}>
                  {/* <SubscriptionSection /> */}
                </div>
              </div>
            </div>

            <SpringboardsSection />
          </main>
      );
    }

    return null;
  }
}

export default withRouter(Article);
