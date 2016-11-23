'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
var options = ['Gernot Linas', 'Butrus Aziz', 'Vladimir Gislin', 'Kassandros Ekwueme', 'Rashad Ariel'];

describe('<Select />', function () {
  it('it should render a select element', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, null));
    (0, _chai.expect)(wrapper.find('select')).to.have.length(1);
  });
  it('should render ' + options.length + ' options', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { options: options }));
    (0, _chai.expect)(wrapper.find('select').find('option')).to.have.length(options.length);
  });
});