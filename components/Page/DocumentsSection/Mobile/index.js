import React from 'react';
import PropTypes from 'prop-types';
import { MdPictureAsPdf as PdfIcon, MdChevronRight as ChevronRightIcon } from 'react-icons/md';

import { dom } from '../../../../utils';
import styles from './styles.scss';

export default class Mobile extends React.Component {
  constructor(props) {
    super(props);

    this.handleSetContainerHeight = this.handleSetContainerHeight.bind(this);
    this.setContainerHeight = this.setContainerHeight.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);

    this.state = {
      containerHeight: null,
      showMenu: false,
    };
  }

  static propTypes = {
    title: PropTypes.string,
    documents: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        href: PropTypes.string,
      }),
    ).isRequired,
  };

  static defaultProps = {};

  componentDidMount() {
    // Window/document is not available on first render
    this.handleSetContainerHeight();
  }

  handleSetContainerHeight() {
    const innerHeight = window.innerHeight; // eslint-disable-line
    const headerHeight = dom.getElementRect('header').height || 48; // FIXME: Not working - using default
    const navHeight = dom.getElementRect('nav-inner').height;
    const documentsSectionHeaderHeight = dom.getElementRect('documents-section-header').height;
    const containerHeight = innerHeight - headerHeight - navHeight - documentsSectionHeaderHeight;

    this.setContainerHeight(containerHeight);
  }

  setContainerHeight(containerHeight) {
    this.setState({
      containerHeight,
    });
  }

  toggleMenu() {
    const { showMenu } = this.state;

    this.setState({
      showMenu: !showMenu,
    });
  }

  render() {
    const { containerHeight, showMenu } = this.state;
    const { title, documents } = this.props;
    const iconClassNames = `${styles.icon} ${showMenu ? styles.rotate : null}`;
    const documentsContainerStyles = showMenu
      ? {
          height: containerHeight,
        }
      : null;

    return (
      <div className={styles.relatedDocsWrapperMobile}>
        <button
          id="documents-section-header"
          type="button"
          onClick={this.toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={styles.buttonLabel}>
            Documents <span>- {title}</span>
          </div>

          <ChevronRightIcon className={iconClassNames} />
        </button>

        <ul className={styles.documentsContainer} style={documentsContainerStyles}>
          {documents.map((document) => {
            return (
              <li key={document.title}>
                <a href={document.href} target="__blank" rel="noopener noreferrer">
                  <PdfIcon />

                  {document.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
