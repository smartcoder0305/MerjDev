import React from 'react';
import PropTypes from 'prop-types';

import { dom } from '../../utils';
import styles from './styles.scss';
import helpers from '../../static/styles/helpers.scss';

import Nav from './Nav';
import DocumentsSection from './DocumentsSection';

export default class Page extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
    this.handleActiveSection = this.handleActiveSection.bind(this);
    this.setActiveSectionID = this.setActiveSectionID.bind(this);
    this.handleAsideFixing = this.handleAsideFixing.bind(this);
    this.setAsideIsFixed = this.setAsideIsFixed.bind(this);
    this.setAsideIsAbsolute = this.setAsideIsAbsolute.bind(this);
    this.onSectionClick = this.onSectionClick.bind(this);
    this.scrollToElement = this.scrollToElement.bind(this);

    this.padding = 16;
    this.headingHeight = 42; // FIXME: self-measured - calculate on the fly
    this.mobile = 799; // mobile screen
    this.desktop = 800; //desktop

    const { sections } = this.props;

    this.state = {
      activeSectionID: sections[0].id,
      asideIsFixed: null,
      asideIsAbsolute: null,
    };
  }

  static propTypes = {
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.node,
        documents: PropTypes.arrayOf(
          PropTypes.shape({ title: PropTypes.string, href: PropTypes.string }),
        ),
      }),
    ).isRequired,
  };

  static defaultProps = {};

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { innerWidth } = window;

    if (innerWidth > this.desktop) {
      // Only fix aside on desktop
      this.handleAsideFixing();
    }

    this.handleActiveSection();
  }

  handleActiveSection() {
    const headerHeight = dom.getElementRect('header').height;
    let topPosition = headerHeight + this.padding * 3;
    const { innerWidth } = window;

    if (innerWidth <= this.mobile) {
      // Below 799px, the nav is fixed below the header so lets account for that too
      // const navHeight = dom.getElementRect('nav-inner').height;
      const elementTitle = document.getElementsByTagName('h2') //the height of the section title
      if(elementTitle){
        let elementTitleHeight = elementTitle[0].clientHeight;
        topPosition += /*navHeight+*/elementTitleHeight;
      }else{
        // topPosition += navHeight;
      }
    }

    const pageSections = [...document.getElementsByClassName('page-section')];
    let activeSectionID = pageSections[0].id;

    pageSections.forEach((section) => {
      const sectionTop = dom.getElementRect(section.id).top;

      // When a section crosses the top position, it is active
      if (sectionTop <= topPosition) {
        activeSectionID = section.id;
      }
    });

    this.setActiveSectionID(activeSectionID);
  }

  setActiveSectionID(activeSectionID) {
    this.setState({
      activeSectionID,
    });
  }

  handleAsideFixing() {
    const pageRect = dom.getElementRect('page');
    const headerHeight = dom.getElementRect('header').height;
    // const navHeight = dom.getElementRect('nav').height;
    const pageTop = pageRect.top;
    const topSpacing = headerHeight + this.padding;
    const pageBottom = pageRect.bottom;

    if (pageTop <= topSpacing) {
    if (pageBottom <= /*navHeight + */topSpacing + this.padding) {
        // Absolute position
        this.setAsideIsAbsolute(this.padding);
        this.setAsideIsFixed(null);
      } else {
        // Fixed position
        this.setAsideIsFixed(topSpacing);
        this.setAsideIsAbsolute(false);
      }
    } else {
      // Static position
      this.setAsideIsFixed(null);
    }
  }

  getElementRect(elementID) {
    const element = document.getElementById(elementID);
    const rect = element && element.getBoundingClientRect();

    return rect;
  }

  setAsideIsFixed(asideIsFixed) {
    this.setState({
      asideIsFixed,
    });
  }

  setAsideIsAbsolute(asideIsAbsolute) {
    this.setState({
      asideIsAbsolute,
    });
  }

  onSectionClick(sectionID) {
    this.scrollToElement(sectionID);
  }

  scrollToElement(elementID) {
    const headerHeight = dom.getElementRect('header').height;
    const elementTop = dom.getElementRect(elementID).top;
    let top = elementTop - headerHeight - this.padding;
    const { innerWidth } = window;
    if (innerWidth <= this.mobile) {
      // Below 799px, the nav is fixed below the header so lets account for that too
      const elementTitle = document.getElementsByTagName('h2'); // the height of the section title
      const navHeight = dom.getElementRect('nav-inner').height;
      if(elementTitle){
        let elementTitleHeight = elementTitle[0].clientHeight
        top -= (navHeight+elementTitleHeight+this.padding);
        
      }else{
        top -= navHeight;
      }
    }

    window.scrollBy({ top, behavior: 'smooth' });
  }

  render() {
    const { activeSectionID, asideIsFixed, asideIsAbsolute } = this.state;
    const { sections } = this.props;
    const fixedClassNames = asideIsFixed ? styles.fixed : null;
    const navClassNames = `${styles.navContainer} ${fixedClassNames}`;
    const documentsClassNames = `${styles.documentsContainer} ${fixedClassNames}`;
    const asideStyles = {
      position: asideIsFixed ? 'fixed' : asideIsAbsolute ? 'absolute' : 'absolute',
      top: asideIsFixed && asideIsFixed,
      bottom: asideIsAbsolute && asideIsAbsolute,
    };
    const activeSection = sections.filter((section) => section.id === activeSectionID)[0];

    const documentsComponent = activeSection.documents.length ? (
      <DocumentsSection title={activeSection.title} documents={activeSection.documents} />
    ) : null;

    return (
      <section id="page" className={styles.Page}>
        {/* <div id="nav" className={navClassNames} style={asideStyles}>
          <Nav
            sections={sections}
            activeSectionID={activeSectionID}
            handleClick={this.onSectionClick}
          />
        </div> */}
        <div className={helpers.paddedInner}>
          <div className={styles.contentContainer}>
            {sections.map((section) => {
              return (
                <div key={section.id} id={section.id} className="page-section">
                  {section.content}
                </div>
              );
            })}
          </div>
        </div>
        <div id="documents" className={documentsClassNames} style={asideStyles}>
          {documentsComponent}
        </div>
      </section>
    );
  }
}
