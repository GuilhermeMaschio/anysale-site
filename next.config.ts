import path from "node:path";
import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  allowedDevOrigins: ["172.26.64.1"],
  output: "export",
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
