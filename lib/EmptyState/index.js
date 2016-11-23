"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Empty state: Simple component for onboarding users to sections with no data.
 */
var EmptyState = function EmptyState(_ref) {
  var title = _ref.title,
      description = _ref.description,
      iconCode = _ref.iconCode,
      image = _ref.image,
      children = _ref.children;
  return _react2.default.createElement(
    "div",
    { className: "empty-state" },
    _react2.default.createElement(
      "h2",
      { className: "empty-state-title" },
      title
    ),
    image || _react2.default.createElement(
      "div",
      { className: "empty-state-icon" },
      _react2.default.createElement("i", { className: "icon-budicon-" + iconCode })
    ),
    description && _react2.default.createElement(
      "p",
      { className: "empty-state-description" },
      description
    ),
    _react2.default.createElement(
      "div",
      { className: "empty-state-children" },
      " ",
      children,
      " "
    )
  );
};

EmptyState.propTypes = {
  title: _react.PropTypes.string.isRequired,
  description: _react.PropTypes.string.isRequired,
  iconCode: _react.PropTypes.string,
  image: _react.PropTypes.node,
  children: _react.PropTypes.node
};

exports.default = EmptyState;