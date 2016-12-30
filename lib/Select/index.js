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
    { className: "a0r-select" },
    label && _react2.default.createElement(
      "span",
      null,
      label
    ),
    _react2.default.createElement(
      "span",
      { className: "a0r-value text-truncate", style: { color: color } },
      options[selected].label
    ),
    _react2.default.createElement("i", { className: "icon-budicon-460" }),
    _react2.default.createElement(
      "select",
      {
        // Pass event and selected option object to onChange handler
        onChange: function onChange(e) {
          return handleChange(e, options.filter(function (opt) {
            return opt.value === e.target.value;
          })[0]);
        },
        value: options[selected].value
      },
      options.map(function (opt, index) {
        return _react2.default.createElement(
          "option",
          { key: index, value: opt.value },
          opt.label
        );
      })
    )
  );
};

Select.defaultProps = {
  selected: 0,
  label: '',
  handleChange: function handleChange() {}
};

Select.propTypes = {
  /**
   * List of options
   */
  options: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    label: _react.PropTypes.string.isRequired,
    value: _react.PropTypes.string.isRequired
  })).isRequired,
  /**
   * Index of default selected value
   */
  selected: _react.PropTypes.number,
  /**
   * Handler for option change, it receives two parameters:
   * the event and the selected option object.
   */
  handleChange: _react.PropTypes.func.isRequired,
  label: _react.PropTypes.string,
  color: _react.PropTypes.string
};

exports.default = Select;