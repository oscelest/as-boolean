import {asBoolean} from "../src";

test("Boolean: true", () => {
  expect(asBoolean(true)).toBe(true);
});

test("Boolean: false", () => {
  expect(asBoolean(false)).toBe(false);
});
