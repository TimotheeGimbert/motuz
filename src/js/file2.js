const msgObject = {
  message: 'message from default-exported src/js/file2.js !'
};

const logMessage = (message) => {
  console.log(message);
}







export default { msgObject, logMessage };