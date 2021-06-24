(function () {
  //Utils
  const $ = (elem) => {
    const element = document.querySelector(elem);
    return element;
  };

  const setError = (elem, msg = "*There was an error") => {
    const element = elem.parentNode;
    element.classList.remove("success");
    const msgElem = element.querySelector("small");
    element.classList.add("error");
    msgElem.innerText = msg;
  };

  const setSuccess = (elem) => {
    const element = elem.parentNode;
    element.classList.remove("error");
    element.classList.add("success");
  };

  const isEmailValid = (email) => {
    let errMsg = "";
    let emailRegex = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!emailRegex.test(email)) {
      errMsg = "Invalid email format, please enter a valid email!";
    }
    return errMsg || true;
  };

  const isPasswordValid = (pass) => {
    let errMsg = "";
    let capitalLetterRegex = new RegExp(/[A-Z]/);
    let numberRegex = new RegExp(/[0-9]/);

    switch (true) {
      case pass.length < 6:
        errMsg = "Your password must be at least 6 characters long";
        return errMsg;
      case !capitalLetterRegex.test(pass):
        errMsg = "Your password must contain at least a CAPITAL letter";
        return errMsg;
      case !numberRegex.test(pass):
        errMsg = "Your password must contain at least a Number";
        return errMsg;
      default:
        return true;
    }
  };

  const isConfirmPasswordValid = (confirmPass, pass) => {
    let errMsg = "";
    if (confirmPass !== pass) {
      errMsg = "Your passwords don't match";
      return errMsg;
    }

    return errMsg || true;
  };

  const isUsernameValid = (username) => {
    let errMsg = "";
    let numberRegex = new RegExp(/[0-9]/);
    if (username.length < 5) {
      errMsg = "Username must be at least 5 characters long";
      return errMsg;
    }
    if (numberRegex.test(username)) {
      errMsg = "Username can not contain numbers!";
    }
    return errMsg || true;
  };

  const checkInputs = (ev) => {
    ev.preventDefault();
    let checkUsername = isUsernameValid(username.value);
    let checkPassword = isPasswordValid(password.value);
    let checkConfirmPassword = isConfirmPasswordValid(
      confirmPassword.value,
      password.value
    );
    let checkEmail = isEmailValid(email.value);

    addValidationClass(checkUsername, username);
    addValidationClass(checkPassword, password);
    //prettier-ignore
    checkPassword === true && addValidationClass(checkConfirmPassword, confirmPassword);
    addValidationClass(checkEmail, email);
  };

  const addValidationClass = (check, input) => {
    if (check !== true) {
      setError(input, check);
    } else {
      setSuccess(input);
    }
  };

  //   setError(".signIn__password", "Your password is not correct");

  //Get elements for animations
  const signIn = $(".overlay__right .form__submit");
  const signUp = $(".overlay__left .form__submit");
  const container = $(".container");

  //Get elements for validation
  const username = $(".signUp__name");
  const password = $(".signUp__password");
  const confirmPassword = $(".signUp__confirmPassword");
  const email = $(".signUp__email");
  const submit = $(".signUp__submit");

  //Activatiate animation
  signIn.addEventListener("click", (ev) => {
    container.classList.add("right__panel-active");
  });
  signUp.addEventListener("click", (ev) => {
    container.classList.remove("right__panel-active");
  });

  //Activate Validation

  submit.addEventListener("click", checkInputs);

  //For testing access
  module.exports = {
    email,
    password,
    confirmPassword,
    username,
    submit,
  };
})();
