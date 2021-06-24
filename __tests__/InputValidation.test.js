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

describe("Testing Input error validation", () => {
  test("Email Validation", () => {
    const { email, submit } = elements;
    email.value = "kridiramilli@gmailcom";
    submit.click();
    expect(email.parentNode.classList).toContain("error");
  });
  test.only("Password Validation", () => {
    const { password, submit } = elements;
    password.value = "Kridi553382";
    // expect(
    //   getComputedStyle(password.parentNode.querySelector("small")).visibility
    // ).toBe("hidden");
    submit.click();
    expect(password.parentNode).toBe("");
    expect(password.parentNode.classList).toContain("success");
  });
});

// const htmlElement = document.createElement("div")
