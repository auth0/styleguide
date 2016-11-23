'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var examples = [{
  component: _react2.default.createElement(_2.default, {
    options: ['Zoey Andrews', 'Jerry Woods', 'Marion Garza'],
    selected: 2,
    handleChange: function handleChange(e) {
      console.log(e.target.value);
    },
    label: 'Select user'
  }),
  code: '<Select\n  options={[\'Zoey Andrews\', \'Jerry Woods\', \'Marion Garza\']}\n  selected={2}\n  handleChange={(e) => { console.log(e.target.value); }}\n  label="Select user"\n/>',
  center: true,
  title: 'Default',
  showTitle: false,
  url: 'default'
}];

exports.default = examples;