const { mergeArrays, palindrome, fiftyPercent } = require("./utils");

describe("utils", () => {
  it("should fiftyPercent return the result with the percent applied", () => {
    expect(fiftyPercent(50)).toBe(25);
  });

  it("should fiftyPercent return the result with a zero value", () => {
    expect(fiftyPercent(0)).toBe(0);
  });

  it("should palindrome return true with a palindrome word", () => {
    expect(palindrome("abba")).toBe(true);
  });

  it("should palindrome return false with a not palindrome word", () => {
    expect(palindrome("abc")).toBe(false);
  });

  it("should palindrome return false with a short word (les than 3 characters)", () => {
    expect(palindrome("a")).toBe(false);
  });

  it("should mergeArrays join two different arrays", () => {
    const array1 = [0, 0, 2, 4, 6];
    const array2 = [2, 6, 8];
    const expectedArray = [0, 2, 4, 6, 8];

    const finalArray = mergeArrays(array1, array2);

    expect(finalArray).toStrictEqual(expectedArray);
  });

});
