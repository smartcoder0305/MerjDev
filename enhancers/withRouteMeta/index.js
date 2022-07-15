import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

import { getRouteMeta } from '../../utils';

export default (ComposedComponent) => {
  class withRouteMeta extends React.Component {
    constructor(props) {
      super(props);

      this.state = {};
    }

    static propTypes = {
      router: PropTypes.shape({
        pathname: PropTypes.string,
      }),
    };

    static defaultProps = {};

    render() {
      const { router } = this.props;
      const { pathname } = router;
      let routeMeta = getRouteMeta(pathname);
      if(router.route === "/") {
        routeMeta = {
          title: "MERJ Exchange",
          description: "Global securities token and digital asset exchange ecosystem with direct market access for global traders and market intermediaries."
        }
      }
      
      return <ComposedComponent routeMeta={routeMeta} {...this.props} />;
    }
  }

  return withRouter(withRouteMeta);
};
