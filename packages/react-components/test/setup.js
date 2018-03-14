/* Configure Mocha test runner, see package.json/scripts/test */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

process.env.NODE_ENV = 'test';

function noop() {
  return null;
}

require.extensions['.styl'] = noop;
