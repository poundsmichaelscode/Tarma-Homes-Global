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
  it("keeps Lekki Phase 1 detached duplex as the third listing with 14 photos", () => {
    const property = properties[2];
    expect(property.slug).toBe("5-bedroom-detached-duplex-bq-cinema-rooftop-lekki-phase-1");
    expect(property.price).toBe(1_200_000_000);
    expect(property.bedrooms).toBe(5);
    expect(property.type).toBe("Detached House");
    expect(property.area).toBe("Lekki Phase 1");
    expect(property.amenities).toEqual(["Boys' quarters (BQ)", "Cinema", "Rooftop"]);
    expect(property.images).toHaveLength(14);
    expect(property.images[0]).toBe("/images/approved/lekki-phase-1-detached-duplex/exterior.webp");
  });

  it("lists the Lekki Phase 1 2-bedroom serviced apartment fourth with its 12 photos", () => {
    const property = properties[3];
    expect(property.slug).toBe("2-bedroom-serviced-apartment-with-elevator-lekki-phase-1");
    expect(property.price).toBe(300_000_000);
    expect(property.bedrooms).toBe(2);
    expect(property.type).toBe("Apartment");
    expect(property.amenities).toContain("Elevator");
    expect(property.images).toHaveLength(12);
    expect(property.images[0]).toBe("/images/approved/lekki-phase-1-two-bedroom-serviced-apartment/exterior.webp");
  });

  it("adds three priced Ikate development options without changing the original Ikate listing", () => {
    const options = properties.slice(4, 7);
    expect(options.map((property) => property.bedrooms)).toEqual([1, 2, 3]);
    expect(options.map((property) => property.price)).toEqual([180_000_000, 200_000_000, 350_000_000]);
    expect(options.every((property) => property.area === "Ikate, Lekki")).toBe(true);
    expect(options.every((property) => property.type === "Apartment")).toBe(true);
    expect(properties[0].price).toBe(250_000_000);
  });

  it("uses the same 12 development photos for all three options, with an exterior cover", () => {
    const options = properties.slice(4, 7);
    expect(options).toHaveLength(3);
    for (const property of options) {
      expect(property.images).toHaveLength(12);
      expect(property.images[0]).toBe("/images/approved/ikate-serviced-apartment-development/exterior.webp");
      expect(property.images).toEqual(options[0].images);
      expect(property.amenities).toEqual([]);
    }
  });

});
