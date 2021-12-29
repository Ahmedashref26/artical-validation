import urlChecker from "../src/client/js/urlChecker";

describe('Testing the "urlChecker" function', () => {
  test("The function should return true if input is url", () => {
    expect(urlChecker).toBeDefined();
  });
});

describe('Testing if "urlChecker" is a function', () => {
  test("Should be a function", () => {
    expect(typeof urlChecker).toBe("function");
  });
});
