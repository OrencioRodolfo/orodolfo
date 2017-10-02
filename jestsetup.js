// Make Enzyme functions available in all test files without importing
const { shallow, render, mount, configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const fetch = require('jest-fetch-mock');

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.fetch = fetch;
global.API_URL = 'http://www.sample.com';

configure({ adapter: new Adapter() });

// Fail tests on any warning
console.error = (message) => {
  throw new Error(message);
};
