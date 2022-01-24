const msgObject = {
  message: 'message from named-exported src/js/file1.js !'
};

const logMessage = (message) => {
  console.log(message);
}







export { msgObject, logMessage };