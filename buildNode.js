import PairedTag from './PairedTag';
import SingleTag from './SingleTag';

// BEGIN (write your solution here)
export default (name, attributes, body, children) => {
  const singleTagsList = new Set(['hr', 'img', 'br']);
  return singleTagsList.has(name) 
    ? new SingleTag(name, attributes) 
    : new PairedTag(name, attributes, body, children);
};
// END

// teacher's solution
const singleTagsList = new Set(['hr', 'br', 'img']);
export const bNode = (name, ...args) => {
  const C = singleTagsList.has(name) ? SingleTag : PairedTag;
  return new C(name, ...args);
};
