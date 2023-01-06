import {asBoolean} from "../src";

test("String: 1", () => {
  expect(asBoolean("1")).toBe(true);
});

test("String: +", () => {
  expect(asBoolean("+")).toBe(true);
});

test("String: y", () => {
  expect(asBoolean("y")).toBe(true);
});

test("String: yes", () => {
  expect(asBoolean("yes")).toBe(true);
});

test("String: true", () => {
  expect(asBoolean("true")).toBe(true);
});

test("String: TRUE", () => {
  expect(asBoolean("TRUE")).toBe(true);
});

test("String: 0", () => {
  expect(asBoolean("0")).toBe(false);
});

test("String: -", () => {
  expect(asBoolean("-")).toBe(false);
});

test("String: n", () => {
  expect(asBoolean("no")).toBe(false);
});

test("String: no", () => {
  expect(asBoolean("no")).toBe(false);
});

test("String: false", () => {
  expect(asBoolean("false")).toBe(false);
});

test("String: FALSE", () => {
  expect(asBoolean("FALSE")).toBe(false);
});

test("String: any", () => {
  expect(() => asBoolean("any")).toThrow();
});
