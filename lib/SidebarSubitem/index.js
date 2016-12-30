"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SidebarSubitem = function SidebarSubitem(_ref) {
  var text = _ref.text,
      wrapper = _ref.wrapper;

  var WrapperSubitemChildren = function WrapperSubitemChildren() {
    return _react2.default.createElement(
      "span",
      { className: "menu-subitem-link" },
      _react2.default.createElement(
        "span",
        { className: "text" },
        text
      )
    );
  };

  return _react2.default.createElement(
    "li",
    { className: "a0r-sidebar-menu-subitem" },
    (0, _react.cloneElement)(wrapper, { children: _react2.default.createElement(WrapperSubitemChildren, null) })
  );
};

SidebarSubitem.propTypes = {
  /**
   * Text of the item.
   */
  text: _react.PropTypes.string.isRequired,
  /**
   * Wrapper element around the inner content of the item.
   */
  wrapper: _react.PropTypes.node
};

SidebarSubitem.defaultProps = {
  wrapper: _react2.default.createElement("span", null)
};

exports.default = SidebarSubitem;