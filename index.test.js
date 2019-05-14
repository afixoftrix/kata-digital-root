const digroot = require("./index");

test("digital root of 1", () => {
    expect(digroot(1)).toBe(1);
});
test("digital root of 10", () => {
    expect(digroot(10)).toBe(1);
});
test("digital root of 11", () => {
    expect(digroot(11)).toBe(2);
});
test("digital root of 111", () => {
    expect(digroot(111)).toBe(3);
});
test("digital root of 123", () => {
    expect(digroot(123)).toBe(6);
});
test("digital root of 923", () => {
    expect(digroot(456)).toBe(6);
});