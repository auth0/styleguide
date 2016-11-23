"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Select: Drop-down list.
 */
var Select = function Select(_ref) {
  var options = _ref.options,
      selected = _ref.selected,
      label = _ref.label,
      color = _ref.color,
      handleChange = _ref.handleChange;
  return _react2.default.createElement(
    "div",
    { className: "select" },
    label && _react2.default.createElement(
      "span",
      null,
      label
    ),
    _react2.default.createElement(
      "span",
      { className: "value text-truncate", style: { color: color } },
      options[selected]
    ),
    _react2.default.createElement("i", { className: "icon-budicon-460" }),
    _react2.default.createElement(
      "select",
      {
        onChange: handleChange,
        value: options.reduce(function (prev, current, index) {
          if (index === selected) return index;
          return prev;
        })
      },
      options.map(function (name, index) {
        return _react2.default.createElement(
          "option",
          { key: index, value: index },
          name
        );
      })
    )
  );
};

Select.defaultProps = {
  options: ['Default'],
  selected: 0,
  label: '',
  handleChange: function handleChange() {}
};

Select.propTypes = {
  /**
   * List of options
   */
  options: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired,
  /**
   * Index of default selected value
   */
  selected: _react.PropTypes.number.isRequired,
  handleChange: _react.PropTypes.func.isRequired,
  label: _react.PropTypes.string,
  color: _react.PropTypes.string
};

exports.default = Select;