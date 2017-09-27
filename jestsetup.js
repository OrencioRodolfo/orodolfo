// Make Enzyme functions available in all test files without importing
const { shallow, render, mount, configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

global.shallow = shallow;
global.render = render;
global.mount = mount;

configure({ adapter: new Adapter() });

// Fail tests on any warning
console.error = (message) => {
  throw new Error(message);
};
