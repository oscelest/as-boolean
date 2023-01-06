import {asBoolean} from "../src";

test("Symbol: true", () => {
  expect(asBoolean(Symbol("true"))).toBe(true);
});

test("Symbol: false", () => {
  expect(asBoolean(Symbol("false"))).toBe(false);
});

test("Symbol: any", () => {
  expect(() => asBoolean(Symbol("any"))).toThrow();
});

test("Symbol: empty", () => {
  expect(asBoolean(Symbol(""))).toBe(false);
});
