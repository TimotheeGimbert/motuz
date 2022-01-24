import '../style/index.scss';
import { msgObject, logMessage } from './file1';
import tool from './file2';

const testBabel = () => {
  console.log('Babel should transform this arrow function for ES5 in /dist bundled js file');
};
console.log('Hello');
testBabel();

logMessage(msgObject.message);

tool.logMessage(tool.msgObject.message);