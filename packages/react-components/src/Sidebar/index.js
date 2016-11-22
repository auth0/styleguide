import React, { PropTypes } from 'react';

// Convert string to spinal tap case
// http://codereview.stackexchange.com/questions/109899/convert-string-to-spinal-case
const toSpinalTapCase = str =>
  str
    .replace(/(?!^)([A-Z])/g, ' $1')
    .replace(/[_\s]+(?=[a-zA-Z])/g, '-')
    .toLowerCase();

const renderMenu = (items, linkComponent, linkProps) =>
  <ul className="menu-list">
    { items.map(item =>
      <li className="menu-item" key={item.text}>
        {
          React.createElement(
            linkComponent,
            ...linkProps(item.text, item.url),
            <span className="menu-item-link" href={item.url || toSpinalTapCase(item.text)}>
              {item.iconCode && <span className={`menu-item-icon icon-budicon-${item.iconCode}`} />}
              <span className="text">{item.text}</span>
            </span>
          )
        }
        <ul className="menu-sublist">
          { item.children && item.children.map(subitem =>
            <li className="menu-subitem" key={subitem.text}>
              <a
                className="menu-subitem-link"
                href={subitem.url || toSpinalTapCase(subitem.text)}
              >
                {subitem.text}
              </a>
            </li>
          )}
        </ul>
      </li>
    )}
  </ul>;

/**
 * Sidebar: Styleguide sidebar with drop drown sections.
 */
const Sidebar = ({ header, items, linkComponent, linkProps }) =>
  <div className="a0r-sidebar">
    <header className="a0r-sidebar-header">
      { header ||
        <h1>
          <a href="/">
            <img src="https://cdn.auth0.com/styleguide/1.0.0/img/badge.svg" alt="Auth0 badge" width="30" height="" />
          </a>
        </h1>
      }
    </header>
    <nav className="a0r-sidebar-menu">{renderMenu(items, linkComponent, linkProps)}</nav>
    <footer className="a0r-sidebar-footer" />
  </div>;


Sidebar.propTypes = {
  /**
   * Element to replace default header content.
   */
  header: PropTypes.element,
  /**
   * List of objects representing the sidebar items
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.string,
    iconCode: PropTypes.number,
    open: PropTypes.bool,
    children: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string
    })).isRequired
  })).isRequired,
  /**
   * React component for the Link (use any router you want).
   */
  linkComponent: PropTypes.object.isRequired,
  /**
   * Function with item text and url as parameters that should return link props object.
   */
  linkProps: PropTypes.func.isRequired
};

export default Sidebar;
