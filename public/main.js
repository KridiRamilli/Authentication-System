(function () {
  //Utils
  const $ = (elem) => {
    const element = document.querySelector(elem);
    return element;
  };
  const setError = (elem, msg) => {
    const element = $(elem).parentNode;
    const msgElem = $(`${elem}~small`);
    element.classList.add("error");
    msgElem.innerText = msg;
  };

  const setSuccess = (elem) => {
    const element = $(elem).parentNode;
    element.classList.add("success");
  };

  const isEmailValid = (email) => {
    let msg = "";
    let emailRegex = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!emailRegex.test(email)) {
      msg = "Invalid email format, please enter a valid email!";
    }
    return msg || true;
  };

  isPasswordValid = (pass) => {
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

  isUsernameValid = (username) => {
    let msg = "";
    let numberRegex = new RegExp(/[0-9]/);
    if (username.length < 5) {
      msg = "Username must be at least 5 characters long";
      return msg;
    }
    if (numberRegex.test(username)) {
      msg = "Username can not contain numbers!";
    }
    return msg || true;
  };

  const checkInputs = (ev) => {
    ev.preventDefault();
    let checkUsername = isUsernameValid(username.value);
    let checkPassword = isPasswordValid(password.value);
    let checkConfirmPassword = isPasswordValid(confirmPassword.value);
    let checkEmail = isEmailValid(email.value);

    console.log([checkPassword, checkUsername, checkEmail]);
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
})();
