import * as assert from "node:assert";
import { describe, it } from "node:test";
import { sayHello } from "./main.ts";

describe("sayHello", () => {
  it("should work", () => {
    assert.equal(sayHello("World"), "Hello World!");
  });
});
