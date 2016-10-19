/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Select from './';

const options = [
  'Gernot Linas',
  'Butrus Aziz',
  'Vladimir Gislin',
  'Kassandros Ekwueme',
  'Rashad Ariel'
];

describe('<Select />', () => {
  it('it should render a select element', () => {
    const wrapper = shallow(<Select />);
    expect(wrapper.find('select')).to.have.length(1);
  });
  it(`should render ${options.length} options`, () => {
    const wrapper = shallow(<Select options={options} />);
    expect(wrapper.find('select').find('option')).to.have.length(options.length);
  });
});
