import {asBoolean} from "../src";

test("Number: 1", () => {
  expect(asBoolean(1)).toBe(true);
});

test("Number: 0", () => {
  expect(asBoolean(0)).toBe(false);
});

test("Number: -1", () => {
  expect(asBoolean(-1)).toBe(false);
});

test("Number: NaN", () => {
  expect(asBoolean(NaN)).toBe(false);
});

test("Number: 2", () => {
  expect(() => asBoolean(2)).toThrow();
});

test("Number: -2", () => {
  expect(() => asBoolean(-2)).toThrow();
});
