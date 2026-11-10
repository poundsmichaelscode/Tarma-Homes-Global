// @lovable.dev/vite-tanstack-config already registers the TanStack Start, React,
// Tailwind and Nitro plugins. Do not add duplicate plugins manually.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Vercel sets VERCEL=1 at build time. Without an explicit preset, the Lovable
// wrapper's default Nitro target can produce Cloudflare Worker output instead.
const isVercelBuild = Boolean(process.env.VERCEL);

export default defineConfig({
  tanstackStart: {
    // Keep the project's custom server entry for SSR error handling.
    server: { entry: "server" },
  },
  // Keep local/Lovable behavior, but emit Vercel-compatible server output in CI.
  nitro: isVercelBuild ? { preset: "vercel" } : true,
});
