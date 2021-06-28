const { readFileSync, truncateSync } = require("fs");
const path = require("path");

let elements = null;

beforeAll(() => {
  const htmlData = readFileSync(
    path.join(__dirname, "../public/index.html"),
    "utf8"
  );
  document.body.innerHTML = htmlData;
  elements = require("../public/main");
});


describe("Unit", () => {
  test("Email Validation", () => {
    const { isEmailValid } = elements;
    expect(isEmailValid('kridiramilli@gmailcom')).toBe("Invalid email format, please enter a valid email!");
    expect(isEmailValid('kridiramilli@gmailco.m')).toBe("Invalid email format, please enter a valid email!");
    expect(isEmailValid('kridiramilli@gmail.com')).toBe(true);
  });
  test("Password Validation", () => {
    const { isPasswordValid } = elements;
    expect(isPasswordValid('kr4K')).toBe('Your password must be at least 6 characters long')
    expect(isPasswordValid('Password')).toBe('Your password must contain at least a Number')
    expect(isPasswordValid('password123')).toBe('Your password must contain at least a CAPITAL letter!')
    expect(isPasswordValid('Password123')).toBe(true)
  });
  test('Username Validation', () => {
    const {isUsernameValid} = elements;
    expect(isUsernameValid('kri')).toBe('Username must be at least 5 characters long')
    expect(isUsernameValid('Kridi123')).toBe('Username can not contain numbers!')
    expect(isUsernameValid('Kridi Ramilli')).toBe(true)
  })
  test('isConfirmPassword', () => {
    const {isConfirmPasswordValid} = elements;
    expect(isConfirmPasswordValid('Kridi123','kridi123')).toBe("Your passwords don't match")
    expect(isConfirmPasswordValid('Kridi123','Kridi123')).toBe(true)
  })
});

describe('Integration UI', () => {
  test('Input CSS Error', () => {
    const {username,email,password,confirmPassword,submit} = elements;
    //All inputs empty
    submit.click();
    expect(username.parentNode.classList).toContain('error')
    expect(email.parentNode.classList).toContain('error')
    expect(password.parentNode.classList).toContain('error')
    expect(confirmPassword.parentNode.classList).not.toContain('error')
  })
  
  test('Input CSS Success', () => {
    const {username,email,password,confirmPassword,submit} = elements;
    //All inputs valid
    username.value = 'Kridi Ramilli'
    email.value = "kridiramilli@gmail.com"
    password.value = 'Password123'
    confirmPassword.value = 'Password123'
    submit.click();
    expect(username.parentNode.classList).toContain('success')
    expect(email.parentNode.classList).toContain('success')
    expect(password.parentNode.classList).toContain('success')
    expect(confirmPassword.parentNode.classList).toContain('success')
  })
  
  test('Input Error Msg', () => {
    const {username,email,password,submit} = elements;
    username.value = 'Kridi12'
    email.value = 'kridiramilli@gmail'
    password.value= 'kridi123'
    submit.click();
    usernameErrMsg = username.parentNode.querySelector('small').innerHTML
    emailErrMsg = email.parentNode.querySelector('small').innerHTML
    passwordErrMsg = password.parentNode.querySelector('small').innerHTML
    expect(usernameErrMsg).toBe('Username can not contain numbers!')
    expect(emailErrMsg).toBe('Invalid email format, please enter a valid email!')
    expect(passwordErrMsg).toBe('Your password must contain at least a CAPITAL letter!')
  })
})

// const htmlElement = document.createElement("div")
