import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { withRouter } from 'next/router';

import { SEO } from '../../config';

import withRouteMeta from '../../enhancers/withRouteMeta';

const HeadComponent = ({ routeMeta, router }) => {
  const { title, description } = routeMeta;
  const { pathname } = router;

  let pageTitle = title || SEO.title;
  let pageDescription = description || SEO.description;

  // FIXME: This is a very last minute change that could be fixed by using the nav routes in config
  if (pathname === '/invest-in-merj') {
    pageTitle = 'NEXT GENERATION GLOBAL FINANCIAL MARKET ECOSYSTEM';
    pageDescription =
      'Merging traditional securities and market processes with innovative products and processes brought by blockchain technology';
  }



  const newRelicScript = () => {
    const scriptTag = React.createElement('script', {src: '/static/newrelic.js'});
    return scriptTag;
  }

  const tagManagerScript = () => {
    const scriptTag = React.createElement('script', {src: '/static/tagmanager.js'});
    return scriptTag;
   
  }


  return (
    <Head>
      <title key="title">{pageTitle}</title>

      <meta key="description" name="Description" content={pageDescription} />

      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1.0"
      />
      <link
        key="apple-icon"
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/icons/apple-touch-icon.png"
      />
      <link
        key="favicon-lg"
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/icons/favicon-32x32.png"
      />
      <link
        key="favicon-sm"
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/icons/favicon-16x16.png"
      />
      <link
        key="safari-icon"
        rel="mask-icon"
        href="/static/icons/safari-pinned-tab.svg"
        color="#161723"
      />

      <meta key="ms-tile-color" name="msapplication-TileColor" content="#da532c" />
      <meta key="theme-color" name="theme-color" content="#161723" />

      <link
        key="manifest"
        type="application/manifest+json"
        rel="manifest"
        href="/static/manifest.json"
      />

      <meta key="og:url" property="og:url" content={SEO.openGraph.url} />

      <meta key="og:type" property="og:type" content={SEO.openGraph.type} />

      <meta key="og:title" property="og:title" content={SEO.openGraph.title} />

      <meta key="og:description" property="og:description" content={SEO.openGraph.description} />

      <meta key="og:image" property="og:image" content={SEO.openGraph.image} />

      <meta key="og:image:width" property="og:image:width" content={SEO.openGraph.imageWidth} />

      <meta key="og:image:height" property="og:image:height" content={SEO.openGraph.imageHeight} />

      <meta key="og:locale" property="og:locale" content={SEO.openGraph.locale} />

      <meta key="twitter:card" name="twitter:card" content={SEO.twitter.cardType} />

      <meta key="twitter:site" name="twitter:site" content={SEO.twitter.handle} />
      

      {
        newRelicScript()
      }

<script src="https://my.fundamerica.com/widgets/invest_now.min.js" id="fa-invest-now-launcher"></script>

    
      {
        tagManagerScript()
      }
    </Head>
  );
};

HeadComponent.propTypes = {
  routeMeta: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  router: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};
HeadComponent.defaultProps = {};

export default withRouteMeta(withRouter(HeadComponent));
