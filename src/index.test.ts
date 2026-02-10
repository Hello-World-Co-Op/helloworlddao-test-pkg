import { describe, it } from "node:test";
import assert from "node:assert";
import { hello } from "./index.js";

describe("test-pkg", () => {
  it("hello returns expected string", () => {
    assert.strictEqual(hello(), "Hello from test package");
  });
});
