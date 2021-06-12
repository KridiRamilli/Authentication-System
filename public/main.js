(function () {
  const $ = (elem) => {
    const element = document.querySelector(elem);
    return element;
  };

  //Get elements
  const signIn = $(".overlay__right .form__submit");
  const signUp = $(".overlay__left .form__submit");
  const container = $(".container");
  //   const email = $('sign')

  signIn.addEventListener("click", (ev) => {
    ev.preventDefault();
    container.classList.add("right__panel-active");
  });
  signUp.addEventListener("click", (ev) => {
    ev.preventDefault();
    container.classList.remove("right__panel-active");
  });
})();
