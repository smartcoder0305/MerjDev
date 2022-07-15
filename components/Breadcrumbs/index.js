import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

import styles from './styles.scss';

import Breadcrumb from './Breadcrumb';

const Breadcrumbs = ({ router, secondary, additionalRoutes }) => {
  const { pathname } = router;

  // Split pathname by /
  // Filter out empty strings
  // Map to objects with title and href (as needed)
  const routes = pathname
    .split('/')
    .filter((route) => route)
    .map((route) => {
      const title = route
        .split('-')
        .join(' ')
        .toUpperCase();
      let href;

      if (route === 'news') {
        href = '/about/news';
      }

      return {
        title,
        href,
      };
    });

  if (additionalRoutes) {
    // Insert the additional routes before the last item (the last item only indicates the current page)
    routes.splice(routes.length - 1, 0, ...additionalRoutes);
  }

  return (
    <div className={styles.container}>
      {routes.map((route, index) => {
        const { title, href } = route;
        const isLastItem = index === routes.length - 1;

        return (
          <Breadcrumb
            key={title}
            title={title}
            href={href}
            secondary={secondary}
            isLastItem={isLastItem}
          />
        );
      })}
    </div>
  );
};

Breadcrumbs.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  secondary: PropTypes.bool,
  additionalRoutes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
};
Breadcrumbs.defaultProps = {};

export { Breadcrumb };

export default withRouter(Breadcrumbs);
