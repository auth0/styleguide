'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Convert string to spinal tap case
// http://codereview.stackexchange.com/questions/109899/convert-string-to-spinal-case
var toSpinalTapCase = function toSpinalTapCase(str) {
  return str.replace(/(?!^)([A-Z])/g, ' $1').replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase();
};

var renderMenu = function renderMenu(items, customLink, linkComponent, linkProps) {
  return _react2.default.createElement(
    'ul',
    { className: 'menu-list' },
    items.map(function (item) {
      return _react2.default.createElement(
        'li',
        { className: 'menu-item', key: item.text },
        customLink ? _react2.default.createElement(linkComponent, linkProps(item.url || toSpinalTapCase(item.text), item.text), _react2.default.createElement(
          'span',
          { className: 'menu-item-link' },
          item.iconCode && _react2.default.createElement('span', { className: 'menu-item-icon icon-budicon-' + item.iconCode }),
          _react2.default.createElement(
            'span',
            { className: 'text' },
            item.text
          )
        )) : _react2.default.createElement(
          'a',
          { className: 'menu-item-link', href: item.url || toSpinalTapCase(item.text) },
          item.iconCode && _react2.default.createElement('span', { className: 'menu-item-icon icon-budicon-' + item.iconCode }),
          _react2.default.createElement(
            'span',
            { className: 'text' },
            item.text
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'menu-sublist' },
          item.children && item.children.map(function (subitem) {
            return _react2.default.createElement(
              'li',
              { className: 'menu-subitem', key: subitem.text },
              _react2.default.createElement(
                'a',
                {
                  className: 'menu-subitem-link',
                  href: subitem.url || toSpinalTapCase(subitem.text)
                },
                subitem.text
              )
            );
          })
        )
      );
    })
  );
};

/**
 * Sidebar: Styleguide sidebar with drop drown sections.
 */
var Sidebar = function Sidebar(_ref) {
  var header = _ref.header,
      items = _ref.items,
      customLink = _ref.customLink,
      linkComponent = _ref.linkComponent,
      linkProps = _ref.linkProps;
  return _react2.default.createElement(
    'div',
    { className: 'a0r-sidebar' },
    _react2.default.createElement(
      'header',
      { className: 'a0r-sidebar-header' },
      header || _react2.default.createElement(
        'h1',
        null,
        _react2.default.createElement(
          'a',
          { href: '/' },
          _react2.default.createElement('img', { src: 'https://cdn.auth0.com/styleguide/1.0.0/img/badge.svg', alt: 'Auth0 badge', width: '30', height: '' })
        )
      )
    ),
    _react2.default.createElement(
      'nav',
      { className: 'a0r-sidebar-menu' },
      renderMenu(items, customLink, linkComponent, linkProps)
    ),
    _react2.default.createElement('footer', { className: 'a0r-sidebar-footer' })
  );
};

Sidebar.defaultProps = {
  customLink: false
};

Sidebar.propTypes = {
  /**
   * Element to replace default header content.
   */
  header: _react.PropTypes.element,
  /**
   * List of objects representing the sidebar items
   */
  items: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    text: _react.PropTypes.string.isRequired,
    url: _react.PropTypes.string,
    iconCode: _react.PropTypes.number,
    open: _react.PropTypes.bool,
    children: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      text: _react.PropTypes.string.isRequired,
      url: _react.PropTypes.string
    })).isRequired
  })).isRequired,
  /**
   * Replace items anchor for custom React element (useful when using SPA router).
   */
  customLink: _react.PropTypes.bool,
  /**
   * React component for the Link (use any router you want).
   */
  linkComponent: _react.PropTypes.func,
  /**
   * Function with item text and url as parameters that should return link props object.
   */
  linkProps: _react.PropTypes.func
};

exports.default = Sidebar;