import React, { cloneElement, Children } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const SidebarItem = ({ text, wrapper, arrow, icon, children, open }) => {
  const heightMenu = Children.count(children) * 45 - 1;
  const WrapperItemChildren = () =>
    <span className="menu-item-link">
      {icon && <span className={`menu-item-icon icon-budicon-${icon}`} />}
      <span className="text">{text}</span>
      {arrow && <i className="icon-budicon-519 pull-right" />}
    </span>;

  return (
    <li className={`a0r-sidebar-menu-item ${open ? 'active' : ''}`}>
      {cloneElement(wrapper, { children: <WrapperItemChildren /> })}
      {children
        ? <ul
            className={cx('menu-sublist', { 'is-opened': open })}
            style={{ height: `${heightMenu}px` }}
          >
            {children}
          </ul>
        : null}
    </li>
  );
};

SidebarItem.propTypes = {
  /**
   * Text of the item.
   */
  text: PropTypes.string.isRequired,
  /**
   * Wrapper element around the inner content of the item.
   */
  wrapper: PropTypes.node,
  /**
   * Enable arrow icon.
   */
  arrow: PropTypes.bool,
  /**
   * Show Item with an icon from Budicon.
   */
  icon: PropTypes.number,
  /**
   * The content of the menu. This is usually used to pass SidebarSubitem elements.
   */
  children: PropTypes.node,
  /**
   * Controls whether the subitems are showed or not.
   */
  open: PropTypes.bool
};

SidebarItem.defaultProps = {
  wrapper: <span />
};

export default SidebarItem;
