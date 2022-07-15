import React from 'react';
import Link from 'next/link';
import { MdClose as CloseIcon } from 'react-icons/md';

import styles from './styles.scss';

export default class CookieNotification extends React.Component {
  constructor(props) {
    super(props);

    this.showNotification = this.showNotification.bind(this);
    this.hideNotification = this.hideNotification.bind(this);
    this.setShowNotification = this.setShowNotification.bind(this);

    this.state = {
      showNotification: false,
    };
  }

  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    const hasUserSeenNotification = localStorage.getItem('hasUserSeenNotification');

    if (!hasUserSeenNotification) {
      this.showNotification(true);
    }
  }

  showNotification() {
    this.setShowNotification(true);
  }

  hideNotification() {
    this.setShowNotification(false);

    localStorage.setItem('hasUserSeenNotification', JSON.stringify(true));
  }

  setShowNotification(showNotification) {
    this.setState({
      showNotification,
    });
  }

  render() {
    const { showNotification } = this.state;
    const containerClassNames = `${styles.cookieStrip} ${
      showNotification ? styles.animateIn : styles.animateOut
    }`;

    return (
      <div className={containerClassNames}>
        <div className={styles.left}>
          <img src="/static/images/components/CookieNotification/logo-mark.svg" alt="MERJ Logo" />
          <h4>MERJ uses cookies to improve your experience on the site.</h4>
        </div>

        <div className={styles.right}>
          <p>
            By continuing to use our website, you are accepting our use of cookies. To find out
            more, read our
            <a
              href="https://merj-files.s3-eu-west-1.amazonaws.com/MERJ+Privacy+Policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Privacy Policy
            </a>
            .
          </p>

          <div className={styles.closeButtonWrapper}>
            <button type="button" onClick={this.hideNotification} aria-label="Hide notification">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
