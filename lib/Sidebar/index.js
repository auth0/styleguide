'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Sidebar = function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar() {
    _classCallCheck(this, Sidebar);

    var _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this));

    _this.toggleMenu = _this.toggleMenu.bind(_this);
    return _this;
  }

  _createClass(Sidebar, [{
    key: 'toggleMenu',
    value: function toggleMenu() {
      (0, _jquery2.default)(this.sidebarMenu).slideToggle();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          header = _props.header,
          items = _props.items,
          customLink = _props.customLink,
          linkComponent = _props.linkComponent,
          linkProps = _props.linkProps;

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
              _react2.default.createElement('img', { src: '', alt: 'Auth0 badge', width: '30', height: '' })
            )
          ),
          _react2.default.createElement(
            'button',
            { className: 'menu-toggle', onClick: this.toggleMenu },
            _react2.default.createElement('span', { className: 'icon-bar' }),
            _react2.default.createElement('span', { className: 'icon-bar' }),
            _react2.default.createElement('span', { className: 'icon-bar' })
          )
        ),
        _react2.default.createElement(
          'nav',
          { className: 'a0r-sidebar-menu', ref: function ref(elem) {
              return _this2.sidebarMenu = elem;
            } },
          renderMenu(items, customLink, linkComponent, linkProps)
        ),
        _react2.default.createElement('footer', { className: 'a0r-sidebar-footer' })
      );
    }
  }]);

  return Sidebar;
}(_react2.default.Component);

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