import { describe, expect, it } from "vitest";

describe("Criartes project logo", () => {
  it("is reachable from the configured public URL", async () => {
    const response = await fetch(
      "https://criartes.lol/assets/criartes-logo-transparent.png?v=2",
    );

    expect(response.ok).toBe(true);
    expect(response.headers.get("content-type")).toContain("image/png");
  }, 15_000);
});
