import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { MdArrowDropDown as DropDownIcon } from 'react-icons/md';

import CATEGORIES from '../categories';
import helpers from '../../../../static/styles/helpers.scss';
import styles from './styles.scss';
import Button from '../../../../components/Button';
import Router from 'next/router';

export default class CategoriesSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {
    pathname: PropTypes.string,
  };

  static defaultProps = {};

  goToCommunity = () => {
    Router.replace('/about/community')
  }

  render() {
    const { pathname } = this.props;
    return (
      <section className={`${styles.categoriesSection} animate`}>
        <h2 className={helpers.componentHeader}>Categories</h2>

        <Link href={`/about/news`}>
          <div className={styles.categoryLink}>
            <div className={styles.label}>All news</div>
            <DropDownIcon className={styles.rightArrow} />
          </div>
        </Link>

        {CATEGORIES.map((category) => {
          const { name, title } = category;

          if(title !== 'MERJ Community') {

            return (
              <Link key={name} href={`/about/news/?category=${name}`}>
              <div className={styles.categoryLink}>
                <div className={styles.label}>{title}</div>
                <DropDownIcon className={styles.rightArrow} />
              </div>
            </Link>
          );
        } else {
          return (
            <div onClick={this.goToCommunity}>
              <Button >MERJ Community</Button>
            </div>
          )
        }
        })}
      </section>
    );
  }
}
