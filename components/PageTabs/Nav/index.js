import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Nav = ({ sections, activeSectionID, handleClick }) => {
  return (
    <div id="nav-inner" className={styles.inPageNavWrapper}>
      <ul>
        {sections.map((section) => {
          const itemClassName = section.id === activeSectionID ? styles.active : null;

          return (
            <li key={section.id} className={itemClassName}>
              <button type="button" onClick={() => handleClick(section.id)} aria-label="Open menu">
                {section.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Nav.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
  activeSectionID: PropTypes.string,
  handleClick: PropTypes.func,
};
Nav.defaultProps = {};

export default Nav;
