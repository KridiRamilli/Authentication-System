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
    let emailRegex = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return emailRegex.test(email);
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

  //   setError(".signIn__password", "Your password is not correct");

  //Get elements
  const signIn = $(".overlay__right .form__submit");
  const signUp = $(".overlay__left .form__submit");
  const container = $(".container");

  //Activatiate animation
  signIn.addEventListener("click", (ev) => {
    container.classList.add("right__panel-active");
  });
  signUp.addEventListener("click", (ev) => {
    container.classList.remove("right__panel-active");
  });
})();
