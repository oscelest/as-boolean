import {asBoolean} from "../src";

test("Object: Array", () => {
  expect(asBoolean([1, 2, 3])).toBe(true);
});

test("Object: Empty Array", () => {
  expect(asBoolean([])).toBe(false);
});

test("Object: Buffer", () => {
  expect(asBoolean(Buffer.from("12345678"))).toBe(true);
});

test("Object: Empty Buffer", () => {
  expect(asBoolean(Buffer.from(""))).toBe(false);
});

test("Object: toBoolean object (true)", () => {
  expect(asBoolean({toBoolean: () => true})).toBe(true);
});

test("Object: toBoolean object (true)", () => {
  expect(asBoolean({toBoolean: () => false})).toBe(false);
});

test("Object: Date", () => {
  expect(asBoolean(new Date())).toBe(true);
});

test("Object: Empty Date", () => {
  expect(asBoolean(new Date(0))).toBe(false);
});

test("Object: Object", () => {
  expect(asBoolean({a: 1, b: 2})).toBe(true);
});

test("Object: Empty object", () => {
  expect(asBoolean({})).toBe(false);
});

