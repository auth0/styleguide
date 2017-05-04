import React, { Children, PropTypes } from 'react';
import cx from 'classnames';

/**
 * Sidebar: Styleguide sidebar with drop drown sections.
 */
const Sidebar = ({ children, header, mobileNavOpen, toggleNavOnClick }) => {
  // TODO: 57px is the height of SidebarItem.
  // Get the height from a json file generated with:
  // https://github.com/nahody/postcss-export-vars
  const heightMenu = Children.count(children) * 57;

  return (
    <div className="a0r-sidebar">
      <header className="a0r-sidebar-header">
        {header || (
          <h1 className="default-title">
            <a className="default-link" href="/">
              <img
                src="https://cdn.auth0.com/styleguide/components/1.0.8/media/logos/img/badge.svg"
                alt="Auth0 logo"
                width="30"
              />
            </a>
          </h1>
        )}
        <button
          type="button"
          className={cx('menu-toggle', { 'is-close': mobileNavOpen })}
          onClick={toggleNavOnClick}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </header>
      <nav className="a0r-sidebar-menu">
        <ul
          className={cx('menu-list', { 'is-opened': mobileNavOpen })}
          style={{ height: `${heightMenu}px` }}
        >{children}</ul>
      </nav>
    </div>
  );
};

Sidebar.propTypes = {
  /**
   * Element to replace the default header content.
   */
  header: PropTypes.node,
  /**
   * The content of the menu. This is usually used to pass SidebarItem and SidebarSubitem elements.
   */
  children: PropTypes.node.isRequired,
  /**
   * Controls whether the navigation is opened or not, only used for mobile.
   */
  mobileNavOpen: PropTypes.bool,
  /**
   * Callback fired when on mobile the Toggle Navigation button is pressed.
   */
  toggleNavOnClick: PropTypes.func
};

Sidebar.defaultProps = {
  open: false,
  toggleNavOnClick: () => {}
};

export default Sidebar;
