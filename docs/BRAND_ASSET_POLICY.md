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
- [ ] Obtain Drive access and catalogue approved images.
- [ ] Integrate the approved company logo in navigation, footer, favicon, and social previews.
- [ ] Replace existing ZIP photo imports, validate image fallback components, and remove unapproved examples from public inventory.
- [ ] Design-system and Next.js App Router migration, followed by build/tests.

## Pending business verification

The original requirements contain an invalid email address (`info@tamarhomesglobal@gmail.com`). Do not publish it as a working contact method. Confirm the correct company mailbox. The phone/WhatsApp numbers in the brief are `07019669828` and `07032167195`.

This file documents implementation and verification status. It does not represent completion of production migration or sign-off for a public launch.
