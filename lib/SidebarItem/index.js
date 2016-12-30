'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SidebarItem = function SidebarItem(_ref) {
  var text = _ref.text,
      wrapper = _ref.wrapper,
      arrow = _ref.arrow,
      icon = _ref.icon,
      children = _ref.children,
      open = _ref.open;

  var heightMenu = _react.Children.count(children) * 45 - 1;
  var WrapperItemChildren = function WrapperItemChildren() {
    return _react2.default.createElement(
      'span',
      { className: 'menu-item-link' },
      icon && _react2.default.createElement('span', { className: 'menu-item-icon icon-budicon-' + icon }),
      _react2.default.createElement(
        'span',
        { className: 'text' },
        text
      ),
      arrow && _react2.default.createElement('i', { className: 'icon-budicon-519 pull-right' })
    );
  };

  return _react2.default.createElement(
    'li',
    { className: 'a0r-sidebar-menu-item ' + (open ? 'active' : '') },
    (0, _react.cloneElement)(wrapper, { children: _react2.default.createElement(WrapperItemChildren, null) }),
    children ? _react2.default.createElement(
      'ul',
      {
        className: (0, _classnames2.default)('menu-sublist', { 'is-opened': open }),
        style: { height: heightMenu + 'px' }
      },
      children
    ) : null
  );
};

SidebarItem.propTypes = {
  /**
   * Text of the item.
   */
  text: _react.PropTypes.string.isRequired,
  /**
   * Wrapper element around the inner content of the item.
   */
  wrapper: _react.PropTypes.node,
  /**
   * Enable arrow icon.
   */
  arrow: _react.PropTypes.bool,
  /**
   * Show Item with an icon from Budicon.
   */
  icon: _react.PropTypes.number,
  /**
   * The content of the menu. This is usually used to pass SidebarSubitem elements.
   */
  children: _react.PropTypes.node,
  /**
   * Controls whether the subitems are showed or not.
   */
  open: _react.PropTypes.bool
};

SidebarItem.defaultProps = {
  wrapper: _react2.default.createElement('span', null)
};

exports.default = SidebarItem;