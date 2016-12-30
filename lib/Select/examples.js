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
    options: [{ label: 'Zoey Andrews', value: 'Zoey Andrews' }, { label: 'Jerry Woods', value: 'Jerry Woods' }, { label: 'Marion Garza', value: 'Marion Garza' }],
    selected: 2,
    handleChange: function handleChange(e) {
      console.log(e.target.value);
    },
    label: 'Select user'
  }),
  code: '<Select\n  options={[\n      { label: \'Zoey Andrews\', value: \'Zoey Andrews\' },\n      { label: \'Jerry Woods\', value: \'Jerry Woods\' },\n      { label: \'Marion Garza\', value: \'Marion Garza\' }\n    ]}\n  selected={2}\n  handleChange={(e) => { console.log(e.target.value); }}\n  label="Select user"\n/>',
  center: true,
  title: 'Default',
  showTitle: false,
  url: 'default'
}];

exports.default = examples;