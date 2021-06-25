const { readFileSync, truncateSync } = require("fs");
const path = require("path");
const htmlData = readFileSync(
  path.join(__dirname, "../public/index.html"),
  "utf8"
);
document.body.innerHTML = htmlData;
const elements = require("../public/main");

beforeAll(() => {});

describe("Testing Input error validation", () => {
  test("Email Validation", () => {
    const { email, submit } = elements;
    email.value = "kridiramilli@gmailcom";
    submit.click();
    expect(email.parentNode.classList).toContain("error");
  });
  test.only("Password Validation", () => {
    const { password, submit } = elements;
    password.value = "Password5555";
    // expect(
    //   getComputedStyle(password.parentNode.querySelector("small")).visibility
    // ).toBe("hidden");
    submit.click();
    expect(password.parentNode).toBe("");
    expect(password.parentNode.classList).toContain("success");
  });
});

// const htmlElement = document.createElement("div")
