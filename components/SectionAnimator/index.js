import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

export default class SectionAnimator extends React.Component {
  constructor(props) {
    super(props);

    this.onRouteChangeComplete = this.onRouteChangeComplete.bind(this);
    this.getAndSetSections = this.getAndSetSections.bind(this);
    this.getSections = this.getSections.bind(this);
    this.setSections = this.setSections.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleSections = this.handleSections.bind(this);

    this.targetClassName = 'animate';
    this.triggerBottom = 100; 

    this.state = {
      sections: null,
    };
  }

  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    Router.events.on('routeChangeComplete', this.onRouteChangeComplete);
    window.addEventListener('scroll', this.handleScroll);
    this.getAndSetSections();
  }

  componentWillUnmount() {
    Router.events.off('routeChangeComplete', this.onRouteChangeComplete);
    window.removeEventListener('scroll', this.handleScroll);
  }

  onRouteChangeComplete() {
    this.getAndSetSections();
  }

  getAndSetSections() {
    const sections = this.getSections();
    this.setSections(sections, this.handleSections);
  }

  getSections() {
    // Get the animatable sections in the dom
    const pageSections = [...document.getElementsByClassName(this.targetClassName)];

    return pageSections;
  }

  setSections(sections, cb) {
    this.setState(
      {
        sections,
      },
      cb,
    );
  }

  handleScroll() {
    const { sections } = this.state;

    if (sections.length) {
      // Only handle scrolling if we found sections on mount
      this.handleSections();
    }
  }

  handleSections() {
    const { sections } = this.state;

    sections.forEach((section) => {
      const windowHeight = window.innerHeight;
      const { top } = section.getBoundingClientRect();
      const isActive = section.className.indexOf('active') > -1;

      if (!isActive && top <= windowHeight - this.triggerBottom) {
        // Scrolling downwards and section is in view
        section.classList.add('active');
      }
    });
  }

  render() {
    return null;
  }
}
