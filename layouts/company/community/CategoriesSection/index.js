import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { MdArrowDropDown as DropDownIcon } from 'react-icons/md';

import CATEGORIES from '../categories';
import helpers from '../../../../static/styles/helpers.scss';
import styles from './styles.scss';

export default class CategoriesSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {
    pathname: PropTypes.string,
  };

  static defaultProps = {};

  render() {
    const { pathname } = this.props;

    return (
      <section className={`${styles.categoriesSection} animate`}>
        <h2 className={helpers.componentHeader}>OTHER NEWS CATEGORIES</h2>

        <Link href={pathname}>
          <div className={styles.categoryLink}>
            <div className={styles.label}>All news</div>
            <DropDownIcon className={styles.rightArrow} />
          </div>
        </Link>

        {CATEGORIES.map((category) => {
          const { name, title } = category;
          if(title !== 'MERJ Community') {

            return (
              <Link key={name} href={`${pathname}/?category=${name}`}>
              <div className={styles.categoryLink}>
                <div className={styles.label}>{title}</div>
                <DropDownIcon className={styles.rightArrow} />
              </div>
            </Link>
          );
        } else {
          return null;
        }
        })}
      </section>
    );
  }
}
