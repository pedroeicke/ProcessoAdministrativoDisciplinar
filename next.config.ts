import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 default qualities = [75]. Liberamos níveis maiores para as
    // fotos dos professores não saírem recomprimidas demais.
    qualities: [75, 90, 100],
  },
};

export default nextConfig;
