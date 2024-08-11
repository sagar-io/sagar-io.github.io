/** @type {import('next').NextConfig} */
import withBundleAnalyzer from "@next/bundle-analyzer";
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const nextConfig = {
  output: "export", // Outputs a Single-Page Application (SPA).
  distDir: "./dist", // Changes the build output directory to `./dist/`.
};

// Configure the bundle analyzer
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

// Export the configuration with the bundle analyzer applied
export default bundleAnalyzer(nextConfig);
