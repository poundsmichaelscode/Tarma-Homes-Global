import { describe, expect, it } from "vitest";
import { posts } from "./blog";

describe("Tamar Homes blog images", () => {
  it("assigns a distinct editorial photo to all six articles", () => {
    expect(posts).toHaveLength(6);
    expect(new Set(posts.map((post) => post.image)).size).toBe(posts.length);
    for (const post of posts) {
      expect(post.image).toMatch(/^https:\/\/images\.unsplash\.com\/photo-/);
      expect(post.imageAlt.length).toBeGreaterThan(12);
      expect(post.imageCredit).toContain("Unsplash");
      expect(post.imageSource).toMatch(/^https:\/\/unsplash\.com\/photos\//);
    }
  });

  it("uses an authentic Lagos editorial photo for the Lekki market article", () => {
    const post = posts.find((p) => p.slug === "what-drives-property-demand-along-the-lekki-corridor");
    expect(post?.imageAlt).toMatch(/Lekki–Ikoyi/);
    expect(post?.imageCredit).toContain("Tunde Buremo");
  });
});
