const add = require("./add");

test("should add two numbers", () => {
  expect(add(1, 2)).toBe(3);
});
test("should add three numbers", () => {
  expect(add(1, 2, 3)).toBe(6);
});
test("shoud add six numbers", () => {
  expect(add(1, 2, 3, 4, 5, 6)).toBe(21);
});
test("shoud return zero", () => {
  expect(add()).toBe(0);
});
