import { describe, expect, it } from "vitest";
import { getProperty, properties, filterProperties } from "./properties";

describe("Tamar Homes property catalogue", () => {
  it("preserves the Ikate apartment as the first property", () => {
    expect(properties[0].slug).toBe("3-bedroom-serviced-apartment-ikate");
    expect(properties[0].price).toBe(250_000_000);
  });

  it("lists the Orchid Lekki maisonette second with the supplied price and BQ", () => {
    const property = properties[1];
    expect(property.slug).toBe("3-bedroom-maisonette-with-bq-orchid-lekki");
    expect(property.title).toBe("3-Bedroom Maisonette with BQ");
    expect(property.price).toBe(160_000_000);
    expect(property.bedrooms).toBe(3);
    expect(property.area).toBe("Orchid, Lekki");
    expect(property.amenities).toContain("Boys' quarters (BQ)");
  });

  it("uses a full gallery of 13 owner-uploaded photos with exterior first", () => {
    const property = getProperty("3-bedroom-maisonette-with-bq-orchid-lekki");
    expect(property).toBeDefined();
    expect(property?.images).toHaveLength(13);
    expect(property?.images[0]).toBe("/images/approved/orchid-lekki-maisonette/exterior.webp");
    expect(property?.images.every((image) => image.startsWith("/images/approved/orchid-lekki-maisonette/"))).toBe(true);
  });

  it("filters maisonettes in Lagos correctly", () => {
    const results = filterProperties(properties, { city: "Lagos", type: "Maisonette" });
    expect(results.map((property) => property.slug)).toEqual(["3-bedroom-maisonette-with-bq-orchid-lekki"]);
  });
});
