import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import styles from './styles.scss';

import Spinner from '../Spinner';

export default class PageLoader extends React.Component {
  constructor(props) {
    super(props);

    this.onRouteChangeStart = this.onRouteChangeStart.bind(this);
    this.onRouteChangeComplete = this.onRouteChangeComplete.bind(this);
    this.setIsLoading = this.setIsLoading.bind(this);

    this.state = {
      isLoading: false,
    };
  }

  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    Router.events.on('routeChangeStart', this.onRouteChangeStart);
    Router.events.on('routeChangeComplete', this.onRouteChangeComplete);
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.onRouteChangeStart);
    Router.events.off('routeChangeComplete', this.onRouteChangeComplete);
  }

  onRouteChangeStart() {
    this.setIsLoading(true);
  }

  onRouteChangeComplete() {
    this.setIsLoading(false);
  }

  setIsLoading(isLoading) {
    this.setState({
      isLoading,
    });
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <div className={`${styles.container} fadeIn`}>
          <Spinner />
        </div>
      );
    }

    return null;
  }
}
