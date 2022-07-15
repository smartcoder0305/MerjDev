import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './styles.scss';

const Wrapper = ({ link, children }) => {
  if (link) {
    const { href, as } = link;

    return (
      <Link href={href} as={as}>
        {children}
      </Link>
    );
  }

  return children;
};

const Button = ({
  handleClick,
  text,
  secondary,
  ghost,
  light,
  dark,
  href,
  newTab,
  link,
  children,
}) => {
  
  const className = secondary ? 'secondary' : ghost ? 'ghost' : 'primary';
  const additionalClassName = light ? 'light' : dark ? 'dark' : null;
  const btns = 'btn'
  const classNames = `${btns} ${className} ${additionalClassName}`;
  const contentComponent = (
    <Fragment>
      {children}

      <div>{text}</div>
    </Fragment>
  );

  if (href) {
    return (
      <a
        href={href}
        target={newTab ? '_blank' : null}
        rel={newTab ? 'noopener noreferrer' : null}
        className={classNames}
      >
        {contentComponent}
      </a>
    );
  }

  return (
    <Wrapper link={link}>
      <button
        type="button"
        tabIndex={0} // accessibility - focus
        onClick={handleClick}
        onKeyDown={handleClick} // accessibility - key event
        className={classNames}
        aria-label="Button"
      >
        {contentComponent}
      </button>
    </Wrapper>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func, // as click event
  text: PropTypes.string,
  secondary: PropTypes.bool,
  ghost: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  href: PropTypes.string, // as anchor
  newTab: PropTypes.bool,
  link: PropTypes.shape({
    // as next link
    href: PropTypes.string,
    as: PropTypes.string,
  }),
  children: PropTypes.node,
};
Button.defaultProps = {};

export default Button;
