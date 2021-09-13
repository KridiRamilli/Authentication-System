const validateEmail = (email) => {
  let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return console.log(regEx.test(email));
};

module.exports = {
  validateEmail,
};
