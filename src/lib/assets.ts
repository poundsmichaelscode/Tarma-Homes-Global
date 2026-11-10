/**
 * Approved asset registry for Tamar Homes Global.
 *
 * Do not register ZIP archive photography, stock imagery, AI-generated imagery,
 * or unverified Drive links. Add verified asset paths only after approval.
 */
export const ASSET_SOURCES = [
  "https://drive.google.com/drive/folders/1SbVWJzrHxcNc5RNdRs18C-3vHLMSw_dy",
  "https://drive.google.com/drive/folders/1nbzKcXIxc9UHZAhwQstUVVjbAsuLWSNU",
  "https://drive.google.com/drive/folders/1ALlGaOOCJUW0MbQdk-WVY7S-0PXwS5i5",
] as const;

export const IMAGE_PENDING = "/images/image-pending.svg" as const;

export type ApprovedAsset = {
  src: `/images/approved/${string}`;
  alt: string;
  driveFileId: string;
  approved: true;
  propertySlug?: string;
};

/** Populate only after source, usage rights, and identity are verified. */
export const APPROVED_ASSETS: readonly ApprovedAsset[] = [];
