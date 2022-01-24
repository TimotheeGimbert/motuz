import '../style/index.scss';
const testBabel = () => {
  console.log('Babel should transform this arrow function for ES5 in /dist bundled js file');
};
console.log('Hello');
testBabel();

import { msgObject, logMessage } from './file1';
logMessage(msgObject.message);

import tool from './file2';
tool.logMessage(tool.msgObject.message);

import dayjs from 'dayjs';
console.log(dayjs().format('MMMM DD YYYY')); 
console.log(dayjs().subtract(10, 'days').format('DD/MM/YYYY'));

console.log(" >>>>>>>>>>>>>>>>< DOTENV .env secret variable (DONT PUSH IT, PLACE INTO .gitignore) : ", process.env.mySecretVar);