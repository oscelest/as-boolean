import {asBoolean} from "../src";

test("Function: any", () => {
  expect(asBoolean(() => {})).toBe(true);
});
