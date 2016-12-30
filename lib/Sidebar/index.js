'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sidebar: Styleguide sidebar with drop drown sections.
 */
var Sidebar = function Sidebar(_ref) {
  var children = _ref.children,
      header = _ref.header,
      mobileNavOpen = _ref.mobileNavOpen,
      toggleNavOnClick = _ref.toggleNavOnClick;

  // TODO: 57px is the height of SidebarItem.
  // Get the height from a json file generated with:
  // https://github.com/nahody/postcss-export-vars
  var heightMenu = _react.Children.count(children) * 57;

  return _react2.default.createElement(
    'div',
    { className: 'a0r-sidebar' },
    _react2.default.createElement(
      'header',
      { className: 'a0r-sidebar-header' },
      header || _react2.default.createElement(
        'h1',
        { className: 'default-title' },
        _react2.default.createElement(
          'a',
          { className: 'default-link', href: '/' },
          _react2.default.createElement('img', {
            src: 'https://cdn.auth0.com/styleguide/latest/img/badge.svg',
            alt: 'Auth0 logo',
            width: '30'
          })
        )
      ),
      _react2.default.createElement(
        'button',
        {
          type: 'button',
          className: (0, _classnames2.default)('menu-toggle', { 'is-close': mobileNavOpen }),
          onClick: toggleNavOnClick
        },
        _react2.default.createElement(
          'span',
          { className: 'sr-only' },
          'Toggle navigation'
        ),
        _react2.default.createElement('span', { className: 'icon-bar' }),
        _react2.default.createElement('span', { className: 'icon-bar' }),
        _react2.default.createElement('span', { className: 'icon-bar' }),
        _react2.default.createElement('span', { className: 'icon-bar' })
      )
    ),
    _react2.default.createElement(
      'nav',
      { className: 'a0r-sidebar-menu' },
      _react2.default.createElement(
        'ul',
        {
          className: (0, _classnames2.default)('menu-list', { 'is-opened': mobileNavOpen }),
          style: { height: heightMenu + 'px' }
        },
        children
      )
    )
  );
};

Sidebar.propTypes = {
  /**
   * Element to replace the default header content.
   */
  header: _react.PropTypes.node,
  /**
   * The content of the menu. This is usually used to pass SidebarItem and SidebarSubitem elements.
   */
  children: _react.PropTypes.node.isRequired,
  /**
   * Controls whether the navigation is opened or not, only used for mobile.
   */
  mobileNavOpen: _react.PropTypes.bool,
  /**
   * Callback fired when on mobile the Toggle Navigation button is pressed.
   */
  toggleNavOnClick: _react.PropTypes.func
};

Sidebar.defaultProps = {
  open: false,
  toggleNavOnClick: function toggleNavOnClick() {}
};

exports.default = Sidebar;