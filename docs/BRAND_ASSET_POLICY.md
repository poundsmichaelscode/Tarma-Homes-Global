# Tamar Homes Global — Asset and Brand Implementation Policy

## Source of truth

- Company name: **Tamar Homes Global**. Tagline: **Luxury Homes. Ambitious Living.**
- Brand tokens: purple `#8e1fa5`, leaf green `#22be45`, black `#000000`, white `#ffffff`.
- Use **only expressly approved company photographs sourced from the two designated Google Drive folders** and subsequent owner-supplied images.
- **Do not use any photographs or sample listings supplied in the ZIP archive** as live website content. Do not add stock, AI-generated, or invented image URLs.
- The current repository originated from a TanStack Start / Lovable application. Preserve the current implementation in `main`; perform framework migration only on a development branch and avoid rewriting published Git history.

## Approved asset sources (pending accessible download/verification)

1. https://drive.google.com/drive/folders/1SbVWJzrHxcNc5RNdRs18C-3vHLMSw_dy
2. https://drive.google.com/drive/folders/1nbzKcXIxc9UHZAhwQstUVVjbAsuLWSNU

**Access blocker:** the Drive folder contents are not yet accessible within the current development connection. No Drive image has been downloaded or claimed as approved.

## Additional approved property source

3. https://drive.google.com/drive/folders/1ALlGaOOCJUW0MbQdk-WVY7S-0PXwS5i5?usp=sharing — intended first listing, awaiting accessible verified photographs and property description.

The **logo** was supplied as a direct conversation attachment, not as a ZIP archive asset. A reduced-size copy of that actual supplied logo is embedded into `public/tamar-logo.svg` and is used for the navigation, footer and favicon. This needs higher-resolution replacement for a final production deployment.

## Asset intake protocol

1. Obtain access to the specific Drive folder or receive an explicit export from it.
2. Record original filename, Google Drive source, owner approval, property identifier (if applicable), descriptive alt text, and license/usage approval.
3. Verify property listing details (price, location, availability, amenities, and title documents) independently with the company before publishing.
4. Copy only approved images to `public/images/approved/` using clear, stable filenames.
5. Expose them through a centralized typed manifest rather than scattering hardcoded image paths across components.
6. Display an accessible neutral placeholder for records with no approved photographs; do not silently fall back to ZIP photos.
7. Keep any draft, unverified property records out of publicly advertised active inventory.

## Implementation work

- [x] Recheck GitHub baseline and create a separate development branch.
- [x] Document official palette and no-ZIP-photo policy.
- [ ] Obtain Drive access and catalogue approved images, including the first-property folder.
- [x] Integrate the directly supplied company logo in navigation, footer and favicon (small embedded copy; optimize/revalidate for production).
- [ ] Configure social preview artwork using a high-resolution approved asset.
- [x] Replace direct ZIP photo imports in principal pages and data files with an explicit neutral placeholder.
- [ ] Remove unverified demonstration listing information from public inventory.
- [ ] Design-system and Next.js App Router migration, followed by build/tests.

## Pending business verification

The original requirements contain an invalid email address (`info@tamarhomesglobal@gmail.com`). Do not publish it as a working contact method. Confirm the correct company mailbox. The phone/WhatsApp numbers in the brief are `07019669828` and `07032167195`.

This file documents implementation and verification status. It does not represent completion of production migration or sign-off for a public launch.

## Hero image and first listing (2026-11-08)

The homepage hero is an **illustrative** contemporary apartment-building photograph sourced from Unsplash. It is not an image of Tamar Homes inventory or the Ikate apartment.

- Credit: Aalo Lens (Unsplash)
- Source: https://unsplash.com/photos/modern-apartment-building-with-balconies-and-greenery-B9OMpxCdrlc
- Image: https://images.unsplash.com/photo-1758193431351-68538bf55ec3
- License: https://unsplash.com/license

The *only* active listing in the development catalogue is **3-Bedroom Serviced Apartment with Elevator & Pool**, Ikate, Lekki, Lagos — **₦250,000,000**, **3 bedrooms**, **elevator**, **swimming pool**. These facts were provided by the user. Bathroom count, square footage, parking, specific address, title documents, and the actual photography are awaiting confirmation. No unverified sample listings should appear in public inventory.

User-supplied first-property Drive source:
https://drive.google.com/drive/folders/1oyyH-zRR1-iRCRHTT5JJMcK_fS3EdERy?usp=sharing

The folder could not be read via the available unauthenticated web access, so the listing uses a clearly labelled neutral placeholder **until the approved property photo is imported**. Do not use the illustrative hero image on property cards.

## Owner-uploaded Ikate property gallery (2026-11-08)

The owner provided 12 original property photos directly in this chat. The listing now references their optimized, orientation-corrected WebP equivalents, in gallery order:

- `exterior.webp` — exterior photograph (primary listing cover)
- `gallery-02.webp` through `gallery-12.webp` — owner-supplied interior photographs

Destination: `public/images/approved/ikate-serviced-apartment/`.

**Binary asset delivery blocker:** the GitHub text-file connector supports updates to code but cannot read local binary files in this execution environment. The optimized WebP gallery is therefore bundled separately as `Tamar-Homes-Ikate-Property-Images.zip`. Extract the archive into the checked-out repository root before publishing or merging the PR. Until those files are present, listing images fall back to a neutral placeholder.

Social links now appear in the footer for Instagram `@tamarhomes` and YouTube `Tamarhomes`. Verify the channel handle resolves to the intended brand profile before launch.

## Second property — Orchid Lekki maisonette (2026-11-08)

The owner supplied the following listing details: **3-Bedroom Maisonette with BQ**, **Orchid, Lekki, Lagos**, **₦160,000,000**. Type is recorded as Maisonette; BQ is listed as an amenity. Bathrooms, parking, floor area, exact street and title documents require further verification.

Thirteen photographs were uploaded directly in the conversation, with the building exterior as the cover. The source photograph order and optimized WebP filenames are:

1. `IMG_2734.JPG.jpeg` → `exterior.webp` (cover)
2. `IMG_2729.JPG(1).jpeg` → `gallery-02.webp`
3. `IMG_2728.JPG(1).jpeg` → `gallery-03.webp`
4. `IMG_2736.JPG(1).jpeg` → `gallery-04.webp`
5. `IMG_2735.JPG(1).jpeg` → `gallery-05.webp`
6. `IMG_2733.JPG(1).jpeg` → `gallery-06.webp`
7. `IMG_2731.JPG.jpeg` → `gallery-07.webp`
8. `IMG_2720.JPG.jpeg` → `gallery-08.webp`
9. `IMG_2722.JPG.jpeg` → `gallery-09.webp`
10. `IMG_2732.JPG.jpeg` → `gallery-10.webp`
11. `IMG_2723.JPG.jpeg` → `gallery-11.webp`
12. `IMG_2724.JPG.jpeg` → `gallery-12.webp`
13. `IMG_2721.JPG.jpeg` → `gallery-13.webp`

Install into `public/images/approved/orchid-lekki-maisonette/` and verify 13 WebP files. This code branch references the photos, but the binary image files must be added to GitHub separately using the supplied asset archive `Tamar-Homes-Orchid-Lekki-Maisonette-Images.zip`. Until then, the existing image fallback shows a neutral placeholder.

The Ikate serviced apartment remains first in the catalogue. The Orchid maisonette is second, and both are marked featured.

### Verification status

- Catalogue order, category, photo paths and listing data have source tests in `src/data/properties.test.ts`.
- A local production build and test execution have not yet been confirmed.
- Neither property photo archive has been automatically uploaded to the GitHub repository.

## New approved brand logo / favicon (2026-11-08)

The owner approved the newly generated transparent Tamar Homes horizontal wordmark and a square green-purple house-mark favicon, adapted from their supplied official logo.

- Header and footer: `public/tamar-logo.png` (transparent, responsive, contained; footer placed on white for contrast).
- Browser tab: `public/favicon.ico` and `public/favicon-32x32.png`.
- High-resolution icon: `public/favicon-192x192.png`, `public/favicon.png`.
- Touch icon: `public/apple-touch-icon.png`.
- HTML icon links use `?v=2` to avoid stale favicons.
- Binary asset pack: `Tamar-Homes-Brand-Assets.zip`. Extract this pack into the repository root, preserving the `public/` directory structure, and commit the files.

**Important:** Code references were committed to the development branch, but this tool connection cannot directly upload the generated binary images into GitHub. Images will not display until the ZIP assets are added and pushed to the branch. Do not merge before verifying both image rendering and favicons on desktop/mobile.

## Third property — Lekki Phase 1 detached duplex (2026-11-08)

User-supplied description: **5-Bedroom Detached Duplex with BQ, Cinema & Rooftop**, **Lekki Phase 1, Lagos**, **₦1,200,000,000**. No claims were made about bathrooms, floor area, land size, exact address, parking capacity, or property documentation.

The user uploaded 14 photo files directly in the chat. The first exterior photograph is the listing cover; the remaining 13 files are gallery slots. Both uploaded files `IMG_0666 (1).jpg` and `IMG_0666.jpg` appear to depict the same scene, so a future gallery curation pass may remove one duplicate.

Image path in project: `public/images/approved/lekki-phase-1-detached-duplex/`.

Install `Tamar-Homes-Lekki-Phase-1-Duplex-Images.zip` at the repository root to populate those paths. **Images have been packaged locally but are not yet uploaded to GitHub.** The code paths and test were committed to `feat/tamar-brand-asset-foundation` only. Validate the local build after installing assets and before merging.

## Fifth property development — Ikate, Lekki (2026-11-08)

The user submitted **12 photographs** of a serviced apartment development in Ikate, Lekki. Their pricing is for three distinct configurations: **1-bedroom ₦180 million**, **2-bedroom ₦200 million**, **3-bedroom ₦350 million**. These are three catalogue entries, not one unit priced at three amounts.

- Slugs: `1-bedroom-serviced-apartment-ikate-development`, `2-bedroom-serviced-apartment-ikate-development`, `3-bedroom-serviced-apartment-ikate-development`
- Shared photo folder: `public/images/approved/ikate-serviced-apartment-development/`
- Gallery: `exterior.webp` (source `IMG_2457.jpg`) plus `gallery-02.webp` to `gallery-12.webp` (11 other user-supplied photos).
- Asset ZIP: `Tamar-Homes-Ikate-Development-Photos.zip`; extract at the repository root.
- Photography is representative of the overall **development** and not identified as belonging to any particular 1-, 2-, or 3-bedroom unit. Do not claim that specific room images belong to one configuration.
- No elevator, pool, parking, bathroom count, square footage, exact address, title documents or completion date were supplied for this development. These details are deliberately not claimed.
- The existing **₦250m 3-bedroom Ikate apartment** is a *separate earlier listing* and remains unchanged.
- Code references were committed to the development branch, but actual binary images must be installed and pushed separately before the gallery renders without placeholders.
