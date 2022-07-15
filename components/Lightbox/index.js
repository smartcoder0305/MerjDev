import React from 'react';
import PropTypes from 'prop-types';
import { MdClose as CloseIcon } from 'react-icons/md';

import styles from './styles.scss';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.onClose = this.onClose.bind(this);
    this.setFadeOut = this.setFadeOut.bind(this);

    this.state = {
      fadeOut: false,
    };
  }

  static propTypes = {
    handleClose: PropTypes.func.isRequired,
    children: PropTypes.node,
  };

  static defaultProps = {};

  onClose() {
    const { handleClose } = this.props;

    this.setFadeOut(true);

    setTimeout(() => handleClose(), 500); // NOTE: Dependent on fade-out animation timing
  }

  setFadeOut(fadeOut) {
    this.setState({
      fadeOut,
    });
  }

  render() {
    const { fadeOut } = this.state;
    const { children } = this.props;

    return (
      <div className={`${styles.container} ${fadeOut && styles.fadeOut}`}>
        {children}

        <div className={styles.closeIconContainer}>
          <button
            type="button"
            onClick={this.onClose}
            className={styles.closeIcon}
            aria-label="Close"
          >
            <CloseIcon size={24} color="white" />
          </button>
        </div>
      </div>
    );
  }
}
