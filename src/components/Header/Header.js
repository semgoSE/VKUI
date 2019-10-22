import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import PropTypes from 'prop-types';

const baseClassNames = getClassName('Header');

const Header = ({ className, level, children, indicator, aside, getRootRef, ...restProps }) => {
  return (
    <div
      {...restProps}
      ref={getRootRef}
      className={classNames(baseClassNames, className, { [`Header--level-${level}`]: true })}
    >
      <div className="Header__in">
        <div className="Header__content">{children}</div>
        {indicator && <div className="Header__indicator">{indicator}</div>}
        {aside && <div className="Header__aside">{aside}</div>}
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  level: PropTypes.oneOf(['primary', 'secondary']),
  indicator: PropTypes.node,
  aside: PropTypes.node,
  children: PropTypes.node,
  style: PropTypes.object,
  getRootRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ])
};

Header.defaultProps = {
  level: 'primary'
};

export default Header;
