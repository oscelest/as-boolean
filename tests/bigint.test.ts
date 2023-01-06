import {asBoolean} from "../src";

test("Bigint: 1", () => {
  expect(asBoolean(BigInt(1))).toBe(true);
});

test("Bigint: 0", () => {
  expect(asBoolean(BigInt(0))).toBe(false);
});

test("Bigint: -1", () => {
  expect(asBoolean(BigInt(-1))).toBe(false);
});

test("Bigint: 2", () => {
  expect(() => asBoolean(BigInt(2))).toThrow();
});

test("Bigint: -2", () => {
  expect(() => asBoolean(BigInt(-2))).toThrow();
});
