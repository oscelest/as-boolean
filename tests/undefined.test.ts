import {asBoolean} from "../src";

test("Undefined: undefined", () => {
  expect(asBoolean(undefined)).toBe(false);
});

test("Undefined: null", () => {
  expect(asBoolean(null)).toBe(false);
});
