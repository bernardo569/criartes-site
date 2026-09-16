import { describe, expect, it } from "vitest";

describe("Criartes project logo", () => {
  it("is reachable from the configured public URL", async () => {
    const response = await fetch(
      "http://localhost:3000/assets/criartes-google-logo.png?v=4",
    );

    expect(response.ok).toBe(true);
    expect(response.headers.get("content-type")).toContain("image/png");
  }, 15_000);
});
